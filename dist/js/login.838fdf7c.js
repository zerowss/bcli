(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"5d61":function(t,e,r){},"5dc8":function(t,e,r){"use strict";var n=r("9c37"),a=r.n(n);a.a},6880:function(t,e,r){"use strict";var n=r("5d61"),a=r.n(n);a.a},"68a8":function(t,e,r){"use strict";var n=r("ed6f"),a=r.n(n);a.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=b;var m="suspendedStart",f="suspendedYield",h="executing",p="completed",d={},v={};v[i]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(P([])));w&&w!==n&&a.call(w,i)&&(v=w);var y=_.prototype=x.prototype=Object.create(v);F.prototype=y.constructor=_,_.constructor=F,_[c]=F.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===F||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},u.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[s]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,r,n){var a=new E(b(t,e,r,n));return u.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},k(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return s.type="throw",s.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var a=e&&e.prototype instanceof x?e:x,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=L(t,r,i),o}function C(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function F(){}function _(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,n,o,i){var s=C(t[r],t,n);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},i)}i(s.arg)}var r;function n(t,n){function a(){return new Promise(function(r,a){e(t,n,r,a)})}return r=r?r.then(a,a):a()}this._invoke=n}function L(t,e,r){var n=m;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return R()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=$(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===m)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=C(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function $(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,$(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=C(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"9c37":function(t,e,r){},"9cb5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-login"},[r("div",{staticClass:"user-login-bg"}),r("div",{staticClass:"content-wrapper"},[t._m(0),r("div",{staticClass:"form-container"},[1===t.activity?r("userLogin"):2===t.activity?r("userRegister",{attrs:{changTab:t.resetClick}}):t._e(),r("el-row",{staticClass:"tips"},[1===t.activity?r("span",{staticClass:"link"},[t._v("没有账号？"),r("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.resetClick(2)}}},[t._v("立即注册")])]):2===t.activity?r("span",{staticClass:"link"},[r("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.resetClick(1)}}},[t._v("已有账号登录")])]):t._e(),r("span",{staticClass:"line"},[t._v("|")]),r("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("忘记密码")])]),r("el-row",{staticClass:"oauth-box"},[r("div",{staticClass:"hint"},[t._v("第三方账号登录：")]),r("div",{staticClass:"oauth"},[r("div",{staticClass:"oauth-bg",on:{click:t.weChatLogin}},[r("svg-icon",{attrs:{"icon-class":"wechat","class-name":"wechat-icon"}})],1)])])],1)])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"slogan"},[t._v("\n            欢迎使用 "),r("br"),t._v(" zero管理系统\n        ")])}];r("96cf");function o(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function i(t,e){try{var r=o[t](e),i=r.value}catch(t){return void a(t)}r.done?n(i):Promise.resolve(i).then(s,c)}function s(t){i("next",t)}function c(t){i("throw",t)}s()})}}r("cadf"),r("551c"),r("097d");var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-form"},[r("h4",{staticClass:"form-title"},[t._v("登 录")]),r("el-form",{ref:"form",attrs:{model:t.ruleForm,"label-width":"0",rules:t.rules}},[r("div",{staticClass:"form-items"},[r("el-row",{staticClass:"form-item"},[r("el-col",[r("el-form-item",{attrs:{prop:"username"}},[r("div",{staticClass:"form-line"},[r("svg-icon",{attrs:{"icon-class":"login","class-name":"normall-icon"}}),r("el-input",{attrs:{placeholder:"昵称/邮箱"},model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}})],1)])],1)],1),r("el-row",{staticClass:"form-item"},[r("el-col",[r("el-form-item",{attrs:{prop:"password"}},[r("div",{staticClass:"form-line"},[r("svg-icon",{attrs:{"icon-class":"password","class-name":"normall-icon"}}),r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1)])],1)],1),r("el-row",{staticClass:"form-item"},[r("el-col",[r("el-form-item",[r("el-checkbox",{staticClass:"checkbox"},[t._v("记住账号")])],1)],1)],1),r("el-row",{staticClass:"form-item"},[r("el-button",{staticClass:"submit-btn",attrs:{type:"primary",size:"small"},on:{click:function(e){t.submintForm("form")}}},[t._v("登 录")])],1)],1)])],1)},s=[],c=r("a78e"),l=r.n(c),u=r("3faf"),m={name:"userLogin",data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"昵称/邮箱不能为空"}],password:[{required:!0,message:"密码不能为空"}]}}},methods:{submintForm:function(t){var e=this;console.log(this.ruleForm,"ss"),this.$refs[t].validate(function(t){if(!t)return!1;e.login()})},login:function(){var t=o(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.ruleForm,t.next=3,this.$http.post("/api/login",e);case 3:r=t.sent,console.log(r),r.data&&0===r.data.code&&(u["a"].setItem("userInfo",r.data.data),l.a.set("token",r.data.token),l.a.set("token-exp",(new Date).getTime()),l.a.set("userName",r.data.data.username),this.$message.success("登录成功"),this.$router.push("/"));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},f=m,h=(r("5dc8"),r("2877")),p=Object(h["a"])(f,i,s,!1,null,"76ef0025",null);p.options.__file="index.vue";var d=p.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register-form"},[r("h4",{staticClass:"form-title"},[t._v("注 册")]),r("el-form",{ref:"registerForm",attrs:{model:t.ruleForm,"label-width":"0",rules:t.rules}},[r("div",{staticClass:"form-items"},[r("el-row",{staticClass:"form-item"},[r("el-col",[r("el-form-item",{attrs:{prop:"username"}},[r("div",{staticClass:"form-line"},[r("svg-icon",{attrs:{"icon-class":"login","class-name":"normall-icon"}}),r("el-input",{attrs:{placeholder:"昵称"},on:{blur:t.ruleName},model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}})],1)])],1)],1),r("el-row",{staticClass:"form-item"},[r("el-col",[r("el-form-item",{attrs:{prop:"email"}},[r("div",{staticClass:"form-line"},[r("svg-icon",{attrs:{"icon-class":"email","class-name":"normall-icon"}}),r("el-input",{attrs:{placeholder:"邮箱"},on:{change:t.changEmail},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}}),r("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShowCode,expression:"isShowCode"}],attrs:{disabled:t.isCanCode,type:"text"},on:{click:t.getEmailCode}},[t._v(t._s(t.emailTip))])],1)])],1)],1),t.isShowCode?r("el-row",{staticClass:"form-item"},[r("el-col",[r("el-form-item",{attrs:{prop:"code"}},[r("div",{staticClass:"form-line"},[r("svg-icon",{attrs:{"icon-class":"code","class-name":"normall-icon"}}),r("el-input",{attrs:{maxlength:"6",placeholder:"验证码"},model:{value:t.ruleForm.code,callback:function(e){t.$set(t.ruleForm,"code",e)},expression:"ruleForm.code"}})],1)])],1)],1):t._e(),r("el-row",{staticClass:"form-item"},[r("el-col",[r("el-form-item",{attrs:{prop:"password"}},[r("div",{staticClass:"form-line"},[r("svg-icon",{attrs:{"icon-class":"password","class-name":"normall-icon"}}),r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1)])],1)],1),r("el-row",{staticClass:"form-item"},[r("el-col",[r("el-form-item",{attrs:{prop:"checkPass"}},[r("div",{staticClass:"form-line"},[r("svg-icon",{attrs:{"icon-class":"password","class-name":"normall-icon"}}),r("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.ruleForm.checkPass,callback:function(e){t.$set(t.ruleForm,"checkPass",e)},expression:"ruleForm.checkPass"}})],1)])],1)],1),r("el-row",{staticClass:"form-item"},[r("el-button",{staticClass:"submit-btn",attrs:{type:"primary",size:"small"},on:{click:function(e){t.submintRegisterForm("registerForm")}}},[t._v("注 册")])],1)],1)])],1)},g=[],w=function(t){var e=/^[0-9A-Za-z][-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/;return e.test(t.trim())},y=function(t){return JSON.parse(JSON.stringify(t))},b={name:"userRegister",data:function(){var t=this,e=function(e,r,n){r?(t.isSameName&&n(new Error("昵称不可用")),n()):n(new Error("请输入昵称"))},r=function(e,r,n){r?(""!==t.ruleForm.checkPass&&t.$refs.registerForm.validateField("checkPass"),n()):n(new Error("请输入密码"))},n=function(e,r,n){r?r!==t.ruleForm.password?n(new Error("两次输入密码不一致!")):n():n(new Error("请再次输入密码"))},a=function(t,e,r){e?isNaN(e)||6!=e.length?r(new Error("验证码格式错误!")):r():r(new Error("验证码不能为空"))},o=function(t,e,r){e?w(e)?r():r(new Error("邮箱格式错误!")):r(new Error("邮箱不能为空"))};return{ruleForm:{username:"",email:"",password:"",checkPass:""},rules:{username:[{required:!0,validator:e,trigger:"blur"}],email:[{required:!0,validator:o,trigger:"blur"}],password:[{required:!0,validator:r,trigger:"blur"}],checkPass:[{required:!0,validator:n,trigger:"blur"}],code:[{required:!0,validator:a,trigger:"blur"}]},isShowCode:!1,isCanCode:!1,emailTip:"获取验证码",countDown:10,isSameName:!1}},props:{changeTab:{type:Function}},methods:{register:function(){var t=o(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=y(this.ruleForm),t.next=3,this.$http.post("/api/register",e);case 3:r=t.sent,console.log(r,"ppos"),r.data&&0===r.data.code&&(this.$message.success("注册成功"),this.changeTab(1));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),submintRegisterForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.register()})},changEmail:function(t){this.isShowCode=!!t},getEmailCode:function(){var t=this;this.isCanCode=!0;var e=setInterval(function(){t.countDown--,t.emailTip="".concat(t.countDown,"秒后获取"),0==t.countDown&&(clearInterval(e),t.emailTip="获取验证码",t.isCanCode=!1,t.countDown=10)},1e3);this.getCode()},getCode:function(){var t=o(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=y(this.ruleForm),t.next=3,this.$http.post("/api/getEmailCode",{username:e.username,email:e.email});case 3:r=t.sent,r.data&&0===r.data.code&&this.$message.success("验证码已发送");case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),ruleName:function(){var t=this;this.getIsSameName().then(function(e){t.isSameName=e,t.$refs.registerForm.validateField("username")})},getIsSameName:function(){var t=o(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=!1,r=y(this.ruleForm),t.next=4,this.$http.get("/api/isSameName",{username:r.username});case 4:return n=t.sent,n.data&&0===n.data.code&&(e=1!=n.data.data.status),t.abrupt("return",e);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},C=b,x=(r("6880"),Object(h["a"])(C,v,g,!1,null,"6bda9544",null));x.options.__file="index.vue";var F=x.exports,_={components:{userLogin:d,userRegister:F},data:function(){return{activity:1}},mounted:function(){},methods:{resetClick:function(t){this.activity=t},weChatLogin:function(){var t=o(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/api/wechat/redirect",{});case 2:e=t.sent,e.data&&0==e.data.code&&(window.location.href=e.data.url);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},k=_,E=(r("68a8"),r("f353"),Object(h["a"])(k,n,a,!1,null,"7fcb64be",null));E.options.__file="index.vue";e["default"]=E.exports},db3a:function(t,e,r){},ed6f:function(t,e,r){},f353:function(t,e,r){"use strict";var n=r("db3a"),a=r.n(n);a.a}}]);
//# sourceMappingURL=login.838fdf7c.js.map