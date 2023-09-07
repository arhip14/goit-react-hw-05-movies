/*! For license information please see 850.65657650.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[850],{850:function(t,r,n){n.r(r);var e,o,i,a,c,u,h=n(439),f=n(168),s=n(791),l=n(689),p=n(256),d=n(867),g=n(87),v=n(184),m=d.ZP.div(e||(e=(0,f.Z)(["\n  text-align: center;\n  background: linear-gradient(to bottom, #333, #000);\n  padding: 20px;\n  color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  font-family: 'Arial', sans-serif;\n"]))),y=d.ZP.h2(o||(o=(0,f.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n  color: #fff;\n\n  @media (max-width: 768px) {\n    font-size: 20px;\n  }\n\n  @media (max-width: 576px) {\n    font-size: 18px;\n  }\n"]))),w=d.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  margin-top: 20px;\n"]))),x=d.ZP.div(a||(a=(0,f.Z)(["\n  width: calc(33.33% - 20px);\n  margin-bottom: 20px;\n  background-color: #f0f0f0;\n  padding: 10px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  transition: transform 0.3s ease;\n  margin-right: 20px;\n\n  &:nth-child(3n) {\n    margin-right: 0;\n  }\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  @media (max-width: 768px) {\n    width: calc(50% - 20px);\n    margin-right: 0;\n\n    &:nth-child(2n) {\n      margin-right: 20px;\n    }\n  }\n\n  @media (max-width: 576px) {\n    width: 100%;\n    margin-right: 0;\n\n    &:nth-child(2n) {\n      margin-right: 0;\n    }\n  }\n"]))),b=d.ZP.img(c||(c=(0,f.Z)(["\n  width: 100%;\n  height: auto;\n"]))),L=d.ZP.h3(u||(u=(0,f.Z)(["\n  font-size: 20px;\n  font-weight: bold;\n  color: #0074d9;\n  text-transform: uppercase;\n"])));r.default=function(){var t=(0,l.TH)(),r=(0,s.useState)([]),n=(0,h.Z)(r,2),e=n[0],o=n[1];return(0,s.useEffect)((function(){var r=new URLSearchParams(t.search).get("q");r&&(0,p.z1)(r).then((function(t){o(t)})).catch((function(t){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u043e\u0448\u0443\u043a\u0443 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",t)}))}),[t.search]),(0,v.jsxs)(m,{children:[(0,v.jsx)(y,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043f\u043e\u0448\u0443\u043a\u0443 \u0444\u0456\u043b\u044c\u043c\u0456\u0432"}),(0,v.jsx)(w,{children:e&&e.length>0?e.map((function(t){return(0,v.jsx)(x,{children:(0,v.jsxs)(g.rU,{to:"/movies/".concat(t.id),children:[(0,v.jsx)(b,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,v.jsx)(L,{children:t.title})]})},t.id)})):null})]})}},256:function(t,r,n){n.d(r,{Df:function(){return h},TP:function(){return s},tx:function(){return l},z1:function(){return f},zv:function(){return u}});var e=n(861),o=n(243),i=n(596);function a(){a=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",h=i.toStringTag||"@@toStringTag";function f(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,n){return t[r]=n}}function s(t,r,n,e){var i=r&&r.prototype instanceof m?r:m,a=Object.create(i.prototype),c=new G(e||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var p="suspendedStart",d="executing",g="completed",v={};function m(){}function y(){}function w(){}var x={};f(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==n&&e.call(L,c)&&(x=L);var E=w.prototype=m.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(f).then((function(t){h.value=t,a(h)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,n,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=P(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var h=l(r,n,e);if("normal"===h.type){if(o=e.done?g:"suspendedYield",h.arg===v)continue;return{value:h.arg,done:e.done}}"throw"===h.type&&(o=g,e.method="throw",e.arg=h.arg)}}}function P(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,P(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=l(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return y.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:y,configurable:!0}),y.displayName=f(w,h,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,h,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(k.prototype),f(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new k(s(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),f(E,h,"Generator"),f(E,c,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=N,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),h=e.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:N(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}var c=o.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f7ae4055ff38708d9955df5ca1f5f0c3"}}),u=function(t){return c.get("/movie/".concat(t,"/credits"))},h=function(){return c.get("/trending/movie/week")},f=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r){t.next=4;break}return i.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443"),t.abrupt("return",[]);case 4:return t.next=6,c.get("/search/movie",{params:{query:r}});case 6:if(n=t.sent,0!==(e=n.data.results).length){t.next=11;break}return i.Am.info("\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.abrupt("return",[]);case 11:return i.Am.success("\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.abrupt("return",e);case 15:throw t.prev=15,t.t0=t.catch(0),t.t0;case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(r){return t.apply(this,arguments)}}(),s=function(t){return c.get("/movie/".concat(t))},l=function(t){return c.get("/movie/".concat(t,"/reviews"))}}}]);
//# sourceMappingURL=850.65657650.chunk.js.map