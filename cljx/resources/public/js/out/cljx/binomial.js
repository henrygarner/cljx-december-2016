// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljx.binomial');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('thi.ng.geom.viz.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.svg.core');
cljx.binomial.n = (50);
cljx.binomial.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"trials","trials",-308874149),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"n","n",562130025),(25),new cljs.core.Keyword(null,"p","p",151049309),(50)], null));
cljx.binomial.range_controller = (function cljx$binomial$range_controller(p__19069){
var map__19072 = p__19069;
var map__19072__$1 = ((((!((map__19072 == null)))?((((map__19072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19072):map__19072);
var range = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var label = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var state = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_path = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword(null,"key-path","key-path",878473308));
var disabled = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
var value = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),key_path);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.medium-6.small-4.columns","div.medium-6.small-4.columns",-700584305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.right","label.right",-940421677),[cljs.core.str(label),cljs.core.str(": "),cljs.core.str(value)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.medium-6.small-8.columns","div.medium-6.small-8.columns",-575683524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"min","min",444991522),cljs.core.apply.call(null,cljs.core.min,range),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.apply.call(null,cljs.core.max,range),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value,map__19072,map__19072__$1,range,label,state,key_path,disabled){
return (function (p1__19068_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,key_path,(p1__19068_SHARP_.target.value | (0)));
});})(value,map__19072,map__19072__$1,range,label,state,key_path,disabled))
], null)], null)], null)], null);
});
cljx.binomial.controllers = (function cljx$binomial$controllers(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Parameters"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.binomial.range_controller,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null),new cljs.core.Keyword(null,"label","label",1718410804),"n",new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.binomial.range_controller,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null),new cljs.core.Keyword(null,"label","label",1718410804),"p (x 100)",new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)], null)], null)], null)], null);
});
cljx.binomial.bernoulli_trial = (function cljx$binomial$bernoulli_trial(n){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_int.call(null,(2));
})));
});
cljx.binomial.binomial_distribution = (function cljx$binomial$binomial_distribution(p__19074){
var map__19077 = p__19074;
var map__19077__$1 = ((((!((map__19077 == null)))?((((map__19077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19077):map__19077);
var n = cljs.core.get.call(null,map__19077__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p = cljs.core.get.call(null,map__19077__$1,new cljs.core.Keyword(null,"p","p",151049309));
return ((function (map__19077,map__19077__$1,n,p){
return (function (v){
return jStat.binomial.pdf(Math.round(v),n,(p / (100)));
});
;})(map__19077,map__19077__$1,n,p))
});
cljx.binomial.bar_spec = (function cljx$binomial$bar_spec(num,width){
return (function (idx,col,values){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.map_indexed.call(null,cljs.core.vector,values),new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),col,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),[cljs.core.str((width - (1))),cljs.core.str("px")].join('')], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),thi.ng.geom.viz.core.svg_bar_plot,new cljs.core.Keyword(null,"interleave","interleave",-1475043421),num,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),width,new cljs.core.Keyword(null,"offset","offset",296498311),idx], null);
});
});
cljx.binomial.viz_spec = (function cljx$binomial$viz_spec(p__19079){
var map__19082 = p__19079;
var map__19082__$1 = ((((!((map__19082 == null)))?((((map__19082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19082):map__19082);
var n = cljs.core.get.call(null,map__19082__$1,new cljs.core.Keyword(null,"n","n",562130025));
var values = cljs.core.get.call(null,map__19082__$1,new cljs.core.Keyword(null,"values","values",372645556));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),n], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(380)], null),new cljs.core.Keyword(null,"major","major",-27376078),(5),new cljs.core.Keyword(null,"pos","pos",-864607220),(280),new cljs.core.Keyword(null,"label","label",1718410804),thi.ng.geom.viz.core.default_svg_label.call(null,cljs.core.int$)], null)),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.call(null,cljs.core.max,values)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(280),(20)], null),new cljs.core.Keyword(null,"major","major",-27376078),(10),new cljs.core.Keyword(null,"minor","minor",-608536071),(5),new cljs.core.Keyword(null,"pos","pos",-864607220),(50),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(15),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null)], null)),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minor-y","minor-y",388125550),true], null)], null);
});
cljx.binomial.svg_histogram_plot = (function cljx$binomial$svg_histogram_plot(data){
var map__19087 = data;
var map__19087__$1 = ((((!((map__19087 == null)))?((((map__19087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19087):map__19087);
var n = cljs.core.get.call(null,map__19087__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p = cljs.core.get.call(null,map__19087__$1,new cljs.core.Keyword(null,"p","p",151049309));
var xs = cljs.core.map.call(null,((function (map__19087,map__19087__$1,n,p){
return (function (p1__19084_SHARP_){
return jStat.binomial.pdf(p1__19084_SHARP_,n,(p / (100)));
});})(map__19087,map__19087__$1,n,p))
,cljs.core.range.call(null,(0),(n + (1))));
return thi.ng.geom.viz.core.svg_plot2d_cartesian.call(null,cljs.core.assoc.call(null,cljx.binomial.viz_spec.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"values","values",372645556),xs)),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.binomial.bar_spec.call(null,(1),(6)).call(null,(0),"#0af",xs)], null)));
});
cljx.binomial.layout_binomial_simulation_interface = (function cljx$binomial$layout_binomial_simulation_interface(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.medium-5.medium-push-7.columns","div.medium-5.medium-push-7.columns",-925531399),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.binomial.controllers,cljx.binomial.state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.medium-7.medium-pull-5.columns","div.medium-7.medium-pull-5.columns",-896174807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"content","content",15833224)], null),thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),cljx.binomial.svg_histogram_plot.call(null,cljs.core.deref.call(null,cljx.binomial.state)))], null)], null)], null);
});
cljx.binomial.run = (function cljx$binomial$run(){
var tick = (function (p__19092){
var map__19093 = p__19092;
var map__19093__$1 = ((((!((map__19093 == null)))?((((map__19093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19093):map__19093);
var state = map__19093__$1;
var trials = cljs.core.get.call(null,map__19093__$1,new cljs.core.Keyword(null,"trials","trials",-308874149));
var timer = cljs.core.get.call(null,map__19093__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if((cljs.core.count.call(null,trials) > (1000))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"trials","trials",-308874149),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"trials","trials",-308874149),cljs.core.conj,cljx.binomial.bernoulli_trial.call(null,cljx.binomial.n));
}
});
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.binomial.layout_binomial_simulation_interface], null),document.getElementById("root"));
});

//# sourceMappingURL=binomial.js.map