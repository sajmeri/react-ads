(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[227],{202:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return n}));var a=r(277),i=r(278),n={code:"rtbdemand",isBidRequestValid:function(e){return!!(e&&e.params&&e.params.zoneid)},buildRequests:function(e,t){return e.map((function(e){var r=e.params.server||"bidding.rtbdemand.com",i=function(e){var t={},r=a.parseSizesInput(e)[0];if("string"!=typeof r)return t;var i=r.toUpperCase().split("X"),n=parseInt(i[0],10);n&&(t.width=n);var o=parseInt(i[1],10);o&&(t.height=o);return t}(t.bids[0].sizes),n={from:"hb",v:"1.0",request_id:e.bidderRequestId,imp_id:e.bidId,aff:e.params.zoneid,bid_floor:parseFloat(e.params.floor)>0?e.params.floor:0,charset:document.charSet||document.characterSet,site_domain:document.location.hostname,site_page:window.location.href,subid:"hb",flashver:o(),tmax:t.timeout,hb:"1",name:document.location.hostname,width:i.width,height:i.height,device_width:screen.width,device_height:screen.height,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,secure:"https:"===document.location.protocol,make:navigator.vendor?navigator.vendor:""};return document.referrer&&(n.referrer=document.referrer),{method:"GET",url:"https://"+r+"/hb",data:n}}))},interpretResponse:function(e){e=e.body;var t=[];return e&&e.seatbid&&e.seatbid.forEach((function(e){return e.bid.forEach((function(e){var r={requestId:e.impid,creativeId:e.impid,cpm:e.price,width:e.w,height:e.h,ad:e.adm,netRevenue:!0,currency:"USD",ttl:360};t.push(r)}))})),t},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://bidding.rtbdemand.com/delivery/matches.php?type=iframe"}]}};function o(){var e,t,r;if(navigator.plugins&&navigator.plugins.length>0){e=navigator.plugins;for(var a=0;a<e.length&&!r;a++)(t=e[a]).name.indexOf("Shockwave Flash")>-1&&(r=t.description.split("Shockwave Flash ")[1])}return r||""}Object(i.registerBidder)(n)}}]);