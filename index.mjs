// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function l(l,d,m){var o,j,a;if(0===(j=i(l)))throw new TypeError(n("1lBF7",j));if((a=d)<0){if((a+=j)<0)throw new RangeError(n("1lBF8",j,d))}else if(a>=j)throw new RangeError(n("1lBF8",j,d));return(o=t(null,j))[a]=new e(null,null,-1),r(l,s(o),!0,m)}export{l as default};
//# sourceMappingURL=index.mjs.map
