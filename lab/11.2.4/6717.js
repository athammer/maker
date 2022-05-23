/*! For license information please see 6717.js.LICENSE.txt */
(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6717],{9893:t=>{t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=281)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),r&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=u):o&&(u=s?function(){o.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(p.functional){p._injectStyles=u;var c=p.render;p.render=function(t,e){return u.call(e),c(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:p}}n.d(e,"a",(function(){return r}))},281:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};r._withStripped=!0;var o=n(0),i=Object(o.a)({},r,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/x.svg",e.default=i.exports}})},8649:(t,e,n)=>{"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o=n(5602),i=(0,o.sym)("UNDEF");function a(t){if(!(t&&"object"===(void 0===t?"undefined":r(t))&&!Array.isArray(t)&&Object.keys(t).length>0))throw new Error("Please provide an object with at least one key and array of values");var e=Object.keys(t).reduce((function(e,n){return e.keys.push(n),e.possibleValues.push(t[n]),e}),{keys:[],possibleValues:[]}),n=e.keys,a=e.possibleValues;return(0,o.assertHaveValuesForEveryKey)(n,a),(0,o.generateValueCombinations)(a,!0).map((function(t){return t.reduce((function(t,e,r){return e!==i&&(t[n[r]]=e),t}),{})}))}a.UNDEF=i,a.__esModule=!0,a.default=a,t.exports=a},5602:(t,e)=>{"use strict";function n(t,e){return[t,e]}function r(t,e){return[t].concat(e)}e.__esModule=!0,e.sym=function(t){return"@@combos/"+t},e.buildBaseTuple=n,e.addToTuple=r,e.generateValueCombinations=function t(e){var o=e[0],i=e.slice(1),a=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];if(0===i.length)return a?o.map((function(t){return[t]})):o;for(var s=[],u=t(i),p=1===i.length?n:r,c=0,d=u.length;c<d;c++)for(var f=0,l=o.length;f<l;f++)s.push(p(o[f],u[c]));return s},e.assertHaveValuesForEveryKey=function(t,e){for(var n=0,r=t.length;n<r;n++){var o=e[n];if(!o||!Array.isArray(o)||o.length<=0)throw new Error("Please provide an array of at least one value for key '"+t[n]+"'")}}},7016:t=>{"use strict";const e=Object.prototype.hasOwnProperty;t.exports=(t,n)=>e.call(t,n)},6438:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>K});var r=n(3077),o="tippy-content",i="tippy-backdrop",a="tippy-arrow",s="tippy-svg-arrow",u={passive:!0,capture:!0};function p(t,e,n){if(Array.isArray(t)){var r=t[e];return null==r?Array.isArray(n)?n[e]:n:r}return t}function c(t,e){var n={}.toString.call(t);return 0===n.indexOf("[object")&&n.indexOf(e+"]")>-1}function d(t,e){return"function"==typeof t?t.apply(void 0,e):t}function f(t,e){return 0===e?t:function(r){clearTimeout(n),n=setTimeout((function(){t(r)}),e)};var n}function l(t){return[].concat(t)}function v(t,e){-1===t.indexOf(e)&&t.push(e)}function m(t){return t.split("-")[0]}function b(t){return[].slice.call(t)}function y(){return document.createElement("div")}function h(t){return["Element","Fragment"].some((function(e){return c(t,e)}))}function g(t){return c(t,"MouseEvent")}function x(t){return!(!t||!t._tippy||t._tippy.reference!==t)}function w(t){return h(t)?[t]:function(t){return c(t,"NodeList")}(t)?b(t):Array.isArray(t)?t:b(document.querySelectorAll(t))}function E(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function T(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function O(t){var e=l(t)[0];return e&&e.ownerDocument||document}function A(t,e,n){var r=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(e){t[r](e,n)}))}var _={isTouch:!1},C=0;function k(){_.isTouch||(_.isTouch=!0,window.performance&&document.addEventListener("mousemove",S))}function S(){var t=performance.now();t-C<20&&(_.isTouch=!1,document.removeEventListener("mousemove",S)),C=t}function L(){var t=document.activeElement;if(x(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}var j="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",V=/MSIE |Trident\//.test(j);var D={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},M=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},D,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),I=Object.keys(M);function N(t){var e=(t.plugins||[]).reduce((function(e,n){var r=n.name,o=n.defaultValue;return r&&(e[r]=void 0!==t[r]?t[r]:o),e}),{});return Object.assign({},t,{},e)}function P(t,e){var n=Object.assign({},e,{content:d(e.content,[t])},e.ignoreAttributes?{}:function(t,e){return(e?Object.keys(N(Object.assign({},M,{plugins:e}))):I).reduce((function(e,n){var r=(t.getAttribute("data-tippy-"+n)||"").trim();if(!r)return e;if("content"===n)e[n]=r;else try{e[n]=JSON.parse(r)}catch(t){e[n]=r}return e}),{})}(t,e.plugins));return n.aria=Object.assign({},M.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?e.interactive:n.aria.expanded,content:"auto"===n.aria.content?e.interactive?null:"describedby":n.aria.content},n}function U(t,e){t.innerHTML=e}function H(t){var e=y();return!0===t?e.className=a:(e.className=s,h(t)?e.appendChild(t):U(e,t)),e}function R(t,e){h(e.content)?(U(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?U(t,e.content):t.textContent=e.content)}function $(t){var e=t.firstElementChild,n=b(e.children);return{box:e,content:n.find((function(t){return t.classList.contains(o)})),arrow:n.find((function(t){return t.classList.contains(a)||t.classList.contains(s)})),backdrop:n.find((function(t){return t.classList.contains(i)}))}}function F(t){var e=y(),n=y();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=y();function i(n,r){var o=$(e),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||R(a,t.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(H(r.arrow))):i.appendChild(H(r.arrow)):s&&i.removeChild(s)}return r.className=o,r.setAttribute("data-state","hidden"),R(r,t.props),e.appendChild(n),n.appendChild(r),i(t.props,t.props),{popper:e,onUpdate:i}}F.$$tippy=!0;var B=1,W=[],q=[];function z(t,e){var n,o,i,a,s,c,h,x,w,C=P(t,Object.assign({},M,{},N((n=e,Object.keys(n).reduce((function(t,e){return void 0!==n[e]&&(t[e]=n[e]),t}),{}))))),k=!1,S=!1,L=!1,j=!1,D=[],I=f(ht,C.interactiveDebounce),U=B++,H=(w=C.plugins).filter((function(t,e){return w.indexOf(t)===e})),R={id:U,reference:t,popper:y(),popperInstance:null,props:C,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:H,clearDelayTimeouts:function(){clearTimeout(o),clearTimeout(i),cancelAnimationFrame(a)},setProps:function(e){0;if(R.state.isDestroyed)return;ot("onBeforeUpdate",[R,e]),bt();var n=R.props,r=P(t,Object.assign({},R.props,{},e,{ignoreAttributes:!0}));R.props=r,mt(),n.interactiveDebounce!==r.interactiveDebounce&&(st(),I=f(ht,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?l(n.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):r.triggerTarget&&t.removeAttribute("aria-expanded");at(),rt(),X&&X(n,r);R.popperInstance&&(Et(),Ot().forEach((function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})));ot("onAfterUpdate",[R,e])},setContent:function(t){R.setProps({content:t})},show:function(){0;var t=R.state.isVisible,e=R.state.isDestroyed,n=!R.state.isEnabled,r=_.isTouch&&!R.props.touch,o=p(R.props.duration,0,M.duration);if(t||e||n||r)return;if(Q().hasAttribute("disabled"))return;if(ot("onShow",[R],!1),!1===R.props.onShow(R))return;R.state.isVisible=!0,G()&&(z.style.visibility="visible");rt(),dt(),R.state.isMounted||(z.style.transition="none");if(G()){var i=et(),a=i.box,s=i.content;E([a,s],0)}h=function(){if(R.state.isVisible&&!j){if(j=!0,z.offsetHeight,z.style.transition=R.props.moveTransition,G()&&R.props.animation){var t=et(),e=t.box,n=t.content;E([e,n],o),T([e,n],"visible")}it(),at(),v(q,R),R.state.isMounted=!0,ot("onMount",[R]),R.props.animation&&G()&&function(t,e){lt(t,e)}(o,(function(){R.state.isShown=!0,ot("onShown",[R])}))}},function(){var t,e=R.props.appendTo,n=Q();t=R.props.interactive&&e===M.appendTo||"parent"===e?n.parentNode:d(e,[n]);t.contains(z)||t.appendChild(z);Et(),!1}()},hide:function(){0;var t=!R.state.isVisible,e=R.state.isDestroyed,n=!R.state.isEnabled,r=p(R.props.duration,1,M.duration);if(t||e||n)return;if(ot("onHide",[R],!1),!1===R.props.onHide(R))return;R.state.isVisible=!1,R.state.isShown=!1,j=!1,k=!1,G()&&(z.style.visibility="hidden");if(st(),ft(),rt(),G()){var o=et(),i=o.box,a=o.content;R.props.animation&&(E([i,a],r),T([i,a],"hidden"))}it(),at(),R.props.animation?G()&&function(t,e){lt(t,(function(){!R.state.isVisible&&z.parentNode&&z.parentNode.contains(z)&&e()}))}(r,R.unmount):R.unmount()},hideWithInteractivity:function(t){0;tt().addEventListener("mousemove",I),v(W,I),I(t)},enable:function(){R.state.isEnabled=!0},disable:function(){R.hide(),R.state.isEnabled=!1},unmount:function(){0;R.state.isVisible&&R.hide();if(!R.state.isMounted)return;Tt(),Ot().forEach((function(t){t._tippy.unmount()})),z.parentNode&&z.parentNode.removeChild(z);q=q.filter((function(t){return t!==R})),R.state.isMounted=!1,ot("onHidden",[R])},destroy:function(){0;if(R.state.isDestroyed)return;R.clearDelayTimeouts(),R.unmount(),bt(),delete t._tippy,R.state.isDestroyed=!0,ot("onDestroy",[R])}};if(!C.render)return R;var F=C.render(R),z=F.popper,X=F.onUpdate;z.setAttribute("data-tippy-root",""),z.id="tippy-"+R.id,R.popper=z,t._tippy=R,z._tippy=R;var K=H.map((function(t){return t.fn(R)})),Z=t.hasAttribute("aria-expanded");return mt(),at(),rt(),ot("onCreate",[R]),C.showOnCreate&&At(),z.addEventListener("mouseenter",(function(){R.props.interactive&&R.state.isVisible&&R.clearDelayTimeouts()})),z.addEventListener("mouseleave",(function(t){R.props.interactive&&R.props.trigger.indexOf("mouseenter")>=0&&(tt().addEventListener("mousemove",I),I(t))})),R;function J(){var t=R.props.touch;return Array.isArray(t)?t:[t,0]}function Y(){return"hold"===J()[0]}function G(){var t;return!!(null==(t=R.props.render)?void 0:t.$$tippy)}function Q(){return x||t}function tt(){var t=Q().parentNode;return t?O(t):document}function et(){return $(z)}function nt(t){return R.state.isMounted&&!R.state.isVisible||_.isTouch||s&&"focus"===s.type?0:p(R.props.delay,t?0:1,M.delay)}function rt(){z.style.pointerEvents=R.props.interactive&&R.state.isVisible?"":"none",z.style.zIndex=""+R.props.zIndex}function ot(t,e,n){var r;(void 0===n&&(n=!0),K.forEach((function(n){n[t]&&n[t].apply(void 0,e)})),n)&&(r=R.props)[t].apply(r,e)}function it(){var e=R.props.aria;if(e.content){var n="aria-"+e.content,r=z.id;l(R.props.triggerTarget||t).forEach((function(t){var e=t.getAttribute(n);if(R.state.isVisible)t.setAttribute(n,e?e+" "+r:r);else{var o=e&&e.replace(r,"").trim();o?t.setAttribute(n,o):t.removeAttribute(n)}}))}}function at(){!Z&&R.props.aria.expanded&&l(R.props.triggerTarget||t).forEach((function(t){R.props.interactive?t.setAttribute("aria-expanded",R.state.isVisible&&t===Q()?"true":"false"):t.removeAttribute("aria-expanded")}))}function st(){tt().removeEventListener("mousemove",I),W=W.filter((function(t){return t!==I}))}function ut(t){if(!(_.isTouch&&(L||"mousedown"===t.type)||R.props.interactive&&z.contains(t.target))){if(Q().contains(t.target)){if(_.isTouch)return;if(R.state.isVisible&&R.props.trigger.indexOf("click")>=0)return}else ot("onClickOutside",[R,t]);!0===R.props.hideOnClick&&(R.clearDelayTimeouts(),R.hide(),S=!0,setTimeout((function(){S=!1})),R.state.isMounted||ft())}}function pt(){L=!0}function ct(){L=!1}function dt(){var t=tt();t.addEventListener("mousedown",ut,!0),t.addEventListener("touchend",ut,u),t.addEventListener("touchstart",ct,u),t.addEventListener("touchmove",pt,u)}function ft(){var t=tt();t.removeEventListener("mousedown",ut,!0),t.removeEventListener("touchend",ut,u),t.removeEventListener("touchstart",ct,u),t.removeEventListener("touchmove",pt,u)}function lt(t,e){var n=et().box;function r(t){t.target===n&&(A(n,"remove",r),e())}if(0===t)return e();A(n,"remove",c),A(n,"add",r),c=r}function vt(e,n,r){void 0===r&&(r=!1),l(R.props.triggerTarget||t).forEach((function(t){t.addEventListener(e,n,r),D.push({node:t,eventType:e,handler:n,options:r})}))}function mt(){var t;Y()&&(vt("touchstart",yt,{passive:!0}),vt("touchend",gt,{passive:!0})),(t=R.props.trigger,t.split(/\s+/).filter(Boolean)).forEach((function(t){if("manual"!==t)switch(vt(t,yt),t){case"mouseenter":vt("mouseleave",gt);break;case"focus":vt(V?"focusout":"blur",xt);break;case"focusin":vt("focusout",xt)}}))}function bt(){D.forEach((function(t){var e=t.node,n=t.eventType,r=t.handler,o=t.options;e.removeEventListener(n,r,o)})),D=[]}function yt(t){var e,n=!1;if(R.state.isEnabled&&!wt(t)&&!S){var r="focus"===(null==(e=s)?void 0:e.type);s=t,x=t.currentTarget,at(),!R.state.isVisible&&g(t)&&W.forEach((function(e){return e(t)})),"click"===t.type&&(R.props.trigger.indexOf("mouseenter")<0||k)&&!1!==R.props.hideOnClick&&R.state.isVisible?n=!0:At(t),"click"===t.type&&(k=!n),n&&!r&&_t(t)}}function ht(t){var e=t.target,n=Q().contains(e)||z.contains(e);"mousemove"===t.type&&n||function(t,e){var n=e.clientX,r=e.clientY;return t.every((function(t){var e=t.popperRect,o=t.popperState,i=t.props.interactiveBorder,a=m(o.placement),s=o.modifiersData.offset;if(!s)return!0;var u="bottom"===a?s.top.y:0,p="top"===a?s.bottom.y:0,c="right"===a?s.left.x:0,d="left"===a?s.right.x:0,f=e.top-r+u>i,l=r-e.bottom-p>i,v=e.left-n+c>i,b=n-e.right-d>i;return f||l||v||b}))}(Ot().concat(z).map((function(t){var e,n=null==(e=t._tippy.popperInstance)?void 0:e.state;return n?{popperRect:t.getBoundingClientRect(),popperState:n,props:C}:null})).filter(Boolean),t)&&(st(),_t(t))}function gt(t){wt(t)||R.props.trigger.indexOf("click")>=0&&k||(R.props.interactive?R.hideWithInteractivity(t):_t(t))}function xt(t){R.props.trigger.indexOf("focusin")<0&&t.target!==Q()||R.props.interactive&&t.relatedTarget&&z.contains(t.relatedTarget)||_t(t)}function wt(t){return!!_.isTouch&&Y()!==t.type.indexOf("touch")>=0}function Et(){Tt();var e=R.props,n=e.popperOptions,o=e.placement,i=e.offset,a=e.getReferenceClientRect,s=e.moveTransition,u=G()?$(z).arrow:null,p=a?{getBoundingClientRect:a,contextElement:a.contextElement||Q()}:t,c=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if(G()){var n=et().box;["placement","reference-hidden","escaped"].forEach((function(t){"placement"===t?n.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?n.setAttribute("data-"+t,""):n.removeAttribute("data-"+t)})),e.attributes.popper={}}}}];G()&&u&&c.push({name:"arrow",options:{element:u,padding:3}}),c.push.apply(c,(null==n?void 0:n.modifiers)||[]),R.popperInstance=(0,r.fi)(p,z,Object.assign({},n,{placement:o,onFirstUpdate:h,modifiers:c}))}function Tt(){R.popperInstance&&(R.popperInstance.destroy(),R.popperInstance=null)}function Ot(){return b(z.querySelectorAll("[data-tippy-root]"))}function At(t){R.clearDelayTimeouts(),t&&ot("onTrigger",[R,t]),dt();var e=nt(!0),n=J(),r=n[0],i=n[1];_.isTouch&&"hold"===r&&i&&(e=i),e?o=setTimeout((function(){R.show()}),e):R.show()}function _t(t){if(R.clearDelayTimeouts(),ot("onUntrigger",[R,t]),R.state.isVisible){if(!(R.props.trigger.indexOf("mouseenter")>=0&&R.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&k)){var e=nt(!1);e?i=setTimeout((function(){R.state.isVisible&&R.hide()}),e):a=requestAnimationFrame((function(){R.hide()}))}}else ft()}}function X(t,e){void 0===e&&(e={});var n=M.plugins.concat(e.plugins||[]);document.addEventListener("touchstart",k,u),window.addEventListener("blur",L);var r=Object.assign({},e,{plugins:n}),o=w(t).reduce((function(t,e){var n=e&&z(e,r);return n&&t.push(n),t}),[]);return h(t)?o[0]:o}X.defaultProps=M,X.setDefaultProps=function(t){Object.keys(t).forEach((function(e){M[e]=t[e]}))},X.currentInput=_;X.setDefaultProps({render:F});const K=X},2223:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,'.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}',""]),t.exports=r},6598:(t,e,n)=>{var r=n(2223);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("452ff9b8",r,!0,{})}}]);