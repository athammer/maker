(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[8310],{98486:(n,d,o)=>{"use strict";o.d(d,{Z:()=>v});var a=Symbol();function t(n,d){n[a]||(n[a]=d,Object.defineProperty(n,"parentNode",{get:function(){return this[a]||this.parentElement}}))}var e=function(n,d){var o=n.splice(0);d.append.apply(d,o),o.forEach((function(n){n[a]=void 0}))};function r(n,d){if(this.frag){var o=this.frag.indexOf(d);o>-1&&this.frag.splice(o,0,n)}if(this[i]){var a=this[i].get(d);a&&(d=a[0])}d.before(n),t(n,this)}function b(n){if(this.frag){var d=this.frag.indexOf(n);d>-1&&this.frag.splice(d,1)}var o=this[i];if(o){var t=o.get(n);if(t)return e(t,n),o.delete(n),void(n[a]=void 0)}n.remove()}var i=Symbol(),l={insertBefore:r,removeChild:b},c=Symbol(),m={insertBefore:r,before:function(n){this.frag[0].before(n)},remove:function(){var n=this[c],d=this.frag,o=d.splice(0,d.length,n);o[0].before(this[c]),o.forEach((function(n){return n.remove()}))},removeChild:b,appendChild:function(n){var d=this.frag.length;this.frag[d-1].after(n);var o=this[c];this.frag[0]===o&&(this.frag.splice(0,1),o.remove()),t(n,this),this.frag.push(n)}};const v={inserted:function(n){var d=Array.from(n.childNodes),o=n.parentNode,a=document.createComment("");n[c]=a,0===d.length&&d.push(a);var e=document.createDocumentFragment();e.append.apply(e,d),n.replaceWith(e),n.frag=d,function(n,d,o){n[i]||(n[i]=new Map,Object.assign(n,l)),n[i].set(d,o)}(o,n,d),t(n,o),d.forEach((function(d){return t(d,n)})),Object.defineProperty(n,"innerHTML",{set:function(d){var o=document.createElement("div");o.innerHTML=d;var a=n.frag.length;Array.from(o.childNodes).forEach((function(d){return n.appendChild(d)})),o.append.apply(o,n.frag.splice(0,a))},get:function(){return""}}),Object.assign(n,m)},unbind:function(n){e(n.frag,n),n[c].remove()}}},2030:(n,d,o)=>{"use strict";o.d(d,{s:()=>b,p:()=>m});const a={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(n){return this.$slots.default?this.$slots.default:n("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var t=o(72986),e=o.n(t),r=o(51900);const b=(0,r.Z)(a,undefined,undefined,!1,(function(n){this.$s=e().locals||e()}),null,null).exports;const i={directives:{frag:o(98486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((n=>n.tag||n.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var l=o(32794),c=o.n(l);const m=(0,r.Z)(i,(function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("div",{directives:[{name:"frag",rawName:"v-frag"}]},[n.loaded||n.children?[n._t("default")]:n._l(n.linesNum,(function(d){return o("div",n._g(n._b({key:"skeleton-text-"+d,class:n.$s.SkeletonText},"div",n.$attrs,!1),n.$listeners))}))],2)}),[],!1,(function(n){this.$s=c().locals||c()}),null,null).exports},8647:(n,d,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: var(--neutral-10, #ebedef);\n}\n100% { background-color: var(--neutral-20, #f5f6f7);\n}\n}\n",""]),a.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},n.exports=a},33418:(n,d,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: var(--neutral-10, #ebedef);\n}\n100% { background-color: var(--neutral-20, #f5f6f7);\n}\n}\n",""]),a.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},n.exports=a},64188:(n,d,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-48d3db0c] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-48d3db0c] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-48d3db0c]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-48d3db0c],\n.markdown-body h2 .octicon-link[data-v-48d3db0c],\n.markdown-body h3 .octicon-link[data-v-48d3db0c],\n.markdown-body h4 .octicon-link[data-v-48d3db0c],\n.markdown-body h5 .octicon-link[data-v-48d3db0c],\n.markdown-body h6 .octicon-link[data-v-48d3db0c] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-48d3db0c],\n.markdown-body h2:hover .anchor[data-v-48d3db0c],\n.markdown-body h3:hover .anchor[data-v-48d3db0c],\n.markdown-body h4:hover .anchor[data-v-48d3db0c],\n.markdown-body h5:hover .anchor[data-v-48d3db0c],\n.markdown-body h6:hover .anchor[data-v-48d3db0c] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-48d3db0c],\n.markdown-body h2:hover .anchor .octicon-link[data-v-48d3db0c],\n.markdown-body h3:hover .anchor .octicon-link[data-v-48d3db0c],\n.markdown-body h4:hover .anchor .octicon-link[data-v-48d3db0c],\n.markdown-body h5:hover .anchor .octicon-link[data-v-48d3db0c],\n.markdown-body h6:hover .anchor .octicon-link[data-v-48d3db0c] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-48d3db0c]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-48d3db0c]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-48d3db0c]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-48d3db0c]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-48d3db0c]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-48d3db0c]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-48d3db0c] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-48d3db0c] {\n  display: block;\n}\n.markdown-body summary[data-v-48d3db0c] {\n  display: list-item;\n}\n.markdown-body a[data-v-48d3db0c] {\n  background-color: initial;\n}\n.markdown-body a[data-v-48d3db0c]:active,\n.markdown-body a[data-v-48d3db0c]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-48d3db0c] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-48d3db0c] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-48d3db0c] {\n  border-style: none;\n}\n.markdown-body code[data-v-48d3db0c],\n.markdown-body kbd[data-v-48d3db0c],\n.markdown-body pre[data-v-48d3db0c] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-48d3db0c] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-48d3db0c] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-48d3db0c] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-48d3db0c] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-48d3db0c] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-48d3db0c] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-48d3db0c] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-48d3db0c]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-48d3db0c] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-48d3db0c] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-48d3db0c]:after,\n.markdown-body hr[data-v-48d3db0c]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-48d3db0c]:after {\n  clear: both;\n}\n.markdown-body table[data-v-48d3db0c] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-48d3db0c],\n.markdown-body th[data-v-48d3db0c] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-48d3db0c] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-48d3db0c] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-48d3db0c],\n.markdown-body h2[data-v-48d3db0c],\n.markdown-body h3[data-v-48d3db0c],\n.markdown-body h4[data-v-48d3db0c],\n.markdown-body h5[data-v-48d3db0c],\n.markdown-body h6[data-v-48d3db0c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-48d3db0c] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-48d3db0c],\n.markdown-body h2[data-v-48d3db0c] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-48d3db0c] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-48d3db0c] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-48d3db0c],\n.markdown-body h4[data-v-48d3db0c] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-48d3db0c] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-48d3db0c] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-48d3db0c],\n.markdown-body h6[data-v-48d3db0c] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-48d3db0c] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-48d3db0c] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-48d3db0c] {\n  margin: 0;\n}\n.markdown-body ol[data-v-48d3db0c],\n.markdown-body ul[data-v-48d3db0c] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-48d3db0c],\n.markdown-body ul ol[data-v-48d3db0c] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-48d3db0c],\n.markdown-body ol ul ol[data-v-48d3db0c],\n.markdown-body ul ol ol[data-v-48d3db0c],\n.markdown-body ul ul ol[data-v-48d3db0c] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-48d3db0c] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-48d3db0c],\n.markdown-body pre[data-v-48d3db0c] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-48d3db0c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-48d3db0c]::-webkit-inner-spin-button,\n.markdown-body input[data-v-48d3db0c]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-48d3db0c] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-48d3db0c] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-48d3db0c] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-48d3db0c] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-48d3db0c] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-48d3db0c] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-48d3db0c] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-48d3db0c] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-48d3db0c] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-48d3db0c] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-48d3db0c] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-48d3db0c] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-48d3db0c] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-48d3db0c] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-48d3db0c] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-48d3db0c],\n.markdown-body .px-3[data-v-48d3db0c] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-48d3db0c] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-48d3db0c] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-48d3db0c] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-48d3db0c] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-48d3db0c] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-48d3db0c] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-48d3db0c] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-48d3db0c] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-48d3db0c],\n.markdown-body .pl-s .pl-v[data-v-48d3db0c] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-48d3db0c],\n.markdown-body .pl-en[data-v-48d3db0c] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-48d3db0c],\n.markdown-body .pl-smi[data-v-48d3db0c] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-48d3db0c] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-48d3db0c] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-48d3db0c],\n.markdown-body .pl-s[data-v-48d3db0c],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-48d3db0c],\n.markdown-body .pl-sr[data-v-48d3db0c],\n.markdown-body .pl-sr .pl-cce[data-v-48d3db0c],\n.markdown-body .pl-sr .pl-sra[data-v-48d3db0c],\n.markdown-body .pl-sr .pl-sre[data-v-48d3db0c] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-48d3db0c],\n.markdown-body .pl-v[data-v-48d3db0c] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-48d3db0c] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-48d3db0c] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-48d3db0c] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-48d3db0c]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-48d3db0c] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-48d3db0c] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-48d3db0c],\n.markdown-body .pl-mh .pl-en[data-v-48d3db0c],\n.markdown-body .pl-ms[data-v-48d3db0c] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-48d3db0c] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-48d3db0c] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-48d3db0c] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-48d3db0c] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-48d3db0c] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-48d3db0c] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-48d3db0c] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-48d3db0c] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-48d3db0c] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-48d3db0c] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-48d3db0c] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-48d3db0c] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-48d3db0c] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-48d3db0c] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-48d3db0c] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-48d3db0c] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-48d3db0c] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-48d3db0c] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-48d3db0c] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-48d3db0c] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-48d3db0c] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-48d3db0c] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-48d3db0c] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-48d3db0c] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-48d3db0c] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-48d3db0c] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-48d3db0c] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-48d3db0c] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-48d3db0c] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-48d3db0c] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-48d3db0c]:after,\n.markdown-body[data-v-48d3db0c]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-48d3db0c]:after {\n  clear: both;\n}\n.markdown-body[data-v-48d3db0c]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-48d3db0c]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-48d3db0c]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-48d3db0c],\n.markdown-body details[data-v-48d3db0c],\n.markdown-body dl[data-v-48d3db0c],\n.markdown-body ol[data-v-48d3db0c],\n.markdown-body p[data-v-48d3db0c],\n.markdown-body pre[data-v-48d3db0c],\n.markdown-body table[data-v-48d3db0c],\n.markdown-body ul[data-v-48d3db0c] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-48d3db0c] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-48d3db0c] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-48d3db0c]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-48d3db0c]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-48d3db0c],\n.markdown-body h2[data-v-48d3db0c],\n.markdown-body h3[data-v-48d3db0c],\n.markdown-body h4[data-v-48d3db0c],\n.markdown-body h5[data-v-48d3db0c],\n.markdown-body h6[data-v-48d3db0c] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-48d3db0c] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-48d3db0c],\n.markdown-body h2[data-v-48d3db0c] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-48d3db0c] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-48d3db0c] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-48d3db0c] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-48d3db0c] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-48d3db0c] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-48d3db0c],\n.markdown-body ul[data-v-48d3db0c] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-48d3db0c],\n.markdown-body ol ul[data-v-48d3db0c],\n.markdown-body ul ol[data-v-48d3db0c],\n.markdown-body ul ul[data-v-48d3db0c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-48d3db0c] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-48d3db0c] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-48d3db0c] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-48d3db0c] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-48d3db0c] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-48d3db0c] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-48d3db0c] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-48d3db0c] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-48d3db0c],\n.markdown-body table th[data-v-48d3db0c] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-48d3db0c] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-48d3db0c]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-48d3db0c] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-48d3db0c] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-48d3db0c] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-48d3db0c] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-48d3db0c] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-48d3db0c] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-48d3db0c] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-48d3db0c] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-48d3db0c],\n.markdown-body pre[data-v-48d3db0c] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-48d3db0c] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-48d3db0c] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-48d3db0c]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-48d3db0c] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-48d3db0c] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-48d3db0c] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-48d3db0c]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-48d3db0c]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-48d3db0c] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-48d3db0c] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-48d3db0c],\n.markdown-body .pl-token[data-v-48d3db0c]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-48d3db0c] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-48d3db0c] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-48d3db0c] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-48d3db0c] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-48d3db0c] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-48d3db0c] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-48d3db0c] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-48d3db0c] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-48d3db0c] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-48d3db0c] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-48d3db0c] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-48d3db0c] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-48d3db0c] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-48d3db0c] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-48d3db0c] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},68310:(n,d,o)=>{"use strict";o.r(d),o.d(d,{default:()=>l});var a=o(2030);const t={components:{MSkeletonText:a.p,MSkeletonBlock:a.s}};var e=o(51900);const r=(0,e.Z)(t,(function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("div",[o("h4",[n._v("loading text")]),n._v(" "),o("m-skeleton-text",{attrs:{lines:3}}),n._v(" "),o("h4",[n._v("loaded text")]),n._v(" "),o("m-skeleton-text",[n._v("\n\t\tsome loaded text\n\t")]),n._v(" "),o("h4",[n._v("loading block")]),n._v(" "),o("m-skeleton-block",{staticClass:"loadingBlock"}),n._v(" "),o("h4",[n._v("loaded block")]),n._v(" "),o("m-skeleton-block",[n._v("\n\t\tloaded content here\n\t")])],1)}),[],!1,null,"7480c5fd",null).exports;var b=o(415);const i={components:{Demo0:r,DemoCollapse:b.DemoCollapse,SrcFile:b.SrcFile}};o(18519);const l=(0,e.Z)(i,(function(){var n=this,d=n.$createElement;n._self._c;return n._m(8)}),[function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("p",[n._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[o("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("loaded")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("false")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Toggled loaded state")])])])])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("loading content")])])])])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("p",[n._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[o("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("p",[n._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[o("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("lines")]),n._v(" "),o("td",[o("code",[n._v("string|number")])]),n._v(" "),o("td",[o("code",[n._v("1")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("number of lines of skeleton text")])]),n._v(" "),o("tr",[o("td",[n._v("loaded")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("false")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Toggled loaded state")])])])])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("loaded text")])])])])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("p",[n._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[o("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Skeleton")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<h4>loading text</h4>\n\t\t<m-skeleton-text :lines="3" />\n\n\t\t<h4>loaded text</h4>\n\t\t<m-skeleton-text>\n\t\t\tsome loaded text\n\t\t</m-skeleton-text>\n\n\t\t<h4>loading block</h4>\n\t\t<m-skeleton-block class="loadingBlock" />\n\n\t\t<h4>loaded block</h4>\n\t\t<m-skeleton-block>\n\t\t\tloaded content here\n\t\t</m-skeleton-block>\n\t</div>\n</template>\n\n<script>\nimport { MSkeletonText, MSkeletonBlock } from \'@square/maker/components/Skeleton\';\n\nexport default {\n\tcomponents: {\n\t\tMSkeletonText,\n\t\tMSkeletonBlock,\n\t},\n};\n<\/script>\n\n<style scoped>\n.loadingBlock {\n\theight: 100px;\n}\n')]],2)],1),n._v(" "),o("h2",[n._v("SkeletonBlock Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),o("h2",[n._v("SkeletonBlock Slots")]),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("SkeletonBlock Events")]),n._v(" "),n._m(3),n._v(" "),o("h2",[n._v("SkeletonText Props")]),n._v(" "),n._m(4),n._v(" "),n._m(5),n._v(" "),o("h2",[n._v("SkeletonText Slots")]),n._v(" "),n._m(6),n._v(" "),o("h2",[n._v("SkeletonText Events")]),n._v(" "),n._m(7)],1)}],!1,null,"48d3db0c",null).exports},72986:(n,d,o)=>{var a=o(8647);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("e53630ca",a,!0,{})},32794:(n,d,o)=>{var a=o(33418);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("54e85523",a,!0,{})},18519:(n,d,o)=>{var a=o(64188);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("19c9da2b",a,!0,{})}}]);