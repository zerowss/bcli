(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)o=s[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return u.p+"js/"+({login:"login"}[e]||e)+"."+{login:"01c3e69f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={login:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({login:"login"}[e]||e)+"."+{login:"3862832e"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===r||i===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],i=s.getAttribute("data-href");if(i===r||i===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var i,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=s(e),i=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,l.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},5073:function(e,t,n){"use strict";var r=n("6db1"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("a481"),n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=(n("f751"),n("bc3a")),a=n.n(o),c=n("4328"),s=n.n(c),u=n("a78e"),i=n.n(u);console.log(Object({NODE_ENV:"production",VUE_APP_API:"http://www.wsskk.top",BASE_URL:"/"}),"环境");var l,f,p,d,m=[];function g(e){var t=e&&e.message&&e.message.canceled;t||f(e)}function h(e){e.interceptors.request.use(function(e){return l(),e},function(e){return d(),Promise.reject(e)}),e.interceptors.response.use(function(e){return p(e),d(),e},function(e){return d(),g(e),Promise.reject(e)})}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.globalHandle,n=void 0===t||t,r=e.isTransformRequest,o=void 0===r||r,c=a.a.CancelToken,u=i.a.get("token"),l={cancelToken:new c(function(e){m.push(e)}),method:e.method};o&&(l.transformRequest=[function(e){return e=s.a.stringify(e),e}]),"post"==e.method&&(l.headers={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"});var f=a.a.create(l);return f.defaults.headers.common["Authorization"]="Bearer "+u,n&&h(f),f},b={init:function(e){var t={before:function(){},error:function(){},success:function(){},complete:function(){}};e=Object.assign({},t,e),l=e.before,f=e.error,p=e.success,d=e.complete},get:function(e,t,n){return v(n).get(e,{params:t})},post:function(e,t,n){var r={options:n||{},method:"post"};return v(r).post(e,t)}},_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},y=[],w={name:"app"},j=w,x=(n("034f"),n("2877")),E=Object(x["a"])(j,_,y,!1,null,null,null);E.options.__file="App.vue";var O=E.exports,T=(n("7f7f"),n("8c4f")),P=n("323e"),k=n.n(P),$=(n("a5d8"),n("8afe")),S=function(e){return n.e("login").then(function(){return e(n("9cb5"))}.bind(null,n)).catch(n.oe)},A=[{path:"/login",name:"login",component:S}],C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],N={},M=N,q=(n("82a9"),Object(x["a"])(M,C,B,!1,null,"bfc157fc",null));q.options.__file="index.vue";var H=q.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{src:n("cf05")}}),r("HelloWorld",{attrs:{msg:e.msg}})],1)},W=[],z=(n("96cf"),n("3040")),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},U=[],I={name:"HelloWorld",props:{msg:String}},J=I,V=(n("67eb"),Object(x["a"])(J,L,U,!1,null,"7809147a",null));V.options.__file="HelloWorld.vue";var D=V.exports,F={components:{HelloWorld:D},data:function(){return{msg:"hello"}},created:function(){this.getMsg()},methods:{getMsg:function(){var e=Object(z["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/api/example/get");case 2:t=e.sent,console.log(t,"res"),t.data&&0==t.data.code&&(this.msg=t.data.data.examples[0]["msg"]);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},G=F,K=(n("5073"),Object(x["a"])(G,R,W,!1,null,"5c333a5d",null));K.options.__file="index.vue";var Q=K.exports,X=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:H}],Y=[].concat(X),Z=Object($["a"])(A).concat(Object($["a"])(Y)),ee=Z;r["default"].use(T["a"]);var te=new T["a"]({routes:ee});console.log("routes",ee),te.beforeEach(function(e,t,n){return k.a.start(),console.log(e,"to"),console.log(t,"from"),i.a.get("userName")||"login"===e.name?n():n({name:"login"})}),te.afterEach(function(){k.a.done()});var ne=te,re=n("2f62");r["default"].use(re["a"]);var oe=new re["a"].Store({state:{},mutations:{},actions:{}}),ae=n("5c96"),ce=n.n(ae);n("c69f");r["default"].use(ce.a,{size:"small",zIndex:3e3});n("abe2");r["default"].prototype.$http=b,r["default"].config.productionTip=!1;var se=new r["default"]({router:ne,store:oe,render:function(e){return e(O)}}).$mount("#app");b.init({success:function(e){if(108===e.data.code)return se.$router.replace("/login");if(e.data&&0!==e.data.code&&"success"!=e.data.status){var t=e.data.desc?e.data.desc:"系统错误";return se.$message.error(t,0)}e.data&&e.data.code},error:function(e){if(e&&401===e.response.status)return se.$router.replace("/login");console.log("err:",e.response.data);var t=e.response.data.message||e;se.$alert("系统错误: ".concat(t),"系统提示信息",{confirmButtonText:"确定",customClass:"re-alert-error-message"})}})},"67eb":function(e,t,n){"use strict";var r=n("de26"),o=n.n(r);o.a},"6db1":function(e,t,n){},"82a9":function(e,t,n){"use strict";var r=n("ec83"),o=n.n(r);o.a},abe2:function(e,t,n){},c21b:function(e,t,n){},c69f:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.57dad628.png"},de26:function(e,t,n){},ec83:function(e,t,n){}});
//# sourceMappingURL=app.ad8128f0.js.map