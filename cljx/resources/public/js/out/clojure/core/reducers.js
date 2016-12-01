// Compiled by ClojureScript 1.9.293 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var args8573 = [];
var len__8301__auto___8576 = arguments.length;
var i__8302__auto___8577 = (0);
while(true){
if((i__8302__auto___8577 < len__8301__auto___8576)){
args8573.push((arguments[i__8302__auto___8577]));

var G__8578 = (i__8302__auto___8577 + (1));
i__8302__auto___8577 = G__8578;
continue;
} else {
}
break;
}

var G__8575 = args8573.length;
switch (G__8575) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8573.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.call(null,f,f.call(null),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return cljs.core.array_reduce.call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
clojure.core.reducers.CollFold = function(){};

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((!((coll == null))) && (!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__7798__auto__ = (((coll == null))?null:coll);
var m__7799__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return m__7799__auto__.call(null,coll,n,combinef,reducef);
} else {
var m__7799__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__7799__auto____$1 == null))){
return m__7799__auto____$1.call(null,coll,n,combinef,reducef);
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var args8580 = [];
var len__8301__auto___8583 = arguments.length;
var i__8302__auto___8584 = (0);
while(true){
if((i__8302__auto___8584 < len__8301__auto___8583)){
args8580.push((arguments[i__8302__auto___8584]));

var G__8585 = (i__8302__auto___8584 + (1));
i__8302__auto___8584 = G__8585;
continue;
} else {
}
break;
}

var G__8582 = args8580.length;
switch (G__8582) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8580.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.call(null,reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.call(null,(512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;

/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers8590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers8590 = (function (coll,xf,meta8591){
this.coll = coll;
this.xf = xf;
this.meta8591 = meta8591;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers8590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8592,meta8591__$1){
var self__ = this;
var _8592__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers8590(self__.coll,self__.xf,meta8591__$1));
});

clojure.core.reducers.t_clojure$core$reducers8590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8592){
var self__ = this;
var _8592__$1 = this;
return self__.meta8591;
});

clojure.core.reducers.t_clojure$core$reducers8590.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers8590.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers8590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta8591","meta8591",-159457339,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers8590.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers8590.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers8590";

clojure.core.reducers.t_clojure$core$reducers8590.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write.call(null,writer__7738__auto__,"clojure.core.reducers/t_clojure$core$reducers8590");
});

clojure.core.reducers.__GT_t_clojure$core$reducers8590 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers8590(coll__$1,xf__$1,meta8591){
return (new clojure.core.reducers.t_clojure$core$reducers8590(coll__$1,xf__$1,meta8591));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers8590(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers8596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers8596 = (function (coll,xf,meta8597){
this.coll = coll;
this.xf = xf;
this.meta8597 = meta8597;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers8596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8598,meta8597__$1){
var self__ = this;
var _8598__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers8596(self__.coll,self__.xf,meta8597__$1));
});

clojure.core.reducers.t_clojure$core$reducers8596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8598){
var self__ = this;
var _8598__$1 = this;
return self__.meta8597;
});

clojure.core.reducers.t_clojure$core$reducers8596.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers8596.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers8596.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.t_clojure$core$reducers8596.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t_clojure$core$reducers8596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta8597","meta8597",-875837965,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers8596.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers8596.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers8596";

clojure.core.reducers.t_clojure$core$reducers8596.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write.call(null,writer__7738__auto__,"clojure.core.reducers/t_clojure$core$reducers8596");
});

