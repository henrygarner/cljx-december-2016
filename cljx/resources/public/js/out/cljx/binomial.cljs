(ns cljx.binomial
  (:require [reagent.core :as r]
            [thi.ng.geom.viz.core :as viz]
            [thi.ng.math.core :as m :refer [PI]]
            [thi.ng.geom.svg.core :as svg]))

(def n 50)

(def state
  (r/atom {:trials []
           :n 25
           :p 50}))

(defn range-controller [{:keys [range label state key-path disabled]
                         :or {disabled false}}]
  (let [value (get-in @state key-path)]
    [:div.row
     [:div.medium-6.small-4.columns
      [:label.right (str label ": " value)]]
     [:div.medium-6.small-8.columns
      [:input {:type "range"
               :value value
               :disabled disabled
               :min (apply min range)
               :max (apply max range)
               :on-change #(swap! state assoc-in key-path (-> % .-target .-value int))}]]]))

(defn controllers [state]
  [:form
   [:fieldset
    [:legend "Parameters"]
    [range-controller {:range [0 50]
                       :label "n"
                       :state state
                       :key-path [:n]}]
    [range-controller {:range [0 100]
                       :label "p (x 100)"
                       :state state
                       :key-path [:p]}]]])

(defn bernoulli-trial [n]
  (reduce + (repeatedly n #(rand-int 2))))

(defn binomial-distribution [{:keys [n p]}]
  (fn [v]
    (js/jStat.binomial.pdf (js/Math.round v) n (/ p 100))))

(defn bar-spec
  [num width]
  (fn [idx col values]
    {:values     (map-indexed vector values)
     :attribs    {:stroke       col
                  :stroke-width (str (dec width) "px")}
     :layout     viz/svg-bar-plot
     :interleave num
     :bar-width  width
     :offset     idx}))

(defn viz-spec [{:keys [n values]}]
  {:x-axis (viz/linear-axis
            {:domain [0 n]
             :range  [50 380]
             :major  5
             :pos    280
             :label  (viz/default-svg-label int)})
   :y-axis (viz/linear-axis
            {:domain      [0 (apply max values)]
             :range       [280 20]
             :major       10
             :minor       5
             :pos         50
             :label-dist  15
             :label-style {:text-anchor "end"}})
   :grid   {:minor-y true}})

(defn svg-histogram-plot [data]
  (let [{:keys [n p]} data
        xs (map #(js/jStat.binomial.pdf % n (/ p 100)) (range 0 (inc n)))]
    (-> (viz-spec (assoc data :values xs))
        (assoc :data [((bar-spec 1 6) 0 "#0af" xs)])
        (viz/svg-plot2d-cartesian))))

(defn layout-binomial-simulation-interface
  []
  [:div
   [:div.row
    [:div.medium-5.medium-push-7.columns
     [controllers state]]
    [:div.medium-7.medium-pull-5.columns {:role :content}
     (svg/svg {:width 400 :height 400}
            (svg-histogram-plot @state))]]])


(defn run []
  (let [tick (fn [{:keys [trials timer] :as state}]
               (if (> (count trials) 1000)
                 (assoc state :trials [])
                 (update state :trials conj (bernoulli-trial n))))]
    (r/render-component
     [layout-binomial-simulation-interface]
     (.getElementById js/document "root"))))
