"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.MaybeHiddenAd=exports.Ad=exports.stateToProps=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_hide=_interopRequireDefault(require("../../hoc/hide")),_context=require("../context"),_connector=_interopRequireDefault(require("../../hoc/connector")),_withRaf=_interopRequireDefault(require("../../utils/withRaf")),_inViewport=_interopRequireDefault(require("../../utils/inViewport")),_googletag=require("../../utils/googletag");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Ad=function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"isFunction",function(a){return"function"==typeof a}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"breakPointRefresh",function(){c.canRefresh&&c.refresh()}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"withAdProps",function(a){return _objectSpread({id:c.id,ref:c.ref},a)}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"onSlotOnload",function(){return c.handleGPTEvent(_googletag.events.slotOnLoad,c.props.onSlotOnLoad)}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"onSlotRenderEnded",function(){return c.handleGPTEvent(_googletag.events.slotRenderEnded,c.props.onSlotRenderEnded)}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"onImpressionViewable",function(){return c.handleGPTEvent(_googletag.events.impressionViewable,c.props.onImpressionViewable)}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"onSlotVisibilityChanged",function(){return c.handleGPTEvent(_googletag.events.slotVisibilityChanged,c.props.onSlotVisibilityChanged)}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"handleCustomRefreshEvent",function(a){var b=a.detail;return console.log("called",b),b.id===c.id?c.canRefresh?void c.refresh():void console.log("Ad has to call window.googletag.display before triggering a refresh."):void 0}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"imperativeRefresh",function(){return c.canRefresh?void c.refresh():void console.log("Ad has to call window.googletag.display before triggering a refresh.")}),c.slot=null,c.listeners=[],c.displayed=!1,c.refreshedOnce=!1,c.refreshWhenVisible=(0,_withRaf.default)(c.refreshWhenVisible.bind(_assertThisInitialized(_assertThisInitialized(c)))),c.refresh=c.refresh.bind(_assertThisInitialized(_assertThisInitialized(c))),c.id=a.id||a.generateId(a.type),c}return _inherits(b,a),_createClass(b,[{key:"display",value:function a(){this.props.gpt.display(this.id),this.displayed=!0}},{key:"refresh",value:function a(){this.props.refresh({priority:this.props.priority,data:{bids:this.bidHandler,slot:this.slot}}),this.refreshedOnce=!0}},{key:"refreshWhenVisible",value:function a(){this.props.lazy&&this.isVisible&&!this.refreshedOnce&&(this.define(),window.removeEventListener("scroll",this.refreshWhenVisible))}},{key:"setCollapseEmpty",value:function a(){this.props.setCollapseEmpty&&this.slot.setCollapseEmptyDiv(!0,!0)}},{key:"setTargeting",value:function b(){var a=this;Object.entries(this.props.targeting).forEach(function(b){var c=_slicedToArray(b,2),d=c[0],e=c[1];return a.slot.setTargeting(d,e)})}},{key:"setMappingSize",value:function b(){if(this.props.sizeMap){var a=this.props.sizeMap.reduce(function(a,b){return a.addSize(b.viewPort,b.slots)},this.props.gpt.sizeMapping());this.slot.defineSizeMapping(a.build())}}},{key:"setMQListeners",value:function b(){var a=this;this.props.sizeMap&&this.props.sizeMap.forEach(function(b){var c=_slicedToArray(b.viewPort,1),d=c[0],e=window.matchMedia("(max-width: ".concat(d,"px)"));e.addListener(a.breakPointRefresh),a.listeners.push(function(){return e.removeListener(a.breakPointRefresh)})})}},{key:"unsetMQListeners",value:function a(){this.listeners.forEach(function(a){return a()})}},{key:"handleGPTEvent",value:function d(a,b){var c=this;this.isFunction(b)&&this.props.gpt.addEventListener(a,function(a){a.slot==c.slot&&b(c.withAdProps(a))})}},{key:"define",value:function b(){var a=this;this.props.gpt.cmdPush(function(){a.slot=a.props.gpt.define(a.props.outOfPageSlot,a.props.adUnitPath,a.mapSize,a.id),a.onSlotOnload(),a.onSlotRenderEnded(),a.onImpressionViewable(),a.onSlotVisibilityChanged(),a.setMappingSize(),a.setMQListeners(),a.setCollapseEmpty(),a.setTargeting(),a.display(),a.refresh()})}},{key:"componentDidMount",value:function a(){this.ref.refresh=this.imperativeRefresh,window.addEventListener("refresh-ad",this.handleCustomRefreshEvent),this.props.lazy?(this.refreshWhenVisible(),window.addEventListener("scroll",this.refreshWhenVisible)):this.define()}},{key:"componentWillUnmount",value:function a(){this.unsetMQListeners(),window.removeEventListener("scroll",this.refreshWhenVisible),window.removeEventListener("refresh-ad",this.handleCustomRefreshEvent),this.props.gpt.destroySlots(this.slot)}},{key:"render",value:function b(){var a=this;return _react.default.createElement("div",{id:this.id,ref:function c(b){return a.ref=b},style:_objectSpread({},this.props.style),className:this.props.className})}},{key:"canRefresh",get:function a(){return this.displayed}},{key:"mapSize",get:function b(){var a=this;return this.props.sizeMap?this.props.sizeMap.filter(function(b){var c=_slicedToArray(b.viewPort,1),d=c[0];return d<=a.props.getWindowWidth()}).sort(function(c,a){return c>a}).slice(0,1)[0].slots:this.props.size}},{key:"bidHandler",get:function a(){return this.props.bidHandler?this.props.bidHandler({id:this.id,sizes:this.mapSize}):null}},{key:"isVisible",get:function a(){return(0,_inViewport.default)(this.ref,this.props.lazyOffset)}}]),b}(_react.Component);exports.Ad=Ad,Ad.defaultProps={id:"",size:[],style:{},lazy:!1,priority:1,className:"",sizeMap:null,targeting:{},adUnitPath:"",getWindowWidth:_googletag.getWindowWidth,lazyOffset:-1,type:"default",bidHandler:null,onSlotOnLoad:null,outOfPageSlot:!1,networkId:void 0,onSlotRenderEnded:null,setCollapseEmpty:!1,onImpressionViewable:null,onSlotVisibilityChanged:null,gpt:{define:_googletag.define,display:_googletag.display,cmdPush:_googletag.cmdPush,sizeMapping:_googletag.sizeMapping,destroySlots:_googletag.destroySlots,addEventListener:_googletag.addEventListener}};var MaybeHiddenAd=(0,_hide.default)(Ad);exports.MaybeHiddenAd=MaybeHiddenAd;var stateToProps=function(a,b){var c=a.adUnitPath,d=a.generateId,e=a.lazyOffset,f=a.networkId,g=a.bidHandler,h=_objectWithoutProperties(a,["adUnitPath","generateId","lazyOffset","networkId","bidHandler"]),i=function(a){return a?"/".concat(a):a},j=b.networkId||f,k=[j,b.adUnitPath||c].map(function(a){return i(a)}).join(""),l=b.lazyOffset&&0<=b.lazyOffset?b.lazyOffset:e,m=_objectSpread({adUnitPath:k,networkId:j,lazyOffset:l,generateId:d},h);return g&&b.bidHandler?m.bidHandler=function(a){return b.bidHandler(a,g(a))}:g?m.bidHandler=function(a){return g(a,[])}:b.bidHandler&&(m.bidHandler=function(a){return b.bidHandler(a,[])}),m};exports.stateToProps=stateToProps;var _default=(0,_connector.default)(_context.AdsContext,stateToProps)(MaybeHiddenAd);exports.default=_default;