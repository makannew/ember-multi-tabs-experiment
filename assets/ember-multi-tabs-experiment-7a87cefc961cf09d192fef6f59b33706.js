"use strict"
define("ember-multi-tabs-experiment/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-multi-tabs-experiment/app",["exports","ember-resolver","ember-load-initializers","ember-multi-tabs-experiment/config/environment"],(function(e,t,r,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var i=c(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(i,Ember.Application)
var r=u(i)
function i(){var e
o(this,i)
for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l]
return s(f(e=r.call.apply(r,[this].concat(u))),"modulePrefix",n.default.modulePrefix),s(f(e),"podModulePrefix",n.default.podModulePrefix),s(f(e),"Resolver",t.default),e}return i}()
e.default=p,(0,r.default)(p,n.default.modulePrefix)})),define("ember-multi-tabs-experiment/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-multi-tabs-experiment/components/share-state",["exports","@glimmer/component","broadcast-channel"],(function(e,t,r){var n,i,o,a,u
function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var i=y(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=Ember.HTMLBars.template({id:"t5ztkOJW",block:'{"symbols":[],"statements":[[10,"h3"],[12],[2,"Shared data component"],[13],[2,"\\n"],[11,"input"],[16,2,[32,0,["value"]]],[24,4,"text"],[4,[38,1],["input",[35,0]],null],[12],[13]],"hasEval":false,"upvars":["changeValue","on"]}',meta:{moduleName:"ember-multi-tabs-experiment/components/share-state.hbs"}}),g=(n=Ember._tracked,i=Ember._action,u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(u,e)
var t,n,i,o=b(u)
function u(){var e
return c(this,u),f(m(e=o.apply(this,arguments)),"value",a,m(e)),window.BroadcastChannel?(e.bc=new BroadcastChannel("test_channel"),e.bc.onmessage=function(t){e.value=t.data.value}):(e.bc=new r.BroadcastChannel("test_channel"),e.bc.onmessage=function(t){e.value=t.value}),e}return t=u,(n=[{key:"changeValue",value:function(e){this.value=e.target.value,this.bc.postMessage({value:this.value})}}])&&s(t.prototype,n),i&&s(t,i),u}(t.default),a=v((o=u).prototype,"value",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(o.prototype,"changeValue",[i],Object.getOwnPropertyDescriptor(o.prototype,"changeValue"),o.prototype),o)
e.default=g,Ember._setComponentTemplate(h,g)})),define("ember-multi-tabs-experiment/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-multi-tabs-experiment/helpers/app-version",["exports","ember-multi-tabs-experiment/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,o=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,u=null
return o&&(n.showExtended&&(u=i.match(r.versionExtendedRegExp)),u||(u=i.match(r.versionRegExp))),a&&(u=i.match(r.shaRegExp)),u?u[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var i=Ember.Helper.helper(n)
e.default=i})),define("ember-multi-tabs-experiment/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-multi-tabs-experiment/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-multi-tabs-experiment/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-multi-tabs-experiment/config/environment"],(function(e,t,r){var n,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,i=r.default.APP.version)
var o={name:"App Version",initialize:(0,t.default)(n,i)}
e.default=o})),define("ember-multi-tabs-experiment/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("ember-multi-tabs-experiment/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-multi-tabs-experiment/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("ember-multi-tabs-experiment/initializers/export-application-global",["exports","ember-multi-tabs-experiment/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,i=t.default.exportApplicationGlobal
n="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("ember-multi-tabs-experiment/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("ember-multi-tabs-experiment/router",["exports","ember-multi-tabs-experiment/config/environment"],(function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var i=l(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(a,Ember.Router)
var r=o(a)
function a(){var e
n(this,a)
for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l]
return f(u(e=r.call.apply(r,[this].concat(o))),"location",t.default.locationType),f(u(e),"rootURL",t.default.rootURL),e}return a}()
e.default=c,c.map((function(){}))})),define("ember-multi-tabs-experiment/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-multi-tabs-experiment/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-multi-tabs-experiment/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-multi-tabs-experiment/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-multi-tabs-experiment/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"jUGDqFhE",block:'{"symbols":[],"statements":[[10,"h1"],[12],[2,"Ember multi-tabs experiment"],[13],[2,"\\n"],[10,"p"],[12],[2,"After opening several browser tabs updating below input field cause update of others"],[13],[2,"\\n"],[8,"share-state",[],[[],[]],null]],"hasEval":false,"upvars":[]}',meta:{moduleName:"ember-multi-tabs-experiment/templates/application.hbs"}})
e.default=t})),define("ember-multi-tabs-experiment/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("ember-multi-tabs-experiment/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("ember-multi-tabs-experiment/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("ember-multi-tabs-experiment/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("ember-multi-tabs-experiment/config/environment",[],(function(){try{var e="ember-multi-tabs-experiment/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("ember-multi-tabs-experiment/app").default.create({name:"ember-multi-tabs-experiment",version:"0.0.0+8bf54011"})
