(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[243],{224:function(e,r,t){"use strict";t.r(r),t.d(r,"_getUrlVars",(function(){return c})),t.d(r,"spec",(function(){return d}));var n=t(277),a=t(278);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=["USD","JPY"];function s(e){var r=window.encodeURIComponent(e);return r=r.replace(/'/g,"%27")}function c(e){for(var r,t={},n=e.slice(e.indexOf("?")+1).split("&"),a=0;a<n.length;a++)t[(r=n[a].split("="))[0]]=r[1];return t}var d={code:"smms",supportedMediaTypes:["banner","native"],isBidRequestValid:function(e){var r=!!e.params.placementId;return r&&e.params.hasOwnProperty("currency")&&-1===o.indexOf(e.params.currency)&&(n.logError("Invalid currency type, we support only JPY and USD!"),r=!1),r},buildRequests:function(e,r){var t,a=[];r&&r.refererInfo&&(t=r.refererInfo);var o="undefined"!=typeof geparams&&"object"==("undefined"==typeof geparams?"undefined":i(geparams))&&geparams?geparams:{};return e.forEach((function(e,r){var i="https://bidder.mediams.mb.softbank.jp/api/v1/prebid/banner",c={placementid:e.params.placementId,cur:e.params.hasOwnProperty("currency")?e.params.currency:"JPY",ua:navigator.userAgent,adtk:s(o.lat?"0":"1"),loc:t&&t.referer?t.referer:"",topframe:window.parent==window.self?1:0,sw:screen&&screen.width,sh:screen&&screen.height,cb:Math.floor(99999999999*Math.random()),tpaf:1,cks:1,requestid:e.bidId,referer:t&&t.referer?t.referer:""};e.hasOwnProperty("nativeParams")&&(i="https://bidder.mediams.mb.softbank.jp/api/v1/prebid/native",c.tkf=1,c.ad_track="1",c.apiv="1.1.0"),a.push({method:"GET",url:i,data:n.parseQueryStringParameters(c)})})),a},interpretResponse:function(e,r){var t=c(r.data),n=e.body||{},a=[];if(n.hasOwnProperty(t.placementid)){var i=n[t.placementid],o={requestId:i.requestid,cpm:i.price,creativeId:i.creativeId,currency:i.cur,netRevenue:!0,ttl:700};i.hasOwnProperty("title")?(o.mediaType="native",o.native={title:i.title,body:i.description,cta:i.cta,sponsoredBy:i.advertiser,clickUrl:s(i.landingURL),impressionTrackers:i.trackings},i.screenshots&&(o.native.image={url:i.screenshots.url,height:i.screenshots.height,width:i.screenshots.width}),i.icon&&(o.native.icon={url:i.icon.url,height:i.icon.height,width:i.icon.width})):(o.ad=i.adm,o.width=i.width,o.height=i.height),a.push(o)}return a},getUserSyncs:function(e,r){var t=[];return t.push({type:"image",url:"https://bidder.mediams.mb.softbank.jp/api/v1/cookie/gen"}),t},onTimeout:function(e){},onBidWon:function(e){},onSetTargeting:function(e){}};Object(a.registerBidder)(d)}}]);