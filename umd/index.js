(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports,require("@babel/runtime/helpers/objectWithoutPropertiesLoose"),require("react"),require("@babel/runtime/helpers/defineProperty")):"function"==typeof define&&define.amd?define(["exports","@babel/runtime/helpers/objectWithoutPropertiesLoose","react","@babel/runtime/helpers/defineProperty"],b):(a=a||self,b(a.Img={},a._objectWithoutPropertiesLoose,a.React,a._defineProperty))})(this,function(a,b,c,d){'use strict';function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?e(Object(b),!0).forEach(function(c){d(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):e(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function g(a){var b=a.srcList,d=a.imgPromise,e=void 0===d?j({decode:!0}):d,g=a.useSuspense,h=void 0===g||g,i=c.useState(!0),o=i[1],p=k(l(b)),q=p.join("");if(m[q]||(m[q]={promise:n(p,e),cache:"pending",error:null}),m[q].promise.then(function(a){m[q]=f(f({},m[q]),{},{cache:"resolved",src:a}),h||o(!1)})["catch"](function(a){m[q]=f(f({},m[q]),{},{cache:"rejected",error:a}),h||o(!1)}),"resolved"===m[q].cache)return{src:m[q].src,isLoading:!1,error:null};if("rejected"===m[q].cache){if(h)throw m[q].error;return{isLoading:!1,error:m[q].error,src:void 0}}if(h)throw m[q].promise;return{isLoading:!0,src:void 0,error:null}}function h(a){var c=a.decode,d=a.src,e=void 0===d?[]:d,f=a.loader,h=void 0===f?null:f,k=a.unloader,l=void 0===k?null:k,m=a.container,n=void 0===m?o:m,p=a.loaderContainer,q=void 0===p?o:p,r=a.unloaderContainer,s=void 0===r?o:r,t=a.imgPromise,u=a.crossorigin,v=a.useSuspense,w=void 0!==v&&v,x=b(a,["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"]);t=t||j({decode:!(void 0!==c)||c,crossOrigin:u});var y=g({srcList:e,imgPromise:t,useSuspense:w}),z=y.src,A=y.isLoading;return z?n(i.createElement("img",Object.assign({src:z},x))):!w&&A?q(h):!w&&l?s(l):null}b=b&&Object.prototype.hasOwnProperty.call(b,"default")?b["default"]:b;var i="default"in c?c["default"]:c;d=d&&Object.prototype.hasOwnProperty.call(d,"default")?d["default"]:d;var j=function(a){var b=a.decode,c=a.crossOrigin,d=void 0===c?"":c;return function(a){return new Promise(function(c,e){var f=new Image;d&&(f.crossOrigin=d),f.onload=function(){(!(void 0!==b)||b)&&f.decode?f.decode().then(c)["catch"](e):c()},f.onerror=e,f.src=a})}},k=function(b){return b.filter(function(a){return a})},l=function(a){return Array.isArray(a)?a:[a]},m={},n=function(a,b){var c=!1;return new Promise(function(d,e){var f=function(a){return b(a).then(function(){c=!0,d(a)})};a.reduce(function(a,b){return a["catch"](function(){if(!c)return f(b)})},f(a.shift()))["catch"](e)})},o=function(a){return a};a.Img=h,a.useImage=g,Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
