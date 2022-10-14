(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[324,765],{5579:(t,r,n)=>{"use strict";n.d(r,{k:()=>o,K:()=>e});var e=function(){},o=function(){}},1432:(t,r,n)=>{var e=n(9751),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},9751:t=>{var r=/\s/;t.exports=function(t){for(var n=t.length;n--&&r.test(t.charAt(n)););return n}},9046:(t,r,n)=>{var e=n(71),o=n(5989),a=n(6705),i=Math.max,u=Math.min;t.exports=function(t,r,n){var s,f,c,d,l,p,v=0,h=!1,m=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(r){var n=s,e=f;return s=f=void 0,v=r,d=t.apply(e,n)}function y(t){return v=t,l=setTimeout(x,r),h?b(t):d}function w(t){var n=t-p;return void 0===p||n>=r||n<0||m&&t-v>=c}function x(){var t=o();if(w(t))return M(t);l=setTimeout(x,function(t){var n=r-(t-p);return m?u(n,c-(t-v)):n}(t))}function M(t){return l=void 0,g&&s?b(t):(s=f=void 0,d)}function O(){var t=o(),n=w(t);if(s=arguments,f=this,p=t,n){if(void 0===l)return y(p);if(m)return clearTimeout(l),l=setTimeout(x,r),b(p)}return void 0===l&&(l=setTimeout(x,r)),d}return r=a(r)||0,e(n)&&(h=!!n.leading,c=(m="maxWait"in n)?i(a(n.maxWait)||0,r):c,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==l&&clearTimeout(l),v=0,s=p=f=l=void 0},O.flush=function(){return void 0===l?d:M(o())},O}},5989:(t,r,n)=>{var e=n(4362);t.exports=function(){return e.Date.now()}},9792:(t,r,n)=>{var e=n(9046),o=n(71);t.exports=function(t,r,n){var a=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),e(t,r,{leading:a,maxWait:r,trailing:i})}},6705:(t,r,n)=>{var e=n(1432),o=n(71),a=n(4655),i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return NaN;if(o(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=o(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var n=u.test(t);return n||s.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}},7069:(t,r,n)=>{"use strict";n.d(r,{j:()=>Ft});var e=function(){return(e=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function o(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]])}return n}var a=n(5579),i=function(t,r,n){return Math.min(Math.max(n,t),r)},u=.001;function s(t){var r,n,e=t.duration,o=void 0===e?800:e,s=t.bounce,c=void 0===s?.25:s,d=t.velocity,l=void 0===d?0:d,p=t.mass,v=void 0===p?1:p;(0,a.K)(o<=1e4,"Spring duration must be 10 seconds or less");var h=1-c;h=i(.05,1,h),o=i(.01,10,o/1e3),h<1?(r=function(t){var r=t*h,n=r*o,e=r-l,a=f(t,h),i=Math.exp(-n);return u-e/a*i},n=function(t){var n=t*h*o,e=n*l+l,a=Math.pow(h,2)*Math.pow(t,2)*o,i=Math.exp(-n),s=f(Math.pow(t,2),h);return(-r(t)+u>0?-1:1)*((e-a)*i)/s}):(r=function(t){return Math.exp(-t*o)*((t-l)*o+1)-.001},n=function(t){return Math.exp(-t*o)*(o*o*(l-t))});var m=function(t,r,n){for(var e=n,o=1;o<12;o++)e-=t(e)/r(e);return e}(r,n,5/o);if(isNaN(m))return{stiffness:100,damping:10};var g=Math.pow(m,2)*v;return{stiffness:g,damping:2*h*Math.sqrt(v*g)}}function f(t,r){return t*Math.sqrt(1-r*r)}var c=["duration","bounce"],d=["stiffness","damping","mass"];function l(t,r){return r.some((function(r){return void 0!==t[r]}))}function p(t){var r=t.from,n=void 0===r?0:r,a=t.to,i=void 0===a?1:a,u=t.restSpeed,p=void 0===u?2:u,h=t.restDelta,m=o(t,["from","to","restSpeed","restDelta"]),g={done:!1,value:n},b=function(t){var r=e({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!l(t,d)&&l(t,c)){var n=s(t);(r=e(e(e({},r),n),{velocity:0,mass:1})).isResolvedFromDuration=!0}return r}(m),y=b.stiffness,w=b.damping,x=b.mass,M=b.velocity,O=b.isResolvedFromDuration,k=v,A=v;function N(){var t=M?-M/1e3:0,r=i-n,e=w/(2*Math.sqrt(y*x)),o=Math.sqrt(y/x)/1e3;if(null!=h||(h=Math.abs(i-n)<=1?.01:.4),e<1){var a=f(o,e);k=function(n){var u=Math.exp(-e*o*n);return i-u*((t+e*o*r)/a*Math.sin(a*n)+r*Math.cos(a*n))},A=function(n){var i=Math.exp(-e*o*n);return e*o*i*(Math.sin(a*n)*(t+e*o*r)/a+r*Math.cos(a*n))-i*(Math.cos(a*n)*(t+e*o*r)-a*r*Math.sin(a*n))}}else if(1===e)k=function(n){return i-Math.exp(-o*n)*(r+(t+o*r)*n)};else{var u=o*Math.sqrt(e*e-1);k=function(n){var a=Math.exp(-e*o*n),s=Math.min(u*n,300);return i-a*((t+e*o*r)*Math.sinh(s)+u*r*Math.cosh(s))/u}}}return N(),{next:function(t){var r=k(t);if(O)g.done=t>=m.duration;else{var n=1e3*A(t),e=Math.abs(n)<=p,o=Math.abs(i-r)<=h;g.done=e&&o}return g.value=g.done?i:r,g},flipTarget:function(){var t;M=-M,n=(t=[i,n])[0],i=t[1],N()}}}p.needsInterpolation=function(t,r){return"string"==typeof t||"string"==typeof r};var v=function(t){return 0},h=function(t,r,n){var e=r-t;return 0===e?1:(n-t)/e},m=function(t,r,n){return-n*t+n*r+t},g=function(t,r){return function(n){return Math.max(Math.min(n,r),t)}},b=function(t){return t%1?Number(t.toFixed(5)):t},y=/(-)?([\d]*\.?[\d])+/g,w=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,x=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function M(t){return"string"==typeof t}var O={test:function(t){return"number"==typeof t},parse:parseFloat,transform:function(t){return t}},k=e(e({},O),{transform:g(0,1)}),A=(e(e({},O),{default:1}),function(t,r){return function(n){return M(n)&&x.test(n)&&n.startsWith(t)||r&&Object.prototype.hasOwnProperty.call(n,r)}}),N=function(t,r,n){return function(e){var o;if(!M(e))return e;var a=e.match(y),i=a[0],u=a[1],s=a[2],f=a[3];return(o={})[t]=parseFloat(i),o[r]=parseFloat(u),o[n]=parseFloat(s),o.alpha=void 0!==f?parseFloat(f):1,o}},S=g(0,255),R=e(e({},O),{transform:function(t){return Math.round(S(t))}}),T={test:A("rgb","red"),parse:N("red","green","blue"),transform:function(t){var r=t.red,n=t.green,e=t.blue,o=t.alpha,a=void 0===o?1:o;return"rgba("+R.transform(r)+", "+R.transform(n)+", "+R.transform(e)+", "+b(k.transform(a))+")"}};var C={test:A("#"),parse:function(t){var r="",n="",e="",o="";return t.length>5?(r=t.substr(1,2),n=t.substr(3,2),e=t.substr(5,2),o=t.substr(7,2)):(r=t.substr(1,1),n=t.substr(2,1),e=t.substr(3,1),o=t.substr(4,1),r+=r,n+=n,e+=e,o+=o),{red:parseInt(r,16),green:parseInt(n,16),blue:parseInt(e,16),alpha:o?parseInt(o,16)/255:1}},transform:T.transform},L=function(t){return{test:function(r){return M(r)&&r.endsWith(t)&&1===r.split(" ").length},parse:parseFloat,transform:function(r){return""+r+t}}},j=(L("deg"),L("%")),F=(L("px"),L("vh"),L("vw"),e(e({},j),{parse:function(t){return j.parse(t)/100},transform:function(t){return j.transform(100*t)}}),{test:A("hsl","hue"),parse:N("hue","saturation","lightness"),transform:function(t){var r=t.hue,n=t.saturation,e=t.lightness,o=t.alpha,a=void 0===o?1:o;return"hsla("+Math.round(r)+", "+j.transform(b(n))+", "+j.transform(b(e))+", "+b(k.transform(a))+")"}}),I=function(t,r,n){var e=t*t,o=r*r;return Math.sqrt(Math.max(0,n*(o-e)+e))},E=[C,T,F],W=function(t){return E.find((function(r){return r.test(t)}))},P=function(t){return"'"+t+"' is not an animatable color. Use the equivalent color code instead."},B=function(t,r){var n=W(t),o=W(r);(0,a.k)(!!n,P(t)),(0,a.k)(!!o,P(r)),(0,a.k)(n.transform===o.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var i=n.parse(t),u=o.parse(r),s=e({},i),f=n===F?m:I;return function(t){for(var r in s)"alpha"!==r&&(s[r]=f(i[r],u[r],t));return s.alpha=m(i.alpha,u.alpha,t),n.transform(s)}},H=function(t){return T.test(t)||C.test(t)||F.test(t)},$=function(t){return T.test(t)?T.parse(t):F.test(t)?F.parse(t):C.parse(t)},D=function(t){return M(t)?t:t.hasOwnProperty("red")?T.transform(t):F.transform(t)},q="${c}",X="${n}";function Y(t){var r=[],n=0,e=t.match(w);e&&(n=e.length,t=t.replace(w,q),r.push.apply(r,e.map($)));var o=t.match(y);return o&&(t=t.replace(y,X),r.push.apply(r,o.map(O.parse))),{values:r,numColors:n,tokenised:t}}function Z(t){return Y(t).values}function V(t){var r=Y(t),n=r.values,e=r.numColors,o=r.tokenised,a=n.length;return function(t){for(var r=o,n=0;n<a;n++)r=r.replace(n<e?q:X,n<e?D(t[n]):b(t[n]));return r}}var z=function(t){return"number"==typeof t?0:t};var G={test:function(t){var r,n,e,o;return isNaN(t)&&M(t)&&(null!==(n=null===(r=t.match(y))||void 0===r?void 0:r.length)&&void 0!==n?n:0)+(null!==(o=null===(e=t.match(w))||void 0===e?void 0:e.length)&&void 0!==o?o:0)>0},parse:Z,createTransformer:V,getAnimatableNone:function(t){var r=Z(t);return V(t)(r.map(z))}},U=function(t,r){return function(n){return r(t(n))}},_=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.reduce(U)};function K(t,r){return"number"==typeof t?function(n){return m(t,r,n)}:H(t)?B(t,r):rt(t,r)}var J=function(t,r){var n=function(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;var e=Array(t),o=0;for(r=0;r<n;r++)for(var a=arguments[r],i=0,u=a.length;i<u;i++,o++)e[o]=a[i];return e}(t),e=n.length,o=t.map((function(t,n){return K(t,r[n])}));return function(t){for(var r=0;r<e;r++)n[r]=o[r](t);return n}},Q=function(t,r){var n=e(e({},t),r),o={};for(var a in n)void 0!==t[a]&&void 0!==r[a]&&(o[a]=K(t[a],r[a]));return function(t){for(var r in o)n[r]=o[r](t);return n}};function tt(t){for(var r=G.parse(t),n=r.length,e=0,o=0,a=0,i=0;i<n;i++)e||"number"==typeof r[i]?e++:void 0!==r[i].hue?a++:o++;return{parsed:r,numNumbers:e,numRGB:o,numHSL:a}}var rt=function(t,r){var n=G.createTransformer(r),e=tt(t),o=tt(r);return(0,a.k)(e.numHSL===o.numHSL&&e.numRGB===o.numRGB&&e.numNumbers>=o.numNumbers,"Complex values '"+t+"' and '"+r+"' too different to mix. Ensure all colors are of the same type."),_(J(e.parsed,o.parsed),n)},nt=function(t,r){return function(n){return m(t,r,n)}};function et(t,r,n){for(var e,o=[],a=n||("number"==typeof(e=t[0])?nt:"string"==typeof e?H(e)?B:rt:Array.isArray(e)?J:"object"==typeof e?Q:void 0),i=t.length-1,u=0;u<i;u++){var s=a(t[u],t[u+1]);if(r){var f=Array.isArray(r)?r[u]:r;s=_(f,s)}o.push(s)}return o}function ot(t,r,n){var e=void 0===n?{}:n,o=e.clamp,u=void 0===o||o,s=e.ease,f=e.mixer,c=t.length;(0,a.k)(c===r.length,"Both input and output ranges must be the same length"),(0,a.k)(!s||!Array.isArray(s)||s.length===c-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[c-1]&&(t=[].concat(t),r=[].concat(r),t.reverse(),r.reverse());var d=et(r,s,f),l=2===c?function(t,r){var n=t[0],e=t[1],o=r[0];return function(t){return o(h(n,e,t))}}(t,d):function(t,r){var n=t.length,e=n-1;return function(o){var a=0,i=!1;if(o<=t[0]?i=!0:o>=t[e]&&(a=e-1,i=!0),!i){for(var u=1;u<n&&!(t[u]>o||u===e);u++);a=u-1}var s=h(t[a],t[a+1],o);return r[a](s)}}(t,d);return u?function(r){return l(i(t[0],t[c-1],r))}:l}var at,it=function(t){return function(r){return 1-t(1-r)}},ut=function(t){return function(r){return r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2}},st=function(t){return function(r){return r*r*((t+1)*r-t)}},ft=(at=2,function(t){return Math.pow(t,at)}),ct=(it(ft),ut(ft)),dt=(ut(it((function(t){return 1-Math.sin(Math.acos(t))}))),st(1.525)),lt=(it(dt),ut(dt),function(t){var r=st(t)}(1.525),function(t){if(1===t||0===t)return t;var r=t*t;return t<.36363636363636365?7.5625*r:t<.7272727272727273?9.075*r-9.9*t+3.4:t<.9?12.066481994459833*r-19.63545706371191*t+8.898060941828255:10.8*t*t-20.52*t+10.72});it(lt);function pt(t,r){return t.map((function(){return r||ct})).splice(0,t.length-1)}function vt(t){var r=t.from,n=void 0===r?0:r,e=t.to,o=void 0===e?1:e,a=t.ease,i=t.offset,u=t.duration,s=void 0===u?300:u,f={done:!1,value:n},c=Array.isArray(o)?o:[n,o],d=function(t,r){return t.map((function(t){return t*r}))}(i&&i.length===c.length?i:function(t){var r=t.length;return t.map((function(t,n){return 0!==n?n/(r-1):0}))}(c),s);function l(){return ot(d,c,{ease:Array.isArray(a)?a:pt(c,a)})}var p=l();return{next:function(t){return f.value=p(t),f.done=t>=s,f},flipTarget:function(){c.reverse(),p=l()}}}var ht={keyframes:vt,spring:p,decay:function(t){var r=t.velocity,n=void 0===r?0:r,e=t.from,o=void 0===e?0:e,a=t.power,i=void 0===a?.8:a,u=t.timeConstant,s=void 0===u?350:u,f=t.restDelta,c=void 0===f?.5:f,d=t.modifyTarget,l={done:!1,value:o},p=i*n,v=o+p,h=void 0===d?v:d(v);return h!==v&&(p=h-o),{next:function(t){var r=-p*Math.exp(-t/s);return l.done=!(r>c||r<-c),l.value=l.done?h:h+r,l},flipTarget:function(){}}}};var mt=1/60*1e3,gt="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()},bt="undefined"!=typeof window?function(t){return window.requestAnimationFrame(t)}:function(t){return setTimeout((function(){return t(gt())}),mt)};var yt=!0,wt=!1,xt=!1,Mt={delta:0,timestamp:0},Ot=["read","update","preRender","render","postRender"],kt=Ot.reduce((function(t,r){return t[r]=function(t){var r=[],n=[],e=0,o=!1,a=new WeakSet,i={schedule:function(t,i,u){void 0===i&&(i=!1),void 0===u&&(u=!1);var s=u&&o,f=s?r:n;return i&&a.add(t),-1===f.indexOf(t)&&(f.push(t),s&&o&&(e=r.length)),t},cancel:function(t){var r=n.indexOf(t);-1!==r&&n.splice(r,1),a.delete(t)},process:function(u){var s;if(o=!0,r=(s=[n,r])[0],(n=s[1]).length=0,e=r.length)for(var f=0;f<e;f++){var c=r[f];c(u),a.has(c)&&(i.schedule(c),t())}o=!1}};return i}((function(){return wt=!0})),t}),{}),At=Ot.reduce((function(t,r){var n=kt[r];return t[r]=function(t,r,e){return void 0===r&&(r=!1),void 0===e&&(e=!1),wt||Tt(),n.schedule(t,r,e)},t}),{}),Nt=Ot.reduce((function(t,r){return t[r]=kt[r].cancel,t}),{}),St=function(t){return kt[t].process(Mt)},Rt=function(t){wt=!1,Mt.delta=yt?mt:Math.max(Math.min(t-Mt.timestamp,40),1),Mt.timestamp=t,xt=!0,Ot.forEach(St),xt=!1,wt&&(yt=!1,bt(Rt))},Tt=function(){wt=!0,yt=!0,xt||bt(Rt)};const Ct=At;function Lt(t,r,n){return void 0===n&&(n=0),t-r-n}var jt=function(t){var r=function(r){var n=r.delta;return t(n)};return{start:function(){return Ct.update(r,!0)},stop:function(){return Nt.update(r)}}};function Ft(t){var r,n,a,i,u,s=t.from,f=t.autoplay,c=void 0===f||f,d=t.driver,l=void 0===d?jt:d,v=t.elapsed,h=void 0===v?0:v,m=t.repeat,g=void 0===m?0:m,b=t.repeatType,y=void 0===b?"loop":b,w=t.repeatDelay,x=void 0===w?0:w,M=t.onPlay,O=t.onStop,k=t.onComplete,A=t.onRepeat,N=t.onUpdate,S=o(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),R=S.to,T=0,C=S.duration,L=!1,j=!0,F=function(t){if(Array.isArray(t.to))return vt;if(ht[t.type])return ht[t.type];var r=new Set(Object.keys(t));return r.has("ease")||r.has("duration")&&!r.has("dampingRatio")?vt:r.has("dampingRatio")||r.has("stiffness")||r.has("mass")||r.has("damping")||r.has("restSpeed")||r.has("restDelta")?p:vt}(S);(null===(n=(r=F).needsInterpolation)||void 0===n?void 0:n.call(r,s,R))&&(u=ot([0,100],[s,R],{clamp:!1}),s=0,R=100);var I=F(e(e({},S),{from:s,to:R}));function E(){T++,"reverse"===y?h=function(t,r,n,e){return void 0===n&&(n=0),void 0===e&&(e=!0),e?Lt(r+-t,r,n):r-(t-r)+n}(h,C,x,j=T%2==0):(h=Lt(h,C,x),"mirror"===y&&I.flipTarget()),L=!1,A&&A()}function W(t){if(j||(t=-t),h+=t,!L){var r=I.next(Math.max(0,h));i=r.value,u&&(i=u(i)),L=j?r.done:h<=0}null==N||N(i),L&&(0===T&&(null!=C||(C=h)),T<g?function(t,r,n,e){return e?t>=r+n:t<=-n}(h,C,x,j)&&E():(a.stop(),k&&k()))}return c&&(null==M||M(),(a=l(W)).start()),{stop:function(){null==O||O(),a.stop()}}}},9546:(t,r,n)=>{"use strict";n.d(r,{ZP:()=>Lt});var e=function(){return(e=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function o(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]])}return n}var a=n(5579),i=0,u="undefined"!=typeof window&&void 0!==window.requestAnimationFrame?function(t){return window.requestAnimationFrame(t)}:function(t){var r=Date.now(),n=Math.max(0,16.7-(r-i));i=r+n,setTimeout((function(){return t(i)}),n)},s=1/60*1e3,f=!0,c=!1,d=!1,l={delta:0,timestamp:0},p=["read","update","preRender","render","postRender"],v=function(t){return c=t},h=p.reduce((function(t,r){return t[r]=function(t){var r=[],n=[],e=0,o=!1,i=0,u=new WeakSet,s=new WeakSet,f={cancel:function(t){var r=n.indexOf(t);u.add(t),-1!==r&&n.splice(r,1)},process:function(a){var c,d;if(o=!0,r=(c=[n,r])[0],(n=c[1]).length=0,e=r.length)for(i=0;i<e;i++)(d=r[i])(a),!0!==s.has(d)||u.has(d)||(f.schedule(d),t(!0));o=!1},schedule:function(t,i,f){void 0===i&&(i=!1),void 0===f&&(f=!1),(0,a.k)("function"==typeof t,"Argument must be a function");var c=f&&o,d=c?r:n;u.delete(t),i&&s.add(t),-1===d.indexOf(t)&&(d.push(t),c&&(e=r.length))}};return f}(v),t}),{}),m=p.reduce((function(t,r){var n=h[r];return t[r]=function(t,r,e){return void 0===r&&(r=!1),void 0===e&&(e=!1),c||y(),n.schedule(t,r,e),t},t}),{}),g=function(t){return h[t].process(l)},b=function(t){c=!1,l.delta=f?s:Math.max(Math.min(t-l.timestamp,40),1),f||(s=l.delta),l.timestamp=t,d=!0,p.forEach(g),d=!1,c&&(f=!1,u(b))},y=function(){c=!0,f=!0,d||u(b)};const w=m;var x=function(){return(x=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};var M=function(t,r){return function(n){return Math.max(Math.min(n,r),t)}},O=function(t){return t%1?Number(t.toFixed(5)):t},k=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,A={test:function(t){return"number"==typeof t},parse:parseFloat,transform:function(t){return t}},N=x(x({},A),{transform:M(0,1)}),S=x(x({},A),{default:1}),R=function(t){return{test:function(r){return"string"==typeof r&&r.endsWith(t)&&1===r.split(" ").length},parse:parseFloat,transform:function(r){return""+r+t}}},T=R("deg"),C=R("%"),L=R("px"),j=(R("vh"),R("vw"),x(x({},C),{parse:function(t){return C.parse(t)/100},transform:function(t){return C.transform(100*t)}})),F=M(0,255),I=function(t){return void 0!==t.red},E=function(t){return void 0!==t.hue};var W=function(t){return function(r){if("string"!=typeof r)return r;for(var n={},e=function(t){return t.substring(t.indexOf("(")+1,t.lastIndexOf(")"))}(r).replace(/(,|\/)/g," ").split(/ \s*/),o=0;o<4;o++)n[t[o]]=void 0!==e[o]?parseFloat(e[o]):1;return n}},P=x(x({},A),{transform:function(t){return Math.round(F(t))}});function B(t,r){return t.startsWith(r)&&k.test(t)}var H,$={test:function(t){return"string"==typeof t?B(t,"rgb"):I(t)},parse:W(["red","green","blue","alpha"]),transform:function(t){var r=t.red,n=t.green,e=t.blue,o=t.alpha,a=void 0===o?1:o;return function(t){var r=t.red,n=t.green,e=t.blue,o=t.alpha;return"rgba("+r+", "+n+", "+e+", "+(void 0===o?1:o)+")"}({red:P.transform(r),green:P.transform(n),blue:P.transform(e),alpha:O(N.transform(a))})}},D={test:function(t){return"string"==typeof t?B(t,"hsl"):E(t)},parse:W(["hue","saturation","lightness","alpha"]),transform:function(t){var r=t.hue,n=t.saturation,e=t.lightness,o=t.alpha,a=void 0===o?1:o;return function(t){var r=t.hue,n=t.saturation,e=t.lightness,o=t.alpha;return"hsla("+r+", "+n+", "+e+", "+(void 0===o?1:o)+")"}({hue:Math.round(r),saturation:C.transform(O(n)),lightness:C.transform(O(e)),alpha:O(N.transform(a))})}},q=x(x({},$),{test:function(t){return"string"==typeof t&&B(t,"#")},parse:function(t){var r="",n="",e="";return t.length>4?(r=t.substr(1,2),n=t.substr(3,2),e=t.substr(5,2)):(r=t.substr(1,1),n=t.substr(2,1),e=t.substr(3,1),r+=r,n+=n,e+=e),{red:parseInt(r,16),green:parseInt(n,16),blue:parseInt(e,16),alpha:1}}}),X={test:function(t){return"string"==typeof t&&k.test(t)||I(t)||E(t)},parse:function(t){return $.test(t)?$.parse(t):D.test(t)?D.parse(t):q.test(t)?q.parse(t):t},transform:function(t){return I(t)?$.transform(t):E(t)?D.transform(t):t}},Y=function(t){var r=t.onRead,n=t.onRender,e=t.uncachedValues,a=void 0===e?new Set:e,i=t.useCache,u=void 0===i||i;return function(t){void 0===t&&(t={});var e=o(t,[]),i={},s=[],f=!1;function c(t,r){t.startsWith("--")&&(e.hasCSSVariable=!0);var n=i[t];i[t]=r,i[t]!==n&&(-1===s.indexOf(t)&&s.push(t),f||(f=!0,w.render(d.render)))}var d={get:function(t,n){return void 0===n&&(n=!1),!n&&u&&!a.has(t)&&void 0!==i[t]?i[t]:r(t,e)},set:function(t,r){if("string"==typeof t)c(t,r);else for(var n in t)c(n,t[n]);return this},render:function(t){return void 0===t&&(t=!1),(f||!0===t)&&(n(i,e,s),f=!1,s.length=0),this}};return d}},Z=/([a-z])([A-Z])/g,V=function(t){return t.replace(Z,"$1-$2").toLowerCase()},z=new Map,G=new Map,U=["Webkit","Moz","O","ms",""],_=U.length,K="undefined"!=typeof document,J=function(t,r){return G.set(t,V(r))},Q=function(t,r){void 0===r&&(r=!1);var n=r?G:z;return n.has(t)||(K?function(t){H=H||document.createElement("div");for(var r=0;r<_;r++){var n=U[r],e=""===n,o=e?t:n+t.charAt(0).toUpperCase()+t.slice(1);if(o in H.style||e){if(e&&"clipPath"===t&&G.has(t))return;z.set(t,o),J(t,(e?"":"-")+V(o))}}}(t):function(t){J(t,t)}(t)),n.get(t)||t},tt=["","X","Y","Z"],rt=["translate","scale","rotate","skew","transformPerspective"].reduce((function(t,r){return tt.reduce((function(t,n){return t.push(r+n),t}),t)}),["x","y","z"]),nt=rt.reduce((function(t,r){return t[r]=!0,t}),{});function et(t){return!0===nt[t]}function ot(t,r){return rt.indexOf(t)-rt.indexOf(r)}var at=new Set(["originX","originY","originZ"]);function it(t){return at.has(t)}var ut=e(e({},A),{transform:Math.round}),st={color:X,backgroundColor:X,outlineColor:X,fill:X,stroke:X,borderColor:X,borderTopColor:X,borderRightColor:X,borderBottomColor:X,borderLeftColor:X,borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,size:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,rotate:T,rotateX:T,rotateY:T,rotateZ:T,scale:S,scaleX:S,scaleY:S,scaleZ:S,skew:T,skewX:T,skewY:T,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,opacity:N,originX:j,originY:j,originZ:L,zIndex:ut,fillOpacity:N,strokeOpacity:N,numOctaves:ut},ft=function(t){return st[t]},ct=function(t,r){return r&&"number"==typeof t?r.transform(t):t},dt="scrollLeft",lt="scrollTop",pt=new Set([dt,lt]),vt=new Set([dt,lt,"transform"]),ht={x:"translateX",y:"translateY",z:"translateZ"};function mt(t){return"function"==typeof t}function gt(t,r,n,e,o,a,i,u){void 0===r&&(r=!0),void 0===n&&(n={}),void 0===e&&(e={}),void 0===o&&(o={}),void 0===a&&(a=[]),void 0===i&&(i=!1),void 0===u&&(u=!0);var s=!0,f=!1,c=!1;for(var d in t){var l=t[d],p=ft(d),v=ct(l,p);et(d)?(f=!0,e[d]=v,a.push(d),s&&(p.default&&l!==p.default||!p.default&&0!==l)&&(s=!1)):it(d)?(o[d]=v,c=!0):vt.has(d)&&mt(v)||(n[Q(d,i)]=v)}return(f||"function"==typeof t.transform)&&(n.transform=function(t,r,n,e,o,a){void 0===a&&(a=!0);var i="",u=!1;n.sort(ot);for(var s=n.length,f=0;f<s;f++){var c=n[f];i+=(ht[c]||c)+"("+r[c]+") ",u="z"===c||u}return!u&&o?i+="translateZ(0)":i=i.trim(),mt(t.transform)?i=t.transform(r,e?"":i):a&&e&&(i="none"),i}(t,e,a,s,r,u)),c&&(n.transformOrigin=(o.originX||"50%")+" "+(o.originY||"50%")+" "+(o.originZ||0)),n}function bt(t){var r=void 0===t?{}:t,n=r.enableHardwareAcceleration,e=void 0===n||n,o=r.isDashCase,a=void 0===o||o,i=r.allowTransformNone,u=void 0===i||i,s={},f={},c={},d=[];return function(t){return d.length=0,gt(t,e,s,f,c,d,a,u),s}}var yt=Y({onRead:function(t,r){var n=r.element,e=r.preparseOutput,o=ft(t);if(et(t))return o&&o.default||0;if(pt.has(t))return n[t];var a=window.getComputedStyle(n,null).getPropertyValue(Q(t,!0))||0;return e&&o&&o.test(a)&&o.parse?o.parse(a):a},onRender:function(t,r,n){var e=r.element,o=r.buildStyles,a=r.hasCSSVariable;if(Object.assign(e.style,o(t)),a)for(var i=n.length,u=0;u<i;u++){var s=n[u];s.startsWith("--")&&e.style.setProperty(s,t[s])}-1!==n.indexOf(dt)&&(e.scrollLeft=t.scrollLeft),-1!==n.indexOf(lt)&&(e.scrollTop=t.scrollTop)},uncachedValues:pt});var wt=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues"]),xt=function(t,r){return L.transform(t*r)},Mt={x:0,y:0,width:0,height:0};function Ot(t,r,n){return"string"==typeof t?t:L.transform(r+n*t)}var kt={enableHardwareAcceleration:!1,isDashCase:!1};function At(t,r,n,e,a,i){void 0===r&&(r=Mt),void 0===e&&(e=bt(kt)),void 0===a&&(a={style:{}}),void 0===i&&(i=!0);var u=t.attrX,s=t.attrY,f=t.originX,c=t.originY,d=t.pathLength,l=t.pathSpacing,p=void 0===l?1:l,v=t.pathOffset,h=void 0===v?0:v,m=e(o(t,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]));for(var g in m){if("transform"===g)a.style.transform=m[g];else a[i&&!wt.has(g)?V(g):g]=m[g]}return(void 0!==f||void 0!==c||m.transform)&&(a.style.transformOrigin=function(t,r,n){return Ot(r,t.x,t.width)+" "+Ot(n,t.y,t.height)}(r,void 0!==f?f:.5,void 0!==c?c:.5)),void 0!==u&&(a.x=u),void 0!==s&&(a.y=s),void 0!==n&&void 0!==d&&(a[i?"stroke-dashoffset":"strokeDashoffset"]=xt(-h,n),a[i?"stroke-dasharray":"strokeDasharray"]=xt(d,n)+" "+xt(p,n)),a}function Nt(t,r,n){void 0===n&&(n=!0);var e={style:{}},o=bt(kt);return function(a){return At(a,t,r,o,e,n)}}var St=Y({onRead:function(t,r){var n=r.element;if(et(t=wt.has(t)?t:V(t))){var e=ft(t);return e&&e.default||0}return n.getAttribute(t)},onRender:function(t,r){var n=r.element,e=(0,r.buildAttrs)(t);for(var o in e)"style"===o?Object.assign(n.style,e.style):n.setAttribute(o,e[o])}}),Rt=Y({useCache:!1,onRead:function(t){return"scrollTop"===t?window.pageYOffset:window.pageXOffset},onRender:function(t){var r=t.scrollTop,n=void 0===r?0:r,e=t.scrollLeft,o=void 0===e?0:e;return window.scrollTo(o,n)}}),Tt=new WeakMap,Ct=function(t,r){var n,i,u,s;return t===window?n=Rt(t):!function(t){return t instanceof HTMLElement||"function"==typeof t.click}(t)?function(t){return t instanceof SVGElement||"ownerSVGElement"in t}(t)&&(u=function(t){try{return function(t){return"function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}(t)}catch(t){return{x:0,y:0,width:0,height:0}}}(i=t),s=function(t){return"path"===t.tagName}(i)&&i.getTotalLength?i.getTotalLength():void 0,n=St({element:i,buildAttrs:Nt(u,s)})):n=function(t,r){void 0===r&&(r={});var n=r.enableHardwareAcceleration,a=r.allowTransformNone,i=o(r,["enableHardwareAcceleration","allowTransformNone"]);return yt(e({element:t,buildStyles:bt({enableHardwareAcceleration:n,allowTransformNone:a}),preparseOutput:!0},i))}(t,r),(0,a.k)(void 0!==n,"No valid node provided. Node must be HTMLElement, SVGElement or window."),Tt.set(t,n),n};const Lt=function(t,r){return function(t,r){return Tt.has(t)?Tt.get(t):Ct(t,r)}("string"==typeof t?document.querySelector(t):t,r)}},3555:function(t){t.exports=function(){"use strict";var t=function(t){var r=t.props,n=t.data,e=t.parent,o=function t(r){return Array.isArray(r)?(n=r=>t(r),r.reduce(((t,r)=>t.concat(n(r))),[])):null!==(e=r)&&"object"==typeof e?function(t){let r=[];for(const n in t)t[n]&&r.push(n);return r}(r):"string"==typeof r&&r?[r]:[];var n,e}([n.staticClass,n.class]);if(o){var a,i,u,s=(i=(a=r).body,u=a.document,i?window.document.body:!!u&&window.document.documentElement);if(s){var f=function(t,r){if(!r.length)return;const{classList:n}=t;return r.filter((t=>{if(!n.contains(t))return n.add(t),!0}))}(s,o),c=function(){!function(t,r){if(!r||!r.length)return;let n;for(;n=r.shift();)t.classList.remove(n);t.classList.length||t.removeAttribute("class")}(s,f)};e.$once("hook:beforeUpdate",c),e.$once("hook:destroyed",c)}}},r=Object.prototype.hasOwnProperty,n=function(t,r,n){var e="&"===r[0],o="~"===(r=e?r.slice(1):r)[0],a="!"===(r=o?r.slice(1):r)[0];return{o:t,t:r=a?r.slice(1):r,i:n,u:{once:o,capture:a,passive:e}}},e=function(t){var e,o,a,i=t.props,u=t.listeners,s=t.parent,f=function(t,e){var o,a,i=[];for(var u in e)if(o=e,a=u,r.call(o,a)){var s=e[u],f=n(t,u,s);f.o.addEventListener(f.t,f.i,f.u),i.push(f)}return i}((o=(e=i).body,a=e.document,o?window.document.body:a?window.document:window),u),c=function(){!function(t){for(var r;r=t.shift();)r.o.removeEventListener(r.t,r.i,r.u)}(f)};s.$once("hook:beforeUpdate",c),s.$once("hook:destroyed",c)},o=function(r){e(r),t(r)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(t,r){return r.parent._isMounted?o(r):r.parent.$once("hook:mounted",(function(){o(r)})),r.slots().default}}}()},6765:(t,r,n)=>{"use strict";n.d(r,{Vi:()=>T,l7:()=>L});var e={grad:.9,turn:360,rad:360/(2*Math.PI)},o=function(t){return"string"==typeof t?t.length>0:"number"==typeof t},a=function(t,r,n){return void 0===r&&(r=0),void 0===n&&(n=Math.pow(10,r)),Math.round(n*t)/n+0},i=function(t,r,n){return void 0===r&&(r=0),void 0===n&&(n=1),t>n?n:t>r?t:r},u=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},s=function(t){return{r:i(t.r,0,255),g:i(t.g,0,255),b:i(t.b,0,255),a:i(t.a)}},f=function(t){return{r:a(t.r),g:a(t.g),b:a(t.b),a:a(t.a,3)}},c=/^#([0-9a-f]{3,8})$/i,d=function(t){var r=t.toString(16);return r.length<2?"0"+r:r},l=function(t){var r=t.r,n=t.g,e=t.b,o=t.a,a=Math.max(r,n,e),i=a-Math.min(r,n,e),u=i?a===r?(n-e)/i:a===n?2+(e-r)/i:4+(r-n)/i:0;return{h:60*(u<0?u+6:u),s:a?i/a*100:0,v:a/255*100,a:o}},p=function(t){var r=t.h,n=t.s,e=t.v,o=t.a;r=r/360*6,n/=100,e/=100;var a=Math.floor(r),i=e*(1-n),u=e*(1-(r-a)*n),s=e*(1-(1-r+a)*n),f=a%6;return{r:255*[e,u,i,i,s,e][f],g:255*[s,e,e,u,i,i][f],b:255*[i,i,s,e,e,u][f],a:o}},v=function(t){return{h:u(t.h),s:i(t.s,0,100),l:i(t.l,0,100),a:i(t.a)}},h=function(t){return{h:a(t.h),s:a(t.s),l:a(t.l),a:a(t.a,3)}},m=function(t){return p((n=(r=t).s,{h:r.h,s:(n*=((e=r.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:r.a}));var r,n,e},g=function(t){return{h:(r=l(t)).h,s:(o=(200-(n=r.s))*(e=r.v)/100)>0&&o<200?n*e/100/(o<=100?o:200-o)*100:0,l:o/2,a:r.a};var r,n,e,o},b=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,w=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,x=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,M={string:[[function(t){var r=c.exec(t);return r?(t=r[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:4===t.length?a(parseInt(t[3]+t[3],16)/255,2):1}:6===t.length||8===t.length?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:8===t.length?a(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var r=w.exec(t)||x.exec(t);return r?r[2]!==r[4]||r[4]!==r[6]?null:s({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):null},"rgb"],[function(t){var r=b.exec(t)||y.exec(t);if(!r)return null;var n,o,a=v({h:(n=r[1],o=r[2],void 0===o&&(o="deg"),Number(n)*(e[o]||1)),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)});return m(a)},"hsl"]],object:[[function(t){var r=t.r,n=t.g,e=t.b,a=t.a,i=void 0===a?1:a;return o(r)&&o(n)&&o(e)?s({r:Number(r),g:Number(n),b:Number(e),a:Number(i)}):null},"rgb"],[function(t){var r=t.h,n=t.s,e=t.l,a=t.a,i=void 0===a?1:a;if(!o(r)||!o(n)||!o(e))return null;var u=v({h:Number(r),s:Number(n),l:Number(e),a:Number(i)});return m(u)},"hsl"],[function(t){var r=t.h,n=t.s,e=t.v,a=t.a,s=void 0===a?1:a;if(!o(r)||!o(n)||!o(e))return null;var f=function(t){return{h:u(t.h),s:i(t.s,0,100),v:i(t.v,0,100),a:i(t.a)}}({h:Number(r),s:Number(n),v:Number(e),a:Number(s)});return p(f)},"hsv"]]},O=function(t,r){for(var n=0;n<r.length;n++){var e=r[n][0](t);if(e)return[e,r[n][1]]}return[null,void 0]},k=function(t){return"string"==typeof t?O(t.trim(),M.string):"object"==typeof t&&null!==t?O(t,M.object):[null,void 0]},A=function(t,r){var n=g(t);return{h:n.h,s:i(n.s+100*r,0,100),l:n.l,a:n.a}},N=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},S=function(t,r){var n=g(t);return{h:n.h,s:n.s,l:i(n.l+100*r,0,100),a:n.a}},R=function(){function t(t){this.parsed=k(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return null!==this.parsed},t.prototype.brightness=function(){return a(N(this.rgba),2)},t.prototype.isDark=function(){return N(this.rgba)<.5},t.prototype.isLight=function(){return N(this.rgba)>=.5},t.prototype.toHex=function(){return r=(t=f(this.rgba)).r,n=t.g,e=t.b,i=(o=t.a)<1?d(a(255*o)):"","#"+d(r)+d(n)+d(e)+i;var t,r,n,e,o,i},t.prototype.toRgb=function(){return f(this.rgba)},t.prototype.toRgbString=function(){return r=(t=f(this.rgba)).r,n=t.g,e=t.b,(o=t.a)<1?"rgba("+r+", "+n+", "+e+", "+o+")":"rgb("+r+", "+n+", "+e+")";var t,r,n,e,o},t.prototype.toHsl=function(){return h(g(this.rgba))},t.prototype.toHslString=function(){return r=(t=h(g(this.rgba))).h,n=t.s,e=t.l,(o=t.a)<1?"hsla("+r+", "+n+"%, "+e+"%, "+o+")":"hsl("+r+", "+n+"%, "+e+"%)";var t,r,n,e,o},t.prototype.toHsv=function(){return t=l(this.rgba),{h:a(t.h),s:a(t.s),v:a(t.v),a:a(t.a,3)};var t},t.prototype.invert=function(){return T({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},t.prototype.saturate=function(t){return void 0===t&&(t=.1),T(A(this.rgba,t))},t.prototype.desaturate=function(t){return void 0===t&&(t=.1),T(A(this.rgba,-t))},t.prototype.grayscale=function(){return T(A(this.rgba,-1))},t.prototype.lighten=function(t){return void 0===t&&(t=.1),T(S(this.rgba,t))},t.prototype.darken=function(t){return void 0===t&&(t=.1),T(S(this.rgba,-t))},t.prototype.rotate=function(t){return void 0===t&&(t=15),this.hue(this.hue()+t)},t.prototype.alpha=function(t){return"number"==typeof t?T({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):a(this.rgba.a,3);var r},t.prototype.hue=function(t){var r=g(this.rgba);return"number"==typeof t?T({h:t,s:r.s,l:r.l,a:r.a}):a(r.h)},t.prototype.isEqual=function(t){return this.toHex()===T(t).toHex()},t}(),T=function(t){return t instanceof R?t:new R(t)},C=[],L=function(t){t.forEach((function(t){C.indexOf(t)<0&&(t(R,M),C.push(t))}))}},241:(t,r,n)=>{"use strict";n.d(r,{Z:()=>a});var e=function(t){var r=t/255;return r<.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},o=function(t){return.2126*e(t.r)+.7152*e(t.g)+.0722*e(t.b)};function a(t){t.prototype.luminance=function(){return t=o(this.rgba),void 0===(r=2)&&(r=0),void 0===n&&(n=Math.pow(10,r)),Math.round(n*t)/n+0;var t,r,n},t.prototype.contrast=function(r){void 0===r&&(r="#FFF");var n,e,a,i,u,s,f,c=r instanceof t?r:new t(r);return i=this.rgba,u=c.toRgb(),n=(s=o(i))>(f=o(u))?(s+.05)/(f+.05):(f+.05)/(s+.05),void 0===(e=2)&&(e=0),void 0===a&&(a=Math.pow(10,e)),Math.floor(a*n)/a+0},t.prototype.isReadable=function(t,r){return void 0===t&&(t="#FFF"),void 0===r&&(r={}),this.contrast(t)>=(i=void 0===(a=(n=r).size)?"normal":a,"AAA"===(o=void 0===(e=n.level)?"AA":e)&&"normal"===i?7:"AA"===o&&"large"===i?3:4.5);var n,e,o,a,i}}}}]);