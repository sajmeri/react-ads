(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[169],{122:function(e,r,i){"use strict";i.r(r),i.d(r,"spec",(function(){return d})),i.d(r,"ImproveDigitalAdServerJSClient",(function(){return o}));var t=i(277),a=i(278),s=i(280),n=i(279),d={version:"6.1.0",code:"improvedigital",aliases:["id"],supportedMediaTypes:[n.b,n.c,n.d],isBidRequestValid:function(e){return!!(e&&e.params&&(e.params.placementId||e.params.placementKey&&e.params.publisherId))},buildRequests:function(e,r){var i=e.map((function(e){return function(e){var r=t.getBidIdParameter("adUnitCode",e)||null,i=t.getBidIdParameter("placementId",e.params)||null,a=null,d=null;null===i&&(a=t.getBidIdParameter("publisherId",e.params)||null,d=t.getBidIdParameter("placementKey",e.params)||null);var o=t.getBidIdParameter("keyValues",e.params)||null,u=t.getBidIdParameter("size",e.params)||null,l=t.getBidIdParameter("bidId",e),p=t.getBidIdParameter("transactionId",e),h=s.b.getConfig("currency.adServerCurrency"),m=t.getBidIdParameter("bidFloor",e.params),b=t.getBidIdParameter("bidFloorCur",e.params),f={};c(e)&&(f.adTypes=[n.d]);i?f.placementId=i:(a&&(f.publisherId=a),d&&(f.placementKey=d));o&&(f.keyValues=o);!0===s.b.getConfig("improvedigital.usePrebidSizes")&&!c(e)&&e.sizes&&e.sizes.length>0?f.format=e.sizes:u&&u.w&&u.h&&(f.size={},f.size.h=u.h,f.size.w=u.w);l&&(f.id=l);r&&(f.adUnitId=r);p&&(f.transactionId=p);h&&(f.currency=h);m&&(f.bidFloor=m,f.bidFloorCur=b?b.toUpperCase():"USD");return f}(e)})),a=new o("hb"),d={singleRequestMode:!0===s.b.getConfig("improvedigital.singleRequest"),returnObjType:a.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT,libVersion:this.version};r&&r.gdprConsent&&r.gdprConsent.consentString&&(d.gdpr=r.gdprConsent.consentString),r&&r.uspConsent&&(d.usPrivacy=r.uspConsent),r&&r.refererInfo&&r.refererInfo.referer&&(d.referrer=r.refererInfo.referer),d.schain=e[0].schain;var u=a.createRequest(i,d);return u.errors&&u.errors.length>0&&t.logError("ID WARNING 0x01"),u.requests},interpretResponse:function(e,r){var i=[];return t._each(e.body.bid,(function(e){if(e.price&&null!==e.price&&!e.hasOwnProperty("errorCode")&&(e.adm||e.native)){var a={};if(e.native)a.native=function(e){var r={};if(!e||!t.isArray(e.assets))return null;e.assets.forEach((function(e){if(e.title)r.title=e.title.text;else if(e.data)switch(e.data.type){case 1:r.sponsoredBy=e.data.value;break;case 2:r.body=e.data.value;break;case 3:r.rating=e.data.value;break;case 4:r.likes=e.data.value;break;case 5:r.downloads=e.data.value;break;case 6:r.price=e.data.value;break;case 7:r.salePrice=e.data.value;break;case 8:r.phone=e.data.value;break;case 9:r.address=e.data.value;break;case 10:r.body2=e.data.value;break;case 11:r.displayUrl=e.data.value;break;case 12:r.cta=e.data.value}else if(e.img)switch(e.img.type){case 2:r.icon={url:e.img.url,width:e.img.w,height:e.img.h};break;case 3:r.image={url:e.img.url,width:e.img.w,height:e.img.h}}})),e.eventtrackers?(r.impressionTrackers=[],e.eventtrackers.forEach((function(e){if(1===e.event)switch(e.method){case 1:r.impressionTrackers.push(e.url);break;case 2:r.javascriptTrackers='<script src="'.concat(e.url,'"><\/script>')}}))):(r.impressionTrackers=e.imptrackers||[],r.javascriptTrackers=e.jstracker);e.link&&(r.clickUrl=e.link.url,r.clickTrackers=e.link.clicktrackers);e.privacy&&(r.privacyLink=e.privacy);return r}(e.native),a.ortbNative=e.native,e.nurl&&a.native.impressionTrackers.unshift(e.nurl),a.mediaType=n.c;else if(e.ad_type&&"video"===e.ad_type)a.vastXml=e.adm,a.mediaType=n.d;else{var s="";e.nurl&&e.nurl.length>0&&(s='<img src="'.concat(e.nurl,'" width="0" height="0" style="display:none">')),a.ad="".concat(s,"<script>").concat(e.adm,"<\/script>"),a.mediaType=n.b}if(a.adId=e.id,a.cpm=parseFloat(e.price),a.creativeId=e.crid,a.currency=e.currency?e.currency.toUpperCase():"USD",t.isNumber(e.lid)&&"deal_id"===e.buying_type)a.dealId=e.lid;else if(Array.isArray(e.lid)&&Array.isArray(e.buying_type)&&e.lid.length===e.buying_type.length){var d=!1;e.buying_type.forEach((function(r,i){d||"deal_id"===r&&(d=!0,a.dealId=e.lid[i])}))}a.height=e.h,a.netRevenue=!!e.isNet&&e.isNet,a.requestId=e.id,a.ttl=300,a.width=e.w,a.width&&a.height||(a.width=1,a.height=1,r.sizes&&(a.width=r.sizes[0][0],a.height=r.sizes[0][1])),i.push(a)}})),i},getUserSyncs:function(e,r){if(e.pixelEnabled){var i=[];return r.forEach((function(e){e.body.bid.forEach((function(e){t.isArray(e.sync)&&e.sync.forEach((function(e){-1===i.indexOf(e)&&i.push(e)}))}))})),i.map((function(e){return{type:"image",url:e}}))}return[]}};function c(e){var r=t.deepAccess(e,"mediaTypes.video"),i=t.deepAccess(e,"mediaTypes.video.context");return"video"===e.mediaType||r&&"outstream"!==i}function o(e){this.CONSTANTS={AD_SERVER_BASE_URL:"ice.360yield.com",END_POINT:e||"hb",AD_SERVER_URL_PARAM:"jsonp=",CLIENT_VERSION:"JS-6.3.0",MAX_URL_LENGTH:2083,ERROR_CODES:{MISSING_PLACEMENT_PARAMS:2,LIB_VERSION_MISSING:3},RETURN_OBJ_TYPE:{DEFAULT:0,URL_PARAMS_SPLIT:1}},this.getErrorReturn=function(e){return{idMappings:{},requests:{},errorCode:e}},this.createRequest=function(e,r,i){if(!r.libVersion)return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.LIB_VERSION_MISSING);r.returnObjType=r.returnObjType||this.CONSTANTS.RETURN_OBJ_TYPE.DEFAULT,r.adServerBaseUrl="https://"+(r.adServerBaseUrl||this.CONSTANTS.AD_SERVER_BASE_URL);var a,s=[];if(t.isArray(e))for(var n=0;n<e.length;n++)a=this.createImpressionObject(e[n]),s.push(a);else a=this.createImpressionObject(e),s.push(a);var d=!0;r.returnObjType===this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT&&(d=!1);var c={requests:[]};d&&(c.idMappings=[]);for(var o=null,u="".concat(r.adServerBaseUrl,"/").concat(this.CONSTANTS.END_POINT,"?").concat(this.CONSTANTS.AD_SERVER_URL_PARAM),l={bid_request:this.createBasicBidRequestObject(r,i)},p=0;p<s.length;p++)if((a=s[p]).errorCode)(o=o||[]).push({errorCode:a.errorCode,adUnitId:a.adUnitId});else{d&&c.idMappings.push({adUnitId:a.adUnitId,id:a.impressionObject.id}),l.bid_request.imp=l.bid_request.imp||[],l.bid_request.imp.push(a.impressionObject);var h=!1;(u+encodeURIComponent(JSON.stringify(l))).length>this.CONSTANTS.MAX_URL_LENGTH&&(h=!0,l.bid_request.imp.length>1&&(l.bid_request.imp.pop(),d&&c.idMappings.pop(),p--)),!h&&r.singleRequestMode&&p!==s.length-1||(c.requests.push(this.formatRequest(r,l)),l={bid_request:this.createBasicBidRequestObject(r,i)})}return o&&(c.errors=o),c},this.formatRequest=function(e,r){switch(e.returnObjType){case this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT:return{method:"GET",url:"".concat(e.adServerBaseUrl,"/").concat(this.CONSTANTS.END_POINT),data:"".concat(this.CONSTANTS.AD_SERVER_URL_PARAM).concat(encodeURIComponent(JSON.stringify(r)))};default:return{url:"".concat(e.adServerBaseUrl,"/")+"".concat(this.CONSTANTS.END_POINT,"?").concat(this.CONSTANTS.AD_SERVER_URL_PARAM)+encodeURIComponent(JSON.stringify(r))}}},this.createBasicBidRequestObject=function(e,r){var i={secure:1};if(e.requestId?i.id=e.requestId:i.id=t.getUniqueIdentifierStr(),e.domain&&(i.domain=e.domain),e.page&&(i.page=e.page),e.ref&&(i.ref=e.ref),e.callback&&(i.callback=e.callback),e.libVersion&&(i.version=e.libVersion+"-"+this.CONSTANTS.CLIENT_VERSION),e.referrer&&(i.referrer=e.referrer),(e.gdpr||0===e.gdpr)&&(i.gdpr=e.gdpr),e.usPrivacy&&(i.us_privacy=e.usPrivacy),e.schain&&(i.schain=e.schain),r)for(var a in r)i[a]=r[a];return i},this.createImpressionObject=function(e){var r={},i={};if(r.impressionObject=i,e.id?i.id=e.id:i.id=t.getUniqueIdentifierStr(),e.adTypes&&(i.ad_types=e.adTypes),e.adUnitId&&(r.adUnitId=e.adUnitId),e.currency&&(i.currency=e.currency.toUpperCase()),e.bidFloor&&(i.bidfloor=e.bidFloor),e.bidFloorCur&&(i.bidfloorcur=e.bidFloorCur.toUpperCase()),e.placementId&&(i.pid=e.placementId),e.publisherId&&(i.pubid=e.publisherId),e.placementKey&&(i.pkey=e.placementKey),e.transactionId&&(i.tid=e.transactionId),e.keyValues)for(var a in e.keyValues)for(var s=0;s<e.keyValues[a].length;s++)i.kvw=i.kvw||{},i.kvw[a]=i.kvw[a]||[],i.kvw[a].push(e.keyValues[a][s]);if(i.banner={},e.size&&e.size.w&&e.size.h&&(i.banner.w=e.size.w,i.banner.h=e.size.h),e.format&&t.isArray(e.format)){var n=e.format.filter((function(e){return 2===e.length&&t.isInteger(e[0])&&t.isInteger(e[1])&&e[0]>=0&&e[1]>=0})).map((function(e){return{w:e[0],h:e[1]}}));n.length>0&&(i.banner.format=n)}return i.pid||i.pubid||i.pkey||i.banner&&i.banner.w&&i.banner.h||(r.impressionObject=null,r.errorCode=this.CONSTANTS.ERROR_CODES.MISSING_PLACEMENT_PARAMS),r}}Object(a.registerBidder)(d)}}]);