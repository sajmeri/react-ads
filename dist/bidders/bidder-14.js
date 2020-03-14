(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[14],{293:function(e,t,n){"use strict";function r(){return window.pbjs}n.d(t,"a",(function(){return r})),window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[],window._pbjsGlobals=window._pbjsGlobals||[],window._pbjsGlobals.push("pbjs")},294:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(277),i=n(300),a=n(286),o=n.n(a),c=n(282);var u=function(){var e=[],t={};return t.addWinningBid=function(t){var n=o()(e,(function(e){return e.getAuctionId()===t.auctionId}));n?(t.status=c.BID_STATUS.RENDERED,n.addWinningBid(t)):Object(r.logWarn)("Auction not found when adding winning bid")},t.getAllWinningBids=function(){return e.map((function(e){return e.getWinningBids()})).reduce(r.flatten,[])},t.getBidsRequested=function(){return e.map((function(e){return e.getBidRequests()})).reduce(r.flatten,[])},t.getNoBids=function(){return e.map((function(e){return e.getNoBids()})).reduce(r.flatten,[])},t.getBidsReceived=function(){return e.map((function(e){if(e.getAuctionStatus()===i.a)return e.getBidsReceived()})).reduce(r.flatten,[]).filter((function(e){return e}))},t.getAdUnits=function(){return e.map((function(e){return e.getAdUnits()})).reduce(r.flatten,[])},t.getAdUnitCodes=function(){return e.map((function(e){return e.getAdUnitCodes()})).reduce(r.flatten,[]).filter(r.uniques)},t.createAuction=function(t){var n=t.adUnits,r=t.adUnitCodes,a=t.callback,o=t.cbTimeout,c=t.labels,u=t.auctionId,d=Object(i.k)({adUnits:n,adUnitCodes:r,callback:a,cbTimeout:o,labels:c,auctionId:u});return function(t){e.push(t)}(d),d},t.findBidByAdId=function(t){return o()(e.map((function(e){return e.getBidsReceived()})).reduce(r.flatten,[]),(function(e){return e.adId===t}))},t.getStandardBidderAdServerTargeting=function(){return Object(i.j)()[c.JSON_MAPPING.ADSERVER_TARGETING]},t.setStatusForBids=function(n,r){var i=t.findBidByAdId(n);if(i&&(i.status=r),i&&r===c.BID_STATUS.BID_TARGETING_SET){var a=o()(e,(function(e){return e.getAuctionId()===i.auctionId}));a&&a.setBidTargeting(i)}},t.getLastAuctionId=function(){return e.length&&e[e.length-1].getAuctionId()},t}()},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(277),i=n(280),a=n(298),o=n(294),c=n(309),u=n(279),d=n(283),s=n.n(d);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=n(277),b=n(282),v=[],h=Object.keys(b.TARGETING_KEYS).map((function(e){return b.TARGETING_KEYS[e]})),T=function(e){return e.responseTimestamp+1e3*e.ttl+1e3>Object(r.timestamp)()},m=function(e){return e&&(e.status&&!s()([b.BID_STATUS.RENDERED],e.status)||!e.status)};function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=[],o=i.b.getConfig("sendBidsControl.dealPrioritization"),c=Object(r.groupBy)(e,"adUnitCode");return Object.keys(c).forEach((function(e){var i=[],u=Object(r.groupBy)(c[e],"bidderCode");Object.keys(u).forEach((function(e){return i.push(u[e].reduce(t))})),n>0?(i=o?i(j(!0)):i.sort((function(e,t){return t.cpm-e.cpm})),a.push.apply(a,l(i.slice(0,n)))):a.push.apply(a,l(i))})),a}function j(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,n){return void 0!==t.adUnitTargeting.hb_deal&&void 0===n.adUnitTargeting.hb_deal?-1:void 0===t.adUnitTargeting.hb_deal&&void 0!==n.adUnitTargeting.hb_deal?1:e?n.cpm-t.cpm:n.adUnitTargeting.hb_pb-t.adUnitTargeting.hb_pb}}var y=function(e){var t={},n={};function o(e,t){return e.adserverTargeting&&t&&(p.isArray(t)&&s()(t,e.adUnitCode)||"string"==typeof t&&e.adUnitCode===t)}function d(e,t){if(!0===i.b.getConfig("targetingControls.alwaysIncludeDeals")){var n=h.concat(a.a);return A(t,r.getHighestCpm).map((function(t){if(t.dealId&&o(t,e))return g({},t.adUnitCode,B(t,n.filter((function(e){return void 0!==t.adserverTargeting[e]}))))})).filter((function(e){return e}))}return[]}function y(e,t){var n=Object(r.deepClone)(e);return Object.keys(n).map((function(e){return{adUnitCode:e,adUnitTargeting:n[e]}})).sort(j()).reduce((function(e,i,a,o){var c,u=(c=i.adUnitTargeting,Object.keys(c).reduce((function(e,t){return e+"".concat(t,"%3d").concat(encodeURIComponent(c[t]),"%26")}),""));a+1===o.length&&(u=u.slice(0,-3));var d=i.adUnitCode,s=u.length;return s<=t?(t-=s,Object(r.logInfo)("AdUnit '".concat(d,"' auction keys comprised of ").concat(s," characters.  Deducted from running threshold; new limit is ").concat(t),n[d]),e[d]=n[d]):Object(r.logWarn)("The following keys for adUnitCode '".concat(d,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(s,", the current allotted amount was ").concat(t,".\n"),n[d]),a+1===o.length&&0===Object.keys(e).length&&Object(r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),e}),{})}function _(e){return e.map((function(e){return g({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return g({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))})).reduce((function(e,t){return f(t,e)}),{}))})).reduce((function(e,t){var n=Object.keys(t)[0];return e[n]=f({},e[n],t[n]),e}),{})}function C(t){return"string"==typeof t?[t]:p.isArray(t)?t:e.getAdUnitCodes()||[]}function O(){var t=e.getBidsReceived();return i.b.getConfig("useBidCache")||(t=t.filter((function(e){return n[e.adUnitCode]===e.auctionId}))),A(t=t.filter((function(e){return Object(r.deepAccess)(e,"video.context")!==u.a})).filter((function(e){return"banner"!==e.mediaType||Object(c.c)([e.width,e.height])})).filter(m).filter(T),r.getOldestHighestCpmBid)}function E(e,n){var r=t.getWinningBids(e,n),i=w();return r=r.map((function(e){return g({},e.adUnitCode,Object.keys(e.adserverTargeting).filter((function(t){return void 0===e.sendStandardTargeting||e.sendStandardTargeting||-1===i.indexOf(t)})).reduce((function(t,n){var r=[e.adserverTargeting[n]],i=g({},n.substring(0,20),r);if(n===b.TARGETING_KEYS.DEAL){var a=g({},"".concat(n,"_").concat(e.bidderCode).substring(0,20),r);return[].concat(l(t),[i,a])}return[].concat(l(t),[i])}),[]))}))}function w(){return e.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(h).filter(r.uniques)}function U(e,t,n,i){return Object.keys(t.adserverTargeting).filter(I()).forEach((function(n){e.length&&e.filter(function(e){return function(n){return n.adUnitCode===t.adUnitCode&&n.adserverTargeting[e]}}(n)).forEach(function(e){return function(n){p.isArray(n.adserverTargeting[e])||(n.adserverTargeting[e]=[n.adserverTargeting[e]]),n.adserverTargeting[e]=n.adserverTargeting[e].concat(t.adserverTargeting[e]).filter(r.uniques),delete t.adserverTargeting[e]}}(n))})),e.push(t),e}function I(){var e=w().concat(a.a);return function(t){return-1===e.indexOf(t)}}function k(e){return g({},e.adUnitCode,Object.keys(e.adserverTargeting).filter(I()).map((function(t){return g({},t.substring(0,20),[e.adserverTargeting[t]])})))}function S(e,t){return t.filter((function(t){return s()(e,t.adUnitCode)})).map((function(e){return f({},e)})).reduce(U,[]).map(k).filter((function(e){return e}))}function R(e,t){var n=h.concat(a.a),c=i.b.getConfig("sendBidsControl.bidLimit");return A(t,r.getHighestCpm,c).map((function(t){if(o(t,e))return g({},t.adUnitCode,B(t,n.filter((function(e){return void 0!==t.adserverTargeting[e]}))))})).filter((function(e){return e}))}function B(e,t){return t.map((function(t){return g({},"".concat(t,"_").concat(e.bidderCode).substring(0,20),[e.adserverTargeting[t]])}))}return t.setLatestAuctionForAdUnit=function(e,t){n[e]=t},t.resetPresetTargeting=function(t){if(Object(r.isGptPubadsDefined)()){var n=C(t),i=e.getAdUnits().filter((function(e){return s()(n,e.code)}));window.googletag.pubads().getSlots().forEach((function(e){v.forEach((function(t){i.forEach((function(n){n.code!==e.getAdUnitPath()&&n.code!==e.getSlotElementId()||e.setTargeting(t,null)}))}))}))}},t.resetPresetTargetingAST=function(e){C(e).forEach((function(e){var t=window.apntag.getTag(e);if(t&&t.keywords){var n=Object.keys(t.keywords),r={};n.forEach((function(e){s()(v,e.toLowerCase())||(r[e]=t.keywords[e])})),window.apntag.modifyTag(e,{keywords:r})}}))},t.getAllTargeting=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O(),n=C(e),a=E(n,t).concat(S(n,t)).concat(i.b.getConfig("enableSendAllBids")?R(n,t):d(n,t));a.map((function(e){Object.keys(e).map((function(t){e[t].map((function(e){-1===v.indexOf(Object.keys(e)[0])&&(v=Object.keys(e).concat(v))}))}))})),a=_(a);var o=i.b.getConfig("targetingControls.auctionKeyMaxChars");return o&&(Object(r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(o," characters.  Running checks on auction keys...")),a=y(a,o)),n.forEach((function(e){a[e]||(a[e]={})})),a},t.setTargetingForGPT=function(e,t){window.googletag.pubads().getSlots().forEach((function(n){Object.keys(e).filter(t?t(n):Object(r.isAdUnitCodeMatchingSlot)(n)).forEach((function(t){return Object.keys(e[t]).forEach((function(r){var i=e[t][r].split(",");(i=i.length>1?[i]:i).map((function(e){return p.logMessage("Attempting to set key value for slot: ".concat(n.getSlotElementId()," key: ").concat(r," value: ").concat(e)),e})).forEach((function(e){n.setTargeting(r,e)}))}))}))}))},t.getWinningBids=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O(),n=C(e);return t.filter((function(e){return s()(n,e.adUnitCode)})).filter((function(e){return e.cpm>0})).map((function(e){return e.adUnitCode})).filter(r.uniques).map((function(e){return t.filter((function(t){return t.adUnitCode===e?t:null})).reduce(r.getHighestCpm)}))},t.setTargetingForAst=function(e){var n=t.getAllTargeting(e);try{t.resetPresetTargetingAST(e)}catch(e){p.logError("unable to reset targeting for AST"+e)}Object.keys(n).forEach((function(e){return Object.keys(n[e]).forEach((function(t){if(p.logMessage("Attempting to set targeting for targetId: ".concat(e," key: ").concat(t," value: ").concat(n[e][t])),p.isStr(n[e][t])||p.isArray(n[e][t])){var r={};t.search(/pt[0-9]/)<0?r[t.toUpperCase()]=n[e][t]:r[t]=n[e][t],window.apntag.setKeywords(e,r,{overrideKeyValue:!0})}}))}))},t.isApntagDefined=function(){if(window.apntag&&p.isFn(window.apntag.setKeywords))return!0},t}(o.a)},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(293),i=n(277),a=Object(r.a)();function o(e,t){a.adServers=a.adServers||{},a.adServers[e]=a.adServers[e]||{},Object.keys(t).forEach((function(n){a.adServers[e][n]?Object(i.logWarn)("Attempting to add an already registered function property ".concat(n," for AdServer ").concat(e,".")):a.adServers[e][n]=t[n]}))}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"adpodUtils",(function(){return l})),n.d(t,"buildDfpVideoUrl",(function(){return p})),n.d(t,"notifyTranslationModule",(function(){return b})),n.d(t,"buildAdpodVideoUrl",(function(){return v}));var r=n(319),i=n(301),a=n(288),o=n(277),c=n(280),u=n(291),d=n(294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g={env:"vp",gdfp_req:1,output:"xml_vast3",unviewed_position_start:1},l={};function p(e){if(e.params||e.url){var t=e.adUnit,n=e.bid||i.a.getWinningBids(t.code)[0],r={};if(e.url&&(r=Object(a.c)(e.url,{noDecodeWholeURL:!0}),Object(o.isEmpty)(e.params)))return function(e,t,n){var r=h(t,e,"search");r&&(e.search.description_url=r);var i=T(t,n);return e.search.cust_params=e.search.cust_params?e.search.cust_params+"%26"+i:i,Object(a.a)(e)}(r,n,e);var c={correlator:Date.now(),sz:Object(o.parseSizesInput)(t.sizes).join("|"),url:encodeURIComponent(location.href)},u=T(n,e),d=f({},g,r.search,c,e.params,{cust_params:u}),s=h(n,e,"params");return s&&(d.description_url=s),Object(a.a)({protocol:"https",host:"securepubads.g.doubleclick.net",pathname:"/gampad/ads",search:d})}Object(o.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl")}function b(e){e.call(this,"dfp")}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.code,n=e.params,r=e.callback;if(n&&r){var i={correlator:Date.now(),sz:c(t),url:encodeURIComponent(location.href)};l.getTargeting({codes:[t],callback:u})}else Object(o.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl");function c(e){var t=d.a.getAdUnits().filter((function(t){return t.code===e})),n=Object(o.deepAccess)(t[0],"mediaTypes.video.playerSize");return Object(o.parseSizesInput)(n).join("|")}function u(e,o){var c;if(e)r(e,null);else{var u=(s(c={},l.TARGETING_KEY_PB_CAT_DUR,void 0),s(c,l.TARGETING_KEY_CACHE_ID,void 0),c),d={};o[t]&&(d=o[t].reduce((function(e,t){return Object.keys(t)[0]===l.TARGETING_KEY_PB_CAT_DUR?e[l.TARGETING_KEY_PB_CAT_DUR]=void 0!==e[l.TARGETING_KEY_PB_CAT_DUR]?e[l.TARGETING_KEY_PB_CAT_DUR]+","+t[l.TARGETING_KEY_PB_CAT_DUR]:t[l.TARGETING_KEY_PB_CAT_DUR]:Object.keys(t)[0]===l.TARGETING_KEY_CACHE_ID&&(e[l.TARGETING_KEY_CACHE_ID]=t[l.TARGETING_KEY_CACHE_ID]),e}),u));var p=encodeURIComponent(Object(a.b)(d)),b=f({},g,i,n,{cust_params:p}),v=Object(a.a)({protocol:"https",host:"securepubads.g.doubleclick.net",pathname:"/gampad/ads",search:b});r(null,v)}}}function h(e,t,n){if(!c.b.getConfig("cache.url"))if(Object(o.deepAccess)(t,"".concat(n,".description_url")))Object(o.logError)("input cannnot contain description_url");else{var r=e&&e.vastUrl;if(r)return encodeURIComponent(r)}}function T(e,t){var n=e&&e.adserverTargeting||{},r={},c=t&&t.adUnit;if(c){var u=i.a.getAllTargeting(c.code);r=u?u[c.code]:{}}var d=Object(o.deepAccess)(t,"params.cust_params"),s=f({},{hb_uuid:e&&e.videoCacheKey},{hb_cache_id:e&&e.videoCacheKey},r,n,d);return encodeURIComponent(Object(a.b)(s))}Object(u.a)("registerAdserver").before(b),Object(r.a)("dfp",{buildVideoUrl:p,buildAdpodVideoUrl:v,getAdpodTargeting:function(e){return l.getTargeting(e)}}),Object(u.e)("adpod",l)}}]);