(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[2],{284:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(283),i=n.n(r),o=n(277),d={},a=["criteo","outstream","adagio","browsi"];function c(e,t,n){if(t&&e){if(i()(a,t))return d[e]?(n&&"function"==typeof n&&(d[e].loaded?n():d[e].callbacks.push(n)),d[e].tag):(d[e]={loaded:!1,tag:null,callbacks:[]},n&&"function"==typeof n&&d[e].callbacks.push(n),o.logWarn("module ".concat(t," is loading external JavaScript")),function(t,n){var r=document.createElement("script");r.type="text/javascript",r.async=!0,d[e].tag=r,r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,n())}:r.onload=function(){n()};return r.src=t,o.insertElement(r),r}(e,(function(){d[e].loaded=!0;try{for(var t=0;t<d[e].callbacks.length;t++)d[e].callbacks[t]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));o.logError("".concat(t," not whitelisted for loading external JavaScript"))}else o.logError("cannot load external script without url and moduleCode")}},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(284),i=n(277),o=n(286),d=n.n(o);function a(e){var t=this,n=e.url,o=e.config,a=e.id,c=e.callback,u=e.loaded,s=e.adUnitCode;this.url=n,this.config=o,this.handlers={},this.id=a,this.loaded=u,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):i.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=c||function(){t.loaded=!0,t.process()},!function(e){var t=pbjs.adUnits,n=d()(t,(function(t){return t.code===e}));return!!(n&&n.renderer&&n.renderer.url&&n.renderer.render)}(s)?Object(r.a)(n,"outstream",this.callback):i.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(s))}function c(e){return!(!e||!e.url)}function u(e,t){e.render(t)}a.install=function(e){return new a({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},a.prototype.getConfig=function(){return this.config},a.prototype.setRender=function(e){this.render=e},a.prototype.setEventHandlers=function(e){this.handlers=e},a.prototype.handleVideoEvent=function(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),i.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(n))},a.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){i.logError("Error processing Renderer command: ",e)}}},300:function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return N})),n.d(t,"k",(function(){return O})),n.d(t,"c",(function(){return _})),n.d(t,"e",(function(){return D})),n.d(t,"g",(function(){return B})),n.d(t,"d",(function(){return G})),n.d(t,"f",(function(){return P})),n.d(t,"i",(function(){return k})),n.d(t,"h",(function(){return w})),n.d(t,"j",(function(){return M}));var r=n(277),i=n(288),o=n(325),d=n(298),a=n(355),c=n(287),u=n(280),s=n(315),l=n(291),f=n(286),p=n.n(f),b=n(316),g=n(279);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=s.a.syncUsers,S=n(277),h=n(290).default,A=n(289),y=n(282),E="inProgress",N="completed";A.on(y.EVENTS.BID_ADJUSTMENT,(function(e){!function(e){var t,n=e.bidderCode,r=e.cpm;if(pbjs.bidderSettings&&(n&&pbjs.bidderSettings[n]&&"function"==typeof pbjs.bidderSettings[n].bidCpmAdjustment?t=pbjs.bidderSettings[n].bidCpmAdjustment:pbjs.bidderSettings[y.JSON_MAPPING.BD_SETTING_STANDARD]&&"function"==typeof pbjs.bidderSettings[y.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment&&(t=pbjs.bidderSettings[y.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),t))try{r=t(e.cpm,m({},e))}catch(e){S.logError("Error during bid adjustment","bidmanager.js",e)}r>=0&&(e.cpm=r)}(e)}));var I={},C={},R=[];function O(e){var t,n,i,d,a=e.adUnits,s=e.adUnitCodes,l=e.callback,f=e.cbTimeout,g=e.labels,O=e.auctionId,B=a,k=g,w=s,M=[],q=[],V=[],x=O||S.generateUUID(),H=l,K=f,W=[],L=new Set;function Y(){return{auctionId:x,timestamp:t,auctionEnd:n,auctionStatus:i,adUnits:B,adUnitCodes:w,labels:k,bidderRequests:M,noBids:V,bidsReceived:q,winningBids:W,timeout:K}}function F(e,t){if(t&&clearTimeout(d),void 0===n){var o=[];e&&(S.logMessage("Auction ".concat(x," timedOut")),c=L,(o=M.map((function(e){return(e.bids||[]).filter((function(e){return!c.has(e.bidder)}))})).reduce(r.flatten,[]).map((function(e){return{bidId:e.bidId,bidder:e.bidder,adUnitCode:e.adUnitCode,auctionId:e.auctionId}}))).length&&A.emit(y.EVENTS.BID_TIMEOUT,o)),i=N,n=Date.now(),A.emit(y.EVENTS.AUCTION_END,Y()),U(B,(function(){try{if(null!=H){var t=w,n=q.filter(S.bind.call(r.adUnitsFilter,this,t)).reduce(J,{});H.apply(pbjs,[n,e,x]),H=null}}catch(e){S.logError("Error executing bidsBackHandler",null,e)}finally{o.length&&h.callTimedOutBidders(a,o,K);var i=u.b.getConfig("userSync")||{};i.enableOverride||v(i.syncDelay)}}))}var c}function z(){S.logInfo("Bids Received for Auction with id: ".concat(x),q),i=N,F(!1,!0)}function X(e){L.add(e)}function Z(e){var t=this;e.forEach((function(e){var t;t=e,M=M.concat(t)}));var n={},a={bidRequests:e,run:function(){var a,f;a=F.bind(null,!0),f=setTimeout(a,K),d=f,i=E,A.emit(y.EVENTS.AUCTION_INIT,Y());var g=function(e,t){var n=0,i=!1,d=new Set,a={};function s(){n--,i&&0===n&&e()}return{addBidResponse:function(e,i){a[i.requestId]=!0,n++;var d=function(e){var t=e.adUnitCode,n=e.bid,i=e.bidderRequest,d=e.auctionId,a=i.start,s=m({},n,{auctionId:d,responseTimestamp:Object(r.timestamp)(),requestTimestamp:a,cpm:parseFloat(n.cpm)||0,bidder:n.bidderCode,adUnitCode:t});s.timeToRespond=s.responseTimestamp-s.requestTimestamp,A.emit(y.EVENTS.BID_ADJUSTMENT,s);var l=i.bids&&p()(i.bids,(function(e){return e.adUnitCode==t})),f=l&&l.renderer;f&&f.url&&(s.renderer=c.a.install({url:f.url}),s.renderer.setRender(f.render));var b=j(n.mediaType,l,u.b.getConfig("mediaTypePriceGranularity")),g=Object(o.a)(s.cpm,"object"===T(b)?b:u.b.getConfig("customPriceBucket"),u.b.getConfig("currency.granularityMultiplier"));return s.pbLg=g.low,s.pbMg=g.med,s.pbHg=g.high,s.pbAg=g.auto,s.pbDg=g.dense,s.pbCg=g.custom,s}({adUnitCode:e,bid:i,bidderRequest:this,auctionId:t.getAuctionId()});"video"===d.mediaType?function(e,t,n,i){var o=!0,d=Object(r.getBidRequest)(t.requestId,[n]),a=d&&Object(r.deepAccess)(d,"mediaTypes.video"),c=a&&Object(r.deepAccess)(a,"context");u.b.getConfig("cache.url")&&c!==b.b&&(t.videoCacheKey?t.vastUrl||(S.logError("videoCacheKey specified but not required vastUrl for video bid"),o=!1):(o=!1,P(e,t,i,d)));o&&(G(e,t),i())}(t,d,this,s):(G(t,d),s())},adapterDone:function(){d.add(this),i=t.getBidRequests().every((function(e){return d.has(e)})),this.bids.forEach((function(e){a[e.bidId]||(t.addNoBid(e),A.emit(y.EVENTS.NO_BID,e))})),i&&0===n&&e()}}}(z,t);h.callBids(B,e,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];_.apply({dispatch:g.addBidResponse,bidderRequest:this},t)}),g.adapterDone,{request:function(e,t){l(I,t),l(n,e),C[e]||(C[e]={SRA:!0,origin:t}),n[e]>1&&(C[e].SRA=!1)},done:function(e){I[e]--,R[0]&&s(R[0])&&R.shift()}},K,X)}};function s(e){var t=!0,n=u.b.getConfig("maxRequestsPerOrigin")||4;return e.bidRequests.some((function(e){var r=1,i=void 0!==e.src&&e.src===y.S2S.SRC?"s2s":e.bidderCode;return C[i]&&(!1===C[i].SRA&&(r=Math.min(e.bids.length,n)),I[C[i].origin]+r>n&&(t=!1)),!t})),t&&e.run(),t}function l(e,t){void 0===e[t]?e[t]=1:e[t]++}s(a)||(S.logWarn("queueing auction due to limited endpoint capacity"),R.push(a))}return{addBidReceived:function(e){q=q.concat(e)},addNoBid:function(e){V=V.concat(e)},executeCallback:F,callBids:function(){i="started",t=Date.now();var e=h.makeBidRequests(B,t,x,K,k);S.logInfo("Bids Requested for Auction with id: ".concat(x),e),e.length<1?(S.logWarn("No valid bid requests returned for auction"),z()):D.call({dispatch:Z,context:this},e)},addWinningBid:function(e){W=W.concat(e),h.callBidWonBidder(e.bidder,e,a)},setBidTargeting:function(e){h.callSetTargetingBidder(e.bidder,e)},getWinningBids:function(){return W},getTimeout:function(){return K},getAuctionId:function(){return x},getAuctionStatus:function(){return i},getAdUnits:function(){return B},getAdUnitCodes:function(){return w},getBidRequests:function(){return M},getBidsReceived:function(){return q},getNoBids:function(){return V}}}var _=Object(l.b)("async",(function(e,t){this.dispatch.call(this.bidderRequest,e,t)}),"addBidResponse"),D=Object(l.b)("sync",(function(e){this.dispatch.call(this.context,e)}),"addBidderRequests"),U=Object(l.b)("async",(function(e,t){t&&t()}),"bidsBackCallback");function B(e,t){t.timeToRespond>e.getTimeout()+u.b.getConfig("timeoutBuffer")&&e.executeCallback(!0)}function G(e,t){var n=e.getBidRequests(),r=p()(n,(function(e){return e.bidderCode===t.bidderCode}));!function(e,t){var n;if(e.bidderCode&&(e.cpm>0||e.dealId)){var r=p()(t.bids,(function(t){return t.adUnitCode===e.adUnitCode}));n=function(e,t,n){if(!t)return{};var r={},i=pbjs.bidderSettings;if(i){var o=M(t.mediaType,e,n);q(r,o,t),e&&i[e]&&i[e][y.JSON_MAPPING.ADSERVER_TARGETING]&&(q(r,i[e],t),t.sendStandardTargeting=i[e].sendStandardTargeting)}t.native&&(r=m({},r,Object(d.d)(t,n)));return r}(e.bidderCode,e,r)}e.adserverTargeting=m(e.adserverTargeting||{},n)}(t,r),A.emit(y.EVENTS.BID_RESPONSE,t),e.addBidReceived(t),B(e,t)}var P=Object(l.b)("async",(function(e,t,n,r){Object(a.b)([t],(function(r,i){r?(S.logWarn("Failed to save to the video cache: ".concat(r,". Video bid must be discarded.")),B(e,t)):""===i[0].uuid?(S.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."),B(e,t)):(t.videoCacheKey=i[0].uuid,t.vastUrl||(t.vastUrl=Object(a.a)(t.videoCacheKey)),G(e,t),n())}))}),"callPrebidCache");function j(e,t,n){if(e&&n){if(e===g.d){var i=Object(r.deepAccess)(t,"mediaTypes.".concat(g.d,".context"),"instream");if(n["".concat(g.d,"-").concat(i)])return n["".concat(g.d,"-").concat(i)]}return n[e]}}var k=function(e,t){var n=j(e,t,u.b.getConfig("mediaTypePriceGranularity"));return"string"==typeof e&&n?"string"==typeof n?n:"custom":u.b.getConfig("priceGranularity")},w=function(e){return function(t){return e===y.GRANULARITY_OPTIONS.AUTO?t.pbAg:e===y.GRANULARITY_OPTIONS.DENSE?t.pbDg:e===y.GRANULARITY_OPTIONS.LOW?t.pbLg:e===y.GRANULARITY_OPTIONS.MEDIUM?t.pbMg:e===y.GRANULARITY_OPTIONS.HIGH?t.pbHg:e===y.GRANULARITY_OPTIONS.CUSTOM?t.pbCg:void 0}};function M(e,t,n){function o(e,t){return{key:e,val:"function"==typeof t?function(e){return t(e)}:function(e){return Object(r.getValue)(e,t)}}}var d=y.TARGETING_KEYS,a=k(e,n),c=pbjs.bidderSettings;if(c[y.JSON_MAPPING.BD_SETTING_STANDARD]||(c[y.JSON_MAPPING.BD_SETTING_STANDARD]={}),c[y.JSON_MAPPING.BD_SETTING_STANDARD][y.JSON_MAPPING.ADSERVER_TARGETING]||(c[y.JSON_MAPPING.BD_SETTING_STANDARD][y.JSON_MAPPING.ADSERVER_TARGETING]=[o(d.BIDDER,"bidderCode"),o(d.AD_ID,"adId"),o(d.PRICE_BUCKET,w(a)),o(d.SIZE,"size"),o(d.DEAL,"dealId"),o(d.SOURCE,"source"),o(d.FORMAT,"mediaType")]),"video"===e){var s=c[y.JSON_MAPPING.BD_SETTING_STANDARD][y.JSON_MAPPING.ADSERVER_TARGETING];if([d.UUID,d.CACHE_ID].forEach((function(e){void 0===p()(s,(function(t){return t.key===e}))&&s.push(o(e,"videoCacheKey"))})),u.b.getConfig("cache.url")&&(!t||!1!==S.deepAccess(c,"".concat(t,".sendStandardTargeting")))){var l=Object(i.c)(u.b.getConfig("cache.url"));void 0===p()(s,(function(e){return e.key===d.CACHE_HOST}))&&s.push(o(d.CACHE_HOST,(function(e){return S.deepAccess(e,"adserverTargeting.".concat(d.CACHE_HOST))?e.adserverTargeting[d.CACHE_HOST]:l.hostname})))}}return c[y.JSON_MAPPING.BD_SETTING_STANDARD]}function q(e,t,n){var r=t[y.JSON_MAPPING.ADSERVER_TARGETING];return n.size=n.getSize(),S._each(r,(function(r){var i=r.key,o=r.val;if(e[i]&&S.logWarn("The key: "+i+" is getting ovewritten"),S.isFn(o))try{o=o(n)}catch(e){S.logError("bidmanager","ERROR",e)}(void 0===t.suppressEmptyKeys||!0!==t.suppressEmptyKeys)&&i!==y.TARGETING_KEYS.DEAL||!S.isEmptyStr(o)&&null!=o?e[i]=o:S.logInfo("suppressing empty key '"+i+"' from adserver targeting")})),e}function J(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode].bids.push(t),e}},355:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return a}));var r=n(281),i=n(280);function o(e){var t,n,r,o={type:"xml",value:e.vastXml?e.vastXml:(t=e.vastUrl,n=e.vastImpUrl,r=n?"<![CDATA[".concat(n,"]]>"):"",'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t,"]]></VASTAdTagURI>\n        <Impression>").concat(r,"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),ttlseconds:Number(e.ttl)};return i.b.getConfig("cache.vasttrack")&&(o.bidder=e.bidder,o.bidid=e.requestId),"string"==typeof e.customCacheKey&&""!==e.customCacheKey&&(o.key=e.customCacheKey),o}function d(e,t){var n={puts:e.map(o)};Object(r.a)(i.b.getConfig("cache.url"),function(e){return{success:function(t){var n;try{n=JSON.parse(t).responses}catch(t){return void e(t,[])}n?e(null,n):e(new Error("The cache server didn't respond with a responses property."),[])},error:function(t,n){e(new Error("Error storing video ad in the cache: ".concat(t,": ").concat(JSON.stringify(n))),[])}}}(t),JSON.stringify(n),{contentType:"text/plain",withCredentials:!0})}function a(e){return"".concat(i.b.getConfig("cache.url"),"?uuid=").concat(e)}}}]);