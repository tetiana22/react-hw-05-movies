"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{877:function(n,t,e){e.d(t,{E3:function(){return f},Hx:function(){return d},Y5:function(){return p},uV:function(){return l},wr:function(){return s}});var r=e(861),a=e(757),c=e.n(a),o=e(294),u="https://api.themoviedb.org",i="49f38d7c71c1f723c765b666aee6477b",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/3/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/3/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/3/movie/").concat(t,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},815:function(n,t,e){e.d(t,{$0:function(){return p},Fg:function(){return x},HC:function(){return h},NZ:function(){return l},aV:function(){return d}});var r,a,c,o,u,i=e(168),s=e(924),f=e(87),p=s.ZP.section(r||(r=(0,i.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n  margin-top: 10px;\n"]))),l=s.ZP.h2(a||(a=(0,i.Z)(["\n  font-size: 25px;\n  font-weight: 600;\n  text-align: center;\n  color: #1c85ff;\n  padding-left: 50px;\n"]))),d=s.ZP.ul(c||(c=(0,i.Z)(["\n  list-style: none;\n  color: #fff;\n"]))),h=s.ZP.li(o||(o=(0,i.Z)(["\n  display: flex;\n  gap: 30px;\n  jystify-content: centre;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),x=(0,s.ZP)(f.rU)(u||(u=(0,i.Z)(["\n  font-size: 20px;\n  color: #0d57aa;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #1c85ff;\n    border-bottom: 2px solid #1c85ff;\n  }\n"])))},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,o,u=e(861),i=e(439),s=e(757),f=e.n(s),p=e(689),l=e(877),d=e(791),h=e(815),x=e(168),g=e(924),v=g.ZP.p(r||(r=(0,x.Z)(["\n  margin: 30px auto 0 auto;\n  text-align: center;\n  padding: 20px;\n  background-color: #f8f8f8;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n"]))),Z=g.ZP.p(a||(a=(0,x.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n"]))),m=g.ZP.h2(c||(c=(0,x.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  color: #1c85ff;\n"]))),w=g.ZP.li(o||(o=(0,x.Z)(["\n  margin-bottom: 40px;\n"]))),b=e(184),k=function(){var n=(0,p.UO)().movieId,t=(0,d.useState)([]),e=(0,i.Z)(t,2),r=e[0],a=e[1];return(0,d.useEffect)((function(){var t=function(){var t=(0,u.Z)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.Hx)(n);case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,b.jsx)(h.$0,{children:r.length?(0,b.jsx)(h.aV,{children:r.map((function(n){return(0,b.jsxs)(w,{children:[(0,b.jsxs)(m,{children:["Author: ",n.author]}),(0,b.jsx)(Z,{children:n.content})]},n.id)}))}):(0,b.jsx)(v,{children:"We don't have any reviews for this movie yet."})})}}}]);
//# sourceMappingURL=387.1f194689.chunk.js.map