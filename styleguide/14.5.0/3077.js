"use strict";(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[3077],{13077:(e,t,n)=>{function r(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function s(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function f(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function c(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function u(e){return r(p(e)).left+i(e).scrollLeft}function l(e){return o(e).getComputedStyle(e)}function d(e){var t=l(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function m(e,t,n){void 0===n&&(n=!1);var a,f,l=s(t),m=s(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),h=p(t),v=r(e,m),g={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(l||!l&&!n)&&(("body"!==c(t)||d(h))&&(g=(a=t)!==o(a)&&s(a)?{scrollLeft:(f=a).scrollLeft,scrollTop:f.scrollTop}:i(a)),s(t)?((y=r(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):h&&(y.x=u(h))),{x:v.left+g.scrollLeft-y.x,y:v.top+g.scrollTop-y.y,width:v.width,height:v.height}}function h(e){var t=r(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function v(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||(f(e)?e.host:null)||p(e)}function g(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:s(e)&&d(e)?e:g(v(e))}function y(e,t){var n;void 0===t&&(t=[]);var r=g(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],d(r)?r:[]):r,f=t.concat(s);return i?f:f.concat(y(v(s)))}function b(e){return["table","td","th"].indexOf(c(e))>=0}function w(e){return s(e)&&"fixed"!==l(e).position?e.offsetParent:null}function x(e){for(var t=o(e),n=w(e);n&&b(n)&&"static"===l(n).position;)n=w(n);return n&&("html"===c(n)||"body"===c(n)&&"static"===l(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&s(e)&&"fixed"===l(e).position)return null;for(var n=v(e);s(n)&&["html","body"].indexOf(c(n))<0;){var r=l(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}n.d(t,{fi:()=>ue});var O="top",j="bottom",E="right",D="left",k="auto",L=[O,j,E,D],M="start",P="end",W="viewport",A="popper",B=L.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+P])}),[]),H=[].concat(L,[k]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+P])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function T(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var C={placement:"bottom",modifiers:[],strategy:"absolute"};function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function S(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?C:o;return function(e,t,n){void 0===n&&(n=i);var o,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},C,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(n){var o="function"==typeof n?n(f.options):n;l(),f.options=Object.assign({},i,f.options,o),f.scrollParents={reference:a(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var s=function(e){var t=T(e);return R.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,f.options.modifiers)));return f.orderedModifiers=s.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(q(t,n)){f.rects={reference:m(t,x(n),"fixed"===f.options.strategy),popper:h(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){l(),p=!0}};if(!q(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var N={passive:!0};const _={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,f=void 0===s||s,c=o(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,N)})),f&&c.addEventListener("resize",n.update,N),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,N)})),f&&c.removeEventListener("resize",n.update,N)}},data:{}};function V(e){return e.split("-")[0]}function I(e){return e.split("-")[1]}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?V(o):null,a=o?I(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case O:t={x:s,y:n.y-r.height};break;case j:t={x:s,y:n.y+n.height};break;case E:t={x:n.x+n.width,y:f};break;case D:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?U(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case M:t[c]=t[c]-(n[p]/2-r[p]/2);break;case P:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}const F={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var X=Math.max,Y=Math.min,G=Math.round,J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,f=e.position,c=e.gpuAcceleration,u=e.adaptive,d=e.roundOffsets,m=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:G(G(t*r)/r)||0,y:G(G(n*r)/r)||0}}(s):"function"==typeof d?d(s):s,h=m.x,v=void 0===h?0:h,g=m.y,y=void 0===g?0:g,b=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),k=D,L=O,M=window;if(u){var W=x(n),A="clientHeight",B="clientWidth";W===o(n)&&"static"!==l(W=p(n)).position&&"absolute"===f&&(A="scrollHeight",B="scrollWidth"),W=W,i!==O&&(i!==D&&i!==E||a!==P)||(L=j,y-=W[A]-r.height,y*=c?1:-1),i!==D&&(i!==O&&i!==j||a!==P)||(k=E,v-=W[B]-r.width,v*=c?1:-1)}var H,R=Object.assign({position:f},u&&J);return c?Object.assign({},R,((H={})[L]=w?"0":"",H[k]=b?"0":"",H.transform=(M.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",H)):Object.assign({},R,((t={})[L]=w?y+"px":"",t[k]=b?v+"px":"",t.transform="",t))}var Q={left:"right",right:"left",bottom:"top",top:"bottom"};function Z(e){return e.replace(/left|right|bottom|top/g,(function(e){return Q[e]}))}var $={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,(function(e){return $[e]}))}function te(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&f(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function re(e,t){return t===W?ne(function(e){var t=o(e),n=p(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:i,height:a,x:s+u(e),y:f}}(e)):s(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ne(function(e){var t,n=p(e),r=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=X(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=X(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+u(e),c=-r.scrollTop;return"rtl"===l(o||n).direction&&(f+=X(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(p(e)))}function oe(e,t,n){var r="clippingParents"===t?function(e){var t=y(v(e)),n=["absolute","fixed"].indexOf(l(e).position)>=0&&s(e)?x(e):e;return a(n)?t.filter((function(e){return a(e)&&te(e,n)&&"body"!==c(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],f=o.reduce((function(t,n){var r=re(e,n);return t.top=X(r.top,t.top),t.right=Y(r.right,t.right),t.bottom=Y(r.bottom,t.bottom),t.left=X(r.left,t.left),t}),re(e,i));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ae(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function se(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,s=n.boundary,f=void 0===s?"clippingParents":s,c=n.rootBoundary,u=void 0===c?W:c,l=n.elementContext,d=void 0===l?A:l,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,g=void 0===v?0:v,y=ie("number"!=typeof g?g:ae(g,L)),b=d===A?"reference":A,w=e.rects.popper,x=e.elements[h?b:d],D=oe(a(x)?x:x.contextElement||p(e.elements.popper),f,u),k=r(e.elements.reference),M=z({reference:k,element:w,strategy:"absolute",placement:i}),P=ne(Object.assign({},w,M)),B=d===A?P:k,H={top:D.top-B.top+y.top,bottom:B.bottom-D.bottom+y.bottom,left:D.left-B.left+y.left,right:B.right-D.right+y.right},R=e.modifiersData.offset;if(d===A&&R){var T=R[i];Object.keys(H).forEach((function(e){var t=[E,j].indexOf(e)>=0?1:-1,n=[O,j].indexOf(e)>=0?"y":"x";H[e]+=T[n]*t}))}return H}function fe(e,t,n){return X(e,Y(t,n))}function ce(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function pe(e){return[O,E,j,D].some((function(t){return e[t]>=0}))}var ue=S({defaultModifiers:[_,F,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:V(t.placement),variation:I(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&c(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&c(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=H.reduce((function(e,n){return e[n]=function(e,t,n){var r=V(e),o=[D,O].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[D,E].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=V(v),y=f||(g===v||!m?[Z(v)]:function(e){if(V(e)===k)return[];var t=Z(e);return[ee(e),t,ee(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(V(n)===k?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?H:f,p=I(r),u=p?s?B:B.filter((function(e){return I(e)===p})):L,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=se(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[V(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,P=new Map,W=!0,A=b[0],R=0;R<b.length;R++){var T=b[R],C=V(T),q=I(T)===M,S=[O,j].indexOf(C)>=0,N=S?"width":"height",_=se(t,{placement:T,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),U=S?q?E:D:q?j:O;w[N]>x[N]&&(U=Z(U));var z=Z(U),F=[];if(i&&F.push(_[C]<=0),s&&F.push(_[U]<=0,_[z]<=0),F.every((function(e){return e}))){A=T,W=!1;break}P.set(T,F)}if(W)for(var X=function(e){var t=b.find((function(t){var n=P.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},Y=m?3:1;Y>0;Y--){if("break"===X(Y))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,v=void 0===m?0:m,g=se(t,{boundary:f,rootBoundary:c,padding:u,altBoundary:p}),y=V(t.placement),b=I(t.placement),w=!b,k=U(y),L="x"===k?"y":"x",P=t.modifiersData.popperOffsets,W=t.rects.reference,A=t.rects.popper,B="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,H={x:0,y:0};if(P){if(i||s){var R="y"===k?O:D,T="y"===k?j:E,C="y"===k?"height":"width",q=P[k],S=P[k]+g[R],N=P[k]-g[T],_=d?-A[C]/2:0,z=b===M?W[C]:A[C],F=b===M?-A[C]:-W[C],G=t.elements.arrow,J=d&&G?h(G):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=K[R],Z=K[T],$=fe(0,W[C],J[C]),ee=w?W[C]/2-_-$-Q-B:z-$-Q-B,te=w?-W[C]/2+_+$+Z+B:F+$+Z+B,ne=t.elements.arrow&&x(t.elements.arrow),re=ne?"y"===k?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][k]:0,ie=P[k]+ee-oe-re,ae=P[k]+te-oe;if(i){var ce=fe(d?Y(S,ie):S,q,d?X(N,ae):N);P[k]=ce,H[k]=ce-q}if(s){var pe="x"===k?O:D,ue="x"===k?j:E,le=P[L],de=le+g[pe],me=le-g[ue],he=fe(d?Y(de,ie):de,le,d?X(me,ae):me);P[L]=he,H[L]=he-le}}t.modifiersData[r]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=V(n.placement),f=U(s),c=[D,E].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ae(e,L))}(o.padding,n),u=h(i),l="y"===f?O:D,d="y"===f?j:E,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],v=a[f]-n.rects.reference[f],g=x(i),y=g?"y"===f?g.clientHeight||0:g.clientWidth||0:0,b=m/2-v/2,w=p[l],k=y-u[c]-p[d],M=y/2-u[c]/2+b,P=fe(w,M,k),W=f;n.modifiersData[r]=((t={})[W]=P,t.centerOffset=P-M,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&te(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=se(t,{elementContext:"reference"}),s=se(t,{altBoundary:!0}),f=ce(a,r),c=ce(s,o,i),p=pe(f),u=pe(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]})}}]);