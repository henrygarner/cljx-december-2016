// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.ndarray.contours');
goog.require('cljs.core');
goog.require('thi.ng.ndarray.core');
goog.require('thi.ng.typedarrays.core');
thi.ng.ndarray.contours.level_crossing = (function thi$ng$ndarray$contours$level_crossing(offset,a,b,level){
var da = (a - level);
var db = (b - level);
if(!(cljs.core._EQ_.call(null,(da >= 0.0),(db >= 0.0)))){
return (offset + (0.5 + (0.5 * ((da + db) / (da - db)))));
} else {
return null;
}
});
thi.ng.ndarray.contours.level_crossings1d = (function thi$ng$ndarray$contours$level_crossings1d(mat,shape,level){
var iter__7942__auto__ = (function thi$ng$ndarray$contours$level_crossings1d_$_iter__16513(s__16514){
return (new cljs.core.LazySeq(null,(function (){
var s__16514__$1 = s__16514;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__16514__$1);
if(temp__6753__auto__){
var s__16514__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16514__$2)){
var c__7940__auto__ = cljs.core.chunk_first.call(null,s__16514__$2);
var size__7941__auto__ = cljs.core.count.call(null,c__7940__auto__);
var b__16516 = cljs.core.chunk_buffer.call(null,size__7941__auto__);
if((function (){var i__16515 = (0);
while(true){
if((i__16515 < size__7941__auto__)){
var x = cljs.core._nth.call(null,c__7940__auto__,i__16515);
var x_SINGLEQUOTE_ = thi.ng.ndarray.contours.level_crossing.call(null,x,thi.ng.ndarray.core.get_at.call(null,mat,x),thi.ng.ndarray.core.get_at.call(null,mat,(x + (1))),level);
if(cljs.core.truth_(x_SINGLEQUOTE_)){
cljs.core.chunk_append.call(null,b__16516,x_SINGLEQUOTE_);

var G__16517 = (i__16515 + (1));
i__16515 = G__16517;
continue;
} else {
var G__16518 = (i__16515 + (1));
i__16515 = G__16518;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16516),thi$ng$ndarray$contours$level_crossings1d_$_iter__16513.call(null,cljs.core.chunk_rest.call(null,s__16514__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16516),null);
}
} else {
var x = cljs.core.first.call(null,s__16514__$2);
var x_SINGLEQUOTE_ = thi.ng.ndarray.contours.level_crossing.call(null,x,thi.ng.ndarray.core.get_at.call(null,mat,x),thi.ng.ndarray.core.get_at.call(null,mat,(x + (1))),level);
if(cljs.core.truth_(x_SINGLEQUOTE_)){
return cljs.core.cons.call(null,x_SINGLEQUOTE_,thi$ng$ndarray$contours$level_crossings1d_$_iter__16513.call(null,cljs.core.rest.call(null,s__16514__$2)));
} else {
var G__16519 = cljs.core.rest.call(null,s__16514__$2);
s__16514__$1 = G__16519;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__.call(null,cljs.core.range.call(null,(((typeof shape === 'number')?shape:cljs.core.first.call(null,shape)) - (1))));
});
thi.ng.ndarray.contours.level_crossings2d_x = (function thi$ng$ndarray$contours$level_crossings2d_x(var_args){
var args16521 = [];
var len__8301__auto___16528 = arguments.length;
var i__8302__auto___16529 = (0);
while(true){
if((i__8302__auto___16529 < len__8301__auto___16528)){
args16521.push((arguments[i__8302__auto___16529]));

var G__16530 = (i__8302__auto___16529 + (1));
i__8302__auto___16529 = G__16530;
continue;
} else {
}
break;
}

var G__16523 = args16521.length;
switch (G__16523) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16521.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d_x.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__16524,level){
var vec__16525 = p__16524;
var sy = cljs.core.nth.call(null,vec__16525,(0),null);
var sx = cljs.core.nth.call(null,vec__16525,(1),null);
return cljs.core.mapcat.call(null,((function (vec__16525,sy,sx){
return (function (y){
return cljs.core.map.call(null,((function (vec__16525,sy,sx){
return (function (p1__16520_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[y,p1__16520_SHARP_],null));
});})(vec__16525,sy,sx))
,thi.ng.ndarray.contours.level_crossings1d.call(null,thi.ng.ndarray.core.pick.call(null,mat,y,null),sx,level));
});})(vec__16525,sy,sx))
,cljs.core.range.call(null,sy));
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings2d_y = (function thi$ng$ndarray$contours$level_crossings2d_y(var_args){
var args16533 = [];
var len__8301__auto___16540 = arguments.length;
var i__8302__auto___16541 = (0);
while(true){
if((i__8302__auto___16541 < len__8301__auto___16540)){
args16533.push((arguments[i__8302__auto___16541]));

var G__16542 = (i__8302__auto___16541 + (1));
i__8302__auto___16541 = G__16542;
continue;
} else {
}
break;
}

var G__16535 = args16533.length;
switch (G__16535) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16533.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d_y.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__16536,level){
var vec__16537 = p__16536;
var sy = cljs.core.nth.call(null,vec__16537,(0),null);
var sx = cljs.core.nth.call(null,vec__16537,(1),null);
return cljs.core.mapcat.call(null,((function (vec__16537,sy,sx){
return (function (x){
return cljs.core.map.call(null,((function (vec__16537,sy,sx){
return (function (p1__16532_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__16532_SHARP_,x],null));
});})(vec__16537,sy,sx))
,thi.ng.ndarray.contours.level_crossings1d.call(null,thi.ng.ndarray.core.pick.call(null,mat,null,x),sy,level));
});})(vec__16537,sy,sx))
,cljs.core.range.call(null,sx));
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings2d = (function thi$ng$ndarray$contours$level_crossings2d(var_args){
var args16544 = [];
var len__8301__auto___16547 = arguments.length;
var i__8302__auto___16548 = (0);
while(true){
if((i__8302__auto___16548 < len__8301__auto___16547)){
args16544.push((arguments[i__8302__auto___16548]));

var G__16549 = (i__8302__auto___16548 + (1));
i__8302__auto___16548 = G__16549;
continue;
} else {
}
break;
}

var G__16546 = args16544.length;
switch (G__16546) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16544.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$3 = (function (mat,shape,level){
return cljs.core.concat.call(null,thi.ng.ndarray.contours.level_crossings2d_x.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings2d_y.call(null,mat,shape,level));
});

thi.ng.ndarray.contours.level_crossings2d.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_x = (function thi$ng$ndarray$contours$level_crossings3d_x(var_args){
var args16552 = [];
var len__8301__auto___16559 = arguments.length;
var i__8302__auto___16560 = (0);
while(true){
if((i__8302__auto___16560 < len__8301__auto___16559)){
args16552.push((arguments[i__8302__auto___16560]));

var G__16561 = (i__8302__auto___16560 + (1));
i__8302__auto___16560 = G__16561;
continue;
} else {
}
break;
}

var G__16554 = args16552.length;
switch (G__16554) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16552.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_x.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__16555,level){
var vec__16556 = p__16555;
var sz = cljs.core.nth.call(null,vec__16556,(0),null);
var sy = cljs.core.nth.call(null,vec__16556,(1),null);
var sx = cljs.core.nth.call(null,vec__16556,(2),null);
return cljs.core.mapcat.call(null,((function (vec__16556,sz,sy,sx){
return (function (z){
return cljs.core.map.call(null,((function (vec__16556,sz,sy,sx){
return (function (p1__16551_SHARP_){
return cljs.core.cons.call(null,z,p1__16551_SHARP_);
});})(vec__16556,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_x.call(null,thi.ng.ndarray.core.pick.call(null,mat,z,null,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sy,sx], null),level));
});})(vec__16556,sz,sy,sx))
,cljs.core.range.call(null,sz));
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_y = (function thi$ng$ndarray$contours$level_crossings3d_y(var_args){
var args16564 = [];
var len__8301__auto___16571 = arguments.length;
var i__8302__auto___16572 = (0);
while(true){
if((i__8302__auto___16572 < len__8301__auto___16571)){
args16564.push((arguments[i__8302__auto___16572]));

var G__16573 = (i__8302__auto___16572 + (1));
i__8302__auto___16572 = G__16573;
continue;
} else {
}
break;
}

var G__16566 = args16564.length;
switch (G__16566) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16564.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_y.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__16567,level){
var vec__16568 = p__16567;
var sz = cljs.core.nth.call(null,vec__16568,(0),null);
var sy = cljs.core.nth.call(null,vec__16568,(1),null);
var sx = cljs.core.nth.call(null,vec__16568,(2),null);
return cljs.core.mapcat.call(null,((function (vec__16568,sz,sy,sx){
return (function (z){
return cljs.core.map.call(null,((function (vec__16568,sz,sy,sx){
return (function (p1__16563_SHARP_){
return cljs.core.cons.call(null,z,p1__16563_SHARP_);
});})(vec__16568,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_y.call(null,thi.ng.ndarray.core.pick.call(null,mat,z,null,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sy,sx], null),level));
});})(vec__16568,sz,sy,sx))
,cljs.core.range.call(null,sz));
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_z = (function thi$ng$ndarray$contours$level_crossings3d_z(var_args){
var args16576 = [];
var len__8301__auto___16583 = arguments.length;
var i__8302__auto___16584 = (0);
while(true){
if((i__8302__auto___16584 < len__8301__auto___16583)){
args16576.push((arguments[i__8302__auto___16584]));

var G__16585 = (i__8302__auto___16584 + (1));
i__8302__auto___16584 = G__16585;
continue;
} else {
}
break;
}

var G__16578 = args16576.length;
switch (G__16578) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16576.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_z.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__16579,level){
var vec__16580 = p__16579;
var sz = cljs.core.nth.call(null,vec__16580,(0),null);
var sy = cljs.core.nth.call(null,vec__16580,(1),null);
var sx = cljs.core.nth.call(null,vec__16580,(2),null);
return cljs.core.mapcat.call(null,((function (vec__16580,sz,sy,sx){
return (function (x){
return cljs.core.map.call(null,((function (vec__16580,sz,sy,sx){
return (function (p1__16575_SHARP_){
return cljs.core.conj.call(null,p1__16575_SHARP_,x);
});})(vec__16580,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_y.call(null,thi.ng.ndarray.core.pick.call(null,mat,null,null,x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sz,sy], null),level));
});})(vec__16580,sz,sy,sx))
,cljs.core.range.call(null,sx));
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d = (function thi$ng$ndarray$contours$level_crossings3d(var_args){
var args16587 = [];
var len__8301__auto___16590 = arguments.length;
var i__8302__auto___16591 = (0);
while(true){
if((i__8302__auto___16591 < len__8301__auto___16590)){
args16587.push((arguments[i__8302__auto___16591]));

var G__16592 = (i__8302__auto___16591 + (1));
i__8302__auto___16591 = G__16592;
continue;
} else {
}
break;
}

var G__16589 = args16587.length;
switch (G__16589) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16587.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$3 = (function (mat,shape,level){
return cljs.core.concat.call(null,thi.ng.ndarray.contours.level_crossings3d_x.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings3d_y.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings3d_z.call(null,mat,shape,level));
});

thi.ng.ndarray.contours.level_crossings3d.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.edge_index_2d = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),null], null);
thi.ng.ndarray.contours.next_edges_2d = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
thi.ng.ndarray.contours.set_border_2d = (function thi$ng$ndarray$contours$set_border_2d(mat,x){
var vec__16597 = thi.ng.ndarray.core.shape.call(null,mat);
var h = cljs.core.nth.call(null,vec__16597,(0),null);
var w = cljs.core.nth.call(null,vec__16597,(1),null);
var h_SINGLEQUOTE_ = (h - (1));
var w_SINGLEQUOTE_ = (w - (1));
var l = thi.ng.ndarray.core.pick.call(null,mat,null,(0));
var r = thi.ng.ndarray.core.pick.call(null,mat,null,w_SINGLEQUOTE_);
var t = thi.ng.ndarray.core.pick.call(null,mat,(0),null);
var b = thi.ng.ndarray.core.pick.call(null,mat,h_SINGLEQUOTE_,null);
var i_16600 = w_SINGLEQUOTE_;
while(true){
if((i_16600 >= (0))){
thi.ng.ndarray.core.set_at.call(null,t,i_16600,x);

thi.ng.ndarray.core.set_at.call(null,b,i_16600,x);

var G__16601 = (i_16600 - (1));
i_16600 = G__16601;
continue;
} else {
}
break;
}

var i_16602 = h_SINGLEQUOTE_;
while(true){
if((i_16602 >= (0))){
thi.ng.ndarray.core.set_at.call(null,l,i_16602,x);

thi.ng.ndarray.core.set_at.call(null,r,i_16602,x);

var G__16603 = (i_16602 - (1));
i_16602 = G__16603;
continue;
} else {
}
break;
}

return mat;
});
thi.ng.ndarray.contours.encode_crossings_2d = (function thi$ng$ndarray$contours$encode_crossings_2d(src,isoval){
var out = thi.ng.ndarray.core.ndarray.call(null,new cljs.core.Keyword(null,"int8","int8",-1834023920),thi.ng.typedarrays.core.int8.call(null,thi.ng.ndarray.core.size.call(null,src)),thi.ng.ndarray.core.shape.call(null,src));
var iso_QMARK_ = ((function (out){
return (function (y,x,m){
if((thi.ng.ndarray.core.get_at.call(null,src,y,x) < isoval)){
return m;
} else {
return (0);
}
});})(out))
;
var pos = thi.ng.ndarray.core.position_seq.call(null,thi.ng.ndarray.core.truncate_h.call(null,src,(-1),(-1)));
while(true){
if(cljs.core.truth_(pos)){
var vec__16607 = cljs.core.first.call(null,pos);
var y = cljs.core.nth.call(null,vec__16607,(0),null);
var x = cljs.core.nth.call(null,vec__16607,(1),null);
var x_SINGLEQUOTE_ = (x + (1));
var y_SINGLEQUOTE_ = (y + (1));
thi.ng.ndarray.core.set_at.call(null,out,y,x,(((iso_QMARK_.call(null,y,x,(8)) | iso_QMARK_.call(null,y,x_SINGLEQUOTE_,(4))) | iso_QMARK_.call(null,y_SINGLEQUOTE_,x_SINGLEQUOTE_,(2))) | iso_QMARK_.call(null,y_SINGLEQUOTE_,x,(1))));

var G__16610 = cljs.core.next.call(null,pos);
pos = G__16610;
continue;
} else {
return out;
}
break;
}
});
thi.ng.ndarray.contours.mean_cell_value_2d = (function thi$ng$ndarray$contours$mean_cell_value_2d(src,y,x){
return (((thi.ng.ndarray.core.get_at.call(null,src,y,x) + thi.ng.ndarray.core.get_at.call(null,src,y,(x + (1)))) + (thi.ng.ndarray.core.get_at.call(null,src,(y + (1)),x) + thi.ng.ndarray.core.get_at.call(null,src,(y + (1)),(x + (1))))) * 0.25);
});
thi.ng.ndarray.contours.process_saddle5 = (function thi$ng$ndarray$contours$process_saddle5(src,y,x,iso,from){
if((thi.ng.ndarray.contours.mean_cell_value_2d.call(null,src,y,x) > iso)){
if(((3) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}
} else {
if(((3) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(7)], null);
}
}
});
thi.ng.ndarray.contours.process_saddle10 = (function thi$ng$ndarray$contours$process_saddle10(src,y,x,iso,from){
if((thi.ng.ndarray.contours.mean_cell_value_2d.call(null,src,y,x) > iso)){
if(((0) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(8)], null);
}
} else {
if(((2) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(11)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(14)], null);
}
}
});
thi.ng.ndarray.contours.mix2d = (function thi$ng$ndarray$contours$mix2d(src,y1,x1,y2,x2,iso){
var a = thi.ng.ndarray.core.get_at.call(null,src,y1,x1);
var b = thi.ng.ndarray.core.get_at.call(null,src,y2,x2);
if((a === b)){
return (0);
} else {
return ((a - iso) / (a - b));
}
});
thi.ng.ndarray.contours.contour_vertex_2d = (function thi$ng$ndarray$contours$contour_vertex_2d(src,y,x,to,iso){
var x_SINGLEQUOTE_ = (x + (1));
var y_SINGLEQUOTE_ = (y + (1));
var G__16612 = (to | (0));
switch (G__16612) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x + thi.ng.ndarray.contours.mix2d.call(null,src,y,x,y,x_SINGLEQUOTE_,iso))], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + thi.ng.ndarray.contours.mix2d.call(null,src,y,x_SINGLEQUOTE_,y_SINGLEQUOTE_,x_SINGLEQUOTE_,iso)),x_SINGLEQUOTE_], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_SINGLEQUOTE_,(x + thi.ng.ndarray.contours.mix2d.call(null,src,y_SINGLEQUOTE_,x,y_SINGLEQUOTE_,x_SINGLEQUOTE_,iso))], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + thi.ng.ndarray.contours.mix2d.call(null,src,y,x,y_SINGLEQUOTE_,x,iso)),x], null);

break;
default:
return null;

}
});
thi.ng.ndarray.contours.find_contours_2d = (function thi$ng$ndarray$contours$find_contours_2d(src,isoval){
var vec__16627 = thi.ng.ndarray.core.shape.call(null,src);
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__16627,(0),null);
var w_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__16627,(1),null);
var h_SINGLEQUOTE___$1 = (h_SINGLEQUOTE_ - (1));
var w_SINGLEQUOTE___$1 = (w_SINGLEQUOTE_ - (1));
var coded = thi.ng.ndarray.contours.encode_crossings_2d.call(null,src,isoval);
var contours = cljs.core.volatile_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY));
var pos = thi.ng.ndarray.core.position_seq.call(null,coded);
var curr = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var to = null;
var p = null;
while(true){
if(cljs.core.truth_(pos)){
var from = to;
var vec__16630 = (cljs.core.truth_(p)?p:cljs.core.first.call(null,pos));
var y = cljs.core.nth.call(null,vec__16630,(0),null);
var x = cljs.core.nth.call(null,vec__16630,(1),null);
if(((x >= w_SINGLEQUOTE___$1)) || ((y >= h_SINGLEQUOTE___$1))){
var G__16640 = cljs.core.next.call(null,pos);
var G__16641 = curr;
var G__16642 = to;
var G__16643 = null;
pos = G__16640;
curr = G__16641;
to = G__16642;
p = G__16643;
continue;
} else {
var id = thi.ng.ndarray.core.get_at.call(null,coded,y,x);
var vec__16633 = (function (){var G__16636 = (id | (0));
switch (G__16636) {
case (5):
return thi.ng.ndarray.contours.process_saddle5.call(null,src,y,x,isoval,from);

break;
case (10):
return thi.ng.ndarray.contours.process_saddle10.call(null,src,y,x,isoval,from);

break;
default:
return thi.ng.ndarray.contours.edge_index_2d.call(null,(id | (0)));

}
})();
var to__$1 = cljs.core.nth.call(null,vec__16633,(0),null);
var clear = cljs.core.nth.call(null,vec__16633,(1),null);
var curr__$1 = (cljs.core.truth_((function (){var and__7073__auto__ = (from == null);
if(and__7073__auto__){
var and__7073__auto____$1 = to__$1;
if(cljs.core.truth_(and__7073__auto____$1)){
return (cljs.core.count.call(null,curr) > (0));
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())?(function (){
cljs.core._vreset_BANG_.call(null,contours,cljs.core.conj_BANG_.call(null,cljs.core._deref.call(null,contours),cljs.core.persistent_BANG_.call(null,curr)));

return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
})()
:curr);
if(cljs.core.truth_(clear)){
thi.ng.ndarray.core.set_at.call(null,coded,y,x,clear);
} else {
}

if(cljs.core.truth_((function (){var and__7073__auto__ = to__$1;
if(cljs.core.truth_(and__7073__auto__)){
return (to__$1 >= (0));
} else {
return and__7073__auto__;
}
})())){
var vertex = thi.ng.ndarray.contours.contour_vertex_2d.call(null,src,y,x,to__$1,isoval);
var vec__16637 = thi.ng.ndarray.contours.next_edges_2d.call(null,to__$1);
var oy = cljs.core.nth.call(null,vec__16637,(0),null);
var ox = cljs.core.nth.call(null,vec__16637,(1),null);
var G__16645 = cljs.core.next.call(null,pos);
var G__16646 = cljs.core.conj_BANG_.call(null,curr__$1,vertex);
var G__16647 = to__$1;
var G__16648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + oy),(x + ox)], null);
pos = G__16645;
curr = G__16646;
to = G__16647;
p = G__16648;
continue;
} else {
var G__16649 = cljs.core.next.call(null,pos);
var G__16650 = curr__$1;
var G__16651 = to__$1;
var G__16652 = null;
pos = G__16649;
curr = G__16650;
to = G__16651;
p = G__16652;
continue;
}
}
} else {
return cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,cljs.core.deref.call(null,contours),cljs.core.persistent_BANG_.call(null,curr)));
}
break;
}
});

//# sourceMappingURL=contours.js.map