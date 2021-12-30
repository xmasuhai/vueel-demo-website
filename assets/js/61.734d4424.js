(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{221:function(t,e,s){"use strict";var o=s(213),i=s(1);let a=class extends i.g{constructor(){super(...arguments),this.name="VueToast",this.visible=!1,this.message="",this.timer=null,this.verticalOffset=0,this.isClosed=!1,this.onClose=null}onClickCloseButton(){this.isClosed=!0,this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback(this)}get toastPosition(){return{["position-"+this.position]:!0}}get fadeAnimationName(){return{"position-top":"eat-toast-from-top","position-middle":"eat-toast-fade","position-bottom":"eat-toast-from-bottom"}[Object.keys(this.toastPosition)[0]]}get positionOffsetStyle(){return{[""+this.position]:this.verticalOffset+"px"}}onClosedChange(t){t&&(this.visible=!1)}handleAfterLeave(){this.clearVM()}clearVM(){this.$el.remove(),this.$destroy(),this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}popUpToast(){this.visible=!0}close(){this.isClosed=!0}clearTimer(){clearTimeout(this.timer||void 0)}startTimer(){this.autoCloseDelay&&(this.timer=window.setTimeout(()=>{this.isClosed||this.close()},this.autoCloseDelay))}getRenderedHeight(){this.$nextTick(()=>{this.line&&(this.toast.style.height=this.toast.getBoundingClientRect().height+"px"),this.toastWrapper.style.zIndex=this.zIndex.toString()})}keydown(t){this.enableEscapeKey&&"Escape"===t.key&&(this.isClosed||this.close())}get ifSlots(){return this.$slots.default?this.$slots.default[0]:this.message}haveSlots(){this.$slots.default||(this.$slots.default=["<slot></slot>"])}mounted(){this.haveSlots(),this.popUpToast(),document.addEventListener("keydown",this.keydown),this.getRenderedHeight(),this.startTimer(),this.$once("hook:beforeDestroy",()=>{document.removeEventListener("keydown",this.keydown),this.clearVM()})}};Object(o.a)([Object(i.d)({type:Boolean,default:!1})],a.prototype,"enableUnsafeHTML",void 0),Object(o.a)([Object(i.d)({type:Boolean,default:!0})],a.prototype,"enableEscapeKey",void 0),Object(o.a)([Object(i.d)({type:String,default:"top",validator:t=>["top","middle","bottom"].includes(t)})],a.prototype,"position",void 0),Object(o.a)([Object(i.d)({type:[Number,Boolean],default:1800,validator:t=>!1===t||t>0})],a.prototype,"autoCloseDelay",void 0),Object(o.a)([Object(i.d)({type:Object,default(){}})],a.prototype,"closeButton",void 0),Object(o.a)([Object(i.d)({type:Number,default:999,required:!1})],a.prototype,"zIndex",void 0),Object(o.a)([Object(i.h)("isClosed")],a.prototype,"onClosedChange",null),Object(o.a)([Object(i.b)("beforeClose")],a.prototype,"close",null),Object(o.a)([Object(i.f)()],a.prototype,"line",void 0),Object(o.a)([Object(i.f)()],a.prototype,"toast",void 0),Object(o.a)([Object(i.f)()],a.prototype,"toastWrapper",void 0),a=Object(o.a)([i.a],a);var l=a,n=s(6),r=Object(n.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:t.fadeAnimationName},on:{"after-leave":t.handleAfterLeave}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],ref:"toastWrapper",staticClass:"vue-toast-wrapper",class:t.toastPosition},[s("div",t._g({ref:"toast",staticClass:"vue-toast",style:t.positionOffsetStyle},{mouseenter:t.clearTimer,mouseleave:t.startTimer}),[s("div",{staticClass:"vue-message"},[t.enableUnsafeHTML?s("div",{domProps:{innerHTML:t._s(t.ifSlots)}}):t._t("default",(function(){return[t._v(t._s(t.message))]}))],2),t._v(" "),t.closeButton?[s("div",{ref:"line",staticClass:"vue-tab-line"}),t._v(" "),s("div",{staticClass:"vue-close-button",on:{click:t.onClickCloseButton}},[t._v("\n          "+t._s(t.closeButton.text)+"\n        ")])]:t._e()],2)])])}),[],!1,null,null,null).exports;let c,d;function p(t,e,s,o){const i=t.extend(r);o=o||{},"string"==typeof e&&(d={message:e});const a=new i(Object.assign(o,{data:()=>d}));return a.$slots.default=[a.message],a.$mount(),document.body.appendChild(a.$el),a.$once("beforeClose",s||null),a}e.a={install(t){t.prototype.$toast=(e="",s)=>{c&&c.close(),c=s?p(t,e,()=>{c=null},s):p(t,e,()=>{c=null})}}}},421:function(t,e,s){"use strict";s.r(e);var o=s(0),i=s(221),a=s(214);o.default.use(i.a);var l={name:"callback",components:{VueButton:a.a},methods:{popUpToasts(){this.$toast("我是一个VueToast组件，关闭我就执行一个回调",{propsData:{autoCloseDelay:!1,closeButton:{text:"手动关闭",callback(t){t.close(),t.$toast("关闭后，执行了一个回调",{propsData:{position:"middle",autoCloseDelay:2e3}})}}}})}}},n=s(6),r=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("VueButton",{ref:"button",on:{click:this.popUpToasts}},[this._v("点击出现提示框")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);