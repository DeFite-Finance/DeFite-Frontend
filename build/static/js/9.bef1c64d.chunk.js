(this["webpackJsonpdefite-frontend"]=this["webpackJsonpdefite-frontend"]||[]).push([[9],{1022:function(e,n,t){"use strict";t.r(n);t(0);var r=t(73),a=t(473),i=t(90),c=t(119),o=t(170),u=t(171),s=t(210),d=Object(c.a)({reducer:{modalShow:o.b,triedEager:u.a,modalExpand:s.a}}),l=t(6);n.default=function(e){var n=e.children;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(a.a,{store:d,children:Object(l.jsx)(r.b,{getLibrary:i.c,children:n})})})}},121:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.Injected="Injected",e.BSC="Binance Chain Wallet",e.WalletConnect="WalletConnect"}(r||(r={}))},168:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return o}));var r=t(285),a=t.n(r);var i=["https://bsc-dataseed.binance.org/","https://bsc-dataseed1.defibit.io/","https://bsc-dataseed1.ninicoin.io/"],c=function(){var e=a()(i);if(void 0!=e)return e};var o=function(){return parseInt("56",10)}},170:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(119),a=Object(r.b)({name:"modalShow",initialState:{show:!1},reducers:{changeState:function(e){e.show=!e.show}}}),i=a.actions.changeState;n.b=a.reducer},171:function(e,n,t){"use strict";t.d(n,"b",(function(){return i}));var r=t(119),a=Object(r.b)({name:"triedEager",initialState:{tried:!1},reducers:{setState:function(e,n){e.tried=n.payload}}}),i=a.actions.setState;n.a=a.reducer},210:function(e,n,t){"use strict";t.d(n,"b",(function(){return i}));var r=t(119),a=Object(r.b)({name:"modalExpand",initialState:{expand:!1},reducers:{setExpand:function(e,n){e.expand=n.payload}}}),i=a.actions.setExpand;n.a=a.reducer},293:function(e,n){},90:function(e,n,t){"use strict";t.d(n,"d",(function(){return h})),t.d(n,"a",(function(){return w})),t.d(n,"b",(function(){return j})),t.d(n,"c",(function(){return x})),t.d(n,"e",(function(){return S}));var r,a=t(38),i=t.n(a),c=t(74),o=t(82),u=t(166),s=t(204),d=t(167),l=t(472),b=t(168),f=t(121),p=Object(b.b)(),v=Object(b.a)();if(void 0==p)throw new Error("URL Type Error: should be string");if(NaN==v)throw new Error("Invalid Numneric Error: should be a valid number");var h=new u.a({supportedChainIds:[v]}),w=new s.BscConnector({supportedChainIds:[v]}),g=new d.b({rpc:Object(o.a)({},v,p),qrcode:!0,pollingInterval:12e3}),j=(r={},Object(o.a)(r,f.a.Injected,h),Object(o.a)(r,f.a.WalletConnect,g),Object(o.a)(r,f.a.BSC,w),r),x=function(e){var n=new l.a.providers.Web3Provider(e);return n.pollingInterval=12e3,n},S=function(){var e=Object(c.a)(i.a.mark((function e(n,t,r){var a,c,o,u,s,d,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((c=localStorage.getItem("Wallet"))!=f.a.BSC||!window.BinanceChain){e.next=7;break}return e.next=4,window.BinanceChain.bnbSign(t,r);case 4:return o=e.sent,u=o.signature,e.abrupt("return",u);case 7:if(c!=f.a.WalletConnect||!(null===(a=n.provider)||void 0===a?void 0:a.wc)){e.next=13;break}return d=l.a.utils.hexlify(l.a.utils.toUtf8Bytes(r)),e.next=11,null===(s=n.provider)||void 0===s?void 0:s.wc.signPersonalMessage([d,t]);case 11:return b=e.sent,e.abrupt("return",b);case 13:return e.abrupt("return",n.getSigner(t).signMessage(r));case 14:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=9.bef1c64d.chunk.js.map