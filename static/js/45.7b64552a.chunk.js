"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[45],{2795:function(t,e,n){n.d(e,{Y5:function(){return h},_k:function(){return s},bI:function(){return p},sv:function(){return g},xc:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),i=n.n(u);function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=125725f49ad2ae69609a1a5a9c4211d9");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},7045:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r,a=n(885),c=n(2791),u=n(2795),i=n(6871),s=n(168),o=n(6444).ZP.img(r||(r=(0,s.Z)(["\n  height: 10%;\n  width: 10%;\n"]))),p=n(184);function f(t){var e=t.cast;return(0,p.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)(o,{src:null!==n?"".concat("https://image.tmdb.org/t/p/original").concat(n):"https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png",alt:r}),(0,p.jsx)("p",{children:r}),(0,p.jsxs)("p",{children:[" Character: ",a]})]},e)}))})}function h(){var t=(0,i.UO)().movieId,e=(0,c.useState)(null),n=(0,a.Z)(e,2),r=n[0],s=n[1];return(0,c.useEffect)((function(){(0,u.xc)(t).then(s)}),[t]),(0,p.jsx)(p.Fragment,{children:r&&(0,p.jsx)(f,{cast:r.cast})})}}}]);
//# sourceMappingURL=45.7b64552a.chunk.js.map