(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9041],{89507:(a,n,d)=>{"use strict";d.d(n,{v:()=>l});var t=d(2606),e=d(27060);const o={inject:{theme:{default:(0,t.uH)(),from:t.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},size:{type:String,default:void 0,validator:a=>["xsmall","small","medium","large"].includes(a)},shape:{type:String,default:void 0,validator:a=>["squared","rounded","pill"].includes(a)},color:{type:String,default:void 0,validator:(0,e.Z)("color")},progress:{type:Number,default:0,validator:a=>a>=0&&a<=100}},computed:{...(0,t.C9)("progressbar",["pattern","color","size","shape"]),barStyles(){return{"--bar-color":this.resolvedColor,"--fill-percent":"".concat(this.progress,"%")}}}};var r=d(3619),i=d.n(r);const l=(0,d(51900).Z)(o,(function(){var a=this,n=a.$createElement,d=a._self._c||n;return d("div",a._g(a._b({class:[a.$s.ProgressBarContainer,a.$s["size_"+a.resolvedSize],a.$s["shape_"+a.resolvedShape]],attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":a.progress}},"div",a.$attrs,!1),a.$listeners),[d("div",{class:[a.$s.ProgressBar,a.$s["shape_"+a.resolvedShape]],style:a.barStyles})])}),[],!1,(function(a){this.$s=i().locals||i()}),null,null).exports},70990:(a,n,d)=>{"use strict";d.d(n,{H:()=>l});var t=d(2606),e=d(27060);const o={inject:{theme:{default:(0,t.uH)(),from:t.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:a=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(a)},size:{type:Number,default:void 0,validator:a=>a>=-2&&a<=7},fontFamily:{type:String,default:void 0,validator:(0,e.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,e.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,e.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,e.Z)("line-height")},color:{type:String,default:void 0,validator:(0,e.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,e.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,e.Z)("text-transform")},textDecoration:{type:String,default:void 0,validator:(0,e.Z)("text-decoration")},textAlign:{type:String,default:void 0,validator:(0,e.Z)("text-align")}},computed:{...(0,t.C9)("text",["pattern","element","size","fontFamily","fontWeight","fontSize","color","fontStyle","textTransform","textDecoration","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:a}=this.theme,n={fontSize:this.resolvedFontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":a.baseSize,"--mobile-font-size-scale":a.sizeScale};return"inherit"!==this.resolvedFontFamily&&(n.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(n.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(n.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(n.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(n.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextDecoration&&(n.textDecoration=this.resolvedTextDecoration),"inherit"!==this.resolvedTextAlign&&(n.textAlign=this.resolvedTextAlign),n}},render(a){const{$s:n,tag:d,sizeClass:t,inlineStyles:e}=this,o=this.$slots.default;return a(d,{class:[n.Text,n["size_".concat(t)]],attrs:this.$attrs,style:e,on:this.$listeners},o)}};var r=d(7493),i=d.n(r);const l=(0,d(51900).Z)(o,undefined,undefined,!1,(function(a){this.$s=i().locals||i()}),null,null).exports},27060:(a,n,d)=>{"use strict";d.d(n,{Z:()=>t});const t=function(a){return function(n){return!d.g.CSS||d.g.CSS.supports(a,n)}}},59802:(a,n,d)=>{var t=d(77705)((function(a){return a[1]}));t.push([a.id,"\n.ProgressBarContainer__cJD1 {\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground-color: var(--maker-color-neutral-10, #f1f1f1);\n\tborder-radius: var(--maker-default-border-radius, 16px)\n}\n.ProgressBarContainer__cJD1.shape_squared_gzT9x {\n\t\tborder-radius: 0;\n}\n.ProgressBarContainer__cJD1.shape_rounded_NBloK,\n\t.ProgressBarContainer__cJD1.shape_pill_wddxw {\n\t\tborder-radius: 16px;\n}\n.ProgressBar_aeQRL {\n\twidth: var(--fill-percent, 0);\n\theight: 100%;\n\tcolor: var(--bar-color);\n\tbackground-color: currentColor;\n\tborder-radius: var(--maker-default-border-radius, 16px);\n\ttransition: width 100ms linear\n}\n.ProgressBar_aeQRL.shape_squared_gzT9x {\n\t\tborder-radius: 0;\n}\n.ProgressBar_aeQRL.shape_rounded_NBloK,\n\t.ProgressBar_aeQRL.shape_pill_wddxw {\n\t\tborder-radius: 16px;\n}\n.ProgressBarContainer__cJD1.size_xsmall_xhxJO {\n\theight: 4px;\n}\n.ProgressBarContainer__cJD1.size_small_SYTJI {\n\theight: 8px;\n}\n.ProgressBarContainer__cJD1.size_medium__TVkx {\n\theight: 12px;\n}\n.ProgressBarContainer__cJD1.size_large_dC33B {\n\theight: 16px;\n}\n",""]),t.locals={ProgressBarContainer:"ProgressBarContainer__cJD1",shape_squared:"shape_squared_gzT9x",shape_rounded:"shape_rounded_NBloK",shape_pill:"shape_pill_wddxw",ProgressBar:"ProgressBar_aeQRL",size_xsmall:"size_xsmall_xhxJO",size_small:"size_small_SYTJI",size_medium:"size_medium__TVkx",size_large:"size_large_dC33B"},a.exports=t},62716:(a,n,d)=>{var t=d(77705)((function(a){return a[1]}));t.push([a.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),t.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},a.exports=t},81924:(a,n,d)=>{var t=d(77705)((function(a){return a[1]}));t.push([a.id,'\n.markdown-body .octicon[data-v-2a5dedaf] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-2a5dedaf] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-2a5dedaf]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-2a5dedaf],\n.markdown-body h2 .octicon-link[data-v-2a5dedaf],\n.markdown-body h3 .octicon-link[data-v-2a5dedaf],\n.markdown-body h4 .octicon-link[data-v-2a5dedaf],\n.markdown-body h5 .octicon-link[data-v-2a5dedaf],\n.markdown-body h6 .octicon-link[data-v-2a5dedaf] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-2a5dedaf],\n.markdown-body h2:hover .anchor[data-v-2a5dedaf],\n.markdown-body h3:hover .anchor[data-v-2a5dedaf],\n.markdown-body h4:hover .anchor[data-v-2a5dedaf],\n.markdown-body h5:hover .anchor[data-v-2a5dedaf],\n.markdown-body h6:hover .anchor[data-v-2a5dedaf] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-2a5dedaf],\n.markdown-body h2:hover .anchor .octicon-link[data-v-2a5dedaf],\n.markdown-body h3:hover .anchor .octicon-link[data-v-2a5dedaf],\n.markdown-body h4:hover .anchor .octicon-link[data-v-2a5dedaf],\n.markdown-body h5:hover .anchor .octicon-link[data-v-2a5dedaf],\n.markdown-body h6:hover .anchor .octicon-link[data-v-2a5dedaf] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-2a5dedaf]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-2a5dedaf]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-2a5dedaf]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-2a5dedaf]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-2a5dedaf]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-2a5dedaf]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-2a5dedaf] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-2a5dedaf] {\n  display: block;\n}\n.markdown-body summary[data-v-2a5dedaf] {\n  display: list-item;\n}\n.markdown-body a[data-v-2a5dedaf] {\n  background-color: initial;\n}\n.markdown-body a[data-v-2a5dedaf]:active,\n.markdown-body a[data-v-2a5dedaf]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-2a5dedaf] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-2a5dedaf] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-2a5dedaf] {\n  border-style: none;\n}\n.markdown-body code[data-v-2a5dedaf],\n.markdown-body kbd[data-v-2a5dedaf],\n.markdown-body pre[data-v-2a5dedaf] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-2a5dedaf] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-2a5dedaf] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-2a5dedaf] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-2a5dedaf] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-2a5dedaf] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-2a5dedaf] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-2a5dedaf] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-2a5dedaf]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-2a5dedaf] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-2a5dedaf] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-2a5dedaf]:after,\n.markdown-body hr[data-v-2a5dedaf]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-2a5dedaf]:after {\n  clear: both;\n}\n.markdown-body table[data-v-2a5dedaf] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-2a5dedaf],\n.markdown-body th[data-v-2a5dedaf] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-2a5dedaf] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-2a5dedaf] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-2a5dedaf],\n.markdown-body h2[data-v-2a5dedaf],\n.markdown-body h3[data-v-2a5dedaf],\n.markdown-body h4[data-v-2a5dedaf],\n.markdown-body h5[data-v-2a5dedaf],\n.markdown-body h6[data-v-2a5dedaf] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-2a5dedaf] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-2a5dedaf],\n.markdown-body h2[data-v-2a5dedaf] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-2a5dedaf] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-2a5dedaf] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-2a5dedaf],\n.markdown-body h4[data-v-2a5dedaf] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-2a5dedaf] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-2a5dedaf] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-2a5dedaf],\n.markdown-body h6[data-v-2a5dedaf] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-2a5dedaf] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-2a5dedaf] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-2a5dedaf] {\n  margin: 0;\n}\n.markdown-body ol[data-v-2a5dedaf],\n.markdown-body ul[data-v-2a5dedaf] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-2a5dedaf],\n.markdown-body ul ol[data-v-2a5dedaf] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-2a5dedaf],\n.markdown-body ol ul ol[data-v-2a5dedaf],\n.markdown-body ul ol ol[data-v-2a5dedaf],\n.markdown-body ul ul ol[data-v-2a5dedaf] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-2a5dedaf] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-2a5dedaf],\n.markdown-body pre[data-v-2a5dedaf] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-2a5dedaf] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-2a5dedaf]::-webkit-inner-spin-button,\n.markdown-body input[data-v-2a5dedaf]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-2a5dedaf] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-2a5dedaf] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-2a5dedaf] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-2a5dedaf] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-2a5dedaf] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-2a5dedaf] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-2a5dedaf] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-2a5dedaf] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-2a5dedaf] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-2a5dedaf] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-2a5dedaf] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-2a5dedaf] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-2a5dedaf] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-2a5dedaf] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-2a5dedaf] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-2a5dedaf],\n.markdown-body .px-3[data-v-2a5dedaf] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-2a5dedaf] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-2a5dedaf] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-2a5dedaf] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-2a5dedaf] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-2a5dedaf] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-2a5dedaf] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-2a5dedaf] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-2a5dedaf] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-2a5dedaf],\n.markdown-body .pl-s .pl-v[data-v-2a5dedaf] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-2a5dedaf],\n.markdown-body .pl-en[data-v-2a5dedaf] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-2a5dedaf],\n.markdown-body .pl-smi[data-v-2a5dedaf] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-2a5dedaf] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-2a5dedaf] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-2a5dedaf],\n.markdown-body .pl-s[data-v-2a5dedaf],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-2a5dedaf],\n.markdown-body .pl-sr[data-v-2a5dedaf],\n.markdown-body .pl-sr .pl-cce[data-v-2a5dedaf],\n.markdown-body .pl-sr .pl-sra[data-v-2a5dedaf],\n.markdown-body .pl-sr .pl-sre[data-v-2a5dedaf] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-2a5dedaf],\n.markdown-body .pl-v[data-v-2a5dedaf] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-2a5dedaf] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-2a5dedaf] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-2a5dedaf] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-2a5dedaf]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-2a5dedaf] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-2a5dedaf] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-2a5dedaf],\n.markdown-body .pl-mh .pl-en[data-v-2a5dedaf],\n.markdown-body .pl-ms[data-v-2a5dedaf] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-2a5dedaf] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-2a5dedaf] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-2a5dedaf] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-2a5dedaf] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-2a5dedaf] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-2a5dedaf] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-2a5dedaf] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-2a5dedaf] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-2a5dedaf] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-2a5dedaf] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-2a5dedaf] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-2a5dedaf] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-2a5dedaf] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-2a5dedaf] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-2a5dedaf] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-2a5dedaf] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-2a5dedaf] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-2a5dedaf] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-2a5dedaf] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-2a5dedaf] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-2a5dedaf] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-2a5dedaf] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-2a5dedaf] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-2a5dedaf] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-2a5dedaf] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-2a5dedaf] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-2a5dedaf] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-2a5dedaf] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-2a5dedaf] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-2a5dedaf] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-2a5dedaf]:after,\n.markdown-body[data-v-2a5dedaf]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-2a5dedaf]:after {\n  clear: both;\n}\n.markdown-body[data-v-2a5dedaf]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-2a5dedaf]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-2a5dedaf]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-2a5dedaf],\n.markdown-body details[data-v-2a5dedaf],\n.markdown-body dl[data-v-2a5dedaf],\n.markdown-body ol[data-v-2a5dedaf],\n.markdown-body p[data-v-2a5dedaf],\n.markdown-body pre[data-v-2a5dedaf],\n.markdown-body table[data-v-2a5dedaf],\n.markdown-body ul[data-v-2a5dedaf] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-2a5dedaf] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-2a5dedaf] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-2a5dedaf]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-2a5dedaf]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-2a5dedaf],\n.markdown-body h2[data-v-2a5dedaf],\n.markdown-body h3[data-v-2a5dedaf],\n.markdown-body h4[data-v-2a5dedaf],\n.markdown-body h5[data-v-2a5dedaf],\n.markdown-body h6[data-v-2a5dedaf] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-2a5dedaf] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-2a5dedaf],\n.markdown-body h2[data-v-2a5dedaf] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-2a5dedaf] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-2a5dedaf] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-2a5dedaf] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-2a5dedaf] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-2a5dedaf] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-2a5dedaf],\n.markdown-body ul[data-v-2a5dedaf] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-2a5dedaf],\n.markdown-body ol ul[data-v-2a5dedaf],\n.markdown-body ul ol[data-v-2a5dedaf],\n.markdown-body ul ul[data-v-2a5dedaf] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-2a5dedaf] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-2a5dedaf] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-2a5dedaf] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-2a5dedaf] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-2a5dedaf] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-2a5dedaf] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-2a5dedaf] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-2a5dedaf] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-2a5dedaf],\n.markdown-body table th[data-v-2a5dedaf] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-2a5dedaf] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-2a5dedaf]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-2a5dedaf] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-2a5dedaf] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-2a5dedaf] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-2a5dedaf] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-2a5dedaf] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-2a5dedaf] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-2a5dedaf] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-2a5dedaf] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-2a5dedaf],\n.markdown-body pre[data-v-2a5dedaf] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-2a5dedaf] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-2a5dedaf] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-2a5dedaf]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-2a5dedaf] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-2a5dedaf] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-2a5dedaf] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-2a5dedaf]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-2a5dedaf]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-2a5dedaf] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-2a5dedaf] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-2a5dedaf],\n.markdown-body .pl-token[data-v-2a5dedaf]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-2a5dedaf] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-2a5dedaf] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-2a5dedaf] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-2a5dedaf] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-2a5dedaf] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-2a5dedaf] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-2a5dedaf] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-2a5dedaf] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-2a5dedaf] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-2a5dedaf] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-2a5dedaf] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-2a5dedaf] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-2a5dedaf] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-2a5dedaf] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-2a5dedaf] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),a.exports=t},89463:(a,n,d)=>{var t=d(77705)((function(a){return a[1]}));t.push([a.id,"\n.demo[data-v-6990dd98] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgrid-gap: 32px;\n\tmax-width: 500px;\n}\n.sizes[data-v-6990dd98] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgrid-gap: 12px;\n}\n",""]),a.exports=t},69041:(a,n,d)=>{"use strict";d.r(n),d.d(n,{default:()=>m});var t=d(89507),e=d(70990);const o={components:{MProgressBar:t.v,MText:e.H},data:()=>({progress:50})};d(35105);var r=d(51900);const i=(0,r.Z)(o,(function(){var a=this,n=a.$createElement,d=a._self._c||n;return d("div",{staticClass:"demo"},[d("div",[d("label",[a._v("\n\t\t\tProgress ("+a._s(a.progress)+"%)\n\t\t\t"),d("input",{directives:[{name:"model",rawName:"v-model",value:a.progress,expression:"progress"}],attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:a.progress},on:{__r:function(n){a.progress=n.target.value}}})])]),a._v(" "),a._l(["pill","rounded","squared"],(function(n){return d("div",{key:n,staticClass:"sizes"},[d("m-text",{attrs:{pattern:"title",size:2}},[a._v("\n\t\t\t"+a._s(n)+" shape\n\t\t")]),a._v(" "),a._l(["xsmall","small","medium","large"],(function(t){return d("div",{key:t},[d("m-text",{attrs:{pattern:"title",size:0}},[a._v("\n\t\t\t\t"+a._s(t)+"\n\t\t\t")]),a._v(" "),d("m-progress-bar",{attrs:{shape:n,size:t,progress:Number.parseInt(a.progress,10)}})],1)}))],2)}))],2)}),[],!1,null,"6990dd98",null).exports;var l=d(415);const s={components:{Demo0:i,DemoCollapse:l.DemoCollapse,SrcFile:l.SrcFile}};d(61471);const m=(0,r.Z)(s,(function(){var a=this,n=a.$createElement;a._self._c;return a._m(4)}),[function(){var a=this,n=a.$createElement,d=a._self._c||n;return d("p",[a._v("Supports attributes from "),d("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[d("code",[a._v("<div>")])]),a._v(".")])},function(){var a=this,n=a.$createElement,d=a._self._c||n;return d("p",[a._v("Themable props* can be configured via the "),d("a",{attrs:{href:"#/Theme"}},[a._v("Theme")]),a._v(" component using the key "),d("code",[a._v("progressbar")]),a._v(".")])},function(){var a=this,n=a.$createElement,d=a._self._c||n;return d("table",[d("thead",[d("tr",[d("th",[a._v("Prop")]),a._v(" "),d("th",[a._v("Type")]),a._v(" "),d("th",[a._v("Default")]),a._v(" "),d("th",[a._v("Possible values")]),a._v(" "),d("th",[a._v("Description")])])]),a._v(" "),d("tbody",[d("tr",[d("td",[a._v("color*")]),a._v(" "),d("td",[d("code",[a._v("string")])]),a._v(" "),d("td",[d("code",[a._v("'#000000'")])]),a._v(" "),d("td",[a._v("-")]),a._v(" "),d("td",[a._v("Color of the progress bar")])]),a._v(" "),d("tr",[d("td",[a._v("pattern*")]),a._v(" "),d("td",[d("code",[a._v("string")])]),a._v(" "),d("td",[a._v("—")]),a._v(" "),d("td",[a._v("any custom pattern defined within the theme")]),a._v(" "),d("td",[a._v("pattern defined at theme level")])]),a._v(" "),d("tr",[d("td",[a._v("progress")]),a._v(" "),d("td",[d("code",[a._v("number")])]),a._v(" "),d("td",[d("code",[a._v("0")])]),a._v(" "),d("td",[a._v("-")]),a._v(" "),d("td",[a._v("Progress (width) of the bar (0 - 100)")])]),a._v(" "),d("tr",[d("td",[a._v("shape*")]),a._v(" "),d("td",[d("code",[a._v("string")])]),a._v(" "),d("td",[a._v("—")]),a._v(" "),d("td",[d("code",[a._v("'squared'")]),a._v(", "),d("code",[a._v("'rounded'")]),a._v(", "),d("code",[a._v("'pill'")])]),a._v(" "),d("td",[a._v("Shape of the progress bar")])]),a._v(" "),d("tr",[d("td",[a._v("size*")]),a._v(" "),d("td",[d("code",[a._v("string")])]),a._v(" "),d("td",[d("code",[a._v("'medium'")])]),a._v(" "),d("td",[d("code",[a._v("'xsmall'")]),a._v(", "),d("code",[a._v("'small'")]),a._v(", "),d("code",[a._v("'medium'")]),a._v(", "),d("code",[a._v("'large'")])]),a._v(" "),d("td",[a._v("Size (height) of the progress bar")])])])])},function(){var a=this,n=a.$createElement,d=a._self._c||n;return d("p",[a._v("Supports events from "),d("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[d("code",[a._v("<div>")])]),a._v(".")])},function(){var a=this,n=a.$createElement,d=a._self._c||n;return d("div",{staticClass:"markdown-body"},[d("h1",[a._v("Progress Bar")]),a._v(" "),d("p",[a._v("Use Progress Bar to display progress.")]),a._v(" "),d("h2",[a._v("Examples")]),a._v(" "),d("demo-collapse",[d("Demo0"),a._v(" "),d("src-file",{attrs:{name:"",language:"html"}},[[a._v('<template>\n\t<div class="demo">\n\t\t<div>\n\t\t\t<label>\n\t\t\t\tProgress ({{ progress }}%)\n\t\t\t\t<input\n\t\t\t\t\tv-model="progress"\n\t\t\t\t\ttype="range"\n\t\t\t\t\tstep="1"\n\t\t\t\t\tmin="0"\n\t\t\t\t\tmax="100"\n\t\t\t\t>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div\n\t\t\tv-for="shape in [\'pill\', \'rounded\', \'squared\']"\n\t\t\t:key="shape"\n\t\t\tclass="sizes"\n\t\t>\n\t\t\t<m-text\n\t\t\t\tpattern="title"\n\t\t\t\t:size="2"\n\t\t\t>\n\t\t\t\t{{ shape }} shape\n\t\t\t</m-text>\n\n\t\t\t<div\n\t\t\t\tv-for="size in [\'xsmall\', \'small\', \'medium\', \'large\']"\n\t\t\t\t:key="size"\n\t\t\t>\n\t\t\t\t<m-text\n\t\t\t\t\tpattern="title"\n\t\t\t\t\t:size="0"\n\t\t\t\t>\n\t\t\t\t\t{{ size }}\n\t\t\t\t</m-text>\n\t\t\t\t<m-progress-bar\n\t\t\t\t\t:shape="shape"\n\t\t\t\t\t:size="size"\n\t\t\t\t\t:progress="Number.parseInt(progress, 10)"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { MProgressBar } from \'@square/maker/components/ProgressBar\';\nimport { MText } from \'@square/maker/components/Text\';\n\nexport default {\n\tcomponents: {\n\t\tMProgressBar,\n\t\tMText,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tprogress: 50,\n\t\t};\n\t},\n};\n<\/script>\n\n<style scoped>\n.demo {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\tmax-width: 500px;\n}\n\n.sizes {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n}\n</style>\n')]],2)],1),a._v(" "),d("h2",[a._v("Props")]),a._v(" "),a._m(0),a._v(" "),a._m(1),a._v(" "),a._m(2),a._v(" "),d("h2",[a._v("Events")]),a._v(" "),a._m(3)],1)}],!1,null,"2a5dedaf",null).exports},3619:(a,n,d)=>{var t=d(59802);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[a.id,t,""]]),t.locals&&(a.exports=t.locals);(0,d(54023).Z)("2b496f20",t,!0,{})},7493:(a,n,d)=>{var t=d(62716);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[a.id,t,""]]),t.locals&&(a.exports=t.locals);(0,d(54023).Z)("8cb0142e",t,!0,{})},61471:(a,n,d)=>{var t=d(81924);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[a.id,t,""]]),t.locals&&(a.exports=t.locals);(0,d(54023).Z)("659cf61a",t,!0,{})},35105:(a,n,d)=>{var t=d(89463);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[a.id,t,""]]),t.locals&&(a.exports=t.locals);(0,d(54023).Z)("34fafb0f",t,!0,{})}}]);