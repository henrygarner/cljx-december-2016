// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Creates a native Int8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_11268 = (0);
var coll_11269 = size_or_coll;
while(true){
if((i_11268 < len)){
(buf[i_11268] = cljs.core.first.call(null,coll_11269));

var G__11270 = (i_11268 + (1));
var G__11271 = cljs.core.next.call(null,coll_11269);
i_11268 = G__11270;
coll_11269 = G__11271;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_11272 = (0);
var coll_11273 = size_or_coll;
while(true){
if((i_11272 < len)){
(buf[i_11272] = cljs.core.first.call(null,coll_11273));

var G__11274 = (i_11272 + (1));
var G__11275 = cljs.core.next.call(null,coll_11273);
i_11272 = G__11274;
coll_11273 = G__11275;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_11276 = (0);
var coll_11277 = size_or_coll;
while(true){
if((i_11276 < len)){
(buf[i_11276] = cljs.core.first.call(null,coll_11277));

var G__11278 = (i_11276 + (1));
var G__11279 = cljs.core.next.call(null,coll_11277);
i_11276 = G__11278;
coll_11277 = G__11279;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Int16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_11280 = (0);
var coll_11281 = size_or_coll;
while(true){
if((i_11280 < len)){
(buf[i_11280] = cljs.core.first.call(null,coll_11281));

var G__11282 = (i_11280 + (1));
var G__11283 = cljs.core.next.call(null,coll_11281);
i_11280 = G__11282;
coll_11281 = G__11283;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_11284 = (0);
var coll_11285 = size_or_coll;
while(true){
if((i_11284 < len)){
(buf[i_11284] = cljs.core.first.call(null,coll_11285));

var G__11286 = (i_11284 + (1));
var G__11287 = cljs.core.next.call(null,coll_11285);
i_11284 = G__11286;
coll_11285 = G__11287;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Int32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_11288 = (0);
var coll_11289 = size_or_coll;
while(true){
if((i_11288 < len)){
(buf[i_11288] = cljs.core.first.call(null,coll_11289));

var G__11290 = (i_11288 + (1));
var G__11291 = cljs.core.next.call(null,coll_11289);
i_11288 = G__11290;
coll_11289 = G__11291;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_11292 = (0);
var coll_11293 = size_or_coll;
while(true){
if((i_11292 < len)){
(buf[i_11292] = cljs.core.first.call(null,coll_11293));

var G__11294 = (i_11292 + (1));
var G__11295 = cljs.core.next.call(null,coll_11293);
i_11292 = G__11294;
coll_11293 = G__11295;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Float32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_11296 = (0);
var coll_11297 = size_or_coll;
while(true){
if((i_11296 < len)){
(buf[i_11296] = cljs.core.first.call(null,coll_11297));

var G__11298 = (i_11296 + (1));
var G__11299 = cljs.core.next.call(null,coll_11297);
i_11296 = G__11298;
coll_11297 = G__11299;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Float64Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_11300 = (0);
var coll_11301 = size_or_coll;
while(true){
if((i_11300 < len)){
(buf[i_11300] = cljs.core.first.call(null,coll_11301));

var G__11302 = (i_11300 + (1));
var G__11303 = cljs.core.next.call(null,coll_11301);
i_11300 = G__11302;
coll_11301 = G__11303;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["[object Float64Array]","[object Int8Array]","[object Int16Array]","[object Uint8Array]","[object Uint16Array]","[object Uint8ClampedArray]","[object Uint32Array]","[object Float32Array]","[object Int32Array]"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
return thi.ng.typedarrays.core.array_types.call(null,[cljs.core.str(x)].join(''));
}
});
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return false;
} else {
if(typeof x === 'number'){
return false;
} else {
return thi.ng.typedarrays.core.array_types.call(null,[cljs.core.str(x)].join(''));

}
}
});

//# sourceMappingURL=core.js.map