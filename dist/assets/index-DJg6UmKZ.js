function _f(e,n){for(var r=0;r<n.length;r++){const i=n[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function Gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wu={exports:{}},Ea={},yu={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ns=Symbol.for("react.element"),Vf=Symbol.for("react.portal"),qf=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),Xf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),Jf=Symbol.for("react.suspense"),eg=Symbol.for("react.memo"),tg=Symbol.for("react.lazy"),pd=Symbol.iterator;function ng(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bu=Object.assign,ju={};function qr(e,n,r){this.props=e,this.context=n,this.refs=ju,this.updater=r||vu}qr.prototype.isReactComponent={};qr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Au(){}Au.prototype=qr.prototype;function nc(e,n,r){this.props=e,this.context=n,this.refs=ju,this.updater=r||vu}var rc=nc.prototype=new Au;rc.constructor=nc;bu(rc,qr.prototype);rc.isPureReactComponent=!0;var md=Array.isArray,ku=Object.prototype.hasOwnProperty,ic={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function Su(e,n,r){var i,s={},a=null,o=null;if(n!=null)for(i in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)ku.call(n,i)&&!Nu.hasOwnProperty(i)&&(s[i]=n[i]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];s.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)s[i]===void 0&&(s[i]=l[i]);return{$$typeof:ns,type:e,key:a,ref:o,props:s,_owner:ic.current}}function rg(e,n){return{$$typeof:ns,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ns}function ig(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var fd=/\/+/g;function Qa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ig(""+e.key):n.toString(36)}function zs(e,n,r,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ns:case Vf:o=!0}}if(o)return o=e,s=s(o),e=i===""?"."+Qa(o,0):i,md(s)?(r="",e!=null&&(r=e.replace(fd,"$&/")+"/"),zs(s,n,r,"",function(h){return h})):s!=null&&(sc(s)&&(s=rg(s,r+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(fd,"$&/")+"/")+e)),n.push(s)),1;if(o=0,i=i===""?".":i+":",md(e))for(var l=0;l<e.length;l++){a=e[l];var c=i+Qa(a,l);o+=zs(a,n,r,c,s)}else if(c=ng(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=i+Qa(a,l++),o+=zs(a,n,r,c,s);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function us(e,n,r){if(e==null)return e;var i=[],s=0;return zs(e,i,"","",function(a){return n.call(r,a,s++)}),i}function sg(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Is={transition:null},ag={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Is,ReactCurrentOwner:ic};function Cu(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:us,forEach:function(e,n,r){us(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return us(e,function(){n++}),n},toArray:function(e){return us(e,function(n){return n})||[]},only:function(e){if(!sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=qr;te.Fragment=qf;te.Profiler=Yf;te.PureComponent=nc;te.StrictMode=Kf;te.Suspense=Jf;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ag;te.act=Cu;te.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=bu({},e.props),s=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=ic.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)ku.call(n,c)&&!Nu.hasOwnProperty(c)&&(i[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];i.children=l}return{$$typeof:ns,type:e.type,key:s,ref:a,props:i,_owner:o}};te.createContext=function(e){return e={$$typeof:Qf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xf,_context:e},e.Consumer=e};te.createElement=Su;te.createFactory=function(e){var n=Su.bind(null,e);return n.type=e,n};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:Zf,render:e}};te.isValidElement=sc;te.lazy=function(e){return{$$typeof:tg,_payload:{_status:-1,_result:e},_init:sg}};te.memo=function(e,n){return{$$typeof:eg,type:e,compare:n===void 0?null:n}};te.startTransition=function(e){var n=Is.transition;Is.transition={};try{e()}finally{Is.transition=n}};te.unstable_act=Cu;te.useCallback=function(e,n){return Ve.current.useCallback(e,n)};te.useContext=function(e){return Ve.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};te.useEffect=function(e,n){return Ve.current.useEffect(e,n)};te.useId=function(){return Ve.current.useId()};te.useImperativeHandle=function(e,n,r){return Ve.current.useImperativeHandle(e,n,r)};te.useInsertionEffect=function(e,n){return Ve.current.useInsertionEffect(e,n)};te.useLayoutEffect=function(e,n){return Ve.current.useLayoutEffect(e,n)};te.useMemo=function(e,n){return Ve.current.useMemo(e,n)};te.useReducer=function(e,n,r){return Ve.current.useReducer(e,n,r)};te.useRef=function(e){return Ve.current.useRef(e)};te.useState=function(e){return Ve.current.useState(e)};te.useSyncExternalStore=function(e,n,r){return Ve.current.useSyncExternalStore(e,n,r)};te.useTransition=function(){return Ve.current.useTransition()};te.version="18.3.1";yu.exports=te;var v=yu.exports;const Eu=Gf(v),og=_f({__proto__:null,default:Eu},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg=v,cg=Symbol.for("react.element"),dg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,ug=lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pg={key:!0,ref:!0,__self:!0,__source:!0};function Ru(e,n,r){var i,s={},a=null,o=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(i in n)hg.call(n,i)&&!pg.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)s[i]===void 0&&(s[i]=n[i]);return{$$typeof:cg,type:e,key:a,ref:o,props:s,_owner:ug.current}}Ea.Fragment=dg;Ea.jsx=Ru;Ea.jsxs=Ru;wu.exports=Ea;var t=wu.exports,Vo={},Pu={exports:{}},lt={},Tu={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(D,C){var R=D.length;D.push(C);e:for(;0<R;){var I=R-1>>>1,G=D[I];if(0<s(G,C))D[I]=C,D[R]=G,R=I;else break e}}function r(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var C=D[0],R=D.pop();if(R!==C){D[0]=R;e:for(var I=0,G=D.length,A=G>>>1;I<A;){var U=2*(I+1)-1,ae=D[U],Ne=U+1,ee=D[Ne];if(0>s(ae,R))Ne<G&&0>s(ee,ae)?(D[I]=ee,D[Ne]=R,I=Ne):(D[I]=ae,D[U]=R,I=U);else if(Ne<G&&0>s(ee,R))D[I]=ee,D[Ne]=R,I=Ne;else break e}}return C}function s(D,C){var R=D.sortIndex-C.sortIndex;return R!==0?R:D.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],h=[],d=1,u=null,p=3,g=!1,b=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var C=r(h);C!==null;){if(C.callback===null)i(h);else if(C.startTime<=D)i(h),C.sortIndex=C.expirationTime,n(c,C);else break;C=r(h)}}function N(D){if(k=!1,x(D),!b)if(r(c)!==null)b=!0,_(w);else{var C=r(h);C!==null&&J(N,C.startTime-D)}}function w(D,C){b=!1,k&&(k=!1,f(j),j=-1),g=!0;var R=p;try{for(x(C),u=r(c);u!==null&&(!(u.expirationTime>C)||D&&!O());){var I=u.callback;if(typeof I=="function"){u.callback=null,p=u.priorityLevel;var G=I(u.expirationTime<=C);C=e.unstable_now(),typeof G=="function"?u.callback=G:u===r(c)&&i(c),x(C)}else i(c);u=r(c)}if(u!==null)var A=!0;else{var U=r(h);U!==null&&J(N,U.startTime-C),A=!1}return A}finally{u=null,p=R,g=!1}}var T=!1,y=null,j=-1,L=5,S=-1;function O(){return!(e.unstable_now()-S<L)}function F(){if(y!==null){var D=e.unstable_now();S=D;var C=!0;try{C=y(!0,D)}finally{C?M():(T=!1,y=null)}}else T=!1}var M;if(typeof m=="function")M=function(){m(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Q=q.port2;q.port1.onmessage=F,M=function(){Q.postMessage(null)}}else M=function(){P(F,0)};function _(D){y=D,T||(T=!0,M())}function J(D,C){j=P(function(){D(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,_(w))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var C=3;break;default:C=p}var R=p;p=C;try{return D()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,C){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var R=p;p=D;try{return C()}finally{p=R}},e.unstable_scheduleCallback=function(D,C,R){var I=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?I+R:I):R=I,D){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=R+G,D={id:d++,callback:C,priorityLevel:D,startTime:R,expirationTime:G,sortIndex:-1},R>I?(D.sortIndex=R,n(h,D),r(c)===null&&D===r(h)&&(k?(f(j),j=-1):k=!0,J(N,R-I))):(D.sortIndex=G,n(c,D),b||g||(b=!0,_(w))),D},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(D){var C=p;return function(){var R=p;p=C;try{return D.apply(this,arguments)}finally{p=R}}}})(Ou);Tu.exports=Ou;var mg=Tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg=v,ot=mg;function B(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lu=new Set,Pi={};function rr(e,n){zr(e,n),zr(e+"Capture",n)}function zr(e,n){for(Pi[e]=n,e=0;e<n.length;e++)Lu.add(n[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=Object.prototype.hasOwnProperty,gg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gd={},xd={};function xg(e){return qo.call(xd,e)?!0:qo.call(gd,e)?!1:gg.test(e)?xd[e]=!0:(gd[e]=!0,!1)}function wg(e,n,r,i){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yg(e,n,r,i){if(n===null||typeof n>"u"||wg(e,n,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function qe(e,n,r,i,s,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Be[n]=new qe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ac=/[\-:]([a-z])/g;function oc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ac,oc);Be[n]=new qe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ac,oc);Be[n]=new qe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ac,oc);Be[n]=new qe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function lc(e,n,r,i){var s=Be.hasOwnProperty(n)?Be[n]:null;(s!==null?s.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(yg(n,r,s,i)&&(r=null),i||s===null?xg(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(n=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(n):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,n,r):e.setAttribute(n,r))))}var Jt=fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ps=Symbol.for("react.element"),mr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),Ko=Symbol.for("react.profiler"),Mu=Symbol.for("react.provider"),zu=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Xo=Symbol.for("react.suspense_list"),hc=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Iu=Symbol.for("react.offscreen"),wd=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=wd&&e[wd]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Za;function gi(e){if(Za===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Za=n&&n[1]||""}return`
`+Za+e}var Ja=!1;function eo(e,n){if(!e||Ja)return"";Ja=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(h){var i=h}Reflect.construct(e,[],n)}else{try{n.call()}catch(h){i=h}e.call(n.prototype)}else{try{throw Error()}catch(h){i=h}e()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),a=i.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ja=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?gi(e):""}function vg(e){switch(e.tag){case 5:return gi(e.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1),e;case 11:return e=eo(e.type.render,!1),e;case 1:return e=eo(e.type,!0),e;default:return""}}function Qo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case mr:return"Portal";case Ko:return"Profiler";case cc:return"StrictMode";case Yo:return"Suspense";case Xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zu:return(e.displayName||"Context")+".Consumer";case Mu:return(e._context.displayName||"Context")+".Provider";case dc:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hc:return n=e.displayName||null,n!==null?n:Qo(e.type)||"Memo";case on:n=e._payload,e=e._init;try{return Qo(e(n))}catch{}}return null}function bg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qo(n);case 8:return n===cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jg(e){var n=Bu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ms(e){e._valueTracker||(e._valueTracker=jg(e))}function Du(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),i="";return e&&(i=Bu(e)?e.checked?"true":"false":e.value),e=i,e!==r?(n.setValue(e),!0):!1}function Js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zo(e,n){var r=n.checked;return xe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function yd(e,n){var r=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;r=kn(n.value!=null?n.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fu(e,n){n=n.checked,n!=null&&lc(e,"checked",n,!1)}function Jo(e,n){Fu(e,n);var r=kn(n.value),i=n.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?el(e,n.type,r):n.hasOwnProperty("defaultValue")&&el(e,n.type,kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function vd(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function el(e,n,r){(n!=="number"||Js(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var xi=Array.isArray;function Sr(e,n,r,i){if(e=e.options,n){n={};for(var s=0;s<r.length;s++)n["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=n.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+kn(r),n=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function tl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(B(91));return xe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bd(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(B(92));if(xi(r)){if(1<r.length)throw Error(B(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:kn(r)}}function Wu(e,n){var r=kn(n.value),i=kn(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function jd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Uu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fs,Hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(n,r,i,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(fs=fs||document.createElement("div"),fs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=fs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ti(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ag=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(e){Ag.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),vi[n]=vi[e]})});function $u(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||vi.hasOwnProperty(e)&&vi[e]?(""+n).trim():n+"px"}function _u(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=$u(r,n[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var kg=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,n){if(n){if(kg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(B(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(B(61))}if(n.style!=null&&typeof n.style!="object")throw Error(B(62))}}function il(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,Cr=null,Er=null;function Ad(e){if(e=ss(e)){if(typeof al!="function")throw Error(B(280));var n=e.stateNode;n&&(n=La(n),al(e.stateNode,e.type,n))}}function Gu(e){Cr?Er?Er.push(e):Er=[e]:Cr=e}function Vu(){if(Cr){var e=Cr,n=Er;if(Er=Cr=null,Ad(e),n)for(e=0;e<n.length;e++)Ad(n[e])}}function qu(e,n){return e(n)}function Ku(){}var to=!1;function Yu(e,n,r){if(to)return e(n,r);to=!0;try{return qu(e,n,r)}finally{to=!1,(Cr!==null||Er!==null)&&(Ku(),Vu())}}function Oi(e,n){var r=e.stateNode;if(r===null)return null;var i=La(r);if(i===null)return null;r=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(B(231,n,typeof r));return r}var ol=!1;if(qt)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){ol=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{ol=!1}function Ng(e,n,r,i,s,a,o,l,c){var h=Array.prototype.slice.call(arguments,3);try{n.apply(r,h)}catch(d){this.onError(d)}}var bi=!1,ea=null,ta=!1,ll=null,Sg={onError:function(e){bi=!0,ea=e}};function Cg(e,n,r,i,s,a,o,l,c){bi=!1,ea=null,Ng.apply(Sg,arguments)}function Eg(e,n,r,i,s,a,o,l,c){if(Cg.apply(this,arguments),bi){if(bi){var h=ea;bi=!1,ea=null}else throw Error(B(198));ta||(ta=!0,ll=h)}}function ir(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Xu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function kd(e){if(ir(e)!==e)throw Error(B(188))}function Rg(e){var n=e.alternate;if(!n){if(n=ir(e),n===null)throw Error(B(188));return n!==e?null:e}for(var r=e,i=n;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return kd(s),e;if(a===i)return kd(s),n;a=a.sibling}throw Error(B(188))}if(r.return!==i.return)r=s,i=a;else{for(var o=!1,l=s.child;l;){if(l===r){o=!0,r=s,i=a;break}if(l===i){o=!0,i=s,r=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===r){o=!0,r=a,i=s;break}if(l===i){o=!0,i=a,r=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(r.alternate!==i)throw Error(B(190))}if(r.tag!==3)throw Error(B(188));return r.stateNode.current===r?e:n}function Qu(e){return e=Rg(e),e!==null?Zu(e):null}function Zu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Zu(e);if(n!==null)return n;e=e.sibling}return null}var Ju=ot.unstable_scheduleCallback,Nd=ot.unstable_cancelCallback,Pg=ot.unstable_shouldYield,Tg=ot.unstable_requestPaint,ve=ot.unstable_now,Og=ot.unstable_getCurrentPriorityLevel,pc=ot.unstable_ImmediatePriority,ep=ot.unstable_UserBlockingPriority,na=ot.unstable_NormalPriority,Lg=ot.unstable_LowPriority,tp=ot.unstable_IdlePriority,Ra=null,zt=null;function Mg(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Ra,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Bg,zg=Math.log,Ig=Math.LN2;function Bg(e){return e>>>=0,e===0?32:31-(zg(e)/Ig|0)|0}var gs=64,xs=4194304;function wi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ra(e,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~s;l!==0?i=wi(l):(a&=o,a!==0&&(i=wi(a)))}else o=r&~s,o!==0?i=wi(o):a!==0&&(i=wi(a));if(i===0)return 0;if(n!==0&&n!==i&&!(n&s)&&(s=i&-i,a=n&-n,s>=a||s===16&&(a&4194240)!==0))return n;if(i&4&&(i|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)r=31-kt(n),s=1<<r,i|=e[r],n&=~s;return i}function Dg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fg(e,n){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-kt(a),l=1<<o,c=s[o];c===-1?(!(l&r)||l&i)&&(s[o]=Dg(l,n)):c<=n&&(e.expiredLanes|=l),a&=~l}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function np(){var e=gs;return gs<<=1,!(gs&4194240)&&(gs=64),e}function no(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function rs(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-kt(n),e[n]=r}function Wg(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-kt(r),a=1<<s;n[s]=0,i[s]=-1,e[s]=-1,r&=~a}}function mc(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var i=31-kt(r),s=1<<i;s&n|e[i]&n&&(e[i]|=n),r&=~s}}var le=0;function rp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ip,fc,sp,ap,op,dl=!1,ws=[],fn=null,gn=null,xn=null,Li=new Map,Mi=new Map,cn=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Li.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(n.pointerId)}}function ri(e,n,r,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},n!==null&&(n=ss(n),n!==null&&fc(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Hg(e,n,r,i,s){switch(n){case"focusin":return fn=ri(fn,e,n,r,i,s),!0;case"dragenter":return gn=ri(gn,e,n,r,i,s),!0;case"mouseover":return xn=ri(xn,e,n,r,i,s),!0;case"pointerover":var a=s.pointerId;return Li.set(a,ri(Li.get(a)||null,e,n,r,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Mi.set(a,ri(Mi.get(a)||null,e,n,r,i,s)),!0}return!1}function lp(e){var n=Wn(e.target);if(n!==null){var r=ir(n);if(r!==null){if(n=r.tag,n===13){if(n=Xu(r),n!==null){e.blockedOn=n,op(e.priority,function(){sp(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=hl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);sl=i,r.target.dispatchEvent(i),sl=null}else return n=ss(r),n!==null&&fc(n),e.blockedOn=r,!1;n.shift()}return!0}function Cd(e,n,r){Bs(e)&&r.delete(n)}function $g(){dl=!1,fn!==null&&Bs(fn)&&(fn=null),gn!==null&&Bs(gn)&&(gn=null),xn!==null&&Bs(xn)&&(xn=null),Li.forEach(Cd),Mi.forEach(Cd)}function ii(e,n){e.blockedOn===n&&(e.blockedOn=null,dl||(dl=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,$g)))}function zi(e){function n(s){return ii(s,e)}if(0<ws.length){ii(ws[0],e);for(var r=1;r<ws.length;r++){var i=ws[r];i.blockedOn===e&&(i.blockedOn=null)}}for(fn!==null&&ii(fn,e),gn!==null&&ii(gn,e),xn!==null&&ii(xn,e),Li.forEach(n),Mi.forEach(n),r=0;r<cn.length;r++)i=cn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<cn.length&&(r=cn[0],r.blockedOn===null);)lp(r),r.blockedOn===null&&cn.shift()}var Rr=Jt.ReactCurrentBatchConfig,ia=!0;function _g(e,n,r,i){var s=le,a=Rr.transition;Rr.transition=null;try{le=1,gc(e,n,r,i)}finally{le=s,Rr.transition=a}}function Gg(e,n,r,i){var s=le,a=Rr.transition;Rr.transition=null;try{le=4,gc(e,n,r,i)}finally{le=s,Rr.transition=a}}function gc(e,n,r,i){if(ia){var s=hl(e,n,r,i);if(s===null)po(e,n,i,sa,r),Sd(e,i);else if(Hg(s,e,n,r,i))i.stopPropagation();else if(Sd(e,i),n&4&&-1<Ug.indexOf(e)){for(;s!==null;){var a=ss(s);if(a!==null&&ip(a),a=hl(e,n,r,i),a===null&&po(e,n,i,sa,r),a===s)break;s=a}s!==null&&i.stopPropagation()}else po(e,n,i,null,r)}}var sa=null;function hl(e,n,r,i){if(sa=null,e=uc(i),e=Wn(e),e!==null)if(n=ir(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Xu(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return sa=e,null}function cp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Og()){case pc:return 1;case ep:return 4;case na:case Lg:return 16;case tp:return 536870912;default:return 16}default:return 16}}var hn=null,xc=null,Ds=null;function dp(){if(Ds)return Ds;var e,n=xc,r=n.length,i,s="value"in hn?hn.value:hn.textContent,a=s.length;for(e=0;e<r&&n[e]===s[e];e++);var o=r-e;for(i=1;i<=o&&n[r-i]===s[a-i];i++);return Ds=s.slice(e,1<i?1-i:void 0)}function Fs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function Ed(){return!1}function ct(e){function n(r,i,s,a,o){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ys:Ed,this.isPropagationStopped=Ed,this}return xe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),n}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=ct(Kr),is=xe({},Kr,{view:0,detail:0}),Vg=ct(is),ro,io,si,Pa=xe({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(ro=e.screenX-si.screenX,io=e.screenY-si.screenY):io=ro=0,si=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:io}}),Rd=ct(Pa),qg=xe({},Pa,{dataTransfer:0}),Kg=ct(qg),Yg=xe({},is,{relatedTarget:0}),so=ct(Yg),Xg=xe({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=ct(Xg),Zg=xe({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jg=ct(Zg),ex=xe({},Kr,{data:0}),Pd=ct(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rx[e])?!!n[e]:!1}function yc(){return ix}var sx=xe({},is,{key:function(e){if(e.key){var n=tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ax=ct(sx),ox=xe({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=ct(ox),lx=xe({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),cx=ct(lx),dx=xe({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=ct(dx),ux=xe({},Pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),px=ct(ux),mx=[9,13,27,32],vc=qt&&"CompositionEvent"in window,ji=null;qt&&"documentMode"in document&&(ji=document.documentMode);var fx=qt&&"TextEvent"in window&&!ji,hp=qt&&(!vc||ji&&8<ji&&11>=ji),Od=" ",Ld=!1;function up(e,n){switch(e){case"keyup":return mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function gx(e,n){switch(e){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(Ld=!0,Od);case"textInput":return e=n.data,e===Od&&Ld?null:e;default:return null}}function xx(e,n){if(gr)return e==="compositionend"||!vc&&up(e,n)?(e=dp(),Ds=xc=hn=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wx[e.type]:n==="textarea"}function mp(e,n,r,i){Gu(i),n=aa(n,"onChange"),0<n.length&&(r=new wc("onChange","change",null,r,i),e.push({event:r,listeners:n}))}var Ai=null,Ii=null;function yx(e){Np(e,0)}function Ta(e){var n=yr(e);if(Du(n))return e}function vx(e,n){if(e==="change")return n}var fp=!1;if(qt){var ao;if(qt){var oo="oninput"in document;if(!oo){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),oo=typeof zd.oninput=="function"}ao=oo}else ao=!1;fp=ao&&(!document.documentMode||9<document.documentMode)}function Id(){Ai&&(Ai.detachEvent("onpropertychange",gp),Ii=Ai=null)}function gp(e){if(e.propertyName==="value"&&Ta(Ii)){var n=[];mp(n,Ii,e,uc(e)),Yu(yx,n)}}function bx(e,n,r){e==="focusin"?(Id(),Ai=n,Ii=r,Ai.attachEvent("onpropertychange",gp)):e==="focusout"&&Id()}function jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(Ii)}function Ax(e,n){if(e==="click")return Ta(n)}function kx(e,n){if(e==="input"||e==="change")return Ta(n)}function Nx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ct=typeof Object.is=="function"?Object.is:Nx;function Bi(e,n){if(Ct(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),i=Object.keys(n);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!qo.call(n,s)||!Ct(e[s],n[s]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dd(e,n){var r=Bd(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=n&&i>=n)return{node:r,offset:n-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Bd(r)}}function xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wp(){for(var e=window,n=Js();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Js(e.document)}return n}function bc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Sx(e){var n=wp(),r=e.focusedElem,i=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&xp(r.ownerDocument.documentElement,r)){if(i!==null&&bc(r)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=Dd(r,a);var o=Dd(r,i);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cx=qt&&"documentMode"in document&&11>=document.documentMode,xr=null,ul=null,ki=null,pl=!1;function Fd(e,n,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pl||xr==null||xr!==Js(i)||(i=xr,"selectionStart"in i&&bc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ki&&Bi(ki,i)||(ki=i,i=aa(ul,"onSelect"),0<i.length&&(n=new wc("onSelect","select",null,n,r),e.push({event:n,listeners:i}),n.target=xr)))}function vs(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var wr={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionend:vs("Transition","TransitionEnd")},lo={},yp={};qt&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Oa(e){if(lo[e])return lo[e];if(!wr[e])return e;var n=wr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in yp)return lo[e]=n[r];return e}var vp=Oa("animationend"),bp=Oa("animationiteration"),jp=Oa("animationstart"),Ap=Oa("transitionend"),kp=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,n){kp.set(e,n),rr(n,[e])}for(var co=0;co<Wd.length;co++){var ho=Wd[co],Ex=ho.toLowerCase(),Rx=ho[0].toUpperCase()+ho.slice(1);Cn(Ex,"on"+Rx)}Cn(vp,"onAnimationEnd");Cn(bp,"onAnimationIteration");Cn(jp,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Ap,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));function Ud(e,n,r){var i=e.type||"unknown-event";e.currentTarget=r,Eg(i,n,void 0,e),e.currentTarget=null}function Np(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var a=void 0;if(n)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,h=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;Ud(s,l,h),a=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,h=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;Ud(s,l,h),a=c}}}if(ta)throw e=ll,ta=!1,ll=null,e}function he(e,n){var r=n[wl];r===void 0&&(r=n[wl]=new Set);var i=e+"__bubble";r.has(i)||(Sp(n,e,2,!1),r.add(i))}function uo(e,n,r){var i=0;n&&(i|=4),Sp(r,e,i,n)}var bs="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[bs]){e[bs]=!0,Lu.forEach(function(r){r!=="selectionchange"&&(Px.has(r)||uo(r,!1,e),uo(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bs]||(n[bs]=!0,uo("selectionchange",!1,n))}}function Sp(e,n,r,i){switch(cp(n)){case 1:var s=_g;break;case 4:s=Gg;break;default:s=gc}r=s.bind(null,n,r,e),s=void 0,!ol||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(n,r,{capture:!0,passive:s}):e.addEventListener(n,r,!0):s!==void 0?e.addEventListener(n,r,{passive:s}):e.addEventListener(n,r,!1)}function po(e,n,r,i,s){var a=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Wn(l),o===null)return;if(c=o.tag,c===5||c===6){i=a=o;continue e}l=l.parentNode}}i=i.return}Yu(function(){var h=a,d=uc(r),u=[];e:{var p=kp.get(e);if(p!==void 0){var g=wc,b=e;switch(e){case"keypress":if(Fs(r)===0)break e;case"keydown":case"keyup":g=ax;break;case"focusin":b="focus",g=so;break;case"focusout":b="blur",g=so;break;case"beforeblur":case"afterblur":g=so;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=cx;break;case vp:case bp:case jp:g=Qg;break;case Ap:g=hx;break;case"scroll":g=Vg;break;case"wheel":g=px;break;case"copy":case"cut":case"paste":g=Jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Td}var k=(n&4)!==0,P=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var m=h,x;m!==null;){x=m;var N=x.stateNode;if(x.tag===5&&N!==null&&(x=N,f!==null&&(N=Oi(m,f),N!=null&&k.push(Fi(m,N,x)))),P)break;m=m.return}0<k.length&&(p=new g(p,b,null,r,d),u.push({event:p,listeners:k}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==sl&&(b=r.relatedTarget||r.fromElement)&&(Wn(b)||b[Kt]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(b=r.relatedTarget||r.toElement,g=h,b=b?Wn(b):null,b!==null&&(P=ir(b),b!==P||b.tag!==5&&b.tag!==6)&&(b=null)):(g=null,b=h),g!==b)){if(k=Rd,N="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=Td,N="onPointerLeave",f="onPointerEnter",m="pointer"),P=g==null?p:yr(g),x=b==null?p:yr(b),p=new k(N,m+"leave",g,r,d),p.target=P,p.relatedTarget=x,N=null,Wn(d)===h&&(k=new k(f,m+"enter",b,r,d),k.target=x,k.relatedTarget=P,N=k),P=N,g&&b)t:{for(k=g,f=b,m=0,x=k;x;x=dr(x))m++;for(x=0,N=f;N;N=dr(N))x++;for(;0<m-x;)k=dr(k),m--;for(;0<x-m;)f=dr(f),x--;for(;m--;){if(k===f||f!==null&&k===f.alternate)break t;k=dr(k),f=dr(f)}k=null}else k=null;g!==null&&Hd(u,p,g,k,!1),b!==null&&P!==null&&Hd(u,P,b,k,!0)}}e:{if(p=h?yr(h):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var w=vx;else if(Md(p))if(fp)w=kx;else{w=jx;var T=bx}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=Ax);if(w&&(w=w(e,h))){mp(u,w,r,d);break e}T&&T(e,p,h),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&el(p,"number",p.value)}switch(T=h?yr(h):window,e){case"focusin":(Md(T)||T.contentEditable==="true")&&(xr=T,ul=h,ki=null);break;case"focusout":ki=ul=xr=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,Fd(u,r,d);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":Fd(u,r,d)}var y;if(vc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else gr?up(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(hp&&r.locale!=="ko"&&(gr||j!=="onCompositionStart"?j==="onCompositionEnd"&&gr&&(y=dp()):(hn=d,xc="value"in hn?hn.value:hn.textContent,gr=!0)),T=aa(h,j),0<T.length&&(j=new Pd(j,e,null,r,d),u.push({event:j,listeners:T}),y?j.data=y:(y=pp(r),y!==null&&(j.data=y)))),(y=fx?gx(e,r):xx(e,r))&&(h=aa(h,"onBeforeInput"),0<h.length&&(d=new Pd("onBeforeInput","beforeinput",null,r,d),u.push({event:d,listeners:h}),d.data=y))}Np(u,n)})}function Fi(e,n,r){return{instance:e,listener:n,currentTarget:r}}function aa(e,n){for(var r=n+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Oi(e,r),a!=null&&i.unshift(Fi(e,a,s)),a=Oi(e,n),a!=null&&i.push(Fi(e,a,s))),e=e.return}return i}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hd(e,n,r,i,s){for(var a=n._reactName,o=[];r!==null&&r!==i;){var l=r,c=l.alternate,h=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&h!==null&&(l=h,s?(c=Oi(r,a),c!=null&&o.unshift(Fi(r,c,l))):s||(c=Oi(r,a),c!=null&&o.push(Fi(r,c,l)))),r=r.return}o.length!==0&&e.push({event:n,listeners:o})}var Tx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Tx,`
`).replace(Ox,"")}function js(e,n,r){if(n=$d(n),$d(e)!==n&&r)throw Error(B(425))}function oa(){}var ml=null,fl=null;function gl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(zx)}:xl;function zx(e){setTimeout(function(){throw e})}function mo(e,n){var r=n,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),zi(n);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);zi(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Gd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Yr,Wi="__reactProps$"+Yr,Kt="__reactContainer$"+Yr,wl="__reactEvents$"+Yr,Ix="__reactListeners$"+Yr,Bx="__reactHandles$"+Yr;function Wn(e){var n=e[Mt];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Kt]||r[Mt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Gd(e);e!==null;){if(r=e[Mt])return r;e=Gd(e)}return n}e=r,r=e.parentNode}return null}function ss(e){return e=e[Mt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function La(e){return e[Wi]||null}var yl=[],vr=-1;function En(e){return{current:e}}function ue(e){0>vr||(e.current=yl[vr],yl[vr]=null,vr--)}function de(e,n){vr++,yl[vr]=e.current,e.current=n}var Nn={},$e=En(Nn),Ze=En(!1),Kn=Nn;function Ir(e,n){var r=e.type.contextTypes;if(!r)return Nn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=n[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function Je(e){return e=e.childContextTypes,e!=null}function la(){ue(Ze),ue($e)}function Vd(e,n,r){if($e.current!==Nn)throw Error(B(168));de($e,n),de(Ze,r)}function Cp(e,n,r){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in n))throw Error(B(108,bg(e)||"Unknown",s));return xe({},r,i)}function ca(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Kn=$e.current,de($e,e),de(Ze,Ze.current),!0}function qd(e,n,r){var i=e.stateNode;if(!i)throw Error(B(169));r?(e=Cp(e,n,Kn),i.__reactInternalMemoizedMergedChildContext=e,ue(Ze),ue($e),de($e,e)):ue(Ze),de(Ze,r)}var Wt=null,Ma=!1,fo=!1;function Ep(e){Wt===null?Wt=[e]:Wt.push(e)}function Dx(e){Ma=!0,Ep(e)}function Rn(){if(!fo&&Wt!==null){fo=!0;var e=0,n=le;try{var r=Wt;for(le=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Wt=null,Ma=!1}catch(s){throw Wt!==null&&(Wt=Wt.slice(e+1)),Ju(pc,Rn),s}finally{le=n,fo=!1}}return null}var br=[],jr=0,da=null,ha=0,pt=[],mt=0,Yn=null,Ht=1,$t="";function Dn(e,n){br[jr++]=ha,br[jr++]=da,da=e,ha=n}function Rp(e,n,r){pt[mt++]=Ht,pt[mt++]=$t,pt[mt++]=Yn,Yn=e;var i=Ht;e=$t;var s=32-kt(i)-1;i&=~(1<<s),r+=1;var a=32-kt(n)+s;if(30<a){var o=s-s%5;a=(i&(1<<o)-1).toString(32),i>>=o,s-=o,Ht=1<<32-kt(n)+s|r<<s|i,$t=a+e}else Ht=1<<a|r<<s|i,$t=e}function jc(e){e.return!==null&&(Dn(e,1),Rp(e,1,0))}function Ac(e){for(;e===da;)da=br[--jr],br[jr]=null,ha=br[--jr],br[jr]=null;for(;e===Yn;)Yn=pt[--mt],pt[mt]=null,$t=pt[--mt],pt[mt]=null,Ht=pt[--mt],pt[mt]=null}var at=null,st=null,pe=!1,At=null;function Pp(e,n){var r=ft(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Kd(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,at=e,st=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,at=e,st=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Yn!==null?{id:Ht,overflow:$t}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=ft(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,at=e,st=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(pe){var n=st;if(n){var r=n;if(!Kd(e,n)){if(vl(e))throw Error(B(418));n=wn(r.nextSibling);var i=at;n&&Kd(e,n)?Pp(i,r):(e.flags=e.flags&-4097|2,pe=!1,at=e)}}else{if(vl(e))throw Error(B(418));e.flags=e.flags&-4097|2,pe=!1,at=e}}}function Yd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function As(e){if(e!==at)return!1;if(!pe)return Yd(e),pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gl(e.type,e.memoizedProps)),n&&(n=st)){if(vl(e))throw Tp(),Error(B(418));for(;n;)Pp(e,n),n=wn(n.nextSibling)}if(Yd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){st=wn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}st=null}}else st=at?wn(e.stateNode.nextSibling):null;return!0}function Tp(){for(var e=st;e;)e=wn(e.nextSibling)}function Br(){st=at=null,pe=!1}function kc(e){At===null?At=[e]:At.push(e)}var Fx=Jt.ReactCurrentBatchConfig;function ai(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(B(309));var i=r.stateNode}if(!i)throw Error(B(147,e));var s=i,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(B(284));if(!r._owner)throw Error(B(290,e))}return e}function ks(e,n){throw e=Object.prototype.toString.call(n),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xd(e){var n=e._init;return n(e._payload)}function Op(e){function n(f,m){if(e){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function r(f,m){if(!e)return null;for(;m!==null;)n(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function s(f,m){return f=jn(f,m),f.index=0,f.sibling=null,f}function a(f,m,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,m,x,N){return m===null||m.tag!==6?(m=jo(x,f.mode,N),m.return=f,m):(m=s(m,x),m.return=f,m)}function c(f,m,x,N){var w=x.type;return w===fr?d(f,m,x.props.children,N,x.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===on&&Xd(w)===m.type)?(N=s(m,x.props),N.ref=ai(f,m,x),N.return=f,N):(N=Vs(x.type,x.key,x.props,null,f.mode,N),N.ref=ai(f,m,x),N.return=f,N)}function h(f,m,x,N){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Ao(x,f.mode,N),m.return=f,m):(m=s(m,x.children||[]),m.return=f,m)}function d(f,m,x,N,w){return m===null||m.tag!==7?(m=Gn(x,f.mode,N,w),m.return=f,m):(m=s(m,x),m.return=f,m)}function u(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=jo(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ps:return x=Vs(m.type,m.key,m.props,null,f.mode,x),x.ref=ai(f,null,m),x.return=f,x;case mr:return m=Ao(m,f.mode,x),m.return=f,m;case on:var N=m._init;return u(f,N(m._payload),x)}if(xi(m)||ti(m))return m=Gn(m,f.mode,x,null),m.return=f,m;ks(f,m)}return null}function p(f,m,x,N){var w=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:l(f,m,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ps:return x.key===w?c(f,m,x,N):null;case mr:return x.key===w?h(f,m,x,N):null;case on:return w=x._init,p(f,m,w(x._payload),N)}if(xi(x)||ti(x))return w!==null?null:d(f,m,x,N,null);ks(f,x)}return null}function g(f,m,x,N,w){if(typeof N=="string"&&N!==""||typeof N=="number")return f=f.get(x)||null,l(m,f,""+N,w);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ps:return f=f.get(N.key===null?x:N.key)||null,c(m,f,N,w);case mr:return f=f.get(N.key===null?x:N.key)||null,h(m,f,N,w);case on:var T=N._init;return g(f,m,x,T(N._payload),w)}if(xi(N)||ti(N))return f=f.get(x)||null,d(m,f,N,w,null);ks(m,N)}return null}function b(f,m,x,N){for(var w=null,T=null,y=m,j=m=0,L=null;y!==null&&j<x.length;j++){y.index>j?(L=y,y=null):L=y.sibling;var S=p(f,y,x[j],N);if(S===null){y===null&&(y=L);break}e&&y&&S.alternate===null&&n(f,y),m=a(S,m,j),T===null?w=S:T.sibling=S,T=S,y=L}if(j===x.length)return r(f,y),pe&&Dn(f,j),w;if(y===null){for(;j<x.length;j++)y=u(f,x[j],N),y!==null&&(m=a(y,m,j),T===null?w=y:T.sibling=y,T=y);return pe&&Dn(f,j),w}for(y=i(f,y);j<x.length;j++)L=g(y,f,j,x[j],N),L!==null&&(e&&L.alternate!==null&&y.delete(L.key===null?j:L.key),m=a(L,m,j),T===null?w=L:T.sibling=L,T=L);return e&&y.forEach(function(O){return n(f,O)}),pe&&Dn(f,j),w}function k(f,m,x,N){var w=ti(x);if(typeof w!="function")throw Error(B(150));if(x=w.call(x),x==null)throw Error(B(151));for(var T=w=null,y=m,j=m=0,L=null,S=x.next();y!==null&&!S.done;j++,S=x.next()){y.index>j?(L=y,y=null):L=y.sibling;var O=p(f,y,S.value,N);if(O===null){y===null&&(y=L);break}e&&y&&O.alternate===null&&n(f,y),m=a(O,m,j),T===null?w=O:T.sibling=O,T=O,y=L}if(S.done)return r(f,y),pe&&Dn(f,j),w;if(y===null){for(;!S.done;j++,S=x.next())S=u(f,S.value,N),S!==null&&(m=a(S,m,j),T===null?w=S:T.sibling=S,T=S);return pe&&Dn(f,j),w}for(y=i(f,y);!S.done;j++,S=x.next())S=g(y,f,j,S.value,N),S!==null&&(e&&S.alternate!==null&&y.delete(S.key===null?j:S.key),m=a(S,m,j),T===null?w=S:T.sibling=S,T=S);return e&&y.forEach(function(F){return n(f,F)}),pe&&Dn(f,j),w}function P(f,m,x,N){if(typeof x=="object"&&x!==null&&x.type===fr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ps:e:{for(var w=x.key,T=m;T!==null;){if(T.key===w){if(w=x.type,w===fr){if(T.tag===7){r(f,T.sibling),m=s(T,x.props.children),m.return=f,f=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===on&&Xd(w)===T.type){r(f,T.sibling),m=s(T,x.props),m.ref=ai(f,T,x),m.return=f,f=m;break e}r(f,T);break}else n(f,T);T=T.sibling}x.type===fr?(m=Gn(x.props.children,f.mode,N,x.key),m.return=f,f=m):(N=Vs(x.type,x.key,x.props,null,f.mode,N),N.ref=ai(f,m,x),N.return=f,f=N)}return o(f);case mr:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){r(f,m.sibling),m=s(m,x.children||[]),m.return=f,f=m;break e}else{r(f,m);break}else n(f,m);m=m.sibling}m=Ao(x,f.mode,N),m.return=f,f=m}return o(f);case on:return T=x._init,P(f,m,T(x._payload),N)}if(xi(x))return b(f,m,x,N);if(ti(x))return k(f,m,x,N);ks(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(r(f,m.sibling),m=s(m,x),m.return=f,f=m):(r(f,m),m=jo(x,f.mode,N),m.return=f,f=m),o(f)):r(f,m)}return P}var Dr=Op(!0),Lp=Op(!1),ua=En(null),pa=null,Ar=null,Nc=null;function Sc(){Nc=Ar=pa=null}function Cc(e){var n=ua.current;ue(ua),e._currentValue=n}function jl(e,n,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===r)break;e=e.return}}function Pr(e,n){pa=e,Nc=Ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Qe=!0),e.firstContext=null)}function xt(e){var n=e._currentValue;if(Nc!==e)if(e={context:e,memoizedValue:n,next:null},Ar===null){if(pa===null)throw Error(B(308));Ar=e,pa.dependencies={lanes:0,firstContext:e}}else Ar=Ar.next=e;return n}var Un=null;function Ec(e){Un===null?Un=[e]:Un.push(e)}function Mp(e,n,r,i){var s=n.interleaved;return s===null?(r.next=r,Ec(n)):(r.next=s.next,s.next=r),n.interleaved=r,Yt(e,i)}function Yt(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ln=!1;function Rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ne&2){var s=i.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),i.pending=n,Yt(e,r)}return s=i.interleaved,s===null?(n.next=n,Ec(i)):(n.next=s.next,s.next=n),i.interleaved=n,Yt(e,r)}function Ws(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,mc(e,r)}}function Qd(e,n){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?s=a=n:a=a.next=n}else s=a=n;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function ma(e,n,r,i){var s=e.updateQueue;ln=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,h=c.next;c.next=null,o===null?a=h:o.next=h,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=c))}if(a!==null){var u=s.baseState;o=0,d=h=c=null,l=a;do{var p=l.lane,g=l.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,k=l;switch(p=n,g=r,k.tag){case 1:if(b=k.payload,typeof b=="function"){u=b.call(g,u,p);break e}u=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,p=typeof b=="function"?b.call(g,u,p):b,p==null)break e;u=xe({},u,p);break e;case 2:ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=g,c=u):d=d.next=g,o|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(d===null&&(c=u),s.baseState=c,s.firstBaseUpdate=h,s.lastBaseUpdate=d,n=s.shared.interleaved,n!==null){s=n;do o|=s.lane,s=s.next;while(s!==n)}else a===null&&(s.shared.lanes=0);Qn|=o,e.lanes=o,e.memoizedState=u}}function Zd(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(B(191,s));s.call(i)}}}var as={},It=En(as),Ui=En(as),Hi=En(as);function Hn(e){if(e===as)throw Error(B(174));return e}function Pc(e,n){switch(de(Hi,n),de(Ui,e),de(It,as),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:nl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=nl(n,e)}ue(It),de(It,n)}function Fr(){ue(It),ue(Ui),ue(Hi)}function Ip(e){Hn(Hi.current);var n=Hn(It.current),r=nl(n,e.type);n!==r&&(de(Ui,e),de(It,r))}function Tc(e){Ui.current===e&&(ue(It),ue(Ui))}var fe=En(0);function fa(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var go=[];function Oc(){for(var e=0;e<go.length;e++)go[e]._workInProgressVersionPrimary=null;go.length=0}var Us=Jt.ReactCurrentDispatcher,xo=Jt.ReactCurrentBatchConfig,Xn=0,ge=null,Se=null,Pe=null,ga=!1,Ni=!1,$i=0,Wx=0;function De(){throw Error(B(321))}function Lc(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Ct(e[r],n[r]))return!1;return!0}function Mc(e,n,r,i,s,a){if(Xn=a,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Us.current=e===null||e.memoizedState===null?_x:Gx,e=r(i,s),Ni){a=0;do{if(Ni=!1,$i=0,25<=a)throw Error(B(301));a+=1,Pe=Se=null,n.updateQueue=null,Us.current=Vx,e=r(i,s)}while(Ni)}if(Us.current=xa,n=Se!==null&&Se.next!==null,Xn=0,Pe=Se=ge=null,ga=!1,n)throw Error(B(300));return e}function zc(){var e=$i!==0;return $i=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ge.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function wt(){if(Se===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var n=Pe===null?ge.memoizedState:Pe.next;if(n!==null)Pe=n,Se=e;else{if(e===null)throw Error(B(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Pe===null?ge.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function _i(e,n){return typeof n=="function"?n(e):n}function wo(e){var n=wt(),r=n.queue;if(r===null)throw Error(B(311));r.lastRenderedReducer=e;var i=Se,s=i.baseQueue,a=r.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}i.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,i=i.baseState;var l=o=null,c=null,h=a;do{var d=h.lane;if((Xn&d)===d)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:e(i,h.action);else{var u={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(l=c=u,o=i):c=c.next=u,ge.lanes|=d,Qn|=d}h=h.next}while(h!==null&&h!==a);c===null?o=i:c.next=l,Ct(i,n.memoizedState)||(Qe=!0),n.memoizedState=i,n.baseState=o,n.baseQueue=c,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do a=s.lane,ge.lanes|=a,Qn|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function yo(e){var n=wt(),r=n.queue;if(r===null)throw Error(B(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,a=n.memoizedState;if(s!==null){r.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Ct(a,n.memoizedState)||(Qe=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),r.lastRenderedState=a}return[a,i]}function Bp(){}function Dp(e,n){var r=ge,i=wt(),s=n(),a=!Ct(i.memoizedState,s);if(a&&(i.memoizedState=s,Qe=!0),i=i.queue,Ic(Up.bind(null,r,i,e),[e]),i.getSnapshot!==n||a||Pe!==null&&Pe.memoizedState.tag&1){if(r.flags|=2048,Gi(9,Wp.bind(null,r,i,s,n),void 0,null),Oe===null)throw Error(B(349));Xn&30||Fp(r,n,s)}return s}function Fp(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Wp(e,n,r,i){n.value=r,n.getSnapshot=i,Hp(n)&&$p(e)}function Up(e,n,r){return r(function(){Hp(n)&&$p(e)})}function Hp(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Ct(e,r)}catch{return!0}}function $p(e){var n=Yt(e,1);n!==null&&Nt(n,e,1,-1)}function Jd(e){var n=Lt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},n.queue=e,e=e.dispatch=$x.bind(null,ge,e),[n.memoizedState,e]}function Gi(e,n,r,i){return e={tag:e,create:n,destroy:r,deps:i,next:null},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,n.lastEffect=e)),e}function _p(){return wt().memoizedState}function Hs(e,n,r,i){var s=Lt();ge.flags|=e,s.memoizedState=Gi(1|n,r,void 0,i===void 0?null:i)}function za(e,n,r,i){var s=wt();i=i===void 0?null:i;var a=void 0;if(Se!==null){var o=Se.memoizedState;if(a=o.destroy,i!==null&&Lc(i,o.deps)){s.memoizedState=Gi(n,r,a,i);return}}ge.flags|=e,s.memoizedState=Gi(1|n,r,a,i)}function eh(e,n){return Hs(8390656,8,e,n)}function Ic(e,n){return za(2048,8,e,n)}function Gp(e,n){return za(4,2,e,n)}function Vp(e,n){return za(4,4,e,n)}function qp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kp(e,n,r){return r=r!=null?r.concat([e]):null,za(4,4,qp.bind(null,n,e),r)}function Bc(){}function Yp(e,n){var r=wt();n=n===void 0?null:n;var i=r.memoizedState;return i!==null&&n!==null&&Lc(n,i[1])?i[0]:(r.memoizedState=[e,n],e)}function Xp(e,n){var r=wt();n=n===void 0?null:n;var i=r.memoizedState;return i!==null&&n!==null&&Lc(n,i[1])?i[0]:(e=e(),r.memoizedState=[e,n],e)}function Qp(e,n,r){return Xn&21?(Ct(r,n)||(r=np(),ge.lanes|=r,Qn|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=r)}function Ux(e,n){var r=le;le=r!==0&&4>r?r:4,e(!0);var i=xo.transition;xo.transition={};try{e(!1),n()}finally{le=r,xo.transition=i}}function Zp(){return wt().memoizedState}function Hx(e,n,r){var i=bn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Jp(e))em(n,r);else if(r=Mp(e,n,r,i),r!==null){var s=Ge();Nt(r,e,i,s),tm(r,n,i)}}function $x(e,n,r){var i=bn(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Jp(e))em(n,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,l=a(o,r);if(s.hasEagerState=!0,s.eagerState=l,Ct(l,o)){var c=n.interleaved;c===null?(s.next=s,Ec(n)):(s.next=c.next,c.next=s),n.interleaved=s;return}}catch{}finally{}r=Mp(e,n,s,i),r!==null&&(s=Ge(),Nt(r,e,i,s),tm(r,n,i))}}function Jp(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function em(e,n){Ni=ga=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function tm(e,n,r){if(r&4194240){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,mc(e,r)}}var xa={readContext:xt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},_x={readContext:xt,useCallback:function(e,n){return Lt().memoizedState=[e,n===void 0?null:n],e},useContext:xt,useEffect:eh,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Hs(4194308,4,qp.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Hs(4194308,4,e,n)},useInsertionEffect:function(e,n){return Hs(4,2,e,n)},useMemo:function(e,n){var r=Lt();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var i=Lt();return n=r!==void 0?r(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Hx.bind(null,ge,e),[i.memoizedState,e]},useRef:function(e){var n=Lt();return e={current:e},n.memoizedState=e},useState:Jd,useDebugValue:Bc,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Jd(!1),n=e[0];return e=Ux.bind(null,e[1]),Lt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var i=ge,s=Lt();if(pe){if(r===void 0)throw Error(B(407));r=r()}else{if(r=n(),Oe===null)throw Error(B(349));Xn&30||Fp(i,n,r)}s.memoizedState=r;var a={value:r,getSnapshot:n};return s.queue=a,eh(Up.bind(null,i,a,e),[e]),i.flags|=2048,Gi(9,Wp.bind(null,i,a,r,n),void 0,null),r},useId:function(){var e=Lt(),n=Oe.identifierPrefix;if(pe){var r=$t,i=Ht;r=(i&~(1<<32-kt(i)-1)).toString(32)+r,n=":"+n+"R"+r,r=$i++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Wx++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Gx={readContext:xt,useCallback:Yp,useContext:xt,useEffect:Ic,useImperativeHandle:Kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Xp,useReducer:wo,useRef:_p,useState:function(){return wo(_i)},useDebugValue:Bc,useDeferredValue:function(e){var n=wt();return Qp(n,Se.memoizedState,e)},useTransition:function(){var e=wo(_i)[0],n=wt().memoizedState;return[e,n]},useMutableSource:Bp,useSyncExternalStore:Dp,useId:Zp,unstable_isNewReconciler:!1},Vx={readContext:xt,useCallback:Yp,useContext:xt,useEffect:Ic,useImperativeHandle:Kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Xp,useReducer:yo,useRef:_p,useState:function(){return yo(_i)},useDebugValue:Bc,useDeferredValue:function(e){var n=wt();return Se===null?n.memoizedState=e:Qp(n,Se.memoizedState,e)},useTransition:function(){var e=yo(_i)[0],n=wt().memoizedState;return[e,n]},useMutableSource:Bp,useSyncExternalStore:Dp,useId:Zp,unstable_isNewReconciler:!1};function bt(e,n){if(e&&e.defaultProps){n=xe({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Al(e,n,r,i){n=e.memoizedState,r=r(i,n),r=r==null?n:xe({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ia={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var i=Ge(),s=bn(e),a=Gt(i,s);a.payload=n,r!=null&&(a.callback=r),n=yn(e,a,s),n!==null&&(Nt(n,e,s,i),Ws(n,e,s))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var i=Ge(),s=bn(e),a=Gt(i,s);a.tag=1,a.payload=n,r!=null&&(a.callback=r),n=yn(e,a,s),n!==null&&(Nt(n,e,s,i),Ws(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Ge(),i=bn(e),s=Gt(r,i);s.tag=2,n!=null&&(s.callback=n),n=yn(e,s,i),n!==null&&(Nt(n,e,i,r),Ws(n,e,i))}};function th(e,n,r,i,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):n.prototype&&n.prototype.isPureReactComponent?!Bi(r,i)||!Bi(s,a):!0}function nm(e,n,r){var i=!1,s=Nn,a=n.contextType;return typeof a=="object"&&a!==null?a=xt(a):(s=Je(n)?Kn:$e.current,i=n.contextTypes,a=(i=i!=null)?Ir(e,s):Nn),n=new n(r,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ia,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),n}function nh(e,n,r,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,i),n.state!==e&&Ia.enqueueReplaceState(n,n.state,null)}function kl(e,n,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Rc(e);var a=n.contextType;typeof a=="object"&&a!==null?s.context=xt(a):(a=Je(n)?Kn:$e.current,s.context=Ir(e,a)),s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Al(e,n,a,r),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Ia.enqueueReplaceState(s,s.state,null),ma(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,n){try{var r="",i=n;do r+=vg(i),i=i.return;while(i);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:s,digest:null}}function vo(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function Nl(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var qx=typeof WeakMap=="function"?WeakMap:Map;function rm(e,n,r){r=Gt(-1,r),r.tag=3,r.payload={element:null};var i=n.value;return r.callback=function(){ya||(ya=!0,zl=i),Nl(e,n)},r}function im(e,n,r){r=Gt(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;r.payload=function(){return i(s)},r.callback=function(){Nl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Nl(e,n),typeof i!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),r}function rh(e,n,r){var i=e.pingCache;if(i===null){i=e.pingCache=new qx;var s=new Set;i.set(n,s)}else s=i.get(n),s===void 0&&(s=new Set,i.set(n,s));s.has(r)||(s.add(r),e=o1.bind(null,e,n,r),n.then(e,e))}function ih(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function sh(e,n,r,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=Gt(-1,1),n.tag=2,yn(r,n,1))),r.lanes|=1),e)}var Kx=Jt.ReactCurrentOwner,Qe=!1;function _e(e,n,r,i){n.child=e===null?Lp(n,null,r,i):Dr(n,e.child,r,i)}function ah(e,n,r,i,s){r=r.render;var a=n.ref;return Pr(n,s),i=Mc(e,n,r,i,a,s),r=zc(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Xt(e,n,s)):(pe&&r&&jc(n),n.flags|=1,_e(e,n,i,s),n.child)}function oh(e,n,r,i,s){if(e===null){var a=r.type;return typeof a=="function"&&!Gc(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=a,sm(e,n,a,i,s)):(e=Vs(r.type,null,i,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Bi,r(o,i)&&e.ref===n.ref)return Xt(e,n,s)}return n.flags|=1,e=jn(a,i),e.ref=n.ref,e.return=n,n.child=e}function sm(e,n,r,i,s){if(e!==null){var a=e.memoizedProps;if(Bi(a,i)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=i=a,(e.lanes&s)!==0)e.flags&131072&&(Qe=!0);else return n.lanes=e.lanes,Xt(e,n,s)}return Sl(e,n,r,i,s)}function am(e,n,r){var i=n.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Nr,rt),rt|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,de(Nr,rt),rt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,de(Nr,rt),rt|=i}else a!==null?(i=a.baseLanes|r,n.memoizedState=null):i=r,de(Nr,rt),rt|=i;return _e(e,n,s,r),n.child}function om(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Sl(e,n,r,i,s){var a=Je(r)?Kn:$e.current;return a=Ir(n,a),Pr(n,s),r=Mc(e,n,r,i,a,s),i=zc(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Xt(e,n,s)):(pe&&i&&jc(n),n.flags|=1,_e(e,n,r,s),n.child)}function lh(e,n,r,i,s){if(Je(r)){var a=!0;ca(n)}else a=!1;if(Pr(n,s),n.stateNode===null)$s(e,n),nm(n,r,i),kl(n,r,i,s),i=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var c=o.context,h=r.contextType;typeof h=="object"&&h!==null?h=xt(h):(h=Je(r)?Kn:$e.current,h=Ir(n,h));var d=r.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==h)&&nh(n,o,i,h),ln=!1;var p=n.memoizedState;o.state=p,ma(n,i,o,s),c=n.memoizedState,l!==i||p!==c||Ze.current||ln?(typeof d=="function"&&(Al(n,r,d,i),c=n.memoizedState),(l=ln||th(n,r,l,i,p,c,h))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=c),o.props=i,o.state=c,o.context=h,i=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{o=n.stateNode,zp(e,n),l=n.memoizedProps,h=n.type===n.elementType?l:bt(n.type,l),o.props=h,u=n.pendingProps,p=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=xt(c):(c=Je(r)?Kn:$e.current,c=Ir(n,c));var g=r.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||p!==c)&&nh(n,o,i,c),ln=!1,p=n.memoizedState,o.state=p,ma(n,i,o,s);var b=n.memoizedState;l!==u||p!==b||Ze.current||ln?(typeof g=="function"&&(Al(n,r,g,i),b=n.memoizedState),(h=ln||th(n,r,h,i,p,b,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,b,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,b,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=b),o.props=i,o.state=b,o.context=c,i=h):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),i=!1)}return Cl(e,n,r,i,a,s)}function Cl(e,n,r,i,s,a){om(e,n);var o=(n.flags&128)!==0;if(!i&&!o)return s&&qd(n,r,!1),Xt(e,n,a);i=n.stateNode,Kx.current=n;var l=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&o?(n.child=Dr(n,e.child,null,a),n.child=Dr(n,null,l,a)):_e(e,n,l,a),n.memoizedState=i.state,s&&qd(n,r,!0),n.child}function lm(e){var n=e.stateNode;n.pendingContext?Vd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vd(e,n.context,!1),Pc(e,n.containerInfo)}function ch(e,n,r,i,s){return Br(),kc(s),n.flags|=256,_e(e,n,r,i),n.child}var El={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function cm(e,n,r){var i=n.pendingProps,s=fe.current,a=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),de(fe,s&1),e===null)return bl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=i.children,e=i.fallback,a?(i=n.mode,a=n.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Fa(o,i,0,null),e=Gn(e,i,r,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Rl(r),n.memoizedState=El,e):Dc(n,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Yx(e,n,o,i,l,s,r);if(a){a=i.fallback,o=n.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&n.child!==s?(i=n.child,i.childLanes=0,i.pendingProps=c,n.deletions=null):(i=jn(s,c),i.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=jn(l,a):(a=Gn(a,o,r,null),a.flags|=2),a.return=n,i.return=n,i.sibling=a,n.child=i,i=a,a=n.child,o=e.child.memoizedState,o=o===null?Rl(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,n.memoizedState=El,i}return a=e.child,e=a.sibling,i=jn(a,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=r),i.return=n,i.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=i,n.memoizedState=null,i}function Dc(e,n){return n=Fa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ns(e,n,r,i){return i!==null&&kc(i),Dr(n,e.child,null,r),e=Dc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Yx(e,n,r,i,s,a,o){if(r)return n.flags&256?(n.flags&=-257,i=vo(Error(B(422))),Ns(e,n,o,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=i.fallback,s=n.mode,i=Fa({mode:"visible",children:i.children},s,0,null),a=Gn(a,s,o,null),a.flags|=2,i.return=n,a.return=n,i.sibling=a,n.child=i,n.mode&1&&Dr(n,e.child,null,o),n.child.memoizedState=Rl(o),n.memoizedState=El,a);if(!(n.mode&1))return Ns(e,n,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(B(419)),i=vo(a,i,void 0),Ns(e,n,o,i)}if(l=(o&e.childLanes)!==0,Qe||l){if(i=Oe,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Yt(e,s),Nt(i,e,s,-1))}return _c(),i=vo(Error(B(421))),Ns(e,n,o,i)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=l1.bind(null,e),s._reactRetry=n,null):(e=a.treeContext,st=wn(s.nextSibling),at=n,pe=!0,At=null,e!==null&&(pt[mt++]=Ht,pt[mt++]=$t,pt[mt++]=Yn,Ht=e.id,$t=e.overflow,Yn=n),n=Dc(n,i.children),n.flags|=4096,n)}function dh(e,n,r){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),jl(e.return,n,r)}function bo(e,n,r,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=s)}function dm(e,n,r){var i=n.pendingProps,s=i.revealOrder,a=i.tail;if(_e(e,n,i.children,r),i=fe.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dh(e,r,n);else if(e.tag===19)dh(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(de(fe,i),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(r=n.child,s=null;r!==null;)e=r.alternate,e!==null&&fa(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=n.child,n.child=null):(s=r.sibling,r.sibling=null),bo(n,!1,s,r,a);break;case"backwards":for(r=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&fa(e)===null){n.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}bo(n,!0,r,null,a);break;case"together":bo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $s(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xt(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Qn|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(B(153));if(n.child!==null){for(e=n.child,r=jn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=jn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Xx(e,n,r){switch(n.tag){case 3:lm(n),Br();break;case 5:Ip(n);break;case 1:Je(n.type)&&ca(n);break;case 4:Pc(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,s=n.memoizedProps.value;de(ua,i._currentValue),i._currentValue=s;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(de(fe,fe.current&1),n.flags|=128,null):r&n.child.childLanes?cm(e,n,r):(de(fe,fe.current&1),e=Xt(e,n,r),e!==null?e.sibling:null);de(fe,fe.current&1);break;case 19:if(i=(r&n.childLanes)!==0,e.flags&128){if(i)return dm(e,n,r);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),de(fe,fe.current),i)break;return null;case 22:case 23:return n.lanes=0,am(e,n,r)}return Xt(e,n,r)}var hm,Pl,um,pm;hm=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Pl=function(){};um=function(e,n,r,i){var s=e.memoizedProps;if(s!==i){e=n.stateNode,Hn(It.current);var a=null;switch(r){case"input":s=Zo(e,s),i=Zo(e,i),a=[];break;case"select":s=xe({},s,{value:void 0}),i=xe({},i,{value:void 0}),a=[];break;case"textarea":s=tl(e,s),i=tl(e,i),a=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=oa)}rl(r,i);var o;r=null;for(h in s)if(!i.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Pi.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in i){var c=i[h];if(l=s!=null?s[h]:void 0,i.hasOwnProperty(h)&&c!==l&&(c!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(a||(a=[]),a.push(h,r)),r=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&he("scroll",e),a||l===c||(a=[])):(a=a||[]).push(h,c))}r&&(a=a||[]).push("style",r);var h=a;(n.updateQueue=h)&&(n.flags|=4)}};pm=function(e,n,r,i){r!==i&&(n.flags|=4)};function oi(e,n){if(!pe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(n)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,n}function Qx(e,n,r){var i=n.pendingProps;switch(Ac(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(n),null;case 1:return Je(n.type)&&la(),Fe(n),null;case 3:return i=n.stateNode,Fr(),ue(Ze),ue($e),Oc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(As(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,At!==null&&(Dl(At),At=null))),Pl(e,n),Fe(n),null;case 5:Tc(n);var s=Hn(Hi.current);if(r=n.type,e!==null&&n.stateNode!=null)um(e,n,r,i,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(B(166));return Fe(n),null}if(e=Hn(It.current),As(n)){i=n.stateNode,r=n.type;var a=n.memoizedProps;switch(i[Mt]=n,i[Wi]=a,e=(n.mode&1)!==0,r){case"dialog":he("cancel",i),he("close",i);break;case"iframe":case"object":case"embed":he("load",i);break;case"video":case"audio":for(s=0;s<yi.length;s++)he(yi[s],i);break;case"source":he("error",i);break;case"img":case"image":case"link":he("error",i),he("load",i);break;case"details":he("toggle",i);break;case"input":yd(i,a),he("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},he("invalid",i);break;case"textarea":bd(i,a),he("invalid",i)}rl(r,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&js(i.textContent,l,e),s=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&js(i.textContent,l,e),s=["children",""+l]):Pi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",i)}switch(r){case"input":ms(i),vd(i,a,!0);break;case"textarea":ms(i),jd(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=oa)}i=s,n.updateQueue=i,i!==null&&(n.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(r,{is:i.is}):(e=o.createElement(r),r==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,r),e[Mt]=n,e[Wi]=i,hm(e,n,!1,!1),n.stateNode=e;e:{switch(o=il(r,i),r){case"dialog":he("cancel",e),he("close",e),s=i;break;case"iframe":case"object":case"embed":he("load",e),s=i;break;case"video":case"audio":for(s=0;s<yi.length;s++)he(yi[s],e);s=i;break;case"source":he("error",e),s=i;break;case"img":case"image":case"link":he("error",e),he("load",e),s=i;break;case"details":he("toggle",e),s=i;break;case"input":yd(e,i),s=Zo(e,i),he("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=xe({},i,{value:void 0}),he("invalid",e);break;case"textarea":bd(e,i),s=tl(e,i),he("invalid",e);break;default:s=i}rl(r,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?_u(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Hu(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ti(e,c):typeof c=="number"&&Ti(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Pi.hasOwnProperty(a)?c!=null&&a==="onScroll"&&he("scroll",e):c!=null&&lc(e,a,c,o))}switch(r){case"input":ms(e),vd(e,i,!1);break;case"textarea":ms(e),jd(e);break;case"option":i.value!=null&&e.setAttribute("value",""+kn(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Sr(e,!!i.multiple,a,!1):i.defaultValue!=null&&Sr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=oa)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Fe(n),null;case 6:if(e&&n.stateNode!=null)pm(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(B(166));if(r=Hn(Hi.current),Hn(It.current),As(n)){if(i=n.stateNode,r=n.memoizedProps,i[Mt]=n,(a=i.nodeValue!==r)&&(e=at,e!==null))switch(e.tag){case 3:js(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&js(i.nodeValue,r,(e.mode&1)!==0)}a&&(n.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Mt]=n,n.stateNode=i}return Fe(n),null;case 13:if(ue(fe),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&st!==null&&n.mode&1&&!(n.flags&128))Tp(),Br(),n.flags|=98560,a=!1;else if(a=As(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(B(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(B(317));a[Mt]=n}else Br(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Fe(n),a=!1}else At!==null&&(Dl(At),At=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||fe.current&1?Ce===0&&(Ce=3):_c())),n.updateQueue!==null&&(n.flags|=4),Fe(n),null);case 4:return Fr(),Pl(e,n),e===null&&Di(n.stateNode.containerInfo),Fe(n),null;case 10:return Cc(n.type._context),Fe(n),null;case 17:return Je(n.type)&&la(),Fe(n),null;case 19:if(ue(fe),a=n.memoizedState,a===null)return Fe(n),null;if(i=(n.flags&128)!==0,o=a.rendering,o===null)if(i)oi(a,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=fa(e),o!==null){for(n.flags|=128,oi(a,!1),i=o.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=r,r=n.child;r!==null;)a=r,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(fe,fe.current&1|2),n.child}e=e.sibling}a.tail!==null&&ve()>Ur&&(n.flags|=128,i=!0,oi(a,!1),n.lanes=4194304)}else{if(!i)if(e=fa(o),e!==null){if(n.flags|=128,i=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),oi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!pe)return Fe(n),null}else 2*ve()-a.renderingStartTime>Ur&&r!==1073741824&&(n.flags|=128,i=!0,oi(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(r=a.last,r!==null?r.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=ve(),n.sibling=null,r=fe.current,de(fe,i?r&1|2:r&1),n):(Fe(n),null);case 22:case 23:return $c(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?rt&1073741824&&(Fe(n),n.subtreeFlags&6&&(n.flags|=8192)):Fe(n),null;case 24:return null;case 25:return null}throw Error(B(156,n.tag))}function Zx(e,n){switch(Ac(n),n.tag){case 1:return Je(n.type)&&la(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fr(),ue(Ze),ue($e),Oc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Tc(n),null;case 13:if(ue(fe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(B(340));Br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ue(fe),null;case 4:return Fr(),null;case 10:return Cc(n.type._context),null;case 22:case 23:return $c(),null;case 24:return null;default:return null}}var Ss=!1,Ue=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,$=null;function kr(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){we(e,n,i)}else r.current=null}function Tl(e,n,r){try{r()}catch(i){we(e,n,i)}}var hh=!1;function e1(e,n){if(ml=ia,e=wp(),bc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,h=0,d=0,u=e,p=null;t:for(;;){for(var g;u!==r||s!==0&&u.nodeType!==3||(l=o+s),u!==a||i!==0&&u.nodeType!==3||(c=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)p=u,u=g;for(;;){if(u===e)break t;if(p===r&&++h===s&&(l=o),p===a&&++d===i&&(c=o),(g=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=g}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(fl={focusedElem:e,selectionRange:r},ia=!1,$=n;$!==null;)if(n=$,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$=e;else for(;$!==null;){n=$;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,P=b.memoizedState,f=n.stateNode,m=f.getSnapshotBeforeUpdate(n.elementType===n.type?k:bt(n.type,k),P);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=n.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){we(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,$=e;break}$=n.return}return b=hh,hh=!1,b}function Si(e,n,r){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Tl(n,r,a)}s=s.next}while(s!==i)}}function Ba(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==n)}}function Ol(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function mm(e){var n=e.alternate;n!==null&&(e.alternate=null,mm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mt],delete n[Wi],delete n[wl],delete n[Ix],delete n[Bx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fm(e){return e.tag===5||e.tag===3||e.tag===4}function uh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=oa));else if(i!==4&&(e=e.child,e!==null))for(Ll(e,n,r),e=e.sibling;e!==null;)Ll(e,n,r),e=e.sibling}function Ml(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ml(e,n,r),e=e.sibling;e!==null;)Ml(e,n,r),e=e.sibling}var Me=null,jt=!1;function rn(e,n,r){for(r=r.child;r!==null;)gm(e,n,r),r=r.sibling}function gm(e,n,r){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Ra,r)}catch{}switch(r.tag){case 5:Ue||kr(r,n);case 6:var i=Me,s=jt;Me=null,rn(e,n,r),Me=i,jt=s,Me!==null&&(jt?(e=Me,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Me.removeChild(r.stateNode));break;case 18:Me!==null&&(jt?(e=Me,r=r.stateNode,e.nodeType===8?mo(e.parentNode,r):e.nodeType===1&&mo(e,r),zi(e)):mo(Me,r.stateNode));break;case 4:i=Me,s=jt,Me=r.stateNode.containerInfo,jt=!0,rn(e,n,r),Me=i,jt=s;break;case 0:case 11:case 14:case 15:if(!Ue&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Tl(r,n,o),s=s.next}while(s!==i)}rn(e,n,r);break;case 1:if(!Ue&&(kr(r,n),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){we(r,n,l)}rn(e,n,r);break;case 21:rn(e,n,r);break;case 22:r.mode&1?(Ue=(i=Ue)||r.memoizedState!==null,rn(e,n,r),Ue=i):rn(e,n,r);break;default:rn(e,n,r)}}function ph(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Jx),n.forEach(function(i){var s=c1.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function vt(e,n){var r=n.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var a=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,jt=!1;break e;case 3:Me=l.stateNode.containerInfo,jt=!0;break e;case 4:Me=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if(Me===null)throw Error(B(160));gm(a,o,s),Me=null,jt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(h){we(s,n,h)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xm(n,e),n=n.sibling}function xm(e,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(n,e),Pt(e),i&4){try{Si(3,e,e.return),Ba(3,e)}catch(k){we(e,e.return,k)}try{Si(5,e,e.return)}catch(k){we(e,e.return,k)}}break;case 1:vt(n,e),Pt(e),i&512&&r!==null&&kr(r,r.return);break;case 5:if(vt(n,e),Pt(e),i&512&&r!==null&&kr(r,r.return),e.flags&32){var s=e.stateNode;try{Ti(s,"")}catch(k){we(e,e.return,k)}}if(i&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Fu(s,a),il(l,o);var h=il(l,a);for(o=0;o<c.length;o+=2){var d=c[o],u=c[o+1];d==="style"?_u(s,u):d==="dangerouslySetInnerHTML"?Hu(s,u):d==="children"?Ti(s,u):lc(s,d,u,h)}switch(l){case"input":Jo(s,a);break;case"textarea":Wu(s,a);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Sr(s,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?Sr(s,!!a.multiple,a.defaultValue,!0):Sr(s,!!a.multiple,a.multiple?[]:"",!1))}s[Wi]=a}catch(k){we(e,e.return,k)}}break;case 6:if(vt(n,e),Pt(e),i&4){if(e.stateNode===null)throw Error(B(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(k){we(e,e.return,k)}}break;case 3:if(vt(n,e),Pt(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{zi(n.containerInfo)}catch(k){we(e,e.return,k)}break;case 4:vt(n,e),Pt(e);break;case 13:vt(n,e),Pt(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Uc=ve())),i&4&&ph(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Ue=(h=Ue)||d,vt(n,e),Ue=h):vt(n,e),Pt(e),i&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(u=$=d;$!==null;){switch(p=$,g=p.child,p.tag){case 0:case 11:case 14:case 15:Si(4,p,p.return);break;case 1:kr(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){i=p,r=p.return;try{n=i,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(k){we(i,r,k)}}break;case 5:kr(p,p.return);break;case 22:if(p.memoizedState!==null){fh(u);continue}}g!==null?(g.return=p,$=g):fh(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{s=u.stateNode,h?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=u.stateNode,c=u.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=$u("display",o))}catch(k){we(e,e.return,k)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=h?"":u.memoizedProps}catch(k){we(e,e.return,k)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:vt(n,e),Pt(e),i&4&&ph(e);break;case 21:break;default:vt(n,e),Pt(e)}}function Pt(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(fm(r)){var i=r;break e}r=r.return}throw Error(B(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ti(s,""),i.flags&=-33);var a=uh(e);Ml(e,a,s);break;case 3:case 4:var o=i.stateNode.containerInfo,l=uh(e);Ll(e,l,o);break;default:throw Error(B(161))}}catch(c){we(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function t1(e,n,r){$=e,wm(e)}function wm(e,n,r){for(var i=(e.mode&1)!==0;$!==null;){var s=$,a=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||Ss;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Ue;l=Ss;var h=Ue;if(Ss=o,(Ue=c)&&!h)for($=s;$!==null;)o=$,c=o.child,o.tag===22&&o.memoizedState!==null?gh(s):c!==null?(c.return=o,$=c):gh(s);for(;a!==null;)$=a,wm(a),a=a.sibling;$=s,Ss=l,Ue=h}mh(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,$=a):mh(e)}}function mh(e){for(;$!==null;){var n=$;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ue||Ba(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!Ue)if(r===null)i.componentDidMount();else{var s=n.elementType===n.type?r.memoizedProps:bt(n.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Zd(n,a,i);break;case 3:var o=n.updateQueue;if(o!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Zd(n,o,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var h=n.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&zi(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ue||n.flags&512&&Ol(n)}catch(p){we(n,n.return,p)}}if(n===e){$=null;break}if(r=n.sibling,r!==null){r.return=n.return,$=r;break}$=n.return}}function fh(e){for(;$!==null;){var n=$;if(n===e){$=null;break}var r=n.sibling;if(r!==null){r.return=n.return,$=r;break}$=n.return}}function gh(e){for(;$!==null;){var n=$;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Ba(4,n)}catch(c){we(n,r,c)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var s=n.return;try{i.componentDidMount()}catch(c){we(n,s,c)}}var a=n.return;try{Ol(n)}catch(c){we(n,a,c)}break;case 5:var o=n.return;try{Ol(n)}catch(c){we(n,o,c)}}}catch(c){we(n,n.return,c)}if(n===e){$=null;break}var l=n.sibling;if(l!==null){l.return=n.return,$=l;break}$=n.return}}var n1=Math.ceil,wa=Jt.ReactCurrentDispatcher,Fc=Jt.ReactCurrentOwner,gt=Jt.ReactCurrentBatchConfig,ne=0,Oe=null,ke=null,Ie=0,rt=0,Nr=En(0),Ce=0,Vi=null,Qn=0,Da=0,Wc=0,Ci=null,Ye=null,Uc=0,Ur=1/0,Ft=null,ya=!1,zl=null,vn=null,Cs=!1,un=null,va=0,Ei=0,Il=null,_s=-1,Gs=0;function Ge(){return ne&6?ve():_s!==-1?_s:_s=ve()}function bn(e){return e.mode&1?ne&2&&Ie!==0?Ie&-Ie:Fx.transition!==null?(Gs===0&&(Gs=np()),Gs):(e=le,e!==0||(e=window.event,e=e===void 0?16:cp(e.type)),e):1}function Nt(e,n,r,i){if(50<Ei)throw Ei=0,Il=null,Error(B(185));rs(e,r,i),(!(ne&2)||e!==Oe)&&(e===Oe&&(!(ne&2)&&(Da|=r),Ce===4&&dn(e,Ie)),et(e,i),r===1&&ne===0&&!(n.mode&1)&&(Ur=ve()+500,Ma&&Rn()))}function et(e,n){var r=e.callbackNode;Fg(e,n);var i=ra(e,e===Oe?Ie:0);if(i===0)r!==null&&Nd(r),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(r!=null&&Nd(r),n===1)e.tag===0?Dx(xh.bind(null,e)):Ep(xh.bind(null,e)),Mx(function(){!(ne&6)&&Rn()}),r=null;else{switch(rp(i)){case 1:r=pc;break;case 4:r=ep;break;case 16:r=na;break;case 536870912:r=tp;break;default:r=na}r=Sm(r,ym.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function ym(e,n){if(_s=-1,Gs=0,ne&6)throw Error(B(327));var r=e.callbackNode;if(Tr()&&e.callbackNode!==r)return null;var i=ra(e,e===Oe?Ie:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=ba(e,i);else{n=i;var s=ne;ne|=2;var a=bm();(Oe!==e||Ie!==n)&&(Ft=null,Ur=ve()+500,_n(e,n));do try{s1();break}catch(l){vm(e,l)}while(!0);Sc(),wa.current=a,ne=s,ke!==null?n=0:(Oe=null,Ie=0,n=Ce)}if(n!==0){if(n===2&&(s=cl(e),s!==0&&(i=s,n=Bl(e,s))),n===1)throw r=Vi,_n(e,0),dn(e,i),et(e,ve()),r;if(n===6)dn(e,i);else{if(s=e.current.alternate,!(i&30)&&!r1(s)&&(n=ba(e,i),n===2&&(a=cl(e),a!==0&&(i=a,n=Bl(e,a))),n===1))throw r=Vi,_n(e,0),dn(e,i),et(e,ve()),r;switch(e.finishedWork=s,e.finishedLanes=i,n){case 0:case 1:throw Error(B(345));case 2:Fn(e,Ye,Ft);break;case 3:if(dn(e,i),(i&130023424)===i&&(n=Uc+500-ve(),10<n)){if(ra(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){Ge(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xl(Fn.bind(null,e,Ye,Ft),n);break}Fn(e,Ye,Ft);break;case 4:if(dn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,s=-1;0<i;){var o=31-kt(i);a=1<<o,o=n[o],o>s&&(s=o),i&=~a}if(i=s,i=ve()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*n1(i/1960))-i,10<i){e.timeoutHandle=xl(Fn.bind(null,e,Ye,Ft),i);break}Fn(e,Ye,Ft);break;case 5:Fn(e,Ye,Ft);break;default:throw Error(B(329))}}}return et(e,ve()),e.callbackNode===r?ym.bind(null,e):null}function Bl(e,n){var r=Ci;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=ba(e,n),e!==2&&(n=Ye,Ye=r,n!==null&&Dl(n)),e}function Dl(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function r1(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],a=s.getSnapshot;s=s.value;try{if(!Ct(a(),s))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~Wc,n&=~Da,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-kt(n),i=1<<r;e[r]=-1,n&=~i}}function xh(e){if(ne&6)throw Error(B(327));Tr();var n=ra(e,0);if(!(n&1))return et(e,ve()),null;var r=ba(e,n);if(e.tag!==0&&r===2){var i=cl(e);i!==0&&(n=i,r=Bl(e,i))}if(r===1)throw r=Vi,_n(e,0),dn(e,n),et(e,ve()),r;if(r===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Fn(e,Ye,Ft),et(e,ve()),null}function Hc(e,n){var r=ne;ne|=1;try{return e(n)}finally{ne=r,ne===0&&(Ur=ve()+500,Ma&&Rn())}}function Zn(e){un!==null&&un.tag===0&&!(ne&6)&&Tr();var n=ne;ne|=1;var r=gt.transition,i=le;try{if(gt.transition=null,le=1,e)return e()}finally{le=i,gt.transition=r,ne=n,!(ne&6)&&Rn()}}function $c(){rt=Nr.current,ue(Nr)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Lx(r)),ke!==null)for(r=ke.return;r!==null;){var i=r;switch(Ac(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&la();break;case 3:Fr(),ue(Ze),ue($e),Oc();break;case 5:Tc(i);break;case 4:Fr();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:Cc(i.type._context);break;case 22:case 23:$c()}r=r.return}if(Oe=e,ke=e=jn(e.current,null),Ie=rt=n,Ce=0,Vi=null,Wc=Da=Qn=0,Ye=Ci=null,Un!==null){for(n=0;n<Un.length;n++)if(r=Un[n],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=s,i.next=o}r.pending=i}Un=null}return e}function vm(e,n){do{var r=ke;try{if(Sc(),Us.current=xa,ga){for(var i=ge.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}ga=!1}if(Xn=0,Pe=Se=ge=null,Ni=!1,$i=0,Fc.current=null,r===null||r.return===null){Ce=1,Vi=n,ke=null;break}e:{var a=e,o=r.return,l=r,c=n;if(n=Ie,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,d=l,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=ih(o);if(g!==null){g.flags&=-257,sh(g,o,l,a,n),g.mode&1&&rh(a,h,n),n=g,c=h;var b=n.updateQueue;if(b===null){var k=new Set;k.add(c),n.updateQueue=k}else b.add(c);break e}else{if(!(n&1)){rh(a,h,n),_c();break e}c=Error(B(426))}}else if(pe&&l.mode&1){var P=ih(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),sh(P,o,l,a,n),kc(Wr(c,l));break e}}a=c=Wr(c,l),Ce!==4&&(Ce=2),Ci===null?Ci=[a]:Ci.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var f=rm(a,c,n);Qd(a,f);break e;case 1:l=c;var m=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vn===null||!vn.has(x)))){a.flags|=65536,n&=-n,a.lanes|=n;var N=im(a,l,n);Qd(a,N);break e}}a=a.return}while(a!==null)}Am(r)}catch(w){n=w,ke===r&&r!==null&&(ke=r=r.return);continue}break}while(!0)}function bm(){var e=wa.current;return wa.current=xa,e===null?xa:e}function _c(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Oe===null||!(Qn&268435455)&&!(Da&268435455)||dn(Oe,Ie)}function ba(e,n){var r=ne;ne|=2;var i=bm();(Oe!==e||Ie!==n)&&(Ft=null,_n(e,n));do try{i1();break}catch(s){vm(e,s)}while(!0);if(Sc(),ne=r,wa.current=i,ke!==null)throw Error(B(261));return Oe=null,Ie=0,Ce}function i1(){for(;ke!==null;)jm(ke)}function s1(){for(;ke!==null&&!Pg();)jm(ke)}function jm(e){var n=Nm(e.alternate,e,rt);e.memoizedProps=e.pendingProps,n===null?Am(e):ke=n,Fc.current=null}function Am(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=Zx(r,n),r!==null){r.flags&=32767,ke=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ke=null;return}}else if(r=Qx(r,n,rt),r!==null){ke=r;return}if(n=n.sibling,n!==null){ke=n;return}ke=n=e}while(n!==null);Ce===0&&(Ce=5)}function Fn(e,n,r){var i=le,s=gt.transition;try{gt.transition=null,le=1,a1(e,n,r,i)}finally{gt.transition=s,le=i}return null}function a1(e,n,r,i){do Tr();while(un!==null);if(ne&6)throw Error(B(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Wg(e,a),e===Oe&&(ke=Oe=null,Ie=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Cs||(Cs=!0,Sm(na,function(){return Tr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=gt.transition,gt.transition=null;var o=le;le=1;var l=ne;ne|=4,Fc.current=null,e1(e,r),xm(r,e),Sx(fl),ia=!!ml,fl=ml=null,e.current=r,t1(r),Tg(),ne=l,le=o,gt.transition=a}else e.current=r;if(Cs&&(Cs=!1,un=e,va=s),a=e.pendingLanes,a===0&&(vn=null),Mg(r.stateNode),et(e,ve()),n!==null)for(i=e.onRecoverableError,r=0;r<n.length;r++)s=n[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(ya)throw ya=!1,e=zl,zl=null,e;return va&1&&e.tag!==0&&Tr(),a=e.pendingLanes,a&1?e===Il?Ei++:(Ei=0,Il=e):Ei=0,Rn(),null}function Tr(){if(un!==null){var e=rp(va),n=gt.transition,r=le;try{if(gt.transition=null,le=16>e?16:e,un===null)var i=!1;else{if(e=un,un=null,va=0,ne&6)throw Error(B(331));var s=ne;for(ne|=4,$=e.current;$!==null;){var a=$,o=a.child;if($.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var h=l[c];for($=h;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:Si(8,d,a)}var u=d.child;if(u!==null)u.return=d,$=u;else for(;$!==null;){d=$;var p=d.sibling,g=d.return;if(mm(d),d===h){$=null;break}if(p!==null){p.return=g,$=p;break}$=g}}}var b=a.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}$=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,$=o;else e:for(;$!==null;){if(a=$,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Si(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,$=f;break e}$=a.return}}var m=e.current;for($=m;$!==null;){o=$;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,$=x;else e:for(o=m;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ba(9,l)}}catch(w){we(l,l.return,w)}if(l===o){$=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,$=N;break e}$=l.return}}if(ne=s,Rn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Ra,e)}catch{}i=!0}return i}finally{le=r,gt.transition=n}}return!1}function wh(e,n,r){n=Wr(r,n),n=rm(e,n,1),e=yn(e,n,1),n=Ge(),e!==null&&(rs(e,1,n),et(e,n))}function we(e,n,r){if(e.tag===3)wh(e,e,r);else for(;n!==null;){if(n.tag===3){wh(n,e,r);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vn===null||!vn.has(i))){e=Wr(r,e),e=im(n,e,1),n=yn(n,e,1),e=Ge(),n!==null&&(rs(n,1,e),et(n,e));break}}n=n.return}}function o1(e,n,r){var i=e.pingCache;i!==null&&i.delete(n),n=Ge(),e.pingedLanes|=e.suspendedLanes&r,Oe===e&&(Ie&r)===r&&(Ce===4||Ce===3&&(Ie&130023424)===Ie&&500>ve()-Uc?_n(e,0):Wc|=r),et(e,n)}function km(e,n){n===0&&(e.mode&1?(n=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):n=1);var r=Ge();e=Yt(e,n),e!==null&&(rs(e,n,r),et(e,r))}function l1(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),km(e,r)}function c1(e,n){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(B(314))}i!==null&&i.delete(n),km(e,r)}var Nm;Nm=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ze.current)Qe=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return Qe=!1,Xx(e,n,r);Qe=!!(e.flags&131072)}else Qe=!1,pe&&n.flags&1048576&&Rp(n,ha,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;$s(e,n),e=n.pendingProps;var s=Ir(n,$e.current);Pr(n,r),s=Mc(null,n,i,e,s,r);var a=zc();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Je(i)?(a=!0,ca(n)):a=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Rc(n),s.updater=Ia,n.stateNode=s,s._reactInternals=n,kl(n,i,e,r),n=Cl(null,n,i,!0,a,r)):(n.tag=0,pe&&a&&jc(n),_e(null,n,s,r),n=n.child),n;case 16:i=n.elementType;e:{switch($s(e,n),e=n.pendingProps,s=i._init,i=s(i._payload),n.type=i,s=n.tag=h1(i),e=bt(i,e),s){case 0:n=Sl(null,n,i,e,r);break e;case 1:n=lh(null,n,i,e,r);break e;case 11:n=ah(null,n,i,e,r);break e;case 14:n=oh(null,n,i,bt(i.type,e),r);break e}throw Error(B(306,i,""))}return n;case 0:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:bt(i,s),Sl(e,n,i,s,r);case 1:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:bt(i,s),lh(e,n,i,s,r);case 3:e:{if(lm(n),e===null)throw Error(B(387));i=n.pendingProps,a=n.memoizedState,s=a.element,zp(e,n),ma(n,i,null,r);var o=n.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){s=Wr(Error(B(423)),n),n=ch(e,n,i,r,s);break e}else if(i!==s){s=Wr(Error(B(424)),n),n=ch(e,n,i,r,s);break e}else for(st=wn(n.stateNode.containerInfo.firstChild),at=n,pe=!0,At=null,r=Lp(n,null,i,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Br(),i===s){n=Xt(e,n,r);break e}_e(e,n,i,r)}n=n.child}return n;case 5:return Ip(n),e===null&&bl(n),i=n.type,s=n.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,gl(i,s)?o=null:a!==null&&gl(i,a)&&(n.flags|=32),om(e,n),_e(e,n,o,r),n.child;case 6:return e===null&&bl(n),null;case 13:return cm(e,n,r);case 4:return Pc(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Dr(n,null,i,r):_e(e,n,i,r),n.child;case 11:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:bt(i,s),ah(e,n,i,s,r);case 7:return _e(e,n,n.pendingProps,r),n.child;case 8:return _e(e,n,n.pendingProps.children,r),n.child;case 12:return _e(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(i=n.type._context,s=n.pendingProps,a=n.memoizedProps,o=s.value,de(ua,i._currentValue),i._currentValue=o,a!==null)if(Ct(a.value,o)){if(a.children===s.children&&!Ze.current){n=Xt(e,n,r);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=Gt(-1,r&-r),c.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?c.next=c:(c.next=d.next,d.next=c),h.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),jl(a.return,r,n),l.lanes|=r;break}c=c.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(B(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),jl(o,r,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}_e(e,n,s.children,r),n=n.child}return n;case 9:return s=n.type,i=n.pendingProps.children,Pr(n,r),s=xt(s),i=i(s),n.flags|=1,_e(e,n,i,r),n.child;case 14:return i=n.type,s=bt(i,n.pendingProps),s=bt(i.type,s),oh(e,n,i,s,r);case 15:return sm(e,n,n.type,n.pendingProps,r);case 17:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:bt(i,s),$s(e,n),n.tag=1,Je(i)?(e=!0,ca(n)):e=!1,Pr(n,r),nm(n,i,s),kl(n,i,s,r),Cl(null,n,i,!0,e,r);case 19:return dm(e,n,r);case 22:return am(e,n,r)}throw Error(B(156,n.tag))};function Sm(e,n){return Ju(e,n)}function d1(e,n,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,n,r,i){return new d1(e,n,r,i)}function Gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function h1(e){if(typeof e=="function")return Gc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dc)return 11;if(e===hc)return 14}return 2}function jn(e,n){var r=e.alternate;return r===null?(r=ft(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Vs(e,n,r,i,s,a){var o=2;if(i=e,typeof e=="function")Gc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fr:return Gn(r.children,s,a,n);case cc:o=8,s|=8;break;case Ko:return e=ft(12,r,n,s|2),e.elementType=Ko,e.lanes=a,e;case Yo:return e=ft(13,r,n,s),e.elementType=Yo,e.lanes=a,e;case Xo:return e=ft(19,r,n,s),e.elementType=Xo,e.lanes=a,e;case Iu:return Fa(r,s,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mu:o=10;break e;case zu:o=9;break e;case dc:o=11;break e;case hc:o=14;break e;case on:o=16,i=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return n=ft(o,r,n,s),n.elementType=e,n.type=i,n.lanes=a,n}function Gn(e,n,r,i){return e=ft(7,e,i,n),e.lanes=r,e}function Fa(e,n,r,i){return e=ft(22,e,i,n),e.elementType=Iu,e.lanes=r,e.stateNode={isHidden:!1},e}function jo(e,n,r){return e=ft(6,e,null,n),e.lanes=r,e}function Ao(e,n,r){return n=ft(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function u1(e,n,r,i,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Vc(e,n,r,i,s,a,o,l,c){return e=new u1(e,n,r,l,c),n===1?(n=1,a===!0&&(n|=8)):n=0,a=ft(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(a),e}function p1(e,n,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:i==null?null:""+i,children:e,containerInfo:n,implementation:r}}function Cm(e){if(!e)return Nn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(B(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(B(171))}if(e.tag===1){var r=e.type;if(Je(r))return Cp(e,r,n)}return n}function Em(e,n,r,i,s,a,o,l,c){return e=Vc(r,i,!0,e,s,a,o,l,c),e.context=Cm(null),r=e.current,i=Ge(),s=bn(r),a=Gt(i,s),a.callback=n??null,yn(r,a,s),e.current.lanes=s,rs(e,s,i),et(e,i),e}function Wa(e,n,r,i){var s=n.current,a=Ge(),o=bn(s);return r=Cm(r),n.context===null?n.context=r:n.pendingContext=r,n=Gt(a,o),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=yn(s,n,o),e!==null&&(Nt(e,s,o,a),Ws(e,s,o)),o}function ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function qc(e,n){yh(e,n),(e=e.alternate)&&yh(e,n)}function m1(){return null}var Rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}Ua.prototype.render=Kc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(B(409));Wa(e,n,null,null)};Ua.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zn(function(){Wa(null,e,null,null)}),n[Kt]=null}};function Ua(e){this._internalRoot=e}Ua.prototype.unstable_scheduleHydration=function(e){if(e){var n=ap();e={blockedOn:null,target:e,priority:n};for(var r=0;r<cn.length&&n!==0&&n<cn[r].priority;r++);cn.splice(r,0,e),r===0&&lp(e)}};function Yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vh(){}function f1(e,n,r,i,s){if(s){if(typeof i=="function"){var a=i;i=function(){var h=ja(o);a.call(h)}}var o=Em(n,i,e,0,null,!1,!1,"",vh);return e._reactRootContainer=o,e[Kt]=o.current,Di(e.nodeType===8?e.parentNode:e),Zn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var l=i;i=function(){var h=ja(c);l.call(h)}}var c=Vc(e,0,!1,null,null,!1,!1,"",vh);return e._reactRootContainer=c,e[Kt]=c.current,Di(e.nodeType===8?e.parentNode:e),Zn(function(){Wa(n,c,r,i)}),c}function $a(e,n,r,i,s){var a=r._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=ja(o);l.call(c)}}Wa(n,o,e,s)}else o=f1(r,n,e,s,i);return ja(o)}ip=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=wi(n.pendingLanes);r!==0&&(mc(n,r|1),et(n,ve()),!(ne&6)&&(Ur=ve()+500,Rn()))}break;case 13:Zn(function(){var i=Yt(e,1);if(i!==null){var s=Ge();Nt(i,e,1,s)}}),qc(e,1)}};fc=function(e){if(e.tag===13){var n=Yt(e,134217728);if(n!==null){var r=Ge();Nt(n,e,134217728,r)}qc(e,134217728)}};sp=function(e){if(e.tag===13){var n=bn(e),r=Yt(e,n);if(r!==null){var i=Ge();Nt(r,e,n,i)}qc(e,n)}};ap=function(){return le};op=function(e,n){var r=le;try{return le=e,n()}finally{le=r}};al=function(e,n,r){switch(n){case"input":if(Jo(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var i=r[n];if(i!==e&&i.form===e.form){var s=La(i);if(!s)throw Error(B(90));Du(i),Jo(i,s)}}}break;case"textarea":Wu(e,r);break;case"select":n=r.value,n!=null&&Sr(e,!!r.multiple,n,!1)}};qu=Hc;Ku=Zn;var g1={usingClientEntryPoint:!1,Events:[ss,yr,La,Gu,Vu,Hc]},li={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x1={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qu(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||m1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Ra=Es.inject(x1),zt=Es}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g1;lt.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yc(n))throw Error(B(200));return p1(e,n,null,r)};lt.createRoot=function(e,n){if(!Yc(e))throw Error(B(299));var r=!1,i="",s=Rm;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Vc(e,1,!1,null,null,r,!1,i,s),e[Kt]=n.current,Di(e.nodeType===8?e.parentNode:e),new Kc(n)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Qu(n),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Zn(e)};lt.hydrate=function(e,n,r){if(!Ha(n))throw Error(B(200));return $a(null,e,n,!0,r)};lt.hydrateRoot=function(e,n,r){if(!Yc(e))throw Error(B(405));var i=r!=null&&r.hydratedSources||null,s=!1,a="",o=Rm;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),n=Em(n,null,e,1,r??null,s,!1,a,o),e[Kt]=n.current,Di(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,s]:n.mutableSourceEagerHydrationData.push(r,s);return new Ua(n)};lt.render=function(e,n,r){if(!Ha(n))throw Error(B(200));return $a(null,e,n,!1,r)};lt.unmountComponentAtNode=function(e){if(!Ha(e))throw Error(B(40));return e._reactRootContainer?(Zn(function(){$a(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};lt.unstable_batchedUpdates=Hc;lt.unstable_renderSubtreeIntoContainer=function(e,n,r,i){if(!Ha(r))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return $a(e,n,r,!1,i)};lt.version="18.3.1-next-f1338f8080-20240426";function Pm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pm)}catch(e){console.error(e)}}Pm(),Pu.exports=lt;var w1=Pu.exports,bh=w1;Vo.createRoot=bh.createRoot,Vo.hydrateRoot=bh.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},qi.apply(null,arguments)}var pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pn||(pn={}));const jh="popstate";function y1(e){e===void 0&&(e={});function n(i,s){let{pathname:a,search:o,hash:l}=i.location;return Fl("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:Aa(s)}return b1(n,r,null,e)}function be(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Tm(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function v1(){return Math.random().toString(36).substr(2,8)}function Ah(e,n){return{usr:e.state,key:e.key,idx:n}}function Fl(e,n,r,i){return r===void 0&&(r=null),qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Xr(n):n,{state:r,key:n&&n.key||i||v1()})}function Aa(e){let{pathname:n="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Xr(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function b1(e,n,r,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,o=s.history,l=pn.Pop,c=null,h=d();h==null&&(h=0,o.replaceState(qi({},o.state,{idx:h}),""));function d(){return(o.state||{idx:null}).idx}function u(){l=pn.Pop;let P=d(),f=P==null?null:P-h;h=P,c&&c({action:l,location:k.location,delta:f})}function p(P,f){l=pn.Push;let m=Fl(k.location,P,f);h=d()+1;let x=Ah(m,h),N=k.createHref(m);try{o.pushState(x,"",N)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;s.location.assign(N)}a&&c&&c({action:l,location:k.location,delta:1})}function g(P,f){l=pn.Replace;let m=Fl(k.location,P,f);h=d();let x=Ah(m,h),N=k.createHref(m);o.replaceState(x,"",N),a&&c&&c({action:l,location:k.location,delta:0})}function b(P){let f=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof P=="string"?P:Aa(P);return m=m.replace(/ $/,"%20"),be(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let k={get action(){return l},get location(){return e(s,o)},listen(P){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(jh,u),c=P,()=>{s.removeEventListener(jh,u),c=null}},createHref(P){return n(s,P)},createURL:b,encodeLocation(P){let f=b(P);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:g,go(P){return o.go(P)}};return k}var kh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kh||(kh={}));function j1(e,n,r){return r===void 0&&(r="/"),A1(e,n,r)}function A1(e,n,r,i){let s=typeof n=="string"?Xr(n):n,a=Xc(s.pathname||"/",r);if(a==null)return null;let o=Om(e);k1(o);let l=null,c=I1(a);for(let h=0;l==null&&h<o.length;++h)l=L1(o[h],c);return l}function Om(e,n,r,i){n===void 0&&(n=[]),r===void 0&&(r=[]),i===void 0&&(i="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(be(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let h=An([i,c.relativePath]),d=r.concat(c);a.children&&a.children.length>0&&(be(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Om(a.children,n,d,h)),!(a.path==null&&!a.index)&&n.push({path:h,score:T1(h,a.index),routesMeta:d})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of Lm(a.path))s(a,o,c)}),n}function Lm(e){let n=e.split("/");if(n.length===0)return[];let[r,...i]=n,s=r.endsWith("?"),a=r.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let o=Lm(i.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function k1(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:O1(n.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const N1=/^:[\w-]+$/,S1=3,C1=2,E1=1,R1=10,P1=-2,Nh=e=>e==="*";function T1(e,n){let r=e.split("/"),i=r.length;return r.some(Nh)&&(i+=P1),n&&(i+=C1),r.filter(s=>!Nh(s)).reduce((s,a)=>s+(N1.test(a)?S1:a===""?E1:R1),i)}function O1(e,n){return e.length===n.length&&e.slice(0,-1).every((i,s)=>i===n[s])?e[e.length-1]-n[n.length-1]:0}function L1(e,n,r){let{routesMeta:i}=e,s={},a="/",o=[];for(let l=0;l<i.length;++l){let c=i[l],h=l===i.length-1,d=a==="/"?n:n.slice(a.length)||"/",u=M1({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},d),p=c.route;if(!u)return null;Object.assign(s,u.params),o.push({params:s,pathname:An([a,u.pathname]),pathnameBase:F1(An([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=An([a,u.pathnameBase]))}return o}function M1(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=z1(e.path,e.caseSensitive,e.end),s=n.match(r);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:i.reduce((h,d,u)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let k=l[u]||"";o=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const b=l[u];return g&&!b?h[p]=void 0:h[p]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:o,pattern:e}}function z1(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),Tm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),i]}function I1(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Tm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Xc(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function B1(e,n){n===void 0&&(n="/");let{pathname:r,search:i="",hash:s=""}=typeof e=="string"?Xr(e):e,a;return r?(r=Mm(r),r.startsWith("/")?a=Sh(r.substring(1),"/"):a=Sh(r,n)):a=n,{pathname:a,search:W1(i),hash:U1(s)}}function Sh(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function ko(e,n,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D1(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function Qc(e,n){let r=D1(e);return n?r.map((i,s)=>s===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Zc(e,n,r,i){i===void 0&&(i=!1);let s;typeof e=="string"?s=Xr(e):(s=qi({},e),be(!s.pathname||!s.pathname.includes("?"),ko("?","pathname","search",s)),be(!s.pathname||!s.pathname.includes("#"),ko("#","pathname","hash",s)),be(!s.search||!s.search.includes("#"),ko("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=r;else{let u=n.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),u-=1;s.pathname=p.join("/")}l=u>=0?n[u]:"/"}let c=B1(s,l),h=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(h||d)&&(c.pathname+="/"),c}const Mm=e=>e.replace(/\/\/+/g,"/"),An=e=>Mm(e.join("/")),F1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function H1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zm=["post","put","patch","delete"];new Set(zm);const $1=["get",...zm];new Set($1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ki.apply(null,arguments)}const Jc=v.createContext(null),_1=v.createContext(null),Pn=v.createContext(null),_a=v.createContext(null),en=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Im=v.createContext(null);function G1(e,n){let{relative:r}=n===void 0?{}:n;Qr()||be(!1);let{basename:i,navigator:s}=v.useContext(Pn),{hash:a,pathname:o,search:l}=Dm(e,{relative:r}),c=o;return i!=="/"&&(c=o==="/"?i:An([i,o])),s.createHref({pathname:c,search:l,hash:a})}function Qr(){return v.useContext(_a)!=null}function sr(){return Qr()||be(!1),v.useContext(_a).location}function Bm(e){v.useContext(Pn).static||v.useLayoutEffect(e)}function tn(){let{isDataRoute:e}=v.useContext(en);return e?i0():V1()}function V1(){Qr()||be(!1);let e=v.useContext(Jc),{basename:n,future:r,navigator:i}=v.useContext(Pn),{matches:s}=v.useContext(en),{pathname:a}=sr(),o=JSON.stringify(Qc(s,r.v7_relativeSplatPath)),l=v.useRef(!1);return Bm(()=>{l.current=!0}),v.useCallback(function(h,d){if(d===void 0&&(d={}),!l.current)return;if(typeof h=="number"){i.go(h);return}let u=Zc(h,JSON.parse(o),a,d.relative==="path");e==null&&n!=="/"&&(u.pathname=u.pathname==="/"?n:An([n,u.pathname])),(d.replace?i.replace:i.push)(u,d.state,d)},[n,i,o,a,e])}function Ga(){let{matches:e}=v.useContext(en),n=e[e.length-1];return n?n.params:{}}function Dm(e,n){let{relative:r}=n===void 0?{}:n,{future:i}=v.useContext(Pn),{matches:s}=v.useContext(en),{pathname:a}=sr(),o=JSON.stringify(Qc(s,i.v7_relativeSplatPath));return v.useMemo(()=>Zc(e,JSON.parse(o),a,r==="path"),[e,o,a,r])}function q1(e,n){return K1(e,n)}function K1(e,n,r,i){Qr()||be(!1);let{navigator:s}=v.useContext(Pn),{matches:a}=v.useContext(en),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let h=sr(),d;if(n){var u;let P=typeof n=="string"?Xr(n):n;c==="/"||(u=P.pathname)!=null&&u.startsWith(c)||be(!1),d=P}else d=h;let p=d.pathname||"/",g=p;if(c!=="/"){let P=c.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(P.length).join("/")}let b=j1(e,{pathname:g}),k=J1(b&&b.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:An([c,s.encodeLocation?s.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?c:An([c,s.encodeLocation?s.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),a,r,i);return n&&k?v.createElement(_a.Provider,{value:{location:Ki({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:pn.Pop}},k):k}function Y1(){let e=r0(),n=H1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),r?v.createElement("pre",{style:s},r):null,null)}const X1=v.createElement(Y1,null);class Q1 extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?v.createElement(en.Provider,{value:this.props.routeContext},v.createElement(Im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z1(e){let{routeContext:n,match:r,children:i}=e,s=v.useContext(Jc);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(en.Provider,{value:n},i)}function J1(e,n,r,i){var s;if(n===void 0&&(n=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=i)!=null&&a.v7_partialHydration&&n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(s=r)==null?void 0:s.errors;if(l!=null){let d=o.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);d>=0||be(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,h=-1;if(r&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(h=d),u.route.id){let{loaderData:p,errors:g}=r,b=u.route.loader&&p[u.route.id]===void 0&&(!g||g[u.route.id]===void 0);if(u.route.lazy||b){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((d,u,p)=>{let g,b=!1,k=null,P=null;r&&(g=l&&u.route.id?l[u.route.id]:void 0,k=u.route.errorElement||X1,c&&(h<0&&p===0?(s0("route-fallback"),b=!0,P=null):h===p&&(b=!0,P=u.route.hydrateFallbackElement||null)));let f=n.concat(o.slice(0,p+1)),m=()=>{let x;return g?x=k:b?x=P:u.route.Component?x=v.createElement(u.route.Component,null):u.route.element?x=u.route.element:x=d,v.createElement(Z1,{match:u,routeContext:{outlet:d,matches:f,isDataRoute:r!=null},children:x})};return r&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?v.createElement(Q1,{location:r.location,revalidation:r.revalidation,component:k,error:g,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var Fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fm||{}),Wm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wm||{});function e0(e){let n=v.useContext(Jc);return n||be(!1),n}function t0(e){let n=v.useContext(_1);return n||be(!1),n}function n0(e){let n=v.useContext(en);return n||be(!1),n}function Um(e){let n=n0(),r=n.matches[n.matches.length-1];return r.route.id||be(!1),r.route.id}function r0(){var e;let n=v.useContext(Im),r=t0(),i=Um();return n!==void 0?n:(e=r.errors)==null?void 0:e[i]}function i0(){let{router:e}=e0(Fm.UseNavigateStable),n=Um(Wm.UseNavigateStable),r=v.useRef(!1);return Bm(()=>{r.current=!0}),v.useCallback(function(s,a){a===void 0&&(a={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Ki({fromRouteId:n},a)))},[e,n])}const Ch={};function s0(e,n,r){Ch[e]||(Ch[e]=!0)}function a0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hr(e){let{to:n,replace:r,state:i,relative:s}=e;Qr()||be(!1);let{future:a,static:o}=v.useContext(Pn),{matches:l}=v.useContext(en),{pathname:c}=sr(),h=tn(),d=Zc(n,Qc(l,a.v7_relativeSplatPath),c,s==="path"),u=JSON.stringify(d);return v.useEffect(()=>h(JSON.parse(u),{replace:r,state:i,relative:s}),[h,u,s,r,i]),null}function me(e){be(!1)}function o0(e){let{basename:n="/",children:r=null,location:i,navigationType:s=pn.Pop,navigator:a,static:o=!1,future:l}=e;Qr()&&be(!1);let c=n.replace(/^\/*/,"/"),h=v.useMemo(()=>({basename:c,navigator:a,static:o,future:Ki({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof i=="string"&&(i=Xr(i));let{pathname:d="/",search:u="",hash:p="",state:g=null,key:b="default"}=i,k=v.useMemo(()=>{let P=Xc(d,c);return P==null?null:{location:{pathname:P,search:u,hash:p,state:g,key:b},navigationType:s}},[c,d,u,p,g,b,s]);return k==null?null:v.createElement(Pn.Provider,{value:h},v.createElement(_a.Provider,{children:r,value:k}))}function l0(e){let{children:n,location:r}=e;return q1(Wl(n),r)}new Promise(()=>{});function Wl(e,n){n===void 0&&(n=[]);let r=[];return v.Children.forEach(e,(i,s)=>{if(!v.isValidElement(i))return;let a=[...n,s];if(i.type===v.Fragment){r.push.apply(r,Wl(i.props.children,a));return}i.type!==me&&be(!1),!i.props.index||!i.props.children||be(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Wl(i.props.children,a)),r.push(o)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ul.apply(null,arguments)}function c0(e,n){if(e==null)return{};var r={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.indexOf(i)!==-1)continue;r[i]=e[i]}return r}function d0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function h0(e,n){return e.button===0&&(!n||n==="_self")&&!d0(e)}function Hl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,r)=>{let i=e[r];return n.concat(Array.isArray(i)?i.map(s=>[r,s]):[[r,i]])},[]))}function u0(e,n){let r=Hl(e);return n&&n.forEach((i,s)=>{r.has(s)||n.getAll(s).forEach(a=>{r.append(s,a)})}),r}const p0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],m0="6";try{window.__reactRouterVersion=m0}catch{}const f0="startTransition",Eh=og[f0];function g0(e){let{basename:n,children:r,future:i,window:s}=e,a=v.useRef();a.current==null&&(a.current=y1({window:s,v5Compat:!0}));let o=a.current,[l,c]=v.useState({action:o.action,location:o.location}),{v7_startTransition:h}=i||{},d=v.useCallback(u=>{h&&Eh?Eh(()=>c(u)):c(u)},[c,h]);return v.useLayoutEffect(()=>o.listen(d),[o,d]),v.useEffect(()=>a0(i),[i]),v.createElement(o0,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:o,future:i})}const x0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=v.forwardRef(function(n,r){let{onClick:i,relative:s,reloadDocument:a,replace:o,state:l,target:c,to:h,preventScrollReset:d,viewTransition:u}=n,p=c0(n,p0),{basename:g}=v.useContext(Pn),b,k=!1;if(typeof h=="string"&&w0.test(h)&&(b=h,x0))try{let x=new URL(window.location.href),N=h.startsWith("//")?new URL(x.protocol+h):new URL(h),w=Xc(N.pathname,g);N.origin===x.origin&&w!=null?h=w+N.search+N.hash:k=!0}catch{}let P=G1(h,{relative:s}),f=y0(h,{replace:o,state:l,target:c,preventScrollReset:d,relative:s,viewTransition:u});function m(x){i&&i(x),x.defaultPrevented||f(x)}return v.createElement("a",Ul({},p,{href:b||P,onClick:k||a?i:m,ref:r,target:c}))});var Rh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rh||(Rh={}));var Ph;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ph||(Ph={}));function y0(e,n){let{target:r,replace:i,state:s,preventScrollReset:a,relative:o,viewTransition:l}=n===void 0?{}:n,c=tn(),h=sr(),d=Dm(e,{relative:o});return v.useCallback(u=>{if(h0(u,r)){u.preventDefault();let p=i!==void 0?i:Aa(h)===Aa(d);c(e,{replace:p,state:s,preventScrollReset:a,relative:o,viewTransition:l})}},[h,c,d,i,s,r,e,a,o,l])}function ed(e){let n=v.useRef(Hl(e)),r=v.useRef(!1),i=sr(),s=v.useMemo(()=>u0(i.search,r.current?null:n.current),[i.search]),a=tn(),o=v.useCallback((l,c)=>{const h=Hl(typeof l=="function"?l(s):l);r.current=!0,a("?"+h,c)},[a,s]);return[s,o]}function Hm(e,n){return function(){return e.apply(n,arguments)}}const{toString:v0}=Object.prototype,{getPrototypeOf:Sn}=Object,{iterator:os,toStringTag:$m}=Symbol,Yi=(({hasOwnProperty:e})=>(n,r)=>e.call(n,r))(Object.prototype),_m=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),Gm=(e,n,r)=>e===Object.prototype||!r&&n===null,b0=e=>{if(!Object.isExtensible(e))return!1;const n=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&n.push(...Object.getOwnPropertySymbols(e)),n.every(r=>{if(_m(r))return!1;const i=Object.getOwnPropertyDescriptor(e,r);return!!i&&i.configurable&&i.writable===!0})},Xi=(e,n)=>{let r=e;const i=[];for(;r!=null;){if(i.indexOf(r)!==-1)return!1;i.push(r);const s=Sn(r);if(Gm(r,s,r===e))return!1;if(Yi(r,n))return!0;r=s}return!1},j0=(e,n)=>e!=null&&Xi(e,n)?e[n]:void 0,A0=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const n=Sn(e);if(n===null&&b0(e))return e;const r=Object.create(null),i=Object.create(null),s=[];let a=e;for(;a!=null&&s.indexOf(a)===-1;){s.push(a);const o=a===e?n:Sn(a);if(Gm(a,o,a===e))break;const l=Object.getOwnPropertyNames(a);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(a));for(const c of l)_m(c)||Yi(i,c)||(r[c]=e[c],i[c]=!0);a=o}return r},td=(e=>n=>{const r=v0.call(n);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),yt=e=>(e=e.toLowerCase(),n=>td(n)===e),Va=e=>n=>typeof n===e,{isArray:Jn}=Array,er=Va("undefined");function Zr(e){return e!==null&&!er(e)&&e.constructor!==null&&!er(e.constructor)&&tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Vm=yt("ArrayBuffer");function k0(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Vm(e.buffer),n}const N0=Va("string"),tt=Va("function"),qm=Va("number"),Jr=e=>e!==null&&typeof e=="object",S0=e=>e===!0||e===!1,qs=e=>{if(!Jr(e))return!1;const n=Sn(e);return(n===null||n===Object.prototype||Sn(n)===null)&&!Xi(e,$m)&&!Xi(e,os)},C0=e=>{if(!Jr(e)||Zr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},E0=yt("Date"),R0=yt("File"),P0=e=>!!(e&&typeof e.uri<"u"),T0=e=>e&&typeof e.getParts<"u",O0=yt("Blob"),L0=yt("FileList"),M0=yt("Set"),z0=e=>Jr(e)&&tt(e.pipe);function I0(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Th=I0(),Oh=typeof Th.FormData<"u"?Th.FormData:void 0,B0=e=>{if(!e)return!1;if(Oh&&e instanceof Oh)return!0;const n=Sn(e);if(!n||n===Object.prototype||!tt(e.append))return!1;const r=td(e);return r==="formdata"||r==="object"&&tt(e.toString)&&e.toString()==="[object FormData]"},D0=yt("URLSearchParams"),[F0,W0,U0,H0]=["ReadableStream","Request","Response","Headers"].map(yt),$0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ls(e,n,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),Jn(e))for(i=0,s=e.length;i<s;i++)n.call(null,e[i],i,e);else{if(Zr(e))return;const a=r?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(i=0;i<o;i++)l=a[i],n.call(null,e[l],l,e)}}function Km(e,n){if(Zr(e))return null;n=n.toLowerCase();const r=Object.keys(e);let i=r.length,s;for(;i-- >0;)if(s=r[i],n===s.toLowerCase())return s;return null}const $n=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ym=e=>!er(e)&&e!==$n;function $l(...e){const{caseless:n,skipUndefined:r}=Ym(this)&&this||{},i={},s=(a,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const l=n&&typeof o=="string"&&Km(i,o)||o,c=Yi(i,l)?i[l]:void 0;qs(c)&&qs(a)?i[l]=$l(c,a):qs(a)?i[l]=$l({},a):Jn(a)?i[l]=a.slice():(!r||!er(a))&&(i[l]=a)};for(let a=0,o=e.length;a<o;a++){const l=e[a];if(!l||Zr(l)||(ls(l,s),typeof l!="object"||Jn(l)))continue;const c=Object.getOwnPropertySymbols(l);for(let h=0;h<c.length;h++){const d=c[h];tw.call(l,d)&&s(l[d],d)}}return i}const _0=(e,n,r,{allOwnKeys:i}={})=>(ls(n,(s,a)=>{r&&tt(s)?Object.defineProperty(e,a,{__proto__:null,value:Hm(s,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,a,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),e),G0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),V0=(e,n,r,i)=>{e.prototype=Object.create(n.prototype,i),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:n.prototype}),r&&Object.assign(e.prototype,r)},q0=(e,n,r,i)=>{let s,a,o;const l={};if(n=n||{},e==null)return n;do{for(s=Object.getOwnPropertyNames(e),a=s.length;a-- >0;)o=s[a],(!i||i(o,e,n))&&!l[o]&&(n[o]=e[o],l[o]=!0);e=r!==!1&&Sn(e)}while(e&&(!r||r(e,n))&&e!==Object.prototype);return n},K0=(e,n,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=n.length;const i=e.indexOf(n,r);return i!==-1&&i===r},Y0=e=>{if(!e)return null;if(Jn(e))return e;let n=e.length;if(!qm(n))return null;const r=new Array(n);for(;n-- >0;)r[n]=e[n];return r},X0=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Sn(Uint8Array)),Q0=(e,n)=>{const i=(e&&e[os]).call(e);let s;for(;(s=i.next())&&!s.done;){const a=s.value;n.call(e,a[0],a[1])}},Z0=(e,n)=>{let r;const i=[];for(;(r=e.exec(n))!==null;)i.push(r);return i},J0=yt("HTMLFormElement"),ew=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:tw}=Object.prototype,nw=yt("RegExp"),Xm=(e,n)=>{const r=Object.getOwnPropertyDescriptors(e),i={};ls(r,(s,a)=>{let o;(o=n(s,a,e))!==!1&&(i[a]=o||s)}),Object.defineProperties(e,i)},rw=e=>{Xm(e,(n,r)=>{if(tt(e)&&["arguments","caller","callee"].includes(r))return!1;const i=e[r];if(tt(i)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},iw=(e,n)=>{const r={},i=s=>{s.forEach(a=>{r[a]=!0})};return Jn(e)?i(e):i(String(e).split(n)),r},sw=()=>{},aw=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function ow(e){return!!(e&&tt(e.append)&&e[$m]==="FormData"&&e[os])}const lw=e=>{const n=new WeakSet,r=i=>{if(Jr(i)){if(n.has(i))return;if(Zr(i))return i;if(!("toJSON"in i)){n.add(i);let s;if(M0(i)){s=[];for(const a of i){const o=r(a);!er(o)&&s.push(o)}}else s=Jn(i)?[]:{},ls(i,(a,o)=>{const l=r(a);!er(l)&&(s[o]=l)});return n.delete(i),s}}return i};return r(e)},cw=yt("AsyncFunction"),dw=e=>e&&(Jr(e)||tt(e))&&tt(e.then)&&tt(e.catch),Qm=((e,n)=>e?setImmediate:n?((r,i)=>($n.addEventListener("message",({source:s,data:a})=>{s===$n&&a===r&&i.length&&i.shift()()},!1),s=>{i.push(s),$n.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",tt($n.postMessage)),hw=typeof queueMicrotask<"u"?queueMicrotask.bind($n):typeof process<"u"&&process.nextTick||Qm,Zm=e=>e!=null&&tt(e[os]),uw=e=>e!=null&&Xi(e,os)&&Zm(e),E={isArray:Jn,isArrayBuffer:Vm,isBuffer:Zr,isFormData:B0,isArrayBufferView:k0,isString:N0,isNumber:qm,isBoolean:S0,isObject:Jr,isPlainObject:qs,isEmptyObject:C0,isReadableStream:F0,isRequest:W0,isResponse:U0,isHeaders:H0,isUndefined:er,isDate:E0,isFile:R0,isReactNativeBlob:P0,isReactNative:T0,isBlob:O0,isRegExp:nw,isFunction:tt,isStream:z0,isURLSearchParams:D0,isTypedArray:X0,isFileList:L0,forEach:ls,merge:$l,extend:_0,trim:$0,stripBOM:G0,inherits:V0,toFlatObject:q0,kindOf:td,kindOfTest:yt,endsWith:K0,toArray:Y0,forEachEntry:Q0,matchAll:Z0,isHTMLForm:J0,hasOwnProperty:Yi,hasOwnProp:Yi,hasOwnInPrototypeChain:Xi,getSafeProp:j0,toSafeFlatObject:A0,reduceDescriptors:Xm,freezeMethods:rw,toObjectSet:iw,toCamelCase:ew,noop:sw,toFiniteNumber:aw,findKey:Km,global:$n,isContextDefined:Ym,isSpecCompliantForm:ow,toJSONObject:lw,isAsyncFn:cw,isThenable:dw,setImmediate:Qm,asap:hw,isIterable:Zm,isSafeIterable:uw},pw=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mw=e=>{const n={};let r,i,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),r=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim();const l=E.hasOwnProp(n,r);!r||l&&E.hasOwnProp(pw,r)||(r==="set-cookie"?l?n[r].push(i):n[r]=[i]:n[r]=l?n[r]+", "+i:i)}),n};function fw(e){let n=0,r=e.length;for(;n<r;){const i=e.charCodeAt(n);if(i!==9&&i!==32)break;n+=1}for(;r>n;){const i=e.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return n===0&&r===e.length?e:e.slice(n,r)}const gw=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),xw=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function nd(e,n){return E.isArray(e)?e.map(r=>nd(r,n)):fw(String(e).replace(n,""))}const ww=e=>nd(e,gw),yw=e=>nd(e,xw);function Jm(e){const n=Object.create(null);return E.forEach(e.toJSON(),(r,i)=>{n[i]=yw(r)}),n}const Lh=Symbol("internals");function ci(e){return e&&String(e).trim().toLowerCase()}function Ks(e){return e===!1||e==null?e:E.isArray(e)?e.map(Ks):ww(String(e))}function vw(e){const n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(e);)n[i[1]]=i[2];return n}const bw=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function No(e){let n=0,r=e.length;for(;n<r;){const i=e.charCodeAt(n);if(i!==9&&i!==32)break;n+=1}for(;r>n;){const i=e.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return n===0&&r===e.length?e:e.slice(n,r)}function jw(e){const n=e.length-1;if(n<1||e.charCodeAt(0)!==34||e.charCodeAt(n)!==34)return e;let r="";for(let i=1;i<n;i++){const s=e.charCodeAt(i);if(s===34||s===92&&(i+=1,i>=n))return e;r+=e[i]}return r}function Aw(e){const n=Object.create(null),r=String(e);let i=0,s=!1,a=!1;function o(l){const c=No(r.slice(i,l)),h=c.indexOf("=");if(h<1)return;const d=No(c.slice(0,h));if(!bw.test(d))return;const u=d.toLowerCase();if(u==="__proto__"||u==="constructor"||u==="prototype")return;const p=No(c.slice(h+1));n[u]=jw(p)}for(let l=0;l<r.length;l++){const c=r.charCodeAt(l);s?a?a=!1:c===92?a=!0:c===34&&(s=!1):c===34?s=!0:(c===44||c===59)&&(o(l),i=l+1)}return o(r.length),n}const kw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function So(e,n,r,i,s){if(E.isFunction(i))return i.call(this,n,r);if(s&&(n=r),!!E.isString(n)){if(E.isString(i))return n.indexOf(i)!==-1;if(E.isRegExp(i))return i.test(n)}}function Nw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,r,i)=>r.toUpperCase()+i)}function Sw(e,n){const r=E.toCamelCase(" "+n);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+r,{__proto__:null,value:function(s,a,o){return this[i].call(this,n,s,a,o)},configurable:!0})})}let He=class{constructor(n){n&&this.set(n)}set(n,r,i){const s=this;function a(l,c,h){const d=ci(c);if(!d)return;const u=E.findKey(s,d);(!u||s[u]===void 0||h===!0||h===void 0&&s[u]!==!1)&&(s[u||c]=Ks(l))}const o=(l,c)=>E.forEach(l,(h,d)=>a(h,d,c));if(E.isPlainObject(n)||n instanceof this.constructor)o(n,r);else if(E.isString(n)&&(n=n.trim())&&!kw(n))o(mw(n),r);else if(E.isObject(n)&&E.isSafeIterable(n)){let l=Object.create(null),c,h;for(const d of n){if(!E.isArray(d))throw new TypeError("Object iterator must return a key-value pair");h=d[0],E.hasOwnProp(l,h)?(c=l[h],l[h]=E.isArray(c)?[...c,d[1]]:[c,d[1]]):l[h]=d[1]}o(l,r)}else n!=null&&a(r,n,i);return this}get(n,r){if(n=ci(n),n){const i=E.findKey(this,n);if(i){const s=this[i];if(!r)return s;if(r===!0)return vw(s);if(E.isFunction(r))return r.call(this,s,i);if(E.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,r){if(n=ci(n),n){const i=E.findKey(this,n);return!!(i&&this[i]!==void 0&&(!r||So(this,this[i],i,r)))}return!1}delete(n,r){const i=this;let s=!1;function a(o){if(o=ci(o),o){const l=E.findKey(i,o);l&&(!r||So(i,i[l],l,r))&&(delete i[l],s=!0)}}return E.isArray(n)?n.forEach(a):a(n),s}clear(n){const r=Object.keys(this);let i=r.length,s=!1;for(;i--;){const a=r[i];(!n||So(this,this[a],a,n,!0))&&(delete this[a],s=!0)}return s}normalize(n){const r=this,i={};return E.forEach(this,(s,a)=>{const o=E.findKey(i,a);if(o){r[o]=Ks(s),delete r[a];return}const l=n?Nw(a):String(a).trim();l!==a&&delete r[a],r[l]=Ks(s),i[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const r=Object.create(null);return E.forEach(this,(i,s)=>{i!=null&&i!==!1&&(r[s]=n&&E.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,r])=>n+": "+r).join(`
`)}getSetCookie(){const n=this.get("set-cookie");return E.isArray(n)?n:n==null||n===!1?[]:[n]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static parseParameters(n){return Aw(n)}static concat(n,...r){const i=new this(n);return r.forEach(s=>i.set(s)),i}static accessor(n){const i=(this[Lh]=this[Lh]={accessors:{}}).accessors,s=this.prototype;function a(o){const l=ci(o);i[l]||(Sw(s,o),i[l]=!0)}return E.isArray(n)?n.forEach(a):a(n),this}};He.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(He.prototype,({value:e},n)=>{let r=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(i){this[r]=i}}});E.freezeMethods(He);const ka="[REDACTED ****]";function Cw(e){if(E.hasOwnProp(e,"toJSON"))return!0;let n=Object.getPrototypeOf(e);for(;n&&n!==Object.prototype;){if(E.hasOwnProp(n,"toJSON"))return!0;n=Object.getPrototypeOf(n)}return!1}function Ew(e,n){const r=new Set(n.map(a=>String(a).toLowerCase())),i=[],s=a=>{if(a===null||typeof a!="object"||E.isBuffer(a))return a;if(i.indexOf(a)!==-1)return;a instanceof He&&(a=a.toJSON()),i.push(a);let o;if(E.isArray(a))o=[],a.forEach((l,c)=>{const h=s(l);E.isUndefined(h)||(o[c]=h)});else{if(!E.isPlainObject(a)&&Cw(a))return i.pop(),a;o=Object.create(null);for(const[l,c]of Object.entries(a)){const h=r.has(l.toLowerCase())?ka:s(c);E.isUndefined(h)||(o[l]=h)}}return i.pop(),o};return s(e)}function Mh(e){try{return String(e)}catch{return""}}function Rw(e){return e.errors.map(r=>{try{return r&&r.message?Mh(r.message):Mh(r)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let W=class ef extends Error{static from(n,r,i,s,a,o){let l=n.message;!l&&E.isArray(n.errors)&&n.errors.length&&(l=Rw(n));const c=new ef(l,r||n.code,i,s,a);return Object.defineProperty(c,"cause",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),c.name=n.name,n.status!=null&&c.status==null&&(c.status=n.status),o&&Object.assign(c,o),c}constructor(n,r,i,s,a){super(n),Object.defineProperty(this,"message",{__proto__:null,value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),i&&(this.config=i),s&&(this.request=s),a&&(this.response=a,this.status=a.status)}toJSON(){const n=this.config,r=n&&E.hasOwnProp(n,"redact")?n.redact:void 0,i=E.isArray(r)&&r.length>0?Ew(n,r):E.toJSONObject(n);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};W.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";W.ERR_BAD_OPTION="ERR_BAD_OPTION";W.ECONNABORTED="ECONNABORTED";W.ETIMEDOUT="ETIMEDOUT";W.ECONNREFUSED="ECONNREFUSED";W.ERR_NETWORK="ERR_NETWORK";W.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";W.ERR_DEPRECATED="ERR_DEPRECATED";W.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";W.ERR_BAD_REQUEST="ERR_BAD_REQUEST";W.ERR_CANCELED="ERR_CANCELED";W.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";W.ERR_INVALID_URL="ERR_INVALID_URL";W.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Pw=null,tf=100;function _l(e){return E.isPlainObject(e)||E.isArray(e)}function nf(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Co(e,n,r){return e?e.concat(n).map(function(s,a){return s=nf(s),!r&&a?"["+s+"]":s}).join(r?".":""):n}function Tw(e){return E.isArray(e)&&!e.some(_l)}const Ow=E.toFlatObject(E,{},null,function(n){return/^is[A-Z]/.test(n)});function qa(e,n,r){if(!E.isObject(e))throw new TypeError("target must be an object");n=n||new FormData;const i=(m,x)=>{const N=E.getSafeProp(r,m);return E.isUndefined(N)?x:N},s=i("metaTokens",!0),a=i("visitor")||k,o=i("dots",!1),l=i("indexes",!1),c=i("Blob")||typeof Blob<"u"&&Blob,h=i("maxDepth",tf),d=c&&E.isSpecCompliantForm(n),u=[];if(!E.isFunction(a))throw new TypeError("visitor must be a function");function p(m){if(m===null)return"";if(E.isDate(m))return m.toISOString();if(E.isBoolean(m))return m.toString();if(!d&&E.isBlob(m))throw new W("Blob is not supported. Use a Buffer instead.");if(E.isArrayBuffer(m)||E.isTypedArray(m)){if(d&&typeof c=="function")return new c([m]);throw new W("Blob is not supported. Use a Buffer instead.",W.ERR_NOT_SUPPORT)}return m}function g(m){if(m>h)throw new W("Object is too deeply nested ("+m+" levels). Max depth: "+h,W.ERR_FORM_DATA_DEPTH_EXCEEDED)}function b(m,x){if(h===1/0)return JSON.stringify(m);const N=[];return JSON.stringify(m,function(T,y){if(!E.isObject(y))return y;for(;N.length&&N[N.length-1]!==this;)N.pop();return N.push(y),g(x+N.length-1),y})}function k(m,x,N){let w=m;if(E.isReactNative(n)&&E.isReactNativeBlob(m))return n.append(Co(N,x,o),p(m)),!1;if(m&&!N&&typeof m=="object"){if(E.endsWith(x,"{}"))x=s?x:x.slice(0,-2),m=b(m,1);else if(E.isArray(m)&&Tw(m)||(E.isFileList(m)||E.endsWith(x,"[]"))&&(w=E.toArray(m)))return x=nf(x),w.forEach(function(y,j){!(E.isUndefined(y)||y===null)&&n.append(l===!0?Co([x],j,o):l===null?x:x+"[]",p(y))}),!1}return _l(m)?!0:(n.append(Co(N,x,o),p(m)),!1)}const P=Object.assign(Ow,{defaultVisitor:k,convertValue:p,isVisitable:_l});function f(m,x,N=0){if(!E.isUndefined(m)){if(g(N),u.indexOf(m)!==-1)throw new Error("Circular reference detected in "+x.join("."));u.push(m),E.forEach(m,function(T,y){(!(E.isUndefined(T)||T===null)&&a.call(n,T,E.isString(y)?y.trim():y,x,P))===!0&&f(T,x?x.concat(y):[y],N+1)}),u.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return f(e),n}function zh(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(i){return n[i]})}function rd(e,n){this._pairs=[],e&&qa(e,this,n)}const rf=rd.prototype;rf.append=function(n,r){this._pairs.push([n,r])};rf.toString=function(n){const r=n?i=>n.call(this,i,zh):zh;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Lw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function sf(e,n,r){if(!n)return e;e=e||"";const i=E.isFunction(r)?{serialize:r}:r,s=E.getSafeProp(i,"encode")||Lw,a=E.getSafeProp(i,"serialize");let o;if(a?o=a(n,i):o=E.isURLSearchParams(n)?n.toString():new rd(n,i).toString(s),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}const di=Symbol("internals");function af(e){return e?e.length:0}function Ih(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function hi(e,n){const r=e.handlers,i=af(r);r!==n.handlersRef?(n.handlersRef=r,n.handlerEntries.clear()):i!==n.handlersLength&&(i?n.handlerEntries.forEach(function(a,o){r[a.index]!==a.handler&&n.handlerEntries.delete(o)}):n.handlerEntries.clear()),n.handlersLength=i}class Bh{constructor(){this.handlers=[],this[di]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(n,r,i){const s={fulfilled:n,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},a=this[di];this.handlers==null&&(this.handlers=[]),hi(this,a);const o=a.nextId++;return this.handlers.push(s),a.handlerEntries.set(o,{handler:s,index:this.handlers.length-1}),a.handlersLength=this.handlers.length,o}eject(n){const r=this[di];hi(this,r);const i=r.handlerEntries.get(n);if(i){if(r.handlerEntries.delete(n),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,r.iterationDepth||(Ih(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],hi(this,this[di]))}forEach(n){const r=this[di];hi(this,r),r.iterationDepth++;try{E.forEach(this.handlers,function(s){s!==null&&n(s)})}finally{--r.iterationDepth||(hi(this,r),Ih(this.handlers),r.handlersLength=af(this.handlers))}}}const id={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Mw=typeof URLSearchParams<"u"?URLSearchParams:rd,zw=typeof FormData<"u"?FormData:null,Iw=typeof Blob<"u"?Blob:null,Bw={isBrowser:!0,classes:{URLSearchParams:Mw,FormData:zw,Blob:Iw},protocols:["http","https","file","blob","url","data"]},sd=typeof window<"u"&&typeof document<"u",Gl=typeof navigator=="object"&&navigator||void 0,Dw=sd&&(!Gl||["ReactNative","NativeScript","NS"].indexOf(Gl.product)<0),Fw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ww=sd&&window.location.href||"http://localhost",Uw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sd,hasStandardBrowserEnv:Dw,hasStandardBrowserWebWorkerEnv:Fw,navigator:Gl,origin:Ww},Symbol.toStringTag,{value:"Module"})),Te={...Uw,...Bw};function Hw(e,n){return qa(e,new Te.classes.URLSearchParams,{visitor:function(r,i,s,a){return Te.isNode&&E.isBuffer(r)?(this.append(i,r.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...n})}const Dh=tf;function of(e){if(e>Dh)throw new W("FormData field is too deeply nested ("+e+" levels). Max depth: "+Dh,W.ERR_FORM_DATA_DEPTH_EXCEEDED)}function $w(e){const n=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=r.exec(e))!==null;)of(n.length),n.push(i[0]==="[]"?"":i[1]||i[0]);return n}function _w(e){const n={},r=Object.keys(e);let i;const s=r.length;let a;for(i=0;i<s;i++)a=r[i],n[a]=e[a];return n}function lf(e){function n(r,i,s,a){of(a);let o=r[a++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=a>=r.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=E.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!l):((!E.hasOwnProp(s,o)||!E.isObject(s[o]))&&(s[o]=[]),n(r,i,s[o],a)&&E.isArray(s[o])&&(s[o]=_w(s[o])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const r={};return E.forEachEntry(e,(i,s)=>{n($w(i),s,r,0)}),r}return null}const cf=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),hr=(e,n)=>e!=null&&E.hasOwnProp(e,n)?e[n]:void 0;function Gw(e,n,r){if(E.isString(e))try{return(n||JSON.parse)(e),E.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}const cs={transitional:id,adapter:["xhr","http","fetch"],transformRequest:[function(n,r){const i=r.getContentType()||"",s=i.indexOf("application/json")>-1,a=E.isObject(n);if(a&&E.isHTMLForm(n)&&(n=new FormData(n)),E.isFormData(n))return s?JSON.stringify(lf(n)):n;if(E.isArrayBuffer(n)||E.isBuffer(n)||E.isStream(n)||E.isFile(n)||E.isBlob(n)||E.isReadableStream(n))return n;if(E.isArrayBufferView(n))return n.buffer;if(E.isURLSearchParams(n))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(a){const c=hr(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Hw(n,c).toString();if((l=E.isFileList(n))||i.indexOf("multipart/form-data")>-1){const h=hr(this,"env"),d=h&&h.FormData;return qa(l?{"files[]":n}:n,d&&new d,c)}}return a||s?(r.setContentType("application/json",!1),Gw(n)):n}],transformResponse:[function(n){const r=hr(this,"transitional")||cs.transitional,i=r&&r.forcedJSONParsing,s=hr(this,"responseType"),a=s==="json";if(E.isResponse(n)||E.isReadableStream(n))return n;if(n&&E.isString(n)&&(i&&!s||a)){const l=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(n,hr(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?W.from(c,W.ERR_BAD_RESPONSE,this,null,hr(this,"response")):c}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Te.classes.FormData,Blob:Te.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(cf,e=>{cs.headers[e]={}});function Eo(e,n){const r=this||cs,i=n||r,s=He.from(i.headers);let a=i.data;return E.forEach(e,function(l){a=l.call(r,a,s.normalize(),n?n.status:void 0)}),s.normalize(),a}function df(e){return!!(e&&e.__CANCEL__)}let ds=class extends W{constructor(n,r,i){super(n??"canceled",W.ERR_CANCELED,r,i),this.name="CanceledError",this.__CANCEL__=!0}};function hf(e,n,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):n(new W("Request failed with status code "+r.status,r.status>=400&&r.status<500?W.ERR_BAD_REQUEST:W.ERR_BAD_RESPONSE,r.config,r.request,r))}const Vw=/[\t\n\r]/g;function uf(e){if(typeof e!="string")return e;let n=0;for(;n<e.length&&e.charCodeAt(n)<=32;)n++;return e.slice(n).replace(Vw,"")}function Ro(e){const n=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return n&&n[1]||""}function qw(e,n){e=e||10;const r=new Array(e),i=new Array(e);let s=0,a=0,o;return n=n!==void 0?n:1e3,function(c){const h=Date.now(),d=i[a];o||(o=h),r[s]=c,i[s]=h;let u=a,p=0;for(;u!==s;)p+=r[u++],u=u%e;if(s=(s+1)%e,s===a&&(a=(a+1)%e),h-o<n)return;const g=d&&h-d;return g?Math.round(p*1e3/g):void 0}}function Kw(e,n){let r=0,i=1e3/n,s,a;const o=(d,u=Date.now())=>{r=u,s=null,a&&(clearTimeout(a),a=null),e(...d)};return[(...d)=>{const u=Date.now(),p=u-r;p>=i?o(d,u):(s=d,a||(a=setTimeout(()=>{a=null,o(s)},i-p)))},()=>s&&o(s),(...d)=>o(d)]}const Na=(e,n,r=3)=>{let i=0;const s=qw(50,250);return Kw(a=>{if(!a||!E.isNumber(a.loaded))return;const o=a.loaded,l=a.lengthComputable?a.total:void 0,c=Math.max(0,l!=null?Math.min(o,l):o),h=Math.max(0,c-i),d=s(h);i=Math.max(i,c);const u={loaded:c,total:l,progress:l?c/l:void 0,bytes:h,rate:d||void 0,estimated:d&&l?(l-c)/d:void 0,event:a,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(u)},r)},Fh=(e,n)=>{const r=e!=null;return[i=>n[0]({lengthComputable:r,total:e,loaded:i}),n[1]]},Wh=(e,n=E.asap)=>(...r)=>n(()=>e(...r)),Yw=Te.hasStandardBrowserEnv?((e,n)=>r=>(r=new URL(r,Te.origin),e.protocol===r.protocol&&e.host===r.host&&(n||e.port===r.port)))(new URL(Te.origin),Te.navigator&&/(msie|trident)/i.test(Te.navigator.userAgent)):()=>!0,Xw=Te.hasStandardBrowserEnv?{write(e,n,r,i,s,a,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(n)}`];E.isNumber(r)&&l.push(`expires=${new Date(r).toUTCString()}`),E.isString(i)&&l.push(`path=${i}`),E.isString(s)&&l.push(`domain=${s}`),a===!0&&l.push("secure"),E.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const n=document.cookie.split(";");for(let r=0;r<n.length;r++){const i=n[r].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===e)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Qw(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Zw(e,n){if(!n)return e;let r=e.length;for(;r>0&&e.charCodeAt(r-1)===47;)r--;return e.slice(0,r)+"/"+n.replace(/^\/+/,"")}const Jw=/^https?:(?!\/\/)/i;function ey(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(n,r,i="")=>`${r}${i}${ka}`)}function ty(e){const n=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${ka}@`),r=n.indexOf("#"),s=(r===-1?n:n.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${ka}`);return r===-1?s:`${s}#${ey(n.slice(r+1))}`}function Uh(e,n){if(typeof e=="string"){const r=uf(e);if(Jw.test(r))throw new W(`Invalid URL ${JSON.stringify(ty(r))}: missing "//" after protocol`,W.ERR_INVALID_URL,n)}}function pf(e,n,r,i){Uh(n,i);let s=!Qw(n);return e&&(s||r===!1)?(Uh(e,i),Zw(e,n)):n}const Hh=e=>e instanceof He?{...e}:e,ny=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(n=>Object.getOwnPropertyDescriptor(e,n).enumerable)):Object.keys(e);function tr(e,n){e=e||{},n=n||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(d,u,p,g){return E.isPlainObject(d)&&E.isPlainObject(u)?E.merge.call({caseless:g},d,u):E.isPlainObject(u)?E.merge({},u):E.isArray(u)?u.slice():u}function s(d,u,p,g){if(E.isUndefined(u)){if(!E.isUndefined(d))return i(void 0,d,p,g)}else return i(d,u,p,g)}function a(d,u){if(!E.isUndefined(u))return i(void 0,u)}function o(d,u){if(E.isUndefined(u)){if(!E.isUndefined(d))return i(void 0,d)}else return i(void 0,u)}function l(d){const u=E.hasOwnProp(n,"transitional")?n.transitional:void 0;if(!E.isUndefined(u))if(E.isPlainObject(u)){if(E.hasOwnProp(u,d))return u[d]}else return;const p=E.hasOwnProp(e,"transitional")?e.transitional:void 0;if(E.isPlainObject(p)&&E.hasOwnProp(p,d))return p[d]}function c(d,u,p){if(E.hasOwnProp(n,p))return i(d,u);if(E.hasOwnProp(e,p))return i(void 0,d)}const h={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutErrorMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(d,u,p)=>s(Hh(d),Hh(u),p,!0)};return E.forEach(ny({...e,...n}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const p=E.hasOwnProp(h,u)?h[u]:s,g=E.hasOwnProp(e,u)?e[u]:void 0,b=E.hasOwnProp(n,u)?n[u]:void 0,k=p(g,b,u);E.isUndefined(k)&&p!==c||(r[u]=k)}),E.hasOwnProp(n,"validateStatus")&&E.isUndefined(n.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(E.hasOwnProp(e,"validateStatus")?r.validateStatus=i(void 0,e.validateStatus):delete r.validateStatus),r}const ry=["content-type","content-length"];function iy(e,n,r){if(r!=="content-only"){e.set(n);return}Object.entries(n||{}).forEach(([i,s])=>{ry.includes(i.toLowerCase())&&e.set(i,s)})}const sy=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(n,r)=>String.fromCharCode(parseInt(r,16)));function mf(e){const n=tr({},e),r=p=>E.hasOwnProp(n,p)?n[p]:void 0,i=r("data");let s=r("withXSRFToken");const a=r("xsrfHeaderName"),o=r("xsrfCookieName");let l=r("headers");const c=r("auth"),h=r("baseURL"),d=r("allowAbsoluteUrls"),u=r("url");if(n.headers=l=He.from(l),n.url=sf(pf(h,u,d,n),r("params"),r("paramsSerializer")),c){const p=E.getSafeProp(c,"username")||"",g=E.getSafeProp(c,"password")||"";try{l.set("Authorization","Basic "+btoa(p+":"+(g?sy(g):"")))}catch(b){throw W.from(b,W.ERR_BAD_OPTION_VALUE,e)}}if(E.isFormData(i)){const p=E.getSafeProp(i,"getHeaders");Te.hasStandardBrowserEnv||Te.hasStandardBrowserWebWorkerEnv||E.isReactNative(i)?l.setContentType(void 0):E.isFunction(p)&&iy(l,p.call(i),r("formDataHeaderPolicy"))}if(Te.hasStandardBrowserEnv&&(E.isFunction(s)&&(s=s(n)),s===!0||s==null&&Yw(n.url))){const g=a&&o&&Xw.read(o);g&&l.set(a,g)}return n}const ay=typeof XMLHttpRequest<"u",oy=ay&&function(e){return new Promise(function(r,i){const s=mf(e);let a=s.data;const o=He.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:h}=s,d,u,p,g,b,k;function P(){g&&g(),b&&b(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let f=new XMLHttpRequest;f.open(s.method.toUpperCase(),s.url,!0),f.timeout=s.timeout;function m(N){if(!f)return;if(f.status===0&&(Ro(uf(s.url))||Ro(Te.origin))!=="file"&&!(f.responseURL&&f.responseURL.startsWith("file:"))){i(new W("Request aborted",W.ECONNABORTED,e,f)),P(),f=null;return}try{N?k&&k(N):b&&b()}catch(j){setTimeout(()=>{throw j})}if(!f)return;const w=He.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),y={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:w,config:e,request:f};hf(function(L){r(L),P()},function(L){i(L),P()},y),f=null}"onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.startsWith("file:"))||setTimeout(m)},f.onabort=function(){f&&(i(new W("Request aborted",W.ECONNABORTED,e,f)),P(),f=null)},f.onerror=function(w){const T=w&&w.message?w.message:"Network Error",y=new W(T,W.ERR_NETWORK,e,f);y.event=w||null,i(y),P(),f=null},f.ontimeout=function(){let w=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||id;s.timeoutErrorMessage&&(w=s.timeoutErrorMessage),i(new W(w,T.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,f)),P(),f=null},a===void 0&&o.setContentType(null),"setRequestHeader"in f&&E.forEach(Jm(o),function(w,T){f.setRequestHeader(T,w)}),E.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),l&&l!=="json"&&(f.responseType=s.responseType),h&&([p,b,k]=Na(h,!0),f.addEventListener("progress",p)),c&&f.upload&&([u,g]=Na(c),f.upload.addEventListener("progress",u),f.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(d=N=>{f&&(i(!N||N.type?new ds(null,e,f):N),f.abort(),P(),f=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const x=Ro(s.url);if(x&&!Te.protocols.includes(x)){i(new W("Unsupported protocol "+x+":",W.ERR_BAD_REQUEST,e)),P();return}f.send(a||null)})},ly=(e,n)=>{if(e=e?e.filter(Boolean):[],!n&&!e.length)return;const r=new AbortController;let i=!1;const s=function(c){if(!i){i=!0,o();const h=c instanceof Error?c:this.reason;r.abort(h instanceof W?h:new ds(h instanceof Error?h.message:h))}};let a=n&&setTimeout(()=>{a=null,s(new W(`timeout of ${n}ms exceeded`,W.ETIMEDOUT))},n);const o=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>{if(!i){if(c.aborted){s.call(c);return}c.addEventListener("abort",s,{once:!0})}});const{signal:l}=r;return l.unsubscribe=()=>E.asap(o),l},cy=function*(e,n){let r=e.byteLength;if(r<n){yield e;return}let i=0,s;for(;i<r;)s=i+n,yield e.slice(i,s),i=s},dy=async function*(e,n){for await(const r of hy(e))yield*cy(r,n)},hy=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:r,value:i}=await n.read();if(r)break;yield i}}finally{await n.cancel()}},$h=(e,n,r,i)=>{const s=dy(e,n);let a=0,o,l=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:h,value:d}=await s.next();if(h){l(),c.close();return}let u=d.byteLength;if(r){let p=a+=u;r(p)}c.enqueue(new Uint8Array(d))}catch(h){throw l(h),h}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},_h=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,ff=(e,n,r)=>n+2<r&&_h(e.charCodeAt(n+1))&&_h(e.charCodeAt(n+2)),Gh=e=>e<=57?e-48:(e&223)-55,uy=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,py=e=>e===9||e===10||e===12||e===13||e===32,my=e=>{const n=Math.floor(e/4),r=e%4;return n*3+(r===2?1:r===3?2:0)},fy=e=>{const n=e.length;let r=0;return n>0&&e.charCodeAt(n-1)===61&&(r++,n>1&&e.charCodeAt(n-2)===61&&r++),Math.floor((n-r)*3/4)},gy=e=>{const n=e.length;let r=0,i=0,s=!1;for(let a=0;a<n;a++){let o=e.charCodeAt(a);if(o===37&&ff(e,a,n)&&(o=Gh(e.charCodeAt(a+1))*16+Gh(e.charCodeAt(a+2)),a+=2),!py(o)){if(o===61){i++;continue}if(!uy(o)||i>0){s=!0;continue}r++}}return s||i>2||i>0&&(r+i)%4!==0||r%4===1?fy(e):my(r)},xy=(e,n)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const r=e.indexOf(",");if(r<0)return 0;const i=e.slice(5,r),s=e.slice(r+1);if(/;base64/i.test(i))return n(s);let o=0;for(let l=0,c=s.length;l<c;l++){const h=s.charCodeAt(l);if(h===37&&ff(s,l,c))o+=1,l+=2;else if(h<128)o+=1;else if(h<2048)o+=2;else if(h>=55296&&h<=56319&&l+1<c){const d=s.charCodeAt(l+1);d>=56320&&d<=57343?(o+=4,l++):o+=3}else o+=3}return o};function wy(e){const n=typeof e=="string"?e.indexOf("#"):-1;return xy(n===-1?e:e.slice(0,n),gy)}const ad="1.20.0",Vh=64*1024,yy={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Rs}=E,vy=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(n,r)=>String.fromCharCode(parseInt(r,16))),qh=e=>{if(!E.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Kh=(e,...n)=>{try{return!!e(...n)}catch{return!1}},by=e=>{const n=e.indexOf("://");let r=e;return n!==-1&&(r=r.slice(n+3)),r.includes("@")||r.includes(":")},jy=e=>{const n=E.global!==void 0&&E.global!==null?E.global:globalThis,{ReadableStream:r,TextEncoder:i}=n;e=E.merge.call({skipUndefined:!0},{Request:n.Request,Response:n.Response},e);const{fetch:s,Request:a,Response:o}=e,l=s?Rs(s):typeof fetch=="function",c=Rs(a),h=Rs(o);if(!l)return!1;const d=l&&Rs(r),u=l&&(typeof i=="function"?(f=>m=>f.encode(m))(new i):async f=>new Uint8Array(await new a(f).arrayBuffer())),p=c&&d&&Kh(()=>{let f=!1;const m=new a(Te.origin,{body:new r,method:"POST",get duplex(){return f=!0,"half"}}),x=m.headers.has("Content-Type");return m.body!=null&&m.body.cancel(),f&&!x}),g=h&&d&&Kh(()=>E.isReadableStream(new o("").body)),b={stream:g&&(f=>f.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!b[f]&&(b[f]=(m,x)=>{let N=m&&m[f];if(N)return N.call(m);throw new W(`Response type '${f}' is not supported`,W.ERR_NOT_SUPPORT,x)})});const k=async f=>{if(f==null)return 0;if(E.isBlob(f))return f.size;if(E.isSpecCompliantForm(f))return(await new a(Te.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(E.isArrayBufferView(f)||E.isArrayBuffer(f))return f.byteLength;if(E.isURLSearchParams(f)&&(f=f+""),E.isString(f))return(await u(f)).byteLength},P=async(f,m)=>{const x=E.toFiniteNumber(f.getContentLength());return x??k(m)};return async f=>{let{url:m,method:x,data:N,signal:w,cancelToken:T,timeout:y,onDownloadProgress:j,onUploadProgress:L,responseType:S,headers:O,withCredentials:F="same-origin",fetchOptions:M,maxContentLength:q,maxBodyLength:Q,maxRedirects:_}=mf(f);const J=E.isNumber(q)&&q>-1,D=E.isNumber(Q)&&Q>-1,C=ee=>E.hasOwnProp(f,ee)?f[ee]:void 0;let R=s||fetch;S=S?(S+"").toLowerCase():"text";let I=ly([w,T&&T.toAbortSignal()],y),G=null;const A=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let U,ae=null;const Ne=()=>new W("Request body larger than maxBodyLength limit",W.ERR_BAD_REQUEST,f,G);try{let ee;const Ae=C("auth");if(Ae){const X=E.getSafeProp(Ae,"username")||"",Y=E.getSafeProp(Ae,"password")||"";ee={username:X,password:Y}}if(by(m)){const X=new URL(m,Te.origin);if(!ee&&(X.username||X.password)){const Y=qh(X.username),Rt=qh(X.password);ee={username:Y,password:Rt}}(X.username||X.password)&&(X.username="",X.password="",m=X.href)}if(ee&&(O.delete("authorization"),O.set("Authorization","Basic "+btoa(vy((ee.username||"")+":"+(ee.password||""))))),J&&typeof m=="string"&&m.startsWith("data:")&&wy(m)>q)throw new W("maxContentLength size of "+q+" exceeded",W.ERR_BAD_RESPONSE,f,G);if(D&&x!=="get"&&x!=="head"){const X=await k(N);if(typeof X=="number"&&isFinite(X)&&(U=X,X>Q))throw Ne()}const Et=D&&(E.isReadableStream(N)||E.isStream(N)),oe=(X,Y,Rt)=>$h(X,Vh,Ln=>{if(D&&Ln>Q)throw ae=Ne();Y&&Y(Ln)},Rt);if(p&&x!=="get"&&x!=="head"&&(L||Et)){if(U=U??await P(O,N),U!==0||Et){let X=new a(m,{method:"POST",body:N,duplex:"half"}),Y;if(E.isFormData(N)&&(Y=X.headers.get("content-type"))&&O.setContentType(Y),X.body){const[Rt,Ln]=L&&Fh(U,Na(Wh(L)))||[];N=oe(X.body,Rt,Ln)}}}else if(Et&&!c&&d&&x!=="get"&&x!=="head")N=oe(N);else if(Et&&c&&!p&&x!=="get"&&x!=="head")throw new W("Stream request bodies are not supported by the current fetch implementation",W.ERR_NOT_SUPPORT,f,G);E.isString(F)||(F=F?"include":"omit");const ce=c&&"credentials"in a.prototype;if(E.isFormData(N)){const X=O.getContentType();X&&/^multipart\/form-data/i.test(X)&&!/boundary=/i.test(X)&&O.delete("content-type")}O.set("User-Agent","axios/"+ad,!1);const ye=M==null?M:Object.assign(Object.create(null),M);ye&&(delete ye.body,delete ye.headers,delete ye.method,delete ye.signal,delete ye.duplex,delete ye.credentials);const Le=Object.assign(Object.create(null),ye,{signal:I,method:x.toUpperCase(),headers:Jm(O.normalize()),body:N,duplex:"half",credentials:ce?F:void 0});c&&(E.forEach(yy,(X,Y)=>{Le[Y]===void 0&&(Le[Y]=X)}),Le.signal===void 0&&(Le.signal=null),Le.body===void 0&&(Le.body=null)),_===0&&(Le.redirect="manual",ye&&(ye.redirect="manual")),G=c&&new a(m,Le);let nt=await(c?R(G,ye):R(m,Le));const On=He.from(nt.headers);if(J){const X=E.toFiniteNumber(On.getContentLength());if(X!=null&&X>q)throw new W("maxContentLength size of "+q+" exceeded",W.ERR_BAD_RESPONSE,f,G)}const nn=g&&(S==="stream"||S==="response");if(g&&nt.body&&(j||J||nn&&A)){const X={};["status","statusText","headers"].forEach(ei=>{X[ei]=nt[ei]});const Y=E.toFiniteNumber(On.getContentLength()),[Rt,Ln]=j&&Fh(Y,Na(Wh(j),!0))||[];let ud=0;const $f=ei=>{if(J&&(ud=ei,ud>q))throw new W("maxContentLength size of "+q+" exceeded",W.ERR_BAD_RESPONSE,f,G);Rt&&Rt(ei)};nt=new o($h(nt.body,Vh,$f,()=>{Ln&&Ln(),A&&A()}),X)}S=S||"text";let Ke=await b[E.findKey(b,S)||"text"](nt,f);if(J&&!g&&!nn){let X;if(Ke!=null&&(typeof Ke.byteLength=="number"?X=Ke.byteLength:typeof Ke.size=="number"?X=Ke.size:typeof Ke=="string"&&(X=typeof i=="function"?new i().encode(Ke).byteLength:Ke.length)),typeof X=="number"&&X>q)throw new W("maxContentLength size of "+q+" exceeded",W.ERR_BAD_RESPONSE,f,G)}return!nn&&A&&A(),await new Promise((X,Y)=>{hf(X,Y,{data:Ke,headers:He.from(nt.headers),status:nt.status,statusText:nt.statusText,config:f,request:G})})}catch(ee){if(A&&A(),I&&I.aborted&&I.reason instanceof W){const Ae=I.reason;throw Ae.config=f,G&&(Ae.request=G),ee!==Ae&&Object.defineProperty(Ae,"cause",{__proto__:null,value:ee,writable:!0,enumerable:!1,configurable:!0}),Ae}if(ae)throw G&&!ae.request&&(ae.request=G),ae;if(ee instanceof W)throw G&&!ee.request&&(ee.request=G),ee;if(ee&&ee.name==="TypeError"&&/Load failed|fetch/i.test(ee.message)){const Ae=new W("Network Error",W.ERR_NETWORK,f,G,ee&&ee.response);throw Object.defineProperty(Ae,"cause",{__proto__:null,value:ee.cause||ee,writable:!0,enumerable:!1,configurable:!0}),Ae}throw W.from(ee,ee&&ee.code,f,G,ee&&ee.response)}}},Ay=new Map,gf=e=>{let n=e&&e.env||{};const{fetch:r,Request:i,Response:s}=n,a=[i,s,r];let o=a.length,l=o,c,h,d=Ay;for(;l--;)c=a[l],h=d.get(c),h===void 0&&d.set(c,h=l?new Map:jy(n)),d=h;return h};gf();const od={http:Pw,xhr:oy,fetch:{get:gf}};E.forEach(od,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:n})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:n})}});const Yh=e=>`- ${e}`,ky=e=>E.isFunction(e)||e===null||e===!1;function Ny(e,n){e=E.isArray(e)?e:[e];const{length:r}=e;let i,s;const a={};for(let o=0;o<r;o++){i=e[o];let l;if(s=i,!ky(i)&&(s=od[(l=String(i)).toLowerCase()],s===void 0))throw new W(`Unknown adapter '${l}'`);if(s&&(E.isFunction(s)||(s=s.get(n))))break;a[l||"#"+o]=s}if(!s){const o=Object.entries(a).map(([c,h])=>`adapter ${c} `+(h===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(Yh).join(`
`):" "+Yh(o[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+l,W.ERR_NOT_SUPPORT)}return s}const xf={getAdapter:Ny,adapters:od};function Po(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ds(null,e)}function To(e){const n=E.toSafeFlatObject(e);return Po(n),n.headers=He.from(E.getSafeProp(n,"headers")),n.data=Eo.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),xf.getAdapter(n.adapter||cs.adapter,n)(n).then(function(s){Po(n),n.response=s;try{s.data=Eo.call(n,n.transformResponse,s)}finally{delete n.response}return s.headers=He.from(s.headers),s},function(s){if(!df(s)&&(Po(n),s&&s.response)){n.response=s.response;try{s.response.data=Eo.call(n,n.transformResponse,s.response)}finally{delete n.response}s.response.headers=He.from(s.response.headers)}return Promise.reject(s)})}const Ka={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Ka[e]=function(i){return typeof i===e||"a"+(n<1?"n ":" ")+e}});const Xh={};Ka.transitional=function(n,r,i){function s(a,o){return"[Axios v"+ad+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return(a,o,l)=>{if(n===!1)throw new W(s(o," has been removed"+(r?" in "+r:"")),W.ERR_DEPRECATED);return r&&!Xh[o]&&(Xh[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),n?n(a,o,l):!0}};Ka.spelling=function(n){return(r,i)=>(console.warn(`${i} is likely a misspelling of ${n}`),!0)};function Sy(e,n,r){if(typeof e!="object"||e===null)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const a=i[s],o=Object.prototype.hasOwnProperty.call(n,a)?n[a]:void 0;if(o){const l=e[a],c=l===void 0||o(l,a,e);if(c!==!0)throw new W("option "+a+" must be "+c,W.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new W("Unknown option "+a,W.ERR_BAD_OPTION)}}const Ys={assertOptions:Sy,validators:Ka},We=Ys.validators;let Vn=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Bh,response:new Bh}}async request(n,r){try{return await this._request(n,r)}catch(i){if(i instanceof Error)try{let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const a=s.stack;let o="";if(typeof a=="string"){const l=a.indexOf(`
`);o=l===-1?"":a.slice(l+1)}if(!i.stack)i.stack=o;else if(o){const l=o.indexOf(`
`),c=l===-1?-1:o.indexOf(`
`,l+1),h=c===-1?"":o.slice(c+1);String(i.stack).endsWith(h)||(i.stack+=`
`+o)}}catch{}throw i}}_request(n,r){typeof n=="string"?(r=r||{},r.url=n):r=n||{},r=tr(this.defaults,r);const{transitional:i,paramsSerializer:s,headers:a}=r;i!==void 0&&Ys.assertOptions(i,{silentJSONParsing:We.transitional(We.boolean),forcedJSONParsing:We.transitional(We.boolean),clarifyTimeoutError:We.transitional(We.boolean),legacyInterceptorReqResOrdering:We.transitional(We.boolean),advertiseZstdAcceptEncoding:We.transitional(We.boolean),validateStatusUndefinedResolves:We.transitional(We.boolean)},!1),s!=null&&(E.isFunction(s)?r.paramsSerializer={serialize:s}:Ys.assertOptions(s,{encode:We.function,serialize:We.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ys.assertOptions(r,{baseUrl:We.spelling("baseURL"),withXsrfToken:We.spelling("withXSRFToken")},!0),r.method=(E.getSafeProp(r,"method")||E.getSafeProp(this.defaults,"method")||"get").toLowerCase();let o=a&&E.merge(a.common,a[r.method]);a&&E.forEach(cf.concat("common"),b=>{delete a[b]}),r.headers=He.concat(o,a);const l=[];let c=!0;this.interceptors.request.forEach(function(k){if(typeof k.runWhen=="function"&&k.runWhen(r)===!1)return;c=c&&k.synchronous;const P=r.transitional||id;P&&P.legacyInterceptorReqResOrdering?l.unshift(k.fulfilled,k.rejected):l.push(k.fulfilled,k.rejected)});const h=[];this.interceptors.response.forEach(function(k){h.push(k.fulfilled,k.rejected)});let d,u=0,p;if(!c){const b=[To.bind(this),void 0];for(b.unshift(...l),b.push(...h),p=b.length,d=Promise.resolve(r);u<p;)d=d.then(b[u++],b[u++]);return d}p=l.length;let g=r;for(;u<p;){const b=l[u++],k=l[u++];try{g=b?b(g):g}catch(P){if(!k){d=Promise.reject(P);break}try{const f=k.call(this,P);E.isThenable(f)&&(d=Promise.resolve(f).then(()=>To.call(this,g)))}catch(f){d=Promise.reject(f)}break}}if(!d)try{d=To.call(this,g)}catch(b){d=Promise.reject(b)}for(u=0,p=h.length;u<p;)d=d.then(h[u++],h[u++]);return d}getUri(n){n=tr(this.defaults,n);const r=pf(n.baseURL,n.url,n.allowAbsoluteUrls,n);return sf(r,n.params,n.paramsSerializer)}};E.forEach(["delete","get","head","options"],function(n){Vn.prototype[n]=function(r,i){return this.request(tr(i||{},{method:n,url:r,data:i&&E.hasOwnProp(i,"data")?i.data:void 0}))}});E.forEach(["post","put","patch","query"],function(n){function r(i){return function(a,o,l){return this.request(tr(l||{},{method:n,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Vn.prototype[n]=r(),n!=="query"&&(Vn.prototype[n+"Form"]=r(!0))});let Cy=class wf{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(a){r=a});const i=this;this.promise.then(s=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](s);i._listeners=null}),this.promise.then=s=>{let a;const o=new Promise(l=>{i.subscribe(l),a=l}).then(s);return o.cancel=function(){i.unsubscribe(a)},o},n(function(a,o,l){i.reason||(i.reason=new ds(a,o,l),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const r=this._listeners.indexOf(n);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const n=new AbortController,r=i=>{n.abort(i)};return this.subscribe(r),n.signal.unsubscribe=()=>this.unsubscribe(r),n.signal}static source(){let n;return{token:new wf(function(s){n=s}),cancel:n}}};function Ey(e){return function(r){return e.apply(null,r)}}function Ry(e){return E.isObject(e)&&e.isAxiosError===!0}const Xs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Xs).forEach(([e,n])=>{Xs[n]===void 0&&(Xs[n]=e)});function yf(e){const n=new Vn(e),r=Hm(Vn.prototype.request,n);return E.extend(r,Vn.prototype,n,{allOwnKeys:!0}),E.extend(r,n,null,{allOwnKeys:!0}),r.create=function(s){return yf(tr(e,s))},r}const je=yf(cs);je.Axios=Vn;je.CanceledError=ds;je.CancelToken=Cy;je.isCancel=df;je.VERSION=ad;je.toFormData=qa;je.AxiosError=W;je.Cancel=je.CanceledError;je.all=function(n){return Promise.all(n)};je.spread=Ey;je.isAxiosError=Ry;je.mergeConfig=tr;je.AxiosHeaders=He;je.formToJSON=e=>lf(E.isHTMLForm(e)?new FormData(e):e);je.getAdapter=xf.getAdapter;je.HttpStatusCode=Xs;je.default=je;const{Axios:d2,AxiosError:h2,CanceledError:u2,isCancel:p2,CancelToken:m2,VERSION:f2,all:g2,Cancel:x2,isAxiosError:w2,spread:y2,toFormData:v2,AxiosHeaders:b2,HttpStatusCode:j2,formToJSON:A2,getAdapter:k2,mergeConfig:N2,create:S2}=je,ld="admin_token",Ya="admin_user",Py=e=>{try{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(atob(n))}catch{return null}},cd=()=>localStorage.getItem(ld),Qs=(e=cd())=>{const n=e&&Py(e);return n!=null&&n.exp?Math.max(0,n.exp*1e3-Date.now()):0},Sa=()=>Qs()>0,Ty=()=>{try{return JSON.parse(localStorage.getItem(Ya))}catch{return null}},vf=(e,n)=>{localStorage.setItem(ld,e),n&&localStorage.setItem(Ya,JSON.stringify(n))},Oy=e=>localStorage.setItem(Ya,JSON.stringify(e)),Ri=()=>{localStorage.removeItem(ld),localStorage.removeItem(Ya)},bf=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,jf=(e,n="")=>{const r=n.split("@")[0];return e.length<8?"At least 8 characters":!/[a-z]/i.test(e)||!/\d/.test(e)?"Use both letters and numbers":r.length>=3&&e.toLowerCase().includes(r.toLowerCase())?"Must not contain your email name":null},Ps="".replace(/\/+$/,""),Ly=Ps?Ps.endsWith("/api")?Ps:Ps+"/api":"/api",H=je.create({baseURL:Ly,timeout:6e4});H.interceptors.request.use(e=>{const n=cd();return n&&(e.headers.Authorization=`Bearer ${n}`),e});H.interceptors.response.use(e=>e,e=>{var i,s,a,o;const n=window.location.pathname.startsWith("/admin/"),r=(s=(i=e.config)==null?void 0:i.url)==null?void 0:s.includes("/admin/login");if(((a=e.response)==null?void 0:a.status)===401&&n&&!r){Ri();const l=((o=e.response.data)==null?void 0:o.code)==="TOKEN_EXPIRED"?"expired":"signedout";window.location.replace(`/admin?session=${l}`)}return Promise.reject(e)});const $r="/assets/logo-homwiser-Cd0C7JXv.png",_r=["Real Estate News","Gurgaon","Delhi NCR","Investment","Property Guide"],Qi=e=>{const n=new Date(e);return isNaN(n)?"":n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toUpperCase()},My=(e="")=>String(e).split(/\n\s*\n/).map(n=>n.trim()).filter(Boolean),Vl=e=>{const n=[e.excerpt,...(e.content||[]).flatMap(r=>[r.heading,r.text])].join(" ").split(/\s+/).filter(Boolean).length;return Math.max(1,Math.round(n/200))};function Bt(){const e=sr(),n=tn(),[r,i]=v.useState("Gurugram"),[s,a]=v.useState(""),o=w=>{w==null||w.preventDefault();const T=new URLSearchParams;r&&T.set("city",r),s.trim()&&T.set("q",s.trim()),n(`/search?${T.toString()}`)},l=e.pathname==="/",[c,h]=v.useState(!1),[d,u]=v.useState(null),[p,g]=v.useState(!1);v.useEffect(()=>{const w=()=>{g(window.scrollY>40)};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w)}},[]),v.useEffect(()=>{h(!1),u(null)},[e.pathname,e.search]),v.useEffect(()=>{if(!c)return;const w=y=>{y.key==="Escape"&&(h(!1),u(null))};document.addEventListener("keydown",w);const T=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",w),document.body.style.overflow=T}},[c]);const b=w=>{u(d===w?null:w)},k=()=>{h(!1),u(null)},N=[{label:"Home",link:"/"},{label:"About",link:"/about"},{label:"Budget",type:"simple",data:[{label:"Under 1 Cr",link:"/budget/under-1-cr"},{label:"1 Cr – 4 Cr",link:"/budget/1-cr-4-cr"},{label:"4 Cr – 8 Cr",link:"/budget/4-cr-8-cr"},{label:"8 Cr – 12 Cr",link:"/budget/8-cr-12-cr"},{label:"12 Cr – 16 Cr",link:"/budget/12-cr-16-cr"},{label:"16 Cr Onwards",link:"/budget/16-cr-onwards"}]},{label:"Property Type",type:"mega",data:[{label:"Residential Projects",children:[{label:"Apartment",link:"/residential-projects"},{label:"Luxury Villas",link:"/property-type/luxury-villas"},{label:"Independent Floors",link:"/property-type/independent-floors"},{label:"Pent House",link:"/property-type/pent-house"}]},{label:"Commercial Projects",children:[{label:"Shops",link:"/commercial/shops"},{label:"Office Space",link:"/commercial/office-space"},{label:"Food Court",link:"/commercial/food-court"},{label:"Anchor Stores",link:"/commercial/anchor-stores"},{label:"Cinema & Entertainment",link:"/commercial/cinema-entertainment"}]},{label:"SCO Plots",link:"/property-type/sco-plots"},{label:"Residential Plots",link:"/property-type/residential-plots"}]},{label:"Project Status",type:"simple",data:[{label:"Upcoming",link:"/status/upcoming"},{label:"New Launch",link:"/status/new-launch"},{label:"Under Construction",link:"/status/under-construction"},{label:"Ready To Move",link:"/status/ready-to-move"}]},{label:"Cities",type:"mega",data:[{label:"Gurugram",children:[{label:"Southern Peripheral Road (SPR)",link:"/location/southern-peripheral-road"},{label:"Dwarka Expressway",link:"/location/dwarka-expressway"},{label:"New Gurgaon",link:"/location/new-gurgaon"},{label:"Sohna Road",link:"/location/sohna-road"}]},{label:"Noida",children:[{label:"Noida Expressway",link:"/location/noida-expressway"},{label:"Noida Extension",link:"/location/noida-extension"},{label:"Yamuna Expressway",link:"/location/yamuna-expressway"}]},{label:"New Delhi",children:[{label:"Dwarka",link:"/location/dwarka"},{label:"South Delhi",link:"/location/south-delhi"},{label:"Central Delhi",link:"/location/central-delhi"}]},{label:"Faridabad",children:[{label:"Greater Faridabad",link:"/location/greater-faridabad"},{label:"Mathura Road",link:"/location/mathura-road"},{label:"Suraj Kund",link:"/location/suraj-kund"}]},{label:"Bengaluru",children:[{label:"North Bengaluru",link:"/location/north-bengaluru"},{label:"East Bengaluru",link:"/location/east-bengaluru"},{label:"Sarjapur Road (IT Corridor)",link:"/location/sarjapur-road"},{label:"South Bengaluru",link:"/location/south-bengaluru"},{label:"Hoskote & East Peripheral Belt",link:"/location/hoskote"}]},{label:"Hyderabad",children:[{label:"North Hyderabad",link:"/location/north-hyderabad"},{label:"South Hyderabad",link:"/location/south-hyderabad"},{label:"East Hyderabad",link:"/location/east-hyderabad"},{label:"West Hyderabad",link:"/location/west-hyderabad"}]},{label:"Mumbai",children:[{label:"South Mumbai",link:"/location/south-mumbai"},{label:"Navi Mumbai",link:"/location/navi-mumbai"},{label:"Panvel",link:"/location/panvel"},{label:"Central Mumbai",link:"/location/central-mumbai"},{label:"Kalyan",link:"/location/kalyan"}]},{label:"Pune",children:[{label:"West Pune",link:"/location/west-pune"},{label:"East Pune",link:"/location/east-pune"},{label:"Punawale",link:"/location/punawale"},{label:"South East Pune",link:"/location/south-east-pune"}]}]},{label:"Blog",type:"simple",data:[{label:"All Articles",link:"/blog"},..._r.map(w=>({label:w,link:`/blog?category=${encodeURIComponent(w)}`}))]},{label:"Contact",link:"./contact"}];return t.jsxs(t.Fragment,{children:[t.jsxs("header",{className:`hw-header ${l?"":"hw-header-inner-page"} ${p?"hw-header-scrolled":""}`,children:[t.jsxs("div",{className:"hw-header-inner",children:[t.jsx(V,{to:"/",className:"hw-logo",onClick:k,children:t.jsx("img",{src:$r,alt:"Homwisor",className:"hw-logo-image"})}),t.jsxs("div",{className:"hw-scroll-search",children:[t.jsxs("div",{className:"hw-location-select",children:[t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[t.jsx("path",{d:"M20 10.5C20 16 12 21 12 21S4 16 4 10.5a8 8 0 1 1 16 0Z",stroke:"currentColor",strokeWidth:"1.7"}),t.jsx("circle",{cx:"12",cy:"10.5",r:"2.4",stroke:"currentColor",strokeWidth:"1.7"})]}),t.jsxs("select",{value:r,onChange:w=>i(w.target.value),"aria-label":"Select city",children:[t.jsx("option",{children:"Gurugram"}),t.jsx("option",{children:"Noida"}),t.jsx("option",{children:"New Delhi"}),t.jsx("option",{children:"Faridabad"}),t.jsx("option",{children:"Bengaluru"}),t.jsx("option",{children:"Hyderabad"}),t.jsx("option",{children:"Mumbai"}),t.jsx("option",{children:"Pune"})]}),t.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"m6 9 6 6 6-6",stroke:"currentColor",strokeWidth:"2"})})]}),t.jsxs("div",{className:"hw-search-box",children:[t.jsx("input",{type:"text",value:s,onChange:w=>a(w.target.value),onKeyDown:w=>w.key==="Enter"&&o(w),placeholder:"Search projects, localities...","aria-label":"Search projects and localities"}),t.jsx("button",{type:"button","aria-label":"Search",onClick:o,children:t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[t.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4",stroke:"currentColor",strokeWidth:"1.8"}),t.jsx("path",{d:"m16 16 4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})})]})]}),t.jsx("nav",{className:"hw-nav",children:N.map(w=>{const T=w.type==="simple"||w.type==="mega",y=["Project Status","Cities","Resale"].includes(w.label);return t.jsxs("div",{className:`hw-nav-item ${y?`hw-scroll-menu-item hw-scroll-${w.label.toLowerCase().replace(/\s+/g,"-")}`:"hw-scroll-menu-hide"}`,onMouseEnter:()=>{T&&u(w.label)},onMouseLeave:()=>{T&&u(null)},children:[T?t.jsxs("button",{className:"hw-nav-link hw-nav-dropdown-button",onClick:()=>b(w.label),children:[t.jsx("span",{children:w.label}),t.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M6 9l6 6 6-6"})})]}):t.jsx(V,{to:w.link,className:"hw-nav-link",children:w.label}),T&&w.type==="simple"&&d===w.label&&t.jsx("div",{className:"hw-dropdown hw-simple-dropdown",children:w.data.map(j=>t.jsx(V,{to:j.link,className:"hw-dropdown-link",children:j.label},j.label))}),T&&w.type==="mega"&&d===w.label&&t.jsx("div",{className:"hw-dropdown hw-mega-dropdown",children:t.jsx("div",{className:"hw-mega-grid",children:w.data.map(j=>t.jsxs("div",{className:"hw-menu-group",children:[j.link?t.jsx(V,{to:j.link,className:"hw-group-title hw-direct-link",children:j.label}):t.jsx("div",{className:"hw-group-title",children:j.label}),j.children&&j.children.map(L=>t.jsx(V,{to:L.link,className:"hw-dropdown-child",children:L.label},L.label))]},j.label))})})]},w.label)})}),t.jsxs("div",{className:"hw-header-actions",children:[t.jsx("button",{type:"button",className:"hw-mobile-search-button","aria-label":"Search",onClick:()=>{const w=document.querySelector(".hw-scroll-search input");w&&(w.focus(),w.scrollIntoView({behavior:"smooth",block:"nearest"}))},children:t.jsxs("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[t.jsx("circle",{cx:"10.8",cy:"10.8",r:"6.4"}),t.jsx("path",{d:"m16 16 4.2 4.2"})]})}),t.jsx("button",{type:"button",className:"hw-menu-button",onClick:()=>h(w=>!w),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,children:c?t.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[t.jsx("path",{d:"M18 6L6 18"}),t.jsx("path",{d:"M6 6l12 12"})]}):t.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[t.jsx("path",{d:"M3 6h18"}),t.jsx("path",{d:"M3 12h18"}),t.jsx("path",{d:"M3 18h18"})]})})]})]}),c&&t.jsx("div",{className:"hw-mobile-backdrop",onClick:k,"aria-hidden":"true"}),c&&t.jsx("div",{className:"hw-mobile-menu",children:N.map(w=>{const T=w.type==="simple"||w.type==="mega";return t.jsx("div",{className:"hw-mobile-item",children:T?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"hw-mobile-main",onClick:()=>b(w.label),children:[t.jsx("span",{children:w.label}),t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M6 9l6 6 6-6"})})]}),d===w.label&&t.jsx("div",{className:"hw-mobile-submenu",children:w.data.map(y=>t.jsxs("div",{children:[y.link?t.jsx(V,{to:y.link,className:"hw-mobile-group",onClick:k,children:y.label}):t.jsx("div",{className:"hw-mobile-group",children:y.label}),y.children&&y.children.map(j=>t.jsx(V,{to:j.link,className:"hw-mobile-child",onClick:k,children:j.label},j.label))]},y.label))})]}):t.jsx(V,{to:w.link,className:"hw-mobile-main",onClick:k,children:w.label})},w.label)})})]}),t.jsx("style",{children:`

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
      `})]})}function Af({link:e,label:n,className:r,children:i}){const s=String(e||"").trim();return!s||s==="#"?i:/^https?:\/\//i.test(s)?t.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:r,"aria-label":n,children:i}):t.jsx(V,{to:s.startsWith("/")?s:`/${s}`,className:r,"aria-label":n,children:i})}const zy="/assets/bn1-Cpicj8ug.png",Iy="/assets/bn2-Dg5ASCxh.png";function By({banners:e=[]}){const[n,r]=v.useState(0),i=e.length?e:[{image:Iy},{image:zy}];v.useEffect(()=>{if(i.length<=1)return;const o=setInterval(()=>{r(l=>(l+1)%i.length)},5e3);return()=>clearInterval(o)},[i.length]);const s=()=>{r(o=>(o+1)%i.length)},a=()=>{r(o=>(o-1+i.length)%i.length)};return t.jsxs("section",{className:"hw-hero",children:[t.jsx("div",{className:"hw-slides",children:i.map((o,l)=>t.jsx("div",{className:`hw-slide ${l===n?"hw-slide-active":""}`,children:t.jsx(Af,{link:o.link,label:o.title,className:"hw-slide-link",children:t.jsx("img",{src:o.image,alt:o.title||"Premium Property"})})},l))}),i.length>1&&t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"hw-arrow hw-arrow-left",onClick:a,"aria-label":"Previous slide",children:"‹"}),t.jsx("button",{type:"button",className:"hw-arrow hw-arrow-right",onClick:s,"aria-label":"Next slide",children:"›"})]}),t.jsx("style",{children:`

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
      `})]})}function Dy(){const e=tn(),[n,r]=v.useState("Apartment"),[i,s]=v.useState(""),[a,o]=v.useState(""),[l,c]=v.useState(""),P=[{name:"Apartment",value:"Apartment",icon:()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M4 21V5.5L12 2l8 3.5V21",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8 21v-5h8v5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M8 8h2M14 8h2M8 11h2M14 11h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Villa",value:"Villa",icon:()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),t.jsx("path",{d:"M8 12h1M15 12h1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Farmhouse",value:"Farmhouse",icon:()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M3 21h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M5 21V10l7-6 7 6v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9 21v-5h6v5",stroke:"currentColor",strokeWidth:"1.6"}),t.jsx("path",{d:"M7 13h2M15 13h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Commercial",value:"Commercial",icon:()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M4 21V4h16v17",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),t.jsx("path",{d:"M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M10 21v-3h4v3",stroke:"currentColor",strokeWidth:"1.6"})]})},{name:"Branded",value:"Branded",icon:()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M12 3l2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3Z",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),t.jsx("path",{d:"M19 16v5M16.5 18.5h5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Luxury",value:"Luxury",icon:()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M3 12l9-8 9 8-9 8-9-8Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),t.jsx("path",{d:"M7 12h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Plots / Land",value:"Plots / Land",icon:()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M4 19l5-12 5 3 6-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M4 19h16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M9 7l-1-3M14 10l2-3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}],f=()=>{const x=new URLSearchParams;n&&x.set("type",n),i&&x.set("propertyType",i),a&&x.set("location",a),l&&x.set("budget",l),e(`/search?${x.toString()}`)},m=x=>{r(x.value),s(x.value)};return t.jsxs("section",{className:"hw-search-section",children:[t.jsxs("div",{className:"hw-search-container",children:[t.jsx("div",{className:"hw-search-tabs",children:P.map(x=>{const N=x.icon;return t.jsxs("button",{type:"button",className:`hw-search-tab ${n===x.value?"active":""}`,onClick:()=>m(x),children:[t.jsx("span",{className:"hw-tab-icon",children:t.jsx(N,{})}),t.jsx("span",{className:"hw-tab-text",children:x.name})]},x.value)})}),t.jsxs("div",{className:"hw-search-fields",children:[t.jsxs("div",{className:"hw-search-field hw-location-field",children:[t.jsx("span",{className:"hw-search-icon",children:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"11",cy:"11",r:"7"}),t.jsx("path",{d:"M20 20l-4-4"})]})}),t.jsx("input",{type:"text",value:a,onChange:x=>o(x.target.value),placeholder:"Search city, locality or project..."})]}),t.jsxs("div",{className:"hw-search-field hw-budget-field",children:[t.jsx("span",{className:"hw-search-icon hw-rupee",children:"₹"}),t.jsxs("select",{value:l,onChange:x=>c(x.target.value),children:[t.jsx("option",{value:"",children:"Budget"}),t.jsx("option",{value:"Under 1 Cr",children:"Under ₹1 Cr"}),t.jsx("option",{value:"1 Cr - 4 Cr",children:"₹1 Cr - ₹4 Cr"}),t.jsx("option",{value:"4 Cr - 8 Cr",children:"₹4 Cr - ₹8 Cr"}),t.jsx("option",{value:"8 Cr - 12 Cr",children:"₹8 Cr - ₹12 Cr"}),t.jsx("option",{value:"12 Cr - 16 Cr",children:"₹12 Cr - ₹16 Cr"}),t.jsx("option",{value:"16 Cr Onwards",children:"₹16 Cr Onwards"})]}),t.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),t.jsxs("div",{className:"hw-search-field hw-type-field",children:[t.jsx("span",{className:"hw-search-icon",children:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"1"}),t.jsx("path",{d:"M8 8h8"}),t.jsx("path",{d:"M8 12h8"}),t.jsx("path",{d:"M8 16h5"})]})}),t.jsxs("select",{value:i,onChange:x=>s(x.target.value),children:[t.jsx("option",{value:"",children:"Property Type"}),t.jsx("option",{value:"Apartment",children:"Apartment"}),t.jsx("option",{value:"Villa",children:"Villa"}),t.jsx("option",{value:"Farmhouse",children:"Farmhouse"}),t.jsx("option",{value:"Builder Floor",children:"Builder Floor"}),t.jsx("option",{value:"Commercial",children:"Commercial"}),t.jsx("option",{value:"Plots / Land",children:"Plots / Land"})]}),t.jsx("span",{className:"hw-select-arrow",children:"↓"})]}),t.jsxs("button",{type:"button",className:"hw-search-button",onClick:f,children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"11",cy:"11",r:"7"}),t.jsx("path",{d:"M20 20l-4-4"})]}),t.jsx("span",{children:"Search Properties"})]})]})]}),t.jsx("style",{children:`

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

      `})]})}const Xe=(e="")=>String(e).toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,90).replace(/-$/,""),kf=(e="")=>String(e).toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g,"-").replace(/^-+/,"").slice(0,90),it=e=>`/property/${encodeURIComponent((e==null?void 0:e.slug)||(e==null?void 0:e.id)||"")}`,Fy=(e,n=[])=>{const r=/^\/property\/([^/?#]+)(.*)$/.exec(String(e||""));if(!r)return e;const i=decodeURIComponent(r[1]),s=n.find(a=>a.slug===i||a.id===i||(a.oldSlugs||[]).includes(i));return s!=null&&s.slug?`/property/${s.slug}${r[2]}`:e},mn=e=>`/${encodeURIComponent(typeof e=="string"?e:(e==null?void 0:e.slug)||"")}`,Wy="/assets/s1-BVwoKduN.webp",Uy="/assets/s2-kewm8yNy.webp",Hy="/assets/s3-eKCFe4c6.webp";function $y({banners:e=[]}){const n=[{image:Wy},{image:Uy},{image:Hy}],r=e.length?e:n,[i,s]=v.useState(0);return v.useEffect(()=>{if(r.length<=1)return;const a=setInterval(()=>{s(o=>(o+1)%r.length)},5e3);return()=>clearInterval(a)},[r.length]),t.jsxs("section",{className:"hw-image-slider",children:[t.jsx("div",{className:"hw-image-slider-track",children:r.map((a,o)=>t.jsx("div",{className:`hw-image-slide ${o===i?"is-active":""}`,children:t.jsx(Af,{link:a.link,label:a.title,className:"hw-image-slide-link",children:t.jsx("img",{src:a.image,alt:a.title||"Property Banner"})})},o))}),t.jsx("style",{children:`

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

      `})]})}function _y({link:e,className:n,children:r}){const i=String(e||"").trim();return!i||i==="#"?t.jsx("div",{className:n,children:r}):/^https?:\/\//i.test(i)?t.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:n,children:r}):t.jsx(V,{to:i.startsWith("/")?i:`/${i}`,className:n,children:r})}const Gy="919090101401",Vy=e=>`https://wa.me/${Gy}?text=${encodeURIComponent(`Hi, I am interested in ${e.title}. Please share more details.`)}`;function qy({items:e=[]}){const n=v.useRef(null),r=(Array.isArray(e)?e:[]).filter(i=>(i==null?void 0:i.image)&&(i==null?void 0:i.title)).slice(0,4);return v.useEffect(()=>{const i=n.current;if(!i||r.length<2)return;let s=null;const a=()=>{clearInterval(s),s=setInterval(()=>{if(window.innerWidth>760)return;const o=i.querySelector(".hwr-card");if(!o)return;const l=o.getBoundingClientRect().width+12,c=i.scrollLeft>=i.scrollWidth-i.clientWidth-5;i.scrollTo({left:c?0:i.scrollLeft+l,behavior:"smooth"})},3500)};return a(),i.addEventListener("touchend",a,{passive:!0}),i.addEventListener("pointerup",a),()=>{clearInterval(s),i.removeEventListener("touchend",a),i.removeEventListener("pointerup",a)}},[r.length]),r.length?t.jsxs("section",{className:"hwr-section",children:[t.jsxs("div",{className:"hwr-head",children:[t.jsxs("h2",{children:[t.jsx("span",{className:"hwr-brand",children:"HomWisor"})," Recommended"]}),t.jsx("span",{className:"hwr-bar","aria-hidden":"true"}),t.jsx("p",{children:"Discover premium properties handpicked for luxury living and exceptional investment returns"})]}),t.jsx("div",{className:"hwr-grid",ref:n,children:r.map(i=>t.jsxs("div",{className:"hwr-card",children:[t.jsxs(_y,{link:i.link,className:"hwr-card-link",children:[t.jsx("img",{src:i.image,alt:i.title,loading:"lazy"}),t.jsx("span",{className:"hwr-shade","aria-hidden":"true"}),i.badge&&t.jsxs("span",{className:"hwr-badge",children:[t.jsx("i",{"aria-hidden":"true"}),i.badge]}),t.jsxs("span",{className:"hwr-info",children:[t.jsx("strong",{className:"hwr-name",children:i.title}),i.price&&t.jsx("span",{className:"hwr-price",children:i.price}),i.location&&t.jsxs("span",{className:"hwr-loc",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[t.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.6"})]}),t.jsx("span",{children:i.location})]})]})]}),t.jsxs("a",{className:"hwr-wa",href:Vy(i),target:"_blank",rel:"noopener noreferrer",children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),"WhatsApp"]})]},i.id||i.title))}),t.jsx("style",{children:`
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
      `})]}):null}const Ky="/assets/s4-CyUc3uZH.webp",Yy="/assets/s5-B3dJV6PK.webp",Xy="/assets/s6-BTGolWiF.webp",Ee="#D4AF37",Qh={position:"absolute",inset:0,zIndex:2,display:"block"};function Qy({properties:e=[],locations:n=[],upcoming:r=[],newlaunch:i=[],offers:s=[],promos:a=[],branded:o=null,luxury:l=null}){var M,q,Q,_,J,D,C,R,I,G;const c=[{id:1,title:"M3M Brabus Residences",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",priceRange:"₹20 - 28 Cr",location:"Sector 58, Golf Course Extension Road",bhk:"4 & 5 BHK",area:"4,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:2,title:"DLF Privana North",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",priceRange:"₹18.50 Cr",location:"Sector 76, Golf Course Extension Road",bhk:"3 & 4 BHK",area:"2,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:3,title:"M3M Crown",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",priceRange:"₹28 - 65 Cr",location:"Sector 111, Dwarka Expressway",bhk:"3, 4 & 5 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:4,title:"Emaar Palm Grove",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",priceRange:"₹25.00 Cr",location:"Sector 102, Dwarka Expressway",bhk:"4 & 5 BHK",area:"5,000+ Sq.Ft.",propertyType:"Villa",rera:!0},{id:5,title:"M3M Crown Luxury",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",priceRange:"₹30 - 70 Cr",location:"Sector 111, Gurugram",bhk:"4 & 5 BHK",area:"4,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:6,title:"DLF The Arbour",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",priceRange:"₹17.50 Cr",location:"Sector 63, Gurugram",bhk:"4 BHK",area:"3,500+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:7,title:"M3M Golf Estate",image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",priceRange:"₹19 - 45 Cr",location:"Sector 65, Gurugram",bhk:"3 & 4 BHK",area:"3,000+ Sq.Ft.",propertyType:"Apartment",rera:!0},{id:8,title:"Emaar Digi Homes",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",priceRange:"₹15.00 Cr",location:"Sector 62, Gurugram",bhk:"3 & 4 BHK",area:"2,800+ Sq.Ft.",propertyType:"Apartment",rera:!0}],h=Array.isArray(e)?e.filter(A=>A.category==="trending"||A.category==="recommended").slice(0,8):[],d=h.length>=4?h:c,u=Array.isArray(e)?e.filter(A=>["₹19","₹28","₹16","₹5.2"].some(U=>String((A==null?void 0:A.priceRange)||"").includes(U))||String((A==null?void 0:A.category)||"").toLowerCase()==="trending"):[],p=[e.find(A=>String((A==null?void 0:A.title)||"").toLowerCase().includes("oberoi three sixty"))||e.find(A=>String((A==null?void 0:A.title)||"").toLowerCase().includes("bptp"))||u[0],e.find(A=>String((A==null?void 0:A.title)||"").toLowerCase().includes("experion one 42"))||u[1],e.find(A=>String((A==null?void 0:A.title)||"").toLowerCase().includes("max estate 59"))||u[2],e.find(A=>String((A==null?void 0:A.title)||"").toLowerCase().includes("bptp downtown"))||u[3]].filter(Boolean).slice(0,4),g=(Array.isArray(o)?o:p).slice(0,4),b=(Array.isArray(l)?l:p).slice(0,4),k=g[0]||c.find(A=>String((A==null?void 0:A.title)||"").toLowerCase().includes("brabus"))||c[0],P=Array.isArray(r)&&r.length?r:Array.isArray(e)?e.filter(A=>String((A==null?void 0:A.category)||"").toLowerCase()==="upcoming"||String((A==null?void 0:A.status)||"").toLowerCase()==="upcoming"||String((A==null?void 0:A.propertyStatus)||"").toLowerCase()==="upcoming"):[],f=Array.isArray(i)&&i.length?i:Array.isArray(e)?e.filter(A=>String((A==null?void 0:A.category)||"").toLowerCase()==="newlaunch"||String((A==null?void 0:A.category)||"").toLowerCase()==="new-launch"||String((A==null?void 0:A.status)||"").toLowerCase()==="newlaunch"||String((A==null?void 0:A.propertyStatus)||"").toLowerCase()==="newlaunch"):[],m=Array.isArray(e)?e.filter(A=>String((A==null?void 0:A.category)||"").toLowerCase()==="sco").slice(0,4):[],x=Array.isArray(e)?e.filter(A=>String((A==null?void 0:A.category)||"").toLowerCase()==="commercial").slice(0,4):[],N=[{key:"sco",eyebrow:"SCO PROJECTS",title:"SCO Projects in",text:"Explore premium SCO plots and commercial projects in Gurugram",items:m,fallbackType:"SCO",fallbackArea:"SCO Plot"},{key:"commercial",eyebrow:"COMMERCIAL PROJECTS",title:"Commercial Projects in",text:"Retail, office and high-street commercial spaces in Gurugram",items:x,fallbackType:"Commercial",fallbackArea:"Commercial Space"}],w=[{id:1,name:"Golf Course Road",count:"245+ Properties",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"},{id:2,name:"Golf Course Extension",count:"320+ Properties",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85"},{id:3,name:"Dwarka Expressway",count:"410+ Properties",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85"},{id:4,name:"MG Road",count:"180+ Properties",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=85"},{id:5,name:"Sohna Road",count:"275+ Properties",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85"},{id:6,name:"New Gurgaon",count:"360+ Properties",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85"}],T=Array.isArray(n)&&n.length?n.slice(0,6):w,y=(Array.isArray(a)?a:[]).filter(A=>A==null?void 0:A.image).map(A=>({image:A.image,title:A.title,link:A.link&&A.link!=="#"?A.link:""}));y.length||y.push(...[Ky,Yy,Xy].map(A=>({image:A,title:"",link:""})));const[j,L]=v.useState(0);v.useEffect(()=>{if(y.length<=1)return;const A=setInterval(()=>{L(U=>(U+1)%y.length)},4500);return()=>clearInterval(A)},[y.length]);const S="919090101401",O=A=>{const U=encodeURIComponent(`Hi, I am interested in ${A.title}. Please share more details.`);return`https://wa.me/${S}?text=${U}`},F=[{label:"Under ₹1 Cr",sub:"Great homes within your budget",link:"/search?budget=under-1-cr",img:((M=w[0])==null?void 0:M.image)||((q=c[0])==null?void 0:q.image),icon:"◇"},{label:"₹1 Cr – ₹5 Cr",sub:"Premium living with a smart investment",link:"/search?budget=1-5-cr",img:((Q=w[1])==null?void 0:Q.image)||((_=c[1])==null?void 0:_.image),icon:"♢"},{label:"₹5 Crore – ₹10 Crore",sub:"Bigger spaces for a better lifestyle",link:"/search?budget=5-10-cr",img:((J=w[2])==null?void 0:J.image)||((D=c[2])==null?void 0:D.image),icon:"♕"},{label:"₹10 Crore – ₹20 Crore",sub:"Exclusive homes for discerning buyers",link:"/search?budget=10-20-cr",img:((C=w[3])==null?void 0:C.image)||((R=c[3])==null?void 0:R.image),icon:"♛"},{label:"₹20 Crore – ₹50 Crore",sub:"Ultra-luxury living redefined",link:"/search?budget=20-50-cr",img:((I=w[4])==null?void 0:I.image)||((G=c[4])==null?void 0:G.image),icon:"▥"}];return t.jsx("section",{className:"hw-trending-section",children:t.jsxs("div",{className:"hw-trending-container",children:[t.jsxs("div",{className:"hw-trending-header",children:[t.jsxs("div",{className:"hw-trending-heading",children:[t.jsxs("div",{className:"hw-trending-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["Trending Projects in"," ",t.jsx("span",{children:"Gurugram"})]}),t.jsx("p",{children:"Handpicked premium projects for a better tomorrow"})]}),t.jsxs(V,{to:"/search?category=trending",className:"hw-trending-view-all",children:[t.jsx("span",{children:"View All Projects"}),t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),t.jsxs("div",{className:"hw-trending-layout",children:[t.jsxs("div",{className:"hw-trending-left",children:[t.jsx("div",{className:"hw-trending-properties",children:d.slice(0,8).map((A,U)=>t.jsxs(V,{to:it(A),className:"hw-trending-card",children:[t.jsxs("div",{className:"hw-trending-image",children:[t.jsx("img",{src:A.image,alt:A.title,loading:"lazy"}),t.jsx("div",{className:"hw-image-overlay"}),A.rera!==!1&&t.jsx("div",{className:"hw-rera-group",children:t.jsxs("span",{className:"hw-rera-green",children:[t.jsx("b",{children:"✓"}),"RERA"]})}),t.jsxs("div",{className:"hw-bhk-badge",children:[A.bhk||"3 & 4 BHK",A.bhk&&A.propertyType?` • ${A.propertyType}`:""]})]}),t.jsxs("div",{className:"hw-trending-card-content",children:[t.jsx("h3",{children:A.title}),t.jsx("div",{className:"hw-card-price",children:A.priceRange||"Price on Request"}),t.jsxs("div",{className:"hw-card-location",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),t.jsx("span",{children:A.location||"Gurugram"})]}),t.jsxs("div",{className:"hw-card-meta",children:[t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M3 11h18"}),t.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),t.jsx("path",{d:"M4 19v-8"}),t.jsx("path",{d:"M20 19v-8"}),t.jsx("path",{d:"M4 15h16"})]}),t.jsx("span",{children:A.bhk||"3 & 4 BHK"})]}),t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M4 4h6"}),t.jsx("path",{d:"M4 4v6"}),t.jsx("path",{d:"M20 20h-6"}),t.jsx("path",{d:"M20 20v-6"}),t.jsx("path",{d:"M4 20h6"}),t.jsx("path",{d:"M4 20v-6"}),t.jsx("path",{d:"M20 4h-6"}),t.jsx("path",{d:"M20 4v6"})]}),t.jsx("span",{children:A.area||"2,500+ Sq.Ft."})]})]}),t.jsxs("a",{href:O(A),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:ae=>ae.stopPropagation(),children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),t.jsx("span",{children:"WhatsApp"})]})]})]},A.id||U))}),t.jsxs("section",{className:"hw-prime-locations",children:[t.jsx("div",{className:"hw-subsection-header",children:t.jsxs("div",{children:[t.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["Gurugram's"," ",t.jsx("span",{children:"Prime Locations"})]}),t.jsx("p",{children:"Explore properties in the most sought-after locations"})]})}),t.jsx("div",{className:"hw-location-grid",children:T.map(A=>t.jsxs(V,{to:`/search?location=${encodeURIComponent(A.name)}`,className:"hw-location-card",children:[t.jsx("img",{src:A.image,alt:A.name,loading:"lazy"}),t.jsx("div",{className:"hw-location-overlay"}),t.jsxs("div",{className:"hw-location-content",children:[t.jsx("div",{className:"hw-location-name",children:A.name}),t.jsx("div",{className:"hw-location-count",children:A.count})]})]},A.id))})]}),t.jsxs("section",{className:"hw-upcoming-projects",children:[t.jsxs("div",{className:"hw-upcoming-header",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["Upcoming Projects in ",t.jsx("span",{children:"Gurugram"})]}),t.jsx("p",{children:"Discover the latest upcoming developments in Gurugram"})]}),t.jsxs(V,{to:"/search?category=upcoming",className:"hw-upcoming-view-all",children:["View All Projects",t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),t.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:P.length>0?P.slice(0,4).map((A,U)=>t.jsxs(V,{to:it(A),className:"hw-trending-card",children:[t.jsxs("div",{className:"hw-trending-image",children:[t.jsx("img",{src:A.image,alt:A.title||"Upcoming Project",loading:"lazy"}),t.jsx("div",{className:"hw-image-overlay"}),A.rera!==!1&&t.jsx("div",{className:"hw-rera-group",children:t.jsxs("span",{className:"hw-rera-green",children:[t.jsx("b",{children:"✓"}),"RERA"]})}),t.jsxs("div",{className:"hw-bhk-badge",children:[A.bhk||"3 & 4 BHK",A.bhk&&A.propertyType?` • ${A.propertyType}`:""]})]}),t.jsxs("div",{className:"hw-trending-card-content",children:[t.jsx("h3",{children:A.title||"Upcoming Project"}),t.jsx("div",{className:"hw-card-price",children:A.priceRange||"Price on Request"}),t.jsxs("div",{className:"hw-card-location",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),t.jsx("span",{children:A.location||"Gurugram"})]}),t.jsxs("div",{className:"hw-card-meta",children:[t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M3 11h18"}),t.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),t.jsx("path",{d:"M4 19v-8"}),t.jsx("path",{d:"M20 19v-8"}),t.jsx("path",{d:"M4 15h16"})]}),t.jsx("span",{children:A.bhk||"3 & 4 BHK"})]}),t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M4 4h6"}),t.jsx("path",{d:"M4 4v6"}),t.jsx("path",{d:"M20 20h-6"}),t.jsx("path",{d:"M20 20v-6"}),t.jsx("path",{d:"M4 20h6"}),t.jsx("path",{d:"M4 20v-6"}),t.jsx("path",{d:"M20 4h-6"}),t.jsx("path",{d:"M20 4v6"})]}),t.jsx("span",{children:A.area||"2,500+ Sq.Ft."})]})]}),t.jsxs("a",{href:O(A),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:ae=>ae.stopPropagation(),children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),t.jsx("span",{children:"WhatsApp"})]})]})]},A.id||A._id||`upcoming-${U}`)):t.jsx("div",{className:"hw-upcoming-empty",children:t.jsx("strong",{children:"No upcoming projects found."})})})]}),t.jsxs("section",{className:"hw-upcoming-projects hw-newlaunch-projects",children:[t.jsxs("div",{className:"hw-upcoming-header",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["New Launch Projects in ",t.jsx("span",{children:"Gurugram"})]}),t.jsx("p",{children:"Explore the latest newly launched projects in Gurugram"})]}),t.jsxs(V,{to:"/search?category=newlaunch",className:"hw-upcoming-view-all",children:["View All Projects",t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),t.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:f.length>0?f.slice(0,4).map((A,U)=>t.jsxs(V,{to:it(A),className:"hw-trending-card",children:[t.jsxs("div",{className:"hw-trending-image",children:[t.jsx("img",{src:A.image,alt:A.title||"New Launch Project",loading:"lazy"}),t.jsx("div",{className:"hw-image-overlay"}),A.rera!==!1&&t.jsx("div",{className:"hw-rera-group",children:t.jsxs("span",{className:"hw-rera-green",children:[t.jsx("b",{children:"✓"}),"RERA"]})}),t.jsxs("div",{className:"hw-bhk-badge",children:[A.bhk||"3 & 4 BHK",A.bhk&&A.propertyType?` • ${A.propertyType}`:""]})]}),t.jsxs("div",{className:"hw-trending-card-content",children:[t.jsx("h3",{children:A.title||"New Launch Project"}),t.jsx("div",{className:"hw-card-price",children:A.priceRange||"Price on Request"}),t.jsxs("div",{className:"hw-card-location",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),t.jsx("span",{children:A.location||"Gurugram"})]}),t.jsxs("div",{className:"hw-card-meta",children:[t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M3 11h18"}),t.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),t.jsx("path",{d:"M4 19v-8"}),t.jsx("path",{d:"M20 19v-8"}),t.jsx("path",{d:"M4 15h16"})]}),t.jsx("span",{children:A.bhk||"3 & 4 BHK"})]}),t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M4 4h6"}),t.jsx("path",{d:"M4 4v6"}),t.jsx("path",{d:"M20 20h-6"}),t.jsx("path",{d:"M20 20v-6"}),t.jsx("path",{d:"M4 20h6"}),t.jsx("path",{d:"M4 20v-6"}),t.jsx("path",{d:"M20 4h-6"}),t.jsx("path",{d:"M20 4v6"})]}),t.jsx("span",{children:A.area||"2,500+ Sq.Ft."})]})]}),t.jsxs("a",{href:O(A),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:ae=>ae.stopPropagation(),children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),t.jsx("span",{children:"WhatsApp"})]})]})]},A.id||A._id||`newlaunch-${U}`)):t.jsx("div",{className:"hw-upcoming-empty",children:t.jsx("strong",{children:"No new launch projects found."})})})]}),t.jsxs("section",{className:"hw-festival-offers",children:[t.jsxs("div",{className:"hw-festival-header",children:[t.jsxs("div",{className:"hw-festival-title-wrap",children:[t.jsxs("div",{className:"hw-festival-brand-line",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["Best Festival Offer in ",t.jsx("span",{children:"2026"})]}),t.jsx("p",{children:"Exclusive deals on premium residences. Limited period offers, unmatched value."})]}),t.jsxs(V,{to:"/search?category=festival",className:"hw-festival-view-all",children:["View All Festival Offers",t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),t.jsxs("div",{className:"hw-festival-layout",children:[t.jsxs("div",{className:"hw-festival-banner",children:[t.jsx("div",{className:"hw-festival-banner-bg"}),t.jsx("div",{className:"hw-festival-banner-overlay"}),t.jsxs("div",{className:"hw-festival-banner-content",children:[t.jsx("div",{className:"hw-festival-mini-badge",children:"FESTIVE EDITION 2026"}),t.jsx("div",{className:"hw-festival-banner-kicker",children:"FESTIVAL LUXURY"}),t.jsxs("h3",{children:["Luxury",t.jsx("br",{}),"Homes.",t.jsx("br",{}),"Bigger",t.jsx("br",{}),"Celebrations."]}),t.jsx("p",{children:"This festive season, unlock exclusive offers on premium residences across Gurugram."}),t.jsxs("div",{className:"hw-festival-perks",children:[t.jsxs("div",{children:[t.jsx("span",{children:"◆"}),t.jsx("b",{children:"Limited Period Deals"})]}),t.jsxs("div",{children:[t.jsx("span",{children:"◆"}),t.jsx("b",{children:"Assured Appreciation"})]}),t.jsxs("div",{children:[t.jsx("span",{children:"◆"}),t.jsx("b",{children:"Flexible Payment Plans"})]})]}),t.jsxs(V,{to:"/search?category=festival",className:"hw-festival-explore",children:["Explore Offers",t.jsx("span",{children:"→"})]})]}),t.jsx("div",{className:"hw-festival-banner-brand",children:"HOMWISOR"})]}),t.jsx("div",{className:"hw-festival-grid",children:(Array.isArray(s)&&s.length?s:c).slice(0,6).map((A,U)=>t.jsxs(V,{to:`/property/${A.id||A._id||U}`,className:"hw-festival-card",children:[t.jsxs("div",{className:"hw-festival-card-image",children:[t.jsx("img",{src:A.image||A.thumbnail||c[U%c.length].image,alt:A.title||A.name||"Festival Offer",loading:"lazy"}),t.jsx("div",{className:"hw-festival-card-badge",children:A.badge||"EXCLUSIVE OFFER"}),t.jsx("div",{className:"hw-festival-card-arrow",children:"→"})]}),t.jsxs("div",{className:"hw-festival-card-content",children:[t.jsx("h3",{children:A.title||A.name||"Premium Festival Offer"}),t.jsx("div",{className:"hw-festival-card-price",children:A.priceRange||A.price||"Price on Request"}),t.jsxs("div",{className:"hw-festival-card-location",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),t.jsx("span",{children:A.location||A.locality||"Gurugram"})]})]})]},A.id||A._id||`festival-${U}`))})]})]}),g.length>0&&t.jsxs("section",{className:"hw-luxury-projects",children:[t.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["Branded Residences in ",t.jsx("span",{children:"IN"})]}),t.jsx("p",{children:"Explore premium branded residences and landmark projects"})]}),t.jsxs(V,{to:"/search?category=branded",className:"hw-upcoming-view-all",children:["View All Projects",t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),t.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:g.map((A,U)=>t.jsxs(V,{to:it(A),className:"hw-trending-card",children:[t.jsxs("div",{className:"hw-trending-image",children:[t.jsx("img",{src:A.image||A.thumbnail||c[U%c.length].image,alt:A.title||"Luxury Project",loading:"lazy"}),t.jsx("div",{className:"hw-image-overlay"}),A.rera!==!1&&t.jsx("div",{className:"hw-rera-group",children:t.jsxs("span",{className:"hw-rera-green",children:[t.jsx("b",{children:"✓"}),"RERA"]})}),t.jsxs("div",{className:"hw-bhk-badge",children:[A.bhk||"3 & 4 BHK",A.bhk&&A.propertyType?` • ${A.propertyType}`:""]})]}),t.jsxs("div",{className:"hw-trending-card-content",children:[t.jsx("h3",{children:A.title||"Luxury Project"}),t.jsx("div",{className:"hw-card-price",children:A.priceRange||A.price||"Price on Request"}),t.jsxs("div",{className:"hw-card-location",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),t.jsx("span",{children:A.location||"Gurugram"})]}),t.jsxs("div",{className:"hw-card-meta",children:[t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M3 11h18"}),t.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),t.jsx("path",{d:"M4 19v-8"}),t.jsx("path",{d:"M20 19v-8"}),t.jsx("path",{d:"M4 15h16"})]}),t.jsx("span",{children:A.bhk||"3 & 4 BHK"})]}),t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M4 4h6"}),t.jsx("path",{d:"M4 4v6"}),t.jsx("path",{d:"M20 20h-6"}),t.jsx("path",{d:"M20 20v-6"}),t.jsx("path",{d:"M4 20h6"}),t.jsx("path",{d:"M4 20v-6"}),t.jsx("path",{d:"M20 4h-6"}),t.jsx("path",{d:"M20 4v6"})]}),t.jsx("span",{children:A.area||"2,500+ Sq.Ft."})]})]}),t.jsxs("a",{href:O(A),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:ae=>ae.stopPropagation(),children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),t.jsx("span",{children:"WhatsApp"})]})]})]},A.id||A._id||`luxury-${U}`))})]}),t.jsx("section",{className:"hw-branded-feature",children:t.jsxs("div",{className:"hw-branded-feature-inner",children:[t.jsx("div",{className:"hw-branded-glow"}),t.jsxs("div",{className:"hw-branded-copy",children:[t.jsxs("div",{className:"hw-branded-label",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["Where ",t.jsx("span",{children:"Branded Residences"})," Meets",t.jsx("br",{}),"Architectural Masterpieces"]}),t.jsx("p",{children:"Indulge in our curated selection of signature branded residences. Crafted in collaboration with world-class fashion houses and legendary hoteliers to deliver a life of unmatched sophistication, bespoke concierge services, and timeless value."}),t.jsxs("div",{className:"hw-branded-points",children:[t.jsxs("div",{children:[t.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),t.jsx("span",{children:"Concierge & Valet Services"})]}),t.jsxs("div",{children:[t.jsx("span",{className:"hw-branded-point-icon",children:"◆"}),t.jsx("span",{children:"Fully RERA Verified Properties"})]})]}),t.jsxs("div",{className:"hw-branded-actions",children:[t.jsxs(V,{to:"/search?category=branded",className:"hw-branded-primary",children:["EXPLORE RESIDENCES ",t.jsx("span",{children:"→"})]}),t.jsx(V,{to:"/search?category=branded",className:"hw-branded-secondary",children:"GET INSTANT CALLBACK"})]})]}),t.jsxs("div",{className:"hw-branded-visual",children:[t.jsxs("div",{className:"hw-branded-main-image",children:[t.jsx("img",{src:(k==null?void 0:k.image)||(k==null?void 0:k.thumbnail)||"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=560&fit=crop",alt:(k==null?void 0:k.title)||"Branded Residence"}),t.jsxs("div",{className:"hw-branded-image-card",children:[t.jsxs("div",{children:[t.jsx("small",{children:"BRANDED RESIDENCES"}),t.jsx("strong",{children:(k==null?void 0:k.title)||"M3M Brabus Residences"})]}),t.jsxs(V,{to:k?it(k):"/search?category=branded",children:["EXPLORE ",t.jsx("span",{children:"→"})]})]})]}),t.jsxs("div",{className:"hw-branded-side-card",children:[t.jsx("img",{src:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=900&fit=crop",alt:"Luxury branded residence"}),t.jsx("div",{className:"hw-branded-side-overlay"}),t.jsxs("div",{className:"hw-branded-side-content",children:[t.jsx("span",{children:"HOMWISOR"}),t.jsx("strong",{children:"BRABUS"}),t.jsx("small",{children:"RESIDENCES"}),t.jsx("em",{children:"POWER. PRESTIGE. PERFECTION."}),t.jsx("label",{children:"COMING TO"}),t.jsx("b",{children:"SECTOR 58, GURGAON"}),t.jsx("div",{children:"4 & 5 BHK • STARTING FROM ₹20 CR*"})]})]})]})]})}),b.length>0&&t.jsxs("section",{className:"hw-luxury-projects",children:[t.jsxs("div",{className:"hw-upcoming-header hw-luxury-header",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"hw-subsection-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["Top Luxury Projects in ",t.jsx("span",{children:"IN"})]}),t.jsx("p",{children:"Explore premium branded residences and landmark projects"})]}),t.jsxs(V,{to:"/search?category=luxury",className:"hw-upcoming-view-all",children:["View All Projects",t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),t.jsx("div",{className:"hw-luxury-grid hw-trending-properties",children:b.map((A,U)=>t.jsxs(V,{to:it(A),className:"hw-trending-card",children:[t.jsxs("div",{className:"hw-trending-image",children:[t.jsx("img",{src:A.image||A.thumbnail||c[U%c.length].image,alt:A.title||"Luxury Project",loading:"lazy"}),t.jsx("div",{className:"hw-image-overlay"}),A.rera!==!1&&t.jsx("div",{className:"hw-rera-group",children:t.jsxs("span",{className:"hw-rera-green",children:[t.jsx("b",{children:"✓"}),"RERA"]})}),t.jsxs("div",{className:"hw-bhk-badge",children:[A.bhk||"3 & 4 BHK",A.bhk&&A.propertyType?` • ${A.propertyType}`:""]})]}),t.jsxs("div",{className:"hw-trending-card-content",children:[t.jsx("h3",{children:A.title||"Luxury Project"}),t.jsx("div",{className:"hw-card-price",children:A.priceRange||A.price||"Price on Request"}),t.jsxs("div",{className:"hw-card-location",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),t.jsx("span",{children:A.location||"Gurugram"})]}),t.jsxs("div",{className:"hw-card-meta",children:[t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M3 11h18"}),t.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),t.jsx("path",{d:"M4 19v-8"}),t.jsx("path",{d:"M20 19v-8"}),t.jsx("path",{d:"M4 15h16"})]}),t.jsx("span",{children:A.bhk||"3 & 4 BHK"})]}),t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M4 4h6"}),t.jsx("path",{d:"M4 4v6"}),t.jsx("path",{d:"M20 20h-6"}),t.jsx("path",{d:"M20 20v-6"}),t.jsx("path",{d:"M4 20h6"}),t.jsx("path",{d:"M4 20v-6"}),t.jsx("path",{d:"M20 4h-6"}),t.jsx("path",{d:"M20 4v6"})]}),t.jsx("span",{children:A.area||"2,500+ Sq.Ft."})]})]}),t.jsxs("a",{href:O(A),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:ae=>ae.stopPropagation(),children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),t.jsx("span",{children:"WhatsApp"})]})]})]},A.id||A._id||`luxury-${U}`))})]}),t.jsxs("section",{className:"hw-budget-section",children:[t.jsxs("div",{className:"hw-budget-header",children:[t.jsxs("div",{className:"hw-budget-heading",children:[t.jsxs("div",{className:"hw-budget-eyebrow",style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}}),"HOMWISOR",t.jsx("span",{className:"hw-section-line",style:{display:"block",width:28,height:1,flex:"0 0 28px",background:Ee}})]}),t.jsxs("h2",{children:["Top Budget ",t.jsx("span",{children:"Projects"})]}),t.jsx("p",{children:"Smart homes. Great value. A better tomorrow in Gurugram."})]}),t.jsxs(V,{to:"/search",className:"hw-upcoming-view-all",children:["View All Projects",t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),t.jsx("div",{className:"hw-budget-grid",children:F.map(A=>t.jsxs(V,{to:A.link,className:"hw-budget-card",children:[t.jsx("img",{src:A.img,alt:A.label,loading:"lazy"}),t.jsx("div",{className:"hw-budget-card-overlay"}),t.jsx("div",{className:"hw-budget-icon",children:A.icon}),t.jsxs("div",{className:"hw-budget-card-content",children:[t.jsx("h3",{children:A.label}),t.jsx("p",{children:A.sub})]}),t.jsx("span",{className:"hw-budget-card-arrow",children:"→"})]},A.label))})]}),N.map(A=>A.items.length>0&&t.jsxs("section",{className:"hw-upcoming-projects hw-sco-projects",children:[t.jsxs("div",{className:"hw-upcoming-header",children:[t.jsxs("div",{children:[t.jsx("div",{className:"hw-subsection-eyebrow",children:A.eyebrow}),t.jsxs("h2",{children:[A.title," ",t.jsx("span",{children:"Gurugram"})]}),t.jsx("p",{children:A.text})]}),t.jsxs(V,{to:`/search?category=${A.key}`,className:"hw-upcoming-view-all",children:["View All Projects",t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]})]}),t.jsx("div",{className:"hw-upcoming-grid hw-trending-properties",children:A.items.map((U,ae)=>t.jsxs(V,{to:it(U),className:"hw-trending-card",children:[t.jsxs("div",{className:"hw-trending-image",children:[t.jsx("img",{src:U.image||U.thumbnail,alt:U.title||A.eyebrow,loading:"lazy"}),t.jsx("div",{className:"hw-image-overlay"}),U.rera!==!1&&t.jsx("div",{className:"hw-rera-group",children:t.jsxs("span",{className:"hw-rera-green",children:[t.jsx("b",{children:"✓"})," RERA"]})}),t.jsx("div",{className:"hw-bhk-badge",children:U.propertyType||U.type||A.fallbackType})]}),t.jsxs("div",{className:"hw-trending-card-content",children:[t.jsx("h3",{children:U.title||U.name||A.eyebrow}),t.jsx("div",{className:"hw-card-price",children:U.priceRange||U.price||"Price on Request"}),t.jsxs("div",{className:"hw-card-location",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),t.jsx("span",{children:U.location||U.locality||"Gurugram"})]}),t.jsxs("div",{className:"hw-card-meta",children:[t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M4 4h6"}),t.jsx("path",{d:"M4 4v6"}),t.jsx("path",{d:"M20 20h-6"}),t.jsx("path",{d:"M20 20v-6"}),t.jsx("path",{d:"M4 20h6"}),t.jsx("path",{d:"M4 20v-6"}),t.jsx("path",{d:"M20 4h-6"}),t.jsx("path",{d:"M20 4v6"})]}),t.jsx("span",{children:U.area||U.landArea||U.bhk||A.fallbackArea})]}),t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M3 11h18"}),t.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),t.jsx("path",{d:"M4 19v-8"}),t.jsx("path",{d:"M20 19v-8"}),t.jsx("path",{d:"M4 15h16"})]}),t.jsx("span",{children:U.propertyType||U.type||"Commercial"})]})]}),t.jsxs("a",{href:O(U),target:"_blank",rel:"noopener noreferrer",className:"hw-card-whatsapp",onClick:Ne=>Ne.stopPropagation(),children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),t.jsx("span",{children:"WhatsApp"})]})]})]},U.id||U._id||`${A.key}-${ae}`))})]},A.key))]}),t.jsx("aside",{className:"hw-trending-ad",children:t.jsxs("div",{className:"hw-ad-slider",children:[y.map((A,U)=>{const ae=t.jsx("img",{src:A.image,alt:A.title||"Homwisor Advertisement"});return t.jsx("div",{className:`hw-ad-frame${U===j?" active":""}`,children:A.link&&U===j?/^https?:/i.test(A.link)?t.jsx("a",{href:A.link,target:"_blank",rel:"noopener noreferrer",style:Qh,children:ae}):t.jsx(V,{to:A.link,style:Qh,children:ae}):ae},U)}),t.jsx("div",{className:"hw-ad-dots",children:y.map((A,U)=>t.jsx("button",{type:"button","aria-label":`Advertisement ${U+1}`,className:U===j?"active":"",onClick:()=>L(U)},U))})]})})]})]})})}const Zy="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAoAACAAAAAAI0AAEAAAAAAAACywAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA3AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAADc21kYXQSAAoJOBl/7MICGg0gMpABROABBBBAoNf+rO9vENZLd/knyrmSDn+LrrbP4gtu6IqPzSGEBqJCxkZ1VjeE700QtuJ8rk7fzYoymKuOz3F8mJQZPeMVt7r7QEAAHuwn9rdxogLAZ0ZmsMktnVAdeTg7PUmU77ZW3Qyx0ei/EFsGy8xz2gYfo2T2gHm1s1VAVqEnZjFJ6tNyuICqACTkORV4EgAKBhgZf+zCoDK+BROAEECg2AF6CPOtQrgQv854b1HpCkV1NIyqo2TMFkQ6KjRsg/nP7fpXYXAcNAanV0M2nuSlKvHk+0ND/gkoxtQzRIlOayHB0kKoWGfhdAD8sf0H6E5lan+y59H91rcOKV0qehLUWP/CBvYw/HSZEVDLNyB79Co0oTfACpudbB85tlwnAQ3kK+D7BR7HmAXGtd6tPoV6pximDfx0lD0xOeyvILKZWGOR1N7TXHKAlV9Y295tQCaaIieXZwYk+fk6pK0usqquawkHQTKUPfu5vg1i6tzcyIIcT54y2hgBEQQ/2bPuBWslovdeQQBkDEj+4wHv2PfOMa0z1BCetsD6nSuoUQFnoUyKnAx2e3LN5g1XdIS57uxf3hkYRreBYfnj9oOngGNJb4I5kpb4r4EIKb+qiuxQ1F0jGQAayWMSSjyi8/Umrs8RtHpB3fnYE9qHsZXGU8DrmkiDHza3efTJvYuREUW/Lz9n77+Ch+aQtF0TE5GoV6zZxvFLUJohT2tSg0GQucjQDrX2c5dP6CFar2EhiMOmozUUxrqxViWpmR6EInQF43RCzO103Bw8Gu/OkEM1y63sacqie2YF1cjoqQE2ToMAFJYiJSmtowgwTW0JJzWnKWYWA2UycUXiAldYqzDSstUFONom9y/XVpYgYk2oFyztdLtzFirDt2OD2MUsf1kKCZbXZum2gzcgENJRzj6ZJmjvUYSDisd5gm/6TyQOcjdNtdVlxYCIYdQEwrn1NLmuMDaL6xvbdhQUDKpCIwXzEulLxQmxmeXtBZNbKZFu1g4eLPaEWz0F/lSy9wYVa9qAeSUL4A64l05X+XDelVQmiD6k67bEqGwp32eTfM44BzQ39Ify0ULRoHFu4XMH/OaymRxzVWURY1R7CJHoBAvbDvjA+eHQueksGcxvSh0MCH1EdQ03/SOhUpzpQA==",Jy="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAAywACAAAAAAJfAAEAAAAAAAAEQwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAAaAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAFFm1kYXQSAAoJOBk/5YQENBpAMrsBE4AEEEECgOk/eGS8lanpaeNHmUGZRLVVeklRS9cl8H9vn2VoabkKAsvohpQxGtxZeq0OWmG7cmDNQNUjpZDG5e8sHVCwHOrS2jc4nq9ULizp9ngaDEZJehfgT8Bf/bon6jz4rPzxVmDV6zdusv4Ct+2xL/rXOZIddKFz8iqctnO7mfNR5jjGT86mcGpRKr6c5YNjlSYTgVA1tTyikKNV6lEK6S27QzJ4JL1O9ypnl4Bu16mKlD6R3RqzgBIACgYYGT/lhUAytggTgBBAoPHZap47IRQ4Hg9u0O9scpCGlLiywQuHfoWLWI8xWzb7L85i9N+wWamvtPBG4S9GNo6VfrYzhjvKBZUjwcATivHUaa3q6nD08rr2AngloVt6TNKZbgrMtW6jeaPQbWE1abD0xG+WkLXXvRPav7Spa+yw+1Z9ntt6lYd3yGcPhPp7TAngTVFADvkAvgdTrMogXMapEQE+R9+2MHwvwn31xDHmsirJsa5z/+ID8g+Otrlb4YTNm/QVfPKBn3p/8EFUo+52vMa/fM551SNKIXr8O4P1BpBuR3OK7lVU7txqN+gdj4prLkOnMod90UrFrsQCy3arRgfMFhOi3N6PV2fV60u6y+K7QI9mrzszOSb4tVDWgZgFCdzwOgRf+7NtO7Tr0W0N3rvetY/QaRf1DJu59KXXtMg5jaFiu1UGMlemMm0A/58cIteaYgSrC7EyIvjH49m7KF7c8maDN9oLE0+HeTui7TzOPXdMfKvxECMUKeXWzCf6ZnwIWA0a4n4hkM/NuzNMfP33BXf2dBV9dYVEe/BcgfYvBjujrh91ehoEbEyB1+pr+SOjxUaIrEmId+agerWENxuqvI1S/4rSQ80whmu8/fp6vmso6x+/nNlDAqYruUuQ/5E0ykZW5jn0bpe43/R3nAXUIhsmEqa/FVQLyf6TMrqPr5A4/OIEi/1lvRZAu1TKvXSQEvffXOO+pxAHkNM+7mCGBphjEz70RoZnIwfqVC2mHRot3NL3kZKpANUMEoKhrc9KgX2688Q3DJGWVgBYWKnwWElgyLSC/4NVOTU0NoNNzQMG2JMnhgu+egyZ8LSH5eAmhWVp++reie9tewP89MVlfFutxSQr5tui6mjoVY+DY2qCm85LvOfZeEdPZ7P5PgorVOUw4BXRReBl33W1fwYIQzYS8GPLbqNW5bzZshY861uuy+/37YOJrAYfDc5VXmvaSYPeJwxHP2oJWh8c1MK8noe/8jKojkiybgL5l86/A8t+10o68dMhCS0SIp73i5NVAvUBEUhth/rADQe9Eo7QqNzx1e5PSehbsXbFesyej2ui5VYJ4ezAlTWromtruqc/Q68Q7PR9k/U/Mj2zdLXU6cTWcHflLP5a2VQz7O7C+t2kCxY/OgHAWgziUN7kWXL4rqZ7FNYzdi7UEaG2sSrWj5TyZ2ACiiCL17+19fxTx90rpXMh9s8FVn0I7E7YY6d5rb0Vva9BXPVqEjQXBU7jLFAGL0rOGON/zRc1BgIhpQAdYmBV45SNaI3EyeL3s1eRg1Um1ViJjEZF8GiyVYTvqR6lC6A6j3JBBEwtxlEBmrz2i+qm8Cca+dpW+pMw/5zCs4H/9Bxq1RyOaHhtq/WWT+vPgPXpaU4YMSVzTrtrYrCg7QbqZFGuHf7PZ0KXuOJH5AOHLn0QVAAvatI7Ff5hC0KKSCxFMUcVfJLw",ev="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAGRgACAAAAAAfaAAEAAAAAAAAGHgAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAArAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMbG1kYXQSAAoJOBl/1MICGg0gMrYMROABBBBAoNtHy//xpL+BV005da2uB8FibEpyx0i6gZ+cxoTNByskHj1fGMns5mSTZeRA4ivW3JWIiU5DmaL8aDaFEMMj+FkHGc4MTmL0EWofwoPbZxmnaPAuHelRdiwofFJtrEk4nNA54Gv6+Xz5q4oeJAblByJMJNKEM4ZWOZPpnyOrjOQ3dCEKFs4M1BwQOgDlbHULxwYzIUqRJCQgwh6I639o6C8nQeI0xMOH/LRbWGQGHzf2IQ26yBbeUIaa9Gu6QNCI0fsJhRGxoGE2feMolJzcPJtEv85fCpvKoyCcaqcZnDxaphIKl81OfF8k4rlTkftpwdlTHwao1iIAKsnPycD3v0f9p8evTJX94lkBblYwU40ejDU/mHIAleFIoTGLCX3zq01TVVd0Xp2huvXgwATxzpw+atU7xkWNaEf7toWfkL1lr+M1oieLbXnb38x4LY/2eqE1W5tcVGh6pbHslal76xulIgHhhf74sD7ZXbJ6NOn8V3lwuXiipTghp5E+dfweQUjsKTS8G3+oc8oL7gBPGzsCC7Ty2rkKx2Lk0PFRW+fI63Ow8wF5ItOuGtPs7zmqJfKxgdCkaMoiiWiDVaQdTS5n/GVI9eMeGRX5YVuNcYiPR425IwafPlvY7bheLYobQAGjBhEOEyLg7rlGdr6OATWsKu3SbpprmuHzaBTJnxBHd3SKuRAIrmPMOSfI/bZydF8lKlrv5L/4sxa+LK3zj+uM0r6mypD7YXxX73wjyGQL23hFYkbMTiJNyHvgkt2f2k1EZaCXg9zTk4XPtJbwyZNaubGpZH/Gs5ToN393Sxn1OZZLbKgMRaE/jcoq/oiwcfDZB93bGV4KlxCY0psuOOkOUwL9IsmriLr4Jwya8BtiWFLC6pTeIb7b5Wdg5IZnQcAq7XbQr9Lb7mVdehrrM7dCW+5mu0DZO62eL+H7TyghTMlDWaQY02MUQkIAo/f0zt+QAn+USE6hXQrKA/G8w/gPu4e4vRjSxNwEx1yYXVUcyqK7apo+idrp3VjGXL5a34WU2CvE/hTFwDbWdd4PqIHNdGcF1wnL96bStttvvFW6+wffekXtcUUCuy+k9L5JSMSgP3kCL7TiwFgAUZw20b+mBWwPid6VILcFKm7XLQDnjPns9W4srvM9K5IVsve/R+6+n/XEzR/WpzWZI7d3RIae1H7VDEGjJ4bZOiiAr+prstLxKNMUqA0DA0lx//As2hmMFHURGb4ksbYCl95MRD0p6HaCPtkdOOagG/SZ9ANgajxhBOvEx8GoOtyxX1jGlZy+XSJmruTkhWX7zMp5rCofXUHle8p58uBiT1xIGxp0PHed9PDb+5tVFHZzxNrLuCBuCsdMj+yooxFt2MwKn5vC/RalVSKtPS3Y/49s2RXiRFblQOdBnIxnHktdGIQd9esvzvOur7APPnDS4HCTqgKBMDYGm8HELritbP6qNNf5leP/W3SbHdtQ9/Oqy2kr+Q/DxgkYpt7FHfLZ3gS+nufw5nJfni2OG+I3sZGdxUB3TVja6EaiobNb/PqrOEkJ0lYxBeNjV20F1OiP6LqwjDk0ZlTG+3Dpy/Mi06eDvR+VAy60xC0+w2QPHxu1PwWxIr9fCRPPi9pFoqgBojz+LYz1HMl4mdv8FVMj2u4aJCeZBjjCyJwnDm1Jce3oPadVpu9nPYaNHieVL5OtBsp7ffwCsrbuxiAf8RtVhArjrJVV64K83OJZi5/gCDpPjQbwIftfvLDJab9N0HgQaxFwiBfuxQv6Rl8oBjLVuEqI+6/PoI12qgBF+80pTxwxbTy/4X1NFFYY1LjMkmGPE0uDV+QjsyTyplpH39/x8O7O2/SKRYuj1JeZtdGESiL3eRaCI/33n2VS2p4ptYyXszcSYLYLIlIWazHWw3iPNhaOE4HMh6VgARh3i+JqF/GrSis84Of/54KWJD2Xg0GQjL/xdFmGq8a7MfkWoeV+M+ed9eLD8+MBmHRxUtGMsd4qqwxF4c2Y0exuRD0G4Vgw1tiihIRs71FdFb4v8o4XBkW9VN/KhIodE1ZBjCzhx0kps8WNWWXJmWO2c5NKsX/klYseKoaGBng0mHpeZCFS5maK8XTx3cLERIUsRqkBwAYnAG+AEgAKBhgZf9TCoDKRDBOAEECg3SuGKP+8I1ONpmimVw00nG1fF14hXu4ERHojUiU2HFWSBbmCWdbNOSdizZjf749/3U1fkhhfHEwGhBbxf8LQx+hKAIjKlxxF44DRzhVxrL5FpjkxFkDYDDg8NBnQ0yfHpd2mNLfNHqCUt4PonpKKuVY936v5mdcuDrZ64O5rLP0IjXgOGwI82T90sG3UEkIGLctVdG14ZyazXQOYh+JlQRYhjgKM5wxg3sqgXuYCkSz1dGJ7nJIsAeHiWxEdEmVN9TOyvGe4VDkZIyvC7u2XbsMN1mIPBDtxajVbUf911aHOS5F1oIhY0v3Dq4J/ULTza10G0NfqaU8QbnTyYkvmCcgF8vxoPlkiN3kMXCYfsLKSVG6rmgxjK8Rpf5//+QOfHNYv0WFVtYLFXTj2N5EI+NxPUQX3TTFsL+6RelpY0MrpGamHbN/8sTAJk5RU8mJHqZjRtfoYi6bM/o/a4DRGu9sCYtsfmJO9av6p/kpyAeSJZh+e/93Nk/wI0z+mz+88v611zWr4GA0YfNehbqP6LSNBln6WmC0acvJnh1Yz8sxTXibYeXkrvu1DwGizQ5hcIQYJBJKYaYewlL28E7YnD2Pfxjat/n7kC+Wg0p1U3azZOo/n9oDkAouKVQTmxgULOVvKr8thrXC9vVrqlsb57dNzLZnU7nRgQTOWM9jQwDfna+d8wnvLT9Ne9EQrlYQBMQJVXepg4hSHRQfGI0jvE1h9iG1Bq+kiUQlQ+KEXSNoTenTp+yoamZdEehujBb4ThrjvKVtc3azo2qdcNMjeJ5o/GQFd4CPpoHzPGt3VxqnBDSBG0Gudes4/j75G6DjU9nPSY2G6i728nOAZieWhKnvqHQlnOnZEWRSZoWPqfzjH16Ynm6+tHwAdsteK12KH+x1wq/8fc9RFZ7pQEOynGBhEyVBsmmmkGpWdzgFAF6Qw2wCpfoamNr8tpjtpWIIyC3+QAf7g9R6Q0F0/lMsOMbjq6HBTYrv+OikBSwgmhmYPyTaLi5wtKacLgiCx9QSEn33+j8y4iFSuxk+GuT48EIqkVgH0jvEpNnp4dL+0ylk4oWplMzR+iLUERVBGvEp5rwH7PkX9rX8tFcXUAfgLcyGZGyY6WOpq5E0qJHy8YopxBQSENsKhFYanjKQFc3OXZ492BPvkD7XCTitAFn+mxfQK8afPuu0tkg2PBXigMROQsBdLFmHpM5mQdBdjd3wWir3+q8bIne6HTKQHcLbSS/BATiixxMuWdbW9ki13ID42taJZs2m9I3pUrN2w4TdTEoFKcOPlpavCxFcikkEjRB1MhL9mkHAU5o9Aedqa/21aBbKrBl4Q0k7JmnKRF+Rb4AmMw7X6sGHD5hMdGuYXep1NnSJlzD6HvZhARCJzgDvPZ4Jx2puZ/VtW3OTKuTNzyyC+/ANfVHbiYLkb2rwOIY6yyzcmPfJ2IdiEU0JXn1Ekxk8l9HhGAAslJUhB/NdTm/ICpXnT5sWpz6eVrwVX3gIpDzjNRnQbDFXiYuO8dJNQlUhEVMnhVVvpnPX7t1Ud3bvyzVUL69B7c37z7yZxzBSUUfkTB6zl6raEs0fDOKYV45+1e/yT8uG2VIw+L5DvjLS/CkU9t1v3Lu3ncnO01DGzuVYzSxZUc/opxsgIi5Aow3CVxChJAOt0ziYpH/EjIKBAetL2jr2ZAOBn/D4b5FcKHlCQGm9rnrsGtL9U4cs5Kyw8M/BXPuHTxGXtwNC0A7xzULUrX/F6kENQDBrSkArPI85hXaIcJQyFPzDnhNuBQUY77+zx0aPHEN0ITnZT7QPaRPfdUM47ldyvu/tqMtDpSEWvLJX9Zfwm/BKxcAuG6CE22I0xYSYDmdmq3hIOtrdCioZ6leJBy4rS0+sFDU1n5MifB3Me0UQGjgJDk8YsXXGnyv/YXXsKXQhktBK7uloQouEArIGOhxYK9AdOm+oGP3h6Gc8Vyw//JfklNRd7e2NXG7iB4aZPWtSi4ukOmdsbgr0hW4Lpjq9RzgJsr/yYE3CSDCMfJlTDAcwbiPOY4HtFiJnkXdMpU5SbmbKhRnJwWDCcYf7lo7f8",tv="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAFhQACAAAAAAcZAAEAAAAAAAAGhwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAAA/AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAMFG1kYXQSAAoJOBl//MICGg0gMvUKROABBBBAoNzPlcdBEEEDVJnuiNEyPdUPh1D17yYOiwwITk5pZQPF2puGWU0UsUVI58UZX6fa1WWOl3m8b0c+z2a6Waaz22bLVfCxZ5pXOoKm370l9SZ49/jOa6iu940RhQwAzCpsXNhX6Ho5oSdTpTYfQFqveq6Ik3H413RRV6hhBgbEjG4A3FveJMPe5Eib990IBhxn7LQljie8Ayx2e5Ogu+jJPFHj07kmCi94iE9nEg66X4uxdtdrJf9SVCtQG1si5GeFxt7Mi0TZ/4XwdlxVmOmF7GoeoAASRXMwb7CoYQxPB1P54KaGEjfXqHdXUbl8qYkDR2kWKtI5UVZt03be6xg6D4HtZyMdEf6w0tpZjafeiPjd88ckp0386AtCEbIYhWwb8YcNKg56XEG0e/4n/ukz2HyL9L7VRzI36aqAjrcQ6xKoao+ZfHhms0iqCfYlzygK58xcRLHQo2TX51FuGq/SY3ih5csT84gv38+gpqATqXN7cLvvz1mmkLhYPlMxE14JCWCrUAPMkjkf8mslzya5DjNNGia4AqgpuAc+i7jzkCGGvDTjPElsgHh/LBQAOXSRNW39UCVediApyQoFGZjxY/3PKZuyGJMC10HJMW/CcBJRF4Xh1oRwpLYlBmeIk6tLj/A/AAkiJNlbdkQDg6brAgG6g+s2saoiImylp9dwwZvxaZOBcj0DXj4Sbl7FbaxoLmcA75yk4/vP/TJubkqCTSt8dpMEwWRTJB+4YDivnGfYoXVtVokgMDps6zify6yQbZv9JBpyCVDQFDGwcwT9paTtbVpf0jxEYj5rZ70dvfHAZ6vPVyplh4ymJCMDESg+iDO1CjoeWeqxb63bOdJ513RWzSxIh5JSBl6hFOQT+cx6k01U2C8RAGXieH89BFwWhXkxQBMCfRECrO5XSTICMxoqsk3ifUz38WtXed6wJmtJVmM4hCGV87oJnpCK41/a+Nes4mJTLR/yZJ8at8Qle1Zn+knoFw+qjXmBwSNvqVwCI98VeWPTgV35drY/36M80IbO1zJE8m9Ka0l+QSKsnZ+366IGGZNOje/PiAjHGuiEex0F45MsReq3vavV0ZnF1gSbtwFr4F/X2fTodroOZfhvVsQwOYQzz199+ME6oof5Ay5fdzUn48V/iKdgwOof59puBDjUO6v920lQ8S0vJ0nh9L9xi0U8BRYDGD9qnLeFt4uSU+Rd61bsiBDsgY6VEaxDYWBXbKU5aaEmcotZVzTGaK1sXtPIXyQ1a2VXXYIliND1PMwieFBz7QYa5K2AcrlcKlKJBTN7+sutsWg3axJp1YlTVVkO/tcF/g02ynMc+eZi2lxDUOBw70LMk8H1sKHX/emW1a7Z6AsDsoCFEGlyfPv7xJFllAHEOMcpvSXJhk8chcUQNgo8a4/XAI+4fsTHbjhkf2xf3KHEFWV6FdzvaWEFhtV+uDN/OE+A6IhNbDNz8IgcfKTLNF9eiHGa4d6PQpoNTaTqkzE1We/xuwpcRac0AuhHQBj4+j+BFtxukCK2Two2WcCSZNg1eYdtL5JNpO/Lji6PKitVBEIq9Y9VJ+R1Mm6+MDqbX0JpGl4ikix/SfWnmYaPSKscQKCcFqG0ric6h6HqCSC/32fCdhbciibTuOQUR7zPmIM8t7cSWkWvbIqvIM1oqGf2MNtVLvbgOsV4CBohYjzyEH5lXJVLq+cXoUy3vpRg5T5X1zPSW2v/gxv32QlOT8rFLWTKVXwHOBPKejx1rSEDljMPLi+iW6SJlw+bbXJCqPJRRQ+I+mzNMeiRiK9rYL+M34nwEGiL2Y3fOcMJMvJK+Ynr7VpV/1bWCIrfWu51HUNagaaUf/5kfWLq6SK0s8jLjy4SAAoGGBl//MKgMvoME4AQQKDdLANY8a5ihC48a+vLruZGsFg0HSjw82XLtKa76l4MgvsZg9+e82JsgiJ40yYqpXAKUr5jMcxbPLa1aezsLhLUU8xDbJmA2OfB2qcG5GDKwGrmvBOT7XCquIoP0aWnXi1PDbtjRScSFFQrnk2ltlNfBHOBML0vZeE7eRWrYCzA+mzNOttjGCWS2PmQ0j3IHTmg4ttly5a1vHaRB1ZfBEkRHyK+ePREQIndkEfigjjwO5O4zSh1lceAt78FQ0qYTW2hVbUKlkoM4BS/FlGG6ClLgrhIJ5KQAIBao+KIJatEoQ1V/mg9yU+j5JSapy/DT/as9tD2cXgE7LYt2r05PVEBf+80913xydEWHFXZqiZ49iN63sOwn2B0OR2Fi3VUfhrGz0WZhtlA/iX/Vg5bD+palvqcFo0pVsNLcqIDUm8I7WCQZbAmImjco1sLPJfBEWcl9Vq2ql+bSO40lK3Jf7ZtAQfKTkmzwVwNvOZN9/JoGmEJX5u+21ti7h2aZ4XSYqQZHmx/F/jh18jMsTi9fukpC4adDX3znpRFThlBrQIE0db/aO9Xpk0jxDn3FxuGwp0cQEwlOLYxURRTMdDbgc5+VUgaMOol8pXJFGGRTA882qtCXTiooNPeFN4ycNVVXKk52BwlVF/jCwajXcYu8gW5dU3jqUqAPGt59JMuc75xGJ7GEHvg3YisA4dw+s92/n6fSBJwA/2kjt2kT28RhiVn4JK5JICqqsJ3Brpj01X9pV51NMwzYu3TYLJGBmsuZtQsbQLKCqP4IafF0AT7WzxDGpoTXtUIk4kD5SKiEEB3DsbenuFg/JUts4n97/RmPomunR73JyNnYJNsnjH4wkwwyI7LFXDgcV88DRRT3Iue1NMYpXrEEftSiUOAub5CJng2sjG2DHySt/6bzMN4e9JLdKuQWAbtS6OsCqUOx+viYC1J60o6eERTtVjERKLGXN3Gu24Lpo0KrRt7AdmT+dedcawIrrOBxmK8E804X2oKotOOM6/ON5T6p1/XynMqsOYT8e978BW2ZPSHNyzkhbUZ3jOoQVp/xjE2ujpv4ZiIZJcekY6p2TDWL/5XYOlJ9bTNACxLDt1UHFMVsbstNwczq8SK0PbgLneMBamWM2yzZe1fDzf48qoLZ4kAl/rdmwkdYd57H1Af+Nt+ONObw4ah/Vou7dYwaPMY3jvhmLtCJQNst8x9VU7El3/2Fnzy/elWaH3+XARG8fdRCGoXHxMUKtWzgNwpwnc20flCloJYopyMvTni5F/0pNMd7yZXL0Rc9Ce25KzaWIkhjC7htQZjojFR9CqSeCHV3XumzpWITIj3ruoSeZFOYokHRDQbon1hqQTpoP64R+phdnyOqnlRDJhfz6O2E0Q3yqRNtdgmUqpE60Ir4VB+8o+I3Uflx+ahPERdy3eQdQSs8cxZC8ou2pY5NGqr+SJDfsaUBDyjyl4pQJI8+AS4Gr34T4E6hj4BZjpkpW9a2qbjTGvVPkuW6ZyVVQJCxsQYEPXFzZi+WJzeVmbwi8JdkVjNRzdzcVoFSfOuFwl22rzKXlAKE2vz6TAywBzGf1JUYbnsD3PgdEP3ZyCPm0ybTo3B8COc9Q8beDSELJEeP2jPzY49uiOr/Va3Wa+yel1YMoPFIKlTeGXbPHD3N6oHV86LdL5sh+MuuERlO4x9V9mUMwCYT2/8cBpDFx85nUAH/4UR/F+PtnCrya3JIuqr4nqGzVKBNhm45Yl+HP4cTgqDAomfIkjYnbn2FsLjJJbVe+1mFTjzIb5vNrQDKejncZOaaoaX/TKBQvsz923cA8HBskOuImA7hRahRpY+VCF7SRZrywBUV0NO79u2L0Q5KzjZa9IUkSKz0oyPCwrySlyEOUVAWNtKA1G+sWDvJO9QhgYsodzyAOmhWL5wek3O87lbR4CIV3E3yAApjPESoiixidoTTM9zCWphpe+Z5WAeAwTRWjJx9PI+tr1ZA0gRmcHp1Jx7x53DAbt7y/QnLuXb/ERSDpNQgm3rtFK2UHYswgF2aMXCjkR1KCKj/A4eC0FbwZzCYYIFr7GX9epy+h3pftHHR7vMfqFwRKfl6OmLKRQA5efu45aSzX4GunRaAcPOXijq2yx8bVcIg8rDQRhY9Z8XckDIxJ7pabo1ZrGp8E/KDM1MrqDEFGn3wjIWavVfZrAfKo4QGg3pDyeZsGBjKyBmIosZlj99/8A=",nv="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAE5wAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAABVAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAATvbWRhdBIACgk4Gb/UYQENBpAy1wkRwAIIIIFA1/7S1hAQbgM6tsfIR+WZ4mBsWILYI4fSZfdrILAqhSRq0TCSfh4ly+WvJH2UQQmJtmJgSZGxGiKUfdGbZfI8bourfoFwGzt7lDkVF0JFqinz2egtYGW8p2ziHRrm6cztXUUVDJ7kifCblyVuPzGDNmZg9AY2sgXV6fGAt+acCIubv8KAA8db0udbboWmHP7x5yGnFU/2OlAX7Rvo5bdHuwhDccDWMm9R7lJW6v/ejbhL0JJa46jwhhATpftcuzrpg7Q68EKv9aTrOLv9tts4GckwW8kylBXlZpyxi1IwBK2yzq9ZhPoaCNs1eVCg+komI1918AN0B65JUBs6VNWB9ZlsLqQ/umaD6JVfuEyfR3q7Za2lJZbZhecxamE3nvCBfRIY0qcxGY1ht5+YeaUhLe0SZrySKMOqOzDtI0EZv9xIZZySzkurs2+eWULcYVVdSK9ny+RS7HvMG4wCGzyCApIHDnfeOhWC7QK8C+PMUOy/OUuECwr92h1oOP3m4AO6uoMjPI4JIk2drvNxNS1JoCf/X/2CSKE55zAoiazDueW+S3r2JILTK+QxbKhwNeVSSZ+vF3UsZT3H50XKppLdyb6KBug6+nRARnNqOWn3kseU1y3Oxsin/8tS7rzMfEq+0OOkMsWqC6PmRUbQY4gC3DtR7Yjlc3weH/wIq4wa5rcnNnWvC3jVU5S6ih9zjPjYoGdV8nfZg1kAmVe0hdAf7ZqfBDjwKj9Ib3pxWVqRm3jeC3oJwjv1HGD3Y6sw37ynlApJZH5XaobaOf8tRReyXVOlVDZyVNJJVIqYGA+i+nF4NMPOTP97VXZWWSPc7XT33Io18vntvThfkeRWjwm2nYMscWPKpx17nu6znGy/TaIeJwjFtDdOxew5D3+0BNwb12toXFj9UyqfqTl17eNXPY/9oYbZ/FPVKOJmrfEQxJiQ29oL7SH96I87xs8RXdVZwRZrjY7z5bnHRTX7CdoBPJOX7WCIe++SHTAUlORiHboBzy2gF8uFvZgfocZmXLibbEbVH/ILdnJgQaRqXgf5aGl5p/XmrZhbfsJ7AAzR6GNPpDoUVRoDRUm307F8zVC/GS+AD7vbbjorpPKIezS03tCv4ZdaedjGJ9UbhuEMCNqXCJkuPHOhXX3hsy4IyX9NGoEvfwMa44rAhz66kE1uns9fFoY+vVFUnCnT53b1IbVFaNDt5OFJRcSIex1x4GWb/khBFUXVnUc2EYjEjmaleywhOZVX/a2NY/VNDjJDmRG9p+BntTh+g36eU/kTB87Uf5RLA4339hSKPQfV+doqYjg8kcYG4HyeKElk0vYSAyGGhfKscboZ/hZX7ScMFQB7TWx/vb83oFOh4MEmXr0p7CsWsKgaPJix52Of0Oi28woAkmJXltfLA+0ahCqk3UbfJkZIrMAyzm6mEvvkUcYvyhlTPMq9kqivsJKfdmCe2rKmZCxFVHYZBDee1Z2SIjDjK2h6MYRlcJbCk4WRPjPdXfAe2/8Z6s8e7JfbnX9CIxvX3HF9UK3XnYcein8g5Q5tMlJx6fLQJUtPAtHlPMc63bu9l8qZZ4lfiWSeWPo3SRUB14peg4coMzrLHN/ABljlNcmqXk4K3qhG0NGY5D6qwGXVQD1RerEzD95j3TW0TYc=",rv="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAFggAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAIAAAACAAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAWKbWRhdBIACgk4Gb//YQENBpAy8goRwAIIIIFAtF680kfPQwaI1Kcywl3BeQ8z4QxUTktitnzjlfA6Kx9mHBuyHp/L7cZbu8oKuHLSLAdMN8Q0KQUP/mNETsM0edaz4uLHLl4UXjQ02eDbZV+0v9LB5reip1J9tl4rEm4+X5D2P4nkbRzucuY48SogddPfeXU2FN1k4JDF3JREBrfVjOSa8RfnKnzfLIn4JENnpCGcM7WzQCNO42V7j9Do64SdQfNFFYKizS67DanRpdtSpl4EDdOOe3eqww2avYoG4bYFPRDQ0is5hAEsxDHG0Q9TkGSdgeiVDwXfj3pHD0mc+SL/mm7LV91g/e/Vv3hCJAF391iq8rGID9nn3RPYpOOLj8AyDa/ttRv8x1KhLosK9QqDE1umpqmrkgT3VLeHb6SBlriU5l4OEAeWfvwd+x2h/A0D1udKyfpy5bUmPEf0z2nsjWVajGCkeiTKaDV9NmRE/PfSk/j3LqkbCgcdEpW84fpWCnNmFaLcE5bgnITFCvfMcrGe7Yr9yLzextWVQx+fZ2Vsb0rYZrlB2eTCc7jJX6vfdHE74n0HQkBQwWZ3lWt+NmR5ltECi5nrcgPOybPKTcuktkZ1GhrrEOov8/Bji8E/Lx/QfJV3Dva78zj3bXhVDzNwTwMYd11/iZQtQNooFySfYPw9fBKJDJKfg4B9oTgMpsX1jgsGAUB0HTevhh49nkpR9eisMMS7AxO1uEXqmGTBhItf+WzdugnN3AZpByLNQKfR7irNh/Bo4WR2ZRwT3T2l24QqTffXx8AN2lLASN5DF38FYwdsV90K12J36ksBMYGE15B5Is4z0CT+Udw+LrPjQoGxrmjE8OmfvAtd9US6EiuK06N4i3/gBTeNY1mxrrFMj+vmGfCoFlh89HnkrANfv2F3H5mdVjuU2dz8dkJcoxXGw3R/WP2XOCaR/yo2J1UC25JfBaHn4EDdQiE06Wuxsk/tB4RLYstIxm6eydHSnZWoHDtQ/88rP/7U6cGtARUjqnMu/dt5aXAwDyice+p0/O3bQxr0WPDXWgk012D5Jd9GihHDhtT7eP1accWsveWP1O+vrl/z9zILMiMKrIa6YbFio+7XsQC4mu0NiaCuqfDWT00/ERd7ahPA+u2HYJHS70YY+qPuAmXnyc2L+g5IY+I+wtsbP39aSsmZpa2brWgo3ZkzhalNbwpoWabIR0J5e8ZnFAapozLgCOifvDgFXtRKoAJ4WFOFgYJgk76I1n6tc4eM9qO0U9jFcgOMj3CFWU6UvdUynL4haERD0j/UMbpbFnFWo0mnjSkwNG+CU143UNlmrFPgmQNEl/TWtEtAegaTByBHSRFYNd9Ap5wNG3US71VX6O/gbknzbSZmMtCYgesOZ8YlB5d7ix3zlI0GQ/uSn2wbVhO+2uwVyCEPFUtXT31YrR/I2TL/83Tm0ADIVeee14N0dLNBuNEbwS/O/HbDFtn5MQcYXJT0O+FIjARwdk30e5yyArcjZ13jhEEFATSK8KBpwYlv0e8fNmyJ3hKmnzAw16uwdRAv+WT2eTHTbPSHnuThy2uUWRKqDP6IOXqN1ES7IOhp8rN5n+8tJL7cy9RCnD9+VJE7W0vzyg8CwiJIqa2R42dUgFDWkbgB74e1gp/vRsB3qabyvAEU5smQwtSF5J1vtGMzTWufcOFGKzyZXlLO4EySkJ9xCjw5rADyfmJE0G87SiKQj76gotreVUprOeBtLXKk5qzJnCvnSB0uhZqVo/ifpihcY30APByII9fWNTFRVbC/65dcL5W3nKW0+PQh7VuQ8i5muIfwGw0C6okukOjnnCLZzrmJDIXHNJi7qkbhlsI8HmkuonLiFmx3GP+MjGtC8gIxi+pRkA==",iv={dlf:Zy,godrej:Jy,experion:ev,m3m:tv,max:nv,trump:rv},Zh=12,Jh=(e="")=>String(e).trim().split(/\s+/)[0].toLowerCase(),sv=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase(),av=e=>e.city||String(e.location||"").split(",").pop().trim(),ov=(e,n)=>{const r=Jh(e.name),i=n.filter(a=>Jh(a.developer)===r),s=e.logo&&!/via\.placeholder\.com|dummyimage\.com/.test(e.logo);return{id:e.id||e.name,name:e.name,logo:iv[r]||(s?e.logo:""),count:e.count||parseInt(e.projects,10)||0,listed:i,link:`/search?q=${encodeURIComponent(r)}`}};function lv({developer:e}){const[n,r]=v.useState(!1);return!e.logo||n?t.jsx("span",{className:"hwdk-mono",children:sv(e.name)}):t.jsx("img",{src:e.logo,alt:`${e.name} logo`,loading:"lazy",onError:()=>r(!0)})}function cv({builders:e=[],properties:n=[]}){const[r,i]=v.useState(!1),s=e.map(d=>ov(d,n));if(!s.length)return null;const a=r?s:s.slice(0,Zh),o=s.reduce((d,u)=>d+u.count,0),l=s.reduce((d,u)=>d+u.listed.length,0),c=new Set(s.flatMap(d=>d.listed.map(av)).filter(Boolean)).size,h=[[`${s.length}+`,"Developers"],o>0&&[`${o}+`,"Projects"],l>0&&[l,"Live Listings"],c>0&&[c,c===1?"City":"Cities"]].filter(Boolean);return t.jsxs("section",{className:"hwdk",children:[t.jsx("div",{className:"hwdk-glow","aria-hidden":"true"}),t.jsxs("div",{className:"hwdk-wrap",children:[t.jsxs("header",{className:"hwdk-head",children:[t.jsxs("div",{className:"hwdk-eyebrow",children:[t.jsx("span",{}),"TRUSTED NAMES",t.jsx("span",{})]}),t.jsxs("h2",{children:["Top Property ",t.jsx("em",{children:"Developers"})]}),t.jsx("p",{children:"Partnering with India's most trusted builders to bring you the best properties."})]}),t.jsx("div",{className:"hwdk-grid",children:a.map(d=>t.jsxs(V,{to:d.link,className:"hwdk-tile","aria-label":`View ${d.name} projects`,children:[t.jsx("span",{className:`hwdk-plate${d.logo?"":" mono"}`,children:t.jsx(lv,{developer:d})}),t.jsx("strong",{children:d.name}),t.jsxs("span",{className:"hwdk-count",children:[d.count>0?`${d.count} ${d.count===1?"Project":"Projects"}`:"View projects",t.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:t.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})]})]},d.id))}),s.length>Zh&&t.jsx("div",{className:"hwdk-more",children:t.jsx("button",{type:"button",onClick:()=>i(d=>!d),children:r?"Show fewer":`View all ${s.length} developers`})})]}),t.jsx("div",{className:"hwdk-statsband",children:t.jsx("div",{className:"hwdk-wrap hwdk-stats",children:h.map(([d,u])=>t.jsxs("div",{children:[t.jsx("b",{children:d}),t.jsx("small",{children:u})]},u))})}),t.jsx("style",{children:`
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
      `})]})}const Nf=[{id:"t1",name:"Aayush Gupta",initials:"AG",color:"#F59E0B",platform:"Google",verified:!0,rating:5,text:"Rajesh ji is awesome. One place stop for all your real estate deals. Good natured, an honest and god fearing person."},{id:"t2",name:"Soumya",initials:"SO",color:"#E9D5FF",textColor:"#6B21A8",platform:"Google",verified:!0,rating:5,text:"Honestly, had a really smooth experience with HomWisor. The team was friendly and actually listened to what I needed. They didn't waste my time with random options."},{id:"t3",name:"Amit Kumar",initials:"AK",color:"#D6D3D1",textColor:"#44403C",platform:"Google",verified:!0,rating:5,text:"HomWisor made my home buying journey smooth and hassle-free. Their attention to detail and customer service is exceptional."},{id:"t4",name:"Neha Gupta",initials:"NG",color:"#10B981",platform:"Google",verified:!0,rating:5,text:"Very professional team with deep knowledge of the market. They helped me find the perfect investment property with great returns."}],dv={Google:{letter:"G",className:"google-g"},Facebook:{letter:"f",style:{background:"#1877F2",color:"#fff",borderRadius:"50%",width:18,height:18,display:"inline-grid",placeItems:"center",fontWeight:800}},Justdial:{letter:"Jd",style:{color:"#F97316",fontWeight:900}},Website:{letter:"★",style:{color:"#9A7418"}}},hv=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase();function uv({t:e}){const[n,r]=v.useState(!1),i={background:e.color||"#E5E7EB",color:e.textColor||"#475569",overflow:"hidden"};return t.jsx("div",{className:"hw-testimonial-avatar",style:i,children:e.photo&&!n?t.jsx("img",{src:e.photo,alt:e.name,loading:"lazy",onError:()=>r(!0),style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):e.initials||hv(e.name)})}function Sf({items:e,limit:n=4}){const r=(e||[]).slice(0,n);return r.length?t.jsx("div",{className:"hw-testimonial-grid",children:r.map(i=>{const s=Math.min(5,Math.max(1,Math.round(i.rating||5))),a=i.platform||"Google",o=dv[a];return t.jsxs("article",{className:"hw-testimonial-card",children:[t.jsxs("div",{className:"hw-testimonial-top",children:[t.jsx("div",{className:"hw-review-icon",style:{background:i.color||"#E5E7EB",color:i.textColor||"#64748B"},children:"“"}),a!=="Other"&&t.jsxs("div",{className:"hw-google",children:[t.jsx("span",{className:o==null?void 0:o.className,style:o==null?void 0:o.style,children:o==null?void 0:o.letter}),t.jsx("span",{children:a})]})]}),t.jsxs("div",{className:"hw-testimonial-stars","aria-label":`${s} out of 5 stars`,children:["★".repeat(s),s<5&&t.jsx("span",{style:{color:"#E5E7EB"},children:"★".repeat(5-s)})]}),t.jsxs("div",{className:"hw-testimonial-review",children:['"',i.text,'"']}),t.jsxs("div",{className:"hw-testimonial-user",children:[t.jsx(uv,{t:i}),t.jsxs("div",{className:"hw-testimonial-user-info",children:[t.jsx("div",{className:"hw-testimonial-name",children:i.name}),i.role?t.jsx("div",{className:"hw-testimonial-verified",style:{textTransform:"none",letterSpacing:0},children:i.role}):i.verified!==!1&&t.jsx("div",{className:"hw-testimonial-verified",children:"VERIFIED BUYER"})]})]})]},i.id)})}):null}const dt="#D4AF37";function Qt(){return t.jsxs("footer",{style:{marginTop:40},children:[t.jsx("div",{style:{background:"linear-gradient(130deg, #000000 0%, #2a1a05 40%, #D4AF37 100%)",borderTop:`3px solid ${dt}`,borderBottom:"1px solid rgba(0,0,0,.1)"},children:t.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 16px",gap:16,flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[t.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.25)",display:"grid",placeItems:"center",backdropFilter:"blur(8px)"},children:t.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[t.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),t.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:800,fontSize:22,color:"#fff",lineHeight:1.1},children:"Looking for Your Dream Property?"}),t.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,.85)",marginTop:2},children:"Experts online now · Response within 5 minutes"})]})]}),t.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[t.jsxs("a",{href:"tel:919090101401",style:{display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#111",padding:"10px 18px",borderRadius:10,fontWeight:800,fontSize:13,boxShadow:"0 4px 14px rgba(0,0,0,.2)"},children:[t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"1.7",children:t.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"Call Now"]}),t.jsxs("a",{href:"https://wa.me/919090101401",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13,backdropFilter:"blur(6px)"},children:[t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#fff",children:t.jsx("path",{d:"M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.15 6.45 2.15 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.02-5.14-2.87-7.01zm-7.01 15.23h-.01c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.68-8.24 8.21-8.24 2.19 0 4.25.85 5.79 2.4a8.215 8.215 0 0 1 2.41 5.83c0 4.55-3.68 8.24-8.21 8.24zm6.91-6.17c-.38-.19-2.24-1.11-2.59-1.23-.35-.13-.61-.19-.87.19s-1 1.23-1.22 1.49-.44.29-.82.1c-.38-.19-1.61-.59-3.06-1.89-1.13-1.01-1.89-2.26-2.11-2.64-.22-.38-.02-.59.17-.78.17-.17.38-.44.57-.66.19-.22.25-.38.38-.64.13-.25.06-.47-.03-.66-.09-.19-.87-2.1-1.19-2.88-.31-.74-.63-.64-.87-.66l-.74-.01c-.25 0-.66.1-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.65 4.06 6.62 5.69.93.4 1.65.64 2.21.82.93.29 1.78.25 2.45.15.75-.11 2.24-.92 2.56-1.81.32-.89.32-1.65.22-1.81-.09-.16-.35-.25-.73-.44z"})}),"WhatsApp"]}),t.jsxs("a",{href:"#contact",style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.35)",padding:"10px 16px",borderRadius:10,fontWeight:700,fontSize:13},children:[t.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[t.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),t.jsx("path",{d:"M16 2v4"}),t.jsx("path",{d:"M8 2v4"}),t.jsx("path",{d:"M3 10h18"})]}),"Schedule Visit"]})]})]})}),t.jsx("div",{style:{background:"#0A0A0A",color:"rgba(255,255,255,.75)",borderTop:"1px solid #1a1a1a"},children:t.jsxs("div",{className:"container",style:{padding:"36px 16px 18px"},children:[t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:24},className:"footer-grid",children:[t.jsxs("div",{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:t.jsx("img",{src:$r,alt:"HomWisor",style:{width:145,height:"auto",display:"block",objectFit:"contain"}})}),t.jsx("div",{style:{height:1,background:"linear-gradient(90deg, rgba(212,175,55,.4), transparent)",margin:"14px 0"}}),t.jsx("p",{style:{fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,.65)"},children:"India's leading luxury real estate platform. Buy, sell & invest in premium properties across India."}),t.jsxs("div",{style:{display:"grid",gap:10,marginTop:16},children:[t.jsxs("a",{href:"tel:+919090101401",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[t.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",color:dt,flexShrink:0},children:t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:dt,strokeWidth:"1.7",children:t.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),"+91 9090101401"]}),t.jsxs("a",{href:"mailto:support@homwisor.com",style:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.85)"},children:[t.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0},children:t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:dt,strokeWidth:"1.7",children:[t.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),t.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),"support@homwisor.com"]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${dt}`,display:"inline-block",paddingBottom:6},children:"QUICK LINKS"}),t.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[t.jsx(V,{to:"/",style:{color:"rgba(255,255,255,.7)"},children:"Home"}),t.jsx(V,{to:"/about",style:{color:"rgba(255,255,255,.7)"},children:"About Us"}),t.jsx(V,{to:"/blog",style:{color:"rgba(255,255,255,.7)"},children:"Blog"}),t.jsx(V,{to:"/contact",style:{color:"rgba(255,255,255,.7)"},children:"Contact"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${dt}`,display:"inline-block",paddingBottom:6},children:"TOOLS & SERVICES"}),t.jsxs("div",{style:{display:"grid",gap:9,fontSize:13},children:[t.jsx(V,{to:"/privacy-policy",style:{color:"rgba(255,255,255,.7)"},children:"Privacy Policy"}),t.jsx(V,{to:"/terms-and-conditions",style:{color:"rgba(255,255,255,.7)"},children:"Terms & Conditions"}),t.jsx("a",{href:"#",style:{color:"rgba(255,255,255,.7)"},children:"Disclaimer"}),"              "]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#fff",fontWeight:800,fontSize:12,letterSpacing:1,marginBottom:14,borderBottom:`2px solid ${dt}`,display:"inline-block",paddingBottom:6},children:"ADDRESS"}),t.jsx("div",{style:{display:"grid",gap:12,fontSize:13},children:t.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,color:"rgba(255,255,255,.7)",lineHeight:1.6},children:[t.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",display:"grid",placeItems:"center",flexShrink:0,marginTop:1},children:t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:dt,strokeWidth:"1.7",children:[t.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),t.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),t.jsx("span",{children:"Unit no : 704 , Sohna Road , ILD Trade Centre, Gurugram , Haryana , 122018"})]})})]})]}),t.jsxs("div",{style:{borderTop:"1px solid #1a1a1a",marginTop:28,paddingTop:14,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12,fontSize:12,color:"rgba(255,255,255,.45)"},children:[t.jsx("span",{children:"© 2026 HomWisor.com — Rishto Ki Shuruwat. All rights reserved. | RERA Registered"}),t.jsxs("span",{style:{display:"flex",gap:10,alignItems:"center"},children:[t.jsx("a",{href:"https://www.facebook.com/p/Homwisor-Consultant-Pvt-Ltd-100063724465215/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:dt,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:t.jsx("i",{className:"fa-brands fa-facebook-f"})}),t.jsx("a",{href:"https://www.instagram.com/homwisor/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:dt,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:t.jsx("i",{className:"fa-brands fa-instagram"})}),t.jsx("a",{href:"https://www.youtube.com/@HomwisorConsultants",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:dt,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:t.jsx("i",{className:"fa-brands fa-youtube"})}),t.jsx("a",{href:"https://www.linkedin.com/checkpoint/challenge/AgGnqOFm7uEMXwAAAaDiLdR1eKRji-_VqyEWvji7ntzt5HEv1pp-rFc6fD1Adq5RajztgTQHf0Edw_f4yhIZExU-nwz7tg?ut=1ckL1ZscIkmss1",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"grid",placeItems:"center",color:dt,border:"1px solid rgba(212,175,55,.25)",textDecoration:"none"},children:t.jsx("i",{className:"fa-brands fa-linkedin-in"})})]})]})]})}),t.jsx("style",{children:`
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
      `})]})}const Oo="#D4AF37",eu="#B9943A";function pv(){const[e,n]=v.useState({hero:[],slider:[],small:[]}),[r,i]=v.useState([]),[s,a]=v.useState([]),[o,l]=v.useState([]),[c,h]=v.useState([]),[d,u]=v.useState(void 0),[p,g]=v.useState([]),[b,k]=v.useState(!0);v.useEffect(()=>{async function j(){try{const[L,S,O,F,M,q,Q]=await Promise.all([H.get("/banners"),H.get("/properties"),H.get("/locations"),H.get("/offers"),H.get("/builders").catch(()=>({data:[]})),H.get("/testimonials").catch(()=>({data:null})),H.get("/recommended").catch(()=>({data:[]}))]);n(L.data),i(S.data),a(O.data),l(F.data),h(M.data||[]),u(q.data??null),g(Q.data||[])}catch(L){console.error(L),u(S=>S===void 0?null:S)}finally{k(!1)}}j()},[]),r.filter(j=>j.category==="recommended").slice(0,4),r.filter(j=>j.category==="trending").slice(0,4);const P=r.filter(j=>["₹19","₹28","₹16","₹5.2"].some(L=>j.priceRange&&j.priceRange.includes(L))||j.category==="trending").slice(0,4);[r.find(j=>j.title&&j.title.includes("Oberoi Three Sixty"))||r.find(j=>j.title&&j.title.includes("BPTP"))||P[0],r.find(j=>j.title&&j.title.includes("Experion One 42"))||P[1],r.find(j=>j.title&&j.title.includes("Max Estate 59"))||P[2],r.find(j=>j.title&&j.title.includes("BPTP DownTown"))||P[3]].filter(Boolean).slice(0,4);const f=r.filter(j=>j.category==="commercial").slice(0,4),m=r.filter(j=>j.category==="sco").slice(0,4),x=r.filter(j=>j.category==="upcoming").slice(0,4),N=r.filter(j=>j.category==="newlaunch").slice(0,4);if(b)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#fff"},children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{width:48,height:48,border:"3px solid #eee",borderTopColor:Oo,borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 12px"}}),t.jsx("div",{style:{fontWeight:600,color:"#6b7280"},children:"Loading HomWisor luxury..."}),t.jsx("style",{children:`
              @keyframes spin{
                to{
                  transform:rotate(360deg)
                }
              }
            `})]})});f.length>=4||r.slice(4,8),m.length>=4||r.slice(8,12);const w=[{name:"Studio",sub:"Apartment",place:"in Gurugram",count:"320+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop"},{name:"1 BHK",sub:"in Gurugram",count:"980+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=500&fit=crop"},{name:"2 BHK",sub:"in Gurugram",count:"1,450+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop"},{name:"3 BHK",sub:"in Gurugram",count:"760+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop"},{name:"4 BHK",sub:"in Gurugram",count:"410+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop"},{name:"5 BHK",sub:"in Gurugram",count:"180+ Properties",dark:!1,img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=500&fit=crop"},{name:"Penthouse",sub:"in Gurugram",count:"95+ Properties",dark:!0,img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop"}];c.length;const T=j=>(j||[]).map(L=>L!=null&&L.link?{...L,link:Fy(L.link,r)}:L),y=d===null?Nf:d;return t.jsxs("div",{style:{background:"#fcfcfc"},children:[t.jsx(Bt,{}),t.jsxs("section",{className:"hw-home-hero",children:[t.jsx(By,{banners:T(e.hero)}),t.jsx("div",{className:"hw-search-overlay",children:t.jsx(Dy,{})})]}),t.jsx("section",{className:"hw-new-premium-slider",children:t.jsx($y,{banners:T(e.slider)})}),t.jsx(qy,{items:T(p)}),t.jsx(Qy,{properties:r,locations:s,upcoming:x,newlaunch:N,offers:o,promos:T(e.small),branded:r.filter(j=>j.category==="branded").slice(0,4),luxury:r.filter(j=>j.category==="luxury").slice(0,4)}),t.jsxs("section",{className:"container hw-bhk-premium-section",style:{padding:"38px 16px 0"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:2},children:[t.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}}),t.jsx("span",{style:{fontSize:9,fontWeight:800,letterSpacing:2.5,color:"#9A7A22"},children:"HOMWISOR"}),t.jsx("span",{style:{width:42,height:1,background:"#D4AF37",display:"inline-block"}})]}),t.jsx("h2",{style:{fontSize:29,lineHeight:1.08,fontWeight:800,color:"#102A43",margin:"2px 0 3px",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.5px"},children:"Which BHK suits your lifestyle best?"}),t.jsx("p",{style:{fontSize:11,color:"#64748B",margin:0,lineHeight:1.4},children:"Find a home that fits you and tomorrow."}),t.jsx("div",{className:"bhk-grid hw-bhk-premium-grid",style:{display:"grid",gridTemplateColumns:"repeat(6, minmax(0, 1fr))",gap:9,marginTop:10,overflowX:"auto",paddingBottom:2},children:w.slice(0,6).map((j,L)=>{const S=[{bg:"#FFF8ED",iconBg:"#FFF0D6",icon:"#A87522"},{bg:"#F2F8FD",iconBg:"#DDECF8",icon:"#2871A8"},{bg:"#FFF5F6",iconBg:"#FBE0E3",icon:"#C75B66"},{bg:"#F3F6FC",iconBg:"#DDE7F7",icon:"#31598C"},{bg:"#F2F8F3",iconBg:"#DDEEDC",icon:"#5B7D3C"},{bg:"#F6F2FC",iconBg:"#E7DFF7",icon:"#66509A"}][L],O=["▦","▰","▰","♟","◇","♛"];return t.jsxs(V,{to:`/search?bhk=${encodeURIComponent(j.name)}`,className:"hw-bhk-premium-card",style:{minWidth:0,borderRadius:7,overflow:"hidden",border:"1px solid #E5E7EB",background:S.bg,display:"block",textDecoration:"none",boxShadow:"0 1px 5px rgba(15,23,42,.04)"},children:[t.jsxs("div",{style:{padding:"8px 8px 7px",minHeight:103},children:[t.jsx("div",{style:{width:27,height:27,borderRadius:"50%",background:S.iconBg,color:S.icon,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,marginBottom:7},children:O[L]}),t.jsx("div",{style:{fontSize:13,lineHeight:1.1,fontWeight:800,color:"#183B5B"},children:j.name}),t.jsxs("div",{style:{fontSize:8.5,fontWeight:600,color:"#64748B",marginTop:2},children:[j.sub," ",j.place?j.place.replace(/^in\s*/i,"in "):"in Gurugram"]}),t.jsx("div",{style:{fontSize:8,color:"#64748B",marginTop:8},children:j.count})]}),t.jsxs("div",{style:{height:143,position:"relative",overflow:"hidden"},children:[t.jsx("img",{src:j.img,alt:j.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),t.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:38,background:"linear-gradient(to top, rgba(15,23,42,.22), transparent)"}})]})]},j.name)})})]}),t.jsxs("section",{className:"container hw-why-premium-section",style:{padding:"30px 16px 0"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:18},children:[t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:4},children:[t.jsx("span",{style:{width:34,height:1,background:Oo,display:"inline-block"}}),t.jsx("span",{style:{fontSize:10,letterSpacing:2.5,fontWeight:800,color:"#9A7A22"},children:"HOMWISOR"}),t.jsx("span",{style:{width:34,height:1,background:Oo,display:"inline-block"}})]}),t.jsx("h2",{style:{margin:0,fontSize:36,lineHeight:1.08,fontWeight:800,color:"#102A43",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-.4px"},children:"Why Choose Us"}),t.jsx("p",{style:{margin:"5px auto 0",maxWidth:650,fontSize:12,lineHeight:1.5,color:"#64748B"},children:"India's trusted real estate platform for verified properties, direct builder pricing, and complete end-to-end guidance."})]}),t.jsx("div",{className:"hw-why-feature-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:[{no:"01",title:"100% Verified Listings",desc:"Every property listing undergoes rigorous physical and legal verification. Genuine photos, accurate pricing, and title ownership put fake listings.",icon:"✓",iconBg:"#FFF0D2",iconColor:"#A66A18",bg:"#FFF9EF",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&h=520&fit=crop"},{no:"02",title:"Direct Builder Rates",desc:"We connect you directly with top-tier developers, ensuring transparent deal structures, best price guarantees, and zero hidden brokerage charges.",icon:"◇",iconBg:"#E5F0FC",iconColor:"#376D9F",bg:"#F4F9FD",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=520&fit=crop"},{no:"03",title:"Free Guided Site Visits",desc:"Schedule doorstep property site visits with experienced specialists who provide personalized advice tailored to your budget.",icon:"♟",iconBg:"#DDF0DE",iconColor:"#3F7D4C",bg:"#F3FAF3",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=520&fit=crop"}].map(j=>t.jsxs("div",{className:"hw-why-feature-card",style:{position:"relative",minWidth:0,overflow:"hidden",borderRadius:6,border:"1px solid #E5E7EB",background:j.bg,display:"flex"},children:[t.jsxs("div",{style:{position:"relative",zIndex:2,width:"58%",padding:"17px 14px 10px",background:j.bg,clipPath:"ellipse(90% 78% at 0% 50%)"},children:[t.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:j.iconBg,color:j.iconColor,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:900,marginBottom:6},children:j.icon}),t.jsx("div",{style:{width:26,height:1,background:j.iconColor,opacity:.35,margin:"0 0 5px"}}),t.jsx("div",{style:{fontSize:15,lineHeight:1.12,fontWeight:800,color:"#17324D"},children:j.title}),t.jsx("div",{style:{fontSize:11.2,lineHeight:1.4,color:"#64748B",marginTop:5,maxWidth:170},children:j.desc}),t.jsx("div",{style:{position:"absolute",left:10,bottom:2,fontSize:28,lineHeight:1,fontWeight:800,color:j.iconColor,opacity:.2},children:j.no})]}),t.jsx("div",{style:{position:"absolute",inset:"0 0 0 42%",overflow:"hidden"},children:t.jsx("img",{src:j.image,alt:j.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}})})]},j.title))}),t.jsx("div",{className:"hw-why-stats",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",marginTop:7,background:"#fff",border:"1px solid #E8E1D3",borderRadius:5,overflow:"hidden",boxShadow:"0 2px 8px rgba(15,23,42,.05)"},children:[["25K+","Verified Properties","▦"],["10K+","Happy Customers","♟"],["500+","Top Developers","▦"],["50+","Cities Covered","●"],["24×7","Expert Support","◉"]].map((j,L)=>t.jsxs("div",{style:{minWidth:0,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"11px 7px",borderRight:L<4?"1px solid #E8E1D3":"none"},children:[t.jsx("div",{style:{width:30,height:30,flexShrink:0,borderRadius:"50%",background:"#FFF7ED",color:eu,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800},children:j[2]}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:{fontSize:12,lineHeight:1,fontWeight:800,color:"#17324D"},children:j[0]}),t.jsx("div",{style:{fontSize:10,lineHeight:1.25,color:"#64748B",marginTop:2,whiteSpace:"nowrap"},children:j[1]})]})]},j[1]))})]}),(y==null?void 0:y.length)>0&&t.jsxs("section",{className:"container hw-testimonials-premium",style:{padding:"34px 16px 0"},children:[t.jsxs("section",{className:"container hw-testimonials-premium",children:[t.jsxs("div",{className:"hw-testimonial-heading",children:[t.jsxs("div",{className:"hw-testimonial-eyebrow",children:[t.jsx("span",{}),t.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),t.jsx("span",{})]}),t.jsx("h2",{children:"Customer Testimonials"}),t.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),t.jsx(Sf,{items:y,limit:4})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:6,marginTop:10},children:[0,1,2,3].map((j,L)=>t.jsx("span",{style:{width:L===0?7:6,height:L===0?7:6,borderRadius:"50%",background:L===0?eu:"#D1D5DB",display:"none"}},j))})]}),t.jsx(cv,{builders:c,properties:r}),t.jsx(Qt,{})]})}const mv="/assets/test1-Bhn6Q40Z.png",fv="/assets/test2-4YsetXgN.png",gv="/assets/test3-CgDiknys.png",xv="/assets/test4-DV0Q2HbY.png",Tt="#D4AF37",Mn="#9A7418",wv="#090909",yv=[mv,fv,gv,xv],vv=[["01","Integrity","We build relationships through honest guidance and responsible advice."],["02","Accountability","We stay involved and take responsibility throughout the property journey."],["03","Professionalism","Experienced, informed and focused on delivering a smooth experience."],["04","Customer First","Your requirements, priorities and long-term goals remain at the centre."],["05","Transparency","Clear communication and straightforward property guidance at every step."],["06","Improvement","We continuously improve our market knowledge and client experience."]],bv=[{name:"Mr. Brejendra Singh",role:"Founder & CEO",text:"A real estate veteran with 15+ years of expertise, known for deep market knowledge and investment insights."},{name:"Mr. Birendra Patel",role:"Founder & CMO",text:"Brings over 13 years of distinguished real estate experience with a strong focus on market intelligence."},{name:"Mr. Lokendra Singh",role:"Manager",text:"Brings deep knowledge of Gurgaon micro-markets with a strong market understanding and client-focused approach."},{name:"Mr. Mukul Yadav",role:"Manager",text:"A dedicated real estate consultant focused on helping clients find the right investment opportunities."}],jv=[{date:"JUL 30, 2026",category:"REAL ESTATE NEWS",title:"Moti Nagar Metro Station on Delhi Metro Blue Line",text:"Explore connectivity, location advantages and the role of the Blue Line in West Delhi real estate."},{date:"JUL 29, 2026",category:"REAL ESTATE NEWS",title:"BPTP Downtown 66 Phase 2 Is Here",text:"A look at the new phase and what buyers should know about the Gurgaon development."},{date:"JUL 28, 2026",category:"REAL ESTATE NEWS",title:"Sector 49 Gurgaon: Real Estate Prices & Metro Expansion",text:"Understand the locality, connectivity and changing real estate landscape of Sector 49 Gurgaon."}];function Av(){const[e,n]=v.useState(void 0);v.useEffect(()=>{let i=!0;return H.get("/testimonials").then(s=>i&&n(s.data||[])).catch(()=>i&&n(null)),()=>{i=!1}},[]);const r=e===null?Nf:e||[];return t.jsxs("div",{className:"about-page",children:[t.jsx(Bt,{}),t.jsxs("section",{className:"about-hero",children:[t.jsx("div",{className:"about-hero-overlay"}),t.jsx("div",{className:"about-hero-glow"}),t.jsx("div",{className:"about-hero-grid"}),t.jsxs("div",{className:"about-container about-hero-inner",children:[t.jsx("div",{className:"about-kicker",children:"TRUSTED REAL ESTATE CONSULTANTS"}),t.jsxs("h1",{children:["Real Estate,",t.jsx("br",{}),t.jsx("span",{children:"Guided With Wisdom."})]}),t.jsx("p",{children:"Since 2016, we’ve guided families and investors toward the perfect homes, premium office spaces, and smart real estate opportunities across Gurgaon and Delhi NCR."}),t.jsx("div",{className:"about-hero-actions",children:t.jsx("a",{href:"/contact/",className:"about-btn about-btn-gold",children:"Talk to an Expert"})})]})]}),t.jsx("section",{className:"about-section about-who",children:t.jsxs("div",{className:"about-container about-two-col",children:[t.jsxs("div",{className:"about-real-image",children:[t.jsx("img",{src:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88",alt:"Premium modern home interior"}),t.jsxs("div",{className:"image-overlay-card",children:[t.jsx("span",{children:"EST. 2016"}),t.jsx("strong",{children:"Homwisor"}),t.jsx("small",{children:"Real Estate Consultants"})]}),t.jsx("div",{className:"image-corner-number",children:"01"})]}),t.jsxs("div",{className:"about-copy",children:[t.jsx("div",{className:"about-eyebrow",children:"WHO WE ARE"}),t.jsx("h2",{children:"Property is more than a transaction."}),t.jsx("p",{children:"Homwisor Consultant believes that buying a property is more than just a transaction — it is a life-changing decision connected to dreams, security and future growth."}),t.jsx("p",{children:"Built on the vision of combining the comfort of a dream home with the wisdom of expert real estate guidance, Homwisor helps clients navigate property opportunities with clarity and confidence."}),t.jsxs("div",{className:"about-points",children:[t.jsxs("div",{children:[t.jsx("b",{children:"✓"}),"Expert property guidance"]}),t.jsxs("div",{children:[t.jsx("b",{children:"✓"}),"Market-focused recommendations"]}),t.jsxs("div",{children:[t.jsx("b",{children:"✓"}),"Residential & commercial expertise"]}),t.jsxs("div",{children:[t.jsx("b",{children:"✓"}),"Support throughout the journey"]})]})]})]})}),t.jsx("section",{className:"about-section about-values",children:t.jsxs("div",{className:"about-container",children:[t.jsxs("div",{className:"about-heading-center",children:[t.jsx("div",{className:"about-eyebrow",children:"OUR CORE VALUES"}),t.jsxs("h2",{children:["Principles that shape ",t.jsx("span",{children:"Homwisor."})]}),t.jsx("p",{children:"Integrity, accountability, professionalism and a customer-first approach at every step."})]}),t.jsx("div",{className:"values-grid",children:vv.map(([i,s,a])=>t.jsxs("article",{className:"value-card",children:[t.jsxs("div",{className:"value-top",children:[t.jsx("span",{children:i}),t.jsx("i",{children:"↗"})]}),t.jsx("h3",{children:s}),t.jsx("p",{children:a})]},s))})]})}),t.jsx("section",{className:"about-section about-leaders",children:t.jsxs("div",{className:"about-container",children:[t.jsxs("div",{className:"about-heading-row",children:[t.jsxs("div",{children:[t.jsx("div",{className:"about-eyebrow",children:"OUR TEAM"}),t.jsxs("h2",{children:["Visionary ",t.jsx("span",{children:"Real Estate Leaders"})]})]}),t.jsx("p",{children:"Experienced professionals bringing market knowledge and client-focused real estate guidance."})]}),t.jsx("div",{className:"leaders-grid",children:bv.map((i,s)=>t.jsxs("article",{className:"leader-card",children:[t.jsxs("div",{className:"leader-image-wrap",children:[t.jsx("img",{src:yv[s],alt:`${i.name} professional portrait`}),t.jsxs("div",{className:"leader-number",children:["0",s+1]})]}),t.jsxs("div",{className:"leader-content",children:[t.jsx("div",{className:"leader-role",children:i.role}),t.jsx("h3",{children:i.name}),t.jsx("p",{children:i.text})]})]},i.name))})]})}),t.jsx("section",{className:"about-section about-news",children:t.jsxs("div",{className:"about-container",children:[t.jsxs("div",{className:"about-heading-row",children:[t.jsxs("div",{children:[t.jsx("div",{className:"about-eyebrow",children:"READ FROM OUR BLOGS & NEWS"}),t.jsxs("h2",{children:["Insights for ",t.jsx("span",{children:"smarter decisions."})]})]}),t.jsxs("a",{href:"/blog/",className:"news-link",children:["View All Articles ",t.jsx("span",{children:"↗"})]})]}),t.jsx("div",{className:"blog-grid",children:jv.map(i=>t.jsxs("article",{className:"blog-card",children:[t.jsxs("div",{className:"blog-image",children:[t.jsx("img",{src:`https://images.unsplash.com/photo-${i.title.includes("Moti")?"1477959858617-67f85cf4f1df":i.title.includes("BPTP")?"1564013799919-ab600027ffc6":"1560518883-ce09059eeffa"}?auto=format&fit=crop&w=900&q=82`,alt:"Real estate news"}),t.jsx("span",{children:i.category})]}),t.jsxs("div",{className:"blog-content",children:[t.jsx("small",{children:i.date}),t.jsx("h3",{children:i.title}),t.jsx("p",{children:i.text}),t.jsxs("a",{href:"/blog/",children:["Read Article ",t.jsx("span",{children:"→"})]})]})]},i.title))})]})}),r.length>0&&t.jsx("section",{className:"about-section about-testimonials hw-testimonials-premium",children:t.jsxs("div",{className:"about-container",children:[t.jsxs("div",{className:"hw-testimonial-heading",children:[t.jsxs("div",{className:"hw-testimonial-eyebrow",children:[t.jsx("span",{}),t.jsx("strong",{children:"REAL STORIES, REAL HOMES"}),t.jsx("span",{})]}),t.jsx("h2",{children:"Customer Testimonials"}),t.jsx("p",{children:"Hear from our happy homeowners who found their dream properties with us."})]}),t.jsx(Sf,{items:r,limit:4})]})}),t.jsx(Qt,{}),t.jsx("style",{children:`

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
          color: ${Tt};
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
          color: ${Tt};
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
          background: ${Tt};
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
          color: ${Tt};
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

          color: ${wv};
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

          color: ${Tt};

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
          color: ${Mn};

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
          color: ${Mn};
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
          color: ${Mn};

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
          color: ${Mn};

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

          border-bottom: 1px solid ${Tt};

          padding-bottom: 6px;
        }


        .news-link span {
          color: ${Mn};

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

          color: ${Tt};

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 1px;
        }


        .blog-content {
          padding: 22px;
        }


        .blog-content small {
          color: ${Mn};

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
          color: ${Mn};

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
          color: ${Tt};

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

          color: ${Tt};

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
          color: ${Tt};
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

      `})]})}const Zt=[{city:"Gurugram",aliases:["gurgaon"],localities:[{name:"Golf Course Road",slug:"golf-course-road"},{name:"Golf Course Extension Road",slug:"golf-course-extension-road",aliases:["gcer","golf course ext"]},{name:"Dwarka Expressway",slug:"dwarka-expressway"},{name:"Sohna Road",slug:"sohna-road"},{name:"Southern Peripheral Road (SPR)",slug:"southern-peripheral-road",aliases:["southern peripheral road","spr"]},{name:"New Gurgaon",slug:"new-gurgaon",aliases:["new gurugram"]},{name:"Nirvana Road",slug:"nirvana-road"},{name:"MG Road",slug:"mg-road",aliases:["m.g. road"]},{name:"NH-48",slug:"nh-48",aliases:["nh 48","nh8","nh-8"]}]},{city:"Noida",aliases:["greater noida"],localities:[{name:"Noida Expressway",slug:"noida-expressway"},{name:"Noida Extension",slug:"noida-extension"},{name:"Yamuna Expressway",slug:"yamuna-expressway"}]},{city:"New Delhi",aliases:["delhi"],localities:[{name:"Dwarka",slug:"dwarka"},{name:"South Delhi",slug:"south-delhi"},{name:"Central Delhi",slug:"central-delhi"}]},{city:"Faridabad",localities:[{name:"Greater Faridabad",slug:"greater-faridabad"},{name:"Mathura Road",slug:"mathura-road"},{name:"Suraj Kund",slug:"suraj-kund",aliases:["surajkund"]}]},{city:"Bengaluru",aliases:["bangalore"],localities:[{name:"North Bengaluru",slug:"north-bengaluru"},{name:"East Bengaluru",slug:"east-bengaluru"},{name:"Sarjapur Road (IT Corridor)",slug:"sarjapur-road",aliases:["sarjapur road","sarjapur"]},{name:"South Bengaluru",slug:"south-bengaluru"},{name:"Hoskote & East Peripheral Belt",slug:"hoskote",aliases:["hoskote"]}]},{city:"Hyderabad",localities:[{name:"North Hyderabad",slug:"north-hyderabad"},{name:"South Hyderabad",slug:"south-hyderabad"},{name:"East Hyderabad",slug:"east-hyderabad"},{name:"West Hyderabad",slug:"west-hyderabad"}]},{city:"Mumbai",localities:[{name:"South Mumbai",slug:"south-mumbai"},{name:"Navi Mumbai",slug:"navi-mumbai"},{name:"Panvel",slug:"panvel"},{name:"Central Mumbai",slug:"central-mumbai"},{name:"Kalyan",slug:"kalyan"}]},{city:"Pune",localities:[{name:"West Pune",slug:"west-pune"},{name:"East Pune",slug:"east-pune"},{name:"Punawale",slug:"punawale"},{name:"South East Pune",slug:"south-east-pune"}]}],Gr=(e="")=>String(e).toLowerCase().replace(/\([^)]*\)/g," ").replace(/[^a-z0-9]+/g," ").trim(),kv=Zt.flatMap(e=>e.localities.map(n=>({...n,city:e.city}))),Cf=kv.map(e=>({l:e,keys:[e.name,e.slug.replace(/-/g," "),...e.aliases||[]].map(Gr)})).sort((e,n)=>Math.max(...n.keys.map(r=>r.length))-Math.max(...e.keys.map(r=>r.length))),tu=(e,n)=>n&&` ${e} `.includes(` ${n} `),Zi=e=>{var r;const n=Gr(e);return n&&((r=Cf.find(i=>i.keys.some(s=>s===n)))==null?void 0:r.l)||null},Ji=e=>{const n=Gr(e);return n&&Zt.find(r=>[r.city,...r.aliases||[]].map(Gr).includes(n))||null},nr=(e={})=>{var s,a,o;const n=Gr(e.location),r=e.locality&&Zi(e.locality)||((s=Cf.find(l=>l.keys.some(c=>tu(n,c))))==null?void 0:s.l)||null,i=e.city&&((a=Ji(e.city))==null?void 0:a.city)||(r==null?void 0:r.city)||((o=Zt.find(l=>[l.city,...l.aliases||[]].some(c=>tu(n,Gr(c)))))==null?void 0:o.city)||null;return{locality:e.locality||(r==null?void 0:r.name)||"",city:e.city||i||""}},qn=e=>{var n;return((n=Zt.find(r=>r.city===e))==null?void 0:n.localities)||[]},Re=(e="")=>String(e).toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),_t=e=>{const r=[...String((e==null?void 0:e.priceRange)||(e==null?void 0:e.price)||"").toLowerCase().replace(/,/g,"").matchAll(/(\d+(?:\.\d+)?)\s*(cr|crore|crores|l|lac|lacs|lakh|lakhs|k)?\b/g)].map(a=>({n:parseFloat(a[1]),unit:a[2]||""}));if(!r.length)return null;for(let a=r.length-1,o="cr";a>=0;a--)r[a].unit?o=r[a].unit:r[a].unit=o;const i=({n:a,unit:o})=>/^(l|lac|lacs|lakh|lakhs)$/.test(o)?a/100:o==="k"?a/1e5:a,s=r.map(i);return{min:Math.min(...s),max:Math.max(...s)}},ql=e=>{if(!e)return null;const n=String(e).toLowerCase(),r=[...n.matchAll(/\d+(?:\.\d+)?/g)].map(i=>parseFloat(i[0]));return r.length?/under|below|upto|up to|less|max/.test(n)?{min:0,max:r[0]}:/onward|plus|above|more|\+|min/.test(n)||r.length===1?{min:r[0],max:1/0}:{min:Math.min(r[0],r[1]),max:Math.max(r[0],r[1])}:null},nu=e=>e?e.min===0?`Under ₹${e.max} Cr`:e.max===1/0?`₹${e.min} Cr+`:`₹${e.min} – ${e.max} Cr`:"",Kl=[{value:"under-1-cr",label:"Under ₹1 Cr"},{value:"1-cr-4-cr",label:"₹1 – 4 Cr"},{value:"4-cr-8-cr",label:"₹4 – 8 Cr"},{value:"8-cr-12-cr",label:"₹8 – 12 Cr"},{value:"12-cr-16-cr",label:"₹12 – 16 Cr"},{value:"16-cr-onwards",label:"₹16 Cr+"}],ru=["apartment","villa","builder floor","plots","farmhouse"],an=["commercial","retail","sco"],Nv=["trump","elie saab","brabus","franck","muller","tonino","armani","branded","oberoi","dlf privana","versace","lamborghini"],Sv=10,Ef=e=>!an.includes(Re(e.type||e.propertyType))&&!["commercial","sco"].includes(e.category),Cv=e=>{var n;return Ef(e)&&((((n=_t(e))==null?void 0:n.max)||0)>=Sv||/luxury/i.test(`${e.tag} ${e.propertyTypeDetail}`))},Ev=e=>Ef(e)&&Nv.some(n=>Re(`${e.title} ${e.tag} ${e.propertyTypeDetail}`).includes(n)),Rv=e=>{const n=Re(e);if(!n||n==="all"||n==="all types")return null;const r=a=>Re(a.type||a.propertyType),i=a=>Re(`${a.type} ${a.bhk} ${a.title} ${a.propertyTypeDetail}`);return{residential:a=>ru.includes(r(a)),"residential projects":a=>ru.includes(r(a)),commercial:a=>an.includes(r(a))||["commercial","sco"].includes(a.category),"commercial projects":a=>an.includes(r(a))||["commercial","sco"].includes(a.category),"luxury villas":a=>r(a)==="villa",villa:a=>r(a)==="villa",villas:a=>r(a)==="villa","independent floors":a=>r(a)==="builder floor","builder floor":a=>r(a)==="builder floor","pent house":a=>/pent ?house/.test(i(a)),penthouse:a=>/pent ?house/.test(i(a)),"residential plots":a=>r(a)==="plots",plots:a=>r(a)==="plots","plots land":a=>r(a)==="plots","sco plots":a=>r(a)==="sco"||a.category==="sco",sco:a=>r(a)==="sco"||a.category==="sco",branded:a=>a.category==="branded"||Ev(a),luxury:a=>["luxury","branded"].includes(a.category)||Cv(a),shops:a=>an.includes(r(a))||a.category==="commercial","office space":a=>an.includes(r(a))||a.category==="commercial","food court":a=>an.includes(r(a))||a.category==="commercial","anchor stores":a=>an.includes(r(a))||a.category==="commercial","cinema entertainment":a=>an.includes(r(a))||a.category==="commercial"}[n]||(a=>r(a)===n||r(a).includes(n))},iu=e=>{const n=String((e==null?void 0:e.bhk)||"").toLowerCase();return/bhk|bed/.test(n)?[...n.matchAll(/\d+/g)].map(r=>parseInt(r[0])).filter(r=>r>0&&r<10):[]},Pv=e=>{var i;const n=String(e||"").toLowerCase();if(!n)return null;if(n.includes("studio"))return s=>/studio|1 ?rk/.test(String(s.bhk).toLowerCase());const r=parseInt((i=n.match(/\d+/))==null?void 0:i[0]);return r?/\+|plus|above/.test(n)?s=>iu(s).some(a=>a>=r):s=>iu(s).includes(r):null},Tv={upcoming:["upcoming"],"new launch":["new launch","newlaunch"],"ready to move":["ready to move","ready"],"under construction":["under construction","trending","new launch"],trending:["trending"]},su=["New Launch","Upcoming","Under Construction","Ready to Move"],Ov=e=>{const n=Re(e).replace("newlaunch","new launch");if(!n||n==="for sale"||n==="all")return null;const r=Tv[n]||[n];return i=>r.includes(Re(i.status).replace("newlaunch","new launch"))||r.includes(Re(i.category).replace("newlaunch","new launch"))},Lv=e=>{var o;const n=l=>(e.get(l)||"").trim();let r=n("q"),i=n("locality"),s=n("city");const a=n("location");if(a){const l=Zi(a),c=!l&&Ji(a);l?i=l.name:c?s=c.city:r=r?`${r} ${a}`:a}if(i){const l=Zi(i);l&&(i=l.name,s=s||l.city)}return s&&(s=((o=Ji(s))==null?void 0:o.city)||s),{q:r,city:s,locality:i,type:n("type")||n("propertyType"),budget:n("budget"),bhk:n("bhk"),status:n("status"),category:n("category"),sort:n("sort")}},Mv=(e,n,{offerTitles:r=[]}={})=>{const i=Re(n.q).split(" ").filter(Boolean),s=Rv(n.type),a=Pv(n.bhk),o=Ov(n.status),l=ql(n.budget),c=r.map(Re),h=e.filter(u=>{const p=nr(u);if(i.length){const g=Re(`${u.title} ${u.location} ${u.developer} ${u.type} ${u.bhk} ${p.locality} ${p.city}`);if(!i.every(b=>g.includes(b)))return!1}if(n.city&&Re(p.city)!==Re(n.city)||n.locality&&Re(p.locality)!==Re(n.locality)||s&&!s(u)||a&&!a(u)||o&&!o(u))return!1;if(l){const g=_t(u);if(!g||g.max<l.min||g.min>l.max)return!1}if(n.category){const g=n.category.toLowerCase();if(g==="festival"){if(!c.some(b=>Re(u.title).includes(b)||b.includes(Re(u.title))))return!1}else if(String(u.category).toLowerCase()!==g)return!1}return!0}),d=u=>{var p;return((p=_t(u))==null?void 0:p.min)??1/0};return n.sort==="price-low"&&h.sort((u,p)=>d(u)-d(p)),n.sort==="price-high"&&h.sort((u,p)=>{var g,b;return(((g=_t(p))==null?void 0:g.max)??-1)-(((b=_t(u))==null?void 0:b.max)??-1)}),n.sort==="newest"&&h.sort((u,p)=>String(p.createdAt).localeCompare(String(u.createdAt))),h},zv={apartment:"Apartments",villa:"Villas",villas:"Villas","luxury villas":"Luxury Villas","builder floor":"Builder Floors","independent floors":"Independent Floors",farmhouse:"Farmhouses",plots:"Plots","plots land":"Plots & Land","residential plots":"Residential Plots","pent house":"Penthouses",penthouse:"Penthouses",residential:"Residential Projects","residential projects":"Residential Projects",commercial:"Commercial Projects","commercial projects":"Commercial Projects",retail:"Retail Spaces",sco:"SCO Plots","sco plots":"SCO Plots",branded:"Branded Residences",luxury:"Luxury Homes",shops:"Shops","office space":"Office Spaces","food court":"Food Courts","anchor stores":"Anchor Stores","cinema entertainment":"Cinema & Entertainment Spaces"},Iv=e=>{const n=[];e.bhk&&n.push(/bhk|studio/i.test(e.bhk)?e.bhk:`${e.bhk} BHK`),n.push(e.type?zv[Re(e.type)]||e.type:"Properties");const r=e.locality||e.city||"Gurugram";return`${n.join(" ")} in ${r}`},Bv=["q","city","locality","type","budget","bhk","status","category","sort"],au=[{group:"Residential",items:[["Apartment","Apartment"],["Villa","Villa"],["Builder Floor","Builder Floor"],["Penthouse","Penthouse"],["Plots","Plots"],["Farmhouse","Farmhouse"]]},{group:"Commercial",items:[["Commercial","All Commercial"],["Retail","Retail / Shops"],["SCO","SCO Plots"]]},{group:"Collections",items:[["Luxury","Luxury Homes"],["Branded","Branded Residences"]]}],Lo=[["","All Projects"],["trending","Trending"],["upcoming","Upcoming"],["newlaunch","New Launch"],["branded","Branded"],["luxury","Luxury"],["commercial","Commercial"],["sco","SCO"]],Dv=["Studio","1 BHK","2 BHK","3 BHK","4 BHK","5 BHK"],Fv=(e,n)=>{var r;return((r=e.find(([i])=>i===n))==null?void 0:r[1])||n},ui="#D4AF37",sn="#9A7418",Ts="#090909";function Wv(){const[e,n]=ed(),[r,i]=v.useState([]),[s,a]=v.useState([]),[o,l]=v.useState(!0),c=Lv(e),[h,d]=v.useState(c.q);v.useEffect(()=>{Promise.all([H.get("/properties"),H.get("/offers").catch(()=>({data:[]}))]).then(([y,j])=>{i(Array.isArray(y.data)?y.data:[]),a((j.data||[]).map(L=>L.title).filter(Boolean))}).catch(()=>i([])).finally(()=>l(!1))},[]);const u=v.useMemo(()=>Mv(r,c,{offerTitles:s}),[r,s,e.toString()]),p=(y,j)=>{const L={...c,[y]:j};y==="city"&&(L.locality="");const S=new URLSearchParams;Bv.forEach(O=>L[O]&&S.set(O,L[O])),n(S,{replace:!0})};v.useEffect(()=>{const y=setTimeout(()=>{h.trim()!==c.q&&p("q",h.trim())},350);return()=>clearTimeout(y)},[h]),v.useEffect(()=>{d(c.q)},[e.get("q"),e.get("location")]);const g=()=>{d(""),n({},{replace:!0})},b=[c.q&&["q",`“${c.q}”`],c.city&&["city",c.city],c.locality&&["locality",c.locality],c.type&&["type",c.type.replace(/-/g," ")],c.budget&&["budget",nu(ql(c.budget))||c.budget],c.bhk&&["bhk",c.bhk],c.status&&["status",c.status.replace(/-/g," ")],c.category&&["category",Fv(Lo,c.category)]].filter(Boolean),k=c.locality||c.city||"Gurugram",P=au.some(y=>y.items.some(([j])=>j===c.type)),f=Kl.some(y=>y.value===c.budget),m=su.includes(c.status),x=c.city?[{city:c.city,localities:qn(c.city)}]:Zt,N="919999999999",w=y=>{const j=(y==null?void 0:y.title)||(y==null?void 0:y.name)||"this property",L=encodeURIComponent(`Hi, I am interested in ${j}. Please share more details.`);return`https://wa.me/${N}?text=${L}`},T=({property:y,index:j})=>{var J;const L=(y==null?void 0:y.id)||(y==null?void 0:y._id)||j,S=(y==null?void 0:y.image)||(y==null?void 0:y.thumbnail)||((J=y==null?void 0:y.images)==null?void 0:J[0])||"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",O=(y==null?void 0:y.title)||(y==null?void 0:y.name)||"Premium Property",F=(y==null?void 0:y.priceRange)||(y==null?void 0:y.price)||"Price on Request",M=(y==null?void 0:y.location)||(y==null?void 0:y.locality)||"Gurugram",q=(y==null?void 0:y.bhk)||"3 & 4 BHK",Q=(y==null?void 0:y.area)||(y==null?void 0:y.size)||"2,500+ Sq.Ft.",_=(y==null?void 0:y.propertyType)||(y==null?void 0:y.type)||"";return t.jsxs(V,{to:y!=null&&y.slug?it(y):`/property/${L}`,className:"search-property-card",children:[t.jsxs("div",{className:"search-property-image",children:[t.jsx("img",{src:S,alt:O,loading:"lazy"}),t.jsx("div",{className:"search-image-overlay"}),(y==null?void 0:y.rera)!==!1&&t.jsx("div",{className:"search-rera-group",children:t.jsxs("span",{className:"search-rera",children:[t.jsx("b",{children:"✓"}),"RERA"]})}),t.jsxs("div",{className:"search-bhk-badge",children:[q,_?` • ${_}`:""]})]}),t.jsxs("div",{className:"search-property-content",children:[t.jsx("h3",{children:O}),t.jsx("div",{className:"search-card-price",children:F}),t.jsxs("div",{className:"search-card-location",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),t.jsx("span",{children:M})]}),t.jsxs("div",{className:"search-card-meta",children:[t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M3 11h18"}),t.jsx("path",{d:"M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),t.jsx("path",{d:"M4 19v-8"}),t.jsx("path",{d:"M20 19v-8"}),t.jsx("path",{d:"M4 15h16"})]}),t.jsx("span",{children:q})]}),t.jsxs("div",{children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:[t.jsx("path",{d:"M4 4h6"}),t.jsx("path",{d:"M4 4v6"}),t.jsx("path",{d:"M20 20h-6"}),t.jsx("path",{d:"M20 20v-6"}),t.jsx("path",{d:"M4 20h6"}),t.jsx("path",{d:"M4 20v-6"}),t.jsx("path",{d:"M20 4h-6"}),t.jsx("path",{d:"M20 4v6"})]}),t.jsx("span",{children:Q})]})]}),t.jsxs("a",{href:w(y),target:"_blank",rel:"noopener noreferrer",className:"search-card-whatsapp",onClick:D=>D.stopPropagation(),children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),t.jsx("span",{children:"WhatsApp"})]})]})]})};return t.jsxs("div",{className:"search-page",children:[t.jsx(Bt,{}),t.jsxs("div",{className:"search-container",children:[t.jsxs("div",{className:"search-breadcrumb",children:[t.jsx(V,{to:"/",children:"Home"}),t.jsx("span",{children:"›"}),t.jsxs("span",{children:["Projects in ",k]})]}),t.jsxs("div",{className:"search-layout",children:[t.jsxs("aside",{className:"filter-sidebar",children:[t.jsxs("div",{className:"filter-header",children:[t.jsx("h3",{children:"Filters"}),t.jsx("button",{onClick:g,children:"Clear All"})]}),t.jsxs("div",{className:"filter-fields",children:[t.jsxs("div",{className:"filter-field",children:[t.jsx("label",{children:"SEARCH"}),t.jsx("input",{value:h,onChange:y=>d(y.target.value),placeholder:"Project, builder, sector…"})]}),t.jsxs("div",{className:"filter-field",children:[t.jsx("label",{children:"CITY"}),t.jsxs("select",{value:c.city,onChange:y=>p("city",y.target.value),children:[t.jsx("option",{value:"",children:"All Cities"}),Zt.map(y=>t.jsx("option",{value:y.city,children:y.city},y.city))]})]}),t.jsxs("div",{className:"filter-field",children:[t.jsx("label",{children:"LOCALITY"}),t.jsxs("select",{value:c.locality,onChange:y=>p("locality",y.target.value),children:[t.jsx("option",{value:"",children:c.city?`All of ${c.city}`:"All Localities"}),x.map(y=>t.jsx("optgroup",{label:y.city,children:y.localities.map(j=>t.jsx("option",{value:j.name,children:j.name},j.slug))},y.city))]})]}),t.jsxs("div",{className:"filter-field",children:[t.jsx("label",{children:"PROPERTY TYPE"}),t.jsxs("select",{value:c.type,onChange:y=>p("type",y.target.value),children:[t.jsx("option",{value:"",children:"All Types"}),!P&&c.type&&t.jsx("option",{value:c.type,children:c.type.replace(/-/g," ")}),au.map(y=>t.jsx("optgroup",{label:y.group,children:y.items.map(([j,L])=>t.jsx("option",{value:j,children:L},j))},y.group))]})]}),t.jsxs("div",{className:"filter-field",children:[t.jsx("label",{children:"BUDGET"}),t.jsxs("select",{value:c.budget,onChange:y=>p("budget",y.target.value),children:[t.jsx("option",{value:"",children:"Any Budget"}),!f&&c.budget&&t.jsx("option",{value:c.budget,children:nu(ql(c.budget))||c.budget}),Kl.map(y=>t.jsx("option",{value:y.value,children:y.label},y.value))]})]}),t.jsxs("div",{className:"filter-field",children:[t.jsx("label",{children:"BEDROOMS"}),t.jsx("div",{className:"bhk-pills",children:Dv.map(y=>t.jsxs("button",{type:"button",className:c.bhk.toLowerCase()===y.toLowerCase()?"active":"",onClick:()=>p("bhk",c.bhk.toLowerCase()===y.toLowerCase()?"":y),children:[y.replace(" BHK",""),y==="Studio"?"":" BHK"]},y))})]}),t.jsxs("div",{className:"filter-field",children:[t.jsx("label",{children:"PROJECT STATUS"}),t.jsxs("select",{value:c.status,onChange:y=>p("status",y.target.value),children:[t.jsx("option",{value:"",children:"Any Status"}),!m&&c.status&&t.jsx("option",{value:c.status,children:c.status.replace(/-/g," ")}),su.map(y=>t.jsx("option",{value:y,children:y},y))]})]}),t.jsxs("div",{className:"filter-field",children:[t.jsx("label",{children:"CATEGORY"}),t.jsxs("div",{className:"category-options",children:[!Lo.some(([y])=>y===c.category)&&t.jsxs("label",{className:"category-option",children:[t.jsx("input",{type:"radio",name:"cat",checked:!0,readOnly:!0}),t.jsx("span",{children:c.category})]}),Lo.map(([y,j])=>t.jsxs("label",{className:"category-option",children:[t.jsx("input",{type:"radio",name:"cat",checked:c.category===y,onChange:()=>p("category",y)}),t.jsx("span",{children:j})]},y||"all"))]})]}),t.jsx("div",{className:"property-count",children:o?"Loading…":`${u.length} properties found`})]}),t.jsxs("div",{className:"expert-card",children:[t.jsx("div",{className:"expert-title",children:"Need Expert Help?"}),t.jsx("div",{className:"expert-text",children:"Our property experts will help you find the perfect home."}),t.jsx("a",{href:"tel:9090101401",className:"expert-call",children:"Call +91 9090 101 401"})]})]}),t.jsxs("main",{className:"results-area",children:[t.jsxs("div",{className:"results-header",children:[t.jsxs("div",{children:[t.jsx("h1",{children:Iv(c)}),t.jsxs("p",{children:[o?"Loading properties…":`Showing ${u.length} result${u.length===1?"":"s"}`," ","•"," ","Luxury Residences & Investment Opportunities"]})]}),t.jsxs("select",{value:c.sort,onChange:y=>p("sort",y.target.value),className:"sort-select",children:[t.jsx("option",{value:"",children:"Sort by: Recommended"}),t.jsx("option",{value:"price-low",children:"Price: Low to High"}),t.jsx("option",{value:"price-high",children:"Price: High to Low"}),t.jsx("option",{value:"newest",children:"Newest First"})]})]}),b.length>0&&t.jsxs("div",{className:"active-filters",children:[b.map(([y,j])=>t.jsxs("button",{type:"button",className:"active-chip",onClick:()=>{y==="q"&&d(""),p(y,"")},children:[j," ",t.jsx("span",{"aria-hidden":"true",children:"✕"})]},y)),t.jsx("button",{type:"button",className:"active-clear",onClick:g,children:"Clear all"})]}),o?t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-title",children:"Loading properties…"}),t.jsx("div",{className:"empty-text",children:"The server may take a few seconds to wake up."})]}):u.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-icon",children:"🏢"}),t.jsx("div",{className:"empty-title",children:"No properties found"}),t.jsx("div",{className:"empty-text",children:"Try adjusting your filters or search query"}),t.jsx("button",{onClick:g,className:"empty-btn",children:"Clear Filters"})]}):t.jsx("div",{className:"results-grid",children:u.map((y,j)=>t.jsx(T,{property:y,index:j},(y==null?void 0:y.id)||(y==null?void 0:y._id)||j))})]})]})]}),t.jsx(Qt,{}),t.jsx("style",{children:`

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
          color: ${sn};
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
          color: ${sn};
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
          border-color: ${ui};
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
          accent-color: ${sn};
        }

        .apply-filter-btn {
          width: 100%;
          height: 43px;
          border: none;
          border-radius: 10px;
          background: ${Ts};
          color: #ffffff;
          font-family: inherit;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
          cursor: pointer;
          transition: .25s ease;
        }

        .apply-filter-btn:hover {
          background: ${sn};
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
          background: ${ui};
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
          color: ${sn};
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
          color: ${sn};
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
          background: ${Ts};
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
        .bhk-pills button:hover { border-color: ${ui}; }
        .bhk-pills button.active { background: ${Ts}; border-color: ${Ts}; color: ${ui}; }

        .active-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; align-items: center; }
        .active-chip {
          display: inline-flex; align-items: center; gap: 7px;
          height: 32px; padding: 0 12px; border-radius: 20px;
          border: 1px solid #ecdfb0; background: #fffaeb; color: #5c4a12;
          font-size: 11.5px; font-weight: 700; cursor: pointer; text-transform: capitalize;
        }
        .active-chip span { font-size: 10px; color: ${sn}; }
        .active-chip:hover { border-color: ${ui}; }
        .active-clear { border: none; background: none; color: ${sn}; font-size: 11.5px; font-weight: 800; cursor: pointer; }
      `})]})}const Uv={pool:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5S16 18 18 18s2-1.5 4-1.5"}),t.jsx("path",{d:"M2 21.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"}),t.jsx("path",{d:"M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0M8 9h8"})]}),gym:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12"})}),club:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M3 21h18M5 21V9l7-5 7 5v12"}),t.jsx("path",{d:"M10 21v-6h4v6"})]}),kids:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"5",r:"2"}),t.jsx("path",{d:"M8 21l2-7-3-3 5-2 5 2-3 3 2 7"})]}),run:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"14",cy:"4",r:"2"}),t.jsx("path",{d:"M6 20l4-6 3 2 2-5 4 3M9 9l4-2 3 2"})]}),garden:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M12 22V12"}),t.jsx("path",{d:"M12 12c0-5 4-8 8-8 0 5-3 8-8 8ZM12 14c0-4-3-7-7-7 0 4 3 7 7 7Z"})]}),shield:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"}),t.jsx("path",{d:"m9 12 2 2 4-4"})]}),power:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M13 2 4 14h7l-1 8 9-12h-7z"})}),yoga:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"4.5",r:"2"}),t.jsx("path",{d:"M4 20h16M12 7v6M7 11l5 2 5-2M8 20l4-7 4 7"})]}),tennis:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"9",cy:"9",r:"6"}),t.jsx("path",{d:"M13.5 13.5 20 20M5 5c3 1 5 3 6 8"})]}),parking:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"4",y:"3",width:"16",height:"18",rx:"3"}),t.jsx("path",{d:"M10 17V7h3.5a3 3 0 0 1 0 6H10"})]}),cafe:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"}),t.jsx("path",{d:"M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3"})]}),spa:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M12 21c-4.5 0-8-3-8-7 3 0 6 1.5 8 4 2-2.5 5-4 8-4 0 4-3.5 7-8 7Z"}),t.jsx("path",{d:"M12 18c0-4 1.5-8 0-12-1.5 4 0 8 0 12Z"})]}),lift:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"5",y:"3",width:"14",height:"18",rx:"2"}),t.jsx("path",{d:"m9 9 3-3 3 3M9 15l3 3 3-3"})]}),wifi:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"}),t.jsx("circle",{cx:"12",cy:"19.5",r:"1"})]}),camera:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"3",y:"7",width:"13",height:"10",rx:"2"}),t.jsx("path",{d:"m16 11 5-3v8l-5-3"})]}),theatre:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"3",y:"5",width:"18",height:"12",rx:"2"}),t.jsx("path",{d:"M8 21h8M12 17v4"})]}),ball:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"12",r:"9"}),t.jsx("path",{d:"M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"})]}),party:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"m4 20 5-14 9 9-14 5Z"}),t.jsx("path",{d:"M14 4l1 2M19 9l2-1M17 3l-1 3"})]}),book:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"}),t.jsx("path",{d:"M4 19a2 2 0 0 1 2-2h13"})]}),pet:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"6",cy:"10",r:"2"}),t.jsx("circle",{cx:"10",cy:"6",r:"2"}),t.jsx("circle",{cx:"14",cy:"6",r:"2"}),t.jsx("circle",{cx:"18",cy:"10",r:"2"}),t.jsx("path",{d:"M8 17c0-3 2-5 4-5s4 2 4 5-2 3-4 3-4 0-4-3Z"})]}),ev:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"4",y:"4",width:"10",height:"16",rx:"2"}),t.jsx("path",{d:"M9 8l-2 4h4l-2 4M14 10h3a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0V9l-2-2"})]}),water:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"})}),concierge:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M4 18h16M6 18a6 6 0 0 1 12 0M12 9V7M10 7h4"})}),check:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"12",r:"9"}),t.jsx("path",{d:"m8 12 3 3 5-6"})]})},Yl=[["Swimming Pool","pool"],["Gymnasium","gym"],["Club House","club"],["Kids Play Area","kids"],["Jogging Track","run"],["Landscaped Garden","garden"],["24x7 Security","shield"],["Power Backup","power"],["Yoga Deck","yoga"],["Tennis Court","tennis"],["Covered Parking","parking"],["Cafeteria","cafe"],["Spa & Sauna","spa"],["High-speed Lifts","lift"],["Wi-Fi Lounge","wifi"],["CCTV Surveillance","camera"],["Mini Theatre","theatre"],["Sports Court","ball"],["Party Hall","party"],["Library","book"],["Pet Park","pet"],["EV Charging","ev"],["Rainwater Harvesting","water"],["Concierge Service","concierge"]],Hv=["Swimming Pool","Gymnasium","Club House","Kids Play Area","Jogging Track","Landscaped Garden","24x7 Security","Power Backup"],$v=[["pool","pool"],["swim","pool"],["gym","gym"],["fitness","gym"],["club","club"],["kid","kids"],["play","kids"],["jog","run"],["track","run"],["walk","run"],["garden","garden"],["park","garden"],["green","garden"],["secur","shield"],["power","power"],["backup","power"],["yoga","yoga"],["meditation","yoga"],["tennis","tennis"],["badminton","tennis"],["parking","parking"],["cafe","cafe"],["restaurant","cafe"],["spa","spa"],["sauna","spa"],["lift","lift"],["elevator","lift"],["wifi","wifi"],["wi-fi","wifi"],["cctv","camera"],["theatre","theatre"],["cinema","theatre"],["sport","ball"],["basket","ball"],["football","ball"],["party","party"],["banquet","party"],["library","book"],["pet","pet"],["ev ","ev"],["charging","ev"],["water","water"],["concierge","concierge"]],_v=(e="")=>{var i;const n=Yl.find(([s])=>s.toLowerCase()===String(e).toLowerCase());if(n)return n[1];const r=` ${String(e).toLowerCase()} `;return((i=$v.find(([s])=>r.includes(s)))==null?void 0:i[1])||"check"};function Rf({name:e,size:n=24}){return t.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:Uv[_v(e)]})}const ou="9090101401",lu="+91 9090 101 401",Gv="919090101401",Vv={pin:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.6"})]}),building:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}),t.jsx("path",{d:"M16 9h2a2 2 0 0 1 2 2v10M3 21h18M8 7h4M8 11h4M8 15h4"})]}),area:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),t.jsx("path",{d:"M4 20 20 4M14 4h6v6"})]}),diamond:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M6 3h12l4 6-10 12L2 9z"}),t.jsx("path",{d:"M2 9h20M12 21 8 9l4-6 4 6-4 12"})]}),calendar:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2"}),t.jsx("path",{d:"M3 10h18M8 3v4M16 3v4"})]}),arrowR:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),arrowL:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M19 12H5M11 6l-6 6 6 6"})}),play:t.jsx(t.Fragment,{children:t.jsx("path",{d:"m9 7 8 5-8 5z",fill:"currentColor",stroke:"none"})}),check:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"12",r:"9"}),t.jsx("path",{d:"m8 12 3 3 5-6"})]}),phone:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"})}),user:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"8",r:"4"}),t.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]}),mobile:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2"}),t.jsx("path",{d:"M11 18h2"})]}),mail:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),t.jsx("path",{d:"m3 7 9 6 9-6"})]}),chat:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"})}),lock:t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),t.jsx("path",{d:"M8 11V8a4 4 0 0 1 8 0v3"})]}),plus:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M12 5v14M5 12h14"})}),download:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M4 21h16"})}),minus:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M5 12h14"})}),close:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),headset:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 14v-2a8 8 0 0 1 16 0v2"}),t.jsx("rect",{x:"3",y:"14",width:"4",height:"6",rx:"1.5"}),t.jsx("rect",{x:"17",y:"14",width:"4",height:"6",rx:"1.5"})]}),doc:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M6 3h8l4 4v14H6z"}),t.jsx("path",{d:"M14 3v4h4M9 12h6M9 16h6"})]}),star:t.jsx(t.Fragment,{children:t.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"})}),award:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"9",r:"6"}),t.jsx("path",{d:"m8.5 14-1.5 7 5-3 5 3-1.5-7"})]}),bulb:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"})}),leaf:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M5 19c0-8 5-14 14-14 0 9-6 14-14 14Z"}),t.jsx("path",{d:"M5 19 13 11"})]}),people:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),t.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),t.jsx("path",{d:"M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7"})]}),chart:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M4 20V10M10 20V4M16 20v-8M22 20H2"})}),key:t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"8",cy:"15",r:"4"}),t.jsx("path",{d:"m10.8 12.2 8.7-8.7M16 6l3 3"})]}),trophy:t.jsx(t.Fragment,{children:t.jsx("path",{d:"M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4a3 3 0 0 0 4 4M16 6h4a3 3 0 0 1-4 4M12 13v4M8 21h8M10 17h4"})}),home:t.jsx(t.Fragment,{children:t.jsx("path",{d:"m3 11 9-7 9 7M5 10v10h14V10"})})},Z=({n:e,size:n=20,sw:r=1.7})=>t.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:Vv[e]}),qv=()=>t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),Kv=(e="")=>{let n=String(e).trim().replace("#","");return n.length===3&&(n=n.split("").map(r=>r+r).join("")),/^[0-9a-f]{6}$/i.test(n)?[0,2,4].map(r=>parseInt(n.slice(r,r+2),16)):null},Dt=(e,n,r)=>`rgb(${e.map((i,s)=>Math.round(i+(n[s]-i)*r)).join(",")})`,Yv=e=>{const n=Kv(e);if(!n)return{};const r=n.map(a=>(a/=255,a<=.03928?a/12.92:((a+.055)/1.055)**2.4)).reduce((a,o,l)=>a+o*[.2126,.7152,.0722][l],0);if(r<.02)return{"--pd-brand":e,"--pd-deep":Dt(n,[0,0,0],.2),"--pd-cta-bg":"var(--pd-grad)","--pd-cta-fg":"#111"};const i=[255,255,255],s=[0,0,0];return{"--pd-brand":e,"--pd-deep":Dt(n,s,.35),"--pd-accent":r>.3?Dt(n,s,.45):e,"--pd-on":Dt(n,i,.72),"--pd-on-brand":r>.45?"#111":"#fff","--pd-soft":Dt(n,i,.93),"--pd-line2":Dt(n,i,.75),"--pd-tint":Dt(n,i,.965),"--pd-glow":`rgba(${n.join(",")},.28)`,"--pd-grad":`linear-gradient(135deg, ${Dt(n,i,.3)}, ${e} 55%, ${Dt(n,s,.3)})`,"--pd-cta-bg":"#fff","--pd-cta-fg":e}},es=e=>String(e).padStart(2,"0"),Mo=(e="")=>String(e).trim().split(/\s+/)[0].toLowerCase(),Xv=e=>`https://wa.me/${Gv}?text=${encodeURIComponent(e)}`,Pf=e=>String(e.location||"").split(",").map(n=>n.trim()).find(n=>n&&!Zi(n)&&!Ji(n))||"",Qv=(e="")=>{const n=String(e).split(/[–—\-|,]/).map(r=>r.trim()).filter(Boolean);return[n[0]||"",n[1]||""]},Zv=(e="")=>{const n=e.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);if(n)return{type:"iframe",src:`https://www.youtube.com/embed/${n[1]}?autoplay=1&rel=0`};const r=e.match(/vimeo\.com\/(\d+)/);return r?{type:"iframe",src:`https://player.vimeo.com/video/${r[1]}?autoplay=1`}:{type:"video",src:e}};function cu({images:e,tagline:n,taglineSub:r,auto:i=!0}){const[s,a]=v.useState(0),o=e.length;if(v.useEffect(()=>{if(!i||o<2)return;const c=setInterval(()=>a(h=>(h+1)%o),5e3);return()=>clearInterval(c)},[i,o]),!o)return null;const l=c=>a(h=>(h+c+o)%o);return t.jsxs("div",{className:"pd-shape",children:[t.jsx("span",{className:"pd-shape-accent","aria-hidden":"true"}),t.jsxs("div",{className:"pd-shape-frame",children:[e.map((c,h)=>t.jsx("img",{src:c,alt:"",className:h===s?"on":"",loading:h===0?"eager":"lazy"},c+h)),t.jsx("span",{className:"pd-shape-shade","aria-hidden":"true"}),n&&t.jsxs("div",{className:"pd-shape-tag",children:[t.jsx("strong",{children:n}),t.jsx("i",{"aria-hidden":"true"}),r&&t.jsx("small",{children:r})]}),o>1&&t.jsxs("div",{className:"pd-shape-ctrl",children:[t.jsx("button",{type:"button",onClick:()=>l(-1),"aria-label":"Previous photo",children:t.jsx(Z,{n:"arrowL",size:18})}),t.jsxs("span",{children:[es(s+1)," / ",es(o)]}),t.jsx("button",{type:"button",onClick:()=>l(1),"aria-label":"Next photo",children:t.jsx(Z,{n:"arrowR",size:18})})]})]})]})}function ht({children:e,center:n}){return t.jsx("div",{className:`pd-eyebrow${n?" center":""}`,children:e})}function du({property:e,source:n,dark:r,compact:i,onDone:s}){const[a,o]=v.useState({name:"",phone:"",email:"",message:""}),[l,c]=v.useState("idle"),[h,d]=v.useState(""),u=g=>b=>o(k=>({...k,[g]:b.target.value})),p=async g=>{if(g.preventDefault(),a.name.trim().length<2)return d("Please enter your name");if(!/^\+?[\d\s-]{10,15}$/.test(a.phone.trim()))return d("Please enter a valid mobile number");d(""),c("sending");try{await H.post("/enquiries",{name:a.name.trim(),phone:a.phone.trim(),email:a.email.trim(),property:(e==null?void 0:e.title)+(n?` — ${n}`:""),message:a.message.trim()||n||"Enquiry from property page"}),c("sent"),s==null||s()}catch{c("error"),d("Could not send right now. Please call us instead.")}};return l==="sent"?t.jsxs("div",{className:`pd-form-done${r?" dark":""}`,children:[t.jsx(Z,{n:"check",size:34}),t.jsxs("strong",{children:["Thank you, ",a.name.split(" ")[0],"!"]}),t.jsx("span",{children:"Our property expert will call you shortly."})]}):t.jsxs("form",{className:`pd-form${r?" dark":""}`,onSubmit:p,noValidate:!0,children:[t.jsxs("label",{className:"pd-input",children:[t.jsx(Z,{n:"user",size:17}),t.jsx("input",{value:a.name,onChange:u("name"),placeholder:"Full Name",autoComplete:"name"})]}),t.jsxs("label",{className:"pd-input",children:[t.jsx(Z,{n:"mobile",size:17}),t.jsx("input",{value:a.phone,onChange:u("phone"),placeholder:"Mobile Number",inputMode:"tel",autoComplete:"tel"})]}),!i&&t.jsxs("label",{className:"pd-input",children:[t.jsx(Z,{n:"mail",size:17}),t.jsx("input",{value:a.email,onChange:u("email"),placeholder:"Email Address (Optional)",inputMode:"email",autoComplete:"email"})]}),!i&&t.jsxs("label",{className:"pd-input area",children:[t.jsx(Z,{n:"chat",size:17}),t.jsx("textarea",{value:a.message,onChange:u("message"),placeholder:"Your Message (Optional)",rows:3})]}),h&&t.jsx("div",{className:"pd-form-err",children:h}),t.jsx("button",{type:"submit",className:"pd-btn gold block",disabled:l==="sending",children:l==="sending"?"Sending…":t.jsxs(t.Fragment,{children:["REQUEST CALLBACK ",t.jsx(Z,{n:"arrowR",size:16})]})}),t.jsxs("div",{className:"pd-form-safe",children:[t.jsx(Z,{n:"lock",size:13})," Your information is safe with us."]})]})}const Jv=["+91","+971","+1","+44","+65","+61"];function eb({property:e}){const[n,r]=v.useState({name:"",code:"+91",phone:"",agree:!0}),[i,s]=v.useState("idle"),[a,o]=v.useState(""),l=h=>d=>r(u=>({...u,[h]:d.target.type==="checkbox"?d.target.checked:d.target.value})),c=async h=>{if(h.preventDefault(),n.name.trim().length<2)return o("Please enter your name");if(!/^[\d\s-]{7,14}$/.test(n.phone.trim()))return o("Please enter a valid mobile number");if(!n.agree)return o("Please allow us to contact you");o(""),s("sending");try{await H.post("/enquiries",{name:n.name.trim(),phone:`${n.code} ${n.phone.trim()}`,email:"",property:e.title,message:"Enquiry from property page (top form)"}),s("sent")}catch{s("idle"),o("Could not send right now. Please call us instead.")}};return i==="sent"?t.jsxs("div",{className:"pd-form-done",children:[t.jsx(Z,{n:"check",size:34}),t.jsxs("strong",{children:["Thank you, ",n.name.split(" ")[0],"!"]}),t.jsx("span",{children:"Our property expert will call you shortly."})]}):t.jsxs("form",{className:"pd-hform",onSubmit:c,noValidate:!0,children:[t.jsxs("label",{children:["FULL NAME",t.jsx("input",{value:n.name,onChange:l("name"),placeholder:"Enter your name",autoComplete:"name"})]}),t.jsxs("label",{children:["MOBILE NUMBER",t.jsxs("span",{className:"pd-hform-phone",children:[t.jsx("select",{value:n.code,onChange:l("code"),"aria-label":"Country code",children:Jv.map(h=>t.jsx("option",{children:h},h))}),t.jsx("input",{value:n.phone,onChange:l("phone"),placeholder:"Enter mobile number",inputMode:"tel",autoComplete:"tel-national"})]})]}),t.jsxs("label",{className:"pd-hform-check",children:[t.jsx("input",{type:"checkbox",checked:n.agree,onChange:l("agree")})," I authorize company representatives to Call, SMS, Email or WhatsApp me."]}),a&&t.jsx("div",{className:"pd-form-err",children:a}),t.jsx("button",{type:"submit",disabled:i==="sending",children:i==="sending"?"SENDING…":"SUBMIT"})]})}function hu({open:e,onClose:n,children:r,wide:i,dark:s}){return v.useEffect(()=>{if(!e)return;const a=l=>l.key==="Escape"&&n();document.addEventListener("keydown",a);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",a),document.body.style.overflow=o}},[e,n]),e?t.jsx("div",{className:"pd-modal",role:"dialog","aria-modal":"true",onClick:n,children:t.jsxs("div",{className:`pd-modal-box${i?" wide":""}${s?" dark":""}`,onClick:a=>a.stopPropagation(),children:[t.jsx("button",{type:"button",className:"pd-modal-x",onClick:n,"aria-label":"Close",children:t.jsx(Z,{n:"close"})}),r]})}):null}const uu=[["overview","Overview"],["pricing","Price"],["highlights","Highlights"],["amenities","Amenities"],["gallery","Gallery"],["location","Location"],["about","Developer"],["faqs","FAQs"]];function tb(){var L;const{id:e}=Ga(),n=tn(),[r,i]=v.useState(null),[s,a]=v.useState([]),[o,l]=v.useState("loading"),[c,h]=v.useState(!1),[d,u]=v.useState(null),[p,g]=v.useState(0),[b,k]=v.useState("overview"),[P,f]=v.useState(!1);v.useEffect(()=>{if(r&&(r.slug===e||r.id===e))return;let S=!0;return l("loading"),h(!1),g(0),f(!1),window.scrollTo(0,0),Promise.all([H.get(`/properties/${encodeURIComponent(e)}`),H.get("/properties").catch(()=>({data:[]}))]).then(([O,F])=>{var M;S&&(i(O.data),a(F.data||[]),l("ok"),(M=O.data)!=null&&M.slug&&O.data.slug!==e&&n(`/property/${O.data.slug}${window.location.search}${window.location.hash}`,{replace:!0}))}).catch(()=>S&&l("missing")),()=>{S=!1}},[e]),v.useEffect(()=>{if(o!=="ok")return;const S=new IntersectionObserver(O=>O.forEach(F=>F.isIntersecting&&k(F.target.id)),{rootMargin:"-45% 0px -50% 0px"});return uu.forEach(([O])=>{const F=document.getElementById(O);F&&S.observe(F)}),()=>S.disconnect()},[o,r]);const m=v.useMemo(()=>{var On,nn,Ke,X;if(!r)return null;const S=nr(r),O=[...new Set([r.image,...r.gallery||[]].filter(Boolean))],F=String(r.title||"").trim().split(/\s+/),M=F.length>1?F.slice(0,-1).join(" "):F[0],q=F.length>1?F[F.length-1]:"",Q=r.developer||"the developer",_=Pf(r)||S.locality,[J,D]=Qv(r.towers),C=((On=r.overview)==null?void 0:On.trim())||`${r.title} is a ${(r.propertyTypeDetail||r.type||"residential").toLowerCase()} project by ${Q}, located at ${r.location}. It offers ${r.bhk||"premium"} ${["Commercial","Retail","SCO"].includes(r.type)?"spaces":"residences"} priced ${r.priceRange||r.price||"on request"}${r.possession?`, with possession expected by ${r.possession}`:""}. Thoughtfully planned with world-class amenities and excellent connectivity, it is one of the most sought-after addresses in ${S.locality||S.city||"the city"}.`,R=[_&&{icon:"pin",value:_,label:S.city||S.locality||"Location"},J&&{icon:"building",value:J,label:D||"Towers"},r.landArea&&{icon:"area",value:r.landArea,label:"Land Area"},{icon:"diamond",value:r.propertyTypeDetail||r.type||"Residences",label:r.bhk||"Configuration"},r.possession&&!r.landArea&&{icon:"calendar",value:r.possession,label:"Possession"}].filter(Boolean).slice(0,4),I=[...String(r.bhk||"").matchAll(/\d+/g)].map(Y=>Y[0]),G=(r.pricing||[]).filter(Y=>Y.type||Y.size||Y.price).length?r.pricing:I.length?I.map(Y=>({type:`${Y} BHK`,size:"On request",price:"On request"})):[{type:r.bhk||r.type,size:"On request",price:r.priceRange||r.price||"On request"}],A=(r.highlights||[]).filter(Boolean).length?r.highlights.filter(Boolean):[`Prime address at ${r.location}`,`${r.bhk||"Premium"} ${r.type?r.type.toLowerCase()+"s":"homes"} by ${Q}`,r.landArea?`Spread across ${r.landArea}${r.towers?` with ${r.towers}`:""}`:"Thoughtfully planned low-density layout",r.rera!==!1?"RERA registered project with transparent pricing":"Transparent pricing and documentation"],U=(r.amenities||[]).length?r.amenities:Hv,ae=r.galleryCaptions||[],Ne=(r.gallery||[]).map((Y,Rt)=>({src:Y,caption:ae[Rt]||""})).filter(Y=>Y.src);Ne.length<5&&r.image&&!Ne.some(Y=>Y.src===r.image)&&Ne.unshift({src:r.image,caption:""});const ee=Mo(r.developer),Ae=ee?s.filter(Y=>Y.id!==r.id&&Mo(Y.developer)===ee):[],Et=s.filter(Y=>Y.id!==r.id&&Y.category===r.category).slice(0,4),oe=Ae.length?Ae:s.filter(Y=>Y.id!==r.id).slice(0,8),ce=r.about||{},ye=((nn=ce.heading)==null?void 0:nn.trim())||`About ${r.developer||"the Developer"}`,Le=((Ke=ce.description)==null?void 0:Ke.trim())||`${r.developer||"The developer"} is known for its commitment to quality, innovation and a customer-centric approach. With landmark projects${Ae.length?` such as ${Ae.slice(0,3).map(Y=>Y.title).join(", ")}`:""}, it continues to set new benchmarks in design, construction and lifestyle across ${S.city||"the region"}.`,nt=(r.faqs||[]).filter(Y=>Y.question).length?r.faqs.filter(Y=>Y.question):[{question:`What is the exact location of ${r.title}?`,answer:`${r.title} is located at ${r.location}, with excellent connectivity to key landmarks, offices and schools.`},{question:`What is the expected possession date for ${r.title}?`,answer:r.possession?`Possession is expected by ${r.possession}. Our team can share the latest construction updates.`:"Our team will share the latest possession timeline and construction updates on request."},{question:`How can I verify the RERA approval status of ${r.title}?`,answer:r.rera!==!1?`${r.title} is a RERA registered project. Our experts can share the RERA number and help you verify it on the state RERA website.`:"Please contact our team for the latest approval details."},{question:`Who is the developer of ${r.title}?`,answer:`${r.title} is developed by ${r.developer||"a reputed developer"}.`},{question:`What types of units are available in ${r.title}?`,answer:`${r.title} offers ${r.bhk||"multiple configurations"}${r.priceRange?`, priced ${r.priceRange}`:""}.`}];return{place:S,images:O,titleA:M,titleB:q,overview:C,facts:R,pricing:G,highlights:A,amenities:U,gallery:Ne,iconic:oe,similar:Et,aboutHeading:ye,aboutDesc:Le,aboutSub:((X=ce.subheading)==null?void 0:X.trim())||"Building a Better Tomorrow",aboutImage:ce.image||O[1]||O[0],aboutStats:(ce.stats||[]).filter(Y=>Y.value||Y.label),faqs:nt,sameDev:Ae.length>0}},[r,s]);if(o==="loading")return t.jsxs("div",{className:"pd-loading",children:[t.jsx("span",{className:"pd-spin"})," Loading property…"]});if(o==="missing"||!r||!m)return t.jsx(t.Fragment,{children:t.jsx("div",{className:"pd-loading",children:t.jsxs("div",{children:[t.jsx("h2",{children:"Property not found"}),t.jsx("p",{children:"It may have been removed."}),t.jsx(V,{className:"pd-btn dark",to:"/search",children:"Browse properties"})]})})});const x=S=>u({kind:"enquiry",source:S}),N=r.brochure?`${r.brochure}${r.brochure.includes("?")?"&":"?"}download=1`:"",w=({className:S,children:O})=>N?t.jsx("a",{className:S,href:N,download:!0,target:"_blank",rel:"noreferrer",children:O}):t.jsx("button",{type:"button",className:S,onClick:()=>x("Brochure request"),children:O}),T=S=>{const O=document.getElementById(S);O&&window.scrollTo({top:O.getBoundingClientRect().top+window.scrollY-66,behavior:"smooth"})},y=m.aboutHeading.split(/\s+/),j=[["Property Type",r.propertyTypeDetail||r.type],["Possession",r.possession],["About Project",r.towers||r.bhk],["Land Area",r.landArea||(r.towers?r.bhk:"")]].filter(([,S])=>S);return t.jsxs("div",{className:"pd-page",style:Yv(r.brandColor),children:[t.jsx("div",{className:"pd-bar",children:t.jsxs("div",{className:"pd-wrap pd-bar-inner",children:[r.logo&&!/via\.placeholder\.com|dummyimage\.com/.test(r.logo)&&!P&&t.jsx("span",{className:"pd-bar-logo",children:t.jsx("img",{src:r.logo,alt:r.developer||r.title,onError:()=>f(!0)})}),t.jsxs("div",{className:"pd-bar-title",children:[t.jsx("strong",{children:r.title}),t.jsx("span",{children:r.priceRange||r.price})]}),t.jsx("nav",{className:"pd-bar-nav",children:uu.map(([S,O])=>t.jsx("button",{type:"button",className:b===S?"on":"",onClick:()=>T(S),children:O},S))}),t.jsx("button",{type:"button",className:"pd-btn gold sm",onClick:()=>x("Enquire now"),children:"Enquire Now"})]})}),t.jsxs("section",{className:"pd-hero",children:[m.images[0]&&t.jsx("img",{className:"pd-hero-bg",src:m.images[0],alt:r.title}),t.jsx("span",{className:"pd-hero-shade","aria-hidden":"true"}),t.jsxs("div",{className:"pd-wrap pd-hero-inner",children:[t.jsxs("div",{className:"pd-hero-info",children:[t.jsxs("div",{className:"pd-glass pd-hero-name",children:[t.jsx("span",{className:"pd-hero-eyebrow",children:(r.propertyTypeDetail||r.type||"Residential").toUpperCase()}),t.jsx("h1",{children:r.title}),t.jsx("p",{children:r.location})]}),t.jsxs("div",{className:"pd-glass pd-hero-facts",children:[j.length>0&&t.jsx("div",{className:"pd-hero-grid",children:j.map(([S,O])=>t.jsxs("div",{children:[t.jsx("small",{children:S.toUpperCase()}),t.jsx("strong",{children:O})]},S))}),t.jsxs("div",{className:"pd-hero-price",children:[t.jsx("small",{children:"STARTING FROM"}),t.jsxs("strong",{children:[r.price||r.priceRange||"Price on request",r.price||r.priceRange?"*":""]})]})]})]}),t.jsxs("div",{className:"pd-hero-card",children:[t.jsx("h2",{children:"Get in Touch with us."}),t.jsx("p",{children:"ENTER YOUR DETAILS BELOW TO PROCEED"}),t.jsx(eb,{property:r})]})]})]}),t.jsx("section",{id:"overview",className:"pd-section pd-overview",children:t.jsxs("div",{className:"pd-wrap pd-split",children:[t.jsxs("div",{className:"pd-copy",children:[t.jsx(ht,{children:"OVERVIEW"}),t.jsxs("h2",{className:"pd-title",children:[t.jsx("span",{children:m.titleA}),m.titleB&&t.jsx("span",{className:"gold",children:m.titleB})]}),t.jsx("p",{className:`pd-desc${c?" open":""}`,children:m.overview}),m.overview.length>260&&t.jsxs("button",{type:"button",className:"pd-readmore",onClick:()=>h(S=>!S),children:[c?"Read Less":"Read More"," ",t.jsx(Z,{n:"arrowR",size:16})]}),t.jsx("div",{className:"pd-facts",style:{"--pd-facts":Math.max(m.facts.length,2)},children:m.facts.map(S=>t.jsxs("div",{className:"pd-fact",children:[t.jsx("span",{className:"pd-fact-ic",children:t.jsx(Z,{n:S.icon,size:20})}),t.jsxs("span",{children:[t.jsx("strong",{children:S.value}),t.jsx("small",{children:S.label})]})]},S.icon+S.value))}),t.jsxs("div",{className:"pd-price-line",children:[t.jsx("span",{children:"Starting from"}),t.jsx("strong",{children:r.price||r.priceRange||"Price on request"}),r.rera!==!1&&t.jsx("em",{children:"✓ RERA"})]}),t.jsxs("div",{className:"pd-actions",children:[t.jsxs(w,{className:"pd-btn dark",children:[N?"DOWNLOAD BROCHURE":"REQUEST BROCHURE"," ",t.jsx(Z,{n:N?"download":"arrowR",size:16})]}),r.videoUrl&&t.jsxs("button",{type:"button",className:"pd-video-btn",onClick:()=>u({kind:"video"}),children:[t.jsx("span",{children:t.jsx(Z,{n:"play",size:18})})," WATCH VIDEO"]})]})]}),t.jsx(cu,{images:m.images,tagline:r.tagline||"A New Icon Rises",taglineSub:r.taglineSub||"Luxury living beyond compare"})]})}),t.jsx("section",{id:"pricing",className:"pd-section",children:t.jsxs("div",{className:"pd-wrap",children:[t.jsxs("div",{className:"pd-head center",children:[t.jsx(ht,{center:!0,children:"SPACE & PRICING"}),t.jsxs("h2",{children:[r.title," ",t.jsx("span",{className:"gold",children:"Price"})]}),t.jsx("p",{children:"Unit sizes and prices — talk to our expert for the latest offers and availability."})]}),t.jsxs("div",{className:"pd-table",children:[t.jsxs("div",{className:"pd-tr head",children:[t.jsx("span",{children:"Unit Type"}),t.jsx("span",{children:"Size"}),t.jsx("span",{children:"Price"}),t.jsx("span",{})]}),m.pricing.map((S,O)=>t.jsxs("div",{className:"pd-tr",children:[t.jsxs("span",{className:"strong",children:[t.jsx(Z,{n:"home",size:17})," ",S.type||"—"]}),t.jsx("span",{children:S.size||"On request"}),t.jsx("span",{className:"gold",children:S.price||"On request"}),t.jsx("span",{children:t.jsx("button",{type:"button",className:"pd-btn outline xs",onClick:()=>x(`Price details: ${S.type}`),children:"Get Details"})})]},O))]}),t.jsxs("div",{className:"pd-center-actions",children:[t.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>x("Price list request"),children:["GET COMPLETE PRICE LIST ",t.jsx(Z,{n:"arrowR",size:16})]}),t.jsxs("a",{className:"pd-call-pill",href:`tel:${ou}`,children:[t.jsx(Z,{n:"phone",size:16})," Speak with an expert ",t.jsx("b",{children:lu})]})]})]})}),t.jsx("section",{id:"highlights",className:"pd-section tint",children:t.jsxs("div",{className:"pd-wrap pd-split",children:[t.jsxs("div",{className:"pd-copy",children:[t.jsx(ht,{children:"EXPLORE FEATURES"}),t.jsx("h2",{className:"pd-h2-line",children:"Project Highlights"}),t.jsx("div",{className:"pd-hl-list",children:m.highlights.map((S,O)=>t.jsxs("div",{className:"pd-hl",children:[t.jsx("span",{className:"pd-hl-ic",children:t.jsx(Z,{n:"check",size:18})}),t.jsx("span",{children:S})]},O))})]}),t.jsx(cu,{images:[...m.images].reverse(),tagline:"A New Way of Living",taglineSub:r.taglineSub||"Luxury living beyond compare"})]})}),t.jsx("section",{id:"amenities",className:"pd-section",children:t.jsxs("div",{className:"pd-wrap",children:[t.jsxs("div",{className:"pd-head center",children:[t.jsx(ht,{center:!0,children:"LUXURY LIFESTYLE"}),t.jsxs("h2",{children:["World-class ",t.jsx("span",{className:"gold",children:"Amenities"})]}),t.jsx("p",{children:"Curated for luxury, wellness and community living."})]}),t.jsx("div",{className:"pd-amenities",children:m.amenities.map(S=>t.jsxs("div",{className:"pd-amenity",children:[t.jsx("span",{children:t.jsx(Rf,{name:S,size:26})}),t.jsx("strong",{children:S})]},S))})]})}),t.jsx("section",{id:"gallery",className:"pd-section soft",children:t.jsxs("div",{className:"pd-wrap",children:[t.jsxs("div",{className:"pd-head center",children:[t.jsx(ht,{center:!0,children:"GALLERY"}),t.jsxs("h2",{className:"serif",children:[r.title," ",t.jsx("span",{className:"gold",children:"Gallery"})]}),t.jsx("p",{children:"A glimpse into a world of unmatched luxury, design and lifestyle."})]}),t.jsx("div",{className:`pd-bento n${Math.min(m.gallery.length,5)}`,children:m.gallery.slice(0,5).map((S,O)=>t.jsxs("button",{type:"button",className:`pd-bento-item i${O}`,onClick:()=>u({kind:"gallery",index:O}),children:[t.jsx("img",{src:S.src,alt:S.caption||`${r.title} photo ${O+1}`,loading:"lazy"}),S.caption&&t.jsxs("span",{className:"pd-cap",children:[S.caption,t.jsx("i",{"aria-hidden":"true"})]})]},S.src+O))}),m.gallery.length>0&&t.jsx("div",{className:"pd-center-actions",children:t.jsxs("button",{type:"button",className:"pd-btn dark",onClick:()=>u({kind:"gallery",index:0}),children:["VIEW FULL GALLERY ",t.jsx(Z,{n:"arrowR",size:16})]})})]})}),t.jsx("section",{id:"location",className:"pd-section",children:t.jsxs("div",{className:"pd-wrap pd-loc",children:[t.jsxs("div",{className:"pd-copy",children:[t.jsx(ht,{children:"LOCATION"}),t.jsxs("h2",{className:"pd-h2",children:["Prime ",t.jsx("span",{className:"gold",children:"Address"})]}),t.jsxs("p",{className:"pd-desc open",children:[r.title," is located at ",r.location,m.place.locality?`, one of the most sought-after micro-markets in ${m.place.city||"the city"}`:"","."]}),t.jsxs("div",{className:"pd-loc-card",children:[t.jsx("span",{className:"pd-fact-ic",children:t.jsx(Z,{n:"pin",size:20})}),t.jsxs("span",{children:[t.jsx("strong",{children:r.location}),t.jsx("small",{children:[m.place.locality,m.place.city].filter(Boolean).join(" · ")})]})]}),t.jsxs("a",{className:"pd-btn outline",href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${r.title}, ${r.location}`)}`,target:"_blank",rel:"noreferrer",children:["OPEN IN GOOGLE MAPS ",t.jsx(Z,{n:"arrowR",size:16})]})]}),t.jsx("div",{className:"pd-map",children:t.jsx("iframe",{title:`${r.title} location map`,src:`https://maps.google.com/maps?q=${encodeURIComponent(r.location||r.title)}&z=14&output=embed`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})}),t.jsxs("section",{id:"about",className:"pd-section",children:[t.jsxs("div",{className:"pd-wrap pd-split about",children:[t.jsxs("div",{className:"pd-copy",children:[t.jsx(ht,{children:"PROJECT EXCELLENCE"}),t.jsxs("h2",{className:"pd-h2",children:[y[0]," ",t.jsx("span",{className:"gold",children:y.slice(1).join(" ")})]}),t.jsx("div",{className:"pd-about-sub",children:m.aboutSub}),t.jsx("p",{className:"pd-desc open",children:m.aboutDesc}),m.aboutStats.length>0&&t.jsx("div",{className:"pd-stats",children:m.aboutStats.map((S,O)=>t.jsxs("div",{className:"pd-stat",children:[t.jsx("span",{className:"pd-stat-ic",children:t.jsx(Z,{n:["chart","key","people","trophy"][O%4],size:22})}),t.jsxs("span",{children:[t.jsx("strong",{children:S.value}),t.jsx("small",{children:S.label})]})]},O))}),t.jsx("div",{className:"pd-features",children:[["award","Quality Construction"],["bulb","Innovative Designs"],["leaf","Sustainable Development"],["people","Customer Centric Approach"]].map(([S,O])=>t.jsxs("div",{className:"pd-feature",children:[t.jsx("span",{children:t.jsx(Z,{n:S,size:20})}),O]},O))})]}),t.jsxs("div",{className:"pd-about-visual",children:[t.jsx("img",{src:m.aboutImage,alt:m.aboutHeading,loading:"lazy"}),t.jsx("span",{className:"pd-about-shade","aria-hidden":"true"}),t.jsxs("div",{className:"pd-about-quote",children:[t.jsx("i",{"aria-hidden":"true"}),"SPACES",t.jsx("br",{}),"THAT INSPIRE",t.jsx("br",{}),"A BRIGHTER",t.jsx("br",{}),"TOMORROW"]}),t.jsxs("div",{className:"pd-about-bar",children:[t.jsxs("span",{children:[t.jsx(Z,{n:"home",size:18})," Iconic Developments"]}),t.jsxs("span",{children:[t.jsx(Z,{n:"leaf",size:18})," Greener Communities"]}),t.jsxs("span",{children:[t.jsx(Z,{n:"people",size:18})," A Better Tomorrow"]})]})]})]}),m.iconic.length>0&&t.jsx("div",{className:"pd-iconic",children:t.jsxs("div",{className:"pd-wrap",children:[t.jsxs("div",{className:"pd-iconic-head",children:[t.jsxs("div",{children:[t.jsx(ht,{children:m.sameDev?"OUR SIGNATURE DEVELOPMENTS":"MORE PROJECTS"}),t.jsx("h2",{className:"pd-h2",children:m.sameDev?t.jsxs(t.Fragment,{children:["Iconic Projects ",t.jsxs("span",{className:"gold",children:["by ",r.developer]})]}):t.jsxs(t.Fragment,{children:["Explore More ",t.jsx("span",{className:"gold",children:"Projects"})]})})]}),t.jsxs(V,{className:"pd-btn outline sm",to:m.sameDev?`/search?q=${encodeURIComponent(Mo(r.developer))}`:"/search",children:["VIEW ALL PROJECTS ",t.jsx(Z,{n:"arrowR",size:15})]})]}),t.jsx(nb,{items:m.iconic})]})})]}),t.jsx("section",{id:"faqs",className:"pd-section",children:t.jsxs("div",{className:"pd-wrap",children:[t.jsxs("div",{className:"pd-head center",children:[t.jsx(ht,{center:!0,children:"CONCIERGE SUPPORT"}),t.jsxs("h2",{children:["Everything You ",t.jsx("span",{className:"gold",children:"Need to Know"})]}),t.jsxs("p",{children:["Get answers to the most common questions about ",r.title,".",t.jsx("br",{}),"Our team is here to help you at every step of your journey."]}),t.jsxs("a",{className:"pd-expert",href:`tel:${ou}`,children:[t.jsx("span",{className:"pd-expert-ic",children:t.jsx(Z,{n:"phone",size:20})}),t.jsxs("span",{children:[t.jsx("small",{children:"TALK TO OUR EXPERT"}),t.jsx("strong",{children:lu}),t.jsx("em",{children:"AVAILABLE NOW"})]})]})]}),t.jsxs("div",{className:"pd-faq-grid",children:[t.jsxs("div",{children:[t.jsx("div",{className:"pd-faqs",children:m.faqs.map((S,O)=>t.jsxs("div",{className:`pd-faq${p===O?" open":""}`,children:[t.jsxs("button",{type:"button",onClick:()=>g(p===O?-1:O),"aria-expanded":p===O,children:[t.jsx("span",{className:"pd-faq-no",children:es(O+1)}),t.jsx("span",{className:"pd-faq-q",children:S.question}),t.jsx("span",{className:"pd-faq-tog",children:t.jsx(Z,{n:p===O?"minus":"plus",size:16,sw:2})})]}),p===O&&S.answer&&t.jsx("p",{children:S.answer})]},O))}),t.jsx("div",{className:"pd-perks",children:[["headset","Dedicated","Relationship Manager"],["doc","Latest Project","Updates"],["calendar","Site Visit","Assistance"],["star","Exclusive Offers","& Pricing Details"]].map(([S,O,F])=>t.jsxs("div",{className:"pd-perk",children:[t.jsx("span",{children:t.jsx(Z,{n:S,size:20})}),t.jsxs("small",{children:[O,t.jsx("br",{}),F]})]},O))})]}),t.jsxs("div",{className:"pd-touch",children:[t.jsx(ht,{children:"GET IN TOUCH"}),t.jsxs("h3",{children:["Get in Touch with ",t.jsx("span",{className:"gold",children:"Us."})]}),t.jsx("p",{children:"Fill in your details and our team will get back to you shortly."}),t.jsx(du,{property:r,source:"Get in touch",dark:!0})]})]})]})}),m.similar.length>0&&t.jsx("section",{className:"pd-section tint",children:t.jsxs("div",{className:"pd-wrap",children:[t.jsx("div",{className:"pd-iconic-head",children:t.jsxs("div",{children:[t.jsx(ht,{children:"EXPLORE MORE"}),t.jsxs("h2",{className:"pd-h2",children:["Similar ",t.jsx("span",{className:"gold",children:"Projects"})]})]})}),t.jsx("div",{className:"pd-similar",children:m.similar.map(S=>t.jsxs(V,{to:it(S),className:"pd-sim",children:[t.jsx("img",{src:S.image,alt:S.title,loading:"lazy"}),t.jsxs("div",{children:[t.jsx("strong",{children:S.title}),t.jsx("span",{className:"gold",children:S.priceRange||S.price}),t.jsxs("small",{children:[t.jsx(Z,{n:"pin",size:13})," ",S.location]})]})]},S.id))})]})}),t.jsx("div",{className:"pd-dock",children:t.jsxs("div",{className:"pd-wrap pd-dock-inner",children:[t.jsxs("div",{className:"pd-dock-prop",children:[m.images[0]&&t.jsx("img",{src:m.images[0],alt:""}),t.jsxs("span",{children:[t.jsx("strong",{children:r.title}),t.jsx("small",{children:r.price||r.priceRange?`${r.price||r.priceRange}* Onwards`:"Price on request"})]})]}),t.jsxs("div",{className:"pd-dock-actions",children:[t.jsxs(w,{className:"pd-dock-brochure",children:[t.jsx(Z,{n:"download",size:20}),t.jsx("span",{children:"Brochure"})]}),t.jsxs("button",{type:"button",className:"pd-dock-enquire",onClick:()=>x("Enquire now"),children:[t.jsx(Z,{n:"mail",size:18}),t.jsx("span",{children:"ENQUIRE NOW"})]}),t.jsx("a",{className:"pd-dock-wa",href:Xv(`Hi, I am interested in ${r.title}. Please share more details.`),target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",children:t.jsx(qv,{})})]})]})}),t.jsxs(hu,{open:(d==null?void 0:d.kind)==="enquiry",onClose:()=>u(null),dark:!0,children:[t.jsxs("div",{className:"pd-modal-head",children:[t.jsx(ht,{children:((L=d==null?void 0:d.source)==null?void 0:L.toUpperCase())||"ENQUIRE"}),t.jsx("h3",{children:r.title}),t.jsx("p",{children:"Share your details and our expert will call you back."})]}),t.jsx(du,{property:r,source:d==null?void 0:d.source,dark:!0},d==null?void 0:d.source)]}),t.jsx(hu,{open:(d==null?void 0:d.kind)==="video",onClose:()=>u(null),wide:!0,children:r.videoUrl&&(()=>{const S=Zv(r.videoUrl);return S.type==="iframe"?t.jsx("div",{className:"pd-video",children:t.jsx("iframe",{src:S.src,title:`${r.title} video`,allow:"autoplay; encrypted-media; fullscreen",allowFullScreen:!0})}):t.jsx("div",{className:"pd-video",children:t.jsx("video",{src:S.src,controls:!0,autoPlay:!0,playsInline:!0})})})()}),(d==null?void 0:d.kind)==="gallery"&&t.jsx(rb,{items:m.gallery,start:d.index||0,title:r.title,onClose:()=>u(null)})]})}function nb({items:e}){const[n,r]=v.useState(null),i=s=>n==null?void 0:n.scrollBy({left:s*(n.clientWidth*.8),behavior:"smooth"});return t.jsxs("div",{className:"pd-iconic-row-wrap",children:[t.jsx("button",{type:"button",className:"pd-round left",onClick:()=>i(-1),"aria-label":"Previous",children:t.jsx(Z,{n:"arrowL",size:18})}),t.jsx("div",{className:"pd-iconic-row",ref:r,children:e.map(s=>t.jsxs(V,{to:it(s),className:"pd-iconic-card",children:[t.jsx("img",{src:s.image,alt:s.title,loading:"lazy"}),t.jsxs("div",{children:[t.jsxs("span",{children:[t.jsx("strong",{children:s.title}),t.jsxs("small",{children:[t.jsx(Z,{n:"pin",size:13})," ",Pf(s)||nr(s).locality,", ",nr(s).city]})]}),t.jsx("em",{children:t.jsx(Z,{n:"arrowR",size:16})})]})]},s.id))}),t.jsx("button",{type:"button",className:"pd-round right",onClick:()=>i(1),"aria-label":"Next",children:t.jsx(Z,{n:"arrowR",size:18})})]})}function rb({items:e,start:n,title:r,onClose:i}){const[s,a]=v.useState(n),o=e.length;v.useEffect(()=>{const c=d=>{d.key==="Escape"&&i(),d.key==="ArrowRight"&&a(u=>(u+1)%o),d.key==="ArrowLeft"&&a(u=>(u-1+o)%o)};document.addEventListener("keydown",c);const h=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=h}},[o,i]);const l=e[s];return t.jsxs("div",{className:"pd-lightbox",role:"dialog","aria-modal":"true","aria-label":`${r} gallery`,children:[t.jsx("button",{type:"button",className:"pd-lb-x",onClick:i,"aria-label":"Close",children:t.jsx(Z,{n:"close",size:22})}),t.jsxs("div",{className:"pd-lb-stage",children:[t.jsx("button",{type:"button",className:"pd-round",onClick:()=>a(c=>(c-1+o)%o),"aria-label":"Previous",children:t.jsx(Z,{n:"arrowL",size:20})}),t.jsxs("figure",{children:[t.jsx("img",{src:l.src,alt:l.caption||r}),t.jsxs("figcaption",{children:[t.jsx("span",{children:l.caption||r}),t.jsxs("b",{children:[es(s+1)," / ",es(o)]})]})]}),t.jsx("button",{type:"button",className:"pd-round",onClick:()=>a(c=>(c+1)%o),"aria-label":"Next",children:t.jsx(Z,{n:"arrowR",size:20})})]}),t.jsx("div",{className:"pd-lb-thumbs",children:e.map((c,h)=>t.jsx("button",{type:"button",className:h===s?"on":"",onClick:()=>a(h),children:t.jsx("img",{src:c.src,alt:"",loading:"lazy"})},c.src+h))})]})}function ib(){const[e,n]=v.useState([]),[r,i]=v.useState(0),[s,a]=v.useState(!0),[o,l]=v.useState(!0),[c,h]=v.useState(!0),d=v.useRef(null);v.useEffect(()=>{H.get("/snaps").then(k=>{n(k.data),h(!1)}).catch(()=>h(!1))},[]),v.useEffect(()=>{d.current&&(s?d.current.play().catch(()=>{}):d.current.pause())},[s,r]),v.useEffect(()=>{const k=P=>{P.key==="ArrowDown"&&g(),P.key==="ArrowUp"&&b(),P.key===" "&&(P.preventDefault(),a(f=>!f))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)});const u=e[r],p=e.length,g=()=>i(k=>(k+1)%p),b=()=>i(k=>(k-1+p)%p);return c?t.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"Loading snaps..."}):u?t.jsxs("div",{style:{minHeight:"100vh",background:"#0a0a0a",color:"#fff",overflow:"hidden"},children:[t.jsxs("div",{style:{height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",borderBottom:"1px solid rgba(255,255,255,.08)",background:"#0a0a0a",position:"sticky",top:0,zIndex:10},children:[t.jsxs(V,{to:"/",style:{display:"flex",alignItems:"center",gap:8,color:"#fff",fontWeight:800,fontSize:14},children:[t.jsx("span",{style:{width:28,height:28,background:"#d8232a",borderRadius:6,display:"grid",placeItems:"center",fontWeight:900,fontSize:12},children:"100"}),"acress.com",t.jsx("span",{style:{fontWeight:400,opacity:.6,fontSize:12,marginLeft:4},children:"/ property-snaps"})]}),t.jsx(V,{to:"/",style:{width:34,height:34,borderRadius:"50%",background:"rgba(255,255,255,.08)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.12)"},children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:t.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),t.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"14px",display:"grid",gridTemplateColumns:"420px 420px",gap:18,justifyContent:"center",alignItems:"start"},className:"snaps-layout",children:[t.jsxs("div",{style:{position:"relative",background:"#000",borderRadius:20,overflow:"hidden",aspectRatio:"9/16",maxHeight:"78vh",border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 20px 60px rgba(0,0,0,.6)"},className:"video-box",children:[t.jsx("video",{ref:d,src:u.videoUrl,poster:u.image||u.thumbnail,muted:o,loop:!0,playsInline:!0,autoPlay:!0,style:{width:"100%",height:"100%",objectFit:"cover"},onClick:()=>a(!s)},u.id),t.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:12,background:"linear-gradient(to bottom, rgba(0,0,0,.55) 0%, transparent 100%)",display:"flex",alignItems:"center",gap:10},children:[t.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",flexShrink:0,border:"2px solid rgba(255,255,255,.9)"},children:t.jsx("span",{style:{fontWeight:900,fontSize:11,color:"#d8232a"},children:"100"})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:{fontWeight:700,fontSize:13,lineHeight:1.1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff"},children:u.title}),t.jsx("div",{style:{fontSize:11,opacity:.8,color:"#fff"},children:"HomWisor"})]}),t.jsx("button",{onClick:()=>l(!o),style:{width:34,height:34,borderRadius:"50%",background:o?"rgba(0,0,0,.5)":"rgba(255,255,255,.9)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:o?"#fff":"#111",cursor:"pointer",backdropFilter:"blur(6px)"},children:o?t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),t.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),t.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}),t.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),t.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}):t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M11 5L6 9H2v6h4l5 4z"}),t.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),t.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]})})]}),t.jsxs("div",{style:{position:"absolute",top:"38%",left:0,right:0,textAlign:"center",pointerEvents:"none"},children:[t.jsx("div",{style:{fontSize:10,letterSpacing:1.5,opacity:.9,color:"#fff",fontWeight:600,textShadow:"0 2px 10px rgba(0,0,0,.6)"},children:"WHERE"}),t.jsx("div",{style:{fontSize:22,fontWeight:800,letterSpacing:.5,color:"#fff",textShadow:"0 4px 20px rgba(0,0,0,.7)",marginTop:2,fontFamily:"'Playfair Display', serif"},children:"SPACIOUS LIVING"}),t.jsx("div",{style:{width:40,height:1.5,background:"#fff",margin:"6px auto",opacity:.8}}),t.jsx("div",{style:{fontSize:9,letterSpacing:2,opacity:.85,color:"#fff"},children:u.badge||"LUXURY EDITION"})]}),t.jsxs("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",pointerEvents:"none"},children:[!s&&t.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(0,0,0,.45)",backdropFilter:"blur(8px)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)"},children:t.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"#fff",children:t.jsx("path",{d:"M8 5.14v14l11-7z"})})}),t.jsx("button",{onClick:()=>a(!s),style:{position:"absolute",inset:0,background:"transparent",border:"none",cursor:"pointer",pointerEvents:"auto"},"aria-label":"play"})]}),t.jsx("button",{onClick:b,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:t.jsx("path",{d:"M15 18l-6-6 6-6"})})}),t.jsx("button",{onClick:g,style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.15)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",backdropFilter:"blur(6px)"},children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:t.jsx("path",{d:"M9 18l6-6-6-6"})})}),t.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"10px 12px",background:"linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.2) 60%, transparent 100%)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[t.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[t.jsx("path",{d:"M19 12H5"}),t.jsx("path",{d:"M12 19l-7-7 7-7"})]})}),t.jsx("button",{onClick:()=>a(!s),style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,.9)",border:"none",display:"grid",placeItems:"center",cursor:"pointer"},children:s?t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:[t.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),t.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}):t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#111",children:t.jsx("path",{d:"M8 5.14v14l11-7z"})})}),t.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer"},children:t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.7",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"M12 5l7 7-7 7"})]})}),t.jsx("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:t.jsx("button",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,255,.2)",color:"#fff"},children:t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.6",children:[t.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),t.jsx("polyline",{points:"16 6 12 2 8 6"}),t.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]})})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[t.jsxs("div",{style:{flex:1,background:"rgba(0,0,0,.35)",border:"1px solid rgba(255,255,255,.12)",borderRadius:12,padding:8,display:"flex",alignItems:"center",gap:8},children:[t.jsx("img",{src:u.thumbnail||u.image,alt:"thumb",style:{width:42,height:32,borderRadius:6,objectFit:"cover",border:"1px solid rgba(255,255,255,.2)"}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:{fontSize:11,fontWeight:600,lineHeight:1.2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Welcome to a ",u.title.slice(0,28),"..."]}),t.jsxs("div",{style:{fontSize:10,opacity:.7},children:["Where spacious living • ",u.location]})]})]}),t.jsxs("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{background:"#d8232a",color:"#fff",padding:"8px 12px",borderRadius:20,fontWeight:800,fontSize:11,display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap",textDecoration:"none"},children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",children:t.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z"})}),u.phone]})]})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,maxHeight:"78vh",overflowY:"auto"},className:"scrollbar-hide",children:[t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid rgba(255,255,255,.08)",borderRadius:16,padding:14,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:1,color:"rgba(255,255,255,.5)"},children:"NAVIGATION"}),t.jsxs("div",{style:{fontWeight:800,fontSize:22,marginTop:2},children:[r+1,t.jsxs("span",{style:{opacity:.35,fontWeight:600},children:["/",p]})]})]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{onClick:b,disabled:p<=1,style:{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",opacity:r===0?.6:1},children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:t.jsx("path",{d:"M18 15l-6-6-6 6"})})}),t.jsx("button",{onClick:g,disabled:p<=1,style:{width:44,height:44,borderRadius:12,background:"#2a2a2a",border:"1px solid rgba(255,255,255,.12)",display:"grid",placeItems:"center",color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,.2)"},children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"1.8",children:t.jsx("path",{d:"M6 9l6 6 6-6"})})})]})]}),t.jsxs("div",{style:{background:"#f8f9fb",borderRadius:20,padding:16,color:"#111",boxShadow:"0 20px 60px rgba(0,0,0,.25)",border:"1px solid #eef0f3"},children:[t.jsxs("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"flex-start"},children:[t.jsx("span",{style:{color:"#dc2626",marginTop:1},children:"⚡"}),t.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#991b1b",lineHeight:1.4},children:u.demandText})]}),t.jsxs("div",{style:{background:"#fefce8",border:"1px solid #fde68a",borderRadius:12,padding:10,display:"flex",gap:8,alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{width:8,height:8,background:"#22c55e",borderRadius:"50%",display:"inline-block",boxShadow:"0 0 0 4px rgba(34,197,94,.15)"}}),t.jsxs("span",{style:{fontSize:12,fontWeight:700,color:"#92400e"},children:[u.activeBuyers," active buyers viewing this project right now"]})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"PROJECT OVERVIEW"}),t.jsx("div",{style:{background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:12,padding:12,marginTop:8},children:t.jsxs("div",{style:{fontSize:13,lineHeight:1.5,color:"#374151",fontStyle:"italic"},children:['"',u.description,'"']})})]}),t.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[t.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center"},children:t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#dc2626",strokeWidth:"1.8",children:[t.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),t.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"MICRO-MARKET LOCATION"}),t.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.microMarket||u.location})]})]}),t.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #eef0f3",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:10},children:[t.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid #eee",display:"grid",placeItems:"center",color:"#059669"},children:t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#059669",strokeWidth:"1.8",children:[t.jsx("path",{d:"M3 21h18"}),t.jsx("path",{d:"M3 7v14"}),t.jsx("path",{d:"M9 21V7"}),t.jsx("path",{d:"M15 21V7"}),t.jsx("path",{d:"M21 7V21"}),t.jsx("path",{d:"M3 7l9-4 9 4"}),t.jsx("path",{d:"M9 7h6"})]})}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:"#6b7280"},children:"INVESTMENT/PRICE"}),t.jsx("div",{style:{fontWeight:700,fontSize:13,marginTop:1},children:u.price})]}),t.jsx("button",{style:{width:32,height:32,borderRadius:10,background:"#fff",border:"1px solid #e5e7eb",display:"grid",placeItems:"center",cursor:"pointer"},children:t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#6b7280",strokeWidth:"1.8",children:[t.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7-6 11-6 11S6 15 6 8z"}),t.jsx("path",{d:"M10 21h4"}),t.jsx("path",{d:"M12 17v4"})]})})]}),t.jsxs("div",{style:{background:"#0f1e2e",borderRadius:14,padding:12,marginTop:12,color:"#fff"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontWeight:700,fontSize:11,letterSpacing:.4},children:[t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"1.8",children:[t.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),t.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"INVESTOR MATRIX TOOL"]}),t.jsx("span",{style:{fontSize:10,fontWeight:700,background:"rgba(56,189,248,.15)",color:"#38bdf8",padding:"3px 7px",borderRadius:20,border:"1px solid rgba(56,189,248,.25)"},children:"◉ Verified ROI"})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12,borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:12},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:10,opacity:.6},children:"Est. Monthly Rental"}),t.jsx("div",{style:{fontWeight:800,fontSize:13,marginTop:2},children:u.monthlyRental})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{fontSize:10,opacity:.6},children:"Annualized ROI Yield"}),t.jsxs("div",{style:{fontWeight:800,fontSize:13,marginTop:2,color:"#22c55e"},children:["~ ",u.roi]})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[t.jsx("a",{href:`tel:${u.phone.replace(/\s/g,"")}`,style:{height:36,background:"#d8232a",color:"#fff",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"Call Now"}),t.jsx(V,{to:`/property/${u.id.replace("snap","p")||""}`,style:{height:36,background:"#fff",color:"#111",borderRadius:10,display:"grid",placeItems:"center",fontWeight:700,fontSize:12,textDecoration:"none"},children:"View Details"})]})]}),t.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto"},className:"scrollbar-hide",children:e.map((k,P)=>t.jsxs("button",{onClick:()=>i(P),style:{flexShrink:0,width:64,height:44,borderRadius:8,overflow:"hidden",border:P===r?"2px solid #d8232a":"1px solid #e5e7eb",opacity:P===r?1:.6,cursor:"pointer",position:"relative",padding:0},children:[t.jsx("img",{src:k.thumbnail||k.image,alt:k.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),P===r&&t.jsx("span",{style:{position:"absolute",inset:0,background:"rgba(216,35,42,.15)",borderRadius:6}})]},k.id))})]}),t.jsxs("div",{style:{textAlign:"center",fontSize:11,opacity:.5,paddingBottom:10},children:["Swipe up/down or use arrow keys • ",p," Snaps • Auto-play • Fully dynamic from Admin"]})]})]}),t.jsx("style",{children:`
        @media(max-width: 960px){
          .snaps-layout{ grid-template-columns: 1fr !important; max-width: 500px !important; }
          .video-box{ max-height: 64vh !important; }
        }
        .scrollbar-hide::-webkit-scrollbar{ display:none; }
        .scrollbar-hide{ -ms-overflow-style:none; scrollbar-width:none; }
      `})]}):t.jsx("div",{style:{minHeight:"100vh",background:"#0a0a0a",display:"grid",placeItems:"center",color:"#fff"},children:"No snaps found. Add via Admin Panel."})}const ur="#D4AF37",pi="#9A7418";function sb(){const[e,n]=v.useState({name:"",phone:"",email:"",subject:"",message:""}),r=s=>{n({...e,[s.target.name]:s.target.value})},i=s=>{s.preventDefault(),alert("Thank you! Our property expert will contact you shortly."),n({name:"",phone:"",email:"",subject:"",message:""})};return t.jsxs("div",{className:"contact-page",children:[t.jsx(Bt,{}),t.jsxs("section",{className:"contact-hero",children:[t.jsx("div",{className:"contact-hero-overlay"}),t.jsxs("div",{className:"contact-hero-content",children:[t.jsx("span",{className:"contact-eyebrow",children:"GET IN TOUCH"}),t.jsxs("h1",{children:["Let's Find Your",t.jsx("span",{children:" Dream Property"})]}),t.jsx("p",{children:"Have questions about a property or looking for your next investment? Our property experts are here to help."})]})]}),t.jsx("section",{className:"contact-section",children:t.jsxs("div",{className:"contact-container",children:[t.jsxs("div",{className:"contact-info",children:[t.jsx("span",{className:"section-eyebrow",children:"CONTACT US"}),t.jsxs("h2",{children:["We’re Here To",t.jsx("br",{}),t.jsx("span",{children:"Help You"})]}),t.jsx("p",{className:"contact-intro",children:"Whether you're buying, selling or investing in real estate, our team is ready to assist you with expert guidance and personalized property solutions."}),t.jsxs("div",{className:"info-list",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("div",{className:"info-icon",children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:t.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"})})}),t.jsxs("div",{children:[t.jsx("span",{children:"Call Us"}),t.jsx("a",{href:"tel:9090101401",children:"+91 9090 101 401"})]})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("div",{className:"info-icon",children:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),t.jsx("path",{d:"m3 7 9 6 9-6"})]})}),t.jsxs("div",{children:[t.jsx("span",{children:"Email Us"}),t.jsx("a",{href:"mailto:brejendra@homwisor.com",children:"brejendra@homwisor.com"}),t.jsx("a",{href:"mailto:birendra.homwisor@gmail.com",children:"birendra.homwisor@gmail.com"})]})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("div",{className:"info-icon",children:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[t.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}),t.jsxs("div",{children:[t.jsx("span",{children:"Our Office"}),t.jsx("p",{children:"Unit no : 704 , Sohna Road , ILD Trade Centre, Gurugram , Haryana , 122018"})]})]})]}),t.jsxs("a",{href:"https://wa.me/919090101401",target:"_blank",rel:"noopener noreferrer",className:"contact-whatsapp",children:[t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"})}),"Chat With Us On WhatsApp"]})]}),t.jsxs("div",{className:"contact-form-card",children:[t.jsxs("div",{className:"form-heading",children:[t.jsx("span",{children:"SEND US A MESSAGE"}),t.jsxs("h2",{children:["How Can We",t.jsx("strong",{children:" Help You?"})]}),t.jsx("p",{children:"Fill out the form below and our team will get back to you shortly."})]}),t.jsxs("form",{onSubmit:i,children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Your Name"}),t.jsx("input",{type:"text",name:"name",value:e.name,onChange:r,placeholder:"Enter your name",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone Number"}),t.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:r,placeholder:"+91 XXXXX XXXXX",required:!0})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email Address"}),t.jsx("input",{type:"email",name:"email",value:e.email,onChange:r,placeholder:"Enter your email",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"I'm Interested In"}),t.jsxs("select",{name:"subject",value:e.subject,onChange:r,required:!0,children:[t.jsx("option",{value:"",children:"Select an option"}),t.jsx("option",{children:"Buying a Property"}),t.jsx("option",{children:"Selling a Property"}),t.jsx("option",{children:"Property Investment"}),t.jsx("option",{children:"Site Visit"}),t.jsx("option",{children:"General Enquiry"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Message"}),t.jsx("textarea",{name:"message",value:e.message,onChange:r,placeholder:"Tell us how we can help you...",rows:"5"})]}),t.jsxs("button",{type:"submit",className:"submit-btn",children:["Send Message",t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m13 6 6 6-6 6"})]})]}),t.jsx("p",{className:"form-note",children:"Your information is completely confidential and will never be shared."})]})]})]})}),t.jsx(Qt,{}),t.jsx("style",{children:`

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

          color: ${ur};

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
          color: ${ur};
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
          color: ${ur};
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
          color: ${pi};
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
          color: ${pi};
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
          color: ${pi};

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
          color: ${pi};
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
          border-color: ${ur};
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
          background: ${pi};
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
          color: ${ur};
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

          background: ${ur};
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

      `})]})}const ie=({children:e,...n})=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n,children:e}),z={user:e=>t.jsxs(ie,{...e,children:[t.jsx("circle",{cx:"12",cy:"8",r:"4"}),t.jsx("path",{d:"M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"})]}),lock:e=>t.jsxs(ie,{...e,children:[t.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),t.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]}),mail:e=>t.jsxs(ie,{...e,children:[t.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),t.jsx("path",{d:"m3 7 9 6 9-6"})]}),eye:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"}),t.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),eyeOff:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M10.6 5.1A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-2.4 3.3M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6"}),t.jsx("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"}),t.jsx("path",{d:"m3 3 18 18"})]}),shield:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"}),t.jsx("path",{d:"m9 12 2 2 4-4"})]}),alert:e=>t.jsxs(ie,{...e,children:[t.jsx("circle",{cx:"12",cy:"12",r:"9"}),t.jsx("path",{d:"M12 8v5M12 16h.01"})]}),check:e=>t.jsxs(ie,{...e,children:[t.jsx("circle",{cx:"12",cy:"12",r:"9"}),t.jsx("path",{d:"m8 12 3 3 5-6"})]}),clock:e=>t.jsxs(ie,{...e,children:[t.jsx("circle",{cx:"12",cy:"12",r:"9"}),t.jsx("path",{d:"M12 7v5l3 2"})]}),users:e=>t.jsxs(ie,{...e,children:[t.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),t.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),t.jsx("path",{d:"M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7"})]}),plus:e=>t.jsx(ie,{...e,children:t.jsx("path",{d:"M12 5v14M5 12h14"})}),key:e=>t.jsxs(ie,{...e,children:[t.jsx("circle",{cx:"8",cy:"15",r:"4"}),t.jsx("path",{d:"m10.8 12.2 8.7-8.7M16 6l3 3M14 8l2 2"})]}),grid:e=>t.jsxs(ie,{...e,children:[t.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),t.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),t.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),t.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]}),building:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}),t.jsx("path",{d:"M16 9h2a2 2 0 0 1 2 2v10"}),t.jsx("path",{d:"M3 21h18M8 7h4M8 11h4M8 15h4"})]}),film:e=>t.jsxs(ie,{...e,children:[t.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),t.jsx("path",{d:"m10 8.5 5 3.5-5 3.5z"})]}),image:e=>t.jsxs(ie,{...e,children:[t.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2.5"}),t.jsx("circle",{cx:"9",cy:"10",r:"2"}),t.jsx("path",{d:"m21 16-5-5-9 9"})]}),pin:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"}),t.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),gift:e=>t.jsxs(ie,{...e,children:[t.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),t.jsx("path",{d:"M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"}),t.jsx("path",{d:"M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5"})]}),chat:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"}),t.jsx("path",{d:"M8 11h8M8 14.5h5"})]}),logout:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"}),t.jsx("path",{d:"m10 17 5-5-5-5M15 12H4"})]}),external:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M14 4h6v6M20 4l-9 9"}),t.jsx("path",{d:"M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"})]}),refresh:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M20 11a8 8 0 0 0-14.9-3.9L4 8M4 4v4h4"}),t.jsx("path",{d:"M4 13a8 8 0 0 0 14.9 3.9L20 16M20 20v-4h-4"})]}),menu:e=>t.jsx(ie,{...e,children:t.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})}),x:e=>t.jsx(ie,{...e,children:t.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),search:e=>t.jsxs(ie,{...e,children:[t.jsx("circle",{cx:"11",cy:"11",r:"7"}),t.jsx("path",{d:"m20 20-3.5-3.5"})]}),arrow:e=>t.jsx(ie,{...e,children:t.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),phone:e=>t.jsx(ie,{...e,children:t.jsx("path",{d:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"})}),whatsapp:e=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",...e,children:t.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"})}),trash:e=>t.jsx(ie,{...e,children:t.jsx("path",{d:"M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"})}),edit:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"}),t.jsx("path",{d:"m14 6 4 4"})]}),star:e=>t.jsx(ie,{...e,children:t.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"})}),trend:e=>t.jsxs(ie,{...e,children:[t.jsx("path",{d:"m3 17 6-6 4 4 8-8"}),t.jsx("path",{d:"M15 7h6v6"})]})},ab=(e="")=>{let n=0;return e.length>=8&&n++,e.length>=12&&n++,/[a-z]/.test(e)&&/[A-Z]/.test(e)&&n++,/\d/.test(e)&&/[^a-z0-9]/i.test(e)&&n++,n},zo=[{label:"Too weak",color:"#ef4444"},{label:"Weak",color:"#f97316"},{label:"Fair",color:"#eab308"},{label:"Good",color:"#84cc16"},{label:"Strong",color:"#22c55e"}];function Tf({value:e}){if(!e)return null;const n=ab(e);return t.jsxs("div",{style:{display:"grid",gap:6},children:[t.jsx("div",{className:"hwa-strength",children:t.jsx("i",{style:{width:`${(n+1)*20}%`,background:zo[n].color}})}),t.jsxs("span",{className:"hwa-hint",children:["Strength: ",t.jsx("strong",{style:{color:zo[n].color},children:zo[n].label})]})]})}function Or({value:e,onChange:n,placeholder:r="••••••••",autoComplete:i="current-password",invalid:s,id:a,autoFocus:o}){const[l,c]=v.useState(!1);return t.jsxs("div",{className:"hwa-input-wrap",children:[t.jsx(z.lock,{}),t.jsx("input",{id:a,className:`hwa-input${s?" invalid":""}`,type:l?"text":"password",value:e,onChange:h=>n(h.target.value),placeholder:r,autoComplete:i,autoFocus:o,required:!0}),t.jsx("button",{type:"button",className:"hwa-eye",onClick:()=>c(!l),"aria-label":l?"Hide password":"Show password",children:l?t.jsx(z.eyeOff,{}):t.jsx(z.eye,{})})]})}const hs=()=>t.jsx("span",{className:"hwa-spinner","aria-hidden":"true"}),Vt=({type:e="error",children:n})=>t.jsxs("div",{className:`hwa-alert ${e}`,role:e==="error"?"alert":"status",children:[e==="success"?t.jsx(z.check,{}):e==="info"?t.jsx(z.clock,{}):t.jsx(z.alert,{}),t.jsx("span",{children:n})]}),ob={expired:"Your session expired after 24 hours. Please sign in again.",signedout:"You have been signed out. Please sign in again.",loggedout:"You have signed out successfully."};function lb(){const[e,n]=v.useState({email:"",password:""}),[r,i]=v.useState(""),[s,a]=v.useState(!1),[o]=ed(),l=tn();if(v.useEffect(()=>{Sa()||Ri()},[]),Sa())return t.jsx(Hr,{to:"/admin/dashboard",replace:!0});const c=ob[o.get("session")],h=async d=>{var p,g;d.preventDefault();const u=e.email.trim().toLowerCase();if(!u||!e.password){i("Enter your email and password");return}if(!bf.test(u)){i("Enter a valid email address");return}a(!0),i("");try{const b=await H.post("/admin/login",{email:u,password:e.password});vf(b.data.token,b.data.admin),l("/admin/dashboard",{replace:!0})}catch(b){i(((g=(p=b.response)==null?void 0:p.data)==null?void 0:g.error)||(b.code==="ECONNABORTED"?"The server took too long to respond. Please try again.":"Could not reach the server. Check your connection and try again.")),n(k=>({...k,password:""}))}finally{a(!1)}};return t.jsxs("div",{className:"hwa hwa-login",children:[t.jsxs("aside",{className:"hwa-login-visual",children:[t.jsx("img",{src:$r,alt:"HomWisor",className:"hwa-login-logo"}),t.jsxs("div",{className:"hwa-login-copy",children:[t.jsx("span",{className:"hwa-eyebrow",children:"Admin Console"}),t.jsxs("h1",{children:["Manage every listing, lead & ",t.jsx("span",{children:"launch"})," in one place."]}),t.jsx("p",{children:"Update properties, banners, offers and snaps — changes go live on HomWisor.com instantly."}),t.jsxs("div",{className:"hwa-login-points",children:[t.jsxs("div",{children:[t.jsx(z.shield,{})," Secure JWT sessions"]}),t.jsxs("div",{children:[t.jsx(z.clock,{})," Auto sign-out after 24h"]}),t.jsxs("div",{children:[t.jsx(z.users,{})," Role-based access"]})]})]})]}),t.jsx("main",{className:"hwa-login-panel",children:t.jsxs("div",{className:"hwa-login-card",children:[t.jsx("img",{src:$r,alt:"HomWisor",className:"hwa-login-mobile-logo"}),t.jsx("h2",{children:"Welcome back"}),t.jsx("p",{className:"hwa-sub",children:"Sign in to the HomWisor admin panel"}),c&&!r&&t.jsx(Vt,{type:o.get("session")==="loggedout"?"success":"info",children:c}),r&&t.jsx(Vt,{children:r}),t.jsxs("form",{onSubmit:h,noValidate:!0,children:[t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{htmlFor:"hwa-email",children:"Email address"}),t.jsxs("div",{className:"hwa-input-wrap",children:[t.jsx(z.mail,{}),t.jsx("input",{id:"hwa-email",type:"email",inputMode:"email",className:"hwa-input",value:e.email,onChange:d=>n({...e,email:d.target.value}),placeholder:"you@homwisor.com",autoComplete:"username",autoCapitalize:"none",spellCheck:!1,autoFocus:!0})]})]}),t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{htmlFor:"hwa-password",children:"Password"}),t.jsx(Or,{id:"hwa-password",value:e.password,onChange:d=>n({...e,password:d}),placeholder:"Enter your password"})]}),t.jsx("button",{type:"submit",className:"hwa-btn hwa-btn-gold",disabled:s,style:{marginTop:8},children:s?t.jsxs(t.Fragment,{children:[t.jsx(hs,{})," Signing in…"]}):"Sign In"})]}),t.jsxs("div",{className:"hwa-login-foot",children:[t.jsx(V,{to:"/",children:"← Back to website"}),t.jsxs("span",{className:"hwa-secure",children:[t.jsx(z.shield,{})," Authorised staff only"]})]})]})})]})}const Zs=(e,n)=>{var r,i;return((i=(r=e.response)==null?void 0:r.data)==null?void 0:i.error)||n},cb=e=>e?new Date(e).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Never";function Of({admin:e,onChanged:n,submitLabel:r="Update Password"}){const[i,s]=v.useState({current:"",next:"",confirm:""}),[a,o]=v.useState(""),[l,c]=v.useState(""),[h,d]=v.useState(!1),u=i.next?jf(i.next,e==null?void 0:e.email):null,p=i.confirm&&i.confirm!==i.next,g=async b=>{if(b.preventDefault(),o(""),c(""),u)return o(u);if(i.next!==i.confirm)return o("New passwords do not match");d(!0);try{const k=await H.put("/admin/me/password",{currentPassword:i.current,newPassword:i.next});vf(k.data.token,k.data.admin),s({current:"",next:"",confirm:""}),c("Password updated. Other sessions have been signed out."),n==null||n(k.data.admin)}catch(k){o(Zs(k,"Could not update password"))}finally{d(!1)}};return t.jsxs("form",{onSubmit:g,noValidate:!0,children:[a&&t.jsx(Vt,{children:a}),l&&t.jsx(Vt,{type:"success",children:l}),t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{children:"Current password"}),t.jsx(Or,{value:i.current,onChange:b=>s({...i,current:b}),autoComplete:"current-password",placeholder:"Your current password"})]}),t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{children:"New password"}),t.jsx(Or,{value:i.next,onChange:b=>s({...i,next:b}),autoComplete:"new-password",placeholder:"8+ characters, letters & numbers",invalid:!!u}),u?t.jsx("span",{className:"hwa-hint bad",children:u}):t.jsx(Tf,{value:i.next})]}),t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{children:"Confirm new password"}),t.jsx(Or,{value:i.confirm,onChange:b=>s({...i,confirm:b}),autoComplete:"new-password",placeholder:"Repeat new password",invalid:p}),p&&t.jsx("span",{className:"hwa-hint bad",children:"Passwords do not match"})]}),t.jsx("button",{className:"hwa-btn hwa-btn-gold",disabled:h||!i.current||!i.next||!i.confirm,children:h?t.jsxs(t.Fragment,{children:[t.jsx(hs,{})," Saving…"]}):r})]})}const pu={name:"",email:"",password:"",confirm:"",role:"admin"};function db({me:e,onMeChange:n}){const r=(e==null?void 0:e.role)==="superadmin",[i,s]=v.useState([]),[a,o]=v.useState(r),[l,c]=v.useState(""),[h,d]=v.useState(pu),[u,p]=v.useState(""),[g,b]=v.useState(""),[k,P]=v.useState(!1),[f,m]=v.useState(null),x=async()=>{if(r)try{const M=await H.get("/admin/users");s(M.data),c("")}catch(M){c(Zs(M,"Could not load admins"))}finally{o(!1)}};v.useEffect(()=>{x()},[r]);const N=h.email.trim().toLowerCase(),w=N&&!bf.test(N),T=h.password?jf(h.password,N):null,y=h.confirm&&h.confirm!==h.password,j=async M=>{if(M.preventDefault(),p(""),b(""),h.name.trim().length<2)return p("Enter the admin’s full name");if(!N||w)return p("Enter a valid email address");if(T)return p(T);if(h.password!==h.confirm)return p("Passwords do not match");P(!0);try{const q=await H.post("/admin/users",{name:h.name.trim(),email:N,password:h.password,role:h.role});b(`Admin ${q.data.email} created. They can now sign in with this email — share the password securely.`),d(pu),x()}catch(q){p(Zs(q,"Could not create admin"))}finally{P(!1)}},L=async(M,q,Q)=>{if(!(Q&&!window.confirm(Q))){m(M.id);try{await q(),await x()}catch(_){alert(Zs(_,"Action failed"))}finally{m(null)}}},S=M=>L(M,()=>H.patch(`/admin/users/${M.id}`,{active:!M.active}),M.active?`Disable ${M.email}? They will be signed out immediately.`:null),O=M=>L(M,()=>H.patch(`/admin/users/${M.id}`,{role:M.role==="superadmin"?"admin":"superadmin"}),M.role==="superadmin"?`Remove super admin rights from ${M.email}?`:`Make ${M.email} a super admin? They will be able to manage all admins.`),F=M=>L(M,()=>H.delete(`/admin/users/${M.id}`),`Permanently delete admin ${M.email}? This cannot be undone.`);return t.jsxs("div",{className:"hwa hwa-section hwa-light",children:[t.jsx("div",{className:"hwa-section-head",children:t.jsxs("div",{children:[t.jsx("h2",{children:r?"Admins & Security":"My Account"}),t.jsx("p",{children:r?"Create admin accounts, control access and keep your own password up to date.":"Update your password. Sessions expire automatically after 24 hours."})]})}),t.jsxs("div",{className:"hwa-grid-2",children:[r?t.jsxs("div",{style:{display:"grid",gap:16},children:[t.jsxs("div",{className:"hwa-card",children:[t.jsxs("div",{className:"hwa-card-title",children:[t.jsx("span",{className:"dot",children:t.jsx(z.plus,{})})," Create new admin"]}),u&&t.jsx(Vt,{children:u}),g&&t.jsx(Vt,{type:"success",children:g}),t.jsxs("form",{onSubmit:j,noValidate:!0,children:[t.jsxs("div",{className:"hwa-row-2",children:[t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{children:"Full name"}),t.jsxs("div",{className:"hwa-input-wrap",children:[t.jsx(z.user,{}),t.jsx("input",{className:"hwa-input",value:h.name,onChange:M=>d({...h,name:M.target.value}),placeholder:"e.g. Vishal Dixit",autoComplete:"off"})]})]}),t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{children:"Email (used to sign in)"}),t.jsxs("div",{className:"hwa-input-wrap",children:[t.jsx(z.mail,{}),t.jsx("input",{className:`hwa-input${w?" invalid":""}`,type:"email",value:h.email,onChange:M=>d({...h,email:M.target.value}),placeholder:"name@homwisor.com",autoComplete:"off",autoCapitalize:"none",spellCheck:!1})]}),w&&t.jsx("span",{className:"hwa-hint bad",children:"Enter a valid email address"})]})]}),t.jsxs("div",{className:"hwa-row-2",children:[t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{children:"Password"}),t.jsx(Or,{value:h.password,onChange:M=>d({...h,password:M}),autoComplete:"new-password",placeholder:"8+ chars, letters & numbers",invalid:!!T}),T?t.jsx("span",{className:"hwa-hint bad",children:T}):t.jsx(Tf,{value:h.password})]}),t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{children:"Confirm password"}),t.jsx(Or,{value:h.confirm,onChange:M=>d({...h,confirm:M}),autoComplete:"new-password",placeholder:"Repeat password",invalid:y}),y&&t.jsx("span",{className:"hwa-hint bad",children:"Passwords do not match"})]})]}),t.jsxs("div",{className:"hwa-field",children:[t.jsx("label",{children:"Role"}),t.jsxs("div",{className:"hwa-role-toggle",children:[t.jsxs("button",{type:"button",className:h.role==="admin"?"active":"",onClick:()=>d({...h,role:"admin"}),children:[t.jsx("strong",{children:"Admin"}),t.jsx("span",{children:"Manage website content"})]}),t.jsxs("button",{type:"button",className:h.role==="superadmin"?"active":"",onClick:()=>d({...h,role:"superadmin"}),children:[t.jsx("strong",{children:"Super Admin"}),t.jsx("span",{children:"Content + manage admins"})]})]})]}),t.jsx("button",{className:"hwa-btn hwa-btn-gold",disabled:k,children:k?t.jsxs(t.Fragment,{children:[t.jsx(hs,{})," Creating…"]}):"Create Admin"})]})]}),t.jsxs("div",{className:"hwa-card",children:[t.jsxs("div",{className:"hwa-card-title",children:[t.jsx("span",{className:"dot",children:t.jsx(z.users,{})})," All admins ",t.jsxs("span",{style:{fontWeight:500,color:"#9ca3af",fontSize:13},children:["(",i.length,")"]})]}),l&&t.jsx(Vt,{children:l}),a?t.jsx("div",{className:"hwa-hint",children:"Loading…"}):t.jsx("div",{className:"hwa-admin-list",children:i.map(M=>{const q=M.id===(e==null?void 0:e.id);return t.jsxs("div",{className:`hwa-admin-row${M.active?"":" inactive"}`,children:[t.jsx("div",{className:"hwa-avatar",children:(M.name||M.email).slice(0,1).toUpperCase()}),t.jsxs("div",{className:"hwa-admin-meta",children:[t.jsxs("div",{className:"name",children:[M.name,t.jsx("span",{className:`hwa-badge ${M.role==="superadmin"?"super":"admin"}`,children:M.role==="superadmin"?"Super Admin":"Admin"}),q&&t.jsx("span",{className:"hwa-badge you",children:"You"}),!M.active&&t.jsx("span",{className:"hwa-badge off",children:"Disabled"})]}),t.jsxs("div",{className:"sub",children:[M.email," · Last login: ",cb(M.lastLoginAt)]})]}),!q&&t.jsxs("div",{className:"hwa-row-actions",children:[t.jsx("button",{className:"hwa-mini",disabled:f===M.id,onClick:()=>O(M),children:M.role==="superadmin"?"Make Admin":"Make Super"}),t.jsx("button",{className:"hwa-mini",disabled:f===M.id,onClick:()=>S(M),children:M.active?"Disable":"Enable"}),t.jsx("button",{className:"hwa-mini danger",disabled:f===M.id,onClick:()=>F(M),children:"Delete"})]})]},M.id)})})]})]}):t.jsxs("div",{className:"hwa-card",children:[t.jsxs("div",{className:"hwa-card-title",children:[t.jsx("span",{className:"dot",children:t.jsx(z.user,{})})," Profile"]}),t.jsxs("div",{className:"hwa-admin-row",children:[t.jsx("div",{className:"hwa-avatar",children:((e==null?void 0:e.name)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase()}),t.jsxs("div",{className:"hwa-admin-meta",children:[t.jsxs("div",{className:"name",children:[e==null?void 0:e.name," ",t.jsx("span",{className:"hwa-badge admin",children:"Admin"})]}),t.jsx("div",{className:"sub",children:e==null?void 0:e.email})]})]}),t.jsx("p",{className:"hwa-hint",style:{marginTop:12},children:"Only a super admin can create or manage admin accounts."})]}),t.jsxs("div",{className:"hwa-card",children:[t.jsxs("div",{className:"hwa-card-title",children:[t.jsx("span",{className:"dot",children:t.jsx(z.key,{})})," Change my password"]}),t.jsx(Of,{admin:e,onChanged:n}),t.jsxs("p",{className:"hwa-hint",style:{marginTop:12,display:"flex",gap:6,alignItems:"center"},children:[t.jsx(z.clock,{style:{width:14,height:14}})," Sessions expire automatically 24 hours after sign-in."]})]})]})]})}const Lf={hero:{label:"Hero banner",minW:1400,minH:450,ratio:[2.2,4],ideal:"2100 × 700 px (wide, 3:1)"},slider:{label:"Image slider",minW:1200,minH:200,ratio:[4.5,7.5],ideal:"1700 × 300 px (very wide strip)"},sidead:{label:"Side ad",minW:300,minH:650,ratio:[.3,.6],ideal:"720 × 1600 px (tall, 9:20)"},property:{label:"Property photo",minW:800,minH:450,ratio:[1.2,2.2],ideal:"1600 × 1000 px (landscape)"},logo:{label:"Logo",minW:120,minH:40,ratio:[.8,6],ideal:"400 × 160 px"},snap:{label:"Snap thumbnail",minW:400,minH:600,ratio:[.45,.9],ideal:"800 × 1000 px (portrait)"},location:{label:"Location image",minW:500,minH:350,ratio:[.6,2],ideal:"1000 × 750 px"},recommended:{label:"Recommended card",minW:500,minH:450,ratio:[.7,1.6],ideal:"1000 × 1000 px (square-ish)"},blog:{label:"Blog image",minW:800,minH:400,ratio:[1.2,2.4],ideal:"1600 × 900 px (landscape)"},avatar:{label:"Customer photo",minW:120,minH:120,ratio:[.7,1.4],ideal:"400 × 400 px (square)"},offer:{label:"Offer image",minW:600,minH:350,ratio:[1.1,2.2],ideal:"1200 × 800 px (landscape)"}},hb=e=>e<.9?"portrait (tall)":e>1.15?"landscape (wide)":"square",dd=(e,n,r)=>{const i=Lf[e];if(!i)return null;if(!n||!r)return"Could not read the image size";const s=n/r,a=`${n} × ${r} px`;return s<i.ratio[0]||s>i.ratio[1]?`${i.label} has the wrong shape: your image is ${a} (${hb(s)}). Use about ${i.ideal}.`:n<i.minW||r<i.minH?`${i.label} is too small: your image is ${a}. Use at least ${i.minW} × ${i.minH} px — ideally ${i.ideal}.`:null},Xl=20,Mf="image/jpeg,image/png,image/webp,image/avif,image/gif";async function ub(e,{maxSide:n=1920,keepPng:r=!1,quality:i=.82}={}){if(e.type==="image/gif")return e;try{const s=await createImageBitmap(e),a=Math.min(1,n/Math.max(s.width,s.height)),o=Math.round(s.width*a),l=Math.round(s.height*a),c=document.createElement("canvas");c.width=o,c.height=l,c.getContext("2d").drawImage(s,0,0,o,l);const h=r?"image/png":"image/webp",d=await new Promise(p=>c.toBlob(p,h,i));if(!d||a===1&&d.size>=e.size)return e;const u=e.name.replace(/\.[^.]+$/,"")+(r?".png":".webp");return new File([d],u,{type:h})}catch{return e}}const pb=async e=>{const n=await createImageBitmap(e);return{width:n.width,height:n.height}},zf=e=>new Promise((n,r)=>{const i=new Image;i.onload=()=>n({width:i.naturalWidth,height:i.naturalHeight}),i.onerror=()=>r(new Error("This link does not open as an image")),i.src=e});async function If(e,{purpose:n,maxSide:r,keepPng:i,onProgress:s}={}){if(!e.type.startsWith("image/"))throw new Error("Please choose an image file (JPG, PNG or WebP)");if(e.size>Xl*1024*1024)throw new Error(`Image is larger than ${Xl} MB`);let a=null;try{a=await pb(e)}catch{}if(a){const h=dd(n,a.width,a.height);if(h)throw new Error(h)}const o=await ub(e,{maxSide:r,keepPng:i}),l=new FormData;return l.append("purpose",n||""),l.append("file",o),(await H.post("/images",l,{onUploadProgress:h=>s==null?void 0:s(h.total?h.loaded/h.total:0)})).data.url}const ts=e=>{var n,r;return((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.error)||(e==null?void 0:e.message)||"Upload failed"};function hd(){return t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"3"}),t.jsx("circle",{cx:"9",cy:"10",r:"2"}),t.jsx("path",{d:"m21 16-5-5-9 9"}),t.jsx("path",{d:"M17 3v6M14 6l3-3 3 3"})]})}function St({value:e,onChange:n,purpose:r,aspect:i="3 / 2",hint:s,kind:a="photo",fit:o="cover",maxSide:l}){const c=v.useRef(null),[h,d]=v.useState(!1),[u,p]=v.useState(0),[g,b]=v.useState(""),[k,P]=v.useState(""),[f,m]=v.useState(!1),[x,N]=v.useState(!1),[w,T]=v.useState(""),[y,j]=v.useState(!1),L=a==="logo",S=()=>{var _;return(_=c.current)==null?void 0:_.click()},O=async _=>{if(!_)return;P(""),d(!0),p(0),j(!1);const J=URL.createObjectURL(_);b(J);try{const D=await If(_,{purpose:r,maxSide:l||(L?600:1920),keepPng:L&&_.type==="image/png",onProgress:p});n(D)}catch(D){P(ts(D))}finally{d(!1),b(""),URL.revokeObjectURL(J)}},F=_=>{var J;_.preventDefault(),m(!1),O((J=_.dataTransfer.files)==null?void 0:J[0])},M=async()=>{const _=w.trim();if(_){P("");try{const J=await zf(_),D=dd(r,J.width,J.height);if(D)return P(D);n(_),j(!1),N(!1),T("")}catch(J){P(ts(J))}}},q=Lf[r],Q=g||e;return t.jsxs("div",{className:`hwu${L?" logo":""}`,children:[t.jsx("input",{ref:c,type:"file",accept:Mf,hidden:!0,onChange:_=>{var J;O((J=_.target.files)==null?void 0:J[0]),_.target.value=""}}),Q?t.jsxs("div",{className:`hwu-frame${y?" broken":""}`,style:{aspectRatio:i},children:[t.jsx("img",{src:Q,alt:"",style:{objectFit:o},onError:()=>!g&&j(!0),onLoad:()=>j(!1)}),y&&t.jsx("div",{className:"hwu-broken",children:"⚠️ This image can’t be shown. Upload it again."}),h&&t.jsxs("div",{className:"hwu-busy",children:[t.jsx("span",{className:"hwu-spin"}),t.jsxs("span",{children:["Uploading… ",Math.round(u*100),"%"]}),t.jsx("i",{style:{width:`${Math.max(6,u*100)}%`}})]}),!h&&t.jsxs("div",{className:"hwu-actions",children:[t.jsx("button",{type:"button",onClick:S,children:"Replace"}),t.jsx("button",{type:"button",onClick:()=>n(""),children:"Remove"})]})]}):t.jsxs("button",{type:"button",className:`hwu-drop${f?" drag":""}`,style:{aspectRatio:i},onClick:S,onDragOver:_=>{_.preventDefault(),m(!0)},onDragLeave:()=>m(!1),onDrop:F,children:[t.jsx(hd,{}),t.jsx("strong",{children:f?"Drop to upload":"Click to upload or drag & drop"}),t.jsxs("span",{children:["JPG, PNG or WebP · up to ",Xl," MB"]})]}),k&&t.jsx("div",{className:"hwu-err",children:k}),t.jsxs("div",{className:"hwu-foot",children:[(s||q)&&t.jsxs("span",{children:[s||`Use about ${q.ideal}`,q&&t.jsxs(t.Fragment,{children:[" · ",t.jsxs("b",{children:["min ",q.minW," × ",q.minH]})]})]}),x?t.jsxs("span",{className:"hwu-link",children:[t.jsx("input",{value:w,onChange:_=>T(_.target.value),placeholder:"https://…",onKeyDown:_=>_.key==="Enter"&&(_.preventDefault(),M()),autoFocus:!0}),t.jsx("button",{type:"button",onClick:M,children:"Use"}),t.jsx("button",{type:"button",onClick:()=>{N(!1),T("")},children:"✕"})]}):t.jsx("button",{type:"button",className:"hwu-linkbtn",onClick:()=>N(!0),children:"or paste an image link"})]})]})}function mb({value:e=[],onChange:n,onMakeCover:r,max:i=20,purpose:s="property",captions:a,onCaptionsChange:o}){const l=v.useRef(null),[c,h]=v.useState([]),[d,u]=v.useState(""),[p,g]=v.useState(!1),[b,k]=v.useState(""),P=e.filter(Boolean),f=i-P.length-c.length,m=async j=>{const L=[...j||[]].filter(F=>F.type.startsWith("image/")).slice(0,Math.max(0,f));if(!L.length)return;u("");const S=L.map((F,M)=>({id:`${Date.now()}-${M}`,file:F,preview:URL.createObjectURL(F),progress:0}));h(F=>[...F,...S]);const O=[];for(const F of S)try{const M=await If(F.file,{purpose:s,onProgress:q=>h(Q=>Q.map(_=>_.id===F.id?{..._,progress:q}:_))});O.push(M)}catch(M){u(`${F.file.name}: ${ts(M)}`)}finally{URL.revokeObjectURL(F.preview),h(M=>M.filter(q=>q.id!==F.id))}O.length&&(n([...P,...O]),o&&o([...x(P.length),...O.map(()=>"")]))},x=j=>Array.from({length:j},(L,S)=>(a==null?void 0:a[S])||""),N=j=>{n(P.filter((L,S)=>S!==j)),o&&o(x(P.length).filter((L,S)=>S!==j))},w=(j,L)=>{const S=j+L;if(S<0||S>=P.length)return;const O=[...P];if([O[j],O[S]]=[O[S],O[j]],n(O),o){const F=x(P.length);[F[j],F[S]]=[F[S],F[j]],o(F)}},T=(j,L)=>{const S=x(P.length);S[j]=L,o(S)},y=async()=>{const j=b.trim();if(j){u("");try{const L=await zf(j),S=dd(s,L.width,L.height);if(S)return u(S);n([...P,j]),k(""),o&&o([...x(P.length),""])}catch(L){u(ts(L))}}};return t.jsxs("div",{className:"hwu-gallery",children:[t.jsx("input",{ref:l,type:"file",accept:Mf,multiple:!0,hidden:!0,onChange:j=>{m(j.target.files),j.target.value=""}}),t.jsxs("div",{className:"hwu-grid",children:[P.map((j,L)=>t.jsxs("div",{className:o?"hwu-tile-wrap":void 0,style:o?void 0:{display:"contents"},children:[t.jsxs("div",{className:"hwu-tile",children:[t.jsx("img",{src:j,alt:"",loading:"lazy"}),t.jsx("span",{className:"hwu-no",children:L+1}),t.jsxs("div",{className:"hwu-tile-actions",children:[L>0&&t.jsx("button",{type:"button",title:"Move left",onClick:()=>w(L,-1),children:"‹"}),L<P.length-1&&t.jsx("button",{type:"button",title:"Move right",onClick:()=>w(L,1),children:"›"}),r&&t.jsx("button",{type:"button",title:"Use as main photo",onClick:()=>r(j),children:"★"}),t.jsx("button",{type:"button",title:"Remove",onClick:()=>N(L),children:"✕"})]})]}),o&&t.jsx("input",{className:"hwu-caption",value:(a==null?void 0:a[L])||"",onChange:S=>T(L,S.target.value),placeholder:"Caption (optional)",maxLength:60})]},j+L)),c.map(j=>t.jsxs("div",{className:"hwu-tile uploading",children:[t.jsx("img",{src:j.preview,alt:""}),t.jsxs("div",{className:"hwu-busy",children:[t.jsx("span",{className:"hwu-spin"}),t.jsxs("span",{children:[Math.round(j.progress*100),"%"]}),t.jsx("i",{style:{width:`${Math.max(6,j.progress*100)}%`}})]})]},j.id)),f>0&&t.jsxs("button",{type:"button",className:`hwu-tile hwu-add${p?" drag":""}`,onClick:()=>{var j;return(j=l.current)==null?void 0:j.click()},onDragOver:j=>{j.preventDefault(),g(!0)},onDragLeave:()=>g(!1),onDrop:j=>{j.preventDefault(),g(!1),m(j.dataTransfer.files)},children:[t.jsx(hd,{}),t.jsx("strong",{children:"Add photos"}),t.jsx("span",{children:"Select several at once"})]})]}),d&&t.jsx("div",{className:"hwu-err",children:d}),t.jsxs("div",{className:"hwu-foot",children:[t.jsxs("span",{children:[P.length," photo",P.length===1?"":"s"," · use ‹ › to reorder",r?", ★ to make it the main photo":""]}),t.jsxs("span",{className:"hwu-link",children:[t.jsx("input",{value:b,onChange:j=>k(j.target.value),placeholder:"or paste an image link",onKeyDown:j=>j.key==="Enter"&&(j.preventDefault(),y())}),t.jsx("button",{type:"button",onClick:y,children:"Add"})]})]})]})}const Io=25;function fb({value:e,onChange:n,label:r="brochure"}){const i=v.useRef(null),[s,a]=v.useState(!1),[o,l]=v.useState(0),[c,h]=v.useState(""),[d,u]=v.useState(""),[p,g]=v.useState(!1),b=async k=>{if(k){if(h(""),k.type!=="application/pdf"&&!/\.pdf$/i.test(k.name))return h("Please choose a PDF file");if(k.size>Io*1024*1024)return h(`PDF is larger than ${Io} MB — please compress it first`);a(!0),l(0);try{const P=new FormData;P.append("file",k);const f=await H.post("/files",P,{onUploadProgress:m=>l(m.total?m.loaded/m.total:0)});u(k.name),n(f.data.url)}catch(P){h(ts(P))}finally{a(!1),i.current&&(i.current.value="")}}};return t.jsxs("div",{className:"hwu",children:[t.jsx("input",{ref:i,type:"file",accept:"application/pdf,.pdf",hidden:!0,onChange:k=>{var P;return b((P=k.target.files)==null?void 0:P[0])}}),e?t.jsxs("div",{className:"hwu-file",children:[t.jsx("span",{className:"hwu-file-ic",children:"PDF"}),t.jsxs("span",{className:"hwu-file-name",children:[t.jsx("strong",{children:d||"Brochure uploaded"}),t.jsx("a",{href:e,target:"_blank",rel:"noreferrer",children:"Open to check ↗"})]}),t.jsx("button",{type:"button",className:"hwu-linkbtn",onClick:()=>{var k;return(k=i.current)==null?void 0:k.click()},disabled:s,children:s?`Uploading ${Math.round(o*100)}%`:"Replace"}),t.jsx("button",{type:"button",className:"hwu-linkbtn danger",onClick:()=>{n(""),u("")},disabled:s,children:"Remove"})]}):t.jsxs("button",{type:"button",className:`hwu-drop${p?" drag":""}`,style:{minHeight:110},onClick:()=>{var k;return(k=i.current)==null?void 0:k.click()},onDragOver:k=>{k.preventDefault(),g(!0)},onDragLeave:()=>g(!1),onDrop:k=>{var P;k.preventDefault(),g(!1),b((P=k.dataTransfer.files)==null?void 0:P[0])},disabled:s,children:[s?t.jsx("span",{className:"hwu-spin",style:{borderColor:"#eadfb9",borderTopColor:"#D4AF37"}}):t.jsx(hd,{}),t.jsx("strong",{children:s?`Uploading… ${Math.round(o*100)}%`:`Upload ${r} PDF`}),t.jsxs("span",{children:["Click or drop a PDF here · max ",Io," MB"]})]}),c&&t.jsx("div",{className:"hwu-err",children:c})]})}const gb=(e,n)=>{try{return localStorage.getItem(`hwl-view-${e}`)||n}catch{return n}},xb=(e,n)=>{try{localStorage.setItem(`hwl-view-${e}`,n)}catch{}};function Tn({id:e,items:n,main:r,columns:i=[],badges:s,actions:a,searchText:o,sorts:l=[],empty:c="Nothing here yet.",onEmptyAdd:h,emptyAddLabel:d="Add the first one",defaultView:u="table",toolbarExtra:p,loading:g}){var L;const[b,k]=v.useState(""),[P,f]=v.useState(((L=l[0])==null?void 0:L.value)||""),[m,x]=v.useState(()=>gb(e,u));v.useEffect(()=>xb(e,m),[e,m]);const N=v.useMemo(()=>{const S=b.trim().toLowerCase().split(/\s+/).filter(Boolean);let O=S.length?n.filter(M=>{const q=String(o?o(M):r.title(M)).toLowerCase();return S.every(Q=>q.includes(Q))}):n;const F=l.find(M=>M.value===P);return F!=null&&F.fn&&(O=[...O].sort(F.fn)),O},[n,b,P,l,o,r]),w=v.useMemo(()=>{const S=O=>O.filter(Boolean).reduce((F,M,q)=>F+(q?6:0)+(M.danger?32:Math.ceil(String(M.label).length*7.4)+42),0);return Math.max(80,...N.map(O=>S((a==null?void 0:a(O))||[])))},[N,a]),T=({it:S,big:O})=>{var M,q;const F=(M=r.thumb)==null?void 0:M.call(r,S);return t.jsxs("span",{className:`hwl-thumb ${r.aspect||"wide"}${O?" big":""}`,children:[F?t.jsx("img",{src:F,alt:"",loading:"lazy",onError:Q=>Q.currentTarget.style.visibility="hidden"}):t.jsx(z.image,{}),(q=r.overlay)==null?void 0:q.call(r,S)]})},y=({it:S})=>{var F;const O=((F=s==null?void 0:s(S))==null?void 0:F.filter(Boolean))||[];return O.length?t.jsx("span",{className:"hwl-badges",children:O.map((M,q)=>t.jsx("span",{className:`hwl-badge ${M.tone||"grey"}`,children:M.text},q))}):null},j=({it:S})=>t.jsx("span",{className:"hwl-actions",children:((a==null?void 0:a(S))||[]).filter(Boolean).map(O=>{const F=O.icon,M=`hwl-act${O.danger?" danger":""}${O.primary?" primary":""}`;return O.href?t.jsxs("a",{className:M,href:O.href,target:"_blank",rel:"noreferrer",title:O.label,children:[F&&t.jsx(F,{}),t.jsx("span",{children:O.label})]},O.label):t.jsxs("button",{type:"button",className:M,onClick:()=>O.onClick(S),title:O.label,children:[F&&t.jsx(F,{}),t.jsx("span",{children:O.label})]},O.label)})});return t.jsxs("div",{className:"hwl",children:[t.jsxs("div",{className:"hwl-toolbar",children:[t.jsxs("div",{className:"hwl-search",children:[t.jsx(z.search,{}),t.jsx("input",{value:b,onChange:S=>k(S.target.value),placeholder:"Search…"}),b&&t.jsx("button",{type:"button",onClick:()=>k(""),"aria-label":"Clear search",children:"✕"})]}),p,l.length>1&&t.jsx("select",{className:"hwl-sort",value:P,onChange:S=>f(S.target.value),"aria-label":"Sort",children:l.map(S=>t.jsx("option",{value:S.value,children:S.label},S.value))}),t.jsxs("span",{className:"hwl-count",children:[N.length," of ",n.length]}),t.jsxs("div",{className:"hwl-views",role:"group","aria-label":"View",children:[t.jsx("button",{type:"button",className:m==="table"?"on":"",onClick:()=>x("table"),title:"Table view",children:t.jsx(z.menu,{})}),t.jsx("button",{type:"button",className:m==="grid"?"on":"",onClick:()=>x("grid"),title:"Grid view",children:t.jsx(z.grid,{})})]})]}),g?t.jsxs("div",{className:"hwl-empty",children:[t.jsx("span",{className:"hwa-spinner",style:{borderTopColor:"#9A7418"}})," Loading…"]}):N.length===0?t.jsxs("div",{className:"hwl-empty",children:[t.jsx(z.grid,{}),t.jsx("p",{children:n.length?"Nothing matches your search.":c}),!n.length&&h&&t.jsxs("button",{type:"button",className:"hwd-btn gold",onClick:h,children:[t.jsx(z.plus,{})," ",d]})]}):m==="table"?t.jsxs("div",{className:"hwl-table",role:"table",style:{"--hwl-cols":i.length,"--hwl-cols-sm":i.filter(S=>!S.hideSm).length,"--hwl-actw":`${w}px`},children:[t.jsxs("div",{className:"hwl-row head",role:"row",children:[t.jsx("span",{className:"hwl-cell main",role:"columnheader",children:"Name"}),i.map(S=>t.jsx("span",{className:`hwl-cell ${S.className||""}${S.hideSm?" hide-sm":""}`,role:"columnheader",children:S.label},S.label)),t.jsx("span",{className:"hwl-cell act",role:"columnheader",children:"Actions"})]}),N.map(S=>t.jsxs("div",{className:"hwl-row",role:"row",children:[t.jsxs("span",{className:"hwl-cell main",role:"cell",children:[t.jsx(T,{it:S}),t.jsxs("span",{className:"hwl-main-text",children:[t.jsx("strong",{title:r.title(S),children:r.title(S)}),r.sub&&t.jsx("span",{className:"hwl-sub",children:r.sub(S)}),t.jsx(y,{it:S})]})]}),i.map(O=>t.jsx("span",{className:`hwl-cell ${O.className||""}${O.hideSm?" hide-sm":""}`,role:"cell","data-label":O.label,children:O.render(S)},O.label)),t.jsx("span",{className:"hwl-cell act",role:"cell",children:t.jsx(j,{it:S})})]},S.id||S._id))]}):t.jsx("div",{className:`hwl-grid ${r.aspect||"wide"}`,children:N.map(S=>t.jsxs("div",{className:"hwl-card",children:[t.jsx(T,{it:S,big:!0}),t.jsxs("div",{className:"hwl-card-body",children:[t.jsx(y,{it:S}),t.jsx("strong",{title:r.title(S),children:r.title(S)}),r.sub&&t.jsx("span",{className:"hwl-sub",children:r.sub(S)}),t.jsx("span",{className:"hwl-card-meta",children:i.filter(O=>!O.hideGrid).slice(0,3).map(O=>t.jsxs("span",{children:[t.jsx("em",{children:O.label}),O.render(S)]},O.label))}),t.jsx(j,{it:S})]})]},S.id||S._id))})]})}function ar({open:e,title:n,sub:r,onClose:i,children:s,footer:a,wide:o}){return v.useEffect(()=>{if(!e)return;const l=c=>c.key==="Escape"&&i();return document.addEventListener("keydown",l),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",l),document.body.style.overflow=""}},[e,i]),e?t.jsxs("div",{className:"hwl-drawer-wrap",role:"dialog","aria-modal":"true","aria-label":n,children:[t.jsx("div",{className:"hwl-drawer-back",onClick:i}),t.jsxs("aside",{className:`hwl-drawer${o?" wide":""}`,children:[t.jsxs("header",{className:"hwl-drawer-head",children:[t.jsxs("div",{children:[t.jsx("h3",{children:n}),r&&t.jsx("p",{children:r})]}),t.jsx("button",{type:"button",className:"hwl-drawer-x",onClick:i,"aria-label":"Close",children:t.jsx(z.x,{})})]}),t.jsx("div",{className:"hwl-drawer-body hwa hwa-light",children:s}),a&&t.jsx("footer",{className:"hwl-drawer-foot",children:a})]})]}):null}const Vr=[{id:"trending",label:"Trending",icon:"🔥",shows:'Homepage → "Trending Projects in Gurugram"',defaultType:"Apartment",status:"Trending"},{id:"upcoming",label:"Upcoming",icon:"🗓️",shows:'Homepage → "Upcoming Projects in Gurugram" (4 newest)',defaultType:"Apartment",status:"Upcoming"},{id:"newlaunch",label:"New Launch",icon:"🚀",shows:'Homepage → "New Launch Projects in Gurugram" (4 newest)',defaultType:"Apartment",status:"New Launch"},{id:"branded",label:"Branded",icon:"💎",shows:'Homepage → "Branded Residences" (4 newest) — the newest is also the big branded feature banner',defaultType:"Apartment"},{id:"luxury",label:"Luxury",icon:"👑",shows:'Homepage → "Top Luxury Projects" (4 newest)',defaultType:"Apartment"},{id:"commercial",label:"Commercial",icon:"🏢",shows:'Homepage → "Commercial Projects in Gurugram" (4 newest)',defaultType:"Commercial"},{id:"sco",label:"SCO",icon:"🏬",shows:'Homepage → "SCO Projects in Gurugram" (4 newest)',defaultType:"SCO"}],pr=e=>Vr.find(n=>n.id===e)||Vr[0],Bf=["Apartment","Villa","Builder Floor","Plots","Farmhouse","Commercial","Retail","SCO"],wb=["New Launch","Upcoming","Under Construction","Ready to Move","Trending"],yb=["RERA","Founder Choice","Hot Deal","Limited Units","Luxury"],vb=e=>["Commercial","Retail","SCO"].includes(e)?"e.g. Shops, Offices & Food Court":e==="Plots"?"e.g. 250 – 500 Sq.Yds.":"e.g. 3 & 4 BHK",Ca={category:"trending",title:"",slug:"",developer:"",location:"",city:"Gurugram",locality:"",address:"",type:"Apartment",bhk:"",tag:"RERA",rera:!0,price:"",priceRange:"",status:"New Launch",possession:"",landArea:"",towers:"",propertyTypeDetail:"",image:"",logo:"",brandColor:"#1e3a5f",gallery:[],highlights:["","","",""],overview:"",tagline:"",taglineSub:"",videoUrl:"",brochure:"",pricing:[{type:"",size:"",price:""}],amenities:[],galleryCaptions:[],about:{heading:"",subheading:"",description:"",image:"",stats:[{value:"",label:""},{value:"",label:""},{value:"",label:""},{value:"",label:""}]},faqs:[{question:"",answer:""}]},bb=e=>({category:e.category,title:e.title.trim(),slug:Xe(e.slug||e.title),developer:e.developer.trim(),location:Df(e),city:e.city.trim(),locality:e.locality.trim(),type:e.type,bhk:e.bhk.trim(),tag:e.tag.trim(),rera:!!e.rera,price:e.price.trim(),priceRange:e.priceRange.trim(),status:e.status,possession:e.possession.trim(),landArea:e.landArea.trim(),towers:e.towers.trim(),propertyTypeDetail:e.propertyTypeDetail.trim(),image:e.image.trim(),logo:e.logo.trim(),brandColor:e.brandColor,gallery:e.gallery.map(n=>n.trim()).filter(Boolean),highlights:e.highlights.map(n=>n.trim()).filter(Boolean),overview:e.overview.trim(),tagline:e.tagline.trim(),taglineSub:e.taglineSub.trim(),videoUrl:e.videoUrl.trim(),brochure:e.brochure.trim(),pricing:e.pricing.map(n=>({type:n.type.trim(),size:n.size.trim(),price:n.price.trim()})).filter(n=>n.type||n.size||n.price),amenities:[...new Set(e.amenities.map(n=>n.trim()).filter(Boolean))],galleryCaptions:e.gallery.map((n,r)=>(e.galleryCaptions[r]||"").trim()),about:{heading:e.about.heading.trim(),subheading:e.about.subheading.trim(),description:e.about.description.trim(),image:e.about.image.trim(),stats:e.about.stats.map(n=>({value:n.value.trim(),label:n.label.trim()})).filter(n=>n.value||n.label)},faqs:e.faqs.map(n=>({question:n.question.trim(),answer:n.answer.trim()})).filter(n=>n.question)}),jb=e=>{var a,o,l,c,h;const n=(d,u)=>{const p=[...d||[]];for(;p.length<u;)p.push("");return p},r={...Ca};for(const d of Object.keys(Ca))e[d]!==void 0&&e[d]!==null&&(r[d]=e[d]);const i=nr(e);r.city=i.city||"Gurugram",r.locality=i.locality,r.address=String(e.location||"").split(",").map(d=>d.trim()).filter(Boolean).filter(d=>!Zi(d)&&!Ji(d)&&d.toLowerCase()!==r.locality.toLowerCase()).join(", "),r.gallery=(e.gallery||[]).filter(Boolean),r.highlights=n(e.highlights,4);const s=(d,u,p)=>{const g=(d||[]).map(b=>({...p,...b}));for(;g.length<u;)g.push({...p});return g};r.pricing=s(e.pricing,1,{type:"",size:"",price:""}),r.amenities=[...e.amenities||[]],r.galleryCaptions=(e.gallery||[]).filter(Boolean).map((d,u)=>{var p;return((p=e.galleryCaptions)==null?void 0:p[u])||""}),r.about={heading:((a=e.about)==null?void 0:a.heading)||"",subheading:((o=e.about)==null?void 0:o.subheading)||"",description:((l=e.about)==null?void 0:l.description)||"",image:((c=e.about)==null?void 0:c.image)||"",stats:s((h=e.about)==null?void 0:h.stats,4,{value:"",label:""})},r.faqs=s(e.faqs,1,{question:"",answer:""});for(const d of["overview","tagline","taglineSub","videoUrl","brochure"])r[d]=e[d]||"";return r.rera=e.rera!==!1,r},mu=[["title","Project name"],["developer","Developer"],["city","City"],["locality","Locality"],["bhk","Configuration"],["price","Starting price"],["priceRange","Price range"],["image","Main photo"]],Df=e=>[e.address,e.locality,e.city].map(n=>String(n||"").trim()).filter(Boolean).join(", "),Ff=(e,n)=>{var r,i;return((i=(r=e.response)==null?void 0:r.data)==null?void 0:i.error)||n},Ut="__other__";function re({label:e,hint:n,required:r,error:i,children:s,full:a}){return t.jsxs("div",{className:`hwa-field${a?" hwp-full":""}`,children:[t.jsxs("label",{children:[e,r&&t.jsx("span",{className:"hwp-req",children:" *"})]}),s,i?t.jsx("span",{className:"hwa-hint bad",children:i}):n&&t.jsx("span",{className:"hwa-hint",children:n})]})}function ut({n:e,title:n,sub:r,children:i}){return t.jsxs("section",{className:"hwa-card hwp-step",children:[t.jsxs("div",{className:"hwp-step-head",children:[t.jsx("span",{className:"hwp-step-no",children:e}),t.jsxs("div",{children:[t.jsx("h3",{children:n}),r&&t.jsx("p",{children:r})]})]}),i]})}function Ab({items:e,onChange:n,placeholder:r,addLabel:i,max:s=12}){const a=(l,c)=>n(e.map((h,d)=>d===l?c:h)),o=l=>n(e.length>1?e.filter((c,h)=>h!==l):[""]);return t.jsxs("div",{className:"hwp-list",children:[e.map((l,c)=>t.jsxs("div",{className:"hwp-list-row",children:[t.jsx("span",{className:"hwp-list-no",children:c+1}),t.jsx("input",{className:"hwa-input no-icon",value:l,onChange:h=>a(c,h.target.value),placeholder:r}),t.jsx("button",{type:"button",className:"hwp-x",onClick:()=>o(c),"aria-label":"Remove",children:"✕"})]},c)),e.length<s&&t.jsxs("button",{type:"button",className:"hwp-add",onClick:()=>n([...e,""]),children:["+ ",i]})]})}function Bo({rows:e,onChange:n,fields:r,empty:i,addLabel:s,max:a=20,textareaKey:o}){const l=(h,d,u)=>n(e.map((p,g)=>g===h?{...p,[d]:u}:p)),c=h=>n(e.length>1?e.filter((d,u)=>u!==h):[{...i}]);return t.jsxs("div",{className:"hwp-list",children:[e.map((h,d)=>t.jsxs("div",{className:`hwp-rows-row${o?" stacked":""}`,children:[t.jsx("span",{className:"hwp-list-no",children:d+1}),t.jsx("div",{className:"hwp-rows-fields",style:{gridTemplateColumns:o?"1fr":r.map(u=>u.w||"1fr").join(" ")},children:r.map(u=>u.key===o?t.jsx("textarea",{className:"hwa-input no-icon hwp-textarea",rows:2,value:h[u.key]||"",onChange:p=>l(d,u.key,p.target.value),placeholder:u.placeholder},u.key):t.jsx("input",{className:"hwa-input no-icon",value:h[u.key]||"",onChange:p=>l(d,u.key,p.target.value),placeholder:u.placeholder},u.key))}),t.jsx("button",{type:"button",className:"hwp-x",onClick:()=>c(d),"aria-label":"Remove",children:"✕"})]},d)),e.length<a&&t.jsxs("button",{type:"button",className:"hwp-add",onClick:()=>n([...e,{...i}]),children:["+ ",s]})]})}function kb({initial:e,editingId:n,counts:r,onSaved:i,onCancel:s}){const[a,o]=v.useState(e),[l,c]=v.useState(!1),[h,d]=v.useState(!1),[u,p]=v.useState(""),g=(C,R)=>o(I=>({...I,[C]:R})),[b,k]=v.useState(!!e.slug),P=C=>o(R=>({...R,title:C,slug:b?R.slug:Xe(C)})),f=(C,R)=>o(I=>({...I,about:{...I.about,[C]:R}})),[m,x]=v.useState(""),N=C=>o(R=>({...R,amenities:R.amenities.includes(C)?R.amenities.filter(I=>I!==C):[...R.amenities,C]})),w=()=>{const C=m.trim();C&&!a.amenities.includes(C)&&g("amenities",[...a.amenities,C]),x("")},T=pr(a.category),y=qn(a.city),j=y.some(C=>C.name===a.locality),[L,S]=v.useState(!!e.locality&&!qn(e.city).some(C=>C.name===e.locality)),[O,F]=v.useState(!!e.city&&!Zt.some(C=>C.city===e.city)),M=C=>o(R=>({...R,category:C.id,type:["commercial","sco"].includes(C.id)||["Commercial","Retail","SCO"].includes(R.type)?C.defaultType:R.type,status:C.status||R.status})),q=mu.filter(([C])=>!String(a[C]||"").trim()),Q=C=>l&&!String(a[C]||"").trim()?"Required":null,_=()=>document.querySelector(".hwp .hwu-busy"),J=async C=>{if(C.preventDefault(),c(!0),p(""),_())return p("Please wait — photos are still uploading.");if(q.length)return window.scrollTo({top:0,behavior:"smooth"}),p(`Please fill: ${q.map(R=>R[1]).join(", ")}`);d(!0);try{const R=bb(a);n?await H.put(`/properties/${n}`,R):await H.post("/properties",R),i(n?"updated":"added",R.title,R.category)}catch(R){p(Ff(R,"Could not save the property")),window.scrollTo({top:0,behavior:"smooth"})}finally{d(!1)}},D=Df(a);return t.jsxs("form",{onSubmit:J,noValidate:!0,className:"hwp-form-layout",children:[t.jsxs("div",{className:"hwp-form-main",children:[u&&t.jsx(Vt,{children:u}),t.jsx(ut,{n:"1",title:"Where should this property appear?",sub:"Pick one section. This decides where it shows on the website.",children:t.jsx("div",{className:"hwp-cats",children:Vr.map(C=>t.jsxs("button",{type:"button",className:`hwp-cat${a.category===C.id?" active":""}`,onClick:()=>M(C),children:[t.jsxs("span",{className:"hwp-cat-top",children:[t.jsx("span",{className:"hwp-cat-icon",children:C.icon}),t.jsx("strong",{children:C.label}),t.jsxs("em",{children:[r[C.id]||0," listed"]})]}),t.jsx("span",{className:"hwp-cat-where",children:C.shows})]},C.id))})}),t.jsx(ut,{n:"2",title:"Location",sub:"Choose the city and locality — the website’s location filters and menus use these.",children:t.jsxs("div",{className:"hwp-grid",children:[t.jsx(re,{label:"City",required:!0,error:Q("city"),children:O?t.jsxs("div",{className:"hwp-inline",children:[t.jsx("input",{className:"hwa-input no-icon",value:a.city,onChange:C=>g("city",C.target.value),placeholder:"Type city name",autoFocus:!0}),t.jsx("button",{type:"button",className:"hwa-mini",onClick:()=>{F(!1),o(C=>({...C,city:"Gurugram",locality:""}))},children:"List"})]}):t.jsxs("select",{className:"hwa-input no-icon",value:a.city,onChange:C=>{if(C.target.value===Ut){F(!0),S(!0),o(R=>({...R,city:"",locality:""}));return}S(!1),o(R=>({...R,city:C.target.value,locality:""}))},children:[Zt.map(C=>t.jsx("option",{value:C.city,children:C.city},C.city)),t.jsx("option",{value:Ut,children:"Other city…"})]})}),t.jsx(re,{label:"Locality / Micro-market",required:!0,error:Q("locality"),children:L||O?t.jsxs("div",{className:"hwp-inline",children:[t.jsx("input",{className:"hwa-input no-icon",value:a.locality,onChange:C=>g("locality",C.target.value),placeholder:"e.g. Sector 150 Corridor"}),!O&&t.jsx("button",{type:"button",className:"hwa-mini",onClick:()=>{S(!1),g("locality","")},children:"List"})]}):t.jsxs("select",{className:"hwa-input no-icon",value:j?a.locality:"",onChange:C=>{if(C.target.value===Ut){S(!0),g("locality","");return}g("locality",C.target.value)},children:[t.jsx("option",{value:"",children:"Select locality…"}),y.map(C=>t.jsx("option",{value:C.name,children:C.name},C.slug)),t.jsx("option",{value:Ut,children:"Other locality…"})]})}),t.jsx(re,{label:"Sector / Address",hint:"Optional — e.g. Sector 58 or the street",children:t.jsx("input",{className:"hwa-input no-icon",value:a.address,onChange:C=>g("address",C.target.value),placeholder:"e.g. Sector 58"})}),t.jsx(re,{label:"Shown on the website as",children:t.jsxs("div",{className:"hwp-location-out",children:["📍 ",D||"Choose city and locality"]})})]})}),t.jsx(ut,{n:"3",title:"Basic details",sub:"Shown on the property card and the top of the detail page.",children:t.jsxs("div",{className:"hwp-grid",children:[t.jsx(re,{label:"Project name",required:!0,error:Q("title"),full:!0,children:t.jsx("input",{className:"hwa-input no-icon",value:a.title,onChange:C=>P(C.target.value),placeholder:"e.g. M3M Brabus Residences"})}),t.jsx(re,{label:"Web address (slug)",full:!0,hint:n&&e.slug&&Xe(a.slug)!==e.slug?`Old link /property/${e.slug} will redirect to the new one`:"Lowercase words joined by hyphens — made from the name, or type your own",children:t.jsxs("div",{className:"hwp-slug",children:[t.jsx("span",{children:"homwisor.com/property/"}),t.jsx("input",{className:"hwa-input no-icon",value:a.slug,onChange:C=>{k(!0),g("slug",kf(C.target.value))},onBlur:()=>g("slug",Xe(a.slug||a.title)),placeholder:Xe(a.title)||"m3m-brabus-residences"}),a.title&&Xe(a.title)!==a.slug&&t.jsx("button",{type:"button",className:"hwa-mini",onClick:()=>{k(!1),g("slug",Xe(a.title))},children:"Use name"})]})}),t.jsx(re,{label:"Developer / Builder",required:!0,error:Q("developer"),children:t.jsx("input",{className:"hwa-input no-icon",value:a.developer,onChange:C=>g("developer",C.target.value),placeholder:"e.g. M3M Group"})}),t.jsx(re,{label:"Property type",required:!0,children:t.jsx("select",{className:"hwa-input no-icon",value:a.type,onChange:C=>g("type",C.target.value),children:Bf.map(C=>t.jsx("option",{children:C},C))})}),t.jsx(re,{label:"Configuration",required:!0,error:Q("bhk"),hint:"BHK, unit mix or plot size — used by the BHK filter",children:t.jsx("input",{className:"hwa-input no-icon",value:a.bhk,onChange:C=>g("bhk",C.target.value),placeholder:vb(a.type)})}),t.jsxs(re,{label:"Card badge",hint:"Small label on the card image",children:[t.jsx("input",{className:"hwa-input no-icon",list:"hwp-tags",value:a.tag,onChange:C=>g("tag",C.target.value),placeholder:"e.g. RERA"}),t.jsx("datalist",{id:"hwp-tags",children:yb.map(C=>t.jsx("option",{value:C},C))})]}),t.jsx(re,{label:"RERA approved?",children:t.jsxs("div",{className:"hwp-toggle",children:[t.jsx("button",{type:"button",className:a.rera?"on":"",onClick:()=>g("rera",!0),children:"Yes"}),t.jsx("button",{type:"button",className:a.rera?"":"on",onClick:()=>g("rera",!1),children:"No"})]})})]})}),t.jsx(ut,{n:"4",title:"Price",sub:"Write prices as they should appear, in Cr or L (e.g. ₹85 L – 1.2 Cr). The budget filter reads them automatically.",children:t.jsxs("div",{className:"hwp-grid",children:[t.jsx(re,{label:"Starting price",required:!0,error:Q("price"),hint:"Shown as “Starting from” on the detail page",children:t.jsx("input",{className:"hwa-input no-icon",value:a.price,onChange:C=>g("price",C.target.value),placeholder:"e.g. ₹5.20 Cr"})}),t.jsx(re,{label:"Price range",required:!0,error:Q("priceRange"),hint:"Shown on homepage cards",children:t.jsx("input",{className:"hwa-input no-icon",value:a.priceRange,onChange:C=>g("priceRange",C.target.value),placeholder:"e.g. ₹5.2 – 5.8 Cr"})})]})}),t.jsx(ut,{n:"5",title:"Overview",sub:"The opening section of the detail page — description, image overlay text and an optional video.",children:t.jsxs("div",{className:"hwp-grid",children:[t.jsx(re,{label:"Description",full:!0,hint:"A few lines about the project. Long text gets a “Read more” link.",children:t.jsx("textarea",{className:"hwa-input no-icon hwp-textarea",rows:5,value:a.overview,onChange:C=>g("overview",C.target.value),placeholder:"e.g. M3M Brabus Residences is an ultra-luxury residential development by M3M India in collaboration with BRABUS…"})}),t.jsx(re,{label:"Image overlay title",hint:"Shown on the photo slider",children:t.jsx("input",{className:"hwa-input no-icon",value:a.tagline,onChange:C=>g("tagline",C.target.value),placeholder:"e.g. A New Icon Rises"})}),t.jsx(re,{label:"Image overlay sub-line",children:t.jsx("input",{className:"hwa-input no-icon",value:a.taglineSub,onChange:C=>g("taglineSub",C.target.value),placeholder:"e.g. Luxury living beyond compare"})}),t.jsx(re,{label:"Video link",full:!0,hint:"Optional — YouTube or .mp4 link for the “Watch video” button",children:t.jsx("input",{className:"hwa-input no-icon",value:a.videoUrl,onChange:C=>g("videoUrl",C.target.value),placeholder:"https://youtube.com/watch?v=…"})}),t.jsx(re,{label:"Brochure (PDF)",full:!0,hint:"Optional — visitors download it from the “Brochure” buttons. Without one, those buttons ask for their details instead.",children:t.jsx(fb,{value:a.brochure,onChange:C=>g("brochure",C)})})]})}),t.jsx(ut,{n:"6",title:"Space & Pricing",sub:"One row per unit type — shown as the price table on the detail page.",children:t.jsx(Bo,{rows:a.pricing,onChange:C=>g("pricing",C),empty:{type:"",size:"",price:""},addLabel:"Add unit type",fields:[{key:"type",placeholder:"Type, e.g. 4 BHK",w:"1fr"},{key:"size",placeholder:"Size, e.g. 5,000 Sq.Ft.",w:"1.2fr"},{key:"price",placeholder:"Price, e.g. ₹20 Cr",w:"1fr"}]})}),t.jsx(ut,{n:"7",title:"Photos & branding",sub:"Upload photos from your computer — they’re resized automatically. The preview shows the same crop the website cards use.",children:t.jsxs("div",{className:"hwp-grid",children:[t.jsx(re,{label:"Main photo",required:!0,error:Q("image"),full:!0,children:t.jsx(St,{value:a.image,onChange:C=>g("image",C),purpose:"property",aspect:"3 / 2",hint:"Cover photo on every card and the detail page (landscape works best)"})}),t.jsx(re,{label:"Gallery photos",full:!0,hint:"Shown in the gallery on the detail page — the first 5 make the photo collage; captions appear on the photos",children:t.jsx(mb,{value:a.gallery,onChange:C=>g("gallery",C),onMakeCover:C=>g("image",C),purpose:"property",captions:a.galleryCaptions,onCaptionsChange:C=>g("galleryCaptions",C)})}),t.jsx(re,{label:"Developer logo",hint:"Optional — shown on the detail page header",children:t.jsx(St,{value:a.logo,onChange:C=>g("logo",C),purpose:"logo",aspect:"5 / 2",kind:"logo",fit:"contain"})}),t.jsx(re,{label:"Brand colour",hint:"Colour of the detail page header",children:t.jsxs("div",{className:"hwp-color",children:[t.jsx("input",{type:"color",value:a.brandColor,onChange:C=>g("brandColor",C.target.value)}),t.jsx("code",{children:a.brandColor}),a.logo.trim()&&t.jsx("span",{className:"hwp-logo-prev",style:{background:a.brandColor},children:t.jsx("img",{src:a.logo.trim(),alt:"logo preview",onError:C=>C.target.style.display="none"})})]})})]})}),t.jsx(ut,{n:"8",title:"Project details",sub:"Shown in the “Overview” boxes on the detail page. Status also powers the “Project Status” filter.",children:t.jsxs("div",{className:"hwp-grid",children:[t.jsx(re,{label:"Project status",hint:"Filled automatically from the section; change if needed",children:t.jsx("select",{className:"hwa-input no-icon",value:a.status,onChange:C=>g("status",C.target.value),children:[...new Set([a.status,...wb])].filter(Boolean).map(C=>t.jsx("option",{children:C},C))})}),t.jsx(re,{label:"Possession",children:t.jsx("input",{className:"hwa-input no-icon",value:a.possession,onChange:C=>g("possession",C.target.value),placeholder:"e.g. Dec 2030"})}),t.jsx(re,{label:"Land area",children:t.jsx("input",{className:"hwa-input no-icon",value:a.landArea,onChange:C=>g("landArea",C.target.value),placeholder:"e.g. 12 Acres"})}),t.jsx(re,{label:"Towers & units",children:t.jsx("input",{className:"hwa-input no-icon",value:a.towers,onChange:C=>g("towers",C.target.value),placeholder:"e.g. 3 Towers – 110 Units"})}),t.jsx(re,{label:"Property type (detail)",full:!0,hint:"Longer description of the type, e.g. for the overview box",children:t.jsx("input",{className:"hwa-input no-icon",value:a.propertyTypeDetail,onChange:C=>g("propertyTypeDetail",C.target.value),placeholder:"e.g. Ultra-luxury Residential Flats"})})]})}),t.jsx(ut,{n:"9",title:"Highlights",sub:"Key selling points — shown with checkmarks on the detail page. 4 is ideal.",children:t.jsx(Ab,{items:a.highlights,onChange:C=>g("highlights",C),placeholder:"e.g. Only 2 apartments per floor with private lobbies",addLabel:"Add highlight"})}),t.jsxs(ut,{n:"10",title:"Amenities",sub:"Tick what the project offers, or add your own. Shown as an icon grid on the detail page.",children:[t.jsx("div",{className:"hwp-amenities",children:[...Yl.map(([C])=>C),...a.amenities.filter(C=>!Yl.some(([R])=>R===C))].map(C=>t.jsxs("button",{type:"button",className:`hwp-amenity${a.amenities.includes(C)?" on":""}`,onClick:()=>N(C),children:[t.jsx(Rf,{name:C,size:18})," ",C]},C))}),t.jsxs("div",{className:"hwp-inline",style:{marginTop:10,maxWidth:420},children:[t.jsx("input",{className:"hwa-input no-icon",value:m,onChange:C=>x(C.target.value),onKeyDown:C=>C.key==="Enter"&&(C.preventDefault(),w()),placeholder:"Add another amenity, e.g. Infinity Pool"}),t.jsx("button",{type:"button",className:"hwa-mini",onClick:w,children:"Add"})]}),t.jsxs("span",{className:"hwa-hint",style:{display:"block",marginTop:6},children:[a.amenities.length," selected"]})]}),t.jsx(ut,{n:"11",title:"About the developer",sub:`The “About ${a.developer||"the developer"}” section. Leave empty to show a short default about the developer.`,children:t.jsxs("div",{className:"hwp-grid",children:[t.jsx(re,{label:"Heading",hint:`Default: About ${a.developer||"the developer"}`,children:t.jsx("input",{className:"hwa-input no-icon",value:a.about.heading,onChange:C=>f("heading",C.target.value),placeholder:`About ${a.developer||"M3M India"}`})}),t.jsx(re,{label:"Sub-heading",children:t.jsx("input",{className:"hwa-input no-icon",value:a.about.subheading,onChange:C=>f("subheading",C.target.value),placeholder:"e.g. Building a Better Tomorrow"})}),t.jsx(re,{label:"Description",full:!0,children:t.jsx("textarea",{className:"hwa-input no-icon hwp-textarea",rows:4,value:a.about.description,onChange:C=>f("description",C.target.value),placeholder:"e.g. M3M India is a leading real estate developer, known for its commitment to quality…"})}),t.jsx(re,{label:"Image",full:!0,hint:"A landscape photo of the developer’s work",children:t.jsx("div",{style:{maxWidth:420},children:t.jsx(St,{value:a.about.image,onChange:C=>f("image",C),purpose:"property",aspect:"3 / 2"})})}),t.jsx(re,{label:"Key numbers",full:!0,hint:"Up to 4, e.g. 15+ / Years of Excellence",children:t.jsx(Bo,{rows:a.about.stats,onChange:C=>f("stats",C),empty:{value:"",label:""},max:4,addLabel:"Add number",fields:[{key:"value",placeholder:"e.g. 15+",w:".6fr"},{key:"label",placeholder:"e.g. Years of Excellence",w:"1.4fr"}]})})]})}),t.jsx(ut,{n:"12",title:"Questions & answers",sub:"Shown in “Everything You Need to Know”. Leave empty to show common questions answered from this property’s details.",children:t.jsx(Bo,{rows:a.faqs,onChange:C=>g("faqs",C),empty:{question:"",answer:""},addLabel:"Add question",textareaKey:"answer",fields:[{key:"question",placeholder:"Question, e.g. What is the possession date?"},{key:"answer",placeholder:"Answer"}]})})]}),t.jsx("aside",{className:"hwp-side",children:t.jsxs("div",{className:"hwa-card hwp-preview",children:[t.jsx("div",{className:"hwp-side-title",children:"Live preview — as on the website"}),t.jsxs("div",{className:"hwp-pcard",children:[t.jsxs("div",{className:"hwp-pcard-img",children:[a.image.trim()?t.jsx("img",{src:a.image.trim(),alt:"",onError:C=>C.target.style.visibility="hidden"}):t.jsx("span",{children:"Main photo"}),a.rera&&t.jsx("b",{className:"hwp-pcard-rera",children:"✓ RERA"}),t.jsx("b",{className:"hwp-pcard-tag",children:a.bhk||a.type})]}),t.jsxs("div",{className:"hwp-pcard-body",children:[t.jsx("strong",{children:a.title||"Project name"}),t.jsx("span",{className:"hwp-pcard-price",children:a.priceRange||a.price||"Price range"}),t.jsxs("span",{className:"hwp-pcard-loc",children:["📍 ",D||"Location"]}),t.jsxs("span",{className:"hwp-pcard-meta",children:[a.bhk||"Configuration"," · ",a.type]})]})]}),t.jsxs("div",{className:"hwp-where",children:[t.jsxs("span",{children:[T.icon," Will appear in"]}),t.jsx("strong",{children:T.shows}),a.locality&&t.jsxs("strong",{style:{fontWeight:600},children:["📍 Location filter: ",a.locality,a.city?`, ${a.city}`:""]})]}),t.jsx("ul",{className:"hwp-check",children:mu.map(([C,R])=>{const I=!!String(a[C]||"").trim();return t.jsxs("li",{className:I?"ok":"",children:[I?"✓":"○"," ",R]},C)})}),t.jsx("button",{className:"hwa-btn hwa-btn-gold",disabled:h,children:h?t.jsxs(t.Fragment,{children:[t.jsx(hs,{})," Saving…"]}):n?"Save changes":"Publish property"}),t.jsx("button",{type:"button",className:"hwp-cancel",onClick:s,children:"Cancel"})]})})]})}const Nb=[{id:"section",label:"By Section",hint:"Homepage section"},{id:"location",label:"By Location",hint:"City & locality"},{id:"type",label:"By Type",hint:"Apartment, Villa, SCO…"}];function Sb({properties:e,loaded:n=!0,onChange:r,initialFilter:i="all",startAdding:s=!1}){const a=(R={})=>{const I=pr(R.category||"trending");return{key:Date.now(),initial:{...Ca,category:I.id,type:I.defaultType,status:I.status||Ca.status,...R}}},[o,l]=v.useState(()=>s?a(i!=="all"?{category:i}:{}):"list"),[c,h]=v.useState(null),[d,u]=v.useState("section"),[p,g]=v.useState(i),[b,k]=v.useState("Gurugram"),[P,f]=v.useState(""),[m,x]=v.useState(""),[N,w]=v.useState(""),T=v.useMemo(()=>e.map(R=>({p:R,...nr(R)})),[e]),y=v.useMemo(()=>{const R={all:e.length};for(const I of e)R[I.category]=(R[I.category]||0)+1;return R},[e]),j=R=>T.filter(I=>I.city===R).length,L=R=>T.filter(I=>I.city===b&&I.locality===R).length,S=R=>e.filter(I=>I.type===R).length,O=T.filter(R=>R.city===b&&!qn(b).some(I=>I.name===R.locality)),F=T.filter(({p:R,city:I,locality:G})=>{if(d==="section"&&p!=="all"&&R.category!==p)return!1;if(d==="location"){if(I!==b)return!1;if(P===Ut){if(qn(b).some(A=>A.name===G))return!1}else if(P&&G!==P)return!1}return!(d==="type"&&m&&R.type!==m)}).map(R=>R.p),M=()=>{if(d==="section")return p!=="all"?{category:p}:{};if(d==="location")return{city:b,locality:P&&P!==Ut?P:""};if(d==="type"&&m){const R=m==="SCO"?"sco":["Commercial","Retail"].includes(m)?"commercial":void 0;return{type:m,...R?{category:R,type:m}:{}}}return{}},q=()=>d==="section"&&p!=="all"?pr(p).label:d==="location"?P&&P!==Ut?P:b:d==="type"&&m?m:"",Q=(R=M())=>{h(null),w("");const I=a(R);R.type&&(I.initial.type=R.type),l(I),window.scrollTo(0,0)},_=R=>{h(R),w(""),l({key:R.id,initial:jb(R)}),window.scrollTo(0,0)},J=(R,I,G)=>{l("list"),w(`“${I}” ${R}. It now appears in: ${pr(G).shows}`),r(),window.scrollTo(0,0)},D=async R=>{if(window.confirm(`Delete “${R.title}”? It will be removed from the website.`))try{await H.delete(`/properties/${R.id}`),r()}catch(I){alert(Ff(I,"Could not delete"))}};if(o!=="list")return t.jsxs("div",{className:"hwa hwa-section hwa-light hwp",children:[t.jsx("div",{className:"hwa-section-head",children:t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"hwp-back",onClick:()=>l("list"),children:"← All properties"}),t.jsx("h2",{children:c?`Edit: ${c.title}`:"Add a new property"}),t.jsxs("p",{children:["Fill the steps below. Fields marked ",t.jsx("span",{className:"hwp-req",children:"*"})," are required. The preview on the right updates as you type."]})]})}),t.jsx(kb,{initial:o.initial,editingId:c==null?void 0:c.id,counts:y,onSaved:J,onCancel:()=>l("list")},o.key)]});const C=q();return t.jsxs("div",{className:"hwa hwa-section hwa-light hwp",children:[t.jsxs("div",{className:"hwa-section-head",children:[t.jsxs("div",{children:[t.jsxs("h2",{children:["Properties ",t.jsxs("span",{style:{fontWeight:500,color:"#9ca3af",fontSize:14},children:["(",e.length,")"]})]}),t.jsx("p",{children:"Browse by section, location or type — then use “+ Add” to create a property already filled in for that group."})]}),t.jsx("button",{className:"hwa-btn hwa-btn-gold hwp-add-main",onClick:()=>Q({}),children:"+ Add Property"})]}),N&&t.jsx("div",{style:{marginTop:14},children:t.jsx(Vt,{type:"success",children:N})}),t.jsx("div",{className:"hwp-browse",children:Nb.map(R=>t.jsxs("button",{className:d===R.id?"active":"",onClick:()=>u(R.id),children:[t.jsx("strong",{children:R.label}),t.jsx("span",{children:R.hint})]},R.id))}),d==="section"&&t.jsxs("div",{className:"hwp-tabs",children:[t.jsxs("button",{className:p==="all"?"active":"",onClick:()=>g("all"),children:["All ",t.jsx("em",{children:y.all})]}),Vr.map(R=>t.jsxs("button",{className:p===R.id?"active":"",onClick:()=>g(R.id),children:[R.icon," ",R.label," ",t.jsx("em",{children:y[R.id]||0})]},R.id))]}),d==="location"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"hwp-tabs",children:Zt.map(R=>t.jsxs("button",{className:b===R.city?"active":"",onClick:()=>{k(R.city),f("")},children:[R.city," ",t.jsx("em",{children:j(R.city)})]},R.city))}),t.jsxs("div",{className:"hwp-locs",children:[t.jsxs("button",{className:`hwp-loc${P===""?" active":""}`,onClick:()=>f(""),children:[t.jsxs("strong",{children:["All of ",b]}),t.jsxs("span",{children:[j(b)," properties"]})]}),qn(b).map(R=>t.jsxs("div",{className:`hwp-loc${P===R.name?" active":""}`,onClick:()=>f(R.name),role:"button",tabIndex:0,children:[t.jsx("strong",{children:R.name}),t.jsxs("span",{children:[L(R.name)," ",L(R.name)===1?"property":"properties"]}),t.jsx("button",{type:"button",className:"hwp-loc-add",onClick:I=>{I.stopPropagation(),Q({city:b,locality:R.name})},title:`Add property in ${R.name}`,children:"+ Add"})]},R.slug)),O.length>0&&t.jsxs("button",{className:`hwp-loc warn${P===Ut?" active":""}`,onClick:()=>f(Ut),children:[t.jsx("strong",{children:"Other / not set"}),t.jsxs("span",{children:[O.length," — edit to choose a locality"]})]})]})]}),d==="type"&&t.jsxs("div",{className:"hwp-tabs",children:[t.jsxs("button",{className:m===""?"active":"",onClick:()=>x(""),children:["All ",t.jsx("em",{children:e.length})]}),Bf.map(R=>t.jsxs("button",{className:m===R?"active":"",onClick:()=>x(R),children:[R," ",t.jsx("em",{children:S(R)})]},R))]}),C&&t.jsxs("div",{className:"hwp-section-info",children:[t.jsxs("div",{children:[t.jsx("strong",{children:C}),d==="section"&&t.jsxs(t.Fragment,{children:[" — ",pr(p).shows]}),d==="location"&&t.jsxs(t.Fragment,{children:[" — shown when visitors filter by ",C," on the website"]}),d==="type"&&t.jsxs(t.Fragment,{children:[" — shown when visitors filter by “",C,"”"]})]}),t.jsxs("button",{className:"hwa-mini",onClick:()=>Q(),children:["+ Add in ",C]})]}),t.jsx(Tn,{id:"properties",loading:!n,items:F,main:{aspect:"wide",thumb:R=>R.image,title:R=>R.title,sub:R=>R.developer},badges:R=>{const I=pr(R.category);return[{text:`${I.icon} ${I.label}`,tone:"dark"},R.rera!==!1&&{text:"RERA",tone:"green"}]},columns:[{label:"Location",render:R=>{const I=nr(R);return t.jsx("span",{className:"hwl-ellipsis",title:R.location,children:I.locality?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:I.locality}),t.jsx("br",{}),t.jsx("span",{className:"muted",children:I.city})]}):R.location})}},{label:"Type",render:R=>t.jsxs("span",{children:[R.bhk,t.jsx("br",{}),t.jsx("span",{className:"muted",children:R.type})]}),hideSm:!0},{label:"Price",render:R=>t.jsx("span",{className:"gold",children:R.priceRange||R.price})},{label:"Status",render:R=>t.jsx("span",{className:"muted",children:R.status||"—"}),hideSm:!0,hideGrid:!0}],actions:R=>[{label:"Edit",icon:z.edit,onClick:_,primary:!0},{label:"View",icon:z.external,href:it(R)},{label:"Delete",icon:z.trash,onClick:D,danger:!0}],searchText:R=>`${R.title} ${R.location} ${R.developer} ${R.bhk} ${R.type} ${R.locality||""}`,sorts:[{value:"new",label:"Newest first",fn:(R,I)=>String(I.createdAt).localeCompare(String(R.createdAt))},{value:"old",label:"Oldest first",fn:(R,I)=>String(R.createdAt).localeCompare(String(I.createdAt))},{value:"az",label:"Name A–Z",fn:(R,I)=>R.title.localeCompare(I.title)},{value:"pl",label:"Price: low to high",fn:(R,I)=>{var G,A;return(((G=_t(R))==null?void 0:G.min)??1e9)-(((A=_t(I))==null?void 0:A.min)??1e9)}},{value:"ph",label:"Price: high to low",fn:(R,I)=>{var G,A;return(((G=_t(I))==null?void 0:G.max)??-1)-(((A=_t(R))==null?void 0:A.max)??-1)}}],empty:"No properties here yet.",onEmptyAdd:()=>Q(),emptyAddLabel:`Add the first one${C?` in ${C}`:""}`})]})}const ze=(e,n)=>{if(!e)throw new Error(`Please ${n}`)},Xa=e=>(n,r)=>String(n[e]||"").localeCompare(String(r[e]||"")),Wf=(e,n)=>String(n.createdAt||n.id).localeCompare(String(e.createdAt||e.id)),Cb=(e,n)=>-Wf(e,n),Eb=()=>!!document.querySelector(".hwl-drawer .hwu-busy");function K({label:e,hint:n,full:r,children:i}){return t.jsxs("div",{className:`hwa-field${r?" full":""}`,children:[t.jsx("label",{children:e}),i,n&&t.jsx("span",{className:"hwa-hint",children:n})]})}const se=({value:e,onChange:n,...r})=>t.jsx("input",{className:"hwa-input no-icon",value:e??"",onChange:i=>n(i.target.value),...r});function or({title:e,count:n,sub:r,children:i}){return t.jsxs("div",{className:"hwd-page-head",children:[t.jsxs("div",{children:[t.jsxs("h1",{children:[e,n!==void 0&&t.jsxs("span",{className:"count",children:["(",n,")"]})]}),r&&t.jsx("p",{children:r})]}),t.jsx("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:i})]})}function lr({empty:e,run:n,create:r,update:i,remove:s,validate:a,labels:o}){const[l,c]=v.useState(!1),[h,d]=v.useState(null),[u,p]=v.useState(e),[g,b]=v.useState(!1);return{open:l,editing:h,f:u,set:w=>T=>p(y=>({...y,[w]:T})),setF:p,saving:g,openNew:(w={})=>{d(null),p({...e,...w}),c(!0)},openEdit:w=>{d(w),p({...e,...w}),c(!0)},close:()=>!g&&c(!1),save:async w=>{if(w==null||w.preventDefault(),Eb())return n(()=>{throw new Error("Please wait — the image is still uploading")});b(!0);let T=!1;await n(async()=>{a==null||a(u);const y=Object.fromEntries(Object.keys(e).map(j=>[j,u[j]]));h?await i(h,y):await r(y),T=!0},h?o.updated:o.created),b(!1),T&&c(!1)},del:w=>{confirm(`Delete “${w.title||w.name}”? This removes it from the website.`)&&n(()=>s(w),o.deleted)}}}const cr=({ed:e,saveLabel:n})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"hwd-btn",onClick:e.close,disabled:e.saving,children:"Cancel"}),t.jsx("button",{type:"submit",form:"hwl-form",className:"hwd-btn gold",disabled:e.saving,children:e.saving?"Saving…":e.editing?"Save changes":n})]}),Rb={title:"",developer:"",location:"",microMarket:"",price:"Contact for price",description:"",videoUrl:"",thumbnail:"",image:"",phone:"9811 750 740",demandText:"High Demand: 10 buyers enquired in last 24 hours",activeBuyers:24,monthlyRental:"₹85,000/mo",roi:"5.5%",badge:"LUXURY EDITION"};function Pb({snaps:e,run:n}){const r=lr({empty:Rb,run:n,create:a=>H.post("/snaps",a),update:(a,o)=>H.put(`/snaps/${a.id}`,o),remove:a=>H.delete(`/snaps/${a.id}`),validate:a=>{ze(a.title,"enter a title"),ze(a.videoUrl,"paste the video link"),ze(a.thumbnail,"upload a thumbnail")},labels:{created:"Snap published",updated:"Snap updated",deleted:"Snap deleted"}}),{f:i,set:s}=r;return t.jsxs(t.Fragment,{children:[t.jsxs(or,{title:"Property Snaps",count:e.length,sub:"Vertical video reels shown on the /property-snaps page.",children:[t.jsxs("a",{className:"hwd-btn",href:"/property-snaps",target:"_blank",rel:"noreferrer",children:[t.jsx(z.external,{})," View page"]}),t.jsxs("button",{className:"hwd-btn gold",onClick:()=>r.openNew(),children:[t.jsx(z.plus,{})," Add snap"]})]}),t.jsx(Tn,{id:"snaps",items:e,main:{aspect:"tall",thumb:a=>a.thumbnail||a.image,title:a=>a.title,sub:a=>[a.developer,a.location].filter(Boolean).join(" · "),overlay:()=>t.jsx("span",{className:"hwl-play",children:t.jsx("span",{children:t.jsx(z.film,{})})})},badges:a=>[a.badge&&{text:a.badge,tone:"dark"}],columns:[{label:"Price",render:a=>t.jsx("span",{className:"gold",children:a.price})},{label:"Buyers",render:a=>t.jsxs("span",{children:[t.jsx("b",{children:a.activeBuyers})," ",t.jsx("span",{className:"muted",children:"viewing"})]}),hideSm:!0},{label:"Rental / ROI",render:a=>t.jsxs("span",{className:"muted",children:[a.monthlyRental," · ",a.roi]}),hideSm:!0}],actions:a=>[{label:"Edit",icon:z.edit,onClick:r.openEdit,primary:!0},a.videoUrl&&{label:"Video",icon:z.film,href:a.videoUrl},{label:"Delete",icon:z.trash,onClick:r.del,danger:!0}],searchText:a=>`${a.title} ${a.developer} ${a.location} ${a.badge}`,sorts:[{value:"new",label:"Newest first",fn:Wf},{value:"old",label:"Oldest first",fn:Cb},{value:"az",label:"Name A–Z",fn:Xa("title")}],empty:"No snaps yet.",onEmptyAdd:()=>r.openNew(),emptyAddLabel:"Add the first snap",defaultView:"grid"}),t.jsx(ar,{open:r.open,onClose:r.close,title:r.editing?"Edit snap":"Add a snap",sub:"Paste an .mp4 video link and upload a portrait thumbnail.",footer:t.jsx(cr,{ed:r,saveLabel:"Publish snap"}),children:t.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[t.jsxs("div",{className:"hwl-drawer-section",children:[t.jsx("h4",{children:"Video"}),t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Video link (.mp4) *",full:!0,hint:"Plays muted on a loop",children:t.jsx(se,{value:i.videoUrl,onChange:s("videoUrl"),placeholder:"https://…/video.mp4"})}),t.jsx(K,{label:"Thumbnail *",full:!0,children:t.jsx("div",{style:{maxWidth:220},children:t.jsx(St,{value:i.thumbnail,onChange:s("thumbnail"),purpose:"snap",aspect:"4 / 5"})})})]})]}),t.jsxs("div",{className:"hwl-drawer-section",children:[t.jsx("h4",{children:"Details"}),t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Title *",full:!0,children:t.jsx(se,{value:i.title,onChange:s("title"),placeholder:"e.g. Oberoi Realty 360 North"})}),t.jsx(K,{label:"Developer",children:t.jsx(se,{value:i.developer,onChange:s("developer"),placeholder:"e.g. Oberoi Realty"})}),t.jsx(K,{label:"Location",children:t.jsx(se,{value:i.location,onChange:s("location"),placeholder:"e.g. Sector 66, Gurugram"})}),t.jsx(K,{label:"Price",children:t.jsx(se,{value:i.price,onChange:s("price"),placeholder:"₹5.20 Cr"})}),t.jsx(K,{label:"Badge",children:t.jsx(se,{value:i.badge,onChange:s("badge"),placeholder:"LUXURY EDITION"})}),t.jsx(K,{label:"Description",full:!0,children:t.jsx("textarea",{className:"hwa-input no-icon",rows:3,value:i.description,onChange:a=>s("description")(a.target.value),placeholder:"Project overview…"})})]})]}),t.jsxs("div",{className:"hwl-drawer-section",children:[t.jsx("h4",{children:"Info cards"}),t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Phone",children:t.jsx(se,{value:i.phone,onChange:s("phone")})}),t.jsx(K,{label:"Micro-market",children:t.jsx(se,{value:i.microMarket,onChange:s("microMarket"),placeholder:"Golf Course Ext."})}),t.jsx(K,{label:"Monthly rental",children:t.jsx(se,{value:i.monthlyRental,onChange:s("monthlyRental")})}),t.jsx(K,{label:"ROI",children:t.jsx(se,{value:i.roi,onChange:s("roi")})}),t.jsx(K,{label:"Active buyers",children:t.jsx("input",{className:"hwa-input no-icon",type:"number",min:"0",value:i.activeBuyers,onChange:a=>s("activeBuyers")(parseInt(a.target.value)||0)})}),t.jsx(K,{label:"Demand text",full:!0,children:t.jsx(se,{value:i.demandText,onChange:s("demandText")})})]})]})]})})]})}const Tb={image:"",title:"",link:"",developer:""},Do={hero:{tab:"Hero banners",one:"hero banner",purpose:"hero",aspect:"3 / 1",thumb:"banner",where:"The big rotating banner at the very top of the homepage."},slider:{tab:"Image slider",one:"slider image",purpose:"slider",aspect:"1373 / 240",thumb:"banner",where:"The wide rotating strip just below the homepage search box."},small:{tab:"Side ads",one:"side ad",purpose:"sidead",aspect:"9 / 20",thumb:"tall",fit:"cover",narrow:!0,where:"The tall rotating promo beside the Trending, SCO and Commercial listings."}};function Uf(e=[]){return[{group:"Properties",items:[...e].sort((n,r)=>n.title.localeCompare(r.title)).map(n=>[it(n),n.title])},{group:"Listings",items:[["/search","All properties"],["/search?category=trending","Trending"],["/search?category=upcoming","Upcoming"],["/search?category=newlaunch","New Launch"],["/search?category=commercial","Commercial"],["/search?category=sco","SCO"],["/search?category=branded","Branded residences"],["/search?category=luxury","Luxury projects"],["/property-snaps","Property Snaps"]]},{group:"Locations",items:qn("Gurugram").map(n=>[`/search?location=${n.slug}`,`${n.name}, Gurugram`])},{group:"Budget",items:Kl.map(n=>[`/search?budget=${n.value}`,n.label])},{group:"Pages",items:[["/about","About us"],["/contact","Contact"],["/blog","Blog"]]}]}const Fo="__custom__";function Hf({value:e,onChange:n,properties:r}){var h;const i=Uf(r),s=i.some(d=>d.items.some(([u])=>u===e)),[a,o]=v.useState(!!e&&e!=="#"&&!s),l=!e||e==="#"?"":e,c=(h=i.flatMap(d=>d.items).find(([d])=>d===l))==null?void 0:h[1];return t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsxs("select",{className:"hwa-input no-icon",value:a?Fo:l,onChange:d=>{if(d.target.value===Fo){o(!0);return}o(!1),n(d.target.value)},children:[t.jsx("option",{value:"",children:"Nothing — not clickable"}),i.map(d=>d.items.length>0&&t.jsx("optgroup",{label:d.group,children:d.items.map(([u,p])=>t.jsx("option",{value:u,children:p},u))},d.group)),t.jsx("option",{value:Fo,children:"Other page or website…"})]}),a&&t.jsx("input",{className:"hwa-input no-icon",value:l,onChange:d=>n(d.target.value),placeholder:"/search?q=verano  or  https://example.com",autoFocus:!0}),l&&t.jsxs("span",{className:"hwa-hint",style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:["Opens: ",t.jsx("b",{style:{color:"#3a3627"},children:c||l}),t.jsxs("a",{href:l,target:"_blank",rel:"noreferrer",className:"hwd-link",children:["Test link ",t.jsx(z.external,{})]})]})]})}function Ob({banners:e,run:n,properties:r=[]}){var p;const[i,s]=v.useState("hero"),a=Do[i],o=lr({empty:Tb,run:n,create:g=>H.post(`/banners/${i}`,g),update:(g,b)=>H.put(`/banners/${g.type||i}/${g.id}`,b),remove:g=>H.delete(`/banners/${g.type||i}/${g.id}`),validate:g=>{ze(g.image,"upload an image"),ze(g.title,"enter a title")},labels:{created:"Banner added",updated:"Banner updated",deleted:"Banner deleted"}}),{f:l,set:c}=o,h=e[i]||[],d=Object.keys(Do).reduce((g,b)=>{var k;return g+(((k=e[b])==null?void 0:k.length)||0)},0),u=g=>{if(!g||g==="#")return t.jsx("span",{className:"muted",children:"Not clickable"});const b=Uf(r).flatMap(k=>k.items).find(([k])=>k===g);return t.jsxs("span",{className:"hwl-ellipsis",title:g,children:[t.jsx("b",{children:b?b[1]:g}),b&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("span",{className:"muted",children:g})]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(or,{title:"Banners",count:d,sub:a.where,children:t.jsxs("button",{className:"hwd-btn gold",onClick:()=>o.openNew(),children:[t.jsx(z.plus,{})," Add ",a.one]})}),t.jsx("div",{className:"hwd-seg",style:{margin:"0 0 14px"},children:Object.entries(Do).map(([g,b])=>{var k;return t.jsxs("button",{className:i===g?"on":"",onClick:()=>s(g),children:[b.tab," (",((k=e[g])==null?void 0:k.length)||0,")"]},g)})}),t.jsx(Tn,{id:`banners-${i}`,items:h,main:{aspect:a.thumb,thumb:g=>g.image,title:g=>g.title,sub:g=>g.developer||a.tab},badges:g=>[{text:g.link&&g.link!=="#"?"CLICKABLE":"NO LINK",tone:g.link&&g.link!=="#"?"green":"grey"}],columns:[{label:"Opens when clicked",render:g=>u(g.link)}],actions:g=>[{label:"Edit",icon:z.edit,onClick:o.openEdit,primary:!0},g.link&&g.link!=="#"&&{label:"Open",icon:z.external,href:g.link},{label:"Delete",icon:z.trash,onClick:o.del,danger:!0}],searchText:g=>`${g.title} ${g.developer} ${g.link}`,sorts:[{value:"site",label:"Website order"},{value:"az",label:"Title A–Z",fn:Xa("title")}],empty:i==="hero"?"No hero banners yet.":`No ${a.tab.toLowerCase()} yet — the homepage shows its built-in images until you add one.`,onEmptyAdd:()=>o.openNew(),defaultView:"table"}),t.jsx(ar,{open:o.open,onClose:o.close,title:`${o.editing?"Edit":"Add"} ${a.one}`,sub:a.where,footer:t.jsx(cr,{ed:o,saveLabel:`Add ${a.one}`}),children:t.jsxs("form",{id:"hwl-form",onSubmit:o.save,children:[t.jsx(K,{label:"Image *",children:t.jsx("div",{style:a.narrow?{maxWidth:170}:void 0,children:t.jsx(St,{value:l.image,onChange:c("image"),purpose:a.purpose,aspect:a.aspect,fit:a.fit,maxSide:a.narrow?1800:2200},i)})}),t.jsx(K,{label:"Title *",hint:"Used as the image description (and for your reference)",children:t.jsx(se,{value:l.title,onChange:c("title"),placeholder:"e.g. Godrej Verano — Sector 63A"})}),i==="hero"&&t.jsx(K,{label:"Developer",children:t.jsx(se,{value:l.developer,onChange:c("developer"),placeholder:"e.g. GODREJ PROPERTIES"})}),t.jsx(K,{label:"Opens when clicked",hint:"Pick a property, listing, location or budget — or any other page / website",children:t.jsx(Hf,{value:l.link,onChange:c("link"),properties:r},((p=o.editing)==null?void 0:p.id)||"new")})]})})]})}const Lb={name:"",image:"",count:""};function Mb({locations:e,run:n}){const r=lr({empty:Lb,run:n,create:a=>H.post("/locations",a),update:(a,o)=>H.put(`/locations/${a.id}`,o),remove:a=>H.delete(`/locations/${a.id}`),validate:a=>{ze(a.name,"enter the location name"),ze(a.image,"upload an image")},labels:{created:"Location added",updated:"Location updated",deleted:"Location deleted"}}),{f:i,set:s}=r;return t.jsxs(t.Fragment,{children:[t.jsx(or,{title:"Prime Locations",count:e.length,sub:"The “Gurugram’s Prime Locations” cards on the homepage. Clicking one opens properties in that area.",children:t.jsxs("button",{className:"hwd-btn gold",onClick:()=>r.openNew(),children:[t.jsx(z.plus,{})," Add location"]})}),t.jsx(Tn,{id:"locations",items:e,main:{aspect:"wide",thumb:a=>a.image,title:a=>a.name,sub:a=>a.count},columns:[{label:"Opens",render:a=>t.jsxs("a",{className:"muted hwl-ellipsis",href:`/search?location=${encodeURIComponent(a.name)}`,target:"_blank",rel:"noreferrer",children:["/search?location=",a.name]}),hideSm:!0}],actions:()=>[{label:"Edit",icon:z.edit,onClick:r.openEdit,primary:!0},{label:"Delete",icon:z.trash,onClick:r.del,danger:!0}],searchText:a=>`${a.name} ${a.count}`,sorts:[{value:"site",label:"Website order"},{value:"az",label:"Name A–Z",fn:Xa("name")}],empty:"No locations yet.",onEmptyAdd:()=>r.openNew(),defaultView:"grid"}),t.jsx(ar,{open:r.open,onClose:r.close,title:r.editing?"Edit location":"Add a location",footer:t.jsx(cr,{ed:r,saveLabel:"Add location"}),children:t.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[t.jsx(K,{label:"Image *",children:t.jsx(St,{value:i.image,onChange:s("image"),purpose:"location",aspect:"4 / 3"})}),t.jsx(K,{label:"Location name *",hint:"Use the locality name, e.g. Golf Course Road — the card links to its properties",children:t.jsx(se,{value:i.name,onChange:s("name"),placeholder:"e.g. Golf Course Road"})}),t.jsx(K,{label:"Count text",hint:"Shown under the name",children:t.jsx(se,{value:i.count,onChange:s("count"),placeholder:"e.g. 142 Projects"})})]})})]})}const zb={title:"",price:"",location:"",image:"",badge:""};function Ib({offers:e,run:n}){const r=lr({empty:zb,run:n,create:a=>H.post("/offers",a),update:(a,o)=>H.put(`/offers/${a.id}`,o),remove:a=>H.delete(`/offers/${a.id}`),validate:a=>{ze(a.title,"enter the project name"),ze(a.image,"upload an image")},labels:{created:"Offer added",updated:"Offer updated",deleted:"Offer deleted"}}),{f:i,set:s}=r;return t.jsxs(t.Fragment,{children:[t.jsx(or,{title:"Festival Offers",count:e.length,sub:"Deals shown in the “Best Festival Offer” section on the homepage.",children:t.jsxs("button",{className:"hwd-btn gold",onClick:()=>r.openNew(),children:[t.jsx(z.plus,{})," Add offer"]})}),t.jsx(Tn,{id:"offers",items:e,main:{aspect:"wide",thumb:a=>a.image,title:a=>a.title,sub:a=>a.location},badges:a=>[a.badge&&{text:a.badge,tone:"gold"}],columns:[{label:"Price",render:a=>t.jsx("span",{className:"gold",children:a.price})},{label:"Location",render:a=>t.jsx("span",{className:"muted hwl-ellipsis",children:a.location}),hideSm:!0,hideGrid:!0}],actions:()=>[{label:"Edit",icon:z.edit,onClick:r.openEdit,primary:!0},{label:"Delete",icon:z.trash,onClick:r.del,danger:!0}],searchText:a=>`${a.title} ${a.location} ${a.badge} ${a.price}`,sorts:[{value:"site",label:"Website order"},{value:"az",label:"Name A–Z",fn:Xa("title")}],empty:"No offers yet.",onEmptyAdd:()=>r.openNew(),defaultView:"grid"}),t.jsx(ar,{open:r.open,onClose:r.close,title:r.editing?"Edit offer":"Add an offer",footer:t.jsx(cr,{ed:r,saveLabel:"Add offer"}),children:t.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[t.jsx(K,{label:"Image *",children:t.jsx(St,{value:i.image,onChange:s("image"),purpose:"offer",aspect:"3 / 2"})}),t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Project *",full:!0,children:t.jsx(se,{value:i.title,onChange:s("title"),placeholder:"e.g. BPTP DownTown 66"})}),t.jsx(K,{label:"Price",children:t.jsx(se,{value:i.price,onChange:s("price"),placeholder:"₹5.20 Cr"})}),t.jsx(K,{label:"Badge",children:t.jsx(se,{value:i.badge,onChange:s("badge"),placeholder:"NAVRATRI SPECIAL"})}),t.jsx(K,{label:"Location",full:!0,children:t.jsx(se,{value:i.location,onChange:s("location"),placeholder:"Sector 66, Gurugram"})})]})]})})]})}const Bb={title:"",image:"",price:"",location:"",link:"",badge:"Founder Choice"};function Db({items:e,run:n,properties:r=[]}){var u;const i=lr({empty:Bb,run:n,create:p=>H.post("/recommended",p),update:(p,g)=>H.put(`/recommended/${p.id}`,g),remove:p=>H.delete(`/recommended/${p.id}`),validate:p=>{ze(p.title,"enter the name"),ze(p.image,"upload an image")},labels:{created:"Added to Recommended",updated:"Recommended card updated",deleted:"Removed from Recommended"}}),{f:s,set:a,setF:o}=i,[l,c]=v.useState(0),h=(p,g)=>{const b=[...e],k=b.findIndex(f=>f.id===p.id),P=k+g;P<0||P>=b.length||([b[k],b[P]]=[b[P],b[k]],n(()=>Promise.all(b.map((f,m)=>f.order===m?null:H.put(`/recommended/${f.id}`,{order:m}))),"Order updated"))},d=p=>{const g=r.find(b=>b.id===p);g&&(o(b=>({...b,title:g.title,image:g.image||b.image,price:g.price||g.priceRange||"",location:g.location||"",link:it(g)})),c(b=>b+1))};return t.jsxs(t.Fragment,{children:[t.jsx(or,{title:"Recommended",count:e.length,sub:"The “HomWisor Recommended” cards on the homepage. The first 4 are shown, in this order — use ↑ ↓ to reorder.",children:t.jsxs("button",{className:"hwd-btn gold",onClick:()=>i.openNew(),children:[t.jsx(z.plus,{})," Add recommended"]})}),t.jsx(Tn,{id:"recommended",items:e,main:{aspect:"square",thumb:p=>p.image,title:p=>p.title,sub:p=>p.location},badges:p=>{const g=e.findIndex(b=>b.id===p.id);return[{text:g<4?`#${g+1} ON HOMEPAGE`:"HIDDEN (after 4th)",tone:g<4?"dark":"grey"},p.badge&&{text:p.badge.toUpperCase(),tone:"gold"}]},columns:[{label:"Price",render:p=>t.jsx("span",{className:"gold",children:p.price||"—"})},{label:"Opens",render:p=>t.jsx("span",{className:"muted hwl-ellipsis",title:p.link,children:p.link||"Not clickable"}),hideSm:!0}],actions:p=>{const g=e.findIndex(b=>b.id===p.id);return[{label:"Edit",icon:z.edit,onClick:i.openEdit,primary:!0},g>0&&{label:"Move up",icon:()=>t.jsx("span",{style:{fontWeight:900},children:"↑"}),onClick:()=>h(p,-1)},g<e.length-1&&{label:"Move down",icon:()=>t.jsx("span",{style:{fontWeight:900},children:"↓"}),onClick:()=>h(p,1)},{label:"Delete",icon:z.trash,onClick:i.del,danger:!0}]},searchText:p=>`${p.title} ${p.location} ${p.price}`,sorts:[{value:"site",label:"Homepage order"}],empty:"No recommended cards yet — the homepage section is hidden until you add one.",onEmptyAdd:()=>i.openNew(),defaultView:"table"}),t.jsx(ar,{open:i.open,onClose:i.close,title:i.editing?"Edit recommended card":"Add recommended card",sub:"Shown in the “HomWisor Recommended” section on the homepage.",footer:t.jsx(cr,{ed:i,saveLabel:"Add to Recommended"}),children:t.jsxs("form",{id:"hwl-form",onSubmit:i.save,children:[!i.editing&&r.length>0&&t.jsx(K,{label:"Fill from a property (optional)",hint:"Copies the name, photo, price, location and link — you can still change anything",children:t.jsxs("select",{className:"hwa-input no-icon",defaultValue:"",onChange:p=>d(p.target.value),children:[t.jsx("option",{value:"",children:"Choose a property…"}),[...r].sort((p,g)=>p.title.localeCompare(g.title)).map(p=>t.jsx("option",{value:p.id,children:p.title},p.id))]})}),t.jsx(K,{label:"Image *",children:t.jsx("div",{style:{maxWidth:300},children:t.jsx(St,{value:s.image,onChange:a("image"),purpose:"recommended",aspect:"46 / 45"})})}),t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Name *",full:!0,children:t.jsx(se,{value:s.title,onChange:a("title"),placeholder:"e.g. M3M Brabus Residences"})}),t.jsx(K,{label:"Price",children:t.jsx(se,{value:s.price,onChange:a("price"),placeholder:"e.g. ₹20.00 Cr"})}),t.jsx(K,{label:"Badge",hint:"Pill on the top-left of the card",children:t.jsx(se,{value:s.badge,onChange:a("badge"),placeholder:"Founder Choice"})}),t.jsx(K,{label:"Location",full:!0,children:t.jsx(se,{value:s.location,onChange:a("location"),placeholder:"e.g. Sector 58, Golf Course Extension Road, Gurugram"})})]}),t.jsx(K,{label:"Opens when clicked",children:t.jsx(Hf,{value:s.link,onChange:a("link"),properties:r},`${((u=i.editing)==null?void 0:u.id)||"new"}-${l}`)})]})})]})}const Ql=()=>new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10),Lr={heading:"",text:"",image:""},Fb={title:"",slug:"",category:_r[0],excerpt:"",image:"",content:[{...Lr}],author:"HomWisor Insights",tags:"",status:"published",featured:!1,publishedAt:"",seoTitle:"",seoDescription:""},Zl=e=>e.status==="published"&&new Date(e.publishedAt)<=new Date,Wo=e=>e.status==="draft"?"Draft":Zl(e)?"Published":"Scheduled";function Wb({rows:e,onChange:n}){const r=(a,o,l)=>n(e.map((c,h)=>h===a?{...c,[o]:l}:c)),i=(a,o)=>{const l=a+o;if(l<0||l>=e.length)return;const c=[...e];[c[a],c[l]]=[c[l],c[a]],n(c)},s=a=>n(e.length>1?e.filter((o,l)=>l!==a):[{...Lr}]);return t.jsxs("div",{className:"hwb-sections",children:[e.map((a,o)=>t.jsxs("div",{className:"hwb-section",children:[t.jsxs("div",{className:"hwb-section-head",children:[t.jsx("span",{className:"hwb-no",children:o+1}),t.jsx("input",{className:"hwa-input no-icon",value:a.heading,onChange:l=>r(o,"heading",l.target.value),placeholder:"Section heading, e.g. Why connectivity matters"}),t.jsx("button",{type:"button",className:"hwb-icon",onClick:()=>i(o,-1),disabled:o===0,"aria-label":"Move up",children:"↑"}),t.jsx("button",{type:"button",className:"hwb-icon",onClick:()=>i(o,1),disabled:o===e.length-1,"aria-label":"Move down",children:"↓"}),t.jsx("button",{type:"button",className:"hwb-icon danger",onClick:()=>s(o),"aria-label":"Remove section",children:"✕"})]}),t.jsx("textarea",{className:"hwa-input no-icon hwb-text",rows:6,value:a.text,onChange:l=>r(o,"text",l.target.value),placeholder:"Write this part of the article. Leave an empty line between paragraphs."}),a.image||a.withImage?t.jsxs("div",{className:"hwb-secimg",children:[t.jsx(St,{value:a.image,onChange:l=>n(e.map((c,h)=>h===o?{...c,image:l,withImage:!!l}:c)),purpose:"blog",aspect:"16 / 9"}),!a.image&&t.jsx("button",{type:"button",className:"hwb-addimg",onClick:()=>r(o,"withImage",!1),children:"Cancel photo"})]}):t.jsx("button",{type:"button",className:"hwb-addimg",onClick:()=>r(o,"withImage",!0),children:"+ Add a photo to this section"})]},o)),t.jsx("button",{type:"button",className:"hwb-add",onClick:()=>n([...e,{...Lr}]),children:"+ Add section"})]})}function Ub({blogs:e,run:n}){var N;const r=lr({empty:Fb,run:n,create:w=>H.post("/blogs",fu(w)),update:(w,T)=>H.put(`/blogs/${w.id}`,fu(T)),remove:w=>H.delete(`/blogs/${w.id}`),validate:w=>{ze(w.title.trim(),"enter a title"),ze(w.image,"upload a cover photo"),ze(w.excerpt.trim(),"write a short summary"),ze(w.content.some(T=>T.text.trim()),"write the article text")},labels:{created:"Article saved",updated:"Article updated",deleted:"Article deleted"}}),{f:i,set:s,setF:a}=r,[o,l]=v.useState(""),[c,h]=v.useState(!1),[d,u]=v.useState(!1),p=[...new Set([..._r,...e.map(w=>w.category).filter(Boolean)])],g=async w=>{var T;l(w.id);try{const{data:y}=await H.get(`/blogs/admin/${w.id}`);r.openEdit({...y,tags:(y.tags||[]).join(", "),publishedAt:y.publishedAt?String(y.publishedAt).slice(0,10):Ql(),content:(T=y.content)!=null&&T.length?y.content.map(j=>({...Lr,...j})):[{...Lr}]}),h(!0),u(!1)}catch(y){n(()=>{throw y})}l("")},b=()=>{r.openNew({publishedAt:Ql(),content:[{...Lr}]}),h(!1),u(!1)},k=w=>a(T=>({...T,title:w,slug:c?T.slug:Xe(w)})),P=w=>n(()=>H.put(`/blogs/${w.id}`,{featured:!w.featured}),w.featured?"Removed from featured":"Set as the featured article"),f=w=>n(()=>H.put(`/blogs/${w.id}`,{status:w.status==="draft"?"published":"draft"}),w.status==="draft"?"Article published":"Moved to drafts"),m=e.filter(Zl).length,x=i.content.map(w=>w.text).join(" ").split(/\s+/).filter(Boolean).length;return t.jsxs(t.Fragment,{children:[t.jsxs(or,{title:"Blog",count:e.length,sub:`Articles on the website’s Blog page — ${m} live, ${e.length-m} draft or scheduled. The newest featured article is shown big at the top.`,children:[t.jsxs("a",{className:"hwd-btn",href:"/blog",target:"_blank",rel:"noreferrer",children:[t.jsx(z.external,{})," View blog"]}),t.jsxs("button",{className:"hwd-btn gold",onClick:b,children:[t.jsx(z.plus,{})," Write article"]})]}),t.jsx(Tn,{id:"blogs",items:e,main:{aspect:"wide",thumb:w=>w.image,title:w=>w.title,sub:w=>`${w.category} · ${w.author||"HomWisor"}`},badges:w=>[w.featured&&{text:"★ Featured",tone:"gold"},{text:Wo(w),tone:Wo(w)==="Published"?"green":Wo(w)==="Draft"?"grey":"dark"}],columns:[{label:"Date",render:w=>t.jsx("span",{className:"muted",children:Qi(w.publishedAt)})},{label:"Category",render:w=>t.jsx("span",{children:w.category}),hideSm:!0}],actions:w=>[{label:o===w.id?"Opening…":"Edit",icon:z.edit,onClick:g,primary:!0},Zl(w)&&{label:"View",icon:z.external,href:mn(w)},{label:w.featured?"Unfeature":"Feature",icon:z.star,onClick:P},{label:w.status==="draft"?"Publish":"Unpublish",icon:z.eye,onClick:f},{label:"Delete",icon:z.trash,onClick:r.del,danger:!0}].filter(Boolean),searchText:w=>`${w.title} ${w.category} ${w.excerpt} ${(w.tags||[]).join(" ")}`,sorts:[{value:"new",label:"Newest first",fn:(w,T)=>String(T.publishedAt).localeCompare(String(w.publishedAt))},{value:"old",label:"Oldest first",fn:(w,T)=>String(w.publishedAt).localeCompare(String(T.publishedAt))},{value:"az",label:"Title A–Z",fn:(w,T)=>w.title.localeCompare(T.title)}],empty:"No articles yet.",onEmptyAdd:b,emptyAddLabel:"Write the first article",defaultView:"grid"}),t.jsx(ar,{wide:!0,open:r.open,onClose:r.close,title:r.editing?"Edit article":"Write an article",sub:`${x} words · about ${Vl({excerpt:i.excerpt,content:i.content})} min read`,footer:t.jsx(cr,{ed:r,saveLabel:i.status==="draft"?"Save draft":"Publish article"}),children:t.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Title *",full:!0,children:t.jsx(se,{value:i.title,onChange:k,placeholder:"e.g. Sector 49 Gurgaon: Prices & Metro Expansion"})}),t.jsx(K,{label:"Web address (slug)",full:!0,hint:(N=r.editing)!=null&&N.slug&&Xe(i.slug)!==r.editing.slug?`Old link /${r.editing.slug} will redirect to the new one`:"Lowercase words joined by hyphens — made from the title, or type your own",children:t.jsxs("div",{className:"hwp-slug",children:[t.jsx("span",{children:"homwisor.com/"}),t.jsx(se,{value:i.slug,onChange:w=>{h(!0),s("slug")(kf(w))},onBlur:()=>s("slug")(Xe(i.slug||i.title)),placeholder:Xe(i.title)||"made-from-the-title"}),i.title&&Xe(i.title)!==i.slug&&t.jsx("button",{type:"button",className:"hwd-btn",style:{marginLeft:8,height:38,padding:"0 12px"},onClick:()=>{h(!1),s("slug")(Xe(i.title))},children:"Use title"})]})})]}),t.jsx(K,{label:"Cover photo *",children:t.jsx(St,{value:i.image,onChange:s("image"),purpose:"blog",aspect:"16 / 9"})}),t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Category",children:d?t.jsxs("div",{className:"hwb-inline",children:[t.jsx(se,{value:i.category,onChange:s("category"),placeholder:"New category name",autoFocus:!0}),t.jsx("button",{type:"button",className:"hwd-btn",onClick:()=>{u(!1),s("category")(p[0])},children:"Cancel"})]}):t.jsxs("select",{className:"hwa-input no-icon",value:i.category,onChange:w=>w.target.value==="__new"?(u(!0),s("category")("")):s("category")(w.target.value),children:[p.map(w=>t.jsx("option",{children:w},w)),t.jsx("option",{value:"__new",children:"+ New category…"})]})}),t.jsx(K,{label:"Author",children:t.jsx(se,{value:i.author,onChange:s("author"),placeholder:"HomWisor Insights"})}),t.jsx(K,{label:"Status",children:t.jsx("div",{className:"hwb-seg",children:[["published","Published"],["draft","Draft"]].map(([w,T])=>t.jsx("button",{type:"button",className:i.status===w?"on":"",onClick:()=>s("status")(w),children:T},w))})}),t.jsx(K,{label:"Publish date",hint:"A future date schedules the article",children:t.jsx("input",{type:"date",className:"hwa-input no-icon",value:i.publishedAt,onChange:w=>s("publishedAt")(w.target.value)})}),t.jsx(K,{label:"Featured",full:!0,children:t.jsxs("label",{className:"hwb-check",children:[t.jsx("input",{type:"checkbox",checked:!!i.featured,onChange:w=>s("featured")(w.target.checked)})," Show as the big “Featured insight” at the top of the blog (replaces the current one)"]})}),t.jsx(K,{label:"Summary *",full:!0,hint:"1–2 sentences — shown on the article cards and as the intro",children:t.jsx("textarea",{className:"hwa-input no-icon hwb-text",rows:3,value:i.excerpt,onChange:w=>s("excerpt")(w.target.value),placeholder:"Explore connectivity, location advantages and…"})})]}),t.jsx(K,{label:"Article *",hint:"Split the article into sections, each with a heading. Leave an empty line between paragraphs.",children:t.jsx(Wb,{rows:i.content,onChange:s("content")})}),t.jsxs("details",{className:"hwb-more",children:[t.jsx("summary",{children:"Tags & Google (SEO)"}),t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Tags",full:!0,hint:"Comma separated, e.g. Metro, Gurgaon, Investment",children:t.jsx(se,{value:i.tags,onChange:s("tags")})}),t.jsx(K,{label:"Google title",full:!0,hint:`${(i.seoTitle||i.title).length}/60 — defaults to the title`,children:t.jsx(se,{value:i.seoTitle,onChange:s("seoTitle"),placeholder:i.title})}),t.jsx(K,{label:"Google description",full:!0,hint:`${(i.seoDescription||i.excerpt).length}/160 — defaults to the summary`,children:t.jsx("textarea",{className:"hwa-input no-icon hwb-text",rows:2,value:i.seoDescription,onChange:w=>s("seoDescription")(w.target.value),placeholder:i.excerpt})})]})]})]})})]})}function fu(e){return{...e,title:e.title.trim(),category:(e.category||"").trim()||_r[0],slug:Xe(e.slug||e.title),tags:String(e.tags||"").split(",").map(n=>n.trim()).filter(Boolean),content:e.content.map(n=>({heading:n.heading.trim(),text:n.text.trim(),image:(n.image||"").trim()})).filter(n=>n.heading||n.text||n.image),publishedAt:e.publishedAt?new Date(`${e.publishedAt}T${e.publishedAt===Ql()?new Date().toTimeString().slice(0,8):"06:00:00"}`).toISOString():new Date().toISOString()}}const Hb=["Google","Facebook","Justdial","Website","Other"],gu=4,Jl=[["#F3E7C2","#5b4a16"],["#F59E0B","#ffffff"],["#10B981","#ffffff"],["#E9D5FF","#6B21A8"],["#DBEAFE","#1E40AF"],["#FECACA","#991B1B"],["#D6D3D1","#44403C"],["#0b0b0b","#E8C766"]],$b={name:"",role:"",text:"",photo:"",rating:5,platform:"Google",verified:!0,active:!0,color:Jl[0][0],textColor:Jl[0][1]},ec=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase(),Uo=600;function _b({t:e,size:n=44}){return t.jsx("span",{className:"hwt-avatar",style:{width:n,height:n,background:e.color,color:e.textColor,fontSize:n*.36},children:e.photo?t.jsx("img",{src:e.photo,alt:""}):ec(e.name)||"?"})}function Ho({value:e,onChange:n}){return t.jsx("div",{className:"hwt-stars",role:n?"radiogroup":void 0,children:[1,2,3,4,5].map(r=>n?t.jsx("button",{type:"button",className:r<=e?"on":"",onClick:()=>n(r),"aria-label":`${r} star${r>1?"s":""}`,children:"★"},r):t.jsx("span",{className:r<=e?"on":"",children:"★"},r))})}function Gb({items:e,run:n}){const r=lr({empty:$b,run:n,create:d=>H.post("/testimonials",d),update:(d,u)=>H.put(`/testimonials/${d.id}`,u),remove:d=>H.delete(`/testimonials/${d.id}`),validate:d=>{if(ze(d.name.trim(),"enter the customer's name"),ze(d.text.trim(),"write the review"),d.text.length>Uo)throw new Error(`Please keep the review under ${Uo} characters`)},labels:{created:"Testimonial added",updated:"Testimonial updated",deleted:"Testimonial deleted"}}),{f:i,set:s,setF:a}=r,o=e.filter(d=>d.active!==!1),l=new Set(o.slice(0,gu).map(d=>d.id)),c=(d,u)=>{const p=[...e],g=p.findIndex(k=>k.id===d.id),b=g+u;b<0||b>=p.length||([p[g],p[b]]=[p[b],p[g]],n(()=>Promise.all(p.map((k,P)=>k.order===P?null:H.put(`/testimonials/${k.id}`,{order:P}))),"Order updated"))},h=d=>n(()=>H.put(`/testimonials/${d.id}`,{active:d.active===!1}),d.active===!1?"Shown on the website":"Hidden from the website");return t.jsxs(t.Fragment,{children:[t.jsx(or,{title:"Testimonials",count:e.length,sub:`Customer reviews on the homepage and About page. The first ${gu} visible ones are shown, in this order — use ↑ ↓ to reorder.`,children:t.jsxs("button",{className:"hwd-btn gold",onClick:()=>r.openNew(),children:[t.jsx(z.plus,{})," Add testimonial"]})}),t.jsx(Tn,{id:"testimonials",items:e,main:{aspect:"square",thumb:d=>d.photo,overlay:d=>!d.photo&&t.jsx("span",{className:"hwt-thumb-initials",style:{background:d.color,color:d.textColor},children:d.initials||ec(d.name)}),title:d=>d.name,sub:d=>d.role||`${d.platform||"Google"} review`},badges:d=>[d.active===!1?{text:"Hidden",tone:"grey"}:l.has(d.id)?{text:"On website",tone:"green"}:{text:"Not in top 4",tone:"dark"},d.verified!==!1&&{text:"Verified",tone:"gold"}],columns:[{label:"Rating",render:d=>t.jsx(Ho,{value:d.rating||5})},{label:"Review",render:d=>t.jsxs("span",{className:"muted hwt-clip",children:["“",d.text,"”"]}),hideSm:!0}],actions:d=>{const u=e.findIndex(p=>p.id===d.id);return[{label:"Edit",icon:z.edit,onClick:r.openEdit,primary:!0},u>0&&{label:"Move up",icon:()=>t.jsx("span",{style:{fontWeight:900},children:"↑"}),onClick:()=>c(d,-1)},u<e.length-1&&{label:"Move down",icon:()=>t.jsx("span",{style:{fontWeight:900},children:"↓"}),onClick:()=>c(d,1)},{label:d.active===!1?"Show":"Hide",icon:z.eye,onClick:h},{label:"Delete",icon:z.trash,onClick:r.del,danger:!0}].filter(Boolean)},searchText:d=>`${d.name} ${d.role} ${d.text} ${d.platform}`,sorts:[{value:"site",label:"Website order"},{value:"az",label:"Name A–Z",fn:(d,u)=>d.name.localeCompare(u.name)}],empty:"No testimonials yet — the website will hide this section until you add one.",onEmptyAdd:()=>r.openNew(),emptyAddLabel:"Add the first testimonial"}),t.jsx(ar,{open:r.open,onClose:r.close,title:r.editing?"Edit testimonial":"Add a testimonial",footer:t.jsx(cr,{ed:r,saveLabel:"Add testimonial"}),children:t.jsxs("form",{id:"hwl-form",onSubmit:r.save,children:[t.jsxs("div",{className:"hwt-preview",children:[t.jsxs("div",{className:"hwt-preview-top",children:[t.jsx("span",{className:"hwt-quote",style:{background:i.color,color:i.textColor},children:"“"}),i.platform!=="Other"&&t.jsx("span",{className:"hwt-platform",children:i.platform})]}),t.jsx(Ho,{value:i.rating}),t.jsxs("p",{children:["“",i.text||"The review will appear here…","”"]}),t.jsxs("div",{className:"hwt-preview-user",children:[t.jsx(_b,{t:i}),t.jsxs("div",{children:[t.jsx("strong",{children:i.name||"Customer name"}),t.jsx("small",{children:i.role||(i.verified?"VERIFIED BUYER":"")})]})]})]}),t.jsxs("div",{className:"hwd-form-grid",children:[t.jsx(K,{label:"Customer name *",children:t.jsx(se,{value:i.name,onChange:s("name"),placeholder:"e.g. Neha Gupta"})}),t.jsx(K,{label:"Line under the name",hint:"Optional — e.g. Bought a 3 BHK at DLF Privana",children:t.jsx(se,{value:i.role,onChange:s("role"),placeholder:"Verified buyer"})}),t.jsx(K,{label:"Review *",full:!0,hint:`${i.text.length}/${Uo} characters — about 150–250 reads best`,children:t.jsx("textarea",{className:"hwa-input no-icon hwt-textarea",rows:5,value:i.text,onChange:d=>s("text")(d.target.value),placeholder:"What did the customer say about HomWisor?"})}),t.jsx(K,{label:"Rating",children:t.jsx(Ho,{value:i.rating,onChange:s("rating")})}),t.jsx(K,{label:"Review from",children:t.jsx("select",{className:"hwa-input no-icon",value:i.platform,onChange:d=>s("platform")(d.target.value),children:Hb.map(d=>t.jsx("option",{children:d},d))})}),t.jsx(K,{label:"Avatar colour",full:!0,hint:"Used when there's no photo, and for the quote mark",children:t.jsx("div",{className:"hwt-swatches",children:Jl.map(([d,u])=>t.jsx("button",{type:"button",className:i.color===d?"on":"",style:{background:d,color:u},onClick:()=>a(p=>({...p,color:d,textColor:u})),"aria-label":`Colour ${d}`,children:ec(i.name)||"Aa"},d))})}),t.jsx(K,{label:"Customer photo",full:!0,hint:"Optional — a square photo replaces the initials",children:t.jsx("div",{style:{maxWidth:200},children:t.jsx(St,{value:i.photo,onChange:s("photo"),purpose:"avatar",aspect:"1 / 1"})})}),t.jsxs(K,{label:"Options",full:!0,children:[t.jsxs("label",{className:"hwt-check",children:[t.jsx("input",{type:"checkbox",checked:!!i.verified,onChange:d=>s("verified")(d.target.checked)})," Show “Verified buyer” (when there's no line under the name)"]}),t.jsxs("label",{className:"hwt-check",children:[t.jsx("input",{type:"checkbox",checked:i.active!==!1,onChange:d=>s("active")(d.target.checked)})," Show on the website"]})]})]})]})})]})}const Mr=()=>new Date().toISOString().slice(0,10),Vb=(e,n)=>{var r,i;return((i=(r=e.response)==null?void 0:r.data)==null?void 0:i.error)||(e.response?n:e.message)||n};function qb({title:e,count:n,sub:r,children:i}){return t.jsxs("div",{className:"hwd-page-head",children:[t.jsxs("div",{children:[t.jsxs("h1",{children:[e,n!==void 0&&t.jsxs("span",{className:"count",children:["(",n,")"]})]}),r&&t.jsx("p",{children:r})]}),i]})}function tc({icon:e=z.grid,children:n}){return t.jsxs("div",{className:"hwd-empty",children:[t.jsx(e,{}),t.jsx("div",{children:n})]})}const Kb=[{group:"Main",items:[{id:"overview",label:"Overview",icon:z.grid},{id:"enquiries",label:"Enquiries",icon:z.chat,count:"enqs",hot:!0}]},{group:"Listings",items:[{id:"properties",label:"Properties",icon:z.building,count:"props"},{id:"snaps",label:"Property Snaps",icon:z.film,count:"snaps"}]},{group:"Homepage",items:[{id:"recommended",label:"Recommended",icon:z.star,count:"recs"},{id:"banners",label:"Banners",icon:z.image},{id:"locations",label:"Prime Locations",icon:z.pin},{id:"offers",label:"Festival Offers",icon:z.gift},{id:"testimonials",label:"Testimonials",icon:z.users,count:"testis"}]},{group:"Content",items:[{id:"blog",label:"Blog",icon:z.edit,count:"blogs"}]},{group:"Account",items:[{id:"admins",label:"Admins & Security",altLabel:"My Account",icon:z.shield}]}],Yb={overview:"Overview",enquiries:"Enquiries",properties:"Properties",snaps:"Property Snaps",recommended:"Recommended",banners:"Banners",locations:"Prime Locations",offers:"Festival Offers",blog:"Blog",testimonials:"Testimonials",admins:"Admins & Security"};function Xb({me:e,props:n,enqs:r,snaps:i,offers:s,locations:a,banners:o,recs:l,stats:c,isSuper:h,go:d,openProperties:u,reset:p}){var x;const g=new Date().getHours(),b=g<12?"Good morning":g<17?"Good afternoon":"Good evening",k=r.filter(N=>N.date===Mr()).length,P=Vr.map(N=>({...N,n:n.filter(w=>w.category===N.id).length})),f=Math.max(1,...P.map(N=>N.n)),m=((e==null?void 0:e.name)||"").split(" ")[0]||"there";return t.jsxs(t.Fragment,{children:[t.jsxs("section",{className:"hwd-hero",children:[t.jsxs("div",{style:{position:"relative",zIndex:1},children:[t.jsx("div",{className:"hwd-hero-date",children:new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long"})}),t.jsxs("h1",{children:[b,", ",m]}),t.jsxs("p",{children:[k>0?`You have ${k} new enquir${k===1?"y":"ies"} today. `:"No new enquiries today yet. ","Everything you publish here goes live on HomWisor.com instantly."]})]}),t.jsxs("div",{className:"hwd-hero-actions",children:[t.jsxs("button",{className:"hwd-btn gold",onClick:()=>u("all",!0),children:[t.jsx(z.plus,{})," Add Property"]}),t.jsxs("a",{className:"hwd-btn",href:"/",target:"_blank",rel:"noreferrer",children:[t.jsx(z.external,{})," View Website"]})]})]}),t.jsxs("div",{className:"hwd-stats",children:[t.jsxs("button",{className:"hwd-stat",onClick:()=>d("properties"),children:[t.jsxs("div",{className:"hwd-stat-top",children:[t.jsx("span",{className:"hwd-stat-label",children:"Properties"}),t.jsx("span",{className:"hwd-stat-ic",children:t.jsx(z.building,{})})]}),t.jsx("div",{className:"hwd-stat-value",children:n.length}),t.jsxs("div",{className:"hwd-stat-sub",children:[t.jsx("span",{className:"hwd-dot"})," Live across ",P.filter(N=>N.n).length," sections"]})]}),t.jsxs("button",{className:"hwd-stat",onClick:()=>d("enquiries"),children:[t.jsxs("div",{className:"hwd-stat-top",children:[t.jsx("span",{className:"hwd-stat-label",children:"Enquiries"}),t.jsx("span",{className:"hwd-stat-ic",children:t.jsx(z.chat,{})})]}),t.jsx("div",{className:"hwd-stat-value",children:r.length}),t.jsx("div",{className:"hwd-stat-sub",children:k>0?t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"up",children:["+",k]})," today"]}):"No new leads today"})]}),t.jsxs("button",{className:"hwd-stat",onClick:()=>d("snaps"),children:[t.jsxs("div",{className:"hwd-stat-top",children:[t.jsx("span",{className:"hwd-stat-label",children:"Property Snaps"}),t.jsx("span",{className:"hwd-stat-ic",children:t.jsx(z.film,{})})]}),t.jsx("div",{className:"hwd-stat-value",children:i.length}),t.jsx("div",{className:"hwd-stat-sub",children:"Video reels on /property-snaps"})]}),t.jsxs("button",{className:"hwd-stat",onClick:()=>d("offers"),children:[t.jsxs("div",{className:"hwd-stat-top",children:[t.jsx("span",{className:"hwd-stat-label",children:"Festival Offers"}),t.jsx("span",{className:"hwd-stat-ic",children:t.jsx(z.gift,{})})]}),t.jsx("div",{className:"hwd-stat-value",children:s.length}),t.jsx("div",{className:"hwd-stat-sub",children:"Shown in “Best Festival Offer”"})]})]}),t.jsxs("div",{className:"hwd-row r-2-1",children:[t.jsxs("div",{className:"hwd-card",children:[t.jsxs("div",{className:"hwd-card-head",children:[t.jsxs("h3",{children:[t.jsx("span",{className:"ic",children:t.jsx(z.trend,{})})," Listings by section"]}),t.jsxs("button",{className:"hwd-link",onClick:()=>d("properties"),children:["Manage ",t.jsx(z.arrow,{})]})]}),t.jsx("div",{className:"hwd-bars",children:P.map(N=>t.jsxs("button",{className:"hwd-bar",onClick:()=>u(N.id),title:N.shows,children:[t.jsxs("span",{className:"hwd-bar-label",children:[N.icon," ",N.label]}),t.jsx("span",{className:"hwd-bar-track",children:t.jsx("span",{className:"hwd-bar-fill",style:{width:`${N.n/f*100}%`}})}),t.jsx("span",{className:"hwd-bar-num",children:N.n})]},N.id))})]}),t.jsxs("div",{className:"hwd-card",children:[t.jsx("div",{className:"hwd-card-head",children:t.jsxs("h3",{children:[t.jsx("span",{className:"ic",children:t.jsx(z.plus,{})})," Quick actions"]})}),t.jsxs("div",{className:"hwd-quick",children:[t.jsxs("button",{className:"hwd-q",onClick:()=>u("all",!0),children:[t.jsx("span",{className:"ic",children:t.jsx(z.building,{})}),t.jsxs("div",{children:[t.jsx("strong",{children:"Add property"}),t.jsx("span",{children:"Step-by-step form"})]})]}),t.jsxs("button",{className:"hwd-q",onClick:()=>d("snaps"),children:[t.jsx("span",{className:"ic",children:t.jsx(z.film,{})}),t.jsxs("div",{children:[t.jsx("strong",{children:"Add snap"}),t.jsx("span",{children:"Video reel"})]})]}),t.jsxs("button",{className:"hwd-q",onClick:()=>d("banners"),children:[t.jsx("span",{className:"ic",children:t.jsx(z.image,{})}),t.jsxs("div",{children:[t.jsx("strong",{children:"Add banner"}),t.jsx("span",{children:"Homepage slider"})]})]}),t.jsxs("button",{className:"hwd-q",onClick:()=>d("offers"),children:[t.jsx("span",{className:"ic",children:t.jsx(z.gift,{})}),t.jsxs("div",{children:[t.jsx("strong",{children:"Add offer"}),t.jsx("span",{children:"Festival deal"})]})]})]}),h&&t.jsxs("button",{className:"hwd-btn danger",style:{width:"100%",marginTop:12},onClick:p,children:[t.jsx(z.refresh,{})," Reset all data to demo"]})]})]}),t.jsxs("div",{className:"hwd-row r-1-1",children:[t.jsxs("div",{className:"hwd-card",children:[t.jsxs("div",{className:"hwd-card-head",children:[t.jsxs("h3",{children:[t.jsx("span",{className:"ic",children:t.jsx(z.chat,{})})," Latest enquiries"]}),t.jsxs("button",{className:"hwd-link",onClick:()=>d("enquiries"),children:["View all ",t.jsx(z.arrow,{})]})]}),r.length===0?t.jsx(tc,{icon:z.chat,children:"No enquiries yet. Leads from property pages appear here."}):t.jsx("div",{className:"hwd-list",children:r.slice(0,5).map(N=>t.jsxs("div",{className:"hwd-li",children:[t.jsx("span",{className:"hwd-initial",children:(N.name||"?").slice(0,1).toUpperCase()}),t.jsxs("div",{className:"hwd-li-body",children:[t.jsxs("strong",{children:[N.name||"Unknown"," ",N.date===Mr()&&t.jsx("span",{className:"hwd-new",style:{display:"inline",marginLeft:6},children:"NEW"})]}),t.jsxs("span",{children:[N.property||"—"," · ",N.date]})]}),N.phone&&t.jsx("a",{className:"hwd-round",href:`tel:${N.phone}`,title:"Call",children:t.jsx(z.phone,{})}),N.phone&&t.jsx("a",{className:"hwd-round wa",href:`https://wa.me/91${N.phone.replace(/\D/g,"").slice(-10)}`,target:"_blank",rel:"noreferrer",title:"WhatsApp",children:t.jsx(z.whatsapp,{})})]},N.id))})]}),t.jsxs("div",{className:"hwd-card",children:[t.jsxs("div",{className:"hwd-card-head",children:[t.jsxs("h3",{children:[t.jsx("span",{className:"ic",children:t.jsx(z.building,{})})," Recently added"]}),t.jsxs("button",{className:"hwd-link",onClick:()=>d("properties"),children:["All properties ",t.jsx(z.arrow,{})]})]}),n.length===0?t.jsx(tc,{icon:z.building,children:"No properties yet."}):t.jsx("div",{className:"hwd-list",children:n.slice(0,5).map(N=>{var w;return t.jsxs("div",{className:"hwd-li",children:[t.jsx("img",{className:"hwd-li-thumb",src:N.image,alt:""}),t.jsxs("div",{className:"hwd-li-body",children:[t.jsx("strong",{children:N.title}),t.jsxs("span",{children:[((w=Vr.find(T=>T.id===N.category))==null?void 0:w.label)||N.category," · ",(N.location||"").split(",").slice(0,2).join(",")]})]}),t.jsx("span",{className:"hwd-li-side",children:N.priceRange||N.price})]},N.id)})})]})]}),t.jsxs("div",{className:"hwd-card",style:{marginTop:16},children:[t.jsx("div",{className:"hwd-card-head",children:t.jsxs("h3",{children:[t.jsx("span",{className:"ic",children:t.jsx(z.image,{})})," Homepage content"]})}),t.jsxs("div",{className:"hwd-tiles",children:[t.jsxs("button",{className:"hwd-tile",onClick:()=>d("banners"),children:[t.jsx("b",{children:o.hero.length+(((x=o.slider)==null?void 0:x.length)||0)+o.small.length}),t.jsx("span",{children:"Banners"})]}),t.jsxs("button",{className:"hwd-tile",onClick:()=>d("locations"),children:[t.jsx("b",{children:a.length}),t.jsx("span",{children:"Prime locations"})]}),t.jsxs("button",{className:"hwd-tile",onClick:()=>d("offers"),children:[t.jsx("b",{children:s.length}),t.jsx("span",{children:"Festival offers"})]}),t.jsxs("div",{className:"hwd-tile",children:[t.jsx("b",{children:(c==null?void 0:c.totalBuilders)??"—"}),t.jsx("span",{children:"Developers"})]}),t.jsxs("button",{className:"hwd-tile",onClick:()=>d("recommended"),children:[t.jsx("b",{children:l.length}),t.jsx("span",{children:"Recommended"})]}),t.jsxs("button",{className:"hwd-tile",onClick:()=>d("snaps"),children:[t.jsx("b",{children:i.length}),t.jsx("span",{children:"Snaps"})]})]})]})]})}function Qb({enqs:e,run:n}){const[r,i]=v.useState(""),[s,a]=v.useState(!1),o=e.filter(h=>(!s||h.date===Mr())&&(!r.trim()||`${h.name} ${h.phone} ${h.email} ${h.property} ${h.message}`.toLowerCase().includes(r.trim().toLowerCase()))),l=h=>{confirm(`Delete the enquiry from ${h.name||"this lead"}?`)&&n(()=>H.delete(`/enquiries/${h.id}`),"Enquiry deleted")},c=e.filter(h=>h.date===Mr()).length;return t.jsxs(t.Fragment,{children:[t.jsx(qb,{title:"Enquiries",count:e.length,sub:"Leads submitted from property pages. Call or WhatsApp them quickly."}),t.jsxs("div",{className:"hwd-toolbar",children:[t.jsxs("div",{className:"hwd-search",children:[t.jsx(z.search,{}),t.jsx("input",{value:r,onChange:h=>i(h.target.value),placeholder:"Search name, phone, property…"})]}),t.jsxs("div",{className:"hwd-seg",style:{margin:0},children:[t.jsx("button",{className:s?"":"on",onClick:()=>a(!1),children:"All"}),t.jsxs("button",{className:s?"on":"",onClick:()=>a(!0),children:["Today (",c,")"]})]})]}),o.length===0?t.jsx("div",{className:"hwd-card",children:t.jsx(tc,{icon:z.chat,children:e.length?"No enquiries match.":"No enquiries yet."})}):t.jsx("div",{className:"hwd-enq",children:o.map(h=>{const d=(h.phone||"").replace(/\D/g,"").slice(-10);return t.jsxs("div",{className:"hwd-e",children:[t.jsx("span",{className:"hwd-initial",children:(h.name||"?").slice(0,1).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsxs("div",{className:"hwd-e-top",children:[t.jsx("strong",{children:h.name||"Unknown"}),h.date===Mr()&&t.jsx("span",{className:"hwd-new",children:"NEW"}),t.jsx("span",{className:"hwd-e-date",children:h.date})]}),t.jsxs("div",{className:"hwd-e-contact",children:[h.phone&&t.jsxs("span",{children:["📞 ",h.phone]}),h.email&&t.jsxs("span",{children:["✉️ ",h.email]})]}),h.property&&t.jsxs("span",{className:"hwd-e-prop",children:[t.jsx(z.building,{})," ",h.property]}),h.message&&t.jsx("div",{className:"hwd-e-msg",children:h.message})]}),t.jsxs("div",{className:"hwd-e-actions",children:[h.phone&&t.jsxs("a",{className:"call",href:`tel:${h.phone}`,children:[t.jsx(z.phone,{})," Call"]}),d&&t.jsxs("a",{className:"wa",href:`https://wa.me/91${d}`,target:"_blank",rel:"noreferrer",children:[t.jsx(z.whatsapp,{})," WhatsApp"]}),t.jsx("button",{className:"del",onClick:()=>l(h),children:t.jsx(z.trash,{})})]})]},h.id)})})]})}function Zb(){const[e,n]=v.useState(null),[r,i]=v.useState([]),[s,a]=v.useState([]),[o,l]=v.useState({hero:[],slider:[],small:[]}),[c,h]=v.useState([]),[d,u]=v.useState([]),[p,g]=v.useState([]),[b,k]=v.useState([]),[P,f]=v.useState([]),[m,x]=v.useState([]),[N,w]=v.useState(!1),[T,y]=v.useState("overview"),[j,L]=v.useState({key:0,filter:"all",adding:!1}),[S,O]=v.useState(!1),[F,M]=v.useState(null),[q,Q]=v.useState(Qs()),[_,J]=v.useState(Ty()),D=tn(),C=(_==null?void 0:_.role)==="superadmin",R=oe=>{Oy(oe),J(oe)};v.useEffect(()=>{if(!Sa()){Ri(),D("/admin?session=expired",{replace:!0});return}H.get("/admin/me").then(ye=>R(ye.data.admin)).catch(()=>{}),I();const oe=setTimeout(()=>{Ri(),D("/admin?session=expired",{replace:!0})},Qs()),ce=setInterval(()=>Q(Qs()),6e4);return()=>{clearTimeout(oe),clearInterval(ce)}},[]),v.useEffect(()=>{if(!F)return;const oe=setTimeout(()=>M(null),3200);return()=>clearTimeout(oe)},[F]);const I=async()=>{try{const[oe,ce,ye,Le,nt,On,nn,Ke,X,Y]=await Promise.all([H.get("/admin/stats").catch(()=>({data:{}})),H.get("/properties"),H.get("/enquiries").catch(()=>({data:[]})),H.get("/banners"),H.get("/locations"),H.get("/offers"),H.get("/snaps"),H.get("/recommended").catch(()=>({data:[]})),H.get("/blogs/admin/all").catch(()=>({data:[]})),H.get("/testimonials/admin/all").catch(()=>({data:[]}))]);n(oe.data),i(ce.data),a(ye.data||[]),l(Le.data),h(nt.data),u(On.data),f(nn.data||[]),x(Ke.data||[]),g(X.data||[]),k(Y.data||[])}catch(oe){console.error(oe)}finally{w(!0)}},G=async(oe,ce)=>{try{await oe(),M({msg:ce}),await I()}catch(ye){M({msg:Vb(ye,"Something went wrong"),type:"error"})}},A=oe=>{y(oe),O(!1),window.scrollTo(0,0)},U=(oe="all",ce=!1)=>{L({key:Date.now(),filter:oe,adding:ce}),A("properties")},ae=()=>{Ri(),D("/admin?session=loggedout",{replace:!0})},Ne=()=>{confirm("Reset ALL website data to the demo content? Your properties, offers, banners and enquiries will be replaced.")&&G(()=>H.post("/admin/reset"),"Demo data restored")},ee={enqs:s.length,props:r.length,snaps:P.length,recs:m.length,blogs:p.length,testis:b.length},Ae=Math.max(0,Math.round(q/36e5)),Et=v.useMemo(()=>s.filter(oe=>oe.date===Mr()).length,[s]);return t.jsxs("div",{className:`hwd${S?" open":""}`,children:[t.jsx("div",{className:"hwd-backdrop",onClick:()=>O(!1)}),t.jsxs("aside",{className:"hwd-side",children:[t.jsxs("div",{className:"hwd-side-top",children:[t.jsx("img",{src:$r,alt:"HomWisor"}),t.jsx("button",{className:"hwd-side-close",onClick:()=>O(!1),"aria-label":"Close menu",children:t.jsx(z.x,{})})]}),t.jsx("nav",{className:"hwd-nav",children:Kb.map(oe=>t.jsxs("div",{className:"hwd-nav-group",children:[t.jsx("div",{className:"hwd-nav-label",children:oe.group}),oe.items.map(ce=>{const ye=ce.icon,Le=ce.count?ee[ce.count]:null;return t.jsxs("button",{className:`hwd-nav-item${T===ce.id?" active":""}`,onClick:()=>ce.id==="properties"?U():A(ce.id),children:[t.jsx(ye,{})," ",!C&&ce.altLabel?ce.altLabel:ce.label,Le!==null&&Le>0&&t.jsx("span",{className:`hwd-nav-count${ce.hot&&Et?" hot":""}`,children:ce.hot&&Et?`${Et} new`:Le})]},ce.id)})]},oe.group))}),t.jsx("div",{className:"hwd-side-foot",children:_&&t.jsxs("div",{className:"hwd-user",children:[t.jsx("span",{className:"hwd-avatar",children:(_.name||_.email||"?").slice(0,1).toUpperCase()}),t.jsxs("div",{className:"hwd-user-meta",onClick:()=>A("admins"),title:"My account",children:[t.jsx("strong",{children:_.name}),t.jsx("span",{children:C?"Super Admin":"Admin"})]}),t.jsx("button",{className:"hwd-icon-btn",onClick:ae,title:"Sign out","aria-label":"Sign out",children:t.jsx(z.logout,{})})]})})]}),t.jsxs("div",{className:"hwd-main",children:[t.jsxs("header",{className:"hwd-top",children:[t.jsx("button",{className:"hwd-btn hwd-burger",onClick:()=>O(!0),"aria-label":"Open menu",style:{width:38,padding:0},children:t.jsx(z.menu,{})}),t.jsxs("div",{className:"hwd-crumbs",children:[t.jsx("span",{children:"Admin"}),t.jsx("span",{children:"›"}),t.jsx("strong",{children:Yb[T]})]}),t.jsxs("div",{className:"hwd-top-right",children:[t.jsxs("span",{className:"hwd-chip session",title:"You will be signed out automatically when the session ends",children:[t.jsx(z.clock,{})," Session: ",Ae,"h left"]}),t.jsxs("a",{className:"hwd-btn",href:"/",target:"_blank",rel:"noreferrer",children:[t.jsx(z.external,{}),t.jsx("span",{children:"View website"})]}),t.jsxs("button",{className:"hwd-btn gold",onClick:()=>U("all",!0),children:[t.jsx(z.plus,{}),t.jsx("span",{children:"Add property"})]})]})]}),t.jsx("main",{className:"hwd-content",children:!N&&T==="overview"?t.jsxs("div",{className:"hwd-card",style:{display:"grid",placeItems:"center",gap:12,padding:60,color:"#6b7280"},children:[t.jsx(hs,{})," Loading dashboard… (the server may take up to a minute to wake up)"]}):t.jsxs(t.Fragment,{children:[T==="overview"&&t.jsx(Xb,{me:_,recs:m,props:r,enqs:s,snaps:P,offers:d,locations:c,banners:o,stats:e,isSuper:C,go:A,openProperties:U,reset:Ne}),T==="properties"&&t.jsx(Sb,{properties:r,loaded:N,onChange:I,initialFilter:j.filter,startAdding:j.adding},j.key),T==="snaps"&&t.jsx(Pb,{snaps:P,run:G}),T==="banners"&&t.jsx(Ob,{banners:o,run:G,properties:r}),T==="locations"&&t.jsx(Mb,{locations:c,run:G}),T==="offers"&&t.jsx(Ib,{offers:d,run:G}),T==="recommended"&&t.jsx(Db,{items:m,run:G,properties:r}),T==="blog"&&t.jsx(Ub,{blogs:p,run:G}),T==="testimonials"&&t.jsx(Gb,{items:b,run:G}),T==="enquiries"&&t.jsx(Qb,{enqs:s,run:G}),T==="admins"&&t.jsx(db,{me:_,onMeChange:R})]})})]}),F&&t.jsxs("div",{className:`hwd-toast${F.type==="error"?" error":""}`,role:"status",children:[F.type==="error"?t.jsx(z.alert,{}):t.jsx(z.check,{})," ",F.msg]}),(_==null?void 0:_.mustChangePassword)&&t.jsx("div",{className:"hwa hwa-overlay",children:t.jsxs("div",{className:"hwa-modal",children:[t.jsx("img",{src:$r,alt:"HomWisor",style:{width:130,marginBottom:16}}),t.jsx("h3",{children:"Set a new password"}),t.jsx("p",{children:"You are signed in with a default password. Choose a new one to continue — it must be at least 8 characters with letters and numbers."}),t.jsx(Of,{admin:_,onChanged:oe=>{R(oe),I()},submitLabel:"Save & Continue"}),t.jsx("button",{onClick:ae,style:{marginTop:12,width:"100%",background:"none",border:"none",color:"#a39e92",fontSize:13,cursor:"pointer"},children:"Sign out instead"})]})})]})}const zn="#D4AF37",mi="#9A7418",xu="#F7F5EF";function Jb(){const[e,n]=ed(),r=e.get("category")||"All",i=u=>n(u==="All"?{}:{category:u},{replace:!0}),[s,a]=v.useState([]),[o,l]=v.useState("loading");v.useEffect(()=>{let u=!0;return H.get("/blogs").then(p=>{u&&(a(p.data||[]),l("ok"))}).catch(()=>u&&l("error")),()=>{u=!1}},[]),v.useEffect(()=>{document.title="Real Estate Insights | HomWisor Blog"},[]);const c=v.useMemo(()=>{const u=[...new Set(s.map(p=>p.category).filter(Boolean))];return["All",..._r.filter(p=>u.includes(p)),...u.filter(p=>!_r.includes(p))]},[s]),h=s.find(u=>u.featured)||s[0],d=r==="All"?s:s.filter(u=>u.category===r);return t.jsxs("div",{className:"blog-page",children:[t.jsx(Bt,{}),t.jsxs("section",{className:"blog-hero",children:[t.jsx("div",{className:"blog-hero-overlay"}),t.jsxs("div",{className:"blog-container blog-hero-inner",children:[t.jsx("div",{className:"blog-eyebrow",children:"HOMWISOR INSIGHTS"}),t.jsxs("h1",{children:["Real Estate ",t.jsx("span",{children:"Insights."})]}),t.jsx("p",{children:"Stay informed with property news, market insights, investment ideas and practical guides for Gurgaon and Delhi NCR."})]})]}),t.jsxs("main",{children:[t.jsx("section",{className:"blog-section blog-featured",children:t.jsxs("div",{className:"blog-container",children:[t.jsxs("div",{className:"blog-section-head",children:[t.jsxs("div",{children:[t.jsx("div",{className:"blog-eyebrow dark",children:"FEATURED INSIGHT"}),t.jsxs("h2",{children:["What’s happening in ",t.jsx("span",{children:"NCR real estate."})]})]}),t.jsxs("a",{href:"#all-articles",className:"blog-view-link",children:["View All Articles ",t.jsx("span",{children:"↗"})]})]}),o==="loading"&&t.jsxs("div",{className:"blog-state",children:[t.jsx("span",{className:"blog-spin"})," Loading articles…"]}),o==="error"&&t.jsx("div",{className:"blog-state",children:"Articles could not be loaded right now. Please refresh the page."}),o==="ok"&&!h&&t.jsx("div",{className:"blog-state",children:"New articles are coming soon."}),h&&t.jsxs("article",{className:"featured-card",children:[t.jsxs(V,{to:mn(h),className:"featured-image",children:[t.jsx("img",{src:h.image,alt:h.title}),t.jsx("span",{children:h.category})]}),t.jsxs("div",{className:"featured-content",children:[t.jsx("small",{children:Qi(h.publishedAt)}),t.jsx("h3",{children:h.title}),t.jsx("p",{children:h.excerpt}),t.jsxs(V,{to:mn(h),children:["Read Article ",t.jsx("span",{children:"→"})]})]})]})]})}),t.jsx("section",{className:"blog-section blog-all",id:"all-articles",children:t.jsxs("div",{className:"blog-container",children:[t.jsx("div",{className:"blog-section-head compact",children:t.jsxs("div",{children:[t.jsx("div",{className:"blog-eyebrow dark",children:"LATEST ARTICLES"}),t.jsxs("h2",{children:["Explore our ",t.jsx("span",{children:"latest stories."})]})]})}),s.length>0&&t.jsx("div",{className:"category-row",children:c.map(u=>t.jsx("button",{className:r===u?"active":"",onClick:()=>i(u),children:u},u))}),o==="ok"&&s.length>0&&d.length===0&&t.jsxs("div",{className:"blog-state",children:["No articles in “",r,"” yet. ",t.jsx("button",{type:"button",onClick:()=>i("All"),children:"Show all articles"})]}),t.jsx("div",{className:"blog-grid",children:d.map(u=>{const p=u.slug;return t.jsxs("article",{className:"blog-card",children:[t.jsxs(V,{to:mn(p),className:"blog-card-image",children:[t.jsx("img",{src:u.image,alt:u.title}),t.jsx("span",{children:u.category})]}),t.jsxs("div",{className:"blog-card-content",children:[t.jsx("small",{children:Qi(u.publishedAt)}),t.jsx("h3",{children:u.title}),t.jsx("p",{children:u.excerpt}),t.jsxs(V,{to:mn(p),children:["Read Article ",t.jsx("span",{children:"→"})]})]})]},u.id||u.slug)})})]})}),t.jsx("section",{className:"blog-newsletter",children:t.jsxs("div",{className:"blog-container newsletter-inner",children:[t.jsxs("div",{children:[t.jsx("div",{className:"blog-eyebrow",children:"STAY UPDATED"}),t.jsx("h2",{children:"Get smarter property insights."}),t.jsx("p",{children:"Follow Homwisor for useful real estate news, property guides and market updates."})]}),t.jsx(V,{to:"/contact/",className:"blog-btn",children:"Talk to an Expert"})]})})]}),t.jsx(Qt,{}),t.jsx("style",{children:`
        .blog-state { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 160px; padding: 30px 16px; border: 1px dashed #e2dccb; border-radius: 18px; background: #fff; color: #6b6450; font-size: 14px; font-weight: 600; text-align: center; flex-wrap: wrap; }
        .blog-state button { border: none; background: none; color: ${mi}; font: inherit; font-weight: 800; cursor: pointer; text-decoration: underline; }
        .blog-spin { width: 20px; height: 20px; border: 2.5px solid #eee4c4; border-top-color: ${zn}; border-radius: 50%; animation: blog-spin .7s linear infinite; }
        @keyframes blog-spin { to { transform: rotate(360deg); } }
        a.featured-image { display: block; }
        * {
          box-sizing: border-box;
        }

        .blog-page {
          min-height: 100vh;
          background: ${xu};
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
          color: ${zn};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .blog-eyebrow.dark {
          color: ${mi};
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
          color: ${zn};
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
          border-bottom: 1px solid ${zn};
          padding-bottom: 6px;
        }

        .blog-view-link span {
          color: ${mi};
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
          color: ${zn};
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
          color: ${mi};
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
          color: ${mi};
          margin-left: 5px;
        }

        .blog-all {
          background: ${xu};
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
          color: ${zn};
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
          background: ${zn};
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
      `})]})}const Ot="#D4AF37",In="#9A7418",fi="#F7F5EF",e2=(e,n)=>{document.title=e;let r=document.querySelector('meta[name="description"]');r||(r=document.createElement("meta"),r.name="description",document.head.appendChild(r)),r.content=n||""};function t2(){var u;const{slug:e}=Ga(),n=tn(),[r,i]=v.useState(null),[s,a]=v.useState([]),[o,l]=v.useState("loading");if(v.useEffect(()=>{if(r&&r.slug===e)return;let p=!0;return l("loading"),window.scrollTo(0,0),H.get(`/blogs/${encodeURIComponent(e)}`).then(g=>{var b;p&&(i(g.data),l("ok"),(b=g.data)!=null&&b.slug&&g.data.slug!==e&&n(mn(g.data),{replace:!0}))}).catch(()=>p&&l("missing")),H.get("/blogs").then(g=>p&&a(g.data||[])).catch(()=>{}),()=>{p=!1}},[e]),v.useEffect(()=>{r&&e2(`${r.seoTitle||r.title} | HomWisor`,r.seoDescription||r.excerpt)},[r]),o==="loading")return t.jsxs("div",{className:"blog-detail-page",children:[t.jsx(Bt,{}),t.jsx("main",{style:{minHeight:"70vh",display:"grid",placeItems:"center",padding:"140px 20px 80px",color:"#6b6450",fontWeight:600},children:"Loading article…"}),t.jsx("style",{children:`.blog-detail-page { min-height: 100vh; background: ${fi}; }`})]});if(!r)return t.jsxs("div",{className:"blog-detail-page",children:[t.jsx(Bt,{}),t.jsx("main",{className:"blog-not-found",children:t.jsxs("div",{className:"blog-detail-container",children:[t.jsx("div",{className:"blog-detail-eyebrow",children:"HOMWISOR INSIGHTS"}),t.jsx("h1",{children:"Page Not Found"}),t.jsx("p",{children:"The page you are looking for does not exist or may have been moved."}),t.jsx(V,{to:"/blog",className:"blog-back-btn",children:"← Back to Blog"})]})}),t.jsx(Qt,{}),t.jsx("style",{children:`
          .blog-detail-page {
            min-height: 100vh;
            background: ${fi};
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
            color: ${In};
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
            color: ${Ot};
            text-decoration: none;
            font-size: 11px;
            font-weight: 800;
          }

          @media (max-width: 600px) {
            .blog-detail-container {
              width: min(100% - 24px, 920px);
            }
          }
        `})]});const c=s.filter(p=>p.slug!==r.slug),h=[...c.filter(p=>p.category===r.category),...c.filter(p=>p.category!==r.category)].slice(0,4),d=Qi(r.publishedAt);return t.jsxs("div",{className:"blog-detail-page",children:[t.jsx(Bt,{}),t.jsxs("section",{className:"blog-detail-hero",children:[t.jsx("img",{src:r.image,alt:r.title,className:"blog-detail-hero-image"}),t.jsx("div",{className:"blog-detail-hero-overlay"}),t.jsx("div",{className:"blog-detail-hero-content",children:t.jsxs("div",{className:"blog-detail-container",children:[t.jsxs("div",{className:"blog-hero-top",children:[t.jsx(V,{to:"/blog",className:"blog-back-link",children:"← Back to Insights"}),t.jsx("div",{className:"blog-detail-category",children:r.category})]}),t.jsx("h1",{children:r.title}),t.jsxs("div",{className:"blog-detail-meta",children:[t.jsx("span",{children:d}),t.jsx("span",{className:"meta-dot",children:"•"}),t.jsxs("span",{children:[Vl(r)," MIN READ"]}),t.jsx("span",{className:"meta-dot",children:"•"}),t.jsx("span",{children:(r.author||"HomWisor Insights").toUpperCase()})]})]})})]}),t.jsxs("main",{children:[t.jsx("section",{className:"blog-detail-main",children:t.jsxs("div",{className:"blog-detail-container article-layout",children:[t.jsxs("article",{className:"article-content",children:[t.jsx("p",{className:"article-intro",children:r.excerpt}),(r.content||[]).map((p,g)=>t.jsxs("div",{className:"article-section",children:[p.heading&&t.jsx("h2",{children:p.heading}),My(p.text).map((b,k)=>t.jsx("p",{children:b},k)),p.image&&t.jsx("figure",{className:"article-figure",children:t.jsx("img",{src:p.image,alt:p.heading||r.title,loading:"lazy"})})]},g)),((u=r.tags)==null?void 0:u.length)>0&&t.jsx("div",{className:"article-tags",children:r.tags.map(p=>t.jsxs("span",{children:["#",p]},p))}),t.jsxs("div",{className:"article-cta",children:[t.jsxs("div",{children:[t.jsx("div",{className:"article-cta-eyebrow",children:"HOMWISOR"}),t.jsx("h3",{children:"Looking for the right property?"}),t.jsx("p",{children:"Talk to our property experts for assistance with your property search."})]}),t.jsx(V,{to:"/contact/",className:"article-cta-btn",children:"Talk to an Expert →"})]})]}),t.jsxs("aside",{className:"article-sidebar",children:[t.jsxs("div",{className:"sidebar-card",children:[t.jsx("div",{className:"sidebar-eyebrow",children:"ARTICLE DETAILS"}),t.jsxs("div",{className:"sidebar-row",children:[t.jsx("span",{children:"Category"}),t.jsx("strong",{children:r.category})]}),t.jsxs("div",{className:"sidebar-row",children:[t.jsx("span",{children:"Published"}),t.jsx("strong",{children:d})]}),t.jsxs("div",{className:"sidebar-row",children:[t.jsx("span",{children:"Author"}),t.jsx("strong",{children:r.author||"HomWisor Insights"})]}),t.jsxs("div",{className:"sidebar-row",children:[t.jsx("span",{children:"Reading time"}),t.jsxs("strong",{children:[Vl(r)," min"]})]})]}),t.jsxs("div",{className:"sidebar-card sidebar-gold",children:[t.jsx("div",{className:"sidebar-eyebrow",children:"HOMWISOR"}),t.jsx("h3",{children:"Explore more property insights."}),t.jsx("p",{children:"Discover real estate news, investment ideas and property guides from Homwisor."}),t.jsx(V,{to:"/blog",children:"View All Articles →"})]})]})]})}),h.length>0&&t.jsx("section",{className:"related-section",children:t.jsxs("div",{className:"blog-detail-container",children:[t.jsxs("div",{className:"related-heading",children:[t.jsxs("div",{children:[t.jsx("div",{className:"blog-detail-eyebrow",children:"KEEP READING"}),t.jsxs("h2",{children:["Related ",t.jsx("span",{children:"insights."})]})]}),t.jsx(V,{to:"/blog",className:"related-view-all",children:"View All Articles →"})]}),t.jsx("div",{className:"related-grid",children:h.map(p=>t.jsxs(V,{to:mn(p),className:"related-card",children:[t.jsxs("div",{className:"related-image",children:[t.jsx("img",{src:p.image,alt:p.title}),t.jsx("span",{children:p.category})]}),t.jsxs("div",{className:"related-content",children:[t.jsx("small",{children:Qi(p.publishedAt)}),t.jsx("h3",{children:p.title}),t.jsx("p",{children:p.excerpt}),t.jsxs("div",{className:"related-read",children:["Read Article ",t.jsx("span",{children:"→"})]})]})]},p.id||p.slug))})]})})]}),t.jsx(Qt,{}),t.jsx("style",{children:`
        .article-section p + p { margin-top: 14px; }
        .article-figure { margin: 22px 0 6px; border-radius: 16px; overflow: hidden; background: #eee; }
        .article-figure img { width: 100%; display: block; max-height: 520px; object-fit: cover; }
        .article-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .article-tags span { padding: 6px 12px; border-radius: 999px; background: #fff; border: 1px solid #ebe4cf; color: ${In}; font-size: 12px; font-weight: 700; }
        * {
          box-sizing: border-box;
        }

        .blog-detail-page {
          min-height: 100vh;
          background: ${fi};
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
          color: ${Ot};
        }

        .blog-detail-category {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          background: rgba(0,0,0,.55);
          border: 1px solid rgba(212,175,55,.35);
          color: ${Ot};
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
          color: ${Ot};
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
          background: ${fi};
          border: 1px solid #e4dccb;
          border-radius: 15px;
        }

        .sidebar-eyebrow {
          margin-bottom: 18px;
          color: ${In};
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
          color: ${Ot};
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
          color: ${Ot};
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
          color: ${Ot};
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
          background: ${Ot};
          color: #111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* RELATED */

        .related-section {
          padding: 40px 0 0px;
          background: ${fi};
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
          color: ${In};
        }

        .blog-detail-eyebrow {
          color: ${In};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .related-view-all {
          flex: 0 0 auto;
          color: #111;
          text-decoration: none;
          border-bottom: 1px solid ${Ot};
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
          color: ${Ot};
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .related-content {
          padding: 20px;
        }

        .related-content small {
          color: ${In};
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
          color: ${In};
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
      `})]})}const Os="#D4AF37",$o="#9A7418",_o="#F7F5EF";function n2(){return t.jsxs("div",{className:"privacy-page",children:[t.jsx(Bt,{}),t.jsxs("section",{className:"privacy-hero",children:[t.jsx("div",{className:"privacy-hero-overlay"}),t.jsxs("div",{className:"privacy-hero-content",children:[t.jsx("span",{className:"privacy-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),t.jsxs("h1",{children:["Privacy ",t.jsx("span",{children:"Policy."})]}),t.jsx("p",{children:"Your privacy matters to us. Learn how Homwisor collects, uses, protects and manages information when you interact with our website and real estate services."})]})]}),t.jsx("main",{className:"privacy-main",children:t.jsxs("div",{className:"privacy-layout",children:[t.jsx("aside",{className:"privacy-sidebar",children:t.jsxs("div",{className:"privacy-sidebar-card",children:[t.jsx("span",{children:"ON THIS PAGE"}),t.jsx("a",{href:"#introduction",children:"Introduction"}),t.jsx("a",{href:"#information",children:"Information We Collect"}),t.jsx("a",{href:"#use",children:"How We Use Information"}),t.jsx("a",{href:"#sharing",children:"Information Sharing"}),t.jsx("a",{href:"#cookies",children:"Cookies & Tracking"}),t.jsx("a",{href:"#security",children:"Data Security"}),t.jsx("a",{href:"#rights",children:"Your Rights"}),t.jsx("a",{href:"#third-party",children:"Third-Party Links"}),t.jsx("a",{href:"#children",children:"Children's Privacy"}),t.jsx("a",{href:"#changes",children:"Policy Changes"}),t.jsx("a",{href:"#contact",children:"Contact Us"})]})}),t.jsxs("article",{className:"privacy-content",children:[t.jsxs("div",{className:"policy-intro",id:"introduction",children:[t.jsx("span",{className:"section-label",children:"PRIVACY & DATA"}),t.jsx("h2",{children:"Privacy Policy"}),t.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),t.jsx("p",{children:'Homwisor Consultants Pvt. Ltd. ("Homwisor", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how information may be collected, used, stored and disclosed when you visit our website, submit an enquiry, request a property consultation, or otherwise interact with our services.'})]}),t.jsxs("section",{id:"information",children:[t.jsx("h3",{children:"1. Information We Collect"}),t.jsx("p",{children:"Depending on how you interact with Homwisor, we may collect information that you voluntarily provide, including your name, phone number, email address, property requirements, location preferences, budget information and messages or enquiries submitted through our forms."}),t.jsx("p",{children:"We may also receive basic technical information such as browser type, device information, IP address, referring pages, pages visited and general website usage information."})]}),t.jsxs("section",{id:"use",children:[t.jsx("h3",{children:"2. How We Use Your Information"}),t.jsx("p",{children:"We may use the information we collect to:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Respond to property enquiries and requests."}),t.jsx("li",{children:"Provide property recommendations and consultation."}),t.jsx("li",{children:"Arrange site visits, callbacks or other requested services."}),t.jsx("li",{children:"Communicate with you about properties, services and enquiries."}),t.jsx("li",{children:"Improve our website, services and customer experience."}),t.jsx("li",{children:"Maintain website security and prevent misuse or fraud."}),t.jsx("li",{children:"Comply with applicable legal and regulatory requirements."})]})]}),t.jsxs("section",{id:"sharing",children:[t.jsx("h3",{children:"3. Information Sharing & Disclosure"}),t.jsx("p",{children:"Homwisor does not sell personal information as a business practice. Information may be shared when reasonably required to provide a service you have requested, operate our website, work with relevant service providers, protect our legal interests, or comply with applicable law."}),t.jsx("p",{children:"Where a property enquiry requires communication with a developer, property owner, service provider or other relevant party, we may share the information necessary to respond to that enquiry."})]}),t.jsxs("section",{id:"cookies",children:[t.jsx("h3",{children:"4. Cookies & Tracking Technologies"}),t.jsx("p",{children:"Our website may use cookies and similar technologies to remember preferences, understand website usage, measure performance and improve the user experience."}),t.jsx("p",{children:"You can control or disable cookies through your browser settings. Some website functionality may be affected when cookies are disabled."})]}),t.jsxs("section",{id:"security",children:[t.jsx("h3",{children:"5. Data Security"}),t.jsx("p",{children:"We take reasonable administrative, technical and organizational measures to protect personal information from unauthorized access, misuse, alteration or disclosure."}),t.jsx("p",{children:"However, no method of transmission or electronic storage can be guaranteed to be completely secure. You should therefore avoid sending highly sensitive information through ordinary website forms unless specifically requested through a secure channel."})]}),t.jsxs("section",{id:"rights",children:[t.jsx("h3",{children:"6. Your Privacy Rights"}),t.jsx("p",{children:"Subject to applicable law, you may request access to, correction of, or deletion of personal information that we hold about you. You may also ask us to stop or limit certain communications."}),t.jsx("p",{children:"To make a privacy-related request, contact us using the details provided below. We may need to verify your identity before completing a request."})]}),t.jsxs("section",{id:"third-party",children:[t.jsx("h3",{children:"7. Third-Party Websites & Services"}),t.jsx("p",{children:"Our website may contain links to third-party websites, platforms or services. Those third parties operate under their own privacy policies and terms. Homwisor is not responsible for the privacy practices or content of external websites."})]}),t.jsxs("section",{id:"children",children:[t.jsx("h3",{children:"8. Children's Privacy"}),t.jsx("p",{children:"Our services are intended for adults and property-related users. We do not knowingly request personal information from children for the purpose of providing real estate services."})]}),t.jsxs("section",{id:"retention",children:[t.jsx("h3",{children:"9. Data Retention"}),t.jsx("p",{children:"We retain personal information for as long as reasonably necessary for the purposes described in this policy, to provide requested services, maintain business records, resolve disputes and meet applicable legal obligations."})]}),t.jsxs("section",{id:"changes",children:[t.jsx("h3",{children:"10. Changes to This Privacy Policy"}),t.jsx("p",{children:'We may update this Privacy Policy from time to time to reflect changes to our services, website, legal requirements or privacy practices. The updated version will be published on this page with a revised "Last updated" date.'})]}),t.jsxs("section",{id:"contact",className:"privacy-contact-box",children:[t.jsx("span",{className:"section-label",children:"CONTACT US"}),t.jsx("h3",{children:"Questions about your privacy?"}),t.jsx("p",{children:"If you have questions, requests or concerns regarding this Privacy Policy or the way your information is handled, please contact Homwisor."}),t.jsxs("div",{className:"privacy-contact-grid",children:[t.jsxs("a",{href:"mailto:info@homwisor.com",children:[t.jsx("small",{children:"EMAIL"}),"info@homwisor.com"]}),t.jsxs("a",{href:"tel:8500900100",children:[t.jsx("small",{children:"PHONE"}),"+91 8500 900 100"]}),t.jsxs("div",{children:[t.jsx("small",{children:"OFFICE"}),"Gurugram, Haryana, India"]})]})]}),t.jsxs("div",{className:"privacy-note",children:[t.jsx("strong",{children:"Important:"})," This page is a website privacy policy template for Homwisor and should be reviewed and finalized according to the company's actual data practices, third-party tools, consent mechanisms and applicable laws."]})]})]})}),t.jsx(Qt,{}),t.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .privacy-page {
          min-height: 100vh;
          background: ${_o};
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
          color: ${Os};
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
          color: ${Os};
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
          background: ${_o};
        }

        .privacy-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${$o};
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
          color: ${$o};
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
          background: ${_o};
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
          border-color: ${Os};
        }

        .privacy-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${$o};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .privacy-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${Os};
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
      `})]})}const Ls="#D4AF37",Ms="#9A7418",Go="#F7F5EF";function r2(){return t.jsxs("div",{className:"terms-page",children:[t.jsx(Bt,{}),t.jsxs("section",{className:"terms-hero",children:[t.jsx("div",{className:"terms-hero-overlay"}),t.jsxs("div",{className:"terms-hero-content",children:[t.jsx("span",{className:"terms-eyebrow",children:"HOMWISOR CONSULTANTS PVT. LTD."}),t.jsxs("h1",{children:["Terms & ",t.jsx("span",{children:"Conditions."})]}),t.jsx("p",{children:"Please read these terms carefully before using the Homwisor website, property listings, enquiry services and real estate consultation services."})]})]}),t.jsx("main",{className:"terms-main",children:t.jsxs("div",{className:"terms-layout",children:[t.jsx("aside",{className:"terms-sidebar",children:t.jsxs("div",{className:"terms-sidebar-card",children:[t.jsx("span",{children:"ON THIS PAGE"}),t.jsx("a",{href:"#acceptance",children:"Acceptance of Terms"}),t.jsx("a",{href:"#about",children:"About Homwisor"}),t.jsx("a",{href:"#use",children:"Use of Website"}),t.jsx("a",{href:"#listings",children:"Property Listings"}),t.jsx("a",{href:"#enquiries",children:"Enquiries & Communication"}),t.jsx("a",{href:"#accuracy",children:"Information Accuracy"}),t.jsx("a",{href:"#transactions",children:"Property Transactions"}),t.jsx("a",{href:"#intellectual",children:"Intellectual Property"}),t.jsx("a",{href:"#third-party",children:"Third-Party Services"}),t.jsx("a",{href:"#liability",children:"Limitation of Liability"}),t.jsx("a",{href:"#privacy",children:"Privacy"}),t.jsx("a",{href:"#changes",children:"Changes to Terms"}),t.jsx("a",{href:"#contact",children:"Contact Us"})]})}),t.jsxs("article",{className:"terms-content",children:[t.jsxs("div",{className:"terms-intro",id:"acceptance",children:[t.jsx("span",{className:"section-label",children:"LEGAL INFORMATION"}),t.jsx("h2",{children:"Terms & Conditions"}),t.jsx("p",{className:"updated",children:"Last updated: September 24, 2026"}),t.jsx("p",{children:'These Terms and Conditions ("Terms") govern your access to and use of the Homwisor website and related services operated by Homwisor Consultant Private Limited ("Homwisor", "we", "us", or "our").'}),t.jsx("p",{children:"By accessing or using this website, submitting an enquiry, requesting a property consultation, contacting our team, or otherwise using our services, you acknowledge that you have read and understood these Terms and agree to be bound by them."})]}),t.jsxs("section",{id:"about",children:[t.jsx("h3",{children:"1. About Homwisor"}),t.jsx("p",{children:"Homwisor is a Gurugram-based real estate platform and agency that helps property buyers, sellers, tenants and landlords connect and transact with greater confidence. Our services include property search and listings, buyer and seller facilitation, market guidance and real estate advisory."}),t.jsx("p",{children:"Homwisor's public company information states that the business operates as Homwisor Consultant Private Limited and is registered as a real estate agent with the Haryana Real Estate Regulatory Authority (HARERA), Gurugram."})]}),t.jsxs("section",{id:"use",children:[t.jsx("h3",{children:"2. Use of the Website"}),t.jsx("p",{children:"You agree to use the website only for lawful purposes and in a manner that does not interfere with the operation, security, availability or integrity of the website."}),t.jsxs("ul",{children:[t.jsx("li",{children:"You must provide accurate information when submitting forms or enquiries."}),t.jsx("li",{children:"You must not use the website for fraudulent, misleading or unlawful activities."}),t.jsx("li",{children:"You must not attempt to gain unauthorized access to any system, account, database or website functionality."}),t.jsx("li",{children:"You must not copy, scrape, reproduce or commercially exploit website content without permission."})]})]}),t.jsxs("section",{id:"listings",children:[t.jsx("h3",{children:"3. Property Listings & Information"}),t.jsx("p",{children:"Property listings may include information such as project names, locations, prices, sizes, configurations, availability, amenities, photographs and other property-related details."}),t.jsx("p",{children:"Property information may be supplied or updated by developers, owners, agents or other relevant sources. Prices, availability, specifications, offers and other project details may change without prior notice."}),t.jsx("p",{children:"A listing or enquiry on Homwisor does not by itself constitute an offer, reservation, allotment, sale agreement or guarantee of availability."})]}),t.jsxs("section",{id:"enquiries",children:[t.jsx("h3",{children:"4. Property Enquiries & Communication"}),t.jsx("p",{children:"When you submit an enquiry, you authorize Homwisor and relevant property or service representatives to contact you regarding the enquiry through phone, email, WhatsApp or other appropriate communication channels."}),t.jsx("p",{children:"You are responsible for ensuring that the contact information provided by you is correct and belongs to you or that you are otherwise authorized to provide it."})]}),t.jsxs("section",{id:"accuracy",children:[t.jsx("h3",{children:"5. Accuracy of Information"}),t.jsx("p",{children:"Homwisor aims to provide useful and current property information, but information on the website may contain errors, omissions, outdated details or information supplied by third parties."}),t.jsx("p",{children:"Users should independently verify material information, including title, approvals, RERA registration, pricing, availability, specifications, payment schedules, possession timelines and other transaction-related details before making a decision."})]}),t.jsxs("section",{id:"transactions",children:[t.jsx("h3",{children:"6. Property Transactions"}),t.jsx("p",{children:"Homwisor may facilitate introductions, property visits, communication and other real estate assistance. Unless expressly agreed otherwise in writing, Homwisor is not the seller, developer, owner or legal representative of every property displayed on the website."}),t.jsx("p",{children:"Any purchase, sale, lease, booking, allotment or other property transaction is subject to separate documentation and agreements between the relevant parties."}),t.jsx("p",{children:"Users should obtain independent legal, financial and tax advice where appropriate before entering into a property transaction."})]}),t.jsxs("section",{id:"rera",children:[t.jsx("h3",{children:"7. Regulatory & RERA Information"}),t.jsx("p",{children:"Homwisor's public company information identifies the business as a HARERA-registered real estate agent and states that it facilitates transactions in accordance with the Real Estate (Regulation and Development) Act, 2016 and applicable Haryana rules."}),t.jsx("p",{children:"Users should independently verify the current registration status and the RERA registration of any relevant real estate project before proceeding with a transaction."})]}),t.jsxs("section",{id:"intellectual",children:[t.jsx("h3",{children:"8. Intellectual Property"}),t.jsx("p",{children:"Unless otherwise stated, the website's design, branding, logos, text, graphics, photographs, layout, software and other original materials are owned by or licensed to Homwisor."}),t.jsx("p",{children:"You may view and use the website for personal and legitimate property-related purposes. You may not reproduce, distribute, modify, publish, sell or commercially exploit website materials without prior written permission."})]}),t.jsxs("section",{id:"third-party",children:[t.jsx("h3",{children:"9. Third-Party Websites & Services"}),t.jsx("p",{children:"The website may contain links, integrations or references to third-party websites, developers, property owners, service providers, payment providers, maps, social platforms or other external services."}),t.jsx("p",{children:"Third-party services are governed by their own terms and policies. Homwisor is not responsible for the independent operation, availability, content or privacy practices of third-party websites and services."})]}),t.jsxs("section",{id:"liability",children:[t.jsx("h3",{children:"10. Disclaimer & Limitation of Liability"}),t.jsx("p",{children:"The website and its information are provided for general property-search, information and consultation purposes. Homwisor does not guarantee that the website or every piece of information will always be complete, current, uninterrupted or error-free."}),t.jsx("p",{children:"To the extent permitted by applicable law, Homwisor will not be responsible for losses arising solely from reliance on unverified property information, third-party information, changes in property availability or pricing, transaction decisions, website interruptions, or events beyond its reasonable control."})]}),t.jsxs("section",{id:"privacy",children:[t.jsx("h3",{children:"11. Privacy"}),t.jsxs("p",{children:["Your use of the website may involve the collection and processing of personal information. Please review our",t.jsxs("a",{className:"inline-link",href:"/privacy-policy",children:[" ","Privacy Policy"]})," ","for information about how personal data may be collected, used, stored and handled."]})]}),t.jsxs("section",{id:"changes",children:[t.jsx("h3",{children:"12. Changes to These Terms"}),t.jsx("p",{children:"Homwisor may update these Terms from time to time to reflect changes to the website, services, business practices or applicable legal requirements."}),t.jsx("p",{children:'Updated Terms will be published on this page with a revised "Last updated" date. Your continued use of the website after an update constitutes acceptance of the revised Terms to the extent permitted by applicable law.'})]}),t.jsxs("section",{id:"contact",className:"terms-contact-box",children:[t.jsx("span",{className:"section-label",children:"CONTACT US"}),t.jsx("h3",{children:"Questions about these Terms?"}),t.jsx("p",{children:"If you have questions about these Terms and Conditions or Homwisor's services, please contact the company using the information below."}),t.jsxs("div",{className:"terms-contact-grid",children:[t.jsxs("a",{href:"mailto:homwisor@gmail.com",children:[t.jsx("small",{children:"EMAIL"}),"homwisor@gmail.com"]}),t.jsxs("a",{href:"tel:9090101401",children:[t.jsx("small",{children:"PHONE"}),"+91 9090 101 401"]}),t.jsxs("div",{children:[t.jsx("small",{children:"REGISTERED OFFICE"}),"Unit No. 704, 7th Floor, ILD Trade Centre, Sohna Road, Village Tikri, Sector-47, Gurugram, Haryana – 122018"]})]})]}),t.jsxs("div",{className:"terms-note",children:[t.jsx("strong",{children:"Important:"})," This page is a website terms template prepared from Homwisor's publicly available company information and the requested website context. It should be reviewed by the company's legal counsel and aligned with its actual contracts, services, policies and applicable laws before publication."]})]})]})}),t.jsx(Qt,{}),t.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .terms-page {
          min-height: 100vh;
          background: ${Go};
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
          color: ${Ls};
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
          color: ${Ls};
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
          background: ${Go};
        }

        .terms-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${Ms};
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
          color: ${Ms};
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
          color: ${Ms};
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
          background: ${Go};
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
          border-color: ${Ls};
        }

        .terms-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${Ms};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .terms-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${Ls};
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
      `})]})}function Bn({param:e,preset:n}){const{slug:r}=Ga(),i=new URLSearchParams(n||{});return e&&r&&i.set(e,r),t.jsx(Hr,{to:`/search?${i.toString()}`,replace:!0})}function i2(){const{slug:e}=Ga();return t.jsx(Hr,{to:mn(e),replace:!0})}function s2({children:e}){return Sa()?e:t.jsx(Hr,{to:cd()?"/admin?session=expired":"/admin",replace:!0})}function a2(){return t.jsx(g0,{children:t.jsxs(l0,{children:[t.jsx(me,{path:"/",element:t.jsx(pv,{})}),t.jsx(me,{path:"/about",element:t.jsx(Av,{})}),t.jsx(me,{path:"/search",element:t.jsx(Wv,{})}),t.jsx(me,{path:"/location/:slug",element:t.jsx(Bn,{param:"location"})}),t.jsx(me,{path:"/budget/:slug",element:t.jsx(Bn,{param:"budget"})}),t.jsx(me,{path:"/property-type/:slug",element:t.jsx(Bn,{param:"type"})}),t.jsx(me,{path:"/commercial/:slug",element:t.jsx(Bn,{param:"type"})}),t.jsx(me,{path:"/status/:slug",element:t.jsx(Bn,{param:"status"})}),t.jsx(me,{path:"/residential-projects",element:t.jsx(Bn,{preset:{type:"residential"}})}),t.jsx(me,{path:"/commercial-projects",element:t.jsx(Bn,{preset:{type:"commercial"}})}),t.jsx(me,{path:"/property/:id",element:t.jsx(tb,{})}),t.jsx(me,{path:"/blog",element:t.jsx(Jb,{})}),t.jsx(me,{path:"/blog/:slug",element:t.jsx(i2,{})}),t.jsx(me,{path:"/privacy-policy",element:t.jsx(n2,{})}),t.jsx(me,{path:"/terms-and-conditions",element:t.jsx(r2,{})}),t.jsx(me,{path:"/property-snaps",element:t.jsx(ib,{})}),t.jsx(me,{path:"/snaps",element:t.jsx(Hr,{to:"/property-snaps",replace:!0})}),t.jsx(me,{path:"/admin",element:t.jsx(lb,{})}),t.jsx(me,{path:"/admin/dashboard",element:t.jsx(s2,{children:t.jsx(Zb,{})})}),t.jsx(me,{path:"/contact",element:t.jsx(sb,{})}),t.jsx(me,{path:"/:slug",element:t.jsx(t2,{})}),t.jsx(me,{path:"*",element:t.jsx(Hr,{to:"/",replace:!0})})]})})}Vo.createRoot(document.getElementById("root")).render(t.jsx(Eu.StrictMode,{children:t.jsx(a2,{})}));
