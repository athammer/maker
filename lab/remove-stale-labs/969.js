"use strict";(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[969],{8969:(f,e,a)=>{a.r(e),a.d(e,{generateNeutralColors:()=>l});var r=a(771),t=a.n(r);const n={light:{10:.05,20:.155,80:.527,90:.9},dark:{10:.255,20:.37,80:.55,90:.95}},l=f=>{const e=t()(f).luminance()>.32,a=e?"#000000":"#ffffff",r=e?n.light:n.dark,l={"neutral-0":e?"#ffffff":"#000000","neutral-100":e?"#000000":"#ffffff"};return Object.entries(r).forEach((([e,r])=>{l["neutral-".concat(e)]=t().mix(f,a,r,"lab").hex()})),{...l,elevation:e?"#ffffff":l["neutral-20"],overlay:e?"rgba(0, 0, 0, 0.32)":"rgba(255, 255, 255, 0.32)"}}}}]);