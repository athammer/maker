(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6023],{13077:(e,t,r)=>{"use strict";function n(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect();return{width:r.width/1,height:r.height/1,top:r.top/1,right:r.right/1,bottom:r.bottom/1,left:r.left/1,x:r.left/1,y:r.top/1}}function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function c(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function f(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function p(e){return n(u(e)).left+i(e).scrollLeft}function l(e){return o(e).getComputedStyle(e)}function d(e){var t=l(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function v(e,t,r){void 0===r&&(r=!1);var a,s,l=c(t),v=c(t)&&function(e){var t=e.getBoundingClientRect(),r=t.width/e.offsetWidth||1,n=t.height/e.offsetHeight||1;return 1!==r||1!==n}(t),h=u(t),b=n(e,v),m={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(l||!l&&!r)&&(("body"!==f(t)||d(h))&&(m=(a=t)!==o(a)&&c(a)?{scrollLeft:(s=a).scrollLeft,scrollTop:s.scrollTop}:i(a)),c(t)?((y=n(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):h&&(y.x=p(h))),{x:b.left+m.scrollLeft-y.x,y:b.top+m.scrollTop-y.y,width:b.width,height:b.height}}function h(e){var t=n(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function b(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||u(e)}function m(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:c(e)&&d(e)?e:m(b(e))}function y(e,t){var r;void 0===t&&(t=[]);var n=m(e),i=n===(null==(r=e.ownerDocument)?void 0:r.body),a=o(n),c=i?[a].concat(a.visualViewport||[],d(n)?n:[]):n,s=t.concat(c);return i?s:s.concat(y(b(c)))}function g(e){return["table","td","th"].indexOf(f(e))>=0}function w(e){return c(e)&&"fixed"!==l(e).position?e.offsetParent:null}function x(e){for(var t=o(e),r=w(e);r&&g(r)&&"static"===l(r).position;)r=w(r);return r&&("html"===f(r)||"body"===f(r)&&"static"===l(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&c(e)&&"fixed"===l(e).position)return null;for(var r=b(e);c(r)&&["html","body"].indexOf(f(r))<0;){var n=l(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}r.d(t,{fi:()=>pe});var j="top",O="bottom",A="right",E="left",M="auto",k=[j,O,A,E],D="start",L="end",P="viewport",B="popper",S=k.reduce((function(e,t){return e.concat([t+"-"+D,t+"-"+L])}),[]),W=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+D,t+"-"+L])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function C(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var z={placement:"bottom",modifiers:[],strategy:"absolute"};function H(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function I(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?z:o;return function(e,t,r){void 0===r&&(r=i);var o,c,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},z,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],u=!1,p={state:s,setOptions:function(r){var o="function"==typeof r?r(s.options):r;l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:a(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var c=function(e){var t=C(e);return R.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers)));return s.orderedModifiers=c.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:n}),a=function(){};f.push(i||a)}})),p.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,r=e.popper;if(H(t,r)){s.rects={reference:v(t,x(r),"fixed"===s.options.strategy),popper:h(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,f=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:p})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return c||(c=new Promise((function(e){Promise.resolve().then((function(){c=void 0,e(o())}))}))),c}),destroy:function(){l(),u=!0}};if(!H(e,t))return p;function l(){f.forEach((function(e){return e()})),f=[]}return p.setOptions(r).then((function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)})),p}}var T={passive:!0};const U={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,a=void 0===i||i,c=n.resize,s=void 0===c||c,f=o(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",r.update,T)})),s&&f.addEventListener("resize",r.update,T),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",r.update,T)})),s&&f.removeEventListener("resize",r.update,T)}},data:{}};function q(e){return e.split("-")[0]}function V(e){return e.split("-")[1]}function N(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function F(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?q(o):null,a=o?V(o):null,c=r.x+r.width/2-n.width/2,s=r.y+r.height/2-n.height/2;switch(i){case j:t={x:c,y:r.y-n.height};break;case O:t={x:c,y:r.y+r.height};break;case A:t={x:r.x+r.width,y:s};break;case E:t={x:r.x-n.width,y:s};break;default:t={x:r.x,y:r.y}}var f=i?N(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case D:t[f]=t[f]-(r[u]/2-n[u]/2);break;case L:t[f]=t[f]+(r[u]/2-n[u]/2)}}return t}const _={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=F({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var $=Math.max,X=Math.min,Y=Math.round,G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,r=e.popper,n=e.popperRect,i=e.placement,a=e.variation,c=e.offsets,s=e.position,f=e.gpuAcceleration,p=e.adaptive,d=e.roundOffsets,v=!0===d?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:Y(Y(t*n)/n)||0,y:Y(Y(r*n)/n)||0}}(c):"function"==typeof d?d(c):c,h=v.x,b=void 0===h?0:h,m=v.y,y=void 0===m?0:m,g=c.hasOwnProperty("x"),w=c.hasOwnProperty("y"),M=E,k=j,D=window;if(p){var P=x(r),B="clientHeight",S="clientWidth";P===o(r)&&"static"!==l(P=u(r)).position&&"absolute"===s&&(B="scrollHeight",S="scrollWidth"),P=P,i!==j&&(i!==E&&i!==A||a!==L)||(k=O,y-=P[B]-n.height,y*=f?1:-1),i!==E&&(i!==j&&i!==O||a!==L)||(M=A,b-=P[S]-n.width,b*=f?1:-1)}var W,R=Object.assign({position:s},p&&G);return f?Object.assign({},R,((W={})[k]=w?"0":"",W[M]=g?"0":"",W.transform=(D.devicePixelRatio||1)<=1?"translate("+b+"px, "+y+"px)":"translate3d("+b+"px, "+y+"px, 0)",W)):Object.assign({},R,((t={})[k]=w?y+"px":"",t[M]=g?b+"px":"",t.transform="",t))}var J={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,(function(e){return J[e]}))}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,(function(e){return Q[e]}))}function te(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&s(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ne(e,t){return t===P?re(function(e){var t=o(e),r=u(e),n=t.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,s=0;return n&&(i=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=n.offsetLeft,s=n.offsetTop)),{width:i,height:a,x:c+p(e),y:s}}(e)):c(t)?function(e){var t=n(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):re(function(e){var t,r=u(e),n=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=$(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=$(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+p(e),f=-n.scrollTop;return"rtl"===l(o||r).direction&&(s+=$(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:s,y:f}}(u(e)))}function oe(e,t,r){var n="clippingParents"===t?function(e){var t=y(b(e)),r=["absolute","fixed"].indexOf(l(e).position)>=0&&c(e)?x(e):e;return a(r)?t.filter((function(e){return a(e)&&te(e,r)&&"body"!==f(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],s=o.reduce((function(t,r){var n=ne(e,r);return t.top=$(n.top,t.top),t.right=X(n.right,t.right),t.bottom=X(n.bottom,t.bottom),t.left=$(n.left,t.left),t}),ne(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ae(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function ce(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,c=r.boundary,s=void 0===c?"clippingParents":c,f=r.rootBoundary,p=void 0===f?P:f,l=r.elementContext,d=void 0===l?B:l,v=r.altBoundary,h=void 0!==v&&v,b=r.padding,m=void 0===b?0:b,y=ie("number"!=typeof m?m:ae(m,k)),g=d===B?"reference":B,w=e.rects.popper,x=e.elements[h?g:d],E=oe(a(x)?x:x.contextElement||u(e.elements.popper),s,p),M=n(e.elements.reference),D=F({reference:M,element:w,strategy:"absolute",placement:i}),L=re(Object.assign({},w,D)),S=d===B?L:M,W={top:E.top-S.top+y.top,bottom:S.bottom-E.bottom+y.bottom,left:E.left-S.left+y.left,right:S.right-E.right+y.right},R=e.modifiersData.offset;if(d===B&&R){var C=R[i];Object.keys(W).forEach((function(e){var t=[A,O].indexOf(e)>=0?1:-1,r=[j,O].indexOf(e)>=0?"y":"x";W[e]+=C[r]*t}))}return W}function se(e,t,r){return $(e,X(t,r))}function fe(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ue(e){return[j,A,O,E].some((function(t){return e[t]>=0}))}var pe=I({defaultModifiers:[U,_,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,c=r.roundOffsets,s=void 0===c||c,f={placement:q(t.placement),variation:V(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];c(o)&&f(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});c(n)&&f(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=W.reduce((function(e,r){return e[r]=function(e,t,r){var n=q(e),o=[E,j].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],c=i[1];return a=a||0,c=(c||0)*o,[E,A].indexOf(n)>=0?{x:c,y:a}:{x:a,y:c}}(r,t.rects,i),e}),{}),c=a[t.placement],s=c.x,f=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,c=void 0===a||a,s=r.fallbackPlacements,f=r.padding,u=r.boundary,p=r.rootBoundary,l=r.altBoundary,d=r.flipVariations,v=void 0===d||d,h=r.allowedAutoPlacements,b=t.options.placement,m=q(b),y=s||(m===b||!v?[K(b)]:function(e){if(q(e)===M)return[];var t=K(e);return[ee(e),t,ee(t)]}(b)),g=[b].concat(y).reduce((function(e,r){return e.concat(q(r)===M?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,c=r.flipVariations,s=r.allowedAutoPlacements,f=void 0===s?W:s,u=V(n),p=u?c?S:S.filter((function(e){return V(e)===u})):k,l=p.filter((function(e){return f.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,r){return t[r]=ce(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[q(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:p,padding:f,flipVariations:v,allowedAutoPlacements:h}):r)}),[]),w=t.rects.reference,x=t.rects.popper,L=new Map,P=!0,B=g[0],R=0;R<g.length;R++){var C=g[R],z=q(C),H=V(C)===D,I=[j,O].indexOf(z)>=0,T=I?"width":"height",U=ce(t,{placement:C,boundary:u,rootBoundary:p,altBoundary:l,padding:f}),N=I?H?A:E:H?O:j;w[T]>x[T]&&(N=K(N));var F=K(N),_=[];if(i&&_.push(U[z]<=0),c&&_.push(U[N]<=0,U[F]<=0),_.every((function(e){return e}))){B=C,P=!1;break}L.set(C,_)}if(P)for(var $=function(e){var t=g.find((function(t){var r=L.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return B=t,"break"},X=v?3:1;X>0;X--){if("break"===$(X))break}t.placement!==B&&(t.modifiersData[n]._skip=!0,t.placement=B,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,c=void 0!==a&&a,s=r.boundary,f=r.rootBoundary,u=r.altBoundary,p=r.padding,l=r.tether,d=void 0===l||l,v=r.tetherOffset,b=void 0===v?0:v,m=ce(t,{boundary:s,rootBoundary:f,padding:p,altBoundary:u}),y=q(t.placement),g=V(t.placement),w=!g,M=N(y),k="x"===M?"y":"x",L=t.modifiersData.popperOffsets,P=t.rects.reference,B=t.rects.popper,S="function"==typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,W={x:0,y:0};if(L){if(i||c){var R="y"===M?j:E,C="y"===M?O:A,z="y"===M?"height":"width",H=L[M],I=L[M]+m[R],T=L[M]-m[C],U=d?-B[z]/2:0,F=g===D?P[z]:B[z],_=g===D?-B[z]:-P[z],Y=t.elements.arrow,G=d&&Y?h(Y):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=Z[R],K=Z[C],Q=se(0,P[z],G[z]),ee=w?P[z]/2-U-Q-J-S:F-Q-J-S,te=w?-P[z]/2+U+Q+K+S:_+Q+K+S,re=t.elements.arrow&&x(t.elements.arrow),ne=re?"y"===M?re.clientTop||0:re.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][M]:0,ie=L[M]+ee-oe-ne,ae=L[M]+te-oe;if(i){var fe=se(d?X(I,ie):I,H,d?$(T,ae):T);L[M]=fe,W[M]=fe-H}if(c){var ue="x"===M?j:E,pe="x"===M?O:A,le=L[k],de=le+m[ue],ve=le-m[pe],he=se(d?X(de,ie):de,le,d?$(ve,ae):ve);L[k]=he,W[k]=he-le}}t.modifiersData[n]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,c=q(r.placement),s=N(c),f=[E,A].indexOf(c)>=0?"height":"width";if(i&&a){var u=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ae(e,k))}(o.padding,r),p=h(i),l="y"===s?j:E,d="y"===s?O:A,v=r.rects.reference[f]+r.rects.reference[s]-a[s]-r.rects.popper[f],b=a[s]-r.rects.reference[s],m=x(i),y=m?"y"===s?m.clientHeight||0:m.clientWidth||0:0,g=v/2-b/2,w=u[l],M=y-p[f]-u[d],D=y/2-p[f]/2+g,L=se(w,D,M),P=s;r.modifiersData[n]=((t={})[P]=L,t.centerOffset=L-D,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&te(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ce(t,{elementContext:"reference"}),c=ce(t,{altBoundary:!0}),s=fe(a,n),f=fe(c,o,i),u=ue(s),p=ue(f);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]})},49940:(e,t,r)=>{var n=r(43203)(r(44362),"DataView");e.exports=n},87114:(e,t,r)=>{var n=r(43203)(r(44362),"Promise");e.exports=n},10689:(e,t,r)=>{var n=r(43203)(r(44362),"Set");e.exports=n},85284:(e,t,r)=>{var n=r(43203)(r(44362),"WeakMap");e.exports=n},34111:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}},56523:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}},18421:e=>{e.exports=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}},54639:(e,t,r)=>{var n=r(27841),o=r(63225);e.exports=function(e,t){return e&&n(t,o(t),e)}},24587:(e,t,r)=>{var n=r(27841),o=r(41291);e.exports=function(e,t){return e&&n(t,o(t),e)}},57643:(e,t,r)=>{var n=r(70959),o=r(34111),i=r(90879),a=r(54639),c=r(24587),s=r(68288),f=r(59430),u=r(62324),p=r(55063),l=r(55788),d=r(40367),v=r(42417),h=r(45393),b=r(50670),m=r(13632),y=r(43670),g=r(22343),w=r(86043),x=r(70071),j=r(51751),O=r(63225),A=r(41291),E="[object Arguments]",M="[object Function]",k="[object Object]",D={};D[E]=D["[object Array]"]=D["[object ArrayBuffer]"]=D["[object DataView]"]=D["[object Boolean]"]=D["[object Date]"]=D["[object Float32Array]"]=D["[object Float64Array]"]=D["[object Int8Array]"]=D["[object Int16Array]"]=D["[object Int32Array]"]=D["[object Map]"]=D["[object Number]"]=D[k]=D["[object RegExp]"]=D["[object Set]"]=D["[object String]"]=D["[object Symbol]"]=D["[object Uint8Array]"]=D["[object Uint8ClampedArray]"]=D["[object Uint16Array]"]=D["[object Uint32Array]"]=!0,D["[object Error]"]=D[M]=D["[object WeakMap]"]=!1,e.exports=function e(t,r,L,P,B,S){var W,R=1&r,C=2&r,z=4&r;if(L&&(W=B?L(t,P,B,S):L(t)),void 0!==W)return W;if(!x(t))return t;var H=y(t);if(H){if(W=h(t),!R)return f(t,W)}else{var I=v(t),T=I==M||"[object GeneratorFunction]"==I;if(g(t))return s(t,R);if(I==k||I==E||T&&!B){if(W=C||T?{}:m(t),!R)return C?p(t,c(W,t)):u(t,a(W,t))}else{if(!D[I])return B?t:{};W=b(t,I,R)}}S||(S=new n);var U=S.get(t);if(U)return U;S.set(t,W),j(t)?t.forEach((function(n){W.add(e(n,r,L,n,t,S))})):w(t)&&t.forEach((function(n,o){W.set(o,e(n,r,L,o,t,S))}));var q=H?void 0:(z?C?d:l:C?A:O)(t);return o(q||t,(function(n,o){q&&(n=t[o=n]),i(W,o,e(n,r,L,o,t,S))})),W}},60891:(e,t,r)=>{var n=r(18421),o=r(43670);e.exports=function(e,t,r){var i=t(e);return o(e)?i:n(i,r(e))}},81624:(e,t,r)=>{var n=r(42417),o=r(44939);e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},67417:(e,t,r)=>{var n=r(42417),o=r(44939);e.exports=function(e){return o(e)&&"[object Set]"==n(e)}},27521:(e,t,r)=>{var n=r(62803),o=r(63865),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},41734:(e,t,r)=>{var n=r(14899);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},90343:e=>{var t=/\w*$/;e.exports=function(e){var r=new e.constructor(e.source,t.exec(e));return r.lastIndex=e.lastIndex,r}},54871:(e,t,r)=>{var n=r(52773),o=n?n.prototype:void 0,i=o?o.valueOf:void 0;e.exports=function(e){return i?Object(i.call(e)):{}}},62324:(e,t,r)=>{var n=r(27841),o=r(97976);e.exports=function(e,t){return n(e,o(e),t)}},55063:(e,t,r)=>{var n=r(27841),o=r(80569);e.exports=function(e,t){return n(e,o(e),t)}},55788:(e,t,r)=>{var n=r(60891),o=r(97976),i=r(63225);e.exports=function(e){return n(e,i,o)}},40367:(e,t,r)=>{var n=r(60891),o=r(80569),i=r(41291);e.exports=function(e){return n(e,i,o)}},97976:(e,t,r)=>{var n=r(56523),o=r(64043),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,c=a?function(e){return null==e?[]:(e=Object(e),n(a(e),(function(t){return i.call(e,t)})))}:o;e.exports=c},80569:(e,t,r)=>{var n=r(18421),o=r(62107),i=r(97976),a=r(64043),c=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,i(e)),e=o(e);return t}:a;e.exports=c},42417:(e,t,r)=>{var n=r(49940),o=r(4804),i=r(87114),a=r(10689),c=r(85284),s=r(1185),f=r(51214),u="[object Map]",p="[object Promise]",l="[object Set]",d="[object WeakMap]",v="[object DataView]",h=f(n),b=f(o),m=f(i),y=f(a),g=f(c),w=s;(n&&w(new n(new ArrayBuffer(1)))!=v||o&&w(new o)!=u||i&&w(i.resolve())!=p||a&&w(new a)!=l||c&&w(new c)!=d)&&(w=function(e){var t=s(e),r="[object Object]"==t?e.constructor:void 0,n=r?f(r):"";if(n)switch(n){case h:return v;case b:return u;case m:return p;case y:return l;case g:return d}return t}),e.exports=w},45393:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var r=e.length,n=new e.constructor(r);return r&&"string"==typeof e[0]&&t.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},50670:(e,t,r)=>{var n=r(14899),o=r(41734),i=r(90343),a=r(54871),c=r(31234);e.exports=function(e,t,r){var s=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new s(+e);case"[object DataView]":return o(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return c(e,r);case"[object Map]":return new s;case"[object Number]":case"[object String]":return new s(e);case"[object RegExp]":return i(e);case"[object Set]":return new s;case"[object Symbol]":return a(e)}}},63865:(e,t,r)=>{var n=r(15290)(Object.keys,Object);e.exports=n},79931:(e,t,r)=>{var n=r(57643);e.exports=function(e){return n(e,5)}},86043:(e,t,r)=>{var n=r(81624),o=r(19081),i=r(51985),a=i&&i.isMap,c=a?o(a):n;e.exports=c},51751:(e,t,r)=>{var n=r(67417),o=r(19081),i=r(51985),a=i&&i.isSet,c=a?o(a):n;e.exports=c},63225:(e,t,r)=>{var n=r(28083),o=r(27521),i=r(16175);e.exports=function(e){return i(e)?n(e):o(e)}},64043:e=>{e.exports=function(){return[]}},13555:function(e){e.exports=function(){"use strict";var e=function(e){var t=e.props,r=e.data,n=e.parent,o=function e(t){return Array.isArray(t)?(r=t=>e(t),t.reduce(((e,t)=>e.concat(r(t))),[])):null!==(n=t)&&"object"==typeof n?function(e){let t=[];for(const r in e)e[r]&&t.push(r);return t}(t):"string"==typeof t&&t?[t]:[];var r,n}([r.staticClass,r.class]);if(o){var i,a,c,s=(a=(i=t).body,c=i.document,a?window.document.body:!!c&&window.document.documentElement);if(s){var f=function(e,t){if(!t.length)return;const{classList:r}=e;return t.filter((e=>{if(!r.contains(e))return r.add(e),!0}))}(s,o),u=function(){!function(e,t){if(!t||!t.length)return;let r;for(;r=t.shift();)e.classList.remove(r);e.classList.length||e.removeAttribute("class")}(s,f)};n.$once("hook:beforeUpdate",u),n.$once("hook:destroyed",u)}}},t=Object.prototype.hasOwnProperty,r=function(e,t,r){var n="&"===t[0],o="~"===(t=n?t.slice(1):t)[0],i="!"===(t=o?t.slice(1):t)[0];return{o:e,t:t=i?t.slice(1):t,i:r,u:{once:o,capture:i,passive:n}}},n=function(e){var n,o,i,a=e.props,c=e.listeners,s=e.parent,f=function(e,n){var o,i,a=[];for(var c in n)if(o=n,i=c,t.call(o,i)){var s=n[c],f=r(e,c,s);f.o.addEventListener(f.t,f.i,f.u),a.push(f)}return a}((o=(n=a).body,i=n.document,o?window.document.body:i?window.document:window),c),u=function(){!function(e){for(var t;t=e.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(f)};s.$once("hook:beforeUpdate",u),s.$once("hook:destroyed",u)},o=function(t){n(t),e(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(e,t){return t.parent._isMounted?o(t):t.parent.$once("hook:mounted",(function(){o(t)})),t.slots().default}}}()},57426:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e>t?e:t},o=function(e){var t=e/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},i=function(e){return 255*(e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e)},a=96.422,c=82.521,s=function(e){var t,r,o=.9555766*(t=e).x+-.0230393*t.y+.0631636*t.z,a=-.0282895*t.x+1.0099416*t.y+.0210077*t.z,c=.0122982*t.x+-.020483*t.y+1.3299098*t.z;return r={r:i(.032404542*o-.015371385*a-.004985314*c),g:i(-.00969266*o+.018760108*a+41556e-8*c),b:i(556434e-9*o-.002040259*a+.010572252*c),a:e.a},{r:n(r.r,0,255),g:n(r.g,0,255),b:n(r.b,0,255),a:n(r.a)}},f=function(e){var t=o(e.r),r=o(e.g),i=o(e.b);return function(e){return{x:n(e.x,0,a),y:n(e.y,0,100),z:n(e.z,0,c),a:n(e.a)}}(function(e){return{x:1.0478112*e.x+.0228866*e.y+-.050127*e.z,y:.0295424*e.x+.9904844*e.y+-.0170491*e.z,z:-.0092345*e.x+.0150436*e.y+.7521316*e.z,a:e.a}}({x:100*(.4124564*t+.3575761*r+.1804375*i),y:100*(.2126729*t+.7151522*r+.072175*i),z:100*(.0193339*t+.119192*r+.9503041*i),a:e.a}))},u=216/24389,p=24389/27,l=function(e){var t=f(e),r=t.x/a,n=t.y/100,o=t.z/c;return r=r>u?Math.cbrt(r):(p*r+16)/116,{l:116*(n=n>u?Math.cbrt(n):(p*n+16)/116)-16,a:500*(r-n),b:200*(n-(o=o>u?Math.cbrt(o):(p*o+16)/116)),alpha:t.a}},d=function(e,t,r){var o,i=l(e),f=l(t);return function(e){var t=(e.l+16)/116,r=e.a/500+t,n=t-e.b/200;return s({x:(Math.pow(r,3)>u?Math.pow(r,3):(116*r-16)/p)*a,y:100*(e.l>8?Math.pow((e.l+16)/116,3):e.l/p),z:(Math.pow(n,3)>u?Math.pow(n,3):(116*n-16)/p)*c,a:e.alpha})}({l:n((o={l:i.l*(1-r)+f.l*r,a:i.a*(1-r)+f.a*r,b:i.b*(1-r)+f.b*r,alpha:i.alpha*(1-r)+f.alpha*r}).l,0,400),a:o.a,b:o.b,alpha:n(o.alpha)})};function v(e){function t(e,t,r){void 0===r&&(r=5);for(var n=[],o=1/(r-1),i=0;i<=r-1;i++)n.push(e.mix(t,o*i));return n}e.prototype.mix=function(t,r){void 0===r&&(r=.5);var n=t instanceof e?t:new e(t),o=d(this.toRgb(),n.toRgb(),r);return new e(o)},e.prototype.tints=function(e){return t(this,"#fff",e)},e.prototype.shades=function(e){return t(this,"#000",e)},e.prototype.tones=function(e){return t(this,"#808080",e)}}}}]);