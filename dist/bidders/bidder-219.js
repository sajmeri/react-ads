(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[219],{191:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return u}));var n=r(277),i=r(280),o=r(278),d=r(279);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var d,a=e[Symbol.iterator]();!(n=(d=a.next()).done)&&(r.push(d.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={code:"rads",aliases:["rads"],supportedMediaTypes:[d.b,d.d],isBidRequestValid:function(e){return!!e.params.placement},buildRequests:function(e,t){return e.map((function(e){var r,i=e.params,o=n.deepAccess(e,"mediaTypes.video")||{},d=s(n.parseSizesInput(o.playerSize||e.sizes)[0].split("x"),2),a=d[0],u=d[1],c=i.placement,l=Math.floor(99999999999*Math.random()),f=encodeURIComponent(t.refererInfo.referer),v=e.bidId,m=i.devMode||!1?"https://dcradn1.online-solution.biz/md.request.php":"https://rads.recognified.net/md.request.php",b={};"video"===(r=e).mediaType||n.deepAccess(r,"mediaTypes.video")?b={rt:i.vastFormat||"vast2",_f:"prebid_js",_ps:c,srw:a,srh:u,idt:100,rnd:l,p:f,bid_id:v}:b={rt:"bid-response",_f:"prebid_js",_ps:c,srw:a,srh:u,idt:100,rnd:l,p:f,bid_id:v};return function(e,t){void 0!==e.pfilter&&(t.pfilter=e.pfilter);void 0!==e.bcat&&(t.bcat=e.bcat);void 0!==e.dvt&&(t.dvt=e.dvt);void 0!==e.latitude&&(t.latitude=e.latitude);void 0!==e.longitude&&(t.longitude=e.longitude);void 0!==e.ip&&(t.i=e.ip)}(i,b),{method:"GET",url:m,data:p(b)}}))},interpretResponse:function(e,t){var r=[],n=e.body,o=n.crid||0,d=n.cpm/1e6||0;if(0!==d&&0!==o){var a=n.dealid||"",s=n.currency||"EUR",u=void 0===n.netRevenue||n.netRevenue,p={requestId:n.bid_id,cpm:d,width:n.width,height:n.height,creativeId:o,dealId:a,currency:s,netRevenue:u,ttl:i.b.getConfig("_bidderTimeout")};n.vastXml?(p.vastXml=n.vastXml,p.mediaType="video"):p.ad=n.adTag,r.push(p)}return r}};function p(e,t){var r,n=[];for(r in e)if(e.hasOwnProperty(r)){var i=t?t+"["+r+"]":r,o=e[r];n.push(null!==o&&"object"===a(o)?p(o,i):encodeURIComponent(i)+"="+encodeURIComponent(o))}return n.join("&")}Object(o.registerBidder)(u)}}]);