(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[240],{220:function(e,r,a){"use strict";a.r(r),a.d(r,"spec",(function(){return p}));var d=a(277),t=a(279),i=a(280),s=a(278),p={code:"smartadserver",aliases:["smart"],supportedMediaTypes:[t.b,t.d],isBidRequestValid:function(e){return!!(e.params&&e.params.siteId&&e.params.pageId&&e.params.formatId)},buildRequests:function(e,r){return e.map((function(e){var a={siteid:e.params.siteId,pageid:e.params.pageId,formatid:e.params.formatId,currencyCode:i.b.getConfig("currency.adServerCurrency"),bidfloor:e.params.bidfloor||0,targeting:e.params.target&&""!=e.params.target?e.params.target:void 0,buid:e.params.buId&&""!=e.params.buId?e.params.buId:void 0,appname:e.params.appName&&""!=e.params.appName?e.params.appName:void 0,ckid:e.params.ckId||0,tagId:e.adUnitCode,pageDomain:r&&r.refererInfo&&r.refererInfo.referer?r.refererInfo.referer:void 0,transactionId:e.transactionId,timeout:i.b.getConfig("bidderTimeout"),bidId:e.bidId,prebidVersion:"3.11.0"},t=d.deepAccess(e,"mediaTypes.video");if(t){if(!t||"instream"!==t.context)return{};var s=t.playerSize[0];a.isVideo=!0,a.videoData={videoProtocol:e.params.video.protocol,playerWidth:s[0],playerHeight:s[1],adBreak:e.params.video.startDelay||0}}else{var p=d.deepAccess(e,"mediaTypes.banner");a.sizes=p.sizes.map((function(e){return{w:e[0],h:e[1]}}))}r&&r.gdprConsent&&(a.gdpr_consent=r.gdprConsent.consentString,a.gdpr=r.gdprConsent.gdprApplies);var n=JSON.stringify(a);return{method:"POST",url:(void 0!==e.params.domain?e.params.domain:"https://prg.smartadserver.com")+"/prebid/v1",data:n}}))},interpretResponse:function(e,r){var a=[],i=e.body;try{if(i){var s=JSON.parse(r.data),p={requestId:s.bidId,cpm:i.cpm,width:i.width,height:i.height,creativeId:i.creativeId,dealId:i.dealId,currency:i.currency,netRevenue:i.isNetCpm,ttl:i.ttl};s.isVideo?(p.mediaType=t.d,p.vastUrl=i.adUrl,p.vastXml=i.ad):(p.adUrl=i.adUrl,p.ad=i.ad),a.push(p)}}catch(e){d.logError("Error while parsing smart server response",e)}return a},getUserSyncs:function(e,r){var a=[];return e.iframeEnabled&&r.length>0&&a.push({type:"iframe",url:r[0].body.cSyncUrl}),a}};Object(s.registerBidder)(p)}}]);