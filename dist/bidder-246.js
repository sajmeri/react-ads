(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{231:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return d}));var i=t(277),n=t(288),a=t(278),s=t(279),d={code:"sovrn",supportedMediaTypes:[s.b],isBidRequestValid:function(e){return!(!e.params.tagid||isNaN(parseFloat(e.params.tagid))||!isFinite(e.params.tagid))},buildRequests:function(e,r){try{var t,a,s,d=[];i._each(e,(function(e){if(!s){var r=i.deepAccess(e,"userId.digitrustid.data");!r||r.privacy&&r.privacy.optout||(s={id:r.id,keyv:r.keyv})}e.schain&&(a=a||e.schain),t=t||i.getBidIdParameter("iv",e.params);var n=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.sizes,p=(n=(n=i.isArray(n)&&i.isArray(n[0])?n:[n]).filter((function(e){return i.isArray(e)}))).map((function(e){return{w:parseInt(e[0],10),h:parseInt(e[1],10)}}));d.push({id:e.bidId,banner:{format:p,w:1,h:1},tagid:String(i.getBidIdParameter("tagid",e.params)),bidfloor:i.getBidIdParameter("bidfloor",e.params)})}));var p=r.refererInfo.referer,o=Object(n.c)(p).hostname,c={id:i.getUniqueIdentifierStr(),imp:d,site:{page:p,domain:o}};a&&(c.source={ext:{schain:a}}),r.gdprConsent&&(i.deepSetValue(c,"regs.ext.gdpr",+r.gdprConsent.gdprApplies),i.deepSetValue(c,"user.ext.consent",r.gdprConsent.consentString)),r.uspConsent&&i.deepSetValue(c,"regs.ext.us_privacy",r.uspConsent),s&&i.deepSetValue(c,"user.ext.digitrust",{id:s.id,keyv:s.keyv});var u="https://ap.lijit.com/rtb/bid?src=prebid_prebid_3.11.0";return t&&(u+="&iv=".concat(t)),{method:"POST",url:u,data:JSON.stringify(c),options:{contentType:"text/plain"}}}catch(e){i.logError("Could not build bidrequest, error deatils:",e)}},interpretResponse:function(e){var r=e.body,t=r.id,n=r.seatbid;try{var a=[];return t&&n&&n.length>0&&n[0].bid&&n[0].bid.length>0&&n[0].bid.map((function(e){a.push({requestId:e.impid,cpm:parseFloat(e.price),width:parseInt(e.w),height:parseInt(e.h),creativeId:e.crid||e.id,dealId:e.dealid||null,currency:"USD",netRevenue:!0,mediaType:s.b,ad:decodeURIComponent("".concat(e.adm,'<img src="').concat(e.nurl,'">')),ttl:60})})),a}catch(e){i.logError("Could not intrepret bidresponse, error deatils:",e)}},getUserSyncs:function(e,r,t,n){try{var a=[];if(r&&0!==r.length){if(e.iframeEnabled){var s=r.filter((function(e){return i.deepAccess(e,"body.ext.iid")})).map((function(e){return e.body.ext.iid})),d=[];t&&t.gdprApplies&&"string"==typeof t.consentString&&d.push(["gdpr_consent",t.consentString]),n&&d.push(["us_privacy",n]),s[0]&&(d.push(["informer",s[0]]),a.push({type:"iframe",url:"https://ap.lijit.com/beacon?"+d.map((function(e){return e.join("=")})).join("&")}))}e.pixelEnabled&&r.filter((function(e){return i.deepAccess(e,"body.ext.sync.pixels")})).reduce((function(e,r){return e.concat(r.body.ext.sync.pixels)}),[]).map((function(e){return e.url})).forEach((function(e){return a.push({type:"image",url:e})}))}return a}catch(e){return[]}}};Object(a.registerBidder)(d)}}]);