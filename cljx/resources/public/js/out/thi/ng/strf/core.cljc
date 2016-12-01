(ns thi.ng.strf.core
  (:refer-clojure :exclude [float int long double format])
  (:require
   [clojure.string :as str])
  #?(:clj (:import [java.util Calendar Date])))

(defn parse-int
  [^String x radix & [default]]
  #?(:clj
     (try (Integer/parseInt x radix) (catch Exception e default))
     :cljs
     (let [x' (js/parseInt x radix)] (if (js/isNaN x') default x'))))

(defn parse-long
  [^String x radix & [default]]
  #?(:clj
     (try (Long/parseLong x radix) (catch Exception e default))
     :cljs
     (parse-int x radix default)))

(defn parse-float
  [^String x & [default]]
  #?(:clj
     (try (Float/parseFloat x) (catch Exception e default))
     :cljs
     (let [x' (js/parseFloat x)] (if (js/isNaN x') default x'))))

(defn parse-double
  [^String x & [default]]
  #?(:clj
     (try (Double/parseDouble x) (catch Exception e default))
     :cljs
     (parse-float x default)))

(defn parse-boolean
  [^String x]
  #?(:clj
     (Boolean/parseBoolean x)
     :cljs
     (= "true" (str/lower-case x))))

(def int clojure.core/int)

(def long #?(:clj clojure.core/long :cljs int))

(def float
  (memoize
   (fn [prec]
     #?(:clj
        (let [fmt (str "%1." prec "f")]
          (fn [x] (clojure.core/format fmt (clojure.core/float x))))
        :cljs
        (fn [x] (.toFixed (js/Number. x) prec))))))

(def double
  (memoize
   (fn [prec]
     #?(:clj
        (let [fmt (str "%1." prec "f")]
          (fn [x] (clojure.core/format fmt (clojure.core/double x))))
        :cljs
        (fn [x] (.toFixed (js/Number. x) prec))))))

(def pad-left
  (memoize
   (fn [len fill]
     (let [fill (apply str (repeat len fill))]
       (fn [x]
         (let [l (count x)]
           (if (< l len) (str (subs fill 0 (- len l)) x) x)))))))

(def pad-right
  (memoize
   (fn [len fill]
     (let [fill (apply str (repeat len fill))]
       (fn [x]
         (let [l (count x)]
           (if (< l len) (str x (subs fill 0 (- len l))) x)))))))

(def hex
  (memoize
   (fn [len]
     #?(:clj
        (let [fmt (str "%0" len "x")]
          (fn [x] (clojure.core/format fmt (long x))))
        :cljs
        (let [pad (pad-left len "0")]
          (fn [x] (pad (.toString (js/Number. (int x)) 16))))))))

(defn trunc-left
  [len]
  (fn [x]
    (let [l (count x)]
      (if (<= l len) x (subs x 0 len)))))

(defn trunc-right
  [len]
  (fn [x]
    (let [l (count x)]
      (if (<= l len) x (subs x (- l len))))))

(defn format
  [fmt & args]
  #?(:clj
     (loop [s (StringBuilder.), fmt fmt, args args]
       (if-let [f (first fmt)]
         (if (string? f)
           (recur (.append s f) (next fmt) args)
           (recur (.append s (f (first args))) (next fmt) (next args)))
         (.toString s)))
     :cljs
     (loop [s [], fmt fmt, args args]
       (if-let [f (first fmt)]
         (if (string? f)
           (recur (conj s f) (next fmt) args)
           (recur (conj s (f (first args))) (next fmt) (next args)))
         (apply str s)))))

#?(:clj
   (defn calendar-instance
     ^Calendar [d] (doto (Calendar/getInstance) (.setTime ^Date d))))

(defn date-fields
  [d]
  #?(:clj
     (let [c (calendar-instance d)]
       [(.get c Calendar/YEAR)
        (inc (.get c Calendar/MONTH))
        (.get c Calendar/DAY_OF_MONTH)])
     :cljs
     [[(.getFullYear d)
       (inc (.getMonth d))
       (.getDate d)]]))

