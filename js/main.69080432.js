(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[179],[(r,c,n)=>{"use strict";function o(i,e){const t="MISSING_ENV_VAR"[i];switch(e){case Number:return t!==void 0?parseInt(t,10):NaN;case Boolean:const d=t===(!0).toString();if(!d&&t!==(!1).toString())throw new Error(`fromEnv(): value "${t}" is not a valid Boolean.`);return d||!1;default:return e!==void 0?e(t):t}}var b=n(1);function u(i={}){return(e,t,d)=>{const h=d.value,x=Action(i);return d.value=function(z){return h.call(this,...z)},x(e,t,d)}}function l(i,e,t){return new Proxy(getModule(i,t),{get(d,h){const x=d[h];let E;return typeof x=="function"?E=function(...z){return x.call(this,z)}:E=x,E}})}var f=n(2),s=n(5),A=n(3),m=n(4);f.vI.add(s.FPD,s.r5q,s.M3_,s.DY,s.mTx,s.ptq,s.A35,s.owJ,s.iV1,s.byT,s.f8k,s.Stf,s.OS1,s.l1h,s.UJf,s.I7k,s.wn1,s.Mdf,s.Aq);const L="font-awesome-icon";m.default.component(L,A.GN);const{default:P}=n(6);P.defaultIconComponent=L,P.defaultIconPack="fas";var D=n(7);o("NODE_ENV")==="production"&&(0,D.z)(`${o("BASE_URL")}service-worker.js`,{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(i){console.error("Error during service worker registration:",i)}});var O=n(13);const{default:v}=n(8),y=()=>n.e(177).then(n.bind(n,35)),p=()=>n.e(443).then(n.bind(n,39)),a=()=>n.e(824).then(n.bind(n,43)),g=()=>n.e(631).then(n.bind(n,46)),w=()=>n.e(942).then(n.bind(n,49));m.default.use(O.ZP);var k=(i=>(i.Hello="hello-world",i.Home="home",i.About="about",i.Portfolio="portfolio",i.Contact="contact",i.NotFound="not-found",i))(k||{});const R=new O.ZP({mode:"history",base:"MISSING_ENV_VAR".BASE_URL,routes:[{path:"/buefy-sample",name:"buefy-sample",component:n(14).Z},...v,{path:"/",name:"home",meta:{layout:"default"},component:y},{path:"/about",name:"about",meta:{layout:"default"},component:p},{path:"/portfolio",name:"home",meta:{layout:"default"},component:a},{path:"/contact",name:"contact",meta:{layout:"default"},component:g},{path:"*",name:"not-found",meta:{layout:"default"},component:w}]});var S=function(){var e=this,t=e._self._c,d=e._self._setupProxy;return t("div",{staticClass:"[ grid ]",attrs:{id:"app"}},[e.layout?t(e.layout,{tag:"component"},[t("router-view")],1):t("div",{staticClass:"[ self-center ]",staticStyle:{"justify-self":"center"}},[e._v("Loading...")])],1)},F=[],_=n(10),Z=Object.defineProperty,V=Object.getOwnPropertyDescriptor,K=(i,e,t,d)=>{for(var h=d>1?void 0:d?V(e,t):e,x=i.length-1,E;x>=0;x--)(E=i[x])&&(h=(d?E(e,t,h):E(h))||h);return d&&h&&Z(e,t,h),h},M=(i,e,t)=>new Promise((d,h)=>{var x=C=>{try{z(t.next(C))}catch(j){h(j)}},E=C=>{try{z(t.throw(C))}catch(j){h(j)}},z=C=>C.done?d(C.value):Promise.resolve(C.value).then(x,E);z((t=t.apply(i,e)).next())});let N=class extends _.w3{constructor(){super(),this.layout=null}static loadLayout(i){return M(this,null,function*(){const e=i.meta,{layout:t="default"}=e!=null?e:{},d=yield n(17)(`./${t}`);return _.w3.component(t,d.default),t!=null?t:"div"})}navigateTo(i){}mounted(){return M(this,null,function*(){const{$route:i,$router:e}=this;e.beforeResolve((t,d,h)=>M(this,null,function*(){this.layout=null,this.$forceUpdate(),this.layout=yield N.loadLayout(t),h()})),this.layout=yield N.loadLayout(i)})}};N=K([(0,_.wA)({components:{},name:"app"})],N);const W=N;var tn=n(18),$=n(12),H=(0,$.Z)(W,S,F,!1,null,null,null);const X=H.exports;var T=n(22);m.default.use(T.ZP);const G=new T.ZP.Store({state:{},modules:{}});var en=n(23),rn=n(26),J=n(34),sn=n(28),I=n(30),U;m.default.use(I.Z);const B="en",Y=[{label:"English",value:"en"},{label:"Espanol (Spanish)",value:"es"}];function Q(i=!1){const e=navigator.languages!==void 0?navigator.languages[0]:navigator.language;return e?i?e.trim().split(/-|_/)[0]:e.trim():void 0}function q(){var i;const e=Q(!0);let t;return Y.find(d=>d.value===e)!==void 0?t=e:t=(i="MISSING_ENV_VAR".VUE_APP_I18N_LOCALE)!=null?i:B,t}function nn(){const i=n(31),e={};return i.keys().forEach(t=>{const d=t.match(/([A-Za-z0-9-_]+)\./i);if(d&&d.length>1){const h=d[1];e[h]=i(t)}}),e}const on=new I.Z({locale:q(),fallbackLocale:(U="MISSING_ENV_VAR".VUE_APP_I18N_FALLBACK_LOCALE)!=null?U:B,messages:nn()});m.default.use(J.ZP,{defaultIconComponent:"font-awesome-icon",defaultIconPack:"fas"}),m.default.config.productionTip=!1,new m.default({i18n:on,router:R,store:G,render:i=>i(X)}).$mount("#app")},,,,,,,,(r,c,n)=>{"use strict";n.r(c),n.d(c,{default:()=>o});const o=[{path:"/hello-i18n",name:"i18nTest",component:n(9).Z}]},(r,c,n)=>{"use strict";n.d(c,{Z:()=>D});var o=function(){var v=this,y=v._self._c,p=v._self._setupProxy;return y("div",[y("p",{staticClass:"[ text-center ]"},[v._v(v._s(v.$t("message")))])])},b=[],u=n(10),l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,s=(O,v,y,p)=>{for(var a=p>1?void 0:p?f(v,y):v,g=O.length-1,w;g>=0;g--)(w=O[g])&&(a=(p?w(v,y,a):w(a))||a);return p&&a&&l(v,y,a),a};let A=class extends u.w3{};A=s([u.wA],A);const m=A;var L=n(12),P=(0,L.Z)(m,o,b,!1,null,null,null);const D=P.exports},,,,,(r,c,n)=>{"use strict";n.d(c,{Z:()=>y});var o=function(){var a=this,g=a._self._c,w=a._self._setupProxy;return g("div",{staticClass:"[ text-center ]"},[g("b-dropdown",{attrs:{"aria-role":"list"},scopedSlots:a._u([{key:"trigger",fn:function({active:k}){return g("button",{staticClass:"button"},[g("span",[a._v("Click me!")]),a._v(" "),g("BIcon",{attrs:{pack:"fas",icon:k?"chevron-up":"chevron-down"}})],1)}}])},[a._v(" "),g("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a._v("Action")]),a._v(" "),g("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a._v("Another action")]),a._v(" "),g("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a._v("Something else")])],1)],1)},b=[],u=n(10),l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,s=(p,a,g,w)=>{for(var k=w>1?void 0:w?f(a,g):a,R=p.length-1,S;R>=0;R--)(S=p[R])&&(k=(w?S(a,g,k):S(k))||k);return w&&k&&l(a,g,k),k};const{BDropdown:A,BDropdownItem:m}=n(15),{BIcon:L}=n(16);let P=class extends u.w3{};P=s([(0,u.wA)({components:{BDropdown:A,BDropdownItem:m,BIcon:L}})],P);const D=P;var O=n(12),v=(0,O.Z)(D,o,b,!1,null,null,null);const y=v.exports},,,(r,c,n)=>{var o={"./default":[52,9,262],"./default/":[52,9,262],"./default/default":[59,9,571],"./default/default.scss":[60,7,336],"./default/default.ts":[59,9,571],"./default/default.vue":[53,9,632],"./default/index":[52,9,262],"./default/index.ts":[52,9,262]};function b(u){if(!n.o(o,u))return Promise.resolve().then(()=>{var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s});var l=o[u],f=l[0];return n.e(l[2]).then(()=>n.t(f,l[1]|16))}b.keys=()=>Object.keys(o),b.id=17,r.exports=b},(r,c,n)=>{var o=n(19);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[r.id,o,""]]),o.locals&&(r.exports=o.locals);var b=n(21).Z,u=b("11f3cd4a",o,!0,{})},(r,c,n)=>{"use strict";n.r(c),n.d(c,{default:()=>l});var o=n(20),b=n.n(o),u=b()(function(f){return f[1]});u.push([r.id,"",""]);const l=u},,,,(r,c,n)=>{var o=n(24);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[r.id,o,""]]),o.locals&&(r.exports=o.locals);var b=n(21).Z,u=b("0f8b0935",o,!0,{})},(r,c,n)=>{"use strict";n.r(c),n.d(c,{default:()=>f});var o=n(20),b=n.n(o),u=n(25),l=b()(function(s){return s[1]});l.i(u.Z),l.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@700;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap);"]),l.push([r.id,`:root{
  --typography-primary: #000000;
  --typography-secondary: #201b1b;
  --typography-error: #ac3838;
  --typography-success: #3fb984;
  --typography-light: #718096;
  --app-background: #ecf2f7;
  --app-footer: #b3becc;
  --border-light: #a0aec0;
  --button-success: #74b871;
  --button-warning: #d3782d;
  --button-error: #ff5555
}

html{
  height: 100%;
  width: 100%
}

body{
  --bg-opacity: 1;
  background-color: #fff;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  display: grid;
  height: 100%;
  width: 100%;
  font-family:"Roboto";
  font-size:16px
}

body a{
  font-family:"Roboto";
  text-decoration: underline
}

body li a{
  text-decoration: none
}

body h1{
  font-family:"Raleway";
  font-size:30px;
  font-weight:800
}

body h2{
  font-family:"Raleway";
  font-size:22px;
  font-weight:700
}

body h3{
  font-family:"Raleway";
  font-size:18px;
  font-weight:700
}

body p{
  font-family:"Roboto"
}

.fade-enter-active,.fade-leave-active{
  -webkit-transition:opacity .5s;
  transition:opacity .5s
}

.fade-enter,.fade-leave-to{
  opacity:0
}

body::-webkit-scrollbar{
  display:none
}

:root{
  --typography-primary: #000000;
  --typography-secondary: #201b1b;
  --typography-error: #ac3838;
  --typography-success: #3fb984;
  --typography-light: #718096;
  --app-background: #ecf2f7;
  --app-footer: #b3becc;
  --border-light: #a0aec0;
  --button-success: #74b871;
  --button-warning: #d3782d;
  --button-error: #ff5555
}

.remove-skeleton-gap .b-skeleton{
  margin-top:0rem
}

.button{
  -moz-appearance:none;
  -webkit-appearance:none;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  border:1px solid rgba(0,0,0,0);
  border-radius:4px;
  -webkit-box-shadow:none;
  box-shadow:none;
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  font-size:1rem;
  height:2.5em;
  -webkit-box-pack:start;
  -ms-flex-pack:start;
  justify-content:flex-start;
  line-height:1.5;
  padding-bottom:calc(0.5em - 1px);
  padding-left:calc(0.75em - 1px);
  padding-right:calc(0.75em - 1px);
  padding-top:calc(0.5em - 1px);
  position:relative;
  vertical-align:top
}

.button:focus,.is-focused.button,.button:active,.is-active.button{
  outline:none
}

[disabled].button,fieldset[disabled] .button{
  cursor:not-allowed
}

.button{
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.button.is-loading::after{
  -webkit-animation:spinAround 500ms infinite linear;
  animation:spinAround 500ms infinite linear;
  border:2px solid #dbdbdb;
  border-radius:9999px;
  border-right-color:rgba(0,0,0,0);
  border-top-color:rgba(0,0,0,0);
  content:"";
  display:block;
  height:1em;
  position:relative;
  width:1em
}

/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */

html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{
  margin:0;
  padding:0
}

h1,h2,h3,h4,h5,h6{
  font-size:100%;
  font-weight:normal
}

ul{
  list-style:none
}

button,input,select,textarea{
  margin:0
}

html{
  -webkit-box-sizing:border-box;
  box-sizing:border-box
}

*,*::before,*::after{
  -webkit-box-sizing:inherit;
  box-sizing:inherit
}

img,video{
  height:auto;
  max-width:100%
}

iframe{
  border:0
}

table{
  border-collapse:collapse;
  border-spacing:0
}

td,th{
  padding:0
}

td:not([align]),th:not([align]){
  text-align:inherit
}

html{
  background-color:#fff;
  font-size:16px;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  min-width:300px;
  overflow-x:hidden;
  overflow-y:scroll;
  text-rendering:optimizeLegibility;
  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust:100%;
  -ms-text-size-adjust:100%;
  text-size-adjust:100%
}

article,aside,figure,footer,header,hgroup,section{
  display:block
}

body,button,input,optgroup,select,textarea{
  font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif
}

code,pre{
  -moz-osx-font-smoothing:auto;
  -webkit-font-smoothing:auto;
  font-family:monospace
}

body{
  color:#4a4a4a;
  font-size:1em;
  font-weight:400;
  line-height:1.5
}

a{
  color:red;
  cursor:pointer;
  text-decoration:none
}

a strong{
  color:currentColor
}

a:hover{
  color:#363636
}

code{
  background-color:#f5f5f5;
  color:#da1039;
  font-size:.875em;
  font-weight:normal;
  padding:.25em .5em .25em
}

hr{
  background-color:#f5f5f5;
  border:none;
  display:block;
  height:2px;
  margin:1.5rem 0
}

img{
  height:auto;
  max-width:100%
}

input[type=checkbox],input[type=radio]{
  vertical-align:baseline
}

small{
  font-size:.875em
}

span{
  font-style:inherit;
  font-weight:inherit
}

strong{
  color:#363636;
  font-weight:700
}

fieldset{
  border:none
}

pre{
  -webkit-overflow-scrolling:touch;
  background-color:#f5f5f5;
  color:#4a4a4a;
  font-size:.875em;
  overflow-x:auto;
  padding:1.25rem 1.5rem;
  white-space:pre;
  word-wrap:normal
}

pre code{
  background-color:rgba(0,0,0,0);
  color:currentColor;
  font-size:1em;
  padding:0
}

table td,table th{
  vertical-align:top
}

table td:not([align]),table th:not([align]){
  text-align:inherit
}

table th{
  color:#363636
}

@-webkit-keyframes spinAround{
  from{
    -webkit-transform:rotate(0deg);
    transform:rotate(0deg)
  }

  to{
    -webkit-transform:rotate(359deg);
    transform:rotate(359deg)
  }
}

@keyframes spinAround{
  from{
    -webkit-transform:rotate(0deg);
    transform:rotate(0deg)
  }

  to{
    -webkit-transform:rotate(359deg);
    transform:rotate(359deg)
  }
}

.button{
  background-color:#fff;
  border-color:#dbdbdb;
  border-width:1px;
  color:#363636;
  cursor:pointer;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  padding-bottom:calc(0.5em - 1px);
  padding-left:1em;
  padding-right:1em;
  padding-top:calc(0.5em - 1px);
  text-align:center;
  white-space:nowrap
}

.button strong{
  color:inherit
}

.button .icon,.button .icon.is-small,.button .icon.is-medium,.button .icon.is-large{
  height:1.5em;
  width:1.5em
}

.button .icon:first-child:not(:last-child){
  margin-left:calc(-0.5em - 1px);
  margin-right:.25em
}

.button .icon:last-child:not(:first-child){
  margin-left:.25em;
  margin-right:calc(-0.5em - 1px)
}

.button .icon:first-child:last-child{
  margin-left:calc(-0.5em - 1px);
  margin-right:calc(-0.5em - 1px)
}

.button:hover,.button.is-hovered{
  border-color:#b5b5b5;
  color:#363636
}

.button:focus,.button.is-focused{
  border-color:red;
  color:#363636
}

.button:focus:not(:active),.button.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(255,0,0,.25);
  box-shadow:0 0 0 .125em rgba(255,0,0,.25)
}

.button:active,.button.is-active{
  border-color:#4a4a4a;
  color:#363636
}

.button.is-text{
  background-color:rgba(0,0,0,0);
  border-color:rgba(0,0,0,0);
  color:#4a4a4a;
  text-decoration:underline
}

.button.is-text:hover,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text.is-focused{
  background-color:#f5f5f5;
  color:#363636
}

.button.is-text:active,.button.is-text.is-active{
  background-color:#e8e8e8;
  color:#363636
}

.button.is-text[disabled],fieldset[disabled] .button.is-text{
  background-color:rgba(0,0,0,0);
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-ghost{
  background:none;
  border-color:rgba(0,0,0,0);
  color:red;
  text-decoration:none
}

.button.is-ghost:hover,.button.is-ghost.is-hovered{
  color:red;
  text-decoration:underline
}

.button.is-white{
  background-color:#fff;
  border-color:rgba(0,0,0,0);
  color:#0a0a0a
}

.button.is-white:hover,.button.is-white.is-hovered{
  background-color:#f9f9f9;
  border-color:rgba(0,0,0,0);
  color:#0a0a0a
}

.button.is-white:focus,.button.is-white.is-focused{
  border-color:rgba(0,0,0,0);
  color:#0a0a0a
}

.button.is-white:focus:not(:active),.button.is-white.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(255,255,255,.25);
  box-shadow:0 0 0 .125em rgba(255,255,255,.25)
}

.button.is-white:active,.button.is-white.is-active{
  background-color:#f2f2f2;
  border-color:rgba(0,0,0,0);
  color:#0a0a0a
}

.button.is-white[disabled],fieldset[disabled] .button.is-white{
  background-color:#fff;
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-white.is-inverted{
  background-color:#0a0a0a;
  color:#fff
}

.button.is-white.is-inverted:hover,.button.is-white.is-inverted.is-hovered{
  background-color:#000
}

.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{
  background-color:#0a0a0a;
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-white.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important
}

.button.is-white.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  color:#fff
}

.button.is-white.is-outlined:hover,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined.is-focused{
  background-color:#fff;
  border-color:#fff;
  color:#0a0a0a
}

.button.is-white.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-white.is-outlined.is-loading:hover::after,.button.is-white.is-outlined.is-loading.is-hovered::after,.button.is-white.is-outlined.is-loading:focus::after,.button.is-white.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important
}

.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-white.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#0a0a0a;
  color:#0a0a0a
}

.button.is-white.is-inverted.is-outlined:hover,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined.is-focused{
  background-color:#0a0a0a;
  color:#fff
}

.button.is-white.is-inverted.is-outlined.is-loading:hover::after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-white.is-inverted.is-outlined.is-loading:focus::after,.button.is-white.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#0a0a0a;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#0a0a0a
}

.button.is-black{
  background-color:#0a0a0a;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-black:hover,.button.is-black.is-hovered{
  background-color:#040404;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-black:focus,.button.is-black.is-focused{
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-black:focus:not(:active),.button.is-black.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);
  box-shadow:0 0 0 .125em rgba(10,10,10,.25)
}

.button.is-black:active,.button.is-black.is-active{
  background-color:#000;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-black[disabled],fieldset[disabled] .button.is-black{
  background-color:#0a0a0a;
  border-color:#0a0a0a;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-black.is-inverted{
  background-color:#fff;
  color:#0a0a0a
}

.button.is-black.is-inverted:hover,.button.is-black.is-inverted.is-hovered{
  background-color:#f2f2f2
}

.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{
  background-color:#fff;
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#0a0a0a
}

.button.is-black.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-black.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#0a0a0a;
  color:#0a0a0a
}

.button.is-black.is-outlined:hover,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined.is-focused{
  background-color:#0a0a0a;
  border-color:#0a0a0a;
  color:#fff
}

.button.is-black.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important
}

.button.is-black.is-outlined.is-loading:hover::after,.button.is-black.is-outlined.is-loading.is-hovered::after,.button.is-black.is-outlined.is-loading:focus::after,.button.is-black.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#0a0a0a;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#0a0a0a
}

.button.is-black.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  color:#fff
}

.button.is-black.is-inverted.is-outlined:hover,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined.is-focused{
  background-color:#fff;
  color:#0a0a0a
}

.button.is-black.is-inverted.is-outlined.is-loading:hover::after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-black.is-inverted.is-outlined.is-loading:focus::after,.button.is-black.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important
}

.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-light{
  background-color:#f5f5f5;
  border-color:rgba(0,0,0,0);
  color:rgba(0,0,0,.7)
}

.button.is-light:hover,.button.is-light.is-hovered{
  background-color:#eee;
  border-color:rgba(0,0,0,0);
  color:rgba(0,0,0,.7)
}

.button.is-light:focus,.button.is-light.is-focused{
  border-color:rgba(0,0,0,0);
  color:rgba(0,0,0,.7)
}

.button.is-light:focus:not(:active),.button.is-light.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(245,245,245,.25);
  box-shadow:0 0 0 .125em rgba(245,245,245,.25)
}

.button.is-light:active,.button.is-light.is-active{
  background-color:#e8e8e8;
  border-color:rgba(0,0,0,0);
  color:rgba(0,0,0,.7)
}

.button.is-light[disabled],fieldset[disabled] .button.is-light{
  background-color:#f5f5f5;
  border-color:#f5f5f5;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-light.is-inverted{
  background-color:rgba(0,0,0,.7);
  color:#f5f5f5
}

.button.is-light.is-inverted:hover,.button.is-light.is-inverted.is-hovered{
  background-color:rgba(0,0,0,.7)
}

.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{
  background-color:rgba(0,0,0,.7);
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#f5f5f5
}

.button.is-light.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important
}

.button.is-light.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#f5f5f5;
  color:#f5f5f5
}

.button.is-light.is-outlined:hover,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined.is-focused{
  background-color:#f5f5f5;
  border-color:#f5f5f5;
  color:rgba(0,0,0,.7)
}

.button.is-light.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f5f5f5 #f5f5f5 !important
}

.button.is-light.is-outlined.is-loading:hover::after,.button.is-light.is-outlined.is-loading.is-hovered::after,.button.is-light.is-outlined.is-loading:focus::after,.button.is-light.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important
}

.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#f5f5f5;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#f5f5f5
}

.button.is-light.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:rgba(0,0,0,.7);
  color:rgba(0,0,0,.7)
}

.button.is-light.is-inverted.is-outlined:hover,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined.is-focused{
  background-color:rgba(0,0,0,.7);
  color:#f5f5f5
}

.button.is-light.is-inverted.is-outlined.is-loading:hover::after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-light.is-inverted.is-outlined.is-loading:focus::after,.button.is-light.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f5f5f5 #f5f5f5 !important
}

.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:rgba(0,0,0,.7);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:rgba(0,0,0,.7)
}

.button.is-dark{
  background-color:#363636;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-dark:hover,.button.is-dark.is-hovered{
  background-color:#2f2f2f;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-dark:focus,.button.is-dark.is-focused{
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-dark:focus:not(:active),.button.is-dark.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);
  box-shadow:0 0 0 .125em rgba(54,54,54,.25)
}

.button.is-dark:active,.button.is-dark.is-active{
  background-color:#292929;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-dark[disabled],fieldset[disabled] .button.is-dark{
  background-color:#363636;
  border-color:#363636;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-dark.is-inverted{
  background-color:#fff;
  color:#363636
}

.button.is-dark.is-inverted:hover,.button.is-dark.is-inverted.is-hovered{
  background-color:#f2f2f2
}

.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{
  background-color:#fff;
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#363636
}

.button.is-dark.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-dark.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#363636;
  color:#363636
}

.button.is-dark.is-outlined:hover,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined.is-focused{
  background-color:#363636;
  border-color:#363636;
  color:#fff
}

.button.is-dark.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #363636 #363636 !important
}

.button.is-dark.is-outlined.is-loading:hover::after,.button.is-dark.is-outlined.is-loading.is-hovered::after,.button.is-dark.is-outlined.is-loading:focus::after,.button.is-dark.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#363636;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#363636
}

.button.is-dark.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  color:#fff
}

.button.is-dark.is-inverted.is-outlined:hover,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined.is-focused{
  background-color:#fff;
  color:#363636
}

.button.is-dark.is-inverted.is-outlined.is-loading:hover::after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-dark.is-inverted.is-outlined.is-loading:focus::after,.button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #363636 #363636 !important
}

.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-primary{
  background-color:red;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-primary:hover,.button.is-primary.is-hovered{
  background-color:#f20000;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-primary:focus,.button.is-primary.is-focused{
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-primary:focus:not(:active),.button.is-primary.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(255,0,0,.25);
  box-shadow:0 0 0 .125em rgba(255,0,0,.25)
}

.button.is-primary:active,.button.is-primary.is-active{
  background-color:#e60000;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-primary[disabled],fieldset[disabled] .button.is-primary{
  background-color:red;
  border-color:red;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-primary.is-inverted{
  background-color:#fff;
  color:red
}

.button.is-primary.is-inverted:hover,.button.is-primary.is-inverted.is-hovered{
  background-color:#f2f2f2
}

.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{
  background-color:#fff;
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:red
}

.button.is-primary.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-primary.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:red;
  color:red
}

.button.is-primary.is-outlined:hover,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined.is-focused{
  background-color:red;
  border-color:red;
  color:#fff
}

.button.is-primary.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) red red !important
}

.button.is-primary.is-outlined.is-loading:hover::after,.button.is-primary.is-outlined.is-loading.is-hovered::after,.button.is-primary.is-outlined.is-loading:focus::after,.button.is-primary.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:red;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:red
}

.button.is-primary.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  color:#fff
}

.button.is-primary.is-inverted.is-outlined:hover,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined.is-focused{
  background-color:#fff;
  color:red
}

.button.is-primary.is-inverted.is-outlined.is-loading:hover::after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-primary.is-inverted.is-outlined.is-loading:focus::after,.button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) red red !important
}

.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-info{
  background-color:#3e8ed0;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-info:hover,.button.is-info.is-hovered{
  background-color:#3488ce;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-info:focus,.button.is-info.is-focused{
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-info:focus:not(:active),.button.is-info.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(62,142,208,.25);
  box-shadow:0 0 0 .125em rgba(62,142,208,.25)
}

.button.is-info:active,.button.is-info.is-active{
  background-color:#3082c5;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-info[disabled],fieldset[disabled] .button.is-info{
  background-color:#3e8ed0;
  border-color:#3e8ed0;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-info.is-inverted{
  background-color:#fff;
  color:#3e8ed0
}

.button.is-info.is-inverted:hover,.button.is-info.is-inverted.is-hovered{
  background-color:#f2f2f2
}

.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{
  background-color:#fff;
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#3e8ed0
}

.button.is-info.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-info.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#3e8ed0;
  color:#3e8ed0
}

.button.is-info.is-outlined:hover,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined.is-focused{
  background-color:#3e8ed0;
  border-color:#3e8ed0;
  color:#fff
}

.button.is-info.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #3e8ed0 #3e8ed0 !important
}

.button.is-info.is-outlined.is-loading:hover::after,.button.is-info.is-outlined.is-loading.is-hovered::after,.button.is-info.is-outlined.is-loading:focus::after,.button.is-info.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#3e8ed0;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#3e8ed0
}

.button.is-info.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  color:#fff
}

.button.is-info.is-inverted.is-outlined:hover,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined.is-focused{
  background-color:#fff;
  color:#3e8ed0
}

.button.is-info.is-inverted.is-outlined.is-loading:hover::after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-info.is-inverted.is-outlined.is-loading:focus::after,.button.is-info.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #3e8ed0 #3e8ed0 !important
}

.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-success{
  background-color:#48c78e;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-success:hover,.button.is-success.is-hovered{
  background-color:#3ec487;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-success:focus,.button.is-success.is-focused{
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-success:focus:not(:active),.button.is-success.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(72,199,142,.25);
  box-shadow:0 0 0 .125em rgba(72,199,142,.25)
}

.button.is-success:active,.button.is-success.is-active{
  background-color:#3abb81;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-success[disabled],fieldset[disabled] .button.is-success{
  background-color:#48c78e;
  border-color:#48c78e;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-success.is-inverted{
  background-color:#fff;
  color:#48c78e
}

.button.is-success.is-inverted:hover,.button.is-success.is-inverted.is-hovered{
  background-color:#f2f2f2
}

.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{
  background-color:#fff;
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#48c78e
}

.button.is-success.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-success.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#48c78e;
  color:#48c78e
}

.button.is-success.is-outlined:hover,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined.is-focused{
  background-color:#48c78e;
  border-color:#48c78e;
  color:#fff
}

.button.is-success.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #48c78e #48c78e !important
}

.button.is-success.is-outlined.is-loading:hover::after,.button.is-success.is-outlined.is-loading.is-hovered::after,.button.is-success.is-outlined.is-loading:focus::after,.button.is-success.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#48c78e;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#48c78e
}

.button.is-success.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  color:#fff
}

.button.is-success.is-inverted.is-outlined:hover,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined.is-focused{
  background-color:#fff;
  color:#48c78e
}

.button.is-success.is-inverted.is-outlined.is-loading:hover::after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-success.is-inverted.is-outlined.is-loading:focus::after,.button.is-success.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #48c78e #48c78e !important
}

.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-warning{
  background-color:#ffe08a;
  border-color:rgba(0,0,0,0);
  color:rgba(0,0,0,.7)
}

.button.is-warning:hover,.button.is-warning.is-hovered{
  background-color:#ffdc7d;
  border-color:rgba(0,0,0,0);
  color:rgba(0,0,0,.7)
}

.button.is-warning:focus,.button.is-warning.is-focused{
  border-color:rgba(0,0,0,0);
  color:rgba(0,0,0,.7)
}

.button.is-warning:focus:not(:active),.button.is-warning.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(255,224,138,.25);
  box-shadow:0 0 0 .125em rgba(255,224,138,.25)
}

.button.is-warning:active,.button.is-warning.is-active{
  background-color:#ffd970;
  border-color:rgba(0,0,0,0);
  color:rgba(0,0,0,.7)
}

.button.is-warning[disabled],fieldset[disabled] .button.is-warning{
  background-color:#ffe08a;
  border-color:#ffe08a;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-warning.is-inverted{
  background-color:rgba(0,0,0,.7);
  color:#ffe08a
}

.button.is-warning.is-inverted:hover,.button.is-warning.is-inverted.is-hovered{
  background-color:rgba(0,0,0,.7)
}

.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{
  background-color:rgba(0,0,0,.7);
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#ffe08a
}

.button.is-warning.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important
}

.button.is-warning.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#ffe08a;
  color:#ffe08a
}

.button.is-warning.is-outlined:hover,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined.is-focused{
  background-color:#ffe08a;
  border-color:#ffe08a;
  color:rgba(0,0,0,.7)
}

.button.is-warning.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #ffe08a #ffe08a !important
}

.button.is-warning.is-outlined.is-loading:hover::after,.button.is-warning.is-outlined.is-loading.is-hovered::after,.button.is-warning.is-outlined.is-loading:focus::after,.button.is-warning.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important
}

.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#ffe08a;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#ffe08a
}

.button.is-warning.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:rgba(0,0,0,.7);
  color:rgba(0,0,0,.7)
}

.button.is-warning.is-inverted.is-outlined:hover,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined.is-focused{
  background-color:rgba(0,0,0,.7);
  color:#ffe08a
}

.button.is-warning.is-inverted.is-outlined.is-loading:hover::after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-warning.is-inverted.is-outlined.is-loading:focus::after,.button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #ffe08a #ffe08a !important
}

.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:rgba(0,0,0,.7);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:rgba(0,0,0,.7)
}

.button.is-danger{
  background-color:#f14668;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-danger:hover,.button.is-danger.is-hovered{
  background-color:#f03a5f;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-danger:focus,.button.is-danger.is-focused{
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-danger:focus:not(:active),.button.is-danger.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(241,70,104,.25);
  box-shadow:0 0 0 .125em rgba(241,70,104,.25)
}

.button.is-danger:active,.button.is-danger.is-active{
  background-color:#ef2e55;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-danger[disabled],fieldset[disabled] .button.is-danger{
  background-color:#f14668;
  border-color:#f14668;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-danger.is-inverted{
  background-color:#fff;
  color:#f14668
}

.button.is-danger.is-inverted:hover,.button.is-danger.is-inverted.is-hovered{
  background-color:#f2f2f2
}

.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{
  background-color:#fff;
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#f14668
}

.button.is-danger.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-danger.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#f14668;
  color:#f14668
}

.button.is-danger.is-outlined:hover,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined.is-focused{
  background-color:#f14668;
  border-color:#f14668;
  color:#fff
}

.button.is-danger.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f14668 #f14668 !important
}

.button.is-danger.is-outlined.is-loading:hover::after,.button.is-danger.is-outlined.is-loading.is-hovered::after,.button.is-danger.is-outlined.is-loading:focus::after,.button.is-danger.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#f14668;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#f14668
}

.button.is-danger.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  color:#fff
}

.button.is-danger.is-inverted.is-outlined:hover,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined.is-focused{
  background-color:#fff;
  color:#f14668
}

.button.is-danger.is-inverted.is-outlined.is-loading:hover::after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-danger.is-inverted.is-outlined.is-loading:focus::after,.button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f14668 #f14668 !important
}

.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-twitter{
  background-color:#015d8a;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-twitter:hover,.button.is-twitter.is-hovered{
  background-color:#01547d;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-twitter:focus,.button.is-twitter.is-focused{
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-twitter:focus:not(:active),.button.is-twitter.is-focused:not(:active){
  -webkit-box-shadow:0 0 0 .125em rgba(1,93,138,.25);
  box-shadow:0 0 0 .125em rgba(1,93,138,.25)
}

.button.is-twitter:active,.button.is-twitter.is-active{
  background-color:#014c71;
  border-color:rgba(0,0,0,0);
  color:#fff
}

.button.is-twitter[disabled],fieldset[disabled] .button.is-twitter{
  background-color:#015d8a;
  border-color:#015d8a;
  -webkit-box-shadow:none;
  box-shadow:none
}

.button.is-twitter.is-inverted{
  background-color:#fff;
  color:#015d8a
}

.button.is-twitter.is-inverted:hover,.button.is-twitter.is-inverted.is-hovered{
  background-color:#f2f2f2
}

.button.is-twitter.is-inverted[disabled],fieldset[disabled] .button.is-twitter.is-inverted{
  background-color:#fff;
  border-color:rgba(0,0,0,0);
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#015d8a
}

.button.is-twitter.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-twitter.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#015d8a;
  color:#015d8a
}

.button.is-twitter.is-outlined:hover,.button.is-twitter.is-outlined.is-hovered,.button.is-twitter.is-outlined:focus,.button.is-twitter.is-outlined.is-focused{
  background-color:#015d8a;
  border-color:#015d8a;
  color:#fff
}

.button.is-twitter.is-outlined.is-loading::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #015d8a #015d8a !important
}

.button.is-twitter.is-outlined.is-loading:hover::after,.button.is-twitter.is-outlined.is-loading.is-hovered::after,.button.is-twitter.is-outlined.is-loading:focus::after,.button.is-twitter.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important
}

.button.is-twitter.is-outlined[disabled],fieldset[disabled] .button.is-twitter.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#015d8a;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#015d8a
}

.button.is-twitter.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  color:#fff
}

.button.is-twitter.is-inverted.is-outlined:hover,.button.is-twitter.is-inverted.is-outlined.is-hovered,.button.is-twitter.is-inverted.is-outlined:focus,.button.is-twitter.is-inverted.is-outlined.is-focused{
  background-color:#fff;
  color:#015d8a
}

.button.is-twitter.is-inverted.is-outlined.is-loading:hover::after,.button.is-twitter.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-twitter.is-inverted.is-outlined.is-loading:focus::after,.button.is-twitter.is-inverted.is-outlined.is-loading.is-focused::after{
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #015d8a #015d8a !important
}

.button.is-twitter.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-twitter.is-inverted.is-outlined{
  background-color:rgba(0,0,0,0);
  border-color:#fff;
  -webkit-box-shadow:none;
  box-shadow:none;
  color:#fff
}

.button.is-small{
  font-size:.75rem
}

.button.is-small:not(.is-rounded){
  border-radius:2px
}

.button.is-normal{
  font-size:1rem
}

.button.is-medium{
  font-size:1.25rem
}

.button.is-large{
  font-size:1.5rem
}

.button[disabled],fieldset[disabled] .button{
  background-color:#fff;
  border-color:#dbdbdb;
  -webkit-box-shadow:none;
  box-shadow:none;
  opacity:.5
}

.button.is-fullwidth{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%
}

.button.is-loading{
  color:rgba(0,0,0,0) !important;
  pointer-events:none
}

.button.is-loading::after{
  position:absolute;
  left:calc(50% - (1em * 0.5));
  top:calc(50% - (1em * 0.5));
  position:absolute !important
}

.button.is-static{
  background-color:#f5f5f5;
  border-color:#dbdbdb;
  color:#7a7a7a;
  -webkit-box-shadow:none;
  box-shadow:none;
  pointer-events:none
}

.button.is-rounded{
  border-radius:9999px;
  padding-left:calc(1em + 0.25em);
  padding-right:calc(1em + 0.25em)
}

.buttons{
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
  -webkit-box-pack:start;
  -ms-flex-pack:start;
  justify-content:flex-start
}

.buttons .button{
  margin-bottom:.5rem
}

.buttons .button:not(:last-child):not(.is-fullwidth){
  margin-right:.5rem
}

.buttons:last-child{
  margin-bottom:-0.5rem
}

.buttons:not(:last-child){
  margin-bottom:1rem
}

.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){
  font-size:.75rem
}

.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded){
  border-radius:2px
}

.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){
  font-size:1.25rem
}

.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){
  font-size:1.5rem
}

.buttons.has-addons .button:not(:first-child){
  border-bottom-left-radius:0;
  border-top-left-radius:0
}

.buttons.has-addons .button:not(:last-child){
  border-bottom-right-radius:0;
  border-top-right-radius:0;
  margin-right:-1px
}

.buttons.has-addons .button:last-child{
  margin-right:0
}

.buttons.has-addons .button:hover,.buttons.has-addons .button.is-hovered{
  z-index:2
}

.buttons.has-addons .button:focus,.buttons.has-addons .button.is-focused,.buttons.has-addons .button:active,.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-selected{
  z-index:3
}

.buttons.has-addons .button:focus:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-selected:hover{
  z-index:4
}

.buttons.has-addons .button.is-expanded{
  -webkit-box-flex:1;
  -ms-flex-positive:1;
  flex-grow:1;
  -ms-flex-negative:1;
  flex-shrink:1
}

.buttons.is-centered{
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center
}

.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){
  margin-left:.25rem;
  margin-right:.25rem
}

.buttons.is-right{
  -webkit-box-pack:end;
  -ms-flex-pack:end;
  justify-content:flex-end
}

.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){
  margin-left:.25rem;
  margin-right:.25rem
}

@media screen and (max-width: 768px){
  .button.is-responsive.is-small{
    font-size:.5625rem
  }

  .button.is-responsive,.button.is-responsive.is-normal{
    font-size:.65625rem
  }

  .button.is-responsive.is-medium{
    font-size:.75rem
  }

  .button.is-responsive.is-large{
    font-size:1rem
  }
}

@media screen and (min-width: 769px)and (max-width: 1023px){
  .button.is-responsive.is-small{
    font-size:.65625rem
  }

  .button.is-responsive,.button.is-responsive.is-normal{
    font-size:.75rem
  }

  .button.is-responsive.is-medium{
    font-size:1rem
  }

  .button.is-responsive.is-large{
    font-size:1.25rem
  }
}

.icon{
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  height:1.5rem;
  width:1.5rem
}

.icon.is-small{
  height:1rem;
  width:1rem
}

.icon.is-medium{
  height:2rem;
  width:2rem
}

.icon.is-large{
  height:3rem;
  width:3rem
}

.icon-text{
  -webkit-box-align:start;
  -ms-flex-align:start;
  align-items:flex-start;
  color:inherit;
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
  line-height:1.5rem;
  vertical-align:top
}

.icon-text .icon{
  -webkit-box-flex:0;
  -ms-flex-positive:0;
  flex-grow:0;
  -ms-flex-negative:0;
  flex-shrink:0
}

.icon-text .icon:not(:last-child){
  margin-right:.25em
}

.icon-text .icon:not(:first-child){
  margin-left:.25em
}

div.icon-text{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex
}

.dropdown{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  position:relative;
  vertical-align:top
}

.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{
  display:block
}

.dropdown.is-right .dropdown-menu{
  left:auto;
  right:0
}

.dropdown.is-up .dropdown-menu{
  bottom:100%;
  padding-bottom:4px;
  padding-top:initial;
  top:auto
}

.dropdown-menu{
  display:none;
  left:0;
  min-width:12rem;
  padding-top:4px;
  position:absolute;
  top:100%;
  z-index:20
}

.dropdown-content{
  background-color:#fff;
  border-radius:4px;
  -webkit-box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);
  box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);
  padding-bottom:.5rem;
  padding-top:.5rem
}

.dropdown-item{
  color:#4a4a4a;
  display:block;
  font-size:.875rem;
  line-height:1.5;
  padding:.375rem 1rem;
  position:relative
}

a.dropdown-item,button.dropdown-item{
  padding-right:3rem;
  text-align:inherit;
  white-space:nowrap;
  width:100%
}

a.dropdown-item:hover,button.dropdown-item:hover{
  background-color:#f5f5f5;
  color:#0a0a0a
}

a.dropdown-item.is-active,button.dropdown-item.is-active{
  background-color:red;
  color:#fff
}

.dropdown-divider{
  background-color:#ededed;
  border:none;
  display:block;
  height:1px;
  margin:.5rem 0
}

div>nav>div.navbar-menu.is-active>div.navbar-end>a:hover{
  color:gray !important
}`,""]);const f=l},(r,c,n)=>{"use strict";n.d(c,{Z:()=>l});var o=n(20),b=n.n(o),u=b()(function(f){return f[1]});u.push([r.id,`@tailwind base;\r
\r
@tailwind components;\r
\r
@tailwind utilities;`,""]);const l=u},,,,,,(r,c,n)=>{var o={"./en.json":32,"./es.json":33};function b(l){var f=u(l);return n(f)}function u(l){if(!n.o(o,l)){var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}return o[l]}b.keys=function(){return Object.keys(o)},b.resolve=u,r.exports=b,b.id=31},r=>{"use strict";r.exports=JSON.parse('{"message":"hello i18n!!"}')},r=>{"use strict";r.exports=JSON.parse('{"message":"Hola i18n!!"}')}],r=>{var c=o=>r(r.s=o);r.O(0,[216],()=>c(0));var n=r.O()}]);
