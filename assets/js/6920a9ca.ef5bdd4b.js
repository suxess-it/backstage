/*! For license information please see 6920a9ca.ef5bdd4b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[527716],{31394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>a});var r=t(824246),o=t(511151);const i={id:"plugin-jenkins.jenkinsapi",title:"JenkinsApi",description:"API reference for JenkinsApi"},s=void 0,u={id:"reference/plugin-jenkins.jenkinsapi",title:"JenkinsApi",description:"API reference for JenkinsApi",source:"@site/../docs/reference/plugin-jenkins.jenkinsapi.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins.jenkinsapi",permalink:"/docs/reference/plugin-jenkins.jenkinsapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins.jenkinsapi.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins.jenkinsapi",title:"JenkinsApi",description:"API reference for JenkinsApi"}},c={},a=[{value:"Methods",id:"methods",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-jenkins"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins.jenkinsapi",children:(0,r.jsx)(n.code,{children:"JenkinsApi"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export interface JenkinsApi \n"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins.jenkinsapi.getbuild",children:"getBuild(options)"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"Get a single build."}),(0,r.jsx)(n.p,{children:"This takes an entity to support selecting between multiple jenkins instances."}),(0,r.jsx)(n.p,{children:"TODO: abstract jobFullName (so we could support differentiating between the same named job on multiple instances)."})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins.jenkinsapi.getjobbuilds",children:"getJobBuilds(options)"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins.jenkinsapi.getprojects",children:"getProjects(options)"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"Get the projects (jobs which have builds, not folders) including info about their lastBuild."}),(0,r.jsx)(n.p,{children:"Deciding what jobs are for an entity can be configured by the backstage _Integrator_ in the plugin-jenkins-backend setup and by the _Software Engineer_ using annotations agreed with the _Integrator_."}),(0,r.jsx)(n.p,{children:"Typically, a folder job will be identified and the backend plugin will recursively look for projects (jobs with builds) within that folder."})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins.jenkinsapi.retry",children:"retry(options)"})}),(0,r.jsx)(n.td,{})]})]})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,l=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:u.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,j={};function b(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||h}function k(){}function _(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var m=_.prototype=new k;m.constructor=_,y(m,b.prototype),m.isPureReactComponent=!0;var g=Array.isArray,x=Object.prototype.hasOwnProperty,v={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,r){var o,i={},s=null,u=null;if(null!=n)for(o in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(s=""+n.key),n)x.call(n,o)&&!w.hasOwnProperty(o)&&(i[o]=n[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];i.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:t,type:e,key:s,ref:u,props:i,_owner:v.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,o,i,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return s=s(c=e),e=""===i?"."+C(c,0):i,g(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),O(s,n,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),n.push(s)),1;if(c=0,i=""===i?".":i+":",g(e))for(var a=0;a<e.length;a++){var l=i+C(u=e[a],a);c+=O(u,n,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(u=e.next()).done;)c+=O(u=u.value,n,o,l=i+C(u,a++),s);else if("object"===u)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,n,t){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:v};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=o,n.Profiler=s,n.PureComponent=_,n.StrictMode=i,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,u=v.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in n)x.call(n,a)&&!w.hasOwnProperty(a)&&(o[a]=void 0===n[a]&&void 0!==c?c[a]:n[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:t,type:e.type,key:i,ref:s,props:o,_owner:u}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return A.current.useCallback(e,n)},n.useContext=function(e){return A.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return A.current.useDeferredValue(e)},n.useEffect=function(e,n){return A.current.useEffect(e,n)},n.useId=function(){return A.current.useId()},n.useImperativeHandle=function(e,n,t){return A.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return A.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return A.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return A.current.useMemo(e,n)},n.useReducer=function(e,n,t){return A.current.useReducer(e,n,t)},n.useRef=function(e){return A.current.useRef(e)},n.useState=function(e){return A.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return A.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return A.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>u,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function u({components:e,children:n,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:u},n)}}}]);