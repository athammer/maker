(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[966],{6966:function(t,n,o){"use strict";o.d(n,{G:function(){return g}});var e=o(771),i=o.n(e),a=o(9901);function r(t){return t.alpha(.3)}function l(t){return i().mix(t,"#000",.05)}function s(t){return i().mix(t,"#000",.1)}const c={primary:function(t){const n=i()(t.color),o=l(n),e=s(n),a=function(t,n){if(!n||i().contrast(t,n)<4.5){const n=.32,o=t.luminance()>n;return i()(o?"#000":"#fff")}return n}(n,t.textColor?i()(t.textColor):void 0),c=l(a),d=s(a),u=r(n);return{"--small-padding":"8px 16px","--medium-padding":"12px 24px","--large-padding":"20px 32px","--color-main":n.hex(),"--color-main-hover":o.hex(),"--color-main-active":e.hex(),"--color-contrast":a.hex(),"--color-contrast-hover":c.hex(),"--color-contrast-active":d.hex(),"--color-focus":u.hex()}},secondary:function(t){const n=i()(t.color),o=l(n),e=s(n),a=r(n);return{"--small-padding":"8px 16px","--medium-padding":"12px 24px","--large-padding":"20px 32px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":o.hex(),"--color-contrast-active":e.hex(),"--color-focus":a.hex(),"--outline-border":"inset 0 0 0 1px var(--color-contrast)"}},tertiary:function(t){const n=i()(t.color),o=l(n),e=s(n),a=r(n);return{"--small-padding":"8px","--medium-padding":"12px","--large-padding":"20px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":o.hex(),"--color-contrast-active":e.hex(),"--color-focus":a.hex()}}};var d={components:{MLoading:a.g},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:!1},color:{type:String,default:"#000",validator:t=>i().valid(t)},textColor:{type:String,default:void 0,validator:t=>i().valid(t)},variant:{type:String,default:"primary",validator:t=>["primary","secondary","tertiary"].includes(t)},shape:{type:String,default:"rounded",validator:t=>["squared","rounded","pill"].includes(t)},disabled:{type:Boolean,default:!1},align:{type:String,default:"center",validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{style(){return c[this.variant]({color:this.color,textColor:this.textColor})}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}},u=o(3441),p=o.n(u),_=o(1900);var g=(0,_.Z)(d,(function(){var t,n=this,o=n.$createElement,e=n._self._c||o;return e("button",n._g(n._b({class:[n.$s.Button,n.$s["size_"+n.size],n.$s["shape_"+n.shape],n.$s["align_"+n.align],(t={},t[n.$s.fullWidth]=n.fullWidth,t[n.$s.iconButton]=n.isSingleChild(),t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.disabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?e("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),e("span",{class:n.$s.MainText},[n._t("default")],2),n._v(" "),n.$scopedSlots.information?e("span",{class:n.$s.InformationText},[n._t("information")],2):n._e()],1)}),[],!1,(function(t){this.$s=p().locals||p()}),null,null).exports,f=o(2416);var h={components:{MLoading:a.g},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:"medium",validator:t=>["medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>i().valid(t)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{style(){return function(t){const n=t.color?i()(t.color):void 0;return{"--color-main":"color","--color-contrast":n?n.hex():void 0}}({color:this.color})}},created(){f.Z.warn(this.$slots.default,"TextButton should only be used with a label")}},m=o(3012),x=o.n(m);(0,_.Z)(h,(function(){var t,n=this,o=n.$createElement,e=n._self._c||o;return e("button",n._g(n._b({class:[n.$s.Button,n.$s["size_"+n.size],(t={},t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.disabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?e("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),e("span",{class:n.$s.MainText},[n._t("default")],2)],1)}),[],!1,(function(t){this.$s=x().locals||x()}),null,null).exports},2416:function(t,n){"use strict";const o=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],e={warn(t,n){t||console.warn(...o,n)},error(t,n){if(!t)throw console.error(...o,n),new Error(`[@square/maker] ${n}`)}};n.Z=e},758:function(t,n,o){var e=o(7705)((function(t){return t[1]}));e.push([t.id,"\n.Button_vQBWk {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast);\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: 32px;\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\tpadding: 8px;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\tpadding: 12px;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\tpadding: 20px;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: auto;\n\t\tcursor: initial\n}\n.Button_vQBWk:disabled > * {\n\t\t\topacity: 0.4;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px #fff,\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover);\n\t\tbackground-color: var(--color-main-hover);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tcolor: var(--color-contrast-active);\n\t\tbackground-color: var(--color-main-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText_DK0_A {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),e.locals={Button:"Button_vQBWk",shape_pill:"shape_pill_aYEm0",shape_squared:"shape_squared_IPrN0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J"},t.exports=e},8171:function(t,n,o){var e=o(7705)((function(t){return t[1]}));e.push([t.id,"\n.Button_UfoQd {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast, inherit);\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_UfoQd.iconButton__JrGg {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_UfoQd.size_medium_f3QRI {\n\t\tfont-size: 14px;\n}\n.Button_UfoQd.size_large__tIVh {\n\t\tfont-size: 16px;\n}\n.Button_UfoQd:disabled {\n\t\tcursor: auto;\n\t\tcursor: initial\n}\n.Button_UfoQd:disabled > * {\n\t\t\topacity: 0.4;\n}\n.Button_UfoQd.loading_mxjea {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_o7CJ2 {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText__arHd {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),e.locals={Button:"Button_UfoQd",iconButton:"iconButton__JrGg",size_medium:"size_medium_f3QRI",size_large:"size_large__tIVh",loading:"loading_mxjea",Loading:"Loading_o7CJ2",MainText:"MainText__arHd"},t.exports=e},3441:function(t,n,o){var e=o(758);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);(0,o(4023).Z)("180e274e",e,!0,{})},3012:function(t,n,o){var e=o(8171);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);(0,o(4023).Z)("69aa5930",e,!0,{})}}]);