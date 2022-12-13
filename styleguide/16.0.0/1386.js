(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[1386],{70990:(n,a,t)=>{"use strict";t.d(a,{H:()=>l});var o=t(2606),e=t(27060);const d={inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:n=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(n)},size:{type:Number,default:void 0,validator:n=>n>=-2&&n<=7},fontFamily:{type:String,default:void 0,validator:(0,e.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,e.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,e.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,e.Z)("line-height")},color:{type:String,default:void 0,validator:(0,e.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,e.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,e.Z)("text-transform")},textDecoration:{type:String,default:void 0,validator:(0,e.Z)("text-decoration")},textAlign:{type:String,default:void 0,validator:(0,e.Z)("text-align")}},computed:{...(0,o.C9)("text",["pattern","element","size","fontFamily","fontWeight","fontSize","color","fontStyle","textTransform","textDecoration","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:n}=this.theme,a={fontSize:this.resolvedFontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":n.baseSize,"--mobile-font-size-scale":n.sizeScale};return"inherit"!==this.resolvedFontFamily&&(a.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(a.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(a.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(a.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(a.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextDecoration&&(a.textDecoration=this.resolvedTextDecoration),"inherit"!==this.resolvedTextAlign&&(a.textAlign=this.resolvedTextAlign),a}},render(n){const{$s:a,tag:t,sizeClass:o,inlineStyles:e}=this,d=this.$slots.default;return n(t,{class:[a.Text,a["size_".concat(o)]],attrs:this.$attrs,style:e,on:this.$listeners},d)}};var r=t(7493),i=t.n(r);const l=(0,t(51900).Z)(d,undefined,undefined,!1,(function(n){this.$s=i().locals||i()}),null,null).exports},27060:(n,a,t)=>{"use strict";t.d(a,{Z:()=>o});const o=function(n){return function(a){return!t.g.CSS||t.g.CSS.supports(n,a)}}},62716:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),o.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},n.exports=o},21085:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,'\n.markdown-body .octicon[data-v-412c2758] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-412c2758] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-412c2758]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-412c2758],\n.markdown-body h2 .octicon-link[data-v-412c2758],\n.markdown-body h3 .octicon-link[data-v-412c2758],\n.markdown-body h4 .octicon-link[data-v-412c2758],\n.markdown-body h5 .octicon-link[data-v-412c2758],\n.markdown-body h6 .octicon-link[data-v-412c2758] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-412c2758],\n.markdown-body h2:hover .anchor[data-v-412c2758],\n.markdown-body h3:hover .anchor[data-v-412c2758],\n.markdown-body h4:hover .anchor[data-v-412c2758],\n.markdown-body h5:hover .anchor[data-v-412c2758],\n.markdown-body h6:hover .anchor[data-v-412c2758] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-412c2758],\n.markdown-body h2:hover .anchor .octicon-link[data-v-412c2758],\n.markdown-body h3:hover .anchor .octicon-link[data-v-412c2758],\n.markdown-body h4:hover .anchor .octicon-link[data-v-412c2758],\n.markdown-body h5:hover .anchor .octicon-link[data-v-412c2758],\n.markdown-body h6:hover .anchor .octicon-link[data-v-412c2758] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-412c2758]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-412c2758]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-412c2758]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-412c2758]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-412c2758]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-412c2758]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-412c2758] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-412c2758] {\n  display: block;\n}\n.markdown-body summary[data-v-412c2758] {\n  display: list-item;\n}\n.markdown-body a[data-v-412c2758] {\n  background-color: initial;\n}\n.markdown-body a[data-v-412c2758]:active,\n.markdown-body a[data-v-412c2758]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-412c2758] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-412c2758] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-412c2758] {\n  border-style: none;\n}\n.markdown-body code[data-v-412c2758],\n.markdown-body kbd[data-v-412c2758],\n.markdown-body pre[data-v-412c2758] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-412c2758] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-412c2758] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-412c2758] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-412c2758] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-412c2758] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-412c2758] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-412c2758] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-412c2758]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-412c2758] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-412c2758] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-412c2758]:after,\n.markdown-body hr[data-v-412c2758]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-412c2758]:after {\n  clear: both;\n}\n.markdown-body table[data-v-412c2758] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-412c2758],\n.markdown-body th[data-v-412c2758] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-412c2758] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-412c2758] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-412c2758],\n.markdown-body h2[data-v-412c2758],\n.markdown-body h3[data-v-412c2758],\n.markdown-body h4[data-v-412c2758],\n.markdown-body h5[data-v-412c2758],\n.markdown-body h6[data-v-412c2758] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-412c2758] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-412c2758],\n.markdown-body h2[data-v-412c2758] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-412c2758] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-412c2758] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-412c2758],\n.markdown-body h4[data-v-412c2758] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-412c2758] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-412c2758] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-412c2758],\n.markdown-body h6[data-v-412c2758] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-412c2758] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-412c2758] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-412c2758] {\n  margin: 0;\n}\n.markdown-body ol[data-v-412c2758],\n.markdown-body ul[data-v-412c2758] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-412c2758],\n.markdown-body ul ol[data-v-412c2758] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-412c2758],\n.markdown-body ol ul ol[data-v-412c2758],\n.markdown-body ul ol ol[data-v-412c2758],\n.markdown-body ul ul ol[data-v-412c2758] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-412c2758] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-412c2758],\n.markdown-body pre[data-v-412c2758] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-412c2758] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-412c2758]::-webkit-inner-spin-button,\n.markdown-body input[data-v-412c2758]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-412c2758] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-412c2758] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-412c2758] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-412c2758] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-412c2758] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-412c2758] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-412c2758] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-412c2758] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-412c2758] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-412c2758] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-412c2758] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-412c2758] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-412c2758] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-412c2758] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-412c2758] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-412c2758],\n.markdown-body .px-3[data-v-412c2758] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-412c2758] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-412c2758] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-412c2758] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-412c2758] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-412c2758] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-412c2758] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-412c2758] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-412c2758] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-412c2758],\n.markdown-body .pl-s .pl-v[data-v-412c2758] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-412c2758],\n.markdown-body .pl-en[data-v-412c2758] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-412c2758],\n.markdown-body .pl-smi[data-v-412c2758] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-412c2758] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-412c2758] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-412c2758],\n.markdown-body .pl-s[data-v-412c2758],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-412c2758],\n.markdown-body .pl-sr[data-v-412c2758],\n.markdown-body .pl-sr .pl-cce[data-v-412c2758],\n.markdown-body .pl-sr .pl-sra[data-v-412c2758],\n.markdown-body .pl-sr .pl-sre[data-v-412c2758] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-412c2758],\n.markdown-body .pl-v[data-v-412c2758] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-412c2758] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-412c2758] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-412c2758] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-412c2758]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-412c2758] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-412c2758] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-412c2758],\n.markdown-body .pl-mh .pl-en[data-v-412c2758],\n.markdown-body .pl-ms[data-v-412c2758] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-412c2758] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-412c2758] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-412c2758] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-412c2758] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-412c2758] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-412c2758] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-412c2758] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-412c2758] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-412c2758] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-412c2758] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-412c2758] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-412c2758] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-412c2758] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-412c2758] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-412c2758] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-412c2758] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-412c2758] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-412c2758] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-412c2758] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-412c2758] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-412c2758] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-412c2758] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-412c2758] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-412c2758] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-412c2758] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-412c2758] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-412c2758] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-412c2758] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-412c2758] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-412c2758] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-412c2758]:after,\n.markdown-body[data-v-412c2758]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-412c2758]:after {\n  clear: both;\n}\n.markdown-body[data-v-412c2758]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-412c2758]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-412c2758]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-412c2758],\n.markdown-body details[data-v-412c2758],\n.markdown-body dl[data-v-412c2758],\n.markdown-body ol[data-v-412c2758],\n.markdown-body p[data-v-412c2758],\n.markdown-body pre[data-v-412c2758],\n.markdown-body table[data-v-412c2758],\n.markdown-body ul[data-v-412c2758] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-412c2758] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-412c2758] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-412c2758]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-412c2758]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-412c2758],\n.markdown-body h2[data-v-412c2758],\n.markdown-body h3[data-v-412c2758],\n.markdown-body h4[data-v-412c2758],\n.markdown-body h5[data-v-412c2758],\n.markdown-body h6[data-v-412c2758] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-412c2758] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-412c2758],\n.markdown-body h2[data-v-412c2758] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-412c2758] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-412c2758] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-412c2758] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-412c2758] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-412c2758] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-412c2758],\n.markdown-body ul[data-v-412c2758] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-412c2758],\n.markdown-body ol ul[data-v-412c2758],\n.markdown-body ul ol[data-v-412c2758],\n.markdown-body ul ul[data-v-412c2758] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-412c2758] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-412c2758] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-412c2758] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-412c2758] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-412c2758] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-412c2758] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-412c2758] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-412c2758] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-412c2758],\n.markdown-body table th[data-v-412c2758] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-412c2758] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-412c2758]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-412c2758] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-412c2758] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-412c2758] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-412c2758] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-412c2758] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-412c2758] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-412c2758] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-412c2758] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-412c2758],\n.markdown-body pre[data-v-412c2758] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-412c2758] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-412c2758] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-412c2758]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-412c2758] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-412c2758] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-412c2758] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-412c2758]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-412c2758]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-412c2758] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-412c2758] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-412c2758],\n.markdown-body .pl-token[data-v-412c2758]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-412c2758] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-412c2758] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-412c2758] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-412c2758] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-412c2758] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-412c2758] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-412c2758] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-412c2758] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-412c2758] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-412c2758] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-412c2758] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-412c2758] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-412c2758] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-412c2758] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-412c2758] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=o},91386:(n,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});var o=t(70990);const e={components:{MText:o.H}};var d=t(51900);const r=(0,d.Z)(e,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",n._l([7,6,5,4,3,2,1,0,-1,-2],(function(a){return t("m-text",{key:a,attrs:{size:a}},[n._v("\n\t\tText (Size "+n._s(a)+")\n\t")])})),1)}),[],!1,null,null,null).exports;var i=t(415);const l={components:{MText:o.H}};const c=(0,d.Z)(l,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",n._l(["headline","title","paragraph","label"],(function(a){return t("m-text",{key:a,attrs:{pattern:a}},[n._v("\n\t\tText (Pattern "+n._s(a)+")\n\t")])})),1)}),[],!1,null,null,null).exports,v={components:{Demo0:r,DemoCollapse:i.DemoCollapse,SrcFile:i.SrcFile,Demo1:c}};t(44995);const s=(0,d.Z)(v,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(4)}),[function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("p",[n._v("There are four text patterns by default: headline, title, paragraph, label. These can be customized via the "),t("a",{attrs:{href:"#/Theme"}},[n._v("Theme")]),n._v(".")])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("p",[n._v("Themable props* can be configured via the "),t("a",{attrs:{href:"#/Theme"}},[n._v("Theme")]),n._v(" component using the key "),t("code",[n._v("text")]),n._v(".")])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[n._v("Prop")]),n._v(" "),t("th",[n._v("Type")]),n._v(" "),t("th",[n._v("Default")]),n._v(" "),t("th",[n._v("Possible values")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("pattern*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'paragraph'")])]),n._v(" "),t("td",[t("code",[n._v("'headline'")]),n._v(", "),t("code",[n._v("'title'")]),n._v(", "),t("code",[n._v("'paragraph'")]),n._v(", "),t("code",[n._v("'label'")]),n._v(", "),t("code",[n._v("'buttonLabel'")]),n._v(", any custom pattern defined within the theme")]),n._v(" "),t("td",[n._v("patterns are defined at the theme level")])]),n._v(" "),t("tr",[t("td",[n._v("element*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'p'")])]),n._v(" "),t("td",[t("code",[n._v("'h1'")]),n._v(", "),t("code",[n._v("'h2'")]),n._v(", "),t("code",[n._v("'h3'")]),n._v(", "),t("code",[n._v("'h4'")]),n._v(", "),t("code",[n._v("'h5'")]),n._v(", "),t("code",[n._v("'h6'")]),n._v(", "),t("code",[n._v("'p'")]),n._v(", "),t("code",[n._v("'span'")]),n._v(", "),t("code",[n._v("'div'")]),n._v(", "),t("code",[n._v("'li'")])]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"}},[n._v("HTML Element")])])]),n._v(" "),t("tr",[t("td",[n._v("size*")]),n._v(" "),t("td",[t("code",[n._v("number")])]),n._v(" "),t("td",[t("code",[n._v("0")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[n._v("Size of text as step in fluid scale (-2 to 7)")])]),n._v(" "),t("tr",[t("td",[n._v("font-family*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'inherit'")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-family"}},[n._v("Font family")])])]),n._v(" "),t("tr",[t("td",[n._v("font-weight*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'400'")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"}},[n._v("Font weight")])])]),n._v(" "),t("tr",[t("td",[n._v("font-size*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-size"}},[n._v("Font size")]),n._v(". Overrides the "),t("code",[n._v("size")]),n._v(" prop, and disables type scaling.")])]),n._v(" "),t("tr",[t("td",[n._v("line-height")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"}},[n._v("Line height")]),n._v(". Overrides the internally calculated line height.")])]),n._v(" "),t("tr",[t("td",[n._v("color*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'#000000'")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color"}},[n._v("Color")])])]),n._v(" "),t("tr",[t("td",[n._v("font-style*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'inherit'")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-style"}},[n._v("Font style")])])]),n._v(" "),t("tr",[t("td",[n._v("text-transform*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'inherit'")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform"}},[n._v("Text transform")])])]),n._v(" "),t("tr",[t("td",[n._v("text-decoration*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"}},[n._v("Text decoration")])])]),n._v(" "),t("tr",[t("td",[n._v("text-align*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'inherit'")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"}},[n._v("Text align")])])])])])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[n._v("Slot")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("default")]),n._v(" "),t("td",[n._v("text content")])])])])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h1",[n._v("Text")]),n._v(" "),t("p",[n._v("Use the Text component for text.")]),n._v(" "),t("h2",[n._v("Sizes")]),n._v(" "),t("p",[n._v("There are 10 text sizes: -2 to 7.")]),n._v(" "),t("demo-collapse",[t("Demo0"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<m-text\n\t\t\tv-for="size in [7, 6, 5, 4, 3, 2, 1, 0, -1, -2]"\n\t\t\t:key="size"\n\t\t\t:size="size"\n\t\t>\n\t\t\tText (Size {{ size }})\n\t\t</m-text>\n\t</div>\n</template>\n\n<script>\nimport { MText } from \'@square/maker/components/Text\';\n\nexport default {\n\tcomponents: {\n\t\tMText,\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),t("h2",[n._v("Patterns")]),n._v(" "),n._m(0),n._v(" "),t("demo-collapse",[t("Demo1"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<div>\n\t\t<m-text\n\t\t\tv-for=\"pattern in ['headline', 'title', 'paragraph', 'label']\"\n\t\t\t:key=\"pattern\"\n\t\t\t:pattern=\"pattern\"\n\t\t>\n\t\t\tText (Pattern {{ pattern }})\n\t\t</m-text>\n\t</div>\n</template>\n\n<script>\nimport { MText } from '@square/maker/components/Text';\n\nexport default {\n\tcomponents: {\n\t\tMText,\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),t("h2",[n._v("Props")]),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),t("h2",[n._v("Slots")]),n._v(" "),n._m(3)],1)}],!1,null,"412c2758",null).exports},7493:(n,a,t)=>{var o=t(62716);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("8cb0142e",o,!0,{})},44995:(n,a,t)=>{var o=t(21085);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("46354346",o,!0,{})}}]);