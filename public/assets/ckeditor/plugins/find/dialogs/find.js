!function(){function t(t){return t.type==CKEDITOR.NODE_TEXT&&0<t.getLength()&&(!n||!t.isReadOnly())}function e(t){return!(t.type==CKEDITOR.NODE_ELEMENT&&t.isBlockBoundary(CKEDITOR.tools.extend({},CKEDITOR.dtd.$empty,CKEDITOR.dtd.$nonEditable)))}function a(a,s){function l(a,n){var i=this,h=new CKEDITOR.dom.walker(a);h.guard=n?e:function(t){!e(t)&&(i._.matchBoundary=!0)},h.evaluator=t,h.breakOnFalse=1,a.startContainer.type==CKEDITOR.NODE_TEXT&&(this.textNode=a.startContainer,this.offset=a.startOffset-1),this._={matchWord:n,walker:h,matchBoundary:!1}}function c(t,e){var n=a.createRange();return n.setStart(t.textNode,e?t.offset:t.offset+1),n.setEndAt(a.editable(),CKEDITOR.POSITION_BEFORE_END),n}function o(t){var e=a.getSelection().getRanges()[0],n=a.editable();return e&&!t?(t=e.clone(),t.collapse(!0)):(t=a.createRange(),t.setStartAt(n,CKEDITOR.POSITION_AFTER_START)),t.setEndAt(n,CKEDITOR.POSITION_BEFORE_END),t}var g=new CKEDITOR.style(CKEDITOR.tools.extend({attributes:{"data-cke-highlight":1},fullMatch:1,ignoreReadonly:1,childRule:function(){return 0}},a.config.find_highlight,!0));l.prototype={next:function(){return this.move()},back:function(){return this.move(!0)},move:function(t){var e=this.textNode;if(null===e)return i.call(this);if(this._.matchBoundary=!1,e&&t&&0<this.offset)this.offset--;else if(e&&this.offset<e.getLength()-1)this.offset++;else{for(e=null;!(e||(e=this._.walker[t?"previous":"next"].call(this._.walker),this._.matchWord&&!e||this._.walker._.end)););this.offset=(this.textNode=e)&&t?e.getLength()-1:0}return i.call(this)}};var d=function(t,e){this._={walker:t,cursors:[],rangeLength:e,highlightRange:null,isMatched:0}};d.prototype={toDomRange:function(){var t=a.createRange(),e=this._.cursors;if(1>e.length){var n=this._.walker.textNode;if(!n)return null;t.setStartAfter(n)}else n=e[0],e=e[e.length-1],t.setStart(n.textNode,n.offset),t.setEnd(e.textNode,e.offset+1);return t},updateFromDomRange:function(t){var e=new l(t);this._.cursors=[];do t=e.next(),t.character&&this._.cursors.push(t);while(t.character);this._.rangeLength=this._.cursors.length},setMatched:function(){this._.isMatched=!0},clearMatched:function(){this._.isMatched=!1},isMatched:function(){return this._.isMatched},highlight:function(){if(!(1>this._.cursors.length)){this._.highlightRange&&this.removeHighlight();var t=this.toDomRange(),e=t.createBookmark();g.applyToRange(t,a),t.moveToBookmark(e),this._.highlightRange=t,e=t.startContainer,e.type!=CKEDITOR.NODE_ELEMENT&&(e=e.getParent()),e.scrollIntoView(),this.updateFromDomRange(t)}},removeHighlight:function(){if(this._.highlightRange){var t=this._.highlightRange.createBookmark();g.removeFromRange(this._.highlightRange,a),this._.highlightRange.moveToBookmark(t),this.updateFromDomRange(this._.highlightRange),this._.highlightRange=null}},isReadOnly:function(){return this._.highlightRange?this._.highlightRange.startContainer.isReadOnly():0},moveBack:function(){var t=this._.walker.back(),e=this._.cursors;return t.hitMatchBoundary&&(this._.cursors=e=[]),e.unshift(t),e.length>this._.rangeLength&&e.pop(),t},moveNext:function(){var t=this._.walker.next(),e=this._.cursors;return t.hitMatchBoundary&&(this._.cursors=e=[]),e.push(t),e.length>this._.rangeLength&&e.shift(),t},getEndCharacter:function(){var t=this._.cursors;return 1>t.length?null:t[t.length-1].character},getNextCharacterRange:function(t){var e,a;return a=this._.cursors,a=(e=a[a.length-1])&&e.textNode?new l(c(e)):this._.walker,new d(a,t)},getCursors:function(){return this._.cursors}};var u=function(t,e){var a=[-1];e&&(t=t.toLowerCase());for(var n=0;n<t.length;n++)for(a.push(a[n]+1);0<a[n+1]&&t.charAt(n)!=t.charAt(a[n+1]-1);)a[n+1]=a[a[n+1]-1]+1;this._={overlap:a,state:0,ignoreCase:!!e,pattern:t}};u.prototype={feedCharacter:function(t){for(this._.ignoreCase&&(t=t.toLowerCase());;){if(t==this._.pattern.charAt(this._.state))return this._.state++,this._.state==this._.pattern.length?(this._.state=0,2):1;if(!this._.state)return 0;this._.state=this._.overlap[this._.state]}},reset:function(){this._.state=0}};var f=/[.,"'?!;: \u0085\u00a0\u1680\u280e\u2028\u2029\u202f\u205f\u3000]/,R=function(t){if(!t)return!0;var e=t.charCodeAt(0);return 9<=e&&13>=e||8192<=e&&8202>=e||f.test(t)},p={searchRange:null,matchRange:null,find:function(t,e,n,i,h,r){this.matchRange?(this.matchRange.removeHighlight(),this.matchRange=this.matchRange.getNextCharacterRange(t.length)):this.matchRange=new d(new l(this.searchRange),t.length);for(var s=new u(t,(!e)),g=0,f="%";null!==f;){for(this.matchRange.moveNext();(f=this.matchRange.getEndCharacter())&&(g=s.feedCharacter(f),2!=g);)this.matchRange.moveNext().hitMatchBoundary&&s.reset();if(2==g){if(n){var p=this.matchRange.getCursors(),m=p[p.length-1],p=p[0],C=a.createRange();if(C.setStartAt(a.editable(),CKEDITOR.POSITION_AFTER_START),C.setEnd(p.textNode,p.offset),p=C,m=c(m),p.trim(),m.trim(),p=new l(p,(!0)),m=new l(m,(!0)),!R(p.back().character)||!R(m.next().character))continue}return this.matchRange.setMatched(),!1!==h&&this.matchRange.highlight(),!0}}return this.matchRange.clearMatched(),this.matchRange.removeHighlight(),!(!i||r)&&(this.searchRange=o(1),this.matchRange=null,arguments.callee.apply(this,Array.prototype.slice.call(arguments).concat([!0])))},replaceCounter:0,replace:function(t,e,i,h,r,s,l){if(n=1,t=0,t=this.hasMatchOptionsChanged(e,h,r),!this.matchRange||!this.matchRange.isMatched()||this.matchRange._.isReplaced||this.matchRange.isReadOnly()||t)t&&this.matchRange&&(this.matchRange.clearMatched(),this.matchRange.removeHighlight(),this.matchRange=null),t=this.find(e,h,r,s,!l);else{if(this.matchRange.removeHighlight(),e=this.matchRange.toDomRange(),i=a.document.createText(i),!l){var c=a.getSelection();c.selectRanges([e]),a.fire("saveSnapshot")}e.deleteContents(),e.insertNode(i),l||(c.selectRanges([e]),a.fire("saveSnapshot")),this.matchRange.updateFromDomRange(e),l||this.matchRange.highlight(),this.matchRange._.isReplaced=!0,this.replaceCounter++,t=1}return n=0,t},matchOptions:null,hasMatchOptionsChanged:function(t,e,a){return t=[t,e,a].join("."),e=this.matchOptions&&this.matchOptions!=t,this.matchOptions=t,e}},m=a.lang.find;return{title:m.title,resizable:CKEDITOR.DIALOG_RESIZE_NONE,minWidth:350,minHeight:170,buttons:[CKEDITOR.dialog.cancelButton(a,{label:a.lang.common.close})],contents:[{id:"find",label:m.find,title:m.find,accessKey:"",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindFind",label:m.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFind",align:"left",style:"width:100%",label:m.find,onClick:function(){var t=this.getDialog();p.find(t.getValueOf("find","txtFindFind"),t.getValueOf("find","txtFindCaseChk"),t.getValueOf("find","txtFindWordChk"),t.getValueOf("find","txtFindCyclic"))||alert(m.notFoundMsg)}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(m.findOptions),style:"margin-top:29px",children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtFindCaseChk",isChanged:!1,label:m.matchCase},{type:"checkbox",id:"txtFindWordChk",isChanged:!1,label:m.matchWord},{type:"checkbox",id:"txtFindCyclic",isChanged:!1,"default":!0,label:m.matchCyclic}]}]}]},{id:"replace",label:m.replace,accessKey:"M",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindReplace",label:m.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFindReplace",align:"left",style:"width:100%",label:m.replace,onClick:function(){var t=this.getDialog();p.replace(t,t.getValueOf("replace","txtFindReplace"),t.getValueOf("replace","txtReplace"),t.getValueOf("replace","txtReplaceCaseChk"),t.getValueOf("replace","txtReplaceWordChk"),t.getValueOf("replace","txtReplaceCyclic"))||alert(m.notFoundMsg)}}]},{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtReplace",label:m.replaceWith,isChanged:!1,labelLayout:"horizontal",accessKey:"R"},{type:"button",id:"btnReplaceAll",align:"left",style:"width:100%",label:m.replaceAll,isChanged:!1,onClick:function(){var t=this.getDialog();for(p.replaceCounter=0,p.searchRange=o(1),p.matchRange&&(p.matchRange.removeHighlight(),p.matchRange=null),a.fire("saveSnapshot");p.replace(t,t.getValueOf("replace","txtFindReplace"),t.getValueOf("replace","txtReplace"),t.getValueOf("replace","txtReplaceCaseChk"),t.getValueOf("replace","txtReplaceWordChk"),!1,!0););p.replaceCounter?(alert(m.replaceSuccessMsg.replace(/%1/,p.replaceCounter)),a.fire("saveSnapshot")):alert(m.notFoundMsg)}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(m.findOptions),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtReplaceCaseChk",isChanged:!1,label:m.matchCase},{type:"checkbox",id:"txtReplaceWordChk",isChanged:!1,label:m.matchWord},{type:"checkbox",id:"txtReplaceCyclic",isChanged:!1,"default":!0,label:m.matchCyclic}]}]}]}],onLoad:function(){var t,e=this,a=0;this.on("hide",function(){a=0}),this.on("show",function(){a=1}),this.selectPage=CKEDITOR.tools.override(this.selectPage,function(n){return function(i){n.call(e,i);var s,l=e._.tabs[i];if(s="find"===i?"txtFindWordChk":"txtReplaceWordChk",t=e.getContentElement(i,"find"===i?"txtFindFind":"txtFindReplace"),e.getContentElement(i,s),l.initialized||(CKEDITOR.document.getById(t._.inputId),l.initialized=!0),a){var c;i="find"===i?1:0;var o,l=1-i,g=r.length;for(o=0;o<g;o++)s=this.getContentElement(h[i],r[o][i]),c=this.getContentElement(h[l],r[o][l]),c.setValue(s.getValue())}}})},onShow:function(){p.searchRange=o();var t=this.getParentEditor().getSelection().getSelectedText(),e=this.getContentElement(s,"find"==s?"txtFindFind":"txtFindReplace");e.setValue(t),e.select(),this.selectPage(s),this[("find"==s&&this._.editor.readOnly?"hide":"show")+"Page"]("replace")},onHide:function(){var t;p.matchRange&&p.matchRange.isMatched()&&(p.matchRange.removeHighlight(),a.focus(),(t=p.matchRange.toDomRange())&&a.getSelection().selectRanges([t])),delete p.matchRange},onFocus:function(){return"replace"==s?this.getContentElement("replace","txtFindReplace"):this.getContentElement("find","txtFindFind")}}}var n,i=function(){return{textNode:this.textNode,offset:this.offset,character:this.textNode?this.textNode.getText().charAt(this.offset):null,hitMatchBoundary:this._.matchBoundary}},h=["find","replace"],r=[["txtFindFind","txtFindReplace"],["txtFindCaseChk","txtReplaceCaseChk"],["txtFindWordChk","txtReplaceWordChk"],["txtFindCyclic","txtReplaceCyclic"]];CKEDITOR.dialog.add("find",function(t){return a(t,"find")}),CKEDITOR.dialog.add("replace",function(t){return a(t,"replace")})}();