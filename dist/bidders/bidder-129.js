(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[129],{60:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return c}));var n=r(277),i=r(278);function s(e){return e.getTimezoneOffset()<function(e){var t=new Date(e.getFullYear(),0,1),r=new Date(e.getFullYear(),6,1);return Math.max(t.getTimezoneOffset(),r.getTimezoneOffset())}(e)}var c={code:"bidfluence",isBidRequestValid:function(e){return!!e.params.placementId||!!e.params.publisherId},buildRequests:function(e,t){var r,i,c,d=document.getElementsByTagName("body")[0],a=t.refererInfo,o=t.gdprConsent,p=Math.max(window.innerWidth||d.clientWidth||0)+2,u=Math.max(window.innerHeight||d.clientHeight||0)+2,h=screen.height>screen.width?screen.height+"x"+screen.width+"x"+screen.colorDepth:screen.width+"x"+screen.height+"x"+screen.colorDepth,l={v:"2.0",azr:!0,ck:n.cookiesAreEnabled(),re:a?a.referer:"",st:a?a.stack:[],tz:(i=new Date,c=i.getTimezoneOffset(),s(i)&&(c+=60),c.toString()),sr:h,tm:t.timeout,vp:p+"x"+u,sdt:(r=new Date,r.getUTCFullYear()+"/"+("0"+(r.getUTCMonth()+1)).slice(-2)+"/"+("0"+r.getUTCDate()).slice(-2)+" "+("0"+r.getUTCHours()).slice(-2)+":"+("0"+r.getUTCMinutes()).slice(-2)+":"+("0"+r.getUTCSeconds()).slice(-2)),top:!!a&&a.reachedTop,gdpr:!!o&&o.gdprApplies,gdprc:o?o.consentString:"",bids:[]};n._each(e,(function(e){var t=e.params,r=n.parseSizesInput(e.sizes)[0],i=r.split("x")[0],s=r.split("x")[1],c={bid:e.bidId,tid:t.placementId,pid:t.publisherId,rp:t.reservePrice||0,w:i,h:s};l.bids.push(c)}));var g=JSON.stringify(l);return{method:"POST",url:"https://bdf".concat(l.bids[0].pid,".bidfluence.com/Prebid"),data:g,options:{contentType:"text/plain"}}},interpretResponse:function(e,t){var r=[],i=e.body;return n._each(i.Bids,(function(e){var t=e.Cpm||0;if(t>0){var n={requestId:e.BidId,cpm:t,width:e.Width,height:e.Height,creativeId:e.CreativeId,ad:e.Ad,currency:"USD",netRevenue:!0,ttl:360};r.push(n)}})),r},getUserSyncs:function(e){if(e.userSyncs)return e.UserSyncs.map((function(e){return{type:"ifr"===e.Type?"iframe":"image",url:e.Url}}))}};Object(i.registerBidder)(c)}}]);