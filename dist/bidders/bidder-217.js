(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[217],{189:function(e,r,i){"use strict";i.r(r),i.d(r,"QUANTCAST_DOMAIN",(function(){return o})),i.d(r,"QUANTCAST_TEST_DOMAIN",(function(){return s})),i.d(r,"QUANTCAST_NET_REVENUE",(function(){return p})),i.d(r,"QUANTCAST_TEST_PUBLISHER",(function(){return c})),i.d(r,"QUANTCAST_TTL",(function(){return u})),i.d(r,"QUANTCAST_PROTOCOL",(function(){return m})),i.d(r,"QUANTCAST_PORT",(function(){return l})),i.d(r,"spec",(function(){return T}));var a=i(277),t=i(281),n=i(280),d=i(278),o="qcx.quantserve.com",s="s2s-canary.quantserve.com",p=!0,c="test-publisher",u=4,m="https",l="8443";function v(e){var r=e.sizes||e.mediaTypes.banner.sizes;return{banner:{battr:e.params.battr,sizes:r.map((function(e){return{width:e[0],height:e[1]}}))},placementCode:e.placementCode,bidFloor:e.params.bidFloor||1e-10}}var T={code:"quantcast",supportedMediaTypes:["banner","video"],isBidRequestValid:function(e){return!!e.params.publisherId},buildRequests:function(e,r){var i,t=e||[],d=a.deepAccess(r,"gdprConsent")||{},p=a.deepAccess(r,"uspConsent"),u=a.deepAccess(r,"refererInfo.referer"),T=a.deepAccess(r,"refererInfo.canonicalUrl")||n.b.getConfig("pageUrl")||a.deepAccess(window,"location.href"),y=(i=T)?i.replace("http://","").replace("https://","").replace("www.","").split(/[/?#]/)[0]:i,b=[];return t.forEach((function(e){var r;if(e.mediaTypes)if(e.mediaTypes.video&&"instream"===e.mediaTypes.video.context)r=function(e){var r={};return e.params.video&&(r.mimes=e.params.video.mimes,r.minduration=e.params.video.minduration,r.maxduration=e.params.video.maxduration,r.protocols=e.params.video.protocols,r.startdelay=e.params.video.startdelay,r.linearity=e.params.video.linearity,r.battr=e.params.video.battr,r.maxbitrate=e.params.video.maxbitrate,r.playbackmethod=e.params.video.playbackmethod,r.delivery=e.params.video.delivery,r.placement=e.params.video.placement,r.api=e.params.video.api),e.mediaTypes.video.mimes&&(r.mimes=e.mediaTypes.video.mimes),a.isArray(e.mediaTypes.video.playerSize[0])?(r.w=e.mediaTypes.video.playerSize[0][0],r.h=e.mediaTypes.video.playerSize[0][1]):(r.w=e.mediaTypes.video.playerSize[0],r.h=e.mediaTypes.video.playerSize[1]),{video:r,placementCode:e.placementCode,bidFloor:e.params.bidFloor||1e-10}}(e);else{if(!e.mediaTypes.banner)return void a.logInfo("".concat("quantcast",": No supported mediaTypes found in ").concat(JSON.stringify(e.mediaTypes)));r=v(e)}else r=v(e);var i={publisherId:e.params.publisherId,requestId:e.bidId,imp:[r],site:{page:T,referrer:u,domain:y},bidId:e.bidId,gdprSignal:d.gdprApplies?1:0,gdprConsent:d.consentString,uspSignal:p?1:0,uspConsent:p,prebidJsVersion:"3.11.0"},t=JSON.stringify(i),n=e.params.publisherId===c?s:o,f="".concat(m,"://").concat(n,":").concat(l,"/qchb");b.push({data:t,method:"POST",url:f})})),b},interpretResponse:function(e){if(void 0===e)return a.logError("Server Response is undefined"),[];var r=e.body;return void 0!==r&&r.hasOwnProperty("bids")?a.isEmpty(r.bids)?[]:r.bids.map((function(e){var i=e.ad,a=e.cpm,t=e.width,n=e.height,d=e.creativeId,o=e.currency,s=e.videoUrl,c=e.dealId,m={requestId:r.requestId,cpm:a,width:t,height:n,ad:i,ttl:u,creativeId:d,netRevenue:p,currency:o};return void 0!==s&&s&&(m.vastUrl=s,m.mediaType="video"),void 0!==c&&c&&(m.dealId=c),m})):(a.logError("Sub-optimal JSON received from Quantcast server"),[])},onTimeout:function(e){var r="".concat(m,"://").concat(o,":").concat(l,"/qchb_notify?type=timeout");Object(t.a)(r,null,null)}};Object(d.registerBidder)(T)}}]);