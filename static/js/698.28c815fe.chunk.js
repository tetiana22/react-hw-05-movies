"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[698],{877:function(n,t,e){e.d(t,{E3:function(){return f},Hx:function(){return d},Y5:function(){return p},uV:function(){return l},wr:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(294),o="https://api.themoviedb.org",i="49f38d7c71c1f723c765b666aee6477b",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/movie/").concat(t,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},698:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(791),i=e(854),s=e(877),f=e(815),p=e(184),l=function(n){var t=n.trendingMovies;return(0,p.jsxs)(f.$0,{children:[(0,p.jsx)(f.NZ,{children:"Trending Movies"}),(0,p.jsx)(f.aV,{children:t.map((function(n){return(0,p.jsx)(f.HC,{children:(0,p.jsx)(f.Fg,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})},d=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],f=(0,o.useState)(!1),d=(0,a.Z)(f,2),v=d[0],g=d[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.wr)();case 3:t=n.sent,c(t),g(!0),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{trendingMovies:e}),v&&(0,p.jsx)(i.Z,{})]})}},854:function(n,t,e){var r=e(137),a=e(184);t.Z=function(){return(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,a.jsx)(r.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})})}},815:function(n,t,e){e.d(t,{$0:function(){return p},Fg:function(){return g},HC:function(){return v},NZ:function(){return l},aV:function(){return d}});var r,a,c,u,o,i=e(168),s=e(924),f=e(87),p=s.ZP.section(r||(r=(0,i.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n  margin-top: 10px;\n"]))),l=s.ZP.h2(a||(a=(0,i.Z)(["\n  font-size: 25px;\n  font-weight: 600;\n  text-align: center;\n  color: #1c85ff;\n  padding-left: 50px;\n"]))),d=s.ZP.ul(c||(c=(0,i.Z)(["\n  list-style: none;\n  color: #fff;\n"]))),v=s.ZP.li(u||(u=(0,i.Z)(["\n  display: flex;\n  gap: 30px;\n  jystify-content: centre;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),g=(0,s.ZP)(f.rU)(o||(o=(0,i.Z)(["\n  font-size: 20px;\n  color: #0d57aa;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #1c85ff;\n    border-bottom: 2px solid #1c85ff;\n  }\n"])))}}]);
//# sourceMappingURL=698.28c815fe.chunk.js.map