(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[196],{158:function(e,r,n){"use strict";n.r(r),n.d(r,"BIDDER_CODE",(function(){return c})),n.d(r,"END_POINT_URL",(function(){return o})),n.d(r,"SSP_PLACEMENT_ID",(function(){return d})),n.d(r,"NQ",(function(){return s})),n.d(r,"NQ_NAME",(function(){return p})),n.d(r,"CATEGORY",(function(){return f})),n.d(r,"CATEGORY_NAME",(function(){return l})),n.d(r,"SUB_ID",(function(){return m})),n.d(r,"REF",(function(){return g})),n.d(r,"LOCATION",(function(){return I})),n.d(r,"spec",(function(){return h}));var t=n(277),u=n(280),a=n(278);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var c="nanointeractive",o="https://ad.audiencemanager.de",d="pid",s="nq",p="name",f="category",l="categoryName",m="subId",g="ref",I="loc",b="5a1ec660eb0a191dfa591172",h={code:c,aliases:["ni"],isBidRequestValid:function(e){return!!e.params[d]},buildRequests:function(e,r){var n=[];return e.forEach((function(e){return n.push(function(e,r){var n,u=t.deepAccess(r,"refererInfo.referer"),a=t.getOrigin();b=e.params[d]||b;var c=(i(n={},d,e.params[d]),i(n,s,[v(e)]),i(n,f,[y(e)]),i(n,m,function(e){return e.params[m]||null}(e)),i(n,g,function(){try{return window.top.document.referrer}catch(e){return document.referrer}}()),i(n,"sizes",e.sizes.map((function(e){return e[0]+"x"+e[1]}))),i(n,"bidId",e.bidId),i(n,"cors",a),i(n,I,u),i(n,"lsUserId",function(){if(null!=localStorage.getItem("lsUserId"))return localStorage.getItem("lsUserId");return null}()),n);r&&r.gdprConsent&&(c.gdprConsent=r.gdprConsent.consentString,c.gdprApplies=r.gdprConsent.gdprApplies?"1":"0");return c}(e,r))})),{method:"POST",url:E()+"/hb",data:JSON.stringify(n)}},interpretResponse:function(e){var r=[];return e.body.forEach((function(e){var n;(n=e).cpm&&n.ad&&r.push(function(e){e.userId&&localStorage.setItem("lsUserId",e.userId);return{requestId:e.id,cpm:e.cpm,width:e.width,height:e.height,ad:e.ad,ttl:e.ttl,creativeId:e.creativeId,netRevenue:e.netRevenue||!0,currency:e.currency}}(e))})),r},getUserSyncs:function(e){var r=[];return e.iframeEnabled&&r.push({type:"iframe",url:E()+"/hb/cookieSync/"+b}),e.pixelEnabled&&r.push({type:"image",url:E()+"/hb/cookieSync/"+b}),r}};function v(e){return e.params[p]?t.getParameterByName(e.params[p]):e.params[s]||null}function y(e){return e.params[l]?t.getParameterByName(e.params[l]):e.params[f]||null}function E(){var e=u.b.getConfig("nano");return e&&e.endpointUrl||o}Object(a.registerBidder)(h)}}]);