"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[934],{881:function(t,n,e){e.r(n);var r=e(439),a=e(791),u=e(689),c=e(171),s=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],i=n[1],o=(0,u.UO)().id;return(0,a.useEffect)((function(){null===e&&(0,c.SM)(o).then((function(t){return i(t.data.results)}))}),[o,e]),(0,s.jsx)(s.Fragment,{children:e&&e.map((function(t){return(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)("h4",{children:t.author}),(0,s.jsx)("p",{children:t.content})]})},t.id)}))})}},171:function(t,n,e){e.d(n,{Eb:function(){return l},Pg:function(){return f},SM:function(){return v},Tg:function(){return o},gH:function(){return g}});var r=e(861),a=e(757),u=e.n(a),c=e(243),s="https://api.themoviedb.org/3",i="?api_key=cf86f342db546e57780c24367a3912bf";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/trending/movie/day").concat(i));case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(n).concat(i,"&language=en-US"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(n,"/credits").concat(i,"&language=en-US"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(n,"/reviews").concat(i,"&language=en-US"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/search/movie").concat(i,"&query=").concat(n));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=934.05fb3e73.chunk.js.map