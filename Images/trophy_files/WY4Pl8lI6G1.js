if (self.CavalryLogger) { CavalryLogger.start_js(["H1i0l"]); }

__d('PlatformDialog',['cx','DOMEventListener','DOMEvent','CSS'],(function a(b,c,d,e,f,g,h){var i;j.getInstance=function(){'use strict';return i;};function j(k,l,m){'use strict';i=this;this.$PlatformDialog1=k;this.$PlatformDialog2=l;this.$PlatformDialog3=false;c('DOMEventListener').add(this.$PlatformDialog1,'submit',function(n){if(this.$PlatformDialog3){new (c('DOMEvent'))(n).kill();return;}this.$PlatformDialog3=true;if(m)c('CSS').addClass(k,"_32qa");}.bind(this));}j.prototype.getForm=function(){'use strict';return this.$PlatformDialog1;};j.prototype.getDisplay=function(){'use strict';return this.$PlatformDialog2;};j.prototype.hasBeenSubmitted=function(){'use strict';return this.$PlatformDialog3;};j.RESPONSE='platform/dialog/response';f.exports=j;}),null);
__d('ArbiterFrame',[],(function a(b,c,d,e,f,g){var h={inform:function i(j,k,l){var m=parent.frames,n=m.length,o;k.crossFrame=true;for(var p=0;p<n;p++){o=m[p];try{if(!o||o==window)continue;if(o.require){o.require('Arbiter').inform(j,k,l);}else if(o.ServerJSAsyncLoader)o.ServerJSAsyncLoader.wakeUp(j,k,l);}catch(q){}}}};f.exports=h;}),null);
__d('Popup',[],(function a(b,c,d,e,f,g){var h={open:function i(j,k,l,m){var n=document.body,o='screenX' in window?window.screenX:window.screenLeft,p='screenY' in window?window.screenY:window.screenTop,q='outerWidth' in window?window.outerWidth:n.clientWidth,r='outerHeight' in window?window.outerHeight:n.clientHeight-22,s=Math.floor(o+(q-k)/2),t=Math.floor(p+(r-l)/2.5),u=['width='+k,'height='+l,'left='+s,'top='+t,'scrollbars'];return window.open(j,m||'_blank',u.join(','));}};f.exports=h;}),null);
__d('PopupWindow',['DOMDimensions','DOMQuery','Layer','Popup','getViewportDimensions'],(function a(b,c,d,e,f,g){var h={_opts:{allowShrink:true,strategy:'vector',timeout:100,widthElement:null},init:function i(j){Object.assign(h._opts,j);setInterval(h._resizeCheck,h._opts.timeout);},_resizeCheck:function i(){var j=c('getViewportDimensions')(),k=h._getDocumentSize(),l=c('Layer').getTopmostLayer();if(l){var m=l.getRoot().firstChild,n=c('DOMDimensions').getElementDimensions(m);n.height+=c('DOMDimensions').measureElementBox(m,'height',true,true,true);n.width+=c('DOMDimensions').measureElementBox(m,'width',true,true,true);k.height=Math.max(k.height,n.height);k.width=Math.max(k.width,n.width);}var o=k.height-j.height,p=k.width-j.width;if(p<0&&!h._opts.widthElement)p=0;p=p>1?p:0;if(!h._opts.allowShrink&&o<0)o=0;if(o||p)try{window.console&&window.console.firebug;window.resizeBy(p,o);if(p)window.moveBy(p/-2,0);}catch(q){}},_getDocumentSize:function i(){var j=c('DOMDimensions').getDocumentDimensions();if(h._opts.strategy==='offsetHeight')j.height=document.body.offsetHeight;if(h._opts.widthElement){var k=c('DOMQuery').scry(document.body,h._opts.widthElement)[0];if(k)j.width=c('DOMDimensions').getElementDimensions(k).width;}var l=b.Dialog;if(l&&l.max_bottom&&l.max_bottom>j.height)j.height=l.max_bottom;return j;},open:function i(j,k,l,m){return c('Popup').open(j,l,k,m);}};f.exports=h;}),null);
__d('Log',['sprintf'],(function a(b,c,d,e,f,g){var h={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function i(k,l){var m=Array.prototype.slice.call(arguments,2),n=c('sprintf').apply(null,m),o=window.console;if(o&&j.level>=l)o[k in o?k:'log'](n);}var j={level:-1,Level:h,debug:i.bind(null,'debug',h.DEBUG),info:i.bind(null,'info',h.INFO),warn:i.bind(null,'warn',h.WARNING),error:i.bind(null,'error',h.ERROR)};f.exports=j;}),null);
__d('Queue',[],(function a(b,c,d,e,f,g){var h={};function i(j){'use strict';this._opts=babelHelpers['extends']({interval:0,processor:null},j);this._queue=[];this._stopped=true;}i.prototype._dispatch=function(j){'use strict';if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available');}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(this._dispatch.bind(this),this._opts.interval);}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());};i.prototype.enqueue=function(j){'use strict';if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,j);}else this._queue.push(j);return this;};i.prototype.start=function(j){'use strict';if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this;};i.prototype.isStarted=function(){'use strict';return !this._stopped;};i.prototype.dispatch=function(){'use strict';this._dispatch(true);};i.prototype.stop=function(j){'use strict';this._stopped=true;if(j)clearTimeout(this._timeout);return this;};i.prototype.merge=function(j,k){'use strict';this._queue[k?'unshift':'push'].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this;};i.prototype.getLength=function(){'use strict';return this._queue.length;};i.get=function(j,k){'use strict';var l;if(j in h){l=h[j];}else l=h[j]=new i(k);return l;};i.exists=function(j){'use strict';return j in h;};i.remove=function(j){'use strict';return delete h[j];};f.exports=i;}),null);
__d('resolveWindow',[],(function a(b,c,d,e,f,g){function h(i){var j=window,k=i.split('.');try{for(var l=0;l<k.length;l++){var m=k[l],n=/^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(m);if(n){j=j.frames[n[1]];}else if(m==='opener'||m==='parent'||m==='top'){j=j[m];}else return null;}}catch(o){return null;}return j;}f.exports=h;}),null);
__d('XD',['Arbiter','DOM','DOMDimensions','Log','PHPQuerySerializer','URI','Queue','isFacebookURI','isInIframe','resolveWindow'],(function a(b,c,d,e,f,g){var h='fb_xdm_frame_'+location.protocol.replace(':',''),i={_callbacks:[],_opts:{autoResize:false,allowShrink:true,channelUrl:null,hideOverflow:false,resizeTimeout:1000,resizeWidth:false,expectResizeAck:false,resizeAckTimeout:6000},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function k(l){this._opts=babelHelpers['extends']({},this._opts,l);if(this._opts.autoResize)this._startResizeMonitor();c('Arbiter').subscribe('Connect.Unsafe.resize.ack',function(m,n){if(!n.id)n.id=this._resizeCount;if(n.id>this._lastResizeAckId)this._lastResizeAckId=n.id;}.bind(this));},getQueue:function k(){if(!this._queue)this._queue=new (c('Queue'))();return this._queue;},setChannelUrl:function k(l){this.getQueue().start(function(m){return this.send(m,l);}.bind(this));},send:function k(l,m){m=m||this._opts.channelUrl;if(!m){this.getQueue().enqueue(l);return;}var n={},o=new (c('URI'))(m);Object.assign(n,l,c('PHPQuerySerializer').deserialize(o.getFragment()));var p=new (c('URI'))(n.origin).getOrigin(),q=c('resolveWindow')(n.relation.replace(/^parent\./,'')),r=50,s=function t(){var u=q.frames[h];try{u.proxyMessage(c('PHPQuerySerializer').serialize(n),p);}catch(v){if(--r){setTimeout(t,100);}else c('Log').warn('No such frame "'+h+'" to proxyMessage to');}};s();},_computeSize:function k(){var l=c('DOMDimensions').getDocumentDimensions(),m=0;if(this._opts.resizeWidth){var n=document.body;if(n.clientWidth<n.scrollWidth){m=l.width;}else{var o=n.childNodes;for(var p=0;p<o.length;p++){var q=o[p],r=q.offsetLeft+q.offsetWidth;if(r>m)m=r;}}m=Math.max(m,i.forced_min_width);}l.width=m;if(this._opts.allowShrink){if(!this._shrinker)this._shrinker=c('DOM').create('div');c('DOM').appendContent(document.body,this._shrinker);l.height=Math.max(this._shrinker.offsetTop,0);}return l;},_startResizeMonitor:function k(){var l,m=document.documentElement;if(this._opts.hideOverflow){m.style.overflow='hidden';document.body.style.overflow='hidden';}var n=function(){var o=this._computeSize(),p=Date.now(),q=this._lastResizeAckId<this._resizeCount&&p-this._resizeTimestamp>this._opts.resizeAckTimeout;if(!l||this._opts.expectResizeAck&&q||this._opts.allowShrink&&l.width!=o.width||!this._opts.allowShrink&&l.width<o.width||this._opts.allowShrink&&l.height!=o.height||!this._opts.allowShrink&&l.height<o.height){l=o;this._resizeCount++;this._resizeTimestamp=p;var r={type:'resize',height:o.height,ackData:{id:this._resizeCount}};if(o.width&&o.width!=0)r.width=o.width;try{if(c('isFacebookURI')(new (c('URI'))(document.referrer))&&c('isInIframe')()&&window.name&&window.parent.location&&window.parent.location.toString&&c('isFacebookURI')(new (c('URI'))(window.parent.location))){var s=window.parent.document.getElementsByTagName('iframe');for(var t=0;t<s.length;t=t+1)if(s[t].name==window.name){if(this._opts.resizeWidth)s[t].style.width=r.width+'px';s[t].style.height=r.height+'px';}}this.send(r);}catch(u){this.send(r);}}}.bind(this);n();setInterval(n,this._opts.resizeTimeout);}},j=babelHelpers['extends']({},i);f.exports.UnverifiedXD=j;f.exports.XD=i;b.UnverifiedXD=j;b.XD=i;}),null);
__d('Plugin',['Arbiter','ArbiterFrame'],(function a(b,c,d,e,f,g){var h={CONNECT:'platform/plugins/connect',DISCONNECT:'platform/plugins/disconnect',ERROR:'platform/plugins/error',RELOAD:'platform/plugins/reload',DIALOG:'platform/plugins/dialog',connect:function i(j,k){var l={identifier:j,href:j,story_fbid:k};c('Arbiter').inform(h.CONNECT,l);c('ArbiterFrame').inform(h.CONNECT,l);},disconnect:function i(j,k){var l={identifier:j,href:j,story_fbid:k};c('Arbiter').inform(h.DISCONNECT,l);c('ArbiterFrame').inform(h.DISCONNECT,l);},error:function i(j,k){c('Arbiter').inform(h.ERROR,{action:j,content:k});},reload:function i(j){c('Arbiter').inform(h.RELOAD,{reloadUrl:j||''});c('ArbiterFrame').inform(h.RELOAD,{reloadUrl:j||''});},reloadOtherPlugins:function i(j,k){c('ArbiterFrame').inform(h.RELOAD,{reloadUrl:'',reload:j||'',identifier:k||''});}};f.exports=h;}),null);
__d('PluginMessage',['DOMEventListener'],(function a(b,c,d,e,f,g){var h={listen:function i(){c('DOMEventListener').add(window,'message',function(event){if(/\.facebook\.com$/.test(event.origin)&&/^FB_POPUP:/.test(event.data)){var j=JSON.parse(event.data.substring(9));if('reload' in j&&/^https?:/.test(j.reload))document.location.replace(j.reload);}});}};f.exports=h;}),null);
__d('UnverifiedXD',['XD'],(function a(b,c,d,e,f,g){var h=c('XD').UnverifiedXD;f.exports=h;}),null);
__d('PluginResize',['Locale','Log','UnverifiedXD','getOffsetParent','getStyleProperty'],(function a(b,c,d,e,f,g){function h(l){l=l||document.body;var m=0,n=c('getOffsetParent')(l);if(c('Locale').isRTL()&&n){m=n.offsetWidth-l.offsetLeft-l.offsetWidth;}else if(!c('Locale').isRTL())m=l.offsetLeft;return i(l)+m;}function i(l){return Math.ceil(parseFloat(c('getStyleProperty')(l,'width')))||l.offsetWidth;}function j(l){l=l||document.body;return l.offsetHeight+l.offsetTop;}function k(l,m,event,n){this.calcWidth=l||h;this.calcHeight=m||j;this.width=undefined;this.height=undefined;this.reposition=!!n;this.event=event||'resize';}Object.assign(k.prototype,{resize:function l(){var m=this.calcWidth(),n=this.calcHeight();if(m!==this.width||n!==this.height){c('Log').debug('Resizing Plugin: (%s, %s, %s, %s)',m,n,this.event,this.reposition);this.width=m;this.height=n;c('UnverifiedXD').send({type:this.event,width:m,height:n,reposition:this.reposition});}return this;},auto:function l(m){setInterval(this.resize.bind(this),m||250);return this;}});k.auto=function(l,event,m){return new k(h.bind(null,l),j.bind(null,l),event).resize().auto(m);};k.autoHeight=function(l,m,event,n){return new k(function(){return l;},j.bind(null,m),event).resize().auto(n);};k.getElementWidth=i;f.exports=k;}),null);
__d('StrSet',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$StrSet2={};this.$StrSet1=0;if(i)this.addAll(i);}h.prototype.add=function(i){'use strict';if(!Object.prototype.hasOwnProperty.call(this.$StrSet2,i)){this.$StrSet2[i]=true;this.$StrSet1++;}return this;};h.prototype.addAll=function(i){'use strict';i.forEach(this.add,this);return this;};h.prototype.remove=function(i){'use strict';if(Object.prototype.hasOwnProperty.call(this.$StrSet2,i)){delete this.$StrSet2[i];this.$StrSet1--;}return this;};h.prototype.removeAll=function(i){'use strict';i.forEach(this.remove,this);return this;};h.prototype.toArray=function(){'use strict';return Object.keys(this.$StrSet2);};h.prototype.toMap=function(i){'use strict';var j={};Object.keys(this.$StrSet2).forEach(function(k){j[k]=typeof i=='function'?i(k):i||true;});return j;};h.prototype.contains=function(i){'use strict';return Object.prototype.hasOwnProperty.call(this.$StrSet2,i);};h.prototype.count=function(){'use strict';return this.$StrSet1;};h.prototype.clear=function(){'use strict';this.$StrSet2={};this.$StrSet1=0;return this;};h.prototype.clone=function(){'use strict';return new h(this);};h.prototype.forEach=function(i,j){'use strict';Object.keys(this.$StrSet2).forEach(i,j);};h.prototype.map=function(i,j){'use strict';return Object.keys(this.$StrSet2).map(i,j);};h.prototype.some=function(i,j){'use strict';return Object.keys(this.$StrSet2).some(i,j);};h.prototype.every=function(i,j){'use strict';return Object.keys(this.$StrSet2).every(i,j);};h.prototype.filter=function(i,j){'use strict';return new h(Object.keys(this.$StrSet2).filter(i,j));};h.prototype.union=function(i){'use strict';return this.clone().addAll(i);};h.prototype.intersect=function(i){'use strict';return this.filter(function(j){return i.contains(j);});};h.prototype.difference=function(i){'use strict';return i.filter(function(j){return !this.contains(j);}.bind(this));};h.prototype.equals=function(i){'use strict';var j=function n(o,p){return o===p?0:o<p?-1:1;},k=this.toArray(),l=i.toArray();if(k.length!==l.length)return false;var m=k.length;k=k.sort(j);l=l.sort(j);while(m--)if(k[m]!==l[m])return false;return true;};f.exports=h;}),null);
__d('PlatformBaseVersioning',['invariant','PlatformVersions','StrSet','getObjectValues'],(function a(b,c,d,e,f,g,h){var i=new (c('StrSet'))(c('getObjectValues')(c('PlatformVersions').versions)),j=location.pathname,k=j.substring(1,j.indexOf('/',1)),l=i.contains(k)?k:c('PlatformVersions').versions.UNVERSIONED;function m(p,q){if(q==c('PlatformVersions').versions.UNVERSIONED)return p;i.contains(q)||h(0);if(p.indexOf('/')!==0)p='/'+p;return '/'+q+p;}function n(p){if(i.contains(p.substring(1,p.indexOf('/',1))))return p.substring(p.indexOf('/',1));return p;}var o={addVersionToPath:m,getLatestVersion:function p(){return c('PlatformVersions').LATEST;},versionAwareURI:function p(q){return q.setPath(m(q.getPath(),l));},versionAwarePath:function p(q){return m(q,l);},getUnversionedPath:n};f.exports=o;}),null);
__d('PlatformWidgetEndpoint',['PlatformBaseVersioning'],(function a(b,c,d,e,f,g){function h(m,n){return c('PlatformBaseVersioning').versionAwarePath('/dialog'+'/'+m+(n?'/'+n:''));}function i(m,n){return c('PlatformBaseVersioning').versionAwarePath('/plugins'+'/'+m+(n?'/'+n:''));}function j(m){return /^\/plugins\//.test(c('PlatformBaseVersioning').getUnversionedPath(m));}function k(m){return /^\/dialog\//.test(c('PlatformBaseVersioning').getUnversionedPath(m));}var l={dialog:h,plugins:i,isPluginEndpoint:j,isDialogEndpoint:k};f.exports=l;}),null);
__d('PluginReturn',['invariant','Arbiter','Log','PlatformDialog','Plugin','URI','PlatformWidgetEndpoint'],(function a(b,c,d,e,f,g,h){c('Arbiter').subscribe(c('PlatformDialog').RESPONSE,function(event,j){if(j.error_code){c('Log').debug('Plugin Return Error (%s): %s',j.error_code,j.error_message||j.error_description);return;}c('Plugin').reload(j.plugin_reload);});var i={auto:function j(){c('Arbiter').subscribe(c('Plugin').RELOAD,function(event,k){var l=typeof k=='object'?k.reloadUrl:k;i.reload(l);});},syncPlugins:function j(){c('Arbiter').subscribe(c('Plugin').RELOAD,function(event,k){if(k.crossFrame)i.reload(k.reloadUrl,k.reload,k.identifier);});},reload:function j(k,l,m){var n=c('URI').getRequestURI().removeQueryData('ret').removeQueryData('act').removeQueryData('hash').addQueryData('reload',l).addQueryData('id',m);if(k){var l=new (c('URI'))(k);c('PlatformWidgetEndpoint').isPluginEndpoint(l.getPath())||h(0);n.setPath(l.getPath()).addQueryData(l.getQueryData());}window.location.replace(n.toString());}};f.exports=i;}),null);
__d('PluginXDReady',['Arbiter','UnverifiedXD'],(function a(b,c,d,e,f,g){var h={handleMessage:function i(j){if(!j.method)return;try{c('Arbiter').inform('Connect.Unsafe.'+j.method,JSON.parse(j.params),c('Arbiter').BEHAVIOR_PERSISTENT);}catch(k){}}};b.XdArbiter=h;c('UnverifiedXD').send({xd_action:'plugin_ready',name:window.name});f.exports=null;}),null);