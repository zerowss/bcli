(function(e){function t(t){for(var r,a,i=t[0],s=t[1],c=t[2],l=0,p=[];l<i.length;l++)a=i[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8a391d75"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e),u=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,s.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("bc3a"),u=n.n(o);n("4328");console.log(Object({NODE_ENV:"production",VUE_APP_API:"http://www.wsskk.top",BASE_URL:"/"}),"环境");var a={},i=u.a.create(a);i.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),i.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},r["default"].use(Plugin);Plugin;var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n("cf05")}}),r("HelloWorld",{attrs:{msg:e.msg}})],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},f=[],p={name:"HelloWorld",props:{msg:String}},d=p,m=(n("67eb"),n("2877")),g=Object(m["a"])(d,l,f,!1,null,"7809147a",null);g.options.__file="HelloWorld.vue";var v=g.exports,h={name:"app",components:{HelloWorld:v},data:function(){return{msg:"hello",date:""}},created:function(){this.getMsg()},methods:{getMsg:function(){var e=this;this.axios.get("/api/example/get").then(function(t){var n=t.data.data.examples;e.msg=n[0]["msg"]}).catch(function(e){console.log(e)})}}},b=h,_=(n("034f"),Object(m["a"])(b,s,c,!1,null,null,null));_.options.__file="App.vue";var y=_.exports,w=n("8c4f"),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},x=[],P={name:"home",components:{HelloWorld:v}},O=P,E=Object(m["a"])(O,j,x,!1,null,null,null);E.options.__file="Home.vue";var S=E.exports;r["default"].use(w["a"]);var H=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),W=n("2f62");r["default"].use(W["a"]);var k=new W["a"].Store({state:{},mutations:{},actions:{}}),A=n("5c96"),M=n.n(A);n("c69f");r["default"].use(M.a),r["default"].config.productionTip=!1,new r["default"]({router:H,store:k,render:function(e){return e(y)}}).$mount("#app")},"67eb":function(e,t,n){"use strict";var r=n("de26"),o=n.n(r);o.a},c21b:function(e,t,n){},c69f:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.57dad628.png"},de26:function(e,t,n){}});
//# sourceMappingURL=app.18fc1e59.js.map