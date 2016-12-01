// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7085__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8934 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8934){
return (function (){
var _STAR_always_update_STAR_8935 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8935;
}});})(_STAR_always_update_STAR_8934))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8934;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8936 = [];
var len__8301__auto___8939 = arguments.length;
var i__8302__auto___8940 = (0);
while(true){
if((i__8302__auto___8940 < len__8301__auto___8939)){
args8936.push((arguments[i__8302__auto___8940]));

var G__8941 = (i__8302__auto___8940 + (1));
i__8302__auto___8940 = G__8941;
continue;
} else {
}
break;
}

var G__8938 = args8936.length;
switch (G__8938) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8936.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__8947_8951 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8948_8952 = null;
var count__8949_8953 = (0);
var i__8950_8954 = (0);
while(true){
if((i__8950_8954 < count__8949_8953)){
var v_8955 = cljs.core._nth.call(null,chunk__8948_8952,i__8950_8954);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8955);

var G__8956 = seq__8947_8951;
var G__8957 = chunk__8948_8952;
var G__8958 = count__8949_8953;
var G__8959 = (i__8950_8954 + (1));
seq__8947_8951 = G__8956;
chunk__8948_8952 = G__8957;
count__8949_8953 = G__8958;
i__8950_8954 = G__8959;
continue;
} else {
var temp__6753__auto___8960 = cljs.core.seq.call(null,seq__8947_8951);
if(temp__6753__auto___8960){
var seq__8947_8961__$1 = temp__6753__auto___8960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8947_8961__$1)){
var c__7991__auto___8962 = cljs.core.chunk_first.call(null,seq__8947_8961__$1);
var G__8963 = cljs.core.chunk_rest.call(null,seq__8947_8961__$1);
var G__8964 = c__7991__auto___8962;
var G__8965 = cljs.core.count.call(null,c__7991__auto___8962);
var G__8966 = (0);
seq__8947_8951 = G__8963;
chunk__8948_8952 = G__8964;
count__8949_8953 = G__8965;
i__8950_8954 = G__8966;
continue;
} else {
var v_8967 = cljs.core.first.call(null,seq__8947_8961__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8967);

var G__8968 = cljs.core.next.call(null,seq__8947_8961__$1);
var G__8969 = null;
var G__8970 = (0);
var G__8971 = (0);
seq__8947_8951 = G__8968;
chunk__8948_8952 = G__8969;
count__8949_8953 = G__8970;
i__8950_8954 = G__8971;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map