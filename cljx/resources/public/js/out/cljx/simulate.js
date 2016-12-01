// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljx.simulate');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('thi.ng.geom.viz.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.svg.core');
cljx.simulate.n = (50);
cljx.simulate.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trials","trials",-308874149),cljs.core.PersistentVector.EMPTY], null));
cljx.simulate.bernoulli_trial = (function cljx$simulate$bernoulli_trial(n){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_int.call(null,(2));
})));
});
cljx.simulate.bar_spec = (function cljx$simulate$bar_spec(num,width){
return (function (idx,col,values){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.map_indexed.call(null,cljs.core.vector,values),new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),col,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),[cljs.core.str((width - (1))),cljs.core.str("px")].join('')], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),thi.ng.geom.viz.core.svg_bar_plot,new cljs.core.Keyword(null,"interleave","interleave",-1475043421),num,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),width,new cljs.core.Keyword(null,"offset","offset",296498311),idx], null);
});
});
cljx.simulate.viz_spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljx.simulate.n], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(580)], null),new cljs.core.Keyword(null,"major","major",-27376078),(5),new cljs.core.Keyword(null,"pos","pos",-864607220),(280),new cljs.core.Keyword(null,"label","label",1718410804),thi.ng.geom.viz.core.default_svg_label.call(null,cljs.core.int$)], null)),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(280),(20)], null),new cljs.core.Keyword(null,"major","major",-27376078),(10),new cljs.core.Keyword(null,"minor","minor",-608536071),(5),new cljs.core.Keyword(null,"pos","pos",-864607220),(50),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(15),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null)], null)),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minor-y","minor-y",388125550),true], null)], null);
cljx.simulate.svg_histogram_plot = (function cljx$simulate$svg_histogram_plot(data){
var hist = cljs.core.frequencies.call(null,data);
var xs = cljs.core.map.call(null,((function (hist){
return (function (p1__8662_SHARP_){
return cljs.core.get.call(null,hist,p1__8662_SHARP_,(0));
});})(hist))
,cljs.core.range.call(null,(0),(cljx.simulate.n + (1))));
return thi.ng.geom.viz.core.svg_plot2d_cartesian.call(null,cljs.core.assoc.call(null,cljx.simulate.viz_spec,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.simulate.bar_spec.call(null,(1),(10)).call(null,(0),"#0af",xs)], null)));
});
cljx.simulate.layout_binomial_simulation_interface = (function cljx$simulate$layout_binomial_simulation_interface(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),cljx.simulate.svg_histogram_plot.call(null,new cljs.core.Keyword(null,"trials","trials",-308874149).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljx.simulate.state))))], null);
});
cljx.simulate.run = (function cljx$simulate$run(){
var tick = (function (p__8666){
var map__8667 = p__8666;
var map__8667__$1 = ((((!((map__8667 == null)))?((((map__8667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8667):map__8667);
var state = map__8667__$1;
var trials = cljs.core.get.call(null,map__8667__$1,new cljs.core.Keyword(null,"trials","trials",-308874149));
var timer = cljs.core.get.call(null,map__8667__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if((cljs.core.count.call(null,trials) > (1000))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"trials","trials",-308874149),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"trials","trials",-308874149),cljs.core.conj,cljx.simulate.bernoulli_trial.call(null,cljx.simulate.n));
}
});
var _ = window.setInterval(((function (tick){
return (function (){
return cljs.core.swap_BANG_.call(null,cljx.simulate.state,tick);
});})(tick))
,(10));
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.simulate.layout_binomial_simulation_interface], null),document.getElementById("root"));
});

//# sourceMappingURL=simulate.js.map