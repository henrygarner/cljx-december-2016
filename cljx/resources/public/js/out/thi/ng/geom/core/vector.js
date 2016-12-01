// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.core.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.geom.core.vector.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {thi.ng.geom.core.PNormal}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__9337 = self__.buf;
var G__9338 = (G__9337[(0)]);
var G__9339 = (G__9337[(1)]);
(b[(0)] = ((G__9338 * c) - (G__9339 * s)));

(b[(1)] = ((G__9338 * s) + (G__9339 * c)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9340 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9341 = v.buf;
return (((G__9340[(0)]) * (G__9341[(0)])) + ((G__9340[(1)]) * (G__9341[(1)])));
} else {
return (((G__9340[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__9340[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__9342 = self__.buf;
var G__9343 = (G__9342[(0)]);
var G__9344 = (G__9342[(1)]);
var l = Math.sqrt(((G__9343 * G__9343) + (G__9344 * G__9344)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__9343 / l));

(b[(1)] = (G__9344 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__9345 = self__.buf;
var G__9346 = (G__9345[(0)]);
var G__9347 = (G__9345[(1)]);
var l = Math.sqrt(((G__9346 * G__9346) + (G__9347 * G__9347)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__9346 * l__$1));

(b[(1)] = (G__9347 * l__$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__9348 = self__.buf;
var G__9350 = (G__9348[(0)]);
var G__9351 = (G__9348[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9349 = v.buf;
var G__9352 = (G__9349[(0)]);
var G__9353 = (G__9349[(1)]);
var d = (((G__9350 * G__9352) + (G__9351 * G__9353)) + (2));
(b[(0)] = ((G__9352 * d) - G__9350));

(b[(1)] = ((G__9353 * d) - G__9351));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__9352 = cljs.core.nth.call(null,v,(0),0.0);
var G__9353 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__9350 * G__9352) + (G__9351 * G__9353)) + (2));
(b[(0)] = ((G__9352 * d) - G__9350));

(b[(1)] = ((G__9353 * d) - G__9351));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9354 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9355 = v.buf;
return (((G__9354[(0)]) * (G__9355[(1)])) - ((G__9354[(1)]) * (G__9355[(0)])));
} else {
return (((G__9354[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__9354[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9359_9686 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9360_9687 = v.buf;
(self__.buf[(0)] = ((G__9359_9686[(0)]) - (G__9360_9687[(0)])));

(self__.buf[(1)] = ((G__9359_9686[(1)]) - (G__9360_9687[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9359_9686[(0)]) - v));

(self__.buf[(1)] = ((G__9359_9686[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9359_9686[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9359_9686[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9368_9688 = typeof v1 === 'number';
var G__9369_9689 = typeof v2 === 'number';
if(((G__9368_9688)?G__9369_9689:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__9370_9690 = ((!(G__9368_9688))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9371_9691 = ((!(G__9369_9689))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9362_9692 = (cljs.core.truth_(G__9370_9690)?v1.buf:null);
var G__9363_9693 = (cljs.core.truth_(G__9371_9691)?v2.buf:null);
var G__9364_9694 = (cljs.core.truth_(G__9370_9690)?(G__9362_9692[(0)]):((G__9368_9688)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9365_9695 = (cljs.core.truth_(G__9370_9690)?(G__9362_9692[(1)]):((G__9368_9688)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9366_9696 = (cljs.core.truth_(G__9371_9691)?(G__9363_9693[(0)]):((G__9369_9689)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9367_9697 = (cljs.core.truth_(G__9371_9691)?(G__9363_9693[(1)]):((G__9369_9689)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__9364_9694) - G__9366_9696));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__9365_9695) - G__9367_9697));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9372_9698 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9373_9699 = v.buf;
(self__.buf[(0)] = ((G__9372_9698[(0)]) * (G__9373_9699[(0)])));

(self__.buf[(1)] = ((G__9372_9698[(1)]) * (G__9373_9699[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9372_9698[(0)]) * v));

(self__.buf[(1)] = ((G__9372_9698[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9372_9698[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9372_9698[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9381_9700 = typeof v1 === 'number';
var G__9382_9701 = typeof v2 === 'number';
if(((G__9381_9700)?G__9382_9701:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__9383_9702 = ((!(G__9381_9700))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9384_9703 = ((!(G__9382_9701))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9375_9704 = (cljs.core.truth_(G__9383_9702)?v1.buf:null);
var G__9376_9705 = (cljs.core.truth_(G__9384_9703)?v2.buf:null);
var G__9377_9706 = (cljs.core.truth_(G__9383_9702)?(G__9375_9704[(0)]):((G__9381_9700)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9378_9707 = (cljs.core.truth_(G__9383_9702)?(G__9375_9704[(1)]):((G__9381_9700)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9379_9708 = (cljs.core.truth_(G__9384_9703)?(G__9376_9705[(0)]):((G__9382_9701)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9380_9709 = (cljs.core.truth_(G__9384_9703)?(G__9376_9705[(1)]):((G__9382_9701)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__9377_9706) * G__9379_9708));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__9378_9707) * G__9380_9709));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9394_9710 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9395_9711 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9396_9712 = ((!(G__9394_9710))?typeof a === 'number':null);
var G__9397_9713 = ((!(G__9395_9711))?typeof b === 'number':null);
var G__9385_9714 = self__.buf;
var G__9386_9715 = ((G__9394_9710)?a.buf:null);
var G__9387_9716 = ((G__9395_9711)?b.buf:null);
var G__9388_9717 = (G__9385_9714[(0)]);
var G__9389_9718 = (G__9385_9714[(1)]);
var G__9390_9719 = ((G__9394_9710)?(G__9386_9715[(0)]):(cljs.core.truth_(G__9396_9712)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__9391_9720 = ((G__9394_9710)?(G__9386_9715[(1)]):(cljs.core.truth_(G__9396_9712)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__9392_9721 = ((G__9395_9711)?(G__9387_9716[(0)]):(cljs.core.truth_(G__9397_9713)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__9393_9722 = ((G__9395_9711)?(G__9387_9716[(1)]):(cljs.core.truth_(G__9397_9713)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__9388_9717 - G__9390_9719) * G__9392_9721));

(self__.buf[(1)] = ((G__9389_9718 - G__9391_9720) * G__9393_9722));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9407_9723 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9408_9724 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9409_9725 = ((!(G__9407_9723))?typeof a === 'number':null);
var G__9410_9726 = ((!(G__9408_9724))?typeof b === 'number':null);
var G__9398_9727 = self__.buf;
var G__9399_9728 = ((G__9407_9723)?a.buf:null);
var G__9400_9729 = ((G__9408_9724)?b.buf:null);
var G__9401_9730 = (G__9398_9727[(0)]);
var G__9402_9731 = (G__9398_9727[(1)]);
var G__9403_9732 = ((G__9407_9723)?(G__9399_9728[(0)]):(cljs.core.truth_(G__9409_9725)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9404_9733 = ((G__9407_9723)?(G__9399_9728[(1)]):(cljs.core.truth_(G__9409_9725)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9405_9734 = ((G__9408_9724)?(G__9400_9729[(0)]):(cljs.core.truth_(G__9410_9726)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9406_9735 = ((G__9408_9724)?(G__9400_9729[(1)]):(cljs.core.truth_(G__9410_9726)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__9401_9730 * G__9403_9732) - G__9405_9734));

(self__.buf[(1)] = ((G__9402_9731 * G__9404_9733) - G__9406_9735));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9420_9736 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9421_9737 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9422_9738 = ((!(G__9420_9736))?typeof a === 'number':null);
var G__9423_9739 = ((!(G__9421_9737))?typeof b === 'number':null);
var G__9411_9740 = self__.buf;
var G__9412_9741 = ((G__9420_9736)?a.buf:null);
var G__9413_9742 = ((G__9421_9737)?b.buf:null);
var G__9414_9743 = (G__9411_9740[(0)]);
var G__9415_9744 = (G__9411_9740[(1)]);
var G__9416_9745 = ((G__9420_9736)?(G__9412_9741[(0)]):(cljs.core.truth_(G__9422_9738)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9417_9746 = ((G__9420_9736)?(G__9412_9741[(1)]):(cljs.core.truth_(G__9422_9738)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9418_9747 = ((G__9421_9737)?(G__9413_9742[(0)]):(cljs.core.truth_(G__9423_9739)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9419_9748 = ((G__9421_9737)?(G__9413_9742[(1)]):(cljs.core.truth_(G__9423_9739)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__9414_9743 * G__9416_9745) + G__9418_9747));

(self__.buf[(1)] = ((G__9415_9744 * G__9417_9746) + G__9419_9748));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9424_9749 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9425_9750 = v.buf;
(self__.buf[(0)] = ((G__9424_9749[(0)]) / (G__9425_9750[(0)])));

(self__.buf[(1)] = ((G__9424_9749[(1)]) / (G__9425_9750[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9424_9749[(0)]) / v));

(self__.buf[(1)] = ((G__9424_9749[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9424_9749[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9424_9749[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9433_9751 = typeof v1 === 'number';
var G__9434_9752 = typeof v2 === 'number';
if(((G__9433_9751)?G__9434_9752:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__9435_9753 = ((!(G__9433_9751))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9436_9754 = ((!(G__9434_9752))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9427_9755 = (cljs.core.truth_(G__9435_9753)?v1.buf:null);
var G__9428_9756 = (cljs.core.truth_(G__9436_9754)?v2.buf:null);
var G__9429_9757 = (cljs.core.truth_(G__9435_9753)?(G__9427_9755[(0)]):((G__9433_9751)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9430_9758 = (cljs.core.truth_(G__9435_9753)?(G__9427_9755[(1)]):((G__9433_9751)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9431_9759 = (cljs.core.truth_(G__9436_9754)?(G__9428_9756[(0)]):((G__9434_9752)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9432_9760 = (cljs.core.truth_(G__9436_9754)?(G__9428_9756[(1)]):((G__9434_9752)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__9429_9757) / G__9431_9759));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__9430_9758) / G__9432_9760));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9437_9761 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9438_9762 = v.buf;
(self__.buf[(0)] = ((G__9437_9761[(0)]) + (G__9438_9762[(0)])));

(self__.buf[(1)] = ((G__9437_9761[(1)]) + (G__9438_9762[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9437_9761[(0)]) + v));

(self__.buf[(1)] = ((G__9437_9761[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9437_9761[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9437_9761[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9446_9763 = typeof v1 === 'number';
var G__9447_9764 = typeof v2 === 'number';
if(((G__9446_9763)?G__9447_9764:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__9448_9765 = ((!(G__9446_9763))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9449_9766 = ((!(G__9447_9764))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9440_9767 = (cljs.core.truth_(G__9448_9765)?v1.buf:null);
var G__9441_9768 = (cljs.core.truth_(G__9449_9766)?v2.buf:null);
var G__9442_9769 = (cljs.core.truth_(G__9448_9765)?(G__9440_9767[(0)]):((G__9446_9763)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9443_9770 = (cljs.core.truth_(G__9448_9765)?(G__9440_9767[(1)]):((G__9446_9763)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9444_9771 = (cljs.core.truth_(G__9449_9766)?(G__9441_9768[(0)]):((G__9447_9764)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9445_9772 = (cljs.core.truth_(G__9449_9766)?(G__9441_9768[(1)]):((G__9447_9764)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__9442_9769) + G__9444_9771));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__9443_9770) + G__9445_9772));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9459_9773 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9460_9774 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9461_9775 = ((!(G__9459_9773))?typeof a === 'number':null);
var G__9462_9776 = ((!(G__9460_9774))?typeof b === 'number':null);
var G__9450_9777 = self__.buf;
var G__9451_9778 = ((G__9459_9773)?a.buf:null);
var G__9452_9779 = ((G__9460_9774)?b.buf:null);
var G__9453_9780 = (G__9450_9777[(0)]);
var G__9454_9781 = (G__9450_9777[(1)]);
var G__9455_9782 = ((G__9459_9773)?(G__9451_9778[(0)]):(cljs.core.truth_(G__9461_9775)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__9456_9783 = ((G__9459_9773)?(G__9451_9778[(1)]):(cljs.core.truth_(G__9461_9775)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__9457_9784 = ((G__9460_9774)?(G__9452_9779[(0)]):(cljs.core.truth_(G__9462_9776)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__9458_9785 = ((G__9460_9774)?(G__9452_9779[(1)]):(cljs.core.truth_(G__9462_9776)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__9453_9780 + G__9455_9782) * G__9457_9784));

(self__.buf[(1)] = ((G__9454_9781 + G__9456_9783) * G__9458_9785));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__7085__auto__ = self__._hash;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1))));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9463 = self__.buf;
var G__9465 = (G__9463[(0)]);
var G__9466 = (G__9463[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9464 = v.buf;
var G__9467 = (G__9464[(0)]);
var G__9468 = (G__9464[(1)]);
var dx = (G__9465 - G__9467);
var dy = (G__9466 - G__9468);
return ((dx * dx) + (dy * dy));
} else {
var G__9467 = cljs.core.nth.call(null,v,(0),0.0);
var G__9468 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__9465 - G__9467);
var dy = (G__9466 - G__9468);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9212__auto__ = (new Float32Array((2)));
var G__9478_9786 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9479_9787 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9480_9788 = ((!(G__9478_9786))?typeof a === 'number':null);
var G__9481_9789 = ((!(G__9479_9787))?typeof b === 'number':null);
var G__9469_9790 = self__.buf;
var G__9470_9791 = ((G__9478_9786)?a.buf:null);
var G__9471_9792 = ((G__9479_9787)?b.buf:null);
var G__9472_9793 = (G__9469_9790[(0)]);
var G__9473_9794 = (G__9469_9790[(1)]);
var G__9474_9795 = ((G__9478_9786)?(G__9470_9791[(0)]):(cljs.core.truth_(G__9480_9788)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9475_9796 = ((G__9478_9786)?(G__9470_9791[(1)]):(cljs.core.truth_(G__9480_9788)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9476_9797 = ((G__9479_9787)?(G__9471_9792[(0)]):(cljs.core.truth_(G__9481_9789)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9477_9798 = ((G__9479_9787)?(G__9471_9792[(1)]):(cljs.core.truth_(G__9481_9789)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__9212__auto__[(0)] = ((G__9472_9793 * G__9474_9795) - G__9476_9797));

(dest__9212__auto__[(1)] = ((G__9473_9794 * G__9475_9796) - G__9477_9798));

return (new thi.ng.geom.core.vector.Vec2(dest__9212__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9201__auto__ = (new Float32Array((2)));
var G__9482_9799 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9483_9800 = v.buf;
(dest__9201__auto__[(0)] = ((G__9482_9799[(0)]) * (G__9483_9800[(0)])));

(dest__9201__auto__[(1)] = ((G__9482_9799[(1)]) * (G__9483_9800[(1)])));
} else {
if(typeof v === 'number'){
(dest__9201__auto__[(0)] = ((G__9482_9799[(0)]) * v));

(dest__9201__auto__[(1)] = ((G__9482_9799[(1)]) * v));
} else {
(dest__9201__auto__[(0)] = ((G__9482_9799[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9201__auto__[(1)] = ((G__9482_9799[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9201__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9484 = self__.buf;
var G__9487 = (new Float32Array((2)));
var G__9488 = (G__9484[(0)]);
var G__9489 = (G__9484[(1)]);
var G__9494 = typeof v1 === 'number';
var G__9495 = typeof v2 === 'number';
if(((G__9494)?G__9495:false)){
(G__9487[(0)] = (G__9488 * v1));

(G__9487[(1)] = (G__9489 * v2));
} else {
var G__9496_9801 = ((!(G__9494))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9497_9802 = ((!(G__9495))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9485_9803 = (cljs.core.truth_(G__9496_9801)?v1.buf:null);
var G__9486_9804 = (cljs.core.truth_(G__9497_9802)?v2.buf:null);
var G__9490_9805 = (cljs.core.truth_(G__9496_9801)?(G__9485_9803[(0)]):((G__9494)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__9491_9806 = (cljs.core.truth_(G__9496_9801)?(G__9485_9803[(1)]):((G__9494)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__9492_9807 = (cljs.core.truth_(G__9497_9802)?(G__9486_9804[(0)]):((G__9495)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__9493_9808 = (cljs.core.truth_(G__9497_9802)?(G__9486_9804[(1)]):((G__9495)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__9487[(0)] = ((G__9488 * G__9490_9805) * G__9492_9807));

(G__9487[(1)] = ((G__9489 * G__9491_9806) * G__9493_9808));
}

return (new thi.ng.geom.core.vector.Vec2(G__9487,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9171__auto__ = (new Float32Array((2)));
var G__9498_9809 = self__.buf;
(dest__9171__auto__[(0)] = (- (G__9498_9809[(0)])));

(dest__9171__auto__[(1)] = (- (G__9498_9809[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__9171__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9201__auto__ = (new Float32Array((2)));
var G__9499_9810 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9500_9811 = v.buf;
(dest__9201__auto__[(0)] = ((G__9499_9810[(0)]) - (G__9500_9811[(0)])));

(dest__9201__auto__[(1)] = ((G__9499_9810[(1)]) - (G__9500_9811[(1)])));
} else {
if(typeof v === 'number'){
(dest__9201__auto__[(0)] = ((G__9499_9810[(0)]) - v));

(dest__9201__auto__[(1)] = ((G__9499_9810[(1)]) - v));
} else {
(dest__9201__auto__[(0)] = ((G__9499_9810[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__9201__auto__[(1)] = ((G__9499_9810[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9201__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9501 = self__.buf;
var G__9504 = (new Float32Array((2)));
var G__9505 = (G__9501[(0)]);
var G__9506 = (G__9501[(1)]);
var G__9511 = typeof v1 === 'number';
var G__9512 = typeof v2 === 'number';
if(((G__9511)?G__9512:false)){
(G__9504[(0)] = (G__9505 - v1));

(G__9504[(1)] = (G__9506 - v2));
} else {
var G__9513_9812 = ((!(G__9511))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9514_9813 = ((!(G__9512))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9502_9814 = (cljs.core.truth_(G__9513_9812)?v1.buf:null);
var G__9503_9815 = (cljs.core.truth_(G__9514_9813)?v2.buf:null);
var G__9507_9816 = (cljs.core.truth_(G__9513_9812)?(G__9502_9814[(0)]):((G__9511)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9508_9817 = (cljs.core.truth_(G__9513_9812)?(G__9502_9814[(1)]):((G__9511)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9509_9818 = (cljs.core.truth_(G__9514_9813)?(G__9503_9815[(0)]):((G__9512)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9510_9819 = (cljs.core.truth_(G__9514_9813)?(G__9503_9815[(1)]):((G__9512)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__9504[(0)] = ((G__9505 - G__9507_9816) - G__9509_9818));

(G__9504[(1)] = ((G__9506 - G__9508_9817) - G__9510_9819));
}

return (new thi.ng.geom.core.vector.Vec2(G__9504,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9212__auto__ = (new Float32Array((2)));
var G__9524_9820 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9525_9821 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9526_9822 = ((!(G__9524_9820))?typeof a === 'number':null);
var G__9527_9823 = ((!(G__9525_9821))?typeof b === 'number':null);
var G__9515_9824 = self__.buf;
var G__9516_9825 = ((G__9524_9820)?a.buf:null);
var G__9517_9826 = ((G__9525_9821)?b.buf:null);
var G__9518_9827 = (G__9515_9824[(0)]);
var G__9519_9828 = (G__9515_9824[(1)]);
var G__9520_9829 = ((G__9524_9820)?(G__9516_9825[(0)]):(cljs.core.truth_(G__9526_9822)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9521_9830 = ((G__9524_9820)?(G__9516_9825[(1)]):(cljs.core.truth_(G__9526_9822)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9522_9831 = ((G__9525_9821)?(G__9517_9826[(0)]):(cljs.core.truth_(G__9527_9823)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9523_9832 = ((G__9525_9821)?(G__9517_9826[(1)]):(cljs.core.truth_(G__9527_9823)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__9212__auto__[(0)] = ((G__9518_9827 * G__9520_9829) + G__9522_9831));

(dest__9212__auto__[(1)] = ((G__9519_9828 * G__9521_9830) + G__9523_9832));

return (new thi.ng.geom.core.vector.Vec2(dest__9212__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9212__auto__ = (new Float32Array((2)));
var G__9537_9833 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9538_9834 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9539_9835 = ((!(G__9537_9833))?typeof a === 'number':null);
var G__9540_9836 = ((!(G__9538_9834))?typeof b === 'number':null);
var G__9528_9837 = self__.buf;
var G__9529_9838 = ((G__9537_9833)?a.buf:null);
var G__9530_9839 = ((G__9538_9834)?b.buf:null);
var G__9531_9840 = (G__9528_9837[(0)]);
var G__9532_9841 = (G__9528_9837[(1)]);
var G__9533_9842 = ((G__9537_9833)?(G__9529_9838[(0)]):(cljs.core.truth_(G__9539_9835)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__9534_9843 = ((G__9537_9833)?(G__9529_9838[(1)]):(cljs.core.truth_(G__9539_9835)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__9535_9844 = ((G__9538_9834)?(G__9530_9839[(0)]):(cljs.core.truth_(G__9540_9836)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__9536_9845 = ((G__9538_9834)?(G__9530_9839[(1)]):(cljs.core.truth_(G__9540_9836)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__9212__auto__[(0)] = ((G__9531_9840 + G__9533_9842) * G__9535_9844));

(dest__9212__auto__[(1)] = ((G__9532_9841 + G__9534_9843) * G__9536_9845));

return (new thi.ng.geom.core.vector.Vec2(dest__9212__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9171__auto__ = (new Float32Array((2)));
var G__9541_9846 = self__.buf;
(dest__9171__auto__[(0)] = ((1) / (G__9541_9846[(0)])));

(dest__9171__auto__[(1)] = ((1) / (G__9541_9846[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__9171__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9201__auto__ = (new Float32Array((2)));
var G__9542_9847 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9543_9848 = v.buf;
(dest__9201__auto__[(0)] = ((G__9542_9847[(0)]) / (G__9543_9848[(0)])));

(dest__9201__auto__[(1)] = ((G__9542_9847[(1)]) / (G__9543_9848[(1)])));
} else {
if(typeof v === 'number'){
(dest__9201__auto__[(0)] = ((G__9542_9847[(0)]) / v));

(dest__9201__auto__[(1)] = ((G__9542_9847[(1)]) / v));
} else {
(dest__9201__auto__[(0)] = ((G__9542_9847[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__9201__auto__[(1)] = ((G__9542_9847[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9201__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9544 = self__.buf;
var G__9547 = (new Float32Array((2)));
var G__9548 = (G__9544[(0)]);
var G__9549 = (G__9544[(1)]);
var G__9554 = typeof v1 === 'number';
var G__9555 = typeof v2 === 'number';
if(((G__9554)?G__9555:false)){
(G__9547[(0)] = (G__9548 / v1));

(G__9547[(1)] = (G__9549 / v2));
} else {
var G__9556_9849 = ((!(G__9554))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9557_9850 = ((!(G__9555))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9545_9851 = (cljs.core.truth_(G__9556_9849)?v1.buf:null);
var G__9546_9852 = (cljs.core.truth_(G__9557_9850)?v2.buf:null);
var G__9550_9853 = (cljs.core.truth_(G__9556_9849)?(G__9545_9851[(0)]):((G__9554)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9551_9854 = (cljs.core.truth_(G__9556_9849)?(G__9545_9851[(1)]):((G__9554)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9552_9855 = (cljs.core.truth_(G__9557_9850)?(G__9546_9852[(0)]):((G__9555)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9553_9856 = (cljs.core.truth_(G__9557_9850)?(G__9546_9852[(1)]):((G__9555)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__9547[(0)] = ((G__9548 / G__9550_9853) / G__9552_9855));

(G__9547[(1)] = ((G__9549 / G__9551_9854) / G__9553_9856));
}

return (new thi.ng.geom.core.vector.Vec2(G__9547,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9201__auto__ = (new Float32Array((2)));
var G__9558_9857 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9559_9858 = v.buf;
(dest__9201__auto__[(0)] = ((G__9558_9857[(0)]) + (G__9559_9858[(0)])));

(dest__9201__auto__[(1)] = ((G__9558_9857[(1)]) + (G__9559_9858[(1)])));
} else {
if(typeof v === 'number'){
(dest__9201__auto__[(0)] = ((G__9558_9857[(0)]) + v));

(dest__9201__auto__[(1)] = ((G__9558_9857[(1)]) + v));
} else {
(dest__9201__auto__[(0)] = ((G__9558_9857[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9201__auto__[(1)] = ((G__9558_9857[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9201__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9560 = self__.buf;
var G__9563 = (new Float32Array((2)));
var G__9564 = (G__9560[(0)]);
var G__9565 = (G__9560[(1)]);
var G__9570 = typeof v1 === 'number';
var G__9571 = typeof v2 === 'number';
if(((G__9570)?G__9571:false)){
(G__9563[(0)] = (G__9564 + v1));

(G__9563[(1)] = (G__9565 + v2));
} else {
var G__9572_9859 = ((!(G__9570))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9573_9860 = ((!(G__9571))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9561_9861 = (cljs.core.truth_(G__9572_9859)?v1.buf:null);
var G__9562_9862 = (cljs.core.truth_(G__9573_9860)?v2.buf:null);
var G__9566_9863 = (cljs.core.truth_(G__9572_9859)?(G__9561_9861[(0)]):((G__9570)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9567_9864 = (cljs.core.truth_(G__9572_9859)?(G__9561_9861[(1)]):((G__9570)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9568_9865 = (cljs.core.truth_(G__9573_9860)?(G__9562_9862[(0)]):((G__9571)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9569_9866 = (cljs.core.truth_(G__9573_9860)?(G__9562_9862[(1)]):((G__9571)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__9563[(0)] = ((G__9564 + G__9566_9863) + G__9568_9865));

(G__9563[(1)] = ((G__9565 + G__9567_9864) + G__9569_9866));
}

return (new thi.ng.geom.core.vector.Vec2(G__9563,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9171__auto__ = (new Float32Array((2)));
var G__9574_9867 = self__.buf;
(dest__9171__auto__[(0)] = thi.ng.math.core.abs.call(null,(G__9574_9867[(0)])));

(dest__9171__auto__[(1)] = thi.ng.math.core.abs.call(null,(G__9574_9867[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__9171__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9212__auto__ = (new Float32Array((2)));
var G__9584_9868 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9585_9869 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9586_9870 = ((!(G__9584_9868))?typeof a === 'number':null);
var G__9587_9871 = ((!(G__9585_9869))?typeof b === 'number':null);
var G__9575_9872 = self__.buf;
var G__9576_9873 = ((G__9584_9868)?a.buf:null);
var G__9577_9874 = ((G__9585_9869)?b.buf:null);
var G__9578_9875 = (G__9575_9872[(0)]);
var G__9579_9876 = (G__9575_9872[(1)]);
var G__9580_9877 = ((G__9584_9868)?(G__9576_9873[(0)]):(cljs.core.truth_(G__9586_9870)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__9581_9878 = ((G__9584_9868)?(G__9576_9873[(1)]):(cljs.core.truth_(G__9586_9870)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__9582_9879 = ((G__9585_9869)?(G__9577_9874[(0)]):(cljs.core.truth_(G__9587_9871)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__9583_9880 = ((G__9585_9869)?(G__9577_9874[(1)]):(cljs.core.truth_(G__9587_9871)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__9212__auto__[(0)] = ((G__9578_9875 - G__9580_9877) * G__9582_9879));

(dest__9212__auto__[(1)] = ((G__9579_9876 - G__9581_9878) * G__9583_9880));

return (new thi.ng.geom.core.vector.Vec2(dest__9212__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9201__auto__ = (new Float32Array((2)));
var G__9588_9881 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9589_9882 = v.buf;
(dest__9201__auto__[(0)] = ((G__9588_9881[(0)]) + (G__9589_9882[(0)])));

(dest__9201__auto__[(1)] = ((G__9588_9881[(1)]) + (G__9589_9882[(1)])));
} else {
if(typeof v === 'number'){
(dest__9201__auto__[(0)] = ((G__9588_9881[(0)]) + v));

(dest__9201__auto__[(1)] = ((G__9588_9881[(1)]) + v));
} else {
(dest__9201__auto__[(0)] = ((G__9588_9881[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9201__auto__[(1)] = ((G__9588_9881[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9201__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9590 = self__.buf;
var G__9593 = (new Float32Array((2)));
var G__9594 = (G__9590[(0)]);
var G__9595 = (G__9590[(1)]);
var G__9600 = typeof v1 === 'number';
var G__9601 = typeof v2 === 'number';
if(((G__9600)?G__9601:false)){
(G__9593[(0)] = (G__9594 + v1));

(G__9593[(1)] = (G__9595 + v2));
} else {
var G__9602_9883 = ((!(G__9600))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9603_9884 = ((!(G__9601))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9591_9885 = (cljs.core.truth_(G__9602_9883)?v1.buf:null);
var G__9592_9886 = (cljs.core.truth_(G__9603_9884)?v2.buf:null);
var G__9596_9887 = (cljs.core.truth_(G__9602_9883)?(G__9591_9885[(0)]):((G__9600)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9597_9888 = (cljs.core.truth_(G__9602_9883)?(G__9591_9885[(1)]):((G__9600)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9598_9889 = (cljs.core.truth_(G__9603_9884)?(G__9592_9886[(0)]):((G__9601)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9599_9890 = (cljs.core.truth_(G__9603_9884)?(G__9592_9886[(1)]):((G__9601)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__9593[(0)] = ((G__9594 + G__9596_9887) + G__9598_9889));

(G__9593[(1)] = ((G__9595 + G__9597_9888) + G__9599_9890));
}

return (new thi.ng.geom.core.vector.Vec2(G__9593,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9201__auto__ = (new Float32Array((2)));
var G__9604_9891 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9605_9892 = v.buf;
(dest__9201__auto__[(0)] = ((G__9604_9891[(0)]) * (G__9605_9892[(0)])));

(dest__9201__auto__[(1)] = ((G__9604_9891[(1)]) * (G__9605_9892[(1)])));
} else {
if(typeof v === 'number'){
(dest__9201__auto__[(0)] = ((G__9604_9891[(0)]) * v));

(dest__9201__auto__[(1)] = ((G__9604_9891[(1)]) * v));
} else {
(dest__9201__auto__[(0)] = ((G__9604_9891[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9201__auto__[(1)] = ((G__9604_9891[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9201__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9606 = self__.buf;
var G__9609 = (new Float32Array((2)));
var G__9610 = (G__9606[(0)]);
var G__9611 = (G__9606[(1)]);
var G__9616 = typeof v1 === 'number';
var G__9617 = typeof v2 === 'number';
if(((G__9616)?G__9617:false)){
(G__9609[(0)] = (G__9610 * v1));

(G__9609[(1)] = (G__9611 * v2));
} else {
var G__9618_9893 = ((!(G__9616))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9619_9894 = ((!(G__9617))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9607_9895 = (cljs.core.truth_(G__9618_9893)?v1.buf:null);
var G__9608_9896 = (cljs.core.truth_(G__9619_9894)?v2.buf:null);
var G__9612_9897 = (cljs.core.truth_(G__9618_9893)?(G__9607_9895[(0)]):((G__9616)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__9613_9898 = (cljs.core.truth_(G__9618_9893)?(G__9607_9895[(1)]):((G__9616)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__9614_9899 = (cljs.core.truth_(G__9619_9894)?(G__9608_9896[(0)]):((G__9617)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__9615_9900 = (cljs.core.truth_(G__9619_9894)?(G__9608_9896[(1)]):((G__9617)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__9609[(0)] = ((G__9610 * G__9612_9897) * G__9614_9899));

(G__9609[(1)] = ((G__9611 * G__9613_9898) * G__9615_9900));
}

return (new thi.ng.geom.core.vector.Vec2(G__9609,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.core.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__9901 = null;
var G__9901__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__9901__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__9901 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__9901__2.call(this,self__,k);
case 3:
return G__9901__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9901.cljs$core$IFn$_invoke$arity$2 = G__9901__2;
G__9901.cljs$core$IFn$_invoke$arity$3 = G__9901__3;
return G__9901;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args9336){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9336)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9201__auto__ = (new Float32Array((2)));
var G__9620_9902 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9621_9903 = v.buf;
(dest__9201__auto__[(0)] = (function (){var a__8823__auto__ = (G__9620_9902[(0)]);
var b__8824__auto__ = (G__9621_9903[(0)]);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9201__auto__[(1)] = (function (){var a__8823__auto__ = (G__9620_9902[(1)]);
var b__8824__auto__ = (G__9621_9903[(1)]);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9201__auto__[(0)] = (function (){var a__8823__auto__ = (G__9620_9902[(0)]);
var b__8824__auto__ = v;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9201__auto__[(1)] = (function (){var a__8823__auto__ = (G__9620_9902[(1)]);
var b__8824__auto__ = v;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());
} else {
(dest__9201__auto__[(0)] = (function (){var a__8823__auto__ = (G__9620_9902[(0)]);
var b__8824__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9201__auto__[(1)] = (function (){var a__8823__auto__ = (G__9620_9902[(1)]);
var b__8824__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9201__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9212__auto__ = (new Float32Array((2)));
var G__9631_9904 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__9632_9905 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__9633_9906 = ((!(G__9631_9904))?typeof v === 'number':null);
var G__9634_9907 = ((!(G__9632_9905))?typeof v2 === 'number':null);
var G__9622_9908 = self__.buf;
var G__9623_9909 = ((G__9631_9904)?v.buf:null);
var G__9624_9910 = ((G__9632_9905)?v2.buf:null);
var G__9625_9911 = (G__9622_9908[(0)]);
var G__9626_9912 = (G__9622_9908[(1)]);
var G__9627_9913 = ((G__9631_9904)?(G__9623_9909[(0)]):(cljs.core.truth_(G__9633_9906)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__9628_9914 = ((G__9631_9904)?(G__9623_9909[(1)]):(cljs.core.truth_(G__9633_9906)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__9629_9915 = ((G__9632_9905)?(G__9624_9910[(0)]):(cljs.core.truth_(G__9634_9907)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9630_9916 = ((G__9632_9905)?(G__9624_9910[(1)]):(cljs.core.truth_(G__9634_9907)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__9212__auto__[(0)] = (function (){var a__8823__auto__ = (function (){var a__8823__auto__ = G__9625_9911;
var b__8824__auto__ = G__9627_9913;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})();
var b__8824__auto__ = G__9629_9915;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9212__auto__[(1)] = (function (){var a__8823__auto__ = (function (){var a__8823__auto__ = G__9626_9912;
var b__8824__auto__ = G__9628_9914;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})();
var b__8824__auto__ = G__9630_9916;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__9212__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9201__auto__ = (new Float32Array((2)));
var G__9635_9917 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9636_9918 = v.buf;
(dest__9201__auto__[(0)] = (function (){var a__8830__auto__ = (G__9635_9917[(0)]);
var b__8831__auto__ = (G__9636_9918[(0)]);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9201__auto__[(1)] = (function (){var a__8830__auto__ = (G__9635_9917[(1)]);
var b__8831__auto__ = (G__9636_9918[(1)]);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9201__auto__[(0)] = (function (){var a__8830__auto__ = (G__9635_9917[(0)]);
var b__8831__auto__ = v;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9201__auto__[(1)] = (function (){var a__8830__auto__ = (G__9635_9917[(1)]);
var b__8831__auto__ = v;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());
} else {
(dest__9201__auto__[(0)] = (function (){var a__8830__auto__ = (G__9635_9917[(0)]);
var b__8831__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9201__auto__[(1)] = (function (){var a__8830__auto__ = (G__9635_9917[(1)]);
var b__8831__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9201__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9212__auto__ = (new Float32Array((2)));
var G__9646_9919 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__9647_9920 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__9648_9921 = ((!(G__9646_9919))?typeof v === 'number':null);
var G__9649_9922 = ((!(G__9647_9920))?typeof v2 === 'number':null);
var G__9637_9923 = self__.buf;
var G__9638_9924 = ((G__9646_9919)?v.buf:null);
var G__9639_9925 = ((G__9647_9920)?v2.buf:null);
var G__9640_9926 = (G__9637_9923[(0)]);
var G__9641_9927 = (G__9637_9923[(1)]);
var G__9642_9928 = ((G__9646_9919)?(G__9638_9924[(0)]):(cljs.core.truth_(G__9648_9921)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__9643_9929 = ((G__9646_9919)?(G__9638_9924[(1)]):(cljs.core.truth_(G__9648_9921)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__9644_9930 = ((G__9647_9920)?(G__9639_9925[(0)]):(cljs.core.truth_(G__9649_9922)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9645_9931 = ((G__9647_9920)?(G__9639_9925[(1)]):(cljs.core.truth_(G__9649_9922)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__9212__auto__[(0)] = (function (){var a__8830__auto__ = (function (){var a__8830__auto__ = G__9640_9926;
var b__8831__auto__ = G__9642_9928;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})();
var b__8831__auto__ = G__9644_9930;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9212__auto__[(1)] = (function (){var a__8830__auto__ = (function (){var a__8830__auto__ = G__9641_9927;
var b__8831__auto__ = G__9643_9929;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})();
var b__8831__auto__ = G__9645_9931;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__9212__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.core.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__9650 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9651 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__9650[(0)]),(G__9651[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__9650[(1)]),(G__9651[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__9650[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__9650[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__9652 = self__.buf;
var G__9653 = (G__9652[(0)]);
var G__9654 = (G__9652[(1)]);
return Math.sqrt(((G__9653 * G__9653) + (G__9654 * G__9654)));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__9655 = self__.buf;
var G__9656 = (G__9655[(0)]);
var G__9657 = (G__9655[(1)]);
return ((G__9656 * G__9656) + (G__9657 * G__9657));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__9658_9932 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9659_9933 = v.buf;
(b[(0)] = (((G__9658_9932[(0)]) + (G__9659_9933[(0)])) * 0.5));

(b[(1)] = (((G__9658_9932[(1)]) + (G__9659_9933[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__9658_9932[(0)]) + v) * 0.5));

(b[(1)] = (((G__9658_9932[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__9658_9932[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__9658_9932[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__9669_9934 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__9670_9935 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__9671_9936 = ((!(G__9669_9934))?typeof v === 'number':null);
var G__9672_9937 = ((!(G__9670_9935))?typeof v2 === 'number':null);
var G__9660_9938 = self__.buf;
var G__9661_9939 = ((G__9669_9934)?v.buf:null);
var G__9662_9940 = ((G__9670_9935)?v2.buf:null);
var G__9663_9941 = (G__9660_9938[(0)]);
var G__9664_9942 = (G__9660_9938[(1)]);
var G__9665_9943 = ((G__9669_9934)?(G__9661_9939[(0)]):(cljs.core.truth_(G__9671_9936)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__9666_9944 = ((G__9669_9934)?(G__9661_9939[(1)]):(cljs.core.truth_(G__9671_9936)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__9667_9945 = ((G__9670_9935)?(G__9662_9940[(0)]):(cljs.core.truth_(G__9672_9937)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9668_9946 = ((G__9670_9935)?(G__9662_9940[(1)]):(cljs.core.truth_(G__9672_9937)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(b[(0)] = (((G__9665_9943 - G__9663_9941) * G__9667_9945) + G__9663_9941));

(b[(1)] = (((G__9666_9944 - G__9664_9942) * G__9668_9946) + G__9664_9942));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__9682_9947 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9683_9948 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__9684_9949 = ((!(G__9682_9947))?typeof b === 'number':null);
var G__9685_9950 = ((!(G__9683_9948))?typeof c === 'number':null);
var G__9673_9951 = self__.buf;
var G__9674_9952 = ((G__9682_9947)?b.buf:null);
var G__9675_9953 = ((G__9683_9948)?c.buf:null);
var G__9676_9954 = (G__9673_9951[(0)]);
var G__9677_9955 = (G__9673_9951[(1)]);
var G__9678_9956 = ((G__9682_9947)?(G__9674_9952[(0)]):(cljs.core.truth_(G__9684_9949)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9679_9957 = ((G__9682_9947)?(G__9674_9952[(1)]):(cljs.core.truth_(G__9684_9949)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__9680_9958 = ((G__9683_9948)?(G__9675_9953[(0)]):(cljs.core.truth_(G__9685_9950)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__9681_9959 = ((G__9683_9948)?(G__9675_9953[(1)]):(cljs.core.truth_(G__9685_9950)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_9960 = (((G__9678_9956 - G__9676_9954) * u) + G__9676_9954);
var y1_9961 = (((G__9679_9957 - G__9677_9955) * u) + G__9677_9955);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__9680_9958) * u) + G__9680_9958) - x1_9960) * v) + x1_9960));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__9681_9959) * u) + G__9681_9959) - y1_9961) * v) + y1_9961));

return (new thi.ng.geom.core.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.geom.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__9356 = self__.buf;
var G__9357 = (G__9356[(0)]);
var G__9358 = (G__9356[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__9357 * Math.cos(G__9358)));

(b[(1)] = (G__9357 * Math.sin(G__9358)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write.call(null,writer__7738__auto__,"thi.ng.geom.core.vector/Vec2");
});

thi.ng.geom.core.vector.__GT_Vec2 = (function thi$ng$geom$core$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.geom.core.vector.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PRotate3D}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9963 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__9964 = v.buf;
return ((((G__9963[(0)]) * (G__9964[(0)])) + ((G__9963[(1)]) * (G__9964[(1)]))) + ((G__9963[(2)]) * (G__9964[(2)])));
} else {
return ((((G__9963[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__9963[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__9963[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__9965 = self__.buf;
var G__9966 = (G__9965[(0)]);
var G__9967 = (G__9965[(1)]);
var G__9968 = (G__9965[(2)]);
var l = Math.sqrt((((G__9966 * G__9966) + (G__9967 * G__9967)) + (G__9968 * G__9968)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__9966 / l));

(b[(1)] = (G__9967 / l));

(b[(2)] = (G__9968 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__9969 = self__.buf;
var G__9970 = (G__9969[(0)]);
var G__9971 = (G__9969[(1)]);
var G__9972 = (G__9969[(2)]);
var l = Math.sqrt((((G__9970 * G__9970) + (G__9971 * G__9971)) + (G__9972 * G__9972)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__9970 * l__$1));

(b[(1)] = (G__9971 * l__$1));

(b[(2)] = (G__9972 * l__$1));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__9973 = self__.buf;
var G__9974 = (G__9973[(0)]);
var G__9975 = (G__9973[(1)]);
var G__9976 = (G__9973[(2)]);
(b[(0)] = G__9974);

(b[(1)] = ((G__9975 * c) - (G__9976 * s)));

(b[(2)] = ((G__9975 * s) + (G__9976 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__9977 = self__.buf;
var G__9978 = (G__9977[(0)]);
var G__9979 = (G__9977[(1)]);
var G__9980 = (G__9977[(2)]);
(b[(0)] = ((G__9978 * c) + (G__9980 * s)));

(b[(1)] = G__9979);

(b[(2)] = ((G__9980 * c) - (G__9978 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__9981 = self__.buf;
var G__9982 = (G__9981[(0)]);
var G__9983 = (G__9981[(1)]);
var G__9984 = (G__9981[(2)]);
(b[(0)] = ((G__9982 * c) - (G__9983 * s)));

(b[(1)] = ((G__9982 * s) + (G__9983 * c)));

(b[(2)] = G__9984);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__9985 = self__.buf;
var G__9987 = (G__9985[(0)]);
var G__9988 = (G__9985[(1)]);
var G__9989 = (G__9985[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__9986 = v.buf;
var G__9990 = (G__9986[(0)]);
var G__9991 = (G__9986[(1)]);
var G__9992 = (G__9986[(2)]);
var ux_SINGLEQUOTE_ = (G__9990 * G__9987);
var uy_SINGLEQUOTE_ = (G__9990 * G__9988);
var uz_SINGLEQUOTE_ = (G__9990 * G__9989);
var vx_SINGLEQUOTE_ = (G__9991 * G__9987);
var vy_SINGLEQUOTE_ = (G__9991 * G__9988);
var vz_SINGLEQUOTE_ = (G__9991 * G__9989);
var wx_SINGLEQUOTE_ = (G__9992 * G__9987);
var wy_SINGLEQUOTE_ = (G__9992 * G__9988);
var wz_SINGLEQUOTE_ = (G__9992 * G__9989);
var vx2 = (G__9990 * G__9990);
var vy2 = (G__9991 * G__9991);
var vz2 = (G__9992 * G__9992);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__9990) + ((((vy2 + vz2) * G__9987) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__9990)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__9991) + ((((vx2 + vz2) * G__9988) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__9991)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__9992) + ((((vx2 + vy2) * G__9989) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__9992)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__9990 = cljs.core.nth.call(null,v,(0),0.0);
var G__9991 = cljs.core.nth.call(null,v,(1),0.0);
var G__9992 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__9990 * G__9987);
var uy_SINGLEQUOTE_ = (G__9990 * G__9988);
var uz_SINGLEQUOTE_ = (G__9990 * G__9989);
var vx_SINGLEQUOTE_ = (G__9991 * G__9987);
var vy_SINGLEQUOTE_ = (G__9991 * G__9988);
var vz_SINGLEQUOTE_ = (G__9991 * G__9989);
var wx_SINGLEQUOTE_ = (G__9992 * G__9987);
var wy_SINGLEQUOTE_ = (G__9992 * G__9988);
var wz_SINGLEQUOTE_ = (G__9992 * G__9989);
var vx2 = (G__9990 * G__9990);
var vy2 = (G__9991 * G__9991);
var vz2 = (G__9992 * G__9992);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__9990) + ((((vy2 + vz2) * G__9987) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__9990)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__9991) + ((((vx2 + vz2) * G__9988) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__9991)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__9992) + ((((vx2 + vy2) * G__9989) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__9992)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__9993 = self__.buf;
var G__9995 = (G__9993[(0)]);
var G__9996 = (G__9993[(1)]);
var G__9997 = (G__9993[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__9994 = v.buf;
var G__9998 = (G__9994[(0)]);
var G__9999 = (G__9994[(1)]);
var G__10000 = (G__9994[(2)]);
var d = ((((G__9995 * G__9998) + (G__9996 * G__9999)) + (G__9997 * G__10000)) * 2.0);
(b[(0)] = ((G__9998 * d) - G__9995));

(b[(1)] = ((G__9999 * d) - G__9996));

(b[(2)] = ((G__10000 * d) - G__9997));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__9998 = cljs.core.nth.call(null,v,(0),0.0);
var G__9999 = cljs.core.nth.call(null,v,(1),0.0);
var G__10000 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__9995 * G__9998) + (G__9996 * G__9999)) + (G__9997 * G__10000)) * 2.0);
(b[(0)] = ((G__9998 * d) - G__9995));

(b[(1)] = ((G__9999 * d) - G__9996));

(b[(2)] = ((G__10000 * d) - G__9997));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10001_10414 = self__.buf;
var G__10003_10415 = (G__10001_10414[(0)]);
var G__10004_10416 = (G__10001_10414[(1)]);
var G__10005_10417 = (G__10001_10414[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10002_10418 = v.buf;
var G__10006_10419 = (G__10002_10418[(0)]);
var G__10007_10420 = (G__10002_10418[(1)]);
var G__10008_10421 = (G__10002_10418[(2)]);
(b[(0)] = ((G__10004_10416 * G__10008_10421) - (G__10007_10420 * G__10005_10417)));

(b[(1)] = ((G__10005_10417 * G__10006_10419) - (G__10008_10421 * G__10003_10415)));

(b[(2)] = ((G__10003_10415 * G__10007_10420) - (G__10006_10419 * G__10004_10416)));
} else {
var G__10006_10422 = cljs.core.nth.call(null,v,(0),0.0);
var G__10007_10423 = cljs.core.nth.call(null,v,(1),0.0);
var G__10008_10424 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__10004_10416 * G__10008_10424) - (G__10007_10423 * G__10005_10417)));

(b[(1)] = ((G__10005_10417 * G__10006_10422) - (G__10008_10424 * G__10003_10415)));

(b[(2)] = ((G__10003_10415 * G__10007_10423) - (G__10006_10422 * G__10004_10416)));
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10009_10425 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10010_10426 = v.buf;
(self__.buf[(0)] = ((G__10009_10425[(0)]) - (G__10010_10426[(0)])));

(self__.buf[(1)] = ((G__10009_10425[(1)]) - (G__10010_10426[(1)])));

(self__.buf[(2)] = ((G__10009_10425[(2)]) - (G__10010_10426[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10009_10425[(0)]) - v));

(self__.buf[(1)] = ((G__10009_10425[(1)]) - v));

(self__.buf[(2)] = ((G__10009_10425[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10009_10425[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10009_10425[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10009_10425[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10023_10427 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10024_10428 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10025_10429 = ((!(G__10023_10427))?typeof v1 === 'number':null);
var G__10026_10430 = ((!(G__10024_10428))?typeof v2 === 'number':null);
var G__10011_10431 = self__.buf;
var G__10012_10432 = ((G__10023_10427)?v1.buf:null);
var G__10013_10433 = ((G__10024_10428)?v2.buf:null);
var G__10014_10434 = (G__10011_10431[(0)]);
var G__10015_10435 = (G__10011_10431[(1)]);
var G__10016_10436 = (G__10011_10431[(2)]);
var G__10017_10437 = ((G__10023_10427)?(G__10012_10432[(0)]):(cljs.core.truth_(G__10025_10429)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10018_10438 = ((G__10023_10427)?(G__10012_10432[(1)]):(cljs.core.truth_(G__10025_10429)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10019_10439 = ((G__10023_10427)?(G__10012_10432[(2)]):(cljs.core.truth_(G__10025_10429)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10020_10440 = ((G__10024_10428)?(G__10013_10433[(0)]):(cljs.core.truth_(G__10026_10430)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10021_10441 = ((G__10024_10428)?(G__10013_10433[(1)]):(cljs.core.truth_(G__10026_10430)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10022_10442 = ((G__10024_10428)?(G__10013_10433[(2)]):(cljs.core.truth_(G__10026_10430)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10014_10434 - G__10017_10437) - G__10020_10440));

(self__.buf[(1)] = ((G__10015_10435 - G__10018_10438) - G__10021_10441));

(self__.buf[(2)] = ((G__10016_10436 - G__10019_10439) - G__10022_10442));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10027_10443 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10028_10444 = v.buf;
(self__.buf[(0)] = ((G__10027_10443[(0)]) * (G__10028_10444[(0)])));

(self__.buf[(1)] = ((G__10027_10443[(1)]) * (G__10028_10444[(1)])));

(self__.buf[(2)] = ((G__10027_10443[(2)]) * (G__10028_10444[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10027_10443[(0)]) * v));

(self__.buf[(1)] = ((G__10027_10443[(1)]) * v));

(self__.buf[(2)] = ((G__10027_10443[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10027_10443[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10027_10443[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10027_10443[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10041_10445 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10042_10446 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10043_10447 = ((!(G__10041_10445))?typeof v1 === 'number':null);
var G__10044_10448 = ((!(G__10042_10446))?typeof v2 === 'number':null);
var G__10029_10449 = self__.buf;
var G__10030_10450 = ((G__10041_10445)?v1.buf:null);
var G__10031_10451 = ((G__10042_10446)?v2.buf:null);
var G__10032_10452 = (G__10029_10449[(0)]);
var G__10033_10453 = (G__10029_10449[(1)]);
var G__10034_10454 = (G__10029_10449[(2)]);
var G__10035_10455 = ((G__10041_10445)?(G__10030_10450[(0)]):(cljs.core.truth_(G__10043_10447)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10036_10456 = ((G__10041_10445)?(G__10030_10450[(1)]):(cljs.core.truth_(G__10043_10447)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10037_10457 = ((G__10041_10445)?(G__10030_10450[(2)]):(cljs.core.truth_(G__10043_10447)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10038_10458 = ((G__10042_10446)?(G__10031_10451[(0)]):(cljs.core.truth_(G__10044_10448)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10039_10459 = ((G__10042_10446)?(G__10031_10451[(1)]):(cljs.core.truth_(G__10044_10448)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10040_10460 = ((G__10042_10446)?(G__10031_10451[(2)]):(cljs.core.truth_(G__10044_10448)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10032_10452 * G__10035_10455) * G__10038_10458));

(self__.buf[(1)] = ((G__10033_10453 * G__10036_10456) * G__10039_10459));

(self__.buf[(2)] = ((G__10034_10454 * G__10037_10457) * G__10040_10460));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10057_10461 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10058_10462 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10059_10463 = ((!(G__10057_10461))?typeof a === 'number':null);
var G__10060_10464 = ((!(G__10058_10462))?typeof b === 'number':null);
var G__10045_10465 = self__.buf;
var G__10046_10466 = ((G__10057_10461)?a.buf:null);
var G__10047_10467 = ((G__10058_10462)?b.buf:null);
var G__10048_10468 = (G__10045_10465[(0)]);
var G__10049_10469 = (G__10045_10465[(1)]);
var G__10050_10470 = (G__10045_10465[(2)]);
var G__10051_10471 = ((G__10057_10461)?(G__10046_10466[(0)]):(cljs.core.truth_(G__10059_10463)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10052_10472 = ((G__10057_10461)?(G__10046_10466[(1)]):(cljs.core.truth_(G__10059_10463)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10053_10473 = ((G__10057_10461)?(G__10046_10466[(2)]):(cljs.core.truth_(G__10059_10463)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10054_10474 = ((G__10058_10462)?(G__10047_10467[(0)]):(cljs.core.truth_(G__10060_10464)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10055_10475 = ((G__10058_10462)?(G__10047_10467[(1)]):(cljs.core.truth_(G__10060_10464)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10056_10476 = ((G__10058_10462)?(G__10047_10467[(2)]):(cljs.core.truth_(G__10060_10464)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__10048_10468 - G__10051_10471) * G__10054_10474));

(self__.buf[(1)] = ((G__10049_10469 - G__10052_10472) * G__10055_10475));

(self__.buf[(2)] = ((G__10050_10470 - G__10053_10473) * G__10056_10476));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10073_10477 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10074_10478 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10075_10479 = ((!(G__10073_10477))?typeof a === 'number':null);
var G__10076_10480 = ((!(G__10074_10478))?typeof b === 'number':null);
var G__10061_10481 = self__.buf;
var G__10062_10482 = ((G__10073_10477)?a.buf:null);
var G__10063_10483 = ((G__10074_10478)?b.buf:null);
var G__10064_10484 = (G__10061_10481[(0)]);
var G__10065_10485 = (G__10061_10481[(1)]);
var G__10066_10486 = (G__10061_10481[(2)]);
var G__10067_10487 = ((G__10073_10477)?(G__10062_10482[(0)]):(cljs.core.truth_(G__10075_10479)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10068_10488 = ((G__10073_10477)?(G__10062_10482[(1)]):(cljs.core.truth_(G__10075_10479)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10069_10489 = ((G__10073_10477)?(G__10062_10482[(2)]):(cljs.core.truth_(G__10075_10479)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10070_10490 = ((G__10074_10478)?(G__10063_10483[(0)]):(cljs.core.truth_(G__10076_10480)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10071_10491 = ((G__10074_10478)?(G__10063_10483[(1)]):(cljs.core.truth_(G__10076_10480)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10072_10492 = ((G__10074_10478)?(G__10063_10483[(2)]):(cljs.core.truth_(G__10076_10480)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__10064_10484 * G__10067_10487) - G__10070_10490));

(self__.buf[(1)] = ((G__10065_10485 * G__10068_10488) - G__10071_10491));

(self__.buf[(2)] = ((G__10066_10486 * G__10069_10489) - G__10072_10492));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.math.core.abs.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10089_10493 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10090_10494 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10091_10495 = ((!(G__10089_10493))?typeof a === 'number':null);
var G__10092_10496 = ((!(G__10090_10494))?typeof b === 'number':null);
var G__10077_10497 = self__.buf;
var G__10078_10498 = ((G__10089_10493)?a.buf:null);
var G__10079_10499 = ((G__10090_10494)?b.buf:null);
var G__10080_10500 = (G__10077_10497[(0)]);
var G__10081_10501 = (G__10077_10497[(1)]);
var G__10082_10502 = (G__10077_10497[(2)]);
var G__10083_10503 = ((G__10089_10493)?(G__10078_10498[(0)]):(cljs.core.truth_(G__10091_10495)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10084_10504 = ((G__10089_10493)?(G__10078_10498[(1)]):(cljs.core.truth_(G__10091_10495)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10085_10505 = ((G__10089_10493)?(G__10078_10498[(2)]):(cljs.core.truth_(G__10091_10495)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10086_10506 = ((G__10090_10494)?(G__10079_10499[(0)]):(cljs.core.truth_(G__10092_10496)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10087_10507 = ((G__10090_10494)?(G__10079_10499[(1)]):(cljs.core.truth_(G__10092_10496)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10088_10508 = ((G__10090_10494)?(G__10079_10499[(2)]):(cljs.core.truth_(G__10092_10496)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__10080_10500 * G__10083_10503) + G__10086_10506));

(self__.buf[(1)] = ((G__10081_10501 * G__10084_10504) + G__10087_10507));

(self__.buf[(2)] = ((G__10082_10502 * G__10085_10505) + G__10088_10508));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10093_10509 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10094_10510 = v.buf;
(self__.buf[(0)] = ((G__10093_10509[(0)]) / (G__10094_10510[(0)])));

(self__.buf[(1)] = ((G__10093_10509[(1)]) / (G__10094_10510[(1)])));

(self__.buf[(2)] = ((G__10093_10509[(2)]) / (G__10094_10510[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10093_10509[(0)]) / v));

(self__.buf[(1)] = ((G__10093_10509[(1)]) / v));

(self__.buf[(2)] = ((G__10093_10509[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10093_10509[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10093_10509[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10093_10509[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10107_10511 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10108_10512 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10109_10513 = ((!(G__10107_10511))?typeof v1 === 'number':null);
var G__10110_10514 = ((!(G__10108_10512))?typeof v2 === 'number':null);
var G__10095_10515 = self__.buf;
var G__10096_10516 = ((G__10107_10511)?v1.buf:null);
var G__10097_10517 = ((G__10108_10512)?v2.buf:null);
var G__10098_10518 = (G__10095_10515[(0)]);
var G__10099_10519 = (G__10095_10515[(1)]);
var G__10100_10520 = (G__10095_10515[(2)]);
var G__10101_10521 = ((G__10107_10511)?(G__10096_10516[(0)]):(cljs.core.truth_(G__10109_10513)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10102_10522 = ((G__10107_10511)?(G__10096_10516[(1)]):(cljs.core.truth_(G__10109_10513)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10103_10523 = ((G__10107_10511)?(G__10096_10516[(2)]):(cljs.core.truth_(G__10109_10513)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10104_10524 = ((G__10108_10512)?(G__10097_10517[(0)]):(cljs.core.truth_(G__10110_10514)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10105_10525 = ((G__10108_10512)?(G__10097_10517[(1)]):(cljs.core.truth_(G__10110_10514)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10106_10526 = ((G__10108_10512)?(G__10097_10517[(2)]):(cljs.core.truth_(G__10110_10514)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10098_10518 / G__10101_10521) / G__10104_10524));

(self__.buf[(1)] = ((G__10099_10519 / G__10102_10522) / G__10105_10525));

(self__.buf[(2)] = ((G__10100_10520 / G__10103_10523) / G__10106_10526));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10111_10527 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10112_10528 = v.buf;
(self__.buf[(0)] = ((G__10111_10527[(0)]) + (G__10112_10528[(0)])));

(self__.buf[(1)] = ((G__10111_10527[(1)]) + (G__10112_10528[(1)])));

(self__.buf[(2)] = ((G__10111_10527[(2)]) + (G__10112_10528[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10111_10527[(0)]) + v));

(self__.buf[(1)] = ((G__10111_10527[(1)]) + v));

(self__.buf[(2)] = ((G__10111_10527[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10111_10527[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10111_10527[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10111_10527[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10125_10529 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10126_10530 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10127_10531 = ((!(G__10125_10529))?typeof v1 === 'number':null);
var G__10128_10532 = ((!(G__10126_10530))?typeof v2 === 'number':null);
var G__10113_10533 = self__.buf;
var G__10114_10534 = ((G__10125_10529)?v1.buf:null);
var G__10115_10535 = ((G__10126_10530)?v2.buf:null);
var G__10116_10536 = (G__10113_10533[(0)]);
var G__10117_10537 = (G__10113_10533[(1)]);
var G__10118_10538 = (G__10113_10533[(2)]);
var G__10119_10539 = ((G__10125_10529)?(G__10114_10534[(0)]):(cljs.core.truth_(G__10127_10531)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10120_10540 = ((G__10125_10529)?(G__10114_10534[(1)]):(cljs.core.truth_(G__10127_10531)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10121_10541 = ((G__10125_10529)?(G__10114_10534[(2)]):(cljs.core.truth_(G__10127_10531)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10122_10542 = ((G__10126_10530)?(G__10115_10535[(0)]):(cljs.core.truth_(G__10128_10532)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10123_10543 = ((G__10126_10530)?(G__10115_10535[(1)]):(cljs.core.truth_(G__10128_10532)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10124_10544 = ((G__10126_10530)?(G__10115_10535[(2)]):(cljs.core.truth_(G__10128_10532)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10116_10536 + G__10119_10539) + G__10122_10542));

(self__.buf[(1)] = ((G__10117_10537 + G__10120_10540) + G__10123_10543));

(self__.buf[(2)] = ((G__10118_10538 + G__10121_10541) + G__10124_10544));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10141_10545 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10142_10546 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10143_10547 = ((!(G__10141_10545))?typeof a === 'number':null);
var G__10144_10548 = ((!(G__10142_10546))?typeof b === 'number':null);
var G__10129_10549 = self__.buf;
var G__10130_10550 = ((G__10141_10545)?a.buf:null);
var G__10131_10551 = ((G__10142_10546)?b.buf:null);
var G__10132_10552 = (G__10129_10549[(0)]);
var G__10133_10553 = (G__10129_10549[(1)]);
var G__10134_10554 = (G__10129_10549[(2)]);
var G__10135_10555 = ((G__10141_10545)?(G__10130_10550[(0)]):(cljs.core.truth_(G__10143_10547)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10136_10556 = ((G__10141_10545)?(G__10130_10550[(1)]):(cljs.core.truth_(G__10143_10547)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10137_10557 = ((G__10141_10545)?(G__10130_10550[(2)]):(cljs.core.truth_(G__10143_10547)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10138_10558 = ((G__10142_10546)?(G__10131_10551[(0)]):(cljs.core.truth_(G__10144_10548)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10139_10559 = ((G__10142_10546)?(G__10131_10551[(1)]):(cljs.core.truth_(G__10144_10548)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10140_10560 = ((G__10142_10546)?(G__10131_10551[(2)]):(cljs.core.truth_(G__10144_10548)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__10132_10552 + G__10135_10555) * G__10138_10558));

(self__.buf[(1)] = ((G__10133_10553 + G__10136_10556) * G__10139_10559));

(self__.buf[(2)] = ((G__10134_10554 + G__10137_10557) * G__10140_10560));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__7085__auto__ = self__._hash;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2))));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:thi.ng.geom.core.vector.vec3.call(null,v));
return Math.acos(thi.ng.geom.core.dot.call(null,thi.ng.geom.core.normalize.call(null,___$1),thi.ng.geom.core.normalize.call(null,v__$1)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10145 = self__.buf;
var G__10147 = (G__10145[(0)]);
var G__10148 = (G__10145[(1)]);
var G__10149 = (G__10145[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10146 = v.buf;
var G__10150 = (G__10146[(0)]);
var G__10151 = (G__10146[(1)]);
var G__10152 = (G__10146[(2)]);
var dx = (G__10147 - G__10150);
var dy = (G__10148 - G__10151);
var dz = (G__10149 - G__10152);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__10150 = cljs.core.nth.call(null,v,(0),0.0);
var G__10151 = cljs.core.nth.call(null,v,(1),0.0);
var G__10152 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__10147 - G__10150);
var dy = (G__10148 - G__10151);
var dz = (G__10149 - G__10152);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10165_10561 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10166_10562 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10167_10563 = ((!(G__10165_10561))?typeof a === 'number':null);
var G__10168_10564 = ((!(G__10166_10562))?typeof b === 'number':null);
var G__10153_10565 = self__.buf;
var G__10154_10566 = ((G__10165_10561)?a.buf:null);
var G__10155_10567 = ((G__10166_10562)?b.buf:null);
var G__10156_10568 = (G__10153_10565[(0)]);
var G__10157_10569 = (G__10153_10565[(1)]);
var G__10158_10570 = (G__10153_10565[(2)]);
var G__10159_10571 = ((G__10165_10561)?(G__10154_10566[(0)]):(cljs.core.truth_(G__10167_10563)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10160_10572 = ((G__10165_10561)?(G__10154_10566[(1)]):(cljs.core.truth_(G__10167_10563)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10161_10573 = ((G__10165_10561)?(G__10154_10566[(2)]):(cljs.core.truth_(G__10167_10563)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10162_10574 = ((G__10166_10562)?(G__10155_10567[(0)]):(cljs.core.truth_(G__10168_10564)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10163_10575 = ((G__10166_10562)?(G__10155_10567[(1)]):(cljs.core.truth_(G__10168_10564)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10164_10576 = ((G__10166_10562)?(G__10155_10567[(2)]):(cljs.core.truth_(G__10168_10564)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__9317__auto__[(0)] = ((G__10156_10568 * G__10159_10571) - G__10162_10574));

(dest__9317__auto__[(1)] = ((G__10157_10569 * G__10160_10572) - G__10163_10575));

(dest__9317__auto__[(2)] = ((G__10158_10570 * G__10161_10573) - G__10164_10576));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9306__auto__ = (new Float32Array((3)));
var G__10169_10577 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10170_10578 = v.buf;
(dest__9306__auto__[(0)] = ((G__10169_10577[(0)]) * (G__10170_10578[(0)])));

(dest__9306__auto__[(1)] = ((G__10169_10577[(1)]) * (G__10170_10578[(1)])));

(dest__9306__auto__[(2)] = ((G__10169_10577[(2)]) * (G__10170_10578[(2)])));
} else {
if(typeof v === 'number'){
(dest__9306__auto__[(0)] = ((G__10169_10577[(0)]) * v));

(dest__9306__auto__[(1)] = ((G__10169_10577[(1)]) * v));

(dest__9306__auto__[(2)] = ((G__10169_10577[(2)]) * v));
} else {
(dest__9306__auto__[(0)] = ((G__10169_10577[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9306__auto__[(1)] = ((G__10169_10577[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__9306__auto__[(2)] = ((G__10169_10577[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9306__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10183_10579 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10184_10580 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10185_10581 = ((!(G__10183_10579))?typeof v1 === 'number':null);
var G__10186_10582 = ((!(G__10184_10580))?typeof v2 === 'number':null);
var G__10171_10583 = self__.buf;
var G__10172_10584 = ((G__10183_10579)?v1.buf:null);
var G__10173_10585 = ((G__10184_10580)?v2.buf:null);
var G__10174_10586 = (G__10171_10583[(0)]);
var G__10175_10587 = (G__10171_10583[(1)]);
var G__10176_10588 = (G__10171_10583[(2)]);
var G__10177_10589 = ((G__10183_10579)?(G__10172_10584[(0)]):(cljs.core.truth_(G__10185_10581)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10178_10590 = ((G__10183_10579)?(G__10172_10584[(1)]):(cljs.core.truth_(G__10185_10581)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10179_10591 = ((G__10183_10579)?(G__10172_10584[(2)]):(cljs.core.truth_(G__10185_10581)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10180_10592 = ((G__10184_10580)?(G__10173_10585[(0)]):(cljs.core.truth_(G__10186_10582)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10181_10593 = ((G__10184_10580)?(G__10173_10585[(1)]):(cljs.core.truth_(G__10186_10582)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10182_10594 = ((G__10184_10580)?(G__10173_10585[(2)]):(cljs.core.truth_(G__10186_10582)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9317__auto__[(0)] = ((G__10174_10586 * G__10177_10589) * G__10180_10592));

(dest__9317__auto__[(1)] = ((G__10175_10587 * G__10178_10590) * G__10181_10593));

(dest__9317__auto__[(2)] = ((G__10176_10588 * G__10179_10591) * G__10182_10594));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10187 = self__.buf;
var dest__9295__auto__ = (new Float32Array((3)));
(dest__9295__auto__[(0)] = ((G__10187[(0)]) * x));

(dest__9295__auto__[(1)] = ((G__10187[(1)]) * y));

(dest__9295__auto__[(2)] = ((G__10187[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__9295__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9289__auto__ = (new Float32Array((3)));
var G__10188_10595 = self__.buf;
(dest__9289__auto__[(0)] = (- (G__10188_10595[(0)])));

(dest__9289__auto__[(1)] = (- (G__10188_10595[(1)])));

(dest__9289__auto__[(2)] = (- (G__10188_10595[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__9289__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9306__auto__ = (new Float32Array((3)));
var G__10189_10596 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10190_10597 = v.buf;
(dest__9306__auto__[(0)] = ((G__10189_10596[(0)]) - (G__10190_10597[(0)])));

(dest__9306__auto__[(1)] = ((G__10189_10596[(1)]) - (G__10190_10597[(1)])));

(dest__9306__auto__[(2)] = ((G__10189_10596[(2)]) - (G__10190_10597[(2)])));
} else {
if(typeof v === 'number'){
(dest__9306__auto__[(0)] = ((G__10189_10596[(0)]) - v));

(dest__9306__auto__[(1)] = ((G__10189_10596[(1)]) - v));

(dest__9306__auto__[(2)] = ((G__10189_10596[(2)]) - v));
} else {
(dest__9306__auto__[(0)] = ((G__10189_10596[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__9306__auto__[(1)] = ((G__10189_10596[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__9306__auto__[(2)] = ((G__10189_10596[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9306__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10203_10598 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10204_10599 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10205_10600 = ((!(G__10203_10598))?typeof v1 === 'number':null);
var G__10206_10601 = ((!(G__10204_10599))?typeof v2 === 'number':null);
var G__10191_10602 = self__.buf;
var G__10192_10603 = ((G__10203_10598)?v1.buf:null);
var G__10193_10604 = ((G__10204_10599)?v2.buf:null);
var G__10194_10605 = (G__10191_10602[(0)]);
var G__10195_10606 = (G__10191_10602[(1)]);
var G__10196_10607 = (G__10191_10602[(2)]);
var G__10197_10608 = ((G__10203_10598)?(G__10192_10603[(0)]):(cljs.core.truth_(G__10205_10600)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10198_10609 = ((G__10203_10598)?(G__10192_10603[(1)]):(cljs.core.truth_(G__10205_10600)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10199_10610 = ((G__10203_10598)?(G__10192_10603[(2)]):(cljs.core.truth_(G__10205_10600)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10200_10611 = ((G__10204_10599)?(G__10193_10604[(0)]):(cljs.core.truth_(G__10206_10601)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10201_10612 = ((G__10204_10599)?(G__10193_10604[(1)]):(cljs.core.truth_(G__10206_10601)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10202_10613 = ((G__10204_10599)?(G__10193_10604[(2)]):(cljs.core.truth_(G__10206_10601)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9317__auto__[(0)] = ((G__10194_10605 - G__10197_10608) - G__10200_10611));

(dest__9317__auto__[(1)] = ((G__10195_10606 - G__10198_10609) - G__10201_10612));

(dest__9317__auto__[(2)] = ((G__10196_10607 - G__10199_10610) - G__10202_10613));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10207 = self__.buf;
var dest__9295__auto__ = (new Float32Array((3)));
(dest__9295__auto__[(0)] = ((G__10207[(0)]) - x));

(dest__9295__auto__[(1)] = ((G__10207[(1)]) - y));

(dest__9295__auto__[(2)] = ((G__10207[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__9295__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10220_10614 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10221_10615 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10222_10616 = ((!(G__10220_10614))?typeof a === 'number':null);
var G__10223_10617 = ((!(G__10221_10615))?typeof b === 'number':null);
var G__10208_10618 = self__.buf;
var G__10209_10619 = ((G__10220_10614)?a.buf:null);
var G__10210_10620 = ((G__10221_10615)?b.buf:null);
var G__10211_10621 = (G__10208_10618[(0)]);
var G__10212_10622 = (G__10208_10618[(1)]);
var G__10213_10623 = (G__10208_10618[(2)]);
var G__10214_10624 = ((G__10220_10614)?(G__10209_10619[(0)]):(cljs.core.truth_(G__10222_10616)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10215_10625 = ((G__10220_10614)?(G__10209_10619[(1)]):(cljs.core.truth_(G__10222_10616)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10216_10626 = ((G__10220_10614)?(G__10209_10619[(2)]):(cljs.core.truth_(G__10222_10616)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10217_10627 = ((G__10221_10615)?(G__10210_10620[(0)]):(cljs.core.truth_(G__10223_10617)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10218_10628 = ((G__10221_10615)?(G__10210_10620[(1)]):(cljs.core.truth_(G__10223_10617)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10219_10629 = ((G__10221_10615)?(G__10210_10620[(2)]):(cljs.core.truth_(G__10223_10617)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__9317__auto__[(0)] = ((G__10211_10621 * G__10214_10624) + G__10217_10627));

(dest__9317__auto__[(1)] = ((G__10212_10622 * G__10215_10625) + G__10218_10628));

(dest__9317__auto__[(2)] = ((G__10213_10623 * G__10216_10626) + G__10219_10629));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10236_10630 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10237_10631 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10238_10632 = ((!(G__10236_10630))?typeof a === 'number':null);
var G__10239_10633 = ((!(G__10237_10631))?typeof b === 'number':null);
var G__10224_10634 = self__.buf;
var G__10225_10635 = ((G__10236_10630)?a.buf:null);
var G__10226_10636 = ((G__10237_10631)?b.buf:null);
var G__10227_10637 = (G__10224_10634[(0)]);
var G__10228_10638 = (G__10224_10634[(1)]);
var G__10229_10639 = (G__10224_10634[(2)]);
var G__10230_10640 = ((G__10236_10630)?(G__10225_10635[(0)]):(cljs.core.truth_(G__10238_10632)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10231_10641 = ((G__10236_10630)?(G__10225_10635[(1)]):(cljs.core.truth_(G__10238_10632)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10232_10642 = ((G__10236_10630)?(G__10225_10635[(2)]):(cljs.core.truth_(G__10238_10632)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10233_10643 = ((G__10237_10631)?(G__10226_10636[(0)]):(cljs.core.truth_(G__10239_10633)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10234_10644 = ((G__10237_10631)?(G__10226_10636[(1)]):(cljs.core.truth_(G__10239_10633)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10235_10645 = ((G__10237_10631)?(G__10226_10636[(2)]):(cljs.core.truth_(G__10239_10633)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__9317__auto__[(0)] = ((G__10227_10637 + G__10230_10640) * G__10233_10643));

(dest__9317__auto__[(1)] = ((G__10228_10638 + G__10231_10641) * G__10234_10644));

(dest__9317__auto__[(2)] = ((G__10229_10639 + G__10232_10642) * G__10235_10645));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9289__auto__ = (new Float32Array((3)));
var G__10240_10646 = self__.buf;
(dest__9289__auto__[(0)] = ((1) / (G__10240_10646[(0)])));

(dest__9289__auto__[(1)] = ((1) / (G__10240_10646[(1)])));

(dest__9289__auto__[(2)] = ((1) / (G__10240_10646[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__9289__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9306__auto__ = (new Float32Array((3)));
var G__10241_10647 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10242_10648 = v.buf;
(dest__9306__auto__[(0)] = ((G__10241_10647[(0)]) / (G__10242_10648[(0)])));

(dest__9306__auto__[(1)] = ((G__10241_10647[(1)]) / (G__10242_10648[(1)])));

(dest__9306__auto__[(2)] = ((G__10241_10647[(2)]) / (G__10242_10648[(2)])));
} else {
if(typeof v === 'number'){
(dest__9306__auto__[(0)] = ((G__10241_10647[(0)]) / v));

(dest__9306__auto__[(1)] = ((G__10241_10647[(1)]) / v));

(dest__9306__auto__[(2)] = ((G__10241_10647[(2)]) / v));
} else {
(dest__9306__auto__[(0)] = ((G__10241_10647[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__9306__auto__[(1)] = ((G__10241_10647[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__9306__auto__[(2)] = ((G__10241_10647[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9306__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10255_10649 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10256_10650 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10257_10651 = ((!(G__10255_10649))?typeof v1 === 'number':null);
var G__10258_10652 = ((!(G__10256_10650))?typeof v2 === 'number':null);
var G__10243_10653 = self__.buf;
var G__10244_10654 = ((G__10255_10649)?v1.buf:null);
var G__10245_10655 = ((G__10256_10650)?v2.buf:null);
var G__10246_10656 = (G__10243_10653[(0)]);
var G__10247_10657 = (G__10243_10653[(1)]);
var G__10248_10658 = (G__10243_10653[(2)]);
var G__10249_10659 = ((G__10255_10649)?(G__10244_10654[(0)]):(cljs.core.truth_(G__10257_10651)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10250_10660 = ((G__10255_10649)?(G__10244_10654[(1)]):(cljs.core.truth_(G__10257_10651)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10251_10661 = ((G__10255_10649)?(G__10244_10654[(2)]):(cljs.core.truth_(G__10257_10651)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10252_10662 = ((G__10256_10650)?(G__10245_10655[(0)]):(cljs.core.truth_(G__10258_10652)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10253_10663 = ((G__10256_10650)?(G__10245_10655[(1)]):(cljs.core.truth_(G__10258_10652)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10254_10664 = ((G__10256_10650)?(G__10245_10655[(2)]):(cljs.core.truth_(G__10258_10652)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9317__auto__[(0)] = ((G__10246_10656 / G__10249_10659) / G__10252_10662));

(dest__9317__auto__[(1)] = ((G__10247_10657 / G__10250_10660) / G__10253_10663));

(dest__9317__auto__[(2)] = ((G__10248_10658 / G__10251_10661) / G__10254_10664));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10259 = self__.buf;
var dest__9295__auto__ = (new Float32Array((3)));
(dest__9295__auto__[(0)] = ((G__10259[(0)]) / x));

(dest__9295__auto__[(1)] = ((G__10259[(1)]) / y));

(dest__9295__auto__[(2)] = ((G__10259[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__9295__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9306__auto__ = (new Float32Array((3)));
var G__10260_10665 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10261_10666 = v.buf;
(dest__9306__auto__[(0)] = ((G__10260_10665[(0)]) + (G__10261_10666[(0)])));

(dest__9306__auto__[(1)] = ((G__10260_10665[(1)]) + (G__10261_10666[(1)])));

(dest__9306__auto__[(2)] = ((G__10260_10665[(2)]) + (G__10261_10666[(2)])));
} else {
if(typeof v === 'number'){
(dest__9306__auto__[(0)] = ((G__10260_10665[(0)]) + v));

(dest__9306__auto__[(1)] = ((G__10260_10665[(1)]) + v));

(dest__9306__auto__[(2)] = ((G__10260_10665[(2)]) + v));
} else {
(dest__9306__auto__[(0)] = ((G__10260_10665[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9306__auto__[(1)] = ((G__10260_10665[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__9306__auto__[(2)] = ((G__10260_10665[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9306__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10274_10667 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10275_10668 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10276_10669 = ((!(G__10274_10667))?typeof v1 === 'number':null);
var G__10277_10670 = ((!(G__10275_10668))?typeof v2 === 'number':null);
var G__10262_10671 = self__.buf;
var G__10263_10672 = ((G__10274_10667)?v1.buf:null);
var G__10264_10673 = ((G__10275_10668)?v2.buf:null);
var G__10265_10674 = (G__10262_10671[(0)]);
var G__10266_10675 = (G__10262_10671[(1)]);
var G__10267_10676 = (G__10262_10671[(2)]);
var G__10268_10677 = ((G__10274_10667)?(G__10263_10672[(0)]):(cljs.core.truth_(G__10276_10669)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10269_10678 = ((G__10274_10667)?(G__10263_10672[(1)]):(cljs.core.truth_(G__10276_10669)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10270_10679 = ((G__10274_10667)?(G__10263_10672[(2)]):(cljs.core.truth_(G__10276_10669)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10271_10680 = ((G__10275_10668)?(G__10264_10673[(0)]):(cljs.core.truth_(G__10277_10670)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10272_10681 = ((G__10275_10668)?(G__10264_10673[(1)]):(cljs.core.truth_(G__10277_10670)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10273_10682 = ((G__10275_10668)?(G__10264_10673[(2)]):(cljs.core.truth_(G__10277_10670)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9317__auto__[(0)] = ((G__10265_10674 + G__10268_10677) + G__10271_10680));

(dest__9317__auto__[(1)] = ((G__10266_10675 + G__10269_10678) + G__10272_10681));

(dest__9317__auto__[(2)] = ((G__10267_10676 + G__10270_10679) + G__10273_10682));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10278 = self__.buf;
var dest__9295__auto__ = (new Float32Array((3)));
(dest__9295__auto__[(0)] = ((G__10278[(0)]) + x));

(dest__9295__auto__[(1)] = ((G__10278[(1)]) + y));

(dest__9295__auto__[(2)] = ((G__10278[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__9295__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9289__auto__ = (new Float32Array((3)));
var G__10279_10683 = self__.buf;
(dest__9289__auto__[(0)] = thi.ng.math.core.abs.call(null,(G__10279_10683[(0)])));

(dest__9289__auto__[(1)] = thi.ng.math.core.abs.call(null,(G__10279_10683[(1)])));

(dest__9289__auto__[(2)] = thi.ng.math.core.abs.call(null,(G__10279_10683[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__9289__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10292_10684 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10293_10685 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10294_10686 = ((!(G__10292_10684))?typeof a === 'number':null);
var G__10295_10687 = ((!(G__10293_10685))?typeof b === 'number':null);
var G__10280_10688 = self__.buf;
var G__10281_10689 = ((G__10292_10684)?a.buf:null);
var G__10282_10690 = ((G__10293_10685)?b.buf:null);
var G__10283_10691 = (G__10280_10688[(0)]);
var G__10284_10692 = (G__10280_10688[(1)]);
var G__10285_10693 = (G__10280_10688[(2)]);
var G__10286_10694 = ((G__10292_10684)?(G__10281_10689[(0)]):(cljs.core.truth_(G__10294_10686)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10287_10695 = ((G__10292_10684)?(G__10281_10689[(1)]):(cljs.core.truth_(G__10294_10686)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10288_10696 = ((G__10292_10684)?(G__10281_10689[(2)]):(cljs.core.truth_(G__10294_10686)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10289_10697 = ((G__10293_10685)?(G__10282_10690[(0)]):(cljs.core.truth_(G__10295_10687)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10290_10698 = ((G__10293_10685)?(G__10282_10690[(1)]):(cljs.core.truth_(G__10295_10687)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10291_10699 = ((G__10293_10685)?(G__10282_10690[(2)]):(cljs.core.truth_(G__10295_10687)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__9317__auto__[(0)] = ((G__10283_10691 - G__10286_10694) * G__10289_10697));

(dest__9317__auto__[(1)] = ((G__10284_10692 - G__10287_10695) * G__10290_10698));

(dest__9317__auto__[(2)] = ((G__10285_10693 - G__10288_10696) * G__10291_10699));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9306__auto__ = (new Float32Array((3)));
var G__10296_10700 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10297_10701 = v.buf;
(dest__9306__auto__[(0)] = ((G__10296_10700[(0)]) + (G__10297_10701[(0)])));

(dest__9306__auto__[(1)] = ((G__10296_10700[(1)]) + (G__10297_10701[(1)])));

(dest__9306__auto__[(2)] = ((G__10296_10700[(2)]) + (G__10297_10701[(2)])));
} else {
if(typeof v === 'number'){
(dest__9306__auto__[(0)] = ((G__10296_10700[(0)]) + v));

(dest__9306__auto__[(1)] = ((G__10296_10700[(1)]) + v));

(dest__9306__auto__[(2)] = ((G__10296_10700[(2)]) + v));
} else {
(dest__9306__auto__[(0)] = ((G__10296_10700[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9306__auto__[(1)] = ((G__10296_10700[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__9306__auto__[(2)] = ((G__10296_10700[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9306__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10310_10702 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10311_10703 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10312_10704 = ((!(G__10310_10702))?typeof v1 === 'number':null);
var G__10313_10705 = ((!(G__10311_10703))?typeof v2 === 'number':null);
var G__10298_10706 = self__.buf;
var G__10299_10707 = ((G__10310_10702)?v1.buf:null);
var G__10300_10708 = ((G__10311_10703)?v2.buf:null);
var G__10301_10709 = (G__10298_10706[(0)]);
var G__10302_10710 = (G__10298_10706[(1)]);
var G__10303_10711 = (G__10298_10706[(2)]);
var G__10304_10712 = ((G__10310_10702)?(G__10299_10707[(0)]):(cljs.core.truth_(G__10312_10704)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10305_10713 = ((G__10310_10702)?(G__10299_10707[(1)]):(cljs.core.truth_(G__10312_10704)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10306_10714 = ((G__10310_10702)?(G__10299_10707[(2)]):(cljs.core.truth_(G__10312_10704)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10307_10715 = ((G__10311_10703)?(G__10300_10708[(0)]):(cljs.core.truth_(G__10313_10705)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10308_10716 = ((G__10311_10703)?(G__10300_10708[(1)]):(cljs.core.truth_(G__10313_10705)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10309_10717 = ((G__10311_10703)?(G__10300_10708[(2)]):(cljs.core.truth_(G__10313_10705)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9317__auto__[(0)] = ((G__10301_10709 + G__10304_10712) + G__10307_10715));

(dest__9317__auto__[(1)] = ((G__10302_10710 + G__10305_10713) + G__10308_10716));

(dest__9317__auto__[(2)] = ((G__10303_10711 + G__10306_10714) + G__10309_10717));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10314 = self__.buf;
var dest__9295__auto__ = (new Float32Array((3)));
(dest__9295__auto__[(0)] = ((G__10314[(0)]) + x));

(dest__9295__auto__[(1)] = ((G__10314[(1)]) + y));

(dest__9295__auto__[(2)] = ((G__10314[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__9295__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9306__auto__ = (new Float32Array((3)));
var G__10315_10718 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10316_10719 = v.buf;
(dest__9306__auto__[(0)] = ((G__10315_10718[(0)]) * (G__10316_10719[(0)])));

(dest__9306__auto__[(1)] = ((G__10315_10718[(1)]) * (G__10316_10719[(1)])));

(dest__9306__auto__[(2)] = ((G__10315_10718[(2)]) * (G__10316_10719[(2)])));
} else {
if(typeof v === 'number'){
(dest__9306__auto__[(0)] = ((G__10315_10718[(0)]) * v));

(dest__9306__auto__[(1)] = ((G__10315_10718[(1)]) * v));

(dest__9306__auto__[(2)] = ((G__10315_10718[(2)]) * v));
} else {
(dest__9306__auto__[(0)] = ((G__10315_10718[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9306__auto__[(1)] = ((G__10315_10718[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__9306__auto__[(2)] = ((G__10315_10718[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9306__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10329_10720 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10330_10721 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10331_10722 = ((!(G__10329_10720))?typeof v1 === 'number':null);
var G__10332_10723 = ((!(G__10330_10721))?typeof v2 === 'number':null);
var G__10317_10724 = self__.buf;
var G__10318_10725 = ((G__10329_10720)?v1.buf:null);
var G__10319_10726 = ((G__10330_10721)?v2.buf:null);
var G__10320_10727 = (G__10317_10724[(0)]);
var G__10321_10728 = (G__10317_10724[(1)]);
var G__10322_10729 = (G__10317_10724[(2)]);
var G__10323_10730 = ((G__10329_10720)?(G__10318_10725[(0)]):(cljs.core.truth_(G__10331_10722)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__10324_10731 = ((G__10329_10720)?(G__10318_10725[(1)]):(cljs.core.truth_(G__10331_10722)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__10325_10732 = ((G__10329_10720)?(G__10318_10725[(2)]):(cljs.core.truth_(G__10331_10722)?v1:cljs.core.nth.call(null,v1,(2),1.0)));
var G__10326_10733 = ((G__10330_10721)?(G__10319_10726[(0)]):(cljs.core.truth_(G__10332_10723)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__10327_10734 = ((G__10330_10721)?(G__10319_10726[(1)]):(cljs.core.truth_(G__10332_10723)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
var G__10328_10735 = ((G__10330_10721)?(G__10319_10726[(2)]):(cljs.core.truth_(G__10332_10723)?v2:cljs.core.nth.call(null,v2,(2),1.0)));
(dest__9317__auto__[(0)] = ((G__10320_10727 * G__10323_10730) * G__10326_10733));

(dest__9317__auto__[(1)] = ((G__10321_10728 * G__10324_10731) * G__10327_10734));

(dest__9317__auto__[(2)] = ((G__10322_10729 * G__10325_10732) * G__10328_10735));

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10333 = self__.buf;
var dest__9295__auto__ = (new Float32Array((3)));
(dest__9295__auto__[(0)] = ((G__10333[(0)]) * x));

(dest__9295__auto__[(1)] = ((G__10333[(1)]) * y));

(dest__9295__auto__[(2)] = ((G__10333[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__9295__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.core.vector.Vec3.prototype.call = (function() {
var G__10736 = null;
var G__10736__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__10736__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__10736 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__10736__2.call(this,self__,k);
case 3:
return G__10736__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10736.cljs$core$IFn$_invoke$arity$2 = G__10736__2;
G__10736.cljs$core$IFn$_invoke$arity$3 = G__10736__3;
return G__10736;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args9962){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9962)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9306__auto__ = (new Float32Array((3)));
var G__10334_10737 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10335_10738 = v.buf;
(dest__9306__auto__[(0)] = (function (){var a__8823__auto__ = (G__10334_10737[(0)]);
var b__8824__auto__ = (G__10335_10738[(0)]);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9306__auto__[(1)] = (function (){var a__8823__auto__ = (G__10334_10737[(1)]);
var b__8824__auto__ = (G__10335_10738[(1)]);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9306__auto__[(2)] = (function (){var a__8823__auto__ = (G__10334_10737[(2)]);
var b__8824__auto__ = (G__10335_10738[(2)]);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9306__auto__[(0)] = (function (){var a__8823__auto__ = (G__10334_10737[(0)]);
var b__8824__auto__ = v;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9306__auto__[(1)] = (function (){var a__8823__auto__ = (G__10334_10737[(1)]);
var b__8824__auto__ = v;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9306__auto__[(2)] = (function (){var a__8823__auto__ = (G__10334_10737[(2)]);
var b__8824__auto__ = v;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());
} else {
(dest__9306__auto__[(0)] = (function (){var a__8823__auto__ = (G__10334_10737[(0)]);
var b__8824__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9306__auto__[(1)] = (function (){var a__8823__auto__ = (G__10334_10737[(1)]);
var b__8824__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9306__auto__[(2)] = (function (){var a__8823__auto__ = (G__10334_10737[(2)]);
var b__8824__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9306__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10348_10739 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__10349_10740 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10350_10741 = ((!(G__10348_10739))?typeof v === 'number':null);
var G__10351_10742 = ((!(G__10349_10740))?typeof v2 === 'number':null);
var G__10336_10743 = self__.buf;
var G__10337_10744 = ((G__10348_10739)?v.buf:null);
var G__10338_10745 = ((G__10349_10740)?v2.buf:null);
var G__10339_10746 = (G__10336_10743[(0)]);
var G__10340_10747 = (G__10336_10743[(1)]);
var G__10341_10748 = (G__10336_10743[(2)]);
var G__10342_10749 = ((G__10348_10739)?(G__10337_10744[(0)]):(cljs.core.truth_(G__10350_10741)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10343_10750 = ((G__10348_10739)?(G__10337_10744[(1)]):(cljs.core.truth_(G__10350_10741)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10344_10751 = ((G__10348_10739)?(G__10337_10744[(2)]):(cljs.core.truth_(G__10350_10741)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10345_10752 = ((G__10349_10740)?(G__10338_10745[(0)]):(cljs.core.truth_(G__10351_10742)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10346_10753 = ((G__10349_10740)?(G__10338_10745[(1)]):(cljs.core.truth_(G__10351_10742)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10347_10754 = ((G__10349_10740)?(G__10338_10745[(2)]):(cljs.core.truth_(G__10351_10742)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9317__auto__[(0)] = (function (){var a__8823__auto__ = (function (){var a__8823__auto__ = G__10339_10746;
var b__8824__auto__ = G__10342_10749;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})();
var b__8824__auto__ = G__10345_10752;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9317__auto__[(1)] = (function (){var a__8823__auto__ = (function (){var a__8823__auto__ = G__10340_10747;
var b__8824__auto__ = G__10343_10750;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})();
var b__8824__auto__ = G__10346_10753;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

(dest__9317__auto__[(2)] = (function (){var a__8823__auto__ = (function (){var a__8823__auto__ = G__10341_10748;
var b__8824__auto__ = G__10344_10751;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})();
var b__8824__auto__ = G__10347_10754;
if((a__8823__auto__ <= b__8824__auto__)){
return a__8823__auto__;
} else {
return b__8824__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9306__auto__ = (new Float32Array((3)));
var G__10352_10755 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10353_10756 = v.buf;
(dest__9306__auto__[(0)] = (function (){var a__8830__auto__ = (G__10352_10755[(0)]);
var b__8831__auto__ = (G__10353_10756[(0)]);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9306__auto__[(1)] = (function (){var a__8830__auto__ = (G__10352_10755[(1)]);
var b__8831__auto__ = (G__10353_10756[(1)]);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9306__auto__[(2)] = (function (){var a__8830__auto__ = (G__10352_10755[(2)]);
var b__8831__auto__ = (G__10353_10756[(2)]);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9306__auto__[(0)] = (function (){var a__8830__auto__ = (G__10352_10755[(0)]);
var b__8831__auto__ = v;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9306__auto__[(1)] = (function (){var a__8830__auto__ = (G__10352_10755[(1)]);
var b__8831__auto__ = v;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9306__auto__[(2)] = (function (){var a__8830__auto__ = (G__10352_10755[(2)]);
var b__8831__auto__ = v;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());
} else {
(dest__9306__auto__[(0)] = (function (){var a__8830__auto__ = (G__10352_10755[(0)]);
var b__8831__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9306__auto__[(1)] = (function (){var a__8830__auto__ = (G__10352_10755[(1)]);
var b__8831__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9306__auto__[(2)] = (function (){var a__8830__auto__ = (G__10352_10755[(2)]);
var b__8831__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9306__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9317__auto__ = (new Float32Array((3)));
var G__10366_10757 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__10367_10758 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10368_10759 = ((!(G__10366_10757))?typeof v === 'number':null);
var G__10369_10760 = ((!(G__10367_10758))?typeof v2 === 'number':null);
var G__10354_10761 = self__.buf;
var G__10355_10762 = ((G__10366_10757)?v.buf:null);
var G__10356_10763 = ((G__10367_10758)?v2.buf:null);
var G__10357_10764 = (G__10354_10761[(0)]);
var G__10358_10765 = (G__10354_10761[(1)]);
var G__10359_10766 = (G__10354_10761[(2)]);
var G__10360_10767 = ((G__10366_10757)?(G__10355_10762[(0)]):(cljs.core.truth_(G__10368_10759)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10361_10768 = ((G__10366_10757)?(G__10355_10762[(1)]):(cljs.core.truth_(G__10368_10759)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10362_10769 = ((G__10366_10757)?(G__10355_10762[(2)]):(cljs.core.truth_(G__10368_10759)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10363_10770 = ((G__10367_10758)?(G__10356_10763[(0)]):(cljs.core.truth_(G__10369_10760)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10364_10771 = ((G__10367_10758)?(G__10356_10763[(1)]):(cljs.core.truth_(G__10369_10760)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10365_10772 = ((G__10367_10758)?(G__10356_10763[(2)]):(cljs.core.truth_(G__10369_10760)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9317__auto__[(0)] = (function (){var a__8830__auto__ = (function (){var a__8830__auto__ = G__10357_10764;
var b__8831__auto__ = G__10360_10767;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})();
var b__8831__auto__ = G__10363_10770;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9317__auto__[(1)] = (function (){var a__8830__auto__ = (function (){var a__8830__auto__ = G__10358_10765;
var b__8831__auto__ = G__10361_10768;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})();
var b__8831__auto__ = G__10364_10771;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

(dest__9317__auto__[(2)] = (function (){var a__8830__auto__ = (function (){var a__8830__auto__ = G__10359_10766;
var b__8831__auto__ = G__10362_10769;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})();
var b__8831__auto__ = G__10365_10772;
if((a__8830__auto__ >= b__8831__auto__)){
return a__8830__auto__;
} else {
return b__8831__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__9317__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.core.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__10370 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10371 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10370[(0)]),(G__10371[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10370[(1)]),(G__10371[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10370[(2)]),(G__10371[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10370[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10370[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10370[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10372 = self__.buf;
var G__10373 = (G__10372[(0)]);
var G__10374 = (G__10372[(1)]);
var G__10375 = (G__10372[(2)]);
return Math.sqrt((((G__10373 * G__10373) + (G__10374 * G__10374)) + (G__10375 * G__10375)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10376 = self__.buf;
var G__10377 = (G__10376[(0)]);
var G__10378 = (G__10376[(1)]);
var G__10379 = (G__10376[(2)]);
return (((G__10377 * G__10377) + (G__10378 * G__10378)) + (G__10379 * G__10379));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10380_10773 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10381_10774 = v.buf;
(b[(0)] = (((G__10380_10773[(0)]) + (G__10381_10774[(0)])) * 0.5));

(b[(1)] = (((G__10380_10773[(1)]) + (G__10381_10774[(1)])) * 0.5));

(b[(2)] = (((G__10380_10773[(2)]) + (G__10381_10774[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__10380_10773[(0)]) + v) * 0.5));

(b[(1)] = (((G__10380_10773[(1)]) + v) * 0.5));

(b[(2)] = (((G__10380_10773[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__10380_10773[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__10380_10773[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__10380_10773[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10394_10775 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__10395_10776 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10396_10777 = ((!(G__10394_10775))?typeof v === 'number':null);
var G__10397_10778 = ((!(G__10395_10776))?typeof v2 === 'number':null);
var G__10382_10779 = self__.buf;
var G__10383_10780 = ((G__10394_10775)?v.buf:null);
var G__10384_10781 = ((G__10395_10776)?v2.buf:null);
var G__10385_10782 = (G__10382_10779[(0)]);
var G__10386_10783 = (G__10382_10779[(1)]);
var G__10387_10784 = (G__10382_10779[(2)]);
var G__10388_10785 = ((G__10394_10775)?(G__10383_10780[(0)]):(cljs.core.truth_(G__10396_10777)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10389_10786 = ((G__10394_10775)?(G__10383_10780[(1)]):(cljs.core.truth_(G__10396_10777)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10390_10787 = ((G__10394_10775)?(G__10383_10780[(2)]):(cljs.core.truth_(G__10396_10777)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10391_10788 = ((G__10395_10776)?(G__10384_10781[(0)]):(cljs.core.truth_(G__10397_10778)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10392_10789 = ((G__10395_10776)?(G__10384_10781[(1)]):(cljs.core.truth_(G__10397_10778)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10393_10790 = ((G__10395_10776)?(G__10384_10781[(2)]):(cljs.core.truth_(G__10397_10778)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(b[(0)] = (((G__10388_10785 - G__10385_10782) * G__10391_10788) + G__10385_10782));

(b[(1)] = (((G__10389_10786 - G__10386_10783) * G__10392_10789) + G__10386_10783));

(b[(2)] = (((G__10390_10787 - G__10387_10784) * G__10393_10790) + G__10387_10784));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__10410_10791 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10411_10792 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__10412_10793 = ((!(G__10410_10791))?typeof b === 'number':null);
var G__10413_10794 = ((!(G__10411_10792))?typeof c === 'number':null);
var G__10398_10795 = self__.buf;
var G__10399_10796 = ((G__10410_10791)?b.buf:null);
var G__10400_10797 = ((G__10411_10792)?c.buf:null);
var G__10401_10798 = (G__10398_10795[(0)]);
var G__10402_10799 = (G__10398_10795[(1)]);
var G__10403_10800 = (G__10398_10795[(2)]);
var G__10404_10801 = ((G__10410_10791)?(G__10399_10796[(0)]):(cljs.core.truth_(G__10412_10793)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10405_10802 = ((G__10410_10791)?(G__10399_10796[(1)]):(cljs.core.truth_(G__10412_10793)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10406_10803 = ((G__10410_10791)?(G__10399_10796[(2)]):(cljs.core.truth_(G__10412_10793)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__10407_10804 = ((G__10411_10792)?(G__10400_10797[(0)]):(cljs.core.truth_(G__10413_10794)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__10408_10805 = ((G__10411_10792)?(G__10400_10797[(1)]):(cljs.core.truth_(G__10413_10794)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__10409_10806 = ((G__10411_10792)?(G__10400_10797[(2)]):(cljs.core.truth_(G__10413_10794)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_10807 = (((G__10404_10801 - G__10401_10798) * u) + G__10401_10798);
var y1_10808 = (((G__10405_10802 - G__10402_10799) * u) + G__10402_10799);
var z1_10809 = (((G__10406_10803 - G__10403_10800) * u) + G__10403_10800);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__10407_10804) * u) + G__10407_10804) - x1_10807) * v) + x1_10807));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__10408_10805) * u) + G__10408_10805) - y1_10808) * v) + y1_10808));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__10409_10806) * u) + G__10409_10806) - z1_10809) * v) + z1_10809));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.geom.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write.call(null,writer__7738__auto__,"thi.ng.geom.core.vector/Vec3");
});

thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__10812){
var G__10810 = (((G__10812 instanceof thi.ng.geom.core.vector.Vec2))?G__10812.buf:G__10812.buf);
return (G__10810[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__10815){
var G__10813 = (((G__10815 instanceof thi.ng.geom.core.vector.Vec2))?G__10815.buf:G__10815.buf);
var G__10814 = (new Float32Array(2));
(G__10814[(0)] = (G__10813[(0)]));

(G__10814[(1)] = (G__10813[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__10814,null,cljs.core.meta.call(null,G__10815)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__10818){
var G__10816 = (((G__10818 instanceof thi.ng.geom.core.vector.Vec2))?G__10818.buf:G__10818.buf);
var G__10817 = (new Float32Array(3));
(G__10817[(0)] = (G__10816[(0)]));

(G__10817[(1)] = (G__10816[(0)]));

(G__10817[(2)] = (G__10816[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10817,null,cljs.core.meta.call(null,G__10818)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__10821){
var G__10819 = (((G__10821 instanceof thi.ng.geom.core.vector.Vec2))?G__10821.buf:G__10821.buf);
var G__10820 = (new Float32Array(3));
(G__10820[(0)] = (G__10819[(0)]));

(G__10820[(1)] = (G__10819[(0)]));

(G__10820[(2)] = (G__10819[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10820,null,cljs.core.meta.call(null,G__10821)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__10824){
if((G__10824 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10824)"));
}

var G__10822 = (((G__10824 instanceof thi.ng.geom.core.vector.Vec2))?G__10824.buf:G__10824.buf);
var G__10823 = (new Float32Array(3));
(G__10823[(0)] = (G__10822[(0)]));

(G__10823[(1)] = (G__10822[(0)]));

(G__10823[(2)] = (G__10822[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10823,null,cljs.core.meta.call(null,G__10824)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__10827){
var G__10825 = (((G__10827 instanceof thi.ng.geom.core.vector.Vec2))?G__10827.buf:G__10827.buf);
var G__10826 = (new Float32Array(2));
(G__10826[(0)] = (G__10825[(0)]));

(G__10826[(1)] = (G__10825[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__10826,null,cljs.core.meta.call(null,G__10827)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__10830){
var G__10828 = (((G__10830 instanceof thi.ng.geom.core.vector.Vec2))?G__10830.buf:G__10830.buf);
var G__10829 = (new Float32Array(3));
(G__10829[(0)] = (G__10828[(0)]));

(G__10829[(1)] = (G__10828[(1)]));

(G__10829[(2)] = (G__10828[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10829,null,cljs.core.meta.call(null,G__10830)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__10833){
var G__10831 = (((G__10833 instanceof thi.ng.geom.core.vector.Vec2))?G__10833.buf:G__10833.buf);
var G__10832 = (new Float32Array(3));
(G__10832[(0)] = (G__10831[(0)]));

(G__10832[(1)] = (G__10831[(1)]));

(G__10832[(2)] = (G__10831[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10832,null,cljs.core.meta.call(null,G__10833)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__10836){
if((G__10836 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10836)"));
}

var G__10834 = (((G__10836 instanceof thi.ng.geom.core.vector.Vec2))?G__10836.buf:G__10836.buf);
var G__10835 = (new Float32Array(3));
(G__10835[(0)] = (G__10834[(0)]));

(G__10835[(1)] = (G__10834[(1)]));

(G__10835[(2)] = (G__10834[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10835,null,cljs.core.meta.call(null,G__10836)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__10839){
if((G__10839 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10839)"));
}

var G__10837 = (((G__10839 instanceof thi.ng.geom.core.vector.Vec2))?G__10839.buf:G__10839.buf);
var G__10838 = (new Float32Array(2));
(G__10838[(0)] = (G__10837[(0)]));

(G__10838[(1)] = (G__10837[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__10838,null,cljs.core.meta.call(null,G__10839)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__10842){
if((G__10842 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10842)"));
}

var G__10840 = (((G__10842 instanceof thi.ng.geom.core.vector.Vec2))?G__10842.buf:G__10842.buf);
var G__10841 = (new Float32Array(3));
(G__10841[(0)] = (G__10840[(0)]));

(G__10841[(1)] = (G__10840[(2)]));

(G__10841[(2)] = (G__10840[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10841,null,cljs.core.meta.call(null,G__10842)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__10845){
if((G__10845 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10845)"));
}

var G__10843 = (((G__10845 instanceof thi.ng.geom.core.vector.Vec2))?G__10845.buf:G__10845.buf);
var G__10844 = (new Float32Array(3));
(G__10844[(0)] = (G__10843[(0)]));

(G__10844[(1)] = (G__10843[(2)]));

(G__10844[(2)] = (G__10843[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10844,null,cljs.core.meta.call(null,G__10845)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__10848){
if((G__10848 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10848)"));
}

var G__10846 = (((G__10848 instanceof thi.ng.geom.core.vector.Vec2))?G__10848.buf:G__10848.buf);
var G__10847 = (new Float32Array(3));
(G__10847[(0)] = (G__10846[(0)]));

(G__10847[(1)] = (G__10846[(2)]));

(G__10847[(2)] = (G__10846[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10847,null,cljs.core.meta.call(null,G__10848)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__10851){
var G__10849 = (((G__10851 instanceof thi.ng.geom.core.vector.Vec2))?G__10851.buf:G__10851.buf);
return (G__10849[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__10854){
var G__10852 = (((G__10854 instanceof thi.ng.geom.core.vector.Vec2))?G__10854.buf:G__10854.buf);
var G__10853 = (new Float32Array(2));
(G__10853[(0)] = (G__10852[(1)]));

(G__10853[(1)] = (G__10852[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__10853,null,cljs.core.meta.call(null,G__10854)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__10857){
var G__10855 = (((G__10857 instanceof thi.ng.geom.core.vector.Vec2))?G__10857.buf:G__10857.buf);
var G__10856 = (new Float32Array(3));
(G__10856[(0)] = (G__10855[(1)]));

(G__10856[(1)] = (G__10855[(0)]));

(G__10856[(2)] = (G__10855[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10856,null,cljs.core.meta.call(null,G__10857)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__10860){
var G__10858 = (((G__10860 instanceof thi.ng.geom.core.vector.Vec2))?G__10860.buf:G__10860.buf);
var G__10859 = (new Float32Array(3));
(G__10859[(0)] = (G__10858[(1)]));

(G__10859[(1)] = (G__10858[(0)]));

(G__10859[(2)] = (G__10858[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10859,null,cljs.core.meta.call(null,G__10860)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__10863){
if((G__10863 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10863)"));
}

var G__10861 = (((G__10863 instanceof thi.ng.geom.core.vector.Vec2))?G__10863.buf:G__10863.buf);
var G__10862 = (new Float32Array(3));
(G__10862[(0)] = (G__10861[(1)]));

(G__10862[(1)] = (G__10861[(0)]));

(G__10862[(2)] = (G__10861[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10862,null,cljs.core.meta.call(null,G__10863)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__10866){
var G__10864 = (((G__10866 instanceof thi.ng.geom.core.vector.Vec2))?G__10866.buf:G__10866.buf);
var G__10865 = (new Float32Array(2));
(G__10865[(0)] = (G__10864[(1)]));

(G__10865[(1)] = (G__10864[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__10865,null,cljs.core.meta.call(null,G__10866)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__10869){
var G__10867 = (((G__10869 instanceof thi.ng.geom.core.vector.Vec2))?G__10869.buf:G__10869.buf);
var G__10868 = (new Float32Array(3));
(G__10868[(0)] = (G__10867[(1)]));

(G__10868[(1)] = (G__10867[(1)]));

(G__10868[(2)] = (G__10867[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10868,null,cljs.core.meta.call(null,G__10869)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__10872){
var G__10870 = (((G__10872 instanceof thi.ng.geom.core.vector.Vec2))?G__10872.buf:G__10872.buf);
var G__10871 = (new Float32Array(3));
(G__10871[(0)] = (G__10870[(1)]));

(G__10871[(1)] = (G__10870[(1)]));

(G__10871[(2)] = (G__10870[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10871,null,cljs.core.meta.call(null,G__10872)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__10875){
if((G__10875 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10875)"));
}

var G__10873 = (((G__10875 instanceof thi.ng.geom.core.vector.Vec2))?G__10875.buf:G__10875.buf);
var G__10874 = (new Float32Array(3));
(G__10874[(0)] = (G__10873[(1)]));

(G__10874[(1)] = (G__10873[(1)]));

(G__10874[(2)] = (G__10873[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10874,null,cljs.core.meta.call(null,G__10875)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__10878){
if((G__10878 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10878)"));
}

var G__10876 = (((G__10878 instanceof thi.ng.geom.core.vector.Vec2))?G__10878.buf:G__10878.buf);
var G__10877 = (new Float32Array(2));
(G__10877[(0)] = (G__10876[(1)]));

(G__10877[(1)] = (G__10876[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__10877,null,cljs.core.meta.call(null,G__10878)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__10881){
if((G__10881 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10881)"));
}

var G__10879 = (((G__10881 instanceof thi.ng.geom.core.vector.Vec2))?G__10881.buf:G__10881.buf);
var G__10880 = (new Float32Array(3));
(G__10880[(0)] = (G__10879[(1)]));

(G__10880[(1)] = (G__10879[(2)]));

(G__10880[(2)] = (G__10879[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10880,null,cljs.core.meta.call(null,G__10881)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__10884){
if((G__10884 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10884)"));
}

var G__10882 = (((G__10884 instanceof thi.ng.geom.core.vector.Vec2))?G__10884.buf:G__10884.buf);
var G__10883 = (new Float32Array(3));
(G__10883[(0)] = (G__10882[(1)]));

(G__10883[(1)] = (G__10882[(2)]));

(G__10883[(2)] = (G__10882[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10883,null,cljs.core.meta.call(null,G__10884)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__10887){
if((G__10887 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10887)"));
}

var G__10885 = (((G__10887 instanceof thi.ng.geom.core.vector.Vec2))?G__10887.buf:G__10887.buf);
var G__10886 = (new Float32Array(3));
(G__10886[(0)] = (G__10885[(1)]));

(G__10886[(1)] = (G__10885[(2)]));

(G__10886[(2)] = (G__10885[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10886,null,cljs.core.meta.call(null,G__10887)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__10890){
if((G__10890 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10890)"));
}

var G__10888 = (((G__10890 instanceof thi.ng.geom.core.vector.Vec2))?G__10890.buf:G__10890.buf);
return (G__10888[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__10893){
if((G__10893 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10893)"));
}

var G__10891 = (((G__10893 instanceof thi.ng.geom.core.vector.Vec2))?G__10893.buf:G__10893.buf);
var G__10892 = (new Float32Array(2));
(G__10892[(0)] = (G__10891[(2)]));

(G__10892[(1)] = (G__10891[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__10892,null,cljs.core.meta.call(null,G__10893)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__10896){
if((G__10896 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10896)"));
}

var G__10894 = (((G__10896 instanceof thi.ng.geom.core.vector.Vec2))?G__10896.buf:G__10896.buf);
var G__10895 = (new Float32Array(3));
(G__10895[(0)] = (G__10894[(2)]));

(G__10895[(1)] = (G__10894[(0)]));

(G__10895[(2)] = (G__10894[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10895,null,cljs.core.meta.call(null,G__10896)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__10899){
if((G__10899 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10899)"));
}

var G__10897 = (((G__10899 instanceof thi.ng.geom.core.vector.Vec2))?G__10899.buf:G__10899.buf);
var G__10898 = (new Float32Array(3));
(G__10898[(0)] = (G__10897[(2)]));

(G__10898[(1)] = (G__10897[(0)]));

(G__10898[(2)] = (G__10897[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10898,null,cljs.core.meta.call(null,G__10899)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__10902){
if((G__10902 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10902)"));
}

var G__10900 = (((G__10902 instanceof thi.ng.geom.core.vector.Vec2))?G__10902.buf:G__10902.buf);
var G__10901 = (new Float32Array(3));
(G__10901[(0)] = (G__10900[(2)]));

(G__10901[(1)] = (G__10900[(0)]));

(G__10901[(2)] = (G__10900[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10901,null,cljs.core.meta.call(null,G__10902)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__10905){
if((G__10905 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10905)"));
}

var G__10903 = (((G__10905 instanceof thi.ng.geom.core.vector.Vec2))?G__10905.buf:G__10905.buf);
var G__10904 = (new Float32Array(2));
(G__10904[(0)] = (G__10903[(2)]));

(G__10904[(1)] = (G__10903[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__10904,null,cljs.core.meta.call(null,G__10905)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__10908){
if((G__10908 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10908)"));
}

var G__10906 = (((G__10908 instanceof thi.ng.geom.core.vector.Vec2))?G__10908.buf:G__10908.buf);
var G__10907 = (new Float32Array(3));
(G__10907[(0)] = (G__10906[(2)]));

(G__10907[(1)] = (G__10906[(1)]));

(G__10907[(2)] = (G__10906[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10907,null,cljs.core.meta.call(null,G__10908)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__10911){
if((G__10911 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10911)"));
}

var G__10909 = (((G__10911 instanceof thi.ng.geom.core.vector.Vec2))?G__10911.buf:G__10911.buf);
var G__10910 = (new Float32Array(3));
(G__10910[(0)] = (G__10909[(2)]));

(G__10910[(1)] = (G__10909[(1)]));

(G__10910[(2)] = (G__10909[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10910,null,cljs.core.meta.call(null,G__10911)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__10914){
if((G__10914 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10914)"));
}

var G__10912 = (((G__10914 instanceof thi.ng.geom.core.vector.Vec2))?G__10914.buf:G__10914.buf);
var G__10913 = (new Float32Array(3));
(G__10913[(0)] = (G__10912[(2)]));

(G__10913[(1)] = (G__10912[(1)]));

(G__10913[(2)] = (G__10912[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10913,null,cljs.core.meta.call(null,G__10914)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__10917){
if((G__10917 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10917)"));
}

var G__10915 = (((G__10917 instanceof thi.ng.geom.core.vector.Vec2))?G__10917.buf:G__10917.buf);
var G__10916 = (new Float32Array(2));
(G__10916[(0)] = (G__10915[(2)]));

(G__10916[(1)] = (G__10915[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__10916,null,cljs.core.meta.call(null,G__10917)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__10920){
if((G__10920 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10920)"));
}

var G__10918 = (((G__10920 instanceof thi.ng.geom.core.vector.Vec2))?G__10920.buf:G__10920.buf);
var G__10919 = (new Float32Array(3));
(G__10919[(0)] = (G__10918[(2)]));

(G__10919[(1)] = (G__10918[(2)]));

(G__10919[(2)] = (G__10918[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__10919,null,cljs.core.meta.call(null,G__10920)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__10923){
if((G__10923 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10923)"));
}

var G__10921 = (((G__10923 instanceof thi.ng.geom.core.vector.Vec2))?G__10923.buf:G__10923.buf);
var G__10922 = (new Float32Array(3));
(G__10922[(0)] = (G__10921[(2)]));

(G__10922[(1)] = (G__10921[(2)]));

(G__10922[(2)] = (G__10921[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__10922,null,cljs.core.meta.call(null,G__10923)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__10926){
if((G__10926 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__10926)"));
}

var G__10924 = (((G__10926 instanceof thi.ng.geom.core.vector.Vec2))?G__10926.buf:G__10926.buf);
var G__10925 = (new Float32Array(3));
(G__10925[(0)] = (G__10924[(2)]));

(G__10925[(1)] = (G__10924[(2)]));

(G__10925[(2)] = (G__10924[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__10925,null,cljs.core.meta.call(null,G__10926)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.core.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.core.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.core.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.core.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.core.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__6751__auto__ = (function (){var and__7073__auto__ = ((1) === c);
if(and__7073__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var idx = temp__6751__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__6751__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__6751__auto____$1)){
var idx = temp__6751__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__10927 = (i + (1));
var G__10928 = cljs.core.next.call(null,n__$1);
i = G__10927;
n__$1 = G__10928;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.core.vector.vec2_reduce_STAR_ = (function thi$ng$geom$core$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__10929 = null;
var G__10929__1 = (function (a){
return a;
});
var G__10929__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__10929 = function(a,b){
switch(arguments.length){
case 1:
return G__10929__1.call(this,a);
case 2:
return G__10929__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10929.cljs$core$IFn$_invoke$arity$1 = G__10929__1;
G__10929.cljs$core$IFn$_invoke$arity$2 = G__10929__2;
return G__10929;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__10930 = null;
var G__10930__1 = (function (a){
return a;
});
var G__10930__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__10930 = function(a,b){
switch(arguments.length){
case 1:
return G__10930__1.call(this,a);
case 2:
return G__10930__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10930.cljs$core$IFn$_invoke$arity$1 = G__10930__1;
G__10930.cljs$core$IFn$_invoke$arity$2 = G__10930__2;
return G__10930;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(var_args){
var args10931 = [];
var len__8301__auto___10934 = arguments.length;
var i__8302__auto___10935 = (0);
while(true){
if((i__8302__auto___10935 < len__8301__auto___10934)){
args10931.push((arguments[i__8302__auto___10935]));

var G__10936 = (i__8302__auto___10935 + (1));
i__8302__auto___10935 = G__10936;
continue;
} else {
}
break;
}

var G__10933 = args10931.length;
switch (G__10933) {
case 0:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10931.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V2;
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,null));
});

thi.ng.geom.core.vector.vec2.cljs$lang$maxFixedArity = 2;

thi.ng.geom.core.vector.vec3 = (function thi$ng$geom$core$vector$vec3(var_args){
var args10938 = [];
var len__8301__auto___10941 = arguments.length;
var i__8302__auto___10942 = (0);
while(true){
if((i__8302__auto___10942 < len__8301__auto___10941)){
args10938.push((arguments[i__8302__auto___10942]));

var G__10943 = (i__8302__auto___10942 + (1));
i__8302__auto___10942 = G__10943;
continue;
} else {
}
break;
}

var G__10940 = args10938.length;
switch (G__10940) {
case 0:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10938.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V3;
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,null));
});

thi.ng.geom.core.vector.vec3.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.vector.vec2_with_meta = (function thi$ng$geom$core$vector$vec2_with_meta(var_args){
var args10945 = [];
var len__8301__auto___10948 = arguments.length;
var i__8302__auto___10949 = (0);
while(true){
if((i__8302__auto___10949 < len__8301__auto___10948)){
args10945.push((arguments[i__8302__auto___10949]));

var G__10950 = (i__8302__auto___10949 + (1));
i__8302__auto___10949 = G__10950;
continue;
} else {
}
break;
}

var G__10947 = args10945.length;
switch (G__10947) {
case 2:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10945.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,meta));
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.vector.vec3_with_meta = (function thi$ng$geom$core$vector$vec3_with_meta(var_args){
var args10952 = [];
var len__8301__auto___10955 = arguments.length;
var i__8302__auto___10956 = (0);
while(true){
if((i__8302__auto___10956 < len__8301__auto___10955)){
args10952.push((arguments[i__8302__auto___10956]));

var G__10957 = (i__8302__auto___10956 + (1));
i__8302__auto___10956 = G__10957;
continue;
} else {
}
break;
}

var G__10954 = args10952.length;
switch (G__10954) {
case 2:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10952.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,meta));
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core.vector.vec2_QMARK_ = (function thi$ng$geom$core$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function thi$ng$geom$core$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.V2X = thi.ng.geom.core.vector.vec2.call(null,(1),(0));
thi.ng.geom.core.vector.V2Y = thi.ng.geom.core.vector.vec2.call(null,(0),(1));
thi.ng.geom.core.vector.V3X = thi.ng.geom.core.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.core.vector.V3Y = thi.ng.geom.core.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.core.vector.V3Z = thi.ng.geom.core.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.core.vector.V2INF_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V2INF_PLUS_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.V3INF_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V3INF_PLUS_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.randvec2 = (function thi$ng$geom$core$vector$randvec2(var_args){
var args10959 = [];
var len__8301__auto___10962 = arguments.length;
var i__8302__auto___10963 = (0);
while(true){
if((i__8302__auto___10963 < len__8301__auto___10962)){
args10959.push((arguments[i__8302__auto___10963]));

var G__10964 = (i__8302__auto___10963 + (1));
i__8302__auto___10963 = G__10964;
continue;
} else {
}
break;
}

var G__10961 = args10959.length;
switch (G__10961) {
case 0:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10959.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec2.cljs$lang$maxFixedArity = 1;

thi.ng.geom.core.vector.randvec3 = (function thi$ng$geom$core$vector$randvec3(var_args){
var args10966 = [];
var len__8301__auto___10969 = arguments.length;
var i__8302__auto___10970 = (0);
while(true){
if((i__8302__auto___10970 < len__8301__auto___10969)){
args10966.push((arguments[i__8302__auto___10970]));

var G__10971 = (i__8302__auto___10970 + (1));
i__8302__auto___10970 = G__10971;
continue;
} else {
}
break;
}

var G__10968 = args10966.length;
switch (G__10968) {
case 0:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10966.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec3.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=vector.js.map