(function () {function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,s)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(i,!0).forEach(function(e){d(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a={icon:"image",data:function(){return{options:[]}},props:{endpoints:Object,attrs:{type:Object,default:function(){return{}}}},computed:{style:function(){if(this.attrs.ratio)return"padding-bottom:"+100/this.attrs.ratio+"%"},fields:function(){return{alt:{label:this.$t("editor.blocks.srcset.alt.label"),type:"text",icon:"text"},css:{label:this.$t("editor.blocks.srcset.css.label"),type:"text",icon:"code"},width:{label:this.$t("editor.blocks.srcset.width.label"),type:"number",after:"px"},height:{label:this.$t("editor.blocks.srcset.height.label"),type:"number",after:"px"},imgclass:{label:this.$t("editor.blocks.srcset.imgclass.label"),type:"text",icon:"code"},link:{label:this.$t("editor.blocks.srcset.link.label"),type:"text",icon:"url",placeholder:this.$t("editor.blocks.srcset.link.placeholder")},linkclass:{label:this.$t("editor.blocks.srcset.linkclass.label"),type:"text",icon:"code"},rel:{label:this.$t("editor.blocks.srcset.rel.label"),type:"text",icon:"code"},target:{label:this.$t("editor.blocks.srcset.target.label"),type:"text",icon:"code"},title:{label:this.$t("editor.blocks.srcset.title.label"),type:"text",icon:"text"},sizes:{label:this.$t("editor.blocks.srcset.sizes.label"),type:"text",icon:"code",placeholder:"default"},lazy:{label:this.$t("editor.blocks.srcset.lazy.label"),type:"text",icon:"code",placeholder:this.options.lazy},prefix:{label:this.$t("editor.blocks.srcset.prefix.label"),type:"text",icon:"code",placeholder:this.options.prefix},autosizes:{label:this.$t("editor.blocks.srcset.autosizes.label"),type:"text",icon:"code",placeholder:this.options.autosizes},quality:{label:this.$t("editor.blocks.srcset.quality.label"),type:"number",after:"px",placeholder:this.options.quality},figure:{label:this.$t("editor.blocks.srcset.figure.label"),type:"text",icon:"code",placeholder:this.options.figure}}}},mounted:function(){this.fetchOptions("bnomei/srcset/options")},methods:{fetchOptions:function(t){var e=this;this.$api.get(t).then(function(t){e.$nextTick(function(){e.options=t})})},caption:function(t){this.input({caption:t})},edit:function(){this.attrs.guid&&this.$router.push(this.attrs.guid)},focus:function(){this.$refs.element.focus()},input:function(t){this.$emit("input",{attrs:c({},this.attrs,{},t)})},fetchFile:function(t){var e=this;this.$api.get(t).then(function(t){e.input({guid:t.link,src:t.url,id:t.id,ratio:t.dimensions.ratio})})},insertFile:function(t){var e=t[0];this.fetchFile(e.link)},insertUpload:function(t,e){this.fetchFile(e[0].link)},menu:function(){return this.attrs.src?[{icon:"open",label:this.$t("editor.blocks.srcset.open.browser"),clicks:this.open},{icon:"edit",label:this.$t("editor.blocks.srcset.open.panel"),click:this.edit,disabled:!this.attrs.guid},{icon:"cog",label:this.$t("editor.blocks.srcset.settings"),click:this.$refs.settings.open},{icon:"image",label:this.$t("editor.blocks.srcset.replace"),click:this.replace}]:[]},open:function(){window.open(this.attrs.src)},onLoad:function(){var t=this.$refs.image;!this.attrs.ratio&&t&&t.width&&t.height&&this.input({ratio:t.width/t.height})},replace:function(){this.$emit("input",{attrs:{}})},selectFile:function(){this.$refs.fileDialog.open({endpoint:this.endpoints.field+"/files",multiple:!1,selected:[this.attrs.id]})},settings:function(){this.$refs.settings.open()},saveSettings:function(){this.$refs.settings.close(),this.input(this.attrs)},uploadFile:function(){this.$refs.fileUpload.open({url:window.panel.api+"/"+this.endpoints.field+"/upload",multiple:!1,accept:"image/*"})}}};if(typeof a==="function"){a=a.options}Object.assign(a,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_c("figure",[_vm.attrs.src?[_c("div",{ref:"element",staticClass:"k-editor-image-block-wrapper",style:_vm.style,attrs:{"data-responsive":_vm.attrs.ratio,"tabindex":"0"},on:{"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){return null}return _vm.$emit("remove")},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null}return _vm.$emit("append")},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.$emit("prev")},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.$emit("next")}]}},[_c("img",{key:_vm.attrs.src,ref:"image",attrs:{"src":_vm.attrs.src},on:{"dblclick":_vm.selectFile,"load":_vm.onLoad}})]),_vm._v(" "),_c("div",{staticClass:"lazysrcset-icon"},[_c("k-button",{attrs:{"icon":"cog"},on:{"click":_vm.settings}},[_vm._v(_vm._s(_vm.$t("editor.blocks.srcset.icon"))+" ")])],1),_vm._v(" "),_c("figcaption",[_c("k-editable",{attrs:{"content":_vm.attrs.caption,"breaks":true,"placeholder":_vm.$t("editor.blocks.srcset.caption.placeholder")+"\u2026"},on:{"input":_vm.caption}})],1)]:[_c("div",{ref:"element",staticClass:"k-editor-image-block-placeholder",attrs:{"tabindex":"0"}},[_c("k-button",{attrs:{"icon":"upload"},on:{"click":_vm.uploadFile}},[_vm._v(_vm._s(_vm.$t("editor.blocks.srcset.upload"))+" ")]),_vm._v(" "+_vm._s(_vm.$t("editor.blocks.srcset.or"))+" "),_c("k-button",{attrs:{"icon":"image"},on:{"click":_vm.selectFile}},[_vm._v(_vm._s(_vm.$t("editor.blocks.srcset.select"))+" ")])],1)]],2),_vm._v(" "),_c("k-dialog",{ref:"settings",attrs:{"size":"medium"},on:{"submit":_vm.saveSettings}},[_c("k-form",{attrs:{"fields":_vm.fields},on:{"submit":_vm.saveSettings},model:{value:_vm.attrs,callback:function($$v){_vm.attrs=$$v},expression:"attrs"}})],1),_vm._v(" "),_c("k-files-dialog",{ref:"fileDialog",on:{"submit":function($event){return _vm.insertFile($event)}}}),_vm._v(" "),_c("k-upload",{ref:"fileUpload",on:{"success":_vm.insertUpload}})],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());editor.block("srcset",a);})();