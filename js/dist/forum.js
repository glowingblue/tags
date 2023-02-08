/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={810:()=>{},990:(t,e,n)=>{"use strict";n.d(e,{l:()=>Ft});const r=flarum.core.compat["forum/app"];var a=n.n(r);function o(t,e,n,r,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,a)}var s=n(507),i=n.n(s);const c=flarum.core.compat["common/app"];var l=n.n(c),u=function(){function t(){this.loadedIncludes=new Set}return t.prototype.load=function(){var t,e=(t=i().mark((function t(e){var n,r=this;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e=[]),0!==(n=e.filter((function(t){return!r.loadedIncludes.has(t)}))).length){t.next=4;break}return t.abrupt("return",Promise.resolve(l().store.all("tags")));case 4:return t.abrupt("return",l().store.find("tags",{include:n.join(",")}).then((function(t){return n.forEach((function(t){return r.loadedIncludes.add(t)})),t})));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function i(t){o(s,r,a,i,c,"next",t)}function c(t){o(s,r,a,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),t}();const d=flarum.core.compat["common/extend"],f=flarum.core.compat["forum/components/IndexPage"];var p=n.n(f);const h=flarum.core.compat["common/components/Separator"];var g=n.n(h);const v=flarum.core.compat["common/components/LinkButton"];var y=n.n(v);function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function T(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,b(t,e)}const x=flarum.core.compat["common/components/Link"];var w=n.n(x);const _=flarum.core.compat["common/utils/classList"];var N=n.n(_);function L(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var r=t&&t.icon(),a=n.useColor,o=void 0===a||a;return e.className=N()([e.className,"icon",r?t.icon():"TagIcon"]),t&&o?(e.style=e.style||{},e.style["--color"]=t.color(),r&&(e.style.color=t.color())):t||(e.className+=" untagged"),r?m("i",e):m("span",e)}var S=function(t){function e(){return t.apply(this,arguments)||this}return T(e,t),e.prototype.view=function(t){var e=this.attrs.model,n=(this.constructor.isActive(this.attrs),e&&e.description()),r=N()(["TagLinkButton","hasIcon",this.attrs.className,e.isChild()&&"child"]);return m(w(),{className:r,href:this.attrs.route,style:e?{"--color":e.color()}:"",title:n||""},L(e,{className:"Button-icon"}),m("span",{className:"Button-label"},e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link")))},e.initAttrs=function(e){t.initAttrs.call(this,e);var n=e.model;e.params.tags=n?n.slug():"untagged",e.route=app.route("tag",e.params)},e}(y());const P=flarum.core.compat["common/components/Page"];var I=n.n(P);const C=flarum.core.compat["common/components/LoadingIndicator"];var k=n.n(C);const D=flarum.core.compat["common/helpers/listItems"];var E=n.n(D);const O=flarum.core.compat["common/helpers/humanTime"];var A=n.n(O);const M=flarum.core.compat["common/helpers/textContrastClass"];var R=n.n(M);const j=flarum.core.compat["common/utils/extract"];var q=n.n(j);function B(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var n=q()(e,"link"),r=t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text");if(t){var a=t.color();a&&(e.style["--tag-bg"]=a,e.className=N()(e.className,"colored",R()(a))),n&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()})),t.isChild()&&(e.className+=" TagLabel--child")}else e.className+=" untagged";return m(n?w():"span",e,m("span",{className:"TagLabel-text"},t&&t.icon()&&L(t,{},{useColor:!1})," ",r))}function H(t){return t.slice(0).sort((function(t,e){var n=t.position(),r=e.position();if(null===n&&null===r)return e.discussionCount()-t.discussionCount();if(null===r)return-1;if(null===n)return 1;var a=t.parent(),o=e.parent();return a===o?n-r:a&&o?a.position()-o.position():a?a===e?1:a.position()-r:o?o===t?-1:n-o.position():0}))}var F=function(t){function e(){return t.apply(this,arguments)||this}T(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip")),this.tags=[];var r=app.preloadedApiDocument();r?this.tags=H(r.filter((function(t){return!t.isChild()}))):(this.loading=!0,app.tagList.load(["children","lastPostedDiscussion","parent"]).then((function(){n.tags=H(app.store.all("tags").filter((function(t){return!t.isChild()}))),n.loading=!1,m.redraw()})))},n.view=function(){if(this.loading)return m(k(),null);var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},p().prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,E()(p().prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),n=H(t.children()||[]);return m("li",{className:N()("TagTile",{colored:t.color()},R()(t.color())),style:{"--tag-bg":t.color()}},m(w(),{className:"TagTile-info",href:app.route.tag(t)},t.icon()&&L(t,{},{useColor:!1}),m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),n?m("div",{className:"TagTile-children"},n.map((function(t){return[m(w(),{href:app.route.tag(t)},t.name())," "]}))):""),e?m(w(),{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber())},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),A()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))}))),e.length?m("div",{className:"TagCloud"},e.map((function(t){return[B(t,{link:!0})," "]}))):"")))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),app.setTitle(app.translator.trans("flarum-tags.forum.all_tags.meta_title_text")),app.setTitleCount(0)},e}(I());function G(){(0,d.extend)(p().prototype,"navItems",(function(t){if(t.add("tags",m(y(),{icon:"fas fa-th-large",href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.tags_link")),-10),!app.current.matches(F)){t.add("separator",g().component(),-12);var e=app.search.stickyParams(),n=app.store.all("tags"),r=this.currentTag(),a=function(n){var a=r===n;!a&&r&&(a=r.parent()===n),t.add("tag"+n.id(),S.component({model:n,params:e,active:a},null==n?void 0:n.name()),-14)};H(n).filter((function(t){return null!==t.position()&&(!t.isChild()||r&&(t.parent()===r||t.parent()===r.parent()))})).forEach(a);var o=n.filter((function(t){return null===t.position()})).sort((function(t,e){return e.discussionCount()-t.discussionCount()}));o.splice(0,3).forEach(a),o.length&&t.add("moreTags",m(y(),{href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.more_link")),-16)}}))}const K=flarum.core.compat["forum/states/DiscussionListState"];var $=n.n(K);const U=flarum.core.compat["forum/states/GlobalSearchState"];var Y=n.n(U);const z=flarum.core.compat["common/Component"];var J=n.n(z),Q=function(t){function e(){return t.apply(this,arguments)||this}return T(e,t),e.prototype.view=function(){var t=this.attrs.model,e=t.color();return m("header",{className:N()("Hero","TagHero",{"TagHero--colored":e},R()(e)),style:e?{"--hero-bg":e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.icon()&&L(t,{},{useColor:!1})," ",t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(J()),V=function(t){return a().store.all("tags").find((function(e){return 0===e.slug().localeCompare(t,void 0,{sensitivity:"base"})}))};function W(){p().prototype.currentTag=function(){var t=this;if(this.currentActiveTag)return this.currentActiveTag;var e=a().search.params().tags,n=null;if(e&&(n=V(e)),e&&!n||n&&!n.isChild()&&!n.children()){if(this.currentTagLoading)return;this.currentTagLoading=!0,a().store.find("tags",e,{include:"children,children.parent,parent,state"}).then((function(){t.currentActiveTag=V(e),m.redraw()})).finally((function(){t.currentTagLoading=!1}))}return n?(this.currentActiveTag=n,this.currentActiveTag):void 0},(0,d.override)(p().prototype,"hero",(function(t){var e=this.currentTag();return e?m(Q,{model:e}):t()})),(0,d.extend)(p().prototype,"view",(function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())})),(0,d.extend)(p().prototype,"setTitle",(function(){var t=this.currentTag();t&&a().setTitle(t.name())})),(0,d.extend)(p().prototype,"sidebarItems",(function(t){var e=this.currentTag();if(e){var n=e.color(),r=e.canStartDiscussion()||!a().session.user,o=t.get("newDiscussion");n&&(o.attrs.className=N()([o.attrs.className,"Button--tagColored",R()(n)]),o.attrs.style={"--color":n}),o.attrs.disabled=!r,o.children=a().translator.trans(r?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")}})),(0,d.extend)(Y().prototype,"params",(function(t){t.tags=m.route.param("tags")})),(0,d.extend)($().prototype,"requestParams",(function(t){var e;if("string"==typeof t.include?t.include=[t.include]:null==(e=t.include)||e.push("tags","tags.parent"),this.params.tags){var n,r=null!=(n=t.filter)?n:{};r.tag=this.params.tags;var a=r.q;a&&(r.q=a+" tag:"+this.params.tags),t.filter=r}}))}const X=flarum.core.compat["forum/components/DiscussionListItem"];var Z=n.n(X);const tt=flarum.core.compat["forum/components/DiscussionHero"];var et=n.n(tt);function nt(t,e){void 0===e&&(e={});var n=[],r=q()(e,"link");return e.className="TagsLabel "+(e.className||""),t?H(t).forEach((function(e){(e||1===t.length)&&n.push(B(e,{link:r}))})):n.push(B()),m("span",e,n)}function rt(){(0,d.extend)(Z().prototype,"infoItems",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",nt(e),10)})),(0,d.extend)(et().prototype,"view",(function(t){var e=H(this.attrs.discussion.tags());if(e&&e.length){var n=e[0].color();n&&(t.attrs.style={"--hero-bg":n},t.attrs.className=N()(t.attrs.className,"DiscussionHero--colored",R()(n)))}})),(0,d.extend)(et().prototype,"items",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",nt(e,{link:!0}),5)}))}const at=flarum.core.compat["forum/utils/DiscussionControls"];var ot=n.n(at);const st=flarum.core.compat["common/components/Button"];var it=n.n(st);const ct=flarum.core.compat["forum/components/DiscussionPage"];var lt=n.n(ct);const ut=flarum.core.compat["common/utils/extractText"];var mt=n.n(ut);function dt(t){var e=app.store.all("tags");return t?e.filter((function(e){return e.canAddToDiscussion()||-1!==t.tags().indexOf(e)})):e.filter((function(t){return t.canStartDiscussion()}))}const ft=flarum.core.compat["common/helpers/highlight"];var pt=n.n(ft);const ht=flarum.core.compat["common/utils/KeyboardNavigatable"];var gt=n.n(ht);const vt=flarum.core.compat["common/components/Modal"];var yt=n.n(vt);const bt=flarum.core.compat["common/utils/Stream"];var Tt=n.n(bt),xt=["className","isToggled"],wt=function(t){function e(){return t.apply(this,arguments)||this}return T(e,t),e.prototype.view=function(t){var e=this.attrs,n=e.className,r=e.isToggled,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(e,xt),o=r?"far fa-check-circle":"far fa-circle";return m(it(),Object.assign({},a,{icon:o,className:N()([n,r&&"Button--toggled"])}),t.children)},e}(J()),_t=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).loading=!0,e.tags=void 0,e.selected=[],e.bypassReqs=!1,e.filter=Tt()(""),e.focused=!1,e.navigator=new(gt()),e.indexTag=void 0,e}T(e,t),e.initAttrs=function(e){var n,r,a,o,s,i,c,u,m,d,f,p,h,g,v,y,b,T;t.initAttrs.call(this,e),e.title||(e.title=mt()(l().translator.trans("flarum-tags.lib.tag_selection_modal.title"))),e.canSelect||(e.canSelect=function(){return!0}),null!=e.allowResetting||(e.allowResetting=!0),e.limits={min:{total:null!=(n=null==(r=e.limits)||null==(a=r.min)?void 0:a.total)?n:-1/0,primary:null!=(o=null==(s=e.limits)||null==(i=s.min)?void 0:i.primary)?o:-1/0,secondary:null!=(c=null==(u=e.limits)||null==(m=u.min)?void 0:m.secondary)?c:-1/0},max:{total:null!=(d=null==(f=e.limits)||null==(p=f.max)?void 0:p.total)?d:1/0,primary:null!=(h=null==(g=e.limits)||null==(v=g.max)?void 0:v.primary)?h:1/0,secondary:null!=(y=null==(b=e.limits)||null==(T=b.max)?void 0:T.secondary)?y:1/0}},function(t){if(t.min.primary>t.max.primary)throw new Error("The minimum number of primary tags allowed cannot be more than the maximum number of primary tags allowed.");if(t.min.secondary>t.max.secondary)throw new Error("The minimum number of secondary tags allowed cannot be more than the maximum number of secondary tags allowed.");if(t.min.total>t.max.primary+t.max.secondary)throw new Error("The minimum number of tags allowed cannot be more than the maximum number of primary and secondary tags allowed together.");if(t.max.total<t.min.primary+t.min.secondary)throw new Error("The maximum number of tags allowed cannot be less than the minimum number of primary and secondary tags allowed together.");if(t.min.total>t.max.total)throw new Error("The minimum number of tags allowed cannot be more than the maximum number of tags allowed.")}(e.limits)};var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.navigator.onUp((function(){return n.setIndex(n.getCurrentNumericIndex()-1,!0)})).onDown((function(){return n.setIndex(n.getCurrentNumericIndex()+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){return n.selected.splice(n.selected.length-1,1)})),l().tagList.load(["parent"]).then((function(t){n.loading=!1,n.attrs.selectableTags&&(t=n.attrs.selectableTags(t)),n.tags=H(t),n.attrs.selectedTags&&n.attrs.selectedTags.map(n.addTag.bind(n)),n.indexTag=t[0],m.redraw()}))},n.className=function(){return N()("TagSelectionModal",this.attrs.className)},n.title=function(){return this.attrs.title},n.content=function(){var t=this;if(this.loading||!this.tags)return m(k(),null);var e=this.filter().toLowerCase(),n=this.primaryCount(),r=this.secondaryCount(),a=this.getFilteredTags(),o=Math.max(mt()(this.getInstruction(n,r)).length,this.filter().length);return[m("div",{className:"Modal-body"},m("div",{className:"TagSelectionModal-form"},m("div",{className:"TagSelectionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":""),onclick:function(){return t.$(".TagsInput input").focus()}},m("span",{className:"TagsInput-selected"},this.selected.map((function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},B(e))}))),m("input",{className:"FormControl",placeholder:mt()(this.getInstruction(n,r)),bidi:this.filter,style:{width:o+"ch"},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagSelectionModal-form-submit App-primaryControl"},m(it(),{type:"submit",className:"Button Button--primary",disabled:!this.meetsRequirements(n,r),icon:"fas fa-check"},l().translator.trans("flarum-tags.lib.tag_selection_modal.submit_button"))))),m("div",{className:"Modal-footer"},m("ul",{className:"TagSelectionModal-list SelectTagList"},a.map((function(n){return m("li",{"data-index":n.id(),className:N()({pinned:null!==n.position(),child:!!n.parent(),colored:!!n.color(),selected:t.selected.includes(n),active:t.indexTag===n}),style:{color:n.color()},onmouseover:function(){return t.indexTag=n},onclick:t.toggleTag.bind(t,n)},L(n),m("span",{className:"SelectTagListItem-name"},pt()(n.name(),e)),n.description()?m("span",{className:"SelectTagListItem-description"},n.description()):"")}))),this.attrs.limits.allowBypassing&&m("div",{className:"TagSelectionModal-controls"},m(wt,{className:"Button",onclick:function(){return t.bypassReqs=!t.bypassReqs},isToggled:this.bypassReqs},l().translator.trans("flarum-tags.lib.tag_selection_modal.bypass_requirements"))))]},n.getFilteredTags=function(){var t=this,e=this.filter().toLowerCase(),n=this.primaryCount(),r=this.secondaryCount(),a=this.tags;return this.attrs.requireParentTag&&(a=a.filter((function(e){var n=e.parent();return null!==n&&(!1===n||t.selected.includes(n))}))),this.bypassReqs||(this.selected.length>=this.attrs.limits.max.total?a=a.filter((function(e){return t.selected.includes(e)})):(n>=this.attrs.limits.max.primary&&(a=a.filter((function(e){return!e.isPrimary()||t.selected.includes(e)}))),r>=this.attrs.limits.max.secondary&&(a=a.filter((function(e){return e.isPrimary()||t.selected.includes(e)}))))),e&&(a=a.filter((function(t){return t.name().substring(0,e.length).toLowerCase()===e}))),this.indexTag&&a.includes(this.indexTag)||(this.indexTag=a[0]),a},n.primaryCount=function(){return this.selected.filter((function(t){return t.isPrimary()})).length},n.secondaryCount=function(){return this.selected.filter((function(t){return!t.isPrimary()})).length},n.meetsRequirements=function(t,e){return!!(this.bypassReqs||this.attrs.allowResetting&&0===this.selected.length)||!(this.selected.length<this.attrs.limits.min.total)&&t>=this.attrs.limits.min.primary&&e>=this.attrs.limits.min.secondary},n.addTag=function(t){if(t&&this.attrs.canSelect(t)){if(this.attrs.onSelect&&this.attrs.onSelect(t,this.selected),this.attrs.requireParentTag){var e=t.parent();e&&!this.selected.includes(e)&&this.selected.push(e)}this.selected.includes(t)||this.selected.push(t)}},n.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.attrs.requireParentTag&&this.selected.filter((function(e){return e.parent()===t})).forEach(this.removeTag.bind(this)),this.attrs.onDeselect&&this.attrs.onDeselect(t,this.selected))},n.toggleTag=function(t){this.tags&&(this.selected.includes(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.indexTag=this.tags[0]),this.onready())},n.getInstruction=function(t,e){if(this.bypassReqs)return"";if(t<this.attrs.limits.min.primary){var n=this.attrs.limits.min.primary-t;return mt()(l().translator.trans("flarum-tags.lib.tag_selection_modal.choose_primary_placeholder",{count:n}))}if(e<this.attrs.limits.min.secondary){var r=this.attrs.limits.min.secondary-e;return mt()(l().translator.trans("flarum-tags.lib.tag_selection_modal.choose_secondary_placeholder",{count:r}))}if(this.selected.length<this.attrs.limits.min.total){var a=this.attrs.limits.min.total-this.selected.length;return mt()(l().translator.trans("flarum-tags.lib.tag_selection_modal.choose_tags_placeholder",{count:a}))}return""},n.onsubmit=function(t){t.preventDefault(),this.attrs.onsubmit&&this.attrs.onsubmit(this.selected),this.hide()},n.select=function(t){t.metaKey||t.ctrlKey||this.indexTag&&this.selected.includes(this.indexTag)?this.selected.length&&this.$('button[type="submit"]').click():this.indexTag&&this.getItem(this.indexTag)[0].dispatchEvent(new Event("click"))},n.selectableItems=function(){return this.$(".TagSelectionModal-list > li")},n.getCurrentNumericIndex=function(){return this.indexTag?this.selectableItems().index(this.getItem(this.indexTag)):-1},n.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},n.setIndex=function(t,e){var n=this.selectableItems(),r=n.parent();t<0?t=n.length-1:t>=n.length&&(t=0);var a=n.eq(t);if(this.indexTag=l().store.getById("tags",a.attr("data-index")),m.redraw(),e&&this.indexTag){var o,s=r.scrollTop(),i=r.offset().top,c=i+r.outerHeight(),u=a.offset().top,d=u+a.outerHeight();u<i?o=s-i+u-parseInt(r.css("padding-top"),10):d>c&&(o=s-c+d+parseInt(r.css("padding-bottom"),10)),void 0!==o&&r.stop(!0).animate({scrollTop:o},100)}},e}(yt()),Nt=function(t){function e(){return t.apply(this,arguments)||this}return T(e,t),e.initAttrs=function(e){var n;t.initAttrs.call(this,e);var r=e.discussion?a().translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,e.discussion.title())}):a().translator.trans("flarum-tags.forum.choose_tags.title");e.className=N()(e.className,"TagDiscussionModal"),e.title=mt()(r),e.allowResetting=!!a().forum.attribute("canBypassTagCounts"),e.limits={allowBypassing:e.allowResetting,max:{primary:a().forum.attribute("minPrimaryTags"),secondary:a().forum.attribute("maxSecondaryTags")},min:{primary:a().forum.attribute("maxPrimaryTags"),secondary:a().forum.attribute("minSecondaryTags")}},e.requireParentTag=!0,e.selectableTags=function(){return dt(e.discussion)},null!=e.selectedTags||(e.selectedTags=(null==(n=e.discussion)?void 0:n.tags())||[]),e.canSelect=function(t){return t.canStartDiscussion()};var o=e.onsubmit||null;e.onsubmit=function(t){var n=e.discussion;n&&n.save({relationships:{tags:t}}).then((function(){a().current.matches(lt())&&a().current.get("stream").update(),m.redraw()})),o&&o(t)}},e}(_t);function Lt(){(0,d.extend)(ot(),"moderationControls",(function(t,e){e.canTag()&&t.add("tags",m(it(),{icon:"fas fa-tag",onclick:function(){return app.modal.show(Nt,{discussion:e})}},app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button")))}))}const St=flarum.core.compat["forum/components/DiscussionComposer"];var Pt=n.n(St);function It(){(0,d.extend)(p().prototype,"newDiscussionAction",(function(t){var e=this.currentTag();if(e){var n=e.parent(),r=n?[n,e]:[e];t.then((function(t){return t.fields.tags=r}))}else app.composer.fields.tags=[]})),(0,d.extend)(Pt().prototype,"oninit",(function(){app.tagList.load(["parent"]).then((function(){return m.redraw()}))})),Pt().prototype.chooseTags=function(){var t=this;dt().length&&app.modal.show(Nt,{selectedTags:(this.composer.fields.tags||[]).slice(0),onsubmit:function(e){t.composer.fields.tags=e,t.$("textarea").focus()}})},(0,d.extend)(Pt().prototype,"headerItems",(function(t){var e=this.composer.fields.tags||[],n=dt();t.add("tags",m("a",{className:N()(["DiscussionComposer-changeTags",!n.length&&"disabled"]),onclick:this.chooseTags.bind(this)},e.length?nt(e):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)})),(0,d.override)(Pt().prototype,"onsubmit",(function(t){var e=this,n=this.composer.fields.tags||[],r=n.filter((function(t){return null!==t.position()&&!t.isChild()})),a=n.filter((function(t){return null===t.position()})),o=dt(),s=parseInt(app.forum.attribute("minPrimaryTags")),i=parseInt(app.forum.attribute("minSecondaryTags")),c=parseInt(app.forum.attribute("maxPrimaryTags")),l=parseInt(app.forum.attribute("maxSecondaryTags"));(!n.length&&0!==c&&0!==l||r.length<s||a.length<i)&&o.length?app.modal.show(Nt,{selectedTags:n,onsubmit:function(n){e.composer.fields.tags=n,t()}}):t()})),(0,d.extend)(Pt().prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.tags=this.composer.fields.tags}))}const Ct=flarum.core.compat["common/extenders"];var kt=n.n(Ct);const Dt=flarum.core.compat["common/models/Discussion"];var Et=n.n(Dt);const Ot=flarum.core.compat["forum/components/EventPost"];var At=function(t){function e(){return t.apply(this,arguments)||this}T(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e);var n=e.post.content()[0],r=e.post.content()[1];function a(t,e){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById("tags",t)}))}e.tagsAdded=a(r,n),e.tagsRemoved=a(n,r)};var n=e.prototype;return n.icon=function(){return"fas fa-tag"},n.descriptionKey=function(){return this.attrs.tagsAdded.length?this.attrs.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},n.descriptionData=function(){var t={};return this.attrs.tagsAdded.length&&(t.tagsAdded=app.translator.trans("flarum-tags.forum.post_stream.tags_text",{tags:nt(this.attrs.tagsAdded,{link:!0}),count:this.attrs.tagsAdded.length})),this.attrs.tagsRemoved.length&&(t.tagsRemoved=app.translator.trans("flarum-tags.forum.post_stream.tags_text",{tags:nt(this.attrs.tagsRemoved,{link:!0}),count:this.attrs.tagsRemoved.length})),t},e}(n.n(Ot)());const Mt=flarum.core.compat["common/utils/computed"];var Rt=n.n(Mt);const jt=flarum.core.compat["common/Model"];var qt=n.n(jt),Bt=function(t){function e(){return t.apply(this,arguments)||this}T(e,t);var n=e.prototype;return n.name=function(){return qt().attribute("name").call(this)},n.slug=function(){return qt().attribute("slug").call(this)},n.description=function(){return qt().attribute("description").call(this)},n.color=function(){return qt().attribute("color").call(this)},n.backgroundUrl=function(){return qt().attribute("backgroundUrl").call(this)},n.backgroundMode=function(){return qt().attribute("backgroundMode").call(this)},n.icon=function(){return qt().attribute("icon").call(this)},n.position=function(){return qt().attribute("position").call(this)},n.parent=function(){return qt().hasOne("parent").call(this)},n.children=function(){return qt().hasMany("children").call(this)},n.defaultSort=function(){return qt().attribute("defaultSort").call(this)},n.isChild=function(){return qt().attribute("isChild").call(this)},n.isHidden=function(){return qt().attribute("isHidden").call(this)},n.discussionCount=function(){return qt().attribute("discussionCount").call(this)},n.lastPostedAt=function(){return qt().attribute("lastPostedAt",qt().transformDate).call(this)},n.lastPostedDiscussion=function(){return qt().hasOne("lastPostedDiscussion").call(this)},n.isRestricted=function(){return qt().attribute("isRestricted").call(this)},n.canStartDiscussion=function(){return qt().attribute("canStartDiscussion").call(this)},n.canAddToDiscussion=function(){return qt().attribute("canAddToDiscussion").call(this)},n.isPrimary=function(){return Rt()("position","parent",(function(t,e){return null!==t&&!1===e})).call(this)},e}(qt());const Ht=[(new(kt().Store)).add("tags",Bt)],Ft=[].concat(Ht,[(new(kt().Routes)).add("tags","/tags",F).add("tag","/t/:tags",p()).helper("tag",(function(t){return a().route("tag",{tags:t.slug()})})),(new(kt().PostTypes)).add("discussionTagged",At),new(kt().Model)(Et()).hasMany("tags").attribute("canTag")]),Gt={"tags/utils/sortTags":H,"tags/models/Tag":Bt,"tags/helpers/tagsLabel":nt,"tags/helpers/tagIcon":L,"tags/helpers/tagLabel":B,"tags/components/TagSelectionModal":_t,"tags/states/TagListState":u},Kt=Object.assign(Gt,{"tags/addTagFilter":W,"tags/addTagControl":Lt,"tags/components/TagHero":Q,"tags/components/TagDiscussionModal":Nt,"tags/components/TagsPage":F,"tags/components/DiscussionTaggedPost":At,"tags/components/TagLinkButton":S,"tags/addTagList":G,"tags/addTagLabels":rt,"tags/addTagComposer":It,"tags/utils/getSelectableTags":dt}),$t=flarum.core;a().initializers.add("flarum-tags",(function(){a().tagList=new u,G(),W(),rt(),Lt(),It()})),Object.assign($t.compat,Kt)},440:(t,e,n)=>{var r=n(75).default;function a(){"use strict";t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function m(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{m({},"")}catch(t){m=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new I(r||[]);return s(o,"_invoke",{value:N(t,n,i)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p={};function h(){}function g(){}function v(){}var y={};m(y,c,(function(){return this}));var b=Object.getPrototypeOf,T=b&&b(b(C([])));T&&T!==n&&o.call(T,c)&&(y=T);var x=v.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){m(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(a,s,i,c){var l=f(t[a],t,s);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==r(m)&&o.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(m).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var a;s(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}})}function N(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var i=L(s,n);if(i){if(i===p)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return g.prototype=v,s(x,"constructor",{value:v,configurable:!0}),s(v,"constructor",{value:g,configurable:!0}),g.displayName=m(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,m(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},w(_.prototype),m(_.prototype,l,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var s=new _(d(t,n,r,a),o);return e.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(x),m(x,u,"Generator"),m(x,c,(function(){return this})),m(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},75:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},507:(t,e,n)=>{var r=n(440)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{extend:()=>a.l});var t=n(810),e={};for(const n in t)"default"!==n&&(e[n]=()=>t[n]);n.d(r,e);var a=n(990)})(),module.exports=r})();
//# sourceMappingURL=forum.js.map