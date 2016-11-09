!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic('2', [], true, function ($__require, exports, module) {
	/* */
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};
	return module.exports;
});
$__System.registerDynamic('3', ['2'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('2')(global || window || this);
  return module.exports;
});
$__System.registerDynamic("4", ["3"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("3");
  return module.exports;
});
$__System.registerDynamic('5', ['6', '4'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.ActionTypes = undefined;
  exports["default"] = createStore;

  var _isPlainObject = $__require('6');

  var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

  var _symbolObservable = $__require('4');

  var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  var ActionTypes = exports.ActionTypes = {
    INIT: '@@redux/INIT'
  };

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [initialState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} enhancer The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
  function createStore(reducer, initialState, enhancer) {
    var _ref2;

    if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
      enhancer = initialState;
      initialState = undefined;
    }

    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }

      return enhancer(createStore)(reducer, initialState);
    }

    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }

    var currentReducer = reducer;
    var currentState = initialState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;

    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }

    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */
    function getState() {
      return currentState;
    }

    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */
    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Expected listener to be a function.');
      }

      var isSubscribed = true;

      ensureCanMutateNextListeners();
      nextListeners.push(listener);

      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
      };
    }

    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */
    function dispatch(action) {
      if (!(0, _isPlainObject2["default"])(action)) {
        throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
      }

      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
      }

      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }

      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }

      var listeners = currentListeners = nextListeners;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }

      return action;
    }

    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }

      currentReducer = nextReducer;
      dispatch({ type: ActionTypes.INIT });
    }

    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/zenparsing/es-observable
     */
    function observable() {
      var _ref;

      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */

        subscribe: function subscribe(observer) {
          if (typeof observer !== 'object') {
            throw new TypeError('Expected the observer to be an object.');
          }

          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }

          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return { unsubscribe: unsubscribe };
        }
      }, _ref[_symbolObservable2["default"]] = function () {
        return this;
      }, _ref;
    }

    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({ type: ActionTypes.INIT });

    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
  }
  return module.exports;
});
$__System.registerDynamic("7", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetPrototype = Object.getPrototypeOf;

  /**
   * Gets the `[[Prototype]]` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {null|Object} Returns the `[[Prototype]]`.
   */
  function getPrototype(value) {
    return nativeGetPrototype(Object(value));
  }

  module.exports = getPrototype;
  return module.exports;
});
$__System.registerDynamic('8', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  module.exports = isHostObject;
  return module.exports;
});
$__System.registerDynamic('9', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  module.exports = isObjectLike;
  return module.exports;
});
$__System.registerDynamic('6', ['7', '8', '9'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var getPrototype = $__require('7'),
      isHostObject = $__require('8'),
      isObjectLike = $__require('9');
  var objectTag = '[object Object]';
  var objectProto = Object.prototype;
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  var objectToString = objectProto.toString;
  function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  module.exports = isPlainObject;
  return module.exports;
});
$__System.registerDynamic('a', ['5', '6', 'b', 'c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    exports["default"] = combineReducers;
    var _createStore = $__require('5');
    var _isPlainObject = $__require('6');
    var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
    var _warning = $__require('b');
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function getUndefinedStateErrorMessage(key, action) {
      var actionType = action && action.type;
      var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
      return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
    }
    function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
      var reducerKeys = Object.keys(reducers);
      var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
      if (reducerKeys.length === 0) {
        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
      }
      if (!(0, _isPlainObject2["default"])(inputState)) {
        return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
      }
      var unexpectedKeys = Object.keys(inputState).filter(function (key) {
        return !reducers.hasOwnProperty(key);
      });
      if (unexpectedKeys.length > 0) {
        return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
      }
    }
    function assertReducerSanity(reducers) {
      Object.keys(reducers).forEach(function (key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
        if (typeof initialState === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
        }
        var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
        if (typeof reducer(undefined, { type: type }) === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
        }
      });
    }
    function combineReducers(reducers) {
      var reducerKeys = Object.keys(reducers);
      var finalReducers = {};
      for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
          finalReducers[key] = reducers[key];
        }
      }
      var finalReducerKeys = Object.keys(finalReducers);
      var sanityError;
      try {
        assertReducerSanity(finalReducers);
      } catch (e) {
        sanityError = e;
      }
      return function combination() {
        var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var action = arguments[1];
        if (sanityError) {
          throw sanityError;
        }
        if ('production' !== 'production') {
          var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
          if (warningMessage) {
            (0, _warning2["default"])(warningMessage);
          }
        }
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
          var key = finalReducerKeys[i];
          var reducer = finalReducers[key];
          var previousStateForKey = state[key];
          var nextStateForKey = reducer(previousStateForKey, action);
          if (typeof nextStateForKey === 'undefined') {
            var errorMessage = getUndefinedStateErrorMessage(key, action);
            throw new Error(errorMessage);
          }
          nextState[key] = nextStateForKey;
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
      };
    }
  })($__require('c'));
  return module.exports;
});
$__System.registerDynamic('d', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports["default"] = bindActionCreators;
  function bindActionCreator(actionCreator, dispatch) {
    return function () {
      return dispatch(actionCreator.apply(undefined, arguments));
    };
  }

  /**
   * Turns an object whose values are action creators, into an object with the
   * same keys, but with every function wrapped into a `dispatch` call so they
   * may be invoked directly. This is just a convenience method, as you can call
   * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
   *
   * For convenience, you can also pass a single function as the first argument,
   * and get a function in return.
   *
   * @param {Function|Object} actionCreators An object whose values are action
   * creator functions. One handy way to obtain it is to use ES6 `import * as`
   * syntax. You may also pass a single function.
   *
   * @param {Function} dispatch The `dispatch` function available on your Redux
   * store.
   *
   * @returns {Function|Object} The object mimicking the original object, but with
   * every action creator wrapped into the `dispatch` call. If you passed a
   * function as `actionCreators`, the return value will also be a single
   * function.
   */
  function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
      return bindActionCreator(actionCreators, dispatch);
    }

    if (typeof actionCreators !== 'object' || actionCreators === null) {
      throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    }

    var keys = Object.keys(actionCreators);
    var boundActionCreators = {};
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var actionCreator = actionCreators[key];
      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }
    return boundActionCreators;
  }
  return module.exports;
});
$__System.registerDynamic('e', ['f'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  var _extends = Object.assign || function (target) {
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
  exports["default"] = applyMiddleware;
  var _compose = $__require('f');
  var _compose2 = _interopRequireDefault(_compose);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function applyMiddleware() {
    for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
    return function (createStore) {
      return function (reducer, initialState, enhancer) {
        var store = createStore(reducer, initialState, enhancer);
        var _dispatch = store.dispatch;
        var chain = [];
        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch(action) {
            return _dispatch(action);
          }
        };
        chain = middlewares.map(function (middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
        return _extends({}, store, { dispatch: _dispatch });
      };
    };
  }
  return module.exports;
});
$__System.registerDynamic("f", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports["default"] = compose;
  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */

  function compose() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    } else {
      var _ret = function () {
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return {
          v: function v() {
            return rest.reduceRight(function (composed, f) {
              return f(composed);
            }, last.apply(undefined, arguments));
          }
        };
      }();

      if (typeof _ret === "object") return _ret.v;
    }
  }
  return module.exports;
});
$__System.registerDynamic('b', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports["default"] = warning;
  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */
  function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */
    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
      /* eslint-disable no-empty */
    } catch (e) {}
    /* eslint-enable no-empty */
  }
  return module.exports;
});
$__System.registerDynamic('10', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    // shim for using process in browser

    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    (function () {
        try {
            cachedSetTimeout = setTimeout;
        } catch (e) {
            cachedSetTimeout = function () {
                throw new Error('setTimeout is not defined');
            };
        }
        try {
            cachedClearTimeout = clearTimeout;
        } catch (e) {
            cachedClearTimeout = function () {
                throw new Error('clearTimeout is not defined');
            };
        }
    })();
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = cachedSetTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        cachedClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            cachedSetTimeout(drainQueue, 0);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
    return module.exports;
});
$__System.registerDynamic("11", ["10"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("10");
  return module.exports;
});
$__System.registerDynamic('12', ['11'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('11');
  return module.exports;
});
$__System.registerDynamic("c", ["12"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("12");
  return module.exports;
});
$__System.registerDynamic('13', ['5', 'a', 'd', 'e', 'f', 'b', 'c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
    var _createStore = $__require('5');
    var _createStore2 = _interopRequireDefault(_createStore);
    var _combineReducers = $__require('a');
    var _combineReducers2 = _interopRequireDefault(_combineReducers);
    var _bindActionCreators = $__require('d');
    var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
    var _applyMiddleware = $__require('e');
    var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
    var _compose = $__require('f');
    var _compose2 = _interopRequireDefault(_compose);
    var _warning = $__require('b');
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function isCrushed() {}
    if ('production' !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
      (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
    }
    exports.createStore = _createStore2["default"];
    exports.combineReducers = _combineReducers2["default"];
    exports.bindActionCreators = _bindActionCreators2["default"];
    exports.applyMiddleware = _applyMiddleware2["default"];
    exports.compose = _compose2["default"];
  })($__require('c'));
  return module.exports;
});
$__System.registerDynamic("14", ["13"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("13");
  return module.exports;
});
$__System.registerDynamic('15', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (store) {
    return {
      init: function () {
        this.store = store;
      },
      dispatch: function (action) {
        return store.dispatch(action);
      },
      dispatchify: function (actions) {
        var keys = Object.keys(actions);
        for (var idx in keys) {
          var key = keys[idx];
          var action = actions[key];

          this[key] = function (action) {
            var isFunction = typeof action === 'function';
            return function () {
              var obj = isFunction ? action.apply(this, arguments) : action;
              return store.dispatch(obj);
            };
          }(action);
        }
      },
      subscribe: function (selector, callback, changed) {
        if (!callback) {
          callback = this.update;
        }

        var f = function (previous) {
          return !previous;
        };
        switch (typeof changed) {
          case 'function':
            f = changed;
            break;
          case 'string':
            f = selector[changed] ? selector[changed] : f;
            break;
          case 'undefined':
            f = selector.recomputations ? selector.recomputations : f;
        }

        var version;
        changed = function (previous) {
          version = f(previous);
          return previous !== version;
        };

        function compute() {
          var state = store.getState();
          var selected = selector(state);

          if (changed(version)) {
            callback(selected);
          }
        }

        var unsubscribe = store.subscribe(compute);
        this.on('unmount', unsubscribe);
        compute();
        return unsubscribe;
      }
    };
  };
  return module.exports;
});
$__System.registerDynamic("16", ["15"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("15");
  return module.exports;
});
$__System.register("17", [], function() { return { setters: [], execute: function() {} } });

$__System.register("18", [], function() { return { setters: [], execute: function() {} } });

