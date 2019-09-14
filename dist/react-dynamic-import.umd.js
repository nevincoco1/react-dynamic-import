!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):(r=r||self).DynamicModuleLoader=e(r.React)}(this,function(s){"use strict";var b="default"in s?s.default:s;function h(r){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function v(){return(v=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function w(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],0<=e.indexOf(t)||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],0<=e.indexOf(t)||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}function g(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if(!(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var c,u=r[Symbol.iterator]();!(n=(c=u.next()).done)&&(t.push(c.value),!e||t.length!==e);n=!0);}catch(r){o=!0,a=r}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function O(r){return function(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(r){var e=r.name,t=r.error.message;return"Unable to fetch module: ".concat(e,".\nError: ").concat(t,".")}function i(){return null}return function(r){var l=r.loader,e=r.isHOC,y=void 0!==e&&e,d=r.name,t=r.placeholder,p=void 0===t?i:t,n=r.errorHandler,m=void 0===n?u:n;if(!l||l&&"function"!=typeof l)throw new Error("'loader' is required and should be of type 'function'.");function o(n){var o=s.useRef(!1),r=g(s.useState(null),2),e=r[0],a=r[1],t=g(s.useState(null),2),c=t[0],u=t[1],i=(n.hocArgs,n.forwardedRef),f=w(n,["hocArgs","forwardedRef"]);return s.useEffect(function(){o.current=!0;var r=l(d);if(!r||r&&!(r instanceof Promise))throw new Error("Expected 'loader' to return a 'Promise', but, it returned '".concat(h(r),"' instead."));return l(d).then(function(r){if(o.current){var e=n.hocArgs,t=r.default||r;a({component:y?t.apply(void 0,O(e)):t})}}).catch(function(r){u(r)}),function(){o.current=!1}},[n]),c?b.createElement(m,{error:c,name:d}):e?b.createElement(e.component,v({},f,{ref:i})):b.createElement(p,{name:d})}function a(r,e){return b.createElement(o,v({},r,{forwardedRef:e}))}o.displayName="DynamicImport".concat(y?":HOC":"","(").concat(d||"Unknown",")"),a.displayName="DynamicImportFetcher";var c=s.forwardRef(a);return y?function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];function n(r,e){return b.createElement(o,v({},r,{forwardedRef:e,hocArgs:t}))}return n.displayName="DynamicImportHOCFetcher",s.forwardRef(n)}:c}});
//# sourceMappingURL=react-dynamic-import.umd.js.map
