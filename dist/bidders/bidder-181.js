(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[181],{141:function(e,n,r){"use strict";r.r(n),r.d(n,"spec",(function(){return s}));var t=r(277),d=r(279),i=r(278),s={code:"lockerdome",supportedMediaTypes:[d.b],isBidRequestValid:function(e){return!!e.params.adUnitId},buildRequests:function(e,n){var r,d=e.map((function(e){return e.schain&&(r=r||e.schain),{requestId:e.bidId,adUnitCode:e.adUnitCode,adUnitId:t.getBidIdParameter("adUnitId",e.params),sizes:e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes}})),i=n&&n.refererInfo&&n.refererInfo.canonicalUrl||"",s=n&&n.refererInfo&&n.refererInfo.referer||"",o={bidRequests:d,url:encodeURIComponent(i),referrer:encodeURIComponent(s)};return r&&(o.schain=r),n&&(n.gdprConsent&&(o.gdpr={applies:n.gdprConsent.gdprApplies,consent:n.gdprConsent.consentString}),n.uspConsent&&(o.us_privacy={consent:n.uspConsent})),{method:"POST",url:"https://lockerdome.com/ladbid/prebid",data:JSON.stringify(o)}},interpretResponse:function(e,n){return e&&e.body&&e.body.bids?e.body.bids.map((function(e){return{requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:e.netRevenue,ad:e.ad,ttl:e.ttl}})):[]}};Object(i.registerBidder)(s)}}]);