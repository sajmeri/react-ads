(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[165],{116:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"spec",(function(){return I}));var r=n(277),i=n(280),o=n(279),a=n(283),c=n.n(a),d=n(278);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f={member:"YcXr87z2lpbB"},m=[o.b,o.d],b={},g=null;function v(t){var n,i,o,a,c,d,u,s;if(b.vw)return b;try{i=(n=e.top).screen,o=t||""}catch(e){return r.logError(e),b}return b={vw:n.innerWidth,vh:n.innerHeight,sw:i.width,sh:i.height,pu:o,ce:r.cookiesAreEnabled(),dpr:n.devicePixelRatio||1,jcsi:JSON.stringify({t:0,rq:8}),ogu:(d=(document&&document.getElementsByTagName("head")[0]).querySelector("meta[property='og:url']"),d?d.content:null)},u=window.navigator&&(window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection),(c=(s=u&&(u.downlink||u.bandwidth))?Math.round(1024*s):null)&&(b.ns=c),(a=(o.match(/#ggad=(\w+)$/)||[0,0])[1])&&(b[isNaN(a)?"eAdBuyId":"adBuyId"]=a),b}function y(e,t){return e.replace("AD_JSON",window.btoa(JSON.stringify(t)))}function w(e){var t={};return e.tdid&&(t.tdid=e.tdid),t}function h(e){var t=e.digitrustid&&e.digitrustid.data;if(!t){var n=window.DigiTrust&&window.DigiTrust.getUser?window.DigiTrust.getUser(f):{};t=n&&n.success&&n.identity||""}return!t||t.privacy&&t.privacy.optout?{}:{dt:t.id}}var I={code:"gumgum",aliases:["gg"],isBidRequestValid:function(e){var t=e.params,n=e.adUnitCode;switch(!0){case!!t.inScreen:case!!t.inSlot:case!!t.ICV:case!!t.video:break;default:return r.logWarn("[GumGum] No product selected for the placement ".concat(n,", please check your implementation.")),!1}return!(t.bidfloor&&("number"!=typeof t.bidfloor||!isFinite(t.bidfloor)))||(r.logWarn("[GumGum] bidfloor must be a Number"),!1)},buildRequests:function(e,t){var n=[],o=t&&t.gdprConsent,a=t&&t.uspConsent,c=i.b.getConfig("bidderTimeout"),d=t&&t.refererInfo&&t.refererInfo.referer;return r._each(e,(function(e){var t,i,u,s,f,m,b,y,I,O,S,j,C,P,R,D,U,k=e.bidId,x=e.mediaTypes,z=void 0===x?{}:x,A=e.params,T=void 0===A?{}:A,N=e.schain,E=e.transactionId,q=e.userId,B=void 0===q?{}:q,G=z.banner&&z.banner.sizes,J={};g&&(J.pv=g),T.bidfloor&&(J.fp=T.bidfloor),T.inScreenPubID&&(J.pubId=T.inScreenPubID,J.pi=2),T.inScreen&&(J.t=T.inScreen,J.pi=2),T.inSlot&&(J.si=parseInt(T.inSlot,10),J.pi=3),T.ICV&&(J.ni=parseInt(T.ICV,10),J.pi=5),T.video&&((J=p(J,(t=z.video,i=t.minduration,u=t.maxduration,s=t.linearity,f=t.startdelay,m=t.placement,b=t.protocols,y=void 0===b?[]:b,I=t.playerSize,O=void 0===I?[]:I,S=r.parseSizesInput(O),j=l(S[0]&&S[0].split("x"),2),C=j[0],P=j[1],R="",y.length&&(R=y.join(",")),{mind:i,maxd:u,li:s,sd:f,pt:m,pr:R,viw:C,vih:P}))).t=T.video,J.pi=7),o&&(J.gdprApplies=o.gdprApplies?1:0),J.gdprApplies&&(J.gdprConsent=o.consentString),a&&(J.uspConsent=a),N&&N.nodes&&(J.schain=(U="".concat((D=N).ver,",").concat(D.complete),D.nodes.map((function(e){U+="!".concat(encodeURIComponent(e.asi||""),","),U+="".concat(encodeURIComponent(e.sid||""),","),U+="".concat(encodeURIComponent(e.hp||""),","),U+="".concat(encodeURIComponent(e.rid||""),","),U+="".concat(encodeURIComponent(e.name||""),","),U+="".concat(encodeURIComponent(e.domain||""))})),U)),n.push({id:k,tmax:c,tId:E,pi:J.pi,selector:T.selector,sizes:G||e.sizes,url:"https://g2.gumgum.com/hbid/imp",method:"GET",data:p(J,v(d),h(B),w(B))})})),n},interpretResponse:function(e,t){var n=[],i=e.body,o=p({ad:{price:0,id:0,markup:""},pag:{pvid:0}},i),a=o.ad,d=a.price,f=a.id,m=a.markup,b=a.cur,v=o.cw,w=o.pag.pvid,h=t.data||{},I=h.pi,O=3===I&&9===h.si,S=r.parseSizesInput(t.sizes),j=l(S[0].split("x"),2),C=j[0],P=j[1];return 2!==I&&5!==I||!c()(S,"1x1")||(C="1",P="1"),g=w,f&&n.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},7===I&&{vastXml:m},{ad:v?y(v,p({},i,{bidRequest:t})):m,cpm:O?.1:d,creativeId:f,currency:b||"USD",height:P,netRevenue:!0,requestId:t.id,ttl:60,width:C})),n},getUserSyncs:function(e,t){return t.map((function(e){return e.body&&e.body.pxs&&e.body.pxs.scr||[]})).reduce((function(e,t){return e.concat(t)}),[]).map((function(e){return{type:"f"===e.t?"iframe":"image",url:e.u}}))},supportedMediaTypes:m};Object(d.registerBidder)(I)}.call(this,n(6))}}]);