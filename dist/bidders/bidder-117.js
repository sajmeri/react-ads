(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[117],{35:function(e,r,d){"use strict";d.r(r),d.d(r,"spec",(function(){return s}));var t=d(277),i=d(281),n=d(280),a=d(278),o=d(279),u={},c={},s={code:"adspend",aliases:["as"],supportedMediaTypes:[o.b],onBidWon:function(e){var r=e.requestId,d=e.cpm,t=u[r].replace(/\$\{AUCTION_PRICE\}/,d);Object(i.a)(t,null)},isBidRequestValid:function(e){return!!("RUB"===n.b.getConfig("currency.adServerCurrency")&&e.params&&e.params.bidfloor&&e.crumbs.pubcid&&t.checkCookieSupport()&&t.cookiesAreEnabled())},buildRequests:function(e,r){var d=e[Math.floor(Math.random()*e.length)],t=d.bidId,i={id:d.crumbs.pubcid,domain:document.domain},n={ua:navigator.userAgent,ip:""},a={id:p()},o=["RUB"],u=r.timeout,s=e.map((function(e){var r=e.params,d=r.tagId,i=r.placement,n={format:b(e.sizes)},a=void 0!==r.bidfloor?Number(r.bidfloor):1;return c[i]=t,{id:i,tagId:d,banner:n,bidfloor:a,bidfloorcur:"RUB",secure:0}})),m={bidId:t,at:1,site:i,device:n,user:a,imp:s,cur:o,tmax:u};return{method:"POST",url:"https://rtb.com.ru/headerbidding-bid",data:JSON.stringify(m)}},interpretResponse:function(e,r){r.bidderRequest;return""===e.body?[]:e.body.seatbid[0].bid.map((function(r){var d=r.price,t=r.impid;return{cpm:d,requestId:c[t],width:r.w,height:r.h,creativeId:r.adid,dealId:r.dealid,currency:e.body.cur,netRevenue:!0,ttl:1e4,ad:r.adm}}))},getUserSyncs:function(e,r){var d=[];return r.forEach((function(r){if(e.pixelEnabled&&""===r.body){var t=p();d.push({type:"image",url:"https://rtb.com.ru/headerbidding-sync?uid={UUID}".replace("{UUID}",t)})}})),d}},p=function(){var e=document.cookie.indexOf("hb-adspend-id");if(-1===e){var r=t.generateUUID();return document.cookie="".concat("hb-adspend-id","=").concat(r,"; path=/"),r}var d=e+"hb-adspend-id".length+1;return document.cookie.substring(d,d+36)},b=function(e){return e.map((function(e){return{w:e[0],h:e[1]}}))};Object(a.registerBidder)(s)}}]);