clojure.core.reducers.__GT_t_clojure$core$reducers8596 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers8596(coll__$1,xf__$1,meta8597){
return (new clojure.core.reducers.t_clojure$core$reducers8596(coll__$1,xf__$1,meta8597));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers8596(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var args8599 = [];
var len__8301__auto___8602 = arguments.length;
var i__8302__auto___8603 = (0);
while(true){
if((i__8302__auto___8603 < len__8301__auto___8602)){
args8599.push((arguments[i__8302__auto___8603]));

var G__8604 = (i__8302__auto___8603 + (1));
i__8302__auto___8603 = G__8604;
continue;
} else {
}
break;
}

var G__8601 = args8599.length;
switch (G__8601) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8599.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__7528__auto__){
return clojure.core.reducers.map.call(null,f,x__7528__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__8606 = null;
var G__8606__0 = (function (){
return f1.call(null);
});
var G__8606__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__8606__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__8606 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__8606__0.call(this);
case 2:
return G__8606__2.call(this,ret,k);
case 3:
return G__8606__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8606.cljs$core$IFn$_invoke$arity$0 = G__8606__0;
G__8606.cljs$core$IFn$_invoke$arity$2 = G__8606__2;
G__8606.cljs$core$IFn$_invoke$arity$3 = G__8606__3;
return G__8606;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;

/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var args8607 = [];
var len__8301__auto___8610 = arguments.length;
var i__8302__auto___8611 = (0);
while(true){
if((i__8302__auto___8611 < len__8301__auto___8610)){
args8607.push((arguments[i__8302__auto___8611]));

var G__8612 = (i__8302__auto___8611 + (1));
i__8302__auto___8611 = G__8612;
continue;
} else {
}
break;
}

var G__8609 = args8607.length;
switch (G__8609) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8607.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__7528__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__7528__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__8614 = null;
var G__8614__0 = (function (){
return f1.call(null);
});
var G__8614__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__8614__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__8614 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__8614__0.call(this);
case 2:
return G__8614__2.call(this,ret,k);
case 3:
return G__8614__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8614.cljs$core$IFn$_invoke$arity$0 = G__8614__0;
G__8614.cljs$core$IFn$_invoke$arity$2 = G__8614__2;
G__8614.cljs$core$IFn$_invoke$arity$3 = G__8614__3;
return G__8614;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;

/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var args8615 = [];
var len__8301__auto___8618 = arguments.length;
var i__8302__auto___8619 = (0);
while(true){
if((i__8302__auto___8619 < len__8301__auto___8618)){
args8615.push((arguments[i__8302__auto___8619]));

var G__8620 = (i__8302__auto___8619 + (1));
i__8302__auto___8619 = G__8620;
continue;
} else {
}
break;
}

var G__8617 = args8615.length;
switch (G__8617) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8615.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__7528__auto__){
return clojure.core.reducers.filter.call(null,pred,x__7528__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__8622 = null;
var G__8622__0 = (function (){
return f1.call(null);
});
var G__8622__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__8622__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__8622 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__8622__0.call(this);
case 2:
return G__8622__2.call(this,ret,k);
case 3:
return G__8622__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8622.cljs$core$IFn$_invoke$arity$0 = G__8622__0;
G__8622.cljs$core$IFn$_invoke$arity$2 = G__8622__2;
G__8622.cljs$core$IFn$_invoke$arity$3 = G__8622__3;
return G__8622;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;

/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var args8623 = [];
var len__8301__auto___8626 = arguments.length;
var i__8302__auto___8627 = (0);
while(true){
if((i__8302__auto___8627 < len__8301__auto___8626)){
args8623.push((arguments[i__8302__auto___8627]));

var G__8628 = (i__8302__auto___8627 + (1));
i__8302__auto___8627 = G__8628;
continue;
} else {
}
break;
}

var G__8625 = args8623.length;
switch (G__8625) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8623.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__7528__auto__){
return clojure.core.reducers.flatten.call(null,x__7528__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__8630 = null;
var G__8630__0 = (function (){
return f1.call(null);
});
var G__8630__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__8630 = function(ret,v){
switch(arguments.length){
case 0:
return G__8630__0.call(this);
case 2:
return G__8630__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8630.cljs$core$IFn$_invoke$arity$0 = G__8630__0;
G__8630.cljs$core$IFn$_invoke$arity$2 = G__8630__2;
return G__8630;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;

/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var args8631 = [];
var len__8301__auto___8634 = arguments.length;
var i__8302__auto___8635 = (0);
while(true){
if((i__8302__auto___8635 < len__8301__auto___8634)){
args8631.push((arguments[i__8302__auto___8635]));

var G__8636 = (i__8302__auto___8635 + (1));
i__8302__auto___8635 = G__8636;
continue;
} else {
}
break;
}

var G__8633 = args8631.length;
switch (G__8633) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8631.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__7528__auto__){
return clojure.core.reducers.remove.call(null,pred,x__7528__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;

/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var args8638 = [];
var len__8301__auto___8641 = arguments.length;
var i__8302__auto___8642 = (0);
while(true){
if((i__8302__auto___8642 < len__8301__auto___8641)){
args8638.push((arguments[i__8302__auto___8642]));

var G__8643 = (i__8302__auto___8642 + (1));
i__8302__auto___8642 = G__8643;
continue;
} else {
}
break;
}

var G__8640 = args8638.length;
switch (G__8640) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8638.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__7528__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__7528__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__8645 = null;
var G__8645__0 = (function (){
return f1.call(null);
});
var G__8645__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__8645__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__8645 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__8645__0.call(this);
case 2:
return G__8645__2.call(this,ret,k);
case 3:
return G__8645__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8645.cljs$core$IFn$_invoke$arity$0 = G__8645__0;
G__8645.cljs$core$IFn$_invoke$arity$2 = G__8645__2;
G__8645.cljs$core$IFn$_invoke$arity$3 = G__8645__3;
return G__8645;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;

/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var args8646 = [];
var len__8301__auto___8649 = arguments.length;
var i__8302__auto___8650 = (0);
while(true){
if((i__8302__auto___8650 < len__8301__auto___8649)){
args8646.push((arguments[i__8302__auto___8650]));

var G__8651 = (i__8302__auto___8650 + (1));
i__8302__auto___8650 = G__8651;
continue;
} else {
}
break;
}

var G__8648 = args8646.length;
switch (G__8648) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8646.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__7528__auto__){
return clojure.core.reducers.take.call(null,n,x__7528__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__8653 = null;
var G__8653__0 = (function (){
return f1.call(null);
});
var G__8653__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__8653__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__8653 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__8653__0.call(this);
case 2:
return G__8653__2.call(this,ret,k);
case 3:
return G__8653__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8653.cljs$core$IFn$_invoke$arity$0 = G__8653__0;
G__8653.cljs$core$IFn$_invoke$arity$2 = G__8653__2;
G__8653.cljs$core$IFn$_invoke$arity$3 = G__8653__3;
return G__8653;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;

/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var args8654 = [];
var len__8301__auto___8657 = arguments.length;
var i__8302__auto___8658 = (0);
while(true){
if((i__8302__auto___8658 < len__8301__auto___8657)){
args8654.push((arguments[i__8302__auto___8658]));

var G__8659 = (i__8302__auto___8658 + (1));
i__8302__auto___8658 = G__8659;
continue;
} else {
}
break;
}

var G__8656 = args8654.length;
switch (G__8656) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8654.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__7528__auto__){
return clojure.core.reducers.drop.call(null,n,x__7528__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__8661 = null;
var G__8661__0 = (function (){
return f1.call(null);
});
var G__8661__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__8661__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__8661 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__8661__0.call(this);
case 2:
return G__8661__2.call(this,ret,k);
case 3:
return G__8661__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8661.cljs$core$IFn$_invoke$arity$0 = G__8661__0;
G__8661.cljs$core$IFn$_invoke$arity$2 = G__8661__2;
G__8661.cljs$core$IFn$_invoke$arity$3 = G__8661__3;
return G__8661;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
});

clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write.call(null,writer__7738__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var args8662 = [];
var len__8301__auto___8665 = arguments.length;
var i__8302__auto___8666 = (0);
while(true){
if((i__8302__auto___8666 < len__8301__auto___8665)){
args8662.push((arguments[i__8302__auto___8666]));

var G__8667 = (i__8302__auto___8666 + (1));
i__8302__auto___8666 = G__8667;
continue;
} else {
}
break;
}

var G__8664 = args8662.length;
switch (G__8664) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8662.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__8669 = null;
var G__8669__0 = (function (){
return ctor.call(null);
});
var G__8669__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__8669 = function(left,right){
switch(arguments.length){
case 0:
return G__8669__0.call(this);
case 2:
return G__8669__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8669.cljs$core$IFn$_invoke$arity$0 = G__8669__0;
G__8669.cljs$core$IFn$_invoke$arity$2 = G__8669__2;
return G__8669;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;

/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__8671 = acc;
G__8671.push(x);

return G__8671;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure.core.reducers.foldvec.call(null,child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke.call(null,((function (split,v1,v2,fc){
return (function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
});})(split,v1,v2,fc))
);

}
}
});
(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return combinef.call(null);
}));

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
});

//# sourceMappingURL=reducers.js.map