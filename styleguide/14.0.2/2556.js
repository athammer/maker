(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[2556],{71432:(t,r,n)=>{var e=n(19751),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},19751:t=>{var r=/\s/;t.exports=function(t){for(var n=t.length;n--&&r.test(t.charAt(n)););return n}},50569:(t,r,n)=>{var e=n(70071),o=n(55989),i=n(56705),a=Math.max,u=Math.min;t.exports=function(t,r,n){var s,c,f,l,p,d,v=0,h=!1,b=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(r){var n=s,e=c;return s=c=void 0,v=r,l=t.apply(e,n)}function m(t){return v=t,p=setTimeout(x,r),h?y(t):l}function w(t){var n=t-d;return void 0===d||n>=r||n<0||b&&t-v>=f}function x(){var t=o();if(w(t))return N(t);p=setTimeout(x,function(t){var n=r-(t-d);return b?u(n,f-(t-v)):n}(t))}function N(t){return p=void 0,g&&s?y(t):(s=c=void 0,l)}function O(){var t=o(),n=w(t);if(s=arguments,c=this,d=t,n){if(void 0===p)return m(d);if(b)return clearTimeout(p),p=setTimeout(x,r),y(d)}return void 0===p&&(p=setTimeout(x,r)),l}return r=i(r)||0,e(n)&&(h=!!n.leading,f=(b="maxWait"in n)?a(i(n.maxWait)||0,r):f,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==p&&clearTimeout(p),v=0,s=d=c=p=void 0},O.flush=function(){return void 0===p?l:N(o())},O}},55989:(t,r,n)=>{var e=n(44362);t.exports=function(){return e.Date.now()}},69792:(t,r,n)=>{var e=n(50569),o=n(70071);t.exports=function(t,r,n){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),e(t,r,{leading:i,maxWait:r,trailing:a})}},56705:(t,r,n)=>{var e=n(71432),o=n(70071),i=n(34655),a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=o(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var n=u.test(t);return n||s.test(t)?c(t.slice(2),n?2:8):a.test(t)?NaN:+t}},13555:function(t){t.exports=function(){"use strict";var t=function(t){var r=t.props,n=t.data,e=t.parent,o=function t(r){return Array.isArray(r)?(n=r=>t(r),r.reduce(((t,r)=>t.concat(n(r))),[])):null!==(e=r)&&"object"==typeof e?function(t){let r=[];for(const n in t)t[n]&&r.push(n);return r}(r):"string"==typeof r&&r?[r]:[];var n,e}([n.staticClass,n.class]);if(o){var i,a,u,s=(a=(i=r).body,u=i.document,a?window.document.body:!!u&&window.document.documentElement);if(s){var c=function(t,r){if(!r.length)return;const{classList:n}=t;return r.filter((t=>{if(!n.contains(t))return n.add(t),!0}))}(s,o),f=function(){!function(t,r){if(!r||!r.length)return;let n;for(;n=r.shift();)t.classList.remove(n);t.classList.length||t.removeAttribute("class")}(s,c)};e.$once("hook:beforeUpdate",f),e.$once("hook:destroyed",f)}}},r=Object.prototype.hasOwnProperty,n=function(t,r,n){var e="&"===r[0],o="~"===(r=e?r.slice(1):r)[0],i="!"===(r=o?r.slice(1):r)[0];return{o:t,t:r=i?r.slice(1):r,i:n,u:{once:o,capture:i,passive:e}}},e=function(t){var e,o,i,a=t.props,u=t.listeners,s=t.parent,c=function(t,e){var o,i,a=[];for(var u in e)if(o=e,i=u,r.call(o,i)){var s=e[u],c=n(t,u,s);c.o.addEventListener(c.t,c.i,c.u),a.push(c)}return a}((o=(e=a).body,i=e.document,o?window.document.body:i?window.document:window),u),f=function(){!function(t){for(var r;r=t.shift();)r.o.removeEventListener(r.t,r.i,r.u)}(c)};s.$once("hook:beforeUpdate",f),s.$once("hook:destroyed",f)},o=function(r){e(r),t(r)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(t,r){return r.parent._isMounted?o(r):r.parent.$once("hook:mounted",(function(){o(r)})),r.slots().default}}}()},27062:(t,r,n)=>{"use strict";n.d(r,{Z:()=>o});var e=function(t){return t&&t.data&&(t.data.slot=void 0),t};const o={functional:!0,render:function(t,r){var n=r.props;return Array.isArray(n.nodes)?n.nodes.map(e):e(n.nodes)}}},63883:(t,r,n)=>{"use strict";n.d(r,{Z:()=>h});var e,o={"!":1,"&":2},i=/\B([A-Z])/g,a=/-(\w)/g;function u(t){return t.replace(a,(function(t,r){return r?r.toUpperCase():""}))}function s(t,r,n){if(n){var e=n.value,o=n.modifier,i=t[r];null==i||1===o?t[r]=e:2===o&&(Array.isArray(i)?Array.isArray(e)?i.push.apply(i,e):i.push(e):"object"==typeof i&&"object"==typeof e?Object.assign(i,e):"function"==typeof i&&"function"==typeof e?t[r]=function(){Reflect.apply(i,this,arguments),Reflect.apply(e,this,arguments)}:t[r]+=e)}}function c(t,r,n){t[r]||(t[r]={});var e=t[r];for(var o in n)s(e,o,n[o])}function f(t,r){if(r in t)return r;var n=r.replace(i,"-$1").toLowerCase();return n in t&&n}function l(t){var r={};for(var n in t){var e=t[n],i=o[n.slice(-1)];i?n=n.slice(0,-1):i=0,r[n]={value:e,modifier:i}}return r}function p(t,r){var n=u("static-"+r),e=[t[n],t[r]].filter(Boolean).flat(1/0);if(0!==e.length)return delete t[n],e}function d(t,r){var n=t[r];if(n)return delete t[r],n}function v(t){return t&&{value:t,modifier:0}}const h={functional:!0,render:function(t,r){var n=r.children,o=r.data;if(!n||function(t){for(var r in t)return!1;return!0}(o))return n;var i,a=l(o.attrs),h=l(o.on),b=l(o.nativeOn),g=d(a,"class")||v(p(o,"class")),y=d(a,"style")||v(p(o,"style")),m=d(a,"key")||v(o.key);return y&&"string"==typeof y.value&&(y.value=(i=y.value,Object.fromEntries(i.split(";").map((function(t){var r=t.split(":"),n=r[0],e=r[1];return n&&e&&[u(n.trim()),e.trim()]})).filter(Boolean)))),n.map((function(t){if((t=function(t){e||(e=Object.getPrototypeOf(t).constructor);var r=new e;return Object.assign(r,t),r.componentOptions&&(r.componentOptions=Object.assign({},r.componentOptions),r.componentOptions.propsData=Object.assign({},r.componentOptions.propsData)),r}(t)).tag){t.data||(t.data={});var r=Object.assign({},a),n=t,o=n.data,i=n.componentOptions;i?(c(i,"propsData",function(t,r){var n=t.Ctor.options.props,e={};if(n)for(var o in n){var i=f(r,o);i&&(e[o]=r[i],delete r[i])}return e}(i,r)),c(i,"listeners",h),c(o,"nativeOn",b),o.on=o.nativeOn):c(o,"on",h),c(o,"attrs",r),o.class=p(o,"class"),o.style=p(o,"style"),s(o,"class",g),s(o,"style",y),s(t,"key",m)}return t}))}}},16765:(t,r,n)=>{"use strict";n.d(r,{Vi:()=>E,l7:()=>T});var e={grad:.9,turn:360,rad:360/(2*Math.PI)},o=function(t){return"string"==typeof t?t.length>0:"number"==typeof t},i=function(t,r,n){return void 0===r&&(r=0),void 0===n&&(n=Math.pow(10,r)),Math.round(n*t)/n+0},a=function(t,r,n){return void 0===r&&(r=0),void 0===n&&(n=1),t>n?n:t>r?t:r},u=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},s=function(t){return{r:a(t.r,0,255),g:a(t.g,0,255),b:a(t.b,0,255),a:a(t.a)}},c=function(t){return{r:i(t.r),g:i(t.g),b:i(t.b),a:i(t.a,3)}},f=/^#([0-9a-f]{3,8})$/i,l=function(t){var r=t.toString(16);return r.length<2?"0"+r:r},p=function(t){var r=t.r,n=t.g,e=t.b,o=t.a,i=Math.max(r,n,e),a=i-Math.min(r,n,e),u=a?i===r?(n-e)/a:i===n?2+(e-r)/a:4+(r-n)/a:0;return{h:60*(u<0?u+6:u),s:i?a/i*100:0,v:i/255*100,a:o}},d=function(t){var r=t.h,n=t.s,e=t.v,o=t.a;r=r/360*6,n/=100,e/=100;var i=Math.floor(r),a=e*(1-n),u=e*(1-(r-i)*n),s=e*(1-(1-r+i)*n),c=i%6;return{r:255*[e,u,a,a,s,e][c],g:255*[s,e,e,u,a,a][c],b:255*[a,a,s,e,e,u][c],a:o}},v=function(t){return{h:u(t.h),s:a(t.s,0,100),l:a(t.l,0,100),a:a(t.a)}},h=function(t){return{h:i(t.h),s:i(t.s),l:i(t.l),a:i(t.a,3)}},b=function(t){return d((n=(r=t).s,{h:r.h,s:(n*=((e=r.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:r.a}));var r,n,e},g=function(t){return{h:(r=p(t)).h,s:(o=(200-(n=r.s))*(e=r.v)/100)>0&&o<200?n*e/100/(o<=100?o:200-o)*100:0,l:o/2,a:r.a};var r,n,e,o},y=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,w=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,x=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,N={string:[[function(t){var r=f.exec(t);return r?(t=r[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:4===t.length?i(parseInt(t[3]+t[3],16)/255,2):1}:6===t.length||8===t.length?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:8===t.length?i(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var r=w.exec(t)||x.exec(t);return r?r[2]!==r[4]||r[4]!==r[6]?null:s({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):null},"rgb"],[function(t){var r=y.exec(t)||m.exec(t);if(!r)return null;var n,o,i=v({h:(n=r[1],o=r[2],void 0===o&&(o="deg"),Number(n)*(e[o]||1)),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)});return b(i)},"hsl"]],object:[[function(t){var r=t.r,n=t.g,e=t.b,i=t.a,a=void 0===i?1:i;return o(r)&&o(n)&&o(e)?s({r:Number(r),g:Number(n),b:Number(e),a:Number(a)}):null},"rgb"],[function(t){var r=t.h,n=t.s,e=t.l,i=t.a,a=void 0===i?1:i;if(!o(r)||!o(n)||!o(e))return null;var u=v({h:Number(r),s:Number(n),l:Number(e),a:Number(a)});return b(u)},"hsl"],[function(t){var r=t.h,n=t.s,e=t.v,i=t.a,s=void 0===i?1:i;if(!o(r)||!o(n)||!o(e))return null;var c=function(t){return{h:u(t.h),s:a(t.s,0,100),v:a(t.v,0,100),a:a(t.a)}}({h:Number(r),s:Number(n),v:Number(e),a:Number(s)});return d(c)},"hsv"]]},O=function(t,r){for(var n=0;n<r.length;n++){var e=r[n][0](t);if(e)return[e,r[n][1]]}return[null,void 0]},A=function(t){return"string"==typeof t?O(t.trim(),N.string):"object"==typeof t&&null!==t?O(t,N.object):[null,void 0]},k=function(t,r){var n=g(t);return{h:n.h,s:a(n.s+100*r,0,100),l:n.l,a:n.a}},j=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},M=function(t,r){var n=g(t);return{h:n.h,s:n.s,l:a(n.l+100*r,0,100),a:n.a}},$=function(){function t(t){this.parsed=A(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return null!==this.parsed},t.prototype.brightness=function(){return i(j(this.rgba),2)},t.prototype.isDark=function(){return j(this.rgba)<.5},t.prototype.isLight=function(){return j(this.rgba)>=.5},t.prototype.toHex=function(){return r=(t=c(this.rgba)).r,n=t.g,e=t.b,a=(o=t.a)<1?l(i(255*o)):"","#"+l(r)+l(n)+l(e)+a;var t,r,n,e,o,a},t.prototype.toRgb=function(){return c(this.rgba)},t.prototype.toRgbString=function(){return r=(t=c(this.rgba)).r,n=t.g,e=t.b,(o=t.a)<1?"rgba("+r+", "+n+", "+e+", "+o+")":"rgb("+r+", "+n+", "+e+")";var t,r,n,e,o},t.prototype.toHsl=function(){return h(g(this.rgba))},t.prototype.toHslString=function(){return r=(t=h(g(this.rgba))).h,n=t.s,e=t.l,(o=t.a)<1?"hsla("+r+", "+n+"%, "+e+"%, "+o+")":"hsl("+r+", "+n+"%, "+e+"%)";var t,r,n,e,o},t.prototype.toHsv=function(){return t=p(this.rgba),{h:i(t.h),s:i(t.s),v:i(t.v),a:i(t.a,3)};var t},t.prototype.invert=function(){return E({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},t.prototype.saturate=function(t){return void 0===t&&(t=.1),E(k(this.rgba,t))},t.prototype.desaturate=function(t){return void 0===t&&(t=.1),E(k(this.rgba,-t))},t.prototype.grayscale=function(){return E(k(this.rgba,-1))},t.prototype.lighten=function(t){return void 0===t&&(t=.1),E(M(this.rgba,t))},t.prototype.darken=function(t){return void 0===t&&(t=.1),E(M(this.rgba,-t))},t.prototype.rotate=function(t){return void 0===t&&(t=15),this.hue(this.hue()+t)},t.prototype.alpha=function(t){return"number"==typeof t?E({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):i(this.rgba.a,3);var r},t.prototype.hue=function(t){var r=g(this.rgba);return"number"==typeof t?E({h:t,s:r.s,l:r.l,a:r.a}):i(r.h)},t.prototype.isEqual=function(t){return this.toHex()===E(t).toHex()},t}(),E=function(t){return t instanceof $?t:new $(t)},I=[],T=function(t){t.forEach((function(t){I.indexOf(t)<0&&(t($,N),I.push(t))}))}},40241:(t,r,n)=>{"use strict";n.d(r,{Z:()=>i});var e=function(t){var r=t/255;return r<.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},o=function(t){return.2126*e(t.r)+.7152*e(t.g)+.0722*e(t.b)};function i(t){t.prototype.luminance=function(){return t=o(this.rgba),void 0===(r=2)&&(r=0),void 0===n&&(n=Math.pow(10,r)),Math.round(n*t)/n+0;var t,r,n},t.prototype.contrast=function(r){void 0===r&&(r="#FFF");var n,e,i,a,u,s,c,f=r instanceof t?r:new t(r);return a=this.rgba,u=f.toRgb(),n=(s=o(a))>(c=o(u))?(s+.05)/(c+.05):(c+.05)/(s+.05),void 0===(e=2)&&(e=0),void 0===i&&(i=Math.pow(10,e)),Math.floor(i*n)/i+0},t.prototype.isReadable=function(t,r){return void 0===t&&(t="#FFF"),void 0===r&&(r={}),this.contrast(t)>=(a=void 0===(i=(n=r).size)?"normal":i,"AAA"===(o=void 0===(e=n.level)?"AA":e)&&"normal"===a?7:"AA"===o&&"large"===a?3:4.5);var n,e,o,i,a}}}}]);