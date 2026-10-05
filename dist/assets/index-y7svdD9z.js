function Uf(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function Hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gu={exports:{}},Sa={},xu={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),$f=Symbol.for("react.portal"),_f=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),qf=Symbol.for("react.provider"),Kf=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Qf=Symbol.for("react.memo"),Zf=Symbol.for("react.lazy"),hd=Symbol.iterator;function Jf(e){return e===null||typeof e!="object"?null:(e=hd&&e[hd]||e["@@iterator"],typeof e=="function"?e:null)}var wu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yu=Object.assign,vu={};function $r(e,t,r){this.props=e,this.context=t,this.refs=vu,this.updater=r||wu}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bu(){}bu.prototype=$r.prototype;function Jl(e,t,r){this.props=e,this.context=t,this.refs=vu,this.updater=r||wu}var ec=Jl.prototype=new bu;ec.constructor=Jl;yu(ec,$r.prototype);ec.isPureReactComponent=!0;var ud=Array.isArray,ju=Object.prototype.hasOwnProperty,tc={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function ku(e,t,r){var i,s={},a=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ju.call(t,i)&&!Au.hasOwnProperty(i)&&(s[i]=t[i]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)s[i]===void 0&&(s[i]=l[i]);return{$$typeof:Ji,type:e,key:a,ref:o,props:s,_owner:tc.current}}function eg(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function tg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var pd=/\/+/g;function Ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tg(""+e.key):t.toString(36)}function Os(e,t,r,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ji:case $f:o=!0}}if(o)return o=e,s=s(o),e=i===""?"."+Ka(o,0):i,ud(s)?(r="",e!=null&&(r=e.replace(pd,"$&/")+"/"),Os(s,t,r,"",function(d){return d})):s!=null&&(nc(s)&&(s=eg(s,r+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(pd,"$&/")+"/")+e)),t.push(s)),1;if(o=0,i=i===""?".":i+":",ud(e))for(var l=0;l<e.length;l++){a=e[l];var c=i+Ka(a,l);o+=Os(a,t,r,c,s)}else if(c=Jf(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=i+Ka(a,l++),o+=Os(a,t,r,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function cs(e,t,r){if(e==null)return e;var i=[],s=0;return Os(e,i,"","",function(a){return t.call(r,a,s++)}),i}function ng(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ls={transition:null},rg={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:tc};function Nu(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:cs,forEach:function(e,t,r){cs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!nc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=$r;J.Fragment=_f;J.Profiler=Vf;J.PureComponent=Jl;J.StrictMode=Gf;J.Suspense=Xf;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rg;J.act=Nu;J.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=yu({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=tc.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ju.call(t,c)&&!Au.hasOwnProperty(c)&&(i[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Ji,type:e.type,key:s,ref:a,props:i,_owner:o}};J.createContext=function(e){return e={$$typeof:Kf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qf,_context:e},e.Consumer=e};J.createElement=ku;J.createFactory=function(e){var t=ku.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Yf,render:e}};J.isValidElement=nc;J.lazy=function(e){return{$$typeof:Zf,_payload:{_status:-1,_result:e},_init:ng}};J.memo=function(e,t){return{$$typeof:Qf,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=Ls.transition;Ls.transition={};try{e()}finally{Ls.transition=t}};J.unstable_act=Nu;J.useCallback=function(e,t){return Ve.current.useCallback(e,t)};J.useContext=function(e){return Ve.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};J.useEffect=function(e,t){return Ve.current.useEffect(e,t)};J.useId=function(){return Ve.current.useId()};J.useImperativeHandle=function(e,t,r){return Ve.current.useImperativeHandle(e,t,r)};J.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Ve.current.useMemo(e,t)};J.useReducer=function(e,t,r){return Ve.current.useReducer(e,t,r)};J.useRef=function(e){return Ve.current.useRef(e)};J.useState=function(e){return Ve.current.useState(e)};J.useSyncExternalStore=function(e,t,r){return Ve.current.useSyncExternalStore(e,t,r)};J.useTransition=function(){return Ve.current.useTransition()};J.version="18.3.1";xu.exports=J;var j=xu.exports;const Su=Hf(j),ig=Uf({__proto__:null,default:Su},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg=j,ag=Symbol.for("react.element"),og=Symbol.for("react.fragment"),lg=Object.prototype.hasOwnProperty,cg=sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dg={key:!0,ref:!0,__self:!0,__source:!0};function Cu(e,t,r){var i,s={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)lg.call(t,i)&&!dg.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:ag,type:e,key:a,ref:o,props:s,_owner:cg.current}}Sa.Fragment=og;Sa.jsx=Cu;Sa.jsxs=Cu;gu.exports=Sa;var n=gu.exports,$o={},Eu={exports:{}},at={},Ru={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,K){var T=I.length;I.push(K);e:for(;0<T;){var D=T-1>>>1,V=I[D];if(0<s(V,K))I[D]=K,I[T]=V,T=D;else break e}}function r(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],T=I.pop();if(T!==K){I[0]=T;e:for(var D=0,V=I.length,b=V>>>1;D<b;){var F=2*(D+1)-1,te=I[F],Te=F+1,Q=I[Te];if(0>s(te,T))Te<V&&0>s(Q,te)?(I[D]=Q,I[Te]=T,D=Te):(I[D]=te,I[F]=T,D=F);else if(Te<V&&0>s(Q,T))I[D]=Q,I[Te]=T,D=Te;else break e}}return K}function s(I,K){var T=I.sortIndex-K.sortIndex;return T!==0?T:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],h=1,u=null,p=3,x=!1,v=!1,A=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var K=r(d);K!==null;){if(K.callback===null)i(d);else if(K.startTime<=I)i(d),K.sortIndex=K.expirationTime,t(c,K);else break;K=r(d)}}function w(I){if(A=!1,y(I),!v)if(r(c)!==null)v=!0,N(k);else{var K=r(d);K!==null&&_(w,K.startTime-I)}}function k(I,K){v=!1,A&&(A=!1,m(C),C=-1),x=!0;var T=p;try{for(y(K),u=r(c);u!==null&&(!(u.expirationTime>K)||I&&!L());){var D=u.callback;if(typeof D=="function"){u.callback=null,p=u.priorityLevel;var V=D(u.expirationTime<=K);K=e.unstable_now(),typeof V=="function"?u.callback=V:u===r(c)&&i(c),y(K)}else i(c);u=r(c)}if(u!==null)var b=!0;else{var F=r(d);F!==null&&_(w,F.startTime-K),b=!1}return b}finally{u=null,p=T,x=!1}}var O=!1,g=null,C=-1,P=5,R=-1;function L(){return!(e.unstable_now()-R<P)}function W(){if(g!==null){var I=e.unstable_now();R=I;var K=!0;try{K=g(!0,I)}finally{K?z():(O=!1,g=null)}}else O=!1}var z;if(typeof f=="function")z=function(){f(W)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ee=Y.port2;Y.port1.onmessage=W,z=function(){ee.postMessage(null)}}else z=function(){E(W,0)};function N(I){g=I,O||(O=!0,z())}function _(I,K){C=E(function(){I(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,N(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var T=p;p=K;try{return I()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var T=p;p=I;try{return K()}finally{p=T}},e.unstable_scheduleCallback=function(I,K,T){var D=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?D+T:D):T=D,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=T+V,I={id:h++,callback:K,priorityLevel:I,startTime:T,expirationTime:V,sortIndex:-1},T>D?(I.sortIndex=T,t(d,I),r(c)===null&&I===r(d)&&(A?(m(C),C=-1):A=!0,_(w,T-D))):(I.sortIndex=V,t(c,I),v||x||(v=!0,N(k))),I},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(I){var K=p;return function(){var T=p;p=K;try{return I.apply(this,arguments)}finally{p=T}}}})(Pu);Ru.exports=Pu;var hg=Ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug=j,st=hg;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tu=new Set,Si={};function Jn(e,t){Or(e,t),Or(e+"Capture",t)}function Or(e,t){for(Si[e]=t,e=0;e<t.length;e++)Tu.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=Object.prototype.hasOwnProperty,pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,md={},fd={};function mg(e){return _o.call(fd,e)?!0:_o.call(md,e)?!1:pg.test(e)?fd[e]=!0:(md[e]=!0,!1)}function fg(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gg(e,t,r,i){if(t===null||typeof t>"u"||fg(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,r,i,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var rc=/[\-:]([a-z])/g;function ic(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rc,ic);Ie[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rc,ic);Ie[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rc,ic);Ie[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function sc(e,t,r,i){var s=Ie.hasOwnProperty(t)?Ie[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gg(t,r,s,i)&&(r=null),i||s===null?mg(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Xt=ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ds=Symbol.for("react.element"),hr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),Go=Symbol.for("react.profiler"),Ou=Symbol.for("react.provider"),Lu=Symbol.for("react.context"),oc=Symbol.for("react.forward_ref"),Vo=Symbol.for("react.suspense"),qo=Symbol.for("react.suspense_list"),lc=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Mu=Symbol.for("react.offscreen"),gd=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=gd&&e[gd]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Ya;function ui(e){if(Ya===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ya=t&&t[1]||""}return`
`+Ya+e}var Xa=!1;function Qa(e,t){if(!e||Xa)return"";Xa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=i.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Xa=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ui(e):""}function xg(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=Qa(e.type,!1),e;case 11:return e=Qa(e.type.render,!1),e;case 1:return e=Qa(e.type,!0),e;default:return""}}function Ko(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case hr:return"Portal";case Go:return"Profiler";case ac:return"StrictMode";case Vo:return"Suspense";case qo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lu:return(e.displayName||"Context")+".Consumer";case Ou:return(e._context.displayName||"Context")+".Provider";case oc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lc:return t=e.displayName||null,t!==null?t:Ko(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Ko(e(t))}catch{}}return null}function wg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ko(t);case 8:return t===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yg(e){var t=zu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hs(e){e._valueTracker||(e._valueTracker=yg(e))}function Iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=zu(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yo(e,t){var r=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function xd(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=vn(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bu(e,t){t=t.checked,t!=null&&sc(e,"checked",t,!1)}function Xo(e,t){Bu(e,t);var r=vn(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Qo(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Qo(e,t,r){(t!=="number"||Qs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var pi=Array.isArray;function Ar(e,t,r,i){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+vn(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Zo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(B(92));if(pi(r)){if(1<r.length)throw Error(B(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:vn(r)}}function Du(e,t){var r=vn(t.value),i=vn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function vd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var us,Wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vg=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){vg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function Uu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function Hu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=Uu(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var bg=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(bg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,kr=null,Nr=null;function bd(e){if(e=ns(e)){if(typeof rl!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Ta(t),rl(e.stateNode,e.type,t))}}function $u(e){kr?Nr?Nr.push(e):Nr=[e]:kr=e}function _u(){if(kr){var e=kr,t=Nr;if(Nr=kr=null,bd(e),t)for(e=0;e<t.length;e++)bd(t[e])}}function Gu(e,t){return e(t)}function Vu(){}var Za=!1;function qu(e,t,r){if(Za)return e(t,r);Za=!0;try{return Gu(e,t,r)}finally{Za=!1,(kr!==null||Nr!==null)&&(Vu(),_u())}}function Ei(e,t){var r=e.stateNode;if(r===null)return null;var i=Ta(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(B(231,t,typeof r));return r}var il=!1;if(_t)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){il=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{il=!1}function jg(e,t,r,i,s,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var xi=!1,Zs=null,Js=!1,sl=null,Ag={onError:function(e){xi=!0,Zs=e}};function kg(e,t,r,i,s,a,o,l,c){xi=!1,Zs=null,jg.apply(Ag,arguments)}function Ng(e,t,r,i,s,a,o,l,c){if(kg.apply(this,arguments),xi){if(xi){var d=Zs;xi=!1,Zs=null}else throw Error(B(198));Js||(Js=!0,sl=d)}}function er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jd(e){if(er(e)!==e)throw Error(B(188))}function Sg(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(B(188));return t!==e?null:e}for(var r=e,i=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return jd(s),e;if(a===i)return jd(s),t;a=a.sibling}throw Error(B(188))}if(r.return!==i.return)r=s,i=a;else{for(var o=!1,l=s.child;l;){if(l===r){o=!0,r=s,i=a;break}if(l===i){o=!0,i=s,r=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===r){o=!0,r=a,i=s;break}if(l===i){o=!0,i=a,r=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(r.alternate!==i)throw Error(B(190))}if(r.tag!==3)throw Error(B(188));return r.stateNode.current===r?e:t}function Yu(e){return e=Sg(e),e!==null?Xu(e):null}function Xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xu(e);if(t!==null)return t;e=e.sibling}return null}var Qu=st.unstable_scheduleCallback,Ad=st.unstable_cancelCallback,Cg=st.unstable_shouldYield,Eg=st.unstable_requestPaint,ye=st.unstable_now,Rg=st.unstable_getCurrentPriorityLevel,dc=st.unstable_ImmediatePriority,Zu=st.unstable_UserBlockingPriority,ea=st.unstable_NormalPriority,Pg=st.unstable_LowPriority,Ju=st.unstable_IdlePriority,Ca=null,Ot=null;function Tg(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ca,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Mg,Og=Math.log,Lg=Math.LN2;function Mg(e){return e>>>=0,e===0?32:31-(Og(e)/Lg|0)|0}var ps=64,ms=4194304;function mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~s;l!==0?i=mi(l):(a&=o,a!==0&&(i=mi(a)))}else o=r&~s,o!==0?i=mi(o):a!==0&&(i=mi(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&s)&&(s=i&-i,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-jt(t),s=1<<r,i|=e[r],t&=~s;return i}function zg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ig(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-jt(a),l=1<<o,c=s[o];c===-1?(!(l&r)||l&i)&&(s[o]=zg(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ep(){var e=ps;return ps<<=1,!(ps&4194240)&&(ps=64),e}function Ja(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function es(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=r}function Bg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-jt(r),a=1<<s;t[s]=0,i[s]=-1,e[s]=-1,r&=~a}}function hc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-jt(r),s=1<<i;s&t|e[i]&t&&(e[i]|=t),r&=~s}}var oe=0;function tp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var np,uc,rp,ip,sp,ol=!1,fs=[],hn=null,un=null,pn=null,Ri=new Map,Pi=new Map,an=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kd(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function Jr(e,t,r,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ns(t),t!==null&&uc(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Fg(e,t,r,i,s){switch(t){case"focusin":return hn=Jr(hn,e,t,r,i,s),!0;case"dragenter":return un=Jr(un,e,t,r,i,s),!0;case"mouseover":return pn=Jr(pn,e,t,r,i,s),!0;case"pointerover":var a=s.pointerId;return Ri.set(a,Jr(Ri.get(a)||null,e,t,r,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Pi.set(a,Jr(Pi.get(a)||null,e,t,r,i,s)),!0}return!1}function ap(e){var t=In(e.target);if(t!==null){var r=er(t);if(r!==null){if(t=r.tag,t===13){if(t=Ku(r),t!==null){e.blockedOn=t,sp(e.priority,function(){rp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);nl=i,r.target.dispatchEvent(i),nl=null}else return t=ns(r),t!==null&&uc(t),e.blockedOn=r,!1;t.shift()}return!0}function Nd(e,t,r){Ms(e)&&r.delete(t)}function Wg(){ol=!1,hn!==null&&Ms(hn)&&(hn=null),un!==null&&Ms(un)&&(un=null),pn!==null&&Ms(pn)&&(pn=null),Ri.forEach(Nd),Pi.forEach(Nd)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,ol||(ol=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,Wg)))}function Ti(e){function t(s){return ei(s,e)}if(0<fs.length){ei(fs[0],e);for(var r=1;r<fs.length;r++){var i=fs[r];i.blockedOn===e&&(i.blockedOn=null)}}for(hn!==null&&ei(hn,e),un!==null&&ei(un,e),pn!==null&&ei(pn,e),Ri.forEach(t),Pi.forEach(t),r=0;r<an.length;r++)i=an[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<an.length&&(r=an[0],r.blockedOn===null);)ap(r),r.blockedOn===null&&an.shift()}var Sr=Xt.ReactCurrentBatchConfig,na=!0;function Ug(e,t,r,i){var s=oe,a=Sr.transition;Sr.transition=null;try{oe=1,pc(e,t,r,i)}finally{oe=s,Sr.transition=a}}function Hg(e,t,r,i){var s=oe,a=Sr.transition;Sr.transition=null;try{oe=4,pc(e,t,r,i)}finally{oe=s,Sr.transition=a}}function pc(e,t,r,i){if(na){var s=ll(e,t,r,i);if(s===null)co(e,t,i,ra,r),kd(e,i);else if(Fg(s,e,t,r,i))i.stopPropagation();else if(kd(e,i),t&4&&-1<Dg.indexOf(e)){for(;s!==null;){var a=ns(s);if(a!==null&&np(a),a=ll(e,t,r,i),a===null&&co(e,t,i,ra,r),a===s)break;s=a}s!==null&&i.stopPropagation()}else co(e,t,i,null,r)}}var ra=null;function ll(e,t,r,i){if(ra=null,e=cc(i),e=In(e),e!==null)if(t=er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ku(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function op(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rg()){case dc:return 1;case Zu:return 4;case ea:case Pg:return 16;case Ju:return 536870912;default:return 16}default:return 16}}var ln=null,mc=null,zs=null;function lp(){if(zs)return zs;var e,t=mc,r=t.length,i,s="value"in ln?ln.value:ln.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var o=r-e;for(i=1;i<=o&&t[r-i]===s[a-i];i++);return zs=s.slice(e,1<i?1-i:void 0)}function Is(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function Sd(){return!1}function ot(e){function t(r,i,s,a,o){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?gs:Sd,this.isPropagationStopped=Sd,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=ot(_r),ts=fe({},_r,{view:0,detail:0}),$g=ot(ts),eo,to,ti,Ea=fe({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(eo=e.screenX-ti.screenX,to=e.screenY-ti.screenY):to=eo=0,ti=e),eo)},movementY:function(e){return"movementY"in e?e.movementY:to}}),Cd=ot(Ea),_g=fe({},Ea,{dataTransfer:0}),Gg=ot(_g),Vg=fe({},ts,{relatedTarget:0}),no=ot(Vg),qg=fe({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=ot(qg),Yg=fe({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xg=ot(Yg),Qg=fe({},_r,{data:0}),Ed=ot(Qg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ex[e])?!!t[e]:!1}function gc(){return tx}var nx=fe({},ts,{key:function(e){if(e.key){var t=Zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Is(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?Is(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Is(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=ot(nx),ix=fe({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=ot(ix),sx=fe({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),ax=ot(sx),ox=fe({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=ot(ox),cx=fe({},Ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=ot(cx),hx=[9,13,27,32],xc=_t&&"CompositionEvent"in window,wi=null;_t&&"documentMode"in document&&(wi=document.documentMode);var ux=_t&&"TextEvent"in window&&!wi,cp=_t&&(!xc||wi&&8<wi&&11>=wi),Pd=" ",Td=!1;function dp(e,t){switch(e){case"keyup":return hx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function px(e,t){switch(e){case"compositionend":return hp(t);case"keypress":return t.which!==32?null:(Td=!0,Pd);case"textInput":return e=t.data,e===Pd&&Td?null:e;default:return null}}function mx(e,t){if(pr)return e==="compositionend"||!xc&&dp(e,t)?(e=lp(),zs=mc=ln=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cp&&t.locale!=="ko"?null:t.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fx[e.type]:t==="textarea"}function up(e,t,r,i){$u(i),t=ia(t,"onChange"),0<t.length&&(r=new fc("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var yi=null,Oi=null;function gx(e){Ap(e,0)}function Ra(e){var t=gr(e);if(Iu(t))return e}function xx(e,t){if(e==="change")return t}var pp=!1;if(_t){var ro;if(_t){var io="oninput"in document;if(!io){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),io=typeof Ld.oninput=="function"}ro=io}else ro=!1;pp=ro&&(!document.documentMode||9<document.documentMode)}function Md(){yi&&(yi.detachEvent("onpropertychange",mp),Oi=yi=null)}function mp(e){if(e.propertyName==="value"&&Ra(Oi)){var t=[];up(t,Oi,e,cc(e)),qu(gx,t)}}function wx(e,t,r){e==="focusin"?(Md(),yi=t,Oi=r,yi.attachEvent("onpropertychange",mp)):e==="focusout"&&Md()}function yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ra(Oi)}function vx(e,t){if(e==="click")return Ra(t)}function bx(e,t){if(e==="input"||e==="change")return Ra(t)}function jx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:jx;function Li(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!_o.call(t,s)||!Nt(e[s],t[s]))return!1}return!0}function zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Id(e,t){var r=zd(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zd(r)}}function fp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gp(){for(var e=window,t=Qs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Qs(e.document)}return t}function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ax(e){var t=gp(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fp(r.ownerDocument.documentElement,r)){if(i!==null&&wc(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=Id(r,a);var o=Id(r,i);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kx=_t&&"documentMode"in document&&11>=document.documentMode,mr=null,cl=null,vi=null,dl=!1;function Bd(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;dl||mr==null||mr!==Qs(i)||(i=mr,"selectionStart"in i&&wc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vi&&Li(vi,i)||(vi=i,i=ia(cl,"onSelect"),0<i.length&&(t=new fc("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=mr)))}function xs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var fr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},so={},xp={};_t&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Pa(e){if(so[e])return so[e];if(!fr[e])return e;var t=fr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in xp)return so[e]=t[r];return e}var wp=Pa("animationend"),yp=Pa("animationiteration"),vp=Pa("animationstart"),bp=Pa("transitionend"),jp=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){jp.set(e,t),Jn(t,[e])}for(var ao=0;ao<Dd.length;ao++){var oo=Dd[ao],Nx=oo.toLowerCase(),Sx=oo[0].toUpperCase()+oo.slice(1);An(Nx,"on"+Sx)}An(wp,"onAnimationEnd");An(yp,"onAnimationIteration");An(vp,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(bp,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function Fd(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Ng(i,t,void 0,e),e.currentTarget=null}function Ap(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;Fd(s,l,d),a=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;Fd(s,l,d),a=c}}}if(Js)throw e=sl,Js=!1,sl=null,e}function ce(e,t){var r=t[fl];r===void 0&&(r=t[fl]=new Set);var i=e+"__bubble";r.has(i)||(kp(t,e,2,!1),r.add(i))}function lo(e,t,r){var i=0;t&&(i|=4),kp(r,e,i,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function Mi(e){if(!e[ws]){e[ws]=!0,Tu.forEach(function(r){r!=="selectionchange"&&(Cx.has(r)||lo(r,!1,e),lo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,lo("selectionchange",!1,t))}}function kp(e,t,r,i){switch(op(t)){case 1:var s=Ug;break;case 4:s=Hg;break;default:s=pc}r=s.bind(null,t,r,e),s=void 0,!il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function co(e,t,r,i,s){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=In(l),o===null)return;if(c=o.tag,c===5||c===6){i=a=o;continue e}l=l.parentNode}}i=i.return}qu(function(){var d=a,h=cc(r),u=[];e:{var p=jp.get(e);if(p!==void 0){var x=fc,v=e;switch(e){case"keypress":if(Is(r)===0)break e;case"keydown":case"keyup":x=rx;break;case"focusin":v="focus",x=no;break;case"focusout":v="blur",x=no;break;case"beforeblur":case"afterblur":x=no;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=ax;break;case wp:case yp:case vp:x=Kg;break;case bp:x=lx;break;case"scroll":x=$g;break;case"wheel":x=dx;break;case"copy":case"cut":case"paste":x=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Rd}var A=(t&4)!==0,E=!A&&e==="scroll",m=A?p!==null?p+"Capture":null:p;A=[];for(var f=d,y;f!==null;){y=f;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Ei(f,m),w!=null&&A.push(zi(f,w,y)))),E)break;f=f.return}0<A.length&&(p=new x(p,v,null,r,h),u.push({event:p,listeners:A}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&r!==nl&&(v=r.relatedTarget||r.fromElement)&&(In(v)||v[Gt]))break e;if((x||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,x?(v=r.relatedTarget||r.toElement,x=d,v=v?In(v):null,v!==null&&(E=er(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(A=Cd,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(A=Rd,w="onPointerLeave",m="onPointerEnter",f="pointer"),E=x==null?p:gr(x),y=v==null?p:gr(v),p=new A(w,f+"leave",x,r,h),p.target=E,p.relatedTarget=y,w=null,In(h)===d&&(A=new A(m,f+"enter",v,r,h),A.target=y,A.relatedTarget=E,w=A),E=w,x&&v)t:{for(A=x,m=v,f=0,y=A;y;y=or(y))f++;for(y=0,w=m;w;w=or(w))y++;for(;0<f-y;)A=or(A),f--;for(;0<y-f;)m=or(m),y--;for(;f--;){if(A===m||m!==null&&A===m.alternate)break t;A=or(A),m=or(m)}A=null}else A=null;x!==null&&Wd(u,p,x,A,!1),v!==null&&E!==null&&Wd(u,E,v,A,!0)}}e:{if(p=d?gr(d):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var k=xx;else if(Od(p))if(pp)k=bx;else{k=yx;var O=wx}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=vx);if(k&&(k=k(e,d))){up(u,k,r,h);break e}O&&O(e,p,d),e==="focusout"&&(O=p._wrapperState)&&O.controlled&&p.type==="number"&&Qo(p,"number",p.value)}switch(O=d?gr(d):window,e){case"focusin":(Od(O)||O.contentEditable==="true")&&(mr=O,cl=d,vi=null);break;case"focusout":vi=cl=mr=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Bd(u,r,h);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":Bd(u,r,h)}var g;if(xc)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else pr?dp(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(cp&&r.locale!=="ko"&&(pr||C!=="onCompositionStart"?C==="onCompositionEnd"&&pr&&(g=lp()):(ln=h,mc="value"in ln?ln.value:ln.textContent,pr=!0)),O=ia(d,C),0<O.length&&(C=new Ed(C,e,null,r,h),u.push({event:C,listeners:O}),g?C.data=g:(g=hp(r),g!==null&&(C.data=g)))),(g=ux?px(e,r):mx(e,r))&&(d=ia(d,"onBeforeInput"),0<d.length&&(h=new Ed("onBeforeInput","beforeinput",null,r,h),u.push({event:h,listeners:d}),h.data=g))}Ap(u,t)})}function zi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ia(e,t){for(var r=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Ei(e,r),a!=null&&i.unshift(zi(e,a,s)),a=Ei(e,t),a!=null&&i.push(zi(e,a,s))),e=e.return}return i}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wd(e,t,r,i,s){for(var a=t._reactName,o=[];r!==null&&r!==i;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,s?(c=Ei(r,a),c!=null&&o.unshift(zi(r,c,l))):s||(c=Ei(r,a),c!=null&&o.push(zi(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Ex=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(Ex,`
`).replace(Rx,"")}function ys(e,t,r){if(t=Ud(t),Ud(e)!==t&&r)throw Error(B(425))}function sa(){}var hl=null,ul=null;function pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(Ox)}:ml;function Ox(e){setTimeout(function(){throw e})}function ho(e,t){var r=t,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),Ti(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);Ti(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Gr,Ii="__reactProps$"+Gr,Gt="__reactContainer$"+Gr,fl="__reactEvents$"+Gr,Lx="__reactListeners$"+Gr,Mx="__reactHandles$"+Gr;function In(e){var t=e[Tt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Gt]||r[Tt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=$d(e);e!==null;){if(r=e[Tt])return r;e=$d(e)}return t}e=r,r=e.parentNode}return null}function ns(e){return e=e[Tt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Ta(e){return e[Ii]||null}var gl=[],xr=-1;function kn(e){return{current:e}}function de(e){0>xr||(e.current=gl[xr],gl[xr]=null,xr--)}function le(e,t){xr++,gl[xr]=e.current,e.current=t}var bn={},$e=kn(bn),Ze=kn(!1),_n=bn;function Lr(e,t){var r=e.type.contextTypes;if(!r)return bn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Je(e){return e=e.childContextTypes,e!=null}function aa(){de(Ze),de($e)}function _d(e,t,r){if($e.current!==bn)throw Error(B(168));le($e,t),le(Ze,r)}function Np(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(B(108,wg(e)||"Unknown",s));return fe({},r,i)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,_n=$e.current,le($e,e),le(Ze,Ze.current),!0}function Gd(e,t,r){var i=e.stateNode;if(!i)throw Error(B(169));r?(e=Np(e,t,_n),i.__reactInternalMemoizedMergedChildContext=e,de(Ze),de($e),le($e,e)):de(Ze),le(Ze,r)}var Bt=null,Oa=!1,uo=!1;function Sp(e){Bt===null?Bt=[e]:Bt.push(e)}function zx(e){Oa=!0,Sp(e)}function Nn(){if(!uo&&Bt!==null){uo=!0;var e=0,t=oe;try{var r=Bt;for(oe=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Bt=null,Oa=!1}catch(s){throw Bt!==null&&(Bt=Bt.slice(e+1)),Qu(dc,Nn),s}finally{oe=t,uo=!1}}return null}var wr=[],yr=0,la=null,ca=0,ht=[],ut=0,Gn=null,Ft=1,Wt="";function Mn(e,t){wr[yr++]=ca,wr[yr++]=la,la=e,ca=t}function Cp(e,t,r){ht[ut++]=Ft,ht[ut++]=Wt,ht[ut++]=Gn,Gn=e;var i=Ft;e=Wt;var s=32-jt(i)-1;i&=~(1<<s),r+=1;var a=32-jt(t)+s;if(30<a){var o=s-s%5;a=(i&(1<<o)-1).toString(32),i>>=o,s-=o,Ft=1<<32-jt(t)+s|r<<s|i,Wt=a+e}else Ft=1<<a|r<<s|i,Wt=e}function yc(e){e.return!==null&&(Mn(e,1),Cp(e,1,0))}function vc(e){for(;e===la;)la=wr[--yr],wr[yr]=null,ca=wr[--yr],wr[yr]=null;for(;e===Gn;)Gn=ht[--ut],ht[ut]=null,Wt=ht[--ut],ht[ut]=null,Ft=ht[--ut],ht[ut]=null}var it=null,rt=null,ue=!1,bt=null;function Ep(e,t){var r=pt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Vd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,rt=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Gn!==null?{id:Ft,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=pt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,it=e,rt=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(ue){var t=rt;if(t){var r=t;if(!Vd(e,t)){if(xl(e))throw Error(B(418));t=mn(r.nextSibling);var i=it;t&&Vd(e,t)?Ep(i,r):(e.flags=e.flags&-4097|2,ue=!1,it=e)}}else{if(xl(e))throw Error(B(418));e.flags=e.flags&-4097|2,ue=!1,it=e}}}function qd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function vs(e){if(e!==it)return!1;if(!ue)return qd(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pl(e.type,e.memoizedProps)),t&&(t=rt)){if(xl(e))throw Rp(),Error(B(418));for(;t;)Ep(e,t),t=mn(t.nextSibling)}if(qd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){rt=mn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=it?mn(e.stateNode.nextSibling):null;return!0}function Rp(){for(var e=rt;e;)e=mn(e.nextSibling)}function Mr(){rt=it=null,ue=!1}function bc(e){bt===null?bt=[e]:bt.push(e)}var Ix=Xt.ReactCurrentBatchConfig;function ni(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(B(309));var i=r.stateNode}if(!i)throw Error(B(147,e));var s=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(B(284));if(!r._owner)throw Error(B(290,e))}return e}function bs(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kd(e){var t=e._init;return t(e._payload)}function Pp(e){function t(m,f){if(e){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function r(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function i(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(m,f){return m=wn(m,f),m.index=0,m.sibling=null,m}function a(m,f,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,y,w){return f===null||f.tag!==6?(f=yo(y,m.mode,w),f.return=m,f):(f=s(f,y),f.return=m,f)}function c(m,f,y,w){var k=y.type;return k===ur?h(m,f,y.props.children,w,y.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rn&&Kd(k)===f.type)?(w=s(f,y.props),w.ref=ni(m,f,y),w.return=m,w):(w=$s(y.type,y.key,y.props,null,m.mode,w),w.ref=ni(m,f,y),w.return=m,w)}function d(m,f,y,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=vo(y,m.mode,w),f.return=m,f):(f=s(f,y.children||[]),f.return=m,f)}function h(m,f,y,w,k){return f===null||f.tag!==7?(f=Un(y,m.mode,w,k),f.return=m,f):(f=s(f,y),f.return=m,f)}function u(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=yo(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ds:return y=$s(f.type,f.key,f.props,null,m.mode,y),y.ref=ni(m,null,f),y.return=m,y;case hr:return f=vo(f,m.mode,y),f.return=m,f;case rn:var w=f._init;return u(m,w(f._payload),y)}if(pi(f)||Qr(f))return f=Un(f,m.mode,y,null),f.return=m,f;bs(m,f)}return null}function p(m,f,y,w){var k=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:l(m,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ds:return y.key===k?c(m,f,y,w):null;case hr:return y.key===k?d(m,f,y,w):null;case rn:return k=y._init,p(m,f,k(y._payload),w)}if(pi(y)||Qr(y))return k!==null?null:h(m,f,y,w,null);bs(m,y)}return null}function x(m,f,y,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,l(f,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ds:return m=m.get(w.key===null?y:w.key)||null,c(f,m,w,k);case hr:return m=m.get(w.key===null?y:w.key)||null,d(f,m,w,k);case rn:var O=w._init;return x(m,f,y,O(w._payload),k)}if(pi(w)||Qr(w))return m=m.get(y)||null,h(f,m,w,k,null);bs(f,w)}return null}function v(m,f,y,w){for(var k=null,O=null,g=f,C=f=0,P=null;g!==null&&C<y.length;C++){g.index>C?(P=g,g=null):P=g.sibling;var R=p(m,g,y[C],w);if(R===null){g===null&&(g=P);break}e&&g&&R.alternate===null&&t(m,g),f=a(R,f,C),O===null?k=R:O.sibling=R,O=R,g=P}if(C===y.length)return r(m,g),ue&&Mn(m,C),k;if(g===null){for(;C<y.length;C++)g=u(m,y[C],w),g!==null&&(f=a(g,f,C),O===null?k=g:O.sibling=g,O=g);return ue&&Mn(m,C),k}for(g=i(m,g);C<y.length;C++)P=x(g,m,C,y[C],w),P!==null&&(e&&P.alternate!==null&&g.delete(P.key===null?C:P.key),f=a(P,f,C),O===null?k=P:O.sibling=P,O=P);return e&&g.forEach(function(L){return t(m,L)}),ue&&Mn(m,C),k}function A(m,f,y,w){var k=Qr(y);if(typeof k!="function")throw Error(B(150));if(y=k.call(y),y==null)throw Error(B(151));for(var O=k=null,g=f,C=f=0,P=null,R=y.next();g!==null&&!R.done;C++,R=y.next()){g.index>C?(P=g,g=null):P=g.sibling;var L=p(m,g,R.value,w);if(L===null){g===null&&(g=P);break}e&&g&&L.alternate===null&&t(m,g),f=a(L,f,C),O===null?k=L:O.sibling=L,O=L,g=P}if(R.done)return r(m,g),ue&&Mn(m,C),k;if(g===null){for(;!R.done;C++,R=y.next())R=u(m,R.value,w),R!==null&&(f=a(R,f,C),O===null?k=R:O.sibling=R,O=R);return ue&&Mn(m,C),k}for(g=i(m,g);!R.done;C++,R=y.next())R=x(g,m,C,R.value,w),R!==null&&(e&&R.alternate!==null&&g.delete(R.key===null?C:R.key),f=a(R,f,C),O===null?k=R:O.sibling=R,O=R);return e&&g.forEach(function(W){return t(m,W)}),ue&&Mn(m,C),k}function E(m,f,y,w){if(typeof y=="object"&&y!==null&&y.type===ur&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ds:e:{for(var k=y.key,O=f;O!==null;){if(O.key===k){if(k=y.type,k===ur){if(O.tag===7){r(m,O.sibling),f=s(O,y.props.children),f.return=m,m=f;break e}}else if(O.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rn&&Kd(k)===O.type){r(m,O.sibling),f=s(O,y.props),f.ref=ni(m,O,y),f.return=m,m=f;break e}r(m,O);break}else t(m,O);O=O.sibling}y.type===ur?(f=Un(y.props.children,m.mode,w,y.key),f.return=m,m=f):(w=$s(y.type,y.key,y.props,null,m.mode,w),w.ref=ni(m,f,y),w.return=m,m=w)}return o(m);case hr:e:{for(O=y.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){r(m,f.sibling),f=s(f,y.children||[]),f.return=m,m=f;break e}else{r(m,f);break}else t(m,f);f=f.sibling}f=vo(y,m.mode,w),f.return=m,m=f}return o(m);case rn:return O=y._init,E(m,f,O(y._payload),w)}if(pi(y))return v(m,f,y,w);if(Qr(y))return A(m,f,y,w);bs(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(r(m,f.sibling),f=s(f,y),f.return=m,m=f):(r(m,f),f=yo(y,m.mode,w),f.return=m,m=f),o(m)):r(m,f)}return E}var zr=Pp(!0),Tp=Pp(!1),da=kn(null),ha=null,vr=null,jc=null;function Ac(){jc=vr=ha=null}function kc(e){var t=da.current;de(da),e._currentValue=t}function yl(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Cr(e,t){ha=e,jc=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(jc!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(ha===null)throw Error(B(308));vr=e,ha.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Bn=null;function Nc(e){Bn===null?Bn=[e]:Bn.push(e)}function Op(e,t,r,i){var s=t.interleaved;return s===null?(r.next=r,Nc(t)):(r.next=s.next,s.next=r),t.interleaved=r,Vt(e,i)}function Vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var sn=!1;function Sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,re&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,Vt(e,r)}return s=i.interleaved,s===null?(t.next=t,Nc(i)):(t.next=s.next,s.next=t),i.interleaved=t,Vt(e,r)}function Bs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,hc(e,r)}}function Yd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ua(e,t,r,i){var s=e.updateQueue;sn=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(a!==null){var u=s.baseState;o=0,h=d=c=null,l=a;do{var p=l.lane,x=l.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,A=l;switch(p=t,x=r,A.tag){case 1:if(v=A.payload,typeof v=="function"){u=v.call(x,u,p);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=A.payload,p=typeof v=="function"?v.call(x,u,p):v,p==null)break e;u=fe({},u,p);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else x={eventTime:x,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=x,c=u):h=h.next=x,o|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(h===null&&(c=u),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);qn|=o,e.lanes=o,e.memoizedState=u}}function Xd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(B(191,s));s.call(i)}}}var rs={},Lt=kn(rs),Bi=kn(rs),Di=kn(rs);function Dn(e){if(e===rs)throw Error(B(174));return e}function Cc(e,t){switch(le(Di,t),le(Bi,e),le(Lt,rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jo(t,e)}de(Lt),le(Lt,t)}function Ir(){de(Lt),de(Bi),de(Di)}function Mp(e){Dn(Di.current);var t=Dn(Lt.current),r=Jo(t,e.type);t!==r&&(le(Bi,e),le(Lt,r))}function Ec(e){Bi.current===e&&(de(Lt),de(Bi))}var pe=kn(0);function pa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=[];function Rc(){for(var e=0;e<po.length;e++)po[e]._workInProgressVersionPrimary=null;po.length=0}var Ds=Xt.ReactCurrentDispatcher,mo=Xt.ReactCurrentBatchConfig,Vn=0,me=null,ke=null,Ee=null,ma=!1,bi=!1,Fi=0,Bx=0;function De(){throw Error(B(321))}function Pc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Nt(e[r],t[r]))return!1;return!0}function Tc(e,t,r,i,s,a){if(Vn=a,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=e===null||e.memoizedState===null?Ux:Hx,e=r(i,s),bi){a=0;do{if(bi=!1,Fi=0,25<=a)throw Error(B(301));a+=1,Ee=ke=null,t.updateQueue=null,Ds.current=$x,e=r(i,s)}while(bi)}if(Ds.current=fa,t=ke!==null&&ke.next!==null,Vn=0,Ee=ke=me=null,ma=!1,t)throw Error(B(300));return e}function Oc(){var e=Fi!==0;return Fi=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?me.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function gt(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ee===null?me.memoizedState:Ee.next;if(t!==null)Ee=t,ke=e;else{if(e===null)throw Error(B(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ee===null?me.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Wi(e,t){return typeof t=="function"?t(e):t}function fo(e){var t=gt(),r=t.queue;if(r===null)throw Error(B(311));r.lastRenderedReducer=e;var i=ke,s=i.baseQueue,a=r.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}i.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,i=i.baseState;var l=o=null,c=null,d=a;do{var h=d.lane;if((Vn&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var u={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=u,o=i):c=c.next=u,me.lanes|=h,qn|=h}d=d.next}while(d!==null&&d!==a);c===null?o=i:c.next=l,Nt(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=c,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do a=s.lane,me.lanes|=a,qn|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function go(e){var t=gt(),r=t.queue;if(r===null)throw Error(B(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Nt(a,t.memoizedState)||(Qe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,i]}function zp(){}function Ip(e,t){var r=me,i=gt(),s=t(),a=!Nt(i.memoizedState,s);if(a&&(i.memoizedState=s,Qe=!0),i=i.queue,Lc(Fp.bind(null,r,i,e),[e]),i.getSnapshot!==t||a||Ee!==null&&Ee.memoizedState.tag&1){if(r.flags|=2048,Ui(9,Dp.bind(null,r,i,s,t),void 0,null),Pe===null)throw Error(B(349));Vn&30||Bp(r,t,s)}return s}function Bp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Dp(e,t,r,i){t.value=r,t.getSnapshot=i,Wp(t)&&Up(e)}function Fp(e,t,r){return r(function(){Wp(t)&&Up(e)})}function Wp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Nt(e,r)}catch{return!0}}function Up(e){var t=Vt(e,1);t!==null&&At(t,e,1,-1)}function Qd(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=Wx.bind(null,me,e),[t.memoizedState,e]}function Ui(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Hp(){return gt().memoizedState}function Fs(e,t,r,i){var s=Pt();me.flags|=e,s.memoizedState=Ui(1|t,r,void 0,i===void 0?null:i)}function La(e,t,r,i){var s=gt();i=i===void 0?null:i;var a=void 0;if(ke!==null){var o=ke.memoizedState;if(a=o.destroy,i!==null&&Pc(i,o.deps)){s.memoizedState=Ui(t,r,a,i);return}}me.flags|=e,s.memoizedState=Ui(1|t,r,a,i)}function Zd(e,t){return Fs(8390656,8,e,t)}function Lc(e,t){return La(2048,8,e,t)}function $p(e,t){return La(4,2,e,t)}function _p(e,t){return La(4,4,e,t)}function Gp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vp(e,t,r){return r=r!=null?r.concat([e]):null,La(4,4,Gp.bind(null,t,e),r)}function Mc(){}function qp(e,t){var r=gt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Pc(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Kp(e,t){var r=gt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Pc(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Yp(e,t,r){return Vn&21?(Nt(r,t)||(r=ep(),me.lanes|=r,qn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=r)}function Dx(e,t){var r=oe;oe=r!==0&&4>r?r:4,e(!0);var i=mo.transition;mo.transition={};try{e(!1),t()}finally{oe=r,mo.transition=i}}function Xp(){return gt().memoizedState}function Fx(e,t,r){var i=xn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Qp(e))Zp(t,r);else if(r=Op(e,t,r,i),r!==null){var s=Ge();At(r,e,i,s),Jp(r,t,i)}}function Wx(e,t,r){var i=xn(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qp(e))Zp(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,r);if(s.hasEagerState=!0,s.eagerState=l,Nt(l,o)){var c=t.interleaved;c===null?(s.next=s,Nc(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}r=Op(e,t,s,i),r!==null&&(s=Ge(),At(r,e,i,s),Jp(r,t,i))}}function Qp(e){var t=e.alternate;return e===me||t!==null&&t===me}function Zp(e,t){bi=ma=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Jp(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,hc(e,r)}}var fa={readContext:ft,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Ux={readContext:ft,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Zd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Fs(4194308,4,Gp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var r=Pt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Pt();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Fx.bind(null,me,e),[i.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Qd,useDebugValue:Mc,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Qd(!1),t=e[0];return e=Dx.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=me,s=Pt();if(ue){if(r===void 0)throw Error(B(407));r=r()}else{if(r=t(),Pe===null)throw Error(B(349));Vn&30||Bp(i,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,Zd(Fp.bind(null,i,a,e),[e]),i.flags|=2048,Ui(9,Dp.bind(null,i,a,r,t),void 0,null),r},useId:function(){var e=Pt(),t=Pe.identifierPrefix;if(ue){var r=Wt,i=Ft;r=(i&~(1<<32-jt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Bx++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hx={readContext:ft,useCallback:qp,useContext:ft,useEffect:Lc,useImperativeHandle:Vp,useInsertionEffect:$p,useLayoutEffect:_p,useMemo:Kp,useReducer:fo,useRef:Hp,useState:function(){return fo(Wi)},useDebugValue:Mc,useDeferredValue:function(e){var t=gt();return Yp(t,ke.memoizedState,e)},useTransition:function(){var e=fo(Wi)[0],t=gt().memoizedState;return[e,t]},useMutableSource:zp,useSyncExternalStore:Ip,useId:Xp,unstable_isNewReconciler:!1},$x={readContext:ft,useCallback:qp,useContext:ft,useEffect:Lc,useImperativeHandle:Vp,useInsertionEffect:$p,useLayoutEffect:_p,useMemo:Kp,useReducer:go,useRef:Hp,useState:function(){return go(Wi)},useDebugValue:Mc,useDeferredValue:function(e){var t=gt();return ke===null?t.memoizedState=e:Yp(t,ke.memoizedState,e)},useTransition:function(){var e=go(Wi)[0],t=gt().memoizedState;return[e,t]},useMutableSource:zp,useSyncExternalStore:Ip,useId:Xp,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function vl(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:fe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ma={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=Ge(),s=xn(e),a=Ht(i,s);a.payload=t,r!=null&&(a.callback=r),t=fn(e,a,s),t!==null&&(At(t,e,s,i),Bs(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=Ge(),s=xn(e),a=Ht(i,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=fn(e,a,s),t!==null&&(At(t,e,s,i),Bs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ge(),i=xn(e),s=Ht(r,i);s.tag=2,t!=null&&(s.callback=t),t=fn(e,s,i),t!==null&&(At(t,e,i,r),Bs(t,e,i))}};function Jd(e,t,r,i,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!Li(r,i)||!Li(s,a):!0}function em(e,t,r){var i=!1,s=bn,a=t.contextType;return typeof a=="object"&&a!==null?a=ft(a):(s=Je(t)?_n:$e.current,i=t.contextTypes,a=(i=i!=null)?Lr(e,s):bn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ma,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function eh(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Ma.enqueueReplaceState(t,t.state,null)}function bl(e,t,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Sc(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=ft(a):(a=Je(t)?_n:$e.current,s.context=Lr(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(vl(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ma.enqueueReplaceState(s,s.state,null),ua(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var r="",i=t;do r+=xg(i),i=i.return;while(i);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function xo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function tm(e,t,r){r=Ht(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){xa||(xa=!0,Ol=i),jl(e,t)},r}function nm(e,t,r){r=Ht(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;r.payload=function(){return i(s)},r.callback=function(){jl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){jl(e,t),typeof i!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function th(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new _x;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(r)||(s.add(r),e=i1.bind(null,e,t,r),t.then(e,e))}function nh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rh(e,t,r,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ht(-1,1),t.tag=2,fn(r,t,1))),r.lanes|=1),e)}var Gx=Xt.ReactCurrentOwner,Qe=!1;function _e(e,t,r,i){t.child=e===null?Tp(t,null,r,i):zr(t,e.child,r,i)}function ih(e,t,r,i,s){r=r.render;var a=t.ref;return Cr(t,s),i=Tc(e,t,r,i,a,s),r=Oc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,qt(e,t,s)):(ue&&r&&yc(t),t.flags|=1,_e(e,t,i,s),t.child)}function sh(e,t,r,i,s){if(e===null){var a=r.type;return typeof a=="function"&&!Hc(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,rm(e,t,a,i,s)):(e=$s(r.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Li,r(o,i)&&e.ref===t.ref)return qt(e,t,s)}return t.flags|=1,e=wn(a,i),e.ref=t.ref,e.return=t,t.child=e}function rm(e,t,r,i,s){if(e!==null){var a=e.memoizedProps;if(Li(a,i)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=i=a,(e.lanes&s)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,qt(e,t,s)}return Al(e,t,r,i,s)}function im(e,t,r){var i=t.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(jr,nt),nt|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(jr,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,le(jr,nt),nt|=i}else a!==null?(i=a.baseLanes|r,t.memoizedState=null):i=r,le(jr,nt),nt|=i;return _e(e,t,s,r),t.child}function sm(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,r,i,s){var a=Je(r)?_n:$e.current;return a=Lr(t,a),Cr(t,s),r=Tc(e,t,r,i,a,s),i=Oc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,qt(e,t,s)):(ue&&i&&yc(t),t.flags|=1,_e(e,t,r,s),t.child)}function ah(e,t,r,i,s){if(Je(r)){var a=!0;oa(t)}else a=!1;if(Cr(t,s),t.stateNode===null)Ws(e,t),em(t,r,i),bl(t,r,i,s),i=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=ft(d):(d=Je(r)?_n:$e.current,d=Lr(t,d));var h=r.getDerivedStateFromProps,u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==d)&&eh(t,o,i,d),sn=!1;var p=t.memoizedState;o.state=p,ua(t,i,o,s),c=t.memoizedState,l!==i||p!==c||Ze.current||sn?(typeof h=="function"&&(vl(t,r,h,i),c=t.memoizedState),(l=sn||Jd(t,r,l,i,p,c,d))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),o.props=i,o.state=c,o.context=d,i=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Lp(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:yt(t.type,l),o.props=d,u=t.pendingProps,p=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=ft(c):(c=Je(r)?_n:$e.current,c=Lr(t,c));var x=r.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||p!==c)&&eh(t,o,i,c),sn=!1,p=t.memoizedState,o.state=p,ua(t,i,o,s);var v=t.memoizedState;l!==u||p!==v||Ze.current||sn?(typeof x=="function"&&(vl(t,r,x,i),v=t.memoizedState),(d=sn||Jd(t,r,d,i,p,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),o.props=i,o.state=v,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return kl(e,t,r,i,a,s)}function kl(e,t,r,i,s,a){sm(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return s&&Gd(t,r,!1),qt(e,t,a);i=t.stateNode,Gx.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=zr(t,e.child,null,a),t.child=zr(t,null,l,a)):_e(e,t,l,a),t.memoizedState=i.state,s&&Gd(t,r,!0),t.child}function am(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),Cc(e,t.containerInfo)}function oh(e,t,r,i,s){return Mr(),bc(s),t.flags|=256,_e(e,t,r,i),t.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function om(e,t,r){var i=t.pendingProps,s=pe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),le(pe,s&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ba(o,i,0,null),e=Un(e,i,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Sl(r),t.memoizedState=Nl,e):zc(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Vx(e,t,o,i,l,s,r);if(a){a=i.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=c,t.deletions=null):(i=wn(s,c),i.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=wn(l,a):(a=Un(a,o,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?Sl(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=Nl,i}return a=e.child,e=a.sibling,i=wn(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function zc(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function js(e,t,r,i){return i!==null&&bc(i),zr(t,e.child,null,r),e=zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vx(e,t,r,i,s,a,o){if(r)return t.flags&256?(t.flags&=-257,i=xo(Error(B(422))),js(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,s=t.mode,i=Ba({mode:"visible",children:i.children},s,0,null),a=Un(a,s,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&zr(t,e.child,null,o),t.child.memoizedState=Sl(o),t.memoizedState=Nl,a);if(!(t.mode&1))return js(e,t,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(B(419)),i=xo(a,i,void 0),js(e,t,o,i)}if(l=(o&e.childLanes)!==0,Qe||l){if(i=Pe,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Vt(e,s),At(i,e,s,-1))}return Uc(),i=xo(Error(B(421))),js(e,t,o,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=s1.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,rt=mn(s.nextSibling),it=t,ue=!0,bt=null,e!==null&&(ht[ut++]=Ft,ht[ut++]=Wt,ht[ut++]=Gn,Ft=e.id,Wt=e.overflow,Gn=t),t=zc(t,i.children),t.flags|=4096,t)}function lh(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),yl(e.return,t,r)}function wo(e,t,r,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=s)}function lm(e,t,r){var i=t.pendingProps,s=i.revealOrder,a=i.tail;if(_e(e,t,i.children,r),i=pe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lh(e,r,t);else if(e.tag===19)lh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(le(pe,i),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&pa(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),wo(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&pa(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}wo(t,!0,r,null,a);break;case"together":wo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,r=wn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=wn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qx(e,t,r){switch(t.tag){case 3:am(t),Mr();break;case 5:Mp(t);break;case 1:Je(t.type)&&oa(t);break;case 4:Cc(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;le(da,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(le(pe,pe.current&1),t.flags|=128,null):r&t.child.childLanes?om(e,t,r):(le(pe,pe.current&1),e=qt(e,t,r),e!==null?e.sibling:null);le(pe,pe.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return lm(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),le(pe,pe.current),i)break;return null;case 22:case 23:return t.lanes=0,im(e,t,r)}return qt(e,t,r)}var cm,Cl,dm,hm;cm=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Cl=function(){};dm=function(e,t,r,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,Dn(Lt.current);var a=null;switch(r){case"input":s=Yo(e,s),i=Yo(e,i),a=[];break;case"select":s=fe({},s,{value:void 0}),i=fe({},i,{value:void 0}),a=[];break;case"textarea":s=Zo(e,s),i=Zo(e,i),a=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=sa)}el(r,i);var o;r=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Si.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in i){var c=i[d];if(l=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(a||(a=[]),a.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Si.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ce("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};hm=function(e,t,r,i){r!==i&&(t.flags|=4)};function ri(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Kx(e,t,r){var i=t.pendingProps;switch(vc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Je(t.type)&&aa(),Fe(t),null;case 3:return i=t.stateNode,Ir(),de(Ze),de($e),Rc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(zl(bt),bt=null))),Cl(e,t),Fe(t),null;case 5:Ec(t);var s=Dn(Di.current);if(r=t.type,e!==null&&t.stateNode!=null)dm(e,t,r,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(B(166));return Fe(t),null}if(e=Dn(Lt.current),vs(t)){i=t.stateNode,r=t.type;var a=t.memoizedProps;switch(i[Tt]=t,i[Ii]=a,e=(t.mode&1)!==0,r){case"dialog":ce("cancel",i),ce("close",i);break;case"iframe":case"object":case"embed":ce("load",i);break;case"video":case"audio":for(s=0;s<fi.length;s++)ce(fi[s],i);break;case"source":ce("error",i);break;case"img":case"image":case"link":ce("error",i),ce("load",i);break;case"details":ce("toggle",i);break;case"input":xd(i,a),ce("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},ce("invalid",i);break;case"textarea":yd(i,a),ce("invalid",i)}el(r,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&ys(i.textContent,l,e),s=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ys(i.textContent,l,e),s=["children",""+l]):Si.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",i)}switch(r){case"input":hs(i),wd(i,a,!0);break;case"textarea":hs(i),vd(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=sa)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(r,{is:i.is}):(e=o.createElement(r),r==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,r),e[Tt]=t,e[Ii]=i,cm(e,t,!1,!1),t.stateNode=e;e:{switch(o=tl(r,i),r){case"dialog":ce("cancel",e),ce("close",e),s=i;break;case"iframe":case"object":case"embed":ce("load",e),s=i;break;case"video":case"audio":for(s=0;s<fi.length;s++)ce(fi[s],e);s=i;break;case"source":ce("error",e),s=i;break;case"img":case"image":case"link":ce("error",e),ce("load",e),s=i;break;case"details":ce("toggle",e),s=i;break;case"input":xd(e,i),s=Yo(e,i),ce("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=fe({},i,{value:void 0}),ce("invalid",e);break;case"textarea":yd(e,i),s=Zo(e,i),ce("invalid",e);break;default:s=i}el(r,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Hu(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Wu(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ci(e,c):typeof c=="number"&&Ci(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Si.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ce("scroll",e):c!=null&&sc(e,a,c,o))}switch(r){case"input":hs(e),wd(e,i,!1);break;case"textarea":hs(e),vd(e);break;case"option":i.value!=null&&e.setAttribute("value",""+vn(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Ar(e,!!i.multiple,a,!1):i.defaultValue!=null&&Ar(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=sa)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)hm(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(B(166));if(r=Dn(Di.current),Dn(Lt.current),vs(t)){if(i=t.stateNode,r=t.memoizedProps,i[Tt]=t,(a=i.nodeValue!==r)&&(e=it,e!==null))switch(e.tag){case 3:ys(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ys(i.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Tt]=t,t.stateNode=i}return Fe(t),null;case 13:if(de(pe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&rt!==null&&t.mode&1&&!(t.flags&128))Rp(),Mr(),t.flags|=98560,a=!1;else if(a=vs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(B(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(B(317));a[Tt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),a=!1}else bt!==null&&(zl(bt),bt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Ne===0&&(Ne=3):Uc())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Ir(),Cl(e,t),e===null&&Mi(t.stateNode.containerInfo),Fe(t),null;case 10:return kc(t.type._context),Fe(t),null;case 17:return Je(t.type)&&aa(),Fe(t),null;case 19:if(de(pe),a=t.memoizedState,a===null)return Fe(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)ri(a,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=pa(e),o!==null){for(t.flags|=128,ri(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)a=r,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return le(pe,pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>Dr&&(t.flags|=128,i=!0,ri(a,!1),t.lanes=4194304)}else{if(!i)if(e=pa(o),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ri(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ue)return Fe(t),null}else 2*ye()-a.renderingStartTime>Dr&&r!==1073741824&&(t.flags|=128,i=!0,ri(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,r=pe.current,le(pe,i?r&1|2:r&1),t):(Fe(t),null);case 22:case 23:return Wc(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?nt&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function Yx(e,t){switch(vc(t),t.tag){case 1:return Je(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),de(Ze),de($e),Rc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ec(t),null;case 13:if(de(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(pe),null;case 4:return Ir(),null;case 10:return kc(t.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var As=!1,Ue=!1,Xx=typeof WeakSet=="function"?WeakSet:Set,G=null;function br(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){xe(e,t,i)}else r.current=null}function El(e,t,r){try{r()}catch(i){xe(e,t,i)}}var ch=!1;function Qx(e,t){if(hl=na,e=gp(),wc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,d=0,h=0,u=e,p=null;t:for(;;){for(var x;u!==r||s!==0&&u.nodeType!==3||(l=o+s),u!==a||i!==0&&u.nodeType!==3||(c=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(x=u.firstChild)!==null;)p=u,u=x;for(;;){if(u===e)break t;if(p===r&&++d===s&&(l=o),p===a&&++h===i&&(c=o),(x=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=x}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ul={focusedElem:e,selectionRange:r},na=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var A=v.memoizedProps,E=v.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?A:yt(t.type,A),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(w){xe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return v=ch,ch=!1,v}function ji(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&El(t,r,a)}s=s.next}while(s!==i)}}function za(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Rl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function um(e){var t=e.alternate;t!==null&&(e.alternate=null,um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Ii],delete t[fl],delete t[Lx],delete t[Mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pm(e){return e.tag===5||e.tag===3||e.tag===4}function dh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=sa));else if(i!==4&&(e=e.child,e!==null))for(Pl(e,t,r),e=e.sibling;e!==null;)Pl(e,t,r),e=e.sibling}function Tl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Tl(e,t,r),e=e.sibling;e!==null;)Tl(e,t,r),e=e.sibling}var Le=null,vt=!1;function en(e,t,r){for(r=r.child;r!==null;)mm(e,t,r),r=r.sibling}function mm(e,t,r){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ca,r)}catch{}switch(r.tag){case 5:Ue||br(r,t);case 6:var i=Le,s=vt;Le=null,en(e,t,r),Le=i,vt=s,Le!==null&&(vt?(e=Le,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Le.removeChild(r.stateNode));break;case 18:Le!==null&&(vt?(e=Le,r=r.stateNode,e.nodeType===8?ho(e.parentNode,r):e.nodeType===1&&ho(e,r),Ti(e)):ho(Le,r.stateNode));break;case 4:i=Le,s=vt,Le=r.stateNode.containerInfo,vt=!0,en(e,t,r),Le=i,vt=s;break;case 0:case 11:case 14:case 15:if(!Ue&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&El(r,t,o),s=s.next}while(s!==i)}en(e,t,r);break;case 1:if(!Ue&&(br(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){xe(r,t,l)}en(e,t,r);break;case 21:en(e,t,r);break;case 22:r.mode&1?(Ue=(i=Ue)||r.memoizedState!==null,en(e,t,r),Ue=i):en(e,t,r);break;default:en(e,t,r)}}function hh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Xx),t.forEach(function(i){var s=a1.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function wt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,vt=!1;break e;case 3:Le=l.stateNode.containerInfo,vt=!0;break e;case 4:Le=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(Le===null)throw Error(B(160));mm(a,o,s),Le=null,vt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){xe(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fm(t,e),t=t.sibling}function fm(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Ct(e),i&4){try{ji(3,e,e.return),za(3,e)}catch(A){xe(e,e.return,A)}try{ji(5,e,e.return)}catch(A){xe(e,e.return,A)}}break;case 1:wt(t,e),Ct(e),i&512&&r!==null&&br(r,r.return);break;case 5:if(wt(t,e),Ct(e),i&512&&r!==null&&br(r,r.return),e.flags&32){var s=e.stateNode;try{Ci(s,"")}catch(A){xe(e,e.return,A)}}if(i&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Bu(s,a),tl(l,o);var d=tl(l,a);for(o=0;o<c.length;o+=2){var h=c[o],u=c[o+1];h==="style"?Hu(s,u):h==="dangerouslySetInnerHTML"?Wu(s,u):h==="children"?Ci(s,u):sc(s,h,u,d)}switch(l){case"input":Xo(s,a);break;case"textarea":Du(s,a);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Ar(s,!!a.multiple,x,!1):p!==!!a.multiple&&(a.defaultValue!=null?Ar(s,!!a.multiple,a.defaultValue,!0):Ar(s,!!a.multiple,a.multiple?[]:"",!1))}s[Ii]=a}catch(A){xe(e,e.return,A)}}break;case 6:if(wt(t,e),Ct(e),i&4){if(e.stateNode===null)throw Error(B(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(A){xe(e,e.return,A)}}break;case 3:if(wt(t,e),Ct(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(A){xe(e,e.return,A)}break;case 4:wt(t,e),Ct(e);break;case 13:wt(t,e),Ct(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Dc=ye())),i&4&&hh(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(Ue=(d=Ue)||h,wt(t,e),Ue=d):wt(t,e),Ct(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(G=e,h=e.child;h!==null;){for(u=G=h;G!==null;){switch(p=G,x=p.child,p.tag){case 0:case 11:case 14:case 15:ji(4,p,p.return);break;case 1:br(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(A){xe(i,r,A)}}break;case 5:br(p,p.return);break;case 22:if(p.memoizedState!==null){ph(u);continue}}x!==null?(x.return=p,G=x):ph(u)}h=h.sibling}e:for(h=null,u=e;;){if(u.tag===5){if(h===null){h=u;try{s=u.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=u.stateNode,c=u.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Uu("display",o))}catch(A){xe(e,e.return,A)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(A){xe(e,e.return,A)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:wt(t,e),Ct(e),i&4&&hh(e);break;case 21:break;default:wt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(pm(r)){var i=r;break e}r=r.return}throw Error(B(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ci(s,""),i.flags&=-33);var a=dh(e);Tl(e,a,s);break;case 3:case 4:var o=i.stateNode.containerInfo,l=dh(e);Pl(e,l,o);break;default:throw Error(B(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zx(e,t,r){G=e,gm(e)}function gm(e,t,r){for(var i=(e.mode&1)!==0;G!==null;){var s=G,a=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||As;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Ue;l=As;var d=Ue;if(As=o,(Ue=c)&&!d)for(G=s;G!==null;)o=G,c=o.child,o.tag===22&&o.memoizedState!==null?mh(s):c!==null?(c.return=o,G=c):mh(s);for(;a!==null;)G=a,gm(a),a=a.sibling;G=s,As=l,Ue=d}uh(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,G=a):uh(e)}}function uh(e){for(;G!==null;){var t=G;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||za(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ue)if(r===null)i.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:yt(t.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Xd(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Xd(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&Ti(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ue||t.flags&512&&Rl(t)}catch(p){xe(t,t.return,p)}}if(t===e){G=null;break}if(r=t.sibling,r!==null){r.return=t.return,G=r;break}G=t.return}}function ph(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var r=t.sibling;if(r!==null){r.return=t.return,G=r;break}G=t.return}}function mh(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{za(4,t)}catch(c){xe(t,r,c)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(c){xe(t,s,c)}}var a=t.return;try{Rl(t)}catch(c){xe(t,a,c)}break;case 5:var o=t.return;try{Rl(t)}catch(c){xe(t,o,c)}}}catch(c){xe(t,t.return,c)}if(t===e){G=null;break}var l=t.sibling;if(l!==null){l.return=t.return,G=l;break}G=t.return}}var Jx=Math.ceil,ga=Xt.ReactCurrentDispatcher,Ic=Xt.ReactCurrentOwner,mt=Xt.ReactCurrentBatchConfig,re=0,Pe=null,Ae=null,ze=0,nt=0,jr=kn(0),Ne=0,Hi=null,qn=0,Ia=0,Bc=0,Ai=null,Xe=null,Dc=0,Dr=1/0,It=null,xa=!1,Ol=null,gn=null,ks=!1,cn=null,wa=0,ki=0,Ll=null,Us=-1,Hs=0;function Ge(){return re&6?ye():Us!==-1?Us:Us=ye()}function xn(e){return e.mode&1?re&2&&ze!==0?ze&-ze:Ix.transition!==null?(Hs===0&&(Hs=ep()),Hs):(e=oe,e!==0||(e=window.event,e=e===void 0?16:op(e.type)),e):1}function At(e,t,r,i){if(50<ki)throw ki=0,Ll=null,Error(B(185));es(e,r,i),(!(re&2)||e!==Pe)&&(e===Pe&&(!(re&2)&&(Ia|=r),Ne===4&&on(e,ze)),et(e,i),r===1&&re===0&&!(t.mode&1)&&(Dr=ye()+500,Oa&&Nn()))}function et(e,t){var r=e.callbackNode;Ig(e,t);var i=ta(e,e===Pe?ze:0);if(i===0)r!==null&&Ad(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Ad(r),t===1)e.tag===0?zx(fh.bind(null,e)):Sp(fh.bind(null,e)),Tx(function(){!(re&6)&&Nn()}),r=null;else{switch(tp(i)){case 1:r=dc;break;case 4:r=Zu;break;case 16:r=ea;break;case 536870912:r=Ju;break;default:r=ea}r=km(r,xm.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function xm(e,t){if(Us=-1,Hs=0,re&6)throw Error(B(327));var r=e.callbackNode;if(Er()&&e.callbackNode!==r)return null;var i=ta(e,e===Pe?ze:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ya(e,i);else{t=i;var s=re;re|=2;var a=ym();(Pe!==e||ze!==t)&&(It=null,Dr=ye()+500,Wn(e,t));do try{n1();break}catch(l){wm(e,l)}while(!0);Ac(),ga.current=a,re=s,Ae!==null?t=0:(Pe=null,ze=0,t=Ne)}if(t!==0){if(t===2&&(s=al(e),s!==0&&(i=s,t=Ml(e,s))),t===1)throw r=Hi,Wn(e,0),on(e,i),et(e,ye()),r;if(t===6)on(e,i);else{if(s=e.current.alternate,!(i&30)&&!e1(s)&&(t=ya(e,i),t===2&&(a=al(e),a!==0&&(i=a,t=Ml(e,a))),t===1))throw r=Hi,Wn(e,0),on(e,i),et(e,ye()),r;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(B(345));case 2:zn(e,Xe,It);break;case 3:if(on(e,i),(i&130023424)===i&&(t=Dc+500-ye(),10<t)){if(ta(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){Ge(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ml(zn.bind(null,e,Xe,It),t);break}zn(e,Xe,It);break;case 4:if(on(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var o=31-jt(i);a=1<<o,o=t[o],o>s&&(s=o),i&=~a}if(i=s,i=ye()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jx(i/1960))-i,10<i){e.timeoutHandle=ml(zn.bind(null,e,Xe,It),i);break}zn(e,Xe,It);break;case 5:zn(e,Xe,It);break;default:throw Error(B(329))}}}return et(e,ye()),e.callbackNode===r?xm.bind(null,e):null}function Ml(e,t){var r=Ai;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=ya(e,t),e!==2&&(t=Xe,Xe=r,t!==null&&zl(t)),e}function zl(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function e1(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],a=s.getSnapshot;s=s.value;try{if(!Nt(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Bc,t&=~Ia,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jt(t),i=1<<r;e[r]=-1,t&=~i}}function fh(e){if(re&6)throw Error(B(327));Er();var t=ta(e,0);if(!(t&1))return et(e,ye()),null;var r=ya(e,t);if(e.tag!==0&&r===2){var i=al(e);i!==0&&(t=i,r=Ml(e,i))}if(r===1)throw r=Hi,Wn(e,0),on(e,t),et(e,ye()),r;if(r===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,Xe,It),et(e,ye()),null}function Fc(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(Dr=ye()+500,Oa&&Nn())}}function Kn(e){cn!==null&&cn.tag===0&&!(re&6)&&Er();var t=re;re|=1;var r=mt.transition,i=oe;try{if(mt.transition=null,oe=1,e)return e()}finally{oe=i,mt.transition=r,re=t,!(re&6)&&Nn()}}function Wc(){nt=jr.current,de(jr)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Px(r)),Ae!==null)for(r=Ae.return;r!==null;){var i=r;switch(vc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&aa();break;case 3:Ir(),de(Ze),de($e),Rc();break;case 5:Ec(i);break;case 4:Ir();break;case 13:de(pe);break;case 19:de(pe);break;case 10:kc(i.type._context);break;case 22:case 23:Wc()}r=r.return}if(Pe=e,Ae=e=wn(e.current,null),ze=nt=t,Ne=0,Hi=null,Bc=Ia=qn=0,Xe=Ai=null,Bn!==null){for(t=0;t<Bn.length;t++)if(r=Bn[t],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=s,i.next=o}r.pending=i}Bn=null}return e}function wm(e,t){do{var r=Ae;try{if(Ac(),Ds.current=fa,ma){for(var i=me.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}ma=!1}if(Vn=0,Ee=ke=me=null,bi=!1,Fi=0,Ic.current=null,r===null||r.return===null){Ne=1,Hi=t,Ae=null;break}e:{var a=e,o=r.return,l=r,c=t;if(t=ze,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=nh(o);if(x!==null){x.flags&=-257,rh(x,o,l,a,t),x.mode&1&&th(a,d,t),t=x,c=d;var v=t.updateQueue;if(v===null){var A=new Set;A.add(c),t.updateQueue=A}else v.add(c);break e}else{if(!(t&1)){th(a,d,t),Uc();break e}c=Error(B(426))}}else if(ue&&l.mode&1){var E=nh(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),rh(E,o,l,a,t),bc(Br(c,l));break e}}a=c=Br(c,l),Ne!==4&&(Ne=2),Ai===null?Ai=[a]:Ai.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=tm(a,c,t);Yd(a,m);break e;case 1:l=c;var f=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(gn===null||!gn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=nm(a,l,t);Yd(a,w);break e}}a=a.return}while(a!==null)}bm(r)}catch(k){t=k,Ae===r&&r!==null&&(Ae=r=r.return);continue}break}while(!0)}function ym(){var e=ga.current;return ga.current=fa,e===null?fa:e}function Uc(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Pe===null||!(qn&268435455)&&!(Ia&268435455)||on(Pe,ze)}function ya(e,t){var r=re;re|=2;var i=ym();(Pe!==e||ze!==t)&&(It=null,Wn(e,t));do try{t1();break}catch(s){wm(e,s)}while(!0);if(Ac(),re=r,ga.current=i,Ae!==null)throw Error(B(261));return Pe=null,ze=0,Ne}function t1(){for(;Ae!==null;)vm(Ae)}function n1(){for(;Ae!==null&&!Cg();)vm(Ae)}function vm(e){var t=Am(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?bm(e):Ae=t,Ic.current=null}function bm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yx(r,t),r!==null){r.flags&=32767,Ae=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ae=null;return}}else if(r=Kx(r,t,nt),r!==null){Ae=r;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ne===0&&(Ne=5)}function zn(e,t,r){var i=oe,s=mt.transition;try{mt.transition=null,oe=1,r1(e,t,r,i)}finally{mt.transition=s,oe=i}return null}function r1(e,t,r,i){do Er();while(cn!==null);if(re&6)throw Error(B(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Bg(e,a),e===Pe&&(Ae=Pe=null,ze=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ks||(ks=!0,km(ea,function(){return Er(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=mt.transition,mt.transition=null;var o=oe;oe=1;var l=re;re|=4,Ic.current=null,Qx(e,r),fm(r,e),Ax(ul),na=!!hl,ul=hl=null,e.current=r,Zx(r),Eg(),re=l,oe=o,mt.transition=a}else e.current=r;if(ks&&(ks=!1,cn=e,wa=s),a=e.pendingLanes,a===0&&(gn=null),Tg(r.stateNode),et(e,ye()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(xa)throw xa=!1,e=Ol,Ol=null,e;return wa&1&&e.tag!==0&&Er(),a=e.pendingLanes,a&1?e===Ll?ki++:(ki=0,Ll=e):ki=0,Nn(),null}function Er(){if(cn!==null){var e=tp(wa),t=mt.transition,r=oe;try{if(mt.transition=null,oe=16>e?16:e,cn===null)var i=!1;else{if(e=cn,cn=null,wa=0,re&6)throw Error(B(331));var s=re;for(re|=4,G=e.current;G!==null;){var a=G,o=a.child;if(G.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(G=d;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:ji(8,h,a)}var u=h.child;if(u!==null)u.return=h,G=u;else for(;G!==null;){h=G;var p=h.sibling,x=h.return;if(um(h),h===d){G=null;break}if(p!==null){p.return=x,G=p;break}G=x}}}var v=a.alternate;if(v!==null){var A=v.child;if(A!==null){v.child=null;do{var E=A.sibling;A.sibling=null,A=E}while(A!==null)}}G=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,G=o;else e:for(;G!==null;){if(a=G,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ji(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,G=m;break e}G=a.return}}var f=e.current;for(G=f;G!==null;){o=G;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,G=y;else e:for(o=f;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:za(9,l)}}catch(k){xe(l,l.return,k)}if(l===o){G=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,G=w;break e}G=l.return}}if(re=s,Nn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ca,e)}catch{}i=!0}return i}finally{oe=r,mt.transition=t}}return!1}function gh(e,t,r){t=Br(r,t),t=tm(e,t,1),e=fn(e,t,1),t=Ge(),e!==null&&(es(e,1,t),et(e,t))}function xe(e,t,r){if(e.tag===3)gh(e,e,r);else for(;t!==null;){if(t.tag===3){gh(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gn===null||!gn.has(i))){e=Br(r,e),e=nm(t,e,1),t=fn(t,e,1),e=Ge(),t!==null&&(es(t,1,e),et(t,e));break}}t=t.return}}function i1(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&r,Pe===e&&(ze&r)===r&&(Ne===4||Ne===3&&(ze&130023424)===ze&&500>ye()-Dc?Wn(e,0):Bc|=r),et(e,t)}function jm(e,t){t===0&&(e.mode&1?(t=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):t=1);var r=Ge();e=Vt(e,t),e!==null&&(es(e,t,r),et(e,r))}function s1(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),jm(e,r)}function a1(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(B(314))}i!==null&&i.delete(t),jm(e,r)}var Am;Am=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Qe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Qe=!1,qx(e,t,r);Qe=!!(e.flags&131072)}else Qe=!1,ue&&t.flags&1048576&&Cp(t,ca,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ws(e,t),e=t.pendingProps;var s=Lr(t,$e.current);Cr(t,r),s=Tc(null,t,i,e,s,r);var a=Oc();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(i)?(a=!0,oa(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Sc(t),s.updater=Ma,t.stateNode=s,s._reactInternals=t,bl(t,i,e,r),t=kl(null,t,i,!0,a,r)):(t.tag=0,ue&&a&&yc(t),_e(null,t,s,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=l1(i),e=yt(i,e),s){case 0:t=Al(null,t,i,e,r);break e;case 1:t=ah(null,t,i,e,r);break e;case 11:t=ih(null,t,i,e,r);break e;case 14:t=sh(null,t,i,yt(i.type,e),r);break e}throw Error(B(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:yt(i,s),Al(e,t,i,s,r);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:yt(i,s),ah(e,t,i,s,r);case 3:e:{if(am(t),e===null)throw Error(B(387));i=t.pendingProps,a=t.memoizedState,s=a.element,Lp(e,t),ua(t,i,null,r);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=Br(Error(B(423)),t),t=oh(e,t,i,r,s);break e}else if(i!==s){s=Br(Error(B(424)),t),t=oh(e,t,i,r,s);break e}else for(rt=mn(t.stateNode.containerInfo.firstChild),it=t,ue=!0,bt=null,r=Tp(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Mr(),i===s){t=qt(e,t,r);break e}_e(e,t,i,r)}t=t.child}return t;case 5:return Mp(t),e===null&&wl(t),i=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,pl(i,s)?o=null:a!==null&&pl(i,a)&&(t.flags|=32),sm(e,t),_e(e,t,o,r),t.child;case 6:return e===null&&wl(t),null;case 13:return om(e,t,r);case 4:return Cc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=zr(t,null,i,r):_e(e,t,i,r),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:yt(i,s),ih(e,t,i,s,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,le(da,i._currentValue),i._currentValue=o,a!==null)if(Nt(a.value,o)){if(a.children===s.children&&!Ze.current){t=qt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=Ht(-1,r&-r),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),yl(a.return,r,t),l.lanes|=r;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(B(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),yl(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}_e(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,Cr(t,r),s=ft(s),i=i(s),t.flags|=1,_e(e,t,i,r),t.child;case 14:return i=t.type,s=yt(i,t.pendingProps),s=yt(i.type,s),sh(e,t,i,s,r);case 15:return rm(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:yt(i,s),Ws(e,t),t.tag=1,Je(i)?(e=!0,oa(t)):e=!1,Cr(t,r),em(t,i,s),bl(t,i,s,r),kl(null,t,i,!0,e,r);case 19:return lm(e,t,r);case 22:return im(e,t,r)}throw Error(B(156,t.tag))};function km(e,t){return Qu(e,t)}function o1(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,r,i){return new o1(e,t,r,i)}function Hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l1(e){if(typeof e=="function")return Hc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oc)return 11;if(e===lc)return 14}return 2}function wn(e,t){var r=e.alternate;return r===null?(r=pt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function $s(e,t,r,i,s,a){var o=2;if(i=e,typeof e=="function")Hc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ur:return Un(r.children,s,a,t);case ac:o=8,s|=8;break;case Go:return e=pt(12,r,t,s|2),e.elementType=Go,e.lanes=a,e;case Vo:return e=pt(13,r,t,s),e.elementType=Vo,e.lanes=a,e;case qo:return e=pt(19,r,t,s),e.elementType=qo,e.lanes=a,e;case Mu:return Ba(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ou:o=10;break e;case Lu:o=9;break e;case oc:o=11;break e;case lc:o=14;break e;case rn:o=16,i=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=pt(o,r,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Un(e,t,r,i){return e=pt(7,e,i,t),e.lanes=r,e}function Ba(e,t,r,i){return e=pt(22,e,i,t),e.elementType=Mu,e.lanes=r,e.stateNode={isHidden:!1},e}function yo(e,t,r){return e=pt(6,e,null,t),e.lanes=r,e}function vo(e,t,r){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function c1(e,t,r,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function $c(e,t,r,i,s,a,o,l,c){return e=new c1(e,t,r,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=pt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(a),e}function d1(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Nm(e){if(!e)return bn;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var r=e.type;if(Je(r))return Np(e,r,t)}return t}function Sm(e,t,r,i,s,a,o,l,c){return e=$c(r,i,!0,e,s,a,o,l,c),e.context=Nm(null),r=e.current,i=Ge(),s=xn(r),a=Ht(i,s),a.callback=t??null,fn(r,a,s),e.current.lanes=s,es(e,s,i),et(e,i),e}function Da(e,t,r,i){var s=t.current,a=Ge(),o=xn(s);return r=Nm(r),t.context===null?t.context=r:t.pendingContext=r,t=Ht(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=fn(s,t,o),e!==null&&(At(e,s,o,a),Bs(e,s,o)),o}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function _c(e,t){xh(e,t),(e=e.alternate)&&xh(e,t)}function h1(){return null}var Cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gc(e){this._internalRoot=e}Fa.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Da(e,t,null,null)};Fa.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){Da(null,e,null,null)}),t[Gt]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=ip();e={blockedOn:null,target:e,priority:t};for(var r=0;r<an.length&&t!==0&&t<an[r].priority;r++);an.splice(r,0,e),r===0&&ap(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wh(){}function u1(e,t,r,i,s){if(s){if(typeof i=="function"){var a=i;i=function(){var d=va(o);a.call(d)}}var o=Sm(t,i,e,0,null,!1,!1,"",wh);return e._reactRootContainer=o,e[Gt]=o.current,Mi(e.nodeType===8?e.parentNode:e),Kn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var l=i;i=function(){var d=va(c);l.call(d)}}var c=$c(e,0,!1,null,null,!1,!1,"",wh);return e._reactRootContainer=c,e[Gt]=c.current,Mi(e.nodeType===8?e.parentNode:e),Kn(function(){Da(t,c,r,i)}),c}function Ua(e,t,r,i,s){var a=r._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=va(o);l.call(c)}}Da(t,o,e,s)}else o=u1(r,t,e,s,i);return va(o)}np=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=mi(t.pendingLanes);r!==0&&(hc(t,r|1),et(t,ye()),!(re&6)&&(Dr=ye()+500,Nn()))}break;case 13:Kn(function(){var i=Vt(e,1);if(i!==null){var s=Ge();At(i,e,1,s)}}),_c(e,1)}};uc=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var r=Ge();At(t,e,134217728,r)}_c(e,134217728)}};rp=function(e){if(e.tag===13){var t=xn(e),r=Vt(e,t);if(r!==null){var i=Ge();At(r,e,t,i)}_c(e,t)}};ip=function(){return oe};sp=function(e,t){var r=oe;try{return oe=e,t()}finally{oe=r}};rl=function(e,t,r){switch(t){case"input":if(Xo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var s=Ta(i);if(!s)throw Error(B(90));Iu(i),Xo(i,s)}}}break;case"textarea":Du(e,r);break;case"select":t=r.value,t!=null&&Ar(e,!!r.multiple,t,!1)}};Gu=Fc;Vu=Kn;var p1={usingClientEntryPoint:!1,Events:[ns,gr,Ta,$u,_u,Fc]},ii={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m1={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yu(e),e===null?null:e.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||h1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{Ca=Ns.inject(m1),Ot=Ns}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1;at.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(B(200));return d1(e,t,null,r)};at.createRoot=function(e,t){if(!Vc(e))throw Error(B(299));var r=!1,i="",s=Cm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=$c(e,1,!1,null,null,r,!1,i,s),e[Gt]=t.current,Mi(e.nodeType===8?e.parentNode:e),new Gc(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Yu(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return Kn(e)};at.hydrate=function(e,t,r){if(!Wa(t))throw Error(B(200));return Ua(null,e,t,!0,r)};at.hydrateRoot=function(e,t,r){if(!Vc(e))throw Error(B(405));var i=r!=null&&r.hydratedSources||null,s=!1,a="",o=Cm;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Sm(t,null,e,1,r??null,s,!1,a,o),e[Gt]=t.current,Mi(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Fa(t)};at.render=function(e,t,r){if(!Wa(t))throw Error(B(200));return Ua(null,e,t,!1,r)};at.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(B(40));return e._reactRootContainer?(Kn(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};at.unstable_batchedUpdates=Fc;at.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Wa(r))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Ua(e,t,r,!1,i)};at.version="18.3.1-next-f1338f8080-20240426";function Em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Em)}catch(e){console.error(e)}}Em(),Eu.exports=at;var f1=Eu.exports,yh=f1;$o.createRoot=yh.createRoot,$o.hydrateRoot=yh.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},$i.apply(null,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const vh="popstate";function g1(e){e===void 0&&(e={});function t(i,s){let{pathname:a,search:o,hash:l}=i.location;return Il("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:ba(s)}return w1(t,r,null,e)}function ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function x1(){return Math.random().toString(36).substr(2,8)}function bh(e,t){return{usr:e.state,key:e.key,idx:t}}function Il(e,t,r,i){return r===void 0&&(r=null),$i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vr(t):t,{state:r,key:t&&t.key||i||x1()})}function ba(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Vr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function w1(e,t,r,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,o=s.history,l=dn.Pop,c=null,d=h();d==null&&(d=0,o.replaceState($i({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function u(){l=dn.Pop;let E=h(),m=E==null?null:E-d;d=E,c&&c({action:l,location:A.location,delta:m})}function p(E,m){l=dn.Push;let f=Il(A.location,E,m);d=h()+1;let y=bh(f,d),w=A.createHref(f);try{o.pushState(y,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(w)}a&&c&&c({action:l,location:A.location,delta:1})}function x(E,m){l=dn.Replace;let f=Il(A.location,E,m);d=h();let y=bh(f,d),w=A.createHref(f);o.replaceState(y,"",w),a&&c&&c({action:l,location:A.location,delta:0})}function v(E){let m=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof E=="string"?E:ba(E);return f=f.replace(/ $/,"%20"),ve(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let A={get action(){return l},get location(){return e(s,o)},listen(E){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(vh,u),c=E,()=>{s.removeEventListener(vh,u),c=null}},createHref(E){return t(s,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:x,go(E){return o.go(E)}};return A}var jh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jh||(jh={}));function y1(e,t,r){return r===void 0&&(r="/"),v1(e,t,r)}function v1(e,t,r,i){let s=typeof t=="string"?Vr(t):t,a=qc(s.pathname||"/",r);if(a==null)return null;let o=Pm(e);b1(o);let l=null,c=L1(a);for(let d=0;l==null&&d<o.length;++d)l=P1(o[d],c);return l}function Pm(e,t,r,i){t===void 0&&(t=[]),r===void 0&&(r=[]),i===void 0&&(i="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(ve(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let d=yn([i,c.relativePath]),h=r.concat(c);a.children&&a.children.length>0&&(ve(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Pm(a.children,t,h,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:E1(d,a.index),routesMeta:h})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of Tm(a.path))s(a,o,c)}),t}function Tm(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,s=r.endsWith("?"),a=r.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let o=Tm(i.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function b1(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:R1(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const j1=/^:[\w-]+$/,A1=3,k1=2,N1=1,S1=10,C1=-2,Ah=e=>e==="*";function E1(e,t){let r=e.split("/"),i=r.length;return r.some(Ah)&&(i+=C1),t&&(i+=k1),r.filter(s=>!Ah(s)).reduce((s,a)=>s+(j1.test(a)?A1:a===""?N1:S1),i)}function R1(e,t){return e.length===t.length&&e.slice(0,-1).every((i,s)=>i===t[s])?e[e.length-1]-t[t.length-1]:0}function P1(e,t,r){let{routesMeta:i}=e,s={},a="/",o=[];for(let l=0;l<i.length;++l){let c=i[l],d=l===i.length-1,h=a==="/"?t:t.slice(a.length)||"/",u=T1({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h),p=c.route;if(!u)return null;Object.assign(s,u.params),o.push({params:s,pathname:yn([a,u.pathname]),pathnameBase:I1(yn([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=yn([a,u.pathnameBase]))}return o}function T1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=O1(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:i.reduce((d,h,u)=>{let{paramName:p,isOptional:x}=h;if(p==="*"){let A=l[u]||"";o=a.slice(0,a.length-A.length).replace(/(.)\/+$/,"$1")}const v=l[u];return x&&!v?d[p]=void 0:d[p]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function O1(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Rm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function L1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function M1(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:s=""}=typeof e=="string"?Vr(e):e,a;return r?(r=Om(r),r.startsWith("/")?a=kh(r.substring(1),"/"):a=kh(r,t)):a=t,{pathname:a,search:B1(i),hash:D1(s)}}function kh(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function bo(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z1(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Kc(e,t){let r=z1(e);return t?r.map((i,s)=>s===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Yc(e,t,r,i){i===void 0&&(i=!1);let s;typeof e=="string"?s=Vr(e):(s=$i({},e),ve(!s.pathname||!s.pathname.includes("?"),bo("?","pathname","search",s)),ve(!s.pathname||!s.pathname.includes("#"),bo("#","pathname","hash",s)),ve(!s.search||!s.search.includes("#"),bo("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=r;else{let u=t.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),u-=1;s.pathname=p.join("/")}l=u>=0?t[u]:"/"}let c=M1(s,l),d=o&&o!=="/"&&o.endsWith("/"),h=(a||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const Om=e=>e.replace(/\/\/+/g,"/"),yn=e=>Om(e.join("/")),I1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,D1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function F1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lm=["post","put","patch","delete"];new Set(Lm);const W1=["get",...Lm];new Set(W1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},_i.apply(null,arguments)}const Xc=j.createContext(null),U1=j.createContext(null),Sn=j.createContext(null),Ha=j.createContext(null),Qt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Mm=j.createContext(null);function H1(e,t){let{relative:r}=t===void 0?{}:t;qr()||ve(!1);let{basename:i,navigator:s}=j.useContext(Sn),{hash:a,pathname:o,search:l}=Im(e,{relative:r}),c=o;return i!=="/"&&(c=o==="/"?i:yn([i,o])),s.createHref({pathname:c,search:l,hash:a})}function qr(){return j.useContext(Ha)!=null}function tr(){return qr()||ve(!1),j.useContext(Ha).location}function zm(e){j.useContext(Sn).static||j.useLayoutEffect(e)}function nr(){let{isDataRoute:e}=j.useContext(Qt);return e?t0():$1()}function $1(){qr()||ve(!1);let e=j.useContext(Xc),{basename:t,future:r,navigator:i}=j.useContext(Sn),{matches:s}=j.useContext(Qt),{pathname:a}=tr(),o=JSON.stringify(Kc(s,r.v7_relativeSplatPath)),l=j.useRef(!1);return zm(()=>{l.current=!0}),j.useCallback(function(d,h){if(h===void 0&&(h={}),!l.current)return;if(typeof d=="number"){i.go(d);return}let u=Yc(d,JSON.parse(o),a,h.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:yn([t,u.pathname])),(h.replace?i.replace:i.push)(u,h.state,h)},[t,i,o,a,e])}function Qc(){let{matches:e}=j.useContext(Qt),t=e[e.length-1];return t?t.params:{}}function Im(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=j.useContext(Sn),{matches:s}=j.useContext(Qt),{pathname:a}=tr(),o=JSON.stringify(Kc(s,i.v7_relativeSplatPath));return j.useMemo(()=>Yc(e,JSON.parse(o),a,r==="path"),[e,o,a,r])}function _1(e,t){return G1(e,t)}function G1(e,t,r,i){qr()||ve(!1);let{navigator:s}=j.useContext(Sn),{matches:a}=j.useContext(Qt),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=tr(),h;if(t){var u;let E=typeof t=="string"?Vr(t):t;c==="/"||(u=E.pathname)!=null&&u.startsWith(c)||ve(!1),h=E}else h=d;let p=h.pathname||"/",x=p;if(c!=="/"){let E=c.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=y1(e,{pathname:x}),A=X1(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:yn([c,s.encodeLocation?s.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:yn([c,s.encodeLocation?s.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),a,r,i);return t&&A?j.createElement(Ha.Provider,{value:{location:_i({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:dn.Pop}},A):A}function V1(){let e=e0(),t=F1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),r?j.createElement("pre",{style:s},r):null,null)}const q1=j.createElement(V1,null);class K1 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?j.createElement(Qt.Provider,{value:this.props.routeContext},j.createElement(Mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y1(e){let{routeContext:t,match:r,children:i}=e,s=j.useContext(Xc);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(Qt.Provider,{value:t},i)}function X1(e,t,r,i){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(s=r)==null?void 0:s.errors;if(l!=null){let h=o.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);h>=0||ve(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let h=0;h<o.length;h++){let u=o[h];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=h),u.route.id){let{loaderData:p,errors:x}=r,v=u.route.loader&&p[u.route.id]===void 0&&(!x||x[u.route.id]===void 0);if(u.route.lazy||v){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,u,p)=>{let x,v=!1,A=null,E=null;r&&(x=l&&u.route.id?l[u.route.id]:void 0,A=u.route.errorElement||q1,c&&(d<0&&p===0?(n0("route-fallback"),v=!0,E=null):d===p&&(v=!0,E=u.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),f=()=>{let y;return x?y=A:v?y=E:u.route.Component?y=j.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=h,j.createElement(Y1,{match:u,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:y})};return r&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?j.createElement(K1,{location:r.location,revalidation:r.revalidation,component:A,error:x,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Bm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bm||{}),Dm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Dm||{});function Q1(e){let t=j.useContext(Xc);return t||ve(!1),t}function Z1(e){let t=j.useContext(U1);return t||ve(!1),t}function J1(e){let t=j.useContext(Qt);return t||ve(!1),t}function Fm(e){let t=J1(),r=t.matches[t.matches.length-1];return r.route.id||ve(!1),r.route.id}function e0(){var e;let t=j.useContext(Mm),r=Z1(),i=Fm();return t!==void 0?t:(e=r.errors)==null?void 0:e[i]}function t0(){let{router:e}=Q1(Bm.UseNavigateStable),t=Fm(Dm.UseNavigateStable),r=j.useRef(!1);return zm(()=>{r.current=!0}),j.useCallback(function(s,a){a===void 0&&(a={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,_i({fromRouteId:t},a)))},[e,t])}const Nh={};function n0(e,t,r){Nh[e]||(Nh[e]=!0)}function r0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Gi(e){let{to:t,replace:r,state:i,relative:s}=e;qr()||ve(!1);let{future:a,static:o}=j.useContext(Sn),{matches:l}=j.useContext(Qt),{pathname:c}=tr(),d=nr(),h=Yc(t,Kc(l,a.v7_relativeSplatPath),c,s==="path"),u=JSON.stringify(h);return j.useEffect(()=>d(JSON.parse(u),{replace:r,state:i,relative:s}),[d,u,s,r,i]),null}function ge(e){ve(!1)}function i0(e){let{basename:t="/",children:r=null,location:i,navigationType:s=dn.Pop,navigator:a,static:o=!1,future:l}=e;qr()&&ve(!1);let c=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:c,navigator:a,static:o,future:_i({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof i=="string"&&(i=Vr(i));let{pathname:h="/",search:u="",hash:p="",state:x=null,key:v="default"}=i,A=j.useMemo(()=>{let E=qc(h,c);return E==null?null:{location:{pathname:E,search:u,hash:p,state:x,key:v},navigationType:s}},[c,h,u,p,x,v,s]);return A==null?null:j.createElement(Sn.Provider,{value:d},j.createElement(Ha.Provider,{children:r,value:A}))}function s0(e){let{children:t,location:r}=e;return _1(Bl(t),r)}new Promise(()=>{});function Bl(e,t){t===void 0&&(t=[]);let r=[];return j.Children.forEach(e,(i,s)=>{if(!j.isValidElement(i))return;let a=[...t,s];if(i.type===j.Fragment){r.push.apply(r,Bl(i.props.children,a));return}i.type!==ge&&ve(!1),!i.props.index||!i.props.children||ve(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Bl(i.props.children,a)),r.push(o)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Dl.apply(null,arguments)}function a0(e,t){if(e==null)return{};var r={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;r[i]=e[i]}return r}function o0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function l0(e,t){return e.button===0&&(!t||t==="_self")&&!o0(e)}function Fl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let i=e[r];return t.concat(Array.isArray(i)?i.map(s=>[r,s]):[[r,i]])},[]))}function c0(e,t){let r=Fl(e);return t&&t.forEach((i,s)=>{r.has(s)||t.getAll(s).forEach(a=>{r.append(s,a)})}),r}const d0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],h0="6";try{window.__reactRouterVersion=h0}catch{}const u0="startTransition",Sh=ig[u0];function p0(e){let{basename:t,children:r,future:i,window:s}=e,a=j.useRef();a.current==null&&(a.current=g1({window:s,v5Compat:!0}));let o=a.current,[l,c]=j.useState({action:o.action,location:o.location}),{v7_startTransition:d}=i||{},h=j.useCallback(u=>{d&&Sh?Sh(()=>c(u)):c(u)},[c,d]);return j.useLayoutEffect(()=>o.listen(h),[o,h]),j.useEffect(()=>r0(i),[i]),j.createElement(i0,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:i})}const m0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q=j.forwardRef(function(t,r){let{onClick:i,relative:s,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:h,viewTransition:u}=t,p=a0(t,d0),{basename:x}=j.useContext(Sn),v,A=!1;if(typeof d=="string"&&f0.test(d)&&(v=d,m0))try{let y=new URL(window.location.href),w=d.startsWith("//")?new URL(y.protocol+d):new URL(d),k=qc(w.pathname,x);w.origin===y.origin&&k!=null?d=k+w.search+w.hash:A=!0}catch{}let E=H1(d,{relative:s}),m=g0(d,{replace:o,state:l,target:c,preventScrollReset:h,relative:s,viewTransition:u});function f(y){i&&i(y),y.defaultPrevented||m(y)}return j.createElement("a",Dl({},p,{href:v||E,onClick:A||a?i:f,ref:r,target:c}))});var Ch;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ch||(Ch={}));var Eh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Eh||(Eh={}));function g0(e,t){let{target:r,replace:i,state:s,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=nr(),d=tr(),h=Im(e,{relative:o});return j.useCallback(u=>{if(l0(u,r)){u.preventDefault();let p=i!==void 0?i:ba(d)===ba(h);c(e,{replace:p,state:s,preventScrollReset:a,relative:o,viewTransition:l})}},[d,c,h,i,s,r,e,a,o,l])}function Zc(e){let t=j.useRef(Fl(e)),r=j.useRef(!1),i=tr(),s=j.useMemo(()=>c0(i.search,r.current?null:t.current),[i.search]),a=nr(),o=j.useCallback((l,c)=>{const d=Fl(typeof l=="function"?l(s):l);r.current=!0,a("?"+d,c)},[a,s]);return[s,o]}function Wm(e,t){return function(){return e.apply(t,arguments)}}const{toString:x0}=Object.prototype,{getPrototypeOf:jn}=Object,{iterator:is,toStringTag:Um}=Symbol,Vi=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Hm=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),$m=(e,t,r)=>e===Object.prototype||!r&&t===null,w0=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(r=>{if(Hm(r))return!1;const i=Object.getOwnPropertyDescriptor(e,r);return!!i&&i.configurable&&i.writable===!0})},qi=(e,t)=>{let r=e;const i=[];for(;r!=null;){if(i.indexOf(r)!==-1)return!1;i.push(r);const s=jn(r);if($m(r,s,r===e))return!1;if(Vi(r,t))return!0;r=s}return!1},y0=(e,t)=>e!=null&&qi(e,t)?e[t]:void 0,v0=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const t=jn(e);if(t===null&&w0(e))return e;const r=Object.create(null),i=Object.create(null),s=[];let a=e;for(;a!=null&&s.indexOf(a)===-1;){s.push(a);const o=a===e?t:jn(a);if($m(a,o,a===e))break;const l=Object.getOwnPropertyNames(a);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(a));for(const c of l)Hm(c)||Vi(i,c)||(r[c]=e[c],i[c]=!0);a=o}return r},Jc=(e=>t=>{const r=x0.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),xt=e=>(e=e.toLowerCase(),t=>Jc(t)===e),$a=e=>t=>typeof t===e,{isArray:Yn}=Array,Xn=$a("undefined");function Kr(e){return e!==null&&!Xn(e)&&e.constructor!==null&&!Xn(e.constructor)&&tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _m=xt("ArrayBuffer");function b0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_m(e.buffer),t}const j0=$a("string"),tt=$a("function"),Gm=$a("number"),Yr=e=>e!==null&&typeof e=="object",A0=e=>e===!0||e===!1,_s=e=>{if(!Yr(e))return!1;const t=jn(e);return(t===null||t===Object.prototype||jn(t)===null)&&!qi(e,Um)&&!qi(e,is)},k0=e=>{if(!Yr(e)||Kr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},N0=xt("Date"),S0=xt("File"),C0=e=>!!(e&&typeof e.uri<"u"),E0=e=>e&&typeof e.getParts<"u",R0=xt("Blob"),P0=xt("FileList"),T0=xt("Set"),O0=e=>Yr(e)&&tt(e.pipe);function L0(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Rh=L0(),Ph=typeof Rh.FormData<"u"?Rh.FormData:void 0,M0=e=>{if(!e)return!1;if(Ph&&e instanceof Ph)return!0;const t=jn(e);if(!t||t===Object.prototype||!tt(e.append))return!1;const r=Jc(e);return r==="formdata"||r==="object"&&tt(e.toString)&&e.toString()==="[object FormData]"},z0=xt("URLSearchParams"),[I0,B0,D0,F0]=["ReadableStream","Request","Response","Headers"].map(xt),W0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ss(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),Yn(e))for(i=0,s=e.length;i<s;i++)t.call(null,e[i],i,e);else{if(Kr(e))return;const a=r?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(i=0;i<o;i++)l=a[i],t.call(null,e[l],l,e)}}function Vm(e,t){if(Kr(e))return null;t=t.toLowerCase();const r=Object.keys(e);let i=r.length,s;for(;i-- >0;)if(s=r[i],t===s.toLowerCase())return s;return null}const Fn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qm=e=>!Xn(e)&&e!==Fn;function Wl(...e){const{caseless:t,skipUndefined:r}=qm(this)&&this||{},i={},s=(a,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const l=t&&typeof o=="string"&&Vm(i,o)||o,c=Vi(i,l)?i[l]:void 0;_s(c)&&_s(a)?i[l]=Wl(c,a):_s(a)?i[l]=Wl({},a):Yn(a)?i[l]=a.slice():(!r||!Xn(a))&&(i[l]=a)};for(let a=0,o=e.length;a<o;a++){const l=e[a];if(!l||Kr(l)||(ss(l,s),typeof l!="object"||Yn(l)))continue;const c=Object.getOwnPropertySymbols(l);for(let d=0;d<c.length;d++){const h=c[d];Z0.call(l,h)&&s(l[h],h)}}return i}const U0=(e,t,r,{allOwnKeys:i}={})=>(ss(t,(s,a)=>{r&&tt(s)?Object.defineProperty(e,a,{__proto__:null,value:Wm(s,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,a,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),e),H0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),$0=(e,t,r,i)=>{e.prototype=Object.create(t.prototype,i),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),r&&Object.assign(e.prototype,r)},_0=(e,t,r,i)=>{let s,a,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),a=s.length;a-- >0;)o=s[a],(!i||i(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=r!==!1&&jn(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},G0=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const i=e.indexOf(t,r);return i!==-1&&i===r},V0=e=>{if(!e)return null;if(Yn(e))return e;let t=e.length;if(!Gm(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},q0=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&jn(Uint8Array)),K0=(e,t)=>{const i=(e&&e[is]).call(e);let s;for(;(s=i.next())&&!s.done;){const a=s.value;t.call(e,a[0],a[1])}},Y0=(e,t)=>{let r;const i=[];for(;(r=e.exec(t))!==null;)i.push(r);return i},X0=xt("HTMLFormElement"),Q0=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:Z0}=Object.prototype,J0=xt("RegExp"),Km=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),i={};ss(r,(s,a)=>{let o;(o=t(s,a,e))!==!1&&(i[a]=o||s)}),Object.defineProperties(e,i)},ew=e=>{Km(e,(t,r)=>{if(tt(e)&&["arguments","caller","callee"].includes(r))return!1;const i=e[r];if(tt(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},tw=(e,t)=>{const r={},i=s=>{s.forEach(a=>{r[a]=!0})};return Yn(e)?i(e):i(String(e).split(t)),r},nw=()=>{},rw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function iw(e){return!!(e&&tt(e.append)&&e[Um]==="FormData"&&e[is])}const sw=e=>{const t=new WeakSet,r=i=>{if(Yr(i)){if(t.has(i))return;if(Kr(i))return i;if(!("toJSON"in i)){t.add(i);let s;if(T0(i)){s=[];for(const a of i){const o=r(a);!Xn(o)&&s.push(o)}}else s=Yn(i)?[]:{},ss(i,(a,o)=>{const l=r(a);!Xn(l)&&(s[o]=l)});return t.delete(i),s}}return i};return r(e)},aw=xt("AsyncFunction"),ow=e=>e&&(Yr(e)||tt(e))&&tt(e.then)&&tt(e.catch),Ym=((e,t)=>e?setImmediate:t?((r,i)=>(Fn.addEventListener("message",({source:s,data:a})=>{s===Fn&&a===r&&i.length&&i.shift()()},!1),s=>{i.push(s),Fn.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",tt(Fn.postMessage)),lw=typeof queueMicrotask<"u"?queueMicrotask.bind(Fn):typeof process<"u"&&process.nextTick||Ym,Xm=e=>e!=null&&tt(e[is]),cw=e=>e!=null&&qi(e,is)&&Xm(e),S={isArray:Yn,isArrayBuffer:_m,isBuffer:Kr,isFormData:M0,isArrayBufferView:b0,isString:j0,isNumber:Gm,isBoolean:A0,isObject:Yr,isPlainObject:_s,isEmptyObject:k0,isReadableStream:I0,isRequest:B0,isResponse:D0,isHeaders:F0,isUndefined:Xn,isDate:N0,isFile:S0,isReactNativeBlob:C0,isReactNative:E0,isBlob:R0,isRegExp:J0,isFunction:tt,isStream:O0,isURLSearchParams:z0,isTypedArray:q0,isFileList:P0,forEach:ss,merge:Wl,extend:U0,trim:W0,stripBOM:H0,inherits:$0,toFlatObject:_0,kindOf:Jc,kindOfTest:xt,endsWith:G0,toArray:V0,forEachEntry:K0,matchAll:Y0,isHTMLForm:X0,hasOwnProperty:Vi,hasOwnProp:Vi,hasOwnInPrototypeChain:qi,getSafeProp:y0,toSafeFlatObject:v0,reduceDescriptors:Km,freezeMethods:ew,toObjectSet:tw,toCamelCase:Q0,noop:nw,toFiniteNumber:rw,findKey:Vm,global:Fn,isContextDefined:qm,isSpecCompliantForm:iw,toJSONObject:sw,isAsyncFn:aw,isThenable:ow,setImmediate:Ym,asap:lw,isIterable:Xm,isSafeIterable:cw},dw=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hw=e=>{const t={};let r,i,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),r=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim();const l=S.hasOwnProp(t,r);!r||l&&S.hasOwnProp(dw,r)||(r==="set-cookie"?l?t[r].push(i):t[r]=[i]:t[r]=l?t[r]+", "+i:i)}),t};function uw(e){let t=0,r=e.length;for(;t<r;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;r>t;){const i=e.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}const pw=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),mw=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function ed(e,t){return S.isArray(e)?e.map(r=>ed(r,t)):uw(String(e).replace(t,""))}const fw=e=>ed(e,pw),gw=e=>ed(e,mw);function Qm(e){const t=Object.create(null);return S.forEach(e.toJSON(),(r,i)=>{t[i]=gw(r)}),t}const Th=Symbol("internals");function si(e){return e&&String(e).trim().toLowerCase()}function Gs(e){return e===!1||e==null?e:S.isArray(e)?e.map(Gs):fw(String(e))}function xw(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(e);)t[i[1]]=i[2];return t}const ww=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function jo(e){let t=0,r=e.length;for(;t<r;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;r>t;){const i=e.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}function yw(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let r="";for(let i=1;i<t;i++){const s=e.charCodeAt(i);if(s===34||s===92&&(i+=1,i>=t))return e;r+=e[i]}return r}function vw(e){const t=Object.create(null),r=String(e);let i=0,s=!1,a=!1;function o(l){const c=jo(r.slice(i,l)),d=c.indexOf("=");if(d<1)return;const h=jo(c.slice(0,d));if(!ww.test(h))return;const u=h.toLowerCase();if(u==="__proto__"||u==="constructor"||u==="prototype")return;const p=jo(c.slice(d+1));t[u]=yw(p)}for(let l=0;l<r.length;l++){const c=r.charCodeAt(l);s?a?a=!1:c===92?a=!0:c===34&&(s=!1):c===34?s=!0:(c===44||c===59)&&(o(l),i=l+1)}return o(r.length),t}const bw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ao(e,t,r,i,s){if(S.isFunction(i))return i.call(this,t,r);if(s&&(t=r),!!S.isString(t)){if(S.isString(i))return t.indexOf(i)!==-1;if(S.isRegExp(i))return i.test(t)}}function jw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,i)=>r.toUpperCase()+i)}function Aw(e,t){const r=S.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+r,{__proto__:null,value:function(s,a,o){return this[i].call(this,t,s,a,o)},configurable:!0})})}let He=class{constructor(t){t&&this.set(t)}set(t,r,i){const s=this;function a(l,c,d){const h=si(c);if(!h)return;const u=S.findKey(s,h);(!u||s[u]===void 0||d===!0||d===void 0&&s[u]!==!1)&&(s[u||c]=Gs(l))}const o=(l,c)=>S.forEach(l,(d,h)=>a(d,h,c));if(S.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(S.isString(t)&&(t=t.trim())&&!bw(t))o(hw(t),r);else if(S.isObject(t)&&S.isSafeIterable(t)){let l=Object.create(null),c,d;for(const h of t){if(!S.isArray(h))throw new TypeError("Object iterator must return a key-value pair");d=h[0],S.hasOwnProp(l,d)?(c=l[d],l[d]=S.isArray(c)?[...c,h[1]]:[c,h[1]]):l[d]=h[1]}o(l,r)}else t!=null&&a(r,t,i);return this}get(t,r){if(t=si(t),t){const i=S.findKey(this,t);if(i){const s=this[i];if(!r)return s;if(r===!0)return xw(s);if(S.isFunction(r))return r.call(this,s,i);if(S.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=si(t),t){const i=S.findKey(this,t);return!!(i&&this[i]!==void 0&&(!r||Ao(this,this[i],i,r)))}return!1}delete(t,r){const i=this;let s=!1;function a(o){if(o=si(o),o){const l=S.findKey(i,o);l&&(!r||Ao(i,i[l],l,r))&&(delete i[l],s=!0)}}return S.isArray(t)?t.forEach(a):a(t),s}clear(t){const r=Object.keys(this);let i=r.length,s=!1;for(;i--;){const a=r[i];(!t||Ao(this,this[a],a,t,!0))&&(delete this[a],s=!0)}return s}normalize(t){const r=this,i={};return S.forEach(this,(s,a)=>{const o=S.findKey(i,a);if(o){r[o]=Gs(s),delete r[a];return}const l=t?jw(a):String(a).trim();l!==a&&delete r[a],r[l]=Gs(s),i[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return S.forEach(this,(i,s)=>{i!=null&&i!==!1&&(r[s]=t&&S.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return S.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return vw(t)}static concat(t,...r){const i=new this(t);return r.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[Th]=this[Th]={accessors:{}}).accessors,s=this.prototype;function a(o){const l=si(o);i[l]||(Aw(s,o),i[l]=!0)}return S.isArray(t)?t.forEach(a):a(t),this}};He.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(He.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[r]=i}}});S.freezeMethods(He);const ja="[REDACTED ****]";function kw(e){if(S.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(S.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Nw(e,t){const r=new Set(t.map(a=>String(a).toLowerCase())),i=[],s=a=>{if(a===null||typeof a!="object"||S.isBuffer(a))return a;if(i.indexOf(a)!==-1)return;a instanceof He&&(a=a.toJSON()),i.push(a);let o;if(S.isArray(a))o=[],a.forEach((l,c)=>{const d=s(l);S.isUndefined(d)||(o[c]=d)});else{if(!S.isPlainObject(a)&&kw(a))return i.pop(),a;o=Object.create(null);for(const[l,c]of Object.entries(a)){const d=r.has(l.toLowerCase())?ja:s(c);S.isUndefined(d)||(o[l]=d)}}return i.pop(),o};return s(e)}function Oh(e){try{return String(e)}catch{return""}}function Sw(e){return e.errors.map(r=>{try{return r&&r.message?Oh(r.message):Oh(r)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let U=class Zm extends Error{static from(t,r,i,s,a,o){let l=t.message;!l&&S.isArray(t.errors)&&t.errors.length&&(l=Sw(t));const c=new Zm(l,r||t.code,i,s,a);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(t,r,i,s,a){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),i&&(this.config=i),s&&(this.request=s),a&&(this.response=a,this.status=a.status)}toJSON(){const t=this.config,r=t&&S.hasOwnProp(t,"redact")?t.redact:void 0,i=S.isArray(r)&&r.length>0?Nw(t,r):S.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};U.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";U.ERR_BAD_OPTION="ERR_BAD_OPTION";U.ECONNABORTED="ECONNABORTED";U.ETIMEDOUT="ETIMEDOUT";U.ECONNREFUSED="ECONNREFUSED";U.ERR_NETWORK="ERR_NETWORK";U.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";U.ERR_DEPRECATED="ERR_DEPRECATED";U.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";U.ERR_BAD_REQUEST="ERR_BAD_REQUEST";U.ERR_CANCELED="ERR_CANCELED";U.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";U.ERR_INVALID_URL="ERR_INVALID_URL";U.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Cw=null,Jm=100;function Ul(e){return S.isPlainObject(e)||S.isArray(e)}function ef(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function ko(e,t,r){return e?e.concat(t).map(function(s,a){return s=ef(s),!r&&a?"["+s+"]":s}).join(r?".":""):t}function Ew(e){return S.isArray(e)&&!e.some(Ul)}const Rw=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function _a(e,t,r){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(f,y)=>{const w=S.getSafeProp(r,f);return S.isUndefined(w)?y:w},s=i("metaTokens",!0),a=i("visitor")||A,o=i("dots",!1),l=i("indexes",!1),c=i("Blob")||typeof Blob<"u"&&Blob,d=i("maxDepth",Jm),h=c&&S.isSpecCompliantForm(t),u=[];if(!S.isFunction(a))throw new TypeError("visitor must be a function");function p(f){if(f===null)return"";if(S.isDate(f))return f.toISOString();if(S.isBoolean(f))return f.toString();if(!h&&S.isBlob(f))throw new U("Blob is not supported. Use a Buffer instead.");if(S.isArrayBuffer(f)||S.isTypedArray(f)){if(h&&typeof c=="function")return new c([f]);throw new U("Blob is not supported. Use a Buffer instead.",U.ERR_NOT_SUPPORT)}return f}function x(f){if(f>d)throw new U("Object is too deeply nested ("+f+" levels). Max depth: "+d,U.ERR_FORM_DATA_DEPTH_EXCEEDED)}function v(f,y){if(d===1/0)return JSON.stringify(f);const w=[];return JSON.stringify(f,function(O,g){if(!S.isObject(g))return g;for(;w.length&&w[w.length-1]!==this;)w.pop();return w.push(g),x(y+w.length-1),g})}function A(f,y,w){let k=f;if(S.isReactNative(t)&&S.isReactNativeBlob(f))return t.append(ko(w,y,o),p(f)),!1;if(f&&!w&&typeof f=="object"){if(S.endsWith(y,"{}"))y=s?y:y.slice(0,-2),f=v(f,1);else if(S.isArray(f)&&Ew(f)||(S.isFileList(f)||S.endsWith(y,"[]"))&&(k=S.toArray(f)))return y=ef(y),k.forEach(function(g,C){!(S.isUndefined(g)||g===null)&&t.append(l===!0?ko([y],C,o):l===null?y:y+"[]",p(g))}),!1}return Ul(f)?!0:(t.append(ko(w,y,o),p(f)),!1)}const E=Object.assign(Rw,{defaultVisitor:A,convertValue:p,isVisitable:Ul});function m(f,y,w=0){if(!S.isUndefined(f)){if(x(w),u.indexOf(f)!==-1)throw new Error("Circular reference detected in "+y.join("."));u.push(f),S.forEach(f,function(O,g){(!(S.isUndefined(O)||O===null)&&a.call(t,O,S.isString(g)?g.trim():g,y,E))===!0&&m(O,y?y.concat(g):[g],w+1)}),u.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Lh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(i){return t[i]})}function td(e,t){this._pairs=[],e&&_a(e,this,t)}const tf=td.prototype;tf.append=function(t,r){this._pairs.push([t,r])};tf.toString=function(t){const r=t?i=>t.call(this,i,Lh):Lh;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Pw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function nf(e,t,r){if(!t)return e;e=e||"";const i=S.isFunction(r)?{serialize:r}:r,s=S.getSafeProp(i,"encode")||Pw,a=S.getSafeProp(i,"serialize");let o;if(a?o=a(t,i):o=S.isURLSearchParams(t)?t.toString():new td(t,i).toString(s),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}const ai=Symbol("internals");function rf(e){return e?e.length:0}function Mh(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function oi(e,t){const r=e.handlers,i=rf(r);r!==t.handlersRef?(t.handlersRef=r,t.handlerEntries.clear()):i!==t.handlersLength&&(i?t.handlerEntries.forEach(function(a,o){r[a.index]!==a.handler&&t.handlerEntries.delete(o)}):t.handlerEntries.clear()),t.handlersLength=i}class zh{constructor(){this.handlers=[],this[ai]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(t,r,i){const s={fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},a=this[ai];this.handlers==null&&(this.handlers=[]),oi(this,a);const o=a.nextId++;return this.handlers.push(s),a.handlerEntries.set(o,{handler:s,index:this.handlers.length-1}),a.handlersLength=this.handlers.length,o}eject(t){const r=this[ai];oi(this,r);const i=r.handlerEntries.get(t);if(i){if(r.handlerEntries.delete(t),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,r.iterationDepth||(Mh(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],oi(this,this[ai]))}forEach(t){const r=this[ai];oi(this,r),r.iterationDepth++;try{S.forEach(this.handlers,function(s){s!==null&&t(s)})}finally{--r.iterationDepth||(oi(this,r),Mh(this.handlers),r.handlersLength=rf(this.handlers))}}}const nd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Tw=typeof URLSearchParams<"u"?URLSearchParams:td,Ow=typeof FormData<"u"?FormData:null,Lw=typeof Blob<"u"?Blob:null,Mw={isBrowser:!0,classes:{URLSearchParams:Tw,FormData:Ow,Blob:Lw},protocols:["http","https","file","blob","url","data"]},rd=typeof window<"u"&&typeof document<"u",Hl=typeof navigator=="object"&&navigator||void 0,zw=rd&&(!Hl||["ReactNative","NativeScript","NS"].indexOf(Hl.product)<0),Iw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Bw=rd&&window.location.href||"http://localhost",Dw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rd,hasStandardBrowserEnv:zw,hasStandardBrowserWebWorkerEnv:Iw,navigator:Hl,origin:Bw},Symbol.toStringTag,{value:"Module"})),Re={...Dw,...Mw};function Fw(e,t){return _a(e,new Re.classes.URLSearchParams,{visitor:function(r,i,s,a){return Re.isNode&&S.isBuffer(r)?(this.append(i,r.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}const Ih=Jm;function sf(e){if(e>Ih)throw new U("FormData field is too deeply nested ("+e+" levels). Max depth: "+Ih,U.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Ww(e){const t=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=r.exec(e))!==null;)sf(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function Uw(e){const t={},r=Object.keys(e);let i;const s=r.length;let a;for(i=0;i<s;i++)a=r[i],t[a]=e[a];return t}function af(e){function t(r,i,s,a){sf(a);let o=r[a++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=a>=r.length;return o=!o&&S.isArray(s)?s.length:o,c?(S.hasOwnProp(s,o)?s[o]=S.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!l):((!S.hasOwnProp(s,o)||!S.isObject(s[o]))&&(s[o]=[]),t(r,i,s[o],a)&&S.isArray(s[o])&&(s[o]=Uw(s[o])),!l)}if(S.isFormData(e)&&S.isFunction(e.entries)){const r={};return S.forEachEntry(e,(i,s)=>{t(Ww(i),s,r,0)}),r}return null}const of=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),lr=(e,t)=>e!=null&&S.hasOwnProp(e,t)?e[t]:void 0;function Hw(e,t,r){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}const as={transitional:nd,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const i=r.getContentType()||"",s=i.indexOf("application/json")>-1,a=S.isObject(t);if(a&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return s?JSON.stringify(af(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t)||S.isReadableStream(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){const c=lr(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Fw(t,c).toString();if((l=S.isFileList(t))||i.indexOf("multipart/form-data")>-1){const d=lr(this,"env"),h=d&&d.FormData;return _a(l?{"files[]":t}:t,h&&new h,c)}}return a||s?(r.setContentType("application/json",!1),Hw(t)):t}],transformResponse:[function(t){const r=lr(this,"transitional")||as.transitional,i=r&&r.forcedJSONParsing,s=lr(this,"responseType"),a=s==="json";if(S.isResponse(t)||S.isReadableStream(t))return t;if(t&&S.isString(t)&&(i&&!s||a)){const l=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,lr(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?U.from(c,U.ERR_BAD_RESPONSE,this,null,lr(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Re.classes.FormData,Blob:Re.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(of,e=>{as.headers[e]={}});function No(e,t){const r=this||as,i=t||r,s=He.from(i.headers);let a=i.data;return S.forEach(e,function(l){a=l.call(r,a,s.normalize(),t?t.status:void 0)}),s.normalize(),a}function lf(e){return!!(e&&e.__CANCEL__)}let os=class extends U{constructor(t,r,i){super(t??"canceled",U.ERR_CANCELED,r,i),this.name="CanceledError",this.__CANCEL__=!0}};function cf(e,t,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new U("Request failed with status code "+r.status,r.status>=400&&r.status<500?U.ERR_BAD_REQUEST:U.ERR_BAD_RESPONSE,r.config,r.request,r))}const $w=/[\t\n\r]/g;function df(e){if(typeof e!="string")return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace($w,"")}function So(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function _w(e,t){e=e||10;const r=new Array(e),i=new Array(e);let s=0,a=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),h=i[a];o||(o=d),r[s]=c,i[s]=d;let u=a,p=0;for(;u!==s;)p+=r[u++],u=u%e;if(s=(s+1)%e,s===a&&(a=(a+1)%e),d-o<t)return;const x=h&&d-h;return x?Math.round(p*1e3/x):void 0}}function Gw(e,t){let r=0,i=1e3/t,s,a;const o=(h,u=Date.now())=>{r=u,s=null,a&&(clearTimeout(a),a=null),e(...h)};return[(...h)=>{const u=Date.now(),p=u-r;p>=i?o(h,u):(s=h,a||(a=setTimeout(()=>{a=null,o(s)},i-p)))},()=>s&&o(s),(...h)=>o(h)]}const Aa=(e,t,r=3)=>{let i=0;const s=_w(50,250);return Gw(a=>{if(!a||!S.isNumber(a.loaded))return;const o=a.loaded,l=a.lengthComputable?a.total:void 0,c=Math.max(0,l!=null?Math.min(o,l):o),d=Math.max(0,c-i),h=s(d);i=Math.max(i,c);const u={loaded:c,total:l,progress:l?c/l:void 0,bytes:d,rate:h||void 0,estimated:h&&l?(l-c)/h:void 0,event:a,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(u)},r)},Bh=(e,t)=>{const r=e!=null;return[i=>t[0]({lengthComputable:r,total:e,loaded:i}),t[1]]},Dh=(e,t=S.asap)=>(...r)=>t(()=>e(...r)),Vw=Re.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Re.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Re.origin),Re.navigator&&/(msie|trident)/i.test(Re.navigator.userAgent)):()=>!0,qw=Re.hasStandardBrowserEnv?{write(e,t,r,i,s,a,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];S.isNumber(r)&&l.push(`expires=${new Date(r).toUTCString()}`),S.isString(i)&&l.push(`path=${i}`),S.isString(s)&&l.push(`domain=${s}`),a===!0&&l.push("secure"),S.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const i=t[r].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===e)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Kw(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Yw(e,t){if(!t)return e;let r=e.length;for(;r>0&&e.charCodeAt(r-1)===47;)r--;return e.slice(0,r)+"/"+t.replace(/^\/+/,"")}const Xw=/^https?:(?!\/\/)/i;function Qw(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,r,i="")=>`${r}${i}${ja}`)}function Zw(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${ja}@`),r=t.indexOf("#"),s=(r===-1?t:t.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${ja}`);return r===-1?s:`${s}#${Qw(t.slice(r+1))}`}function Fh(e,t){if(typeof e=="string"){const r=df(e);if(Xw.test(r))throw new U(`Invalid URL ${JSON.stringify(Zw(r))}: missing "//" after protocol`,U.ERR_INVALID_URL,t)}}function hf(e,t,r,i){Fh(t,i);let s=!Kw(t);return e&&(s||r===!1)?(Fh(e,i),Yw(e,t)):t}const Wh=e=>e instanceof He?{...e}:e,Jw=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function Qn(e,t){e=e||{},t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(h,u,p,x){return S.isPlainObject(h)&&S.isPlainObject(u)?S.merge.call({caseless:x},h,u):S.isPlainObject(u)?S.merge({},u):S.isArray(u)?u.slice():u}function s(h,u,p,x){if(S.isUndefined(u)){if(!S.isUndefined(h))return i(void 0,h,p,x)}else return i(h,u,p,x)}function a(h,u){if(!S.isUndefined(u))return i(void 0,u)}function o(h,u){if(S.isUndefined(u)){if(!S.isUndefined(h))return i(void 0,h)}else return i(void 0,u)}function l(h){const u=S.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!S.isUndefined(u))if(S.isPlainObject(u)){if(S.hasOwnProp(u,h))return u[h]}else return;const p=S.hasOwnProp(e,"transitional")?e.transitional:void 0;if(S.isPlainObject(p)&&S.hasOwnProp(p,h))return p[h]}function c(h,u,p){if(S.hasOwnProp(t,p))return i(h,u);if(S.hasOwnProp(e,p))return i(void 0,h)}const d={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutErrorMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(h,u,p)=>s(Wh(h),Wh(u),p,!0)};return S.forEach(Jw({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const p=S.hasOwnProp(d,u)?d[u]:s,x=S.hasOwnProp(e,u)?e[u]:void 0,v=S.hasOwnProp(t,u)?t[u]:void 0,A=p(x,v,u);S.isUndefined(A)&&p!==c||(r[u]=A)}),S.hasOwnProp(t,"validateStatus")&&S.isUndefined(t.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(S.hasOwnProp(e,"validateStatus")?r.validateStatus=i(void 0,e.validateStatus):delete r.validateStatus),r}const ey=["content-type","content-length"];function ty(e,t,r){if(r!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([i,s])=>{ey.includes(i.toLowerCase())&&e.set(i,s)})}const ny=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16)));function uf(e){const t=Qn({},e),r=p=>S.hasOwnProp(t,p)?t[p]:void 0,i=r("data");let s=r("withXSRFToken");const a=r("xsrfHeaderName"),o=r("xsrfCookieName");let l=r("headers");const c=r("auth"),d=r("baseURL"),h=r("allowAbsoluteUrls"),u=r("url");if(t.headers=l=He.from(l),t.url=nf(hf(d,u,h,t),r("params"),r("paramsSerializer")),c){const p=S.getSafeProp(c,"username")||"",x=S.getSafeProp(c,"password")||"";try{l.set("Authorization","Basic "+btoa(p+":"+(x?ny(x):"")))}catch(v){throw U.from(v,U.ERR_BAD_OPTION_VALUE,e)}}if(S.isFormData(i)){const p=S.getSafeProp(i,"getHeaders");Re.hasStandardBrowserEnv||Re.hasStandardBrowserWebWorkerEnv||S.isReactNative(i)?l.setContentType(void 0):S.isFunction(p)&&ty(l,p.call(i),r("formDataHeaderPolicy"))}if(Re.hasStandardBrowserEnv&&(S.isFunction(s)&&(s=s(t)),s===!0||s==null&&Vw(t.url))){const x=a&&o&&qw.read(o);x&&l.set(a,x)}return t}const ry=typeof XMLHttpRequest<"u",iy=ry&&function(e){return new Promise(function(r,i){const s=uf(e);let a=s.data;const o=He.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=s,h,u,p,x,v,A;function E(){x&&x(),v&&v(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function f(w){if(!m)return;if(m.status===0&&(So(df(s.url))||So(Re.origin))!=="file"&&!(m.responseURL&&m.responseURL.startsWith("file:"))){i(new U("Request aborted",U.ECONNABORTED,e,m)),E(),m=null;return}try{w?A&&A(w):v&&v()}catch(C){setTimeout(()=>{throw C})}if(!m)return;const k=He.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),g={data:!l||l==="text"||l==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:k,config:e,request:m};cf(function(P){r(P),E()},function(P){i(P),E()},g),m=null}"onloadend"in m?m.onloadend=f:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(f)},m.onabort=function(){m&&(i(new U("Request aborted",U.ECONNABORTED,e,m)),E(),m=null)},m.onerror=function(k){const O=k&&k.message?k.message:"Network Error",g=new U(O,U.ERR_NETWORK,e,m);g.event=k||null,i(g),E(),m=null},m.ontimeout=function(){let k=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||nd;s.timeoutErrorMessage&&(k=s.timeoutErrorMessage),i(new U(k,O.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,m)),E(),m=null},a===void 0&&o.setContentType(null),"setRequestHeader"in m&&S.forEach(Qm(o),function(k,O){m.setRequestHeader(O,k)}),S.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),l&&l!=="json"&&(m.responseType=s.responseType),d&&([p,v,A]=Aa(d,!0),m.addEventListener("progress",p)),c&&m.upload&&([u,x]=Aa(c),m.upload.addEventListener("progress",u),m.upload.addEventListener("loadend",x)),(s.cancelToken||s.signal)&&(h=w=>{m&&(i(!w||w.type?new os(null,e,m):w),m.abort(),E(),m=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const y=So(s.url);if(y&&!Re.protocols.includes(y)){i(new U("Unsupported protocol "+y+":",U.ERR_BAD_REQUEST,e)),E();return}m.send(a||null)})},sy=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const r=new AbortController;let i=!1;const s=function(c){if(!i){i=!0,o();const d=c instanceof Error?c:this.reason;r.abort(d instanceof U?d:new os(d instanceof Error?d.message:d))}};let a=t&&setTimeout(()=>{a=null,s(new U(`timeout of ${t}ms exceeded`,U.ETIMEDOUT))},t);const o=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>{if(!i){if(c.aborted){s.call(c);return}c.addEventListener("abort",s,{once:!0})}});const{signal:l}=r;return l.unsubscribe=()=>S.asap(o),l},ay=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let i=0,s;for(;i<r;)s=i+t,yield e.slice(i,s),i=s},oy=async function*(e,t){for await(const r of ly(e))yield*ay(r,t)},ly=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:i}=await t.read();if(r)break;yield i}}finally{await t.cancel()}},Uh=(e,t,r,i)=>{const s=oy(e,t);let a=0,o,l=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:d,value:h}=await s.next();if(d){l(),c.close();return}let u=h.byteLength;if(r){let p=a+=u;r(p)}c.enqueue(new Uint8Array(h))}catch(d){throw l(d),d}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},Hh=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,pf=(e,t,r)=>t+2<r&&Hh(e.charCodeAt(t+1))&&Hh(e.charCodeAt(t+2)),$h=e=>e<=57?e-48:(e&223)-55,cy=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,dy=e=>e===9||e===10||e===12||e===13||e===32,hy=e=>{const t=Math.floor(e/4),r=e%4;return t*3+(r===2?1:r===3?2:0)},uy=e=>{const t=e.length;let r=0;return t>0&&e.charCodeAt(t-1)===61&&(r++,t>1&&e.charCodeAt(t-2)===61&&r++),Math.floor((t-r)*3/4)},py=e=>{const t=e.length;let r=0,i=0,s=!1;for(let a=0;a<t;a++){let o=e.charCodeAt(a);if(o===37&&pf(e,a,t)&&(o=$h(e.charCodeAt(a+1))*16+$h(e.charCodeAt(a+2)),a+=2),!dy(o)){if(o===61){i++;continue}if(!cy(o)||i>0){s=!0;continue}r++}}return s||i>2||i>0&&(r+i)%4!==0||r%4===1?uy(e):hy(r)},my=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const r=e.indexOf(",");if(r<0)return 0;const i=e.slice(5,r),s=e.slice(r+1);if(/;base64/i.test(i))return t(s);let o=0;for(let l=0,c=s.length;l<c;l++){const d=s.charCodeAt(l);if(d===37&&pf(s,l,c))o+=1,l+=2;else if(d<128)o+=1;else if(d<2048)o+=2;else if(d>=55296&&d<=56319&&l+1<c){const h=s.charCodeAt(l+1);h>=56320&&h<=57343?(o+=4,l++):o+=3}else o+=3}return o};function fy(e){const t=typeof e=="string"?e.indexOf("#"):-1;return my(t===-1?e:e.slice(0,t),py)}const id="1.20.0",_h=64*1024,gy={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Ss}=S,xy=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16))),Gh=e=>{if(!S.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Vh=(e,...t)=>{try{return!!e(...t)}catch{return!1}},wy=e=>{const t=e.indexOf("://");let r=e;return t!==-1&&(r=r.slice(t+3)),r.includes("@")||r.includes(":")},yy=e=>{const t=S.global!==void 0&&S.global!==null?S.global:globalThis,{ReadableStream:r,TextEncoder:i}=t;e=S.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:s,Request:a,Response:o}=e,l=s?Ss(s):typeof fetch=="function",c=Ss(a),d=Ss(o);if(!l)return!1;const h=l&&Ss(r),u=l&&(typeof i=="function"?(m=>f=>m.encode(f))(new i):async m=>new Uint8Array(await new a(m).arrayBuffer())),p=c&&h&&Vh(()=>{let m=!1;const f=new a(Re.origin,{body:new r,method:"POST",get duplex(){return m=!0,"half"}}),y=f.headers.has("Content-Type");return f.body!=null&&f.body.cancel(),m&&!y}),x=d&&h&&Vh(()=>S.isReadableStream(new o("").body)),v={stream:x&&(m=>m.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!v[m]&&(v[m]=(f,y)=>{let w=f&&f[m];if(w)return w.call(f);throw new U(`Response type '${m}' is not supported`,U.ERR_NOT_SUPPORT,y)})});const A=async m=>{if(m==null)return 0;if(S.isBlob(m))return m.size;if(S.isSpecCompliantForm(m))return(await new a(Re.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(S.isArrayBufferView(m)||S.isArrayBuffer(m))return m.byteLength;if(S.isURLSearchParams(m)&&(m=m+""),S.isString(m))return(await u(m)).byteLength},E=async(m,f)=>{const y=S.toFiniteNumber(m.getContentLength());return y??A(f)};return async m=>{let{url:f,method:y,data:w,signal:k,cancelToken:O,timeout:g,onDownloadProgress:C,onUploadProgress:P,responseType:R,headers:L,withCredentials:W="same-origin",fetchOptions:z,maxContentLength:Y,maxBodyLength:ee,maxRedirects:N}=uf(m);const _=S.isNumber(Y)&&Y>-1,I=S.isNumber(ee)&&ee>-1,K=Q=>S.hasOwnProp(m,Q)?m[Q]:void 0;let T=s||fetch;R=R?(R+"").toLowerCase():"text";let D=sy([k,O&&O.toAbortSignal()],g),V=null;const b=D&&D.unsubscribe&&(()=>{D.unsubscribe()});let F,te=null;const Te=()=>new U("Request body larger than maxBodyLength limit",U.ERR_BAD_REQUEST,m,V);try{let Q;const Be=K("auth");if(Be){const H=S.getSafeProp(Be,"username")||"",je=S.getSafeProp(Be,"password")||"";Q={username:H,password:je}}if(wy(f)){const H=new URL(f,Re.origin);if(!Q&&(H.username||H.password)){const je=Gh(H.username),Jt=Gh(H.password);Q={username:je,password:Jt}}(H.username||H.password)&&(H.username="",H.password="",f=H.href)}if(Q&&(L.delete("authorization"),L.set("Authorization","Basic "+btoa(xy((Q.username||"")+":"+(Q.password||""))))),_&&typeof f=="string"&&f.startsWith("data:")&&fy(f)>Y)throw new U("maxContentLength size of "+Y+" exceeded",U.ERR_BAD_RESPONSE,m,V);if(I&&y!=="get"&&y!=="head"){const H=await A(w);if(typeof H=="number"&&isFinite(H)&&(F=H,H>ee))throw Te()}const St=I&&(S.isReadableStream(w)||S.isStream(w)),ne=(H,je,Jt)=>Uh(H,_h,Rn=>{if(I&&Rn>ee)throw te=Te();je&&je(Rn)},Jt);if(p&&y!=="get"&&y!=="head"&&(P||St)){if(F=F??await E(L,w),F!==0||St){let H=new a(f,{method:"POST",body:w,duplex:"half"}),je;if(S.isFormData(w)&&(je=H.headers.get("content-type"))&&L.setContentType(je),H.body){const[Jt,Rn]=P&&Bh(F,Aa(Dh(P)))||[];w=ne(H.body,Jt,Rn)}}}else if(St&&!c&&h&&y!=="get"&&y!=="head")w=ne(w);else if(St&&c&&!p&&y!=="get"&&y!=="head")throw new U("Stream request bodies are not supported by the current fetch implementation",U.ERR_NOT_SUPPORT,m,V);S.isString(W)||(W=W?"include":"omit");const he=c&&"credentials"in a.prototype;if(S.isFormData(w)){const H=L.getContentType();H&&/^multipart\/form-data/i.test(H)&&!/boundary=/i.test(H)&&L.delete("content-type")}L.set("User-Agent","axios/"+id,!1);const we=z==null?z:Object.assign(Object.create(null),z);we&&(delete we.body,delete we.headers,delete we.method,delete we.signal,delete we.duplex,delete we.credentials);const Oe=Object.assign(Object.create(null),we,{signal:D,method:y.toUpperCase(),headers:Qm(L.normalize()),body:w,duplex:"half",credentials:he?W:void 0});c&&(S.forEach(gy,(H,je)=>{Oe[je]===void 0&&(Oe[je]=H)}),Oe.signal===void 0&&(Oe.signal=null),Oe.body===void 0&&(Oe.body=null)),N===0&&(Oe.redirect="manual",we&&(we.redirect="manual")),V=c&&new a(f,Oe);let Ke=await(c?T(V,we):T(f,Oe));const En=He.from(Ke.headers);if(_){const H=S.toFiniteNumber(En.getContentLength());if(H!=null&&H>Y)throw new U("maxContentLength size of "+Y+" exceeded",U.ERR_BAD_RESPONSE,m,V)}const Zt=x&&(R==="stream"||R==="response");if(x&&Ke.body&&(C||_||Zt&&b)){const H={};["status","statusText","headers"].forEach(Xr=>{H[Xr]=Ke[Xr]});const je=S.toFiniteNumber(En.getContentLength()),[Jt,Rn]=C&&Bh(je,Aa(Dh(C),!0))||[];let dd=0;const Wf=Xr=>{if(_&&(dd=Xr,dd>Y))throw new U("maxContentLength size of "+Y+" exceeded",U.ERR_BAD_RESPONSE,m,V);Jt&&Jt(Xr)};Ke=new o(Uh(Ke.body,_h,Wf,()=>{Rn&&Rn(),b&&b()}),H)}R=R||"text";let Ye=await v[S.findKey(v,R)||"text"](Ke,m);if(_&&!x&&!Zt){let H;if(Ye!=null&&(typeof Ye.byteLength=="number"?H=Ye.byteLength:typeof Ye.size=="number"?H=Ye.size:typeof Ye=="string"&&(H=typeof i=="function"?new i().encode(Ye).byteLength:Ye.length)),typeof H=="number"&&H>Y)throw new U("maxContentLength size of "+Y+" exceeded",U.ERR_BAD_RESPONSE,m,V)}return!Zt&&b&&b(),await new Promise((H,je)=>{cf(H,je,{data:Ye,headers:He.from(Ke.headers),status:Ke.status,statusText:Ke.statusText,config:m,request:V})})}catch(Q){if(b&&b(),D&&D.aborted&&D.reason instanceof U){const Be=D.reason;throw Be.config=m,V&&(Be.request=V),Q!==Be&&Object.defineProperty(Be,"cause",{__proto__:null,value:Q,writable:!0,enumerable:!1,configurable:!0}),Be}if(te)throw V&&!te.request&&(te.request=V),te;if(Q instanceof U)throw V&&!Q.request&&(Q.request=V),Q;if(Q&&Q.name==="TypeError"&&/Load failed|fetch/i.test(Q.message)){const Be=new U("Network Error",U.ERR_NETWORK,m,V,Q&&Q.response);throw Object.defineProperty(Be,"cause",{__proto__:null,value:Q.cause||Q,writable:!0,enumerable:!1,configurable:!0}),Be}throw U.from(Q,Q&&Q.code,m,V,Q&&Q.response)}}},vy=new Map,mf=e=>{let t=e&&e.env||{};const{fetch:r,Request:i,Response:s}=t,a=[i,s,r];let o=a.length,l=o,c,d,h=vy;for(;l--;)c=a[l],d=h.get(c),d===void 0&&h.set(c,d=l?new Map:yy(t)),h=d;return d};mf();const sd={http:Cw,xhr:iy,fetch:{get:mf}};S.forEach(sd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const qh=e=>`- ${e}`,by=e=>S.isFunction(e)||e===null||e===!1;function jy(e,t){e=S.isArray(e)?e:[e];const{length:r}=e;let i,s;const a={};for(let o=0;o<r;o++){i=e[o];let l;if(s=i,!by(i)&&(s=sd[(l=String(i)).toLowerCase()],s===void 0))throw new U(`Unknown adapter '${l}'`);if(s&&(S.isFunction(s)||(s=s.get(t))))break;a[l||"#"+o]=s}if(!s){const o=Object.entries(a).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(qh).join(`
`):" "+qh(o[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+l,U.ERR_NOT_SUPPORT)}return s}const ff={getAdapter:jy,adapters:sd};function Co(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new os(null,e)}function Eo(e){const t=S.toSafeFlatObject(e);return Co(t),t.headers=He.from(S.getSafeProp(t,"headers")),t.data=No.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ff.getAdapter(t.adapter||as.adapter,t)(t).then(function(s){Co(t),t.response=s;try{s.data=No.call(t,t.transformResponse,s)}finally{delete t.response}return s.headers=He.from(s.headers),s},function(s){if(!lf(s)&&(Co(t),s&&s.response)){t.response=s.response;try{s.response.data=No.call(t,t.transformResponse,s.response)}finally{delete t.response}s.response.headers=He.from(s.response.headers)}return Promise.reject(s)})}const Ga={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ga[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const Kh={};Ga.transitional=function(t,r,i){function s(a,o){return"[Axios v"+id+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return(a,o,l)=>{if(t===!1)throw new U(s(o," has been removed"+(r?" in "+r:"")),U.ERR_DEPRECATED);return r&&!Kh[o]&&(Kh[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(a,o,l):!0}};Ga.spelling=function(t){return(r,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function Ay(e,t,r){if(typeof e!="object"||e===null)throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const a=i[s],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){const l=e[a],c=l===void 0||o(l,a,e);if(c!==!0)throw new U("option "+a+" must be "+c,U.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new U("Unknown option "+a,U.ERR_BAD_OPTION)}}const Vs={assertOptions:Ay,validators:Ga},We=Vs.validators;let Hn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new zh,response:new zh}}async request(t,r){try{return await this._request(t,r)}catch(i){if(i instanceof Error)try{let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const a=s.stack;let o="";if(typeof a=="string"){const l=a.indexOf(`
`);o=l===-1?"":a.slice(l+1)}if(!i.stack)i.stack=o;else if(o){const l=o.indexOf(`
`),c=l===-1?-1:o.indexOf(`
`,l+1),d=c===-1?"":o.slice(c+1);String(i.stack).endsWith(d)||(i.stack+=`
`+o)}}catch{}throw i}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Qn(this.defaults,r);const{transitional:i,paramsSerializer:s,headers:a}=r;i!==void 0&&Vs.assertOptions(i,{silentJSONParsing:We.transitional(We.boolean),forcedJSONParsing:We.transitional(We.boolean),clarifyTimeoutError:We.transitional(We.boolean),legacyInterceptorReqResOrdering:We.transitional(We.boolean),advertiseZstdAcceptEncoding:We.transitional(We.boolean),validateStatusUndefinedResolves:We.transitional(We.boolean)},!1),s!=null&&(S.isFunction(s)?r.paramsSerializer={serialize:s}:Vs.assertOptions(s,{encode:We.function,serialize:We.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Vs.assertOptions(r,{baseUrl:We.spelling("baseURL"),withXsrfToken:We.spelling("withXSRFToken")},!0),r.method=(S.getSafeProp(r,"method")||S.getSafeProp(this.defaults,"method")||"get").toLowerCase();let o=a&&S.merge(a.common,a[r.method]);a&&S.forEach(of.concat("common"),v=>{delete a[v]}),r.headers=He.concat(o,a);const l=[];let c=!0;this.interceptors.request.forEach(function(A){if(typeof A.runWhen=="function"&&A.runWhen(r)===!1)return;c=c&&A.synchronous;const E=r.transitional||nd;E&&E.legacyInterceptorReqResOrdering?l.unshift(A.fulfilled,A.rejected):l.push(A.fulfilled,A.rejected)});const d=[];this.interceptors.response.forEach(function(A){d.push(A.fulfilled,A.rejected)});let h,u=0,p;if(!c){const v=[Eo.bind(this),void 0];for(v.unshift(...l),v.push(...d),p=v.length,h=Promise.resolve(r);u<p;)h=h.then(v[u++],v[u++]);return h}p=l.length;let x=r;for(;u<p;){const v=l[u++],A=l[u++];try{x=v?v(x):x}catch(E){if(!A){h=Promise.reject(E);break}try{const m=A.call(this,E);S.isThenable(m)&&(h=Promise.resolve(m).then(()=>Eo.call(this,x)))}catch(m){h=Promise.reject(m)}break}}if(!h)try{h=Eo.call(this,x)}catch(v){h=Promise.reject(v)}for(u=0,p=d.length;u<p;)h=h.then(d[u++],d[u++]);return h}getUri(t){t=Qn(this.defaults,t);const r=hf(t.baseURL,t.url,t.allowAbsoluteUrls,t);return nf(r,t.params,t.paramsSerializer)}};S.forEach(["delete","get","head","options"],function(t){Hn.prototype[t]=function(r,i){return this.request(Qn(i||{},{method:t,url:r,data:i&&S.hasOwnProp(i,"data")?i.data:void 0}))}});S.forEach(["post","put","patch","query"],function(t){function r(i){return function(a,o,l){return this.request(Qn(l||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Hn.prototype[t]=r(),t!=="query"&&(Hn.prototype[t+"Form"]=r(!0))});let ky=class gf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(a){r=a});const i=this;this.promise.then(s=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](s);i._listeners=null}),this.promise.then=s=>{let a;const o=new Promise(l=>{i.subscribe(l),a=l}).then(s);return o.cancel=function(){i.unsubscribe(a)},o},t(function(a,o,l){i.reason||(i.reason=new os(a,o,l),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=i=>{t.abort(i)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new gf(function(s){t=s}),cancel:t}}};function Ny(e){return function(r){return e.apply(null,r)}}function Sy(e){return S.isObject(e)&&e.isAxiosError===!0}const qs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(qs).forEach(([e,t])=>{qs[t]===void 0&&(qs[t]=e)});function xf(e){const t=new Hn(e),r=Wm(Hn.prototype.request,t);return S.extend(r,Hn.prototype,t,{allOwnKeys:!0}),S.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return xf(Qn(e,s))},r}const be=xf(as);be.Axios=Hn;be.CanceledError=os;be.CancelToken=ky;be.isCancel=lf;be.VERSION=id;be.toFormData=_a;be.AxiosError=U;be.Cancel=be.CanceledError;be.all=function(t){return Promise.all(t)};be.spread=Ny;be.isAxiosError=Sy;be.mergeConfig=Qn;be.AxiosHeaders=He;be.formToJSON=e=>af(S.isHTMLForm(e)?new FormData(e):e);be.getAdapter=ff.getAdapter;be.HttpStatusCode=qs;be.default=be;const{Axios:s2,AxiosError:a2,CanceledError:o2,isCancel:l2,CancelToken:c2,VERSION:d2,all:h2,Cancel:u2,isAxiosError:p2,spread:m2,toFormData:f2,AxiosHeaders:g2,HttpStatusCode:x2,formToJSON:w2,getAdapter:y2,mergeConfig:v2,create:b2}=be,ad="admin_token",Va="admin_user",Cy=e=>{try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(atob(t))}catch{return null}},od=()=>localStorage.getItem(ad),Ks=(e=od())=>{const t=e&&Cy(e);return t!=null&&t.exp?Math.max(0,t.exp*1e3-Date.now()):0},ka=()=>Ks()>0,Ey=()=>{try{return JSON.parse(localStorage.getItem(Va))}catch{return null}},wf=(e,t)=>{localStorage.setItem(ad,e),t&&localStorage.setItem(Va,JSON.stringify(t))},Ry=e=>localStorage.setItem(Va,JSON.stringify(e)),Ni=()=>{localStorage.removeItem(ad),localStorage.removeItem(Va)},yf=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,vf=(e,t="")=>{const r=t.split("@")[0];return e.length<8?"At least 8 characters":!/[a-z]/i.test(e)||!/\d/.test(e)?"Use both letters and numbers":r.length>=3&&e.toLowerCase().includes(r.toLowerCase())?"Must not contain your email name":null},Cs="".replace(/\/+$/,""),Py=Cs?Cs.endsWith("/api")?Cs:Cs+"/api":"/api",$=be.create({baseURL:Py,timeout:6e4});$.interceptors.request.use(e=>{const t=od();return t&&(e.headers.Authorization=`Bearer ${t}`),e});$.interceptors.response.use(e=>e,e=>{var i,s,a,o;const t=window.location.pathname.startsWith("/admin/"),r=(s=(i=e.config)==null?void 0:i.url)==null?void 0:s.includes("/admin/login");if(((a=e.response)==null?void 0:a.status)===401&&t&&!r){Ni();const l=((o=e.response.data)==null?void 0:o.code)==="TOKEN_EXPIRED"?"expired":"signedout";window.location.replace(`/admin?session=${l}`)}return Promise.reject(e)});const Fr="/assets/logo-homwiser-Cd0C7JXv.png",Wr=["Real Estate News","Gurgaon","Delhi NCR","Investment","Property Guide"],Ki=e=>{const t=new Date(e);return isNaN(t)?"":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toUpperCase()},Ty=(e="")=>String(e).split(/\n\s*\n/).map(t=>t.trim()).filter(Boolean),$l=e=>{const t=[e.excerpt,...(e.content||[]).flatMap(r=>[r.heading,r.text])].join(" ").split(/\s+/).filter(Boolean).length;return Math.max(1,Math.round(t/200))};function Mt(){const e=tr(),t=nr(),[r,i]=j.useState("Gurugram"),[s,a]=j.useState(""),o=k=>{k==null||k.preventDefault();const O=new URLSearchParams;r&&O.set("city",r),s.trim()&&O.set("q",s.trim()),t(`/search?${O.toString()}`)},l=e.pathname==="/",[c,d]=j.useState(!1),[h,u]=j.useState(null),[p,x]=j.useState(!1);j.useEffect(()=>{const k=()=>{x(window.scrollY>40)};return k(),window.addEventListener("scroll",k,{passive:!0}),()=>{window.removeEventListener("scroll",k)}},[]),j.useEffect(()=>{d(!1),u(null)},[e.pathname,e.search]),j.useEffect(()=>{if(!c)return;const k=g=>{g.key==="Escape"&&(d(!1),u(null))};document.addEventListener("keydown",k);const O=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",k),document.body.style.overflow=O}},[c]);const v=k=>{u(h===k?null:k)},A=()=>{d(!1),u(null)},w=[{label:"Home",link:"/"},{label:"About",link:"/about"},{label:"Budget",type:"simple",data:[{label:"Under 1 Cr",link:"/budget/under-1-cr"},{label:"1 Cr – 4 Cr",link:"/budget/1-cr-4-cr"},{label:"4 Cr – 8 Cr",link:"/budget/4-cr-8-cr"},{label:"8 Cr – 12 Cr",link:"/budget/8-cr-12-cr"},{label:"12 Cr – 16 Cr",link:"/budget/12-cr-16-cr"},{label:"16 Cr Onwards",link:"/budget/16-cr-onwards"}]},{label:"Property Type",type:"mega",data:[{label:"Residential Projects",children:[{label:"Apartment",link:"/residential-projects"},{label:"Luxury Villas",link:"/property-type/luxury-villas"},{label:"Independent Floors",link:"/property-type/independent-floors"},{label:"Pent House",link:"/property-type/pent-house"}]},{label:"Commercial Projects",children:[{label:"Shops",link:"/commercial/shops"},{label:"Office Space",link:"/commercial/office-space"},{label:"Food Court",link:"/commercial/food-court"},{label:"Anchor Stores",link:"/commercial/anchor-stores"},{label:"Cinema & Entertainment",link:"/commercial/cinema-entertainment"}]},{label:"SCO Plots",link:"/property-type/sco-plots"},{label:"Residential Plots",link:"/property-type/residential-plots"}]},{label:"Project Status",type:"simple",data:[{label:"Upcoming",link:"/status/upcoming"},{label:"New Launch",link:"/status/new-launch"},{label:"Under Construction",link:"/status/under-construction"},{label:"Ready To Move",link:"/status/ready-to-move"}]},{label:"Cities",type:"mega",data:[{label:"Gurugram",children:[{label:"Southern Peripheral Road (SPR)",link:"/location/southern-peripheral-road"},{label:"Dwarka Expressway",link:"/location/dwarka-expressway"},{label:"New Gurgaon",link:"/location/new-gurgaon"},{label:"Sohna Road",link:"/location/sohna-road"}]},{label:"Noida",children:[{label:"Noida Expressway",link:"/location/noida-expressway"},{label:"Noida Extension",link:"/location/noida-extension"},{label:"Yamuna Expressway",link:"/location/yamuna-expressway"}]},{label:"New Delhi",children:[{label:"Dwarka",link:"/location/dwarka"},{label:"South Delhi",link:"/location/south-delhi"},{label:"Central Delhi",link:"/location/central-delhi"}]},{label:"Faridabad",children:[{label:"Greater Faridabad",link:"/location/greater-faridabad"},{label:"Mathura Road",link:"/location/mathura-road"},{label:"Suraj Kund",link:"/location/suraj-kund"}]},{label:"Bengaluru",children:[{label:"North Bengaluru",link:"/location/north-bengaluru"},{label:"East Bengaluru",link:"/location/east-bengaluru"},{label:"Sarjapur Road (IT Corridor)",link:"/location/sarjapur-road"},{label:"South Bengaluru",link:"/location/south-bengaluru"},{label:"Hoskote & East Peripheral Belt",link:"/location/hoskote"}]},{label:"Hyderabad",children:[{label:"North Hyderabad",link:"/location/north-hyderabad"},{label:"South Hyderabad",link:"/location/south-hyderabad"},{label:"East Hyderabad",link:"/location/east-hyderabad"},{label:"West Hyderabad",link:"/location/west-hyderabad"}]},{label:"Mumbai",children:[{label:"South Mumbai",link:"/location/south-mumbai"},{label:"Navi Mumbai",link:"/location/navi-mumbai"},{label:"Panvel",link:"/location/panvel"},{label:"Central Mumbai",link:"/location/central-mumbai"},{label:"Kalyan",link:"/location/kalyan"}]},{label:"Pune",children:[{label:"West Pune",link:"/location/west-pune"},{label:"East Pune",link:"/location/east-pune"},{label:"Punawale",link:"/location/punawale"},{label:"South East Pune",link:"/location/south-east-pune"}]}]},{label:"Blog",type:"simple",data:[{label:"All Articles",link:"/blog"},...Wr.map(k=>({label:k,link:`/blog?category=${encodeURIComponent(k)}`}))]},{label:"Contact",link:"./contact"}];return n.jsxs(n.Fragment,{children:[n.jsxs("header",{className:`hw-header ${l?"":"hw-header-inner-page"} ${p?"hw-header-scrolled":""}`,children:[n.jsxs("div",{className:"hw-header-inner",children:[n.jsx(q,{to:"/",className:"hw-logo",onClick:A,children:n.jsx("img",{src:Fr,alt:"Homwisor",className:"hw-logo-image"})}),n.jsxs("div",{className:"hw-scroll-search",children:[n.jsxs("div",{className:"hw-location-select",children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M20 10.5C20 16 12 21 12 21S4 16 4 10.5a8 8 0 1 1 16 0Z",stroke:"currentColor",strokeWidth:"1.7"}),n.jsx("circle",{cx:"12",cy:"10.5",r:"2.4",stroke:"currentColor",strokeWidth:"1.7"})]}),n.jsxs("select",{value:r,onChange:k=>i(k.target.value),"aria-label":"Select city",children:[n.jsx("option",{children:"Gurugram"}),n.jsx("option",{children:"Noida"}),n.jsx("option",{children:"New Delhi"}),n.jsx("option",{children:"Faridabad"}),n.jsx("option",{children:"Bengaluru"}),n.jsx("option",{children:"Hyderabad"}),n.jsx("option",{children:"Mumbai"}),n.jsx("option",{children:"Pune"})]}),n.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"m6 9 6 6 6-6",stroke:"currentColor",strokeWidth:"2"})})]}),n.jsxs("div",{className:"hw-search-box",children:[n.jsx("input",{type:"text",value:s,onChange:k=>a(k.target.value),onKeyDown:k=>k.key==="Enter"&&o(k),placeholder:"Search projects, localities...","aria-label":"Search projects and localities"}),n.jsx("button",{type:"button","aria-label":"Search",onClick:o,children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[n.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4",stroke:"currentColor",strokeWidth:"1.8"}),n.jsx("path",{d:"m16 16 4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})})]})]}),n.jsx("nav",{className:"hw-nav",children:w.map(k=>{const O=k.type==="simple"||k.type==="mega",g=["Project Status","Cities","Resale"].includes(k.label);return n.jsxs("div",{className:`hw-nav-item ${g?`hw-scroll-menu-item hw-scroll-${k.label.toLowerCase().replace(/\s+/g,"-")}`:"hw-scroll-menu-hide"}`,onMouseEnter:()=>{O&&u(k.label)},onMouseLeave:()=>{O&&u(null)},children:[O?n.jsxs("button",{className:"hw-nav-link hw-nav-dropdown-button",onClick:()=>v(k.label),children:[n.jsx("span",{children:k.label}),n.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M6 9l6 6 6-6"})})]}):n.jsx(q,{to:k.link,className:"hw-nav-link",children:k.label}),O&&k.type==="simple"&&h===k.label&&n.jsx("div",{className:"hw-dropdown hw-simple-dropdown",children:k.data.map(C=>n.jsx(q,{to:C.link,className:"hw-dropdown-link",children:C.label},C.label))}),O&&k.type==="mega"&&h===k.label&&n.jsx("div",{className:"hw-dropdown hw-mega-dropdown",children:n.jsx("div",{className:"hw-mega-grid",children:k.data.map(C=>n.jsxs("div",{className:"hw-menu-group",children:[C.link?n.jsx(q,{to:C.link,className:"hw-group-title hw-direct-link",children:C.label}):n.jsx("div",{className:"hw-group-title",children:C.label}),C.children&&C.children.map(P=>n.jsx(q,{to:P.link,className:"hw-dropdown-child",children:P.label},P.label))]},C.label))})})]},k.label)})}),n.jsxs("div",{className:"hw-header-actions",children:[n.jsx("button",{type:"button",className:"hw-mobile-search-button","aria-label":"Search",onClick:()=>{const k=document.querySelector(".hw-scroll-search input");k&&(k.focus(),k.scrollIntoView({behavior:"smooth",block:"nearest"}))},children:n.jsxs("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[n.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4"}),n.jsx("path",{d:"m16 16 4.2 4.2"})]})}),n.jsx("button",{type:"button",className:"hw-menu-button",onClick:()=>d(k=>!k),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,children:c?n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[n.jsx("path",{d:"M18 6L6 18"}),n.jsx("path",{d:"M6 6l12 12"})]}):n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[n.jsx("path",{d:"M3 6h18"}),n.jsx("path",{d:"M3 12h18"}),n.jsx("path",{d:"M3 18h18"})]})})]})]}),c&&n.jsx("div",{className:"hw-mobile-backdrop",onClick:A,"aria-hidden":"true"}),c&&n.jsx("div",{className:"hw-mobile-menu",children:w.map(k=>{const O=k.type==="simple"||k.type==="mega";return n.jsx("div",{className:"hw-mobile-item",children:O?n.jsxs(n.Fragment,{children:[n.jsxs("button",{className:"hw-mobile-main",onClick:()=>v(k.label),children:[n.jsx("span",{children:k.label}),n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M6 9l6 6 6-6"})})]}),h===k.label&&n.jsx("div",{className:"hw-mobile-submenu",children:k.data.map(g=>n.jsxs("div",{children:[g.link?n.jsx(q,{to:g.link,className:"hw-mobile-group",onClick:A,children:g.label}):n.jsx("div",{className:"hw-mobile-group",children:g.label}),g.children&&g.children.map(C=>n.jsx(q,{to:C.link,className:"hw-mobile-child",onClick:A,children:C.label},C.label))]},g.label))})]}):n.jsx(q,{to:k.link,className:"hw-mobile-main",onClick:A,children:k.label})},k.label)})})]}),n.jsx("style",{children:`

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
      `})]})}function bf({link:e,label:t,className:r,children:i}){const s=String(e||"").trim();return!s||s==="#"?i:/^https?:\/\//i.test(s)?n.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:r,"aria-label":t,children:i}):n.jsx(q,{to:s.startsWith("/")?s:`/${s}`,className:r,"aria-label":t,children:i})}const Oy="/assets/bn1-Cpicj8ug.png",Ly="/assets/bn2-Dg5ASCxh.png";function My({banners:e=[]}){const[t,r]=j.useState(0),i=e.length?e:[{image:Ly},{image:Oy}];j.useEffect(()=>{if(i.length<=1)return;const o=setInterval(()=>{r(l=>(l+1)%i.length)},5e3);return()=>clearInterval(o)},[i.length]);const s=()=>{r(o=>(o+1)%i.length)},a=()=>{r(o=>(o-1+i.length)%i.length)};return n.jsxs("section",{className:"hw-hero",children:[n.jsx("div",{className:"hw-slides",children:i.map((o,l)=>n.jsx("div",{className:`hw-slide ${l===t?"hw-slide-active":""}`,children:n.jsx(bf,{link:o.link,label:o.title,className:"hw-slide-link",children:n.jsx("img",{src:o.image,alt:o.title||"Premium Property"})})},l))}),i.length>1&&n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",className:"hw-arrow hw-arrow-left",onClick:a,"aria-label":"Previous slide",children:"‹"}),n.jsx("button",{type:"button",className:"hw-arrow hw-arrow-right",onClick:s,"aria-label":"Next slide",children:"›"})]}),n.jsx("style",{children:`

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
      `})]})}function zy(){const e=nr(),[t,r]=j.useState("Apartment"),[i,s]=j.useState(""),[a,o]=j.useState(""),[l,c]=j.useState(""),E=[{name:"Apartment",value:"Apartment",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M4 21V5.5L12 2l8 3.5V21",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8 21v-5h8v5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M8 8h2M14 8h2M8 11h2M14 11h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Villa",value:"Villa",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M8 12h1M15 12h1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Farmhouse",value:"Farmhouse",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M7 13h2M15 13h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Commercial",value:"Commercial",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M4 21V4h16v17",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),n.jsx("path",{d:"M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),n.jsx("path",{d:"M10 21v-3h4v3",stroke:"currentColor",strokeWidth:"1.6"})]})},{name:"Branded",value:"Branded",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M12 3l2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3Z",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),n.jsx("path",{d:"M19 16v5M16.5 18.5h5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Luxury",value:"Luxury",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M3 12l9-8 9 8-9 8-9-8Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),n.jsx("path",{d:"M7 12h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Plots / Land",value:"Plots / Land",icon:()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M4 19l5-12 5 3 6-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M4 19h16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M9 7l-1-3M14 10l2-3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}],m=()=>{const y=new URLSearchParams;t&&y.set("type",t),i&&y.set("propertyType",i),a&&y.set("location",a),l&&y.set("budget",l),e(`/search?${y.toString()}`)},f=y=>{r(y.value),s(y.value)};return n.jsxs("section",{className:"hw-search-section",children:[n.jsxs("div",{className:"hw-search-container",children:[n.jsx("div",{className:"hw-search-tabs",children:E.map(y=>{const w=y.icon;return n.jsxs("button",{type:"button",className:`hw-search-tab ${t===y.value?"active":""}`,onClick:()=>f(y),children:[n.jsx("span",{className:"hw-tab-icon",children:n.jsx(w,{})}),n.jsx("span",{className:"hw-tab-text",children:y.name})]},y.value)})}),n.jsxs("div",{className:"hw-search-fields",children:[n.jsxs("div",{className:"hw-search-field hw-location-field",children:[n.jsx("span",{className:"hw-search-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"7"}),n.jsx("path",{d:"M20 20l-4-4"})]})}),n.jsx("input",{type:"text",value:a,onChange:y=>o(y.target.value),placeholder:"Search city, locality or project..."})]}),n.jsxs("div",{className:"hw-search-field hw-budget-field",children:[n.jsx("span",{className:"hw-search-icon hw-rupee",children:"₹"}),n.jsxs("select",{value:l,onChange:y=>c(y.target.value),children:[n.jsx("option",{value:"",children:"Budget"}),n.jsx("option",{value:"Under 1 Cr",children:"Under ₹1 Cr"}),n.jsx("option",{value:"1 Cr - 4 Cr",children:"₹1 Cr - ₹4 Cr"}),n.jsx("option",{value:"4 Cr - 8 Cr",children:"₹4 Cr - ₹8 Cr"}),n.jsx("option",{value:"8 Cr - 12 Cr",children:"₹8 Cr - ₹12 Cr"}),n.jsx("option",{value:"12 Cr - 16 Cr",children:"₹12 Cr - ₹16 Cr"}),n.jsx("option",{value:"16 Cr Onwards",children:"₹16 Cr Onwards"})]}),n.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),n.jsxs("div",{className:"hw-search-field hw-type-field",children:[n.jsx("span",{className:"hw-search-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"1"}),n.jsx("path",{d:"M8 8h8"}),n.jsx("path",{d:"M8 12h8"}),n.jsx("path",{d:"M8 16h5"})]})}),n.jsxs("select",{value:i,onChange:y=>s(y.target.value),children:[n.jsx("option",{value:"",children:"Property Type"}),n.jsx("option",{value:"Apartment",children:"Apartment"}),n.jsx("option",{value:"Villa",children:"Villa"}),n.jsx("option",{value:"Farmhouse",children:"Farmhouse"}),n.jsx("option",{value:"Builder Floor",children:"Builder Floor"}),n.jsx("option",{value:"Commercial",children:"Commercial"}),n.jsx("option",{value:"Plots / Land",children:"Plots / Land"})]}),n.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),n.jsxs("button",{type:"button",className:"hw-search-button",onClick:m,children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"7"}),n.jsx("path",{d:"M20 20l-4-4"})]}),n.jsx("span",{children:"Search Properties"})]})]})]}),n.jsx("style",{children:`

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

      `})]})}const Iy="/assets/s1-BVwoKduN.webp",By="/assets/s2-kewm8yNy.webp",Dy="/assets/s3-eKCFe4c6.webp";function Fy({banners:e=[]}){const t=[{image:Iy},{image:By},{image:Dy}],r=e.length?e:t,[i,s]=j.useState(0);return j.useEffect(()=>{if(r.length<=1)return;const a=setInterval(()=>{s(o=>(o+1)%r.length)},5e3);return()=>clearInterval(a)},[r.length]),n.jsxs("section",{className:"hw-image-slider",children:[n.jsx("div",{className:"hw-image-slider-track",children:r.map((a,o)=>n.jsx("div",{className:`hw-image-slide ${o===i?"is-active":""}`,children:n.jsx(bf,{link:a.link,label:a.title,className:"hw-image-slide-link",children:n.jsx("img",{src:a.image,alt:a.title||"Property Banner"})})},o))}),n.jsx("style",{children:`

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

      `})]})}function Wy({link:e,className:t,children:r}){const i=String(e||"").trim();return!i||i==="#"?n.jsx("div",{className:t,children:r}):/^https?:\/\//i.test(i)?n.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:t,children:r}):n.jsx(q,{to:i.startsWith("/")?i:`/${i}`,className:t,children:r})}const Uy="919090101401",Hy=e=>`https://wa.me/${Uy}?text=${encodeURIComponent(`Hi, I am interested in ${e.title}. Please share more details.`)}`;function $y({items:e=[]}){const t=j.useRef(null),r=(Array.isArray(e)?e:[]).filter(i=>(i==null?void 0:i.image)&&(i==null?void 0:i.title)).slice(0,4);return j.useEffect(()=>{const i=t.current;if(!i||r.length<2)return;let s=null;const a=()=>{clearInterval(s),s=setInterval(()=>{if(window.innerWidth>760)return;const o=i.querySelector(".hwr-card");if(!o)return;const l=o.getBoundingClientRect().width+12,c=i.scrollLeft>=i.scrollWidth-i.clientWidth-5;i.scrollTo({left:c?0:i.scrollLeft+l,behavior:"smooth"})},3500)};return a(),i.addEventListener("touchend",a,{passive:!0}),i.addEventListener("pointerup",a),()=>{clearInterval(s),i.removeEventListener("touchend",a),i.removeEventListener("pointerup",a)}},[r.length]),r.length?n.jsxs("section",{className:"hwr-section",children:[n.jsxs("div",{className:"hwr-head",children:[n.jsxs("h2",{children:[n.jsx("span",{className:"hwr-brand",children:"HomWisor"})," Recommended"]}),n.jsx("span",{className:"hwr-bar","aria-hidden":"true"}),n.jsx("p",{children:"Discover premium properties handpicked for luxury living and exceptional investment returns"})]}),n.jsx("div",{className:"hwr-grid",ref:t,children:r.map(i=>n.jsxs("div",{className:"hwr-card",children:[n.jsxs(Wy,{link:i.link,className:"hwr-card-link",children:[n.jsx("img",{src:i.image,alt:i.title,loading:"lazy"}),n.jsx("span",{className:"hwr-shade","aria-hidden":"true"}),i.badge&&n.jsxs("span",{className:"hwr-badge",children:[n.jsx("i",{"aria-hidden":"true"}),i.badge]}),n.jsxs("span",{className:"hwr-info",children:[n.jsx("strong",{className:"hwr-name",children:i.title}),i.price&&n.jsx("span",{className:"hwr-price",children:i.price}),i.location&&n.jsxs("span",{className:"hwr-loc",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[n.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.6"})]}),n.jsx("span",{children:i.location})]})]})]}),n.jsxs("a",{className:"hwr-wa",href:Hy(i),target:"_blank",rel:"noopener noreferrer",children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:n.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),"WhatsApp"]})]},i.id||i.title))}),n.jsx("style",{children:`
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
          object-fit: cover;
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
      `})]}):null}const _y="/assets/s4-CyUc3uZH.webp",Gy="/assets/s5-B3dJV6PK.webp",Vy="/assets/s6-BTGolWiF.webp",Se="#D4AF37",Yh={position:"absolute",inset:0,zIndex:2,display:"block"};function qy({properties:e=[],locations:t=[],upcoming:r=[],newlaunch:i=[],offers:s=[],promos:a=[],branded:o=null,luxury:l=null}){var z,Y,ee,N,_,I,K,T,D,V;const c=[{id:1,title:"M3M Brabus Residences",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",priceRange:"₹20 - 28 Cr",location:"Sector 58, Golf Course Extension Road",bhk:"4 & 5 BHK",area:"4,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:2,title:"DLF Privana North",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",priceRange:"₹18.50 Cr",location:"Sector 76, Golf Course Extension Road",bhk:"3 & 4 BHK",area:"2,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:3,title:"M3M Crown",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",priceRange:"₹28 - 65 Cr",location:"Sector 111, Dwarka Expressway",bhk:"3, 4 & 5 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:4,title:"Emaar Palm Grove",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",priceRange:"₹25.00 Cr",location:"Sector 102, Dwarka Expressway",bhk:"4 & 5 BHK",area:"5,000+ Sq.Ft.",propertyType:"Villa",rera:!0},{id:5,title:"M3M Crown Luxury",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",priceRange:"₹30 - 70 Cr",location:"Sector 111, Gurugram",bhk:"4 & 5 BHK",area:"4,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:6,title:"DLF The Arbour",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",priceRange:"₹17.50 Cr",location:"Sector 63, Gurugram",bhk:"4 BHK",area:"3,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:7,title:"M3M Golf Estate",image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",priceRange:"₹19 - 45 Cr",location:"Sector 65, Gurugram",bhk:"3 & 4 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:8,title:"Emaar Digi Homes",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",priceRange:"₹15.00 Cr",location:"Sector 62, Gurugram",bhk:"3 & 4 BHK",area:"2,800+ Sq.Ft.",propertyType:"Apartment",rera:!0}],d=Array.isArray(e)?e.filter(b=>b.category==="trending"||b.category==="recommended").slice(0,8):[],h=d.length>=4?d:c,u=Array.isArray(e)?e.filter(b=>["₹19","₹28","₹16","₹5.2"].some(F=>String((b==null?void 0:b.priceRange)||"").includes(F))||String((b==null?void 0:b.category)||"").toLowerCase()==="trending"):[],p=[e.find(b=>String((b==null?void 0:b.title)||"").toLowerCase().includes("oberoi three sixty"))||e.find(b=>String((b==null?void 0:b.title)||"").toLowerCase().includes("bptp"))||u[0],e.find(b=>String((b==null?void 0:b.title)||"").toLowerCase().includes("experion one 42"))||u[1],e.find(b=>String((b==null?void 0:b.title)||"").toLowerCase().includes("max estate 59"))||u[2],e.find(b=>String((b==null?void 0:b.title)||"").toLowerCase().includes("bptp downtown"))||u[3]].filter(Boolean).slice(0,4),x=(Array.isArray(o)?o:p).slice(0,4),v=(Array.isArray(l)?l:p).slice(0,4),A=x[0]||c.find(b=>String((b==null?void 0:b.title)||"").toLowerCase().includes("brabus"))||c[0],E=Array.isArray(r)&&r.length?r:Array.isArray(e)?e.filter(b=>String((b==null?void 0:b.category)||"").toLowerCase()==="upcoming"||String((b==null?void 0:b.status)||"").toLowerCase()==="upcoming"||String((b==null?void 0:b.propertyStatus)||"").toLowerCase()==="upcoming"):[],m=Array.isArray(i)&&i.length?i:Array.isArray(e)?e.filter(b=>String((b==null?void 0:b.category)||"").toLowerCase()==="newlaunch"||String((b==null?void 0:b.category)||"").toLowerCase()==="new-launch"||String((b==null?void 0:b.status)||"").toLowerCase()==="newlaunch"||String((b==null?void 0:b.propertyStatus)||"").toLowerCase()==="newlaunch"):[],f=Array.isArray(e)?e.filter(b=>String((b==null?void 0:b.category)||"").toLowerCase()==="sco").slice(0,4):[],y=Array.isArray(e)?e.filter(b=>String((b==null?void 0:b.category)||"").toLowerCase()==="commercial").slice(0,4):[],w=[{key:"sco",eyebrow:"SCO PROJECTS",title:"SCO Projects in",text:"Explore premium SCO plots and commercial projects in Gurugram",items:f,fallbackType:"SCO",fallbackArea:"SCO Plot"},{key:"commercial",eyebrow:"COMMERCIAL PROJECTS",title:"Commercial Projects in",text:"Retail, office and high-street commercial spaces in Gurugram",items:y,fallbackType:"Commercial",fallbackArea:"Commercial Space"}],k=[{id:1,name:"Golf Course Road",count:"245+ Properties",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"},{id:2,name:"Golf Course Extension",count:"320+ Properties",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85"},{id:3,name:"Dwarka Expressway",count:"410+ Properties",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85"},{id:4,name:"MG Road",count:"180+ Properties",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=85"},{id:5,name:"Sohna Road",count:"275+ Properties",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85"},{id:6,name:"New Gurgaon",count:"360+ Properties",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85"}],O=Array.isArray(t)&&t.length?t.slice(0,6):k,g=(Array.isArray(a)?a:[]).filter(b=>b==null?void 0:b.image).map(b=>({image:b.image,title:b.title,link:b.link&&b.link!=="#"?b.link:""}));g.length||g.push(...[_y,Gy,Vy].map(b=>({image:b,title:"",link:""})));const[C,P]=j.useState(0);j.useEffect(()=>{if(g.length<=1)return;const b=setInterval(()=>{P(F=>(F+1)%g.length)},4500);return()=>clearInterval(b)},[g.length]);const R="919090101401",L=b=>{const F=encodeURIComponent(`Hi, I am interested in ${b.title}. Please share more details.`);return`https://wa.me/${R}?text=${F}`},W=[{label:"Under ₹1 Cr",sub:"Great homes within your budget",link:"/search?budget=under-1-cr",img:((z=k[0])==null?void 0:z.image)||((Y=c[0])==null?void 0:Y.image),icon:"◇"},{label:"₹1 Cr – ₹5 Cr",sub:"Premium living with a smart investment",link:"/search?budget=1-5-cr",img:((ee=k[1])==null?void 0:ee.image)||((N=c[1])==null?void 0:N.image),icon:"♢"},{label:"₹5 Crore – ₹10 Crore",sub:"Bigger spaces for a better lifestyle",link:"/search?budget=5-10-cr",img:((_=k[2])==null?void 0:_.image)||((I=c[2])==null?void 0:I.image),icon:"♕"},{label:"₹10 Crore – ₹20 Crore",sub:"Exclusive homes for discerning buyers",link:"/search?budget=10-20-cr",img:((K=k[3])==null?void 0:K.image)||((T=c[3])==null?void 0:T.image),icon:"♛"},{label:"₹20 Crore – ₹50 Crore",sub:"Ultra-luxury living redefined",link:"/search?budget=20-50-cr",img:((D=k[4])==null?void 0:D.image)||((V=c[4])==null?void 0:V.image),icon:"▥"}];return n.jsx("section",{className:"hw-trending-section",children:n.jsxs("div",{className:"hw-trending-container",children:[n.jsxs("div",{className:"hw-trending-header",children:[n.jsxs("div",{className:"hw-trending-heading",children:[n.jsxs("div",{className:"hw-trending-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["Trending Projects in"," ",n.jsx("span",{children:"Gurugram"})]}),n.jsx("p",{children:"Handpicked premium projects for a better tomorrow"})]}),n.jsxs(q,{to:"/search?category=trending",className:"hw-trending-view-all",children:[n.jsx("span",{children:"View All Projects"}),n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsxs("div",{className:"hw-trending-layout",children:[n.jsxs("div",{className:"hw-trending-left",children:[n.jsx("div",{className:"hw-trending-properties",children:h.slice(0,8).map((b,F)=>n.jsxs(q,{to:`/property/${b.id||F}`,className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:b.image,alt:b.title,loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),b.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[b.bhk||"3 & 4 BHK",b.bhk&&b.propertyType?` • ${b.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:b.title}),n.jsx("div",{className:"hw-card-price",children:b.priceRange||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:b.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:b.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:b.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:L(b),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:te=>te.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},b.id||F))}),n.jsxs("section",{className:"hw-prime-locations",children:[n.jsx("div",{className:"hw-subsection-header",children:n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["Gurugram's"," ",n.jsx("span",{children:"Prime Locations"})]}),n.jsx("p",{children:"Explore properties in the most sought-after locations"})]})}),n.jsx("div",{className:"hw-location-grid",children:O.map(b=>n.jsxs(q,{to:`/search?location=${encodeURIComponent(b.name)}`,className:"hw-location-card",children:[n.jsx("img",{src:b.image,alt:b.name,loading:"lazy"}),n.jsx("div",{className:"hw-location-overlay"}),n.jsxs("div",{className:"hw-location-content",children:[n.jsx("div",{className:"hw-location-name",children:b.name}),n.jsx("div",{className:"hw-location-count",children:b.count})]})]},b.id))})]}),n.jsxs("section",{className:"hw-upcoming-projects",children:[n.jsxs("div",{className:"hw-upcoming-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["Upcoming Projects in ",n.jsx("span",{children:"Gurugram"})]}),n.jsx("p",{children:"Discover the latest upcoming developments in Gurugram"})]}),n.jsxs(q,{to:"/search?category=upcoming",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:E.length>0?E.slice(0,4).map((b,F)=>n.jsxs(q,{to:`/property/${b.id||b._id||F}`,className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:b.image,alt:b.title||"Upcoming Project",loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),b.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[b.bhk||"3 & 4 BHK",b.bhk&&b.propertyType?` • ${b.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:b.title||"Upcoming Project"}),n.jsx("div",{className:"hw-card-price",children:b.priceRange||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:b.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:b.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:b.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:L(b),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:te=>te.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},b.id||b._id||`upcoming-${F}`)):n.jsx("div",{className:"hw-upcoming-empty",children:n.jsx("strong",{children:"No upcoming projects found."})})})]}),n.jsxs("section",{className:"hw-upcoming-projects hw-newlaunch-projects",children:[n.jsxs("div",{className:"hw-upcoming-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["New Launch Projects in ",n.jsx("span",{children:"Gurugram"})]}),n.jsx("p",{children:"Explore the latest newly launched projects in Gurugram"})]}),n.jsxs(q,{to:"/search?category=newlaunch",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:m.length>0?m.slice(0,4).map((b,F)=>n.jsxs(q,{to:`/property/${b.id||b._id||F}`,className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:b.image,alt:b.title||"New Launch Project",loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),b.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[b.bhk||"3 & 4 BHK",b.bhk&&b.propertyType?` • ${b.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:b.title||"New Launch Project"}),n.jsx("div",{className:"hw-card-price",children:b.priceRange||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:b.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:b.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:b.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:L(b),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:te=>te.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},b.id||b._id||`newlaunch-${F}`)):n.jsx("div",{className:"hw-upcoming-empty",children:n.jsx("strong",{children:"No new launch projects found."})})})]}),n.jsxs("section",{className:"hw-festival-offers",children:[n.jsxs("div",{className:"hw-festival-header",children:[n.jsxs("div",{className:"hw-festival-title-wrap",children:[n.jsxs("div",{className:"hw-festival-brand-line",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["Best Festival Offer in ",n.jsx("span",{children:"2026"})]}),n.jsx("p",{children:"Exclusive deals on premium residences. Limited period offers, unmatched value."})]}),n.jsxs(q,{to:"/search?category=festival",className:"hw-festival-view-all",children:["View All Festival Offers",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsxs("div",{className:"hw-festival-layout",children:[n.jsxs("div",{className:"hw-festival-banner",children:[n.jsx("div",{className:"hw-festival-banner-bg"}),n.jsx("div",{className:"hw-festival-banner-overlay"}),n.jsxs("div",{className:"hw-festival-banner-content",children:[n.jsx("div",{className:"hw-festival-mini-badge",children:"FESTIVE EDITION 2026"}),n.jsx("div",{className:"hw-festival-banner-kicker",children:"FESTIVAL LUXURY"}),n.jsxs("h3",{children:["Luxury",n.jsx("br",{}),"Homes.",n.jsx("br",{}),"Bigger",n.jsx("br",{}),"Celebrations."]}),n.jsx("p",{children:"This festive season, unlock exclusive offers on premium residences across Gurugram."}),n.jsxs("div",{className:"hw-festival-perks",children:[n.jsxs("div",{children:[n.jsx("span",{children:"◆"}),n.jsx("b",{children:"Limited Period Deals"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"◆"}),n.jsx("b",{children:"Assured Appreciation"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"◆"}),n.jsx("b",{children:"Flexible Payment Plans"})]})]}),n.jsxs(q,{to:"/search?category=festival",className:"hw-festival-explore",children:["Explore Offers",n.jsx("span",{children:"→"})]})]}),n.jsx("div",{className:"hw-festival-banner-brand",children:"HOMWISOR"})]}),n.jsx("div",{className:"hw-festival-grid",children:(Array.isArray(s)&&s.length?s:c).slice(0,6).map((b,F)=>n.jsxs(q,{to:`/property/${b.id||b._id||F}`,className:"hw-festival-card",children:[n.jsxs("div",{className:"hw-festival-card-image",children:[n.jsx("img",{src:b.image||b.thumbnail||c[F%c.length].image,alt:b.title||b.name||"Festival Offer",loading:"lazy"}),n.jsx("div",{className:"hw-festival-card-badge",children:b.badge||"EXCLUSIVE OFFER"}),n.jsx("div",{className:"hw-festival-card-arrow",children:"→"})]}),n.jsxs("div",{className:"hw-festival-card-content",children:[n.jsx("h3",{children:b.title||b.name||"Premium Festival Offer"}),n.jsx("div",{className:"hw-festival-card-price",children:b.priceRange||b.price||"Price on Request"}),n.jsxs("div",{className:"hw-festival-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:b.location||b.locality||"Gurugram"})]})]})]},b.id||b._id||`festival-${F}`))})]})]}),x.length>0&&n.jsxs("section",{className:"hw-luxury-projects",children:[n.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["Branded Residences in ",n.jsx("span",{children:"IN"})]}),n.jsx("p",{children:"Explore premium branded residences and landmark projects"})]}),n.jsxs(q,{to:"/search?category=branded",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:x.map((b,F)=>n.jsxs(q,{to:`/property/${b.id||b._id||F}`,className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:b.image||b.thumbnail||c[F%c.length].image,alt:b.title||"Luxury Project",loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),b.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[b.bhk||"3 & 4 BHK",b.bhk&&b.propertyType?` • ${b.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:b.title||"Luxury Project"}),n.jsx("div",{className:"hw-card-price",children:b.priceRange||b.price||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:b.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:b.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:b.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:L(b),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:te=>te.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},b.id||b._id||`luxury-${F}`))})]}),n.jsx("section",{className:"hw-branded-feature",children:n.jsxs("div",{className:"hw-branded-feature-inner",children:[n.jsx("div",{className:"hw-branded-glow"}),n.jsxs("div",{className:"hw-branded-copy",children:[n.jsxs("div",{className:"hw-branded-label",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["Where ",n.jsx("span",{children:"Branded Residences"})," Meets",n.jsx("br",{}),"Architectural Masterpieces"]}),n.jsx("p",{children:"Indulge in our curated selection of signature branded residences. Crafted in collaboration with world-class fashion houses and legendary hoteliers to deliver a life of unmatched sophistication, bespoke concierge services, and timeless value."}),n.jsxs("div",{className:"hw-branded-points",children:[n.jsxs("div",{children:[n.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),n.jsx("span",{children:"Concierge & Valet Services"})]}),n.jsxs("div",{children:[n.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),n.jsx("span",{children:"Fully RERA Verified Properties"})]})]}),n.jsxs("div",{className:"hw-branded-actions",children:[n.jsxs(q,{to:"/search?category=branded",className:"hw-branded-primary",children:["EXPLORE RESIDENCES ",n.jsx("span",{children:"→"})]}),n.jsx(q,{to:"/search?category=branded",className:"hw-branded-secondary",children:"GET INSTANT CALLBACK"})]})]}),n.jsxs("div",{className:"hw-branded-visual",children:[n.jsxs("div",{className:"hw-branded-main-image",children:[n.jsx("img",{src:(A==null?void 0:A.image)||(A==null?void 0:A.thumbnail)||"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=560&fit=crop",alt:(A==null?void 0:A.title)||"Branded Residence"}),n.jsxs("div",{className:"hw-branded-image-card",children:[n.jsxs("div",{children:[n.jsx("small",{children:"BRANDED RESIDENCES"}),n.jsx("strong",{children:(A==null?void 0:A.title)||"M3M Brabus Residences"})]}),n.jsxs(q,{to:`/property/${(A==null?void 0:A.id)||(A==null?void 0:A._id)||"branded"}`,children:["EXPLORE ",n.jsx("span",{children:"→"})]})]})]}),n.jsxs("div",{className:"hw-branded-side-card",children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=900&fit=crop",alt:"Luxury branded residence"}),n.jsx("div",{className:"hw-branded-side-overlay"}),n.jsxs("div",{className:"hw-branded-side-content",children:[n.jsx("span",{children:"HOMWISOR"}),n.jsx("strong",{children:"BRABUS"}),n.jsx("small",{children:"RESIDENCES"}),n.jsx("em",{children:"POWER. PRESTIGE. PERFECTION."}),n.jsx("label",{children:"COMING TO"}),n.jsx("b",{children:"SECTOR 58, GURGAON"}),n.jsx("div",{children:"4 & 5 BHK • STARTING FROM ₹20 CR*"})]})]})]})]})}),v.length>0&&n.jsxs("section",{className:"hw-luxury-projects",children:[n.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["Top Luxury Projects in ",n.jsx("span",{children:"IN"})]}),n.jsx("p",{children:"Explore premium branded residences and landmark projects"})]}),n.jsxs(q,{to:"/search?category=luxury",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:v.map((b,F)=>n.jsxs(q,{to:`/property/${b.id||b._id||F}`,className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:b.image||b.thumbnail||c[F%c.length].image,alt:b.title||"Luxury Project",loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),b.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"hw-bhk-badge",children:[b.bhk||"3 & 4 BHK",b.bhk&&b.propertyType?` • ${b.propertyType}`:""]})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:b.title||"Luxury Project"}),n.jsx("div",{className:"hw-card-price",children:b.priceRange||b.price||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:b.location||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:b.bhk||"3 & 4 BHK"})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:b.area||"2,500+ Sq.Ft."})]})]}),n.jsxs("a",{href:L(b),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:te=>te.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},b.id||b._id||`luxury-${F}`))})]}),n.jsxs("section",{className:"hw-budget-section",children:[n.jsxs("div",{className:"hw-budget-header",children:[n.jsxs("div",{className:"hw-budget-heading",children:[n.jsxs("div",{className:"hw-budget-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}}),"HOMWISOR",n.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Se}})]}),n.jsxs("h2",{children:["Top Budget ",n.jsx("span",{children:"Projects"})]}),n.jsx("p",{children:"Smart homes. Great value. A better tomorrow in Gurugram."})]}),n.jsxs(q,{to:"/search",className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-budget-grid",children:W.map(b=>n.jsxs(q,{to:b.link,className:"hw-budget-card",children:[n.jsx("img",{src:b.img,alt:b.label,loading:"lazy"}),n.jsx("div",{className:"hw-budget-card-overlay"}),n.jsx("div",{className:"hw-budget-icon",children:b.icon}),n.jsxs("div",{className:"hw-budget-card-content",children:[n.jsx("h3",{children:b.label}),n.jsx("p",{children:b.sub})]}),n.jsx("span",{className:"hw-budget-card-arrow",children:"→"})]},b.label))})]}),w.map(b=>b.items.length>0&&n.jsxs("section",{className:"hw-upcoming-projects hw-sco-projects",children:[n.jsxs("div",{className:"hw-upcoming-header",children:[n.jsxs("div",{children:[n.jsx("div",{className:"hw-subsection-eyebrow",children:b.eyebrow}),n.jsxs("h2",{children:[b.title," ",n.jsx("span",{children:"Gurugram"})]}),n.jsx("p",{children:b.text})]}),n.jsxs(q,{to:`/search?category=${b.key}`,className:"hw-upcoming-view-all",children:["View All Projects",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),n.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:b.items.map((F,te)=>n.jsxs(q,{to:`/property/${F.id||F._id||te}`,className:"hw-trending-card",children:[n.jsxs("div",{className:"hw-trending-image",children:[n.jsx("img",{src:F.image||F.thumbnail,alt:F.title||b.eyebrow,loading:"lazy"}),n.jsx("div",{className:"hw-image-overlay"}),F.rera!==!1&&n.jsx("div",{className:"hw-rera-group",children:n.jsxs("span",{className:"hw-rera-green",children:[n.jsx("b",{children:"✓"})," RERA"]})}),n.jsx("div",{className:"hw-bhk-badge",children:F.propertyType||F.type||b.fallbackType})]}),n.jsxs("div",{className:"hw-trending-card-content",children:[n.jsx("h3",{children:F.title||F.name||b.eyebrow}),n.jsx("div",{className:"hw-card-price",children:F.priceRange||F.price||"Price on Request"}),n.jsxs("div",{className:"hw-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:F.location||F.locality||"Gurugram"})]}),n.jsxs("div",{className:"hw-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:F.area||F.landArea||F.bhk||b.fallbackArea})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:F.propertyType||F.type||"Commercial"})]})]}),n.jsxs("a",{href:L(F),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:Te=>Te.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]},F.id||F._id||`${b.key}-${te}`))})]},b.key))]}),n.jsx("aside",{className:"hw-trending-ad",children:n.jsxs("div",{className:"hw-ad-slider",children:[g.map((b,F)=>{const te=n.jsx("img",{src:b.image,alt:b.title||"Homwisor Advertisement"});return n.jsx("div",{className:`hw-ad-frame${F===C?" active":""}`,children:b.link&&F===C?/^https?:/i.test(b.link)?n.jsx("a",{href:b.link,target:"_blank",rel:"noopener noreferrer",style:Yh,children:te}):n.jsx(q,{to:b.link,style:Yh,children:te}):te},F)}),n.jsx("div",{className:"hw-ad-dots",children:g.map((b,F)=>n.jsx("button",{type:"button","aria-label":`Advertisement ${F+1}`,className:F===C?"active":"",onClick:()=>P(F)},F))})]})})]})]})})}const Ky="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAoAACAAAAAAI0AAEAAAAAAAACywAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA3AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAADc21kYXQSAAoJOBl/7MICGg0gMpABROABBBBAoNf+rO9vENZLd/knyrmSDn+LrrbP4gtu6IqPzSGEBqJCxkZ1VjeE700QtuJ8rk7fzYoymKuOz3F8mJQZPeMVt7r7QEAAHuwn9rdxogLAZ0ZmsMktnVAdeTg7PUmU77ZW3Qyx0ei/EFsGy8xz2gYfo2T2gHm1s1VAVqEnZjFJ6tNyuICqACTkORV4EgAKBhgZf+zCoDK+BROAEECg2AF6CPOtQrgQv854b1HpCkV1NIyqo2TMFkQ6KjRsg/nP7fpXYXAcNAanV0M2nuSlKvHk+0ND/gkoxtQzRIlOayHB0kKoWGfhdAD8sf0H6E5lan+y59H91rcOKV0qehLUWP/CBvYw/HSZEVDLNyB79Co0oTfACpudbB85tlwnAQ3kK+D7BR7HmAXGtd6tPoV6pximDfx0lD0xOeyvILKZWGOR1N7TXHKAlV9Y295tQCaaIieXZwYk+fk6pK0usqquawkHQTKUPfu5vg1i6tzcyIIcT54y2hgBEQQ/2bPuBWslovdeQQBkDEj+4wHv2PfOMa0z1BCetsD6nSuoUQFnoUyKnAx2e3LN5g1XdIS57uxf3hkYRreBYfnj9oOngGNJb4I5kpb4r4EIKb+qiuxQ1F0jGQAayWMSSjyi8/Umrs8RtHpB3fnYE9qHsZXGU8DrmkiDHza3efTJvYuREUW/Lz9n77+Ch+aQtF0TE5GoV6zZxvFLUJohT2tSg0GQucjQDrX2c5dP6CFar2EhiMOmozUUxrqxViWpmR6EInQF43RCzO103Bw8Gu/OkEM1y63sacqie2YF1cjoqQE2ToMAFJYiJSmtowgwTW0JJzWnKWYWA2UycUXiAldYqzDSstUFONom9y/XVpYgYk2oFyztdLtzFirDt2OD2MUsf1kKCZbXZum2gzcgENJRzj6ZJmjvUYSDisd5gm/6TyQOcjdNtdVlxYCIYdQEwrn1NLmuMDaL6xvbdhQUDKpCIwXzEulLxQmxmeXtBZNbKZFu1g4eLPaEWz0F/lSy9wYVa9qAeSUL4A64l05X+XDelVQmiD6k67bEqGwp32eTfM44BzQ39Ify0ULRoHFu4XMH/OaymRxzVWURY1R7CJHoBAvbDvjA+eHQueksGcxvSh0MCH1EdQ03/SOhUpzpQA==",Yy="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAywACAAAAAAJfAAEAAAAAAAAEQwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAAaAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAFFm1kYXQSAAoJOBk/5YQENBpAMrsBE4AEEEECgOk/eGS8lanpaeNHmUGZRLVVeklRS9cl8H9vn2VoabkKAsvohpQxGtxZeq0OWmG7cmDNQNUjpZDG5e8sHVCwHOrS2jc4nq9ULizp9ngaDEZJehfgT8Bf/bon6jz4rPzxVmDV6zdusv4Ct+2xL/rXOZIddKFz8iqctnO7mfNR5jjGT86mcGpRKr6c5YNjlSYTgVA1tTyikKNV6lEK6S27QzJ4JL1O9ypnl4Bu16mKlD6R3RqzgBIACgYYGT/lhUAytggTgBBAoPHZap47IRQ4Hg9u0O9scpCGlLiywQuHfoWLWI8xWzb7L85i9N+wWamvtPBG4S9GNo6VfrYzhjvKBZUjwcATivHUaa3q6nD08rr2AngloVt6TNKZbgrMtW6jeaPQbWE1abD0xG+WkLXXvRPav7Spa+yw+1Z9ntt6lYd3yGcPhPp7TAngTVFADvkAvgdTrMogXMapEQE+R9+2MHwvwn31xDHmsirJsa5z/+ID8g+Otrlb4YTNm/QVfPKBn3p/8EFUo+52vMa/fM551SNKIXr8O4P1BpBuR3OK7lVU7txqN+gdj4prLkOnMod90UrFrsQCy3arRgfMFhOi3N6PV2fV60u6y+K7QI9mrzszOSb4tVDWgZgFCdzwOgRf+7NtO7Tr0W0N3rvetY/QaRf1DJu59KXXtMg5jaFiu1UGMlemMm0A/58cIteaYgSrC7EyIvjH49m7KF7c8maDN9oLE0+HeTui7TzOPXdMfKvxECMUKeXWzCf6ZnwIWA0a4n4hkM/NuzNMfP33BXf2dBV9dYVEe/BcgfYvBjujrh91ehoEbEyB1+pr+SOjxUaIrEmId+agerWENxuqvI1S/4rSQ80whmu8/fp6vmso6x+/nNlDAqYruUuQ/5E0ykZW5jn0bpe43/R3nAXUIhsmEqa/FVQLyf6TMrqPr5A4/OIEi/1lvRZAu1TKvXSQEvffXOO+pxAHkNM+7mCGBphjEz70RoZnIwfqVC2mHRot3NL3kZKpANUMEoKhrc9KgX2688Q3DJGWVgBYWKnwWElgyLSC/4NVOTU0NoNNzQMG2JMnhgu+egyZ8LSH5eAmhWVp++reie9tewP89MVlfFutxSQr5tui6mjoVY+DY2qCm85LvOfZeEdPZ7P5PgorVOUw4BXRReBl33W1fwYIQzYS8GPLbqNW5bzZshY861uuy+/37YOJrAYfDc5VXmvaSYPeJwxHP2oJWh8c1MK8noe/8jKojkiybgL5l86/A8t+10o68dMhCS0SIp73i5NVAvUBEUhth/rADQe9Eo7QqNzx1e5PSehbsXbFesyej2ui5VYJ4ezAlTWromtruqc/Q68Q7PR9k/U/Mj2zdLXU6cTWcHflLP5a2VQz7O7C+t2kCxY/OgHAWgziUN7kWXL4rqZ7FNYzdi7UEaG2sSrWj5TyZ2ACiiCL17+19fxTx90rpXMh9s8FVn0I7E7YY6d5rb0Vva9BXPVqEjQXBU7jLFAGL0rOGON/zRc1BgIhpQAdYmBV45SNaI3EyeL3s1eRg1Um1ViJjEZF8GiyVYTvqR6lC6A6j3JBBEwtxlEBmrz2i+qm8Cca+dpW+pMw/5zCs4H/9Bxq1RyOaHhtq/WWT+vPgPXpaU4YMSVzTrtrYrCg7QbqZFGuHf7PZ0KXuOJH5AOHLn0QVAAvatI7Ff5hC0KKSCxFMUcVfJLw",Xy="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAGRgACAAAAAAfaAAEAAAAAAAAGHgAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAArAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMbG1kYXQSAAoJOBl/1MICGg0gMrYMROABBBBAoNtHy//xpL+BV005da2uB8FibEpyx0i6gZ+cxoTNByskHj1fGMns5mSTZeRA4ivW3JWIiU5DmaL8aDaFEMMj+FkHGc4MTmL0EWofwoPbZxmnaPAuHelRdiwofFJtrEk4nNA54Gv6+Xz5q4oeJAblByJMJNKEM4ZWOZPpnyOrjOQ3dCEKFs4M1BwQOgDlbHULxwYzIUqRJCQgwh6I639o6C8nQeI0xMOH/LRbWGQGHzf2IQ26yBbeUIaa9Gu6QNCI0fsJhRGxoGE2feMolJzcPJtEv85fCpvKoyCcaqcZnDxaphIKl81OfF8k4rlTkftpwdlTHwao1iIAKsnPycD3v0f9p8evTJX94lkBblYwU40ejDU/mHIAleFIoTGLCX3zq01TVVd0Xp2huvXgwATxzpw+atU7xkWNaEf7toWfkL1lr+M1oieLbXnb38x4LY/2eqE1W5tcVGh6pbHslal76xulIgHhhf74sD7ZXbJ6NOn8V3lwuXiipTghp5E+dfweQUjsKTS8G3+oc8oL7gBPGzsCC7Ty2rkKx2Lk0PFRW+fI63Ow8wF5ItOuGtPs7zmqJfKxgdCkaMoiiWiDVaQdTS5n/GVI9eMeGRX5YVuNcYiPR425IwafPlvY7bheLYobQAGjBhEOEyLg7rlGdr6OATWsKu3SbpprmuHzaBTJnxBHd3SKuRAIrmPMOSfI/bZydF8lKlrv5L/4sxa+LK3zj+uM0r6mypD7YXxX73wjyGQL23hFYkbMTiJNyHvgkt2f2k1EZaCXg9zTk4XPtJbwyZNaubGpZH/Gs5ToN393Sxn1OZZLbKgMRaE/jcoq/oiwcfDZB93bGV4KlxCY0psuOOkOUwL9IsmriLr4Jwya8BtiWFLC6pTeIb7b5Wdg5IZnQcAq7XbQr9Lb7mVdehrrM7dCW+5mu0DZO62eL+H7TyghTMlDWaQY02MUQkIAo/f0zt+QAn+USE6hXQrKA/G8w/gPu4e4vRjSxNwEx1yYXVUcyqK7apo+idrp3VjGXL5a34WU2CvE/hTFwDbWdd4PqIHNdGcF1wnL96bStttvvFW6+wffekXtcUUCuy+k9L5JSMSgP3kCL7TiwFgAUZw20b+mBWwPid6VILcFKm7XLQDnjPns9W4srvM9K5IVsve/R+6+n/XEzR/WpzWZI7d3RIae1H7VDEGjJ4bZOiiAr+prstLxKNMUqA0DA0lx//As2hmMFHURGb4ksbYCl95MRD0p6HaCPtkdOOagG/SZ9ANgajxhBOvEx8GoOtyxX1jGlZy+XSJmruTkhWX7zMp5rCofXUHle8p58uBiT1xIGxp0PHed9PDb+5tVFHZzxNrLuCBuCsdMj+yooxFt2MwKn5vC/RalVSKtPS3Y/49s2RXiRFblQOdBnIxnHktdGIQd9esvzvOur7APPnDS4HCTqgKBMDYGm8HELritbP6qNNf5leP/W3SbHdtQ9/Oqy2kr+Q/DxgkYpt7FHfLZ3gS+nufw5nJfni2OG+I3sZGdxUB3TVja6EaiobNb/PqrOEkJ0lYxBeNjV20F1OiP6LqwjDk0ZlTG+3Dpy/Mi06eDvR+VAy60xC0+w2QPHxu1PwWxIr9fCRPPi9pFoqgBojz+LYz1HMl4mdv8FVMj2u4aJCeZBjjCyJwnDm1Jce3oPadVpu9nPYaNHieVL5OtBsp7ffwCsrbuxiAf8RtVhArjrJVV64K83OJZi5/gCDpPjQbwIftfvLDJab9N0HgQaxFwiBfuxQv6Rl8oBjLVuEqI+6/PoI12qgBF+80pTxwxbTy/4X1NFFYY1LjMkmGPE0uDV+QjsyTyplpH39/x8O7O2/SKRYuj1JeZtdGESiL3eRaCI/33n2VS2p4ptYyXszcSYLYLIlIWazHWw3iPNhaOE4HMh6VgARh3i+JqF/GrSis84Of/54KWJD2Xg0GQjL/xdFmGq8a7MfkWoeV+M+ed9eLD8+MBmHRxUtGMsd4qqwxF4c2Y0exuRD0G4Vgw1tiihIRs71FdFb4v8o4XBkW9VN/KhIodE1ZBjCzhx0kps8WNWWXJmWO2c5NKsX/klYseKoaGBng0mHpeZCFS5maK8XTx3cLERIUsRqkBwAYnAG+AEgAKBhgZf9TCoDKRDBOAEECg3SuGKP+8I1ONpmimVw00nG1fF14hXu4ERHojUiU2HFWSBbmCWdbNOSdizZjf749/3U1fkhhfHEwGhBbxf8LQx+hKAIjKlxxF44DRzhVxrL5FpjkxFkDYDDg8NBnQ0yfHpd2mNLfNHqCUt4PonpKKuVY936v5mdcuDrZ64O5rLP0IjXgOGwI82T90sG3UEkIGLctVdG14ZyazXQOYh+JlQRYhjgKM5wxg3sqgXuYCkSz1dGJ7nJIsAeHiWxEdEmVN9TOyvGe4VDkZIyvC7u2XbsMN1mIPBDtxajVbUf911aHOS5F1oIhY0v3Dq4J/ULTza10G0NfqaU8QbnTyYkvmCcgF8vxoPlkiN3kMXCYfsLKSVG6rmgxjK8Rpf5//+QOfHNYv0WFVtYLFXTj2N5EI+NxPUQX3TTFsL+6RelpY0MrpGamHbN/8sTAJk5RU8mJHqZjRtfoYi6bM/o/a4DRGu9sCYtsfmJO9av6p/kpyAeSJZh+e/93Nk/wI0z+mz+88v611zWr4GA0YfNehbqP6LSNBln6WmC0acvJnh1Yz8sxTXibYeXkrvu1DwGizQ5hcIQYJBJKYaYewlL28E7YnD2Pfxjat/n7kC+Wg0p1U3azZOo/n9oDkAouKVQTmxgULOVvKr8thrXC9vVrqlsb57dNzLZnU7nRgQTOWM9jQwDfna+d8wnvLT9Ne9EQrlYQBMQJVXepg4hSHRQfGI0jvE1h9iG1Bq+kiUQlQ+KEXSNoTenTp+yoamZdEehujBb4ThrjvKVtc3azo2qdcNMjeJ5o/GQFd4CPpoHzPGt3VxqnBDSBG0Gudes4/j75G6DjU9nPSY2G6i728nOAZieWhKnvqHQlnOnZEWRSZoWPqfzjH16Ynm6+tHwAdsteK12KH+x1wq/8fc9RFZ7pQEOynGBhEyVBsmmmkGpWdzgFAF6Qw2wCpfoamNr8tpjtpWIIyC3+QAf7g9R6Q0F0/lMsOMbjq6HBTYrv+OikBSwgmhmYPyTaLi5wtKacLgiCx9QSEn33+j8y4iFSuxk+GuT48EIqkVgH0jvEpNnp4dL+0ylk4oWplMzR+iLUERVBGvEp5rwH7PkX9rX8tFcXUAfgLcyGZGyY6WOpq5E0qJHy8YopxBQSENsKhFYanjKQFc3OXZ492BPvkD7XCTitAFn+mxfQK8afPuu0tkg2PBXigMROQsBdLFmHpM5mQdBdjd3wWir3+q8bIne6HTKQHcLbSS/BATiixxMuWdbW9ki13ID42taJZs2m9I3pUrN2w4TdTEoFKcOPlpavCxFcikkEjRB1MhL9mkHAU5o9Aedqa/21aBbKrBl4Q0k7JmnKRF+Rb4AmMw7X6sGHD5hMdGuYXep1NnSJlzD6HvZhARCJzgDvPZ4Jx2puZ/VtW3OTKuTNzyyC+/ANfVHbiYLkb2rwOIY6yyzcmPfJ2IdiEU0JXn1Ekxk8l9HhGAAslJUhB/NdTm/ICpXnT5sWpz6eVrwVX3gIpDzjNRnQbDFXiYuO8dJNQlUhEVMnhVVvpnPX7t1Ud3bvyzVUL69B7c37z7yZxzBSUUfkTB6zl6raEs0fDOKYV45+1e/yT8uG2VIw+L5DvjLS/CkU9t1v3Lu3ncnO01DGzuVYzSxZUc/opxsgIi5Aow3CVxChJAOt0ziYpH/EjIKBAetL2jr2ZAOBn/D4b5FcKHlCQGm9rnrsGtL9U4cs5Kyw8M/BXPuHTxGXtwNC0A7xzULUrX/F6kENQDBrSkArPI85hXaIcJQyFPzDnhNuBQUY77+zx0aPHEN0ITnZT7QPaRPfdUM47ldyvu/tqMtDpSEWvLJX9Zfwm/BKxcAuG6CE22I0xYSYDmdmq3hIOtrdCioZ6leJBy4rS0+sFDU1n5MifB3Me0UQGjgJDk8YsXXGnyv/YXXsKXQhktBK7uloQouEArIGOhxYK9AdOm+oGP3h6Gc8Vyw//JfklNRd7e2NXG7iB4aZPWtSi4ukOmdsbgr0hW4Lpjq9RzgJsr/yYE3CSDCMfJlTDAcwbiPOY4HtFiJnkXdMpU5SbmbKhRnJwWDCcYf7lo7f8",Qy="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAFhQACAAAAAAcZAAEAAAAAAAAGhwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA/AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMFG1kYXQSAAoJOBl//MICGg0gMvUKROABBBBAoNzPlcdBEEEDVJnuiNEyPdUPh1D17yYOiwwITk5pZQPF2puGWU0UsUVI58UZX6fa1WWOl3m8b0c+z2a6Waaz22bLVfCxZ5pXOoKm370l9SZ49/jOa6iu940RhQwAzCpsXNhX6Ho5oSdTpTYfQFqveq6Ik3H413RRV6hhBgbEjG4A3FveJMPe5Eib990IBhxn7LQljie8Ayx2e5Ogu+jJPFHj07kmCi94iE9nEg66X4uxdtdrJf9SVCtQG1si5GeFxt7Mi0TZ/4XwdlxVmOmF7GoeoAASRXMwb7CoYQxPB1P54KaGEjfXqHdXUbl8qYkDR2kWKtI5UVZt03be6xg6D4HtZyMdEf6w0tpZjafeiPjd88ckp0386AtCEbIYhWwb8YcNKg56XEG0e/4n/ukz2HyL9L7VRzI36aqAjrcQ6xKoao+ZfHhms0iqCfYlzygK58xcRLHQo2TX51FuGq/SY3ih5csT84gv38+gpqATqXN7cLvvz1mmkLhYPlMxE14JCWCrUAPMkjkf8mslzya5DjNNGia4AqgpuAc+i7jzkCGGvDTjPElsgHh/LBQAOXSRNW39UCVediApyQoFGZjxY/3PKZuyGJMC10HJMW/CcBJRF4Xh1oRwpLYlBmeIk6tLj/A/AAkiJNlbdkQDg6brAgG6g+s2saoiImylp9dwwZvxaZOBcj0DXj4Sbl7FbaxoLmcA75yk4/vP/TJubkqCTSt8dpMEwWRTJB+4YDivnGfYoXVtVokgMDps6zify6yQbZv9JBpyCVDQFDGwcwT9paTtbVpf0jxEYj5rZ70dvfHAZ6vPVyplh4ymJCMDESg+iDO1CjoeWeqxb63bOdJ513RWzSxIh5JSBl6hFOQT+cx6k01U2C8RAGXieH89BFwWhXkxQBMCfRECrO5XSTICMxoqsk3ifUz38WtXed6wJmtJVmM4hCGV87oJnpCK41/a+Nes4mJTLR/yZJ8at8Qle1Zn+knoFw+qjXmBwSNvqVwCI98VeWPTgV35drY/36M80IbO1zJE8m9Ka0l+QSKsnZ+366IGGZNOje/PiAjHGuiEex0F45MsReq3vavV0ZnF1gSbtwFr4F/X2fTodroOZfhvVsQwOYQzz199+ME6oof5Ay5fdzUn48V/iKdgwOof59puBDjUO6v920lQ8S0vJ0nh9L9xi0U8BRYDGD9qnLeFt4uSU+Rd61bsiBDsgY6VEaxDYWBXbKU5aaEmcotZVzTGaK1sXtPIXyQ1a2VXXYIliND1PMwieFBz7QYa5K2AcrlcKlKJBTN7+sutsWg3axJp1YlTVVkO/tcF/g02ynMc+eZi2lxDUOBw70LMk8H1sKHX/emW1a7Z6AsDsoCFEGlyfPv7xJFllAHEOMcpvSXJhk8chcUQNgo8a4/XAI+4fsTHbjhkf2xf3KHEFWV6FdzvaWEFhtV+uDN/OE+A6IhNbDNz8IgcfKTLNF9eiHGa4d6PQpoNTaTqkzE1We/xuwpcRac0AuhHQBj4+j+BFtxukCK2Two2WcCSZNg1eYdtL5JNpO/Lji6PKitVBEIq9Y9VJ+R1Mm6+MDqbX0JpGl4ikix/SfWnmYaPSKscQKCcFqG0ric6h6HqCSC/32fCdhbciibTuOQUR7zPmIM8t7cSWkWvbIqvIM1oqGf2MNtVLvbgOsV4CBohYjzyEH5lXJVLq+cXoUy3vpRg5T5X1zPSW2v/gxv32QlOT8rFLWTKVXwHOBPKejx1rSEDljMPLi+iW6SJlw+bbXJCqPJRRQ+I+mzNMeiRiK9rYL+M34nwEGiL2Y3fOcMJMvJK+Ynr7VpV/1bWCIrfWu51HUNagaaUf/5kfWLq6SK0s8jLjy4SAAoGGBl//MKgMvoME4AQQKDdLANY8a5ihC48a+vLruZGsFg0HSjw82XLtKa76l4MgvsZg9+e82JsgiJ40yYqpXAKUr5jMcxbPLa1aezsLhLUU8xDbJmA2OfB2qcG5GDKwGrmvBOT7XCquIoP0aWnXi1PDbtjRScSFFQrnk2ltlNfBHOBML0vZeE7eRWrYCzA+mzNOttjGCWS2PmQ0j3IHTmg4ttly5a1vHaRB1ZfBEkRHyK+ePREQIndkEfigjjwO5O4zSh1lceAt78FQ0qYTW2hVbUKlkoM4BS/FlGG6ClLgrhIJ5KQAIBao+KIJatEoQ1V/mg9yU+j5JSapy/DT/as9tD2cXgE7LYt2r05PVEBf+80913xydEWHFXZqiZ49iN63sOwn2B0OR2Fi3VUfhrGz0WZhtlA/iX/Vg5bD+palvqcFo0pVsNLcqIDUm8I7WCQZbAmImjco1sLPJfBEWcl9Vq2ql+bSO40lK3Jf7ZtAQfKTkmzwVwNvOZN9/JoGmEJX5u+21ti7h2aZ4XSYqQZHmx/F/jh18jMsTi9fukpC4adDX3znpRFThlBrQIE0db/aO9Xpk0jxDn3FxuGwp0cQEwlOLYxURRTMdDbgc5+VUgaMOol8pXJFGGRTA882qtCXTiooNPeFN4ycNVVXKk52BwlVF/jCwajXcYu8gW5dU3jqUqAPGt59JMuc75xGJ7GEHvg3YisA4dw+s92/n6fSBJwA/2kjt2kT28RhiVn4JK5JICqqsJ3Brpj01X9pV51NMwzYu3TYLJGBmsuZtQsbQLKCqP4IafF0AT7WzxDGpoTXtUIk4kD5SKiEEB3DsbenuFg/JUts4n97/RmPomunR73JyNnYJNsnjH4wkwwyI7LFXDgcV88DRRT3Iue1NMYpXrEEftSiUOAub5CJng2sjG2DHySt/6bzMN4e9JLdKuQWAbtS6OsCqUOx+viYC1J60o6eERTtVjERKLGXN3Gu24Lpo0KrRt7AdmT+dedcawIrrOBxmK8E804X2oKotOOM6/ON5T6p1/XynMqsOYT8e978BW2ZPSHNyzkhbUZ3jOoQVp/xjE2ujpv4ZiIZJcekY6p2TDWL/5XYOlJ9bTNACxLDt1UHFMVsbstNwczq8SK0PbgLneMBamWM2yzZe1fDzf48qoLZ4kAl/rdmwkdYd57H1Af+Nt+ONObw4ah/Vou7dYwaPMY3jvhmLtCJQNst8x9VU7El3/2Fnzy/elWaH3+XARG8fdRCGoXHxMUKtWzgNwpwnc20flCloJYopyMvTni5F/0pNMd7yZXL0Rc9Ce25KzaWIkhjC7htQZjojFR9CqSeCHV3XumzpWITIj3ruoSeZFOYokHRDQbon1hqQTpoP64R+phdnyOqnlRDJhfz6O2E0Q3yqRNtdgmUqpE60Ir4VB+8o+I3Uflx+ahPERdy3eQdQSs8cxZC8ou2pY5NGqr+SJDfsaUBDyjyl4pQJI8+AS4Gr34T4E6hj4BZjpkpW9a2qbjTGvVPkuW6ZyVVQJCxsQYEPXFzZi+WJzeVmbwi8JdkVjNRzdzcVoFSfOuFwl22rzKXlAKE2vz6TAywBzGf1JUYbnsD3PgdEP3ZyCPm0ybTo3B8COc9Q8beDSELJEeP2jPzY49uiOr/Va3Wa+yel1YMoPFIKlTeGXbPHD3N6oHV86LdL5sh+MuuERlO4x9V9mUMwCYT2/8cBpDFx85nUAH/4UR/F+PtnCrya3JIuqr4nqGzVKBNhm45Yl+HP4cTgqDAomfIkjYnbn2FsLjJJbVe+1mFTjzIb5vNrQDKejncZOaaoaX/TKBQvsz923cA8HBskOuImA7hRahRpY+VCF7SRZrywBUV0NO79u2L0Q5KzjZa9IUkSKz0oyPCwrySlyEOUVAWNtKA1G+sWDvJO9QhgYsodzyAOmhWL5wek3O87lbR4CIV3E3yAApjPESoiixidoTTM9zCWphpe+Z5WAeAwTRWjJx9PI+tr1ZA0gRmcHp1Jx7x53DAbt7y/QnLuXb/ERSDpNQgm3rtFK2UHYswgF2aMXCjkR1KCKj/A4eC0FbwZzCYYIFr7GX9epy+h3pftHHR7vMfqFwRKfl6OmLKRQA5efu45aSzX4GunRaAcPOXijq2yx8bVcIg8rDQRhY9Z8XckDIxJ7pabo1ZrGp8E/KDM1MrqDEFGn3wjIWavVfZrAfKo4QGg3pDyeZsGBjKyBmIosZlj99/8A=",Zy="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAE5wAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAABVAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAATvbWRhdBIACgk4Gb/UYQENBpAy1wkRwAIIIIFA1/7S1hAQbgM6tsfIR+WZ4mBsWILYI4fSZfdrILAqhSRq0TCSfh4ly+WvJH2UQQmJtmJgSZGxGiKUfdGbZfI8bourfoFwGzt7lDkVF0JFqinz2egtYGW8p2ziHRrm6cztXUUVDJ7kifCblyVuPzGDNmZg9AY2sgXV6fGAt+acCIubv8KAA8db0udbboWmHP7x5yGnFU/2OlAX7Rvo5bdHuwhDccDWMm9R7lJW6v/ejbhL0JJa46jwhhATpftcuzrpg7Q68EKv9aTrOLv9tts4GckwW8kylBXlZpyxi1IwBK2yzq9ZhPoaCNs1eVCg+komI1918AN0B65JUBs6VNWB9ZlsLqQ/umaD6JVfuEyfR3q7Za2lJZbZhecxamE3nvCBfRIY0qcxGY1ht5+YeaUhLe0SZrySKMOqOzDtI0EZv9xIZZySzkurs2+eWULcYVVdSK9ny+RS7HvMG4wCGzyCApIHDnfeOhWC7QK8C+PMUOy/OUuECwr92h1oOP3m4AO6uoMjPI4JIk2drvNxNS1JoCf/X/2CSKE55zAoiazDueW+S3r2JILTK+QxbKhwNeVSSZ+vF3UsZT3H50XKppLdyb6KBug6+nRARnNqOWn3kseU1y3Oxsin/8tS7rzMfEq+0OOkMsWqC6PmRUbQY4gC3DtR7Yjlc3weH/wIq4wa5rcnNnWvC3jVU5S6ih9zjPjYoGdV8nfZg1kAmVe0hdAf7ZqfBDjwKj9Ib3pxWVqRm3jeC3oJwjv1HGD3Y6sw37ynlApJZH5XaobaOf8tRReyXVOlVDZyVNJJVIqYGA+i+nF4NMPOTP97VXZWWSPc7XT33Io18vntvThfkeRWjwm2nYMscWPKpx17nu6znGy/TaIeJwjFtDdOxew5D3+0BNwb12toXFj9UyqfqTl17eNXPY/9oYbZ/FPVKOJmrfEQxJiQ29oL7SH96I87xs8RXdVZwRZrjY7z5bnHRTX7CdoBPJOX7WCIe++SHTAUlORiHboBzy2gF8uFvZgfocZmXLibbEbVH/ILdnJgQaRqXgf5aGl5p/XmrZhbfsJ7AAzR6GNPpDoUVRoDRUm307F8zVC/GS+AD7vbbjorpPKIezS03tCv4ZdaedjGJ9UbhuEMCNqXCJkuPHOhXX3hsy4IyX9NGoEvfwMa44rAhz66kE1uns9fFoY+vVFUnCnT53b1IbVFaNDt5OFJRcSIex1x4GWb/khBFUXVnUc2EYjEjmaleywhOZVX/a2NY/VNDjJDmRG9p+BntTh+g36eU/kTB87Uf5RLA4339hSKPQfV+doqYjg8kcYG4HyeKElk0vYSAyGGhfKscboZ/hZX7ScMFQB7TWx/vb83oFOh4MEmXr0p7CsWsKgaPJix52Of0Oi28woAkmJXltfLA+0ahCqk3UbfJkZIrMAyzm6mEvvkUcYvyhlTPMq9kqivsJKfdmCe2rKmZCxFVHYZBDee1Z2SIjDjK2h6MYRlcJbCk4WRPjPdXfAe2/8Z6s8e7JfbnX9CIxvX3HF9UK3XnYcein8g5Q5tMlJx6fLQJUtPAtHlPMc63bu9l8qZZ4lfiWSeWPo3SRUB14peg4coMzrLHN/ABljlNcmqXk4K3qhG0NGY5D6qwGXVQD1RerEzD95j3TW0TYc=",Jy="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAFggAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAACAAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAWKbWRhdBIACgk4Gb//YQENBpAy8goRwAIIIIFAtF680kfPQwaI1Kcywl3BeQ8z4QxUTktitnzjlfA6Kx9mHBuyHp/L7cZbu8oKuHLSLAdMN8Q0KQUP/mNETsM0edaz4uLHLl4UXjQ02eDbZV+0v9LB5reip1J9tl4rEm4+X5D2P4nkbRzucuY48SogddPfeXU2FN1k4JDF3JREBrfVjOSa8RfnKnzfLIn4JENnpCGcM7WzQCNO42V7j9Do64SdQfNFFYKizS67DanRpdtSpl4EDdOOe3eqww2avYoG4bYFPRDQ0is5hAEsxDHG0Q9TkGSdgeiVDwXfj3pHD0mc+SL/mm7LV91g/e/Vv3hCJAF391iq8rGID9nn3RPYpOOLj8AyDa/ttRv8x1KhLosK9QqDE1umpqmrkgT3VLeHb6SBlriU5l4OEAeWfvwd+x2h/A0D1udKyfpy5bUmPEf0z2nsjWVajGCkeiTKaDV9NmRE/PfSk/j3LqkbCgcdEpW84fpWCnNmFaLcE5bgnITFCvfMcrGe7Yr9yLzextWVQx+fZ2Vsb0rYZrlB2eTCc7jJX6vfdHE74n0HQkBQwWZ3lWt+NmR5ltECi5nrcgPOybPKTcuktkZ1GhrrEOov8/Bji8E/Lx/QfJV3Dva78zj3bXhVDzNwTwMYd11/iZQtQNooFySfYPw9fBKJDJKfg4B9oTgMpsX1jgsGAUB0HTevhh49nkpR9eisMMS7AxO1uEXqmGTBhItf+WzdugnN3AZpByLNQKfR7irNh/Bo4WR2ZRwT3T2l24QqTffXx8AN2lLASN5DF38FYwdsV90K12J36ksBMYGE15B5Is4z0CT+Udw+LrPjQoGxrmjE8OmfvAtd9US6EiuK06N4i3/gBTeNY1mxrrFMj+vmGfCoFlh89HnkrANfv2F3H5mdVjuU2dz8dkJcoxXGw3R/WP2XOCaR/yo2J1UC25JfBaHn4EDdQiE06Wuxsk/tB4RLYstIxm6eydHSnZWoHDtQ/88rP/7U6cGtARUjqnMu/dt5aXAwDyice+p0/O3bQxr0WPDXWgk012D5Jd9GihHDhtT7eP1accWsveWP1O+vrl/z9zILMiMKrIa6YbFio+7XsQC4mu0NiaCuqfDWT00/ERd7ahPA+u2HYJHS70YY+qPuAmXnyc2L+g5IY+I+wtsbP39aSsmZpa2brWgo3ZkzhalNbwpoWabIR0J5e8ZnFAapozLgCOifvDgFXtRKoAJ4WFOFgYJgk76I1n6tc4eM9qO0U9jFcgOMj3CFWU6UvdUynL4haERD0j/UMbpbFnFWo0mnjSkwNG+CU143UNlmrFPgmQNEl/TWtEtAegaTByBHSRFYNd9Ap5wNG3US71VX6O/gbknzbSZmMtCYgesOZ8YlB5d7ix3zlI0GQ/uSn2wbVhO+2uwVyCEPFUtXT31YrR/I2TL/83Tm0ADIVeee14N0dLNBuNEbwS/O/HbDFtn5MQcYXJT0O+FIjARwdk30e5yyArcjZ13jhEEFATSK8KBpwYlv0e8fNmyJ3hKmnzAw16uwdRAv+WT2eTHTbPSHnuThy2uUWRKqDP6IOXqN1ES7IOhp8rN5n+8tJL7cy9RCnD9+VJE7W0vzyg8CwiJIqa2R42dUgFDWkbgB74e1gp/vRsB3qabyvAEU5smQwtSF5J1vtGMzTWufcOFGKzyZXlLO4EySkJ9xCjw5rADyfmJE0G87SiKQj76gotreVUprOeBtLXKk5qzJnCvnSB0uhZqVo/ifpihcY30APByII9fWNTFRVbC/65dcL5W3nKW0+PQh7VuQ8i5muIfwGw0C6okukOjnnCLZzrmJDIXHNJi7qkbhlsI8HmkuonLiFmx3GP+MjGtC8gIxi+pRkA==",ev={dlf:Ky,godrej:Yy,experion:Xy,m3m:Qy,max:Zy,trump:Jy},Xh=12,Qh=(e="")=>String(e).trim().split(/\s+/)[0].toLowerCase(),tv=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("").toUpperCase(),nv=e=>e.city||String(e.location||"").split(",").pop().trim(),rv=(e,t)=>{const r=Qh(e.name),i=t.filter(a=>Qh(a.developer)===r),s=e.logo&&!/via\.placeholder\.com|dummyimage\.com/.test(e.logo);return{id:e.id||e.name,name:e.name,logo:ev[r]||(s?e.logo:""),count:e.count||parseInt(e.projects,10)||0,listed:i,link:`/search?q=${encodeURIComponent(r)}`}};function iv({developer:e}){const[t,r]=j.useState(!1);return!e.logo||t?n.jsx("span",{className:"hwdk-mono",children:tv(e.name)}):n.jsx("img",{src:e.logo,alt:`${e.name} logo`,loading:"lazy",onError:()=>r(!0)})}function sv({builders:e=[],properties:t=[]}){const[r,i]=j.useState(!1),s=e.map(h=>rv(h,t));if(!s.length)return null;const a=r?s:s.slice(0,Xh),o=s.reduce((h,u)=>h+u.count,0),l=s.reduce((h,u)=>h+u.listed.length,0),c=new Set(s.flatMap(h=>h.listed.map(nv)).filter(Boolean)).size,d=[[`${s.length}+`,"Developers"],o>0&&[`${o}+`,"Projects"],l>0&&[l,"Live Listings"],c>0&&[c,c===1?"City":"Cities"]].filter(Boolean);return n.jsxs("section",{className:"hwdk",children:[n.jsx("div",{className:"hwdk-glow","aria-hidden":"true"}),n.jsxs("div",{className:"hwdk-wrap",children:[n.jsxs("header",{className:"hwdk-head",children:[n.jsxs("div",{className:"hwdk-eyebrow",children:[n.jsx("span",{}),"TRUSTED NAMES",n.jsx("span",{})]}),n.jsxs("h2",{children:["Top Property ",n.jsx("em",{children:"Developers"})]}),n.jsx("p",{children:"Partnering with India's most trusted builders to bring you the best properties."})]}),n.jsx("div",{className:"hwdk-grid",children:a.map(h=>n.jsxs(q,{to:h.link,className:"hwdk-tile","aria-label":`View ${h.name} projects`,children:[n.jsx("span",{className:`hwdk-plate${h.logo?"":" mono"}`,children:n.jsx(iv,{developer:h})}),n.jsx("strong",{children:h.name}),n.jsxs("span",{className:"hwdk-count",children:[h.count>0?`${h.count} ${h.count===1?"Project":"Projects"}`:"View projects",n.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})]})]},h.id))}),s.length>Xh&&n.jsx("div",{className:"hwdk-more",children:n.jsx("button",{type:"button",onClick:()=>i(h=>!h),children:r?"Show fewer":`View all ${s.length} developers`})})]}),n.jsx("div",{className:"hwdk-statsband",children:n.jsx("div",{className:"hwdk-wrap hwdk-stats",children:d.map(([h,u])=>n.jsxs("div",{children:[n.jsx("b",{children:h}),n.jsx("small",{children:u})]},u))})}),n.jsx("style",{children:`
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
      `})]})}const jf=[{id:"t1",name:"Aayush Gupta",initials:"AG",color:"#F59E0B",platform:"Google",verified:!0,rating:5,text:"Rajesh ji is awesome. One place stop for all your real estate deals. Good natured, an honest and god fearing person."},{id:"t2",name:"Soumya",initials:"SO",color:"#E9D5FF",textColor:"#6B21A8",platform:"Google",verified:!0,rating:5,text:"Honestly, had a really smooth experience with HomWisor. The team was friendly and actually listened to what I needed. They didn't waste my time with random options."},{id:"t3",name:"Amit Kumar",initials:"AK",color:"#D6D3D1",textColor:"#44403C",platform:"Google",verified:!0,rating:5,text:"HomWisor made my home buying journey smooth and hassle-free. Their attention to detail and customer service is exceptional."},{id:"t4",name:"Neha Gupta",initials:"NG",color:"#10B981",platform:"Google",verified:!0,rating:5,text:"Very professional team with deep knowledge of the market. They helped me find the perfect investment property with great returns."}],av={Google:{letter:"G",className:"google-g"},Facebook:{letter:"f",style:{background:"#1877F2",color:"#fff",borderRadius:"50%",width:18,height:18,display:"inline-grid",placeItems:"center",fontWeight:800}},Justdial:{letter:"Jd",style:{color:"#F97316",fontWeight:900}},Website:{letter:"★",style:{color:"#9A7418"}}},ov=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("").toUpperCase();function lv({t:e}){const[t,r]=j.useState(!1),i={background:e.color||"#E5E7EB",color:e.textColor||"#475569",overflow:"hidden"};return n.jsx("div",{className:"hw-testimonial-avatar",style:i,children:e.photo&&!t?n.jsx("img",{src:e.photo,alt:e.name,loading:"lazy",onError:()=>r(!0),style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):e.initials||ov(e.name)})}function Af({items:e,limit:t=4}){const r=(e||[]).slice(0,t);return r.length?n.jsx("div",{className:"hw-testimonial-grid",children:r.map(i=>{const s=Math.min(5,Math.max(1,Math.round(i.rating||5))),a=i.platform||"Google",o=av[a];return n.jsxs("article",{className:"hw-testimonial-card",children:[n.jsxs("div",{className:"hw-testimonial-top",children:[n.jsx("div",{className:"hw-review-icon",style:{background:i.color||"#E5E7EB",color:i.textColor||"#64748B"},children:"“"}),a!=="Other"&&n.jsxs("div",{className:"hw-google",children:[n.jsx("span",{className:o==null?void 0:o.className,style:o==null?void 0:o.style,children:o==null?void 0:o.letter}),n.jsx("span",{children:a})]})]}),n.jsxs("div",{className:"hw-testimonial-stars","aria-label":`${s} out of 5 stars`,children:["★".repeat(s),s<5&&n.jsx("span",{style:{color:"#E5E7EB"},children:"★".repeat(5-s)})]}),n.jsxs("div",{className:"hw-testimonial-review",children:['"',i.text,'"']}),n.jsxs("div",{className:"hw-testimonial-user",children:[n.jsx(lv,{t:i}),n.jsxs("div",{className:"hw-testimonial-user-info",children:[n.jsx("div",{className:"hw-testimonial-name",children:i.name}),i.role?n.jsx("div",{className:"hw-testimonial-verified",style:{textTransform:"none",letterSpacing:0},children:i.role}):i.verified!==!1&&n.jsx("div",{className:"hw-testimonial-verified",children:"VERIFIED BUYER"})]})]})]},i.id)})}):null}const lt="#D4AF37";function Kt(){return n.jsxs("footer",{style:{marginTop:40},children:[n.jsx("div",{style:{background:"linear-gradient(130deg, #000000 0%, #2a1a05 40%, #D4AF37 100%)",borderTop:`3px solid ${lt}`,borderBottom:"1px solid rgba(0,0,0,.1)"},children:n.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 16px",gap:16,flexWrap:"wrap"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.25)",display:"grid",placeItems:"center",backdropFilter:"blur(8px)"},children:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[n.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),n.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:800,fontSize:22,color:"#fff",lineHeight:1.1},children:"Looking for Your Dream Property?"}),n.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,.85)",marginTop:2},children:"Experts online now · Response within 5 minutes"})]})]}),n.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[n.jsxs("a",{href:"tel:919090101401",style:{display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#111",padding:"10px 18px",borderRadius:10,fontWeight:800,fontSize:13,boxShadow:"0 4px 14px rgba(0,0,0,.2)"},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"1.7",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"Call Now"]}),n.jsxs("a",{href:"https://wa.me/919090101401",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13,backdropFilter:"blur(6px)"},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#fff",children:n.jsx("path",{d:"M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.15 6.45 2.15 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.02-5.14-2.87-7.01zm-7.01 15.23h-.01c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.68-8.24 8.21-8.24 2.19 0 4.25.85 5.79 2.4a8.215 8.215 0 0 1 2.41 5.83c0 4.55-3.68 8.24-8.21 8.24zm6.91-6.17c-.38-.19-2.24-1.11-2.59-1.23-.35-.13-.61-.19-.87.19s-1 1.23-1.22 1.49-.44.29-.82.1c-.38-.19-1.61-.59-3.06-1.89-1.13-1.01-1.89-2.26-2.11-2.64-.22-.38-.02-.59.17-.78.17-.17.38-.44.57-.66.19-.22.25-.38.38-.64.13-.25.06-.47-.03-.66-.09-.19-.87-2.1-1.19-2.88-.31-.74-.63-.64-.87-.66l-.74-.01c-.25 0-.66.1-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.65 4.06 6.62 5.69.93.4 1.65.64 2.21.82.93.29 1.78.25 2.45.15.75-.11 2.24-.92 2.56-1.81.32-.89.32-1.65.22-1.81-.09-.16-.35-.25-.73-.44z"})}),"WhatsApp"]}),n.jsxs("a",{href:"#contact",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13},children:[n.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),n.jsx("path",{d:"M16 2v4"}),n.jsx("path",{d:"M8 2v4"}),n.jsx("path",{d:"M3 10h18"})]}),"Schedule Visit"]})]})]})}),n.jsx("div",{style:{background:"#0A0A0A",color:"rgba(255,255,255,.75)",borderTop:"1px solid #1a1a1a"},children:n.jsxs("div",{className:"container",style:{padding:"36px 16px 18px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:24},className:"footer-grid",children:[n.jsxs("div",{children:[n.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:n.jsx("img",{src:Fr,alt:"HomWisor",style:{width:145,height:"auto",display:"block",objectFit:"contain"}})}),n.jsx("div",{style:{height:1,background:"linear-gradient(90deg, rgba(212,175,55,.4), transparent)",margin:"14px 0"}}),n.jsx("p",{style:{fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,.65)"},children:"India's leading luxury real estate platform. Buy, sell & invest in premium properties across India."}),n.jsxs("div",{style:{display:"grid",gap:10,marginTop:16},children:[n.jsxs("a",{href:"tel:+919090101401",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[n.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",color:lt,flexShrink:0},children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:lt,strokeWidth:"1.7",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),"+91 9090101401"]}),n.jsxs("a",{href:"mailto:support@homwisor.com",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[n.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:lt,strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),"support@homwisor.com"]})]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${lt}`,display:"inline-block",paddingBottom:6},children:"QUICK LINKS"}),n.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[n.jsx(q,{to:"/",style:{color:"rgba(255,255,255,.7)"},children:"Home"}),n.jsx(q,{to:"/about",style:{color:"rgba(255,255,255,.7)"},children:"About Us"}),n.jsx(q,{to:"/blog",style:{color:"rgba(255,255,255,.7)"},children:"Blog"}),n.jsx(q,{to:"/contact",style:{color:"rgba(255,255,255,.7)"},children:"Contact"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${lt}`,display:"inline-block",paddingBottom:6},children:"TOOLS & SERVICES"}),n.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[n.jsx(q,{to:"/privacy-policy",style:{color:"rgba(255,255,255,.7)"},children:"Privacy Policy"}),n.jsx(q,{to:"/terms-and-conditions",style:{color:"rgba(255,255,255,.7)"},children:"Terms & Conditions"}),n.jsx("a",{href:"#",style:{color:"rgba(255,255,255,.7)"},children:"Disclaimer"}),"              "]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${lt}`,display:"inline-block",paddingBottom:6},children:"ADDRESS"}),n.jsx("div",{style:{display:"grid",gap:12,fontSize:13},children:n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,color:"rgba(255,255,255,.7)",lineHeight:1.6},children:[n.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0,marginTop:1},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:lt,strokeWidth:"1.7",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),n.jsx("span",{children:"Unit no : 704 , Sohna Road , ILD Trade Centre, Gurugram , Haryana , 122018"})]})})]})]}),n.jsxs("div",{style:{borderTop:"1px solid #1a1a1a",marginTop:28,paddingTop:14,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12,fontSize:12,color:"rgba(255,255,255,.45)"},children:[n.jsx("span",{children:"© 2026 HomWisor.com — Rishto Ki Shuruwat. All rights reserved. | RERA Registered"}),n.jsxs("span",{style:{display:"flex",gap:10,alignItems:"center"},children:[n.jsx("a",{href:"https://www.facebook.com/p/Homwisor-Consultant-Pvt-Ltd-100063724465215/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:lt,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:n.jsx("i",{className:"fa-brands fa-facebook-f"})}),n.jsx("a",{href:"https://www.instagram.com/homwisor/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:lt,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:n.jsx("i",{className:"fa-brands fa-instagram"})}),n.jsx("a",{href:"https://www.youtube.com/@HomwisorConsultants",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:lt,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:n.jsx("i",{className:"fa-brands fa-youtube"})}),n.jsx("a",{href:"https://www.linkedin.com/checkpoint/challenge/AgGnqOFm7uEMXwAAAaDiLdR1eKRji-_VqyEWvji7ntzt5HEv1pp-rFc6fD1Adq5RajztgTQHf0Edw_f4yhIZExU-nwz7tg?ut=1ckL1ZscIkmss1",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:lt,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:n.jsx("i",{className:"fa-brands fa-linkedin-in"})})]})]})]})}),n.jsx("style",{children:`
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
      `})]})}const Ro="#D4AF37",Zh="#B9943A";function cv(){const[e,t]=j.useState({hero:[],slider:[],small:[]}),[r,i]=j.useState([]),[s,a]=j.useState([]),[o,l]=j.useState([]),[c,d]=j.useState([]),[h,u]=j.useState(void 0),[p,x]=j.useState([]),[v,A]=j.useState(!0);j.useEffect(()=>{async function g(){try{const[C,P,R,L,W,z,Y]=await Promise.all([$.get("/banners"),$.get("/properties"),$.get("/locations"),$.get("/offers"),$.get("/builders").catch(()=>({data:[]})),$.get("/testimonials").catch(()=>({data:null})),$.get("/recommended").catch(()=>({data:[]}))]);t(C.data),i(P.data),a(R.data),l(L.data),d(W.data||[]),u(z.data??null),x(Y.data||[])}catch(C){console.error(C),u(P=>P===void 0?null:P)}finally{A(!1)}}g()},[]),r.filter(g=>g.category==="recommended").slice(0,4),r.filter(g=>g.category==="trending").slice(0,4);const E=r.filter(g=>["₹19","₹28","₹16","₹5.2"].some(C=>g.priceRange&&g.priceRange.includes(C))||g.category==="trending").slice(0,4);[r.find(g=>g.title&&g.title.includes("Oberoi Three Sixty"))||r.find(g=>g.title&&g.title.includes("BPTP"))||E[0],r.find(g=>g.title&&g.title.includes("Experion One 42"))||E[1],r.find(g=>g.title&&g.title.includes("Max Estate 59"))||E[2],r.find(g=>g.title&&g.title.includes("BPTP DownTown"))||E[3]].filter(Boolean).slice(0,4);const m=r.filter(g=>g.category==="commercial").slice(0,4),f=r.filter(g=>g.category==="sco").slice(0,4),y=r.filter(g=>g.category==="upcoming").slice(0,4),w=r.filter(g=>g.category==="newlaunch").slice(0,4);if(v)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#fff"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{width:48,height:48,border:"3px solid #eee",borderTopColor:Ro,borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 12px"}}),n.jsx("div",{style:{fontWeight:600,color:"#6b7280"},children:"Loading HomWisor luxury..."}),n.jsx("style",{children:`
              @keyframes spin{
                to{
                  transform:rotate(360deg)
                }
              }
            `})]})});m.length>=4||r.slice(4,8),f.length>=4||r.slice(8,12);const k=[{name:"Studio",sub:"Apartment",place:"in Gurugram",count:"320+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop"},{name:"1 BHK",sub:"in Gurugram",count:"980+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=500&fit=crop"},{name:"2 BHK",sub:"in Gurugram",count:"1,450+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop"},{name:"3 BHK",sub:"in Gurugram",count:"760+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop"},{name:"4 BHK",sub:"in Gurugram",count:"410+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop"},{name:"5 BHK",sub:"in Gurugram",count:"180+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=500&fit=crop"},{name:"Penthouse",sub:"in Gurugram",count:"95+ Properties",dark:!0,img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop"}];c.length;const O=h===null?jf:h;return n.jsxs("div",{style:{background:"#fcfcfc"},children:[n.jsx(Mt,{}),n.jsxs("section",{className:"hw-home-hero",children:[n.jsx(My,{banners:e.hero}),n.jsx("div",{className:"hw-search-overlay",children:n.jsx(zy,{})})]}),n.jsx("section",{className:"hw-new-premium-slider",children:n.jsx(Fy,{banners:e.slider||[]})}),n.jsx($y,{items:p}),n.jsx(qy,{properties:r,locations:s,upcoming:y,newlaunch:w,offers:o,promos:e.small,branded:r.filter(g=>g.category==="branded").slice(0,4),luxury:r.filter(g=>g.category==="luxury").slice(0,4)}),n.jsxs("section",{className:"container hw-bhk-premium-section",style:{padding:"38px 16px 0"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:2},children:[n.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}}),n.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2.5,color:"#9A7A22"},children:"HOMWISOR"}),n.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}})]}),n.jsx("h2",{style:{fontSize:29,lineHeight:1.08,fontWeight:800,color:"#102A43",margin:"2px 0 3px",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.5px"},children:"Which BHK suits your lifestyle best?"}),n.jsx("p",{style:{fontSize:11,color:"#64748B",margin:0,lineHeight:1.4},children:"Find a home that fits you and tomorrow."}),n.jsx("div",{className:"bhk-grid hw-bhk-premium-grid",style:{display:"grid",gridTemplateColumns:"repeat(6, minmax(0, 1fr))",gap:9,marginTop:10,overflowX:"auto",paddingBottom:2},children:k.slice(0,6).map((g,C)=>{const P=[{bg:"#FFF8ED",iconBg:"#FFF0D6",icon:"#A87522"},{bg:"#F2F8FD",iconBg:"#DDECF8",icon:"#2871A8"},{bg:"#FFF5F6",iconBg:"#FBE0E3",icon:"#C75B66"},{bg:"#F3F6FC",iconBg:"#DDE7F7",icon:"#31598C"},{bg:"#F2F8F3",iconBg:"#DDEEDC",icon:"#5B7D3C"},{bg:"#F6F2FC",iconBg:"#E7DFF7",icon:"#66509A"}][C],R=["▦","▰","▰","♟","◇","♛"];return n.jsxs(q,{to:`/search?bhk=${encodeURIComponent(g.name)}`,className:"hw-bhk-premium-card",style:{minWidth:0,borderRadius:7,overflow:"hidden",border:"1px solid #E5E7EB",background:P.bg,display:"block",textDecoration:"none",boxShadow:"0 1px 5px rgba(15,23,42,.04)"},children:[n.jsxs("div",{style:{padding:"8px 8px 7px",minHeight:103},children:[n.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:P.iconBg,color:P.icon,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,marginBottom:7},children:R[C]}),n.jsx("div",{style:{fontSize:13,lineHeight:1.1,fontWeight:800,color:"#183B5B"},children:g.name}),n.jsxs("div",{style:{fontSize:8.5,fontWeight:600,color:"#64748B",marginTop:2},children:[g.sub," ",g.place?g.place.replace(/^in\s*/i,"in "):"in Gurugram"]}),n.jsx("div",{style:{fontSize:8,color:"#64748B",marginTop:8},children:g.count})]}),n.jsxs("div",{style:{height:143,position:"relative",overflow:"hidden"},children:[n.jsx("img",{src:g.img,alt:g.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),n.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:38,background:"linear-gradient(to top, rgba(15,23,42,.22), transparent)"}})]})]},g.name)})})]}),n.jsxs("section",{className:"container hw-why-premium-section",style:{padding:"30px 16px 0"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:18},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:4},children:[n.jsx("span",{style:{width:34,height:1,background:Ro,display:"inline-block"}}),n.jsx("span",{style:{fontSize:10,letterSpacing:2.5,fontWeight:800,color:"#9A7A22"},children:"HOMWISOR"}),n.jsx("span",{style:{width:34,height:1,background:Ro,display:"inline-block"}})]}),n.jsx("h2",{style:{margin:0,fontSize:36,lineHeight:1.08,fontWeight:800,color:"#102A43",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.4px"},children:"Why Choose Us"}),n.jsx("p",{style:{margin:"5px auto 0",maxWidth:650,fontSize:12,lineHeight:1.5,color:"#64748B"},children:"India's trusted real estate platform for verified properties, direct builder pricing, and complete end-to-end guidance."})]}),n.jsx("div",{className:"hw-why-feature-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:[{no:"01",title:"100% Verified Listings",desc:"Every property listing undergoes rigorous physical and legal verification. Genuine photos, accurate pricing, and title ownership put fake listings.",icon:"✓",iconBg:"#FFF0D2",iconColor:"#A66A18",bg:"#FFF9EF",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&h=520&fit=crop"},{no:"02",title:"Direct Builder Rates",desc:"We connect you directly with top-tier developers, ensuring transparent deal structures, best price guarantees, and zero hidden brokerage charges.",icon:"◇",iconBg:"#E5F0FC",iconColor:"#376D9F",bg:"#F4F9FD",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=520&fit=crop"},{no:"03",title:"Free Guided Site Visits",desc:"Schedule doorstep property site visits with experienced specialists who provide personalized advice tailored to your budget.",icon:"♟",iconBg:"#DDF0DE",iconColor:"#3F7D4C",bg:"#F3FAF3",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=520&fit=crop"}].map(g=>n.jsxs("div",{className:"hw-why-feature-card",style:{position:"relative",minWidth:0,overflow:"hidden",borderRadius:6,border:"1px solid #E5E7EB",background:g.bg,display:"flex"},children:[n.jsxs("div",{style:{position:"relative",zIndex:2,width:"58%",padding:"17px 14px 10px",background:g.bg,clipPath:"ellipse(90% 78% at 0% 50%)"},children:[n.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:g.iconBg,color:g.iconColor,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:900,marginBottom:6},children:g.icon}),n.jsx("div",{style:{width:26,height:1,background:g.iconColor,opacity:.35,margin:"0 0 5px"}}),n.jsx("div",{style:{fontSize:15,lineHeight:1.12,fontWeight:800,color:"#17324D"},children:g.title}),n.jsx("div",{style:{fontSize:11.2,lineHeight:1.4,color:"#64748B",marginTop:5,maxWidth:170},children:g.desc}),n.jsx("div",{style:{position:"absolute",left:10,bottom:2,fontSize:28,lineHeight:1,fontWeight:800,color:g.iconColor,opacity:.2},children:g.no})]}),n.jsx("div",{style:{position:"absolute",inset:"0 0 0 42%",overflow:"hidden"},children:n.jsx("img",{src:g.image,alt:g.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}})})]},g.title))}),n.jsx("div",{className:"hw-why-stats",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",marginTop:7,background:"#fff",border:"1px solid #E8E1D3",borderRadius:5,overflow:"hidden",boxShadow:"0 2px 8px rgba(15,23,42,.05)"},children:[["25K+","Verified Properties","▦"],["10K+","Happy Customers","♟"],["500+","Top Developers","▦"],["50+","Cities Covered","●"],["24×7","Expert Support","◉"]].map((g,C)=>n.jsxs("div",{style:{minWidth:0,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"11px 7px",borderRight:C<4?"1px solid #E8E1D3":"none"},children:[n.jsx("div",{style:{width:30,height:30,flexShrink:0,borderRadius:"50%",background:"#FFF7ED",color:Zh,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800},children:g[2]}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:{fontSize:12,lineHeight:1,fontWeight:800,color:"#17324D"},children:g[0]}),n.jsx("div",{style:{fontSize:10,lineHeight:1.25,color:"#64748B",marginTop:2,whiteSpace:"nowrap"},children:g[1]})]})]},g[1]))})]}),(O==null?void 0:O.length)>0&&n.jsxs("section",{className:"container hw-testimonials-premium",style:{padding:"34px 16px 0"},children:[n.jsxs("section",{className:"container hw-testimonials-premium",children:[n.jsxs("div",{className:"hw-testimonial-heading",children:[n.jsxs("div",{className:"hw-testimonial-eyebrow",children:[n.jsx("span",{}),n.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),n.jsx("span",{})]}),n.jsx("h2",{children:"Customer Testimonials"}),n.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),n.jsx(Af,{items:O,limit:4})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:6,marginTop:10},children:[0,1,2,3].map((g,C)=>n.jsx("span",{style:{width:C===0?7:6,height:C===0?7:6,borderRadius:"50%",background:C===0?Zh:"#D1D5DB",display:"none"}},g))})]}),n.jsx(sv,{builders:c,properties:r}),n.jsx(Kt,{})]})}const dv="/assets/test1-Bhn6Q40Z.png",hv="/assets/test2-4YsetXgN.png",uv="/assets/test3-CgDiknys.png",pv="/assets/test4-DV0Q2HbY.png",Et="#D4AF37",Pn="#9A7418",mv="#090909",fv=[dv,hv,uv,pv],gv=[["01","Integrity","We build relationships through honest guidance and responsible advice."],["02","Accountability","We stay involved and take responsibility throughout the property journey."],["03","Professionalism","Experienced, informed and focused on delivering a smooth experience."],["04","Customer First","Your requirements, priorities and long-term goals remain at the centre."],["05","Transparency","Clear communication and straightforward property guidance at every step."],["06","Improvement","We continuously improve our market knowledge and client experience."]],xv=[{name:"Mr. Brejendra Singh",role:"Founder & CEO",text:"A real estate veteran with 15+ years of expertise, known for deep market knowledge and investment insights."},{name:"Mr. Birendra Patel",role:"Founder & CMO",text:"Brings over 13 years of distinguished real estate experience with a strong focus on market intelligence."},{name:"Mr. Lokendra Singh",role:"Manager",text:"Brings deep knowledge of Gurgaon micro-markets with a strong market understanding and client-focused approach."},{name:"Mr. Mukul Yadav",role:"Manager",text:"A dedicated real estate consultant focused on helping clients find the right investment opportunities."}],wv=[{date:"JUL 30, 2026",category:"REAL ESTATE NEWS",title:"Moti Nagar Metro Station on Delhi Metro Blue Line",text:"Explore connectivity, location advantages and the role of the Blue Line in West Delhi real estate."},{date:"JUL 29, 2026",category:"REAL ESTATE NEWS",title:"BPTP Downtown 66 Phase 2 Is Here",text:"A look at the new phase and what buyers should know about the Gurgaon development."},{date:"JUL 28, 2026",category:"REAL ESTATE NEWS",title:"Sector 49 Gurgaon: Real Estate Prices & Metro Expansion",text:"Understand the locality, connectivity and changing real estate landscape of Sector 49 Gurgaon."}];function yv(){const[e,t]=j.useState(void 0);j.useEffect(()=>{let i=!0;return $.get("/testimonials").then(s=>i&&t(s.data||[])).catch(()=>i&&t(null)),()=>{i=!1}},[]);const r=e===null?jf:e||[];return n.jsxs("div",{className:"about-page",children:[n.jsx(Mt,{}),n.jsxs("section",{className:"about-hero",children:[n.jsx("div",{className:"about-hero-overlay"}),n.jsx("div",{className:"about-hero-glow"}),n.jsx("div",{className:"about-hero-grid"}),n.jsxs("div",{className:"about-container about-hero-inner",children:[n.jsx("div",{className:"about-kicker",children:"TRUSTED REAL ESTATE CONSULTANTS"}),n.jsxs("h1",{children:["Real Estate,",n.jsx("br",{}),n.jsx("span",{children:"Guided With Wisdom."})]}),n.jsx("p",{children:"Since 2016, we’ve guided families and investors toward the perfect homes, premium office spaces, and smart real estate opportunities across Gurgaon and Delhi NCR."}),n.jsx("div",{className:"about-hero-actions",children:n.jsx("a",{href:"/contact/",className:"about-btn about-btn-gold",children:"Talk to an Expert"})})]})]}),n.jsx("section",{className:"about-section about-who",children:n.jsxs("div",{className:"about-container about-two-col",children:[n.jsxs("div",{className:"about-real-image",children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88",alt:"Premium modern home interior"}),n.jsxs("div",{className:"image-overlay-card",children:[n.jsx("span",{children:"EST. 2016"}),n.jsx("strong",{children:"Homwisor"}),n.jsx("small",{children:"Real Estate Consultants"})]}),n.jsx("div",{className:"image-corner-number",children:"01"})]}),n.jsxs("div",{className:"about-copy",children:[n.jsx("div",{className:"about-eyebrow",children:"WHO WE ARE"}),n.jsx("h2",{children:"Property is more than a transaction."}),n.jsx("p",{children:"Homwisor Consultant believes that buying a property is more than just a transaction — it is a life-changing decision connected to dreams, security and future growth."}),n.jsx("p",{children:"Built on the vision of combining the comfort of a dream home with the wisdom of expert real estate guidance, Homwisor helps clients navigate property opportunities with clarity and confidence."}),n.jsxs("div",{className:"about-points",children:[n.jsxs("div",{children:[n.jsx("b",{children:"✓"}),"Expert property guidance"]}),n.jsxs("div",{children:[n.jsx("b",{children:"✓"}),"Market-focused recommendations"]}),n.jsxs("div",{children:[n.jsx("b",{children:"✓"}),"Residential & commercial expertise"]}),n.jsxs("div",{children:[n.jsx("b",{children:"✓"}),"Support throughout the journey"]})]})]})]})}),n.jsx("section",{className:"about-section about-values",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"about-heading-center",children:[n.jsx("div",{className:"about-eyebrow",children:"OUR CORE VALUES"}),n.jsxs("h2",{children:["Principles that shape ",n.jsx("span",{children:"Homwisor."})]}),n.jsx("p",{children:"Integrity, accountability, professionalism and a customer-first approach at every step."})]}),n.jsx("div",{className:"values-grid",children:gv.map(([i,s,a])=>n.jsxs("article",{className:"value-card",children:[n.jsxs("div",{className:"value-top",children:[n.jsx("span",{children:i}),n.jsx("i",{children:"↗"})]}),n.jsx("h3",{children:s}),n.jsx("p",{children:a})]},s))})]})}),n.jsx("section",{className:"about-section about-leaders",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"about-heading-row",children:[n.jsxs("div",{children:[n.jsx("div",{className:"about-eyebrow",children:"OUR TEAM"}),n.jsxs("h2",{children:["Visionary ",n.jsx("span",{children:"Real Estate Leaders"})]})]}),n.jsx("p",{children:"Experienced professionals bringing market knowledge and client-focused real estate guidance."})]}),n.jsx("div",{className:"leaders-grid",children:xv.map((i,s)=>n.jsxs("article",{className:"leader-card",children:[n.jsxs("div",{className:"leader-image-wrap",children:[n.jsx("img",{src:fv[s],alt:`${i.name} professional portrait`}),n.jsxs("div",{className:"leader-number",children:["0",s+1]})]}),n.jsxs("div",{className:"leader-content",children:[n.jsx("div",{className:"leader-role",children:i.role}),n.jsx("h3",{children:i.name}),n.jsx("p",{children:i.text})]})]},i.name))})]})}),n.jsx("section",{className:"about-section about-news",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"about-heading-row",children:[n.jsxs("div",{children:[n.jsx("div",{className:"about-eyebrow",children:"READ FROM OUR BLOGS & NEWS"}),n.jsxs("h2",{children:["Insights for ",n.jsx("span",{children:"smarter decisions."})]})]}),n.jsxs("a",{href:"/blog/",className:"news-link",children:["View All Articles ",n.jsx("span",{children:"↗"})]})]}),n.jsx("div",{className:"blog-grid",children:wv.map(i=>n.jsxs("article",{className:"blog-card",children:[n.jsxs("div",{className:"blog-image",children:[n.jsx("img",{src:`https://images.unsplash.com/photo-${i.title.includes("Moti")?"1477959858617-67f85cf4f1df":i.title.includes("BPTP")?"1564013799919-ab600027ffc6":"1560518883-ce09059eeffa"}?auto=format&fit=crop&w=900&q=82`,alt:"Real estate news"}),n.jsx("span",{children:i.category})]}),n.jsxs("div",{className:"blog-content",children:[n.jsx("small",{children:i.date}),n.jsx("h3",{children:i.title}),n.jsx("p",{children:i.text}),n.jsxs("a",{href:"/blog/",children:["Read Article ",n.jsx("span",{children:"→"})]})]})]},i.title))})]})}),r.length>0&&n.jsx("section",{className:"about-section about-testimonials hw-testimonials-premium",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"hw-testimonial-heading",children:[n.jsxs("div",{className:"hw-testimonial-eyebrow",children:[n.jsx("span",{}),n.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),n.jsx("span",{})]}),n.jsx("h2",{children:"Customer Testimonials"}),n.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),n.jsx(Af,{items:r,limit:4})]})}),n.jsx(Kt,{}),n.jsx("style",{children:`

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

          color: ${mv};
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
          color: ${Pn};

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
          color: ${Pn};
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
          color: ${Pn};

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
          color: ${Pn};

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
          color: ${Pn};

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
          color: ${Pn};

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
          color: ${Pn};

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

      `})]})}const Yt=[{city:"Gurugram",aliases:["gurgaon"],localities:[{name:"Golf Course Road",slug:"golf-course-road"},{name:"Golf Course Extension Road",slug:"golf-course-extension-road",aliases:["gcer","golf course ext"]},{name:"Dwarka Expressway",slug:"dwarka-expressway"},{name:"Sohna Road",slug:"sohna-road"},{name:"Southern Peripheral Road (SPR)",slug:"southern-peripheral-road",aliases:["southern peripheral road","spr"]},{name:"New Gurgaon",slug:"new-gurgaon",aliases:["new gurugram"]},{name:"Nirvana Road",slug:"nirvana-road"},{name:"MG Road",slug:"mg-road",aliases:["m.g. road"]},{name:"NH-48",slug:"nh-48",aliases:["nh 48","nh8","nh-8"]}]},{city:"Noida",aliases:["greater noida"],localities:[{name:"Noida Expressway",slug:"noida-expressway"},{name:"Noida Extension",slug:"noida-extension"},{name:"Yamuna Expressway",slug:"yamuna-expressway"}]},{city:"New Delhi",aliases:["delhi"],localities:[{name:"Dwarka",slug:"dwarka"},{name:"South Delhi",slug:"south-delhi"},{name:"Central Delhi",slug:"central-delhi"}]},{city:"Faridabad",localities:[{name:"Greater Faridabad",slug:"greater-faridabad"},{name:"Mathura Road",slug:"mathura-road"},{name:"Suraj Kund",slug:"suraj-kund",aliases:["surajkund"]}]},{city:"Bengaluru",aliases:["bangalore"],localities:[{name:"North Bengaluru",slug:"north-bengaluru"},{name:"East Bengaluru",slug:"east-bengaluru"},{name:"Sarjapur Road (IT Corridor)",slug:"sarjapur-road",aliases:["sarjapur road","sarjapur"]},{name:"South Bengaluru",slug:"south-bengaluru"},{name:"Hoskote & East Peripheral Belt",slug:"hoskote",aliases:["hoskote"]}]},{city:"Hyderabad",localities:[{name:"North Hyderabad",slug:"north-hyderabad"},{name:"South Hyderabad",slug:"south-hyderabad"},{name:"East Hyderabad",slug:"east-hyderabad"},{name:"West Hyderabad",slug:"west-hyderabad"}]},{city:"Mumbai",localities:[{name:"South Mumbai",slug:"south-mumbai"},{name:"Navi Mumbai",slug:"navi-mumbai"},{name:"Panvel",slug:"panvel"},{name:"Central Mumbai",slug:"central-mumbai"},{name:"Kalyan",slug:"kalyan"}]},{city:"Pune",localities:[{name:"West Pune",slug:"west-pune"},{name:"East Pune",slug:"east-pune"},{name:"Punawale",slug:"punawale"},{name:"South East Pune",slug:"south-east-pune"}]}],Ur=(e="")=>String(e).toLowerCase().replace(/\([^)]*\)/g," ").replace(/[^a-z0-9]+/g," ").trim(),vv=Yt.flatMap(e=>e.localities.map(t=>({...t,city:e.city}))),kf=vv.map(e=>({l:e,keys:[e.name,e.slug.replace(/-/g," "),...e.aliases||[]].map(Ur)})).sort((e,t)=>Math.max(...t.keys.map(r=>r.length))-Math.max(...e.keys.map(r=>r.length))),Jh=(e,t)=>t&&` ${e} `.includes(` ${t} `),Yi=e=>{var r;const t=Ur(e);return t&&((r=kf.find(i=>i.keys.some(s=>s===t)))==null?void 0:r.l)||null},Xi=e=>{const t=Ur(e);return t&&Yt.find(r=>[r.city,...r.aliases||[]].map(Ur).includes(t))||null},Zn=(e={})=>{var s,a,o;const t=Ur(e.location),r=e.locality&&Yi(e.locality)||((s=kf.find(l=>l.keys.some(c=>Jh(t,c))))==null?void 0:s.l)||null,i=e.city&&((a=Xi(e.city))==null?void 0:a.city)||(r==null?void 0:r.city)||((o=Yt.find(l=>[l.city,...l.aliases||[]].some(c=>Jh(t,Ur(c)))))==null?void 0:o.city)||null;return{locality:e.locality||(r==null?void 0:r.name)||"",city:e.city||i||""}},$n=e=>{var t;return((t=Yt.find(r=>r.city===e))==null?void 0:t.localities)||[]},Ce=(e="")=>String(e).toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),Ut=e=>{const r=[...String((e==null?void 0:e.priceRange)||(e==null?void 0:e.price)||"").toLowerCase().replace(/,/g,"").matchAll(/(\d+(?:\.\d+)?)\s*(cr|crore|crores|l|lac|lacs|lakh|lakhs|k)?\b/g)].map(a=>({n:parseFloat(a[1]),unit:a[2]||""}));if(!r.length)return null;for(let a=r.length-1,o="cr";a>=0;a--)r[a].unit?o=r[a].unit:r[a].unit=o;const i=({n:a,unit:o})=>/^(l|lac|lacs|lakh|lakhs)$/.test(o)?a/100:o==="k"?a/1e5:a,s=r.map(i);return{min:Math.min(...s),max:Math.max(...s)}},_l=e=>{if(!e)return null;const t=String(e).toLowerCase(),r=[...t.matchAll(/\d+(?:\.\d+)?/g)].map(i=>parseFloat(i[0]));return r.length?/under|below|upto|up to|less|max/.test(t)?{min:0,max:r[0]}:/onward|plus|above|more|\+|min/.test(t)||r.length===1?{min:r[0],max:1/0}:{min:Math.min(r[0],r[1]),max:Math.max(r[0],r[1])}:null},eu=e=>e?e.min===0?`Under ₹${e.max} Cr`:e.max===1/0?`₹${e.min} Cr+`:`₹${e.min} – ${e.max} Cr`:"",Gl=[{value:"under-1-cr",label:"Under ₹1 Cr"},{value:"1-cr-4-cr",label:"₹1 – 4 Cr"},{value:"4-cr-8-cr",label:"₹4 – 8 Cr"},{value:"8-cr-12-cr",label:"₹8 – 12 Cr"},{value:"12-cr-16-cr",label:"₹12 – 16 Cr"},{value:"16-cr-onwards",label:"₹16 Cr+"}],tu=["apartment","villa","builder floor","plots","farmhouse"],nn=["commercial","retail","sco"],bv=["trump","elie saab","brabus","franck","muller","tonino","armani","branded","oberoi","dlf privana","versace","lamborghini"],jv=10,Nf=e=>!nn.includes(Ce(e.type||e.propertyType))&&!["commercial","sco"].includes(e.category),Av=e=>{var t;return Nf(e)&&((((t=Ut(e))==null?void 0:t.max)||0)>=jv||/luxury/i.test(`${e.tag} ${e.propertyTypeDetail}`))},kv=e=>Nf(e)&&bv.some(t=>Ce(`${e.title} ${e.tag} ${e.propertyTypeDetail}`).includes(t)),Nv=e=>{const t=Ce(e);if(!t||t==="all"||t==="all types")return null;const r=a=>Ce(a.type||a.propertyType),i=a=>Ce(`${a.type} ${a.bhk} ${a.title} ${a.propertyTypeDetail}`);return{residential:a=>tu.includes(r(a)),"residential projects":a=>tu.includes(r(a)),commercial:a=>nn.includes(r(a))||["commercial","sco"].includes(a.category),"commercial projects":a=>nn.includes(r(a))||["commercial","sco"].includes(a.category),"luxury villas":a=>r(a)==="villa",villa:a=>r(a)==="villa",villas:a=>r(a)==="villa","independent floors":a=>r(a)==="builder floor","builder floor":a=>r(a)==="builder floor","pent house":a=>/pent ?house/.test(i(a)),penthouse:a=>/pent ?house/.test(i(a)),"residential plots":a=>r(a)==="plots",plots:a=>r(a)==="plots","plots land":a=>r(a)==="plots","sco plots":a=>r(a)==="sco"||a.category==="sco",sco:a=>r(a)==="sco"||a.category==="sco",branded:a=>a.category==="branded"||kv(a),luxury:a=>["luxury","branded"].includes(a.category)||Av(a),shops:a=>nn.includes(r(a))||a.category==="commercial","office space":a=>nn.includes(r(a))||a.category==="commercial","food court":a=>nn.includes(r(a))||a.category==="commercial","anchor stores":a=>nn.includes(r(a))||a.category==="commercial","cinema entertainment":a=>nn.includes(r(a))||a.category==="commercial"}[t]||(a=>r(a)===t||r(a).includes(t))},nu=e=>{const t=String((e==null?void 0:e.bhk)||"").toLowerCase();return/bhk|bed/.test(t)?[...t.matchAll(/\d+/g)].map(r=>parseInt(r[0])).filter(r=>r>0&&r<10):[]},Sv=e=>{var i;const t=String(e||"").toLowerCase();if(!t)return null;if(t.includes("studio"))return s=>/studio|1 ?rk/.test(String(s.bhk).toLowerCase());const r=parseInt((i=t.match(/\d+/))==null?void 0:i[0]);return r?/\+|plus|above/.test(t)?s=>nu(s).some(a=>a>=r):s=>nu(s).includes(r):null},Cv={upcoming:["upcoming"],"new launch":["new launch","newlaunch"],"ready to move":["ready to move","ready"],"under construction":["under construction","trending","new launch"],trending:["trending"]},ru=["New Launch","Upcoming","Under Construction","Ready to Move"],Ev=e=>{const t=Ce(e).replace("newlaunch","new launch");if(!t||t==="for sale"||t==="all")return null;const r=Cv[t]||[t];return i=>r.includes(Ce(i.status).replace("newlaunch","new launch"))||r.includes(Ce(i.category).replace("newlaunch","new launch"))},Rv=e=>{var o;const t=l=>(e.get(l)||"").trim();let r=t("q"),i=t("locality"),s=t("city");const a=t("location");if(a){const l=Yi(a),c=!l&&Xi(a);l?i=l.name:c?s=c.city:r=r?`${r} ${a}`:a}if(i){const l=Yi(i);l&&(i=l.name,s=s||l.city)}return s&&(s=((o=Xi(s))==null?void 0:o.city)||s),{q:r,city:s,locality:i,type:t("type")||t("propertyType"),budget:t("budget"),bhk:t("bhk"),status:t("status"),category:t("category"),sort:t("sort")}},Pv=(e,t,{offerTitles:r=[]}={})=>{const i=Ce(t.q).split(" ").filter(Boolean),s=Nv(t.type),a=Sv(t.bhk),o=Ev(t.status),l=_l(t.budget),c=r.map(Ce),d=e.filter(u=>{const p=Zn(u);if(i.length){const x=Ce(`${u.title} ${u.location} ${u.developer} ${u.type} ${u.bhk} ${p.locality} ${p.city}`);if(!i.every(v=>x.includes(v)))return!1}if(t.city&&Ce(p.city)!==Ce(t.city)||t.locality&&Ce(p.locality)!==Ce(t.locality)||s&&!s(u)||a&&!a(u)||o&&!o(u))return!1;if(l){const x=Ut(u);if(!x||x.max<l.min||x.min>l.max)return!1}if(t.category){const x=t.category.toLowerCase();if(x==="festival"){if(!c.some(v=>Ce(u.title).includes(v)||v.includes(Ce(u.title))))return!1}else if(String(u.category).toLowerCase()!==x)return!1}return!0}),h=u=>{var p;return((p=Ut(u))==null?void 0:p.min)??1/0};return t.sort==="price-low"&&d.sort((u,p)=>h(u)-h(p)),t.sort==="price-high"&&d.sort((u,p)=>{var x,v;return(((x=Ut(p))==null?void 0:x.max)??-1)-(((v=Ut(u))==null?void 0:v.max)??-1)}),t.sort==="newest"&&d.sort((u,p)=>String(p.createdAt).localeCompare(String(u.createdAt))),d},Tv={apartment:"Apartments",villa:"Villas",villas:"Villas","luxury villas":"Luxury Villas","builder floor":"Builder Floors","independent floors":"Independent Floors",farmhouse:"Farmhouses",plots:"Plots","plots land":"Plots & Land","residential plots":"Residential Plots","pent house":"Penthouses",penthouse:"Penthouses",residential:"Residential Projects","residential projects":"Residential Projects",commercial:"Commercial Projects","commercial projects":"Commercial Projects",retail:"Retail Spaces",sco:"SCO Plots","sco plots":"SCO Plots",branded:"Branded Residences",luxury:"Luxury Homes",shops:"Shops","office space":"Office Spaces","food court":"Food Courts","anchor stores":"Anchor Stores","cinema entertainment":"Cinema & Entertainment Spaces"},Ov=e=>{const t=[];e.bhk&&t.push(/bhk|studio/i.test(e.bhk)?e.bhk:`${e.bhk} BHK`),t.push(e.type?Tv[Ce(e.type)]||e.type:"Properties");const r=e.locality||e.city||"Gurugram";return`${t.join(" ")} in ${r}`},Lv=["q","city","locality","type","budget","bhk","status","category","sort"],iu=[{group:"Residential",items:[["Apartment","Apartment"],["Villa","Villa"],["Builder Floor","Builder Floor"],["Penthouse","Penthouse"],["Plots","Plots"],["Farmhouse","Farmhouse"]]},{group:"Commercial",items:[["Commercial","All Commercial"],["Retail","Retail / Shops"],["SCO","SCO Plots"]]},{group:"Collections",items:[["Luxury","Luxury Homes"],["Branded","Branded Residences"]]}],Po=[["","All Projects"],["trending","Trending"],["upcoming","Upcoming"],["newlaunch","New Launch"],["branded","Branded"],["luxury","Luxury"],["commercial","Commercial"],["sco","SCO"]],Mv=["Studio","1 BHK","2 BHK","3 BHK","4 BHK","5 BHK"],zv=(e,t)=>{var r;return((r=e.find(([i])=>i===t))==null?void 0:r[1])||t},li="#D4AF37",tn="#9A7418",Es="#090909";function Iv(){const[e,t]=Zc(),[r,i]=j.useState([]),[s,a]=j.useState([]),[o,l]=j.useState(!0),c=Rv(e),[d,h]=j.useState(c.q);j.useEffect(()=>{Promise.all([$.get("/properties"),$.get("/offers").catch(()=>({data:[]}))]).then(([g,C])=>{i(Array.isArray(g.data)?g.data:[]),a((C.data||[]).map(P=>P.title).filter(Boolean))}).catch(()=>i([])).finally(()=>l(!1))},[]);const u=j.useMemo(()=>Pv(r,c,{offerTitles:s}),[r,s,e.toString()]),p=(g,C)=>{const P={...c,[g]:C};g==="city"&&(P.locality="");const R=new URLSearchParams;Lv.forEach(L=>P[L]&&R.set(L,P[L])),t(R,{replace:!0})};j.useEffect(()=>{const g=setTimeout(()=>{d.trim()!==c.q&&p("q",d.trim())},350);return()=>clearTimeout(g)},[d]),j.useEffect(()=>{h(c.q)},[e.get("q"),e.get("location")]);const x=()=>{h(""),t({},{replace:!0})},v=[c.q&&["q",`“${c.q}”`],c.city&&["city",c.city],c.locality&&["locality",c.locality],c.type&&["type",c.type.replace(/-/g," ")],c.budget&&["budget",eu(_l(c.budget))||c.budget],c.bhk&&["bhk",c.bhk],c.status&&["status",c.status.replace(/-/g," ")],c.category&&["category",zv(Po,c.category)]].filter(Boolean),A=c.locality||c.city||"Gurugram",E=iu.some(g=>g.items.some(([C])=>C===c.type)),m=Gl.some(g=>g.value===c.budget),f=ru.includes(c.status),y=c.city?[{city:c.city,localities:$n(c.city)}]:Yt,w="919999999999",k=g=>{const C=(g==null?void 0:g.title)||(g==null?void 0:g.name)||"this property",P=encodeURIComponent(`Hi, I am interested in ${C}. Please share more details.`);return`https://wa.me/${w}?text=${P}`},O=({property:g,index:C})=>{var _;const P=(g==null?void 0:g.id)||(g==null?void 0:g._id)||C,R=(g==null?void 0:g.image)||(g==null?void 0:g.thumbnail)||((_=g==null?void 0:g.images)==null?void 0:_[0])||"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",L=(g==null?void 0:g.title)||(g==null?void 0:g.name)||"Premium Property",W=(g==null?void 0:g.priceRange)||(g==null?void 0:g.price)||"Price on Request",z=(g==null?void 0:g.location)||(g==null?void 0:g.locality)||"Gurugram",Y=(g==null?void 0:g.bhk)||"3 & 4 BHK",ee=(g==null?void 0:g.area)||(g==null?void 0:g.size)||"2,500+ Sq.Ft.",N=(g==null?void 0:g.propertyType)||(g==null?void 0:g.type)||"";return n.jsxs(q,{to:`/property/${P}`,className:"search-property-card",children:[n.jsxs("div",{className:"search-property-image",children:[n.jsx("img",{src:R,alt:L,loading:"lazy"}),n.jsx("div",{className:"search-image-overlay"}),(g==null?void 0:g.rera)!==!1&&n.jsx("div",{className:"search-rera-group",children:n.jsxs("span",{className:"search-rera",children:[n.jsx("b",{children:"✓"}),"RERA"]})}),n.jsxs("div",{className:"search-bhk-badge",children:[Y,N?` • ${N}`:""]})]}),n.jsxs("div",{className:"search-property-content",children:[n.jsx("h3",{children:L}),n.jsx("div",{className:"search-card-price",children:W}),n.jsxs("div",{className:"search-card-location",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),n.jsx("span",{children:z})]}),n.jsxs("div",{className:"search-card-meta",children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M3 11h18"}),n.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M4 19v-8"}),n.jsx("path",{d:"M20 19v-8"}),n.jsx("path",{d:"M4 15h16"})]}),n.jsx("span",{children:Y})]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[n.jsx("path",{d:"M4 4h6"}),n.jsx("path",{d:"M4 4v6"}),n.jsx("path",{d:"M20 20h-6"}),n.jsx("path",{d:"M20 20v-6"}),n.jsx("path",{d:"M4 20h6"}),n.jsx("path",{d:"M4 20v-6"}),n.jsx("path",{d:"M20 4h-6"}),n.jsx("path",{d:"M20 4v6"})]}),n.jsx("span",{children:ee})]})]}),n.jsxs("a",{href:k(g),target:"_blank",rel:"noopener noreferrer",className:"search-card-whatsapp",onClick:I=>I.stopPropagation(),children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),n.jsx("span",{children:"WhatsApp"})]})]})]})};return n.jsxs("div",{className:"search-page",children:[n.jsx(Mt,{}),n.jsxs("div",{className:"search-container",children:[n.jsxs("div",{className:"search-breadcrumb",children:[n.jsx(q,{to:"/",children:"Home"}),n.jsx("span",{children:"›"}),n.jsxs("span",{children:["Projects in ",A]})]}),n.jsxs("div",{className:"search-layout",children:[n.jsxs("aside",{className:"filter-sidebar",children:[n.jsxs("div",{className:"filter-header",children:[n.jsx("h3",{children:"Filters"}),n.jsx("button",{onClick:x,children:"Clear All"})]}),n.jsxs("div",{className:"filter-fields",children:[n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"SEARCH"}),n.jsx("input",{value:d,onChange:g=>h(g.target.value),placeholder:"Project, builder, sector…"})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"CITY"}),n.jsxs("select",{value:c.city,onChange:g=>p("city",g.target.value),children:[n.jsx("option",{value:"",children:"All Cities"}),Yt.map(g=>n.jsx("option",{value:g.city,children:g.city},g.city))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"LOCALITY"}),n.jsxs("select",{value:c.locality,onChange:g=>p("locality",g.target.value),children:[n.jsx("option",{value:"",children:c.city?`All of ${c.city}`:"All Localities"}),y.map(g=>n.jsx("optgroup",{label:g.city,children:g.localities.map(C=>n.jsx("option",{value:C.name,children:C.name},C.slug))},g.city))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"PROPERTY TYPE"}),n.jsxs("select",{value:c.type,onChange:g=>p("type",g.target.value),children:[n.jsx("option",{value:"",children:"All Types"}),!E&&c.type&&n.jsx("option",{value:c.type,children:c.type.replace(/-/g," ")}),iu.map(g=>n.jsx("optgroup",{label:g.group,children:g.items.map(([C,P])=>n.jsx("option",{value:C,children:P},C))},g.group))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"BUDGET"}),n.jsxs("select",{value:c.budget,onChange:g=>p("budget",g.target.value),children:[n.jsx("option",{value:"",children:"Any Budget"}),!m&&c.budget&&n.jsx("option",{value:c.budget,children:eu(_l(c.budget))||c.budget}),Gl.map(g=>n.jsx("option",{value:g.value,children:g.label},g.value))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"BEDROOMS"}),n.jsx("div",{className:"bhk-pills",children:Mv.map(g=>n.jsxs("button",{type:"button",className:c.bhk.toLowerCase()===g.toLowerCase()?"active":"",onClick:()=>p("bhk",c.bhk.toLowerCase()===g.toLowerCase()?"":g),children:[g.replace(" BHK",""),g==="Studio"?"":" BHK"]},g))})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"PROJECT STATUS"}),n.jsxs("select",{value:c.status,onChange:g=>p("status",g.target.value),children:[n.jsx("option",{value:"",children:"Any Status"}),!f&&c.status&&n.jsx("option",{value:c.status,children:c.status.replace(/-/g," ")}),ru.map(g=>n.jsx("option",{value:g,children:g},g))]})]}),n.jsxs("div",{className:"filter-field",children:[n.jsx("label",{children:"CATEGORY"}),n.jsxs("div",{className:"category-options",children:[!Po.some(([g])=>g===c.category)&&n.jsxs("label",{className:"category-option",children:[n.jsx("input",{type:"radio",name:"cat",checked:!0,readOnly:!0}),n.jsx("span",{children:c.category})]}),Po.map(([g,C])=>n.jsxs("label",{className:"category-option",children:[n.jsx("input",{type:"radio",name:"cat",checked:c.category===g,onChange:()=>p("category",g)}),n.jsx("span",{children:C})]},g||"all"))]})]}),n.jsx("div",{className:"property-count",children:o?"Loading…":`${u.length} properties found`})]}),n.jsxs("div",{className:"expert-card",children:[n.jsx("div",{className:"expert-title",children:"Need Expert Help?"}),n.jsx("div",{className:"expert-text",children:"Our property experts will help you find the perfect home."}),n.jsx("a",{href:"tel:9090101401",className:"expert-call",children:"Call +91 9090 101 401"})]})]}),n.jsxs("main",{className:"results-area",children:[n.jsxs("div",{className:"results-header",children:[n.jsxs("div",{children:[n.jsx("h1",{children:Ov(c)}),n.jsxs("p",{children:[o?"Loading properties…":`Showing ${u.length} result${u.length===1?"":"s"}`," ","•"," ","Luxury Residences & Investment Opportunities"]})]}),n.jsxs("select",{value:c.sort,onChange:g=>p("sort",g.target.value),className:"sort-select",children:[n.jsx("option",{value:"",children:"Sort by: Recommended"}),n.jsx("option",{value:"price-low",children:"Price: Low to High"}),n.jsx("option",{value:"price-high",children:"Price: High to Low"}),n.jsx("option",{value:"newest",children:"Newest First"})]})]}),v.length>0&&n.jsxs("div",{className:"active-filters",children:[v.map(([g,C])=>n.jsxs("button",{type:"button",className:"active-chip",onClick:()=>{g==="q"&&h(""),p(g,"")},children:[C," ",n.jsx("span",{"aria-hidden":"true",children:"✕"})]},g)),n.jsx("button",{type:"button",className:"active-clear",onClick:x,children:"Clear all"})]}),o?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-title",children:"Loading properties…"}),n.jsx("div",{className:"empty-text",children:"The server may take a few seconds to wake up."})]}):u.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🏢"}),n.jsx("div",{className:"empty-title",children:"No properties found"}),n.jsx("div",{className:"empty-text",children:"Try adjusting your filters or search query"}),n.jsx("button",{onClick:x,className:"empty-btn",children:"Clear Filters"})]}):n.jsx("div",{className:"results-grid",children:u.map((g,C)=>n.jsx(O,{property:g,index:C},(g==null?void 0:g.id)||(g==null?void 0:g._id)||C))})]})]})]}),n.jsx(Kt,{}),n.jsx("style",{children:`

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
          color: ${tn};
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
          color: ${tn};
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
          border-color: ${li};
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
          accent-color: ${tn};
        }

        .apply-filter-btn {
          width: 100%;
          height: 43px;
          border: none;
          border-radius: 10px;
          background: ${Es};
          color: #ffffff;
          font-family: inherit;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
          cursor: pointer;
          transition: .25s ease;
        }

        .apply-filter-btn:hover {
          background: ${tn};
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
          background: ${li};
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
          object-fit: cover;
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
          color: ${tn};
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
          color: ${tn};
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
          background: ${Es};
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
        .bhk-pills button:hover { border-color: ${li}; }
        .bhk-pills button.active { background: ${Es}; border-color: ${Es}; color: ${li}; }

        .active-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; align-items: center; }
        .active-chip {
          display: inline-flex; align-items: center; gap: 7px;
          height: 32px; padding: 0 12px; border-radius: 20px;
          border: 1px solid #ecdfb0; background: #fffaeb; color: #5c4a12;
          font-size: 11.5px; font-weight: 700; cursor: pointer; text-transform: capitalize;
        }
        .active-chip span { font-size: 10px; color: ${tn}; }
        .active-chip:hover { border-color: ${li}; }
        .active-clear { border: none; background: none; color: ${tn}; font-size: 11.5px; font-weight: 800; cursor: pointer; }
      `})]})}const Bv={pool:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5S16 18 18 18s2-1.5 4-1.5"}),n.jsx("path",{d:"M2 21.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"}),n.jsx("path",{d:"M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0M8 9h8"})]}),gym:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12"})}),club:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M3 21h18M5 21V9l7-5 7 5v12"}),n.jsx("path",{d:"M10 21v-6h4v6"})]}),kids:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"5",r:"2"}),n.jsx("path",{d:"M8 21l2-7-3-3 5-2 5 2-3 3 2 7"})]}),run:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"14",cy:"4",r:"2"}),n.jsx("path",{d:"M6 20l4-6 3 2 2-5 4 3M9 9l4-2 3 2"})]}),garden:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 22V12"}),n.jsx("path",{d:"M12 12c0-5 4-8 8-8 0 5-3 8-8 8ZM12 14c0-4-3-7-7-7 0 4 3 7 7 7Z"})]}),shield:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"}),n.jsx("path",{d:"m9 12 2 2 4-4"})]}),power:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M13 2 4 14h7l-1 8 9-12h-7z"})}),yoga:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"4.5",r:"2"}),n.jsx("path",{d:"M4 20h16M12 7v6M7 11l5 2 5-2M8 20l4-7 4 7"})]}),tennis:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"9",cy:"9",r:"6"}),n.jsx("path",{d:"M13.5 13.5 20 20M5 5c3 1 5 3 6 8"})]}),parking:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"4",y:"3",width:"16",height:"18",rx:"3"}),n.jsx("path",{d:"M10 17V7h3.5a3 3 0 0 1 0 6H10"})]}),cafe:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"}),n.jsx("path",{d:"M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3"})]}),spa:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 21c-4.5 0-8-3-8-7 3 0 6 1.5 8 4 2-2.5 5-4 8-4 0 4-3.5 7-8 7Z"}),n.jsx("path",{d:"M12 18c0-4 1.5-8 0-12-1.5 4 0 8 0 12Z"})]}),lift:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"5",y:"3",width:"14",height:"18",rx:"2"}),n.jsx("path",{d:"m9 9 3-3 3 3M9 15l3 3 3-3"})]}),wifi:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"}),n.jsx("circle",{cx:"12",cy:"19.5",r:"1"})]}),camera:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"7",width:"13",height:"10",rx:"2"}),n.jsx("path",{d:"m16 11 5-3v8l-5-3"})]}),theatre:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"12",rx:"2"}),n.jsx("path",{d:"M8 21h8M12 17v4"})]}),ball:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"})]}),party:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"m4 20 5-14 9 9-14 5Z"}),n.jsx("path",{d:"M14 4l1 2M19 9l2-1M17 3l-1 3"})]}),book:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"}),n.jsx("path",{d:"M4 19a2 2 0 0 1 2-2h13"})]}),pet:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"6",cy:"10",r:"2"}),n.jsx("circle",{cx:"10",cy:"6",r:"2"}),n.jsx("circle",{cx:"14",cy:"6",r:"2"}),n.jsx("circle",{cx:"18",cy:"10",r:"2"}),n.jsx("path",{d:"M8 17c0-3 2-5 4-5s4 2 4 5-2 3-4 3-4 0-4-3Z"})]}),ev:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"4",y:"4",width:"10",height:"16",rx:"2"}),n.jsx("path",{d:"M9 8l-2 4h4l-2 4M14 10h3a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0V9l-2-2"})]}),water:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"})}),concierge:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M4 18h16M6 18a6 6 0 0 1 12 0M12 9V7M10 7h4"})}),check:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"m8 12 3 3 5-6"})]})},Vl=[["Swimming Pool","pool"],["Gymnasium","gym"],["Club House","club"],["Kids Play Area","kids"],["Jogging Track","run"],["Landscaped Garden","garden"],["24x7 Security","shield"],["Power Backup","power"],["Yoga Deck","yoga"],["Tennis Court","tennis"],["Covered Parking","parking"],["Cafeteria","cafe"],["Spa & Sauna","spa"],["High-speed Lifts","lift"],["Wi-Fi Lounge","wifi"],["CCTV Surveillance","camera"],["Mini Theatre","theatre"],["Sports Court","ball"],["Party Hall","party"],["Library","book"],["Pet Park","pet"],["EV Charging","ev"],["Rainwater Harvesting","water"],["Concierge Service","concierge"]],Dv=["Swimming Pool","Gymnasium","Club House","Kids Play Area","Jogging Track","Landscaped Garden","24x7 Security","Power Backup"],Fv=[["pool","pool"],["swim","pool"],["gym","gym"],["fitness","gym"],["club","club"],["kid","kids"],["play","kids"],["jog","run"],["track","run"],["walk","run"],["garden","garden"],["park","garden"],["green","garden"],["secur","shield"],["power","power"],["backup","power"],["yoga","yoga"],["meditation","yoga"],["tennis","tennis"],["badminton","tennis"],["parking","parking"],["cafe","cafe"],["restaurant","cafe"],["spa","spa"],["sauna","spa"],["lift","lift"],["elevator","lift"],["wifi","wifi"],["wi-fi","wifi"],["cctv","camera"],["theatre","theatre"],["cinema","theatre"],["sport","ball"],["basket","ball"],["football","ball"],["party","party"],["banquet","party"],["library","book"],["pet","pet"],["ev ","ev"],["charging","ev"],["water","water"],["concierge","concierge"]],Wv=(e="")=>{var i;const t=Vl.find(([s])=>s.toLowerCase()===String(e).toLowerCase());if(t)return t[1];const r=` ${String(e).toLowerCase()} `;return((i=Fv.find(([s])=>r.includes(s)))==null?void 0:i[1])||"check"};function Sf({name:e,size:t=24}){return n.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:Bv[Wv(e)]})}const su="9090101401",au="+91 9090 101 401",Uv="919090101401",Hv={pin:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.6"})]}),building:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}),n.jsx("path",{d:"M16 9h2a2 2 0 0 1 2 2v10M3 21h18M8 7h4M8 11h4M8 15h4"})]}),area:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),n.jsx("path",{d:"M4 20 20 4M14 4h6v6"})]}),diamond:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M6 3h12l4 6-10 12L2 9z"}),n.jsx("path",{d:"M2 9h20M12 21 8 9l4-6 4 6-4 12"})]}),calendar:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2"}),n.jsx("path",{d:"M3 10h18M8 3v4M16 3v4"})]}),arrowR:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),arrowL:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M19 12H5M11 6l-6 6 6 6"})}),play:n.jsx(n.Fragment,{children:n.jsx("path",{d:"m9 7 8 5-8 5z",fill:"currentColor",stroke:"none"})}),check:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"m8 12 3 3 5-6"})]}),phone:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"})}),user:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"8",r:"4"}),n.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]}),mobile:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2"}),n.jsx("path",{d:"M11 18h2"})]}),mail:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),n.jsx("path",{d:"m3 7 9 6 9-6"})]}),chat:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"})}),lock:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),n.jsx("path",{d:"M8 11V8a4 4 0 0 1 8 0v3"})]}),plus:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M12 5v14M5 12h14"})}),download:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M4 21h16"})}),minus:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M5 12h14"})}),close:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),headset:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 14v-2a8 8 0 0 1 16 0v2"}),n.jsx("rect",{x:"3",y:"14",width:"4",height:"6",rx:"1.5"}),n.jsx("rect",{x:"17",y:"14",width:"4",height:"6",rx:"1.5"})]}),doc:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M6 3h8l4 4v14H6z"}),n.jsx("path",{d:"M14 3v4h4M9 12h6M9 16h6"})]}),star:n.jsx(n.Fragment,{children:n.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"})}),award:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"9",r:"6"}),n.jsx("path",{d:"m8.5 14-1.5 7 5-3 5 3-1.5-7"})]}),bulb:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"})}),leaf:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M5 19c0-8 5-14 14-14 0 9-6 14-14 14Z"}),n.jsx("path",{d:"M5 19 13 11"})]}),people:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),n.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),n.jsx("path",{d:"M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7"})]}),chart:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M4 20V10M10 20V4M16 20v-8M22 20H2"})}),key:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"8",cy:"15",r:"4"}),n.jsx("path",{d:"m10.8 12.2 8.7-8.7M16 6l3 3"})]}),trophy:n.jsx(n.Fragment,{children:n.jsx("path",{d:"M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4a3 3 0 0 0 4 4M16 6h4a3 3 0 0 1-4 4M12 13v4M8 21h8M10 17h4"})}),home:n.jsx(n.Fragment,{children:n.jsx("path",{d:"m3 11 9-7 9 7M5 10v10h14V10"})})},Z=({n:e,size:t=20,sw:r=1.7})=>n.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:Hv[e]}),$v=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:n.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),_v=(e="")=>{let t=String(e).trim().replace("#","");return t.length===3&&(t=t.split("").map(r=>r+r).join("")),/^[0-9a-f]{6}$/i.test(t)?[0,2,4].map(r=>parseInt(t.slice(r,r+2),16)):null},zt=(e,t,r)=>`rgb(${e.map((i,s)=>Math.round(i+(t[s]-i)*r)).join(",")})`,Gv=e=>{const t=_v(e);if(!t)return{};const r=t.map(a=>(a/=255,a<=.03928?a/12.92:((a+.055)/1.055)**2.4)).reduce((a,o,l)=>a+o*[.2126,.7152,.0722][l],0);if(r<.02)return{"--pd-brand":e,"--pd-deep":zt(t,[0,0,0],.2),"--pd-cta-bg":"var(--pd-grad)","--pd-cta-fg":"#111"};const i=[255,255,255],s=[0,0,0];return{"--pd-brand":e,"--pd-deep":zt(t,s,.35),"--pd-accent":r>.3?zt(t,s,.45):e,"--pd-on":zt(t,i,.72),"--pd-on-brand":r>.45?"#111":"#fff","--pd-soft":zt(t,i,.93),"--pd-line2":zt(t,i,.75),"--pd-tint":zt(t,i,.965),"--pd-glow":`rgba(${t.join(",")},.28)`,"--pd-grad":`linear-gradient(135deg, ${zt(t,i,.3)}, ${e} 55%, ${zt(t,s,.3)})`,"--pd-cta-bg":"#fff","--pd-cta-fg":e}},Qi=e=>String(e).padStart(2,"0"),To=(e="")=>String(e).trim().split(/\s+/)[0].toLowerCase(),Vv=e=>`https://wa.me/${Uv}?text=${encodeURIComponent(e)}`,Cf=e=>String(e.location||"").split(",").map(t=>t.trim()).find(t=>t&&!Yi(t)&&!Xi(t))||"",qv=(e="")=>{const t=String(e).split(/[–—\-|,]/).map(r=>r.trim()).filter(Boolean);return[t[0]||"",t[1]||""]},Kv=(e="")=>{const t=e.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);if(t)return{type:"iframe",src:`https://www.youtube.com/embed/${t[1]}?autoplay=1&rel=0`};const r=e.match(/vimeo\.com\/(\d+)/);return r?{type:"iframe",src:`https://player.vimeo.com/video/${r[1]}?autoplay=1`}:{type:"video",src:e}};function ou({images:e,tagline:t,taglineSub:r,auto:i=!0}){const[s,a]=j.useState(0),o=e.length;if(j.useEffect(()=>{if(!i||o<2)return;const c=setInterval(()=>a(d=>(d+1)%o),5e3);return()=>clearInterval(c)},[i,o]),!o)return null;const l=c=>a(d=>(d+c+o)%o);return n.jsxs("div",{className:"pd-shape",children:[n.jsx("span",{className:"pd-shape-accent","aria-hidden":"true"}),n.jsxs("div",{className:"pd-shape-frame",children:[e.map((c,d)=>n.jsx("img",{src:c,alt:"",className:d===s?"on":"",loading:d===0?"eager":"lazy"},c+d)),n.jsx("span",{className:"pd-shape-shade","aria-hidden":"true"}),t&&n.jsxs("div",{className:"pd-shape-tag",children:[n.jsx("strong",{children:t}),n.jsx("i",{"aria-hidden":"true"}),r&&n.jsx("small",{children:r})]}),o>1&&n.jsxs("div",{className:"pd-shape-ctrl",children:[n.jsx("button",{type:"button",onClick:()=>l(-1),"aria-label":"Previous photo",children:n.jsx(Z,{n:"arrowL",size:18})}),n.jsxs("span",{children:[Qi(s+1)," / ",Qi(o)]}),n.jsx("button",{type:"button",onClick:()=>l(1),"aria-label":"Next photo",children:n.jsx(Z,{n:"arrowR",size:18})})]})]})]})}function ct({children:e,center:t}){return n.jsx("div",{className:`pd-eyebrow${t?" center":""}`,children:e})}function lu({property:e,source:t,dark:r,compact:i,onDone:s}){const[a,o]=j.useState({name:"",phone:"",email:"",message:""}),[l,c]=j.useState("idle"),[d,h]=j.useState(""),u=x=>v=>o(A=>({...A,[x]:v.target.value})),p=async x=>{if(x.preventDefault(),a.name.trim().length<2)return h("Please enter your name");if(!/^\+?[\d\s-]{10,15}$/.test(a.phone.trim()))return h("Please enter a valid mobile number");h(""),c("sending");try{await $.post("/enquiries",{name:a.name.trim(),phone:a.phone.trim(),email:a.email.trim(),property:(e==null?void 0:e.title)+(t?` — ${t}`:""),message:a.message.trim()||t||"Enquiry from property page"}),c("sent"),s==null||s()}catch{c("error"),h("Could not send right now. Please call us instead.")}};return l==="sent"?n.jsxs("div",{className:`pd-form-done${r?" dark":""}`,children:[n.jsx(Z,{n:"check",size:34}),n.jsxs("strong",{children:["Thank you, ",a.name.split(" ")[0],"!"]}),n.jsx("span",{children:"Our property expert will call you shortly."})]}):n.jsxs("form",{className:`pd-form${r?" dark":""}`,onSubmit:p,noValidate:!0,children:[n.jsxs("label",{className:"pd-input",children:[n.jsx(Z,{n:"user",size:17}),n.jsx("input",{value:a.name,onChange:u("name"),placeholder:"Full Name",autoComplete:"name"})]}),n.jsxs("label",{className:"pd-input",children:[n.jsx(Z,{n:"mobile",size:17}),n.jsx("input",{value:a.phone,onChange:u("phone"),placeholder:"Mobile Number",inputMode:"tel",autoComplete:"tel"})]}),!i&&n.jsxs("label",{className:"pd-input",children:[n.jsx(Z,{n:"mail",size:17}),n.jsx("input",{value:a.email,onChange:u("email"),placeholder:"Email Address (Optional)",inputMode:"email",autoComplete:"email"})]}),!i&&n.jsxs("label",{className:"pd-input area",children:[n.jsx(Z,{n:"chat",size:17}),n.jsx("textarea",{value:a.message,onChange:u("message"),placeholder:"Your Message (Optional)",rows:3})]}),d&&n.jsx("div",{className:"pd-form-err",children:d}),n.jsx("button",{type:"submit",className:"pd-btn gold block",disabled:l==="sending",children:l==="sending"?"Sending…":n.jsxs(n.Fragment,{children:["REQUEST CALLBACK ",n.jsx(Z,{n:"arrowR",size:16})]})}),n.jsxs("div",{className:"pd-form-safe",children:[n.jsx(Z,{n:"lock",size:13})," Your information is safe with us."]})]})}const Yv=["+91","+971","+1","+44","+65","+61"];function Xv({property:e}){const[t,r]=j.useState({name:"",code:"+91",phone:"",agree:!0}),[i,s]=j.useState("idle"),[a,o]=j.useState(""),l=d=>h=>r(u=>({...u,[d]:h.target.type==="checkbox"?h.target.checked:h.target.value})),c=async d=>{if(d.preventDefault(),t.name.trim().length<2)return o("Please enter your name");if(!/^[\d\s-]{7,14}$/.test(t.phone.trim()))return o("Please enter a valid mobile number");if(!t.agree)return o("Please allow us to contact you");o(""),s("sending");try{await $.post("/enquiries",{name:t.name.trim(),phone:`${t.code} ${t.phone.trim()}`,email:"",property:e.title,message:"Enquiry from property page (top form)"}),s("sent")}catch{s("idle"),o("Could not send right now. Please call us instead.")}};return i==="sent"?n.jsxs("div",{className:"pd-form-done",children:[n.jsx(Z,{n:"check",size:34}),n.jsxs("strong",{children:["Thank you, ",t.name.split(" ")[0],"!"]}),n.jsx("span",{children:"Our property expert will call you shortly."})]}):n.jsxs("form",{className:"pd-hform",onSubmit:c,noValidate:!0,children:[n.jsxs("label",{children:["FULL NAME",n.jsx("input",{value:t.name,onChange:l("name"),placeholder:"Enter your name",autoComplete:"name"})]}),n.jsxs("label",{children:["MOBILE NUMBER",n.jsxs("span",{className:"pd-hform-phone",children:[n.jsx("select",{value:t.code,onChange:l("code"),"aria-label":"Country code",children:Yv.map(d=>n.jsx("option",{children:d},d))}),n.jsx("input",{value:t.phone,onChange:l("phone"),placeholder:"Enter mobile number",inputMode:"tel",autoComplete:"tel-national"})]})]}),n.jsxs("label",{className:"pd-hform-check",children:[n.jsx("input",{type:"checkbox",checked:t.agree,onChange:l("agree")})," I authorize company representatives to Call, SMS, Email or WhatsApp me."]}),a&&n.jsx("div",{className:"pd-form-err",children:a}),n.jsx("button",{type:"submit",disabled:i==="sending",children:i==="sending"?"SENDING…":"SUBMIT"})]})}function cu({open:e,onClose:t,children:r,wide:i,dark:s}){return j.useEffect(()=>{if(!e)return;const a=l=>l.key==="Escape"&&t();document.addEventListener("keydown",a);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",a),document.body.style.overflow=o}},[e,t]),e?n.jsx("div",{className:"pd-modal",role:"dialog","aria-modal":"true",onClick:t,children:n.jsxs("div",{className:`pd-modal-box${i?" wide":""}${s?" dark":""}`,onClick:a=>a.stopPropagation(),children:[n.jsx("button",{type:"button",className:"pd-modal-x",onClick:t,"aria-label":"Close",children:n.jsx(Z,{n:"close"})}),r]})}):null}const du=[["overview","Overview"],["pricing","Price"],["highlights","Highlights"],["amenities","Amenities"],["gallery","Gallery"],["location","Location"],["about","Developer"],["faqs","FAQs"]];function Qv(){var C;const{id:e}=Qc(),[t,r]=j.useState(null),[i,s]=j.useState([]),[a,o]=j.useState("loading"),[l,c]=j.useState(!1),[d,h]=j.useState(null),[u,p]=j.useState(0),[x,v]=j.useState("overview"),[A,E]=j.useState(!1);j.useEffect(()=>{let P=!0;return o("loading"),c(!1),p(0),E(!1),window.scrollTo(0,0),Promise.all([$.get(`/properties/${e}`),$.get("/properties").catch(()=>({data:[]}))]).then(([R,L])=>{P&&(r(R.data),s(L.data||[]),o("ok"))}).catch(()=>P&&o("missing")),()=>{P=!1}},[e]),j.useEffect(()=>{if(a!=="ok")return;const P=new IntersectionObserver(R=>R.forEach(L=>L.isIntersecting&&v(L.target.id)),{rootMargin:"-45% 0px -50% 0px"});return du.forEach(([R])=>{const L=document.getElementById(R);L&&P.observe(L)}),()=>P.disconnect()},[a,t]);const m=j.useMemo(()=>{var Ke,En,Zt,Ye;if(!t)return null;const P=Zn(t),R=[...new Set([t.image,...t.gallery||[]].filter(Boolean))],L=String(t.title||"").trim().split(/\s+/),W=L.length>1?L.slice(0,-1).join(" "):L[0],z=L.length>1?L[L.length-1]:"",Y=t.developer||"the developer",ee=Cf(t)||P.locality,[N,_]=qv(t.towers),I=((Ke=t.overview)==null?void 0:Ke.trim())||`${t.title} is a ${(t.propertyTypeDetail||t.type||"residential").toLowerCase()} project by ${Y}, located at ${t.location}. It offers ${t.bhk||"premium"} ${["Commercial","Retail","SCO"].includes(t.type)?"spaces":"residences"} priced ${t.priceRange||t.price||"on request"}${t.possession?`, with possession expected by ${t.possession}`:""}. Thoughtfully planned with world-class amenities and excellent connectivity, it is one of the most sought-after addresses in ${P.locality||P.city||"the city"}.`,K=[ee&&{icon:"pin",value:ee,label:P.city||P.locality||"Location"},N&&{icon:"building",value:N,label:_||"Towers"},t.landArea&&{icon:"area",value:t.landArea,label:"Land Area"},{icon:"diamond",value:t.propertyTypeDetail||t.type||"Residences",label:t.bhk||"Configuration"},t.possession&&!t.landArea&&{icon:"calendar",value:t.possession,label:"Possession"}].filter(Boolean).slice(0,4),T=[...String(t.bhk||"").matchAll(/\d+/g)].map(H=>H[0]),D=(t.pricing||[]).filter(H=>H.type||H.size||H.price).length?t.pricing:T.length?T.map(H=>({type:`${H} BHK`,size:"On request",price:"On request"})):[{type:t.bhk||t.type,size:"On request",price:t.priceRange||t.price||"On request"}],V=(t.highlights||[]).filter(Boolean).length?t.highlights.filter(Boolean):[`Prime address at ${t.location}`,`${t.bhk||"Premium"} ${t.type?t.type.toLowerCase()+"s":"homes"} by ${Y}`,t.landArea?`Spread across ${t.landArea}${t.towers?` with ${t.towers}`:""}`:"Thoughtfully planned low-density layout",t.rera!==!1?"RERA registered project with transparent pricing":"Transparent pricing and documentation"],b=(t.amenities||[]).length?t.amenities:Dv,F=t.galleryCaptions||[],te=(t.gallery||[]).map((H,je)=>({src:H,caption:F[je]||""})).filter(H=>H.src);te.length<5&&t.image&&!te.some(H=>H.src===t.image)&&te.unshift({src:t.image,caption:""});const Te=To(t.developer),Q=Te?i.filter(H=>H.id!==t.id&&To(H.developer)===Te):[],Be=i.filter(H=>H.id!==t.id&&H.category===t.category).slice(0,4),St=Q.length?Q:i.filter(H=>H.id!==t.id).slice(0,8),ne=t.about||{},he=((En=ne.heading)==null?void 0:En.trim())||`About ${t.developer||"the Developer"}`,we=((Zt=ne.description)==null?void 0:Zt.trim())||`${t.developer||"The developer"} is known for its commitment to quality, innovation and a customer-centric approach. With landmark projects${Q.length?` such as ${Q.slice(0,3).map(H=>H.title).join(", ")}`:""}, it continues to set new benchmarks in design, construction and lifestyle across ${P.city||"the region"}.`,Oe=(t.faqs||[]).filter(H=>H.question).length?t.faqs.filter(H=>H.question):[{question:`What is the exact location of ${t.title}?`,answer:`${t.title} is located at ${t.location}, with excellent connectivity to key landmarks, offices and schools.`},{question:`What is the expected possession date for ${t.title}?`,answer:t.possession?`Possession is expected by ${t.possession}. Our team can share the latest construction updates.`:"Our team will share the latest possession timeline and construction updates on request."},{question:`How can I verify the RERA approval status of ${t.title}?`,answer:t.rera!==!1?`${t.title} is a RERA registered project. Our experts can share the RERA number and help you verify it on the state RERA website.`:"Please contact our team for the latest approval details."},{question:`Who is the developer of ${t.title}?`,answer:`${t.title} is developed by ${t.developer||"a reputed developer"}.`},{question:`What types of units are available in ${t.title}?`,answer:`${t.title} offers ${t.bhk||"multiple configurations"}${t.priceRange?`, priced ${t.priceRange}`:""}.`}];return{place:P,images:R,titleA:W,titleB:z,overview:I,facts:K,pricing:D,highlights:V,amenities:b,gallery:te,iconic:St,similar:Be,aboutHeading:he,aboutDesc:we,aboutSub:((Ye=ne.subheading)==null?void 0:Ye.trim())||"Building a Better Tomorrow",aboutImage:ne.image||R[1]||R[0],aboutStats:(ne.stats||[]).filter(H=>H.value||H.label),faqs:Oe,sameDev:Q.length>0}},[t,i]);if(a==="loading")return n.jsxs("div",{className:"pd-loading",children:[n.jsx("span",{className:"pd-spin"})," Loading property…"]});if(a==="missing"||!t||!m)return n.jsx(n.Fragment,{children:n.jsx("div",{className:"pd-loading",children:n.jsxs("div",{children:[n.jsx("h2",{children:"Property not found"}),n.jsx("p",{children:"It may have been removed."}),n.jsx(q,{className:"pd-btn dark",to:"/search",children:"Browse properties"})]})})});const f=P=>h({kind:"enquiry",source:P}),y=t.brochure?`${t.brochure}${t.brochure.includes("?")?"&":"?"}download=1`:"",w=({className:P,children:R})=>y?n.jsx("a",{className:P,href:y,download:!0,target:"_blank",rel:"noreferrer",children:R}):n.jsx("button",{type:"button",className:P,onClick:()=>f("Brochure request"),children:R}),k=P=>{const R=document.getElementById(P);R&&window.scrollTo({top:R.getBoundingClientRect().top+window.scrollY-66,behavior:"smooth"})},O=m.aboutHeading.split(/\s+/),g=[["Property Type",t.propertyTypeDetail||t.type],["Possession",t.possession],["About Project",t.towers||t.bhk],["Land Area",t.landArea||(t.towers?t.bhk:"")]].filter(([,P])=>P);return n.jsxs("div",{className:"pd-page",style:Gv(t.brandColor),children:[n.jsx("div",{className:"pd-bar",children:n.jsxs("div",{className:"pd-wrap pd-bar-inner",children:[t.logo&&!A&&n.jsx("span",{className:"pd-bar-logo",children:n.jsx("img",{src:t.logo,alt:t.developer||t.title,onError:()=>E(!0)})}),n.jsxs("div",{className:"pd-bar-title",children:[n.jsx("strong",{children:t.title}),n.jsx("span",{children:t.priceRange||t.price})]}),n.jsx("nav",{className:"pd-bar-nav",children:du.map(([P,R])=>n.jsx("button",{type:"button",className:x===P?"on":"",onClick:()=>k(P),children:R},P))}),n.jsx("button",{type:"button",className:"pd-btn gold sm",onClick:()=>f("Enquire now"),children:"Enquire Now"})]})}),n.jsxs("section",{className:"pd-hero",children:[m.images[0]&&n.jsx("img",{className:"pd-hero-bg",src:m.images[0],alt:t.title}),n.jsx("span",{className:"pd-hero-shade","aria-hidden":"true"}),n.jsxs("div",{className:"pd-wrap pd-hero-inner",children:[n.jsxs("div",{className:"pd-hero-info",children:[n.jsxs("div",{className:"pd-glass pd-hero-name",children:[n.jsx("span",{className:"pd-hero-eyebrow",children:(t.propertyTypeDetail||t.type||"Residential").toUpperCase()}),n.jsx("h1",{children:t.title}),n.jsx("p",{children:t.location})]}),n.jsxs("div",{className:"pd-glass pd-hero-facts",children:[g.length>0&&n.jsx("div",{className:"pd-hero-grid",children:g.map(([P,R])=>n.jsxs("div",{children:[n.jsx("small",{children:P.toUpperCase()}),n.jsx("strong",{children:R})]},P))}),n.jsxs("div",{className:"pd-hero-price",children:[n.jsx("small",{children:"STARTING FROM"}),n.jsxs("strong",{children:[t.price||t.priceRange||"Price on request",t.price||t.priceRange?"*":""]})]})]})]}),n.jsxs("div",{className:"pd-hero-card",children:[n.jsx("h2",{children:"Get in Touch with us."}),n.jsx("p",{children:"ENTER YOUR DETAILS BELOW TO PROCEED"}),n.jsx(Xv,{property:t})]})]})]}),n.jsx("section",{id:"overview",className:"pd-section pd-overview",children:n.jsxs("div",{className:"pd-wrap pd-split",children:[n.jsxs("div",{className:"pd-copy",children:[n.jsx(ct,{children:"OVERVIEW"}),n.jsxs("h2",{className:"pd-title",children:[n.jsx("span",{children:m.titleA}),m.titleB&&n.jsx("span",{className:"gold",children:m.titleB})]}),n.jsx("p",{className:`pd-desc${l?" open":""}`,children:m.overview}),m.overview.length>260&&n.jsxs("button",{type:"button",className:"pd-readmore",onClick:()=>c(P=>!P),children:[l?"Read Less":"Read More"," ",n.jsx(Z,{n:"arrowR",size:16})]}),n.jsx("div",{className:"pd-facts",style:{"--pd-facts":Math.max(m.facts.length,2)},children:m.facts.map(P=>n.jsxs("div",{className:"pd-fact",children:[n.jsx("span",{className:"pd-fact-ic",children:n.jsx(Z,{n:P.icon,size:20})}),n.jsxs("span",{children:[n.jsx("strong",{children:P.value}),n.jsx("small",{children:P.label})]})]},P.icon+P.value))}),n.jsxs("div",{className:"pd-price-line",children:[n.jsx("span",{children:"Starting from"}),n.jsx("strong",{children:t.price||t.priceRange||"Price on request"}),t.rera!==!1&&n.jsx("em",{children:"✓ RERA"})]}),n.jsxs("div",{className:"pd-actions",children:[n.jsxs(w,{className:"pd-btn dark",children:[y?"DOWNLOAD BROCHURE":"REQUEST BROCHURE"," ",n.jsx(Z,{n:y?"download":"arrowR",size:16})]}),t.videoUrl&&n.jsxs("button",{type:"button",className:"pd-video-btn",onClick:()=>h({kind:"video"}),children:[n.jsx("span",{children:n.jsx(Z,{n:"play",size:18})})," WATCH VIDEO"]})]})]}),n.jsx(ou,{images:m.images,tagline:t.tagline||"A New Icon Rises",taglineSub:t.taglineSub||"Luxury living beyond compare"})]})}),n.jsx("section",{id:"pricing",className:"pd-section",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(ct,{center:!0,children:"SPACE & PRICING"}),n.jsxs("h2",{children:[t.title," ",n.jsx("span",{className:"gold",children:"Price"})]}),n.jsx("p",{children:"Unit sizes and prices — talk to our expert for the latest offers and availability."})]}),n.jsxs("div",{className:"pd-table",children:[n.jsxs("div",{className:"pd-tr head",children:[n.jsx("span",{children:"Unit Type"}),n.jsx("span",{children:"Size"}),n.jsx("span",{children:"Price"}),n.jsx("span",{})]}),m.pricing.map((P,R)=>n.jsxs("div",{className:"pd-tr",children:[n.jsxs("span",{className:"strong",children:[n.jsx(Z,{n:"home",size:17})," ",P.type||"—"]}),n.jsx("span",{children:P.size||"On request"}),n.jsx("span",{className:"gold",children:P.price||"On request"}),n.jsx("span",{children:n.jsx("button",{type:"button",className:"pd-btn outline xs",onClick:()=>f(`Price details: ${P.type}`),children:"Get Details"})})]},R))]}),n.jsxs("div",{className:"pd-center-actions",children:[n.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>f("Price list request"),children:["GET COMPLETE PRICE LIST ",n.jsx(Z,{n:"arrowR",size:16})]}),n.jsxs("a",{className:"pd-call-pill",href:`tel:${su}`,children:[n.jsx(Z,{n:"phone",size:16})," Speak with an expert ",n.jsx("b",{children:au})]})]})]})}),n.jsx("section",{id:"highlights",className:"pd-section tint",children:n.jsxs("div",{className:"pd-wrap pd-split",children:[n.jsxs("div",{className:"pd-copy",children:[n.jsx(ct,{children:"EXPLORE FEATURES"}),n.jsx("h2",{className:"pd-h2-line",children:"Project Highlights"}),n.jsx("div",{className:"pd-hl-list",children:m.highlights.map((P,R)=>n.jsxs("div",{className:"pd-hl",children:[n.jsx("span",{className:"pd-hl-ic",children:n.jsx(Z,{n:"check",size:18})}),n.jsx("span",{children:P})]},R))})]}),n.jsx(ou,{images:[...m.images].reverse(),tagline:"A New Way of Living",taglineSub:t.taglineSub||"Luxury living beyond compare"})]})}),n.jsx("section",{id:"amenities",className:"pd-section",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(ct,{center:!0,children:"LUXURY LIFESTYLE"}),n.jsxs("h2",{children:["World-class ",n.jsx("span",{className:"gold",children:"Amenities"})]}),n.jsx("p",{children:"Curated for luxury, wellness and community living."})]}),n.jsx("div",{className:"pd-amenities",children:m.amenities.map(P=>n.jsxs("div",{className:"pd-amenity",children:[n.jsx("span",{children:n.jsx(Sf,{name:P,size:26})}),n.jsx("strong",{children:P})]},P))})]})}),n.jsx("section",{id:"gallery",className:"pd-section soft",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(ct,{center:!0,children:"GALLERY"}),n.jsxs("h2",{className:"serif",children:[t.title," ",n.jsx("span",{className:"gold",children:"Gallery"})]}),n.jsx("p",{children:"A glimpse into a world of unmatched luxury, design and lifestyle."})]}),n.jsx("div",{className:`pd-bento n${Math.min(m.gallery.length,5)}`,children:m.gallery.slice(0,5).map((P,R)=>n.jsxs("button",{type:"button",className:`pd-bento-item i${R}`,onClick:()=>h({kind:"gallery",index:R}),children:[n.jsx("img",{src:P.src,alt:P.caption||`${t.title} photo ${R+1}`,loading:"lazy"}),P.caption&&n.jsxs("span",{className:"pd-cap",children:[P.caption,n.jsx("i",{"aria-hidden":"true"})]})]},P.src+R))}),m.gallery.length>0&&n.jsx("div",{className:"pd-center-actions",children:n.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>h({kind:"gallery",index:0}),children:["VIEW FULL GALLERY ",n.jsx(Z,{n:"arrowR",size:16})]})})]})}),n.jsx("section",{id:"location",className:"pd-section",children:n.jsxs("div",{className:"pd-wrap pd-loc",children:[n.jsxs("div",{className:"pd-copy",children:[n.jsx(ct,{children:"LOCATION"}),n.jsxs("h2",{className:"pd-h2",children:["Prime ",n.jsx("span",{className:"gold",children:"Address"})]}),n.jsxs("p",{className:"pd-desc open",children:[t.title," is located at ",t.location,m.place.locality?`, one of the most sought-after micro-markets in ${m.place.city||"the city"}`:"","."]}),n.jsxs("div",{className:"pd-loc-card",children:[n.jsx("span",{className:"pd-fact-ic",children:n.jsx(Z,{n:"pin",size:20})}),n.jsxs("span",{children:[n.jsx("strong",{children:t.location}),n.jsx("small",{children:[m.place.locality,m.place.city].filter(Boolean).join(" · ")})]})]}),n.jsxs("a",{className:"pd-btn outline",href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${t.title}, ${t.location}`)}`,target:"_blank",rel:"noreferrer",children:["OPEN IN GOOGLE MAPS ",n.jsx(Z,{n:"arrowR",size:16})]})]}),n.jsx("div",{className:"pd-map",children:n.jsx("iframe",{title:`${t.title} location map`,src:`https://maps.google.com/maps?q=${encodeURIComponent(t.location||t.title)}&z=14&output=embed`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})}),n.jsxs("section",{id:"about",className:"pd-section",children:[n.jsxs("div",{className:"pd-wrap pd-split about",children:[n.jsxs("div",{className:"pd-copy",children:[n.jsx(ct,{children:"PROJECT EXCELLENCE"}),n.jsxs("h2",{className:"pd-h2",children:[O[0]," ",n.jsx("span",{className:"gold",children:O.slice(1).join(" ")})]}),n.jsx("div",{className:"pd-about-sub",children:m.aboutSub}),n.jsx("p",{className:"pd-desc open",children:m.aboutDesc}),m.aboutStats.length>0&&n.jsx("div",{className:"pd-stats",children:m.aboutStats.map((P,R)=>n.jsxs("div",{className:"pd-stat",children:[n.jsx("span",{className:"pd-stat-ic",children:n.jsx(Z,{n:["chart","key","people","trophy"][R%4],size:22})}),n.jsxs("span",{children:[n.jsx("strong",{children:P.value}),n.jsx("small",{children:P.label})]})]},R))}),n.jsx("div",{className:"pd-features",children:[["award","Quality Construction"],["bulb","Innovative Designs"],["leaf","Sustainable Development"],["people","Customer Centric Approach"]].map(([P,R])=>n.jsxs("div",{className:"pd-feature",children:[n.jsx("span",{children:n.jsx(Z,{n:P,size:20})}),R]},R))})]}),n.jsxs("div",{className:"pd-about-visual",children:[n.jsx("img",{src:m.aboutImage,alt:m.aboutHeading,loading:"lazy"}),n.jsx("span",{className:"pd-about-shade","aria-hidden":"true"}),n.jsxs("div",{className:"pd-about-quote",children:[n.jsx("i",{"aria-hidden":"true"}),"SPACES",n.jsx("br",{}),"THAT INSPIRE",n.jsx("br",{}),"A BRIGHTER",n.jsx("br",{}),"TOMORROW"]}),n.jsxs("div",{className:"pd-about-bar",children:[n.jsxs("span",{children:[n.jsx(Z,{n:"home",size:18})," Iconic Developments"]}),n.jsxs("span",{children:[n.jsx(Z,{n:"leaf",size:18})," Greener Communities"]}),n.jsxs("span",{children:[n.jsx(Z,{n:"people",size:18})," A Better Tomorrow"]})]})]})]}),m.iconic.length>0&&n.jsx("div",{className:"pd-iconic",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-iconic-head",children:[n.jsxs("div",{children:[n.jsx(ct,{children:m.sameDev?"OUR SIGNATURE DEVELOPMENTS":"MORE PROJECTS"}),n.jsx("h2",{className:"pd-h2",children:m.sameDev?n.jsxs(n.Fragment,{children:["Iconic Projects ",n.jsxs("span",{className:"gold",children:["by ",t.developer]})]}):n.jsxs(n.Fragment,{children:["Explore More ",n.jsx("span",{className:"gold",children:"Projects"})]})})]}),n.jsxs(q,{className:"pd-btn outline sm",to:m.sameDev?`/search?q=${encodeURIComponent(To(t.developer))}`:"/search",children:["VIEW ALL PROJECTS ",n.jsx(Z,{n:"arrowR",size:15})]})]}),n.jsx(Zv,{items:m.iconic})]})})]}),n.jsx("section",{id:"faqs",className:"pd-section",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsxs("div",{className:"pd-head center",children:[n.jsx(ct,{center:!0,children:"CONCIERGE SUPPORT"}),n.jsxs("h2",{children:["Everything You ",n.jsx("span",{className:"gold",children:"Need to Know"})]}),n.jsxs("p",{children:["Get answers to the most common questions about ",t.title,".",n.jsx("br",{}),"Our team is here to help you at every step of your journey."]}),n.jsxs("a",{className:"pd-expert",href:`tel:${su}`,children:[n.jsx("span",{className:"pd-expert-ic",children:n.jsx(Z,{n:"phone",size:20})}),n.jsxs("span",{children:[n.jsx("small",{children:"TALK TO OUR EXPERT"}),n.jsx("strong",{children:au}),n.jsx("em",{children:"AVAILABLE NOW"})]})]})]}),n.jsxs("div",{className:"pd-faq-grid",children:[n.jsxs("div",{children:[n.jsx("div",{className:"pd-faqs",children:m.faqs.map((P,R)=>n.jsxs("div",{className:`pd-faq${u===R?" open":""}`,children:[n.jsxs("button",{type:"button",onClick:()=>p(u===R?-1:R),"aria-expanded":u===R,children:[n.jsx("span",{className:"pd-faq-no",children:Qi(R+1)}),n.jsx("span",{className:"pd-faq-q",children:P.question}),n.jsx("span",{className:"pd-faq-tog",children:n.jsx(Z,{n:u===R?"minus":"plus",size:16,sw:2})})]}),u===R&&P.answer&&n.jsx("p",{children:P.answer})]},R))}),n.jsx("div",{className:"pd-perks",children:[["headset","Dedicated","Relationship Manager"],["doc","Latest Project","Updates"],["calendar","Site Visit","Assistance"],["star","Exclusive Offers","& Pricing Details"]].map(([P,R,L])=>n.jsxs("div",{className:"pd-perk",children:[n.jsx("span",{children:n.jsx(Z,{n:P,size:20})}),n.jsxs("small",{children:[R,n.jsx("br",{}),L]})]},R))})]}),n.jsxs("div",{className:"pd-touch",children:[n.jsx(ct,{children:"GET IN TOUCH"}),n.jsxs("h3",{children:["Get in Touch with ",n.jsx("span",{className:"gold",children:"Us."})]}),n.jsx("p",{children:"Fill in your details and our team will get back to you shortly."}),n.jsx(lu,{property:t,source:"Get in touch",dark:!0})]})]})]})}),m.similar.length>0&&n.jsx("section",{className:"pd-section tint",children:n.jsxs("div",{className:"pd-wrap",children:[n.jsx("div",{className:"pd-iconic-head",children:n.jsxs("div",{children:[n.jsx(ct,{children:"EXPLORE MORE"}),n.jsxs("h2",{className:"pd-h2",children:["Similar ",n.jsx("span",{className:"gold",children:"Projects"})]})]})}),n.jsx("div",{className:"pd-similar",children:m.similar.map(P=>n.jsxs(q,{to:`/property/${P.id}`,className:"pd-sim",children:[n.jsx("img",{src:P.image,alt:P.title,loading:"lazy"}),n.jsxs("div",{children:[n.jsx("strong",{children:P.title}),n.jsx("span",{className:"gold",children:P.priceRange||P.price}),n.jsxs("small",{children:[n.jsx(Z,{n:"pin",size:13})," ",P.location]})]})]},P.id))})]})}),n.jsx("div",{className:"pd-dock",children:n.jsxs("div",{className:"pd-wrap pd-dock-inner",children:[n.jsxs("div",{className:"pd-dock-prop",children:[m.images[0]&&n.jsx("img",{src:m.images[0],alt:""}),n.jsxs("span",{children:[n.jsx("strong",{children:t.title}),n.jsx("small",{children:t.price||t.priceRange?`${t.price||t.priceRange}* Onwards`:"Price on request"})]})]}),n.jsxs("div",{className:"pd-dock-actions",children:[n.jsxs(w,{className:"pd-dock-brochure",children:[n.jsx(Z,{n:"download",size:20}),n.jsx("span",{children:"Brochure"})]}),n.jsxs("button",{type:"button",className:"pd-dock-enquire",onClick:()=>f("Enquire now"),children:[n.jsx(Z,{n:"mail",size:18}),n.jsx("span",{children:"ENQUIRE NOW"})]}),n.jsx("a",{className:"pd-dock-wa",href:Vv(`Hi, I am interested in ${t.title}. Please share more details.`),target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",children:n.jsx($v,{})})]})]})}),n.jsxs(cu,{open:(d==null?void 0:d.kind)==="enquiry",onClose:()=>h(null),dark:!0,children:[n.jsxs("div",{className:"pd-modal-head",children:[n.jsx(ct,{children:((C=d==null?void 0:d.source)==null?void 0:C.toUpperCase())||"ENQUIRE"}),n.jsx("h3",{children:t.title}),n.jsx("p",{children:"Share your details and our expert will call you back."})]}),n.jsx(lu,{property:t,source:d==null?void 0:d.source,dark:!0},d==null?void 0:d.source)]}),n.jsx(cu,{open:(d==null?void 0:d.kind)==="video",onClose:()=>h(null),wide:!0,children:t.videoUrl&&(()=>{const P=Kv(t.videoUrl);return P.type==="iframe"?n.jsx("div",{className:"pd-video",children:n.jsx("iframe",{src:P.src,title:`${t.title} video`,allow:"autoplay; encrypted-media; fullscreen",allowFullScreen:!0})}):n.jsx("div",{className:"pd-video",children:n.jsx("video",{src:P.src,controls:!0,autoPlay:!0,playsInline:!0})})})()}),(d==null?void 0:d.kind)==="gallery"&&n.jsx(Jv,{items:m.gallery,start:d.index||0,title:t.title,onClose:()=>h(null)})]})}function Zv({items:e}){const[t,r]=j.useState(null),i=s=>t==null?void 0:t.scrollBy({left:s*(t.clientWidth*.8),behavior:"smooth"});return n.jsxs("div",{className:"pd-iconic-row-wrap",children:[n.jsx("button",{type:"button",className:"pd-round left",onClick:()=>i(-1),"aria-label":"Previous",children:n.jsx(Z,{n:"arrowL",size:18})}),n.jsx("div",{className:"pd-iconic-row",ref:r,children:e.map(s=>n.jsxs(q,{to:`/property/${s.id}`,className:"pd-iconic-card",children:[n.jsx("img",{src:s.image,alt:s.title,loading:"lazy"}),n.jsxs("div",{children:[n.jsxs("span",{children:[n.jsx("strong",{children:s.title}),n.jsxs("small",{children:[n.jsx(Z,{n:"pin",size:13})," ",Cf(s)||Zn(s).locality,", ",Zn(s).city]})]}),n.jsx("em",{children:n.jsx(Z,{n:"arrowR",size:16})})]})]},s.id))}),n.jsx("button",{type:"button",className:"pd-round right",onClick:()=>i(1),"aria-label":"Next",children:n.jsx(Z,{n:"arrowR",size:18})})]})}function Jv({items:e,start:t,title:r,onClose:i}){const[s,a]=j.useState(t),o=e.length;j.useEffect(()=>{const c=h=>{h.key==="Escape"&&i(),h.key==="ArrowRight"&&a(u=>(u+1)%o),h.key==="ArrowLeft"&&a(u=>(u-1+o)%o)};document.addEventListener("keydown",c);const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=d}},[o,i]);const l=e[s];return n.jsxs("div",{className:"pd-lightbox",role:"dialog","aria-modal":"true","aria-label":`${r} gallery`,children:[n.jsx("button",{type:"button",className:"pd-lb-x",onClick:i,"aria-label":"Close",children:n.jsx(Z,{n:"close",size:22})}),n.jsxs("div",{className:"pd-lb-stage",children:[n.jsx("button",{type:"button",className:"pd-round",onClick:()=>a(c=>(c-1+o)%o),"aria-label":"Previous",children:n.jsx(Z,{n:"arrowL",size:20})}),n.jsxs("figure",{children:[n.jsx("img",{src:l.src,alt:l.caption||r}),n.jsxs("figcaption",{children:[n.jsx("span",{children:l.caption||r}),n.jsxs("b",{children:[Qi(s+1)," / ",Qi(o)]})]})]}),n.jsx("button",{type:"button",className:"pd-round",onClick:()=>a(c=>(c+1)%o),"aria-label":"Next",children:n.jsx(Z,{n:"arrowR",size:20})})]}),n.jsx("div",{className:"pd-lb-thumbs",children:e.map((c,d)=>n.jsx("button",{type:"button",className:d===s?"on":"",onClick:()=>a(d),children:n.jsx("img",{src:c.src,alt:"",loading:"lazy"})},c.src+d))})]})}function eb(){const[e,t]=j.useState([]),[r,i]=j.useState(0),[s,a]=j.useState(!0),[o,l]=j.useState(!0),[c,d]=j.useState(!0),h=j.useRef(null);j.useEffect(()=>{$.get("/snaps").then(A=>{t(A.data),d(!1)}).catch(()=>d(!1))},[]),j.useEffect(()=>{h.current&&(s?h.current.play().catch(()=>{}):h.current.pause())},[s,r]),j.useEffect(()=>{const A=E=>{E.key==="ArrowDown"&&x(),E.key==="ArrowUp"&&v(),E.key===" "&&(E.preventDefault(),a(m=>!m))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)});const u=e[r],p=e.length,x=()=>i(A=>(A+1)%p),v=()=>i(A=>(A-1+p)%p);return c?n.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"Loading snaps..."}):u?n.jsxs("div",{style:{minHeight:"100vh",background:"#0a0a0a",color:"#fff",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",borderBottom:"1px solid rgba(255,255,255,.08)",background:"#0a0a0a",position:"sticky",top:0,zIndex:10},children:[n.jsxs(q,{to:"/",style:{display:"flex",alignItems:"center",gap:8,color:"#fff",fontWeight:800,fontSize:14},children:[n.jsx("span",{style:{width:28,height:28,background:"#d8232a",borderRadius:6,display:"grid",placeItems:"center",fontWeight:900,fontSize:12},children:"100"}),"acress.com",n.jsx("span",{style:{fontWeight:400,opacity:.6,fontSize:12,marginLeft:4},children:"/ property-snaps"})]}),n.jsx(q,{to:"/",style:{width:34,height:34,borderRadius:"50%",background:"rgba(255,255,255,.08)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.12)"},children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"14px",display:"grid",gridTemplateColumns:"420px 420px",gap:18,justifyContent:"center",alignItems:"start"},className:"snaps-layout",children:[n.jsxs("div",{style:{position:"relative",background:"#000",borderRadius:20,overflow:"hidden",aspectRatio:"9/16",maxHeight:"78vh",border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 20px 60px rgba(0,0,0,.6)"},className:"video-box",children:[n.jsx("video",{ref:h,src:u.videoUrl,poster:u.image||u.thumbnail,muted:o,loop:!0,playsInline:!0,autoPlay:!0,style:{width:"100%",height:"100%",objectFit:"cover"},onClick:()=>a(!s)},u.id),n.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:12,background:"linear-gradient(to bottom, rgba(0,0,0,.55) 0%, transparent 100%)",display:"flex",alignItems:"center",gap:10},children:[n.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",flexShrink:0,border:"2px solid rgba(255,255,255,.9)"},children:n.jsx("span",{style:{fontWeight:900,fontSize:11,color:"#d8232a"},children:"100"})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontWeight:700,fontSize:13,lineHeight:1.1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff"},children:u.title}),n.jsx("div",{style:{fontSize:11,opacity:.8,color:"#fff"},children:"HomWisor"})]}),n.jsx("button",{onClick:()=>l(!o),style:{width:34,height:34,borderRadius:"50%",background:o?"rgba(0,0,0,.5)":"rgba(255,255,255,.9)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:o?"#fff":"#111",cursor:"pointer",backdropFilter:"blur(6px)"},children:o?n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),n.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),n.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}),n.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),n.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}):n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),n.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),n.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]})})]}),n.jsxs("div",{style:{position:"absolute",top:"38%",left:0,right:0,textAlign:"center",pointerEvents:"none"},children:[n.jsx("div",{style:{fontSize:10,letterSpacing:1.5,opacity:.9,color:"#fff",fontWeight:600,textShadow:"0 2px 10px rgba(0,0,0,.6)"},children:"WHERE"}),n.jsx("div",{style:{fontSize:22,fontWeight:800,letterSpacing:.5,color:"#fff",textShadow:"0 4px 20px rgba(0,0,0,.7)",marginTop:2,fontFamily:"'Playfair Display', serif"},children:"SPACIOUS LIVING"}),n.jsx("div",{style:{width:40,height:1.5,background:"#fff",margin:"6px auto",opacity:.8}}),n.jsx("div",{style:{fontSize:9,letterSpacing:2,opacity:.85,color:"#fff"},children:u.badge||"LUXURY EDITION"})]}),n.jsxs("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",pointerEvents:"none"},children:[!s&&n.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(0,0,0,.45)",backdropFilter:"blur(8px)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)"},children:n.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"#fff",children:n.jsx("path",{d:"M8 5.14v14l11-7z"})})}),n.jsx("button",{onClick:()=>a(!s),style:{position:"absolute",inset:0,background:"transparent",border:"none",cursor:"pointer",pointerEvents:"auto"},"aria-label":"play"})]}),n.jsx("button",{onClick:v,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M15 18l-6-6 6-6"})})}),n.jsx("button",{onClick:x,style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M9 18l6-6-6-6"})})}),n.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"10px 12px",background:"linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.2) 60%, transparent 100%)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[n.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[n.jsx("path",{d:"M19 12H5"}),n.jsx("path",{d:"M12 19l-7-7 7-7"})]})}),n.jsx("button",{onClick:()=>a(!s),style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,.9)",border:"none",display:"grid",placeItems:"center",cursor:"pointer"},children:s?n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:[n.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),n.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}):n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:n.jsx("path",{d:"M8 5.14v14l11-7z"})})}),n.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"M12 5l7 7-7 7"})]})}),n.jsx("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:n.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)",color:"#fff"},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[n.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),n.jsx("polyline",{points:"16 6 12 2 8 6"}),n.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]})})})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[n.jsxs("div",{style:{flex:1,background:"rgba(0,0,0,.35)",border:"1px solid rgba(255,255,255,.12)",borderRadius:12,padding:8,display:"flex",alignItems:"center",gap:8},children:[n.jsx("img",{src:u.thumbnail||u.image,alt:"thumb",style:{width:42,height:32,borderRadius:6,objectFit:"cover",border:"1px solid rgba(255,255,255,.2)"}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:{fontSize:11,fontWeight:600,lineHeight:1.2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Welcome to a ",u.title.slice(0,28),"..."]}),n.jsxs("div",{style:{fontSize:10,opacity:.7},children:["Where spacious living • ",u.location]})]})]}),n.jsxs("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{background:"#d8232a",color:"#fff",padding:"8px 12px",borderRadius:20,fontWeight:800,fontSize:11,display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap",textDecoration:"none"},children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z"})}),u.phone]})]})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,maxHeight:"78vh",overflowY:"auto"},className:"scrollbar-hide",children:[n.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid rgba(255,255,255,.08)",borderRadius:16,padding:14,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:1,color:"rgba(255,255,255,.5)"},children:"NAVIGATION"}),n.jsxs("div",{style:{fontWeight:800,fontSize:22,marginTop:2},children:[r+1,n.jsxs("span",{style:{opacity:.35,fontWeight:600},children:["/",p]})]})]}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:v,disabled:p<=1,style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",opacity:r===0?.6:1},children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:n.jsx("path",{d:"M18 15l-6-6-6 6"})})}),n.jsx("button",{onClick:x,disabled:p<=1,style:{width:44,height:44,borderRadius:12,background:"#2a2a2a",border:"1px solid rgba(255,255,255,.12)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,.2)"},children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:n.jsx("path",{d:"M6 9l6 6 6-6"})})})]})]}),n.jsxs("div",{style:{background:"#f8f9fb",borderRadius:20,padding:16,color:"#111",boxShadow:"0 20px 60px rgba(0,0,0,.25)",border:"1px solid #eef0f3"},children:[n.jsxs("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"flex-start"},children:[n.jsx("span",{style:{color:"#dc2626",marginTop:1},children:"⚡"}),n.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#991b1b",lineHeight:1.4},children:u.demandText})]}),n.jsxs("div",{style:{background:"#fefce8",border:"1px solid #fde68a",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"center",marginTop:8},children:[n.jsx("span",{style:{width:8,height:8,background:"#22c55e",borderRadius:"50%",display:"inline-block",boxShadow:"0 0 0 4px rgba(34,197,94,.15)"}}),n.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#92400e"},children:[u.activeBuyers," active buyers viewing this project right now"]})]}),n.jsxs("div",{style:{marginTop:14},children:[n.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"PROJECT OVERVIEW"}),n.jsx("div",{style:{background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:12,padding:12,marginTop:8},children:n.jsxs("div",{style:{fontSize:13,lineHeight:1.5,color:"#374151",fontStyle:"italic"},children:['"',u.description,'"']})})]}),n.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center"},children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#dc2626",strokeWidth:"1.8",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"MICRO-MARKET LOCATION"}),n.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.microMarket||u.location})]})]}),n.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center",color:"#059669"},children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#059669",strokeWidth:"1.8",children:[n.jsx("path",{d:"M3 21h18"}),n.jsx("path",{d:"M3 7v14"}),n.jsx("path",{d:"M9 21V7"}),n.jsx("path",{d:"M15 21V7"}),n.jsx("path",{d:"M21 7V21"}),n.jsx("path",{d:"M3 7l9-4 9 4"}),n.jsx("path",{d:"M9 7h6"})]})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"INVESTMENT/PRICE"}),n.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.price})]}),n.jsx("button",{style:{width:32,height:32,borderRadius:10,background:"#fff",border:"1px solid #e5e7eb",display:"grid",placeItems:"center",cursor:"pointer"},children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#6b7280",strokeWidth:"1.8",children:[n.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7-6 11-6 11S6 15 6 8z"}),n.jsx("path",{d:"M10 21h4"}),n.jsx("path",{d:"M12 17v4"})]})})]}),n.jsxs("div",{style:{background:"#0f1e2e",borderRadius:14,padding:12,marginTop:12,color:"#fff"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontWeight:700,fontSize:11,letterSpacing:.4},children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"1.8",children:[n.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),n.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"INVESTOR MATRIX TOOL"]}),n.jsx("span",{style:{fontSize:10,fontWeight:700,background:"rgba(56,189,248,.15)",color:"#38bdf8",padding:"3px 7px",borderRadius:20,border:"1px solid rgba(56,189,248,.25)"},children:"◉ Verified ROI"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12,borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:12},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:10,opacity:.6},children:"Est. Monthly Rental"}),n.jsx("div",{style:{fontWeight:800,fontSize:13,marginTop:2},children:u.monthlyRental})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{fontSize:10,opacity:.6},children:"Annualized ROI Yield"}),n.jsxs("div",{style:{fontWeight:800,fontSize:13,marginTop:2,color:"#22c55e"},children:["~ ",u.roi]})]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[n.jsx("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{height:36,background:"#d8232a",color:"#fff",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"Call Now"}),n.jsx(q,{to:`/property/${u.id.replace("snap","p")||""}`,style:{height:36,background:"#fff",color:"#111",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"View Details"})]})]}),n.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto"},className:"scrollbar-hide",children:e.map((A,E)=>n.jsxs("button",{onClick:()=>i(E),style:{flexShrink:0,width:64,height:44,borderRadius:8,overflow:"hidden",border:E===r?"2px solid #d8232a":"1px solid #e5e7eb",opacity:E===r?1:.6,cursor:"pointer",position:"relative",padding:0},children:[n.jsx("img",{src:A.thumbnail||A.image,alt:A.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),E===r&&n.jsx("span",{style:{position:"absolute",inset:0,background:"rgba(216,35,42,.15)",borderRadius:6}})]},A.id))})]}),n.jsxs("div",{style:{textAlign:"center",fontSize:11,opacity:.5,paddingBottom:10},children:["Swipe up/down or use arrow keys • ",p," Snaps • Auto-play • Fully dynamic from Admin"]})]})]}),n.jsx("style",{children:`
        @media(max-width: 960px){
          .snaps-layout{ grid-template-columns: 1fr !important; max-width: 500px !important; }
          .video-box{ max-height: 64vh !important; }
        }
        .scrollbar-hide::-webkit-scrollbar{ display:none; }
        .scrollbar-hide{ -ms-overflow-style:none; scrollbar-width:none; }
      `})]}):n.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"No snaps found. Add via Admin Panel."})}const cr="#D4AF37",ci="#9A7418";function tb(){const[e,t]=j.useState({name:"",phone:"",email:"",subject:"",message:""}),r=s=>{t({...e,[s.target.name]:s.target.value})},i=s=>{s.preventDefault(),alert("Thank you! Our property expert will contact you shortly."),t({name:"",phone:"",email:"",subject:"",message:""})};return n.jsxs("div",{className:"contact-page",children:[n.jsx(Mt,{}),n.jsxs("section",{className:"contact-hero",children:[n.jsx("div",{className:"contact-hero-overlay"}),n.jsxs("div",{className:"contact-hero-content",children:[n.jsx("span",{className:"contact-eyebrow",children:"GET IN TOUCH"}),n.jsxs("h1",{children:["Let's Find Your",n.jsx("span",{children:" Dream Property"})]}),n.jsx("p",{children:"Have questions about a property or looking for your next investment? Our property experts are here to help."})]})]}),n.jsx("section",{className:"contact-section",children:n.jsxs("div",{className:"contact-container",children:[n.jsxs("div",{className:"contact-info",children:[n.jsx("span",{className:"section-eyebrow",children:"CONTACT US"}),n.jsxs("h2",{children:["We’re Here To",n.jsx("br",{}),n.jsx("span",{children:"Help You"})]}),n.jsx("p",{className:"contact-intro",children:"Whether you're buying, selling or investing in real estate, our team is ready to assist you with expert guidance and personalized property solutions."}),n.jsxs("div",{className:"info-list",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"})})}),n.jsxs("div",{children:[n.jsx("span",{children:"Call Us"}),n.jsx("a",{href:"tel:9090101401",children:"+91 9090 101 401"})]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),n.jsx("path",{d:"m3 7 9 6 9-6"})]})}),n.jsxs("div",{children:[n.jsx("span",{children:"Email Us"}),n.jsx("a",{href:"mailto:brejendra@homwisor.com",children:"brejendra@homwisor.com"}),n.jsx("a",{href:"mailto:birendra.homwisor@gmail.com",children:"birendra.homwisor@gmail.com"})]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}),n.jsxs("div",{children:[n.jsx("span",{children:"Our Office"}),n.jsx("p",{children:"Unit no : 704 , Sohna Road , ILD Trade Centre, Gurugram , Haryana , 122018"})]})]})]}),n.jsxs("a",{href:"https://wa.me/919090101401",target:"_blank",rel:"noopener noreferrer",className:"contact-whatsapp",children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),"Chat With Us On WhatsApp"]})]}),n.jsxs("div",{className:"contact-form-card",children:[n.jsxs("div",{className:"form-heading",children:[n.jsx("span",{children:"SEND US A MESSAGE"}),n.jsxs("h2",{children:["How Can We",n.jsx("strong",{children:" Help You?"})]}),n.jsx("p",{children:"Fill out the form below and our team will get back to you shortly."})]}),n.jsxs("form",{onSubmit:i,children:[n.jsxs("div",{className:"form-grid",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Your Name"}),n.jsx("input",{type:"text",name:"name",value:e.name,onChange:r,placeholder:"Enter your name",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Phone Number"}),n.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:r,placeholder:"+91 XXXXX XXXXX",required:!0})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Email Address"}),n.jsx("input",{type:"email",name:"email",value:e.email,onChange:r,placeholder:"Enter your email",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"I'm Interested In"}),n.jsxs("select",{name:"subject",value:e.subject,onChange:r,required:!0,children:[n.jsx("option",{value:"",children:"Select an option"}),n.jsx("option",{children:"Buying a Property"}),n.jsx("option",{children:"Selling a Property"}),n.jsx("option",{children:"Property Investment"}),n.jsx("option",{children:"Site Visit"}),n.jsx("option",{children:"General Enquiry"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message"}),n.jsx("textarea",{name:"message",value:e.message,onChange:r,placeholder:"Tell us how we can help you...",rows:"5"})]}),n.jsxs("button",{type:"submit",className:"submit-btn",children:["Send Message",n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"m13 6 6 6-6 6"})]})]}),n.jsx("p",{className:"form-note",children:"Your information is completely confidential and will never be shared."})]})]})]})}),n.jsx(Kt,{}),n.jsx("style",{children:`

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

          color: ${cr};

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
          color: ${cr};
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
          color: ${cr};
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
          color: ${ci};
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
          color: ${ci};
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
          color: ${ci};

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
          color: ${ci};
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
          border-color: ${cr};
          box-shadow: 0 0 0 3px rgba(212,175,55,.08);
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
          background: ${ci};
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
          color: ${cr};
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

          background: ${cr};
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

      `})]})}const ie=({children:e,...t})=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...t,children:e}),M={user:e=>n.jsxs(ie,{...e,children:[n.jsx("circle",{cx:"12",cy:"8",r:"4"}),n.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]}),lock:e=>n.jsxs(ie,{...e,children:[n.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),n.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]}),mail:e=>n.jsxs(ie,{...e,children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),n.jsx("path",{d:"m3 7 9 6 9-6"})]}),eye:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"}),n.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),eyeOff:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M10.6 5.1A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-2.4 3.3M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6"}),n.jsx("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"}),n.jsx("path",{d:"m3 3 18 18"})]}),shield:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"}),n.jsx("path",{d:"m9 12 2 2 4-4"})]}),alert:e=>n.jsxs(ie,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M12 8v5M12 16h.01"})]}),check:e=>n.jsxs(ie,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"m8 12 3 3 5-6"})]}),clock:e=>n.jsxs(ie,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M12 7v5l3 2"})]}),users:e=>n.jsxs(ie,{...e,children:[n.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),n.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),n.jsx("path",{d:"M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7"})]}),plus:e=>n.jsx(ie,{...e,children:n.jsx("path",{d:"M12 5v14M5 12h14"})}),key:e=>n.jsxs(ie,{...e,children:[n.jsx("circle",{cx:"8",cy:"15",r:"4"}),n.jsx("path",{d:"m10.8 12.2 8.7-8.7M16 6l3 3M14 8l2 2"})]}),grid:e=>n.jsxs(ie,{...e,children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),n.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]}),building:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}),n.jsx("path",{d:"M16 9h2a2 2 0 0 1 2 2v10"}),n.jsx("path",{d:"M3 21h18M8 7h4M8 11h4M8 15h4"})]}),film:e=>n.jsxs(ie,{...e,children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),n.jsx("path",{d:"m10 8.5 5 3.5-5 3.5z"})]}),image:e=>n.jsxs(ie,{...e,children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2.5"}),n.jsx("circle",{cx:"9",cy:"10",r:"2"}),n.jsx("path",{d:"m21 16-5-5-9 9"})]}),pin:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),n.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),gift:e=>n.jsxs(ie,{...e,children:[n.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),n.jsx("path",{d:"M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"}),n.jsx("path",{d:"M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5"})]}),chat:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"}),n.jsx("path",{d:"M8 11h8M8 14.5h5"})]}),logout:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"}),n.jsx("path",{d:"m10 17 5-5-5-5M15 12H4"})]}),external:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M14 4h6v6M20 4l-9 9"}),n.jsx("path",{d:"M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"})]}),refresh:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M20 11a8 8 0 0 0-14.9-3.9L4 8M4 4v4h4"}),n.jsx("path",{d:"M4 13a8 8 0 0 0 14.9 3.9L20 16M20 20v-4h-4"})]}),menu:e=>n.jsx(ie,{...e,children:n.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})}),x:e=>n.jsx(ie,{...e,children:n.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),search:e=>n.jsxs(ie,{...e,children:[n.jsx("circle",{cx:"11",cy:"11",r:"7"}),n.jsx("path",{d:"m20 20-3.5-3.5"})]}),arrow:e=>n.jsx(ie,{...e,children:n.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),phone:e=>n.jsx(ie,{...e,children:n.jsx("path",{d:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"})}),whatsapp:e=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",...e,children:n.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),trash:e=>n.jsx(ie,{...e,children:n.jsx("path",{d:"M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"})}),edit:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"}),n.jsx("path",{d:"m14 6 4 4"})]}),star:e=>n.jsx(ie,{...e,children:n.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"})}),trend:e=>n.jsxs(ie,{...e,children:[n.jsx("path",{d:"m3 17 6-6 4 4 8-8"}),n.jsx("path",{d:"M15 7h6v6"})]})},nb=(e="")=>{let t=0;return e.length>=8&&t++,e.length>=12&&t++,/[a-z]/.test(e)&&/[A-Z]/.test(e)&&t++,/\d/.test(e)&&/[^a-z0-9]/i.test(e)&&t++,t},Oo=[{label:"Too weak",color:"#ef4444"},{label:"Weak",color:"#f97316"},{label:"Fair",color:"#eab308"},{label:"Good",color:"#84cc16"},{label:"Strong",color:"#22c55e"}];function Ef({value:e}){if(!e)return null;const t=nb(e);return n.jsxs("div",{style:{display:"grid",gap:6},children:[n.jsx("div",{className:"hwa-strength",children:n.jsx("i",{style:{width:`${(t+1)*20}%`,background:Oo[t].color}})}),n.jsxs("span",{className:"hwa-hint",children:["Strength: ",n.jsx("strong",{style:{color:Oo[t].color},children:Oo[t].label})]})]})}function Rr({value:e,onChange:t,placeholder:r="••••••••",autoComplete:i="current-password",invalid:s,id:a,autoFocus:o}){const[l,c]=j.useState(!1);return n.jsxs("div",{className:"hwa-input-wrap",children:[n.jsx(M.lock,{}),n.jsx("input",{id:a,className:`hwa-input${s?" invalid":""}`,type:l?"text":"password",value:e,onChange:d=>t(d.target.value),placeholder:r,autoComplete:i,autoFocus:o,required:!0}),n.jsx("button",{type:"button",className:"hwa-eye",onClick:()=>c(!l),"aria-label":l?"Hide password":"Show password",children:l?n.jsx(M.eyeOff,{}):n.jsx(M.eye,{})})]})}const ls=()=>n.jsx("span",{className:"hwa-spinner","aria-hidden":"true"}),$t=({type:e="error",children:t})=>n.jsxs("div",{className:`hwa-alert ${e}`,role:e==="error"?"alert":"status",children:[e==="success"?n.jsx(M.check,{}):e==="info"?n.jsx(M.clock,{}):n.jsx(M.alert,{}),n.jsx("span",{children:t})]}),rb={expired:"Your session expired after 24 hours. Please sign in again.",signedout:"You have been signed out. Please sign in again.",loggedout:"You have signed out successfully."};function ib(){const[e,t]=j.useState({email:"",password:""}),[r,i]=j.useState(""),[s,a]=j.useState(!1),[o]=Zc(),l=nr();if(j.useEffect(()=>{ka()||Ni()},[]),ka())return n.jsx(Gi,{to:"/admin/dashboard",replace:!0});const c=rb[o.get("session")],d=async h=>{var p,x;h.preventDefault();const u=e.email.trim().toLowerCase();if(!u||!e.password){i("Enter your email and password");return}if(!yf.test(u)){i("Enter a valid email address");return}a(!0),i("");try{const v=await $.post("/admin/login",{email:u,password:e.password});wf(v.data.token,v.data.admin),l("/admin/dashboard",{replace:!0})}catch(v){i(((x=(p=v.response)==null?void 0:p.data)==null?void 0:x.error)||(v.code==="ECONNABORTED"?"The server took too long to respond. Please try again.":"Could not reach the server. Check your connection and try again.")),t(A=>({...A,password:""}))}finally{a(!1)}};return n.jsxs("div",{className:"hwa hwa-login",children:[n.jsxs("aside",{className:"hwa-login-visual",children:[n.jsx("img",{src:Fr,alt:"HomWisor",className:"hwa-login-logo"}),n.jsxs("div",{className:"hwa-login-copy",children:[n.jsx("span",{className:"hwa-eyebrow",children:"Admin Console"}),n.jsxs("h1",{children:["Manage every listing, lead & ",n.jsx("span",{children:"launch"})," in one place."]}),n.jsx("p",{children:"Update properties, banners, offers and snaps — changes go live on HomWisor.com instantly."}),n.jsxs("div",{className:"hwa-login-points",children:[n.jsxs("div",{children:[n.jsx(M.shield,{})," Secure JWT sessions"]}),n.jsxs("div",{children:[n.jsx(M.clock,{})," Auto sign-out after 24h"]}),n.jsxs("div",{children:[n.jsx(M.users,{})," Role-based access"]})]})]})]}),n.jsx("main",{className:"hwa-login-panel",children:n.jsxs("div",{className:"hwa-login-card",children:[n.jsx("img",{src:Fr,alt:"HomWisor",className:"hwa-login-mobile-logo"}),n.jsx("h2",{children:"Welcome back"}),n.jsx("p",{className:"hwa-sub",children:"Sign in to the HomWisor admin panel"}),c&&!r&&n.jsx($t,{type:o.get("session")==="loggedout"?"success":"info",children:c}),r&&n.jsx($t,{children:r}),n.jsxs("form",{onSubmit:d,noValidate:!0,children:[n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{htmlFor:"hwa-email",children:"Email address"}),n.jsxs("div",{className:"hwa-input-wrap",children:[n.jsx(M.mail,{}),n.jsx("input",{id:"hwa-email",type:"email",inputMode:"email",className:"hwa-input",value:e.email,onChange:h=>t({...e,email:h.target.value}),placeholder:"you@homwisor.com",autoComplete:"username",autoCapitalize:"none",spellCheck:!1,autoFocus:!0})]})]}),n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{htmlFor:"hwa-password",children:"Password"}),n.jsx(Rr,{id:"hwa-password",value:e.password,onChange:h=>t({...e,password:h}),placeholder:"Enter your password"})]}),n.jsx("button",{type:"submit",className:"hwa-btn hwa-btn-gold",disabled:s,style:{marginTop:8},children:s?n.jsxs(n.Fragment,{children:[n.jsx(ls,{})," Signing in…"]}):"Sign In"})]}),n.jsxs("div",{className:"hwa-login-foot",children:[n.jsx(q,{to:"/",children:"← Back to website"}),n.jsxs("span",{className:"hwa-secure",children:[n.jsx(M.shield,{})," Authorised staff only"]})]})]})})]})}const Ys=(e,t)=>{var r,i;return((i=(r=e.response)==null?void 0:r.data)==null?void 0:i.error)||t},sb=e=>e?new Date(e).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Never";function Rf({admin:e,onChanged:t,submitLabel:r="Update Password"}){const[i,s]=j.useState({current:"",next:"",confirm:""}),[a,o]=j.useState(""),[l,c]=j.useState(""),[d,h]=j.useState(!1),u=i.next?vf(i.next,e==null?void 0:e.email):null,p=i.confirm&&i.confirm!==i.next,x=async v=>{if(v.preventDefault(),o(""),c(""),u)return o(u);if(i.next!==i.confirm)return o("New passwords do not match");h(!0);try{const A=await $.put("/admin/me/password",{currentPassword:i.current,newPassword:i.next});wf(A.data.token,A.data.admin),s({current:"",next:"",confirm:""}),c("Password updated. Other sessions have been signed out."),t==null||t(A.data.admin)}catch(A){o(Ys(A,"Could not update password"))}finally{h(!1)}};return n.jsxs("form",{onSubmit:x,noValidate:!0,children:[a&&n.jsx($t,{children:a}),l&&n.jsx($t,{type:"success",children:l}),n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{children:"Current password"}),n.jsx(Rr,{value:i.current,onChange:v=>s({...i,current:v}),autoComplete:"current-password",placeholder:"Your current password"})]}),n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{children:"New password"}),n.jsx(Rr,{value:i.next,onChange:v=>s({...i,next:v}),autoComplete:"new-password",placeholder:"8+ characters, letters & numbers",invalid:!!u}),u?n.jsx("span",{className:"hwa-hint bad",children:u}):n.jsx(Ef,{value:i.next})]}),n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{children:"Confirm new password"}),n.jsx(Rr,{value:i.confirm,onChange:v=>s({...i,confirm:v}),autoComplete:"new-password",placeholder:"Repeat new password",invalid:p}),p&&n.jsx("span",{className:"hwa-hint bad",children:"Passwords do not match"})]}),n.jsx("button",{className:"hwa-btn hwa-btn-gold",disabled:d||!i.current||!i.next||!i.confirm,children:d?n.jsxs(n.Fragment,{children:[n.jsx(ls,{})," Saving…"]}):r})]})}const hu={name:"",email:"",password:"",confirm:"",role:"admin"};function ab({me:e,onMeChange:t}){const r=(e==null?void 0:e.role)==="superadmin",[i,s]=j.useState([]),[a,o]=j.useState(r),[l,c]=j.useState(""),[d,h]=j.useState(hu),[u,p]=j.useState(""),[x,v]=j.useState(""),[A,E]=j.useState(!1),[m,f]=j.useState(null),y=async()=>{if(r)try{const z=await $.get("/admin/users");s(z.data),c("")}catch(z){c(Ys(z,"Could not load admins"))}finally{o(!1)}};j.useEffect(()=>{y()},[r]);const w=d.email.trim().toLowerCase(),k=w&&!yf.test(w),O=d.password?vf(d.password,w):null,g=d.confirm&&d.confirm!==d.password,C=async z=>{if(z.preventDefault(),p(""),v(""),d.name.trim().length<2)return p("Enter the admin’s full name");if(!w||k)return p("Enter a valid email address");if(O)return p(O);if(d.password!==d.confirm)return p("Passwords do not match");E(!0);try{const Y=await $.post("/admin/users",{name:d.name.trim(),email:w,password:d.password,role:d.role});v(`Admin ${Y.data.email} created. They can now sign in with this email — share the password securely.`),h(hu),y()}catch(Y){p(Ys(Y,"Could not create admin"))}finally{E(!1)}},P=async(z,Y,ee)=>{if(!(ee&&!window.confirm(ee))){f(z.id);try{await Y(),await y()}catch(N){alert(Ys(N,"Action failed"))}finally{f(null)}}},R=z=>P(z,()=>$.patch(`/admin/users/${z.id}`,{active:!z.active}),z.active?`Disable ${z.email}? They will be signed out immediately.`:null),L=z=>P(z,()=>$.patch(`/admin/users/${z.id}`,{role:z.role==="superadmin"?"admin":"superadmin"}),z.role==="superadmin"?`Remove super admin rights from ${z.email}?`:`Make ${z.email} a super admin? They will be able to manage all admins.`),W=z=>P(z,()=>$.delete(`/admin/users/${z.id}`),`Permanently delete admin ${z.email}? This cannot be undone.`);return n.jsxs("div",{className:"hwa hwa-section hwa-light",children:[n.jsx("div",{className:"hwa-section-head",children:n.jsxs("div",{children:[n.jsx("h2",{children:r?"Admins & Security":"My Account"}),n.jsx("p",{children:r?"Create admin accounts, control access and keep your own password up to date.":"Update your password. Sessions expire automatically after 24 hours."})]})}),n.jsxs("div",{className:"hwa-grid-2",children:[r?n.jsxs("div",{style:{display:"grid",gap:16},children:[n.jsxs("div",{className:"hwa-card",children:[n.jsxs("div",{className:"hwa-card-title",children:[n.jsx("span",{className:"dot",children:n.jsx(M.plus,{})})," Create new admin"]}),u&&n.jsx($t,{children:u}),x&&n.jsx($t,{type:"success",children:x}),n.jsxs("form",{onSubmit:C,noValidate:!0,children:[n.jsxs("div",{className:"hwa-row-2",children:[n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{children:"Full name"}),n.jsxs("div",{className:"hwa-input-wrap",children:[n.jsx(M.user,{}),n.jsx("input",{className:"hwa-input",value:d.name,onChange:z=>h({...d,name:z.target.value}),placeholder:"e.g. Vishal Dixit",autoComplete:"off"})]})]}),n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{children:"Email (used to sign in)"}),n.jsxs("div",{className:"hwa-input-wrap",children:[n.jsx(M.mail,{}),n.jsx("input",{className:`hwa-input${k?" invalid":""}`,type:"email",value:d.email,onChange:z=>h({...d,email:z.target.value}),placeholder:"name@homwisor.com",autoComplete:"off",autoCapitalize:"none",spellCheck:!1})]}),k&&n.jsx("span",{className:"hwa-hint bad",children:"Enter a valid email address"})]})]}),n.jsxs("div",{className:"hwa-row-2",children:[n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{children:"Password"}),n.jsx(Rr,{value:d.password,onChange:z=>h({...d,password:z}),autoComplete:"new-password",placeholder:"8+ chars, letters & numbers",invalid:!!O}),O?n.jsx("span",{className:"hwa-hint bad",children:O}):n.jsx(Ef,{value:d.password})]}),n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{children:"Confirm password"}),n.jsx(Rr,{value:d.confirm,onChange:z=>h({...d,confirm:z}),autoComplete:"new-password",placeholder:"Repeat password",invalid:g}),g&&n.jsx("span",{className:"hwa-hint bad",children:"Passwords do not match"})]})]}),n.jsxs("div",{className:"hwa-field",children:[n.jsx("label",{children:"Role"}),n.jsxs("div",{className:"hwa-role-toggle",children:[n.jsxs("button",{type:"button",className:d.role==="admin"?"active":"",onClick:()=>h({...d,role:"admin"}),children:[n.jsx("strong",{children:"Admin"}),n.jsx("span",{children:"Manage website content"})]}),n.jsxs("button",{type:"button",className:d.role==="superadmin"?"active":"",onClick:()=>h({...d,role:"superadmin"}),children:[n.jsx("strong",{children:"Super Admin"}),n.jsx("span",{children:"Content + manage admins"})]})]})]}),n.jsx("button",{className:"hwa-btn hwa-btn-gold",disabled:A,children:A?n.jsxs(n.Fragment,{children:[n.jsx(ls,{})," Creating…"]}):"Create Admin"})]})]}),n.jsxs("div",{className:"hwa-card",children:[n.jsxs("div",{className:"hwa-card-title",children:[n.jsx("span",{className:"dot",children:n.jsx(M.users,{})})," All admins ",n.jsxs("span",{style:{fontWeight:500,color:"#9ca3af",fontSize:13},children:["(",i.length,")"]})]}),l&&n.jsx($t,{children:l}),a?n.jsx("div",{className:"hwa-hint",children:"Loading…"}):n.jsx("div",{className:"hwa-admin-list",children:i.map(z=>{const Y=z.id===(e==null?void 0:e.id);return n.jsxs("div",{className:`hwa-admin-row${z.active?"":" inactive"}`,children:[n.jsx("div",{className:"hwa-avatar",children:(z.name||z.email).slice(0,1).toUpperCase()}),n.jsxs("div",{className:"hwa-admin-meta",children:[n.jsxs("div",{className:"name",children:[z.name,n.jsx("span",{className:`hwa-badge ${z.role==="superadmin"?"super":"admin"}`,children:z.role==="superadmin"?"Super Admin":"Admin"}),Y&&n.jsx("span",{className:"hwa-badge you",children:"You"}),!z.active&&n.jsx("span",{className:"hwa-badge off",children:"Disabled"})]}),n.jsxs("div",{className:"sub",children:[z.email," · Last login: ",sb(z.lastLoginAt)]})]}),!Y&&n.jsxs("div",{className:"hwa-row-actions",children:[n.jsx("button",{className:"hwa-mini",disabled:m===z.id,onClick:()=>L(z),children:z.role==="superadmin"?"Make Admin":"Make Super"}),n.jsx("button",{className:"hwa-mini",disabled:m===z.id,onClick:()=>R(z),children:z.active?"Disable":"Enable"}),n.jsx("button",{className:"hwa-mini danger",disabled:m===z.id,onClick:()=>W(z),children:"Delete"})]})]},z.id)})})]})]}):n.jsxs("div",{className:"hwa-card",children:[n.jsxs("div",{className:"hwa-card-title",children:[n.jsx("span",{className:"dot",children:n.jsx(M.user,{})})," Profile"]}),n.jsxs("div",{className:"hwa-admin-row",children:[n.jsx("div",{className:"hwa-avatar",children:((e==null?void 0:e.name)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase()}),n.jsxs("div",{className:"hwa-admin-meta",children:[n.jsxs("div",{className:"name",children:[e==null?void 0:e.name," ",n.jsx("span",{className:"hwa-badge admin",children:"Admin"})]}),n.jsx("div",{className:"sub",children:e==null?void 0:e.email})]})]}),n.jsx("p",{className:"hwa-hint",style:{marginTop:12},children:"Only a super admin can create or manage admin accounts."})]}),n.jsxs("div",{className:"hwa-card",children:[n.jsxs("div",{className:"hwa-card-title",children:[n.jsx("span",{className:"dot",children:n.jsx(M.key,{})})," Change my password"]}),n.jsx(Rf,{admin:e,onChanged:t}),n.jsxs("p",{className:"hwa-hint",style:{marginTop:12,display:"flex",gap:6,alignItems:"center"},children:[n.jsx(M.clock,{style:{width:14,height:14}})," Sessions expire automatically 24 hours after sign-in."]})]})]})]})}const Pf={hero:{label:"Hero banner",minW:1400,minH:450,ratio:[2.2,4],ideal:"2100 × 700 px (wide, 3:1)"},slider:{label:"Image slider",minW:1200,minH:200,ratio:[4.5,7.5],ideal:"1700 × 300 px (very wide strip)"},sidead:{label:"Side ad",minW:300,minH:650,ratio:[.3,.6],ideal:"720 × 1600 px (tall, 9:20)"},property:{label:"Property photo",minW:800,minH:450,ratio:[1.2,2.2],ideal:"1600 × 1000 px (landscape)"},logo:{label:"Logo",minW:120,minH:40,ratio:[.8,6],ideal:"400 × 160 px"},snap:{label:"Snap thumbnail",minW:400,minH:600,ratio:[.45,.9],ideal:"800 × 1000 px (portrait)"},location:{label:"Location image",minW:500,minH:350,ratio:[.6,2],ideal:"1000 × 750 px"},recommended:{label:"Recommended card",minW:500,minH:450,ratio:[.7,1.6],ideal:"1000 × 1000 px (square-ish)"},blog:{label:"Blog image",minW:800,minH:400,ratio:[1.2,2.4],ideal:"1600 × 900 px (landscape)"},avatar:{label:"Customer photo",minW:120,minH:120,ratio:[.7,1.4],ideal:"400 × 400 px (square)"},offer:{label:"Offer image",minW:600,minH:350,ratio:[1.1,2.2],ideal:"1200 × 800 px (landscape)"}},ob=e=>e<.9?"portrait (tall)":e>1.15?"landscape (wide)":"square",ld=(e,t,r)=>{const i=Pf[e];if(!i)return null;if(!t||!r)return"Could not read the image size";const s=t/r,a=`${t} × ${r} px`;return s<i.ratio[0]||s>i.ratio[1]?`${i.label} has the wrong shape: your image is ${a} (${ob(s)}). Use about ${i.ideal}.`:t<i.minW||r<i.minH?`${i.label} is too small: your image is ${a}. Use at least ${i.minW} × ${i.minH} px — ideally ${i.ideal}.`:null},ql=20,Tf="image/jpeg,image/png,image/webp,image/avif,image/gif";async function lb(e,{maxSide:t=1920,keepPng:r=!1,quality:i=.82}={}){if(e.type==="image/gif")return e;try{const s=await createImageBitmap(e),a=Math.min(1,t/Math.max(s.width,s.height)),o=Math.round(s.width*a),l=Math.round(s.height*a),c=document.createElement("canvas");c.width=o,c.height=l,c.getContext("2d").drawImage(s,0,0,o,l);const d=r?"image/png":"image/webp",h=await new Promise(p=>c.toBlob(p,d,i));if(!h||a===1&&h.size>=e.size)return e;const u=e.name.replace(/\.[^.]+$/,"")+(r?".png":".webp");return new File([h],u,{type:d})}catch{return e}}const cb=async e=>{const t=await createImageBitmap(e);return{width:t.width,height:t.height}},Of=e=>new Promise((t,r)=>{const i=new Image;i.onload=()=>t({width:i.naturalWidth,height:i.naturalHeight}),i.onerror=()=>r(new Error("This link does not open as an image")),i.src=e});async function Lf(e,{purpose:t,maxSide:r,keepPng:i,onProgress:s}={}){if(!e.type.startsWith("image/"))throw new Error("Please choose an image file (JPG, PNG or WebP)");if(e.size>ql*1024*1024)throw new Error(`Image is larger than ${ql} MB`);let a=null;try{a=await cb(e)}catch{}if(a){const d=ld(t,a.width,a.height);if(d)throw new Error(d)}const o=await lb(e,{maxSide:r,keepPng:i}),l=new FormData;return l.append("purpose",t||""),l.append("file",o),(await $.post("/images",l,{onUploadProgress:d=>s==null?void 0:s(d.total?d.loaded/d.total:0)})).data.url}const Zi=e=>{var t,r;return((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.error)||(e==null?void 0:e.message)||"Upload failed"};function cd(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"3"}),n.jsx("circle",{cx:"9",cy:"10",r:"2"}),n.jsx("path",{d:"m21 16-5-5-9 9"}),n.jsx("path",{d:"M17 3v6M14 6l3-3 3 3"})]})}function kt({value:e,onChange:t,purpose:r,aspect:i="3 / 2",hint:s,kind:a="photo",fit:o="cover",maxSide:l}){const c=j.useRef(null),[d,h]=j.useState(!1),[u,p]=j.useState(0),[x,v]=j.useState(""),[A,E]=j.useState(""),[m,f]=j.useState(!1),[y,w]=j.useState(!1),[k,O]=j.useState(""),[g,C]=j.useState(!1),P=a==="logo",R=()=>{var N;return(N=c.current)==null?void 0:N.click()},L=async N=>{if(!N)return;E(""),h(!0),p(0),C(!1);const _=URL.createObjectURL(N);v(_);try{const I=await Lf(N,{purpose:r,maxSide:l||(P?600:1920),keepPng:P&&N.type==="image/png",onProgress:p});t(I)}catch(I){E(Zi(I))}finally{h(!1),v(""),URL.revokeObjectURL(_)}},W=N=>{var _;N.preventDefault(),f(!1),L((_=N.dataTransfer.files)==null?void 0:_[0])},z=async()=>{const N=k.trim();if(N){E("");try{const _=await Of(N),I=ld(r,_.width,_.height);if(I)return E(I);t(N),C(!1),w(!1),O("")}catch(_){E(Zi(_))}}},Y=Pf[r],ee=x||e;return n.jsxs("div",{className:`hwu${P?" logo":""}`,children:[n.jsx("input",{ref:c,type:"file",accept:Tf,hidden:!0,onChange:N=>{var _;L((_=N.target.files)==null?void 0:_[0]),N.target.value=""}}),ee?n.jsxs("div",{className:`hwu-frame${g?" broken":""}`,style:{aspectRatio:i},children:[n.jsx("img",{src:ee,alt:"",style:{objectFit:o},onError:()=>!x&&C(!0),onLoad:()=>C(!1)}),g&&n.jsx("div",{className:"hwu-broken",children:"⚠️ This image can’t be shown. Upload it again."}),d&&n.jsxs("div",{className:"hwu-busy",children:[n.jsx("span",{className:"hwu-spin"}),n.jsxs("span",{children:["Uploading… ",Math.round(u*100),"%"]}),n.jsx("i",{style:{width:`${Math.max(6,u*100)}%`}})]}),!d&&n.jsxs("div",{className:"hwu-actions",children:[n.jsx("button",{type:"button",onClick:R,children:"Replace"}),n.jsx("button",{type:"button",onClick:()=>t(""),children:"Remove"})]})]}):n.jsxs("button",{type:"button",className:`hwu-drop${m?" drag":""}`,style:{aspectRatio:i},onClick:R,onDragOver:N=>{N.preventDefault(),f(!0)},onDragLeave:()=>f(!1),onDrop:W,children:[n.jsx(cd,{}),n.jsx("strong",{children:m?"Drop to upload":"Click to upload or drag & drop"}),n.jsxs("span",{children:["JPG, PNG or WebP · up to ",ql," MB"]})]}),A&&n.jsx("div",{className:"hwu-err",children:A}),n.jsxs("div",{className:"hwu-foot",children:[(s||Y)&&n.jsxs("span",{children:[s||`Use about ${Y.ideal}`,Y&&n.jsxs(n.Fragment,{children:[" · ",n.jsxs("b",{children:["min ",Y.minW," × ",Y.minH]})]})]}),y?n.jsxs("span",{className:"hwu-link",children:[n.jsx("input",{value:k,onChange:N=>O(N.target.value),placeholder:"https://…",onKeyDown:N=>N.key==="Enter"&&(N.preventDefault(),z()),autoFocus:!0}),n.jsx("button",{type:"button",onClick:z,children:"Use"}),n.jsx("button",{type:"button",onClick:()=>{w(!1),O("")},children:"✕"})]}):n.jsx("button",{type:"button",className:"hwu-linkbtn",onClick:()=>w(!0),children:"or paste an image link"})]})]})}function db({value:e=[],onChange:t,onMakeCover:r,max:i=20,purpose:s="property",captions:a,onCaptionsChange:o}){const l=j.useRef(null),[c,d]=j.useState([]),[h,u]=j.useState(""),[p,x]=j.useState(!1),[v,A]=j.useState(""),E=e.filter(Boolean),m=i-E.length-c.length,f=async C=>{const P=[...C||[]].filter(W=>W.type.startsWith("image/")).slice(0,Math.max(0,m));if(!P.length)return;u("");const R=P.map((W,z)=>({id:`${Date.now()}-${z}`,file:W,preview:URL.createObjectURL(W),progress:0}));d(W=>[...W,...R]);const L=[];for(const W of R)try{const z=await Lf(W.file,{purpose:s,onProgress:Y=>d(ee=>ee.map(N=>N.id===W.id?{...N,progress:Y}:N))});L.push(z)}catch(z){u(`${W.file.name}: ${Zi(z)}`)}finally{URL.revokeObjectURL(W.preview),d(z=>z.filter(Y=>Y.id!==W.id))}L.length&&(t([...E,...L]),o&&o([...y(E.length),...L.map(()=>"")]))},y=C=>Array.from({length:C},(P,R)=>(a==null?void 0:a[R])||""),w=C=>{t(E.filter((P,R)=>R!==C)),o&&o(y(E.length).filter((P,R)=>R!==C))},k=(C,P)=>{const R=C+P;if(R<0||R>=E.length)return;const L=[...E];if([L[C],L[R]]=[L[R],L[C]],t(L),o){const W=y(E.length);[W[C],W[R]]=[W[R],W[C]],o(W)}},O=(C,P)=>{const R=y(E.length);R[C]=P,o(R)},g=async()=>{const C=v.trim();if(C){u("");try{const P=await Of(C),R=ld(s,P.width,P.height);if(R)return u(R);t([...E,C]),A(""),o&&o([...y(E.length),""])}catch(P){u(Zi(P))}}};return n.jsxs("div",{className:"hwu-gallery",children:[n.jsx("input",{ref:l,type:"file",accept:Tf,multiple:!0,hidden:!0,onChange:C=>{f(C.target.files),C.target.value=""}}),n.jsxs("div",{className:"hwu-grid",children:[E.map((C,P)=>n.jsxs("div",{className:o?"hwu-tile-wrap":void 0,style:o?void 0:{display:"contents"},children:[n.jsxs("div",{className:"hwu-tile",children:[n.jsx("img",{src:C,alt:"",loading:"lazy"}),n.jsx("span",{className:"hwu-no",children:P+1}),n.jsxs("div",{className:"hwu-tile-actions",children:[P>0&&n.jsx("button",{type:"button",title:"Move left",onClick:()=>k(P,-1),children:"‹"}),P<E.length-1&&n.jsx("button",{type:"button",title:"Move right",onClick:()=>k(P,1),children:"›"}),r&&n.jsx("button",{type:"button",title:"Use as main photo",onClick:()=>r(C),children:"★"}),n.jsx("button",{type:"button",title:"Remove",onClick:()=>w(P),children:"✕"})]})]}),o&&n.jsx("input",{className:"hwu-caption",value:(a==null?void 0:a[P])||"",onChange:R=>O(P,R.target.value),placeholder:"Caption (optional)",maxLength:60})]},C+P)),c.map(C=>n.jsxs("div",{className:"hwu-tile uploading",children:[n.jsx("img",{src:C.preview,alt:""}),n.jsxs("div",{className:"hwu-busy",children:[n.jsx("span",{className:"hwu-spin"}),n.jsxs("span",{children:[Math.round(C.progress*100),"%"]}),n.jsx("i",{style:{width:`${Math.max(6,C.progress*100)}%`}})]})]},C.id)),m>0&&n.jsxs("button",{type:"button",className:`hwu-tile hwu-add${p?" drag":""}`,onClick:()=>{var C;return(C=l.current)==null?void 0:C.click()},onDragOver:C=>{C.preventDefault(),x(!0)},onDragLeave:()=>x(!1),onDrop:C=>{C.preventDefault(),x(!1),f(C.dataTransfer.files)},children:[n.jsx(cd,{}),n.jsx("strong",{children:"Add photos"}),n.jsx("span",{children:"Select several at once"})]})]}),h&&n.jsx("div",{className:"hwu-err",children:h}),n.jsxs("div",{className:"hwu-foot",children:[n.jsxs("span",{children:[E.length," photo",E.length===1?"":"s"," · use ‹ › to reorder",r?", ★ to make it the main photo":""]}),n.jsxs("span",{className:"hwu-link",children:[n.jsx("input",{value:v,onChange:C=>A(C.target.value),placeholder:"or paste an image link",onKeyDown:C=>C.key==="Enter"&&(C.preventDefault(),g())}),n.jsx("button",{type:"button",onClick:g,children:"Add"})]})]})]})}const Lo=25;function hb({value:e,onChange:t,label:r="brochure"}){const i=j.useRef(null),[s,a]=j.useState(!1),[o,l]=j.useState(0),[c,d]=j.useState(""),[h,u]=j.useState(""),[p,x]=j.useState(!1),v=async A=>{if(A){if(d(""),A.type!=="application/pdf"&&!/\.pdf$/i.test(A.name))return d("Please choose a PDF file");if(A.size>Lo*1024*1024)return d(`PDF is larger than ${Lo} MB — please compress it first`);a(!0),l(0);try{const E=new FormData;E.append("file",A);const m=await $.post("/files",E,{onUploadProgress:f=>l(f.total?f.loaded/f.total:0)});u(A.name),t(m.data.url)}catch(E){d(Zi(E))}finally{a(!1),i.current&&(i.current.value="")}}};return n.jsxs("div",{className:"hwu",children:[n.jsx("input",{ref:i,type:"file",accept:"application/pdf,.pdf",hidden:!0,onChange:A=>{var E;return v((E=A.target.files)==null?void 0:E[0])}}),e?n.jsxs("div",{className:"hwu-file",children:[n.jsx("span",{className:"hwu-file-ic",children:"PDF"}),n.jsxs("span",{className:"hwu-file-name",children:[n.jsx("strong",{children:h||"Brochure uploaded"}),n.jsx("a",{href:e,target:"_blank",rel:"noreferrer",children:"Open to check ↗"})]}),n.jsx("button",{type:"button",className:"hwu-linkbtn",onClick:()=>{var A;return(A=i.current)==null?void 0:A.click()},disabled:s,children:s?`Uploading ${Math.round(o*100)}%`:"Replace"}),n.jsx("button",{type:"button",className:"hwu-linkbtn danger",onClick:()=>{t(""),u("")},disabled:s,children:"Remove"})]}):n.jsxs("button",{type:"button",className:`hwu-drop${p?" drag":""}`,style:{minHeight:110},onClick:()=>{var A;return(A=i.current)==null?void 0:A.click()},onDragOver:A=>{A.preventDefault(),x(!0)},onDragLeave:()=>x(!1),onDrop:A=>{var E;A.preventDefault(),x(!1),v((E=A.dataTransfer.files)==null?void 0:E[0])},disabled:s,children:[s?n.jsx("span",{className:"hwu-spin",style:{borderColor:"#eadfb9",borderTopColor:"#D4AF37"}}):n.jsx(cd,{}),n.jsx("strong",{children:s?`Uploading… ${Math.round(o*100)}%`:`Upload ${r} PDF`}),n.jsxs("span",{children:["Click or drop a PDF here · max ",Lo," MB"]})]}),c&&n.jsx("div",{className:"hwu-err",children:c})]})}const ub=(e,t)=>{try{return localStorage.getItem(`hwl-view-${e}`)||t}catch{return t}},pb=(e,t)=>{try{localStorage.setItem(`hwl-view-${e}`,t)}catch{}};function Cn({id:e,items:t,main:r,columns:i=[],badges:s,actions:a,searchText:o,sorts:l=[],empty:c="Nothing here yet.",onEmptyAdd:d,emptyAddLabel:h="Add the first one",defaultView:u="table",toolbarExtra:p,loading:x}){var P;const[v,A]=j.useState(""),[E,m]=j.useState(((P=l[0])==null?void 0:P.value)||""),[f,y]=j.useState(()=>ub(e,u));j.useEffect(()=>pb(e,f),[e,f]);const w=j.useMemo(()=>{const R=v.trim().toLowerCase().split(/\s+/).filter(Boolean);let L=R.length?t.filter(z=>{const Y=String(o?o(z):r.title(z)).toLowerCase();return R.every(ee=>Y.includes(ee))}):t;const W=l.find(z=>z.value===E);return W!=null&&W.fn&&(L=[...L].sort(W.fn)),L},[t,v,E,l,o,r]),k=j.useMemo(()=>{const R=L=>L.filter(Boolean).reduce((W,z,Y)=>W+(Y?6:0)+(z.danger?32:Math.ceil(String(z.label).length*7.4)+42),0);return Math.max(80,...w.map(L=>R((a==null?void 0:a(L))||[])))},[w,a]),O=({it:R,big:L})=>{var z,Y;const W=(z=r.thumb)==null?void 0:z.call(r,R);return n.jsxs("span",{className:`hwl-thumb ${r.aspect||"wide"}${L?" big":""}`,children:[W?n.jsx("img",{src:W,alt:"",loading:"lazy",onError:ee=>ee.currentTarget.style.visibility="hidden"}):n.jsx(M.image,{}),(Y=r.overlay)==null?void 0:Y.call(r,R)]})},g=({it:R})=>{var W;const L=((W=s==null?void 0:s(R))==null?void 0:W.filter(Boolean))||[];return L.length?n.jsx("span",{className:"hwl-badges",children:L.map((z,Y)=>n.jsx("span",{className:`hwl-badge ${z.tone||"grey"}`,children:z.text},Y))}):null},C=({it:R})=>n.jsx("span",{className:"hwl-actions",children:((a==null?void 0:a(R))||[]).filter(Boolean).map(L=>{const W=L.icon,z=`hwl-act${L.danger?" danger":""}${L.primary?" primary":""}`;return L.href?n.jsxs("a",{className:z,href:L.href,target:"_blank",rel:"noreferrer",title:L.label,children:[W&&n.jsx(W,{}),n.jsx("span",{children:L.label})]},L.label):n.jsxs("button",{type:"button",className:z,onClick:()=>L.onClick(R),title:L.label,children:[W&&n.jsx(W,{}),n.jsx("span",{children:L.label})]},L.label)})});return n.jsxs("div",{className:"hwl",children:[n.jsxs("div",{className:"hwl-toolbar",children:[n.jsxs("div",{className:"hwl-search",children:[n.jsx(M.search,{}),n.jsx("input",{value:v,onChange:R=>A(R.target.value),placeholder:"Search…"}),v&&n.jsx("button",{type:"button",onClick:()=>A(""),"aria-label":"Clear search",children:"✕"})]}),p,l.length>1&&n.jsx("select",{className:"hwl-sort",value:E,onChange:R=>m(R.target.value),"aria-label":"Sort",children:l.map(R=>n.jsx("option",{value:R.value,children:R.label},R.value))}),n.jsxs("span",{className:"hwl-count",children:[w.length," of ",t.length]}),n.jsxs("div",{className:"hwl-views",role:"group","aria-label":"View",children:[n.jsx("button",{type:"button",className:f==="table"?"on":"",onClick:()=>y("table"),title:"Table view",children:n.jsx(M.menu,{})}),n.jsx("button",{type:"button",className:f==="grid"?"on":"",onClick:()=>y("grid"),title:"Grid view",children:n.jsx(M.grid,{})})]})]}),x?n.jsxs("div",{className:"hwl-empty",children:[n.jsx("span",{className:"hwa-spinner",style:{borderTopColor:"#9A7418"}})," Loading…"]}):w.length===0?n.jsxs("div",{className:"hwl-empty",children:[n.jsx(M.grid,{}),n.jsx("p",{children:t.length?"Nothing matches your search.":c}),!t.length&&d&&n.jsxs("button",{type:"button",className:"hwd-btn gold",onClick:d,children:[n.jsx(M.plus,{})," ",h]})]}):f==="table"?n.jsxs("div",{className:"hwl-table",role:"table",style:{"--hwl-cols":i.length,"--hwl-cols-sm":i.filter(R=>!R.hideSm).length,"--hwl-actw":`${k}px`},children:[n.jsxs("div",{className:"hwl-row head",role:"row",children:[n.jsx("span",{className:"hwl-cell main",role:"columnheader",children:"Name"}),i.map(R=>n.jsx("span",{className:`hwl-cell ${R.className||""}${R.hideSm?" hide-sm":""}`,role:"columnheader",children:R.label},R.label)),n.jsx("span",{className:"hwl-cell act",role:"columnheader",children:"Actions"})]}),w.map(R=>n.jsxs("div",{className:"hwl-row",role:"row",children:[n.jsxs("span",{className:"hwl-cell main",role:"cell",children:[n.jsx(O,{it:R}),n.jsxs("span",{className:"hwl-main-text",children:[n.jsx("strong",{title:r.title(R),children:r.title(R)}),r.sub&&n.jsx("span",{className:"hwl-sub",children:r.sub(R)}),n.jsx(g,{it:R})]})]}),i.map(L=>n.jsx("span",{className:`hwl-cell ${L.className||""}${L.hideSm?" hide-sm":""}`,role:"cell","data-label":L.label,children:L.render(R)},L.label)),n.jsx("span",{className:"hwl-cell act",role:"cell",children:n.jsx(C,{it:R})})]},R.id||R._id))]}):n.jsx("div",{className:`hwl-grid ${r.aspect||"wide"}`,children:w.map(R=>n.jsxs("div",{className:"hwl-card",children:[n.jsx(O,{it:R,big:!0}),n.jsxs("div",{className:"hwl-card-body",children:[n.jsx(g,{it:R}),n.jsx("strong",{title:r.title(R),children:r.title(R)}),r.sub&&n.jsx("span",{className:"hwl-sub",children:r.sub(R)}),n.jsx("span",{className:"hwl-card-meta",children:i.filter(L=>!L.hideGrid).slice(0,3).map(L=>n.jsxs("span",{children:[n.jsx("em",{children:L.label}),L.render(R)]},L.label))}),n.jsx(C,{it:R})]})]},R.id||R._id))})]})}function rr({open:e,title:t,sub:r,onClose:i,children:s,footer:a,wide:o}){return j.useEffect(()=>{if(!e)return;const l=c=>c.key==="Escape"&&i();return document.addEventListener("keydown",l),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",l),document.body.style.overflow=""}},[e,i]),e?n.jsxs("div",{className:"hwl-drawer-wrap",role:"dialog","aria-modal":"true","aria-label":t,children:[n.jsx("div",{className:"hwl-drawer-back",onClick:i}),n.jsxs("aside",{className:`hwl-drawer${o?" wide":""}`,children:[n.jsxs("header",{className:"hwl-drawer-head",children:[n.jsxs("div",{children:[n.jsx("h3",{children:t}),r&&n.jsx("p",{children:r})]}),n.jsx("button",{type:"button",className:"hwl-drawer-x",onClick:i,"aria-label":"Close",children:n.jsx(M.x,{})})]}),n.jsx("div",{className:"hwl-drawer-body hwa hwa-light",children:s}),a&&n.jsx("footer",{className:"hwl-drawer-foot",children:a})]})]}):null}const Hr=[{id:"trending",label:"Trending",icon:"🔥",shows:'Homepage → "Trending Projects in Gurugram"',defaultType:"Apartment",status:"Trending"},{id:"upcoming",label:"Upcoming",icon:"🗓️",shows:'Homepage → "Upcoming Projects in Gurugram" (4 newest)',defaultType:"Apartment",status:"Upcoming"},{id:"newlaunch",label:"New Launch",icon:"🚀",shows:'Homepage → "New Launch Projects in Gurugram" (4 newest)',defaultType:"Apartment",status:"New Launch"},{id:"branded",label:"Branded",icon:"💎",shows:'Homepage → "Branded Residences" (4 newest) — the newest is also the big branded feature banner',defaultType:"Apartment"},{id:"luxury",label:"Luxury",icon:"👑",shows:'Homepage → "Top Luxury Projects" (4 newest)',defaultType:"Apartment"},{id:"commercial",label:"Commercial",icon:"🏢",shows:'Homepage → "Commercial Projects in Gurugram" (4 newest)',defaultType:"Commercial"},{id:"sco",label:"SCO",icon:"🏬",shows:'Homepage → "SCO Projects in Gurugram" (4 newest)',defaultType:"SCO"}],dr=e=>Hr.find(t=>t.id===e)||Hr[0],Mf=["Apartment","Villa","Builder Floor","Plots","Farmhouse","Commercial","Retail","SCO"],mb=["New Launch","Upcoming","Under Construction","Ready to Move","Trending"],fb=["RERA","Founder Choice","Hot Deal","Limited Units","Luxury"],gb=e=>["Commercial","Retail","SCO"].includes(e)?"e.g. Shops, Offices & Food Court":e==="Plots"?"e.g. 250 – 500 Sq.Yds.":"e.g. 3 & 4 BHK",Na={category:"trending",title:"",developer:"",location:"",city:"Gurugram",locality:"",address:"",type:"Apartment",bhk:"",tag:"RERA",rera:!0,price:"",priceRange:"",status:"New Launch",possession:"",landArea:"",towers:"",propertyTypeDetail:"",image:"",logo:"",brandColor:"#1e3a5f",gallery:[],highlights:["","","",""],overview:"",tagline:"",taglineSub:"",videoUrl:"",brochure:"",pricing:[{type:"",size:"",price:""}],amenities:[],galleryCaptions:[],about:{heading:"",subheading:"",description:"",image:"",stats:[{value:"",label:""},{value:"",label:""},{value:"",label:""},{value:"",label:""}]},faqs:[{question:"",answer:""}]},xb=e=>({category:e.category,title:e.title.trim(),developer:e.developer.trim(),location:zf(e),city:e.city.trim(),locality:e.locality.trim(),type:e.type,bhk:e.bhk.trim(),tag:e.tag.trim(),rera:!!e.rera,price:e.price.trim(),priceRange:e.priceRange.trim(),status:e.status,possession:e.possession.trim(),landArea:e.landArea.trim(),towers:e.towers.trim(),propertyTypeDetail:e.propertyTypeDetail.trim(),image:e.image.trim(),logo:e.logo.trim(),brandColor:e.brandColor,gallery:e.gallery.map(t=>t.trim()).filter(Boolean),highlights:e.highlights.map(t=>t.trim()).filter(Boolean),overview:e.overview.trim(),tagline:e.tagline.trim(),taglineSub:e.taglineSub.trim(),videoUrl:e.videoUrl.trim(),brochure:e.brochure.trim(),pricing:e.pricing.map(t=>({type:t.type.trim(),size:t.size.trim(),price:t.price.trim()})).filter(t=>t.type||t.size||t.price),amenities:[...new Set(e.amenities.map(t=>t.trim()).filter(Boolean))],galleryCaptions:e.gallery.map((t,r)=>(e.galleryCaptions[r]||"").trim()),about:{heading:e.about.heading.trim(),subheading:e.about.subheading.trim(),description:e.about.description.trim(),image:e.about.image.trim(),stats:e.about.stats.map(t=>({value:t.value.trim(),label:t.label.trim()})).filter(t=>t.value||t.label)},faqs:e.faqs.map(t=>({question:t.question.trim(),answer:t.answer.trim()})).filter(t=>t.question)}),wb=e=>{var a,o,l,c,d;const t=(h,u)=>{const p=[...h||[]];for(;p.length<u;)p.push("");return p},r={...Na};for(const h of Object.keys(Na))e[h]!==void 0&&e[h]!==null&&(r[h]=e[h]);const i=Zn(e);r.city=i.city||"Gurugram",r.locality=i.locality,r.address=String(e.location||"").split(",").map(h=>h.trim()).filter(Boolean).filter(h=>!Yi(h)&&!Xi(h)&&h.toLowerCase()!==r.locality.toLowerCase()).join(", "),r.gallery=(e.gallery||[]).filter(Boolean),r.highlights=t(e.highlights,4);const s=(h,u,p)=>{const x=(h||[]).map(v=>({...p,...v}));for(;x.length<u;)x.push({...p});return x};r.pricing=s(e.pricing,1,{type:"",size:"",price:""}),r.amenities=[...e.amenities||[]],r.galleryCaptions=(e.gallery||[]).filter(Boolean).map((h,u)=>{var p;return((p=e.galleryCaptions)==null?void 0:p[u])||""}),r.about={heading:((a=e.about)==null?void 0:a.heading)||"",subheading:((o=e.about)==null?void 0:o.subheading)||"",description:((l=e.about)==null?void 0:l.description)||"",image:((c=e.about)==null?void 0:c.image)||"",stats:s((d=e.about)==null?void 0:d.stats,4,{value:"",label:""})},r.faqs=s(e.faqs,1,{question:"",answer:""});for(const h of["overview","tagline","taglineSub","videoUrl","brochure"])r[h]=e[h]||"";return r.rera=e.rera!==!1,r},uu=[["title","Project name"],["developer","Developer"],["city","City"],["locality","Locality"],["bhk","Configuration"],["price","Starting price"],["priceRange","Price range"],["image","Main photo"]],zf=e=>[e.address,e.locality,e.city].map(t=>String(t||"").trim()).filter(Boolean).join(", "),If=(e,t)=>{var r,i;return((i=(r=e.response)==null?void 0:r.data)==null?void 0:i.error)||t},Dt="__other__";function se({label:e,hint:t,required:r,error:i,children:s,full:a}){return n.jsxs("div",{className:`hwa-field${a?" hwp-full":""}`,children:[n.jsxs("label",{children:[e,r&&n.jsx("span",{className:"hwp-req",children:" *"})]}),s,i?n.jsx("span",{className:"hwa-hint bad",children:i}):t&&n.jsx("span",{className:"hwa-hint",children:t})]})}function dt({n:e,title:t,sub:r,children:i}){return n.jsxs("section",{className:"hwa-card hwp-step",children:[n.jsxs("div",{className:"hwp-step-head",children:[n.jsx("span",{className:"hwp-step-no",children:e}),n.jsxs("div",{children:[n.jsx("h3",{children:t}),r&&n.jsx("p",{children:r})]})]}),i]})}function yb({items:e,onChange:t,placeholder:r,addLabel:i,max:s=12}){const a=(l,c)=>t(e.map((d,h)=>h===l?c:d)),o=l=>t(e.length>1?e.filter((c,d)=>d!==l):[""]);return n.jsxs("div",{className:"hwp-list",children:[e.map((l,c)=>n.jsxs("div",{className:"hwp-list-row",children:[n.jsx("span",{className:"hwp-list-no",children:c+1}),n.jsx("input",{className:"hwa-input no-icon",value:l,onChange:d=>a(c,d.target.value),placeholder:r}),n.jsx("button",{type:"button",className:"hwp-x",onClick:()=>o(c),"aria-label":"Remove",children:"✕"})]},c)),e.length<s&&n.jsxs("button",{type:"button",className:"hwp-add",onClick:()=>t([...e,""]),children:["+ ",i]})]})}function Mo({rows:e,onChange:t,fields:r,empty:i,addLabel:s,max:a=20,textareaKey:o}){const l=(d,h,u)=>t(e.map((p,x)=>x===d?{...p,[h]:u}:p)),c=d=>t(e.length>1?e.filter((h,u)=>u!==d):[{...i}]);return n.jsxs("div",{className:"hwp-list",children:[e.map((d,h)=>n.jsxs("div",{className:`hwp-rows-row${o?" stacked":""}`,children:[n.jsx("span",{className:"hwp-list-no",children:h+1}),n.jsx("div",{className:"hwp-rows-fields",style:{gridTemplateColumns:o?"1fr":r.map(u=>u.w||"1fr").join(" ")},children:r.map(u=>u.key===o?n.jsx("textarea",{className:"hwa-input no-icon hwp-textarea",rows:2,value:d[u.key]||"",onChange:p=>l(h,u.key,p.target.value),placeholder:u.placeholder},u.key):n.jsx("input",{className:"hwa-input no-icon",value:d[u.key]||"",onChange:p=>l(h,u.key,p.target.value),placeholder:u.placeholder},u.key))}),n.jsx("button",{type:"button",className:"hwp-x",onClick:()=>c(h),"aria-label":"Remove",children:"✕"})]},h)),e.length<a&&n.jsxs("button",{type:"button",className:"hwp-add",onClick:()=>t([...e,{...i}]),children:["+ ",s]})]})}function vb({initial:e,editingId:t,counts:r,onSaved:i,onCancel:s}){const[a,o]=j.useState(e),[l,c]=j.useState(!1),[d,h]=j.useState(!1),[u,p]=j.useState(""),x=(N,_)=>o(I=>({...I,[N]:_})),v=(N,_)=>o(I=>({...I,about:{...I.about,[N]:_}})),[A,E]=j.useState(""),m=N=>o(_=>({..._,amenities:_.amenities.includes(N)?_.amenities.filter(I=>I!==N):[..._.amenities,N]})),f=()=>{const N=A.trim();N&&!a.amenities.includes(N)&&x("amenities",[...a.amenities,N]),E("")},y=dr(a.category),w=$n(a.city),k=w.some(N=>N.name===a.locality),[O,g]=j.useState(!!e.locality&&!$n(e.city).some(N=>N.name===e.locality)),[C,P]=j.useState(!!e.city&&!Yt.some(N=>N.city===e.city)),R=N=>o(_=>({..._,category:N.id,type:["commercial","sco"].includes(N.id)||["Commercial","Retail","SCO"].includes(_.type)?N.defaultType:_.type,status:N.status||_.status})),L=uu.filter(([N])=>!String(a[N]||"").trim()),W=N=>l&&!String(a[N]||"").trim()?"Required":null,z=()=>document.querySelector(".hwp .hwu-busy"),Y=async N=>{if(N.preventDefault(),c(!0),p(""),z())return p("Please wait — photos are still uploading.");if(L.length)return window.scrollTo({top:0,behavior:"smooth"}),p(`Please fill: ${L.map(_=>_[1]).join(", ")}`);h(!0);try{const _=xb(a);t?await $.put(`/properties/${t}`,_):await $.post("/properties",_),i(t?"updated":"added",_.title,_.category)}catch(_){p(If(_,"Could not save the property")),window.scrollTo({top:0,behavior:"smooth"})}finally{h(!1)}},ee=zf(a);return n.jsxs("form",{onSubmit:Y,noValidate:!0,className:"hwp-form-layout",children:[n.jsxs("div",{className:"hwp-form-main",children:[u&&n.jsx($t,{children:u}),n.jsx(dt,{n:"1",title:"Where should this property appear?",sub:"Pick one section. This decides where it shows on the website.",children:n.jsx("div",{className:"hwp-cats",children:Hr.map(N=>n.jsxs("button",{type:"button",className:`hwp-cat${a.category===N.id?" active":""}`,onClick:()=>R(N),children:[n.jsxs("span",{className:"hwp-cat-top",children:[n.jsx("span",{className:"hwp-cat-icon",children:N.icon}),n.jsx("strong",{children:N.label}),n.jsxs("em",{children:[r[N.id]||0," listed"]})]}),n.jsx("span",{className:"hwp-cat-where",children:N.shows})]},N.id))})}),n.jsx(dt,{n:"2",title:"Location",sub:"Choose the city and locality — the website’s location filters and menus use these.",children:n.jsxs("div",{className:"hwp-grid",children:[n.jsx(se,{label:"City",required:!0,error:W("city"),children:C?n.jsxs("div",{className:"hwp-inline",children:[n.jsx("input",{className:"hwa-input no-icon",value:a.city,onChange:N=>x("city",N.target.value),placeholder:"Type city name",autoFocus:!0}),n.jsx("button",{type:"button",className:"hwa-mini",onClick:()=>{P(!1),o(N=>({...N,city:"Gurugram",locality:""}))},children:"List"})]}):n.jsxs("select",{className:"hwa-input no-icon",value:a.city,onChange:N=>{if(N.target.value===Dt){P(!0),g(!0),o(_=>({..._,city:"",locality:""}));return}g(!1),o(_=>({..._,city:N.target.value,locality:""}))},children:[Yt.map(N=>n.jsx("option",{value:N.city,children:N.city},N.city)),n.jsx("option",{value:Dt,children:"Other city…"})]})}),n.jsx(se,{label:"Locality / Micro-market",required:!0,error:W("locality"),children:O||C?n.jsxs("div",{className:"hwp-inline",children:[n.jsx("input",{className:"hwa-input no-icon",value:a.locality,onChange:N=>x("locality",N.target.value),placeholder:"e.g. Sector 150 Corridor"}),!C&&n.jsx("button",{type:"button",className:"hwa-mini",onClick:()=>{g(!1),x("locality","")},children:"List"})]}):n.jsxs("select",{className:"hwa-input no-icon",value:k?a.locality:"",onChange:N=>{if(N.target.value===Dt){g(!0),x("locality","");return}x("locality",N.target.value)},children:[n.jsx("option",{value:"",children:"Select locality…"}),w.map(N=>n.jsx("option",{value:N.name,children:N.name},N.slug)),n.jsx("option",{value:Dt,children:"Other locality…"})]})}),n.jsx(se,{label:"Sector / Address",hint:"Optional — e.g. Sector 58 or the street",children:n.jsx("input",{className:"hwa-input no-icon",value:a.address,onChange:N=>x("address",N.target.value),placeholder:"e.g. Sector 58"})}),n.jsx(se,{label:"Shown on the website as",children:n.jsxs("div",{className:"hwp-location-out",children:["📍 ",ee||"Choose city and locality"]})})]})}),n.jsx(dt,{n:"3",title:"Basic details",sub:"Shown on the property card and the top of the detail page.",children:n.jsxs("div",{className:"hwp-grid",children:[n.jsx(se,{label:"Project name",required:!0,error:W("title"),full:!0,children:n.jsx("input",{className:"hwa-input no-icon",value:a.title,onChange:N=>x("title",N.target.value),placeholder:"e.g. M3M Brabus Residences"})}),n.jsx(se,{label:"Developer / Builder",required:!0,error:W("developer"),children:n.jsx("input",{className:"hwa-input no-icon",value:a.developer,onChange:N=>x("developer",N.target.value),placeholder:"e.g. M3M Group"})}),n.jsx(se,{label:"Property type",required:!0,children:n.jsx("select",{className:"hwa-input no-icon",value:a.type,onChange:N=>x("type",N.target.value),children:Mf.map(N=>n.jsx("option",{children:N},N))})}),n.jsx(se,{label:"Configuration",required:!0,error:W("bhk"),hint:"BHK, unit mix or plot size — used by the BHK filter",children:n.jsx("input",{className:"hwa-input no-icon",value:a.bhk,onChange:N=>x("bhk",N.target.value),placeholder:gb(a.type)})}),n.jsxs(se,{label:"Card badge",hint:"Small label on the card image",children:[n.jsx("input",{className:"hwa-input no-icon",list:"hwp-tags",value:a.tag,onChange:N=>x("tag",N.target.value),placeholder:"e.g. RERA"}),n.jsx("datalist",{id:"hwp-tags",children:fb.map(N=>n.jsx("option",{value:N},N))})]}),n.jsx(se,{label:"RERA approved?",children:n.jsxs("div",{className:"hwp-toggle",children:[n.jsx("button",{type:"button",className:a.rera?"on":"",onClick:()=>x("rera",!0),children:"Yes"}),n.jsx("button",{type:"button",className:a.rera?"":"on",onClick:()=>x("rera",!1),children:"No"})]})})]})}),n.jsx(dt,{n:"4",title:"Price",sub:"Write prices as they should appear, in Cr or L (e.g. ₹85 L – 1.2 Cr). The budget filter reads them automatically.",children:n.jsxs("div",{className:"hwp-grid",children:[n.jsx(se,{label:"Starting price",required:!0,error:W("price"),hint:"Shown as “Starting from” on the detail page",children:n.jsx("input",{className:"hwa-input no-icon",value:a.price,onChange:N=>x("price",N.target.value),placeholder:"e.g. ₹5.20 Cr"})}),n.jsx(se,{label:"Price range",required:!0,error:W("priceRange"),hint:"Shown on homepage cards",children:n.jsx("input",{className:"hwa-input no-icon",value:a.priceRange,onChange:N=>x("priceRange",N.target.value),placeholder:"e.g. ₹5.2 – 5.8 Cr"})})]})}),n.jsx(dt,{n:"5",title:"Overview",sub:"The opening section of the detail page — description, image overlay text and an optional video.",children:n.jsxs("div",{className:"hwp-grid",children:[n.jsx(se,{label:"Description",full:!0,hint:"A few lines about the project. Long text gets a “Read more” link.",children:n.jsx("textarea",{className:"hwa-input no-icon hwp-textarea",rows:5,value:a.overview,onChange:N=>x("overview",N.target.value),placeholder:"e.g. M3M Brabus Residences is an ultra-luxury residential development by M3M India in collaboration with BRABUS…"})}),n.jsx(se,{label:"Image overlay title",hint:"Shown on the photo slider",children:n.jsx("input",{className:"hwa-input no-icon",value:a.tagline,onChange:N=>x("tagline",N.target.value),placeholder:"e.g. A New Icon Rises"})}),n.jsx(se,{label:"Image overlay sub-line",children:n.jsx("input",{className:"hwa-input no-icon",value:a.taglineSub,onChange:N=>x("taglineSub",N.target.value),placeholder:"e.g. Luxury living beyond compare"})}),n.jsx(se,{label:"Video link",full:!0,hint:"Optional — YouTube or .mp4 link for the “Watch video” button",children:n.jsx("input",{className:"hwa-input no-icon",value:a.videoUrl,onChange:N=>x("videoUrl",N.target.value),placeholder:"https://youtube.com/watch?v=…"})}),n.jsx(se,{label:"Brochure (PDF)",full:!0,hint:"Optional — visitors download it from the “Brochure” buttons. Without one, those buttons ask for their details instead.",children:n.jsx(hb,{value:a.brochure,onChange:N=>x("brochure",N)})})]})}),n.jsx(dt,{n:"6",title:"Space & Pricing",sub:"One row per unit type — shown as the price table on the detail page.",children:n.jsx(Mo,{rows:a.pricing,onChange:N=>x("pricing",N),empty:{type:"",size:"",price:""},addLabel:"Add unit type",fields:[{key:"type",placeholder:"Type, e.g. 4 BHK",w:"1fr"},{key:"size",placeholder:"Size, e.g. 5,000 Sq.Ft.",w:"1.2fr"},{key:"price",placeholder:"Price, e.g. ₹20 Cr",w:"1fr"}]})}),n.jsx(dt,{n:"7",title:"Photos & branding",sub:"Upload photos from your computer — they’re resized automatically. The preview shows the same crop the website cards use.",children:n.jsxs("div",{className:"hwp-grid",children:[n.jsx(se,{label:"Main photo",required:!0,error:W("image"),full:!0,children:n.jsx(kt,{value:a.image,onChange:N=>x("image",N),purpose:"property",aspect:"3 / 2",hint:"Cover photo on every card and the detail page (landscape works best)"})}),n.jsx(se,{label:"Gallery photos",full:!0,hint:"Shown in the gallery on the detail page — the first 5 make the photo collage; captions appear on the photos",children:n.jsx(db,{value:a.gallery,onChange:N=>x("gallery",N),onMakeCover:N=>x("image",N),purpose:"property",captions:a.galleryCaptions,onCaptionsChange:N=>x("galleryCaptions",N)})}),n.jsx(se,{label:"Developer logo",hint:"Optional — shown on the detail page header",children:n.jsx(kt,{value:a.logo,onChange:N=>x("logo",N),purpose:"logo",aspect:"5 / 2",kind:"logo",fit:"contain"})}),n.jsx(se,{label:"Brand colour",hint:"Colour of the detail page header",children:n.jsxs("div",{className:"hwp-color",children:[n.jsx("input",{type:"color",value:a.brandColor,onChange:N=>x("brandColor",N.target.value)}),n.jsx("code",{children:a.brandColor}),a.logo.trim()&&n.jsx("span",{className:"hwp-logo-prev",style:{background:a.brandColor},children:n.jsx("img",{src:a.logo.trim(),alt:"logo preview",onError:N=>N.target.style.display="none"})})]})})]})}),n.jsx(dt,{n:"8",title:"Project details",sub:"Shown in the “Overview” boxes on the detail page. Status also powers the “Project Status” filter.",children:n.jsxs("div",{className:"hwp-grid",children:[n.jsx(se,{label:"Project status",hint:"Filled automatically from the section; change if needed",children:n.jsx("select",{className:"hwa-input no-icon",value:a.status,onChange:N=>x("status",N.target.value),children:[...new Set([a.status,...mb])].filter(Boolean).map(N=>n.jsx("option",{children:N},N))})}),n.jsx(se,{label:"Possession",children:n.jsx("input",{className:"hwa-input no-icon",value:a.possession,onChange:N=>x("possession",N.target.value),placeholder:"e.g. Dec 2030"})}),n.jsx(se,{label:"Land area",children:n.jsx("input",{className:"hwa-input no-icon",value:a.landArea,onChange:N=>x("landArea",N.target.value),placeholder:"e.g. 12 Acres"})}),n.jsx(se,{label:"Towers & units",children:n.jsx("input",{className:"hwa-input no-icon",value:a.towers,onChange:N=>x("towers",N.target.value),placeholder:"e.g. 3 Towers – 110 Units"})}),n.jsx(se,{label:"Property type (detail)",full:!0,hint:"Longer description of the type, e.g. for the overview box",children:n.jsx("input",{className:"hwa-input no-icon",value:a.propertyTypeDetail,onChange:N=>x("propertyTypeDetail",N.target.value),placeholder:"e.g. Ultra-luxury Residential Flats"})})]})}),n.jsx(dt,{n:"9",title:"Highlights",sub:"Key selling points — shown with checkmarks on the detail page. 4 is ideal.",children:n.jsx(yb,{items:a.highlights,onChange:N=>x("highlights",N),placeholder:"e.g. Only 2 apartments per floor with private lobbies",addLabel:"Add highlight"})}),n.jsxs(dt,{n:"10",title:"Amenities",sub:"Tick what the project offers, or add your own. Shown as an icon grid on the detail page.",children:[n.jsx("div",{className:"hwp-amenities",children:[...Vl.map(([N])=>N),...a.amenities.filter(N=>!Vl.some(([_])=>_===N))].map(N=>n.jsxs("button",{type:"button",className:`hwp-amenity${a.amenities.includes(N)?" on":""}`,onClick:()=>m(N),children:[n.jsx(Sf,{name:N,size:18})," ",N]},N))}),n.jsxs("div",{className:"hwp-inline",style:{marginTop:10,maxWidth:420},children:[n.jsx("input",{className:"hwa-input no-icon",value:A,onChange:N=>E(N.target.value),onKeyDown:N=>N.key==="Enter"&&(N.preventDefault(),f()),placeholder:"Add another amenity, e.g. Infinity Pool"}),n.jsx("button",{type:"button",className:"hwa-mini",onClick:f,children:"Add"})]}),n.jsxs("span",{className:"hwa-hint",style:{display:"block",marginTop:6},children:[a.amenities.length," selected"]})]}),n.jsx(dt,{n:"11",title:"About the developer",sub:`The “About ${a.developer||"the developer"}” section. Leave empty to show a short default about the developer.`,children:n.jsxs("div",{className:"hwp-grid",children:[n.jsx(se,{label:"Heading",hint:`Default: About ${a.developer||"the developer"}`,children:n.jsx("input",{className:"hwa-input no-icon",value:a.about.heading,onChange:N=>v("heading",N.target.value),placeholder:`About ${a.developer||"M3M India"}`})}),n.jsx(se,{label:"Sub-heading",children:n.jsx("input",{className:"hwa-input no-icon",value:a.about.subheading,onChange:N=>v("subheading",N.target.value),placeholder:"e.g. Building a Better Tomorrow"})}),n.jsx(se,{label:"Description",full:!0,children:n.jsx("textarea",{className:"hwa-input no-icon hwp-textarea",rows:4,value:a.about.description,onChange:N=>v("description",N.target.value),placeholder:"e.g. M3M India is a leading real estate developer, known for its commitment to quality…"})}),n.jsx(se,{label:"Image",full:!0,hint:"A landscape photo of the developer’s work",children:n.jsx("div",{style:{maxWidth:420},children:n.jsx(kt,{value:a.about.image,onChange:N=>v("image",N),purpose:"property",aspect:"3 / 2"})})}),n.jsx(se,{label:"Key numbers",full:!0,hint:"Up to 4, e.g. 15+ / Years of Excellence",children:n.jsx(Mo,{rows:a.about.stats,onChange:N=>v("stats",N),empty:{value:"",label:""},max:4,addLabel:"Add number",fields:[{key:"value",placeholder:"e.g. 15+",w:".6fr"},{key:"label",placeholder:"e.g. Years of Excellence",w:"1.4fr"}]})})]})}),n.jsx(dt,{n:"12",title:"Questions & answers",sub:"Shown in “Everything You Need to Know”. Leave empty to show common questions answered from this property’s details.",children:n.jsx(Mo,{rows:a.faqs,onChange:N=>x("faqs",N),empty:{question:"",answer:""},addLabel:"Add question",textareaKey:"answer",fields:[{key:"question",placeholder:"Question, e.g. What is the possession date?"},{key:"answer",placeholder:"Answer"}]})})]}),n.jsx("aside",{className:"hwp-side",children:n.jsxs("div",{className:"hwa-card hwp-preview",children:[n.jsx("div",{className:"hwp-side-title",children:"Live preview — as on the website"}),n.jsxs("div",{className:"hwp-pcard",children:[n.jsxs("div",{className:"hwp-pcard-img",children:[a.image.trim()?n.jsx("img",{src:a.image.trim(),alt:"",onError:N=>N.target.style.visibility="hidden"}):n.jsx("span",{children:"Main photo"}),a.rera&&n.jsx("b",{className:"hwp-pcard-rera",children:"✓ RERA"}),n.jsx("b",{className:"hwp-pcard-tag",children:a.bhk||a.type})]}),n.jsxs("div",{className:"hwp-pcard-body",children:[n.jsx("strong",{children:a.title||"Project name"}),n.jsx("span",{className:"hwp-pcard-price",children:a.priceRange||a.price||"Price range"}),n.jsxs("span",{className:"hwp-pcard-loc",children:["📍 ",ee||"Location"]}),n.jsxs("span",{className:"hwp-pcard-meta",children:[a.bhk||"Configuration"," · ",a.type]})]})]}),n.jsxs("div",{className:"hwp-where",children:[n.jsxs("span",{children:[y.icon," Will appear in"]}),n.jsx("strong",{children:y.shows}),a.locality&&n.jsxs("strong",{style:{fontWeight:600},children:["📍 Location filter: ",a.locality,a.city?`, ${a.city}`:""]})]}),n.jsx("ul",{className:"hwp-check",children:uu.map(([N,_])=>{const I=!!String(a[N]||"").trim();return n.jsxs("li",{className:I?"ok":"",children:[I?"✓":"○"," ",_]},N)})}),n.jsx("button",{className:"hwa-btn hwa-btn-gold",disabled:d,children:d?n.jsxs(n.Fragment,{children:[n.jsx(ls,{})," Saving…"]}):t?"Save changes":"Publish property"}),n.jsx("button",{type:"button",className:"hwp-cancel",onClick:s,children:"Cancel"})]})})]})}const bb=[{id:"section",label:"By Section",hint:"Homepage section"},{id:"location",label:"By Location",hint:"City & locality"},{id:"type",label:"By Type",hint:"Apartment, Villa, SCO…"}];function jb({properties:e,loaded:t=!0,onChange:r,initialFilter:i="all",startAdding:s=!1}){const a=(T={})=>{const D=dr(T.category||"trending");return{key:Date.now(),initial:{...Na,category:D.id,type:D.defaultType,status:D.status||Na.status,...T}}},[o,l]=j.useState(()=>s?a(i!=="all"?{category:i}:{}):"list"),[c,d]=j.useState(null),[h,u]=j.useState("section"),[p,x]=j.useState(i),[v,A]=j.useState("Gurugram"),[E,m]=j.useState(""),[f,y]=j.useState(""),[w,k]=j.useState(""),O=j.useMemo(()=>e.map(T=>({p:T,...Zn(T)})),[e]),g=j.useMemo(()=>{const T={all:e.length};for(const D of e)T[D.category]=(T[D.category]||0)+1;return T},[e]),C=T=>O.filter(D=>D.city===T).length,P=T=>O.filter(D=>D.city===v&&D.locality===T).length,R=T=>e.filter(D=>D.type===T).length,L=O.filter(T=>T.city===v&&!$n(v).some(D=>D.name===T.locality)),W=O.filter(({p:T,city:D,locality:V})=>{if(h==="section"&&p!=="all"&&T.category!==p)return!1;if(h==="location"){if(D!==v)return!1;if(E===Dt){if($n(v).some(b=>b.name===V))return!1}else if(E&&V!==E)return!1}return!(h==="type"&&f&&T.type!==f)}).map(T=>T.p),z=()=>{if(h==="section")return p!=="all"?{category:p}:{};if(h==="location")return{city:v,locality:E&&E!==Dt?E:""};if(h==="type"&&f){const T=f==="SCO"?"sco":["Commercial","Retail"].includes(f)?"commercial":void 0;return{type:f,...T?{category:T,type:f}:{}}}return{}},Y=()=>h==="section"&&p!=="all"?dr(p).label:h==="location"?E&&E!==Dt?E:v:h==="type"&&f?f:"",ee=(T=z())=>{d(null),k("");const D=a(T);T.type&&(D.initial.type=T.type),l(D),window.scrollTo(0,0)},N=T=>{d(T),k(""),l({key:T.id,initial:wb(T)}),window.scrollTo(0,0)},_=(T,D,V)=>{l("list"),k(`“${D}” ${T}. It now appears in: ${dr(V).shows}`),r(),window.scrollTo(0,0)},I=async T=>{if(window.confirm(`Delete “${T.title}”? It will be removed from the website.`))try{await $.delete(`/properties/${T.id}`),r()}catch(D){alert(If(D,"Could not delete"))}};if(o!=="list")return n.jsxs("div",{className:"hwa hwa-section hwa-light hwp",children:[n.jsx("div",{className:"hwa-section-head",children:n.jsxs("div",{children:[n.jsx("button",{type:"button",className:"hwp-back",onClick:()=>l("list"),children:"← All properties"}),n.jsx("h2",{children:c?`Edit: ${c.title}`:"Add a new property"}),n.jsxs("p",{children:["Fill the steps below. Fields marked ",n.jsx("span",{className:"hwp-req",children:"*"})," are required. The preview on the right updates as you type."]})]})}),n.jsx(vb,{initial:o.initial,editingId:c==null?void 0:c.id,counts:g,onSaved:_,onCancel:()=>l("list")},o.key)]});const K=Y();return n.jsxs("div",{className:"hwa hwa-section hwa-light hwp",children:[n.jsxs("div",{className:"hwa-section-head",children:[n.jsxs("div",{children:[n.jsxs("h2",{children:["Properties ",n.jsxs("span",{style:{fontWeight:500,color:"#9ca3af",fontSize:14},children:["(",e.length,")"]})]}),n.jsx("p",{children:"Browse by section, location or type — then use “+ Add” to create a property already filled in for that group."})]}),n.jsx("button",{className:"hwa-btn hwa-btn-gold hwp-add-main",onClick:()=>ee({}),children:"+ Add Property"})]}),w&&n.jsx("div",{style:{marginTop:14},children:n.jsx($t,{type:"success",children:w})}),n.jsx("div",{className:"hwp-browse",children:bb.map(T=>n.jsxs("button",{className:h===T.id?"active":"",onClick:()=>u(T.id),children:[n.jsx("strong",{children:T.label}),n.jsx("span",{children:T.hint})]},T.id))}),h==="section"&&n.jsxs("div",{className:"hwp-tabs",children:[n.jsxs("button",{className:p==="all"?"active":"",onClick:()=>x("all"),children:["All ",n.jsx("em",{children:g.all})]}),Hr.map(T=>n.jsxs("button",{className:p===T.id?"active":"",onClick:()=>x(T.id),children:[T.icon," ",T.label," ",n.jsx("em",{children:g[T.id]||0})]},T.id))]}),h==="location"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"hwp-tabs",children:Yt.map(T=>n.jsxs("button",{className:v===T.city?"active":"",onClick:()=>{A(T.city),m("")},children:[T.city," ",n.jsx("em",{children:C(T.city)})]},T.city))}),n.jsxs("div",{className:"hwp-locs",children:[n.jsxs("button",{className:`hwp-loc${E===""?" active":""}`,onClick:()=>m(""),children:[n.jsxs("strong",{children:["All of ",v]}),n.jsxs("span",{children:[C(v)," properties"]})]}),$n(v).map(T=>n.jsxs("div",{className:`hwp-loc${E===T.name?" active":""}`,onClick:()=>m(T.name),role:"button",tabIndex:0,children:[n.jsx("strong",{children:T.name}),n.jsxs("span",{children:[P(T.name)," ",P(T.name)===1?"property":"properties"]}),n.jsx("button",{type:"button",className:"hwp-loc-add",onClick:D=>{D.stopPropagation(),ee({city:v,locality:T.name})},title:`Add property in ${T.name}`,children:"+ Add"})]},T.slug)),L.length>0&&n.jsxs("button",{className:`hwp-loc warn${E===Dt?" active":""}`,onClick:()=>m(Dt),children:[n.jsx("strong",{children:"Other / not set"}),n.jsxs("span",{children:[L.length," — edit to choose a locality"]})]})]})]}),h==="type"&&n.jsxs("div",{className:"hwp-tabs",children:[n.jsxs("button",{className:f===""?"active":"",onClick:()=>y(""),children:["All ",n.jsx("em",{children:e.length})]}),Mf.map(T=>n.jsxs("button",{className:f===T?"active":"",onClick:()=>y(T),children:[T," ",n.jsx("em",{children:R(T)})]},T))]}),K&&n.jsxs("div",{className:"hwp-section-info",children:[n.jsxs("div",{children:[n.jsx("strong",{children:K}),h==="section"&&n.jsxs(n.Fragment,{children:[" — ",dr(p).shows]}),h==="location"&&n.jsxs(n.Fragment,{children:[" — shown when visitors filter by ",K," on the website"]}),h==="type"&&n.jsxs(n.Fragment,{children:[" — shown when visitors filter by “",K,"”"]})]}),n.jsxs("button",{className:"hwa-mini",onClick:()=>ee(),children:["+ Add in ",K]})]}),n.jsx(Cn,{id:"properties",loading:!t,items:W,main:{aspect:"wide",thumb:T=>T.image,title:T=>T.title,sub:T=>T.developer},badges:T=>{const D=dr(T.category);return[{text:`${D.icon} ${D.label}`,tone:"dark"},T.rera!==!1&&{text:"RERA",tone:"green"}]},columns:[{label:"Location",render:T=>{const D=Zn(T);return n.jsx("span",{className:"hwl-ellipsis",title:T.location,children:D.locality?n.jsxs(n.Fragment,{children:[n.jsx("b",{children:D.locality}),n.jsx("br",{}),n.jsx("span",{className:"muted",children:D.city})]}):T.location})}},{label:"Type",render:T=>n.jsxs("span",{children:[T.bhk,n.jsx("br",{}),n.jsx("span",{className:"muted",children:T.type})]}),hideSm:!0},{label:"Price",render:T=>n.jsx("span",{className:"gold",children:T.priceRange||T.price})},{label:"Status",render:T=>n.jsx("span",{className:"muted",children:T.status||"—"}),hideSm:!0,hideGrid:!0}],actions:T=>[{label:"Edit",icon:M.edit,onClick:N,primary:!0},{label:"View",icon:M.external,href:`/property/${T.id}`},{label:"Delete",icon:M.trash,onClick:I,danger:!0}],searchText:T=>`${T.title} ${T.location} ${T.developer} ${T.bhk} ${T.type} ${T.locality||""}`,sorts:[{value:"new",label:"Newest first",fn:(T,D)=>String(D.createdAt).localeCompare(String(T.createdAt))},{value:"old",label:"Oldest first",fn:(T,D)=>String(T.createdAt).localeCompare(String(D.createdAt))},{value:"az",label:"Name A–Z",fn:(T,D)=>T.title.localeCompare(D.title)},{value:"pl",label:"Price: low to high",fn:(T,D)=>{var V,b;return(((V=Ut(T))==null?void 0:V.min)??1e9)-(((b=Ut(D))==null?void 0:b.min)??1e9)}},{value:"ph",label:"Price: high to low",fn:(T,D)=>{var V,b;return(((V=Ut(D))==null?void 0:V.max)??-1)-(((b=Ut(T))==null?void 0:b.max)??-1)}}],empty:"No properties here yet.",onEmptyAdd:()=>ee(),emptyAddLabel:`Add the first one${K?` in ${K}`:""}`})]})}const Me=(e,t)=>{if(!e)throw new Error(`Please ${t}`)},qa=e=>(t,r)=>String(t[e]||"").localeCompare(String(r[e]||"")),Bf=(e,t)=>String(t.createdAt||t.id).localeCompare(String(e.createdAt||e.id)),Ab=(e,t)=>-Bf(e,t),kb=()=>!!document.querySelector(".hwl-drawer .hwu-busy");function X({label:e,hint:t,full:r,children:i}){return n.jsxs("div",{className:`hwa-field${r?" full":""}`,children:[n.jsx("label",{children:e}),i,t&&n.jsx("span",{className:"hwa-hint",children:t})]})}const ae=({value:e,onChange:t,...r})=>n.jsx("input",{className:"hwa-input no-icon",value:e??"",onChange:i=>t(i.target.value),...r});function ir({title:e,count:t,sub:r,children:i}){return n.jsxs("div",{className:"hwd-page-head",children:[n.jsxs("div",{children:[n.jsxs("h1",{children:[e,t!==void 0&&n.jsxs("span",{className:"count",children:["(",t,")"]})]}),r&&n.jsx("p",{children:r})]}),n.jsx("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:i})]})}function sr({empty:e,run:t,create:r,update:i,remove:s,validate:a,labels:o}){const[l,c]=j.useState(!1),[d,h]=j.useState(null),[u,p]=j.useState(e),[x,v]=j.useState(!1);return{open:l,editing:d,f:u,set:k=>O=>p(g=>({...g,[k]:O})),setF:p,saving:x,openNew:(k={})=>{h(null),p({...e,...k}),c(!0)},openEdit:k=>{h(k),p({...e,...k}),c(!0)},close:()=>!x&&c(!1),save:async k=>{if(k==null||k.preventDefault(),kb())return t(()=>{throw new Error("Please wait — the image is still uploading")});v(!0);let O=!1;await t(async()=>{a==null||a(u);const g=Object.fromEntries(Object.keys(e).map(C=>[C,u[C]]));d?await i(d,g):await r(g),O=!0},d?o.updated:o.created),v(!1),O&&c(!1)},del:k=>{confirm(`Delete “${k.title||k.name}”? This removes it from the website.`)&&t(()=>s(k),o.deleted)}}}const ar=({ed:e,saveLabel:t})=>n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",className:"hwd-btn",onClick:e.close,disabled:e.saving,children:"Cancel"}),n.jsx("button",{type:"submit",form:"hwl-form",className:"hwd-btn gold",disabled:e.saving,children:e.saving?"Saving…":e.editing?"Save changes":t})]}),Nb={title:"",developer:"",location:"",microMarket:"",price:"Contact for price",description:"",videoUrl:"",thumbnail:"",image:"",phone:"9811 750 740",demandText:"High Demand: 10 buyers enquired in last 24 hours",activeBuyers:24,monthlyRental:"₹85,000/mo",roi:"5.5%",badge:"LUXURY EDITION"};function Sb({snaps:e,run:t}){const r=sr({empty:Nb,run:t,create:a=>$.post("/snaps",a),update:(a,o)=>$.put(`/snaps/${a.id}`,o),remove:a=>$.delete(`/snaps/${a.id}`),validate:a=>{Me(a.title,"enter a title"),Me(a.videoUrl,"paste the video link"),Me(a.thumbnail,"upload a thumbnail")},labels:{created:"Snap published",updated:"Snap updated",deleted:"Snap deleted"}}),{f:i,set:s}=r;return n.jsxs(n.Fragment,{children:[n.jsxs(ir,{title:"Property Snaps",count:e.length,sub:"Vertical video reels shown on the /property-snaps page.",children:[n.jsxs("a",{className:"hwd-btn",href:"/property-snaps",target:"_blank",rel:"noreferrer",children:[n.jsx(M.external,{})," View page"]}),n.jsxs("button",{className:"hwd-btn gold",onClick:()=>r.openNew(),children:[n.jsx(M.plus,{})," Add snap"]})]}),n.jsx(Cn,{id:"snaps",items:e,main:{aspect:"tall",thumb:a=>a.thumbnail||a.image,title:a=>a.title,sub:a=>[a.developer,a.location].filter(Boolean).join(" · "),overlay:()=>n.jsx("span",{className:"hwl-play",children:n.jsx("span",{children:n.jsx(M.film,{})})})},badges:a=>[a.badge&&{text:a.badge,tone:"dark"}],columns:[{label:"Price",render:a=>n.jsx("span",{className:"gold",children:a.price})},{label:"Buyers",render:a=>n.jsxs("span",{children:[n.jsx("b",{children:a.activeBuyers})," ",n.jsx("span",{className:"muted",children:"viewing"})]}),hideSm:!0},{label:"Rental / ROI",render:a=>n.jsxs("span",{className:"muted",children:[a.monthlyRental," · ",a.roi]}),hideSm:!0}],actions:a=>[{label:"Edit",icon:M.edit,onClick:r.openEdit,primary:!0},a.videoUrl&&{label:"Video",icon:M.film,href:a.videoUrl},{label:"Delete",icon:M.trash,onClick:r.del,danger:!0}],searchText:a=>`${a.title} ${a.developer} ${a.location} ${a.badge}`,sorts:[{value:"new",label:"Newest first",fn:Bf},{value:"old",label:"Oldest first",fn:Ab},{value:"az",label:"Name A–Z",fn:qa("title")}],empty:"No snaps yet.",onEmptyAdd:()=>r.openNew(),emptyAddLabel:"Add the first snap",defaultView:"grid"}),n.jsx(rr,{open:r.open,onClose:r.close,title:r.editing?"Edit snap":"Add a snap",sub:"Paste an .mp4 video link and upload a portrait thumbnail.",footer:n.jsx(ar,{ed:r,saveLabel:"Publish snap"}),children:n.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[n.jsxs("div",{className:"hwl-drawer-section",children:[n.jsx("h4",{children:"Video"}),n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Video link (.mp4) *",full:!0,hint:"Plays muted on a loop",children:n.jsx(ae,{value:i.videoUrl,onChange:s("videoUrl"),placeholder:"https://…/video.mp4"})}),n.jsx(X,{label:"Thumbnail *",full:!0,children:n.jsx("div",{style:{maxWidth:220},children:n.jsx(kt,{value:i.thumbnail,onChange:s("thumbnail"),purpose:"snap",aspect:"4 / 5"})})})]})]}),n.jsxs("div",{className:"hwl-drawer-section",children:[n.jsx("h4",{children:"Details"}),n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Title *",full:!0,children:n.jsx(ae,{value:i.title,onChange:s("title"),placeholder:"e.g. Oberoi Realty 360 North"})}),n.jsx(X,{label:"Developer",children:n.jsx(ae,{value:i.developer,onChange:s("developer"),placeholder:"e.g. Oberoi Realty"})}),n.jsx(X,{label:"Location",children:n.jsx(ae,{value:i.location,onChange:s("location"),placeholder:"e.g. Sector 66, Gurugram"})}),n.jsx(X,{label:"Price",children:n.jsx(ae,{value:i.price,onChange:s("price"),placeholder:"₹5.20 Cr"})}),n.jsx(X,{label:"Badge",children:n.jsx(ae,{value:i.badge,onChange:s("badge"),placeholder:"LUXURY EDITION"})}),n.jsx(X,{label:"Description",full:!0,children:n.jsx("textarea",{className:"hwa-input no-icon",rows:3,value:i.description,onChange:a=>s("description")(a.target.value),placeholder:"Project overview…"})})]})]}),n.jsxs("div",{className:"hwl-drawer-section",children:[n.jsx("h4",{children:"Info cards"}),n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Phone",children:n.jsx(ae,{value:i.phone,onChange:s("phone")})}),n.jsx(X,{label:"Micro-market",children:n.jsx(ae,{value:i.microMarket,onChange:s("microMarket"),placeholder:"Golf Course Ext."})}),n.jsx(X,{label:"Monthly rental",children:n.jsx(ae,{value:i.monthlyRental,onChange:s("monthlyRental")})}),n.jsx(X,{label:"ROI",children:n.jsx(ae,{value:i.roi,onChange:s("roi")})}),n.jsx(X,{label:"Active buyers",children:n.jsx("input",{className:"hwa-input no-icon",type:"number",min:"0",value:i.activeBuyers,onChange:a=>s("activeBuyers")(parseInt(a.target.value)||0)})}),n.jsx(X,{label:"Demand text",full:!0,children:n.jsx(ae,{value:i.demandText,onChange:s("demandText")})})]})]})]})})]})}const Cb={image:"",title:"",link:"",developer:""},zo={hero:{tab:"Hero banners",one:"hero banner",purpose:"hero",aspect:"3 / 1",thumb:"banner",where:"The big rotating banner at the very top of the homepage."},slider:{tab:"Image slider",one:"slider image",purpose:"slider",aspect:"1373 / 240",thumb:"banner",where:"The wide rotating strip just below the homepage search box."},small:{tab:"Side ads",one:"side ad",purpose:"sidead",aspect:"9 / 20",thumb:"tall",fit:"cover",narrow:!0,where:"The tall rotating promo beside the Trending, SCO and Commercial listings."}};function Df(e=[]){return[{group:"Properties",items:[...e].sort((t,r)=>t.title.localeCompare(r.title)).map(t=>[`/property/${t.id}`,t.title])},{group:"Listings",items:[["/search","All properties"],["/search?category=trending","Trending"],["/search?category=upcoming","Upcoming"],["/search?category=newlaunch","New Launch"],["/search?category=commercial","Commercial"],["/search?category=sco","SCO"],["/search?category=branded","Branded residences"],["/search?category=luxury","Luxury projects"],["/property-snaps","Property Snaps"]]},{group:"Locations",items:$n("Gurugram").map(t=>[`/search?location=${t.slug}`,`${t.name}, Gurugram`])},{group:"Budget",items:Gl.map(t=>[`/search?budget=${t.value}`,t.label])},{group:"Pages",items:[["/about","About us"],["/contact","Contact"],["/blog","Blog"]]}]}const Io="__custom__";function Ff({value:e,onChange:t,properties:r}){var d;const i=Df(r),s=i.some(h=>h.items.some(([u])=>u===e)),[a,o]=j.useState(!!e&&e!=="#"&&!s),l=!e||e==="#"?"":e,c=(d=i.flatMap(h=>h.items).find(([h])=>h===l))==null?void 0:d[1];return n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsxs("select",{className:"hwa-input no-icon",value:a?Io:l,onChange:h=>{if(h.target.value===Io){o(!0);return}o(!1),t(h.target.value)},children:[n.jsx("option",{value:"",children:"Nothing — not clickable"}),i.map(h=>h.items.length>0&&n.jsx("optgroup",{label:h.group,children:h.items.map(([u,p])=>n.jsx("option",{value:u,children:p},u))},h.group)),n.jsx("option",{value:Io,children:"Other page or website…"})]}),a&&n.jsx("input",{className:"hwa-input no-icon",value:l,onChange:h=>t(h.target.value),placeholder:"/search?q=verano  or  https://example.com",autoFocus:!0}),l&&n.jsxs("span",{className:"hwa-hint",style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:["Opens: ",n.jsx("b",{style:{color:"#3a3627"},children:c||l}),n.jsxs("a",{href:l,target:"_blank",rel:"noreferrer",className:"hwd-link",children:["Test link ",n.jsx(M.external,{})]})]})]})}function Eb({banners:e,run:t,properties:r=[]}){var p;const[i,s]=j.useState("hero"),a=zo[i],o=sr({empty:Cb,run:t,create:x=>$.post(`/banners/${i}`,x),update:(x,v)=>$.put(`/banners/${x.type||i}/${x.id}`,v),remove:x=>$.delete(`/banners/${x.type||i}/${x.id}`),validate:x=>{Me(x.image,"upload an image"),Me(x.title,"enter a title")},labels:{created:"Banner added",updated:"Banner updated",deleted:"Banner deleted"}}),{f:l,set:c}=o,d=e[i]||[],h=Object.keys(zo).reduce((x,v)=>{var A;return x+(((A=e[v])==null?void 0:A.length)||0)},0),u=x=>{if(!x||x==="#")return n.jsx("span",{className:"muted",children:"Not clickable"});const v=Df(r).flatMap(A=>A.items).find(([A])=>A===x);return n.jsxs("span",{className:"hwl-ellipsis",title:x,children:[n.jsx("b",{children:v?v[1]:x}),v&&n.jsxs(n.Fragment,{children:[n.jsx("br",{}),n.jsx("span",{className:"muted",children:x})]})]})};return n.jsxs(n.Fragment,{children:[n.jsx(ir,{title:"Banners",count:h,sub:a.where,children:n.jsxs("button",{className:"hwd-btn gold",onClick:()=>o.openNew(),children:[n.jsx(M.plus,{})," Add ",a.one]})}),n.jsx("div",{className:"hwd-seg",style:{margin:"0 0 14px"},children:Object.entries(zo).map(([x,v])=>{var A;return n.jsxs("button",{className:i===x?"on":"",onClick:()=>s(x),children:[v.tab," (",((A=e[x])==null?void 0:A.length)||0,")"]},x)})}),n.jsx(Cn,{id:`banners-${i}`,items:d,main:{aspect:a.thumb,thumb:x=>x.image,title:x=>x.title,sub:x=>x.developer||a.tab},badges:x=>[{text:x.link&&x.link!=="#"?"CLICKABLE":"NO LINK",tone:x.link&&x.link!=="#"?"green":"grey"}],columns:[{label:"Opens when clicked",render:x=>u(x.link)}],actions:x=>[{label:"Edit",icon:M.edit,onClick:o.openEdit,primary:!0},x.link&&x.link!=="#"&&{label:"Open",icon:M.external,href:x.link},{label:"Delete",icon:M.trash,onClick:o.del,danger:!0}],searchText:x=>`${x.title} ${x.developer} ${x.link}`,sorts:[{value:"site",label:"Website order"},{value:"az",label:"Title A–Z",fn:qa("title")}],empty:i==="hero"?"No hero banners yet.":`No ${a.tab.toLowerCase()} yet — the homepage shows its built-in images until you add one.`,onEmptyAdd:()=>o.openNew(),defaultView:"table"}),n.jsx(rr,{open:o.open,onClose:o.close,title:`${o.editing?"Edit":"Add"} ${a.one}`,sub:a.where,footer:n.jsx(ar,{ed:o,saveLabel:`Add ${a.one}`}),children:n.jsxs("form",{id:"hwl-form",onSubmit:o.save,children:[n.jsx(X,{label:"Image *",children:n.jsx("div",{style:a.narrow?{maxWidth:170}:void 0,children:n.jsx(kt,{value:l.image,onChange:c("image"),purpose:a.purpose,aspect:a.aspect,fit:a.fit,maxSide:a.narrow?1800:2200},i)})}),n.jsx(X,{label:"Title *",hint:"Used as the image description (and for your reference)",children:n.jsx(ae,{value:l.title,onChange:c("title"),placeholder:"e.g. Godrej Verano — Sector 63A"})}),i==="hero"&&n.jsx(X,{label:"Developer",children:n.jsx(ae,{value:l.developer,onChange:c("developer"),placeholder:"e.g. GODREJ PROPERTIES"})}),n.jsx(X,{label:"Opens when clicked",hint:"Pick a property, listing, location or budget — or any other page / website",children:n.jsx(Ff,{value:l.link,onChange:c("link"),properties:r},((p=o.editing)==null?void 0:p.id)||"new")})]})})]})}const Rb={name:"",image:"",count:""};function Pb({locations:e,run:t}){const r=sr({empty:Rb,run:t,create:a=>$.post("/locations",a),update:(a,o)=>$.put(`/locations/${a.id}`,o),remove:a=>$.delete(`/locations/${a.id}`),validate:a=>{Me(a.name,"enter the location name"),Me(a.image,"upload an image")},labels:{created:"Location added",updated:"Location updated",deleted:"Location deleted"}}),{f:i,set:s}=r;return n.jsxs(n.Fragment,{children:[n.jsx(ir,{title:"Prime Locations",count:e.length,sub:"The “Gurugram’s Prime Locations” cards on the homepage. Clicking one opens properties in that area.",children:n.jsxs("button",{className:"hwd-btn gold",onClick:()=>r.openNew(),children:[n.jsx(M.plus,{})," Add location"]})}),n.jsx(Cn,{id:"locations",items:e,main:{aspect:"wide",thumb:a=>a.image,title:a=>a.name,sub:a=>a.count},columns:[{label:"Opens",render:a=>n.jsxs("a",{className:"muted hwl-ellipsis",href:`/search?location=${encodeURIComponent(a.name)}`,target:"_blank",rel:"noreferrer",children:["/search?location=",a.name]}),hideSm:!0}],actions:()=>[{label:"Edit",icon:M.edit,onClick:r.openEdit,primary:!0},{label:"Delete",icon:M.trash,onClick:r.del,danger:!0}],searchText:a=>`${a.name} ${a.count}`,sorts:[{value:"site",label:"Website order"},{value:"az",label:"Name A–Z",fn:qa("name")}],empty:"No locations yet.",onEmptyAdd:()=>r.openNew(),defaultView:"grid"}),n.jsx(rr,{open:r.open,onClose:r.close,title:r.editing?"Edit location":"Add a location",footer:n.jsx(ar,{ed:r,saveLabel:"Add location"}),children:n.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[n.jsx(X,{label:"Image *",children:n.jsx(kt,{value:i.image,onChange:s("image"),purpose:"location",aspect:"4 / 3"})}),n.jsx(X,{label:"Location name *",hint:"Use the locality name, e.g. Golf Course Road — the card links to its properties",children:n.jsx(ae,{value:i.name,onChange:s("name"),placeholder:"e.g. Golf Course Road"})}),n.jsx(X,{label:"Count text",hint:"Shown under the name",children:n.jsx(ae,{value:i.count,onChange:s("count"),placeholder:"e.g. 142 Projects"})})]})})]})}const Tb={title:"",price:"",location:"",image:"",badge:""};function Ob({offers:e,run:t}){const r=sr({empty:Tb,run:t,create:a=>$.post("/offers",a),update:(a,o)=>$.put(`/offers/${a.id}`,o),remove:a=>$.delete(`/offers/${a.id}`),validate:a=>{Me(a.title,"enter the project name"),Me(a.image,"upload an image")},labels:{created:"Offer added",updated:"Offer updated",deleted:"Offer deleted"}}),{f:i,set:s}=r;return n.jsxs(n.Fragment,{children:[n.jsx(ir,{title:"Festival Offers",count:e.length,sub:"Deals shown in the “Best Festival Offer” section on the homepage.",children:n.jsxs("button",{className:"hwd-btn gold",onClick:()=>r.openNew(),children:[n.jsx(M.plus,{})," Add offer"]})}),n.jsx(Cn,{id:"offers",items:e,main:{aspect:"wide",thumb:a=>a.image,title:a=>a.title,sub:a=>a.location},badges:a=>[a.badge&&{text:a.badge,tone:"gold"}],columns:[{label:"Price",render:a=>n.jsx("span",{className:"gold",children:a.price})},{label:"Location",render:a=>n.jsx("span",{className:"muted hwl-ellipsis",children:a.location}),hideSm:!0,hideGrid:!0}],actions:()=>[{label:"Edit",icon:M.edit,onClick:r.openEdit,primary:!0},{label:"Delete",icon:M.trash,onClick:r.del,danger:!0}],searchText:a=>`${a.title} ${a.location} ${a.badge} ${a.price}`,sorts:[{value:"site",label:"Website order"},{value:"az",label:"Name A–Z",fn:qa("title")}],empty:"No offers yet.",onEmptyAdd:()=>r.openNew(),defaultView:"grid"}),n.jsx(rr,{open:r.open,onClose:r.close,title:r.editing?"Edit offer":"Add an offer",footer:n.jsx(ar,{ed:r,saveLabel:"Add offer"}),children:n.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[n.jsx(X,{label:"Image *",children:n.jsx(kt,{value:i.image,onChange:s("image"),purpose:"offer",aspect:"3 / 2"})}),n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Project *",full:!0,children:n.jsx(ae,{value:i.title,onChange:s("title"),placeholder:"e.g. BPTP DownTown 66"})}),n.jsx(X,{label:"Price",children:n.jsx(ae,{value:i.price,onChange:s("price"),placeholder:"₹5.20 Cr"})}),n.jsx(X,{label:"Badge",children:n.jsx(ae,{value:i.badge,onChange:s("badge"),placeholder:"NAVRATRI SPECIAL"})}),n.jsx(X,{label:"Location",full:!0,children:n.jsx(ae,{value:i.location,onChange:s("location"),placeholder:"Sector 66, Gurugram"})})]})]})})]})}const Lb={title:"",image:"",price:"",location:"",link:"",badge:"Founder Choice"};function Mb({items:e,run:t,properties:r=[]}){var u;const i=sr({empty:Lb,run:t,create:p=>$.post("/recommended",p),update:(p,x)=>$.put(`/recommended/${p.id}`,x),remove:p=>$.delete(`/recommended/${p.id}`),validate:p=>{Me(p.title,"enter the name"),Me(p.image,"upload an image")},labels:{created:"Added to Recommended",updated:"Recommended card updated",deleted:"Removed from Recommended"}}),{f:s,set:a,setF:o}=i,[l,c]=j.useState(0),d=(p,x)=>{const v=[...e],A=v.findIndex(m=>m.id===p.id),E=A+x;E<0||E>=v.length||([v[A],v[E]]=[v[E],v[A]],t(()=>Promise.all(v.map((m,f)=>m.order===f?null:$.put(`/recommended/${m.id}`,{order:f}))),"Order updated"))},h=p=>{const x=r.find(v=>v.id===p);x&&(o(v=>({...v,title:x.title,image:x.image||v.image,price:x.price||x.priceRange||"",location:x.location||"",link:`/property/${x.id}`})),c(v=>v+1))};return n.jsxs(n.Fragment,{children:[n.jsx(ir,{title:"Recommended",count:e.length,sub:"The “HomWisor Recommended” cards on the homepage. The first 4 are shown, in this order — use ↑ ↓ to reorder.",children:n.jsxs("button",{className:"hwd-btn gold",onClick:()=>i.openNew(),children:[n.jsx(M.plus,{})," Add recommended"]})}),n.jsx(Cn,{id:"recommended",items:e,main:{aspect:"square",thumb:p=>p.image,title:p=>p.title,sub:p=>p.location},badges:p=>{const x=e.findIndex(v=>v.id===p.id);return[{text:x<4?`#${x+1} ON HOMEPAGE`:"HIDDEN (after 4th)",tone:x<4?"dark":"grey"},p.badge&&{text:p.badge.toUpperCase(),tone:"gold"}]},columns:[{label:"Price",render:p=>n.jsx("span",{className:"gold",children:p.price||"—"})},{label:"Opens",render:p=>n.jsx("span",{className:"muted hwl-ellipsis",title:p.link,children:p.link||"Not clickable"}),hideSm:!0}],actions:p=>{const x=e.findIndex(v=>v.id===p.id);return[{label:"Edit",icon:M.edit,onClick:i.openEdit,primary:!0},x>0&&{label:"Move up",icon:()=>n.jsx("span",{style:{fontWeight:900},children:"↑"}),onClick:()=>d(p,-1)},x<e.length-1&&{label:"Move down",icon:()=>n.jsx("span",{style:{fontWeight:900},children:"↓"}),onClick:()=>d(p,1)},{label:"Delete",icon:M.trash,onClick:i.del,danger:!0}]},searchText:p=>`${p.title} ${p.location} ${p.price}`,sorts:[{value:"site",label:"Homepage order"}],empty:"No recommended cards yet — the homepage section is hidden until you add one.",onEmptyAdd:()=>i.openNew(),defaultView:"table"}),n.jsx(rr,{open:i.open,onClose:i.close,title:i.editing?"Edit recommended card":"Add recommended card",sub:"Shown in the “HomWisor Recommended” section on the homepage.",footer:n.jsx(ar,{ed:i,saveLabel:"Add to Recommended"}),children:n.jsxs("form",{id:"hwl-form",onSubmit:i.save,children:[!i.editing&&r.length>0&&n.jsx(X,{label:"Fill from a property (optional)",hint:"Copies the name, photo, price, location and link — you can still change anything",children:n.jsxs("select",{className:"hwa-input no-icon",defaultValue:"",onChange:p=>h(p.target.value),children:[n.jsx("option",{value:"",children:"Choose a property…"}),[...r].sort((p,x)=>p.title.localeCompare(x.title)).map(p=>n.jsx("option",{value:p.id,children:p.title},p.id))]})}),n.jsx(X,{label:"Image *",children:n.jsx("div",{style:{maxWidth:300},children:n.jsx(kt,{value:s.image,onChange:a("image"),purpose:"recommended",aspect:"46 / 45"})})}),n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Name *",full:!0,children:n.jsx(ae,{value:s.title,onChange:a("title"),placeholder:"e.g. M3M Brabus Residences"})}),n.jsx(X,{label:"Price",children:n.jsx(ae,{value:s.price,onChange:a("price"),placeholder:"e.g. ₹20.00 Cr"})}),n.jsx(X,{label:"Badge",hint:"Pill on the top-left of the card",children:n.jsx(ae,{value:s.badge,onChange:a("badge"),placeholder:"Founder Choice"})}),n.jsx(X,{label:"Location",full:!0,children:n.jsx(ae,{value:s.location,onChange:a("location"),placeholder:"e.g. Sector 58, Golf Course Extension Road, Gurugram"})})]}),n.jsx(X,{label:"Opens when clicked",children:n.jsx(Ff,{value:s.link,onChange:a("link"),properties:r},`${((u=i.editing)==null?void 0:u.id)||"new"}-${l}`)})]})})]})}const Xs=(e="")=>String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,90),Kl=()=>new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10),Pr={heading:"",text:"",image:""},zb={title:"",slug:"",category:Wr[0],excerpt:"",image:"",content:[{...Pr}],author:"HomWisor Insights",tags:"",status:"published",featured:!1,publishedAt:"",seoTitle:"",seoDescription:""},Yl=e=>e.status==="published"&&new Date(e.publishedAt)<=new Date,Bo=e=>e.status==="draft"?"Draft":Yl(e)?"Published":"Scheduled";function Ib({rows:e,onChange:t}){const r=(a,o,l)=>t(e.map((c,d)=>d===a?{...c,[o]:l}:c)),i=(a,o)=>{const l=a+o;if(l<0||l>=e.length)return;const c=[...e];[c[a],c[l]]=[c[l],c[a]],t(c)},s=a=>t(e.length>1?e.filter((o,l)=>l!==a):[{...Pr}]);return n.jsxs("div",{className:"hwb-sections",children:[e.map((a,o)=>n.jsxs("div",{className:"hwb-section",children:[n.jsxs("div",{className:"hwb-section-head",children:[n.jsx("span",{className:"hwb-no",children:o+1}),n.jsx("input",{className:"hwa-input no-icon",value:a.heading,onChange:l=>r(o,"heading",l.target.value),placeholder:"Section heading, e.g. Why connectivity matters"}),n.jsx("button",{type:"button",className:"hwb-icon",onClick:()=>i(o,-1),disabled:o===0,"aria-label":"Move up",children:"↑"}),n.jsx("button",{type:"button",className:"hwb-icon",onClick:()=>i(o,1),disabled:o===e.length-1,"aria-label":"Move down",children:"↓"}),n.jsx("button",{type:"button",className:"hwb-icon danger",onClick:()=>s(o),"aria-label":"Remove section",children:"✕"})]}),n.jsx("textarea",{className:"hwa-input no-icon hwb-text",rows:6,value:a.text,onChange:l=>r(o,"text",l.target.value),placeholder:"Write this part of the article. Leave an empty line between paragraphs."}),a.image||a.withImage?n.jsxs("div",{className:"hwb-secimg",children:[n.jsx(kt,{value:a.image,onChange:l=>t(e.map((c,d)=>d===o?{...c,image:l,withImage:!!l}:c)),purpose:"blog",aspect:"16 / 9"}),!a.image&&n.jsx("button",{type:"button",className:"hwb-addimg",onClick:()=>r(o,"withImage",!1),children:"Cancel photo"})]}):n.jsx("button",{type:"button",className:"hwb-addimg",onClick:()=>r(o,"withImage",!0),children:"+ Add a photo to this section"})]},o)),n.jsx("button",{type:"button",className:"hwb-add",onClick:()=>t([...e,{...Pr}]),children:"+ Add section"})]})}function Bb({blogs:e,run:t}){const r=sr({empty:zb,run:t,create:w=>$.post("/blogs",pu(w)),update:(w,k)=>$.put(`/blogs/${w.id}`,pu(k)),remove:w=>$.delete(`/blogs/${w.id}`),validate:w=>{Me(w.title.trim(),"enter a title"),Me(w.image,"upload a cover photo"),Me(w.excerpt.trim(),"write a short summary"),Me(w.content.some(k=>k.text.trim()),"write the article text")},labels:{created:"Article saved",updated:"Article updated",deleted:"Article deleted"}}),{f:i,set:s,setF:a}=r,[o,l]=j.useState(""),[c,d]=j.useState(!1),[h,u]=j.useState(!1),p=[...new Set([...Wr,...e.map(w=>w.category).filter(Boolean)])],x=async w=>{var k;l(w.id);try{const{data:O}=await $.get(`/blogs/admin/${w.id}`);r.openEdit({...O,tags:(O.tags||[]).join(", "),publishedAt:O.publishedAt?String(O.publishedAt).slice(0,10):Kl(),content:(k=O.content)!=null&&k.length?O.content.map(g=>({...Pr,...g})):[{...Pr}]}),d(!0),u(!1)}catch(O){t(()=>{throw O})}l("")},v=()=>{r.openNew({publishedAt:Kl(),content:[{...Pr}]}),d(!1),u(!1)},A=w=>a(k=>({...k,title:w,slug:c?k.slug:Xs(w)})),E=w=>t(()=>$.put(`/blogs/${w.id}`,{featured:!w.featured}),w.featured?"Removed from featured":"Set as the featured article"),m=w=>t(()=>$.put(`/blogs/${w.id}`,{status:w.status==="draft"?"published":"draft"}),w.status==="draft"?"Article published":"Moved to drafts"),f=e.filter(Yl).length,y=i.content.map(w=>w.text).join(" ").split(/\s+/).filter(Boolean).length;return n.jsxs(n.Fragment,{children:[n.jsxs(ir,{title:"Blog",count:e.length,sub:`Articles on the website’s Blog page — ${f} live, ${e.length-f} draft or scheduled. The newest featured article is shown big at the top.`,children:[n.jsxs("a",{className:"hwd-btn",href:"/blog",target:"_blank",rel:"noreferrer",children:[n.jsx(M.external,{})," View blog"]}),n.jsxs("button",{className:"hwd-btn gold",onClick:v,children:[n.jsx(M.plus,{})," Write article"]})]}),n.jsx(Cn,{id:"blogs",items:e,main:{aspect:"wide",thumb:w=>w.image,title:w=>w.title,sub:w=>`${w.category} · ${w.author||"HomWisor"}`},badges:w=>[w.featured&&{text:"★ Featured",tone:"gold"},{text:Bo(w),tone:Bo(w)==="Published"?"green":Bo(w)==="Draft"?"grey":"dark"}],columns:[{label:"Date",render:w=>n.jsx("span",{className:"muted",children:Ki(w.publishedAt)})},{label:"Category",render:w=>n.jsx("span",{children:w.category}),hideSm:!0}],actions:w=>[{label:o===w.id?"Opening…":"Edit",icon:M.edit,onClick:x,primary:!0},Yl(w)&&{label:"View",icon:M.external,href:`/blog/${w.slug}`},{label:w.featured?"Unfeature":"Feature",icon:M.star,onClick:E},{label:w.status==="draft"?"Publish":"Unpublish",icon:M.eye,onClick:m},{label:"Delete",icon:M.trash,onClick:r.del,danger:!0}].filter(Boolean),searchText:w=>`${w.title} ${w.category} ${w.excerpt} ${(w.tags||[]).join(" ")}`,sorts:[{value:"new",label:"Newest first",fn:(w,k)=>String(k.publishedAt).localeCompare(String(w.publishedAt))},{value:"old",label:"Oldest first",fn:(w,k)=>String(w.publishedAt).localeCompare(String(k.publishedAt))},{value:"az",label:"Title A–Z",fn:(w,k)=>w.title.localeCompare(k.title)}],empty:"No articles yet.",onEmptyAdd:v,emptyAddLabel:"Write the first article",defaultView:"grid"}),n.jsx(rr,{wide:!0,open:r.open,onClose:r.close,title:r.editing?"Edit article":"Write an article",sub:`${y} words · about ${$l({excerpt:i.excerpt,content:i.content})} min read`,footer:n.jsx(ar,{ed:r,saveLabel:i.status==="draft"?"Save draft":"Publish article"}),children:n.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Title *",full:!0,children:n.jsx(ae,{value:i.title,onChange:A,placeholder:"e.g. Sector 49 Gurgaon: Prices & Metro Expansion"})}),n.jsx(X,{label:"Web address",full:!0,hint:`homwisor.com/blog/${i.slug||Xs(i.title)||"…"}`,children:n.jsx(ae,{value:i.slug,onChange:w=>{d(!0),s("slug")(Xs(w))},placeholder:"made from the title"})})]}),n.jsx(X,{label:"Cover photo *",children:n.jsx(kt,{value:i.image,onChange:s("image"),purpose:"blog",aspect:"16 / 9"})}),n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Category",children:h?n.jsxs("div",{className:"hwb-inline",children:[n.jsx(ae,{value:i.category,onChange:s("category"),placeholder:"New category name",autoFocus:!0}),n.jsx("button",{type:"button",className:"hwd-btn",onClick:()=>{u(!1),s("category")(p[0])},children:"Cancel"})]}):n.jsxs("select",{className:"hwa-input no-icon",value:i.category,onChange:w=>w.target.value==="__new"?(u(!0),s("category")("")):s("category")(w.target.value),children:[p.map(w=>n.jsx("option",{children:w},w)),n.jsx("option",{value:"__new",children:"+ New category…"})]})}),n.jsx(X,{label:"Author",children:n.jsx(ae,{value:i.author,onChange:s("author"),placeholder:"HomWisor Insights"})}),n.jsx(X,{label:"Status",children:n.jsx("div",{className:"hwb-seg",children:[["published","Published"],["draft","Draft"]].map(([w,k])=>n.jsx("button",{type:"button",className:i.status===w?"on":"",onClick:()=>s("status")(w),children:k},w))})}),n.jsx(X,{label:"Publish date",hint:"A future date schedules the article",children:n.jsx("input",{type:"date",className:"hwa-input no-icon",value:i.publishedAt,onChange:w=>s("publishedAt")(w.target.value)})}),n.jsx(X,{label:"Featured",full:!0,children:n.jsxs("label",{className:"hwb-check",children:[n.jsx("input",{type:"checkbox",checked:!!i.featured,onChange:w=>s("featured")(w.target.checked)})," Show as the big “Featured insight” at the top of the blog (replaces the current one)"]})}),n.jsx(X,{label:"Summary *",full:!0,hint:"1–2 sentences — shown on the article cards and as the intro",children:n.jsx("textarea",{className:"hwa-input no-icon hwb-text",rows:3,value:i.excerpt,onChange:w=>s("excerpt")(w.target.value),placeholder:"Explore connectivity, location advantages and…"})})]}),n.jsx(X,{label:"Article *",hint:"Split the article into sections, each with a heading. Leave an empty line between paragraphs.",children:n.jsx(Ib,{rows:i.content,onChange:s("content")})}),n.jsxs("details",{className:"hwb-more",children:[n.jsx("summary",{children:"Tags & Google (SEO)"}),n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Tags",full:!0,hint:"Comma separated, e.g. Metro, Gurgaon, Investment",children:n.jsx(ae,{value:i.tags,onChange:s("tags")})}),n.jsx(X,{label:"Google title",full:!0,hint:`${(i.seoTitle||i.title).length}/60 — defaults to the title`,children:n.jsx(ae,{value:i.seoTitle,onChange:s("seoTitle"),placeholder:i.title})}),n.jsx(X,{label:"Google description",full:!0,hint:`${(i.seoDescription||i.excerpt).length}/160 — defaults to the summary`,children:n.jsx("textarea",{className:"hwa-input no-icon hwb-text",rows:2,value:i.seoDescription,onChange:w=>s("seoDescription")(w.target.value),placeholder:i.excerpt})})]})]})]})})]})}function pu(e){return{...e,title:e.title.trim(),category:(e.category||"").trim()||Wr[0],slug:e.slug||Xs(e.title),tags:String(e.tags||"").split(",").map(t=>t.trim()).filter(Boolean),content:e.content.map(t=>({heading:t.heading.trim(),text:t.text.trim(),image:(t.image||"").trim()})).filter(t=>t.heading||t.text||t.image),publishedAt:e.publishedAt?new Date(`${e.publishedAt}T${e.publishedAt===Kl()?new Date().toTimeString().slice(0,8):"06:00:00"}`).toISOString():new Date().toISOString()}}const Db=["Google","Facebook","Justdial","Website","Other"],mu=4,Xl=[["#F3E7C2","#5b4a16"],["#F59E0B","#ffffff"],["#10B981","#ffffff"],["#E9D5FF","#6B21A8"],["#DBEAFE","#1E40AF"],["#FECACA","#991B1B"],["#D6D3D1","#44403C"],["#0b0b0b","#E8C766"]],Fb={name:"",role:"",text:"",photo:"",rating:5,platform:"Google",verified:!0,active:!0,color:Xl[0][0],textColor:Xl[0][1]},Ql=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("").toUpperCase(),Do=600;function Wb({t:e,size:t=44}){return n.jsx("span",{className:"hwt-avatar",style:{width:t,height:t,background:e.color,color:e.textColor,fontSize:t*.36},children:e.photo?n.jsx("img",{src:e.photo,alt:""}):Ql(e.name)||"?"})}function Fo({value:e,onChange:t}){return n.jsx("div",{className:"hwt-stars",role:t?"radiogroup":void 0,children:[1,2,3,4,5].map(r=>t?n.jsx("button",{type:"button",className:r<=e?"on":"",onClick:()=>t(r),"aria-label":`${r} star${r>1?"s":""}`,children:"★"},r):n.jsx("span",{className:r<=e?"on":"",children:"★"},r))})}function Ub({items:e,run:t}){const r=sr({empty:Fb,run:t,create:h=>$.post("/testimonials",h),update:(h,u)=>$.put(`/testimonials/${h.id}`,u),remove:h=>$.delete(`/testimonials/${h.id}`),validate:h=>{if(Me(h.name.trim(),"enter the customer's name"),Me(h.text.trim(),"write the review"),h.text.length>Do)throw new Error(`Please keep the review under ${Do} characters`)},labels:{created:"Testimonial added",updated:"Testimonial updated",deleted:"Testimonial deleted"}}),{f:i,set:s,setF:a}=r,o=e.filter(h=>h.active!==!1),l=new Set(o.slice(0,mu).map(h=>h.id)),c=(h,u)=>{const p=[...e],x=p.findIndex(A=>A.id===h.id),v=x+u;v<0||v>=p.length||([p[x],p[v]]=[p[v],p[x]],t(()=>Promise.all(p.map((A,E)=>A.order===E?null:$.put(`/testimonials/${A.id}`,{order:E}))),"Order updated"))},d=h=>t(()=>$.put(`/testimonials/${h.id}`,{active:h.active===!1}),h.active===!1?"Shown on the website":"Hidden from the website");return n.jsxs(n.Fragment,{children:[n.jsx(ir,{title:"Testimonials",count:e.length,sub:`Customer reviews on the homepage and About page. The first ${mu} visible ones are shown, in this order — use ↑ ↓ to reorder.`,children:n.jsxs("button",{className:"hwd-btn gold",onClick:()=>r.openNew(),children:[n.jsx(M.plus,{})," Add testimonial"]})}),n.jsx(Cn,{id:"testimonials",items:e,main:{aspect:"square",thumb:h=>h.photo,overlay:h=>!h.photo&&n.jsx("span",{className:"hwt-thumb-initials",style:{background:h.color,color:h.textColor},children:h.initials||Ql(h.name)}),title:h=>h.name,sub:h=>h.role||`${h.platform||"Google"} review`},badges:h=>[h.active===!1?{text:"Hidden",tone:"grey"}:l.has(h.id)?{text:"On website",tone:"green"}:{text:"Not in top 4",tone:"dark"},h.verified!==!1&&{text:"Verified",tone:"gold"}],columns:[{label:"Rating",render:h=>n.jsx(Fo,{value:h.rating||5})},{label:"Review",render:h=>n.jsxs("span",{className:"muted hwt-clip",children:["“",h.text,"”"]}),hideSm:!0}],actions:h=>{const u=e.findIndex(p=>p.id===h.id);return[{label:"Edit",icon:M.edit,onClick:r.openEdit,primary:!0},u>0&&{label:"Move up",icon:()=>n.jsx("span",{style:{fontWeight:900},children:"↑"}),onClick:()=>c(h,-1)},u<e.length-1&&{label:"Move down",icon:()=>n.jsx("span",{style:{fontWeight:900},children:"↓"}),onClick:()=>c(h,1)},{label:h.active===!1?"Show":"Hide",icon:M.eye,onClick:d},{label:"Delete",icon:M.trash,onClick:r.del,danger:!0}].filter(Boolean)},searchText:h=>`${h.name} ${h.role} ${h.text} ${h.platform}`,sorts:[{value:"site",label:"Website order"},{value:"az",label:"Name A–Z",fn:(h,u)=>h.name.localeCompare(u.name)}],empty:"No testimonials yet — the website will hide this section until you add one.",onEmptyAdd:()=>r.openNew(),emptyAddLabel:"Add the first testimonial"}),n.jsx(rr,{open:r.open,onClose:r.close,title:r.editing?"Edit testimonial":"Add a testimonial",footer:n.jsx(ar,{ed:r,saveLabel:"Add testimonial"}),children:n.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[n.jsxs("div",{className:"hwt-preview",children:[n.jsxs("div",{className:"hwt-preview-top",children:[n.jsx("span",{className:"hwt-quote",style:{background:i.color,color:i.textColor},children:"“"}),i.platform!=="Other"&&n.jsx("span",{className:"hwt-platform",children:i.platform})]}),n.jsx(Fo,{value:i.rating}),n.jsxs("p",{children:["“",i.text||"The review will appear here…","”"]}),n.jsxs("div",{className:"hwt-preview-user",children:[n.jsx(Wb,{t:i}),n.jsxs("div",{children:[n.jsx("strong",{children:i.name||"Customer name"}),n.jsx("small",{children:i.role||(i.verified?"VERIFIED BUYER":"")})]})]})]}),n.jsxs("div",{className:"hwd-form-grid",children:[n.jsx(X,{label:"Customer name *",children:n.jsx(ae,{value:i.name,onChange:s("name"),placeholder:"e.g. Neha Gupta"})}),n.jsx(X,{label:"Line under the name",hint:"Optional — e.g. Bought a 3 BHK at DLF Privana",children:n.jsx(ae,{value:i.role,onChange:s("role"),placeholder:"Verified buyer"})}),n.jsx(X,{label:"Review *",full:!0,hint:`${i.text.length}/${Do} characters — about 150–250 reads best`,children:n.jsx("textarea",{className:"hwa-input no-icon hwt-textarea",rows:5,value:i.text,onChange:h=>s("text")(h.target.value),placeholder:"What did the customer say about HomWisor?"})}),n.jsx(X,{label:"Rating",children:n.jsx(Fo,{value:i.rating,onChange:s("rating")})}),n.jsx(X,{label:"Review from",children:n.jsx("select",{className:"hwa-input no-icon",value:i.platform,onChange:h=>s("platform")(h.target.value),children:Db.map(h=>n.jsx("option",{children:h},h))})}),n.jsx(X,{label:"Avatar colour",full:!0,hint:"Used when there's no photo, and for the quote mark",children:n.jsx("div",{className:"hwt-swatches",children:Xl.map(([h,u])=>n.jsx("button",{type:"button",className:i.color===h?"on":"",style:{background:h,color:u},onClick:()=>a(p=>({...p,color:h,textColor:u})),"aria-label":`Colour ${h}`,children:Ql(i.name)||"Aa"},h))})}),n.jsx(X,{label:"Customer photo",full:!0,hint:"Optional — a square photo replaces the initials",children:n.jsx("div",{style:{maxWidth:200},children:n.jsx(kt,{value:i.photo,onChange:s("photo"),purpose:"avatar",aspect:"1 / 1"})})}),n.jsxs(X,{label:"Options",full:!0,children:[n.jsxs("label",{className:"hwt-check",children:[n.jsx("input",{type:"checkbox",checked:!!i.verified,onChange:h=>s("verified")(h.target.checked)})," Show “Verified buyer” (when there's no line under the name)"]}),n.jsxs("label",{className:"hwt-check",children:[n.jsx("input",{type:"checkbox",checked:i.active!==!1,onChange:h=>s("active")(h.target.checked)})," Show on the website"]})]})]})]})})]})}const Tr=()=>new Date().toISOString().slice(0,10),Hb=(e,t)=>{var r,i;return((i=(r=e.response)==null?void 0:r.data)==null?void 0:i.error)||(e.response?t:e.message)||t};function $b({title:e,count:t,sub:r,children:i}){return n.jsxs("div",{className:"hwd-page-head",children:[n.jsxs("div",{children:[n.jsxs("h1",{children:[e,t!==void 0&&n.jsxs("span",{className:"count",children:["(",t,")"]})]}),r&&n.jsx("p",{children:r})]}),i]})}function Zl({icon:e=M.grid,children:t}){return n.jsxs("div",{className:"hwd-empty",children:[n.jsx(e,{}),n.jsx("div",{children:t})]})}const _b=[{group:"Main",items:[{id:"overview",label:"Overview",icon:M.grid},{id:"enquiries",label:"Enquiries",icon:M.chat,count:"enqs",hot:!0}]},{group:"Listings",items:[{id:"properties",label:"Properties",icon:M.building,count:"props"},{id:"snaps",label:"Property Snaps",icon:M.film,count:"snaps"}]},{group:"Homepage",items:[{id:"recommended",label:"Recommended",icon:M.star,count:"recs"},{id:"banners",label:"Banners",icon:M.image},{id:"locations",label:"Prime Locations",icon:M.pin},{id:"offers",label:"Festival Offers",icon:M.gift},{id:"testimonials",label:"Testimonials",icon:M.users,count:"testis"}]},{group:"Content",items:[{id:"blog",label:"Blog",icon:M.edit,count:"blogs"}]},{group:"Account",items:[{id:"admins",label:"Admins & Security",altLabel:"My Account",icon:M.shield}]}],Gb={overview:"Overview",enquiries:"Enquiries",properties:"Properties",snaps:"Property Snaps",recommended:"Recommended",banners:"Banners",locations:"Prime Locations",offers:"Festival Offers",blog:"Blog",testimonials:"Testimonials",admins:"Admins & Security"};function Vb({me:e,props:t,enqs:r,snaps:i,offers:s,locations:a,banners:o,recs:l,stats:c,isSuper:d,go:h,openProperties:u,reset:p}){var y;const x=new Date().getHours(),v=x<12?"Good morning":x<17?"Good afternoon":"Good evening",A=r.filter(w=>w.date===Tr()).length,E=Hr.map(w=>({...w,n:t.filter(k=>k.category===w.id).length})),m=Math.max(1,...E.map(w=>w.n)),f=((e==null?void 0:e.name)||"").split(" ")[0]||"there";return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"hwd-hero",children:[n.jsxs("div",{style:{position:"relative",zIndex:1},children:[n.jsx("div",{className:"hwd-hero-date",children:new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long"})}),n.jsxs("h1",{children:[v,", ",f]}),n.jsxs("p",{children:[A>0?`You have ${A} new enquir${A===1?"y":"ies"} today. `:"No new enquiries today yet. ","Everything you publish here goes live on HomWisor.com instantly."]})]}),n.jsxs("div",{className:"hwd-hero-actions",children:[n.jsxs("button",{className:"hwd-btn gold",onClick:()=>u("all",!0),children:[n.jsx(M.plus,{})," Add Property"]}),n.jsxs("a",{className:"hwd-btn",href:"/",target:"_blank",rel:"noreferrer",children:[n.jsx(M.external,{})," View Website"]})]})]}),n.jsxs("div",{className:"hwd-stats",children:[n.jsxs("button",{className:"hwd-stat",onClick:()=>h("properties"),children:[n.jsxs("div",{className:"hwd-stat-top",children:[n.jsx("span",{className:"hwd-stat-label",children:"Properties"}),n.jsx("span",{className:"hwd-stat-ic",children:n.jsx(M.building,{})})]}),n.jsx("div",{className:"hwd-stat-value",children:t.length}),n.jsxs("div",{className:"hwd-stat-sub",children:[n.jsx("span",{className:"hwd-dot"})," Live across ",E.filter(w=>w.n).length," sections"]})]}),n.jsxs("button",{className:"hwd-stat",onClick:()=>h("enquiries"),children:[n.jsxs("div",{className:"hwd-stat-top",children:[n.jsx("span",{className:"hwd-stat-label",children:"Enquiries"}),n.jsx("span",{className:"hwd-stat-ic",children:n.jsx(M.chat,{})})]}),n.jsx("div",{className:"hwd-stat-value",children:r.length}),n.jsx("div",{className:"hwd-stat-sub",children:A>0?n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"up",children:["+",A]})," today"]}):"No new leads today"})]}),n.jsxs("button",{className:"hwd-stat",onClick:()=>h("snaps"),children:[n.jsxs("div",{className:"hwd-stat-top",children:[n.jsx("span",{className:"hwd-stat-label",children:"Property Snaps"}),n.jsx("span",{className:"hwd-stat-ic",children:n.jsx(M.film,{})})]}),n.jsx("div",{className:"hwd-stat-value",children:i.length}),n.jsx("div",{className:"hwd-stat-sub",children:"Video reels on /property-snaps"})]}),n.jsxs("button",{className:"hwd-stat",onClick:()=>h("offers"),children:[n.jsxs("div",{className:"hwd-stat-top",children:[n.jsx("span",{className:"hwd-stat-label",children:"Festival Offers"}),n.jsx("span",{className:"hwd-stat-ic",children:n.jsx(M.gift,{})})]}),n.jsx("div",{className:"hwd-stat-value",children:s.length}),n.jsx("div",{className:"hwd-stat-sub",children:"Shown in “Best Festival Offer”"})]})]}),n.jsxs("div",{className:"hwd-row r-2-1",children:[n.jsxs("div",{className:"hwd-card",children:[n.jsxs("div",{className:"hwd-card-head",children:[n.jsxs("h3",{children:[n.jsx("span",{className:"ic",children:n.jsx(M.trend,{})})," Listings by section"]}),n.jsxs("button",{className:"hwd-link",onClick:()=>h("properties"),children:["Manage ",n.jsx(M.arrow,{})]})]}),n.jsx("div",{className:"hwd-bars",children:E.map(w=>n.jsxs("button",{className:"hwd-bar",onClick:()=>u(w.id),title:w.shows,children:[n.jsxs("span",{className:"hwd-bar-label",children:[w.icon," ",w.label]}),n.jsx("span",{className:"hwd-bar-track",children:n.jsx("span",{className:"hwd-bar-fill",style:{width:`${w.n/m*100}%`}})}),n.jsx("span",{className:"hwd-bar-num",children:w.n})]},w.id))})]}),n.jsxs("div",{className:"hwd-card",children:[n.jsx("div",{className:"hwd-card-head",children:n.jsxs("h3",{children:[n.jsx("span",{className:"ic",children:n.jsx(M.plus,{})})," Quick actions"]})}),n.jsxs("div",{className:"hwd-quick",children:[n.jsxs("button",{className:"hwd-q",onClick:()=>u("all",!0),children:[n.jsx("span",{className:"ic",children:n.jsx(M.building,{})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Add property"}),n.jsx("span",{children:"Step-by-step form"})]})]}),n.jsxs("button",{className:"hwd-q",onClick:()=>h("snaps"),children:[n.jsx("span",{className:"ic",children:n.jsx(M.film,{})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Add snap"}),n.jsx("span",{children:"Video reel"})]})]}),n.jsxs("button",{className:"hwd-q",onClick:()=>h("banners"),children:[n.jsx("span",{className:"ic",children:n.jsx(M.image,{})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Add banner"}),n.jsx("span",{children:"Homepage slider"})]})]}),n.jsxs("button",{className:"hwd-q",onClick:()=>h("offers"),children:[n.jsx("span",{className:"ic",children:n.jsx(M.gift,{})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Add offer"}),n.jsx("span",{children:"Festival deal"})]})]})]}),d&&n.jsxs("button",{className:"hwd-btn danger",style:{width:"100%",marginTop:12},onClick:p,children:[n.jsx(M.refresh,{})," Reset all data to demo"]})]})]}),n.jsxs("div",{className:"hwd-row r-1-1",children:[n.jsxs("div",{className:"hwd-card",children:[n.jsxs("div",{className:"hwd-card-head",children:[n.jsxs("h3",{children:[n.jsx("span",{className:"ic",children:n.jsx(M.chat,{})})," Latest enquiries"]}),n.jsxs("button",{className:"hwd-link",onClick:()=>h("enquiries"),children:["View all ",n.jsx(M.arrow,{})]})]}),r.length===0?n.jsx(Zl,{icon:M.chat,children:"No enquiries yet. Leads from property pages appear here."}):n.jsx("div",{className:"hwd-list",children:r.slice(0,5).map(w=>n.jsxs("div",{className:"hwd-li",children:[n.jsx("span",{className:"hwd-initial",children:(w.name||"?").slice(0,1).toUpperCase()}),n.jsxs("div",{className:"hwd-li-body",children:[n.jsxs("strong",{children:[w.name||"Unknown"," ",w.date===Tr()&&n.jsx("span",{className:"hwd-new",style:{display:"inline",marginLeft:6},children:"NEW"})]}),n.jsxs("span",{children:[w.property||"—"," · ",w.date]})]}),w.phone&&n.jsx("a",{className:"hwd-round",href:`tel:${w.phone}`,title:"Call",children:n.jsx(M.phone,{})}),w.phone&&n.jsx("a",{className:"hwd-round wa",href:`https://wa.me/91${w.phone.replace(/\D/g,"").slice(-10)}`,target:"_blank",rel:"noreferrer",title:"WhatsApp",children:n.jsx(M.whatsapp,{})})]},w.id))})]}),n.jsxs("div",{className:"hwd-card",children:[n.jsxs("div",{className:"hwd-card-head",children:[n.jsxs("h3",{children:[n.jsx("span",{className:"ic",children:n.jsx(M.building,{})})," Recently added"]}),n.jsxs("button",{className:"hwd-link",onClick:()=>h("properties"),children:["All properties ",n.jsx(M.arrow,{})]})]}),t.length===0?n.jsx(Zl,{icon:M.building,children:"No properties yet."}):n.jsx("div",{className:"hwd-list",children:t.slice(0,5).map(w=>{var k;return n.jsxs("div",{className:"hwd-li",children:[n.jsx("img",{className:"hwd-li-thumb",src:w.image,alt:""}),n.jsxs("div",{className:"hwd-li-body",children:[n.jsx("strong",{children:w.title}),n.jsxs("span",{children:[((k=Hr.find(O=>O.id===w.category))==null?void 0:k.label)||w.category," · ",(w.location||"").split(",").slice(0,2).join(",")]})]}),n.jsx("span",{className:"hwd-li-side",children:w.priceRange||w.price})]},w.id)})})]})]}),n.jsxs("div",{className:"hwd-card",style:{marginTop:16},children:[n.jsx("div",{className:"hwd-card-head",children:n.jsxs("h3",{children:[n.jsx("span",{className:"ic",children:n.jsx(M.image,{})})," Homepage content"]})}),n.jsxs("div",{className:"hwd-tiles",children:[n.jsxs("button",{className:"hwd-tile",onClick:()=>h("banners"),children:[n.jsx("b",{children:o.hero.length+(((y=o.slider)==null?void 0:y.length)||0)+o.small.length}),n.jsx("span",{children:"Banners"})]}),n.jsxs("button",{className:"hwd-tile",onClick:()=>h("locations"),children:[n.jsx("b",{children:a.length}),n.jsx("span",{children:"Prime locations"})]}),n.jsxs("button",{className:"hwd-tile",onClick:()=>h("offers"),children:[n.jsx("b",{children:s.length}),n.jsx("span",{children:"Festival offers"})]}),n.jsxs("div",{className:"hwd-tile",children:[n.jsx("b",{children:(c==null?void 0:c.totalBuilders)??"—"}),n.jsx("span",{children:"Developers"})]}),n.jsxs("button",{className:"hwd-tile",onClick:()=>h("recommended"),children:[n.jsx("b",{children:l.length}),n.jsx("span",{children:"Recommended"})]}),n.jsxs("button",{className:"hwd-tile",onClick:()=>h("snaps"),children:[n.jsx("b",{children:i.length}),n.jsx("span",{children:"Snaps"})]})]})]})]})}function qb({enqs:e,run:t}){const[r,i]=j.useState(""),[s,a]=j.useState(!1),o=e.filter(d=>(!s||d.date===Tr())&&(!r.trim()||`${d.name} ${d.phone} ${d.email} ${d.property} ${d.message}`.toLowerCase().includes(r.trim().toLowerCase()))),l=d=>{confirm(`Delete the enquiry from ${d.name||"this lead"}?`)&&t(()=>$.delete(`/enquiries/${d.id}`),"Enquiry deleted")},c=e.filter(d=>d.date===Tr()).length;return n.jsxs(n.Fragment,{children:[n.jsx($b,{title:"Enquiries",count:e.length,sub:"Leads submitted from property pages. Call or WhatsApp them quickly."}),n.jsxs("div",{className:"hwd-toolbar",children:[n.jsxs("div",{className:"hwd-search",children:[n.jsx(M.search,{}),n.jsx("input",{value:r,onChange:d=>i(d.target.value),placeholder:"Search name, phone, property…"})]}),n.jsxs("div",{className:"hwd-seg",style:{margin:0},children:[n.jsx("button",{className:s?"":"on",onClick:()=>a(!1),children:"All"}),n.jsxs("button",{className:s?"on":"",onClick:()=>a(!0),children:["Today (",c,")"]})]})]}),o.length===0?n.jsx("div",{className:"hwd-card",children:n.jsx(Zl,{icon:M.chat,children:e.length?"No enquiries match.":"No enquiries yet."})}):n.jsx("div",{className:"hwd-enq",children:o.map(d=>{const h=(d.phone||"").replace(/\D/g,"").slice(-10);return n.jsxs("div",{className:"hwd-e",children:[n.jsx("span",{className:"hwd-initial",children:(d.name||"?").slice(0,1).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsxs("div",{className:"hwd-e-top",children:[n.jsx("strong",{children:d.name||"Unknown"}),d.date===Tr()&&n.jsx("span",{className:"hwd-new",children:"NEW"}),n.jsx("span",{className:"hwd-e-date",children:d.date})]}),n.jsxs("div",{className:"hwd-e-contact",children:[d.phone&&n.jsxs("span",{children:["📞 ",d.phone]}),d.email&&n.jsxs("span",{children:["✉️ ",d.email]})]}),d.property&&n.jsxs("span",{className:"hwd-e-prop",children:[n.jsx(M.building,{})," ",d.property]}),d.message&&n.jsx("div",{className:"hwd-e-msg",children:d.message})]}),n.jsxs("div",{className:"hwd-e-actions",children:[d.phone&&n.jsxs("a",{className:"call",href:`tel:${d.phone}`,children:[n.jsx(M.phone,{})," Call"]}),h&&n.jsxs("a",{className:"wa",href:`https://wa.me/91${h}`,target:"_blank",rel:"noreferrer",children:[n.jsx(M.whatsapp,{})," WhatsApp"]}),n.jsx("button",{className:"del",onClick:()=>l(d),children:n.jsx(M.trash,{})})]})]},d.id)})})]})}function Kb(){const[e,t]=j.useState(null),[r,i]=j.useState([]),[s,a]=j.useState([]),[o,l]=j.useState({hero:[],slider:[],small:[]}),[c,d]=j.useState([]),[h,u]=j.useState([]),[p,x]=j.useState([]),[v,A]=j.useState([]),[E,m]=j.useState([]),[f,y]=j.useState([]),[w,k]=j.useState(!1),[O,g]=j.useState("overview"),[C,P]=j.useState({key:0,filter:"all",adding:!1}),[R,L]=j.useState(!1),[W,z]=j.useState(null),[Y,ee]=j.useState(Ks()),[N,_]=j.useState(Ey()),I=nr(),K=(N==null?void 0:N.role)==="superadmin",T=ne=>{Ry(ne),_(ne)};j.useEffect(()=>{if(!ka()){Ni(),I("/admin?session=expired",{replace:!0});return}$.get("/admin/me").then(we=>T(we.data.admin)).catch(()=>{}),D();const ne=setTimeout(()=>{Ni(),I("/admin?session=expired",{replace:!0})},Ks()),he=setInterval(()=>ee(Ks()),6e4);return()=>{clearTimeout(ne),clearInterval(he)}},[]),j.useEffect(()=>{if(!W)return;const ne=setTimeout(()=>z(null),3200);return()=>clearTimeout(ne)},[W]);const D=async()=>{try{const[ne,he,we,Oe,Ke,En,Zt,Ye,H,je]=await Promise.all([$.get("/admin/stats").catch(()=>({data:{}})),$.get("/properties"),$.get("/enquiries").catch(()=>({data:[]})),$.get("/banners"),$.get("/locations"),$.get("/offers"),$.get("/snaps"),$.get("/recommended").catch(()=>({data:[]})),$.get("/blogs/admin/all").catch(()=>({data:[]})),$.get("/testimonials/admin/all").catch(()=>({data:[]}))]);t(ne.data),i(he.data),a(we.data||[]),l(Oe.data),d(Ke.data),u(En.data),m(Zt.data||[]),y(Ye.data||[]),x(H.data||[]),A(je.data||[])}catch(ne){console.error(ne)}finally{k(!0)}},V=async(ne,he)=>{try{await ne(),z({msg:he}),await D()}catch(we){z({msg:Hb(we,"Something went wrong"),type:"error"})}},b=ne=>{g(ne),L(!1),window.scrollTo(0,0)},F=(ne="all",he=!1)=>{P({key:Date.now(),filter:ne,adding:he}),b("properties")},te=()=>{Ni(),I("/admin?session=loggedout",{replace:!0})},Te=()=>{confirm("Reset ALL website data to the demo content? Your properties, offers, banners and enquiries will be replaced.")&&V(()=>$.post("/admin/reset"),"Demo data restored")},Q={enqs:s.length,props:r.length,snaps:E.length,recs:f.length,blogs:p.length,testis:v.length},Be=Math.max(0,Math.round(Y/36e5)),St=j.useMemo(()=>s.filter(ne=>ne.date===Tr()).length,[s]);return n.jsxs("div",{className:`hwd${R?" open":""}`,children:[n.jsx("div",{className:"hwd-backdrop",onClick:()=>L(!1)}),n.jsxs("aside",{className:"hwd-side",children:[n.jsxs("div",{className:"hwd-side-top",children:[n.jsx("img",{src:Fr,alt:"HomWisor"}),n.jsx("button",{className:"hwd-side-close",onClick:()=>L(!1),"aria-label":"Close menu",children:n.jsx(M.x,{})})]}),n.jsx("nav",{className:"hwd-nav",children:_b.map(ne=>n.jsxs("div",{className:"hwd-nav-group",children:[n.jsx("div",{className:"hwd-nav-label",children:ne.group}),ne.items.map(he=>{const we=he.icon,Oe=he.count?Q[he.count]:null;return n.jsxs("button",{className:`hwd-nav-item${O===he.id?" active":""}`,onClick:()=>he.id==="properties"?F():b(he.id),children:[n.jsx(we,{})," ",!K&&he.altLabel?he.altLabel:he.label,Oe!==null&&Oe>0&&n.jsx("span",{className:`hwd-nav-count${he.hot&&St?" hot":""}`,children:he.hot&&St?`${St} new`:Oe})]},he.id)})]},ne.group))}),n.jsx("div",{className:"hwd-side-foot",children:N&&n.jsxs("div",{className:"hwd-user",children:[n.jsx("span",{className:"hwd-avatar",children:(N.name||N.email||"?").slice(0,1).toUpperCase()}),n.jsxs("div",{className:"hwd-user-meta",onClick:()=>b("admins"),title:"My account",children:[n.jsx("strong",{children:N.name}),n.jsx("span",{children:K?"Super Admin":"Admin"})]}),n.jsx("button",{className:"hwd-icon-btn",onClick:te,title:"Sign out","aria-label":"Sign out",children:n.jsx(M.logout,{})})]})})]}),n.jsxs("div",{className:"hwd-main",children:[n.jsxs("header",{className:"hwd-top",children:[n.jsx("button",{className:"hwd-btn hwd-burger",onClick:()=>L(!0),"aria-label":"Open menu",style:{width:38,padding:0},children:n.jsx(M.menu,{})}),n.jsxs("div",{className:"hwd-crumbs",children:[n.jsx("span",{children:"Admin"}),n.jsx("span",{children:"›"}),n.jsx("strong",{children:Gb[O]})]}),n.jsxs("div",{className:"hwd-top-right",children:[n.jsxs("span",{className:"hwd-chip session",title:"You will be signed out automatically when the session ends",children:[n.jsx(M.clock,{})," Session: ",Be,"h left"]}),n.jsxs("a",{className:"hwd-btn",href:"/",target:"_blank",rel:"noreferrer",children:[n.jsx(M.external,{}),n.jsx("span",{children:"View website"})]}),n.jsxs("button",{className:"hwd-btn gold",onClick:()=>F("all",!0),children:[n.jsx(M.plus,{}),n.jsx("span",{children:"Add property"})]})]})]}),n.jsx("main",{className:"hwd-content",children:!w&&O==="overview"?n.jsxs("div",{className:"hwd-card",style:{display:"grid",placeItems:"center",gap:12,padding:60,color:"#6b7280"},children:[n.jsx(ls,{})," Loading dashboard… (the server may take up to a minute to wake up)"]}):n.jsxs(n.Fragment,{children:[O==="overview"&&n.jsx(Vb,{me:N,recs:f,props:r,enqs:s,snaps:E,offers:h,locations:c,banners:o,stats:e,isSuper:K,go:b,openProperties:F,reset:Te}),O==="properties"&&n.jsx(jb,{properties:r,loaded:w,onChange:D,initialFilter:C.filter,startAdding:C.adding},C.key),O==="snaps"&&n.jsx(Sb,{snaps:E,run:V}),O==="banners"&&n.jsx(Eb,{banners:o,run:V,properties:r}),O==="locations"&&n.jsx(Pb,{locations:c,run:V}),O==="offers"&&n.jsx(Ob,{offers:h,run:V}),O==="recommended"&&n.jsx(Mb,{items:f,run:V,properties:r}),O==="blog"&&n.jsx(Bb,{blogs:p,run:V}),O==="testimonials"&&n.jsx(Ub,{items:v,run:V}),O==="enquiries"&&n.jsx(qb,{enqs:s,run:V}),O==="admins"&&n.jsx(ab,{me:N,onMeChange:T})]})})]}),W&&n.jsxs("div",{className:`hwd-toast${W.type==="error"?" error":""}`,role:"status",children:[W.type==="error"?n.jsx(M.alert,{}):n.jsx(M.check,{})," ",W.msg]}),(N==null?void 0:N.mustChangePassword)&&n.jsx("div",{className:"hwa hwa-overlay",children:n.jsxs("div",{className:"hwa-modal",children:[n.jsx("img",{src:Fr,alt:"HomWisor",style:{width:130,marginBottom:16}}),n.jsx("h3",{children:"Set a new password"}),n.jsx("p",{children:"You are signed in with a default password. Choose a new one to continue — it must be at least 8 characters with letters and numbers."}),n.jsx(Rf,{admin:N,onChanged:ne=>{T(ne),D()},submitLabel:"Save & Continue"}),n.jsx("button",{onClick:te,style:{marginTop:12,width:"100%",background:"none",border:"none",color:"#a39e92",fontSize:13,cursor:"pointer"},children:"Sign out instead"})]})})]})}const Tn="#D4AF37",di="#9A7418",fu="#F7F5EF";function Yb(){const[e,t]=Zc(),r=e.get("category")||"All",i=u=>t(u==="All"?{}:{category:u},{replace:!0}),[s,a]=j.useState([]),[o,l]=j.useState("loading");j.useEffect(()=>{let u=!0;return $.get("/blogs").then(p=>{u&&(a(p.data||[]),l("ok"))}).catch(()=>u&&l("error")),()=>{u=!1}},[]),j.useEffect(()=>{document.title="Real Estate Insights | HomWisor Blog"},[]);const c=j.useMemo(()=>{const u=[...new Set(s.map(p=>p.category).filter(Boolean))];return["All",...Wr.filter(p=>u.includes(p)),...u.filter(p=>!Wr.includes(p))]},[s]),d=s.find(u=>u.featured)||s[0],h=r==="All"?s:s.filter(u=>u.category===r);return n.jsxs("div",{className:"blog-page",children:[n.jsx(Mt,{}),n.jsxs("section",{className:"blog-hero",children:[n.jsx("div",{className:"blog-hero-overlay"}),n.jsxs("div",{className:"blog-container blog-hero-inner",children:[n.jsx("div",{className:"blog-eyebrow",children:"HOMWISOR INSIGHTS"}),n.jsxs("h1",{children:["Real Estate ",n.jsx("span",{children:"Insights."})]}),n.jsx("p",{children:"Stay informed with property news, market insights, investment ideas and practical guides for Gurgaon and Delhi NCR."})]})]}),n.jsxs("main",{children:[n.jsx("section",{className:"blog-section blog-featured",children:n.jsxs("div",{className:"blog-container",children:[n.jsxs("div",{className:"blog-section-head",children:[n.jsxs("div",{children:[n.jsx("div",{className:"blog-eyebrow dark",children:"FEATURED INSIGHT"}),n.jsxs("h2",{children:["What’s happening in ",n.jsx("span",{children:"NCR real estate."})]})]}),n.jsxs("a",{href:"#all-articles",className:"blog-view-link",children:["View All Articles ",n.jsx("span",{children:"↗"})]})]}),o==="loading"&&n.jsxs("div",{className:"blog-state",children:[n.jsx("span",{className:"blog-spin"})," Loading articles…"]}),o==="error"&&n.jsx("div",{className:"blog-state",children:"Articles could not be loaded right now. Please refresh the page."}),o==="ok"&&!d&&n.jsx("div",{className:"blog-state",children:"New articles are coming soon."}),d&&n.jsxs("article",{className:"featured-card",children:[n.jsxs(q,{to:`/blog/${d.slug}`,className:"featured-image",children:[n.jsx("img",{src:d.image,alt:d.title}),n.jsx("span",{children:d.category})]}),n.jsxs("div",{className:"featured-content",children:[n.jsx("small",{children:Ki(d.publishedAt)}),n.jsx("h3",{children:d.title}),n.jsx("p",{children:d.excerpt}),n.jsxs(q,{to:`/blog/${d.slug}`,children:["Read Article ",n.jsx("span",{children:"→"})]})]})]})]})}),n.jsx("section",{className:"blog-section blog-all",id:"all-articles",children:n.jsxs("div",{className:"blog-container",children:[n.jsx("div",{className:"blog-section-head compact",children:n.jsxs("div",{children:[n.jsx("div",{className:"blog-eyebrow dark",children:"LATEST ARTICLES"}),n.jsxs("h2",{children:["Explore our ",n.jsx("span",{children:"latest stories."})]})]})}),s.length>0&&n.jsx("div",{className:"category-row",children:c.map(u=>n.jsx("button",{className:r===u?"active":"",onClick:()=>i(u),children:u},u))}),o==="ok"&&s.length>0&&h.length===0&&n.jsxs("div",{className:"blog-state",children:["No articles in “",r,"” yet. ",n.jsx("button",{type:"button",onClick:()=>i("All"),children:"Show all articles"})]}),n.jsx("div",{className:"blog-grid",children:h.map(u=>{const p=u.slug;return n.jsxs("article",{className:"blog-card",children:[n.jsxs(q,{to:`/blog/${p}`,className:"blog-card-image",children:[n.jsx("img",{src:u.image,alt:u.title}),n.jsx("span",{children:u.category})]}),n.jsxs("div",{className:"blog-card-content",children:[n.jsx("small",{children:Ki(u.publishedAt)}),n.jsx("h3",{children:u.title}),n.jsx("p",{children:u.excerpt}),n.jsxs(q,{to:`/blog/${p}`,children:["Read Article ",n.jsx("span",{children:"→"})]})]})]},u.id||u.slug)})})]})}),n.jsx("section",{className:"blog-newsletter",children:n.jsxs("div",{className:"blog-container newsletter-inner",children:[n.jsxs("div",{children:[n.jsx("div",{className:"blog-eyebrow",children:"STAY UPDATED"}),n.jsx("h2",{children:"Get smarter property insights."}),n.jsx("p",{children:"Follow Homwisor for useful real estate news, property guides and market updates."})]}),n.jsx(q,{to:"/contact/",className:"blog-btn",children:"Talk to an Expert"})]})})]}),n.jsx(Kt,{}),n.jsx("style",{children:`
        .blog-state { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 160px; padding: 30px 16px; border: 1px dashed #e2dccb; border-radius: 18px; background: #fff; color: #6b6450; font-size: 14px; font-weight: 600; text-align: center; flex-wrap: wrap; }
        .blog-state button { border: none; background: none; color: ${di}; font: inherit; font-weight: 800; cursor: pointer; text-decoration: underline; }
        .blog-spin { width: 20px; height: 20px; border: 2.5px solid #eee4c4; border-top-color: ${Tn}; border-radius: 50%; animation: blog-spin .7s linear infinite; }
        @keyframes blog-spin { to { transform: rotate(360deg); } }
        a.featured-image { display: block; }
        * {
          box-sizing: border-box;
        }

        .blog-page {
          min-height: 100vh;
          background: ${fu};
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
          color: ${Tn};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .blog-eyebrow.dark {
          color: ${di};
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
          color: ${Tn};
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
          border-bottom: 1px solid ${Tn};
          padding-bottom: 6px;
        }

        .blog-view-link span {
          color: ${di};
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
          color: ${Tn};
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
          color: ${di};
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
          color: ${di};
          margin-left: 5px;
        }

        .blog-all {
          background: ${fu};
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
          color: ${Tn};
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
          background: ${Tn};
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
      `})]})}const Rt="#D4AF37",On="#9A7418",hi="#F7F5EF",Xb=(e,t)=>{document.title=e;let r=document.querySelector('meta[name="description"]');r||(r=document.createElement("meta"),r.name="description",document.head.appendChild(r)),r.content=t||""};function Qb(){var h;const{slug:e}=Qc(),[t,r]=j.useState(null),[i,s]=j.useState([]),[a,o]=j.useState("loading");if(j.useEffect(()=>{let u=!0;return o("loading"),window.scrollTo(0,0),$.get(`/blogs/${encodeURIComponent(e)}`).then(p=>{u&&(r(p.data),o("ok"))}).catch(()=>u&&o("missing")),$.get("/blogs").then(p=>u&&s(p.data||[])).catch(()=>{}),()=>{u=!1}},[e]),j.useEffect(()=>{t&&Xb(`${t.seoTitle||t.title} | HomWisor`,t.seoDescription||t.excerpt)},[t]),a==="loading")return n.jsxs("div",{className:"blog-detail-page",children:[n.jsx(Mt,{}),n.jsx("main",{style:{minHeight:"70vh",display:"grid",placeItems:"center",padding:"140px 20px 80px",color:"#6b6450",fontWeight:600},children:"Loading article…"}),n.jsx("style",{children:`.blog-detail-page { min-height: 100vh; background: ${hi}; }`})]});if(!t)return n.jsxs("div",{className:"blog-detail-page",children:[n.jsx(Mt,{}),n.jsx("main",{className:"blog-not-found",children:n.jsxs("div",{className:"blog-detail-container",children:[n.jsx("div",{className:"blog-detail-eyebrow",children:"HOMWISOR INSIGHTS"}),n.jsx("h1",{children:"Article Not Found"}),n.jsx("p",{children:"The article you are looking for does not exist or may have been moved."}),n.jsx(q,{to:"/blog",className:"blog-back-btn",children:"← Back to Blog"})]})}),n.jsx(Kt,{}),n.jsx("style",{children:`
          .blog-detail-page {
            min-height: 100vh;
            background: ${hi};
            color: #111;
            font-family: "Manrope", "Inter", Arial, sans-serif;
          }

          .blog-not-found {
            min-height: 65vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 120px 20px 80px;
          }

          .blog-detail-container {
            width: min(100% - 40px, 920px);
            margin: 0 auto;
          }

          .blog-detail-eyebrow {
            color: ${On};
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 2.4px;
          }

          .blog-not-found h1 {
            margin: 14px 0;
            font-size: clamp(38px, 6vw, 62px);
            font-weight: 900;
            letter-spacing: -2px;
          }

          .blog-not-found p {
            color: #777;
            font-size: 14px;
            line-height: 1.8;
          }

          .blog-back-btn {
            display: inline-flex;
            margin-top: 25px;
            padding: 13px 20px;
            border-radius: 8px;
            background: #111;
            color: ${Rt};
            text-decoration: none;
            font-size: 11px;
            font-weight: 800;
          }

          @media (max-width: 600px) {
            .blog-detail-container {
              width: min(100% - 24px, 920px);
            }
          }
        `})]});const l=i.filter(u=>u.slug!==t.slug),c=[...l.filter(u=>u.category===t.category),...l.filter(u=>u.category!==t.category)].slice(0,4),d=Ki(t.publishedAt);return n.jsxs("div",{className:"blog-detail-page",children:[n.jsx(Mt,{}),n.jsxs("section",{className:"blog-detail-hero",children:[n.jsx("img",{src:t.image,alt:t.title,className:"blog-detail-hero-image"}),n.jsx("div",{className:"blog-detail-hero-overlay"}),n.jsx("div",{className:"blog-detail-hero-content",children:n.jsxs("div",{className:"blog-detail-container",children:[n.jsxs("div",{className:"blog-hero-top",children:[n.jsx(q,{to:"/blog",className:"blog-back-link",children:"← Back to Insights"}),n.jsx("div",{className:"blog-detail-category",children:t.category})]}),n.jsx("h1",{children:t.title}),n.jsxs("div",{className:"blog-detail-meta",children:[n.jsx("span",{children:d}),n.jsx("span",{className:"meta-dot",children:"•"}),n.jsxs("span",{children:[$l(t)," MIN READ"]}),n.jsx("span",{className:"meta-dot",children:"•"}),n.jsx("span",{children:(t.author||"HomWisor Insights").toUpperCase()})]})]})})]}),n.jsxs("main",{children:[n.jsx("section",{className:"blog-detail-main",children:n.jsxs("div",{className:"blog-detail-container article-layout",children:[n.jsxs("article",{className:"article-content",children:[n.jsx("p",{className:"article-intro",children:t.excerpt}),(t.content||[]).map((u,p)=>n.jsxs("div",{className:"article-section",children:[u.heading&&n.jsx("h2",{children:u.heading}),Ty(u.text).map((x,v)=>n.jsx("p",{children:x},v)),u.image&&n.jsx("figure",{className:"article-figure",children:n.jsx("img",{src:u.image,alt:u.heading||t.title,loading:"lazy"})})]},p)),((h=t.tags)==null?void 0:h.length)>0&&n.jsx("div",{className:"article-tags",children:t.tags.map(u=>n.jsxs("span",{children:["#",u]},u))}),n.jsxs("div",{className:"article-cta",children:[n.jsxs("div",{children:[n.jsx("div",{className:"article-cta-eyebrow",children:"HOMWISOR"}),n.jsx("h3",{children:"Looking for the right property?"}),n.jsx("p",{children:"Talk to our property experts for assistance with your property search."})]}),n.jsx(q,{to:"/contact/",className:"article-cta-btn",children:"Talk to an Expert →"})]})]}),n.jsxs("aside",{className:"article-sidebar",children:[n.jsxs("div",{className:"sidebar-card",children:[n.jsx("div",{className:"sidebar-eyebrow",children:"ARTICLE DETAILS"}),n.jsxs("div",{className:"sidebar-row",children:[n.jsx("span",{children:"Category"}),n.jsx("strong",{children:t.category})]}),n.jsxs("div",{className:"sidebar-row",children:[n.jsx("span",{children:"Published"}),n.jsx("strong",{children:d})]}),n.jsxs("div",{className:"sidebar-row",children:[n.jsx("span",{children:"Author"}),n.jsx("strong",{children:t.author||"HomWisor Insights"})]}),n.jsxs("div",{className:"sidebar-row",children:[n.jsx("span",{children:"Reading time"}),n.jsxs("strong",{children:[$l(t)," min"]})]})]}),n.jsxs("div",{className:"sidebar-card sidebar-gold",children:[n.jsx("div",{className:"sidebar-eyebrow",children:"HOMWISOR"}),n.jsx("h3",{children:"Explore more property insights."}),n.jsx("p",{children:"Discover real estate news, investment ideas and property guides from Homwisor."}),n.jsx(q,{to:"/blog",children:"View All Articles →"})]})]})]})}),c.length>0&&n.jsx("section",{className:"related-section",children:n.jsxs("div",{className:"blog-detail-container",children:[n.jsxs("div",{className:"related-heading",children:[n.jsxs("div",{children:[n.jsx("div",{className:"blog-detail-eyebrow",children:"KEEP READING"}),n.jsxs("h2",{children:["Related ",n.jsx("span",{children:"insights."})]})]}),n.jsx(q,{to:"/blog",className:"related-view-all",children:"View All Articles →"})]}),n.jsx("div",{className:"related-grid",children:c.map(u=>n.jsxs(q,{to:`/blog/${u.slug}`,className:"related-card",children:[n.jsxs("div",{className:"related-image",children:[n.jsx("img",{src:u.image,alt:u.title}),n.jsx("span",{children:u.category})]}),n.jsxs("div",{className:"related-content",children:[n.jsx("small",{children:Ki(u.publishedAt)}),n.jsx("h3",{children:u.title}),n.jsx("p",{children:u.excerpt}),n.jsxs("div",{className:"related-read",children:["Read Article ",n.jsx("span",{children:"→"})]})]})]},u.id||u.slug))})]})})]}),n.jsx(Kt,{}),n.jsx("style",{children:`
        .article-section p + p { margin-top: 14px; }
        .article-figure { margin: 22px 0 6px; border-radius: 16px; overflow: hidden; background: #eee; }
        .article-figure img { width: 100%; display: block; max-height: 520px; object-fit: cover; }
        .article-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .article-tags span { padding: 6px 12px; border-radius: 999px; background: #fff; border: 1px solid #ebe4cf; color: ${On}; font-size: 12px; font-weight: 700; }
        * {
          box-sizing: border-box;
        }

        .blog-detail-page {
          min-height: 100vh;
          background: ${hi};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .blog-detail-page,
        .blog-detail-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .blog-detail-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .blog-detail-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          color: #fff;
        }

        .blog-detail-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .blog-detail-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(5, 20, 38, .92) 0%,
            rgba(8, 23, 42, .72) 45%,
            rgba(5, 18, 34, .78) 100%
          );
        }

        .blog-detail-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 50px 0 0px;
        }

        .blog-hero-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }

        .blog-back-link {
          display: inline-flex;
          margin: 0;
          color: rgba(255,255,255,.78);
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
          transition: .2s ease;
        }

        .blog-back-link:hover {
          color: ${Rt};
        }

        .blog-detail-category {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          background: rgba(0,0,0,.55);
          border: 1px solid rgba(212,175,55,.35);
          color: ${Rt};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .blog-detail-hero h1 {
          max-width: 900px;
          margin: 17px 0 18px;
          color: #fff;
          font-size: 60px;
          line-height: 1.04;
          letter-spacing: -2.6px;
          font-weight: 900;
        }

        .blog-detail-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,.65);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .meta-dot {
          color: ${Rt};
        }

        /* ARTICLE */

        .blog-detail-main {
          background: #fff;
          padding: 40px 0 40px;
        }

        .article-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 310px;
          gap: 70px;
          align-items: start;
        }

        .article-content {
          max-width: 760px;
        }

        .article-intro {
          margin: 0 0 38px;
          color: #303030;
          font-size: 19px;
          line-height: 1.85;
          font-weight: 600;
        }

        .article-section {
          margin-bottom: 38px;
        }

        .article-section h2 {
          margin: 0 0 13px;
          color: #111;
          font-size: 28px;
          line-height: 1.2;
          letter-spacing: -1px;
          font-weight: 900;
        }

        .article-section p {
          margin: 0;
          color: #666;
          font-size: 14px;
          line-height: 1.95;
        }

        /* SIDEBAR */

        .article-sidebar {
          position: sticky;
          top: 100px;
          align-self: start;
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: fit-content;
        }

        .sidebar-card {
          padding: 25px;
          background: ${hi};
          border: 1px solid #e4dccb;
          border-radius: 15px;
        }

        .sidebar-eyebrow {
          margin-bottom: 18px;
          color: ${On};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .sidebar-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 0;
          border-top: 1px solid #ded6c7;
        }

        .sidebar-row span {
          color: #888;
          font-size: 9px;
          font-weight: 700;
        }

        .sidebar-row strong {
          color: #111;
          font-size: 11px;
          font-weight: 800;
        }

        .sidebar-gold {
          background: #111;
          border-color: #111;
          color: #fff;
        }

        .sidebar-gold .sidebar-eyebrow {
          color: ${Rt};
        }

        .sidebar-gold h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 22px;
          line-height: 1.25;
          font-weight: 900;
        }

        .sidebar-gold p {
          margin: 0 0 18px;
          color: rgba(255,255,255,.62);
          font-size: 11px;
          line-height: 1.7;
        }

        .sidebar-gold a {
          color: ${Rt};
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
        }

        /* CTA */

        .article-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 55px;
          padding: 30px;
          border-radius: 16px;
          background: #111;
          color: #fff;
        }

        .article-cta-eyebrow {
          margin-bottom: 8px;
          color: ${Rt};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .article-cta h3 {
          margin: 0 0 7px;
          color: #fff;
          font-size: 23px;
          font-weight: 900;
        }

        .article-cta p {
          margin: 0;
          color: rgba(255,255,255,.62);
          font-size: 11px;
          line-height: 1.6;
        }

        .article-cta-btn {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 45px;
          padding: 0 19px;
          border-radius: 8px;
          background: ${Rt};
          color: #111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* RELATED */

        .related-section {
          padding: 40px 0 0px;
          background: ${hi};
        }

        .related-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 28px;
        }

        .related-heading h2 {
          margin: 9px 0 0;
          color: #111;
          font-size: 38px;
          line-height: 1.08;
          letter-spacing: -1.6px;
          font-weight: 900;
        }

        .related-heading h2 span {
          color: ${On};
        }

        .blog-detail-eyebrow {
          color: ${On};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .related-view-all {
          flex: 0 0 auto;
          color: #111;
          text-decoration: none;
          border-bottom: 1px solid ${Rt};
          padding-bottom: 6px;
          font-size: 10px;
          font-weight: 800;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
        }

        .related-card {
          display: block;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e4dccb;
          border-radius: 16px;
          text-decoration: none;
          transition: .25s ease;
        }

        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(0,0,0,.08);
        }

        .related-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .4s ease;
        }

        .related-card:hover .related-image img {
          transform: scale(1.04);
        }

        .related-image span {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 7px 9px;
          background: rgba(0,0,0,.76);
          color: ${Rt};
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .related-content {
          padding: 20px;
        }

        .related-content small {
          color: ${On};
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .related-content h3 {
          margin: 9px 0 8px;
          color: #111;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 900;
        }

        .related-content p {
          margin: 0;
          color: #777;
          font-size: 11px;
          line-height: 1.7;
        }

        .related-read {
          margin-top: 17px;
          color: #111;
          font-size: 9px;
          font-weight: 800;
        }

        .related-read span {
          margin-left: 5px;
          color: ${On};
        }

        /* TABLET */

        @media (max-width: 900px) {
          .article-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .article-content {
            max-width: none;
          }

          .article-sidebar {
            position: static;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* MOBILE */

        @media (max-width: 760px) {
          .blog-detail-container {
            width: min(100% - 24px, 1180px);
          }

          .blog-detail-hero {
            min-height: 500px;
          }

          .blog-detail-hero-content {
            padding: 80px 0 45px;
          }

          .blog-hero-top {
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 22px;
          }

          .blog-detail-hero h1 {
            font-size: 40px;
            line-height: 1.08;
            letter-spacing: -1.3px;
          }

          .blog-detail-main {
            padding: 45px 0 55px;
          }

          .article-intro {
            font-size: 16px;
            line-height: 1.75;
            margin-bottom: 30px;
          }

          .article-section {
            margin-bottom: 30px;
          }

          .article-section h2 {
            font-size: 24px;
          }

          .article-section p {
            font-size: 13px;
            line-height: 1.85;
          }

          .article-sidebar {
            grid-template-columns: 1fr;
          }

          .article-cta {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 40px;
          }

          .article-cta-btn {
            width: 100%;
          }

          .related-section {
            padding: 45px 0 0px;
          }

          .related-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .related-heading h2 {
            font-size: 34px;
          }

          .related-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .related-image {
            height: 160px;
          }

          .related-content {
            padding: 13px;
          }

          .related-content h3 {
            font-size: 13px;
          }

          .related-content p {
            font-size: 9px;
          }
        }

        @media (max-width: 520px) {
          .blog-detail-container {
            width: min(100% - 20px, 1180px);
          }

          .blog-detail-hero {
            min-height: 470px;
          }

          .blog-detail-hero h1 {
            font-size: 35px;
          }

          .blog-detail-meta {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .related-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .related-image {
            height: 135px;
          }

          .related-content {
            padding: 11px;
          }

          .related-content h3 {
            font-size: 12px;
          }

          .related-content p {
            font-size: 9px;
            line-height: 1.55;
          }

          .related-read {
            font-size: 8px;
            margin-top: 11px;
          }
        }
      `})]})}const Rs="#D4AF37",Wo="#9A7418",Uo="#F7F5EF";function Zb(){return n.jsxs("div",{className:"privacy-page",children:[n.jsx(Mt,{}),n.jsxs("section",{className:"privacy-hero",children:[n.jsx("div",{className:"privacy-hero-overlay"}),n.jsxs("div",{className:"privacy-hero-content",children:[n.jsx("span",{className:"privacy-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),n.jsxs("h1",{children:["Privacy ",n.jsx("span",{children:"Policy."})]}),n.jsx("p",{children:"Your privacy matters to us. Learn how Homwisor collects, uses, protects and manages information when you interact with our website and real estate services."})]})]}),n.jsx("main",{className:"privacy-main",children:n.jsxs("div",{className:"privacy-layout",children:[n.jsx("aside",{className:"privacy-sidebar",children:n.jsxs("div",{className:"privacy-sidebar-card",children:[n.jsx("span",{children:"ON THIS PAGE"}),n.jsx("a",{href:"#introduction",children:"Introduction"}),n.jsx("a",{href:"#information",children:"Information We Collect"}),n.jsx("a",{href:"#use",children:"How We Use Information"}),n.jsx("a",{href:"#sharing",children:"Information Sharing"}),n.jsx("a",{href:"#cookies",children:"Cookies & Tracking"}),n.jsx("a",{href:"#security",children:"Data Security"}),n.jsx("a",{href:"#rights",children:"Your Rights"}),n.jsx("a",{href:"#third-party",children:"Third-Party Links"}),n.jsx("a",{href:"#children",children:"Children's Privacy"}),n.jsx("a",{href:"#changes",children:"Policy Changes"}),n.jsx("a",{href:"#contact",children:"Contact Us"})]})}),n.jsxs("article",{className:"privacy-content",children:[n.jsxs("div",{className:"policy-intro",id:"introduction",children:[n.jsx("span",{className:"section-label",children:"PRIVACY & DATA"}),n.jsx("h2",{children:"Privacy Policy"}),n.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),n.jsx("p",{children:'Homwisor Consultants Pvt. Ltd. ("Homwisor", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how information may be collected, used, stored and disclosed when you visit our website, submit an enquiry, request a property consultation, or otherwise interact with our services.'})]}),n.jsxs("section",{id:"information",children:[n.jsx("h3",{children:"1. Information We Collect"}),n.jsx("p",{children:"Depending on how you interact with Homwisor, we may collect information that you voluntarily provide, including your name, phone number, email address, property requirements, location preferences, budget information and messages or enquiries submitted through our forms."}),n.jsx("p",{children:"We may also receive basic technical information such as browser type, device information, IP address, referring pages, pages visited and general website usage information."})]}),n.jsxs("section",{id:"use",children:[n.jsx("h3",{children:"2. How We Use Your Information"}),n.jsx("p",{children:"We may use the information we collect to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Respond to property enquiries and requests."}),n.jsx("li",{children:"Provide property recommendations and consultation."}),n.jsx("li",{children:"Arrange site visits, callbacks or other requested services."}),n.jsx("li",{children:"Communicate with you about properties, services and enquiries."}),n.jsx("li",{children:"Improve our website, services and customer experience."}),n.jsx("li",{children:"Maintain website security and prevent misuse or fraud."}),n.jsx("li",{children:"Comply with applicable legal and regulatory requirements."})]})]}),n.jsxs("section",{id:"sharing",children:[n.jsx("h3",{children:"3. Information Sharing & Disclosure"}),n.jsx("p",{children:"Homwisor does not sell personal information as a business practice. Information may be shared when reasonably required to provide a service you have requested, operate our website, work with relevant service providers, protect our legal interests, or comply with applicable law."}),n.jsx("p",{children:"Where a property enquiry requires communication with a developer, property owner, service provider or other relevant party, we may share the information necessary to respond to that enquiry."})]}),n.jsxs("section",{id:"cookies",children:[n.jsx("h3",{children:"4. Cookies & Tracking Technologies"}),n.jsx("p",{children:"Our website may use cookies and similar technologies to remember preferences, understand website usage, measure performance and improve the user experience."}),n.jsx("p",{children:"You can control or disable cookies through your browser settings. Some website functionality may be affected when cookies are disabled."})]}),n.jsxs("section",{id:"security",children:[n.jsx("h3",{children:"5. Data Security"}),n.jsx("p",{children:"We take reasonable administrative, technical and organizational measures to protect personal information from unauthorized access, misuse, alteration or disclosure."}),n.jsx("p",{children:"However, no method of transmission or electronic storage can be guaranteed to be completely secure. You should therefore avoid sending highly sensitive information through ordinary website forms unless specifically requested through a secure channel."})]}),n.jsxs("section",{id:"rights",children:[n.jsx("h3",{children:"6. Your Privacy Rights"}),n.jsx("p",{children:"Subject to applicable law, you may request access to, correction of, or deletion of personal information that we hold about you. You may also ask us to stop or limit certain communications."}),n.jsx("p",{children:"To make a privacy-related request, contact us using the details provided below. We may need to verify your identity before completing a request."})]}),n.jsxs("section",{id:"third-party",children:[n.jsx("h3",{children:"7. Third-Party Websites & Services"}),n.jsx("p",{children:"Our website may contain links to third-party websites, platforms or services. Those third parties operate under their own privacy policies and terms. Homwisor is not responsible for the privacy practices or content of external websites."})]}),n.jsxs("section",{id:"children",children:[n.jsx("h3",{children:"8. Children's Privacy"}),n.jsx("p",{children:"Our services are intended for adults and property-related users. We do not knowingly request personal information from children for the purpose of providing real estate services."})]}),n.jsxs("section",{id:"retention",children:[n.jsx("h3",{children:"9. Data Retention"}),n.jsx("p",{children:"We retain personal information for as long as reasonably necessary for the purposes described in this policy, to provide requested services, maintain business records, resolve disputes and meet applicable legal obligations."})]}),n.jsxs("section",{id:"changes",children:[n.jsx("h3",{children:"10. Changes to This Privacy Policy"}),n.jsx("p",{children:'We may update this Privacy Policy from time to time to reflect changes to our services, website, legal requirements or privacy practices. The updated version will be published on this page with a revised "Last updated" date.'})]}),n.jsxs("section",{id:"contact",className:"privacy-contact-box",children:[n.jsx("span",{className:"section-label",children:"CONTACT US"}),n.jsx("h3",{children:"Questions about your privacy?"}),n.jsx("p",{children:"If you have questions, requests or concerns regarding this Privacy Policy or the way your information is handled, please contact Homwisor."}),n.jsxs("div",{className:"privacy-contact-grid",children:[n.jsxs("a",{href:"mailto:info@homwisor.com",children:[n.jsx("small",{children:"EMAIL"}),"info@homwisor.com"]}),n.jsxs("a",{href:"tel:8500900100",children:[n.jsx("small",{children:"PHONE"}),"+91 8500 900 100"]}),n.jsxs("div",{children:[n.jsx("small",{children:"OFFICE"}),"Gurugram, Haryana, India"]})]})]}),n.jsxs("div",{className:"privacy-note",children:[n.jsx("strong",{children:"Important:"})," This page is a website privacy policy template for Homwisor and should be reviewed and finalized according to the company's actual data practices, third-party tools, consent mechanisms and applicable laws."]})]})]})}),n.jsx(Kt,{}),n.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .privacy-page {
          min-height: 100vh;
          background: ${Uo};
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
          color: ${Rs};
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
          color: ${Rs};
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
          background: ${Uo};
        }

        .privacy-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${Wo};
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
          color: ${Wo};
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
          background: ${Uo};
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
          border-color: ${Rs};
        }

        .privacy-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${Wo};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .privacy-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${Rs};
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
      `})]})}const Ps="#D4AF37",Ts="#9A7418",Ho="#F7F5EF";function Jb(){return n.jsxs("div",{className:"terms-page",children:[n.jsx(Mt,{}),n.jsxs("section",{className:"terms-hero",children:[n.jsx("div",{className:"terms-hero-overlay"}),n.jsxs("div",{className:"terms-hero-content",children:[n.jsx("span",{className:"terms-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),n.jsxs("h1",{children:["Terms & ",n.jsx("span",{children:"Conditions."})]}),n.jsx("p",{children:"Please read these terms carefully before using the Homwisor website, property listings, enquiry services and real estate consultation services."})]})]}),n.jsx("main",{className:"terms-main",children:n.jsxs("div",{className:"terms-layout",children:[n.jsx("aside",{className:"terms-sidebar",children:n.jsxs("div",{className:"terms-sidebar-card",children:[n.jsx("span",{children:"ON THIS PAGE"}),n.jsx("a",{href:"#acceptance",children:"Acceptance of Terms"}),n.jsx("a",{href:"#about",children:"About Homwisor"}),n.jsx("a",{href:"#use",children:"Use of Website"}),n.jsx("a",{href:"#listings",children:"Property Listings"}),n.jsx("a",{href:"#enquiries",children:"Enquiries & Communication"}),n.jsx("a",{href:"#accuracy",children:"Information Accuracy"}),n.jsx("a",{href:"#transactions",children:"Property Transactions"}),n.jsx("a",{href:"#intellectual",children:"Intellectual Property"}),n.jsx("a",{href:"#third-party",children:"Third-Party Services"}),n.jsx("a",{href:"#liability",children:"Limitation of Liability"}),n.jsx("a",{href:"#privacy",children:"Privacy"}),n.jsx("a",{href:"#changes",children:"Changes to Terms"}),n.jsx("a",{href:"#contact",children:"Contact Us"})]})}),n.jsxs("article",{className:"terms-content",children:[n.jsxs("div",{className:"terms-intro",id:"acceptance",children:[n.jsx("span",{className:"section-label",children:"LEGAL INFORMATION"}),n.jsx("h2",{children:"Terms & Conditions"}),n.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),n.jsx("p",{children:'These Terms and Conditions ("Terms") govern your access to and use of the Homwisor website and related services operated by Homwisor Consultant Private Limited ("Homwisor", "we", "us", or "our").'}),n.jsx("p",{children:"By accessing or using this website, submitting an enquiry, requesting a property consultation, contacting our team, or otherwise using our services, you acknowledge that you have read and understood these Terms and agree to be bound by them."})]}),n.jsxs("section",{id:"about",children:[n.jsx("h3",{children:"1. About Homwisor"}),n.jsx("p",{children:"Homwisor is a Gurugram-based real estate platform and agency that helps property buyers, sellers, tenants and landlords connect and transact with greater confidence. Our services include property search and listings, buyer and seller facilitation, market guidance and real estate advisory."}),n.jsx("p",{children:"Homwisor's public company information states that the business operates as Homwisor Consultant Private Limited and is registered as a real estate agent with the Haryana Real Estate Regulatory Authority (HARERA), Gurugram."})]}),n.jsxs("section",{id:"use",children:[n.jsx("h3",{children:"2. Use of the Website"}),n.jsx("p",{children:"You agree to use the website only for lawful purposes and in a manner that does not interfere with the operation, security, availability or integrity of the website."}),n.jsxs("ul",{children:[n.jsx("li",{children:"You must provide accurate information when submitting forms or enquiries."}),n.jsx("li",{children:"You must not use the website for fraudulent, misleading or unlawful activities."}),n.jsx("li",{children:"You must not attempt to gain unauthorized access to any system, account, database or website functionality."}),n.jsx("li",{children:"You must not copy, scrape, reproduce or commercially exploit website content without permission."})]})]}),n.jsxs("section",{id:"listings",children:[n.jsx("h3",{children:"3. Property Listings & Information"}),n.jsx("p",{children:"Property listings may include information such as project names, locations, prices, sizes, configurations, availability, amenities, photographs and other property-related details."}),n.jsx("p",{children:"Property information may be supplied or updated by developers, owners, agents or other relevant sources. Prices, availability, specifications, offers and other project details may change without prior notice."}),n.jsx("p",{children:"A listing or enquiry on Homwisor does not by itself constitute an offer, reservation, allotment, sale agreement or guarantee of availability."})]}),n.jsxs("section",{id:"enquiries",children:[n.jsx("h3",{children:"4. Property Enquiries & Communication"}),n.jsx("p",{children:"When you submit an enquiry, you authorize Homwisor and relevant property or service representatives to contact you regarding the enquiry through phone, email, WhatsApp or other appropriate communication channels."}),n.jsx("p",{children:"You are responsible for ensuring that the contact information provided by you is correct and belongs to you or that you are otherwise authorized to provide it."})]}),n.jsxs("section",{id:"accuracy",children:[n.jsx("h3",{children:"5. Accuracy of Information"}),n.jsx("p",{children:"Homwisor aims to provide useful and current property information, but information on the website may contain errors, omissions, outdated details or information supplied by third parties."}),n.jsx("p",{children:"Users should independently verify material information, including title, approvals, RERA registration, pricing, availability, specifications, payment schedules, possession timelines and other transaction-related details before making a decision."})]}),n.jsxs("section",{id:"transactions",children:[n.jsx("h3",{children:"6. Property Transactions"}),n.jsx("p",{children:"Homwisor may facilitate introductions, property visits, communication and other real estate assistance. Unless expressly agreed otherwise in writing, Homwisor is not the seller, developer, owner or legal representative of every property displayed on the website."}),n.jsx("p",{children:"Any purchase, sale, lease, booking, allotment or other property transaction is subject to separate documentation and agreements between the relevant parties."}),n.jsx("p",{children:"Users should obtain independent legal, financial and tax advice where appropriate before entering into a property transaction."})]}),n.jsxs("section",{id:"rera",children:[n.jsx("h3",{children:"7. Regulatory & RERA Information"}),n.jsx("p",{children:"Homwisor's public company information identifies the business as a HARERA-registered real estate agent and states that it facilitates transactions in accordance with the Real Estate (Regulation and Development) Act, 2016 and applicable Haryana rules."}),n.jsx("p",{children:"Users should independently verify the current registration status and the RERA registration of any relevant real estate project before proceeding with a transaction."})]}),n.jsxs("section",{id:"intellectual",children:[n.jsx("h3",{children:"8. Intellectual Property"}),n.jsx("p",{children:"Unless otherwise stated, the website's design, branding, logos, text, graphics, photographs, layout, software and other original materials are owned by or licensed to Homwisor."}),n.jsx("p",{children:"You may view and use the website for personal and legitimate property-related purposes. You may not reproduce, distribute, modify, publish, sell or commercially exploit website materials without prior written permission."})]}),n.jsxs("section",{id:"third-party",children:[n.jsx("h3",{children:"9. Third-Party Websites & Services"}),n.jsx("p",{children:"The website may contain links, integrations or references to third-party websites, developers, property owners, service providers, payment providers, maps, social platforms or other external services."}),n.jsx("p",{children:"Third-party services are governed by their own terms and policies. Homwisor is not responsible for the independent operation, availability, content or privacy practices of third-party websites and services."})]}),n.jsxs("section",{id:"liability",children:[n.jsx("h3",{children:"10. Disclaimer & Limitation of Liability"}),n.jsx("p",{children:"The website and its information are provided for general property-search, information and consultation purposes. Homwisor does not guarantee that the website or every piece of information will always be complete, current, uninterrupted or error-free."}),n.jsx("p",{children:"To the extent permitted by applicable law, Homwisor will not be responsible for losses arising solely from reliance on unverified property information, third-party information, changes in property availability or pricing, transaction decisions, website interruptions, or events beyond its reasonable control."})]}),n.jsxs("section",{id:"privacy",children:[n.jsx("h3",{children:"11. Privacy"}),n.jsxs("p",{children:["Your use of the website may involve the collection and processing of personal information. Please review our",n.jsxs("a",{className:"inline-link",href:"/privacy-policy",children:[" ","Privacy Policy"]})," ","for information about how personal data may be collected, used, stored and handled."]})]}),n.jsxs("section",{id:"changes",children:[n.jsx("h3",{children:"12. Changes to These Terms"}),n.jsx("p",{children:"Homwisor may update these Terms from time to time to reflect changes to the website, services, business practices or applicable legal requirements."}),n.jsx("p",{children:'Updated Terms will be published on this page with a revised "Last updated" date. Your continued use of the website after an update constitutes acceptance of the revised Terms to the extent permitted by applicable law.'})]}),n.jsxs("section",{id:"contact",className:"terms-contact-box",children:[n.jsx("span",{className:"section-label",children:"CONTACT US"}),n.jsx("h3",{children:"Questions about these Terms?"}),n.jsx("p",{children:"If you have questions about these Terms and Conditions or Homwisor's services, please contact the company using the information below."}),n.jsxs("div",{className:"terms-contact-grid",children:[n.jsxs("a",{href:"mailto:homwisor@gmail.com",children:[n.jsx("small",{children:"EMAIL"}),"homwisor@gmail.com"]}),n.jsxs("a",{href:"tel:9090101401",children:[n.jsx("small",{children:"PHONE"}),"+91 9090 101 401"]}),n.jsxs("div",{children:[n.jsx("small",{children:"REGISTERED OFFICE"}),"Unit No. 704, 7th Floor, ILD Trade Centre, Sohna Road, Village Tikri, Sector-47, Gurugram, Haryana – 122018"]})]})]}),n.jsxs("div",{className:"terms-note",children:[n.jsx("strong",{children:"Important:"})," This page is a website terms template prepared from Homwisor's publicly available company information and the requested website context. It should be reviewed by the company's legal counsel and aligned with its actual contracts, services, policies and applicable laws before publication."]})]})]})}),n.jsx(Kt,{}),n.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .terms-page {
          min-height: 100vh;
          background: ${Ho};
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
          color: ${Ps};
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
          color: ${Ps};
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
          background: ${Ho};
        }

        .terms-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${Ts};
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
          color: ${Ts};
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
          color: ${Ts};
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
          background: ${Ho};
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
          border-color: ${Ps};
        }

        .terms-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${Ts};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .terms-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${Ps};
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
      `})]})}function Ln({param:e,preset:t}){const{slug:r}=Qc(),i=new URLSearchParams(t||{});return e&&r&&i.set(e,r),n.jsx(Gi,{to:`/search?${i.toString()}`,replace:!0})}function e2({children:e}){return ka()?e:n.jsx(Gi,{to:od()?"/admin?session=expired":"/admin",replace:!0})}function t2(){return n.jsx(p0,{children:n.jsxs(s0,{children:[n.jsx(ge,{path:"/",element:n.jsx(cv,{})}),n.jsx(ge,{path:"/about",element:n.jsx(yv,{})}),n.jsx(ge,{path:"/search",element:n.jsx(Iv,{})}),n.jsx(ge,{path:"/location/:slug",element:n.jsx(Ln,{param:"location"})}),n.jsx(ge,{path:"/budget/:slug",element:n.jsx(Ln,{param:"budget"})}),n.jsx(ge,{path:"/property-type/:slug",element:n.jsx(Ln,{param:"type"})}),n.jsx(ge,{path:"/commercial/:slug",element:n.jsx(Ln,{param:"type"})}),n.jsx(ge,{path:"/status/:slug",element:n.jsx(Ln,{param:"status"})}),n.jsx(ge,{path:"/residential-projects",element:n.jsx(Ln,{preset:{type:"residential"}})}),n.jsx(ge,{path:"/commercial-projects",element:n.jsx(Ln,{preset:{type:"commercial"}})}),n.jsx(ge,{path:"/property/:id",element:n.jsx(Qv,{})}),n.jsx(ge,{path:"/blog",element:n.jsx(Yb,{})}),n.jsx(ge,{path:"/blog/:slug",element:n.jsx(Qb,{})}),n.jsx(ge,{path:"/privacy-policy",element:n.jsx(Zb,{})}),n.jsx(ge,{path:"/terms-and-conditions",element:n.jsx(Jb,{})}),n.jsx(ge,{path:"/property-snaps",element:n.jsx(eb,{})}),n.jsx(ge,{path:"/snaps",element:n.jsx(Gi,{to:"/property-snaps",replace:!0})}),n.jsx(ge,{path:"/admin",element:n.jsx(ib,{})}),n.jsx(ge,{path:"/admin/dashboard",element:n.jsx(e2,{children:n.jsx(Kb,{})})}),n.jsx(ge,{path:"/contact",element:n.jsx(tb,{})}),n.jsx(ge,{path:"*",element:n.jsx(Gi,{to:"/",replace:!0})})]})})}$o.createRoot(document.getElementById("root")).render(n.jsx(Su.StrictMode,{children:n.jsx(t2,{})}));
