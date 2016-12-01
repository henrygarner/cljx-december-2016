(ns thi.ng.color.core
  #?(:cljs
  (:require-macros
   [thi.ng.math.macros :as mm]))
  (:require
   [thi.ng.math.core :as m :refer [PI TWO_PI]]
   [thi.ng.strf.core :as f]
   [thi.ng.xerror.core :as err]
   #?(:clj [thi.ng.math.macros :as mm])))

(declare hsva hsla css int24 int32 cmyka hsl-hue parse-css)

(def THIRD (/ 1.0 3))
(def TWO_THIRD (/ 2.0 3))
(def SIXTH (/ 1.0 6))
(def INV8BIT (/ 1.0 0xff))

(def ^:private hex6 ["#" (f/hex 6)])

(def ^:private ns-prefix "#thi.ng.color.core.")

(defprotocol IRGBConvert
  (as-rgba [_]))

(defprotocol IHSVConvert
  (as-hsva [_]))

(defprotocol IHSLConvert
  (as-hsla [_]))

(defprotocol ICMYKConvert
  (as-cmyka [_]))

(defprotocol ICSSConvert
  (as-css [_]))

(defprotocol IIntConvert
  (as-int24 [_])
  (as-int32 [_]))

(defprotocol IColorComponents
  (red [_])
  (green [_])
  (blue [_])
  (alpha [_])
  (hue [_])
  (saturation [_])
  (brightness [_])
  (luminance [_])
  (cyan [_])
  (magenta [_])
  (yellow [_])
  (black [_]))

(defprotocol IColorOps
  (rotate-hue [_ theta])
  (adjust-saturation [_ offset])
  (adjust-brightness [_ offset])
  (adjust-alpha [_ offset])
  (invert [_])
  (blend [_ dest t]))

(deftype RGBA [^double r ^double g ^double b ^double a]
  #?@(:clj [clojure.lang.IDeref (deref [_] [r g b a])] :cljs [IDeref (-deref [_] [r g b a])])
  Object
  (toString
    [_] (str ns-prefix "RGBA [" r " " g " " b " " a "]"))
  IRGBConvert
  (as-rgba [_] _)
  IHSVConvert
  (as-hsva
    [_]
    (let [v (max r g b)
          d (- v (min r g b))
          s (if (m/delta= 0.0 v) 0.0 (/ d v))
          h (if (m/delta= 0.0 s)
              0.0
              (condp == v
                r (mm/subdiv g b d)
                g (+ 2.0 (mm/subdiv b r d))
                (+ 4.0 (mm/subdiv r g d))))
          h (/ h 6.0)]
      (hsva (if (neg? h) (inc h) h) s v a)))
  IHSLConvert
  (as-hsla
    [_]
    (let [f1 (min r g b)
          f2 (max r g b)
          l  (mm/addm f1 f2 0.5)
          d  (- f2 f1)]
      (if (m/delta= 0.0 d)
        (hsla 0.0 0.0 l a)
        (let [s  (if (< l 0.5) (/ d (+ f1 f2)) (/ d (- (- 2.0 f2) f1)))
              d2 (* 0.5 d)
              dr (mm/adddiv (mm/subm f2 r SIXTH) d2 d)
              dg (mm/adddiv (mm/subm f2 g SIXTH) d2 d)
              db (mm/adddiv (mm/subm f2 b SIXTH) d2 d)
              h  (condp == f2
                   r (- db dg)
                   g (- (+ THIRD dr) db)
                   (- (+ TWO_THIRD dg) dr))
              h  (if (neg? h) (inc h) (if (>= h 1.0) (dec h) h))]
          (hsla h s l a)))))
  ICMYKConvert
  (as-cmyka
    [_]
    (let [c (- 1.0 r)
          m (- 1.0 g)
          y (- 1.0 b)
          k (min (min c m) y)]
      (cmyka
       (max (- c k) 0.0)
       (max (- m k) 0.0)
       (max (- y k) 0.0)
       (max k 0.0))))
  ICSSConvert
  (as-css
    [_]
    (if (< a 1.0)
      (let [r (* 0xff r) g (* 0xff g) b (* 0xff b)]
        (css (str "rgba(" (int r) \, (int g) \, (int b) \, (max 0.0 a) ")")))
      (as-css (as-int24 _))))
  IIntConvert
  (as-int24
    [_]
    (int24
     (bit-or
      (bit-or
       (-> r (* 0xff) (+ 0.5) int (bit-shift-left 16))
       (-> g (* 0xff) (+ 0.5) int (bit-shift-left 8)))
      (-> b (* 0xff) (+ 0.5) int))))
  (as-int32
    [_]
    (int32
     (bit-or
      (bit-or
       (bit-or
        (-> r (* 0xff) (+ 0.5) int (bit-shift-left 16))
        (-> g (* 0xff) (+ 0.5) int (bit-shift-left 8)))
       (-> b (* 0xff) (+ 0.5) int))
      (-> a (* 0xff) (+ 0.5) int (bit-shift-left 24)))))
  IColorComponents
  (red [_] r)
  (green [_] g)
  (blue [_] b)
  (alpha [_] a)
  (hue
    [_] (hue (as-hsva _)))
  (saturation
    [_]
    (let [v (max r g b)]
      (if (m/delta= 0.0 v) 0.0 (/ (- v (min r g b)) v))))
  (brightness
    [_] (max r g b))
  (luminance
    [_] (mm/madd 0.299 r 0.587 g 0.114 b))
  (cyan
    [_] (cyan (as-cmyka _)))
  (magenta
    [_] (magenta (as-cmyka _)))
  (yellow
    [_] (yellow (as-cmyka _)))
  (black
    [_] (black (as-cmyka _)))
  IColorOps
  (rotate-hue
    [_ theta] (-> _ (as-hsva) (rotate-hue theta) (as-rgba)))
  (adjust-saturation
    [_ offset] (-> _ (as-hsva) (adjust-saturation offset) (as-rgba)))
  (adjust-brightness
    [_ offset] (-> _ (as-hsva) (adjust-brightness offset) (as-rgba)))
  (adjust-alpha
    [_ offset] (RGBA. r g b (m/clamp (+ a offset) 0.0 1.0)))
  (invert
    [_] (RGBA. (- 1.0 r) (- 1.0 g) (- 1.0 b) a))
  (blend
    [_ dest t]
    (RGBA.
     (mm/mix r (red dest) t)
     (mm/mix g (green dest) t)
     (mm/mix b (blue dest) t)
     (mm/mix a (alpha dest) t))))
(deftype Int24 #?(:clj [^int col] :cljs [col])
  #?@(:clj [clojure.lang.IDeref (deref [_] col)] :cljs [IDeref (-deref [_] col)])
  Object
  (toString
    [_] (str ns-prefix "Int24 [" col "]"))
  IRGBConvert
  (as-rgba
    [_]
    (RGBA.
     (* INV8BIT (bit-and (bit-shift-right col 16) 0xff))
     (* INV8BIT (bit-and (bit-shift-right col 8) 0xff))
     (* INV8BIT (bit-and col 0xff))
     1.0))
  IHSVConvert
  (as-hsva
    [_] (as-hsva (as-rgba _)))
  IHSLConvert
  (as-hsla
    [_] (as-hsla (as-rgba _)))
  ICMYKConvert
  (as-cmyka
    [_] (as-cmyka (as-rgba _)))
  ICSSConvert
  (as-css
    [_] (css (f/format hex6 (bit-and col 0xffffff))))
  IIntConvert
  (as-int24 [_] _)
  (as-int32
    [_] (int32 (bit-or col 0xff000000)))
  IColorComponents
  (red
    [_] (* INV8BIT (bit-and (bit-shift-right col 16) 0xff)))
  (green
    [_] (* INV8BIT (bit-and (bit-shift-right col 8) 0xff)))
  (blue
    [_] (* INV8BIT (bit-and col 0xff)))
  (alpha [_] 1)
  (hue
    [_] (hue (as-hsva _)))
  (saturation
    [_] (saturation (as-rgba _)))
  (brightness
    [_] (brightness (as-rgba _)))
  (luminance
    [_] (luminance (as-rgba _)))
  (cyan
    [_] (cyan (as-cmyka _)))
  (magenta
    [_] (magenta (as-cmyka _)))
  (yellow
    [_] (yellow (as-cmyka _)))
  (black
    [_] (black (as-cmyka _)))
  IColorOps
  (rotate-hue
    [_ theta] (-> _ (as-hsva) (rotate-hue theta) (as-int24)))
  (adjust-saturation
    [_ offset] (-> _ (as-hsva) (adjust-saturation offset) (as-int24)))
  (adjust-brightness
    [_ offset] (-> _ (as-hsva) (adjust-brightness offset) (as-int24)))
  (adjust-alpha
    [_ offset] (adjust-alpha (as-int32 _) offset))
  (invert
    [_] (Int24. (bit-xor col 0xffffff)))
  (blend
    [_ dest t]
    (let [r (bit-and (bit-shift-right col 16) 0xff)
          g (bit-and (bit-shift-right col 8) 0xff)
          b (bit-and col 0xff)]
      (Int24.
       (bit-or
        (bit-or
         (bit-shift-left (int (mm/mix r (+ (* (red dest) 0xff) 0.5) t)) 16)
         (bit-shift-left (int (mm/mix g (+ (* (green dest) 0xff) 0.5) t)) 8))
        (int (mm/mix b (+ (* (blue dest) 0xff) 0.5) t)))))))

(deftype Int32 #?(:clj [^long col] :cljs [col])
  #?@(:clj [clojure.lang.IDeref (deref [_] col)] :cljs [IDeref (-deref [_] col)])
  Object
  (toString
    [_] (str ns-prefix "Int32 [" col "]"))
  IRGBConvert
  (as-rgba
    [_]
    (RGBA.
     (* INV8BIT (bit-and (bit-shift-right col 16) 0xff))
     (* INV8BIT (bit-and (bit-shift-right col 8) 0xff))
     (* INV8BIT (bit-and col 0xff))
     (* INV8BIT (bit-and (unsigned-bit-shift-right col 24) 0xff))))
  IHSVConvert
  (as-hsva
    [_] (as-hsva (as-rgba _)))
  IHSLConvert
  (as-hsla
    [_] (as-hsla (as-rgba _)))
  ICMYKConvert
  (as-cmyka
    [_] (as-cmyka (as-rgba _)))
  ICSSConvert
  (as-css
    [_]
    (if (== 0xff000000 (bit-and col 0xff000000))
      (css (f/format hex6 (bit-and col 0xffffff)))
      (as-css (as-rgba _))))
  IIntConvert
  (as-int24
    [_] (Int24. (bit-and col 0xffffff)))
  (as-int32 [_] _)
  IColorComponents
  (red
    [_] (* INV8BIT (bit-and (bit-shift-right col 16) 0xff)))
  (green
    [_] (* INV8BIT (bit-and (bit-shift-right col 8) 0xff)))
  (blue
    [_] (* INV8BIT (bit-and col 0xff)))
  (alpha
    [_] (* INV8BIT (bit-and (unsigned-bit-shift-right col 24) 0xff)))
  (hue
    [_] (hue (as-hsva _)))
  (saturation
    [_] (saturation (as-rgba _)))
  (brightness
    [_] (brightness (as-rgba _)))
  (luminance
    [_] (luminance (as-rgba _)))
  (cyan
    [_] (cyan (as-cmyka _)))
  (magenta
    [_] (magenta (as-cmyka _)))
  (yellow
    [_] (yellow (as-cmyka _)))
  (black
    [_] (black (as-cmyka _)))
  IColorOps
  (rotate-hue
    [_ theta] (-> _ (as-hsva) (rotate-hue theta) (as-int32)))
  (adjust-saturation
    [_ offset] (-> _ (as-hsva) (adjust-saturation offset) (as-int32)))
  (adjust-brightness
    [_ offset] (-> _ (as-hsva) (adjust-brightness offset) (as-int32)))
  (adjust-alpha
    [_ offset]
    (let [a (* INV8BIT (bit-and (unsigned-bit-shift-right col 24) 0xff))
          a (int (* 0xff (m/clamp (+ a offset) 0.0 1.0)))]
      (Int32. (bit-or (bit-and col 0xffffff) (bit-shift-left a 24)))))
  (invert
    [_] (Int32. (bit-xor col 0xffffff)))
  (blend
    [_ dest t]
    (let [r (bit-and (bit-shift-right col 16) 0xff)
          g (bit-and (bit-shift-right col 8) 0xff)
          b (bit-and col 0xff)
          a (unsigned-bit-shift-right col 24)]
      (Int32.
       (bit-or
        (bit-or
         (bit-or
          (bit-shift-left (int (mm/mix r (+ (* (red dest) 0xff) 0.5) t)) 16)
          (bit-shift-left (int (mm/mix g (+ (* (green dest) 0xff) 0.5) t)) 8))
         (int (mm/mix b (+ (* (blue dest) 0xff) 0.5) t)))
        (bit-shift-left (int (mm/mix a (+ (* (alpha dest) 0xff) 0.5) t)) 24))))))
(deftype HSVA [^double h ^double s ^double v ^double a]
  #?@(:clj [clojure.lang.IDeref (deref [_] [h s v a])] :cljs [IDeref (-deref [_] [h s v a])])
  Object
  (toString
    [_] (str ns-prefix "HSVA [" h " " s " " v " " a "]"))
  IRGBConvert
  (as-rgba
    [_]
    (if (m/delta= 0.0 s)
      (RGBA. v v v a)
      (let [h (rem (* h 6.0) 6.0)
            i (int h)
            f (- h i)
            p (* v (- 1.0 s))
            q (* v (- 1.0 (* s f)))
            t (* v (- 1.0 (mm/subm 1.0 f s)))]
        (case i
          0 (RGBA. v t p a)
          1 (RGBA. q v p a)
          2 (RGBA. p v t a)
          3 (RGBA. p q v a)
          4 (RGBA. t p v a)
          (RGBA. v p q a)))))
  IHSVConvert
  (as-hsva [_] _)
  IHSLConvert
  (as-hsla
    [_]
    (let [l  (* (- 2 s) (* v 0.5))
          s' (/ (* s v) (- 1 (m/abs (dec (* 2 l)))))]
      (hsla h s' l a)))
  ICMYKConvert
  (as-cmyka
    [_] (as-cmyka (as-rgba _)))
  ICSSConvert
  (as-css
    [_] (as-css (as-hsla (as-rgba _))))
  IIntConvert
  (as-int24 [_] (as-int24 (as-rgba _)))
  (as-int32 [_] (as-int32 (as-rgba _)))
  IColorComponents
  (red
    [_] (red (as-rgba _)))
  (green
    [_] (green (as-rgba _)))
  (blue
    [_] (blue (as-rgba _)))
  (alpha [_] a)
  (hue [_] h)
  (saturation [_] s)
  (brightness [_] v)
  (luminance
    [_] (luminance (as-rgba _)))
  (cyan
    [_] (cyan (as-rgba _)))
  (magenta
    [_] (magenta (as-rgba _)))
  (yellow
    [_] (yellow (as-rgba _)))
  (black
    [_] (black (as-rgba _)))
  IColorOps
  (rotate-hue
    [_ theta]
    (let [h (+ h (/ (rem theta TWO_PI) TWO_PI))]
      (HSVA. (if (neg? h) (inc h) (if (>= h 1.0) (dec h) h)) s v a)))
  (adjust-saturation
    [_ offset] (HSVA. h (m/clamp (+ offset s) 0.0 1.0) v a))
  (adjust-brightness
    [_ offset] (HSVA. h s (m/clamp (+ offset v) 0.0 1.0) a))
  (adjust-alpha
    [_ offset] (HSVA. h s v (m/clamp (+ offset a) 0.0 1.0)))
  (invert
    [_] (HSVA. (mod (+ 0.5 h) 1.0) (- 1.0 s) (- 1.0 v) a))
  (blend
    [_ dest t]
    (let [[h2 s2 v2 a2] @(as-hsva dest)
          hd (m/abs-diff h h2)]
      (HSVA.
       (if (> hd 0.5)
         (if (> h2 h)
           (rem (mm/mix (inc h) h2 t) 1.0)
           (rem (mm/mix h (inc h2) t) 1.0))
         (mm/mix h h2 t))
       (mm/mix s s2 t)
       (mm/mix v v2 t)
       (mm/mix a a2 t)))))
(deftype HSLA [^double h ^double s ^double l ^double a]
  #?@(:clj [clojure.lang.IDeref (deref [_] [h s l a])] :cljs [IDeref (-deref [_] [h s l a])])
  Object
  (toString
    [_] (str ns-prefix "HSLA [" h " " s " " l " " a "]"))
  IRGBConvert
  (as-rgba
    [_]
    (if (m/delta= 0.0 s)
      (RGBA. l l l a)
      (let [f2 (if (< l 0.5) (* l (inc s)) (- (+ l s) (* l s)))
            f1 (- (* 2.0 l) f2)]
        (RGBA.
         (m/clamp (hsl-hue f1 f2 (+ h THIRD)) 0.0 1.0)
         (m/clamp (hsl-hue f1 f2 h) 0.0 1.0)
         (m/clamp (hsl-hue f1 f2 (- h THIRD)) 0.0 1.0)
         a))))
  IHSVConvert
  (as-hsva
    [_]
    (let [l2 (* 2 l)
          v  (/ (+ l2 (* s (- 1 (m/abs (dec l2))))) 2)
          s' (/ (* 2 (- v l)) v)]
      (HSVA. h s' v a)))
  IHSLConvert
  (as-hsla [_] _)
  ICMYKConvert
  (as-cmyka
    [_] (as-cmyka (as-rgba _)))
  ICSSConvert
  (as-css
    [_]
    (let [h (Math/round (* h 360.0)) s (Math/round (* s 100.0)) l (Math/round (* l 100.0))]
      (css
       (if (< a 1)
         (str "hsla(" h "," s "%," l "%," a ")")
         (str "hsl(" h "," s "%," l "%)")))))
  IIntConvert
  (as-int24
    [_] (as-int24 (as-rgba _)))
  (as-int32
    [_] (as-int32 (as-rgba _)))
  IColorComponents
  (red
    [_] (red (as-rgba _)))
  (green
    [_] (green (as-rgba _)))
  (blue
    [_] (blue (as-rgba _)))
  (alpha [_] a)
  (hue [_] h)
  (saturation [_] s)
  (brightness
    [_] (brightness (as-rgba _)))
  (luminance [_] l)
  (cyan
    [_] (cyan (as-rgba _)))
  (magenta
    [_] (magenta (as-rgba _)))
  (yellow
    [_] (yellow (as-rgba _)))
  (black
    [_] (black (as-rgba _)))
  IColorOps
  (rotate-hue
    [_ theta]
    (let [h (+ h (/ (rem theta TWO_PI) TWO_PI))]
      (HSLA. (if (neg? h) (inc h) (if (>= h 1.0) (dec h) h)) s l a)))
  (adjust-saturation
    [_ offset] (HSLA. h (m/clamp (+ offset s) 0.0 1.0) l a))
  (adjust-brightness
    [_ offset] (-> _ (as-hsva) (adjust-brightness offset) (as-hsla)))
  (adjust-alpha
    [_ offset] (HSLA. h s l (m/clamp (+ offset a) 0.0 1.0)))
  (invert
    [_] (HSLA. (mod (+ 0.5 h) 1.0) (- 1.0 s) (- 1.0 l) a))
  (blend
    [_ dest t]
    (let [[h2 s2 l2 a2] @(as-hsla dest)
          hd (m/abs-diff h h2)]
      (HSLA.
       (if (> hd 0.5)
         (if (> h2 h)
           (rem (mm/mix (inc h) h2 t) 1.0)
           (rem (mm/mix h (inc h2) t) 1.0))
         (mm/mix h h2 t))
       (mm/mix s s2 t)
       (mm/mix l l2 t)
       (mm/mix a a2 t)))))
(deftype CMYKA [^double c ^double m ^double y ^double k ^double a]
  #?@(:clj [clojure.lang.IDeref (deref [_] [c m y k a])] :cljs [IDeref (-deref [_] [c m y k a])])
  Object
  (toString
    [_] (str ns-prefix "CMYKA [" c " " m " " y " " k " " a "]"))
  IRGBConvert
  (as-rgba
    [_]
    (RGBA.
     (- 1.0 (min 1.0 (+ c k)))
     (- 1.0 (min 1.0 (+ m k)))
     (- 1.0 (min 1.0 (+ y k)))
     a))
  IHSVConvert
  (as-hsva
    [_] (as-hsva (as-rgba _)))
  IHSLConvert
  (as-hsla
    [_] (as-hsla (as-rgba _)))
  ICMYKConvert
  (as-cmyka [_] _)
  ICSSConvert
  (as-css
    [_] (as-css (as-rgba _)))
  IIntConvert
  (as-int24
    [_] (as-int24 (as-rgba _)))
  (as-int32
    [_] (as-int32 (as-rgba _)))
  IColorComponents
  (red
    [_] (red (as-rgba _)))
  (green
    [_] (green (as-rgba _)))
  (blue
    [_] (blue (as-rgba _)))
  (alpha [_] a)
  (hue
    [_] (hue (as-hsva _)))
  (saturation
    [_] (saturation (as-rgba _)))
  (brightness
    [_] (brightness (as-rgba _)))
  (luminance
    [_] (luminance (as-rgba _)))
  (cyan
    [_] c)
  (magenta
    [_] m)
  (yellow
    [_] y)
  (black
    [_] k)
  IColorOps
  (rotate-hue
    [_ theta] (-> _ (as-hsva) (rotate-hue theta) (as-cmyka)))
  (adjust-saturation
    [_ offset] (-> _ (as-hsva) (adjust-saturation offset) (as-cmyka)))
  (adjust-brightness
    [_ offset] (-> _ (as-hsva) (adjust-brightness offset) (as-cmyka)))
  (adjust-alpha
    [_ offset] (CMYKA. c m y k (m/clamp (+ offset a) 0.0 1.0)))
  (invert
    [_] (CMYKA. (- 1.0 c) (- 1.0 m) (- 1.0 y) (- 1.0 k) a))
  (blend
    [_ dest t]
    (CMYKA.
     (mm/mix c (cyan dest) t)
     (mm/mix m (magenta dest) t)
     (mm/mix y (yellow dest) t)
     (mm/mix k (black dest) t)
     (mm/mix a (alpha dest) t))))
(deftype CSS [^String col]
  #?@(:clj [clojure.lang.IDeref (deref [_] col)] :cljs [IDeref (-deref [_] col)])
  Object
  (toString
    [_] (str ns-prefix "CSS [\"" col "\"]"))
  IRGBConvert
  (as-rgba
    [_]
    (let [c (parse-css col)]
      (if (instance? RGBA c) c (as-rgba c))))
  IHSVConvert
  (as-hsva
    [_] (as-hsva (as-rgba _)))
  IHSLConvert
  (as-hsla
    [_]
    (let [c (parse-css col)]
      (if (instance? HSLA c) c (as-hsla c))))
  ICMYKConvert
  (as-cmyka
    [_] (as-cmyka (as-rgba _)))
  ICSSConvert
  (as-css
    [_] _)
  IIntConvert
  (as-int24
    [_]
    (let [c (parse-css col)]
      (if (instance? Int24 c) c (as-int24 c))))
  (as-int32
    [_]
    (let [c (parse-css col)]
      (if (instance? Int32 c) c (as-int32 c))))
  IColorComponents
  (red
    [_] (red (as-rgba _)))
  (green
    [_] (green (as-rgba _)))
  (blue
    [_] (blue (as-rgba _)))
  (alpha
    [_] (alpha (parse-css col)))
  (hue
    [_] (hue (as-hsla _)))
  (saturation
    [_] (saturation (parse-css col)))
  (brightness
    [_] (brightness (parse-css col)))
  (luminance
    [_] (luminance (as-hsla _)))
  (cyan
    [_] (cyan (as-rgba _)))
  (magenta
    [_] (magenta (as-rgba _)))
  (yellow
    [_] (yellow (as-rgba _)))
  (black
    [_] (black (as-rgba _)))
  IColorOps
  (rotate-hue
    [_ theta] (-> _ (as-hsva) (rotate-hue theta) (as-css)))
  (adjust-saturation
    [_ offset] (-> _ (as-hsva) (adjust-saturation offset) (as-css)))
  (adjust-brightness
    [_ offset] (-> _ (as-hsva) (adjust-brightness offset) (as-css)))
  (adjust-alpha
    [_ offset] (-> _ (as-rgba) (adjust-alpha offset) (as-css)))
  (invert
    [_] (-> _ (as-rgba) (invert) (as-css)))
  (blend
    [_ dest t] (-> _ (as-rgba) (blend dest t) (as-css))))
(defn proxied-color-type
  [to-rgba from-rgba]
  (fn ctor [col]
    (reify
      #?@(:clj [clojure.lang.IDeref (deref [_] col)] :cljs [IDeref (-deref [_] col)])
      Object
      (toString
        [_] (pr-str col))
      IRGBConvert
      (as-rgba [_] (to-rgba col))
      IHSVConvert
      (as-hsva
        [_] (as-hsva (to-rgba col)))
      IHSLConvert
      (as-hsla
        [_] (as-hsla (to-rgba col)))
      ICMYKConvert
      (as-cmyka
        [_] (as-cmyka (to-rgba col)))
      ICSSConvert
      (as-css
        [_] (as-css (to-rgba col)))
      IIntConvert
      (as-int24
        [_] (as-int24 (to-rgba col)))
      (as-int32
        [_] (as-int32 (to-rgba col)))
      IColorComponents
      (red
        [_] (red (to-rgba col)))
      (green
        [_] (green (to-rgba col)))
      (blue
        [_] (blue (to-rgba col)))
      (alpha
        [_] (alpha (to-rgba col)))
      (hue
        [_] (hue (as-hsva _)))
      (saturation
        [_] (saturation (as-hsva _)))
      (brightness
        [_] (brightness (as-hsva _)))
      (luminance
        [_] (luminance (as-hsla _)))
      (cyan
        [_] (cyan (to-rgba col)))
      (magenta
        [_] (magenta (to-rgba col)))
      (yellow
        [_] (yellow (to-rgba col)))
      (black
        [_] (black (to-rgba col)))
      IColorOps
      (rotate-hue
        [_ theta] (-> col (to-rgba) (rotate-hue theta) (from-rgba) (ctor)))
      (adjust-saturation
        [_ offset] (-> col (to-rgba) (adjust-saturation offset) (from-rgba) (ctor)))
      (adjust-brightness
        [_ offset] (-> col (to-rgba) (adjust-brightness offset) (from-rgba) (ctor)))
      (invert
        [_] (-> _ (to-rgba) (invert) (ctor (from-rgba))))
      (blend
        [_ dest t] (-> _ (to-rgba) (blend dest t) (from-rgba) (ctor))))))

#?(:clj
   (do
     (defmethod print-method thi.ng.color.core.RGBA [^RGBA c ^java.io.Writer w] (.write w (.toString c)))
     (defmethod print-dup thi.ng.color.core.RGBA [o w] (print-method o w))

     (defmethod print-method thi.ng.color.core.HSVA [^HSVA c ^java.io.Writer w] (.write w (.toString c)))
     (defmethod print-dup thi.ng.color.core.HSVA [o w] (print-method o w))

     (defmethod print-method thi.ng.color.core.HSLA [^HSLA c ^java.io.Writer w] (.write w (.toString c)))
     (defmethod print-dup thi.ng.color.core.HSLA [o w] (print-method o w))

     (defmethod print-method thi.ng.color.core.CMYKA [^CMYKA c ^java.io.Writer w] (.write w (.toString c)))
     (defmethod print-dup thi.ng.color.core.CMYKA [o w] (print-method o w))

     (defmethod print-method thi.ng.color.core.Int24 [^Int24 c ^java.io.Writer w] (.write w (.toString c)))
     (defmethod print-dup thi.ng.color.core.Int24 [o w] (print-method o w))

     (defmethod print-method thi.ng.color.core.Int32 [^Int32 c ^java.io.Writer w] (.write w (.toString c)))
     (defmethod print-dup thi.ng.color.core.Int32 [o w] (print-method o w))

     (defmethod print-method thi.ng.color.core.CSS [^CSS c ^java.io.Writer w] (.write w (.toString c)))
     (defmethod print-dup thi.ng.color.core.CSS [o w] (print-method o w))
     ))

(defn rgba
  ([[r g b a]] (RGBA. r g b (or a 1.0)))
  ([r g b] (RGBA. r g b 1.0))
  ([r g b a] (RGBA. r g b a)))

(defn int24
  [col] (Int24. col))

(defn int32
  ([col] (Int32. col))
  ([col alpha]
   (let [a (int (* 0xff (m/clamp alpha 0.0 1.0)))]
     (Int32. (bit-or (bit-and col 0xffffff) (bit-shift-left a 24))))))

(defn hsva
  ([[h s v a]] (HSVA. h s v (or a 1.0)))
  ([h s v] (HSVA. h s v 1.0))
  ([h s v a] (HSVA. h s v a)))

(defn hsla
  ([[h s l a]] (HSLA. h s l (or a 1.0)))
  ([h s l] (HSLA. h s l 1.0))
  ([h s l a] (HSLA. h s l a)))

(defn cmyka
  ([[c m y k a]] (CMYKA. c m y k (or a 1.0)))
  ([c m y k] (CMYKA. c m y k 1.0))
  ([c m y k a] (CMYKA. c m y k a)))

(defn css
  [^String col] (CSS. col))

(defn random-rgb
  "Returns a random RGBA color with 100% alpha"
  [] (rgba (m/random) (m/random) (m/random) 1.0))
(def RED     (rgba 1 0 0 1))
(def GREEN   (rgba 0 1 0 1))
(def BLUE    (rgba 0 0 1 1))
(def CYAN    (rgba 0 1 1 1))
(def MAGENTA (rgba 1 0 1 1))
(def YELLOW  (rgba 1 1 0 1))
(def BLACK   (rgba 0 0 0 1))
(def WHITE   (rgba 1 1 1 1))
(def GRAY    (rgba 0.5 0.5 0.5 1))

(defn- hsl-hue
  [f1 f2 h]
  (let [h (if (neg? h) (inc h) (if (>= h 1.0) (dec h) h))]
    (cond
      (< h SIXTH)     (m/mix f1 f2 (* 6.0 h))
      (< h 0.5)       f2
      (< h TWO_THIRD) (m/mix f1 f2 (mm/subm TWO_THIRD h 6.0))
      :else           f1)))

(defn- hue->rgb
  [h]
  (let [h (mod (* 6.0 h) 6.0)]
    [(m/clamp (dec (m/abs (- h 3.0))) 0.0 1.0)
     (m/clamp (- 2.0 (m/abs (- h 2.0))) 0.0 1.0)
     (m/clamp (- 2.0 (m/abs (- h 4.0))) 0.0 1.0)]))

(defn- rgba->hcva
  [^RGBA rgba]
  (let [r             (.-r rgba)
        g             (.-g rgba)
        b             (.-b rgba)
        a             (.-a rgba)
        [px py pz pw] (if (< g b) [b g -1.0 TWO_THIRD] [g b 0.0 (- THIRD)])
        [qx qy qz qw] (if (< r px) [px py pw r] [r py pz px])
        c             (- qx (min qw qy))
        h             (m/abs (+ (/ (- qw qy) (mm/madd 6.0 c 1e-10)) qz))]
    [(m/clamp h 0.0 1.0) (m/clamp c 0.0 1.0) (m/clamp qx 0.0 1.0) a]))

(defn- rgba->hcya
  [^RGBA rgba]
  (let [r         (.-r rgba)
        g         (.-g rgba)
        b         (.-b rgba)
        [h c v a] (rgba->hcva rgba)
        y         (mm/madd 0.299 r 0.587 g 0.114 b)]
    (if (m/delta= 0.0 c)
      [h c y a]
      (let [[r' g' b'] (hue->rgb h) ;; FIXME
            z (mm/madd 0.299 r' 0.587 g' 0.114 b')]
        (if (> (- y z) 1e-5)
          [h (m/clamp (* c (mm/subdiv 1.0 z 1.0 y)) 0.0 1.0) y a]
          [h (m/clamp (* c (/ z y)) 0.0 1.0) y a])))))

(defn- hcya->rgba
  ([hcya]
   (apply hcya->rgba hcya))
  ([h c y]
   (hcya->rgba h c y 1.0))
  ([h c y a]
   (let [[r g b] (hue->rgb h)
         z (mm/madd 0.299 r 0.587 g 0.114 b)
         c' (if (< y z) (* c (/ y z)) (if (< z 1.0) (* c (mm/subdiv 1.0 y 1.0 z)) c))]
     (RGBA.
      (m/clamp (mm/submadd r z c' y) 0.0 1.0)
      (m/clamp (mm/submadd g z c' y) 0.0 1.0)
      (m/clamp (mm/submadd b z c' y) 0.0 1.0)
      a))))

(defn- ycbcra->rgba
  ([ycbcra]
   (apply ycbcra->rgba ycbcra))
  ([y cb cr]
   (ycbcra->rgba y cb cr 1.0))
  ([y cb cr a]
   (let [cb' (- cb 0.5)
         cr' (- cr 0.5)]
     (RGBA.
      (m/clamp (mm/madd cr' 1.402 y) 0.0 1.0)
      (m/clamp (- y (mm/madd cb' 0.34414 cr' 0.71414)) 0.0 1.0)
      (m/clamp (mm/madd cb' 1.772 y) 0.0 1.0)
      a))))

(defn- rgba->ycbcra
  [^RGBA rgba]
  (let [r (.-r rgba)
        g (.-g rgba)
        b (.-b rgba)
        a (.-a rgba)]
    [(m/clamp (mm/madd 0.299 r 0.587 g 0.114 b) 0.0 1.0)
     (m/clamp (+ (- (- 0.5 (* 0.16874 r)) (* 0.33126 g)) (* 0.5 b)) 0.0 1.0)
     (m/clamp (- (- (+ 0.5 (* 0.5 r)) (* 0.418688 g)) (* 0.081312 b)) 0.0 1.0)]))

(defn- rgba->yuva
  [^RGBA rgba]
  (let [r (.-r rgba)
        g (.-g rgba)
        b (.-b rgba)
        a (.-a rgba)]
    [(mm/madd 0.299 r 0.587 g 0.114 b)
     (mm/madd -0.1473 r -0.28886 g 0.436 b)
     (mm/madd 0.615 r -0.51499 g -0.10001 b)
     a]))

(defn- yuva->rgba
  ([yuva]
   (apply yuva->rgba yuva))
  ([y u v]
   (yuva->rgba y u v 1.0))
  ([y u v a]
   [(m/clamp (mm/madd 1.13983 v y) 0.0 1.0)
    (m/clamp (- y (mm/madd 0.39465 u 0.5806 v)) 0.0 1.0)
    (m/clamp (mm/madd 2.03211 u y) 0.0 1.0)
    a]))

(defn- cie1931-gamma-correct
  [x]
  (m/clamp
   (if (< x 0.0031308)
     (* 12.92 x)
     (mm/msub 1.055 (Math/pow x (/ 2.4)) 0.055))
   0.0 1.0))

(defn- cie1931->rgb
  ([xyz]
   (apply cie1931->rgb xyz))
  ([x y z]
   (cie1931->rgb x y z 1.0))
  ([x y z a]
   [(cie1931-gamma-correct (mm/madd 3.2406 x -1.5372 y -0.4986 z))
    (cie1931-gamma-correct (mm/madd -0.9689 x 1.8758 y 0.0415 z))
    (cie1931-gamma-correct (mm/madd 0.0557 x -0.2040 y 1.0570 z))
    a]))

(defn hex->int
  [hex]
  (let [hex (if (= \# (first hex)) (subs hex 1) hex)
        len (count hex)]
    (if (== 3 len)
      (let [[r g b] hex]
        (int24 (f/parse-int (str r r g g b b) 16 0)))
      (if (< len 7)
        (int24 (f/parse-int hex 16 0))
        (int32 (f/parse-int hex 16 0))))))

(defn- parse-channel-val
  [^String c]
  (if (pos? (.indexOf c "%"))
    (* 0.01 (f/parse-float (subs c 0 (dec (count c)))))
    (* INV8BIT (f/parse-int c 10 0))))

(defn- parse-css
  [col]
  (if (= \# (first col))
    (hex->int col)
    (let [[[_ mode a b c d]] (re-seq #"(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)" col)]
      (if mode
        (if (#{"rgb" "rgba"} mode)
          (RGBA.
           (parse-channel-val a)
           (parse-channel-val b)
           (parse-channel-val c)
           (f/parse-float d 1.0))
          (as-rgba
           (HSLA.
            (/ (f/parse-float a) 360.0)
            (parse-channel-val b)
            (parse-channel-val c)
            (f/parse-float d 1.0))))
        (err/illegal-arg! col)))))

(def hcya (proxied-color-type hcya->rgba rgba->hcya))

(def yuva (proxied-color-type yuva->rgba rgba->yuva))

(def ycbcra (proxied-color-type ycbcra->rgba rgba->ycbcra))

(def cie1931 (proxied-color-type cie1931->rgb err/unsupported!))

(def hues
  (zipmap
   [:red :orange :yellow :lime :green :teal :cyan :azure :blue :purple :magenta]
   (map #(/ % 360.0) (range 0 360 30))))

(def primary-hues
  (select-keys hues [:red :yellow :green :cyan :blue :magenta]))

(defn closest-hue
  "Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
  returns key of closest hue."
  ([col] (closest-hue col hues))
  ([col hues]
   (let [h (hue col)]
     (first
      (reduce
       (fn [[h' d'] [k v]]
         (let [d (min (m/abs-diff h v) (m/abs-diff (dec h) v))]
           (if (< d d') [k d] [h' d'])))
       [nil 1e6] hues)))))

(defn gamma-correct
  "Returns gamma corrected version of color as RGBA"
  [col gamma]
  (let [^RGBA col (as-rgba col)]
    (RGBA.
     (Math/pow (.-r col) gamma)
     (Math/pow (.-g col) gamma)
     (Math/pow (.-b col) gamma)
     (.-a col))))
(defn complementary
  "Returns new color of same type with its hue rotated by 180 degrees."
  [col] (rotate-hue col PI))

(defn analog
  "Returns new color of same type with its hue rotated and adjusted
  saturation & brightness."
  [col theta sat bright]
  (-> col
      (rotate-hue theta)
      (adjust-saturation sat)
      (adjust-brightness bright)))

(defn random-analog
  "Returns new color of same type with its hue rotated and adjusted
  saturation & brightness within given tolerances (+/-)."
  [col theta sat bright]
  (analog col
   (* (m/randnorm) theta)
   (* (m/randnorm) sat)
   (* (m/randnorm) bright)))

(defn dist-rgb
  "Returns RGB distance of any two colors"
  [a b]
  (let [[ra ga ba] @(as-rgba a)
        [rb gb bb] @(as-rgba b)
        dr (- ra rb)
        dg (- ga gb)
        db (- ba bb)]
    (Math/sqrt (mm/madd dr dr dg dg db db))))

(defn dist-hsv
  "Returns HSV distance of any two colors"
  [a b]
  (let [[ha sa va] @(as-hsva a)
        [hb sb vb] @(as-hsva b)
        ha (* TWO_PI ha)
        hb (* TWO_PI hb)
        dh (- (* sa (Math/cos ha)) (* sb (Math/cos hb)))
        ds (- (* sa (Math/sin ha)) (* sb (Math/sin hb)))
        dv (- va vb)]
    (Math/sqrt (mm/madd dh dh ds ds dv dv))))
