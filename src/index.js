
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var react = {exports: {}};

	var react_production_min = {};

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject$7(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject$7(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty$1.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/** @license React v17.0.0
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var l=objectAssign,n=60103,p=60106;react_production_min.Fragment=60107;react_production_min.StrictMode=60108;react_production_min.Profiler=60114;var q=60109,r$1=60110,t=60112;react_production_min.Suspense=60113;var u=60115,v=60116;
	if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");react_production_min.Fragment=w("react.fragment");react_production_min.StrictMode=w("react.strict_mode");react_production_min.Profiler=w("react.profiler");q=w("react.provider");r$1=w("react.context");t=w("react.forward_ref");react_production_min.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
	function y$1(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B$1={};function C(a,b,c){this.props=a;this.context=b;this.refs=B$1;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
	function D$1(){}D$1.prototype=C.prototype;function E$1(a,b,c){this.props=a;this.context=b;this.refs=B$1;this.updater=c||A;}var F$1=E$1.prototype=new D$1;F$1.constructor=E$1;l(F$1,C.prototype);F$1.isPureReactComponent=!0;var G$1={current:null},H$1=Object.prototype.hasOwnProperty,I$1={key:!0,ref:!0,__self:!0,__source:!0};
	function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H$1.call(b,e)&&!I$1.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G$1.current}}
	function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M$1=/\/+/g;function N$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function O$1(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N$1(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M$1,"$&/")+"/"),O$1(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M$1,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
	0;g<a.length;g++){k=a[g];var f=e+N$1(k,g);h+=O$1(k,b,c,f,d);}else if(f=y$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N$1(k,g++),h+=O$1(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P$1(a,b,c){if(null==a)return a;var e=[],d=0;O$1(a,e,"","",function(a){return b.call(c,a,d++)});return e}
	function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R$1={current:null};function S$1(){var a=R$1.current;if(null===a)throw Error(z(321));return a}var T$1={ReactCurrentDispatcher:R$1,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G$1,IsSomeRendererActing:{current:!1},assign:l};
	react_production_min.Children={map:P$1,forEach:function(a,b,c){P$1(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P$1(a,function(){b++;});return b},toArray:function(a){return P$1(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};react_production_min.Component=C;react_production_min.PureComponent=E$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T$1;
	react_production_min.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G$1.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H$1.call(b,f)&&!I$1.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
	key:d,ref:k,props:e,_owner:h}};react_production_min.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r$1,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};react_production_min.createElement=J;react_production_min.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};react_production_min.forwardRef=function(a){return {$$typeof:t,render:a}};react_production_min.isValidElement=L;
	react_production_min.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};react_production_min.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};react_production_min.useCallback=function(a,b){return S$1().useCallback(a,b)};react_production_min.useContext=function(a,b){return S$1().useContext(a,b)};react_production_min.useDebugValue=function(){};react_production_min.useEffect=function(a,b){return S$1().useEffect(a,b)};react_production_min.useImperativeHandle=function(a,b,c){return S$1().useImperativeHandle(a,b,c)};
	react_production_min.useLayoutEffect=function(a,b){return S$1().useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return S$1().useMemo(a,b)};react_production_min.useReducer=function(a,b,c){return S$1().useReducer(a,b,c)};react_production_min.useRef=function(a){return S$1().useRef(a)};react_production_min.useState=function(a){return S$1().useState(a)};react_production_min.version="17.0.0";

	{
	  react.exports = react_production_min;
	}

	var React = react.exports;

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/** @license React v0.20.2
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (exports) {
	var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
	if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
	window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
	E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
	x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
	function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
	function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
	function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
	exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
	exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
	exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
	}(scheduler_production_min));

	{
	  scheduler.exports = scheduler_production_min;
	}

	/** @license React v17.0.0
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var aa=react.exports,m=objectAssign,r=scheduler.exports;function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}
	function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a]);}
	var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
	ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
	pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});
	D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});
	function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
	var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
	if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}
	var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a}var Oa=!1;
	function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
	f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):""}
	function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return ""}}
	function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
	return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
	function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}
	function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
	function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
	function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
	function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function lb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
	floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
	function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
	function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
	function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}
	function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb();}}
	function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
	typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}
	function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
	function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
	c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
	function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId);}}
	function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
	function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return !1}
	function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c);});});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
	function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0}function zc(a,b,c){xc(a)&&c.delete(b);}
	function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}
	function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)));}
	function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift();}
	function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
	fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
	var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
	"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=r.unstable_now;Qc();var F=8;
	function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
	F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
	function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
	function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}
	function Zc(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:$c,ad=Math.log,bd=Math.LN2;function $c(a){return 0===a?32:31-(ad(a)/bd|0)|0}var cd=r.unstable_UserBlockingPriority,dd=r.unstable_runWithPriority,ed=!0;function fd(a,b,c,d){Kb||Ib();var e=gd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function hd(a,b,c,d){dd(cd,gd.bind(null,a,b,c,d));}
	function gd(a,b,c,d){if(ed){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d);}id$1(a,b,d,null,c);}}}}
	function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}id$1(a,b,d,e,c);return null}var jd=null,kd=null,ld=null;
	function md(){if(ld)return ld;var a,b=kd,c=b.length,d,e="value"in jd?jd.value:jd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ld=e.slice(a,1<d?1-d:void 0)}function nd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function od(){return !0}function pd(){return !1}
	function qd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?od:pd;this.isPropagationStopped=pd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
	(a.returnValue=!1),this.isDefaultPrevented=od);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=od);},persist:function(){},isPersistent:od});return b}
	var rd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=qd(rd),td=m({},rd,{view:0,detail:0}),ud=qd(td),vd,wd,xd,zd=m({},td,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
	a)return a.movementX;a!==xd&&(xd&&"mousemove"===a.type?(vd=a.screenX-xd.screenX,wd=a.screenY-xd.screenY):wd=vd=0,xd=a);return vd},movementY:function(a){return "movementY"in a?a.movementY:wd}}),Ad=qd(zd),Bd=m({},zd,{dataTransfer:0}),Cd=qd(Bd),Dd=m({},td,{relatedTarget:0}),Ed=qd(Dd),Fd=m({},rd,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=qd(Fd),Hd=m({},rd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Id=qd(Hd),Jd=m({},rd,{data:0}),Kd=qd(Jd),Ld={Esc:"Escape",
	Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
	119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Od(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Nd[a])?!!b[a]:!1}function yd(){return Od}
	var Pd=m({},td,{key:function(a){if(a.key){var b=Ld[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=nd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Md[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(a){return "keypress"===a.type?nd(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
	a.type?nd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Qd=qd(Pd),Rd=m({},zd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=qd(Rd),Td=m({},td,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),Ud=qd(Td),Vd=m({},rd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=qd(Vd),Xd=m({},zd,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
	deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=qd(Xd),Zd=[9,13,27,32],$d=fa&&"CompositionEvent"in window,ae=null;fa&&"documentMode"in document&&(ae=document.documentMode);var be=fa&&"TextEvent"in window&&!ae,ce=fa&&(!$d||ae&&8<ae&&11>=ae),de=String.fromCharCode(32),ee=!1;
	function fe(a,b){switch(a){case "keyup":return -1!==Zd.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function ge(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var he=!1;function ie(a,b){switch(a){case "compositionend":return ge(b);case "keypress":if(32!==b.which)return null;ee=!0;return de;case "textInput":return a=b.data,a===de&&ee?null:a;default:return null}}
	function je(a,b){if(he)return "compositionend"===a||!$d&&fe(a,b)?(a=md(),ld=kd=jd=null,he=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return ce&&"ko"!==b.locale?null:b.data;default:return null}}
	var ke={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function le(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!ke[a.type]:"textarea"===b?!0:!1}function me(a,b,c,d){Eb(d);b=ne(b,"onChange");0<b.length&&(c=new sd("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var oe=null,pe=null;function qe(a){re(a,0);}function se(a){var b=te(a);if(Wa(b))return a}
	function ue(a,b){if("change"===a)return b}var ve=!1;if(fa){var we;if(fa){var xe="oninput"in document;if(!xe){var ye=document.createElement("div");ye.setAttribute("oninput","return;");xe="function"===typeof ye.oninput;}we=xe;}else we=!1;ve=we&&(!document.documentMode||9<document.documentMode);}function ze(){oe&&(oe.detachEvent("onpropertychange",Ae),pe=oe=null);}function Ae(a){if("value"===a.propertyName&&se(pe)){var b=[];me(b,pe,a,xb(a));a=qe;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}
	function Be(a,b,c){"focusin"===a?(ze(),oe=b,pe=c,oe.attachEvent("onpropertychange",Ae)):"focusout"===a&&ze();}function Ce(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return se(pe)}function De(a,b){if("click"===a)return se(b)}function Ee(a,b){if("input"===a||"change"===a)return se(b)}function Fe(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var Ge="function"===typeof Object.is?Object.is:Fe,He=Object.prototype.hasOwnProperty;
	function Ie(a,b){if(Ge(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!He.call(b,c[d])||!Ge(a[c[d]],b[c[d]]))return !1;return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	var Oe=fa&&"documentMode"in document&&11>=document.documentMode,Pe=null,Qe=null,Re=null,Se=!1;
	function Te(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Se||null==Pe||Pe!==Xa(d)||(d=Pe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Re&&Ie(Re,d)||(Re=d,d=ne(Qe,"onSelect"),0<d.length&&(b=new sd("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Pe)));}
	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
	0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ue="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ve=0;Ve<Ue.length;Ve++)Nc.set(Ue[Ve],0);ea("onMouseEnter",["mouseout","mouseover"]);
	ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var We="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xe=new Set("cancel close invalid load scroll toggle".split(" ").concat(We));
	function Ye(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}
	function re(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ye(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ye(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
	function G(a,b){var c=Ze(b),d=a+"__bubble";c.has(d)||($e(b,a,2,!1),c.add(d));}var af="_reactListening"+Math.random().toString(36).slice(2);function bf(a){a[af]||(a[af]=!0,ba.forEach(function(b){Xe.has(b)||cf(b,!1,a,null);cf(b,!0,a,null);}));}
	function cf(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Xe.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=Ze(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),$e(f,a,e,b),g.add(h));}
	function $e(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=fd;break;case 1:e=hd;break;default:e=gd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
	function id$1(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Nb(function(){var d=f,e=xb(c),g=[];
	a:{var h=Mc.get(a);if(void 0!==h){var k=sd,x=a;switch(a){case "keypress":if(0===nd(c))break a;case "keydown":case "keyup":k=Qd;break;case "focusin":x="focus";k=Ed;break;case "focusout":x="blur";k=Ed;break;case "beforeblur":case "afterblur":k=Ed;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Ad;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
	Cd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Ud;break;case Ic:case Jc:case Kc:k=Gd;break;case Lc:k=Wd;break;case "scroll":k=ud;break;case "wheel":k=Yd;break;case "copy":case "cut":case "paste":k=Id;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Sd;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
	t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(df(t,v,q))));if(z)break;t=t.return;}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ef]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
	x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Ad;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Sd,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:te(k);q=null==x?h:te(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=ff(q))t++;q=0;for(v=u;v;v=ff(v))q++;for(;0<t-q;)w=ff(w),t--;for(;0<q-t;)u=
	ff(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=ff(w);u=ff(u);}w=null;}else w=null;null!==k&&gf(g,h,k,w,!1);null!==x&&null!==z&&gf(g,z,x,w,!0);}}}a:{h=d?te(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ue;else if(le(h))if(ve)J=Ee;else {J=Ce;var K=Be;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=De);if(J&&(J=J(a,d))){me(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
	K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?te(d):window;switch(a){case "focusin":if(le(K)||"true"===K.contentEditable)Pe=K,Qe=d,Re=null;break;case "focusout":Re=Qe=Pe=null;break;case "mousedown":Se=!0;break;case "contextmenu":case "mouseup":case "dragend":Se=!1;Te(g,c,e);break;case "selectionchange":if(Oe)break;case "keydown":case "keyup":Te(g,c,e);}var Q;if($d)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
	case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else he?fe(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(ce&&"ko"!==c.locale&&(he||"onCompositionStart"!==L?"onCompositionEnd"===L&&he&&(Q=md()):(jd=e,kd="value"in jd?jd.value:jd.textContent,he=!0)),K=ne(d,L),0<K.length&&(L=new Kd(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=ge(c),null!==Q&&(L.data=Q))));if(Q=be?ie(a,c):je(a,c))d=ne(d,"onBeforeInput"),0<d.length&&(e=new Kd("onBeforeInput",
	"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}re(g,b);});}function df(a,b,c){return {instance:a,listener:b,currentTarget:c}}function ne(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(df(a,f,e)),f=Ob(a,b),null!=f&&d.push(df(a,f,e)));a=a.return;}return d}function ff(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function gf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(df(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(df(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}function hf(){}var jf=null,kf=null;function lf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
	function mf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var nf="function"===typeof setTimeout?setTimeout:void 0,of="function"===typeof clearTimeout?clearTimeout:void 0;function pf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}
	function qf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function rf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var sf=0;function tf(a){return {$$typeof:Ga,toString:a,valueOf:a}}var uf=Math.random().toString(36).slice(2),vf="__reactFiber$"+uf,wf="__reactProps$"+uf,ef="__reactContainer$"+uf,xf="__reactEvents$"+uf;
	function wc(a){var b=a[vf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ef]||c[vf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=rf(a);null!==a;){if(c=a[vf])return c;a=rf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[vf]||a[ef];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function te(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[wf]||null}
	function Ze(a){var b=a[xf];void 0===b&&(b=a[xf]=new Set);return b}var yf=[],zf=-1;function Af(a){return {current:a}}function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--);}function I(a,b){zf++;yf[zf]=a.current;a.current=b;}var Bf={},M=Af(Bf),N=Af(!1),Cf=Bf;
	function Df(a,b){var c=a.type.contextTypes;if(!c)return Bf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ef(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ff(){H(N);H(M);}function Gf(a,b,c){if(M.current!==Bf)throw Error(y(168));I(M,b);I(N,c);}
	function Hf(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function If(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Bf;Cf=M.current;I(M,a);I(N,N.current);return !0}function Jf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=Hf(a,b,Cf),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}
	var Kf=null,Lf=null,Mf=r.unstable_runWithPriority,Nf=r.unstable_scheduleCallback,Of=r.unstable_cancelCallback,Pf=r.unstable_shouldYield,Qf=r.unstable_requestPaint,Rf=r.unstable_now,Sf=r.unstable_getCurrentPriorityLevel,Tf=r.unstable_ImmediatePriority,Uf=r.unstable_UserBlockingPriority,Vf=r.unstable_NormalPriority,Wf=r.unstable_LowPriority,Xf=r.unstable_IdlePriority,Yf={},Zf=void 0!==Qf?Qf:function(){},$f=null,ag=null,bg=!1,cg=Rf(),O=1E4>cg?Rf:function(){return Rf()-cg};
	function dg(){switch(Sf()){case Tf:return 99;case Uf:return 98;case Vf:return 97;case Wf:return 96;case Xf:return 95;default:throw Error(y(332));}}function eg(a){switch(a){case 99:return Tf;case 98:return Uf;case 97:return Vf;case 96:return Wf;case 95:return Xf;default:throw Error(y(332));}}function fg(a,b){a=eg(a);return Mf(a,b)}function gg(a,b,c){a=eg(a);return Nf(a,b,c)}function hg(){if(null!==ag){var a=ag;ag=null;Of(a);}ig();}
	function ig(){if(!bg&&null!==$f){bg=!0;var a=0;try{var b=$f;fg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});$f=null;}catch(c){throw null!==$f&&($f=$f.slice(a+1)),Nf(Tf,hg),c;}finally{bg=!1;}}}var jg=ra.ReactCurrentBatchConfig;function kg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var lg=Af(null),mg=null,ng=null,og=null;function pg(){og=ng=mg=null;}
	function qg(a){var b=lg.current;H(lg);a.type._context._currentValue=b;}function rg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}function sg(a,b){mg=a;og=ng=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(tg=!0),a.firstContext=null);}
	function ug(a,b){if(og!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)og=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===ng){if(null===mg)throw Error(y(308));ng=b;mg.dependencies={lanes:0,firstContext:b,responders:null};}else ng=ng.next=b;}return a._currentValue}var vg=!1;function wg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}
	function xg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function yg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function zg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
	function Ag(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
	b;c.lastBaseUpdate=b;}
	function Bg(a,b,c,d){var e=a.updateQueue;vg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
	next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:vg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
	f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Cg|=g;a.lanes=g;a.memoizedState=A;}}function Dg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d);}}}var Eg=(new aa.Component).refs;
	function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
	var Jg={isMounted:function(a){return (a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Gg(),e=Hg(a),f=yg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);zg(a,f);Ig(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Gg(),e=Hg(a),f=yg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);zg(a,f);Ig(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Gg(),d=Hg(a),e=yg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
	b);zg(a,e);Ig(a,d,c);}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
	function Lg(a,b,c){var d=!1,e=Bf;var f=b.contextType;"object"===typeof f&&null!==f?f=ug(f):(e=Ef(b)?Cf:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Df(a,e):Bf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null);}
	function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;wg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=ug(f):(f=Ef(b)?Cf:M.current,e.context=Df(a,f));Bg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
	(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),Bg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Og=Array.isArray;
	function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode;}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
	function Qg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
	function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
	c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
	Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case ta:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||La(b))return b=Wg(b,
	a.mode,c,null),b.return=a,b;Qg(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Og(c)||La(c))return null!==e?null:n(a,b,c,d,null);Qg(a,c);}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
	null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Qg(b,d);}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
	n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
	h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
	u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
	d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ua?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
	Vg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g=Af(Zg),ah=Af(Zg),bh=Af(Zg);
	function ch(a){if(a===Zg)throw Error(y(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H($g);I($g,b);}function eh(){H($g);H(ah);H(bh);}function fh(a){ch(bh.current);var b=ch($g.current);var c=mb(b,a.type);b!==c&&(I(ah,a),I($g,c));}function gh(a){ah.current===a&&(H($g),H(ah));}var P=Af(0);
	function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var ih=null,jh=null,kh=!1;
	function lh(a,b){var c=mh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function nh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
	function oh(a){if(kh){var b=jh;if(b){var c=b;if(!nh(a,b)){b=qf(c.nextSibling);if(!b||!nh(a,b)){a.flags=a.flags&-1025|2;kh=!1;ih=a;return}lh(ih,c);}ih=a;jh=qf(b.firstChild);}else a.flags=a.flags&-1025|2,kh=!1,ih=a;}}function ph(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ih=a;}
	function qh(a){if(a!==ih)return !1;if(!kh)return ph(a),kh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!mf(b,a.memoizedProps))for(b=jh;b;)lh(a,b),b=qf(b.nextSibling);ph(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){jh=qf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}jh=null;}}else jh=ih?qf(a.stateNode.nextSibling):null;return !0}
	function rh(){jh=ih=null;kh=!1;}var sh=[];function th(){for(var a=0;a<sh.length;a++)sh[a]._workInProgressVersionPrimary=null;sh.length=0;}var uh=ra.ReactCurrentDispatcher,vh=ra.ReactCurrentBatchConfig,wh=0,R=null,S=null,T=null,xh=!1,yh=!1;function zh(){throw Error(y(321));}function Ah(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!Ge(a[c],b[c]))return !1;return !0}
	function Bh(a,b,c,d,e,f){wh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;uh.current=null===a||null===a.memoizedState?Ch:Dh;a=c(d,e);if(yh){f=0;do{yh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;uh.current=Eh;a=c(d,e);}while(yh)}uh.current=Fh;b=null!==S&&null!==S.next;wh=0;T=S=R=null;xh=!1;if(b)throw Error(y(300));return a}function Gh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
	function Hh(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T}function Ih(a,b){return "function"===typeof b?b(a):b}
	function Jh(a){var b=Hh(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((wh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
	eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Cg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;Ge(d,b.memoizedState)||(tg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
	function Kh(a){var b=Hh(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Ge(f,b.memoizedState)||(tg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
	function Lh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(wh&a)===a)b._workInProgressVersionPrimary=d,sh.push(b);if(a)return c(b._source);sh.push(b);throw Error(y(350));}
	function Mh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=uh.current,k=h.useState(function(){return Lh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!Ge(g,a)){a=c(b._source);Ge(n,a)||(l(a),a=Hg(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
	e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Hg(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}})},[b,d]);Ge(C,c)&&Ge(x,b)&&Ge(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Ih,lastRenderedState:n},a.dispatch=l=Nh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Lh(e,b,c),k.memoizedState=k.baseState=n);return n}
	function Oh(a,b,c){var d=Hh();return Mh(d,a,b,c)}function Ph(a){var b=Gh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Ih,lastRenderedState:a};a=a.dispatch=Nh.bind(null,R,a);return [b.memoizedState,a]}
	function Qh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Rh(a){var b=Gh();a={current:a};return b.memoizedState=a}function Sh(){return Hh().memoizedState}function Th(a,b,c,d){var e=Gh();R.flags|=a;e.memoizedState=Qh(1|b,c,void 0,void 0===d?null:d);}
	function Uh(a,b,c,d){var e=Hh();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Ah(d,g.deps)){Qh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Qh(1|b,c,f,d);}function Vh(a,b){return Th(516,4,a,b)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Uh(4,2,a,b)}function Yh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
	function Zh(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Yh.bind(null,b,a),c)}function $h(){}function ai(a,b){var c=Hh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Ah(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function bi(a,b){var c=Hh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Ah(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
	function ci(a,b){var c=dg();fg(98>c?98:c,function(){a(!0);});fg(97<c?97:c,function(){var c=vh.transition;vh.transition=1;try{a(!1),b();}finally{vh.transition=c;}});}
	function Nh(a,b,c){var d=Gg(),e=Hg(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)yh=xh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(Ge(k,h))return}catch(l){}finally{}Ig(a,e,d);}}
	var Fh={readContext:ug,useCallback:zh,useContext:zh,useEffect:zh,useImperativeHandle:zh,useLayoutEffect:zh,useMemo:zh,useReducer:zh,useRef:zh,useState:zh,useDebugValue:zh,useDeferredValue:zh,useTransition:zh,useMutableSource:zh,useOpaqueIdentifier:zh,unstable_isNewReconciler:!1},Ch={readContext:ug,useCallback:function(a,b){Gh().memoizedState=[a,void 0===b?null:b];return a},useContext:ug,useEffect:Vh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Th(4,2,Yh.bind(null,
	b,a),c)},useLayoutEffect:function(a,b){return Th(4,2,a,b)},useMemo:function(a,b){var c=Gh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Gh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Nh.bind(null,R,a);return [d.memoizedState,a]},useRef:Rh,useState:Ph,useDebugValue:$h,useDeferredValue:function(a){var b=Ph(a),c=b[0],d=b[1];Vh(function(){var b=vh.transition;
	vh.transition=1;try{d(a);}finally{vh.transition=b;}},[a]);return c},useTransition:function(){var a=Ph(!1),b=a[0];a=ci.bind(null,a[1]);Rh(a);return [a,b]},useMutableSource:function(a,b,c){var d=Gh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Mh(d,a,b,c)},useOpaqueIdentifier:function(){if(kh){var a=!1,b=tf(function(){a||(a=!0,c("r:"+(sf++).toString(36)));throw Error(y(355));}),c=Ph(b)[1];0===(R.mode&2)&&(R.flags|=516,Qh(5,function(){c("r:"+(sf++).toString(36));},
	void 0,null));return b}b="r:"+(sf++).toString(36);Ph(b);return b},unstable_isNewReconciler:!1},Dh={readContext:ug,useCallback:ai,useContext:ug,useEffect:Wh,useImperativeHandle:Zh,useLayoutEffect:Xh,useMemo:bi,useReducer:Jh,useRef:Sh,useState:function(){return Jh(Ih)},useDebugValue:$h,useDeferredValue:function(a){var b=Jh(Ih),c=b[0],d=b[1];Wh(function(){var b=vh.transition;vh.transition=1;try{d(a);}finally{vh.transition=b;}},[a]);return c},useTransition:function(){var a=Jh(Ih)[0];return [Sh().current,
	a]},useMutableSource:Oh,useOpaqueIdentifier:function(){return Jh(Ih)[0]},unstable_isNewReconciler:!1},Eh={readContext:ug,useCallback:ai,useContext:ug,useEffect:Wh,useImperativeHandle:Zh,useLayoutEffect:Xh,useMemo:bi,useReducer:Kh,useRef:Sh,useState:function(){return Kh(Ih)},useDebugValue:$h,useDeferredValue:function(a){var b=Kh(Ih),c=b[0],d=b[1];Wh(function(){var b=vh.transition;vh.transition=1;try{d(a);}finally{vh.transition=b;}},[a]);return c},useTransition:function(){var a=Kh(Ih)[0];return [Sh().current,
	a]},useMutableSource:Oh,useOpaqueIdentifier:function(){return Kh(Ih)[0]},unstable_isNewReconciler:!1},di=ra.ReactCurrentOwner,tg=!1;function ei(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d);}function fi(a,b,c,d,e){c=c.render;var f=b.ref;sg(b,e);d=Bh(a,b,c,d,f,e);if(null!==a&&!tg)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,gi(a,b,e);b.flags|=1;ei(a,b,d,e);return b.child}
	function hi(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ii(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ji(a,b,g,d,e,f);a=Ug(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Ie,c(e,d)&&a.ref===b.ref))return gi(a,b,f);b.flags|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
	function ji(a,b,c,d,e,f){if(null!==a&&Ie(a.memoizedProps,d)&&a.ref===b.ref)if(tg=!1,0!==(f&e))0!==(a.flags&16384)&&(tg=!0);else return b.lanes=a.lanes,gi(a,b,f);return ki(a,b,c,d,f)}
	function li(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},mi(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},mi(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},mi(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,mi(b,d);ei(a,b,e,c);return b.child}
	function ni(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function ki(a,b,c,d,e){var f=Ef(c)?Cf:M.current;f=Df(b,f);sg(b,e);c=Bh(a,b,c,d,f,e);if(null!==a&&!tg)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,gi(a,b,e);b.flags|=1;ei(a,b,c,e);return b.child}
	function oi(a,b,c,d,e){if(Ef(c)){var f=!0;If(b);}else f=!1;sg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=ug(l):(l=Ef(c)?Cf:M.current,l=Df(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
	"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);vg=!1;var p=b.memoizedState;g.state=p;Bg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||vg?("function"===typeof n&&(Fg(b,c,n,d),k=b.memoizedState),(h=vg||Kg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
	typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;xg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:kg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=ug(k):(k=Ef(c)?Cf:M.current,k=Df(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
	"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Mg(b,g,d,k);vg=!1;p=b.memoizedState;g.state=p;Bg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||vg?("function"===typeof C&&(Fg(b,c,C,d),x=b.memoizedState),(l=vg||Kg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
	x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
	h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return pi(a,b,c,d,f,e)}
	function pi(a,b,c,d,e,f){ni(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Jf(b,c,!1),gi(a,b,f);d=b.stateNode;di.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):ei(a,b,h,f);b.memoizedState=d.state;e&&Jf(b,c,!0);return b.child}function qi(a){var b=a.stateNode;b.pendingContext?Gf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Gf(a,b.context,!1);dh(a,b.containerInfo);}
	var ri={dehydrated:null,retryLane:0};
	function si(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&oh(b);a=d.children;e=d.fallback;if(f)return a=ti(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=ri,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ti(b,a,e,c),b.child.memoizedState={baseLanes:c},
	b.memoizedState=ri,b.lanes=33554432,a;c=ui({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=vi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=ri,d;c=wi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=vi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
	{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=ri,d;c=wi(a,b,d.children,c);b.memoizedState=null;return c}function ti(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=ui(b,e,0,null);c=Wg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
	function wi(a,b,c,d){var e=a.child;a=e.sibling;c=Sg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
	function vi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Sg(g,h);null!==a?d=Sg(a,d):(d=Wg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function xi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);rg(a.return,b);}
	function yi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
	function zi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;ei(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&xi(a,c);else if(19===a.tag)xi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);yi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}yi(b,!0,c,null,f,b.lastEffect);break;case "together":yi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
	function gi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Cg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}var Ai,Bi,Ci,Di;
	Ai=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Bi=function(){};
	Ci=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;ch($g.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=hf);}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
	l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
	(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",
	c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Di=function(a,b,c,d){c!==d&&(b.flags|=4);};function Ei(a,b){if(!kh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
	function Fi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ef(b.type)&&Ff(),null;case 3:eh();H(N);H(M);th();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)qh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Bi(b);return null;case 5:gh(b);var e=ch(bh.current);c=b.type;if(null!==a&&null!=b.stateNode)Ci(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
	b.stateNode)throw Error(y(166));return null}a=ch($g.current);if(qh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[vf]=b;d[wf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<We.length;a++)G(We[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
	{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
	hf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[vf]=b;a[wf]=d;Ai(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
	e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<We.length;e++)G(We[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
	gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}switch(c){case "input":Va(a);cb(a,d,!1);
	break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=hf);}lf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Di(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
	c=ch(bh.current);ch($g.current);qh(b)?(d=b.stateNode,c=b.memoizedProps,d[vf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[vf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&qh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=
	4;null===U||0===(Cg&134217727)&&0===(Gi&134217727)||Hi(U,W);}if(d||c)b.flags|=4;return null;case 4:return eh(),Bi(b),null===a&&bf(b.stateNode.containerInfo),null;case 10:return qg(b),null;case 17:return Ef(b.type)&&Ff(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Ei(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=hh(a);if(null!==g){b.flags|=64;Ei(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
	null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
	f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling;}null!==d.tail&&O()>Ii&&(b.flags|=64,f=!0,Ei(d,!1),b.lanes=33554432);}else {if(!f)if(a=hh(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ei(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!kh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ii&&1073741824!==c&&(b.flags|=
	64,f=!0,Ei(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ji(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
	function Ki(a){switch(a.tag){case 1:Ef(a.type)&&Ff();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:eh();H(N);H(M);th();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return eh(),null;case 10:return qg(a),null;case 23:case 24:return Ji(),null;default:return null}}
	function Li(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Mi(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=yg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b);};return c}
	function Ri(a,b,c){c=yg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Mi(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this),Mi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Ti="function"===typeof WeakSet?WeakSet:Set;
	function Ui(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Vi(a,c);}else b.current=null;}function Wi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:kg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&pf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
	function Xi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Yi(c,a),Zi(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:kg(c.type,b.memoizedProps),a.componentDidUpdate(d,
	b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Dg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Dg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&lf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
	return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
	function $i(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
	a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
	function aj(a,b){if(Lf&&"function"===typeof Lf.onCommitFiberUnmount)try{Lf.onCommitFiberUnmount(Kf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Yi(b,c);else {d=b;try{e();}catch(f){Vi(d,f);}}c=c.next;}while(c!==a)}break;case 1:Ui(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Vi(b,
	f);}break;case 5:Ui(b);break;case 4:bj(a,b);}}function cj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function dj(a){return 5===a.tag||3===a.tag||4===a.tag}
	function ej(a){a:{for(var b=a.return;null!==b;){if(dj(b))break a;b=b.return;}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||dj(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
	c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?fj(a,c,b):gj(a,c,b);}
	function fj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=hf));else if(4!==d&&(a=a.child,null!==a))for(fj(a,b,c),a=a.sibling;null!==a;)fj(a,b,c),a=a.sibling;}
	function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling;}
	function bj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(aj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return;}k.sibling.return=k.return;k=k.sibling;}f?(g=e,h=c.stateNode,
	8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(aj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
	function hj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[wf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
	2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
	b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(ij=O(),$i(b.child,!0));jj(b);return;case 19:jj(b);return;case 17:return;case 23:case 24:$i(b,null!==b.memoizedState);return}throw Error(y(163));}function jj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ti);b.forEach(function(b){var d=kj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
	function lj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var mj=Math.ceil,nj=ra.ReactCurrentDispatcher,oj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,pj=0,qj=Af(0),V=0,rj=null,sj=0,Cg=0,Gi=0,tj=0,uj=null,ij=0,Ii=Infinity;function vj(){Ii=O()+500;}var Z=null,Pi=!1,Qi=null,Si=null,wj=!1,xj=null,yj=90,zj=[],Aj=[],Bj=null,Cj=0,Dj=null,Ej=-1,Fj=0,Gj=0,Hj=null,Ij=!1;function Gg(){return 0!==(X&48)?O():-1!==Ej?Ej:Ej=O()}
	function Hg(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===dg()?1:2;0===Fj&&(Fj=sj);if(0!==jg.transition){0!==Gj&&(Gj=null!==uj?uj.pendingLanes:0);a=Fj;var b=4186112&~Gj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=dg();0!==(X&4)&&98===a?a=Xc(12,Fj):(a=Sc(a),a=Xc(a,Fj));return a}
	function Ig(a,b,c){if(50<Cj)throw Cj=0,Dj=null,Error(y(185));a=Jj(a,b);if(null===a)return null;Zc(a,b,c);a===U&&(Gi|=b,4===V&&Hi(a,W));var d=dg();1===b?0!==(X&8)&&0===(X&48)?Kj(a):(Lj(a,c),0===X&&(vj(),hg())):(0===(X&4)||98!==d&&99!==d||(null===Bj?Bj=new Set([a]):Bj.add(a)),Lj(a,c));uj=a;}function Jj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
	function Lj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Yf&&Of(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Yf&&Of(c);}15===b?(c=Kj.bind(null,a),null===$f?($f=[c],ag=Nf(Tf,ig)):$f.push(c),
	c=Yf):14===b?c=gg(99,Kj.bind(null,a)):(c=Tc(b),c=gg(c,Mj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
	function Mj(a){Ej=-1;Gj=Fj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Nj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Oj();if(U!==a||W!==d)vj(),Pj(a,d);do try{Qj();break}catch(h){Rj(a,h);}while(1);pg();nj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(sj&Gi))Pj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,pf(a.containerInfo)),c=Wc(a),0!==c&&(d=Sj(a,c)));if(1===d)throw b=rj,Pj(a,0),Hi(a,c),Lj(a,O()),b;a.finishedWork=
	a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Tj(a);break;case 3:Hi(a,c);if((c&62914560)===c&&(d=ij+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Gg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=nf(Tj.bind(null,a),d);break}Tj(a);break;case 4:Hi(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
	c?4320:1960*mj(c/1960))-c;if(10<c){a.timeoutHandle=nf(Tj.bind(null,a),c);break}Tj(a);break;case 5:Tj(a);break;default:throw Error(y(329));}}Lj(a,O());return a.callbackNode===b?Mj.bind(null,a):null}function Hi(a,b){b&=~tj;b&=~Gi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}
	function Kj(a){if(0!==(X&48))throw Error(y(327));Nj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Sj(a,b);0!==(sj&Gi)&&(b=Uc(a,b),c=Sj(a,b));}else b=Uc(a,0),c=Sj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,pf(a.containerInfo)),b=Wc(a),0!==b&&(c=Sj(a,b)));if(1===c)throw c=rj,Pj(a,0),Hi(a,b),Lj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Tj(a);Lj(a,O());return null}
	function Uj(){if(null!==Bj){var a=Bj;Bj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Lj(a,O());});}hg();}function Vj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(vj(),hg());}}function Wj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(vj(),hg());}}function mi(a,b){I(qj,pj);pj|=b;sj|=b;}function Ji(){pj=qj.current;H(qj);}
	function Pj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,of(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Ff();break;case 3:eh();H(N);H(M);th();break;case 5:gh(d);break;case 4:eh();break;case 13:H(P);break;case 19:H(P);break;case 10:qg(d);break;case 23:case 24:Ji();}c=c.return;}U=a;Y=Sg(a.current,null);W=pj=sj=b;V=0;rj=null;tj=Gi=Cg=0;}
	function Rj(a,b){do{var c=Y;try{pg();uh.current=Fh;if(xh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}xh=!1;}wh=0;T=S=R=null;yh=!1;oj.current=null;if(null===c||null===c.return){V=1;rj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
	(h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=yg(-1,1);t.tag=2;zg(h,t);}h.lanes|=1;break a}k=
	void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Ni,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Xj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Li(k,h);p=
	g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Oi(p,f,b);Ag(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Si||!Si.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Ri(p,f,b);Ag(p,L);break a}}p=p.return;}while(null!==p)}Yj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
	function Oj(){var a=nj.current;nj.current=Fh;return null===a?Fh:a}function Sj(a,b){var c=X;X|=16;var d=Oj();U===a&&W===b||Pj(a,b);do try{Zj();break}catch(e){Rj(a,e);}while(1);pg();X=c;nj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function Zj(){for(;null!==Y;)ak(Y);}function Qj(){for(;null!==Y&&!Pf();)ak(Y);}function ak(a){var b=bk(a.alternate,a,pj);a.memoizedProps=a.pendingProps;null===b?Yj(a):Y=b;oj.current=null;}
	function Yj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Fi(c,b,pj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(pj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
	a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Ki(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===V&&(V=5);}function Tj(a){var b=dg();fg(99,ck.bind(null,a,b));return null}
	function ck(a,b){do Nj();while(null!==xj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
	Bj&&0===(d&24)&&Bj.has(a)&&Bj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;oj.current=null;jf=ed;g=Me();if(Ne(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;
	break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;kf={focusedElem:g,selectionRange:h};ed=!1;Hj=null;Ij=!1;Z=d;do try{dk();}catch(va){if(null===
	Z)throw Error(y(330));Vi(Z,va);Z=Z.nextEffect;}while(null!==Z);Hj=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:ej(Z);Z.flags&=-3;break;case 6:ej(Z);Z.flags&=-3;hj(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;hj(Z.alternate,Z);break;case 4:hj(Z.alternate,Z);break;case 8:h=Z;bj(g,h);var J=h.alternate;cj(h);null!==
	J&&cj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Vi(Z,va);Z=Z.nextEffect;}while(null!==Z);v=kf;q=Me();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Le(t.ownerDocument.documentElement,t)){null!==g&&Ne(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
	g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Ke(t,J),f=Ke(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
	0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}ed=!!jf;kf=jf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Xi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Vi(Z,va);Z=Z.nextEffect;}while(null!==Z);Z=null;Zf();X=e;}else a.current=c;if(wj)wj=!1,xj=a,yj=b;else for(Z=d;null!==Z;)b=
	Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Si=null);1===d?a===Dj?Cj++:(Cj=0,Dj=a):Cj=0;c=c.stateNode;if(Lf&&"function"===typeof Lf.onCommitFiberRoot)try{Lf.onCommitFiberRoot(Kf,c,void 0,64===(c.current.flags&64));}catch(va){}Lj(a,O());if(Pi)throw Pi=!1,a=Qi,Qi=null,a;if(0!==(X&8))return null;hg();return null}
	function dk(){for(;null!==Z;){var a=Z.alternate;Ij||null===Hj||(0!==(Z.flags&8)?dc(Z,Hj)&&(Ij=!0):13===Z.tag&&lj(a,Z)&&dc(Z,Hj)&&(Ij=!0));var b=Z.flags;0!==(b&256)&&Wi(a,Z);0===(b&512)||wj||(wj=!0,gg(97,function(){Nj();return null}));Z=Z.nextEffect;}}function Nj(){if(90!==yj){var a=97<yj?97:yj;yj=90;return fg(a,ek)}return !1}function Zi(a,b){zj.push(b,a);wj||(wj=!0,gg(97,function(){Nj();return null}));}function Yi(a,b){Aj.push(b,a);wj||(wj=!0,gg(97,function(){Nj();return null}));}
	function ek(){if(null===xj)return !1;var a=xj;xj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Aj;Aj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y(330));Vi(f,k);}}c=zj;zj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y(330));Vi(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
	null,h.stateNode=null),h=a;X=b;hg();return !0}function fk(a,b,c){b=Li(c,b);b=Oi(a,b,1);zg(a,b);b=Gg();a=Jj(a,1);null!==a&&(Zc(a,1,b),Lj(a,b));}
	function Vi(a,b){if(3===a.tag)fk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){fk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Li(b,a);var e=Ri(c,a,1);zg(c,e);e=Gg();c=Jj(c,1);if(null!==c)Zc(c,1,e),Lj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
	function Xj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Gg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-ij?Pj(a,0):tj|=c);Lj(a,b);}function kj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===dg()?1:2:(0===Fj&&(Fj=sj),b=Yc(62914560&~Fj),0===b&&(b=4194304)));c=Gg();a=Jj(a,b);null!==a&&(Zc(a,b,c),Lj(a,c));}var bk;
	bk=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)tg=!0;else if(0!==(c&d))tg=0!==(a.flags&16384)?!0:!1;else {tg=!1;switch(b.tag){case 3:qi(b);rh();break;case 5:fh(b);break;case 1:Ef(b.type)&&If(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(lg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return si(a,b,c);I(P,P.current&1);b=gi(a,b,c);return null!==
	b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return zi(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,li(a,b,c)}return gi(a,b,c)}else tg=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Df(b,M.current);sg(b,c);e=Bh(null,b,d,a,e,c);b.flags|=1;if("object"===
	typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ef(d)){var f=!0;If(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;wg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternals=b;Ng(b,d,a,c);b=pi(null,b,d,!0,f,c);}else b.tag=0,ei(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
	a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=gk(e);a=kg(e,a);switch(f){case 0:b=ki(null,b,e,a,c);break a;case 1:b=oi(null,b,e,a,c);break a;case 11:b=fi(null,b,e,a,c);break a;case 14:b=hi(null,b,e,kg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:kg(d,e),ki(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:kg(d,e),oi(a,b,d,e,c);case 3:qi(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
	d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;xg(a,b);Bg(b,d,null,c);d=b.memoizedState.element;if(d===e)rh(),b=gi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)jh=qf(b.stateNode.containerInfo.firstChild),ih=b,f=kh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],sh.push(f);c=Yg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else ei(a,b,d,c),rh();b=b.child;}return b;case 5:return fh(b),null===a&&
	oh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,mf(d,e)?g=null:null!==f&&mf(d,f)&&(b.flags|=16),ni(a,b),ei(a,b,g,c),b.child;case 6:return null===a&&oh(b),null;case 13:return si(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):ei(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:kg(d,e),fi(a,b,d,e,c);case 7:return ei(a,b,b.pendingProps,c),b.child;case 8:return ei(a,b,b.pendingProps.children,
	c),b.child;case 12:return ei(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(lg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=Ge(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=gi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
	k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=yg(-1,c&-c),l.tag=2,zg(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);rg(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}ei(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,sg(b,c),e=ug(e,
	f.unstable_observedBits),d=d(e),b.flags|=1,ei(a,b,d,c),b.child;case 14:return e=b.type,f=kg(e,b.pendingProps),f=kg(e.type,f),hi(a,b,e,f,d,c);case 15:return ji(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:kg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ef(d)?(a=!0,If(b)):a=!1,sg(b,c),Lg(b,d,e),Ng(b,d,e,c),pi(null,b,d,!0,a,c);case 19:return zi(a,b,c);case 23:return li(a,b,c);case 24:return li(a,b,c)}throw Error(y(156,b.tag));
	};function hk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function mh(a,b,c,d){return new hk(a,b,c,d)}function ii(a){a=a.prototype;return !(!a||!a.isReactComponent)}
	function gk(a){if("function"===typeof a)return ii(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
	function Sg(a,b){var c=a.alternate;null===c?(c=mh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
	c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ii(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Wg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=mh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=mh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=mh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return ui(c,e,f,b);case Ja:return a=mh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
	typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=mh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Wg(a,b,c,d){a=mh(7,a,d,b);a.lanes=c;return a}function ui(a,b,c,d){a=mh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Tg(a,b,c){a=mh(6,a,null,b);a.lanes=c;return a}
	function Vg(a,b,c){b=mh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function ik(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Array(31).fill(0);this.expirationTimes=Array(31).fill(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Array(31).fill(0);this.mutableSourceEagerHydrationData=
	null;}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	function kk(a,b,c,d){var e=b.current,f=Gg(),g=Hg(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ef(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ef(k)){c=Hf(c,k,h);break a}}c=h;}else c=Bf;null===b.context?b.context=c:b.pendingContext=c;b=yg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
	d&&(b.callback=d);zg(e,b);Ig(e,g,f);return g}function lk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function mk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function nk(a,b){mk(a,b);(a=a.alternate)&&mk(a,b);}function ok(){return null}
	function pk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new ik(a,b,null!=c&&!0===c.hydrate);b=mh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;wg(b);a[ef]=c.current;bf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}
	pk.prototype.render=function(a){kk(a,this._internalRoot,null,null);};pk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;kk(null,a,null,function(){b[ef]=null;});};function qk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
	function rk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new pk(a,0,b?{hydrate:!0}:void 0)}
	function sk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=lk(g);h.call(a);};}kk(b,g,a,e);}else {f=c._reactRootContainer=rk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=lk(g);k.call(a);};}Wj(function(){kk(b,g,a,e);});}return lk(g)}ec=function(a){if(13===a.tag){var b=Gg();Ig(a,4,b);nk(a,4);}};fc=function(a){if(13===a.tag){var b=Gg();Ig(a,67108864,b);nk(a,67108864);}};
	gc=function(a){if(13===a.tag){var b=Gg(),c=Hg(a);Ig(a,c,b);nk(a,c);}};hc=function(a,b){return b()};
	yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Vj;
	Hb=function(a,b,c,d,e){var f=X;X|=4;try{return fg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(vj(),hg());}};Ib=function(){0===(X&49)&&(Uj(),Nj());};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(vj(),hg());}};function tk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qk(b))throw Error(y(200));return jk(a,b,null,c)}var uk={Events:[Cb,te,Db,Eb,Fb,Nj,{current:!1}]},vk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.0",rendererPackageName:"react-dom"};
	var wk={bundleType:vk.bundleType,version:vk.version,rendererPackageName:vk.rendererPackageName,rendererConfig:vk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:vk.findFiberByHostInstance||
	ok,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var xk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xk.isDisabled&&xk.supportsFiber)try{Kf=xk.inject(wk),Lf=xk;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uk;reactDom_production_min.createPortal=tk;
	reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return fg(99,a.bind(null,b))}finally{X=c,hg();}};reactDom_production_min.hydrate=function(a,b,c){if(!qk(b))throw Error(y(200));return sk(null,a,b,!0,c)};
	reactDom_production_min.render=function(a,b,c){if(!qk(b))throw Error(y(200));return sk(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!qk(a))throw Error(y(40));return a._reactRootContainer?(Wj(function(){sk(null,null,a,!1,function(){a._reactRootContainer=null;a[ef]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Vj;reactDom_production_min.unstable_createPortal=function(a,b){return tk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
	reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!qk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return sk(a,b,c,!1,d)};reactDom_production_min.version="17.0.0";

	var schedulerTracing_production_min = {};

	/** @license React v0.20.2
	 * scheduler-tracing.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b=0;schedulerTracing_production_min.__interactionsRef=null;schedulerTracing_production_min.__subscriberRef=null;schedulerTracing_production_min.unstable_clear=function(a){return a()};schedulerTracing_production_min.unstable_getCurrent=function(){return null};schedulerTracing_production_min.unstable_getThreadID=function(){return ++b};schedulerTracing_production_min.unstable_subscribe=function(){};schedulerTracing_production_min.unstable_trace=function(a,d,c){return c()};schedulerTracing_production_min.unstable_unsubscribe=function(){};schedulerTracing_production_min.unstable_wrap=function(a){return a};

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = reactDom_production_min;
	}

	var ReactDOM = reactDom.exports;

	function ownKeys$2(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }

	  return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _extends$1() {
	  _extends$1 = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends$1.apply(this, arguments);
	}

	/**
	 * Actions represent the type of change to a location value.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
	 */
	var Action;

	(function (Action) {
	  /**
	   * A POP indicates a change to an arbitrary index in the history stack, such
	   * as a back or forward navigation. It does not describe the direction of the
	   * navigation, only that the current index changed.
	   *
	   * Note: This is the default action for newly created history objects.
	   */
	  Action["Pop"] = "POP";
	  /**
	   * A PUSH indicates a new entry being added to the history stack, such as when
	   * a link is clicked and a new page loads. When this happens, all subsequent
	   * entries in the stack are lost.
	   */

	  Action["Push"] = "PUSH";
	  /**
	   * A REPLACE indicates the entry at the current index in the history stack
	   * being replaced by a new one.
	   */

	  Action["Replace"] = "REPLACE";
	})(Action || (Action = {}));

	var readOnly = function (obj) {
	  return obj;
	};

	var BeforeUnloadEventType = 'beforeunload';
	var PopStateEventType = 'popstate';
	/**
	 * Browser history stores the location in regular URLs. This is the standard for
	 * most web apps, but it requires some configuration on the server to ensure you
	 * serve the same app at multiple URLs.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
	 */

	function createBrowserHistory(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      _options$window = _options.window,
	      window = _options$window === void 0 ? document.defaultView : _options$window;
	  var globalHistory = window.history;

	  function getIndexAndLocation() {
	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;
	    var state = globalHistory.state || {};
	    return [state.idx, readOnly({
	      pathname: pathname,
	      search: search,
	      hash: hash,
	      state: state.usr || null,
	      key: state.key || 'default'
	    })];
	  }

	  var blockedPopTx = null;

	  function handlePop() {
	    if (blockedPopTx) {
	      blockers.call(blockedPopTx);
	      blockedPopTx = null;
	    } else {
	      var nextAction = Action.Pop;

	      var _getIndexAndLocation = getIndexAndLocation(),
	          nextIndex = _getIndexAndLocation[0],
	          nextLocation = _getIndexAndLocation[1];

	      if (blockers.length) {
	        if (nextIndex != null) {
	          var delta = index - nextIndex;

	          if (delta) {
	            // Revert the POP
	            blockedPopTx = {
	              action: nextAction,
	              location: nextLocation,
	              retry: function retry() {
	                go(delta * -1);
	              }
	            };
	            go(delta);
	          }
	        }
	      } else {
	        applyTx(nextAction);
	      }
	    }
	  }

	  window.addEventListener(PopStateEventType, handlePop);
	  var action = Action.Pop;

	  var _getIndexAndLocation2 = getIndexAndLocation(),
	      index = _getIndexAndLocation2[0],
	      location = _getIndexAndLocation2[1];

	  var listeners = createEvents();
	  var blockers = createEvents();

	  if (index == null) {
	    index = 0;
	    globalHistory.replaceState(_extends$1({}, globalHistory.state, {
	      idx: index
	    }), '');
	  }

	  function createHref(to) {
	    return typeof to === 'string' ? to : createPath(to);
	  } // state defaults to `null` because `window.history.state` does


	  function getNextLocation(to, state) {
	    if (state === void 0) {
	      state = null;
	    }

	    return readOnly(_extends$1({
	      pathname: location.pathname,
	      hash: '',
	      search: ''
	    }, typeof to === 'string' ? parsePath(to) : to, {
	      state: state,
	      key: createKey()
	    }));
	  }

	  function getHistoryStateAndUrl(nextLocation, index) {
	    return [{
	      usr: nextLocation.state,
	      key: nextLocation.key,
	      idx: index
	    }, createHref(nextLocation)];
	  }

	  function allowTx(action, location, retry) {
	    return !blockers.length || (blockers.call({
	      action: action,
	      location: location,
	      retry: retry
	    }), false);
	  }

	  function applyTx(nextAction) {
	    action = nextAction;

	    var _getIndexAndLocation3 = getIndexAndLocation();

	    index = _getIndexAndLocation3[0];
	    location = _getIndexAndLocation3[1];
	    listeners.call({
	      action: action,
	      location: location
	    });
	  }

	  function push(to, state) {
	    var nextAction = Action.Push;
	    var nextLocation = getNextLocation(to, state);

	    function retry() {
	      push(to, state);
	    }

	    if (allowTx(nextAction, nextLocation, retry)) {
	      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),
	          historyState = _getHistoryStateAndUr[0],
	          url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
	      // try...catch because iOS limits us to 100 pushState calls :/


	      try {
	        globalHistory.pushState(historyState, '', url);
	      } catch (error) {
	        // They are going to lose state here, but there is no real
	        // way to warn them about it since the page will refresh...
	        window.location.assign(url);
	      }

	      applyTx(nextAction);
	    }
	  }

	  function replace(to, state) {
	    var nextAction = Action.Replace;
	    var nextLocation = getNextLocation(to, state);

	    function retry() {
	      replace(to, state);
	    }

	    if (allowTx(nextAction, nextLocation, retry)) {
	      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),
	          historyState = _getHistoryStateAndUr2[0],
	          url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading


	      globalHistory.replaceState(historyState, '', url);
	      applyTx(nextAction);
	    }
	  }

	  function go(delta) {
	    globalHistory.go(delta);
	  }

	  var history = {
	    get action() {
	      return action;
	    },

	    get location() {
	      return location;
	    },

	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    back: function back() {
	      go(-1);
	    },
	    forward: function forward() {
	      go(1);
	    },
	    listen: function listen(listener) {
	      return listeners.push(listener);
	    },
	    block: function block(blocker) {
	      var unblock = blockers.push(blocker);

	      if (blockers.length === 1) {
	        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
	      }

	      return function () {
	        unblock(); // Remove the beforeunload listener so the document may
	        // still be salvageable in the pagehide event.
	        // See https://html.spec.whatwg.org/#unloading-documents

	        if (!blockers.length) {
	          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
	        }
	      };
	    }
	  };
	  return history;
	}

	function promptBeforeUnload(event) {
	  // Cancel the event.
	  event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.

	  event.returnValue = '';
	}

	function createEvents() {
	  var handlers = [];
	  return {
	    get length() {
	      return handlers.length;
	    },

	    push: function push(fn) {
	      handlers.push(fn);
	      return function () {
	        handlers = handlers.filter(function (handler) {
	          return handler !== fn;
	        });
	      };
	    },
	    call: function call(arg) {
	      handlers.forEach(function (fn) {
	        return fn && fn(arg);
	      });
	    }
	  };
	}

	function createKey() {
	  return Math.random().toString(36).substr(2, 8);
	}
	/**
	 * Creates a string URL path from the given pathname, search, and hash components.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
	 */


	function createPath(_ref) {
	  var _ref$pathname = _ref.pathname,
	      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
	      _ref$search = _ref.search,
	      search = _ref$search === void 0 ? '' : _ref$search,
	      _ref$hash = _ref.hash,
	      hash = _ref$hash === void 0 ? '' : _ref$hash;
	  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
	  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
	  return pathname;
	}
	/**
	 * Parses a string URL path into its separate pathname, search, and hash components.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
	 */

	function parsePath(path) {
	  var parsedPath = {};

	  if (path) {
	    var hashIndex = path.indexOf('#');

	    if (hashIndex >= 0) {
	      parsedPath.hash = path.substr(hashIndex);
	      path = path.substr(0, hashIndex);
	    }

	    var searchIndex = path.indexOf('?');

	    if (searchIndex >= 0) {
	      parsedPath.search = path.substr(searchIndex);
	      path = path.substr(0, searchIndex);
	    }

	    if (path) {
	      parsedPath.pathname = path;
	    }
	  }

	  return parsedPath;
	}

	/**
	 * React Router v6.3.0
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	const NavigationContext = /*#__PURE__*/react.exports.createContext(null);

	const LocationContext = /*#__PURE__*/react.exports.createContext(null);

	const RouteContext = /*#__PURE__*/react.exports.createContext({
	  outlet: null,
	  matches: []
	});

	function invariant(cond, message) {
	  if (!cond) throw new Error(message);
	}
	/**
	 * A RouteMatch contains info about how a route matched a URL.
	 */

	/**
	 * Matches the given routes to a location and returns the match data.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
	 */
	function matchRoutes(routes, locationArg, basename) {
	  if (basename === void 0) {
	    basename = "/";
	  }

	  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	  let pathname = stripBasename(location.pathname || "/", basename);

	  if (pathname == null) {
	    return null;
	  }

	  let branches = flattenRoutes(routes);
	  rankRouteBranches(branches);
	  let matches = null;

	  for (let i = 0; matches == null && i < branches.length; ++i) {
	    matches = matchRouteBranch(branches[i], pathname);
	  }

	  return matches;
	}

	function flattenRoutes(routes, branches, parentsMeta, parentPath) {
	  if (branches === void 0) {
	    branches = [];
	  }

	  if (parentsMeta === void 0) {
	    parentsMeta = [];
	  }

	  if (parentPath === void 0) {
	    parentPath = "";
	  }

	  routes.forEach((route, index) => {
	    let meta = {
	      relativePath: route.path || "",
	      caseSensitive: route.caseSensitive === true,
	      childrenIndex: index,
	      route
	    };

	    if (meta.relativePath.startsWith("/")) {
	      !meta.relativePath.startsWith(parentPath) ? invariant(false) : void 0;
	      meta.relativePath = meta.relativePath.slice(parentPath.length);
	    }

	    let path = joinPaths([parentPath, meta.relativePath]);
	    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
	    // route tree depth-first and child routes appear before their parents in
	    // the "flattened" version.

	    if (route.children && route.children.length > 0) {
	      !(route.index !== true) ? invariant(false) : void 0;
	      flattenRoutes(route.children, branches, routesMeta, path);
	    } // Routes without a path shouldn't ever match by themselves unless they are
	    // index routes, so don't add them to the list of possible branches.


	    if (route.path == null && !route.index) {
	      return;
	    }

	    branches.push({
	      path,
	      score: computeScore(path, route.index),
	      routesMeta
	    });
	  });
	  return branches;
	}

	function rankRouteBranches(branches) {
	  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
	  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
	}

	const paramRe = /^:\w+$/;
	const dynamicSegmentValue = 3;
	const indexRouteValue = 2;
	const emptySegmentValue = 1;
	const staticSegmentValue = 10;
	const splatPenalty = -2;

	const isSplat = s => s === "*";

	function computeScore(path, index) {
	  let segments = path.split("/");
	  let initialScore = segments.length;

	  if (segments.some(isSplat)) {
	    initialScore += splatPenalty;
	  }

	  if (index) {
	    initialScore += indexRouteValue;
	  }

	  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
	}

	function compareIndexes(a, b) {
	  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
	  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
	  // first. This allows people to have fine-grained control over the matching
	  // behavior by simply putting routes with identical paths in the order they
	  // want them tried.
	  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
	  // so they sort equally.
	  0;
	}

	function matchRouteBranch(branch, pathname) {
	  let {
	    routesMeta
	  } = branch;
	  let matchedParams = {};
	  let matchedPathname = "/";
	  let matches = [];

	  for (let i = 0; i < routesMeta.length; ++i) {
	    let meta = routesMeta[i];
	    let end = i === routesMeta.length - 1;
	    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
	    let match = matchPath({
	      path: meta.relativePath,
	      caseSensitive: meta.caseSensitive,
	      end
	    }, remainingPathname);
	    if (!match) return null;
	    Object.assign(matchedParams, match.params);
	    let route = meta.route;
	    matches.push({
	      params: matchedParams,
	      pathname: joinPaths([matchedPathname, match.pathname]),
	      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
	      route
	    });

	    if (match.pathnameBase !== "/") {
	      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	    }
	  }

	  return matches;
	}
	/**
	 * A PathPattern is used to match on some portion of a URL pathname.
	 */


	/**
	 * Performs pattern matching on a URL pathname and returns information about
	 * the match.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#matchpath
	 */
	function matchPath(pattern, pathname) {
	  if (typeof pattern === "string") {
	    pattern = {
	      path: pattern,
	      caseSensitive: false,
	      end: true
	    };
	  }

	  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
	  let match = pathname.match(matcher);
	  if (!match) return null;
	  let matchedPathname = match[0];
	  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
	  let captureGroups = match.slice(1);
	  let params = paramNames.reduce((memo, paramName, index) => {
	    // We need to compute the pathnameBase here using the raw splat value
	    // instead of using params["*"] later because it will be decoded then
	    if (paramName === "*") {
	      let splatValue = captureGroups[index] || "";
	      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
	    }

	    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "");
	    return memo;
	  }, {});
	  return {
	    params,
	    pathname: matchedPathname,
	    pathnameBase,
	    pattern
	  };
	}

	function compilePath(path, caseSensitive, end) {
	  if (caseSensitive === void 0) {
	    caseSensitive = false;
	  }

	  if (end === void 0) {
	    end = true;
	  }
	  let paramNames = [];
	  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
	  .replace(/^\/*/, "/") // Make sure it has a leading /
	  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
	  .replace(/:(\w+)/g, (_, paramName) => {
	    paramNames.push(paramName);
	    return "([^\\/]+)";
	  });

	  if (path.endsWith("*")) {
	    paramNames.push("*");
	    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
	    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
	  } else {
	    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
	    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
	    // parent routes to matching only their own words and nothing more, e.g. parent
	    // route "/home" should not match "/home2".
	    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
	    // but do not consume the character in the matched path so they can match against
	    // nested paths.
	    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
	  }

	  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
	  return [matcher, paramNames];
	}

	function safelyDecodeURIComponent(value, paramName) {
	  try {
	    return decodeURIComponent(value);
	  } catch (error) {
	    return value;
	  }
	}
	/**
	 * Returns a resolved path object relative to the given pathname.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
	 */


	function resolvePath(to, fromPathname) {
	  if (fromPathname === void 0) {
	    fromPathname = "/";
	  }

	  let {
	    pathname: toPathname,
	    search = "",
	    hash = ""
	  } = typeof to === "string" ? parsePath(to) : to;
	  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
	  return {
	    pathname,
	    search: normalizeSearch(search),
	    hash: normalizeHash(hash)
	  };
	}

	function resolvePathname(relativePath, fromPathname) {
	  let segments = fromPathname.replace(/\/+$/, "").split("/");
	  let relativeSegments = relativePath.split("/");
	  relativeSegments.forEach(segment => {
	    if (segment === "..") {
	      // Keep the root "" segment so the pathname starts at /
	      if (segments.length > 1) segments.pop();
	    } else if (segment !== ".") {
	      segments.push(segment);
	    }
	  });
	  return segments.length > 1 ? segments.join("/") : "/";
	}

	function resolveTo(toArg, routePathnames, locationPathname) {
	  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
	  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
	  // route context. This is explained in `Note on `<Link to>` values` in our
	  // migration guide from v5 as a means of disambiguation between `to` values
	  // that begin with `/` and those that do not. However, this is problematic for
	  // `to` values that do not provide a pathname. `to` can simply be a search or
	  // hash string, in which case we should assume that the navigation is relative
	  // to the current location's pathname and *not* the route pathname.

	  let from;

	  if (toPathname == null) {
	    from = locationPathname;
	  } else {
	    let routePathnameIndex = routePathnames.length - 1;

	    if (toPathname.startsWith("..")) {
	      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
	      // URL segment".  This is a key difference from how <a href> works and a
	      // major reason we call this a "to" value instead of a "href".

	      while (toSegments[0] === "..") {
	        toSegments.shift();
	        routePathnameIndex -= 1;
	      }

	      to.pathname = toSegments.join("/");
	    } // If there are more ".." segments than parent routes, resolve relative to
	    // the root / URL.


	    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	  }

	  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

	  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
	    path.pathname += "/";
	  }

	  return path;
	}
	function getToPathname(to) {
	  // Empty strings should be treated the same as / paths
	  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
	}
	function stripBasename(pathname, basename) {
	  if (basename === "/") return pathname;

	  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
	    return null;
	  }

	  let nextChar = pathname.charAt(basename.length);

	  if (nextChar && nextChar !== "/") {
	    // pathname does not start with basename/
	    return null;
	  }

	  return pathname.slice(basename.length) || "/";
	}
	const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
	const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

	const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

	const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

	/**
	 * Returns the full href for the given "to" value. This is useful for building
	 * custom links that are also accessible and preserve right-click behavior.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#usehref
	 */

	function useHref(to) {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    basename,
	    navigator
	  } = react.exports.useContext(NavigationContext);
	  let {
	    hash,
	    pathname,
	    search
	  } = useResolvedPath(to);
	  let joinedPathname = pathname;

	  if (basename !== "/") {
	    let toPathname = getToPathname(to);
	    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
	    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
	  }

	  return navigator.createHref({
	    pathname: joinedPathname,
	    search,
	    hash
	  });
	}
	/**
	 * Returns true if this component is a descendant of a <Router>.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
	 */

	function useInRouterContext() {
	  return react.exports.useContext(LocationContext) != null;
	}
	/**
	 * Returns the current location object, which represents the current URL in web
	 * browsers.
	 *
	 * Note: If you're using this it may mean you're doing some of your own
	 * "routing" in your app, and we'd like to know what your use case is. We may
	 * be able to provide something higher-level to better suit your needs.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#uselocation
	 */

	function useLocation() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  return react.exports.useContext(LocationContext).location;
	}
	/**
	 * The interface for the navigate() function returned from useNavigate().
	 */

	/**
	 * Returns an imperative method for changing the location. Used by <Link>s, but
	 * may also be used by other elements to change the location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
	 */
	function useNavigate() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    basename,
	    navigator
	  } = react.exports.useContext(NavigationContext);
	  let {
	    matches
	  } = react.exports.useContext(RouteContext);
	  let {
	    pathname: locationPathname
	  } = useLocation();
	  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
	  let activeRef = react.exports.useRef(false);
	  react.exports.useEffect(() => {
	    activeRef.current = true;
	  });
	  let navigate = react.exports.useCallback(function (to, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    if (!activeRef.current) return;

	    if (typeof to === "number") {
	      navigator.go(to);
	      return;
	    }

	    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

	    if (basename !== "/") {
	      path.pathname = joinPaths([basename, path.pathname]);
	    }

	    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
	  }, [basename, navigator, routePathnamesJson, locationPathname]);
	  return navigate;
	}
	/**
	 * Resolves the pathname of the given `to` value against the current location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
	 */

	function useResolvedPath(to) {
	  let {
	    matches
	  } = react.exports.useContext(RouteContext);
	  let {
	    pathname: locationPathname
	  } = useLocation();
	  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
	  return react.exports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
	}
	/**
	 * Returns the element of the route that matched the current location, prepared
	 * with the correct context to render the remainder of the route tree. Route
	 * elements in the tree must render an <Outlet> to render their child route's
	 * element.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useroutes
	 */

	function useRoutes(routes, locationArg) {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    matches: parentMatches
	  } = react.exports.useContext(RouteContext);
	  let routeMatch = parentMatches[parentMatches.length - 1];
	  let parentParams = routeMatch ? routeMatch.params : {};
	  routeMatch ? routeMatch.pathname : "/";
	  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	  routeMatch && routeMatch.route;

	  let locationFromContext = useLocation();
	  let location;

	  if (locationArg) {
	    var _parsedLocationArg$pa;

	    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
	    location = parsedLocationArg;
	  } else {
	    location = locationFromContext;
	  }

	  let pathname = location.pathname || "/";
	  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
	  let matches = matchRoutes(routes, {
	    pathname: remainingPathname
	  });

	  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
	    params: Object.assign({}, parentParams, match.params),
	    pathname: joinPaths([parentPathnameBase, match.pathname]),
	    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
	  })), parentMatches);
	}
	function _renderMatches(matches, parentMatches) {
	  if (parentMatches === void 0) {
	    parentMatches = [];
	  }

	  if (matches == null) return null;
	  return matches.reduceRight((outlet, match, index) => {
	    return /*#__PURE__*/react.exports.createElement(RouteContext.Provider, {
	      children: match.route.element !== undefined ? match.route.element : outlet,
	      value: {
	        outlet,
	        matches: parentMatches.concat(matches.slice(0, index + 1))
	      }
	    });
	  }, null);
	}

	/**
	 * Declares an element that should be rendered at a certain URL path.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#route
	 */
	function Route(_props) {
	   invariant(false) ;
	}

	/**
	 * Provides location context for the rest of the app.
	 *
	 * Note: You usually won't render a <Router> directly. Instead, you'll render a
	 * router that is more specific to your environment such as a <BrowserRouter>
	 * in web browsers or a <StaticRouter> for server rendering.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#router
	 */
	function Router(_ref3) {
	  let {
	    basename: basenameProp = "/",
	    children = null,
	    location: locationProp,
	    navigationType = Action.Pop,
	    navigator,
	    static: staticProp = false
	  } = _ref3;
	  !!useInRouterContext() ? invariant(false) : void 0;
	  let basename = normalizePathname(basenameProp);
	  let navigationContext = react.exports.useMemo(() => ({
	    basename,
	    navigator,
	    static: staticProp
	  }), [basename, navigator, staticProp]);

	  if (typeof locationProp === "string") {
	    locationProp = parsePath(locationProp);
	  }

	  let {
	    pathname = "/",
	    search = "",
	    hash = "",
	    state = null,
	    key = "default"
	  } = locationProp;
	  let location = react.exports.useMemo(() => {
	    let trailingPathname = stripBasename(pathname, basename);

	    if (trailingPathname == null) {
	      return null;
	    }

	    return {
	      pathname: trailingPathname,
	      search,
	      hash,
	      state,
	      key
	    };
	  }, [basename, pathname, search, hash, state, key]);

	  if (location == null) {
	    return null;
	  }

	  return /*#__PURE__*/react.exports.createElement(NavigationContext.Provider, {
	    value: navigationContext
	  }, /*#__PURE__*/react.exports.createElement(LocationContext.Provider, {
	    children: children,
	    value: {
	      location,
	      navigationType
	    }
	  }));
	}

	/**
	 * A container for a nested tree of <Route> elements that renders the branch
	 * that best matches the current location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#routes
	 */
	function Routes(_ref4) {
	  let {
	    children,
	    location
	  } = _ref4;
	  return useRoutes(createRoutesFromChildren(children), location);
	} ///////////////////////////////////////////////////////////////////////////////
	// UTILS
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * Creates a route config from a React "children" object, which is usually
	 * either a `<Route>` element or an array of them. Used internally by
	 * `<Routes>` to create a route config from its children.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
	 */

	function createRoutesFromChildren(children) {
	  let routes = [];
	  react.exports.Children.forEach(children, element => {
	    if (! /*#__PURE__*/react.exports.isValidElement(element)) {
	      // Ignore non-elements. This allows people to more easily inline
	      // conditionals in their route config.
	      return;
	    }

	    if (element.type === react.exports.Fragment) {
	      // Transparently support React.Fragment and its children.
	      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
	      return;
	    }

	    !(element.type === Route) ? invariant(false) : void 0;
	    let route = {
	      caseSensitive: element.props.caseSensitive,
	      element: element.props.element,
	      index: element.props.index,
	      path: element.props.path
	    };

	    if (element.props.children) {
	      route.children = createRoutesFromChildren(element.props.children);
	    }

	    routes.push(route);
	  });
	  return routes;
	}

	/**
	 * React Router DOM v6.3.0
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
	// COMPONENTS
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
	 */
	function BrowserRouter(_ref) {
	  let {
	    basename,
	    children,
	    window
	  } = _ref;
	  let historyRef = react.exports.useRef();

	  if (historyRef.current == null) {
	    historyRef.current = createBrowserHistory({
	      window
	    });
	  }

	  let history = historyRef.current;
	  let [state, setState] = react.exports.useState({
	    action: history.action,
	    location: history.location
	  });
	  react.exports.useLayoutEffect(() => history.listen(setState), [history]);
	  return /*#__PURE__*/react.exports.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: state.location,
	    navigationType: state.action,
	    navigator: history
	  });
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * The public API for rendering a history-aware <a>.
	 */
	const Link = /*#__PURE__*/react.exports.forwardRef(function LinkWithRef(_ref4, ref) {
	  let {
	    onClick,
	    reloadDocument,
	    replace = false,
	    state,
	    target,
	    to
	  } = _ref4,
	      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

	  let href = useHref(to);
	  let internalOnClick = useLinkClickHandler(to, {
	    replace,
	    state,
	    target
	  });

	  function handleClick(event) {
	    if (onClick) onClick(event);

	    if (!event.defaultPrevented && !reloadDocument) {
	      internalOnClick(event);
	    }
	  }

	  return (
	    /*#__PURE__*/
	    // eslint-disable-next-line jsx-a11y/anchor-has-content
	    react.exports.createElement("a", _extends({}, rest, {
	      href: href,
	      onClick: handleClick,
	      ref: ref,
	      target: target
	    }))
	  );
	});
	// HOOKS
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * Handles the click behavior for router `<Link>` components. This is useful if
	 * you need to create custom `<Link>` components with the same click behavior we
	 * use in our exported `<Link>`.
	 */


	function useLinkClickHandler(to, _temp) {
	  let {
	    target,
	    replace: replaceProp,
	    state
	  } = _temp === void 0 ? {} : _temp;
	  let navigate = useNavigate();
	  let location = useLocation();
	  let path = useResolvedPath(to);
	  return react.exports.useCallback(event => {
	    if (event.button === 0 && ( // Ignore everything but left clicks
	    !target || target === "_self") && // Let browser handle "target=_blank" etc.
	    !isModifiedEvent(event) // Ignore clicks with modifier keys
	    ) {
	      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
	      // a push, so do the same here.

	      let replace = !!replaceProp || createPath(location) === createPath(path);
	      navigate(to, {
	        replace,
	        state
	      });
	    }
	  }, [location, navigate, path, replaceProp, state, target, to]);
	}

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z$8 = ".homepage {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    /* vertical-align: text-top; */\r\n    /* float: center; */\r\n    padding-top: 10px;\r\n    /* padding-right: 30px; */\r\n    /* padding-bottom: 50px; */\r\n    /* padding-left: 80px; */\r\n    border: 2px solid;\r\n    padding: 0px;\r\n    width: 27%\r\n}\r\n\r\n.greetings {\r\n\r\n    padding-top: 10px;\r\n    text-align: center;\r\n    color: brown;\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n/* Float applies to box */\r\n/* text-align applies to the text */\r\n/* width applies to the box width etc. */\r\n\r\n\r\n/* color is the colour of text. It changes colour due to hypertext link */\r\n/* position: static, relative, fixed, absolute, sticky */\r\n\r\n.Takeaway {\r\n    color: white;\r\n    position: absolute;\r\n    text-align: left;\r\n    left: 500px;\r\n    border: 4px solid;\r\n    border-style: solid;\r\n    border-color:white;\r\n\r\n    background-color: royalblue;\r\n}\r\n\r\n.Delivery {\r\n    color: white;\r\n    position: absolute;  \r\n    right: 500px;\r\n    text-align: right;\r\n    border: 4px solid;\r\n    border-style: solid;\r\n    border-color: white;\r\n\r\n    background-color: red;\r\n}\r\n\r\n.pizzalogo {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 8%;\r\n  }\r\n\r\n.TakeawayWords {\r\n    font-size: 22px\r\n}\r\n\r\n.DeliveryWords {\r\n    font-size: 22px\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n    .pizzalogo {\r\n      animation: App-logo-spin infinite 12s linear;\r\n    }\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n}";
	styleInject(css_248z$8);

	var HomePage = /*#__PURE__*/function (_React$Component) {
	  _inherits(HomePage, _React$Component);

	  var _super = _createSuper(HomePage);

	  function HomePage(props) {
	    _classCallCheck(this, HomePage);

	    return _super.call(this, props);
	  }

	  _createClass(HomePage, [{
	    key: "render",
	    value: function render() {
	      return /*#__PURE__*/React.createElement("div", {
	        className: "HomePage"
	      }, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("img", {
	        src: "images/pizzalogo.png",
	        className: "pizzalogo",
	        alt: "Logo, but nothing shows up"
	      }), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("img", {
	        src: "images/homepage.jpg",
	        className: "homepage",
	        alt: "Pizza, but nothing shows up"
	      }), /*#__PURE__*/React.createElement("h3", {
	        className: "greetings"
	      }, "Welcome to Domino's!", /*#__PURE__*/React.createElement("h4", null, "Start your order!"), /*#__PURE__*/React.createElement("p", {
	        className: "Takeaway"
	      }, /*#__PURE__*/React.createElement(Link, {
	        className: "TakeawayWords",
	        to: "/Takeaway"
	      }, "Click here for takeaway!")), /*#__PURE__*/React.createElement("p", {
	        className: "Delivery"
	      }, /*#__PURE__*/React.createElement(Link, {
	        className: "DeliveryWords",
	        to: "/Delivery"
	      }, "Click here to delivery!"))))));
	    }
	  }]);

	  return HomePage;
	}(React.Component);

	var css_248z$7 = "#promo2a {\r\n    margin: 15px\r\n}\r\n\r\n#promo2b {\r\n    margin: 15px\r\n}\r\n\r\n#promo5 {\r\n    display: block;\r\n    margin: 10px\r\n}";
	styleInject(css_248z$7);

	var Latestpromotions = /*#__PURE__*/function (_React$Component) {
	  _inherits(Latestpromotions, _React$Component);

	  var _super = _createSuper(Latestpromotions);

	  function Latestpromotions(props) {
	    _classCallCheck(this, Latestpromotions);

	    return _super.call(this, props);
	  }

	  _createClass(Latestpromotions, [{
	    key: "render",
	    value: function render() {
	      return (
	        /*#__PURE__*/
	        // input your address and stuff
	        React.createElement("div", {
	          className: "Latestpromotions"
	        }, /*#__PURE__*/React.createElement("h1", null, "LATEST PROMOS : CELEBRATE HARI RAYA WITH CHEESY DELIGHT FROM DOMINO'S!!"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
	          id: "promo2a",
	          src: "images/promo2.jpg",
	          className: "promo1",
	          alt: "promo2, but nothing shows up"
	        }), /*#__PURE__*/React.createElement("img", {
	          id: "promo2b",
	          src: "images/promo2.jpg",
	          className: "promo1",
	          alt: "promo2, but nothing shows up"
	        })), /*#__PURE__*/React.createElement("div", {
	          id: "promo5"
	        }, /*#__PURE__*/React.createElement("img", {
	          src: "images/promo5.jpg",
	          className: "promo1",
	          alt: "promo5, but nothing shows up"
	        }))))
	      );
	    }
	  }]);

	  return Latestpromotions;
	}(React.Component);

	var css_248z$6 = "";
	styleInject(css_248z$6);

	var Delivery = /*#__PURE__*/function (_React$Component) {
	  _inherits(Delivery, _React$Component);

	  var _super = _createSuper(Delivery);

	  function Delivery(props) {
	    _classCallCheck(this, Delivery);

	    return _super.call(this, props);
	  }

	  _createClass(Delivery, [{
	    key: "render",
	    value: function render() {
	      return (
	        /*#__PURE__*/
	        // input your address and stuff
	        React.createElement("div", {
	          className: "DeliveryPage"
	        }, /*#__PURE__*/React.createElement("h1", {
	          className: "InputAddress"
	        }, "Please input your address!"))
	      );
	    }
	  }]);

	  return Delivery;
	}(React.Component);

	var css_248z$5 = "";
	styleInject(css_248z$5);

	var Takeaway = /*#__PURE__*/function (_React$Component) {
	  _inherits(Takeaway, _React$Component);

	  var _super = _createSuper(Takeaway);

	  function Takeaway(props) {
	    _classCallCheck(this, Takeaway);

	    return _super.call(this, props);
	  }

	  _createClass(Takeaway, [{
	    key: "render",
	    value: function render() {
	      return (
	        /*#__PURE__*/
	        // input your address and stuff
	        React.createElement("div", {
	          className: "TakeawayPage"
	        }, /*#__PURE__*/React.createElement("h1", null, "Please choose our nearest branch to you!"))
	      );
	    }
	  }]);

	  return Takeaway;
	}(React.Component);

	var css_248z$4 = ".AboutUsPage {\r\n    margin-left: 30px;\r\n    margin-right: 85px;\r\n}";
	styleInject(css_248z$4);

	var AboutUs = /*#__PURE__*/function (_React$Component) {
	  _inherits(AboutUs, _React$Component);

	  var _super = _createSuper(AboutUs);

	  function AboutUs(props) {
	    _classCallCheck(this, AboutUs);

	    return _super.call(this, props);
	  }

	  _createClass(AboutUs, [{
	    key: "render",
	    value: function render() {
	      return (
	        /*#__PURE__*/
	        // input your address and stuff
	        React.createElement("div", {
	          className: "AboutUsPage"
	        }, /*#__PURE__*/React.createElement("h1", {
	          id: "AboutUsHeader"
	        }, " About Domino's Pizza Malaysia "), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
	          src: "images/homepage.jpg",
	          className: "homepage",
	          alt: "Pizza, but nothing shows up"
	        })), /*#__PURE__*/React.createElement("div", {
	          id: "introductionText"
	        }, /*#__PURE__*/React.createElement("p", {
	          id: "introduction"
	        }, "Domino's Pizza started with just one store called \"DomiNick's\" bought by brothers Tom and James Monaghan for $500 in 1960. James traded his half of the business to Tom in 1965, and as sole owner Tom renamed the business Domino's Pizza Inc. In 1978 the 200th Domino's store opened, and things really began to cook."), /*#__PURE__*/React.createElement("p", {
	          id: "introduction"
	        }, "By 1983 there were 1,000 Domino's stores, and in the same year Domino's opened its first international store in Winnipeg, Canada, followed by its first store on the Australasian continent in Queensland, Australia in the same year. By 1989 Domino's had 5,000 stores in operation, making it the fastest-growing pizza company in the world, with stores in the UK, Japan, and South America."), /*#__PURE__*/React.createElement("p", {
	          id: "introduction"
	        }, "As at Q2 2017, Domino\u2019s Pizza Malaysia is the largest Domino\u2019s market in Southeast Asia and fifth largest in Asia Pacific. Established in 1997, Domino\u2019s Malaysia is managed by master franchise holder, Dommal Food Services Sdn Bhd. To date, there are more than 240 Domino\u2019s Pizza stores in the country."), /*#__PURE__*/React.createElement("p", {
	          id: "introduction"
	        }, "At Domino\u2019s Pizza, we take PRIDE in our commitment to enrich the lives of our customers, employees, partners, shareholders and communities. As one of the most lovable brands in Malaysia, we will go the extra mile for your smile as well as uphold our culture to \u2018sell more pizza, have more fun\u2019. Embracing our company\u2019s philosophy of smart hustle, Domino\u2019s is committed to provide customers with the ultimate pizza delivery experience, with its product satisfaction guarantee, 30 minute delivery guarantee and 15 minute take-away guarantee."), /*#__PURE__*/React.createElement("p", {
	          id: "introduction"
	        }, "Forging ahead as an e-commerce entity, Domino\u2019s Pizza has led many firsts in its digital platforms. Domino\u2019s Pizza Malaysia has leveraged on the digital world to the best of its advantage and this began when it was certified as the first QSR company to provide an online ordering platform by the Malaysian Book of Records with the launch of its website in 2003. Domino's continue to strive and grow digitally and in its innovation to provide better services and customer experience."), /*#__PURE__*/React.createElement("p", {
	          id: "introduction"
	        }, "Domino\u2019s Malaysia is the award winner of the 2009, 2010, 2011, 2012 and 2016 Gold Franny Award, a distinguished Achievement Award of the International Franchise Association at the Domino\u2019s Pizza Worldwide Rally. In a show of confidence by Malaysian consumers, Domino\u2019s Pizza won Bronze in the \"Restaurant & Fast Food\" category of the prestigious Putra Brand Awards 2014, silver in 2015, bronze in 2016, Silver in 2017 and bronze in 2018."), /*#__PURE__*/React.createElement("p", {
	          id: "introduction"
	        }, "Domino\u2019s Pizza Malaysia has grown by leaps and bounds since it first began its operations in 1997. From a single store in USJ with a headcount of 15 staffs, the pizza chain today has over 240 stores in Malaysia and over 30 stores in Singapore with a headcount of over 4,000 staffs. Domino\u2019s Pizza Malaysia has experienced solid growth, particularly in the past few years with the opening of its 50th store in January 2011, 100th store in December 2012, 150th store in March 2016 and now the 200th store in April 2017.")))
	      );
	    }
	  }]);

	  return AboutUs;
	}(React.Component);

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$v =
	  // eslint-disable-next-line es-x/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$c = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$b = fails$c;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$b(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var fails$a = fails$c;

	var functionBindNative = !fails$a(function () {
	  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$2 = functionBindNative;

	var call$8 = Function.prototype.call;

	var functionCall = NATIVE_BIND$2 ? call$8.bind(call$8) : function () {
	  return call$8.apply(call$8, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$4 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND$1 = functionBindNative;

	var FunctionPrototype$1 = Function.prototype;
	var bind$3 = FunctionPrototype$1.bind;
	var call$7 = FunctionPrototype$1.call;
	var uncurryThis$f = NATIVE_BIND$1 && bind$3.bind(call$7, call$7);

	var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
	  return fn && uncurryThis$f(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$7.apply(fn, arguments);
	  };
	};

	var uncurryThis$e = functionUncurryThis;

	var toString$4 = uncurryThis$e({}.toString);
	var stringSlice$1 = uncurryThis$e(''.slice);

	var classofRaw$1 = function (it) {
	  return stringSlice$1(toString$4(it), 8, -1);
	};

	var global$u = global$v;
	var uncurryThis$d = functionUncurryThis;
	var fails$9 = fails$c;
	var classof$5 = classofRaw$1;

	var Object$5 = global$u.Object;
	var split = uncurryThis$d(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$9(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object$5('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$5(it) == 'String' ? split(it, '') : Object$5(it);
	} : Object$5;

	var global$t = global$v;

	var TypeError$b = global$t.TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$3 = function (it) {
	  if (it == undefined) throw TypeError$b("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$2 = requireObjectCoercible$3;

	var toIndexedObject$5 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$2(it));
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$f = function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$e = isCallable$f;

	var isObject$8 = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$e(it);
	};

	var global$s = global$v;
	var isCallable$d = isCallable$f;

	var aFunction = function (argument) {
	  return isCallable$d(argument) ? argument : undefined;
	};

	var getBuiltIn$5 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$s[namespace]) : global$s[namespace] && global$s[namespace][method];
	};

	var uncurryThis$c = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$c({}.isPrototypeOf);

	var getBuiltIn$4 = getBuiltIn$5;

	var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

	var global$r = global$v;
	var userAgent = engineUserAgent;

	var process = global$r.process;
	var Deno = global$r.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es-x/no-symbol -- required for testing */

	var V8_VERSION$2 = engineV8Version;
	var fails$8 = fails$c;

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$8(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
	});

	/* eslint-disable es-x/no-symbol -- required for testing */

	var NATIVE_SYMBOL$1 = nativeSymbol;

	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$q = global$v;
	var getBuiltIn$3 = getBuiltIn$5;
	var isCallable$c = isCallable$f;
	var isPrototypeOf = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var Object$4 = global$q.Object;

	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$3('Symbol');
	  return isCallable$c($Symbol) && isPrototypeOf($Symbol.prototype, Object$4(it));
	};

	var global$p = global$v;

	var String$4 = global$p.String;

	var tryToString$2 = function (argument) {
	  try {
	    return String$4(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var global$o = global$v;
	var isCallable$b = isCallable$f;
	var tryToString$1 = tryToString$2;

	var TypeError$a = global$o.TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$3 = function (argument) {
	  if (isCallable$b(argument)) return argument;
	  throw TypeError$a(tryToString$1(argument) + ' is not a function');
	};

	var aCallable$2 = aCallable$3;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$3 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$2(func);
	};

	var global$n = global$v;
	var call$6 = functionCall;
	var isCallable$a = isCallable$f;
	var isObject$7 = isObject$8;

	var TypeError$9 = global$n.TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$7(val = call$6(fn, input))) return val;
	  if (isCallable$a(fn = input.valueOf) && !isObject$7(val = call$6(fn, input))) return val;
	  if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$7(val = call$6(fn, input))) return val;
	  throw TypeError$9("Can't convert object to primitive value");
	};

	var shared$3 = {exports: {}};

	var global$m = global$v;

	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$1 = Object.defineProperty;

	var setGlobal$3 = function (key, value) {
	  try {
	    defineProperty$1(global$m, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$m[key] = value;
	  } return value;
	};

	var global$l = global$v;
	var setGlobal$2 = setGlobal$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$l[SHARED] || setGlobal$2(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$3.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.22.1',
	  mode: 'global',
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.22.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var global$k = global$v;
	var requireObjectCoercible$1 = requireObjectCoercible$3;

	var Object$3 = global$k.Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$6 = function (argument) {
	  return Object$3(requireObjectCoercible$1(argument));
	};

	var uncurryThis$b = functionUncurryThis;
	var toObject$5 = toObject$6;

	var hasOwnProperty = uncurryThis$b({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es-x/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$5(it), key);
	};

	var uncurryThis$a = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$3 = uncurryThis$a(1.0.toString);

	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
	};

	var global$j = global$v;
	var shared$2 = shared$3.exports;
	var hasOwn$8 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var WellKnownSymbolsStore = shared$2('wks');
	var Symbol$1 = global$j.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

	var wellKnownSymbol$e = function (name) {
	  if (!hasOwn$8(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL && hasOwn$8(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var global$i = global$v;
	var call$5 = functionCall;
	var isObject$6 = isObject$8;
	var isSymbol$1 = isSymbol$2;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$d = wellKnownSymbol$e;

	var TypeError$8 = global$i.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$6(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$5(exoticToPrim, input, pref);
	    if (!isObject$6(result) || isSymbol$1(result)) return result;
	    throw TypeError$8("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol = isSymbol$2;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$3 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var global$h = global$v;
	var isObject$5 = isObject$8;

	var document$1 = global$h.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$6 = descriptors;
	var fails$7 = fails$c;
	var createElement = documentCreateElement$1;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$6 && !fails$7(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$5 = descriptors;
	var call$4 = functionCall;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var createPropertyDescriptor$3 = createPropertyDescriptor$4;
	var toIndexedObject$4 = toIndexedObject$5;
	var toPropertyKey$2 = toPropertyKey$3;
	var hasOwn$7 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$4(O);
	  P = toPropertyKey$2(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$7(O, P)) return createPropertyDescriptor$3(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$4 = descriptors;
	var fails$6 = fails$c;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$6(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var global$g = global$v;
	var isObject$4 = isObject$8;

	var String$3 = global$g.String;
	var TypeError$7 = global$g.TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$8 = function (argument) {
	  if (isObject$4(argument)) return argument;
	  throw TypeError$7(String$3(argument) + ' is not an object');
	};

	var global$f = global$v;
	var DESCRIPTORS$3 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$7 = anObject$8;
	var toPropertyKey$1 = toPropertyKey$3;

	var TypeError$6 = global$f.TypeError;
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$7(O);
	  P = toPropertyKey$1(P);
	  anObject$7(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$7(O);
	  P = toPropertyKey$1(P);
	  anObject$7(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$6('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$2 = descriptors;
	var definePropertyModule$4 = objectDefineProperty;
	var createPropertyDescriptor$2 = createPropertyDescriptor$4;

	var createNonEnumerableProperty$4 = DESCRIPTORS$2 ? function (object, key, value) {
	  return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var redefine$3 = {exports: {}};

	var uncurryThis$9 = functionUncurryThis;
	var isCallable$9 = isCallable$f;
	var store$1 = sharedStore;

	var functionToString = uncurryThis$9(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$9(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$3 = store$1.inspectSource;

	var global$e = global$v;
	var isCallable$8 = isCallable$f;
	var inspectSource$2 = inspectSource$3;

	var WeakMap$2 = global$e.WeakMap;

	var nativeWeakMap = isCallable$8(WeakMap$2) && /native code/.test(inspectSource$2(WeakMap$2));

	var shared$1 = shared$3.exports;
	var uid = uid$2;

	var keys = shared$1('keys');

	var sharedKey$3 = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys$4 = {};

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$d = global$v;
	var uncurryThis$8 = functionUncurryThis;
	var isObject$3 = isObject$8;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
	var hasOwn$6 = hasOwnProperty_1;
	var shared = sharedStore;
	var sharedKey$2 = sharedKey$3;
	var hiddenKeys$3 = hiddenKeys$4;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$5 = global$d.TypeError;
	var WeakMap$1 = global$d.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$5('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared.state) {
	  var store = shared.state || (shared.state = new WeakMap$1());
	  var wmget = uncurryThis$8(store.get);
	  var wmhas = uncurryThis$8(store.has);
	  var wmset = uncurryThis$8(store.set);
	  set = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey$2('state');
	  hiddenKeys$3[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn$6(it, STATE)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$3(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$6(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$6(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var DESCRIPTORS$1 = descriptors;
	var hasOwn$5 = hasOwnProperty_1;

	var FunctionPrototype = Function.prototype;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$5(FunctionPrototype, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || (DESCRIPTORS$1 && getDescriptor(FunctionPrototype, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var global$c = global$v;
	var isCallable$7 = isCallable$f;
	var hasOwn$4 = hasOwnProperty_1;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
	var setGlobal$1 = setGlobal$3;
	var inspectSource$1 = inspectSource$3;
	var InternalStateModule$1 = internalState;
	var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;

	var getInternalState$1 = InternalStateModule$1.get;
	var enforceInternalState = InternalStateModule$1.enforce;
	var TEMPLATE = String(String).split('String');

	(redefine$3.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var name = options && options.name !== undefined ? options.name : key;
	  var state;
	  if (isCallable$7(value)) {
	    if (String(name).slice(0, 7) === 'Symbol(') {
	      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	    }
	    if (!hasOwn$4(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
	      createNonEnumerableProperty$2(value, 'name', name);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	    }
	  }
	  if (O === global$c) {
	    if (simple) O[key] = value;
	    else setGlobal$1(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty$2(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return isCallable$7(this) && getInternalState$1(this).source || inspectSource$1(this);
	});

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$4 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- safe
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
	};

	var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

	var max$2 = Math.max;
	var min$2 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$3 = function (index, length) {
	  var integer = toIntegerOrInfinity$3(index);
	  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

	var min$1 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$6 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$3 = toIndexedObject$5;
	var toAbsoluteIndex$2 = toAbsoluteIndex$3;
	var lengthOfArrayLike$5 = lengthOfArrayLike$6;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$3($this);
	    var length = lengthOfArrayLike$5(O);
	    var index = toAbsoluteIndex$2(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var uncurryThis$7 = functionUncurryThis;
	var hasOwn$3 = hasOwnProperty_1;
	var toIndexedObject$2 = toIndexedObject$5;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$2 = hiddenKeys$4;

	var push$1 = uncurryThis$7([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$2(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$3(hiddenKeys$2, key) && hasOwn$3(O, key) && push$1(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
	    ~indexOf(result, key) || push$1(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$1);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$2 = getBuiltIn$5;
	var uncurryThis$6 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject$6 = anObject$8;

	var concat = uncurryThis$6([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$2 = hasOwnProperty_1;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule$3 = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule$3.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$5 = fails$c;
	var isCallable$6 = isCallable$f;

	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$6(detection) ? fails$5(detection)
	    : !!detection;
	};

	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';

	var isForced_1 = isForced$1;

	var global$b = global$v;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
	var redefine$2 = redefine$3.exports;
	var setGlobal = setGlobal$3;
	var copyConstructorProperties = copyConstructorProperties$1;
	var isForced = isForced_1;

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	  options.name        - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$b;
	  } else if (STATIC) {
	    target = global$b[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$b[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine$2(target, key, sourceProperty, options);
	  }
	};

	var classof$4 = classofRaw$1;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es-x/no-array-isarray -- safe
	var isArray$3 = Array.isArray || function isArray(argument) {
	  return classof$4(argument) == 'Array';
	};

	var wellKnownSymbol$c = wellKnownSymbol$e;

	var TO_STRING_TAG$2 = wellKnownSymbol$c('toStringTag');
	var test = {};

	test[TO_STRING_TAG$2] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var global$a = global$v;
	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var isCallable$5 = isCallable$f;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$b = wellKnownSymbol$e;

	var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');
	var Object$2 = global$a.Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$3 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable$5(O.callee) ? 'Arguments' : result;
	};

	var uncurryThis$5 = functionUncurryThis;
	var fails$4 = fails$c;
	var isCallable$4 = isCallable$f;
	var classof$2 = classof$3;
	var getBuiltIn$1 = getBuiltIn$5;
	var inspectSource = inspectSource$3;

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn$1('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$5(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$4(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$4(argument)) return false;
	  switch (classof$2(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$3 = !construct || fails$4(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var toPropertyKey = toPropertyKey$3;
	var definePropertyModule$2 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$4;

	var createProperty$4 = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$1(0, value));
	  else object[propertyKey] = value;
	};

	var fails$3 = fails$c;
	var wellKnownSymbol$a = wellKnownSymbol$e;
	var V8_VERSION$1 = engineV8Version;

	var SPECIES$2 = wellKnownSymbol$a('species');

	var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$1 >= 51 || !fails$3(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$2] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var uncurryThis$4 = functionUncurryThis;

	var arraySlice = uncurryThis$4([].slice);

	var $$6 = _export;
	var global$9 = global$v;
	var isArray$2 = isArray$3;
	var isConstructor$2 = isConstructor$3;
	var isObject$2 = isObject$8;
	var toAbsoluteIndex$1 = toAbsoluteIndex$3;
	var lengthOfArrayLike$4 = lengthOfArrayLike$6;
	var toIndexedObject$1 = toIndexedObject$5;
	var createProperty$3 = createProperty$4;
	var wellKnownSymbol$9 = wellKnownSymbol$e;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
	var un$Slice = arraySlice;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('slice');

	var SPECIES$1 = wellKnownSymbol$9('species');
	var Array$3 = global$9.Array;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$6({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$1(this);
	    var length = lengthOfArrayLike$4(O);
	    var k = toAbsoluteIndex$1(start, length);
	    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$2(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$2(Constructor) && (Constructor === Array$3 || isArray$2(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$2(Constructor)) {
	        Constructor = Constructor[SPECIES$1];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array$3 || Constructor === undefined) {
	        return un$Slice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array$3 : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$3(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var global$8 = global$v;
	var isArray$1 = isArray$3;
	var isConstructor$1 = isConstructor$3;
	var isObject$1 = isObject$8;
	var wellKnownSymbol$8 = wellKnownSymbol$e;

	var SPECIES = wellKnownSymbol$8('species');
	var Array$2 = global$8.Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$1(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$1(C) && (C === Array$2 || isArray$1(C.prototype))) C = undefined;
	    else if (isObject$1(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array$2 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$3 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var $$5 = _export;
	var global$7 = global$v;
	var fails$2 = fails$c;
	var isArray = isArray$3;
	var isObject = isObject$8;
	var toObject$4 = toObject$6;
	var lengthOfArrayLike$3 = lengthOfArrayLike$6;
	var createProperty$2 = createProperty$4;
	var arraySpeciesCreate$2 = arraySpeciesCreate$3;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
	var wellKnownSymbol$7 = wellKnownSymbol$e;
	var V8_VERSION = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable');
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
	var TypeError$4 = global$7.TypeError;

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$2(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$2('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$5({ target: 'Array', proto: true, forced: FORCED }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$4(this);
	    var A = arraySpeciesCreate$2(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$3(E);
	        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$4(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER$1) throw TypeError$4(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty$2(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var uncurryThis$3 = functionUncurryThis;
	var aCallable$1 = aCallable$3;
	var NATIVE_BIND = functionBindNative;

	var bind$2 = uncurryThis$3(uncurryThis$3.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$1(fn);
	  return that === undefined ? fn : NATIVE_BIND ? bind$2(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var bind$1 = functionBindContext;
	var uncurryThis$2 = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toObject$3 = toObject$6;
	var lengthOfArrayLike$2 = lengthOfArrayLike$6;
	var arraySpeciesCreate$1 = arraySpeciesCreate$3;

	var push = uncurryThis$2([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$3($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind$1(callbackfn, that);
	    var length = lengthOfArrayLike$2(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$1;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$1(7)
	};

	var objectDefineProperties = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es-x/no-object-keys -- safe
	var objectKeys$1 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$1 = objectDefineProperty;
	var anObject$5 = anObject$8;
	var toIndexedObject = toIndexedObject$5;
	var objectKeys = objectKeys$1;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es-x/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$5(O);
	  var props = toIndexedObject(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn = getBuiltIn$5;

	var html$1 = getBuiltIn('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */

	var anObject$4 = anObject$8;
	var definePropertiesModule = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys = hiddenKeys$4;
	var html = html$1;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey$1 = sharedKey$3;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$1('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es-x/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject$4(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
	};

	var wellKnownSymbol$6 = wellKnownSymbol$e;
	var create$1 = objectCreate;
	var definePropertyModule = objectDefineProperty;

	var UNSCOPABLES = wellKnownSymbol$6('unscopables');
	var ArrayPrototype$1 = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
	  definePropertyModule.f(ArrayPrototype$1, UNSCOPABLES, {
	    configurable: true,
	    value: create$1(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables$1 = function (key) {
	  ArrayPrototype$1[UNSCOPABLES][key] = true;
	};

	var $$4 = _export;
	var $findIndex = arrayIteration.findIndex;
	var addToUnscopables = addToUnscopables$1;

	var FIND_INDEX = 'findIndex';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

	// `Array.prototype.findIndex` method
	// https://tc39.es/ecma262/#sec-array.prototype.findindex
	$$4({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables(FIND_INDEX);

	var $$3 = _export;
	var global$6 = global$v;
	var toAbsoluteIndex = toAbsoluteIndex$3;
	var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
	var lengthOfArrayLike$1 = lengthOfArrayLike$6;
	var toObject$2 = toObject$6;
	var arraySpeciesCreate = arraySpeciesCreate$3;
	var createProperty$1 = createProperty$4;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('splice');

	var TypeError$3 = global$6.TypeError;
	var max = Math.max;
	var min = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

	// `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$$3({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject$2(this);
	    var len = lengthOfArrayLike$1(O);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min(max(toIntegerOrInfinity$1(deleteCount), 0), len - actualStart);
	    }
	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
	      throw TypeError$3(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty$1(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});

	var $$2 = _export;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$2({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var ReadOnlyRow = function ReadOnlyRow(_ref) {
	  var customer = _ref.customer,
	      handleEditClick = _ref.handleEditClick,
	      handleDeleteClick = _ref.handleDeleteClick;
	  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, customer.fullName), /*#__PURE__*/React.createElement("td", null, customer.customerID), /*#__PURE__*/React.createElement("td", null, customer.orderID), /*#__PURE__*/React.createElement("td", null, customer.orderMethod), /*#__PURE__*/React.createElement("td", null, customer.address), /*#__PURE__*/React.createElement("td", null, customer.phoneNumber), /*#__PURE__*/React.createElement("td", null, customer.orderDateTime), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
	    type: "button",
	    onClick: function onClick(event) {
	      return handleEditClick(event, customer);
	    }
	  }, "Edit"), /*#__PURE__*/React.createElement("button", {
	    type: "button",
	    onClick: function onClick() {
	      return handleDeleteClick(customer.id);
	    }
	  }, "Delete")));
	};

	var EditableRow = function EditableRow(_ref) {
	  var editFormData = _ref.editFormData,
	      handleEditFormChange = _ref.handleEditFormChange;
	  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    required: "required",
	    placeholder: "Enter a name: ",
	    name: "fullName",
	    value: editFormData.fullName,
	    onChange: handleEditFormChange
	  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    required: "required",
	    placeholder: "Enter a customer ID: ",
	    name: "customerID",
	    value: editFormData.customerID,
	    onChange: handleEditFormChange
	  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    required: "required",
	    placeholder: "Enter the order ID: ",
	    name: "orderID",
	    value: editFormData.orderID,
	    onChange: handleEditFormChange
	  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    required: "required",
	    placeholder: "Enter the order method: ",
	    name: "orderMethod",
	    value: editFormData.orderMethod,
	    onChange: handleEditFormChange
	  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    required: "required",
	    placeholder: "Enter an address: ",
	    name: "address",
	    value: editFormData.address,
	    onChange: handleEditFormChange
	  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    required: "required",
	    placeholder: "Enter a phone number: ",
	    name: "phoneNumber",
	    value: editFormData.phoneNumber,
	    onChange: handleEditFormChange
	  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    required: "required",
	    placeholder: "Enter date and time of order placement: ",
	    name: "orderDateTime",
	    value: editFormData.orderDateTime,
	    onChange: handleEditFormChange
	  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
	    type: "submit"
	  }, "Save")));
	};

	/*  {id: 0, 
	    fullName: "Null", 
	    customerID: 000, 
	    orderID: 000,
	    orderMethod: "Delivery"
	    address: 000,
	    phoneNumber: "", 
	    orderDateTime: "" }, */
	var defaultcustomers = [{
	  id: 1,
	  fullName: "Peter",
	  customerID: 132,
	  orderID: 1,
	  orderMethod: "Delivery",
	  address: "No 16, Jalan 56/4C, Bandar Impian Perdana",
	  phoneNumber: "0102203365",
	  orderDateTime: "2022-04-06T09:44"
	}, {
	  id: 2,
	  fullName: "Jane",
	  customerID: 190,
	  orderID: 2,
	  orderMethod: "Takeaway",
	  address: "No 57, Lorong 3/56, Subang Jaya",
	  phoneNumber: "0102243363",
	  orderDateTime: "2022-04-06T9:53"
	}, {
	  id: 3,
	  fullName: "Zul",
	  customerID: 25,
	  orderID: 3,
	  orderMethod: "Delivery",
	  address: "No 5, Street 5/4a, SS18",
	  phoneNumber: "0162243361",
	  orderDateTime: "2022-04-06T10:12"
	}, {
	  id: 4,
	  fullName: "Jack",
	  customerID: 42,
	  orderID: 4,
	  orderMethod: "Delivery",
	  address: "No 24, Street 23/4a, SS20",
	  phoneNumber: "0160203961",
	  orderDateTime: "2022-04-06T10:32"
	}, {
	  id: 5,
	  fullName: "Rose",
	  customerID: 86,
	  orderID: 5,
	  orderMethod: "Delivery",
	  address: "No 16, Jalan 19/7c, Bandar Impian Perdana",
	  phoneNumber: "0162623961",
	  orderDateTime: "2022-04-06T10:32"
	}, {
	  id: 6,
	  fullName: "Mary",
	  customerID: 3,
	  orderID: 6,
	  orderMethod: "Takeaway",
	  address: "No 5, Street 3/12, SS13",
	  phoneNumber: "0102256961",
	  orderDateTime: "2022-04-06T11:30"
	}, {
	  id: 7,
	  fullName: "Dan",
	  customerID: 9,
	  orderID: 7,
	  orderMethod: "Delivery",
	  address: "No 5, Street 5/4a, SS19",
	  phoneNumber: "0162243060",
	  orderDateTime: "2022-04-06T11:32"
	}, {
	  id: 8,
	  fullName: "Ali",
	  customerID: 52,
	  orderID: 8,
	  orderMethod: "Delivery",
	  address: "No 8, Street 5/4a, SS19",
	  phoneNumber: "0162523961",
	  orderDateTime: "2022-04-06T12:02"
	}, {
	  id: 9,
	  fullName: "Jana",
	  customerID: 10,
	  orderID: 9,
	  orderMethod: "Takeaway",
	  address: "No 3, Jalan 1/2a, Bandar Impian Perdana",
	  phoneNumber: "0162243981",
	  orderDateTime: "2022-04-06T12:17"
	}, {
	  id: 10,
	  fullName: "Zack",
	  customerID: 92,
	  orderID: 10,
	  orderMethod: "Takeaway",
	  address: "No 1, Street 39/3a, SS2",
	  phoneNumber: "0102203360",
	  orderDateTime: "2022-04-06T12:32"
	}, {
	  id: 11,
	  fullName: "Will",
	  customerID: 201,
	  orderID: 11,
	  orderMethod: "Takeaway",
	  address: "No 5, Street 6/a, SS6",
	  phoneNumber: "0164243991",
	  orderDateTime: "2022-04-06T12:43"
	}, {
	  id: 12,
	  fullName: "Cassie",
	  customerID: 123,
	  orderID: 12,
	  orderMethod: "Delivery",
	  address: "No 27, Lorong 5/4a, Subang Jaya",
	  phoneNumber: "016227861",
	  orderDateTime: "2022-04-06T12:47"
	}, {
	  id: 13,
	  fullName: "Dutch",
	  customerID: 5,
	  orderID: 13,
	  orderMethod: "Takeaway",
	  address: "No 39, Lorong 10/2a, Subang Jaya",
	  phoneNumber: "0162249961",
	  orderDateTime: "2022-04-06T12:59"
	}, {
	  id: 14,
	  fullName: "Harvey",
	  customerID: 10,
	  orderID: 14,
	  orderMethod: "Delivery",
	  address: "No 5, Street 58/8c, SS18",
	  phoneNumber: "0162553961",
	  orderDateTime: "2022-04-06T13:12"
	}, {
	  id: 15,
	  fullName: "Mike",
	  customerID: 205,
	  orderID: 15,
	  orderMethod: "Takeaway",
	  address: "No 33, Jalan 11/2a, Bandar Bunga Saga",
	  phoneNumber: "0162202961",
	  orderDateTime: "2022-04-06T13:17"
	}, {
	  id: 16,
	  fullName: "Donna",
	  customerID: 352,
	  orderID: 16,
	  orderMethod: "Delivery",
	  address: "No 58, Jalan 5/4a, Bandar Bunga Saga",
	  phoneNumber: "0162233961",
	  orderDateTime: "2022-04-06T13:23"
	}, {
	  id: 17,
	  fullName: "Litt",
	  customerID: 86,
	  orderID: 17,
	  orderMethod: "Takeaway",
	  address: "Test1",
	  phoneNumber: "0162245661",
	  orderDateTime: "2022-04-06T14:20"
	}, {
	  id: 18,
	  fullName: "Bale",
	  customerID: 91,
	  orderID: 18,
	  orderMethod: "Delivery",
	  address: "Test2",
	  phoneNumber: "0162243923",
	  orderDateTime: "2022-04-06T14:25"
	}, {
	  id: 19,
	  fullName: "Tom",
	  customerID: 79,
	  orderID: 19,
	  orderMethod: "Delivery",
	  address: "Test3",
	  phoneNumber: "0162243923",
	  orderDateTime: "2022-04-06T14:25"
	}, {
	  id: 20,
	  fullName: "Jerry",
	  customerID: 44,
	  orderID: 20,
	  orderMethod: "Delivery",
	  address: "Test4",
	  phoneNumber: "0162243923",
	  orderDateTime: "2022-04-06T14:25"
	}, {
	  id: 21,
	  fullName: "Barney",
	  customerID: 55,
	  orderID: 21,
	  orderMethod: "Delivery",
	  address: "Test5",
	  phoneNumber: "0162243923",
	  orderDateTime: "2022-04-06T14:25"
	}, {
	  id: 22,
	  fullName: "Maison",
	  customerID: 77,
	  orderID: 22,
	  orderMethod: "Delivery",
	  address: "Test6",
	  phoneNumber: "0162243923",
	  orderDateTime: "2022-04-06T14:25"
	}];

	var classnames$1 = {exports: {}};

	/*!
	  Copyright (c) 2018 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString === Object.prototype.toString) {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					} else {
						classes.push(arg.toString());
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
	}(classnames$1));

	var classnames = classnames$1.exports;

	var call$3 = functionCall;
	var anObject$3 = anObject$8;
	var getMethod$1 = getMethod$3;

	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$3(iterator);
	  try {
	    innerResult = getMethod$1(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$3(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$3(innerResult);
	  return value;
	};

	var anObject$2 = anObject$8;
	var iteratorClose = iteratorClose$1;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$2(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose(iterator, 'throw', error);
	  }
	};

	var iterators = {};

	var wellKnownSymbol$5 = wellKnownSymbol$e;
	var Iterators$3 = iterators;

	var ITERATOR$4 = wellKnownSymbol$5('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators$3.Array === it || ArrayPrototype[ITERATOR$4] === it);
	};

	var classof$1 = classof$3;
	var getMethod = getMethod$3;
	var Iterators$2 = iterators;
	var wellKnownSymbol$4 = wellKnownSymbol$e;

	var ITERATOR$3 = wellKnownSymbol$4('iterator');

	var getIteratorMethod$2 = function (it) {
	  if (it != undefined) return getMethod(it, ITERATOR$3)
	    || getMethod(it, '@@iterator')
	    || Iterators$2[classof$1(it)];
	};

	var global$5 = global$v;
	var call$2 = functionCall;
	var aCallable = aCallable$3;
	var anObject$1 = anObject$8;
	var tryToString = tryToString$2;
	var getIteratorMethod$1 = getIteratorMethod$2;

	var TypeError$2 = global$5.TypeError;

	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable(iteratorMethod)) return anObject$1(call$2(iteratorMethod, argument));
	  throw TypeError$2(tryToString(argument) + ' is not iterable');
	};

	var global$4 = global$v;
	var bind = functionBindContext;
	var call$1 = functionCall;
	var toObject$1 = toObject$6;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var isConstructor = isConstructor$3;
	var lengthOfArrayLike = lengthOfArrayLike$6;
	var createProperty = createProperty$4;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$2;

	var Array$1 = global$4.Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$1(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this == Array$1 && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];
	    for (;!(step = call$1(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike(O);
	    result = IS_CONSTRUCTOR ? new this(length) : Array$1(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var wellKnownSymbol$3 = wellKnownSymbol$e;

	var ITERATOR$2 = wellKnownSymbol$3('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$2] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$2] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var $$1 = _export;
	var from = arrayFrom;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  // eslint-disable-next-line es-x/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$1({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from
	});

	var global$3 = global$v;
	var classof = classof$3;

	var String$2 = global$3.String;

	var toString$2 = function (argument) {
	  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return String$2(argument);
	};

	var uncurryThis$1 = functionUncurryThis;
	var toIntegerOrInfinity = toIntegerOrInfinity$4;
	var toString$1 = toString$2;
	var requireObjectCoercible = requireObjectCoercible$3;

	var charAt$1 = uncurryThis$1(''.charAt);
	var charCodeAt = uncurryThis$1(''.charCodeAt);
	var stringSlice = uncurryThis$1(''.slice);

	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$1(requireObjectCoercible($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$1(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};

	var fails$1 = fails$c;

	var correctPrototypeGetter = !fails$1(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var global$2 = global$v;
	var hasOwn$1 = hasOwnProperty_1;
	var isCallable$3 = isCallable$f;
	var toObject = toObject$6;
	var sharedKey = sharedKey$3;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var Object$1 = global$2.Object;
	var ObjectPrototype = Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$1.getPrototypeOf : function (O) {
	  var object = toObject(O);
	  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$3(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof Object$1 ? ObjectPrototype : null;
	};

	var fails = fails$c;
	var isCallable$2 = isCallable$f;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var redefine$1 = redefine$3.exports;
	var wellKnownSymbol$2 = wellKnownSymbol$e;

	var ITERATOR$1 = wellKnownSymbol$2('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es-x/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$2[ITERATOR$1].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$2(IteratorPrototype$2[ITERATOR$1])) {
	  redefine$1(IteratorPrototype$2, ITERATOR$1, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var defineProperty = objectDefineProperty.f;
	var hasOwn = hasOwnProperty_1;
	var wellKnownSymbol$1 = wellKnownSymbol$e;

	var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');

	var setToStringTag$2 = function (target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwn(target, TO_STRING_TAG)) {
	    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var create = objectCreate;
	var createPropertyDescriptor = createPropertyDescriptor$4;
	var setToStringTag$1 = setToStringTag$2;
	var Iterators$1 = iterators;

	var returnThis$1 = function () { return this; };

	var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$1[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var global$1 = global$v;
	var isCallable$1 = isCallable$f;

	var String$1 = global$1.String;
	var TypeError$1 = global$1.TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$1(argument)) return argument;
	  throw TypeError$1("Can't set " + String$1(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */

	var uncurryThis = functionUncurryThis;
	var anObject = anObject$8;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $ = _export;
	var call = functionCall;
	var FunctionName = functionName;
	var isCallable = isCallable$f;
	var createIteratorConstructor = createIteratorConstructor$1;
	var getPrototypeOf = objectGetPrototypeOf;
	var setPrototypeOf = objectSetPrototypeOf;
	var setToStringTag = setToStringTag$2;
	var createNonEnumerableProperty = createNonEnumerableProperty$4;
	var redefine = redefine$3.exports;
	var wellKnownSymbol = wellKnownSymbol$e;
	var Iterators = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf) {
	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
	          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (CONFIGURABLE_FUNCTION_NAME) {
	      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR] !== defaultIterator) {
	    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
	  }
	  Iterators[NAME] = defaultIterator;

	  return methods;
	};

	var charAt = stringMultibyte.charAt;
	var toString = toString$2;
	var InternalStateModule = internalState;
	var defineIterator = defineIterator$1;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: toString(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var DOTS = "...";

	var range = function range(start, end) {
	  var length = end - start + 1;
	  return Array.from({
	    length: length
	  }, function (_, idx) {
	    return idx + start;
	  });
	};

	var usePagination = function usePagination(_ref) {
	  var totalCount = _ref.totalCount,
	      pageSize = _ref.pageSize,
	      _ref$siblingCount = _ref.siblingCount,
	      siblingCount = _ref$siblingCount === void 0 ? 1 : _ref$siblingCount,
	      currentPage = _ref.currentPage;
	  var paginationRange = react.exports.useMemo(function () {
	    var totalPageCount = Math.ceil(totalCount / pageSize); // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS

	    var totalPageNumbers = siblingCount + 5;
	    /*
	      Case 1:
	      If the number of pages is less than the page numbers we want to show in our
	      paginationComponent, we return the range [1..totalPageCount]
	    */

	    if (totalPageNumbers >= totalPageCount) {
	      return range(1, totalPageCount);
	    }
	    /*
	        Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
	    */


	    var leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
	    var rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
	    /*
	      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
	    */

	    var shouldShowLeftDots = leftSiblingIndex > 2;
	    var shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
	    var firstPageIndex = 1;
	    var lastPageIndex = totalPageCount;
	    /*
	        Case 2: No left dots to show, but rights dots to be shown
	    */

	    if (!shouldShowLeftDots && shouldShowRightDots) {
	      var leftItemCount = 3 + 2 * siblingCount;
	      var leftRange = range(1, leftItemCount);
	      return [].concat(_toConsumableArray(leftRange), [DOTS, totalPageCount]);
	    }
	    /*
	        Case 3: No right dots to show, but left dots to be shown
	    */


	    if (shouldShowLeftDots && !shouldShowRightDots) {
	      var rightItemCount = 3 + 2 * siblingCount;
	      var rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
	      return [firstPageIndex, DOTS].concat(_toConsumableArray(rightRange));
	    }
	    /*
	        Case 4: Both left and right dots to be shown
	    */


	    if (shouldShowLeftDots && shouldShowRightDots) {
	      var middleRange = range(leftSiblingIndex, rightSiblingIndex);
	      return [firstPageIndex, DOTS].concat(_toConsumableArray(middleRange), [DOTS, lastPageIndex]);
	    }
	  }, [totalCount, pageSize, siblingCount, currentPage]);
	  return paginationRange;
	};

	var css_248z$3 = ".pagination-container {\n  display: flex;\n  list-style-type: none; }\n  .pagination-container .pagination-item {\n    padding: 0 12px;\n    height: 32px;\n    text-align: center;\n    margin: auto 4px;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    box-sizing: border-box;\n    align-items: center;\n    letter-spacing: 0.01071em;\n    border-radius: 16px;\n    line-height: 1.43;\n    font-size: 13px;\n    min-width: 32px; }\n    .pagination-container .pagination-item.dots:hover {\n      background-color: transparent;\n      cursor: default; }\n    .pagination-container .pagination-item:hover {\n      background-color: rgba(0, 0, 0, 0.04);\n      cursor: pointer; }\n    .pagination-container .pagination-item.selected {\n      background-color: rgba(0, 0, 0, 0.08); }\n    .pagination-container .pagination-item .arrow::before {\n      position: relative;\n      /* top: 3pt; Uncomment this to lower the icons as requested in comments*/\n      content: '';\n      /* By using an em scale, the arrows will size with the font */\n      display: inline-block;\n      width: 0.4em;\n      height: 0.4em;\n      border-right: 0.12em solid rgba(0, 0, 0, 0.87);\n      border-top: 0.12em solid rgba(0, 0, 0, 0.87); }\n    .pagination-container .pagination-item .arrow.left {\n      transform: rotate(-135deg) translate(-50%); }\n    .pagination-container .pagination-item .arrow.right {\n      transform: rotate(45deg); }\n    .pagination-container .pagination-item.disabled {\n      pointer-events: none; }\n      .pagination-container .pagination-item.disabled .arrow::before {\n        border-right: 0.12em solid rgba(0, 0, 0, 0.43);\n        border-top: 0.12em solid rgba(0, 0, 0, 0.43); }\n      .pagination-container .pagination-item.disabled:hover {\n        background-color: transparent;\n        cursor: default; }\n";
	styleInject(css_248z$3);

	var Pagination = function Pagination(props) {
	  var onPageChange = props.onPageChange,
	      totalCount = props.totalCount,
	      _props$siblingCount = props.siblingCount,
	      siblingCount = _props$siblingCount === void 0 ? 1 : _props$siblingCount,
	      currentPage = props.currentPage,
	      pageSize = props.pageSize,
	      className = props.className;
	  var paginationRange = usePagination({
	    currentPage: currentPage,
	    totalCount: totalCount,
	    siblingCount: siblingCount,
	    pageSize: pageSize
	  }); // If there are less than 2 times in pagination range we shall not render the component

	  if (currentPage === 0 || paginationRange.length < 2) {
	    return null;
	  }

	  var onNext = function onNext() {
	    onPageChange(currentPage + 1);
	  };

	  var onPrevious = function onPrevious() {
	    onPageChange(currentPage - 1);
	  };

	  var lastPage = paginationRange[paginationRange.length - 1];
	  return /*#__PURE__*/React.createElement("ul", {
	    className: classnames("pagination-container", _defineProperty({}, className, className))
	  }, /*#__PURE__*/React.createElement("li", {
	    className: classnames("pagination-item", {
	      disabled: currentPage === 1
	    }),
	    onClick: onPrevious
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "arrow left"
	  })), paginationRange.map(function (pageNumber) {
	    // If the pageItem is a DOT, render the DOTS unicode character
	    if (pageNumber === DOTS) {
	      return /*#__PURE__*/React.createElement("li", {
	        className: "pagination-item dots"
	      }, "\u2026");
	    } // Render our Page Pills


	    return /*#__PURE__*/React.createElement("li", {
	      className: classnames("pagination-item", {
	        selected: pageNumber === currentPage
	      }),
	      onClick: function onClick() {
	        return onPageChange(pageNumber);
	      }
	    }, pageNumber);
	  }), /*#__PURE__*/React.createElement("li", {
	    className: classnames("pagination-item", {
	      disabled: currentPage === lastPage
	    }),
	    onClick: onNext
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "arrow right"
	  })));
	};

	var css_248z$2 = "/* adjusts the table position on the page */\r\n  \r\n  table{\r\n    margin-right: auto;\r\n    margin-bottom: auto;\r\n    margin-left: auto;\r\n    margin-top: 40px;\r\n  }\r\n\r\n  #submitbutton{\r\n    font-family: Georgia, 'Times New Roman', Times, serif ;\r\n  }\r\n  \r\n  #addcustomer{\r\n    margin-top: 50px;\r\n    margin-left: 300px;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  #addform {\r\n    margin-left: 300px;\r\n  }\r\n  \r\n\r\n  /* Got some issues with it, needs editing */\r\n  input[type=text], input[type=number] {\r\n    width: 75%;\r\n    /* padding: 12px 20px; */\r\n    margin: 8px 0;\r\n    display: block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /* form div.form-action-buttons{\r\n    text-align: right;\r\n  } */\r\n  \r\n  form * {\r\n    font-size: 14px;\r\n  }\r\n  \r\n\r\n/* Unknown */\r\n  \r\n/* .hide{\r\n    display:none;\r\n} */\r\n\r\ntd {\r\n    border: 1px solid rgb(190,190,190);\r\n    padding: 10px 20px;\r\n    text-align: right;\r\n}\r\n\r\nth {\r\n    border: 1px solid rgb(190,190,190);\r\n    background-color: rgb(235,235,235);\r\n    padding: 10px 20px;\r\n    text-align: right;\r\n}\r\n\r\ntr {\r\n    background-color: rgb(250,250,250);\r\n}\r\n\r\ntr:hover {\r\n    background-color: rgb(177, 152, 152);\r\n}\r\n\r\n/* tr:hover {\r\n    background-color: rgb(161, 68, 68);\r\n}\r\n\r\ntd:hover {\r\n    background-color: rgb(189, 41, 41);\r\n} */\r\n\r\n/* caption {\r\n    padding: 10px;\r\n} */\r\n\r\n/* .removebutton {\r\n    color: red;\r\n} */";
	styleInject(css_248z$2);

	var PageSize = 10;

	var OrderList = function OrderList() {
	  var _useState = react.exports.useState(1),
	      _useState2 = _slicedToArray(_useState, 2),
	      currentPage = _useState2[0],
	      setCurrentPage = _useState2[1];

	  var _useState3 = react.exports.useState(defaultcustomers),
	      _useState4 = _slicedToArray(_useState3, 2),
	      customers = _useState4[0],
	      setCustomers = _useState4[1];

	  var _useState5 = react.exports.useState({
	    fullName: "",
	    customerID: "",
	    orderID: "",
	    orderMethod: "",
	    address: "",
	    phoneNumber: "",
	    orderDateTime: ""
	  }),
	      _useState6 = _slicedToArray(_useState5, 2),
	      addFormData = _useState6[0],
	      setAddFormData = _useState6[1];

	  var _useState7 = react.exports.useState({
	    fullName: "",
	    customerID: "",
	    orderID: "",
	    orderMethod: "",
	    address: "",
	    phoneNumber: "",
	    orderDateTime: ""
	  }),
	      _useState8 = _slicedToArray(_useState7, 2),
	      editFormData = _useState8[0],
	      setEditFormData = _useState8[1];

	  var _useState9 = react.exports.useState(null),
	      _useState10 = _slicedToArray(_useState9, 2),
	      editCustomerId = _useState10[0],
	      setEditCustomerId = _useState10[1];

	  var currentTableData = react.exports.useMemo(function () {
	    var firstPageIndex = (currentPage - 1) * PageSize;
	    var lastPageIndex = firstPageIndex + PageSize;
	    return customers.slice(firstPageIndex, lastPageIndex);
	  }, [currentPage]);

	  var handleAddFormChange = function handleAddFormChange(event) {
	    event.preventDefault();
	    var fieldName = event.target.getAttribute("name");
	    var fieldValue = event.target.value;

	    var newFormData = _objectSpread2({}, addFormData);

	    newFormData[fieldName] = fieldValue;
	    setAddFormData(newFormData);
	  };

	  var handleEditFormChange = function handleEditFormChange(event) {
	    event.preventDefault();
	    var fieldName = event.target.getAttribute("name");
	    var fieldValue = event.target.value;

	    var newFormData = _objectSpread2({}, editFormData);

	    newFormData[fieldName] = fieldValue;
	    setEditFormData(newFormData);
	  };

	  var handleAddFormSubmit = function handleAddFormSubmit(event) {
	    event.preventDefault();
	    var newCustomer = {
	      fullName: addFormData.fullName,
	      customerID: addFormData.customerID,
	      orderID: addFormData.orderID,
	      orderMethod: addFormData.orderMethod,
	      address: addFormData.address,
	      phoneNumber: addFormData.phoneNumber,
	      orderDateTime: addFormData.orderDateTime
	    };
	    var newCustomers = [].concat(_toConsumableArray(customers), [newCustomer]);
	    setCustomers(newCustomers);
	  };

	  var handleEditFormSubmit = function handleEditFormSubmit(event) {
	    event.preventDefault();
	    var editedCustomer = {
	      id: editCustomerId,
	      fullName: editFormData.fullName,
	      customerID: editFormData.customerID,
	      orderID: editFormData.orderID,
	      orderMethod: editFormData.orderMethod,
	      address: editFormData.address,
	      phoneNumber: editFormData.phoneNumber,
	      orderDateTime: editFormData.orderDateTime
	    };

	    var newCustomers = _toConsumableArray(customers);

	    var index = customers.findIndex(function (customer) {
	      return customer.id === editCustomerId;
	    });
	    newCustomers[index] = editedCustomer;
	    setCustomers(newCustomers);
	    setEditCustomerId(null);
	  };

	  var handleEditClick = function handleEditClick(event, customer) {
	    event.preventDefault();
	    setEditCustomerId(customer.id);
	    var formValues = {
	      fullName: customer.fullName,
	      customerID: customer.customerID,
	      orderID: customer.orderID,
	      orderMethod: customer.orderMethod,
	      address: customer.address,
	      phoneNumber: customer.phoneNumber,
	      orderDateTime: customer.orderDateTime
	    };
	    setEditFormData(formValues);
	  };

	  var handleDeleteClick = function handleDeleteClick(customerId) {
	    var newCustomers = _toConsumableArray(customers);

	    var index = customers.findIndex(function (customer) {
	      return customer.id === customerId;
	    });
	    newCustomers.splice(index, 1);
	    setCustomers(newCustomers);
	  };

	  return /*#__PURE__*/React.createElement("div", {
	    className: "table-container"
	  }, /*#__PURE__*/React.createElement("h2", {
	    id: "OrderPageTitle"
	  }, " Store Order Tracker"), /*#__PURE__*/React.createElement("form", {
	    onSubmit: handleEditFormSubmit
	  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Customer Name"), /*#__PURE__*/React.createElement("th", null, "Customer ID"), /*#__PURE__*/React.createElement("th", null, "Order ID"), /*#__PURE__*/React.createElement("th", null, "Method"), /*#__PURE__*/React.createElement("th", null, "Address "), /*#__PURE__*/React.createElement("th", null, "Phone No. "), /*#__PURE__*/React.createElement("th", null, "Order Date & Time"), /*#__PURE__*/React.createElement("th", null, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, currentTableData.map(function (customer) {
	    return /*#__PURE__*/React.createElement(react.exports.Fragment, null, editCustomerId === customer.id ? /*#__PURE__*/React.createElement(EditableRow, {
	      editFormData: editFormData,
	      handleEditFormChange: handleEditFormChange
	    }) : /*#__PURE__*/React.createElement(ReadOnlyRow, {
	      customer: customer,
	      handleEditClick: handleEditClick,
	      handleDeleteClick: handleDeleteClick
	    }));
	  })))), /*#__PURE__*/React.createElement(Pagination, {
	    className: "pagination-bar",
	    currentPage: currentPage,
	    totalCount: customers.length,
	    pageSize: PageSize,
	    onPageChange: function onPageChange(page) {
	      return setCurrentPage(page);
	    }
	  }), /*#__PURE__*/React.createElement("h2", {
	    id: "addcustomer"
	  }, " Add a Customer "), /*#__PURE__*/React.createElement("form", {
	    id: "addform",
	    onSubmit: handleAddFormSubmit
	  }, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    name: "fullName",
	    required: "required",
	    placeholder: "Enter a name: ",
	    onChange: handleAddFormChange
	  }), /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    name: "customerID",
	    required: "required",
	    placeholder: "Enter customer ID:",
	    onChange: handleAddFormChange
	  }), /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    name: "orderID",
	    required: "required",
	    placeholder: "Enter order ID:",
	    onChange: handleAddFormChange
	  }), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    name: "orderMethod",
	    required: "required",
	    placeholder: "Enter order method:",
	    onChange: handleAddFormChange
	  }), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    name: "address",
	    required: "required",
	    placeholder: "Enter an address: ",
	    onChange: handleAddFormChange
	  }), /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    name: "phoneNumber",
	    required: "required",
	    placeholder: "Enter a phone number: ",
	    onChange: handleAddFormChange
	  }), /*#__PURE__*/React.createElement("input", {
	    type: "datetime-local",
	    name: "orderDateTime",
	    required: "required",
	    placeholder: "Enter order placement date & time: ",
	    onChange: handleAddFormChange
	  }), /*#__PURE__*/React.createElement("button", {
	    type: "submit"
	  }, " Add! ")));
	};

	var css_248z$1 = "#OrderPageTitle {\r\n    margin-left: 25px;\r\n  }";
	styleInject(css_248z$1);

	// import BasicPagination from './Pager';
	// const test = () => {
	//     return "Hello";
	// }
	// {test()}

	var OrderPage = function OrderPage() {
	  return /*#__PURE__*/React.createElement("div", null, OrderList());
	};
	//     constructor(props) {
	//         super(props);
	//     }
	//     render() {
	//         return (
	//             // input your address and stuff
	//         <div className='OrderPage'>
	//             <h1> Order Page COMING SOON!!! </h1>
	//         </div>
	//         );
	//     }

	var css_248z = "body {\r\n    background-color: rgb(188, 204, 209);\r\n    margin: 0 0px;\r\n    font-family: ss;\r\n  }\r\n\r\n/* Later need to change */\r\nhtml {\r\n    font-family: sans-serif;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\np, li, a{\r\n    font-size: 14px;\r\n}\r\n\r\nnav ul {\r\n    width: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: rgb(198, 24, 24);\r\n}\r\n\r\nnav li {\r\n    float: left;\r\n}\r\n\r\nnav li a {\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n}\r\n\r\nnav li a:hover {\r\n    background-color: rgb(187, 202, 211);\r\n}\r\n\r\na links */\r\na:link {\r\n    color: white;\r\n}\r\n\r\na:visited {\r\n    color: white;\r\n} \r\n\r\na:hover {\r\n    color: maroon;\r\n}\r\n\r\na:active {\r\n    color: blue;\r\n}\r\n\r\ntr.highlight td {\r\n    background-color: #a6a8bd;\r\n}";
	styleInject(css_248z);

	function App() {
	  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
	    to: "/"
	  }, "[Home Page]")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
	    to: "/Latestpromotions"
	  }, "[Latest Promotions]")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
	    to: "/Delivery"
	  }, "[Delivery]")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
	    to: "/Takeaway"
	  }, "[Takeaway]")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
	    to: "/AboutUs"
	  }, "[About Us]")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
	    to: "/OrderPage"
	  }, "[Store Order Tracker]")))), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
	    path: "/OrderPage",
	    element: /*#__PURE__*/React.createElement(OrderPage, null)
	  }), /*#__PURE__*/React.createElement(Route, {
	    path: "/AboutUs",
	    element: /*#__PURE__*/React.createElement(AboutUs, null)
	  }), /*#__PURE__*/React.createElement(Route, {
	    path: "/Takeaway",
	    element: /*#__PURE__*/React.createElement(Takeaway, null)
	  }), /*#__PURE__*/React.createElement(Route, {
	    path: "/Delivery",
	    element: /*#__PURE__*/React.createElement(Delivery, null)
	  }), /*#__PURE__*/React.createElement(Route, {
	    path: "/Latestpromotions",
	    element: /*#__PURE__*/React.createElement(Latestpromotions, null)
	  }), /*#__PURE__*/React.createElement(Route, {
	    path: "/",
	    element: /*#__PURE__*/React.createElement(HomePage, null)
	  }))));
	}
	//     render() {
	//         return (
	//             <div className='app'>
	//                 <h1>
	//                 <img src="images/pizzalogo.png" className="pizzalogo" alt="Logo, but nothing shows up" />
	//                     <h2>
	//                     <img src="images/homepage.jpg" className="homepage" alt="Pizza, but nothing shows up" />
	//                         <h3 className="greetings">
	//                             Welcome to Dominoes! 
	//                             <h4>Start your order</h4>
	//                             <p className="Takeaway">  
	//                                 <a /**/ href="OrderPage.html">Takeaway!</a>
	//                                 {/*<input type="button" onClick={"window.location.href='https://www.w3docs.com';"} value="w3docs"/> */} 
	//                             </p>
	//                             <p className="Delivery">
	//                                 <a /**/ href="OrderPage.html">Delivery!</a>
	//                             </p>
	//                         </h3>
	//                     </h2>
	//                 </h1>
	//             </div>
	//         );
	//     }
	// } 
	// import { Switch } from 'react-router-dom';
	// import { Route } from 'react-router-dom';
	// import { NavLink, Switch, Route } from 'react-router-dom';
	// export default HomePage;
	// export default App;

	ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null))), document.getElementById('root'));

})();
