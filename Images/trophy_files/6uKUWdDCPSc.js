if (self.CavalryLogger) { CavalryLogger.start_js(["btlWc"]); }

__d('StickersTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:StickersLoggerConfig',this.$StickersTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:StickersLoggerConfig',this.$StickersTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$StickersTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$StickersTypedLogger1=babelHelpers['extends']({},this.$StickersTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$StickersTypedLogger1.event=j;return this;};h.prototype.setNumsearchresults=function(j){this.$StickersTypedLogger1.numsearchresults=j;return this;};h.prototype.setPackid=function(j){this.$StickersTypedLogger1.packid=j;return this;};h.prototype.setPackids=function(j){this.$StickersTypedLogger1.packids=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setSearchtoken=function(j){this.$StickersTypedLogger1.searchtoken=j;return this;};h.prototype.setStickerid=function(j){this.$StickersTypedLogger1.stickerid=j;return this;};h.prototype.setTagid=function(j){this.$StickersTypedLogger1.tagid=j;return this;};h.prototype.setTriggeredword=function(j){this.$StickersTypedLogger1.triggeredword=j;return this;};h.prototype.setTriggerused=function(j){this.$StickersTypedLogger1.triggerused=j;return this;};var i={event:true,numsearchresults:true,packid:true,packids:true,searchtoken:true,stickerid:true,tagid:true,triggeredword:true,triggerused:true};f.exports=h;}),null);
__d('MercuryAttachmentViewer',['Bootloader','MessagesViewer','React','Run','emptyFunction'],(function a(b,c,d,e,f,g){'use strict';var h={renderVideo:function i(j){c('Bootloader').loadModules(["MessagingVideoViewer.react","MessagingForwardAttachmentDialog.react"],function(k,l){c('MessagesViewer').renderVideo(c('React').createElement(k,babelHelpers['extends']({},j,{forwardDialogComponent:l})));},'MercuryAttachmentViewer');},bootstrapWithConfig:function i(j,k){c('Bootloader').loadModules(["SpotlightMessagesViewer","MessagingForwardAttachmentDialog.react"],function(l,m){c('MessagesViewer').renderSpotlight(j,k,l,m);},'MercuryAttachmentViewer');},preload:function i(){c('Run').onAfterLoad(function(){c('Bootloader').loadModules(["MessagingVideoViewer.react","SpotlightMessagesViewer","MessagingForwardAttachmentDialog.react"],c('emptyFunction'),'MercuryAttachmentViewer');});}};f.exports=h;}),null);
__d('getURLRanges',['URI','URLScraper','UnicodeUtils'],(function a(b,c,d,e,f,g){'use strict';function h(i){var j=arguments.length<=1||arguments[1]===undefined?0:arguments[1],k=i.substr(j),l=c('URLScraper').match(k);if(!l)return [];var m=l;if(!/^[a-z][a-z0-9\-+.]+:\/\//i.test(l))m='http://'+l;if(!c('URI').isValidURI(m))return [];var n=k.indexOf(l),o=c('UnicodeUtils').strlen(k.substr(0,n));j+=o;var p=l.length,q=[{offset:j,length:l.length,entity:{url:m}}];return q.concat(h(i,j+p));}f.exports=h;}),null);
__d('StickersDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('ExplicitRegistrationDispatcher'))({strict:false});}),null);
__d('StickersActions',['StickersDispatcher','keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({ADD_RECENT_STICKER:null,HIDE_FLYOUT:null,LOAD_RECENT_STICKERS:null,SELECT_STORE_PACK:null,SELECT_TRAY_PACK:null,SHOW_FLYOUT:null,TRAY_LOADED:null}),i={Types:h,addRecentSticker:function j(k){c('StickersDispatcher').dispatch({type:h.ADD_RECENT_STICKER,sticker:k});},hideStickerFlyout:function j(){c('StickersDispatcher').dispatch({type:h.HIDE_FLYOUT});},loadRecentStickers:function j(k){c('StickersDispatcher').dispatch({type:h.LOAD_RECENT_STICKERS,stickers:k});},selectStorePack:function j(k){c('StickersDispatcher').dispatch({type:h.SELECT_STORE_PACK,packID:k});},selectTrayPack:function j(k){c('StickersDispatcher').dispatch({type:h.SELECT_TRAY_PACK,packID:k});},showStickerFlyout:function j(k){c('StickersDispatcher').dispatch({type:h.SHOW_FLYOUT,threadID:k});},trayLoaded:function j(){c('StickersDispatcher').dispatch({type:h.TRAY_LOADED});}};f.exports=i;}),null);
__d('StickersStateStore',['FluxReduceStore','immutable','StickersActions','StickersConfig','StickersDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.getInitialState=function(){return c('immutable').Map({recentStickers:[],recentStickersLoaded:false,showFlyout:false,storePackID:null,threadID:null,trayLoaded:false,trayPackID:null});};j.prototype.reduce=function(k,l){var m=l,n=c('StickersActions').Types;switch(m.type){case n.ADD_RECENT_STICKER:var o=[m.sticker];k.get('recentStickers').forEach(function(p){if(p.id===m.sticker.id)return;o.push(p);});return k.set('recentStickers',o.splice(0,c('StickersConfig').max_mru_stickers));case n.HIDE_FLYOUT:return k.set('showFlyout',false);case n.LOAD_RECENT_STICKERS:return k.set('recentStickersLoaded',true).set('recentStickers',m.stickers);case n.SELECT_STORE_PACK:return k.set('storePackID',m.packID);case n.SELECT_TRAY_PACK:return k.set('trayPackID',m.packID).set('trayLoaded',true);case n.SHOW_FLYOUT:return k.set('showFlyout',true).set('threadID',m.threadID);case n.TRAY_LOADED:return k.set('trayLoaded',true);default:return k;}};function j(){h.apply(this,arguments);}f.exports=new j(c('StickersDispatcher'));}),null);
__d('isSoftNewlineEvent',['Keys'],(function a(b,c,d,e,f,g){'use strict';function h(i){return i.which===c('Keys').RETURN&&(i.getModifierState('Shift')||i.getModifierState('Alt')||i.getModifierState('Control'));}f.exports=h;}),null);
__d('isWebGLEnabled',[],(function a(b,c,d,e,f,g){'use strict';var h=null;function i(){try{var k=document.createElement('canvas');return Boolean(window.WebGLRenderingContext)&&Boolean(k.getContext('webgl')||k.getContext('experimental-webgl'));}catch(l){return false;}}function j(){if(h===null)h=i();return h;}f.exports=j;}),null);