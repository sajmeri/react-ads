(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[64],{14:function(e,n,t){"use strict";t.r(n);var a=t(285),r=t(290),o=t(282),i=t(277);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c=Object.keys(o.EVENTS).map((function(e){return o.EVENTS[e]}));var s=u(Object(a.a)({emptyUrl:"",analyticsType:"endpoint"}),{track:function(e){var n,t,a=e.eventType,r=e.args;void 0!==r&&-1!==c.indexOf(a)&&(n="pb-analytics-event",t={eventName:a,args:r},i.getWindowTop().ADAGIO.queue.push({action:n,data:t,ts:Date.now()}))}});s.originEnableAnalytics=s.enableAnalytics,s.enableAnalytics=function(e){if(function(){try{if(i.getWindowTop().location.href)return!0}catch(e){return!1}}()){var n=i.getWindowTop();n.ADAGIO=n.ADAGIO||{},n.ADAGIO.queue=n.ADAGIO.queue||[],n.ADAGIO.versions=n.ADAGIO.versions||{},n.ADAGIO.versions.adagioAnalyticsAdapter="2.0.0",s.originEnableAnalytics(e)}},r.default.registerAnalyticsAdapter({adapter:s,code:"adagio"}),n.default=s},285:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var a=t(282),r=t(281);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=t(289),c=t(277),s=a.EVENTS,l=s.AUCTION_INIT,p=s.AUCTION_END,f=s.REQUEST_BIDS,y=s.BID_REQUESTED,g=s.BID_TIMEOUT,v=s.BID_RESPONSE,T=s.NO_BID,d=s.BID_WON,A=s.BID_ADJUSTMENT,b=s.BIDDER_DONE,E=s.SET_TARGETING,D=s.AD_RENDER_FAILED,h=s.ADD_AD_UNITS;function I(e){var n,t=e.url,a=e.analyticsType,s=e.global,I=e.handler,O=[],_=0,q=!0;return function(){if(q){for(var e=0;e<O.length;e++)O[e]();O.push=function(e){e()},q=!1}c.logMessage("event count sent to ".concat(s,": ").concat(_))}(),{track:function(e){var n=e.eventType,t=e.args;"bundle"===this.getAdapterType()&&window[s](I,n,t);"endpoint"===this.getAdapterType()&&N.apply(void 0,arguments)},enqueue:S,enableAnalytics:w,disableAnalytics:function(){c._each(n,(function(e,n){u.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:w},getAdapterType:function(){return a},getGlobal:function(){return s},getHandler:function(){return I},getUrl:function(){return t}};function N(e){var n=e.eventType,a=e.args,o=e.callback;Object(r.a)(t,o,JSON.stringify({eventType:n,args:a}))}function S(e){var n=e.eventType,t=e.args,a=this;s&&window[s]&&n&&t?this.track({eventType:n,args:t}):O.push((function(){_++,a.track({eventType:n,args:t})}))}function w(e){var t,a=this,r=this;"object"!==i(e)||"object"!==i(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(u.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==g&&S.call(r,{eventType:n,args:t})}})),o(t={},f,(function(e){return a.enqueue({eventType:f,args:e})})),o(t,y,(function(e){return a.enqueue({eventType:y,args:e})})),o(t,v,(function(e){return a.enqueue({eventType:v,args:e})})),o(t,T,(function(e){return a.enqueue({eventType:T,args:e})})),o(t,g,(function(e){return a.enqueue({eventType:g,args:e})})),o(t,d,(function(e){return a.enqueue({eventType:d,args:e})})),o(t,A,(function(e){return a.enqueue({eventType:A,args:e})})),o(t,b,(function(e){return a.enqueue({eventType:b,args:e})})),o(t,E,(function(e){return a.enqueue({eventType:E,args:e})})),o(t,p,(function(e){return a.enqueue({eventType:p,args:e})})),o(t,D,(function(e){return a.enqueue({eventType:D,args:e})})),o(t,h,(function(e){return a.enqueue({eventType:h,args:e})})),o(t,l,(function(n){n.config="object"===i(e)&&e.options||{},a.enqueue({eventType:l,args:n})})),n=t,c._each(n,(function(e,n){u.on(n,e)}))):c.logMessage('Analytics adapter for "'.concat(s,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return c.logMessage('Analytics adapter for "'.concat(s,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}}}]);