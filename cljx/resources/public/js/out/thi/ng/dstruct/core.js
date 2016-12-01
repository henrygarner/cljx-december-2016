// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.dstruct.core');
goog.require('cljs.core');
thi.ng.dstruct.core.index = (function thi$ng$dstruct$core$index(i,t){
var temp__6751__auto__ = cljs.core.get.call(null,i,t);
if(cljs.core.truth_(temp__6751__auto__)){
var tt = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,t),t], null);
}
});
thi.ng.dstruct.core.index_BANG_ = (function thi$ng$dstruct$core$index_BANG_(i,t){
var temp__6751__auto__ = cljs.core.get.call(null,i,t);
if(cljs.core.truth_(temp__6751__auto__)){
var tt = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,i,t),t], null);
}
});
thi.ng.dstruct.core.index_kv = (function thi$ng$dstruct$core$index_kv(m,k,v){
var temp__6751__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__6751__auto__)){
var vec__10978 = temp__6751__auto__;
var k__$1 = cljs.core.nth.call(null,vec__10978,(0),null);
var vv = cljs.core.nth.call(null,vec__10978,(1),null);
return cljs.core.assoc.call(null,m,k__$1,cljs.core.conj.call(null,vv,v));
} else {
return cljs.core.assoc.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.dstruct.core.index_kv_BANG_ = (function thi$ng$dstruct$core$index_kv_BANG_(m,k,v){
var temp__6751__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__6751__auto__)){
var vv = temp__6751__auto__;
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.conj.call(null,vv,v));
} else {
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.dstruct.core.value_set = (function thi$ng$dstruct$core$value_set(var_args){
var args10983 = [];
var len__8301__auto___10986 = arguments.length;
var i__8302__auto___10987 = (0);
while(true){
if((i__8302__auto___10987 < len__8301__auto___10986)){
args10983.push((arguments[i__8302__auto___10987]));

var G__10988 = (i__8302__auto___10987 + (1));
i__8302__auto___10987 = G__10988;
continue;
} else {
}
break;
}

var G__10985 = args10983.length;
switch (G__10985) {
case 2:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10983.length)].join('')));

}
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2 = (function (idx,v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.get.call(null,idx,v));
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3 = (function (f,idx,v){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__10981_SHARP_,p2__10982_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__10981_SHARP_,f.call(null,p2__10982_SHARP_));
}),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.get.call(null,idx,v)));
});

