(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{112:function(n,o,a){var t=a(289);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,a(3).default)("74d1a81e",t,!0,{})},161:function(n,o,a){var t=a(291);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,a(3).default)("1859465a",t,!0,{})},288:function(n,o,a){"use strict";var t=a(112),e=a.n(t);a.d(o,"default",(function(){return e.a}))},289:function(n,o,a){var t=a(1)(!1);t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable no-descending-specificity */\n.ToggleContainer_3b9Gc {\n\tposition: relative;\n\tdisplay: inline-block;\n\tline-height: 0;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\n\t/* general vars */\n\t--color-black-90: rgba(0, 0, 0, 0.9);\n\t--color-black-30: rgba(0, 0, 0, 0.3);\n\t--color-black-15: rgba(0, 0, 0, 0.15);\n\t--color-black-05: rgba(0, 0, 0, 0.05);\n\t--color-error: #ff3b30;\n\t--color-white: #fff;\n\t--transition: 0.2s ease;\n\n\t/* toggle vars */\n\t--t-height: 20px;\n\t--t-width: calc(2 * var(--t-height));\n\t--t-border: 1px;\n\n\t/* toggle ball vars */\n\t--tb-dim: 14px;\n\t--tb-inset: 3px;\n\t--tb-top: calc(var(--tb-inset) - var(--t-border));\n\t--tb-left-unchecked: var(--tb-inset);\n\t--tb-left-checked: calc(var(--t-width) - var(--tb-dim) - var(--tb-inset) - 2 * var(--t-border));\n\t--tb-background-color: var(--color-black-05);\n}\n.Checkbox_1-eX4 {\n\tposition: absolute;\n\topacity: 0;\n}\n.ToggleBall_Mb9so {\n\tposition: absolute;\n\ttop: var(--tb-top);\n\tleft: var(--tb-left-unchecked);\n\tbox-sizing: border-box;\n\twidth: var(--tb-dim);\n\theight: var(--tb-dim);\n\tborder-radius: inherit;\n\ttransition:\n\t\tleft var(--transition),\n\t\tbackground-color var(--transition)\n}\n.ToggleBall_Mb9so::after {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: var(--tb-background-color);\n\t\tborder-radius: inherit;\n\t\ttransition:\n\t\t\ttransform var(--transition),\n\t\t\tbackground-color var(--transition);\n\t\tcontent: "";\n}\n.Toggle_2uz08 {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\twidth: var(--t-width);\n\theight: var(--t-height);\n\tvertical-align: middle;\n\tborder: var(--t-border) solid;\n\tborder-radius: calc(var(--t-width) / 2);\n\ttransition:\n\t\tbackground-color var(--transition)\n\t\tborder-color var(--transition);\n}\n.Checkbox_1-eX4:focus + .Toggle_2uz08 {\n\toutline: 1px dotted #212121;\n\toutline: 5px auto -webkit-focus-ring-color;\n}\n.Checkbox_1-eX4:checked + .Toggle_2uz08 .ToggleBall_Mb9so {\n\tleft: var(--tb-left-checked);\n\n\t--tb-background-color: var(--color-white);\n}\n.Checkbox_1-eX4:disabled + .Toggle_2uz08 {\n\t\tborder-color: var(--color-black-05);\n}\n.Checkbox_1-eX4:disabled:not(:checked) + .Toggle_2uz08 {\n\t\tbackground-color: var(--color-black-05);\n\n\t\t--tb-background-color: var(--color-black-15);\n}\n.Checkbox_1-eX4:disabled:checked + .Toggle_2uz08 {\n\t\tbackground-color: var(--color-black-15);\n}\n.Checkbox_1-eX4:invalid + .Toggle_2uz08 {\n\t\tborder-color: var(--color-error);\n}\n.Checkbox_1-eX4:invalid:not(:checked) + .Toggle_2uz08 {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-error);\n}\n.Checkbox_1-eX4:invalid:checked + .Toggle_2uz08 {\n\t\tbackground-color: var(--color-error);\n}\n.Checkbox_1-eX4:not(:disabled):not(:invalid) + .Toggle_2uz08 {\n\t\tborder-color: var(--color-black-30);\n}\n.Checkbox_1-eX4:not(:disabled):not(:invalid):not(:checked) + .Toggle_2uz08 {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-black-30)\n}\n.Checkbox_1-eX4:not(:disabled):not(:invalid):not(:checked) + .Toggle_2uz08:hover,\n\t\t.Checkbox_1-eX4:not(:disabled):not(:invalid):not(:checked) + .Toggle_2uz08:active,\n\t\t.Checkbox_1-eX4:not(:disabled):not(:invalid):not(:checked) + .Toggle_2uz08:focus {\n\t\t\tborder-color: var(--color-black-90);\n\n\t\t\t--tb-background-color: var(--color-black-90);\n}\n.Checkbox_1-eX4:not(:disabled):not(:invalid):checked + .Toggle_2uz08 {\n\t\tbackground-color: var(--color-black-90);\n\t\tborder-color: var(--color-black-90);\n}\n',""]),t.locals={ToggleContainer:"ToggleContainer_3b9Gc",Checkbox:"Checkbox_1-eX4",ToggleBall:"ToggleBall_Mb9so",Toggle:"Toggle_2uz08"},n.exports=t},290:function(n,o,a){"use strict";a(161)},291:function(n,o,a){var t=a(1)(!1);t.push([n.i,'\n.markdown-body .octicon[data-v-59b3bce5] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-59b3bce5] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-59b3bce5]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-59b3bce5],\n.markdown-body h2 .octicon-link[data-v-59b3bce5],\n.markdown-body h3 .octicon-link[data-v-59b3bce5],\n.markdown-body h4 .octicon-link[data-v-59b3bce5],\n.markdown-body h5 .octicon-link[data-v-59b3bce5],\n.markdown-body h6 .octicon-link[data-v-59b3bce5] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-59b3bce5],\n.markdown-body h2:hover .anchor[data-v-59b3bce5],\n.markdown-body h3:hover .anchor[data-v-59b3bce5],\n.markdown-body h4:hover .anchor[data-v-59b3bce5],\n.markdown-body h5:hover .anchor[data-v-59b3bce5],\n.markdown-body h6:hover .anchor[data-v-59b3bce5] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-59b3bce5],\n.markdown-body h2:hover .anchor .octicon-link[data-v-59b3bce5],\n.markdown-body h3:hover .anchor .octicon-link[data-v-59b3bce5],\n.markdown-body h4:hover .anchor .octicon-link[data-v-59b3bce5],\n.markdown-body h5:hover .anchor .octicon-link[data-v-59b3bce5],\n.markdown-body h6:hover .anchor .octicon-link[data-v-59b3bce5] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-59b3bce5]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-59b3bce5]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-59b3bce5]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-59b3bce5]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-59b3bce5]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-59b3bce5]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-59b3bce5] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-59b3bce5] {\n  display: block;\n}\n.markdown-body summary[data-v-59b3bce5] {\n  display: list-item;\n}\n.markdown-body a[data-v-59b3bce5] {\n  background-color: initial;\n}\n.markdown-body a[data-v-59b3bce5]:active,\n.markdown-body a[data-v-59b3bce5]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-59b3bce5] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-59b3bce5] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-59b3bce5] {\n  border-style: none;\n}\n.markdown-body code[data-v-59b3bce5],\n.markdown-body kbd[data-v-59b3bce5],\n.markdown-body pre[data-v-59b3bce5] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-59b3bce5] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-59b3bce5] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-59b3bce5] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-59b3bce5] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-59b3bce5] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-59b3bce5] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-59b3bce5] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-59b3bce5]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-59b3bce5] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-59b3bce5] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-59b3bce5]:after,\n.markdown-body hr[data-v-59b3bce5]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-59b3bce5]:after {\n  clear: both;\n}\n.markdown-body table[data-v-59b3bce5] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-59b3bce5],\n.markdown-body th[data-v-59b3bce5] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-59b3bce5] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-59b3bce5] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-59b3bce5],\n.markdown-body h2[data-v-59b3bce5],\n.markdown-body h3[data-v-59b3bce5],\n.markdown-body h4[data-v-59b3bce5],\n.markdown-body h5[data-v-59b3bce5],\n.markdown-body h6[data-v-59b3bce5] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-59b3bce5] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-59b3bce5],\n.markdown-body h2[data-v-59b3bce5] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-59b3bce5] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-59b3bce5] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-59b3bce5],\n.markdown-body h4[data-v-59b3bce5] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-59b3bce5] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-59b3bce5] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-59b3bce5],\n.markdown-body h6[data-v-59b3bce5] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-59b3bce5] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-59b3bce5] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-59b3bce5] {\n  margin: 0;\n}\n.markdown-body ol[data-v-59b3bce5],\n.markdown-body ul[data-v-59b3bce5] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-59b3bce5],\n.markdown-body ul ol[data-v-59b3bce5] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-59b3bce5],\n.markdown-body ol ul ol[data-v-59b3bce5],\n.markdown-body ul ol ol[data-v-59b3bce5],\n.markdown-body ul ul ol[data-v-59b3bce5] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-59b3bce5] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-59b3bce5],\n.markdown-body pre[data-v-59b3bce5] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-59b3bce5] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-59b3bce5]::-webkit-inner-spin-button,\n.markdown-body input[data-v-59b3bce5]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-59b3bce5] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-59b3bce5] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-59b3bce5] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-59b3bce5] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-59b3bce5] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-59b3bce5] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-59b3bce5] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-59b3bce5] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-59b3bce5] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-59b3bce5] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-59b3bce5] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-59b3bce5] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-59b3bce5] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-59b3bce5] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-59b3bce5] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-59b3bce5],\n.markdown-body .px-3[data-v-59b3bce5] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-59b3bce5] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-59b3bce5] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-59b3bce5] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-59b3bce5] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-59b3bce5] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-59b3bce5] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-59b3bce5] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-59b3bce5] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-59b3bce5],\n.markdown-body .pl-s .pl-v[data-v-59b3bce5] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-59b3bce5],\n.markdown-body .pl-en[data-v-59b3bce5] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-59b3bce5],\n.markdown-body .pl-smi[data-v-59b3bce5] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-59b3bce5] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-59b3bce5] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-59b3bce5],\n.markdown-body .pl-s[data-v-59b3bce5],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-59b3bce5],\n.markdown-body .pl-sr[data-v-59b3bce5],\n.markdown-body .pl-sr .pl-cce[data-v-59b3bce5],\n.markdown-body .pl-sr .pl-sra[data-v-59b3bce5],\n.markdown-body .pl-sr .pl-sre[data-v-59b3bce5] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-59b3bce5],\n.markdown-body .pl-v[data-v-59b3bce5] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-59b3bce5] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-59b3bce5] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-59b3bce5] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-59b3bce5]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-59b3bce5] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-59b3bce5] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-59b3bce5],\n.markdown-body .pl-mh .pl-en[data-v-59b3bce5],\n.markdown-body .pl-ms[data-v-59b3bce5] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-59b3bce5] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-59b3bce5] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-59b3bce5] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-59b3bce5] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-59b3bce5] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-59b3bce5] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-59b3bce5] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-59b3bce5] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-59b3bce5] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-59b3bce5] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-59b3bce5] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-59b3bce5] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-59b3bce5] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-59b3bce5] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-59b3bce5] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-59b3bce5] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-59b3bce5] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-59b3bce5] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-59b3bce5] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-59b3bce5] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-59b3bce5] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-59b3bce5] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-59b3bce5] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-59b3bce5] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-59b3bce5] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-59b3bce5] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-59b3bce5] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-59b3bce5] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-59b3bce5] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-59b3bce5] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-59b3bce5]:after,\n.markdown-body[data-v-59b3bce5]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-59b3bce5]:after {\n  clear: both;\n}\n.markdown-body[data-v-59b3bce5]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-59b3bce5]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-59b3bce5]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-59b3bce5],\n.markdown-body details[data-v-59b3bce5],\n.markdown-body dl[data-v-59b3bce5],\n.markdown-body ol[data-v-59b3bce5],\n.markdown-body p[data-v-59b3bce5],\n.markdown-body pre[data-v-59b3bce5],\n.markdown-body table[data-v-59b3bce5],\n.markdown-body ul[data-v-59b3bce5] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-59b3bce5] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-59b3bce5] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-59b3bce5]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-59b3bce5]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-59b3bce5],\n.markdown-body h2[data-v-59b3bce5],\n.markdown-body h3[data-v-59b3bce5],\n.markdown-body h4[data-v-59b3bce5],\n.markdown-body h5[data-v-59b3bce5],\n.markdown-body h6[data-v-59b3bce5] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-59b3bce5] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-59b3bce5],\n.markdown-body h2[data-v-59b3bce5] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-59b3bce5] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-59b3bce5] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-59b3bce5] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-59b3bce5] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-59b3bce5] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-59b3bce5],\n.markdown-body ul[data-v-59b3bce5] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-59b3bce5],\n.markdown-body ol ul[data-v-59b3bce5],\n.markdown-body ul ol[data-v-59b3bce5],\n.markdown-body ul ul[data-v-59b3bce5] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-59b3bce5] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-59b3bce5] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-59b3bce5] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-59b3bce5] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-59b3bce5] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-59b3bce5] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-59b3bce5] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-59b3bce5] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-59b3bce5],\n.markdown-body table th[data-v-59b3bce5] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-59b3bce5] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-59b3bce5]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-59b3bce5] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-59b3bce5] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-59b3bce5] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-59b3bce5] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-59b3bce5] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-59b3bce5] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-59b3bce5] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-59b3bce5] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-59b3bce5],\n.markdown-body pre[data-v-59b3bce5] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-59b3bce5] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-59b3bce5] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-59b3bce5]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-59b3bce5] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-59b3bce5] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-59b3bce5] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-59b3bce5]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-59b3bce5]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-59b3bce5] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-59b3bce5] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-59b3bce5],\n.markdown-body .pl-token[data-v-59b3bce5]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-59b3bce5] {\n  -moz-tab-size: 1;\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-59b3bce5] {\n  -moz-tab-size: 2;\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-59b3bce5] {\n  -moz-tab-size: 3;\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-59b3bce5] {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-59b3bce5] {\n  -moz-tab-size: 5;\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-59b3bce5] {\n  -moz-tab-size: 6;\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-59b3bce5] {\n  -moz-tab-size: 7;\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-59b3bce5] {\n  -moz-tab-size: 8;\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-59b3bce5] {\n  -moz-tab-size: 9;\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-59b3bce5] {\n  -moz-tab-size: 10;\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-59b3bce5] {\n  -moz-tab-size: 11;\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-59b3bce5] {\n  -moz-tab-size: 12;\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-59b3bce5] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-59b3bce5] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-59b3bce5] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},34:function(n,o,a){"use strict";a.r(o);var t=a(88),e={inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"},props:{toggled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1}},computed:{toggleValue:{get(){return this.toggled},set(n){this.$emit("toggle:update",n)}}},watch:{invalid:"setCustomValidity"},mounted(){this.setCustomValidity()},methods:{setCustomValidity(){this.$refs.checkbox.setCustomValidity(this.invalid?"invalid":"")}}},d=a(288),b=a(0);var r={components:{ToggleControl:Object(b.a)(e,(function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{class:n.$s.ToggleContainer},[a("input",n._g(n._b({directives:[{name:"model",rawName:"v-model",value:n.toggleValue,expression:"toggleValue"}],ref:"checkbox",class:n.$s.Checkbox,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.toggleValue)?n._i(n.toggleValue,null)>-1:n.toggleValue},on:{change:function(o){var a=n.toggleValue,t=o.target,e=!!t.checked;if(Array.isArray(a)){var d=n._i(a,null);t.checked?d<0&&(n.toggleValue=a.concat([null])):d>-1&&(n.toggleValue=a.slice(0,d).concat(a.slice(d+1)))}else n.toggleValue=e}}},"input",n.$attrs,!1),n.$listeners)),n._v(" "),a("div",{class:n.$s.Toggle},[a("div",{class:n.$s.ToggleBall})])])}),[],!1,(function(n){this.$s=d.default.locals||d.default}),null,null).exports,MInlineFormControlLayout:t.a},inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"}},l={components:{MToggle:Object(b.a)(r,(function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("m-inline-form-control-layout",{scopedSlots:n._u([{key:"control",fn:function(){return[a("toggle-control",n._g(n._b({},"toggle-control",n.$attrs,!1),n.$listeners))]},proxy:!0},{key:"label",fn:function(){return[n._t("default")]},proxy:!0},{key:"sublabel",fn:function(){return[n._t("sublabel")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports},data:()=>({normalValue:!0,disabledValue:!0,invalidValue:!0})},i=Object(b.a)(l,(function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",[a("h4",[n._v("normal state")]),n._v(" "),a("m-toggle",[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("m-toggle",{model:{value:n.normalValue,callback:function(o){n.normalValue=o},expression:"normalValue"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("h4",[n._v("disabled state")]),n._v(" "),a("m-toggle",{attrs:{disabled:""}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("m-toggle",{attrs:{disabled:""},model:{value:n.disabledValue,callback:function(o){n.disabledValue=o},expression:"disabledValue"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("h4",[n._v("invalid state")]),n._v(" "),a("m-toggle",{attrs:{invalid:""}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("m-toggle",{attrs:{invalid:""},model:{value:n.invalidValue,callback:function(o){n.invalidValue=o},expression:"invalidValue"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("h4",[n._v("toggle values")]),n._v(" "),a("pre",[a("code",[n._v(n._s(JSON.stringify(n.$data,null,4)))])]),n._v(" "),a("h4",[n._v("example with label")]),n._v(" "),a("m-toggle",[n._v("\n\t\tI am a really long label with lots of text and\n\t\tmore text and please wrap already wrap wrap wrap wrap\n\t")]),n._v(" "),a("h4",[n._v("example with label + sublabel")]),n._v(" "),a("m-toggle",{scopedSlots:n._u([{key:"sublabel",fn:function(){return[n._v("\n\t\t\tI am a sublabel text text wrap wrap wrap\n\t\t\ttext text text wrap wrap wrap wrap wrap wrap\n\t\t")]},proxy:!0}])},[n._v("\n\t\tI am a really long label with lots of text and\n\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t")])],1)}),[],!1,null,null,null).exports,c=a(51),m={components:{Demo0:i,DemoCollapse:c.DemoCollapse,SrcFile:c.SrcFile}},v=(a(290),Object(b.a)(m,(function(){var n=this.$createElement;this._self._c;return this._m(5)}),[function(){var n=this.$createElement,o=this._self._c||n;return o("p",[this._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox"}},[o("code",[this._v('<input type="checkbox">')])]),this._v(".")])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("table",[a("thead",[a("tr",[a("th",[n._v("Prop")]),n._v(" "),a("th",[n._v("Type")]),n._v(" "),a("th",[n._v("Default")]),n._v(" "),a("th",[n._v("Possible values")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("v-model")]),n._v(" "),a("td",[a("code",[n._v("boolean")])]),n._v(" "),a("td",[a("code",[n._v("false")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("Current toggled state")])]),n._v(" "),a("tr",[a("td",[n._v("invalid")]),n._v(" "),a("td",[a("code",[n._v("boolean")])]),n._v(" "),a("td",[a("code",[n._v("false")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("Toggles Toggle invalid state")])])])])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("table",[a("thead",[a("tr",[a("th",[n._v("Slot")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("default")]),n._v(" "),a("td",[n._v("toggle label")])]),n._v(" "),a("tr",[a("td",[n._v("sublabel")]),n._v(" "),a("td",[n._v("toggle sublabel")])])])])},function(){var n=this.$createElement,o=this._self._c||n;return o("p",[this._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox"}},[o("code",[this._v('<input type="checkbox">')])]),this._v(".")])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("table",[a("thead",[a("tr",[a("th",[n._v("Event")]),n._v(" "),a("th",[n._v("Type")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("toggle:update")]),n._v(" "),a("td",[a("code",[n._v("boolean")])]),n._v(" "),a("td",[n._v("toggle’s updated value")])])])])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{staticClass:"markdown-body"},[a("h1",[n._v("Toggle")]),n._v(" "),a("demo-collapse",[a("Demo0"),n._v(" "),a("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<h4>normal state</h4>\n\t\t<m-toggle>\n\t\t\tlabel\n\t\t</m-toggle>\n\t\t<m-toggle v-model="normalValue">\n\t\t\tlabel\n\t\t</m-toggle>\n\n\t\t<h4>disabled state</h4>\n\t\t<m-toggle disabled>\n\t\t\tlabel\n\t\t</m-toggle>\n\t\t<m-toggle\n\t\t\tv-model="disabledValue"\n\t\t\tdisabled\n\t\t>\n\t\t\tlabel\n\t\t</m-toggle>\n\n\t\t<h4>invalid state</h4>\n\t\t<m-toggle invalid>\n\t\t\tlabel\n\t\t</m-toggle>\n\t\t<m-toggle\n\t\t\tv-model="invalidValue"\n\t\t\tinvalid\n\t\t>\n\t\t\tlabel\n\t\t</m-toggle>\n\n\t\t<h4>toggle values</h4>\n\t\t<pre><code>{{ JSON.stringify($data, null, 4) }}</code></pre>\n\n\t\t<h4>example with label</h4>\n\t\t<m-toggle>\n\t\t\tI am a really long label with lots of text and\n\t\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t</m-toggle>\n\n\t\t<h4>example with label + sublabel</h4>\n\t\t<m-toggle>\n\t\t\tI am a really long label with lots of text and\n\t\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t\t<template #sublabel>\n\t\t\t\tI am a sublabel text text wrap wrap wrap\n\t\t\t\ttext text text wrap wrap wrap wrap wrap wrap\n\t\t\t</template>\n\t\t</m-toggle>\n\t</div>\n</template>\n\n<script>\nimport { MToggle } from \'@square/maker/components/Toggle\';\n\nexport default {\n\tcomponents: {\n\t\tMToggle,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tnormalValue: true,\n\t\t\tdisabledValue: true,\n\t\t\tinvalidValue: true,\n\t\t};\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),a("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),a("h2",[n._v("Slots")]),n._v(" "),n._m(2),n._v(" "),a("h2",[n._v("Events")]),n._v(" "),n._m(3),n._v(" "),n._m(4)],1)}],!1,null,"59b3bce5",null));o.default=v.exports},55:function(n,o,a){var t=a(85);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,a(3).default)("076e59c6",t,!0,{})},84:function(n,o,a){"use strict";var t=a(55),e=a.n(t);a.d(o,"default",(function(){return e.a}))},85:function(n,o,a){var t=a(1)(!1);t.push([n.i,"\n.LayoutContainer_3uA1x {\n\t--color-foreground: rgba(0, 0, 0, 0.9);\n\t--color-sublabel: rgba(0, 0, 0, 0.55);\n\n\tdisplay: inline-flex;\n\tcolor: var(--color-foreground);\n\tfont-size: 14px;\n\tfont-family: inherit;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.ControlAligner_2eg2u {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 24px;\n\tmargin-right: 8px;\n}\n.SubLabel_3KBJT {\n\tcolor: var(--color-sublabel);\n}\n",""]),t.locals={LayoutContainer:"LayoutContainer_3uA1x",ControlAligner:"ControlAligner_2eg2u",SubLabel:"SubLabel_3KBJT"},n.exports=t},88:function(n,o,a){"use strict";a.d(o,"a",(function(){return l}));const t=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"];var e={warn(n,o){n||console.warn(...t,o)},error(n,o){if(!n)throw console.error(...t,o),new Error("[@square/maker] "+o)}},d={mounted(){e.error(this.$slots.label,'Missing "label" slot in inline form control')}},b=a(84),r=a(0);var l=Object(r.a)(d,(function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("label",{class:n.$s.LayoutContainer},[a("div",{class:n.$s.ControlAligner},[n._t("control")],2),n._v(" "),a("div",[n._t("label"),n._v(" "),n.$slots.sublabel?a("div",{class:n.$s.SubLabel},[n._t("sublabel")],2):n._e()],2)])}),[],!1,(function(n){this.$s=b.default.locals||b.default}),null,null).exports}}]);