if (self.CavalryLogger) { CavalryLogger.start_js(["8MHpk"]); }

__d('P2PNUXRendererUtils',['CurrentUser','ImmutableObject','MercuryAttachmentType','P2PTransferParam','P2PTransferStatus','StoryAttachmentStyle'],(function a(b,c,d,e,f,g){'use strict';var h={getTransferFromMessage:function i(j){var k=void 0,l=void 0;if(!j||!j.attachments||!j.attachments.length)return null;l=j.attachments[0];if(this.isShareAttachment(l))k=l.share.target;if(k)k=new (c('ImmutableObject'))(k);return k;},isSuccessfulReceivedTransfer:function i(j){return j&&j.receiver&&j.receiver.id===c('CurrentUser').getID()&&(j.status===c('P2PTransferStatus').COMPLETED||j.status===c('P2PTransferStatus').PENDING_RECIPIENT_NUX);},isShareAttachment:function i(j){return !!(typeof j!=='string'&&j.attach_type==c('MercuryAttachmentType').SHARE&&j.share&&j.share.style_list&&j.share.style_list.indexOf(c('StoryAttachmentStyle').ORION)>=0);},doesNUXNeedCreditCards:function i(j){var k=c('CurrentUser').getID()===j.sender.id;return !k&&j[c('P2PTransferParam').STATUS]===c('P2PTransferStatus').PENDING_RECIPIENT_NUX;},isRecipientActionableStatus:function i(j){var k=j[c('P2PTransferParam').STATUS],l=c('CurrentUser').getID()===j.sender.id;return !l&&(k===c('P2PTransferStatus').PENDING_RECIPIENT_NUX||k===c('P2PTransferStatus').PENDING_RECIPIENT_VERIFICATION||k===c('P2PTransferStatus').PENDING_PUSH_FAIL);}};f.exports=h;}),null);
__d("P2PPaymentMethodCategory",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CREDIT_CARD:"credit_card",DEBIT_CARD:"debit_card",PREPAID_CARD:"prepaid_card",STORED_VALUE_ACCOUNT:"stored_value_account",PAYPAL_BA:"paypal_ba"});}),null);
__d('P2PCreditCard',['fbt','ix','CreditCardFormParam','CreditCardTypeEnum','PaymentMethodUtils','P2PPaymentMethodCategory'],(function a(b,c,d,e,f,g,h,i){'use strict';var j={visa:{image:i("95537"),imageLarge:i("95538"),name:'Visa'},mc:{image:i("95521"),imageLarge:i("95522"),name:'MasterCard'},disc:{image:i("95512"),imageLarge:i("95513"),name:'Discover'},jcb:{image:i("95518"),imageLarge:i("95519"),name:'JCB'},amex:{image:i("95501"),imageLarge:i("95502"),name:'American Express'},unknown:{image:i("26967"),imageLarge:i("26967"),name:h._("Unknown Card Type")}};function k(l){this.setCredentialId(l[c('CreditCardFormParam').CREDENTIAL_ID]);this.setCardType(l[c('CreditCardFormParam').CARD_TYPE]);this.setCreditCardNumber(l[c('CreditCardFormParam').CARD_NUMBER]);this.setSelected(l.selected);this.setZipCode(l[c('CreditCardFormParam').ZIP]);this.setCSC(l[c('CreditCardFormParam').CSC]);this.setExp(l[c('CreditCardFormParam').CARD_EXPIRATION]);this.setIsPreset(l.isPreset);this.setIsVerified(l.isVerified);this.setIsMobileVerified(l.isMobileVerified);this.setIsPersonalTransferEligible(l.isPersonalTransferEligible);this.setCategory(l.category);}k.prototype.getCreditCardNumber=function(){return this[c('CreditCardFormParam').CARD_NUMBER];};k.prototype.setCreditCardNumber=function(l){l=l.replace(/ /g,'');this.setCardProviderProps(this[c('CreditCardFormParam').CARD_TYPE],l);l=l.substr(l.length-4);this[c('CreditCardFormParam').CARD_NUMBER]=l;};k.prototype.setCardProviderProps=function(l,m){var n=this.$P2PCreditCard1(l,m);if(j[n]){this.setImage(j[n].image);this.setImageLarge(j[n].imageLarge);this.setName(j[n].name);}};k.prototype.getExp=function(){return this[c('CreditCardFormParam').CARD_EXPIRATION];};k.prototype.getExpFormatted=function(){var l=this[c('CreditCardFormParam').CARD_EXPIRATION];return l?l[c('CreditCardFormParam').MONTH]+'/'+l[c('CreditCardFormParam').YEAR]:'';};k.prototype.getExpFormattedShort=function(){var l=this[c('CreditCardFormParam').CARD_EXPIRATION],m='';if(l&&l[c('CreditCardFormParam').MONTH]&&l[c('CreditCardFormParam').YEAR]){m=l[c('CreditCardFormParam').MONTH]+'/';if(l[c('CreditCardFormParam').YEAR].length===4){m+=l[c('CreditCardFormParam').YEAR].substr(2);}else m+=l[c('CreditCardFormParam').YEAR];}return m;};k.prototype.setExp=function(l){if(!l)return;var m=void 0,n=void 0,o={};o[c('CreditCardFormParam').MONTH]=l[c('CreditCardFormParam').MONTH];o[c('CreditCardFormParam').YEAR]=l[c('CreditCardFormParam').YEAR];if(o[c('CreditCardFormParam').MONTH]&&o[c('CreditCardFormParam').MONTH].length===1)o[c('CreditCardFormParam').MONTH]='0'+o[c('CreditCardFormParam').MONTH];if(o[c('CreditCardFormParam').YEAR]&&o[c('CreditCardFormParam').YEAR].length===2){m=new Date().getFullYear()+'';n=m.substr(0,2);o[c('CreditCardFormParam').YEAR]=n+o[c('CreditCardFormParam').YEAR];}this[c('CreditCardFormParam').CARD_EXPIRATION]=o;};k.prototype.getCSC=function(){return this[c('CreditCardFormParam').CSC];};k.prototype.setCSC=function(l){this[c('CreditCardFormParam').CSC]=l;};k.prototype.getZipCode=function(){return this[c('CreditCardFormParam').ZIP];};k.prototype.setZipCode=function(l){this[c('CreditCardFormParam').ZIP]=l;};k.prototype.getSelected=function(){return this.$P2PCreditCard2;};k.prototype.setSelected=function(l){this.$P2PCreditCard2=l;};k.prototype.getCardType=function(){return this[c('CreditCardFormParam').CARD_TYPE];};k.prototype.setCardType=function(l){this[c('CreditCardFormParam').CARD_TYPE]=l;this.setCardProviderProps(l,this[c('CreditCardFormParam').CARD_NUMBER]);};k.prototype.getCredentialId=function(){return this[c('CreditCardFormParam').CREDENTIAL_ID];};k.prototype.setCredentialId=function(l){this[c('CreditCardFormParam').CREDENTIAL_ID]=l;};k.prototype.$P2PCreditCard1=function(l,m){var n='default',o=void 0,p=void 0;if(l){o=Object.keys(c('CreditCardTypeEnum')).filter(function(q){return c('CreditCardTypeEnum')[q]===l;})[0];n=this.$P2PCreditCard3(o);}else if(m){p=c('PaymentMethodUtils').getCardType(m);if(p)n=p.name;}return n;};k.prototype.getImage=function(){return this.$P2PCreditCard4||j.unknown.image;};k.prototype.setImage=function(l){this.$P2PCreditCard4=l;};k.prototype.getImageLarge=function(){return this.$P2PCreditCard5||j.unknown.imageLarge;};k.prototype.setImageLarge=function(l){this.$P2PCreditCard5=l;};k.prototype.getName=function(){return this.$P2PCreditCard6||j.unknown.name;};k.prototype.setName=function(l){this.$P2PCreditCard6=l;};k.prototype.getIsPreset=function(){return this.$P2PCreditCard7;};k.prototype.setIsPreset=function(l){this.$P2PCreditCard7=l||false;};k.prototype.$P2PCreditCard3=function(l){switch(l){case 'VISA':l='visa';break;case 'AMERICANEXPRESS':l='amex';break;case 'MASTERCARD':l='mc';break;case 'DISCOVER':l='disc';break;case 'JCB':l='jcb';break;default:l='unknown';break;}return l;};k.prototype.getCreditCardNumberFormatted=function(){return '*'+this[c('CreditCardFormParam').CARD_NUMBER];};k.prototype.getDetailsFormatted=function(){return this.getName()+' '+this.getCreditCardNumberFormatted();};k.prototype.getCreditCardNumberMask=function(){return '**** **** **** '+this[c('CreditCardFormParam').CARD_NUMBER];};k.prototype.getMaxCSCLength=function(){var l=this.$P2PCreditCard1(this[c('CreditCardFormParam').CARD_TYPE],this[c('CreditCardFormParam').CARD_NUMBER]);return l==='amex'?4:3;};k.prototype.getIsVerified=function(){return this.$P2PCreditCard8||false;};k.prototype.setIsVerified=function(l){this.$P2PCreditCard8=l;};k.prototype.getIsMobileVerified=function(){return this.$P2PCreditCard9||false;};k.prototype.setIsMobileVerified=function(l){this.$P2PCreditCard9=l;};k.prototype.getIsPersonalTransferEligible=function(){return !!this.$P2PCreditCard10;};k.prototype.setIsPersonalTransferEligible=function(l){this.$P2PCreditCard10=l;};k.prototype.getCategory=function(){return this.$P2PCreditCard11;};k.prototype.setCategory=function(l){this.$P2PCreditCard11=l;};k.prototype.getCategoryName=function(){switch(this.$P2PCreditCard11){case c('P2PPaymentMethodCategory').DEBIT_CARD:return h._("Debit");case c('P2PPaymentMethodCategory').CREDIT_CARD:return h._("Credit");case c('P2PPaymentMethodCategory').PREPAID_CARD:return h._("Prepaid");default:return null;}};k.prototype.isExpired=function(){var l=this.getExp();if(!l)return false;var m=l.month,n=l.year,o=new Date(),p=o.getFullYear()+'',q=o.getMonth()+1+'';q=q.length===1?'0'+q:q;return n<p||p===n&&m<q;};f.exports=k;}),null);
__d('P2PTransferStore',['Arbiter','P2PActionConstants','ChannelConstants','CurrentUser','CreditCardFormParam','EventEmitter','ImmutableObject','P2PActions','P2PAPI','P2PChannelType','P2PCreditCard','P2PDispatcher','P2PGKValues','P2PNUXRendererUtils','P2PTransferParam','P2PTransferStatus','Set','MercuryThreadInformer'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('MercuryThreadInformer').get(),k=false,l=void 0,m=[],n=void 0,o={},p=false,q=false,r=new (c('Set'))(),s=false;function t(w,x){if(x)o[x]=new (c('ImmutableObject'))(w);}function u(w,x){if(x)o[x]={error:w};}h=babelHelpers.inherits(v,c('EventEmitter'));i=h&&h.prototype;function v(){i.constructor.call(this);c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').TRANSFER_STATUS_CHANGED),this.handleChannelTransferStatusChanged.bind(this));j.subscribe('messages-received',this.handleMessageReceived.bind(this));c('P2PDispatcher').register(this.onEventDispatched.bind(this));}v.prototype.onEventDispatched=function(w){var x=w.data,y=w.type;switch(y){case c('P2PActionConstants').TRANSFERS_UPDATED:this.handleTransfersUpdated(x);this.emit('change');break;case c('P2PActionConstants').TRANSFERS_UPDATED_ERROR:this.handleTransfersUpdatedError(x);this.emit('change');break;case c('P2PActionConstants').NUX_TRANSFERS_UPDATED:this.handleNUXTransfersUpdated(x);this.emit('change');break;case c('P2PActionConstants').TRANSFER_ADDED:this.handleTransferAdded(x);this.emit('change');break;case c('P2PActionConstants').TRANSFER_UPDATED:this.handleTransferUpdated(x);this.emit('change');break;case c('P2PActionConstants').TRANSFER_ACCEPTED:this.handleTransferAccepted();this.emit('change');break;case c('P2PActionConstants').TRANSFER_DECLINED:this.handleTransferDeclined(x);this.emit('change');break;case c('P2PActionConstants').EXTENSIVE_TRANSFER_DETAILS_UPDATED:this.handleTransferWithExtensiveDetails(x);this.emit('change');break;}};v.prototype.getAsyncRequestState=function(){return o;};v.prototype.handleTransfersUpdated=function(w){n=null;p=true;var x=[],y=w.map(function(aa){var ba={},ca=this.getTransferByID(aa[c('P2PTransferParam').TRANSFER_ID]),da={};if(aa.creditCard){ba[c('CreditCardFormParam').CREDENTIAL_ID]=aa.creditCard[c('CreditCardFormParam').CREDENTIAL_ID];ba[c('CreditCardFormParam').CARD_NUMBER]=aa.creditCard[c('CreditCardFormParam').CARD_NUMBER];ba[c('CreditCardFormParam').CARD_TYPE]=aa.creditCard[c('CreditCardFormParam').CARD_TYPE];aa.creditCard=new (c('P2PCreditCard'))(ba);}if(ca)for(var ea in ca)da[ea]=aa[ea]!==null?aa[ea]:ca[ea];x.push(aa[c('P2PTransferParam').TRANSFER_ID]);return new (c('ImmutableObject'))(aa,da);}.bind(this)),z=m.filter(function(aa){return x.indexOf(aa[c('P2PTransferParam').TRANSFER_ID])===-1;});m=y.concat(z);m=m.sort(function(aa,ba){return ba.creationTime-aa.creationTime;});};v.prototype.handleTransfersUpdatedError=function(w){n=w.error;u(w.requestID,w.error);};v.prototype.handleNUXTransfersUpdated=function(w){if(!p)this.handleTransfersUpdated(w);};v.prototype.handleTransferAdded=function(w){var x=null;t(w,w.requestID);if(w&&w.sender&&w.sender.id===c('CurrentUser').getID())s=true;x=m.filter(function(y){return y[c('P2PTransferParam').TRANSFER_ID]===w[c('P2PTransferParam').TRANSFER_ID];})[0];if(x)return;m.push(new (c('ImmutableObject'))(w));m=m.sort(function(y,z){return z.creationTime-y.creationTime;});};v.prototype.handleTransferAddedError=function(w){u(w.requestID,w.errors);};v.prototype.handleChannelTransferStatusChanged=function(w,x){x=x.obj;c('P2PActions').transferUpdated(x);};v.prototype.handleMessageReceived=function(w,x){for(var y in x)if(Object.prototype.hasOwnProperty.call(x,y)){var z=x[y];for(var aa=0;aa<z.length;aa++)if(z[aa].attachments&&z[aa].attachments.length){var ba=c('P2PNUXRendererUtils').getTransferFromMessage(z[aa]);if(ba){if(!this.hasReceived()&&ba.receiver.id===c('CurrentUser').getID())c('P2PAPI').getBannerStates();c('P2PActions').transferAdded(ba);return;}}}};v.prototype.handleTransferUpdated=function(w){for(var x=0,y=m.length;x<y;x++)if(m[x][c('P2PTransferParam').TRANSFER_ID]===w[c('P2PTransferParam').TRANSFER_ID])m[x]=c('ImmutableObject').set(m[x],w);};v.prototype.handleTransferAccepted=function(){var w=void 0;for(var x=0,y=m.length;x<y;x++)if(m[x][c('P2PTransferParam').STATUS]===c('P2PTransferStatus').PENDING_RECIPIENT_NUX){w={};w[c('P2PTransferParam').STATUS]=c('P2PTransferStatus').COMPLETED;m[x]=c('ImmutableObject').set(m[x],w);}q=true;};v.prototype.handleTransferDeclined=function(w){var x=void 0;for(var y=0,z=m.length;y<z;y++)if(m[y][c('P2PTransferParam').TRANSFER_ID]===w[c('P2PTransferParam').TRANSFER_ID]&&m[y][c('P2PTransferParam').STATUS]===c('P2PTransferStatus').PENDING_RECIPIENT_NUX){x={};x[c('P2PTransferParam').STATUS]=c('P2PTransferStatus').CANCELED_DECLINED;m[y]=c('ImmutableObject').set(m[y],x);break;}};v.prototype.handleTransferUpdatedError=function(w){u(w.requestID,w.errors);};v.prototype.getTransferByID=function(w){return m.filter(function(x){return w===x[c('P2PTransferParam').TRANSFER_ID];})[0];};v.prototype.getAll=function(w){if(!k){k=true;c('P2PAPI').getTransactions(w);}return m;};v.prototype.getNUXTransfer=function(){var w=m.filter(function(x){return c('P2PNUXRendererUtils').isRecipientActionableStatus(x);})[0];if(!w&&!l&&!k){l=true;c('P2PAPI').getNUXTransactions();}return w;};v.prototype.hasTransfers=function(){return m.length>0;};v.prototype.hasAccepted=function(){return q;};v.prototype.hasReceivedFromSender=function(w){for(var x=0,y=m.length;x<y;x++)if(m[x].sender.id===w)return true;return false;};v.prototype.hasReceived=function(){for(var w=0,x=m.length;w<x;w++)if(m[w].receiver.id===c('CurrentUser').getID())return true;return false;};v.prototype.getTransferFetchError=function(){return n;};v.prototype.getTransferWithExtensiveDetailsByID=function(w){if(!r.has(w)){r.add(w);c('P2PAPI').getExtensiveTransferDetailsByID(w);}};v.prototype.handleTransferWithExtensiveDetails=function(w){if(this.getTransferByID(w.transfer_id)){this.handleTransferUpdated(w);}else this.handleTransferAdded(w);};v.prototype.getAllLocal=function(){return m;};v.prototype.hasSentDuringSession=function(){return s;};v.prototype.shouldShowSenderNUX=function(){return !c('P2PGKValues').P2PUserAddedCredentialBefore&&!this.hasSentDuringSession();};f.exports=new v();}),null);