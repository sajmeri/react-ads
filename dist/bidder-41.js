(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"spec",(function(){return p}));var r=t(278),o=t(280),i=t(277),a=t(279),d=t(281),c=t(287),s=[a.b,a.d],l="https://ad.nvivo.tv/";function u(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({sizes:[e.width,e.height],width:e.width,height:e.height,targetId:e.adUnitCode,adResponse:e.adResponse,rendererOptions:{showVolume:!1,allowFullscreen:!1}})}))}function h(e){Object(d.a)(l+"ads/www/admin/plugins/Prebid/tracking/track.php",null,JSON.stringify(e),{withCredentials:!1,method:"POST",crossOrigin:!0})}var p={code:"envivo",supportedMediaTypes:s,isBidRequestValid:function(e){return void 0!==e.params&&parseInt(i.getValue(e.params,"publisherId"))>0},buildRequests:function(e){return{method:"POST",url:l+"ads/www/admin/plugins/Prebid/getAd.php",options:{withCredentials:!1,crossOrigin:!0},data:e}},interpretResponse:function(e,n){var t=e.body,r=[],a=[];return i._each(t,(function(e){e.adResponse={content:e.vastXml,height:e.height,width:e.width},e.ttl=o.b.getConfig("_bidderTimeout"),e.renderer="outstream"===e.context?function(e,n,t){var r=c.a.install({id:n.id,url:n.url,loaded:!1,config:{player_height:e.height,player_width:e.width},adUnitCode:t});try{r.setRender(u)}catch(e){i.logWarn("Prebid Error calling setRender on renderer",e)}return r}(e,{id:e.adUnitCode,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"},e.adUnitCode):void 0,r.push(e)})),a.push({function:"saveResponses",request:n,response:r}),h(a),r},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:l+"ads/www/admin/plugins/Prebid/userSync.php"}]},onBidWon:function(e){var n=[];n.push(e),n[0].function="onBidWon",h(n)},onTimeout:function(e){e.unshift({function:"onTimeout"}),h(e)}};Object(r.registerBidder)(p)},284:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(283),o=t.n(r),i=t(277),a={},d=["criteo","outstream","adagio","browsi"];function c(e,n,t){if(n&&e){if(o()(d,n))return a[e]?(t&&"function"==typeof t&&(a[e].loaded?t():a[e].callbacks.push(t)),a[e].tag):(a[e]={loaded:!1,tag:null,callbacks:[]},t&&"function"==typeof t&&a[e].callbacks.push(t),i.logWarn("module ".concat(n," is loading external JavaScript")),function(n,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,a[e].tag=r,r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,t())}:r.onload=function(){t()};return r.src=n,i.insertElement(r),r}(e,(function(){a[e].loaded=!0;try{for(var n=0;n<a[e].callbacks.length;n++)a[e].callbacks[n]()}catch(e){i.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));i.logError("".concat(n," not whitelisted for loading external JavaScript"))}else i.logError("cannot load external script without url and moduleCode")}},287:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return s}));var r=t(284),o=t(277),i=t(286),a=t.n(i);function d(e){var n=this,t=e.url,i=e.config,d=e.id,c=e.callback,s=e.loaded,l=e.adUnitCode;this.url=t,this.config=i,this.handlers={},this.id=d,this.loaded=s,this.cmd=[],this.push=function(e){"function"==typeof e?n.loaded?e.call():n.cmd.push(e):o.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=c||function(){n.loaded=!0,n.process()},!function(e){var n=pbjs.adUnits,t=a()(n,(function(n){return n.code===e}));return!!(t&&t.renderer&&t.renderer.url&&t.renderer.render)}(l)?Object(r.a)(t,"outstream",this.callback):o.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(l))}function c(e){return!(!e||!e.url)}function s(e,n){e.render(n)}d.install=function(e){return new d({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},d.prototype.getConfig=function(){return this.config},d.prototype.setRender=function(e){this.render=e},d.prototype.setEventHandlers=function(e){this.handlers=e},d.prototype.handleVideoEvent=function(e){var n=e.id,t=e.eventName;"function"==typeof this.handlers[t]&&this.handlers[t](),o.logMessage("Prebid Renderer event for id ".concat(n," type ").concat(t))},d.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){o.logError("Error processing Renderer command: ",e)}}}}]);