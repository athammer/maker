(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[2189],{69901:(n,a,d)=>{"use strict";d.d(a,{g:()=>e});const o={props:{size:{type:String,default:"normal",validator:n=>["normal","large"].includes(n)}}};var t=d(17531),r=d.n(t);const e=(0,d(51900).Z)(o,(function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("div",{class:n.$s.Loading},[d("svg",{class:[n.$s.Spinner,n.$s["size_"+n.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[d("circle",{class:[n.$s.Circle,n.$s["size_"+n.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(n){this.$s=r().locals||r()}),null,null).exports},46475:(n,a,d)=>{"use strict";d.d(a,{i8:()=>r,dL:()=>e,R4:()=>i,mj:()=>l});var o=d(16765),t=d(40241);(0,o.l7)([t.Z]);const r=.32,e=4.5,i=3;function l(n,a,d=i){let t=a;if(!a||(0,o.Vi)(a).contrast(n)<d){t=(0,o.Vi)(n).luminance()<r?"#ffffff":"#000000"}return t}},39832:(n,a,d)=>{var o=d(77705)((function(n){return n[1]}));o.push([n.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},n.exports=o},53037:(n,a,d)=>{var o=d(77705)((function(n){return n[1]}));o.push([n.id,'\n.markdown-body .octicon[data-v-3412da29] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-3412da29] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-3412da29]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-3412da29],\n.markdown-body h2 .octicon-link[data-v-3412da29],\n.markdown-body h3 .octicon-link[data-v-3412da29],\n.markdown-body h4 .octicon-link[data-v-3412da29],\n.markdown-body h5 .octicon-link[data-v-3412da29],\n.markdown-body h6 .octicon-link[data-v-3412da29] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-3412da29],\n.markdown-body h2:hover .anchor[data-v-3412da29],\n.markdown-body h3:hover .anchor[data-v-3412da29],\n.markdown-body h4:hover .anchor[data-v-3412da29],\n.markdown-body h5:hover .anchor[data-v-3412da29],\n.markdown-body h6:hover .anchor[data-v-3412da29] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-3412da29],\n.markdown-body h2:hover .anchor .octicon-link[data-v-3412da29],\n.markdown-body h3:hover .anchor .octicon-link[data-v-3412da29],\n.markdown-body h4:hover .anchor .octicon-link[data-v-3412da29],\n.markdown-body h5:hover .anchor .octicon-link[data-v-3412da29],\n.markdown-body h6:hover .anchor .octicon-link[data-v-3412da29] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-3412da29]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-3412da29]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-3412da29]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-3412da29]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-3412da29]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-3412da29]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-3412da29] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-3412da29] {\n  display: block;\n}\n.markdown-body summary[data-v-3412da29] {\n  display: list-item;\n}\n.markdown-body a[data-v-3412da29] {\n  background-color: initial;\n}\n.markdown-body a[data-v-3412da29]:active,\n.markdown-body a[data-v-3412da29]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-3412da29] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-3412da29] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-3412da29] {\n  border-style: none;\n}\n.markdown-body code[data-v-3412da29],\n.markdown-body kbd[data-v-3412da29],\n.markdown-body pre[data-v-3412da29] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-3412da29] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-3412da29] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-3412da29] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-3412da29] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-3412da29] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-3412da29] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-3412da29] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-3412da29]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-3412da29] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-3412da29] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-3412da29]:after,\n.markdown-body hr[data-v-3412da29]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-3412da29]:after {\n  clear: both;\n}\n.markdown-body table[data-v-3412da29] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-3412da29],\n.markdown-body th[data-v-3412da29] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-3412da29] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-3412da29] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-3412da29],\n.markdown-body h2[data-v-3412da29],\n.markdown-body h3[data-v-3412da29],\n.markdown-body h4[data-v-3412da29],\n.markdown-body h5[data-v-3412da29],\n.markdown-body h6[data-v-3412da29] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-3412da29] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-3412da29],\n.markdown-body h2[data-v-3412da29] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-3412da29] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-3412da29] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-3412da29],\n.markdown-body h4[data-v-3412da29] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-3412da29] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-3412da29] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-3412da29],\n.markdown-body h6[data-v-3412da29] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-3412da29] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-3412da29] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-3412da29] {\n  margin: 0;\n}\n.markdown-body ol[data-v-3412da29],\n.markdown-body ul[data-v-3412da29] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-3412da29],\n.markdown-body ul ol[data-v-3412da29] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-3412da29],\n.markdown-body ol ul ol[data-v-3412da29],\n.markdown-body ul ol ol[data-v-3412da29],\n.markdown-body ul ul ol[data-v-3412da29] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-3412da29] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-3412da29],\n.markdown-body pre[data-v-3412da29] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-3412da29] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-3412da29]::-webkit-inner-spin-button,\n.markdown-body input[data-v-3412da29]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-3412da29] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-3412da29] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-3412da29] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-3412da29] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-3412da29] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-3412da29] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-3412da29] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-3412da29] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-3412da29] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-3412da29] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-3412da29] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-3412da29] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-3412da29] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-3412da29] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-3412da29] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-3412da29],\n.markdown-body .px-3[data-v-3412da29] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-3412da29] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-3412da29] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-3412da29] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-3412da29] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-3412da29] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-3412da29] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-3412da29] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-3412da29] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-3412da29],\n.markdown-body .pl-s .pl-v[data-v-3412da29] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-3412da29],\n.markdown-body .pl-en[data-v-3412da29] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-3412da29],\n.markdown-body .pl-smi[data-v-3412da29] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-3412da29] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-3412da29] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-3412da29],\n.markdown-body .pl-s[data-v-3412da29],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-3412da29],\n.markdown-body .pl-sr[data-v-3412da29],\n.markdown-body .pl-sr .pl-cce[data-v-3412da29],\n.markdown-body .pl-sr .pl-sra[data-v-3412da29],\n.markdown-body .pl-sr .pl-sre[data-v-3412da29] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-3412da29],\n.markdown-body .pl-v[data-v-3412da29] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-3412da29] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-3412da29] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-3412da29] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-3412da29]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-3412da29] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-3412da29] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-3412da29],\n.markdown-body .pl-mh .pl-en[data-v-3412da29],\n.markdown-body .pl-ms[data-v-3412da29] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-3412da29] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-3412da29] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-3412da29] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-3412da29] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-3412da29] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-3412da29] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-3412da29] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-3412da29] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-3412da29] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-3412da29] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-3412da29] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-3412da29] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-3412da29] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-3412da29] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-3412da29] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-3412da29] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-3412da29] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-3412da29] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-3412da29] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-3412da29] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-3412da29] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-3412da29] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-3412da29] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-3412da29] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-3412da29] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-3412da29] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-3412da29] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-3412da29] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-3412da29] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-3412da29] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-3412da29]:after,\n.markdown-body[data-v-3412da29]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-3412da29]:after {\n  clear: both;\n}\n.markdown-body[data-v-3412da29]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-3412da29]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-3412da29]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-3412da29],\n.markdown-body details[data-v-3412da29],\n.markdown-body dl[data-v-3412da29],\n.markdown-body ol[data-v-3412da29],\n.markdown-body p[data-v-3412da29],\n.markdown-body pre[data-v-3412da29],\n.markdown-body table[data-v-3412da29],\n.markdown-body ul[data-v-3412da29] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-3412da29] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-3412da29] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-3412da29]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-3412da29]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-3412da29],\n.markdown-body h2[data-v-3412da29],\n.markdown-body h3[data-v-3412da29],\n.markdown-body h4[data-v-3412da29],\n.markdown-body h5[data-v-3412da29],\n.markdown-body h6[data-v-3412da29] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-3412da29] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-3412da29],\n.markdown-body h2[data-v-3412da29] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-3412da29] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-3412da29] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-3412da29] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-3412da29] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-3412da29] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-3412da29],\n.markdown-body ul[data-v-3412da29] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-3412da29],\n.markdown-body ol ul[data-v-3412da29],\n.markdown-body ul ol[data-v-3412da29],\n.markdown-body ul ul[data-v-3412da29] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-3412da29] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-3412da29] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-3412da29] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-3412da29] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-3412da29] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-3412da29] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-3412da29] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-3412da29] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-3412da29],\n.markdown-body table th[data-v-3412da29] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-3412da29] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-3412da29]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-3412da29] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-3412da29] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-3412da29] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-3412da29] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-3412da29] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-3412da29] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-3412da29] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-3412da29] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-3412da29],\n.markdown-body pre[data-v-3412da29] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-3412da29] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-3412da29] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-3412da29]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-3412da29] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-3412da29] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-3412da29] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-3412da29]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-3412da29]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-3412da29] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-3412da29] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-3412da29],\n.markdown-body .pl-token[data-v-3412da29]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-3412da29] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-3412da29] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-3412da29] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-3412da29] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-3412da29] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-3412da29] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-3412da29] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-3412da29] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-3412da29] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-3412da29] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-3412da29] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-3412da29] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-3412da29] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-3412da29] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-3412da29] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=o},70100:(n,a,d)=>{"use strict";d.r(a),d.d(a,{default:()=>l});const o={components:{MStepper:d(10974).f},data:()=>({number:0})};var t=d(51900);const r=(0,t.Z)(o,(function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("div",{staticStyle:{"text-align":"center"}},[d("m-stepper",{attrs:{min:"0",max:"10"},model:{value:n.number,callback:function(a){n.number=a},expression:"number"}}),n._v("\n\tv-model: "+n._s(n.number)+"\n")],1)}),[],!1,null,null,null).exports;var e=d(415);const i={components:{Demo0:r,DemoCollapse:e.DemoCollapse,SrcFile:e.SrcFile}};d(24419);const l=(0,t.Z)(i,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(2)}),[function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("table",[d("thead",[d("tr",[d("th",[n._v("Prop")]),n._v(" "),d("th",[n._v("Type")]),n._v(" "),d("th",[n._v("Default")]),n._v(" "),d("th",[n._v("Possible values")]),n._v(" "),d("th",[n._v("Description")])])]),n._v(" "),d("tbody",[d("tr",[d("td",[n._v("v-model*")]),n._v(" "),d("td",[d("code",[n._v("number")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("stepper’s current value")])]),n._v(" "),d("tr",[d("td",[n._v("min")]),n._v(" "),d("td",[d("code",[n._v("number|string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("stepper min value")])]),n._v(" "),d("tr",[d("td",[n._v("max")]),n._v(" "),d("td",[d("code",[n._v("number|string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("stepper max value")])]),n._v(" "),d("tr",[d("td",[n._v("color")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("stepper button background color")])]),n._v(" "),d("tr",[d("td",[n._v("text-color")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("stepper button text color")])]),n._v(" "),d("tr",[d("td",[n._v("shape")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[d("code",[n._v("squared")]),n._v(", "),d("code",[n._v("rounded")]),n._v(", "),d("code",[n._v("pill")])]),n._v(" "),d("td",[n._v("stepper button shape")])])])])},function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("table",[d("thead",[d("tr",[d("th",[n._v("Event")]),n._v(" "),d("th",[n._v("Type")]),n._v(" "),d("th",[n._v("Description")])])]),n._v(" "),d("tbody",[d("tr",[d("td",[n._v("stepper:update")]),n._v(" "),d("td",[d("code",[n._v("number")])]),n._v(" "),d("td",[n._v("updated stepper value")])])])])},function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("div",{staticClass:"markdown-body"},[d("h1",[n._v("Stepper")]),n._v(" "),d("demo-collapse",[d("Demo0"),n._v(" "),d("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div\n\t\tstyle="text-align: center"\n\t>\n\t\t<m-stepper\n\t\t\tv-model="number"\n\t\t\tmin="0"\n\t\t\tmax="10"\n\t\t/>\n\t\tv-model: {{ number }}\n\t</div>\n</template>\n\n<script>\nimport { MStepper } from \'@square/maker/components/Stepper\';\n\nexport default {\n\tcomponents: {\n\t\tMStepper,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tnumber: 0,\n\t\t};\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),d("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),d("h2",[n._v("Events")]),n._v(" "),n._m(1)],1)}],!1,null,"3412da29",null).exports},17531:(n,a,d)=>{var o=d(39832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,d(54023).Z)("7ac45ae2",o,!0,{})},24419:(n,a,d)=>{var o=d(53037);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,d(54023).Z)("435385c1",o,!0,{})},16765:(n,a,d)=>{"use strict";d.d(a,{Vi:()=>N,l7:()=>$});var o={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(n){return"string"==typeof n?n.length>0:"number"==typeof n},r=function(n,a,d){return void 0===a&&(a=0),void 0===d&&(d=Math.pow(10,a)),Math.round(d*n)/d+0},e=function(n,a,d){return void 0===a&&(a=0),void 0===d&&(d=1),n>d?d:n>a?n:a},i=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},l=function(n){return{r:e(n.r,0,255),g:e(n.g,0,255),b:e(n.b,0,255),a:e(n.a)}},b=function(n){return{r:r(n.r),g:r(n.g),b:r(n.b),a:r(n.a,3)}},m=/^#([0-9a-f]{3,8})$/i,v=function(n){var a=n.toString(16);return a.length<2?"0"+a:a},p=function(n){var a=n.r,d=n.g,o=n.b,t=n.a,r=Math.max(a,d,o),e=r-Math.min(a,d,o),i=e?r===a?(d-o)/e:r===d?2+(o-a)/e:4+(a-d)/e:0;return{h:60*(i<0?i+6:i),s:r?e/r*100:0,v:r/255*100,a:t}},s=function(n){var a=n.h,d=n.s,o=n.v,t=n.a;a=a/360*6,d/=100,o/=100;var r=Math.floor(a),e=o*(1-d),i=o*(1-(a-r)*d),l=o*(1-(1-a+r)*d),b=r%6;return{r:255*[o,i,e,e,l,o][b],g:255*[l,o,o,i,e,e][b],b:255*[e,e,l,o,o,i][b],a:t}},c=function(n){return{h:i(n.h),s:e(n.s,0,100),l:e(n.l,0,100),a:e(n.a)}},h=function(n){return{h:r(n.h),s:r(n.s),l:r(n.l),a:r(n.a,3)}},k=function(n){return s((d=(a=n).s,{h:a.h,s:(d*=((o=a.l)<50?o:100-o)/100)>0?2*d/(o+d)*100:0,v:o+d,a:a.a}));var a,d,o},y=function(n){return{h:(a=p(n)).h,s:(t=(200-(d=a.s))*(o=a.v)/100)>0&&t<200?d*o/100/(t<=100?t:200-t)*100:0,l:t/2,a:a.a};var a,d,o,t},w=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,u=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,g=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,f=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,x={string:[[function(n){var a=m.exec(n);return a?(n=a[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:4===n.length?r(parseInt(n[3]+n[3],16)/255,2):1}:6===n.length||8===n.length?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:8===n.length?r(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var a=g.exec(n)||f.exec(n);return a?a[2]!==a[4]||a[4]!==a[6]?null:l({r:Number(a[1])/(a[2]?100/255:1),g:Number(a[3])/(a[4]?100/255:1),b:Number(a[5])/(a[6]?100/255:1),a:void 0===a[7]?1:Number(a[7])/(a[8]?100:1)}):null},"rgb"],[function(n){var a=w.exec(n)||u.exec(n);if(!a)return null;var d,t,r=c({h:(d=a[1],t=a[2],void 0===t&&(t="deg"),Number(d)*(o[t]||1)),s:Number(a[3]),l:Number(a[4]),a:void 0===a[5]?1:Number(a[5])/(a[6]?100:1)});return k(r)},"hsl"]],object:[[function(n){var a=n.r,d=n.g,o=n.b,r=n.a,e=void 0===r?1:r;return t(a)&&t(d)&&t(o)?l({r:Number(a),g:Number(d),b:Number(o),a:Number(e)}):null},"rgb"],[function(n){var a=n.h,d=n.s,o=n.l,r=n.a,e=void 0===r?1:r;if(!t(a)||!t(d)||!t(o))return null;var i=c({h:Number(a),s:Number(d),l:Number(o),a:Number(e)});return k(i)},"hsl"],[function(n){var a=n.h,d=n.s,o=n.v,r=n.a,l=void 0===r?1:r;if(!t(a)||!t(d)||!t(o))return null;var b=function(n){return{h:i(n.h),s:e(n.s,0,100),v:e(n.v,0,100),a:e(n.a)}}({h:Number(a),s:Number(d),v:Number(o),a:Number(l)});return s(b)},"hsv"]]},_=function(n,a){for(var d=0;d<a.length;d++){var o=a[d][0](n);if(o)return[o,a[d][1]]}return[null,void 0]},z=function(n){return"string"==typeof n?_(n.trim(),x.string):"object"==typeof n&&null!==n?_(n,x.object):[null,void 0]},M=function(n,a){var d=y(n);return{h:d.h,s:e(d.s+100*a,0,100),l:d.l,a:d.a}},C=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},S=function(n,a){var d=y(n);return{h:d.h,s:d.s,l:e(d.l+100*a,0,100),a:d.a}},q=function(){function n(n){this.parsed=z(n)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return null!==this.parsed},n.prototype.brightness=function(){return r(C(this.rgba),2)},n.prototype.isDark=function(){return C(this.rgba)<.5},n.prototype.isLight=function(){return C(this.rgba)>=.5},n.prototype.toHex=function(){return a=(n=b(this.rgba)).r,d=n.g,o=n.b,e=(t=n.a)<1?v(r(255*t)):"","#"+v(a)+v(d)+v(o)+e;var n,a,d,o,t,e},n.prototype.toRgb=function(){return b(this.rgba)},n.prototype.toRgbString=function(){return a=(n=b(this.rgba)).r,d=n.g,o=n.b,(t=n.a)<1?"rgba("+a+", "+d+", "+o+", "+t+")":"rgb("+a+", "+d+", "+o+")";var n,a,d,o,t},n.prototype.toHsl=function(){return h(y(this.rgba))},n.prototype.toHslString=function(){return a=(n=h(y(this.rgba))).h,d=n.s,o=n.l,(t=n.a)<1?"hsla("+a+", "+d+"%, "+o+"%, "+t+")":"hsl("+a+", "+d+"%, "+o+"%)";var n,a,d,o,t},n.prototype.toHsv=function(){return n=p(this.rgba),{h:r(n.h),s:r(n.s),v:r(n.v),a:r(n.a,3)};var n},n.prototype.invert=function(){return N({r:255-(n=this.rgba).r,g:255-n.g,b:255-n.b,a:n.a});var n},n.prototype.saturate=function(n){return void 0===n&&(n=.1),N(M(this.rgba,n))},n.prototype.desaturate=function(n){return void 0===n&&(n=.1),N(M(this.rgba,-n))},n.prototype.grayscale=function(){return N(M(this.rgba,-1))},n.prototype.lighten=function(n){return void 0===n&&(n=.1),N(S(this.rgba,n))},n.prototype.darken=function(n){return void 0===n&&(n=.1),N(S(this.rgba,-n))},n.prototype.rotate=function(n){return void 0===n&&(n=15),this.hue(this.hue()+n)},n.prototype.alpha=function(n){return"number"==typeof n?N({r:(a=this.rgba).r,g:a.g,b:a.b,a:n}):r(this.rgba.a,3);var a},n.prototype.hue=function(n){var a=y(this.rgba);return"number"==typeof n?N({h:n,s:a.s,l:a.l,a:a.a}):r(a.h)},n.prototype.isEqual=function(n){return this.toHex()===N(n).toHex()},n}(),N=function(n){return n instanceof q?n:new q(n)},I=[],$=function(n){n.forEach((function(n){I.indexOf(n)<0&&(n(q,x),I.push(n))}))}},40241:(n,a,d)=>{"use strict";d.d(a,{Z:()=>r});var o=function(n){var a=n/255;return a<.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)},t=function(n){return.2126*o(n.r)+.7152*o(n.g)+.0722*o(n.b)};function r(n){n.prototype.luminance=function(){return n=t(this.rgba),void 0===(a=2)&&(a=0),void 0===d&&(d=Math.pow(10,a)),Math.round(d*n)/d+0;var n,a,d},n.prototype.contrast=function(a){void 0===a&&(a="#FFF");var d,o,r,e,i,l,b,m=a instanceof n?a:new n(a);return e=this.rgba,i=m.toRgb(),d=(l=t(e))>(b=t(i))?(l+.05)/(b+.05):(b+.05)/(l+.05),void 0===(o=2)&&(o=0),void 0===r&&(r=Math.pow(10,o)),Math.floor(r*d)/r+0},n.prototype.isReadable=function(n,a){return void 0===n&&(n="#FFF"),void 0===a&&(a={}),this.contrast(n)>=(e=void 0===(r=(d=a).size)?"normal":r,"AAA"===(t=void 0===(o=d.level)?"AA":o)&&"normal"===e?7:"AA"===t&&"large"===e?3:4.5);var d,o,t,r,e}}}}]);