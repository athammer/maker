(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7566],{57566:(t,n,e)=>{"use strict";e.d(n,{G:()=>v});var o=e(16765),r=e(46475),i=e(69901),a=e(46010);function l(t,n){const e=(0,o.Vi)(t.color),i=t.colorHover?(0,o.Vi)(t.colorHover):e,a=(0,r.mj)(t.color,t.textColor),l=t.textColorHover?(0,r.mj)(i,t.textColorHover):(0,r.mj)(i,t.textColor);let s;s="fill"===n?i.isDark()?"lighten":"darken":"alpha";const d=i[s](.08).toHex(),_=i[s](.16).toHex(),v=i.alpha(.3).toHex();return{"--color-main":t.color,"--color-main-hover":t.colorHover||t.color,"--color-contrast":a,"--color-contrast-hover":l,"--color-hover":d,"--color-active":_,"--color-focus":v,"--border-radius":t.shape,"--border-radius-hover":t.shapeHover||t.shape,"--border-width":t.borderWidth||"1px","--border-width-hover":t.borderWidthHover||t.borderWidth||"1px","--border-color":t.borderColor,"--border-color-hover":t.borderColorHover||t.borderColor,"--box-shadow":t.boxShadow,"--box-shadow-hover":t.boxShadowHover||t.boxShadow}}const s={components:{MLoading:i.g},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:void 0},color:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},colorHover:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},textColor:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},textColorHover:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},variant:{type:String,default:void 0,validator:t=>["fill","outline","ghost"].includes(t)},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)||t.match(/\d*\.?\d+(?:px|%)/i)},shapeHover:{type:String,default:void 0,validator:t=>t.match(/\d*\.?\d+(?:px|%)/i)},borderWidth:{type:String,default:void 0},borderWidthHover:{type:String,default:void 0},borderColor:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},borderColorHover:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},boxShadow:{type:String,default:void 0,validator:t=>t.match(/(\d*\.?\d+px\s+){4}(#[\da-z]{6}|rgba\((\s*\d+\s*,){3}\s*[\d.]+\))/i)},boxShadowHover:{type:String,default:void 0,validator:t=>t.match(/(\d*\.?\d+px\s+){4}(#[\da-z]{6}|rgba\((\s*\d+\s*,){3}\s*[\d.]+\))/i)},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{...(0,a.C9)("button",["color","colorHover","size","textColor","textColorHover","variant","shape","shapeHover","align","fullWidth","pattern","borderWidth","borderWidthHover","borderColor","borderColorHover","boxShadow","boxShadowHover"]),style(){return{...l({color:this.resolvedColor,colorHover:this.resolvedColorHover,textColor:this.resolvedTextColor,textColorHover:this.resolvedTextColorHover,shape:this.resolvedShape,shapeHover:this.resolvedShapeHover,borderWidth:this.resolvedBorderWidth,borderWidthHover:this.resolvedBorderWidthHover,borderColor:this.resolvedBorderColor,borderColorHover:this.resolvedBorderColorHover,boxShadow:this.resolvedBoxShadow,boxShadowHover:this.resolvedBoxShadowHover},this.resolvedVariant)}},isDisabled(){return this.disabled||this.loading}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}};var d=e(3441),_=e.n(d);const v=(0,e(51900).Z)(s,(function(){var t,n,e=this,o=e.$createElement,r=e._self._c||o;return r("button",e._g(e._b({class:[e.$s.Button,e.$s["variant_"+e.resolvedVariant],e.$s["size_"+e.resolvedSize],e.$s["shape_"+e.resolvedShape],e.$s["align_"+e.resolvedAlign],(t={},t[e.$s.fullWidth]=e.resolvedFullWidth,t[e.$s.iconButton]=e.isSingleChild()&&!e.resolvedFullWidth,t[e.$s.loading]=e.loading,t)],style:e.style,attrs:{type:e.type,disabled:e.isDisabled}},"button",e.$attrs,!1),e.$listeners),[e.loading?r("m-loading",{class:e.$s.Loading}):e._e(),e._v(" "),r("span",{class:[e.$s.MainText,(n={},n[e.$s.TruncateText]=!e.isSingleChild(),n)]},[e._t("default")],2),e._v(" "),e.$scopedSlots.information?r("span",{class:[e.$s.InformationText,e.$s.TruncateText]},[e._t("information")],2):e._e()],1)}),[],!1,(function(t){this.$s=_().locals||_()}),null,null).exports},69901:(t,n,e)=>{"use strict";e.d(n,{g:()=>a});const o={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}};var r=e(17531),i=e.n(r);const a=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.Loading},[e("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports},46475:(t,n,e)=>{"use strict";e.d(n,{i8:()=>i,dL:()=>a,R4:()=>l,mj:()=>s});var o=e(16765),r=e(40241);(0,o.l7)([r.Z]);const i=.32,a=4.5,l=3;function s(t,n,e=l){let r=n;if(!n||(0,o.Vi)(n).contrast(t)<e){r=(0,o.Vi)(t).luminance()<i?"#ffffff":"#000000"}return r}},20758:(t,n,e)=>{var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n.Button_vQBWk {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast, #fff);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: var(--color-main, var(--maker-color-primary, #006aff));\n\tborder: none;\n\tborder-radius: var(--border-radius, var(--maker-shape-button-border-radius, 4px));\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--border, 0 0),\n\t\tvar(--box-shadow, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tfilter 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in,\n\t\tborder-radius 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.shape_rounded_UM3O1 {\n\t\tborder-radius: var(--radius-rounded-button);\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: var(--radius-pill-button);\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n\t\tjustify-content: center\n}\n.Button_vQBWk.align_stack_XfpCI > * {\n\t\t\tline-height: 1.1;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--maker-color-neutral-20, #d3d3d3),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover);\n\t\tbackground-color: var(--color-hover);\n\t\tborder-radius: var(--border-radius-hover, var(--maker-shape-button-border-radius, 4px));\n\t\tbox-shadow:\n\t\t\tvar(--border-hover, 0 0),\n\t\t\tvar(--box-shadow-hover, 0 0),\n\t\t\tvar(--focus-border, 0 0);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tbackground-color: var(--color-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n\t\topacity: 1;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: transparent;\n}\n\n/* Variants */\n.Button_vQBWk.variant_fill_wcHKQ,\n.Button_vQBWk.variant_outline_X_B6s {\n\t--small-padding: 0 16px;\n\t--medium-padding: 0 24px;\n\t--large-padding: 0 32px;\n}\n.Button_vQBWk.variant_fill_wcHKQ .Loading_LttwZ {\n\tcolor: var(--color-contrast);\n}\n.Button_vQBWk.variant_fill_wcHKQ {\n\t--border: inset 0 0 0 var(--border-width) var(--border-color);\n\t--border-hover: inset 0 0 0 var(--border-width-hover) var(--border-color-hover);\n}\n.Button_vQBWk.variant_outline_X_B6s {\n\t--border: inset 0 0 0 var(--border-width) var(--color-main);\n\t--border-hover: inset 0 0 0 var(--border-width-hover) var(--color-main-hover);\n}\n.Button_vQBWk.variant_ghost_es_jw {\n\t--small-padding: 0 8px;\n\t--medium-padding: 0 12px;\n\t--large-padding: 0 20px;\n}\n.Button_vQBWk.variant_outline_X_B6s,\n.Button_vQBWk.variant_ghost_es_jw {\n\tcolor: var(--color-main);\n\tbackground-color: transparent\n}\n.Button_vQBWk.variant_outline_X_B6s .Loading_LttwZ, .Button_vQBWk.variant_ghost_es_jw .Loading_LttwZ {\n\t\tcolor: var(--color-main);\n}\n.Button_vQBWk.variant_outline_X_B6s:hover:not(:disabled), .Button_vQBWk.variant_ghost_es_jw:hover:not(:disabled) {\n\t\tcolor: var(--color-main-hover);\n}\n.MainText_DK0_A {\n\tgrid-gap: 8px;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n}\n.iconButton_u2Q6y .MainText_DK0_A {\n\tdisplay: flex;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\topacity: 0.6;\n}\n.TruncateText_O_pqx {\n\t/* -webkit-box is supported by all modern browsers */\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\toverflow: hidden;\n\tline-height: 1.1 !important;\n\ttext-overflow: ellipsis\n\n\t/* stylelint-disable-next-line no-descending-specificity */\n}\n.TruncateText_O_pqx > * {\n\t\tvertical-align: bottom;\n}\n.align_stack_XfpCI .TruncateText_O_pqx {\n\t-webkit-line-clamp: 1;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),o.locals={Button:"Button_vQBWk",shape_squared:"shape_squared_IPrN0",shape_rounded:"shape_rounded_UM3O1",shape_pill:"shape_pill_aYEm0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",variant_fill:"variant_fill_wcHKQ",variant_outline:"variant_outline_X_B6s",variant_ghost:"variant_ghost_es_jw",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J",TruncateText:"TruncateText_O_pqx"},t.exports=o},39832:(t,n,e)=>{var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=o},3441:(t,n,e)=>{var o=e(20758);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("180e274e",o,!0,{})},17531:(t,n,e)=>{var o=e(39832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("7ac45ae2",o,!0,{})}}]);