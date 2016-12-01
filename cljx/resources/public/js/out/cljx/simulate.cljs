(ns cljx.simulate
  (:require [reagent.core :as r]
            [thi.ng.geom.viz.core :as viz]
            [thi.ng.math.core :as m :refer [PI]]
            [thi.ng.geom.svg.core :as svg]))
(def n 50)

(def state
  (r/atom {:trials []}))

(defn bernoulli-trial [n]
  (reduce + (repeatedly n #(rand-int 2))))

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

(def viz-spec
  {:x-axis (viz/linear-axis
            {:domain [0 n]
             :range  [50 580]
             :major  5
             :pos    280
             :label  (viz/default-svg-label int)})
   :y-axis (viz/linear-axis
            {:domain      [0 100]
             :range       [280 20]
             :major       10
             :minor       5
             :pos         50
             :label-dist  15
             :label-style {:text-anchor "end"}})
   :grid   {:minor-y true}})

(defn svg-histogram-plot [data]
  (let [hist (frequencies data)
        xs (map #(get hist % 0) (range 0 (inc n)))]
    (-> viz-spec
        (assoc :data [((bar-spec 1 10) 0 "#0af" xs)])
        (viz/svg-plot2d-cartesian))))


(defn layout-binomial-simulation-interface
  []
  [:div (svg/svg {:width 600 :height 400}
                 (svg-histogram-plot (:trials @state)))])


(defn run []
  (let [tick (fn [{:keys [trials timer] :as state}]
               (if (> (count trials) 1000)
                 (assoc state :trials [])
                 (update state :trials conj (bernoulli-trial n))))
        _ (js/window.setInterval #(swap! state tick) 10)]
    (r/render-component
     [layout-binomial-simulation-interface]
     (.getElementById js/document "root"))))