$__System.registerDynamic("19", ["18"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("18");
  return module.exports;
});
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("1a", ["require", "exports", "module", "1b"], function(require, exports, module) {
      tagger(require('1b'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('main-nav', '<div class="toggle-nav" onclick="{toggleNav}"><i></i></div> <ul> <li> <a href="/"> <i class="fa fa-comments"></i> MynaQuotes </a> </li> <li> <span>My Quotes</span> </li> <li> <button type="button" class="btn btn-primary"> <i class="fa fa-plus"></i> Add</button> </li> </ul> <span class="nav-heading">Filters<span> <ul> <li> <span><i class="fa fa-star"></i>Favorites</span> </li> <li> <span><i class="fa fa-archive"></i>Archive</span> </li> <li> <span><i class="fa fa-history"></i>Recent</span> </li> <li> <span><i class="fa fa-asterisk"></i>All</span> </li> </ul> <button type="button" class="btn btn-secondary btn-logout"> <i class="fa fa-sign-out"></i> Logout</button>', 'main-nav html,[riot-tag="main-nav"] html,[data-is="main-nav"] html{box-sizing:border-box} main-nav *,[riot-tag="main-nav"] *,[data-is="main-nav"] *,main-nav *:before,[riot-tag="main-nav"] *:before,[data-is="main-nav"] *:before,main-nav *:after,[riot-tag="main-nav"] *:after,[data-is="main-nav"] *:after{box-sizing:inherit} main-nav body,[riot-tag="main-nav"] body,[data-is="main-nav"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} main-nav i.fa,[riot-tag="main-nav"] i.fa,[data-is="main-nav"] i.fa{font-size:1.6rem} main-nav i.fa.hollow,[riot-tag="main-nav"] i.fa.hollow,[data-is="main-nav"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} main-nav i.fa.hollow.active,[riot-tag="main-nav"] i.fa.hollow.active,[data-is="main-nav"] i.fa.hollow.active{color:#fed729} main-nav button,[riot-tag="main-nav"] button,[data-is="main-nav"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} main-nav .btn-primary,[riot-tag="main-nav"] .btn-primary,[data-is="main-nav"] .btn-primary{background:#0e6bd8} main-nav .btn-secondary,[riot-tag="main-nav"] .btn-secondary,[data-is="main-nav"] .btn-secondary{background:#ff5d32} main-nav ul,[riot-tag="main-nav"] ul,[data-is="main-nav"] ul{list-style-type:none;padding:0} main-nav .interactive,[riot-tag="main-nav"] .interactive,[data-is="main-nav"] .interactive{cursor:pointer;padding:.3rem} main-nav .interactive:hover,[riot-tag="main-nav"] .interactive:hover,[data-is="main-nav"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} main-nav,[riot-tag="main-nav"],[data-is="main-nav"]{position:absolute;left:0;top:0;min-height:100%;height:auto;width:12rem;transition:all .6s ease-in-out;box-shadow:2px 0 12px 0 #090a0a;background:#fafafa;padding-top:2rem;overflow:visible;z-index:2} main-nav.hidden,[riot-tag="main-nav"].hidden,[data-is="main-nav"].hidden{left:-12rem;box-shadow:none} main-nav ul li,[riot-tag="main-nav"] ul li,[data-is="main-nav"] ul li{padding:.3rem 1rem} main-nav ul li i,[riot-tag="main-nav"] ul li i,[data-is="main-nav"] ul li i{margin-right:1rem} main-nav .toggle-nav,[riot-tag="main-nav"] .toggle-nav,[data-is="main-nav"] .toggle-nav{position:absolute;top:.5rem;right:1rem;transition:right .6s ease-in-out;z-index:2;height:2.5rem;padding:.5rem} main-nav .toggle-nav i,[riot-tag="main-nav"] .toggle-nav i,[data-is="main-nav"] .toggle-nav i,main-nav .toggle-nav i:before,[riot-tag="main-nav"] .toggle-nav i:before,[data-is="main-nav"] .toggle-nav i:before,main-nav .toggle-nav i:after,[riot-tag="main-nav"] .toggle-nav i:after,[data-is="main-nav"] .toggle-nav i:after{display:inline-block;width:1.6rem;height:.3rem;background:#090a0a;position:relative;z-index:2;border-radius:1.3rem;opacity:1;transition:all .6s ease-in-out;transform:rotate(-45deg);right:0;top:.6rem} main-nav .toggle-nav i:before,[riot-tag="main-nav"] .toggle-nav i:before,[data-is="main-nav"] .toggle-nav i:before{content:"";top:-0.25rem;right:0;opacity:0;transform:rotate(45deg)} main-nav .toggle-nav i:after,[riot-tag="main-nav"] .toggle-nav i:after,[data-is="main-nav"] .toggle-nav i:after{content:"";transform:rotate(90deg);top:-2.35rem;right:-0.05rem} main-nav.hidden .toggle-nav,[riot-tag="main-nav"].hidden .toggle-nav,[data-is="main-nav"].hidden .toggle-nav{right:-3.5rem} main-nav.hidden .toggle-nav i,[riot-tag="main-nav"].hidden .toggle-nav i,[data-is="main-nav"].hidden .toggle-nav i{transform:none;right:0;top:0} main-nav.hidden .toggle-nav i:before,[riot-tag="main-nav"].hidden .toggle-nav i:before,[data-is="main-nav"].hidden .toggle-nav i:before{opacity:1;transform:none} main-nav.hidden .toggle-nav i:after,[riot-tag="main-nav"].hidden .toggle-nav i:after,[data-is="main-nav"].hidden .toggle-nav i:after{top:-1.25rem;right:0;transform:none}', 'class="hidden"', function(opts) {
    var _this = this;
    this.toggleNav = () => {
      _this.root.classList.toggle("hidden");
    };
  });
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("1c", ["require", "exports", "module", "1b"], function(require, exports, module) {
      tagger(require('1b'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote-list', '<ul> <li each="{quote in quotes}"> <m-quote data-quote="{quote}"> {quote.text} </m-quote> </li> </ul>', 'm-quote-list html,[riot-tag="m-quote-list"] html,[data-is="m-quote-list"] html{box-sizing:border-box} m-quote-list *,[riot-tag="m-quote-list"] *,[data-is="m-quote-list"] *,m-quote-list *:before,[riot-tag="m-quote-list"] *:before,[data-is="m-quote-list"] *:before,m-quote-list *:after,[riot-tag="m-quote-list"] *:after,[data-is="m-quote-list"] *:after{box-sizing:inherit} m-quote-list body,[riot-tag="m-quote-list"] body,[data-is="m-quote-list"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote-list i.fa,[riot-tag="m-quote-list"] i.fa,[data-is="m-quote-list"] i.fa{font-size:1.6rem} m-quote-list i.fa.hollow,[riot-tag="m-quote-list"] i.fa.hollow,[data-is="m-quote-list"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote-list i.fa.hollow.active,[riot-tag="m-quote-list"] i.fa.hollow.active,[data-is="m-quote-list"] i.fa.hollow.active{color:#fed729} m-quote-list button,[riot-tag="m-quote-list"] button,[data-is="m-quote-list"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-list .btn-primary,[riot-tag="m-quote-list"] .btn-primary,[data-is="m-quote-list"] .btn-primary{background:#0e6bd8} m-quote-list .btn-secondary,[riot-tag="m-quote-list"] .btn-secondary,[data-is="m-quote-list"] .btn-secondary{background:#ff5d32} m-quote-list ul,[riot-tag="m-quote-list"] ul,[data-is="m-quote-list"] ul{list-style-type:none;padding:0} m-quote-list .interactive,[riot-tag="m-quote-list"] .interactive,[data-is="m-quote-list"] .interactive{cursor:pointer;padding:.3rem} m-quote-list .interactive:hover,[riot-tag="m-quote-list"] .interactive:hover,[data-is="m-quote-list"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote-list,[riot-tag="m-quote-list"],[data-is="m-quote-list"]{display:block} m-quote-list ul li,[riot-tag="m-quote-list"] ul li,[data-is="m-quote-list"] ul li{display:inline-block;width:100%;border-radius:.6rem;box-shadow:0 0 .6rem 0 #090a0a;padding:1.2rem;margin:.6rem 0}@media (min-width:768px){ m-quote-list ul li,[riot-tag="m-quote-list"] ul li,[data-is="m-quote-list"] ul li{width:calc(49% - 1rem);margin:.6rem}}@media (min-width:992px){ m-quote-list ul li,[riot-tag="m-quote-list"] ul li,[data-is="m-quote-list"] ul li{width:calc(25% - 1.2rem);max-width:20rem}}', '', function(opts) {
    var _this = this;
    this.mixin('redux');
    this.mixin('actions');
    this.on('update', () => _this.quotes = _this.store.getState().quotes);
    this.store.subscribe(this.update);
  });
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("1d", ["require", "exports", "module", "1b"], function(require, exports, module) {
      tagger(require('1b'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote', '<blockquote> <yield></yield> </blockquote> <cite>{opts.dataQuote.author}</cite> <time> {opts.dataQuote.modifiedOn.toLocaleDateString(\'en-US\', {             weekday: \'short\',             year: \'numeric\',             month: \'short\',             day: \'numeric\'         })} </time> <div> <i class="fa fa-star hollow {opts.dataQuote.isFaved ? \'active\' : \'\'}" onclick="{toggleFav}"></i> <i class="fa fa-archive hollow {opts.dataQuote.isArchived ? \'active\' : \'\'}" onclick="{toggleArchive}"></i> </div>', 'm-quote html,[riot-tag="m-quote"] html,[data-is="m-quote"] html{box-sizing:border-box} m-quote *,[riot-tag="m-quote"] *,[data-is="m-quote"] *,m-quote *:before,[riot-tag="m-quote"] *:before,[data-is="m-quote"] *:before,m-quote *:after,[riot-tag="m-quote"] *:after,[data-is="m-quote"] *:after{box-sizing:inherit} m-quote body,[riot-tag="m-quote"] body,[data-is="m-quote"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote i.fa,[riot-tag="m-quote"] i.fa,[data-is="m-quote"] i.fa{font-size:1.6rem} m-quote i.fa.hollow,[riot-tag="m-quote"] i.fa.hollow,[data-is="m-quote"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote i.fa.hollow.active,[riot-tag="m-quote"] i.fa.hollow.active,[data-is="m-quote"] i.fa.hollow.active{color:#fed729} m-quote button,[riot-tag="m-quote"] button,[data-is="m-quote"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote .btn-primary,[riot-tag="m-quote"] .btn-primary,[data-is="m-quote"] .btn-primary{background:#0e6bd8} m-quote .btn-secondary,[riot-tag="m-quote"] .btn-secondary,[data-is="m-quote"] .btn-secondary{background:#ff5d32} m-quote ul,[riot-tag="m-quote"] ul,[data-is="m-quote"] ul{list-style-type:none;padding:0} m-quote .interactive,[riot-tag="m-quote"] .interactive,[data-is="m-quote"] .interactive{cursor:pointer;padding:.3rem} m-quote .interactive:hover,[riot-tag="m-quote"] .interactive:hover,[data-is="m-quote"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote,[riot-tag="m-quote"],[data-is="m-quote"]{width:100%;display:block} m-quote blockquote,[riot-tag="m-quote"] blockquote,[data-is="m-quote"] blockquote{height:10rem;overflow:hidden} m-quote blockquote:before,[riot-tag="m-quote"] blockquote:before,[data-is="m-quote"] blockquote:before,m-quote blockquote:after,[riot-tag="m-quote"] blockquote:after,[data-is="m-quote"] blockquote:after{font-size:4rem;color:#c3d7db;font-family:\'Georgia\',serif;line-height:.6rem;height:.3rem;display:inline-block;vertical-align:bottom} m-quote blockquote:before,[riot-tag="m-quote"] blockquote:before,[data-is="m-quote"] blockquote:before{content:\'\\201c\'} m-quote blockquote:after,[riot-tag="m-quote"] blockquote:after,[data-is="m-quote"] blockquote:after{content:\'\\201d\'} m-quote cite,[riot-tag="m-quote"] cite,[data-is="m-quote"] cite{display:block;text-align:right} m-quote cite:before,[riot-tag="m-quote"] cite:before,[data-is="m-quote"] cite:before{content:"~";padding-right:.3rem}', '', function(opts) {
    var _this = this;
    this.mixin("redux");
    this.toggleFav = () => {
      const quote = _this.opts.dataQuote;
      quote.isFaved = !quote.isFaved;
      _this.store.dispatch({
        type: 'EDIT_QUOTE',
        payload: quote
      });
    };
    this.toggleArchive = () => {
      const quote = _this.opts.dataQuote;
      quote.isArchived = !quote.isArchived;
      _this.store.dispatch({
        type: 'EDIT_QUOTE',
        payload: quote
      });
    };
  });
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("1e", ["require", "exports", "module", "1b"], function(require, exports, module) {
      tagger(require('1b'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote-form', '<form id="quoteGreatForm"> <m-quote-field data-label="Quote" data-value="{opts.dataQuote.text}" data-placeholder="Enter quote here..."></m-quote-field> <m-quote-field data-label="Author" data-value="{opts.dataQuote.author}" data-is-single-line="true" data-placeholder="Enter author here..."></m-quote-field> <m-quote-field data-label="Notes" data-value="{opts.dataQuote.notes}" data-placeholder="Enter notes here about the quote..."></m-quote-field> <div class="flex-container"> <label for="favCtrl" class="inline" onclick="{toggleFav}"> Favorite <input type="hidden" name="favCtrl" id="favCtrl" value="{isFaved ? ⁗true⁗ : ⁗false⁗}"> <i class="fa fa-star hollow {isFaved ? \'active\' : \'\'}"></i> </label> <label for="archiveCtrl" class="inline" onclick="{toggleArchive}"> Archive <input type="hidden" name="archiveCtrl" id="archiveCtrl" value="{isArchived ? ⁗true⁗ : ⁗false⁗}"> <i class="fa fa-archive hollow {isArchived ? \'active\' : \'\'}"></i> </label> </div> <input type="hidden" name="quoteId" id="quoteId" value="{opts.dataQuote.id || store.getState().length}"> <input type="hidden" name="createdOn" value="{opts.dataQuote.createdOn}"> <div class="flex-container btn-container"> <button type="button" class="btn-secondary" onclick="{cancel}">Cancel</button> <button type="button" class="btn-primary" onclick="{save}">Save</button> </div> </form>', 'm-quote-form html,[riot-tag="m-quote-form"] html,[data-is="m-quote-form"] html{box-sizing:border-box} m-quote-form *,[riot-tag="m-quote-form"] *,[data-is="m-quote-form"] *,m-quote-form *:before,[riot-tag="m-quote-form"] *:before,[data-is="m-quote-form"] *:before,m-quote-form *:after,[riot-tag="m-quote-form"] *:after,[data-is="m-quote-form"] *:after{box-sizing:inherit} m-quote-form body,[riot-tag="m-quote-form"] body,[data-is="m-quote-form"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote-form i.fa,[riot-tag="m-quote-form"] i.fa,[data-is="m-quote-form"] i.fa{font-size:1.6rem} m-quote-form i.fa.hollow,[riot-tag="m-quote-form"] i.fa.hollow,[data-is="m-quote-form"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote-form i.fa.hollow.active,[riot-tag="m-quote-form"] i.fa.hollow.active,[data-is="m-quote-form"] i.fa.hollow.active{color:#fed729} m-quote-form button,[riot-tag="m-quote-form"] button,[data-is="m-quote-form"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-form .btn-primary,[riot-tag="m-quote-form"] .btn-primary,[data-is="m-quote-form"] .btn-primary{background:#0e6bd8} m-quote-form .btn-secondary,[riot-tag="m-quote-form"] .btn-secondary,[data-is="m-quote-form"] .btn-secondary{background:#ff5d32} m-quote-form ul,[riot-tag="m-quote-form"] ul,[data-is="m-quote-form"] ul{list-style-type:none;padding:0} m-quote-form .interactive,[riot-tag="m-quote-form"] .interactive,[data-is="m-quote-form"] .interactive{cursor:pointer;padding:.3rem} m-quote-form .interactive:hover,[riot-tag="m-quote-form"] .interactive:hover,[data-is="m-quote-form"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote-form,[riot-tag="m-quote-form"],[data-is="m-quote-form"]{display:block;overflow:hidden;transition:max-height .6s ease-in-out;background:#c3d7db;height:calc(100% - 1.55rem)} m-quote-form.hidden,[riot-tag="m-quote-form"].hidden,[data-is="m-quote-form"].hidden{max-height:0} m-quote-form form,[riot-tag="m-quote-form"] form,[data-is="m-quote-form"] form{height:100%} m-quote-form label,[riot-tag="m-quote-form"] label,[data-is="m-quote-form"] label{display:block;margin-bottom:1rem} m-quote-form input,[riot-tag="m-quote-form"] input,[data-is="m-quote-form"] input,m-quote-form textarea,[riot-tag="m-quote-form"] textarea,[data-is="m-quote-form"] textarea{width:100%;display:block;border-radius:.3rem;border:1px solid gray;-webkit-appearance:none;box-shadow:inset 0 0 15px -7px black;padding:.6rem} m-quote-form .quote-content,[riot-tag="m-quote-form"] .quote-content,[data-is="m-quote-form"] .quote-content{min-height:12rem;border:1px solid #090a0a;border-radius:.3rem;padding:.6rem} m-quote-form .quote-content:focus,[riot-tag="m-quote-form"] .quote-content:focus,[data-is="m-quote-form"] .quote-content:focus{background:#fafafa} m-quote-form input[type="checkbox"],[riot-tag="m-quote-form"] input[type="checkbox"],[data-is="m-quote-form"] input[type="checkbox"]{width:20px;height:20px;display:inline-block} m-quote-form label.inline,[riot-tag="m-quote-form"] label.inline,[data-is="m-quote-form"] label.inline{display:inline-block;width:auto} m-quote-form .flex-container,[riot-tag="m-quote-form"] .flex-container,[data-is="m-quote-form"] .flex-container{display:flex;justify-content:space-between;width:100%} m-quote-form .btn-container,[riot-tag="m-quote-form"] .btn-container,[data-is="m-quote-form"] .btn-container{position:absolute;bottom:0;left:0;padding:1rem}', 'data-quote', function(opts) {
    var _this = this;
    this.mixin('redux');
    this.mixin('actions');
    this.save = () => {
      const quote = {
        text: _this.txtQuote.value,
        author: _this.txtQuoteAuthor.value,
        isArchived: _this.isArchived,
        isFaved: _this.isFaved,
        notes: _this.txtNotes.value,
        createdOn: _this.createdOn || new Date(),
        modifiedOn: new Date(),
        id: _this.quoteId
      };
      const action = _this.opts.dataQuote ? _this.editQuote(quote) : _this.addQuote(quote);
      _this.store.dispatch(action);
      _this.clearForm();
      _this.store.dispatch({type: "CLOSE_MODAL"});
    };
    this.cancel = () => {
      _this.clearForm();
      _this.store.dispatch({type: "CLOSE_MODAL"});
    };
    this.clearForm = () => {
      _this.quoteGreatForm.reset();
      _this.txtQuoteAuthor.value = '';
      _this.isFaved = false;
      _this.isArchived = false;
    };
    this.toggleFav = () => {
      _this.isFaved = !_this.isFaved;
    };
    this.toggleArchive = () => {
      _this.isArchived = !_this.isArchived;
    };
    this.onContentEditableFocus = (event) => {
      let isNewQuote = !_this.opts.dataQuote;
      if (isNewQuote) {
        event.target.innerHTML = "";
      }
    };
    this.onContentEditableBlur = (event) => {
      if (!event.target.innerHTML) {
        event.target.innerHTML = event.target.dataset.placeholder;
      }
    };
  });
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("1f", ["require", "exports", "module", "1b"], function(require, exports, module) {
      tagger(require('1b'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote-container', '<main-nav></main-nav> <header>{filterName}</header> <i class="fa fa-plus interactive add-icon" onclick="{toggleQuoteForm}"></i> <m-quote-list></m-quote-list>', 'm-quote-container html,[riot-tag="m-quote-container"] html,[data-is="m-quote-container"] html{box-sizing:border-box} m-quote-container *,[riot-tag="m-quote-container"] *,[data-is="m-quote-container"] *,m-quote-container *:before,[riot-tag="m-quote-container"] *:before,[data-is="m-quote-container"] *:before,m-quote-container *:after,[riot-tag="m-quote-container"] *:after,[data-is="m-quote-container"] *:after{box-sizing:inherit} m-quote-container body,[riot-tag="m-quote-container"] body,[data-is="m-quote-container"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote-container i.fa,[riot-tag="m-quote-container"] i.fa,[data-is="m-quote-container"] i.fa{font-size:1.6rem} m-quote-container i.fa.hollow,[riot-tag="m-quote-container"] i.fa.hollow,[data-is="m-quote-container"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote-container i.fa.hollow.active,[riot-tag="m-quote-container"] i.fa.hollow.active,[data-is="m-quote-container"] i.fa.hollow.active{color:#fed729} m-quote-container button,[riot-tag="m-quote-container"] button,[data-is="m-quote-container"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-container .btn-primary,[riot-tag="m-quote-container"] .btn-primary,[data-is="m-quote-container"] .btn-primary{background:#0e6bd8} m-quote-container .btn-secondary,[riot-tag="m-quote-container"] .btn-secondary,[data-is="m-quote-container"] .btn-secondary{background:#ff5d32} m-quote-container ul,[riot-tag="m-quote-container"] ul,[data-is="m-quote-container"] ul{list-style-type:none;padding:0} m-quote-container .interactive,[riot-tag="m-quote-container"] .interactive,[data-is="m-quote-container"] .interactive{cursor:pointer;padding:.3rem} m-quote-container .interactive:hover,[riot-tag="m-quote-container"] .interactive:hover,[data-is="m-quote-container"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote-container,[riot-tag="m-quote-container"],[data-is="m-quote-container"]{position:relative;padding:2rem;display:block} m-quote-container .add-icon,[riot-tag="m-quote-container"] .add-icon,[data-is="m-quote-container"] .add-icon{position:absolute;top:1rem;right:1rem} m-quote-container header,[riot-tag="m-quote-container"] header,[data-is="m-quote-container"] header{text-align:center}', '', function(opts) {
    var _this = this;
    this.mixin("redux");
    this.store.subscribe(this.update);
    this.filterName = "Recent";
    this.on("mount", () => {});
    this.toggleQuoteForm = () => {
      _this.store.dispatch({
        type: "OPEN_MODAL",
        id: "quote-form-modal"
      });
    };
  });
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("20", ["require", "exports", "module", "1b"], function(require, exports, module) {
      tagger(require('1b'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-modal-curtain', '<yield></yield>', 'm-modal-curtain html,[riot-tag="m-modal-curtain"] html,[data-is="m-modal-curtain"] html{box-sizing:border-box} m-modal-curtain *,[riot-tag="m-modal-curtain"] *,[data-is="m-modal-curtain"] *,m-modal-curtain *:before,[riot-tag="m-modal-curtain"] *:before,[data-is="m-modal-curtain"] *:before,m-modal-curtain *:after,[riot-tag="m-modal-curtain"] *:after,[data-is="m-modal-curtain"] *:after{box-sizing:inherit} m-modal-curtain body,[riot-tag="m-modal-curtain"] body,[data-is="m-modal-curtain"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-modal-curtain i.fa,[riot-tag="m-modal-curtain"] i.fa,[data-is="m-modal-curtain"] i.fa{font-size:1.6rem} m-modal-curtain i.fa.hollow,[riot-tag="m-modal-curtain"] i.fa.hollow,[data-is="m-modal-curtain"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-modal-curtain i.fa.hollow.active,[riot-tag="m-modal-curtain"] i.fa.hollow.active,[data-is="m-modal-curtain"] i.fa.hollow.active{color:#fed729} m-modal-curtain button,[riot-tag="m-modal-curtain"] button,[data-is="m-modal-curtain"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-modal-curtain .btn-primary,[riot-tag="m-modal-curtain"] .btn-primary,[data-is="m-modal-curtain"] .btn-primary{background:#0e6bd8} m-modal-curtain .btn-secondary,[riot-tag="m-modal-curtain"] .btn-secondary,[data-is="m-modal-curtain"] .btn-secondary{background:#ff5d32} m-modal-curtain ul,[riot-tag="m-modal-curtain"] ul,[data-is="m-modal-curtain"] ul{list-style-type:none;padding:0} m-modal-curtain .interactive,[riot-tag="m-modal-curtain"] .interactive,[data-is="m-modal-curtain"] .interactive{cursor:pointer;padding:.3rem} m-modal-curtain .interactive:hover,[riot-tag="m-modal-curtain"] .interactive:hover,[data-is="m-modal-curtain"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-modal-curtain,[riot-tag="m-modal-curtain"],[data-is="m-modal-curtain"]{background:rgba(9,10,10,0.6);width:100%;height:100%;position:fixed;top:0;left:0;display:none;z-index:10} m-modal-curtain.visible,[riot-tag="m-modal-curtain"].visible,[data-is="m-modal-curtain"].visible{display:flex;justify-content:center;align-items:center}', 'class="{containsOpenModal() ? \'visible\' : \'\'}"', function(opts) {
    var _this = this;
    this.mixin("redux");
    this.store.subscribe(this.update);
    this.containsOpenModal = () => {
      const modals = [].concat(_this.tags["m-modal"]);
      const currentOpenModal = _this.store.getState().currentOpenModal;
      return !!modals.find((modal) => modal.root.id === currentOpenModal);
    };
  });
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("21", ["require", "exports", "module", "1b"], function(require, exports, module) {
      tagger(require('1b'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-modal', '<h2>{this.opts.dataModalTitle}</h2> <yield></yield>', 'm-modal html,[riot-tag="m-modal"] html,[data-is="m-modal"] html{box-sizing:border-box} m-modal *,[riot-tag="m-modal"] *,[data-is="m-modal"] *,m-modal *:before,[riot-tag="m-modal"] *:before,[data-is="m-modal"] *:before,m-modal *:after,[riot-tag="m-modal"] *:after,[data-is="m-modal"] *:after{box-sizing:inherit} m-modal body,[riot-tag="m-modal"] body,[data-is="m-modal"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-modal i.fa,[riot-tag="m-modal"] i.fa,[data-is="m-modal"] i.fa{font-size:1.6rem} m-modal i.fa.hollow,[riot-tag="m-modal"] i.fa.hollow,[data-is="m-modal"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-modal i.fa.hollow.active,[riot-tag="m-modal"] i.fa.hollow.active,[data-is="m-modal"] i.fa.hollow.active{color:#fed729} m-modal button,[riot-tag="m-modal"] button,[data-is="m-modal"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-modal .btn-primary,[riot-tag="m-modal"] .btn-primary,[data-is="m-modal"] .btn-primary{background:#0e6bd8} m-modal .btn-secondary,[riot-tag="m-modal"] .btn-secondary,[data-is="m-modal"] .btn-secondary{background:#ff5d32} m-modal ul,[riot-tag="m-modal"] ul,[data-is="m-modal"] ul{list-style-type:none;padding:0} m-modal .interactive,[riot-tag="m-modal"] .interactive,[data-is="m-modal"] .interactive{cursor:pointer;padding:.3rem} m-modal .interactive:hover,[riot-tag="m-modal"] .interactive:hover,[data-is="m-modal"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-modal,[riot-tag="m-modal"],[data-is="m-modal"]{width:100%;height:100%;margin:0;padding:1rem;background:#c3d7db} m-modal h2,[riot-tag="m-modal"] h2,[data-is="m-modal"] h2{margin:0}', 'data-modal-title', function(opts) {});
});

})();
$__System.registerDynamic('22', [], true, function ($__require, exports, module) {
  /* */
  "format cjs";
  /* Riot v2.3.18, @license MIT */

  var define,
      global = this || self,
      GLOBAL = global;
  ;(function (window, undefined) {
    'use strict';

    var riot = { version: 'v2.3.18', settings: {} },

    // be aware, internal usage
    // ATTENTION: prefix the global dynamic variables with `__`

    // counter to give a unique id to all the Tag instances
    __uid = 0,

    // tags instances cache
    __virtualDom = [],

    // tags implementation cache
    __tagImpl = {},


    /**
     * Const
     */
    GLOBAL_MIXIN = '__global_mixin',


    // riot specific prefixes
    RIOT_PREFIX = 'riot-',
        RIOT_TAG = RIOT_PREFIX + 'tag',
        RIOT_TAG_IS = 'data-is',


    // for typeof == '' comparisons
    T_STRING = 'string',
        T_OBJECT = 'object',
        T_UNDEF = 'undefined',
        T_FUNCTION = 'function',

    // special native tags that cannot be treated like the others
    SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
        RESERVED_WORDS_BLACKLIST = ['_item', '_id', '_parent', 'update', 'root', 'mount', 'unmount', 'mixin', 'isMounted', 'isLoop', 'tags', 'parent', 'opts', 'trigger', 'on', 'off', 'one'],


    // version# for IE 8-11, 0 for others
    IE_VERSION = (window && window.document || {}).documentMode | 0,


    // detect firefox to fix #1374
    FIREFOX = window && !!window.InstallTrigger;
    /* istanbul ignore next */
    riot.observable = function (el) {

      /**
       * Extend the original object or create a new empty one
       * @type { Object }
       */

      el = el || {};

      /**
       * Private variables and methods
       */
      var callbacks = {},
          slice = Array.prototype.slice,
          onEachEvent = function (e, fn) {
        e.replace(/\S+/g, fn);
      };

      // extend the object adding the observable methods
      Object.defineProperties(el, {
        /**
         * Listen to the given space separated list of `events` and execute the `callback` each time an event is triggered.
         * @param  { String } events - events ids
         * @param  { Function } fn - callback function
         * @returns { Object } el
         */
        on: {
          value: function (events, fn) {
            if (typeof fn != 'function') return el;

            onEachEvent(events, function (name, pos) {
              (callbacks[name] = callbacks[name] || []).push(fn);
              fn.typed = pos > 0;
            });

            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        },

        /**
         * Removes the given space separated list of `events` listeners
         * @param   { String } events - events ids
         * @param   { Function } fn - callback function
         * @returns { Object } el
         */
        off: {
          value: function (events, fn) {
            if (events == '*' && !fn) callbacks = {};else {
              onEachEvent(events, function (name) {
                if (fn) {
                  var arr = callbacks[name];
                  for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                    if (cb == fn) arr.splice(i--, 1);
                  }
                } else delete callbacks[name];
              });
            }
            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        },

        /**
         * Listen to the given space separated list of `events` and execute the `callback` at most once
         * @param   { String } events - events ids
         * @param   { Function } fn - callback function
         * @returns { Object } el
         */
        one: {
          value: function (events, fn) {
            function on() {
              el.off(events, on);
              fn.apply(el, arguments);
            }
            return el.on(events, on);
          },
          enumerable: false,
          writable: false,
          configurable: false
        },

        /**
         * Execute all callback functions that listen to the given space separated list of `events`
         * @param   { String } events - events ids
         * @returns { Object } el
         */
        trigger: {
          value: function (events) {

            // getting the arguments
            var arglen = arguments.length - 1,
                args = new Array(arglen),
                fns;

            for (var i = 0; i < arglen; i++) {
              args[i] = arguments[i + 1]; // skip first argument
            }

            onEachEvent(events, function (name) {

              fns = slice.call(callbacks[name] || [], 0);

              for (var i = 0, fn; fn = fns[i]; ++i) {
                if (fn.busy) return;
                fn.busy = 1;
                fn.apply(el, fn.typed ? [name].concat(args) : args);
                if (fns[i] !== fn) {
                  i--;
                }
                fn.busy = 0;
              }

              if (callbacks['*'] && name != '*') el.trigger.apply(el, ['*', name].concat(args));
            });

            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        }
      });

      return el;
    }
    /* istanbul ignore next */
    ;(function (riot) {

      /**
       * Simple client-side router
       * @module riot-route
       */

      var RE_ORIGIN = /^.+?\/\/+[^\/]+/,
          EVENT_LISTENER = 'EventListener',
          REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
          ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
          HAS_ATTRIBUTE = 'hasAttribute',
          REPLACE = 'replace',
          POPSTATE = 'popstate',
          HASHCHANGE = 'hashchange',
          TRIGGER = 'trigger',
          MAX_EMIT_STACK_LEVEL = 3,
          win = typeof window != 'undefined' && window,
          doc = typeof document != 'undefined' && document,
          hist = win && history,
          loc = win && (hist.location || win.location),
          // see html5-history-api
      prot = Router.prototype,
          // to minify more
      clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
          started = false,
          central = riot.observable(),
          routeFound = false,
          debouncedEmit,
          base,
          current,
          parser,
          secondParser,
          emitStack = [],
          emitStackLevel = 0;

      /**
       * Default parser. You can replace it via router.parser method.
       * @param {string} path - current path (normalized)
       * @returns {array} array
       */
      function DEFAULT_PARSER(path) {
        return path.split(/[/?#]/);
      }

      /**
       * Default parser (second). You can replace it via router.parser method.
       * @param {string} path - current path (normalized)
       * @param {string} filter - filter string (normalized)
       * @returns {array} array
       */
      function DEFAULT_SECOND_PARSER(path, filter) {
        var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
            args = path.match(re);

        if (args) return args.slice(1);
      }

      /**
       * Simple/cheap debounce implementation
       * @param   {function} fn - callback
       * @param   {number} delay - delay in seconds
       * @returns {function} debounced function
       */
      function debounce(fn, delay) {
        var t;
        return function () {
          clearTimeout(t);
          t = setTimeout(fn, delay);
        };
      }

      /**
       * Set the window listeners to trigger the routes
       * @param {boolean} autoExec - see route.start
       */
      function start(autoExec) {
        debouncedEmit = debounce(emit, 1);
        win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
        win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
        doc[ADD_EVENT_LISTENER](clickEvent, click);
        if (autoExec) emit(true);
      }

      /**
       * Router class
       */
      function Router() {
        this.$ = [];
        riot.observable(this); // make it observable
        central.on('stop', this.s.bind(this));
        central.on('emit', this.e.bind(this));
      }

      function normalize(path) {
        return path[REPLACE](/^\/|\/$/, '');
      }

      function isString(str) {
        return typeof str == 'string';
      }

      /**
       * Get the part after domain name
       * @param {string} href - fullpath
       * @returns {string} path from root
       */
      function getPathFromRoot(href) {
        return (href || loc.href)[REPLACE](RE_ORIGIN, '');
      }

      /**
       * Get the part after base
       * @param {string} href - fullpath
       * @returns {string} path from base
       */
      function getPathFromBase(href) {
        return base[0] == '#' ? (href || loc.href || '').split(base)[1] || '' : (loc ? getPathFromRoot(href) : href || '')[REPLACE](base, '');
      }

      function emit(force) {
        // the stack is needed for redirections
        var isRoot = emitStackLevel == 0;
        if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) return;

        emitStackLevel++;
        emitStack.push(function () {
          var path = getPathFromBase();
          if (force || path != current) {
            central[TRIGGER]('emit', path);
            current = path;
          }
        });
        if (isRoot) {
          while (emitStack.length) {
            emitStack[0]();
            emitStack.shift();
          }
          emitStackLevel = 0;
        }
      }

      function click(e) {
        if (e.which != 1 // not left click
        || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
        || e.defaultPrevented // or default prevented
        ) return;

        var el = e.target;
        while (el && el.nodeName != 'A') el = el.parentNode;

        if (!el || el.nodeName != 'A' // not A tag
        || el[HAS_ATTRIBUTE]('download') // has download attr
        || !el[HAS_ATTRIBUTE]('href') // has no href attr
        || el.target && el.target != '_self' // another window or frame
        || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1 // cross origin
        ) return;

        if (el.href != loc.href) {
          if (el.href.split('#')[0] == loc.href.split('#')[0] // internal jump
          || base != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
          || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
          ) return;
        }

        e.preventDefault();
      }

      /**
       * Go to the path
       * @param {string} path - destination path
       * @param {string} title - page title
       * @param {boolean} shouldReplace - use replaceState or pushState
       * @returns {boolean} - route not found flag
       */
      function go(path, title, shouldReplace) {
        if (hist) {
          // if a browser
          path = base + normalize(path);
          title = title || doc.title;
          // browsers ignores the second parameter `title`
          shouldReplace ? hist.replaceState(null, title, path) : hist.pushState(null, title, path);
          // so we need to set it manually
          doc.title = title;
          routeFound = false;
          emit();
          return routeFound;
        }

        // Server-side usage: directly execute handlers for the path
        return central[TRIGGER]('emit', getPathFromBase(path));
      }

      /**
       * Go to path or set action
       * a single string:                go there
       * two strings:                    go there with setting a title
       * two strings and boolean:        replace history with setting a title
       * a single function:              set an action on the default route
       * a string/RegExp and a function: set an action on the route
       * @param {(string|function)} first - path / action / filter
       * @param {(string|RegExp|function)} second - title / action
       * @param {boolean} third - replace flag
       */
      prot.m = function (first, second, third) {
        if (isString(first) && (!second || isString(second))) go(first, second, third || false);else if (second) this.r(first, second);else this.r('@', first);
      };

      /**
       * Stop routing
       */
      prot.s = function () {
        this.off('*');
        this.$ = [];
      };

      /**
       * Emit
       * @param {string} path - path
       */
      prot.e = function (path) {
        this.$.concat('@').some(function (filter) {
          var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter));
          if (typeof args != 'undefined') {
            this[TRIGGER].apply(null, [filter].concat(args));
            return routeFound = true; // exit from loop
          }
        }, this);
      };

      /**
       * Register route
       * @param {string} filter - filter for matching to url
       * @param {function} action - action to register
       */
      prot.r = function (filter, action) {
        if (filter != '@') {
          filter = '/' + normalize(filter);
          this.$.push(filter);
        }
        this.on(filter, action);
      };

      var mainRouter = new Router();
      var route = mainRouter.m.bind(mainRouter);

      /**
       * Create a sub router
       * @returns {function} the method of a new Router object
       */
      route.create = function () {
        var newSubRouter = new Router();
        // assign sub-router's main method
        var router = newSubRouter.m.bind(newSubRouter);
        // stop only this sub-router
        router.stop = newSubRouter.s.bind(newSubRouter);
        return router;
      };

      /**
       * Set the base of url
       * @param {(str|RegExp)} arg - a new base or '#' or '#!'
       */
      route.base = function (arg) {
        base = arg || '#';
        current = getPathFromBase(); // recalculate current path
      };

      /** Exec routing right now **/
      route.exec = function () {
        emit(true);
      };

      /**
       * Replace the default router to yours
       * @param {function} fn - your parser function
       * @param {function} fn2 - your secondParser function
       */
      route.parser = function (fn, fn2) {
        if (!fn && !fn2) {
          // reset parser for testing...
          parser = DEFAULT_PARSER;
          secondParser = DEFAULT_SECOND_PARSER;
        }
        if (fn) parser = fn;
        if (fn2) secondParser = fn2;
      };

      /**
       * Helper function to get url query as an object
       * @returns {object} parsed query
       */
      route.query = function () {
        var q = {};
        var href = loc.href || current;
        href[REPLACE](/[?&](.+?)=([^&]*)/g, function (_, k, v) {
          q[k] = v;
        });
        return q;
      };

      /** Stop routing **/
      route.stop = function () {
        if (started) {
          if (win) {
            win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
            win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
            doc[REMOVE_EVENT_LISTENER](clickEvent, click);
          }
          central[TRIGGER]('stop');
          started = false;
        }
      };

      /**
       * Start routing
       * @param {boolean} autoExec - automatically exec after starting if true
       */
      route.start = function (autoExec) {
        if (!started) {
          if (win) {
            if (document.readyState == 'complete') start(autoExec);
            // the timeout is needed to solve
            // a weird safari bug https://github.com/riot/route/issues/33
            else win[ADD_EVENT_LISTENER]('load', function () {
                setTimeout(function () {
                  start(autoExec);
                }, 1);
              });
          }
          started = true;
        }
      };

      /** Prepare the router **/
      route.base();
      route.parser();

      riot.route = route;
    })(riot);
    /* istanbul ignore next */

    /**
     * The riot template engine
     * @version v2.3.22
     */

    /**
     * riot.util.brackets
     *
     * - `brackets    ` - Returns a string or regex based on its parameter
     * - `brackets.set` - Change the current riot brackets
     *
     * @module
     */

    var brackets = function (UNDEF) {

      var REGLOB = 'g',
          R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
          R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
          S_QBLOCKS = R_STRINGS.source + '|' + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
          FINDBRACES = {
        '(': RegExp('([()])|' + S_QBLOCKS, REGLOB),
        '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
        '{': RegExp('([{}])|' + S_QBLOCKS, REGLOB)
      },
          DEFAULT = '{ }';

      var _pairs = ['{', '}', '{', '}', /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/];

      var cachedBrackets = UNDEF,
          _regex,
          _cache = [],
          _settings;

      function _loopback(re) {
        return re;
      }

      function _rewrite(re, bp) {
        if (!bp) bp = _cache;
        return new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : '');
      }

      function _create(pair) {
        if (pair === DEFAULT) return _pairs;

        var arr = pair.split(' ');

        if (arr.length !== 2 || /[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)) {
          throw new Error('Unsupported brackets "' + pair + '"');
        }
        arr = arr.concat(pair.replace(/(?=[[\]()*+?.^$|])/g, '\\').split(' '));

        arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
        arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
        arr[6] = _rewrite(_pairs[6], arr);
        arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB);
        arr[8] = pair;
        return arr;
      }

      function _brackets(reOrIdx) {
        return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx];
      }

      _brackets.split = function split(str, tmpl, _bp) {
        // istanbul ignore next: _bp is for the compiler
        if (!_bp) _bp = _cache;

        var parts = [],
            match,
            isexpr,
            start,
            pos,
            re = _bp[6];

        isexpr = start = re.lastIndex = 0;

        while (match = re.exec(str)) {

          pos = match.index;

          if (isexpr) {

            if (match[2]) {
              re.lastIndex = skipBraces(str, match[2], re.lastIndex);
              continue;
            }
            if (!match[3]) {
              continue;
            }
          }

          if (!match[1]) {
            unescapeStr(str.slice(start, pos));
            start = re.lastIndex;
            re = _bp[6 + (isexpr ^= 1)];
            re.lastIndex = start;
          }
        }

        if (str && start < str.length) {
          unescapeStr(str.slice(start));
        }

        return parts;

        function unescapeStr(s) {
          if (tmpl || isexpr) {
            parts.push(s && s.replace(_bp[5], '$1'));
          } else {
            parts.push(s);
          }
        }

        function skipBraces(s, ch, ix) {
          var match,
              recch = FINDBRACES[ch];

          recch.lastIndex = ix;
          ix = 1;
          while (match = recch.exec(s)) {
            if (match[1] && !(match[1] === ch ? ++ix : --ix)) break;
          }
          return ix ? s.length : recch.lastIndex;
        }
      };

      _brackets.hasExpr = function hasExpr(str) {
        return _cache[4].test(str);
      };

      _brackets.loopKeys = function loopKeys(expr) {
        var m = expr.match(_cache[9]);

        return m ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] } : { val: expr.trim() };
      };

      _brackets.array = function array(pair) {
        return pair ? _create(pair) : _cache;
      };

      function _reset(pair) {
        if ((pair || (pair = DEFAULT)) !== _cache[8]) {
          _cache = _create(pair);
          _regex = pair === DEFAULT ? _loopback : _rewrite;
          _cache[9] = _regex(_pairs[9]);
        }
        cachedBrackets = pair;
      }

      function _setSettings(o) {
        var b;

        o = o || {};
        b = o.brackets;
        Object.defineProperty(o, 'brackets', {
          set: _reset,
          get: function () {
            return cachedBrackets;
          },
          enumerable: true
        });
        _settings = o;
        _reset(b);
      }

      Object.defineProperty(_brackets, 'settings', {
        set: _setSettings,
        get: function () {
          return _settings;
        }
      });

      /* istanbul ignore next: in the browser riot is always in the scope */
      _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
      _brackets.set = _reset;

      _brackets.R_STRINGS = R_STRINGS;
      _brackets.R_MLCOMMS = R_MLCOMMS;
      _brackets.S_QBLOCKS = S_QBLOCKS;

      return _brackets;
    }();

    /**
     * @module tmpl
     *
     * tmpl          - Root function, returns the template value, render with data
     * tmpl.hasExpr  - Test the existence of a expression inside a string
     * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
     */

    var tmpl = function () {

      var _cache = {};

      function _tmpl(str, data) {
        if (!str) return str;

        return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr);
      }

      _tmpl.haveRaw = brackets.hasRaw;

      _tmpl.hasExpr = brackets.hasExpr;

      _tmpl.loopKeys = brackets.loopKeys;

      _tmpl.errorHandler = null;

      function _logErr(err, ctx) {

        if (_tmpl.errorHandler) {

          err.riotData = {
            tagName: ctx && ctx.root && ctx.root.tagName,
            _riot_id: ctx && ctx._riot_id //eslint-disable-line camelcase
          };
          _tmpl.errorHandler(err);
        }
      }

      function _create(str) {
        var expr = _getTmpl(str);

        if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr;

        return new Function('E', expr + ';'); //eslint-disable-line no-new-func
      }

      var CH_IDEXPR = '\u2057',
          RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
          RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
          RE_DQUOTE = /\u2057/g,
          RE_QBMARK = /\u2057(\d+)~/g;

      function _getTmpl(str) {
        var qstr = [],
            expr,
            parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);

        if (parts.length > 2 || parts[0]) {
          var i,
              j,
              list = [];

          for (i = j = 0; i < parts.length; ++i) {

            expr = parts[i];

            if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"')) list[j++] = expr;
          }

          expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
        } else {

          expr = _parseExpr(parts[1], 0, qstr);
        }

        if (qstr[0]) {
          expr = expr.replace(RE_QBMARK, function (_, pos) {
            return qstr[pos].replace(/\r/g, '\\r').replace(/\n/g, '\\n');
          });
        }
        return expr;
      }

      var RE_BREND = {
        '(': /[()]/g,
        '[': /[[\]]/g,
        '{': /[{}]/g
      };

      function _parseExpr(expr, asText, qstr) {

        expr = expr.replace(RE_QBLOCK, function (s, div) {
          return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + '~' : s;
        }).replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

        if (expr) {
          var list = [],
              cnt = 0,
              match;

          while (expr && (match = expr.match(RE_CSNAME)) && !match.index) {
            var key,
                jsb,
                re = /,|([[{(])|$/g;

            expr = RegExp.rightContext;
            key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

            while (jsb = (match = re.exec(expr))[1]) skipBraces(jsb, re);

            jsb = expr.slice(0, match.index);
            expr = RegExp.rightContext;

            list[cnt++] = _wrapExpr(jsb, 1, key);
          }

          expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
        }
        return expr;

        function skipBraces(ch, re) {
          var mm,
              lv = 1,
              ir = RE_BREND[ch];

          ir.lastIndex = re.lastIndex;
          while (mm = ir.exec(expr)) {
            if (mm[0] === ch) ++lv;else if (! --lv) break;
          }
          re.lastIndex = lv ? expr.length : ir.lastIndex;
        }
      }

      // istanbul ignore next: not both
      var // eslint-disable-next-line max-len
      JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
          JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
          JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

      function _wrapExpr(expr, asText, key) {
        var tb;

        expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
          if (mvar) {
            pos = tb ? 0 : pos + match.length;

            if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
              match = p + '("' + mvar + JS_CONTEXT + mvar;
              if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '[';
            } else if (pos) {
              tb = !JS_NOPROPS.test(s.slice(pos));
            }
          }
          return match;
        });

        if (tb) {
          expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
        }

        if (key) {

          expr = (tb ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""';
        } else if (asText) {

          expr = 'function(v){' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)';
        }

        return expr;
      }

      // istanbul ignore next: compatibility fix for beta versions
      _tmpl.parse = function (s) {
        return s;
      };

      _tmpl.version = brackets.version = 'v2.3.22';

      return _tmpl;
    }();

    /*
      lib/browser/tag/mkdom.js
    
      Includes hacks needed for the Internet Explorer version 9 and below
      See: http://kangax.github.io/compat-table/es5/#ie8
           http://codeplanet.io/dropping-ie8/
    */
    var mkdom = function _mkdom() {
      var reHasYield = /<yield\b/i,
          reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
          reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
          reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
      var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
          tblTags = IE_VERSION && IE_VERSION < 10 ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;

      /**
       * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
       * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
       *
       * @param   {string} templ  - The template coming from the custom tag definition
       * @param   {string} [html] - HTML content that comes from the DOM element where you
       *           will mount the tag, mostly the original tag in the page
       * @returns {HTMLElement} DOM element with _templ_ merged through `YIELD` with the _html_.
       */
      function _mkdom(templ, html) {
        var match = templ && templ.match(/^\s*<([-\w]+)/),
            tagName = match && match[1].toLowerCase(),
            el = mkEl('div');

        // replace all the yield tags with the tag inner html
        templ = replaceYield(templ, html);

        /* istanbul ignore next */
        if (tblTags.test(tagName)) el = specialTags(el, templ, tagName);else el.innerHTML = templ;

        el.stub = true;

        return el;
      }

      /*
        Creates the root element for table or select child elements:
        tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
      */
      function specialTags(el, templ, tagName) {
        var select = tagName[0] === 'o',
            parent = select ? 'select>' : 'table>';

        // trim() is important here, this ensures we don't have artifacts,
        // so we can check if we have only one element inside the parent
        el.innerHTML = '<' + parent + templ.trim() + '</' + parent;
        parent = el.firstChild;

        // returns the immediate parent if tr/th/td/col is the only element, if not
        // returns the whole tree, as this can include additional elements
        if (select) {
          parent.selectedIndex = -1; // for IE9, compatible w/current riot behavior
        } else {
          // avoids insertion of cointainer inside container (ex: tbody inside tbody)
          var tname = rootEls[tagName];
          if (tname && parent.childElementCount === 1) parent = $(tname, parent);
        }
        return parent;
      }

      /*
        Replace the yield tag from any tag template with the innerHTML of the
        original tag in the page
      */
      function replaceYield(templ, html) {
        // do nothing if no yield
        if (!reHasYield.test(templ)) return templ;

        // be careful with #1343 - string on the source having `$1`
        var src = {};

        html = html && html.replace(reYieldSrc, function (_, ref, text) {
          src[ref] = src[ref] || text; // preserve first definition
          return '';
        }).trim();

        return templ.replace(reYieldDest, function (_, ref, def) {
          // yield with from - to attrs
          return src[ref] || def || '';
        }).replace(reYieldAll, function (_, def) {
          // yield without any "from"
          return html || def || '';
        });
      }

      return _mkdom;
    }();

    /**
     * Convert the item looped into an object used to extend the child tag properties
     * @param   { Object } expr - object containing the keys used to extend the children tags
     * @param   { * } key - value to assign to the new object returned
     * @param   { * } val - value containing the position of the item in the array
     * @returns { Object } - new object containing the values of the original item
     *
     * The variables 'key' and 'val' are arbitrary.
     * They depend on the collection type looped (Array, Object)
     * and on the expression used on the each tag
     *
     */
    function mkitem(expr, key, val) {
      var item = {};
      item[expr.key] = key;
      if (expr.pos) item[expr.pos] = val;
      return item;
    }

    /**
     * Unmount the redundant tags
     * @param   { Array } items - array containing the current items to loop
     * @param   { Array } tags - array containing all the children tags
     */
    function unmountRedundant(items, tags) {

      var i = tags.length,
          j = items.length,
          t;

      while (i > j) {
        t = tags[--i];
        tags.splice(i, 1);
        t.unmount();
      }
    }

    /**
     * Move the nested custom tags in non custom loop tags
     * @param   { Object } child - non custom loop tag
     * @param   { Number } i - current position of the loop tag
     */
    function moveNestedTags(child, i) {
      Object.keys(child.tags).forEach(function (tagName) {
        var tag = child.tags[tagName];
        if (isArray(tag)) each(tag, function (t) {
          moveChildTag(t, tagName, i);
        });else moveChildTag(tag, tagName, i);
      });
    }

    /**
     * Adds the elements for a virtual tag
     * @param { Tag } tag - the tag whose root's children will be inserted or appended
     * @param { Node } src - the node that will do the inserting or appending
     * @param { Tag } target - only if inserting, insert before this tag's first child
     */
    function addVirtual(tag, src, target) {
      var el = tag._root,
          sib;
      tag._virts = [];
      while (el) {
        sib = el.nextSibling;
        if (target) src.insertBefore(el, target._root);else src.appendChild(el);

        tag._virts.push(el); // hold for unmounting
        el = sib;
      }
    }

    /**
     * Move virtual tag and all child nodes
     * @param { Tag } tag - first child reference used to start move
     * @param { Node } src  - the node that will do the inserting
     * @param { Tag } target - insert before this tag's first child
     * @param { Number } len - how many child nodes to move
     */
    function moveVirtual(tag, src, target, len) {
      var el = tag._root,
          sib,
          i = 0;
      for (; i < len; i++) {
        sib = el.nextSibling;
        src.insertBefore(el, target._root);
        el = sib;
      }
    }

    /**
     * Manage tags having the 'each'
     * @param   { Object } dom - DOM node we need to loop
     * @param   { Tag } parent - parent tag instance where the dom node is contained
     * @param   { String } expr - string contained in the 'each' attribute
     */
    function _each(dom, parent, expr) {

      // remove the each property from the original tag
      remAttr(dom, 'each');

      var mustReorder = typeof getAttr(dom, 'no-reorder') !== T_STRING || remAttr(dom, 'no-reorder'),
          tagName = getTagName(dom),
          impl = __tagImpl[tagName] || { tmpl: dom.outerHTML },
          useRoot = SPECIAL_TAGS_REGEX.test(tagName),
          root = dom.parentNode,
          ref = document.createTextNode(''),
          child = getTag(dom),
          isOption = tagName.toLowerCase() === 'option',
          // the option tags must be treated differently
      tags = [],
          oldItems = [],
          hasKeys,
          isVirtual = dom.tagName == 'VIRTUAL';

      // parse the each expression
      expr = tmpl.loopKeys(expr);

      // insert a marked where the loop tags will be injected
      root.insertBefore(ref, dom);

      // clean template code
      parent.one('before-mount', function () {

        // remove the original DOM node
        dom.parentNode.removeChild(dom);
        if (root.stub) root = parent.root;
      }).on('update', function () {
        // get the new items collection
        var items = tmpl(expr.val, parent),

        // create a fragment to hold the new DOM nodes to inject in the parent tag
        frag = document.createDocumentFragment();

        // object loop. any changes cause full redraw
        if (!isArray(items)) {
          hasKeys = items || false;
          items = hasKeys ? Object.keys(items).map(function (key) {
            return mkitem(expr, key, items[key]);
          }) : [];
        }

        // loop all the new items
        var i = 0,
            itemsLength = items.length;

        for (; i < itemsLength; i++) {
          // reorder only if the items are objects
          var item = items[i],
              _mustReorder = mustReorder && item instanceof Object && !hasKeys,
              oldPos = oldItems.indexOf(item),
              pos = ~oldPos && _mustReorder ? oldPos : i,

          // does a tag exist in this position?
          tag = tags[pos];

          item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;

          // new tag
          if (!_mustReorder && !tag // with no-reorder we just update the old tags
          || _mustReorder && !~oldPos || !tag // by default we always try to reorder the DOM elements
          ) {

              tag = new Tag(impl, {
                parent: parent,
                isLoop: true,
                hasImpl: !!__tagImpl[tagName],
                root: useRoot ? root : dom.cloneNode(),
                item: item
              }, dom.innerHTML);

              tag.mount();

              if (isVirtual) tag._root = tag.root.firstChild; // save reference for further moves or inserts
              // this tag must be appended
              if (i == tags.length || !tags[i]) {
                // fix 1581
                if (isVirtual) addVirtual(tag, frag);else frag.appendChild(tag.root);
              }
              // this tag must be insert
              else {
                  if (isVirtual) addVirtual(tag, root, tags[i]);else root.insertBefore(tag.root, tags[i].root); // #1374 some browsers reset selected here
                  oldItems.splice(i, 0, item);
                }

              tags.splice(i, 0, tag);
              pos = i; // handled here so no move
            } else tag.update(item, true);

          // reorder the tag if it's not located in its previous position
          if (pos !== i && _mustReorder && tags[i] // fix 1581 unable to reproduce it in a test!
          ) {
              // update the DOM
              if (isVirtual) moveVirtual(tag, root, tags[i], dom.childNodes.length);else root.insertBefore(tag.root, tags[i].root);
              // update the position attribute if it exists
              if (expr.pos) tag[expr.pos] = i;
              // move the old tag instance
              tags.splice(i, 0, tags.splice(pos, 1)[0]);
              // move the old item
              oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
              // if the loop tags are not custom
              // we need to move all their custom tags into the right position
              if (!child && tag.tags) moveNestedTags(tag, i);
            }

          // cache the original item to use it in the events bound to this node
          // and its children
          tag._item = item;
          // cache the real parent tag internally
          defineProperty(tag, '_parent', parent);
        }

        // remove the redundant tags
        unmountRedundant(items, tags);

        // insert the new nodes
        if (isOption) {
          root.appendChild(frag);

          // #1374 FireFox bug in <option selected={expression}>
          if (FIREFOX && !root.multiple) {
            for (var n = 0; n < root.length; n++) {
              if (root[n].__riot1374) {
                root.selectedIndex = n; // clear other options
                delete root[n].__riot1374;
                break;
              }
            }
          }
        } else root.insertBefore(frag, ref);

        // set the 'tags' property of the parent tag
        // if child is 'undefined' it means that we don't need to set this property
        // for example:
        // we don't need store the `myTag.tags['div']` property if we are looping a div tag
        // but we need to track the `myTag.tags['child']` property looping a custom child node named `child`
        if (child) parent.tags[tagName] = tags;

        // clone the items array
        oldItems = items.slice();
      });
    }
    /**
     * Object that will be used to inject and manage the css of every tag instance
     */
    var styleManager = function (_riot) {

      if (!window) return { // skip injection on the server
        add: function () {},
        inject: function () {}
      };

      var styleNode = function () {
        // create a new style element with the correct type
        var newNode = mkEl('style');
        setAttr(newNode, 'type', 'text/css');

        // replace any user node or insert the new one into the head
        var userNode = $('style[type=riot]');
        if (userNode) {
          if (userNode.id) newNode.id = userNode.id;
          userNode.parentNode.replaceChild(newNode, userNode);
        } else document.getElementsByTagName('head')[0].appendChild(newNode);

        return newNode;
      }();

      // Create cache and shortcut to the correct property
      var cssTextProp = styleNode.styleSheet,
          stylesToInject = '';

      // Expose the style node in a non-modificable property
      Object.defineProperty(_riot, 'styleNode', {
        value: styleNode,
        writable: true
      });

      /**
       * Public api
       */
      return {
        /**
         * Save a tag style to be later injected into DOM
         * @param   { String } css [description]
         */
        add: function (css) {
          stylesToInject += css;
        },
        /**
         * Inject all previously saved tag styles into DOM
         * innerHTML seems slow: http://jsperf.com/riot-insert-style
         */
        inject: function () {
          if (stylesToInject) {
            if (cssTextProp) cssTextProp.cssText += stylesToInject;else styleNode.innerHTML += stylesToInject;
            stylesToInject = '';
          }
        }
      };
    }(riot);

    function parseNamedElements(root, tag, childTags, forceParsingNamed) {

      walk(root, function (dom) {
        if (dom.nodeType == 1) {
          dom.isLoop = dom.isLoop || dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each') ? 1 : 0;

          // custom child tag
          if (childTags) {
            var child = getTag(dom);

            if (child && !dom.isLoop) childTags.push(initChildTag(child, { root: dom, parent: tag }, dom.innerHTML, tag));
          }

          if (!dom.isLoop || forceParsingNamed) setNamed(dom, tag, []);
        }
      });
    }

    function parseExpressions(root, tag, expressions) {

      function addExpr(dom, val, extra) {
        if (tmpl.hasExpr(val)) {
          expressions.push(extend({ dom: dom, expr: val }, extra));
        }
      }

      walk(root, function (dom) {
        var type = dom.nodeType,
            attr;

        // text node
        if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue);
        if (type != 1) return;

        /* element */

        // loop
        attr = getAttr(dom, 'each');

        if (attr) {
          _each(dom, tag, attr);return false;
        }

        // attribute expressions
        each(dom.attributes, function (attr) {
          var name = attr.name,
              bool = name.split('__')[1];

          addExpr(dom, attr.value, { attr: bool || name, bool: bool });
          if (bool) {
            remAttr(dom, name);return false;
          }
        });

        // skip custom tags
        if (getTag(dom)) return false;
      });
    }
    function Tag(impl, conf, innerHTML) {

      var self = riot.observable(this),
          opts = inherit(conf.opts) || {},
          parent = conf.parent,
          isLoop = conf.isLoop,
          hasImpl = conf.hasImpl,
          item = cleanUpData(conf.item),
          expressions = [],
          childTags = [],
          root = conf.root,
          tagName = root.tagName.toLowerCase(),
          attr = {},
          propsInSyncWithParent = [],
          dom;

      // only call unmount if we have a valid __tagImpl (has name property)
      if (impl.name && root._tag) root._tag.unmount(true);

      // not yet mounted
      this.isMounted = false;
      root.isLoop = isLoop;

      // keep a reference to the tag just created
      // so we will be able to mount this tag multiple times
      root._tag = this;

      // create a unique id to this tag
      // it could be handy to use it also to improve the virtual dom rendering speed
      defineProperty(this, '_riot_id', ++__uid); // base 1 allows test !t._riot_id

      extend(this, { parent: parent, root: root, opts: opts, tags: {} }, item);

      // grab attributes
      each(root.attributes, function (el) {
        var val = el.value;
        // remember attributes with expressions only
        if (tmpl.hasExpr(val)) attr[el.name] = val;
      });

      dom = mkdom(impl.tmpl, innerHTML);

      // options
      function updateOpts() {
        var ctx = hasImpl && isLoop ? self : parent || self;

        // update opts from current DOM attributes
        each(root.attributes, function (el) {
          var val = el.value;
          opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val;
        });
        // recover those with expressions
        each(Object.keys(attr), function (name) {
          opts[toCamel(name)] = tmpl(attr[name], ctx);
        });
      }

      function normalizeData(data) {
        for (var key in item) {
          if (typeof self[key] !== T_UNDEF && isWritable(self, key)) self[key] = data[key];
        }
      }

      function inheritFromParent() {
        if (!self.parent || !isLoop) return;
        each(Object.keys(self.parent), function (k) {
          // some properties must be always in sync with the parent tag
          var mustSync = !contains(RESERVED_WORDS_BLACKLIST, k) && contains(propsInSyncWithParent, k);
          if (typeof self[k] === T_UNDEF || mustSync) {
            // track the property to keep in sync
            // so we can keep it updated
            if (!mustSync) propsInSyncWithParent.push(k);
            self[k] = self.parent[k];
          }
        });
      }

      /**
       * Update the tag expressions and options
       * @param   { * }  data - data we want to use to extend the tag properties
       * @param   { Boolean } isInherited - is this update coming from a parent tag?
       * @returns { self }
       */
      defineProperty(this, 'update', function (data, isInherited) {

        // make sure the data passed will not override
        // the component core methods
        data = cleanUpData(data);
        // inherit properties from the parent
        inheritFromParent();
        // normalize the tag properties in case an item object was initially passed
        if (data && isObject(item)) {
          normalizeData(data);
          item = data;
        }
        extend(self, data);
        updateOpts();
        self.trigger('update', data);
        update(expressions, self);

        // the updated event will be triggered
        // once the DOM will be ready and all the re-flows are completed
        // this is useful if you want to get the "real" root properties
        // 4 ex: root.offsetWidth ...
        if (isInherited && self.parent)
          // closes #1599
          self.parent.one('updated', function () {
            self.trigger('updated');
          });else rAF(function () {
          self.trigger('updated');
        });

        return this;
      });

      defineProperty(this, 'mixin', function () {
        each(arguments, function (mix) {
          var instance;

          mix = typeof mix === T_STRING ? riot.mixin(mix) : mix;

          // check if the mixin is a function
          if (isFunction(mix)) {
            // create the new mixin instance
            instance = new mix();
            // save the prototype to loop it afterwards
            mix = mix.prototype;
          } else instance = mix;

          // loop the keys in the function prototype or the all object keys
          each(Object.getOwnPropertyNames(mix), function (key) {
            // bind methods to self
            if (key != 'init') self[key] = isFunction(instance[key]) ? instance[key].bind(self) : instance[key];
          });

          // init method will be called automatically
          if (instance.init) instance.init.bind(self)();
        });
        return this;
      });

      defineProperty(this, 'mount', function () {

        updateOpts();

        // add global mixin
        var globalMixin = riot.mixin(GLOBAL_MIXIN);
        if (globalMixin) self.mixin(globalMixin);

        // initialiation
        if (impl.fn) impl.fn.call(self, opts);

        // parse layout after init. fn may calculate args for nested custom tags
        parseExpressions(dom, self, expressions);

        // mount the child tags
        toggle(true);

        // update the root adding custom attributes coming from the compiler
        // it fixes also #1087
        if (impl.attrs) walkAttributes(impl.attrs, function (k, v) {
          setAttr(root, k, v);
        });
        if (impl.attrs || hasImpl) parseExpressions(self.root, self, expressions);

        if (!self.parent || isLoop) self.update(item);

        // internal use only, fixes #403
        self.trigger('before-mount');

        if (isLoop && !hasImpl) {
          // update the root attribute for the looped elements
          root = dom.firstChild;
        } else {
          while (dom.firstChild) root.appendChild(dom.firstChild);
          if (root.stub) root = parent.root;
        }

        defineProperty(self, 'root', root);

        // parse the named dom nodes in the looped child
        // adding them to the parent as well
        if (isLoop) parseNamedElements(self.root, self.parent, null, true);

        // if it's not a child tag we can trigger its mount event
        if (!self.parent || self.parent.isMounted) {
          self.isMounted = true;
          self.trigger('mount');
        }
        // otherwise we need to wait that the parent event gets triggered
        else self.parent.one('mount', function () {
            // avoid to trigger the `mount` event for the tags
            // not visible included in an if statement
            if (!isInStub(self.root)) {
              self.parent.isMounted = self.isMounted = true;
              self.trigger('mount');
            }
          });
      });

      defineProperty(this, 'unmount', function (keepRootTag) {
        var el = root,
            p = el.parentNode,
            ptag,
            tagIndex = __virtualDom.indexOf(self);

        self.trigger('before-unmount');

        // remove this tag instance from the global virtualDom variable
        if (~tagIndex) __virtualDom.splice(tagIndex, 1);

        if (p) {

          if (parent) {
            ptag = getImmediateCustomParentTag(parent);
            // remove this tag from the parent tags object
            // if there are multiple nested tags with same name..
            // remove this element form the array
            if (isArray(ptag.tags[tagName])) each(ptag.tags[tagName], function (tag, i) {
              if (tag._riot_id == self._riot_id) ptag.tags[tagName].splice(i, 1);
            });else
              // otherwise just delete the tag instance
              ptag.tags[tagName] = undefined;
          } else while (el.firstChild) el.removeChild(el.firstChild);

          if (!keepRootTag) p.removeChild(el);else {
            // the riot-tag and the data-is attributes aren't needed anymore, remove them
            remAttr(p, RIOT_TAG_IS);
            remAttr(p, RIOT_TAG); // this will be removed in riot 3.0.0
          }
        }

        if (this._virts) {
          each(this._virts, function (v) {
            if (v.parentNode) v.parentNode.removeChild(v);
          });
        }

        self.trigger('unmount');
        toggle();
        self.off('*');
        self.isMounted = false;
        delete root._tag;
      });

      // proxy function to bind updates
      // dispatched from a parent tag
      function onChildUpdate(data) {
        self.update(data, true);
      }

      function toggle(isMount) {

        // mount/unmount children
        each(childTags, function (child) {
          child[isMount ? 'mount' : 'unmount']();
        });

        // listen/unlisten parent (events flow one way from parent to children)
        if (!parent) return;
        var evt = isMount ? 'on' : 'off';

        // the loop tags will be always in sync with the parent automatically
        if (isLoop) parent[evt]('unmount', self.unmount);else {
          parent[evt]('update', onChildUpdate)[evt]('unmount', self.unmount);
        }
      }

      // named elements available for fn
      parseNamedElements(dom, this, childTags);
    }
    /**
     * Attach an event to a DOM node
     * @param { String } name - event name
     * @param { Function } handler - event callback
     * @param { Object } dom - dom node
     * @param { Tag } tag - tag instance
     */
    function setEventHandler(name, handler, dom, tag) {

      dom[name] = function (e) {

        var ptag = tag._parent,
            item = tag._item,
            el;

        if (!item) while (ptag && !item) {
          item = ptag._item;
          ptag = ptag._parent;
        }

        // cross browser event fix
        e = e || window.event;

        // override the event properties
        if (isWritable(e, 'currentTarget')) e.currentTarget = dom;
        if (isWritable(e, 'target')) e.target = e.srcElement;
        if (isWritable(e, 'which')) e.which = e.charCode || e.keyCode;

        e.item = item;

        // prevent default behaviour (by default)
        if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
          if (e.preventDefault) e.preventDefault();
          e.returnValue = false;
        }

        if (!e.preventUpdate) {
          el = item ? getImmediateCustomParentTag(ptag) : tag;
          el.update();
        }
      };
    }

    /**
     * Insert a DOM node replacing another one (used by if- attribute)
     * @param   { Object } root - parent node
     * @param   { Object } node - node replaced
     * @param   { Object } before - node added
     */
    function insertTo(root, node, before) {
      if (!root) return;
      root.insertBefore(before, node);
      root.removeChild(node);
    }

    /**
     * Update the expressions in a Tag instance
     * @param   { Array } expressions - expression that must be re evaluated
     * @param   { Tag } tag - tag instance
     */
    function update(expressions, tag) {

      each(expressions, function (expr, i) {

        var dom = expr.dom,
            attrName = expr.attr,
            value = tmpl(expr.expr, tag),
            parent = expr.dom.parentNode;

        if (expr.bool) {
          value = !!value;
        } else if (value == null) {
          value = '';
        }

        // #1638: regression of #1612, update the dom only if the value of the
        // expression was changed
        if (expr.value === value) {
          return;
        }
        expr.value = value;

        // textarea and text nodes has no attribute name
        if (!attrName) {
          // about #815 w/o replace: the browser converts the value to a string,
          // the comparison by "==" does too, but not in the server
          value += '';
          // test for parent avoids error with invalid assignment to nodeValue
          if (parent) {
            if (parent.tagName === 'TEXTAREA') {
              parent.value = value; // #1113
              if (!IE_VERSION) dom.nodeValue = value; // #1625 IE throws here, nodeValue
            } // will be available on 'updated'
            else dom.nodeValue = value;
          }
          return;
        }

        // ~~#1612: look for changes in dom.value when updating the value~~
        if (attrName === 'value') {
          dom.value = value;
          return;
        }

        // remove original attribute
        remAttr(dom, attrName);

        // event handler
        if (isFunction(value)) {
          setEventHandler(attrName, value, dom, tag);

          // if- conditional
        } else if (attrName == 'if') {
          var stub = expr.stub,
              add = function () {
            insertTo(stub.parentNode, stub, dom);
          },
              remove = function () {
            insertTo(dom.parentNode, dom, stub);
          };

          // add to DOM
          if (value) {
            if (stub) {
              add();
              dom.inStub = false;
              // avoid to trigger the mount event if the tags is not visible yet
              // maybe we can optimize this avoiding to mount the tag at all
              if (!isInStub(dom)) {
                walk(dom, function (el) {
                  if (el._tag && !el._tag.isMounted) el._tag.isMounted = !!el._tag.trigger('mount');
                });
              }
            }
            // remove from DOM
          } else {
            stub = expr.stub = stub || document.createTextNode('');
            // if the parentNode is defined we can easily replace the tag
            if (dom.parentNode) remove();
            // otherwise we need to wait the updated event
            else (tag.parent || tag).one('updated', remove);

            dom.inStub = true;
          }
          // show / hide
        } else if (attrName === 'show') {
          dom.style.display = value ? '' : 'none';
        } else if (attrName === 'hide') {
          dom.style.display = value ? 'none' : '';
        } else if (expr.bool) {
          dom[attrName] = value;
          if (value) setAttr(dom, attrName, attrName);
          if (FIREFOX && attrName === 'selected' && dom.tagName === 'OPTION') {
            dom.__riot1374 = value; // #1374
          }
        } else if (value === 0 || value && typeof value !== T_OBJECT) {
          // <img src="{ expr }">
          if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
            attrName = attrName.slice(RIOT_PREFIX.length);
          }
          setAttr(dom, attrName, value);
        }
      });
    }
    /**
     * Specialized function for looping an array-like collection with `each={}`
     * @param   { Array } els - collection of items
     * @param   {Function} fn - callback function
     * @returns { Array } the array looped
     */
    function each(els, fn) {
      var len = els ? els.length : 0;

      for (var i = 0, el; i < len; i++) {
        el = els[i];
        // return false -> current item was removed by fn during the loop
        if (el != null && fn(el, i) === false) i--;
      }
      return els;
    }

    /**
     * Detect if the argument passed is a function
     * @param   { * } v - whatever you want to pass to this function
     * @returns { Boolean } -
     */
    function isFunction(v) {
      return typeof v === T_FUNCTION || false; // avoid IE problems
    }

    /**
     * Detect if the argument passed is an object, exclude null.
     * NOTE: Use isObject(x) && !isArray(x) to excludes arrays.
     * @param   { * } v - whatever you want to pass to this function
     * @returns { Boolean } -
     */
    function isObject(v) {
      return v && typeof v === T_OBJECT; // typeof null is 'object'
    }

    /**
     * Remove any DOM attribute from a node
     * @param   { Object } dom - DOM node we want to update
     * @param   { String } name - name of the property we want to remove
     */
    function remAttr(dom, name) {
      dom.removeAttribute(name);
    }

    /**
     * Convert a string containing dashes to camel case
     * @param   { String } string - input string
     * @returns { String } my-string -> myString
     */
    function toCamel(string) {
      return string.replace(/-(\w)/g, function (_, c) {
        return c.toUpperCase();
      });
    }

    /**
     * Get the value of any DOM attribute on a node
     * @param   { Object } dom - DOM node we want to parse
     * @param   { String } name - name of the attribute we want to get
     * @returns { String | undefined } name of the node attribute whether it exists
     */
    function getAttr(dom, name) {
      return dom.getAttribute(name);
    }

    /**
     * Set any DOM attribute
     * @param { Object } dom - DOM node we want to update
     * @param { String } name - name of the property we want to set
     * @param { String } val - value of the property we want to set
     */
    function setAttr(dom, name, val) {
      dom.setAttribute(name, val);
    }

    /**
     * Detect the tag implementation by a DOM node
     * @param   { Object } dom - DOM node we need to parse to get its tag implementation
     * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
     */
    function getTag(dom) {
      return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG_IS) || getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()];
    }
    /**
     * Add a child tag to its parent into the `tags` object
     * @param   { Object } tag - child tag instance
     * @param   { String } tagName - key where the new tag will be stored
     * @param   { Object } parent - tag instance where the new child tag will be included
     */
    function addChildTag(tag, tagName, parent) {
      var cachedTag = parent.tags[tagName];

      // if there are multiple children tags having the same name
      if (cachedTag) {
        // if the parent tags property is not yet an array
        // create it adding the first cached tag
        if (!isArray(cachedTag))
          // don't add the same tag twice
          if (cachedTag !== tag) parent.tags[tagName] = [cachedTag];
        // add the new nested tag to the array
        if (!contains(parent.tags[tagName], tag)) parent.tags[tagName].push(tag);
      } else {
        parent.tags[tagName] = tag;
      }
    }

    /**
     * Move the position of a custom tag in its parent tag
     * @param   { Object } tag - child tag instance
     * @param   { String } tagName - key where the tag was stored
     * @param   { Number } newPos - index where the new tag will be stored
     */
    function moveChildTag(tag, tagName, newPos) {
      var parent = tag.parent,
          tags;
      // no parent no move
      if (!parent) return;

      tags = parent.tags[tagName];

      if (isArray(tags)) tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0]);else addChildTag(tag, tagName, parent);
    }

    /**
     * Create a new child tag including it correctly into its parent
     * @param   { Object } child - child tag implementation
     * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
     * @param   { String } innerHTML - inner html of the child node
     * @param   { Object } parent - instance of the parent tag including the child custom tag
     * @returns { Object } instance of the new child tag just created
     */
    function initChildTag(child, opts, innerHTML, parent) {
      var tag = new Tag(child, opts, innerHTML),
          tagName = getTagName(opts.root),
          ptag = getImmediateCustomParentTag(parent);
      // fix for the parent attribute in the looped elements
      tag.parent = ptag;
      // store the real parent tag
      // in some cases this could be different from the custom parent tag
      // for example in nested loops
      tag._parent = parent;

      // add this tag to the custom parent tag
      addChildTag(tag, tagName, ptag);
      // and also to the real parent tag
      if (ptag !== parent) addChildTag(tag, tagName, parent);
      // empty the child node once we got its template
      // to avoid that its children get compiled multiple times
      opts.root.innerHTML = '';

      return tag;
    }

    /**
     * Loop backward all the parents tree to detect the first custom parent tag
     * @param   { Object } tag - a Tag instance
     * @returns { Object } the instance of the first custom parent tag found
     */
    function getImmediateCustomParentTag(tag) {
      var ptag = tag;
      while (!getTag(ptag.root)) {
        if (!ptag.parent) break;
        ptag = ptag.parent;
      }
      return ptag;
    }

    /**
     * Helper function to set an immutable property
     * @param   { Object } el - object where the new property will be set
     * @param   { String } key - object key where the new property will be stored
     * @param   { * } value - value of the new property
    * @param   { Object } options - set the propery overriding the default options
     * @returns { Object } - the initial object
     */
    function defineProperty(el, key, value, options) {
      Object.defineProperty(el, key, extend({
        value: value,
        enumerable: false,
        writable: false,
        configurable: true
      }, options));
      return el;
    }

    /**
     * Get the tag name of any DOM node
     * @param   { Object } dom - DOM node we want to parse
     * @returns { String } name to identify this dom node in riot
     */
    function getTagName(dom) {
      var child = getTag(dom),
          namedTag = getAttr(dom, 'name'),
          tagName = namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();

      return tagName;
    }

    /**
     * Extend any object with other properties
     * @param   { Object } src - source object
     * @returns { Object } the resulting extended object
     *
     * var obj = { foo: 'baz' }
     * extend(obj, {bar: 'bar', foo: 'bar'})
     * console.log(obj) => {bar: 'bar', foo: 'bar'}
     *
     */
    function extend(src) {
      var obj,
          args = arguments;
      for (var i = 1; i < args.length; ++i) {
        if (obj = args[i]) {
          for (var key in obj) {
            // check if this property of the source object could be overridden
            if (isWritable(src, key)) src[key] = obj[key];
          }
        }
      }
      return src;
    }

    /**
     * Check whether an array contains an item
     * @param   { Array } arr - target array
     * @param   { * } item - item to test
     * @returns { Boolean } Does 'arr' contain 'item'?
     */
    function contains(arr, item) {
      return ~arr.indexOf(item);
    }

    /**
     * Check whether an object is a kind of array
     * @param   { * } a - anything
     * @returns {Boolean} is 'a' an array?
     */
    function isArray(a) {
      return Array.isArray(a) || a instanceof Array;
    }

    /**
     * Detect whether a property of an object could be overridden
     * @param   { Object }  obj - source object
     * @param   { String }  key - object property
     * @returns { Boolean } is this property writable?
     */
    function isWritable(obj, key) {
      var props = Object.getOwnPropertyDescriptor(obj, key);
      return typeof obj[key] === T_UNDEF || props && props.writable;
    }

    /**
     * With this function we avoid that the internal Tag methods get overridden
     * @param   { Object } data - options we want to use to extend the tag instance
     * @returns { Object } clean object without containing the riot internal reserved words
     */
    function cleanUpData(data) {
      if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION)) return data;

      var o = {};
      for (var key in data) {
        if (!contains(RESERVED_WORDS_BLACKLIST, key)) o[key] = data[key];
      }
      return o;
    }

    /**
     * Walk down recursively all the children tags starting dom node
     * @param   { Object }   dom - starting node where we will start the recursion
     * @param   { Function } fn - callback to transform the child node just found
     */
    function walk(dom, fn) {
      if (dom) {
        // stop the recursion
        if (fn(dom) === false) return;else {
          dom = dom.firstChild;

          while (dom) {
            walk(dom, fn);
            dom = dom.nextSibling;
          }
        }
      }
    }

    /**
     * Minimize risk: only zero or one _space_ between attr & value
     * @param   { String }   html - html string we want to parse
     * @param   { Function } fn - callback function to apply on any attribute found
     */
    function walkAttributes(html, fn) {
      var m,
          re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;

      while (m = re.exec(html)) {
        fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
      }
    }

    /**
     * Check whether a DOM node is in stub mode, useful for the riot 'if' directive
     * @param   { Object }  dom - DOM node we want to parse
     * @returns { Boolean } -
     */
    function isInStub(dom) {
      while (dom) {
        if (dom.inStub) return true;
        dom = dom.parentNode;
      }
      return false;
    }

    /**
     * Create a generic DOM node
     * @param   { String } name - name of the DOM node we want to create
     * @returns { Object } DOM node just created
     */
    function mkEl(name) {
      return document.createElement(name);
    }

    /**
     * Shorter and fast way to select multiple nodes in the DOM
     * @param   { String } selector - DOM selector
     * @param   { Object } ctx - DOM node where the targets of our search will is located
     * @returns { Object } dom nodes found
     */
    function $$(selector, ctx) {
      return (ctx || document).querySelectorAll(selector);
    }

    /**
     * Shorter and fast way to select a single node in the DOM
     * @param   { String } selector - unique dom selector
     * @param   { Object } ctx - DOM node where the target of our search will is located
     * @returns { Object } dom node found
     */
    function $(selector, ctx) {
      return (ctx || document).querySelector(selector);
    }

    /**
     * Simple object prototypal inheritance
     * @param   { Object } parent - parent object
     * @returns { Object } child instance
     */
    function inherit(parent) {
      function Child() {}
      Child.prototype = parent;
      return new Child();
    }

    /**
     * Get the name property needed to identify a DOM node in riot
     * @param   { Object } dom - DOM node we need to parse
     * @returns { String | undefined } give us back a string to identify this dom node
     */
    function getNamedKey(dom) {
      return getAttr(dom, 'id') || getAttr(dom, 'name');
    }

    /**
     * Set the named properties of a tag element
     * @param { Object } dom - DOM node we need to parse
     * @param { Object } parent - tag instance where the named dom element will be eventually added
     * @param { Array } keys - list of all the tag instance properties
     */
    function setNamed(dom, parent, keys) {
      // get the key value we want to add to the tag instance
      var key = getNamedKey(dom),
          isArr,

      // add the node detected to a tag instance using the named property
      add = function (value) {
        // avoid to override the tag properties already set
        if (contains(keys, key)) return;
        // check whether this value is an array
        isArr = isArray(value);
        // if the key was never set
        if (!value)
          // set it once on the tag instance
          parent[key] = dom;
          // if it was an array and not yet set
        else if (!isArr || isArr && !contains(value, dom)) {
            // add the dom node into the array
            if (isArr) value.push(dom);else parent[key] = [value, dom];
          }
      };

      // skip the elements with no named properties
      if (!key) return;

      // check whether this key has been already evaluated
      if (tmpl.hasExpr(key))
        // wait the first updated event only once
        parent.one('mount', function () {
          key = getNamedKey(dom);
          add(parent[key]);
        });else add(parent[key]);
    }

    /**
     * Faster String startsWith alternative
     * @param   { String } src - source string
     * @param   { String } str - test string
     * @returns { Boolean } -
     */
    function startsWith(src, str) {
      return src.slice(0, str.length) === str;
    }

    /**
     * requestAnimationFrame function
     * Adapted from https://gist.github.com/paulirish/1579671, license MIT
     */
    var rAF = function (w) {
      var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;

      if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {
        // buggy iOS6
        var lastTime = 0;

        raf = function (cb) {
          var nowtime = Date.now(),
              timeout = Math.max(16 - (nowtime - lastTime), 0);
          setTimeout(function () {
            cb(lastTime = nowtime + timeout);
          }, timeout);
        };
      }
      return raf;
    }(window || {});

    /**
     * Mount a tag creating new Tag instance
     * @param   { Object } root - dom node where the tag will be mounted
     * @param   { String } tagName - name of the riot tag we want to mount
     * @param   { Object } opts - options to pass to the Tag instance
     * @returns { Tag } a new Tag instance
     */
    function mountTo(root, tagName, opts) {
      var tag = __tagImpl[tagName],

      // cache the inner HTML to fix #855
      innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;

      // clear the inner html
      root.innerHTML = '';

      if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML);

      if (tag && tag.mount) {
        tag.mount();
        // add this tag to the virtualDom variable
        if (!contains(__virtualDom, tag)) __virtualDom.push(tag);
      }

      return tag;
    }
    /**
     * Riot public api
     */

    // share methods for other riot parts, e.g. compiler
    riot.util = { brackets: brackets, tmpl: tmpl };

    /**
     * Create a mixin that could be globally shared across all the tags
     */
    riot.mixin = function () {
      var mixins = {};

      /**
       * Create/Return a mixin by its name
       * @param   { String } name - mixin name (global mixin if missing)
       * @param   { Object } mixin - mixin logic
       * @returns { Object } the mixin logic
       */
      return function (name, mixin) {
        if (isObject(name)) {
          mixin = name;
          mixins[GLOBAL_MIXIN] = extend(mixins[GLOBAL_MIXIN] || {}, mixin);
          return;
        }

        if (!mixin) return mixins[name];
        mixins[name] = mixin;
      };
    }();

    /**
     * Create a new riot tag implementation
     * @param   { String }   name - name/id of the new riot tag
     * @param   { String }   html - tag template
     * @param   { String }   css - custom tag css
     * @param   { String }   attrs - root tag attributes
     * @param   { Function } fn - user function
     * @returns { String } name/id of the tag just created
     */
    riot.tag = function (name, html, css, attrs, fn) {
      if (isFunction(attrs)) {
        fn = attrs;
        if (/^[\w\-]+\s?=/.test(css)) {
          attrs = css;
          css = '';
        } else attrs = '';
      }
      if (css) {
        if (isFunction(css)) fn = css;else styleManager.add(css);
      }
      name = name.toLowerCase();
      __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn };
      return name;
    };

    /**
     * Create a new riot tag implementation (for use by the compiler)
     * @param   { String }   name - name/id of the new riot tag
     * @param   { String }   html - tag template
     * @param   { String }   css - custom tag css
     * @param   { String }   attrs - root tag attributes
     * @param   { Function } fn - user function
     * @returns { String } name/id of the tag just created
     */
    riot.tag2 = function (name, html, css, attrs, fn) {
      if (css) styleManager.add(css);
      //if (bpair) riot.settings.brackets = bpair
      __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn };
      return name;
    };

    /**
     * Mount a tag using a specific tag implementation
     * @param   { String } selector - tag DOM selector
     * @param   { String } tagName - tag implementation name
     * @param   { Object } opts - tag logic
     * @returns { Array } new tags instances
     */
    riot.mount = function (selector, tagName, opts) {

      var els,
          allTags,
          tags = [];

      // helper functions

      function addRiotTags(arr) {
        var list = '';
        each(arr, function (e) {
          if (!/[^-\w]/.test(e)) {
            e = e.trim().toLowerCase();
            list += ',[' + RIOT_TAG_IS + '="' + e + '"],[' + RIOT_TAG + '="' + e + '"]';
          }
        });
        return list;
      }

      function selectAllTags() {
        var keys = Object.keys(__tagImpl);
        return keys + addRiotTags(keys);
      }

      function pushTags(root) {
        if (root.tagName) {
          var riotTag = getAttr(root, RIOT_TAG_IS) || getAttr(root, RIOT_TAG);

          // have tagName? force riot-tag to be the same
          if (tagName && riotTag !== tagName) {
            riotTag = tagName;
            setAttr(root, RIOT_TAG_IS, tagName);
            setAttr(root, RIOT_TAG, tagName); // this will be removed in riot 3.0.0
          }
          var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);

          if (tag) tags.push(tag);
        } else if (root.length) {
          each(root, pushTags); // assume nodeList
        }
      }

      // ----- mount code -----

      // inject styles into DOM
      styleManager.inject();

      if (isObject(tagName)) {
        opts = tagName;
        tagName = 0;
      }

      // crawl the DOM to find the tag
      if (typeof selector === T_STRING) {
        if (selector === '*')
          // select all the tags registered
          // and also the tags found with the riot-tag attribute set
          selector = allTags = selectAllTags();else
          // or just the ones named like the selector
          selector += addRiotTags(selector.split(/, */));

        // make sure to pass always a selector
        // to the querySelectorAll function
        els = selector ? $$(selector) : [];
      } else
        // probably you have passed already a tag or a NodeList
        els = selector;

      // select all the registered and mount them inside their root elements
      if (tagName === '*') {
        // get all custom tags
        tagName = allTags || selectAllTags();
        // if the root els it's just a single tag
        if (els.tagName) els = $$(tagName, els);else {
          // select all the children for all the different root elements
          var nodeList = [];
          each(els, function (_el) {
            nodeList.push($$(tagName, _el));
          });
          els = nodeList;
        }
        // get rid of the tagName
        tagName = 0;
      }

      pushTags(els);

      return tags;
    };

    /**
     * Update all the tags instances created
     * @returns { Array } all the tags instances
     */
    riot.update = function () {
      return each(__virtualDom, function (tag) {
        tag.update();
      });
    };

    /**
     * Export the Virtual DOM
     */
    riot.vdom = __virtualDom;

    /**
     * Export the Tag constructor
     */
    riot.Tag = Tag;
    // support CommonJS, AMD & browser
    /* istanbul ignore next */
    if (typeof exports === T_OBJECT) module.exports = riot;else if (typeof define === T_FUNCTION && typeof define.amd !== T_UNDEF) define(function () {
      return riot;
    });else window.riot = riot;
  })(typeof window != 'undefined' ? window : void 0);
  return module.exports;
});
$__System.registerDynamic("1b", ["22"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("22");
  return module.exports;
});
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("23", ["require", "exports", "module", "1b"], function(require, exports, module) {
      tagger(require('1b'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote-field', '{opts.dataLabel} <div class="comic-neue-angular field-content {value || isFocused() ? \'\' : \'show-placeholder\'} {opts.dataIsSingleLine ? \'single-line\' : \'\'}" contenteditable="true" data-placeholder-text="{opts.dataPlaceholder}" onfocus="{update}" onblur="{update}">{value}</div>', 'm-quote-field html,[riot-tag="m-quote-field"] html,[data-is="m-quote-field"] html{box-sizing:border-box} m-quote-field *,[riot-tag="m-quote-field"] *,[data-is="m-quote-field"] *,m-quote-field *:before,[riot-tag="m-quote-field"] *:before,[data-is="m-quote-field"] *:before,m-quote-field *:after,[riot-tag="m-quote-field"] *:after,[data-is="m-quote-field"] *:after{box-sizing:inherit} m-quote-field body,[riot-tag="m-quote-field"] body,[data-is="m-quote-field"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote-field i.fa,[riot-tag="m-quote-field"] i.fa,[data-is="m-quote-field"] i.fa{font-size:1.6rem} m-quote-field i.fa.hollow,[riot-tag="m-quote-field"] i.fa.hollow,[data-is="m-quote-field"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote-field i.fa.hollow.active,[riot-tag="m-quote-field"] i.fa.hollow.active,[data-is="m-quote-field"] i.fa.hollow.active{color:#fed729} m-quote-field button,[riot-tag="m-quote-field"] button,[data-is="m-quote-field"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-field .btn-primary,[riot-tag="m-quote-field"] .btn-primary,[data-is="m-quote-field"] .btn-primary{background:#0e6bd8} m-quote-field .btn-secondary,[riot-tag="m-quote-field"] .btn-secondary,[data-is="m-quote-field"] .btn-secondary{background:#ff5d32} m-quote-field ul,[riot-tag="m-quote-field"] ul,[data-is="m-quote-field"] ul{list-style-type:none;padding:0} m-quote-field .interactive,[riot-tag="m-quote-field"] .interactive,[data-is="m-quote-field"] .interactive{cursor:pointer;padding:.3rem} m-quote-field .interactive:hover,[riot-tag="m-quote-field"] .interactive:hover,[data-is="m-quote-field"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote-field,[riot-tag="m-quote-field"],[data-is="m-quote-field"]{display:block;border:1px solid #2c3233;border-radius:.3rem;padding:.6rem;margin:1rem 0;height:calc((100% - 4rem - 5rem - 5rem) / 2)} m-quote-field .field-content,[riot-tag="m-quote-field"] .field-content,[data-is="m-quote-field"] .field-content{white-space:pre-wrap;height:calc(100% - 1.5rem);padding:.3rem;overflow:hidden} m-quote-field[data-is-single-line],[riot-tag="m-quote-field"][data-is-single-line],[data-is="m-quote-field"][data-is-single-line]{white-space:nowrap;height:5rem} m-quote-field .show-placeholder:before,[riot-tag="m-quote-field"] .show-placeholder:before,[data-is="m-quote-field"] .show-placeholder:before{content:attr(data-placeholder-text);font-style:italic;color:#2c3233} m-quote-field .comic-neue-angular,[riot-tag="m-quote-field"] .comic-neue-angular,[data-is="m-quote-field"] .comic-neue-angular{font-family:\'Comic Neue Angular\',sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem}', 'data-label data-value data-placeholder data-is-single-line', function(opts) {
    var _this = this;
    this.on('mount', () => {
      _this.value = _this.opts.dataValue;
    });
    this.on('update', () => {
      _this.fieldContent = _this.fieldContent || _this.root.querySelector('.field-content');
      if (_this.isMounted) {
        _this.fieldContent.innerHTML = _this.value = _this.fieldContent.innerHTML;
      }
    });
    this.isFocused = () => !!_this.root.querySelector(':focus');
  });
});

})();
$__System.registerDynamic('24', ['25', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('25'),
      defined = $__require('26');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});
$__System.registerDynamic("27", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
  return module.exports;
});
$__System.registerDynamic('28', ['29'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('29');
  return module.exports;
});
$__System.registerDynamic("2a", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});
$__System.registerDynamic("2b", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
$__System.registerDynamic('2c', ['2b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('2b')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
$__System.registerDynamic('29', ['2d', '2a', '2c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('2d'),
      createDesc = $__require('2a');
  module.exports = $__require('2c') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});
$__System.registerDynamic('2e', ['2d', '2a', '2f', '29', '30'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('2d'),
      descriptor = $__require('2a'),
      setToStringTag = $__require('2f'),
      IteratorPrototype = {};
  $__require('29')(IteratorPrototype, $__require('30')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});
$__System.registerDynamic("31", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});
$__System.registerDynamic('2f', ['2d', '31', '30'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('2d').setDesc,
      has = $__require('31'),
      TAG = $__require('30')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
  return module.exports;
});
$__System.registerDynamic("2d", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});
$__System.registerDynamic('32', ['27', '33', '28', '29', '31', '34', '2e', '2f', '2d', '30'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('27'),
      $export = $__require('33'),
      redefine = $__require('28'),
      hide = $__require('29'),
      has = $__require('31'),
      Iterators = $__require('34'),
      $iterCreate = $__require('2e'),
      setToStringTag = $__require('2f'),
      getProto = $__require('2d').getProto,
      ITERATOR = $__require('30')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});
$__System.registerDynamic('35', ['24', '32'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('24')(true);
  $__require('32')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});
$__System.registerDynamic('36', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('37', ['36'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('36');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
$__System.registerDynamic('33', ['38', '39', '37'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('38'),
      core = $__require('39'),
      ctx = $__require('37'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});
$__System.registerDynamic("26", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('3a', ['26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('26');
  module.exports = function (it) {
    return Object(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('3b', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});
$__System.registerDynamic('3c', ['3b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('3b');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('3d', ['3c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('3c');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});
$__System.registerDynamic('3e', ['34', '30'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('34'),
        ITERATOR = $__require('30')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    return module.exports;
});
$__System.registerDynamic("25", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});
$__System.registerDynamic('3f', ['25'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('25'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});
$__System.registerDynamic("40", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});
$__System.registerDynamic('41', ['40', '30'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('40'),
        TAG = $__require('30')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    return module.exports;
});
$__System.registerDynamic("34", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
  return module.exports;
});
$__System.registerDynamic('42', ['41', '30', '34', '39'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('41'),
        ITERATOR = $__require('30')('iterator'),
        Iterators = $__require('34');
    module.exports = $__require('39').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    return module.exports;
});
$__System.registerDynamic('43', ['38'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('38'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
    return module.exports;
});
$__System.registerDynamic('44', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});
$__System.registerDynamic('38', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('30', ['43', '44', '38'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('43')('wks'),
        uid = $__require('44'),
        Symbol = $__require('38').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
    return module.exports;
});
$__System.registerDynamic('45', ['30'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('30')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        safe = true;
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});
$__System.registerDynamic('46', ['37', '33', '3a', '3d', '3e', '3f', '42', '45'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('37'),
      $export = $__require('33'),
      toObject = $__require('3a'),
      call = $__require('3d'),
      isArrayIter = $__require('3e'),
      toLength = $__require('3f'),
      getIterFn = $__require('42');
  $export($export.S + $export.F * !$__require('45')(function (iter) {
    Array.from(iter);
  }), 'Array', { from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    } });
  return module.exports;
});
$__System.registerDynamic('39', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('47', ['35', '46', '39'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('35');
  $__require('46');
  module.exports = $__require('39').Array.from;
  return module.exports;
});
$__System.registerDynamic("48", ["47"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("47"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("49", ["48"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var _Array$from = $__require("48")["default"];
  exports["default"] = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    } else {
      return _Array$from(arr);
    }
  };
  exports.__esModule = true;
  return module.exports;
});
$__System.register('4a', ['49'], function (_export) {
    var _toConsumableArray, initialState;

    return {
        setters: [function (_) {
            _toConsumableArray = _['default'];
        }],
        execute: function () {
            'use strict';

            initialState = [{ id: 0, text: 'If today were the last day of your life, would you want to do what you are able to do today?', author: 'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes: '' }, { id: 1, text: 'my spifffy quote', author: 'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes: '' }, { id: 2, text: 'my neat quote', author: 'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes: '' }, { id: 3, text: 'my favorite quote', author: 'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes: '' }];

            _export('default', function (currentState, action) {
                if (currentState === undefined) currentState = initialState;

                switch (action.type) {
                    // Actions
                    // ----------------------
                    // ADD_QUOTE
                    // EDIT_QUOTE
                    //
                    case "ADD_QUOTE":
                        return [].concat(_toConsumableArray(currentState), [action.payload]);
                    case "EDIT_QUOTE":
                        return currentState.map(function (quote) {
                            return quote.id === action.payload.id ? action.payload : quote;
                        });
                    default:
                        return currentState;
                }
            });
        }
    };
});
$__System.register("4b", [], function (_export) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            _export("default", function (currentState, action) {
                if (currentState === undefined) currentState = "";

                return currentState;
            });
        }
    };
});
$__System.register("4c", [], function (_export) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            _export("default", function (currentState, action) {
                if (currentState === undefined) currentState = null;

                switch (action.type) {
                    case "OPEN_MODAL":
                        return action.id;
                    case "CLOSE_MODAL":
                        return null;
                    default:
                        return currentState;
                }
            });
        }
    };
});
$__System.register("4d", [], function (_export) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            _export("default", {
                testLog: function testLog() {
                    console.log("Logging...");
                }
            });
        }
    };
});
$__System.register("1", ["14", "16", "17", "19", "20", "21", "23", "1b", "1a", "1c", "1d", "1e", "1f", "4a", "4b", "4c", "4d"], function (_export) {

    // import reducers
    "use strict";

    //import mixins
    var createStore, combineReducers, riotReduxMixin, riot, quotesReducer, searchReducer, modalReducer, quoteFieldsMixin, actions, combinedReducers, store;
    return {
        setters: [function (_) {
            createStore = _.createStore;
            combineReducers = _.combineReducers;
        }, function (_2) {
            riotReduxMixin = _2["default"];
        }, function (_3) {}, function (_4) {}, function (_5) {}, function (_6) {}, function (_7) {}, function (_b) {
            riot = _b["default"];
        }, function (_a) {}, function (_c) {}, function (_d) {}, function (_e) {}, function (_f) {}, function (_a2) {
            quotesReducer = _a2["default"];
        }, function (_b2) {
            searchReducer = _b2["default"];
        }, function (_c2) {
            modalReducer = _c2["default"];
        }, function (_d2) {
            quoteFieldsMixin = _d2["default"];
        }],
        execute: function () {
            actions = {
                addQuote: function addQuote(newQuote) {
                    return { type: 'ADD_QUOTE', payload: newQuote };
                },
                editQuote: function editQuote(quote) {
                    return { type: 'EDIT_QUOTE', payload: quote };
                }
            };
            combinedReducers = combineReducers({
                quotes: quotesReducer,
                searchReducer: searchReducer,
                currentOpenModal: modalReducer
            });
            store = createStore(combinedReducers);

            riot.mixin('redux', riotReduxMixin(store));
            riot.mixin('actions', actions);
            riot.mixin('quoteFields', quoteFieldsMixin);
            riot.mount("*");
        }
    };
});
$__System.register('css/main.less!npm:systemjs-less-plugin@1.8.3.js', [], false, function() {});
(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("html {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\nbody {\n  font-size: 16px;\n  line-height: 1.6rem;\n  overflow-y: scroll;\n  background-color: #fafafa;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n}\ni.fa {\n  font-size: 1.6rem;\n}\ni.fa.hollow {\n  color: #fafafa;\n  text-shadow: 0 0 2px #090a0a;\n  vertical-align: middle;\n}\ni.fa.hollow.active {\n  color: #fed729;\n}\nbutton {\n  border-radius: 0.6rem;\n  padding: .6rem 1rem;\n  background: #2c3233;\n  color: #fafafa;\n  min-width: 6rem;\n}\n.btn-primary {\n  background: #0e6bd8;\n}\n.btn-secondary {\n  background: #ff5d32;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\n.interactive {\n  cursor: pointer;\n  padding: 0.3rem;\n}\n.interactive:hover {\n  box-shadow: 0 0 12px 0 #090a0a;\n}\n");
$__System.register('npm:font-awesome@4.6.3/css/font-awesome.css!github:systemjs/plugin-css@0.1.23.js', [], false, function() {});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(jspm_packages/npm/font-awesome@4.6.3/fonts/fontawesome-webfont.eot?v=4.6.3);src:url(jspm_packages/npm/font-awesome@4.6.3/fonts/fontawesome-webfont.eot?#iefix&v=4.6.3) format('embedded-opentype'),url(jspm_packages/npm/font-awesome@4.6.3/fonts/fontawesome-webfont.woff2?v=4.6.3) format('woff2'),url(jspm_packages/npm/font-awesome@4.6.3/fonts/fontawesome-webfont.woff?v=4.6.3) format('woff'),url(jspm_packages/npm/font-awesome@4.6.3/fonts/fontawesome-webfont.ttf?v=4.6.3) format('truetype'),url(jspm_packages/npm/font-awesome@4.6.3/fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular) format('svg');font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-television:before,.fa-tv:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\\f2a3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}");
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map