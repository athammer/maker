(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[41,152],{9258:r=>{r.exports=function(r,t){for(var n=-1,u=null==r?0:r.length,e=Array(u);++n<u;)e[n]=t(r[n],n,r);return e}},1205:r=>{r.exports=function(r,t,n,u){var e=-1,o=null==r?0:r.length;for(u&&o&&(n=r[++e]);++e<o;)n=t(n,r[e],e,r);return n}},8263:r=>{var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;r.exports=function(r){return r.match(t)||[]}},642:r=>{r.exports=function(r){return function(t){return null==r?void 0:r[t]}}},8257:(r,t,n)=>{var u=n(2773),e=n(9258),o=n(3670),a=n(4655),i=u?u.prototype:void 0,s=i?i.toString:void 0;r.exports=function r(t){if("string"==typeof t)return t;if(o(t))return e(t,r)+"";if(a(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},8014:(r,t,n)=>{var u=n(1205),e=n(4383),o=n(5208),a=RegExp("['’]","g");r.exports=function(r){return function(t){return u(o(e(t).replace(a,"")),r,"")}}},8303:(r,t,n)=>{var u=n(642)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});r.exports=u},9952:r=>{var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;r.exports=function(r){return t.test(r)}},6083:r=>{var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",e="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+e+"]",a="\\d+",i="[\\u2700-\\u27bf]",s="["+n+"]",f="[^\\ud800-\\udfff"+e+a+t+n+u+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+u+"]",b="(?:"+s+"|"+f+")",l="(?:"+h+"|"+f+")",p="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?",y=x+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,c].join("|")+")"+x+v+")*"),m="(?:"+[i,d,c].join("|")+")"+y,N=RegExp([h+"?"+s+"+"+p+"(?="+[o,h,"$"].join("|")+")",l+"+"+g+"(?="+[o,h+b,"$"].join("|")+")",h+"?"+b+"+"+p,h+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,m].join("|"),"g");r.exports=function(r){return r.match(N)||[]}},4383:(r,t,n)=>{var u=n(8303),e=n(2049),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");r.exports=function(r){return(r=e(r))&&r.replace(o,u).replace(a,"")}},4655:(r,t,n)=>{var u=n(1185),e=n(4939);r.exports=function(r){return"symbol"==typeof r||e(r)&&"[object Symbol]"==u(r)}},5573:(r,t,n)=>{var u=n(8014)((function(r,t,n){return r+(n?"-":"")+t.toLowerCase()}));r.exports=u},2049:(r,t,n)=>{var u=n(8257);r.exports=function(r){return null==r?"":u(r)}},5208:(r,t,n)=>{var u=n(8263),e=n(9952),o=n(2049),a=n(6083);r.exports=function(r,t,n){return r=o(r),void 0===(t=n?void 0:t)?e(r)?a(r):u(r):r.match(t)||[]}},9152:(r,t,n)=>{"use strict";n.d(t,{Vi:()=>O,l7:()=>Z});var u={grad:.9,turn:360,rad:360/(2*Math.PI)},e=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},o=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},a=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},i=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},s=function(r){return{r:a(r.r,0,255),g:a(r.g,0,255),b:a(r.b,0,255),a:a(r.a)}},f=function(r){return{r:o(r.r),g:o(r.g),b:o(r.b),a:o(r.a,3)}},d=/^#([0-9a-f]{3,8})$/i,c=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,u=r.b,e=r.a,o=Math.max(t,n,u),a=o-Math.min(t,n,u),i=a?o===t?(n-u)/a:o===n?2+(u-t)/a:4+(t-n)/a:0;return{h:60*(i<0?i+6:i),s:o?a/o*100:0,v:o/255*100,a:e}},b=function(r){var t=r.h,n=r.s,u=r.v,e=r.a;t=t/360*6,n/=100,u/=100;var o=Math.floor(t),a=u*(1-n),i=u*(1-(t-o)*n),s=u*(1-(1-t+o)*n),f=o%6;return{r:255*[u,i,a,a,s,u][f],g:255*[s,u,u,i,a,a][f],b:255*[a,a,s,u,u,i][f],a:e}},l=function(r){return{h:i(r.h),s:a(r.s,0,100),l:a(r.l,0,100),a:a(r.a)}},p=function(r){return{h:o(r.h),s:o(r.s),l:o(r.l),a:o(r.a,3)}},g=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((u=t.l)<50?u:100-u)/100)>0?2*n/(u+n)*100:0,v:u+n,a:t.a}));var t,n,u},v=function(r){return{h:(t=h(r)).h,s:(e=(200-(n=t.s))*(u=t.v)/100)>0&&e<200?n*u/100/(e<=100?e:200-e)*100:0,l:e/2,a:t.a};var t,n,u,e},x=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,N=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,A={string:[[function(r){var t=d.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?o(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?o(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=m.exec(r)||N.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:s({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(r){var t=x.exec(r)||y.exec(r);if(!t)return null;var n,e,o=l({h:(n=t[1],e=t[2],void 0===e&&(e="deg"),Number(n)*(u[e]||1)),s:Number(t[3]),l:Number(t[4]),a:void 0===t[5]?1:Number(t[5])/(t[6]?100:1)});return g(o)},"hsl"]],object:[[function(r){var t=r.r,n=r.g,u=r.b,o=r.a,a=void 0===o?1:o;return e(t)&&e(n)&&e(u)?s({r:Number(t),g:Number(n),b:Number(u),a:Number(a)}):null},"rgb"],[function(r){var t=r.h,n=r.s,u=r.l,o=r.a,a=void 0===o?1:o;if(!e(t)||!e(n)||!e(u))return null;var i=l({h:Number(t),s:Number(n),l:Number(u),a:Number(a)});return g(i)},"hsl"],[function(r){var t=r.h,n=r.s,u=r.v,o=r.a,s=void 0===o?1:o;if(!e(t)||!e(n)||!e(u))return null;var f=function(r){return{h:i(r.h),s:a(r.s,0,100),v:a(r.v,0,100),a:a(r.a)}}({h:Number(t),s:Number(n),v:Number(u),a:Number(s)});return b(f)},"hsv"]]},I=function(r,t){for(var n=0;n<t.length;n++){var u=t[n][0](r);if(u)return[u,t[n][1]]}return[null,void 0]},E=function(r){return"string"==typeof r?I(r.trim(),A.string):"object"==typeof r&&null!==r?I(r,A.object):[null,void 0]},M=function(r,t){var n=v(r);return{h:n.h,s:a(n.s+100*t,0,100),l:n.l,a:n.a}},R=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},j=function(r,t){var n=v(r);return{h:n.h,s:n.s,l:a(n.l+100*t,0,100),a:n.a}},z=function(){function r(r){this.parsed=E(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return o(R(this.rgba),2)},r.prototype.isDark=function(){return R(this.rgba)<.5},r.prototype.isLight=function(){return R(this.rgba)>=.5},r.prototype.toHex=function(){return t=(r=f(this.rgba)).r,n=r.g,u=r.b,a=(e=r.a)<1?c(o(255*e)):"","#"+c(t)+c(n)+c(u)+a;var r,t,n,u,e,a},r.prototype.toRgb=function(){return f(this.rgba)},r.prototype.toRgbString=function(){return t=(r=f(this.rgba)).r,n=r.g,u=r.b,(e=r.a)<1?"rgba("+t+", "+n+", "+u+", "+e+")":"rgb("+t+", "+n+", "+u+")";var r,t,n,u,e},r.prototype.toHsl=function(){return p(v(this.rgba))},r.prototype.toHslString=function(){return t=(r=p(v(this.rgba))).h,n=r.s,u=r.l,(e=r.a)<1?"hsla("+t+", "+n+"%, "+u+"%, "+e+")":"hsl("+t+", "+n+"%, "+u+"%)";var r,t,n,u,e},r.prototype.toHsv=function(){return r=h(this.rgba),{h:o(r.h),s:o(r.s),v:o(r.v),a:o(r.a,3)};var r},r.prototype.invert=function(){return O({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),O(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),O(M(this.rgba,-r))},r.prototype.grayscale=function(){return O(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),O(j(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),O(j(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?O({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):o(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=v(this.rgba);return"number"==typeof r?O({h:r,s:t.s,l:t.l,a:t.a}):o(t.h)},r.prototype.isEqual=function(r){return this.toHex()===O(r).toHex()},r}(),O=function(r){return r instanceof z?r:new z(r)},S=[],Z=function(r){r.forEach((function(r){S.indexOf(r)<0&&(r(z,A),S.push(r))}))}},3690:(r,t,n)=>{"use strict";n.d(t,{Z:()=>o});var u=function(r){var t=r/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},e=function(r){return.2126*u(r.r)+.7152*u(r.g)+.0722*u(r.b)};function o(r){r.prototype.luminance=function(){return r=e(this.rgba),void 0===(t=2)&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0;var r,t,n},r.prototype.contrast=function(t){void 0===t&&(t="#FFF");var n,u,o,a,i,s,f,d=t instanceof r?t:new r(t);return a=this.rgba,i=d.toRgb(),n=(s=e(a))>(f=e(i))?(s+.05)/(f+.05):(f+.05)/(s+.05),void 0===(u=2)&&(u=0),void 0===o&&(o=Math.pow(10,u)),Math.floor(o*n)/o+0},r.prototype.isReadable=function(r,t){return void 0===r&&(r="#FFF"),void 0===t&&(t={}),this.contrast(r)>=(a=void 0===(o=(n=t).size)?"normal":o,"AAA"===(e=void 0===(u=n.level)?"AA":u)&&"normal"===a?7:"AA"===e&&"large"===a?3:4.5);var n,u,e,o,a}}}}]);