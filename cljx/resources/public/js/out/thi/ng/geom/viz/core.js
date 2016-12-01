// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.viz.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.ndarray.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.ndarray.contours');
goog.require('thi.ng.strf.core');
thi.ng.geom.viz.core.value_mapper = (function thi$ng$geom$viz$core$value_mapper(scale_x,scale_y){
return (function (p__16659){
var vec__16660 = p__16659;
var x = cljs.core.nth.call(null,vec__16660,(0),null);
var y = cljs.core.nth.call(null,vec__16660,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null);
});
});
thi.ng.geom.viz.core.value_transducer = (function thi$ng$geom$viz$core$value_transducer(p__16665){
var map__16677 = p__16665;
var map__16677__$1 = ((((!((map__16677 == null)))?((((map__16677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16677):map__16677);
var cull_domain = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"cull-domain","cull-domain",408515057));
var cull_range = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"cull-range","cull-range",603502637));
var scale_x = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var scale_y = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var project = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var shape = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var item_pos = cljs.core.get.call(null,map__16677__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330));
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,scale_x,scale_y);
var item_pos__$1 = (function (){var or__7085__auto__ = item_pos;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.identity;
}
})();
var G__16679 = cljs.core.map.call(null,cljs.core.juxt.call(null,item_pos__$1,cljs.core.identity));
var G__16679__$1 = (cljs.core.truth_(cull_domain)?cljs.core.comp.call(null,G__16679,cljs.core.filter.call(null,((function (G__16679,mapper,item_pos__$1,map__16677,map__16677__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p1__16663_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,cull_domain,cljs.core.ffirst.call(null,p1__16663_SHARP_));
});})(G__16679,mapper,item_pos__$1,map__16677,map__16677__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__16679);
var G__16679__$2 = cljs.core.comp.call(null,G__16679__$1,cljs.core.map.call(null,((function (G__16679,G__16679__$1,mapper,item_pos__$1,map__16677,map__16677__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p__16680){
var vec__16681 = p__16680;
var p = cljs.core.nth.call(null,vec__16681,(0),null);
var i = cljs.core.nth.call(null,vec__16681,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mapper.call(null,p),i], null);
});})(G__16679,G__16679__$1,mapper,item_pos__$1,map__16677,map__16677__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
))
;
var G__16679__$3 = (cljs.core.truth_(cull_range)?cljs.core.comp.call(null,G__16679__$2,cljs.core.filter.call(null,((function (G__16679,G__16679__$1,G__16679__$2,mapper,item_pos__$1,map__16677,map__16677__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p1__16664_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,cull_range,cljs.core.peek.call(null,cljs.core.first.call(null,p1__16664_SHARP_)));
});})(G__16679,G__16679__$1,G__16679__$2,mapper,item_pos__$1,map__16677,map__16677__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__16679__$2);
var G__16679__$4 = (cljs.core.truth_(project)?cljs.core.comp.call(null,G__16679__$3,cljs.core.map.call(null,((function (G__16679,G__16679__$1,G__16679__$2,G__16679__$3,mapper,item_pos__$1,map__16677,map__16677__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p__16684){
var vec__16685 = p__16684;
var p = cljs.core.nth.call(null,vec__16685,(0),null);
var i = cljs.core.nth.call(null,vec__16685,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.call(null,p),i], null);
});})(G__16679,G__16679__$1,G__16679__$2,G__16679__$3,mapper,item_pos__$1,map__16677,map__16677__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__16679__$3);
if(cljs.core.truth_(shape)){
return cljs.core.comp.call(null,G__16679__$4,cljs.core.map.call(null,shape));
} else {
return G__16679__$4;
}
});
thi.ng.geom.viz.core.process_points = (function thi$ng$geom$viz$core$process_points(p__16688,p__16689){
var map__16697 = p__16688;
var map__16697__$1 = ((((!((map__16697 == null)))?((((map__16697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16697):map__16697);
var x_axis = cljs.core.get.call(null,map__16697__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16697__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__16697__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__16698 = p__16689;
var map__16698__$1 = ((((!((map__16698 == null)))?((((map__16698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16698):map__16698);
var values = cljs.core.get.call(null,map__16698__$1,new cljs.core.Keyword(null,"values","values",372645556));
var item_pos = cljs.core.get.call(null,map__16698__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330));
var shape = cljs.core.get.call(null,map__16698__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var vec__16701 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var ry1 = cljs.core.nth.call(null,vec__16701,(0),null);
var ry2 = cljs.core.nth.call(null,vec__16701,(1),null);
return cljs.core.sequence.call(null,thi.ng.geom.viz.core.value_transducer.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cull-domain","cull-domain",408515057),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"cull-range","cull-range",603502637),(((ry1 < ry2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry1,ry2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry2,ry1], null)),new cljs.core.Keyword(null,"item-pos","item-pos",390857330),item_pos,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis),new cljs.core.Keyword(null,"project","project",1124394579),project,new cljs.core.Keyword(null,"shape","shape",1190694006),shape], null)),(cljs.core.truth_(item_pos)?cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.first,item_pos),values):cljs.core.sort_by.call(null,cljs.core.first,values)));
});
thi.ng.geom.viz.core.points__GT_path_segments = (function thi$ng$geom$viz$core$points__GT_path_segments(p__16706){
var vec__16710 = p__16706;
var seq__16711 = cljs.core.seq.call(null,vec__16710);
var first__16712 = cljs.core.first.call(null,seq__16711);
var seq__16711__$1 = cljs.core.next.call(null,seq__16711);
var p = first__16712;
var more = seq__16711__$1;
return cljs.core.reduce.call(null,((function (vec__16710,seq__16711,first__16712,seq__16711__$1,p,more){
return (function (p1__16704_SHARP_,p2__16705_SHARP_){
return cljs.core.conj.call(null,p1__16704_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"L","L",-1038307519),p2__16705_SHARP_], null));
});})(vec__16710,seq__16711,first__16712,seq__16711__$1,p,more))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null)], null),more);
});
thi.ng.geom.viz.core.polar_projection = (function thi$ng$geom$viz$core$polar_projection(origin){
var o = thi.ng.geom.core.vector.vec2.call(null,origin);
return ((function (o){
return (function (p__16717){
var vec__16718 = p__16717;
var x = cljs.core.nth.call(null,vec__16718,(0),null);
var y = cljs.core.nth.call(null,vec__16718,(1),null);
return thi.ng.geom.core._PLUS_.call(null,o,thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,y,x)));
});
;})(o))
});
thi.ng.geom.viz.core.value_formatter = (function thi$ng$geom$viz$core$value_formatter(prec){
var fmt = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.strf.core.float$.call(null,prec)], null);
return ((function (fmt){
return (function (x){
return thi.ng.strf.core.format.call(null,fmt,x);
});
;})(fmt))
});
thi.ng.geom.viz.core.format_percent = (function thi$ng$geom$viz$core$format_percent(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.viz.core.default_svg_label = (function thi$ng$geom$viz$core$default_svg_label(f){
return (function (p,x){
return thi.ng.geom.svg.core.text.call(null,p,f.call(null,x));
});
});
/**
 * Given a vector of domain bounds and a collection of data values
 *   (without domain position), produces a lazy-seq of 2-element vectors
 *   representing the values of the original coll uniformly spread over
 *   the full domain range, with each of the form: [domain-pos value].
 */
thi.ng.geom.viz.core.uniform_domain_points = (function thi$ng$geom$viz$core$uniform_domain_points(p__16721,values){
var vec__16725 = p__16721;
var d1 = cljs.core.nth.call(null,vec__16725,(0),null);
var d2 = cljs.core.nth.call(null,vec__16725,(1),null);
return cljs.core.map.call(null,((function (vec__16725,d1,d2){
return (function (t,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix.call(null,d1,d2,t),v], null);
});})(vec__16725,d1,d2))
,thi.ng.math.core.norm_range.call(null,(cljs.core.count.call(null,values) - (1))),values);
});
thi.ng.geom.viz.core.domain_bounds_x = (function thi$ng$geom$viz$core$domain_bounds_x(p1__16728_SHARP_){
return thi.ng.geom.core.utils.axis_bounds.call(null,(0),p1__16728_SHARP_);
});
thi.ng.geom.viz.core.domain_bounds_y = (function thi$ng$geom$viz$core$domain_bounds_y(p1__16729_SHARP_){
return thi.ng.geom.core.utils.axis_bounds.call(null,(1),p1__16729_SHARP_);
});
thi.ng.geom.viz.core.domain_bounds_z = (function thi$ng$geom$viz$core$domain_bounds_z(p1__16730_SHARP_){
return thi.ng.geom.core.utils.axis_bounds.call(null,(2),p1__16730_SHARP_);
});
thi.ng.geom.viz.core.total_domain_bounds = (function thi$ng$geom$viz$core$total_domain_bounds(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16741 = arguments.length;
var i__8302__auto___16742 = (0);
while(true){
if((i__8302__auto___16742 < len__8301__auto___16741)){
args__8308__auto__.push((arguments[i__8302__auto___16742]));

var G__16743 = (i__8302__auto___16742 + (1));
i__8302__auto___16742 = G__16743;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic = (function (f,colls){
return cljs.core.transduce.call(null,cljs.core.map.call(null,f),cljs.core.completing.call(null,(function (p__16733,p__16734){
var vec__16735 = p__16733;
var aa = cljs.core.nth.call(null,vec__16735,(0),null);
var ab = cljs.core.nth.call(null,vec__16735,(1),null);
var vec__16738 = p__16734;
var xa = cljs.core.nth.call(null,vec__16738,(0),null);
var xb = cljs.core.nth.call(null,vec__16738,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__7425__auto__ = aa;
var y__7426__auto__ = xa;
return ((x__7425__auto__ < y__7426__auto__) ? x__7425__auto__ : y__7426__auto__);
})(),(function (){var x__7418__auto__ = ab;
var y__7419__auto__ = xb;
return ((x__7418__auto__ > y__7419__auto__) ? x__7418__auto__ : y__7419__auto__);
})()], null);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.INF_PLUS_,thi.ng.math.core.INF_], null),colls);
});

thi.ng.geom.viz.core.total_domain_bounds.cljs$lang$maxFixedArity = (1);

thi.ng.geom.viz.core.total_domain_bounds.cljs$lang$applyTo = (function (seq16731){
var G__16732 = cljs.core.first.call(null,seq16731);
var seq16731__$1 = cljs.core.next.call(null,seq16731);
return thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic(G__16732,seq16731__$1);
});

thi.ng.geom.viz.core.value_domain_bounds = (function thi$ng$geom$viz$core$value_domain_bounds(mat){
var vals = cljs.core.seq.call(null,mat);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,vals),cljs.core.reduce.call(null,cljs.core.max,vals)], null);
});
thi.ng.geom.viz.core.linear_scale = (function thi$ng$geom$viz$core$linear_scale(domain,range){
return (function (x){
return thi.ng.math.core.map_interval.call(null,x,domain,range);
});
});
thi.ng.geom.viz.core.log = (function thi$ng$geom$viz$core$log(base){
var lb = Math.log(base);
return ((function (lb){
return (function (p1__16744_SHARP_){
return ((((p1__16744_SHARP_ > (0)))?Math.log(p1__16744_SHARP_):(((p1__16744_SHARP_ < (0)))?(- Math.log((- p1__16744_SHARP_))):(0)
)) / lb);
});
;})(lb))
});
thi.ng.geom.viz.core.log_scale = (function thi$ng$geom$viz$core$log_scale(base,p__16745,p__16746){
var vec__16753 = p__16745;
var d1 = cljs.core.nth.call(null,vec__16753,(0),null);
var d2 = cljs.core.nth.call(null,vec__16753,(1),null);
var domain = vec__16753;
var vec__16756 = p__16746;
var r1 = cljs.core.nth.call(null,vec__16756,(0),null);
var r2 = cljs.core.nth.call(null,vec__16756,(1),null);
var range = vec__16756;
var log_STAR_ = thi.ng.geom.viz.core.log.call(null,base);
var d1l = log_STAR_.call(null,d1);
var dr = (log_STAR_.call(null,d2) - d1l);
return ((function (log_STAR_,d1l,dr,vec__16753,d1,d2,domain,vec__16756,r1,r2,range){
return (function (x){
return thi.ng.math.core.mix.call(null,r1,r2,((log_STAR_.call(null,x) - d1l) / dr));
});
;})(log_STAR_,d1l,dr,vec__16753,d1,d2,domain,vec__16756,r1,r2,range))
});
thi.ng.geom.viz.core.lens_scale = (function thi$ng$geom$viz$core$lens_scale(focus,strength,p__16759,p__16760){
var vec__16767 = p__16759;
var d1 = cljs.core.nth.call(null,vec__16767,(0),null);
var d2 = cljs.core.nth.call(null,vec__16767,(1),null);
var vec__16770 = p__16760;
var r1 = cljs.core.nth.call(null,vec__16770,(0),null);
var r2 = cljs.core.nth.call(null,vec__16770,(1),null);
var dr = (d2 - d1);
var f = ((focus - d1) / dr);
return ((function (dr,f,vec__16767,d1,d2,vec__16770,r1,r2){
return (function (x){
return thi.ng.math.core.mix_lens.call(null,r1,r2,((x - d1) / dr),f,strength);
});
;})(dr,f,vec__16767,d1,d2,vec__16770,r1,r2))
});
thi.ng.geom.viz.core.axis_common_STAR_ = (function thi$ng$geom$viz$core$axis_common_STAR_(p__16773){
var map__16776 = p__16773;
var map__16776__$1 = ((((!((map__16776 == null)))?((((map__16776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16776):map__16776);
var spec = map__16776__$1;
var visible = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
var major_size = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375),(10));
var minor_size = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109),(5));
var label = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attribs = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var label_style = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var label_dist = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"visible","visible",-1024216805),visible,new cljs.core.Keyword(null,"major-size","major-size",-698672375),major_size,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109),minor_size,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__7085__auto__ = label;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})(),new cljs.core.Keyword(null,"attribs","attribs",-137878093),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null),attribs),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),label_style),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(function (){var or__7085__auto__ = label_dist;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return ((10) + major_size);
}
})());
});
thi.ng.geom.viz.core.lin_tick_marks = (function thi$ng$geom$viz$core$lin_tick_marks(p__16779,delta){
var vec__16783 = p__16779;
var d1 = cljs.core.nth.call(null,vec__16783,(0),null);
var d2 = cljs.core.nth.call(null,vec__16783,(1),null);
var dr = (d2 - d1);
var d1_SINGLEQUOTE_ = thi.ng.math.core.roundto.call(null,d1,delta);
return cljs.core.filter.call(null,((function (dr,d1_SINGLEQUOTE_,vec__16783,d1,d2){
return (function (p1__16778_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__16778_SHARP_);
});})(dr,d1_SINGLEQUOTE_,vec__16783,d1,d2))
,cljs.core.range.call(null,d1_SINGLEQUOTE_,(d2 + delta),delta));
});
thi.ng.geom.viz.core.linear_axis = (function thi$ng$geom$viz$core$linear_axis(p__16786){
var map__16789 = p__16786;
var map__16789__$1 = ((((!((map__16789 == null)))?((((map__16789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16789):map__16789);
var spec = map__16789__$1;
var domain = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var major = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var major_SINGLEQUOTE_ = (cljs.core.truth_(major)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,major):null);
var minor_SINGLEQUOTE_ = (cljs.core.truth_(minor)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,minor):null);
var minor_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__7073__auto__ = major_SINGLEQUOTE_;
if(cljs.core.truth_(and__7073__auto__)){
return minor_SINGLEQUOTE_;
} else {
return and__7073__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,major_SINGLEQUOTE_)),minor_SINGLEQUOTE_):minor_SINGLEQUOTE_);
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.linear_scale.call(null,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),major_SINGLEQUOTE_,new cljs.core.Keyword(null,"minor","minor",-608536071),minor_SINGLEQUOTE___$1));
});
thi.ng.geom.viz.core.log_ticks_domain = (function thi$ng$geom$viz$core$log_ticks_domain(base,d1,d2){
var log_STAR_ = thi.ng.geom.viz.core.log.call(null,base);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.floor.call(null,log_STAR_.call(null,d1)),thi.ng.math.core.ceil.call(null,log_STAR_.call(null,d2))], null);
});
thi.ng.geom.viz.core.log_tick_marks_major = (function thi$ng$geom$viz$core$log_tick_marks_major(base,p__16792){
var vec__16803 = p__16792;
var d1 = cljs.core.nth.call(null,vec__16803,(0),null);
var d2 = cljs.core.nth.call(null,vec__16803,(1),null);
var vec__16806 = thi.ng.geom.viz.core.log_ticks_domain.call(null,base,d1,d2);
var d1l = cljs.core.nth.call(null,vec__16806,(0),null);
var d2l = cljs.core.nth.call(null,vec__16806,(1),null);
return cljs.core.filter.call(null,((function (vec__16806,d1l,d2l,vec__16803,d1,d2){
return (function (p1__16791_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__16791_SHARP_);
});})(vec__16806,d1l,d2l,vec__16803,d1,d2))
,(function (){var iter__7942__auto__ = ((function (vec__16806,d1l,d2l,vec__16803,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_major_$_iter__16809(s__16810){
return (new cljs.core.LazySeq(null,((function (vec__16806,d1l,d2l,vec__16803,d1,d2){
return (function (){
var s__16810__$1 = s__16810;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__16810__$1);
if(temp__6753__auto__){
var s__16810__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16810__$2)){
var c__7940__auto__ = cljs.core.chunk_first.call(null,s__16810__$2);
var size__7941__auto__ = cljs.core.count.call(null,c__7940__auto__);
var b__16812 = cljs.core.chunk_buffer.call(null,size__7941__auto__);
if((function (){var i__16811 = (0);
while(true){
if((i__16811 < size__7941__auto__)){
var i = cljs.core._nth.call(null,c__7940__auto__,i__16811);
cljs.core.chunk_append.call(null,b__16812,(((i >= (0)))?(((1) / base) * Math.pow(base,i)):(((1) / base) * (- Math.pow(base,(- i))))));

var G__16813 = (i__16811 + (1));
i__16811 = G__16813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16812),thi$ng$geom$viz$core$log_tick_marks_major_$_iter__16809.call(null,cljs.core.chunk_rest.call(null,s__16810__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16812),null);
}
} else {
var i = cljs.core.first.call(null,s__16810__$2);
return cljs.core.cons.call(null,(((i >= (0)))?(((1) / base) * Math.pow(base,i)):(((1) / base) * (- Math.pow(base,(- i))))),thi$ng$geom$viz$core$log_tick_marks_major_$_iter__16809.call(null,cljs.core.rest.call(null,s__16810__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16806,d1l,d2l,vec__16803,d1,d2))
,null,null));
});})(vec__16806,d1l,d2l,vec__16803,d1,d2))
;
return iter__7942__auto__.call(null,cljs.core.range.call(null,d1l,(d2l + (1))));
})());
});
thi.ng.geom.viz.core.log_tick_marks_minor = (function thi$ng$geom$viz$core$log_tick_marks_minor(base,p__16815){
var vec__16828 = p__16815;
var d1 = cljs.core.nth.call(null,vec__16828,(0),null);
var d2 = cljs.core.nth.call(null,vec__16828,(1),null);
var vec__16831 = thi.ng.geom.viz.core.log_ticks_domain.call(null,base,d1,d2);
var d1l = cljs.core.nth.call(null,vec__16831,(0),null);
var d2l = cljs.core.nth.call(null,vec__16831,(1),null);
var ticks = ((((2) === base))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null):cljs.core.range.call(null,(2),base));
return cljs.core.filter.call(null,((function (vec__16831,d1l,d2l,ticks,vec__16828,d1,d2){
return (function (p1__16814_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__16814_SHARP_);
});})(vec__16831,d1l,d2l,ticks,vec__16828,d1,d2))
,(function (){var iter__7942__auto__ = ((function (vec__16831,d1l,d2l,ticks,vec__16828,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16834(s__16835){
return (new cljs.core.LazySeq(null,((function (vec__16831,d1l,d2l,ticks,vec__16828,d1,d2){
return (function (){
var s__16835__$1 = s__16835;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__16835__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var i = cljs.core.first.call(null,xs__7309__auto__);
var iterys__7938__auto__ = ((function (s__16835__$1,i,xs__7309__auto__,temp__6753__auto__,vec__16831,d1l,d2l,ticks,vec__16828,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16834_$_iter__16836(s__16837){
return (new cljs.core.LazySeq(null,((function (s__16835__$1,i,xs__7309__auto__,temp__6753__auto__,vec__16831,d1l,d2l,ticks,vec__16828,d1,d2){
return (function (){
var s__16837__$1 = s__16837;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__16837__$1);
if(temp__6753__auto____$1){
var s__16837__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16837__$2)){
var c__7940__auto__ = cljs.core.chunk_first.call(null,s__16837__$2);
var size__7941__auto__ = cljs.core.count.call(null,c__7940__auto__);
var b__16839 = cljs.core.chunk_buffer.call(null,size__7941__auto__);
if((function (){var i__16838 = (0);
while(true){
if((i__16838 < size__7941__auto__)){
var j = cljs.core._nth.call(null,c__7940__auto__,i__16838);
cljs.core.chunk_append.call(null,b__16839,(((i >= (0)))?((j / base) * Math.pow(base,i)):((j / base) * (- Math.pow(base,(- i))))));

var G__16840 = (i__16838 + (1));
i__16838 = G__16840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16839),thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16834_$_iter__16836.call(null,cljs.core.chunk_rest.call(null,s__16837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16839),null);
}
} else {
var j = cljs.core.first.call(null,s__16837__$2);
return cljs.core.cons.call(null,(((i >= (0)))?((j / base) * Math.pow(base,i)):((j / base) * (- Math.pow(base,(- i))))),thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16834_$_iter__16836.call(null,cljs.core.rest.call(null,s__16837__$2)));
}
} else {
return null;
}
break;
}
});})(s__16835__$1,i,xs__7309__auto__,temp__6753__auto__,vec__16831,d1l,d2l,ticks,vec__16828,d1,d2))
,null,null));
});})(s__16835__$1,i,xs__7309__auto__,temp__6753__auto__,vec__16831,d1l,d2l,ticks,vec__16828,d1,d2))
;
var fs__7939__auto__ = cljs.core.seq.call(null,iterys__7938__auto__.call(null,ticks));
if(fs__7939__auto__){
return cljs.core.concat.call(null,fs__7939__auto__,thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__16834.call(null,cljs.core.rest.call(null,s__16835__$1)));
} else {
var G__16841 = cljs.core.rest.call(null,s__16835__$1);
s__16835__$1 = G__16841;
continue;
}
} else {
return null;
}
break;
}
});})(vec__16831,d1l,d2l,ticks,vec__16828,d1,d2))
,null,null));
});})(vec__16831,d1l,d2l,ticks,vec__16828,d1,d2))
;
return iter__7942__auto__.call(null,cljs.core.range.call(null,d1l,(d2l + (1))));
})());
});
thi.ng.geom.viz.core.log_axis = (function thi$ng$geom$viz$core$log_axis(p__16842){
var map__16845 = p__16842;
var map__16845__$1 = ((((!((map__16845 == null)))?((((map__16845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16845):map__16845);
var spec = map__16845__$1;
var base = cljs.core.get.call(null,map__16845__$1,new cljs.core.Keyword(null,"base","base",185279322),(10));
var domain = cljs.core.get.call(null,map__16845__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__16845__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.log_scale.call(null,base,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),thi.ng.geom.viz.core.log_tick_marks_major.call(null,base,domain),new cljs.core.Keyword(null,"minor","minor",-608536071),thi.ng.geom.viz.core.log_tick_marks_minor.call(null,base,domain)));
});
thi.ng.geom.viz.core.lens_axis = (function thi$ng$geom$viz$core$lens_axis(p__16847){
var map__16850 = p__16847;
var map__16850__$1 = ((((!((map__16850 == null)))?((((map__16850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16850):map__16850);
var spec = map__16850__$1;
var domain = cljs.core.get.call(null,map__16850__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__16850__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var focus = cljs.core.get.call(null,map__16850__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var strength = cljs.core.get.call(null,map__16850__$1,new cljs.core.Keyword(null,"strength","strength",-415606478),0.5);
var major = cljs.core.get.call(null,map__16850__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__16850__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var major_SINGLEQUOTE_ = (cljs.core.truth_(major)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,major):null);
var minor_SINGLEQUOTE_ = (cljs.core.truth_(minor)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,minor):null);
var minor_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__7073__auto__ = major_SINGLEQUOTE_;
if(cljs.core.truth_(and__7073__auto__)){
return minor_SINGLEQUOTE_;
} else {
return and__7073__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,major_SINGLEQUOTE_)),minor_SINGLEQUOTE_):minor_SINGLEQUOTE_);
var focus__$1 = (function (){var or__7085__auto__ = focus;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (cljs.core.apply.call(null,cljs.core._PLUS_,domain) / 2.0);
}
})();
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.lens_scale.call(null,focus__$1,strength,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),major_SINGLEQUOTE_,new cljs.core.Keyword(null,"minor","minor",-608536071),minor_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"focus","focus",234677911),focus__$1,new cljs.core.Keyword(null,"strength","strength",-415606478),strength));
});
thi.ng.geom.viz.core.svg_triangle_up = (function thi$ng$geom$viz$core$svg_triangle_up(w){
var h = (w * Math.sin(thi.ng.math.core.THIRD_PI));
var w__$1 = (0.5 * w);
return ((function (h,w__$1){
return (function (p__16859){
var vec__16860 = p__16859;
var vec__16863 = cljs.core.nth.call(null,vec__16860,(0),null);
var x = cljs.core.nth.call(null,vec__16863,(0),null);
var y = cljs.core.nth.call(null,vec__16863,(1),null);
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w__$1),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w__$1),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
;})(h,w__$1))
});
thi.ng.geom.viz.core.svg_triangle_down = (function thi$ng$geom$viz$core$svg_triangle_down(w){
var h = (w * Math.sin(thi.ng.math.core.THIRD_PI));
var w__$1 = (0.5 * w);
return ((function (h,w__$1){
return (function (p__16873){
var vec__16874 = p__16873;
var vec__16877 = cljs.core.nth.call(null,vec__16874,(0),null);
var x = cljs.core.nth.call(null,vec__16877,(0),null);
var y = cljs.core.nth.call(null,vec__16877,(1),null);
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w__$1),(y - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w__$1),(y - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
;})(h,w__$1))
});
thi.ng.geom.viz.core.svg_square = (function thi$ng$geom$viz$core$svg_square(r){
var d = (r * 2.0);
return ((function (d){
return (function (p__16887){
var vec__16888 = p__16887;
var vec__16891 = cljs.core.nth.call(null,vec__16888,(0),null);
var x = cljs.core.nth.call(null,vec__16891,(0),null);
var y = cljs.core.nth.call(null,vec__16891,(1),null);
return thi.ng.geom.svg.core.rect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - r),(y - r)], null),d,d);
});
;})(d))
});
thi.ng.geom.viz.core.labeled_rect_horizontal = (function thi$ng$geom$viz$core$labeled_rect_horizontal(p__16894){
var map__16907 = p__16894;
var map__16907__$1 = ((((!((map__16907 == null)))?((((map__16907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16907):map__16907);
var h = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var label = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var fill = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var min_width = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var base_line = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword(null,"base-line","base-line",577717338));
var r2 = ((-2) * r);
var h2 = (0.5 * h);
return ((function (r2,h2,map__16907,map__16907__$1,h,r,label,fill,min_width,base_line){
return (function (p__16909){
var vec__16910 = p__16909;
var vec__16913 = cljs.core.nth.call(null,vec__16910,(0),null);
var ax = cljs.core.nth.call(null,vec__16913,(0),null);
var ay = cljs.core.nth.call(null,vec__16913,(1),null);
var a = vec__16913;
var vec__16916 = cljs.core.nth.call(null,vec__16910,(1),null);
var bx = cljs.core.nth.call(null,vec__16916,(0),null);
var b = vec__16916;
var item = cljs.core.nth.call(null,vec__16910,(2),null);
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,thi.ng.geom.svg.core.rect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax - r),(ay - h2)], null),((bx - ax) - r2),h,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill.call(null,item),new cljs.core.Keyword(null,"rx","rx",1627208482),r,new cljs.core.Keyword(null,"ry","ry",-334598563),r], null)),(((min_width < (bx - ax)))?thi.ng.geom.svg.core.text.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax,(base_line + ay)], null),label.call(null,item)):null));
});
;})(r2,h2,map__16907,map__16907__$1,h,r,label,fill,min_width,base_line))
});
thi.ng.geom.viz.core.circle_cell = (function thi$ng$geom$viz$core$circle_cell(a,b,c,d,col){
return thi.ng.geom.svg.core.circle.call(null,thi.ng.geom.core.utils.centroid.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null)),(0.5 * thi.ng.geom.core.dist.call(null,a,b)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),col], null));
});
thi.ng.geom.viz.core.svg_line_plot = (function thi$ng$geom$viz$core$svg_line_plot(v_spec,d_spec){
return thi.ng.geom.svg.core.line_strip.call(null,cljs.core.map.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,d_spec)),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_area_plot = (function thi$ng$geom$viz$core$svg_area_plot(p__16919,p__16920){
var map__16925 = p__16919;
var map__16925__$1 = ((((!((map__16925 == null)))?((((map__16925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16925):map__16925);
var v_spec = map__16925__$1;
var y_axis = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__16926 = p__16920;
var map__16926__$1 = ((((!((map__16926 == null)))?((((map__16926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16926):map__16926);
var d_spec = map__16926__$1;
var res = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var ry1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis));
var points = cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,cljs.core.assoc.call(null,v_spec,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.core.vector.vec2),d_spec));
var p = thi.ng.geom.core.vector.vec2.call(null,cljs.core.first.call(null,cljs.core.peek.call(null,points)),ry1);
var q = thi.ng.geom.core.vector.vec2.call(null,cljs.core.ffirst.call(null,points),ry1);
var points__$1 = cljs.core.concat.call(null,points,cljs.core.mapv.call(null,cljs.core.partial.call(null,thi.ng.geom.core.mix,p,q),thi.ng.math.core.norm_range.call(null,(function (){var or__7085__auto__ = res;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (1);
}
})())));
return thi.ng.geom.svg.core.polygon.call(null,cljs.core.mapv.call(null,project,points__$1),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_radar_plot = (function thi$ng$geom$viz$core$svg_radar_plot(v_spec,p__16929){
var map__16932 = p__16929;
var map__16932__$1 = ((((!((map__16932 == null)))?((((map__16932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16932):map__16932);
var d_spec = map__16932__$1;
var shape = cljs.core.get.call(null,map__16932__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),thi.ng.geom.svg.core.polygon);
return shape.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,d_spec)),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_radar_plot_minmax = (function thi$ng$geom$viz$core$svg_radar_plot_minmax(v_spec,p__16937){
var map__16940 = p__16937;
var map__16940__$1 = ((((!((map__16940 == null)))?((((map__16940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16940):map__16940);
var d_spec = map__16940__$1;
var item_pos_min = cljs.core.get.call(null,map__16940__$1,new cljs.core.Keyword(null,"item-pos-min","item-pos-min",-938894508));
var item_pos_max = cljs.core.get.call(null,map__16940__$1,new cljs.core.Keyword(null,"item-pos-max","item-pos-max",1243635616));
var shape = cljs.core.get.call(null,map__16940__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__16940,map__16940__$1,d_spec,item_pos_min,item_pos_max){
return (function (p1__16934_SHARP_,p2__16935_SHARP_,p3__16936_SHARP_){
return thi.ng.geom.svg.core.path.call(null,cljs.core.concat.call(null,p1__16934_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Z","Z",459124588)], null)], null),p2__16935_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Z","Z",459124588)], null)], null)),p3__16936_SHARP_);
});})(map__16940,map__16940__$1,d_spec,item_pos_min,item_pos_max))
);
var min_points = thi.ng.geom.viz.core.points__GT_path_segments.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),(function (){var or__7085__auto__ = item_pos_min;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return ((function (or__7085__auto__,map__16940,map__16940__$1,d_spec,item_pos_min,item_pos_max,shape){
return (function (i){
return cljs.core.take.call(null,(2),i);
});
;})(or__7085__auto__,map__16940,map__16940__$1,d_spec,item_pos_min,item_pos_max,shape))
}
})()))));
var max_points = thi.ng.geom.viz.core.points__GT_path_segments.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),(function (){var or__7085__auto__ = item_pos_max;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return ((function (or__7085__auto__,min_points,map__16940,map__16940__$1,d_spec,item_pos_min,item_pos_max,shape){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.nth.call(null,i,(2))], null);
});
;})(or__7085__auto__,min_points,map__16940,map__16940__$1,d_spec,item_pos_min,item_pos_max,shape))
}
})()))));
return shape.call(null,max_points,min_points,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec),new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd"));
});
thi.ng.geom.viz.core.svg_scatter_plot = (function thi$ng$geom$viz$core$svg_scatter_plot(v_spec,p__16942){
var map__16949 = p__16942;
var map__16949__$1 = ((((!((map__16949 == null)))?((((map__16949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16949):map__16949);
var d_spec = map__16949__$1;
var attribs = cljs.core.get.call(null,map__16949__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__16949__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (){var or__7085__auto__ = shape;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return ((function (or__7085__auto__,map__16949,map__16949__$1,d_spec,attribs,shape){
return (function (p__16951){
var vec__16952 = p__16951;
var p = cljs.core.nth.call(null,vec__16952,(0),null);
return thi.ng.geom.svg.core.circle.call(null,p,(3));
});
;})(or__7085__auto__,map__16949,map__16949__$1,d_spec,attribs,shape))
}
})())));
});
thi.ng.geom.viz.core.svg_bar_plot = (function thi$ng$geom$viz$core$svg_bar_plot(p__16956,p__16957){
var map__16969 = p__16956;
var map__16969__$1 = ((((!((map__16969 == null)))?((((map__16969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16969):map__16969);
var x_axis = cljs.core.get.call(null,map__16969__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__16969__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__16969__$1,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.core.vector.vec2);
var map__16970 = p__16957;
var map__16970__$1 = ((((!((map__16970 == null)))?((((map__16970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16970):map__16970);
var values = cljs.core.get.call(null,map__16970__$1,new cljs.core.Keyword(null,"values","values",372645556));
var attribs = cljs.core.get.call(null,map__16970__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__16970__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__16969,map__16969__$1,x_axis,y_axis,project,map__16970,map__16970__$1,values,attribs){
return (function (a,b,_){
return thi.ng.geom.svg.core.line.call(null,a,b);
});})(map__16969,map__16969__$1,x_axis,y_axis,project,map__16970,map__16970__$1,values,attribs))
);
var item_pos = cljs.core.get.call(null,map__16970__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),cljs.core.identity);
var interleave = cljs.core.get.call(null,map__16970__$1,new cljs.core.Keyword(null,"interleave","interleave",-1475043421),(1));
var offset = cljs.core.get.call(null,map__16970__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var bar_width = cljs.core.get.call(null,map__16970__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),(0));
var domain = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis);
var base_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis).call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(y_axis)));
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis));
var offset__$1 = ((-0.5 * (interleave * bar_width)) + ((offset + 0.5) * bar_width));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,item_pos,cljs.core.identity)),cljs.core.filter.call(null,((function (domain,base_y,mapper,offset__$1,map__16969,map__16969__$1,x_axis,y_axis,project,map__16970,map__16970__$1,values,attribs,shape,item_pos,interleave,offset,bar_width){
return (function (p1__16955_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,domain,cljs.core.ffirst.call(null,p1__16955_SHARP_));
});})(domain,base_y,mapper,offset__$1,map__16969,map__16969__$1,x_axis,y_axis,project,map__16970,map__16970__$1,values,attribs,shape,item_pos,interleave,offset,bar_width))
),cljs.core.map.call(null,((function (domain,base_y,mapper,offset__$1,map__16969,map__16969__$1,x_axis,y_axis,project,map__16970,map__16970__$1,values,attribs,shape,item_pos,interleave,offset,bar_width){
return (function (p__16973){
var vec__16974 = p__16973;
var p = cljs.core.nth.call(null,vec__16974,(0),null);
var i = cljs.core.nth.call(null,vec__16974,(1),null);
var vec__16977 = mapper.call(null,p);
var ax = cljs.core.nth.call(null,vec__16977,(0),null);
var ay = cljs.core.nth.call(null,vec__16977,(1),null);
var ax__$1 = (ax + offset__$1);
return shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax__$1,ay], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax__$1,base_y], null)),i);
});})(domain,base_y,mapper,offset__$1,map__16969,map__16969__$1,x_axis,y_axis,project,map__16970,map__16970__$1,values,attribs,shape,item_pos,interleave,offset,bar_width))
)),values));
});
thi.ng.geom.viz.core.svg_heatmap = (function thi$ng$geom$viz$core$svg_heatmap(p__16985,p__16986){
var map__17007 = p__16985;
var map__17007__$1 = ((((!((map__17007 == null)))?((((map__17007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17007):map__17007);
var x_axis = cljs.core.get.call(null,map__17007__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__17007__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__17007__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__17008 = p__16986;
var map__17008__$1 = ((((!((map__17008 == null)))?((((map__17008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17008):map__17008);
var d_spec = map__17008__$1;
var matrix = cljs.core.get.call(null,map__17008__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var value_domain = cljs.core.get.call(null,map__17008__$1,new cljs.core.Keyword(null,"value-domain","value-domain",1224230851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null));
var clamp = cljs.core.get.call(null,map__17008__$1,new cljs.core.Keyword(null,"clamp","clamp",1803814940));
var palette = cljs.core.get.call(null,map__17008__$1,new cljs.core.Keyword(null,"palette","palette",-456203511));
var palette_scale = cljs.core.get.call(null,map__17008__$1,new cljs.core.Keyword(null,"palette-scale","palette-scale",2003276610),thi.ng.geom.viz.core.linear_scale);
var attribs = cljs.core.get.call(null,map__17008__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__17008__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__17007,map__17007__$1,x_axis,y_axis,project,map__17008,map__17008__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs){
return (function (p1__16980_SHARP_,p2__16981_SHARP_,p3__16982_SHARP_,p4__16983_SHARP_,p5__16984_SHARP_){
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16980_SHARP_,p2__16981_SHARP_,p3__16982_SHARP_,p4__16983_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),p5__16984_SHARP_], null));
});})(map__17007,map__17007__$1,x_axis,y_axis,project,map__17008,map__17008__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs))
);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var pmax = (cljs.core.count.call(null,palette) - (1));
var scale_v = palette_scale.call(null,value_domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),pmax], null));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,(function (){var iter__7942__auto__ = ((function (scale_x,scale_y,pmax,scale_v,map__17007,map__17007__$1,x_axis,y_axis,project,map__17008,map__17008__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape){
return (function thi$ng$geom$viz$core$svg_heatmap_$_iter__17011(s__17012){
return (new cljs.core.LazySeq(null,((function (scale_x,scale_y,pmax,scale_v,map__17007,map__17007__$1,x_axis,y_axis,project,map__17008,map__17008__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape){
return (function (){
var s__17012__$1 = s__17012;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__17012__$1);
if(temp__6753__auto__){
var s__17012__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17012__$2)){
var c__7940__auto__ = cljs.core.chunk_first.call(null,s__17012__$2);
var size__7941__auto__ = cljs.core.count.call(null,c__7940__auto__);
var b__17014 = cljs.core.chunk_buffer.call(null,size__7941__auto__);
if((function (){var i__17013 = (0);
while(true){
if((i__17013 < size__7941__auto__)){
var p = cljs.core._nth.call(null,c__7940__auto__,i__17013);
var vec__17021 = p;
var y = cljs.core.nth.call(null,vec__17021,(0),null);
var x = cljs.core.nth.call(null,vec__17021,(1),null);
var v = thi.ng.ndarray.core.get_at.call(null,matrix,y,x);
if(cljs.core.truth_((function (){var or__7085__auto__ = clamp;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return thi.ng.math.core.in_range_QMARK_.call(null,value_domain,v);
}
})())){
cljs.core.chunk_append.call(null,b__17014,shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,(y + (1)))], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,(y + (1)))], null)),palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,v) | (0)),(0),pmax))));

var G__17027 = (i__17013 + (1));
i__17013 = G__17027;
continue;
} else {
var G__17028 = (i__17013 + (1));
i__17013 = G__17028;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17014),thi$ng$geom$viz$core$svg_heatmap_$_iter__17011.call(null,cljs.core.chunk_rest.call(null,s__17012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17014),null);
}
} else {
var p = cljs.core.first.call(null,s__17012__$2);
var vec__17024 = p;
var y = cljs.core.nth.call(null,vec__17024,(0),null);
var x = cljs.core.nth.call(null,vec__17024,(1),null);
var v = thi.ng.ndarray.core.get_at.call(null,matrix,y,x);
if(cljs.core.truth_((function (){var or__7085__auto__ = clamp;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return thi.ng.math.core.in_range_QMARK_.call(null,value_domain,v);
}
})())){
return cljs.core.cons.call(null,shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,(y + (1)))], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,(y + (1)))], null)),palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,v) | (0)),(0),pmax))),thi$ng$geom$viz$core$svg_heatmap_$_iter__17011.call(null,cljs.core.rest.call(null,s__17012__$2)));
} else {
var G__17029 = cljs.core.rest.call(null,s__17012__$2);
s__17012__$1 = G__17029;
continue;
}
}
} else {
return null;
}
break;
}
});})(scale_x,scale_y,pmax,scale_v,map__17007,map__17007__$1,x_axis,y_axis,project,map__17008,map__17008__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape))
,null,null));
});})(scale_x,scale_y,pmax,scale_v,map__17007,map__17007__$1,x_axis,y_axis,project,map__17008,map__17008__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape))
;
return iter__7942__auto__.call(null,thi.ng.ndarray.core.position_seq.call(null,matrix));
})());
});
thi.ng.geom.viz.core.matrix_2d = (function thi$ng$geom$viz$core$matrix_2d(w,h,values){
return thi.ng.ndarray.core.ndarray.call(null,new cljs.core.Keyword(null,"float32","float32",-2119815775),values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,w], null));
});
thi.ng.geom.viz.core.contour_matrix = (function thi$ng$geom$viz$core$contour_matrix(w,h,values){
return thi.ng.ndarray.contours.set_border_2d.call(null,thi.ng.geom.viz.core.matrix_2d.call(null,w,h,values),-1.0E9);
});
thi.ng.geom.viz.core.contour__GT_svg = (function thi$ng$geom$viz$core$contour__GT_svg(scale_x,scale_y,project){
return (function (attribs,contour){
var contour__$1 = cljs.core.map.call(null,(function (p__17034){
var vec__17035 = p__17034;
var y = cljs.core.nth.call(null,vec__17035,(0),null);
var x = cljs.core.nth.call(null,vec__17035,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null);
}),contour);
return thi.ng.geom.svg.core.polygon.call(null,cljs.core.map.call(null,project,contour__$1),attribs);
});
});
thi.ng.geom.viz.core.svg_contour_plot = (function thi$ng$geom$viz$core$svg_contour_plot(p__17038,p__17039){
var map__17044 = p__17038;
var map__17044__$1 = ((((!((map__17044 == null)))?((((map__17044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17044):map__17044);
var x_axis = cljs.core.get.call(null,map__17044__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__17044__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__17044__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__17045 = p__17039;
var map__17045__$1 = ((((!((map__17045 == null)))?((((map__17045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17045):map__17045);
var matrix = cljs.core.get.call(null,map__17045__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var attribs = cljs.core.get.call(null,map__17045__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var levels = cljs.core.get.call(null,map__17045__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
var palette = cljs.core.get.call(null,map__17045__$1,new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null));
var palette_scale = cljs.core.get.call(null,map__17045__$1,new cljs.core.Keyword(null,"palette-scale","palette-scale",2003276610),thi.ng.geom.viz.core.linear_scale);
var value_domain = cljs.core.get.call(null,map__17045__$1,new cljs.core.Keyword(null,"value-domain","value-domain",1224230851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null));
var contour_attribs = cljs.core.get.call(null,map__17045__$1,new cljs.core.Keyword(null,"contour-attribs","contour-attribs",464584885),cljs.core.constantly.call(null,null));
var pmax = (cljs.core.count.call(null,palette) - (1));
var scale_v = palette_scale.call(null,value_domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),pmax], null));
var contour_fn = thi.ng.geom.viz.core.contour__GT_svg.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis),project);
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.mapv.call(null,((function (pmax,scale_v,contour_fn,map__17044,map__17044__$1,x_axis,y_axis,project,map__17045,map__17045__$1,matrix,attribs,levels,palette,palette_scale,value_domain,contour_attribs){
return (function (iso){
var c_attribs = contour_attribs.call(null,palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,iso) | (0)),(0),pmax)));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,cljs.core.partial.call(null,contour_fn,c_attribs),thi.ng.ndarray.contours.find_contours_2d.call(null,matrix,iso)));
});})(pmax,scale_v,contour_fn,map__17044,map__17044__$1,x_axis,y_axis,project,map__17045,map__17045__$1,matrix,attribs,levels,palette,palette_scale,value_domain,contour_attribs))
,cljs.core.sort.call(null,levels)));
});
thi.ng.geom.viz.core.overlap_QMARK_ = (function thi$ng$geom$viz$core$overlap_QMARK_(p__17048,p__17049){
var vec__17056 = p__17048;
var a = cljs.core.nth.call(null,vec__17056,(0),null);
var b = cljs.core.nth.call(null,vec__17056,(1),null);
var vec__17059 = p__17049;
var c = cljs.core.nth.call(null,vec__17059,(0),null);
var d = cljs.core.nth.call(null,vec__17059,(1),null);
return ((a <= d)) && ((b >= c));
});
thi.ng.geom.viz.core.compute_row_stacking = (function thi$ng$geom$viz$core$compute_row_stacking(item_range,coll){
return cljs.core.reduce.call(null,(function (grid,x){
var r = item_range.call(null,x);
var G__17077 = grid;
var vec__17078 = G__17077;
var seq__17079 = cljs.core.seq.call(null,vec__17078);
var first__17080 = cljs.core.first.call(null,seq__17079);
var seq__17079__$1 = cljs.core.next.call(null,seq__17079);
var row = first__17080;
var more = seq__17079__$1;
var idx = (0);
var G__17077__$1 = G__17077;
var idx__$1 = idx;
while(true){
var vec__17081 = G__17077__$1;
var seq__17082 = cljs.core.seq.call(null,vec__17081);
var first__17083 = cljs.core.first.call(null,seq__17082);
var seq__17082__$1 = cljs.core.next.call(null,seq__17082);
var row__$1 = first__17083;
var more__$1 = seq__17082__$1;
var idx__$2 = idx__$1;
if(((row__$1 == null)) || (cljs.core.not.call(null,cljs.core.some.call(null,((function (G__17077__$1,idx__$1,vec__17081,seq__17082,first__17083,seq__17082__$1,row__$1,more__$1,idx__$2,G__17077,vec__17078,seq__17079,first__17080,seq__17079__$1,row,more,idx,r){
return (function (p1__17062_SHARP_){
return thi.ng.geom.viz.core.overlap_QMARK_.call(null,r,item_range.call(null,p1__17062_SHARP_));
});})(G__17077__$1,idx__$1,vec__17081,seq__17082,first__17083,seq__17082__$1,row__$1,more__$1,idx__$2,G__17077,vec__17078,seq__17079,first__17080,seq__17079__$1,row,more,idx,r))
,row__$1)))){
return cljs.core.update_in.call(null,grid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx__$2], null),((function (G__17077__$1,idx__$1,vec__17081,seq__17082,first__17083,seq__17082__$1,row__$1,more__$1,idx__$2,G__17077,vec__17078,seq__17079,first__17080,seq__17079__$1,row,more,idx,r){
return (function (p1__17063_SHARP_){
return cljs.core.conj.call(null,(function (){var or__7085__auto__ = p1__17063_SHARP_;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),x);
});})(G__17077__$1,idx__$1,vec__17081,seq__17082,first__17083,seq__17082__$1,row__$1,more__$1,idx__$2,G__17077,vec__17078,seq__17079,first__17080,seq__17079__$1,row,more,idx,r))
);
} else {
var G__17084 = more__$1;
var G__17085 = (idx__$2 + (1));
G__17077__$1 = G__17084;
idx__$1 = G__17085;
continue;
}
break;
}
}),cljs.core.PersistentVector.EMPTY,coll);
});
thi.ng.geom.viz.core.process_interval_row = (function thi$ng$geom$viz$core$process_interval_row(item_range,mapper,p__17086){
var vec__17093 = p__17086;
var d1 = cljs.core.nth.call(null,vec__17093,(0),null);
var d2 = cljs.core.nth.call(null,vec__17093,(1),null);
return ((function (vec__17093,d1,d2){
return (function (i,row){
return cljs.core.map.call(null,((function (vec__17093,d1,d2){
return (function (item){
var vec__17096 = item_range.call(null,item);
var a = cljs.core.nth.call(null,vec__17096,(0),null);
var b = cljs.core.nth.call(null,vec__17096,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__7418__auto__ = d1;
var y__7419__auto__ = a;
return ((x__7418__auto__ > y__7419__auto__) ? x__7418__auto__ : y__7419__auto__);
})(),i], null)),mapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__7425__auto__ = d2;
var y__7426__auto__ = b;
return ((x__7425__auto__ < y__7426__auto__) ? x__7425__auto__ : y__7426__auto__);
})(),i], null)),item], null);
});})(vec__17093,d1,d2))
,row);
});
;})(vec__17093,d1,d2))
});
thi.ng.geom.viz.core.svg_stacked_interval_plot = (function thi$ng$geom$viz$core$svg_stacked_interval_plot(p__17100,p__17101){
var map__17110 = p__17100;
var map__17110__$1 = ((((!((map__17110 == null)))?((((map__17110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17110):map__17110);
var x_axis = cljs.core.get.call(null,map__17110__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__17110__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var map__17111 = p__17101;
var map__17111__$1 = ((((!((map__17111 == null)))?((((map__17111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17111):map__17111);
var values = cljs.core.get.call(null,map__17111__$1,new cljs.core.Keyword(null,"values","values",372645556));
var attribs = cljs.core.get.call(null,map__17111__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__17111__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__17110,map__17110__$1,x_axis,y_axis,map__17111,map__17111__$1,values,attribs){
return (function (p__17114){
var vec__17115 = p__17114;
var a = cljs.core.nth.call(null,vec__17115,(0),null);
var b = cljs.core.nth.call(null,vec__17115,(1),null);
return thi.ng.geom.svg.core.line.call(null,a,b);
});})(map__17110,map__17110__$1,x_axis,y_axis,map__17111,map__17111__$1,values,attribs))
);
var item_range = cljs.core.get.call(null,map__17111__$1,new cljs.core.Keyword(null,"item-range","item-range",1733769894),cljs.core.identity);
var offset = cljs.core.get.call(null,map__17111__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var domain = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis);
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,scale_x,scale_y);
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.mapv.call(null,shape,cljs.core.mapcat.call(null,thi.ng.geom.viz.core.process_interval_row.call(null,item_range,mapper,domain),cljs.core.range.call(null,offset,1000000.0),thi.ng.geom.viz.core.compute_row_stacking.call(null,item_range,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.first,item_range),cljs.core.filter.call(null,((function (scale_x,scale_y,domain,mapper,map__17110,map__17110__$1,x_axis,y_axis,map__17111,map__17111__$1,values,attribs,shape,item_range,offset){
return (function (p1__17099_SHARP_){
return thi.ng.geom.viz.core.overlap_QMARK_.call(null,domain,item_range.call(null,p1__17099_SHARP_));
});})(scale_x,scale_y,domain,mapper,map__17110,map__17110__$1,x_axis,y_axis,map__17111,map__17111__$1,values,attribs,shape,item_range,offset))
,values))))));
});
thi.ng.geom.viz.core.svg_axis_STAR_ = (function thi$ng$geom$viz$core$svg_axis_STAR_(p__17118,axis,tick1_fn,tick2_fn,label_fn){
var map__17121 = p__17118;
var map__17121__$1 = ((((!((map__17121 == null)))?((((map__17121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17121):map__17121);
var major = cljs.core.get.call(null,map__17121__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__17121__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var attribs = cljs.core.get.call(null,map__17121__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var label_style = cljs.core.get.call(null,map__17121__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000"], null),attribs),cljs.core.map.call(null,tick1_fn,major),cljs.core.map.call(null,tick2_fn,minor),cljs.core.apply.call(null,thi.ng.geom.svg.core.group,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null),label_style),cljs.core.mapv.call(null,label_fn,major)),axis);
});
thi.ng.geom.viz.core.svg_x_axis_cartesian = (function thi$ng$geom$viz$core$svg_x_axis_cartesian(p__17126){
var map__17132 = p__17126;
var map__17132__$1 = ((((!((map__17132 == null)))?((((map__17132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17132):map__17132);
var spec = map__17132__$1;
var vec__17133 = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var r1 = cljs.core.nth.call(null,vec__17133,(0),null);
var r2 = cljs.core.nth.call(null,vec__17133,(1),null);
var scale = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var pos = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var y_major = (pos + major_size);
var y_minor = (pos + minor_size);
var y_label = (pos + label_dist);
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,spec,thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2,pos], null)),((function (y_major,y_minor,y_label,map__17132,map__17132__$1,spec,vec__17133,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__17123_SHARP_){
var x = scale.call(null,p1__17123_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_major], null));
});})(y_major,y_minor,y_label,map__17132,map__17132__$1,spec,vec__17133,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
,((function (y_major,y_minor,y_label,map__17132,map__17132__$1,spec,vec__17133,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__17124_SHARP_){
var x = scale.call(null,p1__17124_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_minor], null));
});})(y_major,y_minor,y_label,map__17132,map__17132__$1,spec,vec__17133,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
,((function (y_major,y_minor,y_label,map__17132,map__17132__$1,spec,vec__17133,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__17125_SHARP_){
return label.call(null,thi.ng.geom.core.vector.vec2.call(null,scale.call(null,p1__17125_SHARP_),y_label),p1__17125_SHARP_);
});})(y_major,y_minor,y_label,map__17132,map__17132__$1,spec,vec__17133,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
);
});
thi.ng.geom.viz.core.svg_y_axis_cartesian = (function thi$ng$geom$viz$core$svg_y_axis_cartesian(p__17140){
var map__17146 = p__17140;
var map__17146__$1 = ((((!((map__17146 == null)))?((((map__17146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17146):map__17146);
var spec = map__17146__$1;
var vec__17147 = cljs.core.get.call(null,map__17146__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var r1 = cljs.core.nth.call(null,vec__17147,(0),null);
var r2 = cljs.core.nth.call(null,vec__17147,(1),null);
var scale = cljs.core.get.call(null,map__17146__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__17146__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__17146__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__17146__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var label_y = cljs.core.get.call(null,map__17146__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),(0));
var pos = cljs.core.get.call(null,map__17146__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = cljs.core.get.call(null,map__17146__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var x_major = (pos - major_size);
var x_minor = (pos - minor_size);
var x_label = (pos - label_dist);
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,spec,thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r2], null)),((function (x_major,x_minor,x_label,map__17146,map__17146__$1,spec,vec__17147,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__17137_SHARP_){
var y = scale.call(null,p1__17137_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_major,y], null));
});})(x_major,x_minor,x_label,map__17146,map__17146__$1,spec,vec__17147,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
,((function (x_major,x_minor,x_label,map__17146,map__17146__$1,spec,vec__17147,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__17138_SHARP_){
var y = scale.call(null,p1__17138_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_minor,y], null));
});})(x_major,x_minor,x_label,map__17146,map__17146__$1,spec,vec__17147,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
,((function (x_major,x_minor,x_label,map__17146,map__17146__$1,spec,vec__17147,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__17139_SHARP_){
return label.call(null,thi.ng.geom.core.vector.vec2.call(null,x_label,(scale.call(null,p1__17139_SHARP_) + label_y)),p1__17139_SHARP_);
});})(x_major,x_minor,x_label,map__17146,map__17146__$1,spec,vec__17147,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
);
});
thi.ng.geom.viz.core.select_ticks = (function thi$ng$geom$viz$core$select_ticks(axis,minor_QMARK_){
if(cljs.core.truth_(minor_QMARK_)){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"minor","minor",-608536071).cljs$core$IFn$_invoke$arity$1(axis),new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(axis));
} else {
return new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(axis);
}
});
thi.ng.geom.viz.core.svg_axis_grid2d_cartesian = (function thi$ng$geom$viz$core$svg_axis_grid2d_cartesian(x_axis,y_axis,p__17153){
var map__17162 = p__17153;
var map__17162__$1 = ((((!((map__17162 == null)))?((((map__17162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17162):map__17162);
var attribs = cljs.core.get.call(null,map__17162__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var minor_x = cljs.core.get.call(null,map__17162__$1,new cljs.core.Keyword(null,"minor-x","minor-x",-230860299));
var minor_y = cljs.core.get.call(null,map__17162__$1,new cljs.core.Keyword(null,"minor-y","minor-y",388125550));
var vec__17164 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var x1 = cljs.core.nth.call(null,vec__17164,(0),null);
var x2 = cljs.core.nth.call(null,vec__17164,(1),null);
var vec__17167 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var y1 = cljs.core.nth.call(null,vec__17167,(0),null);
var y2 = cljs.core.nth.call(null,vec__17167,(1),null);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 1"], null),attribs),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?cljs.core.map.call(null,((function (vec__17164,x1,x2,vec__17167,y1,y2,scale_x,scale_y,map__17162,map__17162__$1,attribs,minor_x,minor_y){
return (function (p1__17151_SHARP_){
var x = scale_x.call(null,p1__17151_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2], null));
});})(vec__17164,x1,x2,vec__17167,y1,y2,scale_x,scale_y,map__17162,map__17162__$1,attribs,minor_x,minor_y))
,thi.ng.geom.viz.core.select_ticks.call(null,x_axis,minor_x)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?cljs.core.map.call(null,((function (vec__17164,x1,x2,vec__17167,y1,y2,scale_x,scale_y,map__17162,map__17162__$1,attribs,minor_x,minor_y){
return (function (p1__17152_SHARP_){
var y = scale_y.call(null,p1__17152_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y], null));
});})(vec__17164,x1,x2,vec__17167,y1,y2,scale_x,scale_y,map__17162,map__17162__$1,attribs,minor_x,minor_y))
,thi.ng.geom.viz.core.select_ticks.call(null,y_axis,minor_y)):null));
});
thi.ng.geom.viz.core.svg_plot2d_cartesian = (function thi$ng$geom$viz$core$svg_plot2d_cartesian(p__17170){
var map__17173 = p__17170;
var map__17173__$1 = ((((!((map__17173 == null)))?((((map__17173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17173):map__17173);
var opts = map__17173__$1;
var x_axis = cljs.core.get.call(null,map__17173__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__17173__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var grid = cljs.core.get.call(null,map__17173__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var data = cljs.core.get.call(null,map__17173__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.core.vector.vec2);
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(grid)?thi.ng.geom.viz.core.svg_axis_grid2d_cartesian.call(null,x_axis,y_axis,grid):null),cljs.core.map.call(null,((function (opts__$1,map__17173,map__17173__$1,opts,x_axis,y_axis,grid,data){
return (function (spec){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(spec).call(null,opts__$1,spec);
});})(opts__$1,map__17173,map__17173__$1,opts,x_axis,y_axis,grid,data))
,data),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?thi.ng.geom.viz.core.svg_x_axis_cartesian.call(null,x_axis):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?thi.ng.geom.viz.core.svg_y_axis_cartesian.call(null,y_axis):null));
});
thi.ng.geom.viz.core.svg_x_axis_polar = (function thi$ng$geom$viz$core$svg_x_axis_polar(p__17178){
var map__17186 = p__17178;
var map__17186__$1 = ((((!((map__17186 == null)))?((((map__17186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17186):map__17186);
var x_axis = cljs.core.get.call(null,map__17186__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var project = cljs.core.get.call(null,map__17186__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var circle = cljs.core.get.call(null,map__17186__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var origin = cljs.core.get.call(null,map__17186__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var map__17188 = x_axis;
var map__17188__$1 = ((((!((map__17188 == null)))?((((map__17188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17188):map__17188);
var scale = cljs.core.get.call(null,map__17188__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__17188__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__17188__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__17188__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var pos = cljs.core.get.call(null,map__17188__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = (function (){var or__7085__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(x_axis);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})();
var vec__17189 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var r1 = cljs.core.nth.call(null,vec__17189,(0),null);
var r2 = cljs.core.nth.call(null,vec__17189,(1),null);
var o = origin;
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,x_axis,(cljs.core.truth_(circle)?thi.ng.geom.svg.core.circle.call(null,o,pos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)):thi.ng.geom.svg.core.arc.call(null,o,pos,r1,r2,(thi.ng.math.core.abs_diff.call(null,r1,r2) > thi.ng.math.core.PI),true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null))),((function (map__17188,map__17188__$1,scale,major_size,minor_size,label_dist,pos,label,vec__17189,r1,r2,o,map__17186,map__17186__$1,x_axis,project,circle,origin){
return (function (p1__17175_SHARP_){
var x = scale.call(null,p1__17175_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + major_size)], null)));
});})(map__17188,map__17188__$1,scale,major_size,minor_size,label_dist,pos,label,vec__17189,r1,r2,o,map__17186,map__17186__$1,x_axis,project,circle,origin))
,((function (map__17188,map__17188__$1,scale,major_size,minor_size,label_dist,pos,label,vec__17189,r1,r2,o,map__17186,map__17186__$1,x_axis,project,circle,origin){
return (function (p1__17176_SHARP_){
var x = scale.call(null,p1__17176_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + minor_size)], null)));
});})(map__17188,map__17188__$1,scale,major_size,minor_size,label_dist,pos,label,vec__17189,r1,r2,o,map__17186,map__17186__$1,x_axis,project,circle,origin))
,((function (map__17188,map__17188__$1,scale,major_size,minor_size,label_dist,pos,label,vec__17189,r1,r2,o,map__17186,map__17186__$1,x_axis,project,circle,origin){
return (function (p1__17177_SHARP_){
var x = scale.call(null,p1__17177_SHARP_);
return label.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + label_dist)], null)),p1__17177_SHARP_);
});})(map__17188,map__17188__$1,scale,major_size,minor_size,label_dist,pos,label,vec__17189,r1,r2,o,map__17186,map__17186__$1,x_axis,project,circle,origin))
);
});
thi.ng.geom.viz.core.svg_y_axis_polar = (function thi$ng$geom$viz$core$svg_y_axis_polar(p__17196){
var map__17204 = p__17196;
var map__17204__$1 = ((((!((map__17204 == null)))?((((map__17204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17204):map__17204);
var y_axis = cljs.core.get.call(null,map__17204__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__17204__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__17206 = y_axis;
var map__17206__$1 = ((((!((map__17206 == null)))?((((map__17206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17206):map__17206);
var scale = cljs.core.get.call(null,map__17206__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var label_y = cljs.core.get.call(null,map__17206__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),(0));
var pos = cljs.core.get.call(null,map__17206__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = (function (){var or__7085__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(y_axis);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})();
var vec__17207 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var r1 = cljs.core.nth.call(null,vec__17207,(0),null);
var r2 = cljs.core.nth.call(null,vec__17207,(1),null);
var a = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r1], null));
var b = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r2], null));
var nl = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.normal.call(null,thi.ng.geom.core._.call(null,a,b)),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526).cljs$core$IFn$_invoke$arity$1(y_axis));
var n1 = thi.ng.geom.core.normalize.call(null,nl,new cljs.core.Keyword(null,"major-size","major-size",-698672375).cljs$core$IFn$_invoke$arity$1(y_axis));
var n2 = thi.ng.geom.core.normalize.call(null,nl,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109).cljs$core$IFn$_invoke$arity$1(y_axis));
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,y_axis,thi.ng.geom.svg.core.line.call(null,a,b),((function (map__17206,map__17206__$1,scale,label_y,pos,label,vec__17207,r1,r2,a,b,nl,n1,n2,map__17204,map__17204__$1,y_axis,project){
return (function (p1__17193_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,scale.call(null,p1__17193_SHARP_)], null));
return thi.ng.geom.svg.core.line.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,n1));
});})(map__17206,map__17206__$1,scale,label_y,pos,label,vec__17207,r1,r2,a,b,nl,n1,n2,map__17204,map__17204__$1,y_axis,project))
,((function (map__17206,map__17206__$1,scale,label_y,pos,label,vec__17207,r1,r2,a,b,nl,n1,n2,map__17204,map__17204__$1,y_axis,project){
return (function (p1__17194_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,scale.call(null,p1__17194_SHARP_)], null));
return thi.ng.geom.svg.core.line.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,n2));
});})(map__17206,map__17206__$1,scale,label_y,pos,label,vec__17207,r1,r2,a,b,nl,n1,n2,map__17204,map__17204__$1,y_axis,project))
,((function (map__17206,map__17206__$1,scale,label_y,pos,label,vec__17207,r1,r2,a,b,nl,n1,n2,map__17204,map__17204__$1,y_axis,project){
return (function (p1__17195_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,(scale.call(null,p1__17195_SHARP_) + label_y)], null));
return label.call(null,thi.ng.geom.core._PLUS_.call(null,p,nl),p1__17195_SHARP_);
});})(map__17206,map__17206__$1,scale,label_y,pos,label,vec__17207,r1,r2,a,b,nl,n1,n2,map__17204,map__17204__$1,y_axis,project))
);
});
thi.ng.geom.viz.core.svg_axis_grid2d_polar = (function thi$ng$geom$viz$core$svg_axis_grid2d_polar(p__17213){
var map__17224 = p__17213;
var map__17224__$1 = ((((!((map__17224 == null)))?((((map__17224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17224):map__17224);
var map__17225 = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__17225__$1 = ((((!((map__17225 == null)))?((((map__17225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17225):map__17225);
var attribs = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var minor_x = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"minor-x","minor-x",-230860299));
var minor_y = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"minor-y","minor-y",388125550));
var x_axis = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var origin = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var circle = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var project = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var vec__17228 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var x1 = cljs.core.nth.call(null,vec__17228,(0),null);
var x2 = cljs.core.nth.call(null,vec__17228,(1),null);
var vec__17231 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var y1 = cljs.core.nth.call(null,vec__17231,(0),null);
var y2 = cljs.core.nth.call(null,vec__17231,(1),null);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var great_QMARK_ = (thi.ng.math.core.abs_diff.call(null,x1,x2) > thi.ng.math.core.PI);
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 1"], null),attribs),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?cljs.core.map.call(null,((function (vec__17228,x1,x2,vec__17231,y1,y2,scale_x,scale_y,great_QMARK_,map__17224,map__17224__$1,map__17225,map__17225__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project){
return (function (p1__17211_SHARP_){
var x = scale_x.call(null,p1__17211_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y1], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2], null)));
});})(vec__17228,x1,x2,vec__17231,y1,y2,scale_x,scale_y,great_QMARK_,map__17224,map__17224__$1,map__17225,map__17225__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project))
,thi.ng.geom.viz.core.select_ticks.call(null,x_axis,minor_x)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?cljs.core.map.call(null,((function (vec__17228,x1,x2,vec__17231,y1,y2,scale_x,scale_y,great_QMARK_,map__17224,map__17224__$1,map__17225,map__17225__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project){
return (function (p1__17212_SHARP_){
var y = scale_y.call(null,p1__17212_SHARP_);
if(cljs.core.truth_(circle)){
return thi.ng.geom.svg.core.circle.call(null,origin,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
} else {
return thi.ng.geom.svg.core.arc.call(null,origin,y,x1,x2,great_QMARK_,true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
}
});})(vec__17228,x1,x2,vec__17231,y1,y2,scale_x,scale_y,great_QMARK_,map__17224,map__17224__$1,map__17225,map__17225__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project))
,thi.ng.geom.viz.core.select_ticks.call(null,y_axis,minor_y)):null));
});
thi.ng.geom.viz.core.svg_plot2d_polar = (function thi$ng$geom$viz$core$svg_plot2d_polar(p__17234){
var map__17237 = p__17234;
var map__17237__$1 = ((((!((map__17237 == null)))?((((map__17237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17237):map__17237);
var spec = map__17237__$1;
var x_axis = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var grid = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var data = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var origin = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var spec__$1 = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.viz.core.polar_projection.call(null,origin));
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(grid)?thi.ng.geom.viz.core.svg_axis_grid2d_polar.call(null,spec__$1):null),cljs.core.map.call(null,((function (spec__$1,map__17237,map__17237__$1,spec,x_axis,y_axis,grid,data,origin){
return (function (spec_SINGLEQUOTE_){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(spec_SINGLEQUOTE_).call(null,spec__$1,spec_SINGLEQUOTE_);
});})(spec__$1,map__17237,map__17237__$1,spec,x_axis,y_axis,grid,data,origin))
,data),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?thi.ng.geom.viz.core.svg_x_axis_polar.call(null,spec__$1):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?thi.ng.geom.viz.core.svg_y_axis_polar.call(null,spec__$1):null));
});

//# sourceMappingURL=core.js.map