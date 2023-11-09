"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const V=require("react");var X={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function ur(){if(Te)return k;Te=1;var m=V,E=Symbol.for("react.element"),F=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,A=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function P(y,l,O){var d,b={},R=null,$=null;O!==void 0&&(R=""+O),l.key!==void 0&&(R=""+l.key),l.ref!==void 0&&($=l.ref);for(d in l)T.call(l,d)&&!I.hasOwnProperty(d)&&(b[d]=l[d]);if(y&&y.defaultProps)for(d in l=y.defaultProps,l)b[d]===void 0&&(b[d]=l[d]);return{$$typeof:E,type:y,key:R,ref:$,props:b,_owner:A.current}}return k.Fragment=F,k.jsx=P,k.jsxs=P,k}var D={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function sr(){return Oe||(Oe=1,process.env.NODE_ENV!=="production"&&function(){var m=V,E=Symbol.for("react.element"),F=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),y=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),Z=Symbol.iterator,Se="@@iterator";function Ce(e){if(e===null||typeof e!="object")return null;var r=Z&&e[Z]||e[Se];return typeof r=="function"?r:null}var w=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Pe("error",e,t)}}function Pe(e,r,t){{var n=w.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var xe=!1,je=!1,ke=!1,De=!1,Fe=!1,Q;Q=Symbol.for("react.module.reference");function Ae(e){return!!(typeof e=="string"||typeof e=="function"||e===T||e===I||Fe||e===A||e===O||e===d||De||e===$||xe||je||ke||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===b||e.$$typeof===P||e.$$typeof===y||e.$$typeof===l||e.$$typeof===Q||e.getModuleId!==void 0))}function Ie(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ee(e){return e.displayName||"Context"}function _(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case F:return"Portal";case I:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var r=e;return ee(r)+".Consumer";case P:var t=e;return ee(t._context)+".Provider";case l:return Ie(e,e.render,"ForwardRef");case b:var n=e.displayName||null;return n!==null?n:_(e.type)||"Memo";case R:{var i=e,u=i._payload,o=i._init;try{return _(o(u))}catch{return null}}}return null}var h=Object.assign,x=0,re,te,ne,ae,oe,ie,ue;function se(){}se.__reactDisabledLog=!0;function $e(){{if(x===0){re=console.log,te=console.info,ne=console.warn,ae=console.error,oe=console.group,ie=console.groupCollapsed,ue=console.groupEnd;var e={configurable:!0,enumerable:!0,value:se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}x++}}function We(){{if(x--,x===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:h({},e,{value:re}),info:h({},e,{value:te}),warn:h({},e,{value:ne}),error:h({},e,{value:ae}),group:h({},e,{value:oe}),groupCollapsed:h({},e,{value:ie}),groupEnd:h({},e,{value:ue})})}x<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var U=w.ReactCurrentDispatcher,B;function W(e,r,t){{if(B===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||""}return`
`+B+e}}var q=!1,Y;{var Ye=typeof WeakMap=="function"?WeakMap:Map;Y=new Ye}function fe(e,r){if(!e||q)return"";{var t=Y.get(e);if(t!==void 0)return t}var n;q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=U.current,U.current=null,$e();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(g){n=g}Reflect.construct(e,[],o)}else{try{o.call()}catch(g){n=g}e.call(o.prototype)}}else{try{throw Error()}catch(g){n=g}e()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var a=g.stack.split(`
`),v=n.stack.split(`
`),s=a.length-1,f=v.length-1;s>=1&&f>=0&&a[s]!==v[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==v[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==v[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&Y.set(e,p),p}while(s>=1&&f>=0);break}}}finally{q=!1,U.current=u,We(),Error.prepareStackTrace=i}var C=e?e.displayName||e.name:"",me=C?W(C):"";return typeof e=="function"&&Y.set(e,me),me}function Ne(e,r,t){return fe(e,!1)}function Le(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return fe(e,Le(e));if(typeof e=="string")return W(e);switch(e){case O:return W("Suspense");case d:return W("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Ne(e.render);case b:return N(e.type,r,t);case R:{var n=e,i=n._payload,u=n._init;try{return N(u(i),r,t)}catch{}}}return""}var L=Object.prototype.hasOwnProperty,le={},ce=w.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);ce.setExtraStackFrame(t)}else ce.setExtraStackFrame(null)}function Me(e,r,t,n,i){{var u=Function.call.bind(L);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var v=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(M(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),M(null)),a instanceof Error&&!(a.message in le)&&(le[a.message]=!0,M(i),c("Failed %s type: %s",t,a.message),M(null))}}}var Ve=Array.isArray;function J(e){return Ve(e)}function Ue(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Be(e){try{return ve(e),!1}catch{return!0}}function ve(e){return""+e}function de(e){if(Be(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ue(e)),ve(e)}var j=w.ReactCurrentOwner,qe={key:!0,ref:!0,__self:!0,__source:!0},pe,be,G;G={};function Je(e){if(L.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ge(e){if(L.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ze(e,r){if(typeof e.ref=="string"&&j.current&&r&&j.current.stateNode!==r){var t=_(j.current.type);G[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',_(j.current.type),e.ref),G[t]=!0)}}function Ke(e,r){{var t=function(){pe||(pe=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function He(e,r){{var t=function(){be||(be=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Xe=function(e,r,t,n,i,u,o){var a={$$typeof:E,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function Ze(e,r,t,n,i){{var u,o={},a=null,v=null;t!==void 0&&(de(t),a=""+t),Ge(r)&&(de(r.key),a=""+r.key),Je(r)&&(v=r.ref,ze(r,i));for(u in r)L.call(r,u)&&!qe.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||v){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Ke(o,f),v&&He(o,f)}return Xe(e,a,v,i,n,j.current,o)}}var z=w.ReactCurrentOwner,_e=w.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}var K;K=!1;function H(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function ge(){{if(z.current){var e=_(z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Qe(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Ee={};function er(e){{var r=ge();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function ye(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=er(r);if(Ee[t])return;Ee[t]=!0;var n="";e&&e._owner&&e._owner!==z.current&&(n=" It was passed a child from "+_(e._owner.type)+"."),S(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),S(null)}}function Re(e,r){{if(typeof e!="object")return;if(J(e))for(var t=0;t<e.length;t++){var n=e[t];H(n)&&ye(n,r)}else if(H(e))e._store&&(e._store.validated=!0);else if(e){var i=Ce(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)H(o.value)&&ye(o.value,r)}}}function rr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===b))t=r.propTypes;else return;if(t){var n=_(r);Me(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!K){K=!0;var i=_(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function tr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){S(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),S(null);break}}e.ref!==null&&(S(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),S(null))}}function he(e,r,t,n,i,u){{var o=Ae(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=Qe(i);v?a+=v:a+=ge();var s;e===null?s="null":J(e)?s="array":e!==void 0&&e.$$typeof===E?(s="<"+(_(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=Ze(e,r,t,i,u);if(f==null)return f;if(o){var p=r.children;if(p!==void 0)if(n)if(J(p)){for(var C=0;C<p.length;C++)Re(p[C],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Re(p,e)}return e===T?tr(f):rr(f),f}}function nr(e,r,t){return he(e,r,t,!0)}function ar(e,r,t){return he(e,r,t,!1)}var or=ar,ir=nr;D.Fragment=T,D.jsx=or,D.jsxs=ir}()),D}process.env.NODE_ENV==="production"?X.exports=ur():X.exports=sr();var we=X.exports;var fr="yjq96t0";const lr=V.forwardRef(({className:m,...E},F)=>we.jsx("div",{...E,className:fr}));var cr="_1oxsocr0";const vr=V.forwardRef((m,E)=>we.jsx("button",{...m,className:cr}));exports.Box=lr;exports.Button=vr;
