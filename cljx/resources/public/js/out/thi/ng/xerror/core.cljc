(ns thi.ng.xerror.core)

(defn throw!
  [^String msg]
  (throw #?(:clj (IllegalArgumentException. msg) :cljs (js/Error. msg))))

(defn key-error!
  [k] (throw! (str "Illegal lookup key: " k)))

(defn type-error!
  [t x] (throw! (str "Can't cast to " t " from " (pr-str x))))

(defn arity-error!
  [n] (throw! (str "Wrong number of args: " n)))

(defn illegal-arg!
  ([x] (illegal-arg! "Illegal argument" x))
  ([msg x] (throw! (str msg ": " x))))

(defn unsupported!
  ([] (unsupported! "Unsupported operation"))
  ([^String msg]
   (throw #?(:clj (UnsupportedOperationException. msg) :cljs (js/Error. msg)))))
