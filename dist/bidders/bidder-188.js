(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[188],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"spec",(function(){return E}));var r=n(278),i=n(277),a=n(280),o=n(288),d=n(279),c=n(310);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=0,p=1,l=2,m="client_timeout",f="client_bid_won",g=Object(c.b)(),b={};function y(){try{return window.top.document.referrer}catch(e){return document.referrer}}function h(e){return u({domain:(e=e||{}).domain||b.urlData.domain,page:e.page||b.urlData.page,ref:e.ref||y(),isTop:e.isTop||b.urlData.isTop},function(){if(b.pageMeta)return b.pageMeta;var e=v('link[rel="canonical"]',"href"),t=v('meta[property="og:url"]',"content"),n=v('meta[name="twitter:url"]',"content");return b.pageMeta=u({},e&&{canonical_url:e},t&&{og_url:t},n&&{twitter_url:n}),b.pageMeta}())}function v(e,t){var n,r,a=function(e,t){try{var n=i.getWindowTop().document.querySelector(e);if(null!==n&&n[t])return n[t]}catch(e){}}(e,t);return a&&(n=a,(r=i.getWindowTop().document.createElement("a")).href=n,r.href)}function w(e,t){return e.filter((function(e){return e.type===t}))}function x(e){return{w:parseInt(e[0],10),h:parseInt(e[1],10)}}function _(e){var t,n={id:e.bidId,ext:{dfp_id:e.adUnitCode,display_count:e.bidRequestsCount},all:e.params},r=i.deepAccess(e,"mediaTypes.banner.sizes")||e.sizes||[];if(r.length>0&&(n.banner=(t=r,i.isArray(t)&&2===t.length&&!i.isArray(t[0])?[x(t)]:t.map((function(e){return x(e)})))),e.nativeParams)try{n.native=JSON.stringify(e.nativeParams)}catch(e){i.logError("".concat("medianet"," : Incorrect JSON : bidRequest.nativeParams"))}e.params.crid&&(n.tagid=e.params.crid.toString());var a=parseFloat(e.params.bidfloor);a&&(n.bidfloor=a);var o=function(e){var t=document.getElementById(e);if(t&&t.getBoundingClientRect){var n=t.getBoundingClientRect(),r={};return r.top_left={y:n.top,x:n.left},r.bottom_right={y:n.bottom,x:n.right},r}return null}(e.adUnitCode);if(o&&n.banner&&0!==n.banner.length){var d=function(e){return{top_left:{x:e.top_left.x+window.pageXOffset,y:e.top_left.y+window.pageYOffset},bottom_right:{x:e.bottom_right.x+window.pageXOffset,y:e.bottom_right.y+window.pageYOffset}}}(o);n.ext.coordinates=d,n.ext.viewability=O(o.top_left,T(n.banner)),O(d.top_left,T(n.banner))>.5?n.ext.visibility=p:n.ext.visibility=l}else n.ext.visibility=s;return n}function T(e){return e.reduce((function(e,t){return t.h*t.w<e.h*e.w?t:e}))}function O(e,t){var n=t.w*t.h,r=E.getWindowSize(),i={x:e.x+t.w,y:e.y+t.h};return 0===n||-1===r.w||-1===r.h?0:function(e,t,n,r){if(e.x>r.x||t.x<n.x||e.y>r.y||t.y<n.y)return 0;return(Math.min(t.x,r.x)-Math.max(e.x,n.x))*(Math.min(t.y,r.y)-Math.max(e.y,n.y))}(e,i,{x:0,y:0},{x:r.w,y:r.h})/n}function S(e,t){t=i.isArray(t)&&t||[];var n={logid:"kfk",evtid:"projectevents",project:"prebid"};return n.acid=i.deepAccess(t,"0.auctionId")||"",n.cid=pbjs.medianetGlobals.cid||"",n.crid=t.map((function(e){return i.deepAccess(e,"params.0.crid")||e.adUnitCode})).join("|"),n.adunit_count=t.length||0,n.dn=b.urlData.domain||"",n.requrl=b.urlData.page||"",n.istop=b.urlData.isTop||"",n.event=e.name||"",n.value=e.value||"",n.rd=e.related_data||"",n}function j(e,t){var n={protocol:"https",hostname:"qsearch-a.akamaihd.net/log",search:S(e,t)};i.triggerPixel(o.a(n))}b.urlData={domain:o.c(g.referer).host,page:g.referer,isTop:g.reachedTop},pbjs.medianetGlobals={};var E={code:"medianet",supportedMediaTypes:[d.b,d.c],isBidRequestValid:function(e){return e.params?e.params.cid&&i.isStr(e.params.cid)&&!i.isEmptyStr(e.params.cid)?(u(pbjs.medianetGlobals,!pbjs.medianetGlobals.cid&&{cid:e.params.cid}),!0):(i.logError("".concat("medianet"," : cid should be a string")),!1):(i.logError("".concat("medianet"," : Missing bid parameters")),!1)},buildRequests:function(e,t){var n=function(e,t){return{site:h(e[0].params.site),ext:(n=e[0].params,r=t.gdprConsent,i=t.uspConsent,o=e[0].userId,d=E.getWindowSize(),c=!(!r||!r.gdprApplies),s=!!i,u({},{customer_id:n.cid},{prebid_version:pbjs.version},{gdpr_applies:c},c&&{gdpr_consent_string:r.consentString||""},{usp_applies:s},s&&{usp_consent_string:i||""},-1!==d.w&&-1!==d.h&&{screen:d},o&&{user_id:o})),id:e[0].auctionId,imp:e.map((function(e){return _(e)})),tmax:t.timeout||a.b.getConfig("bidderTimeout")};var n,r,i,o,d,c,s}(e,t);return{method:"POST",url:"https://prebid.media.net/rtb/prebid",data:JSON.stringify(n)}},interpretResponse:function(e,t){var n=[];if(!e||!e.body)return i.logInfo("".concat("medianet"," : response is empty")),n;var r=e.body.bidList;return i.isArray(r)&&0!==r.length?n=r.filter((function(e){return function(e){return!1===e.no_bid&&parseFloat(e.cpm)>0}(e)})):(i.logInfo("".concat("medianet"," : no bids")),n)},getUserSyncs:function(e,t){var n,r=(n=t,!i.isEmpty(n)&&n[0].body&&n[0].body.ext&&i.isArray(n[0].body.ext.csUrl)?n[0].body.ext.csUrl:[]);return e.iframeEnabled?w(r,"iframe"):e.pixelEnabled?w(r,"image"):void 0},onTimeout:function(e){try{j({name:m,value:e.length,related_data:e[0].timeout||a.b.getConfig("bidderTimeout")},e)}catch(e){}},onBidWon:function(e){try{j({name:f,value:e.cpm},[e])}catch(e){}},clearMnData:function(){b={}},getWindowSize:function(){return{w:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||-1,h:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||-1}}};Object(r.registerBidder)(E)}}]);