(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[261],{251:function(e,n,t){"use strict";t.r(n),t.d(n,"resetUserSync",(function(){return a})),t.d(n,"spec",(function(){return o}));var s=t(277),i=t(280),r=t(278),d=!1;function a(){d=!1}s.logMessage("Initializing UDM Adapter. PBJS Version: ".concat("3.11.0"," with adapter version: ").concat("3.5V","  Updated 20191028"));var o={code:"underdogmedia",bidParams:[],isBidRequestValid:function(e){var n=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes?e.mediaTypes.banner.sizes:e.sizes;return!!(e.params&&e.params.siteId&&n&&n.length>0)},buildRequests:function(e,n){var t=[],i=0;e.forEach((function(e){var n=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes?e.mediaTypes.banner.sizes:e.sizes;t=s.flatten(t,s.parseSizesInput(n)),i=e.params.siteId}));var r={tid:1,dt:10,sid:i,sizes:t.join(","),version:"3.5V"};if(n&&n.gdprConsent&&(void 0!==n.gdprConsent.gdprApplies&&(r.gdprApplies=!!n.gdprConsent.gdprApplies),n.gdprConsent.vendorData&&n.gdprConsent.vendorData.vendorConsents&&void 0!==n.gdprConsent.vendorData.vendorConsents[159]&&(r.consentGiven=!!n.gdprConsent.vendorData.vendorConsents[159]),void 0!==n.gdprConsent.consentString&&(r.consentData=n.gdprConsent.consentString)),n.uspConsent&&(r.uspConsent=n.uspConsent),!r.gdprApplies||r.consentGiven)return{method:"GET",url:"https://udmserve.net/udm/img.fetch",data:r,bidParams:e}},getUserSyncs:function(e,n){if(!d&&n.length>0&&n[0].body&&n[0].body.userSyncs&&n[0].body.userSyncs.length>0)return d=!0,n[0].body.userSyncs.filter((function(n){var t=n.type;return!(!e.iframeEnabled||"iframe"!==t)||(!(!e.pixelEnabled||"image"!==t)||void 0)}))},interpretResponse:function(e,n){var t=[];return n.bidParams.forEach((function(n){e.body.mids.forEach((function(e){if(!(e.useCount>0)){e.useCount||(e.useCount=0);var r=!0,d=n.mediaTypes&&n.mediaTypes.banner&&n.mediaTypes.banner.sizes?n.mediaTypes.banner.sizes:n.sizes;if(s.parseSizesInput(d).forEach((function(n){n===e.width+"x"+e.height&&(r=!1)})),!r){var a={requestId:n.bidId,bidderCode:o.code,cpm:parseFloat(e.cpm),width:e.width,height:e.height,ad:e.ad_code_html,creativeId:e.mid,currency:"USD",netRevenue:!1,ttl:i.b.getConfig("_bidderTimeout")};a.cpm<=0||a.ad.length<=0||(e.useCount++,a.ad+=function(e,n,t){var s=n.notification_url,r=s.indexOf(";version=");r+1&&(s=s.substring(0,r));s+=";version=".concat("3.5V"),s+=";cb="+Math.random(),s+=";qqq="+1/e.cpm,s+=";hbt="+i.b.getConfig("_bidderTimeout"),s+=";style=adapter",s+=";vis="+encodeURIComponent(document.visibilityState),s+=";traffic_info="+encodeURIComponent(JSON.stringify(function(){for(var e,n={},t=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),s=0;s<t.length;s++)(e=t[s].split("="))[0].match(/^utm_/)&&(n[e[0]]=e[1].substr(0,150));return n}())),t.params.subId&&(s+=";subid="+encodeURIComponent(t.params.subId));return'<script async src="'+s+'"><\/script>'}(a,e,n),t.push(a))}}}))})),t}};Object(r.registerBidder)(o)}}]);