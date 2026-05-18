"use strict";var t=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var o=t(function(b,u){"use strict";var d=require("@stdlib/slice-base-args2multislice"),l=require("@stdlib/slice-ctor"),v=require("@stdlib/ndarray-base-slice"),f=require("@stdlib/array-base-nulls"),g=require("@stdlib/ndarray-base-ndims"),a=require("@stdlib/string-format");function c(i,e,m){var s,r,n;if(r=g(i),r===0)throw new TypeError(a("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",r));if(n=e,n<0){if(n+=r,n<0)throw new RangeError(a("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",r,e))}else if(n>=r)throw new RangeError(a("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",r,e));return s=f(r),s[n]=new l(null,null,-1),v(i,d(s),!0,m)}u.exports=c});var q=o();module.exports=q;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
