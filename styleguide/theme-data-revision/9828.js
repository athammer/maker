(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9828],{90487:(n,a,o)=>{"use strict";o.d(a,{v:()=>c});var e=o(60771),t=o.n(e);const d={name:"ProgressBar",props:{size:{type:String,default:"medium",validator:n=>["xsmall","small","medium","large"].includes(n)},shape:{type:String,default:"rounded",validator:n=>["squared","rounded","pill"].includes(n)},color:{type:String,default:"#000",validator:n=>t().valid(n)},progress:{type:Number,default:0,validator:n=>n>=0&&n<=100}},computed:{barStyles(){return{"--bar-color":this.color,"--fill-percent":"".concat(this.progress,"%")}}}};var r=o(3619),i=o.n(r);const c=(0,o(51900).Z)(d,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{class:[n.$s.ProgressBarContainer,n.$s["size_"+n.size],n.$s["shape_"+n.shape]]},[o("div",{class:n.$s.ProgressBar,style:n.barStyles})])}),[],!1,(function(n){this.$s=i().locals||i()}),null,null).exports},83655:(n,a,o)=>{var e=o(77705)((function(n){return n[1]}));e.push([n.id,"\n.Container_zecXa {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgrid-gap: 32px;\n\tmax-width: 500px;\n}\n.Sizes_Na1RZ {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgrid-gap: 12px;\n}\n\n",""]),e.locals={Container:"Container_zecXa",Sizes:"Sizes_Na1RZ"},n.exports=e},59802:(n,a,o)=>{var e=o(77705)((function(n){return n[1]}));e.push([n.id,"\n.ProgressBarContainer__cJD1 {\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground-color: #f5f4f4;\n}\n.ProgressBar_aeQRL {\n\twidth: var(--fill-percent, 0);\n\theight: 100%;\n\tbackground-color: var(--bar-color);\n\ttransition: width 100ms linear;\n}\n.ProgressBarContainer__cJD1.size_xsmall_xhxJO {\n\theight: 4px;\n}\n.ProgressBarContainer__cJD1.size_small_SYTJI {\n\theight: 8px;\n}\n.ProgressBarContainer__cJD1.size_medium__TVkx {\n\theight: 12px;\n}\n.ProgressBarContainer__cJD1.size_large_dC33B {\n\theight: 16px;\n}\n.ProgressBarContainer__cJD1.shape_squared_gzT9x,\n.ProgressBarContainer__cJD1.shape_squared_gzT9x .ProgressBar_aeQRL {\n\tborder-radius: 0;\n}\n.ProgressBarContainer__cJD1.shape_rounded_NBloK,\n.ProgressBarContainer__cJD1.shape_rounded_NBloK .ProgressBar_aeQRL,\n.ProgressBarContainer__cJD1.shape_pill_wddxw,\n.ProgressBarContainer__cJD1.shape_pill_wddxw .ProgressBar_aeQRL {\n\tborder-radius: 16px;\n}\n",""]),e.locals={ProgressBarContainer:"ProgressBarContainer__cJD1",ProgressBar:"ProgressBar_aeQRL",size_xsmall:"size_xsmall_xhxJO",size_small:"size_small_SYTJI",size_medium:"size_medium__TVkx",size_large:"size_large_dC33B",shape_squared:"shape_squared_gzT9x",shape_rounded:"shape_rounded_NBloK",shape_pill:"shape_pill_wddxw"},n.exports=e},23640:(n,a,o)=>{var e=o(77705)((function(n){return n[1]}));e.push([n.id,'\n.markdown-body .octicon[data-v-e4e51a2c] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-e4e51a2c] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-e4e51a2c]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-e4e51a2c],\n.markdown-body h2 .octicon-link[data-v-e4e51a2c],\n.markdown-body h3 .octicon-link[data-v-e4e51a2c],\n.markdown-body h4 .octicon-link[data-v-e4e51a2c],\n.markdown-body h5 .octicon-link[data-v-e4e51a2c],\n.markdown-body h6 .octicon-link[data-v-e4e51a2c] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-e4e51a2c],\n.markdown-body h2:hover .anchor[data-v-e4e51a2c],\n.markdown-body h3:hover .anchor[data-v-e4e51a2c],\n.markdown-body h4:hover .anchor[data-v-e4e51a2c],\n.markdown-body h5:hover .anchor[data-v-e4e51a2c],\n.markdown-body h6:hover .anchor[data-v-e4e51a2c] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-e4e51a2c],\n.markdown-body h2:hover .anchor .octicon-link[data-v-e4e51a2c],\n.markdown-body h3:hover .anchor .octicon-link[data-v-e4e51a2c],\n.markdown-body h4:hover .anchor .octicon-link[data-v-e4e51a2c],\n.markdown-body h5:hover .anchor .octicon-link[data-v-e4e51a2c],\n.markdown-body h6:hover .anchor .octicon-link[data-v-e4e51a2c] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-e4e51a2c]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-e4e51a2c]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-e4e51a2c]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-e4e51a2c]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-e4e51a2c]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-e4e51a2c]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-e4e51a2c] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-e4e51a2c] {\n  display: block;\n}\n.markdown-body summary[data-v-e4e51a2c] {\n  display: list-item;\n}\n.markdown-body a[data-v-e4e51a2c] {\n  background-color: initial;\n}\n.markdown-body a[data-v-e4e51a2c]:active,\n.markdown-body a[data-v-e4e51a2c]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-e4e51a2c] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-e4e51a2c] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-e4e51a2c] {\n  border-style: none;\n}\n.markdown-body code[data-v-e4e51a2c],\n.markdown-body kbd[data-v-e4e51a2c],\n.markdown-body pre[data-v-e4e51a2c] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-e4e51a2c] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-e4e51a2c] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-e4e51a2c] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-e4e51a2c] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-e4e51a2c] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-e4e51a2c] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-e4e51a2c] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-e4e51a2c]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-e4e51a2c] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-e4e51a2c] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-e4e51a2c]:after,\n.markdown-body hr[data-v-e4e51a2c]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-e4e51a2c]:after {\n  clear: both;\n}\n.markdown-body table[data-v-e4e51a2c] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-e4e51a2c],\n.markdown-body th[data-v-e4e51a2c] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-e4e51a2c] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-e4e51a2c] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-e4e51a2c],\n.markdown-body h2[data-v-e4e51a2c],\n.markdown-body h3[data-v-e4e51a2c],\n.markdown-body h4[data-v-e4e51a2c],\n.markdown-body h5[data-v-e4e51a2c],\n.markdown-body h6[data-v-e4e51a2c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-e4e51a2c] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-e4e51a2c],\n.markdown-body h2[data-v-e4e51a2c] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-e4e51a2c] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-e4e51a2c] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-e4e51a2c],\n.markdown-body h4[data-v-e4e51a2c] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-e4e51a2c] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-e4e51a2c] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-e4e51a2c],\n.markdown-body h6[data-v-e4e51a2c] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-e4e51a2c] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-e4e51a2c] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-e4e51a2c] {\n  margin: 0;\n}\n.markdown-body ol[data-v-e4e51a2c],\n.markdown-body ul[data-v-e4e51a2c] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-e4e51a2c],\n.markdown-body ul ol[data-v-e4e51a2c] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-e4e51a2c],\n.markdown-body ol ul ol[data-v-e4e51a2c],\n.markdown-body ul ol ol[data-v-e4e51a2c],\n.markdown-body ul ul ol[data-v-e4e51a2c] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-e4e51a2c] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-e4e51a2c],\n.markdown-body pre[data-v-e4e51a2c] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-e4e51a2c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-e4e51a2c]::-webkit-inner-spin-button,\n.markdown-body input[data-v-e4e51a2c]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-e4e51a2c] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-e4e51a2c] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-e4e51a2c] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-e4e51a2c] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-e4e51a2c] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-e4e51a2c] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-e4e51a2c] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-e4e51a2c] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-e4e51a2c] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-e4e51a2c] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-e4e51a2c] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-e4e51a2c] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-e4e51a2c] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-e4e51a2c] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-e4e51a2c] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-e4e51a2c],\n.markdown-body .px-3[data-v-e4e51a2c] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-e4e51a2c] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-e4e51a2c] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-e4e51a2c] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-e4e51a2c] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-e4e51a2c] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-e4e51a2c] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-e4e51a2c] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-e4e51a2c] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-e4e51a2c],\n.markdown-body .pl-s .pl-v[data-v-e4e51a2c] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-e4e51a2c],\n.markdown-body .pl-en[data-v-e4e51a2c] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-e4e51a2c],\n.markdown-body .pl-smi[data-v-e4e51a2c] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-e4e51a2c] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-e4e51a2c] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-e4e51a2c],\n.markdown-body .pl-s[data-v-e4e51a2c],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-e4e51a2c],\n.markdown-body .pl-sr[data-v-e4e51a2c],\n.markdown-body .pl-sr .pl-cce[data-v-e4e51a2c],\n.markdown-body .pl-sr .pl-sra[data-v-e4e51a2c],\n.markdown-body .pl-sr .pl-sre[data-v-e4e51a2c] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-e4e51a2c],\n.markdown-body .pl-v[data-v-e4e51a2c] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-e4e51a2c] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-e4e51a2c] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-e4e51a2c] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-e4e51a2c]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-e4e51a2c] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-e4e51a2c] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-e4e51a2c],\n.markdown-body .pl-mh .pl-en[data-v-e4e51a2c],\n.markdown-body .pl-ms[data-v-e4e51a2c] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-e4e51a2c] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-e4e51a2c] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-e4e51a2c] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-e4e51a2c] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-e4e51a2c] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-e4e51a2c] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-e4e51a2c] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-e4e51a2c] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-e4e51a2c] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-e4e51a2c] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-e4e51a2c] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-e4e51a2c] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-e4e51a2c] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-e4e51a2c] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-e4e51a2c] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-e4e51a2c] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-e4e51a2c] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-e4e51a2c] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-e4e51a2c] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-e4e51a2c] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-e4e51a2c] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-e4e51a2c] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-e4e51a2c] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-e4e51a2c] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-e4e51a2c] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-e4e51a2c] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-e4e51a2c] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-e4e51a2c] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-e4e51a2c] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-e4e51a2c] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-e4e51a2c]:after,\n.markdown-body[data-v-e4e51a2c]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-e4e51a2c]:after {\n  clear: both;\n}\n.markdown-body[data-v-e4e51a2c]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-e4e51a2c]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-e4e51a2c]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-e4e51a2c],\n.markdown-body details[data-v-e4e51a2c],\n.markdown-body dl[data-v-e4e51a2c],\n.markdown-body ol[data-v-e4e51a2c],\n.markdown-body p[data-v-e4e51a2c],\n.markdown-body pre[data-v-e4e51a2c],\n.markdown-body table[data-v-e4e51a2c],\n.markdown-body ul[data-v-e4e51a2c] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-e4e51a2c] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-e4e51a2c] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-e4e51a2c]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-e4e51a2c]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-e4e51a2c],\n.markdown-body h2[data-v-e4e51a2c],\n.markdown-body h3[data-v-e4e51a2c],\n.markdown-body h4[data-v-e4e51a2c],\n.markdown-body h5[data-v-e4e51a2c],\n.markdown-body h6[data-v-e4e51a2c] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-e4e51a2c] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-e4e51a2c],\n.markdown-body h2[data-v-e4e51a2c] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-e4e51a2c] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-e4e51a2c] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-e4e51a2c] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-e4e51a2c] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-e4e51a2c] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-e4e51a2c],\n.markdown-body ul[data-v-e4e51a2c] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-e4e51a2c],\n.markdown-body ol ul[data-v-e4e51a2c],\n.markdown-body ul ol[data-v-e4e51a2c],\n.markdown-body ul ul[data-v-e4e51a2c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-e4e51a2c] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-e4e51a2c] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-e4e51a2c] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-e4e51a2c] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-e4e51a2c] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-e4e51a2c] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-e4e51a2c] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-e4e51a2c] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-e4e51a2c],\n.markdown-body table th[data-v-e4e51a2c] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-e4e51a2c] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-e4e51a2c]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-e4e51a2c] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-e4e51a2c] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-e4e51a2c] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-e4e51a2c] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-e4e51a2c] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-e4e51a2c] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-e4e51a2c] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-e4e51a2c] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-e4e51a2c],\n.markdown-body pre[data-v-e4e51a2c] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-e4e51a2c] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-e4e51a2c] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-e4e51a2c]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-e4e51a2c] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-e4e51a2c] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-e4e51a2c] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-e4e51a2c]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-e4e51a2c]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-e4e51a2c] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-e4e51a2c] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-e4e51a2c],\n.markdown-body .pl-token[data-v-e4e51a2c]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-e4e51a2c] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-e4e51a2c] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-e4e51a2c] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-e4e51a2c] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-e4e51a2c] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-e4e51a2c] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-e4e51a2c] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-e4e51a2c] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-e4e51a2c] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-e4e51a2c] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-e4e51a2c] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-e4e51a2c] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-e4e51a2c] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-e4e51a2c] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-e4e51a2c] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=e},29828:(n,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>b});var e=o(90487),t=o(80987);const d={components:{MProgressBar:e.v,MText:t.H},data:()=>({color:"#000",progress:50}),computed:{},methods:{}};var r=o(29979),i=o.n(r),c=o(51900);const l=(0,c.Z)(d,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{class:n.$s.Container},[o("div",{class:n.$s.Section},[o("label",[n._v("\n\t\t\tColor picker\n\t\t\t"),o("input",{directives:[{name:"model",rawName:"v-model",value:n.color,expression:"color"}],attrs:{type:"color"},domProps:{value:n.color},on:{input:function(a){a.target.composing||(n.color=a.target.value)}}})])]),n._v(" "),o("div",{class:n.$s.Section},[o("label",[n._v("\n\t\t\tProgress ("+n._s(n.progress)+"%)\n\t\t\t"),o("input",{directives:[{name:"model",rawName:"v-model",value:n.progress,expression:"progress"}],attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:n.progress},on:{__r:function(a){n.progress=a.target.value}}})])]),n._v(" "),n._l(["pill","rounded","squared"],(function(a){return o("div",{key:a,class:n.$s.Sizes},[o("m-text",{attrs:{pattern:"title",size:2}},[n._v("\n\t\t\t"+n._s(a)+" shape\n\t\t")]),n._v(" "),n._l(["xsmall","small","medium","large"],(function(e){return o("div",{key:e},[o("m-text",{attrs:{pattern:"title",size:0}},[n._v("\n\t\t\t\t"+n._s(e)+"\n\t\t\t")]),n._v(" "),o("m-progress-bar",{attrs:{shape:a,size:e,color:n.color,progress:n.progress}})],1)}))],2)}))],2)}),[],!1,(function(n){this.$s=i().locals||i()}),null,null).exports;var m=o(415);const s={components:{Demo0:l,DemoCollapse:m.DemoCollapse,SrcFile:m.SrcFile}};o(59168);const b=(0,c.Z)(s,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(1)}),[function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("size")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'medium'")])]),n._v(" "),o("td",[o("code",[n._v("xsmall")]),n._v(", "),o("code",[n._v("small")]),n._v(", "),o("code",[n._v("medium")]),n._v(", "),o("code",[n._v("large")])]),n._v(" "),o("td",[n._v("Size (height) of the progress bar")])]),n._v(" "),o("tr",[o("td",[n._v("shape")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'rounded'")])]),n._v(" "),o("td",[o("code",[n._v("squared")]),n._v(", "),o("code",[n._v("rounded")]),n._v(", "),o("code",[n._v("pill")])]),n._v(" "),o("td",[n._v("Shape of the progress bar")])]),n._v(" "),o("tr",[o("td",[n._v("color")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'#000'")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Color of the progress bar (not background)")])]),n._v(" "),o("tr",[o("td",[n._v("progress")]),n._v(" "),o("td",[o("code",[n._v("number")])]),n._v(" "),o("td",[o("code",[n._v("0")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Progress/width of the bar (0-100)")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Progress Bar")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div :class="$s.Container">\n\t\t<div :class="$s.Section">\n\t\t\t<label>\n\t\t\t\tColor picker\n\t\t\t\t<input\n\t\t\t\t\tv-model="color"\n\t\t\t\t\ttype="color"\n\t\t\t\t>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div :class="$s.Section">\n\t\t\t<label>\n\t\t\t\tProgress ({{ progress }}%)\n\t\t\t\t<input\n\t\t\t\t\tv-model="progress"\n\t\t\t\t\ttype="range"\n\t\t\t\t\tstep="1"\n\t\t\t\t\tmin="0"\n\t\t\t\t\tmax="100"\n\t\t\t\t>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div\n\t\t\tv-for="shape in [\'pill\', \'rounded\', \'squared\']"\n\t\t\t:key="shape"\n\t\t\t:class="$s.Sizes"\n\t\t>\n\t\t\t<m-text\n\t\t\t\tpattern="title"\n\t\t\t\t:size="2"\n\t\t\t>\n\t\t\t\t{{ shape }} shape\n\t\t\t</m-text>\n\n\t\t\t<div\n\t\t\t\tv-for="size in [\'xsmall\', \'small\', \'medium\', \'large\']"\n\t\t\t\t:key="size"\n\t\t\t>\n\t\t\t\t<m-text\n\t\t\t\t\tpattern="title"\n\t\t\t\t\t:size="0"\n\t\t\t\t>\n\t\t\t\t\t{{ size }}\n\t\t\t\t</m-text>\n\t\t\t\t<m-progress-bar\n\t\t\t\t\t:shape="shape"\n\t\t\t\t\t:size="size"\n\t\t\t\t\t:color="color"\n\t\t\t\t\t:progress="progress"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { MProgressBar } from \'@square/maker/components/ProgressBar\';\nimport { MText } from \'@square/maker/components/Text\';\n\nexport default {\n\tcomponents: {\n\t\tMProgressBar,\n\t\tMText,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tcolor: \'#000\',\n\t\t\tprogress: 50,\n\t\t};\n\t},\n\n\tcomputed: {},\n\n\tmethods: {},\n};\n<\/script>\n\n<style module="$s">\n.Container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\tmax-width: 500px;\n}\n\n.Sizes {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n}\n\n</style>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(0)],1)}],!1,null,"e4e51a2c",null).exports},29979:(n,a,o)=>{var e=o(83655);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals);(0,o(54023).Z)("7723eae3",e,!0,{})},3619:(n,a,o)=>{var e=o(59802);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals);(0,o(54023).Z)("2b496f20",e,!0,{})},59168:(n,a,o)=>{var e=o(23640);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals);(0,o(54023).Z)("482aba08",e,!0,{})}}]);