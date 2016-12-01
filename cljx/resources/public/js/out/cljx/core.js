// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljx.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.viz.core');
goog.require('cljx.binomial');
goog.require('reagent.core');
goog.require('cljx.simulate');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
cljx.core.mean = (function cljx$core$mean(xs){
return (cljs.core.apply.call(null,cljs.core._PLUS_,xs) / cljs.core.count.call(null,xs));
});
cljx.core.randexp = (function cljx$core$randexp(lambda){
return jStat.exponential.sample(lambda);
});
cljx.core.exponential_distribution = (function cljx$core$exponential_distribution(lambda){
return cljs.core.repeatedly.call(null,(function (){
return cljx.core.randexp.call(null,lambda);
}));
});
cljx.core.update_sample = (function cljx$core$update_sample(p__8671){
var map__8674 = p__8671;
var map__8674__$1 = ((((!((map__8674 == null)))?((((map__8674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8674):map__8674);
var state = map__8674__$1;
var mean_a = cljs.core.get.call(null,map__8674__$1,new cljs.core.Keyword(null,"mean-a","mean-a",-759665776));
var mean_b = cljs.core.get.call(null,map__8674__$1,new cljs.core.Keyword(null,"mean-b","mean-b",1524022490));
var sample_size = cljs.core.get.call(null,map__8674__$1,new cljs.core.Keyword(null,"sample-size","sample-size",-783113780));
var sample_a = cljs.core.take.call(null,sample_size,cljx.core.exponential_distribution.call(null,((1) / mean_a)));
var sample_b = cljs.core.take.call(null,sample_size,cljx.core.exponential_distribution.call(null,((1) / mean_b)));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"sample-a","sample-a",-206967920),sample_a),new cljs.core.Keyword(null,"sample-b","sample-b",-334862754),sample_b),new cljs.core.Keyword(null,"sample-mean-a","sample-mean-a",-813055430),(cljx.core.mean.call(null,sample_a) | (0))),new cljs.core.Keyword(null,"sample-mean-b","sample-mean-b",-1017488609),(cljx.core.mean.call(null,sample_b) | (0)));
});
cljx.core.update_sample_BANG_ = (function cljx$core$update_sample_BANG_(state){
return cljs.core.swap_BANG_.call(null,state,cljx.core.update_sample);
});
cljx.core.state = (function (){var G__8676 = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"sample-size","sample-size",-783113780),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"mean-a","mean-a",-759665776),new cljs.core.Keyword(null,"sample-a","sample-a",-206967920),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"mean-b","mean-b",1524022490),new cljs.core.Keyword(null,"sample-mean-a","sample-mean-a",-813055430),new cljs.core.Keyword(null,"sample-b","sample-b",-334862754),new cljs.core.Keyword(null,"sample-mean-b","sample-mean-b",-1017488609)],[(1),(0),(50),(0),(60),cljs.core.PersistentVector.EMPTY,(1),(60),null,cljs.core.PersistentVector.EMPTY,null]));
cljx.core.update_sample_BANG_.call(null,G__8676);

