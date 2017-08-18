if (self.CavalryLogger) { CavalryLogger.start_js(["8kEP\/"]); }

__d('ConnectionsPYMLTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ConnectionsPYMLLoggerConfig',this.$ConnectionsPYMLTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ConnectionsPYMLLoggerConfig',this.$ConnectionsPYMLTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ConnectionsPYMLTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ConnectionsPYMLTypedLogger1=babelHelpers['extends']({},this.$ConnectionsPYMLTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$ConnectionsPYMLTypedLogger1.event=j;return this;};h.prototype.setLikeSource=function(j){this.$ConnectionsPYMLTypedLogger1.like_source=j;return this;};h.prototype.setPageID=function(j){this.$ConnectionsPYMLTypedLogger1.page_id=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$ConnectionsPYMLTypedLogger1=babelHelpers['extends']({},this.$ConnectionsPYMLTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={event:true,like_source:true,page_id:true};f.exports=h;}),null);
__d('SocialGoodCharityActionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:SocialGoodCharityActionsLoggerConfig',this.$SocialGoodCharityActionsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:SocialGoodCharityActionsLoggerConfig',this.$SocialGoodCharityActionsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$SocialGoodCharityActionsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$SocialGoodCharityActionsTypedLogger1=babelHelpers['extends']({},this.$SocialGoodCharityActionsTypedLogger1,j);return this;};h.prototype.setAbTestNamesToGroups=function(j){this.$SocialGoodCharityActionsTypedLogger1.ab_test_names_to_groups=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setAttributes=function(j){this.$SocialGoodCharityActionsTypedLogger1.attributes=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setCampaignID=function(j){this.$SocialGoodCharityActionsTypedLogger1.campaign_id=j;return this;};h.prototype.setCampaignType=function(j){this.$SocialGoodCharityActionsTypedLogger1.campaign_type=j;return this;};h.prototype.setEvent=function(j){this.$SocialGoodCharityActionsTypedLogger1.event=j;return this;};h.prototype.setExplicitPostID=function(j){this.$SocialGoodCharityActionsTypedLogger1.explicit_post_id=j;return this;};h.prototype.setFundraiserID=function(j){this.$SocialGoodCharityActionsTypedLogger1.fundraiser_id=j;return this;};h.prototype.setHasPaymentMethodOnFile=function(j){this.$SocialGoodCharityActionsTypedLogger1.has_payment_method_on_file=j;return this;};h.prototype.setParentEventType=function(j){this.$SocialGoodCharityActionsTypedLogger1.parent_event_type=j;return this;};h.prototype.setSourceAttributes=function(j){this.$SocialGoodCharityActionsTypedLogger1.source_attributes=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setVC=function(j){this.$SocialGoodCharityActionsTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$SocialGoodCharityActionsTypedLogger1=babelHelpers['extends']({},this.$SocialGoodCharityActionsTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={ab_test_names_to_groups:true,attributes:true,campaign_id:true,campaign_type:true,event:true,explicit_post_id:true,fundraiser_id:true,has_payment_method_on_file:true,parent_event_type:true,source_attributes:true,vc:true};f.exports=h;}),null);
__d('Tour',['Arbiter','LayerDestroyOnHide','LayerHideOnEscape','NavigationMessage','PageEvents'],(function a(b,c,d,e,f,g){function h(){'use strict';if(h._instance)h._instance.setTourComplete();h._instance=this;}h.prototype.init=function(){'use strict';this._pageLeaveToken=c('Arbiter').subscribe(c('PageEvents').AJAXPIPE_ONUNLOAD,this.handleLeavePage.bind(this));this._navigationBeginToken=c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this.handleTransition.bind(this));this.steps={};return this;};h.prototype.registerStep=function(i,j){'use strict';i.disableBehavior(c('LayerDestroyOnHide'));i.disableBehavior(c('LayerHideOnEscape'));this.steps[j]=i;i.subscribe('show',function(){i.inform('tour-dialog-show',i);});if(!this.getTourStarted())this.setTourStart();};h.prototype._unsubscribeSubscriptions=function(){'use strict';this._navigationBeginToken.unsubscribe();this._pageLeaveToken.unsubscribe();};h.prototype.handleLeavePage=function(){'use strict';this._unsubscribeSubscriptions();};h.prototype.handleTransition=function(){'use strict';this._unsubscribeSubscriptions();};h.prototype.handleTourStart=function(){'use strict';};h.prototype.handleTourStop=function(){'use strict';};h.prototype.handleTourComplete=function(){'use strict';};h.prototype.showStep=function(i){'use strict';var j=this.steps[i];if(!(this.openDialog==j))this.hideOpenDialog();if(!j)return;this.openDialog=j;j.show();};h.prototype.hideOpenDialog=function(){'use strict';if(this.openDialog){this.openDialog.hide();this.openDialog=null;}};h.prototype.getTourStarted=function(){'use strict';return this.tourStarted;};h.prototype.setTourStart=function(){'use strict';this.tourStarted=true;this.handleTourStart();};h.prototype.setTourStop=function(){'use strict';this.tourStarted=false;this.hideOpenDialog();this.handleTourStop();};h.prototype.setTourComplete=function(){'use strict';if(this.tourComplete)return;this.setTourStop();this.tourComplete=true;this.handleTourComplete();};h.prototype.hideStep=function(i){'use strict';var j=this.steps[i];j&&j.hide();};h.getInstance=function(){'use strict';return h._instance||(h._instance=new h());};Object.assign(h.prototype,{tourStarted:false,tourComplete:false,_navigationBeginToken:null,_pageLeaveToken:null,steps:{},openDialog:null});f.exports=h;}),null);
__d('PageFanning',['Animation','AsyncRequest','CSS','DOM','Parent','URI','ActorURI','$','collectDataAttributes','ConnectionsPYMLTypedLogger'],(function a(b,c,d,e,f,g){var h={setFanStatus:function j(k,l,m,n,o,p,q){var r={ft:{}};if(k)r={ft:c('collectDataAttributes')(k,['ft']).ft};var s=new (c('URI'))(window.location.href).getQueryData();if(m)if(s.ref==='pyml_feed'){new (c('ConnectionsPYMLTypedLogger'))().setEvent('like_page').setLikeSource('profile').setPageID(parseInt(l,10)).log();}else if(s.ref==='pyml_permalink')new (c('ConnectionsPYMLTypedLogger'))().setEvent('like_page').setLikeSource('post_permalink').setPageID(parseInt(l,10)).log();o=o||function(w){var x=w.getPayload();if(!x||!k)return;if(x.reload){h.reloadOnFanStatusChanged();}else i(k,x);};var t={fbpage_id:l,add:m,reload:n};if(q!=null)Object.assign(t,q);Object.assign(t,r);var u='/ajax/pages/fan_status.php';if(q!=null&&q.actor_id!=null)u=c('ActorURI').create(u,q.actor_id);var v=new (c('AsyncRequest'))().setURI(u).setData(t).setNectarModuleDataSafe(k).setHandler(o);if(p)v.setErrorHandler(p);v.send();return false;},reloadOnFanStatusChanged:function j(){var k=c('URI').getRequestURI();window.location.href=k;},toggleLikeOnFanStatusChanged:function j(k,l){var m=c('$')('liked_pages_like_action_'+k),n=c('$')('liked_pages_undo_action_'+k);c('CSS').conditionClass(m,'hidden_elem',l);c('CSS').conditionClass(n,'hidden_elem',!l);}};function i(j,k){var l=k.feedback;if(!l)return;if(c('Parent').byClass(j,'fbTimelineEscapeSectionItem'))j=c('Parent').byClass(j,'fan_status_inactive')||j;var m=c('DOM').create('span',{className:'fan_status_inactive'},l);j.parentNode.replaceChild(m,j);var n=function o(){if(k.can_repeat_action)m.parentNode.replaceChild(j,m);};new (c('Animation'))(m).duration(3000).checkpoint().to('backgroundColor','#FFFFFF').duration(1000).ondone(n).go();}f.exports=h;}),null);
__d("FundraiserCampaignType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({FACEBOOK_TO_USER:1,DONATE_BUTTON_ON_PAGE:2,DONATE_BUTTON_ON_ADS:3,CHARITY_TO_USER:4,DONATE_BUTTON_ON_POST:5,USER_TO_CHARITY:6,DONATE_BUTTON_ON_LIVE_VIDEO:7,LIGHTWEIGHT_FUNDRAISER_FOR_STORY:8,PERSON_FOR_PERSON:9});}),null);
__d("SocialGoodCharityActionsLoggerEvents",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({INITIALIZATION_BEGIN:"initialization_begin",INITIALIZATION:"initialization",PREPARE_PAYMENT_METHOD:"prepare_payment_method",VIEW_PUX_DONATE_FORM:"view_pux_donate_form",VIEW_NUX_DONATE_FORM:"view_nux_donate_form",PUX_METHOD:"pux_method",NUX_METHOD:"nux_method",FRAUD_CHECK_BEGIN:"fraud_check_begin",FRAUD_CHECK:"fraud_check",CHARGE_CREDENTIAL:"charge_credential",SEND_NMOR_DONATION_REQUEST:"send_nmor_donation_request",RECEIVE_NMOR_DONATION_RESPONSE:"receive_nmor_donation_response",COMPLETE_DONATE:"complete_donate",SHARE_EMAIL_WITH_CHARITY:"share_email_with_charity",DELETE_DONATION:"delete_donation",FUNDRAISER_PAGE_SHARE_IMPRESSION:"fundraiser_page_share_impression",CREATE_PROMO_FUNDRAISER_BEGIN:"create_promo_fundraiser_begin",CREATE_PROMO_SELECT_CHARITY:"create_promo_select_charity",CREATE_PROMO_SEE_MORE_CHARITIES:"create_promo_see_more_charities",CREATE_FUNDRAISER_BEGIN:"create_fundraiser_begin",CREATE_FUNDRAISER_UNPUBLISHED:"create_fundraiser_unpublished",CREATE_FUNDRAISER_PUBLISHED:"create_fundraiser_published",EDIT_FUNDRAISER_BEGIN:"edit_fundraiser_begin",EDIT_FUNDRAISER_COMPLETE:"edit_fundraiser_complete",INTERACT_WITH_MISSION_CARD:"interact_with_mission_card",TOGGLE_NOTIFICATIONS_ON_FUNDRAISER:"toggle_notifications_on_fundraiser",REMOVE_SELF_FROM_INVITE_LIST:"remove_self_from_invite_list",STRIPE_CREATION_REQUIRES_INFO:"stripe_creation_requires_info",FUNDRAISER_APPROVED_BY_SRT:"fundraiser_approved_by_srt",FUNDRAISER_REJECTED_BY_SRT:"fundraiser_rejected_by_srt",DIALOG_BEFORE_UNLOAD:"dialog_before_unload",DIALOG_CANCEL:"dialog_cancel",DIALOG_CONFIRM:"dialog_confirm",DIALOG_UNLOAD:"dialog_unload",DIALOG_VALIDATION_ERROR:"dialog_validation_error",CHANGE_CATEGORY:"change_category",CHANGE_TITLE:"change_title",CHANGE_DESCRIPTION:"change_description",CHANGE_END_DATE:"change_end_date",CHANGE_GOAL_AMOUNT:"change_goal_amount",CHANGE_CURRENCY:"change_currency",CHANGE_COVER_PHOTO:"change_cover_photo",CHOOSE_OTHER_CATEGORY:"choose_other_category",REPOSITION_COVER_PHOTO:"reposition_cover_photo",UPLOAD_COVER_PHOTO_SUCCESS:"upload_cover_photo_success",UPLOAD_COVER_PHOTO_FAIL:"upload_cover_photo_fail",CHANGE_CHARITY:"change_charity",SEARCH_RESPONSE:"search_response",SEARCH_RESPONSE_EMPTY:"search_response_empty",SEARCH_GRAPHQL_RESPONSE_EMPTY:"search_graphql_response_empty",SEARCH_CHARITIES:"search_charities",SEARCH_CATEGORIES:"search_categories",DELETE_BEGIN:"delete_begin",DELETE_COMPLETE:"delete_complete",VIEW_CREATE_FORM:"view_create_form",END_FUNDRAISER_BEGIN:"end_fundraiser_begin",END_FUNDRAISER_COMPLETE:"end_fundraiser_complete",CREATE_FLOW_MULTISTEP_BASIC_INFO:"create_flow_multistep_basic_info",CREATE_FLOW_MULTISTEP_STORY:"create_flow_multistep_story",CREATE_FLOW_MULTISTEP_MEDIA:"create_flow_multistep_media",CONFIRM_INFO_DIALOG:"confirm_info_dialog",VIEW_INFO_DIALOG:"view_info_dialog",SEARCH_BENEFICIARIES:"fundraiser_creation_search_beneficiaries",CHANGE_BENEFICIARY:"change_beneficiary",OPEN_CHARITY_BENEFICIARY_SELECTOR:"open_charity_beneficiary_selector",OPEN_CUSTOM_BENEFICIARY_FLOW:"open_custom_beneficiary_flow",OPEN_FRIEND_BENEFICIARY_SELECTOR:"open_friend_beneficiary_selector",VIEW_BENEFICIARY_SELECTOR:"view_beneficiary_selector",NONPROFIT_KEYWORD_DETECTED:"nonprofit_keyword_detected",LOAD_NONPROFIT_DETECTED_DIALOG:"load_nonprofit_detected_dialog",CHOOSE_CREATE_P4P_ANYWAYS:"choose_create_p4p_anyways",CHOOSE_CREATE_P4C_INSTEAD:"choose_create_p4c_instead",INVITE_DIALOG_INITIAL_LOAD:"invite_dialog_inital_load",INVITE_DIALOG_BOOTSTRAP_ENTRIES:"invite_dialog_bootstrap_entries",INVITE_DIALOG_BOOTSTRAP_FILTER_GROUPS:"invite_dialog_bootstrap_filter_groups",INVITE_DIALOG_UPDATE_QUERY:"invite_dialog_update_query",INVITE_DIALOG_SELECT_ENTRY:"invite_dialog_select_entry",INVITE_DIALOG_DESELECT_ENTRY:"invite_dialog_deselect_entry",INVITE_DIALOG_SELECT_ALL_ENTRIES:"invite_dialog_select_all_entries",INVITE_DIALOG_DESELECT_ALL_ENTRIES:"invite_dialog_deselect_all_entries",INVITE_DIALOG_EXPAND_GROUP:"invite_dialog_expand_group",INVITE_DIALOG_COLLAPSE_GROUP:"invite_dialog_collaps_group",INVITE_DIALOG_SET_ACTIVE_FILTER:"invite_dialog_set_active_filter",INVITE_USER_DIALOG_OPEN:"invite_user_dialog_open",INVITE_USER_FRIEND_INVITER_SEND:"invite_user_friend_inviter_send",INVITE_USER_COMPLETE:"invite_user_complete",INVITE_EMAIL_DIALOG_OPEN:"invite_email_dialog_open",INVITE_EMAIL_COMPLETE:"invite_email_complete",INVITE_ALL_FRIENDS:"invite_all_friends",CHANGE_DONATION_AMOUNT:"change_donation_amount",CHOOSE_PAYMENT_METHOD:"choose_payment_method",CLICK_ADD_PAYMENT_METHOD:"click_add_payment_method",ADD_PAYMENT_METHOD:"add_payment_method",REDIRECT_TO_PAYPAL:"redirect_to_paypal",WRITE_DONATION_STORY:"write_donation_story",VIEW_FUNDRAISER_SUPPORTERS:"view_fundraiser_supporters",DONATE_CLICK:"donate_click",DONATE_CANCEL:"donate_cancel",LEARN_MORE_CLICK:"learn_more_click",INVITE_CLICK:"invite_click",REACTION_INVITE_CLICK_DEPRECATED:"reaction_invite_click",INVITE_COMPLETE:"invite_complete",SHARE_CLICK:"share_click",SHARE_CLICK_CANCEL:"share_click_cancel",SHARE_COMPLETE:"share_complete",SHARE_DONATION_COMPLETE:"share_donation_complete",SHARE_FAIL:"share_fail",JOIN_CLICK:"join_click",JOIN_COMPLETE:"join_complete",LEAVE_CLICK:"leave_click",LEAVE_CONFIRM:"leave_confirm",LEAVE_CANCEL:"leave_cancel",LEAVE_COMPLETE:"leave_complete",UNFOLLOW_CLICK:"unfollow_click",UNFOLLOW_COMPLETE:"unfollow_complete",FOLLOW_CLICK:"follow_click",FOLLOW_COMPLETE:"follow_complete",FUNDRAISER_RHC_TIP_X_OUT:"fundraiser_rhc_tip_x_out",FUNDRAISER_PROMPT_RENDER:"fundraiser_prompt_render",FUNDRAISER_FOR_STORY_TIP_DISMISS:"fundraiser_for_story_tip_dismiss",FUNDRAISER_FOR_STORY_TIP_ACTION_CLICK:"fundraiser_for_story_tip_action_click",UNSAVE_COMPLETE:"unsave_complete",SAVE_COMPLETE:"save_complete",VIEW_FUNDRAISER:"view_fundraiser",VIEW_FUNDRAISER_RHC:"view_fundraiser_rhc",VIEW_BOOKMARK_HUB:"view_bookmark_hub",VIEW_BOOKMARK_HUB_TAB:"view_bookmark_hub_tab",VIEW_BOOKMARK_FUNDRAISER_PAGINATION:"view_bookmark_fundraiser_pagination",VIEW_FUNDRAISER_HUB_CATEGORY:"view_fundraiser_hub_category",VIEW_GIVING_TUESDAY_FUNDRAISER_PAGINATION:"view_giving_tuesday_fundraiser_pagination",VIEW_PAGE_FUNDRAISERS_TAB:"view_page_fundraisers_tab",VIEW_FUNDRAISER_CREATION_LANDING_PAGE:"view_fundraiser_creation_landing_page",VIEW_FUNDRAISER_CREATION_REDIRECT:"view_fundraiser_creation_redirect",VIEW_FUNDRAISER_CREATION_PENDING_DIALOG:"view_fundraiser_creation_pending_dialog",VIEW_FUNDRAISER_CREATION_PENDING_EDIT_DIALOG:"view_fundraiser_creation_pending_edit_dialog",VIEW_CREATE_OUTRO_DIALOG:"view_create_outro_dialog",VIEW_ABOUT_FUNDRAISERS:"view_about_fundraisers",INVITE_NULL_MISSION:"invite_null_mission",PERSONAL_UPDATE_NULL_MISSION:"personal_update_null_mission",SEE_SELF_DONATIONS:"see_self_donations",COMPOSE_CLICK:"compose_click",CREATE_POST:"create_post",CREATE_COMMENT:"create_comment",DELETE_POST:"delete_post",DELETE_COMMENT:"delete_comment",PAGE_VERIFICATION_INITIALIZED:"page_verification_initialized",PAGE_TERM_REVIEW_INITIALIZED:"page_term_review_initialized",PAYMENT_APPLICATION_INITIALIZED:"payment_application_initialized",ONBOARDING_PAGE_LOAD:"onboarding_page_load",CHARITY_SRT_FLOW:"charity_srt_flow",CHARITY_SRT_JOB_APPROVED:"charity_srt_job_approved",CHARITY_SRT_JOB_CREATION:"charity_srt_job_creation",CHARITY_SRT_THREAD_CREATION:"charity_srt_thread_creation",CHARITY_VERIFICATION_DOCUMENT_UPLOAD:"charity_verification_document_upload",CHARITY_VERIFICATION_DOCUMENT_UPLOAD_COMPLETE:"charity_verification_document_upload_complete",CHARITY_CREATION:"charity_creation",CHARITY_CREATION_COMPLETE:"charity_creation_complete",TERMS_ACCEPT_PAGE_LOAD:"terms_accept_page_load",TERMS_ACCEPT:"terms_accept",ORGANIZATION_DETAILS:"organization_details",LEADERSHIP_INFO:"leadership_info",PAYMENT_INFO:"payment_info",ENTITY_CREATION:"entity_creation",MISSING_GRAPHQL_FIELDS:"fundraiser_page_missing_fields",GOTO_PAGE_SUBTITLE:"fundraiser_charity_page_subtitle",GOTO_PAGE_ACTIONBAR:"fundraiser_page_tapped_go_to_page",PERSONAL_UPDATE_BEGIN:"personal_update_begin",PERSONAL_UPDATE_SEND_MESSAGE:"personal_update_send_message",PERSONAL_UPDATE_SEND_EMAIL:"personal_update_send_email",PERSONAL_UPDATE_SEND_COUNT:"personal_update_send_count",XMA_BAD_DONATE_LINK:"fundraiser_xma_bad_donate_link",XMA_FALLBACK_VIEW:"fundraiser_xma_fallback_view",XMA_TAP_ATTACHMENT:"fundraiser_xma_tap_attachment",XMA_TAP_DONATE:"fundraiser_xma_tap_donate",XMA_VIEW:"fundraiser_xma_view",XMA_VIEW_DONATE_BUTTON:"fundraiser_xma_view_donate_button",SINGLE_CLICK_INVITE_SENT:"fundraiser_single_click_invite_sent",SINGLE_CLICK_INVITE_SENT_FAILURE:"fundraiser_single_click_invite_sent_failure",SINGLE_CLICK_INVITE_FETCH_DATA_FAILURE:"fundraiser_single_click_invite_fetch_data_failure",SINGLE_CLICK_INVITE_VIEW:"fundraiser_single_click_invite_view",POST_DONATION_BUTTON_TAP:"fundraiser_thank_you_button_tap",POST_DONATION_VIEW:"fundraiser_view_thank_you",QUICK_PROMOTION_IMPRESSION:"quick_promotion_impression",QUICK_PROMOTION_PRIMARY_CLICK:"quick_promotion_primary_click",QUICK_PROMOTION_SECONDARY_CLICK:"quick_promotion_secondary_click",QUICK_PROMOTION_DISMISS_CLICK:"quick_promotion_dismiss_click",SHOW_POST_UPSELL:"show_post_upsell",SUPPRESSED_POST_UPSELL:"suppressed_post_upsell",CLOSE_POST_UPSELL:"close_post_upsell",FUNDRAISER_FOR_STORY_CHARITY_CLICK:"fundraiser_for_story_charity_click",LIGHTWEIGHT_MINUTIAE_PREVIEW_ATTACHMENT:"lightweight_minutiae_attachment_preview",LIGHTWEIGHT_MINUTIAE_PREVIEW_ATTACHMENT_CLOSE:"lightweight_minutiae_attachment_preview_close",FUNDRAISER_AUTONOTIFY_COMPLETE:"fundraiser_autonotify_complete",LIVE_VIDEO_ATTACHMENT_VIEW:"fundraiser_live_video_attachment_view",LIVE_VIDEO_START:"fundraiser_live_video_start",CANCEL:"cancel",CONFIRM:"confirm",HIDE:"hide",NOTIF_CLICK:"notif_click",NOTIF_GENERATE:"notif_generate",NOTIF_IMPRESSION:"notif_impression",NOTIF_MARKASREAD:"notif_markasread",NOTIF_MARKASSEEN:"notif_markasseen",NOTIF_NEGATIVE_FEEDBACK:"notif_negative_feedback",EXTERNAL_APP_DONATION:"external_app_donation",FAQ_VIEW_ANSWER:"faq_view_answer",FAQ_SHARE_ARTICLE:"faq_share_article",IDLE_TO_DONATE_BANNER_SHOWN:"idle_to_donate_banner_shown",IDLE_TO_DONATE_BANNER_DISMISSED:"idle_to_donate_banner_dismissed",OUTRO_SHOWN:"fundraiser_outro_shown",OUTRO_DISMISSED:"fundraiser_outro_dismissed",DONATION_THANK_YOU_COMMENT_DIALOG_OPEN:"donation_thank_you_comment_dialog_open",DONATION_THANK_YOU_COMMENT_COMPLETE:"donation_thank_you_comment_complete",SECONDARY_ACTIONS_SHARE_TAPPED:"secondary_actions_share_tapped",SECONDARY_ACTIONS_DONATE_TAPPED:"secondary_actions_donate_tapped",SECONDARY_ACTIONS_SHARE_CANCELLED:"secondary_actions_share_cancelled",SECONDARY_ACTIONS_INVITE_TAPPED:"secondary_actions_invite_tapped",SECONDARY_ACTIONS_WRITE_POST_TAPPED:"secondary_actions_write_post_tapped",SECONDARY_ACTIONS_SEND_MESSAGE_TAPPED:"secondary_actions_send_message_tapped",SECONDARY_ACTIONS_MORE_OPTIONS_TAPPED:"secondary_actions_more_options_tapped",FUNDRAISER_ACTIVATION:"fundraiser_activation",FUNDRAISER_GOAL_HIT:"fundraiser_goal_hit"});}),null);
__d("SocialGoodCharityActionsLoggerParentEvents",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({DONATE:"donate",INTERACT:"interact",CREATE:"create",EDIT:"edit",DELETE:"delete",ONBOARDING:"onboarding",INVITE:"invite",TRIGGER:"trigger",NFX:"nfx",NOTIFICATION:"notification",SRT_REVIEW:"srt_review",MILESTONE:"milestone"});}),null);
__d("SocialGoodCharityActionsSourceKeys",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({LIVE_VIDEO_BROADCAST_STATUS:"broadcast_status",SOCIAL_UPSELL_REASON:"social_upsell_reason",SOURCE_NAME:"source_name",SOURCE_CATEGORY:"source_category",SOURCE_ID:"source_id",SESSION_ID:"session_id",PROMOTIONAL_SOURCE:"promotional_source",REFERRAL_SOURCE:"referral_source",NOTIF_TYPE:"notif_type",QUICK_PROMOTION_ID:"quick_promotion_id"});}),null);
__d('SocialGoodCharityActionsLoggerUtils',['FundraiserCampaignType','SocialGoodCharityActionsLoggerEvents','SocialGoodCharityActionsLoggerParentEvents','SocialGoodCharityActionsSourceKeys','SocialGoodCharityActionsTypedLogger'],(function a(b,c,d,e,f,g){var h={logAction:function i(event,j,k,l){new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(event).setParentEventType(j).setCampaignID(k.campaign_id).setCampaignType(k.campaign_type).setAttributes(k.attributes).setSourceAttributes(k.source_attributes).setFundraiserID(k.fundraiser_id).log();},logOnboarding:function i(event,j){new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(event).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').ONBOARDING).setAttributes(j).log();},logDonate:function i(event){var j=arguments.length<=1||arguments[1]===undefined?null:arguments[1];new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(event).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').DONATE).setAttributes(j).log();},logU2CFundraiserInvite:function i(event,j){var k=arguments.length<=2||arguments[2]===undefined?null:arguments[2];new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(event).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').INVITE).setSourceAttributes(j).setAttributes(k).log();},logU2CFundraiserCreation:function i(event,j){var k=arguments.length<=2||arguments[2]===undefined?null:arguments[2],l=arguments.length<=3||arguments[3]===undefined?null:arguments[3];new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(event).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').CREATE).setSourceAttributes(j).setAttributes(k).setCampaignType(c('FundraiserCampaignType').USER_TO_CHARITY).setAbTestNamesToGroups(l).log();},logU2CFundraiserEdit:function i(event,j){var k=arguments.length<=2||arguments[2]===undefined?null:arguments[2],l=arguments.length<=3||arguments[3]===undefined?null:arguments[3];new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(event).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').EDIT).setSourceAttributes(j).setAttributes(k).setCampaignID(j[c('SocialGoodCharityActionsSourceKeys').SOURCE_ID]).setCampaignType(c('FundraiserCampaignType').USER_TO_CHARITY).setAbTestNamesToGroups(l).log();},logJoinActionClick:function i(j,k){var event=j?c('SocialGoodCharityActionsLoggerEvents').JOIN_CLICK:c('SocialGoodCharityActionsLoggerEvents').LEAVE_CLICK;this.logAction(event,c('SocialGoodCharityActionsLoggerParentEvents').INTERACT,k);},logFollowActionClick:function i(j,k){var event=j?c('SocialGoodCharityActionsLoggerEvents').FOLLOW_CLICK:c('SocialGoodCharityActionsLoggerEvents').UNFOLLOW_CLICK;this.logAction(event,c('SocialGoodCharityActionsLoggerParentEvents').INTERACT,k);},logShareActionClick:function i(j){this.logAction(c('SocialGoodCharityActionsLoggerEvents').SHARE_CLICK,c('SocialGoodCharityActionsLoggerParentEvents').INTERACT,j);},logXMAView:function i(j){new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(c('SocialGoodCharityActionsLoggerEvents').XMA_VIEW).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').INTERACT).setFundraiserID(j).setCampaignID(j).setCampaignType(c('FundraiserCampaignType').USER_TO_CHARITY).log();},logXMATapDonate:function i(j){new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(c('SocialGoodCharityActionsLoggerEvents').XMA_TAP_DONATE).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').INTERACT).setFundraiserID(j).setCampaignID(j).setCampaignType(c('FundraiserCampaignType').USER_TO_CHARITY).log();},logComposerPreviewAttachmentClose:function i(){new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(c('SocialGoodCharityActionsLoggerEvents').LIGHTWEIGHT_MINUTIAE_PREVIEW_ATTACHMENT_CLOSE).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').TRIGGER).setCampaignType(c('FundraiserCampaignType').LIGHTWEIGHT_FUNDRAISER_FOR_STORY).log();}};f.exports=h;}),null);
__d("XPagesLikeCountController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pages\/x\/updateLikeCountDomString\/",{page_id:{type:"Int",required:true},like_id:{type:"String",required:true}});}),null);
__d('PageLikeButton',['Arbiter','AsyncRequest','AsyncResponse','DOM','EditSubscriptions','Event','FeedBlacklistButton','PageFanning','PageLikeConstants','PagesFollowStore','ProfileSubFollowStatus','PagesLikeFollowNotifActions','PagesLikeFollowNotifDispatcher','SocialGoodCharityActionsLoggerUtils','Tour','XPagesLikeCountController'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l,m,n,o,p,q,r,s,t,u){var v=this._getOption(u,'isLazy');this._subscribe(c('PageLikeConstants').LIKED,v,function(x,y){if(this._shouldUpdateButton(m,u,y)){j.swap();if(!r)l.suppressNextMouseEnter&&l.suppressNextMouseEnter();if(this._getOption(u,'is_fundraiser'))c('EditSubscriptions').toggleNotificationsOnJoin(m,true);}}.bind(this));this._subscribe(c('PageLikeConstants').UNLIKED,v,function(x,y){if(this._shouldUpdateButton(m,u,y)){j.unswap();l.hideFlyout&&l.hideFlyout();if(this._getOption(u,'is_fundraiser'))c('EditSubscriptions').toggleNotificationsOnJoin(m,false);}}.bind(this));if(t)this._subscribe(c('PageLikeConstants').SPM_CALLOUT,v,function(x,y){if(this._shouldUpdateButton(m,u,y)){t.show();c('Arbiter')._releaseAllEvents(c('PageLikeConstants').SPM_CALLOUT);}}.bind(this));var w=function(event){var x=j.getCurrentButton();this._likeButtonAction(m,n,o,p,x,event,u);}.bind(this);c('Event').listen(k,'click',w);if(v)c('Arbiter').subscribe(c('PageLikeConstants').LAZY_CLICK,function(x,y){var event=y.event,z=y.node;if(z!==k)return;w(event);});},_subscribe:function i(event,j,k){var l=j?[event,event+'.lazy']:[event];c('Arbiter').subscribe(l,k);},initCallout:function i(j,k){var l=document.getElementById('pageActionLikeCalloutButton');c('Event').listen(l,'click',this._likeButtonAction(j,k,null,null,null));},initUnlike:function i(j,k,l,m){var n=this._getOption(m,'actor_id');c('Event').listen(j,'click',function(event){this.doUnlikeAction(event,k,l,n,m);}.bind(this));},initUnlikeAndHide:function i(j,k,l,m){var n=this._getOption(m,'actor_id');c('Event').listen(j,'click',function(event){this.doUnlikeAction(event,k,l,n,m);c('DOM').remove(j);}.bind(this));},doUnlikeAction:function i(event,j,k,l,m){this._saveLike(event.target,j,false,function(n){c('Arbiter').inform(c('PageLikeConstants').LIKED,{profile_id:j,actor_id:l});c('AsyncResponse').defaultErrorHandler(n);},k,null,null,m);this.informUnlike(j,l);},doLikeAction:function i(j,k,l,m){var n={actor_id:m};this._saveLike(j,k,true,function(o){if(o.getError()!==1431019)c('Arbiter').inform(c('PageLikeConstants').UNLIKED,{profile_id:k,actor_id:m});c('AsyncResponse').defaultErrorHandler(o);},l,null,null,n);h.informLike(k,j,l,n);},informLike:function i(j,k,l,m){var n=this._getOption(m,'actor_id'),o={profile_id:j,actor_id:n,target:k,origin:l};c('Arbiter').inform(c('PageLikeConstants').LIKED,o);o.connected=true;var p=c('PagesFollowStore').getState();if(!(j in p)||!p[j]||p[j]!==c('ProfileSubFollowStatus').SEE_FIRST)c('PagesLikeFollowNotifDispatcher').dispatch({type:c('PagesLikeFollowNotifActions').FOLLOW_CHANGED,data:{pageID:o.profile_id,followStatus:true}});c('Arbiter').inform(c('FeedBlacklistButton').UNBLACKLIST,o);},informLikeSuccess:function i(j){var k={profile_id:j};c('Arbiter').inform(c('PageLikeConstants').LIKED_SUCCESS,k);c('Arbiter').inform(c('PageLikeConstants').SPM_CALLOUT,k);},informUnlike:function i(j,k){var l={profile_id:j,actor_id:k};setTimeout(c('Arbiter').inform.bind(c('Arbiter'),c('PageLikeConstants').UNLIKED,l),0);l.connected=false;setTimeout(function(){return c('PagesLikeFollowNotifDispatcher').dispatch({type:c('PagesLikeFollowNotifActions').FOLLOW_CHANGED,data:{pageID:l.profile_id,followStatus:false}});},0);c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,l);},updateLikeCount:function i(j,k){c('Arbiter').subscribe(c('PageLikeConstants').LIKED_SUCCESS,function(l,m){var n=m.profile_id;if(k==n){var o=c('XPagesLikeCountController').getURIBuilder().setInt('page_id',k).setString('like_id',j).getURI();new (c('AsyncRequest'))().setURI(o).send();}});},_saveLike:function i(j,k,l,m,n,o,p,q){var r=this._getOption(q,'actor_id');c('Tour').getInstance().hideStep('low_page_likes');if(this._getOption(q,'is_fundraiser')&&this._getOption(q,'logging_info'))c('SocialGoodCharityActionsLoggerUtils').logJoinActionClick(l,this._getOption(q,'logging_info'));c('PageFanning').setFanStatus(j,k,l,false,function(){h.informLikeSuccess(k);if(!l&&this._getOption(q,'reload_on_unlike')||l&&this._getOption(q,'reload_on_like'))location.reload();}.bind(this),m,{fan_origin:n,fan_source:o,cat:p,actor_id:r});},_likeButtonAction:function i(j,k,l,m,n,event,o){var p=this._getOption(o,'actor_id');this._saveLike(event.getTarget(),j,true,function(q){c('Arbiter').inform(c('PageLikeConstants').UNLIKED,{profile_id:j,actor_id:p});c('AsyncResponse').defaultErrorHandler(q);},k,l,m,o);h.informLike(j,n,k,o);},_shouldUpdateButton:function i(j,k,l){var m=this._getOption(k,'actor_id');if(j===l.profile_id){if(m===null)return true;if(l.actor_id!==null&&m===l.actor_id)return true;}return false;},_getOption:function i(j,k){if(j&&k in j)return j[k];return null;}};f.exports=h;b.PageLikeButton=h;}),null);