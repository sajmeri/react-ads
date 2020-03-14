(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[249],{236:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return l}));var n=t(277),a=t(278),i=t(279),o=t(283),c=t.n(o);function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=["minduration","maxduration","startdelay","placement","linearity","mimes","protocols","api"],u=["1x1","1x2"],l={code:"synacormedia",supportedMediaTypes:[i.b,i.d],sizeMap:{},isVideoBid:function(e){return void 0!==e.mediaTypes&&e.mediaTypes.hasOwnProperty("video")},isBidRequestValid:function(e){var r=e&&e.params&&e.params.hasOwnProperty("placementId")&&e.params.hasOwnProperty("seatId"),t=e&&Object(n.getAdUnitSizes)(e).filter((function(e){return-1===u.indexOf(e.join("x"))})).length>0;return!(!r||!t)},buildRequests:function(e,r){var t=this;if(e&&e.length&&r){var a=r.refererInfo,i={id:r.auctionId,site:{domain:location.hostname,page:a.referer,ref:document.referrer},device:{ua:navigator.userAgent},imp:[]},o=e[0].schain;o&&(i.source={ext:{schain:o}});var c=null;return e.forEach((function(e,r){if(c&&c!==e.params.seatId)Object(n.logWarn)("Synacormedia: there is an inconsistent seatId: ".concat(e.params.seatId," but only sending bid requests for ").concat(c,", you should double check your configuration"));else{c=e.params.seatId;var a=e.params.placementId,o=e.params.bidfloor?parseFloat(e.params.bidfloor):null;isNaN(o)&&Object(n.logWarn)("Synacormedia: there is an invalid bid floor: ".concat(e.params.bidfloor));var s=parseInt(e.params.pos,10);isNaN(s)&&(Object(n.logWarn)("Synacormedia: there is an invalid POS: ".concat(e.params.pos)),s=0);var d=t.isVideoBid(e)?"video":"banner";Object(n.getAdUnitSizes)(e).filter((function(e){return-1===u.indexOf(e.join("x"))})).forEach((function(r,n){if(r&&2==r.length){var c=r[0],p=r[1],u={id:"".concat(d.substring(0,1)).concat(e.bidId,"-").concat(c,"x").concat(p),tagid:a};null===o||isNaN(o)||(u.bidfloor=o);var l={w:c,h:p,pos:s};"video"===d&&(e.mediaTypes.video&&t.setValidVideoParams(e.mediaTypes.video,e.params.video),e.params.video&&t.setValidVideoParams(e.params.video,l)),u[d]=l,i.imp.push(u)}}))}})),i.imp.length&&c?{method:"POST",url:"".concat("https://prebid.technoratimedia.com","/openrtb/bids/").concat(c,"?src=prebid_prebid_3.11.0"),data:i,options:{contentType:"application/json",withCredentials:!0}}:void 0}},setValidVideoParams:function(e,r){Object.keys(e).filter((function(r){return c()(p,r)&&null!==e[r]&&(!isNaN(parseInt(e[r],10))||!(e[r].length<1))})).forEach((function(t){return r[t]=Array.isArray(e[t])?e[t]:parseInt(e[t],10)}))},interpretResponse:function(e){var r=function(e,r){return r?r.replace(/\${AUCTION_PRICE}/g,e.price):r};if(e.body&&"object"==d(e.body)){var t=e.body,a=t.id,o=t.seatbid,c=[];return a&&o&&o.forEach((function(e){e.bid.forEach((function(t){var n=r(t,t.adm),a=r(t,t.nurl),o=s(t.impid.match(/^([vb])(.*)-(.*)x(.*)$/),5),d=o[1],p=o[2],u=o[3],l=o[4],m="v"==d,f={requestId:p,adId:t.id.replace(/~/g,"-"),cpm:parseFloat(t.price),width:parseInt(u,10),height:parseInt(l,10),creativeId:"".concat(e.seat,"_").concat(t.crid),currency:"USD",netRevenue:!0,mediaType:m?i.d:i.b,ad:n,ttl:60};if(m){var y=s(a.match(/ID=([^&]*)&?/),2)[1];f.videoCacheKey=encodeURIComponent(y),f.vastUrl=a}c.push(f)}))})),c}Object(n.logWarn)("Synacormedia: server returned empty/non-json response: "+JSON.stringify(e.body))},getUserSyncs:function(e,r){var t=[];return e.iframeEnabled?t.push({type:"iframe",url:"".concat("https://ad-cdn.technoratimedia.com","/html/usersync.html?src=prebid_prebid_3.11.0")}):Object(n.logWarn)("Synacormedia: Please enable iframe based user sync."),t}};Object(a.registerBidder)(l)}}]);