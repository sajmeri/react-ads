(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[81],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"setStorageItem",(function(){return d})),n.d(t,"getStorageItem",(function(){return f})),n.d(t,"removeStorageItem",(function(){return b})),n.d(t,"isPubcidEnabled",(function(){return y})),n.d(t,"getExpInterval",(function(){return h})),n.d(t,"getPubcidConfig",(function(){return E})),n.d(t,"requestBidHook",(function(){return S})),n.d(t,"setCookie",(function(){return I})),n.d(t,"getCookie",(function(){return _})),n.d(t,"setConfig",(function(){return w})),n.d(t,"initPubcid",(function(){return x}));var o=n(277),r=n(280),i=n(289),a=n.n(i),u=n(288),c=n(282);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s={enabled:!0,interval:525600,typeEnabled:"html5",create:!0,extend:!0,pixelUrl:""};function d(e,t,n){try{if(void 0!==n&&null!=n){var r=new Date(Date.now()+60*n*1e3).toUTCString();localStorage.setItem(e+"_exp",r)}localStorage.setItem(e,t)}catch(e){o.logMessage(e)}}function f(e){var t=null;try{var n=localStorage.getItem(e+"_exp");if(n)new Date(n).getTime()-Date.now()>0?t=localStorage.getItem(e):b(e);else t=localStorage.getItem(e)}catch(e){o.logMessage(e)}return t}function b(e){try{localStorage.removeItem(e+"_exp"),localStorage.removeItem(e)}catch(e){o.logMessage(e)}}function m(e,t){var n;return t||(t=s.typeEnabled),"cookie"===t?n=_(e):"html5"===t&&(n=f(e)),"undefined"===n||"null"===n?null:n}function g(e,t,n){e&&t&&("cookie"===s.typeEnabled?I(e,t,n,"Lax"):"html5"===s.typeEnabled&&d(e,t,n))}function v(e,t){if(!e)return!1;t=t||"";var n=u.c(e);n.search.id=encodeURIComponent("pubcid:"+t);var r=u.a(n);return a.a.on(c.EVENTS.AUCTION_END,(function e(){a.a.off(c.EVENTS.AUCTION_END,e),o.triggerPixel(r)})),!0}function y(){return s.enabled}function h(){return s.interval}function E(){return s}function S(e,t){var n=t.adUnits||pbjs.adUnits,r=null;return s.enabled&&s.typeEnabled?("object"===p(window.PublisherCommonId)?(r=window.PublisherCommonId.getId(),o.logMessage("PublisherCommonId: pubcid = "+r)):((r=m("_pubcid"))?s.extend&&(v(s.pixelUrl,r)||g("_pubcid",r,s.interval)):(s.create&&("html5"===s.typeEnabled&&(r=m("_pubcid","cookie")),r||(r=o.generateUUID()),g("_pubcid",r,s.interval),r=m("_pubcid")),v(s.pixelUrl,r)),o.logMessage("pbjs: pubcid = "+r)),n&&r&&n.forEach((function(e){e.bids.forEach((function(e){l(e,{crumbs:{pubcid:r}})}))})),e.call(this,t)):e.call(this,t)}function I(e,t,n,o){var r=new Date;r.setTime(r.getTime()+1e3*n*60),window.document.cookie=e+"="+encodeURIComponent(t)+";path=/;expires="+r.toGMTString()+(o?";SameSite="+o:"")}function _(e){if(e&&window.document.cookie){var t=window.document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]*)\\s*(;|$)");return t?decodeURIComponent(t[2]):null}return null}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enable,n=e.expInterval,r=e.type,i=void 0===r?"html5,cookie":r,a=e.create,u=e.extend,c=e.pixelUrl;void 0!==t&&(s.enabled=t),void 0!==n&&(s.interval=parseInt(n,10)),isNaN(s.interval)&&(s.interval=525600),void 0!==a&&(s.create=a),void 0!==u&&(s.extend=u),void 0!==c&&(s.pixelUrl=c),s.typeEnabled=null;for(var l=i.split(","),p=0;p<l.length;++p){var d=l[p].trim();if("cookie"===d){if(o.cookiesAreEnabled()){s.typeEnabled="cookie";break}}else if("html5"===d&&o.hasLocalStorage()){s.typeEnabled="html5";break}}}function x(){r.b.getConfig("pubcid",(function(e){return w(e.pubcid)})),o.cookiesAreEnabled()&&m("_pubcid_optout","cookie")||o.hasLocalStorage()&&m("_pubcid_optout","html5")||pbjs.requestBids.before(S)}x()},289:function(e,t,n){function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var r=n(277),i=n(282),a=Array.prototype.slice,u=Array.prototype.push,c=r._map(i.EVENTS,(function(e){return e})),l=i.EVENT_ID_PATHS,p=[];e.exports=function(){var e={},t={};function n(t,n){r.logMessage("Emitting event for: "+t);var o=n[0]||{},i=o[l[t]],a=e[t]||{que:[]},c=r._map(a,(function(e,t){return t})),s=[];p.push({eventType:t,args:o,id:i}),i&&r.contains(c,i)&&u.apply(s,a[i].que),u.apply(s,a.que),r._each(s,(function(e){if(e)try{e.apply(null,n)}catch(e){r.logError("Error executing handler:","events.js",e)}}))}return t.on=function(t,n,o){if(function(e){return r.contains(c,e)}(t)){var i=e[t]||{que:[]};o?(i[o]=i[o]||{que:[]},i[o].que.push(n)):i.que.push(n),e[t]=i}else r.logError("Wrong event name : "+t+" Valid event names :"+c)},t.emit=function(e){var t=a.call(arguments,1);n(e,t)},t.off=function(t,n,o){var i=e[t];r.isEmpty(i)||r.isEmpty(i.que)&&r.isEmpty(i[o])||o&&(r.isEmpty(i[o])||r.isEmpty(i[o].que))||(o?r._each(i[o].que,(function(e){var t=i[o].que;e===n&&t.splice(r.indexOf.call(t,e),1)})):r._each(i.que,(function(e){var t=i.que;e===n&&t.splice(r.indexOf.call(t,e),1)})),e[t]=i)},t.get=function(){return e},t.getEvents=function(){var e=[];return r._each(p,(function(t){var n=o({},t);e.push(n)})),e},t}()}}]);