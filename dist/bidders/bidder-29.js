(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[29],{284:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(283),a=r.n(n),i=r(277),o={},d=["criteo","outstream","adagio","browsi"];function c(e,t,r){if(t&&e){if(a()(d,t))return o[e]?(r&&"function"==typeof r&&(o[e].loaded?r():o[e].callbacks.push(r)),o[e].tag):(o[e]={loaded:!1,tag:null,callbacks:[]},r&&"function"==typeof r&&o[e].callbacks.push(r),i.logWarn("module ".concat(t," is loading external JavaScript")),function(t,r){var n=document.createElement("script");n.type="text/javascript",n.async=!0,o[e].tag=n,n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,r())}:n.onload=function(){r()};return n.src=t,i.insertElement(n),n}(e,(function(){o[e].loaded=!0;try{for(var t=0;t<o[e].callbacks.length;t++)o[e].callbacks[t]()}catch(e){i.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));i.logError("".concat(t," not whitelisted for loading external JavaScript"))}else i.logError("cannot load external script without url and moduleCode")}},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return s}));var n=r(284),a=r(277),i=r(286),o=r.n(i);function d(e){var t=this,r=e.url,i=e.config,d=e.id,c=e.callback,s=e.loaded,u=e.adUnitCode;this.url=r,this.config=i,this.handlers={},this.id=d,this.loaded=s,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):a.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=c||function(){t.loaded=!0,t.process()},!function(e){var t=pbjs.adUnits,r=o()(t,(function(t){return t.code===e}));return!!(r&&r.renderer&&r.renderer.url&&r.renderer.render)}(u)?Object(n.a)(r,"outstream",this.callback):a.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(u))}function c(e){return!(!e||!e.url)}function s(e,t){e.render(t)}d.install=function(e){return new d({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},d.prototype.getConfig=function(){return this.config},d.prototype.setRender=function(e){this.render=e},d.prototype.setEventHandlers=function(e){this.handlers=e},d.prototype.handleVideoEvent=function(e){var t=e.id,r=e.eventName;"function"==typeof this.handlers[r]&&this.handlers[r](),a.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(r))},d.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){a.logError("Error processing Renderer command: ",e)}}},36:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return p}));var n=r(277),a=r(278),i=r(279),o=r(287),d=r(286),c=r.n(d);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l={},p={code:"adtelligent",aliases:["onefiftytwomedia"],supportedMediaTypes:[i.d,i.b],isBidRequestValid:function(e){return!!n.deepAccess(e,"params.aid")},getUserSyncs:function(e,t){var r=[];function a(t){var n=t.cookieURLs,a=t.cookieURLSTypes||[];Array.isArray(n)&&n.forEach((function(t,n){var i=a[n]||"image";!e.pixelEnabled&&"image"==i||!e.iframeEnabled&&"iframe"==i||l[t]||(l[t]=!0,r.push({type:i,url:t}))}))}return(e.pixelEnabled||e.iframeEnabled)&&n.isArray(t)&&t.forEach((function(e){e.body&&(n.isArray(e.body)?e.body.forEach((function(e){a(e)})):a(e.body))})),r},buildRequests:function(e,t){return{data:h(e,t),bidderRequest:t,method:"GET",url:"https://ghb.adtelligent.com/auction/"}},interpretResponse:function(e,t){var r=t.bidderRequest;e=e.body;var a=[];return n.isArray(e)?(e.forEach((function(e){a=n.flatten(a,f(e,r))})),a):f(e,r)}};function f(e,t){var r=!e||!n.isArray(e.bids),a=[];if(r){var o=e&&e.ext&&e.ext.message?": ".concat(e.ext.message):"",d="in response for ".concat(t.bidderCode," adapter ").concat(o);return n.logError(d),a}return e.bids.forEach((function(e){var r=c()(t.bids,(function(t){return t.bidId===e.requestId}));if(0!==e.cpm&&void 0!==r){var o=function(e,t){var r={requestId:e.requestId,creativeId:e.cmpId,height:e.height,currency:e.cur,width:e.width,cpm:e.cpm,netRevenue:!0,mediaType:t,ttl:3600};if("display"===t)return u(r,{ad:e.ad});u(r,{vastUrl:e.vastUrl}),"outstream"===t&&u(r,{mediaType:"video",adResponse:e,renderer:y(e.requestId)});return r}(e,function(e){var t=n.deepAccess(e,"mediaTypes.video"),r=n.deepAccess(e,"mediaTypes.video.context");return t?"outstream"===r?"outstream":i.d:"display"}(r));a.push(o)}})),a}function h(e,t){var r,a,o,d,c,l,p={domain:n.deepAccess(t,"refererInfo.referer")};n.deepAccess(t,"gdprConsent.gdprApplies")&&(p.gdpr=1,p.gdpr_consent=n.deepAccess(t,"gdprConsent.consentString")),n.deepAccess(t,"bidderRequest.uspConsent")&&(p.us_privacy=t.uspConsent);for(var f=0,h=e.length;f<h;f++)u(p,(r=f,a=e[f],o=void 0,d=void 0,c=void 0,l=void 0,d=n.deepAccess(a,"mediaTypes.video")?i.d:"display",c=r?"".concat(r+1):"",l=d===i.d?n.deepAccess(a,"mediaTypes.video.playerSize"):n.deepAccess(a,"mediaTypes.banner.sizes"),s(o={},"callbackId"+c,a.bidId),s(o,"aid"+c,a.params.aid),s(o,"ad_type"+c,d),s(o,"sizes"+c,n.parseSizesInput(l).join()),o));return p}function y(e){var t=o.a.install({id:e,url:"https://player.adtelligent.com/outstream-unit/2.01/outstream.min.js",loaded:!1});return t.setRender(g),t}function g(e){e.renderer.push((function(){window.VOutstreamAPI.initOutstreams([{width:e.width,height:e.height,vastUrl:e.vastUrl,elId:e.adUnitCode}])}))}Object(a.registerBidder)(p)}}]);