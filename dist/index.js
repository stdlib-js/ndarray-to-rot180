"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(q,t){
var u=require('@stdlib/assert-is-integer-array/dist').primitives,m=require('@stdlib/assert-is-plain-object/dist'),v=require('@stdlib/assert-is-ndarray-like/dist'),d=require('@stdlib/assert-has-own-property/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist'),o=require('@stdlib/ndarray-base-to-rot180/dist');function f(e,r){var i;if(!v(e))throw new TypeError(a('null4f',e));if(i=[-2,-1],arguments.length>1){if(!m(r))throw new TypeError(a('null2V',r));if(d(r,"dims")){if(!u(r.dims))throw new TypeError(a('nullHk',"dims",r.dims));i=r.dims}}return o(e,i)}t.exports=f
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
