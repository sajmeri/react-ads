(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[232],{209:function(n,e,i){"use strict";i.r(e),i.d(e,"isSchainObjectValid",(function(){return r})),i.d(e,"isValidSchainConfig",(function(){return d})),i.d(e,"makeBidRequestsHook",(function(){return b})),i.d(e,"init",(function(){return f}));var t=i(280),c=i(290),o=i(277),a={STRICT:"strict",RELAXED:"relaxed",OFF:"off"},s=[];function r(n,e){var i="Detected something wrong within an schain config:",t="";function c(n){t+="\n"+n}function a(){!0===e?Object(o.logError)(i,n,t):Object(o.logWarn)(i,n,t)}if(!Object(o.isPlainObject)(n)&&(c("schain.config should be an object"),a(),e))return!1;if(Object(o.isNumber)(n.complete)&&Object(o.isInteger)(n.complete)||c("schain.config.complete should be an Integer"),Object(o.isStr)(n.ver)||c("schain.config.ver should be a string"),Object(o.hasOwn)(n,"ext")&&(Object(o.isPlainObject)(n.ext)||c("schain.config.ext should be an object")),Object(o.isArray)(n.nodes))n.nodes.forEach((function(n,e){Object(o.isStr)(n.asi)||c("schain.config.nodes[".concat(e,"].asi")+" should be a string"),Object(o.isStr)(n.sid)||c("schain.config.nodes[".concat(e,"].sid")+" should be a string"),Object(o.isNumber)(n.hp)&&Object(o.isInteger)(n.hp)||c("schain.config.nodes[".concat(e,"].hp")+" should be an Integer"),Object(o.hasOwn)(n,"rid")&&(Object(o.isStr)(n.rid)||c("schain.config.nodes[".concat(e,"].rid")+" should be a string")),Object(o.hasOwn)(n,"name")&&(Object(o.isStr)(n.name)||c("schain.config.nodes[".concat(e,"].name")+" should be a string")),Object(o.hasOwn)(n,"domain")&&(Object(o.isStr)(n.domain)||c("schain.config.nodes[".concat(e,"].domain")+" should be a string")),Object(o.hasOwn)(n,"ext")&&(Object(o.isPlainObject)(n.ext)||c("schain.config.nodes[".concat(e,"].ext")+" should be an object"))}));else if(c("schain.config.nodes should be an Array"),a(),e)return!1;return!(t.length>0&&(a(),e))}function d(n){return void 0!==n&&(!!Object(o.isPlainObject)(n)||(Object(o.logError)("Invalid schain object found: the following schain config will not be used as schain is not an object.",n),!1))}function b(n,e){var i=t.b.getConfig("schain"),c=t.b.getBidderConfig();e.forEach((function(n){var e=n.bidderCode,t=function(n){return c[n]&&c[n].schain||i}(e);n.bids.forEach((function(n){var i=function(n,e){var i=a.STRICT;if(d(n)){if(Object(o.isStr)(n.validation)&&-1!=s.indexOf(n.validation)&&(i=n.validation),i===a.OFF)return n.config;if(r(n.config,!(i!==a.STRICT)))return n.config;Object(o.logError)("Invalid schain object found: "+"due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(e,"'.  See above error for details."))}return null}(t,e);i&&(n.schain=i)}))})),n(e)}function f(){c.default.makeBidRequests.after(b)}Object(o._each)(a,(function(n){return s.push(n)})),f()}}]);