(ns cljx.core
  (:require [cljx.simulate]
            [cljx.binomial]
            [reagent.core :as r]
            [thi.ng.geom.viz.core :as viz]
            [thi.ng.math.core :as m :refer [PI]]
            [thi.ng.geom.svg.core :as svg]))

(defn mean [xs]
  (/ (apply + xs)
     (count xs)))

(defn randexp [lambda]
  (js/jStat.exponential.sample lambda))

(defn exponential-distribution [lambda]
  (repeatedly #(randexp lambda)))

(defn update-sample [{:keys [mean-a mean-b sample-size]
                      :as state}]
  (let [sample-a (->> (float (/ 1 mean-a))
                      (exponential-distribution)
                      (take sample-size))
        sample-b (->> (float (/ 1 mean-b))
                      (exponential-distribution)
                      (take sample-size))]
    (-> state
        (assoc :sample-a sample-a)
        (assoc :sample-b sample-b)
        (assoc :sample-mean-a (int (mean sample-a)))
        (assoc :sample-mean-b (int (mean sample-b))))))

(defn update-sample! [state]
  (swap! state update-sample))

(def state
  (doto (r/atom {:sample-a []
                 :sample-b []
                 :sample-mean-a nil
                 :sample-mean-b nil
                 :alpha 1
                 :beta 1
                 :n 0
                 :k 0
                 :mean-a 60
                 :mean-b 60
                 :sample-size 50})
    (update-sample!)))

(defn set-derived! [{:keys [k n] :as state}]
  (-> (assoc state :alpha (inc k))
      (assoc :beta (inc (- n k)))))

(defn constrain [{:keys [n k] :as state}]
  (assoc state :k (min k n)))

(defn range-controller [{:keys [range label state key-path disabled]
                         :or {disabled false}}]
  (let [value (get-in @state key-path)]
    [:div.row
     [:div.large-6.medium-4.small-7.columns
      [:label.right (str label ": " value)]]
     [:div.large-6.medium-8.small-5.columns
      [:input {:type "range"
               :value value
               :disabled disabled
               :min (apply min range)
               :max (apply max range)
               :on-change #(do (swap! state assoc-in key-path (-> % .-target .-value int))
                               (swap! state constrain)
                               (swap! state set-derived!))}]]]))

(defn new-sample [state]
  [:a.button {:role "button" :on-click #(update-sample! state)} "New Sample"])

(defn single-beta-controllers [state]
  [:form
   [:fieldset
    [:legend "Observed"]
    [range-controller {:range [0 50]
                       :label "n"
                       :state state
                       :key-path [:n]}]
    [range-controller {:range [0 50]
                       :label "k"
                       :state state
                       :key-path [:k]}]]
   [:fieldset
    [:legend "Parameters"]
    [range-controller {:range [0 50]
                       :label "Alpha"
                       :state state
                       :disabled true
                       :key-path [:alpha]}]
    [range-controller {:range [0 50]
                       :label "Beta"
                       :state state
                       :disabled true
                       :key-path [:beta]}]]])

(defn single-binomial-controllers [state]
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


#_(defn sample-histograms [sample-a sample-b]
  (-> (c/histogram sample-a :x-axis [0 200] :bins 20)
      (c/add-histogram sample-b)
      (svg/as-svg :width 550 :height 400)))

#_(defn sample-means [sample-a sample-b alpha]
  (-> (c/function-area-plot (probability-density sample-a alpha)
                            :x-axis [0 200])
      (c/add-function (probability-density sample-b alpha))
      (svg/as-svg :width 550 :height 250)))

(defn beta-distribution [{:keys [alpha beta]}]
  (fn [v]
    (js/jStat.beta.pdf v alpha beta)))

(defn binomial-distribution [{:keys [n p]}]
  (fn [v]
    (js/jStat.binomial.pdf (js/Math.round v) n (/ p 100))))

(defn line-attributes [values color]
  {:values values
   :attribs {:fill "none" :stroke color}
   :layout viz/svg-line-plot})

(defn multi-spec [{:keys [height data colors]
                   :or {height 200
                        data []}}]
  (let [distributions (map beta-distribution data)
        xs (m/norm-range 200)
        ys (map #(map % xs) distributions)
        all-ys (apply concat ys)
        values (map #(map vector xs %) ys)]
    {:x-axis (viz/linear-axis
              {:domain [0 1]
               :range [50 380]
               :major 0.25
               :minor 0.05
               :pos height})
     :y-axis (viz/linear-axis
              {:domain [0 20 #_(apply max all-ys)]
               :range [height 20]
               :pos 50
               :label-dist 15
               :label-style {:text-anchor "end"}})
     :grid   {:attribs {:stroke "#caa"} :minor-y true}
     :data   (map line-attributes values (cycle colors))}))


(defn binomial-spec [{:keys [height data colors]
                      :or {height 200
                           data []}}]
  (let [distributions (map binomial-distribution data)
        n (-> data first :n)
        xs (map #(* % n) (m/norm-range 500))
        ys (map #(map % xs) distributions)
        all-ys (apply concat ys)
        values (map #(map vector xs %) ys)]
    {:x-axis (viz/linear-axis
              {:domain [0 n]
               :range [50 580]
               :major 5
               :minor nil
               :pos height})
     :y-axis (viz/linear-axis
              {:domain [0 0.5 #_(apply max all-ys)]
               :range [height 20]
               :pos 50
               :label-dist 15
               :label-style {:text-anchor "end"}})
     :grid   {:attribs {:stroke "#caa"} :minor-y true}
     :data   (map line-attributes values (cycle colors))}))

(defn chart [state]
  (let [height 250
        data [{:alpha (-> @state :alpha) :beta (-> @state :beta)}]
        colors ["#C2185B" "#4CAF50" "#673AB7" "#FF5722" "#2196F3" "#FFA000"]]
    (svg/svg {:width 400 :height (+ height 20)}
             (viz/svg-plot2d-cartesian (multi-spec {:data data
                                                    :height height
                                                    :colors colors})))))

(defn binomial-chart [state]
  (let [height 200
        data [(select-keys @state [:n :p])]
        colors ["#C2185B" "#4CAF50" "#673AB7" "#FF5722" "#2196F3" "#FFA000"]]
    (svg/svg {:width 600 :height (+ height 20)}
             (viz/svg-plot2d-cartesian (binomial-spec {:data data
                                                       :height height
                                                       :colors colors})))))


(defn layout-interface []
  [:div
   [:div.row
    [:div.medium-5.medium-push-7.columns
     [single-beta-controllers state]]
    [:div.medium-7.medium-pull-5.columns {:role :content}
     [chart state]]]])

(defn layout-binomial-interface []
  [:div
   [:div.row
    [:div.large-5.large-push-7.columns
     [single-binomial-controllers state]]
    [:div.large-7.large-pull-5.columns {:role :content}
     [binomial-chart state]]]])

(defn single-beta []
  (r/render-component
   [layout-interface]
   (.getElementById js/document "root")))

(defn binomial []
  (r/render-component
   [layout-binomial-interface]
   (.getElementById js/document "root")))






(def simulation-state
  (r/atom {:trials []}))

(defn bar-spec [data]
  (let [width 6
        col "#0af"]
    {:values     data
     :attribs    {:stroke       col
                  :stroke-width (str (dec width) "px")}
     :layout     viz/svg-bar-plot
     :bar-width  width
     :offset     0
     }))

(defn simulation-spec [{:keys [height data n]
                        :or {height 200}}]
  (let [hist (frequencies data)
        data (map #(get hist % 0) (range 0 (inc n)))]
    {:x-axis (viz/linear-axis
              {:domain [0 n]
               :range [50 580]
               :major 2
               :minor 1
               :pos height})
     :y-axis (viz/linear-axis
              {:domain [0 5]
               :range [height 20]
               :pos 50
               :label-dist 15
               :label-style {:text-anchor "end"}})
     :grid   {:attribs {:stroke "#caa"} :minor-y true}
     :data   (bar-spec data)
     }))

