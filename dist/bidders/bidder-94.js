(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[94],{259:function(e,n,r){"use strict";r.r(n),r.d(n,"spec",(function(){return i}));var t=r(277),o=r(278),a=r(279),c=r(284);var i={code:"videonow",supportedMediaTypes:[a.b],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.pId)},buildRequests:function(e,n){t.logInfo("".concat("videonow",". buildRequests"));var r=[];return e.forEach((function(e){var t=function(e,n){var r=n.refererInfo,t=e.ext,o=e.bidId,a=e.params,c=e.code,i=e.sizes,d=a||{},u=d.pId,l=d.bidFloor,s=d.cur,f=d.placementId,p=d.url||"https://bidder.videonow.ru/prebid",v={method:"POST",url:p="".concat(p).concat(~p.indexOf("?")?"&":"?","profile_id=").concat(u),data:{id:o,cpm:l,code:c,sizes:i,cur:s||"RUB",placementId:f,ref:r&&r.referer}};return t&&Object.keys(t).forEach((function(e){v.data["ext_".concat(e)]=t[e]})),v}(e,n);t&&r.push(t)})),r},interpretResponse:function(e,n){if(!e||!e.body)return[];var r=(n&&n.data||{}).id;if(!r)return[];var o=e.body,a=o.seatbid,i=o.cur,d=o.ext;if(!a||!a.length)return[];var u=(d||{}).placementId;if(!u)return[];var l=[];return a.forEach((function(e){var n=e.bid;n&&n.length&&n.forEach((function(e){var n=function(e,n,r,o){var a=e.id,i=e.nurl,d=e.code,u=e.price,l=e.crid,s=e.ext,f=e.ttl,p=e.netRevenue,v=e.w,g=e.h,h=e.adm;if(!a||!u||!h)return null;var m=s||{},b=m.init,w=m.module,y=m.format;if(!b)return t.logError("vnInitModulePath is not defined"),null;var E=w||{},x=E.log,I=E.min;if(!I&&!x)return t.logError("module's paths are not defined"),null;return{requestId:n,cpm:u,width:v,height:g,creativeId:l,currency:r||"RUB",netRevenue:void 0===p||p,ttl:f||300,ad:d,nurl:i,renderer:{url:I||x,render:function(){var e=window.document;if(o&&e.getElementById(o)){var n={module:w,dataXml:h};y&&(n.format=y),((window.videonow=window.videonow||{}).init=window.videonow.init||{})[1]=n,Object(c.a)("".concat(b).concat(~b.indexOf("?")?"&":"?","profileId=").concat(1),"outstream")}else t.logError("bidAdapter ".concat("videonow",": ").concat(o," not found"))}}}}(e,r,i,u);n&&l.push(n)}))})),l},getUserSyncs:function(e,n){var r=[];return n&&n.length?(n.forEach((function(n){var t=(n&&n.body||{}).ext||{},o=t.pixels,a=t.iframes;e.iframeEnabled&&a&&a.length&&a.forEach((function(e){return r.push({type:"iframe",url:e})})),e.pixelEnabled&&o&&o.length&&o.forEach((function(e){return r.push({type:"image",url:e})}))})),t.logInfo("".concat("videonow"," getUserSyncs() syncs=").concat(r.length)),r):r},onBidWon:function(e){var n=(e||{}).nurl;n&&t.triggerPixel(t.replaceAuctionPrice(n,e.cpm))}};Object(o.registerBidder)(i)},284:function(e,n,r){"use strict";r.d(n,"a",(function(){return d}));var t=r(283),o=r.n(t),a=r(277),c={},i=["criteo","outstream","adagio","browsi"];function d(e,n,r){if(n&&e){if(o()(i,n))return c[e]?(r&&"function"==typeof r&&(c[e].loaded?r():c[e].callbacks.push(r)),c[e].tag):(c[e]={loaded:!1,tag:null,callbacks:[]},r&&"function"==typeof r&&c[e].callbacks.push(r),a.logWarn("module ".concat(n," is loading external JavaScript")),function(n,r){var t=document.createElement("script");t.type="text/javascript",t.async=!0,c[e].tag=t,t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,r())}:t.onload=function(){r()};return t.src=n,a.insertElement(t),t}(e,(function(){c[e].loaded=!0;try{for(var n=0;n<c[e].callbacks.length;n++)c[e].callbacks[n]()}catch(e){a.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));a.logError("".concat(n," not whitelisted for loading external JavaScript"))}else a.logError("cannot load external script without url and moduleCode")}}}]);