!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", ["3", "4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3'),
      defined = $__require('4');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("6", ["7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7');
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('9')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("7", ["b", "8", "a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('b'),
      createDesc = $__require('8');
  module.exports = $__require('a') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("c", ["b", "8", "d", "7", "e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('b'),
      descriptor = $__require('8'),
      setToStringTag = $__require('d'),
      IteratorPrototype = {};
  $__require('7')(IteratorPrototype, $__require('e')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("d", ["b", "f", "e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('b').setDesc,
      has = $__require('f'),
      TAG = $__require('e')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
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

$__System.registerDynamic("10", ["5", "11", "6", "7", "f", "12", "c", "d", "b", "e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('5'),
      $export = $__require('11'),
      redefine = $__require('6'),
      hide = $__require('7'),
      has = $__require('f'),
      Iterators = $__require('12'),
      $iterCreate = $__require('c'),
      setToStringTag = $__require('d'),
      getProto = $__require('b').getProto,
      ITERATOR = $__require('e')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
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
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
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
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("13", ["2", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('2')(true);
  $__require('10')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
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

$__System.registerDynamic("14", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("15", ["14"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('14');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("11", ["16", "17", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('16'),
      core = $__require('17'),
      ctx = $__require('15'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
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
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
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

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("18", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('4');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("19", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('19');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["1a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('1a');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("1c", ["12", "e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('12'),
      ITERATOR = $__require('e')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("1d", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("1e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("1f", ["1e", "e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('1e'),
      TAG = $__require('e')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("12", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("20", ["1f", "e", "12", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('1f'),
      ITERATOR = $__require('e')('iterator'),
      Iterators = $__require('12');
  module.exports = $__require('17').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("21", ["16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('16'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("22", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("16", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("e", ["21", "22", "16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('21')('wks'),
      uid = $__require('22'),
      Symbol = $__require('16').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("23", ["e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('e')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

$__System.registerDynamic("24", ["15", "11", "18", "1b", "1c", "1d", "20", "23"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('15'),
      $export = $__require('11'),
      toObject = $__require('18'),
      call = $__require('1b'),
      isArrayIter = $__require('1c'),
      toLength = $__require('1d'),
      getIterFn = $__require('20');
  $export($export.S + $export.F * !$__require('23')(function(iter) {
    Array.from(iter);
  }), 'Array', {from: function from(arrayLike) {
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
      if (mapping)
        mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
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
    }});
  return module.exports;
});

$__System.registerDynamic("17", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("25", ["13", "24", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('13');
  $__require('24');
  module.exports = $__require('17').Array.from;
  return module.exports;
});

$__System.registerDynamic("26", ["25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('25'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("27", ["26"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Array$from = $__require('26')["default"];
  exports["default"] = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0,
          arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];
      return arr2;
    } else {
      return _Array$from(arr);
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
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

$__System.registerDynamic("29", ["28"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('28')(global || window || this);
  return module.exports;
});

$__System.registerDynamic("2a", ["29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('29');
  return module.exports;
});

$__System.registerDynamic("2b", ["2c", "2a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.ActionTypes = undefined;
  exports["default"] = createStore;
  var _isPlainObject = $__require('2c');
  var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
  var _symbolObservable = $__require('2a');
  var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var ActionTypes = exports.ActionTypes = {INIT: '@@redux/INIT'};
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
    function getState() {
      return currentState;
    }
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
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }
      currentReducer = nextReducer;
      dispatch({type: ActionTypes.INIT});
    }
    function observable() {
      var _ref;
      var outerSubscribe = subscribe;
      return _ref = {subscribe: function subscribe(observer) {
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
          return {unsubscribe: unsubscribe};
        }}, _ref[_symbolObservable2["default"]] = function() {
        return this;
      }, _ref;
    }
    dispatch({type: ActionTypes.INIT});
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
  }
  return module.exports;
});

$__System.registerDynamic("2d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var nativeGetPrototype = Object.getPrototypeOf;
  function getPrototype(value) {
    return nativeGetPrototype(Object(value));
  }
  module.exports = getPrototype;
  return module.exports;
});

$__System.registerDynamic("2e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isHostObject(value) {
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

$__System.registerDynamic("2f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  module.exports = isObjectLike;
  return module.exports;
});

$__System.registerDynamic("2c", ["2d", "2e", "2f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getPrototype = $__require('2d'),
      isHostObject = $__require('2e'),
      isObjectLike = $__require('2f');
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
    return (typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
  }
  module.exports = isPlainObject;
  return module.exports;
});

$__System.registerDynamic("30", ["2b", "2c", "31", "32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports["default"] = combineReducers;
    var _createStore = $__require('2b');
    var _isPlainObject = $__require('2c');
    var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
    var _warning = $__require('31');
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
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
      var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key);
      });
      if (unexpectedKeys.length > 0) {
        return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
      }
    }
    function assertReducerSanity(reducers) {
      Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {type: _createStore.ActionTypes.INIT});
        if (typeof initialState === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
        }
        var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
        if (typeof reducer(undefined, {type: type}) === 'undefined') {
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
        if ("production" !== 'production') {
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
  })($__require('32'));
  return module.exports;
});

$__System.registerDynamic("33", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports["default"] = bindActionCreators;
  function bindActionCreator(actionCreator, dispatch) {
    return function() {
      return dispatch(actionCreator.apply(undefined, arguments));
    };
  }
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

$__System.registerDynamic("34", ["35"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _extends = Object.assign || function(target) {
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
  var _compose = $__require('35');
  var _compose2 = _interopRequireDefault(_compose);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  function applyMiddleware() {
    for (var _len = arguments.length,
        middlewares = Array(_len),
        _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
    return function(createStore) {
      return function(reducer, initialState, enhancer) {
        var store = createStore(reducer, initialState, enhancer);
        var _dispatch = store.dispatch;
        var chain = [];
        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch(action) {
            return _dispatch(action);
          }
        };
        chain = middlewares.map(function(middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
        return _extends({}, store, {dispatch: _dispatch});
      };
    };
  }
  return module.exports;
});

$__System.registerDynamic("35", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports["default"] = compose;
  function compose() {
    for (var _len = arguments.length,
        funcs = Array(_len),
        _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
      return function(arg) {
        return arg;
      };
    } else {
      var _ret = function() {
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return {v: function v() {
            return rest.reduceRight(function(composed, f) {
              return f(composed);
            }, last.apply(undefined, arguments));
          }};
      }();
      if (typeof _ret === "object")
        return _ret.v;
    }
  }
  return module.exports;
});

$__System.registerDynamic("31", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports["default"] = warning;
  function warning(message) {
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (e) {}
  }
  return module.exports;
});

$__System.registerDynamic("36", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  (function() {
    try {
      cachedSetTimeout = setTimeout;
    } catch (e) {
      cachedSetTimeout = function() {
        throw new Error('setTimeout is not defined');
      };
    }
    try {
      cachedClearTimeout = clearTimeout;
    } catch (e) {
      cachedClearTimeout = function() {
        throw new Error('clearTimeout is not defined');
      };
    }
  }());
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
  process.nextTick = function(fun) {
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
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("37", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('36');
  return module.exports;
});

$__System.registerDynamic("38", ["37"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('37');
  return module.exports;
});

$__System.registerDynamic("32", ["38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('38');
  return module.exports;
});

$__System.registerDynamic("39", ["2b", "30", "33", "34", "35", "31", "32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
    var _createStore = $__require('2b');
    var _createStore2 = _interopRequireDefault(_createStore);
    var _combineReducers = $__require('30');
    var _combineReducers2 = _interopRequireDefault(_combineReducers);
    var _bindActionCreators = $__require('33');
    var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
    var _applyMiddleware = $__require('34');
    var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
    var _compose = $__require('35');
    var _compose2 = _interopRequireDefault(_compose);
    var _warning = $__require('31');
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function isCrushed() {}
    if ("production" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
      (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
    }
    exports.createStore = _createStore2["default"];
    exports.combineReducers = _combineReducers2["default"];
    exports.bindActionCreators = _bindActionCreators2["default"];
    exports.applyMiddleware = _applyMiddleware2["default"];
    exports.compose = _compose2["default"];
  })($__require('32'));
  return module.exports;
});

$__System.registerDynamic("3a", ["39"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('39');
  return module.exports;
});

$__System.registerDynamic("3b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(store) {
    return {
      init: function() {
        this.store = store;
      },
      dispatch: function(action) {
        return store.dispatch(action);
      },
      dispatchify: function(actions) {
        var keys = Object.keys(actions);
        for (var idx in keys) {
          var key = keys[idx];
          var action = actions[key];
          this[key] = (function(action) {
            var isFunction = typeof action === 'function';
            return function() {
              var obj = isFunction ? action.apply(this, arguments) : action;
              return store.dispatch(obj);
            };
          })(action);
        }
      },
      subscribe: function(selector, callback, changed) {
        if (!callback) {
          callback = this.update;
        }
        var f = function(previous) {
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
        changed = function(previous) {
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

$__System.registerDynamic("3c", ["3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3b');
  return module.exports;
});

$__System.register("3d", [], function() { return { setters: [], execute: function() {} } });

(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("3e", ["require", "exports", "module", "3f"], function(require, exports, module) {
      tagger(require('3f'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('main-nav', '<ul> <li> <a href="/AllQuotes">All</a> </li> <li> <a href="/FavoriteQuotes">Favorites</a> </li> <li> <a href="/ArchiveQuotes">Archive</a> </li> </ul>', 'main-nav li { display: inline-block; }', '', function(opts) {});
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("40", ["require", "exports", "module", "3f"], function(require, exports, module) {
      tagger(require('3f'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote-list', '<ul> <li each="{quote in quotes}"> <m-quote data-quote="{quote}"> {quote.text} </m-quote> </li> </ul>', '', '', function(opts) {
    var _this = this;
    this.mixin('redux');
    this.mixin('actions');
    this.on('update', () => _this.quotes = _this.store.getState());
    this.store.subscribe(this.update);
  });
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("41", ["require", "exports", "module", "3f"], function(require, exports, module) {
      tagger(require('3f'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote', '<blockquote> <yield></yield> </blockquote> <time> {opts.dataQuote.modifiedOn} </time> <div> <i class="fa fa-star {opts.dataQuote.isFaved ? \'active\' : \'\'}" onclick="{toggleFav}"></i> <i class="fa fa-archive {opts.dataQuote.isArchived ? \'active\' : \'\'}" onclick="{toggleArchive}"></i> </div> <cite>{opts.dataQuote.author}</cite>', 'm-quote,[riot-tag="m-quote"],[data-is="m-quote"]{ border: 1px solid gray; background-color: lightblue; display: inline-block; min-width: 200px; max-width: 200px; border-radius: 5px; }', '', function(opts) {
    this.mixin("redux");
  });
});

})();
(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("42", ["require", "exports", "module", "3f"], function(require, exports, module) {
      tagger(require('3f'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote-form', '<form id="quoteGreatForm"> <fieldset> <legend>Add/Edit Quote</legend> <label for="txtQuote"> Quote <textarea name="txtQuote" id="txtQuote" placeholder="type your quote here..." value="{opts.dataQuote.text}"></textarea> </label> <label for="txtQuoteAuthor"> Author <input id="txtQuoteAuthor" type="text" name="txtQuoteAuthor" placeholder="type author name here..." value="{opts.dataQuote.author}"> </label> <label for="txtNotes"> Notes <textarea name="txtNotes" id="txtNotes" placeholder="type some notes here..." value="{opts.dataQuote.notes}"></textarea> </label> <div class="flex-container"> <label for="favCtrl" class="inline" onclick="{toggleFav}"> Favorite <input type="hidden" name="favCtrl" id="favCtrl" value="{isFaved ? ⁗true⁗ : ⁗false⁗}"> <i class="fa fa-star {isFaved ? \'active\' : \'\'}"></i> </label> <label for="archiveCtrl" class="inline" onclick="{toggleArchive}"> Archive <input type="hidden" name="archiveCtrl" id="archiveCtrl" value="{isArchived ? ⁗true⁗ : ⁗false⁗}"> <i class="fa fa-archive {isArchived ? \'active\' : \'\'}"></i> </label> </div> <input type="hidden" name="quoteId" id="quoteId" value="{opts.dataQuote.id || store.getState().length}"> <input type="hidden" name="createdOn" value="{opts.dataQuote.createdOn}"> <div class="flex-container"> <button type="button" class="btn-secondary" onclick="{cancel}">Cancel</button> <button type="button" class="btn-primary" onclick="{save}">Save</button> </div> </fieldset> </form>', 'm-quote-form html,[riot-tag="m-quote-form"] html,[data-is="m-quote-form"] html{box-sizing:border-box} m-quote-form *,[riot-tag="m-quote-form"] *,[data-is="m-quote-form"] *,m-quote-form *:before,[riot-tag="m-quote-form"] *:before,[data-is="m-quote-form"] *:before,m-quote-form *:after,[riot-tag="m-quote-form"] *:after,[data-is="m-quote-form"] *:after{box-sizing:inherit} m-quote-form body,[riot-tag="m-quote-form"] body,[data-is="m-quote-form"] body{font-size:16px;line-height:1.6rem} m-quote-form i.fa,[riot-tag="m-quote-form"] i.fa,[data-is="m-quote-form"] i.fa{color:#fafafa;text-shadow:0 0 2px #090a0a;font-size:1.6rem;vertical-align:middle} m-quote-form i.fa.active,[riot-tag="m-quote-form"] i.fa.active,[data-is="m-quote-form"] i.fa.active{color:#fed729} m-quote-form button,[riot-tag="m-quote-form"] button,[data-is="m-quote-form"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-form .btn-primary,[riot-tag="m-quote-form"] .btn-primary,[data-is="m-quote-form"] .btn-primary{background:#0e6bd8} m-quote-form .btn-secondary,[riot-tag="m-quote-form"] .btn-secondary,[data-is="m-quote-form"] .btn-secondary{background:#ff5d32} m-quote-form,[riot-tag="m-quote-form"],[data-is="m-quote-form"]{display:block;padding:0 1rem;height:auto;max-height:44rem;margin:1rem 0;overflow:hidden;transition:max-height .6s ease-in-out;background:#c3d7db} m-quote-form.hidden,[riot-tag="m-quote-form"].hidden,[data-is="m-quote-form"].hidden{max-height:0} m-quote-form label,[riot-tag="m-quote-form"] label,[data-is="m-quote-form"] label{display:block;margin-bottom:1rem} m-quote-form input,[riot-tag="m-quote-form"] input,[data-is="m-quote-form"] input,m-quote-form textarea,[riot-tag="m-quote-form"] textarea,[data-is="m-quote-form"] textarea{width:100%;display:block;border-radius:.3rem;border:1px solid gray;-webkit-appearance:none;box-shadow:inset 0 0 15px -7px black;padding:.6rem} m-quote-form textarea,[riot-tag="m-quote-form"] textarea,[data-is="m-quote-form"] textarea{min-height:12rem} m-quote-form input[type="checkbox"],[riot-tag="m-quote-form"] input[type="checkbox"],[data-is="m-quote-form"] input[type="checkbox"]{width:20px;height:20px;display:inline-block} m-quote-form label.inline,[riot-tag="m-quote-form"] label.inline,[data-is="m-quote-form"] label.inline{display:inline-block;width:auto} m-quote-form .flex-container,[riot-tag="m-quote-form"] .flex-container,[data-is="m-quote-form"] .flex-container{display:flex;justify-content:space-between}', 'class="hidden"', function(opts) {
    var _this = this;
    this.mixin('redux');
    this.mixin('actions');
    riot.observable(this.root);
    function save() {
      const quote = {
        text: this.txtQuote.value,
        author: this.txtQuoteAuthor.value,
        isArchived: this.isArchived,
        isFaved: this.isFaved,
        notes: this.txtNotes.value,
        createdOn: this.createdOn || new Date(),
        modifiedOn: new Date(),
        id: this.quoteId
      };
      const action = this.opts.dataQuote ? this.editQuote(quote) : this.addQuote(quote);
      this.store.dispatch(action);
      this.root.trigger("saveQuote");
      this.clearForm();
    }
    function cancel() {
      this.clearForm();
      this.root.trigger("cancelQuote");
    }
    function clearForm() {
      this.quoteGreatForm.reset();
      this.txtQuoteAuthor.value = '';
      this.isFaved = false;
      this.isArchived = false;
    }
    function toggleFav() {
      this.isFaved = !this.isFaved;
    }
    function toggleArchive() {
      this.isArchived = !this.isArchived;
    }
    this.root.on('hideQuoteForm', () => {
      _this.root.classList.add("hidden");
    });
    this.root.on('showQuoteForm', () => {
      _this.root.classList.remove("hidden");
    });
  });
});

})();
$__System.registerDynamic("43", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  ;
  (function(window, undefined) {
    'use strict';
    var riot = {
      version: 'v2.3.18',
      settings: {}
    },
        __uid = 0,
        __virtualDom = [],
        __tagImpl = {},
        GLOBAL_MIXIN = '__global_mixin',
        RIOT_PREFIX = 'riot-',
        RIOT_TAG = RIOT_PREFIX + 'tag',
        RIOT_TAG_IS = 'data-is',
        T_STRING = 'string',
        T_OBJECT = 'object',
        T_UNDEF = 'undefined',
        T_FUNCTION = 'function',
        SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
        RESERVED_WORDS_BLACKLIST = ['_item', '_id', '_parent', 'update', 'root', 'mount', 'unmount', 'mixin', 'isMounted', 'isLoop', 'tags', 'parent', 'opts', 'trigger', 'on', 'off', 'one'],
        IE_VERSION = (window && window.document || {}).documentMode | 0,
        FIREFOX = window && !!window.InstallTrigger;
    riot.observable = function(el) {
      el = el || {};
      var callbacks = {},
          slice = Array.prototype.slice,
          onEachEvent = function(e, fn) {
            e.replace(/\S+/g, fn);
          };
      Object.defineProperties(el, {
        on: {
          value: function(events, fn) {
            if (typeof fn != 'function')
              return el;
            onEachEvent(events, function(name, pos) {
              (callbacks[name] = callbacks[name] || []).push(fn);
              fn.typed = pos > 0;
            });
            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        },
        off: {
          value: function(events, fn) {
            if (events == '*' && !fn)
              callbacks = {};
            else {
              onEachEvent(events, function(name) {
                if (fn) {
                  var arr = callbacks[name];
                  for (var i = 0,
                      cb; cb = arr && arr[i]; ++i) {
                    if (cb == fn)
                      arr.splice(i--, 1);
                  }
                } else
                  delete callbacks[name];
              });
            }
            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        },
        one: {
          value: function(events, fn) {
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
        trigger: {
          value: function(events) {
            var arglen = arguments.length - 1,
                args = new Array(arglen),
                fns;
            for (var i = 0; i < arglen; i++) {
              args[i] = arguments[i + 1];
            }
            onEachEvent(events, function(name) {
              fns = slice.call(callbacks[name] || [], 0);
              for (var i = 0,
                  fn; fn = fns[i]; ++i) {
                if (fn.busy)
                  return;
                fn.busy = 1;
                fn.apply(el, fn.typed ? [name].concat(args) : args);
                if (fns[i] !== fn) {
                  i--;
                }
                fn.busy = 0;
              }
              if (callbacks['*'] && name != '*')
                el.trigger.apply(el, ['*', name].concat(args));
            });
            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        }
      });
      return el;
    };
    ;
    (function(riot) {
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
          prot = Router.prototype,
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
      function DEFAULT_PARSER(path) {
        return path.split(/[/?#]/);
      }
      function DEFAULT_SECOND_PARSER(path, filter) {
        var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
            args = path.match(re);
        if (args)
          return args.slice(1);
      }
      function debounce(fn, delay) {
        var t;
        return function() {
          clearTimeout(t);
          t = setTimeout(fn, delay);
        };
      }
      function start(autoExec) {
        debouncedEmit = debounce(emit, 1);
        win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
        win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
        doc[ADD_EVENT_LISTENER](clickEvent, click);
        if (autoExec)
          emit(true);
      }
      function Router() {
        this.$ = [];
        riot.observable(this);
        central.on('stop', this.s.bind(this));
        central.on('emit', this.e.bind(this));
      }
      function normalize(path) {
        return path[REPLACE](/^\/|\/$/, '');
      }
      function isString(str) {
        return typeof str == 'string';
      }
      function getPathFromRoot(href) {
        return (href || loc.href)[REPLACE](RE_ORIGIN, '');
      }
      function getPathFromBase(href) {
        return base[0] == '#' ? (href || loc.href || '').split(base)[1] || '' : (loc ? getPathFromRoot(href) : href || '')[REPLACE](base, '');
      }
      function emit(force) {
        var isRoot = emitStackLevel == 0;
        if (MAX_EMIT_STACK_LEVEL <= emitStackLevel)
          return;
        emitStackLevel++;
        emitStack.push(function() {
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
        if (e.which != 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)
          return;
        var el = e.target;
        while (el && el.nodeName != 'A')
          el = el.parentNode;
        if (!el || el.nodeName != 'A' || el[HAS_ATTRIBUTE]('download') || !el[HAS_ATTRIBUTE]('href') || el.target && el.target != '_self' || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1)
          return;
        if (el.href != loc.href) {
          if (el.href.split('#')[0] == loc.href.split('#')[0] || base != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 || !go(getPathFromBase(el.href), el.title || doc.title))
            return;
        }
        e.preventDefault();
      }
      function go(path, title, shouldReplace) {
        if (hist) {
          path = base + normalize(path);
          title = title || doc.title;
          shouldReplace ? hist.replaceState(null, title, path) : hist.pushState(null, title, path);
          doc.title = title;
          routeFound = false;
          emit();
          return routeFound;
        }
        return central[TRIGGER]('emit', getPathFromBase(path));
      }
      prot.m = function(first, second, third) {
        if (isString(first) && (!second || isString(second)))
          go(first, second, third || false);
        else if (second)
          this.r(first, second);
        else
          this.r('@', first);
      };
      prot.s = function() {
        this.off('*');
        this.$ = [];
      };
      prot.e = function(path) {
        this.$.concat('@').some(function(filter) {
          var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter));
          if (typeof args != 'undefined') {
            this[TRIGGER].apply(null, [filter].concat(args));
            return routeFound = true;
          }
        }, this);
      };
      prot.r = function(filter, action) {
        if (filter != '@') {
          filter = '/' + normalize(filter);
          this.$.push(filter);
        }
        this.on(filter, action);
      };
      var mainRouter = new Router();
      var route = mainRouter.m.bind(mainRouter);
      route.create = function() {
        var newSubRouter = new Router();
        var router = newSubRouter.m.bind(newSubRouter);
        router.stop = newSubRouter.s.bind(newSubRouter);
        return router;
      };
      route.base = function(arg) {
        base = arg || '#';
        current = getPathFromBase();
      };
      route.exec = function() {
        emit(true);
      };
      route.parser = function(fn, fn2) {
        if (!fn && !fn2) {
          parser = DEFAULT_PARSER;
          secondParser = DEFAULT_SECOND_PARSER;
        }
        if (fn)
          parser = fn;
        if (fn2)
          secondParser = fn2;
      };
      route.query = function() {
        var q = {};
        var href = loc.href || current;
        href[REPLACE](/[?&](.+?)=([^&]*)/g, function(_, k, v) {
          q[k] = v;
        });
        return q;
      };
      route.stop = function() {
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
      route.start = function(autoExec) {
        if (!started) {
          if (win) {
            if (document.readyState == 'complete')
              start(autoExec);
            else
              win[ADD_EVENT_LISTENER]('load', function() {
                setTimeout(function() {
                  start(autoExec);
                }, 1);
              });
          }
          started = true;
        }
      };
      route.base();
      route.parser();
      riot.route = route;
    })(riot);
    var brackets = (function(UNDEF) {
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
        if (!bp)
          bp = _cache;
        return new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : '');
      }
      function _create(pair) {
        if (pair === DEFAULT)
          return _pairs;
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
        if (!_bp)
          _bp = _cache;
        var parts = [],
            match,
            isexpr,
            start,
            pos,
            re = _bp[6];
        isexpr = start = re.lastIndex = 0;
        while ((match = re.exec(str))) {
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
          while ((match = recch.exec(s))) {
            if (match[1] && !(match[1] === ch ? ++ix : --ix))
              break;
          }
          return ix ? s.length : recch.lastIndex;
        }
      };
      _brackets.hasExpr = function hasExpr(str) {
        return _cache[4].test(str);
      };
      _brackets.loopKeys = function loopKeys(expr) {
        var m = expr.match(_cache[9]);
        return m ? {
          key: m[1],
          pos: m[2],
          val: _cache[0] + m[3].trim() + _cache[1]
        } : {val: expr.trim()};
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
          get: function() {
            return cachedBrackets;
          },
          enumerable: true
        });
        _settings = o;
        _reset(b);
      }
      Object.defineProperty(_brackets, 'settings', {
        set: _setSettings,
        get: function() {
          return _settings;
        }
      });
      _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
      _brackets.set = _reset;
      _brackets.R_STRINGS = R_STRINGS;
      _brackets.R_MLCOMMS = R_MLCOMMS;
      _brackets.S_QBLOCKS = S_QBLOCKS;
      return _brackets;
    })();
    var tmpl = (function() {
      var _cache = {};
      function _tmpl(str, data) {
        if (!str)
          return str;
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
            _riot_id: ctx && ctx._riot_id
          };
          _tmpl.errorHandler(err);
        }
      }
      function _create(str) {
        var expr = _getTmpl(str);
        if (expr.slice(0, 11) !== 'try{return ')
          expr = 'return ' + expr;
        return new Function('E', expr + ';');
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
            if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"'))
              list[j++] = expr;
          }
          expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
        } else {
          expr = _parseExpr(parts[1], 0, qstr);
        }
        if (qstr[0]) {
          expr = expr.replace(RE_QBMARK, function(_, pos) {
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
        expr = expr.replace(RE_QBLOCK, function(s, div) {
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
            while (jsb = (match = re.exec(expr))[1])
              skipBraces(jsb, re);
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
            if (mm[0] === ch)
              ++lv;
            else if (!--lv)
              break;
          }
          re.lastIndex = lv ? expr.length : ir.lastIndex;
        }
      }
      var JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
          JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
          JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;
      function _wrapExpr(expr, asText, key) {
        var tb;
        expr = expr.replace(JS_VARNAME, function(match, p, mvar, pos, s) {
          if (mvar) {
            pos = tb ? 0 : pos + match.length;
            if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
              match = p + '("' + mvar + JS_CONTEXT + mvar;
              if (pos)
                tb = (s = s[pos]) === '.' || s === '(' || s === '[';
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
      _tmpl.parse = function(s) {
        return s;
      };
      _tmpl.version = brackets.version = 'v2.3.22';
      return _tmpl;
    })();
    var mkdom = (function _mkdom() {
      var reHasYield = /<yield\b/i,
          reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
          reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
          reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
      var rootEls = {
        tr: 'tbody',
        th: 'tr',
        td: 'tr',
        col: 'colgroup'
      },
          tblTags = IE_VERSION && IE_VERSION < 10 ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;
      function _mkdom(templ, html) {
        var match = templ && templ.match(/^\s*<([-\w]+)/),
            tagName = match && match[1].toLowerCase(),
            el = mkEl('div');
        templ = replaceYield(templ, html);
        if (tblTags.test(tagName))
          el = specialTags(el, templ, tagName);
        else
          el.innerHTML = templ;
        el.stub = true;
        return el;
      }
      function specialTags(el, templ, tagName) {
        var select = tagName[0] === 'o',
            parent = select ? 'select>' : 'table>';
        el.innerHTML = '<' + parent + templ.trim() + '</' + parent;
        parent = el.firstChild;
        if (select) {
          parent.selectedIndex = -1;
        } else {
          var tname = rootEls[tagName];
          if (tname && parent.childElementCount === 1)
            parent = $(tname, parent);
        }
        return parent;
      }
      function replaceYield(templ, html) {
        if (!reHasYield.test(templ))
          return templ;
        var src = {};
        html = html && html.replace(reYieldSrc, function(_, ref, text) {
          src[ref] = src[ref] || text;
          return '';
        }).trim();
        return templ.replace(reYieldDest, function(_, ref, def) {
          return src[ref] || def || '';
        }).replace(reYieldAll, function(_, def) {
          return html || def || '';
        });
      }
      return _mkdom;
    })();
    function mkitem(expr, key, val) {
      var item = {};
      item[expr.key] = key;
      if (expr.pos)
        item[expr.pos] = val;
      return item;
    }
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
    function moveNestedTags(child, i) {
      Object.keys(child.tags).forEach(function(tagName) {
        var tag = child.tags[tagName];
        if (isArray(tag))
          each(tag, function(t) {
            moveChildTag(t, tagName, i);
          });
        else
          moveChildTag(tag, tagName, i);
      });
    }
    function addVirtual(tag, src, target) {
      var el = tag._root,
          sib;
      tag._virts = [];
      while (el) {
        sib = el.nextSibling;
        if (target)
          src.insertBefore(el, target._root);
        else
          src.appendChild(el);
        tag._virts.push(el);
        el = sib;
      }
    }
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
    function _each(dom, parent, expr) {
      remAttr(dom, 'each');
      var mustReorder = typeof getAttr(dom, 'no-reorder') !== T_STRING || remAttr(dom, 'no-reorder'),
          tagName = getTagName(dom),
          impl = __tagImpl[tagName] || {tmpl: dom.outerHTML},
          useRoot = SPECIAL_TAGS_REGEX.test(tagName),
          root = dom.parentNode,
          ref = document.createTextNode(''),
          child = getTag(dom),
          isOption = tagName.toLowerCase() === 'option',
          tags = [],
          oldItems = [],
          hasKeys,
          isVirtual = dom.tagName == 'VIRTUAL';
      expr = tmpl.loopKeys(expr);
      root.insertBefore(ref, dom);
      parent.one('before-mount', function() {
        dom.parentNode.removeChild(dom);
        if (root.stub)
          root = parent.root;
      }).on('update', function() {
        var items = tmpl(expr.val, parent),
            frag = document.createDocumentFragment();
        if (!isArray(items)) {
          hasKeys = items || false;
          items = hasKeys ? Object.keys(items).map(function(key) {
            return mkitem(expr, key, items[key]);
          }) : [];
        }
        var i = 0,
            itemsLength = items.length;
        for (; i < itemsLength; i++) {
          var item = items[i],
              _mustReorder = mustReorder && item instanceof Object && !hasKeys,
              oldPos = oldItems.indexOf(item),
              pos = ~oldPos && _mustReorder ? oldPos : i,
              tag = tags[pos];
          item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;
          if (!_mustReorder && !tag || _mustReorder && !~oldPos || !tag) {
            tag = new Tag(impl, {
              parent: parent,
              isLoop: true,
              hasImpl: !!__tagImpl[tagName],
              root: useRoot ? root : dom.cloneNode(),
              item: item
            }, dom.innerHTML);
            tag.mount();
            if (isVirtual)
              tag._root = tag.root.firstChild;
            if (i == tags.length || !tags[i]) {
              if (isVirtual)
                addVirtual(tag, frag);
              else
                frag.appendChild(tag.root);
            } else {
              if (isVirtual)
                addVirtual(tag, root, tags[i]);
              else
                root.insertBefore(tag.root, tags[i].root);
              oldItems.splice(i, 0, item);
            }
            tags.splice(i, 0, tag);
            pos = i;
          } else
            tag.update(item, true);
          if (pos !== i && _mustReorder && tags[i]) {
            if (isVirtual)
              moveVirtual(tag, root, tags[i], dom.childNodes.length);
            else
              root.insertBefore(tag.root, tags[i].root);
            if (expr.pos)
              tag[expr.pos] = i;
            tags.splice(i, 0, tags.splice(pos, 1)[0]);
            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
            if (!child && tag.tags)
              moveNestedTags(tag, i);
          }
          tag._item = item;
          defineProperty(tag, '_parent', parent);
        }
        unmountRedundant(items, tags);
        if (isOption) {
          root.appendChild(frag);
          if (FIREFOX && !root.multiple) {
            for (var n = 0; n < root.length; n++) {
              if (root[n].__riot1374) {
                root.selectedIndex = n;
                delete root[n].__riot1374;
                break;
              }
            }
          }
        } else
          root.insertBefore(frag, ref);
        if (child)
          parent.tags[tagName] = tags;
        oldItems = items.slice();
      });
    }
    var styleManager = (function(_riot) {
      if (!window)
        return {
          add: function() {},
          inject: function() {}
        };
      var styleNode = (function() {
        var newNode = mkEl('style');
        setAttr(newNode, 'type', 'text/css');
        var userNode = $('style[type=riot]');
        if (userNode) {
          if (userNode.id)
            newNode.id = userNode.id;
          userNode.parentNode.replaceChild(newNode, userNode);
        } else
          document.getElementsByTagName('head')[0].appendChild(newNode);
        return newNode;
      })();
      var cssTextProp = styleNode.styleSheet,
          stylesToInject = '';
      Object.defineProperty(_riot, 'styleNode', {
        value: styleNode,
        writable: true
      });
      return {
        add: function(css) {
          stylesToInject += css;
        },
        inject: function() {
          if (stylesToInject) {
            if (cssTextProp)
              cssTextProp.cssText += stylesToInject;
            else
              styleNode.innerHTML += stylesToInject;
            stylesToInject = '';
          }
        }
      };
    })(riot);
    function parseNamedElements(root, tag, childTags, forceParsingNamed) {
      walk(root, function(dom) {
        if (dom.nodeType == 1) {
          dom.isLoop = dom.isLoop || (dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each')) ? 1 : 0;
          if (childTags) {
            var child = getTag(dom);
            if (child && !dom.isLoop)
              childTags.push(initChildTag(child, {
                root: dom,
                parent: tag
              }, dom.innerHTML, tag));
          }
          if (!dom.isLoop || forceParsingNamed)
            setNamed(dom, tag, []);
        }
      });
    }
    function parseExpressions(root, tag, expressions) {
      function addExpr(dom, val, extra) {
        if (tmpl.hasExpr(val)) {
          expressions.push(extend({
            dom: dom,
            expr: val
          }, extra));
        }
      }
      walk(root, function(dom) {
        var type = dom.nodeType,
            attr;
        if (type == 3 && dom.parentNode.tagName != 'STYLE')
          addExpr(dom, dom.nodeValue);
        if (type != 1)
          return;
        attr = getAttr(dom, 'each');
        if (attr) {
          _each(dom, tag, attr);
          return false;
        }
        each(dom.attributes, function(attr) {
          var name = attr.name,
              bool = name.split('__')[1];
          addExpr(dom, attr.value, {
            attr: bool || name,
            bool: bool
          });
          if (bool) {
            remAttr(dom, name);
            return false;
          }
        });
        if (getTag(dom))
          return false;
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
      if (impl.name && root._tag)
        root._tag.unmount(true);
      this.isMounted = false;
      root.isLoop = isLoop;
      root._tag = this;
      defineProperty(this, '_riot_id', ++__uid);
      extend(this, {
        parent: parent,
        root: root,
        opts: opts,
        tags: {}
      }, item);
      each(root.attributes, function(el) {
        var val = el.value;
        if (tmpl.hasExpr(val))
          attr[el.name] = val;
      });
      dom = mkdom(impl.tmpl, innerHTML);
      function updateOpts() {
        var ctx = hasImpl && isLoop ? self : parent || self;
        each(root.attributes, function(el) {
          var val = el.value;
          opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val;
        });
        each(Object.keys(attr), function(name) {
          opts[toCamel(name)] = tmpl(attr[name], ctx);
        });
      }
      function normalizeData(data) {
        for (var key in item) {
          if (typeof self[key] !== T_UNDEF && isWritable(self, key))
            self[key] = data[key];
        }
      }
      function inheritFromParent() {
        if (!self.parent || !isLoop)
          return;
        each(Object.keys(self.parent), function(k) {
          var mustSync = !contains(RESERVED_WORDS_BLACKLIST, k) && contains(propsInSyncWithParent, k);
          if (typeof self[k] === T_UNDEF || mustSync) {
            if (!mustSync)
              propsInSyncWithParent.push(k);
            self[k] = self.parent[k];
          }
        });
      }
      defineProperty(this, 'update', function(data, isInherited) {
        data = cleanUpData(data);
        inheritFromParent();
        if (data && isObject(item)) {
          normalizeData(data);
          item = data;
        }
        extend(self, data);
        updateOpts();
        self.trigger('update', data);
        update(expressions, self);
        if (isInherited && self.parent)
          self.parent.one('updated', function() {
            self.trigger('updated');
          });
        else
          rAF(function() {
            self.trigger('updated');
          });
        return this;
      });
      defineProperty(this, 'mixin', function() {
        each(arguments, function(mix) {
          var instance;
          mix = typeof mix === T_STRING ? riot.mixin(mix) : mix;
          if (isFunction(mix)) {
            instance = new mix();
            mix = mix.prototype;
          } else
            instance = mix;
          each(Object.getOwnPropertyNames(mix), function(key) {
            if (key != 'init')
              self[key] = isFunction(instance[key]) ? instance[key].bind(self) : instance[key];
          });
          if (instance.init)
            instance.init.bind(self)();
        });
        return this;
      });
      defineProperty(this, 'mount', function() {
        updateOpts();
        var globalMixin = riot.mixin(GLOBAL_MIXIN);
        if (globalMixin)
          self.mixin(globalMixin);
        if (impl.fn)
          impl.fn.call(self, opts);
        parseExpressions(dom, self, expressions);
        toggle(true);
        if (impl.attrs)
          walkAttributes(impl.attrs, function(k, v) {
            setAttr(root, k, v);
          });
        if (impl.attrs || hasImpl)
          parseExpressions(self.root, self, expressions);
        if (!self.parent || isLoop)
          self.update(item);
        self.trigger('before-mount');
        if (isLoop && !hasImpl) {
          root = dom.firstChild;
        } else {
          while (dom.firstChild)
            root.appendChild(dom.firstChild);
          if (root.stub)
            root = parent.root;
        }
        defineProperty(self, 'root', root);
        if (isLoop)
          parseNamedElements(self.root, self.parent, null, true);
        if (!self.parent || self.parent.isMounted) {
          self.isMounted = true;
          self.trigger('mount');
        } else
          self.parent.one('mount', function() {
            if (!isInStub(self.root)) {
              self.parent.isMounted = self.isMounted = true;
              self.trigger('mount');
            }
          });
      });
      defineProperty(this, 'unmount', function(keepRootTag) {
        var el = root,
            p = el.parentNode,
            ptag,
            tagIndex = __virtualDom.indexOf(self);
        self.trigger('before-unmount');
        if (~tagIndex)
          __virtualDom.splice(tagIndex, 1);
        if (p) {
          if (parent) {
            ptag = getImmediateCustomParentTag(parent);
            if (isArray(ptag.tags[tagName]))
              each(ptag.tags[tagName], function(tag, i) {
                if (tag._riot_id == self._riot_id)
                  ptag.tags[tagName].splice(i, 1);
              });
            else
              ptag.tags[tagName] = undefined;
          } else
            while (el.firstChild)
              el.removeChild(el.firstChild);
          if (!keepRootTag)
            p.removeChild(el);
          else {
            remAttr(p, RIOT_TAG_IS);
            remAttr(p, RIOT_TAG);
          }
        }
        if (this._virts) {
          each(this._virts, function(v) {
            if (v.parentNode)
              v.parentNode.removeChild(v);
          });
        }
        self.trigger('unmount');
        toggle();
        self.off('*');
        self.isMounted = false;
        delete root._tag;
      });
      function onChildUpdate(data) {
        self.update(data, true);
      }
      function toggle(isMount) {
        each(childTags, function(child) {
          child[isMount ? 'mount' : 'unmount']();
        });
        if (!parent)
          return;
        var evt = isMount ? 'on' : 'off';
        if (isLoop)
          parent[evt]('unmount', self.unmount);
        else {
          parent[evt]('update', onChildUpdate)[evt]('unmount', self.unmount);
        }
      }
      parseNamedElements(dom, this, childTags);
    }
    function setEventHandler(name, handler, dom, tag) {
      dom[name] = function(e) {
        var ptag = tag._parent,
            item = tag._item,
            el;
        if (!item)
          while (ptag && !item) {
            item = ptag._item;
            ptag = ptag._parent;
          }
        e = e || window.event;
        if (isWritable(e, 'currentTarget'))
          e.currentTarget = dom;
        if (isWritable(e, 'target'))
          e.target = e.srcElement;
        if (isWritable(e, 'which'))
          e.which = e.charCode || e.keyCode;
        e.item = item;
        if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
          if (e.preventDefault)
            e.preventDefault();
          e.returnValue = false;
        }
        if (!e.preventUpdate) {
          el = item ? getImmediateCustomParentTag(ptag) : tag;
          el.update();
        }
      };
    }
    function insertTo(root, node, before) {
      if (!root)
        return;
      root.insertBefore(before, node);
      root.removeChild(node);
    }
    function update(expressions, tag) {
      each(expressions, function(expr, i) {
        var dom = expr.dom,
            attrName = expr.attr,
            value = tmpl(expr.expr, tag),
            parent = expr.dom.parentNode;
        if (expr.bool) {
          value = !!value;
        } else if (value == null) {
          value = '';
        }
        if (expr.value === value) {
          return;
        }
        expr.value = value;
        if (!attrName) {
          value += '';
          if (parent) {
            if (parent.tagName === 'TEXTAREA') {
              parent.value = value;
              if (!IE_VERSION)
                dom.nodeValue = value;
            } else
              dom.nodeValue = value;
          }
          return;
        }
        if (attrName === 'value') {
          dom.value = value;
          return;
        }
        remAttr(dom, attrName);
        if (isFunction(value)) {
          setEventHandler(attrName, value, dom, tag);
        } else if (attrName == 'if') {
          var stub = expr.stub,
              add = function() {
                insertTo(stub.parentNode, stub, dom);
              },
              remove = function() {
                insertTo(dom.parentNode, dom, stub);
              };
          if (value) {
            if (stub) {
              add();
              dom.inStub = false;
              if (!isInStub(dom)) {
                walk(dom, function(el) {
                  if (el._tag && !el._tag.isMounted)
                    el._tag.isMounted = !!el._tag.trigger('mount');
                });
              }
            }
          } else {
            stub = expr.stub = stub || document.createTextNode('');
            if (dom.parentNode)
              remove();
            else
              (tag.parent || tag).one('updated', remove);
            dom.inStub = true;
          }
        } else if (attrName === 'show') {
          dom.style.display = value ? '' : 'none';
        } else if (attrName === 'hide') {
          dom.style.display = value ? 'none' : '';
        } else if (expr.bool) {
          dom[attrName] = value;
          if (value)
            setAttr(dom, attrName, attrName);
          if (FIREFOX && attrName === 'selected' && dom.tagName === 'OPTION') {
            dom.__riot1374 = value;
          }
        } else if (value === 0 || value && typeof value !== T_OBJECT) {
          if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
            attrName = attrName.slice(RIOT_PREFIX.length);
          }
          setAttr(dom, attrName, value);
        }
      });
    }
    function each(els, fn) {
      var len = els ? els.length : 0;
      for (var i = 0,
          el; i < len; i++) {
        el = els[i];
        if (el != null && fn(el, i) === false)
          i--;
      }
      return els;
    }
    function isFunction(v) {
      return typeof v === T_FUNCTION || false;
    }
    function isObject(v) {
      return v && typeof v === T_OBJECT;
    }
    function remAttr(dom, name) {
      dom.removeAttribute(name);
    }
    function toCamel(string) {
      return string.replace(/-(\w)/g, function(_, c) {
        return c.toUpperCase();
      });
    }
    function getAttr(dom, name) {
      return dom.getAttribute(name);
    }
    function setAttr(dom, name, val) {
      dom.setAttribute(name, val);
    }
    function getTag(dom) {
      return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG_IS) || getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()];
    }
    function addChildTag(tag, tagName, parent) {
      var cachedTag = parent.tags[tagName];
      if (cachedTag) {
        if (!isArray(cachedTag))
          if (cachedTag !== tag)
            parent.tags[tagName] = [cachedTag];
        if (!contains(parent.tags[tagName], tag))
          parent.tags[tagName].push(tag);
      } else {
        parent.tags[tagName] = tag;
      }
    }
    function moveChildTag(tag, tagName, newPos) {
      var parent = tag.parent,
          tags;
      if (!parent)
        return;
      tags = parent.tags[tagName];
      if (isArray(tags))
        tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0]);
      else
        addChildTag(tag, tagName, parent);
    }
    function initChildTag(child, opts, innerHTML, parent) {
      var tag = new Tag(child, opts, innerHTML),
          tagName = getTagName(opts.root),
          ptag = getImmediateCustomParentTag(parent);
      tag.parent = ptag;
      tag._parent = parent;
      addChildTag(tag, tagName, ptag);
      if (ptag !== parent)
        addChildTag(tag, tagName, parent);
      opts.root.innerHTML = '';
      return tag;
    }
    function getImmediateCustomParentTag(tag) {
      var ptag = tag;
      while (!getTag(ptag.root)) {
        if (!ptag.parent)
          break;
        ptag = ptag.parent;
      }
      return ptag;
    }
    function defineProperty(el, key, value, options) {
      Object.defineProperty(el, key, extend({
        value: value,
        enumerable: false,
        writable: false,
        configurable: true
      }, options));
      return el;
    }
    function getTagName(dom) {
      var child = getTag(dom),
          namedTag = getAttr(dom, 'name'),
          tagName = namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();
      return tagName;
    }
    function extend(src) {
      var obj,
          args = arguments;
      for (var i = 1; i < args.length; ++i) {
        if (obj = args[i]) {
          for (var key in obj) {
            if (isWritable(src, key))
              src[key] = obj[key];
          }
        }
      }
      return src;
    }
    function contains(arr, item) {
      return ~arr.indexOf(item);
    }
    function isArray(a) {
      return Array.isArray(a) || a instanceof Array;
    }
    function isWritable(obj, key) {
      var props = Object.getOwnPropertyDescriptor(obj, key);
      return typeof obj[key] === T_UNDEF || props && props.writable;
    }
    function cleanUpData(data) {
      if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION))
        return data;
      var o = {};
      for (var key in data) {
        if (!contains(RESERVED_WORDS_BLACKLIST, key))
          o[key] = data[key];
      }
      return o;
    }
    function walk(dom, fn) {
      if (dom) {
        if (fn(dom) === false)
          return;
        else {
          dom = dom.firstChild;
          while (dom) {
            walk(dom, fn);
            dom = dom.nextSibling;
          }
        }
      }
    }
    function walkAttributes(html, fn) {
      var m,
          re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
      while (m = re.exec(html)) {
        fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
      }
    }
    function isInStub(dom) {
      while (dom) {
        if (dom.inStub)
          return true;
        dom = dom.parentNode;
      }
      return false;
    }
    function mkEl(name) {
      return document.createElement(name);
    }
    function $$(selector, ctx) {
      return (ctx || document).querySelectorAll(selector);
    }
    function $(selector, ctx) {
      return (ctx || document).querySelector(selector);
    }
    function inherit(parent) {
      function Child() {}
      Child.prototype = parent;
      return new Child();
    }
    function getNamedKey(dom) {
      return getAttr(dom, 'id') || getAttr(dom, 'name');
    }
    function setNamed(dom, parent, keys) {
      var key = getNamedKey(dom),
          isArr,
          add = function(value) {
            if (contains(keys, key))
              return;
            isArr = isArray(value);
            if (!value)
              parent[key] = dom;
            else if (!isArr || isArr && !contains(value, dom)) {
              if (isArr)
                value.push(dom);
              else
                parent[key] = [value, dom];
            }
          };
      if (!key)
        return;
      if (tmpl.hasExpr(key))
        parent.one('mount', function() {
          key = getNamedKey(dom);
          add(parent[key]);
        });
      else
        add(parent[key]);
    }
    function startsWith(src, str) {
      return src.slice(0, str.length) === str;
    }
    var rAF = (function(w) {
      var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;
      if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {
        var lastTime = 0;
        raf = function(cb) {
          var nowtime = Date.now(),
              timeout = Math.max(16 - (nowtime - lastTime), 0);
          setTimeout(function() {
            cb(lastTime = nowtime + timeout);
          }, timeout);
        };
      }
      return raf;
    })(window || {});
    function mountTo(root, tagName, opts) {
      var tag = __tagImpl[tagName],
          innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
      root.innerHTML = '';
      if (tag && root)
        tag = new Tag(tag, {
          root: root,
          opts: opts
        }, innerHTML);
      if (tag && tag.mount) {
        tag.mount();
        if (!contains(__virtualDom, tag))
          __virtualDom.push(tag);
      }
      return tag;
    }
    riot.util = {
      brackets: brackets,
      tmpl: tmpl
    };
    riot.mixin = (function() {
      var mixins = {};
      return function(name, mixin) {
        if (isObject(name)) {
          mixin = name;
          mixins[GLOBAL_MIXIN] = extend(mixins[GLOBAL_MIXIN] || {}, mixin);
          return;
        }
        if (!mixin)
          return mixins[name];
        mixins[name] = mixin;
      };
    })();
    riot.tag = function(name, html, css, attrs, fn) {
      if (isFunction(attrs)) {
        fn = attrs;
        if (/^[\w\-]+\s?=/.test(css)) {
          attrs = css;
          css = '';
        } else
          attrs = '';
      }
      if (css) {
        if (isFunction(css))
          fn = css;
        else
          styleManager.add(css);
      }
      name = name.toLowerCase();
      __tagImpl[name] = {
        name: name,
        tmpl: html,
        attrs: attrs,
        fn: fn
      };
      return name;
    };
    riot.tag2 = function(name, html, css, attrs, fn) {
      if (css)
        styleManager.add(css);
      __tagImpl[name] = {
        name: name,
        tmpl: html,
        attrs: attrs,
        fn: fn
      };
      return name;
    };
    riot.mount = function(selector, tagName, opts) {
      var els,
          allTags,
          tags = [];
      function addRiotTags(arr) {
        var list = '';
        each(arr, function(e) {
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
          if (tagName && riotTag !== tagName) {
            riotTag = tagName;
            setAttr(root, RIOT_TAG_IS, tagName);
            setAttr(root, RIOT_TAG, tagName);
          }
          var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);
          if (tag)
            tags.push(tag);
        } else if (root.length) {
          each(root, pushTags);
        }
      }
      styleManager.inject();
      if (isObject(tagName)) {
        opts = tagName;
        tagName = 0;
      }
      if (typeof selector === T_STRING) {
        if (selector === '*')
          selector = allTags = selectAllTags();
        else
          selector += addRiotTags(selector.split(/, */));
        els = selector ? $$(selector) : [];
      } else
        els = selector;
      if (tagName === '*') {
        tagName = allTags || selectAllTags();
        if (els.tagName)
          els = $$(tagName, els);
        else {
          var nodeList = [];
          each(els, function(_el) {
            nodeList.push($$(tagName, _el));
          });
          els = nodeList;
        }
        tagName = 0;
      }
      pushTags(els);
      return tags;
    };
    riot.update = function() {
      return each(__virtualDom, function(tag) {
        tag.update();
      });
    };
    riot.vdom = __virtualDom;
    riot.Tag = Tag;
    if (typeof exports === T_OBJECT)
      module.exports = riot;
    else if (typeof define === T_FUNCTION && typeof define.amd !== T_UNDEF)
      define(function() {
        return riot;
      });
    else
      window.riot = riot;
  })(typeof window != 'undefined' ? window : void 0);
  return module.exports;
});

$__System.registerDynamic("3f", ["43"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('43');
  return module.exports;
});

(function() {
var define = $__System.amdDefine;
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define("44", ["require", "exports", "module", "3f"], function(require, exports, module) {
      tagger(require('3f'), require, exports, module);
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module);
  } else {
    tagger(window.riot);
  }
})(function(riot, require, exports, module) {
  riot.tag2('m-quote-container', '<button onclick="{showNewQuoteForm}"> Add new Quote </button> <m-quote-form></m-quote-form> <m-quote-list></m-quote-list>', '', '', function(opts) {
    var _this = this;
    this.on("mount", () => {
      const quoteForm = _this.tags["m-quote-form"].root;
      quoteForm.on("saveQuote cancelQuote", function() {
        quoteForm.trigger('hideQuoteForm');
      });
    });
    function showNewQuoteForm() {
      this.tags['m-quote-form'].root.trigger('showQuoteForm');
    }
  });
});

})();
$__System.register("1", ["27", "40", "41", "42", "44", "3f", "3a", "3c", "3d", "3e"], function (_export) {
    var _toConsumableArray, riot, createStore, riotReduxMixin, actions, quotes, searchReducer, store;

    return {
        setters: [function (_) {
            _toConsumableArray = _["default"];
        }, function (_2) {}, function (_3) {}, function (_4) {}, function (_5) {}, function (_f) {
            riot = _f["default"];
        }, function (_a) {
            createStore = _a.createStore;
        }, function (_c) {
            riotReduxMixin = _c["default"];
        }, function (_d) {}, function (_e) {}],
        execute: function () {
            "use strict";

            actions = {
                addQuote: function addQuote(newQuote) {
                    return { type: 'ADD_QUOTE', payload: newQuote };
                },
                editQuote: function editQuote(quote) {
                    return { type: 'EDIT_QUOTE', payload: quote };
                }
            };

            quotes = function quotes(currentState, action) {
                if (currentState === undefined) currentState = [{ id: 0, text: 'my nifty quote', author: 'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes: '' }, { id: 1, text: 'my spifffy quote', author: 'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes: '' }, { id: 2, text: 'my neat quote', author: 'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes: '' }, { id: 3, text: 'my favorite quote', author: 'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes: '' }];

                switch (action.type) {
                    // Actions
                    // ----------------------
                    // ADD_QUOTE
                    // EDIT_QUOTE
                    //
                    case "ADD_QUOTE":
                        return [].concat(_toConsumableArray(currentState), [action.payload]);
                    case "EDIT_QUOTE":
                        return currenState.map(function (quote) {
                            return quote.id === action.payload.id ? payload : quote;
                        });
                    default:
                        return currentState;
                }
            };

            searchReducer = function searchReducer(currentState, action) {
                if (currentState === undefined) currentState = "";
            };

            store = createStore(quotes);

            riot.mixin('redux', riotReduxMixin(store));
            riot.mixin('actions', actions);
            riot.mount("*");
        }
    };
});
$__System.register('css/main.less!npm:systemjs-less-plugin@1.8.3.js', [], false, function() {});
(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("html {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\nbody {\n  font-size: 16px;\n  line-height: 1.6rem;\n}\ni.fa {\n  color: #fafafa;\n  text-shadow: 0 0 2px #090a0a;\n  font-size: 1.6rem;\n  vertical-align: middle;\n}\ni.fa.active {\n  color: #fed729;\n}\nbutton {\n  border-radius: 0.6rem;\n  padding: .6rem 1rem;\n  background: #2c3233;\n  color: #fafafa;\n  min-width: 6rem;\n}\n.btn-primary {\n  background: #0e6bd8;\n}\n.btn-secondary {\n  background: #ff5d32;\n}\n");
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map