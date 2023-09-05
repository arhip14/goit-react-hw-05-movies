/*! For license information please see 106.6764d94d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{106:function(t,r,e){e.r(r);var n,o,i,a,c,u,s,f=e(861),h=e(439),l=e(168),p=e(791),d=e(867),v=e(87),y=e(689),g=e(256),m=e(184);function w(){w=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:j(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var l="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==e&&n.call(L,a)&&(x=L);var E=m.prototype=y.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function j(r,e,n){var o=l;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===l)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},k(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}var x=d.ZP.div(n||(n=(0,l.Z)(["\n  text-align: center;\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  font-family: 'Arial', sans-serif;\n  margin: 20px;\n\n  @media (max-width: 768px) {\n    padding: 10px;\n  }\n"]))),b=d.ZP.h2(o||(o=(0,l.Z)(["\n  font-size: 48px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  color: #e74c3c;\n  animation: fadeIn 1s ease-in-out;\n\n  @media (max-width: 768px) {\n    font-size: 36px;\n  }\n"]))),L=d.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),E=d.ZP.img(a||(a=(0,l.Z)(["\n  max-width: 300px;\n  margin-right: 20px;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  animation: fadeIn 1s ease-in-out;\n\n  @media (max-width: 768px) {\n    max-width: 100%;\n    margin-right: 0;\n    margin-bottom: 20px;\n  }\n"]))),k=d.ZP.div(c||(c=(0,l.Z)(["\n  text-align: left;\n  flex: 1;\n  margin-top: 20px;\n  padding-left: 20px; \n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding-left: 0; \n  }\n"]))),_=d.ZP.h3(u||(u=(0,l.Z)(["\n  font-size: 36px;\n  font-weight: bold;\n  color: #0074d9;\n  margin-top: 0;\n\n  @media (max-width: 768px) {\n    font-size: 28px;\n  }\n"]))),j=(0,d.ZP)(v.rU)(s||(s=(0,l.Z)(["\n  padding: 10px 20px;\n  background-color: #0074d9;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-family: 'Arial', sans-serif;\n  text-decoration: none;\n  margin-top: 20px;\n  display: inline-block;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"])));r.default=function(){var t=(0,y.UO)().movieId,r=(0,p.useState)(null),e=(0,h.Z)(r,2),n=e[0],o=e[1];return(0,p.useEffect)((function(){var r=function(){var r=(0,f.Z)(w().mark((function r(){var e;return w().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,g.TP)(t);case 3:e=r.sent,o(e.data),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0444\u0456\u043b\u044c\u043c\u0443:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,m.jsxs)(x,{children:[(0,m.jsx)(b,{children:"\u0414\u0435\u0442\u0430\u043b\u0456 \u0444\u0456\u043b\u044c\u043c\u0443"}),(0,m.jsx)(j,{to:"/",children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043d\u0430\u0437\u0430\u0434"}),n&&(0,m.jsxs)(L,{children:[(0,m.jsx)(E,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title}),(0,m.jsxs)(k,{children:[(0,m.jsx)(_,{children:n.title}),(0,m.jsxs)("p",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",n.vote_average]}),(0,m.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0432\u0438\u0445\u043e\u0434\u0443: ",n.release_date]}),(0,m.jsxs)("p",{children:["\u041e\u043f\u0438\u0441: ",n.overview]})]})]})]})}},256:function(t,r,e){e.d(r,{DX:function(){return h},Df:function(){return u},OB:function(){return f},TP:function(){return l},z1:function(){return s}});var n=e(861),o=e(243),i=e(596);function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:j(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function w(){}var x={};f(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==e&&n.call(L,c)&&(x=L);var E=w.prototype=g.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function j(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=l(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},k(_.prototype),f(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),f(E,s,"Generator"),f(E,c,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var c=o.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f7ae4055ff38708d9955df5ca1f5f0c3"}}),u=function(){return c.get("/trending/movie/week")},s=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r){t.next=4;break}return i.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443"),t.abrupt("return",[]);case 4:return t.next=6,c.get("/search/movie",{params:{query:r}});case 6:if(e=t.sent,0!==(n=e.data.results).length){t.next=11;break}return i.Am.info("\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.abrupt("return",[]);case 11:return i.Am.success("\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.abrupt("return",n);case 15:throw t.prev=15,t.t0=t.catch(0),t.t0;case 18:case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r){t.next=4;break}return i.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043b\u0456\u0442\u0435\u0440\u0443 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443"),t.abrupt("return",[]);case 4:return t.next=6,c.get("/search/movie",{params:{query:r}});case 6:if(e=t.sent,0!==(n=e.data.results).length){t.next=11;break}return i.Am.info("\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.abrupt("return",[]);case 11:return i.Am.success("\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.abrupt("return",n);case 15:throw t.prev=15,t.t0=t.catch(0),t.t0;case 18:case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r){t.next=4;break}return i.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443"),t.abrupt("return",[]);case 4:return t.next=6,c.get("/search/movie",{params:{query:r}});case 6:if(e=t.sent,0!==(n=e.data.results).length){t.next=11;break}return i.Am.info("\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.abrupt("return",[]);case 11:return i.Am.success("\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.abrupt("return",n);case 15:throw t.prev=15,t.t0=t.catch(0),t.t0;case 18:case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(r){return t.apply(this,arguments)}}(),l=function(t){return c.get("/movie/".concat(t))}}}]);
//# sourceMappingURL=106.6764d94d.chunk.js.map