(defn time-fields
  [d]
  #?(:clj
     (let [c (calendar-instance d)]
       [(.get c Calendar/HOUR_OF_DAY)
        (inc (.get c Calendar/MINUTE))
        (.get c Calendar/SECOND)])
     :cljs
     [[(.getHours d)
       (.getMinutes d)
       (.getSeconds d)]]))

(defn datetime-fields
  [d]
  #?(:clj
     (let [c (calendar-instance d)]
       [(.get c Calendar/YEAR)
        (inc (.get c Calendar/MONTH))
        (.get c Calendar/DAY_OF_MONTH)
        (.get c Calendar/HOUR_OF_DAY)
        (inc (.get c Calendar/MINUTE))
        (.get c Calendar/SECOND)])
     :cljs
     [[(.getFullYear d)
       (inc (.getMonth d))
       (.getDate d)
       (.getHours d)
       (.getMinutes d)
       (.getSeconds d)]]))

(def date-formatters
  (let [d2 (comp (pad-left 2 "0") str)]
    {:yyyy-mm-dd
     (fn [d]
       (apply format [str "-" d2 "-" d2] (date-fields d)))
     :yyyy-mm-dd-hh-mm-ss
     (fn [d]
       (apply format [str "-" d2 "-" d2 " " d2 ":" d2 ":" d2] (datetime-fields d)))
     :yyyymmdd-hhmmss
     (fn [d]
       (apply format [str d2 d2 "-" d2 d2 d2] (datetime-fields d)))
     :dd-mm-yyyy
     (fn [d]
       (let [[y m d] (date-fields d)]
         (format [d2 "/" d2 "/" str] d m y)))
     :mm-dd-yyyy
     (fn [d]
       (let [[y m d] (date-fields d)]
         (format [d2 "/" d2 "/" str] m d y)))
     :dd-mm-yy
     (fn [d]
       (let [[y m d] (date-fields d)]
         (format [d2 "/" d2 "/" (comp d2 #(mod % 100))] d m y)))
     :hh-mm-ss
     (fn [d]
       (apply format [d2 ":" d2 ":" d2] (time-fields d)))}))

(defn format-date
  ([d] ((date-formatters :yyyy-mm-dd-hh-mm-ss) d))
  ([fmt d] (if (fn? fmt) (fmt d) ((date-formatters fmt) d))))

(defn now
  [] #?(:clj (Date.) :cljs (js/Date.)))

(defn timestamp
  [] #?(:clj (System/currentTimeMillis) :cljs (.getTime (js/Date.))))

(def ^:private format-16bit-hex (pad-left 4 \0))

(defn rand-bits
  [bits] (int (* (rand) (bit-shift-left 1 bits))))

(defn rand-bits-hex
  [bits]
  ((pad-left (Math/ceil (/ bits 4)) \0)
   (#?(:clj Integer/toString :cljs .toString) (rand-bits bits) 16)))

(defn rand-16bits-hex
  [] (format-16bit-hex (#?(:clj Integer/toString :cljs .toString) (rand-int 0x10000) 16)))

(defn new-uuid
  []
  #?(:clj
     (str (java.util.UUID/randomUUID))
     :cljs (str
            (rand-16bits-hex) (rand-16bits-hex)
            \- (rand-16bits-hex)
            \- (-> (rand-bits 16) (bit-and 0x0fff) (bit-or 0x4000) (.toString 16) (format-16bit-hex))
            \- (-> (rand-bits 16) (bit-and 0x3fff) (bit-or 0x8000) (.toString 16) (format-16bit-hex))
            \- (rand-16bits-hex) (rand-16bits-hex) (rand-16bits-hex))))

(def html-entities
  {\& "&amp;"
   \< "&lt;"
   \> "&gt;"
   \" "&quot;"})

(defn as-str [x]
  (if (or (keyword? x) (symbol? x))
    (name x)
    (str x)))

(defn escape-html
  [x] (str/escape (as-str x) html-entities))
