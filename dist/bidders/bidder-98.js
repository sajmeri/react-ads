(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[98],{11:function(e,r,t){"use strict";t.r(r),t.d(r,"_getUrlVars",(function(){return s})),t.d(r,"spec",(function(){return c}));var n=t(277),i=t(278),a=["USD","JPY"],s=function(e){for(var r,t={},n=e.slice(e.indexOf("?")+1).split("&"),i=0;i<n.length;i++)t[(r=n[i].split("="))[0]]=r[1];return t},c={code:"7xbid",aliases:["7xb"],supportedMediaTypes:["banner","native"],isBidRequestValid:function(e){return!!e.params.placementId&&(!e.params.hasOwnProperty("currency")||-1!==a.indexOf(e.params.currency)||(n.logInfo("Invalid currency type, we support only JPY and USD!"),!1))},buildRequests:function(e,r){var t,i=[];return r&&r.refererInfo&&(t=r.refererInfo),e.forEach((function(e,a){var s="//bidder.7xbid.com/api/v1/prebid/banner",c={placementid:e.params.placementId,cur:e.params.hasOwnProperty("currency")?e.params.currency:"JPY",ua:navigator.userAgent,loc:n.deepAccess(r,"refererInfo.referer"),topframe:window.parent===window.self?1:0,sw:screen&&screen.width,sh:screen&&screen.height,cb:Math.floor(99999999999*Math.random()),tpaf:1,cks:1,requestid:e.bidId};e.hasOwnProperty("nativeParams")&&(s="//bidder.7xbid.com/api/v1/prebid/native",c.tkf=1,c.ad_track="1",c.apiv="1.1.0"),t&&t.referer?c.referer=t.referer:c.referer="",i.push({method:"GET",url:s,data:n.parseQueryStringParameters(c)})})),i},interpretResponse:function(e,r){var t,n,i=s(r.data),a=e.body||{},c=[];if(a.hasOwnProperty(i.placementid)){var d=a[i.placementid],o={requestId:d.requestid,cpm:d.price,creativeId:d.creativeId,currency:d.cur,netRevenue:!0,ttl:700};d.hasOwnProperty("title")?(o.mediaType="native",o.native={title:d.title,body:d.description,cta:d.cta,sponsoredBy:d.advertiser,clickUrl:(t=d.landingURL,n=window.encodeURIComponent(t),n=n.replace(/'/g,"%27")),impressionTrackers:d.trackings},d.screenshots&&(o.native.image={url:d.screenshots.url,height:d.screenshots.height,width:d.screenshots.width}),d.icon&&(o.native.icon={url:d.icon.url,height:d.icon.height,width:d.icon.width})):(o.ad=d.adm,o.width=d.width,o.height=d.height),c.push(o)}return c},getUserSyncs:function(e,r){return[{type:"image",url:"//bidder.7xbid.com/api/v1/cookie/gen"}]}};Object(i.registerBidder)(c)}}]);