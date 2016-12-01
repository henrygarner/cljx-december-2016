(defproject cljx "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [kixi/stats "0.2.4"]
                 [incanter "1.5.7"]
                 [net.mikera/core.matrix "0.56.0"]
                 [cc.artifice/clj-ml "0.5.1"]
                 [thinktopic/cortex "0.2.1-SNAPSHOT"]
                 [thinktopic/cortex-datasets "0.3.0-SNAPSHOT"]
                 [thinktopic/compute "0.1.0-SNAPSHOT"]
                 [thinktopic/gpu-compute "0.1.0-SNAPSHOT"]
                 [thinktopic/cortex-visualization "0.1.0-SNAPSHOT"]
                 [org.apache.commons/commons-math3 "3.4.1"]
                 [thi.ng/geom "0.0.908"]
                 [reagent "0.6.0"]]
  :source-paths ["src/clj" "src/cljs"]
  :plugins [[lein-gorilla "0.3.6"]
            [lein-figwheel "0.5.1"]
            [lein-cljsbuild "1.1.4"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds [{:id "figwheel"
                        :source-paths ["src/"]
                        :figwheel true
                        :compiler {:main "cljx.core"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"}}]})

