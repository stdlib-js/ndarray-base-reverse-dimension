// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function d(d,m,o){var l,a,f;if(0===(a=r(d)))throw new TypeError(t("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",a));if((f=m)<0){if((f+=a)<0)throw new RangeError(t("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",a,m))}else if(f>=a)throw new RangeError(t("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",a,m));return(l=i(null,a))[f]=new s(null,null,-1),n(d,e(l),!0,o)}export{d as default};
//# sourceMappingURL=index.mjs.map
