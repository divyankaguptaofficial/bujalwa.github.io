if (self.CavalryLogger) { CavalryLogger.start_js(["5CIdi"]); }

__d('CandelaControlLines.react',['CandelaConstants','CandelaTheme','CandelaUtils','React','ReactART'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes,k=c('ReactART').Group,l=c('ReactART').Path,m=c('ReactART').Shape,n=c('CandelaConstants').Orientation,o=c('CandelaUtils').art.drawDashedPath;h=babelHelpers.inherits(p,c('React').Component);i=h&&h.prototype;p.prototype.render=function(){var q=this.props,r=q.height,s=q.orientation,t=q.values,u=q.variableName,v=q.width,w=q.x,x=q.y,y=this.context,z=y.scales,aa=y.theme,ba=aa.getStyle('controlline:'+s);if(ba.visibility!=='visible')return null;var ca=ba.opacity,da=ba.stroke,ea=ba.strokeDasharray,fa=ba.strokeLinecap,ga=ba.strokeWidth,ha=s===n.HORIZONTAL?z[u].set('output',[x+r,x]):z[u].set('output',[w,w+v]),ia=[];t.forEach(function(ja,ka){var la=void 0,ma=void 0,na=void 0,oa=void 0;if(s===n.HORIZONTAL){la=w;na=oa=ha.convert(ja);ma=w+v;}else{la=ma=ha.convert(ja);na=x;oa=x+r;}var pa=l();if(ea){o(pa,ea,{x:la,y:na},{x:ma,y:oa});}else pa.moveTo(la,na).lineTo(ma,oa);ia.push(c('React').createElement(m,{d:pa,key:s+'-controlline-'+ka,opacity:ca,stroke:da,strokeCap:fa,strokeWidth:ga}));});return c('React').createElement(k,null,ia);};function p(){h.apply(this,arguments);}p.contextTypes={scales:j.object,theme:j.instanceOf(c('CandelaTheme'))};p.propTypes={height:j.number,width:j.number,orientation:j.oneOf([n.HORIZONTAL,n.VERTICAL]).isRequired,variableName:j.string.isRequired,values:j.arrayOf(j.any).isRequired};p.defaultProps={orientation:n.HORIZONTAL};f.exports=p;}),null);
__d('InsightsBubbleChart.react',['invariant','CandelaAxis.react','CandelaChartLayout.react','CandelaChartSurface.react','CandelaConstants','CandelaControlLines.react','CandelaGridLines.react','CandelaGroupScaleBuilder','CandelaPanel.react','CandelaPoints.react','CandelaStackScaleBuilder','CandelaStructs','CandelaTheme','immutable','InsightsFormatterFactories','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('CandelaConstants').Alignment,l=c('CandelaConstants').Orientation,m=c('immutable').Map,n=c('immutable').OrderedSet,o=c('immutable').Set,p=c('React').PropTypes,q=c('CandelaStructs').Threshold,r=c('InsightsFormatterFactories').axisMarkFormatterFactory,s=c('InsightsFormatterFactories').axisSubMarkFormatterFactory,t=p.oneOfType([p.instanceOf(c('CandelaGroupScaleBuilder')),p.instanceOf(c('CandelaStackScaleBuilder'))]);i=babelHelpers.inherits(u,c('React').PureComponent);j=i&&i.prototype;u.prototype.$InsightsBubbleChart1=function(){var v=this.props,w=v.highlights,x=v.horizontalControlValues,y=v.plotSize,z=v.plotX,aa=v.plotY,ba=v.theme,ca=v.threshold,da=v.verticalControlValues;if(ca){aa.length===1||h(0);aa[0].getSeriesNames().length===1||aa[0] instanceof c('CandelaGroupScaleBuilder')||h(0);}var ea=z.getSeriesNames()[0],fa=void 0,ga=w?w.map(function(ma){return ma.dependentSeriesName;}):o(),ha=[];aa.forEach(function(ma){var na=ma.getSeriesNames().slice();if(ga.size)na.sort(function(oa){return Number(ga.has(oa));});if(fa==null)fa=na[0];if(ma instanceof c('CandelaStackScaleBuilder')){ha.push(n(na));}else ha.push.apply(ha,na.map(function(oa){return n([oa]);}));});var ia=void 0,ja=void 0,ka=void 0,la=ba.getStyle('gridline');if(la.visibility==='visible')ia=c('React').createElement(c('CandelaGridLines.react'),{plotX:ea,plotY:fa});if(x)ja=c('React').createElement(c('CandelaControlLines.react'),{orientation:l.HORIZONTAL,values:x,variableName:fa});if(da)ka=c('React').createElement(c('CandelaControlLines.react'),{orientation:l.VERTICAL,values:da,variableName:ea});return c('React').createElement(c('CandelaPanel.react'),null,ia,c('React').createElement(c('CandelaPoints.react'),{highlights:w,plotSize:y&&y.getSeriesNames()[0],plotX:ea,plotY:n(ha),threshold:ca}),ja,ka);};u.prototype.$InsightsBubbleChart2=function(){var v=this.props,w=v.axisMarkFormatterFactory,x=v.axisSubMarkFormatterFactory,y=v.plotY,z=v.theme,aa=v.yAxisAlignment,ba=y[aa===k.LEFT?0:1];if(ba){var ca=z.getStyle('axis[orientation="vertical"][alignment="left"]');return c('React').createElement(c('CandelaAxis.react'),{alignment:k.LEFT,markFormatterFactory:w,plot:ba.getSeriesNames()[0],subMarkFormatterFactory:x,title:ba.getTitle(),width:ca.width});}return null;};u.prototype.$InsightsBubbleChart3=function(){var v=this.props,w=v.axisMarkFormatterFactory,x=v.axisSubMarkFormatterFactory,y=v.plotY,z=v.theme,aa=v.yAxisAlignment,ba=y[aa===k.RIGHT?0:1];if(ba){var ca=z.getStyle('axis[orientation="vertical"][alignment="right"]');return c('React').createElement(c('CandelaAxis.react'),{alignment:k.RIGHT,markFormatterFactory:w,plot:ba.getSeriesNames()[0],subMarkFormatterFactory:x,title:ba.getTitle(),width:ca.width});}return null;};u.prototype.$InsightsBubbleChart4=function(){var v=this.props,w=v.axisMarkFormatterFactory,x=v.axisSubMarkFormatterFactory,y=v.plotX,z=v.theme,aa=v.xAxisAlignment;if(aa===k.TOP){var ba=z.getStyle('axis[orientation="horizontal"][alignment="top"]');return c('React').createElement(c('CandelaAxis.react'),{alignment:k.TOP,height:ba.height,markFormatterFactory:w,plot:y.getSeriesNames()[0],subMarkFormatterFactory:x,title:y.getTitle()});}return null;};u.prototype.$InsightsBubbleChart5=function(){var v=this.props,w=v.axisMarkFormatterFactory,x=v.axisSubMarkFormatterFactory,y=v.plotX,z=v.theme,aa=v.xAxisAlignment;if(aa===k.BOTTOM){var ba=z.getStyle('axis[orientation="horizontal"][alignment="bottom"]');return c('React').createElement(c('CandelaAxis.react'),{alignment:k.BOTTOM,height:ba.height,markFormatterFactory:w,plot:y.getSeriesNames()[0],subMarkFormatterFactory:x,title:y.getTitle()});}return null;};u.prototype.render=function(){var v=this.props,w=v.data,x=v.height,y=v.interactive,z=v.onClick,aa=v.onLongPress,ba=v.onTouchEnd,ca=v.onTouchEnter,da=v.onTouchLeave,ea=v.onTouchMove,fa=v.onTouchStart,ga=v.onMouseDown,ha=v.onMouseEnter,ia=v.onMouseLeave,ja=v.onMouseMove,ka=v.onMouseOver,la=v.onMouseOut,ma=v.onMouseUp,na=v.plotSize,oa=v.plotX,pa=v.plotY,qa=v.schema,ra=v.theme,sa=v.width,ta=pa.concat(oa);if(na)ta.push(na);var ua=this.$InsightsBubbleChart5(),va=this.$InsightsBubbleChart2(),wa=this.$InsightsBubbleChart1(),xa=this.$InsightsBubbleChart3(),ya=this.$InsightsBubbleChart4();return c('React').createElement(c('CandelaChartSurface.react'),{data:n(w),height:x,interactive:y,onClick:z,onLongPress:aa,onMouseDown:ga,onMouseEnter:ha,onMouseLeave:ia,onMouseMove:ja,onMouseOut:la,onMouseOver:ka,onMouseUp:ma,onTouchEnd:ba,onTouchEnter:ca,onTouchLeave:da,onTouchMove:ea,onTouchStart:fa,scales:o(ta),schema:m(qa),theme:ra,width:sa},c('React').createElement(c('CandelaChartLayout.react'),{bottomXAxis:ua,leftYAxis:va,plotArea:wa,rightYAxis:xa,topXAxis:ya}));};function u(){i.apply(this,arguments);}u.propTypes={axisMarkFormatterFactory:p.func,axisSubMarkFormatterFactory:p.func,data:p.arrayOf(p.object).isRequired,height:p.number.isRequired,highlights:p.instanceOf(o),horizontalControlValues:p.any,interactive:p.bool,onClick:p.func,onLongPress:p.func,onTouchEnd:p.func,onTouchEnter:p.func,onTouchLeave:p.func,onTouchMove:p.func,onTouchStart:p.func,onMouseDown:p.func,onMouseEnter:p.func,onMouseLeave:p.func,onMouseMove:p.func,onMouseOver:p.func,onMouseOut:p.func,onMouseUp:p.func,plotSize:t,plotX:t.isRequired,plotY:p.arrayOf(t).isRequired,schema:p.object.isRequired,theme:p.instanceOf(c('CandelaTheme')).isRequired,threshold:p.instanceOf(q),verticalControlValues:p.any,width:p.number.isRequired,xAxisAlignment:p.oneOf([k.BOTTOM,k.TOP]),yAxisAlignment:p.oneOf([k.LEFT,k.RIGHT])};u.defaultProps={axisMarkFormatterFactory:r,axisSubMarkFormatterFactory:s,xAxisAlignment:k.BOTTOM,yAxisAlignment:k.LEFT};f.exports=u;}),null);