return G__8676;
})();
cljx.core.set_derived_BANG_ = (function cljx$core$set_derived_BANG_(p__8677){
var map__8680 = p__8677;
var map__8680__$1 = ((((!((map__8680 == null)))?((((map__8680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8680):map__8680);
var state = map__8680__$1;
var k = cljs.core.get.call(null,map__8680__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var n = cljs.core.get.call(null,map__8680__$1,new cljs.core.Keyword(null,"n","n",562130025));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(k + (1))),new cljs.core.Keyword(null,"beta","beta",455605892),((n - k) + (1)));
});
cljx.core.constrain = (function cljx$core$constrain(p__8682){
var map__8685 = p__8682;
var map__8685__$1 = ((((!((map__8685 == null)))?((((map__8685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8685):map__8685);
var state = map__8685__$1;
var n = cljs.core.get.call(null,map__8685__$1,new cljs.core.Keyword(null,"n","n",562130025));
var k = cljs.core.get.call(null,map__8685__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"k","k",-2146297393),(function (){var x__6881__auto__ = k;
var y__6882__auto__ = n;
return ((x__6881__auto__ < y__6882__auto__) ? x__6881__auto__ : y__6882__auto__);
})());
});
cljx.core.range_controller = (function cljx$core$range_controller(p__8688){
var map__8691 = p__8688;
var map__8691__$1 = ((((!((map__8691 == null)))?((((map__8691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8691):map__8691);
var range = cljs.core.get.call(null,map__8691__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var label = cljs.core.get.call(null,map__8691__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var state = cljs.core.get.call(null,map__8691__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_path = cljs.core.get.call(null,map__8691__$1,new cljs.core.Keyword(null,"key-path","key-path",878473308));
var disabled = cljs.core.get.call(null,map__8691__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
var value = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),key_path);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.large-6.medium-4.small-7.columns","div.large-6.medium-4.small-7.columns",1312706140),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.right","label.right",-940421677),[cljs.core.str(label),cljs.core.str(": "),cljs.core.str(value)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.large-6.medium-8.small-5.columns","div.large-6.medium-8.small-5.columns",196715848),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"min","min",444991522),cljs.core.apply.call(null,cljs.core.min,range),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.apply.call(null,cljs.core.max,range),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value,map__8691,map__8691__$1,range,label,state,key_path,disabled){
return (function (p1__8687_SHARP_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,key_path,(p1__8687_SHARP_.target.value | (0)));

cljs.core.swap_BANG_.call(null,state,cljx.core.constrain);

return cljs.core.swap_BANG_.call(null,state,cljx.core.set_derived_BANG_);
});})(value,map__8691,map__8691__$1,range,label,state,key_path,disabled))
], null)], null)], null)], null);
});
cljx.core.new_sample = (function cljx$core$new_sample(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljx.core.update_sample_BANG_.call(null,state);
})], null),"New Sample"], null);
});
cljx.core.single_beta_controllers = (function cljx$core$single_beta_controllers(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Observed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.range_controller,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null),new cljs.core.Keyword(null,"label","label",1718410804),"n",new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.range_controller,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null),new cljs.core.Keyword(null,"label","label",1718410804),"k",new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Parameters"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.range_controller,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null),new cljs.core.Keyword(null,"label","label",1718410804),"Alpha",new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.range_controller,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null),new cljs.core.Keyword(null,"label","label",1718410804),"Beta",new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892)], null)], null)], null)], null)], null);
});
cljx.core.single_binomial_controllers = (function cljx$core$single_binomial_controllers(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Parameters"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.range_controller,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null),new cljs.core.Keyword(null,"label","label",1718410804),"n",new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.range_controller,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null),new cljs.core.Keyword(null,"label","label",1718410804),"p (x 100)",new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)], null)], null)], null)], null);
});
cljx.core.beta_distribution = (function cljx$core$beta_distribution(p__8693){
var map__8696 = p__8693;
var map__8696__$1 = ((((!((map__8696 == null)))?((((map__8696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8696):map__8696);
var alpha = cljs.core.get.call(null,map__8696__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var beta = cljs.core.get.call(null,map__8696__$1,new cljs.core.Keyword(null,"beta","beta",455605892));
return ((function (map__8696,map__8696__$1,alpha,beta){
return (function (v){
return jStat.beta.pdf(v,alpha,beta);
});
;})(map__8696,map__8696__$1,alpha,beta))
});
cljx.core.binomial_distribution = (function cljx$core$binomial_distribution(p__8698){
var map__8701 = p__8698;
var map__8701__$1 = ((((!((map__8701 == null)))?((((map__8701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8701):map__8701);
var n = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"p","p",151049309));
return ((function (map__8701,map__8701__$1,n,p){
return (function (v){
return jStat.binomial.pdf(Math.round(v),n,(p / (100)));
});
;})(map__8701,map__8701__$1,n,p))
});
cljx.core.line_attributes = (function cljx$core$line_attributes(values,color){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),thi.ng.geom.viz.core.svg_line_plot], null);
});
cljx.core.multi_spec = (function cljx$core$multi_spec(p__8705){
var map__8708 = p__8705;
var map__8708__$1 = ((((!((map__8708 == null)))?((((map__8708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8708):map__8708);
var height = cljs.core.get.call(null,map__8708__$1,new cljs.core.Keyword(null,"height","height",1025178622),(200));
var data = cljs.core.get.call(null,map__8708__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var colors = cljs.core.get.call(null,map__8708__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var distributions = cljs.core.map.call(null,cljx.core.beta_distribution,data);
var xs = thi.ng.math.core.norm_range.call(null,(200));
var ys = cljs.core.map.call(null,((function (distributions,xs,map__8708,map__8708__$1,height,data,colors){
return (function (p1__8703_SHARP_){
return cljs.core.map.call(null,p1__8703_SHARP_,xs);
});})(distributions,xs,map__8708,map__8708__$1,height,data,colors))
,distributions);
var all_ys = cljs.core.apply.call(null,cljs.core.concat,ys);
var values = cljs.core.map.call(null,((function (distributions,xs,ys,all_ys,map__8708,map__8708__$1,height,data,colors){
return (function (p1__8704_SHARP_){
return cljs.core.map.call(null,cljs.core.vector,xs,p1__8704_SHARP_);
});})(distributions,xs,ys,all_ys,map__8708,map__8708__$1,height,data,colors))
,ys);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(380)], null),new cljs.core.Keyword(null,"major","major",-27376078),0.25,new cljs.core.Keyword(null,"minor","minor",-608536071),0.05,new cljs.core.Keyword(null,"pos","pos",-864607220),height], null)),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(20)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,(20)], null),new cljs.core.Keyword(null,"pos","pos",-864607220),(50),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(15),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null)], null)),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#caa"], null),new cljs.core.Keyword(null,"minor-y","minor-y",388125550),true], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.call(null,cljx.core.line_attributes,values,cljs.core.cycle.call(null,colors))], null);
});
cljx.core.binomial_spec = (function cljx$core$binomial_spec(p__8713){
var map__8716 = p__8713;
var map__8716__$1 = ((((!((map__8716 == null)))?((((map__8716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8716):map__8716);
var height = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"height","height",1025178622),(200));
var data = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var colors = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var distributions = cljs.core.map.call(null,cljx.core.binomial_distribution,data);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,data));
var xs = cljs.core.map.call(null,((function (distributions,n,map__8716,map__8716__$1,height,data,colors){
return (function (p1__8710_SHARP_){
return (p1__8710_SHARP_ * n);
});})(distributions,n,map__8716,map__8716__$1,height,data,colors))
,thi.ng.math.core.norm_range.call(null,(500)));
var ys = cljs.core.map.call(null,((function (distributions,n,xs,map__8716,map__8716__$1,height,data,colors){
return (function (p1__8711_SHARP_){
return cljs.core.map.call(null,p1__8711_SHARP_,xs);
});})(distributions,n,xs,map__8716,map__8716__$1,height,data,colors))
,distributions);
var all_ys = cljs.core.apply.call(null,cljs.core.concat,ys);
var values = cljs.core.map.call(null,((function (distributions,n,xs,ys,all_ys,map__8716,map__8716__$1,height,data,colors){
return (function (p1__8712_SHARP_){
return cljs.core.map.call(null,cljs.core.vector,xs,p1__8712_SHARP_);
});})(distributions,n,xs,ys,all_ys,map__8716,map__8716__$1,height,data,colors))
,ys);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),n], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(580)], null),new cljs.core.Keyword(null,"major","major",-27376078),(5),new cljs.core.Keyword(null,"minor","minor",-608536071),null,new cljs.core.Keyword(null,"pos","pos",-864607220),height], null)),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,(20)], null),new cljs.core.Keyword(null,"pos","pos",-864607220),(50),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(15),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null)], null)),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#caa"], null),new cljs.core.Keyword(null,"minor-y","minor-y",388125550),true], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.call(null,cljx.core.line_attributes,values,cljs.core.cycle.call(null,colors))], null);
});
cljx.core.chart = (function cljx$core$chart(state){
var height = (250);
var data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"beta","beta",455605892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null);
var colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#C2185B","#4CAF50","#673AB7","#FF5722","#2196F3","#FFA000"], null);
return thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(height + (20))], null),thi.ng.geom.viz.core.svg_plot2d_cartesian.call(null,cljx.core.multi_spec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"colors","colors",1157174732),colors], null))));
});
cljx.core.binomial_chart = (function cljx$core$binomial_chart(state){
var height = (200);
var data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.select_keys.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p","p",151049309)], null))], null);
var colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#C2185B","#4CAF50","#673AB7","#FF5722","#2196F3","#FFA000"], null);
return thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(height + (20))], null),thi.ng.geom.viz.core.svg_plot2d_cartesian.call(null,cljx.core.binomial_spec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"colors","colors",1157174732),colors], null))));
});
cljx.core.layout_interface = (function cljx$core$layout_interface(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.medium-5.medium-push-7.columns","div.medium-5.medium-push-7.columns",-925531399),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.single_beta_controllers,cljx.core.state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.medium-7.medium-pull-5.columns","div.medium-7.medium-pull-5.columns",-896174807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"content","content",15833224)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.chart,cljx.core.state], null)], null)], null)], null);
});
cljx.core.layout_binomial_interface = (function cljx$core$layout_binomial_interface(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.large-5.large-push-7.columns","div.large-5.large-push-7.columns",-493808386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.single_binomial_controllers,cljx.core.state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.large-7.large-pull-5.columns","div.large-7.large-pull-5.columns",1981043060),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"content","content",15833224)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.binomial_chart,cljx.core.state], null)], null)], null)], null);
});
cljx.core.single_beta = (function cljx$core$single_beta(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.layout_interface], null),document.getElementById("root"));
});
cljx.core.binomial = (function cljx$core$binomial(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljx.core.layout_binomial_interface], null),document.getElementById("root"));
});
cljx.core.simulation_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trials","trials",-308874149),cljs.core.PersistentVector.EMPTY], null));
cljx.core.bar_spec = (function cljx$core$bar_spec(data){
var width = (6);
var col = "#0af";
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"values","values",372645556),data,new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),col,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),[cljs.core.str((width - (1))),cljs.core.str("px")].join('')], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),thi.ng.geom.viz.core.svg_bar_plot,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),width,new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null);
});
cljx.core.simulation_spec = (function cljx$core$simulation_spec(p__8719){
var map__8722 = p__8719;
var map__8722__$1 = ((((!((map__8722 == null)))?((((map__8722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8722):map__8722);
var height = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"height","height",1025178622),(200));
var data = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var n = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"n","n",562130025));
var hist = cljs.core.frequencies.call(null,data);
var data__$1 = cljs.core.map.call(null,((function (hist,map__8722,map__8722__$1,height,data,n){
return (function (p1__8718_SHARP_){
return cljs.core.get.call(null,hist,p1__8718_SHARP_,(0));
});})(hist,map__8722,map__8722__$1,height,data,n))
,cljs.core.range.call(null,(0),(n + (1))));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),n], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(580)], null),new cljs.core.Keyword(null,"major","major",-27376078),(2),new cljs.core.Keyword(null,"minor","minor",-608536071),(1),new cljs.core.Keyword(null,"pos","pos",-864607220),height], null)),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,(20)], null),new cljs.core.Keyword(null,"pos","pos",-864607220),(50),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(15),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null)], null)),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#caa"], null),new cljs.core.Keyword(null,"minor-y","minor-y",388125550),true], null),new cljs.core.Keyword(null,"data","data",-232669377),cljx.core.bar_spec.call(null,data__$1)], null);
});

//# sourceMappingURL=core.js.map