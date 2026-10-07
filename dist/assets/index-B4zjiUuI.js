const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-A0EGjcY1.js","assets/Dashboard-B2X57Y7P.css"])))=>i.map(i=>d[i]);
function Bf(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(i,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var Ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ff(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nu={exports:{}},Qs={},Cu={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),Df=Symbol.for("react.portal"),Wf=Symbol.for("react.fragment"),Uf=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),Gf=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),qf=Symbol.for("react.memo"),Kf=Symbol.for("react.lazy"),bc=Symbol.iterator;function Yf(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var Ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pu=Object.assign,Ou={};function vr(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Ru}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tu(){}Tu.prototype=vr.prototype;function ul(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Ru}var hl=ul.prototype=new Tu;hl.constructor=ul;Pu(hl,vr.prototype);hl.isPureReactComponent=!0;var jc=Array.isArray,Mu=Object.prototype.hasOwnProperty,pl={current:null},zu={key:!0,ref:!0,__self:!0,__source:!0};function Lu(e,t,n){var i,s={},o=null,a=null;if(t!=null)for(i in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Mu.call(t,i)&&!zu.hasOwnProperty(i)&&(s[i]=t[i]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)s[i]===void 0&&(s[i]=l[i]);return{$$typeof:Si,type:e,key:o,ref:a,props:s,_owner:pl.current}}function Xf(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function Qf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ac=/\/+/g;function vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qf(""+e.key):t.toString(36)}function is(e,t,n,i,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Si:case Df:a=!0}}if(a)return a=e,s=s(a),e=i===""?"."+vo(a,0):i,jc(s)?(n="",e!=null&&(n=e.replace(Ac,"$&/")+"/"),is(s,t,n,"",function(d){return d})):s!=null&&(fl(s)&&(s=Xf(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Ac,"$&/")+"/")+e)),t.push(s)),1;if(a=0,i=i===""?".":i+":",jc(e))for(var l=0;l<e.length;l++){o=e[l];var c=i+vo(o,l);a+=is(o,t,n,c,s)}else if(c=Yf(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=i+vo(o,l++),a+=is(o,t,n,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Li(e,t,n){if(e==null)return e;var i=[],s=0;return is(e,i,"","",function(o){return t.call(n,o,s++)}),i}function Zf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},ss={transition:null},Jf={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:ss,ReactCurrentOwner:pl};function Iu(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Li,forEach:function(e,t,n){Li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Li(e,function(){t++}),t},toArray:function(e){return Li(e,function(t){return t})||[]},only:function(e){if(!fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=vr;$.Fragment=Wf;$.Profiler=Hf;$.PureComponent=ul;$.StrictMode=Uf;$.Suspense=Vf;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf;$.act=Iu;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Pu({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=pl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Mu.call(t,c)&&!zu.hasOwnProperty(c)&&(i[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Si,type:e.type,key:s,ref:o,props:i,_owner:a}};$.createContext=function(e){return e={$$typeof:Gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_f,_context:e},e.Consumer=e};$.createElement=Lu;$.createFactory=function(e){var t=Lu.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:$f,render:e}};$.isValidElement=fl;$.lazy=function(e){return{$$typeof:Kf,_payload:{_status:-1,_result:e},_init:Zf}};$.memo=function(e,t){return{$$typeof:qf,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=ss.transition;ss.transition={};try{e()}finally{ss.transition=t}};$.unstable_act=Iu;$.useCallback=function(e,t){return Ie.current.useCallback(e,t)};$.useContext=function(e){return Ie.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ie.current.useEffect(e,t)};$.useId=function(){return Ie.current.useId()};$.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ie.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};$.useRef=function(e){return Ie.current.useRef(e)};$.useState=function(e){return Ie.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ie.current.useTransition()};$.version="18.3.1";Cu.exports=$;var j=Cu.exports;const Bu=Ff(j),em=Bf({__proto__:null,default:Bu},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm=j,nm=Symbol.for("react.element"),rm=Symbol.for("react.fragment"),im=Object.prototype.hasOwnProperty,sm=tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,om={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var i,s={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(i in t)im.call(t,i)&&!om.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:nm,type:e,key:o,ref:a,props:s,_owner:sm.current}}Qs.Fragment=rm;Qs.jsx=Fu;Qs.jsxs=Fu;Nu.exports=Qs;var r=Nu.exports,aa={},Du={exports:{}},Xe={},Wu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,F){var W=L.length;L.push(F);e:for(;0<W;){var V=W-1>>>1,H=L[V];if(0<s(H,F))L[V]=F,L[W]=H,W=V;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var F=L[0],W=L.pop();if(W!==F){L[0]=W;e:for(var V=0,H=L.length,je=H>>>1;V<je;){var pe=2*(V+1)-1,Fe=L[pe],x=pe+1,T=L[x];if(0>s(Fe,W))x<H&&0>s(T,Fe)?(L[V]=T,L[x]=W,V=x):(L[V]=Fe,L[pe]=W,V=pe);else if(x<H&&0>s(T,W))L[V]=T,L[x]=W,V=x;else break e}}return F}function s(L,F){var W=L.sortIndex-F.sortIndex;return W!==0?W:L.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],d=[],h=1,u=null,g=3,A=!1,k=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var F=n(d);F!==null;){if(F.callback===null)i(d);else if(F.startTime<=L)i(d),F.sortIndex=F.expirationTime,t(c,F);else break;F=n(d)}}function v(L){if(S=!1,m(L),!k)if(n(c)!==null)k=!0,Ne(b);else{var F=n(d);F!==null&&ge(v,F.startTime-L)}}function b(L,F){k=!1,S&&(S=!1,f(R),R=-1),A=!0;var W=g;try{for(m(F),u=n(c);u!==null&&(!(u.expirationTime>F)||L&&!M());){var V=u.callback;if(typeof V=="function"){u.callback=null,g=u.priorityLevel;var H=V(u.expirationTime<=F);F=e.unstable_now(),typeof H=="function"?u.callback=H:u===n(c)&&i(c),m(F)}else i(c);u=n(c)}if(u!==null)var je=!0;else{var pe=n(d);pe!==null&&ge(v,pe.startTime-F),je=!1}return je}finally{u=null,g=W,A=!1}}var P=!1,w=null,R=-1,C=5,E=-1;function M(){return!(e.unstable_now()-E<C)}function G(){if(w!==null){var L=e.unstable_now();E=L;var F=!0;try{F=w(!0,L)}finally{F?ue():(P=!1,w=null)}}else P=!1}var ue;if(typeof p=="function")ue=function(){p(G)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Ee=te.port2;te.port1.onmessage=G,ue=function(){Ee.postMessage(null)}}else ue=function(){N(G,0)};function Ne(L){w=L,P||(P=!0,ue())}function ge(L,F){R=N(function(){L(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){k||A||(k=!0,Ne(b))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var W=g;g=F;try{return L()}finally{g=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=g;g=L;try{return F()}finally{g=W}},e.unstable_scheduleCallback=function(L,F,W){var V=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?V+W:V):W=V,L){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=W+H,L={id:h++,callback:F,priorityLevel:L,startTime:W,expirationTime:H,sortIndex:-1},W>V?(L.sortIndex=W,t(d,L),n(c)===null&&L===n(d)&&(S?(f(R),R=-1):S=!0,ge(v,W-V))):(L.sortIndex=H,t(c,L),k||A||(k=!0,Ne(b))),L},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(L){var F=g;return function(){var W=g;g=F;try{return L.apply(this,arguments)}finally{g=W}}}})(Uu);Wu.exports=Uu;var am=Wu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=j,Ye=am;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hu=new Set,ri={};function Dn(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(ri[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},Sc={};function dm(e){return la.call(Sc,e)?!0:la.call(kc,e)?!1:cm.test(e)?Sc[e]=!0:(kc[e]=!0,!1)}function um(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hm(e,t,n,i){if(t===null||typeof t>"u"||um(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,i,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ml,gl);Se[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ml,gl);Se[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ml,gl);Se[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function xl(e,t,n,i){var s=Se.hasOwnProperty(t)?Se[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hm(t,n,s,i)&&(n=null),i||s===null?dm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,i=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Ft=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),wl=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),yl=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),ua=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),$u=Symbol.for("react.offscreen"),Ec=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=Ec&&e[Ec]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,bo;function _r(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||""}return`
`+bo+e}var jo=!1;function Ao(e,t){if(!e||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=i.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function pm(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Vn:return"Portal";case ca:return"Profiler";case wl:return"StrictMode";case da:return"Suspense";case ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gu:return(e.displayName||"Context")+".Consumer";case _u:return(e._context.displayName||"Context")+".Provider";case yl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return t=e.displayName||null,t!==null?t:ha(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return ha(e(t))}catch{}}return null}function fm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ha(t);case 8:return t===wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mm(e){var t=Vu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=mm(e))}function qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Vu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pa(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ku(e,t){t=t.checked,t!=null&&xl(e,"checked",t,!1)}function fa(e,t){Ku(e,t);var n=ln(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&ma(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ma(e,t,n){(t!=="number"||vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gr=Array.isArray;function ir(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Gr(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function Yu(e,t){var n=ln(t.value),i=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fi,Qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fi=Fi||document.createElement("div"),Fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gm=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){gm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Zu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=Zu(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,s):e[n]=s}}var xm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(e,t){if(t){if(xm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ba=null,sr=null,or=null;function Oc(e){if(e=Ci(e)){if(typeof ba!="function")throw Error(O(280));var t=e.stateNode;t&&(t=no(t),ba(e.stateNode,e.type,t))}}function eh(e){sr?or?or.push(e):or=[e]:sr=e}function th(){if(sr){var e=sr,t=or;if(or=sr=null,Oc(e),t)for(e=0;e<t.length;e++)Oc(t[e])}}function nh(e,t){return e(t)}function rh(){}var ko=!1;function ih(e,t,n){if(ko)return e(t,n);ko=!0;try{return nh(e,t,n)}finally{ko=!1,(sr!==null||or!==null)&&(rh(),th())}}function si(e,t){var n=e.stateNode;if(n===null)return null;var i=no(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var ja=!1;if(Mt)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){ja=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{ja=!1}function wm(e,t,n,i,s,o,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Yr=!1,bs=null,js=!1,Aa=null,ym={onError:function(e){Yr=!0,bs=e}};function vm(e,t,n,i,s,o,a,l,c){Yr=!1,bs=null,wm.apply(ym,arguments)}function bm(e,t,n,i,s,o,a,l,c){if(vm.apply(this,arguments),Yr){if(Yr){var d=bs;Yr=!1,bs=null}else throw Error(O(198));js||(js=!0,Aa=d)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tc(e){if(Wn(e)!==e)throw Error(O(188))}function jm(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Tc(s),e;if(o===i)return Tc(s),t;o=o.sibling}throw Error(O(188))}if(n.return!==i.return)n=s,i=o;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,i=o;break}if(l===i){a=!0,i=s,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,i=s;break}if(l===i){a=!0,i=o,n=s;break}l=l.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==i)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function oh(e){return e=jm(e),e!==null?ah(e):null}function ah(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ah(e);if(t!==null)return t;e=e.sibling}return null}var lh=Ye.unstable_scheduleCallback,Mc=Ye.unstable_cancelCallback,Am=Ye.unstable_shouldYield,km=Ye.unstable_requestPaint,le=Ye.unstable_now,Sm=Ye.unstable_getCurrentPriorityLevel,jl=Ye.unstable_ImmediatePriority,ch=Ye.unstable_UserBlockingPriority,As=Ye.unstable_NormalPriority,Em=Ye.unstable_LowPriority,dh=Ye.unstable_IdlePriority,Zs=null,kt=null;function Nm(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Zs,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Pm,Cm=Math.log,Rm=Math.LN2;function Pm(e){return e>>>=0,e===0?32:31-(Cm(e)/Rm|0)|0}var Di=64,Wi=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?i=$r(l):(o&=a,o!==0&&(i=$r(o)))}else a=n&~s,a!==0?i=$r(a):o!==0&&(i=$r(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&s)&&(s=i&-i,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-gt(t),s=1<<n,i|=e[n],t&=~s;return i}function Om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-gt(o),l=1<<a,c=s[a];c===-1?(!(l&n)||l&i)&&(s[a]=Om(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uh(){var e=Di;return Di<<=1,!(Di&4194240)&&(Di=64),e}function So(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Mm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-gt(n),o=1<<s;t[s]=0,i[s]=-1,e[s]=-1,n&=~o}}function Al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-gt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}var X=0;function hh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ph,kl,fh,mh,gh,Sa=!1,Ui=[],Zt=null,Jt=null,en=null,oi=new Map,ai=new Map,Vt=[],zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zc(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function Or(e,t,n,i,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Ci(t),t!==null&&kl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Lm(e,t,n,i,s){switch(t){case"focusin":return Zt=Or(Zt,e,t,n,i,s),!0;case"dragenter":return Jt=Or(Jt,e,t,n,i,s),!0;case"mouseover":return en=Or(en,e,t,n,i,s),!0;case"pointerover":var o=s.pointerId;return oi.set(o,Or(oi.get(o)||null,e,t,n,i,s)),!0;case"gotpointercapture":return o=s.pointerId,ai.set(o,Or(ai.get(o)||null,e,t,n,i,s)),!0}return!1}function xh(e){var t=kn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=sh(n),t!==null){e.blockedOn=t,gh(e.priority,function(){fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);va=i,n.target.dispatchEvent(i),va=null}else return t=Ci(n),t!==null&&kl(t),e.blockedOn=n,!1;t.shift()}return!0}function Lc(e,t,n){os(e)&&n.delete(t)}function Im(){Sa=!1,Zt!==null&&os(Zt)&&(Zt=null),Jt!==null&&os(Jt)&&(Jt=null),en!==null&&os(en)&&(en=null),oi.forEach(Lc),ai.forEach(Lc)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sa||(Sa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Im)))}function li(e){function t(s){return Tr(s,e)}if(0<Ui.length){Tr(Ui[0],e);for(var n=1;n<Ui.length;n++){var i=Ui[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Zt!==null&&Tr(Zt,e),Jt!==null&&Tr(Jt,e),en!==null&&Tr(en,e),oi.forEach(t),ai.forEach(t),n=0;n<Vt.length;n++)i=Vt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)xh(n),n.blockedOn===null&&Vt.shift()}var ar=Ft.ReactCurrentBatchConfig,Ss=!0;function Bm(e,t,n,i){var s=X,o=ar.transition;ar.transition=null;try{X=1,Sl(e,t,n,i)}finally{X=s,ar.transition=o}}function Fm(e,t,n,i){var s=X,o=ar.transition;ar.transition=null;try{X=4,Sl(e,t,n,i)}finally{X=s,ar.transition=o}}function Sl(e,t,n,i){if(Ss){var s=Ea(e,t,n,i);if(s===null)Lo(e,t,i,Es,n),zc(e,i);else if(Lm(s,e,t,n,i))i.stopPropagation();else if(zc(e,i),t&4&&-1<zm.indexOf(e)){for(;s!==null;){var o=Ci(s);if(o!==null&&ph(o),o=Ea(e,t,n,i),o===null&&Lo(e,t,i,Es,n),o===s)break;s=o}s!==null&&i.stopPropagation()}else Lo(e,t,i,null,n)}}var Es=null;function Ea(e,t,n,i){if(Es=null,e=bl(i),e=kn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Es=e,null}function wh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sm()){case jl:return 1;case ch:return 4;case As:case Em:return 16;case dh:return 536870912;default:return 16}default:return 16}}var Kt=null,El=null,as=null;function yh(){if(as)return as;var e,t=El,n=t.length,i,s="value"in Kt?Kt.value:Kt.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[o-i];i++);return as=s.slice(e,1<i?1-i:void 0)}function ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Ic(){return!1}function Qe(e){function t(n,i,s,o,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hi:Ic,this.isPropagationStopped=Ic,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Qe(br),Ni=oe({},br,{view:0,detail:0}),Dm=Qe(Ni),Eo,No,Mr,Js=oe({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(Eo=e.screenX-Mr.screenX,No=e.screenY-Mr.screenY):No=Eo=0,Mr=e),Eo)},movementY:function(e){return"movementY"in e?e.movementY:No}}),Bc=Qe(Js),Wm=oe({},Js,{dataTransfer:0}),Um=Qe(Wm),Hm=oe({},Ni,{relatedTarget:0}),Co=Qe(Hm),_m=oe({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=Qe(_m),$m=oe({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vm=Qe($m),qm=oe({},br,{data:0}),Fc=Qe(qm),Km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xm[e])?!!t[e]:!1}function Cl(){return Qm}var Zm=oe({},Ni,{key:function(e){if(e.key){var t=Km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ym[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jm=Qe(Zm),eg=oe({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=Qe(eg),tg=oe({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),ng=Qe(tg),rg=oe({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),ig=Qe(rg),sg=oe({},Js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Qe(sg),ag=[9,13,27,32],Rl=Mt&&"CompositionEvent"in window,Xr=null;Mt&&"documentMode"in document&&(Xr=document.documentMode);var lg=Mt&&"TextEvent"in window&&!Xr,vh=Mt&&(!Rl||Xr&&8<Xr&&11>=Xr),Wc=" ",Uc=!1;function bh(e,t){switch(e){case"keyup":return ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function cg(e,t){switch(e){case"compositionend":return jh(t);case"keypress":return t.which!==32?null:(Uc=!0,Wc);case"textInput":return e=t.data,e===Wc&&Uc?null:e;default:return null}}function dg(e,t){if(Kn)return e==="compositionend"||!Rl&&bh(e,t)?(e=yh(),as=El=Kt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vh&&t.locale!=="ko"?null:t.data;default:return null}}var ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ug[e.type]:t==="textarea"}function Ah(e,t,n,i){eh(i),t=Ns(t,"onChange"),0<t.length&&(n=new Nl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Qr=null,ci=null;function hg(e){zh(e,0)}function eo(e){var t=Qn(e);if(qu(t))return e}function pg(e,t){if(e==="change")return t}var kh=!1;if(Mt){var Ro;if(Mt){var Po="oninput"in document;if(!Po){var _c=document.createElement("div");_c.setAttribute("oninput","return;"),Po=typeof _c.oninput=="function"}Ro=Po}else Ro=!1;kh=Ro&&(!document.documentMode||9<document.documentMode)}function Gc(){Qr&&(Qr.detachEvent("onpropertychange",Sh),ci=Qr=null)}function Sh(e){if(e.propertyName==="value"&&eo(ci)){var t=[];Ah(t,ci,e,bl(e)),ih(hg,t)}}function fg(e,t,n){e==="focusin"?(Gc(),Qr=t,ci=n,Qr.attachEvent("onpropertychange",Sh)):e==="focusout"&&Gc()}function mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eo(ci)}function gg(e,t){if(e==="click")return eo(t)}function xg(e,t){if(e==="input"||e==="change")return eo(t)}function wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:wg;function di(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!la.call(t,s)||!wt(e[s],t[s]))return!1}return!0}function $c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,t){var n=$c(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$c(n)}}function Eh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nh(){for(var e=window,t=vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vs(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yg(e){var t=Nh(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Eh(n.ownerDocument.documentElement,n)){if(i!==null&&Pl(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!e.extend&&o>i&&(s=i,i=o,o=s),s=Vc(n,o);var a=Vc(n,i);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vg=Mt&&"documentMode"in document&&11>=document.documentMode,Yn=null,Na=null,Zr=null,Ca=!1;function qc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ca||Yn==null||Yn!==vs(i)||(i=Yn,"selectionStart"in i&&Pl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zr&&di(Zr,i)||(Zr=i,i=Ns(Na,"onSelect"),0<i.length&&(t=new Nl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Yn)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},Oo={},Ch={};Mt&&(Ch=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function to(e){if(Oo[e])return Oo[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ch)return Oo[e]=t[n];return e}var Rh=to("animationend"),Ph=to("animationiteration"),Oh=to("animationstart"),Th=to("transitionend"),Mh=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Mh.set(e,t),Dn(t,[e])}for(var To=0;To<Kc.length;To++){var Mo=Kc[To],bg=Mo.toLowerCase(),jg=Mo[0].toUpperCase()+Mo.slice(1);un(bg,"on"+jg)}un(Rh,"onAnimationEnd");un(Ph,"onAnimationIteration");un(Oh,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Th,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ag=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function Yc(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,bm(i,t,void 0,e),e.currentTarget=null}function zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&s.isPropagationStopped())break e;Yc(s,l,d),o=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&s.isPropagationStopped())break e;Yc(s,l,d),o=c}}}if(js)throw e=Aa,js=!1,Aa=null,e}function Z(e,t){var n=t[Ma];n===void 0&&(n=t[Ma]=new Set);var i=e+"__bubble";n.has(i)||(Lh(t,e,2,!1),n.add(i))}function zo(e,t,n){var i=0;t&&(i|=4),Lh(n,e,i,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[Gi]){e[Gi]=!0,Hu.forEach(function(n){n!=="selectionchange"&&(Ag.has(n)||zo(n,!1,e),zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,zo("selectionchange",!1,t))}}function Lh(e,t,n,i){switch(wh(t)){case 1:var s=Bm;break;case 4:s=Fm;break;default:s=Sl}n=s.bind(null,t,n,e),s=void 0,!ja||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Lo(e,t,n,i,s){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=kn(l),a===null)return;if(c=a.tag,c===5||c===6){i=o=a;continue e}l=l.parentNode}}i=i.return}ih(function(){var d=o,h=bl(n),u=[];e:{var g=Mh.get(e);if(g!==void 0){var A=Nl,k=e;switch(e){case"keypress":if(ls(n)===0)break e;case"keydown":case"keyup":A=Jm;break;case"focusin":k="focus",A=Co;break;case"focusout":k="blur",A=Co;break;case"beforeblur":case"afterblur":A=Co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Um;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=ng;break;case Rh:case Ph:case Oh:A=Gm;break;case Th:A=ig;break;case"scroll":A=Dm;break;case"wheel":A=og;break;case"copy":case"cut":case"paste":A=Vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Dc}var S=(t&4)!==0,N=!S&&e==="scroll",f=S?g!==null?g+"Capture":null:g;S=[];for(var p=d,m;p!==null;){m=p;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=si(p,f),v!=null&&S.push(hi(p,v,m)))),N)break;p=p.return}0<S.length&&(g=new A(g,k,null,n,h),u.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",g&&n!==va&&(k=n.relatedTarget||n.fromElement)&&(kn(k)||k[zt]))break e;if((A||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,A?(k=n.relatedTarget||n.toElement,A=d,k=k?kn(k):null,k!==null&&(N=Wn(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(A=null,k=d),A!==k)){if(S=Bc,v="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Dc,v="onPointerLeave",f="onPointerEnter",p="pointer"),N=A==null?g:Qn(A),m=k==null?g:Qn(k),g=new S(v,p+"leave",A,n,h),g.target=N,g.relatedTarget=m,v=null,kn(h)===d&&(S=new S(f,p+"enter",k,n,h),S.target=m,S.relatedTarget=N,v=S),N=v,A&&k)t:{for(S=A,f=k,p=0,m=S;m;m=_n(m))p++;for(m=0,v=f;v;v=_n(v))m++;for(;0<p-m;)S=_n(S),p--;for(;0<m-p;)f=_n(f),m--;for(;p--;){if(S===f||f!==null&&S===f.alternate)break t;S=_n(S),f=_n(f)}S=null}else S=null;A!==null&&Xc(u,g,A,S,!1),k!==null&&N!==null&&Xc(u,N,k,S,!0)}}e:{if(g=d?Qn(d):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var b=pg;else if(Hc(g))if(kh)b=xg;else{b=mg;var P=fg}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=gg);if(b&&(b=b(e,d))){Ah(u,b,n,h);break e}P&&P(e,g,d),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&ma(g,"number",g.value)}switch(P=d?Qn(d):window,e){case"focusin":(Hc(P)||P.contentEditable==="true")&&(Yn=P,Na=d,Zr=null);break;case"focusout":Zr=Na=Yn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,qc(u,n,h);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":qc(u,n,h)}var w;if(Rl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Kn?bh(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(vh&&n.locale!=="ko"&&(Kn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Kn&&(w=yh()):(Kt=h,El="value"in Kt?Kt.value:Kt.textContent,Kn=!0)),P=Ns(d,R),0<P.length&&(R=new Fc(R,e,null,n,h),u.push({event:R,listeners:P}),w?R.data=w:(w=jh(n),w!==null&&(R.data=w)))),(w=lg?cg(e,n):dg(e,n))&&(d=Ns(d,"onBeforeInput"),0<d.length&&(h=new Fc("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:d}),h.data=w))}zh(u,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ns(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=si(e,n),o!=null&&i.unshift(hi(e,o,s)),o=si(e,t),o!=null&&i.push(hi(e,o,s))),e=e.return}return i}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,n,i,s){for(var o=t._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,s?(c=si(n,o),c!=null&&a.unshift(hi(n,c,l))):s||(c=si(n,o),c!=null&&a.push(hi(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var kg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(Sg,"")}function $i(e,t,n){if(t=Qc(t),Qc(e)!==t&&n)throw Error(O(425))}function Cs(){}var Ra=null,Pa=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,Eg=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(Cg)}:Ta;function Cg(e){setTimeout(function(){throw e})}function Io(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){e.removeChild(s),li(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);li(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),At="__reactFiber$"+jr,pi="__reactProps$"+jr,zt="__reactContainer$"+jr,Ma="__reactEvents$"+jr,Rg="__reactListeners$"+jr,Pg="__reactHandles$"+jr;function kn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jc(e);e!==null;){if(n=e[At])return n;e=Jc(e)}return t}e=n,n=e.parentNode}return null}function Ci(e){return e=e[At]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function no(e){return e[pi]||null}var za=[],Zn=-1;function hn(e){return{current:e}}function J(e){0>Zn||(e.current=za[Zn],za[Zn]=null,Zn--)}function Q(e,t){Zn++,za[Zn]=e.current,e.current=t}var cn={},Me=hn(cn),Ue=hn(!1),On=cn;function ur(e,t){var n=e.type.contextTypes;if(!n)return cn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function He(e){return e=e.childContextTypes,e!=null}function Rs(){J(Ue),J(Me)}function ed(e,t,n){if(Me.current!==cn)throw Error(O(168));Q(Me,t),Q(Ue,n)}function Ih(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(O(108,fm(e)||"Unknown",s));return oe({},n,i)}function Ps(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,On=Me.current,Q(Me,e),Q(Ue,Ue.current),!0}function td(e,t,n){var i=e.stateNode;if(!i)throw Error(O(169));n?(e=Ih(e,t,On),i.__reactInternalMemoizedMergedChildContext=e,J(Ue),J(Me),Q(Me,e)):J(Ue),Q(Ue,n)}var Rt=null,ro=!1,Bo=!1;function Bh(e){Rt===null?Rt=[e]:Rt.push(e)}function Og(e){ro=!0,Bh(e)}function pn(){if(!Bo&&Rt!==null){Bo=!0;var e=0,t=X;try{var n=Rt;for(X=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Rt=null,ro=!1}catch(s){throw Rt!==null&&(Rt=Rt.slice(e+1)),lh(jl,pn),s}finally{X=t,Bo=!1}}return null}var Jn=[],er=0,Os=null,Ts=0,tt=[],nt=0,Tn=null,Pt=1,Ot="";function jn(e,t){Jn[er++]=Ts,Jn[er++]=Os,Os=e,Ts=t}function Fh(e,t,n){tt[nt++]=Pt,tt[nt++]=Ot,tt[nt++]=Tn,Tn=e;var i=Pt;e=Ot;var s=32-gt(i)-1;i&=~(1<<s),n+=1;var o=32-gt(t)+s;if(30<o){var a=s-s%5;o=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Pt=1<<32-gt(t)+s|n<<s|i,Ot=o+e}else Pt=1<<o|n<<s|i,Ot=e}function Ol(e){e.return!==null&&(jn(e,1),Fh(e,1,0))}function Tl(e){for(;e===Os;)Os=Jn[--er],Jn[er]=null,Ts=Jn[--er],Jn[er]=null;for(;e===Tn;)Tn=tt[--nt],tt[nt]=null,Ot=tt[--nt],tt[nt]=null,Pt=tt[--nt],tt[nt]=null}var Ke=null,qe=null,ee=!1,ft=null;function Dh(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,qe=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Pt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,qe=null,!0):!1;default:return!1}}function La(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ia(e){if(ee){var t=qe;if(t){var n=t;if(!nd(e,t)){if(La(e))throw Error(O(418));t=tn(n.nextSibling);var i=Ke;t&&nd(e,t)?Dh(i,n):(e.flags=e.flags&-4097|2,ee=!1,Ke=e)}}else{if(La(e))throw Error(O(418));e.flags=e.flags&-4097|2,ee=!1,Ke=e}}}function rd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function Vi(e){if(e!==Ke)return!1;if(!ee)return rd(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=qe)){if(La(e))throw Wh(),Error(O(418));for(;t;)Dh(e,t),t=tn(t.nextSibling)}if(rd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ke?tn(e.stateNode.nextSibling):null;return!0}function Wh(){for(var e=qe;e;)e=tn(e.nextSibling)}function hr(){qe=Ke=null,ee=!1}function Ml(e){ft===null?ft=[e]:ft.push(e)}var Tg=Ft.ReactCurrentBatchConfig;function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var i=n.stateNode}if(!i)throw Error(O(147,e));var s=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=s.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function qi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function id(e){var t=e._init;return t(e._payload)}function Uh(e){function t(f,p){if(e){var m=f.deletions;m===null?(f.deletions=[p],f.flags|=16):m.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function i(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function s(f,p){return f=on(f,p),f.index=0,f.sibling=null,f}function o(f,p,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags|=2,p):m):(f.flags|=2,p)):(f.flags|=1048576,p)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,p,m,v){return p===null||p.tag!==6?(p=Go(m,f.mode,v),p.return=f,p):(p=s(p,m),p.return=f,p)}function c(f,p,m,v){var b=m.type;return b===qn?h(f,p,m.props.children,v,m.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gt&&id(b)===p.type)?(v=s(p,m.props),v.ref=zr(f,p,m),v.return=f,v):(v=ms(m.type,m.key,m.props,null,f.mode,v),v.ref=zr(f,p,m),v.return=f,v)}function d(f,p,m,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=$o(m,f.mode,v),p.return=f,p):(p=s(p,m.children||[]),p.return=f,p)}function h(f,p,m,v,b){return p===null||p.tag!==7?(p=Rn(m,f.mode,v,b),p.return=f,p):(p=s(p,m),p.return=f,p)}function u(f,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Go(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ii:return m=ms(p.type,p.key,p.props,null,f.mode,m),m.ref=zr(f,null,p),m.return=f,m;case Vn:return p=$o(p,f.mode,m),p.return=f,p;case Gt:var v=p._init;return u(f,v(p._payload),m)}if(Gr(p)||Rr(p))return p=Rn(p,f.mode,m,null),p.return=f,p;qi(f,p)}return null}function g(f,p,m,v){var b=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:l(f,p,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:return m.key===b?c(f,p,m,v):null;case Vn:return m.key===b?d(f,p,m,v):null;case Gt:return b=m._init,g(f,p,b(m._payload),v)}if(Gr(m)||Rr(m))return b!==null?null:h(f,p,m,v,null);qi(f,m)}return null}function A(f,p,m,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,l(p,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ii:return f=f.get(v.key===null?m:v.key)||null,c(p,f,v,b);case Vn:return f=f.get(v.key===null?m:v.key)||null,d(p,f,v,b);case Gt:var P=v._init;return A(f,p,m,P(v._payload),b)}if(Gr(v)||Rr(v))return f=f.get(m)||null,h(p,f,v,b,null);qi(p,v)}return null}function k(f,p,m,v){for(var b=null,P=null,w=p,R=p=0,C=null;w!==null&&R<m.length;R++){w.index>R?(C=w,w=null):C=w.sibling;var E=g(f,w,m[R],v);if(E===null){w===null&&(w=C);break}e&&w&&E.alternate===null&&t(f,w),p=o(E,p,R),P===null?b=E:P.sibling=E,P=E,w=C}if(R===m.length)return n(f,w),ee&&jn(f,R),b;if(w===null){for(;R<m.length;R++)w=u(f,m[R],v),w!==null&&(p=o(w,p,R),P===null?b=w:P.sibling=w,P=w);return ee&&jn(f,R),b}for(w=i(f,w);R<m.length;R++)C=A(w,f,R,m[R],v),C!==null&&(e&&C.alternate!==null&&w.delete(C.key===null?R:C.key),p=o(C,p,R),P===null?b=C:P.sibling=C,P=C);return e&&w.forEach(function(M){return t(f,M)}),ee&&jn(f,R),b}function S(f,p,m,v){var b=Rr(m);if(typeof b!="function")throw Error(O(150));if(m=b.call(m),m==null)throw Error(O(151));for(var P=b=null,w=p,R=p=0,C=null,E=m.next();w!==null&&!E.done;R++,E=m.next()){w.index>R?(C=w,w=null):C=w.sibling;var M=g(f,w,E.value,v);if(M===null){w===null&&(w=C);break}e&&w&&M.alternate===null&&t(f,w),p=o(M,p,R),P===null?b=M:P.sibling=M,P=M,w=C}if(E.done)return n(f,w),ee&&jn(f,R),b;if(w===null){for(;!E.done;R++,E=m.next())E=u(f,E.value,v),E!==null&&(p=o(E,p,R),P===null?b=E:P.sibling=E,P=E);return ee&&jn(f,R),b}for(w=i(f,w);!E.done;R++,E=m.next())E=A(w,f,R,E.value,v),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?R:E.key),p=o(E,p,R),P===null?b=E:P.sibling=E,P=E);return e&&w.forEach(function(G){return t(f,G)}),ee&&jn(f,R),b}function N(f,p,m,v){if(typeof m=="object"&&m!==null&&m.type===qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:e:{for(var b=m.key,P=p;P!==null;){if(P.key===b){if(b=m.type,b===qn){if(P.tag===7){n(f,P.sibling),p=s(P,m.props.children),p.return=f,f=p;break e}}else if(P.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gt&&id(b)===P.type){n(f,P.sibling),p=s(P,m.props),p.ref=zr(f,P,m),p.return=f,f=p;break e}n(f,P);break}else t(f,P);P=P.sibling}m.type===qn?(p=Rn(m.props.children,f.mode,v,m.key),p.return=f,f=p):(v=ms(m.type,m.key,m.props,null,f.mode,v),v.ref=zr(f,p,m),v.return=f,f=v)}return a(f);case Vn:e:{for(P=m.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=s(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=$o(m,f.mode,v),p.return=f,f=p}return a(f);case Gt:return P=m._init,N(f,p,P(m._payload),v)}if(Gr(m))return k(f,p,m,v);if(Rr(m))return S(f,p,m,v);qi(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=s(p,m),p.return=f,f=p):(n(f,p),p=Go(m,f.mode,v),p.return=f,f=p),a(f)):n(f,p)}return N}var pr=Uh(!0),Hh=Uh(!1),Ms=hn(null),zs=null,tr=null,zl=null;function Ll(){zl=tr=zs=null}function Il(e){var t=Ms.current;J(Ms),e._currentValue=t}function Ba(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){zs=e,zl=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(zs===null)throw Error(O(308));tr=e,zs.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var Sn=null;function Bl(e){Sn===null?Sn=[e]:Sn.push(e)}function _h(e,t,n,i){var s=t.interleaved;return s===null?(n.next=n,Bl(t)):(n.next=s.next,s.next=n),t.interleaved=n,Lt(e,i)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,K&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,Lt(e,n)}return s=i.interleaved,s===null?(t.next=t,Bl(i)):(t.next=s.next,s.next=t),i.interleaved=t,Lt(e,n)}function cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Al(e,n)}}function sd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ls(e,t,n,i){var s=e.updateQueue;$t=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(o!==null){var u=s.baseState;a=0,h=d=c=null,l=o;do{var g=l.lane,A=l.eventTime;if((i&g)===g){h!==null&&(h=h.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,S=l;switch(g=t,A=n,S.tag){case 1:if(k=S.payload,typeof k=="function"){u=k.call(A,u,g);break e}u=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,g=typeof k=="function"?k.call(A,u,g):k,g==null)break e;u=oe({},u,g);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=A,c=u):h=h.next=A,a|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(h===null&&(c=u),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);zn|=a,e.lanes=a,e.memoizedState=u}}function od(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(O(191,s));s.call(i)}}}var Ri={},St=hn(Ri),fi=hn(Ri),mi=hn(Ri);function En(e){if(e===Ri)throw Error(O(174));return e}function Dl(e,t){switch(Q(mi,t),Q(fi,e),Q(St,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xa(t,e)}J(St),Q(St,t)}function fr(){J(St),J(fi),J(mi)}function $h(e){En(mi.current);var t=En(St.current),n=xa(t,e.type);t!==n&&(Q(fi,e),Q(St,n))}function Wl(e){fi.current===e&&(J(St),J(fi))}var re=hn(0);function Is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fo=[];function Ul(){for(var e=0;e<Fo.length;e++)Fo[e]._workInProgressVersionPrimary=null;Fo.length=0}var ds=Ft.ReactCurrentDispatcher,Do=Ft.ReactCurrentBatchConfig,Mn=0,se=null,fe=null,ye=null,Bs=!1,Jr=!1,gi=0,Mg=0;function Ce(){throw Error(O(321))}function Hl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function _l(e,t,n,i,s,o){if(Mn=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ds.current=e===null||e.memoizedState===null?Bg:Fg,e=n(i,s),Jr){o=0;do{if(Jr=!1,gi=0,25<=o)throw Error(O(301));o+=1,ye=fe=null,t.updateQueue=null,ds.current=Dg,e=n(i,s)}while(Jr)}if(ds.current=Fs,t=fe!==null&&fe.next!==null,Mn=0,ye=fe=se=null,Bs=!1,t)throw Error(O(300));return e}function Gl(){var e=gi!==0;return gi=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?se.memoizedState=ye=e:ye=ye.next=e,ye}function ot(){if(fe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ye===null?se.memoizedState:ye.next;if(t!==null)ye=t,fe=e;else{if(e===null)throw Error(O(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ye===null?se.memoizedState=ye=e:ye=ye.next=e}return ye}function xi(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=ot(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var i=fe,s=i.baseQueue,o=n.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}i.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,i=i.baseState;var l=a=null,c=null,d=o;do{var h=d.lane;if((Mn&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var u={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=u,a=i):c=c.next=u,se.lanes|=h,zn|=h}d=d.next}while(d!==null&&d!==o);c===null?a=i:c.next=l,wt(i,t.memoizedState)||(We=!0),t.memoizedState=i,t.baseState=a,t.baseQueue=c,n.lastRenderedState=i}if(e=n.interleaved,e!==null){s=e;do o=s.lane,se.lanes|=o,zn|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Uo(e){var t=ot(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);wt(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Vh(){}function qh(e,t){var n=se,i=ot(),s=t(),o=!wt(i.memoizedState,s);if(o&&(i.memoizedState=s,We=!0),i=i.queue,$l(Xh.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,wi(9,Yh.bind(null,n,i,s,t),void 0,null),be===null)throw Error(O(349));Mn&30||Kh(n,t,s)}return s}function Kh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yh(e,t,n,i){t.value=n,t.getSnapshot=i,Qh(t)&&Zh(e)}function Xh(e,t,n){return n(function(){Qh(t)&&Zh(e)})}function Qh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Zh(e){var t=Lt(e,1);t!==null&&xt(t,e,1,-1)}function ad(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Ig.bind(null,se,e),[t.memoizedState,e]}function wi(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Jh(){return ot().memoizedState}function us(e,t,n,i){var s=jt();se.flags|=e,s.memoizedState=wi(1|t,n,void 0,i===void 0?null:i)}function io(e,t,n,i){var s=ot();i=i===void 0?null:i;var o=void 0;if(fe!==null){var a=fe.memoizedState;if(o=a.destroy,i!==null&&Hl(i,a.deps)){s.memoizedState=wi(t,n,o,i);return}}se.flags|=e,s.memoizedState=wi(1|t,n,o,i)}function ld(e,t){return us(8390656,8,e,t)}function $l(e,t){return io(2048,8,e,t)}function ep(e,t){return io(4,2,e,t)}function tp(e,t){return io(4,4,e,t)}function np(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rp(e,t,n){return n=n!=null?n.concat([e]):null,io(4,4,np.bind(null,t,e),n)}function Vl(){}function ip(e,t){var n=ot();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Hl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function sp(e,t){var n=ot();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Hl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function op(e,t,n){return Mn&21?(wt(n,t)||(n=uh(),se.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function zg(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var i=Do.transition;Do.transition={};try{e(!1),t()}finally{X=n,Do.transition=i}}function ap(){return ot().memoizedState}function Lg(e,t,n){var i=sn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lp(e))cp(t,n);else if(n=_h(e,t,n,i),n!==null){var s=Le();xt(n,e,i,s),dp(n,t,i)}}function Ig(e,t,n){var i=sn(e),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lp(e))cp(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(s.hasEagerState=!0,s.eagerState=l,wt(l,a)){var c=t.interleaved;c===null?(s.next=s,Bl(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=_h(e,t,s,i),n!==null&&(s=Le(),xt(n,e,i,s),dp(n,t,i))}}function lp(e){var t=e.alternate;return e===se||t!==null&&t===se}function cp(e,t){Jr=Bs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dp(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Al(e,n)}}var Fs={readContext:st,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Bg={readContext:st,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:ld,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,us(4194308,4,np.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=jt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Lg.bind(null,se,e),[i.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:ad,useDebugValue:Vl,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=ad(!1),t=e[0];return e=zg.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=se,s=jt();if(ee){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),be===null)throw Error(O(349));Mn&30||Kh(i,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,ld(Xh.bind(null,i,o,e),[e]),i.flags|=2048,wi(9,Yh.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=jt(),t=be.identifierPrefix;if(ee){var n=Ot,i=Pt;n=(i&~(1<<32-gt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=gi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fg={readContext:st,useCallback:ip,useContext:st,useEffect:$l,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:Wo,useRef:Jh,useState:function(){return Wo(xi)},useDebugValue:Vl,useDeferredValue:function(e){var t=ot();return op(t,fe.memoizedState,e)},useTransition:function(){var e=Wo(xi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Vh,useSyncExternalStore:qh,useId:ap,unstable_isNewReconciler:!1},Dg={readContext:st,useCallback:ip,useContext:st,useEffect:$l,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:Uo,useRef:Jh,useState:function(){return Uo(xi)},useDebugValue:Vl,useDeferredValue:function(e){var t=ot();return fe===null?t.memoizedState=e:op(t,fe.memoizedState,e)},useTransition:function(){var e=Uo(xi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Vh,useSyncExternalStore:qh,useId:ap,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fa(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var so={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Le(),s=sn(e),o=Tt(i,s);o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,s),t!==null&&(xt(t,e,s,i),cs(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Le(),s=sn(e),o=Tt(i,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,s),t!==null&&(xt(t,e,s,i),cs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),i=sn(e),s=Tt(n,i);s.tag=2,t!=null&&(s.callback=t),t=nn(e,s,i),t!==null&&(xt(t,e,i,n),cs(t,e,i))}};function cd(e,t,n,i,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,a):t.prototype&&t.prototype.isPureReactComponent?!di(n,i)||!di(s,o):!0}function up(e,t,n){var i=!1,s=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(s=He(t)?On:Me.current,i=t.contextTypes,o=(i=i!=null)?ur(e,s):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function dd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function Da(e,t,n,i){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Fl(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=st(o):(o=He(t)?On:Me.current,s.context=ur(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fa(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&so.enqueueReplaceState(s,s.state,null),Ls(e,n,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var n="",i=t;do n+=pm(i),i=i.return;while(i);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Ho(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wg=typeof WeakMap=="function"?WeakMap:Map;function hp(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Ws||(Ws=!0,Xa=i),Wa(e,t)},n}function pp(e,t,n){n=Tt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;n.payload=function(){return i(s)},n.callback=function(){Wa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wa(e,t),typeof i!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ud(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Wg;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(s.add(n),e=ex.bind(null,e,t,n),t.then(e,e))}function hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pd(e,t,n,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var Ug=Ft.ReactCurrentOwner,We=!1;function ze(e,t,n,i){t.child=e===null?Hh(t,null,n,i):pr(t,e.child,n,i)}function fd(e,t,n,i,s){n=n.render;var o=t.ref;return lr(t,s),i=_l(e,t,n,i,o,s),n=Gl(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,It(e,t,s)):(ee&&n&&Ol(t),t.flags|=1,ze(e,t,i,s),t.child)}function md(e,t,n,i,s){if(e===null){var o=n.type;return typeof o=="function"&&!ec(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fp(e,t,o,i,s)):(e=ms(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(a,i)&&e.ref===t.ref)return It(e,t,s)}return t.flags|=1,e=on(o,i),e.ref=t.ref,e.return=t,t.child=e}function fp(e,t,n,i,s){if(e!==null){var o=e.memoizedProps;if(di(o,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=o,(e.lanes&s)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,It(e,t,s)}return Ua(e,t,n,i,s)}function mp(e,t,n){var i=t.pendingProps,s=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(rr,Ve),Ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(rr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Q(rr,Ve),Ve|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,Q(rr,Ve),Ve|=i;return ze(e,t,s,n),t.child}function gp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ua(e,t,n,i,s){var o=He(n)?On:Me.current;return o=ur(t,o),lr(t,s),n=_l(e,t,n,i,o,s),i=Gl(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,It(e,t,s)):(ee&&i&&Ol(t),t.flags|=1,ze(e,t,n,s),t.child)}function gd(e,t,n,i,s){if(He(n)){var o=!0;Ps(t)}else o=!1;if(lr(t,s),t.stateNode===null)hs(e,t),up(t,n,i),Da(t,n,i,s),i=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=st(d):(d=He(n)?On:Me.current,d=ur(t,d));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==d)&&dd(t,a,i,d),$t=!1;var g=t.memoizedState;a.state=g,Ls(t,i,a,s),c=t.memoizedState,l!==i||g!==c||Ue.current||$t?(typeof h=="function"&&(Fa(t,n,h,i),c=t.memoizedState),(l=$t||cd(t,n,l,i,g,c,d))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=d,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Gh(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:ut(t.type,l),a.props=d,u=t.pendingProps,g=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=He(n)?On:Me.current,c=ur(t,c));var A=n.getDerivedStateFromProps;(h=typeof A=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==u||g!==c)&&dd(t,a,i,c),$t=!1,g=t.memoizedState,a.state=g,Ls(t,i,a,s);var k=t.memoizedState;l!==u||g!==k||Ue.current||$t?(typeof A=="function"&&(Fa(t,n,A,i),k=t.memoizedState),(d=$t||cd(t,n,d,i,g,k,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,k,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,k,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=k),a.props=i,a.state=k,a.context=c,i=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return Ha(e,t,n,i,o,s)}function Ha(e,t,n,i,s,o){gp(e,t);var a=(t.flags&128)!==0;if(!i&&!a)return s&&td(t,n,!1),It(e,t,o);i=t.stateNode,Ug.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&a?(t.child=pr(t,e.child,null,o),t.child=pr(t,null,l,o)):ze(e,t,l,o),t.memoizedState=i.state,s&&td(t,n,!0),t.child}function xp(e){var t=e.stateNode;t.pendingContext?ed(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ed(e,t.context,!1),Dl(e,t.containerInfo)}function xd(e,t,n,i,s){return hr(),Ml(s),t.flags|=256,ze(e,t,n,i),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function wp(e,t,n){var i=t.pendingProps,s=re.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Q(re,s&1),e===null)return Ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=lo(a,i,0,null),e=Rn(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ga(n),t.memoizedState=_a,e):ql(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Hg(e,t,a,i,l,s,n);if(o){o=i.fallback,a=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=c,t.deletions=null):(i=on(s,c),i.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=on(l,o):(o=Rn(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=e.child.memoizedState,a=a===null?Ga(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=_a,i}return o=e.child,e=o.sibling,i=on(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function ql(e,t){return t=lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,n,i){return i!==null&&Ml(i),pr(t,e.child,null,n),e=ql(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hg(e,t,n,i,s,o,a){if(n)return t.flags&256?(t.flags&=-257,i=Ho(Error(O(422))),Ki(e,t,a,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,s=t.mode,i=lo({mode:"visible",children:i.children},s,0,null),o=Rn(o,s,a,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&pr(t,e.child,null,a),t.child.memoizedState=Ga(a),t.memoizedState=_a,o);if(!(t.mode&1))return Ki(e,t,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,o=Error(O(419)),i=Ho(o,i,void 0),Ki(e,t,a,i)}if(l=(a&e.childLanes)!==0,We||l){if(i=be,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Lt(e,s),xt(i,e,s,-1))}return Jl(),i=Ho(Error(O(421))),Ki(e,t,a,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=tx.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,qe=tn(s.nextSibling),Ke=t,ee=!0,ft=null,e!==null&&(tt[nt++]=Pt,tt[nt++]=Ot,tt[nt++]=Tn,Pt=e.id,Ot=e.overflow,Tn=t),t=ql(t,i.children),t.flags|=4096,t)}function wd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ba(e.return,t,n)}function _o(e,t,n,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s)}function yp(e,t,n){var i=t.pendingProps,s=i.revealOrder,o=i.tail;if(ze(e,t,i.children,n),i=re.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,n,t);else if(e.tag===19)wd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Q(re,i),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Is(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),_o(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Is(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}_o(t,!0,n,null,o);break;case"together":_o(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _g(e,t,n){switch(t.tag){case 3:xp(t),hr();break;case 5:$h(t);break;case 1:He(t.type)&&Ps(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;Q(Ms,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Q(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?wp(e,t,n):(Q(re,re.current&1),e=It(e,t,n),e!==null?e.sibling:null);Q(re,re.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return yp(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(re,re.current),i)break;return null;case 22:case 23:return t.lanes=0,mp(e,t,n)}return It(e,t,n)}var vp,$a,bp,jp;vp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$a=function(){};bp=function(e,t,n,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,En(St.current);var o=null;switch(n){case"input":s=pa(e,s),i=pa(e,i),o=[];break;case"select":s=oe({},s,{value:void 0}),i=oe({},i,{value:void 0}),o=[];break;case"textarea":s=ga(e,s),i=ga(e,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Cs)}wa(n,i);var a;n=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ri.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var c=i[d];if(l=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ri.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Z("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};jp=function(e,t,n,i){n!==i&&(t.flags|=4)};function Lr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Gg(e,t,n){var i=t.pendingProps;switch(Tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return He(t.type)&&Rs(),Re(t),null;case 3:return i=t.stateNode,fr(),J(Ue),J(Me),Ul(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ja(ft),ft=null))),$a(e,t),Re(t),null;case 5:Wl(t);var s=En(mi.current);if(n=t.type,e!==null&&t.stateNode!=null)bp(e,t,n,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(O(166));return Re(t),null}if(e=En(St.current),Vi(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[At]=t,i[pi]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",i),Z("close",i);break;case"iframe":case"object":case"embed":Z("load",i);break;case"video":case"audio":for(s=0;s<Vr.length;s++)Z(Vr[s],i);break;case"source":Z("error",i);break;case"img":case"image":case"link":Z("error",i),Z("load",i);break;case"details":Z("toggle",i);break;case"input":Nc(i,o),Z("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Z("invalid",i);break;case"textarea":Rc(i,o),Z("invalid",i)}wa(n,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?i.textContent!==l&&(o.suppressHydrationWarning!==!0&&$i(i.textContent,l,e),s=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&$i(i.textContent,l,e),s=["children",""+l]):ri.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Z("scroll",i)}switch(n){case"input":Bi(i),Cc(i,o,!0);break;case"textarea":Bi(i),Pc(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Cs)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(n,{is:i.is}):(e=a.createElement(n),n==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,n),e[At]=t,e[pi]=i,vp(e,t,!1,!1),t.stateNode=e;e:{switch(a=ya(n,i),n){case"dialog":Z("cancel",e),Z("close",e),s=i;break;case"iframe":case"object":case"embed":Z("load",e),s=i;break;case"video":case"audio":for(s=0;s<Vr.length;s++)Z(Vr[s],e);s=i;break;case"source":Z("error",e),s=i;break;case"img":case"image":case"link":Z("error",e),Z("load",e),s=i;break;case"details":Z("toggle",e),s=i;break;case"input":Nc(e,i),s=pa(e,i),Z("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=oe({},i,{value:void 0}),Z("invalid",e);break;case"textarea":Rc(e,i),s=ga(e,i),Z("invalid",e);break;default:s=i}wa(n,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Ju(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Qu(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ii(e,c):typeof c=="number"&&ii(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ri.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Z("scroll",e):c!=null&&xl(e,o,c,a))}switch(n){case"input":Bi(e),Cc(e,i,!1);break;case"textarea":Bi(e),Pc(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ln(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?ir(e,!!i.multiple,o,!1):i.defaultValue!=null&&ir(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Cs)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)jp(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(O(166));if(n=En(mi.current),En(St.current),Vi(t)){if(i=t.stateNode,n=t.memoizedProps,i[At]=t,(o=i.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:$i(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[At]=t,t.stateNode=i}return Re(t),null;case 13:if(J(re),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&qe!==null&&t.mode&1&&!(t.flags&128))Wh(),hr(),t.flags|=98560,o=!1;else if(o=Vi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[At]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else ft!==null&&(Ja(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?me===0&&(me=3):Jl())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return fr(),$a(e,t),e===null&&ui(t.stateNode.containerInfo),Re(t),null;case 10:return Il(t.type._context),Re(t),null;case 17:return He(t.type)&&Rs(),Re(t),null;case 19:if(J(re),o=t.memoizedState,o===null)return Re(t),null;if(i=(t.flags&128)!==0,a=o.rendering,a===null)if(i)Lr(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Is(e),a!==null){for(t.flags|=128,Lr(o,!1),i=a.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>gr&&(t.flags|=128,i=!0,Lr(o,!1),t.lanes=4194304)}else{if(!i)if(e=Is(a),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ee)return Re(t),null}else 2*le()-o.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,i=!0,Lr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=re.current,Q(re,i?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Zl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Ve&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function $g(e,t){switch(Tl(t),t.tag){case 1:return He(t.type)&&Rs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),J(Ue),J(Me),Ul(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wl(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return fr(),null;case 10:return Il(t.type._context),null;case 22:case 23:return Zl(),null;case 24:return null;default:return null}}var Yi=!1,Oe=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,I=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ae(e,t,i)}else n.current=null}function Va(e,t,n){try{n()}catch(i){ae(e,t,i)}}var yd=!1;function qg(e,t){if(Ra=Ss,e=Nh(),Pl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,h=0,u=e,g=null;t:for(;;){for(var A;u!==n||s!==0&&u.nodeType!==3||(l=a+s),u!==o||i!==0&&u.nodeType!==3||(c=a+i),u.nodeType===3&&(a+=u.nodeValue.length),(A=u.firstChild)!==null;)g=u,u=A;for(;;){if(u===e)break t;if(g===n&&++d===s&&(l=a),g===o&&++h===i&&(c=a),(A=u.nextSibling)!==null)break;u=g,g=u.parentNode}u=A}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pa={focusedElem:e,selectionRange:n},Ss=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,N=k.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:ut(t.type,S),N);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(v){ae(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return k=yd,yd=!1,k}function ei(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Va(t,n,o)}s=s.next}while(s!==i)}}function oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function qa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ap(e){var t=e.alternate;t!==null&&(e.alternate=null,Ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[pi],delete t[Ma],delete t[Rg],delete t[Pg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kp(e){return e.tag===5||e.tag===3||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cs));else if(i!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}function Ya(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}var Ae=null,ht=!1;function Ut(e,t,n){for(n=n.child;n!==null;)Sp(e,t,n),n=n.sibling}function Sp(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Zs,n)}catch{}switch(n.tag){case 5:Oe||nr(n,t);case 6:var i=Ae,s=ht;Ae=null,Ut(e,t,n),Ae=i,ht=s,Ae!==null&&(ht?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(ht?(e=Ae,n=n.stateNode,e.nodeType===8?Io(e.parentNode,n):e.nodeType===1&&Io(e,n),li(e)):Io(Ae,n.stateNode));break;case 4:i=Ae,s=ht,Ae=n.stateNode.containerInfo,ht=!0,Ut(e,t,n),Ae=i,ht=s;break;case 0:case 11:case 14:case 15:if(!Oe&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Va(n,t,a),s=s.next}while(s!==i)}Ut(e,t,n);break;case 1:if(!Oe&&(nr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){ae(n,t,l)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Oe=(i=Oe)||n.memoizedState!==null,Ut(e,t,n),Oe=i):Ut(e,t,n);break;default:Ut(e,t,n)}}function bd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vg),t.forEach(function(i){var s=nx.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ae=l.stateNode,ht=!1;break e;case 3:Ae=l.stateNode.containerInfo,ht=!0;break e;case 4:Ae=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(Ae===null)throw Error(O(160));Sp(o,a,s),Ae=null,ht=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){ae(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ep(t,e),t=t.sibling}function Ep(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),vt(e),i&4){try{ei(3,e,e.return),oo(3,e)}catch(S){ae(e,e.return,S)}try{ei(5,e,e.return)}catch(S){ae(e,e.return,S)}}break;case 1:dt(t,e),vt(e),i&512&&n!==null&&nr(n,n.return);break;case 5:if(dt(t,e),vt(e),i&512&&n!==null&&nr(n,n.return),e.flags&32){var s=e.stateNode;try{ii(s,"")}catch(S){ae(e,e.return,S)}}if(i&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ku(s,o),ya(l,a);var d=ya(l,o);for(a=0;a<c.length;a+=2){var h=c[a],u=c[a+1];h==="style"?Ju(s,u):h==="dangerouslySetInnerHTML"?Qu(s,u):h==="children"?ii(s,u):xl(s,h,u,d)}switch(l){case"input":fa(s,o);break;case"textarea":Yu(s,o);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var A=o.value;A!=null?ir(s,!!o.multiple,A,!1):g!==!!o.multiple&&(o.defaultValue!=null?ir(s,!!o.multiple,o.defaultValue,!0):ir(s,!!o.multiple,o.multiple?[]:"",!1))}s[pi]=o}catch(S){ae(e,e.return,S)}}break;case 6:if(dt(t,e),vt(e),i&4){if(e.stateNode===null)throw Error(O(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(S){ae(e,e.return,S)}}break;case 3:if(dt(t,e),vt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(S){ae(e,e.return,S)}break;case 4:dt(t,e),vt(e);break;case 13:dt(t,e),vt(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Xl=le())),i&4&&bd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(d=Oe)||h,dt(t,e),Oe=d):dt(t,e),vt(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(u=I=h;I!==null;){switch(g=I,A=g.child,g.tag){case 0:case 11:case 14:case 15:ei(4,g,g.return);break;case 1:nr(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){i=g,n=g.return;try{t=i,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(S){ae(i,n,S)}}break;case 5:nr(g,g.return);break;case 22:if(g.memoizedState!==null){Ad(u);continue}}A!==null?(A.return=g,I=A):Ad(u)}h=h.sibling}e:for(h=null,u=e;;){if(u.tag===5){if(h===null){h=u;try{s=u.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=u.stateNode,c=u.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Zu("display",a))}catch(S){ae(e,e.return,S)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(S){ae(e,e.return,S)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:dt(t,e),vt(e),i&4&&bd(e);break;case 21:break;default:dt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kp(n)){var i=n;break e}n=n.return}throw Error(O(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(ii(s,""),i.flags&=-33);var o=vd(e);Ya(e,o,s);break;case 3:case 4:var a=i.stateNode.containerInfo,l=vd(e);Ka(e,l,a);break;default:throw Error(O(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kg(e,t,n){I=e,Np(e)}function Np(e,t,n){for(var i=(e.mode&1)!==0;I!==null;){var s=I,o=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||Yi;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Oe;l=Yi;var d=Oe;if(Yi=a,(Oe=c)&&!d)for(I=s;I!==null;)a=I,c=a.child,a.tag===22&&a.memoizedState!==null?kd(s):c!==null?(c.return=a,I=c):kd(s);for(;o!==null;)I=o,Np(o),o=o.sibling;I=s,Yi=l,Oe=d}jd(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,I=o):jd(e)}}function jd(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||oo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Oe)if(n===null)i.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&od(t,o,i);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}od(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&li(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Oe||t.flags&512&&qa(t)}catch(g){ae(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ad(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function kd(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oo(4,t)}catch(c){ae(t,n,c)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(c){ae(t,s,c)}}var o=t.return;try{qa(t)}catch(c){ae(t,o,c)}break;case 5:var a=t.return;try{qa(t)}catch(c){ae(t,a,c)}}}catch(c){ae(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Yg=Math.ceil,Ds=Ft.ReactCurrentDispatcher,Kl=Ft.ReactCurrentOwner,it=Ft.ReactCurrentBatchConfig,K=0,be=null,he=null,ke=0,Ve=0,rr=hn(0),me=0,yi=null,zn=0,ao=0,Yl=0,ti=null,De=null,Xl=0,gr=1/0,Ct=null,Ws=!1,Xa=null,rn=null,Xi=!1,Yt=null,Us=0,ni=0,Qa=null,ps=-1,fs=0;function Le(){return K&6?le():ps!==-1?ps:ps=le()}function sn(e){return e.mode&1?K&2&&ke!==0?ke&-ke:Tg.transition!==null?(fs===0&&(fs=uh()),fs):(e=X,e!==0||(e=window.event,e=e===void 0?16:wh(e.type)),e):1}function xt(e,t,n,i){if(50<ni)throw ni=0,Qa=null,Error(O(185));Ei(e,n,i),(!(K&2)||e!==be)&&(e===be&&(!(K&2)&&(ao|=n),me===4&&qt(e,ke)),_e(e,i),n===1&&K===0&&!(t.mode&1)&&(gr=le()+500,ro&&pn()))}function _e(e,t){var n=e.callbackNode;Tm(e,t);var i=ks(e,e===be?ke:0);if(i===0)n!==null&&Mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Mc(n),t===1)e.tag===0?Og(Sd.bind(null,e)):Bh(Sd.bind(null,e)),Ng(function(){!(K&6)&&pn()}),n=null;else{switch(hh(i)){case 1:n=jl;break;case 4:n=ch;break;case 16:n=As;break;case 536870912:n=dh;break;default:n=As}n=Lp(n,Cp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cp(e,t){if(ps=-1,fs=0,K&6)throw Error(O(327));var n=e.callbackNode;if(cr()&&e.callbackNode!==n)return null;var i=ks(e,e===be?ke:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Hs(e,i);else{t=i;var s=K;K|=2;var o=Pp();(be!==e||ke!==t)&&(Ct=null,gr=le()+500,Cn(e,t));do try{Zg();break}catch(l){Rp(e,l)}while(!0);Ll(),Ds.current=o,K=s,he!==null?t=0:(be=null,ke=0,t=me)}if(t!==0){if(t===2&&(s=ka(e),s!==0&&(i=s,t=Za(e,s))),t===1)throw n=yi,Cn(e,0),qt(e,i),_e(e,le()),n;if(t===6)qt(e,i);else{if(s=e.current.alternate,!(i&30)&&!Xg(s)&&(t=Hs(e,i),t===2&&(o=ka(e),o!==0&&(i=o,t=Za(e,o))),t===1))throw n=yi,Cn(e,0),qt(e,i),_e(e,le()),n;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(O(345));case 2:An(e,De,Ct);break;case 3:if(qt(e,i),(i&130023424)===i&&(t=Xl+500-le(),10<t)){if(ks(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){Le(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ta(An.bind(null,e,De,Ct),t);break}An(e,De,Ct);break;case 4:if(qt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var a=31-gt(i);o=1<<a,a=t[a],a>s&&(s=a),i&=~o}if(i=s,i=le()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yg(i/1960))-i,10<i){e.timeoutHandle=Ta(An.bind(null,e,De,Ct),i);break}An(e,De,Ct);break;case 5:An(e,De,Ct);break;default:throw Error(O(329))}}}return _e(e,le()),e.callbackNode===n?Cp.bind(null,e):null}function Za(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Hs(e,t),e!==2&&(t=De,De=n,t!==null&&Ja(t)),e}function Ja(e){De===null?De=e:De.push.apply(De,e)}function Xg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],o=s.getSnapshot;s=s.value;try{if(!wt(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~Yl,t&=~ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),i=1<<n;e[n]=-1,t&=~i}}function Sd(e){if(K&6)throw Error(O(327));cr();var t=ks(e,0);if(!(t&1))return _e(e,le()),null;var n=Hs(e,t);if(e.tag!==0&&n===2){var i=ka(e);i!==0&&(t=i,n=Za(e,i))}if(n===1)throw n=yi,Cn(e,0),qt(e,t),_e(e,le()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,De,Ct),_e(e,le()),null}function Ql(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(gr=le()+500,ro&&pn())}}function Ln(e){Yt!==null&&Yt.tag===0&&!(K&6)&&cr();var t=K;K|=1;var n=it.transition,i=X;try{if(it.transition=null,X=1,e)return e()}finally{X=i,it.transition=n,K=t,!(K&6)&&pn()}}function Zl(){Ve=rr.current,J(rr)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Eg(n)),he!==null)for(n=he.return;n!==null;){var i=n;switch(Tl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rs();break;case 3:fr(),J(Ue),J(Me),Ul();break;case 5:Wl(i);break;case 4:fr();break;case 13:J(re);break;case 19:J(re);break;case 10:Il(i.type._context);break;case 22:case 23:Zl()}n=n.return}if(be=e,he=e=on(e.current,null),ke=Ve=t,me=0,yi=null,Yl=ao=zn=0,De=ti=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=s,i.next=a}n.pending=i}Sn=null}return e}function Rp(e,t){do{var n=he;try{if(Ll(),ds.current=Fs,Bs){for(var i=se.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Bs=!1}if(Mn=0,ye=fe=se=null,Jr=!1,gi=0,Kl.current=null,n===null||n.return===null){me=1,yi=t,he=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var A=hd(a);if(A!==null){A.flags&=-257,pd(A,a,l,o,t),A.mode&1&&ud(o,d,t),t=A,c=d;var k=t.updateQueue;if(k===null){var S=new Set;S.add(c),t.updateQueue=S}else k.add(c);break e}else{if(!(t&1)){ud(o,d,t),Jl();break e}c=Error(O(426))}}else if(ee&&l.mode&1){var N=hd(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),pd(N,a,l,o,t),Ml(mr(c,l));break e}}o=c=mr(c,l),me!==4&&(me=2),ti===null?ti=[o]:ti.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=hp(o,c,t);sd(o,f);break e;case 1:l=c;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rn===null||!rn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=pp(o,l,t);sd(o,v);break e}}o=o.return}while(o!==null)}Tp(n)}catch(b){t=b,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Pp(){var e=Ds.current;return Ds.current=Fs,e===null?Fs:e}function Jl(){(me===0||me===3||me===2)&&(me=4),be===null||!(zn&268435455)&&!(ao&268435455)||qt(be,ke)}function Hs(e,t){var n=K;K|=2;var i=Pp();(be!==e||ke!==t)&&(Ct=null,Cn(e,t));do try{Qg();break}catch(s){Rp(e,s)}while(!0);if(Ll(),K=n,Ds.current=i,he!==null)throw Error(O(261));return be=null,ke=0,me}function Qg(){for(;he!==null;)Op(he)}function Zg(){for(;he!==null&&!Am();)Op(he)}function Op(e){var t=zp(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Tp(e):he=t,Kl.current=null}function Tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$g(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,he=null;return}}else if(n=Gg(n,t,Ve),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);me===0&&(me=5)}function An(e,t,n){var i=X,s=it.transition;try{it.transition=null,X=1,Jg(e,t,n,i)}finally{it.transition=s,X=i}return null}function Jg(e,t,n,i){do cr();while(Yt!==null);if(K&6)throw Error(O(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Mm(e,o),e===be&&(he=be=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,Lp(As,function(){return cr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var a=X;X=1;var l=K;K|=4,Kl.current=null,qg(e,n),Ep(n,e),yg(Pa),Ss=!!Ra,Pa=Ra=null,e.current=n,Kg(n),km(),K=l,X=a,it.transition=o}else e.current=n;if(Xi&&(Xi=!1,Yt=e,Us=s),o=e.pendingLanes,o===0&&(rn=null),Nm(n.stateNode),_e(e,le()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Ws)throw Ws=!1,e=Xa,Xa=null,e;return Us&1&&e.tag!==0&&cr(),o=e.pendingLanes,o&1?e===Qa?ni++:(ni=0,Qa=e):ni=0,pn(),null}function cr(){if(Yt!==null){var e=hh(Us),t=it.transition,n=X;try{if(it.transition=null,X=16>e?16:e,Yt===null)var i=!1;else{if(e=Yt,Yt=null,Us=0,K&6)throw Error(O(331));var s=K;for(K|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(I=d;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:ei(8,h,o)}var u=h.child;if(u!==null)u.return=h,I=u;else for(;I!==null;){h=I;var g=h.sibling,A=h.return;if(Ap(h),h===d){I=null;break}if(g!==null){g.return=A,I=g;break}I=A}}}var k=o.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var N=S.sibling;S.sibling=null,S=N}while(S!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ei(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,I=f;break e}I=o.return}}var p=e.current;for(I=p;I!==null;){a=I;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,I=m;else e:for(a=p;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:oo(9,l)}}catch(b){ae(l,l.return,b)}if(l===a){I=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,I=v;break e}I=l.return}}if(K=s,pn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Zs,e)}catch{}i=!0}return i}finally{X=n,it.transition=t}}return!1}function Ed(e,t,n){t=mr(n,t),t=hp(e,t,1),e=nn(e,t,1),t=Le(),e!==null&&(Ei(e,1,t),_e(e,t))}function ae(e,t,n){if(e.tag===3)Ed(e,e,n);else for(;t!==null;){if(t.tag===3){Ed(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rn===null||!rn.has(i))){e=mr(n,e),e=pp(t,e,1),t=nn(t,e,1),e=Le(),t!==null&&(Ei(t,1,e),_e(t,e));break}}t=t.return}}function ex(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(ke&n)===n&&(me===4||me===3&&(ke&130023424)===ke&&500>le()-Xl?Cn(e,0):Yl|=n),_e(e,t)}function Mp(e,t){t===0&&(e.mode&1?(t=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):t=1);var n=Le();e=Lt(e,t),e!==null&&(Ei(e,t,n),_e(e,n))}function tx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mp(e,n)}function nx(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(O(314))}i!==null&&i.delete(t),Mp(e,n)}var zp;zp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,_g(e,t,n);We=!!(e.flags&131072)}else We=!1,ee&&t.flags&1048576&&Fh(t,Ts,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;hs(e,t),e=t.pendingProps;var s=ur(t,Me.current);lr(t,n),s=_l(null,t,i,e,s,n);var o=Gl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(i)?(o=!0,Ps(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Fl(t),s.updater=so,t.stateNode=s,s._reactInternals=t,Da(t,i,e,n),t=Ha(null,t,i,!0,o,n)):(t.tag=0,ee&&o&&Ol(t),ze(null,t,s,n),t=t.child),t;case 16:i=t.elementType;e:{switch(hs(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=ix(i),e=ut(i,e),s){case 0:t=Ua(null,t,i,e,n);break e;case 1:t=gd(null,t,i,e,n);break e;case 11:t=fd(null,t,i,e,n);break e;case 14:t=md(null,t,i,ut(i.type,e),n);break e}throw Error(O(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:ut(i,s),Ua(e,t,i,s,n);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:ut(i,s),gd(e,t,i,s,n);case 3:e:{if(xp(t),e===null)throw Error(O(387));i=t.pendingProps,o=t.memoizedState,s=o.element,Gh(e,t),Ls(t,i,null,n);var a=t.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=mr(Error(O(423)),t),t=xd(e,t,i,n,s);break e}else if(i!==s){s=mr(Error(O(424)),t),t=xd(e,t,i,n,s);break e}else for(qe=tn(t.stateNode.containerInfo.firstChild),Ke=t,ee=!0,ft=null,n=Hh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),i===s){t=It(e,t,n);break e}ze(e,t,i,n)}t=t.child}return t;case 5:return $h(t),e===null&&Ia(t),i=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,Oa(i,s)?a=null:o!==null&&Oa(i,o)&&(t.flags|=32),gp(e,t),ze(e,t,a,n),t.child;case 6:return e===null&&Ia(t),null;case 13:return wp(e,t,n);case 4:return Dl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=pr(t,null,i,n):ze(e,t,i,n),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:ut(i,s),fd(e,t,i,s,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,Q(Ms,i._currentValue),i._currentValue=a,o!==null)if(wt(o.value,a)){if(o.children===s.children&&!Ue.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(o.tag===1){c=Tt(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ba(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(O(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ba(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ze(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,lr(t,n),s=st(s),i=i(s),t.flags|=1,ze(e,t,i,n),t.child;case 14:return i=t.type,s=ut(i,t.pendingProps),s=ut(i.type,s),md(e,t,i,s,n);case 15:return fp(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:ut(i,s),hs(e,t),t.tag=1,He(i)?(e=!0,Ps(t)):e=!1,lr(t,n),up(t,i,s),Da(t,i,s,n),Ha(null,t,i,!0,e,n);case 19:return yp(e,t,n);case 22:return mp(e,t,n)}throw Error(O(156,t.tag))};function Lp(e,t){return lh(e,t)}function rx(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,i){return new rx(e,t,n,i)}function ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ix(e){if(typeof e=="function")return ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yl)return 11;if(e===vl)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ms(e,t,n,i,s,o){var a=2;if(i=e,typeof e=="function")ec(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qn:return Rn(n.children,s,o,t);case wl:a=8,s|=8;break;case ca:return e=rt(12,n,t,s|2),e.elementType=ca,e.lanes=o,e;case da:return e=rt(13,n,t,s),e.elementType=da,e.lanes=o,e;case ua:return e=rt(19,n,t,s),e.elementType=ua,e.lanes=o,e;case $u:return lo(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _u:a=10;break e;case Gu:a=9;break e;case yl:a=11;break e;case vl:a=14;break e;case Gt:a=16,i=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=rt(a,n,t,s),t.elementType=e,t.type=i,t.lanes=o,t}function Rn(e,t,n,i){return e=rt(7,e,i,t),e.lanes=n,e}function lo(e,t,n,i){return e=rt(22,e,i,t),e.elementType=$u,e.lanes=n,e.stateNode={isHidden:!1},e}function Go(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function $o(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sx(e,t,n,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=So(0),this.expirationTimes=So(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function tc(e,t,n,i,s,o,a,l,c){return e=new sx(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(o),e}function ox(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Ip(e){if(!e)return cn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(He(n))return Ih(e,n,t)}return t}function Bp(e,t,n,i,s,o,a,l,c){return e=tc(n,i,!0,e,s,o,a,l,c),e.context=Ip(null),n=e.current,i=Le(),s=sn(n),o=Tt(i,s),o.callback=t??null,nn(n,o,s),e.current.lanes=s,Ei(e,s,i),_e(e,i),e}function co(e,t,n,i){var s=t.current,o=Le(),a=sn(s);return n=Ip(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,a),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=nn(s,t,a),e!==null&&(xt(e,s,a,o),cs(e,s,a)),a}function _s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nc(e,t){Nd(e,t),(e=e.alternate)&&Nd(e,t)}function ax(){return null}var Fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function rc(e){this._internalRoot=e}uo.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));co(e,t,null,null)};uo.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){co(null,e,null,null)}),t[zt]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=mh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&xh(e)}};function ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cd(){}function lx(e,t,n,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var d=_s(a);o.call(d)}}var a=Bp(t,i,e,0,null,!1,!1,"",Cd);return e._reactRootContainer=a,e[zt]=a.current,ui(e.nodeType===8?e.parentNode:e),Ln(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var l=i;i=function(){var d=_s(c);l.call(d)}}var c=tc(e,0,!1,null,null,!1,!1,"",Cd);return e._reactRootContainer=c,e[zt]=c.current,ui(e.nodeType===8?e.parentNode:e),Ln(function(){co(t,c,n,i)}),c}function po(e,t,n,i,s){var o=n._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var c=_s(a);l.call(c)}}co(t,a,e,s)}else a=lx(n,t,e,s,i);return _s(a)}ph=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(Al(t,n|1),_e(t,le()),!(K&6)&&(gr=le()+500,pn()))}break;case 13:Ln(function(){var i=Lt(e,1);if(i!==null){var s=Le();xt(i,e,1,s)}}),nc(e,1)}};kl=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Le();xt(t,e,134217728,n)}nc(e,134217728)}};fh=function(e){if(e.tag===13){var t=sn(e),n=Lt(e,t);if(n!==null){var i=Le();xt(n,e,t,i)}nc(e,t)}};mh=function(){return X};gh=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};ba=function(e,t,n){switch(t){case"input":if(fa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=no(i);if(!s)throw Error(O(90));qu(i),fa(i,s)}}}break;case"textarea":Yu(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};nh=Ql;rh=Ln;var cx={usingClientEntryPoint:!1,Events:[Ci,Qn,no,eh,th,Ql]},Ir={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dx={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oh(e),e===null?null:e.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{Zs=Qi.inject(dx),kt=Qi}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ic(t))throw Error(O(200));return ox(e,t,null,n)};Xe.createRoot=function(e,t){if(!ic(e))throw Error(O(299));var n=!1,i="",s=Fp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=tc(e,1,!1,null,null,n,!1,i,s),e[zt]=t.current,ui(e.nodeType===8?e.parentNode:e),new rc(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=oh(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Ln(e)};Xe.hydrate=function(e,t,n){if(!ho(t))throw Error(O(200));return po(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!ic(e))throw Error(O(405));var i=n!=null&&n.hydratedSources||null,s=!1,o="",a=Fp;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bp(t,null,e,1,n??null,s,!1,o,a),e[zt]=t.current,ui(e),i)for(e=0;e<i.length;e++)n=i[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new uo(t)};Xe.render=function(e,t,n){if(!ho(t))throw Error(O(200));return po(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!ho(e))throw Error(O(40));return e._reactRootContainer?(Ln(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Ql;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!ho(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return po(e,t,n,!1,i)};Xe.version="18.3.1-next-f1338f8080-20240426";function Dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp)}catch(e){console.error(e)}}Dp(),Du.exports=Xe;var ux=Du.exports,Rd=ux;aa.createRoot=Rd.createRoot,aa.hydrateRoot=Rd.hydrateRoot;const hx="modulepreload",px=function(e){return"/"+e},Pd={},fx=function(t,n,i){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=px(c),c in Pd)return;Pd[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":hx,d||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),d)return new Promise((g,A)=>{u.addEventListener("load",g),u.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},vi.apply(null,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const Od="popstate";function mx(e){e===void 0&&(e={});function t(i,s){let{pathname:o,search:a,hash:l}=i.location;return el("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:Gs(s)}return xx(t,n,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gx(){return Math.random().toString(36).substr(2,8)}function Td(e,t){return{usr:e.state,key:e.key,idx:t}}function el(e,t,n,i){return n===void 0&&(n=null),vi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ar(t):t,{state:n,key:t&&t.key||i||gx()})}function Gs(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function xx(e,t,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:o=!1}=i,a=s.history,l=Xt.Pop,c=null,d=h();d==null&&(d=0,a.replaceState(vi({},a.state,{idx:d}),""));function h(){return(a.state||{idx:null}).idx}function u(){l=Xt.Pop;let N=h(),f=N==null?null:N-d;d=N,c&&c({action:l,location:S.location,delta:f})}function g(N,f){l=Xt.Push;let p=el(S.location,N,f);d=h()+1;let m=Td(p,d),v=S.createHref(p);try{a.pushState(m,"",v)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;s.location.assign(v)}o&&c&&c({action:l,location:S.location,delta:1})}function A(N,f){l=Xt.Replace;let p=el(S.location,N,f);d=h();let m=Td(p,d),v=S.createHref(p);a.replaceState(m,"",v),o&&c&&c({action:l,location:S.location,delta:0})}function k(N){let f=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof N=="string"?N:Gs(N);return p=p.replace(/ $/,"%20"),ce(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let S={get action(){return l},get location(){return e(s,a)},listen(N){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Od,u),c=N,()=>{s.removeEventListener(Od,u),c=null}},createHref(N){return t(s,N)},createURL:k,encodeLocation(N){let f=k(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:A,go(N){return a.go(N)}};return S}var Md;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Md||(Md={}));function wx(e,t,n){return n===void 0&&(n="/"),yx(e,t,n)}function yx(e,t,n,i){let s=typeof t=="string"?Ar(t):t,o=sc(s.pathname||"/",n);if(o==null)return null;let a=Up(e);vx(a);let l=null,c=Tx(o);for(let d=0;l==null&&d<a.length;++d)l=Rx(a[d],c);return l}function Up(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(ce(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let d=an([i,c.relativePath]),h=n.concat(c);o.children&&o.children.length>0&&(ce(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Up(o.children,t,h,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:Nx(d,o.index),routesMeta:h})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let c of Hp(o.path))s(o,a,c)}),t}function Hp(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return s?[o,""]:[o];let a=Hp(i.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),s&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function vx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Cx(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const bx=/^:[\w-]+$/,jx=3,Ax=2,kx=1,Sx=10,Ex=-2,zd=e=>e==="*";function Nx(e,t){let n=e.split("/"),i=n.length;return n.some(zd)&&(i+=Ex),t&&(i+=Ax),n.filter(s=>!zd(s)).reduce((s,o)=>s+(bx.test(o)?jx:o===""?kx:Sx),i)}function Cx(e,t){return e.length===t.length&&e.slice(0,-1).every((i,s)=>i===t[s])?e[e.length-1]-t[t.length-1]:0}function Rx(e,t,n){let{routesMeta:i}=e,s={},o="/",a=[];for(let l=0;l<i.length;++l){let c=i[l],d=l===i.length-1,h=o==="/"?t:t.slice(o.length)||"/",u=Px({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h),g=c.route;if(!u)return null;Object.assign(s,u.params),a.push({params:s,pathname:an([o,u.pathname]),pathnameBase:Lx(an([o,u.pathnameBase])),route:g}),u.pathnameBase!=="/"&&(o=an([o,u.pathnameBase]))}return a}function Px(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=Ox(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],a=o.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:i.reduce((d,h,u)=>{let{paramName:g,isOptional:A}=h;if(g==="*"){let S=l[u]||"";a=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const k=l[u];return A&&!k?d[g]=void 0:d[g]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:e}}function Ox(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function Tx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Wp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function Mx(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:s=""}=typeof e=="string"?Ar(e):e,o;return n?(n=_p(n),n.startsWith("/")?o=Ld(n.substring(1),"/"):o=Ld(n,t)):o=t,{pathname:o,search:Ix(i),hash:Bx(s)}}function Ld(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Vo(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function oc(e,t){let n=zx(e);return t?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function ac(e,t,n,i){i===void 0&&(i=!1);let s;typeof e=="string"?s=Ar(e):(s=vi({},e),ce(!s.pathname||!s.pathname.includes("?"),Vo("?","pathname","search",s)),ce(!s.pathname||!s.pathname.includes("#"),Vo("#","pathname","hash",s)),ce(!s.search||!s.search.includes("#"),Vo("#","search","hash",s)));let o=e===""||s.pathname==="",a=o?"/":s.pathname,l;if(a==null)l=n;else{let u=t.length-1;if(!i&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),u-=1;s.pathname=g.join("/")}l=u>=0?t[u]:"/"}let c=Mx(s,l),d=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const _p=e=>e.replace(/\/\/+/g,"/"),an=e=>_p(e.join("/")),Lx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ix=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gp=["post","put","patch","delete"];new Set(Gp);const Dx=["get",...Gp];new Set(Dx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},bi.apply(null,arguments)}const lc=j.createContext(null),Wx=j.createContext(null),fn=j.createContext(null),fo=j.createContext(null),Dt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),$p=j.createContext(null);function Ux(e,t){let{relative:n}=t===void 0?{}:t;kr()||ce(!1);let{basename:i,navigator:s}=j.useContext(fn),{hash:o,pathname:a,search:l}=qp(e,{relative:n}),c=a;return i!=="/"&&(c=a==="/"?i:an([i,a])),s.createHref({pathname:c,search:l,hash:o})}function kr(){return j.useContext(fo)!=null}function Un(){return kr()||ce(!1),j.useContext(fo).location}function Vp(e){j.useContext(fn).static||j.useLayoutEffect(e)}function mn(){let{isDataRoute:e}=j.useContext(Dt);return e?e1():Hx()}function Hx(){kr()||ce(!1);let e=j.useContext(lc),{basename:t,future:n,navigator:i}=j.useContext(fn),{matches:s}=j.useContext(Dt),{pathname:o}=Un(),a=JSON.stringify(oc(s,n.v7_relativeSplatPath)),l=j.useRef(!1);return Vp(()=>{l.current=!0}),j.useCallback(function(d,h){if(h===void 0&&(h={}),!l.current)return;if(typeof d=="number"){i.go(d);return}let u=ac(d,JSON.parse(a),o,h.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:an([t,u.pathname])),(h.replace?i.replace:i.push)(u,h.state,h)},[t,i,a,o,e])}function mo(){let{matches:e}=j.useContext(Dt),t=e[e.length-1];return t?t.params:{}}function qp(e,t){let{relative:n}=t===void 0?{}:t,{future:i}=j.useContext(fn),{matches:s}=j.useContext(Dt),{pathname:o}=Un(),a=JSON.stringify(oc(s,i.v7_relativeSplatPath));return j.useMemo(()=>ac(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function _x(e,t){return Gx(e,t)}function Gx(e,t,n,i){kr()||ce(!1);let{navigator:s}=j.useContext(fn),{matches:o}=j.useContext(Dt),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=Un(),h;if(t){var u;let N=typeof t=="string"?Ar(t):t;c==="/"||(u=N.pathname)!=null&&u.startsWith(c)||ce(!1),h=N}else h=d;let g=h.pathname||"/",A=g;if(c!=="/"){let N=c.replace(/^\//,"").split("/");A="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let k=wx(e,{pathname:A}),S=Yx(k&&k.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:an([c,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:an([c,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,i);return t&&S?j.createElement(fo.Provider,{value:{location:bi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Xt.Pop}},S):S}function $x(){let e=Jx(),t=Fx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:s},n):null,null)}const Vx=j.createElement($x,null);class qx extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Dt.Provider,{value:this.props.routeContext},j.createElement($p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Kx(e){let{routeContext:t,match:n,children:i}=e,s=j.useContext(lc);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Dt.Provider,{value:t},i)}function Yx(e,t,n,i){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=i)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let h=a.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);h>=0||ce(!1),a=a.slice(0,Math.min(a.length,h+1))}let c=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let h=0;h<a.length;h++){let u=a[h];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=h),u.route.id){let{loaderData:g,errors:A}=n,k=u.route.loader&&g[u.route.id]===void 0&&(!A||A[u.route.id]===void 0);if(u.route.lazy||k){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((h,u,g)=>{let A,k=!1,S=null,N=null;n&&(A=l&&u.route.id?l[u.route.id]:void 0,S=u.route.errorElement||Vx,c&&(d<0&&g===0?(t1("route-fallback"),k=!0,N=null):d===g&&(k=!0,N=u.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,g+1)),p=()=>{let m;return A?m=S:k?m=N:u.route.Component?m=j.createElement(u.route.Component,null):u.route.element?m=u.route.element:m=h,j.createElement(Kx,{match:u,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:m})};return n&&(u.route.ErrorBoundary||u.route.errorElement||g===0)?j.createElement(qx,{location:n.location,revalidation:n.revalidation,component:S,error:A,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var Kp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kp||{}),Yp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yp||{});function Xx(e){let t=j.useContext(lc);return t||ce(!1),t}function Qx(e){let t=j.useContext(Wx);return t||ce(!1),t}function Zx(e){let t=j.useContext(Dt);return t||ce(!1),t}function Xp(e){let t=Zx(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function Jx(){var e;let t=j.useContext($p),n=Qx(),i=Xp();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}function e1(){let{router:e}=Xx(Kp.UseNavigateStable),t=Xp(Yp.UseNavigateStable),n=j.useRef(!1);return Vp(()=>{n.current=!0}),j.useCallback(function(s,o){o===void 0&&(o={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,bi({fromRouteId:t},o)))},[e,t])}const Id={};function t1(e,t,n){Id[e]||(Id[e]=!0)}function n1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function xr(e){let{to:t,replace:n,state:i,relative:s}=e;kr()||ce(!1);let{future:o,static:a}=j.useContext(fn),{matches:l}=j.useContext(Dt),{pathname:c}=Un(),d=mn(),h=ac(t,oc(l,o.v7_relativeSplatPath),c,s==="path"),u=JSON.stringify(h);return j.useEffect(()=>d(JSON.parse(u),{replace:n,state:i,relative:s}),[d,u,s,n,i]),null}function ne(e){ce(!1)}function r1(e){let{basename:t="/",children:n=null,location:i,navigationType:s=Xt.Pop,navigator:o,static:a=!1,future:l}=e;kr()&&ce(!1);let c=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:c,navigator:o,static:a,future:bi({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof i=="string"&&(i=Ar(i));let{pathname:h="/",search:u="",hash:g="",state:A=null,key:k="default"}=i,S=j.useMemo(()=>{let N=sc(h,c);return N==null?null:{location:{pathname:N,search:u,hash:g,state:A,key:k},navigationType:s}},[c,h,u,g,A,k,s]);return S==null?null:j.createElement(fn.Provider,{value:d},j.createElement(fo.Provider,{children:n,value:S}))}function i1(e){let{children:t,location:n}=e;return _x(tl(t),n)}new Promise(()=>{});function tl(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(i,s)=>{if(!j.isValidElement(i))return;let o=[...t,s];if(i.type===j.Fragment){n.push.apply(n,tl(i.props.children,o));return}i.type!==ne&&ce(!1),!i.props.index||!i.props.children||ce(!1);let a={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=tl(i.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},nl.apply(null,arguments)}function s1(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}function o1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function a1(e,t){return e.button===0&&(!t||t==="_self")&&!o1(e)}function rl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(s=>[n,s]):[[n,i]])},[]))}function l1(e,t){let n=rl(e);return t&&t.forEach((i,s)=>{n.has(s)||t.getAll(s).forEach(o=>{n.append(s,o)})}),n}const c1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],d1="6";try{window.__reactRouterVersion=d1}catch{}const u1="startTransition",Bd=em[u1];function h1(e){let{basename:t,children:n,future:i,window:s}=e,o=j.useRef();o.current==null&&(o.current=mx({window:s,v5Compat:!0}));let a=o.current,[l,c]=j.useState({action:a.action,location:a.location}),{v7_startTransition:d}=i||{},h=j.useCallback(u=>{d&&Bd?Bd(()=>c(u)):c(u)},[c,d]);return j.useLayoutEffect(()=>a.listen(h),[a,h]),j.useEffect(()=>n1(i),[i]),j.createElement(r1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:i})}const p1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B=j.forwardRef(function(t,n){let{onClick:i,relative:s,reloadDocument:o,replace:a,state:l,target:c,to:d,preventScrollReset:h,viewTransition:u}=t,g=s1(t,c1),{basename:A}=j.useContext(fn),k,S=!1;if(typeof d=="string"&&f1.test(d)&&(k=d,p1))try{let m=new URL(window.location.href),v=d.startsWith("//")?new URL(m.protocol+d):new URL(d),b=sc(v.pathname,A);v.origin===m.origin&&b!=null?d=b+v.search+v.hash:S=!0}catch{}let N=Ux(d,{relative:s}),f=m1(d,{replace:a,state:l,target:c,preventScrollReset:h,relative:s,viewTransition:u});function p(m){i&&i(m),m.defaultPrevented||f(m)}return j.createElement("a",nl({},g,{href:k||N,onClick:S||o?i:p,ref:n,target:c}))});var Fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fd||(Fd={}));var Dd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dd||(Dd={}));function m1(e,t){let{target:n,replace:i,state:s,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,c=mn(),d=Un(),h=qp(e,{relative:a});return j.useCallback(u=>{if(a1(u,n)){u.preventDefault();let g=i!==void 0?i:Gs(d)===Gs(h);c(e,{replace:g,state:s,preventScrollReset:o,relative:a,viewTransition:l})}},[d,c,h,i,s,n,e,o,a,l])}function cc(e){let t=j.useRef(rl(e)),n=j.useRef(!1),i=Un(),s=j.useMemo(()=>l1(i.search,n.current?null:t.current),[i.search]),o=mn(),a=j.useCallback((l,c)=>{const d=rl(typeof l=="function"?l(s):l);n.current=!0,o("?"+d,c)},[o,s]);return[s,a]}function Qp(e,t){return function(){return e.apply(t,arguments)}}const{toString:g1}=Object.prototype,{getPrototypeOf:dn}=Object,{iterator:Pi,toStringTag:Zp}=Symbol,ji=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Jp=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),ef=(e,t,n)=>e===Object.prototype||!n&&t===null,x1=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(n=>{if(Jp(n))return!1;const i=Object.getOwnPropertyDescriptor(e,n);return!!i&&i.configurable&&i.writable===!0})},Ai=(e,t)=>{let n=e;const i=[];for(;n!=null;){if(i.indexOf(n)!==-1)return!1;i.push(n);const s=dn(n);if(ef(n,s,n===e))return!1;if(ji(n,t))return!0;n=s}return!1},w1=(e,t)=>e!=null&&Ai(e,t)?e[t]:void 0,y1=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const t=dn(e);if(t===null&&x1(e))return e;const n=Object.create(null),i=Object.create(null),s=[];let o=e;for(;o!=null&&s.indexOf(o)===-1;){s.push(o);const a=o===e?t:dn(o);if(ef(o,a,o===e))break;const l=Object.getOwnPropertyNames(o);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(o));for(const c of l)Jp(c)||ji(i,c)||(n[c]=e[c],i[c]=!0);o=a}return n},dc=(e=>t=>{const n=g1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),at=e=>(e=e.toLowerCase(),t=>dc(t)===e),go=e=>t=>typeof t===e,{isArray:In}=Array,Bn=go("undefined");function Sr(e){return e!==null&&!Bn(e)&&e.constructor!==null&&!Bn(e.constructor)&&Ge(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const tf=at("ArrayBuffer");function v1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&tf(e.buffer),t}const b1=go("string"),Ge=go("function"),nf=go("number"),Er=e=>e!==null&&typeof e=="object",j1=e=>e===!0||e===!1,gs=e=>{if(!Er(e))return!1;const t=dn(e);return(t===null||t===Object.prototype||dn(t)===null)&&!Ai(e,Zp)&&!Ai(e,Pi)},A1=e=>{if(!Er(e)||Sr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},k1=at("Date"),S1=at("File"),E1=e=>!!(e&&typeof e.uri<"u"),N1=e=>e&&typeof e.getParts<"u",C1=at("Blob"),R1=at("FileList"),P1=at("Set"),O1=e=>Er(e)&&Ge(e.pipe);function T1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Wd=T1(),Ud=typeof Wd.FormData<"u"?Wd.FormData:void 0,M1=e=>{if(!e)return!1;if(Ud&&e instanceof Ud)return!0;const t=dn(e);if(!t||t===Object.prototype||!Ge(e.append))return!1;const n=dc(e);return n==="formdata"||n==="object"&&Ge(e.toString)&&e.toString()==="[object FormData]"},z1=at("URLSearchParams"),[L1,I1,B1,F1]=["ReadableStream","Request","Response","Headers"].map(at),D1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Oi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),In(e))for(i=0,s=e.length;i<s;i++)t.call(null,e[i],i,e);else{if(Sr(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(i=0;i<a;i++)l=o[i],t.call(null,e[l],l,e)}}function rf(e,t){if(Sr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let i=n.length,s;for(;i-- >0;)if(s=n[i],t===s.toLowerCase())return s;return null}const Nn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sf=e=>!Bn(e)&&e!==Nn;function il(...e){const{caseless:t,skipUndefined:n}=sf(this)&&this||{},i={},s=(o,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const l=t&&typeof a=="string"&&rf(i,a)||a,c=ji(i,l)?i[l]:void 0;gs(c)&&gs(o)?i[l]=il(c,o):gs(o)?i[l]=il({},o):In(o)?i[l]=o.slice():(!n||!Bn(o))&&(i[l]=o)};for(let o=0,a=e.length;o<a;o++){const l=e[o];if(!l||Sr(l)||(Oi(l,s),typeof l!="object"||In(l)))continue;const c=Object.getOwnPropertySymbols(l);for(let d=0;d<c.length;d++){const h=c[d];Q1.call(l,h)&&s(l[h],h)}}return i}const W1=(e,t,n,{allOwnKeys:i}={})=>(Oi(t,(s,o)=>{n&&Ge(s)?Object.defineProperty(e,o,{__proto__:null,value:Qp(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),e),U1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),H1=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},_1=(e,t,n,i)=>{let s,o,a;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)a=s[o],(!i||i(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&dn(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},G1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return i!==-1&&i===n},$1=e=>{if(!e)return null;if(In(e))return e;let t=e.length;if(!nf(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},V1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&dn(Uint8Array)),q1=(e,t)=>{const i=(e&&e[Pi]).call(e);let s;for(;(s=i.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},K1=(e,t)=>{let n;const i=[];for(;(n=e.exec(t))!==null;)i.push(n);return i},Y1=at("HTMLFormElement"),X1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:Q1}=Object.prototype,Z1=at("RegExp"),of=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};Oi(n,(s,o)=>{let a;(a=t(s,o,e))!==!1&&(i[o]=a||s)}),Object.defineProperties(e,i)},J1=e=>{of(e,(t,n)=>{if(Ge(e)&&["arguments","caller","callee"].includes(n))return!1;const i=e[n];if(Ge(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},e0=(e,t)=>{const n={},i=s=>{s.forEach(o=>{n[o]=!0})};return In(e)?i(e):i(String(e).split(t)),n},t0=()=>{},n0=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function r0(e){return!!(e&&Ge(e.append)&&e[Zp]==="FormData"&&e[Pi])}const i0=e=>{const t=new WeakSet,n=i=>{if(Er(i)){if(t.has(i))return;if(Sr(i))return i;if(!("toJSON"in i)){t.add(i);let s;if(P1(i)){s=[];for(const o of i){const a=n(o);!Bn(a)&&s.push(a)}}else s=In(i)?[]:{},Oi(i,(o,a)=>{const l=n(o);!Bn(l)&&(s[a]=l)});return t.delete(i),s}}return i};return n(e)},s0=at("AsyncFunction"),o0=e=>e&&(Er(e)||Ge(e))&&Ge(e.then)&&Ge(e.catch),af=((e,t)=>e?setImmediate:t?((n,i)=>(Nn.addEventListener("message",({source:s,data:o})=>{s===Nn&&o===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Nn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ge(Nn.postMessage)),a0=typeof queueMicrotask<"u"?queueMicrotask.bind(Nn):typeof process<"u"&&process.nextTick||af,lf=e=>e!=null&&Ge(e[Pi]),l0=e=>e!=null&&Ai(e,Pi)&&lf(e),y={isArray:In,isArrayBuffer:tf,isBuffer:Sr,isFormData:M1,isArrayBufferView:v1,isString:b1,isNumber:nf,isBoolean:j1,isObject:Er,isPlainObject:gs,isEmptyObject:A1,isReadableStream:L1,isRequest:I1,isResponse:B1,isHeaders:F1,isUndefined:Bn,isDate:k1,isFile:S1,isReactNativeBlob:E1,isReactNative:N1,isBlob:C1,isRegExp:Z1,isFunction:Ge,isStream:O1,isURLSearchParams:z1,isTypedArray:V1,isFileList:R1,forEach:Oi,merge:il,extend:W1,trim:D1,stripBOM:U1,inherits:H1,toFlatObject:_1,kindOf:dc,kindOfTest:at,endsWith:G1,toArray:$1,forEachEntry:q1,matchAll:K1,isHTMLForm:Y1,hasOwnProperty:ji,hasOwnProp:ji,hasOwnInPrototypeChain:Ai,getSafeProp:w1,toSafeFlatObject:y1,reduceDescriptors:of,freezeMethods:J1,toObjectSet:e0,toCamelCase:X1,noop:t0,toFiniteNumber:n0,findKey:rf,global:Nn,isContextDefined:sf,isSpecCompliantForm:r0,toJSONObject:i0,isAsyncFn:s0,isThenable:o0,setImmediate:af,asap:a0,isIterable:lf,isSafeIterable:l0},c0=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),d0=e=>{const t={};let n,i,s;return e&&e.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),i=a.substring(s+1).trim();const l=y.hasOwnProp(t,n);!n||l&&y.hasOwnProp(c0,n)||(n==="set-cookie"?l?t[n].push(i):t[n]=[i]:t[n]=l?t[n]+", "+i:i)}),t};function u0(e){let t=0,n=e.length;for(;t<n;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;n>t;){const i=e.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const h0=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),p0=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function uc(e,t){return y.isArray(e)?e.map(n=>uc(n,t)):u0(String(e).replace(t,""))}const f0=e=>uc(e,h0),m0=e=>uc(e,p0);function cf(e){const t=Object.create(null);return y.forEach(e.toJSON(),(n,i)=>{t[i]=m0(n)}),t}const Hd=Symbol("internals");function Br(e){return e&&String(e).trim().toLowerCase()}function xs(e){return e===!1||e==null?e:y.isArray(e)?e.map(xs):f0(String(e))}function g0(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}const x0=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function qo(e){let t=0,n=e.length;for(;t<n;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;n>t;){const i=e.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}function w0(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n="";for(let i=1;i<t;i++){const s=e.charCodeAt(i);if(s===34||s===92&&(i+=1,i>=t))return e;n+=e[i]}return n}function y0(e){const t=Object.create(null),n=String(e);let i=0,s=!1,o=!1;function a(l){const c=qo(n.slice(i,l)),d=c.indexOf("=");if(d<1)return;const h=qo(c.slice(0,d));if(!x0.test(h))return;const u=h.toLowerCase();if(u==="__proto__"||u==="constructor"||u==="prototype")return;const g=qo(c.slice(d+1));t[u]=w0(g)}for(let l=0;l<n.length;l++){const c=n.charCodeAt(l);s?o?o=!1:c===92?o=!0:c===34&&(s=!1):c===34?s=!0:(c===44||c===59)&&(a(l),i=l+1)}return a(n.length),t}const v0=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ko(e,t,n,i,s){if(y.isFunction(i))return i.call(this,t,n);if(s&&(t=n),!!y.isString(t)){if(y.isString(i))return t.indexOf(i)!==-1;if(y.isRegExp(i))return i.test(t)}}function b0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,i)=>n.toUpperCase()+i)}function j0(e,t){const n=y.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+n,{__proto__:null,value:function(s,o,a){return this[i].call(this,t,s,o,a)},configurable:!0})})}let Te=class{constructor(t){t&&this.set(t)}set(t,n,i){const s=this;function o(l,c,d){const h=Br(c);if(!h)return;const u=y.findKey(s,h);(!u||s[u]===void 0||d===!0||d===void 0&&s[u]!==!1)&&(s[u||c]=xs(l))}const a=(l,c)=>y.forEach(l,(d,h)=>o(d,h,c));if(y.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(y.isString(t)&&(t=t.trim())&&!v0(t))a(d0(t),n);else if(y.isObject(t)&&y.isSafeIterable(t)){let l=Object.create(null),c,d;for(const h of t){if(!y.isArray(h))throw new TypeError("Object iterator must return a key-value pair");d=h[0],y.hasOwnProp(l,d)?(c=l[d],l[d]=y.isArray(c)?[...c,h[1]]:[c,h[1]]):l[d]=h[1]}a(l,n)}else t!=null&&o(n,t,i);return this}get(t,n){if(t=Br(t),t){const i=y.findKey(this,t);if(i){const s=this[i];if(!n)return s;if(n===!0)return g0(s);if(y.isFunction(n))return n.call(this,s,i);if(y.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Br(t),t){const i=y.findKey(this,t);return!!(i&&this[i]!==void 0&&(!n||Ko(this,this[i],i,n)))}return!1}delete(t,n){const i=this;let s=!1;function o(a){if(a=Br(a),a){const l=y.findKey(i,a);l&&(!n||Ko(i,i[l],l,n))&&(delete i[l],s=!0)}}return y.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const o=n[i];(!t||Ko(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,i={};return y.forEach(this,(s,o)=>{const a=y.findKey(i,o);if(a){n[a]=xs(s),delete n[o];return}const l=t?b0(o):String(o).trim();l!==o&&delete n[o],n[l]=xs(s),i[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return y.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=t&&y.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return y.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return y0(t)}static concat(t,...n){const i=new this(t);return n.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[Hd]=this[Hd]={accessors:{}}).accessors,s=this.prototype;function o(a){const l=Br(a);i[l]||(j0(s,a),i[l]=!0)}return y.isArray(t)?t.forEach(o):o(t),this}};Te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(Te.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[n]=i}}});y.freezeMethods(Te);const $s="[REDACTED ****]";function A0(e){if(y.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(y.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function k0(e,t){const n=new Set(t.map(o=>String(o).toLowerCase())),i=[],s=o=>{if(o===null||typeof o!="object"||y.isBuffer(o))return o;if(i.indexOf(o)!==-1)return;o instanceof Te&&(o=o.toJSON()),i.push(o);let a;if(y.isArray(o))a=[],o.forEach((l,c)=>{const d=s(l);y.isUndefined(d)||(a[c]=d)});else{if(!y.isPlainObject(o)&&A0(o))return i.pop(),o;a=Object.create(null);for(const[l,c]of Object.entries(o)){const d=n.has(l.toLowerCase())?$s:s(c);y.isUndefined(d)||(a[l]=d)}}return i.pop(),a};return s(e)}function _d(e){try{return String(e)}catch{return""}}function S0(e){return e.errors.map(n=>{try{return n&&n.message?_d(n.message):_d(n)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let z=class df extends Error{static from(t,n,i,s,o,a){let l=t.message;!l&&y.isArray(t.errors)&&t.errors.length&&(l=S0(t));const c=new df(l,n||t.code,i,s,o);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),a&&Object.assign(c,a),c}constructor(t,n,i,s,o){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),o&&(this.response=o,this.status=o.status)}toJSON(){const t=this.config,n=t&&y.hasOwnProp(t,"redact")?t.redact:void 0,i=y.isArray(n)&&n.length>0?k0(t,n):y.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};z.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";z.ERR_BAD_OPTION="ERR_BAD_OPTION";z.ECONNABORTED="ECONNABORTED";z.ETIMEDOUT="ETIMEDOUT";z.ECONNREFUSED="ECONNREFUSED";z.ERR_NETWORK="ERR_NETWORK";z.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";z.ERR_DEPRECATED="ERR_DEPRECATED";z.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";z.ERR_BAD_REQUEST="ERR_BAD_REQUEST";z.ERR_CANCELED="ERR_CANCELED";z.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";z.ERR_INVALID_URL="ERR_INVALID_URL";z.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const E0=null,uf=100;function sl(e){return y.isPlainObject(e)||y.isArray(e)}function hf(e){return y.endsWith(e,"[]")?e.slice(0,-2):e}function Yo(e,t,n){return e?e.concat(t).map(function(s,o){return s=hf(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function N0(e){return y.isArray(e)&&!e.some(sl)}const C0=y.toFlatObject(y,{},null,function(t){return/^is[A-Z]/.test(t)});function xo(e,t,n){if(!y.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(p,m)=>{const v=y.getSafeProp(n,p);return y.isUndefined(v)?m:v},s=i("metaTokens",!0),o=i("visitor")||S,a=i("dots",!1),l=i("indexes",!1),c=i("Blob")||typeof Blob<"u"&&Blob,d=i("maxDepth",uf),h=c&&y.isSpecCompliantForm(t),u=[];if(!y.isFunction(o))throw new TypeError("visitor must be a function");function g(p){if(p===null)return"";if(y.isDate(p))return p.toISOString();if(y.isBoolean(p))return p.toString();if(!h&&y.isBlob(p))throw new z("Blob is not supported. Use a Buffer instead.");if(y.isArrayBuffer(p)||y.isTypedArray(p)){if(h&&typeof c=="function")return new c([p]);throw new z("Blob is not supported. Use a Buffer instead.",z.ERR_NOT_SUPPORT)}return p}function A(p){if(p>d)throw new z("Object is too deeply nested ("+p+" levels). Max depth: "+d,z.ERR_FORM_DATA_DEPTH_EXCEEDED)}function k(p,m){if(d===1/0)return JSON.stringify(p);const v=[];return JSON.stringify(p,function(P,w){if(!y.isObject(w))return w;for(;v.length&&v[v.length-1]!==this;)v.pop();return v.push(w),A(m+v.length-1),w})}function S(p,m,v){let b=p;if(y.isReactNative(t)&&y.isReactNativeBlob(p))return t.append(Yo(v,m,a),g(p)),!1;if(p&&!v&&typeof p=="object"){if(y.endsWith(m,"{}"))m=s?m:m.slice(0,-2),p=k(p,1);else if(y.isArray(p)&&N0(p)||(y.isFileList(p)||y.endsWith(m,"[]"))&&(b=y.toArray(p)))return m=hf(m),b.forEach(function(w,R){!(y.isUndefined(w)||w===null)&&t.append(l===!0?Yo([m],R,a):l===null?m:m+"[]",g(w))}),!1}return sl(p)?!0:(t.append(Yo(v,m,a),g(p)),!1)}const N=Object.assign(C0,{defaultVisitor:S,convertValue:g,isVisitable:sl});function f(p,m,v=0){if(!y.isUndefined(p)){if(A(v),u.indexOf(p)!==-1)throw new Error("Circular reference detected in "+m.join("."));u.push(p),y.forEach(p,function(P,w){(!(y.isUndefined(P)||P===null)&&o.call(t,P,y.isString(w)?w.trim():w,m,N))===!0&&f(P,m?m.concat(w):[w],v+1)}),u.pop()}}if(!y.isObject(e))throw new TypeError("data must be an object");return f(e),t}function Gd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(i){return t[i]})}function hc(e,t){this._pairs=[],e&&xo(e,this,t)}const pf=hc.prototype;pf.append=function(t,n){this._pairs.push([t,n])};pf.toString=function(t){const n=t?i=>t.call(this,i,Gd):Gd;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function R0(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ff(e,t,n){if(!t)return e;e=e||"";const i=y.isFunction(n)?{serialize:n}:n,s=y.getSafeProp(i,"encode")||R0,o=y.getSafeProp(i,"serialize");let a;if(o?a=o(t,i):a=y.isURLSearchParams(t)?t.toString():new hc(t,i).toString(s),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}const Fr=Symbol("internals");function mf(e){return e?e.length:0}function $d(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function Dr(e,t){const n=e.handlers,i=mf(n);n!==t.handlersRef?(t.handlersRef=n,t.handlerEntries.clear()):i!==t.handlersLength&&(i?t.handlerEntries.forEach(function(o,a){n[o.index]!==o.handler&&t.handlerEntries.delete(a)}):t.handlerEntries.clear()),t.handlersLength=i}class Vd{constructor(){this.handlers=[],this[Fr]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(t,n,i){const s={fulfilled:t,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},o=this[Fr];this.handlers==null&&(this.handlers=[]),Dr(this,o);const a=o.nextId++;return this.handlers.push(s),o.handlerEntries.set(a,{handler:s,index:this.handlers.length-1}),o.handlersLength=this.handlers.length,a}eject(t){const n=this[Fr];Dr(this,n);const i=n.handlerEntries.get(t);if(i){if(n.handlerEntries.delete(t),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||($d(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Dr(this,this[Fr]))}forEach(t){const n=this[Fr];Dr(this,n),n.iterationDepth++;try{y.forEach(this.handlers,function(s){s!==null&&t(s)})}finally{--n.iterationDepth||(Dr(this,n),$d(this.handlers),n.handlersLength=mf(this.handlers))}}}const pc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},P0=typeof URLSearchParams<"u"?URLSearchParams:hc,O0=typeof FormData<"u"?FormData:null,T0=typeof Blob<"u"?Blob:null,M0={isBrowser:!0,classes:{URLSearchParams:P0,FormData:O0,Blob:T0},protocols:["http","https","file","blob","url","data"]},fc=typeof window<"u"&&typeof document<"u",ol=typeof navigator=="object"&&navigator||void 0,z0=fc&&(!ol||["ReactNative","NativeScript","NS"].indexOf(ol.product)<0),L0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",I0=fc&&window.location.href||"http://localhost",B0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fc,hasStandardBrowserEnv:z0,hasStandardBrowserWebWorkerEnv:L0,navigator:ol,origin:I0},Symbol.toStringTag,{value:"Module"})),ve={...B0,...M0};function F0(e,t){return xo(e,new ve.classes.URLSearchParams,{visitor:function(n,i,s,o){return ve.isNode&&y.isBuffer(n)?(this.append(i,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}const qd=uf;function gf(e){if(e>qd)throw new z("FormData field is too deeply nested ("+e+" levels). Max depth: "+qd,z.ERR_FORM_DATA_DEPTH_EXCEEDED)}function D0(e){const t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(e))!==null;)gf(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function W0(e){const t={},n=Object.keys(e);let i;const s=n.length;let o;for(i=0;i<s;i++)o=n[i],t[o]=e[o];return t}function xf(e){function t(n,i,s,o){gf(o);let a=n[o++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=o>=n.length;return a=!a&&y.isArray(s)?s.length:a,c?(y.hasOwnProp(s,a)?s[a]=y.isArray(s[a])?s[a].concat(i):[s[a],i]:s[a]=i,!l):((!y.hasOwnProp(s,a)||!y.isObject(s[a]))&&(s[a]=[]),t(n,i,s[a],o)&&y.isArray(s[a])&&(s[a]=W0(s[a])),!l)}if(y.isFormData(e)&&y.isFunction(e.entries)){const n={};return y.forEachEntry(e,(i,s)=>{t(D0(i),s,n,0)}),n}return null}const wf=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Gn=(e,t)=>e!=null&&y.hasOwnProp(e,t)?e[t]:void 0;function U0(e,t,n){if(y.isString(e))try{return(t||JSON.parse)(e),y.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(e)}const Ti={transitional:pc,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,o=y.isObject(t);if(o&&y.isHTMLForm(t)&&(t=new FormData(t)),y.isFormData(t))return s?JSON.stringify(xf(t)):t;if(y.isArrayBuffer(t)||y.isBuffer(t)||y.isStream(t)||y.isFile(t)||y.isBlob(t)||y.isReadableStream(t))return t;if(y.isArrayBufferView(t))return t.buffer;if(y.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){const c=Gn(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return F0(t,c).toString();if((l=y.isFileList(t))||i.indexOf("multipart/form-data")>-1){const d=Gn(this,"env"),h=d&&d.FormData;return xo(l?{"files[]":t}:t,h&&new h,c)}}return o||s?(n.setContentType("application/json",!1),U0(t)):t}],transformResponse:[function(t){const n=Gn(this,"transitional")||Ti.transitional,i=n&&n.forcedJSONParsing,s=Gn(this,"responseType"),o=s==="json";if(y.isResponse(t)||y.isReadableStream(t))return t;if(t&&y.isString(t)&&(i&&!s||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,Gn(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?z.from(c,z.ERR_BAD_RESPONSE,this,null,Gn(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ve.classes.FormData,Blob:ve.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(wf,e=>{Ti.headers[e]={}});function Xo(e,t){const n=this||Ti,i=t||n,s=Te.from(i.headers);let o=i.data;return y.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function yf(e){return!!(e&&e.__CANCEL__)}let Mi=class extends z{constructor(t,n,i){super(t??"canceled",z.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function vf(e,t,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(new z("Request failed with status code "+n.status,n.status>=400&&n.status<500?z.ERR_BAD_REQUEST:z.ERR_BAD_RESPONSE,n.config,n.request,n))}const H0=/[\t\n\r]/g;function bf(e){if(typeof e!="string")return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(H0,"")}function Qo(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function _0(e,t){e=e||10;const n=new Array(e),i=new Array(e);let s=0,o=0,a;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),h=i[o];a||(a=d),n[s]=c,i[s]=d;let u=o,g=0;for(;u!==s;)g+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),d-a<t)return;const A=h&&d-h;return A?Math.round(g*1e3/A):void 0}}function G0(e,t){let n=0,i=1e3/t,s,o;const a=(h,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e(...h)};return[(...h)=>{const u=Date.now(),g=u-n;g>=i?a(h,u):(s=h,o||(o=setTimeout(()=>{o=null,a(s)},i-g)))},()=>s&&a(s),(...h)=>a(h)]}const Vs=(e,t,n=3)=>{let i=0;const s=_0(50,250);return G0(o=>{if(!o||!y.isNumber(o.loaded))return;const a=o.loaded,l=o.lengthComputable?o.total:void 0,c=Math.max(0,l!=null?Math.min(a,l):a),d=Math.max(0,c-i),h=s(d);i=Math.max(i,c);const u={loaded:c,total:l,progress:l?c/l:void 0,bytes:d,rate:h||void 0,estimated:h&&l?(l-c)/h:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(u)},n)},Kd=(e,t)=>{const n=e!=null;return[i=>t[0]({lengthComputable:n,total:e,loaded:i}),t[1]]},Yd=(e,t=y.asap)=>(...n)=>t(()=>e(...n)),$0=ve.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ve.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ve.origin),ve.navigator&&/(msie|trident)/i.test(ve.navigator.userAgent)):()=>!0,V0=ve.hasStandardBrowserEnv?{write(e,t,n,i,s,o,a){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];y.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),y.isString(i)&&l.push(`path=${i}`),y.isString(s)&&l.push(`domain=${s}`),o===!0&&l.push("secure"),y.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const i=t[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===e)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function q0(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function K0(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+"/"+t.replace(/^\/+/,"")}const Y0=/^https?:(?!\/\/)/i;function X0(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,n,i="")=>`${n}${i}${$s}`)}function Q0(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${$s}@`),n=t.indexOf("#"),s=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${$s}`);return n===-1?s:`${s}#${X0(t.slice(n+1))}`}function Xd(e,t){if(typeof e=="string"){const n=bf(e);if(Y0.test(n))throw new z(`Invalid URL ${JSON.stringify(Q0(n))}: missing "//" after protocol`,z.ERR_INVALID_URL,t)}}function jf(e,t,n,i){Xd(t,i);let s=!q0(t);return e&&(s||n===!1)?(Xd(e,i),K0(e,t)):t}const Qd=e=>e instanceof Te?{...e}:e,Z0=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function Fn(e,t){e=e||{},t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(h,u,g,A){return y.isPlainObject(h)&&y.isPlainObject(u)?y.merge.call({caseless:A},h,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function s(h,u,g,A){if(y.isUndefined(u)){if(!y.isUndefined(h))return i(void 0,h,g,A)}else return i(h,u,g,A)}function o(h,u){if(!y.isUndefined(u))return i(void 0,u)}function a(h,u){if(y.isUndefined(u)){if(!y.isUndefined(h))return i(void 0,h)}else return i(void 0,u)}function l(h){const u=y.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!y.isUndefined(u))if(y.isPlainObject(u)){if(y.hasOwnProp(u,h))return u[h]}else return;const g=y.hasOwnProp(e,"transitional")?e.transitional:void 0;if(y.isPlainObject(g)&&y.hasOwnProp(g,h))return g[h]}function c(h,u,g){if(y.hasOwnProp(t,g))return i(h,u);if(y.hasOwnProp(e,g))return i(void 0,h)}const d={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutErrorMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:c,headers:(h,u,g)=>s(Qd(h),Qd(u),g,!0)};return y.forEach(Z0({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const g=y.hasOwnProp(d,u)?d[u]:s,A=y.hasOwnProp(e,u)?e[u]:void 0,k=y.hasOwnProp(t,u)?t[u]:void 0,S=g(A,k,u);y.isUndefined(S)&&g!==c||(n[u]=S)}),y.hasOwnProp(t,"validateStatus")&&y.isUndefined(t.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(y.hasOwnProp(e,"validateStatus")?n.validateStatus=i(void 0,e.validateStatus):delete n.validateStatus),n}const J0=["content-type","content-length"];function e2(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([i,s])=>{J0.includes(i.toLowerCase())&&e.set(i,s)})}const t2=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16)));function Af(e){const t=Fn({},e),n=g=>y.hasOwnProp(t,g)?t[g]:void 0,i=n("data");let s=n("withXSRFToken");const o=n("xsrfHeaderName"),a=n("xsrfCookieName");let l=n("headers");const c=n("auth"),d=n("baseURL"),h=n("allowAbsoluteUrls"),u=n("url");if(t.headers=l=Te.from(l),t.url=ff(jf(d,u,h,t),n("params"),n("paramsSerializer")),c){const g=y.getSafeProp(c,"username")||"",A=y.getSafeProp(c,"password")||"";try{l.set("Authorization","Basic "+btoa(g+":"+(A?t2(A):"")))}catch(k){throw z.from(k,z.ERR_BAD_OPTION_VALUE,e)}}if(y.isFormData(i)){const g=y.getSafeProp(i,"getHeaders");ve.hasStandardBrowserEnv||ve.hasStandardBrowserWebWorkerEnv||y.isReactNative(i)?l.setContentType(void 0):y.isFunction(g)&&e2(l,g.call(i),n("formDataHeaderPolicy"))}if(ve.hasStandardBrowserEnv&&(y.isFunction(s)&&(s=s(t)),s===!0||s==null&&$0(t.url))){const A=o&&a&&V0.read(a);A&&l.set(o,A)}return t}const n2=typeof XMLHttpRequest<"u",r2=n2&&function(e){return new Promise(function(n,i){const s=Af(e);let o=s.data;const a=Te.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=s,h,u,g,A,k,S;function N(){A&&A(),k&&k(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let f=new XMLHttpRequest;f.open(s.method.toUpperCase(),s.url,!0),f.timeout=s.timeout;function p(v){if(!f)return;if(f.status===0&&(Qo(bf(s.url))||Qo(ve.origin))!=="file"&&!(f.responseURL&&f.responseURL.startsWith("file:"))){i(new z("Request aborted",z.ECONNABORTED,e,f)),N(),f=null;return}try{v?S&&S(v):k&&k()}catch(R){setTimeout(()=>{throw R})}if(!f)return;const b=Te.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:b,config:e,request:f};vf(function(C){n(C),N()},function(C){i(C),N()},w),f=null}"onloadend"in f?f.onloadend=p:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.startsWith("file:"))||setTimeout(p)},f.onabort=function(){f&&(i(new z("Request aborted",z.ECONNABORTED,e,f)),N(),f=null)},f.onerror=function(b){const P=b&&b.message?b.message:"Network Error",w=new z(P,z.ERR_NETWORK,e,f);w.event=b||null,i(w),N(),f=null},f.ontimeout=function(){let b=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||pc;s.timeoutErrorMessage&&(b=s.timeoutErrorMessage),i(new z(b,P.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,f)),N(),f=null},o===void 0&&a.setContentType(null),"setRequestHeader"in f&&y.forEach(cf(a),function(b,P){f.setRequestHeader(P,b)}),y.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),l&&l!=="json"&&(f.responseType=s.responseType),d&&([g,k,S]=Vs(d,!0),f.addEventListener("progress",g)),c&&f.upload&&([u,A]=Vs(c),f.upload.addEventListener("progress",u),f.upload.addEventListener("loadend",A)),(s.cancelToken||s.signal)&&(h=v=>{f&&(i(!v||v.type?new Mi(null,e,f):v),f.abort(),N(),f=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const m=Qo(s.url);if(m&&!ve.protocols.includes(m)){i(new z("Unsupported protocol "+m+":",z.ERR_BAD_REQUEST,e)),N();return}f.send(o||null)})},i2=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let i=!1;const s=function(c){if(!i){i=!0,a();const d=c instanceof Error?c:this.reason;n.abort(d instanceof z?d:new Mi(d instanceof Error?d.message:d))}};let o=t&&setTimeout(()=>{o=null,s(new z(`timeout of ${t}ms exceeded`,z.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>{if(!i){if(c.aborted){s.call(c);return}c.addEventListener("abort",s,{once:!0})}});const{signal:l}=n;return l.unsubscribe=()=>y.asap(a),l},s2=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let i=0,s;for(;i<n;)s=i+t,yield e.slice(i,s),i=s},o2=async function*(e,t){for await(const n of a2(e))yield*s2(n,t)},a2=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:i}=await t.read();if(n)break;yield i}}finally{await t.cancel()}},Zd=(e,t,n,i)=>{const s=o2(e,t);let o=0,a,l=c=>{a||(a=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:d,value:h}=await s.next();if(d){l(),c.close();return}let u=h.byteLength;if(n){let g=o+=u;n(g)}c.enqueue(new Uint8Array(h))}catch(d){throw l(d),d}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},Jd=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,kf=(e,t,n)=>t+2<n&&Jd(e.charCodeAt(t+1))&&Jd(e.charCodeAt(t+2)),eu=e=>e<=57?e-48:(e&223)-55,l2=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,c2=e=>e===9||e===10||e===12||e===13||e===32,d2=e=>{const t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},u2=e=>{const t=e.length;let n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},h2=e=>{const t=e.length;let n=0,i=0,s=!1;for(let o=0;o<t;o++){let a=e.charCodeAt(o);if(a===37&&kf(e,o,t)&&(a=eu(e.charCodeAt(o+1))*16+eu(e.charCodeAt(o+2)),o+=2),!c2(a)){if(a===61){i++;continue}if(!l2(a)||i>0){s=!0;continue}n++}}return s||i>2||i>0&&(n+i)%4!==0||n%4===1?u2(e):d2(n)},p2=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const n=e.indexOf(",");if(n<0)return 0;const i=e.slice(5,n),s=e.slice(n+1);if(/;base64/i.test(i))return t(s);let a=0;for(let l=0,c=s.length;l<c;l++){const d=s.charCodeAt(l);if(d===37&&kf(s,l,c))a+=1,l+=2;else if(d<128)a+=1;else if(d<2048)a+=2;else if(d>=55296&&d<=56319&&l+1<c){const h=s.charCodeAt(l+1);h>=56320&&h<=57343?(a+=4,l++):a+=3}else a+=3}return a};function f2(e){const t=typeof e=="string"?e.indexOf("#"):-1;return p2(t===-1?e:e.slice(0,t),h2)}const mc="1.20.0",tu=64*1024,m2={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Zi}=y,g2=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),nu=e=>{if(!y.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},ru=(e,...t)=>{try{return!!e(...t)}catch{return!1}},x2=e=>{const t=e.indexOf("://");let n=e;return t!==-1&&(n=n.slice(t+3)),n.includes("@")||n.includes(":")},w2=e=>{const t=y.global!==void 0&&y.global!==null?y.global:globalThis,{ReadableStream:n,TextEncoder:i}=t;e=y.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:s,Request:o,Response:a}=e,l=s?Zi(s):typeof fetch=="function",c=Zi(o),d=Zi(a);if(!l)return!1;const h=l&&Zi(n),u=l&&(typeof i=="function"?(f=>p=>f.encode(p))(new i):async f=>new Uint8Array(await new o(f).arrayBuffer())),g=c&&h&&ru(()=>{let f=!1;const p=new o(ve.origin,{body:new n,method:"POST",get duplex(){return f=!0,"half"}}),m=p.headers.has("Content-Type");return p.body!=null&&p.body.cancel(),f&&!m}),A=d&&h&&ru(()=>y.isReadableStream(new a("").body)),k={stream:A&&(f=>f.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!k[f]&&(k[f]=(p,m)=>{let v=p&&p[f];if(v)return v.call(p);throw new z(`Response type '${f}' is not supported`,z.ERR_NOT_SUPPORT,m)})});const S=async f=>{if(f==null)return 0;if(y.isBlob(f))return f.size;if(y.isSpecCompliantForm(f))return(await new o(ve.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(y.isArrayBufferView(f)||y.isArrayBuffer(f))return f.byteLength;if(y.isURLSearchParams(f)&&(f=f+""),y.isString(f))return(await u(f)).byteLength},N=async(f,p)=>{const m=y.toFiniteNumber(f.getContentLength());return m??S(p)};return async f=>{let{url:p,method:m,data:v,signal:b,cancelToken:P,timeout:w,onDownloadProgress:R,onUploadProgress:C,responseType:E,headers:M,withCredentials:G="same-origin",fetchOptions:ue,maxContentLength:te,maxBodyLength:Ee,maxRedirects:Ne}=Af(f);const ge=y.isNumber(te)&&te>-1,L=y.isNumber(Ee)&&Ee>-1,F=T=>y.hasOwnProp(f,T)?f[T]:void 0;let W=s||fetch;E=E?(E+"").toLowerCase():"text";let V=i2([b,P&&P.toAbortSignal()],w),H=null;const je=V&&V.unsubscribe&&(()=>{V.unsubscribe()});let pe,Fe=null;const x=()=>new z("Request body larger than maxBodyLength limit",z.ERR_BAD_REQUEST,f,H);try{let T;const q=F("auth");if(q){const U=y.getSafeProp(q,"username")||"",D=y.getSafeProp(q,"password")||"";T={username:U,password:D}}if(x2(p)){const U=new URL(p,ve.origin);if(!T&&(U.username||U.password)){const D=nu(U.username),yt=nu(U.password);T={username:D,password:yt}}(U.username||U.password)&&(U.username="",U.password="",p=U.href)}if(T&&(M.delete("authorization"),M.set("Authorization","Basic "+btoa(g2((T.username||"")+":"+(T.password||""))))),ge&&typeof p=="string"&&p.startsWith("data:")&&f2(p)>te)throw new z("maxContentLength size of "+te+" exceeded",z.ERR_BAD_RESPONSE,f,H);if(L&&m!=="get"&&m!=="head"){const U=await S(v);if(typeof U=="number"&&isFinite(U)&&(pe=U,U>Ee))throw x()}const Wt=L&&(y.isReadableStream(v)||y.isStream(v)),zi=(U,D,yt)=>Zd(U,tu,xn=>{if(L&&xn>Ee)throw Fe=x();D&&D(xn)},yt);if(g&&m!=="get"&&m!=="head"&&(C||Wt)){if(pe=pe??await N(M,v),pe!==0||Wt){let U=new o(p,{method:"POST",body:v,duplex:"half"}),D;if(y.isFormData(v)&&(D=U.headers.get("content-type"))&&M.setContentType(D),U.body){const[yt,xn]=C&&Kd(pe,Vs(Yd(C)))||[];v=zi(U.body,yt,xn)}}}else if(Wt&&!c&&h&&m!=="get"&&m!=="head")v=zi(v);else if(Wt&&c&&!g&&m!=="get"&&m!=="head")throw new z("Stream request bodies are not supported by the current fetch implementation",z.ERR_NOT_SUPPORT,f,H);y.isString(G)||(G=G?"include":"omit");const gn=c&&"credentials"in o.prototype;if(y.isFormData(v)){const U=M.getContentType();U&&/^multipart\/form-data/i.test(U)&&!/boundary=/i.test(U)&&M.delete("content-type")}M.set("User-Agent","axios/"+mc,!1);const $e=ue==null?ue:Object.assign(Object.create(null),ue);$e&&(delete $e.body,delete $e.headers,delete $e.method,delete $e.signal,delete $e.duplex,delete $e.credentials);const lt=Object.assign(Object.create(null),$e,{signal:V,method:m.toUpperCase(),headers:cf(M.normalize()),body:v,duplex:"half",credentials:gn?G:void 0});c&&(y.forEach(m2,(U,D)=>{lt[D]===void 0&&(lt[D]=U)}),lt.signal===void 0&&(lt.signal=null),lt.body===void 0&&(lt.body=null)),Ne===0&&(lt.redirect="manual",$e&&($e.redirect="manual")),H=c&&new o(p,lt);let ct=await(c?W(H,$e):W(p,lt));const Nr=Te.from(ct.headers);if(ge){const U=y.toFiniteNumber(Nr.getContentLength());if(U!=null&&U>te)throw new z("maxContentLength size of "+te+" exceeded",z.ERR_BAD_RESPONSE,f,H)}const Hn=A&&(E==="stream"||E==="response");if(A&&ct.body&&(R||ge||Hn&&je)){const U={};["status","statusText","headers"].forEach(Cr=>{U[Cr]=ct[Cr]});const D=y.toFiniteNumber(Nr.getContentLength()),[yt,xn]=R&&Kd(D,Vs(Yd(R),!0))||[];let vc=0;const If=Cr=>{if(ge&&(vc=Cr,vc>te))throw new z("maxContentLength size of "+te+" exceeded",z.ERR_BAD_RESPONSE,f,H);yt&&yt(Cr)};ct=new a(Zd(ct.body,tu,If,()=>{xn&&xn(),je&&je()}),U)}E=E||"text";let Ze=await k[y.findKey(k,E)||"text"](ct,f);if(ge&&!A&&!Hn){let U;if(Ze!=null&&(typeof Ze.byteLength=="number"?U=Ze.byteLength:typeof Ze.size=="number"?U=Ze.size:typeof Ze=="string"&&(U=typeof i=="function"?new i().encode(Ze).byteLength:Ze.length)),typeof U=="number"&&U>te)throw new z("maxContentLength size of "+te+" exceeded",z.ERR_BAD_RESPONSE,f,H)}return!Hn&&je&&je(),await new Promise((U,D)=>{vf(U,D,{data:Ze,headers:Te.from(ct.headers),status:ct.status,statusText:ct.statusText,config:f,request:H})})}catch(T){if(je&&je(),V&&V.aborted&&V.reason instanceof z){const q=V.reason;throw q.config=f,H&&(q.request=H),T!==q&&Object.defineProperty(q,"cause",{__proto__:null,value:T,writable:!0,enumerable:!1,configurable:!0}),q}if(Fe)throw H&&!Fe.request&&(Fe.request=H),Fe;if(T instanceof z)throw H&&!T.request&&(T.request=H),T;if(T&&T.name==="TypeError"&&/Load failed|fetch/i.test(T.message)){const q=new z("Network Error",z.ERR_NETWORK,f,H,T&&T.response);throw Object.defineProperty(q,"cause",{__proto__:null,value:T.cause||T,writable:!0,enumerable:!1,configurable:!0}),q}throw z.from(T,T&&T.code,f,H,T&&T.response)}}},y2=new Map,Sf=e=>{let t=e&&e.env||{};const{fetch:n,Request:i,Response:s}=t,o=[i,s,n];let a=o.length,l=a,c,d,h=y2;for(;l--;)c=o[l],d=h.get(c),d===void 0&&h.set(c,d=l?new Map:w2(t)),h=d;return d};Sf();const gc={http:E0,xhr:r2,fetch:{get:Sf}};y.forEach(gc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const iu=e=>`- ${e}`,v2=e=>y.isFunction(e)||e===null||e===!1;function b2(e,t){e=y.isArray(e)?e:[e];const{length:n}=e;let i,s;const o={};for(let a=0;a<n;a++){i=e[a];let l;if(s=i,!v2(i)&&(s=gc[(l=String(i)).toLowerCase()],s===void 0))throw new z(`Unknown adapter '${l}'`);if(s&&(y.isFunction(s)||(s=s.get(t))))break;o[l||"#"+a]=s}if(!s){const a=Object.entries(o).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(iu).join(`
`):" "+iu(a[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+l,z.ERR_NOT_SUPPORT)}return s}const Ef={getAdapter:b2,adapters:gc};function Zo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Mi(null,e)}function Jo(e){const t=y.toSafeFlatObject(e);return Zo(t),t.headers=Te.from(y.getSafeProp(t,"headers")),t.data=Xo.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ef.getAdapter(t.adapter||Ti.adapter,t)(t).then(function(s){Zo(t),t.response=s;try{s.data=Xo.call(t,t.transformResponse,s)}finally{delete t.response}return s.headers=Te.from(s.headers),s},function(s){if(!yf(s)&&(Zo(t),s&&s.response)){t.response=s.response;try{s.response.data=Xo.call(t,t.transformResponse,s.response)}finally{delete t.response}s.response.headers=Te.from(s.response.headers)}return Promise.reject(s)})}const wo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{wo[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const su={};wo.transitional=function(t,n,i){function s(o,a){return"[Axios v"+mc+"] Transitional option '"+o+"'"+a+(i?". "+i:"")}return(o,a,l)=>{if(t===!1)throw new z(s(a," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!su[a]&&(su[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};wo.spelling=function(t){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function j2(e,t,n){if(typeof e!="object"||e===null)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const o=i[s],a=Object.prototype.hasOwnProperty.call(t,o)?t[o]:void 0;if(a){const l=e[o],c=l===void 0||a(l,o,e);if(c!==!0)throw new z("option "+o+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+o,z.ERR_BAD_OPTION)}}const ws={assertOptions:j2,validators:wo},Pe=ws.validators;let Pn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Vd,response:new Vd}}async request(t,n){try{return await this._request(t,n)}catch(i){if(i instanceof Error)try{let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack;let a="";if(typeof o=="string"){const l=o.indexOf(`
`);a=l===-1?"":o.slice(l+1)}if(!i.stack)i.stack=a;else if(a){const l=a.indexOf(`
`),c=l===-1?-1:a.indexOf(`
`,l+1),d=c===-1?"":a.slice(c+1);String(i.stack).endsWith(d)||(i.stack+=`
`+a)}}catch{}throw i}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Fn(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:o}=n;i!==void 0&&ws.assertOptions(i,{silentJSONParsing:Pe.transitional(Pe.boolean),forcedJSONParsing:Pe.transitional(Pe.boolean),clarifyTimeoutError:Pe.transitional(Pe.boolean),legacyInterceptorReqResOrdering:Pe.transitional(Pe.boolean),advertiseZstdAcceptEncoding:Pe.transitional(Pe.boolean),validateStatusUndefinedResolves:Pe.transitional(Pe.boolean)},!1),s!=null&&(y.isFunction(s)?n.paramsSerializer={serialize:s}:ws.assertOptions(s,{encode:Pe.function,serialize:Pe.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ws.assertOptions(n,{baseUrl:Pe.spelling("baseURL"),withXsrfToken:Pe.spelling("withXSRFToken")},!0),n.method=(y.getSafeProp(n,"method")||y.getSafeProp(this.defaults,"method")||"get").toLowerCase();let a=o&&y.merge(o.common,o[n.method]);o&&y.forEach(wf.concat("common"),k=>{delete o[k]}),n.headers=Te.concat(a,o);const l=[];let c=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(n)===!1)return;c=c&&S.synchronous;const N=n.transitional||pc;N&&N.legacyInterceptorReqResOrdering?l.unshift(S.fulfilled,S.rejected):l.push(S.fulfilled,S.rejected)});const d=[];this.interceptors.response.forEach(function(S){d.push(S.fulfilled,S.rejected)});let h,u=0,g;if(!c){const k=[Jo.bind(this),void 0];for(k.unshift(...l),k.push(...d),g=k.length,h=Promise.resolve(n);u<g;)h=h.then(k[u++],k[u++]);return h}g=l.length;let A=n;for(;u<g;){const k=l[u++],S=l[u++];try{A=k?k(A):A}catch(N){if(!S){h=Promise.reject(N);break}try{const f=S.call(this,N);y.isThenable(f)&&(h=Promise.resolve(f).then(()=>Jo.call(this,A)))}catch(f){h=Promise.reject(f)}break}}if(!h)try{h=Jo.call(this,A)}catch(k){h=Promise.reject(k)}for(u=0,g=d.length;u<g;)h=h.then(d[u++],d[u++]);return h}getUri(t){t=Fn(this.defaults,t);const n=jf(t.baseURL,t.url,t.allowAbsoluteUrls,t);return ff(n,t.params,t.paramsSerializer)}};y.forEach(["delete","get","head","options"],function(t){Pn.prototype[t]=function(n,i){return this.request(Fn(i||{},{method:t,url:n,data:i&&y.hasOwnProp(i,"data")?i.data:void 0}))}});y.forEach(["post","put","patch","query"],function(t){function n(i){return function(o,a,l){return this.request(Fn(l||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Pn.prototype[t]=n(),t!=="query"&&(Pn.prototype[t+"Form"]=n(!0))});let A2=class Nf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const i=this;this.promise.then(s=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](s);i._listeners=null}),this.promise.then=s=>{let o;const a=new Promise(l=>{i.subscribe(l),o=l}).then(s);return a.cancel=function(){i.unsubscribe(o)},a},t(function(o,a,l){i.reason||(i.reason=new Mi(o,a,l),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=i=>{t.abort(i)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Nf(function(s){t=s}),cancel:t}}};function k2(e){return function(n){return e.apply(null,n)}}function S2(e){return y.isObject(e)&&e.isAxiosError===!0}const ys={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ys).forEach(([e,t])=>{ys[t]===void 0&&(ys[t]=e)});function Cf(e){const t=new Pn(e),n=Qp(Pn.prototype.request,t);return y.extend(n,Pn.prototype,t,{allOwnKeys:!0}),y.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Cf(Fn(e,s))},n}const de=Cf(Ti);de.Axios=Pn;de.CanceledError=Mi;de.CancelToken=A2;de.isCancel=yf;de.VERSION=mc;de.toFormData=xo;de.AxiosError=z;de.Cancel=de.CanceledError;de.all=function(t){return Promise.all(t)};de.spread=k2;de.isAxiosError=S2;de.mergeConfig=Fn;de.AxiosHeaders=Te;de.formToJSON=e=>xf(y.isHTMLForm(e)?new FormData(e):e);de.getAdapter=Ef.getAdapter;de.HttpStatusCode=ys;de.default=de;const{Axios:My,AxiosError:zy,CanceledError:Ly,isCancel:Iy,CancelToken:By,VERSION:Fy,all:Dy,Cancel:Wy,isAxiosError:Uy,spread:Hy,toFormData:_y,AxiosHeaders:Gy,HttpStatusCode:$y,formToJSON:Vy,getAdapter:qy,mergeConfig:Ky,create:Yy}=de,xc="admin_token",yo="admin_user",E2=e=>{try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(atob(t))}catch{return null}},wc=()=>localStorage.getItem(xc),N2=(e=wc())=>{const t=e&&E2(e);return t!=null&&t.exp?Math.max(0,t.exp*1e3-Date.now()):0},al=()=>N2()>0,Xy=()=>{try{return JSON.parse(localStorage.getItem(yo))}catch{return null}},C2=(e,t)=>{localStorage.setItem(xc,e),t&&localStorage.setItem(yo,JSON.stringify(t))},Qy=e=>localStorage.setItem(yo,JSON.stringify(e)),Rf=()=>{localStorage.removeItem(xc),localStorage.removeItem(yo)},R2=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Zy=(e,t="")=>{const n=t.split("@")[0];return e.length<8?"At least 8 characters":!/[a-z]/i.test(e)||!/\d/.test(e)?"Use both letters and numbers":n.length>=3&&e.toLowerCase().includes(n.toLowerCase())?"Must not contain your email name":null},Ji="".replace(/\/+$/,""),P2=Ji?Ji.endsWith("/api")?Ji:Ji+"/api":"/api",ie=de.create({baseURL:P2,timeout:6e4});ie.interceptors.request.use(e=>{const t=wc();return t&&(e.headers.Authorization=`Bearer ${t}`),e});ie.interceptors.response.use(e=>e,e=>{var i,s,o,a;const t=window.location.pathname.startsWith("/admin/"),n=(s=(i=e.config)==null?void 0:i.url)==null?void 0:s.includes("/admin/login");if(((o=e.response)==null?void 0:o.status)===401&&t&&!n){Rf();const l=((a=e.response.data)==null?void 0:a.code)==="TOKEN_EXPIRED"?"expired":"signedout";window.location.replace(`/admin?session=${l}`)}return Promise.reject(e)});const qs="/assets/logo-homwiser-Cd0C7JXv.png",ll=["Real Estate News","Gurgaon","Delhi NCR","Investment","Property Guide"],cl=e=>{const t=new Date(e);return isNaN(t)?"":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toUpperCase()},O2=(e="")=>String(e).replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&[a-z#0-9]+;/gi," "),T2=(e={})=>[e.excerpt,e.body?O2(e.body):"",...e.body?[]:(e.content||[]).flatMap(t=>[t.heading,t.text])].join(" ").split(/\s+/).filter(Boolean).length,M2=e=>Math.max(1,Math.round(T2(e)/200));function Et(){const e=Un(),t=mn(),[n,i]=j.useState("Gurugram"),[s,o]=j.useState(""),a=b=>{b==null||b.preventDefault();const P=new URLSearchParams;n&&P.set("city",n),s.trim()&&P.set("q",s.trim()),t(`/search?${P.toString()}`)},l=e.pathname==="/",[c,d]=j.useState(!1),[h,u]=j.useState(null),[g,A]=j.useState(!1);j.useEffect(()=>{const b=()=>{A(window.scrollY>40)};return b(),window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b)}},[]),j.useEffect(()=>{d(!1),u(null)},[e.pathname,e.search]),j.useEffect(()=>{if(!c)return;const b=w=>{w.key==="Escape"&&(d(!1),u(null))};document.addEventListener("keydown",b);const P=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",b),document.body.style.overflow=P}},[c]);const k=b=>{u(h===b?null:b)},S=()=>{d(!1),u(null)},v=[{label:"Home",link:"/"},{label:"About",link:"/about"},{label:"Budget",type:"simple",data:[{label:"Under 1 Cr",link:"/budget/under-1-cr"},{label:"1 Cr – 4 Cr",link:"/budget/1-cr-4-cr"},{label:"4 Cr – 8 Cr",link:"/budget/4-cr-8-cr"},{label:"8 Cr – 12 Cr",link:"/budget/8-cr-12-cr"},{label:"12 Cr – 16 Cr",link:"/budget/12-cr-16-cr"},{label:"16 Cr Onwards",link:"/budget/16-cr-onwards"}]},{label:"Property Type",type:"mega",data:[{label:"Residential Projects",children:[{label:"Apartment",link:"/residential-projects"},{label:"Luxury Villas",link:"/property-type/luxury-villas"},{label:"Independent Floors",link:"/property-type/independent-floors"},{label:"Pent House",link:"/property-type/pent-house"}]},{label:"Commercial Projects",children:[{label:"Shops",link:"/commercial/shops"},{label:"Office Space",link:"/commercial/office-space"},{label:"Food Court",link:"/commercial/food-court"},{label:"Anchor Stores",link:"/commercial/anchor-stores"},{label:"Cinema & Entertainment",link:"/commercial/cinema-entertainment"}]},{label:"SCO Plots",link:"/property-type/sco-plots"},{label:"Residential Plots",link:"/property-type/residential-plots"}]},{label:"Project Status",type:"simple",data:[{label:"Upcoming",link:"/status/upcoming"},{label:"New Launch",link:"/status/new-launch"},{label:"Under Construction",link:"/status/under-construction"},{label:"Ready To Move",link:"/status/ready-to-move"}]},{label:"Cities",type:"mega",data:[{label:"Gurugram",children:[{label:"Southern Peripheral Road (SPR)",link:"/location/southern-peripheral-road"},{label:"Dwarka Expressway",link:"/location/dwarka-expressway"},{label:"New Gurgaon",link:"/location/new-gurgaon"},{label:"Sohna Road",link:"/location/sohna-road"}]},{label:"Noida",children:[{label:"Noida Expressway",link:"/location/noida-expressway"},{label:"Noida Extension",link:"/location/noida-extension"},{label:"Yamuna Expressway",link:"/location/yamuna-expressway"}]},{label:"New Delhi",children:[{label:"Dwarka",link:"/location/dwarka"},{label:"South Delhi",link:"/location/south-delhi"},{label:"Central Delhi",link:"/location/central-delhi"}]},{label:"Faridabad",children:[{label:"Greater Faridabad",link:"/location/greater-faridabad"},{label:"Mathura Road",link:"/location/mathura-road"},{label:"Suraj Kund",link:"/location/suraj-kund"}]},{label:"Bengaluru",children:[{label:"North Bengaluru",link:"/location/north-bengaluru"},{label:"East Bengaluru",link:"/location/east-bengaluru"},{label:"Sarjapur Road (IT Corridor)",link:"/location/sarjapur-road"},{label:"South Bengaluru",link:"/location/south-bengaluru"},{label:"Hoskote & East Peripheral Belt",link:"/location/hoskote"}]},{label:"Hyderabad",children:[{label:"North Hyderabad",link:"/location/north-hyderabad"},{label:"South Hyderabad",link:"/location/south-hyderabad"},{label:"East Hyderabad",link:"/location/east-hyderabad"},{label:"West Hyderabad",link:"/location/west-hyderabad"}]},{label:"Mumbai",children:[{label:"South Mumbai",link:"/location/south-mumbai"},{label:"Navi Mumbai",link:"/location/navi-mumbai"},{label:"Panvel",link:"/location/panvel"},{label:"Central Mumbai",link:"/location/central-mumbai"},{label:"Kalyan",link:"/location/kalyan"}]},{label:"Pune",children:[{label:"West Pune",link:"/location/west-pune"},{label:"East Pune",link:"/location/east-pune"},{label:"Punawale",link:"/location/punawale"},{label:"South East Pune",link:"/location/south-east-pune"}]}]},{label:"Blog",type:"simple",data:[{label:"All Articles",link:"/blog"},...ll.map(b=>({label:b,link:`/blog?category=${encodeURIComponent(b)}`}))]},{label:"Contact",link:"./contact"}];return r.jsxs(r.Fragment,{children:[r.jsxs("header",{className:`hw-header ${l?"":"hw-header-inner-page"} ${g?"hw-header-scrolled":""}`,children:[r.jsxs("div",{className:"hw-header-inner",children:[r.jsx(B,{to:"/",className:"hw-logo",onClick:S,children:r.jsx("img",{src:qs,alt:"Homwisor",className:"hw-logo-image"})}),r.jsxs("div",{className:"hw-scroll-search",children:[r.jsxs("div",{className:"hw-location-select",children:[r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M20 10.5C20 16 12 21 12 21S4 16 4 10.5a8 8 0 1 1 16 0Z",stroke:"currentColor",strokeWidth:"1.7"}),r.jsx("circle",{cx:"12",cy:"10.5",r:"2.4",stroke:"currentColor",strokeWidth:"1.7"})]}),r.jsxs("select",{value:n,onChange:b=>i(b.target.value),"aria-label":"Select city",children:[r.jsx("option",{children:"Gurugram"}),r.jsx("option",{children:"Noida"}),r.jsx("option",{children:"New Delhi"}),r.jsx("option",{children:"Faridabad"}),r.jsx("option",{children:"Bengaluru"}),r.jsx("option",{children:"Hyderabad"}),r.jsx("option",{children:"Mumbai"}),r.jsx("option",{children:"Pune"})]}),r.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"m6 9 6 6 6-6",stroke:"currentColor",strokeWidth:"2"})})]}),r.jsxs("div",{className:"hw-search-box",children:[r.jsx("input",{type:"text",value:s,onChange:b=>o(b.target.value),onKeyDown:b=>b.key==="Enter"&&a(b),placeholder:"Search projects, localities...","aria-label":"Search projects and localities"}),r.jsx("button",{type:"button","aria-label":"Search",onClick:a,children:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[r.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4",stroke:"currentColor",strokeWidth:"1.8"}),r.jsx("path",{d:"m16 16 4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})})]})]}),r.jsx("nav",{className:"hw-nav",children:v.map(b=>{const P=b.type==="simple"||b.type==="mega",w=["Project Status","Cities","Resale"].includes(b.label);return r.jsxs("div",{className:`hw-nav-item ${w?`hw-scroll-menu-item hw-scroll-${b.label.toLowerCase().replace(/\s+/g,"-")}`:"hw-scroll-menu-hide"}`,onMouseEnter:()=>{P&&u(b.label)},onMouseLeave:()=>{P&&u(null)},children:[P?r.jsxs("button",{className:"hw-nav-link hw-nav-dropdown-button",onClick:()=>k(b.label),children:[r.jsx("span",{children:b.label}),r.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M6 9l6 6 6-6"})})]}):r.jsx(B,{to:b.link,className:"hw-nav-link",children:b.label}),P&&b.type==="simple"&&h===b.label&&r.jsx("div",{className:"hw-dropdown hw-simple-dropdown",children:b.data.map(R=>r.jsx(B,{to:R.link,className:"hw-dropdown-link",children:R.label},R.label))}),P&&b.type==="mega"&&h===b.label&&r.jsx("div",{className:"hw-dropdown hw-mega-dropdown",children:r.jsx("div",{className:"hw-mega-grid",children:b.data.map(R=>r.jsxs("div",{className:"hw-menu-group",children:[R.link?r.jsx(B,{to:R.link,className:"hw-group-title hw-direct-link",children:R.label}):r.jsx("div",{className:"hw-group-title",children:R.label}),R.children&&R.children.map(C=>r.jsx(B,{to:C.link,className:"hw-dropdown-child",children:C.label},C.label))]},R.label))})})]},b.label)})}),r.jsxs("div",{className:"hw-header-actions",children:[r.jsx("button",{type:"button",className:"hw-mobile-search-button","aria-label":"Search",onClick:()=>{const b=document.querySelector(".hw-scroll-search input");b&&(b.focus(),b.scrollIntoView({behavior:"smooth",block:"nearest"}))},children:r.jsxs("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[r.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4"}),r.jsx("path",{d:"m16 16 4.2 4.2"})]})}),r.jsx("button",{type:"button",className:"hw-menu-button",onClick:()=>d(b=>!b),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,children:c?r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[r.jsx("path",{d:"M18 6L6 18"}),r.jsx("path",{d:"M6 6l12 12"})]}):r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[r.jsx("path",{d:"M3 6h18"}),r.jsx("path",{d:"M3 12h18"}),r.jsx("path",{d:"M3 18h18"})]})})]})]}),c&&r.jsx("div",{className:"hw-mobile-backdrop",onClick:S,"aria-hidden":"true"}),c&&r.jsx("div",{className:"hw-mobile-menu",children:v.map(b=>{const P=b.type==="simple"||b.type==="mega";return r.jsx("div",{className:"hw-mobile-item",children:P?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"hw-mobile-main",onClick:()=>k(b.label),children:[r.jsx("span",{children:b.label}),r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M6 9l6 6 6-6"})})]}),h===b.label&&r.jsx("div",{className:"hw-mobile-submenu",children:b.data.map(w=>r.jsxs("div",{children:[w.link?r.jsx(B,{to:w.link,className:"hw-mobile-group",onClick:S,children:w.label}):r.jsx("div",{className:"hw-mobile-group",children:w.label}),w.children&&w.children.map(R=>r.jsx(B,{to:R.link,className:"hw-mobile-child",onClick:S,children:R.label},R.label))]},w.label))})]}):r.jsx(B,{to:b.link,className:"hw-mobile-main",onClick:S,children:b.label})},b.label)})})]}),r.jsx("style",{children:`

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
      `})]})}function Pf({link:e,label:t,className:n,children:i}){const s=String(e||"").trim();return!s||s==="#"?i:/^https?:\/\//i.test(s)?r.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:n,"aria-label":t,children:i}):r.jsx(B,{to:s.startsWith("/")?s:`/${s}`,className:n,"aria-label":t,children:i})}const z2="/assets/bn1-Cpicj8ug.png",L2="/assets/bn2-Dg5ASCxh.png";function I2({banners:e=[]}){const[t,n]=j.useState(0),i=e.length?e:[{image:L2},{image:z2}];j.useEffect(()=>{if(i.length<=1)return;const a=setInterval(()=>{n(l=>(l+1)%i.length)},5e3);return()=>clearInterval(a)},[i.length]);const s=()=>{n(a=>(a+1)%i.length)},o=()=>{n(a=>(a-1+i.length)%i.length)};return r.jsxs("section",{className:"hw-hero",children:[r.jsx("div",{className:"hw-slides",children:i.map((a,l)=>r.jsx("div",{className:`hw-slide ${l===t?"hw-slide-active":""}`,children:r.jsx(Pf,{link:a.link,label:a.title,className:"hw-slide-link",children:r.jsx("img",{src:a.image,alt:a.title||"Premium Property"})})},l))}),i.length>1&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:"hw-arrow hw-arrow-left",onClick:o,"aria-label":"Previous slide",children:"‹"}),r.jsx("button",{type:"button",className:"hw-arrow hw-arrow-right",onClick:s,"aria-label":"Next slide",children:"›"})]}),r.jsx("style",{children:`

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
      `})]})}function B2(){const e=mn(),[t,n]=j.useState("Apartment"),[i,s]=j.useState(""),[o,a]=j.useState(""),[l,c]=j.useState(""),N=[{name:"Apartment",value:"Apartment",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 21V5.5L12 2l8 3.5V21",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8 21v-5h8v5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("path",{d:"M8 8h2M14 8h2M8 11h2M14 11h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Villa",value:"Villa",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),r.jsx("path",{d:"M8 12h1M15 12h1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Farmhouse",value:"Farmhouse",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),r.jsx("path",{d:"M7 13h2M15 13h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Commercial",value:"Commercial",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 21V4h16v17",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),r.jsx("path",{d:"M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M10 21v-3h4v3",stroke:"currentColor",strokeWidth:"1.6"})]})},{name:"Branded",value:"Branded",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 3l2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3Z",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),r.jsx("path",{d:"M19 16v5M16.5 18.5h5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Luxury",value:"Luxury",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M3 12l9-8 9 8-9 8-9-8Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),r.jsx("path",{d:"M7 12h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Plots / Land",value:"Plots / Land",icon:()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 19l5-12 5 3 6-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M4 19h16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("path",{d:"M9 7l-1-3M14 10l2-3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}],f=()=>{const m=new URLSearchParams;t&&m.set("type",t),i&&m.set("propertyType",i),o&&m.set("location",o),l&&m.set("budget",l),e(`/search?${m.toString()}`)},p=m=>{n(m.value),s(m.value)};return r.jsxs("section",{className:"hw-search-section",children:[r.jsxs("div",{className:"hw-search-container",children:[r.jsx("div",{className:"hw-search-tabs",children:N.map(m=>{const v=m.icon;return r.jsxs("button",{type:"button",className:`hw-search-tab ${t===m.value?"active":""}`,onClick:()=>p(m),children:[r.jsx("span",{className:"hw-tab-icon",children:r.jsx(v,{})}),r.jsx("span",{className:"hw-tab-text",children:m.name})]},m.value)})}),r.jsxs("div",{className:"hw-search-fields",children:[r.jsxs("div",{className:"hw-search-field hw-location-field",children:[r.jsx("span",{className:"hw-search-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4-4"})]})}),r.jsx("input",{type:"text",value:o,onChange:m=>a(m.target.value),placeholder:"Search city, locality or project..."})]}),r.jsxs("div",{className:"hw-search-field hw-budget-field",children:[r.jsx("span",{className:"hw-search-icon hw-rupee",children:"₹"}),r.jsxs("select",{value:l,onChange:m=>c(m.target.value),children:[r.jsx("option",{value:"",children:"Budget"}),r.jsx("option",{value:"Under 1 Cr",children:"Under ₹1 Cr"}),r.jsx("option",{value:"1 Cr - 4 Cr",children:"₹1 Cr - ₹4 Cr"}),r.jsx("option",{value:"4 Cr - 8 Cr",children:"₹4 Cr - ₹8 Cr"}),r.jsx("option",{value:"8 Cr - 12 Cr",children:"₹8 Cr - ₹12 Cr"}),r.jsx("option",{value:"12 Cr - 16 Cr",children:"₹12 Cr - ₹16 Cr"}),r.jsx("option",{value:"16 Cr Onwards",children:"₹16 Cr Onwards"})]}),r.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),r.jsxs("div",{className:"hw-search-field hw-type-field",children:[r.jsx("span",{className:"hw-search-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"1"}),r.jsx("path",{d:"M8 8h8"}),r.jsx("path",{d:"M8 12h8"}),r.jsx("path",{d:"M8 16h5"})]})}),r.jsxs("select",{value:i,onChange:m=>s(m.target.value),children:[r.jsx("option",{value:"",children:"Property Type"}),r.jsx("option",{value:"Apartment",children:"Apartment"}),r.jsx("option",{value:"Villa",children:"Villa"}),r.jsx("option",{value:"Farmhouse",children:"Farmhouse"}),r.jsx("option",{value:"Builder Floor",children:"Builder Floor"}),r.jsx("option",{value:"Commercial",children:"Commercial"}),r.jsx("option",{value:"Plots / Land",children:"Plots / Land"})]}),r.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),r.jsxs("button",{type:"button",className:"hw-search-button",onClick:f,children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4-4"})]}),r.jsx("span",{children:"Search Properties"})]})]})]}),r.jsx("style",{children:`

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

      `})]})}const Jy=(e="")=>String(e).toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,90).replace(/-$/,""),ev=(e="")=>String(e).toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g,"-").replace(/^-+/,"").slice(0,90),pt=e=>`/property/${encodeURIComponent((e==null?void 0:e.slug)||(e==null?void 0:e.id)||"")}`,F2=(e,t=[])=>{const n=/^\/property\/([^/?#]+)(.*)$/.exec(String(e||""));if(!n)return e;const i=decodeURIComponent(n[1]),s=t.find(o=>o.slug===i||o.id===i||(o.oldSlugs||[]).includes(i));return s!=null&&s.slug?`/property/${s.slug}${n[2]}`:e},Qt=e=>`/${encodeURIComponent(typeof e=="string"?e:(e==null?void 0:e.slug)||"")}`,D2="/assets/s1-BVwoKduN.webp",W2="/assets/s2-kewm8yNy.webp",U2="/assets/s3-eKCFe4c6.webp";function H2({banners:e=[]}){const t=[{image:D2},{image:W2},{image:U2}],n=e.length?e:t,[i,s]=j.useState(0);return j.useEffect(()=>{if(n.length<=1)return;const o=setInterval(()=>{s(a=>(a+1)%n.length)},5e3);return()=>clearInterval(o)},[n.length]),r.jsxs("section",{className:"hw-image-slider",children:[r.jsx("div",{className:"hw-image-slider-track",children:n.map((o,a)=>r.jsx("div",{className:`hw-image-slide ${a===i?"is-active":""}`,children:r.jsx(Pf,{link:o.link,label:o.title,className:"hw-image-slide-link",children:r.jsx("img",{src:o.image,alt:o.title||"Property Banner"})})},a))}),r.jsx("style",{children:`

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

      `})]})}function _2({link:e,className:t,children:n}){const i=String(e||"").trim();return!i||i==="#"?r.jsx("div",{className:t,children:n}):/^https?:\/\//i.test(i)?r.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:t,children:n}):r.jsx(B,{to:i.startsWith("/")?i:`/${i}`,className:t,children:n})}const G2="919090101401",$2=e=>`https://wa.me/${G2}?text=${encodeURIComponent(`Hi, I am interested in ${e.title}. Please share more details.`)}`;function V2({items:e=[]}){const t=j.useRef(null),n=(Array.isArray(e)?e:[]).filter(i=>(i==null?void 0:i.image)&&(i==null?void 0:i.title)).slice(0,4);return j.useEffect(()=>{const i=t.current;if(!i||n.length<2)return;let s=null;const o=()=>{clearInterval(s),s=setInterval(()=>{if(window.innerWidth>760)return;const a=i.querySelector(".hwr-card");if(!a)return;const l=a.getBoundingClientRect().width+12,c=i.scrollLeft>=i.scrollWidth-i.clientWidth-5;i.scrollTo({left:c?0:i.scrollLeft+l,behavior:"smooth"})},3500)};return o(),i.addEventListener("touchend",o,{passive:!0}),i.addEventListener("pointerup",o),()=>{clearInterval(s),i.removeEventListener("touchend",o),i.removeEventListener("pointerup",o)}},[n.length]),n.length?r.jsxs("section",{className:"hwr-section",children:[r.jsxs("div",{className:"hwr-head",children:[r.jsxs("h2",{children:[r.jsx("span",{className:"hwr-brand",children:"Our Top "})," Properties"]}),r.jsx("span",{className:"hwr-bar","aria-hidden":"true"}),r.jsx("p",{children:"Premium properties chosen by HomWisor: built for luxury living, selected for lasting value. "})]}),r.jsx("div",{className:"hwr-grid",ref:t,children:n.map(i=>r.jsxs("div",{className:"hwr-card",children:[r.jsxs(_2,{link:i.link,className:"hwr-card-link",children:[r.jsx("img",{src:i.image,alt:i.title,loading:"lazy"}),r.jsx("span",{className:"hwr-shade","aria-hidden":"true"}),i.badge&&r.jsxs("span",{className:"hwr-badge",children:[r.jsx("i",{"aria-hidden":"true"}),i.badge]}),r.jsxs("span",{className:"hwr-info",children:[r.jsx("strong",{className:"hwr-name",children:i.title}),i.price&&r.jsx("span",{className:"hwr-price",children:i.price}),i.location&&r.jsxs("span",{className:"hwr-loc",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[r.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.6"})]}),r.jsx("span",{children:i.location})]})]})]}),r.jsxs("a",{className:"hwr-wa",href:$2(i),target:"_blank",rel:"noopener noreferrer",children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),"WhatsApp"]})]},i.id||i.title))}),r.jsx("style",{children:`
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
      `})]}):null}const q2="/assets/s4-CyUc3uZH.webp",K2="/assets/s5-B3dJV6PK.webp",Y2="/assets/s6-BTGolWiF.webp",xe="#D4AF37",ou={position:"absolute",inset:0,zIndex:2,display:"block"},X2=["upcoming","prime","bhk","budget","trending","newlaunch","festival","branded","sco","luxury","commercial"];function Q2({bhkSection:e=null,properties:t=[],locations:n=[],upcoming:i=[],newlaunch:s=[],offers:o=[],promos:a=[],branded:l=null,luxury:c=null}){var Ne,ge,L,F,W,V,H,je,pe,Fe;const d=[{id:1,title:"M3M Brabus Residences",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",priceRange:"₹20 - 28 Cr",location:"Sector 58, Golf Course Extension Road",bhk:"4 & 5 BHK",area:"4,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:2,title:"DLF Privana North",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",priceRange:"₹18.50 Cr",location:"Sector 76, Golf Course Extension Road",bhk:"3 & 4 BHK",area:"2,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:3,title:"M3M Crown",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",priceRange:"₹28 - 65 Cr",location:"Sector 111, Dwarka Expressway",bhk:"3, 4 & 5 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:4,title:"Emaar Palm Grove",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",priceRange:"₹25.00 Cr",location:"Sector 102, Dwarka Expressway",bhk:"4 & 5 BHK",area:"5,000+ Sq.Ft.",propertyType:"Villa",rera:!0},{id:5,title:"M3M Crown Luxury",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",priceRange:"₹30 - 70 Cr",location:"Sector 111, Gurugram",bhk:"4 & 5 BHK",area:"4,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:6,title:"DLF The Arbour",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",priceRange:"₹17.50 Cr",location:"Sector 63, Gurugram",bhk:"4 BHK",area:"3,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:7,title:"M3M Golf Estate",image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",priceRange:"₹19 - 45 Cr",location:"Sector 65, Gurugram",bhk:"3 & 4 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:8,title:"Emaar Digi Homes",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",priceRange:"₹15.00 Cr",location:"Sector 62, Gurugram",bhk:"3 & 4 BHK",area:"2,800+ Sq.Ft.",propertyType:"Apartment",rera:!0}],h=Array.isArray(t)?t.filter(x=>x.category==="trending"||x.category==="recommended").slice(0,8):[],u=h.length>=4?h:d,g=Array.isArray(t)?t.filter(x=>["₹19","₹28","₹16","₹5.2"].some(T=>String((x==null?void 0:x.priceRange)||"").includes(T))||String((x==null?void 0:x.category)||"").toLowerCase()==="trending"):[],A=[t.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("oberoi three sixty"))||t.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("bptp"))||g[0],t.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("experion one 42"))||g[1],t.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("max estate 59"))||g[2],t.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("bptp downtown"))||g[3]].filter(Boolean).slice(0,4),k=(Array.isArray(l)?l:A).slice(0,4),S=(Array.isArray(c)?c:A).slice(0,4),N=k[0]||d.find(x=>String((x==null?void 0:x.title)||"").toLowerCase().includes("brabus"))||d[0],f=Array.isArray(i)&&i.length?i:Array.isArray(t)?t.filter(x=>String((x==null?void 0:x.category)||"").toLowerCase()==="upcoming"||String((x==null?void 0:x.status)||"").toLowerCase()==="upcoming"||String((x==null?void 0:x.propertyStatus)||"").toLowerCase()==="upcoming"):[],p=Array.isArray(s)&&s.length?s:Array.isArray(t)?t.filter(x=>String((x==null?void 0:x.category)||"").toLowerCase()==="newlaunch"||String((x==null?void 0:x.category)||"").toLowerCase()==="new-launch"||String((x==null?void 0:x.status)||"").toLowerCase()==="newlaunch"||String((x==null?void 0:x.propertyStatus)||"").toLowerCase()==="newlaunch"):[],m=Array.isArray(t)?t.filter(x=>String((x==null?void 0:x.category)||"").toLowerCase()==="sco").slice(0,4):[],v=Array.isArray(t)?t.filter(x=>String((x==null?void 0:x.category)||"").toLowerCase()==="commercial").slice(0,4):[],b=[{key:"sco",eyebrow:"SCO PROJECTS",title:"SCO Projects in",text:"Explore premium SCO plots and commercial projects in Gurugram",items:m,fallbackType:"SCO",fallbackArea:"SCO Plot"},{key:"commercial",eyebrow:"COMMERCIAL PROJECTS",title:"Commercial Projects in",text:"Retail, office and high-street commercial spaces in Gurugram",items:v,fallbackType:"Commercial",fallbackArea:"Commercial Space"}],P=[{id:1,name:"Golf Course Road",count:"245+ Properties",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"},{id:2,name:"Golf Course Extension",count:"320+ Properties",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85"},{id:3,name:"Dwarka Expressway",count:"410+ Properties",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85"},{id:4,name:"MG Road",count:"180+ Properties",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=85"},{id:5,name:"Sohna Road",count:"275+ Properties",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85"},{id:6,name:"New Gurgaon",count:"360+ Properties",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85"}],w=Array.isArray(n)&&n.length?n.slice(0,6):P,R=(Array.isArray(a)?a:[]).filter(x=>x==null?void 0:x.image).map(x=>({image:x.image,title:x.title,link:x.link&&x.link!=="#"?x.link:""}));R.length||R.push(...[q2,K2,Y2].map(x=>({image:x,title:"",link:""})));const[C,E]=j.useState(0);j.useEffect(()=>{if(R.length<=1)return;const x=setInterval(()=>{E(T=>(T+1)%R.length)},4500);return()=>clearInterval(x)},[R.length]);const M="919090101401",G=x=>{const T=encodeURIComponent(`Hi, I am interested in ${x.title}. Please share more details.`);return`https://wa.me/${M}?text=${T}`},ue=[{label:"Under ₹1 Cr",sub:"Great homes within your budget",link:"/search?budget=under-1-cr",img:((Ne=P[0])==null?void 0:Ne.image)||((ge=d[0])==null?void 0:ge.image),icon:"◇"},{label:"₹1 Cr – ₹5 Cr",sub:"Premium living with a smart investment",link:"/search?budget=1-5-cr",img:((L=P[1])==null?void 0:L.image)||((F=d[1])==null?void 0:F.image),icon:"♢"},{label:"₹5 Crore – ₹10 Crore",sub:"Bigger spaces for a better lifestyle",link:"/search?budget=5-10-cr",img:((W=P[2])==null?void 0:W.image)||((V=d[2])==null?void 0:V.image),icon:"♕"},{label:"₹10 Crore – ₹20 Crore",sub:"Exclusive homes for discerning buyers",link:"/search?budget=10-20-cr",img:((H=P[3])==null?void 0:H.image)||((je=d[3])==null?void 0:je.image),icon:"♛"},{label:"₹20 Crore – ₹50 Crore",sub:"Ultra-luxury living redefined",link:"/search?budget=20-50-cr",img:((pe=P[4])==null?void 0:pe.image)||((Fe=d[4])==null?void 0:Fe.image),icon:"▥"}],te=x=>x&&x.items.length>0&&r.jsxs("section",{className:"hw-upcoming-projects hw-sco-projects",children:[r.jsxs("div",{className:"hw-upcoming-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"hw-subsection-eyebrow",children:x.eyebrow}),r.jsxs("h2",{children:[x.title," ",r.jsx("span",{children:"Gurugram"})]}),r.jsx("p",{children:x.text})]}),r.jsxs(B,{to:`/search?category=${x.key}`,className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:x.items.map((T,q)=>r.jsxs(B,{to:pt(T),className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:T.image||T.thumbnail,alt:T.title||x.eyebrow,loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),T.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"})," RERA"]})}),r.jsx("div",{className:"hw-bhk-badge",children:T.propertyType||T.type||x.fallbackType})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:T.title||T.name||x.eyebrow}),r.jsx("div",{className:"hw-card-price",children:T.priceRange||T.price||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:T.location||T.locality||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:T.area||T.landArea||T.bhk||x.fallbackArea})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:T.propertyType||T.type||"Commercial"})]})]}),r.jsxs("a",{href:G(T),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:Wt=>Wt.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},T.id||T._id||`${x.key}-${q}`))})]}),Ee={trending:r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"hw-trending-header",children:[r.jsxs("div",{className:"hw-trending-heading",children:[r.jsxs("div",{className:"hw-trending-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["Trending Projects in"," ",r.jsx("span",{children:"Gurugram"})]}),r.jsx("p",{children:"Handpicked premium projects for a better tomorrow"})]}),r.jsxs(B,{to:"/search?category=trending",className:"hw-trending-view-all",children:[r.jsx("span",{children:"View All Projects"}),r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-trending-properties",children:u.slice(0,8).map((x,T)=>r.jsxs(B,{to:pt(x),className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:x.image,alt:x.title,loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:x.title}),r.jsx("div",{className:"hw-card-price",children:x.priceRange||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:x.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:G(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:q=>q.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},x.id||T))})]}),prime:r.jsx(r.Fragment,{children:r.jsxs("section",{className:"hw-prime-locations",children:[r.jsx("div",{className:"hw-subsection-header",children:r.jsxs("div",{children:[r.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["Gurugram's"," ",r.jsx("span",{children:"Prime Locations"})]}),r.jsx("p",{children:"Explore properties in the most sought-after locations"})]})}),r.jsx("div",{className:"hw-location-grid",children:w.map(x=>r.jsxs(B,{to:`/search?location=${encodeURIComponent(x.name)}`,className:"hw-location-card",children:[r.jsx("img",{src:x.image,alt:x.name,loading:"lazy"}),r.jsx("div",{className:"hw-location-overlay"}),r.jsxs("div",{className:"hw-location-content",children:[r.jsx("div",{className:"hw-location-name",children:x.name}),r.jsx("div",{className:"hw-location-count",children:x.count})]})]},x.id))})]})}),upcoming:r.jsx(r.Fragment,{children:r.jsxs("section",{className:"hw-upcoming-projects",children:[r.jsxs("div",{className:"hw-upcoming-header",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["Upcoming Projects in ",r.jsx("span",{children:"Gurugram"})]}),r.jsx("p",{children:"Discover the latest upcoming developments in Gurugram"})]}),r.jsxs(B,{to:"/search?category=upcoming",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:f.length>0?f.slice(0,4).map((x,T)=>r.jsxs(B,{to:pt(x),className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:x.image,alt:x.title||"Upcoming Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:x.title||"Upcoming Project"}),r.jsx("div",{className:"hw-card-price",children:x.priceRange||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:x.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:G(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:q=>q.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},x.id||x._id||`upcoming-${T}`)):r.jsx("div",{className:"hw-upcoming-empty",children:r.jsx("strong",{children:"No upcoming projects found."})})})]})}),newlaunch:r.jsx(r.Fragment,{children:r.jsxs("section",{className:"hw-upcoming-projects hw-newlaunch-projects",children:[r.jsxs("div",{className:"hw-upcoming-header",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["New Launch Projects in ",r.jsx("span",{children:"Gurugram"})]}),r.jsx("p",{children:"Explore the latest newly launched projects in Gurugram"})]}),r.jsxs(B,{to:"/search?category=newlaunch",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:p.length>0?p.slice(0,4).map((x,T)=>r.jsxs(B,{to:pt(x),className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:x.image,alt:x.title||"New Launch Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:x.title||"New Launch Project"}),r.jsx("div",{className:"hw-card-price",children:x.priceRange||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:x.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:G(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:q=>q.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},x.id||x._id||`newlaunch-${T}`)):r.jsx("div",{className:"hw-upcoming-empty",children:r.jsx("strong",{children:"No new launch projects found."})})})]})}),festival:r.jsx(r.Fragment,{children:r.jsxs("section",{className:"hw-festival-offers",children:[r.jsxs("div",{className:"hw-festival-header",children:[r.jsxs("div",{className:"hw-festival-title-wrap",children:[r.jsxs("div",{className:"hw-festival-brand-line",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["Best Festival Offer in ",r.jsx("span",{children:"2026"})]}),r.jsx("p",{children:"Exclusive deals on premium residences. Limited period offers, unmatched value."})]}),r.jsxs(B,{to:"/search?category=festival",className:"hw-festival-view-all",children:["View All Festival Offers",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsxs("div",{className:"hw-festival-layout",children:[r.jsxs("div",{className:"hw-festival-banner",children:[r.jsx("div",{className:"hw-festival-banner-bg"}),r.jsx("div",{className:"hw-festival-banner-overlay"}),r.jsxs("div",{className:"hw-festival-banner-content",children:[r.jsx("div",{className:"hw-festival-mini-badge",children:"FESTIVE EDITION 2026"}),r.jsx("div",{className:"hw-festival-banner-kicker",children:"FESTIVAL LUXURY"}),r.jsxs("h3",{children:["Luxury",r.jsx("br",{}),"Homes.",r.jsx("br",{}),"Bigger",r.jsx("br",{}),"Celebrations."]}),r.jsx("p",{children:"This festive season, unlock exclusive offers on premium residences across Gurugram."}),r.jsxs("div",{className:"hw-festival-perks",children:[r.jsxs("div",{children:[r.jsx("span",{children:"◆"}),r.jsx("b",{children:"Limited Period Deals"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"◆"}),r.jsx("b",{children:"Assured Appreciation"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"◆"}),r.jsx("b",{children:"Flexible Payment Plans"})]})]}),r.jsxs(B,{to:"/search?category=festival",className:"hw-festival-explore",children:["Explore Offers",r.jsx("span",{children:"→"})]})]}),r.jsx("div",{className:"hw-festival-banner-brand",children:"HOMWISOR"})]}),r.jsx("div",{className:"hw-festival-grid",children:(Array.isArray(o)&&o.length?o:d).slice(0,6).map((x,T)=>r.jsxs(B,{to:`/property/${x.id||x._id||T}`,className:"hw-festival-card",children:[r.jsxs("div",{className:"hw-festival-card-image",children:[r.jsx("img",{src:x.image||x.thumbnail||d[T%d.length].image,alt:x.title||x.name||"Festival Offer",loading:"lazy"}),r.jsx("div",{className:"hw-festival-card-badge",children:x.badge||"EXCLUSIVE OFFER"}),r.jsx("div",{className:"hw-festival-card-arrow",children:"→"})]}),r.jsxs("div",{className:"hw-festival-card-content",children:[r.jsx("h3",{children:x.title||x.name||"Premium Festival Offer"}),r.jsx("div",{className:"hw-festival-card-price",children:x.priceRange||x.price||"Price on Request"}),r.jsxs("div",{className:"hw-festival-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:x.location||x.locality||"Gurugram"})]})]})]},x.id||x._id||`festival-${T}`))})]})]})}),branded:r.jsxs(r.Fragment,{children:[k.length>0&&r.jsxs("section",{className:"hw-luxury-projects",children:[r.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["Branded Residences in ",r.jsx("span",{children:"IN"})]}),r.jsx("p",{children:"Explore premium branded residences and landmark projects"})]}),r.jsxs(B,{to:"/search?category=branded",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:k.map((x,T)=>r.jsxs(B,{to:pt(x),className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:x.image||x.thumbnail||d[T%d.length].image,alt:x.title||"Luxury Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:x.title||"Luxury Project"}),r.jsx("div",{className:"hw-card-price",children:x.priceRange||x.price||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:x.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:G(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:q=>q.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},x.id||x._id||`luxury-${T}`))})]}),r.jsx("section",{className:"hw-branded-feature",children:r.jsxs("div",{className:"hw-branded-feature-inner",children:[r.jsx("div",{className:"hw-branded-glow"}),r.jsxs("div",{className:"hw-branded-copy",children:[r.jsxs("div",{className:"hw-branded-label",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["Where ",r.jsx("span",{children:"Branded Residences"})," Meets",r.jsx("br",{}),"Architectural Masterpieces"]}),r.jsx("p",{children:"Indulge in our curated selection of signature branded residences. Crafted in collaboration with world-class fashion houses and legendary hoteliers to deliver a life of unmatched sophistication, bespoke concierge services, and timeless value."}),r.jsxs("div",{className:"hw-branded-points",children:[r.jsxs("div",{children:[r.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),r.jsx("span",{children:"Concierge & Valet Services"})]}),r.jsxs("div",{children:[r.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),r.jsx("span",{children:"Fully RERA Verified Properties"})]})]}),r.jsxs("div",{className:"hw-branded-actions",children:[r.jsxs(B,{to:"/search?category=branded",className:"hw-branded-primary",children:["EXPLORE RESIDENCES ",r.jsx("span",{children:"→"})]}),r.jsx(B,{to:"/search?category=branded",className:"hw-branded-secondary",children:"GET INSTANT CALLBACK"})]})]}),r.jsxs("div",{className:"hw-branded-visual",children:[r.jsxs("div",{className:"hw-branded-main-image",children:[r.jsx("img",{src:(N==null?void 0:N.image)||(N==null?void 0:N.thumbnail)||"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=560&fit=crop",alt:(N==null?void 0:N.title)||"Branded Residence"}),r.jsxs("div",{className:"hw-branded-image-card",children:[r.jsxs("div",{children:[r.jsx("small",{children:"BRANDED RESIDENCES"}),r.jsx("strong",{children:(N==null?void 0:N.title)||"M3M Brabus Residences"})]}),r.jsxs(B,{to:N?pt(N):"/search?category=branded",children:["EXPLORE ",r.jsx("span",{children:"→"})]})]})]}),r.jsxs("div",{className:"hw-branded-side-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=900&fit=crop",alt:"Luxury branded residence"}),r.jsx("div",{className:"hw-branded-side-overlay"}),r.jsxs("div",{className:"hw-branded-side-content",children:[r.jsx("span",{children:"HOMWISOR"}),r.jsx("strong",{children:"BRABUS"}),r.jsx("small",{children:"RESIDENCES"}),r.jsx("em",{children:"POWER. PRESTIGE. PERFECTION."}),r.jsx("label",{children:"COMING TO"}),r.jsx("b",{children:"SECTOR 58, GURGAON"}),r.jsx("div",{children:"4 & 5 BHK • STARTING FROM ₹20 CR*"})]})]})]})]})})]}),luxury:r.jsx(r.Fragment,{children:S.length>0&&r.jsxs("section",{className:"hw-luxury-projects",children:[r.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["India's Finest ",r.jsx("span",{children:"Luxury Residences"})]}),r.jsx("p",{children:"A curated collection of landmark homes with expansive layouts, world-class amenities and prime locations."})]}),r.jsxs(B,{to:"/search?category=luxury",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:S.map((x,T)=>r.jsxs(B,{to:pt(x),className:"hw-trending-card",children:[r.jsxs("div",{className:"hw-trending-image",children:[r.jsx("img",{src:x.image||x.thumbnail||d[T%d.length].image,alt:x.title||"Luxury Project",loading:"lazy"}),r.jsx("div",{className:"hw-image-overlay"}),x.rera!==!1&&r.jsx("div",{className:"hw-rera-group",children:r.jsxs("span",{className:"hw-rera-green",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"hw-bhk-badge",children:[x.bhk||"3 & 4 BHK",x.bhk&&x.propertyType?` • ${x.propertyType}`:""]})]}),r.jsxs("div",{className:"hw-trending-card-content",children:[r.jsx("h3",{children:x.title||"Luxury Project"}),r.jsx("div",{className:"hw-card-price",children:x.priceRange||x.price||"Price on Request"}),r.jsxs("div",{className:"hw-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:x.location||"Gurugram"})]}),r.jsxs("div",{className:"hw-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:x.bhk||"3 & 4 BHK"})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:x.area||"2,500+ Sq.Ft."})]})]}),r.jsxs("a",{href:G(x),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:q=>q.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]},x.id||x._id||`luxury-${T}`))})]})}),budget:r.jsx(r.Fragment,{children:r.jsxs("section",{className:"hw-budget-section",children:[r.jsxs("div",{className:"hw-budget-header",children:[r.jsxs("div",{className:"hw-budget-heading",children:[r.jsxs("div",{className:"hw-budget-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}}),"HOMWISOR",r.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:xe}})]}),r.jsxs("h2",{children:["Top Budget ",r.jsx("span",{children:"Projects"})]}),r.jsx("p",{children:"Smart homes. Great value. A better tomorrow in Gurugram."})]}),r.jsxs(B,{to:"/search",className:"hw-upcoming-view-all",children:["View All Projects",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),r.jsx("div",{className:"hw-budget-grid",children:ue.map(x=>r.jsxs(B,{to:x.link,className:"hw-budget-card",children:[r.jsx("img",{src:x.img,alt:x.label,loading:"lazy"}),r.jsx("div",{className:"hw-budget-card-overlay"}),r.jsx("div",{className:"hw-budget-icon",children:x.icon}),r.jsxs("div",{className:"hw-budget-card-content",children:[r.jsx("h3",{children:x.label}),r.jsx("p",{children:x.sub})]}),r.jsx("span",{className:"hw-budget-card-arrow",children:"→"})]},x.label))})]})}),bhk:e,sco:te(b.find(x=>x.key==="sco")),commercial:te(b.find(x=>x.key==="commercial"))};return r.jsx("section",{className:"hw-trending-section",children:r.jsx("div",{className:"hw-trending-container",children:r.jsxs("div",{className:"hw-trending-layout",children:[r.jsx("div",{className:"hw-trending-left",children:X2.map(x=>Ee[x]?r.jsx(j.Fragment,{children:Ee[x]},x):null)}),r.jsx("aside",{className:"hw-trending-ad",children:r.jsxs("div",{className:"hw-ad-slider",children:[R.map((x,T)=>{const q=r.jsx("img",{src:x.image,alt:x.title||"Homwisor Advertisement"});return r.jsx("div",{className:`hw-ad-frame${T===C?" active":""}`,children:x.link&&T===C?/^https?:/i.test(x.link)?r.jsx("a",{href:x.link,target:"_blank",rel:"noopener noreferrer",style:ou,children:q}):r.jsx(B,{to:x.link,style:ou,children:q}):q},T)}),r.jsx("div",{className:"hw-ad-dots",children:R.map((x,T)=>r.jsx("button",{type:"button","aria-label":`Advertisement ${T+1}`,className:T===C?"active":"",onClick:()=>E(T)},T))})]})})]})})})}const Z2="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAoAACAAAAAAI0AAEAAAAAAAACywAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA3AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAADc21kYXQSAAoJOBl/7MICGg0gMpABROABBBBAoNf+rO9vENZLd/knyrmSDn+LrrbP4gtu6IqPzSGEBqJCxkZ1VjeE700QtuJ8rk7fzYoymKuOz3F8mJQZPeMVt7r7QEAAHuwn9rdxogLAZ0ZmsMktnVAdeTg7PUmU77ZW3Qyx0ei/EFsGy8xz2gYfo2T2gHm1s1VAVqEnZjFJ6tNyuICqACTkORV4EgAKBhgZf+zCoDK+BROAEECg2AF6CPOtQrgQv854b1HpCkV1NIyqo2TMFkQ6KjRsg/nP7fpXYXAcNAanV0M2nuSlKvHk+0ND/gkoxtQzRIlOayHB0kKoWGfhdAD8sf0H6E5lan+y59H91rcOKV0qehLUWP/CBvYw/HSZEVDLNyB79Co0oTfACpudbB85tlwnAQ3kK+D7BR7HmAXGtd6tPoV6pximDfx0lD0xOeyvILKZWGOR1N7TXHKAlV9Y295tQCaaIieXZwYk+fk6pK0usqquawkHQTKUPfu5vg1i6tzcyIIcT54y2hgBEQQ/2bPuBWslovdeQQBkDEj+4wHv2PfOMa0z1BCetsD6nSuoUQFnoUyKnAx2e3LN5g1XdIS57uxf3hkYRreBYfnj9oOngGNJb4I5kpb4r4EIKb+qiuxQ1F0jGQAayWMSSjyi8/Umrs8RtHpB3fnYE9qHsZXGU8DrmkiDHza3efTJvYuREUW/Lz9n77+Ch+aQtF0TE5GoV6zZxvFLUJohT2tSg0GQucjQDrX2c5dP6CFar2EhiMOmozUUxrqxViWpmR6EInQF43RCzO103Bw8Gu/OkEM1y63sacqie2YF1cjoqQE2ToMAFJYiJSmtowgwTW0JJzWnKWYWA2UycUXiAldYqzDSstUFONom9y/XVpYgYk2oFyztdLtzFirDt2OD2MUsf1kKCZbXZum2gzcgENJRzj6ZJmjvUYSDisd5gm/6TyQOcjdNtdVlxYCIYdQEwrn1NLmuMDaL6xvbdhQUDKpCIwXzEulLxQmxmeXtBZNbKZFu1g4eLPaEWz0F/lSy9wYVa9qAeSUL4A64l05X+XDelVQmiD6k67bEqGwp32eTfM44BzQ39Ify0ULRoHFu4XMH/OaymRxzVWURY1R7CJHoBAvbDvjA+eHQueksGcxvSh0MCH1EdQ03/SOhUpzpQA==",J2="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAywACAAAAAAJfAAEAAAAAAAAEQwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAAaAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAFFm1kYXQSAAoJOBk/5YQENBpAMrsBE4AEEEECgOk/eGS8lanpaeNHmUGZRLVVeklRS9cl8H9vn2VoabkKAsvohpQxGtxZeq0OWmG7cmDNQNUjpZDG5e8sHVCwHOrS2jc4nq9ULizp9ngaDEZJehfgT8Bf/bon6jz4rPzxVmDV6zdusv4Ct+2xL/rXOZIddKFz8iqctnO7mfNR5jjGT86mcGpRKr6c5YNjlSYTgVA1tTyikKNV6lEK6S27QzJ4JL1O9ypnl4Bu16mKlD6R3RqzgBIACgYYGT/lhUAytggTgBBAoPHZap47IRQ4Hg9u0O9scpCGlLiywQuHfoWLWI8xWzb7L85i9N+wWamvtPBG4S9GNo6VfrYzhjvKBZUjwcATivHUaa3q6nD08rr2AngloVt6TNKZbgrMtW6jeaPQbWE1abD0xG+WkLXXvRPav7Spa+yw+1Z9ntt6lYd3yGcPhPp7TAngTVFADvkAvgdTrMogXMapEQE+R9+2MHwvwn31xDHmsirJsa5z/+ID8g+Otrlb4YTNm/QVfPKBn3p/8EFUo+52vMa/fM551SNKIXr8O4P1BpBuR3OK7lVU7txqN+gdj4prLkOnMod90UrFrsQCy3arRgfMFhOi3N6PV2fV60u6y+K7QI9mrzszOSb4tVDWgZgFCdzwOgRf+7NtO7Tr0W0N3rvetY/QaRf1DJu59KXXtMg5jaFiu1UGMlemMm0A/58cIteaYgSrC7EyIvjH49m7KF7c8maDN9oLE0+HeTui7TzOPXdMfKvxECMUKeXWzCf6ZnwIWA0a4n4hkM/NuzNMfP33BXf2dBV9dYVEe/BcgfYvBjujrh91ehoEbEyB1+pr+SOjxUaIrEmId+agerWENxuqvI1S/4rSQ80whmu8/fp6vmso6x+/nNlDAqYruUuQ/5E0ykZW5jn0bpe43/R3nAXUIhsmEqa/FVQLyf6TMrqPr5A4/OIEi/1lvRZAu1TKvXSQEvffXOO+pxAHkNM+7mCGBphjEz70RoZnIwfqVC2mHRot3NL3kZKpANUMEoKhrc9KgX2688Q3DJGWVgBYWKnwWElgyLSC/4NVOTU0NoNNzQMG2JMnhgu+egyZ8LSH5eAmhWVp++reie9tewP89MVlfFutxSQr5tui6mjoVY+DY2qCm85LvOfZeEdPZ7P5PgorVOUw4BXRReBl33W1fwYIQzYS8GPLbqNW5bzZshY861uuy+/37YOJrAYfDc5VXmvaSYPeJwxHP2oJWh8c1MK8noe/8jKojkiybgL5l86/A8t+10o68dMhCS0SIp73i5NVAvUBEUhth/rADQe9Eo7QqNzx1e5PSehbsXbFesyej2ui5VYJ4ezAlTWromtruqc/Q68Q7PR9k/U/Mj2zdLXU6cTWcHflLP5a2VQz7O7C+t2kCxY/OgHAWgziUN7kWXL4rqZ7FNYzdi7UEaG2sSrWj5TyZ2ACiiCL17+19fxTx90rpXMh9s8FVn0I7E7YY6d5rb0Vva9BXPVqEjQXBU7jLFAGL0rOGON/zRc1BgIhpQAdYmBV45SNaI3EyeL3s1eRg1Um1ViJjEZF8GiyVYTvqR6lC6A6j3JBBEwtxlEBmrz2i+qm8Cca+dpW+pMw/5zCs4H/9Bxq1RyOaHhtq/WWT+vPgPXpaU4YMSVzTrtrYrCg7QbqZFGuHf7PZ0KXuOJH5AOHLn0QVAAvatI7Ff5hC0KKSCxFMUcVfJLw",ew="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAGRgACAAAAAAfaAAEAAAAAAAAGHgAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAArAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMbG1kYXQSAAoJOBl/1MICGg0gMrYMROABBBBAoNtHy//xpL+BV005da2uB8FibEpyx0i6gZ+cxoTNByskHj1fGMns5mSTZeRA4ivW3JWIiU5DmaL8aDaFEMMj+FkHGc4MTmL0EWofwoPbZxmnaPAuHelRdiwofFJtrEk4nNA54Gv6+Xz5q4oeJAblByJMJNKEM4ZWOZPpnyOrjOQ3dCEKFs4M1BwQOgDlbHULxwYzIUqRJCQgwh6I639o6C8nQeI0xMOH/LRbWGQGHzf2IQ26yBbeUIaa9Gu6QNCI0fsJhRGxoGE2feMolJzcPJtEv85fCpvKoyCcaqcZnDxaphIKl81OfF8k4rlTkftpwdlTHwao1iIAKsnPycD3v0f9p8evTJX94lkBblYwU40ejDU/mHIAleFIoTGLCX3zq01TVVd0Xp2huvXgwATxzpw+atU7xkWNaEf7toWfkL1lr+M1oieLbXnb38x4LY/2eqE1W5tcVGh6pbHslal76xulIgHhhf74sD7ZXbJ6NOn8V3lwuXiipTghp5E+dfweQUjsKTS8G3+oc8oL7gBPGzsCC7Ty2rkKx2Lk0PFRW+fI63Ow8wF5ItOuGtPs7zmqJfKxgdCkaMoiiWiDVaQdTS5n/GVI9eMeGRX5YVuNcYiPR425IwafPlvY7bheLYobQAGjBhEOEyLg7rlGdr6OATWsKu3SbpprmuHzaBTJnxBHd3SKuRAIrmPMOSfI/bZydF8lKlrv5L/4sxa+LK3zj+uM0r6mypD7YXxX73wjyGQL23hFYkbMTiJNyHvgkt2f2k1EZaCXg9zTk4XPtJbwyZNaubGpZH/Gs5ToN393Sxn1OZZLbKgMRaE/jcoq/oiwcfDZB93bGV4KlxCY0psuOOkOUwL9IsmriLr4Jwya8BtiWFLC6pTeIb7b5Wdg5IZnQcAq7XbQr9Lb7mVdehrrM7dCW+5mu0DZO62eL+H7TyghTMlDWaQY02MUQkIAo/f0zt+QAn+USE6hXQrKA/G8w/gPu4e4vRjSxNwEx1yYXVUcyqK7apo+idrp3VjGXL5a34WU2CvE/hTFwDbWdd4PqIHNdGcF1wnL96bStttvvFW6+wffekXtcUUCuy+k9L5JSMSgP3kCL7TiwFgAUZw20b+mBWwPid6VILcFKm7XLQDnjPns9W4srvM9K5IVsve/R+6+n/XEzR/WpzWZI7d3RIae1H7VDEGjJ4bZOiiAr+prstLxKNMUqA0DA0lx//As2hmMFHURGb4ksbYCl95MRD0p6HaCPtkdOOagG/SZ9ANgajxhBOvEx8GoOtyxX1jGlZy+XSJmruTkhWX7zMp5rCofXUHle8p58uBiT1xIGxp0PHed9PDb+5tVFHZzxNrLuCBuCsdMj+yooxFt2MwKn5vC/RalVSKtPS3Y/49s2RXiRFblQOdBnIxnHktdGIQd9esvzvOur7APPnDS4HCTqgKBMDYGm8HELritbP6qNNf5leP/W3SbHdtQ9/Oqy2kr+Q/DxgkYpt7FHfLZ3gS+nufw5nJfni2OG+I3sZGdxUB3TVja6EaiobNb/PqrOEkJ0lYxBeNjV20F1OiP6LqwjDk0ZlTG+3Dpy/Mi06eDvR+VAy60xC0+w2QPHxu1PwWxIr9fCRPPi9pFoqgBojz+LYz1HMl4mdv8FVMj2u4aJCeZBjjCyJwnDm1Jce3oPadVpu9nPYaNHieVL5OtBsp7ffwCsrbuxiAf8RtVhArjrJVV64K83OJZi5/gCDpPjQbwIftfvLDJab9N0HgQaxFwiBfuxQv6Rl8oBjLVuEqI+6/PoI12qgBF+80pTxwxbTy/4X1NFFYY1LjMkmGPE0uDV+QjsyTyplpH39/x8O7O2/SKRYuj1JeZtdGESiL3eRaCI/33n2VS2p4ptYyXszcSYLYLIlIWazHWw3iPNhaOE4HMh6VgARh3i+JqF/GrSis84Of/54KWJD2Xg0GQjL/xdFmGq8a7MfkWoeV+M+ed9eLD8+MBmHRxUtGMsd4qqwxF4c2Y0exuRD0G4Vgw1tiihIRs71FdFb4v8o4XBkW9VN/KhIodE1ZBjCzhx0kps8WNWWXJmWO2c5NKsX/klYseKoaGBng0mHpeZCFS5maK8XTx3cLERIUsRqkBwAYnAG+AEgAKBhgZf9TCoDKRDBOAEECg3SuGKP+8I1ONpmimVw00nG1fF14hXu4ERHojUiU2HFWSBbmCWdbNOSdizZjf749/3U1fkhhfHEwGhBbxf8LQx+hKAIjKlxxF44DRzhVxrL5FpjkxFkDYDDg8NBnQ0yfHpd2mNLfNHqCUt4PonpKKuVY936v5mdcuDrZ64O5rLP0IjXgOGwI82T90sG3UEkIGLctVdG14ZyazXQOYh+JlQRYhjgKM5wxg3sqgXuYCkSz1dGJ7nJIsAeHiWxEdEmVN9TOyvGe4VDkZIyvC7u2XbsMN1mIPBDtxajVbUf911aHOS5F1oIhY0v3Dq4J/ULTza10G0NfqaU8QbnTyYkvmCcgF8vxoPlkiN3kMXCYfsLKSVG6rmgxjK8Rpf5//+QOfHNYv0WFVtYLFXTj2N5EI+NxPUQX3TTFsL+6RelpY0MrpGamHbN/8sTAJk5RU8mJHqZjRtfoYi6bM/o/a4DRGu9sCYtsfmJO9av6p/kpyAeSJZh+e/93Nk/wI0z+mz+88v611zWr4GA0YfNehbqP6LSNBln6WmC0acvJnh1Yz8sxTXibYeXkrvu1DwGizQ5hcIQYJBJKYaYewlL28E7YnD2Pfxjat/n7kC+Wg0p1U3azZOo/n9oDkAouKVQTmxgULOVvKr8thrXC9vVrqlsb57dNzLZnU7nRgQTOWM9jQwDfna+d8wnvLT9Ne9EQrlYQBMQJVXepg4hSHRQfGI0jvE1h9iG1Bq+kiUQlQ+KEXSNoTenTp+yoamZdEehujBb4ThrjvKVtc3azo2qdcNMjeJ5o/GQFd4CPpoHzPGt3VxqnBDSBG0Gudes4/j75G6DjU9nPSY2G6i728nOAZieWhKnvqHQlnOnZEWRSZoWPqfzjH16Ynm6+tHwAdsteK12KH+x1wq/8fc9RFZ7pQEOynGBhEyVBsmmmkGpWdzgFAF6Qw2wCpfoamNr8tpjtpWIIyC3+QAf7g9R6Q0F0/lMsOMbjq6HBTYrv+OikBSwgmhmYPyTaLi5wtKacLgiCx9QSEn33+j8y4iFSuxk+GuT48EIqkVgH0jvEpNnp4dL+0ylk4oWplMzR+iLUERVBGvEp5rwH7PkX9rX8tFcXUAfgLcyGZGyY6WOpq5E0qJHy8YopxBQSENsKhFYanjKQFc3OXZ492BPvkD7XCTitAFn+mxfQK8afPuu0tkg2PBXigMROQsBdLFmHpM5mQdBdjd3wWir3+q8bIne6HTKQHcLbSS/BATiixxMuWdbW9ki13ID42taJZs2m9I3pUrN2w4TdTEoFKcOPlpavCxFcikkEjRB1MhL9mkHAU5o9Aedqa/21aBbKrBl4Q0k7JmnKRF+Rb4AmMw7X6sGHD5hMdGuYXep1NnSJlzD6HvZhARCJzgDvPZ4Jx2puZ/VtW3OTKuTNzyyC+/ANfVHbiYLkb2rwOIY6yyzcmPfJ2IdiEU0JXn1Ekxk8l9HhGAAslJUhB/NdTm/ICpXnT5sWpz6eVrwVX3gIpDzjNRnQbDFXiYuO8dJNQlUhEVMnhVVvpnPX7t1Ud3bvyzVUL69B7c37z7yZxzBSUUfkTB6zl6raEs0fDOKYV45+1e/yT8uG2VIw+L5DvjLS/CkU9t1v3Lu3ncnO01DGzuVYzSxZUc/opxsgIi5Aow3CVxChJAOt0ziYpH/EjIKBAetL2jr2ZAOBn/D4b5FcKHlCQGm9rnrsGtL9U4cs5Kyw8M/BXPuHTxGXtwNC0A7xzULUrX/F6kENQDBrSkArPI85hXaIcJQyFPzDnhNuBQUY77+zx0aPHEN0ITnZT7QPaRPfdUM47ldyvu/tqMtDpSEWvLJX9Zfwm/BKxcAuG6CE22I0xYSYDmdmq3hIOtrdCioZ6leJBy4rS0+sFDU1n5MifB3Me0UQGjgJDk8YsXXGnyv/YXXsKXQhktBK7uloQouEArIGOhxYK9AdOm+oGP3h6Gc8Vyw//JfklNRd7e2NXG7iB4aZPWtSi4ukOmdsbgr0hW4Lpjq9RzgJsr/yYE3CSDCMfJlTDAcwbiPOY4HtFiJnkXdMpU5SbmbKhRnJwWDCcYf7lo7f8",tw="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAFhQACAAAAAAcZAAEAAAAAAAAGhwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA/AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMFG1kYXQSAAoJOBl//MICGg0gMvUKROABBBBAoNzPlcdBEEEDVJnuiNEyPdUPh1D17yYOiwwITk5pZQPF2puGWU0UsUVI58UZX6fa1WWOl3m8b0c+z2a6Waaz22bLVfCxZ5pXOoKm370l9SZ49/jOa6iu940RhQwAzCpsXNhX6Ho5oSdTpTYfQFqveq6Ik3H413RRV6hhBgbEjG4A3FveJMPe5Eib990IBhxn7LQljie8Ayx2e5Ogu+jJPFHj07kmCi94iE9nEg66X4uxdtdrJf9SVCtQG1si5GeFxt7Mi0TZ/4XwdlxVmOmF7GoeoAASRXMwb7CoYQxPB1P54KaGEjfXqHdXUbl8qYkDR2kWKtI5UVZt03be6xg6D4HtZyMdEf6w0tpZjafeiPjd88ckp0386AtCEbIYhWwb8YcNKg56XEG0e/4n/ukz2HyL9L7VRzI36aqAjrcQ6xKoao+ZfHhms0iqCfYlzygK58xcRLHQo2TX51FuGq/SY3ih5csT84gv38+gpqATqXN7cLvvz1mmkLhYPlMxE14JCWCrUAPMkjkf8mslzya5DjNNGia4AqgpuAc+i7jzkCGGvDTjPElsgHh/LBQAOXSRNW39UCVediApyQoFGZjxY/3PKZuyGJMC10HJMW/CcBJRF4Xh1oRwpLYlBmeIk6tLj/A/AAkiJNlbdkQDg6brAgG6g+s2saoiImylp9dwwZvxaZOBcj0DXj4Sbl7FbaxoLmcA75yk4/vP/TJubkqCTSt8dpMEwWRTJB+4YDivnGfYoXVtVokgMDps6zify6yQbZv9JBpyCVDQFDGwcwT9paTtbVpf0jxEYj5rZ70dvfHAZ6vPVyplh4ymJCMDESg+iDO1CjoeWeqxb63bOdJ513RWzSxIh5JSBl6hFOQT+cx6k01U2C8RAGXieH89BFwWhXkxQBMCfRECrO5XSTICMxoqsk3ifUz38WtXed6wJmtJVmM4hCGV87oJnpCK41/a+Nes4mJTLR/yZJ8at8Qle1Zn+knoFw+qjXmBwSNvqVwCI98VeWPTgV35drY/36M80IbO1zJE8m9Ka0l+QSKsnZ+366IGGZNOje/PiAjHGuiEex0F45MsReq3vavV0ZnF1gSbtwFr4F/X2fTodroOZfhvVsQwOYQzz199+ME6oof5Ay5fdzUn48V/iKdgwOof59puBDjUO6v920lQ8S0vJ0nh9L9xi0U8BRYDGD9qnLeFt4uSU+Rd61bsiBDsgY6VEaxDYWBXbKU5aaEmcotZVzTGaK1sXtPIXyQ1a2VXXYIliND1PMwieFBz7QYa5K2AcrlcKlKJBTN7+sutsWg3axJp1YlTVVkO/tcF/g02ynMc+eZi2lxDUOBw70LMk8H1sKHX/emW1a7Z6AsDsoCFEGlyfPv7xJFllAHEOMcpvSXJhk8chcUQNgo8a4/XAI+4fsTHbjhkf2xf3KHEFWV6FdzvaWEFhtV+uDN/OE+A6IhNbDNz8IgcfKTLNF9eiHGa4d6PQpoNTaTqkzE1We/xuwpcRac0AuhHQBj4+j+BFtxukCK2Two2WcCSZNg1eYdtL5JNpO/Lji6PKitVBEIq9Y9VJ+R1Mm6+MDqbX0JpGl4ikix/SfWnmYaPSKscQKCcFqG0ric6h6HqCSC/32fCdhbciibTuOQUR7zPmIM8t7cSWkWvbIqvIM1oqGf2MNtVLvbgOsV4CBohYjzyEH5lXJVLq+cXoUy3vpRg5T5X1zPSW2v/gxv32QlOT8rFLWTKVXwHOBPKejx1rSEDljMPLi+iW6SJlw+bbXJCqPJRRQ+I+mzNMeiRiK9rYL+M34nwEGiL2Y3fOcMJMvJK+Ynr7VpV/1bWCIrfWu51HUNagaaUf/5kfWLq6SK0s8jLjy4SAAoGGBl//MKgMvoME4AQQKDdLANY8a5ihC48a+vLruZGsFg0HSjw82XLtKa76l4MgvsZg9+e82JsgiJ40yYqpXAKUr5jMcxbPLa1aezsLhLUU8xDbJmA2OfB2qcG5GDKwGrmvBOT7XCquIoP0aWnXi1PDbtjRScSFFQrnk2ltlNfBHOBML0vZeE7eRWrYCzA+mzNOttjGCWS2PmQ0j3IHTmg4ttly5a1vHaRB1ZfBEkRHyK+ePREQIndkEfigjjwO5O4zSh1lceAt78FQ0qYTW2hVbUKlkoM4BS/FlGG6ClLgrhIJ5KQAIBao+KIJatEoQ1V/mg9yU+j5JSapy/DT/as9tD2cXgE7LYt2r05PVEBf+80913xydEWHFXZqiZ49iN63sOwn2B0OR2Fi3VUfhrGz0WZhtlA/iX/Vg5bD+palvqcFo0pVsNLcqIDUm8I7WCQZbAmImjco1sLPJfBEWcl9Vq2ql+bSO40lK3Jf7ZtAQfKTkmzwVwNvOZN9/JoGmEJX5u+21ti7h2aZ4XSYqQZHmx/F/jh18jMsTi9fukpC4adDX3znpRFThlBrQIE0db/aO9Xpk0jxDn3FxuGwp0cQEwlOLYxURRTMdDbgc5+VUgaMOol8pXJFGGRTA882qtCXTiooNPeFN4ycNVVXKk52BwlVF/jCwajXcYu8gW5dU3jqUqAPGt59JMuc75xGJ7GEHvg3YisA4dw+s92/n6fSBJwA/2kjt2kT28RhiVn4JK5JICqqsJ3Brpj01X9pV51NMwzYu3TYLJGBmsuZtQsbQLKCqP4IafF0AT7WzxDGpoTXtUIk4kD5SKiEEB3DsbenuFg/JUts4n97/RmPomunR73JyNnYJNsnjH4wkwwyI7LFXDgcV88DRRT3Iue1NMYpXrEEftSiUOAub5CJng2sjG2DHySt/6bzMN4e9JLdKuQWAbtS6OsCqUOx+viYC1J60o6eERTtVjERKLGXN3Gu24Lpo0KrRt7AdmT+dedcawIrrOBxmK8E804X2oKotOOM6/ON5T6p1/XynMqsOYT8e978BW2ZPSHNyzkhbUZ3jOoQVp/xjE2ujpv4ZiIZJcekY6p2TDWL/5XYOlJ9bTNACxLDt1UHFMVsbstNwczq8SK0PbgLneMBamWM2yzZe1fDzf48qoLZ4kAl/rdmwkdYd57H1Af+Nt+ONObw4ah/Vou7dYwaPMY3jvhmLtCJQNst8x9VU7El3/2Fnzy/elWaH3+XARG8fdRCGoXHxMUKtWzgNwpwnc20flCloJYopyMvTni5F/0pNMd7yZXL0Rc9Ce25KzaWIkhjC7htQZjojFR9CqSeCHV3XumzpWITIj3ruoSeZFOYokHRDQbon1hqQTpoP64R+phdnyOqnlRDJhfz6O2E0Q3yqRNtdgmUqpE60Ir4VB+8o+I3Uflx+ahPERdy3eQdQSs8cxZC8ou2pY5NGqr+SJDfsaUBDyjyl4pQJI8+AS4Gr34T4E6hj4BZjpkpW9a2qbjTGvVPkuW6ZyVVQJCxsQYEPXFzZi+WJzeVmbwi8JdkVjNRzdzcVoFSfOuFwl22rzKXlAKE2vz6TAywBzGf1JUYbnsD3PgdEP3ZyCPm0ybTo3B8COc9Q8beDSELJEeP2jPzY49uiOr/Va3Wa+yel1YMoPFIKlTeGXbPHD3N6oHV86LdL5sh+MuuERlO4x9V9mUMwCYT2/8cBpDFx85nUAH/4UR/F+PtnCrya3JIuqr4nqGzVKBNhm45Yl+HP4cTgqDAomfIkjYnbn2FsLjJJbVe+1mFTjzIb5vNrQDKejncZOaaoaX/TKBQvsz923cA8HBskOuImA7hRahRpY+VCF7SRZrywBUV0NO79u2L0Q5KzjZa9IUkSKz0oyPCwrySlyEOUVAWNtKA1G+sWDvJO9QhgYsodzyAOmhWL5wek3O87lbR4CIV3E3yAApjPESoiixidoTTM9zCWphpe+Z5WAeAwTRWjJx9PI+tr1ZA0gRmcHp1Jx7x53DAbt7y/QnLuXb/ERSDpNQgm3rtFK2UHYswgF2aMXCjkR1KCKj/A4eC0FbwZzCYYIFr7GX9epy+h3pftHHR7vMfqFwRKfl6OmLKRQA5efu45aSzX4GunRaAcPOXijq2yx8bVcIg8rDQRhY9Z8XckDIxJ7pabo1ZrGp8E/KDM1MrqDEFGn3wjIWavVfZrAfKo4QGg3pDyeZsGBjKyBmIosZlj99/8A=",nw="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAE5wAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAABVAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAATvbWRhdBIACgk4Gb/UYQENBpAy1wkRwAIIIIFA1/7S1hAQbgM6tsfIR+WZ4mBsWILYI4fSZfdrILAqhSRq0TCSfh4ly+WvJH2UQQmJtmJgSZGxGiKUfdGbZfI8bourfoFwGzt7lDkVF0JFqinz2egtYGW8p2ziHRrm6cztXUUVDJ7kifCblyVuPzGDNmZg9AY2sgXV6fGAt+acCIubv8KAA8db0udbboWmHP7x5yGnFU/2OlAX7Rvo5bdHuwhDccDWMm9R7lJW6v/ejbhL0JJa46jwhhATpftcuzrpg7Q68EKv9aTrOLv9tts4GckwW8kylBXlZpyxi1IwBK2yzq9ZhPoaCNs1eVCg+komI1918AN0B65JUBs6VNWB9ZlsLqQ/umaD6JVfuEyfR3q7Za2lJZbZhecxamE3nvCBfRIY0qcxGY1ht5+YeaUhLe0SZrySKMOqOzDtI0EZv9xIZZySzkurs2+eWULcYVVdSK9ny+RS7HvMG4wCGzyCApIHDnfeOhWC7QK8C+PMUOy/OUuECwr92h1oOP3m4AO6uoMjPI4JIk2drvNxNS1JoCf/X/2CSKE55zAoiazDueW+S3r2JILTK+QxbKhwNeVSSZ+vF3UsZT3H50XKppLdyb6KBug6+nRARnNqOWn3kseU1y3Oxsin/8tS7rzMfEq+0OOkMsWqC6PmRUbQY4gC3DtR7Yjlc3weH/wIq4wa5rcnNnWvC3jVU5S6ih9zjPjYoGdV8nfZg1kAmVe0hdAf7ZqfBDjwKj9Ib3pxWVqRm3jeC3oJwjv1HGD3Y6sw37ynlApJZH5XaobaOf8tRReyXVOlVDZyVNJJVIqYGA+i+nF4NMPOTP97VXZWWSPc7XT33Io18vntvThfkeRWjwm2nYMscWPKpx17nu6znGy/TaIeJwjFtDdOxew5D3+0BNwb12toXFj9UyqfqTl17eNXPY/9oYbZ/FPVKOJmrfEQxJiQ29oL7SH96I87xs8RXdVZwRZrjY7z5bnHRTX7CdoBPJOX7WCIe++SHTAUlORiHboBzy2gF8uFvZgfocZmXLibbEbVH/ILdnJgQaRqXgf5aGl5p/XmrZhbfsJ7AAzR6GNPpDoUVRoDRUm307F8zVC/GS+AD7vbbjorpPKIezS03tCv4ZdaedjGJ9UbhuEMCNqXCJkuPHOhXX3hsy4IyX9NGoEvfwMa44rAhz66kE1uns9fFoY+vVFUnCnT53b1IbVFaNDt5OFJRcSIex1x4GWb/khBFUXVnUc2EYjEjmaleywhOZVX/a2NY/VNDjJDmRG9p+BntTh+g36eU/kTB87Uf5RLA4339hSKPQfV+doqYjg8kcYG4HyeKElk0vYSAyGGhfKscboZ/hZX7ScMFQB7TWx/vb83oFOh4MEmXr0p7CsWsKgaPJix52Of0Oi28woAkmJXltfLA+0ahCqk3UbfJkZIrMAyzm6mEvvkUcYvyhlTPMq9kqivsJKfdmCe2rKmZCxFVHYZBDee1Z2SIjDjK2h6MYRlcJbCk4WRPjPdXfAe2/8Z6s8e7JfbnX9CIxvX3HF9UK3XnYcein8g5Q5tMlJx6fLQJUtPAtHlPMc63bu9l8qZZ4lfiWSeWPo3SRUB14peg4coMzrLHN/ABljlNcmqXk4K3qhG0NGY5D6qwGXVQD1RerEzD95j3TW0TYc=",rw="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAFggAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAACAAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAWKbWRhdBIACgk4Gb//YQENBpAy8goRwAIIIIFAtF680kfPQwaI1Kcywl3BeQ8z4QxUTktitnzjlfA6Kx9mHBuyHp/L7cZbu8oKuHLSLAdMN8Q0KQUP/mNETsM0edaz4uLHLl4UXjQ02eDbZV+0v9LB5reip1J9tl4rEm4+X5D2P4nkbRzucuY48SogddPfeXU2FN1k4JDF3JREBrfVjOSa8RfnKnzfLIn4JENnpCGcM7WzQCNO42V7j9Do64SdQfNFFYKizS67DanRpdtSpl4EDdOOe3eqww2avYoG4bYFPRDQ0is5hAEsxDHG0Q9TkGSdgeiVDwXfj3pHD0mc+SL/mm7LV91g/e/Vv3hCJAF391iq8rGID9nn3RPYpOOLj8AyDa/ttRv8x1KhLosK9QqDE1umpqmrkgT3VLeHb6SBlriU5l4OEAeWfvwd+x2h/A0D1udKyfpy5bUmPEf0z2nsjWVajGCkeiTKaDV9NmRE/PfSk/j3LqkbCgcdEpW84fpWCnNmFaLcE5bgnITFCvfMcrGe7Yr9yLzextWVQx+fZ2Vsb0rYZrlB2eTCc7jJX6vfdHE74n0HQkBQwWZ3lWt+NmR5ltECi5nrcgPOybPKTcuktkZ1GhrrEOov8/Bji8E/Lx/QfJV3Dva78zj3bXhVDzNwTwMYd11/iZQtQNooFySfYPw9fBKJDJKfg4B9oTgMpsX1jgsGAUB0HTevhh49nkpR9eisMMS7AxO1uEXqmGTBhItf+WzdugnN3AZpByLNQKfR7irNh/Bo4WR2ZRwT3T2l24QqTffXx8AN2lLASN5DF38FYwdsV90K12J36ksBMYGE15B5Is4z0CT+Udw+LrPjQoGxrmjE8OmfvAtd9US6EiuK06N4i3/gBTeNY1mxrrFMj+vmGfCoFlh89HnkrANfv2F3H5mdVjuU2dz8dkJcoxXGw3R/WP2XOCaR/yo2J1UC25JfBaHn4EDdQiE06Wuxsk/tB4RLYstIxm6eydHSnZWoHDtQ/88rP/7U6cGtARUjqnMu/dt5aXAwDyice+p0/O3bQxr0WPDXWgk012D5Jd9GihHDhtT7eP1accWsveWP1O+vrl/z9zILMiMKrIa6YbFio+7XsQC4mu0NiaCuqfDWT00/ERd7ahPA+u2HYJHS70YY+qPuAmXnyc2L+g5IY+I+wtsbP39aSsmZpa2brWgo3ZkzhalNbwpoWabIR0J5e8ZnFAapozLgCOifvDgFXtRKoAJ4WFOFgYJgk76I1n6tc4eM9qO0U9jFcgOMj3CFWU6UvdUynL4haERD0j/UMbpbFnFWo0mnjSkwNG+CU143UNlmrFPgmQNEl/TWtEtAegaTByBHSRFYNd9Ap5wNG3US71VX6O/gbknzbSZmMtCYgesOZ8YlB5d7ix3zlI0GQ/uSn2wbVhO+2uwVyCEPFUtXT31YrR/I2TL/83Tm0ADIVeee14N0dLNBuNEbwS/O/HbDFtn5MQcYXJT0O+FIjARwdk30e5yyArcjZ13jhEEFATSK8KBpwYlv0e8fNmyJ3hKmnzAw16uwdRAv+WT2eTHTbPSHnuThy2uUWRKqDP6IOXqN1ES7IOhp8rN5n+8tJL7cy9RCnD9+VJE7W0vzyg8CwiJIqa2R42dUgFDWkbgB74e1gp/vRsB3qabyvAEU5smQwtSF5J1vtGMzTWufcOFGKzyZXlLO4EySkJ9xCjw5rADyfmJE0G87SiKQj76gotreVUprOeBtLXKk5qzJnCvnSB0uhZqVo/ifpihcY30APByII9fWNTFRVbC/65dcL5W3nKW0+PQh7VuQ8i5muIfwGw0C6okukOjnnCLZzrmJDIXHNJi7qkbhlsI8HmkuonLiFmx3GP+MjGtC8gIxi+pRkA==",iw={dlf:Z2,godrej:J2,experion:ew,m3m:tw,max:nw,trump:rw},au=12,lu=(e="")=>String(e).trim().split(/\s+/)[0].toLowerCase(),sw=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("").toUpperCase(),ow=e=>e.city||String(e.location||"").split(",").pop().trim(),aw=(e,t)=>{const n=lu(e.name),i=t.filter(o=>lu(o.developer)===n),s=e.logo&&!/via\.placeholder\.com|dummyimage\.com/.test(e.logo);return{id:e.id||e.name,name:e.name,logo:iw[n]||(s?e.logo:""),count:e.count||parseInt(e.projects,10)||0,listed:i,link:`/search?q=${encodeURIComponent(n)}`}};function lw({developer:e}){const[t,n]=j.useState(!1);return!e.logo||t?r.jsx("span",{className:"hwdk-mono",children:sw(e.name)}):r.jsx("img",{src:e.logo,alt:`${e.name} logo`,loading:"lazy",onError:()=>n(!0)})}function cw({builders:e=[],properties:t=[]}){const[n,i]=j.useState(!1),s=e.map(h=>aw(h,t));if(!s.length)return null;const o=n?s:s.slice(0,au),a=s.reduce((h,u)=>h+u.count,0),l=s.reduce((h,u)=>h+u.listed.length,0),c=new Set(s.flatMap(h=>h.listed.map(ow)).filter(Boolean)).size,d=[[`${s.length}+`,"Developers"],a>0&&[`${a}+`,"Projects"],l>0&&[l,"Live Listings"],c>0&&[c,c===1?"City":"Cities"]].filter(Boolean);return r.jsxs("section",{className:"hwdk",children:[r.jsx("div",{className:"hwdk-glow","aria-hidden":"true"}),r.jsxs("div",{className:"hwdk-wrap",children:[r.jsxs("header",{className:"hwdk-head",children:[r.jsxs("div",{className:"hwdk-eyebrow",children:[r.jsx("span",{}),"TRUSTED NAMES",r.jsx("span",{})]}),r.jsxs("h2",{children:["Top Property ",r.jsx("em",{children:"Developers"})]}),r.jsx("p",{children:"Partnering with India's most trusted builders to bring you the best properties."})]}),r.jsx("div",{className:"hwdk-grid",children:o.map(h=>r.jsxs(B,{to:h.link,className:"hwdk-tile","aria-label":`View ${h.name} projects`,children:[r.jsx("span",{className:`hwdk-plate${h.logo?"":" mono"}`,children:r.jsx(lw,{developer:h})}),r.jsx("strong",{children:h.name}),r.jsxs("span",{className:"hwdk-count",children:[h.count>0?`${h.count} ${h.count===1?"Project":"Projects"}`:"View projects",r.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})]})]},h.id))}),s.length>au&&r.jsx("div",{className:"hwdk-more",children:r.jsx("button",{type:"button",onClick:()=>i(h=>!h),children:n?"Show fewer":`View all ${s.length} developers`})})]}),r.jsx("div",{className:"hwdk-statsband",children:r.jsx("div",{className:"hwdk-wrap hwdk-stats",children:d.map(([h,u])=>r.jsxs("div",{children:[r.jsx("b",{children:h}),r.jsx("small",{children:u})]},u))})}),r.jsx("style",{children:`
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
      `})]})}const Of=[{id:"t1",name:"Aayush Gupta",initials:"AG",color:"#F59E0B",platform:"Google",verified:!0,rating:5,text:"Rajesh ji is awesome. One place stop for all your real estate deals. Good natured, an honest and god fearing person."},{id:"t2",name:"Soumya",initials:"SO",color:"#E9D5FF",textColor:"#6B21A8",platform:"Google",verified:!0,rating:5,text:"Honestly, had a really smooth experience with HomWisor. The team was friendly and actually listened to what I needed. They didn't waste my time with random options."},{id:"t3",name:"Amit Kumar",initials:"AK",color:"#D6D3D1",textColor:"#44403C",platform:"Google",verified:!0,rating:5,text:"HomWisor made my home buying journey smooth and hassle-free. Their attention to detail and customer service is exceptional."},{id:"t4",name:"Neha Gupta",initials:"NG",color:"#10B981",platform:"Google",verified:!0,rating:5,text:"Very professional team with deep knowledge of the market. They helped me find the perfect investment property with great returns."}],dw={Google:{letter:"G",className:"google-g"},Facebook:{letter:"f",style:{background:"#1877F2",color:"#fff",borderRadius:"50%",width:18,height:18,display:"inline-grid",placeItems:"center",fontWeight:800}},Justdial:{letter:"Jd",style:{color:"#F97316",fontWeight:900}},Website:{letter:"★",style:{color:"#9A7418"}}},uw=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("").toUpperCase();function hw({t:e}){const[t,n]=j.useState(!1),i={background:e.color||"#E5E7EB",color:e.textColor||"#475569",overflow:"hidden"};return r.jsx("div",{className:"hw-testimonial-avatar",style:i,children:e.photo&&!t?r.jsx("img",{src:e.photo,alt:e.name,loading:"lazy",onError:()=>n(!0),style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):e.initials||uw(e.name)})}function Tf({items:e,limit:t=4}){const n=(e||[]).slice(0,t);return n.length?r.jsx("div",{className:"hw-testimonial-grid",children:n.map(i=>{const s=Math.min(5,Math.max(1,Math.round(i.rating||5))),o=i.platform||"Google",a=dw[o];return r.jsxs("article",{className:"hw-testimonial-card",children:[r.jsxs("div",{className:"hw-testimonial-top",children:[r.jsx("div",{className:"hw-review-icon",style:{background:i.color||"#E5E7EB",color:i.textColor||"#64748B"},children:"“"}),o!=="Other"&&r.jsxs("div",{className:"hw-google",children:[r.jsx("span",{className:a==null?void 0:a.className,style:a==null?void 0:a.style,children:a==null?void 0:a.letter}),r.jsx("span",{children:o})]})]}),r.jsxs("div",{className:"hw-testimonial-stars","aria-label":`${s} out of 5 stars`,children:["★".repeat(s),s<5&&r.jsx("span",{style:{color:"#E5E7EB"},children:"★".repeat(5-s)})]}),r.jsxs("div",{className:"hw-testimonial-review",children:['"',i.text,'"']}),r.jsxs("div",{className:"hw-testimonial-user",children:[r.jsx(hw,{t:i}),r.jsxs("div",{className:"hw-testimonial-user-info",children:[r.jsx("div",{className:"hw-testimonial-name",children:i.name}),i.role?r.jsx("div",{className:"hw-testimonial-verified",style:{textTransform:"none",letterSpacing:0},children:i.role}):i.verified!==!1&&r.jsx("div",{className:"hw-testimonial-verified",children:"VERIFIED BUYER"})]})]})]},i.id)})}):null}const Je="#D4AF37";function Bt(){return r.jsxs("footer",{style:{marginTop:40},children:[r.jsx("div",{style:{background:"linear-gradient(130deg, #000000 0%, #2a1a05 40%, #D4AF37 100%)",borderTop:`3px solid ${Je}`,borderBottom:"1px solid rgba(0,0,0,.1)"},children:r.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 16px",gap:16,flexWrap:"wrap"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[r.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.25)",display:"grid",placeItems:"center",backdropFilter:"blur(8px)"},children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[r.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:800,fontSize:22,color:"#fff",lineHeight:1.1},children:"Looking for Your Dream Property?"}),r.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,.85)",marginTop:2},children:"Experts online now · Response within 5 minutes"})]})]}),r.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[r.jsxs("a",{href:"tel:919090101401",style:{display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#111",padding:"10px 18px",borderRadius:10,fontWeight:800,fontSize:13,boxShadow:"0 4px 14px rgba(0,0,0,.2)"},children:[r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"1.7",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"Call Now"]}),r.jsxs("a",{href:"https://wa.me/919090101401",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13,backdropFilter:"blur(6px)"},children:[r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#fff",children:r.jsx("path",{d:"M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.15 6.45 2.15 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.02-5.14-2.87-7.01zm-7.01 15.23h-.01c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.68-8.24 8.21-8.24 2.19 0 4.25.85 5.79 2.4a8.215 8.215 0 0 1 2.41 5.83c0 4.55-3.68 8.24-8.21 8.24zm6.91-6.17c-.38-.19-2.24-1.11-2.59-1.23-.35-.13-.61-.19-.87.19s-1 1.23-1.22 1.49-.44.29-.82.1c-.38-.19-1.61-.59-3.06-1.89-1.13-1.01-1.89-2.26-2.11-2.64-.22-.38-.02-.59.17-.78.17-.17.38-.44.57-.66.19-.22.25-.38.38-.64.13-.25.06-.47-.03-.66-.09-.19-.87-2.1-1.19-2.88-.31-.74-.63-.64-.87-.66l-.74-.01c-.25 0-.66.1-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.65 4.06 6.62 5.69.93.4 1.65.64 2.21.82.93.29 1.78.25 2.45.15.75-.11 2.24-.92 2.56-1.81.32-.89.32-1.65.22-1.81-.09-.16-.35-.25-.73-.44z"})}),"WhatsApp"]}),r.jsxs("a",{href:"#contact",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13},children:[r.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r.jsx("path",{d:"M16 2v4"}),r.jsx("path",{d:"M8 2v4"}),r.jsx("path",{d:"M3 10h18"})]}),"Schedule Visit"]})]})]})}),r.jsx("div",{style:{background:"#0A0A0A",color:"rgba(255,255,255,.75)",borderTop:"1px solid #1a1a1a"},children:r.jsxs("div",{className:"container",style:{padding:"36px 16px 18px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:24},className:"footer-grid",children:[r.jsxs("div",{children:[r.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:r.jsx("img",{src:qs,alt:"HomWisor",style:{width:145,height:"auto",display:"block",objectFit:"contain"}})}),r.jsx("div",{style:{height:1,background:"linear-gradient(90deg, rgba(212,175,55,.4), transparent)",margin:"14px 0"}}),r.jsx("p",{style:{fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,.65)"},children:"India's leading luxury real estate platform. Buy, sell & invest in premium properties across India."}),r.jsxs("div",{style:{display:"grid",gap:10,marginTop:16},children:[r.jsxs("a",{href:"tel:+919090101401",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",color:Je,flexShrink:0},children:r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:Je,strokeWidth:"1.7",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),"+91 9090101401"]}),r.jsxs("a",{href:"mailto:support@homwisor.com",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:Je,strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),"support@homwisor.com"]})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${Je}`,display:"inline-block",paddingBottom:6},children:"QUICK LINKS"}),r.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[r.jsx(B,{to:"/",style:{color:"rgba(255,255,255,.7)"},children:"Home"}),r.jsx(B,{to:"/about",style:{color:"rgba(255,255,255,.7)"},children:"About Us"}),r.jsx(B,{to:"/blog",style:{color:"rgba(255,255,255,.7)"},children:"Blog"}),r.jsx(B,{to:"/contact",style:{color:"rgba(255,255,255,.7)"},children:"Contact"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${Je}`,display:"inline-block",paddingBottom:6},children:"TOOLS & SERVICES"}),r.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[r.jsx(B,{to:"/privacy-policy",style:{color:"rgba(255,255,255,.7)"},children:"Privacy Policy"}),r.jsx(B,{to:"/terms-and-conditions",style:{color:"rgba(255,255,255,.7)"},children:"Terms & Conditions"}),r.jsx("a",{href:"#",style:{color:"rgba(255,255,255,.7)"},children:"Disclaimer"}),"              "]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${Je}`,display:"inline-block",paddingBottom:6},children:"ADDRESS"}),r.jsx("div",{style:{display:"grid",gap:12,fontSize:13},children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,color:"rgba(255,255,255,.7)",lineHeight:1.6},children:[r.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0,marginTop:1},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:Je,strokeWidth:"1.7",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),r.jsx("span",{children:"Unit no : 704 , Sohna Road , ILD Trade Centre, Gurugram , Haryana , 122018"})]})})]})]}),r.jsxs("div",{style:{borderTop:"1px solid #1a1a1a",marginTop:28,paddingTop:14,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12,fontSize:12,color:"rgba(255,255,255,.45)"},children:[r.jsx("span",{children:"© 2026 HomWisor.com — Rishto Ki Shuruwat. All rights reserved. | RERA Registered"}),r.jsxs("span",{style:{display:"flex",gap:10,alignItems:"center"},children:[r.jsx("a",{href:"https://www.facebook.com/p/Homwisor-Consultant-Pvt-Ltd-100063724465215/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:Je,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:r.jsx("i",{className:"fa-brands fa-facebook-f"})}),r.jsx("a",{href:"https://www.instagram.com/homwisor/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:Je,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:r.jsx("i",{className:"fa-brands fa-instagram"})}),r.jsx("a",{href:"https://www.youtube.com/@HomwisorConsultants",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:Je,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:r.jsx("i",{className:"fa-brands fa-youtube"})}),r.jsx("a",{href:"https://www.linkedin.com/checkpoint/challenge/AgGnqOFm7uEMXwAAAaDiLdR1eKRji-_VqyEWvji7ntzt5HEv1pp-rFc6fD1Adq5RajztgTQHf0Edw_f4yhIZExU-nwz7tg?ut=1ckL1ZscIkmss1",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:Je,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:r.jsx("i",{className:"fa-brands fa-linkedin-in"})})]})]})]})}),r.jsx("style",{children:`
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
      `})]})}const ea="#D4AF37",cu="#B9943A";function pw(){const[e,t]=j.useState({hero:[],slider:[],small:[]}),[n,i]=j.useState([]),[s,o]=j.useState([]),[a,l]=j.useState([]),[c,d]=j.useState([]),[h,u]=j.useState(void 0),[g,A]=j.useState([]),[k,S]=j.useState(!0);j.useEffect(()=>{async function C(){try{const[E,M,G,ue,te,Ee,Ne]=await Promise.all([ie.get("/banners"),ie.get("/properties"),ie.get("/locations"),ie.get("/offers"),ie.get("/builders").catch(()=>({data:[]})),ie.get("/testimonials").catch(()=>({data:null})),ie.get("/recommended").catch(()=>({data:[]}))]);t(E.data),i(M.data),o(G.data),l(ue.data),d(te.data||[]),u(Ee.data??null),A(Ne.data||[])}catch(E){console.error(E),u(M=>M===void 0?null:M)}finally{S(!1)}}C()},[]),n.filter(C=>C.category==="recommended").slice(0,4),n.filter(C=>C.category==="trending").slice(0,4);const N=n.filter(C=>["₹19","₹28","₹16","₹5.2"].some(E=>C.priceRange&&C.priceRange.includes(E))||C.category==="trending").slice(0,4);[n.find(C=>C.title&&C.title.includes("Oberoi Three Sixty"))||n.find(C=>C.title&&C.title.includes("BPTP"))||N[0],n.find(C=>C.title&&C.title.includes("Experion One 42"))||N[1],n.find(C=>C.title&&C.title.includes("Max Estate 59"))||N[2],n.find(C=>C.title&&C.title.includes("BPTP DownTown"))||N[3]].filter(Boolean).slice(0,4);const f=n.filter(C=>C.category==="commercial").slice(0,4),p=n.filter(C=>C.category==="sco").slice(0,4),m=n.filter(C=>C.category==="upcoming").slice(0,4),v=n.filter(C=>C.category==="newlaunch").slice(0,4);if(k)return r.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#fff"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{width:48,height:48,border:"3px solid #eee",borderTopColor:ea,borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 12px"}}),r.jsx("div",{style:{fontWeight:600,color:"#6b7280"},children:"Loading HomWisor luxury..."}),r.jsx("style",{children:`
              @keyframes spin{
                to{
                  transform:rotate(360deg)
                }
              }
            `})]})});f.length>=4||n.slice(4,8),p.length>=4||n.slice(8,12);const b=[{name:"Studio",sub:"Apartment",place:"in Gurugram",count:"320+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop"},{name:"1 BHK",sub:"in Gurugram",count:"980+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=500&fit=crop"},{name:"2 BHK",sub:"in Gurugram",count:"1,450+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop"},{name:"3 BHK",sub:"in Gurugram",count:"760+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop"},{name:"4 BHK",sub:"in Gurugram",count:"410+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop"},{name:"5 BHK",sub:"in Gurugram",count:"180+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=500&fit=crop"},{name:"Penthouse",sub:"in Gurugram",count:"95+ Properties",dark:!0,img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop"}];c.length;const P=C=>(C||[]).map(E=>E!=null&&E.link?{...E,link:F2(E.link,n)}:E),w=h===null?Of:h,R=r.jsxs("section",{className:"container hw-bhk-premium-section",style:{padding:"38px 16px 0"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:2},children:[r.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2.5,color:"#9A7A22"},children:"HOMWISOR"}),r.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}})]}),r.jsx("h2",{style:{fontSize:29,lineHeight:1.08,fontWeight:800,color:"#102A43",margin:"2px 0 3px",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.5px"},children:"Which BHK suits your lifestyle best?"}),r.jsx("p",{style:{fontSize:11,color:"#64748B",margin:0,lineHeight:1.4},children:"Find a home that fits you and tomorrow."}),r.jsx("div",{className:"bhk-grid hw-bhk-premium-grid",style:{display:"grid",gridTemplateColumns:"repeat(6, minmax(0, 1fr))",gap:9,marginTop:10,overflowX:"auto",paddingBottom:2},children:b.slice(0,6).map((C,E)=>{const M=[{bg:"#FFF8ED",iconBg:"#FFF0D6",icon:"#A87522"},{bg:"#F2F8FD",iconBg:"#DDECF8",icon:"#2871A8"},{bg:"#FFF5F6",iconBg:"#FBE0E3",icon:"#C75B66"},{bg:"#F3F6FC",iconBg:"#DDE7F7",icon:"#31598C"},{bg:"#F2F8F3",iconBg:"#DDEEDC",icon:"#5B7D3C"},{bg:"#F6F2FC",iconBg:"#E7DFF7",icon:"#66509A"}][E],G=["▦","▰","▰","♟","◇","♛"];return r.jsxs(B,{to:`/search?bhk=${encodeURIComponent(C.name)}`,className:"hw-bhk-premium-card",style:{minWidth:0,borderRadius:7,overflow:"hidden",border:"1px solid #E5E7EB",background:M.bg,display:"block",textDecoration:"none",boxShadow:"0 1px 5px rgba(15,23,42,.04)"},children:[r.jsxs("div",{style:{padding:"8px 8px 7px",minHeight:103},children:[r.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:M.iconBg,color:M.icon,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,marginBottom:7},children:G[E]}),r.jsx("div",{style:{fontSize:13,lineHeight:1.1,fontWeight:800,color:"#183B5B"},children:C.name}),r.jsx("div",{style:{fontSize:8.5,fontWeight:600,color:"#64748B",marginTop:2},children:[C.sub,C.place].filter(Boolean).join(" ")}),r.jsx("div",{style:{fontSize:8,color:"#64748B",marginTop:8},children:C.count})]}),r.jsxs("div",{style:{height:143,position:"relative",overflow:"hidden"},children:[r.jsx("img",{src:C.img,alt:C.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),r.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:38,background:"linear-gradient(to top, rgba(15,23,42,.22), transparent)"}})]})]},C.name)})})]});return r.jsxs("div",{style:{background:"#fcfcfc"},children:[r.jsx(Et,{}),r.jsxs("section",{className:"hw-home-hero",children:[r.jsx(I2,{banners:P(e.hero)}),r.jsx("div",{className:"hw-search-overlay",children:r.jsx(B2,{})})]}),r.jsx("section",{className:"hw-new-premium-slider",children:r.jsx(H2,{banners:P(e.slider)})}),r.jsx(V2,{items:P(g)}),r.jsx(Q2,{bhkSection:R,properties:n,locations:s,upcoming:m,newlaunch:v,offers:a,promos:P(e.small),branded:n.filter(C=>C.category==="branded").slice(0,4),luxury:n.filter(C=>C.category==="luxury").slice(0,4)}),r.jsx(cw,{builders:c,properties:n}),(w==null?void 0:w.length)>0&&r.jsxs("section",{className:"container hw-testimonials-premium",style:{padding:"34px 16px 0"},children:[r.jsxs("section",{className:"container hw-testimonials-premium",children:[r.jsxs("div",{className:"hw-testimonial-heading",children:[r.jsxs("div",{className:"hw-testimonial-eyebrow",children:[r.jsx("span",{}),r.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),r.jsx("span",{})]}),r.jsx("h2",{children:"Customer Testimonials"}),r.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),r.jsx(Tf,{items:w,limit:4})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:6,marginTop:10},children:[0,1,2,3].map((C,E)=>r.jsx("span",{style:{width:E===0?7:6,height:E===0?7:6,borderRadius:"50%",background:E===0?cu:"#D1D5DB",display:"none"}},C))})]}),r.jsxs("section",{className:"container hw-why-premium-section",style:{padding:"30px 16px 0"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:18},children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:4},children:[r.jsx("span",{style:{width:34,height:1,background:ea,display:"inline-block"}}),r.jsx("span",{style:{fontSize:10,letterSpacing:2.5,fontWeight:800,color:"#9A7A22"},children:"HOMWISOR"}),r.jsx("span",{style:{width:34,height:1,background:ea,display:"inline-block"}})]}),r.jsx("h2",{style:{margin:0,fontSize:36,lineHeight:1.08,fontWeight:800,color:"#102A43",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.4px"},children:"Why Choose Us"}),r.jsx("p",{style:{margin:"5px auto 0",maxWidth:650,fontSize:12,lineHeight:1.5,color:"#64748B"},children:"India's trusted real estate platform for verified properties, direct builder pricing, and complete end-to-end guidance."})]}),r.jsx("div",{className:"hw-why-feature-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:[{no:"01",title:"100% Verified Listings",desc:"Every property listing undergoes rigorous physical and legal verification. Genuine photos, accurate pricing, and title ownership put fake listings.",icon:"✓",iconBg:"#FFF0D2",iconColor:"#A66A18",bg:"#FFF9EF",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&h=520&fit=crop"},{no:"02",title:"Direct Builder Rates",desc:"We connect you directly with top-tier developers, ensuring transparent deal structures, best price guarantees, and zero hidden brokerage charges.",icon:"◇",iconBg:"#E5F0FC",iconColor:"#376D9F",bg:"#F4F9FD",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=520&fit=crop"},{no:"03",title:"Free Guided Site Visits",desc:"Schedule doorstep property site visits with experienced specialists who provide personalized advice tailored to your budget.",icon:"♟",iconBg:"#DDF0DE",iconColor:"#3F7D4C",bg:"#F3FAF3",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=520&fit=crop"}].map(C=>r.jsxs("div",{className:"hw-why-feature-card",style:{position:"relative",minWidth:0,overflow:"hidden",borderRadius:6,border:"1px solid #E5E7EB",background:C.bg,display:"flex"},children:[r.jsxs("div",{style:{position:"relative",zIndex:2,width:"58%",padding:"17px 14px 10px",background:C.bg,clipPath:"ellipse(90% 78% at 0% 50%)"},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:C.iconBg,color:C.iconColor,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:900,marginBottom:6},children:C.icon}),r.jsx("div",{style:{width:26,height:1,background:C.iconColor,opacity:.35,margin:"0 0 5px"}}),r.jsx("div",{style:{fontSize:15,lineHeight:1.12,fontWeight:800,color:"#17324D"},children:C.title}),r.jsx("div",{style:{fontSize:11.2,lineHeight:1.4,color:"#64748B",marginTop:5,maxWidth:170},children:C.desc}),r.jsx("div",{style:{position:"absolute",left:10,bottom:2,fontSize:28,lineHeight:1,fontWeight:800,color:C.iconColor,opacity:.2},children:C.no})]}),r.jsx("div",{style:{position:"absolute",inset:"0 0 0 42%",overflow:"hidden"},children:r.jsx("img",{src:C.image,alt:C.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}})})]},C.title))}),r.jsx("div",{className:"hw-why-stats",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",marginTop:7,background:"#fff",border:"1px solid #E8E1D3",borderRadius:5,overflow:"hidden",boxShadow:"0 2px 8px rgba(15,23,42,.05)"},children:[["25K+","Verified Properties","▦"],["10K+","Happy Customers","♟"],["500+","Top Developers","▦"],["50+","Cities Covered","●"],["24×7","Expert Support","◉"]].map((C,E)=>r.jsxs("div",{style:{minWidth:0,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"11px 7px",borderRight:E<4?"1px solid #E8E1D3":"none"},children:[r.jsx("div",{style:{width:30,height:30,flexShrink:0,borderRadius:"50%",background:"#FFF7ED",color:cu,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800},children:C[2]}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontSize:12,lineHeight:1,fontWeight:800,color:"#17324D"},children:C[0]}),r.jsx("div",{style:{fontSize:10,lineHeight:1.25,color:"#64748B",marginTop:2,whiteSpace:"nowrap"},children:C[1]})]})]},C[1]))})]}),r.jsx(Bt,{})]})}const fw="/assets/test1-Bhn6Q40Z.png",mw="/assets/test2-4YsetXgN.png",gw="/assets/test3-CgDiknys.png",xw="/assets/test4-DV0Q2HbY.png",bt="#D4AF37",wn="#9A7418",ww="#090909",yw=[fw,mw,gw,xw],vw=[["01","Integrity","We build relationships through honest guidance and responsible advice."],["02","Accountability","We stay involved and take responsibility throughout the property journey."],["03","Professionalism","Experienced, informed and focused on delivering a smooth experience."],["04","Customer First","Your requirements, priorities and long-term goals remain at the centre."],["05","Transparency","Clear communication and straightforward property guidance at every step."],["06","Improvement","We continuously improve our market knowledge and client experience."]],bw=[{name:"Mr. Brejendra Singh",role:"Founder & CEO",text:"A real estate veteran with 15+ years of expertise, known for deep market knowledge and investment insights."},{name:"Mr. Birendra Patel",role:"Founder & CMO",text:"Brings over 13 years of distinguished real estate experience with a strong focus on market intelligence."},{name:"Mr. Lokendra Singh",role:"Manager",text:"Brings deep knowledge of Gurgaon micro-markets with a strong market understanding and client-focused approach."},{name:"Mr. Mukul Yadav",role:"Manager",text:"A dedicated real estate consultant focused on helping clients find the right investment opportunities."}],jw=[{date:"JUL 30, 2026",category:"REAL ESTATE NEWS",title:"Moti Nagar Metro Station on Delhi Metro Blue Line",text:"Explore connectivity, location advantages and the role of the Blue Line in West Delhi real estate."},{date:"JUL 29, 2026",category:"REAL ESTATE NEWS",title:"BPTP Downtown 66 Phase 2 Is Here",text:"A look at the new phase and what buyers should know about the Gurgaon development."},{date:"JUL 28, 2026",category:"REAL ESTATE NEWS",title:"Sector 49 Gurgaon: Real Estate Prices & Metro Expansion",text:"Understand the locality, connectivity and changing real estate landscape of Sector 49 Gurgaon."}];function Aw(){const[e,t]=j.useState(void 0);j.useEffect(()=>{let i=!0;return ie.get("/testimonials").then(s=>i&&t(s.data||[])).catch(()=>i&&t(null)),()=>{i=!1}},[]);const n=e===null?Of:e||[];return r.jsxs("div",{className:"about-page",children:[r.jsx(Et,{}),r.jsxs("section",{className:"about-hero",children:[r.jsx("div",{className:"about-hero-overlay"}),r.jsx("div",{className:"about-hero-glow"}),r.jsx("div",{className:"about-hero-grid"}),r.jsxs("div",{className:"about-container about-hero-inner",children:[r.jsx("div",{className:"about-kicker",children:"TRUSTED REAL ESTATE CONSULTANTS"}),r.jsxs("h1",{children:["Real Estate,",r.jsx("br",{}),r.jsx("span",{children:"Guided With Wisdom."})]}),r.jsx("p",{children:"Since 2016, we’ve guided families and investors toward the perfect homes, premium office spaces, and smart real estate opportunities across Gurgaon and Delhi NCR."}),r.jsx("div",{className:"about-hero-actions",children:r.jsx("a",{href:"/contact/",className:"about-btn about-btn-gold",children:"Talk to an Expert"})})]})]}),r.jsx("section",{className:"about-section about-who",children:r.jsxs("div",{className:"about-container about-two-col",children:[r.jsxs("div",{className:"about-real-image",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88",alt:"Premium modern home interior"}),r.jsxs("div",{className:"image-overlay-card",children:[r.jsx("span",{children:"EST. 2016"}),r.jsx("strong",{children:"Homwisor"}),r.jsx("small",{children:"Real Estate Consultants"})]}),r.jsx("div",{className:"image-corner-number",children:"01"})]}),r.jsxs("div",{className:"about-copy",children:[r.jsx("div",{className:"about-eyebrow",children:"WHO WE ARE"}),r.jsx("h2",{children:"Property is more than a transaction."}),r.jsx("p",{children:"Homwisor Consultant believes that buying a property is more than just a transaction — it is a life-changing decision connected to dreams, security and future growth."}),r.jsx("p",{children:"Built on the vision of combining the comfort of a dream home with the wisdom of expert real estate guidance, Homwisor helps clients navigate property opportunities with clarity and confidence."}),r.jsxs("div",{className:"about-points",children:[r.jsxs("div",{children:[r.jsx("b",{children:"✓"}),"Expert property guidance"]}),r.jsxs("div",{children:[r.jsx("b",{children:"✓"}),"Market-focused recommendations"]}),r.jsxs("div",{children:[r.jsx("b",{children:"✓"}),"Residential & commercial expertise"]}),r.jsxs("div",{children:[r.jsx("b",{children:"✓"}),"Support throughout the journey"]})]})]})]})}),r.jsx("section",{className:"about-section about-values",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-heading-center",children:[r.jsx("div",{className:"about-eyebrow",children:"OUR CORE VALUES"}),r.jsxs("h2",{children:["Principles that shape ",r.jsx("span",{children:"Homwisor."})]}),r.jsx("p",{children:"Integrity, accountability, professionalism and a customer-first approach at every step."})]}),r.jsx("div",{className:"values-grid",children:vw.map(([i,s,o])=>r.jsxs("article",{className:"value-card",children:[r.jsxs("div",{className:"value-top",children:[r.jsx("span",{children:i}),r.jsx("i",{children:"↗"})]}),r.jsx("h3",{children:s}),r.jsx("p",{children:o})]},s))})]})}),r.jsx("section",{className:"about-section about-leaders",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-heading-row",children:[r.jsxs("div",{children:[r.jsx("div",{className:"about-eyebrow",children:"OUR TEAM"}),r.jsxs("h2",{children:["Visionary ",r.jsx("span",{children:"Real Estate Leaders"})]})]}),r.jsx("p",{children:"Experienced professionals bringing market knowledge and client-focused real estate guidance."})]}),r.jsx("div",{className:"leaders-grid",children:bw.map((i,s)=>r.jsxs("article",{className:"leader-card",children:[r.jsxs("div",{className:"leader-image-wrap",children:[r.jsx("img",{src:yw[s],alt:`${i.name} professional portrait`}),r.jsxs("div",{className:"leader-number",children:["0",s+1]})]}),r.jsxs("div",{className:"leader-content",children:[r.jsx("div",{className:"leader-role",children:i.role}),r.jsx("h3",{children:i.name}),r.jsx("p",{children:i.text})]})]},i.name))})]})}),r.jsx("section",{className:"about-section about-news",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-heading-row",children:[r.jsxs("div",{children:[r.jsx("div",{className:"about-eyebrow",children:"READ FROM OUR BLOGS & NEWS"}),r.jsxs("h2",{children:["Insights for ",r.jsx("span",{children:"smarter decisions."})]})]}),r.jsxs("a",{href:"/blog/",className:"news-link",children:["View All Articles ",r.jsx("span",{children:"↗"})]})]}),r.jsx("div",{className:"blog-grid",children:jw.map(i=>r.jsxs("article",{className:"blog-card",children:[r.jsxs("div",{className:"blog-image",children:[r.jsx("img",{src:`https://images.unsplash.com/photo-${i.title.includes("Moti")?"1477959858617-67f85cf4f1df":i.title.includes("BPTP")?"1564013799919-ab600027ffc6":"1560518883-ce09059eeffa"}?auto=format&fit=crop&w=900&q=82`,alt:"Real estate news"}),r.jsx("span",{children:i.category})]}),r.jsxs("div",{className:"blog-content",children:[r.jsx("small",{children:i.date}),r.jsx("h3",{children:i.title}),r.jsx("p",{children:i.text}),r.jsxs("a",{href:"/blog/",children:["Read Article ",r.jsx("span",{children:"→"})]})]})]},i.title))})]})}),n.length>0&&r.jsx("section",{className:"about-section about-testimonials hw-testimonials-premium",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"hw-testimonial-heading",children:[r.jsxs("div",{className:"hw-testimonial-eyebrow",children:[r.jsx("span",{}),r.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),r.jsx("span",{})]}),r.jsx("h2",{children:"Customer Testimonials"}),r.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),r.jsx(Tf,{items:n,limit:4})]})}),r.jsx(Bt,{}),r.jsx("style",{children:`

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
          color: ${bt};
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
          color: ${bt};
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
          background: ${bt};
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
          color: ${bt};
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

          color: ${ww};
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

          color: ${bt};

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
          color: ${wn};

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
          color: ${wn};
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
          color: ${wn};

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
          color: ${wn};

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

          border-bottom: 1px solid ${bt};

          padding-bottom: 6px;
        }


        .news-link span {
          color: ${wn};

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

          color: ${bt};

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 1px;
        }


        .blog-content {
          padding: 22px;
        }


        .blog-content small {
          color: ${wn};

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
          color: ${wn};

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
          color: ${bt};

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

          color: ${bt};

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
          color: ${bt};
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

      `})]})}const wr=[{city:"Gurugram",aliases:["gurgaon"],localities:[{name:"Golf Course Road",slug:"golf-course-road"},{name:"Golf Course Extension Road",slug:"golf-course-extension-road",aliases:["gcer","golf course ext"]},{name:"Dwarka Expressway",slug:"dwarka-expressway"},{name:"Sohna Road",slug:"sohna-road"},{name:"Southern Peripheral Road (SPR)",slug:"southern-peripheral-road",aliases:["southern peripheral road","spr"]},{name:"New Gurgaon",slug:"new-gurgaon",aliases:["new gurugram"]},{name:"Nirvana Road",slug:"nirvana-road"},{name:"MG Road",slug:"mg-road",aliases:["m.g. road"]},{name:"NH-48",slug:"nh-48",aliases:["nh 48","nh8","nh-8"]}]},{city:"Noida",aliases:["greater noida"],localities:[{name:"Noida Expressway",slug:"noida-expressway"},{name:"Noida Extension",slug:"noida-extension"},{name:"Yamuna Expressway",slug:"yamuna-expressway"}]},{city:"New Delhi",aliases:["delhi"],localities:[{name:"Dwarka",slug:"dwarka"},{name:"South Delhi",slug:"south-delhi"},{name:"Central Delhi",slug:"central-delhi"}]},{city:"Faridabad",localities:[{name:"Greater Faridabad",slug:"greater-faridabad"},{name:"Mathura Road",slug:"mathura-road"},{name:"Suraj Kund",slug:"suraj-kund",aliases:["surajkund"]}]},{city:"Bengaluru",aliases:["bangalore"],localities:[{name:"North Bengaluru",slug:"north-bengaluru"},{name:"East Bengaluru",slug:"east-bengaluru"},{name:"Sarjapur Road (IT Corridor)",slug:"sarjapur-road",aliases:["sarjapur road","sarjapur"]},{name:"South Bengaluru",slug:"south-bengaluru"},{name:"Hoskote & East Peripheral Belt",slug:"hoskote",aliases:["hoskote"]}]},{city:"Hyderabad",localities:[{name:"North Hyderabad",slug:"north-hyderabad"},{name:"South Hyderabad",slug:"south-hyderabad"},{name:"East Hyderabad",slug:"east-hyderabad"},{name:"West Hyderabad",slug:"west-hyderabad"}]},{city:"Mumbai",localities:[{name:"South Mumbai",slug:"south-mumbai"},{name:"Navi Mumbai",slug:"navi-mumbai"},{name:"Panvel",slug:"panvel"},{name:"Central Mumbai",slug:"central-mumbai"},{name:"Kalyan",slug:"kalyan"}]},{city:"Pune",localities:[{name:"West Pune",slug:"west-pune"},{name:"East Pune",slug:"east-pune"},{name:"Punawale",slug:"punawale"},{name:"South East Pune",slug:"south-east-pune"}]}],yr=(e="")=>String(e).toLowerCase().replace(/\([^)]*\)/g," ").replace(/[^a-z0-9]+/g," ").trim(),kw=wr.flatMap(e=>e.localities.map(t=>({...t,city:e.city}))),Mf=kw.map(e=>({l:e,keys:[e.name,e.slug.replace(/-/g," "),...e.aliases||[]].map(yr)})).sort((e,t)=>Math.max(...t.keys.map(n=>n.length))-Math.max(...e.keys.map(n=>n.length))),du=(e,t)=>t&&` ${e} `.includes(` ${t} `),Ks=e=>{var n;const t=yr(e);return t&&((n=Mf.find(i=>i.keys.some(s=>s===t)))==null?void 0:n.l)||null},Ys=e=>{const t=yr(e);return t&&wr.find(n=>[n.city,...n.aliases||[]].map(yr).includes(t))||null},Xs=(e={})=>{var s,o,a;const t=yr(e.location),n=e.locality&&Ks(e.locality)||((s=Mf.find(l=>l.keys.some(c=>du(t,c))))==null?void 0:s.l)||null,i=e.city&&((o=Ys(e.city))==null?void 0:o.city)||(n==null?void 0:n.city)||((a=wr.find(l=>[l.city,...l.aliases||[]].some(c=>du(t,yr(c)))))==null?void 0:a.city)||null;return{locality:e.locality||(n==null?void 0:n.name)||"",city:e.city||i||""}},Sw=e=>{var t;return((t=wr.find(n=>n.city===e))==null?void 0:t.localities)||[]},we=(e="")=>String(e).toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),qr=e=>{const n=[...String((e==null?void 0:e.priceRange)||(e==null?void 0:e.price)||"").toLowerCase().replace(/,/g,"").matchAll(/(\d+(?:\.\d+)?)\s*(cr|crore|crores|l|lac|lacs|lakh|lakhs|k)?\b/g)].map(o=>({n:parseFloat(o[1]),unit:o[2]||""}));if(!n.length)return null;for(let o=n.length-1,a="cr";o>=0;o--)n[o].unit?a=n[o].unit:n[o].unit=a;const i=({n:o,unit:a})=>/^(l|lac|lacs|lakh|lakhs)$/.test(a)?o/100:a==="k"?o/1e5:o,s=n.map(i);return{min:Math.min(...s),max:Math.max(...s)}},dl=e=>{if(!e)return null;const t=String(e).toLowerCase(),n=[...t.matchAll(/\d+(?:\.\d+)?/g)].map(i=>parseFloat(i[0]));return n.length?/under|below|upto|up to|less|max/.test(t)?{min:0,max:n[0]}:/onward|plus|above|more|\+|min/.test(t)||n.length===1?{min:n[0],max:1/0}:{min:Math.min(n[0],n[1]),max:Math.max(n[0],n[1])}:null},uu=e=>e?e.min===0?`Under ₹${e.max} Cr`:e.max===1/0?`₹${e.min} Cr+`:`₹${e.min} – ${e.max} Cr`:"",hu=[{value:"under-1-cr",label:"Under ₹1 Cr"},{value:"1-cr-4-cr",label:"₹1 – 4 Cr"},{value:"4-cr-8-cr",label:"₹4 – 8 Cr"},{value:"8-cr-12-cr",label:"₹8 – 12 Cr"},{value:"12-cr-16-cr",label:"₹12 – 16 Cr"},{value:"16-cr-onwards",label:"₹16 Cr+"}],pu=["apartment","villa","builder floor","plots","farmhouse"],_t=["commercial","retail","sco"],Ew=["trump","elie saab","brabus","franck","muller","tonino","armani","branded","oberoi","dlf privana","versace","lamborghini"],Nw=10,zf=e=>!_t.includes(we(e.type||e.propertyType))&&!["commercial","sco"].includes(e.category),Cw=e=>{var t;return zf(e)&&((((t=qr(e))==null?void 0:t.max)||0)>=Nw||/luxury/i.test(`${e.tag} ${e.propertyTypeDetail}`))},Rw=e=>zf(e)&&Ew.some(t=>we(`${e.title} ${e.tag} ${e.propertyTypeDetail}`).includes(t)),Pw=e=>{const t=we(e);if(!t||t==="all"||t==="all types")return null;const n=o=>we(o.type||o.propertyType),i=o=>we(`${o.type} ${o.bhk} ${o.title} ${o.propertyTypeDetail}`);return{residential:o=>pu.includes(n(o)),"residential projects":o=>pu.includes(n(o)),commercial:o=>_t.includes(n(o))||["commercial","sco"].includes(o.category),"commercial projects":o=>_t.includes(n(o))||["commercial","sco"].includes(o.category),"luxury villas":o=>n(o)==="villa",villa:o=>n(o)==="villa",villas:o=>n(o)==="villa","independent floors":o=>n(o)==="builder floor","builder floor":o=>n(o)==="builder floor","pent house":o=>/pent ?house/.test(i(o)),penthouse:o=>/pent ?house/.test(i(o)),"residential plots":o=>n(o)==="plots",plots:o=>n(o)==="plots","plots land":o=>n(o)==="plots","sco plots":o=>n(o)==="sco"||o.category==="sco",sco:o=>n(o)==="sco"||o.category==="sco",branded:o=>o.category==="branded"||Rw(o),luxury:o=>["luxury","branded"].includes(o.category)||Cw(o),shops:o=>_t.includes(n(o))||o.category==="commercial","office space":o=>_t.includes(n(o))||o.category==="commercial","food court":o=>_t.includes(n(o))||o.category==="commercial","anchor stores":o=>_t.includes(n(o))||o.category==="commercial","cinema entertainment":o=>_t.includes(n(o))||o.category==="commercial"}[t]||(o=>n(o)===t||n(o).includes(t))},fu=e=>{const t=String((e==null?void 0:e.bhk)||"").toLowerCase();return/bhk|bed/.test(t)?[...t.matchAll(/\d+/g)].map(n=>parseInt(n[0])).filter(n=>n>0&&n<10):[]},Ow=e=>{var i;const t=String(e||"").toLowerCase();if(!t)return null;if(t.includes("studio"))return s=>/studio|1 ?rk/.test(String(s.bhk).toLowerCase());const n=parseInt((i=t.match(/\d+/))==null?void 0:i[0]);return n?/\+|plus|above/.test(t)?s=>fu(s).some(o=>o>=n):s=>fu(s).includes(n):null},Tw={upcoming:["upcoming"],"new launch":["new launch","newlaunch"],"ready to move":["ready to move","ready"],"under construction":["under construction","trending","new launch"],trending:["trending"]},mu=["New Launch","Upcoming","Under Construction","Ready to Move"],Mw=e=>{const t=we(e).replace("newlaunch","new launch");if(!t||t==="for sale"||t==="all")return null;const n=Tw[t]||[t];return i=>n.includes(we(i.status).replace("newlaunch","new launch"))||n.includes(we(i.category).replace("newlaunch","new launch"))},zw=e=>{var a;const t=l=>(e.get(l)||"").trim();let n=t("q"),i=t("locality"),s=t("city");const o=t("location");if(o){const l=Ks(o),c=!l&&Ys(o);l?i=l.name:c?s=c.city:n=n?`${n} ${o}`:o}if(i){const l=Ks(i);l&&(i=l.name,s=s||l.city)}return s&&(s=((a=Ys(s))==null?void 0:a.city)||s),{q:n,city:s,locality:i,type:t("type")||t("propertyType"),budget:t("budget"),bhk:t("bhk"),status:t("status"),category:t("category"),sort:t("sort")}},Lw=(e,t,{offerTitles:n=[]}={})=>{const i=we(t.q).split(" ").filter(Boolean),s=Pw(t.type),o=Ow(t.bhk),a=Mw(t.status),l=dl(t.budget),c=n.map(we),d=e.filter(u=>{const g=Xs(u);if(i.length){const A=we(`${u.title} ${u.location} ${u.developer} ${u.type} ${u.bhk} ${g.locality} ${g.city}`);if(!i.every(k=>A.includes(k)))return!1}if(t.city&&we(g.city)!==we(t.city)||t.locality&&we(g.locality)!==we(t.locality)||s&&!s(u)||o&&!o(u)||a&&!a(u))return!1;if(l){const A=qr(u);if(!A||A.max<l.min||A.min>l.max)return!1}if(t.category){const A=t.category.toLowerCase();if(A==="festival"){if(!c.some(k=>we(u.title).includes(k)||k.includes(we(u.title))))return!1}else if(String(u.category).toLowerCase()!==A)return!1}return!0}),h=u=>{var g;return((g=qr(u))==null?void 0:g.min)??1/0};return t.sort==="price-low"&&d.sort((u,g)=>h(u)-h(g)),t.sort==="price-high"&&d.sort((u,g)=>{var A,k;return(((A=qr(g))==null?void 0:A.max)??-1)-(((k=qr(u))==null?void 0:k.max)??-1)}),t.sort==="newest"&&d.sort((u,g)=>String(g.createdAt).localeCompare(String(u.createdAt))),d},Iw={apartment:"Apartments",villa:"Villas",villas:"Villas","luxury villas":"Luxury Villas","builder floor":"Builder Floors","independent floors":"Independent Floors",farmhouse:"Farmhouses",plots:"Plots","plots land":"Plots & Land","residential plots":"Residential Plots","pent house":"Penthouses",penthouse:"Penthouses",residential:"Residential Projects","residential projects":"Residential Projects",commercial:"Commercial Projects","commercial projects":"Commercial Projects",retail:"Retail Spaces",sco:"SCO Plots","sco plots":"SCO Plots",branded:"Branded Residences",luxury:"Luxury Homes",shops:"Shops","office space":"Office Spaces","food court":"Food Courts","anchor stores":"Anchor Stores","cinema entertainment":"Cinema & Entertainment Spaces"},Bw=e=>{const t=[];e.bhk&&t.push(/bhk|studio/i.test(e.bhk)?e.bhk:`${e.bhk} BHK`),t.push(e.type?Iw[we(e.type)]||e.type:"Properties");const n=e.locality||e.city||"Gurugram";return`${t.join(" ")} in ${n}`},Fw=["q","city","locality","type","budget","bhk","status","category","sort"],gu=[{group:"Residential",items:[["Apartment","Apartment"],["Villa","Villa"],["Builder Floor","Builder Floor"],["Penthouse","Penthouse"],["Plots","Plots"],["Farmhouse","Farmhouse"]]},{group:"Commercial",items:[["Commercial","All Commercial"],["Retail","Retail / Shops"],["SCO","SCO Plots"]]},{group:"Collections",items:[["Luxury","Luxury Homes"],["Branded","Branded Residences"]]}],ta=[["","All Projects"],["trending","Trending"],["upcoming","Upcoming"],["newlaunch","New Launch"],["branded","Branded"],["luxury","Luxury"],["commercial","Commercial"],["sco","SCO"]],Dw=["Studio","1 BHK","2 BHK","3 BHK","4 BHK","5 BHK"],Ww=(e,t)=>{var n;return((n=e.find(([i])=>i===t))==null?void 0:n[1])||t},Wr="#D4AF37",Ht="#9A7418",es="#090909";function Uw(){const[e,t]=cc(),[n,i]=j.useState([]),[s,o]=j.useState([]),[a,l]=j.useState(!0),c=zw(e),[d,h]=j.useState(c.q);j.useEffect(()=>{Promise.all([ie.get("/properties"),ie.get("/offers").catch(()=>({data:[]}))]).then(([w,R])=>{i(Array.isArray(w.data)?w.data:[]),o((R.data||[]).map(C=>C.title).filter(Boolean))}).catch(()=>i([])).finally(()=>l(!1))},[]);const u=j.useMemo(()=>Lw(n,c,{offerTitles:s}),[n,s,e.toString()]),g=(w,R)=>{const C={...c,[w]:R};w==="city"&&(C.locality="");const E=new URLSearchParams;Fw.forEach(M=>C[M]&&E.set(M,C[M])),t(E,{replace:!0})};j.useEffect(()=>{const w=setTimeout(()=>{d.trim()!==c.q&&g("q",d.trim())},350);return()=>clearTimeout(w)},[d]),j.useEffect(()=>{h(c.q)},[e.get("q"),e.get("location")]);const A=()=>{h(""),t({},{replace:!0})},k=[c.q&&["q",`“${c.q}”`],c.city&&["city",c.city],c.locality&&["locality",c.locality],c.type&&["type",c.type.replace(/-/g," ")],c.budget&&["budget",uu(dl(c.budget))||c.budget],c.bhk&&["bhk",c.bhk],c.status&&["status",c.status.replace(/-/g," ")],c.category&&["category",Ww(ta,c.category)]].filter(Boolean),S=c.locality||c.city||"Gurugram",N=gu.some(w=>w.items.some(([R])=>R===c.type)),f=hu.some(w=>w.value===c.budget),p=mu.includes(c.status),m=c.city?[{city:c.city,localities:Sw(c.city)}]:wr,v="919999999999",b=w=>{const R=(w==null?void 0:w.title)||(w==null?void 0:w.name)||"this property",C=encodeURIComponent(`Hi, I am interested in ${R}. Please share more details.`);return`https://wa.me/${v}?text=${C}`},P=({property:w,index:R})=>{var ge;const C=(w==null?void 0:w.id)||(w==null?void 0:w._id)||R,E=(w==null?void 0:w.image)||(w==null?void 0:w.thumbnail)||((ge=w==null?void 0:w.images)==null?void 0:ge[0])||"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",M=(w==null?void 0:w.title)||(w==null?void 0:w.name)||"Premium Property",G=(w==null?void 0:w.priceRange)||(w==null?void 0:w.price)||"Price on Request",ue=(w==null?void 0:w.location)||(w==null?void 0:w.locality)||"Gurugram",te=(w==null?void 0:w.bhk)||"3 & 4 BHK",Ee=(w==null?void 0:w.area)||(w==null?void 0:w.size)||"2,500+ Sq.Ft.",Ne=(w==null?void 0:w.propertyType)||(w==null?void 0:w.type)||"";return r.jsxs(B,{to:w!=null&&w.slug?pt(w):`/property/${C}`,className:"search-property-card",children:[r.jsxs("div",{className:"search-property-image",children:[r.jsx("img",{src:E,alt:M,loading:"lazy"}),r.jsx("div",{className:"search-image-overlay"}),(w==null?void 0:w.rera)!==!1&&r.jsx("div",{className:"search-rera-group",children:r.jsxs("span",{className:"search-rera",children:[r.jsx("b",{children:"✓"}),"RERA"]})}),r.jsxs("div",{className:"search-bhk-badge",children:[te,Ne?` • ${Ne}`:""]})]}),r.jsxs("div",{className:"search-property-content",children:[r.jsx("h3",{children:M}),r.jsx("div",{className:"search-card-price",children:G}),r.jsxs("div",{className:"search-card-location",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),r.jsx("span",{children:ue})]}),r.jsxs("div",{className:"search-card-meta",children:[r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M3 11h18"}),r.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),r.jsx("path",{d:"M4 19v-8"}),r.jsx("path",{d:"M20 19v-8"}),r.jsx("path",{d:"M4 15h16"})]}),r.jsx("span",{children:te})]}),r.jsxs("div",{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[r.jsx("path",{d:"M4 4h6"}),r.jsx("path",{d:"M4 4v6"}),r.jsx("path",{d:"M20 20h-6"}),r.jsx("path",{d:"M20 20v-6"}),r.jsx("path",{d:"M4 20h6"}),r.jsx("path",{d:"M4 20v-6"}),r.jsx("path",{d:"M20 4h-6"}),r.jsx("path",{d:"M20 4v6"})]}),r.jsx("span",{children:Ee})]})]}),r.jsxs("a",{href:b(w),target:"_blank",rel:"noopener noreferrer",className:"search-card-whatsapp",onClick:L=>L.stopPropagation(),children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),r.jsx("span",{children:"WhatsApp"})]})]})]})};return r.jsxs("div",{className:"search-page",children:[r.jsx(Et,{}),r.jsxs("div",{className:"search-container",children:[r.jsxs("div",{className:"search-breadcrumb",children:[r.jsx(B,{to:"/",children:"Home"}),r.jsx("span",{children:"›"}),r.jsxs("span",{children:["Projects in ",S]})]}),r.jsxs("div",{className:"search-layout",children:[r.jsxs("aside",{className:"filter-sidebar",children:[r.jsxs("div",{className:"filter-header",children:[r.jsx("h3",{children:"Filters"}),r.jsx("button",{onClick:A,children:"Clear All"})]}),r.jsxs("div",{className:"filter-fields",children:[r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"SEARCH"}),r.jsx("input",{value:d,onChange:w=>h(w.target.value),placeholder:"Project, builder, sector…"})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"CITY"}),r.jsxs("select",{value:c.city,onChange:w=>g("city",w.target.value),children:[r.jsx("option",{value:"",children:"All Cities"}),wr.map(w=>r.jsx("option",{value:w.city,children:w.city},w.city))]})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"LOCALITY"}),r.jsxs("select",{value:c.locality,onChange:w=>g("locality",w.target.value),children:[r.jsx("option",{value:"",children:c.city?`All of ${c.city}`:"All Localities"}),m.map(w=>r.jsx("optgroup",{label:w.city,children:w.localities.map(R=>r.jsx("option",{value:R.name,children:R.name},R.slug))},w.city))]})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"PROPERTY TYPE"}),r.jsxs("select",{value:c.type,onChange:w=>g("type",w.target.value),children:[r.jsx("option",{value:"",children:"All Types"}),!N&&c.type&&r.jsx("option",{value:c.type,children:c.type.replace(/-/g," ")}),gu.map(w=>r.jsx("optgroup",{label:w.group,children:w.items.map(([R,C])=>r.jsx("option",{value:R,children:C},R))},w.group))]})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"BUDGET"}),r.jsxs("select",{value:c.budget,onChange:w=>g("budget",w.target.value),children:[r.jsx("option",{value:"",children:"Any Budget"}),!f&&c.budget&&r.jsx("option",{value:c.budget,children:uu(dl(c.budget))||c.budget}),hu.map(w=>r.jsx("option",{value:w.value,children:w.label},w.value))]})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"BEDROOMS"}),r.jsx("div",{className:"bhk-pills",children:Dw.map(w=>r.jsxs("button",{type:"button",className:c.bhk.toLowerCase()===w.toLowerCase()?"active":"",onClick:()=>g("bhk",c.bhk.toLowerCase()===w.toLowerCase()?"":w),children:[w.replace(" BHK",""),w==="Studio"?"":" BHK"]},w))})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"PROJECT STATUS"}),r.jsxs("select",{value:c.status,onChange:w=>g("status",w.target.value),children:[r.jsx("option",{value:"",children:"Any Status"}),!p&&c.status&&r.jsx("option",{value:c.status,children:c.status.replace(/-/g," ")}),mu.map(w=>r.jsx("option",{value:w,children:w},w))]})]}),r.jsxs("div",{className:"filter-field",children:[r.jsx("label",{children:"CATEGORY"}),r.jsxs("div",{className:"category-options",children:[!ta.some(([w])=>w===c.category)&&r.jsxs("label",{className:"category-option",children:[r.jsx("input",{type:"radio",name:"cat",checked:!0,readOnly:!0}),r.jsx("span",{children:c.category})]}),ta.map(([w,R])=>r.jsxs("label",{className:"category-option",children:[r.jsx("input",{type:"radio",name:"cat",checked:c.category===w,onChange:()=>g("category",w)}),r.jsx("span",{children:R})]},w||"all"))]})]}),r.jsx("div",{className:"property-count",children:a?"Loading…":`${u.length} properties found`})]}),r.jsxs("div",{className:"expert-card",children:[r.jsx("div",{className:"expert-title",children:"Need Expert Help?"}),r.jsx("div",{className:"expert-text",children:"Our property experts will help you find the perfect home."}),r.jsx("a",{href:"tel:9090101401",className:"expert-call",children:"Call +91 9090 101 401"})]})]}),r.jsxs("main",{className:"results-area",children:[r.jsxs("div",{className:"results-header",children:[r.jsxs("div",{children:[r.jsx("h1",{children:Bw(c)}),r.jsxs("p",{children:[a?"Loading properties…":`Showing ${u.length} result${u.length===1?"":"s"}`," ","•"," ","Luxury Residences & Investment Opportunities"]})]}),r.jsxs("select",{value:c.sort,onChange:w=>g("sort",w.target.value),className:"sort-select",children:[r.jsx("option",{value:"",children:"Sort by: Recommended"}),r.jsx("option",{value:"price-low",children:"Price: Low to High"}),r.jsx("option",{value:"price-high",children:"Price: High to Low"}),r.jsx("option",{value:"newest",children:"Newest First"})]})]}),k.length>0&&r.jsxs("div",{className:"active-filters",children:[k.map(([w,R])=>r.jsxs("button",{type:"button",className:"active-chip",onClick:()=>{w==="q"&&h(""),g(w,"")},children:[R," ",r.jsx("span",{"aria-hidden":"true",children:"✕"})]},w)),r.jsx("button",{type:"button",className:"active-clear",onClick:A,children:"Clear all"})]}),a?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-title",children:"Loading properties…"}),r.jsx("div",{className:"empty-text",children:"The server may take a few seconds to wake up."})]}):u.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🏢"}),r.jsx("div",{className:"empty-title",children:"No properties found"}),r.jsx("div",{className:"empty-text",children:"Try adjusting your filters or search query"}),r.jsx("button",{onClick:A,className:"empty-btn",children:"Clear Filters"})]}):r.jsx("div",{className:"results-grid",children:u.map((w,R)=>r.jsx(P,{property:w,index:R},(w==null?void 0:w.id)||(w==null?void 0:w._id)||R))})]})]})]}),r.jsx(Bt,{}),r.jsx("style",{children:`

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
          color: ${Ht};
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
          color: ${Ht};
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
          border-color: ${Wr};
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
          accent-color: ${Ht};
        }

        .apply-filter-btn {
          width: 100%;
          height: 43px;
          border: none;
          border-radius: 10px;
          background: ${es};
          color: #ffffff;
          font-family: inherit;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
          cursor: pointer;
          transition: .25s ease;
        }

        .apply-filter-btn:hover {
          background: ${Ht};
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
          background: ${Wr};
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
          color: ${Ht};
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
          color: ${Ht};
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
          background: ${es};
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
        .bhk-pills button:hover { border-color: ${Wr}; }
        .bhk-pills button.active { background: ${es}; border-color: ${es}; color: ${Wr}; }

        .active-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; align-items: center; }
        .active-chip {
          display: inline-flex; align-items: center; gap: 7px;
          height: 32px; padding: 0 12px; border-radius: 20px;
          border: 1px solid #ecdfb0; background: #fffaeb; color: #5c4a12;
          font-size: 11.5px; font-weight: 700; cursor: pointer; text-transform: capitalize;
        }
        .active-chip span { font-size: 10px; color: ${Ht}; }
        .active-chip:hover { border-color: ${Wr}; }
        .active-clear { border: none; background: none; color: ${Ht}; font-size: 11.5px; font-weight: 800; cursor: pointer; }
      `})]})}const Hw={pool:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5S16 18 18 18s2-1.5 4-1.5"}),r.jsx("path",{d:"M2 21.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"}),r.jsx("path",{d:"M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0M8 9h8"})]}),gym:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12"})}),club:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M3 21h18M5 21V9l7-5 7 5v12"}),r.jsx("path",{d:"M10 21v-6h4v6"})]}),kids:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"12",cy:"5",r:"2"}),r.jsx("path",{d:"M8 21l2-7-3-3 5-2 5 2-3 3 2 7"})]}),run:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"14",cy:"4",r:"2"}),r.jsx("path",{d:"M6 20l4-6 3 2 2-5 4 3M9 9l4-2 3 2"})]}),garden:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M12 22V12"}),r.jsx("path",{d:"M12 12c0-5 4-8 8-8 0 5-3 8-8 8ZM12 14c0-4-3-7-7-7 0 4 3 7 7 7Z"})]}),shield:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"}),r.jsx("path",{d:"m9 12 2 2 4-4"})]}),power:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M13 2 4 14h7l-1 8 9-12h-7z"})}),yoga:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"12",cy:"4.5",r:"2"}),r.jsx("path",{d:"M4 20h16M12 7v6M7 11l5 2 5-2M8 20l4-7 4 7"})]}),tennis:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"9",cy:"9",r:"6"}),r.jsx("path",{d:"M13.5 13.5 20 20M5 5c3 1 5 3 6 8"})]}),parking:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"4",y:"3",width:"16",height:"18",rx:"3"}),r.jsx("path",{d:"M10 17V7h3.5a3 3 0 0 1 0 6H10"})]}),cafe:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"}),r.jsx("path",{d:"M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3"})]}),spa:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M12 21c-4.5 0-8-3-8-7 3 0 6 1.5 8 4 2-2.5 5-4 8-4 0 4-3.5 7-8 7Z"}),r.jsx("path",{d:"M12 18c0-4 1.5-8 0-12-1.5 4 0 8 0 12Z"})]}),lift:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"5",y:"3",width:"14",height:"18",rx:"2"}),r.jsx("path",{d:"m9 9 3-3 3 3M9 15l3 3 3-3"})]}),wifi:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"}),r.jsx("circle",{cx:"12",cy:"19.5",r:"1"})]}),camera:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"3",y:"7",width:"13",height:"10",rx:"2"}),r.jsx("path",{d:"m16 11 5-3v8l-5-3"})]}),theatre:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"12",rx:"2"}),r.jsx("path",{d:"M8 21h8M12 17v4"})]}),ball:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"})]}),party:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"m4 20 5-14 9 9-14 5Z"}),r.jsx("path",{d:"M14 4l1 2M19 9l2-1M17 3l-1 3"})]}),book:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"}),r.jsx("path",{d:"M4 19a2 2 0 0 1 2-2h13"})]}),pet:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"6",cy:"10",r:"2"}),r.jsx("circle",{cx:"10",cy:"6",r:"2"}),r.jsx("circle",{cx:"14",cy:"6",r:"2"}),r.jsx("circle",{cx:"18",cy:"10",r:"2"}),r.jsx("path",{d:"M8 17c0-3 2-5 4-5s4 2 4 5-2 3-4 3-4 0-4-3Z"})]}),ev:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"4",y:"4",width:"10",height:"16",rx:"2"}),r.jsx("path",{d:"M9 8l-2 4h4l-2 4M14 10h3a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0V9l-2-2"})]}),water:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"})}),concierge:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M4 18h16M6 18a6 6 0 0 1 12 0M12 9V7M10 7h4"})}),check:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"m8 12 3 3 5-6"})]})},_w=[["Swimming Pool","pool"],["Gymnasium","gym"],["Club House","club"],["Kids Play Area","kids"],["Jogging Track","run"],["Landscaped Garden","garden"],["24x7 Security","shield"],["Power Backup","power"],["Yoga Deck","yoga"],["Tennis Court","tennis"],["Covered Parking","parking"],["Cafeteria","cafe"],["Spa & Sauna","spa"],["High-speed Lifts","lift"],["Wi-Fi Lounge","wifi"],["CCTV Surveillance","camera"],["Mini Theatre","theatre"],["Sports Court","ball"],["Party Hall","party"],["Library","book"],["Pet Park","pet"],["EV Charging","ev"],["Rainwater Harvesting","water"],["Concierge Service","concierge"]],Gw=["Swimming Pool","Gymnasium","Club House","Kids Play Area","Jogging Track","Landscaped Garden","24x7 Security","Power Backup"],$w=[["pool","pool"],["swim","pool"],["gym","gym"],["fitness","gym"],["club","club"],["kid","kids"],["play","kids"],["jog","run"],["track","run"],["walk","run"],["garden","garden"],["park","garden"],["green","garden"],["secur","shield"],["power","power"],["backup","power"],["yoga","yoga"],["meditation","yoga"],["tennis","tennis"],["badminton","tennis"],["parking","parking"],["cafe","cafe"],["restaurant","cafe"],["spa","spa"],["sauna","spa"],["lift","lift"],["elevator","lift"],["wifi","wifi"],["wi-fi","wifi"],["cctv","camera"],["theatre","theatre"],["cinema","theatre"],["sport","ball"],["basket","ball"],["football","ball"],["party","party"],["banquet","party"],["library","book"],["pet","pet"],["ev ","ev"],["charging","ev"],["water","water"],["concierge","concierge"]],Vw=(e="")=>{var i;const t=_w.find(([s])=>s.toLowerCase()===String(e).toLowerCase());if(t)return t[1];const n=` ${String(e).toLowerCase()} `;return((i=$w.find(([s])=>n.includes(s)))==null?void 0:i[1])||"check"};function qw({name:e,size:t=24}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:Hw[Vw(e)]})}const xu=(e="")=>{if(!e)return"";try{return new URL(e,window.location.origin).href}catch{return""}},Kw=e=>[["name","description",e.description],["property","og:title",e.title],["property","og:description",e.description],["property","og:type",e.type||"website"],["property","og:url",e.url],["property","og:image",xu(e.image)],["property","og:site_name","HomWisor"],["name","twitter:card",e.image?"summary_large_image":"summary"],["name","twitter:title",e.title],["name","twitter:description",e.description],["name","twitter:image",xu(e.image)]];function yc(e){const t=[],n=document.title;e.title&&(document.title=e.title),t.push(()=>{document.title=n});for(const[i,s,o]of Kw(e)){let a=document.head.querySelector(`meta[${i}="${s}"]`);const l=!a,c=a==null?void 0:a.getAttribute("content");o&&(l&&(a=document.createElement("meta"),a.setAttribute(i,s),document.head.appendChild(a)),a.setAttribute("content",o),t.push(()=>l?a.remove():a.setAttribute("content",c??"")))}if(e.url){let i=document.head.querySelector('link[rel="canonical"]');const s=!i,o=i==null?void 0:i.getAttribute("href");s&&(i=document.createElement("link"),i.rel="canonical",document.head.appendChild(i)),i.href=e.url,t.push(()=>s?i.remove():i.setAttribute("href",o??""))}return()=>t.reverse().forEach(i=>i())}const Yw=(e="",t)=>{const n=String(e).replace(/\s+/g," ").trim();return n.length>t?n.slice(0,n.lastIndexOf(" ",t-1)>40?n.lastIndexOf(" ",t-1):t-1).replace(/[,.;:\s]+$/,"")+"…":n},Xw=(e={})=>{const t=String(e.title||"").trim(),n=e.price||e.priceRange,i=[t&&`${t}${e.developer?` by ${e.developer}`:""}${e.location?` at ${e.location}`:""}.`,e.bhk&&`${e.bhk}${n?` from ${n}`:""}.`,"Check the price list, floor plans, amenities and RERA details on HomWisor."].filter(Boolean).join(" ");return{title:String(e.seoTitle||"").trim()||(t?`${t} | Price & Floor Plans | HomWisor`:""),description:String(e.seoDescription||"").trim()||Yw(e.overview||i,160)}},wu="9090101401",yu="+91 9090 101 401",Qw="919090101401",Zw={pin:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.6"})]}),building:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}),r.jsx("path",{d:"M16 9h2a2 2 0 0 1 2 2v10M3 21h18M8 7h4M8 11h4M8 15h4"})]}),area:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),r.jsx("path",{d:"M4 20 20 4M14 4h6v6"})]}),diamond:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 3h12l4 6-10 12L2 9z"}),r.jsx("path",{d:"M2 9h20M12 21 8 9l4-6 4 6-4 12"})]}),calendar:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2"}),r.jsx("path",{d:"M3 10h18M8 3v4M16 3v4"})]}),arrowR:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),arrowL:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M19 12H5M11 6l-6 6 6 6"})}),play:r.jsx(r.Fragment,{children:r.jsx("path",{d:"m9 7 8 5-8 5z",fill:"currentColor",stroke:"none"})}),check:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"m8 12 3 3 5-6"})]}),phone:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"})}),user:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"12",cy:"8",r:"4"}),r.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]}),mobile:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2"}),r.jsx("path",{d:"M11 18h2"})]}),mail:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"m3 7 9 6 9-6"})]}),chat:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"})}),lock:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),r.jsx("path",{d:"M8 11V8a4 4 0 0 1 8 0v3"})]}),plus:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M12 5v14M5 12h14"})}),download:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M4 21h16"})}),minus:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M5 12h14"})}),close:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),headset:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 14v-2a8 8 0 0 1 16 0v2"}),r.jsx("rect",{x:"3",y:"14",width:"4",height:"6",rx:"1.5"}),r.jsx("rect",{x:"17",y:"14",width:"4",height:"6",rx:"1.5"})]}),doc:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 3h8l4 4v14H6z"}),r.jsx("path",{d:"M14 3v4h4M9 12h6M9 16h6"})]}),star:r.jsx(r.Fragment,{children:r.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"})}),award:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"12",cy:"9",r:"6"}),r.jsx("path",{d:"m8.5 14-1.5 7 5-3 5 3-1.5-7"})]}),bulb:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"})}),leaf:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M5 19c0-8 5-14 14-14 0 9-6 14-14 14Z"}),r.jsx("path",{d:"M5 19 13 11"})]}),people:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),r.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),r.jsx("path",{d:"M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7"})]}),chart:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M4 20V10M10 20V4M16 20v-8M22 20H2"})}),key:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"8",cy:"15",r:"4"}),r.jsx("path",{d:"m10.8 12.2 8.7-8.7M16 6l3 3"})]}),trophy:r.jsx(r.Fragment,{children:r.jsx("path",{d:"M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4a3 3 0 0 0 4 4M16 6h4a3 3 0 0 1-4 4M12 13v4M8 21h8M10 17h4"})}),home:r.jsx(r.Fragment,{children:r.jsx("path",{d:"m3 11 9-7 9 7M5 10v10h14V10"})})},_=({n:e,size:t=20,sw:n=1.7})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:Zw[e]}),Jw=()=>r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),ey=(e="")=>{let t=String(e).trim().replace("#","");return t.length===3&&(t=t.split("").map(n=>n+n).join("")),/^[0-9a-f]{6}$/i.test(t)?[0,2,4].map(n=>parseInt(t.slice(n,n+2),16)):null},Nt=(e,t,n)=>`rgb(${e.map((i,s)=>Math.round(i+(t[s]-i)*n)).join(",")})`,ty=e=>{const t=ey(e);if(!t)return{};const n=t.map(o=>(o/=255,o<=.03928?o/12.92:((o+.055)/1.055)**2.4)).reduce((o,a,l)=>o+a*[.2126,.7152,.0722][l],0);if(n<.02)return{"--pd-brand":e,"--pd-deep":Nt(t,[0,0,0],.2),"--pd-cta-bg":"var(--pd-grad)","--pd-cta-fg":"#111"};const i=[255,255,255],s=[0,0,0];return{"--pd-brand":e,"--pd-deep":Nt(t,s,.35),"--pd-accent":n>.3?Nt(t,s,.45):e,"--pd-on":Nt(t,i,.72),"--pd-on-brand":n>.45?"#111":"#fff","--pd-soft":Nt(t,i,.93),"--pd-line2":Nt(t,i,.75),"--pd-tint":Nt(t,i,.965),"--pd-glow":`rgba(${t.join(",")},.28)`,"--pd-grad":`linear-gradient(135deg, ${Nt(t,i,.3)}, ${e} 55%, ${Nt(t,s,.3)})`,"--pd-cta-bg":"#fff","--pd-cta-fg":e}},ki=e=>String(e).padStart(2,"0"),na=(e="")=>String(e).trim().split(/\s+/)[0].toLowerCase(),ny=e=>`https://wa.me/${Qw}?text=${encodeURIComponent(e)}`,Lf=e=>String(e.location||"").split(",").map(t=>t.trim()).find(t=>t&&!Ks(t)&&!Ys(t))||"",ry=(e="")=>{const t=String(e).split(/[–—\-|,]/).map(n=>n.trim()).filter(Boolean);return[t[0]||"",t[1]||""]},iy=(e="")=>{const t=e.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);if(t)return{type:"iframe",src:`https://www.youtube.com/embed/${t[1]}?autoplay=1&rel=0`};const n=e.match(/vimeo\.com\/(\d+)/);return n?{type:"iframe",src:`https://player.vimeo.com/video/${n[1]}?autoplay=1`}:{type:"video",src:e}};function vu({images:e,tagline:t,taglineSub:n,auto:i=!0}){const[s,o]=j.useState(0),a=e.length;if(j.useEffect(()=>{if(!i||a<2)return;const c=setInterval(()=>o(d=>(d+1)%a),5e3);return()=>clearInterval(c)},[i,a]),!a)return null;const l=c=>o(d=>(d+c+a)%a);return r.jsxs("div",{className:"pd-shape",children:[r.jsx("span",{className:"pd-shape-accent","aria-hidden":"true"}),r.jsxs("div",{className:"pd-shape-frame",children:[e.map((c,d)=>r.jsx("img",{src:c,alt:"",className:d===s?"on":"",loading:d===0?"eager":"lazy"},c+d)),r.jsx("span",{className:"pd-shape-shade","aria-hidden":"true"}),t&&r.jsxs("div",{className:"pd-shape-tag",children:[r.jsx("strong",{children:t}),r.jsx("i",{"aria-hidden":"true"}),n&&r.jsx("small",{children:n})]}),a>1&&r.jsxs("div",{className:"pd-shape-ctrl",children:[r.jsx("button",{type:"button",onClick:()=>l(-1),"aria-label":"Previous photo",children:r.jsx(_,{n:"arrowL",size:18})}),r.jsxs("span",{children:[ki(s+1)," / ",ki(a)]}),r.jsx("button",{type:"button",onClick:()=>l(1),"aria-label":"Next photo",children:r.jsx(_,{n:"arrowR",size:18})})]})]})]})}function et({children:e,center:t}){return r.jsx("div",{className:`pd-eyebrow${t?" center":""}`,children:e})}function bu({property:e,source:t,dark:n,compact:i,onDone:s}){const[o,a]=j.useState({name:"",phone:"",email:"",message:""}),[l,c]=j.useState("idle"),[d,h]=j.useState(""),u=A=>k=>a(S=>({...S,[A]:k.target.value})),g=async A=>{var k,S;if(A.preventDefault(),o.name.trim().length<2)return h("Please enter your name");if(!/^\+?[\d\s-]{10,15}$/.test(o.phone.trim()))return h("Please enter a valid mobile number");h(""),c("sending");try{await ie.post("/enquiries",{name:o.name.trim(),phone:o.phone.trim(),email:o.email.trim(),property:(e==null?void 0:e.title)+(t?` — ${t}`:""),message:o.message.trim()||t||"Enquiry from property page",source:"property",page:window.location.pathname}),c("sent"),s==null||s()}catch(N){c("error"),h(((S=(k=N==null?void 0:N.response)==null?void 0:k.data)==null?void 0:S.error)||"Could not send right now. Please call us instead.")}};return l==="sent"?r.jsxs("div",{className:`pd-form-done${n?" dark":""}`,children:[r.jsx(_,{n:"check",size:34}),r.jsxs("strong",{children:["Thank you, ",o.name.split(" ")[0],"!"]}),r.jsx("span",{children:"Our property expert will call you shortly."})]}):r.jsxs("form",{className:`pd-form${n?" dark":""}`,onSubmit:g,noValidate:!0,children:[r.jsxs("label",{className:"pd-input",children:[r.jsx(_,{n:"user",size:17}),r.jsx("input",{value:o.name,onChange:u("name"),placeholder:"Full Name",autoComplete:"name"})]}),r.jsxs("label",{className:"pd-input",children:[r.jsx(_,{n:"mobile",size:17}),r.jsx("input",{value:o.phone,onChange:u("phone"),placeholder:"Mobile Number",inputMode:"tel",autoComplete:"tel"})]}),!i&&r.jsxs("label",{className:"pd-input",children:[r.jsx(_,{n:"mail",size:17}),r.jsx("input",{value:o.email,onChange:u("email"),placeholder:"Email Address (Optional)",inputMode:"email",autoComplete:"email"})]}),!i&&r.jsxs("label",{className:"pd-input area",children:[r.jsx(_,{n:"chat",size:17}),r.jsx("textarea",{value:o.message,onChange:u("message"),placeholder:"Your Message (Optional)",rows:3})]}),d&&r.jsx("div",{className:"pd-form-err",children:d}),r.jsx("button",{type:"submit",className:"pd-btn gold block",disabled:l==="sending",children:l==="sending"?"Sending…":r.jsxs(r.Fragment,{children:["REQUEST CALLBACK ",r.jsx(_,{n:"arrowR",size:16})]})}),r.jsxs("div",{className:"pd-form-safe",children:[r.jsx(_,{n:"lock",size:13})," Your information is safe with us."]})]})}const sy=["+91","+971","+1","+44","+65","+61"];function oy({property:e}){const[t,n]=j.useState({name:"",code:"+91",phone:"",agree:!0}),[i,s]=j.useState("idle"),[o,a]=j.useState(""),l=d=>h=>n(u=>({...u,[d]:h.target.type==="checkbox"?h.target.checked:h.target.value})),c=async d=>{if(d.preventDefault(),t.name.trim().length<2)return a("Please enter your name");if(!/^[\d\s-]{7,14}$/.test(t.phone.trim()))return a("Please enter a valid mobile number");if(!t.agree)return a("Please allow us to contact you");a(""),s("sending");try{await ie.post("/enquiries",{name:t.name.trim(),phone:`${t.code} ${t.phone.trim()}`,email:"",property:e.title,message:"Enquiry from property page (top form)",source:"property",page:window.location.pathname}),s("sent")}catch{s("idle"),a("Could not send right now. Please call us instead.")}};return i==="sent"?r.jsxs("div",{className:"pd-form-done",children:[r.jsx(_,{n:"check",size:34}),r.jsxs("strong",{children:["Thank you, ",t.name.split(" ")[0],"!"]}),r.jsx("span",{children:"Our property expert will call you shortly."})]}):r.jsxs("form",{className:"pd-hform",onSubmit:c,noValidate:!0,children:[r.jsxs("label",{children:["FULL NAME",r.jsx("input",{value:t.name,onChange:l("name"),placeholder:"Enter your name",autoComplete:"name"})]}),r.jsxs("label",{children:["MOBILE NUMBER",r.jsxs("span",{className:"pd-hform-phone",children:[r.jsx("select",{value:t.code,onChange:l("code"),"aria-label":"Country code",children:sy.map(d=>r.jsx("option",{children:d},d))}),r.jsx("input",{value:t.phone,onChange:l("phone"),placeholder:"Enter mobile number",inputMode:"tel",autoComplete:"tel-national"})]})]}),r.jsxs("label",{className:"pd-hform-check",children:[r.jsx("input",{type:"checkbox",checked:t.agree,onChange:l("agree")})," I authorize company representatives to Call, SMS, Email or WhatsApp me."]}),o&&r.jsx("div",{className:"pd-form-err",children:o}),r.jsx("button",{type:"submit",disabled:i==="sending",children:i==="sending"?"SENDING…":"SUBMIT"})]})}function ju({open:e,onClose:t,children:n,wide:i,dark:s}){return j.useEffect(()=>{if(!e)return;const o=l=>l.key==="Escape"&&t();document.addEventListener("keydown",o);const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",o),document.body.style.overflow=a}},[e,t]),e?r.jsx("div",{className:"pd-modal",role:"dialog","aria-modal":"true",onClick:t,children:r.jsxs("div",{className:`pd-modal-box${i?" wide":""}${s?" dark":""}`,onClick:o=>o.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-modal-x",onClick:t,"aria-label":"Close",children:r.jsx(_,{n:"close"})}),n]})}):null}const Au=[["overview","Overview"],["pricing","Price"],["highlights","Highlights"],["amenities","Amenities"],["gallery","Gallery"],["location","Location"],["about","Developer"],["faqs","FAQs"]];function ay(){var C;const{id:e}=mo(),t=mn(),[n,i]=j.useState(null),[s,o]=j.useState([]),[a,l]=j.useState("loading"),[c,d]=j.useState(!1),[h,u]=j.useState(null),[g,A]=j.useState(0),[k,S]=j.useState("overview"),[N,f]=j.useState(!1);j.useEffect(()=>{if(n&&(n.slug===e||n.id===e))return;let E=!0;return l("loading"),d(!1),A(0),f(!1),window.scrollTo(0,0),Promise.all([ie.get(`/properties/${encodeURIComponent(e)}`),ie.get("/properties").catch(()=>({data:[]}))]).then(([M,G])=>{var ue;E&&(i(M.data),o(G.data||[]),l("ok"),(ue=M.data)!=null&&ue.slug&&M.data.slug!==e&&t(`/property/${M.data.slug}${window.location.search}${window.location.hash}`,{replace:!0}))}).catch(()=>E&&l("missing")),()=>{E=!1}},[e]),j.useEffect(()=>{if(!n)return;const E=Xw(n);return yc({...E,image:n.image,url:window.location.origin+pt(n),type:"website"})},[n]),j.useEffect(()=>{if(a!=="ok")return;const E=new IntersectionObserver(M=>M.forEach(G=>G.isIntersecting&&S(G.target.id)),{rootMargin:"-45% 0px -50% 0px"});return Au.forEach(([M])=>{const G=document.getElementById(M);G&&E.observe(G)}),()=>E.disconnect()},[a,n]);const p=j.useMemo(()=>{var Nr,Hn,Ze,U;if(!n)return null;const E=Xs(n),M=[...new Set([n.image,...n.gallery||[]].filter(Boolean))],G=String(n.title||"").trim().split(/\s+/),ue=G.length>1?G.slice(0,-1).join(" "):G[0],te=G.length>1?G[G.length-1]:"",Ee=n.developer||"the developer",Ne=Lf(n)||E.locality,[ge,L]=ry(n.towers),F=((Nr=n.overview)==null?void 0:Nr.trim())||`${n.title} is a ${(n.propertyTypeDetail||n.type||"residential").toLowerCase()} project by ${Ee}, located at ${n.location}. It offers ${n.bhk||"premium"} ${["Commercial","Retail","SCO"].includes(n.type)?"spaces":"residences"} priced ${n.priceRange||n.price||"on request"}${n.possession?`, with possession expected by ${n.possession}`:""}. Thoughtfully planned with world-class amenities and excellent connectivity, it is one of the most sought-after addresses in ${E.locality||E.city||"the city"}.`,W=[Ne&&{icon:"pin",value:Ne,label:E.city||E.locality||"Location"},ge&&{icon:"building",value:ge,label:L||"Towers"},n.landArea&&{icon:"area",value:n.landArea,label:"Land Area"},{icon:"diamond",value:n.propertyTypeDetail||n.type||"Residences",label:n.bhk||"Configuration"},n.possession&&!n.landArea&&{icon:"calendar",value:n.possession,label:"Possession"}].filter(Boolean).slice(0,4),V=[...String(n.bhk||"").matchAll(/\d+/g)].map(D=>D[0]),H=(n.pricing||[]).filter(D=>D.type||D.size||D.price).length?n.pricing:V.length?V.map(D=>({type:`${D} BHK`,size:"On request",price:"On request"})):[{type:n.bhk||n.type,size:"On request",price:n.priceRange||n.price||"On request"}],je=(n.highlights||[]).filter(Boolean).length?n.highlights.filter(Boolean):[`Prime address at ${n.location}`,`${n.bhk||"Premium"} ${n.type?n.type.toLowerCase()+"s":"homes"} by ${Ee}`,n.landArea?`Spread across ${n.landArea}${n.towers?` with ${n.towers}`:""}`:"Thoughtfully planned low-density layout",n.rera!==!1?"RERA registered project with transparent pricing":"Transparent pricing and documentation"],pe=(n.amenities||[]).length?n.amenities:Gw,Fe=n.galleryCaptions||[],x=(n.gallery||[]).map((D,yt)=>({src:D,caption:Fe[yt]||""})).filter(D=>D.src);x.length<5&&n.image&&!x.some(D=>D.src===n.image)&&x.unshift({src:n.image,caption:""});const T=na(n.developer),q=T?s.filter(D=>D.id!==n.id&&na(D.developer)===T):[],Wt=s.filter(D=>D.id!==n.id&&D.category===n.category).slice(0,4),zi=q.length?q:s.filter(D=>D.id!==n.id).slice(0,8),gn=n.about||{},$e=((Hn=gn.heading)==null?void 0:Hn.trim())||`About ${n.developer||"the Developer"}`,lt=((Ze=gn.description)==null?void 0:Ze.trim())||`${n.developer||"The developer"} is known for its commitment to quality, innovation and a customer-centric approach. With landmark projects${q.length?` such as ${q.slice(0,3).map(D=>D.title).join(", ")}`:""}, it continues to set new benchmarks in design, construction and lifestyle across ${E.city||"the region"}.`,ct=(n.faqs||[]).filter(D=>D.question).length?n.faqs.filter(D=>D.question):[{question:`What is the exact location of ${n.title}?`,answer:`${n.title} is located at ${n.location}, with excellent connectivity to key landmarks, offices and schools.`},{question:`What is the expected possession date for ${n.title}?`,answer:n.possession?`Possession is expected by ${n.possession}. Our team can share the latest construction updates.`:"Our team will share the latest possession timeline and construction updates on request."},{question:`How can I verify the RERA approval status of ${n.title}?`,answer:n.rera!==!1?`${n.title} is a RERA registered project. Our experts can share the RERA number and help you verify it on the state RERA website.`:"Please contact our team for the latest approval details."},{question:`Who is the developer of ${n.title}?`,answer:`${n.title} is developed by ${n.developer||"a reputed developer"}.`},{question:`What types of units are available in ${n.title}?`,answer:`${n.title} offers ${n.bhk||"multiple configurations"}${n.priceRange?`, priced ${n.priceRange}`:""}.`}];return{place:E,images:M,titleA:ue,titleB:te,overview:F,facts:W,pricing:H,highlights:je,amenities:pe,gallery:x,iconic:zi,similar:Wt,aboutHeading:$e,aboutDesc:lt,aboutSub:((U=gn.subheading)==null?void 0:U.trim())||"Building a Better Tomorrow",aboutImage:gn.image||M[1]||M[0],aboutStats:(gn.stats||[]).filter(D=>D.value||D.label),faqs:ct,sameDev:q.length>0}},[n,s]);if(a==="loading")return r.jsxs("div",{className:"pd-loading",children:[r.jsx("span",{className:"pd-spin"})," Loading property…"]});if(a==="missing"||!n||!p)return r.jsx(r.Fragment,{children:r.jsx("div",{className:"pd-loading",children:r.jsxs("div",{children:[r.jsx("h2",{children:"Property not found"}),r.jsx("p",{children:"It may have been removed."}),r.jsx(B,{className:"pd-btn dark",to:"/search",children:"Browse properties"})]})})});const m=E=>u({kind:"enquiry",source:E}),v=n.brochure?`${n.brochure}${n.brochure.includes("?")?"&":"?"}download=1`:"",b=({className:E,children:M})=>v?r.jsx("a",{className:E,href:v,download:!0,target:"_blank",rel:"noreferrer",children:M}):r.jsx("button",{type:"button",className:E,onClick:()=>m("Brochure request"),children:M}),P=E=>{const M=document.getElementById(E);M&&window.scrollTo({top:M.getBoundingClientRect().top+window.scrollY-66,behavior:"smooth"})},w=p.aboutHeading.split(/\s+/),R=[["Property Type",n.propertyTypeDetail||n.type],["Possession",n.possession],["About Project",n.towers||n.bhk],["Land Area",n.landArea||(n.towers?n.bhk:"")]].filter(([,E])=>E);return r.jsxs("div",{className:"pd-page",style:ty(n.brandColor),children:[r.jsx("div",{className:"pd-bar",children:r.jsxs("div",{className:"pd-wrap pd-bar-inner",children:[n.logo&&!/via\.placeholder\.com|dummyimage\.com/.test(n.logo)&&!N&&r.jsx("span",{className:"pd-bar-logo",children:r.jsx("img",{src:n.logo,alt:n.developer||n.title,onError:()=>f(!0)})}),r.jsxs("div",{className:"pd-bar-title",children:[r.jsx("strong",{children:n.title}),r.jsx("span",{children:n.priceRange||n.price})]}),r.jsx("nav",{className:"pd-bar-nav",children:Au.map(([E,M])=>r.jsx("button",{type:"button",className:k===E?"on":"",onClick:()=>P(E),children:M},E))}),r.jsx("button",{type:"button",className:"pd-btn gold sm",onClick:()=>m("Enquire now"),children:"Enquire Now"})]})}),r.jsxs("section",{className:"pd-hero",children:[p.images[0]&&r.jsx("img",{className:"pd-hero-bg",src:p.images[0],alt:n.title}),r.jsx("span",{className:"pd-hero-shade","aria-hidden":"true"}),r.jsxs("div",{className:"pd-wrap pd-hero-inner",children:[r.jsxs("div",{className:"pd-hero-info",children:[r.jsxs("div",{className:"pd-glass pd-hero-name",children:[r.jsx("span",{className:"pd-hero-eyebrow",children:(n.propertyTypeDetail||n.type||"Residential").toUpperCase()}),r.jsx("h1",{children:n.title}),r.jsx("p",{children:n.location})]}),r.jsxs("div",{className:"pd-glass pd-hero-facts",children:[R.length>0&&r.jsx("div",{className:"pd-hero-grid",children:R.map(([E,M])=>r.jsxs("div",{children:[r.jsx("small",{children:E.toUpperCase()}),r.jsx("strong",{children:M})]},E))}),r.jsxs("div",{className:"pd-hero-price",children:[r.jsx("small",{children:"STARTING FROM"}),r.jsxs("strong",{children:[n.price||n.priceRange||"Price on request",n.price||n.priceRange?"*":""]})]})]})]}),r.jsxs("div",{className:"pd-hero-card",children:[r.jsx("h2",{children:"Get in Touch with us."}),r.jsx("p",{children:"ENTER YOUR DETAILS BELOW TO PROCEED"}),r.jsx(oy,{property:n})]})]})]}),r.jsx("section",{id:"overview",className:"pd-section pd-overview",children:r.jsxs("div",{className:"pd-wrap pd-split",children:[r.jsxs("div",{className:"pd-copy",children:[r.jsx(et,{children:"OVERVIEW"}),r.jsxs("h2",{className:"pd-title",children:[r.jsx("span",{children:p.titleA}),p.titleB&&r.jsx("span",{className:"gold",children:p.titleB})]}),r.jsx("p",{className:`pd-desc${c?" open":""}`,children:p.overview}),p.overview.length>260&&r.jsxs("button",{type:"button",className:"pd-readmore",onClick:()=>d(E=>!E),children:[c?"Read Less":"Read More"," ",r.jsx(_,{n:"arrowR",size:16})]}),r.jsx("div",{className:"pd-facts",style:{"--pd-facts":Math.max(p.facts.length,2)},children:p.facts.map(E=>r.jsxs("div",{className:"pd-fact",children:[r.jsx("span",{className:"pd-fact-ic",children:r.jsx(_,{n:E.icon,size:20})}),r.jsxs("span",{children:[r.jsx("strong",{children:E.value}),r.jsx("small",{children:E.label})]})]},E.icon+E.value))}),r.jsxs("div",{className:"pd-price-line",children:[r.jsx("span",{children:"Starting from"}),r.jsx("strong",{children:n.price||n.priceRange||"Price on request"}),n.rera!==!1&&r.jsx("em",{children:"✓ RERA"})]}),r.jsxs("div",{className:"pd-actions",children:[r.jsxs(b,{className:"pd-btn dark",children:[v?"DOWNLOAD BROCHURE":"REQUEST BROCHURE"," ",r.jsx(_,{n:v?"download":"arrowR",size:16})]}),n.videoUrl&&r.jsxs("button",{type:"button",className:"pd-video-btn",onClick:()=>u({kind:"video"}),children:[r.jsx("span",{children:r.jsx(_,{n:"play",size:18})})," WATCH VIDEO"]})]})]}),r.jsx(vu,{images:p.images,tagline:n.tagline||"A New Icon Rises",taglineSub:n.taglineSub||"Luxury living beyond compare"})]})}),r.jsx("section",{id:"pricing",className:"pd-section",children:r.jsxs("div",{className:"pd-wrap",children:[r.jsxs("div",{className:"pd-head center",children:[r.jsx(et,{center:!0,children:"SPACE & PRICING"}),r.jsxs("h2",{children:[n.title," ",r.jsx("span",{className:"gold",children:"Price"})]}),r.jsx("p",{children:"Unit sizes and prices — talk to our expert for the latest offers and availability."})]}),r.jsxs("div",{className:"pd-table",children:[r.jsxs("div",{className:"pd-tr head",children:[r.jsx("span",{children:"Unit Type"}),r.jsx("span",{children:"Size"}),r.jsx("span",{children:"Price"}),r.jsx("span",{})]}),p.pricing.map((E,M)=>r.jsxs("div",{className:"pd-tr",children:[r.jsxs("span",{className:"strong",children:[r.jsx(_,{n:"home",size:17})," ",E.type||"—"]}),r.jsx("span",{children:E.size||"On request"}),r.jsx("span",{className:"gold",children:E.price||"On request"}),r.jsx("span",{children:r.jsx("button",{type:"button",className:"pd-btn outline xs",onClick:()=>m(`Price details: ${E.type}`),children:"Get Details"})})]},M))]}),r.jsxs("div",{className:"pd-center-actions",children:[r.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>m("Price list request"),children:["GET COMPLETE PRICE LIST ",r.jsx(_,{n:"arrowR",size:16})]}),r.jsxs("a",{className:"pd-call-pill",href:`tel:${wu}`,children:[r.jsx(_,{n:"phone",size:16})," Speak with an expert ",r.jsx("b",{children:yu})]})]})]})}),r.jsx("section",{id:"highlights",className:"pd-section tint",children:r.jsxs("div",{className:"pd-wrap pd-split",children:[r.jsxs("div",{className:"pd-copy",children:[r.jsx(et,{children:"EXPLORE FEATURES"}),r.jsx("h2",{className:"pd-h2-line",children:"Project Highlights"}),r.jsx("div",{className:"pd-hl-list",children:p.highlights.map((E,M)=>r.jsxs("div",{className:"pd-hl",children:[r.jsx("span",{className:"pd-hl-ic",children:r.jsx(_,{n:"check",size:18})}),r.jsx("span",{children:E})]},M))})]}),r.jsx(vu,{images:[...p.images].reverse(),tagline:"A New Way of Living",taglineSub:n.taglineSub||"Luxury living beyond compare"})]})}),r.jsx("section",{id:"amenities",className:"pd-section",children:r.jsxs("div",{className:"pd-wrap",children:[r.jsxs("div",{className:"pd-head center",children:[r.jsx(et,{center:!0,children:"LUXURY LIFESTYLE"}),r.jsxs("h2",{children:["World-class ",r.jsx("span",{className:"gold",children:"Amenities"})]}),r.jsx("p",{children:"Curated for luxury, wellness and community living."})]}),r.jsx("div",{className:"pd-amenities",children:p.amenities.map(E=>r.jsxs("div",{className:"pd-amenity",children:[r.jsx("span",{children:r.jsx(qw,{name:E,size:26})}),r.jsx("strong",{children:E})]},E))})]})}),r.jsx("section",{id:"gallery",className:"pd-section soft",children:r.jsxs("div",{className:"pd-wrap",children:[r.jsxs("div",{className:"pd-head center",children:[r.jsx(et,{center:!0,children:"GALLERY"}),r.jsxs("h2",{className:"serif",children:[n.title," ",r.jsx("span",{className:"gold",children:"Gallery"})]}),r.jsx("p",{children:"A glimpse into a world of unmatched luxury, design and lifestyle."})]}),r.jsx("div",{className:`pd-bento n${Math.min(p.gallery.length,5)}`,children:p.gallery.slice(0,5).map((E,M)=>r.jsxs("button",{type:"button",className:`pd-bento-item i${M}`,onClick:()=>u({kind:"gallery",index:M}),children:[r.jsx("img",{src:E.src,alt:E.caption||`${n.title} photo ${M+1}`,loading:"lazy"}),E.caption&&r.jsxs("span",{className:"pd-cap",children:[E.caption,r.jsx("i",{"aria-hidden":"true"})]})]},E.src+M))}),p.gallery.length>0&&r.jsx("div",{className:"pd-center-actions",children:r.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>u({kind:"gallery",index:0}),children:["VIEW FULL GALLERY ",r.jsx(_,{n:"arrowR",size:16})]})})]})}),r.jsx("section",{id:"location",className:"pd-section",children:r.jsxs("div",{className:"pd-wrap pd-loc",children:[r.jsxs("div",{className:"pd-copy",children:[r.jsx(et,{children:"LOCATION"}),r.jsxs("h2",{className:"pd-h2",children:["Prime ",r.jsx("span",{className:"gold",children:"Address"})]}),r.jsxs("p",{className:"pd-desc open",children:[n.title," is located at ",n.location,p.place.locality?`, one of the most sought-after micro-markets in ${p.place.city||"the city"}`:"","."]}),r.jsxs("div",{className:"pd-loc-card",children:[r.jsx("span",{className:"pd-fact-ic",children:r.jsx(_,{n:"pin",size:20})}),r.jsxs("span",{children:[r.jsx("strong",{children:n.location}),r.jsx("small",{children:[p.place.locality,p.place.city].filter(Boolean).join(" · ")})]})]}),r.jsxs("a",{className:"pd-btn outline",href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${n.title}, ${n.location}`)}`,target:"_blank",rel:"noreferrer",children:["OPEN IN GOOGLE MAPS ",r.jsx(_,{n:"arrowR",size:16})]})]}),r.jsx("div",{className:"pd-map",children:r.jsx("iframe",{title:`${n.title} location map`,src:`https://maps.google.com/maps?q=${encodeURIComponent(n.location||n.title)}&z=14&output=embed`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})}),r.jsxs("section",{id:"about",className:"pd-section",children:[r.jsxs("div",{className:"pd-wrap pd-split about",children:[r.jsxs("div",{className:"pd-copy",children:[r.jsx(et,{children:"PROJECT EXCELLENCE"}),r.jsxs("h2",{className:"pd-h2",children:[w[0]," ",r.jsx("span",{className:"gold",children:w.slice(1).join(" ")})]}),r.jsx("div",{className:"pd-about-sub",children:p.aboutSub}),r.jsx("p",{className:"pd-desc open",children:p.aboutDesc}),p.aboutStats.length>0&&r.jsx("div",{className:"pd-stats",children:p.aboutStats.map((E,M)=>r.jsxs("div",{className:"pd-stat",children:[r.jsx("span",{className:"pd-stat-ic",children:r.jsx(_,{n:["chart","key","people","trophy"][M%4],size:22})}),r.jsxs("span",{children:[r.jsx("strong",{children:E.value}),r.jsx("small",{children:E.label})]})]},M))}),r.jsx("div",{className:"pd-features",children:[["award","Quality Construction"],["bulb","Innovative Designs"],["leaf","Sustainable Development"],["people","Customer Centric Approach"]].map(([E,M])=>r.jsxs("div",{className:"pd-feature",children:[r.jsx("span",{children:r.jsx(_,{n:E,size:20})}),M]},M))})]}),r.jsxs("div",{className:"pd-about-visual",children:[r.jsx("img",{src:p.aboutImage,alt:p.aboutHeading,loading:"lazy"}),r.jsx("span",{className:"pd-about-shade","aria-hidden":"true"}),r.jsxs("div",{className:"pd-about-quote",children:[r.jsx("i",{"aria-hidden":"true"}),"SPACES",r.jsx("br",{}),"THAT INSPIRE",r.jsx("br",{}),"A BRIGHTER",r.jsx("br",{}),"TOMORROW"]}),r.jsxs("div",{className:"pd-about-bar",children:[r.jsxs("span",{children:[r.jsx(_,{n:"home",size:18})," Iconic Developments"]}),r.jsxs("span",{children:[r.jsx(_,{n:"leaf",size:18})," Greener Communities"]}),r.jsxs("span",{children:[r.jsx(_,{n:"people",size:18})," A Better Tomorrow"]})]})]})]}),p.iconic.length>0&&r.jsx("div",{className:"pd-iconic",children:r.jsxs("div",{className:"pd-wrap",children:[r.jsxs("div",{className:"pd-iconic-head",children:[r.jsxs("div",{children:[r.jsx(et,{children:p.sameDev?"OUR SIGNATURE DEVELOPMENTS":"MORE PROJECTS"}),r.jsx("h2",{className:"pd-h2",children:p.sameDev?r.jsxs(r.Fragment,{children:["Iconic Projects ",r.jsxs("span",{className:"gold",children:["by ",n.developer]})]}):r.jsxs(r.Fragment,{children:["Explore More ",r.jsx("span",{className:"gold",children:"Projects"})]})})]}),r.jsxs(B,{className:"pd-btn outline sm",to:p.sameDev?`/search?q=${encodeURIComponent(na(n.developer))}`:"/search",children:["VIEW ALL PROJECTS ",r.jsx(_,{n:"arrowR",size:15})]})]}),r.jsx(ly,{items:p.iconic})]})})]}),r.jsx("section",{id:"faqs",className:"pd-section",children:r.jsxs("div",{className:"pd-wrap",children:[r.jsxs("div",{className:"pd-head center",children:[r.jsx(et,{center:!0,children:"CONCIERGE SUPPORT"}),r.jsxs("h2",{children:["Everything You ",r.jsx("span",{className:"gold",children:"Need to Know"})]}),r.jsxs("p",{children:["Get answers to the most common questions about ",n.title,".",r.jsx("br",{}),"Our team is here to help you at every step of your journey."]}),r.jsxs("a",{className:"pd-expert",href:`tel:${wu}`,children:[r.jsx("span",{className:"pd-expert-ic",children:r.jsx(_,{n:"phone",size:20})}),r.jsxs("span",{children:[r.jsx("small",{children:"TALK TO OUR EXPERT"}),r.jsx("strong",{children:yu}),r.jsx("em",{children:"AVAILABLE NOW"})]})]})]}),r.jsxs("div",{className:"pd-faq-grid",children:[r.jsxs("div",{children:[r.jsx("div",{className:"pd-faqs",children:p.faqs.map((E,M)=>r.jsxs("div",{className:`pd-faq${g===M?" open":""}`,children:[r.jsxs("button",{type:"button",onClick:()=>A(g===M?-1:M),"aria-expanded":g===M,children:[r.jsx("span",{className:"pd-faq-no",children:ki(M+1)}),r.jsx("span",{className:"pd-faq-q",children:E.question}),r.jsx("span",{className:"pd-faq-tog",children:r.jsx(_,{n:g===M?"minus":"plus",size:16,sw:2})})]}),g===M&&E.answer&&r.jsx("p",{children:E.answer})]},M))}),r.jsx("div",{className:"pd-perks",children:[["headset","Dedicated","Relationship Manager"],["doc","Latest Project","Updates"],["calendar","Site Visit","Assistance"],["star","Exclusive Offers","& Pricing Details"]].map(([E,M,G])=>r.jsxs("div",{className:"pd-perk",children:[r.jsx("span",{children:r.jsx(_,{n:E,size:20})}),r.jsxs("small",{children:[M,r.jsx("br",{}),G]})]},M))})]}),r.jsxs("div",{className:"pd-touch",children:[r.jsx(et,{children:"GET IN TOUCH"}),r.jsxs("h3",{children:["Get in Touch with ",r.jsx("span",{className:"gold",children:"Us."})]}),r.jsx("p",{children:"Fill in your details and our team will get back to you shortly."}),r.jsx(bu,{property:n,source:"Get in touch",dark:!0})]})]})]})}),p.similar.length>0&&r.jsx("section",{className:"pd-section tint",children:r.jsxs("div",{className:"pd-wrap",children:[r.jsx("div",{className:"pd-iconic-head",children:r.jsxs("div",{children:[r.jsx(et,{children:"EXPLORE MORE"}),r.jsxs("h2",{className:"pd-h2",children:["Similar ",r.jsx("span",{className:"gold",children:"Projects"})]})]})}),r.jsx("div",{className:"pd-similar",children:p.similar.map(E=>r.jsxs(B,{to:pt(E),className:"pd-sim",children:[r.jsx("img",{src:E.image,alt:E.title,loading:"lazy"}),r.jsxs("div",{children:[r.jsx("strong",{children:E.title}),r.jsx("span",{className:"gold",children:E.priceRange||E.price}),r.jsxs("small",{children:[r.jsx(_,{n:"pin",size:13})," ",E.location]})]})]},E.id))})]})}),r.jsx("div",{className:"pd-dock",children:r.jsxs("div",{className:"pd-wrap pd-dock-inner",children:[r.jsxs("div",{className:"pd-dock-prop",children:[p.images[0]&&r.jsx("img",{src:p.images[0],alt:""}),r.jsxs("span",{children:[r.jsx("strong",{children:n.title}),r.jsx("small",{children:n.price||n.priceRange?`${n.price||n.priceRange}* Onwards`:"Price on request"})]})]}),r.jsxs("div",{className:"pd-dock-actions",children:[r.jsxs(b,{className:"pd-dock-brochure",children:[r.jsx(_,{n:"download",size:20}),r.jsx("span",{children:"Brochure"})]}),r.jsxs("button",{type:"button",className:"pd-dock-enquire",onClick:()=>m("Enquire now"),children:[r.jsx(_,{n:"mail",size:18}),r.jsx("span",{children:"ENQUIRE NOW"})]}),r.jsx("a",{className:"pd-dock-wa",href:ny(`Hi, I am interested in ${n.title}. Please share more details.`),target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",children:r.jsx(Jw,{})})]})]})}),r.jsxs(ju,{open:(h==null?void 0:h.kind)==="enquiry",onClose:()=>u(null),dark:!0,children:[r.jsxs("div",{className:"pd-modal-head",children:[r.jsx(et,{children:((C=h==null?void 0:h.source)==null?void 0:C.toUpperCase())||"ENQUIRE"}),r.jsx("h3",{children:n.title}),r.jsx("p",{children:"Share your details and our expert will call you back."})]}),r.jsx(bu,{property:n,source:h==null?void 0:h.source,dark:!0},h==null?void 0:h.source)]}),r.jsx(ju,{open:(h==null?void 0:h.kind)==="video",onClose:()=>u(null),wide:!0,children:n.videoUrl&&(()=>{const E=iy(n.videoUrl);return E.type==="iframe"?r.jsx("div",{className:"pd-video",children:r.jsx("iframe",{src:E.src,title:`${n.title} video`,allow:"autoplay; encrypted-media; fullscreen",allowFullScreen:!0})}):r.jsx("div",{className:"pd-video",children:r.jsx("video",{src:E.src,controls:!0,autoPlay:!0,playsInline:!0})})})()}),(h==null?void 0:h.kind)==="gallery"&&r.jsx(cy,{items:p.gallery,start:h.index||0,title:n.title,onClose:()=>u(null)})]})}function ly({items:e}){const[t,n]=j.useState(null),i=s=>t==null?void 0:t.scrollBy({left:s*(t.clientWidth*.8),behavior:"smooth"});return r.jsxs("div",{className:"pd-iconic-row-wrap",children:[r.jsx("button",{type:"button",className:"pd-round left",onClick:()=>i(-1),"aria-label":"Previous",children:r.jsx(_,{n:"arrowL",size:18})}),r.jsx("div",{className:"pd-iconic-row",ref:n,children:e.map(s=>r.jsxs(B,{to:pt(s),className:"pd-iconic-card",children:[r.jsx("img",{src:s.image,alt:s.title,loading:"lazy"}),r.jsxs("div",{children:[r.jsxs("span",{children:[r.jsx("strong",{children:s.title}),r.jsxs("small",{children:[r.jsx(_,{n:"pin",size:13})," ",Lf(s)||Xs(s).locality,", ",Xs(s).city]})]}),r.jsx("em",{children:r.jsx(_,{n:"arrowR",size:16})})]})]},s.id))}),r.jsx("button",{type:"button",className:"pd-round right",onClick:()=>i(1),"aria-label":"Next",children:r.jsx(_,{n:"arrowR",size:18})})]})}function cy({items:e,start:t,title:n,onClose:i}){const[s,o]=j.useState(t),a=e.length;j.useEffect(()=>{const c=h=>{h.key==="Escape"&&i(),h.key==="ArrowRight"&&o(u=>(u+1)%a),h.key==="ArrowLeft"&&o(u=>(u-1+a)%a)};document.addEventListener("keydown",c);const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=d}},[a,i]);const l=e[s];return r.jsxs("div",{className:"pd-lightbox",role:"dialog","aria-modal":"true","aria-label":`${n} gallery`,children:[r.jsx("button",{type:"button",className:"pd-lb-x",onClick:i,"aria-label":"Close",children:r.jsx(_,{n:"close",size:22})}),r.jsxs("div",{className:"pd-lb-stage",children:[r.jsx("button",{type:"button",className:"pd-round",onClick:()=>o(c=>(c-1+a)%a),"aria-label":"Previous",children:r.jsx(_,{n:"arrowL",size:20})}),r.jsxs("figure",{children:[r.jsx("img",{src:l.src,alt:l.caption||n}),r.jsxs("figcaption",{children:[r.jsx("span",{children:l.caption||n}),r.jsxs("b",{children:[ki(s+1)," / ",ki(a)]})]})]}),r.jsx("button",{type:"button",className:"pd-round",onClick:()=>o(c=>(c+1)%a),"aria-label":"Next",children:r.jsx(_,{n:"arrowR",size:20})})]}),r.jsx("div",{className:"pd-lb-thumbs",children:e.map((c,d)=>r.jsx("button",{type:"button",className:d===s?"on":"",onClick:()=>o(d),children:r.jsx("img",{src:c.src,alt:"",loading:"lazy"})},c.src+d))})]})}function dy(){const[e,t]=j.useState([]),[n,i]=j.useState(0),[s,o]=j.useState(!0),[a,l]=j.useState(!0),[c,d]=j.useState(!0),h=j.useRef(null);j.useEffect(()=>{ie.get("/snaps").then(S=>{t(S.data),d(!1)}).catch(()=>d(!1))},[]),j.useEffect(()=>{h.current&&(s?h.current.play().catch(()=>{}):h.current.pause())},[s,n]),j.useEffect(()=>{const S=N=>{N.key==="ArrowDown"&&A(),N.key==="ArrowUp"&&k(),N.key===" "&&(N.preventDefault(),o(f=>!f))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)});const u=e[n],g=e.length,A=()=>i(S=>(S+1)%g),k=()=>i(S=>(S-1+g)%g);return c?r.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"Loading snaps..."}):u?r.jsxs("div",{style:{minHeight:"100vh",background:"#0a0a0a",color:"#fff",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",borderBottom:"1px solid rgba(255,255,255,.08)",background:"#0a0a0a",position:"sticky",top:0,zIndex:10},children:[r.jsxs(B,{to:"/",style:{display:"flex",alignItems:"center",gap:8,color:"#fff",fontWeight:800,fontSize:14},children:[r.jsx("span",{style:{width:28,height:28,background:"#d8232a",borderRadius:6,display:"grid",placeItems:"center",fontWeight:900,fontSize:12},children:"100"}),"acress.com",r.jsx("span",{style:{fontWeight:400,opacity:.6,fontSize:12,marginLeft:4},children:"/ property-snaps"})]}),r.jsx(B,{to:"/",style:{width:34,height:34,borderRadius:"50%",background:"rgba(255,255,255,.08)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.12)"},children:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:r.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),r.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"14px",display:"grid",gridTemplateColumns:"420px 420px",gap:18,justifyContent:"center",alignItems:"start"},className:"snaps-layout",children:[r.jsxs("div",{style:{position:"relative",background:"#000",borderRadius:20,overflow:"hidden",aspectRatio:"9/16",maxHeight:"78vh",border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 20px 60px rgba(0,0,0,.6)"},className:"video-box",children:[r.jsx("video",{ref:h,src:u.videoUrl,poster:u.image||u.thumbnail,muted:a,loop:!0,playsInline:!0,autoPlay:!0,style:{width:"100%",height:"100%",objectFit:"cover"},onClick:()=>o(!s)},u.id),r.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:12,background:"linear-gradient(to bottom, rgba(0,0,0,.55) 0%, transparent 100%)",display:"flex",alignItems:"center",gap:10},children:[r.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",flexShrink:0,border:"2px solid rgba(255,255,255,.9)"},children:r.jsx("span",{style:{fontWeight:900,fontSize:11,color:"#d8232a"},children:"100"})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:{fontWeight:700,fontSize:13,lineHeight:1.1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff"},children:u.title}),r.jsx("div",{style:{fontSize:11,opacity:.8,color:"#fff"},children:"HomWisor"})]}),r.jsx("button",{onClick:()=>l(!a),style:{width:34,height:34,borderRadius:"50%",background:a?"rgba(0,0,0,.5)":"rgba(255,255,255,.9)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:a?"#fff":"#111",cursor:"pointer",backdropFilter:"blur(6px)"},children:a?r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),r.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),r.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}),r.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),r.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}):r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),r.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),r.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]})})]}),r.jsxs("div",{style:{position:"absolute",top:"38%",left:0,right:0,textAlign:"center",pointerEvents:"none"},children:[r.jsx("div",{style:{fontSize:10,letterSpacing:1.5,opacity:.9,color:"#fff",fontWeight:600,textShadow:"0 2px 10px rgba(0,0,0,.6)"},children:"WHERE"}),r.jsx("div",{style:{fontSize:22,fontWeight:800,letterSpacing:.5,color:"#fff",textShadow:"0 4px 20px rgba(0,0,0,.7)",marginTop:2,fontFamily:"'Playfair Display', serif"},children:"SPACIOUS LIVING"}),r.jsx("div",{style:{width:40,height:1.5,background:"#fff",margin:"6px auto",opacity:.8}}),r.jsx("div",{style:{fontSize:9,letterSpacing:2,opacity:.85,color:"#fff"},children:u.badge||"LUXURY EDITION"})]}),r.jsxs("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",pointerEvents:"none"},children:[!s&&r.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(0,0,0,.45)",backdropFilter:"blur(8px)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)"},children:r.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"#fff",children:r.jsx("path",{d:"M8 5.14v14l11-7z"})})}),r.jsx("button",{onClick:()=>o(!s),style:{position:"absolute",inset:0,background:"transparent",border:"none",cursor:"pointer",pointerEvents:"auto"},"aria-label":"play"})]}),r.jsx("button",{onClick:k,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:r.jsx("path",{d:"M15 18l-6-6 6-6"})})}),r.jsx("button",{onClick:A,style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:r.jsx("path",{d:"M9 18l6-6-6-6"})})}),r.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"10px 12px",background:"linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.2) 60%, transparent 100%)"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[r.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[r.jsx("path",{d:"M19 12H5"}),r.jsx("path",{d:"M12 19l-7-7 7-7"})]})}),r.jsx("button",{onClick:()=>o(!s),style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,.9)",border:"none",display:"grid",placeItems:"center",cursor:"pointer"},children:s?r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:[r.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),r.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}):r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:r.jsx("path",{d:"M8 5.14v14l11-7z"})})}),r.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"M12 5l7 7-7 7"})]})}),r.jsx("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:r.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)",color:"#fff"},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[r.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),r.jsx("polyline",{points:"16 6 12 2 8 6"}),r.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]})})})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[r.jsxs("div",{style:{flex:1,background:"rgba(0,0,0,.35)",border:"1px solid rgba(255,255,255,.12)",borderRadius:12,padding:8,display:"flex",alignItems:"center",gap:8},children:[r.jsx("img",{src:u.thumbnail||u.image,alt:"thumb",style:{width:42,height:32,borderRadius:6,objectFit:"cover",border:"1px solid rgba(255,255,255,.2)"}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{fontSize:11,fontWeight:600,lineHeight:1.2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Welcome to a ",u.title.slice(0,28),"..."]}),r.jsxs("div",{style:{fontSize:10,opacity:.7},children:["Where spacious living • ",u.location]})]})]}),r.jsxs("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{background:"#d8232a",color:"#fff",padding:"8px 12px",borderRadius:20,fontWeight:800,fontSize:11,display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap",textDecoration:"none"},children:[r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z"})}),u.phone]})]})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,maxHeight:"78vh",overflowY:"auto"},className:"scrollbar-hide",children:[r.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid rgba(255,255,255,.08)",borderRadius:16,padding:14,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:1,color:"rgba(255,255,255,.5)"},children:"NAVIGATION"}),r.jsxs("div",{style:{fontWeight:800,fontSize:22,marginTop:2},children:[n+1,r.jsxs("span",{style:{opacity:.35,fontWeight:600},children:["/",g]})]})]}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx("button",{onClick:k,disabled:g<=1,style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",opacity:n===0?.6:1},children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:r.jsx("path",{d:"M18 15l-6-6-6 6"})})}),r.jsx("button",{onClick:A,disabled:g<=1,style:{width:44,height:44,borderRadius:12,background:"#2a2a2a",border:"1px solid rgba(255,255,255,.12)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,.2)"},children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:r.jsx("path",{d:"M6 9l6 6 6-6"})})})]})]}),r.jsxs("div",{style:{background:"#f8f9fb",borderRadius:20,padding:16,color:"#111",boxShadow:"0 20px 60px rgba(0,0,0,.25)",border:"1px solid #eef0f3"},children:[r.jsxs("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"flex-start"},children:[r.jsx("span",{style:{color:"#dc2626",marginTop:1},children:"⚡"}),r.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#991b1b",lineHeight:1.4},children:u.demandText})]}),r.jsxs("div",{style:{background:"#fefce8",border:"1px solid #fde68a",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"center",marginTop:8},children:[r.jsx("span",{style:{width:8,height:8,background:"#22c55e",borderRadius:"50%",display:"inline-block",boxShadow:"0 0 0 4px rgba(34,197,94,.15)"}}),r.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#92400e"},children:[u.activeBuyers," active buyers viewing this project right now"]})]}),r.jsxs("div",{style:{marginTop:14},children:[r.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"PROJECT OVERVIEW"}),r.jsx("div",{style:{background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:12,padding:12,marginTop:8},children:r.jsxs("div",{style:{fontSize:13,lineHeight:1.5,color:"#374151",fontStyle:"italic"},children:['"',u.description,'"']})})]}),r.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center"},children:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#dc2626",strokeWidth:"1.8",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"MICRO-MARKET LOCATION"}),r.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.microMarket||u.location})]})]}),r.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center",color:"#059669"},children:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#059669",strokeWidth:"1.8",children:[r.jsx("path",{d:"M3 21h18"}),r.jsx("path",{d:"M3 7v14"}),r.jsx("path",{d:"M9 21V7"}),r.jsx("path",{d:"M15 21V7"}),r.jsx("path",{d:"M21 7V21"}),r.jsx("path",{d:"M3 7l9-4 9 4"}),r.jsx("path",{d:"M9 7h6"})]})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"INVESTMENT/PRICE"}),r.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.price})]}),r.jsx("button",{style:{width:32,height:32,borderRadius:10,background:"#fff",border:"1px solid #e5e7eb",display:"grid",placeItems:"center",cursor:"pointer"},children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#6b7280",strokeWidth:"1.8",children:[r.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7-6 11-6 11S6 15 6 8z"}),r.jsx("path",{d:"M10 21h4"}),r.jsx("path",{d:"M12 17v4"})]})})]}),r.jsxs("div",{style:{background:"#0f1e2e",borderRadius:14,padding:12,marginTop:12,color:"#fff"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontWeight:700,fontSize:11,letterSpacing:.4},children:[r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"1.8",children:[r.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"INVESTOR MATRIX TOOL"]}),r.jsx("span",{style:{fontSize:10,fontWeight:700,background:"rgba(56,189,248,.15)",color:"#38bdf8",padding:"3px 7px",borderRadius:20,border:"1px solid rgba(56,189,248,.25)"},children:"◉ Verified ROI"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12,borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:12},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,opacity:.6},children:"Est. Monthly Rental"}),r.jsx("div",{style:{fontWeight:800,fontSize:13,marginTop:2},children:u.monthlyRental})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:{fontSize:10,opacity:.6},children:"Annualized ROI Yield"}),r.jsxs("div",{style:{fontWeight:800,fontSize:13,marginTop:2,color:"#22c55e"},children:["~ ",u.roi]})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[r.jsx("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{height:36,background:"#d8232a",color:"#fff",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"Call Now"}),r.jsx(B,{to:`/property/${u.id.replace("snap","p")||""}`,style:{height:36,background:"#fff",color:"#111",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"View Details"})]})]}),r.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto"},className:"scrollbar-hide",children:e.map((S,N)=>r.jsxs("button",{onClick:()=>i(N),style:{flexShrink:0,width:64,height:44,borderRadius:8,overflow:"hidden",border:N===n?"2px solid #d8232a":"1px solid #e5e7eb",opacity:N===n?1:.6,cursor:"pointer",position:"relative",padding:0},children:[r.jsx("img",{src:S.thumbnail||S.image,alt:S.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),N===n&&r.jsx("span",{style:{position:"absolute",inset:0,background:"rgba(216,35,42,.15)",borderRadius:6}})]},S.id))})]}),r.jsxs("div",{style:{textAlign:"center",fontSize:11,opacity:.5,paddingBottom:10},children:["Swipe up/down or use arrow keys • ",g," Snaps • Auto-play • Fully dynamic from Admin"]})]})]}),r.jsx("style",{children:`
        @media(max-width: 960px){
          .snaps-layout{ grid-template-columns: 1fr !important; max-width: 500px !important; }
          .video-box{ max-height: 64vh !important; }
        }
        .scrollbar-hide::-webkit-scrollbar{ display:none; }
        .scrollbar-hide{ -ms-overflow-style:none; scrollbar-width:none; }
      `})]}):r.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"No snaps found. Add via Admin Panel."})}const $n="#D4AF37",Ur="#9A7418";function uy(){const[e,t]=j.useState({name:"",phone:"",email:"",subject:"",message:""}),n=c=>{t({...e,[c.target.name]:c.target.value})},[i,s]=j.useState("idle"),[o,a]=j.useState(""),l=async c=>{var d,h;if(c.preventDefault(),i!=="sending"){a(""),s("sending");try{await ie.post("/enquiries",{name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim(),subject:e.subject,message:e.message.trim(),source:"contact",page:window.location.pathname}),s("sent"),t({name:"",phone:"",email:"",subject:"",message:""})}catch(u){s("idle"),a(((h=(d=u==null?void 0:u.response)==null?void 0:d.data)==null?void 0:h.error)||"Could not send your message right now. Please call us instead.")}}};return r.jsxs("div",{className:"contact-page",children:[r.jsx(Et,{}),r.jsxs("section",{className:"contact-hero",children:[r.jsx("div",{className:"contact-hero-overlay"}),r.jsxs("div",{className:"contact-hero-content",children:[r.jsx("span",{className:"contact-eyebrow",children:"GET IN TOUCH"}),r.jsxs("h1",{children:["Let's Find Your",r.jsx("span",{children:" Dream Property"})]}),r.jsx("p",{children:"Have questions about a property or looking for your next investment? Our property experts are here to help."})]})]}),r.jsx("section",{className:"contact-section",children:r.jsxs("div",{className:"contact-container",children:[r.jsxs("div",{className:"contact-info",children:[r.jsx("span",{className:"section-eyebrow",children:"CONTACT US"}),r.jsxs("h2",{children:["We’re Here To",r.jsx("br",{}),r.jsx("span",{children:"Help You"})]}),r.jsx("p",{className:"contact-intro",children:"Whether you're buying, selling or investing in real estate, our team is ready to assist you with expert guidance and personalized property solutions."}),r.jsxs("div",{className:"info-list",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"})})}),r.jsxs("div",{children:[r.jsx("span",{children:"Call Us"}),r.jsx("a",{href:"tel:9090101401",children:"+91 9090 101 401"})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"m3 7 9 6 9-6"})]})}),r.jsxs("div",{children:[r.jsx("span",{children:"Email Us"}),r.jsx("a",{href:"mailto:brejendra@homwisor.com",children:"brejendra@homwisor.com"}),r.jsx("a",{href:"mailto:birendra.homwisor@gmail.com",children:"birendra.homwisor@gmail.com"})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[r.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}),r.jsxs("div",{children:[r.jsx("span",{children:"Our Office"}),r.jsx("p",{children:"Unit no : 704 , Sohna Road , ILD Trade Centre, Gurugram , Haryana , 122018"})]})]})]}),r.jsxs("a",{href:"https://wa.me/919090101401",target:"_blank",rel:"noopener noreferrer",className:"contact-whatsapp",children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),"Chat With Us On WhatsApp"]})]}),r.jsxs("div",{className:"contact-form-card",children:[r.jsxs("div",{className:"form-heading",children:[r.jsx("span",{children:"SEND US A MESSAGE"}),r.jsxs("h2",{children:["How Can We",r.jsx("strong",{children:" Help You?"})]}),r.jsx("p",{children:"Fill out the form below and our team will get back to you shortly."})]}),r.jsxs("form",{onSubmit:l,children:[r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Your Name"}),r.jsx("input",{type:"text",name:"name",value:e.name,onChange:n,placeholder:"Enter your name",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Phone Number"}),r.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:n,placeholder:"+91 XXXXX XXXXX",required:!0})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Email Address"}),r.jsx("input",{type:"email",name:"email",value:e.email,onChange:n,placeholder:"Enter your email",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"I'm Interested In"}),r.jsxs("select",{name:"subject",value:e.subject,onChange:n,required:!0,children:[r.jsx("option",{value:"",children:"Select an option"}),r.jsx("option",{children:"Buying a Property"}),r.jsx("option",{children:"Selling a Property"}),r.jsx("option",{children:"Property Investment"}),r.jsx("option",{children:"Site Visit"}),r.jsx("option",{children:"General Enquiry"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Message"}),r.jsx("textarea",{name:"message",value:e.message,onChange:n,placeholder:"Tell us how we can help you...",rows:"5"})]}),i==="sent"&&r.jsx("div",{className:"contact-form-note ok",role:"status",children:"✓ Thank you! Your message has been sent — our property expert will contact you shortly."}),o&&r.jsx("div",{className:"contact-form-note err",role:"alert",children:o}),r.jsxs("button",{type:"submit",className:"submit-btn",disabled:i==="sending",children:[i==="sending"?"Sending…":"Send Message",r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m13 6 6 6-6 6"})]})]}),r.jsx("p",{className:"form-note",children:"Your information is completely confidential and will never be shared."})]})]})]})}),r.jsx(Bt,{}),r.jsx("style",{children:`

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

          color: ${$n};

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
          color: ${$n};
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
          color: ${$n};
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
          color: ${Ur};
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
          color: ${Ur};
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
          color: ${Ur};

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
          color: ${Ur};
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
          border-color: ${$n};
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
          background: ${Ur};
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
          color: ${$n};
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

          background: ${$n};
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

      `})]})}const Y=({children:e,...t})=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...t,children:e}),mt={user:e=>r.jsxs(Y,{...e,children:[r.jsx("circle",{cx:"12",cy:"8",r:"4"}),r.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]}),lock:e=>r.jsxs(Y,{...e,children:[r.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),r.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]}),mail:e=>r.jsxs(Y,{...e,children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"m3 7 9 6 9-6"})]}),eye:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"}),r.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),eyeOff:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M10.6 5.1A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-2.4 3.3M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6"}),r.jsx("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"}),r.jsx("path",{d:"m3 3 18 18"})]}),shield:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"}),r.jsx("path",{d:"m9 12 2 2 4-4"})]}),alert:e=>r.jsxs(Y,{...e,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M12 8v5M12 16h.01"})]}),check:e=>r.jsxs(Y,{...e,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"m8 12 3 3 5-6"})]}),clock:e=>r.jsxs(Y,{...e,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M12 7v5l3 2"})]}),users:e=>r.jsxs(Y,{...e,children:[r.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),r.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),r.jsx("path",{d:"M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7"})]}),plus:e=>r.jsx(Y,{...e,children:r.jsx("path",{d:"M12 5v14M5 12h14"})}),key:e=>r.jsxs(Y,{...e,children:[r.jsx("circle",{cx:"8",cy:"15",r:"4"}),r.jsx("path",{d:"m10.8 12.2 8.7-8.7M16 6l3 3M14 8l2 2"})]}),grid:e=>r.jsxs(Y,{...e,children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]}),building:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}),r.jsx("path",{d:"M16 9h2a2 2 0 0 1 2 2v10"}),r.jsx("path",{d:"M3 21h18M8 7h4M8 11h4M8 15h4"})]}),film:e=>r.jsxs(Y,{...e,children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),r.jsx("path",{d:"m10 8.5 5 3.5-5 3.5z"})]}),image:e=>r.jsxs(Y,{...e,children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2.5"}),r.jsx("circle",{cx:"9",cy:"10",r:"2"}),r.jsx("path",{d:"m21 16-5-5-9 9"})]}),pin:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),r.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),gift:e=>r.jsxs(Y,{...e,children:[r.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),r.jsx("path",{d:"M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"}),r.jsx("path",{d:"M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5"})]}),chat:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"}),r.jsx("path",{d:"M8 11h8M8 14.5h5"})]}),logout:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"}),r.jsx("path",{d:"m10 17 5-5-5-5M15 12H4"})]}),external:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M14 4h6v6M20 4l-9 9"}),r.jsx("path",{d:"M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"})]}),refresh:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M20 11a8 8 0 0 0-14.9-3.9L4 8M4 4v4h4"}),r.jsx("path",{d:"M4 13a8 8 0 0 0 14.9 3.9L20 16M20 20v-4h-4"})]}),menu:e=>r.jsx(Y,{...e,children:r.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})}),x:e=>r.jsx(Y,{...e,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),search:e=>r.jsxs(Y,{...e,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"m20 20-3.5-3.5"})]}),arrow:e=>r.jsx(Y,{...e,children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),phone:e=>r.jsx(Y,{...e,children:r.jsx("path",{d:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"})}),whatsapp:e=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",...e,children:r.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),trash:e=>r.jsx(Y,{...e,children:r.jsx("path",{d:"M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"})}),edit:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"}),r.jsx("path",{d:"m14 6 4 4"})]}),star:e=>r.jsx(Y,{...e,children:r.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"})}),trend:e=>r.jsxs(Y,{...e,children:[r.jsx("path",{d:"m3 17 6-6 4 4 8-8"}),r.jsx("path",{d:"M15 7h6v6"})]})},hy=(e="")=>{let t=0;return e.length>=8&&t++,e.length>=12&&t++,/[a-z]/.test(e)&&/[A-Z]/.test(e)&&t++,/\d/.test(e)&&/[^a-z0-9]/i.test(e)&&t++,t},ra=[{label:"Too weak",color:"#ef4444"},{label:"Weak",color:"#f97316"},{label:"Fair",color:"#eab308"},{label:"Good",color:"#84cc16"},{label:"Strong",color:"#22c55e"}];function tv({value:e}){if(!e)return null;const t=hy(e);return r.jsxs("div",{style:{display:"grid",gap:6},children:[r.jsx("div",{className:"hwa-strength",children:r.jsx("i",{style:{width:`${(t+1)*20}%`,background:ra[t].color}})}),r.jsxs("span",{className:"hwa-hint",children:["Strength: ",r.jsx("strong",{style:{color:ra[t].color},children:ra[t].label})]})]})}function py({value:e,onChange:t,placeholder:n="••••••••",autoComplete:i="current-password",invalid:s,id:o,autoFocus:a}){const[l,c]=j.useState(!1);return r.jsxs("div",{className:"hwa-input-wrap",children:[r.jsx(mt.lock,{}),r.jsx("input",{id:o,className:`hwa-input${s?" invalid":""}`,type:l?"text":"password",value:e,onChange:d=>t(d.target.value),placeholder:n,autoComplete:i,autoFocus:a,required:!0}),r.jsx("button",{type:"button",className:"hwa-eye",onClick:()=>c(!l),"aria-label":l?"Hide password":"Show password",children:l?r.jsx(mt.eyeOff,{}):r.jsx(mt.eye,{})})]})}const fy=()=>r.jsx("span",{className:"hwa-spinner","aria-hidden":"true"}),ku=({type:e="error",children:t})=>r.jsxs("div",{className:`hwa-alert ${e}`,role:e==="error"?"alert":"status",children:[e==="success"?r.jsx(mt.check,{}):e==="info"?r.jsx(mt.clock,{}):r.jsx(mt.alert,{}),r.jsx("span",{children:t})]}),my={expired:"Your session expired after 24 hours. Please sign in again.",signedout:"You have been signed out. Please sign in again.",loggedout:"You have signed out successfully."};function gy(){const[e,t]=j.useState({email:"",password:""}),[n,i]=j.useState(""),[s,o]=j.useState(!1),[a]=cc(),l=mn();if(j.useEffect(()=>{al()||Rf()},[]),al())return r.jsx(xr,{to:"/admin/dashboard",replace:!0});const c=my[a.get("session")],d=async h=>{var g,A;h.preventDefault();const u=e.email.trim().toLowerCase();if(!u||!e.password){i("Enter your email and password");return}if(!R2.test(u)){i("Enter a valid email address");return}o(!0),i("");try{const k=await ie.post("/admin/login",{email:u,password:e.password});C2(k.data.token,k.data.admin),l("/admin/dashboard",{replace:!0})}catch(k){i(((A=(g=k.response)==null?void 0:g.data)==null?void 0:A.error)||(k.code==="ECONNABORTED"?"The server took too long to respond. Please try again.":"Could not reach the server. Check your connection and try again.")),t(S=>({...S,password:""}))}finally{o(!1)}};return r.jsxs("div",{className:"hwa hwa-login",children:[r.jsxs("aside",{className:"hwa-login-visual",children:[r.jsx("img",{src:qs,alt:"HomWisor",className:"hwa-login-logo"}),r.jsxs("div",{className:"hwa-login-copy",children:[r.jsx("span",{className:"hwa-eyebrow",children:"Admin Console"}),r.jsxs("h1",{children:["Manage every listing, lead & ",r.jsx("span",{children:"launch"})," in one place."]}),r.jsx("p",{children:"Update properties, banners, offers and snaps — changes go live on HomWisor.com instantly."}),r.jsxs("div",{className:"hwa-login-points",children:[r.jsxs("div",{children:[r.jsx(mt.shield,{})," Secure JWT sessions"]}),r.jsxs("div",{children:[r.jsx(mt.clock,{})," Auto sign-out after 24h"]}),r.jsxs("div",{children:[r.jsx(mt.users,{})," Role-based access"]})]})]})]}),r.jsx("main",{className:"hwa-login-panel",children:r.jsxs("div",{className:"hwa-login-card",children:[r.jsx("img",{src:qs,alt:"HomWisor",className:"hwa-login-mobile-logo"}),r.jsx("h2",{children:"Welcome back"}),r.jsx("p",{className:"hwa-sub",children:"Sign in to the HomWisor admin panel"}),c&&!n&&r.jsx(ku,{type:a.get("session")==="loggedout"?"success":"info",children:c}),n&&r.jsx(ku,{children:n}),r.jsxs("form",{onSubmit:d,noValidate:!0,children:[r.jsxs("div",{className:"hwa-field",children:[r.jsx("label",{htmlFor:"hwa-email",children:"Email address"}),r.jsxs("div",{className:"hwa-input-wrap",children:[r.jsx(mt.mail,{}),r.jsx("input",{id:"hwa-email",type:"email",inputMode:"email",className:"hwa-input",value:e.email,onChange:h=>t({...e,email:h.target.value}),placeholder:"you@homwisor.com",autoComplete:"username",autoCapitalize:"none",spellCheck:!1,autoFocus:!0})]})]}),r.jsxs("div",{className:"hwa-field",children:[r.jsx("label",{htmlFor:"hwa-password",children:"Password"}),r.jsx(py,{id:"hwa-password",value:e.password,onChange:h=>t({...e,password:h}),placeholder:"Enter your password"})]}),r.jsx("button",{type:"submit",className:"hwa-btn hwa-btn-gold",disabled:s,style:{marginTop:8},children:s?r.jsxs(r.Fragment,{children:[r.jsx(fy,{})," Signing in…"]}):"Sign In"})]}),r.jsxs("div",{className:"hwa-login-foot",children:[r.jsx(B,{to:"/",children:"← Back to website"}),r.jsxs("span",{className:"hwa-secure",children:[r.jsx(mt.shield,{})," Authorised staff only"]})]})]})})]})}const yn="#D4AF37",Hr="#9A7418",Su="#F7F5EF";function xy(){const[e,t]=cc(),n=e.get("category")||"All",i=u=>t(u==="All"?{}:{category:u},{replace:!0}),[s,o]=j.useState([]),[a,l]=j.useState("loading");j.useEffect(()=>{let u=!0;return ie.get("/blogs").then(g=>{u&&(o(g.data||[]),l("ok"))}).catch(()=>u&&l("error")),()=>{u=!1}},[]),j.useEffect(()=>yc({title:"Real Estate Insights | HomWisor Blog",description:"Property news, market insights, investment ideas and practical guides for Gurgaon and Delhi NCR.",url:window.location.origin+"/blog"}),[]);const c=j.useMemo(()=>{const u=[...new Set(s.map(g=>g.category).filter(Boolean))];return["All",...ll.filter(g=>u.includes(g)),...u.filter(g=>!ll.includes(g))]},[s]),d=s.find(u=>u.featured)||s[0],h=n==="All"?s:s.filter(u=>u.category===n);return r.jsxs("div",{className:"blog-page",children:[r.jsx(Et,{}),r.jsxs("section",{className:"blog-hero",children:[r.jsx("div",{className:"blog-hero-overlay"}),r.jsxs("div",{className:"blog-container blog-hero-inner",children:[r.jsx("div",{className:"blog-eyebrow",children:"HOMWISOR INSIGHTS"}),r.jsxs("h1",{children:["Real Estate ",r.jsx("span",{children:"Insights."})]}),r.jsx("p",{children:"Stay informed with property news, market insights, investment ideas and practical guides for Gurgaon and Delhi NCR."})]})]}),r.jsxs("main",{children:[r.jsx("section",{className:"blog-section blog-featured",children:r.jsxs("div",{className:"blog-container",children:[r.jsxs("div",{className:"blog-section-head",children:[r.jsxs("div",{children:[r.jsx("div",{className:"blog-eyebrow dark",children:"FEATURED INSIGHT"}),r.jsxs("h2",{children:["What’s happening in ",r.jsx("span",{children:"NCR real estate."})]})]}),r.jsxs("a",{href:"#all-articles",className:"blog-view-link",children:["View All Articles ",r.jsx("span",{children:"↗"})]})]}),a==="loading"&&r.jsxs("div",{className:"blog-state",children:[r.jsx("span",{className:"blog-spin"})," Loading articles…"]}),a==="error"&&r.jsx("div",{className:"blog-state",children:"Articles could not be loaded right now. Please refresh the page."}),a==="ok"&&!d&&r.jsx("div",{className:"blog-state",children:"New articles are coming soon."}),d&&r.jsxs("article",{className:"featured-card",children:[r.jsxs(B,{to:Qt(d),className:"featured-image",children:[r.jsx("img",{src:d.image,alt:d.title}),r.jsx("span",{children:d.category})]}),r.jsxs("div",{className:"featured-content",children:[r.jsx("small",{children:cl(d.publishedAt)}),r.jsx("h3",{children:d.title}),r.jsx("p",{children:d.excerpt}),r.jsxs(B,{to:Qt(d),children:["Read Article ",r.jsx("span",{children:"→"})]})]})]})]})}),r.jsx("section",{className:"blog-section blog-all",id:"all-articles",children:r.jsxs("div",{className:"blog-container",children:[r.jsx("div",{className:"blog-section-head compact",children:r.jsxs("div",{children:[r.jsx("div",{className:"blog-eyebrow dark",children:"LATEST ARTICLES"}),r.jsxs("h2",{children:["Explore our ",r.jsx("span",{children:"latest stories."})]})]})}),s.length>0&&r.jsx("div",{className:"category-row",children:c.map(u=>r.jsx("button",{className:n===u?"active":"",onClick:()=>i(u),children:u},u))}),a==="ok"&&s.length>0&&h.length===0&&r.jsxs("div",{className:"blog-state",children:["No articles in “",n,"” yet. ",r.jsx("button",{type:"button",onClick:()=>i("All"),children:"Show all articles"})]}),r.jsx("div",{className:"blog-grid",children:h.map(u=>{const g=u.slug;return r.jsxs("article",{className:"blog-card",children:[r.jsxs(B,{to:Qt(g),className:"blog-card-image",children:[r.jsx("img",{src:u.image,alt:u.title}),r.jsx("span",{children:u.category})]}),r.jsxs("div",{className:"blog-card-content",children:[r.jsx("small",{children:cl(u.publishedAt)}),r.jsx("h3",{children:u.title}),r.jsx("p",{children:u.excerpt}),r.jsxs(B,{to:Qt(g),children:["Read Article ",r.jsx("span",{children:"→"})]})]})]},u.id||u.slug)})})]})}),r.jsx("section",{className:"blog-newsletter",children:r.jsxs("div",{className:"blog-container newsletter-inner",children:[r.jsxs("div",{children:[r.jsx("div",{className:"blog-eyebrow",children:"STAY UPDATED"}),r.jsx("h2",{children:"Get smarter property insights."}),r.jsx("p",{children:"Follow Homwisor for useful real estate news, property guides and market updates."})]}),r.jsx(B,{to:"/contact/",className:"blog-btn",children:"Talk to an Expert"})]})})]}),r.jsx(Bt,{}),r.jsx("style",{children:`
        .blog-state { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 160px; padding: 30px 16px; border: 1px dashed #e2dccb; border-radius: 18px; background: #fff; color: #6b6450; font-size: 14px; font-weight: 600; text-align: center; flex-wrap: wrap; }
        .blog-state button { border: none; background: none; color: ${Hr}; font: inherit; font-weight: 800; cursor: pointer; text-decoration: underline; }
        .blog-spin { width: 20px; height: 20px; border: 2.5px solid #eee4c4; border-top-color: ${yn}; border-radius: 50%; animation: blog-spin .7s linear infinite; }
        @keyframes blog-spin { to { transform: rotate(360deg); } }
        a.featured-image { display: block; }
        * {
          box-sizing: border-box;
        }

        .blog-page {
          min-height: 100vh;
          background: ${Su};
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
          color: ${yn};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .blog-eyebrow.dark {
          color: ${Hr};
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
          color: ${yn};
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
          border-bottom: 1px solid ${yn};
          padding-bottom: 6px;
        }

        .blog-view-link span {
          color: ${Hr};
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
          color: ${yn};
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
          color: ${Hr};
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
          color: ${Hr};
          margin-left: 5px;
        }

        .blog-all {
          background: ${Su};
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
          color: ${yn};
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
          background: ${yn};
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
      `})]})}const Eu=(e,t)=>`s${t+1}-${String(e||"section").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,50)}`,vn=(e,t="")=>String(e).split(/(\*\*[^*]+\*\*)/g).map((n,i)=>/^\*\*[^*]+\*\*$/.test(n)?r.jsx("strong",{children:n.slice(2,-2)},t+i):n);function wy(e=""){return String(e).replace(/\r\n/g,`
`).split(/\n\s*\n/).map(t=>{const n=t.split(`
`).map(i=>i.trim()).filter(Boolean);if(!n.length)return null;if(n.every(i=>/^[-•*]\s+/.test(i)))return{type:"ul",items:n.map(i=>i.replace(/^[-•*]\s+/,""))};if(n.every(i=>/^\d+[.)]\s+/.test(i)))return{type:"steps",items:n.map(i=>{const s=i.replace(/^\d+[.)]\s+/,""),o=s.match(/^(.+?)\s+[—–-]\s+(.+)$/);return o?{title:o[1],text:o[2]}:{title:s,text:""}})};if(n.every(i=>i.startsWith(">"))){const i=n.map(o=>o.replace(/^>\s?/,"")).join(" "),s=i.match(/^([A-Za-z][\w\s]{1,24}):\s+(.+)$/);return{type:"note",label:s?s[1]:"Good to know",text:s?s[2]:i}}if(n.length>=2&&n.every(i=>i.includes("|"))){const i=n.filter(s=>!/^\|?\s*:?-{2,}/.test(s)).map(s=>s.replace(/^\||\|$/g,"").split("|").map(o=>o.trim()));return{type:"table",head:i[0],rows:i.slice(1)}}return{type:"p",text:n.join(" ")}}).filter(Boolean)}function yy({text:e}){return wy(e).map((t,n)=>t.type==="ul"?r.jsx("ul",{className:"bd-ul",children:t.items.map((i,s)=>r.jsx("li",{children:vn(i,s)},s))},n):t.type==="steps"?r.jsx("ol",{className:"bd-steps",children:t.items.map((i,s)=>r.jsxs("li",{children:[r.jsx("span",{className:"bd-step-no",children:s+1}),r.jsxs("div",{children:[r.jsx("strong",{children:vn(i.title)}),i.text&&r.jsx("p",{children:vn(i.text)})]})]},s))},n):t.type==="note"?r.jsxs("aside",{className:"bd-note",children:[r.jsx("small",{children:t.label}),r.jsx("p",{children:vn(t.text)})]},n):t.type==="table"?r.jsx("div",{className:"bd-table-wrap",children:r.jsxs("table",{className:"bd-table",children:[r.jsx("thead",{children:r.jsx("tr",{children:t.head.map((i,s)=>r.jsx("th",{children:vn(i)},s))})}),r.jsx("tbody",{children:t.rows.map((i,s)=>r.jsx("tr",{children:t.head.map((o,a)=>r.jsx("td",{children:vn(i[a]||"")},a))},s))})]})},n):r.jsx("p",{children:vn(t.text)},n))}function vy({title:e}){const[t,n]=j.useState(!1),i=typeof window<"u"?window.location.href:"",s=encodeURIComponent,o=[["WhatsApp",`https://wa.me/?text=${s(`${e} ${i}`)}`],["Facebook",`https://www.facebook.com/sharer/sharer.php?u=${s(i)}`],["LinkedIn",`https://www.linkedin.com/sharing/share-offsite/?url=${s(i)}`],["X",`https://twitter.com/intent/tweet?text=${s(e)}&url=${s(i)}`]],a=async()=>{try{await navigator.clipboard.writeText(i),n(!0),setTimeout(()=>n(!1),1800)}catch{}};return r.jsxs("div",{className:"bd-share",children:[r.jsx("span",{className:"bd-share-label",children:"SHARE"}),o.map(([l,c])=>r.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:l==="X"?"round":"","aria-label":`Share on ${l}`,children:l},l)),r.jsx("a",{className:"round",href:`mailto:?subject=${s(e)}&body=${s(i)}`,"aria-label":"Share by email",children:r.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"m3 7 9 6 9-6"})]})}),r.jsx("button",{type:"button",className:"round",onClick:a,"aria-label":"Copy link",title:t?"Link copied":"Copy link",children:t?r.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{d:"m5 12 5 5 9-10"})}):r.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[r.jsx("path",{d:"M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"}),r.jsx("path",{d:"M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"})]})})]})}function by({post:e}){const[t,n]=j.useState({name:"",phone:""}),[i,s]=j.useState("idle"),[o,a]=j.useState(""),l=async c=>{if(c.preventDefault(),t.name.trim().length<2)return a("Please enter your name");if(!/^\+?[\d\s-]{10,15}$/.test(t.phone.trim()))return a("Please enter a valid 10-digit mobile number");a(""),s("sending");try{await ie.post("/enquiries",{name:t.name.trim(),phone:t.phone.trim(),email:"",property:`Blog: ${e.title}`,message:"Call back request from a blog article",source:"blog",page:window.location.pathname}),s("sent")}catch{s("idle"),a("Could not send right now. Please try again.")}};return r.jsxs("div",{className:"bd-advisor",children:[r.jsx("small",{children:"TALK TO AN ADVISOR"}),r.jsx("h3",{children:"Planning your next property?"}),r.jsx("p",{children:"Leave your number and a HomWisor advisor will call you back with current prices and floor plans."}),i==="sent"?r.jsxs("div",{className:"bd-advisor-done",children:["✓ Thank you, ",t.name.split(" ")[0],"! We'll call you shortly."]}):r.jsxs("form",{onSubmit:l,noValidate:!0,children:[r.jsxs("label",{children:["Full name",r.jsx("input",{value:t.name,onChange:c=>n({...t,name:c.target.value}),placeholder:"Your name",autoComplete:"name"})]}),r.jsxs("label",{children:["Mobile number",r.jsx("input",{value:t.phone,onChange:c=>n({...t,phone:c.target.value}),placeholder:"10-digit mobile number",inputMode:"tel",autoComplete:"tel"})]}),o&&r.jsx("div",{className:"bd-advisor-err",children:o}),r.jsx("button",{type:"submit",disabled:i==="sending",children:i==="sending"?"Sending…":"Request a call back"}),r.jsx("span",{className:"bd-advisor-fine",children:"By submitting, you agree to be contacted by HomWisor about this enquiry."})]})]})}function jy(){var f,p;const{slug:e}=mo(),t=mn(),[n,i]=j.useState(null),[s,o]=j.useState([]),[a,l]=j.useState("loading"),[c,d]=j.useState("");j.useEffect(()=>{if(n&&n.slug===e)return;let m=!0;return l("loading"),window.scrollTo(0,0),ie.get(`/blogs/${encodeURIComponent(e)}`).then(v=>{var b;m&&(i(v.data),l("ok"),(b=v.data)!=null&&b.slug&&v.data.slug!==e&&t(Qt(v.data),{replace:!0}))}).catch(()=>m&&l("missing")),ie.get("/blogs").then(v=>m&&o(v.data||[])).catch(()=>{}),()=>{m=!1}},[e]),j.useEffect(()=>{var m,v;if(n)return yc({title:((m=n.seoTitle)==null?void 0:m.trim())||`${n.title} | HomWisor`,description:((v=n.seoDescription)==null?void 0:v.trim())||n.excerpt||"",image:n.image,url:window.location.origin+Qt(n),type:"article"})},[n]);const h=j.useMemo(()=>{if(!(n!=null&&n.body))return null;const v=new DOMParser().parseFromString(`<div>${n.body}</div>`,"text/html").body.firstElementChild,b=[...v.querySelectorAll("h2")].filter(P=>P.textContent.trim());return b.forEach((P,w)=>{P.id=Eu(P.textContent.trim(),w)}),v.querySelectorAll("img").forEach(P=>P.setAttribute("loading","lazy")),v.querySelectorAll("span.ql-ui, span:empty").forEach(P=>P.remove()),{html:v.innerHTML,toc:b.map(P=>({heading:P.textContent.trim(),anchor:P.id}))}},[n]),u=j.useMemo(()=>(n!=null&&n.body?[]:(n==null?void 0:n.content)||[]).map((m,v)=>({...m,anchor:Eu(m.heading,v)})),[n]),g=h?h.toc:u.filter(m=>m.heading);if(j.useEffect(()=>{if(a!=="ok")return;const m=new IntersectionObserver(v=>v.forEach(b=>b.isIntersecting&&d(b.target.id)),{rootMargin:"-30% 0px -60% 0px"});return g.forEach(v=>{const b=document.getElementById(v.anchor);b&&m.observe(b)}),()=>m.disconnect()},[a,g]),a==="loading")return r.jsxs("div",{className:"bd-page",children:[r.jsx(Et,{}),r.jsxs("main",{className:"bd-state",children:[r.jsx("span",{className:"bd-spin"})," Loading article…"]})]});if(!n)return r.jsxs("div",{className:"bd-page",children:[r.jsx(Et,{}),r.jsx("main",{className:"bd-state",children:r.jsxs("div",{children:[r.jsx("span",{className:"bd-pill",children:"HOMWISOR INSIGHTS"}),r.jsx("h1",{children:"Page Not Found"}),r.jsx("p",{children:"The page you are looking for does not exist or may have been moved."}),r.jsx(B,{to:"/blog",className:"bd-back",children:"← Back to Blog"})]})}),r.jsx(Bt,{})]});const A=s.filter(m=>m.slug!==n.slug),k=[...A.filter(m=>m.category===n.category),...A.filter(m=>m.category!==n.category)].slice(0,3),S=n.author||"HomWisor Insights",N=(m,v)=>{m.preventDefault();const b=document.getElementById(v);b&&window.scrollTo({top:b.getBoundingClientRect().top+window.scrollY-96,behavior:"smooth"})};return r.jsxs("div",{className:"bd-page",children:[r.jsx(Et,{}),r.jsxs("main",{className:"bd-wrap",children:[r.jsxs("header",{className:"bd-head",children:[r.jsx(B,{to:`/blog?category=${encodeURIComponent(n.category||"")}`,className:"bd-pill",children:(n.category||"Insights").toUpperCase()}),r.jsx("h1",{children:n.title}),n.excerpt&&r.jsx("p",{className:"bd-dek",children:n.excerpt})]}),r.jsxs("div",{className:"bd-byline",children:[r.jsxs("div",{className:"bd-author",children:[r.jsx("span",{className:"bd-avatar",children:((f=S.trim()[0])==null?void 0:f.toUpperCase())||"H"}),r.jsxs("div",{children:[r.jsxs("span",{children:["By ",r.jsx("strong",{children:S})]}),r.jsxs("small",{children:[cl(n.publishedAt).replace(/^(\w)(\w+)/,(m,v,b)=>v+b.toLowerCase()),r.jsx("i",{children:"•"}),M2(n)," min read"]})]})]}),r.jsx(vy,{title:n.title})]}),n.image&&r.jsx("figure",{className:"bd-banner",children:r.jsx("img",{src:n.image,alt:n.title})}),r.jsxs("div",{className:"bd-layout",children:[r.jsxs("article",{className:"bd-article",children:[h&&r.jsx("div",{className:"bd-body",dangerouslySetInnerHTML:{__html:h.html}}),u.map((m,v)=>r.jsxs("section",{id:m.anchor,className:"bd-section",children:[m.heading&&r.jsx("h2",{children:m.heading}),r.jsx("div",{className:v===0?"bd-text bd-lead":"bd-text",children:r.jsx(yy,{text:m.text})}),m.image&&r.jsx("figure",{className:"bd-figure",children:r.jsx("img",{src:m.image,alt:m.heading||n.title,loading:"lazy"})})]},m.anchor)),((p=n.tags)==null?void 0:p.length)>0&&r.jsx("div",{className:"bd-tags",children:n.tags.map(m=>r.jsxs("span",{children:["#",m]},m))}),r.jsx("p",{className:"bd-fine",children:"*Prices and details are as advertised and subject to change. Confirm current prices, plans and approvals with the developer before you book."})]}),r.jsxs("aside",{className:"bd-side",children:[g.length>1&&r.jsxs("nav",{className:"bd-toc","aria-label":"In this guide",children:[r.jsx("small",{children:"IN THIS GUIDE"}),r.jsx("ol",{children:g.map((m,v)=>r.jsx("li",{className:c===m.anchor?"on":"",children:r.jsxs("a",{href:`#${m.anchor}`,onClick:b=>N(b,m.anchor),children:[r.jsx("b",{children:v+1}),m.heading]})},m.anchor))})]}),r.jsx(by,{post:n})]})]}),k.length>0&&r.jsxs("section",{className:"bd-more",children:[r.jsxs("div",{className:"bd-more-head",children:[r.jsx("h2",{children:"Keep reading"}),r.jsxs(B,{to:"/blog",children:["All articles ",r.jsx("span",{children:"→"})]})]}),r.jsx("div",{className:"bd-more-grid",children:k.map(m=>r.jsxs(B,{to:Qt(m),className:"bd-card",children:[r.jsx("span",{className:"bd-card-img",children:r.jsx("img",{src:m.image,alt:"",loading:"lazy"})}),r.jsx("small",{children:(m.category||"").toUpperCase()}),r.jsx("strong",{children:m.title})]},m.id||m.slug))})]})]}),r.jsx(Bt,{})]})}const ts="#D4AF37",ia="#9A7418",sa="#F7F5EF";function Ay(){return r.jsxs("div",{className:"privacy-page",children:[r.jsx(Et,{}),r.jsxs("section",{className:"privacy-hero",children:[r.jsx("div",{className:"privacy-hero-overlay"}),r.jsxs("div",{className:"privacy-hero-content",children:[r.jsx("span",{className:"privacy-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),r.jsxs("h1",{children:["Privacy ",r.jsx("span",{children:"Policy."})]}),r.jsx("p",{children:"Your privacy matters to us. Learn how Homwisor collects, uses, protects and manages information when you interact with our website and real estate services."})]})]}),r.jsx("main",{className:"privacy-main",children:r.jsxs("div",{className:"privacy-layout",children:[r.jsx("aside",{className:"privacy-sidebar",children:r.jsxs("div",{className:"privacy-sidebar-card",children:[r.jsx("span",{children:"ON THIS PAGE"}),r.jsx("a",{href:"#introduction",children:"Introduction"}),r.jsx("a",{href:"#information",children:"Information We Collect"}),r.jsx("a",{href:"#use",children:"How We Use Information"}),r.jsx("a",{href:"#sharing",children:"Information Sharing"}),r.jsx("a",{href:"#cookies",children:"Cookies & Tracking"}),r.jsx("a",{href:"#security",children:"Data Security"}),r.jsx("a",{href:"#rights",children:"Your Rights"}),r.jsx("a",{href:"#third-party",children:"Third-Party Links"}),r.jsx("a",{href:"#children",children:"Children's Privacy"}),r.jsx("a",{href:"#changes",children:"Policy Changes"}),r.jsx("a",{href:"#contact",children:"Contact Us"})]})}),r.jsxs("article",{className:"privacy-content",children:[r.jsxs("div",{className:"policy-intro",id:"introduction",children:[r.jsx("span",{className:"section-label",children:"PRIVACY & DATA"}),r.jsx("h2",{children:"Privacy Policy"}),r.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),r.jsx("p",{children:'Homwisor Consultants Pvt. Ltd. ("Homwisor", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how information may be collected, used, stored and disclosed when you visit our website, submit an enquiry, request a property consultation, or otherwise interact with our services.'})]}),r.jsxs("section",{id:"information",children:[r.jsx("h3",{children:"1. Information We Collect"}),r.jsx("p",{children:"Depending on how you interact with Homwisor, we may collect information that you voluntarily provide, including your name, phone number, email address, property requirements, location preferences, budget information and messages or enquiries submitted through our forms."}),r.jsx("p",{children:"We may also receive basic technical information such as browser type, device information, IP address, referring pages, pages visited and general website usage information."})]}),r.jsxs("section",{id:"use",children:[r.jsx("h3",{children:"2. How We Use Your Information"}),r.jsx("p",{children:"We may use the information we collect to:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Respond to property enquiries and requests."}),r.jsx("li",{children:"Provide property recommendations and consultation."}),r.jsx("li",{children:"Arrange site visits, callbacks or other requested services."}),r.jsx("li",{children:"Communicate with you about properties, services and enquiries."}),r.jsx("li",{children:"Improve our website, services and customer experience."}),r.jsx("li",{children:"Maintain website security and prevent misuse or fraud."}),r.jsx("li",{children:"Comply with applicable legal and regulatory requirements."})]})]}),r.jsxs("section",{id:"sharing",children:[r.jsx("h3",{children:"3. Information Sharing & Disclosure"}),r.jsx("p",{children:"Homwisor does not sell personal information as a business practice. Information may be shared when reasonably required to provide a service you have requested, operate our website, work with relevant service providers, protect our legal interests, or comply with applicable law."}),r.jsx("p",{children:"Where a property enquiry requires communication with a developer, property owner, service provider or other relevant party, we may share the information necessary to respond to that enquiry."})]}),r.jsxs("section",{id:"cookies",children:[r.jsx("h3",{children:"4. Cookies & Tracking Technologies"}),r.jsx("p",{children:"Our website may use cookies and similar technologies to remember preferences, understand website usage, measure performance and improve the user experience."}),r.jsx("p",{children:"You can control or disable cookies through your browser settings. Some website functionality may be affected when cookies are disabled."})]}),r.jsxs("section",{id:"security",children:[r.jsx("h3",{children:"5. Data Security"}),r.jsx("p",{children:"We take reasonable administrative, technical and organizational measures to protect personal information from unauthorized access, misuse, alteration or disclosure."}),r.jsx("p",{children:"However, no method of transmission or electronic storage can be guaranteed to be completely secure. You should therefore avoid sending highly sensitive information through ordinary website forms unless specifically requested through a secure channel."})]}),r.jsxs("section",{id:"rights",children:[r.jsx("h3",{children:"6. Your Privacy Rights"}),r.jsx("p",{children:"Subject to applicable law, you may request access to, correction of, or deletion of personal information that we hold about you. You may also ask us to stop or limit certain communications."}),r.jsx("p",{children:"To make a privacy-related request, contact us using the details provided below. We may need to verify your identity before completing a request."})]}),r.jsxs("section",{id:"third-party",children:[r.jsx("h3",{children:"7. Third-Party Websites & Services"}),r.jsx("p",{children:"Our website may contain links to third-party websites, platforms or services. Those third parties operate under their own privacy policies and terms. Homwisor is not responsible for the privacy practices or content of external websites."})]}),r.jsxs("section",{id:"children",children:[r.jsx("h3",{children:"8. Children's Privacy"}),r.jsx("p",{children:"Our services are intended for adults and property-related users. We do not knowingly request personal information from children for the purpose of providing real estate services."})]}),r.jsxs("section",{id:"retention",children:[r.jsx("h3",{children:"9. Data Retention"}),r.jsx("p",{children:"We retain personal information for as long as reasonably necessary for the purposes described in this policy, to provide requested services, maintain business records, resolve disputes and meet applicable legal obligations."})]}),r.jsxs("section",{id:"changes",children:[r.jsx("h3",{children:"10. Changes to This Privacy Policy"}),r.jsx("p",{children:'We may update this Privacy Policy from time to time to reflect changes to our services, website, legal requirements or privacy practices. The updated version will be published on this page with a revised "Last updated" date.'})]}),r.jsxs("section",{id:"contact",className:"privacy-contact-box",children:[r.jsx("span",{className:"section-label",children:"CONTACT US"}),r.jsx("h3",{children:"Questions about your privacy?"}),r.jsx("p",{children:"If you have questions, requests or concerns regarding this Privacy Policy or the way your information is handled, please contact Homwisor."}),r.jsxs("div",{className:"privacy-contact-grid",children:[r.jsxs("a",{href:"mailto:info@homwisor.com",children:[r.jsx("small",{children:"EMAIL"}),"info@homwisor.com"]}),r.jsxs("a",{href:"tel:8500900100",children:[r.jsx("small",{children:"PHONE"}),"+91 8500 900 100"]}),r.jsxs("div",{children:[r.jsx("small",{children:"OFFICE"}),"Gurugram, Haryana, India"]})]})]}),r.jsxs("div",{className:"privacy-note",children:[r.jsx("strong",{children:"Important:"})," This page is a website privacy policy template for Homwisor and should be reviewed and finalized according to the company's actual data practices, third-party tools, consent mechanisms and applicable laws."]})]})]})}),r.jsx(Bt,{}),r.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .privacy-page {
          min-height: 100vh;
          background: ${sa};
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
          color: ${ts};
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
          color: ${ts};
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
          background: ${sa};
        }

        .privacy-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${ia};
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
          color: ${ia};
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
          background: ${sa};
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
          border-color: ${ts};
        }

        .privacy-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${ia};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .privacy-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${ts};
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
      `})]})}const ns="#D4AF37",rs="#9A7418",oa="#F7F5EF";function ky(){return r.jsxs("div",{className:"terms-page",children:[r.jsx(Et,{}),r.jsxs("section",{className:"terms-hero",children:[r.jsx("div",{className:"terms-hero-overlay"}),r.jsxs("div",{className:"terms-hero-content",children:[r.jsx("span",{className:"terms-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),r.jsxs("h1",{children:["Terms & ",r.jsx("span",{children:"Conditions."})]}),r.jsx("p",{children:"Please read these terms carefully before using the Homwisor website, property listings, enquiry services and real estate consultation services."})]})]}),r.jsx("main",{className:"terms-main",children:r.jsxs("div",{className:"terms-layout",children:[r.jsx("aside",{className:"terms-sidebar",children:r.jsxs("div",{className:"terms-sidebar-card",children:[r.jsx("span",{children:"ON THIS PAGE"}),r.jsx("a",{href:"#acceptance",children:"Acceptance of Terms"}),r.jsx("a",{href:"#about",children:"About Homwisor"}),r.jsx("a",{href:"#use",children:"Use of Website"}),r.jsx("a",{href:"#listings",children:"Property Listings"}),r.jsx("a",{href:"#enquiries",children:"Enquiries & Communication"}),r.jsx("a",{href:"#accuracy",children:"Information Accuracy"}),r.jsx("a",{href:"#transactions",children:"Property Transactions"}),r.jsx("a",{href:"#intellectual",children:"Intellectual Property"}),r.jsx("a",{href:"#third-party",children:"Third-Party Services"}),r.jsx("a",{href:"#liability",children:"Limitation of Liability"}),r.jsx("a",{href:"#privacy",children:"Privacy"}),r.jsx("a",{href:"#changes",children:"Changes to Terms"}),r.jsx("a",{href:"#contact",children:"Contact Us"})]})}),r.jsxs("article",{className:"terms-content",children:[r.jsxs("div",{className:"terms-intro",id:"acceptance",children:[r.jsx("span",{className:"section-label",children:"LEGAL INFORMATION"}),r.jsx("h2",{children:"Terms & Conditions"}),r.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),r.jsx("p",{children:'These Terms and Conditions ("Terms") govern your access to and use of the Homwisor website and related services operated by Homwisor Consultant Private Limited ("Homwisor", "we", "us", or "our").'}),r.jsx("p",{children:"By accessing or using this website, submitting an enquiry, requesting a property consultation, contacting our team, or otherwise using our services, you acknowledge that you have read and understood these Terms and agree to be bound by them."})]}),r.jsxs("section",{id:"about",children:[r.jsx("h3",{children:"1. About Homwisor"}),r.jsx("p",{children:"Homwisor is a Gurugram-based real estate platform and agency that helps property buyers, sellers, tenants and landlords connect and transact with greater confidence. Our services include property search and listings, buyer and seller facilitation, market guidance and real estate advisory."}),r.jsx("p",{children:"Homwisor's public company information states that the business operates as Homwisor Consultant Private Limited and is registered as a real estate agent with the Haryana Real Estate Regulatory Authority (HARERA), Gurugram."})]}),r.jsxs("section",{id:"use",children:[r.jsx("h3",{children:"2. Use of the Website"}),r.jsx("p",{children:"You agree to use the website only for lawful purposes and in a manner that does not interfere with the operation, security, availability or integrity of the website."}),r.jsxs("ul",{children:[r.jsx("li",{children:"You must provide accurate information when submitting forms or enquiries."}),r.jsx("li",{children:"You must not use the website for fraudulent, misleading or unlawful activities."}),r.jsx("li",{children:"You must not attempt to gain unauthorized access to any system, account, database or website functionality."}),r.jsx("li",{children:"You must not copy, scrape, reproduce or commercially exploit website content without permission."})]})]}),r.jsxs("section",{id:"listings",children:[r.jsx("h3",{children:"3. Property Listings & Information"}),r.jsx("p",{children:"Property listings may include information such as project names, locations, prices, sizes, configurations, availability, amenities, photographs and other property-related details."}),r.jsx("p",{children:"Property information may be supplied or updated by developers, owners, agents or other relevant sources. Prices, availability, specifications, offers and other project details may change without prior notice."}),r.jsx("p",{children:"A listing or enquiry on Homwisor does not by itself constitute an offer, reservation, allotment, sale agreement or guarantee of availability."})]}),r.jsxs("section",{id:"enquiries",children:[r.jsx("h3",{children:"4. Property Enquiries & Communication"}),r.jsx("p",{children:"When you submit an enquiry, you authorize Homwisor and relevant property or service representatives to contact you regarding the enquiry through phone, email, WhatsApp or other appropriate communication channels."}),r.jsx("p",{children:"You are responsible for ensuring that the contact information provided by you is correct and belongs to you or that you are otherwise authorized to provide it."})]}),r.jsxs("section",{id:"accuracy",children:[r.jsx("h3",{children:"5. Accuracy of Information"}),r.jsx("p",{children:"Homwisor aims to provide useful and current property information, but information on the website may contain errors, omissions, outdated details or information supplied by third parties."}),r.jsx("p",{children:"Users should independently verify material information, including title, approvals, RERA registration, pricing, availability, specifications, payment schedules, possession timelines and other transaction-related details before making a decision."})]}),r.jsxs("section",{id:"transactions",children:[r.jsx("h3",{children:"6. Property Transactions"}),r.jsx("p",{children:"Homwisor may facilitate introductions, property visits, communication and other real estate assistance. Unless expressly agreed otherwise in writing, Homwisor is not the seller, developer, owner or legal representative of every property displayed on the website."}),r.jsx("p",{children:"Any purchase, sale, lease, booking, allotment or other property transaction is subject to separate documentation and agreements between the relevant parties."}),r.jsx("p",{children:"Users should obtain independent legal, financial and tax advice where appropriate before entering into a property transaction."})]}),r.jsxs("section",{id:"rera",children:[r.jsx("h3",{children:"7. Regulatory & RERA Information"}),r.jsx("p",{children:"Homwisor's public company information identifies the business as a HARERA-registered real estate agent and states that it facilitates transactions in accordance with the Real Estate (Regulation and Development) Act, 2016 and applicable Haryana rules."}),r.jsx("p",{children:"Users should independently verify the current registration status and the RERA registration of any relevant real estate project before proceeding with a transaction."})]}),r.jsxs("section",{id:"intellectual",children:[r.jsx("h3",{children:"8. Intellectual Property"}),r.jsx("p",{children:"Unless otherwise stated, the website's design, branding, logos, text, graphics, photographs, layout, software and other original materials are owned by or licensed to Homwisor."}),r.jsx("p",{children:"You may view and use the website for personal and legitimate property-related purposes. You may not reproduce, distribute, modify, publish, sell or commercially exploit website materials without prior written permission."})]}),r.jsxs("section",{id:"third-party",children:[r.jsx("h3",{children:"9. Third-Party Websites & Services"}),r.jsx("p",{children:"The website may contain links, integrations or references to third-party websites, developers, property owners, service providers, payment providers, maps, social platforms or other external services."}),r.jsx("p",{children:"Third-party services are governed by their own terms and policies. Homwisor is not responsible for the independent operation, availability, content or privacy practices of third-party websites and services."})]}),r.jsxs("section",{id:"liability",children:[r.jsx("h3",{children:"10. Disclaimer & Limitation of Liability"}),r.jsx("p",{children:"The website and its information are provided for general property-search, information and consultation purposes. Homwisor does not guarantee that the website or every piece of information will always be complete, current, uninterrupted or error-free."}),r.jsx("p",{children:"To the extent permitted by applicable law, Homwisor will not be responsible for losses arising solely from reliance on unverified property information, third-party information, changes in property availability or pricing, transaction decisions, website interruptions, or events beyond its reasonable control."})]}),r.jsxs("section",{id:"privacy",children:[r.jsx("h3",{children:"11. Privacy"}),r.jsxs("p",{children:["Your use of the website may involve the collection and processing of personal information. Please review our",r.jsxs("a",{className:"inline-link",href:"/privacy-policy",children:[" ","Privacy Policy"]})," ","for information about how personal data may be collected, used, stored and handled."]})]}),r.jsxs("section",{id:"changes",children:[r.jsx("h3",{children:"12. Changes to These Terms"}),r.jsx("p",{children:"Homwisor may update these Terms from time to time to reflect changes to the website, services, business practices or applicable legal requirements."}),r.jsx("p",{children:'Updated Terms will be published on this page with a revised "Last updated" date. Your continued use of the website after an update constitutes acceptance of the revised Terms to the extent permitted by applicable law.'})]}),r.jsxs("section",{id:"contact",className:"terms-contact-box",children:[r.jsx("span",{className:"section-label",children:"CONTACT US"}),r.jsx("h3",{children:"Questions about these Terms?"}),r.jsx("p",{children:"If you have questions about these Terms and Conditions or Homwisor's services, please contact the company using the information below."}),r.jsxs("div",{className:"terms-contact-grid",children:[r.jsxs("a",{href:"mailto:homwisor@gmail.com",children:[r.jsx("small",{children:"EMAIL"}),"homwisor@gmail.com"]}),r.jsxs("a",{href:"tel:9090101401",children:[r.jsx("small",{children:"PHONE"}),"+91 9090 101 401"]}),r.jsxs("div",{children:[r.jsx("small",{children:"REGISTERED OFFICE"}),"Unit No. 704, 7th Floor, ILD Trade Centre, Sohna Road, Village Tikri, Sector-47, Gurugram, Haryana – 122018"]})]})]}),r.jsxs("div",{className:"terms-note",children:[r.jsx("strong",{children:"Important:"})," This page is a website terms template prepared from Homwisor's publicly available company information and the requested website context. It should be reviewed by the company's legal counsel and aligned with its actual contracts, services, policies and applicable laws before publication."]})]})]})}),r.jsx(Bt,{}),r.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .terms-page {
          min-height: 100vh;
          background: ${oa};
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
          color: ${ns};
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
          color: ${ns};
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
          background: ${oa};
        }

        .terms-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${rs};
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
          color: ${rs};
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
          color: ${rs};
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
          background: ${oa};
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
          border-color: ${ns};
        }

        .terms-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${rs};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .terms-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${ns};
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
      `})]})}const Sy=j.lazy(()=>fx(()=>import("./Dashboard-A0EGjcY1.js"),__vite__mapDeps([0,1])));function bn({param:e,preset:t}){const{slug:n}=mo(),i=new URLSearchParams(t||{});return e&&n&&i.set(e,n),r.jsx(xr,{to:`/search?${i.toString()}`,replace:!0})}function Ey(){const{slug:e}=mo();return r.jsx(xr,{to:Qt(e),replace:!0})}function Ny({children:e}){return al()?e:r.jsx(xr,{to:wc()?"/admin?session=expired":"/admin",replace:!0})}function Cy(){return r.jsx(h1,{children:r.jsxs(i1,{children:[r.jsx(ne,{path:"/",element:r.jsx(pw,{})}),r.jsx(ne,{path:"/about",element:r.jsx(Aw,{})}),r.jsx(ne,{path:"/search",element:r.jsx(Uw,{})}),r.jsx(ne,{path:"/location/:slug",element:r.jsx(bn,{param:"location"})}),r.jsx(ne,{path:"/budget/:slug",element:r.jsx(bn,{param:"budget"})}),r.jsx(ne,{path:"/property-type/:slug",element:r.jsx(bn,{param:"type"})}),r.jsx(ne,{path:"/commercial/:slug",element:r.jsx(bn,{param:"type"})}),r.jsx(ne,{path:"/status/:slug",element:r.jsx(bn,{param:"status"})}),r.jsx(ne,{path:"/residential-projects",element:r.jsx(bn,{preset:{type:"residential"}})}),r.jsx(ne,{path:"/commercial-projects",element:r.jsx(bn,{preset:{type:"commercial"}})}),r.jsx(ne,{path:"/property/:id",element:r.jsx(ay,{})}),r.jsx(ne,{path:"/blog",element:r.jsx(xy,{})}),r.jsx(ne,{path:"/blog/:slug",element:r.jsx(Ey,{})}),r.jsx(ne,{path:"/privacy-policy",element:r.jsx(Ay,{})}),r.jsx(ne,{path:"/terms-and-conditions",element:r.jsx(ky,{})}),r.jsx(ne,{path:"/property-snaps",element:r.jsx(dy,{})}),r.jsx(ne,{path:"/snaps",element:r.jsx(xr,{to:"/property-snaps",replace:!0})}),r.jsx(ne,{path:"/admin",element:r.jsx(gy,{})}),r.jsx(ne,{path:"/admin/dashboard",element:r.jsx(Ny,{children:r.jsx(j.Suspense,{fallback:r.jsx("div",{style:{minHeight:"100vh",background:"#0b0b0b"}}),children:r.jsx(Sy,{})})})}),r.jsx(ne,{path:"/contact",element:r.jsx(uy,{})}),r.jsx(ne,{path:"/:slug",element:r.jsx(jy,{})}),r.jsx(ne,{path:"*",element:r.jsx(xr,{to:"/",replace:!0})})]})})}aa.createRoot(document.getElementById("root")).render(r.jsx(Bu.StrictMode,{children:r.jsx(Cy,{})}));export{ku as A,hu as B,wr as C,Xy as D,R2 as E,mn as F,al as G,Rf as H,mt as I,qs as J,Qy as K,py as P,Bu as R,tv as S,fy as a,ie as b,Xs as c,Ys as d,Jy as e,Ks as f,qr as g,pt as h,ev as i,r as j,_w as k,Sw as l,qw as m,Xw as n,Ry as o,Zy as p,Ff as q,j as r,C2 as s,ll as t,Qt as u,cl as v,T2 as w,M2 as x,O2 as y,N2 as z};
