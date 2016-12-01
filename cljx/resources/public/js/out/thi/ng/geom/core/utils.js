// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.core.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
thi.ng.geom.core.utils.closest_point_coeff = (function thi$ng$geom$core$utils$closest_point_coeff(p,a,b){
var d = thi.ng.geom.core._.call(null,b,a);
return (thi.ng.geom.core.dot.call(null,thi.ng.geom.core._.call(null,p,a),d) / thi.ng.geom.core.mag_squared.call(null,d));
});
thi.ng.geom.core.utils.closest_point_on_line = (function thi$ng$geom$core$utils$closest_point_on_line(p,a,b){
return thi.ng.geom.core.mix.call(null,a,b,thi.ng.geom.core.utils.closest_point_coeff.call(null,p,a,b));
});
thi.ng.geom.core.utils.closest_point_on_segment = (function thi$ng$geom$core$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.core.utils.closest_point_coeff.call(null,p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.geom.core.mix.call(null,a,b,t);
}
}
});
thi.ng.geom.core.utils.closest_point_on_segments = (function thi$ng$geom$core$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__11082_SHARP_){
return cljs.core.apply.call(null,thi.ng.geom.core.utils.closest_point_on_segment,p,p1__11082_SHARP_);
})),cljs.core.completing.call(null,(function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared.call(null,p,q);
if((d_SINGLEQUOTE_ < a.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.core.utils.closest_line_between = (function thi$ng$geom$core$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.geom.core._.call(null,b2,a2);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.geom.core._.call(null,b1,a1);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.geom.core._.call(null,a1,a2);
var d1343 = thi.ng.geom.core.dot.call(null,p13,p43);
var d4321 = thi.ng.geom.core.dot.call(null,p43,p21);
var d1321 = thi.ng.geom.core.dot.call(null,p13,p21);
var d4343 = thi.ng.geom.core.dot.call(null,p43,p43);
var d2121 = thi.ng.geom.core.dot.call(null,p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.geom.core.madd.call(null,p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.geom.core.madd.call(null,p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.dist_STAR_ = (function thi$ng$geom$core$utils$dist_STAR_(rf){
return (function (c,points){
return Math.sqrt(cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__11083_SHARP_){
return thi.ng.geom.core.dist_squared.call(null,c,p1__11083_SHARP_);
})),rf,(0),points));
});
});
thi.ng.geom.core.utils.min_dist = thi.ng.geom.core.utils.dist_STAR_.call(null,cljs.core.min);
thi.ng.geom.core.utils.max_dist = thi.ng.geom.core.utils.dist_STAR_.call(null,cljs.core.max);
thi.ng.geom.core.utils.arc_length_index = (function thi$ng$geom$core$utils$arc_length_index(points){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__11084_SHARP_){
return thi.ng.geom.core.dist.call(null,p1__11084_SHARP_.call(null,(0)),p1__11084_SHARP_.call(null,(1)));
})),cljs.core.completing.call(null,(function (a,d){
return cljs.core.conj.call(null,a,(cljs.core.peek.call(null,a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),thi.ng.dstruct.core.successive_nth.call(null,(2),points));
});
thi.ng.geom.core.utils.arc_length = (function thi$ng$geom$core$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.core.utils.centroid = (function thi$ng$geom$core$utils$centroid(p__11085){
var vec__11090 = p__11085;
var seq__11091 = cljs.core.seq.call(null,vec__11090);
var first__11092 = cljs.core.first.call(null,seq__11091);
var seq__11091__$1 = cljs.core.next.call(null,seq__11091);
var x = first__11092;
var xs = seq__11091__$1;
var coll = vec__11090;
var G__11093 = cljs.core.count.call(null,coll);
switch (G__11093) {
case (0):
return null;

break;
case (1):
return x;

break;
case (2):
return thi.ng.geom.core.mix.call(null,x,cljs.core.first.call(null,xs));

break;
default:
var s = (1.0 / cljs.core.count.call(null,coll));
var f = ((function (s,G__11093,vec__11090,seq__11091,first__11092,seq__11091__$1,x,xs,coll){
return (function (x__$1,_){
return (x__$1 * s);
});})(s,G__11093,vec__11090,seq__11091,first__11092,seq__11091__$1,x,xs,coll))
;
return thi.ng.geom.core.reduce_vector.call(null,x,cljs.core._PLUS_,f,xs);

}
});
thi.ng.geom.core.utils.center = (function thi$ng$geom$core$utils$center(var_args){
var args11096 = [];
var len__8301__auto___11099 = arguments.length;
var i__8302__auto___11100 = (0);
while(true){
if((i__8302__auto___11100 < len__8301__auto___11099)){
args11096.push((arguments[i__8302__auto___11100]));

var G__11101 = (i__8302__auto___11100 + (1));
i__8302__auto___11100 = G__11101;
continue;
} else {
}
break;
}

var G__11098 = args11096.length;
switch (G__11098) {
case 2:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11096.length)].join('')));

}
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.utils.centroid.call(null,coll),c_SINGLEQUOTE_,coll);
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.geom.core._.call(null,c_SINGLEQUOTE_,c);
return cljs.core.mapv.call(null,((function (d){
return (function (p1__11095_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__11095_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.core.utils.center.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.utils.scale_size = (function thi$ng$geom$core$utils$scale_size(var_args){
var args11104 = [];
var len__8301__auto___11107 = arguments.length;
var i__8302__auto___11108 = (0);
while(true){
if((i__8302__auto___11108 < len__8301__auto___11107)){
args11104.push((arguments[i__8302__auto___11108]));

var G__11109 = (i__8302__auto___11108 + (1));
i__8302__auto___11108 = G__11109;
continue;
} else {
}
break;
}

var G__11106 = args11104.length;
switch (G__11106) {
case 2:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11104.length)].join('')));

}
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.core.utils.scale_size.call(null,thi.ng.geom.core.utils.centroid.call(null,coll),s,coll);
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.call(null,(function (p1__11103_SHARP_){
return thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p1__11103_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.core.utils.scale_size.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.utils.bounds_STAR_ = (function thi$ng$geom$core$utils$bounds_STAR_(zero,p__11111){
var vec__11115 = p__11111;
var seq__11116 = cljs.core.seq.call(null,vec__11115);
var first__11117 = cljs.core.first.call(null,seq__11116);
var seq__11116__$1 = cljs.core.next.call(null,seq__11116);
var x = first__11117;
var xs = seq__11116__$1;
var coll = vec__11115;
var c = cljs.core.count.call(null,coll);
if((c > (1))){
var p = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.geom.core._.call(null,q,p)], null);
} else {
if(cljs.core._EQ_.call(null,c,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,zero], null);
} else {
return null;

}
}
});
thi.ng.geom.core.utils.bounding_rect = (function thi$ng$geom$core$utils$bounding_rect(points){
return thi.ng.geom.core.utils.bounds_STAR_.call(null,thi.ng.geom.core.vector.V2,points);
});
thi.ng.geom.core.utils.bounding_box = (function thi$ng$geom$core$utils$bounding_box(points){
return thi.ng.geom.core.utils.bounds_STAR_.call(null,thi.ng.geom.core.vector.V3,points);
});
thi.ng.geom.core.utils.radial_bounds = (function thi$ng$geom$core$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctor.call(null,c),((cljs.core.coll_QMARK_.call(null,r_or_points))?thi.ng.geom.core.utils.max_dist.call(null,c,r_or_points):r_or_points)], null);
});
thi.ng.geom.core.utils.axis_bounds = (function thi$ng$geom$core$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.call(null,(function (p1__11118_SHARP_){
return cljs.core.nth.call(null,p1__11118_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,xs),cljs.core.reduce.call(null,cljs.core.max,xs)], null);
});
thi.ng.geom.core.utils.axis_range = (function thi$ng$geom$core$utils$axis_range(axis,coll){
return (- cljs.core.apply.call(null,cljs.core._,thi.ng.geom.core.utils.axis_bounds.call(null,axis,coll)));
});
thi.ng.geom.core.utils.delta_contains = (function thi$ng$geom$core$utils$delta_contains(points,p,eps){
return cljs.core.some.call(null,(function (p1__11119_SHARP_){
return thi.ng.math.core.delta_EQ_.call(null,p,p1__11119_SHARP_,eps);
}),points);
});
thi.ng.geom.core.utils.from_barycentric = (function thi$ng$geom$core$utils$from_barycentric(points,weights){
return cljs.core.reduce.call(null,thi.ng.geom.core._PLUS_,cljs.core.map.call(null,thi.ng.geom.core._STAR_,points,weights));
});
thi.ng.geom.core.utils.point_at_STAR_ = (function thi$ng$geom$core$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= idx.call(null,i__$1))){
var G__11120 = (i__$1 + (1));
i__$1 = G__11120;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = idx.call(null,i1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.call(null,cljs.core.nth.call(null,points,i1),cljs.core.nth.call(null,points,i__$1),((ct - pi) / (idx.call(null,i__$1) - pi))),i__$1], null);
});
thi.ng.geom.core.utils.point_at = (function thi$ng$geom$core$utils$point_at(var_args){
var args11121 = [];
var len__8301__auto___11124 = arguments.length;
var i__8302__auto___11125 = (0);
while(true){
if((i__8302__auto___11125 < len__8301__auto___11124)){
args11121.push((arguments[i__8302__auto___11125]));

var G__11126 = (i__8302__auto___11125 + (1));
i__8302__auto___11125 = G__11126;
continue;
} else {
}
break;
}

var G__11123 = args11121.length;
switch (G__11123) {
case 2:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11121.length)].join('')));

}
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.core.utils.point_at.call(null,t,points,null);
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,t))){
var n = cljs.core.count.call(null,points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first.call(null,points);
} else {
if((1.0 === t__$1)){
return cljs.core.last.call(null,points);
} else {
var idx__$1 = (function (){var or__7085__auto__ = idx;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return thi.ng.geom.core.utils.arc_length_index.call(null,points);
}
})();
return cljs.core.first.call(null,thi.ng.geom.core.utils.point_at_STAR_.call(null,points,idx__$1,cljs.core.peek.call(null,idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
});

thi.ng.geom.core.utils.point_at.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.utils.sample_uniform_STAR_ = (function thi$ng$geom$core$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.core.utils.arc_length_index.call(null,points);
var total = cljs.core.peek.call(null,idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__11131 = thi.ng.geom.core.utils.point_at_STAR_.call(null,points,idx,total,t,i);
var p = cljs.core.nth.call(null,vec__11131,(0),null);
var i__$1 = cljs.core.nth.call(null,vec__11131,(1),null);
var G__11134 = (t + delta);
var G__11135 = (i__$1 | (0));
var G__11136 = cljs.core.conj.call(null,acc,p);
t = G__11134;
i = G__11135;
acc = G__11136;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.call(null,samples,cljs.core.last.call(null,points));
} else {
return samples;
}
});
thi.ng.geom.core.utils.sample_uniform = (function thi$ng$geom$core$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count.call(null,points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null);
} else {
return thi.ng.geom.core.utils.sample_uniform_STAR_.call(null,udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.core.utils.sample_segment_with_res = (function thi$ng$geom$core$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__7942__auto__ = (function thi$ng$geom$core$utils$sample_segment_with_res_$_iter__11141(s__11142){
return (new cljs.core.LazySeq(null,(function (){
var s__11142__$1 = s__11142;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__11142__$1);
if(temp__6753__auto__){
var s__11142__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11142__$2)){
var c__7940__auto__ = cljs.core.chunk_first.call(null,s__11142__$2);
var size__7941__auto__ = cljs.core.count.call(null,c__7940__auto__);
var b__11144 = cljs.core.chunk_buffer.call(null,size__7941__auto__);
if((function (){var i__11143 = (0);
while(true){
if((i__11143 < size__7941__auto__)){
var t = cljs.core._nth.call(null,c__7940__auto__,i__11143);
cljs.core.chunk_append.call(null,b__11144,thi.ng.geom.core.mix.call(null,a,b,t));

var G__11145 = (i__11143 + (1));
i__11143 = G__11145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11144),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__11141.call(null,cljs.core.chunk_rest.call(null,s__11142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11144),null);
}
} else {
var t = cljs.core.first.call(null,s__11142__$2);
return cljs.core.cons.call(null,thi.ng.geom.core.mix.call(null,a,b,t),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__11141.call(null,cljs.core.rest.call(null,s__11142__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__.call(null,thi.ng.math.core.norm_range.call(null,res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast.call(null,ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.core.utils.map_bilinear = (function thi$ng$geom$core$utils$map_bilinear(p__11146,p__11147){
var vec__11154 = p__11146;
var a = cljs.core.nth.call(null,vec__11154,(0),null);
var b = cljs.core.nth.call(null,vec__11154,(1),null);
var c = cljs.core.nth.call(null,vec__11154,(2),null);
var d = cljs.core.nth.call(null,vec__11154,(3),null);
var vec__11157 = p__11147;
var u = cljs.core.nth.call(null,vec__11157,(0),null);
var v = cljs.core.nth.call(null,vec__11157,(1),null);
return thi.ng.geom.core.mix.call(null,a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.core.utils.map_trilinear = (function thi$ng$geom$core$utils$map_trilinear(p__11160,p__11161){
var vec__11168 = p__11160;
var a = cljs.core.nth.call(null,vec__11168,(0),null);
var b = cljs.core.nth.call(null,vec__11168,(1),null);
var c = cljs.core.nth.call(null,vec__11168,(2),null);
var d = cljs.core.nth.call(null,vec__11168,(3),null);
var e = cljs.core.nth.call(null,vec__11168,(4),null);
var f = cljs.core.nth.call(null,vec__11168,(5),null);
var g = cljs.core.nth.call(null,vec__11168,(6),null);
var h = cljs.core.nth.call(null,vec__11168,(7),null);
var vec__11171 = p__11161;
var u = cljs.core.nth.call(null,vec__11171,(0),null);
var v = cljs.core.nth.call(null,vec__11171,(1),null);
var w = cljs.core.nth.call(null,vec__11171,(2),null);
return thi.ng.geom.core.mix.call(null,thi.ng.geom.core.mix.call(null,a,d,e,h,u,v),thi.ng.geom.core.mix.call(null,b,c,f,g,u,v),w);
});
thi.ng.geom.core.utils.tessellate_with_point = (function thi$ng$geom$core$utils$tessellate_with_point(var_args){
var args11175 = [];
var len__8301__auto___11178 = arguments.length;
var i__8302__auto___11179 = (0);
while(true){
if((i__8302__auto___11179 < len__8301__auto___11178)){
args11175.push((arguments[i__8302__auto___11179]));

var G__11180 = (i__8302__auto___11179 + (1));
i__8302__auto___11179 = G__11180;
continue;
} else {
}
break;
}

var G__11177 = args11175.length;
switch (G__11177) {
case 1:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11175.length)].join('')));

}
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.core.utils.tessellate_with_point.call(null,thi.ng.geom.core.utils.centroid.call(null,points),points);
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.call(null,(function (p1__11174_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,p1__11174_SHARP_.call(null,(0)),p1__11174_SHARP_.call(null,(1))],null));
}),thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.concat.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))));
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;

thi.ng.geom.core.utils.tessellate_with_first = (function thi$ng$geom$core$utils$tessellate_with_first(points){
if((cljs.core.count.call(null,points) > (3))){
var vec__11189 = points;
var seq__11190 = cljs.core.seq.call(null,vec__11189);
var first__11191 = cljs.core.first.call(null,seq__11190);
var seq__11190__$1 = cljs.core.next.call(null,seq__11190);
var v0 = first__11191;
var more = seq__11190__$1;
return cljs.core.mapv.call(null,((function (vec__11189,seq__11190,first__11191,seq__11190__$1,v0,more){
return (function (p__11192){
var vec__11193 = p__11192;
var a = cljs.core.nth.call(null,vec__11193,(0),null);
var b = cljs.core.nth.call(null,vec__11193,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(vec__11189,seq__11190,first__11191,seq__11190__$1,v0,more))
,thi.ng.dstruct.core.successive_nth.call(null,(2),more));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.core.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$core$utils$tessellate_tri_with_midpoints(p__11196){
var vec__11200 = p__11196;
var a = cljs.core.nth.call(null,vec__11200,(0),null);
var b = cljs.core.nth.call(null,vec__11200,(1),null);
var c = cljs.core.nth.call(null,vec__11200,(2),null);
var ab = thi.ng.geom.core.mix.call(null,a,b);
var bc = thi.ng.geom.core.mix.call(null,b,c);
var ca = thi.ng.geom.core.mix.call(null,c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.core.utils.tessellate_3 = (function thi$ng$geom$core$utils$tessellate_3(points){
var pred__11209 = cljs.core._EQ_;
var expr__11210 = cljs.core.count.call(null,points);
if(cljs.core.truth_(pred__11209.call(null,(3),expr__11210))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_(pred__11209.call(null,(4),expr__11210))){
var vec__11212 = points;
var a = cljs.core.nth.call(null,vec__11212,(0),null);
var b = cljs.core.nth.call(null,vec__11212,(1),null);
var c = cljs.core.nth.call(null,vec__11212,(2),null);
var d = cljs.core.nth.call(null,vec__11212,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.call(null,points);
}
}
});
thi.ng.geom.core.utils.tessellate_max4 = (function thi$ng$geom$core$utils$tessellate_max4(points){
if((cljs.core.count.call(null,points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.call(null,points);
}
});
thi.ng.geom.core.utils.ortho_normal = (function thi$ng$geom$core$utils$ortho_normal(var_args){
var args11215 = [];
var len__8301__auto___11222 = arguments.length;
var i__8302__auto___11223 = (0);
while(true){
if((i__8302__auto___11223 < len__8301__auto___11222)){
args11215.push((arguments[i__8302__auto___11223]));

var G__11224 = (i__8302__auto___11223 + (1));
i__8302__auto___11223 = G__11224;
continue;
} else {
}
break;
}

var G__11217 = args11215.length;
switch (G__11217) {
case 1:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11215.length)].join('')));

}
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__11218){
var vec__11219 = p__11218;
var a = cljs.core.nth.call(null,vec__11219,(0),null);
var b = cljs.core.nth.call(null,vec__11219,(1),null);
var c = cljs.core.nth.call(null,vec__11219,(2),null);
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,a,b));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.utils.norm_sign2 = (function thi$ng$geom$core$utils$norm_sign2(p__11226,p__11227,p__11228){
var vec__11238 = p__11226;
var ax = cljs.core.nth.call(null,vec__11238,(0),null);
var ay = cljs.core.nth.call(null,vec__11238,(1),null);
var vec__11241 = p__11227;
var bx = cljs.core.nth.call(null,vec__11241,(0),null);
var by = cljs.core.nth.call(null,vec__11241,(1),null);
var vec__11244 = p__11228;
var cx = cljs.core.nth.call(null,vec__11244,(0),null);
var cy = cljs.core.nth.call(null,vec__11244,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.core.utils.norm_sign3 = (function thi$ng$geom$core$utils$norm_sign3(a,b,c){
return thi.ng.geom.core.mag.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});
thi.ng.geom.core.utils.tri_area2 = (function thi$ng$geom$core$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign2.call(null,a,b,c));
});
thi.ng.geom.core.utils.tri_area3 = (function thi$ng$geom$core$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign3.call(null,a,b,c));
});
thi.ng.geom.core.utils.clockwise2_QMARK_ = (function thi$ng$geom$core$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.core.utils.norm_sign2.call(null,a,b,c) < (0));
});
thi.ng.geom.core.utils.clockwise3_QMARK_ = (function thi$ng$geom$core$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.geom.core.dot.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)),n) > (0));
});
thi.ng.geom.core.utils.triangle_barycentric_coords = (function thi$ng$geom$core$utils$triangle_barycentric_coords(var_args){
var args11247 = [];
var len__8301__auto___11254 = arguments.length;
var i__8302__auto___11255 = (0);
while(true){
if((i__8302__auto___11255 < len__8301__auto___11254)){
args11247.push((arguments[i__8302__auto___11255]));

var G__11256 = (i__8302__auto___11255 + (1));
i__8302__auto___11255 = G__11256;
continue;
} else {
}
break;
}

var G__11249 = args11247.length;
switch (G__11249) {
case 2:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11247.length)].join('')));

}
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__11250,p){
var vec__11251 = p__11250;
var a = cljs.core.nth.call(null,vec__11251,(0),null);
var b = cljs.core.nth.call(null,vec__11251,(1),null);
var c = cljs.core.nth.call(null,vec__11251,(2),null);
return thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.geom.core._.call(null,p,a);
var uu = thi.ng.geom.core.mag_squared.call(null,u);
var vv = thi.ng.geom.core.mag_squared.call(null,v);
var uv = thi.ng.geom.core.dot.call(null,u,v);
var wu = thi.ng.geom.core.dot.call(null,w,u);
var wv = thi.ng.geom.core.dot.call(null,w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6;

thi.ng.geom.core.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(cljs.core.truth_(thi.ng.geom.core.utils.clockwise2_QMARK_.call(null,a,b,c))){
return ((thi.ng.geom.core.utils.norm_sign2.call(null,a,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,b,a,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,c,b,p) >= 0.0));
} else {
return ((thi.ng.geom.core.utils.norm_sign2.call(null,b,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,a,b,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,c,a,p) >= 0.0));
}
});
thi.ng.geom.core.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.geom.core._.call(null,b,a);
var v = thi.ng.geom.core._.call(null,c,a);
var n = thi.ng.geom.core.utils.ortho_normal.call(null,u,v);
var cl = (thi.ng.geom.core.dot.call(null,n,p) - thi.ng.geom.core.dot.call(null,n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,cl))){
var vec__11261 = thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,u,v);
var u__$1 = cljs.core.nth.call(null,vec__11261,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__11261,(1),null);
var w = cljs.core.nth.call(null,vec__11261,(2),null);
var and__7073__auto__ = (u__$1 >= 0.0);
if(and__7073__auto__){
var and__7073__auto____$1 = (w >= 0.0);
if(and__7073__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.tessellating_transducer = (function thi$ng$geom$core$utils$tessellating_transducer(f){
return cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.core.utils.tessellate_with_first),cljs.core.map.call(null,f));
});
thi.ng.geom.core.utils.area_xf = thi.ng.geom.core.utils.tessellating_transducer.call(null,(function (p1__11264_SHARP_){
return thi.ng.math.core.abs.call(null,cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,p1__11264_SHARP_));
}));
thi.ng.geom.core.utils.volume_xf = thi.ng.geom.core.utils.tessellating_transducer.call(null,(function (p1__11265_SHARP_){
return thi.ng.geom.core.dot.call(null,p1__11265_SHARP_.call(null,(0)),thi.ng.geom.core.cross.call(null,p1__11265_SHARP_.call(null,(1)),p1__11265_SHARP_.call(null,(2))));
}));
thi.ng.geom.core.utils.total_area_3d = (function thi$ng$geom$core$utils$total_area_3d(faces){
return cljs.core.transduce.call(null,thi.ng.geom.core.utils.area_xf,cljs.core._PLUS_,faces);
});
thi.ng.geom.core.utils.total_volume = (function thi$ng$geom$core$utils$total_volume(faces){
return (cljs.core.transduce.call(null,thi.ng.geom.core.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});

//# sourceMappingURL=utils.js.map