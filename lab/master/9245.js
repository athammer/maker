(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9245],{8774:(t,e,n)=>{"use strict";n.d(e,{i:()=>o,X:()=>d});const s=Symbol("SegmentedControlKey"),r={inject:{controlState:s},props:{value:{type:void 0,required:!0}},computed:{isSelected(){return this.controlState.currentValue===this.value}},methods:{selectSelf(){this.controlState.currentValue=this.value}}};var a=n(5891),i=n.n(a),l=n(1900);const o=(0,l.Z)(r,(function(){var t,e=this,n=e.$createElement;return(e._self._c||n)("button",{class:[e.$s.Button,e.$s["shape_"+e.controlState.shapeInner],e.$s["size_"+e.controlState.sizeInner],(t={},t[e.$s.selected]=e.isSelected,t)],on:{click:e.selectSelf}},[e._t("default")],2)}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports;const p={provide(){return{[s]:this.$data}},model:{prop:"selected",event:"segmented-control:update"},props:{selected:{type:void 0,required:!0},shape:{type:String,default:"rounded",validator:t=>["squared","rounded","pill"].includes(t)},size:{type:String,default:"medium",validator:t=>["small","medium"].includes(t)}},data(){return{currentValue:this.selected,shapeInner:this.shape,sizeInner:this.size}},watch:{currentValue(t){this.$emit("segmented-control:update",t)}}};var u=n(5154),c=n.n(u);const d=(0,l.Z)(p,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.$s.Container,t.$s["shape_"+t.shapeInner],t.$s["size_"+t.sizeInner]]},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},3721:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.Controls_aoFYY {\n\tpadding: 16px 24px 36px;\n\tbackground: #fff;\n}\n",""]),s.locals={Controls:"Controls_aoFYY"},t.exports=s},7889:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.Button_dVHkj {\n\tflex: 1 0 0;\n\tcolor: var(--neutral-90, black);\n\tfont-weight: 500;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: 4px;\n\toutline: none;\n\tcursor: pointer;\n}\n.shape_pill_xOf5O {\n\tborder-radius: 32px;\n}\n.shape_squared_wGub5 {\n\tborder-radius: 0;\n}\n.selected_JxSKs {\n\tcolor: var(--neutral-90, black);\n\tbackground-color: var(--color-elevation, white);\n\tbox-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\n}\n",""]),s.locals={Button:"Button_dVHkj",shape_pill:"shape_pill_xOf5O",shape_squared:"shape_squared_wGub5",selected:"selected_JxSKs"},t.exports=s},124:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.Container_LEIzv {\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\theight: 56px;\n\tpadding: 4px;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tbackground-color: var(--neutral-10, #f6f7f9);\n\tborder-radius: 4px;\n}\n.shape_pill_ssIJF {\n\tborder-radius: 32px;\n}\n.shape_squared_FwAaH {\n\tborder-radius: 0;\n}\n.size_small_QLXE_ {\n\theight: 40px;\n\tfont-size: 12px;\n\tline-height: 16px;\n}\n",""]),s.locals={Container:"Container_LEIzv",shape_pill:"shape_pill_ssIJF",shape_squared:"shape_squared_FwAaH",size_small:"size_small_QLXE_"},t.exports=s},9245:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>c});var s=n(5239),r=n(7392),a=n(8672),i=n(8774),l=n(485);const o={components:{MActionBar:r.MS,MActionBarButton:r.n5,MContainer:a.U,MSegmentedControl:i.X,MSegment:i.i},inject:{modalApi:s.UJ},data:()=>({enterDelay:600,springStiffness:400,springDamping:30,springMass:1.5}),methods:{openCart(){this.modalApi.open((t=>t(l.default,{props:{enterDelay:this.enterDelay,springStiffness:this.springStiffness,springDamping:this.springDamping,springMass:this.springMass}})))}}};var p=n(3243),u=n.n(p);const c=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-container",[n("h1",[t._v("Action bar test")]),t._v(" "),n("p",[t._v("To preview the persistent action bar, please view this page in a mobile browser.")]),t._v(" "),n("p",[t._v("\n\t\tOtherwise\n\t\t"),n("button",{on:{click:t.openCart}},[t._v("\n\t\t\tClick here\n\t\t")]),t._v("\n\t\tto open the item modal.\n\t")]),t._v(" "),n("div",{class:t.$s.Controls},[n("h4",[t._v("Delay (milliseconds)")]),t._v(" "),n("m-segmented-control",{attrs:{size:"small"},model:{value:t.enterDelay,callback:function(e){t.enterDelay=e},expression:"enterDelay"}},t._l(8,(function(e){return n("m-segment",{key:e,attrs:{value:100*e}},[t._v("\n\t\t\t\t"+t._s(100*e)+"\n\t\t\t")])})),1),t._v(" "),n("h4",[t._v("Stiffness")]),t._v(" "),n("p",[t._v("A higher stiffness will result in a snappier animation.")]),t._v(" "),n("m-segmented-control",{attrs:{size:"small"},model:{value:t.springStiffness,callback:function(e){t.springStiffness=e},expression:"springStiffness"}},t._l(10,(function(e){return n("m-segment",{key:e,attrs:{value:100*e}},[t._v("\n\t\t\t\t"+t._s(100*e)+"\n\t\t\t")])})),1),t._v(" "),n("h4",[t._v("Damping")]),t._v(" "),n("p",[t._v("\n\t\t\tThis is the opposing force to stiffness.\n\t\t\tAs you reduce this value, relative to stiffness,\n\t\t\tthe spring will become bouncier and the animation\n\t\t\twill last longer. Likewise, higher relative values will\n\t\t\thave less bounciness and result in shorter animations.\n\t\t")]),t._v(" "),n("m-segmented-control",{attrs:{size:"small"},model:{value:t.springDamping,callback:function(e){t.springDamping=e},expression:"springDamping"}},t._l(10,(function(e){return n("m-segment",{key:e,attrs:{value:10*e}},[t._v("\n\t\t\t\t"+t._s(10*e)+"\n\t\t\t")])})),1),t._v(" "),n("h4",[t._v("Mass")]),t._v(" "),n("p",[t._v("\n\t\t\tThis is the mass of the animating object.\n\t\t\tHeavier objects will take longer to speed up and slow down.\n\t\t")]),t._v(" "),n("m-segmented-control",{attrs:{size:"small"},model:{value:t.springMass,callback:function(e){t.springMass=e},expression:"springMass"}},t._l(10,(function(e){return n("m-segment",{key:e,attrs:{value:e/2}},[t._v("\n\t\t\t\t"+t._s(e/2)+"\n\t\t\t")])})),1)],1),t._v(" "),n("m-action-bar",[n("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:t.openCart},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t3 items\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tView Cart\n\t\t\t")])],1)],1)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},3243:(t,e,n)=>{var s=n(3721);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("02ca3834",s,!0,{})},5891:(t,e,n)=>{var s=n(7889);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("2714874e",s,!0,{})},5154:(t,e,n)=>{var s=n(124);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("b3262532",s,!0,{})}}]);