thi.ng.dstruct.core.value_set.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.dstruct.core.vec_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.dstruct.core.set_conj2_STAR_ = (function thi$ng$dstruct$core$set_conj2_STAR_(p1__10990_SHARP_,p2__10991_SHARP_){
if((p1__10990_SHARP_ == null)){
return p2__10991_SHARP_;
} else {
if(cljs.core.set_QMARK_.call(null,p1__10990_SHARP_)){
return cljs.core.conj.call(null,p1__10990_SHARP_,p2__10991_SHARP_);
} else {
return cljs.core.PersistentHashSet.fromArray([p2__10991_SHARP_,p1__10990_SHARP_], true);
}
}
});
thi.ng.dstruct.core.vec_conj2_STAR_ = (function thi$ng$dstruct$core$vec_conj2_STAR_(p1__10992_SHARP_,p2__10993_SHARP_){
if((p1__10992_SHARP_ == null)){
return p2__10993_SHARP_;
} else {
if(cljs.core.vector_QMARK_.call(null,p1__10992_SHARP_)){
return cljs.core.conj.call(null,p1__10992_SHARP_,p2__10993_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10992_SHARP_,p2__10993_SHARP_], null);
}
}
});
thi.ng.dstruct.core.collect_set = (function thi$ng$dstruct$core$collect_set(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f,coll));
});
thi.ng.dstruct.core.collect_indexed = (function thi$ng$dstruct$core$collect_indexed(f,f2,coll){
var keys = thi.ng.dstruct.core.collect_set.call(null,f,coll);
return cljs.core.zipmap.call(null,keys,((cljs.core._EQ_.call(null,f2,cljs.core.identity))?keys:cljs.core.map.call(null,f2,keys)));
});
thi.ng.dstruct.core.interval_set = (function thi$ng$dstruct$core$interval_set(var_args){
var args__8308__auto__ = [];
var len__8301__auto___10995 = arguments.length;
var i__8302__auto___10996 = (0);
while(true){
if((i__8302__auto___10996 < len__8301__auto___10995)){
args__8308__auto__.push((arguments[i__8302__auto___10996]));

var G__10997 = (i__8302__auto___10996 + (1));
i__8302__auto___10996 = G__10997;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.mapcat.call(null,(function (v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.range.call(null,v.call(null,(0)),(v.call(null,(1)) + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),ivals));
});

thi.ng.dstruct.core.interval_set.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.interval_set.cljs$lang$applyTo = (function (seq10994){
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10994));
});

thi.ng.dstruct.core.check_intervals = (function thi$ng$dstruct$core$check_intervals(var_args){
var args__8308__auto__ = [];
var len__8301__auto___11010 = arguments.length;
var i__8302__auto___11011 = (0);
while(true){
if((i__8302__auto___11011 < len__8301__auto___11010)){
args__8308__auto__.push((arguments[i__8302__auto___11011]));

var G__11012 = (i__8302__auto___11011 + (1));
i__8302__auto___11011 = G__11012;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
var vec__10999 = cljs.core.reduce.call(null,(function (p__11002,v){
var vec__11003 = p__11002;
var i = cljs.core.nth.call(null,vec__11003,(0),null);
var c = cljs.core.nth.call(null,vec__11003,(1),null);
if(cljs.core.sequential_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,v),c], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.call(null,c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);
var ivals__$1 = cljs.core.nth.call(null,vec__10999,(0),null);
var const$ = cljs.core.nth.call(null,vec__10999,(1),null);
return ((function (vec__10999,ivals__$1,const$){
return (function (x){
if(cljs.core.truth_(const$.call(null,x))){
return x;
} else {
return cljs.core.some.call(null,((function (vec__10999,ivals__$1,const$){
return (function (p__11006){
var vec__11007 = p__11006;
var a = cljs.core.nth.call(null,vec__11007,(0),null);
var b = cljs.core.nth.call(null,vec__11007,(1),null);
return ((a <= x)) && ((x <= b));
});})(vec__10999,ivals__$1,const$))
,ivals__$1);
}
});
;})(vec__10999,ivals__$1,const$))
});

thi.ng.dstruct.core.check_intervals.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.check_intervals.cljs$lang$applyTo = (function (seq10998){
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10998));
});

/**
 * All the ways to take one item from each sequence
 *   (taken from clojure.contrib.combinatorics)
 */
thi.ng.dstruct.core.cartesian_product = (function thi$ng$dstruct$core$cartesian_product(var_args){
var args__8308__auto__ = [];
var len__8301__auto___11014 = arguments.length;
var i__8302__auto___11015 = (0);
while(true){
if((i__8302__auto___11015 < len__8301__auto___11014)){
args__8308__auto__.push((arguments[i__8302__auto___11015]));

var G__11016 = (i__8302__auto___11015 + (1));
i__8302__auto___11015 = G__11016;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function thi$ng$dstruct$core$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if((i < (0))){
return null;
} else {
var temp__6751__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__6751__auto__){
var rst = temp__6751__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__11017 = (i - (1));
var G__11018 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__11017;
v_seqs__$2 = G__11018;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return thi$ng$dstruct$core$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

thi.ng.dstruct.core.cartesian_product.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.cartesian_product.cljs$lang$applyTo = (function (seq11013){
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11013));
});

/**
 * Applies `f` to root coll and every of its (nested) elements. Returns
 *   a vector of items for which `f` returned a truthy value.
 */
thi.ng.dstruct.core.filter_tree = (function thi$ng$dstruct$core$filter_tree(f,root){
var walk = (function thi$ng$dstruct$core$filter_tree_$_walk(acc,node){
if(cljs.core.truth_(f.call(null,node))){
return cljs.core.conj.call(null,acc,node);
} else {
if(cljs.core.coll_QMARK_.call(null,node)){
return cljs.core.reduce.call(null,thi$ng$dstruct$core$filter_tree_$_walk,acc,node);
} else {
return acc;

}
}
});
return cljs.core.reduce.call(null,walk,cljs.core.PersistentVector.EMPTY,root);
});
thi.ng.dstruct.core.bisect = (function thi$ng$dstruct$core$bisect(var_args){
var args11019 = [];
var len__8301__auto___11032 = arguments.length;
var i__8302__auto___11033 = (0);
while(true){
if((i__8302__auto___11033 < len__8301__auto___11032)){
args11019.push((arguments[i__8302__auto___11033]));

var G__11034 = (i__8302__auto___11033 + (1));
i__8302__auto___11033 = G__11034;
continue;
} else {
}
break;
}

var G__11021 = args11019.length;
switch (G__11021) {
case 2:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11019.length)].join('')));

}
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var vec__11022 = cljs.core.reduce.call(null,(function (p__11025,v){
var vec__11026 = p__11025;
var m = cljs.core.nth.call(null,vec__11026,(0),null);
var n = cljs.core.nth.call(null,vec__11026,(1),null);
if(cljs.core.truth_(f.call(null,v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,m,v),n], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.call(null,n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null),coll);
var m = cljs.core.nth.call(null,vec__11022,(0),null);
var n = cljs.core.nth.call(null,vec__11022,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,m),cljs.core.persistent_BANG_.call(null,n)], null);
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,coll){
var vec__11029 = thi.ng.dstruct.core.bisect.call(null,f,coll);
var m = cljs.core.nth.call(null,vec__11029,(0),null);
var n = cljs.core.nth.call(null,vec__11029,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f2.call(null,m),f2.call(null,n)], null);
});

thi.ng.dstruct.core.bisect.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.neighbors = (function thi$ng$dstruct$core$neighbors(x,coll){
var n = (cljs.core.count.call(null,coll) - (1));
var i = n;
while(true){
if((i >= (0))){
if(cljs.core._EQ_.call(null,x,coll.call(null,i))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll.call(null,(((i > (0)))?(i - (1)):n)),coll.call(null,(((i < n))?(i + (1)):(0)))], null);
} else {
var G__11036 = (i - (1));
i = G__11036;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazyseq of `n`-element vectors, each one containing
 *   a successive elements of the original collection.
 * 
 *    (successive-nth 3 [1 2 3 4])
 *    => ([1 2 3] [2 3 4] [3 4 5])
 */
thi.ng.dstruct.core.successive_nth = (function thi$ng$dstruct$core$successive_nth(var_args){
var args11037 = [];
var len__8301__auto___11040 = arguments.length;
var i__8302__auto___11041 = (0);
while(true){
if((i__8302__auto___11041 < len__8301__auto___11040)){
args11037.push((arguments[i__8302__auto___11041]));

var G__11042 = (i__8302__auto___11041 + (1));
i__8302__auto___11041 = G__11042;
continue;
} else {
}
break;
}

var G__11039 = args11037.length;
switch (G__11039) {
case 2:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11037.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,cljs.core.vec.call(null,s),thi.ng.dstruct.core.successive_nth.call(null,n,cljs.core.rest.call(null,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,cljs.core.vec.call(null,s),thi.ng.dstruct.core.successive_nth.call(null,n,step,cljs.core.drop.call(null,step,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$lang$maxFixedArity = 3;

/**
 * Returns a lazyseq of nested 2-element vectors, each one containing
 *   a vector of `n` successive elements of the original collection and
 *   an sequence index.
 * 
 *    (successive-nth-indexed 2 [10 20 30 40])
 *    => ([[10 20] 0] [[20 30] 1] [[30 40] 2])
 */
thi.ng.dstruct.core.successive_nth_indexed = (function thi$ng$dstruct$core$successive_nth_indexed(var_args){
var args11044 = [];
var len__8301__auto___11047 = arguments.length;
var i__8302__auto___11048 = (0);
while(true){
if((i__8302__auto___11048 < len__8301__auto___11047)){
args11044.push((arguments[i__8302__auto___11048]));

var G__11049 = (i__8302__auto___11048 + (1));
i__8302__auto___11048 = G__11049;
continue;
} else {
}
break;
}

var G__11046 = args11044.length;
switch (G__11046) {
case 2:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11044.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return thi.ng.dstruct.core.successive_nth_indexed.call(null,n,(0),coll);
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = (function (n,idx,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,s),idx], null),thi.ng.dstruct.core.successive_nth_indexed.call(null,n,(idx + (1)),cljs.core.rest.call(null,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$lang$maxFixedArity = 3;

/**
 * Applies `f` with `args` to all given `keys` in `type`.
 */
thi.ng.dstruct.core.apply_to_keys = (function thi$ng$dstruct$core$apply_to_keys(var_args){
var args__8308__auto__ = [];
var len__8301__auto___11055 = arguments.length;
var i__8302__auto___11056 = (0);
while(true){
if((i__8302__auto___11056 < len__8301__auto___11055)){
args__8308__auto__.push((arguments[i__8302__auto___11056]));

var G__11057 = (i__8302__auto___11056 + (1));
i__8302__auto___11056 = G__11057;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((3) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((3)),(0),null)):null);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8309__auto__);
});

thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = (function (type,keys,f,args){
return cljs.core.reduce.call(null,(function (acc,k){
return cljs.core.assoc.call(null,acc,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,type,k),args));
}),type,keys);
});

thi.ng.dstruct.core.apply_to_keys.cljs$lang$maxFixedArity = (3);

thi.ng.dstruct.core.apply_to_keys.cljs$lang$applyTo = (function (seq11051){
var G__11052 = cljs.core.first.call(null,seq11051);
var seq11051__$1 = cljs.core.next.call(null,seq11051);
var G__11053 = cljs.core.first.call(null,seq11051__$1);
var seq11051__$2 = cljs.core.next.call(null,seq11051__$1);
var G__11054 = cljs.core.first.call(null,seq11051__$2);
var seq11051__$3 = cljs.core.next.call(null,seq11051__$2);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic(G__11052,G__11053,G__11054,seq11051__$3);
});

thi.ng.dstruct.core.reduce_pairs = (function thi$ng$dstruct$core$reduce_pairs(var_args){
var args11058 = [];
var len__8301__auto___11065 = arguments.length;
var i__8302__auto___11066 = (0);
while(true){
if((i__8302__auto___11066 < len__8301__auto___11065)){
args11058.push((arguments[i__8302__auto___11066]));

var G__11067 = (i__8302__auto___11066 + (1));
i__8302__auto___11066 = G__11067;
continue;
} else {
}
break;
}

var G__11060 = args11058.length;
switch (G__11060) {
case 3:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11058.length)].join('')));

}
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,coll){
return thi.ng.dstruct.core.reduce_pairs.call(null,f1,f2,null,coll);
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4 = (function (f1,f2,acc,coll){
if((cljs.core.count.call(null,coll) > (1))){
var pairs = cljs.core.map.call(null,(function (p__11061){
var vec__11062 = p__11061;
var a = cljs.core.nth.call(null,vec__11062,(0),null);
var b = cljs.core.nth.call(null,vec__11062,(1),null);
return f2.call(null,a,b);
}),thi.ng.dstruct.core.successive_nth.call(null,(2),coll));
if(cljs.core.truth_(acc)){
return cljs.core.reduce.call(null,f1,acc,pairs);
} else {
return cljs.core.reduce.call(null,f1,pairs);
}
} else {
return null;
}
});

thi.ng.dstruct.core.reduce_pairs.cljs$lang$maxFixedArity = 4;

thi.ng.dstruct.core.wrap_seq = (function thi$ng$dstruct$core$wrap_seq(s,head,tail){
return cljs.core.concat.call(null,((cljs.core.sequential_QMARK_.call(null,head))?cljs.core.concat.call(null,head,s):cljs.core.cons.call(null,head,s)),((cljs.core.sequential_QMARK_.call(null,tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.dstruct.core.append_first = (function thi$ng$dstruct$core$append_first(xs){
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs)], null));
});
thi.ng.dstruct.core.rotate_left = (function thi$ng$dstruct$core$rotate_left(n,xs){
if(cljs.core.vector_QMARK_.call(null,xs)){
return cljs.core.into.call(null,cljs.core.subvec.call(null,xs,n),cljs.core.subvec.call(null,xs,(0),n));
} else {
return cljs.core.concat.call(null,cljs.core.drop.call(null,n,xs),cljs.core.take.call(null,n,xs));
}
});
thi.ng.dstruct.core.index_of = (function thi$ng$dstruct$core$index_of(coll,item){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,coll__$1))){
return i;
} else {
var G__11069 = (i + (1));
var G__11070 = cljs.core.next.call(null,coll__$1);
i = G__11069;
coll__$1 = G__11070;
continue;
}
} else {
return (-1);
}
break;
}
});
/**
 * Returns a new collection of all items after `item` in original `coll`.
 *   If `coll` is a vector, the new collection is created with `subvec`.
 *   Returns original coll if item isn't found.
 */
thi.ng.dstruct.core.all_after = (function thi$ng$dstruct$core$all_after(item,coll){
var idx = (thi.ng.dstruct.core.index_of.call(null,coll,item) + (1));
if((idx > (0))){
if(cljs.core.vector_QMARK_.call(null,coll)){
return cljs.core.subvec.call(null,coll,idx);
} else {
return cljs.core.drop.call(null,idx,coll);
}
} else {
return coll;
}
});
thi.ng.dstruct.core.iterate_while = (function thi$ng$dstruct$core$iterate_while(pred,f,x){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.cons.call(null,x,thi.ng.dstruct.core.iterate_while.call(null,pred,f,f.call(null,x)));
} else {
return null;
}
}),null,null));
});
thi.ng.dstruct.core.iterate_n = (function thi$ng$dstruct$core$iterate_n(n,f,x){
return cljs.core.last.call(null,cljs.core.take.call(null,n,cljs.core.iterate.call(null,f,x)));
});
thi.ng.dstruct.core.unwrap_string = (function thi$ng$dstruct$core$unwrap_string(s,n){
return cljs.core.subs.call(null,s,n,(cljs.core.count.call(null,s) - n));
});
thi.ng.dstruct.core.wrap = (function thi$ng$dstruct$core$wrap(a,b,s){
return [cljs.core.str(a),cljs.core.str(s),cljs.core.str(b)].join('');
});
thi.ng.dstruct.core.stringify_keys = (function thi$ng$dstruct$core$stringify_keys(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11075){
var vec__11076 = p__11075;
var k = cljs.core.nth.call(null,vec__11076,(0),null);
var v = cljs.core.nth.call(null,vec__11076,(1),null);
var e = vec__11076;
if((k instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else {
return e;
}
}),m));
});
/**
 * Takes a keyword or string and string/seq of items, returns map with
 *   items as keys and boolean values indicating if an item has been
 *   found in the string representation of the kw. If `kw` is nil, returns
 *   nil.
 * 
 *    (demunge-flags :cad "abcd")
 *    #_=> {:a true :b false :c true :d true}
 */
thi.ng.dstruct.core.demunge_flags = (function thi$ng$dstruct$core$demunge_flags(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name.call(null,kw);
return cljs.core.reduce.call(null,((function (flags){
return (function (acc,x){
var x__$1 = [cljs.core.str(x)].join('');
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,x__$1),((0) <= flags.indexOf(x__$1)));
});})(flags))
,cljs.core.PersistentArrayMap.EMPTY,xs);
} else {
return null;
}
});
/**
 * Like `demunge-flags` but returns lazyseq of booleans in same order as xs.
 * 
 *    (demunge-flags-seq :cad "abcd")
 *    #_=> [true false true true]
 */
thi.ng.dstruct.core.demunge_flags_seq = (function thi$ng$dstruct$core$demunge_flags_seq(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name.call(null,kw);
return cljs.core.map.call(null,((function (flags){
return (function (p1__11079_SHARP_){
return ((0) <= flags.indexOf([cljs.core.str(p1__11079_SHARP_)].join('')));
});})(flags))
,xs);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map