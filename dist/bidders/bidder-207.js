(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[207],{172:function(t,e,n){"use strict";n.r(e),n.d(e,"spec",(function(){return d}));var i=n(279),r=n(278),d={code:"otm",supportedMediaTypes:[i.b],isBidRequestValid:function(t){return!!t.params.tid},buildRequests:function(t){return t.map((function(t){var e,n,i,r,d=(e=t.sizes,n=null,i=function(t){return t[0]+"x"+t[1]},r=e.map(i),[[300,250],[240,400],[728,90],[300,600],[970,250],[300,50],[320,100]].forEach((function(t){n||-1!==r.indexOf(i(t))&&(n=t)})),n||e[0]);return{method:"GET",url:"https://ssp.otm-r.com/adjson",data:{tz:(new Date).getTimezoneOffset(),w:d[0],h:d[1],s:t.params.tid,bidid:t.bidId,transactionid:t.transactionId,auctionid:t.auctionId,bidfloor:t.params.bidfloor}}}))},interpretResponse:function(t,e){if(!t||!t.body)return[];var n=[];return t.body.forEach((function(t){t.ad&&n.push({requestId:t.bidid,cpm:t.cpm,width:t.w,height:t.h,creativeId:t.creativeid,currency:t.currency||"RUB",netRevenue:!0,ad:t.ad,ttl:t.ttl,transactionId:t.transactionid})})),n}};Object(r.registerBidder)(d)}}]);