/*! For license information please see 5befc17d.3898411d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[276031],{123442:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(824246),o=t(511151);const a={id:"backend-common.databasemanager.fromconfig",title:"DatabaseManager.fromConfig()",description:"API reference for DatabaseManager.fromConfig()"},c=void 0,s={id:"reference/backend-common.databasemanager.fromconfig",title:"DatabaseManager.fromConfig()",description:"API reference for DatabaseManager.fromConfig()",source:"@site/../docs/reference/backend-common.databasemanager.fromconfig.md",sourceDirName:"reference",slug:"/reference/backend-common.databasemanager.fromconfig",permalink:"/docs/reference/backend-common.databasemanager.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.databasemanager.fromconfig.md",tags:[],version:"current",frontMatter:{id:"backend-common.databasemanager.fromconfig",title:"DatabaseManager.fromConfig()",description:"API reference for DatabaseManager.fromConfig()"}},i={},u=[{value:"Parameters",id:"parameters",level:2}];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-common",children:(0,n.jsx)(r.code,{children:"@backstage/backend-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.databasemanager",children:(0,n.jsx)(r.code,{children:"DatabaseManager"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.databasemanager.fromconfig",children:(0,n.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Creates a ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.databasemanager",children:"DatabaseManager"})," from ",(0,n.jsx)(r.code,{children:"backend.database"})," config."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(config: Config, options?: DatabaseManagerOptions): DatabaseManager;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"config"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})}),(0,n.jsx)(r.td,{children:"The loaded application configuration."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.databasemanageroptions",children:"DatabaseManagerOptions"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," An optional configuration object."]})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.databasemanager",children:"DatabaseManager"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,a={},u=null,f=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:f,props:a,_owner:s.current}}r.Fragment=a,r.jsx=u,r.jsxs=u},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function b(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||m}function g(){}function _(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var j=_.prototype=new g;j.constructor=_,h(j,b.prototype),j.isPureReactComponent=!0;var x=Array.isArray,v=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,n){var o,a={},c=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(c=""+r.key),r)v.call(r,o)&&!S.hasOwnProperty(o)&&(a[o]=r[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:t,type:e,key:c,ref:s,props:a,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,o,a,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return c=c(i=e),e=""===a?"."+R(i,0):a,x(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),O(c,r,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(i=0,a=""===a?".":a+":",x(e))for(var u=0;u<e.length;u++){var f=a+R(s=e[u],u);i+=O(s,r,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(s=e.next()).done;)i+=O(s=s.value,r,o,f=a+R(s,u++),c);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,r,t){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},M={transition:null},I={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:M,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=c,r.PureComponent=_,r.StrictMode=a,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,s=k.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in r)v.call(r,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===r[u]&&void 0!==i?i[u]:r[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){i=Array(u);for(var f=0;f<u;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:t,type:e.type,key:a,ref:c,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=M.transition;M.transition={};try{e()}finally{M.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return D.current.useCallback(e,r)},r.useContext=function(e){return D.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return D.current.useDeferredValue(e)},r.useEffect=function(e,r){return D.current.useEffect(e,r)},r.useId=function(){return D.current.useId()},r.useImperativeHandle=function(e,r,t){return D.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return D.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return D.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return D.current.useMemo(e,r)},r.useReducer=function(e,r,t){return D.current.useReducer(e,r,t)},r.useRef=function(e){return D.current.useRef(e)},r.useState=function(e){return D.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return D.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return D.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>a});var n=t(667294);const o=n.createContext({});function a(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||c:a(e),n.createElement(o.Provider,{value:s},r)}}}]);