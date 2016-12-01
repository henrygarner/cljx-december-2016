// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.svg.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.strf.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = thi.ng.strf.core.float$.call(null,(2));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p))),cljs.core.str(","),cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))))].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__16274 = (n | (0));
switch (G__16274) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);

break;
case (2):
return thi.ng.geom.svg.core.point_seq_format2;

break;
case (3):
return thi.ng.geom.svg.core.point_seq_format3;

break;
case (4):
return thi.ng.geom.svg.core.point_seq_format4;

break;
default:
return cljs.core.interpose.call(null," ",cljs.core.repeat.call(null,n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

/**
 * @interface
 */
thi.ng.geom.svg.core.PSVGConvert = function(){};

thi.ng.geom.svg.core.as_svg = (function thi$ng$geom$svg$core$as_svg(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2 == null)))){
return _.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2(_,opts);
} else {
var x__7798__auto__ = (((_ == null))?null:_);
var m__7799__auto__ = (thi.ng.geom.svg.core.as_svg[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return m__7799__auto__.call(null,_,opts);
} else {
var m__7799__auto____$1 = (thi.ng.geom.svg.core.as_svg["_"]);
if(!((m__7799__auto____$1 == null))){
return m__7799__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PSVGConvert.as-svg",_);
}
}
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__6751__auto__ = attribs.call(null,id);
if(cljs.core.truth_(temp__6751__auto__)){
var att = temp__6751__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.call(null,attribs,id,cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,att)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__6751__auto__ = attribs.call(null,id);
if(cljs.core.truth_(temp__6751__auto__)){
var mat = temp__6751__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__16279 = mat;
var a = cljs.core.nth.call(null,vec__16279,(0),null);
var c = cljs.core.nth.call(null,vec__16279,(1),null);
var e = cljs.core.nth.call(null,vec__16279,(2),null);
var b = cljs.core.nth.call(null,vec__16279,(3),null);
var d = cljs.core.nth.call(null,vec__16279,(4),null);
var f = cljs.core.nth.call(null,vec__16279,(5),null);
return cljs.core.assoc.call(null,attribs,id,cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$.call(null,attribs);
var ks = cljs.core.keys.call(null,attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__16282 = ((cljs.core._EQ_.call(null,"__",cljs.core.subs.call(null,cljs.core.name.call(null,cljs.core.first.call(null,ks)),(0),(2))))?cljs.core.dissoc_BANG_.call(null,acc,cljs.core.first.call(null,ks)):acc);
var G__16283 = cljs.core.next.call(null,ks);
acc = G__16282;
ks = G__16283;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq.call(null,attribs)){
return cljs.core.into.call(null,thi.ng.geom.svg.core.matrix_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.filter_attribs.call(null,attribs),new cljs.core.Keyword(null,"stroke","stroke",1741823555)),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"transform","transform",1381301764)),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16286 = arguments.length;
var i__8302__auto___16287 = (0);
while(true){
if((i__8302__auto___16287 < len__8301__auto___16286)){
args__8308__auto__.push((arguments[i__8302__auto___16287]));

var G__16288 = (i__8302__auto___16287 + (1));
i__8302__auto___16287 = G__16288;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
});

thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq16284){
var G__16285 = cljs.core.first.call(null,seq16284);
var seq16284__$1 = cljs.core.next.call(null,seq16284);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(G__16285,seq16284__$1);
});

thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16290 = arguments.length;
var i__8302__auto___16291 = (0);
while(true){
if((i__8302__auto___16291 < len__8301__auto___16290)){
args__8308__auto__.push((arguments[i__8302__auto___16291]));

var G__16292 = (i__8302__auto___16291 + (1));
i__8302__auto___16291 = G__16292;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),defs], null);
});

thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq16289){
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16289));
});

thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__16293){
var vec__16297 = p__16293;
var pos = cljs.core.nth.call(null,vec__16297,(0),null);
var col = cljs.core.nth.call(null,vec__16297,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16303 = arguments.length;
var i__8302__auto___16304 = (0);
while(true){
if((i__8302__auto___16304 < len__8301__auto___16303)){
args__8308__auto__.push((arguments[i__8302__auto___16304]));

var G__16305 = (i__8302__auto___16304 + (1));
i__8302__auto___16304 = G__16305;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq16300){
var G__16301 = cljs.core.first.call(null,seq16300);
var seq16300__$1 = cljs.core.next.call(null,seq16300);
var G__16302 = cljs.core.first.call(null,seq16300__$1);
var seq16300__$2 = cljs.core.next.call(null,seq16300__$1);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(G__16301,G__16302,seq16300__$2);
});

thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16309 = arguments.length;
var i__8302__auto___16310 = (0);
while(true){
if((i__8302__auto___16310 < len__8301__auto___16309)){
args__8308__auto__.push((arguments[i__8302__auto___16310]));

var G__16311 = (i__8302__auto___16310 + (1));
i__8302__auto___16310 = G__16311;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq16306){
var G__16307 = cljs.core.first.call(null,seq16306);
var seq16306__$1 = cljs.core.next.call(null,seq16306);
var G__16308 = cljs.core.first.call(null,seq16306__$1);
var seq16306__$2 = cljs.core.next.call(null,seq16306__$1);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic(G__16307,G__16308,seq16306__$2);
});

thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16314 = arguments.length;
var i__8302__auto___16315 = (0);
while(true){
if((i__8302__auto___16315 < len__8301__auto___16314)){
args__8308__auto__.push((arguments[i__8302__auto___16315]));

var G__16316 = (i__8302__auto___16315 + (1));
i__8302__auto___16315 = G__16316;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,null)], null),body);
});

thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq16312){
var G__16313 = cljs.core.first.call(null,seq16312);
var seq16312__$1 = cljs.core.next.call(null,seq16312);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(G__16313,seq16312__$1);
});

thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16323 = arguments.length;
var i__8302__auto___16324 = (0);
while(true){
if((i__8302__auto___16324 < len__8301__auto___16323)){
args__8308__auto__.push((arguments[i__8302__auto___16324]));

var G__16325 = (i__8302__auto___16324 + (1));
i__8302__auto___16324 = G__16325;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic = (function (segments,p__16319){
var vec__16320 = p__16319;
var attribs = cljs.core.nth.call(null,vec__16320,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.call(null,thi.ng.strf.core.format,cljs.core.mapcat.call(null,cljs.core.comp.call(null,thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),segments),cljs.core.mapcat.call(null,cljs.core.rest,segments))], null))], null);
});

thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.path.cljs$lang$applyTo = (function (seq16317){
var G__16318 = cljs.core.first.call(null,seq16317);
var seq16317__$1 = cljs.core.next.call(null,seq16317);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic(G__16318,seq16317__$1);
});

thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16337 = arguments.length;
var i__8302__auto___16338 = (0);
while(true){
if((i__8302__auto___16338 < len__8301__auto___16337)){
args__8308__auto__.push((arguments[i__8302__auto___16338]));

var G__16339 = (i__8302__auto___16338 + (1));
i__8302__auto___16338 = G__16339;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__16329,txt,p__16330){
var vec__16331 = p__16329;
var x = cljs.core.nth.call(null,vec__16331,(0),null);
var y = cljs.core.nth.call(null,vec__16331,(1),null);
var vec__16334 = p__16330;
var attribs = cljs.core.nth.call(null,vec__16334,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y)], null)),txt], null);
});

thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.text.cljs$lang$applyTo = (function (seq16326){
var G__16327 = cljs.core.first.call(null,seq16326);
var seq16326__$1 = cljs.core.next.call(null,seq16326);
var G__16328 = cljs.core.first.call(null,seq16326__$1);
var seq16326__$2 = cljs.core.next.call(null,seq16326__$1);
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic(G__16327,G__16328,seq16326__$2);
});

thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16351 = arguments.length;
var i__8302__auto___16352 = (0);
while(true){
if((i__8302__auto___16352 < len__8301__auto___16351)){
args__8308__auto__.push((arguments[i__8302__auto___16352]));

var G__16353 = (i__8302__auto___16352 + (1));
i__8302__auto___16352 = G__16353;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic = (function (p__16343,radius,p__16344){
var vec__16345 = p__16343;
var x = cljs.core.nth.call(null,vec__16345,(0),null);
var y = cljs.core.nth.call(null,vec__16345,(1),null);
var vec__16348 = p__16344;
var attribs = cljs.core.nth.call(null,vec__16348,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),radius], null))], null);
});

thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.circle.cljs$lang$applyTo = (function (seq16340){
var G__16341 = cljs.core.first.call(null,seq16340);
var seq16340__$1 = cljs.core.next.call(null,seq16340);
var G__16342 = cljs.core.first.call(null,seq16340__$1);
var seq16340__$2 = cljs.core.next.call(null,seq16340__$1);
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic(G__16341,G__16342,seq16340__$2);
});

thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.core.vector.vec2.call(null,radius);
var p = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.geom.core.vector.x.call(null,radius__$1),theta1)));
var q = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.geom.core.vector.y.call(null,radius__$1),theta2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16365 = arguments.length;
var i__8302__auto___16366 = (0);
while(true){
if((i__8302__auto___16366 < len__8301__auto___16365)){
args__8308__auto__.push((arguments[i__8302__auto___16366]));

var G__16367 = (i__8302__auto___16366 + (1));
i__8302__auto___16366 = G__16367;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((6) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((6)),(0),null)):null);
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,p__16361){
var vec__16362 = p__16361;
var attribs = cljs.core.nth.call(null,vec__16362,(0),null);
return thi.ng.geom.svg.core.path.call(null,thi.ng.geom.svg.core.arc_segment.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),attribs);
});

thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = (6);

thi.ng.geom.svg.core.arc.cljs$lang$applyTo = (function (seq16354){
var G__16355 = cljs.core.first.call(null,seq16354);
var seq16354__$1 = cljs.core.next.call(null,seq16354);
var G__16356 = cljs.core.first.call(null,seq16354__$1);
var seq16354__$2 = cljs.core.next.call(null,seq16354__$1);
var G__16357 = cljs.core.first.call(null,seq16354__$2);
var seq16354__$3 = cljs.core.next.call(null,seq16354__$2);
var G__16358 = cljs.core.first.call(null,seq16354__$3);
var seq16354__$4 = cljs.core.next.call(null,seq16354__$3);
var G__16359 = cljs.core.first.call(null,seq16354__$4);
var seq16354__$5 = cljs.core.next.call(null,seq16354__$4);
var G__16360 = cljs.core.first.call(null,seq16354__$5);
var seq16354__$6 = cljs.core.next.call(null,seq16354__$5);
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic(G__16355,G__16356,G__16357,G__16358,G__16359,G__16360,seq16354__$6);
});

thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16380 = arguments.length;
var i__8302__auto___16381 = (0);
while(true){
if((i__8302__auto___16381 < len__8301__auto___16380)){
args__8308__auto__.push((arguments[i__8302__auto___16381]));

var G__16382 = (i__8302__auto___16381 + (1));
i__8302__auto___16381 = G__16382;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((3) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((3)),(0),null)):null);
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic = (function (p__16372,w,h,p__16373){
var vec__16374 = p__16372;
var x = cljs.core.nth.call(null,vec__16374,(0),null);
var y = cljs.core.nth.call(null,vec__16374,(1),null);
var vec__16377 = p__16373;
var attribs = cljs.core.nth.call(null,vec__16377,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null))], null);
});

thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = (3);

thi.ng.geom.svg.core.rect.cljs$lang$applyTo = (function (seq16368){
var G__16369 = cljs.core.first.call(null,seq16368);
var seq16368__$1 = cljs.core.next.call(null,seq16368);
var G__16370 = cljs.core.first.call(null,seq16368__$1);
var seq16368__$2 = cljs.core.next.call(null,seq16368__$1);
var G__16371 = cljs.core.first.call(null,seq16368__$2);
var seq16368__$3 = cljs.core.next.call(null,seq16368__$2);
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic(G__16369,G__16370,G__16371,seq16368__$3);
});

thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16398 = arguments.length;
var i__8302__auto___16399 = (0);
while(true){
if((i__8302__auto___16399 < len__8301__auto___16398)){
args__8308__auto__.push((arguments[i__8302__auto___16399]));

var G__16400 = (i__8302__auto___16399 + (1));
i__8302__auto___16399 = G__16400;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__16386,p__16387,p__16388){
var vec__16389 = p__16386;
var ax = cljs.core.nth.call(null,vec__16389,(0),null);
var ay = cljs.core.nth.call(null,vec__16389,(1),null);
var vec__16392 = p__16387;
var bx = cljs.core.nth.call(null,vec__16392,(0),null);
var by = cljs.core.nth.call(null,vec__16392,(1),null);
var vec__16395 = p__16388;
var attribs = cljs.core.nth.call(null,vec__16395,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ax),new cljs.core.Keyword(null,"y1","y1",589123466),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ay),new cljs.core.Keyword(null,"x2","x2",-1362513475),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,bx),new cljs.core.Keyword(null,"y2","y2",-718691301),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,by)], null))], null);
});

thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.line.cljs$lang$applyTo = (function (seq16383){
var G__16384 = cljs.core.first.call(null,seq16383);
var seq16383__$1 = cljs.core.next.call(null,seq16383);
var G__16385 = cljs.core.first.call(null,seq16383__$1);
var seq16383__$2 = cljs.core.next.call(null,seq16383__$1);
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic(G__16384,G__16385,seq16383__$2);
});

thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16410 = arguments.length;
var i__8302__auto___16411 = (0);
while(true){
if((i__8302__auto___16411 < len__8301__auto___16410)){
args__8308__auto__.push((arguments[i__8302__auto___16411]));

var G__16412 = (i__8302__auto___16411 + (1));
i__8302__auto___16411 = G__16412;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((4) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((4)),(0),null)):null);
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,start,end,p__16406){
var vec__16407 = p__16406;
var attribs = cljs.core.nth.call(null,vec__16407,(0),null);
var x__8014__auto__ = thi.ng.geom.svg.core.line.call(null,p,q,attribs);
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = (cljs.core.truth_(start)?start.call(null,q,p,(0),attribs):null);
return cljs.core._conj.call(null,(function (){var x__8014__auto____$2 = (cljs.core.truth_(end)?end.call(null,p,q,(0),attribs):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$2);
})(),x__8014__auto____$1);
})(),x__8014__auto__);
});

thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = (4);

thi.ng.geom.svg.core.line_decorated.cljs$lang$applyTo = (function (seq16401){
var G__16402 = cljs.core.first.call(null,seq16401);
var seq16401__$1 = cljs.core.next.call(null,seq16401);
var G__16403 = cljs.core.first.call(null,seq16401__$1);
var seq16401__$2 = cljs.core.next.call(null,seq16401__$1);
var G__16404 = cljs.core.first.call(null,seq16401__$2);
var seq16401__$3 = cljs.core.next.call(null,seq16401__$2);
var G__16405 = cljs.core.first.call(null,seq16401__$3);
var seq16401__$4 = cljs.core.next.call(null,seq16401__$3);
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic(G__16402,G__16403,G__16404,G__16405,seq16401__$4);
});

thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16419 = arguments.length;
var i__8302__auto___16420 = (0);
while(true){
if((i__8302__auto___16420 < len__8301__auto___16419)){
args__8308__auto__.push((arguments[i__8302__auto___16420]));

var G__16421 = (i__8302__auto___16420 + (1));
i__8302__auto___16420 = G__16421;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__16415){
var vec__16416 = p__16415;
var attribs = cljs.core.nth.call(null,vec__16416,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.line_strip.cljs$lang$applyTo = (function (seq16413){
var G__16414 = cljs.core.first.call(null,seq16413);
var seq16413__$1 = cljs.core.next.call(null,seq16413);
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic(G__16414,seq16413__$1);
});

thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16439 = arguments.length;
var i__8302__auto___16440 = (0);
while(true){
if((i__8302__auto___16440 < len__8301__auto___16439)){
args__8308__auto__.push((arguments[i__8302__auto___16440]));

var G__16441 = (i__8302__auto___16440 + (1));
i__8302__auto___16440 = G__16441;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((4) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((4)),(0),null)):null);
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (points,start,seg,end,p__16427){
var vec__16428 = p__16427;
var attribs = cljs.core.nth.call(null,vec__16428,(0),null);
var n = (cljs.core.count.call(null,points) - (1));
var x__8014__auto__ = thi.ng.geom.svg.core.line_strip.call(null,points,attribs);
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = (cljs.core.truth_(start)?start.call(null,points.call(null,(1)),points.call(null,(0)),(0),attribs):null);
return cljs.core._conj.call(null,(function (){var x__8014__auto____$2 = (cljs.core.truth_(seg)?cljs.core.map_indexed.call(null,((function (x__8014__auto____$1,x__8014__auto__,n,vec__16428,attribs){
return (function (i,p__16435){
var vec__16436 = p__16435;
var p = cljs.core.nth.call(null,vec__16436,(0),null);
var q = cljs.core.nth.call(null,vec__16436,(1),null);
return seg.call(null,p,q,i,attribs);
});})(x__8014__auto____$1,x__8014__auto__,n,vec__16428,attribs))
,thi.ng.dstruct.core.successive_nth.call(null,(2),points)):null);
return cljs.core._conj.call(null,(function (){var x__8014__auto____$3 = (cljs.core.truth_(end)?end.call(null,points.call(null,(n - (1))),cljs.core.peek.call(null,points),n,attribs):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$3);
})(),x__8014__auto____$2);
})(),x__8014__auto____$1);
})(),x__8014__auto__);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = (4);

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$applyTo = (function (seq16422){
var G__16423 = cljs.core.first.call(null,seq16422);
var seq16422__$1 = cljs.core.next.call(null,seq16422);
var G__16424 = cljs.core.first.call(null,seq16422__$1);
var seq16422__$2 = cljs.core.next.call(null,seq16422__$1);
var G__16425 = cljs.core.first.call(null,seq16422__$2);
var seq16422__$3 = cljs.core.next.call(null,seq16422__$2);
var G__16426 = cljs.core.first.call(null,seq16422__$3);
var seq16422__$4 = cljs.core.next.call(null,seq16422__$3);
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic(G__16423,G__16424,G__16425,G__16426,seq16422__$4);
});

thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16448 = arguments.length;
var i__8302__auto___16449 = (0);
while(true){
if((i__8302__auto___16449 < len__8301__auto___16448)){
args__8308__auto__.push((arguments[i__8302__auto___16449]));

var G__16450 = (i__8302__auto___16449 + (1));
i__8302__auto___16449 = G__16450;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__16444){
var vec__16445 = p__16444;
var attribs = cljs.core.nth.call(null,vec__16445,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.polygon.cljs$lang$applyTo = (function (seq16442){
var G__16443 = cljs.core.first.call(null,seq16442);
var seq16442__$1 = cljs.core.next.call(null,seq16442);
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic(G__16443,seq16442__$1);
});

thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16457 = arguments.length;
var i__8302__auto___16458 = (0);
while(true){
if((i__8302__auto___16458 < len__8301__auto___16457)){
args__8308__auto__.push((arguments[i__8302__auto___16458]));

var G__16459 = (i__8302__auto___16458 + (1));
i__8302__auto___16458 = G__16459;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__16453){
var vec__16454 = p__16453;
var attribs = cljs.core.nth.call(null,vec__16454,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",[cljs.core.str("#"),cljs.core.str(id)].join('')], null))], null);
});

thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.instance.cljs$lang$applyTo = (function (seq16451){
var G__16452 = cljs.core.first.call(null,seq16451);
var seq16451__$1 = cljs.core.next.call(null,seq16451);
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic(G__16452,seq16451__$1);
});

thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16472 = arguments.length;
var i__8302__auto___16473 = (0);
while(true){
if((i__8302__auto___16473 < len__8301__auto___16472)){
args__8308__auto__.push((arguments[i__8302__auto___16473]));

var G__16474 = (i__8302__auto___16473 + (1));
i__8302__auto___16473 = G__16474;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((3) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((3)),(0),null)):null);
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8309__auto__);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic = (function (len,theta,solid_QMARK_,p__16464){
var vec__16465 = p__16464;
var opts = cljs.core.nth.call(null,vec__16465,(0),null);
return ((function (vec__16465,opts){
return (function() { 
var G__16475__delegate = function (p,q,idx,p__16468){
var vec__16469 = p__16468;
var attribs = cljs.core.nth.call(null,vec__16469,(0),null);
var q__$1 = thi.ng.geom.core.vector.vec2.call(null,q);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p),len);
var x__8014__auto__ = (cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,(- theta))),q__$1,thi.ng.geom.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,theta))], null),cljs.core.merge.call(null,attribs,opts));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
};
var G__16475 = function (p,q,idx,var_args){
var p__16468 = null;
if (arguments.length > 3) {
var G__16476__i = 0, G__16476__a = new Array(arguments.length -  3);
while (G__16476__i < G__16476__a.length) {G__16476__a[G__16476__i] = arguments[G__16476__i + 3]; ++G__16476__i;}
  p__16468 = new cljs.core.IndexedSeq(G__16476__a,0);
} 
return G__16475__delegate.call(this,p,q,idx,p__16468);};
G__16475.cljs$lang$maxFixedArity = 3;
G__16475.cljs$lang$applyTo = (function (arglist__16477){
var p = cljs.core.first(arglist__16477);
arglist__16477 = cljs.core.next(arglist__16477);
var q = cljs.core.first(arglist__16477);
arglist__16477 = cljs.core.next(arglist__16477);
var idx = cljs.core.first(arglist__16477);
var p__16468 = cljs.core.rest(arglist__16477);
return G__16475__delegate(p,q,idx,p__16468);
});
G__16475.cljs$core$IFn$_invoke$arity$variadic = G__16475__delegate;
return G__16475;
})()
;
;})(vec__16465,opts))
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = (3);

