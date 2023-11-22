!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("node-fetch")):"function"==typeof define&&define.amd?define(["exports","node-fetch"],t):t((e=e||self).Bitbucket={},e.fetch)}(this,(function(e,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var r=function e(t,r,n,o){if("function"!=typeof n)throw new Error("method for before hook must be a function");o||(o={});if(Array.isArray(r))return r.reverse().reduce((function(r,n){return e.bind(null,t,n,r,o)}),n)();return Promise.resolve().then((function(){return t.registry[r]?t.registry[r].reduce((function(e,t){return t.hook.bind(null,e,o)}),n)():n(o)}))};var n=function(e,t,r,n){var o=n;e.registry[r]||(e.registry[r]=[]);"before"===t&&(n=function(e,t){return Promise.resolve().then(o.bind(null,t)).then(e.bind(null,t))});"after"===t&&(n=function(e,t){var r;return Promise.resolve().then(e.bind(null,t)).then((function(e){return o(r=e,t)})).then((function(){return r}))});"error"===t&&(n=function(e,t){return Promise.resolve().then(e.bind(null,t)).catch((function(e){return o(e,t)}))});e.registry[r].push({hook:n,orig:o})};var o=function(e,t,r){if(!e.registry[t])return;var n=e.registry[t].map((function(e){return e.orig})).indexOf(r);if(-1===n)return;e.registry[t].splice(n,1)};var i=Function.bind,u=i.bind(i);function a(e,t,r){var i=u(o,null).apply(null,r?[t,r]:[t]);e.api={remove:i},e.remove=i,["before","error","after","wrap"].forEach((function(o){var i=r?[t,o,r]:[t,o];e[o]=e.api[o]=u(n,null).apply(null,i)}))}function c(){var e={registry:{}},t=r.bind(null,e);return a(t,e),t}var s=!1;function f(){return s||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),s=!0),c()}f.Singular=function(){var e={registry:{}},t=r.bind(null,e,"h");return a(t,e,"h"),t}.bind(),f.Collection=c.bind();var l=f,p=f,d=f.Singular,h=f.Collection;l.Hook=p,l.Singular=d,l.Collection=h;var y={method:"GET",baseUrl:"".concat("https","://").concat("api.bitbucket.org").concat("/2.0"),headers:{accept:"application/json","user-agent":"bitbucket.js/".concat("2.6.3")}};function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e,t,r){return(O=m()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&g(o,r.prototype),o}).apply(null,arguments)}function w(e){var t="function"==typeof Map?new Map:void 0;return(w=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return O(e,arguments,b(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,e)})(e)}function j(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?S(e):t}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===P}(e)}(e)};var P="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function U(e,t){return!1!==t.clone&&t.isMergeableObject(e)?D((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function T(e,t,r){return e.concat(t).map((function(e){return U(e,r)}))}function I(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function R(e,t){try{return t in e}catch(e){return!1}}function C(e,t,r){var n={};return r.isMergeableObject(e)&&I(e).forEach((function(t){n[t]=U(e[t],r)})),I(t).forEach((function(o){(function(e,t){return R(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(R(e,o)&&r.isMergeableObject(t[o])?n[o]=function(e,t){if(!t.customMerge)return D;var r=t.customMerge(e);return"function"==typeof r?r:D}(o,r)(e[o],t[o],r):n[o]=U(t[o],r))})),n}function D(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||T,r.isMergeableObject=r.isMergeableObject||x,r.cloneUnlessOtherwiseSpecified=U;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):C(e,t,r):U(t,r)}D.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return D(e,r,t)}),{})};var M=D;
/*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
function N(e){return!0==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);
/*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
var t}function B(e){var t,r;return!1!==N(e)&&("function"==typeof(t=e.constructor)&&(!1!==N(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf")))}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,r){return t[r.toLowerCase()]=e[r],t}),{})}function V(e,t,r){if("string"==typeof t){var n=A(t.split(" "),2),o=n[0],i=n[1];r=Object.assign(i?{method:o,url:i}:{url:o},r)}else r=t;return r.headers=_(r.headers),M.all([e,r].filter(Boolean),{isMergeableObject:B})}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var H=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){e.exports=function(){function e(){}return e.prototype.encodeReserved=function(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map((function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e})).join("")},e.prototype.encodeUnreserved=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))},e.prototype.encodeValue=function(e,t,r){return t="+"===e||"#"===e?this.encodeReserved(t):this.encodeUnreserved(t),r?this.encodeUnreserved(r)+"="+t:t},e.prototype.isDefined=function(e){return null!=e},e.prototype.isKeyOperator=function(e){return";"===e||"&"===e||"?"===e},e.prototype.getValues=function(e,t,r,n){var o=e[r],i=[];if(this.isDefined(o)&&""!==o)if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),n&&"*"!==n&&(o=o.substring(0,parseInt(n,10))),i.push(this.encodeValue(t,o,this.isKeyOperator(t)?r:null));else if("*"===n)Array.isArray(o)?o.filter(this.isDefined).forEach((function(e){i.push(this.encodeValue(t,e,this.isKeyOperator(t)?r:null))}),this):Object.keys(o).forEach((function(e){this.isDefined(o[e])&&i.push(this.encodeValue(t,o[e],e))}),this);else{var u=[];Array.isArray(o)?o.filter(this.isDefined).forEach((function(e){u.push(this.encodeValue(t,e))}),this):Object.keys(o).forEach((function(e){this.isDefined(o[e])&&(u.push(this.encodeUnreserved(e)),u.push(this.encodeValue(t,o[e].toString())))}),this),this.isKeyOperator(t)?i.push(this.encodeUnreserved(r)+"="+u.join(",")):0!==u.length&&i.push(u.join(","))}else";"===t?this.isDefined(o)&&i.push(this.encodeUnreserved(r)):""!==o||"&"!==t&&"?"!==t?""===o&&i.push(""):i.push(this.encodeUnreserved(r)+"=");return i},e.prototype.parse=function(e){var t=this,r=["+","#",".","/",";","?","&"];return{expand:function(n){return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,(function(e,o,i){if(o){var u=null,a=[];if(-1!==r.indexOf(o.charAt(0))&&(u=o.charAt(0),o=o.substr(1)),o.split(/,/g).forEach((function(e){var r=/([^:\*]*)(?::(\d+)|(\*))?/.exec(e);a.push.apply(a,t.getValues(n,u,r[1],r[2]||r[3]))})),u&&"+"!==u){var c=",";return"?"===u?c="&":"#"!==u&&(c=u),(0!==a.length?u:"")+a.join(c)}return a.join(",")}return t.encodeReserved(i)}))}}},new e}()}));function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.includes("?")?"&":"?",n=Object.keys(t).filter((function(e){return void 0!==t[e]}));return 0===n.length?e:"".concat(e).concat(r).concat(n.map((function(e){return"q"===e?"q=".concat(t.q.split(" ").map(encodeURIComponent).join("+")):Array.isArray(t[e])?t[e].map((function(t){return"".concat(e,"=").concat(encodeURIComponent(t))})).join("&"):"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&"))}var J=/\{[^}]+\}/g;function K(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}var L="multipart/form-data",$="application/x-www-form-urlencoded",G="application/json; charset=utf-8";function W(e){var t=e.accepts,r=void 0===t?[]:t,n=e.method,o=e.baseUrl,i=e.url,u=e.headers,a=e.request,c=j(e,["accepts","method","baseUrl","url","headers","request"]),s=n.toUpperCase(),f=function(e){var t=e.match(J);return t?t.map(K).reduce((function(e,t){return e.concat(t)}),[]):[]}(i),l=H.parse(i).expand(c);/^http/.test(l)||(l="".concat(o).concat(l));var p,d=Object.keys(c).reduce((function(e,t){return f.includes(t)||(e[t]=c[t]),e}),{}),h=d._body,y=j(d,["_body"]),v=!1;if(["GET","DELETE"].includes(s))l=F(l,y);else if(void 0!==h){if((v=/form-?data/i.test((p=h).constructor.name))&&r.includes(L))for(var b=0,g=Object.keys(y);b<g.length;b++){var m=g[b];p.append(m,y[m])}}else Object.keys(y).length&&(p=y);return v||(r.includes($)?(p=F("",p).substring(1),u["content-type"]=$):(p=JSON.stringify(p),u["content-type"]=G)),void 0===p&&delete u["content-type"],{method:s,url:l,body:p,headers:u,request:a}}function z(e,t,r){return W(V(e,t,r))}var Q=function e(t,r){var n=V(t,r),o=z.bind(null,n);return o.DEFAULTS=n,o.defaults=e.bind(null,n),o.merge=V.bind(null,n),o.parse=W,o}(null,y),X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(o,e);var t,r,n=(t=o,r=m(),function(){var e,n=b(t);if(r){var o=b(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return E(this,e)});function o(e,t){var r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v(this,o),r=n.call(this,e),Error.captureStackTrace&&Error.captureStackTrace(S(r),r.constructor),r.name="HTTPError",r.error=i.error,r.headers=i.headers,r.request=i.request,r.status=t,r}return o}(w(Error));function Y(e){var t=e.headers.get("content-type");return t.includes("application/json")?e.json():!t||/^text\/|charset=utf-8$/.test(t)?e.text():e.arrayBuffer()}function Z(e){var r,n,o,i=e.method,u=e.url,a=e.headers,c=e.body,s=e.request,f=Object.assign({method:i,body:c,headers:a},s),l={};return(null!==(r=s.fetch)&&void 0!==r?r:t)(u,f).then((function(t){n=t.status,o=t.url;var r,i=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=k(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}(t.headers);try{for(i.s();!(r=i.n()).done;){var u=A(r.value,2),a=u[0],c=u[1];l[a]=c}}catch(e){i.e(e)}finally{i.f()}return t.status>=400||[304].includes(t.status)?Y(t).then((function(r){throw new X(t.statusText,n,{error:r,headers:l,request:e})})):Y(t)})).then((function(e){return{data:e,headers:l,status:n,url:o}})).catch((function(t){if(t instanceof X)throw t;throw new X(t.message,500,{headers:l,request:e})}))}var ee=function e(t,r){var n=t.defaults(r);function o(e,t){var r=n.merge(e,t);return r.request&&r.request.hook?r.request.hook((function(e){return Z(n.parse(e))}),r):Z(n.parse(r))}return o.defaults=e.bind(null,n),o.endpoint=n,o}(Q,{});function te(e,t){e.headers=_(e.headers);var r,n=M({headers:{},request:{}},(r=e,["baseUrl","headers","request"].reduce((function(e,t){return void 0!==r[t]&&(e[t]=r[t]),e}),{})),{isMergeableObject:B});return n.request.hook=t,n}function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=new d,n={request:ee.defaults(te(t,r)),requestHook:r};return e.forEach((function(e){e(n,t)})),n}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e.slice(0);return t.forEach((function(e){r.includes(e)||r.push(e)})),oe(r)}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=re.bind(null,e);return t.plugins=ne.bind(null,e),t}var ie=oe();function ue(e,t){if("token"in e.auth)t.headers.authorization="Bearer ".concat(e.auth.token);else if(e.auth.username){var r=(n="".concat(e.auth.username,":").concat(e.auth.password),"undefined"!=typeof Buffer?Buffer.from(n).toString("base64"):btoa(n));t.headers.authorization="Basic ".concat(r)}var n}function ae(e,t,r){var n=r[t];if(!n)throw new X("not found: ".concat(t," page"),404);return e.request({method:"GET",url:n})}function ce(e,t){for(var r=function(){var r=o[n];e[r]||(e[r]={});for(var i=function(){var n=a[u],o=t[r][n];if(o.alias){var i=A(o.alias.split("."),2),c=i[0],s=i[1];o=t[c][s]}var f=["accepts","method","url","headers"].reduce((function(e,t){return t in o&&(e[t]=o[t]),e}),{});f.request={validate:o.params};var l=e.request.defaults(f);if(o.deprecated)return e[r][n]=function(){return console.log("[43m[30m %s [0m[33m %s [0m","DEPRECATION WARNING:","".concat(f.method," ").concat(f.url)),e[r][n]=l,l.apply(void 0,arguments)},"continue";e[r][n]=l},u=0,a=Object.keys(t[r]);u<a.length;u++)i()},n=0,o=Object.keys(t);n<o.length;n++)r()}function se(e,t){var r=t.request.validate;if(r)for(var n=0,o=Object.keys(r);n<o.length;n++){var i=o[n],u=r[i],a=u.type,c=t[i],s=void 0!==c;if(u.required||s){if(u.required&&!s)throw new X("parameter required: '".concat(i,"'"),400);if("integer"===a){var f=c;if(c=parseInt(c,10),isNaN(c))throw new X("invalid value for parameter '".concat(i,"': ").concat(JSON.stringify(f)," is NaN"),400)}if("boolean"===a)if(!("boolean"==typeof c))throw new X("invalid value for parameter '".concat(i,"': ").concat(JSON.stringify(c)),400);if(u.enum&&!u.enum.includes(c))throw new X("invalid value for parameter '".concat(i,"': ").concat(JSON.stringify(c)),400)}}}var fe=[function(e,t){var r=t.notice;(void 0===r||r)&&console.log("[46m[30m %s [0m[36m %s [0m","BITBUCKET CLOUD API LATEST UPDATES:","https://developer.atlassian.com/cloud/bitbucket")},function(e,t){if(t.auth){!function(e){if(!("token"in e||e.username&&e.password))throw new Error('Invalid "auth" option: '.concat(JSON.stringify(e)))}(t.auth);var r={client:e,auth:t.auth};e.requestHook.before(ue.bind(null,r))}},function(e){e.hasNextPage=function(e){var t=e.next;return Boolean(t)},e.getNextPage=ae.bind(null,e,"next"),e.hasPreviousPage=function(e){var t=e.previous;return Boolean(t)},e.getPreviousPage=ae.bind(null,e,"previous")},function(e){e.registerEndpoints=ce.bind(null,e)},function(e){e.requestHook.before(se.bind(null,e))}],le=ie.plugins(fe);e.Bitbucket=le,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=minimal.umd.js.map
