(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[1603],{9893:e=>{e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=281)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(e,t){return c.call(t),p(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},281:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[t("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};r._withStripped=!0;var o=n(0),i=Object(o.a)({},r,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/x.svg",t.default=i.exports}})},8649:(e,t,n)=>{"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},o=n(5602),i=(0,o.sym)("UNDEF");function a(e){if(!(e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)&&Object.keys(e).length>0))throw new Error("Please provide an object with at least one key and array of values");var t=Object.keys(e).reduce((function(t,n){return t.keys.push(n),t.possibleValues.push(e[n]),t}),{keys:[],possibleValues:[]}),n=t.keys,a=t.possibleValues;return(0,o.assertHaveValuesForEveryKey)(n,a),(0,o.generateValueCombinations)(a,!0).map((function(e){return e.reduce((function(e,t,r){return t!==i&&(e[n[r]]=t),e}),{})}))}a.UNDEF=i,a.__esModule=!0,a.default=a,e.exports=a},5602:(e,t)=>{"use strict";function n(e,t){return[e,t]}function r(e,t){return[e].concat(t)}t.__esModule=!0,t.sym=function(e){return"@@combos/"+e},t.buildBaseTuple=n,t.addToTuple=r,t.generateValueCombinations=function e(t){var o=t[0],i=t.slice(1),a=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];if(0===i.length)return a?o.map((function(e){return[e]})):o;for(var s=[],c=e(i),u=1===i.length?n:r,p=0,f=c.length;p<f;p++)for(var d=0,l=o.length;d<l;d++)s.push(u(o[d],c[p]));return s},t.assertHaveValuesForEveryKey=function(e,t){for(var n=0,r=e.length;n<r;n++){var o=t[n];if(!o||!Array.isArray(o)||o.length<=0)throw new Error("Please provide an array of at least one value for key '"+e[n]+"'")}}},7016:e=>{"use strict";const t=Object.prototype.hasOwnProperty;e.exports=(e,n)=>t.call(e,n)},7651:(e,t,n)=>{"use strict";function r(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function s(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function c(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function u(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function f(e){return r(p(e)).left+i(e).scrollLeft}function d(e){return o(e).getComputedStyle(e)}function l(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function m(e,t,n){void 0===n&&(n=!1);var a,c,d=s(t),m=s(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),v=p(t),h=r(e,m),b={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(d||!d&&!n)&&(("body"!==u(t)||l(v))&&(b=(a=t)!==o(a)&&s(a)?{scrollLeft:(c=a).scrollLeft,scrollTop:c.scrollTop}:i(a)),s(t)?((y=r(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):v&&(y.x=f(v))),{x:h.left+b.scrollLeft-y.x,y:h.top+b.scrollTop-y.y,width:h.width,height:h.height}}function v(e){var t=r(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function h(e){return"html"===u(e)?e:e.assignedSlot||e.parentNode||(c(e)?e.host:null)||p(e)}function b(e){return["html","body","#document"].indexOf(u(e))>=0?e.ownerDocument.body:s(e)&&l(e)?e:b(h(e))}function y(e,t){var n;void 0===t&&(t=[]);var r=b(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],l(r)?r:[]):r,c=t.concat(s);return i?c:c.concat(y(h(s)))}function g(e){return["table","td","th"].indexOf(u(e))>=0}function x(e){return s(e)&&"fixed"!==d(e).position?e.offsetParent:null}function w(e){for(var t=o(e),n=x(e);n&&g(n)&&"static"===d(n).position;)n=x(n);return n&&("html"===u(n)||"body"===u(n)&&"static"===d(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&s(e)&&"fixed"===d(e).position)return null;for(var n=h(e);s(n)&&["html","body"].indexOf(u(n))<0;){var r=d(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}n.d(t,{ZP:()=>nt});var O="top",E="bottom",T="right",A="left",j="auto",k=[O,E,T,A],D="start",L="end",_="viewport",C="popper",M=k.reduce((function(e,t){return e.concat([t+"-"+D,t+"-"+L])}),[]),S=[].concat(k,[j]).reduce((function(e,t){return e.concat([t,t+"-"+D,t+"-"+L])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function P(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var H={placement:"bottom",modifiers:[],strategy:"absolute"};function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function B(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?H:o;return function(e,t,n){void 0===n&&(n=i);var o,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},H,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],p=!1,f={state:c,setOptions:function(n){var o="function"==typeof n?n(c.options):n;d(),c.options=Object.assign({},i,c.options,o),c.scrollParents={reference:a(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var s=function(e){var t=P(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,c.options.modifiers)));return c.orderedModifiers=s.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:f,options:r}),a=function(){};u.push(i||a)}})),f.update()},forceUpdate:function(){if(!p){var e=c.elements,t=e.reference,n=e.popper;if(R(t,n)){c.rects={reference:m(t,w(n),"fixed"===c.options.strategy),popper:v(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,u=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:u,instance:f})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){d(),p=!0}};if(!R(e,t))return f;function d(){u.forEach((function(e){return e()})),u=[]}return f.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var W={passive:!0};const N={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,c=void 0===s||s,u=o(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,W)})),c&&u.addEventListener("resize",n.update,W),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,W)})),c&&u.removeEventListener("resize",n.update,W)}},data:{}};function I(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function F(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?I(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case O:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:c};break;case A:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?q(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case D:t[u]=t[u]-(n[p]/2-r[p]/2);break;case L:t[u]=t[u]+(n[p]/2-r[p]/2)}}return t}const $={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=F({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var z=Math.max,X=Math.min,Y=Math.round,K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,c=e.position,u=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,m=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Y(Y(t*r)/r)||0,y:Y(Y(n*r)/r)||0}}(s):"function"==typeof l?l(s):s,v=m.x,h=void 0===v?0:v,b=m.y,y=void 0===b?0:b,g=s.hasOwnProperty("x"),x=s.hasOwnProperty("y"),j=A,k=O,D=window;if(f){var _=w(n),C="clientHeight",M="clientWidth";_===o(n)&&"static"!==d(_=p(n)).position&&"absolute"===c&&(C="scrollHeight",M="scrollWidth"),_=_,i!==O&&(i!==A&&i!==T||a!==L)||(k=E,y-=_[C]-r.height,y*=u?1:-1),i!==A&&(i!==O&&i!==E||a!==L)||(j=T,h-=_[M]-r.width,h*=u?1:-1)}var S,V=Object.assign({position:c},f&&K);return u?Object.assign({},V,((S={})[k]=x?"0":"",S[j]=g?"0":"",S.transform=(D.devicePixelRatio||1)<=1?"translate("+h+"px, "+y+"px)":"translate3d("+h+"px, "+y+"px, 0)",S)):Object.assign({},V,((t={})[k]=x?y+"px":"",t[j]=g?h+"px":"",t.transform="",t))}var J={left:"right",right:"left",bottom:"top",top:"bottom"};function G(e){return e.replace(/left|right|bottom|top/g,(function(e){return J[e]}))}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,(function(e){return Q[e]}))}function te(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&c(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function re(e,t){return t===_?ne(function(e){var t=o(e),n=p(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,c=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,c=r.offsetTop)),{width:i,height:a,x:s+f(e),y:c}}(e)):s(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ne(function(e){var t,n=p(e),r=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=z(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=z(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+f(e),u=-r.scrollTop;return"rtl"===d(o||n).direction&&(c+=z(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:c,y:u}}(p(e)))}function oe(e,t,n){var r="clippingParents"===t?function(e){var t=y(h(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&s(e)?w(e):e;return a(n)?t.filter((function(e){return a(e)&&te(e,n)&&"body"!==u(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],c=o.reduce((function(t,n){var r=re(e,n);return t.top=z(r.top,t.top),t.right=X(r.right,t.right),t.bottom=X(r.bottom,t.bottom),t.left=z(r.left,t.left),t}),re(e,i));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ae(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function se(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,s=n.boundary,c=void 0===s?"clippingParents":s,u=n.rootBoundary,f=void 0===u?_:u,d=n.elementContext,l=void 0===d?C:d,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,b=void 0===h?0:h,y=ie("number"!=typeof b?b:ae(b,k)),g=l===C?"reference":C,x=e.rects.popper,w=e.elements[v?g:l],A=oe(a(w)?w:w.contextElement||p(e.elements.popper),c,f),j=r(e.elements.reference),D=F({reference:j,element:x,strategy:"absolute",placement:i}),L=ne(Object.assign({},x,D)),M=l===C?L:j,S={top:A.top-M.top+y.top,bottom:M.bottom-A.bottom+y.bottom,left:A.left-M.left+y.left,right:M.right-A.right+y.right},V=e.modifiersData.offset;if(l===C&&V){var P=V[i];Object.keys(S).forEach((function(e){var t=[T,E].indexOf(e)>=0?1:-1,n=[O,E].indexOf(e)>=0?"y":"x";S[e]+=P[n]*t}))}return S}function ce(e,t,n){return z(e,X(t,n))}function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function pe(e){return[O,T,E,A].some((function(t){return e[t]>=0}))}var fe=B({defaultModifiers:[N,$,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:I(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&u(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&u(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=I(e),o=[A,O].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[A,T].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,b=I(h),y=c||(b===h||!m?[G(h)]:function(e){if(I(e)===j)return[];var t=G(e);return[ee(e),t,ee(t)]}(h)),g=[h].concat(y).reduce((function(e,n){return e.concat(I(n)===j?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?S:c,p=U(r),f=p?s?M:M.filter((function(e){return U(e)===p})):k,d=f.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=f);var l=d.reduce((function(t,n){return t[n]=se(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[I(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,w=t.rects.popper,L=new Map,_=!0,C=g[0],V=0;V<g.length;V++){var P=g[V],H=I(P),R=U(P)===D,B=[O,E].indexOf(H)>=0,W=B?"width":"height",N=se(t,{placement:P,boundary:p,rootBoundary:f,altBoundary:d,padding:u}),q=B?R?T:A:R?E:O;x[W]>w[W]&&(q=G(q));var F=G(q),$=[];if(i&&$.push(N[H]<=0),s&&$.push(N[q]<=0,N[F]<=0),$.every((function(e){return e}))){C=P,_=!1;break}L.set(P,$)}if(_)for(var z=function(e){var t=g.find((function(t){var n=L.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},X=m?3:1;X>0;X--){if("break"===z(X))break}t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,d=n.tether,l=void 0===d||d,m=n.tetherOffset,h=void 0===m?0:m,b=se(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:p}),y=I(t.placement),g=U(t.placement),x=!g,j=q(y),k="x"===j?"y":"x",L=t.modifiersData.popperOffsets,_=t.rects.reference,C=t.rects.popper,M="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,S={x:0,y:0};if(L){if(i||s){var V="y"===j?O:A,P="y"===j?E:T,H="y"===j?"height":"width",R=L[j],B=L[j]+b[V],W=L[j]-b[P],N=l?-C[H]/2:0,F=g===D?_[H]:C[H],$=g===D?-C[H]:-_[H],Y=t.elements.arrow,K=l&&Y?v(Y):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=Z[V],G=Z[P],Q=ce(0,_[H],K[H]),ee=x?_[H]/2-N-Q-J-M:F-Q-J-M,te=x?-_[H]/2+N+Q+G+M:$+Q+G+M,ne=t.elements.arrow&&w(t.elements.arrow),re=ne?"y"===j?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][j]:0,ie=L[j]+ee-oe-re,ae=L[j]+te-oe;if(i){var ue=ce(l?X(B,ie):B,R,l?z(W,ae):W);L[j]=ue,S[j]=ue-R}if(s){var pe="x"===j?O:A,fe="x"===j?E:T,de=L[k],le=de+b[pe],me=de-b[fe],ve=ce(l?X(le,ie):le,de,l?z(me,ae):me);L[k]=ve,S[k]=ve-de}}t.modifiersData[r]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=I(n.placement),c=q(s),u=[A,T].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ae(e,k))}(o.padding,n),f=v(i),d="y"===c?O:A,l="y"===c?E:T,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],b=w(i),y=b?"y"===c?b.clientHeight||0:b.clientWidth||0:0,g=m/2-h/2,x=p[d],j=y-f[u]-p[l],D=y/2-f[u]/2+g,L=ce(x,D,j),_=c;n.modifiersData[r]=((t={})[_]=L,t.centerOffset=L-D,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&te(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=se(t,{elementContext:"reference"}),s=se(t,{altBoundary:!0}),c=ue(a,r),u=ue(s,o,i),p=pe(c),f=pe(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]}),de="tippy-content",le="tippy-backdrop",me="tippy-arrow",ve="tippy-svg-arrow",he={passive:!0,capture:!0};function be(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function ye(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function ge(e,t){return"function"==typeof e?e.apply(void 0,t):e}function xe(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function we(e){return[].concat(e)}function Oe(e,t){-1===e.indexOf(t)&&e.push(t)}function Ee(e){return e.split("-")[0]}function Te(e){return[].slice.call(e)}function Ae(){return document.createElement("div")}function je(e){return["Element","Fragment"].some((function(t){return ye(e,t)}))}function ke(e){return ye(e,"MouseEvent")}function De(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Le(e){return je(e)?[e]:function(e){return ye(e,"NodeList")}(e)?Te(e):Array.isArray(e)?e:Te(document.querySelectorAll(e))}function _e(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Ce(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Me(e){var t=we(e)[0];return t&&t.ownerDocument||document}function Se(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var Ve={isTouch:!1},Pe=0;function He(){Ve.isTouch||(Ve.isTouch=!0,window.performance&&document.addEventListener("mousemove",Re))}function Re(){var e=performance.now();e-Pe<20&&(Ve.isTouch=!1,document.removeEventListener("mousemove",Re)),Pe=e}function Be(){var e=document.activeElement;if(De(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var We="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",Ne=/MSIE |Trident\//.test(We);var Ie={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ue=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Ie,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),qe=Object.keys(Ue);function Fe(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,o=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:o),t}),{});return Object.assign({},e,{},t)}function $e(e,t){var n=Object.assign({},t,{content:ge(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Fe(Object.assign({},Ue,{plugins:t}))):qe).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},Ue.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function ze(e,t){e.innerHTML=t}function Xe(e){var t=Ae();return!0===e?t.className=me:(t.className=ve,je(e)?t.appendChild(e):ze(t,e)),t}function Ye(e,t){je(t.content)?(ze(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?ze(e,t.content):e.textContent=t.content)}function Ke(e){var t=e.firstElementChild,n=Te(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(de)})),arrow:n.find((function(e){return e.classList.contains(me)||e.classList.contains(ve)})),backdrop:n.find((function(e){return e.classList.contains(le)}))}}function Ze(e){var t=Ae(),n=Ae();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Ae();function o(n,r){var o=Ke(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Ye(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(Xe(r.arrow))):i.appendChild(Xe(r.arrow)):s&&i.removeChild(s)}return r.className=de,r.setAttribute("data-state","hidden"),Ye(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Ze.$$tippy=!0;var Je=1,Ge=[],Qe=[];function et(e,t){var n,r,o,i,a,s,c,u,p,f=$e(e,Object.assign({},Ue,{},Fe((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],b=xe(Y,f.interactiveDebounce),y=Je++,g=(p=f.plugins).filter((function(e,t){return p.indexOf(e)===t})),x={id:y,reference:e,popper:Ae(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:g,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(o),cancelAnimationFrame(i)},setProps:function(t){0;if(x.state.isDestroyed)return;V("onBeforeUpdate",[x,t]),z();var n=x.props,r=$e(e,Object.assign({},x.props,{},t,{ignoreAttributes:!0}));x.props=r,$(),n.interactiveDebounce!==r.interactiveDebounce&&(R(),b=xe(Y,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?we(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");H(),S(),E&&E(n,r);x.popperInstance&&(G(),ee().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));V("onAfterUpdate",[x,t])},setContent:function(e){x.setProps({content:e})},show:function(){0;var e=x.state.isVisible,t=x.state.isDestroyed,n=!x.state.isEnabled,r=Ve.isTouch&&!x.props.touch,o=be(x.props.duration,0,Ue.duration);if(e||t||n||r)return;if(L().hasAttribute("disabled"))return;if(V("onShow",[x],!1),!1===x.props.onShow(x))return;x.state.isVisible=!0,D()&&(O.style.visibility="visible");S(),I(),x.state.isMounted||(O.style.transition="none");if(D()){var i=C(),a=i.box,s=i.content;_e([a,s],0)}c=function(){if(x.state.isVisible&&!v){if(v=!0,O.offsetHeight,O.style.transition=x.props.moveTransition,D()&&x.props.animation){var e=C(),t=e.box,n=e.content;_e([t,n],o),Ce([t,n],"visible")}P(),H(),Oe(Qe,x),x.state.isMounted=!0,V("onMount",[x]),x.props.animation&&D()&&function(e,t){q(e,t)}(o,(function(){x.state.isShown=!0,V("onShown",[x])}))}},function(){var e,t=x.props.appendTo,n=L();e=x.props.interactive&&t===Ue.appendTo||"parent"===t?n.parentNode:ge(t,[n]);e.contains(O)||e.appendChild(O);G(),!1}()},hide:function(){0;var e=!x.state.isVisible,t=x.state.isDestroyed,n=!x.state.isEnabled,r=be(x.props.duration,1,Ue.duration);if(e||t||n)return;if(V("onHide",[x],!1),!1===x.props.onHide(x))return;x.state.isVisible=!1,x.state.isShown=!1,v=!1,d=!1,D()&&(O.style.visibility="hidden");if(R(),U(),S(),D()){var o=C(),i=o.box,a=o.content;x.props.animation&&(_e([i,a],r),Ce([i,a],"hidden"))}P(),H(),x.props.animation?D()&&function(e,t){q(e,(function(){!x.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,x.unmount):x.unmount()},hideWithInteractivity:function(e){0;_().addEventListener("mousemove",b),Oe(Ge,b),b(e)},enable:function(){x.state.isEnabled=!0},disable:function(){x.hide(),x.state.isEnabled=!1},unmount:function(){0;x.state.isVisible&&x.hide();if(!x.state.isMounted)return;Q(),ee().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O);Qe=Qe.filter((function(e){return e!==x})),x.state.isMounted=!1,V("onHidden",[x])},destroy:function(){0;if(x.state.isDestroyed)return;x.clearDelayTimeouts(),x.unmount(),z(),delete e._tippy,x.state.isDestroyed=!0,V("onDestroy",[x])}};if(!f.render)return x;var w=f.render(x),O=w.popper,E=w.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+x.id,x.popper=O,e._tippy=x,O._tippy=x;var T=g.map((function(e){return e.fn(x)})),A=e.hasAttribute("aria-expanded");return $(),H(),S(),V("onCreate",[x]),f.showOnCreate&&te(),O.addEventListener("mouseenter",(function(){x.props.interactive&&x.state.isVisible&&x.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(e){x.props.interactive&&x.props.trigger.indexOf("mouseenter")>=0&&(_().addEventListener("mousemove",b),b(e))})),x;function j(){var e=x.props.touch;return Array.isArray(e)?e:[e,0]}function k(){return"hold"===j()[0]}function D(){var e;return!!(null==(e=x.props.render)?void 0:e.$$tippy)}function L(){return u||e}function _(){var e=L().parentNode;return e?Me(e):document}function C(){return Ke(O)}function M(e){return x.state.isMounted&&!x.state.isVisible||Ve.isTouch||a&&"focus"===a.type?0:be(x.props.delay,e?0:1,Ue.delay)}function S(){O.style.pointerEvents=x.props.interactive&&x.state.isVisible?"":"none",O.style.zIndex=""+x.props.zIndex}function V(e,t,n){var r;(void 0===n&&(n=!0),T.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=x.props)[e].apply(r,t)}function P(){var t=x.props.aria;if(t.content){var n="aria-"+t.content,r=O.id;we(x.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(x.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function H(){!A&&x.props.aria.expanded&&we(x.props.triggerTarget||e).forEach((function(e){x.props.interactive?e.setAttribute("aria-expanded",x.state.isVisible&&e===L()?"true":"false"):e.removeAttribute("aria-expanded")}))}function R(){_().removeEventListener("mousemove",b),Ge=Ge.filter((function(e){return e!==b}))}function B(e){if(!(Ve.isTouch&&(m||"mousedown"===e.type)||x.props.interactive&&O.contains(e.target))){if(L().contains(e.target)){if(Ve.isTouch)return;if(x.state.isVisible&&x.props.trigger.indexOf("click")>=0)return}else V("onClickOutside",[x,e]);!0===x.props.hideOnClick&&(x.clearDelayTimeouts(),x.hide(),l=!0,setTimeout((function(){l=!1})),x.state.isMounted||U())}}function W(){m=!0}function N(){m=!1}function I(){var e=_();e.addEventListener("mousedown",B,!0),e.addEventListener("touchend",B,he),e.addEventListener("touchstart",N,he),e.addEventListener("touchmove",W,he)}function U(){var e=_();e.removeEventListener("mousedown",B,!0),e.removeEventListener("touchend",B,he),e.removeEventListener("touchstart",N,he),e.removeEventListener("touchmove",W,he)}function q(e,t){var n=C().box;function r(e){e.target===n&&(Se(n,"remove",r),t())}if(0===e)return t();Se(n,"remove",s),Se(n,"add",r),s=r}function F(t,n,r){void 0===r&&(r=!1),we(x.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function $(){var e;k()&&(F("touchstart",X,{passive:!0}),F("touchend",K,{passive:!0})),(e=x.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(F(e,X),e){case"mouseenter":F("mouseleave",K);break;case"focus":F(Ne?"focusout":"blur",Z);break;case"focusin":F("focusout",Z)}}))}function z(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),h=[]}function X(e){var t,n=!1;if(x.state.isEnabled&&!J(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,H(),!x.state.isVisible&&ke(e)&&Ge.forEach((function(t){return t(e)})),"click"===e.type&&(x.props.trigger.indexOf("mouseenter")<0||d)&&!1!==x.props.hideOnClick&&x.state.isVisible?n=!0:te(e),"click"===e.type&&(d=!n),n&&!r&&ne(e)}}function Y(e){var t=e.target,n=L().contains(t)||O.contains(t);"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=Ee(o.placement),s=o.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,p="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=t.top-r+c>i,l=r-t.bottom-u>i,m=t.left-n+p>i,v=n-t.right-f>i;return d||l||m||v}))}(ee().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean),e)&&(R(),ne(e))}function K(e){J(e)||x.props.trigger.indexOf("click")>=0&&d||(x.props.interactive?x.hideWithInteractivity(e):ne(e))}function Z(e){x.props.trigger.indexOf("focusin")<0&&e.target!==L()||x.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||ne(e)}function J(e){return!!Ve.isTouch&&k()!==e.type.indexOf("touch")>=0}function G(){Q();var t=x.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,s=D()?Ke(O).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||L()}:e,p=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(D()){var n=C().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];D()&&s&&p.push({name:"arrow",options:{element:s,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),x.popperInstance=fe(u,O,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:p}))}function Q(){x.popperInstance&&(x.popperInstance.destroy(),x.popperInstance=null)}function ee(){return Te(O.querySelectorAll("[data-tippy-root]"))}function te(e){x.clearDelayTimeouts(),e&&V("onTrigger",[x,e]),I();var t=M(!0),n=j(),o=n[0],i=n[1];Ve.isTouch&&"hold"===o&&i&&(t=i),t?r=setTimeout((function(){x.show()}),t):x.show()}function ne(e){if(x.clearDelayTimeouts(),V("onUntrigger",[x,e]),x.state.isVisible){if(!(x.props.trigger.indexOf("mouseenter")>=0&&x.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=M(!1);t?o=setTimeout((function(){x.state.isVisible&&x.hide()}),t):i=requestAnimationFrame((function(){x.hide()}))}}else U()}}function tt(e,t){void 0===t&&(t={});var n=Ue.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",He,he),window.addEventListener("blur",Be);var r=Object.assign({},t,{plugins:n}),o=Le(e).reduce((function(e,t){var n=t&&et(t,r);return n&&e.push(n),e}),[]);return je(e)?o[0]:o}tt.defaultProps=Ue,tt.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Ue[t]=e[t]}))},tt.currentInput=Ve;tt.setDefaultProps({render:Ze});const nt=tt},2223:(e,t,n)=>{var r=n(7705)((function(e){return e[1]}));r.push([e.id,'.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}',""]),e.exports=r},6598:(e,t,n)=>{var r=n(2223);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,n(4023).Z)("452ff9b8",r,!0,{})}}]);