thi.ng.geom.svg.core.arrow_head.cljs$lang$applyTo = (function (seq16460){
var G__16461 = cljs.core.first.call(null,seq16460);
var seq16460__$1 = cljs.core.next.call(null,seq16460);
var G__16462 = cljs.core.first.call(null,seq16460__$1);
var seq16460__$2 = cljs.core.next.call(null,seq16460__$1);
var G__16463 = cljs.core.first.call(null,seq16460__$2);
var seq16460__$3 = cljs.core.next.call(null,seq16460__$2);
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic(G__16461,G__16462,G__16463,seq16460__$3);
});

thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16490 = arguments.length;
var i__8302__auto___16491 = (0);
while(true){
if((i__8302__auto___16491 < len__8301__auto___16490)){
args__8308__auto__.push((arguments[i__8302__auto___16491]));

var G__16492 = (i__8302__auto___16491 + (1));
i__8302__auto___16491 = G__16492;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__16480){
var vec__16481 = p__16480;
var map__16484 = cljs.core.nth.call(null,vec__16481,(0),null);
var map__16484__$1 = ((((!((map__16484 == null)))?((((map__16484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16484):map__16484);
var opts = map__16484__$1;
var __rotate_QMARK_ = cljs.core.get.call(null,map__16484__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.call(null,map__16484__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update_in.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),new cljs.core.Keyword(null,"__offset","__offset",-9560190)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),((function (vec__16481,map__16484,map__16484__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__16478_SHARP_){
var or__7085__auto__ = p1__16478_SHARP_;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return "middle";
}
});})(vec__16481,map__16484,map__16484__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,vec__16481,map__16484,map__16484__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__16493__delegate = function (p,q,idx,p__16486){
var vec__16487 = p__16486;
var attribs = cljs.core.nth.call(null,vec__16487,(0),null);
var temp__6751__auto__ = cljs.core.get_in.call(null,attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__label","__label",758805562),idx], null));
if(cljs.core.truth_(temp__6751__auto__)){
var label = temp__6751__auto__;
var p__$1 = thi.ng.geom.core.vector.vec2.call(null,p);
var m = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.mix.call(null,p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str(thi.ng.math.core.degrees.call(null,thi.ng.geom.core.heading.call(null,thi.ng.geom.core.normal.call(null,thi.ng.geom.core._.call(null,p__$1,q))))),cljs.core.str(" "),cljs.core.str(m.call(null,(0))),cljs.core.str(" "),cljs.core.str(m.call(null,(1))),cljs.core.str(")")].join('')):opts__$1);
var x__8014__auto__ = thi.ng.geom.svg.core.text.call(null,m,label,cljs.core.merge.call(null,cljs.core.dissoc.call(null,attribs,new cljs.core.Keyword(null,"__label","__label",758805562)),opts__$2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
} else {
return null;
}
};
var G__16493 = function (p,q,idx,var_args){
var p__16486 = null;
if (arguments.length > 3) {
var G__16494__i = 0, G__16494__a = new Array(arguments.length -  3);
while (G__16494__i < G__16494__a.length) {G__16494__a[G__16494__i] = arguments[G__16494__i + 3]; ++G__16494__i;}
  p__16486 = new cljs.core.IndexedSeq(G__16494__a,0);
} 
return G__16493__delegate.call(this,p,q,idx,p__16486);};
G__16493.cljs$lang$maxFixedArity = 3;
G__16493.cljs$lang$applyTo = (function (arglist__16495){
var p = cljs.core.first(arglist__16495);
arglist__16495 = cljs.core.next(arglist__16495);
var q = cljs.core.first(arglist__16495);
arglist__16495 = cljs.core.next(arglist__16495);
var idx = cljs.core.first(arglist__16495);
var p__16486 = cljs.core.rest(arglist__16495);
return G__16493__delegate(p,q,idx,p__16486);
});
G__16493.cljs$core$IFn$_invoke$arity$variadic = G__16493__delegate;
return G__16493;
})()
;
;})(opts__$1,vec__16481,map__16484,map__16484__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.line_label.cljs$lang$applyTo = (function (seq16479){
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16479));
});

thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__8308__auto__ = [];
var len__8301__auto___16501 = arguments.length;
var i__8302__auto___16502 = (0);
while(true){
if((i__8302__auto___16502 < len__8301__auto___16501)){
args__8308__auto__.push((arguments[i__8302__auto___16502]));

var G__16503 = (i__8302__auto___16502 + (1));
i__8302__auto___16502 = G__16503;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__16504__delegate = function (p,q,idx,p__16497){
var vec__16498 = p__16497;
var attribs = cljs.core.nth.call(null,vec__16498,(0),null);
return cljs.core.reduce.call(null,((function (vec__16498,attribs){
return (function (acc,f){
return cljs.core.concat.call(null,acc,f.call(null,p,q,idx,attribs));
});})(vec__16498,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__16504 = function (p,q,idx,var_args){
var p__16497 = null;
if (arguments.length > 3) {
var G__16505__i = 0, G__16505__a = new Array(arguments.length -  3);
while (G__16505__i < G__16505__a.length) {G__16505__a[G__16505__i] = arguments[G__16505__i + 3]; ++G__16505__i;}
  p__16497 = new cljs.core.IndexedSeq(G__16505__a,0);
} 
return G__16504__delegate.call(this,p,q,idx,p__16497);};
G__16504.cljs$lang$maxFixedArity = 3;
G__16504.cljs$lang$applyTo = (function (arglist__16506){
var p = cljs.core.first(arglist__16506);
arglist__16506 = cljs.core.next(arglist__16506);
var q = cljs.core.first(arglist__16506);
arglist__16506 = cljs.core.next(arglist__16506);
var idx = cljs.core.first(arglist__16506);
var p__16497 = cljs.core.rest(arglist__16506);
return G__16504__delegate(p,q,idx,p__16497);
});
G__16504.cljs$core$IFn$_invoke$arity$variadic = G__16504__delegate;
return G__16504;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq16496){
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16496));
});


//# sourceMappingURL=core.js.map