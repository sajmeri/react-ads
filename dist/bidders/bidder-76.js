(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[76],{137:function(t,e,n){"use strict";n.r(e),n.d(e,"BID_WON_TIMEOUT",(function(){return d}));var i=n(277),a=n(281),o=n(285),r=n(282),s=n(290);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var c,d=500,p={auctions:{},bidAdUnits:{}},f=u(Object(o.a)({EMPTYURL:"",ANALYTICSTYPE:"endpoint"}),{track:function(t){var e=t.eventType,n=t.args,a=i.timestamp();switch(i.logInfo("LIVEWRAPPED_EVENT:",[e,n]),e){case r.EVENTS.AUCTION_INIT:i.logInfo("LIVEWRAPPED_AUCTION_INIT:",n),p.auctions[n.auctionId]={bids:{}};break;case r.EVENTS.BID_REQUESTED:i.logInfo("LIVEWRAPPED_BID_REQUESTED:",n),p.auctions[n.auctionId].timeStamp=n.start,n.bids.forEach((function(t){p.auctions[n.auctionId].bids[t.bidId]={bidder:t.bidder,adUnit:t.adUnitCode,isBid:!1,won:!1,timeout:!1,sendStatus:0,readyToSend:0,start:n.start},i.logInfo(t)})),i.logInfo(f.requestEvents);break;case r.EVENTS.BID_RESPONSE:i.logInfo("LIVEWRAPPED_BID_RESPONSE:",n);var o=p.auctions[n.auctionId].bids[n.requestId];o.isBid=n.getStatusCode()===r.STATUS.GOOD,o.width=n.width,o.height=n.height,o.cpm=n.cpm,o.ttr=n.timeToRespond,o.readyToSend=1,o.mediaType="native"==n.mediaType?2:1,o.ttr||(o.ttr=a-o.start),p.bidAdUnits[o.adUnit]||(p.bidAdUnits[o.adUnit]={sent:0,timeStamp:p.auctions[n.auctionId].timeStamp});break;case r.EVENTS.BIDDER_DONE:i.logInfo("LIVEWRAPPED_BIDDER_DONE:",n),n.bids.forEach((function(t){var e=p.auctions[t.auctionId].bids[t.bidId||t.requestId];e.ttr||(e.ttr=a-e.start),e.readyToSend=1}));break;case r.EVENTS.BID_WON:i.logInfo("LIVEWRAPPED_BID_WON:",n);var s=p.auctions[n.auctionId].bids[n.requestId];s.won=!0,0!=s.sendStatus&&f.sendEvents();break;case r.EVENTS.BID_TIMEOUT:i.logInfo("LIVEWRAPPED_BID_TIMEOUT:",n),n.forEach((function(t){p.auctions[t.auctionId].bids[t.bidId].timeout=!0}));break;case r.EVENTS.AUCTION_END:i.logInfo("LIVEWRAPPED_AUCTION_END:",n),setTimeout((function(){f.sendEvents()}),d)}}});function E(){try{return i.getWindowTop().I12C&&1===i.getWindowTop().I12C.Morph}catch(t){}}function l(){var t=[];return Object.keys(p.auctions).forEach((function(e){Object.keys(p.auctions[e].bids).forEach((function(n){var i=p.auctions[e],a=i.bids[n];1&a.sendStatus||(a.sendStatus|=1,t.push({timeStamp:i.timeStamp,adUnit:a.adUnit,bidder:a.bidder}))}))})),t}function b(){var t=[];return Object.keys(p.auctions).forEach((function(e){Object.keys(p.auctions[e].bids).forEach((function(n){var i=p.auctions[e],a=i.bids[n];!a.readyToSend||2&a.sendStatus||a.timeout||(a.sendStatus|=2,t.push({timeStamp:i.timeStamp,adUnit:a.adUnit,bidder:a.bidder,width:a.width,height:a.height,cpm:a.cpm,ttr:a.ttr,IsBid:a.isBid,mediaType:a.mediaType}))}))})),t}function y(){var t=[];return Object.keys(p.auctions).forEach((function(e){Object.keys(p.auctions[e].bids).forEach((function(n){var i=p.auctions[e],a=i.bids[n];4&a.sendStatus||!a.won||(a.sendStatus|=4,t.push({timeStamp:i.timeStamp,adUnit:a.adUnit,bidder:a.bidder,width:a.width,height:a.height,cpm:a.cpm,mediaType:a.mediaType}))}))})),t}function T(){var t=[];return Object.keys(p.auctions).forEach((function(e){Object.keys(p.auctions[e].bids).forEach((function(n){var i=p.auctions[e],a=i.bids[n];8&a.sendStatus||!a.timeout||(a.sendStatus|=8,t.push({bidder:a.bidder,adUnit:a.adUnit,timeStamp:i.timeStamp}))}))})),t}function I(){var t=[];return Object.keys(p.bidAdUnits).forEach((function(e){var n=p.bidAdUnits[e];n.sent||(n.sent=1,t.push({adUnit:e,timeStamp:n.timeStamp}))})),t}f.originEnableAnalytics=f.enableAnalytics,f.allRequestEvents=[],f.enableAnalytics=function(t){c=t.options,f.originEnableAnalytics(t)},f.sendEvents=function(){var t={publisherId:c.publisherId,requests:l(),responses:b(),wins:y(),timeouts:T(),bidAdUnits:I(),rcv:E()};0==t.requests.length&&0==t.responses.length&&0==t.wins.length&&0==t.timeouts.length||Object(a.a)(c.endpoint||"https://lwadm.com/analytics/10",void 0,JSON.stringify(t),{method:"POST"})},s.default.registerAnalyticsAdapter({adapter:f,code:"livewrapped"}),e.default=f},285:function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var i=n(282),a=n(281);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=n(289),u=n(277),c=i.EVENTS,d=c.AUCTION_INIT,p=c.AUCTION_END,f=c.REQUEST_BIDS,E=c.BID_REQUESTED,l=c.BID_TIMEOUT,b=c.BID_RESPONSE,y=c.NO_BID,T=c.BID_WON,I=c.BID_ADJUSTMENT,g=c.BIDDER_DONE,h=c.SET_TARGETING,v=c.AD_RENDER_FAILED,m=c.ADD_AD_UNITS;function S(t){var e,n=t.url,i=t.analyticsType,c=t.global,S=t.handler,D=[],A=0,_=!0;return function(){if(_){for(var t=0;t<D.length;t++)D[t]();D.push=function(t){t()},_=!1}u.logMessage("event count sent to ".concat(c,": ").concat(A))}(),{track:function(t){var e=t.eventType,n=t.args;"bundle"===this.getAdapterType()&&window[c](S,e,n);"endpoint"===this.getAdapterType()&&O.apply(void 0,arguments)},enqueue:N,enableAnalytics:U,disableAnalytics:function(){u._each(e,(function(t,e){s.off(e,t)})),this.enableAnalytics=this._oldEnable?this._oldEnable:U},getAdapterType:function(){return i},getGlobal:function(){return c},getHandler:function(){return S},getUrl:function(){return n}};function O(t){var e=t.eventType,i=t.args,o=t.callback;Object(a.a)(n,o,JSON.stringify({eventType:e,args:i}))}function N(t){var e=t.eventType,n=t.args,i=this;c&&window[c]&&e&&n?this.track({eventType:e,args:n}):D.push((function(){A++,i.track({eventType:e,args:n})}))}function U(t){var n,i=this,a=this;"object"!==r(t)||"object"!==r(t.options)||(void 0===t.options.sampling||Math.random()<parseFloat(t.options.sampling))?(s.getEvents().forEach((function(t){if(t){var e=t.eventType,n=t.args;e!==l&&N.call(a,{eventType:e,args:n})}})),o(n={},f,(function(t){return i.enqueue({eventType:f,args:t})})),o(n,E,(function(t){return i.enqueue({eventType:E,args:t})})),o(n,b,(function(t){return i.enqueue({eventType:b,args:t})})),o(n,y,(function(t){return i.enqueue({eventType:y,args:t})})),o(n,l,(function(t){return i.enqueue({eventType:l,args:t})})),o(n,T,(function(t){return i.enqueue({eventType:T,args:t})})),o(n,I,(function(t){return i.enqueue({eventType:I,args:t})})),o(n,g,(function(t){return i.enqueue({eventType:g,args:t})})),o(n,h,(function(t){return i.enqueue({eventType:h,args:t})})),o(n,p,(function(t){return i.enqueue({eventType:p,args:t})})),o(n,v,(function(t){return i.enqueue({eventType:v,args:t})})),o(n,m,(function(t){return i.enqueue({eventType:m,args:t})})),o(n,d,(function(e){e.config="object"===r(t)&&t.options||{},i.enqueue({eventType:d,args:e})})),e=n,u._each(e,(function(t,e){s.on(e,t)}))):u.logMessage('Analytics adapter for "'.concat(c,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return u.logMessage('Analytics adapter for "'.concat(c,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}}}]);