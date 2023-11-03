"use strict";var t=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var o=t(function(b,u){
var d=require('@stdlib/slice-base-args2multislice/dist'),l=require('@stdlib/slice-ctor/dist'),v=require('@stdlib/ndarray-base-slice/dist'),f=require('@stdlib/array-base-filled/dist'),g=require('@stdlib/ndarray-base-ndims/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function c(n,e,m){var s,r,i;if(r=g(n),r===0)throw new TypeError(a('nullF7',r));if(i=e,i<0){if(i+=r,i<0)throw new RangeError(a('nullF8',r,e))}else if(i>=r)throw new RangeError(a('nullF8',r,e));return s=f(null,r),s[i]=new l(null,null,-1),v(n,d(s),!0,m)}u.exports=c
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
