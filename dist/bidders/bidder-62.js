(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[62],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"spec",(function(){return l}));var a=n(277),r=n(278),o=n(286),d=n.n(o),i=n(279),c=n(287),s="https://ad.yieldlab.net",l={code:"yieldlab",supportedMediaTypes:[i.d,i.b],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.adslotId&&e.params.supplyId)},buildRequests:function(e,t){var n=[],r={ts:Date.now(),json:!0};a._each(e,(function(e){n.push(e.params.adslotId),e.params.targeting&&(r.t=u(e.params.targeting))})),t&&t.gdprConsent&&(r.gdpr="boolean"!=typeof t.gdprConsent.gdprApplies||t.gdprConsent.gdprApplies,r.gdpr&&(r.consent=t.gdprConsent.consentString));var o=n.join(","),d=u(r);return{method:"GET",url:"".concat(s,"/yp/").concat(o,"?").concat(d),validBidRequests:e}},interpretResponse:function(e,t){var n=[],r=Date.now();return t.validBidRequests.forEach((function(t){if(e.body){var o,l,u=d()(e.body,(function(e){return t.params.adslotId==e.id}));if(u){var f=2!==t.sizes.length||a.isArray(t.sizes[0])?t.sizes[0]:t.sizes,h=void 0!==t.params.adSize?t.params.adSize.split("x").map(Number):f,m=void 0!==t.params.extId?"&id="+t.params.extId:"",g=void 0!==u.adtype?u.adtype:"",v={requestId:t.bidId,cpm:u.price/100,width:h[0],height:h[1],creativeId:""+u.id,dealId:u["c.dealid"]?u["c.dealid"]:u.pid,currency:"EUR",netRevenue:!1,ttl:300,referrer:"",ad:'<script src="'.concat(s,"/d/").concat(u.id,"/").concat(t.params.supplyId,"/").concat(h[0],"x").concat(h[1],"?ts=").concat(r).concat(m,'"><\/script>')};if(o=t,l=g,a.deepAccess(o,"mediaTypes.video")&&"video"===l.toLowerCase()){var y=function(e){var t=a.deepAccess(e,"mediaTypes.video.playerSize");return t&&a.isArray(t[0])?t[0]:t}(t);if(y&&(v.width=y[0],v.height=y[1]),v.mediaType=i.d,v.vastUrl="".concat(s,"/d/").concat(u.id,"/").concat(t.params.supplyId,"/").concat(h[0],"x").concat(h[1],"?ts=").concat(r).concat(m),function(e){return"outstream"===a.deepAccess(e,"mediaTypes.video.context")}(t)){var b=c.a.install({id:t.bidId,url:"https://ad2.movad.net/dynamic.ad?a=o193092&ma_loadEvent=ma-start-event",loaded:!1});b.setRender(p),v.renderer=b}}n.push(v)}}})),n}};function u(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}function p(e){e.renderer.push((function(){window.ma_width=e.width,window.ma_height=e.height,window.ma_vastUrl=e.vastUrl,window.ma_container=e.adUnitCode,window.document.dispatchEvent(new Event("ma-start-event"))}))}Object(r.registerBidder)(l)},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(283),r=n.n(a),o=n(277),d={},i=["criteo","outstream","adagio","browsi"];function c(e,t,n){if(t&&e){if(r()(i,t))return d[e]?(n&&"function"==typeof n&&(d[e].loaded?n():d[e].callbacks.push(n)),d[e].tag):(d[e]={loaded:!1,tag:null,callbacks:[]},n&&"function"==typeof n&&d[e].callbacks.push(n),o.logWarn("module ".concat(t," is loading external JavaScript")),function(t,n){var a=document.createElement("script");a.type="text/javascript",a.async=!0,d[e].tag=a,a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,n())}:a.onload=function(){n()};return a.src=t,o.insertElement(a),a}(e,(function(){d[e].loaded=!0;try{for(var t=0;t<d[e].callbacks.length;t++)d[e].callbacks[t]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));o.logError("".concat(t," not whitelisted for loading external JavaScript"))}else o.logError("cannot load external script without url and moduleCode")}},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n(284),r=n(277),o=n(286),d=n.n(o);function i(e){var t=this,n=e.url,o=e.config,i=e.id,c=e.callback,s=e.loaded,l=e.adUnitCode;this.url=n,this.config=o,this.handlers={},this.id=i,this.loaded=s,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):r.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=c||function(){t.loaded=!0,t.process()},!function(e){var t=pbjs.adUnits,n=d()(t,(function(t){return t.code===e}));return!!(n&&n.renderer&&n.renderer.url&&n.renderer.render)}(l)?Object(a.a)(n,"outstream",this.callback):r.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(l))}function c(e){return!(!e||!e.url)}function s(e,t){e.render(t)}i.install=function(e){return new i({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},i.prototype.getConfig=function(){return this.config},i.prototype.setRender=function(e){this.render=e},i.prototype.setEventHandlers=function(e){this.handlers=e},i.prototype.handleVideoEvent=function(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),r.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(n))},i.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){r.logError("Error processing Renderer command: ",e)}}}}]);