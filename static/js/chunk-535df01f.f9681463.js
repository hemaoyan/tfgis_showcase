(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-535df01f"],{"12ab":function(t,s,o){"use strict";o.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"app_container"},[i("video",{staticStyle:{position:"absolute",width:"100%",height:"100%","object-fit":"fill"},attrs:{id:"videoLogin",muted:"",autoplay:"",loop:""},domProps:{muted:!0}},[i("source",{attrs:{src:t.$loginVideo}})]),i("div",{staticClass:"main"},[i("img",{staticClass:"topImage",attrs:{src:o("1fb1")}}),i("div",{staticClass:"loginMain"},[t._m(0),i("div",{staticClass:"input login-input"},[t._m(1),i("div",{staticClass:"mt29"},[i("el-input",{attrs:{placeholder:"请输入账号"},on:{focus:function(s){return t.focus(1)},blur:t.blur},model:{value:t.account,callback:function(s){t.account=s},expression:"account"}}),i("div",{staticClass:"line",style:{background:t.accountColor}})],1),i("div",{staticClass:"mt29"},[i("el-input",{attrs:{placeholder:"请输入密码"},on:{focus:function(s){return t.focus(2)},blur:t.blur},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),i("div",{staticClass:"line",style:{background:t.passwordColor}})],1),i("div",{staticClass:"flex-center mt29"},[i("div",{staticClass:"flexCol",staticStyle:{width:"160px"}},[i("el-input",{attrs:{placeholder:"请输入验证码"},on:{focus:function(s){return t.focus(3)},blur:t.blur},model:{value:t.Qcode,callback:function(s){t.Qcode=s},expression:"Qcode"}}),i("div",{staticClass:"line",style:{background:t.QcodeColor}})],1),i("img",{staticClass:"code",attrs:{src:o("4bd0")}}),i("img",{staticClass:"refresh",attrs:{src:o("2402")}})]),i("div",{staticClass:"midMian"},[i("div",{staticClass:"flex-center",on:{click:t.rememberpwd}},[t.loginSelect?i("img",{staticClass:"login-nomal",attrs:{src:o("724a")}}):i("img",{staticClass:"login-nomal",attrs:{src:o("bbdf")}}),i("span",{staticClass:"login-textcode ml15"},[t._v("记住我的登录信息")])]),i("span",{staticClass:"login-textcode"},[t._v(" 忘记密码？ ")])]),i("div",{staticClass:"login-button",on:{click:t.login}},[i("p",{staticClass:"login-buttontext"},[t._v("登录")])])])]),t._m(2)])])},a=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"flexCol"},[o("div",{staticClass:"blue"}),o("span",{staticClass:"logotext"},[t._v("专注行业领域， 因为专注所以专业 ")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"flex-center",staticStyle:{height:"44px"}},[i("p",{staticClass:"login-text"},[t._v(" 登录 ")]),i("img",{staticClass:"login-QR",attrs:{src:o("80d9")}})])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"bottom-main"},[o("span",{staticClass:"bottom-text"},[t._v("Copyright2021-2026 @ 天津拓甫科技股份有限公司 津ICP备14047939号-2")])])}],c={data:function(){return{account:"",password:"",Qcode:"",accountColor:"",passwordColor:"",QcodeColor:"",loginSelect:!1}},mounted:function(){var t=document.getElementById("videoLogin");t.addEventListener("canplay",(function(){t.play()}),!1),t.addEventListener("pause",(function(){t.play()}),!1)},methods:{login:function(){this.$router.push("/vehicleMonitor")},focus:function(t){switch(t){case 1:this.accountColor="rgba(255, 255, 255, 1)";break;case 2:this.passwordColor="rgba(255, 255, 255, 1)";break;default:this.QcodeColor="rgba(255, 255, 255, 1)";break}},blur:function(){this.accountColor="rgba(255, 255, 255, 0.3)",this.QcodeColor="rgba(255, 255, 255, 0.3)",this.passwordColor="rgba(255, 255, 255, 0.3)"},rememberpwd:function(){this.loginSelect=!this.loginSelect}}},e=c,n=(o("8968"),o("2877")),l=Object(n["a"])(e,i,a,!1,null,"d002de68",null);s["default"]=l.exports},"1fb1":function(t,s,o){t.exports=o.p+"static/img/login-logo.6696a33e.svg"},2402:function(t,s,o){t.exports=o.p+"static/img/refresh.19c52dd5.svg"},"4bd0":function(t,s,o){t.exports=o.p+"static/img/7364.c32300d9.svg"},"70b3":function(t,s,o){},"724a":function(t,s,o){t.exports=o.p+"static/img/login-select.cce21d4b.svg"},"80d9":function(t,s,o){t.exports=o.p+"static/img/QRcode.5f8fc20b.svg"},8968:function(t,s,o){"use strict";o("70b3")},bbdf:function(t,s,o){t.exports=o.p+"static/img/login-nomal.d70911f2.svg"}}]);