if (self.CavalryLogger) { CavalryLogger.start_js(["nksXo"]); }

__d('AdsLeadGenFormEditorActiveConditionalQuestionContainer.react',['AdsLeadGenFormEditorActiveConditionalQuestion.react','AdsLeadGenFormEditorConditionalQuestionStore','AdsLeadGenFormEditorConditionalQuestionUpdateAnswerSetDialogStore','AdsLeadGenFormEditorConditionalQuestionViewStore','AdsLeadGenFormEditorStore','AdsLeadGenFormEditorValidationStore','AdsLeadGenFormEditorViewStore','FluxContainer','immutable','React','nullthrows'],(function a(b,c,d,e,f,g){'use strict';var h=[c('AdsLeadGenFormEditorConditionalQuestionStore'),c('AdsLeadGenFormEditorConditionalQuestionUpdateAnswerSetDialogStore'),c('AdsLeadGenFormEditorConditionalQuestionViewStore'),c('AdsLeadGenFormEditorStore'),c('AdsLeadGenFormEditorValidationStore'),c('AdsLeadGenFormEditorViewStore')],i=function k(){return h;},j=function k(){var l=c('AdsLeadGenFormEditorViewStore').getPageID(),m=c('AdsLeadGenFormEditorViewStore').getFormID(),n=c('nullthrows')(c('AdsLeadGenFormEditorStore').getConditionalQuestion(m)),o=c('AdsLeadGenFormEditorConditionalQuestionStore').getAnswerSet(n.get('id')),p=c('AdsLeadGenFormEditorConditionalQuestionViewStore').get(n.get('id')),q=p?p.answerCombination:c('immutable').List(),r=c('AdsLeadGenFormEditorConditionalQuestionUpdateAnswerSetDialogStore').getIsDialogVisible(),s=c('AdsLeadGenFormEditorValidationStore').getErrors().get(n.get('id')),t=c('AdsLeadGenFormEditorValidationStore').getErrorsForConditionalQuestions(n);return {answerCombination:q,conditionalAnswerSet:o,conditionalQuestionErrors:t,error:s,formID:m,isUpdateAnswerSetDialogVisible:r,pageID:l,question:n};};f.exports=c('FluxContainer').createFunctional(function(k){return c('React').createElement(c('AdsLeadGenFormEditorActiveConditionalQuestion.react'),k);},i,j);}),null);