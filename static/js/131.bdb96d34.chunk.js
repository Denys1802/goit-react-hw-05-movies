"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[131],{131:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var r,a,c,u=e(439),i=e(791),s=e(171),o=e(168),p=e(444),f=e(87),l=(0,p.ZP)(f.OL)(r||(r=(0,o.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n  display: flex;\n"]))),h=p.ZP.img(a||(a=(0,o.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),d=p.ZP.p(c||(c=(0,o.Z)(["\n  margin-left: 10px;\n"]))),x=e(184);var g,m=function(t){return t.trendings.map((function(t){return(0,x.jsx)("li",{children:(0,x.jsxs)(l,{to:"/movies/".concat(t.id),children:[(0,x.jsx)(h,{src:"https://image.tmdb.org/t/p/original/".concat(t.poster_path),alt:t.title,width:50,height:50}),(0,x.jsx)(d,{children:t.title})]})},t.id)}))},v=p.ZP.div(g||(g=(0,o.Z)(["\n  max-width: 1280px;\n  margin: 0 auto;\n"]))),b=function(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1];return(0,i.useEffect)((function(){(0,s.Tg)().then((function(t){r(t)}))}),[]),(0,x.jsxs)(v,{children:[(0,x.jsx)("h1",{children:"Most popular movies"}),e.length>0&&(0,x.jsx)("ul",{children:(0,x.jsx)(m,{trendings:e})})]})}},171:function(t,n,e){e.d(n,{Eb:function(){return h},Pg:function(){return f},SM:function(){return x},Tg:function(){return o},gH:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="https://api.themoviedb.org/3",s="?api_key=cf86f342db546e57780c24367a3912bf";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/day").concat(s));case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n).concat(s,"&language=en-US"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits").concat(s,"&language=en-US"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews").concat(s,"&language=en-US"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie").concat(s,"&query=").concat(n));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=131.bdb96d34.chunk.js.map