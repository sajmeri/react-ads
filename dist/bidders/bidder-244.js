(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[244],{225:function(e,r,n){"use strict";n.r(r),n.d(r,"spec",(function(){return f}));var t=n(277),a=n(278),i=n(283),o=n.n(i),s=n(279);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=["mimes","minduration","maxduration","protocols","startdelay","linearity","skip","delivery","pos","api","ext","battr"],u=["battr","btype","pos","mimes","ext"],c=["name","domain","cat","keywords","content"],m=["name","bundle","domain","storeUrl","cat","ver","keywords","content"],f={code:"somo",supportedMediaTypes:[s.b,s.d],aliases:["somoaudience"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.placementId)},buildRequests:function(e,r){return e.map((function(e){var n=function(e,r){var n={id:e.bidId,imp:[b(e)],at:1,tmax:400,site:y(e,r),app:v(e),device:{ip:"check",ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage},bcat:g(e),badv:h(e),ext:{prebid:"3.11.0"}};void 0!==r&&(n=function(e,r){e&&r&&"gdprApplies"in e&&("reqs"in r||(r.reqs={}),"ext"in r.reqs||(r.reqs.ext={}),r.reqs.ext.gdpr=e.gdprApplies,"consentString"in e&&("user"in r||(r.user={}),"ext"in r.user||(r.user.ext={}),r.user.ext.consent=e.consentString));return r}(r.gdprConsent,n));return n}(e,r);return{method:"POST",url:"https://publisher-east.mobileadtrading.com/rtb/bid?s="+e.params.placementId.toString(),data:n,bidRequest:e}}))},interpretResponse:function(e,r){return function(e,r){var n=[];if(r.body){var t=r.body.seatbid[0].bid[0],a={requestId:r.body.id,cpm:t.price,width:t.w,height:t.h,ad:t.adm,ttl:360,creativeId:t.crid,adId:t.impid,netRevenue:!1,currency:"USD",adUnitCode:e.bidRequest.adUnitCode};w(e.bidRequest)?(a.vastXml=t.adm,a.mediaType="video"):(a.ad=t.adm,a.mediaType="banner"),n.push(a)}return n}(r,e)},getUserSyncs:function(e,r,n){var t=[],a="https://publisher-east.mobileadtrading.com/usersync";return e.pixelEnabled&&(n&&"string"==typeof n.consentString&&"boolean"==typeof n.gdprApplies&&(a+="?gdpr=".concat(Number(n.gdprApplies),"&gdpr_consent=").concat(n.consentString)),t.push({type:"image",url:a})),t}};function b(e){var r={id:e.bidId,bidfloor:e.params.bidfloor||0};if(w(e)){if(r.video={},e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.sizes){var n=I(e.mediaTypes.video.sizes);r.video.w=n[0],r.video.h=n[1]}e.params.video&&Object.keys(e.params.video).filter((function(e){return o()(p,e)})).forEach((function(n){return r.video[n]=e.params.video[n]}))}else{if(r.banner={topframe:0},e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes){var t=I(e.mediaTypes.banner.sizes);r.banner.w=t[0],r.banner.h=t[1]}e.params.banner&&Object.keys(e.params.banner).filter((function(e){return o()(u,e)})).forEach((function(n){return r.banner[n]=e.params.banner[n]}))}return r}function l(e){return!!e.params.app}function y(e,r){if(l(e))return null;var n={};return r&&r.refererInfo&&(n.ref=r.refererInfo.referer,n.page=r.refererInfo.canonicalUrl),e.params.site&&Object.keys(e.params.site).filter((function(e){return o()(c,e)})).forEach((function(r){return n[r]=e.params.site[r]})),void 0===n.domain&&void 0!==n.page&&("function"==typeof window.URL?n.domain=new window.URL(n.page).hostname:n.domain=function(e){var r=e;r=e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0];return r=(r=r.split(":")[0]).split("?")[0]}(n.page)),n}function v(e){if(l(e)){var r={};return Object.keys(e.params.app).filter((function(e){return o()(m,e)})).forEach((function(n){return r[n]=e.params.app[n]})),r}return null}function g(e){return t.isArray(e.params.bcat)?e.params.bcat:[]}function h(e){return t.isArray(e.params.badv)?e.params.badv:[]}function w(e){return t.deepAccess(e,"mediaTypes.video")||"video"==e.mediaType}function I(e){var r=0,n=0;if(t.isArray(e)&&2===e.length&&!t.isArray(e[0]))r=parseInt(e[0],10),n=parseInt(e[1],10);else if("object"===d(e))for(var a=0;a<e.length;a++){var i=e[a];r=parseInt(i[0],10),n=parseInt(i[1],10);break}return[r,n]}Object(a.registerBidder)(f)}}]);