"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[982],{7234:function(n,e,t){t.d(e,{Z:function(){return o}});var r,a=t(168),i=t(6444).ZP.h1(r||(r=(0,a.Z)(["\n  padding: 8px;\n  margin-top: 10px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),c=t(184);function o(n){var e=n.children;return(0,c.jsx)(i,{children:e})}},2795:function(n,e,t){t.d(e,{Y5:function(){return l},_k:function(){return u},bI:function(){return p},sv:function(){return v},xc:function(){return h}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),o=t.n(c);function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/trending/movie/day?api_key=125725f49ad2ae69609a1a5a9c4211d9");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4982:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a,i=t(885),c=t(2791),o=t(3504),u=t(6871),s=t(2795),p=t(7234),d=t(168),l=t(6444),f=l.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 10px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n"]))),h=l.ZP.div(a||(a=(0,d.Z)(["\n  margin-left: 10px;\n"]))),x=t(184);function v(n){var e=n.movie,t=n.onClick,r=e.title,a=e.poster_path,i=e.overview,c=e.vote_average;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{type:"button",onClick:t,children:"Go back"}),(0,x.jsx)(p.Z,{children:"".concat(r)}),(0,x.jsxs)(f,{children:[(0,x.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original").concat(a),alt:r}),(0,x.jsxs)(h,{children:[(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:i}),(0,x.jsx)("h3",{children:"Vote"}),(0,x.jsx)("p",{children:c}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:e.genres.map((function(n){var e=n.name;return"".concat(e," ")}))})]})]})]})}function g(){var n,e,t,r,a=(0,c.useState)(null),p=(0,i.Z)(a,2),d=p[0],l=p[1],f=(0,u.UO)().movieId,h=(0,u.s0)(),g=(0,u.TH)();return(0,c.useEffect)((function(){(0,s.Y5)(f).then(l)}),[f]),(0,x.jsxs)(x.Fragment,{children:[d&&(0,x.jsxs)("main",{children:[(0,x.jsx)(v,{onClick:function(){var n,e;return h(null!==(n=null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},movie:d}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsx)(o.rU,{to:"cast",state:{from:null!==(n=null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"},children:"Cast"}),(0,x.jsx)("br",{}),(0,x.jsx)(o.rU,{to:"reviews",state:{from:null!==(t=null===g||void 0===g||null===(r=g.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Reviews"})]}),(0,x.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=982.b4a0a904.chunk.js.map