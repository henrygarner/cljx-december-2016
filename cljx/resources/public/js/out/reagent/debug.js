// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8466__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8467__i = 0, G__8467__a = new Array(arguments.length -  0);
while (G__8467__i < G__8467__a.length) {G__8467__a[G__8467__i] = arguments[G__8467__i + 0]; ++G__8467__i;}
  args = new cljs.core.IndexedSeq(G__8467__a,0);
} 
return G__8466__delegate.call(this,args);};
G__8466.cljs$lang$maxFixedArity = 0;
G__8466.cljs$lang$applyTo = (function (arglist__8468){
var args = cljs.core.seq(arglist__8468);
return G__8466__delegate(args);
});
G__8466.cljs$core$IFn$_invoke$arity$variadic = G__8466__delegate;
return G__8466;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8469__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8470__i = 0, G__8470__a = new Array(arguments.length -  0);
while (G__8470__i < G__8470__a.length) {G__8470__a[G__8470__i] = arguments[G__8470__i + 0]; ++G__8470__i;}
  args = new cljs.core.IndexedSeq(G__8470__a,0);
} 
return G__8469__delegate.call(this,args);};
G__8469.cljs$lang$maxFixedArity = 0;
G__8469.cljs$lang$applyTo = (function (arglist__8471){
var args = cljs.core.seq(arglist__8471);
return G__8469__delegate(args);
});
G__8469.cljs$core$IFn$_invoke$arity$variadic = G__8469__delegate;
return G__8469;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map