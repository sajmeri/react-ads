(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[28],{18:function(e,n,r){"use strict";r.r(n),r.d(n,"spec",(function(){return s}));var t=r(278),d=r(280),o=r(279),a=r(287),i=r(277),s={code:"adform",supportedMediaTypes:[o.b,o.d],isBidRequestValid:function(e){return!!e.params.mid},buildRequests:function(e,n){var r,t,o,a,i,s,c,u,l,p,f=d.b.getConfig("currency.adServerCurrency"),g=[],h=[["adxDomain","adx.adform.net"],["fd",1],["url",null],["tid",null]],b=JSON.parse(JSON.stringify(e)),m=b[0]&&b[0].bidder||"adform";for(r=0,t=b.length;r<t;r++){for("net"!==(i=b[r]).params.priceType&&"net"!==i.params.pt||(l="net"),o=0,a=h.length;o<a;o++)(c=i[s=h[o][0]]||i.params[s])&&(i[s]=i.params[s]=null,h[o][1]=c);(u=i.params).transactionId=i.transactionId,u.rcur=u.rcur||f,g.push(v(u))}for(g.unshift("https://"+h[0][1]+"/adx/?rp=4"),l=l||"gross",g.push("pt="+l),g.push("stid="+e[0].auctionId),n&&n.gdprConsent&&n.gdprConsent.gdprApplies&&(p={gdpr:n.gdprConsent.gdprApplies,gdpr_consent:n.gdprConsent.consentString},g.push("gdpr="+p.gdpr),g.push("gdpr_consent="+p.gdpr_consent)),r=1,t=h.length;r<t;r++)s=h[r][0],(c=h[r][1])&&g.push(s+"="+encodeURIComponent(c));return{method:"GET",url:g.join("&"),bids:e,netRevenue:l,bidder:m,gdpr:p};function v(e){var n,r=[];for(n in e)e.hasOwnProperty(n)&&e[n]&&r.push(n,"=",e[n],"&");return encodeURIComponent(btoa(r.join("").slice(0,-1)))}},interpretResponse:function(e,n){for(var r,t,d,s,c={banner:1,vast_content:1,vast_url:1},u=[],l=n.bids,p=e.body,f=0;f<p.length;f++)s="banner"===(t=p[f]).response?o.b:o.d,d=l[f],c[t.response]&&(h(t,i.getAdUnitSizes(d))||s===o.d)&&(r={requestId:d.bidId,cpm:t.win_bid,width:t.width,height:t.height,creativeId:d.bidId,dealId:t.deal_id,currency:t.win_cur,netRevenue:"gross"!==n.netRevenue,ttl:360,ad:t.banner,bidderCode:n.bidder,transactionId:d.transactionId,vastUrl:t.vast_url,vastXml:t.vast_content,mediaType:s},d.renderer||s!==o.d||"outstream"!==i.deepAccess(d,"mediaTypes.video.context")||(r.renderer=a.a.install({id:d.bidId,url:"https://s2.adform.net/banners/scripts/video/outstream/render.js"}),r.renderer.setRender(g)),n.gdpr&&(r.gdpr=n.gdpr.gdpr,r.gdpr_consent=n.gdpr.gdpr_consent),u.push(r));return u;function g(e){e.renderer.push((function(){window.Adform.renderOutstream(e)}))}function h(e,n){for(var r=0,t=n.length;r<t;r++)if(e.width==n[r][0]&&e.height==n[r][1])return!0;return!1}}};Object(t.registerBidder)(s)},284:function(e,n,r){"use strict";r.d(n,"a",(function(){return s}));var t=r(283),d=r.n(t),o=r(277),a={},i=["criteo","outstream","adagio","browsi"];function s(e,n,r){if(n&&e){if(d()(i,n))return a[e]?(r&&"function"==typeof r&&(a[e].loaded?r():a[e].callbacks.push(r)),a[e].tag):(a[e]={loaded:!1,tag:null,callbacks:[]},r&&"function"==typeof r&&a[e].callbacks.push(r),o.logWarn("module ".concat(n," is loading external JavaScript")),function(n,r){var t=document.createElement("script");t.type="text/javascript",t.async=!0,a[e].tag=t,t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,r())}:t.onload=function(){r()};return t.src=n,o.insertElement(t),t}(e,(function(){a[e].loaded=!0;try{for(var n=0;n<a[e].callbacks.length;n++)a[e].callbacks[n]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));o.logError("".concat(n," not whitelisted for loading external JavaScript"))}else o.logError("cannot load external script without url and moduleCode")}},287:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"c",(function(){return s})),r.d(n,"b",(function(){return c}));var t=r(284),d=r(277),o=r(286),a=r.n(o);function i(e){var n=this,r=e.url,o=e.config,i=e.id,s=e.callback,c=e.loaded,u=e.adUnitCode;this.url=r,this.config=o,this.handlers={},this.id=i,this.loaded=c,this.cmd=[],this.push=function(e){"function"==typeof e?n.loaded?e.call():n.cmd.push(e):d.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=s||function(){n.loaded=!0,n.process()},!function(e){var n=pbjs.adUnits,r=a()(n,(function(n){return n.code===e}));return!!(r&&r.renderer&&r.renderer.url&&r.renderer.render)}(u)?Object(t.a)(r,"outstream",this.callback):d.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(u))}function s(e){return!(!e||!e.url)}function c(e,n){e.render(n)}i.install=function(e){return new i({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},i.prototype.getConfig=function(){return this.config},i.prototype.setRender=function(e){this.render=e},i.prototype.setEventHandlers=function(e){this.handlers=e},i.prototype.handleVideoEvent=function(e){var n=e.id,r=e.eventName;"function"==typeof this.handlers[r]&&this.handlers[r](),d.logMessage("Prebid Renderer event for id ".concat(n," type ").concat(r))},i.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){d.logError("Error processing Renderer command: ",e)}}}}]);