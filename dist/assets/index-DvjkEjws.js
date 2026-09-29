function Bu(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Wu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tc={exports:{}},Oo={},Pc={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=Symbol.for("react.element"),Du=Symbol.for("react.portal"),Fu=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Yu=Symbol.for("react.memo"),Ku=Symbol.for("react.lazy"),_l=Symbol.iterator;function $u(e){return e===null||typeof e!="object"?null:(e=_l&&e[_l]||e["@@iterator"],typeof e=="function"?e:null)}var Oc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ic=Object.assign,Lc={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Oc}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mc(){}Mc.prototype=ln.prototype;function Ws(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Oc}var Ds=Ws.prototype=new Mc;Ds.constructor=Ws;Ic(Ds,ln.prototype);Ds.isPureReactComponent=!0;var Gl=Array.isArray,Bc=Object.prototype.hasOwnProperty,Fs={current:null},Wc={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,n){var i,o={},a=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Bc.call(t,i)&&!Wc.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];o.children=d}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)o[i]===void 0&&(o[i]=l[i]);return{$$typeof:ci,type:e,key:a,ref:s,props:o,_owner:Fs.current}}function Xu(e,t){return{$$typeof:ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ci}function Qu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vl=/\/+/g;function Jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qu(""+e.key):t.toString(36)}function _i(e,t,n,i,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ci:case Du:s=!0}}if(s)return s=e,o=o(s),e=i===""?"."+Jo(s,0):i,Gl(o)?(n="",e!=null&&(n=e.replace(Vl,"$&/")+"/"),_i(o,t,n,"",function(c){return c})):o!=null&&(Hs(o)&&(o=Xu(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Vl,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=i===""?".":i+":",Gl(e))for(var l=0;l<e.length;l++){a=e[l];var d=i+Jo(a,l);s+=_i(a,t,n,d,o)}else if(d=$u(e),typeof d=="function")for(e=d.call(e),l=0;!(a=e.next()).done;)a=a.value,d=i+Jo(a,l++),s+=_i(a,t,n,d,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vi(e,t,n){if(e==null)return e;var i=[],o=0;return _i(e,i,"","",function(a){return t.call(n,a,o++)}),i}function Zu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Gi={transition:null},Ju={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Gi,ReactCurrentOwner:Fs};function Fc(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=ln;Y.Fragment=Fu;Y.Profiler=Uu;Y.PureComponent=Ws;Y.StrictMode=Hu;Y.Suspense=qu;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ju;Y.act=Fc;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Ic({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Fs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)Bc.call(t,d)&&!Wc.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:ci,type:e.type,key:o,ref:a,props:i,_owner:s}};Y.createContext=function(e){return e={$$typeof:Gu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_u,_context:e},e.Consumer=e};Y.createElement=Dc;Y.createFactory=function(e){var t=Dc.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Vu,render:e}};Y.isValidElement=Hs;Y.lazy=function(e){return{$$typeof:Ku,_payload:{_status:-1,_result:e},_init:Zu}};Y.memo=function(e,t){return{$$typeof:Yu,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Gi.transition;Gi.transition={};try{e()}finally{Gi.transition=t}};Y.unstable_act=Fc;Y.useCallback=function(e,t){return Me.current.useCallback(e,t)};Y.useContext=function(e){return Me.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Me.current.useEffect(e,t)};Y.useId=function(){return Me.current.useId()};Y.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Me.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};Y.useRef=function(e){return Me.current.useRef(e)};Y.useState=function(e){return Me.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Me.current.useTransition()};Y.version="18.3.1";Pc.exports=Y;var E=Pc.exports;const Hc=Wu(E),ef=Bu({__proto__:null,default:Hc},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=E,rf=Symbol.for("react.element"),nf=Symbol.for("react.fragment"),of=Object.prototype.hasOwnProperty,af=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sf={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var i,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)of.call(t,i)&&!sf.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:rf,type:e,key:a,ref:s,props:o,_owner:af.current}}Oo.Fragment=nf;Oo.jsx=Uc;Oo.jsxs=Uc;Tc.exports=Oo;var r=Tc.exports,Ba={},_c={exports:{}},$e={},Gc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,W){var G=T.length;T.push(W);e:for(;0<G;){var Q=G-1>>>1,V=T[Q];if(0<o(V,W))T[Q]=W,T[G]=V,G=Q;else break e}}function n(T){return T.length===0?null:T[0]}function i(T){if(T.length===0)return null;var W=T[0],G=T.pop();if(G!==W){T[0]=G;e:for(var Q=0,V=T.length,he=V>>>1;Q<he;){var fe=2*(Q+1)-1,ot=T[fe],Qe=fe+1,U=T[Qe];if(0>o(ot,G))Qe<V&&0>o(U,ot)?(T[Q]=U,T[Qe]=G,Q=Qe):(T[Q]=ot,T[fe]=G,Q=fe);else if(Qe<V&&0>o(U,G))T[Q]=U,T[Qe]=G,Q=Qe;else break e}}return W}function o(T,W){var G=T.sortIndex-W.sortIndex;return G!==0?G:T.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],c=[],f=1,u=null,x=3,k=!1,S=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=T)i(c),W.sortIndex=W.expirationTime,t(d,W);else break;W=n(c)}}function j(T){if(b=!1,g(T),!S)if(n(d)!==null)S=!0,w(A);else{var W=n(c);W!==null&&I(j,W.startTime-T)}}function A(T,W){S=!1,b&&(b=!1,p(C),C=-1),k=!0;var G=x;try{for(g(W),u=n(d);u!==null&&(!(u.expirationTime>W)||T&&!q());){var Q=u.callback;if(typeof Q=="function"){u.callback=null,x=u.priorityLevel;var V=Q(u.expirationTime<=W);W=e.unstable_now(),typeof V=="function"?u.callback=V:u===n(d)&&i(d),g(W)}else i(d);u=n(d)}if(u!==null)var he=!0;else{var fe=n(c);fe!==null&&I(j,fe.startTime-W),he=!1}return he}finally{u=null,x=G,k=!1}}var N=!1,m=null,C=-1,B=5,M=-1;function q(){return!(e.unstable_now()-M<B)}function $(){if(m!==null){var T=e.unstable_now();M=T;var W=!0;try{W=m(!0,T)}finally{W?F():(N=!1,m=null)}}else N=!1}var F;if(typeof h=="function")F=function(){h($)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,Z=P.port2;P.port1.onmessage=$,F=function(){Z.postMessage(null)}}else F=function(){R($,0)};function w(T){m=T,N||(N=!0,F())}function I(T,W){C=R(function(){T(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,w(A))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(T){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var G=x;x=W;try{return T()}finally{x=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,W){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var G=x;x=T;try{return W()}finally{x=G}},e.unstable_scheduleCallback=function(T,W,G){var Q=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Q+G:Q):G=Q,T){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=G+V,T={id:f++,callback:W,priorityLevel:T,startTime:G,expirationTime:V,sortIndex:-1},G>Q?(T.sortIndex=G,t(c,T),n(d)===null&&T===n(c)&&(b?(p(C),C=-1):b=!0,I(j,G-Q))):(T.sortIndex=V,t(d,T),S||k||(S=!0,w(A))),T},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(T){var W=x;return function(){var G=x;x=W;try{return T.apply(this,arguments)}finally{x=G}}}})(Vc);Gc.exports=Vc;var lf=Gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=E,Ke=lf;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qc=new Set,_n={};function Sr(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(_n[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wa=Object.prototype.hasOwnProperty,cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ql={},Yl={};function pf(e){return Wa.call(Yl,e)?!0:Wa.call(ql,e)?!1:cf.test(e)?Yl[e]=!0:(ql[e]=!0,!1)}function hf(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uf(e,t,n,i){if(t===null||typeof t>"u"||hf(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,i,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Us=/[\-:]([a-z])/g;function _s(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Us,_s);Re[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Us,_s);Re[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Us,_s);Re[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gs(e,t,n,i){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uf(t,n,o,i)&&(n=null),i||o===null?pf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var It=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bi=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Vs=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),Fa=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),Ys=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),$c=Symbol.for("react.offscreen"),Kl=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=Kl&&e[Kl]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,ea;function zn(e){if(ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ea=t&&t[1]||""}return`
`+ea+e}var ta=!1;function ra(e,t){if(!e||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),a=i.stack.split(`
`),s=o.length-1,l=a.length-1;1<=s&&0<=l&&o[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==a[l]){var d=`
`+o[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function ff(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=ra(e.type,!1),e;case 11:return e=ra(e.type.render,!1),e;case 1:return e=ra(e.type,!0),e;default:return""}}function Ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case Mr:return"Portal";case Da:return"Profiler";case Vs:return"StrictMode";case Fa:return"Suspense";case Ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kc:return(e.displayName||"Context")+".Consumer";case Yc:return(e._context.displayName||"Context")+".Provider";case qs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ys:return t=e.displayName||null,t!==null?t:Ua(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Ua(e(t))}catch{}}return null}function gf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ua(t);case 8:return t===Vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mf(e){var t=Xc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=mf(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Xc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _a(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $l(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zc(e,t){t=t.checked,t!=null&&Gs(e,"checked",t,!1)}function Ga(e,t){Zc(e,t);var n=Jt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Va(e,t.type,n):t.hasOwnProperty("defaultValue")&&Va(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Va(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function Kr(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ql(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Tn(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function Jc(e,t){var n=Jt(t.value),i=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Zl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ya(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ep(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ai,tp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ai=Ai||document.createElement("div"),Ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xf=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){xf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function rp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function np(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=rp(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var yf=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(e,t){if(t){if(yf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function $a(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,$r=null,Xr=null;function Jl(e){if(e=ui(e)){if(typeof Qa!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Wo(t),Qa(e.stateNode,e.type,t))}}function ip(e){$r?Xr?Xr.push(e):Xr=[e]:$r=e}function op(){if($r){var e=$r,t=Xr;if(Xr=$r=null,Jl(e),t)for(e=0;e<t.length;e++)Jl(t[e])}}function ap(e,t){return e(t)}function sp(){}var na=!1;function lp(e,t,n){if(na)return e(t,n);na=!0;try{return ap(e,t,n)}finally{na=!1,($r!==null||Xr!==null)&&(sp(),op())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var i=Wo(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Za=!1;if(zt)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Za=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Za=!1}function wf(e,t,n,i,o,a,s,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Ln=!1,ao=null,so=!1,Ja=null,vf={onError:function(e){Ln=!0,ao=e}};function bf(e,t,n,i,o,a,s,l,d){Ln=!1,ao=null,wf.apply(vf,arguments)}function jf(e,t,n,i,o,a,s,l,d){if(bf.apply(this,arguments),Ln){if(Ln){var c=ao;Ln=!1,ao=null}else throw Error(z(198));so||(so=!0,Ja=c)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ed(e){if(kr(e)!==e)throw Error(z(188))}function Af(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return ed(o),e;if(a===i)return ed(o),t;a=a.sibling}throw Error(z(188))}if(n.return!==i.return)n=o,i=a;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,i=a;break}if(l===i){s=!0,i=o,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,i=o;break}if(l===i){s=!0,i=a,n=o;break}l=l.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==i)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function cp(e){return e=Af(e),e!==null?pp(e):null}function pp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pp(e);if(t!==null)return t;e=e.sibling}return null}var hp=Ke.unstable_scheduleCallback,td=Ke.unstable_cancelCallback,Sf=Ke.unstable_shouldYield,kf=Ke.unstable_requestPaint,de=Ke.unstable_now,Ef=Ke.unstable_getCurrentPriorityLevel,$s=Ke.unstable_ImmediatePriority,up=Ke.unstable_UserBlockingPriority,lo=Ke.unstable_NormalPriority,Rf=Ke.unstable_LowPriority,fp=Ke.unstable_IdlePriority,Io=null,bt=null;function Cf(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Tf,Nf=Math.log,zf=Math.LN2;function Tf(e){return e>>>=0,e===0?32:31-(Nf(e)/zf|0)|0}var Si=64,ki=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?i=Pn(l):(a&=s,a!==0&&(i=Pn(a)))}else s=n&~o,s!==0?i=Pn(s):a!==0&&(i=Pn(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-ht(t),o=1<<n,i|=e[n],t&=~o;return i}function Pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Of(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-ht(a),l=1<<s,d=o[s];d===-1?(!(l&n)||l&i)&&(o[s]=Pf(l,t)):d<=t&&(e.expiredLanes|=l),a&=~l}}function es(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gp(){var e=Si;return Si<<=1,!(Si&4194240)&&(Si=64),e}function ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function If(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),a=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~a}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ht(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var J=0;function mp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xp,Qs,yp,wp,vp,ts=!1,Ei=[],Gt=null,Vt=null,qt=null,qn=new Map,Yn=new Map,Dt=[],Lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function vn(e,t,n,i,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[o]},t!==null&&(t=ui(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Mf(e,t,n,i,o){switch(t){case"focusin":return Gt=vn(Gt,e,t,n,i,o),!0;case"dragenter":return Vt=vn(Vt,e,t,n,i,o),!0;case"mouseover":return qt=vn(qt,e,t,n,i,o),!0;case"pointerover":var a=o.pointerId;return qn.set(a,vn(qn.get(a)||null,e,t,n,i,o)),!0;case"gotpointercapture":return a=o.pointerId,Yn.set(a,vn(Yn.get(a)||null,e,t,n,i,o)),!0}return!1}function bp(e){var t=dr(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=dp(n),t!==null){e.blockedOn=t,vp(e.priority,function(){yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Xa=i,n.target.dispatchEvent(i),Xa=null}else return t=ui(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function nd(e,t,n){Vi(e)&&n.delete(t)}function Bf(){ts=!1,Gt!==null&&Vi(Gt)&&(Gt=null),Vt!==null&&Vi(Vt)&&(Vt=null),qt!==null&&Vi(qt)&&(qt=null),qn.forEach(nd),Yn.forEach(nd)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Bf)))}function Kn(e){function t(o){return bn(o,e)}if(0<Ei.length){bn(Ei[0],e);for(var n=1;n<Ei.length;n++){var i=Ei[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Gt!==null&&bn(Gt,e),Vt!==null&&bn(Vt,e),qt!==null&&bn(qt,e),qn.forEach(t),Yn.forEach(t),n=0;n<Dt.length;n++)i=Dt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)bp(n),n.blockedOn===null&&Dt.shift()}var Qr=It.ReactCurrentBatchConfig,po=!0;function Wf(e,t,n,i){var o=J,a=Qr.transition;Qr.transition=null;try{J=1,Zs(e,t,n,i)}finally{J=o,Qr.transition=a}}function Df(e,t,n,i){var o=J,a=Qr.transition;Qr.transition=null;try{J=4,Zs(e,t,n,i)}finally{J=o,Qr.transition=a}}function Zs(e,t,n,i){if(po){var o=rs(e,t,n,i);if(o===null)fa(e,t,i,ho,n),rd(e,i);else if(Mf(o,e,t,n,i))i.stopPropagation();else if(rd(e,i),t&4&&-1<Lf.indexOf(e)){for(;o!==null;){var a=ui(o);if(a!==null&&xp(a),a=rs(e,t,n,i),a===null&&fa(e,t,i,ho,n),a===o)break;o=a}o!==null&&i.stopPropagation()}else fa(e,t,i,null,n)}}var ho=null;function rs(e,t,n,i){if(ho=null,e=Ks(i),e=dr(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ho=e,null}function jp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ef()){case $s:return 1;case up:return 4;case lo:case Rf:return 16;case fp:return 536870912;default:return 16}default:return 16}}var Ht=null,Js=null,qi=null;function Ap(){if(qi)return qi;var e,t=Js,n=t.length,i,o="value"in Ht?Ht.value:Ht.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===o[a-i];i++);return qi=o.slice(e,1<i?1-i:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function id(){return!1}function Xe(e){function t(n,i,o,a,s){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ri:id,this.isPropagationStopped=id,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Xe(dn),hi=se({},dn,{view:0,detail:0}),Ff=Xe(hi),oa,aa,jn,Lo=se({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(oa=e.screenX-jn.screenX,aa=e.screenY-jn.screenY):aa=oa=0,jn=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),od=Xe(Lo),Hf=se({},Lo,{dataTransfer:0}),Uf=Xe(Hf),_f=se({},hi,{relatedTarget:0}),sa=Xe(_f),Gf=se({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vf=Xe(Gf),qf=se({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yf=Xe(qf),Kf=se({},dn,{data:0}),ad=Xe(Kf),$f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qf[e])?!!t[e]:!1}function tl(){return Zf}var Jf=se({},hi,{key:function(e){if(e.key){var t=$f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eg=Xe(Jf),tg=se({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=Xe(tg),rg=se({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),ng=Xe(rg),ig=se({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),og=Xe(ig),ag=se({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sg=Xe(ag),lg=[9,13,27,32],rl=zt&&"CompositionEvent"in window,Mn=null;zt&&"documentMode"in document&&(Mn=document.documentMode);var dg=zt&&"TextEvent"in window&&!Mn,Sp=zt&&(!rl||Mn&&8<Mn&&11>=Mn),ld=" ",dd=!1;function kp(e,t){switch(e){case"keyup":return lg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function cg(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(dd=!0,ld);case"textInput":return e=t.data,e===ld&&dd?null:e;default:return null}}function pg(e,t){if(Wr)return e==="compositionend"||!rl&&kp(e,t)?(e=Ap(),qi=Js=Ht=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sp&&t.locale!=="ko"?null:t.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hg[e.type]:t==="textarea"}function Rp(e,t,n,i){ip(i),t=uo(t,"onChange"),0<t.length&&(n=new el("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Bn=null,$n=null;function ug(e){Wp(e,0)}function Mo(e){var t=Hr(e);if(Qc(t))return e}function fg(e,t){if(e==="change")return t}var Cp=!1;if(zt){var la;if(zt){var da="oninput"in document;if(!da){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),da=typeof pd.oninput=="function"}la=da}else la=!1;Cp=la&&(!document.documentMode||9<document.documentMode)}function hd(){Bn&&(Bn.detachEvent("onpropertychange",Np),$n=Bn=null)}function Np(e){if(e.propertyName==="value"&&Mo($n)){var t=[];Rp(t,$n,e,Ks(e)),lp(ug,t)}}function gg(e,t,n){e==="focusin"?(hd(),Bn=t,$n=n,Bn.attachEvent("onpropertychange",Np)):e==="focusout"&&hd()}function mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mo($n)}function xg(e,t){if(e==="click")return Mo(t)}function yg(e,t){if(e==="input"||e==="change")return Mo(t)}function wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:wg;function Xn(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Wa.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var n=ud(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ud(n)}}function zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tp(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vg(e){var t=Tp(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zp(n.ownerDocument.documentElement,n)){if(i!==null&&nl(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(i.start,o);i=i.end===void 0?a:Math.min(i.end,o),!e.extend&&a>i&&(o=i,i=a,a=o),o=fd(n,a);var s=fd(n,i);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bg=zt&&"documentMode"in document&&11>=document.documentMode,Dr=null,ns=null,Wn=null,is=!1;function gd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;is||Dr==null||Dr!==oo(i)||(i=Dr,"selectionStart"in i&&nl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wn&&Xn(Wn,i)||(Wn=i,i=uo(ns,"onSelect"),0<i.length&&(t=new el("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Dr)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fr={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},ca={},Pp={};zt&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function Bo(e){if(ca[e])return ca[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pp)return ca[e]=t[n];return e}var Op=Bo("animationend"),Ip=Bo("animationiteration"),Lp=Bo("animationstart"),Mp=Bo("transitionend"),Bp=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(e,t){Bp.set(e,t),Sr(t,[e])}for(var pa=0;pa<md.length;pa++){var ha=md[pa],jg=ha.toLowerCase(),Ag=ha[0].toUpperCase()+ha.slice(1);rr(jg,"on"+Ag)}rr(Op,"onAnimationEnd");rr(Ip,"onAnimationIteration");rr(Lp,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Mp,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function xd(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,jf(i,t,void 0,e),e.currentTarget=null}function Wp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var s=i.length-1;0<=s;s--){var l=i[s],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==a&&o.isPropagationStopped())break e;xd(o,l,c),a=d}else for(s=0;s<i.length;s++){if(l=i[s],d=l.instance,c=l.currentTarget,l=l.listener,d!==a&&o.isPropagationStopped())break e;xd(o,l,c),a=d}}}if(so)throw e=Ja,so=!1,Ja=null,e}function re(e,t){var n=t[ds];n===void 0&&(n=t[ds]=new Set);var i=e+"__bubble";n.has(i)||(Dp(t,e,2,!1),n.add(i))}function ua(e,t,n){var i=0;t&&(i|=4),Dp(n,e,i,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Qn(e){if(!e[Ni]){e[Ni]=!0,qc.forEach(function(n){n!=="selectionchange"&&(Sg.has(n)||ua(n,!1,e),ua(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,ua("selectionchange",!1,t))}}function Dp(e,t,n,i){switch(jp(t)){case 1:var o=Wf;break;case 4:o=Df;break;default:o=Zs}n=o.bind(null,t,n,e),o=void 0,!Za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fa(e,t,n,i,o){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var l=i.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=i.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;s=s.return}for(;l!==null;){if(s=dr(l),s===null)return;if(d=s.tag,d===5||d===6){i=a=s;continue e}l=l.parentNode}}i=i.return}lp(function(){var c=a,f=Ks(n),u=[];e:{var x=Bp.get(e);if(x!==void 0){var k=el,S=e;switch(e){case"keypress":if(Yi(n)===0)break e;case"keydown":case"keyup":k=eg;break;case"focusin":S="focus",k=sa;break;case"focusout":S="blur",k=sa;break;case"beforeblur":case"afterblur":k=sa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=ng;break;case Op:case Ip:case Lp:k=Vf;break;case Mp:k=og;break;case"scroll":k=Ff;break;case"wheel":k=sg;break;case"copy":case"cut":case"paste":k=Yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=sd}var b=(t&4)!==0,R=!b&&e==="scroll",p=b?x!==null?x+"Capture":null:x;b=[];for(var h=c,g;h!==null;){g=h;var j=g.stateNode;if(g.tag===5&&j!==null&&(g=j,p!==null&&(j=Vn(h,p),j!=null&&b.push(Zn(h,j,g)))),R)break;h=h.return}0<b.length&&(x=new k(x,S,null,n,f),u.push({event:x,listeners:b}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",x&&n!==Xa&&(S=n.relatedTarget||n.fromElement)&&(dr(S)||S[Tt]))break e;if((k||x)&&(x=f.window===f?f:(x=f.ownerDocument)?x.defaultView||x.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=c,S=S?dr(S):null,S!==null&&(R=kr(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=c),k!==S)){if(b=od,j="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=sd,j="onPointerLeave",p="onPointerEnter",h="pointer"),R=k==null?x:Hr(k),g=S==null?x:Hr(S),x=new b(j,h+"leave",k,n,f),x.target=R,x.relatedTarget=g,j=null,dr(f)===c&&(b=new b(p,h+"enter",S,n,f),b.target=g,b.relatedTarget=R,j=b),R=j,k&&S)t:{for(b=k,p=S,h=0,g=b;g;g=Tr(g))h++;for(g=0,j=p;j;j=Tr(j))g++;for(;0<h-g;)b=Tr(b),h--;for(;0<g-h;)p=Tr(p),g--;for(;h--;){if(b===p||p!==null&&b===p.alternate)break t;b=Tr(b),p=Tr(p)}b=null}else b=null;k!==null&&yd(u,x,k,b,!1),S!==null&&R!==null&&yd(u,R,S,b,!0)}}e:{if(x=c?Hr(c):window,k=x.nodeName&&x.nodeName.toLowerCase(),k==="select"||k==="input"&&x.type==="file")var A=fg;else if(cd(x))if(Cp)A=yg;else{A=mg;var N=gg}else(k=x.nodeName)&&k.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(A=xg);if(A&&(A=A(e,c))){Rp(u,A,n,f);break e}N&&N(e,x,c),e==="focusout"&&(N=x._wrapperState)&&N.controlled&&x.type==="number"&&Va(x,"number",x.value)}switch(N=c?Hr(c):window,e){case"focusin":(cd(N)||N.contentEditable==="true")&&(Dr=N,ns=c,Wn=null);break;case"focusout":Wn=ns=Dr=null;break;case"mousedown":is=!0;break;case"contextmenu":case"mouseup":case"dragend":is=!1,gd(u,n,f);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":gd(u,n,f)}var m;if(rl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Wr?kp(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Sp&&n.locale!=="ko"&&(Wr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Wr&&(m=Ap()):(Ht=f,Js="value"in Ht?Ht.value:Ht.textContent,Wr=!0)),N=uo(c,C),0<N.length&&(C=new ad(C,e,null,n,f),u.push({event:C,listeners:N}),m?C.data=m:(m=Ep(n),m!==null&&(C.data=m)))),(m=dg?cg(e,n):pg(e,n))&&(c=uo(c,"onBeforeInput"),0<c.length&&(f=new ad("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=m))}Wp(u,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Vn(e,n),a!=null&&i.unshift(Zn(e,a,o)),a=Vn(e,t),a!=null&&i.push(Zn(e,a,o))),e=e.return}return i}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yd(e,t,n,i,o){for(var a=t._reactName,s=[];n!==null&&n!==i;){var l=n,d=l.alternate,c=l.stateNode;if(d!==null&&d===i)break;l.tag===5&&c!==null&&(l=c,o?(d=Vn(n,a),d!=null&&s.unshift(Zn(n,d,l))):o||(d=Vn(n,a),d!=null&&s.push(Zn(n,d,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var kg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function wd(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(Eg,"")}function zi(e,t,n){if(t=wd(t),wd(e)!==t&&n)throw Error(z(425))}function fo(){}var os=null,as=null;function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,vd=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof vd<"u"?function(e){return vd.resolve(null).then(e).catch(Ng)}:ls;function Ng(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),Kn(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);Kn(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),vt="__reactFiber$"+cn,Jn="__reactProps$"+cn,Tt="__reactContainer$"+cn,ds="__reactEvents$"+cn,zg="__reactListeners$"+cn,Tg="__reactHandles$"+cn;function dr(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bd(e);e!==null;){if(n=e[vt])return n;e=bd(e)}return t}e=n,n=e.parentNode}return null}function ui(e){return e=e[vt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Wo(e){return e[Jn]||null}var cs=[],Ur=-1;function nr(e){return{current:e}}function ne(e){0>Ur||(e.current=cs[Ur],cs[Ur]=null,Ur--)}function te(e,t){Ur++,cs[Ur]=e.current,e.current=t}var er={},Oe=nr(er),He=nr(!1),mr=er;function tn(e,t){var n=e.type.contextTypes;if(!n)return er;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function go(){ne(He),ne(Oe)}function jd(e,t,n){if(Oe.current!==er)throw Error(z(168));te(Oe,t),te(He,n)}function Fp(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(z(108,gf(e)||"Unknown",o));return se({},n,i)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,mr=Oe.current,te(Oe,e),te(He,He.current),!0}function Ad(e,t,n){var i=e.stateNode;if(!i)throw Error(z(169));n?(e=Fp(e,t,mr),i.__reactInternalMemoizedMergedChildContext=e,ne(He),ne(Oe),te(Oe,e)):ne(He),te(He,n)}var Et=null,Do=!1,ma=!1;function Hp(e){Et===null?Et=[e]:Et.push(e)}function Pg(e){Do=!0,Hp(e)}function ir(){if(!ma&&Et!==null){ma=!0;var e=0,t=J;try{var n=Et;for(J=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Et=null,Do=!1}catch(o){throw Et!==null&&(Et=Et.slice(e+1)),hp($s,ir),o}finally{J=t,ma=!1}}return null}var _r=[],Gr=0,xo=null,yo=0,Ze=[],Je=0,xr=null,Rt=1,Ct="";function sr(e,t){_r[Gr++]=yo,_r[Gr++]=xo,xo=e,yo=t}function Up(e,t,n){Ze[Je++]=Rt,Ze[Je++]=Ct,Ze[Je++]=xr,xr=e;var i=Rt;e=Ct;var o=32-ht(i)-1;i&=~(1<<o),n+=1;var a=32-ht(t)+o;if(30<a){var s=o-o%5;a=(i&(1<<s)-1).toString(32),i>>=s,o-=s,Rt=1<<32-ht(t)+o|n<<o|i,Ct=a+e}else Rt=1<<a|n<<o|i,Ct=e}function il(e){e.return!==null&&(sr(e,1),Up(e,1,0))}function ol(e){for(;e===xo;)xo=_r[--Gr],_r[Gr]=null,yo=_r[--Gr],_r[Gr]=null;for(;e===xr;)xr=Ze[--Je],Ze[Je]=null,Ct=Ze[--Je],Ze[Je]=null,Rt=Ze[--Je],Ze[Je]=null}var Ye=null,qe=null,ie=!1,pt=null;function _p(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,qe=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:Rt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,qe=null,!0):!1;default:return!1}}function ps(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hs(e){if(ie){var t=qe;if(t){var n=t;if(!Sd(e,t)){if(ps(e))throw Error(z(418));t=Yt(n.nextSibling);var i=Ye;t&&Sd(e,t)?_p(i,n):(e.flags=e.flags&-4097|2,ie=!1,Ye=e)}}else{if(ps(e))throw Error(z(418));e.flags=e.flags&-4097|2,ie=!1,Ye=e}}}function kd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function Ti(e){if(e!==Ye)return!1;if(!ie)return kd(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ss(e.type,e.memoizedProps)),t&&(t=qe)){if(ps(e))throw Gp(),Error(z(418));for(;t;)_p(e,t),t=Yt(t.nextSibling)}if(kd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ye?Yt(e.stateNode.nextSibling):null;return!0}function Gp(){for(var e=qe;e;)e=Yt(e.nextSibling)}function rn(){qe=Ye=null,ie=!1}function al(e){pt===null?pt=[e]:pt.push(e)}var Og=It.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var i=n.stateNode}if(!i)throw Error(z(147,e));var o=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=o.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ed(e){var t=e._init;return t(e._payload)}function Vp(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function i(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function o(p,h){return p=Qt(p,h),p.index=0,p.sibling=null,p}function a(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,g,j){return h===null||h.tag!==6?(h=Aa(g,p.mode,j),h.return=p,h):(h=o(h,g),h.return=p,h)}function d(p,h,g,j){var A=g.type;return A===Br?f(p,h,g.props.children,j,g.key):h!==null&&(h.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Bt&&Ed(A)===h.type)?(j=o(h,g.props),j.ref=An(p,h,g),j.return=p,j):(j=eo(g.type,g.key,g.props,null,p.mode,j),j.ref=An(p,h,g),j.return=p,j)}function c(p,h,g,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Sa(g,p.mode,j),h.return=p,h):(h=o(h,g.children||[]),h.return=p,h)}function f(p,h,g,j,A){return h===null||h.tag!==7?(h=fr(g,p.mode,j,A),h.return=p,h):(h=o(h,g),h.return=p,h)}function u(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Aa(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case bi:return g=eo(h.type,h.key,h.props,null,p.mode,g),g.ref=An(p,null,h),g.return=p,g;case Mr:return h=Sa(h,p.mode,g),h.return=p,h;case Bt:var j=h._init;return u(p,j(h._payload),g)}if(Tn(h)||yn(h))return h=fr(h,p.mode,g,null),h.return=p,h;Pi(p,h)}return null}function x(p,h,g,j){var A=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:l(p,h,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bi:return g.key===A?d(p,h,g,j):null;case Mr:return g.key===A?c(p,h,g,j):null;case Bt:return A=g._init,x(p,h,A(g._payload),j)}if(Tn(g)||yn(g))return A!==null?null:f(p,h,g,j,null);Pi(p,g)}return null}function k(p,h,g,j,A){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(g)||null,l(h,p,""+j,A);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case bi:return p=p.get(j.key===null?g:j.key)||null,d(h,p,j,A);case Mr:return p=p.get(j.key===null?g:j.key)||null,c(h,p,j,A);case Bt:var N=j._init;return k(p,h,g,N(j._payload),A)}if(Tn(j)||yn(j))return p=p.get(g)||null,f(h,p,j,A,null);Pi(h,j)}return null}function S(p,h,g,j){for(var A=null,N=null,m=h,C=h=0,B=null;m!==null&&C<g.length;C++){m.index>C?(B=m,m=null):B=m.sibling;var M=x(p,m,g[C],j);if(M===null){m===null&&(m=B);break}e&&m&&M.alternate===null&&t(p,m),h=a(M,h,C),N===null?A=M:N.sibling=M,N=M,m=B}if(C===g.length)return n(p,m),ie&&sr(p,C),A;if(m===null){for(;C<g.length;C++)m=u(p,g[C],j),m!==null&&(h=a(m,h,C),N===null?A=m:N.sibling=m,N=m);return ie&&sr(p,C),A}for(m=i(p,m);C<g.length;C++)B=k(m,p,C,g[C],j),B!==null&&(e&&B.alternate!==null&&m.delete(B.key===null?C:B.key),h=a(B,h,C),N===null?A=B:N.sibling=B,N=B);return e&&m.forEach(function(q){return t(p,q)}),ie&&sr(p,C),A}function b(p,h,g,j){var A=yn(g);if(typeof A!="function")throw Error(z(150));if(g=A.call(g),g==null)throw Error(z(151));for(var N=A=null,m=h,C=h=0,B=null,M=g.next();m!==null&&!M.done;C++,M=g.next()){m.index>C?(B=m,m=null):B=m.sibling;var q=x(p,m,M.value,j);if(q===null){m===null&&(m=B);break}e&&m&&q.alternate===null&&t(p,m),h=a(q,h,C),N===null?A=q:N.sibling=q,N=q,m=B}if(M.done)return n(p,m),ie&&sr(p,C),A;if(m===null){for(;!M.done;C++,M=g.next())M=u(p,M.value,j),M!==null&&(h=a(M,h,C),N===null?A=M:N.sibling=M,N=M);return ie&&sr(p,C),A}for(m=i(p,m);!M.done;C++,M=g.next())M=k(m,p,C,M.value,j),M!==null&&(e&&M.alternate!==null&&m.delete(M.key===null?C:M.key),h=a(M,h,C),N===null?A=M:N.sibling=M,N=M);return e&&m.forEach(function($){return t(p,$)}),ie&&sr(p,C),A}function R(p,h,g,j){if(typeof g=="object"&&g!==null&&g.type===Br&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bi:e:{for(var A=g.key,N=h;N!==null;){if(N.key===A){if(A=g.type,A===Br){if(N.tag===7){n(p,N.sibling),h=o(N,g.props.children),h.return=p,p=h;break e}}else if(N.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Bt&&Ed(A)===N.type){n(p,N.sibling),h=o(N,g.props),h.ref=An(p,N,g),h.return=p,p=h;break e}n(p,N);break}else t(p,N);N=N.sibling}g.type===Br?(h=fr(g.props.children,p.mode,j,g.key),h.return=p,p=h):(j=eo(g.type,g.key,g.props,null,p.mode,j),j.ref=An(p,h,g),j.return=p,p=j)}return s(p);case Mr:e:{for(N=g.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=o(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Sa(g,p.mode,j),h.return=p,p=h}return s(p);case Bt:return N=g._init,R(p,h,N(g._payload),j)}if(Tn(g))return S(p,h,g,j);if(yn(g))return b(p,h,g,j);Pi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=o(h,g),h.return=p,p=h):(n(p,h),h=Aa(g,p.mode,j),h.return=p,p=h),s(p)):n(p,h)}return R}var nn=Vp(!0),qp=Vp(!1),wo=nr(null),vo=null,Vr=null,sl=null;function ll(){sl=Vr=vo=null}function dl(e){var t=wo.current;ne(wo),e._currentValue=t}function us(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Zr(e,t){vo=e,sl=Vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(sl!==e)if(e={context:e,memoizedValue:t,next:null},Vr===null){if(vo===null)throw Error(z(308));Vr=e,vo.dependencies={lanes:0,firstContext:e}}else Vr=Vr.next=e;return t}var cr=null;function cl(e){cr===null?cr=[e]:cr.push(e)}function Yp(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,cl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,i)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,X&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,Pt(e,n)}return o=i.interleaved,o===null?(t.next=t,cl(i)):(t.next=o.next,o.next=t),i.interleaved=t,Pt(e,n)}function Ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Xs(e,n)}}function Rd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,i){var o=e.updateQueue;Wt=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var d=l,c=d.next;d.next=null,s===null?a=c:s.next=c,s=d;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=d))}if(a!==null){var u=o.baseState;s=0,f=c=d=null,l=a;do{var x=l.lane,k=l.eventTime;if((i&x)===x){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,b=l;switch(x=t,k=n,b.tag){case 1:if(S=b.payload,typeof S=="function"){u=S.call(k,u,x);break e}u=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=b.payload,x=typeof S=="function"?S.call(k,u,x):S,x==null)break e;u=se({},u,x);break e;case 2:Wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[l]:x.push(l))}else k={eventTime:k,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=k,d=u):f=f.next=k,s|=x;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;x=l,l=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(f===null&&(d=u),o.baseState=d,o.firstBaseUpdate=c,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);wr|=s,e.lanes=s,e.memoizedState=u}}function Cd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(z(191,o));o.call(i)}}}var fi={},jt=nr(fi),ei=nr(fi),ti=nr(fi);function pr(e){if(e===fi)throw Error(z(174));return e}function hl(e,t){switch(te(ti,t),te(ei,e),te(jt,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ya(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ya(t,e)}ne(jt),te(jt,t)}function on(){ne(jt),ne(ei),ne(ti)}function $p(e){pr(ti.current);var t=pr(jt.current),n=Ya(t,e.type);t!==n&&(te(ei,e),te(jt,n))}function ul(e){ei.current===e&&(ne(jt),ne(ei))}var oe=nr(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xa=[];function fl(){for(var e=0;e<xa.length;e++)xa[e]._workInProgressVersionPrimary=null;xa.length=0}var $i=It.ReactCurrentDispatcher,ya=It.ReactCurrentBatchConfig,yr=0,ae=null,ye=null,be=null,Ao=!1,Dn=!1,ri=0,Ig=0;function Ce(){throw Error(z(321))}function gl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function ml(e,t,n,i,o,a){if(yr=a,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?Wg:Dg,e=n(i,o),Dn){a=0;do{if(Dn=!1,ri=0,25<=a)throw Error(z(301));a+=1,be=ye=null,t.updateQueue=null,$i.current=Fg,e=n(i,o)}while(Dn)}if($i.current=So,t=ye!==null&&ye.next!==null,yr=0,be=ye=ae=null,Ao=!1,t)throw Error(z(300));return e}function xl(){var e=ri!==0;return ri=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ae.memoizedState=be=e:be=be.next=e,be}function nt(){if(ye===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=be===null?ae.memoizedState:be.next;if(t!==null)be=t,ye=e;else{if(e===null)throw Error(z(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},be===null?ae.memoizedState=be=e:be=be.next=e}return be}function ni(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=nt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var i=ye,o=i.baseQueue,a=n.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}i.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,i=i.baseState;var l=s=null,d=null,c=a;do{var f=c.lane;if((yr&f)===f)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=u,s=i):d=d.next=u,ae.lanes|=f,wr|=f}c=c.next}while(c!==null&&c!==a);d===null?s=i:d.next=l,ft(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=d,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ae.lanes|=a,wr|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function va(e){var t=nt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);ft(a,t.memoizedState)||(Fe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Xp(){}function Qp(e,t){var n=ae,i=nt(),o=t(),a=!ft(i.memoizedState,o);if(a&&(i.memoizedState=o,Fe=!0),i=i.queue,yl(eh.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,ii(9,Jp.bind(null,n,i,o,t),void 0,null),Ae===null)throw Error(z(349));yr&30||Zp(n,t,o)}return o}function Zp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jp(e,t,n,i){t.value=n,t.getSnapshot=i,th(t)&&rh(e)}function eh(e,t,n){return n(function(){th(t)&&rh(e)})}function th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function rh(e){var t=Pt(e,1);t!==null&&ut(t,e,1,-1)}function Nd(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=Bg.bind(null,ae,e),[t.memoizedState,e]}function ii(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function nh(){return nt().memoizedState}function Xi(e,t,n,i){var o=wt();ae.flags|=e,o.memoizedState=ii(1|t,n,void 0,i===void 0?null:i)}function Fo(e,t,n,i){var o=nt();i=i===void 0?null:i;var a=void 0;if(ye!==null){var s=ye.memoizedState;if(a=s.destroy,i!==null&&gl(i,s.deps)){o.memoizedState=ii(t,n,a,i);return}}ae.flags|=e,o.memoizedState=ii(1|t,n,a,i)}function zd(e,t){return Xi(8390656,8,e,t)}function yl(e,t){return Fo(2048,8,e,t)}function ih(e,t){return Fo(4,2,e,t)}function oh(e,t){return Fo(4,4,e,t)}function ah(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sh(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4,4,ah.bind(null,t,e),n)}function wl(){}function lh(e,t){var n=nt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&gl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function dh(e,t){var n=nt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&gl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function ch(e,t,n){return yr&21?(ft(n,t)||(n=gp(),ae.lanes|=n,wr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function Lg(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var i=ya.transition;ya.transition={};try{e(!1),t()}finally{J=n,ya.transition=i}}function ph(){return nt().memoizedState}function Mg(e,t,n){var i=Xt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},hh(e))uh(t,n);else if(n=Yp(e,t,n,i),n!==null){var o=Le();ut(n,e,i,o),fh(n,t,i)}}function Bg(e,t,n){var i=Xt(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(hh(e))uh(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,n);if(o.hasEagerState=!0,o.eagerState=l,ft(l,s)){var d=t.interleaved;d===null?(o.next=o,cl(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=Yp(e,t,o,i),n!==null&&(o=Le(),ut(n,e,i,o),fh(n,t,i))}}function hh(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function uh(e,t){Dn=Ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fh(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Xs(e,n)}}var So={readContext:rt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Wg={readContext:rt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:zd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,ah.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=wt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Mg.bind(null,ae,e),[i.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Nd,useDebugValue:wl,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Nd(!1),t=e[0];return e=Lg.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ae,o=wt();if(ie){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Ae===null)throw Error(z(349));yr&30||Zp(i,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,zd(eh.bind(null,i,a,e),[e]),i.flags|=2048,ii(9,Jp.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=wt(),t=Ae.identifierPrefix;if(ie){var n=Ct,i=Rt;n=(i&~(1<<32-ht(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ig++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dg={readContext:rt,useCallback:lh,useContext:rt,useEffect:yl,useImperativeHandle:sh,useInsertionEffect:ih,useLayoutEffect:oh,useMemo:dh,useReducer:wa,useRef:nh,useState:function(){return wa(ni)},useDebugValue:wl,useDeferredValue:function(e){var t=nt();return ch(t,ye.memoizedState,e)},useTransition:function(){var e=wa(ni)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Qp,useId:ph,unstable_isNewReconciler:!1},Fg={readContext:rt,useCallback:lh,useContext:rt,useEffect:yl,useImperativeHandle:sh,useInsertionEffect:ih,useLayoutEffect:oh,useMemo:dh,useReducer:va,useRef:nh,useState:function(){return va(ni)},useDebugValue:wl,useDeferredValue:function(e){var t=nt();return ye===null?t.memoizedState=e:ch(t,ye.memoizedState,e)},useTransition:function(){var e=va(ni)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Qp,useId:ph,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ho={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Le(),o=Xt(e),a=Nt(i,o);a.payload=t,n!=null&&(a.callback=n),t=Kt(e,a,o),t!==null&&(ut(t,e,o,i),Ki(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Le(),o=Xt(e),a=Nt(i,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Kt(e,a,o),t!==null&&(ut(t,e,o,i),Ki(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),i=Xt(e),o=Nt(n,i);o.tag=2,t!=null&&(o.callback=t),t=Kt(e,o,i),t!==null&&(ut(t,e,i,n),Ki(t,e,i))}};function Td(e,t,n,i,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,s):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,i)||!Xn(o,a):!0}function gh(e,t,n){var i=!1,o=er,a=t.contextType;return typeof a=="object"&&a!==null?a=rt(a):(o=Ue(t)?mr:Oe.current,i=t.contextTypes,a=(i=i!=null)?tn(e,o):er),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ho,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Pd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function gs(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},pl(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=rt(a):(a=Ue(t)?mr:Oe.current,o.context=tn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fs(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ho.enqueueReplaceState(o,o.state,null),bo(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",i=t;do n+=ff(i),i=i.return;while(i);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ba(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hg=typeof WeakMap=="function"?WeakMap:Map;function mh(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Eo||(Eo=!0,Es=i),ms(e,t)},n}function xh(e,t,n){n=Nt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){ms(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ms(e,t),typeof i!="function"&&($t===null?$t=new Set([this]):$t.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Od(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Hg;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=tm.bind(null,e,t,n),t.then(e,e))}function Id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ld(e,t,n,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var Ug=It.ReactCurrentOwner,Fe=!1;function Ie(e,t,n,i){t.child=e===null?qp(t,null,n,i):nn(t,e.child,n,i)}function Md(e,t,n,i,o){n=n.render;var a=t.ref;return Zr(t,o),i=ml(e,t,n,i,a,o),n=xl(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ot(e,t,o)):(ie&&n&&il(t),t.flags|=1,Ie(e,t,i,o),t.child)}function Bd(e,t,n,i,o){if(e===null){var a=n.type;return typeof a=="function"&&!Rl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,yh(e,t,a,i,o)):(e=eo(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(s,i)&&e.ref===t.ref)return Ot(e,t,o)}return t.flags|=1,e=Qt(a,i),e.ref=t.ref,e.return=t,t.child=e}function yh(e,t,n,i,o){if(e!==null){var a=e.memoizedProps;if(Xn(a,i)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=i=a,(e.lanes&o)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ot(e,t,o)}return xs(e,t,n,i,o)}function wh(e,t,n){var i=t.pendingProps,o=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Yr,Ve),Ve|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Yr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,te(Yr,Ve),Ve|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,te(Yr,Ve),Ve|=i;return Ie(e,t,o,n),t.child}function vh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xs(e,t,n,i,o){var a=Ue(n)?mr:Oe.current;return a=tn(t,a),Zr(t,o),n=ml(e,t,n,i,a,o),i=xl(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ot(e,t,o)):(ie&&i&&il(t),t.flags|=1,Ie(e,t,n,o),t.child)}function Wd(e,t,n,i,o){if(Ue(n)){var a=!0;mo(t)}else a=!1;if(Zr(t,o),t.stateNode===null)Qi(e,t),gh(t,n,i),gs(t,n,i,o),i=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var d=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=rt(c):(c=Ue(n)?mr:Oe.current,c=tn(t,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==i||d!==c)&&Pd(t,s,i,c),Wt=!1;var x=t.memoizedState;s.state=x,bo(t,i,s,o),d=t.memoizedState,l!==i||x!==d||He.current||Wt?(typeof f=="function"&&(fs(t,n,f,i),d=t.memoizedState),(l=Wt||Td(t,n,l,i,x,d,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=c,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Kp(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:dt(t.type,l),s.props=c,u=t.pendingProps,x=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=rt(d):(d=Ue(n)?mr:Oe.current,d=tn(t,d));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==u||x!==d)&&Pd(t,s,i,d),Wt=!1,x=t.memoizedState,s.state=x,bo(t,i,s,o);var S=t.memoizedState;l!==u||x!==S||He.current||Wt?(typeof k=="function"&&(fs(t,n,k,i),S=t.memoizedState),(c=Wt||Td(t,n,c,i,x,S,d)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,S,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,S,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=S),s.props=i,s.state=S,s.context=d,i=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),i=!1)}return ys(e,t,n,i,a,o)}function ys(e,t,n,i,o,a){vh(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return o&&Ad(t,n,!1),Ot(e,t,a);i=t.stateNode,Ug.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=nn(t,e.child,null,a),t.child=nn(t,null,l,a)):Ie(e,t,l,a),t.memoizedState=i.state,o&&Ad(t,n,!0),t.child}function bh(e){var t=e.stateNode;t.pendingContext?jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jd(e,t.context,!1),hl(e,t.containerInfo)}function Dd(e,t,n,i,o){return rn(),al(o),t.flags|=256,Ie(e,t,n,i),t.child}var ws={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function jh(e,t,n){var i=t.pendingProps,o=oe.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(oe,o&1),e===null)return hs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Go(s,i,0,null),e=fr(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=vs(n),t.memoizedState=ws,e):vl(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return _g(e,t,s,i,l,o,n);if(a){a=i.fallback,s=t.mode,o=e.child,l=o.sibling;var d={mode:"hidden",children:i.children};return!(s&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=Qt(o,d),i.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=Qt(l,a):(a=fr(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=e.child.memoizedState,s=s===null?vs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=ws,i}return a=e.child,e=a.sibling,i=Qt(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function vl(e,t){return t=Go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oi(e,t,n,i){return i!==null&&al(i),nn(t,e.child,null,n),e=vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _g(e,t,n,i,o,a,s){if(n)return t.flags&256?(t.flags&=-257,i=ba(Error(z(422))),Oi(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,o=t.mode,i=Go({mode:"visible",children:i.children},o,0,null),a=fr(a,o,s,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&nn(t,e.child,null,s),t.child.memoizedState=vs(s),t.memoizedState=ws,a);if(!(t.mode&1))return Oi(e,t,s,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(z(419)),i=ba(a,i,void 0),Oi(e,t,s,i)}if(l=(s&e.childLanes)!==0,Fe||l){if(i=Ae,i!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Pt(e,o),ut(i,e,o,-1))}return El(),i=ba(Error(z(421))),Oi(e,t,s,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=rm.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,qe=Yt(o.nextSibling),Ye=t,ie=!0,pt=null,e!==null&&(Ze[Je++]=Rt,Ze[Je++]=Ct,Ze[Je++]=xr,Rt=e.id,Ct=e.overflow,xr=t),t=vl(t,i.children),t.flags|=4096,t)}function Fd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),us(e.return,t,n)}function ja(e,t,n,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=o)}function Ah(e,t,n){var i=t.pendingProps,o=i.revealOrder,a=i.tail;if(Ie(e,t,i.children,n),i=oe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fd(e,n,t);else if(e.tag===19)Fd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(te(oe,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ja(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ja(t,!0,n,null,a);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gg(e,t,n){switch(t.tag){case 3:bh(t),rn();break;case 5:$p(t);break;case 1:Ue(t.type)&&mo(t);break;case 4:hl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;te(wo,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(te(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?jh(e,t,n):(te(oe,oe.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);te(oe,oe.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return Ah(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(oe,oe.current),i)break;return null;case 22:case 23:return t.lanes=0,wh(e,t,n)}return Ot(e,t,n)}var Sh,bs,kh,Eh;Sh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};kh=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,pr(jt.current);var a=null;switch(n){case"input":o=_a(e,o),i=_a(e,i),a=[];break;case"select":o=se({},o,{value:void 0}),i=se({},i,{value:void 0}),a=[];break;case"textarea":o=qa(e,o),i=qa(e,i),a=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=fo)}Ka(n,i);var s;n=null;for(c in o)if(!i.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_n.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var d=i[c];if(l=o!=null?o[c]:void 0,i.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(a||(a=[]),a.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(a=a||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_n.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&re("scroll",e),a||l===d||(a=[])):(a=a||[]).push(c,d))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Eh=function(e,t,n,i){n!==i&&(t.flags|=4)};function Sn(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Vg(e,t,n){var i=t.pendingProps;switch(ol(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ue(t.type)&&go(),Ne(t),null;case 3:return i=t.stateNode,on(),ne(He),ne(Oe),fl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(Ns(pt),pt=null))),bs(e,t),Ne(t),null;case 5:ul(t);var o=pr(ti.current);if(n=t.type,e!==null&&t.stateNode!=null)kh(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(z(166));return Ne(t),null}if(e=pr(jt.current),Ti(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[vt]=t,i[Jn]=a,e=(t.mode&1)!==0,n){case"dialog":re("cancel",i),re("close",i);break;case"iframe":case"object":case"embed":re("load",i);break;case"video":case"audio":for(o=0;o<On.length;o++)re(On[o],i);break;case"source":re("error",i);break;case"img":case"image":case"link":re("error",i),re("load",i);break;case"details":re("toggle",i);break;case"input":$l(i,a),re("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},re("invalid",i);break;case"textarea":Ql(i,a),re("invalid",i)}Ka(n,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&zi(i.textContent,l,e),o=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&zi(i.textContent,l,e),o=["children",""+l]):_n.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&re("scroll",i)}switch(n){case"input":ji(i),Xl(i,a,!0);break;case"textarea":ji(i),Zl(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=fo)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ep(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),n==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[vt]=t,e[Jn]=i,Sh(e,t,!1,!1),t.stateNode=e;e:{switch(s=$a(n,i),n){case"dialog":re("cancel",e),re("close",e),o=i;break;case"iframe":case"object":case"embed":re("load",e),o=i;break;case"video":case"audio":for(o=0;o<On.length;o++)re(On[o],e);o=i;break;case"source":re("error",e),o=i;break;case"img":case"image":case"link":re("error",e),re("load",e),o=i;break;case"details":re("toggle",e),o=i;break;case"input":$l(e,i),o=_a(e,i),re("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=se({},i,{value:void 0}),re("invalid",e);break;case"textarea":Ql(e,i),o=qa(e,i),re("invalid",e);break;default:o=i}Ka(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var d=l[a];a==="style"?np(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&tp(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Gn(e,d):typeof d=="number"&&Gn(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(_n.hasOwnProperty(a)?d!=null&&a==="onScroll"&&re("scroll",e):d!=null&&Gs(e,a,d,s))}switch(n){case"input":ji(e),Xl(e,i,!1);break;case"textarea":ji(e),Zl(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Jt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Kr(e,!!i.multiple,a,!1):i.defaultValue!=null&&Kr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Eh(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(z(166));if(n=pr(ti.current),pr(jt.current),Ti(t)){if(i=t.stateNode,n=t.memoizedProps,i[vt]=t,(a=i.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:zi(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vt]=t,t.stateNode=i}return Ne(t),null;case 13:if(ne(oe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&qe!==null&&t.mode&1&&!(t.flags&128))Gp(),rn(),t.flags|=98560,a=!1;else if(a=Ti(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(z(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(z(317));a[vt]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),a=!1}else pt!==null&&(Ns(pt),pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?we===0&&(we=3):El())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return on(),bs(e,t),e===null&&Qn(t.stateNode.containerInfo),Ne(t),null;case 10:return dl(t.type._context),Ne(t),null;case 17:return Ue(t.type)&&go(),Ne(t),null;case 19:if(ne(oe),a=t.memoizedState,a===null)return Ne(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)Sn(a,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=jo(e),s!==null){for(t.flags|=128,Sn(a,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(oe,oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&de()>sn&&(t.flags|=128,i=!0,Sn(a,!1),t.lanes=4194304)}else{if(!i)if(e=jo(s),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ie)return Ne(t),null}else 2*de()-a.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,i=!0,Sn(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=de(),t.sibling=null,n=oe.current,te(oe,i?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return kl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Ve&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function qg(e,t){switch(ol(t),t.tag){case 1:return Ue(t.type)&&go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),ne(He),ne(Oe),fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ul(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return on(),null;case 10:return dl(t.type._context),null;case 22:case 23:return kl(),null;case 24:return null;default:return null}}var Ii=!1,Te=!1,Yg=typeof WeakSet=="function"?WeakSet:Set,L=null;function qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){le(e,t,i)}else n.current=null}function js(e,t,n){try{n()}catch(i){le(e,t,i)}}var Hd=!1;function Kg(e,t){if(os=po,e=Tp(),nl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,d=-1,c=0,f=0,u=e,x=null;t:for(;;){for(var k;u!==n||o!==0&&u.nodeType!==3||(l=s+o),u!==a||i!==0&&u.nodeType!==3||(d=s+i),u.nodeType===3&&(s+=u.nodeValue.length),(k=u.firstChild)!==null;)x=u,u=k;for(;;){if(u===e)break t;if(x===n&&++c===o&&(l=s),x===a&&++f===i&&(d=s),(k=u.nextSibling)!==null)break;u=x,x=u.parentNode}u=k}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(as={focusedElem:e,selectionRange:n},po=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var b=S.memoizedProps,R=S.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:dt(t.type,b),R);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(j){le(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return S=Hd,Hd=!1,S}function Fn(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&js(t,n,a)}o=o.next}while(o!==i)}}function Uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function As(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rh(e){var t=e.alternate;t!==null&&(e.alternate=null,Rh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Jn],delete t[ds],delete t[zg],delete t[Tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ch(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ss(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(i!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function ks(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var ke=null,ct=!1;function Mt(e,t,n){for(n=n.child;n!==null;)Nh(e,t,n),n=n.sibling}function Nh(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:Te||qr(n,t);case 6:var i=ke,o=ct;ke=null,Mt(e,t,n),ke=i,ct=o,ke!==null&&(ct?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ct?(e=ke,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),Kn(e)):ga(ke,n.stateNode));break;case 4:i=ke,o=ct,ke=n.stateNode.containerInfo,ct=!0,Mt(e,t,n),ke=i,ct=o;break;case 0:case 11:case 14:case 15:if(!Te&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&js(n,t,s),o=o.next}while(o!==i)}Mt(e,t,n);break;case 1:if(!Te&&(qr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){le(n,t,l)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Te=(i=Te)||n.memoizedState!==null,Mt(e,t,n),Te=i):Mt(e,t,n);break;default:Mt(e,t,n)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yg),t.forEach(function(i){var o=nm.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,ct=!1;break e;case 3:ke=l.stateNode.containerInfo,ct=!0;break e;case 4:ke=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(ke===null)throw Error(z(160));Nh(a,s,o),ke=null,ct=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(c){le(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zh(t,e),t=t.sibling}function zh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),xt(e),i&4){try{Fn(3,e,e.return),Uo(3,e)}catch(b){le(e,e.return,b)}try{Fn(5,e,e.return)}catch(b){le(e,e.return,b)}}break;case 1:st(t,e),xt(e),i&512&&n!==null&&qr(n,n.return);break;case 5:if(st(t,e),xt(e),i&512&&n!==null&&qr(n,n.return),e.flags&32){var o=e.stateNode;try{Gn(o,"")}catch(b){le(e,e.return,b)}}if(i&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Zc(o,a),$a(l,s);var c=$a(l,a);for(s=0;s<d.length;s+=2){var f=d[s],u=d[s+1];f==="style"?np(o,u):f==="dangerouslySetInnerHTML"?tp(o,u):f==="children"?Gn(o,u):Gs(o,f,u,c)}switch(l){case"input":Ga(o,a);break;case"textarea":Jc(o,a);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var k=a.value;k!=null?Kr(o,!!a.multiple,k,!1):x!==!!a.multiple&&(a.defaultValue!=null?Kr(o,!!a.multiple,a.defaultValue,!0):Kr(o,!!a.multiple,a.multiple?[]:"",!1))}o[Jn]=a}catch(b){le(e,e.return,b)}}break;case 6:if(st(t,e),xt(e),i&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(b){le(e,e.return,b)}}break;case 3:if(st(t,e),xt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(b){le(e,e.return,b)}break;case 4:st(t,e),xt(e);break;case 13:st(t,e),xt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Al=de())),i&4&&_d(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||f,st(t,e),Te=c):st(t,e),xt(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(L=e,f=e.child;f!==null;){for(u=L=f;L!==null;){switch(x=L,k=x.child,x.tag){case 0:case 11:case 14:case 15:Fn(4,x,x.return);break;case 1:qr(x,x.return);var S=x.stateNode;if(typeof S.componentWillUnmount=="function"){i=x,n=x.return;try{t=i,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(b){le(i,n,b)}}break;case 5:qr(x,x.return);break;case 22:if(x.memoizedState!==null){Vd(u);continue}}k!==null?(k.return=x,L=k):Vd(u)}f=f.sibling}e:for(f=null,u=e;;){if(u.tag===5){if(f===null){f=u;try{o=u.stateNode,c?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=u.stateNode,d=u.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=rp("display",s))}catch(b){le(e,e.return,b)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(b){le(e,e.return,b)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:st(t,e),xt(e),i&4&&_d(e);break;case 21:break;default:st(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ch(n)){var i=n;break e}n=n.return}throw Error(z(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Gn(o,""),i.flags&=-33);var a=Ud(e);ks(e,a,o);break;case 3:case 4:var s=i.stateNode.containerInfo,l=Ud(e);Ss(e,l,s);break;default:throw Error(z(161))}}catch(d){le(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $g(e,t,n){L=e,Th(e)}function Th(e,t,n){for(var i=(e.mode&1)!==0;L!==null;){var o=L,a=o.child;if(o.tag===22&&i){var s=o.memoizedState!==null||Ii;if(!s){var l=o.alternate,d=l!==null&&l.memoizedState!==null||Te;l=Ii;var c=Te;if(Ii=s,(Te=d)&&!c)for(L=o;L!==null;)s=L,d=s.child,s.tag===22&&s.memoizedState!==null?qd(o):d!==null?(d.return=s,L=d):qd(o);for(;a!==null;)L=a,Th(a),a=a.sibling;L=o,Ii=l,Te=c}Gd(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,L=a):Gd(e)}}function Gd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||Uo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Te)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Cd(t,a,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cd(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&Kn(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Te||t.flags&512&&As(t)}catch(x){le(t,t.return,x)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Vd(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function qd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Uo(4,t)}catch(d){le(t,n,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(d){le(t,o,d)}}var a=t.return;try{As(t)}catch(d){le(t,a,d)}break;case 5:var s=t.return;try{As(t)}catch(d){le(t,s,d)}}}catch(d){le(t,t.return,d)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var Xg=Math.ceil,ko=It.ReactCurrentDispatcher,bl=It.ReactCurrentOwner,tt=It.ReactCurrentBatchConfig,X=0,Ae=null,ue=null,Ee=0,Ve=0,Yr=nr(0),we=0,oi=null,wr=0,_o=0,jl=0,Hn=null,De=null,Al=0,sn=1/0,kt=null,Eo=!1,Es=null,$t=null,Li=!1,Ut=null,Ro=0,Un=0,Rs=null,Zi=-1,Ji=0;function Le(){return X&6?de():Zi!==-1?Zi:Zi=de()}function Xt(e){return e.mode&1?X&2&&Ee!==0?Ee&-Ee:Og.transition!==null?(Ji===0&&(Ji=gp()),Ji):(e=J,e!==0||(e=window.event,e=e===void 0?16:jp(e.type)),e):1}function ut(e,t,n,i){if(50<Un)throw Un=0,Rs=null,Error(z(185));pi(e,n,i),(!(X&2)||e!==Ae)&&(e===Ae&&(!(X&2)&&(_o|=n),we===4&&Ft(e,Ee)),_e(e,i),n===1&&X===0&&!(t.mode&1)&&(sn=de()+500,Do&&ir()))}function _e(e,t){var n=e.callbackNode;Of(e,t);var i=co(e,e===Ae?Ee:0);if(i===0)n!==null&&td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&td(n),t===1)e.tag===0?Pg(Yd.bind(null,e)):Hp(Yd.bind(null,e)),Cg(function(){!(X&6)&&ir()}),n=null;else{switch(mp(i)){case 1:n=$s;break;case 4:n=up;break;case 16:n=lo;break;case 536870912:n=fp;break;default:n=lo}n=Dh(n,Ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ph(e,t){if(Zi=-1,Ji=0,X&6)throw Error(z(327));var n=e.callbackNode;if(Jr()&&e.callbackNode!==n)return null;var i=co(e,e===Ae?Ee:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Co(e,i);else{t=i;var o=X;X|=2;var a=Ih();(Ae!==e||Ee!==t)&&(kt=null,sn=de()+500,ur(e,t));do try{Jg();break}catch(l){Oh(e,l)}while(!0);ll(),ko.current=a,X=o,ue!==null?t=0:(Ae=null,Ee=0,t=we)}if(t!==0){if(t===2&&(o=es(e),o!==0&&(i=o,t=Cs(e,o))),t===1)throw n=oi,ur(e,0),Ft(e,i),_e(e,de()),n;if(t===6)Ft(e,i);else{if(o=e.current.alternate,!(i&30)&&!Qg(o)&&(t=Co(e,i),t===2&&(a=es(e),a!==0&&(i=a,t=Cs(e,a))),t===1))throw n=oi,ur(e,0),Ft(e,i),_e(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(z(345));case 2:lr(e,De,kt);break;case 3:if(Ft(e,i),(i&130023424)===i&&(t=Al+500-de(),10<t)){if(co(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ls(lr.bind(null,e,De,kt),t);break}lr(e,De,kt);break;case 4:if(Ft(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var s=31-ht(i);a=1<<s,s=t[s],s>o&&(o=s),i&=~a}if(i=o,i=de()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xg(i/1960))-i,10<i){e.timeoutHandle=ls(lr.bind(null,e,De,kt),i);break}lr(e,De,kt);break;case 5:lr(e,De,kt);break;default:throw Error(z(329))}}}return _e(e,de()),e.callbackNode===n?Ph.bind(null,e):null}function Cs(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(ur(e,t).flags|=256),e=Co(e,t),e!==2&&(t=De,De=n,t!==null&&Ns(t)),e}function Ns(e){De===null?De=e:De.push.apply(De,e)}function Qg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],a=o.getSnapshot;o=o.value;try{if(!ft(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~jl,t&=~_o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),i=1<<n;e[n]=-1,t&=~i}}function Yd(e){if(X&6)throw Error(z(327));Jr();var t=co(e,0);if(!(t&1))return _e(e,de()),null;var n=Co(e,t);if(e.tag!==0&&n===2){var i=es(e);i!==0&&(t=i,n=Cs(e,i))}if(n===1)throw n=oi,ur(e,0),Ft(e,t),_e(e,de()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lr(e,De,kt),_e(e,de()),null}function Sl(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(sn=de()+500,Do&&ir())}}function vr(e){Ut!==null&&Ut.tag===0&&!(X&6)&&Jr();var t=X;X|=1;var n=tt.transition,i=J;try{if(tt.transition=null,J=1,e)return e()}finally{J=i,tt.transition=n,X=t,!(X&6)&&ir()}}function kl(){Ve=Yr.current,ne(Yr)}function ur(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rg(n)),ue!==null)for(n=ue.return;n!==null;){var i=n;switch(ol(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&go();break;case 3:on(),ne(He),ne(Oe),fl();break;case 5:ul(i);break;case 4:on();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:dl(i.type._context);break;case 22:case 23:kl()}n=n.return}if(Ae=e,ue=e=Qt(e.current,null),Ee=Ve=t,we=0,oi=null,jl=_o=wr=0,De=Hn=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=o,i.next=s}n.pending=i}cr=null}return e}function Oh(e,t){do{var n=ue;try{if(ll(),$i.current=So,Ao){for(var i=ae.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Ao=!1}if(yr=0,be=ye=ae=null,Dn=!1,ri=0,bl.current=null,n===null||n.return===null){we=1,oi=t,ue=null;break}e:{var a=e,s=n.return,l=n,d=t;if(t=Ee,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,f=l,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var x=f.alternate;x?(f.updateQueue=x.updateQueue,f.memoizedState=x.memoizedState,f.lanes=x.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Id(s);if(k!==null){k.flags&=-257,Ld(k,s,l,a,t),k.mode&1&&Od(a,c,t),t=k,d=c;var S=t.updateQueue;if(S===null){var b=new Set;b.add(d),t.updateQueue=b}else S.add(d);break e}else{if(!(t&1)){Od(a,c,t),El();break e}d=Error(z(426))}}else if(ie&&l.mode&1){var R=Id(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ld(R,s,l,a,t),al(an(d,l));break e}}a=d=an(d,l),we!==4&&(we=2),Hn===null?Hn=[a]:Hn.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=mh(a,d,t);Rd(a,p);break e;case 1:l=d;var h=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($t===null||!$t.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var j=xh(a,l,t);Rd(a,j);break e}}a=a.return}while(a!==null)}Mh(n)}catch(A){t=A,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Ih(){var e=ko.current;return ko.current=So,e===null?So:e}function El(){(we===0||we===3||we===2)&&(we=4),Ae===null||!(wr&268435455)&&!(_o&268435455)||Ft(Ae,Ee)}function Co(e,t){var n=X;X|=2;var i=Ih();(Ae!==e||Ee!==t)&&(kt=null,ur(e,t));do try{Zg();break}catch(o){Oh(e,o)}while(!0);if(ll(),X=n,ko.current=i,ue!==null)throw Error(z(261));return Ae=null,Ee=0,we}function Zg(){for(;ue!==null;)Lh(ue)}function Jg(){for(;ue!==null&&!Sf();)Lh(ue)}function Lh(e){var t=Wh(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Mh(e):ue=t,bl.current=null}function Mh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qg(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ue=null;return}}else if(n=Vg(n,t,Ve),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);we===0&&(we=5)}function lr(e,t,n){var i=J,o=tt.transition;try{tt.transition=null,J=1,em(e,t,n,i)}finally{tt.transition=o,J=i}return null}function em(e,t,n,i){do Jr();while(Ut!==null);if(X&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(If(e,a),e===Ae&&(ue=Ae=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,Dh(lo,function(){return Jr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=tt.transition,tt.transition=null;var s=J;J=1;var l=X;X|=4,bl.current=null,Kg(e,n),zh(n,e),vg(as),po=!!os,as=os=null,e.current=n,$g(n),kf(),X=l,J=s,tt.transition=a}else e.current=n;if(Li&&(Li=!1,Ut=e,Ro=o),a=e.pendingLanes,a===0&&($t=null),Cf(n.stateNode),_e(e,de()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(Eo)throw Eo=!1,e=Es,Es=null,e;return Ro&1&&e.tag!==0&&Jr(),a=e.pendingLanes,a&1?e===Rs?Un++:(Un=0,Rs=e):Un=0,ir(),null}function Jr(){if(Ut!==null){var e=mp(Ro),t=tt.transition,n=J;try{if(tt.transition=null,J=16>e?16:e,Ut===null)var i=!1;else{if(e=Ut,Ut=null,Ro=0,X&6)throw Error(z(331));var o=X;for(X|=4,L=e.current;L!==null;){var a=L,s=a.child;if(L.flags&16){var l=a.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(L=c;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:Fn(8,f,a)}var u=f.child;if(u!==null)u.return=f,L=u;else for(;L!==null;){f=L;var x=f.sibling,k=f.return;if(Rh(f),f===c){L=null;break}if(x!==null){x.return=k,L=x;break}L=k}}}var S=a.alternate;if(S!==null){var b=S.child;if(b!==null){S.child=null;do{var R=b.sibling;b.sibling=null,b=R}while(b!==null)}}L=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,L=s;else e:for(;L!==null;){if(a=L,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Fn(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,L=p;break e}L=a.return}}var h=e.current;for(L=h;L!==null;){s=L;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,L=g;else e:for(s=h;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uo(9,l)}}catch(A){le(l,l.return,A)}if(l===s){L=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,L=j;break e}L=l.return}}if(X=o,ir(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Io,e)}catch{}i=!0}return i}finally{J=n,tt.transition=t}}return!1}function Kd(e,t,n){t=an(n,t),t=mh(e,t,1),e=Kt(e,t,1),t=Le(),e!==null&&(pi(e,1,t),_e(e,t))}function le(e,t,n){if(e.tag===3)Kd(e,e,n);else for(;t!==null;){if(t.tag===3){Kd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($t===null||!$t.has(i))){e=an(n,e),e=xh(t,e,1),t=Kt(t,e,1),e=Le(),t!==null&&(pi(t,1,e),_e(t,e));break}}t=t.return}}function tm(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Ee&n)===n&&(we===4||we===3&&(Ee&130023424)===Ee&&500>de()-Al?ur(e,0):jl|=n),_e(e,t)}function Bh(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=Le();e=Pt(e,t),e!==null&&(pi(e,t,n),_e(e,n))}function rm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bh(e,n)}function nm(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(z(314))}i!==null&&i.delete(t),Bh(e,n)}var Wh;Wh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,Gg(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ie&&t.flags&1048576&&Up(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Qi(e,t),e=t.pendingProps;var o=tn(t,Oe.current);Zr(t,n),o=ml(null,t,i,e,o,n);var a=xl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(i)?(a=!0,mo(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,pl(t),o.updater=Ho,t.stateNode=o,o._reactInternals=t,gs(t,i,e,n),t=ys(null,t,i,!0,a,n)):(t.tag=0,ie&&a&&il(t),Ie(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Qi(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=om(i),e=dt(i,e),o){case 0:t=xs(null,t,i,e,n);break e;case 1:t=Wd(null,t,i,e,n);break e;case 11:t=Md(null,t,i,e,n);break e;case 14:t=Bd(null,t,i,dt(i.type,e),n);break e}throw Error(z(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:dt(i,o),xs(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:dt(i,o),Wd(e,t,i,o,n);case 3:e:{if(bh(t),e===null)throw Error(z(387));i=t.pendingProps,a=t.memoizedState,o=a.element,Kp(e,t),bo(t,i,null,n);var s=t.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=an(Error(z(423)),t),t=Dd(e,t,i,n,o);break e}else if(i!==o){o=an(Error(z(424)),t),t=Dd(e,t,i,n,o);break e}else for(qe=Yt(t.stateNode.containerInfo.firstChild),Ye=t,ie=!0,pt=null,n=qp(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),i===o){t=Ot(e,t,n);break e}Ie(e,t,i,n)}t=t.child}return t;case 5:return $p(t),e===null&&hs(t),i=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,ss(i,o)?s=null:a!==null&&ss(i,a)&&(t.flags|=32),vh(e,t),Ie(e,t,s,n),t.child;case 6:return e===null&&hs(t),null;case 13:return jh(e,t,n);case 4:return hl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=nn(t,null,i,n):Ie(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:dt(i,o),Md(e,t,i,o,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,te(wo,i._currentValue),i._currentValue=s,a!==null)if(ft(a.value,s)){if(a.children===o.children&&!He.current){t=Ot(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var d=l.firstContext;d!==null;){if(d.context===i){if(a.tag===1){d=Nt(-1,n&-n),d.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?d.next=d:(d.next=f.next,f.next=d),c.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),us(a.return,n,t),l.lanes|=n;break}d=d.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(z(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),us(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Zr(t,n),o=rt(o),i=i(o),t.flags|=1,Ie(e,t,i,n),t.child;case 14:return i=t.type,o=dt(i,t.pendingProps),o=dt(i.type,o),Bd(e,t,i,o,n);case 15:return yh(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:dt(i,o),Qi(e,t),t.tag=1,Ue(i)?(e=!0,mo(t)):e=!1,Zr(t,n),gh(t,i,o),gs(t,i,o,n),ys(null,t,i,!0,e,n);case 19:return Ah(e,t,n);case 22:return wh(e,t,n)}throw Error(z(156,t.tag))};function Dh(e,t){return hp(e,t)}function im(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,i){return new im(e,t,n,i)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function om(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===Ys)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,i,o,a){var s=2;if(i=e,typeof e=="function")Rl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Br:return fr(n.children,o,a,t);case Vs:s=8,o|=8;break;case Da:return e=et(12,n,t,o|2),e.elementType=Da,e.lanes=a,e;case Fa:return e=et(13,n,t,o),e.elementType=Fa,e.lanes=a,e;case Ha:return e=et(19,n,t,o),e.elementType=Ha,e.lanes=a,e;case $c:return Go(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yc:s=10;break e;case Kc:s=9;break e;case qs:s=11;break e;case Ys:s=14;break e;case Bt:s=16,i=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=et(s,n,t,o),t.elementType=e,t.type=i,t.lanes=a,t}function fr(e,t,n,i){return e=et(7,e,i,t),e.lanes=n,e}function Go(e,t,n,i){return e=et(22,e,i,t),e.elementType=$c,e.lanes=n,e.stateNode={isHidden:!1},e}function Aa(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function am(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Cl(e,t,n,i,o,a,s,l,d){return e=new am(e,t,n,l,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=et(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(a),e}function sm(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Fh(e){if(!e)return er;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Fp(e,n,t)}return t}function Hh(e,t,n,i,o,a,s,l,d){return e=Cl(n,i,!0,e,o,a,s,l,d),e.context=Fh(null),n=e.current,i=Le(),o=Xt(n),a=Nt(i,o),a.callback=t??null,Kt(n,a,o),e.current.lanes=o,pi(e,o,i),_e(e,i),e}function Vo(e,t,n,i){var o=t.current,a=Le(),s=Xt(o);return n=Fh(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(a,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Kt(o,t,s),e!==null&&(ut(e,o,s,a),Ki(e,o,s)),s}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nl(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function lm(){return null}var Uh=typeof reportError=="function"?reportError:function(e){console.error(e)};function zl(e){this._internalRoot=e}qo.prototype.render=zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Vo(e,t,null,null)};qo.prototype.unmount=zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vr(function(){Vo(null,e,null,null)}),t[Tt]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=wp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&bp(e)}};function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function dm(e,t,n,i,o){if(o){if(typeof i=="function"){var a=i;i=function(){var c=No(s);a.call(c)}}var s=Hh(t,i,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=s,e[Tt]=s.current,Qn(e.nodeType===8?e.parentNode:e),vr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var l=i;i=function(){var c=No(d);l.call(c)}}var d=Cl(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=d,e[Tt]=d.current,Qn(e.nodeType===8?e.parentNode:e),vr(function(){Vo(t,d,n,i)}),d}function Ko(e,t,n,i,o){var a=n._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var l=o;o=function(){var d=No(s);l.call(d)}}Vo(t,s,e,o)}else s=dm(n,t,e,o,i);return No(s)}xp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(Xs(t,n|1),_e(t,de()),!(X&6)&&(sn=de()+500,ir()))}break;case 13:vr(function(){var i=Pt(e,1);if(i!==null){var o=Le();ut(i,e,1,o)}}),Nl(e,1)}};Qs=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Le();ut(t,e,134217728,n)}Nl(e,134217728)}};yp=function(e){if(e.tag===13){var t=Xt(e),n=Pt(e,t);if(n!==null){var i=Le();ut(n,e,t,i)}Nl(e,t)}};wp=function(){return J};vp=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Qa=function(e,t,n){switch(t){case"input":if(Ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=Wo(i);if(!o)throw Error(z(90));Qc(i),Ga(i,o)}}}break;case"textarea":Jc(e,n);break;case"select":t=n.value,t!=null&&Kr(e,!!n.multiple,t,!1)}};ap=Sl;sp=vr;var cm={usingClientEntryPoint:!1,Events:[ui,Hr,Wo,ip,op,Sl]},kn={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pm={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cp(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{Io=Mi.inject(pm),bt=Mi}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tl(t))throw Error(z(200));return sm(e,t,null,n)};$e.createRoot=function(e,t){if(!Tl(e))throw Error(z(299));var n=!1,i="",o=Uh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Cl(e,1,!1,null,null,n,!1,i,o),e[Tt]=t.current,Qn(e.nodeType===8?e.parentNode:e),new zl(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=cp(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return vr(e)};$e.hydrate=function(e,t,n){if(!Yo(t))throw Error(z(200));return Ko(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!Tl(e))throw Error(z(405));var i=n!=null&&n.hydratedSources||null,o=!1,a="",s=Uh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Hh(t,null,e,1,n??null,o,!1,a,s),e[Tt]=t.current,Qn(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qo(t)};$e.render=function(e,t,n){if(!Yo(t))throw Error(z(200));return Ko(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(z(40));return e._reactRootContainer?(vr(function(){Ko(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};$e.unstable_batchedUpdates=Sl;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Yo(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ko(e,t,n,!1,i)};$e.version="18.3.1-next-f1338f8080-20240426";function _h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_h)}catch(e){console.error(e)}}_h(),_c.exports=$e;var hm=_c.exports,Qd=hm;Ba.createRoot=Qd.createRoot,Ba.hydrateRoot=Qd.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ai.apply(null,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const Zd="popstate";function um(e){e===void 0&&(e={});function t(i,o){let{pathname:a,search:s,hash:l}=i.location;return zs("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:zo(o)}return gm(t,n,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fm(){return Math.random().toString(36).substr(2,8)}function Jd(e,t){return{usr:e.state,key:e.key,idx:t}}function zs(e,t,n,i){return n===void 0&&(n=null),ai({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pn(t):t,{state:n,key:t&&t.key||i||fm()})}function zo(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function gm(e,t,n,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,s=o.history,l=_t.Pop,d=null,c=f();c==null&&(c=0,s.replaceState(ai({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function u(){l=_t.Pop;let R=f(),p=R==null?null:R-c;c=R,d&&d({action:l,location:b.location,delta:p})}function x(R,p){l=_t.Push;let h=zs(b.location,R,p);c=f()+1;let g=Jd(h,c),j=b.createHref(h);try{s.pushState(g,"",j)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(j)}a&&d&&d({action:l,location:b.location,delta:1})}function k(R,p){l=_t.Replace;let h=zs(b.location,R,p);c=f();let g=Jd(h,c),j=b.createHref(h);s.replaceState(g,"",j),a&&d&&d({action:l,location:b.location,delta:0})}function S(R){let p=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof R=="string"?R:zo(R);return h=h.replace(/ $/,"%20"),ce(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let b={get action(){return l},get location(){return e(o,s)},listen(R){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(Zd,u),d=R,()=>{o.removeEventListener(Zd,u),d=null}},createHref(R){return t(o,R)},createURL:S,encodeLocation(R){let p=S(R);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:x,replace:k,go(R){return s.go(R)}};return b}var ec;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ec||(ec={}));function mm(e,t,n){return n===void 0&&(n="/"),xm(e,t,n)}function xm(e,t,n,i){let o=typeof t=="string"?pn(t):t,a=Pl(o.pathname||"/",n);if(a==null)return null;let s=Vh(e);ym(s);let l=null,d=zm(a);for(let c=0;l==null&&c<s.length;++c)l=Rm(s[c],d);return l}function Vh(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let o=(a,s,l)=>{let d={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};d.relativePath.startsWith("/")&&(ce(d.relativePath.startsWith(i),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(i.length));let c=Zt([i,d.relativePath]),f=n.concat(d);a.children&&a.children.length>0&&(ce(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Vh(a.children,t,f,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:km(c,a.index),routesMeta:f})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))o(a,s);else for(let d of qh(a.path))o(a,s,d)}),t}function qh(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let s=qh(i.join("/")),l=[];return l.push(...s.map(d=>d===""?a:[a,d].join("/"))),o&&l.push(...s),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function ym(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Em(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const wm=/^:[\w-]+$/,vm=3,bm=2,jm=1,Am=10,Sm=-2,tc=e=>e==="*";function km(e,t){let n=e.split("/"),i=n.length;return n.some(tc)&&(i+=Sm),t&&(i+=bm),n.filter(o=>!tc(o)).reduce((o,a)=>o+(wm.test(a)?vm:a===""?jm:Am),i)}function Em(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function Rm(e,t,n){let{routesMeta:i}=e,o={},a="/",s=[];for(let l=0;l<i.length;++l){let d=i[l],c=l===i.length-1,f=a==="/"?t:t.slice(a.length)||"/",u=Cm({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},f),x=d.route;if(!u)return null;Object.assign(o,u.params),s.push({params:o,pathname:Zt([a,u.pathname]),pathnameBase:Om(Zt([a,u.pathnameBase])),route:x}),u.pathnameBase!=="/"&&(a=Zt([a,u.pathnameBase]))}return s}function Cm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=Nm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:i.reduce((c,f,u)=>{let{paramName:x,isOptional:k}=f;if(x==="*"){let b=l[u]||"";s=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const S=l[u];return k&&!S?c[x]=void 0:c[x]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:e}}function Nm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,d)=>(i.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function zm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function Tm(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?pn(e):e,a;return n?(n=Yh(n),n.startsWith("/")?a=rc(n.substring(1),"/"):a=rc(n,t)):a=t,{pathname:a,search:Im(i),hash:Lm(o)}}function rc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ka(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ol(e,t){let n=Pm(e);return t?n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Il(e,t,n,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=pn(e):(o=ai({},e),ce(!o.pathname||!o.pathname.includes("?"),ka("?","pathname","search",o)),ce(!o.pathname||!o.pathname.includes("#"),ka("#","pathname","hash",o)),ce(!o.search||!o.search.includes("#"),ka("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,l;if(s==null)l=n;else{let u=t.length-1;if(!i&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),u-=1;o.pathname=x.join("/")}l=u>=0?t[u]:"/"}let d=Tm(o,l),c=s&&s!=="/"&&s.endsWith("/"),f=(a||s===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(c||f)&&(d.pathname+="/"),d}const Yh=e=>e.replace(/\/\/+/g,"/"),Zt=e=>Yh(e.join("/")),Om=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Im=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Mm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kh=["post","put","patch","delete"];new Set(Kh);const Bm=["get",...Kh];new Set(Bm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},si.apply(null,arguments)}const Ll=E.createContext(null),Wm=E.createContext(null),or=E.createContext(null),$o=E.createContext(null),Lt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),$h=E.createContext(null);function Dm(e,t){let{relative:n}=t===void 0?{}:t;hn()||ce(!1);let{basename:i,navigator:o}=E.useContext(or),{hash:a,pathname:s,search:l}=Qh(e,{relative:n}),d=s;return i!=="/"&&(d=s==="/"?i:Zt([i,s])),o.createHref({pathname:d,search:l,hash:a})}function hn(){return E.useContext($o)!=null}function Er(){return hn()||ce(!1),E.useContext($o).location}function Xh(e){E.useContext(or).static||E.useLayoutEffect(e)}function un(){let{isDataRoute:e}=E.useContext(Lt);return e?Jm():Fm()}function Fm(){hn()||ce(!1);let e=E.useContext(Ll),{basename:t,future:n,navigator:i}=E.useContext(or),{matches:o}=E.useContext(Lt),{pathname:a}=Er(),s=JSON.stringify(Ol(o,n.v7_relativeSplatPath)),l=E.useRef(!1);return Xh(()=>{l.current=!0}),E.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){i.go(c);return}let u=Il(c,JSON.parse(s),a,f.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Zt([t,u.pathname])),(f.replace?i.replace:i.push)(u,f.state,f)},[t,i,s,a,e])}function Hm(){let{matches:e}=E.useContext(Lt),t=e[e.length-1];return t?t.params:{}}function Qh(e,t){let{relative:n}=t===void 0?{}:t,{future:i}=E.useContext(or),{matches:o}=E.useContext(Lt),{pathname:a}=Er(),s=JSON.stringify(Ol(o,i.v7_relativeSplatPath));return E.useMemo(()=>Il(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function Um(e,t){return _m(e,t)}function _m(e,t,n,i){hn()||ce(!1);let{navigator:o}=E.useContext(or),{matches:a}=E.useContext(Lt),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let c=Er(),f;if(t){var u;let R=typeof t=="string"?pn(t):t;d==="/"||(u=R.pathname)!=null&&u.startsWith(d)||ce(!1),f=R}else f=c;let x=f.pathname||"/",k=x;if(d!=="/"){let R=d.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=mm(e,{pathname:k}),b=Km(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:Zt([d,o.encodeLocation?o.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?d:Zt([d,o.encodeLocation?o.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),a,n,i);return t&&b?E.createElement($o.Provider,{value:{location:si({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:_t.Pop}},b):b}function Gm(){let e=Zm(),t=Mm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,null)}const Vm=E.createElement(Gm,null);class qm extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Lt.Provider,{value:this.props.routeContext},E.createElement($h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ym(e){let{routeContext:t,match:n,children:i}=e,o=E.useContext(Ll);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Lt.Provider,{value:t},i)}function Km(e,t,n,i){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let f=s.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);f>=0||ce(!1),s=s.slice(0,Math.min(s.length,f+1))}let d=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<s.length;f++){let u=s[f];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=f),u.route.id){let{loaderData:x,errors:k}=n,S=u.route.loader&&x[u.route.id]===void 0&&(!k||k[u.route.id]===void 0);if(u.route.lazy||S){d=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,u,x)=>{let k,S=!1,b=null,R=null;n&&(k=l&&u.route.id?l[u.route.id]:void 0,b=u.route.errorElement||Vm,d&&(c<0&&x===0?(ex("route-fallback"),S=!0,R=null):c===x&&(S=!0,R=u.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,x+1)),h=()=>{let g;return k?g=b:S?g=R:u.route.Component?g=E.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=f,E.createElement(Ym,{match:u,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||x===0)?E.createElement(qm,{location:n.location,revalidation:n.revalidation,component:b,error:k,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var Zh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zh||{}),Jh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Jh||{});function $m(e){let t=E.useContext(Ll);return t||ce(!1),t}function Xm(e){let t=E.useContext(Wm);return t||ce(!1),t}function Qm(e){let t=E.useContext(Lt);return t||ce(!1),t}function eu(e){let t=Qm(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function Zm(){var e;let t=E.useContext($h),n=Xm(),i=eu();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}function Jm(){let{router:e}=$m(Zh.UseNavigateStable),t=eu(Jh.UseNavigateStable),n=E.useRef(!1);return Xh(()=>{n.current=!0}),E.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,si({fromRouteId:t},a)))},[e,t])}const nc={};function ex(e,t,n){nc[e]||(nc[e]=!0)}function tx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ts(e){let{to:t,replace:n,state:i,relative:o}=e;hn()||ce(!1);let{future:a,static:s}=E.useContext(or),{matches:l}=E.useContext(Lt),{pathname:d}=Er(),c=un(),f=Il(t,Ol(l,a.v7_relativeSplatPath),d,o==="path"),u=JSON.stringify(f);return E.useEffect(()=>c(JSON.parse(u),{replace:n,state:i,relative:o}),[c,u,o,n,i]),null}function We(e){ce(!1)}function rx(e){let{basename:t="/",children:n=null,location:i,navigationType:o=_t.Pop,navigator:a,static:s=!1,future:l}=e;hn()&&ce(!1);let d=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:d,navigator:a,static:s,future:si({v7_relativeSplatPath:!1},l)}),[d,l,a,s]);typeof i=="string"&&(i=pn(i));let{pathname:f="/",search:u="",hash:x="",state:k=null,key:S="default"}=i,b=E.useMemo(()=>{let R=Pl(f,d);return R==null?null:{location:{pathname:R,search:u,hash:x,state:k,key:S},navigationType:o}},[d,f,u,x,k,S,o]);return b==null?null:E.createElement(or.Provider,{value:c},E.createElement($o.Provider,{children:n,value:b}))}function nx(e){let{children:t,location:n}=e;return Um(Ps(t),n)}new Promise(()=>{});function Ps(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(i,o)=>{if(!E.isValidElement(i))return;let a=[...t,o];if(i.type===E.Fragment){n.push.apply(n,Ps(i.props.children,a));return}i.type!==We&&ce(!1),!i.props.index||!i.props.children||ce(!1);let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Ps(i.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Os.apply(null,arguments)}function ix(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}function ox(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ax(e,t){return e.button===0&&(!t||t==="_self")&&!ox(e)}function Is(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function sx(e,t){let n=Is(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(a=>{n.append(o,a)})}),n}const lx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dx="6";try{window.__reactRouterVersion=dx}catch{}const cx="startTransition",ic=ef[cx];function px(e){let{basename:t,children:n,future:i,window:o}=e,a=E.useRef();a.current==null&&(a.current=um({window:o,v5Compat:!0}));let s=a.current,[l,d]=E.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},f=E.useCallback(u=>{c&&ic?ic(()=>d(u)):d(u)},[d,c]);return E.useLayoutEffect(()=>s.listen(f),[s,f]),E.useEffect(()=>tx(i),[i]),E.createElement(rx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:i})}const hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,H=E.forwardRef(function(t,n){let{onClick:i,relative:o,reloadDocument:a,replace:s,state:l,target:d,to:c,preventScrollReset:f,viewTransition:u}=t,x=ix(t,lx),{basename:k}=E.useContext(or),S,b=!1;if(typeof c=="string"&&ux.test(c)&&(S=c,hx))try{let g=new URL(window.location.href),j=c.startsWith("//")?new URL(g.protocol+c):new URL(c),A=Pl(j.pathname,k);j.origin===g.origin&&A!=null?c=A+j.search+j.hash:b=!0}catch{}let R=Dm(c,{relative:o}),p=fx(c,{replace:s,state:l,target:d,preventScrollReset:f,relative:o,viewTransition:u});function h(g){i&&i(g),g.defaultPrevented||p(g)}return E.createElement("a",Os({},x,{href:S||R,onClick:b||a?i:h,ref:n,target:d}))});var oc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(oc||(oc={}));var ac;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ac||(ac={}));function fx(e,t){let{target:n,replace:i,state:o,preventScrollReset:a,relative:s,viewTransition:l}=t===void 0?{}:t,d=un(),c=Er(),f=Qh(e,{relative:s});return E.useCallback(u=>{if(ax(u,n)){u.preventDefault();let x=i!==void 0?i:zo(c)===zo(f);d(e,{replace:x,state:o,preventScrollReset:a,relative:s,viewTransition:l})}},[c,d,f,i,o,n,e,a,s,l])}function gx(e){let t=E.useRef(Is(e)),n=E.useRef(!1),i=Er(),o=E.useMemo(()=>sx(i.search,n.current?null:t.current),[i.search]),a=un(),s=E.useCallback((l,d)=>{const c=Is(typeof l=="function"?l(o):l);n.current=!0,a("?"+c,d)},[a,o]);return[o,s]}function tu(e,t){return function(){return e.apply(t,arguments)}}const{toString:mx}=Object.prototype,{getPrototypeOf:tr}=Object,{iterator:gi,toStringTag:ru}=Symbol,li=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nu=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),iu=(e,t,n)=>e===Object.prototype||!n&&t===null,xx=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(n=>{if(nu(n))return!1;const i=Object.getOwnPropertyDescriptor(e,n);return!!i&&i.configurable&&i.writable===!0})},di=(e,t)=>{let n=e;const i=[];for(;n!=null;){if(i.indexOf(n)!==-1)return!1;i.push(n);const o=tr(n);if(iu(n,o,n===e))return!1;if(li(n,t))return!0;n=o}return!1},yx=(e,t)=>e!=null&&di(e,t)?e[t]:void 0,wx=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const t=tr(e);if(t===null&&xx(e))return e;const n=Object.create(null),i=Object.create(null),o=[];let a=e;for(;a!=null&&o.indexOf(a)===-1;){o.push(a);const s=a===e?t:tr(a);if(iu(a,s,a===e))break;const l=Object.getOwnPropertyNames(a);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(a));for(const d of l)nu(d)||li(i,d)||(n[d]=e[d],i[d]=!0);a=s}return n},Ml=(e=>t=>{const n=mx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),it=e=>(e=e.toLowerCase(),t=>Ml(t)===e),Xo=e=>t=>typeof t===e,{isArray:br}=Array,jr=Xo("undefined");function fn(e){return e!==null&&!jr(e)&&e.constructor!==null&&!jr(e.constructor)&&Ge(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ou=it("ArrayBuffer");function vx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ou(e.buffer),t}const bx=Xo("string"),Ge=Xo("function"),au=Xo("number"),gn=e=>e!==null&&typeof e=="object",jx=e=>e===!0||e===!1,to=e=>{if(!gn(e))return!1;const t=tr(e);return(t===null||t===Object.prototype||tr(t)===null)&&!di(e,ru)&&!di(e,gi)},Ax=e=>{if(!gn(e)||fn(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Sx=it("Date"),kx=it("File"),Ex=e=>!!(e&&typeof e.uri<"u"),Rx=e=>e&&typeof e.getParts<"u",Cx=it("Blob"),Nx=it("FileList"),zx=it("Set"),Tx=e=>gn(e)&&Ge(e.pipe);function Px(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const sc=Px(),lc=typeof sc.FormData<"u"?sc.FormData:void 0,Ox=e=>{if(!e)return!1;if(lc&&e instanceof lc)return!0;const t=tr(e);if(!t||t===Object.prototype||!Ge(e.append))return!1;const n=Ml(e);return n==="formdata"||n==="object"&&Ge(e.toString)&&e.toString()==="[object FormData]"},Ix=it("URLSearchParams"),[Lx,Mx,Bx,Wx]=["ReadableStream","Request","Response","Headers"].map(it),Dx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let i,o;if(typeof e!="object"&&(e=[e]),br(e))for(i=0,o=e.length;i<o;i++)t.call(null,e[i],i,e);else{if(fn(e))return;const a=n?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let l;for(i=0;i<s;i++)l=a[i],t.call(null,e[l],l,e)}}function su(e,t){if(fn(e))return null;t=t.toLowerCase();const n=Object.keys(e);let i=n.length,o;for(;i-- >0;)if(o=n[i],t===o.toLowerCase())return o;return null}const hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lu=e=>!jr(e)&&e!==hr;function Ls(...e){const{caseless:t,skipUndefined:n}=lu(this)&&this||{},i={},o=(a,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const l=t&&typeof s=="string"&&su(i,s)||s,d=li(i,l)?i[l]:void 0;to(d)&&to(a)?i[l]=Ls(d,a):to(a)?i[l]=Ls({},a):br(a)?i[l]=a.slice():(!n||!jr(a))&&(i[l]=a)};for(let a=0,s=e.length;a<s;a++){const l=e[a];if(!l||fn(l)||(mi(l,o),typeof l!="object"||br(l)))continue;const d=Object.getOwnPropertySymbols(l);for(let c=0;c<d.length;c++){const f=d[c];Qx.call(l,f)&&o(l[f],f)}}return i}const Fx=(e,t,n,{allOwnKeys:i}={})=>(mi(t,(o,a)=>{n&&Ge(o)?Object.defineProperty(e,a,{__proto__:null,value:tu(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,a,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),e),Hx=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ux=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},_x=(e,t,n,i)=>{let o,a,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)s=o[a],(!i||i(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&tr(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Gx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return i!==-1&&i===n},Vx=e=>{if(!e)return null;if(br(e))return e;let t=e.length;if(!au(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qx=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&tr(Uint8Array)),Yx=(e,t)=>{const i=(e&&e[gi]).call(e);let o;for(;(o=i.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},Kx=(e,t)=>{let n;const i=[];for(;(n=e.exec(t))!==null;)i.push(n);return i},$x=it("HTMLFormElement"),Xx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,o){return i.toUpperCase()+o}),{propertyIsEnumerable:Qx}=Object.prototype,Zx=it("RegExp"),du=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};mi(n,(o,a)=>{let s;(s=t(o,a,e))!==!1&&(i[a]=s||o)}),Object.defineProperties(e,i)},Jx=e=>{du(e,(t,n)=>{if(Ge(e)&&["arguments","caller","callee"].includes(n))return!1;const i=e[n];if(Ge(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},e0=(e,t)=>{const n={},i=o=>{o.forEach(a=>{n[a]=!0})};return br(e)?i(e):i(String(e).split(t)),n},t0=()=>{},r0=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function n0(e){return!!(e&&Ge(e.append)&&e[ru]==="FormData"&&e[gi])}const i0=e=>{const t=new WeakSet,n=i=>{if(gn(i)){if(t.has(i))return;if(fn(i))return i;if(!("toJSON"in i)){t.add(i);let o;if(zx(i)){o=[];for(const a of i){const s=n(a);!jr(s)&&o.push(s)}}else o=br(i)?[]:{},mi(i,(a,s)=>{const l=n(a);!jr(l)&&(o[s]=l)});return t.delete(i),o}}return i};return n(e)},o0=it("AsyncFunction"),a0=e=>e&&(gn(e)||Ge(e))&&Ge(e.then)&&Ge(e.catch),cu=((e,t)=>e?setImmediate:t?((n,i)=>(hr.addEventListener("message",({source:o,data:a})=>{o===hr&&a===n&&i.length&&i.shift()()},!1),o=>{i.push(o),hr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ge(hr.postMessage)),s0=typeof queueMicrotask<"u"?queueMicrotask.bind(hr):typeof process<"u"&&process.nextTick||cu,pu=e=>e!=null&&Ge(e[gi]),l0=e=>e!=null&&di(e,gi)&&pu(e),v={isArray:br,isArrayBuffer:ou,isBuffer:fn,isFormData:Ox,isArrayBufferView:vx,isString:bx,isNumber:au,isBoolean:jx,isObject:gn,isPlainObject:to,isEmptyObject:Ax,isReadableStream:Lx,isRequest:Mx,isResponse:Bx,isHeaders:Wx,isUndefined:jr,isDate:Sx,isFile:kx,isReactNativeBlob:Ex,isReactNative:Rx,isBlob:Cx,isRegExp:Zx,isFunction:Ge,isStream:Tx,isURLSearchParams:Ix,isTypedArray:qx,isFileList:Nx,forEach:mi,merge:Ls,extend:Fx,trim:Dx,stripBOM:Hx,inherits:Ux,toFlatObject:_x,kindOf:Ml,kindOfTest:it,endsWith:Gx,toArray:Vx,forEachEntry:Yx,matchAll:Kx,isHTMLForm:$x,hasOwnProperty:li,hasOwnProp:li,hasOwnInPrototypeChain:di,getSafeProp:yx,toSafeFlatObject:wx,reduceDescriptors:du,freezeMethods:Jx,toObjectSet:e0,toCamelCase:Xx,noop:t0,toFiniteNumber:r0,findKey:su,global:hr,isContextDefined:lu,isSpecCompliantForm:n0,toJSONObject:i0,isAsyncFn:o0,isThenable:a0,setImmediate:cu,asap:s0,isIterable:pu,isSafeIterable:l0},d0=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),c0=e=>{const t={};let n,i,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),i=s.substring(o+1).trim();const l=v.hasOwnProp(t,n);!n||l&&v.hasOwnProp(d0,n)||(n==="set-cookie"?l?t[n].push(i):t[n]=[i]:t[n]=l?t[n]+", "+i:i)}),t};function p0(e){let t=0,n=e.length;for(;t<n;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;n>t;){const i=e.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const h0=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),u0=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Bl(e,t){return v.isArray(e)?e.map(n=>Bl(n,t)):p0(String(e).replace(t,""))}const f0=e=>Bl(e,h0),g0=e=>Bl(e,u0);function hu(e){const t=Object.create(null);return v.forEach(e.toJSON(),(n,i)=>{t[i]=g0(n)}),t}const dc=Symbol("internals");function En(e){return e&&String(e).trim().toLowerCase()}function ro(e){return e===!1||e==null?e:v.isArray(e)?e.map(ro):f0(String(e))}function m0(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}const x0=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Ea(e){let t=0,n=e.length;for(;t<n;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;n>t;){const i=e.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}function y0(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n="";for(let i=1;i<t;i++){const o=e.charCodeAt(i);if(o===34||o===92&&(i+=1,i>=t))return e;n+=e[i]}return n}function w0(e){const t=Object.create(null),n=String(e);let i=0,o=!1,a=!1;function s(l){const d=Ea(n.slice(i,l)),c=d.indexOf("=");if(c<1)return;const f=Ea(d.slice(0,c));if(!x0.test(f))return;const u=f.toLowerCase();if(u==="__proto__"||u==="constructor"||u==="prototype")return;const x=Ea(d.slice(c+1));t[u]=y0(x)}for(let l=0;l<n.length;l++){const d=n.charCodeAt(l);o?a?a=!1:d===92?a=!0:d===34&&(o=!1):d===34?o=!0:(d===44||d===59)&&(s(l),i=l+1)}return s(n.length),t}const v0=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ra(e,t,n,i,o){if(v.isFunction(i))return i.call(this,t,n);if(o&&(t=n),!!v.isString(t)){if(v.isString(i))return t.indexOf(i)!==-1;if(v.isRegExp(i))return i.test(t)}}function b0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,i)=>n.toUpperCase()+i)}function j0(e,t){const n=v.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+n,{__proto__:null,value:function(o,a,s){return this[i].call(this,t,o,a,s)},configurable:!0})})}let Pe=class{constructor(t){t&&this.set(t)}set(t,n,i){const o=this;function a(l,d,c){const f=En(d);if(!f)return;const u=v.findKey(o,f);(!u||o[u]===void 0||c===!0||c===void 0&&o[u]!==!1)&&(o[u||d]=ro(l))}const s=(l,d)=>v.forEach(l,(c,f)=>a(c,f,d));if(v.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(v.isString(t)&&(t=t.trim())&&!v0(t))s(c0(t),n);else if(v.isObject(t)&&v.isSafeIterable(t)){let l=Object.create(null),d,c;for(const f of t){if(!v.isArray(f))throw new TypeError("Object iterator must return a key-value pair");c=f[0],v.hasOwnProp(l,c)?(d=l[c],l[c]=v.isArray(d)?[...d,f[1]]:[d,f[1]]):l[c]=f[1]}s(l,n)}else t!=null&&a(n,t,i);return this}get(t,n){if(t=En(t),t){const i=v.findKey(this,t);if(i){const o=this[i];if(!n)return o;if(n===!0)return m0(o);if(v.isFunction(n))return n.call(this,o,i);if(v.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=En(t),t){const i=v.findKey(this,t);return!!(i&&this[i]!==void 0&&(!n||Ra(this,this[i],i,n)))}return!1}delete(t,n){const i=this;let o=!1;function a(s){if(s=En(s),s){const l=v.findKey(i,s);l&&(!n||Ra(i,i[l],l,n))&&(delete i[l],o=!0)}}return v.isArray(t)?t.forEach(a):a(t),o}clear(t){const n=Object.keys(this);let i=n.length,o=!1;for(;i--;){const a=n[i];(!t||Ra(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const n=this,i={};return v.forEach(this,(o,a)=>{const s=v.findKey(i,a);if(s){n[s]=ro(o),delete n[a];return}const l=t?b0(a):String(a).trim();l!==a&&delete n[a],n[l]=ro(o),i[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return v.forEach(this,(i,o)=>{i!=null&&i!==!1&&(n[o]=t&&v.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return v.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return w0(t)}static concat(t,...n){const i=new this(t);return n.forEach(o=>i.set(o)),i}static accessor(t){const i=(this[dc]=this[dc]={accessors:{}}).accessors,o=this.prototype;function a(s){const l=En(s);i[l]||(j0(o,s),i[l]=!0)}return v.isArray(t)?t.forEach(a):a(t),this}};Pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(Pe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[n]=i}}});v.freezeMethods(Pe);const To="[REDACTED ****]";function A0(e){if(v.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(v.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function S0(e,t){const n=new Set(t.map(a=>String(a).toLowerCase())),i=[],o=a=>{if(a===null||typeof a!="object"||v.isBuffer(a))return a;if(i.indexOf(a)!==-1)return;a instanceof Pe&&(a=a.toJSON()),i.push(a);let s;if(v.isArray(a))s=[],a.forEach((l,d)=>{const c=o(l);v.isUndefined(c)||(s[d]=c)});else{if(!v.isPlainObject(a)&&A0(a))return i.pop(),a;s=Object.create(null);for(const[l,d]of Object.entries(a)){const c=n.has(l.toLowerCase())?To:o(d);v.isUndefined(c)||(s[l]=c)}}return i.pop(),s};return o(e)}function cc(e){try{return String(e)}catch{return""}}function k0(e){return e.errors.map(n=>{try{return n&&n.message?cc(n.message):cc(n)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let O=class uu extends Error{static from(t,n,i,o,a,s){let l=t.message;!l&&v.isArray(t.errors)&&t.errors.length&&(l=k0(t));const d=new uu(l,n||t.code,i,o,a);return Object.defineProperty(d,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),d.name=t.name,t.status!=null&&d.status==null&&(d.status=t.status),s&&Object.assign(d,s),d}constructor(t,n,i,o,a){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),o&&(this.request=o),a&&(this.response=a,this.status=a.status)}toJSON(){const t=this.config,n=t&&v.hasOwnProp(t,"redact")?t.redact:void 0,i=v.isArray(n)&&n.length>0?S0(t,n):v.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};O.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";O.ERR_BAD_OPTION="ERR_BAD_OPTION";O.ECONNABORTED="ECONNABORTED";O.ETIMEDOUT="ETIMEDOUT";O.ECONNREFUSED="ECONNREFUSED";O.ERR_NETWORK="ERR_NETWORK";O.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";O.ERR_DEPRECATED="ERR_DEPRECATED";O.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";O.ERR_BAD_REQUEST="ERR_BAD_REQUEST";O.ERR_CANCELED="ERR_CANCELED";O.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";O.ERR_INVALID_URL="ERR_INVALID_URL";O.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const E0=null,fu=100;function Ms(e){return v.isPlainObject(e)||v.isArray(e)}function gu(e){return v.endsWith(e,"[]")?e.slice(0,-2):e}function Ca(e,t,n){return e?e.concat(t).map(function(o,a){return o=gu(o),!n&&a?"["+o+"]":o}).join(n?".":""):t}function R0(e){return v.isArray(e)&&!e.some(Ms)}const C0=v.toFlatObject(v,{},null,function(t){return/^is[A-Z]/.test(t)});function Qo(e,t,n){if(!v.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(h,g)=>{const j=v.getSafeProp(n,h);return v.isUndefined(j)?g:j},o=i("metaTokens",!0),a=i("visitor")||b,s=i("dots",!1),l=i("indexes",!1),d=i("Blob")||typeof Blob<"u"&&Blob,c=i("maxDepth",fu),f=d&&v.isSpecCompliantForm(t),u=[];if(!v.isFunction(a))throw new TypeError("visitor must be a function");function x(h){if(h===null)return"";if(v.isDate(h))return h.toISOString();if(v.isBoolean(h))return h.toString();if(!f&&v.isBlob(h))throw new O("Blob is not supported. Use a Buffer instead.");if(v.isArrayBuffer(h)||v.isTypedArray(h)){if(f&&typeof d=="function")return new d([h]);throw new O("Blob is not supported. Use a Buffer instead.",O.ERR_NOT_SUPPORT)}return h}function k(h){if(h>c)throw new O("Object is too deeply nested ("+h+" levels). Max depth: "+c,O.ERR_FORM_DATA_DEPTH_EXCEEDED)}function S(h,g){if(c===1/0)return JSON.stringify(h);const j=[];return JSON.stringify(h,function(N,m){if(!v.isObject(m))return m;for(;j.length&&j[j.length-1]!==this;)j.pop();return j.push(m),k(g+j.length-1),m})}function b(h,g,j){let A=h;if(v.isReactNative(t)&&v.isReactNativeBlob(h))return t.append(Ca(j,g,s),x(h)),!1;if(h&&!j&&typeof h=="object"){if(v.endsWith(g,"{}"))g=o?g:g.slice(0,-2),h=S(h,1);else if(v.isArray(h)&&R0(h)||(v.isFileList(h)||v.endsWith(g,"[]"))&&(A=v.toArray(h)))return g=gu(g),A.forEach(function(m,C){!(v.isUndefined(m)||m===null)&&t.append(l===!0?Ca([g],C,s):l===null?g:g+"[]",x(m))}),!1}return Ms(h)?!0:(t.append(Ca(j,g,s),x(h)),!1)}const R=Object.assign(C0,{defaultVisitor:b,convertValue:x,isVisitable:Ms});function p(h,g,j=0){if(!v.isUndefined(h)){if(k(j),u.indexOf(h)!==-1)throw new Error("Circular reference detected in "+g.join("."));u.push(h),v.forEach(h,function(N,m){(!(v.isUndefined(N)||N===null)&&a.call(t,N,v.isString(m)?m.trim():m,g,R))===!0&&p(N,g?g.concat(m):[m],j+1)}),u.pop()}}if(!v.isObject(e))throw new TypeError("data must be an object");return p(e),t}function pc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(i){return t[i]})}function Wl(e,t){this._pairs=[],e&&Qo(e,this,t)}const mu=Wl.prototype;mu.append=function(t,n){this._pairs.push([t,n])};mu.toString=function(t){const n=t?i=>t.call(this,i,pc):pc;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function N0(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function xu(e,t,n){if(!t)return e;e=e||"";const i=v.isFunction(n)?{serialize:n}:n,o=v.getSafeProp(i,"encode")||N0,a=v.getSafeProp(i,"serialize");let s;if(a?s=a(t,i):s=v.isURLSearchParams(t)?t.toString():new Wl(t,i).toString(o),s){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}const Rn=Symbol("internals");function yu(e){return e?e.length:0}function hc(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function Cn(e,t){const n=e.handlers,i=yu(n);n!==t.handlersRef?(t.handlersRef=n,t.handlerEntries.clear()):i!==t.handlersLength&&(i?t.handlerEntries.forEach(function(a,s){n[a.index]!==a.handler&&t.handlerEntries.delete(s)}):t.handlerEntries.clear()),t.handlersLength=i}class uc{constructor(){this.handlers=[],this[Rn]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(t,n,i){const o={fulfilled:t,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},a=this[Rn];this.handlers==null&&(this.handlers=[]),Cn(this,a);const s=a.nextId++;return this.handlers.push(o),a.handlerEntries.set(s,{handler:o,index:this.handlers.length-1}),a.handlersLength=this.handlers.length,s}eject(t){const n=this[Rn];Cn(this,n);const i=n.handlerEntries.get(t);if(i){if(n.handlerEntries.delete(t),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||(hc(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Cn(this,this[Rn]))}forEach(t){const n=this[Rn];Cn(this,n),n.iterationDepth++;try{v.forEach(this.handlers,function(o){o!==null&&t(o)})}finally{--n.iterationDepth||(Cn(this,n),hc(this.handlers),n.handlersLength=yu(this.handlers))}}}const Dl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},z0=typeof URLSearchParams<"u"?URLSearchParams:Wl,T0=typeof FormData<"u"?FormData:null,P0=typeof Blob<"u"?Blob:null,O0={isBrowser:!0,classes:{URLSearchParams:z0,FormData:T0,Blob:P0},protocols:["http","https","file","blob","url","data"]},Fl=typeof window<"u"&&typeof document<"u",Bs=typeof navigator=="object"&&navigator||void 0,I0=Fl&&(!Bs||["ReactNative","NativeScript","NS"].indexOf(Bs.product)<0),L0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",M0=Fl&&window.location.href||"http://localhost",B0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fl,hasStandardBrowserEnv:I0,hasStandardBrowserWebWorkerEnv:L0,navigator:Bs,origin:M0},Symbol.toStringTag,{value:"Module"})),je={...B0,...O0};function W0(e,t){return Qo(e,new je.classes.URLSearchParams,{visitor:function(n,i,o,a){return je.isNode&&v.isBuffer(n)?(this.append(i,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}const fc=fu;function wu(e){if(e>fc)throw new O("FormData field is too deeply nested ("+e+" levels). Max depth: "+fc,O.ERR_FORM_DATA_DEPTH_EXCEEDED)}function D0(e){const t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(e))!==null;)wu(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function F0(e){const t={},n=Object.keys(e);let i;const o=n.length;let a;for(i=0;i<o;i++)a=n[i],t[a]=e[a];return t}function vu(e){function t(n,i,o,a){wu(a);let s=n[a++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),d=a>=n.length;return s=!s&&v.isArray(o)?o.length:s,d?(v.hasOwnProp(o,s)?o[s]=v.isArray(o[s])?o[s].concat(i):[o[s],i]:o[s]=i,!l):((!v.hasOwnProp(o,s)||!v.isObject(o[s]))&&(o[s]=[]),t(n,i,o[s],a)&&v.isArray(o[s])&&(o[s]=F0(o[s])),!l)}if(v.isFormData(e)&&v.isFunction(e.entries)){const n={};return v.forEachEntry(e,(i,o)=>{t(D0(i),o,n,0)}),n}return null}const bu=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Pr=(e,t)=>e!=null&&v.hasOwnProp(e,t)?e[t]:void 0;function H0(e,t,n){if(v.isString(e))try{return(t||JSON.parse)(e),v.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(e)}const xi={transitional:Dl,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const i=n.getContentType()||"",o=i.indexOf("application/json")>-1,a=v.isObject(t);if(a&&v.isHTMLForm(t)&&(t=new FormData(t)),v.isFormData(t))return o?JSON.stringify(vu(t)):t;if(v.isArrayBuffer(t)||v.isBuffer(t)||v.isStream(t)||v.isFile(t)||v.isBlob(t)||v.isReadableStream(t))return t;if(v.isArrayBufferView(t))return t.buffer;if(v.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){const d=Pr(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return W0(t,d).toString();if((l=v.isFileList(t))||i.indexOf("multipart/form-data")>-1){const c=Pr(this,"env"),f=c&&c.FormData;return Qo(l?{"files[]":t}:t,f&&new f,d)}}return a||o?(n.setContentType("application/json",!1),H0(t)):t}],transformResponse:[function(t){const n=Pr(this,"transitional")||xi.transitional,i=n&&n.forcedJSONParsing,o=Pr(this,"responseType"),a=o==="json";if(v.isResponse(t)||v.isReadableStream(t))return t;if(t&&v.isString(t)&&(i&&!o||a)){const l=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t,Pr(this,"parseReviver"))}catch(d){if(l)throw d.name==="SyntaxError"?O.from(d,O.ERR_BAD_RESPONSE,this,null,Pr(this,"response")):d}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:je.classes.FormData,Blob:je.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(bu,e=>{xi.headers[e]={}});function Na(e,t){const n=this||xi,i=t||n,o=Pe.from(i.headers);let a=i.data;return v.forEach(e,function(l){a=l.call(n,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function ju(e){return!!(e&&e.__CANCEL__)}let yi=class extends O{constructor(t,n,i){super(t??"canceled",O.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Au(e,t,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(new O("Request failed with status code "+n.status,n.status>=400&&n.status<500?O.ERR_BAD_REQUEST:O.ERR_BAD_RESPONSE,n.config,n.request,n))}const U0=/[\t\n\r]/g;function Su(e){if(typeof e!="string")return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(U0,"")}function za(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function _0(e,t){e=e||10;const n=new Array(e),i=new Array(e);let o=0,a=0,s;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),f=i[a];s||(s=c),n[o]=d,i[o]=c;let u=a,x=0;for(;u!==o;)x+=n[u++],u=u%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),c-s<t)return;const k=f&&c-f;return k?Math.round(x*1e3/k):void 0}}function G0(e,t){let n=0,i=1e3/t,o,a;const s=(f,u=Date.now())=>{n=u,o=null,a&&(clearTimeout(a),a=null),e(...f)};return[(...f)=>{const u=Date.now(),x=u-n;x>=i?s(f,u):(o=f,a||(a=setTimeout(()=>{a=null,s(o)},i-x)))},()=>o&&s(o),(...f)=>s(f)]}const Po=(e,t,n=3)=>{let i=0;const o=_0(50,250);return G0(a=>{if(!a||!v.isNumber(a.loaded))return;const s=a.loaded,l=a.lengthComputable?a.total:void 0,d=Math.max(0,l!=null?Math.min(s,l):s),c=Math.max(0,d-i),f=o(c);i=Math.max(i,d);const u={loaded:d,total:l,progress:l?d/l:void 0,bytes:c,rate:f||void 0,estimated:f&&l?(l-d)/f:void 0,event:a,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(u)},n)},gc=(e,t)=>{const n=e!=null;return[i=>t[0]({lengthComputable:n,total:e,loaded:i}),t[1]]},mc=(e,t=v.asap)=>(...n)=>t(()=>e(...n)),V0=je.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,je.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(je.origin),je.navigator&&/(msie|trident)/i.test(je.navigator.userAgent)):()=>!0,q0=je.hasStandardBrowserEnv?{write(e,t,n,i,o,a,s){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];v.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),v.isString(i)&&l.push(`path=${i}`),v.isString(o)&&l.push(`domain=${o}`),a===!0&&l.push("secure"),v.isString(s)&&l.push(`SameSite=${s}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const i=t[n].replace(/^\s+/,""),o=i.indexOf("=");if(o!==-1&&i.slice(0,o)===e)try{return decodeURIComponent(i.slice(o+1))}catch{return i.slice(o+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Y0(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function K0(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+"/"+t.replace(/^\/+/,"")}const $0=/^https?:(?!\/\/)/i;function X0(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,n,i="")=>`${n}${i}${To}`)}function Q0(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${To}@`),n=t.indexOf("#"),o=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${To}`);return n===-1?o:`${o}#${X0(t.slice(n+1))}`}function xc(e,t){if(typeof e=="string"){const n=Su(e);if($0.test(n))throw new O(`Invalid URL ${JSON.stringify(Q0(n))}: missing "//" after protocol`,O.ERR_INVALID_URL,t)}}function ku(e,t,n,i){xc(t,i);let o=!Y0(t);return e&&(o||n===!1)?(xc(e,i),K0(e,t)):t}const yc=e=>e instanceof Pe?{...e}:e,Z0=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function Ar(e,t){e=e||{},t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(f,u,x,k){return v.isPlainObject(f)&&v.isPlainObject(u)?v.merge.call({caseless:k},f,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function o(f,u,x,k){if(v.isUndefined(u)){if(!v.isUndefined(f))return i(void 0,f,x,k)}else return i(f,u,x,k)}function a(f,u){if(!v.isUndefined(u))return i(void 0,u)}function s(f,u){if(v.isUndefined(u)){if(!v.isUndefined(f))return i(void 0,f)}else return i(void 0,u)}function l(f){const u=v.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!v.isUndefined(u))if(v.isPlainObject(u)){if(v.hasOwnProp(u,f))return u[f]}else return;const x=v.hasOwnProp(e,"transitional")?e.transitional:void 0;if(v.isPlainObject(x)&&v.hasOwnProp(x,f))return x[f]}function d(f,u,x){if(v.hasOwnProp(t,x))return i(f,u);if(v.hasOwnProp(e,x))return i(void 0,f)}const c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutErrorMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,allowedSocketPaths:s,responseEncoding:s,validateStatus:d,headers:(f,u,x)=>o(yc(f),yc(u),x,!0)};return v.forEach(Z0({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const x=v.hasOwnProp(c,u)?c[u]:o,k=v.hasOwnProp(e,u)?e[u]:void 0,S=v.hasOwnProp(t,u)?t[u]:void 0,b=x(k,S,u);v.isUndefined(b)&&x!==d||(n[u]=b)}),v.hasOwnProp(t,"validateStatus")&&v.isUndefined(t.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(v.hasOwnProp(e,"validateStatus")?n.validateStatus=i(void 0,e.validateStatus):delete n.validateStatus),n}const J0=["content-type","content-length"];function e1(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([i,o])=>{J0.includes(i.toLowerCase())&&e.set(i,o)})}const t1=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16)));function Eu(e){const t=Ar({},e),n=x=>v.hasOwnProp(t,x)?t[x]:void 0,i=n("data");let o=n("withXSRFToken");const a=n("xsrfHeaderName"),s=n("xsrfCookieName");let l=n("headers");const d=n("auth"),c=n("baseURL"),f=n("allowAbsoluteUrls"),u=n("url");if(t.headers=l=Pe.from(l),t.url=xu(ku(c,u,f,t),n("params"),n("paramsSerializer")),d){const x=v.getSafeProp(d,"username")||"",k=v.getSafeProp(d,"password")||"";try{l.set("Authorization","Basic "+btoa(x+":"+(k?t1(k):"")))}catch(S){throw O.from(S,O.ERR_BAD_OPTION_VALUE,e)}}if(v.isFormData(i)){const x=v.getSafeProp(i,"getHeaders");je.hasStandardBrowserEnv||je.hasStandardBrowserWebWorkerEnv||v.isReactNative(i)?l.setContentType(void 0):v.isFunction(x)&&e1(l,x.call(i),n("formDataHeaderPolicy"))}if(je.hasStandardBrowserEnv&&(v.isFunction(o)&&(o=o(t)),o===!0||o==null&&V0(t.url))){const k=a&&s&&q0.read(s);k&&l.set(a,k)}return t}const r1=typeof XMLHttpRequest<"u",n1=r1&&function(e){return new Promise(function(n,i){const o=Eu(e);let a=o.data;const s=Pe.from(o.headers).normalize();let{responseType:l,onUploadProgress:d,onDownloadProgress:c}=o,f,u,x,k,S,b;function R(){k&&k(),S&&S(),o.cancelToken&&o.cancelToken.unsubscribe(f),o.signal&&o.signal.removeEventListener("abort",f)}let p=new XMLHttpRequest;p.open(o.method.toUpperCase(),o.url,!0),p.timeout=o.timeout;function h(j){if(!p)return;if(p.status===0&&(za(Su(o.url))||za(je.origin))!=="file"&&!(p.responseURL&&p.responseURL.startsWith("file:"))){i(new O("Request aborted",O.ECONNABORTED,e,p)),R(),p=null;return}try{j?b&&b(j):S&&S()}catch(C){setTimeout(()=>{throw C})}if(!p)return;const A=Pe.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),m={data:!l||l==="text"||l==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:A,config:e,request:p};Au(function(B){n(B),R()},function(B){i(B),R()},m),p=null}"onloadend"in p?p.onloadend=h:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(h)},p.onabort=function(){p&&(i(new O("Request aborted",O.ECONNABORTED,e,p)),R(),p=null)},p.onerror=function(A){const N=A&&A.message?A.message:"Network Error",m=new O(N,O.ERR_NETWORK,e,p);m.event=A||null,i(m),R(),p=null},p.ontimeout=function(){let A=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||Dl;o.timeoutErrorMessage&&(A=o.timeoutErrorMessage),i(new O(A,N.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,e,p)),R(),p=null},a===void 0&&s.setContentType(null),"setRequestHeader"in p&&v.forEach(hu(s),function(A,N){p.setRequestHeader(N,A)}),v.isUndefined(o.withCredentials)||(p.withCredentials=!!o.withCredentials),l&&l!=="json"&&(p.responseType=o.responseType),c&&([x,S,b]=Po(c,!0),p.addEventListener("progress",x)),d&&p.upload&&([u,k]=Po(d),p.upload.addEventListener("progress",u),p.upload.addEventListener("loadend",k)),(o.cancelToken||o.signal)&&(f=j=>{p&&(i(!j||j.type?new yi(null,e,p):j),p.abort(),R(),p=null)},o.cancelToken&&o.cancelToken.subscribe(f),o.signal&&(o.signal.aborted?f():o.signal.addEventListener("abort",f)));const g=za(o.url);if(g&&!je.protocols.includes(g)){i(new O("Unsupported protocol "+g+":",O.ERR_BAD_REQUEST,e)),R();return}p.send(a||null)})},i1=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let i=!1;const o=function(d){if(!i){i=!0,s();const c=d instanceof Error?d:this.reason;n.abort(c instanceof O?c:new yi(c instanceof Error?c.message:c))}};let a=t&&setTimeout(()=>{a=null,o(new O(`timeout of ${t}ms exceeded`,O.ETIMEDOUT))},t);const s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>{if(!i){if(d.aborted){o.call(d);return}d.addEventListener("abort",o,{once:!0})}});const{signal:l}=n;return l.unsubscribe=()=>v.asap(s),l},o1=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let i=0,o;for(;i<n;)o=i+t,yield e.slice(i,o),i=o},a1=async function*(e,t){for await(const n of s1(e))yield*o1(n,t)},s1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:i}=await t.read();if(n)break;yield i}}finally{await t.cancel()}},wc=(e,t,n,i)=>{const o=a1(e,t);let a=0,s,l=d=>{s||(s=!0,i&&i(d))};return new ReadableStream({async pull(d){try{const{done:c,value:f}=await o.next();if(c){l(),d.close();return}let u=f.byteLength;if(n){let x=a+=u;n(x)}d.enqueue(new Uint8Array(f))}catch(c){throw l(c),c}},cancel(d){return l(d),o.return()}},{highWaterMark:2})},vc=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Ru=(e,t,n)=>t+2<n&&vc(e.charCodeAt(t+1))&&vc(e.charCodeAt(t+2)),bc=e=>e<=57?e-48:(e&223)-55,l1=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,d1=e=>e===9||e===10||e===12||e===13||e===32,c1=e=>{const t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},p1=e=>{const t=e.length;let n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},h1=e=>{const t=e.length;let n=0,i=0,o=!1;for(let a=0;a<t;a++){let s=e.charCodeAt(a);if(s===37&&Ru(e,a,t)&&(s=bc(e.charCodeAt(a+1))*16+bc(e.charCodeAt(a+2)),a+=2),!d1(s)){if(s===61){i++;continue}if(!l1(s)||i>0){o=!0;continue}n++}}return o||i>2||i>0&&(n+i)%4!==0||n%4===1?p1(e):c1(n)},u1=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const n=e.indexOf(",");if(n<0)return 0;const i=e.slice(5,n),o=e.slice(n+1);if(/;base64/i.test(i))return t(o);let s=0;for(let l=0,d=o.length;l<d;l++){const c=o.charCodeAt(l);if(c===37&&Ru(o,l,d))s+=1,l+=2;else if(c<128)s+=1;else if(c<2048)s+=2;else if(c>=55296&&c<=56319&&l+1<d){const f=o.charCodeAt(l+1);f>=56320&&f<=57343?(s+=4,l++):s+=3}else s+=3}return s};function f1(e){const t=typeof e=="string"?e.indexOf("#"):-1;return u1(t===-1?e:e.slice(0,t),h1)}const Hl="1.20.0",jc=64*1024,g1={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Bi}=v,m1=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),Ac=e=>{if(!v.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Sc=(e,...t)=>{try{return!!e(...t)}catch{return!1}},x1=e=>{const t=e.indexOf("://");let n=e;return t!==-1&&(n=n.slice(t+3)),n.includes("@")||n.includes(":")},y1=e=>{const t=v.global!==void 0&&v.global!==null?v.global:globalThis,{ReadableStream:n,TextEncoder:i}=t;e=v.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:o,Request:a,Response:s}=e,l=o?Bi(o):typeof fetch=="function",d=Bi(a),c=Bi(s);if(!l)return!1;const f=l&&Bi(n),u=l&&(typeof i=="function"?(p=>h=>p.encode(h))(new i):async p=>new Uint8Array(await new a(p).arrayBuffer())),x=d&&f&&Sc(()=>{let p=!1;const h=new a(je.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),g=h.headers.has("Content-Type");return h.body!=null&&h.body.cancel(),p&&!g}),k=c&&f&&Sc(()=>v.isReadableStream(new s("").body)),S={stream:k&&(p=>p.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!S[p]&&(S[p]=(h,g)=>{let j=h&&h[p];if(j)return j.call(h);throw new O(`Response type '${p}' is not supported`,O.ERR_NOT_SUPPORT,g)})});const b=async p=>{if(p==null)return 0;if(v.isBlob(p))return p.size;if(v.isSpecCompliantForm(p))return(await new a(je.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(v.isArrayBufferView(p)||v.isArrayBuffer(p))return p.byteLength;if(v.isURLSearchParams(p)&&(p=p+""),v.isString(p))return(await u(p)).byteLength},R=async(p,h)=>{const g=v.toFiniteNumber(p.getContentLength());return g??b(h)};return async p=>{let{url:h,method:g,data:j,signal:A,cancelToken:N,timeout:m,onDownloadProgress:C,onUploadProgress:B,responseType:M,headers:q,withCredentials:$="same-origin",fetchOptions:F,maxContentLength:P,maxBodyLength:Z,maxRedirects:w}=Eu(p);const I=v.isNumber(P)&&P>-1,T=v.isNumber(Z)&&Z>-1,W=U=>v.hasOwnProp(p,U)?p[U]:void 0;let G=o||fetch;M=M?(M+"").toLowerCase():"text";let Q=i1([A,N&&N.toAbortSignal()],m),V=null;const he=Q&&Q.unsubscribe&&(()=>{Q.unsubscribe()});let fe,ot=null;const Qe=()=>new O("Request body larger than maxBodyLength limit",O.ERR_BAD_REQUEST,p,V);try{let U;const ge=W("auth");if(ge){const _=v.getSafeProp(ge,"username")||"",ve=v.getSafeProp(ge,"password")||"";U={username:_,password:ve}}if(x1(h)){const _=new URL(h,je.origin);if(!U&&(_.username||_.password)){const ve=Ac(_.username),gt=Ac(_.password);U={username:ve,password:gt}}(_.username||_.password)&&(_.username="",_.password="",h=_.href)}if(U&&(q.delete("authorization"),q.set("Authorization","Basic "+btoa(m1((U.username||"")+":"+(U.password||""))))),I&&typeof h=="string"&&h.startsWith("data:")&&f1(h)>P)throw new O("maxContentLength size of "+P+" exceeded",O.ERR_BAD_RESPONSE,p,V);if(T&&g!=="get"&&g!=="head"){const _=await b(j);if(typeof _=="number"&&isFinite(_)&&(fe=_,_>Z))throw Qe()}const Nr=T&&(v.isReadableStream(j)||v.isStream(j)),wi=(_,ve,gt)=>wc(_,jc,y=>{if(T&&y>Z)throw ot=Qe();ve&&ve(y)},gt);if(x&&g!=="get"&&g!=="head"&&(B||Nr)){if(fe=fe??await R(q,j),fe!==0||Nr){let _=new a(h,{method:"POST",body:j,duplex:"half"}),ve;if(v.isFormData(j)&&(ve=_.headers.get("content-type"))&&q.setContentType(ve),_.body){const[gt,y]=B&&gc(fe,Po(mc(B)))||[];j=wi(_.body,gt,y)}}}else if(Nr&&!d&&f&&g!=="get"&&g!=="head")j=wi(j);else if(Nr&&d&&!x&&g!=="get"&&g!=="head")throw new O("Stream request bodies are not supported by the current fetch implementation",O.ERR_NOT_SUPPORT,p,V);v.isString($)||($=$?"include":"omit");const mn=d&&"credentials"in a.prototype;if(v.isFormData(j)){const _=q.getContentType();_&&/^multipart\/form-data/i.test(_)&&!/boundary=/i.test(_)&&q.delete("content-type")}q.set("User-Agent","axios/"+Hl,!1);const D=F==null?F:Object.assign(Object.create(null),F);D&&(delete D.body,delete D.headers,delete D.method,delete D.signal,delete D.duplex,delete D.credentials);const ee=Object.assign(Object.create(null),D,{signal:Q,method:g.toUpperCase(),headers:hu(q.normalize()),body:j,duplex:"half",credentials:mn?$:void 0});d&&(v.forEach(g1,(_,ve)=>{ee[ve]===void 0&&(ee[ve]=_)}),ee.signal===void 0&&(ee.signal=null),ee.body===void 0&&(ee.body=null)),w===0&&(ee.redirect="manual",D&&(D.redirect="manual")),V=d&&new a(h,ee);let Se=await(d?G(V,D):G(h,ee));const zr=Pe.from(Se.headers);if(I){const _=v.toFiniteNumber(zr.getContentLength());if(_!=null&&_>P)throw new O("maxContentLength size of "+P+" exceeded",O.ERR_BAD_RESPONSE,p,V)}const xn=k&&(M==="stream"||M==="response");if(k&&Se.body&&(C||I||xn&&he)){const _={};["status","statusText","headers"].forEach(mt=>{_[mt]=Se[mt]});const ve=v.toFiniteNumber(zr.getContentLength()),[gt,y]=C&&gc(ve,Po(mc(C),!0))||[];let me=0;const xe=mt=>{if(I&&(me=mt,me>P))throw new O("maxContentLength size of "+P+" exceeded",O.ERR_BAD_RESPONSE,p,V);gt&&gt(mt)};Se=new s(wc(Se.body,jc,xe,()=>{y&&y(),he&&he()}),_)}M=M||"text";let at=await S[v.findKey(S,M)||"text"](Se,p);if(I&&!k&&!xn){let _;if(at!=null&&(typeof at.byteLength=="number"?_=at.byteLength:typeof at.size=="number"?_=at.size:typeof at=="string"&&(_=typeof i=="function"?new i().encode(at).byteLength:at.length)),typeof _=="number"&&_>P)throw new O("maxContentLength size of "+P+" exceeded",O.ERR_BAD_RESPONSE,p,V)}return!xn&&he&&he(),await new Promise((_,ve)=>{Au(_,ve,{data:at,headers:Pe.from(Se.headers),status:Se.status,statusText:Se.statusText,config:p,request:V})})}catch(U){if(he&&he(),Q&&Q.aborted&&Q.reason instanceof O){const ge=Q.reason;throw ge.config=p,V&&(ge.request=V),U!==ge&&Object.defineProperty(ge,"cause",{__proto__:null,value:U,writable:!0,enumerable:!1,configurable:!0}),ge}if(ot)throw V&&!ot.request&&(ot.request=V),ot;if(U instanceof O)throw V&&!U.request&&(U.request=V),U;if(U&&U.name==="TypeError"&&/Load failed|fetch/i.test(U.message)){const ge=new O("Network Error",O.ERR_NETWORK,p,V,U&&U.response);throw Object.defineProperty(ge,"cause",{__proto__:null,value:U.cause||U,writable:!0,enumerable:!1,configurable:!0}),ge}throw O.from(U,U&&U.code,p,V,U&&U.response)}}},w1=new Map,Cu=e=>{let t=e&&e.env||{};const{fetch:n,Request:i,Response:o}=t,a=[i,o,n];let s=a.length,l=s,d,c,f=w1;for(;l--;)d=a[l],c=f.get(d),c===void 0&&f.set(d,c=l?new Map:y1(t)),f=c;return c};Cu();const Ul={http:E0,xhr:n1,fetch:{get:Cu}};v.forEach(Ul,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const kc=e=>`- ${e}`,v1=e=>v.isFunction(e)||e===null||e===!1;function b1(e,t){e=v.isArray(e)?e:[e];const{length:n}=e;let i,o;const a={};for(let s=0;s<n;s++){i=e[s];let l;if(o=i,!v1(i)&&(o=Ul[(l=String(i)).toLowerCase()],o===void 0))throw new O(`Unknown adapter '${l}'`);if(o&&(v.isFunction(o)||(o=o.get(t))))break;a[l||"#"+s]=o}if(!o){const s=Object.entries(a).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=n?s.length>1?`since :
`+s.map(kc).join(`
`):" "+kc(s[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+l,O.ERR_NOT_SUPPORT)}return o}const Nu={getAdapter:b1,adapters:Ul};function Ta(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new yi(null,e)}function Pa(e){const t=v.toSafeFlatObject(e);return Ta(t),t.headers=Pe.from(v.getSafeProp(t,"headers")),t.data=Na.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Nu.getAdapter(t.adapter||xi.adapter,t)(t).then(function(o){Ta(t),t.response=o;try{o.data=Na.call(t,t.transformResponse,o)}finally{delete t.response}return o.headers=Pe.from(o.headers),o},function(o){if(!ju(o)&&(Ta(t),o&&o.response)){t.response=o.response;try{o.response.data=Na.call(t,t.transformResponse,o.response)}finally{delete t.response}o.response.headers=Pe.from(o.response.headers)}return Promise.reject(o)})}const Zo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Zo[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const Ec={};Zo.transitional=function(t,n,i){function o(a,s){return"[Axios v"+Hl+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return(a,s,l)=>{if(t===!1)throw new O(o(s," has been removed"+(n?" in "+n:"")),O.ERR_DEPRECATED);return n&&!Ec[s]&&(Ec[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,s,l):!0}};Zo.spelling=function(t){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function j1(e,t,n){if(typeof e!="object"||e===null)throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let o=i.length;for(;o-- >0;){const a=i[o],s=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(s){const l=e[a],d=l===void 0||s(l,a,e);if(d!==!0)throw new O("option "+a+" must be "+d,O.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new O("Unknown option "+a,O.ERR_BAD_OPTION)}}const no={assertOptions:j1,validators:Zo},ze=no.validators;let gr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new uc,response:new uc}}async request(t,n){try{return await this._request(t,n)}catch(i){if(i instanceof Error)try{let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const a=o.stack;let s="";if(typeof a=="string"){const l=a.indexOf(`
`);s=l===-1?"":a.slice(l+1)}if(!i.stack)i.stack=s;else if(s){const l=s.indexOf(`
`),d=l===-1?-1:s.indexOf(`
`,l+1),c=d===-1?"":s.slice(d+1);String(i.stack).endsWith(c)||(i.stack+=`
`+s)}}catch{}throw i}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ar(this.defaults,n);const{transitional:i,paramsSerializer:o,headers:a}=n;i!==void 0&&no.assertOptions(i,{silentJSONParsing:ze.transitional(ze.boolean),forcedJSONParsing:ze.transitional(ze.boolean),clarifyTimeoutError:ze.transitional(ze.boolean),legacyInterceptorReqResOrdering:ze.transitional(ze.boolean),advertiseZstdAcceptEncoding:ze.transitional(ze.boolean),validateStatusUndefinedResolves:ze.transitional(ze.boolean)},!1),o!=null&&(v.isFunction(o)?n.paramsSerializer={serialize:o}:no.assertOptions(o,{encode:ze.function,serialize:ze.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),no.assertOptions(n,{baseUrl:ze.spelling("baseURL"),withXsrfToken:ze.spelling("withXSRFToken")},!0),n.method=(v.getSafeProp(n,"method")||v.getSafeProp(this.defaults,"method")||"get").toLowerCase();let s=a&&v.merge(a.common,a[n.method]);a&&v.forEach(bu.concat("common"),S=>{delete a[S]}),n.headers=Pe.concat(s,a);const l=[];let d=!0;this.interceptors.request.forEach(function(b){if(typeof b.runWhen=="function"&&b.runWhen(n)===!1)return;d=d&&b.synchronous;const R=n.transitional||Dl;R&&R.legacyInterceptorReqResOrdering?l.unshift(b.fulfilled,b.rejected):l.push(b.fulfilled,b.rejected)});const c=[];this.interceptors.response.forEach(function(b){c.push(b.fulfilled,b.rejected)});let f,u=0,x;if(!d){const S=[Pa.bind(this),void 0];for(S.unshift(...l),S.push(...c),x=S.length,f=Promise.resolve(n);u<x;)f=f.then(S[u++],S[u++]);return f}x=l.length;let k=n;for(;u<x;){const S=l[u++],b=l[u++];try{k=S?S(k):k}catch(R){if(!b){f=Promise.reject(R);break}try{const p=b.call(this,R);v.isThenable(p)&&(f=Promise.resolve(p).then(()=>Pa.call(this,k)))}catch(p){f=Promise.reject(p)}break}}if(!f)try{f=Pa.call(this,k)}catch(S){f=Promise.reject(S)}for(u=0,x=c.length;u<x;)f=f.then(c[u++],c[u++]);return f}getUri(t){t=Ar(this.defaults,t);const n=ku(t.baseURL,t.url,t.allowAbsoluteUrls,t);return xu(n,t.params,t.paramsSerializer)}};v.forEach(["delete","get","head","options"],function(t){gr.prototype[t]=function(n,i){return this.request(Ar(i||{},{method:t,url:n,data:i&&v.hasOwnProp(i,"data")?i.data:void 0}))}});v.forEach(["post","put","patch","query"],function(t){function n(i){return function(a,s,l){return this.request(Ar(l||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}gr.prototype[t]=n(),t!=="query"&&(gr.prototype[t+"Form"]=n(!0))});let A1=class zu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const i=this;this.promise.then(o=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](o);i._listeners=null}),this.promise.then=o=>{let a;const s=new Promise(l=>{i.subscribe(l),a=l}).then(o);return s.cancel=function(){i.unsubscribe(a)},s},t(function(a,s,l){i.reason||(i.reason=new yi(a,s,l),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=i=>{t.abort(i)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new zu(function(o){t=o}),cancel:t}}};function S1(e){return function(n){return e.apply(null,n)}}function k1(e){return v.isObject(e)&&e.isAxiosError===!0}const io={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(io).forEach(([e,t])=>{io[t]===void 0&&(io[t]=e)});function Tu(e){const t=new gr(e),n=tu(gr.prototype.request,t);return v.extend(n,gr.prototype,t,{allOwnKeys:!0}),v.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Tu(Ar(e,o))},n}const pe=Tu(xi);pe.Axios=gr;pe.CanceledError=yi;pe.CancelToken=A1;pe.isCancel=ju;pe.VERSION=Hl;pe.toFormData=Qo;pe.AxiosError=O;pe.Cancel=pe.CanceledError;pe.all=function(t){return Promise.all(t)};pe.spread=S1;pe.isAxiosError=k1;pe.mergeConfig=Ar;pe.AxiosHeaders=Pe;pe.formToJSON=e=>vu(v.isHTMLForm(e)?new FormData(e):e);pe.getAdapter=Nu.getAdapter;pe.HttpStatusCode=io;pe.default=pe;const{Axios:x2,AxiosError:y2,CanceledError:w2,isCancel:v2,CancelToken:b2,VERSION:j2,all:A2,Cancel:S2,isAxiosError:k2,spread:E2,toFormData:R2,AxiosHeaders:C2,HttpStatusCode:N2,formToJSON:z2,getAdapter:T2,mergeConfig:P2,create:O2}=pe,K=pe.create({baseURL:"/api",timeout:1e4});K.interceptors.request.use(e=>{const t=localStorage.getItem("admin_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});const Pu="/assets/logo-homwiser-Cd0C7JXv.png";function Rr(){const t=Er().pathname==="/",[n,i]=E.useState(!1),[o,a]=E.useState(null),[s,l]=E.useState(!1);E.useEffect(()=>{const b=()=>{l(window.scrollY>40)};return b(),window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b)}},[]);const d=b=>{a(o===b?null:b)},c=()=>{i(!1),a(null)},S=[{label:"Home",link:"/"},{label:"About",link:"about"},{label:"Budget",type:"simple",data:[{label:"Under 1 Cr",link:"/budget/under-1-cr"},{label:"1 Cr – 4 Cr",link:"/budget/1-cr-4-cr"},{label:"4 Cr – 8 Cr",link:"/budget/4-cr-8-cr"},{label:"8 Cr – 12 Cr",link:"/budget/8-cr-12-cr"},{label:"12 Cr – 16 Cr",link:"/budget/12-cr-16-cr"},{label:"16 Cr Onwards",link:"/budget/16-cr-onwards"}]},{label:"Property Type",type:"mega",data:[{label:"Residential Projects",children:[{label:"Apartment",link:"/residential-projects"},{label:"Luxury Villas",link:"/property-type/luxury-villas"},{label:"Independent Floors",link:"/property-type/independent-floors"},{label:"Pent House",link:"/property-type/pent-house"}]},{label:"Commercial Projects",children:[{label:"Shops",link:"/commercial/shops"},{label:"Office Space",link:"/commercial/office-space"},{label:"Food Court",link:"/commercial/food-court"},{label:"Anchor Stores",link:"/commercial/anchor-stores"},{label:"Cinema & Entertainment",link:"/commercial/cinema-entertainment"}]},{label:"SCO Plots",link:"/property-type/sco-plots"},{label:"Residential Plots",link:"/property-type/residential-plots"}]},{label:"Project Status",type:"simple",data:[{label:"Upcoming",link:"/status/upcoming"},{label:"New Launch",link:"/status/new-launch"},{label:"Under Construction",link:"/status/under-construction"},{label:"Ready To Move",link:"/status/ready-to-move"}]},{label:"Cities",type:"mega",data:[{label:"Gurugram",children:[{label:"Southern Peripheral Road (SPR)",link:"/location/southern-peripheral-road"},{label:"Dwarka Expressway",link:"/location/dwarka-expressway"},{label:"New Gurgaon",link:"/location/new-gurgaon"},{label:"Sohna Road",link:"/location/sohna-road"}]},{label:"Noida",children:[{label:"Noida Expressway",link:"/location/noida-expressway"},{label:"Noida Extension",link:"/location/noida-extension"},{label:"Yamuna Expressway",link:"/location/yamuna-expressway"}]},{label:"New Delhi",children:[{label:"Dwarka",link:"/location/dwarka"},{label:"South Delhi",link:"/location/south-delhi"},{label:"Central Delhi",link:"/location/central-delhi"}]},{label:"Faridabad",children:[{label:"Greater Faridabad",link:"/location/greater-faridabad"},{label:"Mathura Road",link:"/location/mathura-road"},{label:"Suraj Kund",link:"/location/suraj-kund"}]},{label:"Bengaluru",children:[{label:"North Bengaluru",link:"/location/north-bengaluru"},{label:"East Bengaluru",link:"/location/east-bengaluru"},{label:"Sarjapur Road (IT Corridor)",link:"/location/sarjapur-road"},{label:"South Bengaluru",link:"/location/south-bengaluru"},{label:"Hoskote & East Peripheral Belt",link:"/location/hoskote"}]},{label:"Hyderabad",children:[{label:"North Hyderabad",link:"/location/north-hyderabad"},{label:"South Hyderabad",link:"/location/south-hyderabad"},{label:"East Hyderabad",link:"/location/east-hyderabad"},{label:"West Hyderabad",link:"/location/west-hyderabad"}]},{label:"Mumbai",children:[{label:"South Mumbai",link:"/location/south-mumbai"},{label:"Navi Mumbai",link:"/location/navi-mumbai"},{label:"Panvel",link:"/location/panvel"},{label:"Central Mumbai",link:"/location/central-mumbai"},{label:"Kalyan",link:"/location/kalyan"}]},{label:"Pune",children:[{label:"West Pune",link:"/location/west-pune"},{label:"East Pune",link:"/location/east-pune"},{label:"Punawale",link:"/location/punawale"},{label:"South East Pune",link:"/location/south-east-pune"}]}]},{label:"Contact",link:"./Contact"},{label:"Blog",type:"simple",data:[{label:"Real Estate News",link:"/blog"}]}];return r.jsxs(r.Fragment,{children:[r.jsxs("header",{className:`hw-header ${t?"":"hw-header-inner-page"} ${s?"hw-header-scrolled":""}`,children:[r.jsxs("div",{className:"hw-header-inner",children:[r.jsx(H,{to:"/",className:"hw-logo",onClick:c,children:r.jsx("img",{src:Pu,alt:"Homwisor",className:"hw-logo-image"})}),r.jsxs("div",{className:"hw-scroll-search",children:[r.jsxs("div",{className:"hw-location-select",children:[r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M20 10.5C20 16 12 21 12 21S4 16 4 10.5a8 8 0 1 1 16 0Z",stroke:"currentColor",strokeWidth:"1.7"}),r.jsx("circle",{cx:"12",cy:"10.5",r:"2.4",stroke:"currentColor",strokeWidth:"1.7"})]}),r.jsxs("select",{defaultValue:"Gurugram","aria-label":"Select city",children:[r.jsx("option",{children:"Gurugram"}),r.jsx("option",{children:"Noida"}),r.jsx("option",{children:"New Delhi"}),r.jsx("option",{children:"Faridabad"}),r.jsx("option",{children:"Bengaluru"}),r.jsx("option",{children:"Hyderabad"}),r.jsx("option",{children:"Mumbai"}),r.jsx("option",{children:"Pune"})]}),r.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"m6 9 6 6 6-6",stroke:"currentColor",strokeWidth:"2"})})]}),r.jsxs("div",{className:"hw-search-box",children:[r.jsx("input",{type:"text",placeholder:"Search projects, localities...","aria-label":"Search projects and localities"}),r.jsx("button",{type:"button","aria-label":"Search",children:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[r.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4",stroke:"currentColor",strokeWidth:"1.8"}),r.jsx("path",{d:"m16 16 4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})})]})]}),r.jsx("nav",{className:"hw-nav",children:S.map(b=>{const R=b.type==="simple"||b.type==="mega",p=["Project Status","Cities","Resale"].includes(b.label);return r.jsxs("div",{className:`hw-nav-item ${p?`hw-scroll-menu-item hw-scroll-${b.label.toLowerCase().replace(/\s+/g,"-")}`:"hw-scroll-menu-hide"}`,onMouseEnter:()=>{R&&a(b.label)},onMouseLeave:()=>{R&&a(null)},children:[R?r.jsxs("button",{className:"hw-nav-link hw-nav-dropdown-button",onClick:()=>d(b.label),children:[r.jsx("span",{children:b.label}),r.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M6 9l6 6 6-6"})})]}):r.jsx(H,{to:b.link,className:"hw-nav-link",children:b.label}),R&&b.type==="simple"&&o===b.label&&r.jsx("div",{className:"hw-dropdown hw-simple-dropdown",children:b.data.map(h=>r.jsx(H,{to:h.link,className:"hw-dropdown-link",children:h.label},h.label))}),R&&b.type==="mega"&&o===b.label&&r.jsx("div",{className:"hw-dropdown hw-mega-dropdown",children:r.jsx("div",{className:"hw-mega-grid",children:b.data.map(h=>r.jsxs("div",{className:"hw-menu-group",children:[h.link?r.jsx(H,{to:h.link,className:"hw-group-title hw-direct-link",children:h.label}):r.jsx("div",{className:"hw-group-title",children:h.label}),h.children&&h.children.map(g=>r.jsx(H,{to:g.link,className:"hw-dropdown-child",children:g.label},g.label))]},h.label))})})]},b.label)})}),r.jsxs("div",{className:"hw-header-actions",children:[r.jsx(H,{to:"/admin",className:"hw-user-button","aria-label":"Account",children:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("circle",{cx:"12",cy:"7",r:"4"}),r.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]})}),r.jsx("button",{type:"button",className:"hw-menu-button",onClick:()=>i(b=>!b),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:n?r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[r.jsx("path",{d:"M18 6L6 18"}),r.jsx("path",{d:"M6 6l12 12"})]}):r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[r.jsx("path",{d:"M3 6h18"}),r.jsx("path",{d:"M3 12h18"}),r.jsx("path",{d:"M3 18h18"})]})})]})]}),n&&r.jsx("div",{className:"hw-mobile-menu",children:S.map(b=>{const R=b.type==="simple"||b.type==="mega";return r.jsx("div",{className:"hw-mobile-item",children:R?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"hw-mobile-main",onClick:()=>d(b.label),children:[r.jsx("span",{children:b.label}),r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M6 9l6 6 6-6"})})]}),o===b.label&&r.jsx("div",{className:"hw-mobile-submenu",children:b.data.map(p=>r.jsxs("div",{children:[p.link?r.jsx(H,{to:p.link,className:"hw-mobile-group",onClick:c,children:p.label}):r.jsx("div",{className:"hw-mobile-group",children:p.label}),p.children&&p.children.map(h=>r.jsx(H,{to:h.link,className:"hw-mobile-child",onClick:c,children:h.label},h.label))]},p.label))})]}):r.jsx(H,{to:b.link,className:"hw-mobile-main",onClick:c,children:b.label})},b.label)})})]}),r.jsx("style",{children:`

        @import url(
          'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
        );


        /* =====================================================
           RESET
        ===================================================== */

        .hw-header,
        .hw-header *,
        .hw-header *::before,
        .hw-header *::after {
          box-sizing: border-box;
        }

        .hw-header button,
        .hw-header input,
        .hw-header select {
          font-family: inherit;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .hw-header {
          position: absolute;

          top: 0;
          left: 0;
          right: 0;

          width: 100%;
          max-width: 100%;

          z-index: 99999;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.55),
              rgba(0,0,0,.15),
              transparent
            );

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          transition:
            background .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }


        /* =====================================================
           INNER PAGES
           BLACK HEADER FROM TOP
        ===================================================== */

        .hw-header-inner-page {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 100%;
          background: #000 !important;
          backdrop-filter: blur(14px);
          box-shadow: 0 5px 25px rgba(0,0,0,.35);
          border-bottom: 1px solid rgba(255,255,255,.10);
        }

        .hw-header-inner-page .hw-nav-link {
          color: #fff;
          text-shadow: none;
        }

        .hw-header-inner-page .hw-nav-link:hover {
          color: #d8aa42;
        }

        .hw-header-inner-page .hw-user-button {
          color: #fff;
          border-color: rgba(255,255,255,.55);
          background: rgba(255,255,255,.08);
        }

        .hw-header-inner-page .hw-menu-button {
          color: #fff;
        }


        /* =====================================================
           SCROLLED HEADER
           BLACK BACKGROUND
        ===================================================== */

        .hw-header-scrolled {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          width: 100%;
          max-width: 100%;

          background: #000 !important;

          backdrop-filter: blur(14px);

          box-shadow:
            0 5px 25px rgba(0,0,0,.35);

          border-bottom:
            1px solid rgba(255,255,255,.10);
        }


        /* =====================================================
           HEADER INNER
        ===================================================== */

        .hw-header-inner {
          height: 72px;

          width: 100%;
          max-width: 100%;

          padding:
            0 48px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          box-sizing: border-box;
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .hw-logo {
          width: 190px;

          height: 100%;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          text-decoration: none;

          min-width: 0;
        }

        .hw-logo-image {
          width: 175px;

          max-height: 65px;

          height: auto;

          object-fit: contain;

          object-position: left center;

          display: block;

          max-width: 100%;
        }


        /* =====================================================
           SCROLL SEARCH
        ===================================================== */

        .hw-scroll-search {
          display: none;

          align-items: center;

          gap: 8px;

          flex: 0 1 390px;

          min-width: 280px;

          margin-left: 4px;

          min-width: 0;
        }

        .hw-header-scrolled .hw-scroll-search {
          display: flex;
        }


        /* =====================================================
           LOCATION SELECT
        ===================================================== */

        .hw-location-select {
          position: relative;

          height: 40px;

          display: flex;

          align-items: center;

          gap: 7px;

          padding: 0 10px;

          background: #fff;

          border: 1px solid #dcdfe3;

          border-radius: 6px;

          color: #59616b;

          flex: 0 0 112px;

          min-width: 0;

          box-sizing: border-box;

          box-shadow:
            0 1px 2px rgba(0,0,0,.03);

          transition:
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .hw-location-select:hover {
          border-color: #c9cdd2;

          box-shadow:
            0 2px 8px rgba(0,0,0,.06);
        }

        .hw-location-select select {
          width: 100%;

          min-width: 0;

          border: 0;

          outline: 0;

          background: transparent;

          color: #3f4650;

          font-family: inherit;

          font-size: 12px;

          font-weight: 600;

          appearance: none;

          cursor: pointer;
        }


        /* =====================================================
           SEARCH BOX
        ===================================================== */

        .hw-search-box {
          height: 40px;

          display: flex;

          align-items: center;

          flex: 1;

          min-width: 0;

          background: #fff;

          border: 1px solid #e3e3e3;

          border-radius: 6px;

          overflow: hidden;
        }

        .hw-search-box input {
          flex: 1;

          min-width: 0;

          width: 100%;

          height: 100%;

          padding: 0 11px;

          border: 0;

          outline: 0;

          background: transparent;

          color: #252525;

          font-family: inherit;

          font-size: 12px;
        }

        .hw-search-box input::placeholder {
          color: #9aa0a6;
        }

        .hw-search-box button {
          width: 40px;

          height: 40px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          border: 0;

          background: #a77c1d;

          color: #fff;

          cursor: pointer;
        }


        /* =====================================================
           DESKTOP NAV
        ===================================================== */

        .hw-nav {
          height: 100%;

          flex: 1;

          min-width: 0;

          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 24px;

          padding-right: 20px;
        }

        .hw-nav-item {
          position: relative;

          height: 100%;

          display: flex;

          align-items: center;

          flex-shrink: 0;
        }

        .hw-nav-link {
          height: 100%;

          padding:
            0 3px;

          display: flex;

          align-items: center;

          gap: 6px;

          border: none;

          background: transparent;

          color:
            rgba(255,255,255,.96);

          text-decoration: none;

          font-size: 13px;

          font-weight: 600;

          white-space: nowrap;

          text-shadow:
            0 1px 6px
            rgba(0,0,0,.75);

          cursor: pointer;

          font-family: inherit;

          transition:
            color .2s ease;
        }

        .hw-nav-link:hover {
          color: #d8aa42;
        }

        .hw-nav-dropdown-button {
          outline: none;
        }


        /* =====================================================
           SCROLL MENU
        ===================================================== */

        .hw-header-scrolled .hw-scroll-menu-hide {
          display: none !important;
        }

        .hw-header-scrolled .hw-scroll-menu-item {
          display: flex !important;
        }

        .hw-header-scrolled .hw-scroll-project-status {
          order: 1;
        }

        .hw-header-scrolled .hw-scroll-cities {
          order: 2;
        }

        .hw-header-scrolled .hw-scroll-resale {
          order: 3;
        }


        /* =====================================================
           SCROLL NAV COLORS
        ===================================================== */

        .hw-header-scrolled .hw-nav-link {
          color: #fff;

          text-shadow: none;
        }

        .hw-header-scrolled .hw-nav-link:hover {
          color: #d8aa42;
        }


        /* =====================================================
           HEADER ACTIONS
        ===================================================== */

        .hw-header-actions {
          width: 10px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 12px;
        }

        .hw-user-button {
          width: 34px;

          height: 34px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #fff;

          border:
            1px solid
            rgba(255,255,255,.60);

          border-radius: 50%;

          background:
            rgba(0,0,0,.20);

          text-decoration: none;

          transition: .2s ease;

          flex-shrink: 0;
        }

        .hw-user-button:hover {
          color: #d8aa42;

          border-color: #d8aa42;
        }

        .hw-header-scrolled .hw-user-button {
          color: #fff;

          border-color:
            rgba(255,255,255,.55);

          background:
            rgba(255,255,255,.08);
        }


        /* =====================================================
           MENU BUTTON
        ===================================================== */

        .hw-menu-button {
          width: 34px;

          height: 34px;

          padding: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #fff;

          border: none;

          background: transparent;

          cursor: pointer;

          transition: .2s ease;

          flex-shrink: 0;

          /* Hamburger is mobile-only */
          display: none;
        }

        .hw-menu-button:hover {
          color: #d8aa42;
        }

        .hw-header-scrolled .hw-menu-button {
          color: #fff;
        }


        /* =====================================================
           DROPDOWN
        ===================================================== */

        .hw-dropdown {
          position: absolute;

          top:
            calc(100% + 1px);

          left: 50%;

          transform:
            translateX(-50%);

          background:
            rgba(12,12,11,.98);

          border:
            1px solid
            rgba(214,170,66,.30);

          border-radius: 9px;

          box-shadow:
            0 15px 40px
            rgba(0,0,0,.45);

          backdrop-filter:
            blur(14px);

          z-index: 100000;

          animation:
            hwDropdown .18s ease;
        }

        @keyframes hwDropdown {

          from {
            opacity: 0;

            transform:
              translateX(-50%)
              translateY(-7px);
          }

          to {
            opacity: 1;

            transform:
              translateX(-50%)
              translateY(0);
          }

        }


        /* =====================================================
           SIMPLE DROPDOWN
        ===================================================== */

        .hw-simple-dropdown {
          min-width: 230px;

          padding: 10px;
        }

        .hw-dropdown-link {
          display: block;

          padding:
            11px 14px;

          color:
            rgba(255,255,255,.88);

          text-decoration: none;

          font-size: 12px;

          font-weight: 500;

          white-space: nowrap;

          border-radius: 6px;

          transition: .2s ease;
        }

        .hw-dropdown-link:hover {
          color: #d8aa42;

          background:
            rgba(214,170,66,.08);
        }


        /* =====================================================
           MEGA DROPDOWN
        ===================================================== */

        .hw-mega-dropdown {
          width: 900px;

          max-width:
            calc(100vw - 30px);

          padding: 24px;

          box-sizing: border-box;
        }


        /* =====================================================
           CITIES DROPDOWN
           KEEP INSIDE VIEWPORT
        ===================================================== */

        .hw-nav-item.hw-scroll-cities
          .hw-mega-dropdown {

          left: auto !important;

          right: 0 !important;

          transform: none !important;

          width:
            min(
              900px,
              calc(100vw - 30px)
            ) !important;

          max-width:
            calc(100vw - 30px) !important;

          box-sizing: border-box;
        }


        /* Cities animation */

        @keyframes hwCitiesDropdown {

          from {
            opacity: 0;

            transform:
              translateY(-7px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }

        .hw-nav-item.hw-scroll-cities
          .hw-mega-dropdown {

          animation:
            hwCitiesDropdown .18s ease;
        }


        /* =====================================================
           MEGA GRID
        ===================================================== */

        .hw-mega-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap:
            24px 32px;

          min-width: 0;
        }

        .hw-menu-group {
          min-width: 0;
        }

        .hw-group-title {
          margin-bottom: 9px;

          color: #d8aa42;

          font-size: 13px;

          font-weight: 800;

          line-height: 1.4;
        }

        .hw-direct-link {
          display: block;

          text-decoration: none;
        }

        .hw-dropdown-child {
          display: block;

          padding:
            5px 0;

          color:
            rgba(255,255,255,.76);

          font-size: 11px;

          font-weight: 500;

          line-height: 1.5;

          text-decoration: none;

          transition:
            color .2s ease;
        }

        .hw-dropdown-child:hover {
          color: #fff;
        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .hw-mobile-menu {
          display: none;

          background:
            rgba(6,6,5,.98);

          backdrop-filter:
            blur(15px);

          border-top:
            1px solid
            rgba(255,255,255,.10);

          max-height:
            calc(100vh - 68px);

          overflow-y: auto;

          padding:
            10px 20px 24px;

          box-sizing: border-box;
        }

        .hw-mobile-item {
          border-bottom:
            1px solid
            rgba(255,255,255,.08);
        }

        .hw-mobile-main {
          width: 100%;

          min-height: 52px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            0 5px;

          color: #fff;

          background: transparent;

          border: none;

          text-decoration: none;

          font-family: inherit;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          text-align: left;
        }

        .hw-mobile-main:hover {
          color: #d8aa42;
        }

        .hw-mobile-submenu {
          padding:
            0 0 12px 12px;
        }

        .hw-mobile-group {
          display: block;

          padding:
            9px 5px;

          color: #d8aa42;

          font-size: 12px;

          font-weight: 700;

          text-decoration: none;
        }

        .hw-mobile-child {
          display: block;

          padding:
            7px 5px 7px 15px;

          color:
            rgba(255,255,255,.68);

          font-size: 11px;

          text-decoration: none;
        }

        .hw-mobile-child:hover {
          color: #fff;
        }


        /* =====================================================
           TABLET / SMALL DESKTOP
           769px - 1200px
        ===================================================== */

        @media (max-width: 1200px) and (min-width: 769px) {

          .hw-header-inner {
            padding:
              0 20px !important;

            gap:
              12px !important;
          }

          .hw-logo {
            width:
              145px !important;
          }

          .hw-logo-image {
            width:
              135px !important;

            max-height:
              58px !important;
          }

          .hw-header-scrolled
            .hw-scroll-search {

            flex:
              0 1 250px !important;

            min-width:
              190px !important;
          }

          .hw-nav {
            gap:
              10px !important;

            padding-right:
              5px !important;
          }

          .hw-nav-link {
            font-size:
              10px !important;

            gap:
              3px !important;
          }

          .hw-header-actions {
            width:
              70px !important;

            gap:
              7px !important;
          }

          /* =========================================
             CITIES DROPDOWN
          ========================================= */

          .hw-nav-item.hw-scroll-cities
            .hw-mega-dropdown {

            left:
              auto !important;

            right:
              0 !important;

            width:
              min(
                700px,
                calc(100vw - 24px)
              ) !important;

            max-width:
              calc(100vw - 24px) !important;

            padding:
              18px !important;
          }

          .hw-mega-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              ) !important;

            gap:
              18px 20px !important;
          }

          .hw-group-title {
            font-size:
              12px !important;
          }

          .hw-dropdown-child {
            font-size:
              10px !important;
          }

        }


        /* =====================================================
           VERY SMALL DESKTOP
           769px - 900px
        ===================================================== */

        @media (max-width: 900px) and (min-width: 769px) {

          .hw-header-inner {
            padding:
              0 14px !important;

            gap:
              8px !important;
          }

          .hw-logo {
            width:
              125px !important;
          }

          .hw-logo-image {
            width:
              120px !important;
          }

          .hw-header-scrolled
            .hw-scroll-search {

            flex:
              0 1 210px !important;

            min-width:
              165px !important;
          }

          .hw-nav {
            gap:
              6px !important;

            padding-right:
              3px !important;
          }

          .hw-nav-link {
            font-size:
              9px !important;

            padding:
              0 2px !important;

            gap:
              2px !important;
          }

          .hw-nav-link svg {
            width:
              8px !important;

            height:
              8px !important;
          }

          .hw-header-actions {
            width:
              62px !important;

            gap:
              5px !important;
          }

          .hw-user-button {
            width:
              30px !important;

            height:
              30px !important;
          }

          .hw-menu-button {
            width:
              30px !important;

            height:
              30px !important;
          }

          /* =========================================
             CITIES
          ========================================= */

          .hw-nav-item.hw-scroll-cities
            .hw-mega-dropdown {

            right:
              0 !important;

            left:
              auto !important;

            width:
              calc(100vw - 20px) !important;

            max-width:
              calc(100vw - 20px) !important;

            padding:
              16px !important;
          }

          .hw-mega-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              ) !important;

            gap:
              16px !important;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .hw-header {
            background: #000 !important;
          }

          /* Inner pages remain black before scroll */
          .hw-header-inner-page {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            background: #000 !important;
            box-shadow: 0 5px 25px rgba(0,0,0,.35);
            border-bottom: 1px solid rgba(255,255,255,.10);
          }

          .hw-header-scrolled {

            position:
              fixed !important;

            top:
              0 !important;

            left:
              0 !important;

            right:
              0 !important;

            width:
              100% !important;

            background:
              #000 !important;

            box-shadow:
              0 5px 25px
              rgba(0,0,0,.35);

            border-bottom:
              1px solid
              rgba(255,255,255,.10);
          }

          .hw-header-inner {

            height:
              68px;

            padding:
              0 18px;

            gap:
              10px;
          }

          .hw-logo {
            width:
              auto;

            min-width:
              0;
          }

          .hw-logo-image {

            width:
              145px;

            max-height:
              52px;
          }

          .hw-nav {
            display: none !important;
          }

          /* Mobile search is hidden before scroll and becomes sticky with the fixed header */
          .hw-scroll-search {
            display: none !important;
            flex: 1 1 auto !important;
            min-width: 0 !important;
            margin: 0 !important;
            gap: 0 !important;
          }

          .hw-header-scrolled .hw-scroll-search {
            display: flex !important;
          }

          .hw-header-scrolled .hw-location-select {
            display: none !important;
          }

          .hw-header-scrolled .hw-search-box {
            width: 100%;
            height: 40px;
            border-radius: 8px;
            display: flex !important;
            flex: 1 1 auto !important;
            background: #fff !important;
            border: 1px solid #e3e3e3 !important;
            box-shadow: none !important;
            margin: 0 !important;
            overflow: hidden;
          }

          .hw-header-scrolled .hw-search-box button {
            width: 48px;
            height: 40px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            background: #a77c1d !important;
            color: #fff !important;
          }

          .hw-header-scrolled .hw-search-box button svg {
            width: 25px !important;
            height: 25px !important;
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
          }

          .hw-header-scrolled .hw-header-inner {
            gap: 10px;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .hw-header-scrolled .hw-scroll-search {
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .hw-header-scrolled .hw-search-box input {
            background: #fff !important;
            color: #222 !important;
            font-size: 13px;
            padding: 0 13px;
          }

          .hw-header-scrolled .hw-search-box input::placeholder {
            color: #9aa0a6 !important;
          }

          /* On mobile scroll: only search field + search icon remain */
          .hw-header-scrolled .hw-logo {
            display: none !important;
          }

          .hw-header-scrolled .hw-header-actions {
            display: none !important;
          }

          .hw-header-actions {

            width:
              auto;

            gap:
              10px;
          }

          .hw-user-button {
            width: 34px;
            height: 34px;
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .hw-header-scrolled .hw-user-button {
            display: none !important;
          }

          .hw-menu-button {

            width:
              36px;

            height:
              36px;

            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .hw-mobile-menu {
            display:
              block;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .hw-header-inner {

            height:
              64px;

            padding:
              0 14px;

            background:
              transparent;
          }

          .hw-logo-image {

            width:
              135px;

            max-height:
              48px;
          }

          .hw-header-actions {
            gap: 5px;
          }

          .hw-mobile-search-button,
          .hw-menu-button {
            width: 32px;
            height: 32px;
          }

          .hw-mobile-search-button svg,
          .hw-menu-button svg {
            width: 20px;
            height: 20px;
          }

          .hw-mobile-menu {

            padding-left:
              15px;

            padding-right:
              15px;
          }

          .hw-mobile-main {

            font-size:
              13px;
          }

          .hw-mobile-group {

            font-size:
              11px;
          }

          .hw-mobile-child {

            font-size:
              10px;
          }

        }


        /* =====================================================
           EXTRA SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .hw-header-inner {
            padding:
              0 10px;
          }

          .hw-logo-image {
            width:
              125px;
          }

          .hw-user-button {
            width:
              32px;

            height:
              32px;
          }

          .hw-menu-button,
          .hw-mobile-search-button {
            width: 31px;
            height: 31px;
          }

        }


        /* =====================================================
           FINAL MOBILE SCROLL SEARCH OVERRIDE
        ===================================================== */

        @media (max-width: 768px) {

          .hw-header.hw-header-scrolled {
            background: #fff !important;
          }

          .hw-header.hw-header-scrolled .hw-header-inner {
            background: #fff !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
            gap: 10px !important;
          }

          .hw-header.hw-header-scrolled .hw-scroll-search {
            display: flex !important;
            width: 100% !important;
            flex: 1 1 100% !important;
            min-width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box {
            width: 100% !important;
            height: 44px !important;
            min-height: 44px !important;
            margin: 0 !important;
            background: #fff !important;
            border: 1px solid #d9d9d9 !important;
            border-radius: 8px !important;
            box-shadow: none !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box input {
            height: 44px !important;
            background: #fff !important;
            font-size: 13px !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button {
            width: 52px !important;
            height: 44px !important;
            background: #a77c1d !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button svg {
            width: 28px !important;
            height: 28px !important;
            min-width: 28px !important;
            min-height: 28px !important;
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button svg circle,
          .hw-header.hw-header-scrolled .hw-search-box button svg path {
            stroke-width: 2 !important;
          }

          .hw-header:not(.hw-header-scrolled) .hw-user-button svg {
            width: 23px !important;
            height: 23px !important;
          }

          .hw-header:not(.hw-header-scrolled) .hw-menu-button svg {
            width: 24px !important;
            height: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .hw-header.hw-header-scrolled .hw-header-inner {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box {
            height: 44px !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button {
            width: 52px !important;
            height: 44px !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button svg {
            width: 28px !important;
            height: 28px !important;
          }
        }

      `})]})}function E1({banners:e=[]}){const[t,n]=E.useState(0),i=e.length?e:[{image:"../images/bn2.png"},{image:"../images/bn2.png"},{image:"../images/bn1.png"}];E.useEffect(()=>{if(i.length<=1)return;const s=setInterval(()=>{n(l=>(l+1)%i.length)},5e3);return()=>clearInterval(s)},[i.length]);const o=()=>{n(s=>(s+1)%i.length)},a=()=>{n(s=>(s-1+i.length)%i.length)};return r.jsxs("section",{className:"hw-hero",children:[r.jsx("div",{className:"hw-slides",children:i.map((s,l)=>r.jsx("div",{className:`hw-slide ${l===t?"hw-slide-active":""}`,children:r.jsx("img",{src:s.image,alt:"Premium Property"})},l))}),i.length>1&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:"hw-arrow hw-arrow-left",onClick:a,"aria-label":"Previous slide",children:"‹"}),r.jsx("button",{type:"button",className:"hw-arrow hw-arrow-right",onClick:o,"aria-label":"Next slide",children:"›"})]}),r.jsx("style",{children:`

        @import url(
          'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap'
        );


        /* =========================================================
           GLOBAL
        ========================================================= */

        * {
          box-sizing: border-box;
        }


        /* =========================================================
           HERO
        ========================================================= */

        .hw-hero {
          position: relative;
          width: 100%;
          height: 430px;
          overflow: visible;
          background: #080808;
          color: #fff;
          font-family:
            "Manrope",
            Arial,
            sans-serif;
        }


        /* =========================================================
           SLIDER
        ========================================================= */

        .hw-slides {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }


        .hw-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(1.04);

          transition:
            opacity 1s ease,
            transform 5s ease;
        }


        .hw-slide-active {
          opacity: 1;
          transform: scale(1);
        }


        .hw-slide img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }


        /* =========================================================
           IMAGE OVERLAY
        ========================================================= */

        .hw-image-overlay {
          display: none;
        }


        .hw-bottom-overlay {
          display: none;
        }


        /* =========================================================
           HERO CONTENT
        ========================================================= */

        .hw-hero-content {
          display: none;
        }


        .hw-hero-left {
          width: 100%;
          max-width: 700px;
        }


        /* =========================================================
           EYEBROW
        ========================================================= */

        .hw-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;

          color:
            rgba(255,255,255,.75);

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.6px;
        }


        .hw-eyebrow b {
          color: #d9ad42;
        }


        /* =========================================================
           TITLE
        ========================================================= */

        .hw-title {
          margin: 0;
          color: #fff;

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: 64px;
          line-height: .98;
          font-weight: 600;
          letter-spacing: -1.8px;

          text-shadow:
            0 5px 25px
            rgba(0,0,0,.60);
        }


        .hw-title em {
          color: #d9ad42;
          font-style: italic;
          font-weight: 500;
        }


        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .hw-description {
          margin: 13px 0 0;

          color:
            rgba(255,255,255,.84);

          font-size: 14px;
          line-height: 1.5;
        }


        /* =========================================================
           BENEFITS
        ========================================================= */

        .hw-benefits {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 15px;
        }


        .hw-benefit {
          display: flex;
          align-items: center;
          gap: 6px;

          color:
            rgba(255,255,255,.92);

          font-size: 11px;
          font-weight: 500;
        }


        .hw-benefit-icon {
          color: #d9ad42;
          font-size: 16px;
        }


        /* =========================================================
           SIDE CONTENT
        ========================================================= */

        .hw-side-content {
          width: 90px;
          margin-right: 0;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          color:
            rgba(255,255,255,.72);

          font-size: 8px;
          font-weight: 500;
          line-height: 1.55;
          letter-spacing: 1px;
        }


        .hw-side-a {
          color: #d9ad42;

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: 14px;
        }


        .hw-side-line {
          width: 28px;
          height: 1px;
          margin-top: 6px;
          background: #d9ad42;
        }


        /* =========================================================
           FEATURES
        ========================================================= */

        .hw-features {
          display: none;
        }


        .hw-feature {
          min-width: 0;

          display: flex;
          align-items: center;

          gap: 9px;
          padding: 0 14px;
        }


        .hw-feature-icon {
          width: 36px;
          height: 36px;
          min-width: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #d9ad42;

          border:
            1px solid
            rgba(217,173,66,.80);

          border-radius: 50%;

          background:
            rgba(0,0,0,.20);
        }


        .hw-feature-info {
          min-width: 0;
        }


        .hw-feature-info h4 {
          margin: 0 0 3px;
          color: #fff;

          font-size: 12px;
          font-weight: 700;
          line-height: 1.2;
          white-space: nowrap;
        }


        .hw-feature-info p {
          margin: 0;

          color:
            rgba(255,255,255,.56);

          font-size: 10px;
          line-height: 1.35;
          white-space: nowrap;
        }


        .hw-feature-divider {
          width: 1px;
          height: 34px;

          background:
            rgba(255,255,255,.18);
        }


        /* =========================================================
           ARROWS
        ========================================================= */

        .hw-arrow {
          position: absolute;
          z-index: 20;

          top: 50%;

          width: 38px;
          height: 38px;

          padding: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          transform:
            translateY(-50%);

          border:
            1px solid
            rgba(255,255,255,.35);

          border-radius: 50%;

          background:
            rgba(0,0,0,.28);

          color: #fff;

          font-size: 30px;

          cursor: pointer;

          transition: .25s ease;
        }


        .hw-arrow:hover {
          color: #111;
          background: #d9ad42;
          border-color: #d9ad42;
        }


        .hw-arrow-left {
          left: 13px;
        }


        .hw-arrow-right {
          right: 13px;
        }


        /* =========================================================
           DOTS
        ========================================================= */

        .hw-dots {
          position: absolute;
          z-index: 20;

          left: 50%;
          bottom: 80px;

          transform:
            translateX(-50%);

          display: flex;
          align-items: center;

          gap: 5px;
        }


        .hw-dot {
          width: 6px;
          height: 6px;

          padding: 0;

          border: none;
          border-radius: 20px;

          background:
            rgba(255,255,255,.55);

          cursor: pointer;
        }


        .hw-dot-active {
          width: 21px;
          background: #d9ad42;
        }


        /* =========================================================
           LARGE DESKTOP
        ========================================================= */

        @media (min-width: 1400px) {

          .hw-hero {
            height: 570px;
          }

          .hw-title {
            font-size: 64px;
          }

          .hw-description {
            font-size: 13px;
          }

          .hw-feature-info h4 {
            font-size: 10px;
          }

          .hw-feature-info p {
            font-size: 7px;
          }
        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1100px) {

          .hw-hero-content {
            width: calc(100% - 80px);
          }

          .hw-features {
            width: calc(100% - 80px);
          }

          .hw-title {
            font-size: 48px;
          }

          .hw-feature {
            padding: 0 7px;
          }

          .hw-feature-icon {
            width: 31px;
            height: 31px;
            min-width: 31px;
          }

          .hw-feature-info h4 {
            font-size: 8px;
          }

          .hw-feature-info p {
            font-size: 5.5px;
          }
        }


        /* =========================================================
           MOBILE
           IMAGE ONLY
        ========================================================= */

        @media (max-width: 768px) {

          .hw-hero-content {
            width: 100%;
            margin: 0;
          }


          .hw-features {
            width: 100%;
            left: 0;
            transform: none;
          }


          /* =====================================================
             MOBILE HERO
             LEFT + RIGHT 10PX GAP
             ===================================================== */

          .hw-home-hero > .hw-hero,
          .hw-hero {
            position: relative !important;

            width: calc(100% - 20px) !important;
            max-width: calc(100% - 20px) !important;

            height: 205px !important;
            min-height: 205px !important;

            margin-top: 0 !important;
            margin-right: 10px !important;
            margin-bottom: 0 !important;
            margin-left: 10px !important;

            padding: 0 !important;

            overflow: hidden !important;

            border-radius: 12px !important;

            background: #111;
          }


          /* =====================================================
             SLIDER
          ===================================================== */

          .hw-home-hero > .hw-hero .hw-slides,
          .hw-hero .hw-slides {

            position: absolute !important;

            top: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            left: 0 !important;

            width: 100% !important;
            height: 205px !important;

            overflow: hidden !important;

            border-radius: 12px !important;
          }


          /* =====================================================
             SLIDE
          ===================================================== */

          .hw-home-hero > .hw-hero .hw-slide,
          .hw-hero .hw-slide {

            position: absolute !important;

            top: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            left: 0 !important;

            width: 100% !important;
            height: 205px !important;

            overflow: hidden !important;

            border-radius: 12px !important;

            opacity: 0;

            transform: scale(1.02);

            transition:
              opacity .8s ease,
              transform 5s ease;
          }


          .hw-home-hero > .hw-hero .hw-slide-active,
          .hw-hero .hw-slide-active {
            opacity: 1;
            transform: scale(1);
          }


          /* =====================================================
             IMAGE
          ===================================================== */

          .hw-home-hero > .hw-hero .hw-slide img,
          .hw-hero .hw-slide img {

            width: 100% !important;
            height: 205px !important;

            min-width: 100% !important;
            max-width: 100% !important;

            display: block !important;

            object-fit: cover !important;
            object-position: center !important;

            border-radius: 12px !important;
          }


          /* =====================================================
             IMAGE OVERLAY
          ===================================================== */

          .hw-home-hero > .hw-hero .hw-image-overlay,
          .hw-hero .hw-image-overlay {

            position: absolute;

            inset: 0;

            background:
              linear-gradient(
                180deg,
                rgba(0,0,0,.02),
                rgba(0,0,0,.12)
              ) !important;

            border-radius: 12px !important;
          }


          /* =====================================================
             HIDE DESKTOP CONTENT
          ===================================================== */

          .hw-hero-content {
            display: none !important;
          }


          /* =====================================================
             HIDE FEATURES
          ===================================================== */

          .hw-features {
            display: none !important;
          }


          /* =====================================================
             HIDE ARROWS
          ===================================================== */

          .hw-arrow {
            display: none !important;
          }


          /* =====================================================
             HIDE DOTS
          ===================================================== */

          .hw-dots {
            display: none !important;
          }
        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {

          .hw-home-hero > .hw-hero,
          .hw-hero {

            width: calc(100% - 20px) !important;
            max-width: calc(100% - 20px) !important;

            height: 200px !important;
            min-height: 200px !important;

            margin-top: 0 !important;
            margin-right: 10px !important;
            margin-bottom: 0 !important;
            margin-left: 10px !important;

            padding: 0 !important;

            border-radius: 12px !important;

            overflow: hidden !important;
          }


          .hw-home-hero > .hw-hero .hw-slides,
          .hw-hero .hw-slides {

            width: 100% !important;
            height: 200px !important;

            border-radius: 12px !important;
            overflow: hidden !important;
          }


          .hw-home-hero > .hw-hero .hw-slide,
          .hw-hero .hw-slide {

            width: 100% !important;
            height: 200px !important;

            border-radius: 12px !important;
            overflow: hidden !important;
          }


          .hw-home-hero > .hw-hero .hw-slide img,
          .hw-hero .hw-slide img {

            width: 100% !important;
            height: 200px !important;

            border-radius: 12px !important;

            object-fit: cover !important;
            object-position: center !important;
          }


          .hw-home-hero > .hw-hero .hw-image-overlay,
          .hw-hero .hw-image-overlay {
            border-radius: 12px !important;
          }
        }


        /* =========================================================
           FINAL FORCE FIX
           This rule specifically overrides any parent stylesheet
        ========================================================= */

        @media (max-width: 768px) {

          .hw-home-hero > .hw-hero {
            width: calc(100% - 20px) !important;
            max-width: calc(100% - 20px) !important;
            margin-top:10px !important;
            margin-left: 20px !important;
            margin-right: 20px !important;

            border-radius: 12px !important;
            overflow: hidden !important;
          }

        }


        @media (max-width: 480px) {

          .hw-home-hero > .hw-hero {
            width: calc(100% - 30px) !important;
            max-width: calc(100% - 30px) !important;

            margin-left: 15px !important;
            margin-right: 15px !important;

            border-radius: 12px !important;
            overflow: hidden !important;
          }

        }

      `})]})}function R1(){const e=un(),[t,n]=E.useState("Apartment"),[i,o]=E.useState(""),[a,s]=E.useState(""),[l,d]=E.useState(""),R=[{name:"Apartment",value:"Apartment",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 21V5.5L12 2l8 3.5V21",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8 21v-5h8v5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("path",{d:"M8 8h2M14 8h2M8 11h2M14 11h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Villa",value:"Villa",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),r.jsx("path",{d:"M8 12h1M15 12h1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Farmhouse",value:"Farmhouse",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),r.jsx("path",{d:"M7 13h2M15 13h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Commercial",value:"Commercial",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 21V4h16v17",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),r.jsx("path",{d:"M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M10 21v-3h4v3",stroke:"currentColor",strokeWidth:"1.6"})]})},{name:"Branded",value:"Branded",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 3l2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3Z",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),r.jsx("path",{d:"M19 16v5M16.5 18.5h5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Luxury",value:"Luxury",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M3 12l9-8 9 8-9 8-9-8Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),r.jsx("path",{d:"M7 12h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Plots / Land",value:"Plots / Land",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 19l5-12 5 3 6-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M4 19h16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("path",{d:"M9 7l-1-3M14 10l2-3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}],p=()=>{const g=new URLSearchParams;t&&g.set("type",t),i&&g.set("propertyType",i),a&&g.set("location",a),l&&g.set("budget",l),e(`/search?${g.toString()}`)},h=g=>{n(g.value),o(g.value)};return r.jsxs("section",{className:"hw-search-section",children:[r.jsxs("div",{className:"hw-search-container",children:[r.jsx("div",{className:"hw-search-tabs",children:R.map(g=>{const j=g.icon;return r.jsxs("button",{type:"button",className:`hw-search-tab ${t===g.value?"active":""}`,onClick:()=>h(g),children:[r.jsx("span",{className:"hw-tab-icon",children:r.jsx(j,{})}),r.jsx("span",{className:"hw-tab-text",children:g.name})]},g.value)})}),r.jsxs("div",{className:"hw-search-fields",children:[r.jsxs("div",{className:"hw-search-field hw-location-field",children:[r.jsx("span",{className:"hw-search-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4-4"})]})}),r.jsx("input",{type:"text",value:a,onChange:g=>s(g.target.value),placeholder:"Search city, locality or project..."})]}),r.jsxs("div",{className:"hw-search-field hw-budget-field",children:[r.jsx("span",{className:"hw-search-icon hw-rupee",children:"₹"}),r.jsxs("select",{value:l,onChange:g=>d(g.target.value),children:[r.jsx("option",{value:"",children:"Budget"}),r.jsx("option",{value:"Under 1 Cr",children:"Under ₹1 Cr"}),r.jsx("option",{value:"1 Cr - 4 Cr",children:"₹1 Cr - ₹4 Cr"}),r.jsx("option",{value:"4 Cr - 8 Cr",children:"₹4 Cr - ₹8 Cr"}),r.jsx("option",{value:"8 Cr - 12 Cr",children:"₹8 Cr - ₹12 Cr"}),r.jsx("option",{value:"12 Cr - 16 Cr",children:"₹12 Cr - ₹16 Cr"}),r.jsx("option",{value:"16 Cr Onwards",children:"₹16 Cr Onwards"})]}),r.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),r.jsxs("div",{className:"hw-search-field hw-type-field",children:[r.jsx("span",{className:"hw-search-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"1"}),r.jsx("path",{d:"M8 8h8"}),r.jsx("path",{d:"M8 12h8"}),r.jsx("path",{d:"M8 16h5"})]})}),r.jsxs("select",{value:i,onChange:g=>o(g.target.value),children:[r.jsx("option",{value:"",children:"Property Type"}),r.jsx("option",{value:"Apartment",children:"Apartment"}),r.jsx("option",{value:"Villa",children:"Villa"}),r.jsx("option",{value:"Farmhouse",children:"Farmhouse"}),r.jsx("option",{value:"Builder Floor",children:"Builder Floor"}),r.jsx("option",{value:"Commercial",children:"Commercial"}),r.jsx("option",{value:"Plots / Land",children:"Plots / Land"})]}),r.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),r.jsxs("button",{type:"button",className:"hw-search-button",onClick:p,children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4-4"})]}),r.jsx("span",{children:"Search Properties"})]})]})]}),r.jsx("style",{children:`

        @import url(
          'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
        );

        /* =====================================================
           BASE
        ===================================================== */

        .hw-search-section {
          position: relative;
          z-index: 60;
          width: 100%;
          font-family: "Manrope", Arial, sans-serif;
          box-sizing: border-box;
        }

        .hw-search-section *,
        .hw-search-section *::before,
        .hw-search-section *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           DESKTOP CONTAINER
        ===================================================== */

        .hw-search-container {
          width: calc(100% - 80px);
          max-width: 850px;
          height: 160px;

          margin: 0 auto;
          padding-top: 20px;

          overflow: hidden;

          border: 1px solid rgba(216,170,66,.42);
          border-radius: 12px;

          background: #fff;

          box-shadow:
            0 10px 28px rgba(17,24,39,.07);
        }


        /* =====================================================
           DESKTOP TABS
        ===================================================== */

        .hw-search-tabs {
          width: 100%;

          display: flex;
          align-items: center;

          gap: 3px;

          min-height: 55px;

          padding: 7px 10px;

          overflow-x: auto;
          overflow-y: hidden;

          scrollbar-width: none;

          border-bottom: 1px solid #eee8d8;
        }

        .hw-search-tabs::-webkit-scrollbar {
          display: none;
        }


        .hw-search-tab {
          height: 39px;

          flex: 0 0 auto;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          padding: 0 17px;

          border: 1px solid #f6d36b;
          border-radius: 7px;

          background: transparent;

          color: rgba(17,17,17,.72);

          font-family: inherit;
          font-size: 11px;
          font-weight: 600;

          line-height: 1;

          white-space: nowrap;

          cursor: pointer;

          transition: all .2s ease;
        }

        .hw-search-tab:hover {
          color: #050505;
          background: #faf9f5;
        }

        .hw-search-tab.active {
          color: #fff;
          background: #b9943a;
          font-weight: 800;
        }


        /* =====================================================
           PREMIUM ICONS
        ===================================================== */

        .hw-tab-icon {
          width: 20px;
          height: 20px;

          min-width: 20px;
          min-height: 20px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          color: #d9ad42;

          line-height: 0;
        }

        .hw-tab-icon svg {
          width: 18px;
          height: 18px;

          display: block;

          stroke: currentColor;
        }

        .hw-search-tab.active .hw-tab-icon {
          color: #fff;
        }

        .hw-tab-text {
          display: block;
          white-space: nowrap;
          line-height: 1.05;
        }


        /* =====================================================
           SEARCH FIELDS DESKTOP
        ===================================================== */

        .hw-search-fields {
          display: grid;

          grid-template-columns:
            1.45fr
            .90fr
            .95fr
            1fr;

          gap: 10px;

          padding: 10px;
        }

        .hw-search-field {
          position: relative;

          height: 46px;

          display: flex;
          align-items: center;

          gap: 9px;

          padding: 0 13px;

          border: 1px solid rgba(216,170,66,.70);
          border-radius: 7px;

          background: #fff;

          color: rgba(12,12,12,.82);
        }

        .hw-search-field:focus-within {
          border-color: rgba(185,148,58,.95);
        }

        .hw-search-icon {
          width: 19px;
          height: 19px;

          min-width: 19px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          color: #d9ad42;

          font-size: 16px;
          font-weight: 700;
        }

        .hw-search-icon svg {
          width: 17px;
          height: 17px;

          display: block;
        }

        .hw-search-field input,
        .hw-search-field select {
          width: 100%;
          height: 100%;

          min-width: 0;

          border: none;
          outline: none;

          background: transparent;

          color: rgba(8,8,8,.88);

          font-family: inherit;

          font-size: 11px;
          font-weight: 500;
        }

        .hw-search-field input::placeholder {
          color: rgba(12,12,12,.58);
        }

        .hw-search-field select {
          appearance: none;
          -webkit-appearance: none;

          padding-right: 22px;

          cursor: pointer;
        }

        .hw-search-field select option {
          background: #111;
          color: #fff;
        }

        .hw-select-arrow {
          position: absolute;

          right: 12px;
          top: 50%;

          transform: translateY(-50%);

          color: #d9ad42;

          font-size: 13px;

          pointer-events: none;
        }


        /* =====================================================
           DESKTOP SEARCH BUTTON
        ===================================================== */

        .hw-search-button {
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 0 22px;

          border: none;
          border-radius: 7px;

          background: #b9943a;

          color: #fff;

          font-family: inherit;

          font-size: 11px;
          font-weight: 800;

          white-space: nowrap;

          cursor: pointer;

          transition: all .2s ease;
        }

        .hw-search-button:hover {
          transform: translateY(-1px);

          box-shadow:
            0 6px 20px rgba(185,148,58,.22);
        }

        .hw-search-button svg {
          width: 17px;
          height: 17px;

          flex-shrink: 0;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) and (min-width: 901px) {

          .hw-search-container {
            width: calc(100% - 48px);
            max-width: 1100px;
          }

        }


        @media (max-width: 900px) and (min-width: 769px) {

          .hw-search-fields {
            grid-template-columns: 1fr 1fr;
          }

          .hw-search-button {
            grid-column: span 2;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .hw-search-section {
            width: 100%;

            padding:
              5px
              16px
              8px;

            margin: 0;

            background: #fff;
          }


          /* CONTAINER */

          .hw-search-container {
            width: 100%;
            max-width: none;

            height: auto;

            margin: 0;
            padding: 0;

            overflow: visible;

            border: none !important;
            border-radius: 0 !important;

            background: #fff !important;

            box-shadow: none !important;
          }


          /* ===================================================
             MOBILE TABS
          =================================================== */

          .hw-search-tabs {
            width: 100%;

            height: 54px;
            min-height: 54px;

            display: flex;
            align-items: center;

            gap: 1px;

            padding: 0;
            margin: 0;

            overflow-x: auto;
            overflow-y: hidden;

            border: none !important;

            scrollbar-width: none;

            -webkit-overflow-scrolling: touch;
          }

          .hw-search-tabs::-webkit-scrollbar {
            display: none;
          }


          /* ===================================================
             MOBILE TAB
          =================================================== */

          .hw-search-tab {
            flex: 0 0 52px;

            width: 52px;
            min-width: 52px;

            height: 50px;
            min-height: 50px;

            padding: 2px 1px;

            margin: 0;

            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            gap: 4px;

            border: none !important;
            border-radius: 7px;

            background: transparent;

            color: #666;

            font-family:
              "Manrope",
              Arial,
              sans-serif;

            font-size: 12px;

            font-weight: 600;

            line-height: 1;

            white-space: nowrap;
          }


          .hw-search-tab.active {
            color: #d4af37 !important;

            background: transparent !important;

            font-weight: 800;
          }


          /* ===================================================
             BIG MOBILE ICON
          =================================================== */

          .hw-tab-icon {
            width: 26px !important;
            height: 26px !important;

            min-width: 26px !important;
            min-height: 26px !important;

            display: flex !important;

            align-items: center !important;
            justify-content: center !important;

            flex-shrink: 0 !important;

            color: #888 !important;
          }


          .hw-tab-icon svg {
            width: 22px !important;
            height: 22px !important;

            display: block !important;
          }


          .hw-search-tab.active .hw-tab-icon {
            color: #d4af37 !important;
          }


          /* ===================================================
             MOBILE TEXT
          =================================================== */

          .hw-tab-text {
            display: block !important;

            width: 100% !important;

            font-size: 12px !important;

            font-weight: 600 !important;

            line-height: 1 !important;

            text-align: center !important;

            white-space: nowrap !important;
          }


          .hw-search-tab.active .hw-tab-text {
            font-weight: 700 !important;
          }


          /* ===================================================
             MOBILE SEARCH ROW
          =================================================== */

          .hw-search-fields {
            width: 100%;

            display: grid !important;

            grid-template-columns:
              minmax(0, 1fr)
              38px !important;

            gap: 6px;

            height: 35px;

            margin:
              5px
              0
              0;

            padding: 0;
          }


          /* LOCATION */

          .hw-location-field {
            width: 100% !important;

            height: 35px !important;
            min-height: 35px !important;

            margin: 0 !important;

            padding:
              0
              9px !important;

            display: flex !important;

            align-items: center !important;

            gap: 7px !important;

            border:
              1px solid
              #dedede !important;

            border-radius: 5px !important;

            background: #fff !important;

            box-shadow: none !important;
          }


          /* HIDE BUDGET */

          .hw-budget-field {
            display: none !important;
          }


          /* HIDE PROPERTY TYPE */

          .hw-type-field {
            display: none !important;
          }


          /* SEARCH ICON */

          .hw-location-field .hw-search-icon {
            width: 15px !important;
            height: 15px !important;

            min-width: 15px !important;

            color: #d4af37 !important;
          }


          .hw-location-field
          .hw-search-icon svg {
            width: 13px !important;
            height: 13px !important;
          }


          /* INPUT */

          .hw-location-field input {
            width: 100% !important;

            height: 100% !important;

            min-width: 0 !important;

            padding: 0 !important;
            margin: 0 !important;

            border: none !important;
            outline: none !important;

            background: transparent !important;

            font-family:
              "Manrope",
              Arial,
              sans-serif !important;

            font-size: 9px !important;

            font-weight: 500 !important;

            color: #333 !important;
          }


          .hw-location-field
          input::placeholder {
            color: #999 !important;
            opacity: 1 !important;
          }


          /* ===================================================
             MOBILE SEARCH BUTTON
          =================================================== */

          .hw-search-button {
            width: 38px !important;

            height: 35px !important;

            min-width: 38px !important;
            min-height: 35px !important;

            padding: 0 !important;
            margin: 0 !important;

            display: flex !important;

            align-items: center !important;
            justify-content: center !important;

            gap: 0 !important;

            border: none !important;

            border-radius: 5px !important;

            background: #b9943a !important;

            color: #fff !important;

            font-size: 0 !important;

            box-shadow: none !important;

            transform: none !important;
          }


          .hw-search-button span {
            display: none !important;
          }


          .hw-search-button svg {
            width: 15px !important;
            height: 15px !important;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .hw-search-section {
            padding:
              5px
              16px
              7px;
          }


          .hw-search-tabs {
            height: 54px;
            min-height: 54px;
          }


          .hw-search-tab {
            flex-basis: 52px;

            width: 52px;
            min-width: 52px;

            height: 50px;

            font-size: 8px;
          }


          .hw-tab-icon {
            width: 26px !important;
            height: 26px !important;

            min-width: 26px !important;
            min-height: 26px !important;
          }


          .hw-tab-icon svg {
            width: 22px !important;
            height: 22px !important;
          }


          .hw-tab-text {
            font-size: 8px !important;
          }


          .hw-search-fields {
            grid-template-columns:
              minmax(0, 1fr)
              38px !important;

            gap: 5px;

            height: 35px;

            padding: 0;
          }


          .hw-location-field {
            height: 35px !important;
          }


          .hw-search-button {
            width: 38px !important;
            height: 35px !important;
          }

        }


        /* =====================================================
           VERY SMALL PHONES
        ===================================================== */

        @media (max-width: 360px) {

          .hw-search-section {
            padding-left: 12px;
            padding-right: 12px;
          }


          .hw-search-tab {
            flex-basis: 49px;

            width: 49px;
            min-width: 49px;
          }


          .hw-tab-icon {
            width: 24px !important;
            height: 24px !important;

            min-width: 24px !important;
            min-height: 24px !important;
          }


          .hw-tab-icon svg {
            width: 20px !important;
            height: 20px !important;
          }


          .hw-tab-text {
            font-size: 7.5px !important;
          }

        }

      `})]})}const C1="/assets/s1-BVwoKduN.webp",N1="/assets/s2-kewm8yNy.webp",z1="/assets/s3-eKCFe4c6.webp";function T1({banners:e=[]}){const t=[{image:C1},{image:N1},{image:z1}],n=e.length?e:t,[i,o]=E.useState(0);return E.useEffect(()=>{if(n.length<=1)return;const a=setInterval(()=>{o(s=>(s+1)%n.length)},5e3);return()=>clearInterval(a)},[n.length]),r.jsxs("section",{className:"hw-image-slider",children:[r.jsx("div",{className:"hw-image-slider-track",children:n.map((a,s)=>r.jsx("div",{className:`hw-image-slide ${s===i?"is-active":""}`,children:r.jsx("img",{src:a.image,alt:"Property Banner"})},s))}),r.jsx("style",{children:`

        .hw-image-slider {
          width: 100%;
          max-width: 850px;
          height: 160px;
          margin: 0 auto;
          padding: 0;
          margin-top:120px;
          position: relative;
          overflow: hidden;
          background: #fff;
          border-radius:10px;
        }

        .hw-image-slider-track {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hw-image-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;

          opacity: 0;
          visibility: hidden;

          transform: scale(1.02);

          transition:
            opacity 0.8s ease,
            transform 5s ease,
            visibility 0.8s ease;
        }

        .hw-image-slide.is-active {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }

        .hw-image-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 1000px) {
          .hw-image-slider {
            max-width: 94%;
            height: 170px;
          }
        }

        @media (max-width: 768px) {
          .hw-image-slider {
            width: 100%;
            max-width: 100%;
            height: 150px;
            display:none;
          }

          .hw-image-slider-track,
          .hw-image-slide,
          .hw-image-slide img {
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .hw-image-slider {
            height: 125px;
            display:none;
          }

          .hw-image-slider-track,
          .hw-image-slide,
          .hw-image-slide img {
            height: 125px;
          }
        }

      `})]})}const P1=[{title:"DLF Privana North",subtitle:"Luxury Apartments",location:"Sector 76, Golf Course Extension Road, Gurugram",bhk:"3, 4 BHK",area:"2,500 - 5,000 Sq.Ft.",price:"₹ 18.50 Cr",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90"},{title:"M3M Crown",subtitle:"Ultra Luxury Residences",location:"Sector 111, Dwarka Expressway, Gurugram",bhk:"3, 4 BHK",area:"3,000 - 5,000 Sq.Ft.",price:"₹ 20.00 Cr",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90"},{title:"Emaar Palm Grove",subtitle:"Premium Villas",location:"Sector 102, Dwarka Expressway, Gurugram",bhk:"4, 5 BHK",area:"5,000+ Sq.Ft.",price:"₹ 25.00 Cr",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90"},{title:"Godrej Green Estate",subtitle:"Premium Plots & Land",location:"Sector 150, Noida",bhk:"Residential Plots",area:"180 - 500 Sq.Yds.",price:"₹ 5.91 Cr",image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90"}];function O1(){const e=E.useRef(null);return E.useEffect(()=>{const t=e.current;if(!t)return;let n=null;const i=()=>{clearInterval(n),n=setInterval(()=>{if(window.innerWidth>600)return;const a=t.querySelectorAll(".hw-recommended-card");if(!a.length)return;const d=(a[0].getBoundingClientRect().width+8)*2,c=t.scrollWidth-t.clientWidth;t.scrollLeft>=c-5?t.scrollTo({left:0,behavior:"smooth"}):t.scrollBy({left:d,behavior:"smooth"})},3500)};i();const o=()=>{i()};return t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("pointerup",o),()=>{clearInterval(n),t.removeEventListener("touchend",o),t.removeEventListener("pointerup",o)}},[]),r.jsxs("section",{className:"hw-recommended-section",children:[r.jsxs("div",{className:"hw-recommended-header",children:[r.jsxs("div",{className:"hw-recommended-brand",children:[r.jsx("span",{className:"hw-recommended-line"}),r.jsx("span",{className:"hw-recommended-label",children:"HOMWISOR"}),r.jsx("span",{className:"hw-recommended-line reverse"})]}),r.jsxs("h2",{children:["Recommended ",r.jsx("span",{children:"Properties"})]}),r.jsx("p",{children:"Discover premium properties handpicked by HomWisor for luxury living and exceptional investment returns"})]}),r.jsx("div",{className:"hw-recommended-grid",ref:e,children:P1.map((t,n)=>r.jsxs("article",{className:"hw-recommended-card",children:[r.jsxs("div",{className:"hw-recommended-image",children:[r.jsx("img",{src:t.image,alt:t.title,loading:"lazy"}),r.jsx("div",{className:"hw-image-gradient"}),r.jsx("span",{className:"hw-founder-badge",children:"FOUNDER CHOICE"})]}),r.jsxs("div",{className:"hw-recommended-content",children:[r.jsx("h3",{children:t.title}),r.jsx("div",{className:"hw-property-subtitle",children:t.subtitle}),r.jsxs("div",{className:"hw-property-location",children:[r.jsx("span",{className:"hw-location-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}),r.jsx("span",{children:t.location})]}),r.jsxs("div",{className:"hw-property-details",children:[r.jsxs("span",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16"}),r.jsx("path",{d:"M3 21h18"}),r.jsx("path",{d:"M7 7h2M7 11h2M7 15h2M15 7h2M15 11h2M15 15h2"})]}),t.bhk]}),r.jsxs("span",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),r.jsx("path",{d:"M8 3v18M16 3v18M3 8h5M16 8h5M3 16h5M16 16h5"})]}),t.area]})]}),r.jsxs("div",{className:"hw-property-bottom",children:[r.jsxs("div",{className:"hw-price-box",children:[r.jsx("div",{className:"hw-property-price",children:t.price}),r.jsx("div",{className:"hw-property-emi",children:"Onwards"})]}),r.jsxs("button",{className:"hw-view-button",type:"button",children:[r.jsx("span",{children:"View Details"}),r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]})]})]},n))}),r.jsx("div",{className:"hw-recommended-footer",children:r.jsxs("button",{className:"hw-view-all",type:"button",children:[r.jsx("span",{children:"View All Recommended Properties"}),r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})}),r.jsx("style",{children:`

        /* =====================================================
           SECTION
        ===================================================== */

        .hw-recommended-section {
          width: 100%;
          max-width: 1320px;

          margin: 0 auto;

          padding: 70px 28px 60px;

          background: #ffffff;

          box-sizing: border-box;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          color: #111827;
        }


        .hw-recommended-section *,
        .hw-recommended-section *::before,
        .hw-recommended-section *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .hw-recommended-header {
          width: 100%;

          text-align: center;

          margin-bottom: 38px;
        }


        .hw-recommended-brand {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-bottom: 11px;
        }


        .hw-recommended-label {
          color: #b9943a;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 2.5px;

          line-height: 1;
        }


        .hw-recommended-line {
          width: 34px;

          height: 1px;

          background: #d4af37;
        }


        .hw-recommended-line.reverse {
          background: #d4af37;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .hw-recommended-header h2 {
          margin: 0;

          color: #111827;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 36px;

          line-height: 1.15;

          font-weight: 800;

          letter-spacing: -1.2px;
        }


        .hw-recommended-header h2 span {
          color: #b9943a;
        }


        .hw-recommended-header p {
          max-width: 650px;

          margin: 12px auto 0;

          color: #737b8c;

          font-size: 13px;

          line-height: 1.65;

          font-weight: 500;
        }


        /* =====================================================
           DESKTOP GRID
        ===================================================== */

        .hw-recommended-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;

          width: 100%;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .hw-recommended-card {
          position: relative;

          min-width: 0;

          overflow: hidden;

          background: #ffffff;

          border:
            1px solid #eee8d8;

          border-radius: 16px;

          box-shadow:
            0 7px 24px
            rgba(17, 24, 39, .055);

          transition:
            transform .28s ease,
            box-shadow .28s ease,
            border-color .28s ease;
        }


        .hw-recommended-card:hover {
          transform: translateY(-5px);

          border-color:
            rgba(185, 148, 58, .55);

          box-shadow:
            0 17px 38px
            rgba(17, 24, 39, .10);
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .hw-recommended-image {
          position: relative;

          width: 100%;

          height: 215px;

          overflow: hidden;

          background: #f5f5f2;
        }


        .hw-recommended-image img {
          display: block;

          width: 100%;

          height: 100%;

          object-fit: cover;

          object-position: center;

          transition:
            transform .45s ease;
        }


        .hw-recommended-card:hover
        .hw-recommended-image img {
          transform: scale(1.045);
        }


        /* =====================================================
           GRADIENT
        ===================================================== */

        .hw-image-gradient {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, .25),
              transparent 50%
            );
        }


        /* =====================================================
           BADGE
        ===================================================== */

        .hw-founder-badge {
          position: absolute;

          z-index: 5;

          top: 12px;

          left: 12px;

          padding:
            6px 11px;

          border-radius: 20px;

          background:
            linear-gradient(
              135deg,
              #d8b13e,
              #b88b20
            );

          color: #ffffff;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .5px;

          box-shadow:
            0 4px 12px
            rgba(0, 0, 0, .20);
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .hw-recommended-content {
          padding:
            17px 16px 16px;
        }


        .hw-recommended-content h3 {
          margin: 0;

          color: #111827;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 18px;

          line-height: 1.3;

          font-weight: 800;

          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }


        .hw-property-subtitle {
          margin-top: 5px;

          color: #b9943a;

          font-size: 12px;

          line-height: 1.45;

          font-weight: 700;
        }


        /* =====================================================
           LOCATION
        ===================================================== */

        .hw-property-location {
          display: flex;

          align-items: flex-start;

          gap: 7px;

          margin-top: 12px;

          min-height: 38px;

          color: #737b8c;

          font-size: 11px;

          line-height: 1.5;

          font-weight: 500;
        }


        .hw-location-icon {
          flex-shrink: 0;

          width: 15px;

          height: 15px;

          color: #b9943a;
        }


        .hw-location-icon svg {
          display: block;

          width: 100%;

          height: 100%;
        }


        /* =====================================================
           DETAILS
        ===================================================== */

        .hw-property-details {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-top: 12px;

          padding-top: 11px;

          border-top:
            1px solid #eee8d8;
        }


        .hw-property-details span {
          display: flex;

          align-items: center;

          gap: 6px;

          color: #737b8c;

          font-size: 11px;

          line-height: 1.35;

          font-weight: 600;

          white-space: nowrap;
        }


        .hw-property-details svg {
          width: 15px;

          height: 15px;

          flex-shrink: 0;

          color: #b9943a;
        }


        /* =====================================================
           PRICE
        ===================================================== */

        .hw-property-bottom {
          display: flex;

          align-items: center;

          gap: 8px;

          margin-top: 15px;
        }


        .hw-price-box {
          min-width: 0;
        }


        .hw-property-price {
          color: #a97914;

          font-size: 19px;

          line-height: 1.15;

          font-weight: 900;

          white-space: nowrap;
        }


        .hw-property-emi {
          margin-top: 3px;

          color: #737b8c;

          font-size: 10px;

          font-weight: 600;
        }


        /* =====================================================
           VIEW DETAILS BUTTON
        ===================================================== */

        .hw-view-button {
          margin-left: auto;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          min-width: 100px;

          padding:
            10px 12px;

          border:
            1px solid #b9943a;

          border-radius: 7px;

          background: #ffffff;

          color: #9a741e;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 10px;

          font-weight: 800;

          cursor: pointer;

          white-space: nowrap;

          transition:
            background .25s ease,
            color .25s ease,
            transform .25s ease;
        }


        .hw-view-button svg {
          width: 14px;

          height: 14px;

          transition:
            transform .25s ease;
        }


        .hw-view-button:hover {
          background: #b9943a;

          color: #ffffff;

          transform: translateY(-1px);
        }


        .hw-view-button:hover svg {
          transform:
            translateX(3px);
        }


        /* =====================================================
           VIEW ALL
        ===================================================== */

        .hw-recommended-footer {
          display: flex;

          justify-content: center;

          margin-top: 38px;
        }


        .hw-view-all {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          padding:
            12px 23px;

          border:
            1px solid #b9943a;

          border-radius: 20px;

          background: #ffffff;

          color: #9a741e;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 11px;

          font-weight: 800;

          cursor: pointer;

          transition:
            all .25s ease;
        }


        .hw-view-all svg {
          width: 15px;

          height: 15px;

          transition:
            transform .25s ease;
        }


        .hw-view-all:hover {
          background: #b9943a;

          color: #ffffff;

          box-shadow:
            0 8px 22px
            rgba(185, 148, 58, .25);
        }


        .hw-view-all:hover svg {
          transform:
            translateX(3px);
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .hw-recommended-section {
            padding:
              55px 20px 45px;
          }


          .hw-recommended-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;
          }


          .hw-recommended-header h2 {
            font-size: 35px;
          }

        }


        /* =====================================================
           MOBILE
           LEFT / RIGHT PADDING
           2 CARDS
           HORIZONTAL SLIDER
           AUTO SLIDE
        ===================================================== */

        @media (max-width: 600px) {

          .hw-recommended-section {
            width: 100%;

            padding:
              42px 10px 38px;

            background: #ffffff;
          }


          /* HEADER */

          .hw-recommended-header {
            padding-left: 0;

            padding-right: 0;

            margin-bottom: 25px;
          }


          .hw-recommended-brand {
            gap: 7px;

            margin-bottom: 10px;
          }


          .hw-recommended-label {
            font-size: 10px;

            letter-spacing: 2px;
          }


          .hw-recommended-line {
            width: 24px;
          }


          .hw-recommended-header h2 {

            font-size: 29px;

            line-height: 1.15;

            font-weight: 800;

            letter-spacing: -.7px;
          }


          .hw-recommended-header h2 span {
            color: #b9943a;
          }


          .hw-recommended-header p {

            max-width: 370px;

            margin:
              9px auto 0;

            padding:
              0 8px;

            color: #737b8c;

            font-size: 13px;

            line-height: 1.6;
          }


          /* =================================================
             MOBILE SLIDER
             LEFT + RIGHT PADDING
          ================================================= */

          .hw-recommended-grid {

            display: flex;

            flex-wrap: nowrap;

            gap: 8px;

            width: 100%;

            overflow-x: auto;

            overflow-y: hidden;

            padding:
              3px 2px 12px;

            margin: 0;

            scroll-snap-type:
              x mandatory;

            scrollbar-width: none;

            -webkit-overflow-scrolling: touch;
          }


          .hw-recommended-grid::-webkit-scrollbar {
            display: none;
          }


          /* =================================================
             2 CARDS VISIBLE
          ================================================= */

          .hw-recommended-card {

            flex:
              0 0 calc(
                (100vw - 36px) / 2
              );

            width:
              calc(
                (100vw - 36px) / 2
              );

            min-width:
              calc(
                (100vw - 36px) / 2
              );

            scroll-snap-align: start;

            border-radius: 13px;

            box-shadow:
              0 6px 20px
              rgba(17, 24, 39, .055);
          }


          /* IMAGE */

          .hw-recommended-image {

            width: 100%;

            height: 145px;
          }


          /* CONTENT */

          .hw-recommended-content {

            padding:
              13px 11px 14px;
          }


          /* TITLE */

          .hw-recommended-content h3 {

            font-size: 15px;

            line-height: 1.3;

            font-weight: 800;

            white-space: nowrap;

            overflow: hidden;

            text-overflow: ellipsis;
          }


          /* SUBTITLE */

          .hw-property-subtitle {

            margin-top: 5px;

            font-size: 11px;

            line-height: 1.35;

            font-weight: 700;

            white-space: nowrap;

            overflow: hidden;

            text-overflow: ellipsis;
          }


          /* LOCATION */

          .hw-property-location {

            gap: 5px;

            margin-top: 9px;

            min-height: 34px;

            font-size: 12px;

            line-height: 1.45;
          }


          .hw-location-icon {

            width: 13px;

            height: 13px;
          }


          /* DETAILS */

          .hw-property-details {

            gap: 8px;

            margin-top: 9px;

            padding-top: 9px;
          }


          .hw-property-details span {

            gap: 4px;

            font-size: 10.5px;

            line-height: 1.35;

            overflow: hidden;

            white-space: nowrap;

            text-overflow: ellipsis;
          }


          .hw-property-details svg {

            width: 12px;

            height: 12px;
          }


          /* PRICE */

          .hw-property-bottom {

            gap: 5px;

            margin-top: 11px;

            align-items: flex-end;
          }


          .hw-property-price {

            font-size: 16px;

            line-height: 1.15;

            font-weight: 900;
          }


          .hw-property-emi {

            margin-top: 2px;

            font-size: 10px;
          }


          /* BUTTON */

          .hw-view-button {

            min-width: auto;

            padding:
              8px 9px;

            gap: 4px;

            border-radius: 6px;

            font-size: 10px;

            white-space: nowrap;
          }


          .hw-view-button svg {

            width: 11px;

            height: 11px;
          }


          /* BADGE */

          .hw-founder-badge {

            top: 8px;

            left: 8px;

            padding:
              5px 7px;

            font-size: 9px;

            letter-spacing: .3px;
          }


          /* FOOTER */

          .hw-recommended-footer {

            margin-top: 22px;
          }


          .hw-view-all {

            padding:
              10px 17px;

            font-size: 12px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .hw-recommended-section {

            padding-left: 8px;

            padding-right: 8px;
          }


          .hw-recommended-header {

            padding-left: 0;

            padding-right: 0;
          }


          .hw-recommended-header h2 {

            font-size: 27px;
          }


          .hw-recommended-grid {

            gap: 7px;

            padding-left: 2px;

            padding-right: 2px;
          }


          .hw-recommended-card {

            flex:
              0 0 calc(
                (100vw - 30px) / 2
              );

            width:
              calc(
                (100vw - 30px) / 2
              );

            min-width:
              calc(
                (100vw - 30px) / 2
              );
          }


          .hw-recommended-image {

            height: 135px;
          }


          .hw-recommended-content {

            padding:
              11px 9px 12px;
          }


          .hw-recommended-content h3 {

            font-size: 14px;
          }


          .hw-property-subtitle {

            font-size: 9px;
          }


          .hw-property-location {

            font-size: 8px;
          }


          .hw-property-details span {

            font-size: 8px;
          }


          .hw-property-price {

            font-size: 15px;
          }


          .hw-view-button {

            padding:
              7px 7px;

            font-size: 10px;
          }

        }

      `})]})}const I1="/assets/s4-CyUc3uZH.webp",L1="/assets/s5-B3dJV6PK.webp",M1="/assets/s6-BTGolWiF.webp";function B1({properties:e=[],locations:t=[],upcoming:n=[],newlaunch:i=[],offers:o=[]}){var N,m,C,B,M,q,$,F,P,Z;const a=[{id:1,title:"M3M Brabus Residences",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",priceRange:"₹20 - 28 Cr",location:"Sector 58, Golf Course Extension Road",bhk:"4 & 5 BHK",area:"4,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:2,title:"DLF Privana North",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",priceRange:"₹18.50 Cr",location:"Sector 76, Golf Course Extension Road",bhk:"3 & 4 BHK",area:"2,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:3,title:"M3M Crown",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",priceRange:"₹28 - 65 Cr",location:"Sector 111, Dwarka Expressway",bhk:"3, 4 & 5 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:4,title:"Emaar Palm Grove",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",priceRange:"₹25.00 Cr",location:"Sector 102, Dwarka Expressway",bhk:"4 & 5 BHK",area:"5,000+ Sq.Ft.",propertyType:"Villa",rera:!0},{id:5,title:"M3M Crown Luxury",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",priceRange:"₹30 - 70 Cr",location:"Sector 111, Gurugram",bhk:"4 & 5 BHK",area:"4,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:6,title:"DLF The Arbour",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",priceRange:"₹17.50 Cr",location:"Sector 63, Gurugram",bhk:"4 BHK",area:"3,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:7,title:"M3M Golf Estate",image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",priceRange:"₹19 - 45 Cr",location:"Sector 65, Gurugram",bhk:"3 & 4 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:8,title:"Emaar Digi Homes",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",priceRange:"₹15.00 Cr",location:"Sector 62, Gurugram",bhk:"3 & 4 BHK",area:"2,800+ Sq.Ft.",propertyType:"Apartment",rera:!0}],s=Array.isArray(e)?e.filter(w=>w.category==="trending"||w.category==="recommended").slice(0,8):[],l=s.length>=4?s:a,d=Array.isArray(e)?e.filter(w=>["₹19","₹28","₹16","₹5.2"].some(I=>String((w==null?void 0:w.priceRange)||"").includes(I))||String((w==null?void 0:w.category)||"").toLowerCase()==="trending"):[],c=[e.find(w=>String((w==null?void 0:w.title)||"").toLowerCase().includes("oberoi three sixty"))||e.find(w=>String((w==null?void 0:w.title)||"").toLowerCase().includes("bptp"))||d[0],e.find(w=>String((w==null?void 0:w.title)||"").toLowerCase().includes("experion one 42"))||d[1],e.find(w=>String((w==null?void 0:w.title)||"").toLowerCase().includes("max estate 59"))||d[2],e.find(w=>String((w==null?void 0:w.title)||"").toLowerCase().includes("bptp downtown"))||d[3]].filter(Boolean).slice(0,4),f=c[0]||a.find(w=>String((w==null?void 0:w.title)||"").toLowerCase().includes("brabus"))||a[0],u=Array.isArray(n)&&n.length?n:Array.isArray(e)?e.filter(w=>String((w==null?void 0:w.category)||"").toLowerCase()==="upcoming"||String((w==null?void 0:w.status)||"").toLowerCase()==="upcoming"||String((w==null?void 0:w.propertyStatus)||"").toLowerCase()==="upcoming"):[],x=Array.isArray(i)&&i.length?i:Array.isArray(e)?e.filter(w=>String((w==null?void 0:w.category)||"").toLowerCase()==="newlaunch"||String((w==null?void 0:w.category)||"").toLowerCase()==="new-launch"||String((w==null?void 0:w.status)||"").toLowerCase()==="newlaunch"||String((w==null?void 0:w.propertyStatus)||"").toLowerCase()==="newlaunch"):[],k=Array.isArray(e)?e.filter(w=>String((w==null?void 0:w.category)||"").toLowerCase()==="sco").slice(0,4):[],S=[{id:1,name:"Golf Course Road",count:"245+ Properties",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"},{id:2,name:"Golf Course Extension",count:"320+ Properties",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85"},{id:3,name:"Dwarka Expressway",count:"410+ Properties",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85"},{id:4,name:"MG Road",count:"180+ Properties",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=85"},{id:5,name:"Sohna Road",count:"275+ Properties",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85"},{id:6,name:"New Gurgaon",count:"360+ Properties",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85"}],b=Array.isArray(t)&&t.length?t.slice(0,6):S,R=[I1,L1,M1],[p,h]=E.useState(0);E.useEffect(()=>{if(R.length<=1)return;const w=setInterval(()=>{h(I=>(I+1)%R.length)},4500);return()=>clearInterval(w)},[R.length]);const g="919999999999",j=w=>{const I=encodeURIComponent(`Hi, I am interested in ${w.title}. Please share more details.`);return`https://wa.me/${g}?text=${I}`},A=[{label:"Under ₹1 Cr",sub:"Great homes within your budget",link:"/search?budget=under-1-cr",img:((N=S[0])==null?void 0:N.image)||((m=a[0])==null?void 0:m.image),icon:"◇"},{label:"₹1 Cr – ₹5 Cr",sub:"Premium living with a smart investment",link:"/search?budget=1-5-cr",img:((C=S[1])==null?void 0:C.image)||((B=a[1])==null?void 0:B.image),icon:"♢"},{label:"₹5 Crore – ₹10 Crore",sub:"Bigger spaces for a better lifestyle",link:"/search?budget=5-10-cr",img:((M=S[2])==null?void 0:M.image)||((q=a[2])==null?void 0:q.image),icon:"♕"},{label:"₹10 Crore – ₹20 Crore",sub:"Exclusive homes for discerning buyers",link:"/search?budget=10-20-cr",img:(($=S[3])==null?void 0:$.image)||((F=a[3])==null?void 0:F.image),icon:"♛"},{label:"₹20 Crore – ₹50 Crore",sub:"Ultra-luxury living redefined",link:"/search?budget=20-50-cr",img:((P=S[4])==null?void 0:P.image)||((Z=a[4])==null?void 0:Z.image),icon:"▥"}];return r.jsx("section",{className:"hw-trending-section",children:r.jsxs("div",{className:"hw-trending-container",children:[r.jsxs("div",{className:"hw-trending-header",children:[r.jsxs("div",{className:"hw-trending-heading",children:[r.jsxs("div",{className:"hw-trending-eyebrow",children:[r.jsx("span",{}),"HOMWISOR"]}),r.jsxs("h2",{children:["Trending Projects in"," ",r.jsx("span",{children:"Gurugram"})]}),r.jsx("p",{children:"Handpicked premium projects for a better tomorrow"})]}),r.jsxs(H,{to:"/search?category=trending",className:"hw-trending-view-all",children:[r.jsx("span",{children:"View All Projects"}),r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsxs("div",{className:"hw-trending-layout",children:[r.jsxs("div",{className:"hw-trending-left",children:[r.jsx("div",{className:"hw-trending-properties",children:l.slice(0,8).map((w,I)=>r.jsxs(H,{to:`/property/${w.id||I}`,className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:w.image,alt:w.title,loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),w.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[w.bhk||"3 & 4 BHK",w.bhk&&w.propertyType?` • ${w.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:w.title}),r.jsx("div",{className:"hw-card-price",children:w.priceRange||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:w.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:w.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:w.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:j(w),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:T=>T.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},w.id||I))}),r.jsxs("section",{className:"hw-prime-locations",children:[r.jsx("div",{className:"hw-subsection-header",children:r.jsxs("div",{children:[r.jsx("div",{className:"hw-subsection-eyebrow",children:"PRIME LOCATIONS"}),r.jsxs("h2",{children:["Gurugram's"," ",r.jsx("span",{children:"Prime Locations"})]}),r.jsx("p",{children:"Explore properties in the most sought-after locations"})]})}),r.jsx("div",{className:"hw-location-grid",children:b.map(w=>r.jsxs(H,{to:`/search?location=${encodeURIComponent(w.name)}`,className:"hw-location-card",children:[r.jsx("img",{src:w.image,alt:w.name,loading:"lazy"}),r.jsx("div",{className:"hw-location-overlay"}),r.jsxs("div",{className:"hw-location-content",children:[r.jsx("div",{className:"hw-location-name",children:w.name}),r.jsx("div",{className:"hw-location-count",children:w.count})]})]},w.id))})]}),r.jsxs("section",{className:"hw-upcoming-projects",children:[r.jsxs("div",{className:"hw-upcoming-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"hw-subsection-eyebrow",children:"UPCOMING PROJECTS"}),r.jsxs("h2",{children:["Upcoming Projects in ",r.jsx("span",{children:"Gurugram"})]}),r.jsx("p",{children:"Discover the latest upcoming developments in Gurugram"})]}),r.jsxs(H,{to:"/search?category=upcoming",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:u.length>0?u.slice(0,4).map((w,I)=>r.jsxs(H,{to:`/property/${w.id||w._id||I}`,className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:w.image,alt:w.title||"Upcoming Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),w.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[w.bhk||"3 & 4 BHK",w.bhk&&w.propertyType?` • ${w.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:w.title||"Upcoming Project"}),r.jsx("div",{className:"hw-card-price",children:w.priceRange||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:w.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:w.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:w.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:j(w),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:T=>T.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},w.id||w._id||`upcoming-${I}`)):r.jsx("div",{className:"hw-upcoming-empty",children:r.jsx("strong",{children:"No upcoming projects found."})})})]}),r.jsxs("section",{className:"hw-upcoming-projects hw-newlaunch-projects",children:[r.jsxs("div",{className:"hw-upcoming-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"hw-subsection-eyebrow",children:"NEW LAUNCH PROJECTS"}),r.jsxs("h2",{children:["New Launch Projects in ",r.jsx("span",{children:"Gurugram"})]}),r.jsx("p",{children:"Explore the latest newly launched projects in Gurugram"})]}),r.jsxs(H,{to:"/search?category=newlaunch",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:x.length>0?x.slice(0,4).map((w,I)=>r.jsxs(H,{to:`/property/${w.id||w._id||I}`,className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:w.image,alt:w.title||"New Launch Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),w.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[w.bhk||"3 & 4 BHK",w.bhk&&w.propertyType?` • ${w.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:w.title||"New Launch Project"}),r.jsx("div",{className:"hw-card-price",children:w.priceRange||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:w.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:w.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:w.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:j(w),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:T=>T.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},w.id||w._id||`newlaunch-${I}`)):r.jsx("div",{className:"hw-upcoming-empty",children:r.jsx("strong",{children:"No new launch projects found."})})})]}),r.jsxs("section",{className:"hw-festival-offers",children:[r.jsxs("div",{className:"hw-festival-header",children:[r.jsxs("div",{className:"hw-festival-title-wrap",children:[r.jsxs("div",{className:"hw-festival-brand-line",children:[r.jsx("span",{}),"HOMWISOR",r.jsx("span",{})]}),r.jsxs("h2",{children:["Best Festival Offer in ",r.jsx("span",{children:"2026"})]}),r.jsx("p",{children:"Exclusive deals on premium residences. Limited period offers, unmatched value."})]}),r.jsxs(H,{to:"/search?category=festival",className:"hw-festival-view-all",children:["View All Festival Offers",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsxs("div",{className:"hw-festival-layout",children:[r.jsxs("div",{className:"hw-festival-banner",children:[r.jsx("div",{className:"hw-festival-banner-bg"}),r.jsx("div",{className:"hw-festival-banner-overlay"}),r.jsxs("div",{className:"hw-festival-banner-content",children:[r.jsx("div",{className:"hw-festival-mini-badge",children:"FESTIVE EDITION 2026"}),r.jsx("div",{className:"hw-festival-banner-kicker",children:"FESTIVAL LUXURY"}),r.jsxs("h3",{children:["Luxury",r.jsx("br",{}),"Homes.",r.jsx("br",{}),"Bigger",r.jsx("br",{}),"Celebrations."]}),r.jsx("p",{children:"This festive season, unlock exclusive offers on premium residences across Gurugram."}),r.jsxs("div",{className:"hw-festival-perks",children:[r.jsxs("div",{children:[r.jsx("span",{children:"◆"}),r.jsx("b",{children:"Limited Period Deals"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"◆"}),r.jsx("b",{children:"Assured Appreciation"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"◆"}),r.jsx("b",{children:"Flexible Payment Plans"})]})]}),r.jsxs(H,{to:"/search?category=festival",className:"hw-festival-explore",children:["Explore Offers",r.jsx("span",{children:"→"})]})]}),r.jsx("div",{className:"hw-festival-banner-brand",children:"HOMWISOR"})]}),r.jsx("div",{className:"hw-festival-grid",children:(Array.isArray(o)&&o.length?o:a).slice(0,6).map((w,I)=>r.jsxs(H,{to:`/property/${w.id||w._id||I}`,className:"hw-festival-card",children:[r.jsxs("div",{className:"hw-festival-card-image",children:[r.jsx("img",{src:w.image||w.thumbnail||a[I%a.length].image,alt:w.title||w.name||"Festival Offer",loading:"lazy"}),r.jsx("div",{className:"hw-festival-card-badge",children:w.badge||"EXCLUSIVE OFFER"}),r.jsx("div",{className:"hw-festival-card-arrow",children:"→"})]}),r.jsxs("div",{className:"hw-festival-card-content",children:[r.jsx("h3",{children:w.title||w.name||"Premium Festival Offer"}),r.jsx("div",{className:"hw-festival-card-price",children:w.priceRange||w.price||"Price on Request"}),r.jsxs("div",{className:"hw-festival-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:w.location||w.locality||"Gurugram"})]})]})]},w.id||w._id||`festival-${I}`))})]})]}),r.jsxs("section",{className:"hw-luxury-projects",children:[r.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"hw-subsection-eyebrow",children:"Branded Residences"}),r.jsxs("h2",{children:["Branded Residences in ",r.jsx("span",{children:"IN"})]}),r.jsx("p",{children:"Explore premium branded residences and landmark projects"})]}),r.jsxs(H,{to:"/search?category=branded",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:c.map((w,I)=>r.jsxs(H,{to:`/property/${w.id||w._id||I}`,className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:w.image||w.thumbnail||a[I%a.length].image,alt:w.title||"Luxury Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),w.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[w.bhk||"3 & 4 BHK",w.bhk&&w.propertyType?` • ${w.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:w.title||"Luxury Project"}),r.jsx("div",{className:"hw-card-price",children:w.priceRange||w.price||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:w.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:w.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:w.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:j(w),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:T=>T.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},w.id||w._id||`luxury-${I}`))})]}),r.jsx("section",{className:"hw-branded-feature",children:r.jsxs("div",{className:"hw-branded-feature-inner",children:[r.jsx("div",{className:"hw-branded-glow"}),r.jsxs("div",{className:"hw-branded-copy",children:[r.jsxs("div",{className:"hw-branded-label",children:[r.jsx("span",{className:"hw-branded-label-line"}),"HOMWISOR PRIVATE COLLECTION",r.jsx("span",{className:"hw-branded-label-line"})]}),r.jsxs("h2",{children:["Where ",r.jsx("span",{children:"Branded Residences"})," Meets",r.jsx("br",{}),"Architectural Masterpieces"]}),r.jsx("p",{children:"Indulge in our curated selection of signature branded residences. Crafted in collaboration with world-class fashion houses and legendary hoteliers to deliver a life of unmatched sophistication, bespoke concierge services, and timeless value."}),r.jsxs("div",{className:"hw-branded-points",children:[r.jsxs("div",{children:[r.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),r.jsx("span",{children:"Concierge & Valet Services"})]}),r.jsxs("div",{children:[r.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),r.jsx("span",{children:"Fully RERA Verified Properties"})]})]}),r.jsxs("div",{className:"hw-branded-actions",children:[r.jsxs(H,{to:"/search?category=branded",className:"hw-branded-primary",children:["EXPLORE RESIDENCES ",r.jsx("span",{children:"→"})]}),r.jsx(H,{to:"/search?category=branded",className:"hw-branded-secondary",children:"GET INSTANT CALLBACK"})]})]}),r.jsxs("div",{className:"hw-branded-visual",children:[r.jsxs("div",{className:"hw-branded-main-image",children:[r.jsx("img",{src:(f==null?void 0:f.image)||(f==null?void 0:f.thumbnail)||"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=560&fit=crop",alt:(f==null?void 0:f.title)||"Branded Residence"}),r.jsxs("div",{className:"hw-branded-image-card",children:[r.jsxs("div",{children:[r.jsx("small",{children:"BRANDED RESIDENCES"}),r.jsx("strong",{children:(f==null?void 0:f.title)||"M3M Brabus Residences"})]}),r.jsxs(H,{to:`/property/${(f==null?void 0:f.id)||(f==null?void 0:f._id)||"branded"}`,children:["EXPLORE ",r.jsx("span",{children:"→"})]})]})]}),r.jsxs("div",{className:"hw-branded-side-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=900&fit=crop",alt:"Luxury branded residence"}),r.jsx("div",{className:"hw-branded-side-overlay"}),r.jsxs("div",{className:"hw-branded-side-content",children:[r.jsx("span",{children:"HOMWISOR"}),r.jsx("strong",{children:"BRABUS"}),r.jsx("small",{children:"RESIDENCES"}),r.jsx("em",{children:"POWER. PRESTIGE. PERFECTION."}),r.jsx("label",{children:"COMING TO"}),r.jsx("b",{children:"SECTOR 58, GURGAON"}),r.jsx("div",{children:"4 & 5 BHK • STARTING FROM ₹20 CR*"})]})]})]})]})}),r.jsxs("section",{className:"hw-luxury-projects",children:[r.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"hw-subsection-eyebrow",children:"Top Luxury Projects"}),r.jsxs("h2",{children:["Top Luxury Projects in ",r.jsx("span",{children:"IN"})]}),r.jsx("p",{children:"Explore premium branded residences and landmark projects"})]}),r.jsxs(H,{to:"/search?category=branded",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:c.map((w,I)=>r.jsxs(H,{to:`/property/${w.id||w._id||I}`,className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:w.image||w.thumbnail||a[I%a.length].image,alt:w.title||"Luxury Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),w.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[w.bhk||"3 & 4 BHK",w.bhk&&w.propertyType?` • ${w.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:w.title||"Luxury Project"}),r.jsx("div",{className:"hw-card-price",children:w.priceRange||w.price||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:w.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:w.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:w.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:j(w),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:T=>T.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},w.id||w._id||`luxury-${I}`))})]}),r.jsxs("section",{className:"hw-budget-section",children:[r.jsxs("div",{className:"hw-budget-header",children:[r.jsxs("div",{className:"hw-budget-heading",children:[r.jsxs("div",{className:"hw-budget-eyebrow",children:[r.jsx("span",{className:"hw-budget-eyebrow-line"}),"HOMWISOR"]}),r.jsxs("h2",{children:["Top Budget ",r.jsx("span",{children:"Projects"})]}),r.jsx("p",{children:"Smart homes. Great value. A better tomorrow in Gurugram."})]}),r.jsxs(H,{to:"/search",className:"hw-budget-view-all",children:[r.jsx("span",{children:"View All Projects"}),r.jsx("span",{className:"hw-budget-round-arrow",children:"↗"}),r.jsx("span",{className:"hw-budget-round-arrow",children:"→"})]})]}),r.jsx("div",{className:"hw-budget-grid",children:A.map(w=>r.jsxs(H,{to:w.link,className:"hw-budget-card",children:[r.jsx("img",{src:w.img,alt:w.label,loading:"lazy"}),r.jsx("div",{className:"hw-budget-card-overlay"}),r.jsx("div",{className:"hw-budget-icon",children:w.icon}),r.jsxs("div",{className:"hw-budget-card-content",children:[r.jsx("h3",{children:w.label}),r.jsx("p",{children:w.sub})]}),r.jsx("span",{className:"hw-budget-card-arrow",children:"→"})]},w.label))})]}),k.length>0&&r.jsxs("section",{className:"hw-upcoming-projects hw-sco-projects",children:[r.jsxs("div",{className:"hw-upcoming-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"hw-subsection-eyebrow",children:"SCO PROJECTS"}),r.jsxs("h2",{children:["SCO Projects in ",r.jsx("span",{children:"Gurugram"})]}),r.jsx("p",{children:"Explore premium SCO plots and commercial projects in Gurugram"})]}),r.jsxs(H,{to:"/search?category=sco",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:k.map((w,I)=>r.jsxs(H,{to:`/property/${w.id||w._id||I}`,className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:w.image||w.thumbnail,alt:w.title||"SCO Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),w.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"})," RERA"]})}),r.jsx("div",{className:"hw-bhk-badge",children:w.propertyType||w.type||"SCO"})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:w.title||w.name||"SCO Project"}),r.jsx("div",{className:"hw-card-price",children:w.priceRange||w.price||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:w.location||w.locality||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:w.area||"SCO Plot"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:w.propertyType||"Commercial"})]})]}),r.jsxs("a",{href:j(w),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:T=>T.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},w.id||w._id||`sco-${I}`))})]})]}),r.jsx("aside",{className:"hw-trending-ad",children:r.jsxs("div",{className:"hw-ad-slider",children:[R.map((w,I)=>r.jsx("img",{src:w,alt:"Homwisor Advertisement",className:I===p?"active":""},I)),r.jsx("div",{className:"hw-ad-dots",children:R.map((w,I)=>r.jsx("button",{type:"button","aria-label":`Advertisement ${I+1}`,className:I===p?"active":"",onClick:()=>h(I)},I))})]})})]})]})})}const W1="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAoAACAAAAAAI0AAEAAAAAAAACywAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA3AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAADc21kYXQSAAoJOBl/7MICGg0gMpABROABBBBAoNf+rO9vENZLd/knyrmSDn+LrrbP4gtu6IqPzSGEBqJCxkZ1VjeE700QtuJ8rk7fzYoymKuOz3F8mJQZPeMVt7r7QEAAHuwn9rdxogLAZ0ZmsMktnVAdeTg7PUmU77ZW3Qyx0ei/EFsGy8xz2gYfo2T2gHm1s1VAVqEnZjFJ6tNyuICqACTkORV4EgAKBhgZf+zCoDK+BROAEECg2AF6CPOtQrgQv854b1HpCkV1NIyqo2TMFkQ6KjRsg/nP7fpXYXAcNAanV0M2nuSlKvHk+0ND/gkoxtQzRIlOayHB0kKoWGfhdAD8sf0H6E5lan+y59H91rcOKV0qehLUWP/CBvYw/HSZEVDLNyB79Co0oTfACpudbB85tlwnAQ3kK+D7BR7HmAXGtd6tPoV6pximDfx0lD0xOeyvILKZWGOR1N7TXHKAlV9Y295tQCaaIieXZwYk+fk6pK0usqquawkHQTKUPfu5vg1i6tzcyIIcT54y2hgBEQQ/2bPuBWslovdeQQBkDEj+4wHv2PfOMa0z1BCetsD6nSuoUQFnoUyKnAx2e3LN5g1XdIS57uxf3hkYRreBYfnj9oOngGNJb4I5kpb4r4EIKb+qiuxQ1F0jGQAayWMSSjyi8/Umrs8RtHpB3fnYE9qHsZXGU8DrmkiDHza3efTJvYuREUW/Lz9n77+Ch+aQtF0TE5GoV6zZxvFLUJohT2tSg0GQucjQDrX2c5dP6CFar2EhiMOmozUUxrqxViWpmR6EInQF43RCzO103Bw8Gu/OkEM1y63sacqie2YF1cjoqQE2ToMAFJYiJSmtowgwTW0JJzWnKWYWA2UycUXiAldYqzDSstUFONom9y/XVpYgYk2oFyztdLtzFirDt2OD2MUsf1kKCZbXZum2gzcgENJRzj6ZJmjvUYSDisd5gm/6TyQOcjdNtdVlxYCIYdQEwrn1NLmuMDaL6xvbdhQUDKpCIwXzEulLxQmxmeXtBZNbKZFu1g4eLPaEWz0F/lSy9wYVa9qAeSUL4A64l05X+XDelVQmiD6k67bEqGwp32eTfM44BzQ39Ify0ULRoHFu4XMH/OaymRxzVWURY1R7CJHoBAvbDvjA+eHQueksGcxvSh0MCH1EdQ03/SOhUpzpQA==",D1="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAywACAAAAAAJfAAEAAAAAAAAEQwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAAaAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAFFm1kYXQSAAoJOBk/5YQENBpAMrsBE4AEEEECgOk/eGS8lanpaeNHmUGZRLVVeklRS9cl8H9vn2VoabkKAsvohpQxGtxZeq0OWmG7cmDNQNUjpZDG5e8sHVCwHOrS2jc4nq9ULizp9ngaDEZJehfgT8Bf/bon6jz4rPzxVmDV6zdusv4Ct+2xL/rXOZIddKFz8iqctnO7mfNR5jjGT86mcGpRKr6c5YNjlSYTgVA1tTyikKNV6lEK6S27QzJ4JL1O9ypnl4Bu16mKlD6R3RqzgBIACgYYGT/lhUAytggTgBBAoPHZap47IRQ4Hg9u0O9scpCGlLiywQuHfoWLWI8xWzb7L85i9N+wWamvtPBG4S9GNo6VfrYzhjvKBZUjwcATivHUaa3q6nD08rr2AngloVt6TNKZbgrMtW6jeaPQbWE1abD0xG+WkLXXvRPav7Spa+yw+1Z9ntt6lYd3yGcPhPp7TAngTVFADvkAvgdTrMogXMapEQE+R9+2MHwvwn31xDHmsirJsa5z/+ID8g+Otrlb4YTNm/QVfPKBn3p/8EFUo+52vMa/fM551SNKIXr8O4P1BpBuR3OK7lVU7txqN+gdj4prLkOnMod90UrFrsQCy3arRgfMFhOi3N6PV2fV60u6y+K7QI9mrzszOSb4tVDWgZgFCdzwOgRf+7NtO7Tr0W0N3rvetY/QaRf1DJu59KXXtMg5jaFiu1UGMlemMm0A/58cIteaYgSrC7EyIvjH49m7KF7c8maDN9oLE0+HeTui7TzOPXdMfKvxECMUKeXWzCf6ZnwIWA0a4n4hkM/NuzNMfP33BXf2dBV9dYVEe/BcgfYvBjujrh91ehoEbEyB1+pr+SOjxUaIrEmId+agerWENxuqvI1S/4rSQ80whmu8/fp6vmso6x+/nNlDAqYruUuQ/5E0ykZW5jn0bpe43/R3nAXUIhsmEqa/FVQLyf6TMrqPr5A4/OIEi/1lvRZAu1TKvXSQEvffXOO+pxAHkNM+7mCGBphjEz70RoZnIwfqVC2mHRot3NL3kZKpANUMEoKhrc9KgX2688Q3DJGWVgBYWKnwWElgyLSC/4NVOTU0NoNNzQMG2JMnhgu+egyZ8LSH5eAmhWVp++reie9tewP89MVlfFutxSQr5tui6mjoVY+DY2qCm85LvOfZeEdPZ7P5PgorVOUw4BXRReBl33W1fwYIQzYS8GPLbqNW5bzZshY861uuy+/37YOJrAYfDc5VXmvaSYPeJwxHP2oJWh8c1MK8noe/8jKojkiybgL5l86/A8t+10o68dMhCS0SIp73i5NVAvUBEUhth/rADQe9Eo7QqNzx1e5PSehbsXbFesyej2ui5VYJ4ezAlTWromtruqc/Q68Q7PR9k/U/Mj2zdLXU6cTWcHflLP5a2VQz7O7C+t2kCxY/OgHAWgziUN7kWXL4rqZ7FNYzdi7UEaG2sSrWj5TyZ2ACiiCL17+19fxTx90rpXMh9s8FVn0I7E7YY6d5rb0Vva9BXPVqEjQXBU7jLFAGL0rOGON/zRc1BgIhpQAdYmBV45SNaI3EyeL3s1eRg1Um1ViJjEZF8GiyVYTvqR6lC6A6j3JBBEwtxlEBmrz2i+qm8Cca+dpW+pMw/5zCs4H/9Bxq1RyOaHhtq/WWT+vPgPXpaU4YMSVzTrtrYrCg7QbqZFGuHf7PZ0KXuOJH5AOHLn0QVAAvatI7Ff5hC0KKSCxFMUcVfJLw",F1="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAGRgACAAAAAAfaAAEAAAAAAAAGHgAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAArAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMbG1kYXQSAAoJOBl/1MICGg0gMrYMROABBBBAoNtHy//xpL+BV005da2uB8FibEpyx0i6gZ+cxoTNByskHj1fGMns5mSTZeRA4ivW3JWIiU5DmaL8aDaFEMMj+FkHGc4MTmL0EWofwoPbZxmnaPAuHelRdiwofFJtrEk4nNA54Gv6+Xz5q4oeJAblByJMJNKEM4ZWOZPpnyOrjOQ3dCEKFs4M1BwQOgDlbHULxwYzIUqRJCQgwh6I639o6C8nQeI0xMOH/LRbWGQGHzf2IQ26yBbeUIaa9Gu6QNCI0fsJhRGxoGE2feMolJzcPJtEv85fCpvKoyCcaqcZnDxaphIKl81OfF8k4rlTkftpwdlTHwao1iIAKsnPycD3v0f9p8evTJX94lkBblYwU40ejDU/mHIAleFIoTGLCX3zq01TVVd0Xp2huvXgwATxzpw+atU7xkWNaEf7toWfkL1lr+M1oieLbXnb38x4LY/2eqE1W5tcVGh6pbHslal76xulIgHhhf74sD7ZXbJ6NOn8V3lwuXiipTghp5E+dfweQUjsKTS8G3+oc8oL7gBPGzsCC7Ty2rkKx2Lk0PFRW+fI63Ow8wF5ItOuGtPs7zmqJfKxgdCkaMoiiWiDVaQdTS5n/GVI9eMeGRX5YVuNcYiPR425IwafPlvY7bheLYobQAGjBhEOEyLg7rlGdr6OATWsKu3SbpprmuHzaBTJnxBHd3SKuRAIrmPMOSfI/bZydF8lKlrv5L/4sxa+LK3zj+uM0r6mypD7YXxX73wjyGQL23hFYkbMTiJNyHvgkt2f2k1EZaCXg9zTk4XPtJbwyZNaubGpZH/Gs5ToN393Sxn1OZZLbKgMRaE/jcoq/oiwcfDZB93bGV4KlxCY0psuOOkOUwL9IsmriLr4Jwya8BtiWFLC6pTeIb7b5Wdg5IZnQcAq7XbQr9Lb7mVdehrrM7dCW+5mu0DZO62eL+H7TyghTMlDWaQY02MUQkIAo/f0zt+QAn+USE6hXQrKA/G8w/gPu4e4vRjSxNwEx1yYXVUcyqK7apo+idrp3VjGXL5a34WU2CvE/hTFwDbWdd4PqIHNdGcF1wnL96bStttvvFW6+wffekXtcUUCuy+k9L5JSMSgP3kCL7TiwFgAUZw20b+mBWwPid6VILcFKm7XLQDnjPns9W4srvM9K5IVsve/R+6+n/XEzR/WpzWZI7d3RIae1H7VDEGjJ4bZOiiAr+prstLxKNMUqA0DA0lx//As2hmMFHURGb4ksbYCl95MRD0p6HaCPtkdOOagG/SZ9ANgajxhBOvEx8GoOtyxX1jGlZy+XSJmruTkhWX7zMp5rCofXUHle8p58uBiT1xIGxp0PHed9PDb+5tVFHZzxNrLuCBuCsdMj+yooxFt2MwKn5vC/RalVSKtPS3Y/49s2RXiRFblQOdBnIxnHktdGIQd9esvzvOur7APPnDS4HCTqgKBMDYGm8HELritbP6qNNf5leP/W3SbHdtQ9/Oqy2kr+Q/DxgkYpt7FHfLZ3gS+nufw5nJfni2OG+I3sZGdxUB3TVja6EaiobNb/PqrOEkJ0lYxBeNjV20F1OiP6LqwjDk0ZlTG+3Dpy/Mi06eDvR+VAy60xC0+w2QPHxu1PwWxIr9fCRPPi9pFoqgBojz+LYz1HMl4mdv8FVMj2u4aJCeZBjjCyJwnDm1Jce3oPadVpu9nPYaNHieVL5OtBsp7ffwCsrbuxiAf8RtVhArjrJVV64K83OJZi5/gCDpPjQbwIftfvLDJab9N0HgQaxFwiBfuxQv6Rl8oBjLVuEqI+6/PoI12qgBF+80pTxwxbTy/4X1NFFYY1LjMkmGPE0uDV+QjsyTyplpH39/x8O7O2/SKRYuj1JeZtdGESiL3eRaCI/33n2VS2p4ptYyXszcSYLYLIlIWazHWw3iPNhaOE4HMh6VgARh3i+JqF/GrSis84Of/54KWJD2Xg0GQjL/xdFmGq8a7MfkWoeV+M+ed9eLD8+MBmHRxUtGMsd4qqwxF4c2Y0exuRD0G4Vgw1tiihIRs71FdFb4v8o4XBkW9VN/KhIodE1ZBjCzhx0kps8WNWWXJmWO2c5NKsX/klYseKoaGBng0mHpeZCFS5maK8XTx3cLERIUsRqkBwAYnAG+AEgAKBhgZf9TCoDKRDBOAEECg3SuGKP+8I1ONpmimVw00nG1fF14hXu4ERHojUiU2HFWSBbmCWdbNOSdizZjf749/3U1fkhhfHEwGhBbxf8LQx+hKAIjKlxxF44DRzhVxrL5FpjkxFkDYDDg8NBnQ0yfHpd2mNLfNHqCUt4PonpKKuVY936v5mdcuDrZ64O5rLP0IjXgOGwI82T90sG3UEkIGLctVdG14ZyazXQOYh+JlQRYhjgKM5wxg3sqgXuYCkSz1dGJ7nJIsAeHiWxEdEmVN9TOyvGe4VDkZIyvC7u2XbsMN1mIPBDtxajVbUf911aHOS5F1oIhY0v3Dq4J/ULTza10G0NfqaU8QbnTyYkvmCcgF8vxoPlkiN3kMXCYfsLKSVG6rmgxjK8Rpf5//+QOfHNYv0WFVtYLFXTj2N5EI+NxPUQX3TTFsL+6RelpY0MrpGamHbN/8sTAJk5RU8mJHqZjRtfoYi6bM/o/a4DRGu9sCYtsfmJO9av6p/kpyAeSJZh+e/93Nk/wI0z+mz+88v611zWr4GA0YfNehbqP6LSNBln6WmC0acvJnh1Yz8sxTXibYeXkrvu1DwGizQ5hcIQYJBJKYaYewlL28E7YnD2Pfxjat/n7kC+Wg0p1U3azZOo/n9oDkAouKVQTmxgULOVvKr8thrXC9vVrqlsb57dNzLZnU7nRgQTOWM9jQwDfna+d8wnvLT9Ne9EQrlYQBMQJVXepg4hSHRQfGI0jvE1h9iG1Bq+kiUQlQ+KEXSNoTenTp+yoamZdEehujBb4ThrjvKVtc3azo2qdcNMjeJ5o/GQFd4CPpoHzPGt3VxqnBDSBG0Gudes4/j75G6DjU9nPSY2G6i728nOAZieWhKnvqHQlnOnZEWRSZoWPqfzjH16Ynm6+tHwAdsteK12KH+x1wq/8fc9RFZ7pQEOynGBhEyVBsmmmkGpWdzgFAF6Qw2wCpfoamNr8tpjtpWIIyC3+QAf7g9R6Q0F0/lMsOMbjq6HBTYrv+OikBSwgmhmYPyTaLi5wtKacLgiCx9QSEn33+j8y4iFSuxk+GuT48EIqkVgH0jvEpNnp4dL+0ylk4oWplMzR+iLUERVBGvEp5rwH7PkX9rX8tFcXUAfgLcyGZGyY6WOpq5E0qJHy8YopxBQSENsKhFYanjKQFc3OXZ492BPvkD7XCTitAFn+mxfQK8afPuu0tkg2PBXigMROQsBdLFmHpM5mQdBdjd3wWir3+q8bIne6HTKQHcLbSS/BATiixxMuWdbW9ki13ID42taJZs2m9I3pUrN2w4TdTEoFKcOPlpavCxFcikkEjRB1MhL9mkHAU5o9Aedqa/21aBbKrBl4Q0k7JmnKRF+Rb4AmMw7X6sGHD5hMdGuYXep1NnSJlzD6HvZhARCJzgDvPZ4Jx2puZ/VtW3OTKuTNzyyC+/ANfVHbiYLkb2rwOIY6yyzcmPfJ2IdiEU0JXn1Ekxk8l9HhGAAslJUhB/NdTm/ICpXnT5sWpz6eVrwVX3gIpDzjNRnQbDFXiYuO8dJNQlUhEVMnhVVvpnPX7t1Ud3bvyzVUL69B7c37z7yZxzBSUUfkTB6zl6raEs0fDOKYV45+1e/yT8uG2VIw+L5DvjLS/CkU9t1v3Lu3ncnO01DGzuVYzSxZUc/opxsgIi5Aow3CVxChJAOt0ziYpH/EjIKBAetL2jr2ZAOBn/D4b5FcKHlCQGm9rnrsGtL9U4cs5Kyw8M/BXPuHTxGXtwNC0A7xzULUrX/F6kENQDBrSkArPI85hXaIcJQyFPzDnhNuBQUY77+zx0aPHEN0ITnZT7QPaRPfdUM47ldyvu/tqMtDpSEWvLJX9Zfwm/BKxcAuG6CE22I0xYSYDmdmq3hIOtrdCioZ6leJBy4rS0+sFDU1n5MifB3Me0UQGjgJDk8YsXXGnyv/YXXsKXQhktBK7uloQouEArIGOhxYK9AdOm+oGP3h6Gc8Vyw//JfklNRd7e2NXG7iB4aZPWtSi4ukOmdsbgr0hW4Lpjq9RzgJsr/yYE3CSDCMfJlTDAcwbiPOY4HtFiJnkXdMpU5SbmbKhRnJwWDCcYf7lo7f8",H1="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAFhQACAAAAAAcZAAEAAAAAAAAGhwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA/AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMFG1kYXQSAAoJOBl//MICGg0gMvUKROABBBBAoNzPlcdBEEEDVJnuiNEyPdUPh1D17yYOiwwITk5pZQPF2puGWU0UsUVI58UZX6fa1WWOl3m8b0c+z2a6Waaz22bLVfCxZ5pXOoKm370l9SZ49/jOa6iu940RhQwAzCpsXNhX6Ho5oSdTpTYfQFqveq6Ik3H413RRV6hhBgbEjG4A3FveJMPe5Eib990IBhxn7LQljie8Ayx2e5Ogu+jJPFHj07kmCi94iE9nEg66X4uxdtdrJf9SVCtQG1si5GeFxt7Mi0TZ/4XwdlxVmOmF7GoeoAASRXMwb7CoYQxPB1P54KaGEjfXqHdXUbl8qYkDR2kWKtI5UVZt03be6xg6D4HtZyMdEf6w0tpZjafeiPjd88ckp0386AtCEbIYhWwb8YcNKg56XEG0e/4n/ukz2HyL9L7VRzI36aqAjrcQ6xKoao+ZfHhms0iqCfYlzygK58xcRLHQo2TX51FuGq/SY3ih5csT84gv38+gpqATqXN7cLvvz1mmkLhYPlMxE14JCWCrUAPMkjkf8mslzya5DjNNGia4AqgpuAc+i7jzkCGGvDTjPElsgHh/LBQAOXSRNW39UCVediApyQoFGZjxY/3PKZuyGJMC10HJMW/CcBJRF4Xh1oRwpLYlBmeIk6tLj/A/AAkiJNlbdkQDg6brAgG6g+s2saoiImylp9dwwZvxaZOBcj0DXj4Sbl7FbaxoLmcA75yk4/vP/TJubkqCTSt8dpMEwWRTJB+4YDivnGfYoXVtVokgMDps6zify6yQbZv9JBpyCVDQFDGwcwT9paTtbVpf0jxEYj5rZ70dvfHAZ6vPVyplh4ymJCMDESg+iDO1CjoeWeqxb63bOdJ513RWzSxIh5JSBl6hFOQT+cx6k01U2C8RAGXieH89BFwWhXkxQBMCfRECrO5XSTICMxoqsk3ifUz38WtXed6wJmtJVmM4hCGV87oJnpCK41/a+Nes4mJTLR/yZJ8at8Qle1Zn+knoFw+qjXmBwSNvqVwCI98VeWPTgV35drY/36M80IbO1zJE8m9Ka0l+QSKsnZ+366IGGZNOje/PiAjHGuiEex0F45MsReq3vavV0ZnF1gSbtwFr4F/X2fTodroOZfhvVsQwOYQzz199+ME6oof5Ay5fdzUn48V/iKdgwOof59puBDjUO6v920lQ8S0vJ0nh9L9xi0U8BRYDGD9qnLeFt4uSU+Rd61bsiBDsgY6VEaxDYWBXbKU5aaEmcotZVzTGaK1sXtPIXyQ1a2VXXYIliND1PMwieFBz7QYa5K2AcrlcKlKJBTN7+sutsWg3axJp1YlTVVkO/tcF/g02ynMc+eZi2lxDUOBw70LMk8H1sKHX/emW1a7Z6AsDsoCFEGlyfPv7xJFllAHEOMcpvSXJhk8chcUQNgo8a4/XAI+4fsTHbjhkf2xf3KHEFWV6FdzvaWEFhtV+uDN/OE+A6IhNbDNz8IgcfKTLNF9eiHGa4d6PQpoNTaTqkzE1We/xuwpcRac0AuhHQBj4+j+BFtxukCK2Two2WcCSZNg1eYdtL5JNpO/Lji6PKitVBEIq9Y9VJ+R1Mm6+MDqbX0JpGl4ikix/SfWnmYaPSKscQKCcFqG0ric6h6HqCSC/32fCdhbciibTuOQUR7zPmIM8t7cSWkWvbIqvIM1oqGf2MNtVLvbgOsV4CBohYjzyEH5lXJVLq+cXoUy3vpRg5T5X1zPSW2v/gxv32QlOT8rFLWTKVXwHOBPKejx1rSEDljMPLi+iW6SJlw+bbXJCqPJRRQ+I+mzNMeiRiK9rYL+M34nwEGiL2Y3fOcMJMvJK+Ynr7VpV/1bWCIrfWu51HUNagaaUf/5kfWLq6SK0s8jLjy4SAAoGGBl//MKgMvoME4AQQKDdLANY8a5ihC48a+vLruZGsFg0HSjw82XLtKa76l4MgvsZg9+e82JsgiJ40yYqpXAKUr5jMcxbPLa1aezsLhLUU8xDbJmA2OfB2qcG5GDKwGrmvBOT7XCquIoP0aWnXi1PDbtjRScSFFQrnk2ltlNfBHOBML0vZeE7eRWrYCzA+mzNOttjGCWS2PmQ0j3IHTmg4ttly5a1vHaRB1ZfBEkRHyK+ePREQIndkEfigjjwO5O4zSh1lceAt78FQ0qYTW2hVbUKlkoM4BS/FlGG6ClLgrhIJ5KQAIBao+KIJatEoQ1V/mg9yU+j5JSapy/DT/as9tD2cXgE7LYt2r05PVEBf+80913xydEWHFXZqiZ49iN63sOwn2B0OR2Fi3VUfhrGz0WZhtlA/iX/Vg5bD+palvqcFo0pVsNLcqIDUm8I7WCQZbAmImjco1sLPJfBEWcl9Vq2ql+bSO40lK3Jf7ZtAQfKTkmzwVwNvOZN9/JoGmEJX5u+21ti7h2aZ4XSYqQZHmx/F/jh18jMsTi9fukpC4adDX3znpRFThlBrQIE0db/aO9Xpk0jxDn3FxuGwp0cQEwlOLYxURRTMdDbgc5+VUgaMOol8pXJFGGRTA882qtCXTiooNPeFN4ycNVVXKk52BwlVF/jCwajXcYu8gW5dU3jqUqAPGt59JMuc75xGJ7GEHvg3YisA4dw+s92/n6fSBJwA/2kjt2kT28RhiVn4JK5JICqqsJ3Brpj01X9pV51NMwzYu3TYLJGBmsuZtQsbQLKCqP4IafF0AT7WzxDGpoTXtUIk4kD5SKiEEB3DsbenuFg/JUts4n97/RmPomunR73JyNnYJNsnjH4wkwwyI7LFXDgcV88DRRT3Iue1NMYpXrEEftSiUOAub5CJng2sjG2DHySt/6bzMN4e9JLdKuQWAbtS6OsCqUOx+viYC1J60o6eERTtVjERKLGXN3Gu24Lpo0KrRt7AdmT+dedcawIrrOBxmK8E804X2oKotOOM6/ON5T6p1/XynMqsOYT8e978BW2ZPSHNyzkhbUZ3jOoQVp/xjE2ujpv4ZiIZJcekY6p2TDWL/5XYOlJ9bTNACxLDt1UHFMVsbstNwczq8SK0PbgLneMBamWM2yzZe1fDzf48qoLZ4kAl/rdmwkdYd57H1Af+Nt+ONObw4ah/Vou7dYwaPMY3jvhmLtCJQNst8x9VU7El3/2Fnzy/elWaH3+XARG8fdRCGoXHxMUKtWzgNwpwnc20flCloJYopyMvTni5F/0pNMd7yZXL0Rc9Ce25KzaWIkhjC7htQZjojFR9CqSeCHV3XumzpWITIj3ruoSeZFOYokHRDQbon1hqQTpoP64R+phdnyOqnlRDJhfz6O2E0Q3yqRNtdgmUqpE60Ir4VB+8o+I3Uflx+ahPERdy3eQdQSs8cxZC8ou2pY5NGqr+SJDfsaUBDyjyl4pQJI8+AS4Gr34T4E6hj4BZjpkpW9a2qbjTGvVPkuW6ZyVVQJCxsQYEPXFzZi+WJzeVmbwi8JdkVjNRzdzcVoFSfOuFwl22rzKXlAKE2vz6TAywBzGf1JUYbnsD3PgdEP3ZyCPm0ybTo3B8COc9Q8beDSELJEeP2jPzY49uiOr/Va3Wa+yel1YMoPFIKlTeGXbPHD3N6oHV86LdL5sh+MuuERlO4x9V9mUMwCYT2/8cBpDFx85nUAH/4UR/F+PtnCrya3JIuqr4nqGzVKBNhm45Yl+HP4cTgqDAomfIkjYnbn2FsLjJJbVe+1mFTjzIb5vNrQDKejncZOaaoaX/TKBQvsz923cA8HBskOuImA7hRahRpY+VCF7SRZrywBUV0NO79u2L0Q5KzjZa9IUkSKz0oyPCwrySlyEOUVAWNtKA1G+sWDvJO9QhgYsodzyAOmhWL5wek3O87lbR4CIV3E3yAApjPESoiixidoTTM9zCWphpe+Z5WAeAwTRWjJx9PI+tr1ZA0gRmcHp1Jx7x53DAbt7y/QnLuXb/ERSDpNQgm3rtFK2UHYswgF2aMXCjkR1KCKj/A4eC0FbwZzCYYIFr7GX9epy+h3pftHHR7vMfqFwRKfl6OmLKRQA5efu45aSzX4GunRaAcPOXijq2yx8bVcIg8rDQRhY9Z8XckDIxJ7pabo1ZrGp8E/KDM1MrqDEFGn3wjIWavVfZrAfKo4QGg3pDyeZsGBjKyBmIosZlj99/8A=",U1="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAE5wAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAABVAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAATvbWRhdBIACgk4Gb/UYQENBpAy1wkRwAIIIIFA1/7S1hAQbgM6tsfIR+WZ4mBsWILYI4fSZfdrILAqhSRq0TCSfh4ly+WvJH2UQQmJtmJgSZGxGiKUfdGbZfI8bourfoFwGzt7lDkVF0JFqinz2egtYGW8p2ziHRrm6cztXUUVDJ7kifCblyVuPzGDNmZg9AY2sgXV6fGAt+acCIubv8KAA8db0udbboWmHP7x5yGnFU/2OlAX7Rvo5bdHuwhDccDWMm9R7lJW6v/ejbhL0JJa46jwhhATpftcuzrpg7Q68EKv9aTrOLv9tts4GckwW8kylBXlZpyxi1IwBK2yzq9ZhPoaCNs1eVCg+komI1918AN0B65JUBs6VNWB9ZlsLqQ/umaD6JVfuEyfR3q7Za2lJZbZhecxamE3nvCBfRIY0qcxGY1ht5+YeaUhLe0SZrySKMOqOzDtI0EZv9xIZZySzkurs2+eWULcYVVdSK9ny+RS7HvMG4wCGzyCApIHDnfeOhWC7QK8C+PMUOy/OUuECwr92h1oOP3m4AO6uoMjPI4JIk2drvNxNS1JoCf/X/2CSKE55zAoiazDueW+S3r2JILTK+QxbKhwNeVSSZ+vF3UsZT3H50XKppLdyb6KBug6+nRARnNqOWn3kseU1y3Oxsin/8tS7rzMfEq+0OOkMsWqC6PmRUbQY4gC3DtR7Yjlc3weH/wIq4wa5rcnNnWvC3jVU5S6ih9zjPjYoGdV8nfZg1kAmVe0hdAf7ZqfBDjwKj9Ib3pxWVqRm3jeC3oJwjv1HGD3Y6sw37ynlApJZH5XaobaOf8tRReyXVOlVDZyVNJJVIqYGA+i+nF4NMPOTP97VXZWWSPc7XT33Io18vntvThfkeRWjwm2nYMscWPKpx17nu6znGy/TaIeJwjFtDdOxew5D3+0BNwb12toXFj9UyqfqTl17eNXPY/9oYbZ/FPVKOJmrfEQxJiQ29oL7SH96I87xs8RXdVZwRZrjY7z5bnHRTX7CdoBPJOX7WCIe++SHTAUlORiHboBzy2gF8uFvZgfocZmXLibbEbVH/ILdnJgQaRqXgf5aGl5p/XmrZhbfsJ7AAzR6GNPpDoUVRoDRUm307F8zVC/GS+AD7vbbjorpPKIezS03tCv4ZdaedjGJ9UbhuEMCNqXCJkuPHOhXX3hsy4IyX9NGoEvfwMa44rAhz66kE1uns9fFoY+vVFUnCnT53b1IbVFaNDt5OFJRcSIex1x4GWb/khBFUXVnUc2EYjEjmaleywhOZVX/a2NY/VNDjJDmRG9p+BntTh+g36eU/kTB87Uf5RLA4339hSKPQfV+doqYjg8kcYG4HyeKElk0vYSAyGGhfKscboZ/hZX7ScMFQB7TWx/vb83oFOh4MEmXr0p7CsWsKgaPJix52Of0Oi28woAkmJXltfLA+0ahCqk3UbfJkZIrMAyzm6mEvvkUcYvyhlTPMq9kqivsJKfdmCe2rKmZCxFVHYZBDee1Z2SIjDjK2h6MYRlcJbCk4WRPjPdXfAe2/8Z6s8e7JfbnX9CIxvX3HF9UK3XnYcein8g5Q5tMlJx6fLQJUtPAtHlPMc63bu9l8qZZ4lfiWSeWPo3SRUB14peg4coMzrLHN/ABljlNcmqXk4K3qhG0NGY5D6qwGXVQD1RerEzD95j3TW0TYc=",_1=[{name:"DLF",logo:W1,image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",projects:"50+ Projects",location:"Gurugram | Delhi NCR"},{name:D1,logo:"https://dummyimage.com/220x90/ffffff/111111&text=Godrej+Properties",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",projects:"40+ Projects",location:"Mumbai | Pune | NCR"},{name:F1,logo:"https://dummyimage.com/220x90/ffffff/111111&text=PRESTIGE+GROUP",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",projects:"35+ Projects",location:"Bangalore | Hyderabad"},{name:"Lodha",logo:H1,image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",projects:"35+ Projects",location:"Mumbai | Thane"},{name:"Sobha",logo:U1,image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",projects:"25+ Projects",location:"Bangalore | NCR"},{name:"Brigade",logo:"https://dummyimage.com/220x90/ffffff/111111&text=BRIGADE",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",projects:"20+ Projects",location:"Bangalore | Chennai"}];function Ou(){const e=E.useRef(null),t=n=>{e.current&&e.current.scrollBy({left:n==="next"?390:-390,behavior:"smooth"})};return r.jsxs("section",{className:"hw-developer-section",children:[r.jsxs("div",{className:"hw-developer-wrap",children:[r.jsxs("div",{className:"hw-developer-heading",children:[r.jsxs("div",{className:"hw-developer-label",children:[r.jsx("span",{className:"line"}),"TRUSTED NAMES",r.jsx("span",{className:"line"})]}),r.jsxs("h2",{children:["Top Property ",r.jsx("span",{children:"Developers"})]}),r.jsx("p",{children:"Partnering with India's most trusted builders to bring you the best properties."})]}),r.jsxs("div",{className:"hw-developer-slider-wrap",children:[r.jsx("button",{type:"button",className:"hw-developer-arrow hw-developer-prev",onClick:()=>t("prev"),"aria-label":"Previous developers",children:r.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{d:"M14.5 5 7.5 12l7 7"})})}),r.jsx("div",{className:"hw-developer-slider",ref:e,children:_1.map(n=>r.jsxs("article",{className:"hw-developer-card",children:[r.jsx("div",{className:"hw-developer-logo",children:r.jsx("img",{src:n.logo,alt:`${n.name} logo`,loading:"lazy"})}),r.jsx("div",{className:"hw-developer-image",children:r.jsx("img",{src:n.image,alt:`${n.name} property`,loading:"lazy"})}),r.jsxs("div",{className:"hw-developer-info",children:[r.jsx("h3",{children:n.projects}),r.jsxs("div",{className:"hw-developer-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[r.jsx("path",{d:"M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"}),r.jsx("circle",{cx:"12",cy:"9",r:"2.2"})]}),r.jsx("span",{children:n.location})]})]})]},n.name))}),r.jsx("button",{type:"button",className:"hw-developer-arrow hw-developer-next",onClick:()=>t("next"),"aria-label":"Next developers",children:r.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{d:"m9.5 5 7 7-7 7"})})})]}),r.jsx("div",{className:"hw-developer-action",children:r.jsxs("button",{type:"button",children:["View All Developers",r.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[r.jsx("path",{d:"M5 12h13"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})}),r.jsxs("div",{className:"hw-developer-dots","aria-hidden":"true",children:[r.jsx("span",{className:"active"}),r.jsx("span",{})]})]}),r.jsx("style",{children:`
        .hw-developer-section {
          position: relative;
          width: 100%;
          min-height: 0;
          overflow: hidden;
          padding: 42px 0 10px;
          background: #ffffff;
          font-family: "Manrope", Arial, sans-serif;
          color: #111827;
          box-sizing: border-box;
        }

        .hw-developer-section *,
        .hw-developer-section *::before,
        .hw-developer-section *::after {
          box-sizing: border-box;
        }

        .hw-developer-wrap {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .hw-developer-heading {
          margin: 0 auto 22px;
          padding: 0 20px;
          text-align: center;
        }

        .hw-developer-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 13px;
          color: #9a7418;
          font-size: 11px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .hw-developer-label .line {
          width: 34px;
          height: 1px;
          background: #d4af37;
        }

        .hw-developer-heading h2 {
          margin: 0;
          color: #111827;
          font-size: 36px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -1.4px;
        }

        .hw-developer-heading h2 span {
          color: #b9943a;
        }

        .hw-developer-heading p {
          max-width: 650px;
          margin: 12px auto 0;
          color: #212122;
          font-size: 12px;
          line-height: 1.65;
          font-weight: 500;
        }

        .hw-developer-slider-wrap {
          position: relative;
          width: 100%;
        }

        .hw-developer-slider {
          display: flex;
          gap: 16px;
          width: 100%;
          padding: 0 42px 10px;
          overflow-x: auto;
          overflow-y: visible;
          scroll-behavior: smooth;
          scrollbar-width: none;
          scroll-snap-type: x proximity;
        }

        .hw-developer-slider::-webkit-scrollbar {
          display: none;
        }

        .hw-developer-card {
          flex: 0 0 calc((100% - 80px) / 6);
          min-width: 190px;
          height: 320px;
          overflow: hidden;
          scroll-snap-align: start;
          border: 1px solid #eee8d8;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 7px 24px rgba(17, 24, 39, .055);
          transition:
            transform .28s ease,
            box-shadow .28s ease,
            border-color .28s ease;
        }

        .hw-developer-card:hover {
          transform: translateY(-5px);
          border-color: rgba(185, 148, 58, .55);
          box-shadow: 0 17px 38px rgba(17, 24, 39, .10);
        }

        .hw-developer-logo {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 18px 9px;
          background: #ffffff;
        }

        .hw-developer-logo img {
          display: block;
          width: 82%;
          height: 62px;
          object-fit: contain;
        }

        .hw-developer-image {
          width: calc(100% - 18px);
          height: 150px;
          margin: 0 9px;
          overflow: hidden;
          border-radius: 9px;
          background: #f5f5f2;
        }

        .hw-developer-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform .45s ease;
        }

        .hw-developer-card:hover .hw-developer-image img {
          transform: scale(1.045);
        }

        .hw-developer-info {
          padding: 14px 15px 13px;
        }

        .hw-developer-info h3 {
          margin: 0 0 6px;
          color: #111827;
          font-size: 15px;
          line-height: 1.25;
          font-weight: 800;
        }

        .hw-developer-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #737b8c;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 500;
          white-space: nowrap;
        }

        .hw-developer-location svg {
          flex: 0 0 16px;
          width: 16px;
          height: 16px;
          fill: none;
          stroke: #b9943a;
          stroke-width: 1.8;
        }

        .hw-developer-arrow {
          display: none;
          position: absolute;
          top: 166px;
          z-index: 5;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #eee8d8;
          border-radius: 50%;
          background: #ffffff;
          color: #8d6b1d;
          box-shadow: 0 8px 25px rgba(17, 24, 39, .12);
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, color .2s ease, background .2s ease;
        }

        .hw-developer-arrow:hover {
          color: #ffffff;
          background: #b9943a;
          border-color: #b9943a;
          transform: scale(1.05);
          box-shadow: 0 10px 28px rgba(185, 148, 58, .24);
        }

        .hw-developer-arrow svg {
          width: 22px;
          height: 22px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.9;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .hw-developer-prev {
          left: 10px;
          display: none;
        }

        .hw-developer-next {
          right: 10px;
          display:none;
        }

        .hw-developer-action {
          position: relative;
          z-index: 4;
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        .hw-developer-action button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          min-width: 205px;
          height: 45px;
          padding: 0 22px;
          border: 1px solid #b9943a;
          border-radius: 20px;
          background:white ;
          color: #b9943a;
          font-family: inherit;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 9px 22px rgba(185, 148, 58, .20);
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }

        .hw-developer-action button:hover {
          background: #9a7418;
          color:white;
          transform: translateY(-2px);
          box-shadow: 0 13px 28px rgba(154, 116, 24, .24);
        }

        .hw-developer-action svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .hw-developer-dots {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 10px;
        }

        .hw-developer-dots span {
          width: 27px;
          height: 3px;
          border-radius: 10px;
          background: #e8dfc8;
        }

        .hw-developer-dots span.active {
          background: #b9943a;
        }

        .hw-city-silhouette {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          height: 145px;
          overflow: hidden;
          opacity: .48;
          background:
            radial-gradient(ellipse at 12% 100%, rgba(241, 235, 218, .80) 0 8%, transparent 8.3%),
            radial-gradient(ellipse at 28% 100%, rgba(241, 235, 218, .80) 0 9%, transparent 9.3%),
            radial-gradient(ellipse at 51% 100%, rgba(241, 235, 218, .80) 0 8%, transparent 8.3%),
            radial-gradient(ellipse at 76% 100%, rgba(241, 235, 218, .80) 0 9%, transparent 9.3%);
          pointer-events: none;
        }

        .hw-city-silhouette::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 2px;
          background: #eee8d8;
        }

        .hw-city-silhouette .building {
          position: absolute;
          bottom: 0;
          display: block;
          width: 42px;
          border-radius: 2px 2px 0 0;
          background: linear-gradient(180deg, #eee8d8, #f7f4ec);
        }

       

        @media (max-width: 1250px) {
          .hw-developer-wrap {
            max-width: 1120px;
          }

          .hw-developer-card {
            flex-basis: calc((100% - 80px) / 6);
          }

          .hw-developer-slider {
            padding-left: 36px;
            padding-right: 36px;
          }

          .hw-developer-prev {
            left: 6px;
          }

          .hw-developer-next {
            right: 6px;
          }
        }

        @media (max-width: 900px) {
          .hw-developer-section {
            min-height: 0;
            padding-top: 60px;
          }

          .hw-developer-wrap {
            max-width: 100%;
          }

          .hw-developer-heading h2 {
            font-size: 38px;
          }

          .hw-developer-heading p {
            font-size: 14px;
          }

          .hw-developer-card {
            flex-basis: calc((100% - 80px) / 6);
            height: 320px;
          }

          .hw-developer-logo {
            height: 100px;
          }

          .hw-developer-logo img {
            height: 58px;
          }

          .hw-developer-image {
            height: 205px;
          }

          .hw-developer-arrow {
            top: 155px;
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 650px) {
          .hw-developer-section {
            min-height: 0;
            padding: 28px 0 8px;
          }

          .hw-developer-heading {
            margin-bottom: 16px;
          }

          .hw-developer-label {
            gap: 7px;
            font-size: 9px;
            letter-spacing: 2px;
          }

          .hw-developer-label .line {
            width: 24px;
          }

          .hw-developer-heading h2 {
            font-size: 29px;
            line-height: 1.15;
            letter-spacing: -1px;
            font-weight: 800;
            font-family: "Manrope", Arial, sans-serif;
          }

          .hw-developer-heading p {
            max-width: 380px;
            margin-top: 11px;
            padding: 0 10px;
            font-size: 13px;
            line-height: 1.6;
            font-family: "Manrope", Arial, sans-serif;
          }

          .hw-developer-slider {
            gap: 8px;
            padding: 0 10px 10px;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .hw-developer-card {
            flex: 0 0 calc((100% - 8px) / 2);
            min-width: calc((100% - 8px) / 2);
            height: 330px;
          }

          .hw-developer-logo {
            height: 95px;
          }

          .hw-developer-logo img {
            height: 58px;
          }

          .hw-developer-image {
            height: 195px;
          }

          .hw-developer-info {
            padding: 13px 14px;
          }

          .hw-developer-info h3 {
            font-size: 15px;
            line-height: 1.25;
            font-weight: 800;
            font-family: "Manrope", Arial, sans-serif;
          }

          .hw-developer-location {
            font-size: 11px;
            line-height: 1.35;
            font-weight: 500;
            font-family: "Manrope", Arial, sans-serif;
          }

          .hw-developer-location svg {
            width: 15px;
            height: 15px;
          }

          .hw-developer-arrow {
            display: flex;
            top: 150px;
            width: 40px;
            height: 40px;
          }

          .hw-developer-arrow svg {
            width: 19px;
            height: 19px;
          }

          .hw-developer-prev {
            left: 4px;
          }

          .hw-developer-next {
            right: 4px;
          }

          .hw-developer-action {
            margin-top: 10px;
          }

          .hw-developer-action button {
            min-width: 190px;
            height: 44px;
            padding: 0 18px;
            font-size: 13px;
            border-radius: 8px;
          }

          .hw-developer-action svg {
            width: 17px;
            height: 17px;
          }

          .hw-developer-dots {
            margin-top: 14px;
          }

          .hw-developer-dots span {
            width: 23px;
            height: 3px;
          }

          .hw-city-silhouette {
            height: 105px;
          }
        }

      `})]})}const lt="#D4AF37";function Cr(){return r.jsxs("footer",{style:{marginTop:40},children:[r.jsx("div",{style:{background:"linear-gradient(130deg, #000000 0%, #2a1a05 40%, #D4AF37 100%)",borderTop:`3px solid ${lt}`,borderBottom:"1px solid rgba(0,0,0,.1)"},children:r.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 16px",gap:16,flexWrap:"wrap"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[r.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.25)",display:"grid",placeItems:"center",backdropFilter:"blur(8px)"},children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[r.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:800,fontSize:22,color:"#fff",lineHeight:1.1},children:"Looking for Your Dream Property?"}),r.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,.85)",marginTop:2},children:"Experts online now · Response within 5 minutes"})]})]}),r.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[r.jsxs("a",{href:"tel:918500900100",style:{display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#111",padding:"10px 18px",borderRadius:10,fontWeight:800,fontSize:13,boxShadow:"0 4px 14px rgba(0,0,0,.2)"},children:[r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"1.7",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"Call Now"]}),r.jsxs("a",{href:"https://wa.me/918500900100",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13,backdropFilter:"blur(6px)"},children:[r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#fff",children:r.jsx("path",{d:"M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.15 6.45 2.15 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.02-5.14-2.87-7.01zm-7.01 15.23h-.01c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.68-8.24 8.21-8.24 2.19 0 4.25.85 5.79 2.4a8.215 8.215 0 0 1 2.41 5.83c0 4.55-3.68 8.24-8.21 8.24zm6.91-6.17c-.38-.19-2.24-1.11-2.59-1.23-.35-.13-.61-.19-.87.19s-1 1.23-1.22 1.49-.44.29-.82.1c-.38-.19-1.61-.59-3.06-1.89-1.13-1.01-1.89-2.26-2.11-2.64-.22-.38-.02-.59.17-.78.17-.17.38-.44.57-.66.19-.22.25-.38.38-.64.13-.25.06-.47-.03-.66-.09-.19-.87-2.1-1.19-2.88-.31-.74-.63-.64-.87-.66l-.74-.01c-.25 0-.66.1-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.65 4.06 6.62 5.69.93.4 1.65.64 2.21.82.93.29 1.78.25 2.45.15.75-.11 2.24-.92 2.56-1.81.32-.89.32-1.65.22-1.81-.09-.16-.35-.25-.73-.44z"})}),"WhatsApp"]}),r.jsxs("a",{href:"#contact",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13},children:[r.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r.jsx("path",{d:"M16 2v4"}),r.jsx("path",{d:"M8 2v4"}),r.jsx("path",{d:"M3 10h18"})]}),"Schedule Visit"]})]})]})}),r.jsx("div",{style:{background:"#0A0A0A",color:"rgba(255,255,255,.75)",borderTop:"1px solid #1a1a1a"},children:r.jsxs("div",{className:"container",style:{padding:"36px 16px 18px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:24},className:"footer-grid",children:[r.jsxs("div",{children:[r.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:r.jsx("img",{src:Pu,alt:"HomWisor",style:{width:145,height:"auto",display:"block",objectFit:"contain"}})}),r.jsx("div",{style:{height:1,background:"linear-gradient(90deg, rgba(212,175,55,.4), transparent)",margin:"14px 0"}}),r.jsx("p",{style:{fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,.65)"},children:"India's leading luxury real estate platform. Buy, sell & invest in premium properties across India."}),r.jsxs("div",{style:{display:"grid",gap:10,marginTop:16},children:[r.jsxs("a",{href:"tel:+918500900100",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",color:lt,flexShrink:0},children:r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:lt,strokeWidth:"1.7",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),"+91 8500 900 100"]}),r.jsxs("a",{href:"mailto:support@homwisor.com",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:lt,strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),"support@homwisor.com"]})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${lt}`,display:"inline-block",paddingBottom:6},children:"QUICK LINKS"}),r.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[r.jsx(H,{to:"/",style:{color:"rgba(255,255,255,.7)"},children:"Home"}),r.jsx(H,{to:"/search",style:{color:"rgba(255,255,255,.7)"},children:"About Us"}),r.jsx(H,{to:"/search",style:{color:"rgba(255,255,255,.7)"},children:"Blog"}),r.jsx(H,{to:"/search",style:{color:"rgba(255,255,255,.7)"},children:"Contact"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${lt}`,display:"inline-block",paddingBottom:6},children:"TOOLS & SERVICES"}),r.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[r.jsx(H,{to:"/privacy-policy",style:{color:"rgba(255,255,255,.7)"},children:"Privacy Policy"}),r.jsx(H,{to:"/terms-and-conditions",style:{color:"rgba(255,255,255,.7)"},children:"Terms & Conditions"}),r.jsx("a",{href:"#",style:{color:"rgba(255,255,255,.7)"},children:"Disclaimer"}),r.jsx(H,{to:"/admin",style:{color:"rgba(255,255,255,.5)",fontSize:12},children:"Admin Panel"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${lt}`,display:"inline-block",paddingBottom:6},children:"ADDRESS"}),r.jsx("div",{style:{display:"grid",gap:12,fontSize:13},children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,color:"rgba(255,255,255,.7)",lineHeight:1.6},children:[r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0,marginTop:1},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:lt,strokeWidth:"1.7",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),r.jsx("span",{children:"Gurugram, Haryana"})]})})]})]}),r.jsxs("div",{style:{borderTop:"1px solid #1a1a1a",marginTop:28,paddingTop:14,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12,fontSize:12,color:"rgba(255,255,255,.45)"},children:[r.jsx("span",{children:"© 2026 HomWisor.com — Rishto Ki Shuruwat. All rights reserved. | RERA Registered"}),r.jsxs("span",{style:{display:"flex",gap:10,alignItems:"center"},children:[r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:lt,fontWeight:700,fontSize:10,border:"1px solid rgba(212,175,55,.25)"},children:"f"}),r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:lt,fontWeight:700,fontSize:10,border:"1px solid rgba(212,175,55,.25)"},children:"in"}),r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:lt,fontWeight:700,fontSize:10,border:"1px solid rgba(212,175,55,.25)"},children:"X"})]})]})]})}),r.jsx("style",{children:`
        @media(max-width:1100px){
          .footer-grid{ grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media(max-width:700px){
          .footer-grid{
            grid-template-columns: 1fr 1fr !important;
            gap: 20px 16px !important;
          }

          .footer-grid > div:first-child{
            grid-column: 1 / -1 !important;
          }
        }
      `})]})}const Wi="#D4AF37",Rc="#B9943A";function G1(){const[e,t]=E.useState({hero:[],small:[]}),[n,i]=E.useState([]),[o,a]=E.useState([]),[s,l]=E.useState([]),[d,c]=E.useState([]),[f,u]=E.useState([]),[x,k]=E.useState(!0);E.useEffect(()=>{async function A(){try{const[N,m,C,B,M,q]=await Promise.all([K.get("/banners"),K.get("/properties"),K.get("/locations"),K.get("/offers"),K.get("/builders").catch(()=>({data:[]})),K.get("/testimonials").catch(()=>({data:[]}))]);t(N.data),i(m.data),a(C.data),l(B.data),c(M.data||[]),u(q.data||[])}catch(N){console.error(N)}finally{k(!1)}}A()},[]),n.filter(A=>A.category==="recommended").slice(0,4),n.filter(A=>A.category==="trending").slice(0,4);const S=n.filter(A=>["₹19","₹28","₹16","₹5.2"].some(N=>A.priceRange&&A.priceRange.includes(N))||A.category==="trending").slice(0,4);[n.find(A=>A.title&&A.title.includes("Oberoi Three Sixty"))||n.find(A=>A.title&&A.title.includes("BPTP"))||S[0],n.find(A=>A.title&&A.title.includes("Experion One 42"))||S[1],n.find(A=>A.title&&A.title.includes("Max Estate 59"))||S[2],n.find(A=>A.title&&A.title.includes("BPTP DownTown"))||S[3]].filter(Boolean).slice(0,4);const b=n.filter(A=>A.category==="commercial").slice(0,4),R=n.filter(A=>A.category==="sco").slice(0,4),p=n.filter(A=>A.category==="upcoming").slice(0,4),h=n.filter(A=>A.category==="newlaunch").slice(0,4);if(x)return r.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#fff"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{width:48,height:48,border:"3px solid #eee",borderTopColor:Wi,borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 12px"}}),r.jsx("div",{style:{fontWeight:600,color:"#6b7280"},children:"Loading HomWisor luxury..."}),r.jsx("style",{children:`
              @keyframes spin{
                to{
                  transform:rotate(360deg)
                }
              }
            `})]})});b.length>=4||n.slice(4,8),R.length>=4||n.slice(8,12);const g=[{name:"Studio",sub:"Apartment",place:"in Gurugram",count:"320+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop"},{name:"1 BHK",sub:"in Gurugram",count:"980+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=500&fit=crop"},{name:"2 BHK",sub:"in Gurugram",count:"1,450+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop"},{name:"3 BHK",sub:"in Gurugram",count:"760+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop"},{name:"4 BHK",sub:"in Gurugram",count:"410+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop"},{name:"5 BHK",sub:"in Gurugram",count:"180+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=500&fit=crop"},{name:"Penthouse",sub:"in Gurugram",count:"95+ Properties",dark:!0,img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop"}];d.length;const j=f.length?f:[{id:"t1",name:"Aayush Gupta",initials:"AG",color:"#F59E0B",platform:"Google",verified:!0,rating:5,text:"Rajesh ji is awesome. One place stop for all your real estate deals. Good natured, an honest and god fearing person."},{id:"t2",name:"Soumya",initials:"SO",color:"#E9D5FF",textColor:"#6B21A8",platform:"Google",verified:!0,rating:5,text:"Honestly, had a really smooth experience with HomWisor. The team was friendly and actually listened to what I needed. They didn't waste my time with random options and only showed m..."},{id:"t3",name:"Amit Kumar",initials:"AK",color:"#D6D3D1",textColor:"#44403C",platform:"Google",verified:!0,rating:5,text:"HomWisor made my home buying journey smooth and hassle-free. Their attention to detail and customer service is exceptional."},{id:"t4",name:"Neha Gupta",initials:"NG",color:"#10B981",platform:"Google",verified:!0,rating:5,text:"Very professional team with deep knowledge of the market. They helped me find the perfect investment property with great returns."}];return r.jsxs("div",{style:{background:"#fcfcfc"},children:[r.jsx(Rr,{}),r.jsxs("section",{className:"hw-home-hero",children:[r.jsx(E1,{banners:e.hero}),r.jsx("div",{className:"hw-search-overlay",children:r.jsx(R1,{})})]}),r.jsx("section",{className:"hw-new-premium-slider",children:r.jsx(T1,{banners:e.hero})}),r.jsx(O1,{}),r.jsx(B1,{properties:n,locations:o,upcoming:p,newlaunch:h,offers:s}),r.jsxs("section",{className:"container hw-bhk-premium-section",style:{padding:"38px 16px 0"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:2},children:[r.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2.5,color:"#9A7A22"},children:"HOMWISOR"}),r.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}})]}),r.jsx("h2",{style:{fontSize:29,lineHeight:1.08,fontWeight:800,color:"#102A43",margin:"2px 0 3px",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.5px"},children:"Which BHK suits your lifestyle best?"}),r.jsx("p",{style:{fontSize:11,color:"#64748B",margin:0,lineHeight:1.4},children:"Find a home that fits you and tomorrow."}),r.jsx("div",{className:"bhk-grid hw-bhk-premium-grid",style:{display:"grid",gridTemplateColumns:"repeat(6, minmax(0, 1fr))",gap:9,marginTop:10,overflowX:"auto",paddingBottom:2},children:g.slice(0,6).map((A,N)=>{const m=[{bg:"#FFF8ED",iconBg:"#FFF0D6",icon:"#A87522"},{bg:"#F2F8FD",iconBg:"#DDECF8",icon:"#2871A8"},{bg:"#FFF5F6",iconBg:"#FBE0E3",icon:"#C75B66"},{bg:"#F3F6FC",iconBg:"#DDE7F7",icon:"#31598C"},{bg:"#F2F8F3",iconBg:"#DDEEDC",icon:"#5B7D3C"},{bg:"#F6F2FC",iconBg:"#E7DFF7",icon:"#66509A"}][N],C=["▦","▰","▰","♟","◇","♛"];return r.jsxs(H,{to:`/search?bhk=${encodeURIComponent(A.name)}`,className:"hw-bhk-premium-card",style:{minWidth:0,borderRadius:7,overflow:"hidden",border:"1px solid #E5E7EB",background:m.bg,display:"block",textDecoration:"none",boxShadow:"0 1px 5px rgba(15,23,42,.04)"},children:[r.jsxs("div",{style:{padding:"8px 8px 7px",minHeight:103},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:m.iconBg,color:m.icon,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,marginBottom:7},children:C[N]}),r.jsx("div",{style:{fontSize:13,lineHeight:1.1,fontWeight:800,color:"#183B5B"},children:A.name}),r.jsxs("div",{style:{fontSize:8.5,fontWeight:600,color:"#64748B",marginTop:2},children:[A.sub," ",A.place?A.place.replace(/^in\s*/i,"in "):"in Gurugram"]}),r.jsx("div",{style:{fontSize:8,color:"#64748B",marginTop:8},children:A.count})]}),r.jsxs("div",{style:{height:143,position:"relative",overflow:"hidden"},children:[r.jsx("img",{src:A.img,alt:A.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),r.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:38,background:"linear-gradient(to top, rgba(15,23,42,.22), transparent)"}})]})]},A.name)})})]}),r.jsxs("section",{className:"container hw-why-premium-section",style:{padding:"30px 16px 0"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:18},children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:4},children:[r.jsx("span",{style:{width:34,height:1,background:Wi,display:"inline-block"}}),r.jsx("span",{style:{fontSize:10,letterSpacing:2.5,fontWeight:800,color:"#9A7A22"},children:"HOMWISOR"}),r.jsx("span",{style:{width:34,height:1,background:Wi,display:"inline-block"}})]}),r.jsx("h2",{style:{margin:0,fontSize:36,lineHeight:1.08,fontWeight:800,color:"#102A43",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.4px"},children:"Why Choose Us"}),r.jsx("p",{style:{margin:"5px auto 0",maxWidth:650,fontSize:12,lineHeight:1.5,color:"#64748B"},children:"India's trusted real estate platform for verified properties, direct builder pricing, and complete end-to-end guidance."})]}),r.jsx("div",{className:"hw-why-feature-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:[{no:"01",title:"100% Verified Listings",desc:"Every property listing undergoes rigorous physical and legal verification. Genuine photos, accurate pricing, and title ownership put fake listings.",icon:"✓",iconBg:"#FFF0D2",iconColor:"#A66A18",bg:"#FFF9EF",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&h=520&fit=crop"},{no:"02",title:"Direct Builder Rates",desc:"We connect you directly with top-tier developers, ensuring transparent deal structures, best price guarantees, and zero hidden brokerage charges.",icon:"◇",iconBg:"#E5F0FC",iconColor:"#376D9F",bg:"#F4F9FD",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=520&fit=crop"},{no:"03",title:"Free Guided Site Visits",desc:"Schedule doorstep property site visits with experienced specialists who provide personalized advice tailored to your budget.",icon:"♟",iconBg:"#DDF0DE",iconColor:"#3F7D4C",bg:"#F3FAF3",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=520&fit=crop"}].map(A=>r.jsxs("div",{className:"hw-why-feature-card",style:{position:"relative",height:205,minWidth:0,overflow:"hidden",borderRadius:6,border:"1px solid #E5E7EB",background:A.bg,display:"flex"},children:[r.jsxs("div",{style:{position:"relative",zIndex:2,width:"58%",padding:"17px 14px 10px",background:A.bg,clipPath:"ellipse(90% 78% at 0% 50%)"},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:A.iconBg,color:A.iconColor,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:900,marginBottom:6},children:A.icon}),r.jsx("div",{style:{width:26,height:1,background:A.iconColor,opacity:.35,margin:"0 0 5px"}}),r.jsx("div",{style:{fontSize:15,lineHeight:1.12,fontWeight:800,color:"#17324D"},children:A.title}),r.jsx("div",{style:{fontSize:11.2,lineHeight:1.4,color:"#64748B",marginTop:5,maxWidth:170},children:A.desc}),r.jsx("div",{style:{position:"absolute",left:10,bottom:2,fontSize:28,lineHeight:1,fontWeight:800,color:A.iconColor,opacity:.2},children:A.no})]}),r.jsx("div",{style:{position:"absolute",inset:"0 0 0 42%",overflow:"hidden"},children:r.jsx("img",{src:A.image,alt:A.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}})})]},A.title))}),r.jsx("div",{className:"hw-why-stats",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",marginTop:7,background:"#fff",border:"1px solid #E8E1D3",borderRadius:5,overflow:"hidden",boxShadow:"0 2px 8px rgba(15,23,42,.05)"},children:[["25K+","Verified Properties","▦"],["10K+","Happy Customers","♟"],["500+","Top Developers","▦"],["50+","Cities Covered","●"],["24×7","Expert Support","◉"]].map((A,N)=>r.jsxs("div",{style:{minWidth:0,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"11px 7px",borderRight:N<4?"1px solid #E8E1D3":"none"},children:[r.jsx("div",{style:{width:30,height:30,flexShrink:0,borderRadius:"50%",background:"#FFF7ED",color:Rc,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800},children:A[2]}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontSize:12,lineHeight:1,fontWeight:800,color:"#17324D"},children:A[0]}),r.jsx("div",{style:{fontSize:10,lineHeight:1.25,color:"#64748B",marginTop:2,whiteSpace:"nowrap"},children:A[1]})]})]},A[1]))})]}),r.jsxs("section",{className:"container hw-testimonials-premium",style:{padding:"34px 16px 0"},children:[r.jsxs("section",{className:"container hw-testimonials-premium",children:[r.jsxs("div",{className:"hw-testimonial-heading",children:[r.jsxs("div",{className:"hw-testimonial-eyebrow",children:[r.jsx("span",{}),r.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),r.jsx("span",{})]}),r.jsx("h2",{children:"Customer Testimonials"}),r.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),r.jsx("div",{className:"hw-testimonial-grid",children:j.slice(0,4).map((A,N)=>r.jsxs("div",{className:"hw-testimonial-card",children:[r.jsxs("div",{className:"hw-testimonial-top",children:[r.jsx("div",{className:"hw-review-icon",style:{background:A.color||"#E5E7EB",color:A.textColor||"#64748B"},children:"“"}),r.jsxs("div",{className:"hw-google",children:[r.jsx("span",{className:"google-g",children:"G"}),r.jsx("span",{children:"Google"})]})]}),r.jsx("div",{className:"hw-testimonial-stars",children:"★★★★★"}),r.jsxs("div",{className:"hw-testimonial-review",children:['"',A.text,'"']}),r.jsxs("div",{className:"hw-testimonial-user",children:[r.jsx("div",{className:"hw-testimonial-avatar",style:{background:A.color||"#E5E7EB",color:A.textColor||"#475569"},children:A.initials}),r.jsxs("div",{className:"hw-testimonial-user-info",children:[r.jsx("div",{className:"hw-testimonial-name",children:A.name}),r.jsx("div",{className:"hw-testimonial-verified",children:"VERIFIED BUYER"})]})]})]},A.id))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:6,marginTop:10},children:[0,1,2,3].map((A,N)=>r.jsx("span",{style:{width:N===0?7:6,height:N===0?7:6,borderRadius:"50%",background:N===0?Rc:"#D1D5DB",display:"none"}},A))})]}),r.jsx(Ou,{}),r.jsx("div",{className:"container",style:{padding:"22px 16px"},children:r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,background:"#fff",border:`1px solid ${Wi}`,borderRadius:14,padding:16},className:"stats-grid",children:[["500+","Premium Projects"],["50K+","Happy Families"],["15+","Years Experience"],["4.8★","Customer Rating"]].map(A=>r.jsxs("div",{style:{textAlign:"center",padding:"8px 0"},children:[r.jsx("div",{style:{fontWeight:800,fontSize:22,color:"#111"},children:A[0]}),r.jsx("div",{style:{fontSize:12,color:"#6b7280",fontWeight:600},children:A[1]})]},A[1]))})}),r.jsx(Cr,{})]})}const V1="/assets/test1-Bhn6Q40Z.png",q1="/assets/test2-4YsetXgN.png",Y1="/assets/test3-CgDiknys.png",K1="/assets/test4-DV0Q2HbY.png",yt="#D4AF37",ar="#9A7418",$1="#090909",Oa="#F7F5EF",X1=[V1,q1,Y1,K1],Q1=[["01","Integrity","We build relationships through honest guidance and responsible advice."],["02","Accountability","We stay involved and take responsibility throughout the property journey."],["03","Professionalism","Experienced, informed and focused on delivering a smooth experience."],["04","Customer First","Your requirements, priorities and long-term goals remain at the centre."],["05","Transparency","Clear communication and straightforward property guidance at every step."],["06","Improvement","We continuously improve our market knowledge and client experience."]],Z1=[{name:"Mr. Brejendra Singh",role:"Founder & CEO",text:"A real estate veteran with 15+ years of expertise, known for deep market knowledge and investment insights."},{name:"Mr. Birendra Patel",role:"Founder & CMO",text:"Brings over 13 years of distinguished real estate experience with a strong focus on market intelligence."},{name:"Mr. Lokendra Singh",role:"Manager",text:"Brings deep knowledge of Gurgaon micro-markets with a strong market understanding and client-focused approach."},{name:"Mr. Mukul Yadav",role:"Manager",text:"A dedicated real estate consultant focused on helping clients find the right investment opportunities."}],J1=[{date:"JUL 30, 2026",category:"REAL ESTATE NEWS",title:"Moti Nagar Metro Station on Delhi Metro Blue Line",text:"Explore connectivity, location advantages and the role of the Blue Line in West Delhi real estate."},{date:"JUL 29, 2026",category:"REAL ESTATE NEWS",title:"BPTP Downtown 66 Phase 2 Is Here",text:"A look at the new phase and what buyers should know about the Gurgaon development."},{date:"JUL 28, 2026",category:"REAL ESTATE NEWS",title:"Sector 49 Gurgaon: Real Estate Prices & Metro Expansion",text:"Understand the locality, connectivity and changing real estate landscape of Sector 49 Gurgaon."}],e2=[{quote:"The team understood our requirements, guided us throughout the process and helped us find a better-fit property and location.",name:"Sharat M. Airani",company:"Hindustan Unilever"},{quote:"The Gurgaon market knowledge, responsiveness and professional support made our home-buying journey smooth and hassle-free.",name:"Ashutosh Sharma",company:"TATA Consumers Pvt. Ltd."},{quote:"Their transparent communication and client-focused guidance made the entire process comfortable from the initial stage to possession.",name:"Ashok Yende",company:"Reliance Industries"}];function t2(){return r.jsxs("div",{className:"about-page",children:[r.jsx(Rr,{}),r.jsxs("section",{className:"about-hero",children:[r.jsx("div",{className:"about-hero-glow"}),r.jsx("div",{className:"about-hero-grid"}),r.jsxs("div",{className:"about-container about-hero-inner",children:[r.jsx("div",{className:"about-kicker",children:"TRUSTED REAL ESTATE CONSULTANTS"}),r.jsxs("h1",{children:["Real Estate,",r.jsx("br",{}),r.jsx("span",{children:"Guided With Wisdom."})]}),r.jsx("p",{children:"Since 2016, we’ve guided families and investors toward the perfect homes, premium office spaces, and smart real estate opportunities across Gurgaon and Delhi NCR."}),r.jsx("div",{className:"about-hero-actions",children:r.jsx("a",{href:"/contact/",className:"about-btn about-btn-gold",children:"Talk to an Expert"})})]})]}),r.jsx("section",{className:"about-section about-who",children:r.jsxs("div",{className:"about-container about-two-col",children:[r.jsxs("div",{className:"about-real-image",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88",alt:"Premium modern home interior"}),r.jsxs("div",{className:"image-overlay-card",children:[r.jsx("span",{children:"EST. 2016"}),r.jsx("strong",{children:"Homwisor"}),r.jsx("small",{children:"Real Estate Consultants"})]}),r.jsx("div",{className:"image-corner-number",children:"01"})]}),r.jsxs("div",{className:"about-copy",children:[r.jsx("div",{className:"about-eyebrow",children:"WHO WE ARE"}),r.jsx("h2",{children:"Property is more than a transaction."}),r.jsx("p",{children:"Homwisor Consultant believes that buying a property is more than just a transaction — it is a life-changing decision connected to dreams, security and future growth."}),r.jsx("p",{children:"Built on the vision of combining the comfort of a dream home with the wisdom of expert real estate guidance, Homwisor helps clients navigate property opportunities with clarity and confidence."}),r.jsxs("div",{className:"about-points",children:[r.jsxs("div",{children:[r.jsx("b",{children:"✓"})," Expert property guidance"]}),r.jsxs("div",{children:[r.jsx("b",{children:"✓"})," Market-focused recommendations"]}),r.jsxs("div",{children:[r.jsx("b",{children:"✓"})," Residential & commercial expertise"]}),r.jsxs("div",{children:[r.jsx("b",{children:"✓"})," Support throughout the journey"]})]})]})]})}),r.jsx("section",{className:"about-section about-values",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-heading-center",children:[r.jsx("div",{className:"about-eyebrow",children:"OUR CORE VALUES"}),r.jsxs("h2",{children:["Principles that shape ",r.jsx("span",{children:"Homwisor."})]}),r.jsx("p",{children:"Integrity, accountability, professionalism and a customer-first approach at every step."})]}),r.jsx("div",{className:"values-grid",children:Q1.map(([e,t,n])=>r.jsxs("article",{className:"value-card",children:[r.jsxs("div",{className:"value-top",children:[r.jsx("span",{children:e}),r.jsx("i",{children:"↗"})]}),r.jsx("h3",{children:t}),r.jsx("p",{children:n})]},t))})]})}),r.jsx("section",{className:"about-section about-leaders",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-heading-row",children:[r.jsxs("div",{children:[r.jsx("div",{className:"about-eyebrow",children:"OUR TEAM"}),r.jsxs("h2",{children:["Visionary ",r.jsx("span",{children:"Real Estate Leaders"})]})]}),r.jsx("p",{children:"Experienced professionals bringing market knowledge and client-focused real estate guidance."})]}),r.jsx("div",{className:"leaders-grid",children:Z1.map((e,t)=>r.jsxs("article",{className:"leader-card",children:[r.jsxs("div",{className:"leader-image-wrap",children:[r.jsx("img",{src:X1[t],alt:`${e.name} professional portrait`}),r.jsxs("div",{className:"leader-number",children:["0",t+1]})]}),r.jsxs("div",{className:"leader-content",children:[r.jsx("div",{className:"leader-role",children:e.role}),r.jsx("h3",{children:e.name}),r.jsx("p",{children:e.text})]})]},e.name))})]})}),r.jsx("section",{className:"about-section about-news",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-heading-row",children:[r.jsxs("div",{children:[r.jsx("div",{className:"about-eyebrow",children:"READ FROM OUR BLOGS & NEWS"}),r.jsxs("h2",{children:["Insights for ",r.jsx("span",{children:"smarter decisions."})]})]}),r.jsxs("a",{href:"/blog/",className:"news-link",children:["View All Articles ",r.jsx("span",{children:"↗"})]})]}),r.jsx("div",{className:"blog-grid",children:J1.map(e=>r.jsxs("article",{className:"blog-card",children:[r.jsxs("div",{className:"blog-image",children:[r.jsx("img",{src:`https://images.unsplash.com/photo-${e.title.includes("Moti")?"1477959858617-67f85cf4f1df":e.title.includes("BPTP")?"1564013799919-ab600027ffc6":"1560518883-ce09059eeffa"}?auto=format&fit=crop&w=900&q=82`,alt:"Real estate news"}),r.jsx("span",{children:e.category})]}),r.jsxs("div",{className:"blog-content",children:[r.jsx("small",{children:e.date}),r.jsx("h3",{children:e.title}),r.jsx("p",{children:e.text}),r.jsxs("a",{href:"/blog/",children:["Read Article ",r.jsx("span",{children:"→"})]})]})]},e.title))})]})}),r.jsx("section",{className:"about-section about-testimonials",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-heading-center",children:[r.jsx("div",{className:"about-eyebrow",children:"TESTIMONIALS"}),r.jsxs("h2",{children:["Our Happy ",r.jsx("span",{children:"Customers."})]}),r.jsx("p",{children:"Real experiences from clients who trusted Homwisor with their property journey."})]}),r.jsx("div",{className:"testimonial-grid",children:e2.map(e=>r.jsxs("article",{className:"testimonial-card",children:[r.jsx("div",{className:"quote-mark",children:"“"}),r.jsx("p",{children:e.quote}),r.jsxs("div",{className:"testimonial-person",children:[r.jsx("div",{className:"testimonial-initial",children:e.name.charAt(0)}),r.jsxs("div",{children:[r.jsx("strong",{children:e.name}),r.jsx("span",{children:e.company})]})]})]},e.name))})]})}),r.jsx(Cr,{}),r.jsx("style",{children:`
        * { box-sizing: border-box; }
        .about-page { min-height: 100vh; background: ${Oa}; color:#111; font-family:"Manrope","Inter",Arial,sans-serif; overflow:hidden; }
        .about-page,.about-page * { font-family:"Manrope","Inter",Arial,sans-serif; }
        .about-container { width:min(1180px,calc(100% - 40px)); margin:0 auto; }

        .about-hero {
          min-height:430px;
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
          text-align:center;
          background:
            radial-gradient(circle at 82% 28%, rgba(212,175,55,.16), transparent 30%),
            linear-gradient(135deg, #050505 0%, #0d0d0d 55%, #1a160d 100%);
          color:#fff;
        }
        .about-hero:after {
          content:"";
          position:absolute;
          width:580px;
          height:580px;
          right:-180px;
          bottom:-260px;
          border:1px solid rgba(212,175,55,.34);
          border-radius:50%;
          box-shadow:0 0 0 65px rgba(212,175,55,.045),0 0 0 130px rgba(212,175,55,.025);
        }
        .about-hero-glow {
          position:absolute;
          width:500px;
          height:500px;
          right:10%;
          top:8%;
          border-radius:50%;
          background:rgba(212,175,55,.08);
          filter:blur(85px);
        }
        .about-hero-grid { display:none; }
        .about-hero-inner {
          position:relative;
          z-index:2;
          width:100%;
          padding:120px 20px 70px;
          text-align:center;
        }
        .about-kicker,.about-eyebrow {
          color:${yt};
          font-size:10px;
          font-weight:900;
          letter-spacing:2px;
        }
        .about-hero h1 {
          max-width:760px;
          margin:15px auto 0;
          color:#fff;
          font-size:clamp(38px,5vw,64px);
          line-height:1.08;
          font-weight:850;
          letter-spacing:-2px;
        }
        .about-hero h1 span {
          color:${yt};
          display:block;
        }
        .about-hero p {
          max-width:600px;
          margin:20px auto 0;
          color:rgba(255,255,255,.72);
          font-size:14px;
          line-height:1.8;
        }
        .about-hero-actions { display:none; }
        .about-btn { min-height:48px; padding:0 24px; border-radius:8px; display:inline-flex; align-items:center; justify-content:center; text-decoration:none; font-size:12px; font-weight:800; transition:.25s ease; }
        .about-btn-gold { background:${yt}; color:#111; }
        .about-btn-gold:hover { background:#e6c454; transform:translateY(-2px); }
        .about-btn-light { border:1px solid rgba(255,255,255,.28); color:#fff; background:rgba(255,255,255,.05); }
        .about-btn-light:hover { background:#fff; color:#111; }
        .hero-scroll-label { margin-top:80px; color:rgba(255,255,255,.4); font-size:9px; letter-spacing:2px; font-weight:800; }
        .hero-scroll-label span { color:${yt}; font-size:15px; margin-left:8px; }

        .about-stats-wrap { position:relative; z-index:5; margin-top:-55px; }
        .about-stats { display:grid; grid-template-columns:repeat(4,1fr); background:#fff; border:1px solid #e7e0cf; border-radius:18px; box-shadow:0 18px 50px rgba(0,0,0,.08); overflow:hidden; }
        .about-stats div { padding:27px 25px; border-right:1px solid #eee8dc; }
        .about-stats div:last-child { border-right:0; }
        .about-stats strong { display:block; font-size:30px; font-weight:900; color:${$1}; }
        .about-stats span { display:block; margin-top:5px; color:#777; font-size:11px; font-weight:700; }

        .about-section { padding:52px 0; }
        .about-who { background:#fff; }
        .about-two-col { display:grid; grid-template-columns:.95fr 1.05fr; gap:55px; align-items:center; }
        .about-real-image { height:470px; position:relative; border-radius:24px; overflow:hidden; background:#111; box-shadow:0 28px 65px rgba(0,0,0,.14); }
        .about-real-image img { width:100%; height:100%; object-fit:cover; display:block; }
        .about-real-image:after { content:""; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.58),transparent 55%); }
        .image-overlay-card { position:absolute; z-index:2; left:26px; bottom:26px; color:#fff; }
        .image-overlay-card span { display:block; color:${yt}; font-size:10px; letter-spacing:2px; font-weight:800; }
        .image-overlay-card strong { display:block; margin-top:5px; font-size:28px; font-weight:900; }
        .image-overlay-card small { display:block; margin-top:2px; color:rgba(255,255,255,.72); font-size:11px; }
        .image-corner-number { position:absolute; z-index:2; right:24px; top:20px; color:rgba(255,255,255,.75); font-size:12px; font-weight:900; letter-spacing:2px; }
        .about-copy h2,.about-heading-center h2,.about-heading-row h2 { margin:13px 0 18px; color:#111; font-size:36px; line-height:1.03; letter-spacing:-2.3px; font-weight:900; }
        .about-copy h2 { max-width:620px; }
        .about-copy p { max-width:650px; margin:0 0 15px; color:#626262; font-size:14px; line-height:1.9; }
        .about-points { display:grid; grid-template-columns:1fr 1fr; gap:13px 20px; margin-top:28px; }
        .about-points div { color:#333; font-size:12px; font-weight:750; }
        .about-points b { color:${ar}; margin-right:7px; }

        .about-values { background:${Oa}; }
        .about-heading-center { max-width:760px; margin:0 auto 32px; text-align:center; }
        .about-heading-center h2 { margin-bottom:12px; }
        .about-heading-center h2 span,.about-heading-row h2 span { color:${ar}; }
        .about-heading-center p,.about-heading-row > p { margin:0; color:#777; font-size:13px; line-height:1.75; }
        .values-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .value-card { min-height:205px; padding:25px; border:1px solid #e4dccb; border-radius:16px; background:#fff; transition:.25s ease; }
        .value-card:hover { transform:translateY(-5px); border-color:rgba(212,175,55,.65); box-shadow:0 18px 40px rgba(0,0,0,.07); }
        .value-top { display:flex; align-items:center; justify-content:space-between; }
        .value-top span { color:${ar}; font-size:11px; font-weight:900; letter-spacing:1px; }
        .value-top i { color:#c6c0b4; font-style:normal; font-size:17px; }
        .value-card h3 { margin:38px 0 8px; font-size:19px; color:#111; }
        .value-card p { margin:0; color:#777; font-size:11.5px; line-height:1.7; }

        .about-leaders { background:#fff; }
        .about-heading-row { display:flex; align-items:end; justify-content:space-between; gap:40px; margin-bottom:32px; }
        .about-heading-row h2 { max-width:720px; margin-bottom:0; }
        .about-heading-row > p { max-width:330px; padding-bottom:4px; }
        .leaders-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .leader-card { border:1px solid #e9e5dc; border-radius:18px; background:#fff; overflow:hidden; transition:.25s ease; }
        .leader-card:hover { transform:translateY(-5px); box-shadow:0 20px 45px rgba(0,0,0,.08); }
        .leader-image-wrap { height:310px; position:relative; background:#e9e5dc; overflow:hidden; }
        .leader-image-wrap img { width:100%; height:100%; display:block; object-fit:cover; filter:saturate(.88); transition:.4s ease; }
        .leader-card:hover .leader-image-wrap img { transform:scale(1.04); }
        .leader-image-wrap:after { content:""; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.25),transparent 55%); pointer-events:none; }
        .leader-number { position:absolute; z-index:2; right:16px; top:15px; color:#fff; font-size:24px; font-weight:900; text-shadow:0 2px 10px rgba(0,0,0,.3); }
        .leader-content { padding:21px 19px 23px; }
        .leader-role { color:${ar}; font-size:9px; font-weight:800; text-transform:uppercase; letter-spacing:1.4px; }
        .leader-card h3 { margin:7px 0 7px; font-size:15px; color:#111; }
        .leader-card p { margin:0; color:#777; font-size:11px; line-height:1.7; }

        .about-news { background:${Oa}; }
        .news-link { flex:0 0 auto; color:#111; font-size:11px; font-weight:800; text-decoration:none; border-bottom:1px solid ${yt}; padding-bottom:6px; }
        .news-link span { color:${ar}; margin-left:6px; }
        .blog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .blog-card { background:#fff; border:1px solid #e4dccb; border-radius:17px; overflow:hidden; transition:.25s ease; }
        .blog-card:hover { transform:translateY(-4px); box-shadow:0 18px 42px rgba(0,0,0,.08); }
        .blog-image { height:230px; position:relative; overflow:hidden; background:#ddd; }
        .blog-image img { width:100%; height:100%; object-fit:cover; display:block; transition:.4s ease; }
        .blog-card:hover .blog-image img { transform:scale(1.04); }
        .blog-image span { position:absolute; left:15px; top:15px; padding:7px 9px; background:rgba(0,0,0,.72); color:${yt}; font-size:8px; font-weight:800; letter-spacing:1px; }
        .blog-content { padding:22px; }
        .blog-content small { color:${ar}; font-size:9px; font-weight:800; letter-spacing:1.5px; }
        .blog-content h3 { margin:11px 0 9px; color:#111; font-size:18px; line-height:1.25; }
        .blog-content p { margin:0; color:#777; font-size:11px; line-height:1.7; }
        .blog-content a { display:inline-block; margin-top:17px; color:#111; text-decoration:none; font-size:10px; font-weight:800; }
        .blog-content a span { color:${ar}; margin-left:5px; }

        .about-testimonials { background:#fff; }
        .testimonial-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .testimonial-card { position:relative; padding:30px 25px 25px; border:1px solid #e8e3d9; border-radius:17px; background:#fff; }
        .quote-mark { color:${yt}; font-family:Georgia,serif !important; font-size:56px; line-height:.6; }
        .testimonial-card > p { margin:20px 0 25px; color:#555; font-size:12px; line-height:1.85; }
        .testimonial-person { display:flex; align-items:center; gap:11px; border-top:1px solid #eee9df; padding-top:17px; }
        .testimonial-initial { width:38px; height:38px; border-radius:50%; display:grid; place-items:center; background:#111; color:${yt}; font-size:13px; font-weight:900; }
        .testimonial-person strong { display:block; color:#111; font-size:11px; }
        .testimonial-person span { display:block; margin-top:3px; color:#888; font-size:9px; }

        .about-cta { padding:42px 0; background:#0b0b0b; color:#fff; }
        .about-cta-inner { display:flex; align-items:center; justify-content:space-between; gap:35px; }
        .about-cta .about-eyebrow.light { color:${yt}; }
        .about-cta h2 { margin:10px 0 8px; font-size:36px; line-height:1.08; letter-spacing:-1.5px; }
        .about-cta p { margin:0; color:rgba(255,255,255,.65); font-size:13px; }

        @media (max-width:1000px) {
          .about-hero h1 { font-size:36px; }
          .about-two-col { gap:45px; }
          .leaders-grid { grid-template-columns:repeat(2,1fr); }
          .leader-image-wrap { height:360px; }
        }
        @media (max-width:760px) {
          .about-container { width:min(100% - 24px,1180px); }
          .about-hero { min-height:390px; }
          .about-hero-inner { padding:110px 18px 55px; }
          .about-hero h1 { font-size:38px; line-height:1.08; letter-spacing:-1px; }
          .about-hero p { font-size:12px; line-height:1.7; }
          .hero-scroll-label { margin-top:30px; }
          .about-stats-wrap { margin-top:-28px; }
          .about-stats { grid-template-columns:repeat(2,1fr); }
          .about-stats div { padding:19px 15px; border-right:1px solid #eee8dc; border-bottom:1px solid #eee8dc; }
          .about-stats div:nth-child(2),.about-stats div:nth-child(4) { border-right:0; }
          .about-stats div:nth-child(3),.about-stats div:nth-child(4) { border-bottom:0; }
          .about-stats strong { font-size:23px; }
          .about-section { padding:38px 0; }
          .about-two-col { grid-template-columns:1fr; gap:28px; }
          .about-real-image { height:330px; border-radius:19px; }
          .about-copy h2,.about-heading-center h2,.about-heading-row h2 { font-size:36px; letter-spacing:-1.2px; }
          .about-copy p { font-size:12px; }
          .about-points { grid-template-columns:1fr; }
          .values-grid { grid-template-columns:1fr 1fr; gap:10px; }
          .value-card { min-height:190px; padding:19px; }
          .value-card h3 { margin-top:28px; font-size:16px; }
          .value-card p { font-size:10.5px; }
          .about-heading-row { align-items:flex-start; flex-direction:column; gap:18px; margin-bottom:32px; }
          .about-heading-row > p { max-width:100%; }
          .leaders-grid { grid-template-columns:1fr 1fr; gap:10px; }
          .leader-image-wrap { height:240px; }
          .leader-content { padding:16px 14px 18px; }
          .leader-card h3 { font-size:13px; }
          .leader-card p { font-size:10px; }
          .blog-grid { grid-template-columns:1fr; gap:12px; }
          .blog-image { height:220px; }
          .testimonial-grid { grid-template-columns:1fr; gap:12px; }
          .about-cta-inner { flex-direction:column; align-items:flex-start; }
          .about-cta .about-btn { width:100%; }
        }
        @media (max-width:520px) {
          .about-container { width:min(100% - 20px,1180px); }
          .about-hero { min-height:390px; }
          .about-hero-inner { padding:110px 18px 55px; }
          .about-kicker { font-size:8px; letter-spacing:1.5px; }
          .about-hero p { max-width:100%; font-size:12px; line-height:1.7; }
          .about-stats-wrap { margin-top:-18px; }
          .about-stats div { padding:15px 10px; }
          .about-stats span { font-size:8px; }
          .about-section { padding:32px 0; }
          .about-heading-center { margin-bottom:28px; }
          .about-copy h2,.about-heading-center h2,.about-heading-row h2 { font-size:36px; letter-spacing:-1.2px; margin:9px 0 13px; }
          .about-eyebrow { font-size:8px; letter-spacing:1.5px; }
          .about-real-image { height:270px; }
          .image-overlay-card { left:17px; bottom:17px; }
          .image-overlay-card strong { font-size:21px; }
          .about-points { gap:9px; margin-top:20px; }
          .values-grid { gap:8px; }
          .value-card { min-height:165px; padding:15px; border-radius:12px; }
          .value-card h3 { margin-top:23px; font-size:14px; }
          .value-card p { font-size:9.5px; line-height:1.55; }
          .leaders-grid { gap:8px; }
          .leader-image-wrap { height:185px; }
          .leader-content { padding:12px 10px 14px; }
          .blog-content { padding:17px; }
          .testimonial-card { padding:22px 18px 19px; }
          .about-cta { padding:42px 0; }
        }
        @media (max-width:420px) {
          .about-hero h1 { font-size:38px; letter-spacing:-1px; }
          .about-hero-actions { flex-direction:column; }
          .about-hero-actions .about-btn { width:100%; }
          .about-real-image { height:260px; }
          .values-grid,.leaders-grid { grid-template-columns:1fr 1fr; }
          .leader-image-wrap { height:190px; }
          .leader-content { padding:13px 11px 15px; }
          .leader-card h3 { font-size:11.5px; }
          .leader-role { font-size:7.5px; }
          .leader-card p { font-size:9px; line-height:1.55; }
        }
      `})]})}const Cc="#D4AF37",Or="#9A7418",Nc="#090909";function r2(){const[e,t]=gx(),[n,i]=E.useState([]),[o,a]=E.useState([]),[s,l]=E.useState(e.get("q")||""),[d,c]=E.useState(e.get("type")||""),[f,u]=E.useState(e.get("location")||""),[x,k]=E.useState(e.get("category")||""),[S,b]=E.useState("");E.useEffect(()=>{K.get("/properties").then(m=>{i(Array.isArray(m.data)?m.data:[])}).catch(()=>{i([])})},[]),E.useEffect(()=>{let m=[...n];const C=e.get("q")||s,B=e.get("type")||d,M=e.get("location")||f,q=e.get("category")||x;if(C){const $=C.toLowerCase();m=m.filter(F=>{const P=String((F==null?void 0:F.title)||"").toLowerCase(),Z=String((F==null?void 0:F.location)||(F==null?void 0:F.locality)||"").toLowerCase();return P.includes($)||Z.includes($)})}if(B&&B!=="All"){const $=B.toLowerCase();m=m.filter(F=>{const P=String((F==null?void 0:F.type)||(F==null?void 0:F.propertyType)||"").toLowerCase(),Z=String((F==null?void 0:F.bhk)||"").toLowerCase();return P.includes($)||Z.includes($)})}if(M){const $=M.toLowerCase();m=m.filter(F=>String((F==null?void 0:F.location)||(F==null?void 0:F.locality)||"").toLowerCase().includes($))}q&&(m=m.filter($=>String(($==null?void 0:$.category)||"").toLowerCase()===q.toLowerCase())),a(m)},[n,e,s,d,f,x,S]);const R=()=>{const m=new URLSearchParams;s&&m.set("q",s),d&&m.set("type",d),f&&m.set("location",f),x&&m.set("category",x),t(m)},p=()=>{l(""),c(""),u(""),k(""),b(""),t({})},h="919999999999",g=m=>{const C=(m==null?void 0:m.title)||(m==null?void 0:m.name)||"this property",B=encodeURIComponent(`Hi, I am interested in ${C}. Please share more details.`);return`https://wa.me/${h}?text=${B}`},j=m=>{const C=(m==null?void 0:m.priceRange)||(m==null?void 0:m.price)||"0",B=String(C).replace(/,/g,"").replace(/[^0-9.]/g,"");return parseFloat(B)||0},A=m=>{const C=[...o];m==="price-low"&&C.sort((B,M)=>j(B)-j(M)),m==="price-high"&&C.sort((B,M)=>j(M)-j(B)),a(C)},N=({property:m,index:C})=>{var I;const B=(m==null?void 0:m.id)||(m==null?void 0:m._id)||C,M=(m==null?void 0:m.image)||(m==null?void 0:m.thumbnail)||((I=m==null?void 0:m.images)==null?void 0:I[0])||"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",q=(m==null?void 0:m.title)||(m==null?void 0:m.name)||"Premium Property",$=(m==null?void 0:m.priceRange)||(m==null?void 0:m.price)||"Price on Request",F=(m==null?void 0:m.location)||(m==null?void 0:m.locality)||"Gurugram",P=(m==null?void 0:m.bhk)||"3 & 4 BHK",Z=(m==null?void 0:m.area)||(m==null?void 0:m.size)||"2,500+ Sq.Ft.",w=(m==null?void 0:m.propertyType)||(m==null?void 0:m.type)||"";return r.jsxs(H,{to:`/property/${B}`,className:"search-property-card",children:[r.jsxs("div",{className:"search-property-image",children:[r.jsx("img",{src:M,alt:q,loading:"lazy"}),r.jsx("div",{className:"search-image-overlay"}),(m==null?void 0:m.rera)!==!1&&r.jsx("div",{className:"search-rera-group",children:r.jsxs("span",{className:"search-rera",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"search-bhk-badge",children:[P,w?` • ${w}`:""]})]}),r.jsxs("div",{className:"search-property-content",children:[r.jsx("h3",{children:q}),r.jsx("div",{className:"search-card-price",children:$}),r.jsxs("div",{className:"search-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:F})]}),r.jsxs("div",{className:"search-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:P})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:Z})]})]}),r.jsxs("a",{href:g(m),target:"_blank",rel:"noopener noreferrer",className:"search-card-whatsapp",onClick:T=>T.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]})};return r.jsxs("div",{className:"search-page",children:[r.jsx(Rr,{}),r.jsxs("div",{className:"search-container",children:[r.jsxs("div",{className:"search-breadcrumb",children:[r.jsx(H,{to:"/",children:"Home"}),r.jsx("span",{children:"›"}),r.jsx("span",{children:"Projects in Gurugram"})]}),r.jsxs("div",{className:"search-layout",children:[r.jsxs("aside",{className:"filter-sidebar",children:[r.jsxs("div",{className:"filter-header",children:[r.jsx("h3",{children:"Filters"}),r.jsx("button",{onClick:p,children:"Clear All"})]}),r.jsxs("div",{className:"filter-fields",children:[r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"SEARCH"}),r.jsx("input",{value:s,onChange:m=>l(m.target.value),placeholder:"Project, Builder..."})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"PROPERTY TYPE"}),r.jsxs("select",{value:d,onChange:m=>c(m.target.value),children:[r.jsx("option",{value:"",children:"All Types"}),r.jsx("option",{children:"Apartment"}),r.jsx("option",{children:"Villa"}),r.jsx("option",{children:"Builder Floor"}),r.jsx("option",{children:"Plots"}),r.jsx("option",{children:"Commercial"}),r.jsx("option",{children:"Farmhouse"})]})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"LOCATION"}),r.jsxs("select",{value:f,onChange:m=>u(m.target.value),children:[r.jsx("option",{value:"",children:"All Gurugram"}),r.jsx("option",{children:"Golf Course Road"}),r.jsx("option",{children:"Golf Course Extension Road"}),r.jsx("option",{children:"Sohna Road"}),r.jsx("option",{children:"Dwarka Expressway"}),r.jsx("option",{children:"New Gurgaon"}),r.jsx("option",{children:"Southern Peripheral Road"})]})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"CATEGORY"}),r.jsx("div",{className:"category-options",children:[{id:"",label:"All Projects"},{id:"recommended",label:"Recommended"},{id:"trending",label:"Trending"},{id:"upcoming",label:"Upcoming"},{id:"newlaunch",label:"New Launch"}].map(m=>r.jsxs("label",{className:"category-option",children:[r.jsx("input",{type:"radio",name:"cat",checked:x===m.id,onChange:()=>k(m.id)}),r.jsx("span",{children:m.label})]},m.id))})]}),r.jsx("button",{className:"apply-filter-btn",onClick:R,children:"Apply Filters"}),o.length>0&&r.jsxs("div",{className:"property-count",children:[o.length," properties found"]})]}),r.jsxs("div",{className:"expert-card",children:[r.jsx("div",{className:"expert-title",children:"Need Expert Help?"}),r.jsx("div",{className:"expert-text",children:"Our property experts will help you find the perfect home."}),r.jsx("a",{href:"tel:8500900100",className:"expert-call",children:"Call 8500 900 100"})]})]}),r.jsxs("main",{className:"results-area",children:[r.jsxs("div",{className:"results-header",children:[r.jsxs("div",{children:[r.jsx("h1",{children:"Properties in Gurugram"}),r.jsxs("p",{children:["Showing ",o.length," results"," ","•"," ","Luxury Residences & Investment Opportunities"]})]}),r.jsxs("select",{onChange:m=>A(m.target.value),className:"sort-select",children:[r.jsx("option",{value:"",children:"Sort by: Recommended"}),r.jsx("option",{value:"price-low",children:"Price: Low to High"}),r.jsx("option",{value:"price-high",children:"Price: High to Low"})]})]}),o.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🏢"}),r.jsx("div",{className:"empty-title",children:"No properties found"}),r.jsx("div",{className:"empty-text",children:"Try adjusting your filters or search query"}),r.jsx("button",{onClick:p,className:"empty-btn",children:"Clear Filters"})]}):r.jsx("div",{className:"results-grid",children:o.map((m,C)=>r.jsx(N,{property:m,index:C},(m==null?void 0:m.id)||(m==null?void 0:m._id)||C))})]})]})]}),r.jsx(Cr,{}),r.jsx("style",{children:`

        * {
          box-sizing: border-box;
        }

        .search-page {
          min-height: 100vh;
          background: #f7f7f5;
          color: #111;
          font-family:
            "Manrope",
            "Inter",
            Arial,
            sans-serif;
        }

        .search-page,
        .search-page *,
        .search-page input,
        .search-page select,
        .search-page button,
        .search-page textarea {
          font-family: "Manrope", "Inter", Arial, sans-serif !important;
        }

        .search-container {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
          padding: 92px 0 60px;
        }

        /* =====================================================
           BREADCRUMB
        ===================================================== */

        .search-breadcrumb {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 18px;
          font-size: 12px;
          color: #777;
        }

        .search-breadcrumb a {
          color: #777;
          text-decoration: none;
          transition: .2s ease;
        }

        .search-breadcrumb a:hover {
          color: ${Or};
        }

        .search-breadcrumb span:last-child {
          color: #222;
          font-weight: 700;
        }

        /* =====================================================
           MAIN LAYOUT
        ===================================================== */

        .search-layout {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }

        /* =====================================================
           FILTER SIDEBAR
        ===================================================== */

        .filter-sidebar {
          background: #fff;
          border: 1px solid #e7e4dc;
          border-radius: 18px;
          padding: 20px;
          position: sticky;
          top: 100px;
          box-shadow:
            0 8px 30px rgba(0,0,0,.04);
        }

        .filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }

        .filter-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 800;
          color: #111;
        }

        .filter-header button {
          border: none;
          background: transparent;
          color: ${Or};
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        .filter-fields {
          display: grid;
          gap: 17px;
          margin-top: 18px;
        }

        .filter-field {
          display: flex;
          flex-direction: column;
        }

        .filter-field > label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #555;
          margin-bottom: 7px;
        }

        .filter-field input,
        .filter-field select {
          width: 100%;
          height: 42px;
          border: 1px solid #e4e4e4;
          border-radius: 10px;
          background: #fff;
          padding: 0 12px;
          font-family: inherit;
          font-size: 12px;
          color: #222;
          outline: none;
          transition: .2s ease;
        }

        .filter-field input:focus,
        .filter-field select:focus {
          border-color: ${Cc};
          box-shadow:
            0 0 0 3px rgba(212,175,55,.10);
        }

        .category-options {
          display: grid;
          gap: 9px;
        }

        .category-option {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #555;
          cursor: pointer;
        }

        .category-option input {
          width: 15px;
          height: 15px;
          accent-color: ${Or};
        }

        .apply-filter-btn {
          width: 100%;
          height: 43px;
          border: none;
          border-radius: 10px;
          background: ${Nc};
          color: #fff;
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: .25s ease;
        }

        .apply-filter-btn:hover {
          background: ${Or};
          transform: translateY(-1px);
        }

        .property-count {
          text-align: center;
          font-size: 11px;
          color: #777;
        }

        /* =====================================================
           EXPERT CARD
        ===================================================== */

        .expert-card {
          margin-top: 20px;
          padding: 18px;
          border-radius: 15px;
          background:
            linear-gradient(
              145deg,
              #111,
              #242424
            );
          color: #fff;
        }

        .expert-title {
          font-size: 14px;
          font-weight: 800;
        }

        .expert-text {
          margin-top: 6px;
          font-size: 11px;
          line-height: 1.6;
          color: rgba(255,255,255,.68);
        }

        .expert-call {
          display: block;
          margin-top: 14px;
          padding: 10px;
          border-radius: 9px;
          background: ${Cc};
          color: #111;
          text-align: center;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          transition: .2s ease;
        }

        .expert-call:hover {
          background: #fff;
        }

        /* =====================================================
           RESULTS HEADER
        ===================================================== */

        .results-header {
          min-height: 78px;
          padding: 16px 18px;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
        }

        .results-header h1 {
          margin: 0;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 850;
          color: #111;
          letter-spacing: -.4px;
        }

        .results-header p {
          margin: 5px 0 0;
          color: #777;
          font-size: 11px;
        }

        .sort-select {
          height: 39px;
          min-width: 190px;
          border: 1px solid #e2e2e2;
          border-radius: 9px;
          padding: 0 11px;
          background: #fff;
          font-family: inherit;
          font-size: 11px;
          color: #333;
          outline: none;
        }

        /* =====================================================
           RESULTS GRID
        ===================================================== */

        .results-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 18px;
        }

        /* =====================================================
           PROPERTY CARD
        ===================================================== */

        .search-property-card {
          display: block;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          color: inherit;
          text-decoration: none;
          box-shadow:
            0 8px 28px rgba(0,0,0,.045);
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .search-property-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212,175,55,.45);
          box-shadow:
            0 18px 42px rgba(0,0,0,.10);
        }

        /* =====================================================
           CARD IMAGE
        ===================================================== */

        .search-property-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: #eee;
        }

        .search-property-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition:
            transform .55s ease;
        }

        .search-property-card:hover
        .search-property-image img {
          transform: scale(1.045);
        }

        .search-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.10) 0%,
              transparent 42%,
              rgba(0,0,0,.48) 100%
            );
          pointer-events: none;
        }

        /* =====================================================
           RERA
        ===================================================== */

        .search-rera-group {
          position: absolute;
          top: 13px;
          left: 13px;
          z-index: 2;
        }

        .search-rera {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 9px;
          border-radius: 6px;
          background: #138a42;
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .4px;
          box-shadow:
            0 4px 12px rgba(0,0,0,.16);
        }

        .search-rera b {
          font-size: 10px;
        }

        /* =====================================================
           BHK BADGE
        ===================================================== */

        .search-bhk-badge {
          position: absolute;
          right: 13px;
          bottom: 13px;
          z-index: 2;
          max-width: calc(100% - 26px);
          padding: 7px 10px;
          border: 1px solid rgba(255,255,255,.30);
          border-radius: 7px;
          background: rgba(0,0,0,.68);
          backdrop-filter: blur(7px);
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .search-property-content {
          padding: 16px 16px 15px;
        }

        .search-property-content h3 {
          margin: 0;
          min-height: 20px;
          color: #111;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 850;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .search-card-price {
          margin-top: 7px;
          color: ${Or};
          font-size: 14px;
          font-weight: 900;
        }

        /* =====================================================
           LOCATION
        ===================================================== */

        .search-card-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 9px;
          color: #777;
          font-size: 10px;
          line-height: 1.4;
        }

        .search-card-location svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          color: ${Or};
        }

        .search-card-location span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        /* =====================================================
           META
        ===================================================== */

        .search-card-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 13px;
          padding-top: 12px;
          border-top: 1px solid #eeeeee;
        }

        .search-card-meta > div {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #555;
          font-size: 9px;
          font-weight: 650;
        }

        .search-card-meta svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          color: #888;
        }

        .search-card-meta span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        /* =====================================================
           WHATSAPP
        ===================================================== */

        .search-card-whatsapp {
          width: 100%;
          height: 36px;
          margin-top: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 8px;
          background: #138a42;
          color: #fff;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          transition: .25s ease;
        }

        .search-card-whatsapp svg {
          width: 15px;
          height: 15px;
        }

        .search-card-whatsapp:hover {
          background: #0d7034;
          transform: translateY(-1px);
        }

        /* =====================================================
           EMPTY STATE
        ===================================================== */

        .empty-state {
          margin-top: 18px;
          padding: 70px 30px;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          background: #fff;
          text-align: center;
        }

        .empty-icon {
          font-size: 45px;
          opacity: .35;
        }

        .empty-title {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 800;
        }

        .empty-text {
          margin-top: 5px;
          font-size: 12px;
          color: #777;
        }

        .empty-btn {
          margin-top: 17px;
          padding: 10px 20px;
          border: none;
          border-radius: 9px;
          background: ${Nc};
          color: #fff;
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1200px) {

          .search-container {
            width: min(100% - 30px, 1100px);
          }

          .search-layout {
            grid-template-columns: 245px minmax(0, 1fr);
            gap: 17px;
          }

          .results-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .search-property-image {
            height: 230px;
          }

        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 960px) {

          .search-container {
            width: calc(100% - 28px);
            padding-top: 88px;
          }

          .search-layout {
            grid-template-columns: 1fr;
          }

          .filter-sidebar {
            position: relative;
            top: auto;
          }

          .filter-fields {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .filter-field:first-child {
            grid-column: 1 / -1;
          }

          .category-options {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .apply-filter-btn,
          .property-count {
            grid-column: 1 / -1;
          }

          .expert-card {
            display: none;
          }

          .results-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {

          .search-container {
            width: calc(100% - 20px);
            padding-top: 80px;
            padding-bottom: 35px;
          }

          .search-breadcrumb {
            margin-bottom: 13px;
            font-size: 10px;
          }

          .filter-sidebar {
            padding: 15px;
            border-radius: 14px;
          }

          .filter-fields {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .filter-field:first-child {
            grid-column: auto;
          }

          .category-options {
            grid-template-columns: 1fr;
          }

          .results-header {
            padding: 14px;
            border-radius: 14px;
          }

          .results-header h1 {
            font-size: 17px;
          }

          .results-header p {
            font-size: 10px;
          }

          .sort-select {
            width: 100%;
          }

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .search-property-image {
            height: 150px;
          }

          .search-property-content {
            padding: 11px;
          }

          .search-property-content h3 {
            font-size: 12px;
            line-height: 1.3;
            min-height: 31px;
          }

          .search-card-price {
            margin-top: 5px;
            font-size: 12px;
          }

          .search-card-location {
            margin-top: 6px;
            font-size: 8.5px;
          }

          .search-card-meta {
            gap: 6px;
            margin-top: 9px;
            padding-top: 9px;
          }

          .search-card-meta > div {
            gap: 4px;
            font-size: 8px;
          }

          .search-card-meta svg {
            width: 13px;
            height: 13px;
          }

          .search-card-whatsapp {
            height: 32px;
            margin-top: 9px;
            gap: 5px;
            font-size: 8.5px;
          }

          .search-card-whatsapp svg {
            width: 13px;
            height: 13px;
          }

          .search-rera-group {
            top: 8px;
            left: 8px;
          }

          .search-rera {
            padding: 4px 6px;
            font-size: 7px;
          }

          .search-bhk-badge {
            right: 8px;
            bottom: 8px;
            max-width: calc(100% - 16px);
            padding: 5px 7px;
            font-size: 7px;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .search-property-image {
            height: 125px;
          }

          .search-property-content {
            padding: 9px;
          }

          .search-property-content h3 {
            font-size: 11px;
          }

          .search-card-price {
            font-size: 11px;
          }

          .search-card-location {
            font-size: 8px;
          }

          .search-card-meta {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .search-card-whatsapp {
            font-size: 8px;
          }

        }

      `})]})}function n2(){var $,F;const{id:e}=Hm(),[t,n]=E.useState(null),[i,o]=E.useState([]),[a,s]=E.useState({name:"",phone:"",email:"",message:""}),[l,d]=E.useState(!1),[c,f]=E.useState("overview"),[u,x]=E.useState(!1),[k,S]=E.useState({name:"",phone:""}),[b,R]=E.useState(!1);E.useEffect(()=>{K.get(`/properties/${e}`).then(P=>n(P.data)).catch(()=>{}),K.get("/properties?limit=4").then(P=>o(P.data.slice(0,4))),window.scrollTo(0,0)},[e]),E.useEffect(()=>{if(!t)return;const P=["overview","price","highlights","amenities","gallery","location","masterplan","developer"],Z=new IntersectionObserver(w=>{w.forEach(I=>{I.isIntersecting&&f(I.target.id)})},{rootMargin:"-40% 0px -50% 0px",threshold:0});return P.forEach(w=>{const I=document.getElementById(w);I&&Z.observe(I)}),()=>Z.disconnect()},[t]);const p=async P=>{P.preventDefault();try{await K.post("/enquiries",{...a,property:t.title}),d(!0),setTimeout(()=>d(!1),3e3),s({name:"",phone:"",email:"",message:""}),x(!1)}catch{}},h=async P=>{P.preventDefault();try{await K.post("/enquiries",{name:k.name,phone:k.phone,property:t.title+" - Hero Form",message:"Hero form lead"}),R(!0),setTimeout(()=>R(!1),3e3),S({name:"",phone:""})}catch{}},g=P=>{var Z;(Z=document.getElementById(P))==null||Z.scrollIntoView({behavior:"smooth",block:"start"}),f(P)};if(!t)return r.jsxs("div",{style:{minHeight:"60vh",display:"grid",placeItems:"center"},children:[r.jsx("div",{style:{width:36,height:36,border:"3px solid #eee",borderTopColor:"#d8232a",borderRadius:"50%",animation:"spin 1s linear infinite"}}),r.jsx("style",{children:"@keyframes spin{to{transform:rotate(360deg)}}"})]});const j=t.brandColor||"#1e3a5f",A=t.logo||`https://via.placeholder.com/200x80/${j.replace("#","")}/ffffff?text=${encodeURIComponent((t.developer||"PROPERTY").slice(0,6))}`,N=(($=t.title.match(/\d+/))==null?void 0:$[0])||t.title.slice(0,2).toUpperCase(),m=t.possession||"Dec 2032",C=t.landArea||"3.42 Acres",B=t.towers||"3 Tower – 110 Unit",M=t.propertyTypeDetail||t.type||"Residential Flats",q=t.price||"₹20 Cr*";return r.jsxs("div",{className:"property-detail-page",style:{background:"#f8f9fb"},children:[r.jsx("div",{style:{background:j,color:"#fff",position:"sticky",top:0,zIndex:40,borderTop:"3px solid #ff8c00",boxShadow:"0 4px 20px rgba(0,0,0,.15)",transition:"all .2s"},children:r.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:64,gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,minWidth:0},children:[r.jsx("div",{style:{background:"#fff",padding:"6px 14px",borderRadius:4,display:"flex",alignItems:"center",gap:8,height:42,flexShrink:0},children:r.jsx("img",{src:A,alt:t.developer||t.title,style:{height:28,maxWidth:110,objectFit:"contain"},onError:P=>P.target.style.display="none"})}),r.jsx("nav",{style:{display:"flex",alignItems:"center",gap:2,background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",borderRadius:24,padding:4,overflowX:"auto"},className:"dev-nav scrollbar-hide",children:[{id:"overview",label:"OVERVIEW"},{id:"price",label:"PRICE"},{id:"highlights",label:"HIGHLIGHTS"},{id:"amenities",label:"AMENITIES"},{id:"gallery",label:"GALLERY"},{id:"location",label:"LOCATION"},{id:"masterplan",label:"MASTER PLAN"},{id:"developer",label:"DEVELOPER"}].map(P=>r.jsx("button",{onClick:()=>g(P.id),style:{padding:"7px 12px",borderRadius:20,border:"none",fontWeight:700,fontSize:10.5,letterSpacing:.3,cursor:"pointer",whiteSpace:"nowrap",background:c===P.id?"#fff":"transparent",color:c===P.id?j:"#fff",opacity:c===P.id?1:.85,transition:"all .2s"},children:P.label},P.id))})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[r.jsxs("a",{href:"https://wa.me/919811750130",target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:7,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.25)",padding:"8px 14px",borderRadius:24,fontWeight:700,fontSize:12,color:"#fff",whiteSpace:"nowrap"},className:"hide-mobile",children:[r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"#fff",children:r.jsx("path",{d:"M19.1 4.9C16.9 2.7 13.9 1.5 10.8 1.5 4.9 1.5 .2 6.2 .2 12c0 1.9.5 3.7 1.4 5.3L0 24l6.9-1.8c1.5.8 3.2 1.2 4.9 1.2 5.9 0 10.6-4.7 10.6-10.6 0-2.8-1.1-5.5-3.3-7.9zm-8.3 15.6c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.8-3.9 8.7-8.7 8.7z"})}),"WHATSAPP"]}),r.jsxs("a",{href:"tel:9811750130",style:{display:"flex",alignItems:"center",gap:6,color:"#fff",fontWeight:800,fontSize:15,whiteSpace:"nowrap"},children:[r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",className:"hide-mobile",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z"})}),"9811750130"]})]})]})}),r.jsxs("div",{className:"property-hero",style:{background:"#0a0a0a",color:"#fff",position:"relative",overflow:"hidden",minHeight:460},children:[r.jsx("div",{style:{position:"absolute",left:"45%",top:"50%",transform:"translate(-50%,-50%)",fontSize:380,fontWeight:900,color:"rgba(210,140,90,.95)",lineHeight:1,opacity:.95,pointerEvents:"none",fontFamily:"'Inter', sans-serif",letterSpacing:-12,userSelect:"none"},className:"hero-number",children:N}),r.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.2) 45%, rgba(0,0,0,.5) 100%)"}}),r.jsxs("div",{className:"container property-hero-inner",style:{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1.2fr 380px",gap:24,alignItems:"center",padding:"36px 16px"},children:[r.jsxs("div",{children:[r.jsxs("div",{style:{background:"rgba(0,0,0,.55)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,.15)",borderRadius:12,padding:"14px 16px",display:"inline-block",minWidth:340},children:[r.jsx("div",{style:{fontSize:10,letterSpacing:1.5,color:"#38bdf8",fontWeight:700},children:"RESIDENTIAL FLATS"}),r.jsx("div",{style:{fontWeight:800,fontSize:22,marginTop:4,letterSpacing:-.5},children:t.title.toUpperCase()}),r.jsx("div",{style:{fontSize:13,opacity:.9,marginTop:4,fontWeight:500},children:t.location})]}),r.jsxs("div",{style:{background:"rgba(0,0,0,.6)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,.12)",borderRadius:12,padding:14,marginTop:14,display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:380},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,letterSpacing:.6,color:"rgba(255,255,255,.6)",fontWeight:700},children:"PROPERTY TYPE"}),r.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:4},children:M})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,letterSpacing:.6,color:"rgba(255,255,255,.6)",fontWeight:700},children:"POSSESSION"}),r.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:4},children:m})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,letterSpacing:.6,color:"rgba(255,255,255,.6)",fontWeight:700},children:"ABOUT PROJECT"}),r.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:4},children:B})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,letterSpacing:.6,color:"rgba(255,255,255,.6)",fontWeight:700},children:"LAND AREA"}),r.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:4},children:C})]}),r.jsxs("div",{style:{gridColumn:"span 2",borderTop:"1px solid rgba(255,255,255,.1)",paddingTop:10,marginTop:4},children:[r.jsx("div",{style:{fontSize:10,letterSpacing:.6,color:"#38bdf8",fontWeight:700},children:"STARTING FROM"}),r.jsx("div",{style:{fontWeight:800,fontSize:16,marginTop:4,color:"#38bdf8"},children:q})]})]})]}),r.jsxs("div",{className:"property-hero-form",style:{background:"#fff",borderRadius:16,padding:20,color:"#111",boxShadow:"0 20px 60px rgba(0,0,0,.3)",border:"1px solid #eef0f3"},children:[r.jsx("h3",{style:{fontWeight:800,fontSize:18,color:"#111"},children:"Get in Touch with us."}),r.jsx("p",{style:{fontSize:11,letterSpacing:.5,color:"#6b7280",fontWeight:600,marginTop:4},children:"ENTER YOUR DETAILS BELOW TO PROCEED"}),b&&r.jsx("div",{style:{marginTop:10,background:"#ecfdf5",color:"#065f46",padding:"8px 10px",borderRadius:8,fontSize:12,fontWeight:700,border:"1px solid #a7f3d0"},children:"✓ Submitted! We'll call you shortly."}),r.jsxs("form",{onSubmit:h,style:{display:"grid",gap:12,marginTop:14},children:[r.jsxs("div",{children:[r.jsx("label",{style:{fontSize:11,fontWeight:700,color:"#374151"},children:"FULL NAME"}),r.jsx("input",{required:!0,value:k.name,onChange:P=>S({...k,name:P.target.value}),placeholder:"Enter your name",style:{width:"100%",marginTop:6,height:42,border:"1px solid #e5e7eb",borderRadius:8,padding:"0 12px",fontSize:13,outline:"none"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{fontSize:11,fontWeight:700,color:"#374151"},children:"MOBILE NUMBER"}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[r.jsx("select",{style:{height:42,border:"1px solid #e5e7eb",borderRadius:8,padding:"0 8px",fontSize:13,background:"#f9fafb"},children:r.jsx("option",{children:"+91"})}),r.jsx("input",{required:!0,value:k.phone,onChange:P=>S({...k,phone:P.target.value}),placeholder:"Enter mobile number",style:{flex:1,height:42,border:"1px solid #e5e7eb",borderRadius:8,padding:"0 12px",fontSize:13,outline:"none"}})]})]}),r.jsxs("label",{style:{display:"flex",gap:8,alignItems:"flex-start",fontSize:11,color:"#6b7280",lineHeight:1.4},children:[r.jsx("input",{type:"checkbox",defaultChecked:!0,style:{marginTop:2}}),"I authorize company representatives to Call, SMS, Email or WhatsApp me."]}),r.jsx("button",{type:"submit",style:{height:42,background:"#9fb6c9",color:"#fff",border:"none",borderRadius:8,fontWeight:800,fontSize:13,letterSpacing:.5,cursor:"pointer"},children:"SUBMIT"})]})]})]})]}),r.jsxs("div",{className:"container",style:{padding:"28px 16px 20px"},children:[r.jsxs("div",{id:"overview",className:"overview-section",style:{background:"#fff",border:"1px solid #e5ebf0",borderRadius:16,padding:"22px",marginTop:16,boxSizing:"border-box",overflow:"hidden"},children:[r.jsxs("div",{className:"overview-main",style:{display:"grid",gridTemplateColumns:"1fr 0.95fr",gap:28,alignItems:"center",width:"100%"},children:[r.jsxs("div",{className:"overview-content",style:{minWidth:0},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[r.jsx("span",{style:{width:30,height:1,background:"#c5a15a"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2,color:"#a17b39"},children:"PROJECT OVERVIEW"})]}),r.jsxs("h2",{style:{margin:0,fontSize:29,lineHeight:1.15,fontWeight:800,color:"#173b63",letterSpacing:"-0.7px"},children:["About"," ",r.jsx("span",{style:{color:"#a87529"},children:t.title})]}),r.jsx("div",{style:{width:48,height:3,borderRadius:3,background:"#28658e",marginTop:9,marginBottom:15}}),r.jsxs("p",{style:{margin:0,fontSize:12.5,lineHeight:1.75,color:"#596878"},children:["Discover luxury living at"," ",r.jsx("strong",{style:{color:"#243f5e"},children:t.title})," ","by"," ",r.jsx("strong",{style:{color:"#243f5e"},children:t.developer||"Premium Developer"})," ","located at"," ",r.jsx("strong",{style:{color:"#243f5e"},children:t.location}),". This ",t.bhk," ",(F=t.type)==null?void 0:F.toLowerCase()," project offers premium configurations with world-class amenities, excellent connectivity and strong investment potential. RERA approved, it promises an exceptional lifestyle and excellent connectivity in the heart of Gurugram."]}),r.jsxs("div",{className:"overview-mini-stats",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:15,marginTop:16},children:[r.jsxs("div",{style:{background:"#f8fbfd",border:"1px solid #e2eaf0",borderRadius:9,padding:"9px 6px",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:10,fontWeight:800,color:"#788797",letterSpacing:.7},children:"PRICE"}),r.jsx("div",{style:{fontSize:12,fontWeight:800,color:j,marginTop:4},children:t.price})]}),r.jsxs("div",{style:{background:"#f8fbfd",border:"1px solid #e2eaf0",borderRadius:9,padding:"9px 6px",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:10,fontWeight:800,color:"#788797",letterSpacing:.7},children:"CONFIG"}),r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#203f5e",marginTop:4},children:t.bhk})]}),r.jsxs("div",{style:{background:"#f8fbfd",border:"1px solid #e2eaf0",borderRadius:9,padding:"9px 6px",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:10,fontWeight:800,color:"#788797",letterSpacing:.7},children:"STATUS"}),r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#159447",marginTop:4},children:t.status})]}),r.jsxs("div",{style:{background:"#f8fbfd",border:"1px solid #e2eaf0",borderRadius:9,padding:"9px 6px",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:10,fontWeight:800,color:"#788797",letterSpacing:.7},children:"RERA"}),r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#159447",marginTop:4},children:t.rera?"Approved":"N/A"})]})]})]}),r.jsx("div",{className:"overview-image-wrap",style:{width:"100%",height:380,minWidth:0},children:r.jsx("div",{className:"overview-image-box",style:{width:"100%",height:"100%",overflow:"hidden",borderRadius:18,border:"1px solid #e0e8ee",background:"#edf2f5",boxShadow:"0 10px 30px rgba(20,55,85,.10)"},children:r.jsx("img",{src:t.image,alt:t.title||"Property Overview",style:{width:"100%",height:"100%",display:"block",objectFit:"cover",objectPosition:"center"}})})})]}),r.jsx("style",{children:`

      .overview-section {
        width: 100%;
        box-sizing: border-box;
      }

      .overview-image-box {
        position: relative;
      }

      .overview-image-box img {
        transition: transform .4s ease;
      }

      .overview-image-box:hover img {
        transform: scale(1.02);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1000px) {

        .overview-main {
          grid-template-columns: 1fr 0.9fr !important;
          gap: 18px !important;
        }

        .overview-content h2 {
          font-size: 26px !important;
        }

        .overview-content p {
          font-size: 11.5px !important;
        }

        .overview-image-wrap {
          height: 245px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 750px) {

        .overview-section {
          padding: 18px 14px !important;
        }

        .overview-main {
          grid-template-columns: 1fr !important;
          gap: 18px !important;
        }

        .overview-content h2 {
          font-size: 24px !important;
        }

        .overview-content p {
          font-size: 11px !important;
          line-height: 1.7 !important;
        }

        .overview-image-wrap {
          height: 260px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 500px) {

        .overview-section {
          padding: 16px 12px !important;
          border-radius: 13px !important;
        }

        .overview-main {
          gap: 15px !important;
        }

        .overview-content h2 {
          font-size: 22px !important;
        }

        .overview-content p {
          font-size: 10px !important;
        }

        .overview-mini-stats {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 7px !important;
        }

        .overview-image-wrap {
          height: 220px !important;
        }

        .overview-image-box {
          border-radius: 14px !important;
        }

      }


      /* ==========================================
         VERY SMALL MOBILE
      ========================================== */

      @media (max-width: 360px) {

        .overview-content h2 {
          font-size: 20px !important;
        }

        .overview-content p {
          font-size: 9.5px !important;
        }

        .overview-image-wrap {
          height: 195px !important;
        }

      }

    `})]}),r.jsxs("div",{id:"price",className:"price-section",style:{background:"#fff",border:"1px solid #eef0f3",borderRadius:16,padding:"20px 20px 16px",marginTop:16,boxSizing:"border-box",overflow:"hidden"},children:[r.jsxs("div",{className:"price-header",style:{textAlign:"center",marginBottom:17},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:5},children:[r.jsx("span",{style:{width:42,height:1,background:"#c8a35d"}}),r.jsx("span",{style:{fontSize:10,fontWeight:800,letterSpacing:2.5,color:"#a27b3c"},children:"SPACE & PRICING"}),r.jsx("span",{style:{width:42,height:1,background:"#c8a35d"}})]}),r.jsxs("h2",{style:{margin:0,fontSize:27,lineHeight:1.15,fontWeight:800,color:"#173b63",letterSpacing:"-0.6px"},children:[t.title||"M3M Brabus Residences"," ",r.jsx("span",{style:{color:"#a87529"},children:"Price"})]}),r.jsx("div",{style:{width:45,height:3,borderRadius:3,background:"#28658e",margin:"9px auto 0"}})]}),r.jsxs("div",{className:"price-table-wrapper",style:{width:"100%",borderRadius:10,overflow:"hidden",border:"1px solid #e4eaf0",boxShadow:"0 5px 18px rgba(25,55,85,.06)"},children:[r.jsxs("div",{className:"price-table-header",style:{display:"grid",gridTemplateColumns:"1.15fr 1fr 1fr 45px",alignItems:"center",minHeight:40,background:"#124b78",color:"#fff",padding:"0 8px",boxSizing:"border-box"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,fontSize:11,fontWeight:800,letterSpacing:.3},children:[r.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M3 21h18"}),r.jsx("path",{d:"M5 21V5h14v16"}),r.jsx("path",{d:"M9 9h2"}),r.jsx("path",{d:"M13 9h2"}),r.jsx("path",{d:"M9 13h2"}),r.jsx("path",{d:"M13 13h2"})]}),"TYPE / BHK"]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,fontSize:11,fontWeight:800,letterSpacing:.3},children:[r.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"})]}),"UNIT SIZE"]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,fontSize:11,fontWeight:800,letterSpacing:.3},children:["₹",r.jsx("span",{children:"UNIT PRICE"})]}),r.jsx("div",{})]}),[{bhk:"4 BHK",size:"5,000 SQ.FT",price:"₹ 20 Cr"},{bhk:"5 BHK",size:"6,000 SQ.FT",price:"₹ 24 Cr"},{bhk:"5 BHK",size:"7,000 SQ.FT",price:"₹ 28 Cr"}].map((P,Z)=>r.jsxs("div",{className:"price-table-row",style:{display:"grid",gridTemplateColumns:"1.15fr 1fr 1fr 45px",alignItems:"center",minHeight:39,padding:"0 8px",background:Z%2===0?"#fff":"#f5f9fc",borderTop:"1px solid #edf1f4",boxSizing:"border-box"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:11,fontWeight:800,color:"#173b63"},children:[r.jsx("div",{style:{width:22,height:22,display:"grid",placeItems:"center",color:"#315b7d"},children:r.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 20V9l8-5 8 5v11"}),r.jsx("path",{d:"M4 20h16"}),r.jsx("path",{d:"M8 20v-5h8v5"})]})}),P.bhk]}),r.jsx("div",{style:{fontSize:9.5,color:"#315573",fontWeight:600},children:P.size}),r.jsx("div",{style:{fontSize:11,color:"#173b63",fontWeight:800},children:P.price}),r.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:r.jsx("button",{type:"button",onClick:()=>x(!0),style:{width:22,height:22,borderRadius:"50%",border:"none",background:"#edf5fa",color:"#31749b",display:"grid",placeItems:"center",cursor:"pointer",fontSize:15},children:"→"})})]},Z))]}),r.jsxs("div",{className:"price-bottom-cta",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginTop:15},children:[r.jsx("button",{type:"button",onClick:()=>x(!0),style:{border:"none",borderRadius:22,background:"linear-gradient(90deg, #12517f 0%, #1c6b99 100%)",color:"#fff",padding:"12px 24px",minWidth:125,fontSize:11,fontWeight:800,letterSpacing:.5,cursor:"pointer",boxShadow:"0 5px 12px rgba(18,81,127,.18)"},children:"GET IN TOUCH  →"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[r.jsx("span",{style:{width:25,height:2,background:"#d8dfe5"}}),r.jsx("span",{style:{fontSize:10,color:"#9aa5af",fontWeight:600},children:"OR"}),r.jsx("span",{style:{width:25,height:2,background:"#d8dfe5"}})]}),r.jsxs("a",{href:"tel:+919811750130",className:"expert-price-contact",style:{textDecoration:"none",display:"flex",alignItems:"center",gap:8,border:"1px solid #e2c98f",borderRadius:22,padding:"5px 14px 5px 7px",background:"#fff",minWidth:145,boxSizing:"border-box"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:"50%",background:"#eef6fb",border:"1px solid #dceaf2",display:"grid",placeItems:"center",color:"#23678e",flexShrink:0},children:r.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"})})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:8,color:"#8a96a1",fontWeight:700,letterSpacing:.5},children:"SPEAK WITH EXPERT"}),r.jsx("div",{style:{fontSize:11,color:"#173b63",fontWeight:800,marginTop:2},children:"+91 9811750130"})]})]})]}),r.jsx("style",{children:`

      .price-section {
        width: 100%;
        box-sizing: border-box;
      }

      .price-table-row {
        transition: background .2s ease;
      }

      .price-table-row:hover {
        background: #f1f7fb !important;
      }

      .price-table-row button {
        transition:
          transform .2s ease,
          background .2s ease;
      }

      .price-table-row button:hover {
        transform: translateX(2px);
        background: #dcecf5 !important;
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 800px) {

        .price-section {
          padding: 19px 16px 15px !important;
        }

        .price-header h2 {
          font-size: 24px !important;
        }

        .price-bottom-cta {
          gap: 10px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 600px) {

        .price-section {
          padding: 18px 12px 14px !important;
          border-radius: 14px !important;
        }

        .price-header h2 {
          font-size: 21px !important;
        }

        .price-table-header {
          grid-template-columns:
            1.05fr
            1fr
            .95fr
            34px !important;
        }

        .price-table-row {
          grid-template-columns:
            1.05fr
            1fr
            .95fr
            34px !important;
        }

        .price-table-header {
          min-height: 32px !important;
        }

        .price-table-row {
          min-height: 40px !important;
        }

        .price-table-header > div {
          font-size: 6px !important;
        }

        .price-table-row > div:nth-child(1) {
          font-size: 9px !important;
        }

        .price-table-row > div:nth-child(2) {
          font-size: 8px !important;
        }

        .price-table-row > div:nth-child(3) {
          font-size: 9px !important;
        }

        .price-bottom-cta {
          flex-wrap: wrap !important;
          gap: 10px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 430px) {

        .price-header h2 {
          font-size: 19px !important;
        }

        .price-table-header {
          grid-template-columns:
            1fr
            .9fr
            .85fr
            28px !important;
        }

        .price-table-row {
          grid-template-columns:
            1fr
            .9fr
            .85fr
            28px !important;
        }

        .price-table-header {
          padding: 0 5px !important;
        }

        .price-table-row {
          padding: 0 5px !important;
        }

        .price-table-row > div:nth-child(1) {
          font-size: 8px !important;
          gap: 4px !important;
        }

        .price-table-row > div:nth-child(2) {
          font-size: 7.5px !important;
        }

        .price-table-row > div:nth-child(3) {
          font-size: 8px !important;
        }

        .price-table-row button {
          width: 20px !important;
          height: 20px !important;
        }

        .price-bottom-cta {
          flex-direction: column !important;
          width: 100%;
        }

        .price-bottom-cta > button {
          width: 150px !important;
        }

        .expert-price-contact {
          min-width: 160px !important;
        }

      }

    `})]}),r.jsxs("div",{id:"highlights",className:"highlights-section",style:{background:"#f8fbff",border:"1px solid #e3ebf2",borderRadius:16,padding:"20px 22px",marginTop:16,overflow:"hidden",boxSizing:"border-box"},children:[r.jsxs("div",{className:"highlights-main",style:{display:"grid",gridTemplateColumns:"46% 54%",gap:24,alignItems:"center",width:"100%",minHeight:265,boxSizing:"border-box"},children:[r.jsxs("div",{className:"highlights-left",style:{minWidth:0,paddingRight:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[r.jsx("span",{style:{width:30,height:1,background:"#c5a15a",display:"block"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2,color:"#a17b39"},children:"EXPLORE FEATURES"})]}),r.jsxs("h2",{style:{margin:0,fontSize:29,lineHeight:1.15,fontWeight:800,color:"#173b63",letterSpacing:"-0.7px"},children:["Project"," ",r.jsx("span",{style:{color:"#a87529"},children:"Highlights"})]}),r.jsx("div",{style:{width:48,height:3,borderRadius:3,background:"#28658e",marginTop:9,marginBottom:14}}),r.jsx("div",{style:{display:"grid",gap:7},children:(t.highlights||["Two Apartments Per Floor but Feels Like One Home on Each Floor","Ultra-Luxury 4 & 5 BHK Residences - Spacious homes planned in sizes of approximately 5000 - 7000 SQ.FT","Low-Density Development - Planned across around 30 acres with just 2 towers and approximately 240 residences.","Two Residences Per Core - A planning concept designed to limit the number of homes sharing common access areas."]).map((P,Z)=>r.jsxs("div",{className:"highlight-row",style:{display:"flex",alignItems:"center",gap:9,minHeight:40,padding:"7px 10px",background:"#fff",border:"1px solid #dfe7ee",borderRadius:8,boxSizing:"border-box"},children:[r.jsx("div",{style:{width:30,height:30,minWidth:30,borderRadius:"50%",background:"#f7fbfe",border:"1px solid #d6e1e9",display:"grid",placeItems:"center",flexShrink:0},children:r.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#2879a8",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M20 6L9 17l-5-5"})})}),r.jsx("span",{style:{fontSize:12,lineHeight:1.4,color:"#36516b",fontWeight:500},children:P})]},Z))})]}),r.jsx("div",{className:"highlights-right",style:{minWidth:0,height:385},children:r.jsx("div",{className:"highlight-image-box",style:{width:"100%",height:"100%",overflow:"hidden",borderRadius:18,border:"1px solid #e1e8ee",background:"#eaf0f4",boxShadow:"0 10px 30px rgba(20,55,85,.10)",boxSizing:"border-box"},children:r.jsx("img",{src:t.image,alt:t.title||"Project Highlights",style:{width:"100%",height:"100%",display:"block",objectFit:"cover",objectPosition:"center"}})})})]}),r.jsx("style",{children:`

      /* ==========================================
         BASE
      ========================================== */

      .highlights-section {
        width: 100%;
        box-sizing: border-box;
      }

      .highlight-row {
        transition:
          transform .2s ease,
          box-shadow .2s ease;
      }

      .highlight-row:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(23,59,99,.06);
      }

      .highlight-image-box {
        position: relative;
      }

      .highlight-image-box img {
        transition: transform .4s ease;
      }

      .highlight-image-box:hover img {
        transform: scale(1.02);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1000px) {

        .highlights-main {
          grid-template-columns: 45% 55% !important;
          gap: 18px !important;
          min-height: 245px !important;
        }

        .highlights-right {
          height: 245px !important;
        }

        .highlights-left h2 {
          font-size: 26px !important;
        }

        .highlight-row {
          min-height: 38px !important;
          padding: 6px 8px !important;
        }

        .highlight-row span {
          font-size: 8.5px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 750px) {

        .highlights-section {
          padding: 18px 14px !important;
        }

        .highlights-main {
          grid-template-columns: 1fr !important;
          gap: 18px !important;
        }

        .highlights-left {
          padding-right: 0 !important;
        }

        .highlights-right {
          height: 260px !important;
        }

        .highlight-image-box {
          border-radius: 16px !important;
        }

        .highlight-row span {
          font-size: 10px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 500px) {

        .highlights-section {
          padding: 16px 12px !important;
          border-radius: 13px !important;
        }

        .highlights-main {
          gap: 16px !important;
        }

        .highlights-left h2 {
          font-size: 23px !important;
        }

        .highlights-right {
          height: 220px !important;
        }

        .highlight-image-box {
          border-radius: 14px !important;
        }

        .highlight-row {
          min-height: 42px !important;
          padding: 8px !important;
        }

        .highlight-row span {
          font-size: 9px !important;
          line-height: 1.4 !important;
        }

      }


      /* ==========================================
         VERY SMALL MOBILE
      ========================================== */

      @media (max-width: 380px) {

        .highlights-section {
          padding: 14px 10px !important;
        }

        .highlights-left h2 {
          font-size: 21px !important;
        }

        .highlights-right {
          height: 195px !important;
        }

        .highlight-row span {
          font-size: 8.5px !important;
        }

      }

    `})]}),r.jsxs("div",{id:"amenities",style:{background:"#fff",border:"1px solid #eef0f3",borderRadius:16,padding:20,marginTop:16},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:5},children:[r.jsx("span",{style:{width:30,height:1,background:"#c5a15a",display:"block"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2,color:"#a17b39"},children:"LUXURY LIFESTYLE"})]}),r.jsx("h2",{style:{margin:0,fontSize:28,lineHeight:1.15,fontWeight:800,color:"#173b63",letterSpacing:"-0.6px"},children:"Amenities"}),r.jsx("div",{style:{width:48,height:3,background:"#28658e",borderRadius:3,marginTop:9}}),r.jsx("p",{style:{fontSize:13,color:"#6b7280",marginTop:10},children:"World-class amenities for an elevated lifestyle – curated for luxury, wellness and community."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginTop:14},className:"amenities-grid",children:[{icon:"🏊",label:"Swimming Pool"},{icon:"🏋️",label:"Gymnasium"},{icon:"🏠",label:"Club House"},{icon:"🛝",label:"Kids Play Area"},{icon:"🏃",label:"Jogging Track"},{icon:"🌳",label:"Landscaped Garden"},{icon:"🛡️",label:"24x7 Security"},{icon:"⚡",label:"Power Backup"},{icon:"🧘",label:"Yoga Deck"},{icon:"🎾",label:"Tennis Court"},{icon:"🅿️",label:"Covered Parking"},{icon:"☕",label:"Cafeteria"}].map(P=>r.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:14,textAlign:"center"},children:[r.jsx("div",{style:{fontSize:22},children:P.icon}),r.jsx("div",{style:{fontWeight:600,fontSize:12,marginTop:6,color:"#374151"},children:P.label})]},P.label))})]}),r.jsxs("div",{id:"gallery",className:"gallery-section",style:{background:"#fff",border:"1px solid #eef0f3",borderRadius:16,padding:20,marginTop:16,boxSizing:"border-box",overflow:"hidden"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:5},children:[r.jsx("span",{style:{width:30,height:1,background:"#c5a15a",display:"block"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2,color:"#a17b39"},children:"PROJECT GALLERY"})]}),r.jsx("h2",{style:{margin:0,fontSize:28,lineHeight:1.15,fontWeight:800,color:"#173b63",letterSpacing:"-0.6px"},children:"Gallery"}),r.jsx("div",{style:{width:48,height:3,background:"#28658e",borderRadius:3,marginTop:9}}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min((t.gallery||[t.image]).length,3)}, 1fr)`,gap:10,marginTop:15},className:"gallery-grid",children:(t.gallery||[t.image,t.image]).slice(0,6).map((P,Z)=>r.jsx("div",{className:"gallery-item",style:{borderRadius:12,overflow:"hidden",aspectRatio:"1.6",border:"1px solid #e8edf1",background:"#f5f7f9",boxSizing:"border-box"},children:r.jsx("img",{src:P,alt:`Gallery ${Z+1}`,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})},Z))}),r.jsx("style",{children:`

      .gallery-section {
        width: 100%;
        box-sizing: border-box;
      }

      .gallery-item {
        transition:
          transform .25s ease,
          box-shadow .25s ease;
      }

      .gallery-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(20,55,85,.10);
      }

      .gallery-item img {
        transition: transform .35s ease;
      }

      .gallery-item:hover img {
        transform: scale(1.03);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 800px) {

        .gallery-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .gallery-section h2 {
          font-size: 25px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 550px) {

        .gallery-section {
          padding: 18px 14px !important;
          border-radius: 14px !important;
        }

        .gallery-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 8px !important;
        }

        .gallery-item {
          border-radius: 10px !important;
        }

        .gallery-section h2 {
          font-size: 23px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 380px) {

        .gallery-section {
          padding: 16px 12px !important;
        }

        .gallery-grid {
          gap: 7px !important;
        }

        .gallery-section h2 {
          font-size: 21px !important;
        }

      }

    `})]}),r.jsxs("div",{id:"location",className:"location-section",style:{background:"#fff",border:"1px solid #eef0f3",borderRadius:16,padding:"24px 20px 20px",marginTop:16,overflow:"hidden"},children:[r.jsxs("div",{className:"location-heading",style:{marginBottom:17},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:5},children:[r.jsx("span",{style:{width:32,height:1,background:"#c6a05b",display:"block"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2,color:"#9b7b3e",textTransform:"uppercase"},children:"NEIGHBORHOOD INTELLIGENCE"})]}),r.jsxs("h2",{style:{margin:0,fontSize:27,lineHeight:1.15,fontWeight:800,color:"#17365d",letterSpacing:"-0.6px"},children:["Connectivity &"," ",r.jsx("span",{style:{color:"#b07c25"},children:"Strategic Location"})]}),r.jsxs("p",{style:{margin:"6px 0 0",fontSize:14.5,lineHeight:1.55,color:"#68778a",maxWidth:650},children:["Explore the premium ecosystem around"," ",r.jsx("strong",{style:{color:"#24466b"},children:t.title}),". Perfectly positioned for ultimate convenience."]})]}),r.jsxs("div",{className:"location-main-layout",style:{display:"grid",gridTemplateColumns:"1.55fr 0.85fr",gap:16,alignItems:"stretch"},children:[r.jsx("div",{className:"location-map-column",style:{minWidth:0},children:r.jsx("div",{className:"location-map-card",style:{position:"relative",width:"100%",height:250,overflow:"hidden",borderRadius:13,border:"1px solid #e3e8ed",background:"#fff",boxShadow:"0 5px 18px rgba(28,52,77,.06)"},children:r.jsx("img",{src:t.locationMap||t.mapImage||t.locationImage||"",alt:`${t.title||"Property"} Location Map`,className:"location-map-image",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}})})}),r.jsx("div",{className:"location-right",style:{minWidth:0,background:"#fff",borderRadius:12},children:r.jsxs("div",{className:"nearby-card",style:{width:"100%",background:"#fff",border:"1px solid #e1e6eb",borderRadius:11,padding:13,boxShadow:"0 6px 20px rgba(23,54,93,.08)"},children:[r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("div",{style:{fontSize:20,lineHeight:1.15,fontWeight:800,color:"#17365d"},children:["Nearby"," ",r.jsx("span",{style:{color:"#b07c25"},children:"Essentials"})]}),r.jsx("div",{style:{fontSize:11,color:"#9ca3af",letterSpacing:.8,marginTop:3,textTransform:"uppercase"},children:"DISTANCE FROM SITE"})]}),r.jsxs("div",{className:"essential-row",style:{display:"grid",gridTemplateColumns:"28px minmax(0,1fr) auto",gap:8,alignItems:"center",padding:"7px 0",borderBottom:"1px solid #edf0f3"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:7,background:"#f0f5f8",display:"grid",placeItems:"center",fontSize:14},children:"⛳"}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#24466b",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Golf Course Road"}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:2},children:"Approx. 5-10 minutes"})]}),r.jsxs("div",{style:{textAlign:"right",minWidth:30},children:[r.jsx("div",{style:{fontSize:10,lineHeight:1,fontWeight:800,color:"#17365d"},children:"5-10"}),r.jsx("div",{style:{fontSize:9,marginTop:2,color:"#9ca3af"},children:"MINS"})]})]}),r.jsxs("div",{className:"essential-row",style:{display:"grid",gridTemplateColumns:"28px minmax(0,1fr) auto",gap:8,alignItems:"center",padding:"7px 0",borderBottom:"1px solid #edf0f3"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:7,background:"#f0f5f8",display:"grid",placeItems:"center",fontSize:14},children:"🚇"}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#24466b",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Rapid Metro Sector 55-56"}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:2},children:"Approx. 7-10 minutes"})]}),r.jsxs("div",{style:{textAlign:"right",minWidth:30},children:[r.jsx("div",{style:{fontSize:10,lineHeight:1,fontWeight:800,color:"#17365d"},children:"7-10"}),r.jsx("div",{style:{fontSize:9,marginTop:2,color:"#9ca3af"},children:"MINS"})]})]}),r.jsxs("div",{className:"essential-row",style:{display:"grid",gridTemplateColumns:"28px minmax(0,1fr) auto",gap:8,alignItems:"center",padding:"7px 0",borderBottom:"1px solid #edf0f3"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:7,background:"#f0f5f8",display:"grid",placeItems:"center",fontSize:14},children:"🛣️"}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#24466b",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Southern Peripheral Road"}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:2},children:"Approx. 5 minutes"})]}),r.jsxs("div",{style:{textAlign:"right",minWidth:30},children:[r.jsx("div",{style:{fontSize:10,lineHeight:1,fontWeight:800,color:"#17365d"},children:"5"}),r.jsx("div",{style:{fontSize:9,marginTop:2,color:"#9ca3af"},children:"MINS"})]})]}),r.jsxs("div",{className:"essential-row",style:{display:"grid",gridTemplateColumns:"28px minmax(0,1fr) auto",gap:8,alignItems:"center",padding:"7px 0",borderBottom:"1px solid #edf0f3"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:7,background:"#f0f5f8",display:"grid",placeItems:"center",fontSize:14},children:"📍"}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#24466b"},children:"Sohna Road"}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:2},children:"Approx. 10 minutes"})]}),r.jsxs("div",{style:{textAlign:"right",minWidth:30},children:[r.jsx("div",{style:{fontSize:10,lineHeight:1,fontWeight:800,color:"#17365d"},children:"10"}),r.jsx("div",{style:{fontSize:9,marginTop:2,color:"#9ca3af"},children:"MINS"})]})]}),r.jsxs("div",{className:"essential-row",style:{display:"grid",gridTemplateColumns:"28px minmax(0,1fr) auto",gap:8,alignItems:"center",padding:"7px 0 4px"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:7,background:"#f0f5f8",display:"grid",placeItems:"center",fontSize:14},children:"✈️"}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#24466b",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"NH-48 (Delhi-Jaipur Highway)"}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:2},children:"Approx. 15 minutes"})]}),r.jsxs("div",{style:{textAlign:"right",minWidth:30},children:[r.jsx("div",{style:{fontSize:10,lineHeight:1,fontWeight:800,color:"#17365d"},children:"15"}),r.jsx("div",{style:{fontSize:9,marginTop:2,color:"#9ca3af"},children:"MINS"})]})]}),r.jsxs("button",{type:"button",onClick:()=>{const P=t.location||"";P&&window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(P)}`,"_blank","noopener,noreferrer")},style:{width:"100%",marginTop:10,border:"none",borderRadius:8,padding:"13px 10px",background:"#17365d",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[r.jsx("span",{style:{width:30,height:30,flexShrink:0,borderRadius:7,background:"rgba(255,255,255,.12)",display:"grid",placeItems:"center",fontSize:14},children:"◇"}),r.jsxs("div",{style:{textAlign:"left",minWidth:0},children:[r.jsx("div",{style:{fontSize:12,fontWeight:800,whiteSpace:"nowrap"},children:"EXPLORE ON OUR INTERACTIVE MAP"}),r.jsx("div",{style:{fontSize:9,opacity:.65,marginTop:2},children:"Discover the complete neighborhood"})]})]}),r.jsx("span",{style:{width:23,height:23,flexShrink:0,borderRadius:"50%",background:"#d6a63b",color:"#fff",display:"grid",placeItems:"center",fontSize:14},children:"→"})]})]})})]}),r.jsx("style",{children:`

      /* ==================================================
         BASE
      ================================================== */

      .location-section {
        position: relative;
        width: 100%;
        background: #fff !important;
      }

      .location-main-layout {
        width: 100%;
        background: #fff !important;
      }

      .location-map-column {
        background: #fff !important;
      }

      .location-map-card {
        background: #fff !important;
      }

      .location-map-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }

      .location-right {
        background: #fff !important;
        background-image: none !important;
      }

      .nearby-card {
        background: #fff !important;
        background-image: none !important;
      }

      .essential-row {
        transition:
          background-color 0.2s ease,
          transform 0.2s ease;
      }

      .essential-row:hover {
        background: #f8fafc;
      }


      /* ==================================================
         TABLET
      ================================================== */

      @media (max-width: 1100px) {

        .location-main-layout {
          grid-template-columns: 1.35fr 0.9fr !important;
          gap: 14px !important;
        }

        .location-map-card {
          height: 240px !important;
        }

        .location-heading h2 {
          font-size: 25px !important;
        }

      }


      /* ==================================================
         TABLET SMALL
      ================================================== */

      @media (max-width: 900px) {

        .location-main-layout {
          grid-template-columns: 1.2fr 0.9fr !important;
          gap: 12px !important;
        }

        .location-map-card {
          height: 230px !important;
        }

        .nearby-card {
          padding: 11px !important;
        }

        .nearby-card > div:first-child {
          margin-bottom: 6px !important;
        }

        .essential-row {
          padding: 6px 0 !important;
        }

      }


      /* ==================================================
         MOBILE
      ================================================== */

      @media (max-width: 800px) {

        .location-section {
          padding: 20px 14px 16px !important;
        }

        .location-main-layout {
          grid-template-columns: 1fr !important;
          gap: 18px !important;
        }

        .location-map-card {
          height: 270px !important;
        }

        .location-right {
          min-height: auto !important;
          width: 100% !important;
        }

        .nearby-card {
          width: 100% !important;
        }

        .location-heading h2 {
          font-size: 23px !important;
        }

        .location-heading p {
          max-width: 100% !important;
        }

      }


      /* ==================================================
         MOBILE 600
      ================================================== */

      @media (max-width: 600px) {

        .location-section {
          padding: 18px 12px 15px !important;
          border-radius: 14px !important;
        }

        .location-heading {
          margin-bottom: 14px !important;
        }

        .location-heading h2 {
          font-size: 21px !important;
          letter-spacing: -0.3px !important;
        }

        .location-heading p {
          font-size: 10.5px !important;
          line-height: 1.5 !important;
        }

        .location-map-card {
          height: 245px !important;
          border-radius: 11px !important;
        }

        .nearby-card {
          padding: 12px !important;
          border-radius: 11px !important;
        }

        .essential-row {
          grid-template-columns: 28px minmax(0,1fr) auto !important;
        }

      }


      /* ==================================================
         MOBILE 480
      ================================================== */

      @media (max-width: 480px) {

        .location-heading h2 {
          font-size: 20px !important;
        }

        .location-heading > div:first-child span:last-child {
          font-size: 8px !important;
          letter-spacing: 1.5px !important;
        }

        .location-map-card {
          height: 220px !important;
        }

        .nearby-card {
          padding: 11px !important;
        }

        .nearby-card > div:first-child > div:first-child {
          font-size: 15px !important;
        }

        .essential-row {
          padding: 7px 0 !important;
        }

        .essential-row > div:nth-child(2) > div:first-child {
          font-size: 8px !important;
        }

        .essential-row > div:nth-child(2) > div:last-child {
          font-size: 6px !important;
        }

      }


      /* ==================================================
         VERY SMALL MOBILE
      ================================================== */

      @media (max-width: 380px) {

        .location-section {
          padding: 16px 10px 13px !important;
        }

        .location-heading h2 {
          font-size: 18px !important;
        }

        .location-map-card {
          height: 205px !important;
        }

        .essential-row {
          grid-template-columns: 25px minmax(0,1fr) auto !important;
          gap: 6px !important;
        }

        .essential-row > div:first-child {
          width: 23px !important;
          height: 23px !important;
          font-size: 9px !important;
        }

      }

    `})]}),r.jsxs("div",{id:"neighborhood-score",className:"neighborhood-score-section",style:{background:"#fff",border:"1px solid #e8edf2",borderRadius:16,padding:"20px 18px 16px",marginTop:16,overflow:"hidden"},children:[r.jsxs("div",{className:"score-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:20},children:[r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:3},children:[r.jsx("span",{style:{fontSize:10,fontWeight:800,letterSpacing:2,color:"#a17b35"},children:"LIVE BETTER"}),r.jsx("span",{style:{width:42,height:1,background:"#c7a55b"}})]}),r.jsxs("h2",{style:{margin:0,fontSize:27,lineHeight:1.1,fontWeight:800,color:"#172f55",letterSpacing:"-0.7px"},children:["Neighborhood"," ",r.jsx("span",{style:{color:"#a57429"},children:"Score"})]}),r.jsx("div",{style:{marginTop:5,fontSize:10.5,color:"#9ca3af"},children:"Life in this locality"})]}),r.jsx("div",{className:"score-quote",style:{alignSelf:"center",textAlign:"center",color:"#9ba5b4",fontSize:12,fontStyle:"italic",lineHeight:1.2,marginLeft:"auto"}}),r.jsxs("div",{className:"overall-score",style:{width:102,minWidth:102,height:82,borderRadius:9,background:"linear-gradient(145deg, #194f85 0%, #123b69 100%)",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 5px 14px rgba(20,62,105,.15)"},children:[r.jsx("div",{style:{fontSize:27,lineHeight:1,fontWeight:800},children:"8.8"}),r.jsx("div",{style:{fontSize:8,fontWeight:700,letterSpacing:.5,marginTop:3,opacity:.9},children:"OVERALL SCORE"}),r.jsx("div",{style:{color:"#f2c14e",fontSize:9,letterSpacing:1.5,marginTop:2},children:"★★★★★"}),r.jsx("div",{style:{fontSize:9,marginTop:1,opacity:.7},children:"VERY HIGH"})]})]}),r.jsxs("div",{className:"score-grid",style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:6,marginTop:17},children:[r.jsxs("div",{className:"score-card",style:{background:"#fff",border:"1px solid #edf0f3",borderRadius:9,padding:"9px 9px 8px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[r.jsx("div",{className:"score-icon blue",style:{width:27,height:27,borderRadius:7,background:"#eaf4fb",color:"#1680bd",display:"grid",placeItems:"center",fontSize:14},children:"▣"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#65748a"},children:"CONNECTIVITY"}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#17365d",marginTop:2},children:"9.2/10"})]})]}),r.jsx("div",{className:"score-progress",style:{marginTop:8,height:4,borderRadius:10,background:"#e8edf2",overflow:"hidden"},children:r.jsx("div",{style:{width:"92%",height:"100%",background:"#3b9bd3",borderRadius:10}})}),r.jsx("div",{style:{fontSize:10,color:"#98a4b8",marginTop:6,whiteSpace:"nowrap"},children:"Excellent metro & road access"})]}),r.jsxs("div",{className:"score-card",style:{background:"#fff",border:"1px solid #edf0f3",borderRadius:9,padding:"9px 9px 8px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:7,background:"#fcecee",color:"#d94a5d",display:"grid",placeItems:"center",fontSize:14},children:"♜"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#65748a"},children:"HEALTHCARE"}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#17365d",marginTop:2},children:"8.5/10"})]})]}),r.jsx("div",{style:{marginTop:8,height:4,borderRadius:10,background:"#e8edf2",overflow:"hidden"},children:r.jsx("div",{style:{width:"85%",height:"100%",background:"#ec526a",borderRadius:10}})}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:6,whiteSpace:"nowrap"},children:"Top hospitals nearby"})]}),r.jsxs("div",{className:"score-card",style:{background:"#fff",border:"1px solid #edf0f3",borderRadius:9,padding:"9px 9px 8px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:7,background:"#f0eafa",color:"#7047d7",display:"grid",placeItems:"center",fontSize:14},children:"◆"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#65748a"},children:"EDUCATION"}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#17365d",marginTop:2},children:"8.8/10"})]})]}),r.jsx("div",{style:{marginTop:8,height:4,borderRadius:10,background:"#e8edf2",overflow:"hidden"},children:r.jsx("div",{style:{width:"88%",height:"100%",background:"#794de0",borderRadius:10}})}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:6,whiteSpace:"nowrap"},children:"Reputed schools & institutes"})]}),r.jsxs("div",{className:"score-card",style:{background:"#fff",border:"1px solid #edf0f3",borderRadius:9,padding:"9px 9px 8px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:7,background:"#fff3e5",color:"#e59621",display:"grid",placeItems:"center",fontSize:14},children:"♙"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#65748a"},children:"LIFESTYLE"}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#17365d",marginTop:2},children:"9/10"})]})]}),r.jsx("div",{style:{marginTop:8,height:4,borderRadius:10,background:"#e8edf2",overflow:"hidden"},children:r.jsx("div",{style:{width:"90%",height:"100%",background:"#ee9b22",borderRadius:10}})}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:6,whiteSpace:"nowrap"},children:"Malls, dining & entertainment"})]}),r.jsxs("div",{className:"score-card",style:{background:"#fff",border:"1px solid #edf0f3",borderRadius:9,padding:"9px 9px 8px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:7,background:"#e6f6f5",color:"#19a8a1",display:"grid",placeItems:"center",fontSize:14},children:"▣"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#65748a"},children:"COMMUTE"}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#17365d",marginTop:2},children:"8.2/10"})]})]}),r.jsx("div",{style:{marginTop:8,height:4,borderRadius:10,background:"#e8edf2",overflow:"hidden"},children:r.jsx("div",{style:{width:"82%",height:"100%",background:"#25b8b0",borderRadius:10}})}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:6,whiteSpace:"nowrap"},children:"Smooth daily travel"})]}),r.jsxs("div",{className:"score-card",style:{background:"#fff",border:"1px solid #edf0f3",borderRadius:9,padding:"9px 9px 8px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:7,background:"#eaf7e8",color:"#55a843",display:"grid",placeItems:"center",fontSize:14},children:"♧"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#65748a"},children:"GREENERY"}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#17365d",marginTop:2},children:"7.5/10"})]})]}),r.jsx("div",{style:{marginTop:8,height:4,borderRadius:10,background:"#e8edf2",overflow:"hidden"},children:r.jsx("div",{style:{width:"75%",height:"100%",background:"#62b94f",borderRadius:10}})}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:6,whiteSpace:"nowrap"},children:"Clean & green surroundings"})]})]}),r.jsxs("div",{className:"score-highlight",style:{marginTop:10,minHeight:40,borderRadius:10,border:"1px solid #dce8f1",background:"linear-gradient(90deg, #eef7fd 0%, #f8fbfd 100%)",display:"flex",alignItems:"center",padding:"7px 10px",gap:10},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:"#e1eff9",color:"#2877a9",display:"grid",placeItems:"center",fontSize:15,flexShrink:0},children:"⚙"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flex:1,minWidth:0},children:[r.jsx("div",{style:{fontSize:10,fontWeight:800,color:"#234a70",whiteSpace:"nowrap"},children:"Top Rated in Connectivity"}),r.jsx("div",{style:{width:1,height:15,background:"#d5e1e9"}}),r.jsx("div",{style:{fontSize:9,color:"#8794a3",whiteSpace:"nowrap"},children:"Located within 500m of Metro."}),r.jsx("div",{className:"highlight-spacer",style:{flex:1}}),r.jsx("div",{className:"highlight-location",style:{fontSize:9,color:"#8794a3",whiteSpace:"nowrap"},children:"A Well-Connected, Well-Lived. Location."})]}),r.jsx("button",{type:"button",style:{width:27,height:27,borderRadius:"50%",border:"none",background:"#e3f0f8",color:"#397ca7",display:"grid",placeItems:"center",cursor:"pointer",flexShrink:0,fontSize:16},children:"→"})]}),r.jsx("style",{children:`

      /* ==========================================
         BASE
      ========================================== */

      .neighborhood-score-section {
        font-family: inherit;
      }

      .score-card {
        transition:
          transform .2s ease,
          box-shadow .2s ease;
      }

      .score-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(23,54,93,.07);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1050px) {

        .score-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }

        .score-header h2 {
          font-size: 25px !important;
        }

      }


      /* ==========================================
         SMALL TABLET
      ========================================== */

      @media (max-width: 800px) {

        .score-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .score-header {
          flex-wrap: wrap !important;
        }

        .score-quote {
          display: none !important;
        }

        .overall-score {
          margin-left: auto !important;
        }

        .score-highlight {
          min-height: auto !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 600px) {

        .neighborhood-score-section {
          padding: 18px 12px 14px !important;
        }

        .score-header h2 {
          font-size: 22px !important;
        }

        .score-header > div:first-child {
          min-width: 0;
        }

        .overall-score {
          width: 90px !important;
          min-width: 90px !important;
          height: 68px !important;
        }

        .overall-score > div:first-child {
          font-size: 24px !important;
        }

        .score-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 7px !important;
        }

        .score-card {
          padding: 9px 8px 8px !important;
        }

        .score-card > div:first-child {
          gap: 6px !important;
        }

        .score-highlight {
          padding: 8px !important;
        }

        .highlight-location {
          display: none !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 420px) {

        .neighborhood-score-section {
          padding: 16px 10px 12px !important;
        }

        .score-header h2 {
          font-size: 20px !important;
        }

        .score-header > div:first-child > div:first-child span:first-child {
          font-size: 7px !important;
        }

        .overall-score {
          width: 82px !important;
          min-width: 82px !important;
          height: 62px !important;
        }

        .overall-score > div:first-child {
          font-size: 21px !important;
        }

        .score-grid {
          grid-template-columns: 1fr 1fr !important;
        }

        .score-card {
          min-width: 0;
        }

        .score-card > div:first-child {
          align-items: flex-start !important;
        }

        .score-card > div:first-child > div:last-child {
          min-width: 0;
        }

        .score-card > div:first-child > div:last-child > div:first-child {
          font-size: 7px !important;
        }

        .score-card > div:first-child > div:last-child > div:last-child {
          font-size: 10px !important;
        }

        .score-card > div:last-child {
          white-space: normal !important;
        }

        .score-highlight > div:nth-child(2) {
          gap: 7px !important;
        }

        .score-highlight > div:nth-child(2) > div:nth-child(3) {
          display: none !important;
        }

      }


      /* ==========================================
         VERY SMALL MOBILE
      ========================================== */

      @media (max-width: 350px) {

        .score-grid {
          grid-template-columns: 1fr !important;
        }

        .overall-score {
          width: 78px !important;
          min-width: 78px !important;
        }

        .score-header h2 {
          font-size: 19px !important;
        }

      }

    `})]}),r.jsxs("div",{id:"faq",className:"faq-contact-section",style:{background:"#fff",border:"1px solid #eef0f3",borderRadius:16,padding:"28px 24px 20px",marginTop:16,overflow:"hidden"},children:[r.jsxs("div",{className:"faq-top-header",style:{textAlign:"center",position:"relative",marginBottom:24},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:5},children:[r.jsx("span",{style:{width:32,height:1,background:"#c7a55b"}}),r.jsx("span",{style:{fontSize:8,fontWeight:800,letterSpacing:2.5,color:"#a17c3d"},children:"CIERGE SUPPORT"}),r.jsx("span",{style:{width:32,height:1,background:"#c7a55b"}})]}),r.jsxs("h2",{style:{margin:0,fontSize:27,lineHeight:1.15,fontWeight:800,color:"#17365d",letterSpacing:"-0.7px"},children:["Everything You"," ",r.jsx("span",{style:{color:"#a87529"},children:"Need to Know"})]}),r.jsxs("p",{style:{margin:"6px auto 0",fontSize:10,lineHeight:1.5,color:"#7c8795",maxWidth:430},children:["Get answers to the most common questions about"," ",r.jsx("strong",{style:{color:"#52647a"},children:t.title}),".",r.jsx("br",{}),"Our team is here to help you at every step of your journey."]}),r.jsxs("div",{className:"expert-contact",style:{position:"absolute",right:0,top:0,minWidth:170,background:"#fff",border:"1px solid #d8b76e",borderRadius:30,padding:"7px 14px 7px 8px",display:"flex",alignItems:"center",gap:8,boxShadow:"0 3px 12px rgba(25,55,85,.06)"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:"50%",background:"#eef5f9",color:"#17365d",display:"grid",placeItems:"center",fontSize:15,flexShrink:0},children:"☎"}),r.jsxs("div",{style:{textAlign:"left"},children:[r.jsx("div",{style:{fontSize:8,color:"#7d8997",fontWeight:700,textTransform:"uppercase",letterSpacing:.5},children:"TALK TO OUR EXPERT"}),r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#17365d",marginTop:1},children:"+91 9811750740"}),r.jsx("div",{style:{fontSize:8,color:"#8b96a3",marginTop:1},children:"AVAILABLE NOW"})]})]})]}),r.jsxs("div",{className:"faq-main-grid",style:{display:"grid",gridTemplateColumns:"1.55fr .85fr",gap:15,alignItems:"stretch"},children:[r.jsxs("div",{className:"faq-list",style:{display:"flex",flexDirection:"column",gap:5},children:[r.jsxs("details",{open:!0,className:"faq-item",style:{border:"1px solid #e4e9ee",borderRadius:9,background:"#fff",overflow:"hidden"},children:[r.jsxs("summary",{style:{listStyle:"none",cursor:"pointer",display:"grid",gridTemplateColumns:"28px 1fr 25px",alignItems:"center",gap:8,padding:"7px 10px"},children:[r.jsx("span",{className:"faq-number",style:{width:23,height:23,borderRadius:"50%",background:"#f8f4e9",border:"1px solid #e4cf9f",display:"grid",placeItems:"center",fontSize:10,fontWeight:800,color:"#8e6c31"},children:"01"}),r.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#24466b"},children:["What is the exact location of ",t.title,"?"]}),r.jsx("span",{className:"faq-plus",style:{width:21,height:21,borderRadius:"50%",background:"#f0f3f6",color:"#6d7b8b",display:"grid",placeItems:"center",fontSize:14,fontWeight:500},children:"−"})]}),r.jsxs("div",{style:{padding:"0 42px 10px",fontSize:11,lineHeight:1.6,color:"#8a95a2"},children:[t.title," is strategically located at"," ",t.location||"Sector 58, Gurugram"," with excellent connectivity to major roads, business hubs, schools, hospitals and lifestyle destinations."]})]}),r.jsxs("details",{className:"faq-item",style:{border:"1px solid #e4e9ee",borderRadius:9,background:"#fff",overflow:"hidden"},children:[r.jsxs("summary",{style:{listStyle:"none",cursor:"pointer",display:"grid",gridTemplateColumns:"28px 1fr 25px",alignItems:"center",gap:8,padding:"7px 10px"},children:[r.jsx("span",{className:"faq-number",children:"02"}),r.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#24466b"},children:["What is the expected possession date for ",t.title,"?"]}),r.jsx("span",{className:"faq-plus",children:"+"})]}),r.jsx("div",{className:"faq-answer",children:"The expected possession timeline may vary depending on the project's construction and development schedule. Please contact our property expert for the latest update."})]}),r.jsxs("details",{className:"faq-item",style:{border:"1px solid #e4e9ee",borderRadius:9,background:"#fff",overflow:"hidden"},children:[r.jsxs("summary",{style:{listStyle:"none",cursor:"pointer",display:"grid",gridTemplateColumns:"28px 1fr 25px",alignItems:"center",gap:8,padding:"7px 10px"},children:[r.jsx("span",{className:"faq-number",children:"03"}),r.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#24466b"},children:["How can I verify the RERA approval status of ",t.title,"?"]}),r.jsx("span",{className:"faq-plus",children:"+"})]}),r.jsx("div",{className:"faq-answer",children:"RERA details and project registration information can be verified through the official RERA records. Our property team can also assist you with the relevant project information."})]}),r.jsxs("details",{className:"faq-item",style:{border:"1px solid #e4e9ee",borderRadius:9,background:"#fff",overflow:"hidden"},children:[r.jsxs("summary",{style:{listStyle:"none",cursor:"pointer",display:"grid",gridTemplateColumns:"28px 1fr 25px",alignItems:"center",gap:8,padding:"7px 10px"},children:[r.jsx("span",{className:"faq-number",children:"04"}),r.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#24466b"},children:["Who is the developer of ",t.title,"?"]}),r.jsx("span",{className:"faq-plus",children:"+"})]}),r.jsxs("div",{className:"faq-answer",children:[t.developer||"Premium Developer"," is the developer associated with this project."]})]}),r.jsxs("details",{className:"faq-item",style:{border:"1px solid #e4e9ee",borderRadius:9,background:"#fff",overflow:"hidden"},children:[r.jsxs("summary",{style:{listStyle:"none",cursor:"pointer",display:"grid",gridTemplateColumns:"28px 1fr 25px",alignItems:"center",gap:8,padding:"7px 10px"},children:[r.jsx("span",{className:"faq-number",children:"05"}),r.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#24466b"},children:["What types of BHK units are available in ",t.title,"?"]}),r.jsx("span",{className:"faq-plus",children:"+"})]}),r.jsxs("div",{className:"faq-answer",children:["The project offers premium residential configurations including ",t.bhk||"multiple BHK"," options, subject to availability."]})]}),r.jsxs("div",{className:"faq-features",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",border:"1px solid #e7ebef",borderRadius:9,marginTop:3,overflow:"hidden",background:"#fff"},children:[r.jsxs("div",{style:{padding:"7px 8px",display:"flex",alignItems:"center",gap:7,borderRight:"1px solid #e7ebef"},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:"#f8f3e5",color:"#a47b32",display:"grid",placeItems:"center",fontSize:13,flexShrink:0},children:"♧"}),r.jsxs("div",{style:{fontSize:10,lineHeight:1.35,color:"#65748a"},children:[r.jsx("strong",{style:{display:"block",color:"#24466b",fontSize:11},children:"Dedicated"}),"Relationship Manager"]})]}),r.jsxs("div",{style:{padding:"7px 8px",display:"flex",alignItems:"center",gap:7,borderRight:"1px solid #e7ebef"},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:"#f8f3e5",color:"#a47b32",display:"grid",placeItems:"center",fontSize:13,flexShrink:0},children:"▤"}),r.jsxs("div",{style:{fontSize:10,lineHeight:1.35,color:"#65748a"},children:[r.jsx("strong",{style:{display:"block",color:"#24466b",fontSize:11},children:"Latest Project"}),"Updates"]})]}),r.jsxs("div",{style:{padding:"7px 8px",display:"flex",alignItems:"center",gap:7,borderRight:"1px solid #e7ebef"},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:"#f8f3e5",color:"#a47b32",display:"grid",placeItems:"center",fontSize:13,flexShrink:0},children:"▣"}),r.jsxs("div",{style:{fontSize:10,lineHeight:1.35,color:"#65748a"},children:[r.jsx("strong",{style:{display:"block",color:"#24466b",fontSize:11},children:"Site Visit"}),"Assistance"]})]}),r.jsxs("div",{style:{padding:"7px 8px",display:"flex",alignItems:"center",gap:7},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:"#f8f3e5",color:"#a47b32",display:"grid",placeItems:"center",fontSize:13,flexShrink:0},children:"★"}),r.jsxs("div",{style:{fontSize:10,lineHeight:1.35,color:"#65748a"},children:[r.jsx("strong",{style:{display:"block",color:"#24466b",fontSize:11},children:"Exclusive Offers"}),"& Pricing Details"]})]})]})]}),r.jsxs("div",{className:"contact-form-card",style:{background:"linear-gradient(145deg, #123f69 0%, #0e3154 100%)",borderRadius:10,padding:"18px 13px 18px",color:"#fff",boxShadow:"0 8px 20px rgba(15,55,91,.14)"},children:[r.jsx("div",{style:{fontSize:10,letterSpacing:1.8,color:"#d2ad5b",fontWeight:800,textTransform:"uppercase",marginBottom:3},children:"GET IN TOUCH"}),r.jsxs("h3",{style:{margin:0,fontSize:19,lineHeight:1.15,fontWeight:800,color:"#fff"},children:["Get in Touch"," ",r.jsx("span",{style:{color:"#d8ad4e"},children:"with Us."})]}),r.jsx("p",{style:{margin:"4px 0 9px",fontSize:9,lineHeight:1.4,color:"rgba(255,255,255,.7)"},children:"Fill in your details and our team will get back to you shortly."}),r.jsx("input",{type:"text",placeholder:"  Full Name",className:"contact-input"}),r.jsx("input",{type:"tel",placeholder:"  Mobile Number",className:"contact-input"}),r.jsx("input",{type:"email",placeholder:"  Email Address (Optional)",className:"contact-input"}),r.jsx("textarea",{placeholder:"  Your Message (Optional)",className:"contact-input contact-textarea"}),r.jsx("button",{type:"button",onClick:()=>{typeof x=="function"&&x(!0)},style:{width:"100%",border:"none",borderRadius:5,background:"linear-gradient(90deg, #d69e2e 0%, #c28a20 100%)",color:"#fff",padding:"12px 10px",fontSize:10,fontWeight:800,letterSpacing:.7,cursor:"pointer",marginTop:1},children:"REQUEST CALLBACK →"}),r.jsx("div",{style:{textAlign:"center",fontSize:9,color:"rgba(255,255,255,.55)",marginTop:5},children:"🔒 Your information is safe with us."})]})]}),r.jsx("style",{children:`

      /* ==========================================
         FAQ DEFAULT
      ========================================== */

      .faq-contact-section {
        font-family: inherit;
      }

      .faq-item summary::-webkit-details-marker {
        display: none;
      }

      .faq-item summary {
        outline: none;
      }

      .faq-item[open] {
        background: #fff;
      }

      .faq-item[open] .faq-plus {
        background: #eef2f6 !important;
        color: #64748b !important;
      }

      .faq-number {
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background: #f8f4e9;
        border: 1px solid #e4cf9f;
        display: grid;
        place-items: center;
        font-size: 10px;
        font-weight: 800;
        color: #8e6c31;
      }

      .faq-plus {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background: #f0f3f6;
        color: #6d7b8b;
        display: grid;
        place-items: center;
        font-size: 13px;
        font-weight: 500;
      }

      .faq-answer {
        padding: 0 42px 10px;
        font-size: 11px;
        line-height: 1.6;
        color: #8a95a2;
      }

      .contact-input {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #dce4eb;
        background: #fff;
        color: #243b53;
        border-radius: 4px;
        outline: none;
        font-size: 11px;
        margin-bottom: 10px;
        padding: 4px 7px;
        font-family: inherit;
      }

      .contact-input::placeholder {
        color: #8a96a3;
        opacity: 1;
      }

      .contact-input:focus {
        border-color: #d5a542;
        box-shadow: 0 0 0 2px rgba(213,165,66,.12);
      }

      .contact-textarea {
        height: 42px;
        resize: none;
        padding-top: 7px;
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1000px) {

        .faq-main-grid {
          grid-template-columns: 1.35fr .85fr !important;
        }

        .faq-top-header h2 {
          font-size: 25px !important;
        }

        .expert-contact {
          position: static !important;
          margin: 12px auto 0 !important;
          width: fit-content !important;
        }

        .faq-top-header {
          margin-bottom: 18px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 760px) {

        .faq-contact-section {
          padding: 22px 14px 16px !important;
        }

        .faq-top-header h2 {
          font-size: 23px !important;
        }

        .faq-main-grid {
          grid-template-columns: 1fr !important;
          gap: 15px !important;
        }

        .contact-form-card {
          order: 2;
        }

        .faq-list {
          order: 1;
        }

        .expert-contact {
          min-width: 155px !important;
        }

        .faq-features {
          grid-template-columns: repeat(2, 1fr) !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 500px) {

        .faq-contact-section {
          padding: 19px 11px 14px !important;
          border-radius: 13px !important;
        }

        .faq-top-header h2 {
          font-size: 21px !important;
        }

        .faq-top-header p {
          font-size: 8.5px !important;
        }

        .faq-top-header {
          margin-bottom: 15px !important;
        }

        .expert-contact {
          transform: scale(.94);
          transform-origin: center;
        }

        .faq-item summary {
          grid-template-columns: 26px minmax(0,1fr) 23px !important;
          gap: 7px !important;
          padding: 7px 8px !important;
        }

        .faq-item summary > span:nth-child(2) {
          font-size: 8px !important;
          line-height: 1.35 !important;
        }

        .faq-answer {
          padding: 0 38px 9px !important;
          font-size: 6.5px !important;
        }

        .faq-features {
          grid-template-columns: 1fr 1fr !important;
        }

        .faq-features > div {
          border-right: 1px solid #e7ebef !important;
          border-bottom: 1px solid #e7ebef !important;
        }

        .contact-form-card {
          padding: 13px !important;
        }

      }


      /* ==========================================
         VERY SMALL MOBILE
      ========================================== */

      @media (max-width: 360px) {

        .faq-top-header h2 {
          font-size: 19px !important;
        }

        .expert-contact {
          min-width: 145px !important;
        }

        .contact-form-card h3 {
          font-size: 17px !important;
        }

        .faq-features {
          grid-template-columns: 1fr !important;
        }

        .faq-features > div {
          border-right: none !important;
        }

      }

    `})]}),r.jsxs("div",{id:"masterplan",className:"masterplan-section",style:{background:"#fff",border:"1px solid #eef0f3",borderRadius:16,padding:20,marginTop:16,boxSizing:"border-box",overflow:"hidden"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:5},children:[r.jsx("span",{style:{width:30,height:1,background:"#c5a15a",display:"block"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2,color:"#a17b39"},children:"PROJECT PLANNING"})]}),r.jsx("h2",{style:{margin:0,fontSize:28,lineHeight:1.15,fontWeight:800,color:"#173b63",letterSpacing:"-0.6px"},children:"Master Plan"}),r.jsx("div",{style:{width:48,height:3,background:"#28658e",borderRadius:3,marginTop:9}}),r.jsx("p",{style:{fontSize:13,color:"#6b7280",marginTop:10,marginBottom:0},children:"Thoughtfully planned low-density layout maximizing views, ventilation and privacy."}),r.jsxs("div",{className:"masterplan-image-box",style:{height:320,background:"#f7fafc",border:"1px solid #e5e7eb",borderRadius:14,marginTop:14,position:"relative",overflow:"hidden",display:"grid",placeItems:"center"},children:[r.jsx("img",{src:t.image,alt:"master plan",style:{width:"100%",height:"100%",objectFit:"cover",opacity:.18,display:"block"}}),r.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,.72))"}}),r.jsxs("div",{className:"masterplan-content",style:{position:"absolute",zIndex:2,textAlign:"center",padding:20,maxWidth:500},children:[r.jsx("div",{style:{width:48,height:48,margin:"0 auto 10px",borderRadius:"50%",background:"#fff",border:"1px solid #dce7ee",display:"grid",placeItems:"center",boxShadow:"0 5px 15px rgba(20,55,85,.08)"},children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#28658e",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M3 3h18v18H3z"}),r.jsx("path",{d:"M3 9h18"}),r.jsx("path",{d:"M9 3v18"}),r.jsx("path",{d:"M15 9v12"})]})}),r.jsxs("div",{style:{fontWeight:800,fontSize:18,color:"#173b63"},children:["Master Plan – ",t.title]}),r.jsxs("div",{style:{fontSize:11,color:"#6b7280",marginTop:5},children:[t.landArea||"3.42 Acres"," • ",B," • Ultra-Luxury Planning"]}),r.jsx("button",{type:"button",onClick:()=>x(!0),style:{marginTop:13,background:"linear-gradient(90deg, #b9852e, #d4a94d)",color:"#fff",border:"none",padding:"9px 18px",borderRadius:20,fontWeight:800,fontSize:10,cursor:"pointer",boxShadow:"0 5px 14px rgba(180,130,45,.18)"},children:"Download Master Plan →"})]})]}),r.jsx("style",{children:`

      .masterplan-section {
        width: 100%;
        box-sizing: border-box;
      }

      .masterplan-image-box {
        transition: box-shadow .25s ease;
      }

      .masterplan-image-box:hover {
        box-shadow: 0 8px 24px rgba(20,55,85,.08);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 800px) {

        .masterplan-section h2 {
          font-size: 25px !important;
        }

        .masterplan-image-box {
          height: 280px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 550px) {

        .masterplan-section {
          padding: 18px 14px !important;
          border-radius: 14px !important;
        }

        .masterplan-section h2 {
          font-size: 23px !important;
        }

        .masterplan-image-box {
          height: 250px !important;
          border-radius: 12px !important;
        }

        .masterplan-content {
          padding: 15px !important;
        }

        .masterplan-content > div:nth-child(2) {
          font-size: 15px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 380px) {

        .masterplan-section {
          padding: 16px 12px !important;
        }

        .masterplan-section h2 {
          font-size: 21px !important;
        }

        .masterplan-image-box {
          height: 220px !important;
        }

        .masterplan-content > div:nth-child(2) {
          font-size: 14px !important;
        }

        .masterplan-content > div:nth-child(3) {
          font-size: 9px !important;
        }

      }

    `})]}),r.jsx(Ou,{}),r.jsxs("div",{id:"related",className:"related-section",style:{marginTop:20,paddingBottom:20,boxSizing:"border-box"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:5},children:[r.jsx("span",{style:{width:30,height:1,background:"#c5a15a",display:"block"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2,color:"#a17b39"},children:"EXPLORE MORE"})]}),r.jsxs("h3",{style:{margin:0,fontWeight:800,fontSize:27,lineHeight:1.15,color:"#173b63",letterSpacing:"-0.6px"},children:["Similar"," ",r.jsx("span",{style:{color:"#a87529"},children:"Projects"})]}),r.jsx("div",{style:{width:48,height:3,background:"#28658e",borderRadius:3,marginTop:9}}),r.jsx("div",{className:"related-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:14,marginTop:16},children:i.map(P=>r.jsxs(H,{to:`/property/${P.id}`,className:"related-card hw-similar-card",style:{background:"#fff",border:"1px solid #e4eaf0",borderRadius:13,overflow:"hidden",textDecoration:"none",display:"block",boxSizing:"border-box"},children:[r.jsx("div",{className:"related-image hw-similar-image",style:{width:"100%",aspectRatio:"1.45",overflow:"hidden",background:"#f2f5f7"},children:r.jsx("img",{src:P.image,alt:P.title,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),r.jsxs("div",{style:{padding:"11px 11px 12px"},children:[r.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.3,color:"#173b63",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:P.title}),r.jsx("div",{style:{fontWeight:800,fontSize:11,marginTop:5,color:j},children:P.priceRange}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:"#6b7280",marginTop:4},children:[r.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"#7d8b98",strokeWidth:"2",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),P.location.split(",")[0]]})]})]},P.id))}),r.jsx("style",{children:`

      .related-section {
        width: 100%;
        box-sizing: border-box;
      }

      .related-card {
        transition:
          transform .25s ease,
          box-shadow .25s ease,
          border-color .25s ease;
      }

      .related-card:hover {
        transform: translateY(-3px);
        border-color: #d5e1e9 !important;
        box-shadow: 0 10px 24px rgba(20,55,85,.09);
      }

      .related-image img {
        transition: transform .4s ease;
      }

      .related-card:hover .related-image img {
        transform: scale(1.04);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1000px) {

        .related-grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 12px !important;
        }

        .related-section h3 {
          font-size: 25px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 760px) {

        .related-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 10px !important;
        }

        .related-section h3 {
          font-size: 23px !important;
        }

        .related-card > div:last-child {
          padding: 9px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 450px) {

        .related-section {
          padding-bottom: 70px !important;
        }

        .related-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 8px !important;
        }

        .related-section h3 {
          font-size: 21px !important;
        }

        .related-card {
          border-radius: 10px !important;
        }

        .related-card > div:last-child {
          padding: 8px !important;
        }

        .related-card > div:last-child > div:first-child {
          font-size: 10px !important;
        }

        .related-card > div:last-child > div:nth-child(2) {
          font-size: 9.5px !important;
        }

        .related-card > div:last-child > div:nth-child(3) {
          font-size: 8.5px !important;
        }

      }

    `})]})]}),r.jsxs("div",{className:"property-footer-wrapper",style:{width:"calc(100% - 40px)",margin:"16px 20px 70px",boxSizing:"border-box"},children:[r.jsxs("div",{id:"disclaimer",className:"disclaimer-section",style:{background:"#f8fbff",border:"1px solid #dce8f4",borderRadius:14,padding:"18px 22px",width:"100%",boxSizing:"border-box",position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",right:-20,top:-40,width:120,height:150,background:"linear-gradient(135deg, transparent 28%, #edf5ff 28%, #e2efff 72%, transparent 72%)",opacity:.9,pointerEvents:"none"}}),r.jsxs("div",{className:"disclaimer-inner",style:{position:"relative",zIndex:2,display:"flex",alignItems:"center",width:"100%",gap:18,boxSizing:"border-box"},children:[r.jsxs("div",{className:"disclaimer-left",style:{width:115,minWidth:115,paddingRight:18,borderRight:"1px solid #d9e3ed",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:[r.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#e4f1ff",display:"grid",placeItems:"center",color:"#397caf",marginBottom:7},children:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("path",{d:"M14 2v6h6"}),r.jsx("path",{d:"M8 13h8"}),r.jsx("path",{d:"M8 17h6"})]})}),r.jsx("div",{style:{fontSize:12,fontWeight:800,letterSpacing:1,color:"#285578",textAlign:"center"},children:"DISCLAIMER"}),r.jsx("div",{style:{width:27,height:2,borderRadius:5,background:"#3d8bc7",marginTop:6}})]}),r.jsxs("div",{className:"disclaimer-content",style:{flex:1,minWidth:0,paddingRight:25,boxSizing:"border-box"},children:[r.jsx("p",{style:{margin:0,fontSize:11,lineHeight:1.65,color:"#657386"},children:"The information provided on this project page is shared only for general awareness and user understanding. It does not represent any offer, commitment, warranty, or endorsement. Project details are gathered from publicly available sources such as State RERA websites, official builder portals, and documents shared by authorized channel partners. The platform presents this information in a simplified format to help users with research and comparison."}),r.jsx("p",{style:{margin:"4px 0 0",fontSize:11,lineHeight:1.65,color:"#657386"},children:"It does not own or control the content. Buyers are strongly advised to verify all project details, approvals, pricing, and terms directly with the builder or promoter before making any purchase decision."})]})]})]}),r.jsxs("footer",{className:"property-footer",style:{width:"100%",background:"#fff",borderTop:"1px solid #e8edf2",padding:"13px 4px 12px",boxSizing:"border-box"},children:[r.jsxs("div",{className:"footer-inner",style:{width:"100%",display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:20,boxSizing:"border-box"},children:[r.jsx("div",{className:"footer-copyright",style:{fontSize:10,color:"#8b96a3",letterSpacing:1,textTransform:"uppercase",whiteSpace:"nowrap"},children:"© 2026. M3M BRABUS RESIDENCES"}),r.jsxs("nav",{className:"footer-nav",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:21},children:[r.jsx("a",{href:"#home",children:"HOME"}),r.jsx("a",{href:"#privacy",children:"PRIVACY POLICY"}),r.jsx("a",{href:"#terms",children:"TERMS & CONDITIONS"}),r.jsx("a",{href:"#disclaimer",children:"DISCLAIMER"}),r.jsx("a",{href:"#blog",children:"BLOG"})]}),r.jsxs("div",{className:"footer-social",style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8},children:[r.jsx("a",{href:"#","aria-label":"Facebook",className:"social-icon",children:"f"}),r.jsx("a",{href:"#","aria-label":"Instagram",className:"social-icon",children:r.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5"}),r.jsx("circle",{cx:"12",cy:"12",r:"4"}),r.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})}),r.jsx("a",{href:"#","aria-label":"LinkedIn",className:"social-icon",children:"in"}),r.jsx("a",{href:"#","aria-label":"YouTube",className:"social-icon",children:r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z"})})})]})]}),r.jsx("style",{children:`

        /* ==========================================
           MAIN WRAPPER
        ========================================== */

        .property-footer-wrapper {
          width: calc(100% - 40px) !important;
          margin-left: 20px !important;
          margin-right: 20px !important;
          margin-top: 16px !important;
          box-sizing: border-box !important;
        }


        /* ==========================================
           DISCLAIMER
        ========================================== */

        .property-footer-wrapper .disclaimer-section {
          width: 100% !important;
          max-width:96%;
          margin-left:20px;
          box-sizing: border-box !important;
        }


        /* ==========================================
           FOOTER
        ========================================== */

        .property-footer-wrapper .property-footer {
          width: 100% !important;
           max-width:96%;
          margin-left:20px;
          box-sizing: border-box !important;
        }


        /* ==========================================
           NAVIGATION
        ========================================== */

        .footer-nav a {
          text-decoration: none;
          color: #52677d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .7px;
          white-space: nowrap;
          transition: color .2s ease;
        }

        .footer-nav a:hover {
          color: #b07c25;
        }


        /* ==========================================
           SOCIAL ICON
        ========================================== */

        .social-icon {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #eef4f8;
          color: #345b7b;
          display: grid;
          place-items: center;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          transition:
            background .2s ease,
            color .2s ease,
            transform .2s ease;
        }

        .social-icon:hover {
          background: #dfeaf2;
          color: #173f62;
          transform: translateY(-1px);
        }


        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {

          .property-footer-wrapper {
            width: calc(100% - 32px) !important;
            margin-left: 16px !important;
            margin-right: 16px !important;
          }

          .footer-inner {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .footer-copyright {
            text-align: center;
          }

          .footer-nav {
            flex-wrap: wrap !important;
            gap: 14px !important;
          }

          .footer-social {
            justify-content: center !important;
          }

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {

          .property-footer-wrapper {
            width: calc(100% - 24px) !important;
            margin-left: 12px !important;
            margin-right: 12px !important;
            margin-top: 16px !important;
          }

          .disclaimer-section {
            padding: 16px 14px !important;
            border-radius: 14px !important;
            
          }

          .disclaimer-inner {
            gap: 12px !important;
          }

          .disclaimer-left {
            width: 80px !important;
            min-width: 80px !important;
            padding-right: 10px !important;
          }

          .disclaimer-content {
            padding-right: 0 !important;
          }

          .disclaimer-content p {
            font-size: 8px !important;
            line-height: 1.6 !important;
          }

          .property-footer {
            padding: 14px 4px !important;
          }

          .footer-nav {
            gap: 11px !important;
          }

          .footer-nav a {
            font-size: 6.5px !important;
          }

          .footer-copyright {
            font-size: 6.5px !important;
          }

        }


        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 430px) {

          .property-footer-wrapper {
            width: calc(100% - 20px) !important;
            margin-left: 10px !important;
            margin-right: 10px !important;
          }

          .disclaimer-section {
            padding: 14px 11px !important;
          }

          .disclaimer-left {
            width: 70px !important;
            min-width: 70px !important;
            padding-right: 8px !important;
          }

          .disclaimer-left > div:first-child {
            width: 32px !important;
            height: 32px !important;
          }

          .disclaimer-left > div:nth-child(2) {
            font-size: 7px !important;
          }

          .disclaimer-content p {
            font-size: 7.5px !important;
          }

          .footer-nav {
            gap: 8px 11px !important;
          }

          .footer-nav a {
            font-size: 6px !important;
          }

          .footer-copyright {
            font-size: 6px !important;
          }

          .social-icon {
            width: 21px !important;
            height: 21px !important;
          }

        }


        /* ==========================================
           VERY SMALL MOBILE
        ========================================== */

        @media (max-width: 350px) {

          .property-footer-wrapper {
            width: calc(100% - 16px) !important;
            margin-left: 8px !important;
            margin-right: 8px !important;
          }

          .disclaimer-inner {
            gap: 8px !important;
          }

          .disclaimer-left {
            width: 62px !important;
            min-width: 62px !important;
          }

          .disclaimer-content p {
            font-size: 7px !important;
          }

          .footer-nav {
            gap: 7px !important;
          }

        }

      `})]})]}),r.jsx("style",{children:`

      /* =========================================================
         HOMWISOR TYPOGRAPHY + PROPERTY DETAIL RESPONSIVE FIX
      ========================================================= */
      .property-detail-page,
      .property-detail-page * {
        font-family: "Manrope", Arial, sans-serif;
        box-sizing: border-box;
      }

      .property-detail-page {
        overflow-x: hidden;
      }

      /* Desktop typography - larger and clearer */
      /* =========================================================
         DESKTOP HERO - CLEAN 2 COLUMN LAYOUT
         Left = property information
         Right = enquiry form
      ========================================================= */
      .property-hero {
        min-height: 520px !important;
      }

      .property-hero-inner {
        width: 100% !important;
        max-width: 1280px !important;
        min-height: 520px !important;
        grid-template-columns: minmax(0, 1fr) 400px !important;
        gap: 42px !important;
        padding: 48px 24px !important;
      }

      .property-hero-inner > div:first-child {
        width: 100%;
        max-width: 570px;
        justify-self: start;
        position: relative;
        z-index: 2;
      }

      .property-hero-inner > div:first-child > div:first-child {
        min-width: 0 !important;
        width: min(100%, 500px) !important;
        padding: 18px 20px !important;
      }

      .property-hero-inner > div:first-child > div:first-child > div:first-child {
        font-size: 12px !important;
      }

      .property-hero-inner > div:first-child > div:first-child > div:nth-child(2) {
        font-size: 28px !important;
        line-height: 1.15 !important;
      }

      .property-hero-inner > div:first-child > div:first-child > div:nth-child(3) {
        font-size: 14px !important;
      }

      .property-hero-inner > div:first-child > div:nth-child(2) {
        width: min(100%, 500px) !important;
        max-width: 500px !important;
      }

      .property-hero .hero-number {
        left: 66% !important;
        top: 50% !important;
        font-size: 420px !important;
        letter-spacing: -18px !important;
        z-index: 0 !important;
      }

      .property-hero-inner > div:first-child > div:nth-child(2) > div {
        font-size: 14px !important;
      }

      .property-hero-form {
        width: 100%;
        max-width: 440px;
        justify-self: end;
      }

      .property-hero-form h3 {
        font-size: 21px !important;
      }

      .property-hero-form > p {
        font-size: 11px !important;
      }

      .property-hero-form label {
        font-size: 11px !important;
      }

      .property-hero-form input,
      .property-hero-form select {
        font-size: 13px !important;
        height: 44px !important;
      }

      .property-hero-form button {
        font-size: 13px !important;
        min-height: 44px;
      }

      /* Similar Projects - Home page visual language */
      .related-section .hw-similar-card {
        border: 1px solid #e2e2e2 !important;
        border-radius: 9px !important;
        background: #fff !important;
        box-shadow: 0 2px 9px rgba(0,0,0,.045) !important;
        overflow: hidden !important;
      }

      .related-section .hw-similar-card:hover {
        transform: translateY(-3px);
        border-color: rgba(212,175,55,.55) !important;
        box-shadow: 0 10px 25px rgba(0,0,0,.10) !important;
      }

      .related-section .hw-similar-image {
        aspect-ratio: auto !important;
        height: 165px !important;
        position: relative;
      }

      .related-section .hw-similar-image img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        display: block;
      }

      .related-section .hw-similar-card > div:last-child {
        padding: 11px 10px 10px !important;
      }

      .related-section .hw-similar-card > div:last-child > div:first-child {
        color: #111827 !important;
        font-size: 15px !important;
        line-height: 1.35 !important;
        font-weight: 800 !important;
      }

      .related-section .hw-similar-card > div:last-child > div:nth-child(2) {
        color: #b48722 !important;
        font-size: 15px !important;
        font-weight: 900 !important;
      }

      .related-section .hw-similar-card > div:last-child > div:nth-child(3) {
        color: #707070 !important;
        font-size: 12px !important;
      }

      @media (max-width: 760px) {
        .property-hero {
          min-height: auto !important;
        }

        .property-hero-inner {
          min-height: auto !important;
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }

        .property-hero-inner > div:first-child {
          max-width: none !important;
        }

        .property-hero-form {
          max-width: 520px !important;
          justify-self: center !important;
        }

        .hero-number {
          left: 50% !important;
          font-size: 180px !important;
        }

        .related-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }

      @media (min-width: 761px) and (max-width: 1050px) {
        .property-hero-inner {
          grid-template-columns: minmax(0, 1fr) 350px !important;
          gap: 24px !important;
          padding: 38px 20px !important;
        }

        .property-hero-inner > div:first-child {
          max-width: 520px !important;
        }

        .property-hero-inner > div:first-child > div:first-child {
          width: 100% !important;
        }

        .property-hero-inner > div:first-child > div:nth-child(2) {
          width: 100% !important;
        }

        .property-hero-form {
          max-width: 350px !important;
        }

        .property-hero .hero-number {
          left: 62% !important;
          font-size: 300px !important;
        }
      }

      @media (max-width: 700px) {
        .property-hero-inner {
          padding: 24px 12px !important;
        }

        .property-hero-inner > div:first-child > div:first-child {
          min-width: 0 !important;
          width: 100% !important;
          padding: 14px 15px !important;
        }

        .property-hero-inner > div:first-child > div:first-child > div:nth-child(2) {
          font-size: 21px !important;
        }

        .property-hero-inner > div:first-child > div:nth-child(2) {
          max-width: none !important;
          width: 100% !important;
        }

        .property-hero-form {
          max-width: none !important;
          padding: 16px !important;
          border-radius: 13px !important;
        }

        .property-hero-form h3 {
          font-size: 18px !important;
        }

        .related-grid {
          gap: 9px !important;
        }

        .related-section .hw-similar-image {
          height: 135px !important;
        }

        .related-section .hw-similar-card > div:last-child {
          padding: 9px 8px !important;
        }

        .related-section .hw-similar-card > div:last-child > div:first-child {
          font-size: 13px !important;
        }

        .related-section .hw-similar-card > div:last-child > div:nth-child(2) {
          font-size: 14px !important;
        }

        .related-section .hw-similar-card > div:last-child > div:nth-child(3) {
          font-size: 11px !important;
        }
      }

      @media (max-width: 480px) {
        .hero-number {
          font-size: 100px !important;
        }

        .property-hero-inner {
          padding: 20px 10px !important;
        }

        .property-hero-form {
          padding: 14px !important;
        }

        .related-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 8px !important;
        }

        .related-section .hw-similar-image {
          height: 120px !important;
        }
      }
      `}),r.jsx("div",{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:45,background:"#fff",borderTop:"1px solid #e5e7eb",boxShadow:"0 -8px 30px rgba(0,0,0,.08)",padding:"10px 16px"},children:r.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",gap:12,justifyContent:"space-between"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[r.jsx("img",{src:t.image,alt:t.title,style:{width:44,height:44,borderRadius:8,objectFit:"cover",border:"1px solid #eee",flexShrink:0}}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontWeight:800,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#111"},children:t.title}),r.jsxs("div",{style:{fontWeight:700,fontSize:12,color:j},children:[t.priceRange||t.price,"* Onwards"]})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[r.jsxs("button",{style:{display:"flex",alignItems:"center",gap:7,background:"#fff",border:"1px solid #e5e7eb",padding:"10px 16px",borderRadius:24,fontWeight:700,fontSize:13,color:"#374151",cursor:"pointer"},className:"hide-small",children:[r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#374151",strokeWidth:"1.8",children:[r.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.jsx("polyline",{points:"7 10 12 15 17 10"}),r.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Brochure"]}),r.jsxs("button",{onClick:()=>x(!0),style:{display:"flex",alignItems:"center",gap:7,background:j,color:"#fff",padding:"10px 20px",borderRadius:24,fontWeight:700,fontSize:13,border:"none",cursor:"pointer",boxShadow:"0 4px 14px rgba(0,0,0,.15)"},children:[r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:[r.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"ENQUIRE NOW"]}),r.jsx("a",{href:"https://wa.me/919811750130",target:"_blank",rel:"noreferrer",style:{width:44,height:44,borderRadius:"50%",background:"#25D366",display:"grid",placeItems:"center",boxShadow:"0 4px 14px rgba(37,211,102,.35)"},children:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"#fff",children:r.jsx("path",{d:"M19.1 4.9C16.9 2.7 13.9 1.5 10.8 1.5 4.9 1.5 .2 6.2 .2 12c0 1.9.5 3.7 1.4 5.3L0 24l6.9-1.8c1.5.8 3.2 1.2 4.9 1.2 5.9 0 10.6-4.7 10.6-10.6 0-2.8-1.1-5.5-3.3-7.9zm-8.3 15.6c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.8-3.9 8.7-8.7 8.7z"})})})]})]})}),u&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",display:"grid",placeItems:"center",zIndex:60,padding:16},children:r.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:20,width:"100%",maxWidth:420,position:"relative"},children:[r.jsx("button",{onClick:()=>x(!1),style:{position:"absolute",top:12,right:12,width:30,height:30,borderRadius:"50%",background:"#f3f4f6",border:"none",cursor:"pointer"},children:"✕"}),r.jsxs("h3",{style:{fontWeight:800,fontSize:16},children:["Enquire About ",t.title]}),r.jsx("p",{style:{fontSize:12,color:"#6b7280",marginTop:4},children:"Get best deals & site visit – expert callback in 30 mins"}),l&&r.jsx("div",{style:{marginTop:12,background:"#ecfdf5",color:"#065f46",padding:"10px 12px",borderRadius:8,fontWeight:600,fontSize:13,border:"1px solid #a7f3d0"},children:"✓ Enquiry sent! Our team will contact you shortly."}),r.jsxs("form",{onSubmit:p,style:{display:"grid",gap:10,marginTop:14},children:[r.jsx("input",{required:!0,value:a.name,onChange:P=>s({...a,name:P.target.value}),placeholder:"Your Name *",style:{height:42,borderRadius:10,border:"1px solid #e5e7eb",padding:"0 12px",fontSize:13,outline:"none"}}),r.jsx("input",{required:!0,value:a.phone,onChange:P=>s({...a,phone:P.target.value}),placeholder:"Phone Number *",style:{height:42,borderRadius:10,border:"1px solid #e5e7eb",padding:"0 12px",fontSize:13,outline:"none"}}),r.jsx("input",{value:a.email,onChange:P=>s({...a,email:P.target.value}),placeholder:"Email",style:{height:42,borderRadius:10,border:"1px solid #e5e7eb",padding:"0 12px",fontSize:13,outline:"none"}}),r.jsx("textarea",{value:a.message,onChange:P=>s({...a,message:P.target.value}),placeholder:"Message",rows:2,style:{borderRadius:10,border:"1px solid #e5e7eb",padding:"10px 12px",fontSize:13,outline:"none",resize:"none"}}),r.jsx("button",{type:"submit",style:{height:44,background:j,color:"#fff",border:"none",borderRadius:10,fontWeight:800,cursor:"pointer"},children:"Send Enquiry"})]})]})}),r.jsx("style",{children:`
        @media(max-width: 960px){
          .hero-number{ font-size:180px !important; left:50% !important; }
          .highlights-grid{ grid-template-columns: 1fr !important; }
          .stats4{ grid-template-columns: repeat(2,1fr) !important; }
          .amenities-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .gallery-grid{ grid-template-columns: 1fr 1fr !important; }
          .loc-grid{ grid-template-columns: 1fr !important; }
          .related-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .dev-nav{ display:none !important; }
          .hide-mobile{ display:none !important; }
        }
        @media(max-width: 640px){
          .gallery-grid{ grid-template-columns: 1fr !important; }
          .related-grid{ grid-template-columns: 1fr !important; }
          .hide-small{ display:none !important; }
        }
      `}),r.jsx("style",{children:`
        .property-detail-page .related-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        }

        @media (max-width: 900px) {
          .property-detail-page .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 640px) {
          .property-detail-page .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 8px !important;
          }

          .property-detail-page .related-card {
            min-width: 0 !important;
          }

          .property-detail-page .related-image {
            height: 120px !important;
            aspect-ratio: auto !important;
          }
        }

        @media (max-width: 380px) {
          .property-detail-page .related-grid {
            gap: 7px !important;
          }

          .property-detail-page .related-image {
            height: 105px !important;
          }
        }
      `})]})}function i2(){const[e,t]=E.useState([]),[n,i]=E.useState(0),[o,a]=E.useState(!0),[s,l]=E.useState(!0),[d,c]=E.useState(!0),f=E.useRef(null);E.useEffect(()=>{K.get("/snaps").then(b=>{t(b.data),c(!1)}).catch(()=>c(!1))},[]),E.useEffect(()=>{f.current&&(o?f.current.play().catch(()=>{}):f.current.pause())},[o,n]),E.useEffect(()=>{const b=R=>{R.key==="ArrowDown"&&k(),R.key==="ArrowUp"&&S(),R.key===" "&&(R.preventDefault(),a(p=>!p))};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)});const u=e[n],x=e.length,k=()=>i(b=>(b+1)%x),S=()=>i(b=>(b-1+x)%x);return d?r.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"Loading snaps..."}):u?r.jsxs("div",{style:{minHeight:"100vh",background:"#0a0a0a",color:"#fff",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",borderBottom:"1px solid rgba(255,255,255,.08)",background:"#0a0a0a",position:"sticky",top:0,zIndex:10},children:[r.jsxs(H,{to:"/",style:{display:"flex",alignItems:"center",gap:8,color:"#fff",fontWeight:800,fontSize:14},children:[r.jsx("span",{style:{width:28,height:28,background:"#d8232a",borderRadius:6,display:"grid",placeItems:"center",fontWeight:900,fontSize:12},children:"100"}),"acress.com",r.jsx("span",{style:{fontWeight:400,opacity:.6,fontSize:12,marginLeft:4},children:"/ property-snaps"})]}),r.jsx(H,{to:"/",style:{width:34,height:34,borderRadius:"50%",background:"rgba(255,255,255,.08)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.12)"},children:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:r.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),r.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"14px",display:"grid",gridTemplateColumns:"420px 420px",gap:18,justifyContent:"center",alignItems:"start"},className:"snaps-layout",children:[r.jsxs("div",{style:{position:"relative",background:"#000",borderRadius:20,overflow:"hidden",aspectRatio:"9/16",maxHeight:"78vh",border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 20px 60px rgba(0,0,0,.6)"},className:"video-box",children:[r.jsx("video",{ref:f,src:u.videoUrl,poster:u.image||u.thumbnail,muted:s,loop:!0,playsInline:!0,autoPlay:!0,style:{width:"100%",height:"100%",objectFit:"cover"},onClick:()=>a(!o)},u.id),r.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:12,background:"linear-gradient(to bottom, rgba(0,0,0,.55) 0%, transparent 100%)",display:"flex",alignItems:"center",gap:10},children:[r.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",flexShrink:0,border:"2px solid rgba(255,255,255,.9)"},children:r.jsx("span",{style:{fontWeight:900,fontSize:11,color:"#d8232a"},children:"100"})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:{fontWeight:700,fontSize:13,lineHeight:1.1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff"},children:u.title}),r.jsx("div",{style:{fontSize:11,opacity:.8,color:"#fff"},children:"HomWisor"})]}),r.jsx("button",{onClick:()=>l(!s),style:{width:34,height:34,borderRadius:"50%",background:s?"rgba(0,0,0,.5)":"rgba(255,255,255,.9)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:s?"#fff":"#111",cursor:"pointer",backdropFilter:"blur(6px)"},children:s?r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),r.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),r.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}),r.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),r.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}):r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),r.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),r.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]})})]}),r.jsxs("div",{style:{position:"absolute",top:"38%",left:0,right:0,textAlign:"center",pointerEvents:"none"},children:[r.jsx("div",{style:{fontSize:10,letterSpacing:1.5,opacity:.9,color:"#fff",fontWeight:600,textShadow:"0 2px 10px rgba(0,0,0,.6)"},children:"WHERE"}),r.jsx("div",{style:{fontSize:22,fontWeight:800,letterSpacing:.5,color:"#fff",textShadow:"0 4px 20px rgba(0,0,0,.7)",marginTop:2,fontFamily:"'Playfair Display', serif"},children:"SPACIOUS LIVING"}),r.jsx("div",{style:{width:40,height:1.5,background:"#fff",margin:"6px auto",opacity:.8}}),r.jsx("div",{style:{fontSize:9,letterSpacing:2,opacity:.85,color:"#fff"},children:u.badge||"LUXURY EDITION"})]}),r.jsxs("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",pointerEvents:"none"},children:[!o&&r.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(0,0,0,.45)",backdropFilter:"blur(8px)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)"},children:r.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"#fff",children:r.jsx("path",{d:"M8 5.14v14l11-7z"})})}),r.jsx("button",{onClick:()=>a(!o),style:{position:"absolute",inset:0,background:"transparent",border:"none",cursor:"pointer",pointerEvents:"auto"},"aria-label":"play"})]}),r.jsx("button",{onClick:S,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:r.jsx("path",{d:"M15 18l-6-6 6-6"})})}),r.jsx("button",{onClick:k,style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:r.jsx("path",{d:"M9 18l6-6-6-6"})})}),r.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"10px 12px",background:"linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.2) 60%, transparent 100%)"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[r.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[r.jsx("path",{d:"M19 12H5"}),r.jsx("path",{d:"M12 19l-7-7 7-7"})]})}),r.jsx("button",{onClick:()=>a(!o),style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,.9)",border:"none",display:"grid",placeItems:"center",cursor:"pointer"},children:o?r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:[r.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),r.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}):r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:r.jsx("path",{d:"M8 5.14v14l11-7z"})})}),r.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"M12 5l7 7-7 7"})]})}),r.jsx("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:r.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)",color:"#fff"},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[r.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),r.jsx("polyline",{points:"16 6 12 2 8 6"}),r.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]})})})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[r.jsxs("div",{style:{flex:1,background:"rgba(0,0,0,.35)",border:"1px solid rgba(255,255,255,.12)",borderRadius:12,padding:8,display:"flex",alignItems:"center",gap:8},children:[r.jsx("img",{src:u.thumbnail||u.image,alt:"thumb",style:{width:42,height:32,borderRadius:6,objectFit:"cover",border:"1px solid rgba(255,255,255,.2)"}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{fontSize:11,fontWeight:600,lineHeight:1.2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Welcome to a ",u.title.slice(0,28),"..."]}),r.jsxs("div",{style:{fontSize:10,opacity:.7},children:["Where spacious living • ",u.location]})]})]}),r.jsxs("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{background:"#d8232a",color:"#fff",padding:"8px 12px",borderRadius:20,fontWeight:800,fontSize:11,display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap",textDecoration:"none"},children:[r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z"})}),u.phone]})]})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,maxHeight:"78vh",overflowY:"auto"},className:"scrollbar-hide",children:[r.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid rgba(255,255,255,.08)",borderRadius:16,padding:14,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:1,color:"rgba(255,255,255,.5)"},children:"NAVIGATION"}),r.jsxs("div",{style:{fontWeight:800,fontSize:22,marginTop:2},children:[n+1,r.jsxs("span",{style:{opacity:.35,fontWeight:600},children:["/",x]})]})]}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx("button",{onClick:S,disabled:x<=1,style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",opacity:n===0?.6:1},children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:r.jsx("path",{d:"M18 15l-6-6-6 6"})})}),r.jsx("button",{onClick:k,disabled:x<=1,style:{width:44,height:44,borderRadius:12,background:"#2a2a2a",border:"1px solid rgba(255,255,255,.12)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,.2)"},children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:r.jsx("path",{d:"M6 9l6 6 6-6"})})})]})]}),r.jsxs("div",{style:{background:"#f8f9fb",borderRadius:20,padding:16,color:"#111",boxShadow:"0 20px 60px rgba(0,0,0,.25)",border:"1px solid #eef0f3"},children:[r.jsxs("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"flex-start"},children:[r.jsx("span",{style:{color:"#dc2626",marginTop:1},children:"⚡"}),r.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#991b1b",lineHeight:1.4},children:u.demandText})]}),r.jsxs("div",{style:{background:"#fefce8",border:"1px solid #fde68a",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"center",marginTop:8},children:[r.jsx("span",{style:{width:8,height:8,background:"#22c55e",borderRadius:"50%",display:"inline-block",boxShadow:"0 0 0 4px rgba(34,197,94,.15)"}}),r.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#92400e"},children:[u.activeBuyers," active buyers viewing this project right now"]})]}),r.jsxs("div",{style:{marginTop:14},children:[r.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"PROJECT OVERVIEW"}),r.jsx("div",{style:{background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:12,padding:12,marginTop:8},children:r.jsxs("div",{style:{fontSize:13,lineHeight:1.5,color:"#374151",fontStyle:"italic"},children:['"',u.description,'"']})})]}),r.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center"},children:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#dc2626",strokeWidth:"1.8",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"MICRO-MARKET LOCATION"}),r.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.microMarket||u.location})]})]}),r.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center",color:"#059669"},children:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#059669",strokeWidth:"1.8",children:[r.jsx("path",{d:"M3 21h18"}),r.jsx("path",{d:"M3 7v14"}),r.jsx("path",{d:"M9 21V7"}),r.jsx("path",{d:"M15 21V7"}),r.jsx("path",{d:"M21 7V21"}),r.jsx("path",{d:"M3 7l9-4 9 4"}),r.jsx("path",{d:"M9 7h6"})]})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"INVESTMENT/PRICE"}),r.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.price})]}),r.jsx("button",{style:{width:32,height:32,borderRadius:10,background:"#fff",border:"1px solid #e5e7eb",display:"grid",placeItems:"center",cursor:"pointer"},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#6b7280",strokeWidth:"1.8",children:[r.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7-6 11-6 11S6 15 6 8z"}),r.jsx("path",{d:"M10 21h4"}),r.jsx("path",{d:"M12 17v4"})]})})]}),r.jsxs("div",{style:{background:"#0f1e2e",borderRadius:14,padding:12,marginTop:12,color:"#fff"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontWeight:700,fontSize:11,letterSpacing:.4},children:[r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"1.8",children:[r.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"INVESTOR MATRIX TOOL"]}),r.jsx("span",{style:{fontSize:10,fontWeight:700,background:"rgba(56,189,248,.15)",color:"#38bdf8",padding:"3px 7px",borderRadius:20,border:"1px solid rgba(56,189,248,.25)"},children:"◉ Verified ROI"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12,borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:12},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,opacity:.6},children:"Est. Monthly Rental"}),r.jsx("div",{style:{fontWeight:800,fontSize:13,marginTop:2},children:u.monthlyRental})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:{fontSize:10,opacity:.6},children:"Annualized ROI Yield"}),r.jsxs("div",{style:{fontWeight:800,fontSize:13,marginTop:2,color:"#22c55e"},children:["~ ",u.roi]})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[r.jsx("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{height:36,background:"#d8232a",color:"#fff",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"Call Now"}),r.jsx(H,{to:`/property/${u.id.replace("snap","p")||""}`,style:{height:36,background:"#fff",color:"#111",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"View Details"})]})]}),r.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto"},className:"scrollbar-hide",children:e.map((b,R)=>r.jsxs("button",{onClick:()=>i(R),style:{flexShrink:0,width:64,height:44,borderRadius:8,overflow:"hidden",border:R===n?"2px solid #d8232a":"1px solid #e5e7eb",opacity:R===n?1:.6,cursor:"pointer",position:"relative",padding:0},children:[r.jsx("img",{src:b.thumbnail||b.image,alt:b.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),R===n&&r.jsx("span",{style:{position:"absolute",inset:0,background:"rgba(216,35,42,.15)",borderRadius:6}})]},b.id))})]}),r.jsxs("div",{style:{textAlign:"center",fontSize:11,opacity:.5,paddingBottom:10},children:["Swipe up/down or use arrow keys • ",x," Snaps • Auto-play • Fully dynamic from Admin"]})]})]}),r.jsx("style",{children:`
        @media(max-width: 960px){
          .snaps-layout{ grid-template-columns: 1fr !important; max-width: 500px !important; }
          .video-box{ max-height: 64vh !important; }
        }
        .scrollbar-hide::-webkit-scrollbar{ display:none; }
        .scrollbar-hide{ -ms-overflow-style:none; scrollbar-width:none; }
      `})]}):r.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"No snaps found. Add via Admin Panel."})}const Nn="#D4AF37",Ir="#9A7418";function o2(){const[e,t]=E.useState({name:"",phone:"",email:"",subject:"",message:""}),n=o=>{t({...e,[o.target.name]:o.target.value})},i=o=>{o.preventDefault(),alert("Thank you! Our property expert will contact you shortly."),t({name:"",phone:"",email:"",subject:"",message:""})};return r.jsxs("div",{className:"contact-page",children:[r.jsx(Rr,{}),r.jsxs("section",{className:"contact-hero",children:[r.jsx("div",{className:"contact-hero-overlay"}),r.jsxs("div",{className:"contact-hero-content",children:[r.jsx("span",{className:"contact-eyebrow",children:"GET IN TOUCH"}),r.jsxs("h1",{children:["Let's Find Your",r.jsx("span",{children:" Dream Property"})]}),r.jsx("p",{children:"Have questions about a property or looking for your next investment? Our property experts are here to help."})]})]}),r.jsx("section",{className:"contact-section",children:r.jsxs("div",{className:"contact-container",children:[r.jsxs("div",{className:"contact-info",children:[r.jsx("span",{className:"section-eyebrow",children:"CONTACT US"}),r.jsxs("h2",{children:["We’re Here To",r.jsx("br",{}),r.jsx("span",{children:"Help You"})]}),r.jsx("p",{className:"contact-intro",children:"Whether you're buying, selling or investing in real estate, our team is ready to assist you with expert guidance and personalized property solutions."}),r.jsxs("div",{className:"info-list",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"})})}),r.jsxs("div",{children:[r.jsx("span",{children:"Call Us"}),r.jsx("a",{href:"tel:8500900100",children:"+91 8500 900 100"})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"m3 7 9 6 9-6"})]})}),r.jsxs("div",{children:[r.jsx("span",{children:"Email Us"}),r.jsx("a",{href:"mailto:info@homwisor.com",children:"info@homwisor.com"})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}),r.jsxs("div",{children:[r.jsx("span",{children:"Our Office"}),r.jsx("p",{children:"Gurugram, Haryana, India"})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M12 7v5l3 2"})]})}),r.jsxs("div",{children:[r.jsx("span",{children:"Working Hours"}),r.jsx("p",{children:"Mon - Sat : 9:00 AM - 7:00 PM"})]})]})]}),r.jsxs("a",{href:"https://wa.me/918500900100",target:"_blank",rel:"noopener noreferrer",className:"contact-whatsapp",children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),"Chat With Us On WhatsApp"]})]}),r.jsxs("div",{className:"contact-form-card",children:[r.jsxs("div",{className:"form-heading",children:[r.jsx("span",{children:"SEND US A MESSAGE"}),r.jsxs("h2",{children:["How Can We",r.jsx("strong",{children:" Help You?"})]}),r.jsx("p",{children:"Fill out the form below and our team will get back to you shortly."})]}),r.jsxs("form",{onSubmit:i,children:[r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Your Name"}),r.jsx("input",{type:"text",name:"name",value:e.name,onChange:n,placeholder:"Enter your name",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Phone Number"}),r.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:n,placeholder:"+91 XXXXX XXXXX",required:!0})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Email Address"}),r.jsx("input",{type:"email",name:"email",value:e.email,onChange:n,placeholder:"Enter your email",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"I'm Interested In"}),r.jsxs("select",{name:"subject",value:e.subject,onChange:n,required:!0,children:[r.jsx("option",{value:"",children:"Select an option"}),r.jsx("option",{children:"Buying a Property"}),r.jsx("option",{children:"Selling a Property"}),r.jsx("option",{children:"Property Investment"}),r.jsx("option",{children:"Site Visit"}),r.jsx("option",{children:"General Enquiry"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Message"}),r.jsx("textarea",{name:"message",value:e.message,onChange:n,placeholder:"Tell us how we can help...",rows:"5"})]}),r.jsxs("button",{type:"submit",className:"submit-btn",children:[r.jsx("span",{children:"Send Message"}),r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]}),r.jsx("p",{className:"form-note",children:"Your information is safe with us. We never share your details with third parties."})]})]})]})}),r.jsx(Cr,{}),r.jsx("style",{children:`

        .contact-page {
          background: #fff;
          color: #111;
          font-family:
            "Manrope",
            "Inter",
            Arial,
            sans-serif;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 82% 28%,
              rgba(212,175,55,.16),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #050505 0%,
              #0d0d0d 55%,
              #1a160d 100%
            );
        }

        .contact-hero::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          right: -150px;
          top: -200px;
          background: rgba(212,175,55,.10);
          filter: blur(10px);
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          left: -180px;
          bottom: -220px;
          background: rgba(212,175,55,.06);
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at center,
              rgba(255,255,255,.03),
              transparent 55%
            );
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 120px 20px 70px;
        }

        .contact-eyebrow,
        .section-eyebrow {
          display: inline-block;
          color: ${Nn};
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .contact-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -2px;
        }

        .contact-hero h1 span {
          color: ${Nn};
        }

        .contact-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.8;
        }

        /* =====================================================
           CONTACT SECTION
        ===================================================== */

        .contact-section {
          padding: 50px 20px 0px 20px;
          background: #fff;
        }

        .contact-container {
          width: min(1180px, 100%);
          margin: 0 auto;

          display: grid;
          grid-template-columns:
            minmax(0, .9fr)
            minmax(0, 1.1fr);

          gap: 75px;
          align-items: start;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .contact-info h2 {
          margin: 13px 0 0;
          color: #09172b;
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .contact-info h2 span {
          color: ${Ir};
        }

        .contact-intro {
          max-width: 500px;
          margin: 20px 0 0;
          color: #6d7076;
          font-size: 13px;
          line-height: 1.85;
        }

        /* =====================================================
           INFO LIST
        ===================================================== */

        .info-list {
          display: grid;
          gap: 20px;
          margin-top: 35px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .info-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 13px;
          background: #f7f3e7;
          color: ${Ir};
        }

        .info-icon svg {
          width: 21px;
          height: 21px;
        }

        .info-item > div:last-child {
          min-width: 0;
        }

        .info-item span {
          display: block;
          color: #969696;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .info-item a,
        .info-item p {
          display: block;
          margin: 4px 0 0;
          color: #172235;
          font-size: 13px;
          font-weight: 750;
          text-decoration: none;
        }

        .info-item a:hover {
          color: ${Ir};
        }

        /* =====================================================
           WHATSAPP
        ===================================================== */

        .contact-whatsapp {
          width: fit-content;
          margin-top: 32px;

          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 12px 18px;
          border-radius: 9px;

          background: #138a42;
          color: #fff;

          text-decoration: none;
          font-size: 11px;
          font-weight: 800;

          transition: .25s ease;
        }

        .contact-whatsapp svg {
          width: 17px;
          height: 17px;
        }

        .contact-whatsapp:hover {
          background: #0e7035;
          transform: translateY(-2px);
        }

        /* =====================================================
           FORM CARD
        ===================================================== */

        .contact-form-card {
          padding: 35px;
          border: 1px solid #e8e6df;
          border-radius: 22px;
          background: #fff;

          box-shadow:
            0 20px 60px rgba(10,20,40,.07);
        }

        .form-heading > span {
          color: ${Ir};
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.7px;
        }

        .form-heading h2 {
          margin: 8px 0 0;
          color: #09172b;
          font-size: 27px;
          line-height: 1.25;
          font-weight: 800;
        }

        .form-heading h2 strong {
          color: ${Ir};
        }

        .form-heading p {
          margin: 8px 0 25px;
          color: #777;
          font-size: 11px;
          line-height: 1.6;
        }

        /* =====================================================
           FORM
        ===================================================== */

        .contact-form-card form {
          display: grid;
          gap: 17px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .form-group label {
          color: #333;
          font-size: 10px;
          font-weight: 800;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid #e4e4e4;
          border-radius: 9px;
          outline: none;
          background: #fff;

          padding: 12px 13px;

          color: #222;
          font-family: inherit;
          font-size: 11px;

          transition: .2s ease;
        }

        .form-group input,
        .form-group select {
          height: 43px;
        }

        .form-group textarea {
          min-height: 115px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: ${Nn};
          box-shadow:
            0 0 0 3px rgba(212,175,55,.10);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #aaa;
        }

        /* =====================================================
           SUBMIT
        ===================================================== */

        .submit-btn {
          width: 100%;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          border: none;
          border-radius: 9px;

          background: #09172b;
          color: #fff;

          font-family: inherit;
          font-size: 11px;
          font-weight: 800;

          cursor: pointer;
          transition: .25s ease;
        }

        .submit-btn svg {
          width: 16px;
          height: 16px;
        }

        .submit-btn:hover {
          background: ${Ir};
          transform: translateY(-1px);
        }

        .form-note {
          margin: -4px 0 0;
          text-align: center;
          color: #999;
          font-size: 9px;
        }

        /* =====================================================
           BOTTOM CTA
        ===================================================== */

        .contact-bottom {
          padding: 70px 20px;
          background: #09172b;
        }

        .contact-bottom-inner {
          width: min(1100px, 100%);
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .contact-bottom h2 {
          margin: 10px 0 0;
          color: #fff;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 850;
        }

        .contact-bottom h2 span {
          color: ${Nn};
        }

        .contact-bottom p {
          max-width: 570px;
          margin: 10px 0 0;
          color: rgba(255,255,255,.62);
          font-size: 12px;
          line-height: 1.7;
        }

        .bottom-call-btn {
          flex-shrink: 0;

          padding: 13px 22px;
          border-radius: 9px;

          background: ${Nn};
          color: #111;

          text-decoration: none;
          font-size: 11px;
          font-weight: 850;

          transition: .25s ease;
        }

        .bottom-call-btn:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .contact-container {
            grid-template-columns: 1fr;
            gap: 50px;
            max-width: 700px;
          }

          .contact-info {
            text-align: center;
          }

          .contact-intro {
            margin-left: auto;
            margin-right: auto;
          }

          .info-list {
            max-width: 450px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .contact-whatsapp {
            margin-left: auto;
            margin-right: auto;
          }

          .contact-bottom-inner {
            flex-direction: column;
            text-align: center;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .contact-hero {
            min-height: 390px;
          }

          .contact-hero-content {
            padding: 110px 18px 55px;
          }

          .contact-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .contact-hero p {
            font-size: 12px;
            line-height: 1.7;
          }

          .contact-section {
            padding: 50px 20px 0px 20px;
          }

          .contact-info h2 {
            font-size: 34px;
          }

          .contact-intro {
            font-size: 12px;
          }

          .info-list {
            gap: 18px;
            margin-top: 28px;
          }

          .info-icon {
            width: 44px;
            height: 44px;
          }

          .contact-whatsapp {
            width: 100%;
            justify-content: center;
          }

          .contact-form-card {
            padding: 22px 17px;
            border-radius: 17px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-heading h2 {
            font-size: 24px;
          }

          .contact-bottom {
            padding: 55px 18px;
          }

          .contact-bottom h2 {
            font-size: 28px;
          }

          .bottom-call-btn {
            width: 100%;
            text-align: center;
          }

        }

      `})]})}function a2(){const[e,t]=E.useState({username:"admin",password:"admin123"}),[n,i]=E.useState(""),[o,a]=E.useState(!1),s=un(),l=async d=>{var c,f;d.preventDefault(),a(!0),i("");try{const u=await K.post("/admin/login",e);localStorage.setItem("admin_token",u.data.token),s("/admin/dashboard")}catch(u){i(((f=(c=u.response)==null?void 0:c.data)==null?void 0:f.error)||"Login failed")}finally{a(!1)}};return r.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#0a0a0a",padding:16},children:r.jsxs("div",{style:{width:"100%",maxWidth:420,background:"#fff",borderRadius:16,padding:24,boxShadow:"0 20px 60px rgba(0,0,0,.4)"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:18},children:[r.jsx("div",{style:{width:48,height:48,background:"#d8232a",borderRadius:10,display:"grid",placeItems:"center",margin:"0 auto",fontWeight:800,color:"#fff",fontSize:18},children:"HW"}),r.jsx("h1",{style:{fontWeight:800,fontSize:18,marginTop:10},children:"Admin Panel"}),r.jsx("p",{style:{fontSize:13,color:"#6b7280",marginTop:4},children:"HomWisor.com - Dynamic CMS"}),r.jsxs("div",{style:{marginTop:10,background:"#fef2f2",border:"1px solid #fecaca",color:"#991b1b",padding:"8px 10px",borderRadius:8,fontSize:12},children:["Demo: ",r.jsx("strong",{children:"admin"})," / ",r.jsx("strong",{children:"admin123"})]})]}),n&&r.jsx("div",{style:{background:"#fef2f2",color:"#991b1b",padding:"10px 12px",borderRadius:8,fontSize:13,marginBottom:12,border:"1px solid #fecaca"},children:n}),r.jsxs("form",{onSubmit:l,style:{display:"grid",gap:12},children:[r.jsxs("div",{children:[r.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#374151"},children:"Username"}),r.jsx("input",{value:e.username,onChange:d=>t({...e,username:d.target.value}),style:{width:"100%",marginTop:6,height:42,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px",fontSize:14,outline:"none"},placeholder:"admin"})]}),r.jsxs("div",{children:[r.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#374151"},children:"Password"}),r.jsx("input",{type:"password",value:e.password,onChange:d=>t({...e,password:d.target.value}),style:{width:"100%",marginTop:6,height:42,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px",fontSize:14,outline:"none"},placeholder:"••••••••"})]}),r.jsx("button",{disabled:o,style:{height:44,background:"#111",color:"#fff",border:"none",borderRadius:10,fontWeight:800,cursor:"pointer",opacity:o?.5:1},children:o?"Signing in...":"Sign In →"})]}),r.jsx("div",{style:{textAlign:"center",marginTop:14},children:r.jsx("a",{href:"/",style:{fontSize:13,color:"#6b7280"},children:"← Back to Website"})})]})})}function s2(){const[e,t]=E.useState(null),[n,i]=E.useState([]),[o,a]=E.useState([]),[s,l]=E.useState({hero:[],small:[]}),[d,c]=E.useState([]),[f,u]=E.useState([]),[x,k]=E.useState([]),[S,b]=E.useState("overview"),[R,p]=E.useState(null),h=un(),g=()=>{localStorage.getItem("admin_token")||h("/admin")};E.useEffect(()=>{g(),j()},[]);const j=async()=>{var y;try{const[me,xe,mt,At,Iu,Lu,Mu]=await Promise.all([K.get("/admin/stats").catch(()=>({data:{}})),K.get("/properties"),K.get("/enquiries").catch(()=>({data:[]})),K.get("/banners"),K.get("/locations"),K.get("/offers"),K.get("/snaps")]);t(me.data),i(xe.data),a(mt.data||[]),l(At.data),c(Iu.data),u(Lu.data),k(Mu.data||[])}catch(me){((y=me.response)==null?void 0:y.status)===401&&(localStorage.removeItem("admin_token"),h("/admin"))}},A=()=>{localStorage.removeItem("admin_token"),h("/admin")},N={title:"",price:"",priceRange:"",location:"",image:"",logo:"",brandColor:"#1e3a5f",developer:"",possession:"Dec 2032",landArea:"3.42 Acres",towers:"3 Tower – 110 Unit",propertyTypeDetail:"Residential Flats",highlights:"",gallery:"",category:"recommended",type:"Apartment",bhk:"3 BHK",tag:"Founder Choice",rera:!0,status:"Trending"},[m,C]=E.useState(N),[B,M]=E.useState(""),[q,$]=E.useState(""),F=(y,me,xe)=>new Promise(mt=>{const At=new Image;At.onload=()=>mt({ok:At.naturalWidth===me&&At.naturalHeight===xe,w:At.naturalWidth,h:At.naturalHeight}),At.onerror=()=>mt({ok:!1,w:0,h:0,err:!0}),At.src=y}),P=async y=>{if(y.preventDefault(),M(""),$(""),m.image){const xe=await F(m.image,600,400);if(!xe.ok){M(`❌ Main Image must be exactly 600×400 pixels. Uploaded is ${xe.w}×${xe.h}. No other size allowed.`);return}}if(m.logo){const xe=await F(m.logo,200,80);if(!xe.ok){$(`❌ Logo must be exactly 200×80 pixels. Uploaded is ${xe.w}×${xe.h}. No other size allowed.`);return}}const me={...m};me.highlights=m.highlights?m.highlights.split(`
`).map(xe=>xe.trim()).filter(Boolean):[],me.gallery=m.gallery?m.gallery.split(`
`).map(xe=>xe.trim()).filter(Boolean):[];try{R?await K.put(`/properties/${R}`,me):await K.post("/properties",me),p(null),C(N),j()}catch(xe){alert(xe.message)}},Z=y=>{const me={...y,highlights:(y.highlights||[]).join(`
`),gallery:(y.gallery||[]).join(`
`)};p(y.id),C({...N,...me}),b("properties"),window.scrollTo(0,0)},w=async y=>{confirm("Delete property?")&&(await K.delete(`/properties/${y}`),j())},[I,T]=E.useState({image:"",title:"",link:"#",developer:""}),[W,G]=E.useState("hero"),Q=async y=>{y.preventDefault(),await K.post(`/banners/${W}`,I),T({image:"",title:"",link:"#",developer:""}),j()},V=async(y,me)=>{confirm("Delete?")&&(await K.delete(`/banners/${y}/${me}`),j())},[he,fe]=E.useState({name:"",image:"",count:""}),ot=async y=>{y.preventDefault(),await K.post("/locations",he),fe({name:"",image:"",count:""}),j()},Qe=async y=>{confirm("Delete?")&&(await K.delete(`/locations/${y}`),j())},[U,ge]=E.useState({title:"",price:"",location:"",image:"",badge:""}),Nr=async y=>{y.preventDefault(),await K.post("/offers",U),ge({title:"",price:"",location:"",image:"",badge:""}),j()},wi=async y=>{confirm("Delete?")&&(await K.delete(`/offers/${y}`),j())},mn={title:"",developer:"",location:"",microMarket:"",price:"Contact for price",description:"",videoUrl:"",thumbnail:"",image:"",phone:"9811 750 740",demandText:"High Demand: 10 buyers enquired in last 24 hours",activeBuyers:24,monthlyRental:"₹85,000/mo",roi:"5.5%",badge:"LUXURY EDITION"},[D,ee]=E.useState(mn),[Se,zr]=E.useState(null),xn=async y=>{y.preventDefault();try{Se?await K.put(`/snaps/${Se}`,D):await K.post("/snaps",D),zr(null),ee(mn),j()}catch(me){alert(me.message)}},at=y=>{zr(y.id),ee({...y}),b("snaps"),window.scrollTo(0,0)},_=async y=>{confirm("Delete snap?")&&(await K.delete(`/snaps/${y}`),j())},ve=async y=>{await K.delete(`/enquiries/${y}`),j()},gt=async()=>{confirm("Reset to default demo data?")&&(await K.post("/admin/reset"),j())};return r.jsxs("div",{style:{minHeight:"100vh",background:"#f8fafc",display:"grid",gridTemplateColumns:"260px 1fr"},className:"dash-layout",children:[r.jsxs("aside",{style:{background:"#0a0a0a",color:"#fff",padding:16,position:"sticky",top:0,height:"100vh",overflowY:"auto"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:18},children:[r.jsx("div",{style:{width:36,height:36,background:"#d8232a",borderRadius:8,display:"grid",placeItems:"center",fontWeight:800,fontSize:12},children:"HW"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:800,fontSize:14,lineHeight:1},children:"HomWisor Admin"}),r.jsx("div",{style:{fontSize:11,opacity:.6},children:"Dynamic CMS"})]})]}),r.jsx("div",{style:{display:"grid",gap:6},children:[{id:"overview",label:"Overview",icon:"📊"},{id:"properties",label:"Properties",icon:"🏠"},{id:"snaps",label:"Property Snaps",icon:"🎬"},{id:"banners",label:"Banners",icon:"🖼️"},{id:"locations",label:"Prime Locations",icon:"📍"},{id:"offers",label:"Festival Offers",icon:"🎉"},{id:"enquiries",label:"Enquiries",icon:"💬"}].map(y=>r.jsxs("button",{onClick:()=>b(y.id),style:{textAlign:"left",padding:"10px 12px",borderRadius:10,border:"none",background:S===y.id?"#d8232a":"#1a1a1a",color:"#fff",fontWeight:600,fontSize:13,cursor:"pointer",display:"flex",gap:8,alignItems:"center"},children:[r.jsx("span",{children:y.icon})," ",y.label,y.id==="enquiries"&&o.length>0&&r.jsx("span",{style:{marginLeft:"auto",background:"#fff",color:"#d8232a",fontSize:11,fontWeight:800,padding:"2px 6px",borderRadius:20},children:o.length}),y.id==="snaps"&&r.jsx("span",{style:{marginLeft:"auto",background:"rgba(255,255,255,.15)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 6px",borderRadius:20},children:x.length})]},y.id))}),r.jsxs("div",{style:{marginTop:14,display:"grid",gap:8},children:[r.jsx(H,{to:"/",style:{textAlign:"center",padding:"10px 0",background:"#1a1a1a",borderRadius:10,fontWeight:600,fontSize:13,color:"#fff"},children:"← View Website"}),r.jsx(H,{to:"/property-snaps",style:{textAlign:"center",padding:"10px 0",background:"#d8232a",borderRadius:10,fontWeight:700,fontSize:13,color:"#fff"},children:"▶ View Snaps"}),r.jsx("button",{onClick:gt,style:{padding:"10px 0",background:"#1a1a1a",border:"1px solid #333",borderRadius:10,fontWeight:600,fontSize:12,color:"#fff",cursor:"pointer"},children:"↺ Reset Demo Data"}),r.jsx("button",{onClick:A,style:{padding:"10px 0",background:"#fff",color:"#111",border:"none",borderRadius:10,fontWeight:800,fontSize:13,cursor:"pointer"},children:"Logout"})]}),r.jsxs("div",{style:{marginTop:16,background:"#1a1a1a",border:"1px solid #222",borderRadius:10,padding:10},children:[r.jsx("div",{style:{fontWeight:700,fontSize:12},children:"💡 New: Snaps"}),r.jsx("div",{style:{fontSize:11,opacity:.7,marginTop:4,lineHeight:1.5},children:"Snaps are vertical reels (like SC). Upload videoUrl + details → appears at /property-snaps instantly. Fully dynamic!"})]})]}),r.jsxs("main",{style:{padding:18,overflowX:"hidden"},children:[S==="overview"&&r.jsxs("div",{children:[r.jsx("h1",{style:{fontWeight:800,fontSize:20},children:"Dashboard Overview"}),r.jsx("p",{style:{fontSize:13,color:"#6b7280",marginTop:4},children:"Welcome back! Your website is live and fully dynamic."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginTop:16},className:"stat-grid",children:[r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16},children:[r.jsx("div",{style:{fontSize:12,color:"#6b7280",fontWeight:600},children:"TOTAL PROPERTIES"}),r.jsx("div",{style:{fontWeight:800,fontSize:28,marginTop:6},children:(e==null?void 0:e.totalProperties)??n.length}),r.jsx("div",{style:{fontSize:11,color:"#16a34a",marginTop:4},children:"● Live on website"})]}),r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16},children:[r.jsx("div",{style:{fontSize:12,color:"#6b7280",fontWeight:600},children:"TOTAL SNAPS"}),r.jsx("div",{style:{fontWeight:800,fontSize:28,marginTop:6},children:(e==null?void 0:e.totalSnaps)??x.length}),r.jsx("div",{style:{fontSize:11,color:"#d8232a",marginTop:4},children:"🎬 Video tours"})]}),r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16},children:[r.jsx("div",{style:{fontSize:12,color:"#6b7280",fontWeight:600},children:"ENQUIRIES"}),r.jsx("div",{style:{fontWeight:800,fontSize:28,marginTop:6},children:o.length}),r.jsx("div",{style:{fontSize:11,color:"#d8232a",marginTop:4},children:o.length>0?"New leads waiting":"No new leads"})]}),r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16},children:[r.jsx("div",{style:{fontSize:12,color:"#6b7280",fontWeight:600},children:"FESTIVAL OFFERS"}),r.jsx("div",{style:{fontWeight:800,fontSize:28,marginTop:6},children:f.length}),r.jsx("div",{style:{fontSize:11,color:"#f59e0b",marginTop:4},children:"Active offers"})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.2fr .8fr",gap:14,marginTop:14},className:"overview-grid",children:[r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:14},children:[r.jsx("div",{style:{fontWeight:800,fontSize:14},children:"Recent Snaps"}),r.jsxs("div",{style:{display:"grid",gap:10,marginTop:12},children:[x.slice(0,3).map(y=>r.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",padding:10,background:"#fef2f2",borderRadius:10,border:"1px solid #fecaca"},children:[r.jsxs("div",{style:{width:48,height:64,borderRadius:8,overflow:"hidden",background:"#000",flexShrink:0,position:"relative"},children:[r.jsx("img",{src:y.thumbnail||y.image,alt:y.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),r.jsx("span",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,.2)"},children:"▶"})]}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:{fontWeight:700,fontSize:13,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y.title}),r.jsxs("div",{style:{fontSize:11,color:"#6b7280"},children:[y.location," • ",y.activeBuyers," viewing"]})]}),r.jsx("span",{style:{fontWeight:700,fontSize:11,background:"#d8232a",color:"#fff",padding:"4px 8px",borderRadius:20},children:"🎬"})]},y.id)),x.length===0&&r.jsx("div",{style:{textAlign:"center",padding:14,color:"#6b7280",fontSize:13},children:"No snaps yet - add first snap"})]}),r.jsx("button",{onClick:()=>b("snaps"),style:{marginTop:12,width:"100%",height:38,background:"#d8232a",color:"#fff",border:"none",borderRadius:10,fontWeight:700,cursor:"pointer"},children:"Manage Snaps →"})]}),r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:14},children:[r.jsx("div",{style:{fontWeight:800,fontSize:14},children:"Recent Properties"}),r.jsx("div",{style:{display:"grid",gap:10,marginTop:12},children:n.slice(0,3).map(y=>r.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",padding:10,background:"#f9fafb",borderRadius:10,border:"1px solid #eee"},children:[r.jsx("img",{src:y.image,alt:y.title,style:{width:56,height:44,objectFit:"cover",borderRadius:8}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:{fontWeight:700,fontSize:13,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y.title}),r.jsx("div",{style:{fontSize:11,color:"#6b7280"},children:y.location.split(",").slice(0,2).join(",")})]}),r.jsx("span",{style:{fontWeight:700,fontSize:12,background:"#111",color:"#fff",padding:"4px 8px",borderRadius:20},children:y.price})]},y.id))}),r.jsx("button",{onClick:()=>b("properties"),style:{marginTop:12,width:"100%",height:38,background:"#111",color:"#fff",border:"none",borderRadius:10,fontWeight:700,cursor:"pointer"},children:"Manage Properties →"})]})]})]}),S==="properties"&&r.jsxs("div",{children:[r.jsxs("h2",{style:{fontWeight:800,fontSize:18},children:["Manage Properties ",r.jsxs("span",{style:{fontWeight:500,color:"#6b7280",fontSize:13},children:["(",n.length,")"]})]}),r.jsxs("p",{style:{fontSize:13,color:"#6b7280",marginTop:4},children:["Create, edit, delete. Change ",r.jsx("strong",{children:"Category"})," to control which homepage section it appears in."]}),r.jsxs("form",{onSubmit:P,style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16,marginTop:14,display:"grid",gap:12},children:[r.jsx("div",{style:{fontWeight:800,fontSize:14},children:R?"✏️ Edit Property":"➕ Add New Property"}),r.jsxs("div",{style:{background:"#fef3c7",border:"1px solid #fde68a",borderRadius:10,padding:10,fontSize:12,lineHeight:1.5},children:[r.jsx("strong",{children:"⚠️ Exact Size Rules (Strict):"}),r.jsx("br",{}),"• ",r.jsx("strong",{children:"Main Image:"})," Must be ",r.jsx("span",{style:{background:"#fff",padding:"1px 6px",borderRadius:4,fontWeight:800,border:"1px solid #e5e7eb"},children:"600×400"})," (3:2) – no other size allowed.",r.jsx("br",{}),"• ",r.jsx("strong",{children:"Logo:"})," Must be ",r.jsx("span",{style:{background:"#fff",padding:"1px 6px",borderRadius:4,fontWeight:800,border:"1px solid #e5e7eb"},children:"200×80"})," (5:2) PNG recommended – no other size allowed.",r.jsx("br",{}),"• ",r.jsx("strong",{children:"Gallery:"})," Each ",r.jsx("span",{style:{background:"#fff",padding:"1px 6px",borderRadius:4,fontWeight:800,border:"1px solid #e5e7eb"},children:"800×500"})," (8:5) will be checked on save.",r.jsx("br",{}),r.jsx("span",{style:{color:"#92400e"},children:"Tip: Use URLs ending with `?w=600&h=400&fit=crop` for exact main image."})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},className:"form-grid",children:[r.jsx("input",{required:!0,value:m.title,onChange:y=>C({...m,title:y.target.value}),placeholder:"Title e.g. M3M Brabus Residences",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:m.developer,onChange:y=>C({...m,developer:y.target.value}),placeholder:"Developer e.g. M3M Group",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:m.price,onChange:y=>C({...m,price:y.target.value}),placeholder:"Price e.g. ₹20 Cr*",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:m.priceRange,onChange:y=>C({...m,priceRange:y.target.value}),placeholder:"Price Range e.g. ₹20 - 28 Cr",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:m.location,onChange:y=>C({...m,location:y.target.value}),placeholder:"Location e.g. Sector 58, Gurugram",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[r.jsx("input",{type:"color",value:m.brandColor,onChange:y=>C({...m,brandColor:y.target.value}),style:{width:44,height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:4,cursor:"pointer"},title:"Brand Color (matches logo as per SC)"}),r.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#6b7280"},children:"Brand Color → detail navbar"})]}),r.jsxs("div",{style:{gridColumn:"span 2"},children:[r.jsx("input",{required:!0,value:m.image,onChange:y=>C({...m,image:y.target.value}),placeholder:"Main Image URL – REQUIRED 600×400 (e.g. https://images.unsplash.com/...?w=600&h=400&fit=crop)",style:{width:"100%",height:40,border:B?"1px solid #ef4444":"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),B&&r.jsx("div",{style:{color:"#dc2626",fontSize:11,fontWeight:700,marginTop:6,background:"#fef2f2",padding:"6px 8px",borderRadius:6,border:"1px solid #fecaca"},children:B}),!B&&m.image&&r.jsx("div",{style:{fontSize:11,color:"#059669",marginTop:4},children:"✓ Will validate 600×400 on save"})]}),r.jsxs("div",{style:{gridColumn:"span 2"},children:[r.jsx("input",{required:!0,value:m.logo,onChange:y=>C({...m,logo:y.target.value}),placeholder:"Logo URL – REQUIRED 200×80 (e.g. https://via.placeholder.com/200x80/1e3a5f/ffffff?text=M3M)",style:{width:"100%",height:40,border:q?"1px solid #ef4444":"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),q&&r.jsx("div",{style:{color:"#dc2626",fontSize:11,fontWeight:700,marginTop:6,background:"#fef2f2",padding:"6px 8px",borderRadius:6,border:"1px solid #fecaca"},children:q}),!q&&m.logo&&r.jsx("div",{style:{fontSize:11,color:"#059669",marginTop:4},children:"✓ Will validate 200×80 on save – also sets detail page navbar color"})]}),r.jsxs("select",{value:m.category,onChange:y=>C({...m,category:y.target.value}),style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px",background:"#fff"},children:[r.jsx("option",{value:"recommended",children:"Recommended (Founder Choice)"}),r.jsx("option",{value:"trending",children:"Trending"}),r.jsx("option",{value:"upcoming",children:"Upcoming"}),r.jsx("option",{value:"newlaunch",children:"New Launch"})]}),r.jsxs("select",{value:m.type,onChange:y=>C({...m,type:y.target.value}),style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px",background:"#fff"},children:[r.jsx("option",{children:"Apartment"}),r.jsx("option",{children:"Villa"}),r.jsx("option",{children:"Builder Floor"}),r.jsx("option",{children:"Plots"}),r.jsx("option",{children:"Commercial"}),r.jsx("option",{children:"Farmhouse"})]}),r.jsx("input",{value:m.bhk,onChange:y=>C({...m,bhk:y.target.value}),placeholder:"BHK e.g. 4 & 5 BHK",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:m.tag,onChange:y=>C({...m,tag:y.target.value}),placeholder:"Tag e.g. Founder Choice / RERA",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsxs("select",{value:m.status,onChange:y=>C({...m,status:y.target.value}),style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px",background:"#fff"},children:[r.jsx("option",{children:"Trending"}),r.jsx("option",{children:"Upcoming"}),r.jsx("option",{children:"New Launch"}),r.jsx("option",{children:"Ready to Move"})]}),r.jsx("input",{value:m.possession,onChange:y=>C({...m,possession:y.target.value}),placeholder:"Possession e.g. Dec 2032",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:m.landArea,onChange:y=>C({...m,landArea:y.target.value}),placeholder:"Land Area e.g. 3.42 Acres",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:m.towers,onChange:y=>C({...m,towers:y.target.value}),placeholder:"Towers/Units e.g. 3 Tower – 110 Unit",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:m.propertyTypeDetail,onChange:y=>C({...m,propertyTypeDetail:y.target.value}),placeholder:"Property Type Detail e.g. Residential Flats",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{fontSize:11,fontWeight:700,letterSpacing:.5,color:"#374151"},children:"PROJECT HIGHLIGHTS – one per line (4 lines recommended as per SC)"}),r.jsx("textarea",{value:m.highlights,onChange:y=>C({...m,highlights:y.target.value}),placeholder:`Two Apartments Per Floor but Feels Like One Home on Each Floor
Ultra-Luxury 4 & 5 BHK Residences - Spacious homes planned in sizes of approximately 5000 - 7000 SQ.FT
Low-Density Development - Planned across around 30 acres with just 2 towers
Two Residences Per Core - A planning concept designed...`,rows:4,style:{width:"100%",marginTop:6,border:"1px solid #e5e7eb",borderRadius:10,padding:"10px 12px",fontSize:13,resize:"none"}}),r.jsx("div",{style:{fontSize:11,color:"#6b7280",marginTop:4},children:"Exactly these appear in detail page “Project Highlights” section (checkmarks)."})]}),r.jsxs("div",{children:[r.jsx("label",{style:{fontSize:11,fontWeight:700,letterSpacing:.5,color:"#374151"},children:"GALLERY IMAGE URLs – one per line (each must be 800×500, comma or newline)"}),r.jsx("textarea",{value:m.gallery,onChange:y=>C({...m,gallery:y.target.value}),placeholder:`https://images.unsplash.com/...?w=800&h=500&fit=crop
https://images.unsplash.com/...?w=800&h=500&fit=crop`,rows:2,style:{width:"100%",marginTop:6,border:"1px solid #e5e7eb",borderRadius:10,padding:"10px 12px",fontSize:13,resize:"none"}}),r.jsx("div",{style:{fontSize:11,color:"#6b7280",marginTop:4},children:"Each gallery image should be 800×500. First image is fallback hero if needed."})]}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx("button",{type:"submit",style:{flex:1,height:42,background:"#d8232a",color:"#fff",border:"none",borderRadius:10,fontWeight:800,cursor:"pointer"},children:R?"Update Property":"Add Property"}),R&&r.jsx("button",{type:"button",onClick:()=>{p(null),C(N),M(""),$("")},style:{height:42,padding:"0 18px",background:"#eee",border:"none",borderRadius:10,fontWeight:700,cursor:"pointer"},children:"Cancel"})]}),r.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center",background:"#f9fafb",padding:10,borderRadius:10,border:"1px solid #eee"},children:[m.logo&&r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#6b7280"},children:"LOGO PREVIEW (200×80)"}),r.jsx("img",{src:m.logo,alt:"logo preview",style:{height:32,maxWidth:120,objectFit:"contain",background:"#fff",padding:"4px 8px",borderRadius:6,border:"1px solid #eee",marginTop:4}})]}),m.image&&r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#6b7280"},children:"MAIN IMAGE PREVIEW (600×400)"}),r.jsx("img",{src:m.image,alt:"preview",style:{width:180,height:120,objectFit:"cover",borderRadius:8,border:"1px solid #eee",marginTop:4}})]}),m.brandColor&&r.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#6b7280"},children:"Navbar Color"}),r.jsx("span",{style:{width:32,height:32,borderRadius:8,background:m.brandColor,border:"1px solid #eee",display:"inline-block"}})]})]})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginTop:14},className:"prop-grid",children:n.map(y=>r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:12,padding:10,display:"flex",gap:10},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx("img",{src:y.image,alt:y.title,style:{width:90,height:60,objectFit:"cover",borderRadius:8,border:"1px solid #eee"}}),y.logo&&r.jsx("img",{src:y.logo,alt:"logo",style:{width:90,height:24,objectFit:"contain",borderRadius:4,background:"#fff",border:"1px solid #eee",padding:"2px"}})]}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:{fontWeight:700,fontSize:13,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y.title}),r.jsxs("div",{style:{fontSize:11,color:"#6b7280",display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:y.brandColor||"#1e3a5f",display:"inline-block"}}),y.developer||y.category," • ",y.type," • ",y.price]}),r.jsx("div",{style:{fontSize:11,color:"#6b7280",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y.location}),r.jsx("div",{style:{fontSize:10,color:"#9ca3af",marginTop:2},children:"Img: 600×400 ✅ Logo: 200×80 ✅"}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsx("button",{onClick:()=>Z(y),style:{fontSize:11,fontWeight:700,background:"#111",color:"#fff",border:"none",padding:"4px 8px",borderRadius:6,cursor:"pointer"},children:"Edit"}),r.jsx("button",{onClick:()=>w(y.id),style:{fontSize:11,fontWeight:700,background:"#fef2f2",color:"#991b1b",border:"1px solid #fecaca",padding:"4px 8px",borderRadius:6,cursor:"pointer"},children:"Delete"})]})]})]},y.id))})]}),S==="snaps"&&r.jsxs("div",{children:[r.jsxs("h2",{style:{fontWeight:800,fontSize:18},children:["Manage Property Snaps 🎬 ",r.jsxs("span",{style:{fontWeight:500,color:"#6b7280",fontSize:13},children:["(",x.length," reels)"]})]}),r.jsxs("p",{style:{fontSize:13,color:"#6b7280",marginTop:4},children:["Vertical video reels like Instagram/TikTok - shown at ",r.jsx("strong",{children:"/property-snaps"}),". Upload videoUrl, thumbnail, and info cards."]}),r.jsxs("form",{onSubmit:xn,style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16,marginTop:14,display:"grid",gap:12},children:[r.jsxs("div",{style:{fontWeight:800,fontSize:14,display:"flex",alignItems:"center",gap:8},children:[Se?"✏️ Edit Snap":"➕ Add New Snap",Se&&r.jsxs("span",{style:{fontSize:11,color:"#6b7280",fontWeight:400},children:["(editing ",Se,")"]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},className:"form-grid",children:[r.jsx("input",{required:!0,value:D.title,onChange:y=>ee({...D,title:y.target.value}),placeholder:"Title e.g. Oberoi Realty 360 North",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.developer,onChange:y=>ee({...D,developer:y.target.value}),placeholder:"Developer e.g. Oberoi Realty",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:D.videoUrl,onChange:y=>ee({...D,videoUrl:y.target.value}),placeholder:"Video URL (mp4) - e.g. https://videos.pexels.com/...",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:D.thumbnail,onChange:y=>ee({...D,thumbnail:y.target.value}),placeholder:"Thumbnail Image URL",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.image,onChange:y=>ee({...D,image:y.target.value}),placeholder:"Poster Image URL (fallback)",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.phone,onChange:y=>ee({...D,phone:y.target.value}),placeholder:"Phone e.g. 9811 750 740",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.location,onChange:y=>ee({...D,location:y.target.value}),placeholder:"Location e.g. Sector 66, Gurugram",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.microMarket,onChange:y=>ee({...D,microMarket:y.target.value}),placeholder:"Micro-Market e.g. Gurugram (N/A)",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.price,onChange:y=>ee({...D,price:y.target.value}),placeholder:"Price e.g. Contact for price / ₹5.20 Cr",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.badge,onChange:y=>ee({...D,badge:y.target.value}),placeholder:"Badge e.g. WHERE SPACIOUS LIVING",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("textarea",{value:D.description,onChange:y=>ee({...D,description:y.target.value}),placeholder:"Project Overview - Experience luxury living...",rows:2,style:{gridColumn:"span 2",border:"1px solid #e5e7eb",borderRadius:10,padding:"10px 12px",resize:"none"}}),r.jsx("input",{value:D.demandText,onChange:y=>ee({...D,demandText:y.target.value}),placeholder:"High Demand text",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{type:"number",value:D.activeBuyers,onChange:y=>ee({...D,activeBuyers:parseInt(y.target.value)||0}),placeholder:"Active Buyers (number)",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.monthlyRental,onChange:y=>ee({...D,monthlyRental:y.target.value}),placeholder:"Monthly Rental e.g. ₹85,000/mo",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:D.roi,onChange:y=>ee({...D,roi:y.target.value}),placeholder:"ROI e.g. 5.5%",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}})]}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx("button",{type:"submit",style:{flex:1,height:42,background:"#d8232a",color:"#fff",border:"none",borderRadius:10,fontWeight:800,cursor:"pointer"},children:Se?"Update Snap":"Add Snap"}),Se&&r.jsx("button",{type:"button",onClick:()=>{zr(null),ee(mn)},style:{height:42,padding:"0 18px",background:"#eee",border:"none",borderRadius:10,fontWeight:700,cursor:"pointer"},children:"Cancel"})]}),(D.thumbnail||D.videoUrl)&&r.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",background:"#f9fafb",padding:10,borderRadius:10,border:"1px solid #eee"},children:[D.thumbnail&&r.jsx("img",{src:D.thumbnail,alt:"preview",style:{width:80,height:110,objectFit:"cover",borderRadius:8,border:"1px solid #eee"}}),r.jsxs("div",{style:{fontSize:11,color:"#6b7280",lineHeight:1.5},children:[r.jsx("strong",{children:"Preview:"})," Video will auto-play muted looping.",r.jsx("br",{}),"Thumbnail shown as poster until video loads.",r.jsx("br",{}),r.jsx("a",{href:D.videoUrl,target:"_blank",rel:"noreferrer",style:{color:"#d8232a"},children:"Test video link"})]})]})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginTop:14},className:"prop-grid",children:x.map(y=>r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:12,padding:10,display:"flex",gap:10},children:[r.jsxs("div",{style:{width:74,height:100,borderRadius:8,overflow:"hidden",background:"#000",flexShrink:0,position:"relative"},children:[r.jsx("img",{src:y.thumbnail||y.image,alt:y.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),r.jsx("span",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,.25)",color:"#fff",fontSize:16},children:"▶"})]}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:{fontWeight:700,fontSize:13,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y.title}),r.jsxs("div",{style:{fontSize:11,color:"#6b7280"},children:[y.location," • ",y.activeBuyers," viewing"]}),r.jsx("div",{style:{fontSize:11,color:"#d8232a",fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y.demandText}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsx("button",{onClick:()=>at(y),style:{fontSize:11,fontWeight:700,background:"#111",color:"#fff",border:"none",padding:"4px 8px",borderRadius:6,cursor:"pointer"},children:"Edit"}),r.jsx("button",{onClick:()=>_(y.id),style:{fontSize:11,fontWeight:700,background:"#fef2f2",color:"#991b1b",border:"1px solid #fecaca",padding:"4px 8px",borderRadius:6,cursor:"pointer"},children:"Delete"})]})]})]},y.id))})]}),S==="banners"&&r.jsxs("div",{children:[r.jsx("h2",{style:{fontWeight:800,fontSize:18},children:"Manage Banners"}),r.jsx("p",{style:{fontSize:13,color:"#6b7280"},children:"Hero carousel (top large) and Small banners (4 cards below search)"}),r.jsxs("form",{onSubmit:Q,style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16,marginTop:14,display:"grid",gap:10},children:[r.jsx("div",{style:{fontWeight:800,fontSize:14},children:"Add Banner"}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx("button",{type:"button",onClick:()=>G("hero"),style:{padding:"6px 14px",borderRadius:20,border:"none",fontWeight:700,fontSize:12,cursor:"pointer",background:W==="hero"?"#111":"#eee",color:W==="hero"?"#fff":"#111"},children:"Hero (Large)"}),r.jsx("button",{type:"button",onClick:()=>G("small"),style:{padding:"6px 14px",borderRadius:20,border:"none",fontWeight:700,fontSize:12,cursor:"pointer",background:W==="small"?"#111":"#eee",color:W==="small"?"#fff":"#111"},children:"Small (4 cards)"})]}),r.jsx("input",{required:!0,value:I.image,onChange:y=>T({...I,image:y.target.value}),placeholder:"Image URL",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:I.title,onChange:y=>T({...I,title:y.target.value}),placeholder:"Title",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),W==="hero"&&r.jsx("input",{value:I.developer,onChange:y=>T({...I,developer:y.target.value}),placeholder:"Developer e.g. GODREJ PROPERTIES",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{value:I.link,onChange:y=>T({...I,link:y.target.value}),placeholder:"Link (# or /search)",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsxs("button",{type:"submit",style:{height:42,background:"#111",color:"#fff",border:"none",borderRadius:10,fontWeight:800,cursor:"pointer"},children:["Add ",W," Banner"]})]}),r.jsxs("div",{style:{marginTop:16},children:[r.jsxs("h3",{style:{fontWeight:700,fontSize:13},children:["Hero Banners (",s.hero.length,")"]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginTop:8},className:"banner-grid",children:s.hero.map(y=>r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:12,overflow:"hidden"},children:[r.jsx("img",{src:y.image,alt:y.title,style:{width:"100%",height:120,objectFit:"cover"}}),r.jsxs("div",{style:{padding:10,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:700,fontSize:12},children:y.title}),r.jsx("div",{style:{fontSize:11,color:"#6b7280"},children:y.developer})]}),r.jsx("button",{onClick:()=>V("hero",y.id),style:{background:"#fef2f2",color:"#991b1b",border:"1px solid #fecaca",padding:"6px 10px",borderRadius:8,fontWeight:700,fontSize:11,cursor:"pointer"},children:"Delete"})]})]},y.id))}),r.jsxs("h3",{style:{fontWeight:700,fontSize:13,marginTop:16},children:["Small Banners (",s.small.length,")"]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginTop:8},className:"small-b-grid",children:s.small.map(y=>r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:12,overflow:"hidden"},children:[r.jsx("img",{src:y.image,alt:y.title,style:{width:"100%",height:80,objectFit:"cover"}}),r.jsx("div",{style:{padding:8,fontWeight:600,fontSize:11},children:y.title}),r.jsx("button",{onClick:()=>V("small",y.id),style:{margin:8,marginTop:0,background:"#fef2f2",color:"#991b1b",border:"1px solid #fecaca",padding:"4px 8px",borderRadius:6,fontWeight:700,fontSize:11,cursor:"pointer",width:"calc(100% - 16px)"},children:"Delete"})]},y.id))})]})]}),S==="locations"&&r.jsxs("div",{children:[r.jsx("h2",{style:{fontWeight:800,fontSize:18},children:"Prime Locations"}),r.jsxs("form",{onSubmit:ot,style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16,marginTop:14,display:"grid",gap:10},children:[r.jsx("input",{required:!0,value:he.name,onChange:y=>fe({...he,name:y.target.value}),placeholder:"Location Name e.g. Golf Course Road",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:he.image,onChange:y=>fe({...he,image:y.target.value}),placeholder:"Image URL",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:he.count,onChange:y=>fe({...he,count:y.target.value}),placeholder:"Count e.g. 142 Projects",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("button",{type:"submit",style:{height:42,background:"#111",color:"#fff",border:"none",borderRadius:10,fontWeight:800,cursor:"pointer"},children:"Add Location"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginTop:14},className:"loc-grid",children:d.map(y=>r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:12,overflow:"hidden"},children:[r.jsx("img",{src:y.image,alt:y.name,style:{width:"100%",height:110,objectFit:"cover"}}),r.jsxs("div",{style:{padding:10},children:[r.jsx("div",{style:{fontWeight:700,fontSize:13},children:y.name}),r.jsx("div",{style:{fontSize:11,color:"#6b7280"},children:y.count}),r.jsx("button",{onClick:()=>Qe(y.id),style:{marginTop:8,background:"#fef2f2",color:"#991b1b",border:"1px solid #fecaca",padding:"6px 10px",borderRadius:8,fontWeight:700,fontSize:11,cursor:"pointer",width:"100%"},children:"Delete"})]})]},y.id))})]}),S==="offers"&&r.jsxs("div",{children:[r.jsx("h2",{style:{fontWeight:800,fontSize:18},children:"Festival Offers"}),r.jsxs("form",{onSubmit:Nr,style:{background:"#fff",border:"1px solid #eee",borderRadius:14,padding:16,marginTop:14,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},className:"form-grid",children:[r.jsx("input",{required:!0,value:U.title,onChange:y=>ge({...U,title:y.target.value}),placeholder:"Title e.g. BPTP DownTown 66",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:U.price,onChange:y=>ge({...U,price:y.target.value}),placeholder:"Price e.g. ₹5.20 Cr",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:U.location,onChange:y=>ge({...U,location:y.target.value}),placeholder:"Location e.g. Sector 66, Gurugram",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:U.badge,onChange:y=>ge({...U,badge:y.target.value}),placeholder:"Badge e.g. NAVRATRI SPECIAL",style:{height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}}),r.jsx("input",{required:!0,value:U.image,onChange:y=>ge({...U,image:y.target.value}),placeholder:"Image URL",style:{gridColumn:"span 2",height:40,border:"1px solid #e5e7eb",borderRadius:10,padding:"0 12px"}})]}),r.jsx("button",{type:"submit",style:{height:42,background:"#111",color:"#fff",border:"none",borderRadius:10,fontWeight:800,cursor:"pointer"},children:"Add Offer"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginTop:14},className:"offer-admin-grid",children:f.map(y=>r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:12,overflow:"hidden"},children:[r.jsx("img",{src:y.image,alt:y.title,style:{width:"100%",height:130,objectFit:"cover"}}),r.jsxs("div",{style:{padding:10},children:[r.jsx("div",{style:{fontWeight:700,fontSize:12},children:y.title}),r.jsxs("div",{style:{fontSize:11,color:"#d8232a",fontWeight:700},children:[y.price," • ",y.badge]}),r.jsx("div",{style:{fontSize:11,color:"#6b7280"},children:y.location}),r.jsx("button",{onClick:()=>wi(y.id),style:{marginTop:8,background:"#fef2f2",color:"#991b1b",border:"1px solid #fecaca",padding:"6px 10px",borderRadius:8,fontWeight:700,fontSize:11,cursor:"pointer",width:"100%"},children:"Delete"})]})]},y.id))})]}),S==="enquiries"&&r.jsxs("div",{children:[r.jsxs("h2",{style:{fontWeight:800,fontSize:18},children:["Enquiries ",r.jsxs("span",{style:{color:"#6b7280",fontWeight:500},children:["(",o.length,")"]})]}),r.jsx("p",{style:{fontSize:13,color:"#6b7280"},children:"Leads from property detail pages. Contact them quickly!"}),r.jsxs("div",{style:{display:"grid",gap:10,marginTop:14},children:[o.length===0&&r.jsx("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:12,padding:20,textAlign:"center",color:"#6b7280"},children:"No enquiries yet."}),o.map(y=>r.jsxs("div",{style:{background:"#fff",border:"1px solid #eee",borderRadius:12,padding:14,display:"flex",gap:12,alignItems:"flex-start"},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"#d8232a",color:"#fff",display:"grid",placeItems:"center",fontWeight:800,fontSize:12,flexShrink:0},children:y.name[0]}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[y.name," ",r.jsxs("span",{style:{fontWeight:400,color:"#6b7280",fontSize:12},children:["• ",y.date]})]}),r.jsxs("div",{style:{fontSize:12,color:"#374151",marginTop:2},children:["📞 ",y.phone," ",y.email&&`• ✉️ ${y.email}`]}),r.jsxs("div",{style:{fontSize:12,color:"#d8232a",fontWeight:600,marginTop:4},children:["Property: ",y.property]}),r.jsx("div",{style:{fontSize:13,color:"#4b5563",marginTop:6,background:"#f9fafb",padding:8,borderRadius:8,border:"1px solid #eee"},children:y.message||"No message"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx("a",{href:`tel:${y.phone}`,style:{background:"#111",color:"#fff",padding:"6px 10px",borderRadius:8,fontWeight:700,fontSize:11,textAlign:"center"},children:"Call"}),r.jsx("a",{href:`https://wa.me/91${y.phone.replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",style:{background:"#25D366",color:"#fff",padding:"6px 10px",borderRadius:8,fontWeight:700,fontSize:11,textAlign:"center"},children:"WhatsApp"}),r.jsx("button",{onClick:()=>ve(y.id),style:{background:"#fef2f2",color:"#991b1b",border:"1px solid #fecaca",padding:"6px 10px",borderRadius:8,fontWeight:700,fontSize:11,cursor:"pointer"},children:"Delete"})]})]},y.id))]})]})]}),r.jsx("style",{children:`
        @media(max-width: 960px){
          .dash-layout{ grid-template-columns: 1fr !important; }
          .dash-layout aside{ position: relative !important; height:auto !important; }
          .stat-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .overview-grid{ grid-template-columns: 1fr !important; }
          .prop-grid{ grid-template-columns: 1fr !important; }
          .banner-grid{ grid-template-columns: 1fr !important; }
          .small-b-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .loc-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .offer-admin-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .tip-grid{ grid-template-columns: 1fr !important; }
          .form-grid{ grid-template-columns: 1fr !important; }
          .form-grid input, .form-grid textarea{ grid-column: span 1 !important; }
        }
      `})]})}const Lr="#D4AF37",Di="#9A7418",zc="#F7F5EF",l2=["All","Real Estate News","Gurgaon","Delhi NCR","Investment","Property Guide"],St=[{category:"Real Estate News",date:"JUL 30, 2026",title:"Moti Nagar Metro Station on Delhi Metro Blue Line",excerpt:"Explore connectivity, location advantages and the role of the Blue Line in West Delhi real estate.",image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=85"},{category:"Gurgaon",date:"JUL 29, 2026",title:"BPTP Downtown 66 Phase 2 Is Here",excerpt:"A closer look at the new phase and what buyers should know about the Gurgaon development.",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=85"},{category:"Delhi NCR",date:"JUL 28, 2026",title:"Sector 49 Gurgaon: Real Estate Prices & Metro Expansion",excerpt:"Understand locality, connectivity and the changing real estate landscape of Sector 49 Gurgaon.",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85"},{category:"Investment",date:"JUL 26, 2026",title:"How to Choose the Right Property Investment in NCR",excerpt:"Key factors to consider before investing in residential or commercial property across NCR.",image:"https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=1000&q=85"},{category:"Property Guide",date:"JUL 24, 2026",title:"5 Things to Check Before Buying a Property",excerpt:"A practical checklist covering location, approvals, developer background, pricing and future connectivity.",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"},{category:"Gurgaon",date:"JUL 22, 2026",title:"Why New Gurgaon Continues to Attract Homebuyers",excerpt:"Explore infrastructure, connectivity and residential development shaping New Gurgaon.",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"}];function d2(){const[e,t]=E.useState("All"),n=e==="All"?St:St.filter(i=>i.category===e);return r.jsxs("div",{className:"blog-page",children:[r.jsx(Rr,{}),r.jsxs("section",{className:"blog-hero",children:[r.jsx("div",{className:"blog-hero-glow"}),r.jsxs("div",{className:"blog-container blog-hero-inner",children:[r.jsx("div",{className:"blog-eyebrow",children:"HOMWISOR INSIGHTS"}),r.jsxs("h1",{children:["Real Estate ",r.jsx("span",{children:"Insights."})]}),r.jsx("p",{children:"Stay informed with property news, market insights, investment ideas and practical guides for Gurgaon and Delhi NCR."})]})]}),r.jsxs("main",{children:[r.jsx("section",{className:"blog-section blog-featured",children:r.jsxs("div",{className:"blog-container",children:[r.jsxs("div",{className:"blog-section-head",children:[r.jsxs("div",{children:[r.jsx("div",{className:"blog-eyebrow dark",children:"FEATURED INSIGHT"}),r.jsxs("h2",{children:["What’s happening in ",r.jsx("span",{children:"NCR real estate."})]})]}),r.jsxs("a",{href:"#all-articles",className:"blog-view-link",children:["View All Articles ",r.jsx("span",{children:"↗"})]})]}),r.jsxs("article",{className:"featured-card",children:[r.jsxs("div",{className:"featured-image",children:[r.jsx("img",{src:St[0].image,alt:St[0].title}),r.jsx("span",{children:St[0].category})]}),r.jsxs("div",{className:"featured-content",children:[r.jsx("small",{children:St[0].date}),r.jsx("h3",{children:St[0].title}),r.jsx("p",{children:St[0].excerpt}),r.jsxs("a",{href:`/blog/${St[0].title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:["Read Article ",r.jsx("span",{children:"→"})]})]})]})]})}),r.jsx("section",{className:"blog-section blog-all",id:"all-articles",children:r.jsxs("div",{className:"blog-container",children:[r.jsx("div",{className:"blog-section-head compact",children:r.jsxs("div",{children:[r.jsx("div",{className:"blog-eyebrow dark",children:"LATEST ARTICLES"}),r.jsxs("h2",{children:["Explore our ",r.jsx("span",{children:"latest stories."})]})]})}),r.jsx("div",{className:"category-row",children:l2.map(i=>r.jsx("button",{className:e===i?"active":"",onClick:()=>t(i),children:i},i))}),r.jsx("div",{className:"blog-grid",children:n.map(i=>r.jsxs("article",{className:"blog-card",children:[r.jsxs("a",{href:`/blog/${i.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,className:"blog-card-image",children:[r.jsx("img",{src:i.image,alt:i.title}),r.jsx("span",{children:i.category})]}),r.jsxs("div",{className:"blog-card-content",children:[r.jsx("small",{children:i.date}),r.jsx("h3",{children:i.title}),r.jsx("p",{children:i.excerpt}),r.jsxs("a",{href:`/blog/${i.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:["Read Article ",r.jsx("span",{children:"→"})]})]})]},i.title))})]})}),r.jsx("section",{className:"blog-newsletter",children:r.jsxs("div",{className:"blog-container newsletter-inner",children:[r.jsxs("div",{children:[r.jsx("div",{className:"blog-eyebrow",children:"STAY UPDATED"}),r.jsx("h2",{children:"Get smarter property insights."}),r.jsx("p",{children:"Follow Homwisor for useful real estate news, property guides and market updates."})]}),r.jsx("a",{href:"/contact/",className:"blog-btn",children:"Talk to an Expert"})]})})]}),r.jsx(Cr,{}),r.jsx("style",{children:`
        * { box-sizing: border-box; }

        .blog-page {
          min-height: 100vh;
          background: ${zc};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .blog-page, .blog-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .blog-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .blog-hero {
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          color: #fff;
          background:
            radial-gradient(
              circle at 82% 28%,
              rgba(212,175,55,.16),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #050505 0%,
              #0d0d0d 55%,
              #1a160d 100%
            );
        }

        .blog-hero:after {
          content: "";
          position: absolute;
          width: 570px;
          height: 570px;
          right: -190px;
          bottom: -310px;
          border: 1px solid rgba(212,175,55,.28);
          border-radius: 50%;
          box-shadow:
            0 0 0 65px rgba(212,175,55,.035),
            0 0 0 130px rgba(212,175,55,.02);
        }

        .blog-hero-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          right: 8%;
          top: -90px;
          border-radius: 50%;
          background: rgba(212,175,55,.07);
          filter: blur(90px);
        }

        .blog-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 120px 20px 70px;
          text-align: center;
        }

        .blog-eyebrow {
          color: ${Lr};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .blog-eyebrow.dark {
          color: ${Di};
        }

        .blog-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 850;
        }

        .blog-hero h1 span,
        .blog-section-head h2 span {
          color: ${Lr};
          display: block;
        }

        .blog-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.8;
        }

        .blog-section {
          padding: 52px 0;
        }

        .blog-featured {
          background: #fff;
        }

        .blog-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 28px;
        }

        .blog-section-head.compact {
          margin-bottom: 25px;
        }

        .blog-section-head h2 {
          margin: 9px 0 0;
          font-size: 36px;
          line-height: 1.08;
          letter-spacing: -1.6px;
          font-weight: 900;
          color: #111;
        }

        .blog-view-link {
          flex: 0 0 auto;
          color: #111;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          border-bottom: 1px solid ${Lr};
          padding-bottom: 6px;
        }

        .blog-view-link span {
          color: ${Di};
          margin-left: 5px;
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1.12fr .88fr;
          min-height: 420px;
          border: 1px solid #e8e1d2;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
        }

        .featured-image {
          position: relative;
          min-height: 420px;
          overflow: hidden;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .4s ease;
        }

        .featured-card:hover .featured-image img {
          transform: scale(1.03);
        }

        .featured-image span,
        .blog-card-image span {
          position: absolute;
          left: 16px;
          top: 16px;
          padding: 7px 10px;
          background: rgba(0,0,0,.76);
          color: ${Lr};
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .featured-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 45px;
        }

        .featured-content small,
        .blog-card-content small {
          color: ${Di};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .featured-content h3 {
          margin: 13px 0 12px;
          color: #111;
          font-size: 30px;
          line-height: 1.16;
          letter-spacing: -.8px;
          font-weight: 900;
        }

        .featured-content p {
          margin: 0;
          color: #707070;
          font-size: 13px;
          line-height: 1.8;
        }

        .featured-content > a,
        .blog-card-content > a {
          display: inline-block;
          margin-top: 22px;
          width: fit-content;
          color: #111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
        }

        .featured-content > a span,
        .blog-card-content > a span {
          color: ${Di};
          margin-left: 5px;
        }

        .blog-all {
          background: ${zc};
        }

        .category-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .category-row button {
          border: 1px solid #ded7c8;
          background: #fff;
          color: #666;
          border-radius: 30px;
          padding: 9px 15px;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          transition: .2s ease;
        }

        .category-row button:hover,
        .category-row button.active {
          background: #111;
          border-color: #111;
          color: ${Lr};
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .blog-card {
          overflow: hidden;
          border: 1px solid #e4dccb;
          border-radius: 17px;
          background: #fff;
          transition: .25s ease;
        }

        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(0,0,0,.08);
        }

        .blog-card-image {
          height: 225px;
          position: relative;
          display: block;
          overflow: hidden;
          background: #ddd;
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .4s ease;
        }

        .blog-card:hover .blog-card-image img {
          transform: scale(1.04);
        }

        .blog-card-content {
          padding: 21px;
        }

        .blog-card-content h3 {
          margin: 10px 0 8px;
          color: #111;
          font-size: 18px;
          line-height: 1.28;
          font-weight: 900;
        }

        .blog-card-content p {
          margin: 0;
          color: #777;
          font-size: 11px;
          line-height: 1.7;
        }

        .blog-newsletter {
          padding: 48px 0;
          background: #0b0b0b;
          color: #fff;
        }

        .newsletter-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .newsletter-inner h2 {
          margin: 9px 0 7px;
          font-size: 36px;
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 900;
        }

        .newsletter-inner p {
          margin: 0;
          color: rgba(255,255,255,.62);
          font-size: 12px;
        }

        .blog-btn {
          flex: 0 0 auto;
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 22px;
          border-radius: 8px;
          background: ${Lr};
          color: #111;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .featured-card {
            grid-template-columns: 1fr;
          }

          .featured-image {
            min-height: 330px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 760px) {
          .blog-container {
            width: min(100% - 24px, 1180px);
          }

          .blog-hero {
            min-height: 390px;
          }

          .blog-hero-inner {
            padding: 110px 18px 55px;
          }

          .blog-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .blog-section-head h2,
          .newsletter-inner h2 {
            font-size: 36px;
          }

          .blog-hero p {
            font-size: 12px;
            line-height: 1.7;
          }

          .blog-section {
            padding: 38px 0;
          }

          .blog-section-head {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 22px;
          }

          .featured-image {
            min-height: 260px;
          }

          .featured-content {
            padding: 25px 20px;
          }

          .featured-content h3 {
            font-size: 23px;
          }

          .blog-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .blog-card-image {
            height: 180px;
          }

          .blog-card-content {
            padding: 14px;
          }

          .blog-card-content h3 {
            font-size: 14px;
          }

          .blog-card-content p {
            font-size: 10px;
          }

          .newsletter-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .blog-btn {
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .blog-container {
            width: min(100% - 20px, 1180px);
          }

          .blog-hero {
            min-height: 390px;
          }

          .blog-hero-inner {
            padding: 110px 18px 55px;
          }

          .blog-hero h1,
          .blog-section-head h2,
          .newsletter-inner h2 {
            font-size: 36px;
          }

          .blog-section {
            padding: 30px 0;
          }

          .featured-image {
            min-height: 220px;
          }

          .featured-content h3 {
            font-size: 21px;
          }

          .blog-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .blog-card {
            border-radius: 12px;
          }

          .blog-card-image {
            height: 145px;
          }

          .blog-card-image span {
            left: 8px;
            top: 8px;
            padding: 5px 6px;
            font-size: 6.5px;
          }

          .blog-card-content {
            padding: 11px;
          }

          .blog-card-content h3 {
            font-size: 12px;
            line-height: 1.3;
          }

          .blog-card-content p {
            font-size: 9px;
            line-height: 1.55;
          }

          .blog-card-content > a {
            margin-top: 13px;
            font-size: 9px;
          }

          .category-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 4px;
            scrollbar-width: none;
          }

          .category-row::-webkit-scrollbar {
            display: none;
          }

          .category-row button {
            flex: 0 0 auto;
            padding: 8px 12px;
          }

          .newsletter-inner h2 {
            letter-spacing: -1px;
          }
        }
      `})]})}const Fi="#D4AF37",Ia="#9A7418",La="#F7F5EF";function c2(){return r.jsxs("div",{className:"privacy-page",children:[r.jsx(Rr,{}),r.jsxs("section",{className:"privacy-hero",children:[r.jsx("div",{className:"privacy-hero-glow"}),r.jsx("div",{className:"privacy-hero-circle"}),r.jsxs("div",{className:"privacy-hero-content",children:[r.jsx("span",{className:"privacy-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),r.jsxs("h1",{children:["Privacy ",r.jsx("span",{children:"Policy."})]}),r.jsx("p",{children:"Your privacy matters to us. Learn how Homwisor collects, uses, protects and manages information when you interact with our website and real estate services."})]})]}),r.jsx("main",{className:"privacy-main",children:r.jsxs("div",{className:"privacy-layout",children:[r.jsx("aside",{className:"privacy-sidebar",children:r.jsxs("div",{className:"privacy-sidebar-card",children:[r.jsx("span",{children:"ON THIS PAGE"}),r.jsx("a",{href:"#introduction",children:"Introduction"}),r.jsx("a",{href:"#information",children:"Information We Collect"}),r.jsx("a",{href:"#use",children:"How We Use Information"}),r.jsx("a",{href:"#sharing",children:"Information Sharing"}),r.jsx("a",{href:"#cookies",children:"Cookies & Tracking"}),r.jsx("a",{href:"#security",children:"Data Security"}),r.jsx("a",{href:"#rights",children:"Your Rights"}),r.jsx("a",{href:"#third-party",children:"Third-Party Links"}),r.jsx("a",{href:"#children",children:"Children's Privacy"}),r.jsx("a",{href:"#changes",children:"Policy Changes"}),r.jsx("a",{href:"#contact",children:"Contact Us"})]})}),r.jsxs("article",{className:"privacy-content",children:[r.jsxs("div",{className:"policy-intro",id:"introduction",children:[r.jsx("span",{className:"section-label",children:"PRIVACY & DATA"}),r.jsx("h2",{children:"Privacy Policy"}),r.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),r.jsx("p",{children:'Homwisor Consultants Pvt. Ltd. ("Homwisor", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how information may be collected, used, stored and disclosed when you visit our website, submit an enquiry, request a property consultation, or otherwise interact with our services.'})]}),r.jsxs("section",{id:"information",children:[r.jsx("h3",{children:"1. Information We Collect"}),r.jsx("p",{children:"Depending on how you interact with Homwisor, we may collect information that you voluntarily provide, including your name, phone number, email address, property requirements, location preferences, budget information and messages or enquiries submitted through our forms."}),r.jsx("p",{children:"We may also receive basic technical information such as browser type, device information, IP address, referring pages, pages visited and general website usage information."})]}),r.jsxs("section",{id:"use",children:[r.jsx("h3",{children:"2. How We Use Your Information"}),r.jsx("p",{children:"We may use the information we collect to:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Respond to property enquiries and requests."}),r.jsx("li",{children:"Provide property recommendations and consultation."}),r.jsx("li",{children:"Arrange site visits, callbacks or other requested services."}),r.jsx("li",{children:"Communicate with you about properties, services and enquiries."}),r.jsx("li",{children:"Improve our website, services and customer experience."}),r.jsx("li",{children:"Maintain website security and prevent misuse or fraud."}),r.jsx("li",{children:"Comply with applicable legal and regulatory requirements."})]})]}),r.jsxs("section",{id:"sharing",children:[r.jsx("h3",{children:"3. Information Sharing & Disclosure"}),r.jsx("p",{children:"Homwisor does not sell personal information as a business practice. Information may be shared when reasonably required to provide a service you have requested, operate our website, work with relevant service providers, protect our legal interests, or comply with applicable law."}),r.jsx("p",{children:"Where a property enquiry requires communication with a developer, property owner, service provider or other relevant party, we may share the information necessary to respond to that enquiry."})]}),r.jsxs("section",{id:"cookies",children:[r.jsx("h3",{children:"4. Cookies & Tracking Technologies"}),r.jsx("p",{children:"Our website may use cookies and similar technologies to remember preferences, understand website usage, measure performance and improve the user experience."}),r.jsx("p",{children:"You can control or disable cookies through your browser settings. Some website functionality may be affected when cookies are disabled."})]}),r.jsxs("section",{id:"security",children:[r.jsx("h3",{children:"5. Data Security"}),r.jsx("p",{children:"We take reasonable administrative, technical and organizational measures to protect personal information from unauthorized access, misuse, alteration or disclosure."}),r.jsx("p",{children:"However, no method of transmission or electronic storage can be guaranteed to be completely secure. You should therefore avoid sending highly sensitive information through ordinary website forms unless specifically requested through a secure channel."})]}),r.jsxs("section",{id:"rights",children:[r.jsx("h3",{children:"6. Your Privacy Rights"}),r.jsx("p",{children:"Subject to applicable law, you may request access to, correction of, or deletion of personal information that we hold about you. You may also ask us to stop or limit certain communications."}),r.jsx("p",{children:"To make a privacy-related request, contact us using the details provided below. We may need to verify your identity before completing a request."})]}),r.jsxs("section",{id:"third-party",children:[r.jsx("h3",{children:"7. Third-Party Websites & Services"}),r.jsx("p",{children:"Our website may contain links to third-party websites, platforms or services. Those third parties operate under their own privacy policies and terms. Homwisor is not responsible for the privacy practices or content of external websites."})]}),r.jsxs("section",{id:"children",children:[r.jsx("h3",{children:"8. Children's Privacy"}),r.jsx("p",{children:"Our services are intended for adults and property-related users. We do not knowingly request personal information from children for the purpose of providing real estate services."})]}),r.jsxs("section",{id:"retention",children:[r.jsx("h3",{children:"9. Data Retention"}),r.jsx("p",{children:"We retain personal information for as long as reasonably necessary for the purposes described in this policy, to provide requested services, maintain business records, resolve disputes and meet applicable legal obligations."})]}),r.jsxs("section",{id:"changes",children:[r.jsx("h3",{children:"10. Changes to This Privacy Policy"}),r.jsx("p",{children:'We may update this Privacy Policy from time to time to reflect changes to our services, website, legal requirements or privacy practices. The updated version will be published on this page with a revised "Last updated" date.'})]}),r.jsxs("section",{id:"contact",className:"privacy-contact-box",children:[r.jsx("span",{className:"section-label",children:"CONTACT US"}),r.jsx("h3",{children:"Questions about your privacy?"}),r.jsx("p",{children:"If you have questions, requests or concerns regarding this Privacy Policy or the way your information is handled, please contact Homwisor."}),r.jsxs("div",{className:"privacy-contact-grid",children:[r.jsxs("a",{href:"mailto:info@homwisor.com",children:[r.jsx("small",{children:"EMAIL"}),"info@homwisor.com"]}),r.jsxs("a",{href:"tel:8500900100",children:[r.jsx("small",{children:"PHONE"}),"+91 8500 900 100"]}),r.jsxs("div",{children:[r.jsx("small",{children:"OFFICE"}),"Gurugram, Haryana, India"]})]})]}),r.jsxs("div",{className:"privacy-note",children:[r.jsx("strong",{children:"Important:"})," This page is a website privacy policy template for Homwisor and should be reviewed and finalized according to the company's actual data practices, third-party tools, consent mechanisms and applicable laws."]})]})]})}),r.jsx(Cr,{}),r.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .privacy-page {
          min-height: 100vh;
          background: ${La};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .privacy-page,
        .privacy-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        /* HERO */
        .privacy-hero {
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          color: #fff;
          background:
            radial-gradient(
              circle at 82% 28%,
              rgba(212,175,55,.16),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #050505 0%,
              #0d0d0d 55%,
              #1a160d 100%
            );
        }

        .privacy-hero::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          right: -150px;
          top: -200px;
          background: rgba(212,175,55,.10);
          filter: blur(10px);
        }

        .privacy-hero::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          left: -180px;
          bottom: -220px;
          background: rgba(212,175,55,.06);
        }

        .privacy-hero-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          right: 7%;
          top: -80px;
          border-radius: 50%;
          background: rgba(212,175,55,.08);
          filter: blur(80px);
        }

        .privacy-hero-circle {
          position: absolute;
          width: 520px;
          height: 520px;
          right: -180px;
          bottom: -300px;
          border: 1px solid rgba(212,175,55,.28);
          border-radius: 50%;
        }

        .privacy-hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 120px 20px 70px;
        }

        .privacy-eyebrow,
        .section-label {
          display: inline-block;
          color: ${Fi};
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .privacy-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -2px;
        }

        .privacy-hero h1 span {
          color: ${Fi};
        }

        .privacy-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.8;
        }

        /* MAIN */
        .privacy-main {
          padding: 70px 20px;
          background: #fff;
        }

        .privacy-layout {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 245px minmax(0, 1fr);
          gap: 55px;
          align-items: start;
        }

        /* SIDEBAR */
        .privacy-sidebar {
          position: sticky;
          top: 105px;
        }

        .privacy-sidebar-card {
          padding: 24px 20px;
          border: 1px solid #e8e2d5;
          border-radius: 15px;
          background: ${La};
        }

        .privacy-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${Ia};
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .privacy-sidebar-card a {
          display: block;
          padding: 9px 0;
          color: #555;
          border-bottom: 1px solid #e9e3d7;
          text-decoration: none;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          transition: .2s ease;
        }

        .privacy-sidebar-card a:last-child {
          border-bottom: 0;
        }

        .privacy-sidebar-card a:hover {
          color: ${Ia};
          padding-left: 4px;
        }

        /* CONTENT */
        .privacy-content {
          min-width: 0;
          max-width: 800px;
        }

        .policy-intro {
          padding-bottom: 30px;
          border-bottom: 1px solid #e7e1d6;
        }

        .policy-intro h2 {
          margin: 10px 0 5px;
          color: #111;
          font-size: 36px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 900;
        }

        .updated {
          margin: 0 0 20px;
          color: #999 !important;
          font-size: 10px !important;
        }

        .privacy-content section:not(.privacy-contact-box) {
          padding: 31px 0;
          border-bottom: 1px solid #eeeae2;
          scroll-margin-top: 100px;
        }

        .privacy-content h3 {
          margin: 0 0 13px;
          color: #111;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 850;
          letter-spacing: -.4px;
        }

        .privacy-content p,
        .privacy-content li {
          color: #656565;
          font-size: 13px;
          line-height: 1.9;
        }

        .privacy-content p {
          margin: 0 0 13px;
        }

        .privacy-content p:last-child {
          margin-bottom: 0;
        }

        .privacy-content ul {
          margin: 8px 0 0;
          padding-left: 20px;
        }

        .privacy-content li {
          padding: 3px 0;
        }

        /* CONTACT */
        .privacy-contact-box {
          margin-top: 30px;
          padding: 30px;
          border: 1px solid #e6ddca;
          border-radius: 18px;
          background: ${La};
          scroll-margin-top: 100px;
        }

        .privacy-contact-box h3 {
          margin: 9px 0 8px;
          font-size: 25px;
        }

        .privacy-contact-box > p {
          max-width: 650px;
          margin-bottom: 22px;
        }

        .privacy-contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .privacy-contact-grid a,
        .privacy-contact-grid div {
          display: block;
          padding: 15px;
          border: 1px solid #e6dfd0;
          border-radius: 10px;
          background: #fff;
          color: #222;
          text-decoration: none;
          font-size: 11px;
          font-weight: 750;
          line-height: 1.5;
        }

        .privacy-contact-grid a:hover {
          border-color: ${Fi};
        }

        .privacy-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${Ia};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .privacy-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${Fi};
          background: #faf8f2;
          color: #777;
          font-size: 10px;
          line-height: 1.7;
        }

        .privacy-note strong {
          color: #333;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .privacy-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .privacy-sidebar {
            position: static;
          }

          .privacy-sidebar-card {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 20px;
          }

          .privacy-sidebar-card > span {
            grid-column: 1 / -1;
          }

          .privacy-sidebar-card a {
            border-bottom: 1px solid #e9e3d7;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .privacy-hero {
            min-height: 390px;
          }

          .privacy-hero-content {
            padding: 110px 18px 55px;
          }

          .privacy-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .privacy-hero p {
            font-size: 12px;
            line-height: 1.7;
          }

          .privacy-main {
            padding: 42px 16px;
          }

          .privacy-sidebar-card {
            grid-template-columns: 1fr 1fr;
            padding: 18px 15px;
          }

          .privacy-content h3 {
            font-size: 18px;
          }

          .privacy-content p,
          .privacy-content li {
            font-size: 12px;
            line-height: 1.8;
          }

          .policy-intro h2 {
            font-size: 32px;
          }

          .privacy-contact-box {
            padding: 22px 17px;
          }

          .privacy-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .privacy-hero h1 {
            font-size: 38px;
          }

          .privacy-sidebar-card {
            grid-template-columns: 1fr;
          }

          .privacy-sidebar-card a {
            font-size: 9.5px;
          }
        }
      `})]})}const Hi="#D4AF37",Ui="#9A7418",Ma="#F7F5EF";function p2(){return r.jsxs("div",{className:"terms-page",children:[r.jsx(Rr,{}),r.jsxs("section",{className:"terms-hero",children:[r.jsx("div",{className:"terms-hero-glow"}),r.jsx("div",{className:"terms-hero-circle"}),r.jsxs("div",{className:"terms-hero-content",children:[r.jsx("span",{className:"terms-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),r.jsxs("h1",{children:["Terms & ",r.jsx("span",{children:"Conditions."})]}),r.jsx("p",{children:"Please read these terms carefully before using the Homwisor website, property listings, enquiry services and real estate consultation services."})]})]}),r.jsx("main",{className:"terms-main",children:r.jsxs("div",{className:"terms-layout",children:[r.jsx("aside",{className:"terms-sidebar",children:r.jsxs("div",{className:"terms-sidebar-card",children:[r.jsx("span",{children:"ON THIS PAGE"}),r.jsx("a",{href:"#acceptance",children:"Acceptance of Terms"}),r.jsx("a",{href:"#about",children:"About Homwisor"}),r.jsx("a",{href:"#use",children:"Use of Website"}),r.jsx("a",{href:"#listings",children:"Property Listings"}),r.jsx("a",{href:"#enquiries",children:"Enquiries & Communication"}),r.jsx("a",{href:"#accuracy",children:"Information Accuracy"}),r.jsx("a",{href:"#transactions",children:"Property Transactions"}),r.jsx("a",{href:"#intellectual",children:"Intellectual Property"}),r.jsx("a",{href:"#third-party",children:"Third-Party Services"}),r.jsx("a",{href:"#liability",children:"Limitation of Liability"}),r.jsx("a",{href:"#privacy",children:"Privacy"}),r.jsx("a",{href:"#changes",children:"Changes to Terms"}),r.jsx("a",{href:"#contact",children:"Contact Us"})]})}),r.jsxs("article",{className:"terms-content",children:[r.jsxs("div",{className:"terms-intro",id:"acceptance",children:[r.jsx("span",{className:"section-label",children:"LEGAL INFORMATION"}),r.jsx("h2",{children:"Terms & Conditions"}),r.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),r.jsx("p",{children:'These Terms and Conditions ("Terms") govern your access to and use of the Homwisor website and related services operated by Homwisor Consultant Private Limited ("Homwisor", "we", "us", or "our").'}),r.jsx("p",{children:"By accessing or using this website, submitting an enquiry, requesting a property consultation, contacting our team, or otherwise using our services, you acknowledge that you have read and understood these Terms and agree to be bound by them."})]}),r.jsxs("section",{id:"about",children:[r.jsx("h3",{children:"1. About Homwisor"}),r.jsx("p",{children:"Homwisor is a Gurugram-based real estate platform and agency that helps property buyers, sellers, tenants and landlords connect and transact with greater confidence. Our services include property search and listings, buyer and seller facilitation, market guidance and real estate advisory."}),r.jsx("p",{children:"Homwisor's public company information states that the business operates as Homwisor Consultant Private Limited and is registered as a real estate agent with the Haryana Real Estate Regulatory Authority (HARERA), Gurugram."})]}),r.jsxs("section",{id:"use",children:[r.jsx("h3",{children:"2. Use of the Website"}),r.jsx("p",{children:"You agree to use the website only for lawful purposes and in a manner that does not interfere with the operation, security, availability or integrity of the website."}),r.jsxs("ul",{children:[r.jsx("li",{children:"You must provide accurate information when submitting forms or enquiries."}),r.jsx("li",{children:"You must not use the website for fraudulent, misleading or unlawful activities."}),r.jsx("li",{children:"You must not attempt to gain unauthorized access to any system, account, database or website functionality."}),r.jsx("li",{children:"You must not copy, scrape, reproduce or commercially exploit website content without permission."})]})]}),r.jsxs("section",{id:"listings",children:[r.jsx("h3",{children:"3. Property Listings & Information"}),r.jsx("p",{children:"Property listings may include information such as project names, locations, prices, sizes, configurations, availability, amenities, photographs and other property-related details."}),r.jsx("p",{children:"Property information may be supplied or updated by developers, owners, agents or other relevant sources. Prices, availability, specifications, offers and other project details may change without prior notice."}),r.jsx("p",{children:"A listing or enquiry on Homwisor does not by itself constitute an offer, reservation, allotment, sale agreement or guarantee of availability."})]}),r.jsxs("section",{id:"enquiries",children:[r.jsx("h3",{children:"4. Property Enquiries & Communication"}),r.jsx("p",{children:"When you submit an enquiry, you authorize Homwisor and relevant property or service representatives to contact you regarding the enquiry through phone, email, WhatsApp or other appropriate communication channels."}),r.jsx("p",{children:"You are responsible for ensuring that the contact information provided by you is correct and belongs to you or that you are otherwise authorized to provide it."})]}),r.jsxs("section",{id:"accuracy",children:[r.jsx("h3",{children:"5. Accuracy of Information"}),r.jsx("p",{children:"Homwisor aims to provide useful and current property information, but information on the website may contain errors, omissions, outdated details or information supplied by third parties."}),r.jsx("p",{children:"Users should independently verify material information, including title, approvals, RERA registration, pricing, availability, specifications, payment schedules, possession timelines and other transaction-related details before making a decision."})]}),r.jsxs("section",{id:"transactions",children:[r.jsx("h3",{children:"6. Property Transactions"}),r.jsx("p",{children:"Homwisor may facilitate introductions, property visits, communication and other real estate assistance. Unless expressly agreed otherwise in writing, Homwisor is not the seller, developer, owner or legal representative of every property displayed on the website."}),r.jsx("p",{children:"Any purchase, sale, lease, booking, allotment or other property transaction is subject to separate documentation and agreements between the relevant parties."}),r.jsx("p",{children:"Users should obtain independent legal, financial and tax advice where appropriate before entering into a property transaction."})]}),r.jsxs("section",{id:"rera",children:[r.jsx("h3",{children:"7. Regulatory & RERA Information"}),r.jsx("p",{children:"Homwisor's public company information identifies the business as a HARERA-registered real estate agent and states that it facilitates transactions in accordance with the Real Estate (Regulation and Development) Act, 2016 and applicable Haryana rules."}),r.jsx("p",{children:"Users should independently verify the current registration status and the RERA registration of any relevant real estate project before proceeding with a transaction."})]}),r.jsxs("section",{id:"intellectual",children:[r.jsx("h3",{children:"8. Intellectual Property"}),r.jsx("p",{children:"Unless otherwise stated, the website's design, branding, logos, text, graphics, photographs, layout, software and other original materials are owned by or licensed to Homwisor."}),r.jsx("p",{children:"You may view and use the website for personal and legitimate property-related purposes. You may not reproduce, distribute, modify, publish, sell or commercially exploit website materials without prior written permission."})]}),r.jsxs("section",{id:"third-party",children:[r.jsx("h3",{children:"9. Third-Party Websites & Services"}),r.jsx("p",{children:"The website may contain links, integrations or references to third-party websites, developers, property owners, service providers, payment providers, maps, social platforms or other external services."}),r.jsx("p",{children:"Third-party services are governed by their own terms and policies. Homwisor is not responsible for the independent operation, availability, content or privacy practices of third-party websites and services."})]}),r.jsxs("section",{id:"liability",children:[r.jsx("h3",{children:"10. Disclaimer & Limitation of Liability"}),r.jsx("p",{children:"The website and its information are provided for general property-search, information and consultation purposes. Homwisor does not guarantee that the website or every piece of information will always be complete, current, uninterrupted or error-free."}),r.jsx("p",{children:"To the extent permitted by applicable law, Homwisor will not be responsible for losses arising solely from reliance on unverified property information, third-party information, changes in property availability or pricing, transaction decisions, website interruptions, or events beyond its reasonable control."})]}),r.jsxs("section",{id:"privacy",children:[r.jsx("h3",{children:"11. Privacy"}),r.jsxs("p",{children:["Your use of the website may involve the collection and processing of personal information. Please review our",r.jsxs("a",{className:"inline-link",href:"/privacy-policy",children:[" ","Privacy Policy"]})," ","for information about how personal data may be collected, used, stored and handled."]})]}),r.jsxs("section",{id:"changes",children:[r.jsx("h3",{children:"12. Changes to These Terms"}),r.jsx("p",{children:"Homwisor may update these Terms from time to time to reflect changes to the website, services, business practices or applicable legal requirements."}),r.jsx("p",{children:'Updated Terms will be published on this page with a revised "Last updated" date. Your continued use of the website after an update constitutes acceptance of the revised Terms to the extent permitted by applicable law.'})]}),r.jsxs("section",{id:"contact",className:"terms-contact-box",children:[r.jsx("span",{className:"section-label",children:"CONTACT US"}),r.jsx("h3",{children:"Questions about these Terms?"}),r.jsx("p",{children:"If you have questions about these Terms and Conditions or Homwisor's services, please contact the company using the information below."}),r.jsxs("div",{className:"terms-contact-grid",children:[r.jsxs("a",{href:"mailto:homwisor@gmail.com",children:[r.jsx("small",{children:"EMAIL"}),"homwisor@gmail.com"]}),r.jsxs("a",{href:"tel:9090101401",children:[r.jsx("small",{children:"PHONE"}),"+91 9090 101 401"]}),r.jsxs("div",{children:[r.jsx("small",{children:"REGISTERED OFFICE"}),"Unit No. 704, 7th Floor, ILD Trade Centre, Sohna Road, Village Tikri, Sector-47, Gurugram, Haryana – 122018"]})]})]}),r.jsxs("div",{className:"terms-note",children:[r.jsx("strong",{children:"Important:"})," This page is a website terms template prepared from Homwisor's publicly available company information and the requested website context. It should be reviewed by the company's legal counsel and aligned with its actual contracts, services, policies and applicable laws before publication."]})]})]})}),r.jsx(Cr,{}),r.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .terms-page {
          min-height: 100vh;
          background: ${Ma};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .terms-page,
        .terms-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        /* HERO */
        .terms-hero {
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          color: #fff;
          background:
            radial-gradient(
              circle at 82% 28%,
              rgba(212,175,55,.16),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #050505 0%,
              #0d0d0d 55%,
              #1a160d 100%
            );
        }

        .terms-hero::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          right: -150px;
          top: -200px;
          background: rgba(212,175,55,.10);
          filter: blur(10px);
        }

        .terms-hero::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          left: -180px;
          bottom: -220px;
          background: rgba(212,175,55,.06);
        }

        .terms-hero-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          right: 7%;
          top: -80px;
          border-radius: 50%;
          background: rgba(212,175,55,.08);
          filter: blur(80px);
        }

        .terms-hero-circle {
          position: absolute;
          width: 520px;
          height: 520px;
          right: -180px;
          bottom: -300px;
          border: 1px solid rgba(212,175,55,.28);
          border-radius: 50%;
        }

        .terms-hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 120px 20px 70px;
        }

        .terms-eyebrow,
        .section-label {
          display: inline-block;
          color: ${Hi};
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .terms-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -2px;
        }

        .terms-hero h1 span {
          color: ${Hi};
        }

        .terms-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.8;
        }

        /* MAIN */
        .terms-main {
          padding: 70px 20px;
          background: #fff;
        }

        .terms-layout {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 245px minmax(0, 1fr);
          gap: 55px;
          align-items: start;
        }

        /* SIDEBAR */
        .terms-sidebar {
          position: sticky;
          top: 105px;
        }

        .terms-sidebar-card {
          padding: 24px 20px;
          border: 1px solid #e8e2d5;
          border-radius: 15px;
          background: ${Ma};
        }

        .terms-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${Ui};
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .terms-sidebar-card a {
          display: block;
          padding: 9px 0;
          color: #555;
          border-bottom: 1px solid #e9e3d7;
          text-decoration: none;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          transition: .2s ease;
        }

        .terms-sidebar-card a:last-child {
          border-bottom: 0;
        }

        .terms-sidebar-card a:hover {
          color: ${Ui};
          padding-left: 4px;
        }

        /* CONTENT */
        .terms-content {
          min-width: 0;
          max-width: 800px;
        }

        .terms-intro {
          padding-bottom: 30px;
          border-bottom: 1px solid #e7e1d6;
        }

        .terms-intro h2 {
          margin: 10px 0 5px;
          color: #111;
          font-size: 36px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 900;
        }

        .updated {
          margin: 0 0 20px;
          color: #999 !important;
          font-size: 10px !important;
        }

        .terms-content section:not(.terms-contact-box) {
          padding: 31px 0;
          border-bottom: 1px solid #eeeae2;
          scroll-margin-top: 100px;
        }

        .terms-content h3 {
          margin: 0 0 13px;
          color: #111;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 850;
          letter-spacing: -.4px;
        }

        .terms-content p,
        .terms-content li {
          color: #656565;
          font-size: 13px;
          line-height: 1.9;
        }

        .terms-content p {
          margin: 0 0 13px;
        }

        .terms-content p:last-child {
          margin-bottom: 0;
        }

        .terms-content ul {
          margin: 8px 0 0;
          padding-left: 20px;
        }

        .terms-content li {
          padding: 3px 0;
        }

        .inline-link {
          color: ${Ui};
          font-weight: 800;
          text-decoration: none;
        }

        .inline-link:hover {
          color: #111;
        }

        /* CONTACT */
        .terms-contact-box {
          margin-top: 30px;
          padding: 30px;
          border: 1px solid #e6ddca;
          border-radius: 18px;
          background: ${Ma};
          scroll-margin-top: 100px;
        }

        .terms-contact-box h3 {
          margin: 9px 0 8px;
          font-size: 25px;
        }

        .terms-contact-box > p {
          max-width: 650px;
          margin-bottom: 22px;
        }

        .terms-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.4fr;
          gap: 10px;
        }

        .terms-contact-grid a,
        .terms-contact-grid div {
          display: block;
          padding: 15px;
          border: 1px solid #e6dfd0;
          border-radius: 10px;
          background: #fff;
          color: #222;
          text-decoration: none;
          font-size: 11px;
          font-weight: 750;
          line-height: 1.5;
        }

        .terms-contact-grid a:hover {
          border-color: ${Hi};
        }

        .terms-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${Ui};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .terms-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${Hi};
          background: #faf8f2;
          color: #777;
          font-size: 10px;
          line-height: 1.7;
        }

        .terms-note strong {
          color: #333;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .terms-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .terms-sidebar {
            position: static;
          }

          .terms-sidebar-card {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 20px;
          }

          .terms-sidebar-card > span {
            grid-column: 1 / -1;
          }

          .terms-sidebar-card a {
            border-bottom: 1px solid #e9e3d7;
          }

          .terms-contact-grid {
            grid-template-columns: 1fr 1fr;
          }

          .terms-contact-grid div {
            grid-column: 1 / -1;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .terms-hero {
            min-height: 390px;
          }

          .terms-hero-content {
            padding: 110px 18px 55px;
          }

          .terms-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .terms-hero p {
            font-size: 12px;
            line-height: 1.7;
          }

          .terms-main {
            padding: 42px 16px;
          }

          .terms-sidebar-card {
            grid-template-columns: 1fr 1fr;
            padding: 18px 15px;
          }

          .terms-content h3 {
            font-size: 18px;
          }

          .terms-content p,
          .terms-content li {
            font-size: 12px;
            line-height: 1.8;
          }

          .terms-intro h2 {
            font-size: 32px;
          }

          .terms-contact-box {
            padding: 22px 17px;
          }

          .terms-contact-grid {
            grid-template-columns: 1fr;
          }

          .terms-contact-grid div {
            grid-column: auto;
          }
        }

        @media (max-width: 420px) {
          .terms-hero h1 {
            font-size: 38px;
          }

          .terms-sidebar-card {
            grid-template-columns: 1fr;
          }

          .terms-sidebar-card a {
            font-size: 9.5px;
          }
        }
      `})]})}function h2({children:e}){return localStorage.getItem("admin_token")?e:r.jsx(Ts,{to:"/admin",replace:!0})}function u2(){return r.jsx(px,{children:r.jsxs(nx,{children:[r.jsx(We,{path:"/",element:r.jsx(G1,{})}),r.jsx(We,{path:"/about",element:r.jsx(t2,{})}),r.jsx(We,{path:"/search",element:r.jsx(r2,{})}),r.jsx(We,{path:"/property/:id",element:r.jsx(n2,{})}),r.jsx(We,{path:"/blog",element:r.jsx(d2,{})}),r.jsx(We,{path:"/privacy-policy",element:r.jsx(c2,{})}),r.jsx(We,{path:"/terms-and-conditions",element:r.jsx(p2,{})}),r.jsx(We,{path:"/property-snaps",element:r.jsx(i2,{})}),r.jsx(We,{path:"/snaps",element:r.jsx(Ts,{to:"/property-snaps",replace:!0})}),r.jsx(We,{path:"/admin",element:r.jsx(a2,{})}),r.jsx(We,{path:"/admin/dashboard",element:r.jsx(h2,{children:r.jsx(s2,{})})}),r.jsx(We,{path:"/contact",element:r.jsx(o2,{})}),r.jsx(We,{path:"*",element:r.jsx(Ts,{to:"/",replace:!0})})]})})}Ba.createRoot(document.getElementById("root")).render(r.jsx(Hc.StrictMode,{children:r.jsx(u2,{})}));
