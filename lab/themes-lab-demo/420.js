(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[420,705,111,969,180],{3705:function(t,e,n){"use strict";n.r(e),n.d(e,{useThemeStore:function(){return a}});const a=(0,n(5743).Q_)("theme",{state:()=>({theme:{colors:{background:"#ffffff",text:"#000000",heading:"#000000",primary:"#000000"},fonts:{},shape:{}}})})},4111:function(t,e,n){"use strict";n.r(e),n.d(e,{modern:function(){return a},midnight:function(){return o},spaces:function(){return r},santa:function(){return i}});const a={colors:{background:"#ffffff",heading:"#333232",text:"#000000",primary:"#000000","neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000","color-elevation":"#ffffff","color-overlay":"rgba(0, 0, 0, 0.32)"},fonts:{heading:"Open Sans",text:"Open Sans",baseSize:16,scaleRatio:1.15},fontWeights:{heading:600,text:400},radii:{default:"0"}},o={colors:{background:"#31353f",heading:"#ffffff",text:"#ffffff",primary:"#d5e2fb","neutral-0":"#000000","neutral-10":"#60636b","neutral-20":"#777981","neutral-80":"#9c9ea3","neutral-90":"#f4f4f4","neutral-100":"#ffffff","color-elevation":"#777981","color-overlay":"rgba(255, 255, 255, 0.32)"},fonts:{heading:"Domine",text:"Karla",baseSize:"19",scaleRatio:"1.217"},fontWeights:{heading:"400",text:"400"},radii:{default:"16"}},r={colors:{background:"#fff9f2",heading:"#0b474b",text:"#0b474b",primary:"#0b474b","neutral-0":"#ffffff","neutral-10":"#f1ebe4","neutral-20":"#d3cec8","neutral-80":"#706e6b","neutral-90":"#1b1b1b","neutral-100":"#000000","color-elevation":"#ffffff","color-overlay":"rgba(0, 0, 0, 0.32)"},fonts:{heading:"Libre Franklin",text:"Libre Franklin",baseSize:"18",scaleRatio:"1.297"},fontWeights:{heading:"700",text:"400"},radii:{default:"0"}},i={colors:{background:"#cb2a2a",heading:"#ffffff",text:"#fffeeb",primary:"#367010","neutral-0":"#000000","neutral-10":"#e1695b","neutral-20":"#ea8173","neutral-80":"#f4a599","neutral-90":"#fff5f3","neutral-100":"#ffffff","color-elevation":"#ea8173","color-overlay":"rgba(255, 255, 255, 0.32)"},fonts:{heading:"Comfortaa",text:"Rubik",baseSize:"18",scaleRatio:"1.407"},fontWeights:{heading:"700",text:"400"},radii:{default:"60"}}},8969:function(t,e,n){"use strict";n.r(e),n.d(e,{generateNeutralColors:function(){return i}});var a=n(771),o=n.n(a);const r={light:{10:.05,20:.155,80:.527,90:.9},dark:{10:.255,20:.37,80:.55,90:.95}},i=t=>{const e=o()(t).luminance()>.32,n=e?"#000000":"#ffffff",a=e?r.light:r.dark,i={"neutral-0":e?"#ffffff":"#000000","neutral-100":e?"#000000":"#ffffff"};return Object.entries(a).forEach((([e,a])=>{i[`neutral-${e}`]=o().mix(t,n,a,"lab").hex()})),{...i,"color-elevation":e?"#ffffff":i["neutral-20"],"color-overlay":e?"rgba(0, 0, 0, 0.32)":"rgba(255, 255, 255, 0.32)"}}},2180:function(t,e,n){"use strict";n.r(e),n.d(e,{fontOptions:function(){return a}});const a=[{name:"Domine",fallback:"serif"},{name:"Playfair Display",fallback:"serif"},{name:"Karla",fallback:"sans-serif"},{name:"Libre Franklin",fallback:"sans-serif"},{name:"Roboto Slab",fallback:"serif"},{name:"Open Sans",fallback:"sans-serif"},{name:"Rubik",fallback:"sans-serif"},{name:"Source Sans 3",fallback:"sans-serif"},{name:"Work Sans",fallback:"sans-serif"},{name:"Comfortaa",fallback:"sans-serif"},{name:"Big Shoulder Text",fallback:"sans-serif"}]},5423:function(t,e,n){var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.App_wFw2l {\n\tdisplay: grid;\n\tgrid-template-columns: minmax(300px, 1fr) 4fr;\n\theight: 100vh;\n}\n.Editor_VVopN {\n\tpadding: 20px;\n\toverflow-y: scroll;\n\tcolor: #000;\n\tfont-family: -apple-system, 'Helvetica Neue', sans-serif;\n\tbackground-color: #fff;\n}\n.Editor_VVopN h3,\n.Editor_VVopN h4,\n.Editor_VVopN h5 {\n\tmargin-bottom: 20px;\n\tcolor: #000;\n}\n.Editor_VVopN h5 { margin-bottom: 8px;\n}\n.EditorHeader_s8Svs {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin-bottom: 20px;\n}\n.EditorHeader_s8Svs h1 {\n\tdisplay: inline-block;\n\tfont-size: 20px;\n}\n.EditorHeader_s8Svs a {\n\tcolor: #006aff;\n\tcursor: pointer;\n}\n.ThemeList__tmrS {\n\tdisplay: grid;\n\tgrid-gap: 8px;\n\tmargin-bottom: 20px;\n}\n.Card__nWYt {\n\tdisplay: grid;\n\tgrid-template-rows: 2fr 1fr;\n\tgrid-gap: 8px;\n\talign-items: flex-end;\n\tjustify-items: center;\n\twidth: 100%;\n\theight: 100px;\n\tfont-size: 21px;\n\tbackground-color: white;\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\n\tborder-radius: 4px;\n\tcursor: pointer;\n\ttransition: box-shadow 0.2s ease-out;\n}\n.Card__nWYt:hover {\n\tbox-shadow: 0 6px 15px -10px rgba(0, 0, 0, 0.71);\n}\n.Swatch_VRYha {\n\talign-self: flex-start;\n\twidth: 50%;\n\theight: 10px;\n}\n.ThemeModern_gaTFu {\n\tgrid-template-rows: 2fr;\n\talign-items: center;\n\tfont-weight: 600;\n}\n.ThemeModern_gaTFu > *:first-child {\n\tpadding: 10px 20px;\n\tborder: 1px solid black;\n}\n.ThemeMidnight_VEieO {\n\tcolor: #fff;\n\tfont-weight: 200;\n\tbackground-color: #31353f;\n}\n.ThemeMidnight_VEieO .Swatch_VRYha {\n\tbackground-color: #d5e2fb;\n}\n.ThemeSpaces_QDQGB {\n\tposition: relative;\n\toverflow: hidden;\n\tcolor: #0b474b;\n\tfont-weight: 800;\n\tbackground-color: #fff9f2;\n}\n.ThemeSpaces_QDQGB .Swatch_VRYha {\n\tposition: absolute;\n\tbottom: -20px;\n\twidth: 100%;\n\tpadding: 10px;\n\tborder: 2px solid #0b474b;\n\tborder-radius: 100%;\n}\n.ThemeSanta_aAmjZ {\n\tposition: relative;\n\toverflow: hidden;\n\tcolor: #fff;\n\tfont-weight: 800;\n\tbackground-color: #ef233c;\n}\n.ThemeSanta_aAmjZ .Swatch_VRYha {\n\twidth: 80%;\n\theight: 0;\n}\n.ThemeSanta_aAmjZ .Swatch_VRYha::after {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 200px;\n\tbackground-color: #003e1f;\n\tborder-radius: 500px;\n\tcontent: '';\n}\n.Profile_aWMaC {\n\tdisplay: flex;\n\tflex-direction: column\n}\n.Profile_aWMaC label {\n\t\tmargin-bottom: 8px;\n}\n.Profile_aWMaC input {\n\t\tmargin-right: 16px;\n}\n.Profiles_EKSKA {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-gap: 8px;\n\tmargin-bottom: 24px;\n}\n.ProfileSet_jmUIt {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 44px;\n\tline-height: 1;\n\ttext-align: center;\n\tborder-radius: 4px;\n\tbox-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);\n\tcursor: pointer;\n}\n.previewTitle_Sr4q_ {\n\tmargin-bottom: 6px;\n\tcolor: var(--preview-title, #000);\n\tfont-weight: 700;\n\tfont-size: 14px;\n}\n.previewButton__Q_Dm {\n\twidth: 24px;\n\theight: 8px;\n\tbackground: var(--preview-button, #000);\n\tborder-radius: 8px;\n}\n.palette_h54Hj {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(30px, 1fr));\n\tgrid-gap: 8px;\n\tmargin-bottom: 20px;\n}\n.palette_h54Hj > .color_qzc4i span {\n\tdisplay: inline-block;\n\twidth: 30px;\n\theight: 30px;\n\toutline: 1px solid rgba(0, 0, 0, 0.2);\n}\n.fontChoice__pi06 {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\tmargin-bottom: 20px;\n}\n.familyChoice_k_DW6 {\n\tflex-grow: 2;\n}\n.fontChoice__pi06 > select {\n\tpadding: 8px;\n}\n",""]),a.locals={App:"App_wFw2l",Editor:"Editor_VVopN",EditorHeader:"EditorHeader_s8Svs",ThemeList:"ThemeList__tmrS",Card:"Card__nWYt",Swatch:"Swatch_VRYha",ThemeModern:"ThemeModern_gaTFu",ThemeMidnight:"ThemeMidnight_VEieO",ThemeSpaces:"ThemeSpaces_QDQGB",ThemeSanta:"ThemeSanta_aAmjZ",Profile:"Profile_aWMaC",Profiles:"Profiles_EKSKA",ProfileSet:"ProfileSet_jmUIt",previewTitle:"previewTitle_Sr4q_",previewButton:"previewButton__Q_Dm",palette:"palette_h54Hj",color:"color_qzc4i",fontChoice:"fontChoice__pi06",familyChoice:"familyChoice_k_DW6"},t.exports=a},7420:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var a=n(771),o=n.n(a),r=n(5743),i=n(1098),s=n(3216),l=n(6033),f=n(4111),c=n(3705),d=n(8969),m=n(2180);const h=(0,c.useThemeStore)(),u=n(5313);var p={components:{MTheme:i.qo,Preview:l.default,MHeading:s.b},data:()=>({fontOptions:m.fontOptions,defaultWeights:["200","300","400","500","600","700","800"],showThemes:!1}),computed:{...(0,r.Kc)(c.useThemeStore),...(0,r.rn)(c.useThemeStore,["theme"]),surfaces:t=>t.theme.colors.surfaces,background:t=>t.theme.colors.background,fontLoad(){const t=[],e=h.$state.theme.fonts.heading,n=h.$state.theme.fontWeights.heading,a=h.$state.theme.fonts.text,o=h.$state.theme.fontWeights.text;return t.push(`${e}:${n}`),t.push(`${a}:${o}`),t},styleOverride(){const{theme:t}=h.$state;return{"--font-heading":`${t.fonts.heading}, sans-serif`,"--font-text":`${t.fonts.text}, sans-serif`,"--font-weights-heading":`${t.fontWeights.heading}`,"--font-weights-text":`${t.fontWeights.text}`,"--font-base-size":`${t.fonts.baseSize}px`,"--font-scale-ratio":t.fonts.scaleRatio,"--radii-default":`${t.radii.default}px`}}},watch:{background(t){const e=(0,d.generateNeutralColors)(t),n=h.$state.theme.colors.heading,a=h.$state.theme.colors.text;h.$state.theme.colors=Object.assign(h.$state.theme.colors,e),o().contrast(t,n)<4.5&&(h.$state.theme.colors.heading=e["neutral-100"]),o().contrast(t,a)<4.5&&(h.$state.theme.colors.text=e["neutral-100"])}},created:()=>{h.theme=f.modern},mounted(){this.updateFont()},methods:{loadWebFont(t){console.log(t),u.load({google:{families:t}})},updateFont(){this.loadWebFont(this.fontLoad)},changeTheme(t){console.log(t),h.theme=f[t],this.updateFont()},toggleThemes(){this.showThemes=!this.showThemes}}},g=n(3107),v=n.n(g);var _=(0,n(1900).Z)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-theme",{class:t.$s.App,attrs:{theme:t.theme}},[n("div",{class:t.$s.Editor},[n("div",{class:t.$s.EditorHeader},[n("h1",[t._v("Maker Theme")]),t._v(" "),n("a",{on:{click:t.toggleThemes}},[t._v("Themes")])]),t._v(" "),t.showThemes?n("div",{class:t.$s.ThemeList},[n("div",{class:[t.$s.Card,t.$s.ThemeModern],on:{click:function(e){return t.changeTheme("modern")}}},[n("span",[t._v("Modern")])]),t._v(" "),n("div",{class:[t.$s.Card,t.$s.ThemeMidnight],on:{click:function(e){return t.changeTheme("midnight")}}},[t._v("\n\t\t\t\t\tMidnight\n\t\t\t\t\t"),n("div",{class:t.$s.Swatch},[n("span"),t._v(" "),n("span")])]),t._v(" "),n("div",{class:[t.$s.Card,t.$s.ThemeSpaces],on:{click:function(e){return t.changeTheme("spaces")}}},[t._v("\n\t\t\t\t\tSpaces\n\t\t\t\t\t"),n("div",{class:t.$s.Swatch},[n("span"),t._v(" "),n("span")])]),t._v(" "),n("div",{class:[t.$s.Card,t.$s.ThemeSanta],on:{click:function(e){return t.changeTheme("santa")}}},[t._v("\n\t\t\t\t\tSanta\n\t\t\t\t\t"),n("div",{class:t.$s.Swatch},[n("span"),t._v(" "),n("span")])])]):t._e(),t._v(" "),n("m-heading",{attrs:{size:1}},[t._v("\n\t\t\t\tColors\n\t\t\t")]),t._v(" "),n("div",{class:t.$s.Profile},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theme.colors.background,expression:"theme.colors.background"}],attrs:{type:"color"},domProps:{value:t.theme.colors.background},on:{input:function(e){e.target.composing||t.$set(t.theme.colors,"background",e.target.value)}}}),t._v("\n\t\t\t\t\tBackground\n\t\t\t\t")]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theme.colors.primary,expression:"theme.colors.primary"}],attrs:{type:"color"},domProps:{value:t.theme.colors.primary},on:{input:function(e){e.target.composing||t.$set(t.theme.colors,"primary",e.target.value)}}}),t._v("\n\t\t\t\t\tPrimary\n\t\t\t\t")]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theme.colors.heading,expression:"theme.colors.heading"}],attrs:{type:"color"},domProps:{value:t.theme.colors.heading},on:{input:function(e){e.target.composing||t.$set(t.theme.colors,"heading",e.target.value)}}}),t._v("\n\t\t\t\t\tHeading\n\t\t\t\t")]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theme.colors.text,expression:"theme.colors.text"}],attrs:{type:"color"},domProps:{value:t.theme.colors.text},on:{input:function(e){e.target.composing||t.$set(t.theme.colors,"text",e.target.value)}}}),t._v("\n\t\t\t\t\tText\n\t\t\t\t")]),t._v(" "),n("m-heading",{staticStyle:{color:"gray"},attrs:{size:0}},[t._v("\n\t\t\t\t\tNeutrals\n\t\t\t\t")]),t._v(" "),n("div",{class:t.$s.palette},[n("div",{class:t.$s.color},[n("span",{style:{backgroundColor:t.theme.colors["neutral-0"]}})]),t._v(" "),n("div",{class:t.$s.color},[n("span",{style:{backgroundColor:"var(--neutral-10)"}})]),t._v(" "),n("div",{class:t.$s.color},[n("span",{style:{backgroundColor:"var(--neutral-20)"}})]),t._v(" "),n("div",{class:t.$s.color},[n("span",{style:{backgroundColor:"var(--neutral-80)"}})]),t._v(" "),n("div",{class:t.$s.color},[n("span",{style:{backgroundColor:"var(--neutral-90)"}})]),t._v(" "),n("div",{class:t.$s.color},[n("span",{style:{backgroundColor:"var(--neutral-100)"}})])]),t._v(" "),n("m-heading",{attrs:{size:1}},[t._v("\n\t\t\t\t\tFonts\n\t\t\t\t")]),t._v(" "),n("m-heading",{attrs:{size:0}},[t._v("\n\t\t\t\t\tHeading\n\t\t\t\t")]),t._v(" "),n("div",{class:t.$s.fontChoice},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.theme.fonts.heading,expression:"theme.fonts.heading"}],class:t.$s.familyChoice,on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.theme.fonts,"heading",e.target.multiple?n:n[0])},t.updateFont]}},[t._l(t.fontOptions,(function(e,a){return[n("option",{key:a,domProps:{value:e.name}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")])]}))],2),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.theme.fontWeights.heading,expression:"theme.fontWeights.heading"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.theme.fontWeights,"heading",e.target.multiple?n:n[0])},t.updateFont]}},[t._l(t.defaultWeights,(function(e,a){return[n("option",{key:a,domProps:{value:e}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t")])]}))],2)]),t._v(" "),n("m-heading",{attrs:{size:0}},[t._v("\n\t\t\t\t\tText\n\t\t\t\t")]),t._v(" "),n("div",{class:t.$s.fontChoice},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.theme.fonts.text,expression:"theme.fonts.text"}],class:t.$s.familyChoice,on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.theme.fonts,"text",e.target.multiple?n:n[0])},t.updateFont]}},[t._l(t.fontOptions,(function(e,a){return[n("option",{key:a,domProps:{value:e.name}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")])]}))],2),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.theme.fontWeights.text,expression:"theme.fontWeights.text"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.theme.fontWeights,"text",e.target.multiple?n:n[0])},t.updateFont]}},[t._l(t.defaultWeights,(function(e,a){return[n("option",{key:a,domProps:{value:e}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t")])]}))],2)]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theme.fonts.baseSize,expression:"theme.fonts.baseSize"}],attrs:{type:"range",min:"16",max:"22",step:"1"},domProps:{value:t.theme.fonts.baseSize},on:{__r:function(e){return t.$set(t.theme.fonts,"baseSize",e.target.value)}}}),t._v("\n\t\t\t\t\tBase font size\n\t\t\t\t")]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theme.fonts.scaleRatio,expression:"theme.fonts.scaleRatio"}],attrs:{type:"range",min:"1.067",max:"1.618",step:"0.01"},domProps:{value:t.theme.fonts.scaleRatio},on:{__r:function(e){return t.$set(t.theme.fonts,"scaleRatio",e.target.value)}}}),t._v("\n\t\t\t\t\tContrast\n\t\t\t\t")]),t._v(" "),n("m-heading",{attrs:{size:1}},[t._v("\n\t\t\t\t\tShape\n\t\t\t\t")]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theme.radii.default,expression:"theme.radii.default"}],attrs:{type:"range",min:"0",max:"60",step:"2"},domProps:{value:t.theme.radii.default},on:{__r:function(e){return t.$set(t.theme.radii,"default",e.target.value)}}}),t._v("\n\t\t\t\t\tShape\n\t\t\t\t")]),t._v(" "),n("textarea",{attrs:{rows:"20"}},[t._v(t._s(t.theme)+"\n\t\t\t\t")])],1)],1),t._v(" "),n("preview",{style:t.styleOverride})],1)}),[],!1,(function(t){this.$s=v().locals||v()}),null,null).exports},3107:function(t,e,n){var a=n(5423);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("0bd11ca8",a,!0,{})}}]);