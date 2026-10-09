const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-DIG9G8JA.js","assets/Dashboard-BdLhSIbN.css"])))=>i.map(i=>d[i]);
function Xf(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();var Qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bu={exports:{}},ra={},Fu={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),Zf=Symbol.for("react.portal"),Jf=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),am=Symbol.for("react.memo"),om=Symbol.for("react.lazy"),Rc=Symbol.iterator;function lm(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var Du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wu=Object.assign,Uu={};function kr(e,t,r){this.props=e,this.context=t,this.refs=Uu,this.updater=r||Du}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hu(){}Hu.prototype=kr.prototype;function yl(e,t,r){this.props=e,this.context=t,this.refs=Uu,this.updater=r||Du}var vl=yl.prototype=new Hu;vl.constructor=yl;Wu(vl,kr.prototype);vl.isPureReactComponent=!0;var Pc=Array.isArray,_u=Object.prototype.hasOwnProperty,bl={current:null},$u={key:!0,ref:!0,__self:!0,__source:!0};function Gu(e,t,r){var i,s={},a=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)_u.call(t,i)&&!$u.hasOwnProperty(i)&&(s[i]=t[i]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)s[i]===void 0&&(s[i]=l[i]);return{$$typeof:Ci,type:e,key:a,ref:o,props:s,_owner:bl.current}}function cm(e,t){return{$$typeof:Ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ci}function dm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Oc=/\/+/g;function ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dm(""+e.key):t.toString(36)}function cs(e,t,r,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ci:case Zf:o=!0}}if(o)return o=e,s=s(o),e=i===""?"."+ka(o,0):i,Pc(s)?(r="",e!=null&&(r=e.replace(Oc,"$&/")+"/"),cs(s,t,r,"",function(d){return d})):s!=null&&(jl(s)&&(s=cm(s,r+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Oc,"$&/")+"/")+e)),t.push(s)),1;if(o=0,i=i===""?".":i+":",Pc(e))for(var l=0;l<e.length;l++){a=e[l];var c=i+ka(a,l);o+=cs(a,t,r,c,s)}else if(c=lm(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=i+ka(a,l++),o+=cs(a,t,r,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Wi(e,t,r){if(e==null)return e;var i=[],s=0;return cs(e,i,"","",function(a){return t.call(r,a,s++)}),i}function um(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},ds={transition:null},hm={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:ds,ReactCurrentOwner:bl};function Vu(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Wi,forEach:function(e,t,r){Wi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Wi(e,function(){t++}),t},toArray:function(e){return Wi(e,function(t){return t})||[]},only:function(e){if(!jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=kr;K.Fragment=Jf;K.Profiler=tm;K.PureComponent=yl;K.StrictMode=em;K.Suspense=sm;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;K.act=Vu;K.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Wu({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=bl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)_u.call(t,c)&&!$u.hasOwnProperty(c)&&(i[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Ci,type:e.type,key:s,ref:a,props:i,_owner:o}};K.createContext=function(e){return e={$$typeof:rm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nm,_context:e},e.Consumer=e};K.createElement=Gu;K.createFactory=function(e){var t=Gu.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:im,render:e}};K.isValidElement=jl;K.lazy=function(e){return{$$typeof:om,_payload:{_status:-1,_result:e},_init:um}};K.memo=function(e,t){return{$$typeof:am,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=ds.transition;ds.transition={};try{e()}finally{ds.transition=t}};K.unstable_act=Vu;K.useCallback=function(e,t){return We.current.useCallback(e,t)};K.useContext=function(e){return We.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return We.current.useDeferredValue(e)};K.useEffect=function(e,t){return We.current.useEffect(e,t)};K.useId=function(){return We.current.useId()};K.useImperativeHandle=function(e,t,r){return We.current.useImperativeHandle(e,t,r)};K.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return We.current.useMemo(e,t)};K.useReducer=function(e,t,r){return We.current.useReducer(e,t,r)};K.useRef=function(e){return We.current.useRef(e)};K.useState=function(e){return We.current.useState(e)};K.useSyncExternalStore=function(e,t,r){return We.current.useSyncExternalStore(e,t,r)};K.useTransition=function(){return We.current.useTransition()};K.version="18.3.1";Fu.exports=K;var b=Fu.exports;const qu=Qf(b),pm=Xf({__proto__:null,default:qu},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm=b,mm=Symbol.for("react.element"),gm=Symbol.for("react.fragment"),xm=Object.prototype.hasOwnProperty,wm=fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ym={key:!0,ref:!0,__self:!0,__source:!0};function Yu(e,t,r){var i,s={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)xm.call(t,i)&&!ym.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:mm,type:e,key:a,ref:o,props:s,_owner:wm.current}}ra.Fragment=gm;ra.jsx=Yu;ra.jsxs=Yu;Bu.exports=ra;var n=Bu.exports,ho={},Ku={exports:{}},it={},Xu={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,W){var U=T.length;T.push(W);e:for(;0<U;){var Y=U-1>>>1,$=T[Y];if(0<s($,W))T[Y]=W,T[U]=$,U=Y;else break e}}function r(T){return T.length===0?null:T[0]}function i(T){if(T.length===0)return null;var W=T[0],U=T.pop();if(U!==W){T[0]=U;e:for(var Y=0,$=T.length,Ee=$>>>1;Y<Ee;){var xe=2*(Y+1)-1,He=T[xe],Be=xe+1,V=T[Be];if(0>s(He,U))Be<$&&0>s(V,He)?(T[Y]=V,T[Be]=U,Y=Be):(T[Y]=He,T[xe]=U,Y=xe);else if(Be<$&&0>s(V,U))T[Y]=V,T[Be]=U,Y=Be;else break e}}return W}function s(T,W){var U=T.sortIndex-W.sortIndex;return U!==0?U:T.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],h=1,u=null,g=3,j=!1,A=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var W=r(d);W!==null;){if(W.callback===null)i(d);else if(W.startTime<=T)i(d),W.sortIndex=W.expirationTime,t(c,W);else break;W=r(d)}}function y(T){if(k=!1,m(T),!A)if(r(c)!==null)A=!0,ce(S);else{var W=r(d);W!==null&&ge(y,W.startTime-T)}}function S(T,W){A=!1,k&&(k=!1,p(R),R=-1),j=!0;var U=g;try{for(m(W),u=r(c);u!==null&&(!(u.expirationTime>W)||T&&!N());){var Y=u.callback;if(typeof Y=="function"){u.callback=null,g=u.priorityLevel;var $=Y(u.expirationTime<=W);W=e.unstable_now(),typeof $=="function"?u.callback=$:u===r(c)&&i(c),m(W)}else i(c);u=r(c)}if(u!==null)var Ee=!0;else{var xe=r(d);xe!==null&&ge(y,xe.startTime-W),Ee=!1}return Ee}finally{u=null,g=U,j=!1}}var E=!1,w=null,R=-1,z=5,B=-1;function N(){return!(e.unstable_now()-B<z)}function M(){if(w!==null){var T=e.unstable_now();B=T;var W=!0;try{W=w(!0,T)}finally{W?P():(E=!1,w=null)}}else E=!1}var P;if(typeof f=="function")P=function(){f(M)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,ue=_.port2;_.port1.onmessage=M,P=function(){ue.postMessage(null)}}else P=function(){C(M,0)};function ce(T){w=T,E||(E=!0,P())}function ge(T,W){R=C(function(){T(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){A||j||(A=!0,ce(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var U=g;g=W;try{return T()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,W){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=g;g=T;try{return W()}finally{g=U}},e.unstable_scheduleCallback=function(T,W,U){var Y=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Y+U:Y):U=Y,T){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=U+$,T={id:h++,callback:W,priorityLevel:T,startTime:U,expirationTime:$,sortIndex:-1},U>Y?(T.sortIndex=U,t(d,T),r(c)===null&&T===r(d)&&(k?(p(R),R=-1):k=!0,ge(y,U-Y))):(T.sortIndex=$,t(c,T),A||j||(A=!0,ce(S))),T},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(T){var W=g;return function(){var U=g;g=W;try{return T.apply(this,arguments)}finally{g=U}}}})(Qu);Xu.exports=Qu;var vm=Xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=b,rt=vm;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zu=new Set,ai={};function _n(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(ai[e]=t,e=0;e<t.length;e++)Zu.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),po=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tc={},Lc={};function Am(e){return po.call(Lc,e)?!0:po.call(Tc,e)?!1:jm.test(e)?Lc[e]=!0:(Tc[e]=!0,!1)}function km(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sm(e,t,r,i){if(t===null||typeof t>"u"||km(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,r,i,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Al,kl);Pe[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Al,kl);Pe[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Al,kl);Pe[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sl(e,t,r,i){var s=Pe.hasOwnProperty(t)?Pe[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sm(t,r,s,i)&&(r=null),i||s===null?Am(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Ht=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),fo=Symbol.for("react.profiler"),Ju=Symbol.for("react.provider"),eh=Symbol.for("react.context"),Nl=Symbol.for("react.forward_ref"),mo=Symbol.for("react.suspense"),go=Symbol.for("react.suspense_list"),Cl=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),th=Symbol.for("react.offscreen"),Mc=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=Mc&&e[Mc]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Sa;function Vr(e){if(Sa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Sa=t&&t[1]||""}return`
`+Sa+e}var Ea=!1;function Na(e,t){if(!e||Ea)return"";Ea=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=i.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ea=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Vr(e):""}function Em(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=Na(e.type,!1),e;case 11:return e=Na(e.type.render,!1),e;case 1:return e=Na(e.type,!0),e;default:return""}}function xo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Qn:return"Portal";case fo:return"Profiler";case El:return"StrictMode";case mo:return"Suspense";case go:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eh:return(e.displayName||"Context")+".Consumer";case Ju:return(e._context.displayName||"Context")+".Provider";case Nl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cl:return t=e.displayName||null,t!==null?t:xo(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return xo(e(t))}catch{}}return null}function Nm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xo(t);case 8:return t===El?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cm(e){var t=nh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hi(e){e._valueTracker||(e._valueTracker=Cm(e))}function rh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=nh(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,t){var r=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function zc(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=pn(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ih(e,t){t=t.checked,t!=null&&Sl(e,"checked",t,!1)}function yo(e,t){ih(e,t);var r=pn(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vo(e,t.type,r):t.hasOwnProperty("defaultValue")&&vo(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ic(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function vo(e,t,r){(t!=="number"||Es(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var qr=Array.isArray;function cr(e,t,r,i){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+pn(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function bo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(O(92));if(qr(r)){if(1<r.length)throw Error(O(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:pn(r)}}function sh(e,t){var r=pn(t.value),i=pn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Fc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ah(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ah(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,oh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rm=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){Rm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qr[t]=Qr[e]})});function lh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}function ch(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=lh(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var Pm=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(Pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var So=null;function Rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Eo=null,dr=null,ur=null;function Dc(e){if(e=Oi(e)){if(typeof Eo!="function")throw Error(O(280));var t=e.stateNode;t&&(t=la(t),Eo(e.stateNode,e.type,t))}}function dh(e){dr?ur?ur.push(e):ur=[e]:dr=e}function uh(){if(dr){var e=dr,t=ur;if(ur=dr=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function hh(e,t){return e(t)}function ph(){}var Ca=!1;function fh(e,t,r){if(Ca)return e(t,r);Ca=!0;try{return hh(e,t,r)}finally{Ca=!1,(dr!==null||ur!==null)&&(ph(),uh())}}function li(e,t){var r=e.stateNode;if(r===null)return null;var i=la(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(O(231,t,typeof r));return r}var No=!1;if(Ft)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){No=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{No=!1}function Om(e,t,r,i,s,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Zr=!1,Ns=null,Cs=!1,Co=null,Tm={onError:function(e){Zr=!0,Ns=e}};function Lm(e,t,r,i,s,a,o,l,c){Zr=!1,Ns=null,Om.apply(Tm,arguments)}function Mm(e,t,r,i,s,a,o,l,c){if(Lm.apply(this,arguments),Zr){if(Zr){var d=Ns;Zr=!1,Ns=null}else throw Error(O(198));Cs||(Cs=!0,Co=d)}}function $n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function mh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if($n(e)!==e)throw Error(O(188))}function zm(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(O(188));return t!==e?null:e}for(var r=e,i=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return Wc(s),e;if(a===i)return Wc(s),t;a=a.sibling}throw Error(O(188))}if(r.return!==i.return)r=s,i=a;else{for(var o=!1,l=s.child;l;){if(l===r){o=!0,r=s,i=a;break}if(l===i){o=!0,i=s,r=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===r){o=!0,r=a,i=s;break}if(l===i){o=!0,i=a,r=s;break}l=l.sibling}if(!o)throw Error(O(189))}}if(r.alternate!==i)throw Error(O(190))}if(r.tag!==3)throw Error(O(188));return r.stateNode.current===r?e:t}function gh(e){return e=zm(e),e!==null?xh(e):null}function xh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xh(e);if(t!==null)return t;e=e.sibling}return null}var wh=rt.unstable_scheduleCallback,Uc=rt.unstable_cancelCallback,Im=rt.unstable_shouldYield,Bm=rt.unstable_requestPaint,he=rt.unstable_now,Fm=rt.unstable_getCurrentPriorityLevel,Pl=rt.unstable_ImmediatePriority,yh=rt.unstable_UserBlockingPriority,Rs=rt.unstable_NormalPriority,Dm=rt.unstable_LowPriority,vh=rt.unstable_IdlePriority,ia=null,Rt=null;function Wm(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(ia,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:_m,Um=Math.log,Hm=Math.LN2;function _m(e){return e>>>=0,e===0?32:31-(Um(e)/Hm|0)|0}var $i=64,Gi=4194304;function Yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ps(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~s;l!==0?i=Yr(l):(a&=o,a!==0&&(i=Yr(a)))}else o=r&~s,o!==0?i=Yr(o):a!==0&&(i=Yr(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&s)&&(s=i&-i,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-jt(t),s=1<<r,i|=e[r],t&=~s;return i}function $m(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gm(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-jt(a),l=1<<o,c=s[o];c===-1?(!(l&r)||l&i)&&(s[o]=$m(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function Ro(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bh(){var e=$i;return $i<<=1,!($i&4194240)&&($i=64),e}function Ra(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ri(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=r}function Vm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-jt(r),a=1<<s;t[s]=0,i[s]=-1,e[s]=-1,r&=~a}}function Ol(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-jt(r),s=1<<i;s&t|e[i]&t&&(e[i]|=t),r&=~s}}var ee=0;function jh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ah,Tl,kh,Sh,Eh,Po=!1,Vi=[],nn=null,rn=null,sn=null,ci=new Map,di=new Map,Xt=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hc(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function Mr(e,t,r,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Oi(t),t!==null&&Tl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Ym(e,t,r,i,s){switch(t){case"focusin":return nn=Mr(nn,e,t,r,i,s),!0;case"dragenter":return rn=Mr(rn,e,t,r,i,s),!0;case"mouseover":return sn=Mr(sn,e,t,r,i,s),!0;case"pointerover":var a=s.pointerId;return ci.set(a,Mr(ci.get(a)||null,e,t,r,i,s)),!0;case"gotpointercapture":return a=s.pointerId,di.set(a,Mr(di.get(a)||null,e,t,r,i,s)),!0}return!1}function Nh(e){var t=Nn(e.target);if(t!==null){var r=$n(t);if(r!==null){if(t=r.tag,t===13){if(t=mh(r),t!==null){e.blockedOn=t,Eh(e.priority,function(){kh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Oo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);So=i,r.target.dispatchEvent(i),So=null}else return t=Oi(r),t!==null&&Tl(t),e.blockedOn=r,!1;t.shift()}return!0}function _c(e,t,r){us(e)&&r.delete(t)}function Km(){Po=!1,nn!==null&&us(nn)&&(nn=null),rn!==null&&us(rn)&&(rn=null),sn!==null&&us(sn)&&(sn=null),ci.forEach(_c),di.forEach(_c)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Po||(Po=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Km)))}function ui(e){function t(s){return zr(s,e)}if(0<Vi.length){zr(Vi[0],e);for(var r=1;r<Vi.length;r++){var i=Vi[r];i.blockedOn===e&&(i.blockedOn=null)}}for(nn!==null&&zr(nn,e),rn!==null&&zr(rn,e),sn!==null&&zr(sn,e),ci.forEach(t),di.forEach(t),r=0;r<Xt.length;r++)i=Xt[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Xt.length&&(r=Xt[0],r.blockedOn===null);)Nh(r),r.blockedOn===null&&Xt.shift()}var hr=Ht.ReactCurrentBatchConfig,Os=!0;function Xm(e,t,r,i){var s=ee,a=hr.transition;hr.transition=null;try{ee=1,Ll(e,t,r,i)}finally{ee=s,hr.transition=a}}function Qm(e,t,r,i){var s=ee,a=hr.transition;hr.transition=null;try{ee=4,Ll(e,t,r,i)}finally{ee=s,hr.transition=a}}function Ll(e,t,r,i){if(Os){var s=Oo(e,t,r,i);if(s===null)Da(e,t,i,Ts,r),Hc(e,i);else if(Ym(s,e,t,r,i))i.stopPropagation();else if(Hc(e,i),t&4&&-1<qm.indexOf(e)){for(;s!==null;){var a=Oi(s);if(a!==null&&Ah(a),a=Oo(e,t,r,i),a===null&&Da(e,t,i,Ts,r),a===s)break;s=a}s!==null&&i.stopPropagation()}else Da(e,t,i,null,r)}}var Ts=null;function Oo(e,t,r,i){if(Ts=null,e=Rl(i),e=Nn(e),e!==null)if(t=$n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=mh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ts=e,null}function Ch(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fm()){case Pl:return 1;case yh:return 4;case Rs:case Dm:return 16;case vh:return 536870912;default:return 16}default:return 16}}var Zt=null,Ml=null,hs=null;function Rh(){if(hs)return hs;var e,t=Ml,r=t.length,i,s="value"in Zt?Zt.value:Zt.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var o=r-e;for(i=1;i<=o&&t[r-i]===s[a-i];i++);return hs=s.slice(e,1<i?1-i:void 0)}function ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function $c(){return!1}function st(e){function t(r,i,s,a,o){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qi:$c,this.isPropagationStopped=$c,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=st(Sr),Pi=le({},Sr,{view:0,detail:0}),Zm=st(Pi),Pa,Oa,Ir,sa=le({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(Pa=e.screenX-Ir.screenX,Oa=e.screenY-Ir.screenY):Oa=Pa=0,Ir=e),Pa)},movementY:function(e){return"movementY"in e?e.movementY:Oa}}),Gc=st(sa),Jm=le({},sa,{dataTransfer:0}),eg=st(Jm),tg=le({},Pi,{relatedTarget:0}),Ta=st(tg),ng=le({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=st(ng),ig=le({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=st(ig),ag=le({},Sr,{data:0}),Vc=st(ag),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cg[e])?!!t[e]:!1}function Il(){return dg}var ug=le({},Pi,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hg=st(ug),pg=le({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=st(pg),fg=le({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),mg=st(fg),gg=le({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=st(gg),wg=le({},sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=st(wg),vg=[9,13,27,32],Bl=Ft&&"CompositionEvent"in window,Jr=null;Ft&&"documentMode"in document&&(Jr=document.documentMode);var bg=Ft&&"TextEvent"in window&&!Jr,Ph=Ft&&(!Bl||Jr&&8<Jr&&11>=Jr),Yc=" ",Kc=!1;function Oh(e,t){switch(e){case"keyup":return vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function jg(e,t){switch(e){case"compositionend":return Th(t);case"keypress":return t.which!==32?null:(Kc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Kc?null:e;default:return null}}function Ag(e,t){if(Jn)return e==="compositionend"||!Bl&&Oh(e,t)?(e=Rh(),hs=Ml=Zt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ph&&t.locale!=="ko"?null:t.data;default:return null}}var kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kg[e.type]:t==="textarea"}function Lh(e,t,r,i){dh(i),t=Ls(t,"onChange"),0<t.length&&(r=new zl("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var ei=null,hi=null;function Sg(e){$h(e,0)}function aa(e){var t=nr(e);if(rh(t))return e}function Eg(e,t){if(e==="change")return t}var Mh=!1;if(Ft){var La;if(Ft){var Ma="oninput"in document;if(!Ma){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Ma=typeof Qc.oninput=="function"}La=Ma}else La=!1;Mh=La&&(!document.documentMode||9<document.documentMode)}function Zc(){ei&&(ei.detachEvent("onpropertychange",zh),hi=ei=null)}function zh(e){if(e.propertyName==="value"&&aa(hi)){var t=[];Lh(t,hi,e,Rl(e)),fh(Sg,t)}}function Ng(e,t,r){e==="focusin"?(Zc(),ei=t,hi=r,ei.attachEvent("onpropertychange",zh)):e==="focusout"&&Zc()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(hi)}function Rg(e,t){if(e==="click")return aa(t)}function Pg(e,t){if(e==="input"||e==="change")return aa(t)}function Og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Og;function pi(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!po.call(t,s)||!kt(e[s],t[s]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var r=Jc(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Jc(r)}}function Ih(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ih(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bh(){for(var e=window,t=Es();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Es(e.document)}return t}function Fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tg(e){var t=Bh(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ih(r.ownerDocument.documentElement,r)){if(i!==null&&Fl(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=ed(r,a);var o=ed(r,i);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lg=Ft&&"documentMode"in document&&11>=document.documentMode,er=null,To=null,ti=null,Lo=!1;function td(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lo||er==null||er!==Es(i)||(i=er,"selectionStart"in i&&Fl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ti&&pi(ti,i)||(ti=i,i=Ls(To,"onSelect"),0<i.length&&(t=new zl("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=er)))}function Yi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var tr={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},za={},Fh={};Ft&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function oa(e){if(za[e])return za[e];if(!tr[e])return e;var t=tr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Fh)return za[e]=t[r];return e}var Dh=oa("animationend"),Wh=oa("animationiteration"),Uh=oa("animationstart"),Hh=oa("transitionend"),_h=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){_h.set(e,t),_n(t,[e])}for(var Ia=0;Ia<nd.length;Ia++){var Ba=nd[Ia],Mg=Ba.toLowerCase(),zg=Ba[0].toUpperCase()+Ba.slice(1);gn(Mg,"on"+zg)}gn(Dh,"onAnimationEnd");gn(Wh,"onAnimationIteration");gn(Uh,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Hh,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function rd(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Mm(i,t,void 0,e),e.currentTarget=null}function $h(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;rd(s,l,d),a=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;rd(s,l,d),a=c}}}if(Cs)throw e=Co,Cs=!1,Co=null,e}function ne(e,t){var r=t[Fo];r===void 0&&(r=t[Fo]=new Set);var i=e+"__bubble";r.has(i)||(Gh(t,e,2,!1),r.add(i))}function Fa(e,t,r){var i=0;t&&(i|=4),Gh(r,e,i,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[Ki]){e[Ki]=!0,Zu.forEach(function(r){r!=="selectionchange"&&(Ig.has(r)||Fa(r,!1,e),Fa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,Fa("selectionchange",!1,t))}}function Gh(e,t,r,i){switch(Ch(t)){case 1:var s=Xm;break;case 4:s=Qm;break;default:s=Ll}r=s.bind(null,t,r,e),s=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Da(e,t,r,i,s){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Nn(l),o===null)return;if(c=o.tag,c===5||c===6){i=a=o;continue e}l=l.parentNode}}i=i.return}fh(function(){var d=a,h=Rl(r),u=[];e:{var g=_h.get(e);if(g!==void 0){var j=zl,A=e;switch(e){case"keypress":if(ps(r)===0)break e;case"keydown":case"keyup":j=hg;break;case"focusin":A="focus",j=Ta;break;case"focusout":A="blur",j=Ta;break;case"beforeblur":case"afterblur":j=Ta;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=mg;break;case Dh:case Wh:case Uh:j=rg;break;case Hh:j=xg;break;case"scroll":j=Zm;break;case"wheel":j=yg;break;case"copy":case"cut":case"paste":j=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=qc}var k=(t&4)!==0,C=!k&&e==="scroll",p=k?g!==null?g+"Capture":null:g;k=[];for(var f=d,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=li(f,p),y!=null&&k.push(mi(f,y,m)))),C)break;f=f.return}0<k.length&&(g=new j(g,A,null,r,h),u.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",g&&r!==So&&(A=r.relatedTarget||r.fromElement)&&(Nn(A)||A[Dt]))break e;if((j||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,j?(A=r.relatedTarget||r.toElement,j=d,A=A?Nn(A):null,A!==null&&(C=$n(A),A!==C||A.tag!==5&&A.tag!==6)&&(A=null)):(j=null,A=d),j!==A)){if(k=Gc,y="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=qc,y="onPointerLeave",p="onPointerEnter",f="pointer"),C=j==null?g:nr(j),m=A==null?g:nr(A),g=new k(y,f+"leave",j,r,h),g.target=C,g.relatedTarget=m,y=null,Nn(h)===d&&(k=new k(p,f+"enter",A,r,h),k.target=m,k.relatedTarget=C,y=k),C=y,j&&A)t:{for(k=j,p=A,f=0,m=k;m;m=qn(m))f++;for(m=0,y=p;y;y=qn(y))m++;for(;0<f-m;)k=qn(k),f--;for(;0<m-f;)p=qn(p),m--;for(;f--;){if(k===p||p!==null&&k===p.alternate)break t;k=qn(k),p=qn(p)}k=null}else k=null;j!==null&&id(u,g,j,k,!1),A!==null&&C!==null&&id(u,C,A,k,!0)}}e:{if(g=d?nr(d):window,j=g.nodeName&&g.nodeName.toLowerCase(),j==="select"||j==="input"&&g.type==="file")var S=Eg;else if(Xc(g))if(Mh)S=Pg;else{S=Cg;var E=Ng}else(j=g.nodeName)&&j.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Rg);if(S&&(S=S(e,d))){Lh(u,S,r,h);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&vo(g,"number",g.value)}switch(E=d?nr(d):window,e){case"focusin":(Xc(E)||E.contentEditable==="true")&&(er=E,To=d,ti=null);break;case"focusout":ti=To=er=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,td(u,r,h);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":td(u,r,h)}var w;if(Bl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Jn?Oh(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(Ph&&r.locale!=="ko"&&(Jn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Jn&&(w=Rh()):(Zt=h,Ml="value"in Zt?Zt.value:Zt.textContent,Jn=!0)),E=Ls(d,R),0<E.length&&(R=new Vc(R,e,null,r,h),u.push({event:R,listeners:E}),w?R.data=w:(w=Th(r),w!==null&&(R.data=w)))),(w=bg?jg(e,r):Ag(e,r))&&(d=Ls(d,"onBeforeInput"),0<d.length&&(h=new Vc("onBeforeInput","beforeinput",null,r,h),u.push({event:h,listeners:d}),h.data=w))}$h(u,t)})}function mi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ls(e,t){for(var r=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=li(e,r),a!=null&&i.unshift(mi(e,a,s)),a=li(e,t),a!=null&&i.push(mi(e,a,s))),e=e.return}return i}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,r,i,s){for(var a=t._reactName,o=[];r!==null&&r!==i;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,s?(c=li(r,a),c!=null&&o.unshift(mi(r,c,l))):s||(c=li(r,a),c!=null&&o.push(mi(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Bg=/\r\n?/g,Fg=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Bg,`
`).replace(Fg,"")}function Xi(e,t,r){if(t=sd(t),sd(e)!==t&&r)throw Error(O(425))}function Ms(){}var Mo=null,zo=null;function Io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bo=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(Ug)}:Bo;function Ug(e){setTimeout(function(){throw e})}function Wa(e,t){var r=t,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),ui(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);ui(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Er,gi="__reactProps$"+Er,Dt="__reactContainer$"+Er,Fo="__reactEvents$"+Er,Hg="__reactListeners$"+Er,_g="__reactHandles$"+Er;function Nn(e){var t=e[Ct];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Dt]||r[Ct]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=od(e);e!==null;){if(r=e[Ct])return r;e=od(e)}return t}e=r,r=e.parentNode}return null}function Oi(e){return e=e[Ct]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function la(e){return e[gi]||null}var Do=[],rr=-1;function xn(e){return{current:e}}function ie(e){0>rr||(e.current=Do[rr],Do[rr]=null,rr--)}function te(e,t){rr++,Do[rr]=e.current,e.current=t}var fn={},Ie=xn(fn),Ve=xn(!1),Mn=fn;function gr(e,t){var r=e.type.contextTypes;if(!r)return fn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function qe(e){return e=e.childContextTypes,e!=null}function zs(){ie(Ve),ie(Ie)}function ld(e,t,r){if(Ie.current!==fn)throw Error(O(168));te(Ie,t),te(Ve,r)}function Vh(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(O(108,Nm(e)||"Unknown",s));return le({},r,i)}function Is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Mn=Ie.current,te(Ie,e),te(Ve,Ve.current),!0}function cd(e,t,r){var i=e.stateNode;if(!i)throw Error(O(169));r?(e=Vh(e,t,Mn),i.__reactInternalMemoizedMergedChildContext=e,ie(Ve),ie(Ie),te(Ie,e)):ie(Ve),te(Ve,r)}var Mt=null,ca=!1,Ua=!1;function qh(e){Mt===null?Mt=[e]:Mt.push(e)}function $g(e){ca=!0,qh(e)}function wn(){if(!Ua&&Mt!==null){Ua=!0;var e=0,t=ee;try{var r=Mt;for(ee=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Mt=null,ca=!1}catch(s){throw Mt!==null&&(Mt=Mt.slice(e+1)),wh(Pl,wn),s}finally{ee=t,Ua=!1}}return null}var ir=[],sr=0,Bs=null,Fs=0,lt=[],ct=0,zn=null,zt=1,It="";function kn(e,t){ir[sr++]=Fs,ir[sr++]=Bs,Bs=e,Fs=t}function Yh(e,t,r){lt[ct++]=zt,lt[ct++]=It,lt[ct++]=zn,zn=e;var i=zt;e=It;var s=32-jt(i)-1;i&=~(1<<s),r+=1;var a=32-jt(t)+s;if(30<a){var o=s-s%5;a=(i&(1<<o)-1).toString(32),i>>=o,s-=o,zt=1<<32-jt(t)+s|r<<s|i,It=a+e}else zt=1<<a|r<<s|i,It=e}function Dl(e){e.return!==null&&(kn(e,1),Yh(e,1,0))}function Wl(e){for(;e===Bs;)Bs=ir[--sr],ir[sr]=null,Fs=ir[--sr],ir[sr]=null;for(;e===zn;)zn=lt[--ct],lt[ct]=null,It=lt[--ct],lt[ct]=null,zt=lt[--ct],lt[ct]=null}var nt=null,tt=null,se=!1,vt=null;function Kh(e,t){var r=dt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function dd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=zn!==null?{id:zt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=dt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,nt=e,tt=null,!0):!1;default:return!1}}function Wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Uo(e){if(se){var t=tt;if(t){var r=t;if(!dd(e,t)){if(Wo(e))throw Error(O(418));t=an(r.nextSibling);var i=nt;t&&dd(e,t)?Kh(i,r):(e.flags=e.flags&-4097|2,se=!1,nt=e)}}else{if(Wo(e))throw Error(O(418));e.flags=e.flags&-4097|2,se=!1,nt=e}}}function ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function Qi(e){if(e!==nt)return!1;if(!se)return ud(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Io(e.type,e.memoizedProps)),t&&(t=tt)){if(Wo(e))throw Xh(),Error(O(418));for(;t;)Kh(e,t),t=an(t.nextSibling)}if(ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){tt=an(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?an(e.stateNode.nextSibling):null;return!0}function Xh(){for(var e=tt;e;)e=an(e.nextSibling)}function xr(){tt=nt=null,se=!1}function Ul(e){vt===null?vt=[e]:vt.push(e)}var Gg=Ht.ReactCurrentBatchConfig;function Br(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(O(309));var i=r.stateNode}if(!i)throw Error(O(147,e));var s=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(O(284));if(!r._owner)throw Error(O(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hd(e){var t=e._init;return t(e._payload)}function Qh(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function r(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function i(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function s(p,f){return p=dn(p,f),p.index=0,p.sibling=null,p}function a(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=Ya(m,p.mode,y),f.return=p,f):(f=s(f,m),f.return=p,f)}function c(p,f,m,y){var S=m.type;return S===Zn?h(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yt&&hd(S)===f.type)?(y=s(f,m.props),y.ref=Br(p,f,m),y.return=p,y):(y=vs(m.type,m.key,m.props,null,p.mode,y),y.ref=Br(p,f,m),y.return=p,y)}function d(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ka(m,p.mode,y),f.return=p,f):(f=s(f,m.children||[]),f.return=p,f)}function h(p,f,m,y,S){return f===null||f.tag!==7?(f=Tn(m,p.mode,y,S),f.return=p,f):(f=s(f,m),f.return=p,f)}function u(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ya(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ui:return m=vs(f.type,f.key,f.props,null,p.mode,m),m.ref=Br(p,null,f),m.return=p,m;case Qn:return f=Ka(f,p.mode,m),f.return=p,f;case Yt:var y=f._init;return u(p,y(f._payload),m)}if(qr(f)||Tr(f))return f=Tn(f,p.mode,m,null),f.return=p,f;Zi(p,f)}return null}function g(p,f,m,y){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:return m.key===S?c(p,f,m,y):null;case Qn:return m.key===S?d(p,f,m,y):null;case Yt:return S=m._init,g(p,f,S(m._payload),y)}if(qr(m)||Tr(m))return S!==null?null:h(p,f,m,y,null);Zi(p,m)}return null}function j(p,f,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ui:return p=p.get(y.key===null?m:y.key)||null,c(f,p,y,S);case Qn:return p=p.get(y.key===null?m:y.key)||null,d(f,p,y,S);case Yt:var E=y._init;return j(p,f,m,E(y._payload),S)}if(qr(y)||Tr(y))return p=p.get(m)||null,h(f,p,y,S,null);Zi(f,y)}return null}function A(p,f,m,y){for(var S=null,E=null,w=f,R=f=0,z=null;w!==null&&R<m.length;R++){w.index>R?(z=w,w=null):z=w.sibling;var B=g(p,w,m[R],y);if(B===null){w===null&&(w=z);break}e&&w&&B.alternate===null&&t(p,w),f=a(B,f,R),E===null?S=B:E.sibling=B,E=B,w=z}if(R===m.length)return r(p,w),se&&kn(p,R),S;if(w===null){for(;R<m.length;R++)w=u(p,m[R],y),w!==null&&(f=a(w,f,R),E===null?S=w:E.sibling=w,E=w);return se&&kn(p,R),S}for(w=i(p,w);R<m.length;R++)z=j(w,p,R,m[R],y),z!==null&&(e&&z.alternate!==null&&w.delete(z.key===null?R:z.key),f=a(z,f,R),E===null?S=z:E.sibling=z,E=z);return e&&w.forEach(function(N){return t(p,N)}),se&&kn(p,R),S}function k(p,f,m,y){var S=Tr(m);if(typeof S!="function")throw Error(O(150));if(m=S.call(m),m==null)throw Error(O(151));for(var E=S=null,w=f,R=f=0,z=null,B=m.next();w!==null&&!B.done;R++,B=m.next()){w.index>R?(z=w,w=null):z=w.sibling;var N=g(p,w,B.value,y);if(N===null){w===null&&(w=z);break}e&&w&&N.alternate===null&&t(p,w),f=a(N,f,R),E===null?S=N:E.sibling=N,E=N,w=z}if(B.done)return r(p,w),se&&kn(p,R),S;if(w===null){for(;!B.done;R++,B=m.next())B=u(p,B.value,y),B!==null&&(f=a(B,f,R),E===null?S=B:E.sibling=B,E=B);return se&&kn(p,R),S}for(w=i(p,w);!B.done;R++,B=m.next())B=j(w,p,R,B.value,y),B!==null&&(e&&B.alternate!==null&&w.delete(B.key===null?R:B.key),f=a(B,f,R),E===null?S=B:E.sibling=B,E=B);return e&&w.forEach(function(M){return t(p,M)}),se&&kn(p,R),S}function C(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:e:{for(var S=m.key,E=f;E!==null;){if(E.key===S){if(S=m.type,S===Zn){if(E.tag===7){r(p,E.sibling),f=s(E,m.props.children),f.return=p,p=f;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yt&&hd(S)===E.type){r(p,E.sibling),f=s(E,m.props),f.ref=Br(p,E,m),f.return=p,p=f;break e}r(p,E);break}else t(p,E);E=E.sibling}m.type===Zn?(f=Tn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=vs(m.type,m.key,m.props,null,p.mode,y),y.ref=Br(p,f,m),y.return=p,p=y)}return o(p);case Qn:e:{for(E=m.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){r(p,f.sibling),f=s(f,m.children||[]),f.return=p,p=f;break e}else{r(p,f);break}else t(p,f);f=f.sibling}f=Ka(m,p.mode,y),f.return=p,p=f}return o(p);case Yt:return E=m._init,C(p,f,E(m._payload),y)}if(qr(m))return A(p,f,m,y);if(Tr(m))return k(p,f,m,y);Zi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(r(p,f.sibling),f=s(f,m),f.return=p,p=f):(r(p,f),f=Ya(m,p.mode,y),f.return=p,p=f),o(p)):r(p,f)}return C}var wr=Qh(!0),Zh=Qh(!1),Ds=xn(null),Ws=null,ar=null,Hl=null;function _l(){Hl=ar=Ws=null}function $l(e){var t=Ds.current;ie(Ds),e._currentValue=t}function Ho(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){Ws=e,Hl=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(Ws===null)throw Error(O(308));ar=e,Ws.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var Cn=null;function Gl(e){Cn===null?Cn=[e]:Cn.push(e)}function Jh(e,t,r,i){var s=t.interleaved;return s===null?(r.next=r,Gl(t)):(r.next=s.next,s.next=r),t.interleaved=r,Wt(e,i)}function Wt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Kt=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ep(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,Q&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,Wt(e,r)}return s=i.interleaved,s===null?(t.next=t,Gl(i)):(t.next=s.next,s.next=t),i.interleaved=t,Wt(e,r)}function fs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Ol(e,r)}}function pd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Us(e,t,r,i){var s=e.updateQueue;Kt=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(a!==null){var u=s.baseState;o=0,h=d=c=null,l=a;do{var g=l.lane,j=l.eventTime;if((i&g)===g){h!==null&&(h=h.next={eventTime:j,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=e,k=l;switch(g=t,j=r,k.tag){case 1:if(A=k.payload,typeof A=="function"){u=A.call(j,u,g);break e}u=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,g=typeof A=="function"?A.call(j,u,g):A,g==null)break e;u=le({},u,g);break e;case 2:Kt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else j={eventTime:j,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=j,c=u):h=h.next=j,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(h===null&&(c=u),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Bn|=o,e.lanes=o,e.memoizedState=u}}function fd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(O(191,s));s.call(i)}}}var Ti={},Pt=xn(Ti),xi=xn(Ti),wi=xn(Ti);function Rn(e){if(e===Ti)throw Error(O(174));return e}function ql(e,t){switch(te(wi,t),te(xi,e),te(Pt,Ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jo(t,e)}ie(Pt),te(Pt,t)}function yr(){ie(Pt),ie(xi),ie(wi)}function tp(e){Rn(wi.current);var t=Rn(Pt.current),r=jo(t,e.type);t!==r&&(te(xi,e),te(Pt,r))}function Yl(e){xi.current===e&&(ie(Pt),ie(xi))}var ae=xn(0);function Hs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=[];function Kl(){for(var e=0;e<Ha.length;e++)Ha[e]._workInProgressVersionPrimary=null;Ha.length=0}var ms=Ht.ReactCurrentDispatcher,_a=Ht.ReactCurrentBatchConfig,In=0,oe=null,ye=null,Ae=null,_s=!1,ni=!1,yi=0,Vg=0;function Oe(){throw Error(O(321))}function Xl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kt(e[r],t[r]))return!1;return!0}function Ql(e,t,r,i,s,a){if(In=a,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ms.current=e===null||e.memoizedState===null?Xg:Qg,e=r(i,s),ni){a=0;do{if(ni=!1,yi=0,25<=a)throw Error(O(301));a+=1,Ae=ye=null,t.updateQueue=null,ms.current=Zg,e=r(i,s)}while(ni)}if(ms.current=$s,t=ye!==null&&ye.next!==null,In=0,Ae=ye=oe=null,_s=!1,t)throw Error(O(300));return e}function Zl(){var e=yi!==0;return yi=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?oe.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function pt(){if(ye===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ae===null?oe.memoizedState:Ae.next;if(t!==null)Ae=t,ye=e;else{if(e===null)throw Error(O(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ae===null?oe.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function vi(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=pt(),r=t.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=e;var i=ye,s=i.baseQueue,a=r.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}i.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,i=i.baseState;var l=o=null,c=null,d=a;do{var h=d.lane;if((In&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var u={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=u,o=i):c=c.next=u,oe.lanes|=h,Bn|=h}d=d.next}while(d!==null&&d!==a);c===null?o=i:c.next=l,kt(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=c,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do a=s.lane,oe.lanes|=a,Bn|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ga(e){var t=pt(),r=t.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);kt(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,i]}function np(){}function rp(e,t){var r=oe,i=pt(),s=t(),a=!kt(i.memoizedState,s);if(a&&(i.memoizedState=s,Ge=!0),i=i.queue,Jl(ap.bind(null,r,i,e),[e]),i.getSnapshot!==t||a||Ae!==null&&Ae.memoizedState.tag&1){if(r.flags|=2048,bi(9,sp.bind(null,r,i,s,t),void 0,null),Se===null)throw Error(O(349));In&30||ip(r,t,s)}return s}function ip(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function sp(e,t,r,i){t.value=r,t.getSnapshot=i,op(t)&&lp(e)}function ap(e,t,r){return r(function(){op(t)&&lp(e)})}function op(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kt(e,r)}catch{return!0}}function lp(e){var t=Wt(e,1);t!==null&&At(t,e,1,-1)}function md(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:e},t.queue=e,e=e.dispatch=Kg.bind(null,oe,e),[t.memoizedState,e]}function bi(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function cp(){return pt().memoizedState}function gs(e,t,r,i){var s=Nt();oe.flags|=e,s.memoizedState=bi(1|t,r,void 0,i===void 0?null:i)}function da(e,t,r,i){var s=pt();i=i===void 0?null:i;var a=void 0;if(ye!==null){var o=ye.memoizedState;if(a=o.destroy,i!==null&&Xl(i,o.deps)){s.memoizedState=bi(t,r,a,i);return}}oe.flags|=e,s.memoizedState=bi(1|t,r,a,i)}function gd(e,t){return gs(8390656,8,e,t)}function Jl(e,t){return da(2048,8,e,t)}function dp(e,t){return da(4,2,e,t)}function up(e,t){return da(4,4,e,t)}function hp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pp(e,t,r){return r=r!=null?r.concat([e]):null,da(4,4,hp.bind(null,t,e),r)}function ec(){}function fp(e,t){var r=pt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Xl(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function mp(e,t){var r=pt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Xl(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function gp(e,t,r){return In&21?(kt(r,t)||(r=bh(),oe.lanes|=r,Bn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=r)}function qg(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var i=_a.transition;_a.transition={};try{e(!1),t()}finally{ee=r,_a.transition=i}}function xp(){return pt().memoizedState}function Yg(e,t,r){var i=cn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},wp(e))yp(t,r);else if(r=Jh(e,t,r,i),r!==null){var s=De();At(r,e,i,s),vp(r,t,i)}}function Kg(e,t,r){var i=cn(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(wp(e))yp(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,r);if(s.hasEagerState=!0,s.eagerState=l,kt(l,o)){var c=t.interleaved;c===null?(s.next=s,Gl(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}r=Jh(e,t,s,i),r!==null&&(s=De(),At(r,e,i,s),vp(r,t,i))}}function wp(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function yp(e,t){ni=_s=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function vp(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Ol(e,r)}}var $s={readContext:ht,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Xg={readContext:ht,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:gd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,gs(4194308,4,hp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){return gs(4,2,e,t)},useMemo:function(e,t){var r=Nt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Nt();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Yg.bind(null,oe,e),[i.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:md,useDebugValue:ec,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=md(!1),t=e[0];return e=qg.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=oe,s=Nt();if(se){if(r===void 0)throw Error(O(407));r=r()}else{if(r=t(),Se===null)throw Error(O(349));In&30||ip(i,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,gd(ap.bind(null,i,a,e),[e]),i.flags|=2048,bi(9,sp.bind(null,i,a,r,t),void 0,null),r},useId:function(){var e=Nt(),t=Se.identifierPrefix;if(se){var r=It,i=zt;r=(i&~(1<<32-jt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=yi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Vg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qg={readContext:ht,useCallback:fp,useContext:ht,useEffect:Jl,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:up,useMemo:mp,useReducer:$a,useRef:cp,useState:function(){return $a(vi)},useDebugValue:ec,useDeferredValue:function(e){var t=pt();return gp(t,ye.memoizedState,e)},useTransition:function(){var e=$a(vi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:np,useSyncExternalStore:rp,useId:xp,unstable_isNewReconciler:!1},Zg={readContext:ht,useCallback:fp,useContext:ht,useEffect:Jl,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:up,useMemo:mp,useReducer:Ga,useRef:cp,useState:function(){return Ga(vi)},useDebugValue:ec,useDeferredValue:function(e){var t=pt();return ye===null?t.memoizedState=e:gp(t,ye.memoizedState,e)},useTransition:function(){var e=Ga(vi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:np,useSyncExternalStore:rp,useId:xp,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function _o(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:le({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ua={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=De(),s=cn(e),a=Bt(i,s);a.payload=t,r!=null&&(a.callback=r),t=on(e,a,s),t!==null&&(At(t,e,s,i),fs(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=De(),s=cn(e),a=Bt(i,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=on(e,a,s),t!==null&&(At(t,e,s,i),fs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=De(),i=cn(e),s=Bt(r,i);s.tag=2,t!=null&&(s.callback=t),t=on(e,s,i),t!==null&&(At(t,e,i,r),fs(t,e,i))}};function xd(e,t,r,i,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!pi(r,i)||!pi(s,a):!0}function bp(e,t,r){var i=!1,s=fn,a=t.contextType;return typeof a=="object"&&a!==null?a=ht(a):(s=qe(t)?Mn:Ie.current,i=t.contextTypes,a=(i=i!=null)?gr(e,s):fn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function wd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function $o(e,t,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Vl(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=ht(a):(a=qe(t)?Mn:Ie.current,s.context=gr(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(_o(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ua.enqueueReplaceState(s,s.state,null),Us(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t){try{var r="",i=t;do r+=Em(i),i=i.return;while(i);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Va(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Go(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Jg=typeof WeakMap=="function"?WeakMap:Map;function jp(e,t,r){r=Bt(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Vs||(Vs=!0,tl=i),Go(e,t)},r}function Ap(e,t,r){r=Bt(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;r.payload=function(){return i(s)},r.callback=function(){Go(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Go(e,t),typeof i!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function yd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Jg;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(r)||(s.add(r),e=px.bind(null,e,t,r),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bd(e,t,r,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Bt(-1,1),t.tag=2,on(r,t,1))),r.lanes|=1),e)}var ex=Ht.ReactCurrentOwner,Ge=!1;function Fe(e,t,r,i){t.child=e===null?Zh(t,null,r,i):wr(t,e.child,r,i)}function jd(e,t,r,i,s){r=r.render;var a=t.ref;return pr(t,s),i=Ql(e,t,r,i,a,s),r=Zl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ut(e,t,s)):(se&&r&&Dl(t),t.flags|=1,Fe(e,t,i,s),t.child)}function Ad(e,t,r,i,s){if(e===null){var a=r.type;return typeof a=="function"&&!lc(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,kp(e,t,a,i,s)):(e=vs(r.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:pi,r(o,i)&&e.ref===t.ref)return Ut(e,t,s)}return t.flags|=1,e=dn(a,i),e.ref=t.ref,e.return=t,t.child=e}function kp(e,t,r,i,s){if(e!==null){var a=e.memoizedProps;if(pi(a,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=a,(e.lanes&s)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Ut(e,t,s)}return Vo(e,t,r,i,s)}function Sp(e,t,r){var i=t.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(lr,et),et|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(lr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,te(lr,et),et|=i}else a!==null?(i=a.baseLanes|r,t.memoizedState=null):i=r,te(lr,et),et|=i;return Fe(e,t,s,r),t.child}function Ep(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Vo(e,t,r,i,s){var a=qe(r)?Mn:Ie.current;return a=gr(t,a),pr(t,s),r=Ql(e,t,r,i,a,s),i=Zl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ut(e,t,s)):(se&&i&&Dl(t),t.flags|=1,Fe(e,t,r,s),t.child)}function kd(e,t,r,i,s){if(qe(r)){var a=!0;Is(t)}else a=!1;if(pr(t,s),t.stateNode===null)xs(e,t),bp(t,r,i),$o(t,r,i,s),i=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=ht(d):(d=qe(r)?Mn:Ie.current,d=gr(t,d));var h=r.getDerivedStateFromProps,u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==d)&&wd(t,o,i,d),Kt=!1;var g=t.memoizedState;o.state=g,Us(t,i,o,s),c=t.memoizedState,l!==i||g!==c||Ve.current||Kt?(typeof h=="function"&&(_o(t,r,h,i),c=t.memoizedState),(l=Kt||xd(t,r,l,i,g,c,d))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),o.props=i,o.state=c,o.context=d,i=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,ep(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:wt(t.type,l),o.props=d,u=t.pendingProps,g=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=ht(c):(c=qe(r)?Mn:Ie.current,c=gr(t,c));var j=r.getDerivedStateFromProps;(h=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||g!==c)&&wd(t,o,i,c),Kt=!1,g=t.memoizedState,o.state=g,Us(t,i,o,s);var A=t.memoizedState;l!==u||g!==A||Ve.current||Kt?(typeof j=="function"&&(_o(t,r,j,i),A=t.memoizedState),(d=Kt||xd(t,r,d,i,g,A,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,A,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,A,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=A),o.props=i,o.state=A,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return qo(e,t,r,i,a,s)}function qo(e,t,r,i,s,a){Ep(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return s&&cd(t,r,!1),Ut(e,t,a);i=t.stateNode,ex.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=wr(t,e.child,null,a),t.child=wr(t,null,l,a)):Fe(e,t,l,a),t.memoizedState=i.state,s&&cd(t,r,!0),t.child}function Np(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),ql(e,t.containerInfo)}function Sd(e,t,r,i,s){return xr(),Ul(s),t.flags|=256,Fe(e,t,r,i),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cp(e,t,r){var i=t.pendingProps,s=ae.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),te(ae,s&1),e===null)return Uo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=fa(o,i,0,null),e=Tn(e,i,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ko(r),t.memoizedState=Yo,e):tc(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return tx(e,t,o,i,l,s,r);if(a){a=i.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=c,t.deletions=null):(i=dn(s,c),i.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=dn(l,a):(a=Tn(a,o,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?Ko(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=Yo,i}return a=e.child,e=a.sibling,i=dn(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function tc(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,r,i){return i!==null&&Ul(i),wr(t,e.child,null,r),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tx(e,t,r,i,s,a,o){if(r)return t.flags&256?(t.flags&=-257,i=Va(Error(O(422))),Ji(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,s=t.mode,i=fa({mode:"visible",children:i.children},s,0,null),a=Tn(a,s,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&wr(t,e.child,null,o),t.child.memoizedState=Ko(o),t.memoizedState=Yo,a);if(!(t.mode&1))return Ji(e,t,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(O(419)),i=Va(a,i,void 0),Ji(e,t,o,i)}if(l=(o&e.childLanes)!==0,Ge||l){if(i=Se,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Wt(e,s),At(i,e,s,-1))}return oc(),i=Va(Error(O(421))),Ji(e,t,o,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=fx.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,tt=an(s.nextSibling),nt=t,se=!0,vt=null,e!==null&&(lt[ct++]=zt,lt[ct++]=It,lt[ct++]=zn,zt=e.id,It=e.overflow,zn=t),t=tc(t,i.children),t.flags|=4096,t)}function Ed(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ho(e.return,t,r)}function qa(e,t,r,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=s)}function Rp(e,t,r){var i=t.pendingProps,s=i.revealOrder,a=i.tail;if(Fe(e,t,i.children,r),i=ae.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,r,t);else if(e.tag===19)Ed(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(te(ae,i),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Hs(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),qa(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Hs(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}qa(t,!0,r,null,a);break;case"together":qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,r=dn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=dn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function nx(e,t,r){switch(t.tag){case 3:Np(t),xr();break;case 5:tp(t);break;case 1:qe(t.type)&&Is(t);break;case 4:ql(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;te(Ds,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(te(ae,ae.current&1),t.flags|=128,null):r&t.child.childLanes?Cp(e,t,r):(te(ae,ae.current&1),e=Ut(e,t,r),e!==null?e.sibling:null);te(ae,ae.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return Rp(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(ae,ae.current),i)break;return null;case 22:case 23:return t.lanes=0,Sp(e,t,r)}return Ut(e,t,r)}var Pp,Xo,Op,Tp;Pp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Xo=function(){};Op=function(e,t,r,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,Rn(Pt.current);var a=null;switch(r){case"input":s=wo(e,s),i=wo(e,i),a=[];break;case"select":s=le({},s,{value:void 0}),i=le({},i,{value:void 0}),a=[];break;case"textarea":s=bo(e,s),i=bo(e,i),a=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ms)}Ao(r,i);var o;r=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ai.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in i){var c=i[d];if(l=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(a||(a=[]),a.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ai.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ne("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Tp=function(e,t,r,i){r!==i&&(t.flags|=4)};function Fr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function rx(e,t,r){var i=t.pendingProps;switch(Wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return qe(t.type)&&zs(),Te(t),null;case 3:return i=t.stateNode,yr(),ie(Ve),ie(Ie),Kl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(il(vt),vt=null))),Xo(e,t),Te(t),null;case 5:Yl(t);var s=Rn(wi.current);if(r=t.type,e!==null&&t.stateNode!=null)Op(e,t,r,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(O(166));return Te(t),null}if(e=Rn(Pt.current),Qi(t)){i=t.stateNode,r=t.type;var a=t.memoizedProps;switch(i[Ct]=t,i[gi]=a,e=(t.mode&1)!==0,r){case"dialog":ne("cancel",i),ne("close",i);break;case"iframe":case"object":case"embed":ne("load",i);break;case"video":case"audio":for(s=0;s<Kr.length;s++)ne(Kr[s],i);break;case"source":ne("error",i);break;case"img":case"image":case"link":ne("error",i),ne("load",i);break;case"details":ne("toggle",i);break;case"input":zc(i,a),ne("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},ne("invalid",i);break;case"textarea":Bc(i,a),ne("invalid",i)}Ao(r,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&Xi(i.textContent,l,e),s=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Xi(i.textContent,l,e),s=["children",""+l]):ai.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ne("scroll",i)}switch(r){case"input":Hi(i),Ic(i,a,!0);break;case"textarea":Hi(i),Fc(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Ms)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ah(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(r,{is:i.is}):(e=o.createElement(r),r==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,r),e[Ct]=t,e[gi]=i,Pp(e,t,!1,!1),t.stateNode=e;e:{switch(o=ko(r,i),r){case"dialog":ne("cancel",e),ne("close",e),s=i;break;case"iframe":case"object":case"embed":ne("load",e),s=i;break;case"video":case"audio":for(s=0;s<Kr.length;s++)ne(Kr[s],e);s=i;break;case"source":ne("error",e),s=i;break;case"img":case"image":case"link":ne("error",e),ne("load",e),s=i;break;case"details":ne("toggle",e),s=i;break;case"input":zc(e,i),s=wo(e,i),ne("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=le({},i,{value:void 0}),ne("invalid",e);break;case"textarea":Bc(e,i),s=bo(e,i),ne("invalid",e);break;default:s=i}Ao(r,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?ch(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&oh(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&oi(e,c):typeof c=="number"&&oi(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ai.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ne("scroll",e):c!=null&&Sl(e,a,c,o))}switch(r){case"input":Hi(e),Ic(e,i,!1);break;case"textarea":Hi(e),Fc(e);break;case"option":i.value!=null&&e.setAttribute("value",""+pn(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?cr(e,!!i.multiple,a,!1):i.defaultValue!=null&&cr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ms)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Tp(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(O(166));if(r=Rn(wi.current),Rn(Pt.current),Qi(t)){if(i=t.stateNode,r=t.memoizedProps,i[Ct]=t,(a=i.nodeValue!==r)&&(e=nt,e!==null))switch(e.tag){case 3:Xi(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(i.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ct]=t,t.stateNode=i}return Te(t),null;case 13:if(ie(ae),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&tt!==null&&t.mode&1&&!(t.flags&128))Xh(),xr(),t.flags|=98560,a=!1;else if(a=Qi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(O(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(O(317));a[Ct]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else vt!==null&&(il(vt),vt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ve===0&&(ve=3):oc())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return yr(),Xo(e,t),e===null&&fi(t.stateNode.containerInfo),Te(t),null;case 10:return $l(t.type._context),Te(t),null;case 17:return qe(t.type)&&zs(),Te(t),null;case 19:if(ie(ae),a=t.memoizedState,a===null)return Te(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)Fr(a,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Hs(e),o!==null){for(t.flags|=128,Fr(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)a=r,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return te(ae,ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&he()>br&&(t.flags|=128,i=!0,Fr(a,!1),t.lanes=4194304)}else{if(!i)if(e=Hs(o),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Fr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!se)return Te(t),null}else 2*he()-a.renderingStartTime>br&&r!==1073741824&&(t.flags|=128,i=!0,Fr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=he(),t.sibling=null,r=ae.current,te(ae,i?r&1|2:r&1),t):(Te(t),null);case 22:case 23:return ac(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?et&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function ix(e,t){switch(Wl(t),t.tag){case 1:return qe(t.type)&&zs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),ie(Ve),ie(Ie),Kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yl(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return yr(),null;case 10:return $l(t.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var es=!1,Me=!1,sx=typeof WeakSet=="function"?WeakSet:Set,I=null;function or(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){de(e,t,i)}else r.current=null}function Qo(e,t,r){try{r()}catch(i){de(e,t,i)}}var Nd=!1;function ax(e,t){if(Mo=Os,e=Bh(),Fl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,d=0,h=0,u=e,g=null;t:for(;;){for(var j;u!==r||s!==0&&u.nodeType!==3||(l=o+s),u!==a||i!==0&&u.nodeType!==3||(c=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(j=u.firstChild)!==null;)g=u,u=j;for(;;){if(u===e)break t;if(g===r&&++d===s&&(l=o),g===a&&++h===i&&(c=o),(j=u.nextSibling)!==null)break;u=g,g=u.parentNode}u=j}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(zo={focusedElem:e,selectionRange:r},Os=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,C=A.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:wt(t.type,k),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(y){de(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return A=Nd,Nd=!1,A}function ri(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Qo(t,r,a)}s=s.next}while(s!==i)}}function ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Zo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Lp(e){var t=e.alternate;t!==null&&(e.alternate=null,Lp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[gi],delete t[Fo],delete t[Hg],delete t[_g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mp(e){return e.tag===5||e.tag===3||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jo(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ms));else if(i!==4&&(e=e.child,e!==null))for(Jo(e,t,r),e=e.sibling;e!==null;)Jo(e,t,r),e=e.sibling}function el(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(el(e,t,r),e=e.sibling;e!==null;)el(e,t,r),e=e.sibling}var Ne=null,yt=!1;function Gt(e,t,r){for(r=r.child;r!==null;)zp(e,t,r),r=r.sibling}function zp(e,t,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(ia,r)}catch{}switch(r.tag){case 5:Me||or(r,t);case 6:var i=Ne,s=yt;Ne=null,Gt(e,t,r),Ne=i,yt=s,Ne!==null&&(yt?(e=Ne,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ne.removeChild(r.stateNode));break;case 18:Ne!==null&&(yt?(e=Ne,r=r.stateNode,e.nodeType===8?Wa(e.parentNode,r):e.nodeType===1&&Wa(e,r),ui(e)):Wa(Ne,r.stateNode));break;case 4:i=Ne,s=yt,Ne=r.stateNode.containerInfo,yt=!0,Gt(e,t,r),Ne=i,yt=s;break;case 0:case 11:case 14:case 15:if(!Me&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Qo(r,t,o),s=s.next}while(s!==i)}Gt(e,t,r);break;case 1:if(!Me&&(or(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){de(r,t,l)}Gt(e,t,r);break;case 21:Gt(e,t,r);break;case 22:r.mode&1?(Me=(i=Me)||r.memoizedState!==null,Gt(e,t,r),Me=i):Gt(e,t,r);break;default:Gt(e,t,r)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new sx),t.forEach(function(i){var s=mx.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function xt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,yt=!1;break e;case 3:Ne=l.stateNode.containerInfo,yt=!0;break e;case 4:Ne=l.stateNode.containerInfo,yt=!0;break e}l=l.return}if(Ne===null)throw Error(O(160));zp(a,o,s),Ne=null,yt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){de(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ip(t,e),t=t.sibling}function Ip(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),St(e),i&4){try{ri(3,e,e.return),ha(3,e)}catch(k){de(e,e.return,k)}try{ri(5,e,e.return)}catch(k){de(e,e.return,k)}}break;case 1:xt(t,e),St(e),i&512&&r!==null&&or(r,r.return);break;case 5:if(xt(t,e),St(e),i&512&&r!==null&&or(r,r.return),e.flags&32){var s=e.stateNode;try{oi(s,"")}catch(k){de(e,e.return,k)}}if(i&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&ih(s,a),ko(l,o);var d=ko(l,a);for(o=0;o<c.length;o+=2){var h=c[o],u=c[o+1];h==="style"?ch(s,u):h==="dangerouslySetInnerHTML"?oh(s,u):h==="children"?oi(s,u):Sl(s,h,u,d)}switch(l){case"input":yo(s,a);break;case"textarea":sh(s,a);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var j=a.value;j!=null?cr(s,!!a.multiple,j,!1):g!==!!a.multiple&&(a.defaultValue!=null?cr(s,!!a.multiple,a.defaultValue,!0):cr(s,!!a.multiple,a.multiple?[]:"",!1))}s[gi]=a}catch(k){de(e,e.return,k)}}break;case 6:if(xt(t,e),St(e),i&4){if(e.stateNode===null)throw Error(O(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(k){de(e,e.return,k)}}break;case 3:if(xt(t,e),St(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(k){de(e,e.return,k)}break;case 4:xt(t,e),St(e);break;case 13:xt(t,e),St(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(ic=he())),i&4&&Rd(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(Me=(d=Me)||h,xt(t,e),Me=d):xt(t,e),St(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(u=I=h;I!==null;){switch(g=I,j=g.child,g.tag){case 0:case 11:case 14:case 15:ri(4,g,g.return);break;case 1:or(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){i=g,r=g.return;try{t=i,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(k){de(i,r,k)}}break;case 5:or(g,g.return);break;case 22:if(g.memoizedState!==null){Od(u);continue}}j!==null?(j.return=g,I=j):Od(u)}h=h.sibling}e:for(h=null,u=e;;){if(u.tag===5){if(h===null){h=u;try{s=u.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=u.stateNode,c=u.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=lh("display",o))}catch(k){de(e,e.return,k)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(k){de(e,e.return,k)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:xt(t,e),St(e),i&4&&Rd(e);break;case 21:break;default:xt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Mp(r)){var i=r;break e}r=r.return}throw Error(O(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(oi(s,""),i.flags&=-33);var a=Cd(e);el(e,a,s);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Cd(e);Jo(e,l,o);break;default:throw Error(O(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ox(e,t,r){I=e,Bp(e)}function Bp(e,t,r){for(var i=(e.mode&1)!==0;I!==null;){var s=I,a=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||es;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Me;l=es;var d=Me;if(es=o,(Me=c)&&!d)for(I=s;I!==null;)o=I,c=o.child,o.tag===22&&o.memoizedState!==null?Td(s):c!==null?(c.return=o,I=c):Td(s);for(;a!==null;)I=a,Bp(a),a=a.sibling;I=s,es=l,Me=d}Pd(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,I=a):Pd(e)}}function Pd(e){for(;I!==null;){var t=I;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||ha(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Me)if(r===null)i.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:wt(t.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&fd(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}fd(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&ui(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Me||t.flags&512&&Zo(t)}catch(g){de(t,t.return,g)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function Od(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function Td(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ha(4,t)}catch(c){de(t,r,c)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(c){de(t,s,c)}}var a=t.return;try{Zo(t)}catch(c){de(t,a,c)}break;case 5:var o=t.return;try{Zo(t)}catch(c){de(t,o,c)}}}catch(c){de(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var lx=Math.ceil,Gs=Ht.ReactCurrentDispatcher,nc=Ht.ReactCurrentOwner,ut=Ht.ReactCurrentBatchConfig,Q=0,Se=null,me=null,Re=0,et=0,lr=xn(0),ve=0,ji=null,Bn=0,pa=0,rc=0,ii=null,$e=null,ic=0,br=1/0,Lt=null,Vs=!1,tl=null,ln=null,ts=!1,Jt=null,qs=0,si=0,nl=null,ws=-1,ys=0;function De(){return Q&6?he():ws!==-1?ws:ws=he()}function cn(e){return e.mode&1?Q&2&&Re!==0?Re&-Re:Gg.transition!==null?(ys===0&&(ys=bh()),ys):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Ch(e.type)),e):1}function At(e,t,r,i){if(50<si)throw si=0,nl=null,Error(O(185));Ri(e,r,i),(!(Q&2)||e!==Se)&&(e===Se&&(!(Q&2)&&(pa|=r),ve===4&&Qt(e,Re)),Ye(e,i),r===1&&Q===0&&!(t.mode&1)&&(br=he()+500,ca&&wn()))}function Ye(e,t){var r=e.callbackNode;Gm(e,t);var i=Ps(e,e===Se?Re:0);if(i===0)r!==null&&Uc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Uc(r),t===1)e.tag===0?$g(Ld.bind(null,e)):qh(Ld.bind(null,e)),Wg(function(){!(Q&6)&&wn()}),r=null;else{switch(jh(i)){case 1:r=Pl;break;case 4:r=yh;break;case 16:r=Rs;break;case 536870912:r=vh;break;default:r=Rs}r=Gp(r,Fp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Fp(e,t){if(ws=-1,ys=0,Q&6)throw Error(O(327));var r=e.callbackNode;if(fr()&&e.callbackNode!==r)return null;var i=Ps(e,e===Se?Re:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Ys(e,i);else{t=i;var s=Q;Q|=2;var a=Wp();(Se!==e||Re!==t)&&(Lt=null,br=he()+500,On(e,t));do try{ux();break}catch(l){Dp(e,l)}while(!0);_l(),Gs.current=a,Q=s,me!==null?t=0:(Se=null,Re=0,t=ve)}if(t!==0){if(t===2&&(s=Ro(e),s!==0&&(i=s,t=rl(e,s))),t===1)throw r=ji,On(e,0),Qt(e,i),Ye(e,he()),r;if(t===6)Qt(e,i);else{if(s=e.current.alternate,!(i&30)&&!cx(s)&&(t=Ys(e,i),t===2&&(a=Ro(e),a!==0&&(i=a,t=rl(e,a))),t===1))throw r=ji,On(e,0),Qt(e,i),Ye(e,he()),r;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(O(345));case 2:Sn(e,$e,Lt);break;case 3:if(Qt(e,i),(i&130023424)===i&&(t=ic+500-he(),10<t)){if(Ps(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){De(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Bo(Sn.bind(null,e,$e,Lt),t);break}Sn(e,$e,Lt);break;case 4:if(Qt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var o=31-jt(i);a=1<<o,o=t[o],o>s&&(s=o),i&=~a}if(i=s,i=he()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lx(i/1960))-i,10<i){e.timeoutHandle=Bo(Sn.bind(null,e,$e,Lt),i);break}Sn(e,$e,Lt);break;case 5:Sn(e,$e,Lt);break;default:throw Error(O(329))}}}return Ye(e,he()),e.callbackNode===r?Fp.bind(null,e):null}function rl(e,t){var r=ii;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Ys(e,t),e!==2&&(t=$e,$e=r,t!==null&&il(t)),e}function il(e){$e===null?$e=e:$e.push.apply($e,e)}function cx(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],a=s.getSnapshot;s=s.value;try{if(!kt(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~rc,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jt(t),i=1<<r;e[r]=-1,t&=~i}}function Ld(e){if(Q&6)throw Error(O(327));fr();var t=Ps(e,0);if(!(t&1))return Ye(e,he()),null;var r=Ys(e,t);if(e.tag!==0&&r===2){var i=Ro(e);i!==0&&(t=i,r=rl(e,i))}if(r===1)throw r=ji,On(e,0),Qt(e,t),Ye(e,he()),r;if(r===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,$e,Lt),Ye(e,he()),null}function sc(e,t){var r=Q;Q|=1;try{return e(t)}finally{Q=r,Q===0&&(br=he()+500,ca&&wn())}}function Fn(e){Jt!==null&&Jt.tag===0&&!(Q&6)&&fr();var t=Q;Q|=1;var r=ut.transition,i=ee;try{if(ut.transition=null,ee=1,e)return e()}finally{ee=i,ut.transition=r,Q=t,!(Q&6)&&wn()}}function ac(){et=lr.current,ie(lr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Dg(r)),me!==null)for(r=me.return;r!==null;){var i=r;switch(Wl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zs();break;case 3:yr(),ie(Ve),ie(Ie),Kl();break;case 5:Yl(i);break;case 4:yr();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:$l(i.type._context);break;case 22:case 23:ac()}r=r.return}if(Se=e,me=e=dn(e.current,null),Re=et=t,ve=0,ji=null,rc=pa=Bn=0,$e=ii=null,Cn!==null){for(t=0;t<Cn.length;t++)if(r=Cn[t],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=s,i.next=o}r.pending=i}Cn=null}return e}function Dp(e,t){do{var r=me;try{if(_l(),ms.current=$s,_s){for(var i=oe.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}_s=!1}if(In=0,Ae=ye=oe=null,ni=!1,yi=0,nc.current=null,r===null||r.return===null){ve=1,ji=t,me=null;break}e:{var a=e,o=r.return,l=r,c=t;if(t=Re,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var j=vd(o);if(j!==null){j.flags&=-257,bd(j,o,l,a,t),j.mode&1&&yd(a,d,t),t=j,c=d;var A=t.updateQueue;if(A===null){var k=new Set;k.add(c),t.updateQueue=k}else A.add(c);break e}else{if(!(t&1)){yd(a,d,t),oc();break e}c=Error(O(426))}}else if(se&&l.mode&1){var C=vd(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),bd(C,o,l,a,t),Ul(vr(c,l));break e}}a=c=vr(c,l),ve!==4&&(ve=2),ii===null?ii=[a]:ii.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=jp(a,c,t);pd(a,p);break e;case 1:l=c;var f=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ln===null||!ln.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=Ap(a,l,t);pd(a,y);break e}}a=a.return}while(a!==null)}Hp(r)}catch(S){t=S,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function Wp(){var e=Gs.current;return Gs.current=$s,e===null?$s:e}function oc(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(Bn&268435455)&&!(pa&268435455)||Qt(Se,Re)}function Ys(e,t){var r=Q;Q|=2;var i=Wp();(Se!==e||Re!==t)&&(Lt=null,On(e,t));do try{dx();break}catch(s){Dp(e,s)}while(!0);if(_l(),Q=r,Gs.current=i,me!==null)throw Error(O(261));return Se=null,Re=0,ve}function dx(){for(;me!==null;)Up(me)}function ux(){for(;me!==null&&!Im();)Up(me)}function Up(e){var t=$p(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Hp(e):me=t,nc.current=null}function Hp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=ix(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(r=rx(r,t,et),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function Sn(e,t,r){var i=ee,s=ut.transition;try{ut.transition=null,ee=1,hx(e,t,r,i)}finally{ut.transition=s,ee=i}return null}function hx(e,t,r,i){do fr();while(Jt!==null);if(Q&6)throw Error(O(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Vm(e,a),e===Se&&(me=Se=null,Re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ts||(ts=!0,Gp(Rs,function(){return fr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=ut.transition,ut.transition=null;var o=ee;ee=1;var l=Q;Q|=4,nc.current=null,ax(e,r),Ip(r,e),Tg(zo),Os=!!Mo,zo=Mo=null,e.current=r,ox(r),Bm(),Q=l,ee=o,ut.transition=a}else e.current=r;if(ts&&(ts=!1,Jt=e,qs=s),a=e.pendingLanes,a===0&&(ln=null),Wm(r.stateNode),Ye(e,he()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(Vs)throw Vs=!1,e=tl,tl=null,e;return qs&1&&e.tag!==0&&fr(),a=e.pendingLanes,a&1?e===nl?si++:(si=0,nl=e):si=0,wn(),null}function fr(){if(Jt!==null){var e=jh(qs),t=ut.transition,r=ee;try{if(ut.transition=null,ee=16>e?16:e,Jt===null)var i=!1;else{if(e=Jt,Jt=null,qs=0,Q&6)throw Error(O(331));var s=Q;for(Q|=4,I=e.current;I!==null;){var a=I,o=a.child;if(I.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(I=d;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:ri(8,h,a)}var u=h.child;if(u!==null)u.return=h,I=u;else for(;I!==null;){h=I;var g=h.sibling,j=h.return;if(Lp(h),h===d){I=null;break}if(g!==null){g.return=j,I=g;break}I=j}}}var A=a.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}I=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,I=o;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ri(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,I=p;break e}I=a.return}}var f=e.current;for(I=f;I!==null;){o=I;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,I=m;else e:for(o=f;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ha(9,l)}}catch(S){de(l,l.return,S)}if(l===o){I=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,I=y;break e}I=l.return}}if(Q=s,wn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(ia,e)}catch{}i=!0}return i}finally{ee=r,ut.transition=t}}return!1}function Md(e,t,r){t=vr(r,t),t=jp(e,t,1),e=on(e,t,1),t=De(),e!==null&&(Ri(e,1,t),Ye(e,t))}function de(e,t,r){if(e.tag===3)Md(e,e,r);else for(;t!==null;){if(t.tag===3){Md(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ln===null||!ln.has(i))){e=vr(r,e),e=Ap(t,e,1),t=on(t,e,1),e=De(),t!==null&&(Ri(t,1,e),Ye(t,e));break}}t=t.return}}function px(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&r,Se===e&&(Re&r)===r&&(ve===4||ve===3&&(Re&130023424)===Re&&500>he()-ic?On(e,0):rc|=r),Ye(e,t)}function _p(e,t){t===0&&(e.mode&1?(t=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):t=1);var r=De();e=Wt(e,t),e!==null&&(Ri(e,t,r),Ye(e,r))}function fx(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),_p(e,r)}function mx(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(O(314))}i!==null&&i.delete(t),_p(e,r)}var $p;$p=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Ge=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ge=!1,nx(e,t,r);Ge=!!(e.flags&131072)}else Ge=!1,se&&t.flags&1048576&&Yh(t,Fs,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;xs(e,t),e=t.pendingProps;var s=gr(t,Ie.current);pr(t,r),s=Ql(null,t,i,e,s,r);var a=Zl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(i)?(a=!0,Is(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Vl(t),s.updater=ua,t.stateNode=s,s._reactInternals=t,$o(t,i,e,r),t=qo(null,t,i,!0,a,r)):(t.tag=0,se&&a&&Dl(t),Fe(null,t,s,r),t=t.child),t;case 16:i=t.elementType;e:{switch(xs(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=xx(i),e=wt(i,e),s){case 0:t=Vo(null,t,i,e,r);break e;case 1:t=kd(null,t,i,e,r);break e;case 11:t=jd(null,t,i,e,r);break e;case 14:t=Ad(null,t,i,wt(i.type,e),r);break e}throw Error(O(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:wt(i,s),Vo(e,t,i,s,r);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:wt(i,s),kd(e,t,i,s,r);case 3:e:{if(Np(t),e===null)throw Error(O(387));i=t.pendingProps,a=t.memoizedState,s=a.element,ep(e,t),Us(t,i,null,r);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=vr(Error(O(423)),t),t=Sd(e,t,i,r,s);break e}else if(i!==s){s=vr(Error(O(424)),t),t=Sd(e,t,i,r,s);break e}else for(tt=an(t.stateNode.containerInfo.firstChild),nt=t,se=!0,vt=null,r=Zh(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(xr(),i===s){t=Ut(e,t,r);break e}Fe(e,t,i,r)}t=t.child}return t;case 5:return tp(t),e===null&&Uo(t),i=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,Io(i,s)?o=null:a!==null&&Io(i,a)&&(t.flags|=32),Ep(e,t),Fe(e,t,o,r),t.child;case 6:return e===null&&Uo(t),null;case 13:return Cp(e,t,r);case 4:return ql(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=wr(t,null,i,r):Fe(e,t,i,r),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:wt(i,s),jd(e,t,i,s,r);case 7:return Fe(e,t,t.pendingProps,r),t.child;case 8:return Fe(e,t,t.pendingProps.children,r),t.child;case 12:return Fe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,te(Ds,i._currentValue),i._currentValue=o,a!==null)if(kt(a.value,o)){if(a.children===s.children&&!Ve.current){t=Ut(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=Bt(-1,r&-r),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Ho(a.return,r,t),l.lanes|=r;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(O(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Ho(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Fe(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,pr(t,r),s=ht(s),i=i(s),t.flags|=1,Fe(e,t,i,r),t.child;case 14:return i=t.type,s=wt(i,t.pendingProps),s=wt(i.type,s),Ad(e,t,i,s,r);case 15:return kp(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:wt(i,s),xs(e,t),t.tag=1,qe(i)?(e=!0,Is(t)):e=!1,pr(t,r),bp(t,i,s),$o(t,i,s,r),qo(null,t,i,!0,e,r);case 19:return Rp(e,t,r);case 22:return Sp(e,t,r)}throw Error(O(156,t.tag))};function Gp(e,t){return wh(e,t)}function gx(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,r,i){return new gx(e,t,r,i)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xx(e){if(typeof e=="function")return lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nl)return 11;if(e===Cl)return 14}return 2}function dn(e,t){var r=e.alternate;return r===null?(r=dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function vs(e,t,r,i,s,a){var o=2;if(i=e,typeof e=="function")lc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zn:return Tn(r.children,s,a,t);case El:o=8,s|=8;break;case fo:return e=dt(12,r,t,s|2),e.elementType=fo,e.lanes=a,e;case mo:return e=dt(13,r,t,s),e.elementType=mo,e.lanes=a,e;case go:return e=dt(19,r,t,s),e.elementType=go,e.lanes=a,e;case th:return fa(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ju:o=10;break e;case eh:o=9;break e;case Nl:o=11;break e;case Cl:o=14;break e;case Yt:o=16,i=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=dt(o,r,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Tn(e,t,r,i){return e=dt(7,e,i,t),e.lanes=r,e}function fa(e,t,r,i){return e=dt(22,e,i,t),e.elementType=th,e.lanes=r,e.stateNode={isHidden:!1},e}function Ya(e,t,r){return e=dt(6,e,null,t),e.lanes=r,e}function Ka(e,t,r){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wx(e,t,r,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function cc(e,t,r,i,s,a,o,l,c){return e=new wx(e,t,r,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=dt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(a),e}function yx(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Vp(e){if(!e)return fn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var r=e.type;if(qe(r))return Vh(e,r,t)}return t}function qp(e,t,r,i,s,a,o,l,c){return e=cc(r,i,!0,e,s,a,o,l,c),e.context=Vp(null),r=e.current,i=De(),s=cn(r),a=Bt(i,s),a.callback=t??null,on(r,a,s),e.current.lanes=s,Ri(e,s,i),Ye(e,i),e}function ma(e,t,r,i){var s=t.current,a=De(),o=cn(s);return r=Vp(r),t.context===null?t.context=r:t.pendingContext=r,t=Bt(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=on(s,t,o),e!==null&&(At(e,s,o,a),fs(e,s,o)),o}function Ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function dc(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function vx(){return null}var Yp=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}ga.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));ma(e,t,null,null)};ga.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){ma(null,e,null,null)}),t[Dt]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xt.length&&t!==0&&t<Xt[r].priority;r++);Xt.splice(r,0,e),r===0&&Nh(e)}};function hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function bx(e,t,r,i,s){if(s){if(typeof i=="function"){var a=i;i=function(){var d=Ks(o);a.call(d)}}var o=qp(t,i,e,0,null,!1,!1,"",Id);return e._reactRootContainer=o,e[Dt]=o.current,fi(e.nodeType===8?e.parentNode:e),Fn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var l=i;i=function(){var d=Ks(c);l.call(d)}}var c=cc(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=c,e[Dt]=c.current,fi(e.nodeType===8?e.parentNode:e),Fn(function(){ma(t,c,r,i)}),c}function wa(e,t,r,i,s){var a=r._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=Ks(o);l.call(c)}}ma(t,o,e,s)}else o=bx(r,t,e,s,i);return Ks(o)}Ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Yr(t.pendingLanes);r!==0&&(Ol(t,r|1),Ye(t,he()),!(Q&6)&&(br=he()+500,wn()))}break;case 13:Fn(function(){var i=Wt(e,1);if(i!==null){var s=De();At(i,e,1,s)}}),dc(e,1)}};Tl=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var r=De();At(t,e,134217728,r)}dc(e,134217728)}};kh=function(e){if(e.tag===13){var t=cn(e),r=Wt(e,t);if(r!==null){var i=De();At(r,e,t,i)}dc(e,t)}};Sh=function(){return ee};Eh=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};Eo=function(e,t,r){switch(t){case"input":if(yo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var s=la(i);if(!s)throw Error(O(90));rh(i),yo(i,s)}}}break;case"textarea":sh(e,r);break;case"select":t=r.value,t!=null&&cr(e,!!r.multiple,t,!1)}};hh=sc;ph=Fn;var jx={usingClientEntryPoint:!1,Events:[Oi,nr,la,dh,uh,sc]},Dr={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ax={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gh(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||vx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{ia=ns.inject(Ax),Rt=ns}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;it.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(t))throw Error(O(200));return yx(e,t,null,r)};it.createRoot=function(e,t){if(!hc(e))throw Error(O(299));var r=!1,i="",s=Yp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=cc(e,1,!1,null,null,r,!1,i,s),e[Dt]=t.current,fi(e.nodeType===8?e.parentNode:e),new uc(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=gh(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Fn(e)};it.hydrate=function(e,t,r){if(!xa(t))throw Error(O(200));return wa(null,e,t,!0,r)};it.hydrateRoot=function(e,t,r){if(!hc(e))throw Error(O(405));var i=r!=null&&r.hydratedSources||null,s=!1,a="",o=Yp;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=qp(t,null,e,1,r??null,s,!1,a,o),e[Dt]=t.current,fi(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new ga(t)};it.render=function(e,t,r){if(!xa(t))throw Error(O(200));return wa(null,e,t,!1,r)};it.unmountComponentAtNode=function(e){if(!xa(e))throw Error(O(40));return e._reactRootContainer?(Fn(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};it.unstable_batchedUpdates=sc;it.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!xa(r))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return wa(e,t,r,!1,i)};it.version="18.3.1-next-f1338f8080-20240426";function Kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp)}catch(e){console.error(e)}}Kp(),Ku.exports=it;var kx=Ku.exports,Bd=kx;ho.createRoot=Bd.createRoot,ho.hydrateRoot=Bd.hydrateRoot;const Sx="modulepreload",Ex=function(e){return"/"+e},Fd={},Nx=function(t,r,i){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(r.map(c=>{if(c=Ex(c),c in Fd)return;Fd[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Sx,d||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),d)return new Promise((g,j)=>{u.addEventListener("load",g),u.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ai.apply(null,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));const Dd="popstate";function Cx(e){e===void 0&&(e={});function t(i,s){let{pathname:a,search:o,hash:l}=i.location;return sl("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:Xs(s)}return Px(t,r,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rx(){return Math.random().toString(36).substr(2,8)}function Wd(e,t){return{usr:e.state,key:e.key,idx:t}}function sl(e,t,r,i){return r===void 0&&(r=null),Ai({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nr(t):t,{state:r,key:t&&t.key||i||Rx()})}function Xs(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Nr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function Px(e,t,r,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,o=s.history,l=en.Pop,c=null,d=h();d==null&&(d=0,o.replaceState(Ai({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function u(){l=en.Pop;let C=h(),p=C==null?null:C-d;d=C,c&&c({action:l,location:k.location,delta:p})}function g(C,p){l=en.Push;let f=sl(k.location,C,p);d=h()+1;let m=Wd(f,d),y=k.createHref(f);try{o.pushState(m,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(y)}a&&c&&c({action:l,location:k.location,delta:1})}function j(C,p){l=en.Replace;let f=sl(k.location,C,p);d=h();let m=Wd(f,d),y=k.createHref(f);o.replaceState(m,"",y),a&&c&&c({action:l,location:k.location,delta:0})}function A(C){let p=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof C=="string"?C:Xs(C);return f=f.replace(/ $/,"%20"),pe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let k={get action(){return l},get location(){return e(s,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Dd,u),c=C,()=>{s.removeEventListener(Dd,u),c=null}},createHref(C){return t(s,C)},createURL:A,encodeLocation(C){let p=A(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:j,go(C){return o.go(C)}};return k}var Ud;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ud||(Ud={}));function Ox(e,t,r){return r===void 0&&(r="/"),Tx(e,t,r)}function Tx(e,t,r,i){let s=typeof t=="string"?Nr(t):t,a=pc(s.pathname||"/",r);if(a==null)return null;let o=Qp(e);Lx(o);let l=null,c=Gx(a);for(let d=0;l==null&&d<o.length;++d)l=Hx(o[d],c);return l}function Qp(e,t,r,i){t===void 0&&(t=[]),r===void 0&&(r=[]),i===void 0&&(i="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let d=un([i,c.relativePath]),h=r.concat(c);a.children&&a.children.length>0&&(pe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Qp(a.children,t,h,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Wx(d,a.index),routesMeta:h})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of Zp(a.path))s(a,o,c)}),t}function Zp(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,s=r.endsWith("?"),a=r.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let o=Zp(i.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Lx(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ux(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const Mx=/^:[\w-]+$/,zx=3,Ix=2,Bx=1,Fx=10,Dx=-2,Hd=e=>e==="*";function Wx(e,t){let r=e.split("/"),i=r.length;return r.some(Hd)&&(i+=Dx),t&&(i+=Ix),r.filter(s=>!Hd(s)).reduce((s,a)=>s+(Mx.test(a)?zx:a===""?Bx:Fx),i)}function Ux(e,t){return e.length===t.length&&e.slice(0,-1).every((i,s)=>i===t[s])?e[e.length-1]-t[t.length-1]:0}function Hx(e,t,r){let{routesMeta:i}=e,s={},a="/",o=[];for(let l=0;l<i.length;++l){let c=i[l],d=l===i.length-1,h=a==="/"?t:t.slice(a.length)||"/",u=_x({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h),g=c.route;if(!u)return null;Object.assign(s,u.params),o.push({params:s,pathname:un([a,u.pathname]),pathnameBase:Yx(un([a,u.pathnameBase])),route:g}),u.pathnameBase!=="/"&&(a=un([a,u.pathnameBase]))}return o}function _x(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=$x(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:i.reduce((d,h,u)=>{let{paramName:g,isOptional:j}=h;if(g==="*"){let k=l[u]||"";o=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const A=l[u];return j&&!A?d[g]=void 0:d[g]=(A||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function $x(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Xp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function Gx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function Vx(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:s=""}=typeof e=="string"?Nr(e):e,a;return r?(r=Jp(r),r.startsWith("/")?a=_d(r.substring(1),"/"):a=_d(r,t)):a=t,{pathname:a,search:Kx(i),hash:Xx(s)}}function _d(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Xa(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qx(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function fc(e,t){let r=qx(e);return t?r.map((i,s)=>s===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function mc(e,t,r,i){i===void 0&&(i=!1);let s;typeof e=="string"?s=Nr(e):(s=Ai({},e),pe(!s.pathname||!s.pathname.includes("?"),Xa("?","pathname","search",s)),pe(!s.pathname||!s.pathname.includes("#"),Xa("#","pathname","hash",s)),pe(!s.search||!s.search.includes("#"),Xa("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=r;else{let u=t.length-1;if(!i&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),u-=1;s.pathname=g.join("/")}l=u>=0?t[u]:"/"}let c=Vx(s,l),d=o&&o!=="/"&&o.endsWith("/"),h=(a||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const Jp=e=>e.replace(/\/\/+/g,"/"),un=e=>Jp(e.join("/")),Yx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ef=["post","put","patch","delete"];new Set(ef);const Zx=["get",...ef];new Set(Zx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ki.apply(null,arguments)}const gc=b.createContext(null),Jx=b.createContext(null),yn=b.createContext(null),ya=b.createContext(null),_t=b.createContext({outlet:null,matches:[],isDataRoute:!1}),tf=b.createContext(null);function e1(e,t){let{relative:r}=t===void 0?{}:t;Cr()||pe(!1);let{basename:i,navigator:s}=b.useContext(yn),{hash:a,pathname:o,search:l}=rf(e,{relative:r}),c=o;return i!=="/"&&(c=o==="/"?i:un([i,o])),s.createHref({pathname:c,search:l,hash:a})}function Cr(){return b.useContext(ya)!=null}function Gn(){return Cr()||pe(!1),b.useContext(ya).location}function nf(e){b.useContext(yn).static||b.useLayoutEffect(e)}function $t(){let{isDataRoute:e}=b.useContext(_t);return e?p1():t1()}function t1(){Cr()||pe(!1);let e=b.useContext(gc),{basename:t,future:r,navigator:i}=b.useContext(yn),{matches:s}=b.useContext(_t),{pathname:a}=Gn(),o=JSON.stringify(fc(s,r.v7_relativeSplatPath)),l=b.useRef(!1);return nf(()=>{l.current=!0}),b.useCallback(function(d,h){if(h===void 0&&(h={}),!l.current)return;if(typeof d=="number"){i.go(d);return}let u=mc(d,JSON.parse(o),a,h.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:un([t,u.pathname])),(h.replace?i.replace:i.push)(u,h.state,h)},[t,i,o,a,e])}function Li(){let{matches:e}=b.useContext(_t),t=e[e.length-1];return t?t.params:{}}function rf(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=b.useContext(yn),{matches:s}=b.useContext(_t),{pathname:a}=Gn(),o=JSON.stringify(fc(s,i.v7_relativeSplatPath));return b.useMemo(()=>mc(e,JSON.parse(o),a,r==="path"),[e,o,a,r])}function n1(e,t){return r1(e,t)}function r1(e,t,r,i){Cr()||pe(!1);let{navigator:s}=b.useContext(yn),{matches:a}=b.useContext(_t),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Gn(),h;if(t){var u;let C=typeof t=="string"?Nr(t):t;c==="/"||(u=C.pathname)!=null&&u.startsWith(c)||pe(!1),h=C}else h=d;let g=h.pathname||"/",j=g;if(c!=="/"){let C=c.replace(/^\//,"").split("/");j="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let A=Ox(e,{pathname:j}),k=l1(A&&A.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:un([c,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:un([c,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,r,i);return t&&k?b.createElement(ya.Provider,{value:{location:ki({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:en.Pop}},k):k}function i1(){let e=h1(),t=Qx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:s},r):null,null)}const s1=b.createElement(i1,null);class a1 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?b.createElement(_t.Provider,{value:this.props.routeContext},b.createElement(tf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function o1(e){let{routeContext:t,match:r,children:i}=e,s=b.useContext(gc);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(_t.Provider,{value:t},i)}function l1(e,t,r,i){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(s=r)==null?void 0:s.errors;if(l!=null){let h=o.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);h>=0||pe(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let h=0;h<o.length;h++){let u=o[h];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=h),u.route.id){let{loaderData:g,errors:j}=r,A=u.route.loader&&g[u.route.id]===void 0&&(!j||j[u.route.id]===void 0);if(u.route.lazy||A){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,u,g)=>{let j,A=!1,k=null,C=null;r&&(j=l&&u.route.id?l[u.route.id]:void 0,k=u.route.errorElement||s1,c&&(d<0&&g===0?(f1("route-fallback"),A=!0,C=null):d===g&&(A=!0,C=u.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),f=()=>{let m;return j?m=k:A?m=C:u.route.Component?m=b.createElement(u.route.Component,null):u.route.element?m=u.route.element:m=h,b.createElement(o1,{match:u,routeContext:{outlet:h,matches:p,isDataRoute:r!=null},children:m})};return r&&(u.route.ErrorBoundary||u.route.errorElement||g===0)?b.createElement(a1,{location:r.location,revalidation:r.revalidation,component:k,error:j,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var sf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sf||{}),af=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(af||{});function c1(e){let t=b.useContext(gc);return t||pe(!1),t}function d1(e){let t=b.useContext(Jx);return t||pe(!1),t}function u1(e){let t=b.useContext(_t);return t||pe(!1),t}function of(e){let t=u1(),r=t.matches[t.matches.length-1];return r.route.id||pe(!1),r.route.id}function h1(){var e;let t=b.useContext(tf),r=d1(),i=of();return t!==void 0?t:(e=r.errors)==null?void 0:e[i]}function p1(){let{router:e}=c1(sf.UseNavigateStable),t=of(af.UseNavigateStable),r=b.useRef(!1);return nf(()=>{r.current=!0}),b.useCallback(function(s,a){a===void 0&&(a={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,ki({fromRouteId:t},a)))},[e,t])}const $d={};function f1(e,t,r){$d[e]||($d[e]=!0)}function m1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jr(e){let{to:t,replace:r,state:i,relative:s}=e;Cr()||pe(!1);let{future:a,static:o}=b.useContext(yn),{matches:l}=b.useContext(_t),{pathname:c}=Gn(),d=$t(),h=mc(t,fc(l,a.v7_relativeSplatPath),c,s==="path"),u=JSON.stringify(h);return b.useEffect(()=>d(JSON.parse(u),{replace:r,state:i,relative:s}),[d,u,s,r,i]),null}function re(e){pe(!1)}function g1(e){let{basename:t="/",children:r=null,location:i,navigationType:s=en.Pop,navigator:a,static:o=!1,future:l}=e;Cr()&&pe(!1);let c=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:a,static:o,future:ki({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof i=="string"&&(i=Nr(i));let{pathname:h="/",search:u="",hash:g="",state:j=null,key:A="default"}=i,k=b.useMemo(()=>{let C=pc(h,c);return C==null?null:{location:{pathname:C,search:u,hash:g,state:j,key:A},navigationType:s}},[c,h,u,g,j,A,s]);return k==null?null:b.createElement(yn.Provider,{value:d},b.createElement(ya.Provider,{children:r,value:k}))}function x1(e){let{children:t,location:r}=e;return n1(al(t),r)}new Promise(()=>{});function al(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(i,s)=>{if(!b.isValidElement(i))return;let a=[...t,s];if(i.type===b.Fragment){r.push.apply(r,al(i.props.children,a));return}i.type!==re&&pe(!1),!i.props.index||!i.props.children||pe(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=al(i.props.children,a)),r.push(o)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ol.apply(null,arguments)}function w1(e,t){if(e==null)return{};var r={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;r[i]=e[i]}return r}function y1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function v1(e,t){return e.button===0&&(!t||t==="_self")&&!y1(e)}function ll(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let i=e[r];return t.concat(Array.isArray(i)?i.map(s=>[r,s]):[[r,i]])},[]))}function b1(e,t){let r=ll(e);return t&&t.forEach((i,s)=>{r.has(s)||t.getAll(s).forEach(a=>{r.append(s,a)})}),r}const j1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],A1="6";try{window.__reactRouterVersion=A1}catch{}const k1="startTransition",Gd=pm[k1];function S1(e){let{basename:t,children:r,future:i,window:s}=e,a=b.useRef();a.current==null&&(a.current=Cx({window:s,v5Compat:!0}));let o=a.current,[l,c]=b.useState({action:o.action,location:o.location}),{v7_startTransition:d}=i||{},h=b.useCallback(u=>{d&&Gd?Gd(()=>c(u)):c(u)},[c,d]);return b.useLayoutEffect(()=>o.listen(h),[o,h]),b.useEffect(()=>m1(i),[i]),b.createElement(g1,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:i})}const E1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F=b.forwardRef(function(t,r){let{onClick:i,relative:s,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:h,viewTransition:u}=t,g=w1(t,j1),{basename:j}=b.useContext(yn),A,k=!1;if(typeof d=="string"&&N1.test(d)&&(A=d,E1))try{let m=new URL(window.location.href),y=d.startsWith("//")?new URL(m.protocol+d):new URL(d),S=pc(y.pathname,j);y.origin===m.origin&&S!=null?d=S+y.search+y.hash:k=!0}catch{}let C=e1(d,{relative:s}),p=C1(d,{replace:o,state:l,target:c,preventScrollReset:h,relative:s,viewTransition:u});function f(m){i&&i(m),m.defaultPrevented||p(m)}return b.createElement("a",ol({},g,{href:A||C,onClick:k||a?i:f,ref:r,target:c}))});var Vd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Vd||(Vd={}));var qd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qd||(qd={}));function C1(e,t){let{target:r,replace:i,state:s,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=$t(),d=Gn(),h=rf(e,{relative:o});return b.useCallback(u=>{if(v1(u,r)){u.preventDefault();let g=i!==void 0?i:Xs(d)===Xs(h);c(e,{replace:g,state:s,preventScrollReset:a,relative:o,viewTransition:l})}},[d,c,h,i,s,r,e,a,o,l])}function xc(e){let t=b.useRef(ll(e)),r=b.useRef(!1),i=Gn(),s=b.useMemo(()=>b1(i.search,r.current?null:t.current),[i.search]),a=$t(),o=b.useCallback((l,c)=>{const d=ll(typeof l=="function"?l(s):l);r.current=!0,a("?"+d,c)},[a,s]);return[s,o]}function lf(e,t){return function(){return e.apply(t,arguments)}}const{toString:R1}=Object.prototype,{getPrototypeOf:mn}=Object,{iterator:Mi,toStringTag:cf}=Symbol,Si=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),df=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),uf=(e,t,r)=>e===Object.prototype||!r&&t===null,P1=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(r=>{if(df(r))return!1;const i=Object.getOwnPropertyDescriptor(e,r);return!!i&&i.configurable&&i.writable===!0})},Ei=(e,t)=>{let r=e;const i=[];for(;r!=null;){if(i.indexOf(r)!==-1)return!1;i.push(r);const s=mn(r);if(uf(r,s,r===e))return!1;if(Si(r,t))return!0;r=s}return!1},O1=(e,t)=>e!=null&&Ei(e,t)?e[t]:void 0,T1=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const t=mn(e);if(t===null&&P1(e))return e;const r=Object.create(null),i=Object.create(null),s=[];let a=e;for(;a!=null&&s.indexOf(a)===-1;){s.push(a);const o=a===e?t:mn(a);if(uf(a,o,a===e))break;const l=Object.getOwnPropertyNames(a);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(a));for(const c of l)df(c)||Si(i,c)||(r[c]=e[c],i[c]=!0);a=o}return r},wc=(e=>t=>{const r=R1.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),mt=e=>(e=e.toLowerCase(),t=>wc(t)===e),va=e=>t=>typeof t===e,{isArray:Dn}=Array,Wn=va("undefined");function Rr(e){return e!==null&&!Wn(e)&&e.constructor!==null&&!Wn(e.constructor)&&Ke(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const hf=mt("ArrayBuffer");function L1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&hf(e.buffer),t}const M1=va("string"),Ke=va("function"),pf=va("number"),Pr=e=>e!==null&&typeof e=="object",z1=e=>e===!0||e===!1,bs=e=>{if(!Pr(e))return!1;const t=mn(e);return(t===null||t===Object.prototype||mn(t)===null)&&!Ei(e,cf)&&!Ei(e,Mi)},I1=e=>{if(!Pr(e)||Rr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},B1=mt("Date"),F1=mt("File"),D1=e=>!!(e&&typeof e.uri<"u"),W1=e=>e&&typeof e.getParts<"u",U1=mt("Blob"),H1=mt("FileList"),_1=mt("Set"),$1=e=>Pr(e)&&Ke(e.pipe);function G1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Yd=G1(),Kd=typeof Yd.FormData<"u"?Yd.FormData:void 0,V1=e=>{if(!e)return!1;if(Kd&&e instanceof Kd)return!0;const t=mn(e);if(!t||t===Object.prototype||!Ke(e.append))return!1;const r=wc(e);return r==="formdata"||r==="object"&&Ke(e.toString)&&e.toString()==="[object FormData]"},q1=mt("URLSearchParams"),[Y1,K1,X1,Q1]=["ReadableStream","Request","Response","Headers"].map(mt),Z1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zi(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),Dn(e))for(i=0,s=e.length;i<s;i++)t.call(null,e[i],i,e);else{if(Rr(e))return;const a=r?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(i=0;i<o;i++)l=a[i],t.call(null,e[l],l,e)}}function ff(e,t){if(Rr(e))return null;t=t.toLowerCase();const r=Object.keys(e);let i=r.length,s;for(;i-- >0;)if(s=r[i],t===s.toLowerCase())return s;return null}const Pn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,mf=e=>!Wn(e)&&e!==Pn;function cl(...e){const{caseless:t,skipUndefined:r}=mf(this)&&this||{},i={},s=(a,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const l=t&&typeof o=="string"&&ff(i,o)||o,c=Si(i,l)?i[l]:void 0;bs(c)&&bs(a)?i[l]=cl(c,a):bs(a)?i[l]=cl({},a):Dn(a)?i[l]=a.slice():(!r||!Wn(a))&&(i[l]=a)};for(let a=0,o=e.length;a<o;a++){const l=e[a];if(!l||Rr(l)||(zi(l,s),typeof l!="object"||Dn(l)))continue;const c=Object.getOwnPropertySymbols(l);for(let d=0;d<c.length;d++){const h=c[d];d0.call(l,h)&&s(l[h],h)}}return i}const J1=(e,t,r,{allOwnKeys:i}={})=>(zi(t,(s,a)=>{r&&Ke(s)?Object.defineProperty(e,a,{__proto__:null,value:lf(s,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,a,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),e),e0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),t0=(e,t,r,i)=>{e.prototype=Object.create(t.prototype,i),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),r&&Object.assign(e.prototype,r)},n0=(e,t,r,i)=>{let s,a,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),a=s.length;a-- >0;)o=s[a],(!i||i(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=r!==!1&&mn(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},r0=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const i=e.indexOf(t,r);return i!==-1&&i===r},i0=e=>{if(!e)return null;if(Dn(e))return e;let t=e.length;if(!pf(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},s0=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&mn(Uint8Array)),a0=(e,t)=>{const i=(e&&e[Mi]).call(e);let s;for(;(s=i.next())&&!s.done;){const a=s.value;t.call(e,a[0],a[1])}},o0=(e,t)=>{let r;const i=[];for(;(r=e.exec(t))!==null;)i.push(r);return i},l0=mt("HTMLFormElement"),c0=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:d0}=Object.prototype,u0=mt("RegExp"),gf=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),i={};zi(r,(s,a)=>{let o;(o=t(s,a,e))!==!1&&(i[a]=o||s)}),Object.defineProperties(e,i)},h0=e=>{gf(e,(t,r)=>{if(Ke(e)&&["arguments","caller","callee"].includes(r))return!1;const i=e[r];if(Ke(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},p0=(e,t)=>{const r={},i=s=>{s.forEach(a=>{r[a]=!0})};return Dn(e)?i(e):i(String(e).split(t)),r},f0=()=>{},m0=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function g0(e){return!!(e&&Ke(e.append)&&e[cf]==="FormData"&&e[Mi])}const x0=e=>{const t=new WeakSet,r=i=>{if(Pr(i)){if(t.has(i))return;if(Rr(i))return i;if(!("toJSON"in i)){t.add(i);let s;if(_1(i)){s=[];for(const a of i){const o=r(a);!Wn(o)&&s.push(o)}}else s=Dn(i)?[]:{},zi(i,(a,o)=>{const l=r(a);!Wn(l)&&(s[o]=l)});return t.delete(i),s}}return i};return r(e)},w0=mt("AsyncFunction"),y0=e=>e&&(Pr(e)||Ke(e))&&Ke(e.then)&&Ke(e.catch),xf=((e,t)=>e?setImmediate:t?((r,i)=>(Pn.addEventListener("message",({source:s,data:a})=>{s===Pn&&a===r&&i.length&&i.shift()()},!1),s=>{i.push(s),Pn.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Ke(Pn.postMessage)),v0=typeof queueMicrotask<"u"?queueMicrotask.bind(Pn):typeof process<"u"&&process.nextTick||xf,wf=e=>e!=null&&Ke(e[Mi]),b0=e=>e!=null&&Ei(e,Mi)&&wf(e),v={isArray:Dn,isArrayBuffer:hf,isBuffer:Rr,isFormData:V1,isArrayBufferView:L1,isString:M1,isNumber:pf,isBoolean:z1,isObject:Pr,isPlainObject:bs,isEmptyObject:I1,isReadableStream:Y1,isRequest:K1,isResponse:X1,isHeaders:Q1,isUndefined:Wn,isDate:B1,isFile:F1,isReactNativeBlob:D1,isReactNative:W1,isBlob:U1,isRegExp:u0,isFunction:Ke,isStream:$1,isURLSearchParams:q1,isTypedArray:s0,isFileList:H1,forEach:zi,merge:cl,extend:J1,trim:Z1,stripBOM:e0,inherits:t0,toFlatObject:n0,kindOf:wc,kindOfTest:mt,endsWith:r0,toArray:i0,forEachEntry:a0,matchAll:o0,isHTMLForm:l0,hasOwnProperty:Si,hasOwnProp:Si,hasOwnInPrototypeChain:Ei,getSafeProp:O1,toSafeFlatObject:T1,reduceDescriptors:gf,freezeMethods:h0,toObjectSet:p0,toCamelCase:c0,noop:f0,toFiniteNumber:m0,findKey:ff,global:Pn,isContextDefined:mf,isSpecCompliantForm:g0,toJSONObject:x0,isAsyncFn:w0,isThenable:y0,setImmediate:xf,asap:v0,isIterable:wf,isSafeIterable:b0},j0=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A0=e=>{const t={};let r,i,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),r=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim();const l=v.hasOwnProp(t,r);!r||l&&v.hasOwnProp(j0,r)||(r==="set-cookie"?l?t[r].push(i):t[r]=[i]:t[r]=l?t[r]+", "+i:i)}),t};function k0(e){let t=0,r=e.length;for(;t<r;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;r>t;){const i=e.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}const S0=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),E0=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function yc(e,t){return v.isArray(e)?e.map(r=>yc(r,t)):k0(String(e).replace(t,""))}const N0=e=>yc(e,S0),C0=e=>yc(e,E0);function yf(e){const t=Object.create(null);return v.forEach(e.toJSON(),(r,i)=>{t[i]=C0(r)}),t}const Xd=Symbol("internals");function Wr(e){return e&&String(e).trim().toLowerCase()}function js(e){return e===!1||e==null?e:v.isArray(e)?e.map(js):N0(String(e))}function R0(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(e);)t[i[1]]=i[2];return t}const P0=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Qa(e){let t=0,r=e.length;for(;t<r;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;r>t;){const i=e.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}function O0(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let r="";for(let i=1;i<t;i++){const s=e.charCodeAt(i);if(s===34||s===92&&(i+=1,i>=t))return e;r+=e[i]}return r}function T0(e){const t=Object.create(null),r=String(e);let i=0,s=!1,a=!1;function o(l){const c=Qa(r.slice(i,l)),d=c.indexOf("=");if(d<1)return;const h=Qa(c.slice(0,d));if(!P0.test(h))return;const u=h.toLowerCase();if(u==="__proto__"||u==="constructor"||u==="prototype")return;const g=Qa(c.slice(d+1));t[u]=O0(g)}for(let l=0;l<r.length;l++){const c=r.charCodeAt(l);s?a?a=!1:c===92?a=!0:c===34&&(s=!1):c===34?s=!0:(c===44||c===59)&&(o(l),i=l+1)}return o(r.length),t}const L0=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Za(e,t,r,i,s){if(v.isFunction(i))return i.call(this,t,r);if(s&&(t=r),!!v.isString(t)){if(v.isString(i))return t.indexOf(i)!==-1;if(v.isRegExp(i))return i.test(t)}}function M0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,i)=>r.toUpperCase()+i)}function z0(e,t){const r=v.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+r,{__proto__:null,value:function(s,a,o){return this[i].call(this,t,s,a,o)},configurable:!0})})}let ze=class{constructor(t){t&&this.set(t)}set(t,r,i){const s=this;function a(l,c,d){const h=Wr(c);if(!h)return;const u=v.findKey(s,h);(!u||s[u]===void 0||d===!0||d===void 0&&s[u]!==!1)&&(s[u||c]=js(l))}const o=(l,c)=>v.forEach(l,(d,h)=>a(d,h,c));if(v.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(v.isString(t)&&(t=t.trim())&&!L0(t))o(A0(t),r);else if(v.isObject(t)&&v.isSafeIterable(t)){let l=Object.create(null),c,d;for(const h of t){if(!v.isArray(h))throw new TypeError("Object iterator must return a key-value pair");d=h[0],v.hasOwnProp(l,d)?(c=l[d],l[d]=v.isArray(c)?[...c,h[1]]:[c,h[1]]):l[d]=h[1]}o(l,r)}else t!=null&&a(r,t,i);return this}get(t,r){if(t=Wr(t),t){const i=v.findKey(this,t);if(i){const s=this[i];if(!r)return s;if(r===!0)return R0(s);if(v.isFunction(r))return r.call(this,s,i);if(v.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Wr(t),t){const i=v.findKey(this,t);return!!(i&&this[i]!==void 0&&(!r||Za(this,this[i],i,r)))}return!1}delete(t,r){const i=this;let s=!1;function a(o){if(o=Wr(o),o){const l=v.findKey(i,o);l&&(!r||Za(i,i[l],l,r))&&(delete i[l],s=!0)}}return v.isArray(t)?t.forEach(a):a(t),s}clear(t){const r=Object.keys(this);let i=r.length,s=!1;for(;i--;){const a=r[i];(!t||Za(this,this[a],a,t,!0))&&(delete this[a],s=!0)}return s}normalize(t){const r=this,i={};return v.forEach(this,(s,a)=>{const o=v.findKey(i,a);if(o){r[o]=js(s),delete r[a];return}const l=t?M0(a):String(a).trim();l!==a&&delete r[a],r[l]=js(s),i[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return v.forEach(this,(i,s)=>{i!=null&&i!==!1&&(r[s]=t&&v.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return v.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return T0(t)}static concat(t,...r){const i=new this(t);return r.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[Xd]=this[Xd]={accessors:{}}).accessors,s=this.prototype;function a(o){const l=Wr(o);i[l]||(z0(s,o),i[l]=!0)}return v.isArray(t)?t.forEach(a):a(t),this}};ze.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(ze.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[r]=i}}});v.freezeMethods(ze);const Qs="[REDACTED ****]";function I0(e){if(v.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(v.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function B0(e,t){const r=new Set(t.map(a=>String(a).toLowerCase())),i=[],s=a=>{if(a===null||typeof a!="object"||v.isBuffer(a))return a;if(i.indexOf(a)!==-1)return;a instanceof ze&&(a=a.toJSON()),i.push(a);let o;if(v.isArray(a))o=[],a.forEach((l,c)=>{const d=s(l);v.isUndefined(d)||(o[c]=d)});else{if(!v.isPlainObject(a)&&I0(a))return i.pop(),a;o=Object.create(null);for(const[l,c]of Object.entries(a)){const d=r.has(l.toLowerCase())?Qs:s(c);v.isUndefined(d)||(o[l]=d)}}return i.pop(),o};return s(e)}function Qd(e){try{return String(e)}catch{return""}}function F0(e){return e.errors.map(r=>{try{return r&&r.message?Qd(r.message):Qd(r)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let L=class vf extends Error{static from(t,r,i,s,a,o){let l=t.message;!l&&v.isArray(t.errors)&&t.errors.length&&(l=F0(t));const c=new vf(l,r||t.code,i,s,a);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(t,r,i,s,a){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),i&&(this.config=i),s&&(this.request=s),a&&(this.response=a,this.status=a.status)}toJSON(){const t=this.config,r=t&&v.hasOwnProp(t,"redact")?t.redact:void 0,i=v.isArray(r)&&r.length>0?B0(t,r):v.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};L.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";L.ERR_BAD_OPTION="ERR_BAD_OPTION";L.ECONNABORTED="ECONNABORTED";L.ETIMEDOUT="ETIMEDOUT";L.ECONNREFUSED="ECONNREFUSED";L.ERR_NETWORK="ERR_NETWORK";L.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";L.ERR_DEPRECATED="ERR_DEPRECATED";L.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";L.ERR_BAD_REQUEST="ERR_BAD_REQUEST";L.ERR_CANCELED="ERR_CANCELED";L.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";L.ERR_INVALID_URL="ERR_INVALID_URL";L.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const D0=null,bf=100;function dl(e){return v.isPlainObject(e)||v.isArray(e)}function jf(e){return v.endsWith(e,"[]")?e.slice(0,-2):e}function Ja(e,t,r){return e?e.concat(t).map(function(s,a){return s=jf(s),!r&&a?"["+s+"]":s}).join(r?".":""):t}function W0(e){return v.isArray(e)&&!e.some(dl)}const U0=v.toFlatObject(v,{},null,function(t){return/^is[A-Z]/.test(t)});function ba(e,t,r){if(!v.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(f,m)=>{const y=v.getSafeProp(r,f);return v.isUndefined(y)?m:y},s=i("metaTokens",!0),a=i("visitor")||k,o=i("dots",!1),l=i("indexes",!1),c=i("Blob")||typeof Blob<"u"&&Blob,d=i("maxDepth",bf),h=c&&v.isSpecCompliantForm(t),u=[];if(!v.isFunction(a))throw new TypeError("visitor must be a function");function g(f){if(f===null)return"";if(v.isDate(f))return f.toISOString();if(v.isBoolean(f))return f.toString();if(!h&&v.isBlob(f))throw new L("Blob is not supported. Use a Buffer instead.");if(v.isArrayBuffer(f)||v.isTypedArray(f)){if(h&&typeof c=="function")return new c([f]);throw new L("Blob is not supported. Use a Buffer instead.",L.ERR_NOT_SUPPORT)}return f}function j(f){if(f>d)throw new L("Object is too deeply nested ("+f+" levels). Max depth: "+d,L.ERR_FORM_DATA_DEPTH_EXCEEDED)}function A(f,m){if(d===1/0)return JSON.stringify(f);const y=[];return JSON.stringify(f,function(E,w){if(!v.isObject(w))return w;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(w),j(m+y.length-1),w})}function k(f,m,y){let S=f;if(v.isReactNative(t)&&v.isReactNativeBlob(f))return t.append(Ja(y,m,o),g(f)),!1;if(f&&!y&&typeof f=="object"){if(v.endsWith(m,"{}"))m=s?m:m.slice(0,-2),f=A(f,1);else if(v.isArray(f)&&W0(f)||(v.isFileList(f)||v.endsWith(m,"[]"))&&(S=v.toArray(f)))return m=jf(m),S.forEach(function(w,R){!(v.isUndefined(w)||w===null)&&t.append(l===!0?Ja([m],R,o):l===null?m:m+"[]",g(w))}),!1}return dl(f)?!0:(t.append(Ja(y,m,o),g(f)),!1)}const C=Object.assign(U0,{defaultVisitor:k,convertValue:g,isVisitable:dl});function p(f,m,y=0){if(!v.isUndefined(f)){if(j(y),u.indexOf(f)!==-1)throw new Error("Circular reference detected in "+m.join("."));u.push(f),v.forEach(f,function(E,w){(!(v.isUndefined(E)||E===null)&&a.call(t,E,v.isString(w)?w.trim():w,m,C))===!0&&p(E,m?m.concat(w):[w],y+1)}),u.pop()}}if(!v.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Zd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(i){return t[i]})}function vc(e,t){this._pairs=[],e&&ba(e,this,t)}const Af=vc.prototype;Af.append=function(t,r){this._pairs.push([t,r])};Af.toString=function(t){const r=t?i=>t.call(this,i,Zd):Zd;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function H0(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function kf(e,t,r){if(!t)return e;e=e||"";const i=v.isFunction(r)?{serialize:r}:r,s=v.getSafeProp(i,"encode")||H0,a=v.getSafeProp(i,"serialize");let o;if(a?o=a(t,i):o=v.isURLSearchParams(t)?t.toString():new vc(t,i).toString(s),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}const Ur=Symbol("internals");function Sf(e){return e?e.length:0}function Jd(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function Hr(e,t){const r=e.handlers,i=Sf(r);r!==t.handlersRef?(t.handlersRef=r,t.handlerEntries.clear()):i!==t.handlersLength&&(i?t.handlerEntries.forEach(function(a,o){r[a.index]!==a.handler&&t.handlerEntries.delete(o)}):t.handlerEntries.clear()),t.handlersLength=i}class eu{constructor(){this.handlers=[],this[Ur]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(t,r,i){const s={fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},a=this[Ur];this.handlers==null&&(this.handlers=[]),Hr(this,a);const o=a.nextId++;return this.handlers.push(s),a.handlerEntries.set(o,{handler:s,index:this.handlers.length-1}),a.handlersLength=this.handlers.length,o}eject(t){const r=this[Ur];Hr(this,r);const i=r.handlerEntries.get(t);if(i){if(r.handlerEntries.delete(t),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,r.iterationDepth||(Jd(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Hr(this,this[Ur]))}forEach(t){const r=this[Ur];Hr(this,r),r.iterationDepth++;try{v.forEach(this.handlers,function(s){s!==null&&t(s)})}finally{--r.iterationDepth||(Hr(this,r),Jd(this.handlers),r.handlersLength=Sf(this.handlers))}}}const bc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},_0=typeof URLSearchParams<"u"?URLSearchParams:vc,$0=typeof FormData<"u"?FormData:null,G0=typeof Blob<"u"?Blob:null,V0={isBrowser:!0,classes:{URLSearchParams:_0,FormData:$0,Blob:G0},protocols:["http","https","file","blob","url","data"]},jc=typeof window<"u"&&typeof document<"u",ul=typeof navigator=="object"&&navigator||void 0,q0=jc&&(!ul||["ReactNative","NativeScript","NS"].indexOf(ul.product)<0),Y0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",K0=jc&&window.location.href||"http://localhost",X0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:jc,hasStandardBrowserEnv:q0,hasStandardBrowserWebWorkerEnv:Y0,navigator:ul,origin:K0},Symbol.toStringTag,{value:"Module"})),ke={...X0,...V0};function Q0(e,t){return ba(e,new ke.classes.URLSearchParams,{visitor:function(r,i,s,a){return ke.isNode&&v.isBuffer(r)?(this.append(i,r.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}const tu=bf;function Ef(e){if(e>tu)throw new L("FormData field is too deeply nested ("+e+" levels). Max depth: "+tu,L.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Z0(e){const t=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=r.exec(e))!==null;)Ef(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function J0(e){const t={},r=Object.keys(e);let i;const s=r.length;let a;for(i=0;i<s;i++)a=r[i],t[a]=e[a];return t}function Nf(e){function t(r,i,s,a){Ef(a);let o=r[a++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=a>=r.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=v.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!l):((!v.hasOwnProp(s,o)||!v.isObject(s[o]))&&(s[o]=[]),t(r,i,s[o],a)&&v.isArray(s[o])&&(s[o]=J0(s[o])),!l)}if(v.isFormData(e)&&v.isFunction(e.entries)){const r={};return v.forEachEntry(e,(i,s)=>{t(Z0(i),s,r,0)}),r}return null}const Cf=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Yn=(e,t)=>e!=null&&v.hasOwnProp(e,t)?e[t]:void 0;function ew(e,t,r){if(v.isString(e))try{return(t||JSON.parse)(e),v.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}const Ii={transitional:bc,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const i=r.getContentType()||"",s=i.indexOf("application/json")>-1,a=v.isObject(t);if(a&&v.isHTMLForm(t)&&(t=new FormData(t)),v.isFormData(t))return s?JSON.stringify(Nf(t)):t;if(v.isArrayBuffer(t)||v.isBuffer(t)||v.isStream(t)||v.isFile(t)||v.isBlob(t)||v.isReadableStream(t))return t;if(v.isArrayBufferView(t))return t.buffer;if(v.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){const c=Yn(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Q0(t,c).toString();if((l=v.isFileList(t))||i.indexOf("multipart/form-data")>-1){const d=Yn(this,"env"),h=d&&d.FormData;return ba(l?{"files[]":t}:t,h&&new h,c)}}return a||s?(r.setContentType("application/json",!1),ew(t)):t}],transformResponse:[function(t){const r=Yn(this,"transitional")||Ii.transitional,i=r&&r.forcedJSONParsing,s=Yn(this,"responseType"),a=s==="json";if(v.isResponse(t)||v.isReadableStream(t))return t;if(t&&v.isString(t)&&(i&&!s||a)){const l=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,Yn(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?L.from(c,L.ERR_BAD_RESPONSE,this,null,Yn(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ke.classes.FormData,Blob:ke.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(Cf,e=>{Ii.headers[e]={}});function eo(e,t){const r=this||Ii,i=t||r,s=ze.from(i.headers);let a=i.data;return v.forEach(e,function(l){a=l.call(r,a,s.normalize(),t?t.status:void 0)}),s.normalize(),a}function Rf(e){return!!(e&&e.__CANCEL__)}let Bi=class extends L{constructor(t,r,i){super(t??"canceled",L.ERR_CANCELED,r,i),this.name="CanceledError",this.__CANCEL__=!0}};function Pf(e,t,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new L("Request failed with status code "+r.status,r.status>=400&&r.status<500?L.ERR_BAD_REQUEST:L.ERR_BAD_RESPONSE,r.config,r.request,r))}const tw=/[\t\n\r]/g;function Of(e){if(typeof e!="string")return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(tw,"")}function to(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function nw(e,t){e=e||10;const r=new Array(e),i=new Array(e);let s=0,a=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),h=i[a];o||(o=d),r[s]=c,i[s]=d;let u=a,g=0;for(;u!==s;)g+=r[u++],u=u%e;if(s=(s+1)%e,s===a&&(a=(a+1)%e),d-o<t)return;const j=h&&d-h;return j?Math.round(g*1e3/j):void 0}}function rw(e,t){let r=0,i=1e3/t,s,a;const o=(h,u=Date.now())=>{r=u,s=null,a&&(clearTimeout(a),a=null),e(...h)};return[(...h)=>{const u=Date.now(),g=u-r;g>=i?o(h,u):(s=h,a||(a=setTimeout(()=>{a=null,o(s)},i-g)))},()=>s&&o(s),(...h)=>o(h)]}const Zs=(e,t,r=3)=>{let i=0;const s=nw(50,250);return rw(a=>{if(!a||!v.isNumber(a.loaded))return;const o=a.loaded,l=a.lengthComputable?a.total:void 0,c=Math.max(0,l!=null?Math.min(o,l):o),d=Math.max(0,c-i),h=s(d);i=Math.max(i,c);const u={loaded:c,total:l,progress:l?c/l:void 0,bytes:d,rate:h||void 0,estimated:h&&l?(l-c)/h:void 0,event:a,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(u)},r)},nu=(e,t)=>{const r=e!=null;return[i=>t[0]({lengthComputable:r,total:e,loaded:i}),t[1]]},ru=(e,t=v.asap)=>(...r)=>t(()=>e(...r)),iw=ke.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,ke.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(ke.origin),ke.navigator&&/(msie|trident)/i.test(ke.navigator.userAgent)):()=>!0,sw=ke.hasStandardBrowserEnv?{write(e,t,r,i,s,a,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];v.isNumber(r)&&l.push(`expires=${new Date(r).toUTCString()}`),v.isString(i)&&l.push(`path=${i}`),v.isString(s)&&l.push(`domain=${s}`),a===!0&&l.push("secure"),v.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const i=t[r].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===e)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function aw(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ow(e,t){if(!t)return e;let r=e.length;for(;r>0&&e.charCodeAt(r-1)===47;)r--;return e.slice(0,r)+"/"+t.replace(/^\/+/,"")}const lw=/^https?:(?!\/\/)/i;function cw(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,r,i="")=>`${r}${i}${Qs}`)}function dw(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Qs}@`),r=t.indexOf("#"),s=(r===-1?t:t.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Qs}`);return r===-1?s:`${s}#${cw(t.slice(r+1))}`}function iu(e,t){if(typeof e=="string"){const r=Of(e);if(lw.test(r))throw new L(`Invalid URL ${JSON.stringify(dw(r))}: missing "//" after protocol`,L.ERR_INVALID_URL,t)}}function Tf(e,t,r,i){iu(t,i);let s=!aw(t);return e&&(s||r===!1)?(iu(e,i),ow(e,t)):t}const su=e=>e instanceof ze?{...e}:e,uw=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function Un(e,t){e=e||{},t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(h,u,g,j){return v.isPlainObject(h)&&v.isPlainObject(u)?v.merge.call({caseless:j},h,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function s(h,u,g,j){if(v.isUndefined(u)){if(!v.isUndefined(h))return i(void 0,h,g,j)}else return i(h,u,g,j)}function a(h,u){if(!v.isUndefined(u))return i(void 0,u)}function o(h,u){if(v.isUndefined(u)){if(!v.isUndefined(h))return i(void 0,h)}else return i(void 0,u)}function l(h){const u=v.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!v.isUndefined(u))if(v.isPlainObject(u)){if(v.hasOwnProp(u,h))return u[h]}else return;const g=v.hasOwnProp(e,"transitional")?e.transitional:void 0;if(v.isPlainObject(g)&&v.hasOwnProp(g,h))return g[h]}function c(h,u,g){if(v.hasOwnProp(t,g))return i(h,u);if(v.hasOwnProp(e,g))return i(void 0,h)}const d={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutErrorMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(h,u,g)=>s(su(h),su(u),g,!0)};return v.forEach(uw({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const g=v.hasOwnProp(d,u)?d[u]:s,j=v.hasOwnProp(e,u)?e[u]:void 0,A=v.hasOwnProp(t,u)?t[u]:void 0,k=g(j,A,u);v.isUndefined(k)&&g!==c||(r[u]=k)}),v.hasOwnProp(t,"validateStatus")&&v.isUndefined(t.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(v.hasOwnProp(e,"validateStatus")?r.validateStatus=i(void 0,e.validateStatus):delete r.validateStatus),r}const hw=["content-type","content-length"];function pw(e,t,r){if(r!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([i,s])=>{hw.includes(i.toLowerCase())&&e.set(i,s)})}const fw=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16)));function Lf(e){const t=Un({},e),r=g=>v.hasOwnProp(t,g)?t[g]:void 0,i=r("data");let s=r("withXSRFToken");const a=r("xsrfHeaderName"),o=r("xsrfCookieName");let l=r("headers");const c=r("auth"),d=r("baseURL"),h=r("allowAbsoluteUrls"),u=r("url");if(t.headers=l=ze.from(l),t.url=kf(Tf(d,u,h,t),r("params"),r("paramsSerializer")),c){const g=v.getSafeProp(c,"username")||"",j=v.getSafeProp(c,"password")||"";try{l.set("Authorization","Basic "+btoa(g+":"+(j?fw(j):"")))}catch(A){throw L.from(A,L.ERR_BAD_OPTION_VALUE,e)}}if(v.isFormData(i)){const g=v.getSafeProp(i,"getHeaders");ke.hasStandardBrowserEnv||ke.hasStandardBrowserWebWorkerEnv||v.isReactNative(i)?l.setContentType(void 0):v.isFunction(g)&&pw(l,g.call(i),r("formDataHeaderPolicy"))}if(ke.hasStandardBrowserEnv&&(v.isFunction(s)&&(s=s(t)),s===!0||s==null&&iw(t.url))){const j=a&&o&&sw.read(o);j&&l.set(a,j)}return t}const mw=typeof XMLHttpRequest<"u",gw=mw&&function(e){return new Promise(function(r,i){const s=Lf(e);let a=s.data;const o=ze.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=s,h,u,g,j,A,k;function C(){j&&j(),A&&A(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function f(y){if(!p)return;if(p.status===0&&(to(Of(s.url))||to(ke.origin))!=="file"&&!(p.responseURL&&p.responseURL.startsWith("file:"))){i(new L("Request aborted",L.ECONNABORTED,e,p)),C(),p=null;return}try{y?k&&k(y):A&&A()}catch(R){setTimeout(()=>{throw R})}if(!p)return;const S=ze.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:S,config:e,request:p};Pf(function(z){r(z),C()},function(z){i(z),C()},w),p=null}"onloadend"in p?p.onloadend=f:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(f)},p.onabort=function(){p&&(i(new L("Request aborted",L.ECONNABORTED,e,p)),C(),p=null)},p.onerror=function(S){const E=S&&S.message?S.message:"Network Error",w=new L(E,L.ERR_NETWORK,e,p);w.event=S||null,i(w),C(),p=null},p.ontimeout=function(){let S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const E=s.transitional||bc;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),i(new L(S,E.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,p)),C(),p=null},a===void 0&&o.setContentType(null),"setRequestHeader"in p&&v.forEach(yf(o),function(S,E){p.setRequestHeader(E,S)}),v.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),l&&l!=="json"&&(p.responseType=s.responseType),d&&([g,A,k]=Zs(d,!0),p.addEventListener("progress",g)),c&&p.upload&&([u,j]=Zs(c),p.upload.addEventListener("progress",u),p.upload.addEventListener("loadend",j)),(s.cancelToken||s.signal)&&(h=y=>{p&&(i(!y||y.type?new Bi(null,e,p):y),p.abort(),C(),p=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const m=to(s.url);if(m&&!ke.protocols.includes(m)){i(new L("Unsupported protocol "+m+":",L.ERR_BAD_REQUEST,e)),C();return}p.send(a||null)})},xw=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const r=new AbortController;let i=!1;const s=function(c){if(!i){i=!0,o();const d=c instanceof Error?c:this.reason;r.abort(d instanceof L?d:new Bi(d instanceof Error?d.message:d))}};let a=t&&setTimeout(()=>{a=null,s(new L(`timeout of ${t}ms exceeded`,L.ETIMEDOUT))},t);const o=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>{if(!i){if(c.aborted){s.call(c);return}c.addEventListener("abort",s,{once:!0})}});const{signal:l}=r;return l.unsubscribe=()=>v.asap(o),l},ww=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let i=0,s;for(;i<r;)s=i+t,yield e.slice(i,s),i=s},yw=async function*(e,t){for await(const r of vw(e))yield*ww(r,t)},vw=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:i}=await t.read();if(r)break;yield i}}finally{await t.cancel()}},au=(e,t,r,i)=>{const s=yw(e,t);let a=0,o,l=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:d,value:h}=await s.next();if(d){l(),c.close();return}let u=h.byteLength;if(r){let g=a+=u;r(g)}c.enqueue(new Uint8Array(h))}catch(d){throw l(d),d}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},ou=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Mf=(e,t,r)=>t+2<r&&ou(e.charCodeAt(t+1))&&ou(e.charCodeAt(t+2)),lu=e=>e<=57?e-48:(e&223)-55,bw=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,jw=e=>e===9||e===10||e===12||e===13||e===32,Aw=e=>{const t=Math.floor(e/4),r=e%4;return t*3+(r===2?1:r===3?2:0)},kw=e=>{const t=e.length;let r=0;return t>0&&e.charCodeAt(t-1)===61&&(r++,t>1&&e.charCodeAt(t-2)===61&&r++),Math.floor((t-r)*3/4)},Sw=e=>{const t=e.length;let r=0,i=0,s=!1;for(let a=0;a<t;a++){let o=e.charCodeAt(a);if(o===37&&Mf(e,a,t)&&(o=lu(e.charCodeAt(a+1))*16+lu(e.charCodeAt(a+2)),a+=2),!jw(o)){if(o===61){i++;continue}if(!bw(o)||i>0){s=!0;continue}r++}}return s||i>2||i>0&&(r+i)%4!==0||r%4===1?kw(e):Aw(r)},Ew=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const r=e.indexOf(",");if(r<0)return 0;const i=e.slice(5,r),s=e.slice(r+1);if(/;base64/i.test(i))return t(s);let o=0;for(let l=0,c=s.length;l<c;l++){const d=s.charCodeAt(l);if(d===37&&Mf(s,l,c))o+=1,l+=2;else if(d<128)o+=1;else if(d<2048)o+=2;else if(d>=55296&&d<=56319&&l+1<c){const h=s.charCodeAt(l+1);h>=56320&&h<=57343?(o+=4,l++):o+=3}else o+=3}return o};function Nw(e){const t=typeof e=="string"?e.indexOf("#"):-1;return Ew(t===-1?e:e.slice(0,t),Sw)}const Ac="1.20.0",cu=64*1024,Cw={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:rs}=v,Rw=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16))),du=e=>{if(!v.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},uu=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Pw=e=>{const t=e.indexOf("://");let r=e;return t!==-1&&(r=r.slice(t+3)),r.includes("@")||r.includes(":")},Ow=e=>{const t=v.global!==void 0&&v.global!==null?v.global:globalThis,{ReadableStream:r,TextEncoder:i}=t;e=v.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:s,Request:a,Response:o}=e,l=s?rs(s):typeof fetch=="function",c=rs(a),d=rs(o);if(!l)return!1;const h=l&&rs(r),u=l&&(typeof i=="function"?(p=>f=>p.encode(f))(new i):async p=>new Uint8Array(await new a(p).arrayBuffer())),g=c&&h&&uu(()=>{let p=!1;const f=new a(ke.origin,{body:new r,method:"POST",get duplex(){return p=!0,"half"}}),m=f.headers.has("Content-Type");return f.body!=null&&f.body.cancel(),p&&!m}),j=d&&h&&uu(()=>v.isReadableStream(new o("").body)),A={stream:j&&(p=>p.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!A[p]&&(A[p]=(f,m)=>{let y=f&&f[p];if(y)return y.call(f);throw new L(`Response type '${p}' is not supported`,L.ERR_NOT_SUPPORT,m)})});const k=async p=>{if(p==null)return 0;if(v.isBlob(p))return p.size;if(v.isSpecCompliantForm(p))return(await new a(ke.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(v.isArrayBufferView(p)||v.isArrayBuffer(p))return p.byteLength;if(v.isURLSearchParams(p)&&(p=p+""),v.isString(p))return(await u(p)).byteLength},C=async(p,f)=>{const m=v.toFiniteNumber(p.getContentLength());return m??k(f)};return async p=>{let{url:f,method:m,data:y,signal:S,cancelToken:E,timeout:w,onDownloadProgress:R,onUploadProgress:z,responseType:B,headers:N,withCredentials:M="same-origin",fetchOptions:P,maxContentLength:_,maxBodyLength:ue,maxRedirects:ce}=Lf(p);const ge=v.isNumber(_)&&_>-1,T=v.isNumber(ue)&&ue>-1,W=V=>v.hasOwnProp(p,V)?p[V]:void 0;let U=s||fetch;B=B?(B+"").toLowerCase():"text";let Y=xw([S,E&&E.toAbortSignal()],w),$=null;const Ee=Y&&Y.unsubscribe&&(()=>{Y.unsubscribe()});let xe,He=null;const Be=()=>new L("Request body larger than maxBodyLength limit",L.ERR_BAD_REQUEST,p,$);try{let V;const be=W("auth");if(be){const H=v.getSafeProp(be,"username")||"",we=v.getSafeProp(be,"password")||"";V={username:H,password:we}}if(Pw(f)){const H=new URL(f,ke.origin);if(!V&&(H.username||H.password)){const we=du(H.username),q=du(H.password);V={username:we,password:q}}(H.username||H.password)&&(H.username="",H.password="",f=H.href)}if(V&&(N.delete("authorization"),N.set("Authorization","Basic "+btoa(Rw((V.username||"")+":"+(V.password||""))))),ge&&typeof f=="string"&&f.startsWith("data:")&&Nw(f)>_)throw new L("maxContentLength size of "+_+" exceeded",L.ERR_BAD_RESPONSE,p,$);if(T&&m!=="get"&&m!=="head"){const H=await k(y);if(typeof H=="number"&&isFinite(H)&&(xe=H,H>ue))throw Be()}const Qe=T&&(v.isReadableStream(y)||v.isStream(y)),x=(H,we,q)=>au(H,cu,Ot=>{if(T&&Ot>ue)throw He=Be();we&&we(Ot)},q);if(g&&m!=="get"&&m!=="head"&&(z||Qe)){if(xe=xe??await C(N,y),xe!==0||Qe){let H=new a(f,{method:"POST",body:y,duplex:"half"}),we;if(v.isFormData(y)&&(we=H.headers.get("content-type"))&&N.setContentType(we),H.body){const[q,Ot]=z&&nu(xe,Zs(ru(z)))||[];y=x(H.body,q,Ot)}}}else if(Qe&&!c&&h&&m!=="get"&&m!=="head")y=x(y);else if(Qe&&c&&!g&&m!=="get"&&m!=="head")throw new L("Stream request bodies are not supported by the current fetch implementation",L.ERR_NOT_SUPPORT,p,$);v.isString(M)||(M=M?"include":"omit");const D=c&&"credentials"in a.prototype;if(v.isFormData(y)){const H=N.getContentType();H&&/^multipart\/form-data/i.test(H)&&!/boundary=/i.test(H)&&N.delete("content-type")}N.set("User-Agent","axios/"+Ac,!1);const X=P==null?P:Object.assign(Object.create(null),P);X&&(delete X.body,delete X.headers,delete X.method,delete X.signal,delete X.duplex,delete X.credentials);const Ze=Object.assign(Object.create(null),X,{signal:Y,method:m.toUpperCase(),headers:yf(N.normalize()),body:y,duplex:"half",credentials:D?M:void 0});c&&(v.forEach(Cw,(H,we)=>{Ze[we]===void 0&&(Ze[we]=H)}),Ze.signal===void 0&&(Ze.signal=null),Ze.body===void 0&&(Ze.body=null)),ce===0&&(Ze.redirect="manual",X&&(X.redirect="manual")),$=c&&new a(f,Ze);let gt=await(c?U($,X):U(f,Ze));const Di=ze.from(gt.headers);if(ge){const H=v.toFiniteNumber(Di.getContentLength());if(H!=null&&H>_)throw new L("maxContentLength size of "+_+" exceeded",L.ERR_BAD_RESPONSE,p,$)}const Vn=j&&(B==="stream"||B==="response");if(j&&gt.body&&(R||ge||Vn&&Ee)){const H={};["status","statusText","headers"].forEach(Or=>{H[Or]=gt[Or]});const we=v.toFiniteNumber(Di.getContentLength()),[q,Ot]=R&&nu(we,Zs(ru(R),!0))||[];let Cc=0;const Kf=Or=>{if(ge&&(Cc=Or,Cc>_))throw new L("maxContentLength size of "+_+" exceeded",L.ERR_BAD_RESPONSE,p,$);q&&q(Or)};gt=new o(au(gt.body,cu,Kf,()=>{Ot&&Ot(),Ee&&Ee()}),H)}B=B||"text";let at=await A[v.findKey(A,B)||"text"](gt,p);if(ge&&!j&&!Vn){let H;if(at!=null&&(typeof at.byteLength=="number"?H=at.byteLength:typeof at.size=="number"?H=at.size:typeof at=="string"&&(H=typeof i=="function"?new i().encode(at).byteLength:at.length)),typeof H=="number"&&H>_)throw new L("maxContentLength size of "+_+" exceeded",L.ERR_BAD_RESPONSE,p,$)}return!Vn&&Ee&&Ee(),await new Promise((H,we)=>{Pf(H,we,{data:at,headers:ze.from(gt.headers),status:gt.status,statusText:gt.statusText,config:p,request:$})})}catch(V){if(Ee&&Ee(),Y&&Y.aborted&&Y.reason instanceof L){const be=Y.reason;throw be.config=p,$&&(be.request=$),V!==be&&Object.defineProperty(be,"cause",{__proto__:null,value:V,writable:!0,enumerable:!1,configurable:!0}),be}if(He)throw $&&!He.request&&(He.request=$),He;if(V instanceof L)throw $&&!V.request&&(V.request=$),V;if(V&&V.name==="TypeError"&&/Load failed|fetch/i.test(V.message)){const be=new L("Network Error",L.ERR_NETWORK,p,$,V&&V.response);throw Object.defineProperty(be,"cause",{__proto__:null,value:V.cause||V,writable:!0,enumerable:!1,configurable:!0}),be}throw L.from(V,V&&V.code,p,$,V&&V.response)}}},Tw=new Map,zf=e=>{let t=e&&e.env||{};const{fetch:r,Request:i,Response:s}=t,a=[i,s,r];let o=a.length,l=o,c,d,h=Tw;for(;l--;)c=a[l],d=h.get(c),d===void 0&&h.set(c,d=l?new Map:Ow(t)),h=d;return d};zf();const kc={http:D0,xhr:gw,fetch:{get:zf}};v.forEach(kc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const hu=e=>`- ${e}`,Lw=e=>v.isFunction(e)||e===null||e===!1;function Mw(e,t){e=v.isArray(e)?e:[e];const{length:r}=e;let i,s;const a={};for(let o=0;o<r;o++){i=e[o];let l;if(s=i,!Lw(i)&&(s=kc[(l=String(i)).toLowerCase()],s===void 0))throw new L(`Unknown adapter '${l}'`);if(s&&(v.isFunction(s)||(s=s.get(t))))break;a[l||"#"+o]=s}if(!s){const o=Object.entries(a).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(hu).join(`
`):" "+hu(o[0]):"as no adapter specified";throw new L("There is no suitable adapter to dispatch the request "+l,L.ERR_NOT_SUPPORT)}return s}const If={getAdapter:Mw,adapters:kc};function no(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bi(null,e)}function ro(e){const t=v.toSafeFlatObject(e);return no(t),t.headers=ze.from(v.getSafeProp(t,"headers")),t.data=eo.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),If.getAdapter(t.adapter||Ii.adapter,t)(t).then(function(s){no(t),t.response=s;try{s.data=eo.call(t,t.transformResponse,s)}finally{delete t.response}return s.headers=ze.from(s.headers),s},function(s){if(!Rf(s)&&(no(t),s&&s.response)){t.response=s.response;try{s.response.data=eo.call(t,t.transformResponse,s.response)}finally{delete t.response}s.response.headers=ze.from(s.response.headers)}return Promise.reject(s)})}const ja={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ja[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const pu={};ja.transitional=function(t,r,i){function s(a,o){return"[Axios v"+Ac+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return(a,o,l)=>{if(t===!1)throw new L(s(o," has been removed"+(r?" in "+r:"")),L.ERR_DEPRECATED);return r&&!pu[o]&&(pu[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(a,o,l):!0}};ja.spelling=function(t){return(r,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function zw(e,t,r){if(typeof e!="object"||e===null)throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const a=i[s],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){const l=e[a],c=l===void 0||o(l,a,e);if(c!==!0)throw new L("option "+a+" must be "+c,L.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new L("Unknown option "+a,L.ERR_BAD_OPTION)}}const As={assertOptions:zw,validators:ja},Le=As.validators;let Ln=class{constructor(t){this.defaults=t||{},this.interceptors={request:new eu,response:new eu}}async request(t,r){try{return await this._request(t,r)}catch(i){if(i instanceof Error)try{let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const a=s.stack;let o="";if(typeof a=="string"){const l=a.indexOf(`
`);o=l===-1?"":a.slice(l+1)}if(!i.stack)i.stack=o;else if(o){const l=o.indexOf(`
`),c=l===-1?-1:o.indexOf(`
`,l+1),d=c===-1?"":o.slice(c+1);String(i.stack).endsWith(d)||(i.stack+=`
`+o)}}catch{}throw i}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Un(this.defaults,r);const{transitional:i,paramsSerializer:s,headers:a}=r;i!==void 0&&As.assertOptions(i,{silentJSONParsing:Le.transitional(Le.boolean),forcedJSONParsing:Le.transitional(Le.boolean),clarifyTimeoutError:Le.transitional(Le.boolean),legacyInterceptorReqResOrdering:Le.transitional(Le.boolean),advertiseZstdAcceptEncoding:Le.transitional(Le.boolean),validateStatusUndefinedResolves:Le.transitional(Le.boolean)},!1),s!=null&&(v.isFunction(s)?r.paramsSerializer={serialize:s}:As.assertOptions(s,{encode:Le.function,serialize:Le.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),As.assertOptions(r,{baseUrl:Le.spelling("baseURL"),withXsrfToken:Le.spelling("withXSRFToken")},!0),r.method=(v.getSafeProp(r,"method")||v.getSafeProp(this.defaults,"method")||"get").toLowerCase();let o=a&&v.merge(a.common,a[r.method]);a&&v.forEach(Cf.concat("common"),A=>{delete a[A]}),r.headers=ze.concat(o,a);const l=[];let c=!0;this.interceptors.request.forEach(function(k){if(typeof k.runWhen=="function"&&k.runWhen(r)===!1)return;c=c&&k.synchronous;const C=r.transitional||bc;C&&C.legacyInterceptorReqResOrdering?l.unshift(k.fulfilled,k.rejected):l.push(k.fulfilled,k.rejected)});const d=[];this.interceptors.response.forEach(function(k){d.push(k.fulfilled,k.rejected)});let h,u=0,g;if(!c){const A=[ro.bind(this),void 0];for(A.unshift(...l),A.push(...d),g=A.length,h=Promise.resolve(r);u<g;)h=h.then(A[u++],A[u++]);return h}g=l.length;let j=r;for(;u<g;){const A=l[u++],k=l[u++];try{j=A?A(j):j}catch(C){if(!k){h=Promise.reject(C);break}try{const p=k.call(this,C);v.isThenable(p)&&(h=Promise.resolve(p).then(()=>ro.call(this,j)))}catch(p){h=Promise.reject(p)}break}}if(!h)try{h=ro.call(this,j)}catch(A){h=Promise.reject(A)}for(u=0,g=d.length;u<g;)h=h.then(d[u++],d[u++]);return h}getUri(t){t=Un(this.defaults,t);const r=Tf(t.baseURL,t.url,t.allowAbsoluteUrls,t);return kf(r,t.params,t.paramsSerializer)}};v.forEach(["delete","get","head","options"],function(t){Ln.prototype[t]=function(r,i){return this.request(Un(i||{},{method:t,url:r,data:i&&v.hasOwnProp(i,"data")?i.data:void 0}))}});v.forEach(["post","put","patch","query"],function(t){function r(i){return function(a,o,l){return this.request(Un(l||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Ln.prototype[t]=r(),t!=="query"&&(Ln.prototype[t+"Form"]=r(!0))});let Iw=class Bf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(a){r=a});const i=this;this.promise.then(s=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](s);i._listeners=null}),this.promise.then=s=>{let a;const o=new Promise(l=>{i.subscribe(l),a=l}).then(s);return o.cancel=function(){i.unsubscribe(a)},o},t(function(a,o,l){i.reason||(i.reason=new Bi(a,o,l),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=i=>{t.abort(i)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Bf(function(s){t=s}),cancel:t}}};function Bw(e){return function(r){return e.apply(null,r)}}function Fw(e){return v.isObject(e)&&e.isAxiosError===!0}const ks={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ks).forEach(([e,t])=>{ks[t]===void 0&&(ks[t]=e)});function Ff(e){const t=new Ln(e),r=lf(Ln.prototype.request,t);return v.extend(r,Ln.prototype,t,{allOwnKeys:!0}),v.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return Ff(Un(e,s))},r}const fe=Ff(Ii);fe.Axios=Ln;fe.CanceledError=Bi;fe.CancelToken=Iw;fe.isCancel=Rf;fe.VERSION=Ac;fe.toFormData=ba;fe.AxiosError=L;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=Bw;fe.isAxiosError=Fw;fe.mergeConfig=Un;fe.AxiosHeaders=ze;fe.formToJSON=e=>Nf(v.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=If.getAdapter;fe.HttpStatusCode=ks;fe.default=fe;const{Axios:tv,AxiosError:nv,CanceledError:rv,isCancel:iv,CancelToken:sv,VERSION:av,all:ov,Cancel:lv,isAxiosError:cv,spread:dv,toFormData:uv,AxiosHeaders:hv,HttpStatusCode:pv,formToJSON:fv,getAdapter:mv,mergeConfig:gv,create:xv}=fe,Sc="admin_token",Aa="admin_user",Dw=e=>{try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(atob(t))}catch{return null}},Ec=()=>localStorage.getItem(Sc),Ww=(e=Ec())=>{const t=e&&Dw(e);return t!=null&&t.exp?Math.max(0,t.exp*1e3-Date.now()):0},hl=()=>Ww()>0,wv=()=>{try{return JSON.parse(localStorage.getItem(Aa))}catch{return null}},Uw=(e,t)=>{localStorage.setItem(Sc,e),t&&localStorage.setItem(Aa,JSON.stringify(t))},yv=e=>localStorage.setItem(Aa,JSON.stringify(e)),Df=()=>{localStorage.removeItem(Sc),localStorage.removeItem(Aa)},Hw=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,vv=(e,t="")=>{const r=t.split("@")[0];return e.length<8?"At least 8 characters":!/[a-z]/i.test(e)||!/\d/.test(e)?"Use both letters and numbers":r.length>=3&&e.toLowerCase().includes(r.toLowerCase())?"Must not contain your email name":null},is="".replace(/\/+$/,""),_w=is?is.endsWith("/api")?is:is+"/api":"/api",J=fe.create({baseURL:_w,timeout:6e4});J.interceptors.request.use(e=>{const t=Ec();return t&&(e.headers.Authorization=`Bearer ${t}`),e});J.interceptors.response.use(e=>e,e=>{var i,s,a,o;const t=window.location.pathname.startsWith("/admin/"),r=(s=(i=e.config)==null?void 0:i.url)==null?void 0:s.includes("/admin/login");if(((a=e.response)==null?void 0:a.status)===401&&t&&!r){Df();const l=((o=e.response.data)==null?void 0:o.code)==="TOKEN_EXPIRED"?"expired":"signedout";window.location.replace(`/admin?session=${l}`)}return Promise.reject(e)});const Js="/assets/logo-homwiser-Cd0C7JXv.png",pl=["Real Estate News","Gurgaon","Delhi NCR","Investment","Property Guide"],fl=e=>{const t=new Date(e);return isNaN(t)?"":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toUpperCase()},$w=(e="")=>String(e).replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&[a-z#0-9]+;/gi," "),Gw=(e={})=>[e.excerpt,e.body?$w(e.body):"",...e.body?[]:(e.content||[]).flatMap(t=>[t.heading,t.text])].join(" ").split(/\s+/).filter(Boolean).length,Vw=e=>Math.max(1,Math.round(Gw(e)/200));function Xe(){const e=Gn(),t=$t(),[r,i]=b.useState("Gurugram"),[s,a]=b.useState(""),o=E=>{E==null||E.preventDefault();const w=new URLSearchParams;r&&w.set("city",r),s.trim()&&w.set("q",s.trim()),t(`/search?${w.toString()}`)},l=e.pathname==="/",[c,d]=b.useState(!1),[h,u]=b.useState(null),[g,j]=b.useState(!1);b.useEffect(()=>{const E=()=>{j(window.scrollY>40)};return E(),window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E)}},[]),b.useEffect(()=>{d(!1),u(null)},[e.pathname,e.search]),b.useEffect(()=>{if(!c)return;const E=R=>{R.key==="Escape"&&(d(!1),u(null))};document.addEventListener("keydown",E);const w=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",E),document.body.style.overflow=w}},[c]);const A=E=>{u(h===E?null:E)},k=()=>{d(!1),u(null)},C=[{label:"Gurugram",children:[{label:"Southern Peripheral Road (SPR)",link:"/location/southern-peripheral-road"},{label:"Dwarka Expressway",link:"/location/dwarka-expressway"},{label:"New Gurgaon",link:"/location/new-gurgaon"},{label:"Sohna Road",link:"/location/sohna-road"}]},{label:"Noida",children:[{label:"Noida Expressway",link:"/location/noida-expressway"},{label:"Noida Extension",link:"/location/noida-extension"},{label:"Yamuna Expressway",link:"/location/yamuna-expressway"}]},{label:"New Delhi",children:[{label:"Dwarka",link:"/location/dwarka"},{label:"South Delhi",link:"/location/south-delhi"},{label:"Central Delhi",link:"/location/central-delhi"}]},{label:"Faridabad",children:[{label:"Greater Faridabad",link:"/location/greater-faridabad"},{label:"Mathura Road",link:"/location/mathura-road"},{label:"Suraj Kund",link:"/location/suraj-kund"}]},{label:"Bengaluru",children:[{label:"North Bengaluru",link:"/location/north-bengaluru"},{label:"East Bengaluru",link:"/location/east-bengaluru"},{label:"Sarjapur Road (IT Corridor)",link:"/location/sarjapur-road"},{label:"South Bengaluru",link:"/location/south-bengaluru"},{label:"Hoskote & East Peripheral Belt",link:"/location/hoskote"}]},{label:"Hyderabad",children:[{label:"North Hyderabad",link:"/location/north-hyderabad"},{label:"South Hyderabad",link:"/location/south-hyderabad"},{label:"East Hyderabad",link:"/location/east-hyderabad"},{label:"West Hyderabad",link:"/location/west-hyderabad"}]},{label:"Mumbai",children:[{label:"South Mumbai",link:"/location/south-mumbai"},{label:"Navi Mumbai",link:"/location/navi-mumbai"},{label:"Panvel",link:"/location/panvel"},{label:"Central Mumbai",link:"/location/central-mumbai"},{label:"Kalyan",link:"/location/kalyan"}]},{label:"Pune",children:[{label:"West Pune",link:"/location/west-pune"},{label:"East Pune",link:"/location/east-pune"},{label:"Punawale",link:"/location/punawale"},{label:"South East Pune",link:"/location/south-east-pune"}]}],p=[{label:"Under 1 Cr",link:"/budget/under-1-cr"},{label:"1 Cr – 4 Cr",link:"/budget/1-cr-4-cr"},{label:"4 Cr – 8 Cr",link:"/budget/4-cr-8-cr"},{label:"8 Cr – 12 Cr",link:"/budget/8-cr-12-cr"},{label:"12 Cr – 16 Cr",link:"/budget/12-cr-16-cr"},{label:"16 Cr Onwards",link:"/budget/16-cr-onwards"}],f=[{label:"Residential Projects",children:[{label:"Apartment",link:"/residential-projects"},{label:"Luxury Villas",link:"/property-type/luxury-villas"},{label:"Independent Floors",link:"/property-type/independent-floors"},{label:"Pent House",link:"/property-type/pent-house"},{label:"Builder Plots",link:"/property-type/builder-plots"}]},{label:"Commercial Projects",children:[{label:"Shops",link:"/commercial/shops"},{label:"Office Space",link:"/commercial/office-space"},{label:"Food Court",link:"/commercial/food-court"},{label:"Anchor Stores",link:"/commercial/anchor-stores"},{label:"Cinema & Entertainment",link:"/commercial/cinema-entertainment"}]},{label:"SCO Plots",link:"/property-type/sco-plots"},{label:"Residential Plots",link:"/property-type/residential-plots",children:[{label:"Deendayal Plots",link:"/property-type/deendayal-plots"},{label:"Normal Plots",link:"/property-type/normal-plots"}]}],m=[{label:"Upcoming",link:"/status/upcoming"},{label:"New Launch",link:"/status/new-launch"},{label:"Under Construction",link:"/status/under-construction"},{label:"Ready To Move",link:"/status/ready-to-move"}],y=E=>{if(!E||window.innerWidth<=768)return;E.style.marginLeft="0px";const w=E.getBoundingClientRect(),R=12;let z=0;w.right>window.innerWidth-R&&(z=window.innerWidth-R-w.right),w.left+z<R&&(z=R-w.left),E.style.marginLeft=z+"px"},S=[{label:"Home",link:"/"},{label:"About",link:"/about"},{label:"Cities",type:"mega",data:C},{label:"Location",type:"simple",data:[{label:"Southern Peripheral Road",link:"/location/southern-peripheral-road"},{label:"Dwarka Expressway",link:"/location/dwarka-expressway"},{label:"Sohna Road",link:"/location/sohna-road"},{label:"New Gurugram",link:"/location/new-gurgaon"},{label:"Golf Course Road",link:"/location/golf-course-road"},{label:"Golf Course Extension Road",link:"/location/golf-course-extension-road"}]},{label:"Budget",type:"simple",data:p},{label:"Property Type",type:"mega",data:f},{label:"Project Status",type:"simple",data:m},{label:"Blog",type:"simple",data:[{label:"All Articles",link:"/blog"},...pl.map(E=>({label:E,link:`/blog?category=${encodeURIComponent(E)}`}))]},{label:"Sell Property",link:"/sell",cta:!0},{label:"Contact",link:"/contact"}];return n.jsxs(n.Fragment,{children:[n.jsxs("header",{className:`hw-header ${l?"":"hw-header-inner-page"} ${g?"hw-header-scrolled":""}`,children:[n.jsxs("div",{className:"hw-header-inner",children:[n.jsx(F,{to:"/",className:"hw-logo",onClick:k,children:n.jsx("img",{src:Js,alt:"Homwisor",className:"hw-logo-image"})}),n.jsxs("div",{className:"hw-scroll-search",children:[n.jsxs("div",{className:"hw-location-select",children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M20 10.5C20 16 12 21 12 21S4 16 4 10.5a8 8 0 1 1 16 0Z",stroke:"currentColor",strokeWidth:"1.7"}),n.jsx("circle",{cx:"12",cy:"10.5",r:"2.4",stroke:"currentColor",strokeWidth:"1.7"})]}),n.jsxs("select",{value:r,onChange:E=>i(E.target.value),"aria-label":"Select city",children:[n.jsx("option",{children:"Gurugram"}),n.jsx("option",{children:"Noida"}),n.jsx("option",{children:"New Delhi"}),n.jsx("option",{children:"Faridabad"}),n.jsx("option",{children:"Bengaluru"}),n.jsx("option",{children:"Hyderabad"}),n.jsx("option",{children:"Mumbai"}),n.jsx("option",{children:"Pune"})]}),n.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"m6 9 6 6 6-6",stroke:"currentColor",strokeWidth:"2"})})]}),n.jsxs("div",{className:"hw-search-box",children:[n.jsx("input",{type:"text",value:s,onChange:E=>a(E.target.value),onKeyDown:E=>E.key==="Enter"&&o(E),placeholder:"Search projects, localities...","aria-label":"Search projects and localities"}),n.jsx("button",{type:"button","aria-label":"Search",onClick:o,children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[n.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4",stroke:"currentColor",strokeWidth:"1.8"}),n.jsx("path",{d:"m16 16 4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})})]})]}),n.jsx("nav",{className:"hw-nav",children:S.map(E=>{const w=E.type==="simple"||E.type==="mega",R=["Project Status","Cities","Resale"].includes(E.label);return n.jsxs("div",{className:`hw-nav-item ${R?`hw-scroll-menu-item hw-scroll-${E.label.toLowerCase().replace(/\s+/g,"-")}`:"hw-scroll-menu-hide"}`,onMouseEnter:()=>{w&&u(E.label)},onMouseLeave:()=>{w&&u(null)},children:[w?n.jsxs("button",{className:"hw-nav-link hw-nav-dropdown-button",onClick:()=>A(E.label),children:[n.jsx("span",{children:E.label}),n.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M6 9l6 6 6-6"})})]}):n.jsx(F,{to:E.link,className:E.cta?"hw-nav-link hw-nav-cta":"hw-nav-link",children:E.label}),w&&E.type==="simple"&&h===E.label&&n.jsx("div",{className:"hw-dropdown hw-simple-dropdown",ref:y,children:E.data.map(z=>n.jsx(F,{to:z.link,className:"hw-dropdown-link",children:z.label},z.label))}),w&&E.type==="mega"&&h===E.label&&n.jsx("div",{className:"hw-dropdown hw-mega-dropdown",ref:y,children:n.jsx("div",{className:"hw-mega-grid",children:E.data.map(z=>n.jsxs("div",{className:"hw-menu-group",children:[z.link?n.jsx(F,{to:z.link,className:"hw-group-title hw-direct-link",children:z.label}):n.jsx("div",{className:"hw-group-title",children:z.label}),z.children&&z.children.map(B=>n.jsx(F,{to:B.link,className:"hw-dropdown-child",children:B.label},B.label))]},z.label))})})]},E.label)})}),n.jsxs("div",{className:"hw-header-actions",children:[n.jsx("button",{type:"button",className:"hw-mobile-search-button","aria-label":"Search",onClick:()=>{const E=document.querySelector(".hw-scroll-search input");E&&(E.focus(),E.scrollIntoView({behavior:"smooth",block:"nearest"}))},children:n.jsxs("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[n.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4"}),n.jsx("path",{d:"m16 16 4.2 4.2"})]})}),n.jsx("button",{type:"button",className:"hw-menu-button",onClick:()=>d(E=>!E),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,children:c?n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[n.jsx("path",{d:"M18 6L6 18"}),n.jsx("path",{d:"M6 6l12 12"})]}):n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[n.jsx("path",{d:"M3 6h18"}),n.jsx("path",{d:"M3 12h18"}),n.jsx("path",{d:"M3 18h18"})]})})]})]}),c&&n.jsx("div",{className:"hw-mobile-backdrop",onClick:k,"aria-hidden":"true"}),c&&n.jsx("div",{className:"hw-mobile-menu",children:S.map(E=>{const w=E.type==="simple"||E.type==="mega";return n.jsx("div",{className:"hw-mobile-item",children:w?n.jsxs(n.Fragment,{children:[n.jsxs("button",{className:"hw-mobile-main",onClick:()=>A(E.label),children:[n.jsx("span",{children:E.label}),n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M6 9l6 6 6-6"})})]}),h===E.label&&n.jsx("div",{className:"hw-mobile-submenu",children:E.data.map(R=>n.jsxs("div",{children:[R.link?n.jsx(F,{to:R.link,className:"hw-mobile-group",onClick:k,children:R.label}):n.jsx("div",{className:"hw-mobile-group",children:R.label}),R.children&&R.children.map(z=>n.jsx(F,{to:z.link,className:"hw-mobile-child",onClick:k,children:z.label},z.label))]},R.label))})]}):n.jsx(F,{to:E.link,className:E.cta?"hw-mobile-main hw-mobile-cta":"hw-mobile-main",onClick:k,children:E.label})},E.label)})})]}),n.jsx("style",{children:`

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

        .hw-mobile-search-button {
          display: none;
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

          left: 0 !important;  /* opens to the right of "Cities"; keepInView() nudges it if needed */

          right: auto !important;

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
              0 !important;

            right:
              auto !important;

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
              auto !important;

            left:
              0 !important;

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

            margin-left: 42px;
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

          /* Mobile: hamburger + logo + search + profile */
          .hw-mobile-search-button {
            width: 34px;
            height: 34px;
            padding: 0;
            display: flex !important;
            align-items: center;
            justify-content: center;
            color: #fff;
            border: 1px solid rgba(255,255,255,.60);
            border-radius: 50%;
            background: rgba(0,0,0,.20);
            cursor: pointer;
            flex-shrink: 0;
            transition: .2s ease;
          }

          .hw-mobile-search-button:hover {
            color: #d8aa42;
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

            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
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

          .hw-logo {
            margin-left: 40px;
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

      
        /* ---- mobile menu: keep the ✕ button in the top bar, above the open menu ---- */
        @media (max-width: 768px) {
          .hw-header-inner { position: relative; z-index: 3; }
          .hw-menu-button {
            top: 50% !important;
            z-index: 6;
          }
          .hw-menu-button[aria-expanded="true"] {
            color: #E8C766 !important;
            border-color: rgba(212,175,55,.6) !important;
            background: rgba(212,175,55,.12) !important;
          }
          .hw-mobile-menu { position: relative; z-index: 5; }
          .hw-mobile-backdrop {
            position: fixed;
            inset: 0;
            z-index: 1;
            background: rgba(0,0,0,.45);
          }
        }
      `})]})}function En({link:e,label:t,className:r,children:i}){const s=String(e||"").trim();return!s||s==="#"?i:/^https?:\/\//i.test(s)?n.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:r,"aria-label":t,children:i}):n.jsx(F,{to:s.startsWith("/")?s:`/${s}`,className:r,"aria-label":t,children:i})}const qw="/assets/bn1-Cpicj8ug.png",Yw="/assets/bn2-Dg5ASCxh.png";function Kw({banners:e=[]}){const[t,r]=b.useState(0),i=e.length?e:[{image:Yw},{image:qw}];b.useEffect(()=>{if(i.length<=1)return;const o=setInterval(()=>{r(l=>(l+1)%i.length)},5e3);return()=>clearInterval(o)},[i.length]);const s=()=>{r(o=>(o+1)%i.length)},a=()=>{r(o=>(o-1+i.length)%i.length)};return n.jsxs("section",{className:"hw-hero",children:[n.jsx("div",{className:"hw-slides",children:i.map((o,l)=>n.jsx("div",{className:`hw-slide ${l===t?"hw-slide-active":""}`,children:n.jsx(En,{link:o.link,label:o.title,className:"hw-slide-link",children:n.jsx("img",{src:o.image,alt:o.title||"Premium Property"})})},l))}),i.length>1&&n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",className:"hw-arrow hw-arrow-left",onClick:a,"aria-label":"Previous slide",children:"‹"}),n.jsx("button",{type:"button",className:"hw-arrow hw-arrow-right",onClick:s,"aria-label":"Next slide",children:"›"})]}),n.jsx("style",{children:`

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


        .hw-slide-link {
          display: block;
          width: 100%;
          height: 100%;
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

      
        /* only the visible slide receives clicks (faded ones sit on top) */
        .hw-hero .hw-slide { pointer-events: none; }
        .hw-hero .hw-slide.hw-slide-active { pointer-events: auto; z-index: 1; }
      `})]})}const Hn=[{city:"Gurugram",aliases:["gurgaon"],localities:[{name:"Golf Course Road",slug:"golf-course-road"},{name:"Golf Course Extension Road",slug:"golf-course-extension-road",aliases:["gcer","golf course ext"]},{name:"Dwarka Expressway",slug:"dwarka-expressway"},{name:"Sohna Road",slug:"sohna-road"},{name:"Southern Peripheral Road (SPR)",slug:"southern-peripheral-road",aliases:["southern peripheral road","spr"]},{name:"New Gurgaon",slug:"new-gurgaon",aliases:["new gurugram"]},{name:"Nirvana Road",slug:"nirvana-road"},{name:"MG Road",slug:"mg-road",aliases:["m.g. road"]},{name:"NH-48",slug:"nh-48",aliases:["nh 48","nh8","nh-8"]}]},{city:"Noida",aliases:["greater noida"],localities:[{name:"Noida Expressway",slug:"noida-expressway"},{name:"Noida Extension",slug:"noida-extension"},{name:"Yamuna Expressway",slug:"yamuna-expressway"}]},{city:"New Delhi",aliases:["delhi"],localities:[{name:"Dwarka",slug:"dwarka"},{name:"South Delhi",slug:"south-delhi"},{name:"Central Delhi",slug:"central-delhi"}]},{city:"Faridabad",localities:[{name:"Greater Faridabad",slug:"greater-faridabad"},{name:"Mathura Road",slug:"mathura-road"},{name:"Suraj Kund",slug:"suraj-kund",aliases:["surajkund"]}]},{city:"Bengaluru",aliases:["bangalore"],localities:[{name:"North Bengaluru",slug:"north-bengaluru"},{name:"East Bengaluru",slug:"east-bengaluru"},{name:"Sarjapur Road (IT Corridor)",slug:"sarjapur-road",aliases:["sarjapur road","sarjapur"]},{name:"South Bengaluru",slug:"south-bengaluru"},{name:"Hoskote & East Peripheral Belt",slug:"hoskote",aliases:["hoskote"]}]},{city:"Hyderabad",localities:[{name:"North Hyderabad",slug:"north-hyderabad"},{name:"South Hyderabad",slug:"south-hyderabad"},{name:"East Hyderabad",slug:"east-hyderabad"},{name:"West Hyderabad",slug:"west-hyderabad"}]},{city:"Mumbai",localities:[{name:"South Mumbai",slug:"south-mumbai"},{name:"Navi Mumbai",slug:"navi-mumbai"},{name:"Panvel",slug:"panvel"},{name:"Central Mumbai",slug:"central-mumbai"},{name:"Kalyan",slug:"kalyan"}]},{city:"Pune",localities:[{name:"West Pune",slug:"west-pune"},{name:"East Pune",slug:"east-pune"},{name:"Punawale",slug:"punawale"},{name:"South East Pune",slug:"south-east-pune"}]}],Ar=(e="")=>String(e).toLowerCase().replace(/\([^)]*\)/g," ").replace(/[^a-z0-9]+/g," ").trim(),Xw=Hn.flatMap(e=>e.localities.map(t=>({...t,city:e.city}))),Wf=Xw.map(e=>({l:e,keys:[e.name,e.slug.replace(/-/g," "),...e.aliases||[]].map(Ar)})).sort((e,t)=>Math.max(...t.keys.map(r=>r.length))-Math.max(...e.keys.map(r=>r.length))),fu=(e,t)=>t&&` ${e} `.includes(` ${t} `),ea=e=>{var r;const t=Ar(e);return t&&((r=Wf.find(i=>i.keys.some(s=>s===t)))==null?void 0:r.l)||null},ta=e=>{const t=Ar(e);return t&&Hn.find(r=>[r.city,...r.aliases||[]].map(Ar).includes(t))||null},na=(e={})=>{var s,a,o;const t=Ar(e.location),r=e.locality&&ea(e.locality)||((s=Wf.find(l=>l.keys.some(c=>fu(t,c))))==null?void 0:s.l)||null,i=e.city&&((a=ta(e.city))==null?void 0:a.city)||(r==null?void 0:r.city)||((o=Hn.find(l=>[l.city,...l.aliases||[]].some(c=>fu(t,Ar(c)))))==null?void 0:o.city)||null;return{locality:e.locality||(r==null?void 0:r.name)||"",city:e.city||i||""}},Qw=e=>{var t;return((t=Hn.find(r=>r.city===e))==null?void 0:t.localities)||[]};function Zw(){const e=$t(),[t,r]=b.useState("Apartment"),[i,s]=b.useState(""),[a,o]=b.useState(""),[l,c]=b.useState(""),[d,h]=b.useState(""),f=[{name:"Apartment",value:"Apartment",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M4 21V5.5L12 2l8 3.5V21",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8 21v-5h8v5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M8 8h2M14 8h2M8 11h2M14 11h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Luxury",value:"Luxury",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M3 12l9-8 9 8-9 8-9-8Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),n.jsx("path",{d:"M7 12h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Branded",value:"Branded",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M12 3l2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3Z",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),n.jsx("path",{d:"M19 16v5M16.5 18.5h5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Commercial",value:"Commercial",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M4 21V4h16v17",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),n.jsx("path",{d:"M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),n.jsx("path",{d:"M10 21v-3h4v3",stroke:"currentColor",strokeWidth:"1.6"})]})},{name:"Plots / Land",value:"Plots / Land",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M4 19l5-12 5 3 6-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M4 19h16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M9 7l-1-3M14 10l2-3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Villa",value:"Villa",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M8 12h1M15 12h1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Farmhouse",value:"Farmhouse",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M7 13h2M15 13h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}],m=()=>{const S=new URLSearchParams,E=i||t;d&&S.set("city",d),a.trim()&&S.set("location",a.trim()),E&&S.set("type",E),l&&S.set("budget",l),e(`/search?${S.toString()}`)},y=S=>{r(S.value),s(S.value)};return n.jsxs("section",{className:"hw-search-section",children:[n.jsxs("div",{className:"hw-search-container",children:[n.jsxs("div",{className:"hw-search-tabs",children:[n.jsxs("label",{className:`hw-search-tab hw-search-city${d?" active":""}`,children:[n.jsx("span",{className:"hw-tab-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}),n.jsxs("select",{value:d,onChange:S=>h(S.target.value),"aria-label":"City",children:[n.jsx("option",{value:"",children:"All Cities"}),Hn.map(S=>n.jsx("option",{value:S.city,children:S.city},S.city))]})]}),f.map(S=>{const E=S.icon;return n.jsxs("button",{type:"button",className:`hw-search-tab ${t===S.value?"active":""}`,onClick:()=>y(S),children:[n.jsx("span",{className:"hw-tab-icon",children:n.jsx(E,{})}),n.jsx("span",{className:"hw-tab-text",children:S.name})]},S.value)})]}),n.jsxs("div",{className:"hw-search-fields",children:[n.jsxs("div",{className:"hw-search-field hw-location-field",children:[n.jsx("span",{className:"hw-search-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"7"}),n.jsx("path",{d:"M20 20l-4-4"})]})}),n.jsx("input",{type:"text",value:a,onChange:S=>o(S.target.value),placeholder:"Search city, locality or project..."})]}),n.jsxs("div",{className:"hw-search-field hw-budget-field",children:[n.jsx("span",{className:"hw-search-icon hw-rupee",children:"₹"}),n.jsxs("select",{value:l,onChange:S=>c(S.target.value),children:[n.jsx("option",{value:"",children:"Budget"}),n.jsx("option",{value:"Under 1 Cr",children:"Under ₹1 Cr"}),n.jsx("option",{value:"1 Cr - 4 Cr",children:"₹1 Cr - ₹4 Cr"}),n.jsx("option",{value:"4 Cr - 8 Cr",children:"₹4 Cr - ₹8 Cr"}),n.jsx("option",{value:"8 Cr - 12 Cr",children:"₹8 Cr - ₹12 Cr"}),n.jsx("option",{value:"12 Cr - 16 Cr",children:"₹12 Cr - ₹16 Cr"}),n.jsx("option",{value:"16 Cr Onwards",children:"₹16 Cr Onwards"})]}),n.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),n.jsxs("div",{className:"hw-search-field hw-type-field",children:[n.jsx("span",{className:"hw-search-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"1"}),n.jsx("path",{d:"M8 8h8"}),n.jsx("path",{d:"M8 12h8"}),n.jsx("path",{d:"M8 16h5"})]})}),n.jsxs("select",{value:i,onChange:S=>s(S.target.value),children:[n.jsx("option",{value:"",children:"Property Type"}),n.jsx("option",{value:"Apartment",children:"Apartment"}),n.jsx("option",{value:"Luxury",children:"Luxury"}),n.jsx("option",{value:"Branded",children:"Branded"}),n.jsx("option",{value:"Commercial",children:"Commercial"}),n.jsx("option",{value:"Plots / Land",children:"Plots / Land"}),n.jsx("option",{value:"Villa",children:"Villa"}),n.jsx("option",{value:"Farmhouse",children:"Farmhouse"}),n.jsx("option",{value:"Builder Floor",children:"Builder Floor"})]}),n.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),n.jsxs("button",{type:"button",className:"hw-search-button",onClick:m,children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"7"}),n.jsx("path",{d:"M20 20l-4-4"})]}),n.jsx("span",{children:"Search Properties"})]})]})]}),n.jsx("style",{children:`

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


        .hw-search-city { position: relative; cursor: pointer; }
        .hw-search-city select {
          appearance: none; -webkit-appearance: none; border: none; background: transparent; outline: none;
          font: inherit; color: inherit; cursor: pointer; padding-right: 16px;
          background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);
          background-position: right 4px center, right 0 center; background-size: 4px 4px, 4px 4px; background-repeat: no-repeat;
        }
        .hw-search-city select option { color: #111; }
        /* phones shrink tabs to icons — keep the city name readable */
        .hw-search-tabs .hw-search-tab.hw-search-city { flex: 0 0 auto !important; width: auto !important; min-width: 0 !important; padding: 0 12px !important; }
        .hw-search-tabs .hw-search-tab.hw-search-city .hw-tab-icon { display: inline-flex !important; }

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

      `})]})}const bv=(e="")=>String(e).toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,90).replace(/-$/,""),jv=(e="")=>String(e).toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g,"-").replace(/^-+/,"").slice(0,90),_e=e=>`/property/${encodeURIComponent((e==null?void 0:e.slug)||(e==null?void 0:e.id)||"")}`,Xn=(e,t=[])=>{const r=/^\/property\/([^/?#]+)(.*)$/.exec(String(e||""));if(!r)return e;const i=decodeURIComponent(r[1]),s=t.find(a=>a.slug===i||a.id===i||(a.oldSlugs||[]).includes(i));return s!=null&&s.slug?`/property/${s.slug}${r[2]}`:e},tn=e=>`/${encodeURIComponent(typeof e=="string"?e:(e==null?void 0:e.slug)||"")}`;function Jw({p:e,featured:t=!1}){return n.jsxs("div",{className:"card-hover",style:{background:"#fff",borderRadius:14,overflow:"hidden",border:"1px solid #eee",display:"flex",flexDirection:"column",position:"relative"},children:[n.jsxs(F,{to:_e(e),style:{position:"relative",display:"block",overflow:"hidden",aspectRatio:"3 / 2"},children:[n.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"fill",transition:"transform .5s"},className:"card-img"}),n.jsxs("div",{style:{position:"absolute",top:10,left:10,display:"flex",gap:6},children:[e.rera&&n.jsx("span",{style:{background:"#16a34a",color:"#fff",fontSize:10,fontWeight:800,letterSpacing:.5,padding:"4px 8px",borderRadius:6,display:"flex",alignItems:"center",gap:4},children:"✓ RERA"}),e.tag&&!t&&n.jsx("span",{style:{background:e.tag==="Founder Choice"?"#111":"#d8232a",color:"#fff",fontSize:10,fontWeight:700,padding:"4px 8px",borderRadius:6},children:e.tag})]}),t&&n.jsx("div",{style:{position:"absolute",top:10,left:10,background:"#ffcc00",color:"#111",fontSize:10,fontWeight:800,padding:"4px 8px",borderRadius:6,letterSpacing:.4},children:"★ Founder Choice"}),n.jsxs("div",{style:{position:"absolute",bottom:10,right:10,background:"rgba(0,0,0,.7)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:20,backdropFilter:"blur(6px)"},children:[e.bhk," • ",e.type]})]}),n.jsxs("div",{style:{padding:"14px 14px 12px",flex:1,display:"flex",flexDirection:"column"},children:[n.jsx(F,{to:_e(e),style:{fontWeight:700,fontSize:15,lineHeight:1.25,color:"#111",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",minHeight:38},children:e.title}),n.jsx("div",{style:{fontWeight:800,fontSize:15,color:"#B9943A",marginTop:6},children:e.priceRange||e.price}),n.jsxs("div",{style:{fontSize:12,color:"#6b7280",marginTop:4,display:"flex",gap:4,alignItems:"center"},children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#9ca3af",strokeWidth:"2",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.location})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[n.jsx("a",{href:`https://wa.me/918500900100?text=Hi, I am interested in ${encodeURIComponent(e.title)}`,target:"_blank",rel:"noreferrer",style:{flex:1,height:34,display:"grid",placeItems:"center",background:"#25D366",color:"#fff",borderRadius:8,fontWeight:700,fontSize:12,gap:6},children:n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"#fff",children:n.jsx("path",{d:"M19.1 4.9C16.9 2.7 13.9 1.5 10.8 1.5 4.9 1.5 .2 6.2 .2 12c0 1.9.5 3.7 1.4 5.3L0 24l6.9-1.8c1.5.8 3.2 1.2 4.9 1.2 5.9 0 10.6-4.7 10.6-10.6 0-2.8-1.1-5.5-3.3-7.9zm-8.3 15.6c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.8-3.9 8.7-8.7 8.7z"})}),"WhatsApp"]})}),n.jsx(F,{to:_e(e),style:{flex:1,height:34,display:"grid",placeItems:"center",background:"#0A0A0A",color:"#D4AF37",border:"1px solid #D4AF37",borderRadius:8,fontWeight:700,fontSize:12},children:"View Details"})]})]}),n.jsx("style",{children:`
        .card-hover:hover .card-img{ transform: scale(1.05); }
      `})]})}const e2="/assets/s1-BVwoKduN.webp",t2="/assets/s2-kewm8yNy.webp",n2="/assets/s3-eKCFe4c6.webp";function r2({banners:e=[]}){const t=[{image:e2},{image:t2},{image:n2}],r=e.length?e:t,[i,s]=b.useState(0);return b.useEffect(()=>{if(r.length<=1)return;const a=setInterval(()=>{s(o=>(o+1)%r.length)},5e3);return()=>clearInterval(a)},[r.length]),n.jsxs("section",{className:"hw-image-slider",children:[n.jsx("div",{className:"hw-image-slider-track",children:r.map((a,o)=>n.jsx("div",{className:`hw-image-slide ${o===i?"is-active":""}`,children:n.jsx(En,{link:a.link,label:a.title,className:"hw-image-slide-link",children:n.jsx("img",{src:a.image,alt:a.title||"Property Banner"})})},o))}),n.jsx("style",{children:`

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

        .hw-image-slide-link {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
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

      `})]})}function i2({link:e,className:t,children:r}){const i=String(e||"").trim();return!i||i==="#"?n.jsx("div",{className:t,children:r}):/^https?:\/\//i.test(i)?n.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:t,children:r}):n.jsx(F,{to:i.startsWith("/")?i:`/${i}`,className:t,children:r})}const s2="919090101401",a2=e=>`https://wa.me/${s2}?text=${encodeURIComponent(`Hi, I am interested in ${e.title}. Please share more details.`)}`;function o2({items:e=[]}){const t=b.useRef(null),r=(Array.isArray(e)?e:[]).filter(i=>(i==null?void 0:i.image)&&(i==null?void 0:i.title)).slice(0,4);return b.useEffect(()=>{const i=t.current;if(!i||r.length<2)return;let s=null;const a=()=>{clearInterval(s),s=setInterval(()=>{if(window.innerWidth>760)return;const o=i.querySelector(".hwr-card");if(!o)return;const l=o.getBoundingClientRect().width+12,c=i.scrollLeft>=i.scrollWidth-i.clientWidth-5;i.scrollTo({left:c?0:i.scrollLeft+l,behavior:"smooth"})},3500)};return a(),i.addEventListener("touchend",a,{passive:!0}),i.addEventListener("pointerup",a),()=>{clearInterval(s),i.removeEventListener("touchend",a),i.removeEventListener("pointerup",a)}},[r.length]),r.length?n.jsxs("section",{className:"hwr-section",children:[n.jsxs("div",{className:"hwr-head",children:[n.jsxs("h2",{children:[n.jsx("span",{className:"hwr-brand",children:"Our Top "})," Properties"]}),n.jsx("span",{className:"hwr-bar","aria-hidden":"true"}),n.jsx("p",{children:"Premium properties chosen by HomWisor: built for luxury living, selected for lasting value. "})]}),n.jsx("div",{className:"hwr-grid",ref:t,children:r.map(i=>n.jsxs("div",{className:"hwr-card",children:[n.jsxs(i2,{link:i.link,className:"hwr-card-link",children:[n.jsx("img",{src:i.image,alt:i.title,loading:"lazy"}),n.jsx("span",{className:"hwr-shade","aria-hidden":"true"}),i.badge&&n.jsxs("span",{className:"hwr-badge",children:[n.jsx("i",{"aria-hidden":"true"}),i.badge]}),n.jsxs("span",{className:"hwr-info",children:[n.jsx("strong",{className:"hwr-name",children:i.title}),i.price&&n.jsx("span",{className:"hwr-price",children:i.price}),i.location&&n.jsxs("span",{className:"hwr-loc",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[n.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.6"})]}),n.jsx("span",{children:i.location})]})]})]}),n.jsxs("a",{className:"hwr-wa",href:a2(i),target:"_blank",rel:"noopener noreferrer",children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:n.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),"WhatsApp"]})]},i.id||i.title))}),n.jsx("style",{children:`
        .hwr-section {
          width: min(1480px, calc(100% - 40px));
          margin: 0 auto;
          padding: 54px 0 46px;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .hwr-head { text-align: center; margin-bottom: 30px; }
        .hwr-head h2 {
          margin: 0;
          font-size: clamp(30px, 3.4vw, 50px);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -1px;
          color: #111827;
        }
        .hwr-brand {
          background: linear-gradient(135deg, #E8C766 0%, #D4AF37 45%, #9A7418 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hwr-bar {
          display: block;
          width: 168px;
          height: 8px;
          margin: 26px auto 22px;
          border-radius: 8px;
          background: linear-gradient(90deg, #9A7418, #D4AF37, #E8C766);
        }
        .hwr-head p {
          margin: 0;
          font-size: clamp(14px, 1.35vw, 20px);
          color: #6b7280;
        }

        .hwr-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .hwr-card {
          position: relative;
          display: block;
          aspect-ratio: 458 / 448;
          border-radius: 20px;
          overflow: hidden;
          background: #1a1a1a;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
          color: #fff;
          text-decoration: none;
          isolation: isolate;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .hwr-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(0,0,0,.2); }
        .hwr-card-link {
          position: absolute;
          inset: 0;
          display: block;
          color: inherit;
          text-decoration: none;
          isolation: isolate;
        }
        .hwr-wa { display: none; }
        .hwr-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          transition: transform .6s ease;
          z-index: -2;
        }
        .hwr-card:hover img { transform: scale(1.05); }
        .hwr-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.55) 28%, rgba(0,0,0,0) 55%);
        }

        .hwr-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px 7px 12px;
          border-radius: 30px;
          background: linear-gradient(135deg, #E8C766, #D4AF37 55%, #B8912A);
          color: #111;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          box-shadow: 0 6px 16px rgba(0,0,0,.25);
        }
        .hwr-badge i {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #111;
          box-shadow: 0 0 0 2px rgba(255,255,255,.55);
        }

        .hwr-info {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 22px;
          display: grid;
          gap: 10px;
        }
        .hwr-name {
          font-size: clamp(17px, 1.45vw, 23px);
          line-height: 1.2;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-shadow: 0 2px 10px rgba(0,0,0,.4);
        }
        .hwr-price {
          font-size: clamp(16px, 1.3vw, 20px);
          font-weight: 800;
          color: #E8C766;
        }
        .hwr-loc {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          font-size: clamp(12.5px, 1vw, 15px);
          font-weight: 600;
          color: rgba(255,255,255,.95);
        }
        .hwr-loc svg { width: 16px; height: 16px; flex-shrink: 0; color: #E8C766; }
        .hwr-loc span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        @media (max-width: 1100px) {
          .hwr-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 760px) {
          .hwr-section { width: 100%; padding: 36px 0 30px; }
          .hwr-head { padding: 0 16px; margin-bottom: 22px; }
          .hwr-bar { width: 110px; height: 6px; margin: 16px auto 14px; }
          .hwr-grid {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 0 16px 6px;
            scrollbar-width: none;
          }
          .hwr-grid::-webkit-scrollbar { display: none; }
          .hwr-grid { gap: 12px; scroll-padding: 0 16px; }
          .hwr-card {
            flex: 0 0 calc((100% - 12px) / 2);
            scroll-snap-align: start;
            aspect-ratio: auto;
            display: flex;
            flex-direction: column;
            border-radius: 14px;
            background: #fff;
            border: 1px solid #ece7d8;
            box-shadow: 0 6px 18px rgba(0,0,0,.07);
            color: #0b0b0b;
          }
          .hwr-card:hover { transform: none; }
          .hwr-card-link { position: static; display: flex; flex-direction: column; flex: 1; }
          .hwr-card img {
            position: static;
            width: 100%;
            height: auto;
            aspect-ratio: 4 / 3.3;
            z-index: auto;
            border-radius: 14px 14px 0 0;
          }
          .hwr-shade { display: none; }
          .hwr-badge { top: 8px; left: 8px; font-size: 9px; letter-spacing: .6px; padding: 4px 8px 4px 6px; gap: 5px; }
          .hwr-badge i { width: 7px; height: 7px; }
          .hwr-info { position: static; padding: 10px 10px 4px; gap: 4px; }
          .hwr-name {
            color: #0b0b0b;
            font-size: 14px;
            line-height: 1.25;
            text-shadow: none;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .hwr-price { color: #9A7418; font-size: 14px; }
          .hwr-loc { color: #6b6450; font-size: 11.5px; gap: 4px; }
          .hwr-loc svg { width: 13px; height: 13px; color: #9A7418; }
          .hwr-wa {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            margin: 8px 10px 10px;
            height: 36px;
            border-radius: 10px;
            background: #ecfaf1;
            border: 1px solid #c9efd7;
            color: #16a34a;
            font-size: 12.5px;
            font-weight: 800;
            text-decoration: none;
          }
          .hwr-wa svg { width: 15px; height: 15px; }
        }
      `})]}):null}const l2="/assets/s4-CyUc3uZH.webp",c2="/assets/s5-B3dJV6PK.webp",d2="/assets/s6-BTGolWiF.webp",u2={eyebrow:"HOMWISOR",heading:"Where Branded Residences Meet Landmark Architecture",highlight:"Branded Residences",description:"Discover a curated portfolio of branded residences, created with the world's leading fashion houses and hoteliers. Each home pairs signature design with dedicated concierge service and enduring value.",points:["Concierge & Valet Services","Every Property RERA-Verified"],primaryLabel:"Explore Residences",primaryLink:"/search?category=branded",secondaryLabel:"Request a Callback",secondaryLink:"/contact",main:{image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop",label:"BRANDED RESIDENCES",title:"Branded Residences",link:"/search?category=branded"},side:{image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=900&fit=crop",label:"HOMWISOR",brand:"BRABUS",sub:"RESIDENCES",tagline:"POWER. PRESTIGE. PERFECTION.",note:"COMING TO",location:"SECTOR 58, GURGAON",footer:"4 & 5 BHK • STARTING FROM ₹20 CR*",link:"/search?q=brabus"}};function h2(e={},t=null,r=i=>i&&`/property/${i.slug||i.id}`){const i=u2,s=e||{},a=(h,u)=>typeof h=="string"&&h.trim()?h.trim():u,o=s.main||{},l=s.side||{},c=!!a(l.image,""),d=h=>c?a(l[h],""):a(l[h],i.side[h]);return{eyebrow:a(s.eyebrow,i.eyebrow),heading:a(s.heading,i.heading),highlight:a(s.highlight,s.heading?"":i.highlight),description:a(s.description,i.description),points:Array.isArray(s.points)&&s.points.some(Boolean)?s.points.filter(Boolean):i.points,primaryLabel:a(s.primaryLabel,i.primaryLabel),primaryLink:a(s.primaryLink,i.primaryLink),secondaryLabel:a(s.secondaryLabel,i.secondaryLabel),secondaryLink:a(s.secondaryLink,i.secondaryLink),main:{image:a(o.image,(t==null?void 0:t.image)||i.main.image),label:a(o.label,i.main.label),title:a(o.title,(t==null?void 0:t.title)||i.main.title),link:a(o.link,t&&r(t)||i.main.link)},side:{image:a(l.image,i.side.image),label:c?"":i.side.label,brand:d("brand"),sub:d("sub"),tagline:d("tagline"),note:d("note"),location:d("location"),footer:d("footer"),link:a(l.link,i.side.link)}}}const je="#D4AF37",mu={position:"absolute",inset:0,zIndex:2,display:"block"},p2=["upcoming","prime","bhk","budget","trending","newlaunch","festival","branded","sco","luxury","commercial"];function f2({bhkSection:e=null,brandedFeature:t=null,properties:r=[],locations:i=[],upcoming:s=[],newlaunch:a=[],offers:o=[],promos:l=[],branded:c=null,luxury:d=null}){var U,Y,$,Ee,xe,He,Be,V,be,Qe;const h=[{id:1,title:"M3M Brabus Residences",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",priceRange:"₹20 - 28 Cr",location:"Sector 58, Golf Course Extension Road",bhk:"4 & 5 BHK",area:"4,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:2,title:"DLF Privana North",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",priceRange:"₹18.50 Cr",location:"Sector 76, Golf Course Extension Road",bhk:"3 & 4 BHK",area:"2,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:3,title:"M3M Crown",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",priceRange:"₹28 - 65 Cr",location:"Sector 111, Dwarka Expressway",bhk:"3, 4 & 5 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:4,title:"Emaar Palm Grove",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",priceRange:"₹25.00 Cr",location:"Sector 102, Dwarka Expressway",bhk:"4 & 5 BHK",area:"5,000+ Sq.Ft.",propertyType:"Villa",rera:!0},{id:5,title:"M3M Crown Luxury",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",priceRange:"₹30 - 70 Cr",location:"Sector 111, Gurugram",bhk:"4 & 5 BHK",area:"4,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:6,title:"DLF The Arbour",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",priceRange:"₹17.50 Cr",location:"Sector 63, Gurugram",bhk:"4 BHK",area:"3,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:7,title:"M3M Golf Estate",image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",priceRange:"₹19 - 45 Cr",location:"Sector 65, Gurugram",bhk:"3 & 4 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:8,title:"Emaar Digi Homes",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",priceRange:"₹15.00 Cr",location:"Sector 62, Gurugram",bhk:"3 & 4 BHK",area:"2,800+ Sq.Ft.",propertyType:"Apartment",rera:!0}],u=Array.isArray(r)?r.filter(x=>x.category==="trending"||x.category==="recommended").slice(0,8):[],g=u.length>=4?u:h,j=Array.isArray(r)?r.filter(x=>["₹19","₹28","₹16","₹5.2"].some(D=>String((x==null?void 0:x.priceRange)||"").includes(D))||String((x==null?void 0:x.category)||"").toLowerCase()==="trending"):[],A=[r.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("oberoi three sixty"))||r.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("bptp"))||j[0],r.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("experion one 42"))||j[1],r.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("max estate 59"))||j[2],r.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("bptp downtown"))||j[3]].filter(Boolean).slice(0,4),k=(Array.isArray(c)?c:A).slice(0,4),C=(Array.isArray(d)?d:A).slice(0,4),p=h2(t,k[0],_e),f=Xn(p.main.link,r),m=(()=>{const x=p.highlight?p.heading.indexOf(p.highlight):-1;return x<0?p.heading:n.jsxs(n.Fragment,{children:[p.heading.slice(0,x),n.jsx("span",{children:p.highlight}),p.heading.slice(x+p.highlight.length)]})})(),y=Array.isArray(s)&&s.length?s:Array.isArray(r)?r.filter(x=>String((x==null?void 0:x.category)||"").toLowerCase()==="upcoming"||String((x==null?void 0:x.status)||"").toLowerCase()==="upcoming"||String((x==null?void 0:x.propertyStatus)||"").toLowerCase()==="upcoming"):[],S=Array.isArray(a)&&a.length?a:Array.isArray(r)?r.filter(x=>String((x==null?void 0:x.category)||"").toLowerCase()==="newlaunch"||String((x==null?void 0:x.category)||"").toLowerCase()==="new-launch"||String((x==null?void 0:x.status)||"").toLowerCase()==="newlaunch"||String((x==null?void 0:x.propertyStatus)||"").toLowerCase()==="newlaunch"):[],E=Array.isArray(r)?r.filter(x=>String((x==null?void 0:x.category)||"").toLowerCase()==="sco").slice(0,4):[],w=Array.isArray(r)?r.filter(x=>String((x==null?void 0:x.category)||"").toLowerCase()==="commercial").slice(0,4):[],R=[{key:"sco",eyebrow:"SCO PROJECTS",title:"SCO in",text:"Own your commercial address. Handpicked shop-cum-office plots .",items:E,fallbackType:"SCO",fallbackArea:"SCO Plot"},{key:"commercial",eyebrow:"COMMERCIAL PROJECTS",title:"Commercial Projects in",text:"Retail, office and high-street commercial spaces in Gurugram",items:w,fallbackType:"Commercial",fallbackArea:"Commercial Space"}],z=[{id:1,name:"Golf Course Road",count:"245+ Properties",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"},{id:2,name:"Golf Course Extension",count:"320+ Properties",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85"},{id:3,name:"Dwarka Expressway",count:"410+ Properties",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85"},{id:4,name:"MG Road",count:"180+ Properties",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=85"},{id:5,name:"Sohna Road",count:"275+ Properties",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85"},{id:6,name:"New Gurgaon",count:"360+ Properties",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85"}],B=Array.isArray(i)&&i.length?i.slice(0,6):z,N=(Array.isArray(l)?l:[]).filter(x=>x==null?void 0:x.image).map(x=>({image:x.image,title:x.title,link:x.link&&x.link!=="#"?x.link:""}));N.length||N.push(...[l2,c2,d2].map(x=>({image:x,title:"",link:""})));const[M,P]=b.useState(0);b.useEffect(()=>{if(N.length<=1)return;const x=setInterval(()=>{P(D=>(D+1)%N.length)},4500);return()=>clearInterval(x)},[N.length]);const _=x=>x!=null&&x.link?Xn(x.link,r):`/search?q=${encodeURIComponent((x==null?void 0:x.title)||"")}`,ue="919090101401",ce=x=>{const D=encodeURIComponent(`Hi, I am interested in ${x.title}. Please share more details.`);return`https://wa.me/${ue}?text=${D}`},ge=[{label:"Under ₹1 Cr",sub:"Great homes within your budget",link:"/search?budget=under-1-cr",img:((U=z[0])==null?void 0:U.image)||((Y=h[0])==null?void 0:Y.image),icon:"◇"},{label:"₹1 Cr – ₹5 Cr",sub:"Premium living with a smart investment",link:"/search?budget=1-5-cr",img:(($=z[1])==null?void 0:$.image)||((Ee=h[1])==null?void 0:Ee.image),icon:"♢"},{label:"₹5 Crore – ₹10 Crore",sub:"Bigger spaces for a better lifestyle",link:"/search?budget=5-10-cr",img:((xe=z[2])==null?void 0:xe.image)||((He=h[2])==null?void 0:He.image),icon:"♕"},{label:"₹10 Crore – ₹20 Crore",sub:"Exclusive homes for discerning buyers",link:"/search?budget=10-20-cr",img:((Be=z[3])==null?void 0:Be.image)||((V=h[3])==null?void 0:V.image),icon:"♛"},{label:"₹20 Crore – ₹50 Crore",sub:"Ultra-luxury living redefined",link:"/search?budget=20-50-cr",img:((be=z[4])==null?void 0:be.image)||((Qe=h[4])==null?void 0:Qe.image),icon:"▥"}],T=x=>x&&x.items.length>0&&n.jsxs("section",{className:"hw-upcoming-projects hw-sco-projects",children:[n.jsxs("div",{className:"hw-upcoming-header",children:[n.jsxs("div",{children:[n.jsx("div",{className:"hw-subsection-eyebrow",children:x.eyebrow}),n.jsxs("h2",{children:[x.title," ",n.jsx("span",{children:"Gurugram"})]}),n.jsx("p",{children:x.text})]}),n.jsxs(F,{to:`/search?category=${x.key}`,className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:x.items.map((D,X)=>n.jsxs(F,{to:_e(D),className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:D.image||D.thumbnail,alt:D.title||x.eyebrow,loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),D.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"})," RERA"]})}),n.jsx("div",{className:"hw-bhk-badge",children:D.propertyType||D.type||x.fallbackType})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:D.title||D.name||x.eyebrow}),n.jsx("div",{className:"hw-card-price",children:D.priceRange||D.price||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:D.location||D.locality||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:D.area||D.landArea||D.bhk||x.fallbackArea})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:D.propertyType||D.type||"Commercial"})]})]}),n.jsxs("a",{href:ce(D),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:Ze=>Ze.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},D.id||D._id||`${x.key}-${X}`))})]}),W={trending:n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"hw-trending-header",children:[n.jsxs("div",{className:"hw-trending-heading",children:[n.jsxs("div",{className:"hw-trending-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsxs("h2",{children:["Trending Properties in"," ",n.jsx("span",{children:"Gurugram"})]}),n.jsx("p",{children:"Discover new launch and ready-to-move projects in Gurugram's top locations, including Dwarka Expressway, Golf Course Road and New Gurgaon."})]}),n.jsxs(F,{to:"/search?category=trending",className:"hw-trending-view-all",children:[n.jsx("span",{children:"View All Projects"}),n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-trending-properties",children:g.slice(0,8).map((x,D)=>n.jsxs(F,{to:_e(x),className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:x.image,alt:x.title,loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:x.title}),n.jsx("div",{className:"hw-card-price",children:x.priceRange||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:x.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:ce(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:X=>X.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},x.id||D))})]}),prime:n.jsx(n.Fragment,{children:n.jsxs("section",{className:"hw-prime-locations",children:[n.jsx("div",{className:"hw-subsection-header",children:n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsxs("h2",{children:["Explore Gurugram by "," ",n.jsx("span",{children:"Location"})]}),n.jsx("p",{children:"Pick your preferred locality and browse verified projects that match your lifestyle and budget."})]})}),n.jsx("div",{className:"hw-location-grid",children:B.map(x=>n.jsxs(F,{to:`/search?location=${encodeURIComponent(x.name)}`,className:"hw-location-card",children:[n.jsx("img",{src:x.image,alt:x.name,loading:"lazy"}),n.jsx("div",{className:"hw-location-overlay"}),n.jsxs("div",{className:"hw-location-content",children:[n.jsx("div",{className:"hw-location-name",children:x.name}),n.jsx("div",{className:"hw-location-count",children:x.count})]})]},x.id))})]})}),upcoming:n.jsx(n.Fragment,{children:n.jsxs("section",{className:"hw-upcoming-projects",children:[n.jsxs("div",{className:"hw-upcoming-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsxs("h2",{children:["Upcoming Launches in ",n.jsx("span",{children:"Gurugram"})]}),n.jsx("p",{children:"Be among the first to explore Gurugram's newest upcoming residences"})]}),n.jsxs(F,{to:"/search?category=upcoming",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:y.length>0?y.slice(0,4).map((x,D)=>n.jsxs(F,{to:_e(x),className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:x.image,alt:x.title||"Upcoming Project",loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:x.title||"Upcoming Project"}),n.jsx("div",{className:"hw-card-price",children:x.priceRange||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:x.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:ce(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:X=>X.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},x.id||x._id||`upcoming-${D}`)):n.jsx("div",{className:"hw-upcoming-empty",children:n.jsx("strong",{children:"No upcoming projects found."})})})]})}),newlaunch:n.jsx(n.Fragment,{children:n.jsxs("section",{className:"hw-upcoming-projects hw-newlaunch-projects",children:[n.jsxs("div",{className:"hw-upcoming-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsxs("h2",{children:["Newly Launched Properties in ",n.jsx("span",{children:"Gurugram"})]}),n.jsx("p",{children:"Book early in Gurugram's latest projects and get the best choice of units at launch prices."})]}),n.jsxs(F,{to:"/search?category=newlaunch",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:S.length>0?S.slice(0,4).map((x,D)=>n.jsxs(F,{to:_e(x),className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:x.image,alt:x.title||"New Launch Project",loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:x.title||"New Launch Project"}),n.jsx("div",{className:"hw-card-price",children:x.priceRange||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:x.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:ce(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:X=>X.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},x.id||x._id||`newlaunch-${D}`)):n.jsx("div",{className:"hw-upcoming-empty",children:n.jsx("strong",{children:"No new launch projects found."})})})]})}),festival:n.jsx(n.Fragment,{children:n.jsxs("section",{className:"hw-festival-offers",children:[n.jsxs("div",{className:"hw-festival-header",children:[n.jsxs("div",{className:"hw-festival-title-wrap",children:[n.jsxs("div",{className:"hw-festival-brand-line",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsxs("h2",{children:["Festive Season Home Offers ",n.jsx("span",{children:"2026"})]}),n.jsx("p",{children:"Celebrate with a new address. Exclusive festive deals on Gurugram's finest residences, available for a limited time."})]}),n.jsxs(F,{to:"/search?category=festival",className:"hw-festival-view-all",children:["View All Festival Offers",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsxs("div",{className:"hw-festival-layout",children:[n.jsxs("div",{className:"hw-festival-banner",children:[n.jsx("div",{className:"hw-festival-banner-bg"}),n.jsx("div",{className:"hw-festival-banner-overlay"}),n.jsxs("div",{className:"hw-festival-banner-content",children:[n.jsx("div",{className:"hw-festival-mini-badge",children:"FESTIVE EDITION 2026"}),n.jsx("div",{className:"hw-festival-banner-kicker",children:"FESTIVAL LUXURY"}),n.jsxs("h3",{children:["Luxury",n.jsx("br",{}),"Homes.",n.jsx("br",{}),"Bigger",n.jsx("br",{}),"Celebrations."]}),n.jsx("p",{children:"This festive season, unlock exclusive offers on premium residences across Gurugram."}),n.jsxs("div",{className:"hw-festival-perks",children:[n.jsxs("div",{children:[n.jsx("span",{children:"◆"}),n.jsx("b",{children:"Limited Period Deals"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"◆"}),n.jsx("b",{children:"Assured Appreciation"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"◆"}),n.jsx("b",{children:"Flexible Payment Plans"})]})]}),n.jsxs(F,{to:"/search?category=festival",className:"hw-festival-explore",children:["Explore Offers",n.jsx("span",{children:"→"})]})]}),n.jsx("div",{className:"hw-festival-banner-brand",children:"HOMWISOR"})]}),n.jsx("div",{className:"hw-festival-grid",children:(Array.isArray(o)&&o.length?o:h).slice(0,6).map((x,D)=>n.jsxs(En,{link:_(x),label:x.title,className:"hw-festival-card",children:[n.jsxs("div",{className:"hw-festival-card-image",children:[n.jsx("img",{src:x.image||x.thumbnail||h[D%h.length].image,alt:x.title||x.name||"Festival Offer",loading:"lazy"}),n.jsx("div",{className:"hw-festival-card-badge",children:x.badge||"EXCLUSIVE OFFER"}),n.jsx("div",{className:"hw-festival-card-arrow",children:"→"})]}),n.jsxs("div",{className:"hw-festival-card-content",children:[n.jsx("h3",{children:x.title||x.name||"Premium Festival Offer"}),n.jsx("div",{className:"hw-festival-card-price",children:x.priceRange||x.price||"Price on Request"}),n.jsxs("div",{className:"hw-festival-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:x.location||x.locality||"Gurugram"})]})]})]},x.id||x._id||`festival-${D}`))})]})]})}),branded:n.jsxs(n.Fragment,{children:[k.length>0&&n.jsxs("section",{className:"hw-luxury-projects",children:[n.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsxs("h2",{children:["Branded Residences in ",n.jsx("span",{children:"IN"})]}),n.jsx("p",{children:"Explore premium branded residences and landmark projects"})]}),n.jsxs(F,{to:"/search?category=branded",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:k.map((x,D)=>n.jsxs(F,{to:_e(x),className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:x.image||x.thumbnail||h[D%h.length].image,alt:x.title||"Luxury Project",loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:x.title||"Luxury Project"}),n.jsx("div",{className:"hw-card-price",children:x.priceRange||x.price||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:x.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:ce(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:X=>X.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},x.id||x._id||`luxury-${D}`))})]}),n.jsx("section",{className:"hw-branded-feature",id:"branded",children:n.jsxs("div",{className:"hw-branded-feature-inner",children:[n.jsx("div",{className:"hw-branded-glow"}),n.jsxs("div",{className:"hw-branded-copy",children:[n.jsxs("div",{className:"hw-branded-label",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),p.eyebrow,n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsx("h2",{children:m}),n.jsx("p",{children:p.description}),n.jsx("div",{className:"hw-branded-points",children:p.points.map(x=>n.jsxs("div",{children:[n.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),n.jsx("span",{children:x})]},x))}),n.jsxs("div",{className:"hw-branded-actions",children:[n.jsxs(En,{link:Xn(p.primaryLink,r),className:"hw-branded-primary",children:[p.primaryLabel," ",n.jsx("span",{children:"→"})]}),n.jsx(En,{link:Xn(p.secondaryLink,r),className:"hw-branded-secondary",children:p.secondaryLabel})]})]}),n.jsxs("div",{className:"hw-branded-visual",children:[n.jsxs("div",{className:"hw-branded-main-image",children:[n.jsx("img",{src:p.main.image,alt:p.main.title}),n.jsxs("div",{className:"hw-branded-image-card",children:[n.jsxs("div",{children:[n.jsx("small",{children:p.main.label}),n.jsx("strong",{children:p.main.title})]}),n.jsxs(En,{link:f,label:`Explore ${p.main.title}`,children:["EXPLORE ",n.jsx("span",{children:"→"})]})]})]}),n.jsx(En,{link:Xn(p.side.link,r),label:p.side.brand||"Branded residence",className:"hw-branded-side-link",children:n.jsxs("div",{className:"hw-branded-side-card",children:[n.jsx("img",{src:p.side.image,alt:p.side.brand||"Luxury branded residence"}),(p.side.brand||p.side.footer||p.side.location)&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"hw-branded-side-overlay"}),n.jsxs("div",{className:"hw-branded-side-content",children:[p.side.label&&n.jsx("span",{children:p.side.label}),p.side.brand&&n.jsx("strong",{children:p.side.brand}),p.side.sub&&n.jsx("small",{children:p.side.sub}),p.side.tagline&&n.jsx("em",{children:p.side.tagline}),p.side.note&&n.jsx("label",{children:p.side.note}),p.side.location&&n.jsx("b",{children:p.side.location}),p.side.footer&&n.jsx("div",{children:p.side.footer})]})]})]})})]})]})})]}),luxury:n.jsx(n.Fragment,{children:C.length>0&&n.jsxs("section",{className:"hw-luxury-projects",children:[n.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsxs("h2",{children:["India's Finest ",n.jsx("span",{children:"Luxury Residences"})]}),n.jsx("p",{children:"A curated collection of landmark homes with expansive layouts, world-class amenities and prime locations."})]}),n.jsxs(F,{to:"/search?category=luxury",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:C.map((x,D)=>n.jsxs(F,{to:_e(x),className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:x.image||x.thumbnail||h[D%h.length].image,alt:x.title||"Luxury Project",loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:x.title||"Luxury Project"}),n.jsx("div",{className:"hw-card-price",children:x.priceRange||x.price||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:x.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:ce(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:X=>X.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},x.id||x._id||`luxury-${D}`))})]})}),budget:n.jsx(n.Fragment,{children:n.jsxs("section",{className:"hw-budget-section",children:[n.jsxs("div",{className:"hw-budget-header",children:[n.jsxs("div",{className:"hw-budget-heading",children:[n.jsxs("div",{className:"hw-budget-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:je}})]}),n.jsxs("h2",{children:["Browse by ",n.jsx("span",{children:"Budget"})]}),n.jsx("p",{children:"Pick a price range and see matching projects in Gurugram."})]}),n.jsxs(F,{to:"/search",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-budget-grid",children:ge.map(x=>n.jsxs(F,{to:x.link,className:"hw-budget-card",children:[n.jsx("img",{src:x.img,alt:x.label,loading:"lazy"}),n.jsx("div",{className:"hw-budget-card-overlay"}),n.jsx("div",{className:"hw-budget-icon",children:x.icon}),n.jsxs("div",{className:"hw-budget-card-content",children:[n.jsx("h3",{children:x.label}),n.jsx("p",{children:x.sub})]}),n.jsx("span",{className:"hw-budget-card-arrow",children:"→"})]},x.label))})]})}),bhk:e,sco:T(R.find(x=>x.key==="sco")),commercial:T(R.find(x=>x.key==="commercial"))};return n.jsx("section",{className:"hw-trending-section",children:n.jsx("div",{className:"hw-trending-container",children:n.jsxs("div",{className:"hw-trending-layout",children:[n.jsx("div",{className:"hw-trending-left",children:p2.map(x=>W[x]?n.jsx(b.Fragment,{children:W[x]},x):null)}),n.jsx("aside",{className:"hw-trending-ad",children:n.jsxs("div",{className:"hw-ad-slider",children:[N.map((x,D)=>{const X=n.jsx("img",{src:x.image,alt:x.title||"Homwisor Advertisement"});return n.jsx("div",{className:`hw-ad-frame${D===M?" active":""}`,children:x.link&&D===M?/^https?:/i.test(x.link)?n.jsx("a",{href:x.link,target:"_blank",rel:"noopener noreferrer",style:mu,children:X}):n.jsx(F,{to:x.link,style:mu,children:X}):X},D)}),n.jsx("div",{className:"hw-ad-dots",children:N.map((x,D)=>n.jsx("button",{type:"button","aria-label":`Advertisement ${D+1}`,className:D===M?"active":"",onClick:()=>P(D)},D))})]})})]})})})}const m2="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAoAACAAAAAAI0AAEAAAAAAAACywAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA3AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAADc21kYXQSAAoJOBl/7MICGg0gMpABROABBBBAoNf+rO9vENZLd/knyrmSDn+LrrbP4gtu6IqPzSGEBqJCxkZ1VjeE700QtuJ8rk7fzYoymKuOz3F8mJQZPeMVt7r7QEAAHuwn9rdxogLAZ0ZmsMktnVAdeTg7PUmU77ZW3Qyx0ei/EFsGy8xz2gYfo2T2gHm1s1VAVqEnZjFJ6tNyuICqACTkORV4EgAKBhgZf+zCoDK+BROAEECg2AF6CPOtQrgQv854b1HpCkV1NIyqo2TMFkQ6KjRsg/nP7fpXYXAcNAanV0M2nuSlKvHk+0ND/gkoxtQzRIlOayHB0kKoWGfhdAD8sf0H6E5lan+y59H91rcOKV0qehLUWP/CBvYw/HSZEVDLNyB79Co0oTfACpudbB85tlwnAQ3kK+D7BR7HmAXGtd6tPoV6pximDfx0lD0xOeyvILKZWGOR1N7TXHKAlV9Y295tQCaaIieXZwYk+fk6pK0usqquawkHQTKUPfu5vg1i6tzcyIIcT54y2hgBEQQ/2bPuBWslovdeQQBkDEj+4wHv2PfOMa0z1BCetsD6nSuoUQFnoUyKnAx2e3LN5g1XdIS57uxf3hkYRreBYfnj9oOngGNJb4I5kpb4r4EIKb+qiuxQ1F0jGQAayWMSSjyi8/Umrs8RtHpB3fnYE9qHsZXGU8DrmkiDHza3efTJvYuREUW/Lz9n77+Ch+aQtF0TE5GoV6zZxvFLUJohT2tSg0GQucjQDrX2c5dP6CFar2EhiMOmozUUxrqxViWpmR6EInQF43RCzO103Bw8Gu/OkEM1y63sacqie2YF1cjoqQE2ToMAFJYiJSmtowgwTW0JJzWnKWYWA2UycUXiAldYqzDSstUFONom9y/XVpYgYk2oFyztdLtzFirDt2OD2MUsf1kKCZbXZum2gzcgENJRzj6ZJmjvUYSDisd5gm/6TyQOcjdNtdVlxYCIYdQEwrn1NLmuMDaL6xvbdhQUDKpCIwXzEulLxQmxmeXtBZNbKZFu1g4eLPaEWz0F/lSy9wYVa9qAeSUL4A64l05X+XDelVQmiD6k67bEqGwp32eTfM44BzQ39Ify0ULRoHFu4XMH/OaymRxzVWURY1R7CJHoBAvbDvjA+eHQueksGcxvSh0MCH1EdQ03/SOhUpzpQA==",g2="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAywACAAAAAAJfAAEAAAAAAAAEQwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAAaAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAFFm1kYXQSAAoJOBk/5YQENBpAMrsBE4AEEEECgOk/eGS8lanpaeNHmUGZRLVVeklRS9cl8H9vn2VoabkKAsvohpQxGtxZeq0OWmG7cmDNQNUjpZDG5e8sHVCwHOrS2jc4nq9ULizp9ngaDEZJehfgT8Bf/bon6jz4rPzxVmDV6zdusv4Ct+2xL/rXOZIddKFz8iqctnO7mfNR5jjGT86mcGpRKr6c5YNjlSYTgVA1tTyikKNV6lEK6S27QzJ4JL1O9ypnl4Bu16mKlD6R3RqzgBIACgYYGT/lhUAytggTgBBAoPHZap47IRQ4Hg9u0O9scpCGlLiywQuHfoWLWI8xWzb7L85i9N+wWamvtPBG4S9GNo6VfrYzhjvKBZUjwcATivHUaa3q6nD08rr2AngloVt6TNKZbgrMtW6jeaPQbWE1abD0xG+WkLXXvRPav7Spa+yw+1Z9ntt6lYd3yGcPhPp7TAngTVFADvkAvgdTrMogXMapEQE+R9+2MHwvwn31xDHmsirJsa5z/+ID8g+Otrlb4YTNm/QVfPKBn3p/8EFUo+52vMa/fM551SNKIXr8O4P1BpBuR3OK7lVU7txqN+gdj4prLkOnMod90UrFrsQCy3arRgfMFhOi3N6PV2fV60u6y+K7QI9mrzszOSb4tVDWgZgFCdzwOgRf+7NtO7Tr0W0N3rvetY/QaRf1DJu59KXXtMg5jaFiu1UGMlemMm0A/58cIteaYgSrC7EyIvjH49m7KF7c8maDN9oLE0+HeTui7TzOPXdMfKvxECMUKeXWzCf6ZnwIWA0a4n4hkM/NuzNMfP33BXf2dBV9dYVEe/BcgfYvBjujrh91ehoEbEyB1+pr+SOjxUaIrEmId+agerWENxuqvI1S/4rSQ80whmu8/fp6vmso6x+/nNlDAqYruUuQ/5E0ykZW5jn0bpe43/R3nAXUIhsmEqa/FVQLyf6TMrqPr5A4/OIEi/1lvRZAu1TKvXSQEvffXOO+pxAHkNM+7mCGBphjEz70RoZnIwfqVC2mHRot3NL3kZKpANUMEoKhrc9KgX2688Q3DJGWVgBYWKnwWElgyLSC/4NVOTU0NoNNzQMG2JMnhgu+egyZ8LSH5eAmhWVp++reie9tewP89MVlfFutxSQr5tui6mjoVY+DY2qCm85LvOfZeEdPZ7P5PgorVOUw4BXRReBl33W1fwYIQzYS8GPLbqNW5bzZshY861uuy+/37YOJrAYfDc5VXmvaSYPeJwxHP2oJWh8c1MK8noe/8jKojkiybgL5l86/A8t+10o68dMhCS0SIp73i5NVAvUBEUhth/rADQe9Eo7QqNzx1e5PSehbsXbFesyej2ui5VYJ4ezAlTWromtruqc/Q68Q7PR9k/U/Mj2zdLXU6cTWcHflLP5a2VQz7O7C+t2kCxY/OgHAWgziUN7kWXL4rqZ7FNYzdi7UEaG2sSrWj5TyZ2ACiiCL17+19fxTx90rpXMh9s8FVn0I7E7YY6d5rb0Vva9BXPVqEjQXBU7jLFAGL0rOGON/zRc1BgIhpQAdYmBV45SNaI3EyeL3s1eRg1Um1ViJjEZF8GiyVYTvqR6lC6A6j3JBBEwtxlEBmrz2i+qm8Cca+dpW+pMw/5zCs4H/9Bxq1RyOaHhtq/WWT+vPgPXpaU4YMSVzTrtrYrCg7QbqZFGuHf7PZ0KXuOJH5AOHLn0QVAAvatI7Ff5hC0KKSCxFMUcVfJLw",x2="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAGRgACAAAAAAfaAAEAAAAAAAAGHgAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAArAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMbG1kYXQSAAoJOBl/1MICGg0gMrYMROABBBBAoNtHy//xpL+BV005da2uB8FibEpyx0i6gZ+cxoTNByskHj1fGMns5mSTZeRA4ivW3JWIiU5DmaL8aDaFEMMj+FkHGc4MTmL0EWofwoPbZxmnaPAuHelRdiwofFJtrEk4nNA54Gv6+Xz5q4oeJAblByJMJNKEM4ZWOZPpnyOrjOQ3dCEKFs4M1BwQOgDlbHULxwYzIUqRJCQgwh6I639o6C8nQeI0xMOH/LRbWGQGHzf2IQ26yBbeUIaa9Gu6QNCI0fsJhRGxoGE2feMolJzcPJtEv85fCpvKoyCcaqcZnDxaphIKl81OfF8k4rlTkftpwdlTHwao1iIAKsnPycD3v0f9p8evTJX94lkBblYwU40ejDU/mHIAleFIoTGLCX3zq01TVVd0Xp2huvXgwATxzpw+atU7xkWNaEf7toWfkL1lr+M1oieLbXnb38x4LY/2eqE1W5tcVGh6pbHslal76xulIgHhhf74sD7ZXbJ6NOn8V3lwuXiipTghp5E+dfweQUjsKTS8G3+oc8oL7gBPGzsCC7Ty2rkKx2Lk0PFRW+fI63Ow8wF5ItOuGtPs7zmqJfKxgdCkaMoiiWiDVaQdTS5n/GVI9eMeGRX5YVuNcYiPR425IwafPlvY7bheLYobQAGjBhEOEyLg7rlGdr6OATWsKu3SbpprmuHzaBTJnxBHd3SKuRAIrmPMOSfI/bZydF8lKlrv5L/4sxa+LK3zj+uM0r6mypD7YXxX73wjyGQL23hFYkbMTiJNyHvgkt2f2k1EZaCXg9zTk4XPtJbwyZNaubGpZH/Gs5ToN393Sxn1OZZLbKgMRaE/jcoq/oiwcfDZB93bGV4KlxCY0psuOOkOUwL9IsmriLr4Jwya8BtiWFLC6pTeIb7b5Wdg5IZnQcAq7XbQr9Lb7mVdehrrM7dCW+5mu0DZO62eL+H7TyghTMlDWaQY02MUQkIAo/f0zt+QAn+USE6hXQrKA/G8w/gPu4e4vRjSxNwEx1yYXVUcyqK7apo+idrp3VjGXL5a34WU2CvE/hTFwDbWdd4PqIHNdGcF1wnL96bStttvvFW6+wffekXtcUUCuy+k9L5JSMSgP3kCL7TiwFgAUZw20b+mBWwPid6VILcFKm7XLQDnjPns9W4srvM9K5IVsve/R+6+n/XEzR/WpzWZI7d3RIae1H7VDEGjJ4bZOiiAr+prstLxKNMUqA0DA0lx//As2hmMFHURGb4ksbYCl95MRD0p6HaCPtkdOOagG/SZ9ANgajxhBOvEx8GoOtyxX1jGlZy+XSJmruTkhWX7zMp5rCofXUHle8p58uBiT1xIGxp0PHed9PDb+5tVFHZzxNrLuCBuCsdMj+yooxFt2MwKn5vC/RalVSKtPS3Y/49s2RXiRFblQOdBnIxnHktdGIQd9esvzvOur7APPnDS4HCTqgKBMDYGm8HELritbP6qNNf5leP/W3SbHdtQ9/Oqy2kr+Q/DxgkYpt7FHfLZ3gS+nufw5nJfni2OG+I3sZGdxUB3TVja6EaiobNb/PqrOEkJ0lYxBeNjV20F1OiP6LqwjDk0ZlTG+3Dpy/Mi06eDvR+VAy60xC0+w2QPHxu1PwWxIr9fCRPPi9pFoqgBojz+LYz1HMl4mdv8FVMj2u4aJCeZBjjCyJwnDm1Jce3oPadVpu9nPYaNHieVL5OtBsp7ffwCsrbuxiAf8RtVhArjrJVV64K83OJZi5/gCDpPjQbwIftfvLDJab9N0HgQaxFwiBfuxQv6Rl8oBjLVuEqI+6/PoI12qgBF+80pTxwxbTy/4X1NFFYY1LjMkmGPE0uDV+QjsyTyplpH39/x8O7O2/SKRYuj1JeZtdGESiL3eRaCI/33n2VS2p4ptYyXszcSYLYLIlIWazHWw3iPNhaOE4HMh6VgARh3i+JqF/GrSis84Of/54KWJD2Xg0GQjL/xdFmGq8a7MfkWoeV+M+ed9eLD8+MBmHRxUtGMsd4qqwxF4c2Y0exuRD0G4Vgw1tiihIRs71FdFb4v8o4XBkW9VN/KhIodE1ZBjCzhx0kps8WNWWXJmWO2c5NKsX/klYseKoaGBng0mHpeZCFS5maK8XTx3cLERIUsRqkBwAYnAG+AEgAKBhgZf9TCoDKRDBOAEECg3SuGKP+8I1ONpmimVw00nG1fF14hXu4ERHojUiU2HFWSBbmCWdbNOSdizZjf749/3U1fkhhfHEwGhBbxf8LQx+hKAIjKlxxF44DRzhVxrL5FpjkxFkDYDDg8NBnQ0yfHpd2mNLfNHqCUt4PonpKKuVY936v5mdcuDrZ64O5rLP0IjXgOGwI82T90sG3UEkIGLctVdG14ZyazXQOYh+JlQRYhjgKM5wxg3sqgXuYCkSz1dGJ7nJIsAeHiWxEdEmVN9TOyvGe4VDkZIyvC7u2XbsMN1mIPBDtxajVbUf911aHOS5F1oIhY0v3Dq4J/ULTza10G0NfqaU8QbnTyYkvmCcgF8vxoPlkiN3kMXCYfsLKSVG6rmgxjK8Rpf5//+QOfHNYv0WFVtYLFXTj2N5EI+NxPUQX3TTFsL+6RelpY0MrpGamHbN/8sTAJk5RU8mJHqZjRtfoYi6bM/o/a4DRGu9sCYtsfmJO9av6p/kpyAeSJZh+e/93Nk/wI0z+mz+88v611zWr4GA0YfNehbqP6LSNBln6WmC0acvJnh1Yz8sxTXibYeXkrvu1DwGizQ5hcIQYJBJKYaYewlL28E7YnD2Pfxjat/n7kC+Wg0p1U3azZOo/n9oDkAouKVQTmxgULOVvKr8thrXC9vVrqlsb57dNzLZnU7nRgQTOWM9jQwDfna+d8wnvLT9Ne9EQrlYQBMQJVXepg4hSHRQfGI0jvE1h9iG1Bq+kiUQlQ+KEXSNoTenTp+yoamZdEehujBb4ThrjvKVtc3azo2qdcNMjeJ5o/GQFd4CPpoHzPGt3VxqnBDSBG0Gudes4/j75G6DjU9nPSY2G6i728nOAZieWhKnvqHQlnOnZEWRSZoWPqfzjH16Ynm6+tHwAdsteK12KH+x1wq/8fc9RFZ7pQEOynGBhEyVBsmmmkGpWdzgFAF6Qw2wCpfoamNr8tpjtpWIIyC3+QAf7g9R6Q0F0/lMsOMbjq6HBTYrv+OikBSwgmhmYPyTaLi5wtKacLgiCx9QSEn33+j8y4iFSuxk+GuT48EIqkVgH0jvEpNnp4dL+0ylk4oWplMzR+iLUERVBGvEp5rwH7PkX9rX8tFcXUAfgLcyGZGyY6WOpq5E0qJHy8YopxBQSENsKhFYanjKQFc3OXZ492BPvkD7XCTitAFn+mxfQK8afPuu0tkg2PBXigMROQsBdLFmHpM5mQdBdjd3wWir3+q8bIne6HTKQHcLbSS/BATiixxMuWdbW9ki13ID42taJZs2m9I3pUrN2w4TdTEoFKcOPlpavCxFcikkEjRB1MhL9mkHAU5o9Aedqa/21aBbKrBl4Q0k7JmnKRF+Rb4AmMw7X6sGHD5hMdGuYXep1NnSJlzD6HvZhARCJzgDvPZ4Jx2puZ/VtW3OTKuTNzyyC+/ANfVHbiYLkb2rwOIY6yyzcmPfJ2IdiEU0JXn1Ekxk8l9HhGAAslJUhB/NdTm/ICpXnT5sWpz6eVrwVX3gIpDzjNRnQbDFXiYuO8dJNQlUhEVMnhVVvpnPX7t1Ud3bvyzVUL69B7c37z7yZxzBSUUfkTB6zl6raEs0fDOKYV45+1e/yT8uG2VIw+L5DvjLS/CkU9t1v3Lu3ncnO01DGzuVYzSxZUc/opxsgIi5Aow3CVxChJAOt0ziYpH/EjIKBAetL2jr2ZAOBn/D4b5FcKHlCQGm9rnrsGtL9U4cs5Kyw8M/BXPuHTxGXtwNC0A7xzULUrX/F6kENQDBrSkArPI85hXaIcJQyFPzDnhNuBQUY77+zx0aPHEN0ITnZT7QPaRPfdUM47ldyvu/tqMtDpSEWvLJX9Zfwm/BKxcAuG6CE22I0xYSYDmdmq3hIOtrdCioZ6leJBy4rS0+sFDU1n5MifB3Me0UQGjgJDk8YsXXGnyv/YXXsKXQhktBK7uloQouEArIGOhxYK9AdOm+oGP3h6Gc8Vyw//JfklNRd7e2NXG7iB4aZPWtSi4ukOmdsbgr0hW4Lpjq9RzgJsr/yYE3CSDCMfJlTDAcwbiPOY4HtFiJnkXdMpU5SbmbKhRnJwWDCcYf7lo7f8",w2="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAFhQACAAAAAAcZAAEAAAAAAAAGhwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA/AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMFG1kYXQSAAoJOBl//MICGg0gMvUKROABBBBAoNzPlcdBEEEDVJnuiNEyPdUPh1D17yYOiwwITk5pZQPF2puGWU0UsUVI58UZX6fa1WWOl3m8b0c+z2a6Waaz22bLVfCxZ5pXOoKm370l9SZ49/jOa6iu940RhQwAzCpsXNhX6Ho5oSdTpTYfQFqveq6Ik3H413RRV6hhBgbEjG4A3FveJMPe5Eib990IBhxn7LQljie8Ayx2e5Ogu+jJPFHj07kmCi94iE9nEg66X4uxdtdrJf9SVCtQG1si5GeFxt7Mi0TZ/4XwdlxVmOmF7GoeoAASRXMwb7CoYQxPB1P54KaGEjfXqHdXUbl8qYkDR2kWKtI5UVZt03be6xg6D4HtZyMdEf6w0tpZjafeiPjd88ckp0386AtCEbIYhWwb8YcNKg56XEG0e/4n/ukz2HyL9L7VRzI36aqAjrcQ6xKoao+ZfHhms0iqCfYlzygK58xcRLHQo2TX51FuGq/SY3ih5csT84gv38+gpqATqXN7cLvvz1mmkLhYPlMxE14JCWCrUAPMkjkf8mslzya5DjNNGia4AqgpuAc+i7jzkCGGvDTjPElsgHh/LBQAOXSRNW39UCVediApyQoFGZjxY/3PKZuyGJMC10HJMW/CcBJRF4Xh1oRwpLYlBmeIk6tLj/A/AAkiJNlbdkQDg6brAgG6g+s2saoiImylp9dwwZvxaZOBcj0DXj4Sbl7FbaxoLmcA75yk4/vP/TJubkqCTSt8dpMEwWRTJB+4YDivnGfYoXVtVokgMDps6zify6yQbZv9JBpyCVDQFDGwcwT9paTtbVpf0jxEYj5rZ70dvfHAZ6vPVyplh4ymJCMDESg+iDO1CjoeWeqxb63bOdJ513RWzSxIh5JSBl6hFOQT+cx6k01U2C8RAGXieH89BFwWhXkxQBMCfRECrO5XSTICMxoqsk3ifUz38WtXed6wJmtJVmM4hCGV87oJnpCK41/a+Nes4mJTLR/yZJ8at8Qle1Zn+knoFw+qjXmBwSNvqVwCI98VeWPTgV35drY/36M80IbO1zJE8m9Ka0l+QSKsnZ+366IGGZNOje/PiAjHGuiEex0F45MsReq3vavV0ZnF1gSbtwFr4F/X2fTodroOZfhvVsQwOYQzz199+ME6oof5Ay5fdzUn48V/iKdgwOof59puBDjUO6v920lQ8S0vJ0nh9L9xi0U8BRYDGD9qnLeFt4uSU+Rd61bsiBDsgY6VEaxDYWBXbKU5aaEmcotZVzTGaK1sXtPIXyQ1a2VXXYIliND1PMwieFBz7QYa5K2AcrlcKlKJBTN7+sutsWg3axJp1YlTVVkO/tcF/g02ynMc+eZi2lxDUOBw70LMk8H1sKHX/emW1a7Z6AsDsoCFEGlyfPv7xJFllAHEOMcpvSXJhk8chcUQNgo8a4/XAI+4fsTHbjhkf2xf3KHEFWV6FdzvaWEFhtV+uDN/OE+A6IhNbDNz8IgcfKTLNF9eiHGa4d6PQpoNTaTqkzE1We/xuwpcRac0AuhHQBj4+j+BFtxukCK2Two2WcCSZNg1eYdtL5JNpO/Lji6PKitVBEIq9Y9VJ+R1Mm6+MDqbX0JpGl4ikix/SfWnmYaPSKscQKCcFqG0ric6h6HqCSC/32fCdhbciibTuOQUR7zPmIM8t7cSWkWvbIqvIM1oqGf2MNtVLvbgOsV4CBohYjzyEH5lXJVLq+cXoUy3vpRg5T5X1zPSW2v/gxv32QlOT8rFLWTKVXwHOBPKejx1rSEDljMPLi+iW6SJlw+bbXJCqPJRRQ+I+mzNMeiRiK9rYL+M34nwEGiL2Y3fOcMJMvJK+Ynr7VpV/1bWCIrfWu51HUNagaaUf/5kfWLq6SK0s8jLjy4SAAoGGBl//MKgMvoME4AQQKDdLANY8a5ihC48a+vLruZGsFg0HSjw82XLtKa76l4MgvsZg9+e82JsgiJ40yYqpXAKUr5jMcxbPLa1aezsLhLUU8xDbJmA2OfB2qcG5GDKwGrmvBOT7XCquIoP0aWnXi1PDbtjRScSFFQrnk2ltlNfBHOBML0vZeE7eRWrYCzA+mzNOttjGCWS2PmQ0j3IHTmg4ttly5a1vHaRB1ZfBEkRHyK+ePREQIndkEfigjjwO5O4zSh1lceAt78FQ0qYTW2hVbUKlkoM4BS/FlGG6ClLgrhIJ5KQAIBao+KIJatEoQ1V/mg9yU+j5JSapy/DT/as9tD2cXgE7LYt2r05PVEBf+80913xydEWHFXZqiZ49iN63sOwn2B0OR2Fi3VUfhrGz0WZhtlA/iX/Vg5bD+palvqcFo0pVsNLcqIDUm8I7WCQZbAmImjco1sLPJfBEWcl9Vq2ql+bSO40lK3Jf7ZtAQfKTkmzwVwNvOZN9/JoGmEJX5u+21ti7h2aZ4XSYqQZHmx/F/jh18jMsTi9fukpC4adDX3znpRFThlBrQIE0db/aO9Xpk0jxDn3FxuGwp0cQEwlOLYxURRTMdDbgc5+VUgaMOol8pXJFGGRTA882qtCXTiooNPeFN4ycNVVXKk52BwlVF/jCwajXcYu8gW5dU3jqUqAPGt59JMuc75xGJ7GEHvg3YisA4dw+s92/n6fSBJwA/2kjt2kT28RhiVn4JK5JICqqsJ3Brpj01X9pV51NMwzYu3TYLJGBmsuZtQsbQLKCqP4IafF0AT7WzxDGpoTXtUIk4kD5SKiEEB3DsbenuFg/JUts4n97/RmPomunR73JyNnYJNsnjH4wkwwyI7LFXDgcV88DRRT3Iue1NMYpXrEEftSiUOAub5CJng2sjG2DHySt/6bzMN4e9JLdKuQWAbtS6OsCqUOx+viYC1J60o6eERTtVjERKLGXN3Gu24Lpo0KrRt7AdmT+dedcawIrrOBxmK8E804X2oKotOOM6/ON5T6p1/XynMqsOYT8e978BW2ZPSHNyzkhbUZ3jOoQVp/xjE2ujpv4ZiIZJcekY6p2TDWL/5XYOlJ9bTNACxLDt1UHFMVsbstNwczq8SK0PbgLneMBamWM2yzZe1fDzf48qoLZ4kAl/rdmwkdYd57H1Af+Nt+ONObw4ah/Vou7dYwaPMY3jvhmLtCJQNst8x9VU7El3/2Fnzy/elWaH3+XARG8fdRCGoXHxMUKtWzgNwpwnc20flCloJYopyMvTni5F/0pNMd7yZXL0Rc9Ce25KzaWIkhjC7htQZjojFR9CqSeCHV3XumzpWITIj3ruoSeZFOYokHRDQbon1hqQTpoP64R+phdnyOqnlRDJhfz6O2E0Q3yqRNtdgmUqpE60Ir4VB+8o+I3Uflx+ahPERdy3eQdQSs8cxZC8ou2pY5NGqr+SJDfsaUBDyjyl4pQJI8+AS4Gr34T4E6hj4BZjpkpW9a2qbjTGvVPkuW6ZyVVQJCxsQYEPXFzZi+WJzeVmbwi8JdkVjNRzdzcVoFSfOuFwl22rzKXlAKE2vz6TAywBzGf1JUYbnsD3PgdEP3ZyCPm0ybTo3B8COc9Q8beDSELJEeP2jPzY49uiOr/Va3Wa+yel1YMoPFIKlTeGXbPHD3N6oHV86LdL5sh+MuuERlO4x9V9mUMwCYT2/8cBpDFx85nUAH/4UR/F+PtnCrya3JIuqr4nqGzVKBNhm45Yl+HP4cTgqDAomfIkjYnbn2FsLjJJbVe+1mFTjzIb5vNrQDKejncZOaaoaX/TKBQvsz923cA8HBskOuImA7hRahRpY+VCF7SRZrywBUV0NO79u2L0Q5KzjZa9IUkSKz0oyPCwrySlyEOUVAWNtKA1G+sWDvJO9QhgYsodzyAOmhWL5wek3O87lbR4CIV3E3yAApjPESoiixidoTTM9zCWphpe+Z5WAeAwTRWjJx9PI+tr1ZA0gRmcHp1Jx7x53DAbt7y/QnLuXb/ERSDpNQgm3rtFK2UHYswgF2aMXCjkR1KCKj/A4eC0FbwZzCYYIFr7GX9epy+h3pftHHR7vMfqFwRKfl6OmLKRQA5efu45aSzX4GunRaAcPOXijq2yx8bVcIg8rDQRhY9Z8XckDIxJ7pabo1ZrGp8E/KDM1MrqDEFGn3wjIWavVfZrAfKo4QGg3pDyeZsGBjKyBmIosZlj99/8A=",y2="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAE5wAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAABVAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAATvbWRhdBIACgk4Gb/UYQENBpAy1wkRwAIIIIFA1/7S1hAQbgM6tsfIR+WZ4mBsWILYI4fSZfdrILAqhSRq0TCSfh4ly+WvJH2UQQmJtmJgSZGxGiKUfdGbZfI8bourfoFwGzt7lDkVF0JFqinz2egtYGW8p2ziHRrm6cztXUUVDJ7kifCblyVuPzGDNmZg9AY2sgXV6fGAt+acCIubv8KAA8db0udbboWmHP7x5yGnFU/2OlAX7Rvo5bdHuwhDccDWMm9R7lJW6v/ejbhL0JJa46jwhhATpftcuzrpg7Q68EKv9aTrOLv9tts4GckwW8kylBXlZpyxi1IwBK2yzq9ZhPoaCNs1eVCg+komI1918AN0B65JUBs6VNWB9ZlsLqQ/umaD6JVfuEyfR3q7Za2lJZbZhecxamE3nvCBfRIY0qcxGY1ht5+YeaUhLe0SZrySKMOqOzDtI0EZv9xIZZySzkurs2+eWULcYVVdSK9ny+RS7HvMG4wCGzyCApIHDnfeOhWC7QK8C+PMUOy/OUuECwr92h1oOP3m4AO6uoMjPI4JIk2drvNxNS1JoCf/X/2CSKE55zAoiazDueW+S3r2JILTK+QxbKhwNeVSSZ+vF3UsZT3H50XKppLdyb6KBug6+nRARnNqOWn3kseU1y3Oxsin/8tS7rzMfEq+0OOkMsWqC6PmRUbQY4gC3DtR7Yjlc3weH/wIq4wa5rcnNnWvC3jVU5S6ih9zjPjYoGdV8nfZg1kAmVe0hdAf7ZqfBDjwKj9Ib3pxWVqRm3jeC3oJwjv1HGD3Y6sw37ynlApJZH5XaobaOf8tRReyXVOlVDZyVNJJVIqYGA+i+nF4NMPOTP97VXZWWSPc7XT33Io18vntvThfkeRWjwm2nYMscWPKpx17nu6znGy/TaIeJwjFtDdOxew5D3+0BNwb12toXFj9UyqfqTl17eNXPY/9oYbZ/FPVKOJmrfEQxJiQ29oL7SH96I87xs8RXdVZwRZrjY7z5bnHRTX7CdoBPJOX7WCIe++SHTAUlORiHboBzy2gF8uFvZgfocZmXLibbEbVH/ILdnJgQaRqXgf5aGl5p/XmrZhbfsJ7AAzR6GNPpDoUVRoDRUm307F8zVC/GS+AD7vbbjorpPKIezS03tCv4ZdaedjGJ9UbhuEMCNqXCJkuPHOhXX3hsy4IyX9NGoEvfwMa44rAhz66kE1uns9fFoY+vVFUnCnT53b1IbVFaNDt5OFJRcSIex1x4GWb/khBFUXVnUc2EYjEjmaleywhOZVX/a2NY/VNDjJDmRG9p+BntTh+g36eU/kTB87Uf5RLA4339hSKPQfV+doqYjg8kcYG4HyeKElk0vYSAyGGhfKscboZ/hZX7ScMFQB7TWx/vb83oFOh4MEmXr0p7CsWsKgaPJix52Of0Oi28woAkmJXltfLA+0ahCqk3UbfJkZIrMAyzm6mEvvkUcYvyhlTPMq9kqivsJKfdmCe2rKmZCxFVHYZBDee1Z2SIjDjK2h6MYRlcJbCk4WRPjPdXfAe2/8Z6s8e7JfbnX9CIxvX3HF9UK3XnYcein8g5Q5tMlJx6fLQJUtPAtHlPMc63bu9l8qZZ4lfiWSeWPo3SRUB14peg4coMzrLHN/ABljlNcmqXk4K3qhG0NGY5D6qwGXVQD1RerEzD95j3TW0TYc=",v2="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAFggAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAACAAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAWKbWRhdBIACgk4Gb//YQENBpAy8goRwAIIIIFAtF680kfPQwaI1Kcywl3BeQ8z4QxUTktitnzjlfA6Kx9mHBuyHp/L7cZbu8oKuHLSLAdMN8Q0KQUP/mNETsM0edaz4uLHLl4UXjQ02eDbZV+0v9LB5reip1J9tl4rEm4+X5D2P4nkbRzucuY48SogddPfeXU2FN1k4JDF3JREBrfVjOSa8RfnKnzfLIn4JENnpCGcM7WzQCNO42V7j9Do64SdQfNFFYKizS67DanRpdtSpl4EDdOOe3eqww2avYoG4bYFPRDQ0is5hAEsxDHG0Q9TkGSdgeiVDwXfj3pHD0mc+SL/mm7LV91g/e/Vv3hCJAF391iq8rGID9nn3RPYpOOLj8AyDa/ttRv8x1KhLosK9QqDE1umpqmrkgT3VLeHb6SBlriU5l4OEAeWfvwd+x2h/A0D1udKyfpy5bUmPEf0z2nsjWVajGCkeiTKaDV9NmRE/PfSk/j3LqkbCgcdEpW84fpWCnNmFaLcE5bgnITFCvfMcrGe7Yr9yLzextWVQx+fZ2Vsb0rYZrlB2eTCc7jJX6vfdHE74n0HQkBQwWZ3lWt+NmR5ltECi5nrcgPOybPKTcuktkZ1GhrrEOov8/Bji8E/Lx/QfJV3Dva78zj3bXhVDzNwTwMYd11/iZQtQNooFySfYPw9fBKJDJKfg4B9oTgMpsX1jgsGAUB0HTevhh49nkpR9eisMMS7AxO1uEXqmGTBhItf+WzdugnN3AZpByLNQKfR7irNh/Bo4WR2ZRwT3T2l24QqTffXx8AN2lLASN5DF38FYwdsV90K12J36ksBMYGE15B5Is4z0CT+Udw+LrPjQoGxrmjE8OmfvAtd9US6EiuK06N4i3/gBTeNY1mxrrFMj+vmGfCoFlh89HnkrANfv2F3H5mdVjuU2dz8dkJcoxXGw3R/WP2XOCaR/yo2J1UC25JfBaHn4EDdQiE06Wuxsk/tB4RLYstIxm6eydHSnZWoHDtQ/88rP/7U6cGtARUjqnMu/dt5aXAwDyice+p0/O3bQxr0WPDXWgk012D5Jd9GihHDhtT7eP1accWsveWP1O+vrl/z9zILMiMKrIa6YbFio+7XsQC4mu0NiaCuqfDWT00/ERd7ahPA+u2HYJHS70YY+qPuAmXnyc2L+g5IY+I+wtsbP39aSsmZpa2brWgo3ZkzhalNbwpoWabIR0J5e8ZnFAapozLgCOifvDgFXtRKoAJ4WFOFgYJgk76I1n6tc4eM9qO0U9jFcgOMj3CFWU6UvdUynL4haERD0j/UMbpbFnFWo0mnjSkwNG+CU143UNlmrFPgmQNEl/TWtEtAegaTByBHSRFYNd9Ap5wNG3US71VX6O/gbknzbSZmMtCYgesOZ8YlB5d7ix3zlI0GQ/uSn2wbVhO+2uwVyCEPFUtXT31YrR/I2TL/83Tm0ADIVeee14N0dLNBuNEbwS/O/HbDFtn5MQcYXJT0O+FIjARwdk30e5yyArcjZ13jhEEFATSK8KBpwYlv0e8fNmyJ3hKmnzAw16uwdRAv+WT2eTHTbPSHnuThy2uUWRKqDP6IOXqN1ES7IOhp8rN5n+8tJL7cy9RCnD9+VJE7W0vzyg8CwiJIqa2R42dUgFDWkbgB74e1gp/vRsB3qabyvAEU5smQwtSF5J1vtGMzTWufcOFGKzyZXlLO4EySkJ9xCjw5rADyfmJE0G87SiKQj76gotreVUprOeBtLXKk5qzJnCvnSB0uhZqVo/ifpihcY30APByII9fWNTFRVbC/65dcL5W3nKW0+PQh7VuQ8i5muIfwGw0C6okukOjnnCLZzrmJDIXHNJi7qkbhlsI8HmkuonLiFmx3GP+MjGtC8gIxi+pRkA==",b2={dlf:m2,godrej:g2,experion:x2,m3m:w2,max:y2,trump:v2},gu=(e="")=>String(e).toLowerCase().replace(/[^a-z0-9]/g,""),ml=(e="")=>String(e).trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g,""),Uf=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("").toUpperCase(),Ss=e=>`/developer/${encodeURIComponent((e==null?void 0:e.slug)||(e==null?void 0:e.id)||"")}`,gl=(e={})=>e.logo&&!/via\.placeholder\.com|dummyimage\.com/.test(e.logo)?e.logo:b2[ml(e.name)]||"",j2=(e,t)=>{const r=gu(t==null?void 0:t.developer);if(!r)return!1;if([e.name,...e.aliases||[]].map(gu).filter(Boolean).includes(r))return!0;const s=ml(e.name);return s.length>1&&s===ml(t.developer)},Hf=(e,t=[])=>t.filter(r=>j2(e,r)),_f=e=>e.city||String(e.location||"").split(",").pop().trim(),xu=12,A2=(e,t)=>{const r=Hf(e,t);return{id:e.id||e.name,name:e.name,logo:gl(e),count:e.count||parseInt(e.projects,10)||r.length,listed:r,link:Ss(e)}};function k2({developer:e}){const[t,r]=b.useState(!1);return!e.logo||t?n.jsx("span",{className:"hwdk-mono",children:Uf(e.name)}):n.jsx("img",{src:e.logo,alt:`${e.name} logo`,loading:"lazy",onError:()=>r(!0)})}function S2({builders:e=[],properties:t=[],content:r={}}){var k,C,p,f,m;const[i,s]=b.useState(!1),a=e.map(y=>A2(y,t));if(!a.length)return null;const o=i?a:a.slice(0,xu),l=a.reduce((y,S)=>y+S.count,0),c=a.reduce((y,S)=>y+S.listed.length,0),d=new Set(a.flatMap(y=>y.listed.map(_f)).filter(Boolean)).size,h=[[`${a.length}+`,"Developers"],l>0&&[`${l}+`,"Projects"],c>0&&[c,"Live Listings"],d>0&&[d,d===1?"City":"Cities"]].filter(Boolean),u=Array.isArray(r==null?void 0:r.stats)&&r.stats.length?r.stats.map(y=>[y.value,y.label]):h,g=((k=r==null?void 0:r.heading)==null?void 0:k.trim())||"Top Property Developers",j=((C=r==null?void 0:r.highlight)==null?void 0:C.trim())||((p=r==null?void 0:r.heading)!=null&&p.trim()?"":"Developers"),A=j?g.lastIndexOf(j):-1;return n.jsxs("section",{className:"hwdk",id:"developers",children:[n.jsx("div",{className:"hwdk-glow","aria-hidden":"true"}),n.jsxs("div",{className:"hwdk-wrap",children:[n.jsxs("header",{className:"hwdk-head",children:[n.jsxs("div",{className:"hwdk-eyebrow",children:[n.jsx("span",{}),((f=r==null?void 0:r.eyebrow)==null?void 0:f.trim())||"TRUSTED NAMES",n.jsx("span",{})]}),n.jsx("h2",{children:A<0?g:n.jsxs(n.Fragment,{children:[g.slice(0,A),n.jsx("em",{children:j}),g.slice(A+j.length)]})}),n.jsx("p",{children:((m=r==null?void 0:r.description)==null?void 0:m.trim())||"Partnering with India's most trusted builders to bring you the best properties."})]}),n.jsx("div",{className:"hwdk-grid",children:o.map(y=>n.jsxs(F,{to:y.link,className:"hwdk-tile","aria-label":`View ${y.name} projects`,children:[n.jsx("span",{className:`hwdk-plate${y.logo?"":" mono"}`,children:n.jsx(k2,{developer:y})}),n.jsx("strong",{children:y.name}),n.jsxs("span",{className:"hwdk-count",children:[y.count>0?`${y.count} ${y.count===1?"Project":"Projects"}`:"View projects",n.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})]})]},y.id))}),a.length>xu&&n.jsx("div",{className:"hwdk-more",children:n.jsx("button",{type:"button",onClick:()=>s(y=>!y),children:i?"Show fewer":`View all ${a.length} developers`})})]}),n.jsx("div",{className:"hwdk-statsband",children:n.jsx("div",{className:"hwdk-wrap hwdk-stats",children:u.map(([y,S])=>n.jsxs("div",{children:[n.jsx("b",{children:y}),n.jsx("small",{children:S})]},S))})}),n.jsx("style",{children:`
        .hwdk {
          position: relative; overflow: hidden; isolation: isolate;
          padding: 88px 0 0;
          background:
            radial-gradient(700px 320px at 50% -60px, rgba(212,175,55,.22), transparent 70%),
            linear-gradient(180deg, #0b0b0b 0%, #111 100%);
          color: #fff;
        }
        /* fine gold grid texture */
        .hwdk::before {
          content: ""; position: absolute; inset: 0; z-index: -1; opacity: .5;
          background-image:
            linear-gradient(rgba(212,175,55,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,.06) 1px, transparent 1px);
          background-size: 56px 56px;
          -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
          mask-image: radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
        }
        .hwdk-glow { position: absolute; z-index: -1; right: -160px; bottom: -160px; width: 460px; height: 460px; border-radius: 50%; background: radial-gradient(circle, rgba(212,175,55,.14), transparent 65%); }
        .hwdk-wrap { width: min(1240px, calc(100% - 48px)); margin: 0 auto; }

        /* heading */
        .hwdk-head { text-align: center; max-width: 720px; margin: 0 auto 50px; }
        .hwdk-eyebrow { display: inline-flex; align-items: center; gap: 14px; margin-bottom: 16px; color: #E8C766; font-size: 12px; font-weight: 800; letter-spacing: 3.5px; }
        .hwdk-eyebrow span { width: 34px; height: 1.5px; background: linear-gradient(90deg, transparent, #D4AF37); }
        .hwdk-eyebrow span:last-child { transform: scaleX(-1); }
        .hwdk-head h2 { margin: 0 0 14px; font-size: clamp(32px, 4vw, 54px); line-height: 1.05; font-weight: 800; letter-spacing: -1.2px; color: #fff; }
        .hwdk-head h2 em {
          font-style: normal;
          background: linear-gradient(135deg, #F3DC8E 0%, #D4AF37 45%, #9A7418 100%);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;
        }
        .hwdk-head p { margin: 0; color: rgba(255,255,255,.62); font-size: 16px; line-height: 1.65; }

        /* tiles */
        .hwdk-grid { --cols: 6; display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .hwdk-grid > .hwdk-tile { width: calc((100% - (var(--cols) - 1) * 16px) / var(--cols)); }
        .hwdk-tile {
          position: relative; display: flex; flex-direction: column; align-items: center; gap: 14px;
          padding: 22px 14px 18px; border-radius: 18px; text-decoration: none; text-align: center;
          background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.015));
          border: 1px solid rgba(212,175,55,.22);
          transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease, background .3s ease;
        }
        .hwdk-tile:hover {
          transform: translateY(-5px);
          border-color: #D4AF37;
          background: linear-gradient(180deg, rgba(212,175,55,.12), rgba(212,175,55,.02));
          box-shadow: 0 18px 40px rgba(0,0,0,.45), 0 0 0 1px rgba(212,175,55,.35), 0 0 30px rgba(212,175,55,.15);
        }
        .hwdk-plate {
          width: 100%; height: 76px; padding: 12px 16px; border-radius: 12px;
          display: grid; place-items: center; background: #fff;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,.04);
        }
        .hwdk-plate { overflow: hidden; }
        .hwdk-plate img { width: auto; height: auto; max-width: 100%; max-height: 52px; object-fit: contain; display: block; }
        .hwdk-plate.mono { background: transparent; box-shadow: none; padding: 0; overflow: visible; }
        .hwdk-mono {
          width: 54px; height: 54px; border-radius: 50%; display: grid; place-items: center;
          background: #0b0b0b; color: #E8C766; font-size: 17px; font-weight: 800; letter-spacing: 1.5px;
          box-shadow: 0 0 0 2px #D4AF37;
        }
        .hwdk-tile strong { font-size: 15px; font-weight: 700; color: #fff; line-height: 1.3; min-height: 2.6em; display: grid; place-items: center; }
        .hwdk-count { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 700; color: #E8C766; letter-spacing: .3px; }
        .hwdk-count svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; transition: transform .3s; }
        .hwdk-tile:hover .hwdk-count svg { transform: translateX(4px); }

        .hwdk-more { display: flex; justify-content: center; margin-top: 28px; }
        .hwdk-more button {
          height: 48px; padding: 0 28px; border-radius: 999px; cursor: pointer; font-family: inherit;
          border: 1px solid #D4AF37; background: transparent; color: #E8C766;
          font-size: 13px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase;
          transition: background .25s, color .25s;
        }
        .hwdk-more button:hover { background: linear-gradient(135deg, #E8C766, #D4AF37 50%, #9A7418); color: #111; }

        /* stats strip */
        .hwdk-statsband { position: relative; margin-top: 72px; background: #fff; border-bottom: 1px solid #efe9d8; }
        .hwdk-statsband::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 3px; background: linear-gradient(90deg, #9A7418, #E8C766 50%, #9A7418); }
        .hwdk-stats { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; }
        .hwdk-stats div { padding: 40px 12px 42px; text-align: center; }
        .hwdk-stats div + div { border-left: 1px solid #efe9d8; }
        .hwdk-stats b {
          display: block; font-size: clamp(32px, 3.4vw, 46px); font-weight: 800; line-height: 1; letter-spacing: -1px;
          background: linear-gradient(135deg, #D4AF37, #9A7418 60%, #7a5a10);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;
        }
        .hwdk-stats small { display: block; margin-top: 10px; font-size: 12px; font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase; color: #0b0b0b; }

        @media (max-width: 1100px) {
          .hwdk-grid { --cols: 4; }
        }
        @media (max-width: 760px) {
          .hwdk { padding-top: 60px; }
          .hwdk-wrap { width: calc(100% - 32px); }
          .hwdk-head { margin-bottom: 34px; }
          .hwdk-head p { font-size: 14.5px; }
          .hwdk-grid { --cols: 2; gap: 12px; }
          .hwdk-grid > .hwdk-tile { width: calc((100% - 12px) / 2); }
          .hwdk-tile { padding: 16px 10px 14px; gap: 10px; border-radius: 16px; }
          .hwdk-plate { height: 62px; padding: 10px 12px; }
          .hwdk-plate img { max-height: 42px; }
          .hwdk-tile strong { font-size: 14px; }
          .hwdk-statsband { margin-top: 48px; }
          .hwdk-stats { grid-auto-flow: row; grid-template-columns: 1fr 1fr; }
          .hwdk-stats div { padding: 24px 8px 26px; }
          .hwdk-stats div:nth-child(odd) { border-left: none; }
          .hwdk-stats div:nth-child(n+3) { border-top: 1px solid #efe9d8; }
        }
      `})]})}const $f=[{id:"t1",name:"Aayush Gupta",initials:"AG",color:"#F59E0B",platform:"Google",verified:!0,rating:5,text:"Rajesh ji is awesome. One place stop for all your real estate deals. Good natured, an honest and god fearing person."},{id:"t2",name:"Soumya",initials:"SO",color:"#E9D5FF",textColor:"#6B21A8",platform:"Google",verified:!0,rating:5,text:"Honestly, had a really smooth experience with HomWisor. The team was friendly and actually listened to what I needed. They didn't waste my time with random options."},{id:"t3",name:"Amit Kumar",initials:"AK",color:"#D6D3D1",textColor:"#44403C",platform:"Google",verified:!0,rating:5,text:"HomWisor made my home buying journey smooth and hassle-free. Their attention to detail and customer service is exceptional."},{id:"t4",name:"Neha Gupta",initials:"NG",color:"#10B981",platform:"Google",verified:!0,rating:5,text:"Very professional team with deep knowledge of the market. They helped me find the perfect investment property with great returns."}],E2={Google:{letter:"G",className:"google-g"},Facebook:{letter:"f",style:{background:"#1877F2",color:"#fff",borderRadius:"50%",width:18,height:18,display:"inline-grid",placeItems:"center",fontWeight:800}},Justdial:{letter:"Jd",style:{color:"#F97316",fontWeight:900}},Website:{letter:"★",style:{color:"#9A7418"}}},N2=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("").toUpperCase();function C2({t:e}){const[t,r]=b.useState(!1),i={background:e.color||"#E5E7EB",color:e.textColor||"#475569",overflow:"hidden"};return n.jsx("div",{className:"hw-testimonial-avatar",style:i,children:e.photo&&!t?n.jsx("img",{src:e.photo,alt:e.name,loading:"lazy",onError:()=>r(!0),style:{width:"100%",height:"100%",objectFit:"fill",display:"block"}}):e.initials||N2(e.name)})}function Gf({items:e,limit:t=4}){const r=(e||[]).slice(0,t);return r.length?n.jsx("div",{className:"hw-testimonial-grid",children:r.map(i=>{const s=Math.min(5,Math.max(1,Math.round(i.rating||5))),a=i.platform||"Google",o=E2[a];return n.jsxs("article",{className:"hw-testimonial-card",children:[n.jsxs("div",{className:"hw-testimonial-top",children:[n.jsx("div",{className:"hw-review-icon",style:{background:i.color||"#E5E7EB",color:i.textColor||"#64748B"},children:"“"}),a!=="Other"&&n.jsxs("div",{className:"hw-google",children:[n.jsx("span",{className:o==null?void 0:o.className,style:o==null?void 0:o.style,children:o==null?void 0:o.letter}),n.jsx("span",{children:a})]})]}),n.jsxs("div",{className:"hw-testimonial-stars","aria-label":`${s} out of 5 stars`,children:["★".repeat(s),s<5&&n.jsx("span",{style:{color:"#E5E7EB"},children:"★".repeat(5-s)})]}),n.jsxs("div",{className:"hw-testimonial-review",children:['"',i.text,'"']}),n.jsxs("div",{className:"hw-testimonial-user",children:[n.jsx(C2,{t:i}),n.jsxs("div",{className:"hw-testimonial-user-info",children:[n.jsx("div",{className:"hw-testimonial-name",children:i.name}),i.role?n.jsx("div",{className:"hw-testimonial-verified",style:{textTransform:"none",letterSpacing:0},children:i.role}):i.verified!==!1&&n.jsx("div",{className:"hw-testimonial-verified",children:"VERIFIED BUYER"})]})]})]},i.id)})}):null}const ot="#D4AF37";function ft(){return n.jsxs("footer",{style:{marginTop:40},children:[n.jsx("div",{style:{background:"linear-gradient(130deg, #000000 0%, #2a1a05 40%, #D4AF37 100%)",borderTop:`3px solid ${ot}`,borderBottom:"1px solid rgba(0,0,0,.1)"},children:n.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 16px",gap:16,flexWrap:"wrap"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.25)",display:"grid",placeItems:"center",backdropFilter:"blur(8px)"},children:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[n.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),n.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:800,fontSize:22,color:"#fff",lineHeight:1.1},children:"Looking for Your Dream Property?"}),n.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,.85)",marginTop:2},children:"Experts online now · Response within 5 minutes"})]})]}),n.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[n.jsxs("a",{href:"tel:919090101401",style:{display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#111",padding:"10px 18px",borderRadius:10,fontWeight:800,fontSize:13,boxShadow:"0 4px 14px rgba(0,0,0,.2)"},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"1.7",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"Call Now"]}),n.jsxs("a",{href:"https://wa.me/919090101401",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13,backdropFilter:"blur(6px)"},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#fff",children:n.jsx("path",{d:"M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.15 6.45 2.15 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.02-5.14-2.87-7.01zm-7.01 15.23h-.01c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.68-8.24 8.21-8.24 2.19 0 4.25.85 5.79 2.4a8.215 8.215 0 0 1 2.41 5.83c0 4.55-3.68 8.24-8.21 8.24zm6.91-6.17c-.38-.19-2.24-1.11-2.59-1.23-.35-.13-.61-.19-.87.19s-1 1.23-1.22 1.49-.44.29-.82.1c-.38-.19-1.61-.59-3.06-1.89-1.13-1.01-1.89-2.26-2.11-2.64-.22-.38-.02-.59.17-.78.17-.17.38-.44.57-.66.19-.22.25-.38.38-.64.13-.25.06-.47-.03-.66-.09-.19-.87-2.1-1.19-2.88-.31-.74-.63-.64-.87-.66l-.74-.01c-.25 0-.66.1-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.65 4.06 6.62 5.69.93.4 1.65.64 2.21.82.93.29 1.78.25 2.45.15.75-.11 2.24-.92 2.56-1.81.32-.89.32-1.65.22-1.81-.09-.16-.35-.25-.73-.44z"})}),"WhatsApp"]}),n.jsxs("a",{href:"#contact",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13},children:[n.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),n.jsx("path",{d:"M16 2v4"}),n.jsx("path",{d:"M8 2v4"}),n.jsx("path",{d:"M3 10h18"})]}),"Schedule Visit"]})]})]})}),n.jsx("div",{style:{background:"#0A0A0A",color:"rgba(255,255,255,.75)",borderTop:"1px solid #1a1a1a"},children:n.jsxs("div",{className:"container",style:{padding:"36px 16px 18px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:24},className:"footer-grid",children:[n.jsxs("div",{children:[n.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:n.jsx("img",{src:Js,alt:"HomWisor",style:{width:145,height:"auto",display:"block",objectFit:"contain"}})}),n.jsx("div",{style:{height:1,background:"linear-gradient(90deg, rgba(212,175,55,.4), transparent)",margin:"14px 0"}}),n.jsx("p",{style:{fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,.65)"},children:"Your Gateway to India’s Most Exclusive Real Estate."}),n.jsxs("div",{style:{display:"grid",gap:10,marginTop:16},children:[n.jsxs("a",{href:"tel:+919090101401",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[n.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",color:ot,flexShrink:0},children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:ot,strokeWidth:"1.7",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),"+91 9090101401"]}),n.jsxs("a",{href:"mailto:support@homwisor.com",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[n.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:ot,strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),"support@homwisor.com"]})]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${ot}`,display:"inline-block",paddingBottom:6},children:"QUICK LINKS"}),n.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[n.jsx(F,{to:"/",style:{color:"rgba(255,255,255,.7)"},children:"Home"}),n.jsx(F,{to:"/about",style:{color:"rgba(255,255,255,.7)"},children:"About Us"}),n.jsx(F,{to:"/blog",style:{color:"rgba(255,255,255,.7)"},children:"Blog"}),n.jsx(F,{to:"/contact",style:{color:"rgba(255,255,255,.7)"},children:"Contact"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${ot}`,display:"inline-block",paddingBottom:6},children:"TOOLS & SERVICES"}),n.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[n.jsx(F,{to:"/privacy-policy",style:{color:"rgba(255,255,255,.7)"},children:"Privacy Policy"}),n.jsx(F,{to:"/terms-and-conditions",style:{color:"rgba(255,255,255,.7)"},children:"Terms & Conditions"}),n.jsx("a",{href:"#",style:{color:"rgba(255,255,255,.7)"},children:"Disclaimer"}),"              "]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${ot}`,display:"inline-block",paddingBottom:6},children:"ADDRESS"}),n.jsx("div",{style:{display:"grid",gap:12,fontSize:13},children:n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,color:"rgba(255,255,255,.7)",lineHeight:1.6},children:[n.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0,marginTop:1},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:ot,strokeWidth:"1.7",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),n.jsx("span",{children:"Unit no : 704 , Sohna Road , ILD Trade Centre, Gurugram , Haryana , 122018"})]})})]})]}),n.jsxs("div",{style:{borderTop:"1px solid #1a1a1a",marginTop:28,paddingTop:14,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12,fontSize:12,color:"rgba(255,255,255,.45)"},children:[n.jsx("span",{children:"© 2026 HomWisor.com — YOUR CHOOSEN ONE, All rights reserved. | RERA Registered"}),n.jsxs("span",{style:{display:"flex",gap:10,alignItems:"center"},children:[n.jsx("a",{href:"https://www.facebook.com/p/Homwisor-Consultant-Pvt-Ltd-100063724465215/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:ot,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:n.jsx("i",{className:"fa-brands fa-facebook-f"})}),n.jsx("a",{href:"https://www.instagram.com/homwisor/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:ot,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:n.jsx("i",{className:"fa-brands fa-instagram"})}),n.jsx("a",{href:"https://www.youtube.com/@HomwisorConsultants",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:ot,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:n.jsx("i",{className:"fa-brands fa-youtube"})}),n.jsx("a",{href:"https://www.linkedin.com/checkpoint/challenge/AgGnqOFm7uEMXwAAAaDiLdR1eKRji-_VqyEWvji7ntzt5HEv1pp-rFc6fD1Adq5RajztgTQHf0Edw_f4yhIZExU-nwz7tg?ut=1ckL1ZscIkmss1",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:ot,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:n.jsx("i",{className:"fa-brands fa-linkedin-in"})})]})]})]})}),n.jsx("style",{children:`
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
      `})]})}const R2=["Buying a Property","Selling a Property","Property Investment","Site Visit","General Enquiry"],P2=5e3,Vf="hw_lead_popup_sent",O2=7,T2={name:"",phone:"",email:"",subject:"",message:"",website:""},L2=()=>{try{const e=Number(localStorage.getItem(Vf));return e&&Date.now()-e<O2*864e5}catch{return!1}};function Nc({context:e=""}){const[t,r]=b.useState(!1),[i,s]=b.useState(T2),[a,o]=b.useState("idle"),[l,c]=b.useState(""),d=u=>g=>s(j=>({...j,[u]:g.target.value}));if(b.useEffect(()=>{if(L2())return;const u=setTimeout(()=>r(!0),P2);return()=>clearTimeout(u)},[]),b.useEffect(()=>{if(!t)return;const u=g=>g.key==="Escape"&&r(!1);return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[t]),!t)return null;const h=async u=>{var g,j;if(u.preventDefault(),i.name.trim().length<2)return c("Please enter your name");if(!/^\+?[\d\s-]{10,15}$/.test(i.phone.trim()))return c("Please enter a valid mobile number");if(!i.subject)return c("Please choose what you're interested in");c(""),o("sending");try{await J.post("/enquiries",{name:i.name.trim(),phone:i.phone.trim(),email:i.email.trim(),subject:i.subject,property:e?`${i.subject} — ${e}`:i.subject,message:i.message.trim()||`${i.subject} (popup form)`,source:"popup",page:window.location.pathname,website:i.website}),o("sent");try{localStorage.setItem(Vf,String(Date.now()))}catch{}}catch(A){o("idle"),c(((j=(g=A==null?void 0:A.response)==null?void 0:g.data)==null?void 0:j.error)||"Could not send right now. Please call us instead.")}};return n.jsx("div",{className:"lp-back",role:"dialog","aria-modal":"true","aria-label":"Get in touch",onClick:()=>r(!1),children:n.jsxs("div",{className:"lp-box",onClick:u=>u.stopPropagation(),children:[n.jsx("button",{type:"button",className:"lp-x",onClick:()=>r(!1),"aria-label":"Close",children:"✕"}),a==="sent"?n.jsxs("div",{className:"lp-done",children:[n.jsx("span",{children:"✓"}),n.jsx("h2",{children:"Thank you!"}),n.jsx("p",{children:"Our property expert will contact you shortly."}),n.jsx("button",{type:"button",className:"lp-submit",onClick:()=>r(!1),children:"Close"})]}):n.jsxs("form",{onSubmit:h,noValidate:!0,children:[n.jsx("span",{className:"lp-eyebrow",children:"TALK TO AN EXPERT"}),n.jsxs("h2",{children:["Find your ",n.jsx("em",{children:"dream property"})]}),n.jsx("p",{className:"lp-sub",children:"Share your details and our property expert will call you back."}),n.jsxs("div",{className:"lp-grid",children:[n.jsxs("label",{children:["Your Name",n.jsx("input",{value:i.name,onChange:d("name"),placeholder:"Enter your name",autoComplete:"name"})]}),n.jsxs("label",{children:["Phone Number",n.jsx("input",{value:i.phone,onChange:d("phone"),placeholder:"+91 XXXXX XXXXX",inputMode:"tel",autoComplete:"tel"})]}),n.jsxs("label",{className:"full",children:["Email Address",n.jsx("input",{value:i.email,onChange:d("email"),placeholder:"Enter your email",inputMode:"email",autoComplete:"email"})]}),n.jsxs("label",{className:"full",children:["I'm Interested In",n.jsxs("select",{value:i.subject,onChange:d("subject"),children:[n.jsx("option",{value:"",children:"Select an option"}),R2.map(u=>n.jsx("option",{children:u},u))]})]}),n.jsxs("label",{className:"full",children:["Message",n.jsx("textarea",{value:i.message,onChange:d("message"),rows:2,placeholder:"Tell us how we can help you..."})]}),n.jsx("input",{className:"lp-trap",tabIndex:-1,autoComplete:"off",value:i.website,onChange:d("website"),"aria-hidden":"true"})]}),l&&n.jsx("div",{className:"lp-err",role:"alert",children:l}),n.jsx("button",{type:"submit",className:"lp-submit",disabled:a==="sending",children:a==="sending"?"Sending…":"Send Message →"})]})]})})}const io="#D4AF37",wu="#B9943A";function M2(){const[e,t]=b.useState({hero:[],slider:[],small:[]}),[r,i]=b.useState([]),[s,a]=b.useState([]),[o,l]=b.useState([]),[c,d]=b.useState([]),[h,u]=b.useState(void 0),[g,j]=b.useState([]),[A,k]=b.useState({}),[C,p]=b.useState({}),[f,m]=b.useState(!0);b.useEffect(()=>{async function P(){try{const[_,ue,ce,ge,T,W,U,Y,$]=await Promise.all([J.get("/banners"),J.get("/properties"),J.get("/locations"),J.get("/offers"),J.get("/builders").catch(()=>({data:[]})),J.get("/testimonials").catch(()=>({data:null})),J.get("/recommended").catch(()=>({data:[]})),J.get("/features/branded").catch(()=>({data:{}})),J.get("/features/developers").catch(()=>({data:{}}))]);t(_.data),i(ue.data),a(ce.data),l(ge.data),d(T.data||[]),u(W.data??null),j(U.data||[]),k(Y.data||{}),p($.data||{})}catch(_){console.error(_),u(ue=>ue===void 0?null:ue)}finally{m(!1)}}P()},[]),r.filter(P=>P.category==="recommended").slice(0,4),r.filter(P=>P.category==="trending").slice(0,4);const y=r.filter(P=>["₹19","₹28","₹16","₹5.2"].some(_=>P.priceRange&&P.priceRange.includes(_))||P.category==="trending").slice(0,4);[r.find(P=>P.title&&P.title.includes("Oberoi Three Sixty"))||r.find(P=>P.title&&P.title.includes("BPTP"))||y[0],r.find(P=>P.title&&P.title.includes("Experion One 42"))||y[1],r.find(P=>P.title&&P.title.includes("Max Estate 59"))||y[2],r.find(P=>P.title&&P.title.includes("BPTP DownTown"))||y[3]].filter(Boolean).slice(0,4);const S=r.filter(P=>P.category==="commercial").slice(0,4),E=r.filter(P=>P.category==="sco").slice(0,4),w=r.filter(P=>P.category==="upcoming").slice(0,4),R=r.filter(P=>P.category==="newlaunch").slice(0,4);if(f)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#fff"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{width:48,height:48,border:"3px solid #eee",borderTopColor:io,borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 12px"}}),n.jsx("div",{style:{fontWeight:600,color:"#6b7280"},children:"Loading HomWisor luxury..."}),n.jsx("style",{children:`
              @keyframes spin{
                to{
                  transform:rotate(360deg)
                }
              }
            `})]})});S.length>=4||r.slice(4,8),E.length>=4||r.slice(8,12);const z=[{name:"Studio",sub:"Apartment",place:"in Gurugram",count:"320+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop"},{name:"1 BHK",sub:"in Gurugram",count:"980+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=500&fit=crop"},{name:"2 BHK",sub:"in Gurugram",count:"1,450+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop"},{name:"3 BHK",sub:"in Gurugram",count:"760+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop"},{name:"4 BHK",sub:"in Gurugram",count:"410+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop"},{name:"5 BHK",sub:"in Gurugram",count:"180+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=500&fit=crop"},{name:"Penthouse",sub:"in Gurugram",count:"95+ Properties",dark:!0,img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop"}];c.length;const B=P=>(P||[]).map(_=>_!=null&&_.link?{..._,link:Xn(_.link,r)}:_),N=h===null?$f:h,M=n.jsxs("section",{className:"container hw-bhk-premium-section",style:{padding:"38px 16px 0"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:2},children:[n.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}}),n.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2.5,color:"#9A7A22"},children:"HOMWISOR"}),n.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}})]}),n.jsx("h2",{style:{fontSize:29,lineHeight:1.08,fontWeight:800,color:"#102A43",margin:"2px 0 3px",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.5px"},children:"Which BHK Is Right for You?"}),n.jsx("p",{style:{fontSize:11,color:"#64748B",margin:0,lineHeight:1.4},children:"Choose a size and see matching homes in Gurugram."}),n.jsx("div",{className:"bhk-grid hw-bhk-premium-grid",style:{display:"grid",gridTemplateColumns:"repeat(6, minmax(0, 1fr))",gap:9,marginTop:10,overflowX:"auto",paddingBottom:2},children:z.slice(0,6).map((P,_)=>{const ue=[{bg:"#FFF8ED",iconBg:"#FFF0D6",icon:"#A87522"},{bg:"#F2F8FD",iconBg:"#DDECF8",icon:"#2871A8"},{bg:"#FFF5F6",iconBg:"#FBE0E3",icon:"#C75B66"},{bg:"#F3F6FC",iconBg:"#DDE7F7",icon:"#31598C"},{bg:"#F2F8F3",iconBg:"#DDEEDC",icon:"#5B7D3C"},{bg:"#F6F2FC",iconBg:"#E7DFF7",icon:"#66509A"}][_],ce=["▦","▰","▰","♟","◇","♛"];return n.jsxs(F,{to:`/search?bhk=${encodeURIComponent(P.name)}`,className:"hw-bhk-premium-card",style:{minWidth:0,borderRadius:7,overflow:"hidden",border:"1px solid #E5E7EB",background:ue.bg,display:"block",textDecoration:"none",boxShadow:"0 1px 5px rgba(15,23,42,.04)"},children:[n.jsxs("div",{style:{padding:"8px 8px 7px",minHeight:103},children:[n.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:ue.iconBg,color:ue.icon,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,marginBottom:7},children:ce[_]}),n.jsx("div",{style:{fontSize:13,lineHeight:1.1,fontWeight:800,color:"#183B5B"},children:P.name}),n.jsx("div",{style:{fontSize:8.5,fontWeight:600,color:"#64748B",marginTop:2},children:[P.sub,P.place].filter(Boolean).join(" ")}),n.jsx("div",{style:{fontSize:8,color:"#64748B",marginTop:8},children:P.count})]}),n.jsxs("div",{style:{height:143,position:"relative",overflow:"hidden"},children:[n.jsx("img",{src:P.img,alt:P.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),n.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:38,background:"linear-gradient(to top, rgba(15,23,42,.22), transparent)"}})]})]},P.name)})})]});return n.jsxs("div",{style:{background:"#fcfcfc"},children:[n.jsx(Xe,{}),n.jsxs("section",{className:"hw-home-hero",children:[n.jsx(Kw,{banners:B(e.hero)}),n.jsx("div",{className:"hw-search-overlay",children:n.jsx(Zw,{})})]}),n.jsx("section",{className:"hw-new-premium-slider",children:n.jsx(r2,{banners:B(e.slider)})}),n.jsx(o2,{items:B(g)}),n.jsx(f2,{bhkSection:M,brandedFeature:A,properties:r,locations:s,upcoming:w,newlaunch:R,offers:o,promos:B(e.small),branded:r.filter(P=>P.category==="branded").slice(0,4),luxury:r.filter(P=>P.category==="luxury").slice(0,4)}),n.jsx(S2,{builders:c,properties:r,content:C}),(N==null?void 0:N.length)>0&&n.jsxs("section",{className:"container hw-testimonials-premium",style:{padding:"34px 16px 0"},children:[n.jsxs("section",{className:"container hw-testimonials-premium",children:[n.jsxs("div",{className:"hw-testimonial-heading",children:[n.jsxs("div",{className:"hw-testimonial-eyebrow",children:[n.jsx("span",{}),n.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),n.jsx("span",{})]}),n.jsx("h2",{children:"Customer Testimonials"}),n.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),n.jsx(Gf,{items:N,limit:4})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:6,marginTop:10},children:[0,1,2,3].map((P,_)=>n.jsx("span",{style:{width:_===0?7:6,height:_===0?7:6,borderRadius:"50%",background:_===0?wu:"#D1D5DB",display:"none"}},P))})]}),n.jsxs("section",{className:"container hw-why-premium-section",style:{padding:"30px 16px 0"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:18},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:4},children:[n.jsx("span",{style:{width:34,height:1,background:io,display:"inline-block"}}),n.jsx("span",{style:{fontSize:10,letterSpacing:2.5,fontWeight:800,color:"#9A7A22"},children:"HOMWISOR"}),n.jsx("span",{style:{width:34,height:1,background:io,display:"inline-block"}})]}),n.jsx("h2",{style:{margin:0,fontSize:36,lineHeight:1.08,fontWeight:800,color:"#102A43",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.4px"},children:"Why Buyers Trust Homwisor"}),n.jsx("p",{style:{margin:"5px auto 0",maxWidth:650,fontSize:12,lineHeight:1.5,color:"#64748B"},children:"We verify every property, get you the builder's price and stay with you until the keys are in your hand."})]}),n.jsx("div",{className:"hw-why-feature-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:[{no:"01",title:"100% Verified Listings",desc:"Every property listing undergoes rigorous physical and legal verification. Genuine photos, accurate pricing, and title ownership put fake listings.",icon:"✓",iconBg:"#FFF0D2",iconColor:"#A66A18",bg:"#FFF9EF",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&h=520&fit=crop"},{no:"02",title:"Direct Builder Rates",desc:"We connect you directly with top-tier developers, ensuring transparent deal structures, best price guarantees, and zero hidden brokerage charges.",icon:"◇",iconBg:"#E5F0FC",iconColor:"#376D9F",bg:"#F4F9FD",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=520&fit=crop"},{no:"03",title:"Free Guided Site Visits",desc:"Schedule doorstep property site visits with experienced specialists who provide personalized advice tailored to your budget.",icon:"♟",iconBg:"#DDF0DE",iconColor:"#3F7D4C",bg:"#F3FAF3",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=520&fit=crop"}].map(P=>n.jsxs("div",{className:"hw-why-feature-card",style:{position:"relative",minWidth:0,overflow:"hidden",borderRadius:6,border:"1px solid #E5E7EB",background:P.bg,display:"flex"},children:[n.jsxs("div",{style:{position:"relative",zIndex:2,width:"58%",padding:"17px 14px 10px",background:P.bg,clipPath:"ellipse(90% 78% at 0% 50%)"},children:[n.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:P.iconBg,color:P.iconColor,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:900,marginBottom:6},children:P.icon}),n.jsx("div",{style:{width:26,height:1,background:P.iconColor,opacity:.35,margin:"0 0 5px"}}),n.jsx("div",{style:{fontSize:15,lineHeight:1.12,fontWeight:800,color:"#17324D"},children:P.title}),n.jsx("div",{style:{fontSize:11.2,lineHeight:1.4,color:"#64748B",marginTop:5,maxWidth:170},children:P.desc}),n.jsx("div",{style:{position:"absolute",left:10,bottom:2,fontSize:28,lineHeight:1,fontWeight:800,color:P.iconColor,opacity:.2},children:P.no})]}),n.jsx("div",{style:{position:"absolute",inset:"0 0 0 42%",overflow:"hidden"},children:n.jsx("img",{src:P.image,alt:P.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}})})]},P.title))}),n.jsx("div",{className:"hw-why-stats",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",marginTop:7,background:"#fff",border:"1px solid #E8E1D3",borderRadius:5,overflow:"hidden",boxShadow:"0 2px 8px rgba(15,23,42,.05)"},children:[["25K+","Verified Properties","▦"],["10K+","Happy Customers","♟"],["500+","Top Developers","▦"],["50+","Cities Covered","●"],["24×7","Expert Support","◉"]].map((P,_)=>n.jsxs("div",{style:{minWidth:0,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"11px 7px",borderRight:_<4?"1px solid #E8E1D3":"none"},children:[n.jsx("div",{style:{width:30,height:30,flexShrink:0,borderRadius:"50%",background:"#FFF7ED",color:wu,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800},children:P[2]}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:{fontSize:12,lineHeight:1,fontWeight:800,color:"#17324D"},children:P[0]}),n.jsx("div",{style:{fontSize:10,lineHeight:1.25,color:"#64748B",marginTop:2,whiteSpace:"nowrap"},children:P[1]})]})]},P[1]))})]}),n.jsx(ft,{}),n.jsx(Nc,{context:"Homepage"})]})}const z2="/assets/test1-Bhn6Q40Z.png",I2="/assets/test2-4YsetXgN.png",B2="/assets/test3-CgDiknys.png",F2="/assets/test4-DV0Q2HbY.png",Et="#D4AF37",vn="#9A7418",D2="#090909",W2=[z2,I2,B2,F2],U2=[["01","Integrity","We build relationships through honest guidance and responsible advice."],["02","Accountability","We stay involved and take responsibility throughout the property journey."],["03","Professionalism","Experienced, informed and focused on delivering a smooth experience."],["04","Customer First","Your requirements, priorities and long-term goals remain at the centre."],["05","Transparency","Clear communication and straightforward property guidance at every step."],["06","Improvement","We continuously improve our market knowledge and client experience."]],H2=[{name:"Mr. Brejendra Singh",role:"Founder & CEO",text:"A real estate veteran with 15+ years of expertise, known for deep market knowledge and investment insights."},{name:"Mr. Birendra Patel",role:"Founder & CMO",text:"Brings over 13 years of distinguished real estate experience with a strong focus on market intelligence."},{name:"Mr. Lokendra Singh",role:"Manager",text:"Brings deep knowledge of Gurgaon micro-markets with a strong market understanding and client-focused approach."},{name:"Mr. Mukul Yadav",role:"Manager",text:"A dedicated real estate consultant focused on helping clients find the right investment opportunities."}],_2=[{date:"JUL 30, 2026",category:"REAL ESTATE NEWS",title:"Moti Nagar Metro Station on Delhi Metro Blue Line",text:"Explore connectivity, location advantages and the role of the Blue Line in West Delhi real estate."},{date:"JUL 29, 2026",category:"REAL ESTATE NEWS",title:"BPTP Downtown 66 Phase 2 Is Here",text:"A look at the new phase and what buyers should know about the Gurgaon development."},{date:"JUL 28, 2026",category:"REAL ESTATE NEWS",title:"Sector 49 Gurgaon: Real Estate Prices & Metro Expansion",text:"Understand the locality, connectivity and changing real estate landscape of Sector 49 Gurgaon."}];function $2(){const[e,t]=b.useState(void 0);b.useEffect(()=>{let i=!0;return J.get("/testimonials").then(s=>i&&t(s.data||[])).catch(()=>i&&t(null)),()=>{i=!1}},[]);const r=e===null?$f:e||[];return n.jsxs("div",{className:"about-page",children:[n.jsx(Xe,{}),n.jsxs("section",{className:"about-hero",children:[n.jsx("div",{className:"about-hero-overlay"}),n.jsx("div",{className:"about-hero-glow"}),n.jsx("div",{className:"about-hero-grid"}),n.jsxs("div",{className:"about-container about-hero-inner",children:[n.jsx("div",{className:"about-kicker",children:"TRUSTED REAL ESTATE CONSULTANTS"}),n.jsxs("h1",{children:["Real Estate,",n.jsx("br",{}),n.jsx("span",{children:"Guided With Wisdom."})]}),n.jsx("p",{children:"Since 2016, we’ve guided families and investors toward the perfect homes, premium office spaces, and smart real estate opportunities across Gurgaon and Delhi NCR."}),n.jsx("div",{className:"about-hero-actions",children:n.jsx("a",{href:"/contact/",className:"about-btn about-btn-gold",children:"Talk to an Expert"})})]})]}),n.jsx("section",{className:"about-section about-who",children:n.jsxs("div",{className:"about-container about-two-col",children:[n.jsxs("div",{className:"about-real-image",children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88",alt:"Premium modern home interior"}),n.jsxs("div",{className:"image-overlay-card",children:[n.jsx("span",{children:"EST. 2016"}),n.jsx("strong",{children:"Homwisor"}),n.jsx("small",{children:"Real Estate Consultants"})]}),n.jsx("div",{className:"image-corner-number",children:"01"})]}),n.jsxs("div",{className:"about-copy",children:[n.jsx("div",{className:"about-eyebrow",children:"WHO WE ARE"}),n.jsx("h2",{children:"Property is more than a transaction."}),n.jsx("p",{children:"Homwisor Consultant believes that buying a property is more than just a transaction — it is a life-changing decision connected to dreams, security and future growth."}),n.jsx("p",{children:"Built on the vision of combining the comfort of a dream home with the wisdom of expert real estate guidance, Homwisor helps clients navigate property opportunities with clarity and confidence."}),n.jsxs("div",{className:"about-points",children:[n.jsxs("div",{children:[n.jsx("b",{children:"✓"}),"Expert property guidance"]}),n.jsxs("div",{children:[n.jsx("b",{children:"✓"}),"Market-focused recommendations"]}),n.jsxs("div",{children:[n.jsx("b",{children:"✓"}),"Residential & commercial expertise"]}),n.jsxs("div",{children:[n.jsx("b",{children:"✓"}),"Support throughout the journey"]})]})]})]})}),n.jsx("section",{className:"about-section about-values",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"about-heading-center",children:[n.jsx("div",{className:"about-eyebrow",children:"OUR CORE VALUES"}),n.jsxs("h2",{children:["Principles that shape ",n.jsx("span",{children:"Homwisor."})]}),n.jsx("p",{children:"Integrity, accountability, professionalism and a customer-first approach at every step."})]}),n.jsx("div",{className:"values-grid",children:U2.map(([i,s,a])=>n.jsxs("article",{className:"value-card",children:[n.jsxs("div",{className:"value-top",children:[n.jsx("span",{children:i}),n.jsx("i",{children:"↗"})]}),n.jsx("h3",{children:s}),n.jsx("p",{children:a})]},s))})]})}),n.jsx("section",{className:"about-section about-leaders",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"about-heading-row",children:[n.jsxs("div",{children:[n.jsx("div",{className:"about-eyebrow",children:"OUR TEAM"}),n.jsxs("h2",{children:["Visionary ",n.jsx("span",{children:"Real Estate Leaders"})]})]}),n.jsx("p",{children:"Experienced professionals bringing market knowledge and client-focused real estate guidance."})]}),n.jsx("div",{className:"leaders-grid",children:H2.map((i,s)=>n.jsxs("article",{className:"leader-card",children:[n.jsxs("div",{className:"leader-image-wrap",children:[n.jsx("img",{src:W2[s],alt:`${i.name} professional portrait`}),n.jsxs("div",{className:"leader-number",children:["0",s+1]})]}),n.jsxs("div",{className:"leader-content",children:[n.jsx("div",{className:"leader-role",children:i.role}),n.jsx("h3",{children:i.name}),n.jsx("p",{children:i.text})]})]},i.name))})]})}),n.jsx("section",{className:"about-section about-news",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"about-heading-row",children:[n.jsxs("div",{children:[n.jsx("div",{className:"about-eyebrow",children:"READ FROM OUR BLOGS & NEWS"}),n.jsxs("h2",{children:["Insights for ",n.jsx("span",{children:"smarter decisions."})]})]}),n.jsxs("a",{href:"/blog/",className:"news-link",children:["View All Articles ",n.jsx("span",{children:"↗"})]})]}),n.jsx("div",{className:"blog-grid",children:_2.map(i=>n.jsxs("article",{className:"blog-card",children:[n.jsxs("div",{className:"blog-image",children:[n.jsx("img",{src:`https://images.unsplash.com/photo-${i.title.includes("Moti")?"1477959858617-67f85cf4f1df":i.title.includes("BPTP")?"1564013799919-ab600027ffc6":"1560518883-ce09059eeffa"}?auto=format&fit=crop&w=900&q=82`,alt:"Real estate news"}),n.jsx("span",{children:i.category})]}),n.jsxs("div",{className:"blog-content",children:[n.jsx("small",{children:i.date}),n.jsx("h3",{children:i.title}),n.jsx("p",{children:i.text}),n.jsxs("a",{href:"/blog/",children:["Read Article ",n.jsx("span",{children:"→"})]})]})]},i.title))})]})}),r.length>0&&n.jsx("section",{className:"about-section about-testimonials hw-testimonials-premium",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"hw-testimonial-heading",children:[n.jsxs("div",{className:"hw-testimonial-eyebrow",children:[n.jsx("span",{}),n.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),n.jsx("span",{})]}),n.jsx("h2",{children:"Customer Testimonials"}),n.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),n.jsx(Gf,{items:r,limit:4})]})}),n.jsx(ft,{}),n.jsx("style",{children:`

        * {
          box-sizing: border-box;
        }


        .about-page {
          min-height: 100vh;
          background: #f7f7f5;
          color: #111111;
          font-family: "Manrope","Inter",Arial,sans-serif;
          overflow: hidden;
          -webkit-font-smoothing: antialiased;
        }


        .about-page,
        .about-page *,
        .about-page input,
        .about-page select,
        .about-page button,
        .about-page textarea {
          font-family: "Manrope","Inter",Arial,sans-serif !important;
        }


        .about-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .about-hero {
          min-height: 500px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;

          background-image: url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          color: #fff;
        }

        .about-hero:after {
          display: none;
          content: "";
          position: absolute;

          width: 580px;
          height: 580px;

          right: -180px;
          bottom: -260px;

          border: 1px solid rgba(212,175,55,.34);
          border-radius: 50%;

          box-shadow:
            0 0 0 65px rgba(212,175,55,.045),
            0 0 0 130px rgba(212,175,55,.025);

          pointer-events: none;
        }


        .about-hero-glow {
          display: none;
          position: absolute;

          width: 500px;
          height: 500px;

          right: 10%;
          top: 8%;

          border-radius: 50%;

          background: rgba(212,175,55,.08);

          filter: blur(85px);

          pointer-events: none;
        }


        .about-hero-grid {
          display: none;
        }


        .about-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(90deg, rgba(5,20,38,.92) 0%, rgba(8,23,42,.72) 45%, rgba(5,18,34,.78) 100%);
        }


        .about-hero-inner {
          position: relative;
          z-index: 2;

          width: 100%;

          padding: 120px 20px 70px;

          text-align: center;
        }


        .about-kicker,
        .about-eyebrow {
          color: ${Et};
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }


        .about-hero h1 {
          max-width: 760px;

          margin: 15px auto 0;

          color: #fff;

          font-size: clamp(38px,5vw,64px);
          line-height: 1.08;

          font-weight: 850;

          letter-spacing: -2px;
        }


        .about-hero h1 span {
          color: ${Et};
          display: block;
        }


        .about-hero p {
          max-width: 600px;

          margin: 20px auto 0;

          color: rgba(255,255,255,.78);

          font-size: 14px;
          line-height: 1.8;
        }


        .about-hero-actions {
          display: none;
        }


        .about-btn {
          min-height: 48px;

          padding: 0 24px;

          border-radius: 8px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          text-decoration: none;

          font-size: 12px;
          font-weight: 800;

          transition: .25s ease;
        }


        .about-btn-gold {
          background: ${Et};
          color: #111;
        }


        .about-btn-gold:hover {
          background: #e6c454;
          transform: translateY(-2px);
        }


        .about-btn-light {
          border: 1px solid rgba(255,255,255,.28);
          color: #fff;
          background: rgba(255,255,255,.05);
        }


        .about-btn-light:hover {
          background: #fff;
          color: #111;
        }


        .hero-scroll-label {
          margin-top: 80px;

          color: rgba(255,255,255,.4);

          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 800;
        }


        .hero-scroll-label span {
          color: ${Et};
          font-size: 15px;
          margin-left: 8px;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .about-stats-wrap {
          position: relative;
          z-index: 5;

          margin-top: -55px;
        }


        .about-stats {
          display: grid;

          grid-template-columns: repeat(4,1fr);

          background: #fff;

          border: 1px solid #e7e4dc;

          border-radius: 18px;

          box-shadow: 0 18px 50px rgba(0,0,0,.08);

          overflow: hidden;
        }


        .about-stats div {
          padding: 27px 25px;

          border-right: 1px solid #eeeae1;
        }


        .about-stats div:last-child {
          border-right: 0;
        }


        .about-stats strong {
          display: block;

          font-size: 30px;
          font-weight: 900;

          color: ${D2};
        }


        .about-stats span {
          display: block;

          margin-top: 5px;

          color: #777;

          font-size: 11px;
          font-weight: 700;
        }


        /* =====================================================
           GENERAL SECTIONS
        ===================================================== */

        .about-section {
          padding: 56px 0;
        }


        .about-who,
        .about-leaders,
        .about-testimonials {
          background: #fff;
        }


        .about-values,
        .about-news {
          background: #f7f7f5;
        }


        /* =====================================================
           WHO WE ARE
        ===================================================== */

        .about-two-col {
          display: grid;

          grid-template-columns: .95fr 1.05fr;

          gap: 55px;

          align-items: center;
        }


        .about-real-image {
          height: 470px;

          position: relative;

          border-radius: 22px;

          overflow: hidden;

          background: #111;

          box-shadow: 0 24px 60px rgba(0,0,0,.12);
        }


        .about-real-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }


        .about-real-image:after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0,0,0,.58),
              transparent 55%
            );

          pointer-events: none;
        }


        .image-overlay-card {
          position: absolute;

          z-index: 2;

          left: 26px;
          bottom: 26px;

          color: #fff;
        }


        .image-overlay-card span {
          display: block;

          color: ${Et};

          font-size: 10px;

          letter-spacing: 2px;

          font-weight: 800;
        }


        .image-overlay-card strong {
          display: block;

          margin-top: 5px;

          font-size: 28px;

          font-weight: 900;
        }


        .image-overlay-card small {
          display: block;

          margin-top: 2px;

          color: rgba(255,255,255,.72);

          font-size: 11px;
        }


        .image-corner-number {
          position: absolute;

          z-index: 2;

          right: 24px;
          top: 20px;

          color: rgba(255,255,255,.75);

          font-size: 12px;

          font-weight: 900;

          letter-spacing: 2px;
        }


        .about-copy h2,
        .about-heading-center h2,
        .about-heading-row h2 {
          margin: 13px 0 18px;

          color: #111;

          font-size: 36px;

          line-height: 1.08;

          letter-spacing: -2px;

          font-weight: 900;
        }


        .about-copy h2 {
          max-width: 620px;
        }


        .about-copy p {
          max-width: 650px;

          margin: 0 0 15px;

          color: #626262;

          font-size: 14px;

          line-height: 1.9;
        }


        .about-points {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 13px 20px;

          margin-top: 28px;
        }


        .about-points div {
          color: #333;

          font-size: 12px;

          font-weight: 750;
        }


        .about-points b {
          color: ${vn};

          margin-right: 7px;
        }


        /* =====================================================
           HEADINGS
        ===================================================== */

        .about-heading-center {
          max-width: 760px;

          margin: 0 auto 32px;

          text-align: center;
        }


        .about-heading-center h2 {
          margin-bottom: 12px;
        }


        .about-heading-center h2 span,
        .about-heading-row h2 span {
          color: ${vn};
        }


        .about-heading-center p,
        .about-heading-row > p {
          margin: 0;

          color: #777;

          font-size: 13px;

          line-height: 1.75;
        }


        /* =====================================================
           VALUES
        ===================================================== */

        .values-grid {
          display: grid;

          grid-template-columns: repeat(3,1fr);

          gap: 16px;
        }


        .value-card {
          min-height: 205px;

          padding: 25px;

          border: 1px solid #e4e0d7;

          border-radius: 16px;

          background: #fff;

          transition: .25s ease;
        }


        .value-card:hover {
          transform: translateY(-5px);

          border-color: rgba(212,175,55,.65);

          box-shadow: 0 18px 40px rgba(0,0,0,.07);
        }


        .value-top {
          display: flex;

          align-items: center;

          justify-content: space-between;
        }


        .value-top span {
          color: ${vn};

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 1px;
        }


        .value-top i {
          color: #c6c0b4;

          font-style: normal;

          font-size: 17px;
        }


        .value-card h3 {
          margin: 38px 0 8px;

          font-size: 19px;

          color: #111;
        }


        .value-card p {
          margin: 0;

          color: #777;

          font-size: 11.5px;

          line-height: 1.7;
        }


        /* =====================================================
           LEADERS
        ===================================================== */

        .about-heading-row {
          display: flex;

          align-items: end;

          justify-content: space-between;

          gap: 40px;

          margin-bottom: 32px;
        }


        .about-heading-row h2 {
          max-width: 720px;

          margin-bottom: 0;
        }


        .about-heading-row > p {
          max-width: 330px;

          padding-bottom: 4px;
        }


        .leaders-grid {
          display: grid;

          grid-template-columns: repeat(4,1fr);

          gap: 16px;
        }


        .leader-card {
          border: 1px solid #e5e1d9;

          border-radius: 18px;

          background: #fff;

          overflow: hidden;

          transition: .25s ease;
        }


        .leader-card:hover {
          transform: translateY(-5px);

          box-shadow: 0 20px 45px rgba(0,0,0,.08);
        }


        .leader-image-wrap {
          height: 310px;

          position: relative;

          background: #e9e5dc;

          overflow: hidden;
        }


        .leader-image-wrap img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          filter: saturate(.88);

          transition: .4s ease;
        }


        .leader-card:hover .leader-image-wrap img {
          transform: scale(1.04);
        }


        .leader-image-wrap:after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0,0,0,.25),
              transparent 55%
            );

          pointer-events: none;
        }


        .leader-number {
          position: absolute;

          z-index: 2;

          right: 16px;
          top: 15px;

          color: #fff;

          font-size: 24px;

          font-weight: 900;

          text-shadow: 0 2px 10px rgba(0,0,0,.3);
        }


        .leader-content {
          padding: 21px 19px 23px;
        }


        .leader-role {
          color: ${vn};

          font-size: 9px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 1.4px;
        }


        .leader-card h3 {
          margin: 7px 0 7px;

          font-size: 15px;

          color: #111;
        }


        .leader-card p {
          margin: 0;

          color: #777;

          font-size: 11px;

          line-height: 1.7;
        }


        /* =====================================================
           BLOG
        ===================================================== */

        .news-link {
          flex: 0 0 auto;

          color: #111;

          font-size: 11px;

          font-weight: 800;

          text-decoration: none;

          border-bottom: 1px solid ${Et};

          padding-bottom: 6px;
        }


        .news-link span {
          color: ${vn};

          margin-left: 6px;
        }


        .blog-grid {
          display: grid;

          grid-template-columns: repeat(3,1fr);

          gap: 18px;
        }


        .blog-card {
          background: #fff;

          border: 1px solid #e4e0d7;

          border-radius: 17px;

          overflow: hidden;

          transition: .25s ease;
        }


        .blog-card:hover {
          transform: translateY(-4px);

          box-shadow: 0 18px 42px rgba(0,0,0,.08);
        }


        .blog-image {
          height: 230px;

          position: relative;

          overflow: hidden;

          background: #ddd;
        }


        .blog-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          transition: .4s ease;
        }


        .blog-card:hover .blog-image img {
          transform: scale(1.04);
        }


        .blog-image span {
          position: absolute;

          left: 15px;
          top: 15px;

          padding: 7px 9px;

          background: rgba(0,0,0,.72);

          color: ${Et};

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 1px;
        }


        .blog-content {
          padding: 22px;
        }


        .blog-content small {
          color: ${vn};

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .blog-content h3 {
          margin: 11px 0 9px;

          color: #111;

          font-size: 18px;

          line-height: 1.3;
        }


        .blog-content p {
          margin: 0;

          color: #777;

          font-size: 11px;

          line-height: 1.7;
        }


        .blog-content a {
          display: inline-block;

          margin-top: 17px;

          color: #111;

          text-decoration: none;

          font-size: 10px;

          font-weight: 800;
        }


        .blog-content a span {
          color: ${vn};

          margin-left: 5px;
        }


        /* =====================================================
           OLD TESTIMONIAL CSS
           Kept for compatibility
        ===================================================== */

        .testimonial-grid {
          display: grid;

          grid-template-columns: repeat(3,1fr);

          gap: 16px;
        }


        .testimonial-card {
          position: relative;

          padding: 30px 25px 25px;

          border: 1px solid #e5e1d9;

          border-radius: 17px;

          background: #fff;

          transition: .25s ease;
        }


        .testimonial-card:hover {
          transform: translateY(-4px);

          box-shadow: 0 16px 38px rgba(0,0,0,.06);
        }


        .quote-mark {
          color: ${Et};

          font-family: Georgia,serif !important;

          font-size: 56px;

          line-height: .6;
        }


        .testimonial-card > p {
          margin: 20px 0 25px;

          color: #555;

          font-size: 12px;

          line-height: 1.85;
        }


        .testimonial-person {
          display: flex;

          align-items: center;

          gap: 11px;

          border-top: 1px solid #eee9df;

          padding-top: 17px;
        }


        .testimonial-initial {
          width: 38px;
          height: 38px;

          border-radius: 50%;

          display: grid;

          place-items: center;

          background: #111;

          color: ${Et};

          font-size: 13px;

          font-weight: 900;

          flex: 0 0 auto;
        }


        .testimonial-person strong {
          display: block;

          color: #111;

          font-size: 11px;
        }


        .testimonial-person span {
          display: block;

          margin-top: 3px;

          color: #888;

          font-size: 9px;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .about-cta {
          padding: 42px 0;

          background: #0b0b0b;

          color: #fff;
        }


        .about-cta-inner {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 35px;
        }


        .about-cta .about-eyebrow.light {
          color: ${Et};
        }


        .about-cta h2 {
          margin: 10px 0 8px;

          font-size: 36px;

          line-height: 1.08;

          letter-spacing: -1.5px;
        }


        .about-cta p {
          margin: 0;

          color: rgba(255,255,255,.65);

          font-size: 13px;
        }


        /* =====================================================
           HOME STYLE TESTIMONIALS
        ===================================================== */

        .hw-testimonials-premium {
          background: #fff;
        }


        .hw-testimonial-heading {
          text-align: center;

          margin: 0 auto 26px;
        }


        .hw-testimonial-eyebrow {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-bottom: 10px;
        }


        .hw-testimonial-eyebrow span {
          width: 28px;

          height: 1px;

          background: #D4AF37;
        }


        .hw-testimonial-eyebrow strong {
          color: #9A7418;

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 1.8px;
        }


        .hw-testimonial-heading h2 {
          margin: 0 0 9px;

          color: #111;

          font-size: 30px;

          line-height: 1.12;

          letter-spacing: -1.2px;

          font-weight: 900;
        }


        .hw-testimonial-heading p {
          margin: 0;

          color: #777;

          font-size: 12px;

          line-height: 1.7;
        }


        .hw-testimonial-grid {
          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 10px;
        }


        .hw-testimonial-card {
          min-width: 0;

          height: 190px;

          padding: 12px;

          border: 1px solid #e5e7eb;

          border-radius: 12px;

          background: #fff;

          box-shadow:
            0 3px 12px rgba(15,23,42,.05);

          display: flex;

          flex-direction: column;

          overflow: hidden;

          box-sizing: border-box;
        }


        .hw-testimonial-card:nth-child(1) {
          background: #fffaf1;
        }


        .hw-testimonial-card:nth-child(2) {
          background: #f5fbff;
        }


        .hw-testimonial-card:nth-child(3) {
          background: #fff7f8;
        }


        .hw-testimonial-card:nth-child(4) {
          background: #f4fbf6;
        }


        .hw-testimonial-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 8px;
        }


        .hw-review-icon {
          width: 28px;
          height: 28px;

          border-radius: 8px;

          display: grid;

          place-items: center;

          font-family: Georgia, serif !important;

          font-size: 22px;

          line-height: 1;

          flex: 0 0 auto;
        }


        .hw-google {
          display: flex;

          align-items: center;

          gap: 5px;

          color: #6b7280;

          font-size: 9px;

          font-weight: 800;
        }


        .google-g {
          font-size: 13px;

          font-weight: 900;
        }


        .hw-testimonial-stars {
          margin-top: 7px;

          color: #f59e0b;

          font-size: 11px;

          letter-spacing: 1px;

          line-height: 1;
        }


        .hw-testimonial-review {
          margin-top: 8px;

          color: #374151;

          font-size: 10px;

          line-height: 1.55;

          display: -webkit-box;

          -webkit-line-clamp: 4;

          -webkit-box-orient: vertical;

          overflow: hidden;

          flex: 1;
        }


        .hw-testimonial-user {
          display: flex;

          align-items: center;

          gap: 8px;

          margin-top: 8px;
        }


        .hw-testimonial-avatar {
          width: 29px;
          height: 29px;

          border-radius: 50%;

          display: grid;

          place-items: center;

          font-size: 9px;

          font-weight: 900;

          flex: 0 0 auto;
        }


        .hw-testimonial-user-info {
          min-width: 0;
        }


        .hw-testimonial-name {
          color: #111827;

          font-size: 10px;

          font-weight: 900;

          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }


        .hw-testimonial-verified {
          margin-top: 2px;

          color: #16a34a;

          font-size: 7px;

          font-weight: 900;

          letter-spacing: .7px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .about-hero h1 {
            font-size: 48px;
          }


          .about-two-col {
            gap: 40px;
          }


          .leaders-grid {
            grid-template-columns: repeat(2,1fr);
          }


          .leader-image-wrap {
            height: 340px;
          }

        }


        /* =====================================================
           MOBILE 760
        ===================================================== */

        @media (max-width: 760px) {

          .about-container {
            width: min(100% - 24px,1180px);
          }


          .about-hero {
            min-height: 390px;
          }


          .about-hero-inner {
            padding: 100px 18px 55px;
          }


          .about-hero h1 {
            font-size: 38px;

            line-height: 1.08;

            letter-spacing: -1px;
          }


          .about-hero p {
            font-size: 12px;

            line-height: 1.7;
          }


          .about-section {
            padding: 40px 0;
          }


          .about-two-col {
            grid-template-columns: 1fr;

            gap: 28px;
          }


          .about-real-image {
            height: 330px;

            border-radius: 19px;
          }


          .about-copy h2,
          .about-heading-center h2,
          .about-heading-row h2 {
            font-size: 32px;

            line-height: 1.1;

            letter-spacing: -1.2px;
          }


          .about-copy p {
            font-size: 12px;

            line-height: 1.75;
          }


          .about-points {
            grid-template-columns: 1fr;

            gap: 10px;
          }


          .values-grid {
            grid-template-columns: 1fr 1fr;

            gap: 10px;
          }


          .value-card {
            min-height: 190px;

            padding: 19px;
          }


          .value-card h3 {
            margin-top: 28px;

            font-size: 16px;
          }


          .value-card p {
            font-size: 10.5px;
          }


          .about-heading-row {
            align-items: flex-start;

            flex-direction: column;

            gap: 18px;

            margin-bottom: 28px;
          }


          .about-heading-row > p {
            max-width: 100%;
          }


          .leaders-grid {
            grid-template-columns: 1fr 1fr;

            gap: 10px;
          }


          .leader-image-wrap {
            height: 240px;
          }


          .leader-content {
            padding: 16px 14px 18px;
          }


          .leader-card h3 {
            font-size: 13px;
          }


          .leader-card p {
            font-size: 10px;
          }


          .blog-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }


          .blog-image {
            height: 220px;
          }


          .testimonial-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }


          .about-cta-inner {
            flex-direction: column;

            align-items: flex-start;
          }


          .about-cta .about-btn {
            width: 100%;
          }


          .hw-testimonial-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }


          .hw-testimonial-card {
            height: 150px;
          }


          .hw-testimonial-heading h2 {
            font-size: 27px;
          }

        }


        /* =====================================================
           MOBILE 520
        ===================================================== */

        @media (max-width: 520px) {

          .about-container {
            width: min(100% - 20px,1180px);
          }


          .about-hero {
            min-height: 390px;
          }


          .about-hero-inner {
            padding: 100px 16px 52px;
          }


          .about-kicker {
            font-size: 8px;

            letter-spacing: 1.5px;
          }


          .about-hero p {
            max-width: 100%;

            font-size: 12px;

            line-height: 1.7;
          }


          .about-section {
            padding: 34px 0;
          }


          .about-heading-center {
            margin-bottom: 26px;
          }


          .about-copy h2,
          .about-heading-center h2,
          .about-heading-row h2 {
            font-size: 30px;

            line-height: 1.1;

            letter-spacing: -1px;

            margin: 9px 0 13px;
          }


          .about-eyebrow {
            font-size: 8px;

            letter-spacing: 1.5px;
          }


          .about-real-image {
            height: 270px;

            border-radius: 17px;
          }


          .image-overlay-card {
            left: 17px;

            bottom: 17px;
          }


          .image-overlay-card strong {
            font-size: 21px;
          }


          .about-points {
            gap: 9px;

            margin-top: 20px;
          }


          .values-grid {
            gap: 8px;
          }


          .value-card {
            min-height: 165px;

            padding: 15px;

            border-radius: 12px;
          }


          .value-card h3 {
            margin-top: 23px;

            font-size: 14px;
          }


          .value-card p {
            font-size: 9.5px;

            line-height: 1.55;
          }


          .leaders-grid {
            gap: 8px;
          }


          .leader-image-wrap {
            height: 185px;
          }


          .leader-content {
            padding: 12px 10px 14px;
          }


          .leader-card h3 {
            font-size: 11.5px;
          }


          .leader-role {
            font-size: 7.5px;
          }


          .leader-card p {
            font-size: 9px;

            line-height: 1.55;
          }


          .blog-content {
            padding: 17px;
          }


          .testimonial-card {
            padding: 22px 18px 19px;
          }


          .about-cta {
            padding: 42px 0;
          }


          .hw-testimonial-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));

            gap: 8px;
          }


          .hw-testimonial-card {
            height: 145px;

            padding: 10px;

            border-radius: 10px;
          }


          .hw-testimonial-heading h2 {
            font-size: 25px;
          }


          .hw-testimonial-heading p {
            font-size: 10px;
          }


          .hw-testimonial-review {
            font-size: 8.5px;

            line-height: 1.45;

            -webkit-line-clamp: 4;
          }


          .hw-testimonial-avatar {
            width: 25px;
            height: 25px;

            font-size: 8px;
          }


          .hw-testimonial-name {
            font-size: 8.5px;
          }


          .hw-testimonial-verified {
            font-size: 6.5px;
          }

        }


        /* =====================================================
           MOBILE 420
        ===================================================== */

        @media (max-width: 420px) {

          .about-hero h1 {
            font-size: 36px;

            letter-spacing: -.8px;
          }


          .about-real-image {
            height: 260px;
          }


          .values-grid,
          .leaders-grid {
            grid-template-columns: 1fr 1fr;
          }


          .leader-image-wrap {
            height: 180px;
          }


          .leader-content {
            padding: 12px 10px 14px;
          }


          .leader-card h3 {
            font-size: 11px;
          }


          .leader-role {
            font-size: 7px;
          }


          .leader-card p {
            font-size: 8.7px;

            line-height: 1.5;
          }

        }

      `})]})}const Ce=(e="")=>String(e).toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),Xr=e=>{const r=[...String((e==null?void 0:e.priceRange)||(e==null?void 0:e.price)||"").toLowerCase().replace(/,/g,"").matchAll(/(\d+(?:\.\d+)?)\s*(cr|crore|crores|l|lac|lacs|lakh|lakhs|k)?\b/g)].map(a=>({n:parseFloat(a[1]),unit:a[2]||""}));if(!r.length)return null;for(let a=r.length-1,o="cr";a>=0;a--)r[a].unit?o=r[a].unit:r[a].unit=o;const i=({n:a,unit:o})=>/^(l|lac|lacs|lakh|lakhs)$/.test(o)?a/100:o==="k"?a/1e5:a,s=r.map(i);return{min:Math.min(...s),max:Math.max(...s)}},xl=e=>{if(!e)return null;const t=String(e).toLowerCase(),r=[...t.matchAll(/\d+(?:\.\d+)?/g)].map(i=>parseFloat(i[0]));return r.length?/under|below|upto|up to|less|max/.test(t)?{min:0,max:r[0]}:/onward|plus|above|more|\+|min/.test(t)||r.length===1?{min:r[0],max:1/0}:{min:Math.min(r[0],r[1]),max:Math.max(r[0],r[1])}:null},yu=e=>e?e.min===0?`Under ₹${e.max} Cr`:e.max===1/0?`₹${e.min} Cr+`:`₹${e.min} – ${e.max} Cr`:"",vu=[{value:"under-1-cr",label:"Under ₹1 Cr"},{value:"1-cr-4-cr",label:"₹1 – 4 Cr"},{value:"4-cr-8-cr",label:"₹4 – 8 Cr"},{value:"8-cr-12-cr",label:"₹8 – 12 Cr"},{value:"12-cr-16-cr",label:"₹12 – 16 Cr"},{value:"16-cr-onwards",label:"₹16 Cr+"}],hn=e=>(Array.isArray(e==null?void 0:e.types)&&e.types.length?e.types:[(e==null?void 0:e.type)||(e==null?void 0:e.propertyType)]).filter(Boolean),bu=["apartment","villa","builder floor","plots","farmhouse","builder plots","deendayal plots","normal plots"],qt=["commercial","retail","sco"],G2=["trump","elie saab","brabus","franck","muller","tonino","armani","branded","oberoi","dlf privana","versace","lamborghini"],V2=10,wl=e=>hn(e).map(Ce),qf=e=>!wl(e).some(t=>qt.includes(t))&&!["commercial","sco"].includes(e.category),q2=e=>{var t;return qf(e)&&((((t=Xr(e))==null?void 0:t.max)||0)>=V2||/luxury/i.test(`${e.tag} ${e.propertyTypeDetail}`))},Y2=e=>qf(e)&&G2.some(t=>Ce(`${e.title} ${e.tag} ${e.propertyTypeDetail}`).includes(t)),K2=e=>{const t=Ce(e);if(!t||t==="all"||t==="all types")return null;const r=(a,...o)=>wl(a).some(l=>o.includes(l)),i=a=>Ce(`${hn(a).join(" ")} ${a.bhk} ${a.title} ${a.propertyTypeDetail}`);return{residential:a=>r(a,"residential",...bu),"residential projects":a=>r(a,"residential",...bu),commercial:a=>r(a,...qt)||["commercial","sco"].includes(a.category),"commercial projects":a=>r(a,...qt)||["commercial","sco"].includes(a.category),"luxury villas":a=>r(a,"villa"),villa:a=>r(a,"villa"),villas:a=>r(a,"villa"),"independent floors":a=>r(a,"builder floor"),"builder floor":a=>r(a,"builder floor"),"pent house":a=>/pent ?house/.test(i(a)),penthouse:a=>/pent ?house/.test(i(a)),"residential plots":a=>r(a,"plots","deendayal plots","normal plots"),"deendayal plots":a=>r(a,"deendayal plots")||/deendayal|ddjay/.test(i(a)),"normal plots":a=>r(a,"normal plots")||r(a,"plots")&&!/deendayal|ddjay/.test(i(a)),"builder plots":a=>r(a,"builder plots")||/builder plot/.test(i(a)),plots:a=>r(a,"plots"),"plots land":a=>r(a,"plots"),"sco plots":a=>r(a,"sco")||a.category==="sco",sco:a=>r(a,"sco")||a.category==="sco",branded:a=>a.category==="branded"||Y2(a),luxury:a=>["luxury","branded"].includes(a.category)||q2(a),shops:a=>r(a,...qt)||a.category==="commercial","office space":a=>r(a,...qt)||a.category==="commercial","food court":a=>r(a,...qt)||a.category==="commercial","anchor stores":a=>r(a,...qt)||a.category==="commercial","cinema entertainment":a=>r(a,...qt)||a.category==="commercial"}[t]||(a=>wl(a).some(o=>o===t||o.includes(t)))},ju=e=>{const t=String((e==null?void 0:e.bhk)||"").toLowerCase();return/bhk|bed/.test(t)?[...t.matchAll(/\d+/g)].map(r=>parseInt(r[0])).filter(r=>r>0&&r<10):[]},X2=e=>{var i;const t=String(e||"").toLowerCase();if(!t)return null;if(t.includes("studio"))return s=>/studio|1 ?rk/.test(String(s.bhk).toLowerCase());const r=parseInt((i=t.match(/\d+/))==null?void 0:i[0]);return r?/\+|plus|above/.test(t)?s=>ju(s).some(a=>a>=r):s=>ju(s).includes(r):null},Q2={upcoming:["upcoming"],"new launch":["new launch","newlaunch"],"ready to move":["ready to move","ready"],"under construction":["under construction","trending","new launch"],trending:["trending"]},Au=["New Launch","Upcoming","Under Construction","Ready to Move"],Z2=e=>{const t=Ce(e).replace("newlaunch","new launch");if(!t||t==="for sale"||t==="all")return null;const r=Q2[t]||[t];return i=>r.includes(Ce(i.status).replace("newlaunch","new launch"))||r.includes(Ce(i.category).replace("newlaunch","new launch"))},J2=e=>{var o;const t=l=>(e.get(l)||"").trim();let r=t("q"),i=t("locality"),s=t("city");const a=t("location");if(a){const l=ea(a),c=!l&&ta(a);l?i=l.name:c?s=c.city:r=r?`${r} ${a}`:a}if(i){const l=ea(i);l&&(i=l.name,s=s||l.city)}return s&&(s=((o=ta(s))==null?void 0:o.city)||s),{q:r,city:s,locality:i,type:t("type")||t("propertyType"),budget:t("budget"),bhk:t("bhk"),status:t("status"),category:t("category"),sort:t("sort")}},ey=(e,t,{offerTitles:r=[]}={})=>{const i=Ce(t.q).split(" ").filter(Boolean),s=K2(t.type),a=X2(t.bhk),o=Z2(t.status),l=xl(t.budget),c=r.map(Ce),d=e.filter(u=>{const g=na(u);if(i.length){const j=Ce(`${u.title} ${u.location} ${u.developer} ${hn(u).join(" ")} ${u.bhk} ${g.locality} ${g.city}`);if(!i.every(A=>j.includes(A)))return!1}if(t.city&&Ce(g.city)!==Ce(t.city)||t.locality&&Ce(g.locality)!==Ce(t.locality)||s&&!s(u)||a&&!a(u)||o&&!o(u))return!1;if(l){const j=Xr(u);if(!j||j.max<l.min||j.min>l.max)return!1}if(t.category){const j=t.category.toLowerCase();if(j==="festival"){if(!c.some(A=>Ce(u.title).includes(A)||A.includes(Ce(u.title))))return!1}else if(String(u.category).toLowerCase()!==j)return!1}return!0}),h=u=>{var g;return((g=Xr(u))==null?void 0:g.min)??1/0};return t.sort==="price-low"&&d.sort((u,g)=>h(u)-h(g)),t.sort==="price-high"&&d.sort((u,g)=>{var j,A;return(((j=Xr(g))==null?void 0:j.max)??-1)-(((A=Xr(u))==null?void 0:A.max)??-1)}),t.sort==="newest"&&d.sort((u,g)=>String(g.createdAt).localeCompare(String(u.createdAt))),d},ty={apartment:"Apartments",villa:"Villas",villas:"Villas","luxury villas":"Luxury Villas","builder floor":"Builder Floors","independent floors":"Independent Floors",farmhouse:"Farmhouses",plots:"Plots","plots land":"Plots & Land","residential plots":"Residential Plots","deendayal plots":"Deendayal Plots","normal plots":"Normal Plots","builder plots":"Builder Plots","pent house":"Penthouses",penthouse:"Penthouses",residential:"Residential Projects","residential projects":"Residential Projects",commercial:"Commercial Projects","commercial projects":"Commercial Projects",retail:"Retail Spaces",sco:"SCO Plots","sco plots":"SCO Plots",branded:"Branded Residences",luxury:"Luxury Homes",shops:"Shops","office space":"Office Spaces","food court":"Food Courts","anchor stores":"Anchor Stores","cinema entertainment":"Cinema & Entertainment Spaces"},ny=e=>{const t=[];e.bhk&&t.push(/bhk|studio/i.test(e.bhk)?e.bhk:`${e.bhk} BHK`),t.push(e.type?ty[Ce(e.type)]||e.type:"Properties");const r=e.locality||e.city||"Gurugram";return`${t.join(" ")} in ${r}`},ry=["q","city","locality","type","budget","bhk","status","category","sort"],ku=[{group:"Residential",items:[["Apartment","Apartment"],["Villa","Villa"],["Builder Floor","Builder Floor"],["Penthouse","Penthouse"],["Builder Plots","Builder Plots"],["Plots","Residential Plots"],["Deendayal Plots","Deendayal Plots"],["Normal Plots","Normal Plots"],["Farmhouse","Farmhouse"]]},{group:"Commercial",items:[["Commercial","All Commercial"],["Retail","Retail / Shops"],["SCO","SCO Plots"]]},{group:"Collections",items:[["Luxury","Luxury Homes"],["Branded","Branded Residences"]]}],so=[["","All Projects"],["trending","Trending"],["upcoming","Upcoming"],["newlaunch","New Launch"],["branded","Branded"],["luxury","Luxury"],["commercial","Commercial"],["sco","SCO"]],iy=["Studio","1 BHK","2 BHK","3 BHK","4 BHK","5 BHK"],sy=(e,t)=>{var r;return((r=e.find(([i])=>i===t))==null?void 0:r[1])||t},_r="#D4AF37",Vt="#9A7418",ss="#090909";function ay(){const[e,t]=xc(),[r,i]=b.useState([]),[s,a]=b.useState([]),[o,l]=b.useState(!0),c=J2(e),[d,h]=b.useState(c.q);b.useEffect(()=>{Promise.all([J.get("/properties"),J.get("/offers").catch(()=>({data:[]}))]).then(([w,R])=>{i(Array.isArray(w.data)?w.data:[]),a((R.data||[]).map(z=>z.title).filter(Boolean))}).catch(()=>i([])).finally(()=>l(!1))},[]);const u=b.useMemo(()=>ey(r,c,{offerTitles:s}),[r,s,e.toString()]),g=(w,R)=>{const z={...c,[w]:R};w==="city"&&(z.locality="");const B=new URLSearchParams;ry.forEach(N=>z[N]&&B.set(N,z[N])),t(B,{replace:!0})};b.useEffect(()=>{const w=setTimeout(()=>{d.trim()!==c.q&&g("q",d.trim())},350);return()=>clearTimeout(w)},[d]),b.useEffect(()=>{h(c.q)},[e.get("q"),e.get("location")]);const j=()=>{h(""),t({},{replace:!0})},A=[c.q&&["q",`“${c.q}”`],c.city&&["city",c.city],c.locality&&["locality",c.locality],c.type&&["type",c.type.replace(/-/g," ")],c.budget&&["budget",yu(xl(c.budget))||c.budget],c.bhk&&["bhk",c.bhk],c.status&&["status",c.status.replace(/-/g," ")],c.category&&["category",sy(so,c.category)]].filter(Boolean),k=c.locality||c.city||"Gurugram",C=ku.some(w=>w.items.some(([R])=>R===c.type)),p=vu.some(w=>w.value===c.budget),f=Au.includes(c.status),m=c.city?[{city:c.city,localities:Qw(c.city)}]:Hn,y="919999999999",S=w=>{const R=(w==null?void 0:w.title)||(w==null?void 0:w.name)||"this property",z=encodeURIComponent(`Hi, I am interested in ${R}. Please share more details.`);return`https://wa.me/${y}?text=${z}`},E=({property:w,index:R})=>{var ge;const z=(w==null?void 0:w.id)||(w==null?void 0:w._id)||R,B=(w==null?void 0:w.image)||(w==null?void 0:w.thumbnail)||((ge=w==null?void 0:w.images)==null?void 0:ge[0])||"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",N=(w==null?void 0:w.title)||(w==null?void 0:w.name)||"Premium Property",M=(w==null?void 0:w.priceRange)||(w==null?void 0:w.price)||"Price on Request",P=(w==null?void 0:w.location)||(w==null?void 0:w.locality)||"Gurugram",_=(w==null?void 0:w.bhk)||"3 & 4 BHK",ue=(w==null?void 0:w.area)||(w==null?void 0:w.size)||"2,500+ Sq.Ft.",ce=(w==null?void 0:w.propertyType)||(w==null?void 0:w.type)||"";return n.jsxs(F,{to:w!=null&&w.slug?_e(w):`/property/${z}`,className:"search-property-card",children:[n.jsxs("div",{className:"search-property-image",children:[n.jsx("img",{src:B,alt:N,loading:"lazy"}),n.jsx("div",{className:"search-image-overlay"}),(w==null?void 0:w.rera)!==!1&&n.jsx("div",{className:"search-rera-group",children:n.jsxs("span",{className:"search-rera",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"search-bhk-badge",children:[_,ce?` • ${ce}`:""]})]}),n.jsxs("div",{className:"search-property-content",children:[n.jsx("h3",{children:N}),n.jsx("div",{className:"search-card-price",children:M}),n.jsxs("div",{className:"search-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:P})]}),n.jsxs("div",{className:"search-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:_})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:ue})]})]}),n.jsxs("a",{href:S(w),target:"_blank",rel:"noopener noreferrer",className:"search-card-whatsapp",onClick:T=>T.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]})};return n.jsxs("div",{className:"search-page",children:[n.jsx(Xe,{}),n.jsxs("div",{className:"search-container",children:[n.jsxs("div",{className:"search-breadcrumb",children:[n.jsx(F,{to:"/",children:"Home"}),n.jsx("span",{children:"›"}),n.jsxs("span",{children:["Projects in ",k]})]}),n.jsxs("div",{className:"search-layout",children:[n.jsxs("aside",{className:"filter-sidebar",children:[n.jsxs("div",{className:"filter-header",children:[n.jsx("h3",{children:"Filters"}),n.jsx("button",{onClick:j,children:"Clear All"})]}),n.jsxs("div",{className:"filter-fields",children:[n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"SEARCH"}),n.jsx("input",{value:d,onChange:w=>h(w.target.value),placeholder:"Project, builder, sector…"})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"CITY"}),n.jsxs("select",{value:c.city,onChange:w=>g("city",w.target.value),children:[n.jsx("option",{value:"",children:"All Cities"}),Hn.map(w=>n.jsx("option",{value:w.city,children:w.city},w.city))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"LOCALITY"}),n.jsxs("select",{value:c.locality,onChange:w=>g("locality",w.target.value),children:[n.jsx("option",{value:"",children:c.city?`All of ${c.city}`:"All Localities"}),m.map(w=>n.jsx("optgroup",{label:w.city,children:w.localities.map(R=>n.jsx("option",{value:R.name,children:R.name},R.slug))},w.city))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"PROPERTY TYPE"}),n.jsxs("select",{value:c.type,onChange:w=>g("type",w.target.value),children:[n.jsx("option",{value:"",children:"All Types"}),!C&&c.type&&n.jsx("option",{value:c.type,children:c.type.replace(/-/g," ")}),ku.map(w=>n.jsx("optgroup",{label:w.group,children:w.items.map(([R,z])=>n.jsx("option",{value:R,children:z},R))},w.group))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"BUDGET"}),n.jsxs("select",{value:c.budget,onChange:w=>g("budget",w.target.value),children:[n.jsx("option",{value:"",children:"Any Budget"}),!p&&c.budget&&n.jsx("option",{value:c.budget,children:yu(xl(c.budget))||c.budget}),vu.map(w=>n.jsx("option",{value:w.value,children:w.label},w.value))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"BEDROOMS"}),n.jsx("div",{className:"bhk-pills",children:iy.map(w=>n.jsxs("button",{type:"button",className:c.bhk.toLowerCase()===w.toLowerCase()?"active":"",onClick:()=>g("bhk",c.bhk.toLowerCase()===w.toLowerCase()?"":w),children:[w.replace(" BHK",""),w==="Studio"?"":" BHK"]},w))})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"PROJECT STATUS"}),n.jsxs("select",{value:c.status,onChange:w=>g("status",w.target.value),children:[n.jsx("option",{value:"",children:"Any Status"}),!f&&c.status&&n.jsx("option",{value:c.status,children:c.status.replace(/-/g," ")}),Au.map(w=>n.jsx("option",{value:w,children:w},w))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"CATEGORY"}),n.jsxs("div",{className:"category-options",children:[!so.some(([w])=>w===c.category)&&n.jsxs("label",{className:"category-option",children:[n.jsx("input",{type:"radio",name:"cat",checked:!0,readOnly:!0}),n.jsx("span",{children:c.category})]}),so.map(([w,R])=>n.jsxs("label",{className:"category-option",children:[n.jsx("input",{type:"radio",name:"cat",checked:c.category===w,onChange:()=>g("category",w)}),n.jsx("span",{children:R})]},w||"all"))]})]}),n.jsx("div",{className:"property-count",children:o?"Loading…":`${u.length} properties found`})]}),n.jsxs("div",{className:"expert-card",children:[n.jsx("div",{className:"expert-title",children:"Need Expert Help?"}),n.jsx("div",{className:"expert-text",children:"Our property experts will help you find the perfect home."}),n.jsx("a",{href:"tel:9090101401",className:"expert-call",children:"Call +91 9090 101 401"})]})]}),n.jsxs("main",{className:"results-area",children:[n.jsxs("div",{className:"results-header",children:[n.jsxs("div",{children:[n.jsx("h1",{children:ny(c)}),n.jsxs("p",{children:[o?"Loading properties…":`Showing ${u.length} result${u.length===1?"":"s"}`," ","•"," ","Luxury Residences & Investment Opportunities"]})]}),n.jsxs("select",{value:c.sort,onChange:w=>g("sort",w.target.value),className:"sort-select",children:[n.jsx("option",{value:"",children:"Sort by: Recommended"}),n.jsx("option",{value:"price-low",children:"Price: Low to High"}),n.jsx("option",{value:"price-high",children:"Price: High to Low"}),n.jsx("option",{value:"newest",children:"Newest First"})]})]}),A.length>0&&n.jsxs("div",{className:"active-filters",children:[A.map(([w,R])=>n.jsxs("button",{type:"button",className:"active-chip",onClick:()=>{w==="q"&&h(""),g(w,"")},children:[R," ",n.jsx("span",{"aria-hidden":"true",children:"✕"})]},w)),n.jsx("button",{type:"button",className:"active-clear",onClick:j,children:"Clear all"})]}),o?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-title",children:"Loading properties…"}),n.jsx("div",{className:"empty-text",children:"The server may take a few seconds to wake up."})]}):u.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🏢"}),n.jsx("div",{className:"empty-title",children:"No properties found"}),n.jsx("div",{className:"empty-text",children:"Try adjusting your filters or search query"}),n.jsx("button",{onClick:j,className:"empty-btn",children:"Clear Filters"})]}):n.jsx("div",{className:"results-grid",children:u.map((w,R)=>n.jsx(E,{property:w,index:R},(w==null?void 0:w.id)||(w==null?void 0:w._id)||R))})]})]})]}),n.jsx(ft,{}),n.jsx(Nc,{context:"Property list"}),n.jsx("style",{children:`

        * {
          box-sizing: border-box;
        }

        .search-page {
          min-height: 100vh;
          background: #f7f7f5;
          color: #111111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
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
          padding: 92px 0 0px;
        }

        .search-breadcrumb {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 18px;
          font-size: 12px;
          line-height: 1.4;
          color: #777777;
        }

        .search-breadcrumb a {
          color: #777777;
          text-decoration: none;
          transition: .2s ease;
        }

        .search-breadcrumb a:hover {
          color: ${Vt};
        }

        .search-breadcrumb span:last-child {
          color: #222222;
          font-weight: 700;
        }

        .search-layout {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }

        .filter-sidebar {
          background: #ffffff;
          border: 1px solid #e7e4dc;
          border-radius: 18px;
          padding: 20px;
          position: sticky;
          top: 100px;
          box-shadow: 0 8px 30px rgba(0,0,0,.04);
        }

        .filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 15px;
          border-bottom: 1px solid #eeeeee;
        }

        .filter-header h3 {
          margin: 0;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 800;
          color: #111111;
        }

        .filter-header button {
          border: none;
          background: transparent;
          color: ${Vt};
          font-size: 11px;
          line-height: 1.3;
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
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: 1px;
          color: #555555;
          margin-bottom: 7px;
        }

        .filter-field input,
        .filter-field select {
          width: 100%;
          height: 42px;
          border: 1px solid #e4e4e4;
          border-radius: 10px;
          background: #ffffff;
          padding: 0 12px;
          font-family: inherit;
          font-size: 12px;
          line-height: 1.2;
          color: #222222;
          outline: none;
          transition: .2s ease;
        }

        .filter-field input:focus,
        .filter-field select:focus {
          border-color: ${_r};
          box-shadow: 0 0 0 3px rgba(212,175,55,.10);
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
          line-height: 1.4;
          color: #555555;
          cursor: pointer;
        }

        .category-option input {
          width: 15px;
          height: 15px;
          accent-color: ${Vt};
        }

        .apply-filter-btn {
          width: 100%;
          height: 43px;
          border: none;
          border-radius: 10px;
          background: ${ss};
          color: #ffffff;
          font-family: inherit;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
          cursor: pointer;
          transition: .25s ease;
        }

        .apply-filter-btn:hover {
          background: ${Vt};
          transform: translateY(-1px);
        }

        .property-count {
          text-align: center;
          font-size: 11px;
          line-height: 1.4;
          color: #777777;
        }

        .expert-card {
          margin-top: 20px;
          padding: 18px;
          border-radius: 15px;
          background: linear-gradient(145deg, #111111, #242424);
          color: #ffffff;
        }

        .expert-title {
          font-size: 14px;
          line-height: 1.35;
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
          background: ${_r};
          color: #111111;
          text-align: center;
          text-decoration: none;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 800;
          transition: .2s ease;
        }

        .expert-call:hover {
          background: #ffffff;
        }

        .results-header {
          min-height: 78px;
          padding: 16px 18px;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
        }

        .results-header h1 {
          margin: 0;
          font-size: 20px;
          line-height: 1.25;
          font-weight: 850;
          color: #111111;
          letter-spacing: -.4px;
        }

        .results-header p {
          margin: 5px 0 0;
          color: #777777;
          font-size: 11px;
          line-height: 1.5;
        }

        .sort-select {
          height: 39px;
          min-width: 190px;
          border: 1px solid #e2e2e2;
          border-radius: 9px;
          padding: 0 11px;
          background: #ffffff;
          font-family: inherit;
          font-size: 11px;
          line-height: 1.2;
          color: #333333;
          outline: none;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 18px;
        }

        .search-property-card {
          display: block;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(0,0,0,.045);
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .search-property-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212,175,55,.45);
          box-shadow: 0 18px 42px rgba(0,0,0,.10);
        }

        .search-property-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: #eeeeee;
        }

        .search-property-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: fill;
          transition: transform .55s ease;
        }

        .search-property-card:hover .search-property-image img {
          transform: scale(1.045);
        }

        .search-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,.10) 0%,
            transparent 42%,
            rgba(0,0,0,.48) 100%
          );
          pointer-events: none;
        }

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
          color: #ffffff;
          font-size: 9px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: .4px;
          box-shadow: 0 4px 12px rgba(0,0,0,.16);
        }

        .search-rera b {
          font-size: 10px;
        }

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
          color: #ffffff;
          font-size: 9px;
          line-height: 1.2;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .search-property-content {
          padding: 16px 16px 15px;
        }

        .search-property-content h3 {
          margin: 0;
          min-height: 20px;
          color: #111111;
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
          color: ${Vt};
          font-size: 14px;
          line-height: 1.3;
          font-weight: 900;
        }

        .search-card-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 9px;
          color: #777777;
          font-size: 10px;
          line-height: 1.4;
        }

        .search-card-location svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          color: ${Vt};
        }

        .search-card-location span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

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
          color: #555555;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 650;
        }

        .search-card-meta svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          color: #888888;
        }

        .search-card-meta span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        /* =================================================
           WHATSAPP BUTTON - UPDATED
           Screenshot style:
           light green background,
           thin green border,
           green icon/text
        ================================================= */

        .search-card-whatsapp {
          width: 100%;
          height: 36px;
          margin-top: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 6px;
          border: 1px solid #bfe8cf;
          background: #eefaf3;
          color: #18b965;
          text-decoration: none;
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          transition: .25s ease;
          box-sizing: border-box;
        }

        .search-card-whatsapp svg {
          width: 15px;
          height: 15px;
        }

        .search-card-whatsapp:hover {
          background: #e2f7ea;
          border-color: #a8dfbf;
          color: #129c55;
          transform: translateY(-1px);
        }

        .empty-state {
          margin-top: 18px;
          padding: 70px 30px;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          background: #ffffff;
          text-align: center;
        }

        .empty-icon {
          font-size: 45px;
          line-height: 1;
          opacity: .35;
        }

        .empty-title {
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 800;
        }

        .empty-text {
          margin-top: 5px;
          font-size: 12px;
          line-height: 1.5;
          color: #777777;
        }

        .empty-btn {
          margin-top: 17px;
          padding: 10px 20px;
          border: none;
          border-radius: 9px;
          background: ${ss};
          color: #ffffff;
          font-family: inherit;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 800;
          cursor: pointer;
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1200px) {

          .search-container {
            width: min(100% - 30px, 1100px);
          }

          .search-layout {
            grid-template-columns: 245px minmax(0, 1fr);
            gap: 17px;
          }

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .search-property-image {
            height: 230px;
          }

        }

        /* =================================================
           TABLET / SMALL LAPTOP
        ================================================= */

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
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .filter-field:first-child {
            grid-column: 1 / -1;
          }

          .category-options {
            grid-template-columns: repeat(2, 1fr);
          }

          .apply-filter-btn,
          .property-count {
            grid-column: 1 / -1;
          }

          .expert-card {
            display: none;
          }

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

        }

        /* =================================================
           MOBILE
        ================================================= */

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

          /* MOBILE WHATSAPP */

          .search-card-whatsapp {
            height: 32px;
            margin-top: 9px;
            gap: 5px;
            font-size: 8.5px;
            border-radius: 5px;
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

        /* =================================================
           SMALL MOBILE
        ================================================= */

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


        /* ---- filter additions ---- */
        .filter-field optgroup { font-weight: 800; color: #777; }

        .bhk-pills { display: flex; flex-wrap: wrap; gap: 6px; }
        .bhk-pills button {
          height: 32px; padding: 0 11px; border-radius: 20px;
          border: 1px solid #e4e4e4; background: #fff; color: #333;
          font-size: 11px; font-weight: 700; cursor: pointer; transition: .2s ease;
        }
        .bhk-pills button:hover { border-color: ${_r}; }
        .bhk-pills button.active { background: ${ss}; border-color: ${ss}; color: ${_r}; }

        .active-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; align-items: center; }
        .active-chip {
          display: inline-flex; align-items: center; gap: 7px;
          height: 32px; padding: 0 12px; border-radius: 20px;
          border: 1px solid #ecdfb0; background: #fffaeb; color: #5c4a12;
          font-size: 11.5px; font-weight: 700; cursor: pointer; text-transform: capitalize;
        }
        .active-chip span { font-size: 10px; color: ${Vt}; }
        .active-chip:hover { border-color: ${_r}; }
        .active-clear { border: none; background: none; color: ${Vt}; font-size: 11.5px; font-weight: 800; cursor: pointer; }
      `})]})}const oy={pool:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5S16 18 18 18s2-1.5 4-1.5"}),n.jsx("path",{d:"M2 21.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"}),n.jsx("path",{d:"M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0M8 9h8"})]}),gym:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12"})}),club:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M3 21h18M5 21V9l7-5 7 5v12"}),n.jsx("path",{d:"M10 21v-6h4v6"})]}),kids:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"5",r:"2"}),n.jsx("path",{d:"M8 21l2-7-3-3 5-2 5 2-3 3 2 7"})]}),run:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"14",cy:"4",r:"2"}),n.jsx("path",{d:"M6 20l4-6 3 2 2-5 4 3M9 9l4-2 3 2"})]}),garden:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 22V12"}),n.jsx("path",{d:"M12 12c0-5 4-8 8-8 0 5-3 8-8 8ZM12 14c0-4-3-7-7-7 0 4 3 7 7 7Z"})]}),shield:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"}),n.jsx("path",{d:"m9 12 2 2 4-4"})]}),power:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M13 2 4 14h7l-1 8 9-12h-7z"})}),yoga:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"4.5",r:"2"}),n.jsx("path",{d:"M4 20h16M12 7v6M7 11l5 2 5-2M8 20l4-7 4 7"})]}),tennis:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"9",cy:"9",r:"6"}),n.jsx("path",{d:"M13.5 13.5 20 20M5 5c3 1 5 3 6 8"})]}),parking:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"4",y:"3",width:"16",height:"18",rx:"3"}),n.jsx("path",{d:"M10 17V7h3.5a3 3 0 0 1 0 6H10"})]}),cafe:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"}),n.jsx("path",{d:"M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3"})]}),spa:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 21c-4.5 0-8-3-8-7 3 0 6 1.5 8 4 2-2.5 5-4 8-4 0 4-3.5 7-8 7Z"}),n.jsx("path",{d:"M12 18c0-4 1.5-8 0-12-1.5 4 0 8 0 12Z"})]}),lift:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"5",y:"3",width:"14",height:"18",rx:"2"}),n.jsx("path",{d:"m9 9 3-3 3 3M9 15l3 3 3-3"})]}),wifi:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"}),n.jsx("circle",{cx:"12",cy:"19.5",r:"1"})]}),camera:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"7",width:"13",height:"10",rx:"2"}),n.jsx("path",{d:"m16 11 5-3v8l-5-3"})]}),theatre:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"12",rx:"2"}),n.jsx("path",{d:"M8 21h8M12 17v4"})]}),ball:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"})]}),party:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"m4 20 5-14 9 9-14 5Z"}),n.jsx("path",{d:"M14 4l1 2M19 9l2-1M17 3l-1 3"})]}),book:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"}),n.jsx("path",{d:"M4 19a2 2 0 0 1 2-2h13"})]}),pet:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"6",cy:"10",r:"2"}),n.jsx("circle",{cx:"10",cy:"6",r:"2"}),n.jsx("circle",{cx:"14",cy:"6",r:"2"}),n.jsx("circle",{cx:"18",cy:"10",r:"2"}),n.jsx("path",{d:"M8 17c0-3 2-5 4-5s4 2 4 5-2 3-4 3-4 0-4-3Z"})]}),ev:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"4",y:"4",width:"10",height:"16",rx:"2"}),n.jsx("path",{d:"M9 8l-2 4h4l-2 4M14 10h3a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0V9l-2-2"})]}),water:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"})}),concierge:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M4 18h16M6 18a6 6 0 0 1 12 0M12 9V7M10 7h4"})}),check:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"m8 12 3 3 5-6"})]})},ly=[["Swimming Pool","pool"],["Gymnasium","gym"],["Club House","club"],["Kids Play Area","kids"],["Jogging Track","run"],["Landscaped Garden","garden"],["24x7 Security","shield"],["Power Backup","power"],["Yoga Deck","yoga"],["Tennis Court","tennis"],["Covered Parking","parking"],["Cafeteria","cafe"],["Spa & Sauna","spa"],["High-speed Lifts","lift"],["Wi-Fi Lounge","wifi"],["CCTV Surveillance","camera"],["Mini Theatre","theatre"],["Sports Court","ball"],["Party Hall","party"],["Library","book"],["Pet Park","pet"],["EV Charging","ev"],["Rainwater Harvesting","water"],["Concierge Service","concierge"]],cy=["Swimming Pool","Gymnasium","Club House","Kids Play Area","Jogging Track","Landscaped Garden","24x7 Security","Power Backup"],dy=[["pool","pool"],["swim","pool"],["gym","gym"],["fitness","gym"],["club","club"],["kid","kids"],["play","kids"],["jog","run"],["track","run"],["walk","run"],["garden","garden"],["park","garden"],["green","garden"],["secur","shield"],["power","power"],["backup","power"],["yoga","yoga"],["meditation","yoga"],["tennis","tennis"],["badminton","tennis"],["parking","parking"],["cafe","cafe"],["restaurant","cafe"],["spa","spa"],["sauna","spa"],["lift","lift"],["elevator","lift"],["wifi","wifi"],["wi-fi","wifi"],["cctv","camera"],["theatre","theatre"],["cinema","theatre"],["sport","ball"],["basket","ball"],["football","ball"],["party","party"],["banquet","party"],["library","book"],["pet","pet"],["ev ","ev"],["charging","ev"],["water","water"],["concierge","concierge"]],uy=(e="")=>{var i;const t=ly.find(([s])=>s.toLowerCase()===String(e).toLowerCase());if(t)return t[1];const r=` ${String(e).toLowerCase()} `;return((i=dy.find(([s])=>r.includes(s)))==null?void 0:i[1])||"check"};function hy({name:e,size:t=24}){return n.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:oy[uy(e)]})}const Su=(e="")=>{if(!e)return"";try{return new URL(e,window.location.origin).href}catch{return""}},py=e=>[["name","description",e.description],["property","og:title",e.title],["property","og:description",e.description],["property","og:type",e.type||"website"],["property","og:url",e.url],["property","og:image",Su(e.image)],["property","og:site_name","HomWisor"],["name","twitter:card",e.image?"summary_large_image":"summary"],["name","twitter:title",e.title],["name","twitter:description",e.description],["name","twitter:image",Su(e.image)]];function Fi(e){const t=[],r=document.title;e.title&&(document.title=e.title),t.push(()=>{document.title=r});for(const[i,s,a]of py(e)){let o=document.head.querySelector(`meta[${i}="${s}"]`);const l=!o,c=o==null?void 0:o.getAttribute("content");a&&(l&&(o=document.createElement("meta"),o.setAttribute(i,s),document.head.appendChild(o)),o.setAttribute("content",a),t.push(()=>l?o.remove():o.setAttribute("content",c??"")))}if(e.url){let i=document.head.querySelector('link[rel="canonical"]');const s=!i,a=i==null?void 0:i.getAttribute("href");s&&(i=document.createElement("link"),i.rel="canonical",document.head.appendChild(i)),i.href=e.url,t.push(()=>s?i.remove():i.setAttribute("href",a??""))}return()=>t.reverse().forEach(i=>i())}const fy=(e="",t)=>{const r=String(e).replace(/\s+/g," ").trim();return r.length>t?r.slice(0,r.lastIndexOf(" ",t-1)>40?r.lastIndexOf(" ",t-1):t-1).replace(/[,.;:\s]+$/,"")+"…":r},my=(e={})=>{const t=String(e.title||"").trim(),r=e.price||e.priceRange,i=[t&&`${t}${e.developer?` by ${e.developer}`:""}${e.location?` at ${e.location}`:""}.`,e.bhk&&`${e.bhk}${r?` from ${r}`:""}.`,"Check the price list, floor plans, amenities and RERA details on HomWisor."].filter(Boolean).join(" ");return{title:String(e.seoTitle||"").trim()||(t?`${t} | Price & Floor Plans | HomWisor`:""),description:String(e.seoDescription||"").trim()||fy(e.overview||i,160)}},Eu="9090101401",Nu="+91 9090 101 401",gy="919090101401",xy={pin:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.6"})]}),building:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}),n.jsx("path",{d:"M16 9h2a2 2 0 0 1 2 2v10M3 21h18M8 7h4M8 11h4M8 15h4"})]}),area:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),n.jsx("path",{d:"M4 20 20 4M14 4h6v6"})]}),diamond:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M6 3h12l4 6-10 12L2 9z"}),n.jsx("path",{d:"M2 9h20M12 21 8 9l4-6 4 6-4 12"})]}),calendar:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2"}),n.jsx("path",{d:"M3 10h18M8 3v4M16 3v4"})]}),arrowR:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),arrowL:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M19 12H5M11 6l-6 6 6 6"})}),play:n.jsx(n.Fragment,{children:n.jsx("path",{d:"m9 7 8 5-8 5z",fill:"currentColor",stroke:"none"})}),check:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"m8 12 3 3 5-6"})]}),phone:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"})}),user:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"8",r:"4"}),n.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]}),mobile:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2"}),n.jsx("path",{d:"M11 18h2"})]}),mail:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),n.jsx("path",{d:"m3 7 9 6 9-6"})]}),chat:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"})}),lock:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),n.jsx("path",{d:"M8 11V8a4 4 0 0 1 8 0v3"})]}),plus:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M12 5v14M5 12h14"})}),download:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M4 21h16"})}),minus:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M5 12h14"})}),close:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),headset:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 14v-2a8 8 0 0 1 16 0v2"}),n.jsx("rect",{x:"3",y:"14",width:"4",height:"6",rx:"1.5"}),n.jsx("rect",{x:"17",y:"14",width:"4",height:"6",rx:"1.5"})]}),doc:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M6 3h8l4 4v14H6z"}),n.jsx("path",{d:"M14 3v4h4M9 12h6M9 16h6"})]}),star:n.jsx(n.Fragment,{children:n.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"})}),award:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"9",r:"6"}),n.jsx("path",{d:"m8.5 14-1.5 7 5-3 5 3-1.5-7"})]}),bulb:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"})}),leaf:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M5 19c0-8 5-14 14-14 0 9-6 14-14 14Z"}),n.jsx("path",{d:"M5 19 13 11"})]}),people:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),n.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),n.jsx("path",{d:"M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7"})]}),chart:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M4 20V10M10 20V4M16 20v-8M22 20H2"})}),key:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"8",cy:"15",r:"4"}),n.jsx("path",{d:"m10.8 12.2 8.7-8.7M16 6l3 3"})]}),trophy:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4a3 3 0 0 0 4 4M16 6h4a3 3 0 0 1-4 4M12 13v4M8 21h8M10 17h4"})}),home:n.jsx(n.Fragment,{children:n.jsx("path",{d:"m3 11 9-7 9 7M5 10v10h14V10"})})},G=({n:e,size:t=20,sw:r=1.7})=>n.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:xy[e]}),wy=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:n.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),yy=(e="")=>{let t=String(e).trim().replace("#","");return t.length===3&&(t=t.split("").map(r=>r+r).join("")),/^[0-9a-f]{6}$/i.test(t)?[0,2,4].map(r=>parseInt(t.slice(r,r+2),16)):null},Tt=(e,t,r)=>`rgb(${e.map((i,s)=>Math.round(i+(t[s]-i)*r)).join(",")})`,vy=e=>{const t=yy(e);if(!t)return{};const r=t.map(a=>(a/=255,a<=.03928?a/12.92:((a+.055)/1.055)**2.4)).reduce((a,o,l)=>a+o*[.2126,.7152,.0722][l],0);if(r<.02)return{"--pd-brand":e,"--pd-deep":Tt(t,[0,0,0],.2),"--pd-cta-bg":"var(--pd-grad)","--pd-cta-fg":"#111"};const i=[255,255,255],s=[0,0,0];return{"--pd-brand":e,"--pd-deep":Tt(t,s,.35),"--pd-accent":r>.3?Tt(t,s,.45):e,"--pd-on":Tt(t,i,.72),"--pd-on-brand":r>.45?"#111":"#fff","--pd-soft":Tt(t,i,.93),"--pd-line2":Tt(t,i,.75),"--pd-tint":Tt(t,i,.965),"--pd-glow":`rgba(${t.join(",")},.28)`,"--pd-grad":`linear-gradient(135deg, ${Tt(t,i,.3)}, ${e} 55%, ${Tt(t,s,.3)})`,"--pd-cta-bg":"#fff","--pd-cta-fg":e}},Ni=e=>String(e).padStart(2,"0"),ao=(e="")=>String(e).trim().split(/\s+/)[0].toLowerCase(),by=e=>`https://wa.me/${gy}?text=${encodeURIComponent(e)}`,Yf=e=>String(e.location||"").split(",").map(t=>t.trim()).find(t=>t&&!ea(t)&&!ta(t))||"",jy=(e="")=>{const t=String(e).split(/[–—\-|,]/).map(r=>r.trim()).filter(Boolean);return[t[0]||"",t[1]||""]},Ay=(e="")=>{const t=e.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);if(t)return{type:"iframe",src:`https://www.youtube.com/embed/${t[1]}?autoplay=1&rel=0`};const r=e.match(/vimeo\.com\/(\d+)/);return r?{type:"iframe",src:`https://player.vimeo.com/video/${r[1]}?autoplay=1`}:{type:"video",src:e}};function Cu({images:e,tagline:t,taglineSub:r,auto:i=!0}){const[s,a]=b.useState(0),o=e.length;if(b.useEffect(()=>{if(!i||o<2)return;const c=setInterval(()=>a(d=>(d+1)%o),5e3);return()=>clearInterval(c)},[i,o]),!o)return null;const l=c=>a(d=>(d+c+o)%o);return n.jsxs("div",{className:"pd-shape",children:[n.jsx("span",{className:"pd-shape-accent","aria-hidden":"true"}),n.jsxs("div",{className:"pd-shape-frame",children:[e.map((c,d)=>n.jsx("img",{src:c,alt:"",className:d===s?"on":"",loading:d===0?"eager":"lazy"},c+d)),n.jsx("span",{className:"pd-shape-shade","aria-hidden":"true"}),t&&n.jsxs("div",{className:"pd-shape-tag",children:[n.jsx("strong",{children:t}),n.jsx("i",{"aria-hidden":"true"}),r&&n.jsx("small",{children:r})]}),o>1&&n.jsxs("div",{className:"pd-shape-ctrl",children:[n.jsx("button",{type:"button",onClick:()=>l(-1),"aria-label":"Previous photo",children:n.jsx(G,{n:"arrowL",size:18})}),n.jsxs("span",{children:[Ni(s+1)," / ",Ni(o)]}),n.jsx("button",{type:"button",onClick:()=>l(1),"aria-label":"Next photo",children:n.jsx(G,{n:"arrowR",size:18})})]})]})]})}function Je({children:e,center:t}){return n.jsx("div",{className:`pd-eyebrow${t?" center":""}`,children:e})}function Ru({property:e,source:t,dark:r,compact:i,onDone:s}){const[a,o]=b.useState({name:"",phone:"",email:"",message:""}),[l,c]=b.useState("idle"),[d,h]=b.useState(""),u=j=>A=>o(k=>({...k,[j]:A.target.value})),g=async j=>{var A,k;if(j.preventDefault(),a.name.trim().length<2)return h("Please enter your name");if(!/^\+?[\d\s-]{10,15}$/.test(a.phone.trim()))return h("Please enter a valid mobile number");h(""),c("sending");try{await J.post("/enquiries",{name:a.name.trim(),phone:a.phone.trim(),email:a.email.trim(),property:(e==null?void 0:e.title)+(t?` — ${t}`:""),message:a.message.trim()||t||"Enquiry from property page",source:"property",page:window.location.pathname}),c("sent"),s==null||s()}catch(C){c("error"),h(((k=(A=C==null?void 0:C.response)==null?void 0:A.data)==null?void 0:k.error)||"Could not send right now. Please call us instead.")}};return l==="sent"?n.jsxs("div",{className:`pd-form-done${r?" dark":""}`,children:[n.jsx(G,{n:"check",size:34}),n.jsxs("strong",{children:["Thank you, ",a.name.split(" ")[0],"!"]}),n.jsx("span",{children:"Our property expert will call you shortly."})]}):n.jsxs("form",{className:`pd-form${r?" dark":""}`,onSubmit:g,noValidate:!0,children:[n.jsxs("label",{className:"pd-input",children:[n.jsx(G,{n:"user",size:17}),n.jsx("input",{value:a.name,onChange:u("name"),placeholder:"Full Name",autoComplete:"name"})]}),n.jsxs("label",{className:"pd-input",children:[n.jsx(G,{n:"mobile",size:17}),n.jsx("input",{value:a.phone,onChange:u("phone"),placeholder:"Mobile Number",inputMode:"tel",autoComplete:"tel"})]}),!i&&n.jsxs("label",{className:"pd-input",children:[n.jsx(G,{n:"mail",size:17}),n.jsx("input",{value:a.email,onChange:u("email"),placeholder:"Email Address (Optional)",inputMode:"email",autoComplete:"email"})]}),!i&&n.jsxs("label",{className:"pd-input area",children:[n.jsx(G,{n:"chat",size:17}),n.jsx("textarea",{value:a.message,onChange:u("message"),placeholder:"Your Message (Optional)",rows:3})]}),d&&n.jsx("div",{className:"pd-form-err",children:d}),n.jsx("button",{type:"submit",className:"pd-btn gold block",disabled:l==="sending",children:l==="sending"?"Sending…":n.jsxs(n.Fragment,{children:["REQUEST CALLBACK ",n.jsx(G,{n:"arrowR",size:16})]})}),n.jsxs("div",{className:"pd-form-safe",children:[n.jsx(G,{n:"lock",size:13})," Your information is safe with us."]})]})}const ky=["+91","+971","+1","+44","+65","+61"];function Sy({property:e}){const[t,r]=b.useState({name:"",code:"+91",phone:"",agree:!0}),[i,s]=b.useState("idle"),[a,o]=b.useState(""),l=d=>h=>r(u=>({...u,[d]:h.target.type==="checkbox"?h.target.checked:h.target.value})),c=async d=>{if(d.preventDefault(),t.name.trim().length<2)return o("Please enter your name");if(!/^[\d\s-]{7,14}$/.test(t.phone.trim()))return o("Please enter a valid mobile number");if(!t.agree)return o("Please allow us to contact you");o(""),s("sending");try{await J.post("/enquiries",{name:t.name.trim(),phone:`${t.code} ${t.phone.trim()}`,email:"",property:e.title,message:"Enquiry from property page (top form)",source:"property",page:window.location.pathname}),s("sent")}catch{s("idle"),o("Could not send right now. Please call us instead.")}};return i==="sent"?n.jsxs("div",{className:"pd-form-done",children:[n.jsx(G,{n:"check",size:34}),n.jsxs("strong",{children:["Thank you, ",t.name.split(" ")[0],"!"]}),n.jsx("span",{children:"Our property expert will call you shortly."})]}):n.jsxs("form",{className:"pd-hform",onSubmit:c,noValidate:!0,children:[n.jsxs("label",{children:["FULL NAME",n.jsx("input",{value:t.name,onChange:l("name"),placeholder:"Enter your name",autoComplete:"name"})]}),n.jsxs("label",{children:["MOBILE NUMBER",n.jsxs("span",{className:"pd-hform-phone",children:[n.jsx("select",{value:t.code,onChange:l("code"),"aria-label":"Country code",children:ky.map(d=>n.jsx("option",{children:d},d))}),n.jsx("input",{value:t.phone,onChange:l("phone"),placeholder:"Enter mobile number",inputMode:"tel",autoComplete:"tel-national"})]})]}),n.jsxs("label",{className:"pd-hform-check",children:[n.jsx("input",{type:"checkbox",checked:t.agree,onChange:l("agree")})," I authorize company representatives to Call, SMS, Email or WhatsApp me."]}),a&&n.jsx("div",{className:"pd-form-err",children:a}),n.jsx("button",{type:"submit",disabled:i==="sending",children:i==="sending"?"SENDING…":"SUBMIT"})]})}function Pu({open:e,onClose:t,children:r,wide:i,dark:s}){return b.useEffect(()=>{if(!e)return;const a=l=>l.key==="Escape"&&t();document.addEventListener("keydown",a);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",a),document.body.style.overflow=o}},[e,t]),e?n.jsx("div",{className:"pd-modal",role:"dialog","aria-modal":"true",onClick:t,children:n.jsxs("div",{className:`pd-modal-box${i?" wide":""}${s?" dark":""}`,onClick:a=>a.stopPropagation(),children:[n.jsx("button",{type:"button",className:"pd-modal-x",onClick:t,"aria-label":"Close",children:n.jsx(G,{n:"close"})}),r]})}):null}const Ou=[["overview","Overview"],["pricing","Price"],["plans","Floor Plans"],["highlights","Highlights"],["amenities","Amenities"],["gallery","Gallery"],["location","Location"],["about","Developer"],["faqs","FAQs"]];function Ey(){var B;const{id:e}=Li(),t=$t(),[r,i]=b.useState(null),[s,a]=b.useState([]),[o,l]=b.useState("loading"),[c,d]=b.useState(!1),[h,u]=b.useState(null),[g,j]=b.useState(0),[A,k]=b.useState("overview"),[C,p]=b.useState(!1);b.useEffect(()=>{if(r&&(r.slug===e||r.id===e))return;let N=!0;return l("loading"),d(!1),j(0),p(!1),window.scrollTo(0,0),Promise.all([J.get(`/properties/${encodeURIComponent(e)}`),J.get("/properties").catch(()=>({data:[]}))]).then(([M,P])=>{var _;N&&(i(M.data),a(P.data||[]),l("ok"),(_=M.data)!=null&&_.slug&&M.data.slug!==e&&t(`/property/${M.data.slug}${window.location.search}${window.location.hash}`,{replace:!0}))}).catch(()=>N&&l("missing")),()=>{N=!1}},[e]),b.useEffect(()=>{if(!r)return;const N=my(r);return Fi({...N,image:r.image,url:window.location.origin+_e(r),type:"website"})},[r]),b.useEffect(()=>{if(o!=="ok")return;const N=new IntersectionObserver(M=>M.forEach(P=>P.isIntersecting&&k(P.target.id)),{rootMargin:"-45% 0px -50% 0px"});return Ou.forEach(([M])=>{const P=document.getElementById(M);P&&N.observe(P)}),()=>N.disconnect()},[o,r]);const f=b.useMemo(()=>{var Vn,at,H,we;if(!r)return null;const N=na(r),M=[...new Set([r.image,...r.gallery||[]].filter(Boolean))],P=String(r.title||"").trim().split(/\s+/),_=P.length>1?P.slice(0,-1).join(" "):P[0],ue=P.length>1?P[P.length-1]:"",ce=r.developer||"the developer",ge=Yf(r)||N.locality,[T,W]=jy(r.towers),U=((Vn=r.overview)==null?void 0:Vn.trim())||`${r.title} is a ${(r.propertyTypeDetail||r.type||"residential").toLowerCase()} project by ${ce}, located at ${r.location}. It offers ${r.bhk||"premium"} ${["Commercial","Retail","SCO"].includes(r.type)?"spaces":"residences"} priced ${r.priceRange||r.price||"on request"}${r.possession?`, with possession expected by ${r.possession}`:""}. Thoughtfully planned with world-class amenities and excellent connectivity, it is one of the most sought-after addresses in ${N.locality||N.city||"the city"}.`,Y=[ge&&{icon:"pin",value:ge,label:N.city||N.locality||"Location"},T&&{icon:"building",value:T,label:W||"Towers"},r.landArea&&{icon:"area",value:r.landArea,label:"Land Area"},{icon:"diamond",value:r.propertyTypeDetail||r.type||"Residences",label:r.bhk||"Configuration"},r.possession&&!r.landArea&&{icon:"calendar",value:r.possession,label:"Possession"}].filter(Boolean).slice(0,4),$=[...String(r.bhk||"").matchAll(/\d+/g)].map(q=>q[0]),Ee=(r.pricing||[]).filter(q=>q.type||q.size||q.price).length?r.pricing:$.length?$.map(q=>({type:`${q} BHK`,size:"On request",price:"On request"})):[{type:r.bhk||r.type,size:"On request",price:r.priceRange||r.price||"On request"}],xe=(r.highlights||[]).filter(Boolean).length?r.highlights.filter(Boolean):[`Prime address at ${r.location}`,`${r.bhk||"Premium"} ${r.type?r.type.toLowerCase()+"s":"homes"} by ${ce}`,r.landArea?`Spread across ${r.landArea}${r.towers?` with ${r.towers}`:""}`:"Thoughtfully planned low-density layout",r.rera!==!1?"RERA registered project with transparent pricing":"Transparent pricing and documentation"],He=(r.amenities||[]).length?r.amenities:cy,Be=r.galleryCaptions||[],V=(r.gallery||[]).map((q,Ot)=>({src:q,caption:Be[Ot]||""})).filter(q=>q.src);V.length<5&&r.image&&!V.some(q=>q.src===r.image)&&V.unshift({src:r.image,caption:""});const be=ao(r.developer),Qe=be?s.filter(q=>q.id!==r.id&&ao(q.developer)===be):[],x=s.filter(q=>q.id!==r.id&&q.category===r.category).slice(0,4),D=Qe.length?Qe:s.filter(q=>q.id!==r.id).slice(0,8),X=r.about||{},Ze=((at=X.heading)==null?void 0:at.trim())||`About ${r.developer||"the Developer"}`,gt=((H=X.description)==null?void 0:H.trim())||`${r.developer||"The developer"} is known for its commitment to quality, innovation and a customer-centric approach. With landmark projects${Qe.length?` such as ${Qe.slice(0,3).map(q=>q.title).join(", ")}`:""}, it continues to set new benchmarks in design, construction and lifestyle across ${N.city||"the region"}.`,Di=(r.faqs||[]).filter(q=>q.question).length?r.faqs.filter(q=>q.question):[{question:`What is the exact location of ${r.title}?`,answer:`${r.title} is located at ${r.location}, with excellent connectivity to key landmarks, offices and schools.`},{question:`What is the expected possession date for ${r.title}?`,answer:r.possession?`Possession is expected by ${r.possession}. Our team can share the latest construction updates.`:"Our team will share the latest possession timeline and construction updates on request."},{question:`How can I verify the RERA approval status of ${r.title}?`,answer:r.rera!==!1?`${r.title} is a RERA registered project. Our experts can share the RERA number and help you verify it on the state RERA website.`:"Please contact our team for the latest approval details."},{question:`Who is the developer of ${r.title}?`,answer:`${r.title} is developed by ${r.developer||"a reputed developer"}.`},{question:`What types of units are available in ${r.title}?`,answer:`${r.title} offers ${r.bhk||"multiple configurations"}${r.priceRange?`, priced ${r.priceRange}`:""}.`}];return{place:N,images:M,titleA:_,titleB:ue,overview:U,facts:Y,pricing:Ee,highlights:xe,amenities:He,gallery:V,iconic:D,similar:x,aboutHeading:Ze,aboutDesc:gt,aboutSub:((we=X.subheading)==null?void 0:we.trim())||"Building a Better Tomorrow",aboutImage:X.image||M[1]||M[0],aboutStats:(X.stats||[]).filter(q=>q.value||q.label),faqs:Di,sameDev:Qe.length>0}},[r,s]);if(o==="loading")return n.jsxs("div",{className:"pd-loading",children:[n.jsx("span",{className:"pd-spin"})," Loading property…"]});if(o==="missing"||!r||!f)return n.jsx(n.Fragment,{children:n.jsx("div",{className:"pd-loading",children:n.jsxs("div",{children:[n.jsx("h2",{children:"Property not found"}),n.jsx("p",{children:"It may have been removed."}),n.jsx(F,{className:"pd-btn dark",to:"/search",children:"Browse properties"})]})})});const m=N=>u({kind:"enquiry",source:N}),y=(r.floorPlans||[]).filter(Boolean).map((N,M)=>{var P;return{src:N,caption:((P=r.floorPlanCaptions)==null?void 0:P[M])||""}}),S=r.brochure?`${r.brochure}${r.brochure.includes("?")?"&":"?"}download=1`:"",E=({className:N,children:M})=>S?n.jsx("a",{className:N,href:S,download:!0,target:"_blank",rel:"noreferrer",children:M}):n.jsx("button",{type:"button",className:N,onClick:()=>m("Brochure request"),children:M}),w=N=>{const M=document.getElementById(N);M&&window.scrollTo({top:M.getBoundingClientRect().top+window.scrollY-66,behavior:"smooth"})},R=f.aboutHeading.split(/\s+/),z=[["Property Type",r.propertyTypeDetail||hn(r).join(" · ")],["About Project",r.towers||r.bhk],["Land Area",r.landArea||(r.towers?r.bhk:"")]].filter(([,N])=>N);return n.jsxs("div",{className:"pd-page",style:vy(r.brandColor),children:[n.jsx("div",{className:"pd-bar",children:n.jsxs("div",{className:"pd-wrap pd-bar-inner",children:[r.logo&&!/via\.placeholder\.com|dummyimage\.com/.test(r.logo)&&!C&&n.jsx("span",{className:"pd-bar-logo",children:n.jsx("img",{src:r.logo,alt:r.developer||r.title,onError:()=>p(!0)})}),n.jsxs("div",{className:"pd-bar-title",children:[n.jsx("strong",{children:r.title}),n.jsx("span",{children:r.priceRange||r.price})]}),n.jsx("nav",{className:"pd-bar-nav",children:Ou.filter(([N])=>N!=="plans"||y.length>0).map(([N,M])=>n.jsx("button",{type:"button",className:A===N?"on":"",onClick:()=>w(N),children:M},N))}),n.jsx("button",{type:"button",className:"pd-btn gold sm",onClick:()=>m("Enquire now"),children:"Enquire Now"})]})}),n.jsxs("section",{className:"pd-hero",children:[f.images[0]&&n.jsx("img",{className:"pd-hero-bg",src:f.images[0],alt:r.title}),n.jsx("span",{className:"pd-hero-shade","aria-hidden":"true"}),n.jsxs("div",{className:"pd-wrap pd-hero-inner",children:[n.jsxs("div",{className:"pd-hero-info",children:[n.jsxs("div",{className:"pd-glass pd-hero-name",children:[n.jsx("span",{className:"pd-hero-eyebrow",children:(r.propertyTypeDetail||hn(r).join(" · ")||"Residential").toUpperCase()}),n.jsx("h1",{children:r.title}),n.jsx("p",{children:r.location})]}),n.jsxs("div",{className:"pd-glass pd-hero-facts",children:[z.length>0&&n.jsx("div",{className:"pd-hero-grid",children:z.map(([N,M])=>n.jsxs("div",{children:[n.jsx("small",{children:N.toUpperCase()}),n.jsx("strong",{children:M})]},N))}),n.jsxs("div",{className:"pd-hero-bottom",children:[n.jsxs("div",{className:"pd-hero-price",children:[n.jsx("small",{children:"STARTING FROM"}),n.jsxs("strong",{children:[r.price||r.priceRange||"Price on request",r.price||r.priceRange?"*":""]})]}),n.jsxs("div",{className:"pd-hero-mini",children:[n.jsx("small",{children:"AREA"}),n.jsx("strong",{children:r.area||"On request"})]}),n.jsxs("div",{className:"pd-hero-mini",children:[n.jsx("small",{children:"POSSESSION"}),n.jsx("strong",{children:r.possession||"On request"})]})]})]})]}),n.jsxs("div",{className:"pd-hero-card",children:[n.jsx("h2",{children:"Get in Touch with us."}),n.jsx("p",{children:"ENTER YOUR DETAILS BELOW TO PROCEED"}),n.jsx(Sy,{property:r})]})]})]}),n.jsx("section",{id:"overview",className:"pd-section pd-overview",children:n.jsxs("div",{className:"pd-wrap pd-split",children:[n.jsxs("div",{className:"pd-copy",children:[n.jsx(Je,{children:"OVERVIEW"}),n.jsxs("h2",{className:"pd-title",children:[n.jsx("span",{children:f.titleA}),f.titleB&&n.jsx("span",{className:"gold",children:f.titleB})]}),n.jsx("p",{className:`pd-desc${c?" open":""}`,children:f.overview}),f.overview.length>260&&n.jsxs("button",{type:"button",className:"pd-readmore",onClick:()=>d(N=>!N),children:[c?"Read Less":"Read More"," ",n.jsx(G,{n:"arrowR",size:16})]}),n.jsx("div",{className:"pd-facts",style:{"--pd-facts":Math.max(f.facts.length,2)},children:f.facts.map(N=>n.jsxs("div",{className:"pd-fact",children:[n.jsx("span",{className:"pd-fact-ic",children:n.jsx(G,{n:N.icon,size:20})}),n.jsxs("span",{children:[n.jsx("strong",{children:N.value}),n.jsx("small",{children:N.label})]})]},N.icon+N.value))}),n.jsxs("div",{className:"pd-price-line",children:[n.jsx("span",{children:"Starting from"}),n.jsx("strong",{children:r.price||r.priceRange||"Price on request"}),r.rera!==!1&&n.jsx("em",{children:"✓ RERA"})]}),n.jsxs("div",{className:"pd-actions",children:[n.jsxs(E,{className:"pd-btn dark",children:[S?"DOWNLOAD BROCHURE":"REQUEST BROCHURE"," ",n.jsx(G,{n:S?"download":"arrowR",size:16})]}),r.videoUrl&&n.jsxs("button",{type:"button",className:"pd-video-btn",onClick:()=>u({kind:"video"}),children:[n.jsx("span",{children:n.jsx(G,{n:"play",size:18})})," WATCH VIDEO"]})]})]}),n.jsx(Cu,{images:f.images,tagline:r.tagline||"A New Icon Rises",taglineSub:r.taglineSub||"Luxury living beyond compare"})]})}),n.jsx("section",{id:"pricing",className:"pd-section",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(Je,{center:!0,children:"SPACE & PRICING"}),n.jsxs("h2",{children:[r.title," ",n.jsx("span",{className:"gold",children:"Price"})]}),n.jsx("p",{children:"Unit sizes and prices — talk to our expert for the latest offers and availability."})]}),n.jsxs("div",{className:"pd-table",children:[n.jsxs("div",{className:"pd-tr head",children:[n.jsx("span",{children:"Unit Type"}),n.jsx("span",{children:"Size"}),n.jsx("span",{children:"Price"}),n.jsx("span",{})]}),f.pricing.map((N,M)=>n.jsxs("div",{className:"pd-tr",children:[n.jsxs("span",{className:"strong",children:[n.jsx(G,{n:"home",size:17})," ",N.type||"—"]}),n.jsx("span",{children:N.size||"On request"}),n.jsx("span",{className:"gold",children:N.price||"On request"}),n.jsx("span",{children:n.jsx("button",{type:"button",className:"pd-btn outline xs",onClick:()=>m(`Price details: ${N.type}`),children:"Get Details"})})]},M))]}),n.jsxs("div",{className:"pd-center-actions",children:[n.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>m("Price list request"),children:["GET COMPLETE PRICE LIST ",n.jsx(G,{n:"arrowR",size:16})]}),n.jsxs("a",{className:"pd-call-pill",href:`tel:${Eu}`,children:[n.jsx(G,{n:"phone",size:16})," Speak with an expert ",n.jsx("b",{children:Nu})]})]})]})}),y.length>0&&n.jsx("section",{id:"plans",className:"pd-section tint",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(Je,{center:!0,children:"LAYOUTS"}),n.jsxs("h2",{children:["Floor & ",n.jsx("span",{className:"gold",children:"Site Plan"})]}),r.floorPlanNote&&n.jsx("p",{children:r.floorPlanNote})]}),n.jsx("div",{className:`pd-plans n${Math.min(y.length,4)}`,children:y.map((N,M)=>n.jsxs("button",{type:"button",className:"pd-plan",onClick:()=>u({kind:"plans",index:M}),children:[n.jsxs("span",{className:"pd-plan-img",children:[n.jsx("img",{src:N.src,alt:N.caption||`${r.title} plan ${M+1}`,loading:"lazy"}),n.jsx("i",{children:"View plan"})]}),n.jsx("span",{className:"pd-plan-cap",children:N.caption||`Plan ${M+1}`})]},N.src+M))}),n.jsx("div",{className:"pd-center-actions",children:n.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>m("Floor plan request"),children:["GET ALL FLOOR PLANS ",n.jsx(G,{n:"arrowR",size:16})]})})]})}),n.jsx("section",{id:"highlights",className:"pd-section tint",children:n.jsxs("div",{className:"pd-wrap pd-split",children:[n.jsxs("div",{className:"pd-copy",children:[n.jsx(Je,{children:"EXPLORE FEATURES"}),n.jsx("h2",{className:"pd-h2-line",children:"Project Highlights"}),n.jsx("div",{className:"pd-hl-list",children:f.highlights.map((N,M)=>n.jsxs("div",{className:"pd-hl",children:[n.jsx("span",{className:"pd-hl-ic",children:n.jsx(G,{n:"check",size:18})}),n.jsx("span",{children:N})]},M))})]}),n.jsx(Cu,{images:[...f.images].reverse(),tagline:"A New Way of Living",taglineSub:r.taglineSub||"Luxury living beyond compare"})]})}),n.jsx("section",{id:"amenities",className:"pd-section",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(Je,{center:!0,children:"LUXURY LIFESTYLE"}),n.jsxs("h2",{children:["World-class ",n.jsx("span",{className:"gold",children:"Amenities"})]}),n.jsx("p",{children:"Curated for luxury, wellness and community living."})]}),n.jsx("div",{className:"pd-amenities",children:f.amenities.map(N=>n.jsxs("div",{className:"pd-amenity",children:[n.jsx("span",{children:n.jsx(hy,{name:N,size:26})}),n.jsx("strong",{children:N})]},N))})]})}),n.jsx("section",{id:"gallery",className:"pd-section soft",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(Je,{center:!0,children:"GALLERY"}),n.jsxs("h2",{className:"serif",children:[r.title," ",n.jsx("span",{className:"gold",children:"Gallery"})]}),n.jsx("p",{children:"A glimpse into a world of unmatched luxury, design and lifestyle."})]}),n.jsx("div",{className:`pd-bento n${Math.min(f.gallery.length,5)}`,children:f.gallery.slice(0,5).map((N,M)=>n.jsxs("button",{type:"button",className:`pd-bento-item i${M}`,onClick:()=>u({kind:"gallery",index:M}),children:[n.jsx("img",{src:N.src,alt:N.caption||`${r.title} photo ${M+1}`,loading:"lazy"}),N.caption&&n.jsxs("span",{className:"pd-cap",children:[N.caption,n.jsx("i",{"aria-hidden":"true"})]})]},N.src+M))}),f.gallery.length>0&&n.jsx("div",{className:"pd-center-actions",children:n.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>u({kind:"gallery",index:0}),children:["VIEW FULL GALLERY ",n.jsx(G,{n:"arrowR",size:16})]})})]})}),n.jsx("section",{id:"location",className:"pd-section",children:n.jsxs("div",{className:"pd-wrap pd-loc",children:[n.jsxs("div",{className:"pd-copy",children:[n.jsx(Je,{children:"LOCATION"}),n.jsxs("h2",{className:"pd-h2",children:["Prime ",n.jsx("span",{className:"gold",children:"Address"})]}),n.jsxs("p",{className:"pd-desc open",children:[r.title," is located at ",r.location,f.place.locality?`, one of the most sought-after micro-markets in ${f.place.city||"the city"}`:"","."]}),n.jsxs("div",{className:"pd-loc-card",children:[n.jsx("span",{className:"pd-fact-ic",children:n.jsx(G,{n:"pin",size:20})}),n.jsxs("span",{children:[n.jsx("strong",{children:r.location}),n.jsx("small",{children:[f.place.locality,f.place.city].filter(Boolean).join(" · ")})]})]}),n.jsxs("a",{className:"pd-btn outline",href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${r.title}, ${r.location}`)}`,target:"_blank",rel:"noreferrer",children:["OPEN IN GOOGLE MAPS ",n.jsx(G,{n:"arrowR",size:16})]})]}),n.jsx("div",{className:"pd-map",children:n.jsx("iframe",{title:`${r.title} location map`,src:`https://maps.google.com/maps?q=${encodeURIComponent(r.location||r.title)}&z=14&output=embed`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})}),n.jsxs("section",{id:"about",className:"pd-section",children:[n.jsxs("div",{className:"pd-wrap pd-split about",children:[n.jsxs("div",{className:"pd-copy",children:[n.jsx(Je,{children:"PROJECT EXCELLENCE"}),n.jsxs("h2",{className:"pd-h2",children:[R[0]," ",n.jsx("span",{className:"gold",children:R.slice(1).join(" ")})]}),n.jsx("div",{className:"pd-about-sub",children:f.aboutSub}),n.jsx("p",{className:"pd-desc open",children:f.aboutDesc}),f.aboutStats.length>0&&n.jsx("div",{className:"pd-stats",children:f.aboutStats.map((N,M)=>n.jsxs("div",{className:"pd-stat",children:[n.jsx("span",{className:"pd-stat-ic",children:n.jsx(G,{n:["chart","key","people","trophy"][M%4],size:22})}),n.jsxs("span",{children:[n.jsx("strong",{children:N.value}),n.jsx("small",{children:N.label})]})]},M))}),n.jsx("div",{className:"pd-features",children:[["award","Quality Construction"],["bulb","Innovative Designs"],["leaf","Sustainable Development"],["people","Customer Centric Approach"]].map(([N,M])=>n.jsxs("div",{className:"pd-feature",children:[n.jsx("span",{children:n.jsx(G,{n:N,size:20})}),M]},M))})]}),n.jsxs("div",{className:"pd-about-visual",children:[n.jsx("img",{src:f.aboutImage,alt:f.aboutHeading,loading:"lazy"}),n.jsx("span",{className:"pd-about-shade","aria-hidden":"true"}),n.jsxs("div",{className:"pd-about-quote",children:[n.jsx("i",{"aria-hidden":"true"}),"SPACES",n.jsx("br",{}),"THAT INSPIRE",n.jsx("br",{}),"A BRIGHTER",n.jsx("br",{}),"TOMORROW"]}),n.jsxs("div",{className:"pd-about-bar",children:[n.jsxs("span",{children:[n.jsx(G,{n:"home",size:18})," Iconic Developments"]}),n.jsxs("span",{children:[n.jsx(G,{n:"leaf",size:18})," Greener Communities"]}),n.jsxs("span",{children:[n.jsx(G,{n:"people",size:18})," A Better Tomorrow"]})]})]})]}),f.iconic.length>0&&n.jsx("div",{className:"pd-iconic",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-iconic-head",children:[n.jsxs("div",{children:[n.jsx(Je,{children:f.sameDev?"OUR SIGNATURE DEVELOPMENTS":"MORE PROJECTS"}),n.jsx("h2",{className:"pd-h2",children:f.sameDev?n.jsxs(n.Fragment,{children:["Iconic Projects ",n.jsxs("span",{className:"gold",children:["by ",r.developer]})]}):n.jsxs(n.Fragment,{children:["Explore More ",n.jsx("span",{className:"gold",children:"Projects"})]})})]}),n.jsxs(F,{className:"pd-btn outline sm",to:f.sameDev?`/search?q=${encodeURIComponent(ao(r.developer))}`:"/search",children:["VIEW ALL PROJECTS ",n.jsx(G,{n:"arrowR",size:15})]})]}),n.jsx(Ny,{items:f.iconic})]})})]}),n.jsx("section",{id:"faqs",className:"pd-section",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(Je,{center:!0,children:"CONCIERGE SUPPORT"}),n.jsxs("h2",{children:["Everything You ",n.jsx("span",{className:"gold",children:"Need to Know"})]}),n.jsxs("p",{children:["Get answers to the most common questions about ",r.title,".",n.jsx("br",{}),"Our team is here to help you at every step of your journey."]}),n.jsxs("a",{className:"pd-expert",href:`tel:${Eu}`,children:[n.jsx("span",{className:"pd-expert-ic",children:n.jsx(G,{n:"phone",size:20})}),n.jsxs("span",{children:[n.jsx("small",{children:"TALK TO OUR EXPERT"}),n.jsx("strong",{children:Nu}),n.jsx("em",{children:"AVAILABLE NOW"})]})]})]}),n.jsxs("div",{className:"pd-faq-grid",children:[n.jsxs("div",{children:[n.jsx("div",{className:"pd-faqs",children:f.faqs.map((N,M)=>n.jsxs("div",{className:`pd-faq${g===M?" open":""}`,children:[n.jsxs("button",{type:"button",onClick:()=>j(g===M?-1:M),"aria-expanded":g===M,children:[n.jsx("span",{className:"pd-faq-no",children:Ni(M+1)}),n.jsx("span",{className:"pd-faq-q",children:N.question}),n.jsx("span",{className:"pd-faq-tog",children:n.jsx(G,{n:g===M?"minus":"plus",size:16,sw:2})})]}),g===M&&N.answer&&n.jsx("p",{children:N.answer})]},M))}),n.jsx("div",{className:"pd-perks",children:[["headset","Dedicated","Relationship Manager"],["doc","Latest Project","Updates"],["calendar","Site Visit","Assistance"],["star","Exclusive Offers","& Pricing Details"]].map(([N,M,P])=>n.jsxs("div",{className:"pd-perk",children:[n.jsx("span",{children:n.jsx(G,{n:N,size:20})}),n.jsxs("small",{children:[M,n.jsx("br",{}),P]})]},M))})]}),n.jsxs("div",{className:"pd-touch",children:[n.jsx(Je,{children:"GET IN TOUCH"}),n.jsxs("h3",{children:["Get in Touch with ",n.jsx("span",{className:"gold",children:"Us."})]}),n.jsx("p",{children:"Fill in your details and our team will get back to you shortly."}),n.jsx(Ru,{property:r,source:"Get in touch",dark:!0})]})]})]})}),f.similar.length>0&&n.jsx("section",{className:"pd-section tint",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsx("div",{className:"pd-iconic-head",children:n.jsxs("div",{children:[n.jsx(Je,{children:"EXPLORE MORE"}),n.jsxs("h2",{className:"pd-h2",children:["Similar ",n.jsx("span",{className:"gold",children:"Projects"})]})]})}),n.jsx("div",{className:"pd-similar",children:f.similar.map(N=>n.jsxs(F,{to:_e(N),className:"pd-sim",children:[n.jsx("img",{src:N.image,alt:N.title,loading:"lazy"}),n.jsxs("div",{children:[n.jsx("strong",{children:N.title}),n.jsx("span",{className:"gold",children:N.priceRange||N.price}),n.jsxs("small",{children:[n.jsx(G,{n:"pin",size:13})," ",N.location]})]})]},N.id))})]})}),n.jsx(Nc,{context:r.title},r.id),n.jsx("div",{className:"pd-dock",children:n.jsxs("div",{className:"pd-wrap pd-dock-inner",children:[n.jsxs("div",{className:"pd-dock-prop",children:[f.images[0]&&n.jsx("img",{src:f.images[0],alt:""}),n.jsxs("span",{children:[n.jsx("strong",{children:r.title}),n.jsx("small",{children:r.price||r.priceRange?`${r.price||r.priceRange}* Onwards`:"Price on request"})]})]}),n.jsxs("div",{className:"pd-dock-actions",children:[n.jsxs(E,{className:"pd-dock-brochure",children:[n.jsx(G,{n:"download",size:20}),n.jsx("span",{children:"Brochure"})]}),n.jsxs("button",{type:"button",className:"pd-dock-enquire",onClick:()=>m("Enquire now"),children:[n.jsx(G,{n:"mail",size:18}),n.jsx("span",{children:"ENQUIRE NOW"})]}),n.jsx("a",{className:"pd-dock-wa",href:by(`Hi, I am interested in ${r.title}. Please share more details.`),target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",children:n.jsx(wy,{})})]})]})}),n.jsxs(Pu,{open:(h==null?void 0:h.kind)==="enquiry",onClose:()=>u(null),dark:!0,children:[n.jsxs("div",{className:"pd-modal-head",children:[n.jsx(Je,{children:((B=h==null?void 0:h.source)==null?void 0:B.toUpperCase())||"ENQUIRE"}),n.jsx("h3",{children:r.title}),n.jsx("p",{children:"Share your details and our expert will call you back."})]}),n.jsx(Ru,{property:r,source:h==null?void 0:h.source,dark:!0},h==null?void 0:h.source)]}),n.jsx(Pu,{open:(h==null?void 0:h.kind)==="video",onClose:()=>u(null),wide:!0,children:r.videoUrl&&(()=>{const N=Ay(r.videoUrl);return N.type==="iframe"?n.jsx("div",{className:"pd-video",children:n.jsx("iframe",{src:N.src,title:`${r.title} video`,allow:"autoplay; encrypted-media; fullscreen",allowFullScreen:!0})}):n.jsx("div",{className:"pd-video",children:n.jsx("video",{src:N.src,controls:!0,autoPlay:!0,playsInline:!0})})})()}),(h==null?void 0:h.kind)==="plans"&&n.jsx(Tu,{items:y,start:h.index||0,title:`${r.title} — Floor & Site Plan`,onClose:()=>u(null)}),(h==null?void 0:h.kind)==="gallery"&&n.jsx(Tu,{items:f.gallery,start:h.index||0,title:r.title,onClose:()=>u(null)})]})}function Ny({items:e}){const[t,r]=b.useState(null),i=s=>t==null?void 0:t.scrollBy({left:s*(t.clientWidth*.8),behavior:"smooth"});return n.jsxs("div",{className:"pd-iconic-row-wrap",children:[n.jsx("button",{type:"button",className:"pd-round left",onClick:()=>i(-1),"aria-label":"Previous",children:n.jsx(G,{n:"arrowL",size:18})}),n.jsx("div",{className:"pd-iconic-row",ref:r,children:e.map(s=>n.jsxs(F,{to:_e(s),className:"pd-iconic-card",children:[n.jsx("img",{src:s.image,alt:s.title,loading:"lazy"}),n.jsxs("div",{children:[n.jsxs("span",{children:[n.jsx("strong",{children:s.title}),n.jsxs("small",{children:[n.jsx(G,{n:"pin",size:13})," ",Yf(s)||na(s).locality,", ",na(s).city]})]}),n.jsx("em",{children:n.jsx(G,{n:"arrowR",size:16})})]})]},s.id))}),n.jsx("button",{type:"button",className:"pd-round right",onClick:()=>i(1),"aria-label":"Next",children:n.jsx(G,{n:"arrowR",size:18})})]})}function Tu({items:e,start:t,title:r,onClose:i}){const[s,a]=b.useState(t),o=e.length;b.useEffect(()=>{const c=h=>{h.key==="Escape"&&i(),h.key==="ArrowRight"&&a(u=>(u+1)%o),h.key==="ArrowLeft"&&a(u=>(u-1+o)%o)};document.addEventListener("keydown",c);const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=d}},[o,i]);const l=e[s];return n.jsxs("div",{className:"pd-lightbox",role:"dialog","aria-modal":"true","aria-label":`${r} gallery`,children:[n.jsx("button",{type:"button",className:"pd-lb-x",onClick:i,"aria-label":"Close",children:n.jsx(G,{n:"close",size:22})}),n.jsxs("div",{className:"pd-lb-stage",children:[n.jsx("button",{type:"button",className:"pd-round",onClick:()=>a(c=>(c-1+o)%o),"aria-label":"Previous",children:n.jsx(G,{n:"arrowL",size:20})}),n.jsxs("figure",{children:[n.jsx("img",{src:l.src,alt:l.caption||r}),n.jsxs("figcaption",{children:[n.jsx("span",{children:l.caption||r}),n.jsxs("b",{children:[Ni(s+1)," / ",Ni(o)]})]})]}),n.jsx("button",{type:"button",className:"pd-round",onClick:()=>a(c=>(c+1)%o),"aria-label":"Next",children:n.jsx(G,{n:"arrowR",size:20})})]}),n.jsx("div",{className:"pd-lb-thumbs",children:e.map((c,d)=>n.jsx("button",{type:"button",className:d===s?"on":"",onClick:()=>a(d),children:n.jsx("img",{src:c.src,alt:"",loading:"lazy"})},c.src+d))})]})}function Cy(){const{slug:e}=Li(),t=$t(),[r,i]=b.useState(null),[s,a]=b.useState([]),[o,l]=b.useState([]),[c,d]=b.useState("loading"),[h,u]=b.useState("All"),[g,j]=b.useState(!1);b.useEffect(()=>{let y=!0;return d("loading"),u("All"),j(!1),window.scrollTo(0,0),Promise.all([J.get(`/builders/${encodeURIComponent(e)}`),J.get("/properties").catch(()=>({data:[]})),J.get("/builders").catch(()=>({data:[]}))]).then(([S,E,w])=>{y&&(i(S.data),a(E.data||[]),l((w.data||[]).filter(R=>R.id!==S.data.id)),d("ok"),S.data.slug&&S.data.slug!==e&&t(Ss(S.data),{replace:!0}))}).catch(()=>y&&d("missing")),()=>{y=!1}},[e]);const A=b.useMemo(()=>r?Hf(r,s):[],[r,s]),k=b.useMemo(()=>["All",...new Set(A.flatMap(hn))],[A]),C=h==="All"?A:A.filter(y=>hn(y).includes(h)),p=[...new Set(A.map(_f).filter(Boolean))];if(b.useEffect(()=>{if(r)return Fi({title:`${r.name} Projects in Gurugram | HomWisor`,description:r.subtext||`Explore ${A.length||""} ${r.name} projects on HomWisor — prices, floor plans, amenities and RERA details.`.replace(/\s+/g," "),image:gl(r),url:window.location.origin+Ss(r)})},[r,A.length]),c==="loading")return n.jsxs(n.Fragment,{children:[n.jsx(Xe,{}),n.jsxs("div",{className:"dv-state",children:[n.jsx("span",{className:"dv-spin"})," Loading developer…"]})]});if(!r)return n.jsxs(n.Fragment,{children:[n.jsx(Xe,{}),n.jsx("div",{className:"dv-state",children:n.jsxs("div",{children:[n.jsx("h1",{children:"Developer not found"}),n.jsx("p",{children:"It may have been removed."}),n.jsx(F,{to:"/",className:"dv-btn",children:"Back to home"})]})}),n.jsx(ft,{})]});const f=gl(r),m=r.count||parseInt(r.projects,10)||0;return n.jsxs("div",{className:"dv-page",children:[n.jsx(Xe,{}),n.jsx("section",{className:"dv-hero",children:n.jsxs("div",{className:"dv-wrap",children:[n.jsxs("nav",{className:"dv-crumbs",children:[n.jsx(F,{to:"/",children:"Home"}),n.jsx("span",{children:"›"}),n.jsx(F,{to:"/#developers",children:"Developers"}),n.jsx("span",{children:"›"}),r.name]}),n.jsxs("div",{className:"dv-hero-inner",children:[n.jsx("div",{className:"dv-logo",children:f&&!g?n.jsx("img",{src:f,alt:`${r.name} logo`,onError:()=>j(!0)}):n.jsx("span",{children:Uf(r.name)})}),n.jsxs("div",{className:"dv-intro",children:[n.jsx("span",{className:"dv-eyebrow",children:"PROPERTY DEVELOPER"}),n.jsx("h1",{children:r.name}),r.subtext&&n.jsx("p",{className:"dv-tag",children:r.subtext}),n.jsxs("div",{className:"dv-stats",children:[m>0&&n.jsxs("div",{children:[n.jsx("b",{children:m}),n.jsx("small",{children:"Total projects"})]}),n.jsxs("div",{children:[n.jsx("b",{children:A.length}),n.jsx("small",{children:"On HomWisor"})]}),p.length>0&&n.jsxs("div",{children:[n.jsx("b",{children:p.length}),n.jsx("small",{children:p.length===1?"City":"Cities"})]}),r.established&&n.jsxs("div",{children:[n.jsx("b",{children:r.established}),n.jsx("small",{children:"Established"})]})]})]})]}),r.description&&n.jsx("p",{className:"dv-about",children:r.description}),r.website&&/^https?:\/\//.test(r.website)&&n.jsx("a",{className:"dv-site",href:r.website,target:"_blank",rel:"noopener noreferrer",children:"Official website ↗"})]})}),n.jsx("section",{className:"dv-list",children:n.jsxs("div",{className:"dv-wrap",children:[n.jsxs("div",{className:"dv-list-head",children:[n.jsxs("h2",{children:[r.name," ",n.jsx("span",{children:"Projects"})]}),k.length>2&&n.jsx("div",{className:"dv-filters",children:k.map(y=>n.jsxs("button",{type:"button",className:y===h?"on":"",onClick:()=>u(y),children:[y," ",n.jsx("em",{children:y==="All"?A.length:A.filter(S=>hn(S).includes(y)).length})]},y))})]}),C.length>0?n.jsx("div",{className:"dv-grid",children:C.map(y=>n.jsx(Jw,{p:y},y.id))}):n.jsxs("div",{className:"dv-empty",children:[n.jsxs("strong",{children:["No ",r.name," projects listed yet."]}),n.jsxs("p",{children:["Our experts can still share prices and availability for ",r.name," projects."]}),n.jsx(F,{to:"/contact",className:"dv-btn",children:"Talk to an expert"})]})]})}),o.length>0&&n.jsx("section",{className:"dv-others",children:n.jsxs("div",{className:"dv-wrap",children:[n.jsxs("h2",{children:["Other ",n.jsx("span",{children:"Developers"})]}),n.jsx("div",{className:"dv-chips",children:o.map(y=>n.jsx(F,{to:Ss(y),children:y.name},y.id))})]})}),n.jsx(ft,{})]})}const Ry=["Apartment","Villa","Builder Floor","Plot","Penthouse","Commercial / Office","Shop / SCO"],Py=["Southern Peripheral Road","Dwarka Expressway","Sohna Road","New Gurugram","Golf Course Road","Golf Course Extension Road","Other"],Lu={name:"",phone:"",email:"",type:"",location:"",project:"",config:"",area:"",price:"",message:"",website:""};function Oy(){const[e,t]=b.useState(Lu),[r,i]=b.useState("idle"),[s,a]=b.useState(""),o=c=>d=>t(h=>({...h,[c]:d.target.value}));b.useEffect(()=>Fi({title:"Sell Your Property in Gurugram | HomWisor",description:"List your apartment, villa, plot or commercial property with HomWisor. Get a free valuation and verified buyers.",url:window.location.origin+"/sell"}),[]);const l=async c=>{var h,u;if(c.preventDefault(),e.name.trim().length<2)return a("Please enter your name");if(!/^\+?[\d\s-]{10,15}$/.test(e.phone.trim()))return a("Please enter a valid 10-digit mobile number");if(!e.type)return a("Please choose the property type");if(!e.location)return a("Please choose the location");a(""),i("sending");const d=[`Property type: ${e.type}`,`Location: ${e.location}`,e.project&&`Project / society: ${e.project}`,e.config&&`Configuration: ${e.config}`,e.area&&`Size: ${e.area}`,e.price&&`Expected price: ${e.price}`,e.message&&`Notes: ${e.message}`].filter(Boolean).join(`
`);try{await J.post("/enquiries",{name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim(),subject:"Sell property",property:`Sell: ${e.type} in ${e.location}${e.project?` (${e.project})`:""}`,message:d,source:"sell",page:"/sell",website:e.website}),i("sent"),t(Lu)}catch(g){i("idle"),a(((u=(h=g==null?void 0:g.response)==null?void 0:h.data)==null?void 0:u.error)||"Could not send right now. Please call us instead.")}};return n.jsxs("div",{className:"sl-page",children:[n.jsx(Xe,{}),n.jsx("section",{className:"sl-hero",children:n.jsxs("div",{className:"sl-wrap sl-grid",children:[n.jsxs("div",{className:"sl-copy",children:[n.jsx("span",{className:"sl-eyebrow",children:"SELL WITH HOMWISOR"}),n.jsxs("h1",{children:["Sell your property ",n.jsx("span",{children:"faster, at the right price."})]}),n.jsx("p",{children:"Share a few details and our property expert will call you with a free valuation and a plan to reach verified buyers."}),n.jsxs("ul",{className:"sl-points",children:[n.jsxs("li",{children:[n.jsx("b",{children:"1"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Free valuation"}),n.jsx("small",{children:"Based on recent deals in your locality"})]})]}),n.jsxs("li",{children:[n.jsx("b",{children:"2"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Verified buyers"}),n.jsx("small",{children:"Serious, pre-qualified enquiries only"})]})]}),n.jsxs("li",{children:[n.jsx("b",{children:"3"}),n.jsxs("div",{children:[n.jsx("strong",{children:"End-to-end support"}),n.jsx("small",{children:"Paperwork, negotiation and registration"})]})]})]})]}),n.jsx("div",{className:"sl-card",children:r==="sent"?n.jsxs("div",{className:"sl-done",children:[n.jsx("span",{children:"✓"}),n.jsx("h2",{children:"Thank you!"}),n.jsx("p",{children:"Your property details have been sent. Our expert will call you shortly."}),n.jsx("button",{type:"button",onClick:()=>i("idle"),children:"List another property"})]}):n.jsxs("form",{onSubmit:l,noValidate:!0,children:[n.jsx("h2",{children:"List your property"}),n.jsx("p",{className:"sl-sub",children:"Takes less than a minute"}),n.jsxs("div",{className:"sl-fields",children:[n.jsxs("label",{children:["Full name *",n.jsx("input",{value:e.name,onChange:o("name"),placeholder:"Your name",autoComplete:"name"})]}),n.jsxs("label",{children:["Mobile number *",n.jsx("input",{value:e.phone,onChange:o("phone"),placeholder:"10-digit mobile number",inputMode:"tel",autoComplete:"tel"})]}),n.jsxs("label",{className:"full",children:["Email",n.jsx("input",{value:e.email,onChange:o("email"),placeholder:"Optional",inputMode:"email",autoComplete:"email"})]}),n.jsxs("label",{children:["Property type *",n.jsxs("select",{value:e.type,onChange:o("type"),children:[n.jsx("option",{value:"",children:"Select type"}),Ry.map(c=>n.jsx("option",{children:c},c))]})]}),n.jsxs("label",{children:["Location *",n.jsxs("select",{value:e.location,onChange:o("location"),children:[n.jsx("option",{value:"",children:"Select location"}),Py.map(c=>n.jsx("option",{children:c},c))]})]}),n.jsxs("label",{className:"full",children:["Project / society name",n.jsx("input",{value:e.project,onChange:o("project"),placeholder:"e.g. DLF The Crest, Sector 54"})]}),n.jsxs("label",{children:["Configuration",n.jsx("input",{value:e.config,onChange:o("config"),placeholder:"e.g. 3 BHK"})]}),n.jsxs("label",{children:["Size",n.jsx("input",{value:e.area,onChange:o("area"),placeholder:"e.g. 1,850 sq.ft."})]}),n.jsxs("label",{className:"full",children:["Expected price",n.jsx("input",{value:e.price,onChange:o("price"),placeholder:"e.g. ₹2.5 Cr"})]}),n.jsxs("label",{className:"full",children:["Anything else?",n.jsx("textarea",{value:e.message,onChange:o("message"),rows:3,placeholder:"Floor, facing, furnishing, possession…"})]}),n.jsx("input",{className:"sl-trap",tabIndex:-1,autoComplete:"off",value:e.website,onChange:o("website"),"aria-hidden":"true"})]}),s&&n.jsx("div",{className:"sl-err",role:"alert",children:s}),n.jsx("button",{type:"submit",className:"sl-submit",disabled:r==="sending",children:r==="sending"?"Sending…":"Get a free valuation →"}),n.jsx("span",{className:"sl-fine",children:"By submitting, you agree to be contacted by HomWisor about your property."})]})})]})}),n.jsx(ft,{})]})}function Ty(){const[e,t]=b.useState([]),[r,i]=b.useState(0),[s,a]=b.useState(!0),[o,l]=b.useState(!0),[c,d]=b.useState(!0),h=b.useRef(null);b.useEffect(()=>{J.get("/snaps").then(k=>{t(k.data),d(!1)}).catch(()=>d(!1))},[]),b.useEffect(()=>{h.current&&(s?h.current.play().catch(()=>{}):h.current.pause())},[s,r]),b.useEffect(()=>{const k=C=>{C.key==="ArrowDown"&&j(),C.key==="ArrowUp"&&A(),C.key===" "&&(C.preventDefault(),a(p=>!p))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)});const u=e[r],g=e.length,j=()=>i(k=>(k+1)%g),A=()=>i(k=>(k-1+g)%g);return c?n.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"Loading snaps..."}):u?n.jsxs("div",{style:{minHeight:"100vh",background:"#0a0a0a",color:"#fff",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",borderBottom:"1px solid rgba(255,255,255,.08)",background:"#0a0a0a",position:"sticky",top:0,zIndex:10},children:[n.jsxs(F,{to:"/",style:{display:"flex",alignItems:"center",gap:8,color:"#fff",fontWeight:800,fontSize:14},children:[n.jsx("span",{style:{width:28,height:28,background:"#d8232a",borderRadius:6,display:"grid",placeItems:"center",fontWeight:900,fontSize:12},children:"100"}),"acress.com",n.jsx("span",{style:{fontWeight:400,opacity:.6,fontSize:12,marginLeft:4},children:"/ property-snaps"})]}),n.jsx(F,{to:"/",style:{width:34,height:34,borderRadius:"50%",background:"rgba(255,255,255,.08)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.12)"},children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"14px",display:"grid",gridTemplateColumns:"420px 420px",gap:18,justifyContent:"center",alignItems:"start"},className:"snaps-layout",children:[n.jsxs("div",{style:{position:"relative",background:"#000",borderRadius:20,overflow:"hidden",aspectRatio:"9/16",maxHeight:"78vh",border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 20px 60px rgba(0,0,0,.6)"},className:"video-box",children:[n.jsx("video",{ref:h,src:u.videoUrl,poster:u.image||u.thumbnail,muted:o,loop:!0,playsInline:!0,autoPlay:!0,style:{width:"100%",height:"100%",objectFit:"cover"},onClick:()=>a(!s)},u.id),n.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:12,background:"linear-gradient(to bottom, rgba(0,0,0,.55) 0%, transparent 100%)",display:"flex",alignItems:"center",gap:10},children:[n.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",flexShrink:0,border:"2px solid rgba(255,255,255,.9)"},children:n.jsx("span",{style:{fontWeight:900,fontSize:11,color:"#d8232a"},children:"100"})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontWeight:700,fontSize:13,lineHeight:1.1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff"},children:u.title}),n.jsx("div",{style:{fontSize:11,opacity:.8,color:"#fff"},children:"HomWisor"})]}),n.jsx("button",{onClick:()=>l(!o),style:{width:34,height:34,borderRadius:"50%",background:o?"rgba(0,0,0,.5)":"rgba(255,255,255,.9)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:o?"#fff":"#111",cursor:"pointer",backdropFilter:"blur(6px)"},children:o?n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),n.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),n.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}),n.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),n.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}):n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),n.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),n.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]})})]}),n.jsxs("div",{style:{position:"absolute",top:"38%",left:0,right:0,textAlign:"center",pointerEvents:"none"},children:[n.jsx("div",{style:{fontSize:10,letterSpacing:1.5,opacity:.9,color:"#fff",fontWeight:600,textShadow:"0 2px 10px rgba(0,0,0,.6)"},children:"WHERE"}),n.jsx("div",{style:{fontSize:22,fontWeight:800,letterSpacing:.5,color:"#fff",textShadow:"0 4px 20px rgba(0,0,0,.7)",marginTop:2,fontFamily:"'Playfair Display', serif"},children:"SPACIOUS LIVING"}),n.jsx("div",{style:{width:40,height:1.5,background:"#fff",margin:"6px auto",opacity:.8}}),n.jsx("div",{style:{fontSize:9,letterSpacing:2,opacity:.85,color:"#fff"},children:u.badge||"LUXURY EDITION"})]}),n.jsxs("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",pointerEvents:"none"},children:[!s&&n.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(0,0,0,.45)",backdropFilter:"blur(8px)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)"},children:n.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"#fff",children:n.jsx("path",{d:"M8 5.14v14l11-7z"})})}),n.jsx("button",{onClick:()=>a(!s),style:{position:"absolute",inset:0,background:"transparent",border:"none",cursor:"pointer",pointerEvents:"auto"},"aria-label":"play"})]}),n.jsx("button",{onClick:A,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M15 18l-6-6 6-6"})})}),n.jsx("button",{onClick:j,style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M9 18l6-6-6-6"})})}),n.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"10px 12px",background:"linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.2) 60%, transparent 100%)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[n.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[n.jsx("path",{d:"M19 12H5"}),n.jsx("path",{d:"M12 19l-7-7 7-7"})]})}),n.jsx("button",{onClick:()=>a(!s),style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,.9)",border:"none",display:"grid",placeItems:"center",cursor:"pointer"},children:s?n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:[n.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),n.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}):n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:n.jsx("path",{d:"M8 5.14v14l11-7z"})})}),n.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"M12 5l7 7-7 7"})]})}),n.jsx("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:n.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)",color:"#fff"},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[n.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),n.jsx("polyline",{points:"16 6 12 2 8 6"}),n.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]})})})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[n.jsxs("div",{style:{flex:1,background:"rgba(0,0,0,.35)",border:"1px solid rgba(255,255,255,.12)",borderRadius:12,padding:8,display:"flex",alignItems:"center",gap:8},children:[n.jsx("img",{src:u.thumbnail||u.image,alt:"thumb",style:{width:42,height:32,borderRadius:6,objectFit:"cover",border:"1px solid rgba(255,255,255,.2)"}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:{fontSize:11,fontWeight:600,lineHeight:1.2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Welcome to a ",u.title.slice(0,28),"..."]}),n.jsxs("div",{style:{fontSize:10,opacity:.7},children:["Where spacious living • ",u.location]})]})]}),n.jsxs("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{background:"#d8232a",color:"#fff",padding:"8px 12px",borderRadius:20,fontWeight:800,fontSize:11,display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap",textDecoration:"none"},children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z"})}),u.phone]})]})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,maxHeight:"78vh",overflowY:"auto"},className:"scrollbar-hide",children:[n.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid rgba(255,255,255,.08)",borderRadius:16,padding:14,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:1,color:"rgba(255,255,255,.5)"},children:"NAVIGATION"}),n.jsxs("div",{style:{fontWeight:800,fontSize:22,marginTop:2},children:[r+1,n.jsxs("span",{style:{opacity:.35,fontWeight:600},children:["/",g]})]})]}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:A,disabled:g<=1,style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",opacity:r===0?.6:1},children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:n.jsx("path",{d:"M18 15l-6-6-6 6"})})}),n.jsx("button",{onClick:j,disabled:g<=1,style:{width:44,height:44,borderRadius:12,background:"#2a2a2a",border:"1px solid rgba(255,255,255,.12)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,.2)"},children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:n.jsx("path",{d:"M6 9l6 6 6-6"})})})]})]}),n.jsxs("div",{style:{background:"#f8f9fb",borderRadius:20,padding:16,color:"#111",boxShadow:"0 20px 60px rgba(0,0,0,.25)",border:"1px solid #eef0f3"},children:[n.jsxs("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"flex-start"},children:[n.jsx("span",{style:{color:"#dc2626",marginTop:1},children:"⚡"}),n.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#991b1b",lineHeight:1.4},children:u.demandText})]}),n.jsxs("div",{style:{background:"#fefce8",border:"1px solid #fde68a",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"center",marginTop:8},children:[n.jsx("span",{style:{width:8,height:8,background:"#22c55e",borderRadius:"50%",display:"inline-block",boxShadow:"0 0 0 4px rgba(34,197,94,.15)"}}),n.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#92400e"},children:[u.activeBuyers," active buyers viewing this project right now"]})]}),n.jsxs("div",{style:{marginTop:14},children:[n.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"PROJECT OVERVIEW"}),n.jsx("div",{style:{background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:12,padding:12,marginTop:8},children:n.jsxs("div",{style:{fontSize:13,lineHeight:1.5,color:"#374151",fontStyle:"italic"},children:['"',u.description,'"']})})]}),n.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center"},children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#dc2626",strokeWidth:"1.8",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"MICRO-MARKET LOCATION"}),n.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.microMarket||u.location})]})]}),n.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center",color:"#059669"},children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#059669",strokeWidth:"1.8",children:[n.jsx("path",{d:"M3 21h18"}),n.jsx("path",{d:"M3 7v14"}),n.jsx("path",{d:"M9 21V7"}),n.jsx("path",{d:"M15 21V7"}),n.jsx("path",{d:"M21 7V21"}),n.jsx("path",{d:"M3 7l9-4 9 4"}),n.jsx("path",{d:"M9 7h6"})]})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"INVESTMENT/PRICE"}),n.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.price})]}),n.jsx("button",{style:{width:32,height:32,borderRadius:10,background:"#fff",border:"1px solid #e5e7eb",display:"grid",placeItems:"center",cursor:"pointer"},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#6b7280",strokeWidth:"1.8",children:[n.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7-6 11-6 11S6 15 6 8z"}),n.jsx("path",{d:"M10 21h4"}),n.jsx("path",{d:"M12 17v4"})]})})]}),n.jsxs("div",{style:{background:"#0f1e2e",borderRadius:14,padding:12,marginTop:12,color:"#fff"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontWeight:700,fontSize:11,letterSpacing:.4},children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"1.8",children:[n.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),n.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"INVESTOR MATRIX TOOL"]}),n.jsx("span",{style:{fontSize:10,fontWeight:700,background:"rgba(56,189,248,.15)",color:"#38bdf8",padding:"3px 7px",borderRadius:20,border:"1px solid rgba(56,189,248,.25)"},children:"◉ Verified ROI"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12,borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:12},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:10,opacity:.6},children:"Est. Monthly Rental"}),n.jsx("div",{style:{fontWeight:800,fontSize:13,marginTop:2},children:u.monthlyRental})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{fontSize:10,opacity:.6},children:"Annualized ROI Yield"}),n.jsxs("div",{style:{fontWeight:800,fontSize:13,marginTop:2,color:"#22c55e"},children:["~ ",u.roi]})]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[n.jsx("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{height:36,background:"#d8232a",color:"#fff",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"Call Now"}),n.jsx(F,{to:`/property/${u.id.replace("snap","p")||""}`,style:{height:36,background:"#fff",color:"#111",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"View Details"})]})]}),n.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto"},className:"scrollbar-hide",children:e.map((k,C)=>n.jsxs("button",{onClick:()=>i(C),style:{flexShrink:0,width:64,height:44,borderRadius:8,overflow:"hidden",border:C===r?"2px solid #d8232a":"1px solid #e5e7eb",opacity:C===r?1:.6,cursor:"pointer",position:"relative",padding:0},children:[n.jsx("img",{src:k.thumbnail||k.image,alt:k.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),C===r&&n.jsx("span",{style:{position:"absolute",inset:0,background:"rgba(216,35,42,.15)",borderRadius:6}})]},k.id))})]}),n.jsxs("div",{style:{textAlign:"center",fontSize:11,opacity:.5,paddingBottom:10},children:["Swipe up/down or use arrow keys • ",g," Snaps • Auto-play • Fully dynamic from Admin"]})]})]}),n.jsx("style",{children:`
        @media(max-width: 960px){
          .snaps-layout{ grid-template-columns: 1fr !important; max-width: 500px !important; }
          .video-box{ max-height: 64vh !important; }
        }
        .scrollbar-hide::-webkit-scrollbar{ display:none; }
        .scrollbar-hide{ -ms-overflow-style:none; scrollbar-width:none; }
      `})]}):n.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"No snaps found. Add via Admin Panel."})}const Kn="#D4AF37",$r="#9A7418";function Ly(){const[e,t]=b.useState({name:"",phone:"",email:"",subject:"",message:""}),r=c=>{t({...e,[c.target.name]:c.target.value})},[i,s]=b.useState("idle"),[a,o]=b.useState(""),l=async c=>{var d,h;if(c.preventDefault(),i!=="sending"){o(""),s("sending");try{await J.post("/enquiries",{name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim(),subject:e.subject,message:e.message.trim(),source:"contact",page:window.location.pathname}),s("sent"),t({name:"",phone:"",email:"",subject:"",message:""})}catch(u){s("idle"),o(((h=(d=u==null?void 0:u.response)==null?void 0:d.data)==null?void 0:h.error)||"Could not send your message right now. Please call us instead.")}}};return n.jsxs("div",{className:"contact-page",children:[n.jsx(Xe,{}),n.jsxs("section",{className:"contact-hero",children:[n.jsx("div",{className:"contact-hero-overlay"}),n.jsxs("div",{className:"contact-hero-content",children:[n.jsx("span",{className:"contact-eyebrow",children:"GET IN TOUCH"}),n.jsxs("h1",{children:["Let's Find Your",n.jsx("span",{children:" Dream Property"})]}),n.jsx("p",{children:"Have questions about a property or looking for your next investment? Our property experts are here to help."})]})]}),n.jsx("section",{className:"contact-section",children:n.jsxs("div",{className:"contact-container",children:[n.jsxs("div",{className:"contact-info",children:[n.jsx("span",{className:"section-eyebrow",children:"CONTACT US"}),n.jsxs("h2",{children:["We’re Here To",n.jsx("br",{}),n.jsx("span",{children:"Help You"})]}),n.jsx("p",{className:"contact-intro",children:"Whether you're buying, selling or investing in real estate, our team is ready to assist you with expert guidance and personalized property solutions."}),n.jsxs("div",{className:"info-list",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"})})}),n.jsxs("div",{children:[n.jsx("span",{children:"Call Us"}),n.jsx("a",{href:"tel:9090101401",children:"+91 9090 101 401"})]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),n.jsx("path",{d:"m3 7 9 6 9-6"})]})}),n.jsxs("div",{children:[n.jsx("span",{children:"Email Us"}),n.jsx("a",{href:"mailto:brejendra@homwisor.com",children:"brejendra@homwisor.com"}),n.jsx("a",{href:"mailto:birendra.homwisor@gmail.com",children:"birendra.homwisor@gmail.com"})]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}),n.jsxs("div",{children:[n.jsx("span",{children:"Our Office"}),n.jsx("p",{children:"Unit no : 704 , Sohna Road , ILD Trade Centre, Gurugram , Haryana , 122018"})]})]})]}),n.jsxs("a",{href:"https://wa.me/919090101401",target:"_blank",rel:"noopener noreferrer",className:"contact-whatsapp",children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),"Chat With Us On WhatsApp"]})]}),n.jsxs("div",{className:"contact-form-card",children:[n.jsxs("div",{className:"form-heading",children:[n.jsx("span",{children:"SEND US A MESSAGE"}),n.jsxs("h2",{children:["How Can We",n.jsx("strong",{children:" Help You?"})]}),n.jsx("p",{children:"Fill out the form below and our team will get back to you shortly."})]}),n.jsxs("form",{onSubmit:l,children:[n.jsxs("div",{className:"form-grid",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Your Name"}),n.jsx("input",{type:"text",name:"name",value:e.name,onChange:r,placeholder:"Enter your name",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Phone Number"}),n.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:r,placeholder:"+91 XXXXX XXXXX",required:!0})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Email Address"}),n.jsx("input",{type:"email",name:"email",value:e.email,onChange:r,placeholder:"Enter your email",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"I'm Interested In"}),n.jsxs("select",{name:"subject",value:e.subject,onChange:r,required:!0,children:[n.jsx("option",{value:"",children:"Select an option"}),n.jsx("option",{children:"Buying a Property"}),n.jsx("option",{children:"Selling a Property"}),n.jsx("option",{children:"Property Investment"}),n.jsx("option",{children:"Site Visit"}),n.jsx("option",{children:"General Enquiry"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message"}),n.jsx("textarea",{name:"message",value:e.message,onChange:r,placeholder:"Tell us how we can help you...",rows:"5"})]}),i==="sent"&&n.jsx("div",{className:"contact-form-note ok",role:"status",children:"✓ Thank you! Your message has been sent — our property expert will contact you shortly."}),a&&n.jsx("div",{className:"contact-form-note err",role:"alert",children:a}),n.jsxs("button",{type:"submit",className:"submit-btn",disabled:i==="sending",children:[i==="sending"?"Sending…":"Send Message",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]}),n.jsx("p",{className:"form-note",children:"Your information is completely confidential and will never be shared."})]})]})]})}),n.jsx(ft,{}),n.jsx("style",{children:`

        /* =====================================================
           CONTACT PAGE
        ===================================================== */

        .contact-page {
          background: #fff;
          color: #111;
          font-family: "Manrope", Arial, sans-serif;
          overflow-x: hidden;
        }

        .contact-page *,
        .contact-page *::before,
        .contact-page *::after {
          box-sizing: border-box;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {
          position: relative;
          min-height: 500px;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            linear-gradient(
              90deg,
              rgba(9,23,43,.94),
              rgba(9,23,43,.65),
              rgba(9,23,43,.38)
            ),
            url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85")
            center/cover no-repeat;
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,.12),
            rgba(0,0,0,.28)
          );
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;

          width: min(1100px, 100%);
          padding: 130px 20px 80px;

          text-align: center;
        }

        .contact-eyebrow,
        .section-eyebrow {
          display: inline-block;

          color: ${Kn};

          font-size: 11px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: 2.5px;

          text-transform: uppercase;
        }

        .contact-hero h1 {
          max-width: 850px;

          margin: 16px auto 0;

          color: #fff;

          font-size: 64px;
          line-height: 1.08;
          font-weight: 850;

          letter-spacing: -2px;
        }

        .contact-hero h1 span {
          color: ${Kn};
        }

        .contact-hero p {
          max-width: 620px;

          margin: 20px auto 0;

          color: rgba(255,255,255,.78);

          font-size: 14px;
          line-height: 1.6;
          font-weight: 500;
        }

        /* =====================================================
           CONTACT SECTION
        ===================================================== */

        .contact-section {
          padding:45px 20px 0px;
          background: #fff;
        }

        .contact-container {
          width: min(1100px, 100%);
          margin: 0 auto;

          display: grid;
          grid-template-columns: 1fr 1fr;

          gap: 80px;
          align-items: start;
        }

        /* =====================================================
           LEFT INFO
        ===================================================== */

        .contact-info h2 {
          margin: 13px 0 18px;

          color: #111827;

          font-size: 48px;
          line-height: 1.15;
          font-weight: 850;

          letter-spacing: -1.4px;
        }

        .contact-info h2 span {
          color: ${Kn};
        }

        .contact-intro {
          max-width: 510px;

          margin: 0;

          color: #737b8c;

          font-size: 14px;
          line-height: 1.6;
          font-weight: 500;
        }

        /* =====================================================
           INFO LIST
        ===================================================== */

        .info-list {
          display: grid;
          gap: 20px;

          margin-top: 34px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .info-icon {
          flex-shrink: 0;

          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;

          background: #f7f7f7;
          color: ${$r};
        }

        .info-icon svg {
          width: 21px;
          height: 21px;
        }

        .info-item > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .info-item span {
          color: #999;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .info-item a,
        .info-item p {
          margin: 0;

          color: #222;

          font-size: 13px;
          line-height: 1.5;
          font-weight: 600;

          text-decoration: none;
        }

        .info-item a:hover {
          color: ${$r};
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

          padding: 13px 18px;

          border-radius: 9px;

          background: #25d366;
          color: #fff;

          font-size: 11px;
          font-weight: 800;

          text-decoration: none;

          transition: .25s ease;
        }

        .contact-whatsapp svg {
          width: 17px;
          height: 17px;
        }

        .contact-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,211,102,.2);
        }

        /* =====================================================
           FORM CARD
        ===================================================== */

        .contact-form-card {
          padding: 34px;

          background: #fff;

          border: 1px solid #eef0f3;
          border-radius: 18px;

          box-shadow: 0 18px 45px rgba(9,23,43,.07);
        }

        .form-heading > span {
          color: ${$r};

          font-size: 11px;
          line-height: 1.2;
          font-weight: 800;

          letter-spacing: 2px;
        }

        .form-heading h2 {
          margin: 10px 0 8px;

          color: #111827;

          font-size: 28px;
          line-height: 1.2;
          font-weight: 800;

          letter-spacing: -.5px;
        }

        .form-heading h2 strong {
          color: ${$r};
          font-weight: 800;
        }

        .form-heading p {
          margin: 0;

          color: #737b8c;

          font-size: 12px;
          line-height: 1.6;
          font-weight: 500;
        }

        /* =====================================================
           FORM
        ===================================================== */

        form {
          margin-top: 25px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          margin-bottom: 17px;
        }

        .form-group label {
          display: block;

          margin-bottom: 7px;

          color: #333;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .3px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;

          border: 1px solid #e7e9ed;
          border-radius: 8px;

          background: #fff;
          color: #222;

          padding: 12px 13px;

          outline: none;

          font-family: "Manrope", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 500;

          transition: .2s ease;
        }

        .form-group input,
        .form-group select {
          height: 44px;
        }

        .form-group textarea {
        height:80px;
          min-height: 80px;
          resize: vertical;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #aaa;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: ${Kn};
          box-shadow: 0 0 0 3px rgba(212,175,55,.08);
        }

        /* =====================================================
           SUBMIT
        ===================================================== */

        .contact-form-note {
          margin: 0 0 14px;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.5;
        }
        .contact-form-note.ok { background: #ecfdf3; border: 1px solid #bbf7d0; color: #166534; }
        .contact-form-note.err { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; }
        .submit-btn:disabled { opacity: .7; cursor: wait; }

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

          font-family: "Manrope", Arial, sans-serif;
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
          background: ${$r};
          transform: translateY(-1px);
        }

        .form-note {
          margin: 4px 0 0;

          text-align: center;

          color: #999;

          font-size: 9px;
          line-height: 1.5;
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
          color: ${Kn};
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

          background: ${Kn};
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

          .contact-hero h1 {
            font-size: 32px;
          }

          .contact-hero p {
            font-size: 13px;
          }

          .contact-info h2 {
            font-size: 32px;
          }

          .contact-intro {
            font-size: 13px;
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
            font-size: 29px;
            line-height: 1.15;
            letter-spacing: -.7px;
            font-weight: 800;
          }

          .contact-hero p {
            font-size: 12px;
            line-height: 1.6;
            font-weight: 500;
          }

          .contact-eyebrow,
          .section-eyebrow {
            font-size: 9px;
            line-height: 1.2;
            letter-spacing: 1.8px;
            font-weight: 800;
          }

          .contact-section {
            padding: 50px 20px 0;
          }

          .contact-info h2 {
            font-size: 29px;
            line-height: 1.15;
            letter-spacing: -.7px;
            font-weight: 800;
          }

          .contact-intro {
            font-size: 12px;
            line-height: 1.6;
          }

          .info-list {
            gap: 18px;
            margin-top: 28px;
          }

          .info-icon {
            width: 44px;
            height: 44px;
          }

          .info-item span {
            font-size: 9px;
          }

          .info-item a,
          .info-item p {
            font-size: 11px;
            line-height: 1.5;
          }

          .contact-whatsapp {
            width: 100%;
            justify-content: center;

            font-size: 10px;
            font-weight: 800;
          }

          .contact-form-card {
            padding: 22px 17px;
            border-radius: 17px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-heading > span {
            font-size: 9px;
            letter-spacing: 1.7px;
          }

          .form-heading h2 {
            font-size: 24px;
            line-height: 1.2;
            letter-spacing: -.5px;
            font-weight: 800;
          }

          .form-heading p {
            font-size: 10px;
            line-height: 1.6;
          }

          .form-group label {
            font-size: 9px;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            font-size: 11px;
          }

          .submit-btn {
            font-size: 10px;
          }

          .form-note {
            font-size: 8px;
            line-height: 1.5;
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

        /* =====================================================
           HOMWISOR HOME PAGE TYPOGRAPHY MATCH
           Font Family + Font Size
           ===================================================== */

        .contact-page,
        .contact-page * {
          font-family: "Manrope", Arial, sans-serif !important;
        }

        /* =====================================================
           DESKTOP TYPOGRAPHY
        ===================================================== */

        .contact-hero h1 {
          // font-size: 36px !important;
          line-height: 1.05 !important;
          font-weight: 800 !important;
          letter-spacing: -1px !important;
        }

        .contact-hero p {
          font-size: 14px !important;
          line-height: 1.6 !important;
          font-weight: 500 !important;
        }

        .contact-eyebrow,
        .section-eyebrow,
        .form-heading > span {
          font-size: 11px !important;
          line-height: 1.2 !important;
          font-weight: 800 !important;
          letter-spacing: 2px !important;
        }

        .contact-info h2 {
          font-size: 36px !important;
          line-height: 1.15 !important;
          font-weight: 800 !important;
          letter-spacing: -1px !important;
        }

        .contact-intro {
          font-size: 14px !important;
          line-height: 1.6 !important;
          font-weight: 500 !important;
        }

        .info-item span {
          font-size: 10px !important;
          font-weight: 800 !important;
          letter-spacing: .8px !important;
        }

        .info-item a,
        .info-item p {
          font-size: 13px !important;
          line-height: 1.5 !important;
          font-weight: 600 !important;
        }

        .contact-whatsapp {
          font-size: 11px !important;
          font-weight: 800 !important;
        }

        .form-heading h2 {
          font-size: 28px !important;
          line-height: 1.2 !important;
          font-weight: 800 !important;
          letter-spacing: -.5px !important;
        }

        .form-heading p {
          font-size: 12px !important;
          line-height: 1.6 !important;
          font-weight: 500 !important;
        }

        .form-group label {
          font-size: 10px !important;
          font-weight: 800 !important;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          font-family: "Manrope", Arial, sans-serif !important;
          font-size: 12px !important;
          line-height: 1.5 !important;
          font-weight: 500 !important;
        }

        .submit-btn {
          font-family: "Manrope", Arial, sans-serif !important;
          font-size: 11px !important;
          font-weight: 800 !important;
        }

        .form-note {
          font-size: 11px !important;
          line-height: 1.5 !important;
        }

        /* =====================================================
           TABLET TYPOGRAPHY
        ===================================================== */

        @media (max-width: 900px) {

          .contact-hero h1 {
            font-size: 32px !important;
          }

          .contact-hero p {
            font-size: 13px !important;
          }

          .contact-info h2 {
            font-size: 32px !important;
          }

          .contact-intro {
            font-size: 13px !important;
          }
        }

        /* =====================================================
           MOBILE TYPOGRAPHY
        ===================================================== */

        @media (max-width: 600px) {

          .contact-hero h1 {
            font-size: 29px !important;
            line-height: 1.15 !important;
            letter-spacing: -.7px !important;
            font-weight: 800 !important;
          }

          .contact-hero p {
            font-size: 12px !important;
            line-height: 1.6 !important;
            font-weight: 500 !important;
          }

          .contact-eyebrow,
          .section-eyebrow {
            font-size: 9px !important;
            letter-spacing: 1.8px !important;
          }

          .contact-info h2 {
            font-size: 29px !important;
            line-height: 1.15 !important;
            letter-spacing: -.7px !important;
            font-weight: 800 !important;
          }

          .contact-intro {
            font-size: 12px !important;
            line-height: 1.6 !important;
          }

          .info-item span {
            font-size: 9px !important;
          }

          .info-item a,
          .info-item p {
            font-size: 11px !important;
            line-height: 1.5 !important;
          }

          .contact-whatsapp {
            font-size: 10px !important;
          }

          .form-heading > span {
            font-size: 9px !important;
            letter-spacing: 1.7px !important;
          }

          .form-heading h2 {
            font-size: 24px !important;
            line-height: 1.2 !important;
            letter-spacing: -.5px !important;
          }

          .form-heading p {
            font-size: 10px !important;
            line-height: 1.6 !important;
          }

          .form-group label {
            font-size: 9px !important;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            font-size: 11px !important;
          }

          .submit-btn {
            font-size: 10px !important;
          }

          .form-note {
            font-size: 8px !important;
          }
        }

      `})]})}const Z=({children:e,...t})=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...t,children:e}),bt={user:e=>n.jsxs(Z,{...e,children:[n.jsx("circle",{cx:"12",cy:"8",r:"4"}),n.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]}),lock:e=>n.jsxs(Z,{...e,children:[n.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),n.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]}),mail:e=>n.jsxs(Z,{...e,children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),n.jsx("path",{d:"m3 7 9 6 9-6"})]}),eye:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"}),n.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),eyeOff:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M10.6 5.1A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-2.4 3.3M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6"}),n.jsx("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"}),n.jsx("path",{d:"m3 3 18 18"})]}),shield:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"}),n.jsx("path",{d:"m9 12 2 2 4-4"})]}),alert:e=>n.jsxs(Z,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M12 8v5M12 16h.01"})]}),check:e=>n.jsxs(Z,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"m8 12 3 3 5-6"})]}),clock:e=>n.jsxs(Z,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M12 7v5l3 2"})]}),users:e=>n.jsxs(Z,{...e,children:[n.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),n.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),n.jsx("path",{d:"M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7"})]}),plus:e=>n.jsx(Z,{...e,children:n.jsx("path",{d:"M12 5v14M5 12h14"})}),key:e=>n.jsxs(Z,{...e,children:[n.jsx("circle",{cx:"8",cy:"15",r:"4"}),n.jsx("path",{d:"m10.8 12.2 8.7-8.7M16 6l3 3M14 8l2 2"})]}),grid:e=>n.jsxs(Z,{...e,children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),n.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]}),building:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}),n.jsx("path",{d:"M16 9h2a2 2 0 0 1 2 2v10"}),n.jsx("path",{d:"M3 21h18M8 7h4M8 11h4M8 15h4"})]}),film:e=>n.jsxs(Z,{...e,children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),n.jsx("path",{d:"m10 8.5 5 3.5-5 3.5z"})]}),image:e=>n.jsxs(Z,{...e,children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2.5"}),n.jsx("circle",{cx:"9",cy:"10",r:"2"}),n.jsx("path",{d:"m21 16-5-5-9 9"})]}),pin:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),gift:e=>n.jsxs(Z,{...e,children:[n.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),n.jsx("path",{d:"M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"}),n.jsx("path",{d:"M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5"})]}),chat:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"}),n.jsx("path",{d:"M8 11h8M8 14.5h5"})]}),logout:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"}),n.jsx("path",{d:"m10 17 5-5-5-5M15 12H4"})]}),external:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M14 4h6v6M20 4l-9 9"}),n.jsx("path",{d:"M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"})]}),refresh:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M20 11a8 8 0 0 0-14.9-3.9L4 8M4 4v4h4"}),n.jsx("path",{d:"M4 13a8 8 0 0 0 14.9 3.9L20 16M20 20v-4h-4"})]}),menu:e=>n.jsx(Z,{...e,children:n.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})}),x:e=>n.jsx(Z,{...e,children:n.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),search:e=>n.jsxs(Z,{...e,children:[n.jsx("circle",{cx:"11",cy:"11",r:"7"}),n.jsx("path",{d:"m20 20-3.5-3.5"})]}),arrow:e=>n.jsx(Z,{...e,children:n.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),phone:e=>n.jsx(Z,{...e,children:n.jsx("path",{d:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"})}),whatsapp:e=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",...e,children:n.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),trash:e=>n.jsx(Z,{...e,children:n.jsx("path",{d:"M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"})}),edit:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"}),n.jsx("path",{d:"m14 6 4 4"})]}),gem:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"M6 3h12l4 6-10 12L2 9z"}),n.jsx("path",{d:"M2 9h20M12 21 8 9l4-6 4 6-4 12"})]}),star:e=>n.jsx(Z,{...e,children:n.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"})}),trend:e=>n.jsxs(Z,{...e,children:[n.jsx("path",{d:"m3 17 6-6 4 4 8-8"}),n.jsx("path",{d:"M15 7h6v6"})]})},My=(e="")=>{let t=0;return e.length>=8&&t++,e.length>=12&&t++,/[a-z]/.test(e)&&/[A-Z]/.test(e)&&t++,/\d/.test(e)&&/[^a-z0-9]/i.test(e)&&t++,t},oo=[{label:"Too weak",color:"#ef4444"},{label:"Weak",color:"#f97316"},{label:"Fair",color:"#eab308"},{label:"Good",color:"#84cc16"},{label:"Strong",color:"#22c55e"}];function Av({value:e}){if(!e)return null;const t=My(e);return n.jsxs("div",{style:{display:"grid",gap:6},children:[n.jsx("div",{className:"hwa-strength",children:n.jsx("i",{style:{width:`${(t+1)*20}%`,background:oo[t].color}})}),n.jsxs("span",{className:"hwa-hint",children:["Strength: ",n.jsx("strong",{style:{color:oo[t].color},children:oo[t].label})]})]})}function zy({value:e,onChange:t,placeholder:r="••••••••",autoComplete:i="current-password",invalid:s,id:a,autoFocus:o}){const[l,c]=b.useState(!1);return n.jsxs("div",{className:"hwa-input-wrap",children:[n.jsx(bt.lock,{}),n.jsx("input",{id:a,className:`hwa-input${s?" invalid":""}`,type:l?"text":"password",value:e,onChange:d=>t(d.target.value),placeholder:r,autoComplete:i,autoFocus:o,required:!0}),n.jsx("button",{type:"button",className:"hwa-eye",onClick:()=>c(!l),"aria-label":l?"Hide password":"Show password",children:l?n.jsx(bt.eyeOff,{}):n.jsx(bt.eye,{})})]})}const Iy=()=>n.jsx("span",{className:"hwa-spinner","aria-hidden":"true"}),Mu=({type:e="error",children:t})=>n.jsxs("div",{className:`hwa-alert ${e}`,role:e==="error"?"alert":"status",children:[e==="success"?n.jsx(bt.check,{}):e==="info"?n.jsx(bt.clock,{}):n.jsx(bt.alert,{}),n.jsx("span",{children:t})]}),By={expired:"Your session expired after 24 hours. Please sign in again.",signedout:"You have been signed out. Please sign in again.",loggedout:"You have signed out successfully."};function Fy(){const[e,t]=b.useState({email:"",password:""}),[r,i]=b.useState(""),[s,a]=b.useState(!1),[o]=xc(),l=$t();if(b.useEffect(()=>{hl()||Df()},[]),hl())return n.jsx(jr,{to:"/admin/dashboard",replace:!0});const c=By[o.get("session")],d=async h=>{var g,j;h.preventDefault();const u=e.email.trim().toLowerCase();if(!u||!e.password){i("Enter your email and password");return}if(!Hw.test(u)){i("Enter a valid email address");return}a(!0),i("");try{const A=await J.post("/admin/login",{email:u,password:e.password});Uw(A.data.token,A.data.admin),l("/admin/dashboard",{replace:!0})}catch(A){i(((j=(g=A.response)==null?void 0:g.data)==null?void 0:j.error)||(A.code==="ECONNABORTED"?"The server took too long to respond. Please try again.":"Could not reach the server. Check your connection and try again.")),t(k=>({...k,password:""}))}finally{a(!1)}};return n.jsxs("div",{className:"hwa hwa-login",children:[n.jsxs("aside",{className:"hwa-login-visual",children:[n.jsx("img",{src:Js,alt:"HomWisor",className:"hwa-login-logo"}),n.jsxs("div",{className:"hwa-login-copy",children:[n.jsx("span",{className:"hwa-eyebrow",children:"Admin Console"}),n.jsxs("h1",{children:["Manage every listing, lead & ",n.jsx("span",{children:"launch"})," in one place."]}),n.jsx("p",{children:"Update properties, banners, offers and snaps — changes go live on HomWisor.com instantly."}),n.jsxs("div",{className:"hwa-login-points",children:[n.jsxs("div",{children:[n.jsx(bt.shield,{})," Secure JWT sessions"]}),n.jsxs("div",{children:[n.jsx(bt.clock,{})," Auto sign-out after 24h"]}),n.jsxs("div",{children:[n.jsx(bt.users,{})," Role-based access"]})]})]})]}),n.jsx("main",{className:"hwa-login-panel",children:n.jsxs("div",{className:"hwa-login-card",children:[n.jsx("img",{src:Js,alt:"HomWisor",className:"hwa-login-mobile-logo"}),n.jsx("h2",{children:"Welcome back"}),n.jsx("p",{className:"hwa-sub",children:"Sign in to the HomWisor admin panel"}),c&&!r&&n.jsx(Mu,{type:o.get("session")==="loggedout"?"success":"info",children:c}),r&&n.jsx(Mu,{children:r}),n.jsxs("form",{onSubmit:d,noValidate:!0,children:[n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{htmlFor:"hwa-email",children:"Email address"}),n.jsxs("div",{className:"hwa-input-wrap",children:[n.jsx(bt.mail,{}),n.jsx("input",{id:"hwa-email",type:"email",inputMode:"email",className:"hwa-input",value:e.email,onChange:h=>t({...e,email:h.target.value}),placeholder:"you@homwisor.com",autoComplete:"username",autoCapitalize:"none",spellCheck:!1,autoFocus:!0})]})]}),n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{htmlFor:"hwa-password",children:"Password"}),n.jsx(zy,{id:"hwa-password",value:e.password,onChange:h=>t({...e,password:h}),placeholder:"Enter your password"})]}),n.jsx("button",{type:"submit",className:"hwa-btn hwa-btn-gold",disabled:s,style:{marginTop:8},children:s?n.jsxs(n.Fragment,{children:[n.jsx(Iy,{})," Signing in…"]}):"Sign In"})]}),n.jsxs("div",{className:"hwa-login-foot",children:[n.jsx(F,{to:"/",children:"← Back to website"}),n.jsxs("span",{className:"hwa-secure",children:[n.jsx(bt.shield,{})," Authorised staff only"]})]})]})})]})}const bn="#D4AF37",Gr="#9A7418",zu="#F7F5EF";function Dy(){const[e,t]=xc(),r=e.get("category")||"All",i=u=>t(u==="All"?{}:{category:u},{replace:!0}),[s,a]=b.useState([]),[o,l]=b.useState("loading");b.useEffect(()=>{let u=!0;return J.get("/blogs").then(g=>{u&&(a(g.data||[]),l("ok"))}).catch(()=>u&&l("error")),()=>{u=!1}},[]),b.useEffect(()=>Fi({title:"Real Estate Insights | HomWisor Blog",description:"Property news, market insights, investment ideas and practical guides for Gurgaon and Delhi NCR.",url:window.location.origin+"/blog"}),[]);const c=b.useMemo(()=>{const u=[...new Set(s.map(g=>g.category).filter(Boolean))];return["All",...pl.filter(g=>u.includes(g)),...u.filter(g=>!pl.includes(g))]},[s]),d=s.find(u=>u.featured)||s[0],h=r==="All"?s:s.filter(u=>u.category===r);return n.jsxs("div",{className:"blog-page",children:[n.jsx(Xe,{}),n.jsxs("section",{className:"blog-hero",children:[n.jsx("div",{className:"blog-hero-overlay"}),n.jsxs("div",{className:"blog-container blog-hero-inner",children:[n.jsx("div",{className:"blog-eyebrow",children:"HOMWISOR INSIGHTS"}),n.jsxs("h1",{children:["Real Estate ",n.jsx("span",{children:"Insights."})]}),n.jsx("p",{children:"Stay informed with property news, market insights, investment ideas and practical guides for Gurgaon and Delhi NCR."})]})]}),n.jsxs("main",{children:[n.jsx("section",{className:"blog-section blog-featured",children:n.jsxs("div",{className:"blog-container",children:[n.jsxs("div",{className:"blog-section-head",children:[n.jsxs("div",{children:[n.jsx("div",{className:"blog-eyebrow dark",children:"FEATURED INSIGHT"}),n.jsxs("h2",{children:["What’s happening in ",n.jsx("span",{children:"NCR real estate."})]})]}),n.jsxs("a",{href:"#all-articles",className:"blog-view-link",children:["View All Articles ",n.jsx("span",{children:"↗"})]})]}),o==="loading"&&n.jsxs("div",{className:"blog-state",children:[n.jsx("span",{className:"blog-spin"})," Loading articles…"]}),o==="error"&&n.jsx("div",{className:"blog-state",children:"Articles could not be loaded right now. Please refresh the page."}),o==="ok"&&!d&&n.jsx("div",{className:"blog-state",children:"New articles are coming soon."}),d&&n.jsxs("article",{className:"featured-card",children:[n.jsxs(F,{to:tn(d),className:"featured-image",children:[n.jsx("img",{src:d.image,alt:d.title}),n.jsx("span",{children:d.category})]}),n.jsxs("div",{className:"featured-content",children:[n.jsx("small",{children:fl(d.publishedAt)}),n.jsx("h3",{children:d.title}),n.jsx("p",{children:d.excerpt}),n.jsxs(F,{to:tn(d),children:["Read Article ",n.jsx("span",{children:"→"})]})]})]})]})}),n.jsx("section",{className:"blog-section blog-all",id:"all-articles",children:n.jsxs("div",{className:"blog-container",children:[n.jsx("div",{className:"blog-section-head compact",children:n.jsxs("div",{children:[n.jsx("div",{className:"blog-eyebrow dark",children:"LATEST ARTICLES"}),n.jsxs("h2",{children:["Explore our ",n.jsx("span",{children:"latest stories."})]})]})}),s.length>0&&n.jsx("div",{className:"category-row",children:c.map(u=>n.jsx("button",{className:r===u?"active":"",onClick:()=>i(u),children:u},u))}),o==="ok"&&s.length>0&&h.length===0&&n.jsxs("div",{className:"blog-state",children:["No articles in “",r,"” yet. ",n.jsx("button",{type:"button",onClick:()=>i("All"),children:"Show all articles"})]}),n.jsx("div",{className:"blog-grid",children:h.map(u=>{const g=u.slug;return n.jsxs("article",{className:"blog-card",children:[n.jsxs(F,{to:tn(g),className:"blog-card-image",children:[n.jsx("img",{src:u.image,alt:u.title}),n.jsx("span",{children:u.category})]}),n.jsxs("div",{className:"blog-card-content",children:[n.jsx("small",{children:fl(u.publishedAt)}),n.jsx("h3",{children:u.title}),n.jsx("p",{children:u.excerpt}),n.jsxs(F,{to:tn(g),children:["Read Article ",n.jsx("span",{children:"→"})]})]})]},u.id||u.slug)})})]})}),n.jsx("section",{className:"blog-newsletter",children:n.jsxs("div",{className:"blog-container newsletter-inner",children:[n.jsxs("div",{children:[n.jsx("div",{className:"blog-eyebrow",children:"STAY UPDATED"}),n.jsx("h2",{children:"Get smarter property insights."}),n.jsx("p",{children:"Follow Homwisor for useful real estate news, property guides and market updates."})]}),n.jsx(F,{to:"/contact/",className:"blog-btn",children:"Talk to an Expert"})]})})]}),n.jsx(ft,{}),n.jsx("style",{children:`
        .blog-state { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 160px; padding: 30px 16px; border: 1px dashed #e2dccb; border-radius: 18px; background: #fff; color: #6b6450; font-size: 14px; font-weight: 600; text-align: center; flex-wrap: wrap; }
        .blog-state button { border: none; background: none; color: ${Gr}; font: inherit; font-weight: 800; cursor: pointer; text-decoration: underline; }
        .blog-spin { width: 20px; height: 20px; border: 2.5px solid #eee4c4; border-top-color: ${bn}; border-radius: 50%; animation: blog-spin .7s linear infinite; }
        @keyframes blog-spin { to { transform: rotate(360deg); } }
        a.featured-image { display: block; }
        * {
          box-sizing: border-box;
        }

        .blog-page {
          min-height: 100vh;
          background: ${zu};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .blog-page,
        .blog-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .blog-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .blog-hero {
          min-height: 500px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          color: #fff;

          background-image: url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;

          background: linear-gradient(
            90deg,
            rgba(5,20,38,.92) 0%,
            rgba(8,23,42,.72) 45%,
            rgba(5,18,34,.78) 100%
          );
        }

        .blog-hero:after,
        .blog-hero-glow {
          display: none;
        }

        .blog-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 120px 20px 70px;
          text-align: center;
        }

        .blog-eyebrow {
          color: ${bn};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .blog-eyebrow.dark {
          color: ${Gr};
        }

        .blog-hero h1 {
          margin: 15px auto 0;
          max-width: 760px;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 850;
        }

        .blog-hero h1 span {
          color: ${bn};
          display: block;
        }

        .blog-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.78);
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
          border-bottom: 1px solid ${bn};
          padding-bottom: 6px;
        }

        .blog-view-link span {
          color: ${Gr};
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
          object-fit: fill;
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
          color: ${bn};
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
          color: ${Gr};
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
          color: ${Gr};
          margin-left: 5px;
        }

        .blog-all {
          background: ${zu};
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
          color: ${bn};
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
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
          object-fit: fill;
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
          background: ${bn};
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
            padding: 100px 18px 55px;
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
            padding: 100px 18px 55px;
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
      `})]})}const Iu=(e,t)=>`s${t+1}-${String(e||"section").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,50)}`,jn=(e,t="")=>String(e).split(/(\*\*[^*]+\*\*)/g).map((r,i)=>/^\*\*[^*]+\*\*$/.test(r)?n.jsx("strong",{children:r.slice(2,-2)},t+i):r);function Wy(e=""){return String(e).replace(/\r\n/g,`
`).split(/\n\s*\n/).map(t=>{const r=t.split(`
`).map(i=>i.trim()).filter(Boolean);if(!r.length)return null;if(r.every(i=>/^[-•*]\s+/.test(i)))return{type:"ul",items:r.map(i=>i.replace(/^[-•*]\s+/,""))};if(r.every(i=>/^\d+[.)]\s+/.test(i)))return{type:"steps",items:r.map(i=>{const s=i.replace(/^\d+[.)]\s+/,""),a=s.match(/^(.+?)\s+[—–-]\s+(.+)$/);return a?{title:a[1],text:a[2]}:{title:s,text:""}})};if(r.every(i=>i.startsWith(">"))){const i=r.map(a=>a.replace(/^>\s?/,"")).join(" "),s=i.match(/^([A-Za-z][\w\s]{1,24}):\s+(.+)$/);return{type:"note",label:s?s[1]:"Good to know",text:s?s[2]:i}}if(r.length>=2&&r.every(i=>i.includes("|"))){const i=r.filter(s=>!/^\|?\s*:?-{2,}/.test(s)).map(s=>s.replace(/^\||\|$/g,"").split("|").map(a=>a.trim()));return{type:"table",head:i[0],rows:i.slice(1)}}return{type:"p",text:r.join(" ")}}).filter(Boolean)}function Uy({text:e}){return Wy(e).map((t,r)=>t.type==="ul"?n.jsx("ul",{className:"bd-ul",children:t.items.map((i,s)=>n.jsx("li",{children:jn(i,s)},s))},r):t.type==="steps"?n.jsx("ol",{className:"bd-steps",children:t.items.map((i,s)=>n.jsxs("li",{children:[n.jsx("span",{className:"bd-step-no",children:s+1}),n.jsxs("div",{children:[n.jsx("strong",{children:jn(i.title)}),i.text&&n.jsx("p",{children:jn(i.text)})]})]},s))},r):t.type==="note"?n.jsxs("aside",{className:"bd-note",children:[n.jsx("small",{children:t.label}),n.jsx("p",{children:jn(t.text)})]},r):t.type==="table"?n.jsx("div",{className:"bd-table-wrap",children:n.jsxs("table",{className:"bd-table",children:[n.jsx("thead",{children:n.jsx("tr",{children:t.head.map((i,s)=>n.jsx("th",{children:jn(i)},s))})}),n.jsx("tbody",{children:t.rows.map((i,s)=>n.jsx("tr",{children:t.head.map((a,o)=>n.jsx("td",{children:jn(i[o]||"")},o))},s))})]})},r):n.jsx("p",{children:jn(t.text)},r))}function Hy({title:e}){const[t,r]=b.useState(!1),i=typeof window<"u"?window.location.href:"",s=encodeURIComponent,a=[["WhatsApp",`https://wa.me/?text=${s(`${e} ${i}`)}`],["Facebook",`https://www.facebook.com/sharer/sharer.php?u=${s(i)}`],["LinkedIn",`https://www.linkedin.com/sharing/share-offsite/?url=${s(i)}`],["X",`https://twitter.com/intent/tweet?text=${s(e)}&url=${s(i)}`]],o=async()=>{try{await navigator.clipboard.writeText(i),r(!0),setTimeout(()=>r(!1),1800)}catch{}};return n.jsxs("div",{className:"bd-share",children:[n.jsx("span",{className:"bd-share-label",children:"SHARE"}),a.map(([l,c])=>n.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:l==="X"?"round":"","aria-label":`Share on ${l}`,children:l},l)),n.jsx("a",{className:"round",href:`mailto:?subject=${s(e)}&body=${s(i)}`,"aria-label":"Share by email",children:n.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),n.jsx("path",{d:"m3 7 9 6 9-6"})]})}),n.jsx("button",{type:"button",className:"round",onClick:o,"aria-label":"Copy link",title:t?"Link copied":"Copy link",children:t?n.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{d:"m5 12 5 5 9-10"})}):n.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"}),n.jsx("path",{d:"M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"})]})})]})}function _y({post:e}){const[t,r]=b.useState({name:"",phone:""}),[i,s]=b.useState("idle"),[a,o]=b.useState(""),l=async c=>{if(c.preventDefault(),t.name.trim().length<2)return o("Please enter your name");if(!/^\+?[\d\s-]{10,15}$/.test(t.phone.trim()))return o("Please enter a valid 10-digit mobile number");o(""),s("sending");try{await J.post("/enquiries",{name:t.name.trim(),phone:t.phone.trim(),email:"",property:`Blog: ${e.title}`,message:"Call back request from a blog article",source:"blog",page:window.location.pathname}),s("sent")}catch{s("idle"),o("Could not send right now. Please try again.")}};return n.jsxs("div",{className:"bd-advisor",children:[n.jsx("small",{children:"TALK TO AN ADVISOR"}),n.jsx("h3",{children:"Planning your next property?"}),n.jsx("p",{children:"Leave your number and a HomWisor advisor will call you back with current prices and floor plans."}),i==="sent"?n.jsxs("div",{className:"bd-advisor-done",children:["✓ Thank you, ",t.name.split(" ")[0],"! We'll call you shortly."]}):n.jsxs("form",{onSubmit:l,noValidate:!0,children:[n.jsxs("label",{children:["Full name",n.jsx("input",{value:t.name,onChange:c=>r({...t,name:c.target.value}),placeholder:"Your name",autoComplete:"name"})]}),n.jsxs("label",{children:["Mobile number",n.jsx("input",{value:t.phone,onChange:c=>r({...t,phone:c.target.value}),placeholder:"10-digit mobile number",inputMode:"tel",autoComplete:"tel"})]}),a&&n.jsx("div",{className:"bd-advisor-err",children:a}),n.jsx("button",{type:"submit",disabled:i==="sending",children:i==="sending"?"Sending…":"Request a call back"}),n.jsx("span",{className:"bd-advisor-fine",children:"By submitting, you agree to be contacted by HomWisor about this enquiry."})]})]})}function $y(){var p,f;const{slug:e}=Li(),t=$t(),[r,i]=b.useState(null),[s,a]=b.useState([]),[o,l]=b.useState("loading"),[c,d]=b.useState("");b.useEffect(()=>{if(r&&r.slug===e)return;let m=!0;return l("loading"),window.scrollTo(0,0),J.get(`/blogs/${encodeURIComponent(e)}`).then(y=>{var S;m&&(i(y.data),l("ok"),(S=y.data)!=null&&S.slug&&y.data.slug!==e&&t(tn(y.data),{replace:!0}))}).catch(()=>m&&l("missing")),J.get("/blogs").then(y=>m&&a(y.data||[])).catch(()=>{}),()=>{m=!1}},[e]),b.useEffect(()=>{var m,y;if(r)return Fi({title:((m=r.seoTitle)==null?void 0:m.trim())||`${r.title} | HomWisor`,description:((y=r.seoDescription)==null?void 0:y.trim())||r.excerpt||"",image:r.image,url:window.location.origin+tn(r),type:"article"})},[r]);const h=b.useMemo(()=>{if(!(r!=null&&r.body))return null;const y=new DOMParser().parseFromString(`<div>${r.body}</div>`,"text/html").body.firstElementChild,S=[...y.querySelectorAll("h2")].filter(E=>E.textContent.trim());return S.forEach((E,w)=>{E.id=Iu(E.textContent.trim(),w)}),y.querySelectorAll("img").forEach(E=>E.setAttribute("loading","lazy")),y.querySelectorAll("span.ql-ui, span:empty").forEach(E=>E.remove()),{html:y.innerHTML,toc:S.map(E=>({heading:E.textContent.trim(),anchor:E.id}))}},[r]),u=b.useMemo(()=>(r!=null&&r.body?[]:(r==null?void 0:r.content)||[]).map((m,y)=>({...m,anchor:Iu(m.heading,y)})),[r]),g=h?h.toc:u.filter(m=>m.heading);if(b.useEffect(()=>{if(o!=="ok")return;const m=new IntersectionObserver(y=>y.forEach(S=>S.isIntersecting&&d(S.target.id)),{rootMargin:"-30% 0px -60% 0px"});return g.forEach(y=>{const S=document.getElementById(y.anchor);S&&m.observe(S)}),()=>m.disconnect()},[o,g]),o==="loading")return n.jsxs("div",{className:"bd-page",children:[n.jsx(Xe,{}),n.jsxs("main",{className:"bd-state",children:[n.jsx("span",{className:"bd-spin"})," Loading article…"]})]});if(!r)return n.jsxs("div",{className:"bd-page",children:[n.jsx(Xe,{}),n.jsx("main",{className:"bd-state",children:n.jsxs("div",{children:[n.jsx("span",{className:"bd-pill",children:"HOMWISOR INSIGHTS"}),n.jsx("h1",{children:"Page Not Found"}),n.jsx("p",{children:"The page you are looking for does not exist or may have been moved."}),n.jsx(F,{to:"/blog",className:"bd-back",children:"← Back to Blog"})]})}),n.jsx(ft,{})]});const j=s.filter(m=>m.slug!==r.slug),A=[...j.filter(m=>m.category===r.category),...j.filter(m=>m.category!==r.category)].slice(0,3),k=r.author||"HomWisor Insights",C=(m,y)=>{m.preventDefault();const S=document.getElementById(y);S&&window.scrollTo({top:S.getBoundingClientRect().top+window.scrollY-96,behavior:"smooth"})};return n.jsxs("div",{className:"bd-page",children:[n.jsx(Xe,{}),n.jsxs("main",{className:"bd-wrap",children:[n.jsxs("header",{className:"bd-head",children:[n.jsx(F,{to:`/blog?category=${encodeURIComponent(r.category||"")}`,className:"bd-pill",children:(r.category||"Insights").toUpperCase()}),n.jsx("h1",{children:r.title}),r.excerpt&&n.jsx("p",{className:"bd-dek",children:r.excerpt})]}),n.jsxs("div",{className:"bd-byline",children:[n.jsxs("div",{className:"bd-author",children:[n.jsx("span",{className:"bd-avatar",children:((p=k.trim()[0])==null?void 0:p.toUpperCase())||"H"}),n.jsxs("div",{children:[n.jsxs("span",{children:["By ",n.jsx("strong",{children:k})]}),n.jsxs("small",{children:[fl(r.publishedAt).replace(/^(\w)(\w+)/,(m,y,S)=>y+S.toLowerCase()),n.jsx("i",{children:"•"}),Vw(r)," min read"]})]})]}),n.jsx(Hy,{title:r.title})]}),r.image&&n.jsx("figure",{className:"bd-banner",children:n.jsx("img",{src:r.image,alt:r.title})}),n.jsxs("div",{className:"bd-layout",children:[n.jsxs("article",{className:"bd-article",children:[h&&n.jsx("div",{className:"bd-body",dangerouslySetInnerHTML:{__html:h.html}}),u.map((m,y)=>n.jsxs("section",{id:m.anchor,className:"bd-section",children:[m.heading&&n.jsx("h2",{children:m.heading}),n.jsx("div",{className:y===0?"bd-text bd-lead":"bd-text",children:n.jsx(Uy,{text:m.text})}),m.image&&n.jsx("figure",{className:"bd-figure",children:n.jsx("img",{src:m.image,alt:m.heading||r.title,loading:"lazy"})})]},m.anchor)),((f=r.tags)==null?void 0:f.length)>0&&n.jsx("div",{className:"bd-tags",children:r.tags.map(m=>n.jsxs("span",{children:["#",m]},m))}),n.jsx("p",{className:"bd-fine",children:"*Prices and details are as advertised and subject to change. Confirm current prices, plans and approvals with the developer before you book."})]}),n.jsxs("aside",{className:"bd-side",children:[g.length>1&&n.jsxs("nav",{className:"bd-toc","aria-label":"In this guide",children:[n.jsx("small",{children:"IN THIS GUIDE"}),n.jsx("ol",{children:g.map((m,y)=>n.jsx("li",{className:c===m.anchor?"on":"",children:n.jsxs("a",{href:`#${m.anchor}`,onClick:S=>C(S,m.anchor),children:[n.jsx("b",{children:y+1}),m.heading]})},m.anchor))})]}),n.jsx(_y,{post:r})]})]}),A.length>0&&n.jsxs("section",{className:"bd-more",children:[n.jsxs("div",{className:"bd-more-head",children:[n.jsx("h2",{children:"Keep reading"}),n.jsxs(F,{to:"/blog",children:["All articles ",n.jsx("span",{children:"→"})]})]}),n.jsx("div",{className:"bd-more-grid",children:A.map(m=>n.jsxs(F,{to:tn(m),className:"bd-card",children:[n.jsx("span",{className:"bd-card-img",children:n.jsx("img",{src:m.image,alt:"",loading:"lazy"})}),n.jsx("small",{children:(m.category||"").toUpperCase()}),n.jsx("strong",{children:m.title})]},m.id||m.slug))})]})]}),n.jsx(ft,{})]})}const as="#D4AF37",lo="#9A7418",co="#F7F5EF";function Gy(){return n.jsxs("div",{className:"privacy-page",children:[n.jsx(Xe,{}),n.jsxs("section",{className:"privacy-hero",children:[n.jsx("div",{className:"privacy-hero-overlay"}),n.jsxs("div",{className:"privacy-hero-content",children:[n.jsx("span",{className:"privacy-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),n.jsxs("h1",{children:["Privacy ",n.jsx("span",{children:"Policy."})]}),n.jsx("p",{children:"Your privacy matters to us. Learn how Homwisor collects, uses, protects and manages information when you interact with our website and real estate services."})]})]}),n.jsx("main",{className:"privacy-main",children:n.jsxs("div",{className:"privacy-layout",children:[n.jsx("aside",{className:"privacy-sidebar",children:n.jsxs("div",{className:"privacy-sidebar-card",children:[n.jsx("span",{children:"ON THIS PAGE"}),n.jsx("a",{href:"#introduction",children:"Introduction"}),n.jsx("a",{href:"#information",children:"Information We Collect"}),n.jsx("a",{href:"#use",children:"How We Use Information"}),n.jsx("a",{href:"#sharing",children:"Information Sharing"}),n.jsx("a",{href:"#cookies",children:"Cookies & Tracking"}),n.jsx("a",{href:"#security",children:"Data Security"}),n.jsx("a",{href:"#rights",children:"Your Rights"}),n.jsx("a",{href:"#third-party",children:"Third-Party Links"}),n.jsx("a",{href:"#children",children:"Children's Privacy"}),n.jsx("a",{href:"#changes",children:"Policy Changes"}),n.jsx("a",{href:"#contact",children:"Contact Us"})]})}),n.jsxs("article",{className:"privacy-content",children:[n.jsxs("div",{className:"policy-intro",id:"introduction",children:[n.jsx("span",{className:"section-label",children:"PRIVACY & DATA"}),n.jsx("h2",{children:"Privacy Policy"}),n.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),n.jsx("p",{children:'Homwisor Consultants Pvt. Ltd. ("Homwisor", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how information may be collected, used, stored and disclosed when you visit our website, submit an enquiry, request a property consultation, or otherwise interact with our services.'})]}),n.jsxs("section",{id:"information",children:[n.jsx("h3",{children:"1. Information We Collect"}),n.jsx("p",{children:"Depending on how you interact with Homwisor, we may collect information that you voluntarily provide, including your name, phone number, email address, property requirements, location preferences, budget information and messages or enquiries submitted through our forms."}),n.jsx("p",{children:"We may also receive basic technical information such as browser type, device information, IP address, referring pages, pages visited and general website usage information."})]}),n.jsxs("section",{id:"use",children:[n.jsx("h3",{children:"2. How We Use Your Information"}),n.jsx("p",{children:"We may use the information we collect to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Respond to property enquiries and requests."}),n.jsx("li",{children:"Provide property recommendations and consultation."}),n.jsx("li",{children:"Arrange site visits, callbacks or other requested services."}),n.jsx("li",{children:"Communicate with you about properties, services and enquiries."}),n.jsx("li",{children:"Improve our website, services and customer experience."}),n.jsx("li",{children:"Maintain website security and prevent misuse or fraud."}),n.jsx("li",{children:"Comply with applicable legal and regulatory requirements."})]})]}),n.jsxs("section",{id:"sharing",children:[n.jsx("h3",{children:"3. Information Sharing & Disclosure"}),n.jsx("p",{children:"Homwisor does not sell personal information as a business practice. Information may be shared when reasonably required to provide a service you have requested, operate our website, work with relevant service providers, protect our legal interests, or comply with applicable law."}),n.jsx("p",{children:"Where a property enquiry requires communication with a developer, property owner, service provider or other relevant party, we may share the information necessary to respond to that enquiry."})]}),n.jsxs("section",{id:"cookies",children:[n.jsx("h3",{children:"4. Cookies & Tracking Technologies"}),n.jsx("p",{children:"Our website may use cookies and similar technologies to remember preferences, understand website usage, measure performance and improve the user experience."}),n.jsx("p",{children:"You can control or disable cookies through your browser settings. Some website functionality may be affected when cookies are disabled."})]}),n.jsxs("section",{id:"security",children:[n.jsx("h3",{children:"5. Data Security"}),n.jsx("p",{children:"We take reasonable administrative, technical and organizational measures to protect personal information from unauthorized access, misuse, alteration or disclosure."}),n.jsx("p",{children:"However, no method of transmission or electronic storage can be guaranteed to be completely secure. You should therefore avoid sending highly sensitive information through ordinary website forms unless specifically requested through a secure channel."})]}),n.jsxs("section",{id:"rights",children:[n.jsx("h3",{children:"6. Your Privacy Rights"}),n.jsx("p",{children:"Subject to applicable law, you may request access to, correction of, or deletion of personal information that we hold about you. You may also ask us to stop or limit certain communications."}),n.jsx("p",{children:"To make a privacy-related request, contact us using the details provided below. We may need to verify your identity before completing a request."})]}),n.jsxs("section",{id:"third-party",children:[n.jsx("h3",{children:"7. Third-Party Websites & Services"}),n.jsx("p",{children:"Our website may contain links to third-party websites, platforms or services. Those third parties operate under their own privacy policies and terms. Homwisor is not responsible for the privacy practices or content of external websites."})]}),n.jsxs("section",{id:"children",children:[n.jsx("h3",{children:"8. Children's Privacy"}),n.jsx("p",{children:"Our services are intended for adults and property-related users. We do not knowingly request personal information from children for the purpose of providing real estate services."})]}),n.jsxs("section",{id:"retention",children:[n.jsx("h3",{children:"9. Data Retention"}),n.jsx("p",{children:"We retain personal information for as long as reasonably necessary for the purposes described in this policy, to provide requested services, maintain business records, resolve disputes and meet applicable legal obligations."})]}),n.jsxs("section",{id:"changes",children:[n.jsx("h3",{children:"10. Changes to This Privacy Policy"}),n.jsx("p",{children:'We may update this Privacy Policy from time to time to reflect changes to our services, website, legal requirements or privacy practices. The updated version will be published on this page with a revised "Last updated" date.'})]}),n.jsxs("section",{id:"contact",className:"privacy-contact-box",children:[n.jsx("span",{className:"section-label",children:"CONTACT US"}),n.jsx("h3",{children:"Questions about your privacy?"}),n.jsx("p",{children:"If you have questions, requests or concerns regarding this Privacy Policy or the way your information is handled, please contact Homwisor."}),n.jsxs("div",{className:"privacy-contact-grid",children:[n.jsxs("a",{href:"mailto:info@homwisor.com",children:[n.jsx("small",{children:"EMAIL"}),"info@homwisor.com"]}),n.jsxs("a",{href:"tel:8500900100",children:[n.jsx("small",{children:"PHONE"}),"+91 8500 900 100"]}),n.jsxs("div",{children:[n.jsx("small",{children:"OFFICE"}),"Gurugram, Haryana, India"]})]})]}),n.jsxs("div",{className:"privacy-note",children:[n.jsx("strong",{children:"Important:"})," This page is a website privacy policy template for Homwisor and should be reviewed and finalized according to the company's actual data practices, third-party tools, consent mechanisms and applicable laws."]})]})]})}),n.jsx(ft,{}),n.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .privacy-page {
          min-height: 100vh;
          background: ${co};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .privacy-page,
        .privacy-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        /* HERO */
        .privacy-hero {
          min-height: 500px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          color: #fff;
          background-image: url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .privacy-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            90deg,
            rgba(5,20,38,.92) 0%,
            rgba(8,23,42,.72) 45%,
            rgba(5,18,34,.78) 100%
          );
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
          color: ${as};
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
          color: ${as};
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
          background: ${co};
        }

        .privacy-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${lo};
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
          color: ${lo};
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
          background: ${co};
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
          border-color: ${as};
        }

        .privacy-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${lo};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .privacy-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${as};
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
            padding: 100px 18px 55px;
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
      `})]})}const os="#D4AF37",ls="#9A7418",uo="#F7F5EF";function Vy(){return n.jsxs("div",{className:"terms-page",children:[n.jsx(Xe,{}),n.jsxs("section",{className:"terms-hero",children:[n.jsx("div",{className:"terms-hero-overlay"}),n.jsxs("div",{className:"terms-hero-content",children:[n.jsx("span",{className:"terms-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),n.jsxs("h1",{children:["Terms & ",n.jsx("span",{children:"Conditions."})]}),n.jsx("p",{children:"Please read these terms carefully before using the Homwisor website, property listings, enquiry services and real estate consultation services."})]})]}),n.jsx("main",{className:"terms-main",children:n.jsxs("div",{className:"terms-layout",children:[n.jsx("aside",{className:"terms-sidebar",children:n.jsxs("div",{className:"terms-sidebar-card",children:[n.jsx("span",{children:"ON THIS PAGE"}),n.jsx("a",{href:"#acceptance",children:"Acceptance of Terms"}),n.jsx("a",{href:"#about",children:"About Homwisor"}),n.jsx("a",{href:"#use",children:"Use of Website"}),n.jsx("a",{href:"#listings",children:"Property Listings"}),n.jsx("a",{href:"#enquiries",children:"Enquiries & Communication"}),n.jsx("a",{href:"#accuracy",children:"Information Accuracy"}),n.jsx("a",{href:"#transactions",children:"Property Transactions"}),n.jsx("a",{href:"#intellectual",children:"Intellectual Property"}),n.jsx("a",{href:"#third-party",children:"Third-Party Services"}),n.jsx("a",{href:"#liability",children:"Limitation of Liability"}),n.jsx("a",{href:"#privacy",children:"Privacy"}),n.jsx("a",{href:"#changes",children:"Changes to Terms"}),n.jsx("a",{href:"#contact",children:"Contact Us"})]})}),n.jsxs("article",{className:"terms-content",children:[n.jsxs("div",{className:"terms-intro",id:"acceptance",children:[n.jsx("span",{className:"section-label",children:"LEGAL INFORMATION"}),n.jsx("h2",{children:"Terms & Conditions"}),n.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),n.jsx("p",{children:'These Terms and Conditions ("Terms") govern your access to and use of the Homwisor website and related services operated by Homwisor Consultant Private Limited ("Homwisor", "we", "us", or "our").'}),n.jsx("p",{children:"By accessing or using this website, submitting an enquiry, requesting a property consultation, contacting our team, or otherwise using our services, you acknowledge that you have read and understood these Terms and agree to be bound by them."})]}),n.jsxs("section",{id:"about",children:[n.jsx("h3",{children:"1. About Homwisor"}),n.jsx("p",{children:"Homwisor is a Gurugram-based real estate platform and agency that helps property buyers, sellers, tenants and landlords connect and transact with greater confidence. Our services include property search and listings, buyer and seller facilitation, market guidance and real estate advisory."}),n.jsx("p",{children:"Homwisor's public company information states that the business operates as Homwisor Consultant Private Limited and is registered as a real estate agent with the Haryana Real Estate Regulatory Authority (HARERA), Gurugram."})]}),n.jsxs("section",{id:"use",children:[n.jsx("h3",{children:"2. Use of the Website"}),n.jsx("p",{children:"You agree to use the website only for lawful purposes and in a manner that does not interfere with the operation, security, availability or integrity of the website."}),n.jsxs("ul",{children:[n.jsx("li",{children:"You must provide accurate information when submitting forms or enquiries."}),n.jsx("li",{children:"You must not use the website for fraudulent, misleading or unlawful activities."}),n.jsx("li",{children:"You must not attempt to gain unauthorized access to any system, account, database or website functionality."}),n.jsx("li",{children:"You must not copy, scrape, reproduce or commercially exploit website content without permission."})]})]}),n.jsxs("section",{id:"listings",children:[n.jsx("h3",{children:"3. Property Listings & Information"}),n.jsx("p",{children:"Property listings may include information such as project names, locations, prices, sizes, configurations, availability, amenities, photographs and other property-related details."}),n.jsx("p",{children:"Property information may be supplied or updated by developers, owners, agents or other relevant sources. Prices, availability, specifications, offers and other project details may change without prior notice."}),n.jsx("p",{children:"A listing or enquiry on Homwisor does not by itself constitute an offer, reservation, allotment, sale agreement or guarantee of availability."})]}),n.jsxs("section",{id:"enquiries",children:[n.jsx("h3",{children:"4. Property Enquiries & Communication"}),n.jsx("p",{children:"When you submit an enquiry, you authorize Homwisor and relevant property or service representatives to contact you regarding the enquiry through phone, email, WhatsApp or other appropriate communication channels."}),n.jsx("p",{children:"You are responsible for ensuring that the contact information provided by you is correct and belongs to you or that you are otherwise authorized to provide it."})]}),n.jsxs("section",{id:"accuracy",children:[n.jsx("h3",{children:"5. Accuracy of Information"}),n.jsx("p",{children:"Homwisor aims to provide useful and current property information, but information on the website may contain errors, omissions, outdated details or information supplied by third parties."}),n.jsx("p",{children:"Users should independently verify material information, including title, approvals, RERA registration, pricing, availability, specifications, payment schedules, possession timelines and other transaction-related details before making a decision."})]}),n.jsxs("section",{id:"transactions",children:[n.jsx("h3",{children:"6. Property Transactions"}),n.jsx("p",{children:"Homwisor may facilitate introductions, property visits, communication and other real estate assistance. Unless expressly agreed otherwise in writing, Homwisor is not the seller, developer, owner or legal representative of every property displayed on the website."}),n.jsx("p",{children:"Any purchase, sale, lease, booking, allotment or other property transaction is subject to separate documentation and agreements between the relevant parties."}),n.jsx("p",{children:"Users should obtain independent legal, financial and tax advice where appropriate before entering into a property transaction."})]}),n.jsxs("section",{id:"rera",children:[n.jsx("h3",{children:"7. Regulatory & RERA Information"}),n.jsx("p",{children:"Homwisor's public company information identifies the business as a HARERA-registered real estate agent and states that it facilitates transactions in accordance with the Real Estate (Regulation and Development) Act, 2016 and applicable Haryana rules."}),n.jsx("p",{children:"Users should independently verify the current registration status and the RERA registration of any relevant real estate project before proceeding with a transaction."})]}),n.jsxs("section",{id:"intellectual",children:[n.jsx("h3",{children:"8. Intellectual Property"}),n.jsx("p",{children:"Unless otherwise stated, the website's design, branding, logos, text, graphics, photographs, layout, software and other original materials are owned by or licensed to Homwisor."}),n.jsx("p",{children:"You may view and use the website for personal and legitimate property-related purposes. You may not reproduce, distribute, modify, publish, sell or commercially exploit website materials without prior written permission."})]}),n.jsxs("section",{id:"third-party",children:[n.jsx("h3",{children:"9. Third-Party Websites & Services"}),n.jsx("p",{children:"The website may contain links, integrations or references to third-party websites, developers, property owners, service providers, payment providers, maps, social platforms or other external services."}),n.jsx("p",{children:"Third-party services are governed by their own terms and policies. Homwisor is not responsible for the independent operation, availability, content or privacy practices of third-party websites and services."})]}),n.jsxs("section",{id:"liability",children:[n.jsx("h3",{children:"10. Disclaimer & Limitation of Liability"}),n.jsx("p",{children:"The website and its information are provided for general property-search, information and consultation purposes. Homwisor does not guarantee that the website or every piece of information will always be complete, current, uninterrupted or error-free."}),n.jsx("p",{children:"To the extent permitted by applicable law, Homwisor will not be responsible for losses arising solely from reliance on unverified property information, third-party information, changes in property availability or pricing, transaction decisions, website interruptions, or events beyond its reasonable control."})]}),n.jsxs("section",{id:"privacy",children:[n.jsx("h3",{children:"11. Privacy"}),n.jsxs("p",{children:["Your use of the website may involve the collection and processing of personal information. Please review our",n.jsxs("a",{className:"inline-link",href:"/privacy-policy",children:[" ","Privacy Policy"]})," ","for information about how personal data may be collected, used, stored and handled."]})]}),n.jsxs("section",{id:"changes",children:[n.jsx("h3",{children:"12. Changes to These Terms"}),n.jsx("p",{children:"Homwisor may update these Terms from time to time to reflect changes to the website, services, business practices or applicable legal requirements."}),n.jsx("p",{children:'Updated Terms will be published on this page with a revised "Last updated" date. Your continued use of the website after an update constitutes acceptance of the revised Terms to the extent permitted by applicable law.'})]}),n.jsxs("section",{id:"contact",className:"terms-contact-box",children:[n.jsx("span",{className:"section-label",children:"CONTACT US"}),n.jsx("h3",{children:"Questions about these Terms?"}),n.jsx("p",{children:"If you have questions about these Terms and Conditions or Homwisor's services, please contact the company using the information below."}),n.jsxs("div",{className:"terms-contact-grid",children:[n.jsxs("a",{href:"mailto:homwisor@gmail.com",children:[n.jsx("small",{children:"EMAIL"}),"homwisor@gmail.com"]}),n.jsxs("a",{href:"tel:9090101401",children:[n.jsx("small",{children:"PHONE"}),"+91 9090 101 401"]}),n.jsxs("div",{children:[n.jsx("small",{children:"REGISTERED OFFICE"}),"Unit No. 704, 7th Floor, ILD Trade Centre, Sohna Road, Village Tikri, Sector-47, Gurugram, Haryana – 122018"]})]})]}),n.jsxs("div",{className:"terms-note",children:[n.jsx("strong",{children:"Important:"})," This page is a website terms template prepared from Homwisor's publicly available company information and the requested website context. It should be reviewed by the company's legal counsel and aligned with its actual contracts, services, policies and applicable laws before publication."]})]})]})}),n.jsx(ft,{}),n.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .terms-page {
          min-height: 100vh;
          background: ${uo};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .terms-page,
        .terms-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        /* HERO */
        .terms-hero {
          min-height: 500px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          color: #fff;
          background-image: url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .terms-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            90deg,
            rgba(5,20,38,.92) 0%,
            rgba(8,23,42,.72) 45%,
            rgba(5,18,34,.78) 100%
          );
        }

        .terms-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 760px;
          padding: 120px 20px 70px;
        }

        .terms-eyebrow,
        .section-label {
          display: inline-block;
          color: ${os};
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
          color: ${os};
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
          background: ${uo};
        }

        .terms-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${ls};
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
          color: ${ls};
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
          color: ${ls};
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
          background: ${uo};
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
          border-color: ${os};
        }

        .terms-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${ls};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .terms-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${os};
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
            padding: 100px 18px 55px;
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
      `})]})}const qy=b.lazy(()=>Nx(()=>import("./Dashboard-DIG9G8JA.js"),__vite__mapDeps([0,1])));function An({param:e,preset:t}){const{slug:r}=Li(),i=new URLSearchParams(t||{});return e&&r&&i.set(e,r),n.jsx(jr,{to:`/search?${i.toString()}`,replace:!0})}function Yy(){const{slug:e}=Li();return n.jsx(jr,{to:tn(e),replace:!0})}function Ky({children:e}){return hl()?e:n.jsx(jr,{to:Ec()?"/admin?session=expired":"/admin",replace:!0})}function Xy(){return n.jsx(S1,{children:n.jsxs(x1,{children:[n.jsx(re,{path:"/",element:n.jsx(M2,{})}),n.jsx(re,{path:"/about",element:n.jsx($2,{})}),n.jsx(re,{path:"/search",element:n.jsx(ay,{})}),n.jsx(re,{path:"/location/:slug",element:n.jsx(An,{param:"location"})}),n.jsx(re,{path:"/budget/:slug",element:n.jsx(An,{param:"budget"})}),n.jsx(re,{path:"/property-type/:slug",element:n.jsx(An,{param:"type"})}),n.jsx(re,{path:"/commercial/:slug",element:n.jsx(An,{param:"type"})}),n.jsx(re,{path:"/status/:slug",element:n.jsx(An,{param:"status"})}),n.jsx(re,{path:"/residential-projects",element:n.jsx(An,{preset:{type:"residential"}})}),n.jsx(re,{path:"/commercial-projects",element:n.jsx(An,{preset:{type:"commercial"}})}),n.jsx(re,{path:"/property/:id",element:n.jsx(Ey,{})}),n.jsx(re,{path:"/developer/:slug",element:n.jsx(Cy,{})}),n.jsx(re,{path:"/blog",element:n.jsx(Dy,{})}),n.jsx(re,{path:"/blog/:slug",element:n.jsx(Yy,{})}),n.jsx(re,{path:"/privacy-policy",element:n.jsx(Gy,{})}),n.jsx(re,{path:"/terms-and-conditions",element:n.jsx(Vy,{})}),n.jsx(re,{path:"/property-snaps",element:n.jsx(Ty,{})}),n.jsx(re,{path:"/snaps",element:n.jsx(jr,{to:"/property-snaps",replace:!0})}),n.jsx(re,{path:"/admin",element:n.jsx(Fy,{})}),n.jsx(re,{path:"/admin/dashboard",element:n.jsx(Ky,{children:n.jsx(b.Suspense,{fallback:n.jsx("div",{style:{minHeight:"100vh",background:"#0b0b0b"}}),children:n.jsx(qy,{})})})}),n.jsx(re,{path:"/contact",element:n.jsx(Ly,{})}),n.jsx(re,{path:"/sell",element:n.jsx(Oy,{})}),n.jsx(re,{path:"/:slug",element:n.jsx($y,{})}),n.jsx(re,{path:"*",element:n.jsx(jr,{to:"/",replace:!0})})]})})}ho.createRoot(document.getElementById("root")).render(n.jsx(qu.StrictMode,{children:n.jsx(Xy,{})}));export{Mu as A,vu as B,Hn as C,u2 as D,Hw as E,Hf as F,Ss as G,gl as H,bt as I,Uf as J,Ww as K,wv as L,$t as M,hl as N,Df as O,zy as P,Js as Q,qu as R,Av as S,yv as T,Iy as a,J as b,na as c,ta as d,bv as e,ea as f,Xr as g,_e as h,jv as i,n as j,ly as k,Qw as l,hy as m,my as n,Qy as o,vv as p,Qf as q,b as r,Uw as s,hn as t,pl as u,tn as v,Gw as w,fl as x,Vw as y,$w as z};
