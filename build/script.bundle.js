/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(2);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(19);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(20);
var cookies = __webpack_require__(22);
var buildURL = __webpack_require__(3);
var buildFullPath = __webpack_require__(23);
var parseHeaders = __webpack_require__(26);
var isURLSameOrigin = __webpack_require__(27);
var createError = __webpack_require__(7);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
      requestData.type
    ) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(21);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

!function(r,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(r,t,e){r=r||{};var n=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};e.en.relativeTime=o;var d=function(t,n,d,i){for(var u,a,s,f=d.$locale().relativeTime||o,l=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=l.length,m=0;m<h;m+=1){var c=l[m];c.d&&(u=i?e(t).diff(d,c.d,!0):d.diff(t,c.d,!0));var y=(r.rounding||Math.round)(Math.abs(u));if(s=u>0,y<=c.r||!c.r){y<=1&&m>0&&(c=l[m-1]);var p=f[c.l];a="string"==typeof p?p.replace("%d",y):p(y,n,c.l,s);break}}return n?a:(s?f.future:f.past).replace("%s",a)};n.to=function(r,t){return d(r,t,this,!0)},n.from=function(r,t){return d(r,t,this)};var i=function(r){return r.$u?e.utc():e()};n.toNow=function(r){return this.to(i(this),r)},n.fromNow=function(r){return this.from(i(this),r)}}});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(14);
var mergeConfig = __webpack_require__(8);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(9);
axios.CancelToken = __webpack_require__(28);
axios.isCancel = __webpack_require__(4);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(29);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(3);
var InterceptorManager = __webpack_require__(15);
var dispatchRequest = __webpack_require__(16);
var mergeConfig = __webpack_require__(8);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(17);
var isCancel = __webpack_require__(4);
var defaults = __webpack_require__(5);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
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
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
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
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(24);
var combineURLs = __webpack_require__(25);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(9);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y="en",M={};M[y]=l;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=$;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var S=function(){function d(t){this.$L=this.$L||D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(32);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(34);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html {\n    font-family: 'Noto Sans', sans-serif;\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n}\n    \n*, *:before, *:after {\n    box-sizing: inherit;\n    transition: .2s;\n}\n\n:root {\n    --blue: #1DA1F2;\n    --bg: #15202B;\n    --blue-label: #1A91DA;\n    --blue-hover: #1B95E0;\n    --grey-font: #8899A6;\n    --grey-inputbg: #253341;\n    --grey-floating-panel: #192734;\n    --grey-floating-panel-hover: #202E3A;\n    --red: #D6235B;\n    --search-input-width: 700px;\n}\n\nbody {\n    -ms-touch-action: manipulation;\n        touch-action: manipulation;\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    font-size: 16px;\n    line-height: 1.5;\n    background-color: var(--bg);\n    scroll-behavior: smooth;\n}\n\na, a:visited {\n    cursor: pointer;\n    color: var(--blue-label);\n    text-decoration: none;\n    transition: 0.2s;\n    border-bottom: 1px solid transparent;\n}\n\na:hover, a:active {\n    color: var(--blue-hover);\n    border-bottom: 1px solid var(--blue-hover);\n}\n\n.mention {\n    cursor: pointer;\n    color: var(--blue-label);\n    border-bottom: 1px solid transparent;\n}\n\n.mention:hover, .mention:active {\n    border-bottom: 1px solid var(--blue-hover);\n}\n\n*[data-selected=\"true\"] {\n    color: var(--blue);\n    border-bottom: 1px solid var(--blue);\n}\n\ninput[type=\"search\"], input[type=\"text\"], input[type=\"password\"] {\n    font-family: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    outline: 0px;\n    border: 1px solid transparent;\n}\n\ninput[type=\"search\"] {\n    transition: 0.2s;\n    font-size: inherit;\n    width: 700px;\n    width: var(--search-input-width);\n    max-width: 700px;\n    height: 55px;\n    color: white;\n    background-color: var(--grey-inputbg);\n    border: 1px solid var(--bg);\n    border-radius: 50px;\n    padding: 20px 20px 20px 60px;\n    margin-bottom: 30px;\n}\n\ninput[type=\"search\"]:not(:-ms-input-placeholder) {\n    padding-right: 60px;\n    padding-left: 25px;\n}\n\ninput[type=\"search\"]:not(:placeholder-shown) {\n    padding-right: 60px;\n    padding-left: 25px;\n}\n\ninput[type=\"search\"]:focus,  input[type=\"search\"]:active, input[type=\"search\"]:hover {\n    border: 1px solid var(--blue);\n    background-color: var(--bg);\n    box-shadow: rgba(4, 74, 111, 1) 0px 0px 30px -10px;\n}\n\ninput[type=\"search\"]:-ms-input-placeholder {\n    color: var(--grey-font);\n}\n\ninput[type=\"search\"]::placeholder {\n    color: var(--grey-font);\n}\n\n.search-icon {\n    position: absolute;\n    pointer-events: none;\n    fill: var(--grey-font);\n    width: 60px;\n    left: 0px;\n\n    bottom: 52%;\n    padding: 0px 10px 0px 0px;\n    transform: translateX(0px);\n    -webkit-transform: translateX(0px);\n    transition: all 0.3s ease;\n    margin-left: 15px;\n}\n\ninput[type=\"search\"]:not(:-ms-input-placeholder) + .search-icon {\n    cursor: pointer;\n    pointer-events: all;\n    fill: var(--blue);\n    margin-left: Calc(var(--search-input-width) - 55px);\n}\n\ninput[type=\"search\"]:not(:placeholder-shown) + .search-icon {\n    cursor: pointer;\n    pointer-events: all;\n    fill: var(--blue);\n    margin-left: Calc(var(--search-input-width) - 55px);\n}\n\nbutton {\n    font-family: inherit;\n    font-size: 1rem;\n    color: white;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n    cursor: pointer;\n\twidth: 150px;\n\theight: 38px;\n\tpadding: 5px 10px;\n    border: 0;\n    border-radius: 100px;\n\tbackground-color: var(--blue);\n\ttransition: 0.2s;\n\ttransition-timing-function: ease;\n\ttransition-delay: 0.05s;\n\topacity: 1;\n}\n\nbutton:hover, button:active {\n    opacity: 0.8;\n}\n\n\n.modal {\n    z-index: 20;\n    position: absolute;\n    left: 0; \n    right: 0; \n    /* width: 500px;\n    height: 500px; */\n    top: 0px;\n    bottom: 0px;\n    margin: auto;\n    box-shadow: rgba(4, 74, 111, 0.8) 0px 0px 20px -5px;\n}\n\n.media-modal {\n    /* position: relative; */\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-item-align: center;\n        align-self: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    padding-top: 100px;\n    overflow: auto;\n    margin: auto;\n    display: block;\n    /* width: 80%; */\n    max-width: 700px;\n    /* max-width: 70vw; */\n    max-height: 80vh;\n    object-fit: contain;\n    box-shadow: rgba(4, 74, 111, 0) 0px 0px 20px -5px;\n\n    /* background-image: url(\"https://pbs.twimg.com/media/EhYqtxMXsAEIwLz?format=jpg&name=large\"); */\n\n    background-size: contain;\n    background-repeat:no-repeat;\n    background-position: center;\n}\n\n.media-modal-close {\n    cursor: pointer;\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    right: 0px;\n    top: 0px;\n    fill: var(--red);\n    margin: 10px;\n    background-color: var(--bg);\n    border-radius: 100px;\n}\n\n.screen-fade {\n    position: absolute;\n    z-index: 18;\n    width: 100%;\n    height: 100vh;\n    background-color: var(--bg);\n    opacity: 0.9;\n}\n\n.session-over-modal {\n    z-index: 50;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    height: 150px;\n    width: 500px;\n    padding: 15px;\n    border-radius: 15px;\n    background-color: var(--grey-floating-panel-hover);\n\n}\n\nheader {\n    height: 50px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    border-bottom: 1px solid var(--grey-inputbg);\n}\n\n.header-text {\n    font-weight: 700;\n    transform: translateX(-140px);\n}\n\n.main-container {\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 0px;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    width: 100vw;\n    /* max-width: 1500px; */\n}\n\n.side-nav-container {\n    border-radius: 15px;\n    background-color: var(--grey-floating-panel);\n    height: 100%;\n    width: 350px;\n    min-width: 300px;\n    margin: 50px 20px 0px 50px;\n    font-weight: 700;\n}\n\n.side-nav-item {\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer;\n    padding: 20px;\n    border-bottom: 1px solid var(--grey-inputbg);\n    transition: 0.3s;\n}\n\n.side-nav-item[data-selected =\"true\"]{\n    color: var(--blue);\n    border-bottom: 1px solid var(--blue);\n}\n\n.side-nav-item:last-child {\n    border-bottom: 0px;\n}\n\n.side-nav-item:hover {\n    background-color: var(--grey-floating-panel-hover);\n}\n\n.side-nav-item:first-child:hover {\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    background-color: var(--grey-floating-panel-hover);\n}\n\n.side-nav-item:last-child:hover {\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background-color: var(--grey-floating-panel-hover);\n}\n\n.side-nav-item > svg {\n    margin-right: 15px;\n    fill: white;\n}\n\n.side-nav-item[data-selected=\"true\"] > svg {\n    fill: var(--blue);\n}\n\n.about {\n    position: relative;\n}\n\n.about-modal {\n    /* text-align: center; */\n    position: relative;\n    width: 300px;\n    height: 300px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    background-color: var(--grey-inputbg);\n    background-color: var(--bg);\n    padding: 50px 20px;\n    cursor: default;\n    box-shadow: rgba(4, 74, 111, 0.8) 0px 0px 20px -5px;\n    border: 1px solid var(--blue);\n}\n\n.about-header {\n    font-weight: 700;\n    font-size: 1.5rem;\n    margin-bottom: 30px;\n}\n\n.about-text {\n    font-weight: 400;\n    font-size: 0.9rem;\n}\n\n.user-profile {\n    position: relative;\n    background-color: var(--grey-inputbg);\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n}\n\n.user-auth-div {\n    z-index: 20;\n    position: absolute;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    border-radius: 15px;\n    background-color: var(--grey-inputbg);\n    background-color: var(--bg);\n    width:650px;\n    height: 700px;\n    /* transform: translate(-20px, -100px); */\n    padding: 50px 15px;\n    cursor: default;\n    box-shadow: rgba(4, 74, 111, 0.4) 0px 0px 20px -5px;\n    /* margin-left: 20px; */\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    margin: auto;\n}\n\n.user-auth-div input:-ms-input-placeholder {\n    font-size: 0.9rem;\n}\n\n.user-auth-div input::placeholder {\n    font-size: 0.9rem;\n}\n\n.user-auth-div input.auth-error:-ms-input-placeholder {\n    color: var(--red);\n    opacity: 1;\n}\n\n.user-auth-div input.auth-error::placeholder {\n    color: var(--red);\n    opacity: 1;\n}\n\n\n.user-auth-div-modal {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    left: 0;\n    right: 0px;\n    bottom: 0px;\n    top: 0px;\n    width: 600px;\n    height: 550px;\n    height: 700px;\n\n    margin: auto;\n    box-shadow: rgba(4, 74, 111, 0.8) 0px 0px 20px -5px;\n\n}\n\n.login-div, .signup-div, .forgot-password-div {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.forgot-password-div {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    width: 320px;\n    height: 350px;\n    left: 0px;\n    right: 0px;\n    margin: auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    background-color: var(--bg);\n    border: 1px solid white;\n    border-radius: 15px;\n}\n\n.forgot-password-message {\n    font-weight: 400;\n    font-size: 0.8rem;\n    margin-top: 15px;\n}\n\n.login-from-modal {\n    cursor: pointer;\n}\n\n.auth-header {\n    font-size: 1rem;\n    margin-bottom: 50px;\n}\n\n.user-auth-div label {\n    pointer-events: none;\n    color: var(--grey-font);\n    font-size: 0.8rem;\n    font-weight: 400;\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    transform: translate(77px, -85px);\n    transition: .3s cubic-bezier(0, 1.8, 1, 1.8);\n    opacity: 0;\n}\n\n\n.user-auth-div input:not(:-ms-input-placeholder) + label {\n    color: var(--blue-label);\n    transform: translate(76px, -65px);\n    opacity: 1;\n}\n\n\n.user-auth-div input:not(:placeholder-shown) + label {\n    color: var(--blue-label);\n    transform: translate(76px, -65px);\n    opacity: 1;\n}\n\n.user-auth-div input {\n    padding: 10px 15px;\n    color: white;\n    font-size: 1rem;\n    height: 48px;\n    width: 80%;\n    background-color: var(--grey-floating-panel);\n    margin-top: 5px;\n    margin-bottom: 15px;\n    transition: .4s cubic-bezier(0, 1.8, 1, 1.8);\n    border-bottom: 1.5px solid transparent;\n}\n\n.user-auth-div input:hover, .user-auth-div input:focus {\n    background-color: var(--bg);\n    box-shadow: rgba(4, 74, 111, 1) 0px 0px 20px -5px;\n    border-bottom: 1.5px solid var(--blue);\n}\n\n.user-auth-div input:not(:-ms-input-placeholder) {\n    padding-bottom: 15px;\n    padding-top: 40px;\n    border-bottom: 1.5px solid var(--blue);\n    background-color: var(--bg);\n}\n\n.user-auth-div input:not(:placeholder-shown) {\n    padding-bottom: 15px;\n    padding-top: 40px;\n    border-bottom: 1.5px solid var(--blue);\n    background-color: var(--bg);\n}\n\n.user-auth-div button {\n    color: white;\n    font-size: 1rem;\n    margin-top: 15px;\n}\n\n.user-auth-div button:hover {\n    background-color: var(--blue-hover);\n}\n\n.action-here {\n    margin-top: 25px;\n    font-weight: 400;\n    font-size: 0.8rem;\n}\n\n.auth-link {\n    cursor: pointer;\n    color: var(--blue-label);\n}\n\n.auth-link:hover {\n    border-bottom: 1px solid var(--blue-hover);\n}\n\n.account-warning {\n    color: var(--red);\n    margin-top: 30px;\n    margin-bottom: -15px;\n    text-align: center;\n    font-size: 0.7rem;\n    font-weight: 400;\n}\n\n.logout-btn {\n    background-color: var(--red);\n}\n\n.user-auth-div .logout-btn:hover {\n    background-color: var(--red);\n    opacity: 0.8;\n}\n\n.close {\n    cursor: pointer;\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    right: 0px;\n    top: 0px;\n    fill: var(--red);\n    margin: 10px;\n    background-color: var(--bg);\n    border-radius: 100px;\n}\n\n.close:hover {\n    opacity: 0.7;\n}\n\n/* edit */\n.center-container {\n    width: 740px;\n    margin: 0px 20px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n\n    height: Calc(100vh - 50px);\n    overflow-y: scroll;\n    overflow-x: hidden;\n    transition: 0.25s;\n    margin-right: 50px;\n    margin-left: 20px;\n    min-height: 0px;\n}\n\n.home-search-page {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    /* justify-content: center; */\n    /* height: Calc(100vh - 300px); */\n    padding-top: 200px;\n    height: Calc(100vh - 50px);\n}\n\n.home-logo {\n    font-size: 5rem;\n    font-weight: 700;\n    margin-bottom: 30px;\n}\n\n.main-search-input-div{\n    position: relative;\n    color: var(--grey-font);\n}\n\n.main-search-button {\n    color: white;\n    font-size: 1rem;\n    margin-bottom: 50px;\n}\n\n.main-search-button:hover {\n    background-color: var(--blue-hover);\n}\n\n.search-choices {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    margin-bottom: 65px;\n}\n\n.language-choices, .tweet-type-choices {\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.search-choices input[type=\"radio\"] {\n    opacity: 0;\n    position: fixed;\n    width: 0;\n}\n\n.search-choices label {\n    cursor: pointer;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    color: var(--grey-font);\n    background-color: var(--bg);\n    width: 80px;\n    height: 30px;\n    font-size: 0.7rem;\n    border-bottom: 1px solid var(--bg);\n    transition: 0.2s;\n}\n\n.search-choices input[type=\"radio\"]:checked + label {\n    color: white;\n    background-color: var(--grey-floating-panel-hover);\n    border-bottom: 1px solid var(--blue);\n}\n\n.search-choices input[type=\"radio\"]:hover + label {\n    border-bottom: 1px solid var(--blue);\n}\n\n.search-choices input[type=\"radio\"]:focus + label {\n    border-bottom: 1px solid var(--blue);\n}\n\n.tweet-type-choices label {\n    width: 100px;\n    margin-top: 30px;\n}\n\n.timeline-search-page, .collections-page {\n    padding-top: 50px;\n    /* display: flex; */\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    /* height: Calc(100vh - 50px); */\n}\n\n.timeline-search-page {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n    /* height: 100vh; */\n    padding-top: 200px;\n}\n\n.collections-page {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: auto;\n    width: 740px;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n\n.timeline-header {\n    font-size: 5rem;\n    font-weight: 700;\n    margin-bottom: 30px;\n}\n\n.timeline-header-slash {\n    color: var(--grey-font);\n}\n\n.timeline-subheader {\n    color: var(--blue);\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.timeline-search-input-div {\n    position: relative;\n    color: var(--grey-font);\n}\n\n.timeline-search-button {\n    color: white;\n    font-size: 1rem;\n    margin-bottom: 50px;\n}\n\n.timeline-search-button:hover {\n    background-color: var(--blue-hover);\n}\n\n\n.search-results, .collection-results {\n    padding-top: 50px;\n    width: 740px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    border-left: 1px solid var(--grey-inputbg);\n    border-right: 1px solid var(--grey-inputbg);\n}\n\n.search-header {\n    font-weight: 700;\n    font-size: 2rem;\n    margin-bottom: 50px;\n}\n\n.tweet-results-div {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 100%;\n}\n\n.tweet-result, .collection-result-item {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    padding: 15px 15px;\n    border-top: 1px solid var(--grey-inputbg);\n    border-bottom: 1px solid var(--grey-inputbg);\n}\n\n.tweet-user-image img, .collection-tweet-user-image img {\n    object-fit: cover;\n    width: 50px;\n    height: 50px;\n    border-radius: 200px;\n    margin-right: 10px;\n}\n\n.tweet-name-div, .collection-tweet-name-div{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.tweet-body {\n    /* width: 70%; */\n}\n\n.tw-name-item, .collection-tw-name-item {\n    margin-right: 5px;\n}\n\n.verified, .collection-verified {\n    font-size: 15px;\n}\n\n.tweet-name, .collection-tweet-name {\n    font-weight: 700;\n}\n\n.tweet-name {\n    cursor: pointer;\n    border-bottom: 1px solid transparent;\n}\n\n.tweet-name:hover, .tweet-name:active {\n    border-bottom: 1px solid var(--blue-hover);\n}\n\n.tweet-username, .tweet-time, .collection-tweet-username, .collection-tweet-time {\n    color: var(--grey-font);\n}\n\n.tweet-time {\n    /* display: none; */\n    text-align: right;\n}\n\n.tweet-text, .collection-tweet-text {\n    margin-bottom: 10px;\n}\n\n.tweet-image img, .collection-tweet-image img {\n    width: 100%;\n    width: 648px;\n    height: 400px;\n    object-fit: cover;\n    border-radius: 20px;\n    border: 1px solid var(--grey-floating-panel);\n}\n\n.tweet-image video, .collection-tweet-image video {\n    width: 100%;\n    width: 648px;\n    height: 400px;\n    object-fit: cover;\n    border-radius: 20px;\n    border: 1px solid var(--grey-floating-panel);\n}\n\n.tweet-footer {\n    width: 648px;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.tweet-footer, .collection-tweet-footer {\n    font-size: 0.9rem;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    margin-top: 10px;\n}\n\n.tweet-metrics, .collection-tweet-metrics {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n    color: var(--grey-font);\n}\n\n.tweet-metrics p {\n    margin-right: 15px;\n}\n\n.tweet-icon {\n    fill: var(--blue-label);\n    margin-right: 3px;\n    width: 18px;\n    height: 18px;\n}\n\n.save-to-collection, .remove-from-collection {\n    position: relative;\n    cursor: pointer;\n    color: var(--blue-label);\n    padding: 5px 10px;\n    background-color: var(--grey-floating-panel);\n    border-radius: 5px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.save-to-collection:hover, .remove-from-collection:hover {\n    background-color: var(--grey-floating-panel-hover);\n}\n\n.save-to-collection svg, .remove-from-collection svg {\n    fill: var(--blue-label);\n    margin-right: 10px;\n    width: 18px;\n    height: 18px;\n}\n\n\n.save-to-collection-prompt {\n    position: absolute;\n    z-index: 20;\n    width: 350px;\n    height: 400px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    overflow: auto;\n    background-color: var(--grey-inputbg);\n    border-radius: 15px;\n    box-shadow: rgba(4, 74, 111, 0.7) 0px 0px 20px -5px;\n    border: 1px solid var(--grey-font);\n}\n\n.save-to-collection-header {\n    background-color: var(--grey-floating-panel);\n    width: 350px;\n    width: 100%;\n    color: white;\n    font-weight: 700;\n    font-size: 1.5rem;\n    padding: 30px 0px 30px 40px;\n}\n\n.collection-login-prompt {\n    text-align: center;\n    margin-top: 20px;\n}\n\n.save-to-collection-item {\n    cursor: pointer;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    /* height: 100px; */\n    padding: 20px 0px 20px 40px;\n    border-bottom: 1px solid var(--grey-floating-panel);\n}\n\n.save-to-collection-item:last-child {\n    border-bottom: 1px solid var(--grey-floating-panel);\n}\n\n.save-to-collection-item:hover, .save-to-collection-item:active {\n    color: var(--blue-label);\n    background-color: var(--grey-floating-panel-hover);\n}\n\n.save-to-collection-prompt svg {\n    fill: var(--red);\n}\n\n.replying-to {\n    cursor: pointer;\n    color: var(--blue);\n}\n\n.replying-to:hover {\n    color: var(--blue-hover);\n}\n\n.collections-page-header {\n    font-weight: 700;\n    font-size: 2.5rem;\n    -ms-flex-item-align: center;\n        align-self: center;\n    margin-bottom: 50px;\n}\n\n.collection-count {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    margin-bottom: 10px;\n}\n\n.create-collection-from-modal {\n    position: relative;\n    font-size: 0.9rem;\n    margin-top: 10px;\n    /* display: flex; */\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.create-collection-from-modal input{\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 1rem;\n    color: white;\n    background-color: var(--bg);\n    width: 85%;\n    height: 40px;\n    margin-left: 25px;\n    padding: 0px 10px !important;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    padding: 5px;\n}\n\n.create-col-from-modal-btn{\n    cursor: pointer;\n    position: absolute;\n    fill: var(--blue) !important;\n    width: 39.9px;\n    height: 39.9px;\n    transform: translate(Calc(85% + 250px), -40px);\n}\n\n.create-col-from-modal-error {\n    text-align: center;\n    margin-top: 10px !important;\n    font-size: 0.3rem;\n}\n\n.create-collection-cta {\n    color: var(--blue);\n    border-radius: 0;\n    background-color: var(--grey-floating-panel-hover);\n    fill: var(--blue);\n    width: 250px;\n    /* flex: 160px; */\n    margin-top: 20px;\n    margin-bottom: 20px;\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n}\n\n.create-collection-input-div {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    margin-bottom: 20px;\n}\n\n.create-collection-input {\n    padding: 7px 20px;\n    font-size: 1rem;\n    color: white;\n    width: 400px;\n    border-radius: 30px;\n    margin-right: 20px;\n    background-color: var(--grey-inputbg);\n}\n\n.create-collection-input:focus,  .create-collection-input:active, .create-collection-input:hover {\n    border: 1px solid var(--blue);\n    background-color: var(--bg);\n    box-shadow: rgba(4, 74, 111, 1) 0px 0px 30px -10px;\n}\n\n.create-collection-input:-ms-input-placeholder {\n    color: var(--grey-font);\n}\n\n.create-collection-input::placeholder {\n    color: var(--grey-font);\n}\n\n.create-col-btn-and-cancel {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.create-collection-close {\n    position: relative;\n    margin-left: 15px;\n    border-radius: 100px;\n}\n\n.create-collection-error {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n}\n\n\n.collections-list {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin: 30px 0px 50px 0px;\n}\n\n.collection-item {\n    min-width: 150px;\n    height: 40px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    cursor: pointer;\n    padding: 10px 20px;\n    background-color: var(--grey-floating-panel);\n    border-bottom: 1px solid transparent;\n    transition: 0.15s;\n    margin: 5px 5px 5px 0px;\n}\n\n.collection-item:hover {\n    background-color: var(--grey-floating-panel-hover);\n    border-bottom: 1px solid var(--blue);\n}\n\n.collection-item[data-selected=\"true\"] {\n    color: var(--blue);\n    border-bottom: 1px solid var(--blue);\n}\n\n.remove-from-collection {\n    color: var(--red);\n}\n\n.remove-from-collection svg {\n    fill: var(--red);\n}\n\n.remove-from-collection-prompt {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: space-evenly;\n        justify-content: space-evenly;\n    -ms-flex-align: center;\n        align-items: center;\n    position: absolute;\n    color: white;\n    width: 350px;\n    height: 180px;\n    background-color: var(--grey-floating-panel);\n    transform: translate(-105px, -80px);\n    border-radius: 10px;\n    padding: 0px 20px;;\n}\n\n.remove-prompt-buttons {\n    margin-top: 10px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.remove-prompt-buttons button {\n    font-size: 0.9rem;\n    margin: 0px 8px;\n}\n\n.remove-prompt-buttons button:hover {\n    opacity: 0.85;\n}\n\n.remove-prompt-delete {\n    background-color: var(--red);\n}\n\n\n\n.spotlight-container {\n    font-size: 0.9rem;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    margin: 50px 50px 0px 20px;\n    border-radius: 15px;\n    background-color: var(--grey-floating-panel);\n    height: 100%;\n    height: 350px;\n    width: 350px;\n    min-width: 300px;\n\n    padding: 20px;\n}\n\n.spotlight-header {\n    font-weight: 700;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.light-bulb {\n    fill: var(--blue);\n}\n\n.spotlight-body {\n    margin-top: 30px;\n    font-size: 0.8rem;\n}\n\n\nfooter {\n    padding-top: 10px;\n    color: #969696;\n    text-align: center;\n    /* text-align: right; */\n    position: fixed;\n    font-size: 0.7rem;\n    bottom: 0px;\n    padding-bottom: 0px;\n    /* padding-right: 10px; */\n    width: 100vw;\n    background-color: var(--bg);\n}\n\nfooter .big-footer {\n   margin: 0;\n   padding: 0;\n   white-space: pre;\n}\n\n.made-by-mobile {\n    display: none;\n}\n\n\n@media (max-width: 1440px) {\n\t.spotlight-container {\n        display: none;\n    }\n}\n\n@media (max-width: 1250px) {\n    .side-nav-container {\n        min-width: 250px;\n    }\n\n    input[type=\"search\"] {\n        width: 600px;\n    }\n\n    input[type=\"search\"]:not(:-ms-input-placeholder) + .search-icon {\n        margin-left: Calc(600px - 55px);\n    }\n\n    input[type=\"search\"]:not(:placeholder-shown) + .search-icon {\n        margin-left: Calc(600px - 55px);\n    }\n\n    .home-logo, .timeline-header {\n        font-size: 4rem;\n    }\n\n    .center-container,\n    .search-results,\n    .collections-page {\n        width: 650px;\n    }\n    \n    .tweet-image video, .collection-tweet-image video,\n    .tweet-image img, .collection-tweet-image img,\n    .tweet-footer {\n        width: 100%;\n        width: 550px;\n    }\n}\n\n@media (max-width: 950px) {\n    .side-nav-container {\n        min-width: 100px;\n    }\n    .side-nav-para {\n        display: none;\n    }\n\n    .center-container,\n    .search-results,\n    .collections-page {\n        width: 650px;\n    }\n    \n    .tweet-image video, .collection-tweet-image video,\n    .tweet-image img, .collection-tweet-image img,\n    .tweet-footer {\n        width: 100%;\n        width: 550px;\n    }\n}\n\n@media (max-width: 800px) {\n    .side-nav-container {\n        width: 100px;\n        min-width: 100px;\n        max-width: 100px;\n    }\n\n    input[type=\"search\"] {\n        width: 450px;\n    }\n\n    input[type=\"search\"]:not(:-ms-input-placeholder) + .search-icon {\n        margin-left: Calc(450px - 55px);\n    }\n\n    input[type=\"search\"]:not(:placeholder-shown) + .search-icon {\n        margin-left: Calc(450px - 55px);\n    }\n\n    .home-logo, .timeline-header {\n        font-size: 3rem;\n    }\n\n    .center-container,\n    .search-results,\n    .collections-page {\n        width: 550px;\n    }\n    \n    .tweet-image video, .collection-tweet-image video,\n    .tweet-image img, .collection-tweet-image img,\n    .tweet-footer {\n        width: 450px;\n    }\n\n    .tweet-name, .tweet-username {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n    }\n\n    .tweet-time {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n    }\n\n}\n\n\n@media (max-width: 700px) {\n    .side-nav-container {\n        width: 100px;\n        min-width: 100px;\n        max-width: 100px;\n    }\n\n    .user-auth-div {\n        position: fixed;\n        width: 90vw;\n        height: 80vh;\n        height: 83vh;\n        top: 0px;\n        overflow-y: scroll;\n    }\n\n    .center-container,\n    .search-results,\n    .collections-page {\n        width: 450px;\n    }\n    \n    .tweet-image video, .collection-tweet-image video,\n    .tweet-image img, .collection-tweet-image img,\n    .tweet-footer {\n        width: 350px;\n    }\n\n    .tweet-name-div, .tweet-text {\n        font-size: 0.9rem;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    }\n    .tweet-footer {\n        font-size: 0.8rem;\n    }\n}\n\n\n@media (max-width: 600px) {\n\n    .header-text {\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n        transform: translateX(0);\n        margin-left: 15px;\n    }\n\n    .side-nav-container {\n        z-index: 50;\n        position: fixed;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n            align-items: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n        margin: auto;\n        bottom: 0px;\n\n        width: 100vw;\n        min-width: 100vw;   \n        height: 70px;\n\n        border-radius: 0px;\n        font-weight: 700;\n\n        background-color: var(--bg);\n        background-color: blue;\n\n        border-radius: 15px;\n        border-bottom-left-radius: 0px;\n        border-bottom-right-radius: 0px;\n        background-color: var(--grey-floating-panel);\n    }\n\n    .side-nav-item {\n        border-radius: 0px !important;\n        height: 100%;\n        /* padding: 0px; */\n    }\n\n    .side-nav-item[data-selected =\"true\"]{\n        color: var(--blue);\n        border-bottom: 2px solid var(--blue);\n    }\n\n    .side-nav-item > svg {\n        margin-right: 0px;\n        fill: white;\n    }\n\n    .user-profile {\n        background-color: unset;\n    }\n\n    .about-modal {\n        position: fixed;\n        /* position: absolute; */\n        padding: 20px;\n    }\n\n    /* TODO: STYLE .about-modal-bg BG */\n\n    .user-auth-div {\n        position: fixed;\n        width: 90vw;\n        height: 80vh;\n        height: 83vh;\n        top: 0px;\n        overflow-y: scroll;\n    }\n\n    .auth-header {\n        margin-bottom: 30px;\n        margin-top: -85px;\n    }\n\n    .user-auth-div input {\n        border-radius: 0px;\n        margin-bottom: 0px;\n        margin-top: 0px;\n        width: 90%;\n    }\n\n    .user-auth-div label {\n        transform: translate(33px, -70px);\n    }\n    \n    \n    .user-auth-div input:not(:-ms-input-placeholder) + label {\n        transform: translate(33px, -50px);\n    }\n    \n    \n    .user-auth-div input:not(:placeholder-shown) + label {\n        transform: translate(33px, -50px);\n    }\n\n    .account-warning {\n        margin-top: 20px;\n        margin-bottom: -85px;\n        font-size: 0.6rem;\n    }\n\n    .home-logo, .timeline-header {\n        font-size: 2rem;\n    }\n\n    .timeline-subheader {\n        font-size: 1rem;\n    }\n\n    input[type=\"search\"] {\n        width: 90vw;\n        height: 48px;\n    }\n\n    input[type=\"search\"]:not(:-ms-input-placeholder) + .search-icon {\n        cursor: pointer;\n        pointer-events: all;\n        fill: var(--blue);\n        margin-left: Calc(90vw - 55px);\n    }\n\n    input[type=\"search\"]:not(:placeholder-shown) + .search-icon {\n        cursor: pointer;\n        pointer-events: all;\n        fill: var(--blue);\n        margin-left: Calc(90vw - 55px);\n    }\n\n    .language-choices label {\n        width: 70px;\n        font-size: 0.8rem;\n    }\n\n    .portuguese-div {\n        display: none !important;\n    }\n\n\n    .center-container {\n        margin: 0px;\n        height: Calc(100vh - 50px);\n    }\n\n    .home-search-page, .timeline-search-page {\n        padding-top: 50px;   \n    }\n\n    .center-container,\n    .search-results,\n    .collections-page {\n        width: 350px;\n        width: 100vw;\n        /* height: Calc(100vh - 200px); */\n    }\n\n    .tweet-result:last-child {\n        margin-bottom: 100px;\n    }\n\n    .collections-page {\n        /* display: flex; */\n        -ms-flex-direction: column;\n            flex-direction: column;\n        width: 95vw;\n        height: auto;\n    }\n\n    .create-collection-cta {\n        margin-bottom: 50px;\n    }\n\n    .create-collection-input-div {\n        width: 100vw;\n        -ms-flex-direction: column;\n            flex-direction: column;\n        -ms-flex-align: center;\n            align-items: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n        margin-bottom: 50px;\n    }\n\n    .create-collection-input {\n        margin-bottom: 20px;\n        width: 95vw;\n    }\n\n    .create-collection-close {\n        margin-left: 40px;\n    }\n\n    .create-collection-error {\n        text-align: center;\n    }\n\n    .collections-list {\n        margin: 0px;\n    }\n\n    .empty-collection {\n        margin-top: 30px;\n        padding-bottom: 200px;\n    }\n\n    .remove-from-collection-prompt {\n        width: 350px;\n        height: 180px;\n        background-color: var(--grey-floating-panel);\n        transform: translate(0px, 0px);\n    }\n\n\n    .session-over-modal {\n        width: 350px;\n        width: 90vw;\n    }\n    \n    .tweet-image video, .collection-tweet-image video,\n    .tweet-image img, .collection-tweet-image img {\n        width: 290px;\n        width: 80vw;\n        height: 260px;\n        border-radius: 12px;\n    }\n\n\n\n    .tweet-name-div, .tweet-text {\n        font-size: 0.9rem;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    }\n    .tweet-footer {\n        font-size: 0.7rem;\n        width: 290px;\n        width: 80vw;\n    }\n\n\n    .about-modal {\n        text-align: center;\n        height: 400px;\n    }\n\n\n    .made-by-mobile {\n        font-weight: 400;\n        margin-top: 50px;\n        margin-bottom: 0px;\n        display: block;\n        font-size: 0.8rem;\n    }\n\n    .made-by-mobile p {\n        text-align: center;\n        margin: 0px;\n        /* margin-bottom: 10px; */\n    }\n\n    .made-by-mobile .made-by {\n        margin-bottom: 5px;\n    }\n\n    .big-footer {\n        display: none;\n    }\n}\n\n\n@media (max-width: 400px) {\n    .tweet-image video, .collection-tweet-image video,\n    .tweet-image img, .collection-tweet-image img {\n        height: 160px;\n    }\n\n    .save-to-collection-prompt {\n        width: 80vw;\n        width: 300px;\n    }\n\n    .create-col-from-modal-btn {\n        transform: translate(Calc(300px - 192px), 10px);\n        transform: translate(Calc(300px - 62px), -40px);\n    }\n\n    .about-modal {\n        text-align: center;\n    }\n}\n\n\n\n\n.loader {\n    margin-left: 5px;\n    display: inline-block;\n    border: 3px solid white;\n    border-top: 2px solid transparent;\n    border-radius: 100px;\n    width: 25px;\n    height: 25px;\n animation: spin 2s linear infinite;\n}\n  \n@keyframes spin {\n\t0% { transform: rotate(0deg); }\n\t100% { transform: rotate(360deg); }\n}\n\n\n.small {\n    font-size: 0.6rem;\n}\n\n.error {\n    color: var(--red) !important;\n    font-weight: 400;\n    font-size: 0.9rem;\n    margin-top: -15px;\n    margin-bottom: 20px;\n}\n\n.auth-error {\n    font-weight: 400;\n    font-size: 0.9rem;\n    color: var(--red);\n    margin-top: -15px;\n    margin-bottom: 20px;\n}\n\n.color-blue {\n    color: var(--blue);\n}\n\n.color-red {\n    color: var(--red) !important;\n}\n\n.hide {\n    display: none;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/scripts/validators.js
// declare empty field; to later disallow white spaces in entries
function isEmpty(string) {
  if (string.trim() === '') return true;else return false;
} // Compare and conform email entry to regular format


function isEmail(email) {
  var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;else return false;
}

function validateSignupData(data) {
  var errors = {};

  if (isEmpty(data.email)) {
    errors.email = 'Please enter a valid email address';
  } else if (!isEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (isEmpty(data.password)) errors.password = 'Please enter a password';
  if (isEmpty(data.name)) errors.name = 'Please enter a name for your profile';
  if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords do not match, please try again';
  return {
    errors: errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
}

function validateLoginData(data) {
  var errors = {};

  if (isEmpty(data.email)) {
    errors.email = 'Please enter a valid email address';
  } else if (!isEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (isEmpty(data.password)) errors.password = 'Please enter a password';
  return {
    errors: errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
}


// CONCATENATED MODULE: ./node_modules/jwt-decode/build/jwt-decode.esm.js
/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function InvalidCharacterError(message) {
    this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = "InvalidCharacterError";

function polyfill(input) {
    var str = String(input).replace(/=+$/, "");
    if (str.length % 4 == 1) {
        throw new InvalidCharacterError(
            "'atob' failed: The string to be decoded is not correctly encoded."
        );
    }
    for (
        // initialize result and counters
        var bc = 0, bs, buffer, idx = 0, output = "";
        // get next character
        (buffer = str.charAt(idx++));
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
        ((bs = bc % 4 ? bs * 64 + buffer : buffer),
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ?
        (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6)))) :
        0
    ) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}

var atob = (typeof window !== "undefined" &&
    window.atob &&
    window.atob.bind(window)) ||
polyfill;

function b64DecodeUnicode(str) {
    return decodeURIComponent(
        atob(str).replace(/(.)/g, function(m, p) {
            var code = p.charCodeAt(0).toString(16).toUpperCase();
            if (code.length < 2) {
                code = "0" + code;
            }
            return "%" + code;
        })
    );
}

function base64_url_decode(str) {
    var output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw "Illegal base64url string!";
    }

    try {
        return b64DecodeUnicode(output);
    } catch (err) {
        return atob(output);
    }
}

function InvalidTokenError(message) {
    this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = "InvalidTokenError";

function index(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified");
    }

    options = options || {};
    var pos = options.header === true ? 0 : 1;
    try {
        return JSON.parse(base64_url_decode(token.split(".")[pos]));
    } catch (e) {
        throw new InvalidTokenError("Invalid token specified: " + e.message);
    }
}

/* harmony default export */ var jwt_decode_esm = (index);

//# sourceMappingURL=jwt-decode.esm.js.map

// EXTERNAL MODULE: ./node_modules/dayjs/plugin/relativeTime.js
var relativeTime = __webpack_require__(11);
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime);

// EXTERNAL MODULE: ./src/css/reset.css
var css_reset = __webpack_require__(31);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(33);

// CONCATENATED MODULE: ./src/scripts/script.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var axios = __webpack_require__(12);

var dayjs = __webpack_require__(30);




dayjs.extend(relativeTime_default.a); // dayjs().format();

var blue = "#1DA1F2";
var bg = "#15202B";
var blueLabel = "#1A91DA";
var blueHover = "#1B95E0";
var greyFont = "#8899A6";
var greyInputBg = "#253341";
var greyFloatingPanel = "#192734";
var greyFloatingPanelHover = "#202E3A";
var red = "#D6235B";
var current_page;
var body = document.querySelector("body");
var root = document.querySelector(".root");
var loader = document.querySelector(".loader");
var screenFade = document.querySelector(".screen-fade");
var modals = document.querySelectorAll(".modal");
var mediaModal = document.querySelector(".media-modal");
var media = document.querySelector(".media");
var closeMediaModal = document.querySelector(".media-modal-close");
var headerText = document.querySelector(".header-text"); //Auth containers

var userProfilePanel = document.querySelector(".user-profile");
var userProfileLabel = document.querySelector(".user-profile-label");
var userIcon = document.querySelector(".user-icon");
var userAuthDiv = document.querySelector(".user-auth-div");
var aboutModal = document.querySelector(".about-modal");
var aboutModalClose = document.querySelector(".about-modal-close");
var authInputs = document.querySelectorAll(".auth-input");
var authInputLabels = document.querySelectorAll(".auth-input-label");
var nextInputs = document.querySelectorAll(".next-input");
var goInputs = document.querySelectorAll(".go-input");
var sessionExpiredModal = document.querySelector(".session-over-modal");
var closeSessionExpiredModal = document.querySelector(".session-over-modal-close");
var loginDiv = document.querySelector(".login-div");
var loginEmail = document.querySelector(".login-email");
var loginEmailLabel = document.querySelector(".login-email-label");
var loginPassword = document.querySelector(".login-password");
var loginPasswordLabel = document.querySelector(".login-password-label");
var loginErrors = document.querySelector(".login-errors");
var loginBtn = document.querySelector(".login-btn");
var loginHere = document.querySelector(".login-here");
var loginFromModal = document.querySelectorAll(".login-from-modal");
var signupDiv = document.querySelector(".signup-div");
var signupNameLabel = document.querySelector(".signup-name-label");
var signupEmailLabel = document.querySelector(".signup-email-label");
var signupPasswordLabel = document.querySelector(".signup-password-label");
var signupConfirmPasswordLabel = document.querySelector(".signup-confirm-password-label");
var signupName = document.querySelector(".signup-name");
var signupEmail = document.querySelector(".signup-email");
var signupPassword = document.querySelector(".signup-password");
var signupConfirmPassword = document.querySelector(".signup-confirm-password");
var signupErrors = document.querySelector(".signup-errors");
var signupBtn = document.querySelector(".signup-btn");
var signupHere = document.querySelector(".signup-here");
var logoutDiv = document.querySelector(".logout-div");
var logoutBtn = document.querySelector(".logout-btn");
var closeBtn = document.querySelectorAll(".auth-close");
var homeSearchPage = document.querySelector(".home-search-page");
var mainSearchInputDiv = document.querySelector(".main-search-input-div");
var mainSearchInput = document.querySelector(".main-search-input");
var mainSearchError = document.querySelector(".main-search-error");
var searchChoicesDiv = document.querySelector(".search-choices");
var languageChoice = document.querySelectorAll(".language-choice");
var tweetTypeChoice = document.querySelectorAll(".tweet-type-choice");
var mainSearchButton = document.querySelector(".main-search-button");
var searchResults = document.querySelector(".search-results");
var tweetResultsDiv = document.querySelector(".tweet-results-div");
var timelineSearchPage = document.querySelector(".timeline-search-page");
var timelineSearchInputDiv = document.querySelector(".timeline-search-input-div");
var timelineSearchInput = document.querySelector(".timeline-search-input");
var timelineSearchError = document.querySelector(".timeline-search-error");
var timelineSearchButton = document.querySelector(".timeline-search-button");
var collectionPage = document.querySelector(".collections-page");
var collectionPageHeader = document.querySelector(".collections-page-header");
var createCollectionCta = document.querySelector(".create-collection-cta");
var createCollectionInputDiv = document.querySelector(".create-collection-input-div");
var createCollectionInput = document.querySelector(".create-collection-input");
var createCollectionBtn = document.querySelector("#create-collection-btn");
var createCollectionInputClose = document.querySelector(".create-collection-close");
var createCollectionError = document.querySelector(".create-collection-error");
var createCollectionFromModal = document.querySelector(".create-collection-from-modal");
var createCollectionFromModalInput = document.querySelector(".create-col-from-modal-input");
var createCollectionFromModalBtn = document.querySelectorAll(".create-col-from-modal-btn");
var createCollectionFromModalError = document.querySelector(".create-col-from-modal-error");
var collectionCounter = document.querySelector(".collection-count");
var collectionList = document.querySelector(".collections-list");
var emptyCollection = document.querySelector(".empty-collection"); //Save to collection

var saveToCollectionModal = document.querySelector(".save-to-collection-prompt");
var closeSaveToCollectionModal = document.querySelector(".save-to-collection-close");
var saveToCollectionItemDiv = document.querySelector(".save-to-collection-item-div"); //remove from collection

var removeFromCollectionModal = document.querySelector(".remove-from-collection-prompt"); // Side Nav Items

var sideNavItems = document.querySelectorAll(".side-nav-item");
var homeItem = document.querySelector(".home");
var timelineItem = document.querySelector(".time-travel");
var collectionItem = document.querySelector(".collections");
var aboutItem = document.querySelector(".about");
var spotlightNav = document.querySelector(".spotlight-container");
var homeSpotlight = document.querySelector(".home-page-spotlight");
var timelineSpotlight = document.querySelector(".timeline-page-spotlight");
var collectionSpotlight = document.querySelector(".collections-page-spotlight");
var aboutSpotlight = document.querySelector(".about-page-spotlight");
nextInputs.forEach(function (input) {
  input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 && event.target.nodeName === 'INPUT') {
      var form = event.target.form;
      var index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }, false);
});
goInputs.forEach(function (input) {
  input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 && event.target.nodeName === 'INPUT') {
      var form = event.target.form;
      var index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].click(); // event.preventDefault();
    }
  }, false);
});
loginFromModal.forEach(function (btn) {
  btn.addEventListener("click", function () {
    window.history.back(); // userProfilePanel.click()

    setTimeout(function () {
      userProfilePanel.click();
    }, 300);
  }, false);
});
createCollectionFromModalBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    createCollectionInput.value = createCollectionFromModalInput.value;
    createCollectionBtn.click(); // loader.classList.remove("hide");
    // createCollectionFromModal.append(loader);
    // setTimeout(function(){createCollectionFromModalBtn.append(loader)}, 4)
  }, addEventListener);
});
var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
authInputs.forEach(function (input) {
  input.addEventListener("keydown", function () {
    input.classList.remove("error");
    authInputLabels.forEach(function (label) {
      label.classList.remove("color-red");

      if (label === loginEmailLabel) {
        label.innerHTML = "Email:";
      } else if (label === loginPasswordLabel) {
        label.innerHTML = "Password:";
      } else if (label === signupNameLabel) {
        label.innerHTML = "Name:";
      } else if (label === signupEmailLabel) {
        label.innerHTML = "Email:";
      } else if (label === signupPasswordLabel) {
        label.innerHTML = "Password:";
      } else if (label === signupConfirmPasswordLabel) {
        label.innerHTML = "Confirm password:";
      }
    });
  }, false);
});
var tokenStatus;
var config;
var script_token;

function checkTokenStatus() {
  script_token = localStorage.FBIdToken;

  if (script_token) {
    var decodedToken = jwt_decode_esm(script_token);
    console.log(decodedToken.exp * 1000);
    console.log(Date.now());

    if (decodedToken.exp * 1000 < Date.now()) {
      //if TOKEN is expired
      console.log("token has expired");
      tokenStatus = "expired"; // TODO: Session expired modal to initiate logout

      sessionExpiredModal.classList.remove("hide");
      screenFade.classList.remove("hide");
    } else {
      tokenStatus = "active";
      config = {
        headers: {
          Authorization: "".concat(script_token)
        }
      };
    }
  }
}

var setAuthorizationHeader = function setAuthorizationHeader(token) {
  var FBIdToken = "Bearer ".concat(token);
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

var updateCurrentUser = function updateCurrentUser(userDetails) {
  var currentUser = userDetails;
  return localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

var appendUserDetails = function appendUserDetails(user) {
  var name = user.name;
  var firstName = name.replace(/ .*/, '');
  userIcon.style.fill = blue;
  userProfileLabel.innerHTML = "Hello, <span class=\"color-blue\">".concat(firstName, "</span>");
  var userCollections = user.collections.reverse();
  var userCollectionCount = user.collectionCount;
  collectionList.innerHTML = "";
  saveToCollectionItemDiv.innerHTML = "";
  createCollectionFromModal.classList.remove("hide");

  if (!(!Array.isArray(userCollections) || !userCollections.length)) {
    for (var i = 0; i < userCollections.length; i++) {
      var collectionItemParagraph = document.createElement("p");
      collectionItemParagraph.innerHTML = userCollections[i];

      var _collectionItem = document.createElement("div");

      _collectionItem.classList.add("collection-item");

      _collectionItem.append(collectionItemParagraph);

      collectionList.append(_collectionItem);
      var saveToCollectionItem = document.createElement("p");
      saveToCollectionItem.classList.add("save-to-collection-item");
      saveToCollectionItem.innerHTML = userCollections[i];
      saveToCollectionItemDiv.append(saveToCollectionItem);
      saveToCollectionModal.append(saveToCollectionItemDiv);
    }

    var allCollectionItems = document.querySelectorAll(".collection-item");
    allCollectionItems[0].setAttribute("data-selected", "true");
    console.log(allCollectionItems[0]);

    if (userCollectionCount === 1) {
      collectionCounter.innerHTML = "You currently have ".concat(userCollectionCount, " collection");
    } else if (userCollectionCount > 1) {
      collectionCounter.innerHTML = "You currently have ".concat(userCollectionCount, " collections");
    }
  } else {
    collectionCounter.innerHTML = "You haven't created any collections, click the create a new collection button to get started"; // createCollectionFromModal.classList.remove("hide");
  }

  appendCollections();
}; // Initial State


var state = {
  page: "home",
  header: "twtr  &middot; spotlight",
  home: {
    class: homeSearchPage.className
  },
  timeline: {
    class: timelineSearchPage.className
  },
  collection: {
    class: collectionPage.className
  },
  about: {
    class: aboutModal.className
  },
  user: {
    authDiv: {
      class: userAuthDiv.className,
      width: userAuthDiv.style.width
    },
    loginDiv: {
      class: loginDiv.className
    },
    signupDiv: {
      class: signupDiv.className
    },
    logoutDiv: {
      class: logoutDiv.className
    }
  },
  sidenav: {
    home: homeItem.getAttribute("data-selected"),
    timeline: timelineItem.getAttribute("data-selected"),
    collection: collectionItem.getAttribute("data-selected"),
    about: aboutItem.getAttribute("data-selected")
  },
  spotlight: {
    innertext: homeSpotlight.innerHTML
  },
  search: {
    searchPage: searchResults.className,
    tweetsDiv: "",
    keyword: {
      home: "",
      timeline: ""
    }
  },
  savetocol: {
    class: saveToCollectionModal.className
  },
  removefromcol: {
    class: removeFromCollectionModal.className
  },
  screenFade: {
    class: screenFade.className
  },
  media: {
    class: mediaModal.className,
    bg_img: ""
  }
}; // Render state function whenever popstate is fired

function render() {
  var token = localStorage.FBIdToken;
  var currentUser = JSON.parse(localStorage.getItem('currentUser')); // set app data

  if (token) {
    var decodedToken = jwt_decode_esm(token);
    console.log(decodedToken.exp * 1000);
    console.log(Date.now());

    if (decodedToken.exp * 1000 < Date.now()) {
      //if TOKEN is expired
      console.log("token has expired"); // TODO: Session expired modal to initiate logout

      sessionExpiredModal.classList.remove("hide");
      screenFade.classList.remove("hide");
    } else {
      config = {
        headers: {
          Authorization: "".concat(token)
        }
      };
    }
  }

  if (currentUser) {
    appendUserDetails(currentUser);
  }

  current_page = state.page; // set states

  if (token) {
    console.log("I got here");
    userAuthDiv.style.width = "300px";
    userAuthDiv.style.position = "relative";
    userAuthDiv.style.height = "100%";
    loginDiv.classList.add("hide");
    signupDiv.classList.add("hide");
    logoutDiv.classList.remove("hide");

    if (vw < 600) {
      userAuthDiv.style.position = "";
      userAuthDiv.style.height = "50vh";
    }
  } else {
    userAuthDiv.style.width = state.user.authDiv.width;
    loginDiv.className = state.user.loginDiv.class;
    signupDiv.className = state.user.signupDiv.class;
    logoutDiv.className = state.user.logoutDiv.class;
  }

  checkTokenStatus();

  if (tokenStatus === "active" && current_page === "collections") {
    var activeCollection = document.querySelector('.collection-item[data-selected="true"]');
    console.log(activeCollection);
    if (activeCollection) axiosRetrieveTweets(activeCollection.innerText.trim());
  }

  screenFade.className = state.screenFade.class;
  userAuthDiv.className = state.user.authDiv.class;
  homeSearchPage.className = state.home.class;
  timelineSearchPage.className = state.timeline.class;
  collectionPage.className = state.collection.class;
  aboutModal.className = state.about.class;
  spotlightNav.innerHTML = state.spotlight.innertext;
  headerText.innerHTML = state.header;
  homeItem.setAttribute("data-selected", "".concat(state.sidenav.home));
  timelineItem.setAttribute("data-selected", "".concat(state.sidenav.timeline));
  collectionItem.setAttribute("data-selected", "".concat(state.sidenav.collection));
  aboutItem.setAttribute("data-selected", "".concat(state.sidenav.about));
  searchResults.className = state.search.searchPage;
  tweetResultsDiv.innerHTML = state.search.tweetsDiv;
  mainSearchInput.value = state.search.keyword.home;
  timelineSearchInput.value = state.search.keyword.timeline;
  mediaModal.className = state.media.class;
  mediaModal.style.backgroundImage = state.media.bg_img;
  saveToCollectionModal.className = state.savetocol.class;
  removeFromCollectionModal.className = state.removefromcol.class;

  if (!homeSearchPage.classList.contains("hide")) {
    homeSearchPage.append(mainSearchButton);
    homeSearchPage.insertBefore(mainSearchInputDiv, homeSearchPage.lastChild);
    homeSearchPage.insertBefore(mainSearchError, homeSearchPage.lastChild);
    homeSearchPage.append(searchChoicesDiv);
  }

  if (!timelineSearchPage.classList.contains("hide")) {
    timelineSearchPage.append(timelineSearchButton);
    timelineSearchPage.insertBefore(timelineSearchInputDiv, timelineSearchPage.lastChild);
    timelineSearchPage.insertBefore(timelineSearchError, timelineSearchPage.lastChild);
  }

  if (!searchResults.classList.contains("hide")) {
    if (current_page === "home") {
      searchResults.insertBefore(searchChoicesDiv, searchResults.firstChild);
      searchResults.insertBefore(mainSearchInputDiv, searchResults.firstChild);
      timelineSearchPage.append(timelineSearchButton);
      timelineSearchPage.insertBefore(timelineSearchInputDiv, timelineSearchPage.lastChild);
      timelineSearchPage.insertBefore(timelineSearchError, timelineSearchPage.lastChild);
    } else if (current_page === "timeline") {
      searchResults.insertBefore(timelineSearchInputDiv, searchResults.firstChild);
      homeSearchPage.append(mainSearchButton);
      homeSearchPage.insertBefore(mainSearchInputDiv, homeSearchPage.lastChild);
      homeSearchPage.insertBefore(mainSearchError, homeSearchPage.lastChild);
      homeSearchPage.append(searchChoicesDiv);
    }
  }

  console.log(current_page);
  interactWithSearchResults();
} // Initialize initial state on load


(function initialize() {
  window.history.replaceState(state, null, "");
  render(state);
})();

sideNavItems.forEach(function (item) {
  item.addEventListener("click", handleSideNav, false);
});

function handleSideNav() {
  var currentTab = event.currentTarget;
  sideNavItems.forEach(function (others) {
    // userAuthDiv.classList.add("hide");
    others.setAttribute("data-selected", "false");
  });

  if (!currentTab.classList.contains("user-profile")) {
    currentTab.setAttribute("data-selected", "true");

    if (!currentTab.classList.contains("about")) {
      headerText.innerHTML = currentTab.innerText;
    }
  }

  if (currentTab === homeItem) {
    goHome();
    spotlightNav.innerHTML = homeSpotlight.innerHTML;
    headerText.innerHTML = homeItem.innerText;
    headerText.innerHTML = "Home";
    homeItem.setAttribute("data-selected", "true");
  } else if (currentTab === timelineItem) {
    timeTravel();
    spotlightNav.innerHTML = timelineSpotlight.innerHTML;
    headerText.innerHTML = timelineItem.innerText;
    headerText.innerHTML = "Search Timeline";
    timelineItem.setAttribute("data-selected", "true");
  } else if (currentTab === collectionItem) {
    goToCollections();
    spotlightNav.innerHTML = collectionSpotlight.innerHTML;
    headerText.innerHTML = collectionItem.innerText;
    headerText.innerHTML = "Your collections";
    collectionItem.setAttribute("data-selected", "true");
  } else if (currentTab === aboutItem) {
    spotlightNav.innerHTML = aboutSpotlight.innerHTML;
    getAbout(); // headerText.innerHTML =aboutItem.innerText;

    aboutItem.setAttribute("data-selected", "true");
  } else if (currentTab === userProfilePanel) {
    openUserPanel();
  }

  if (vw < 950) {
    console.log("heyyyy");

    if (currentTab === homeItem) {
      headerText.innerHTML = "Home <span class=\"small color-blue\"> / search for anything on twitter<span>";
    } else if (currentTab === timelineItem) {
      headerText.innerHTML = "Search Timeline <span class=\"small color-blue\"> / get tweets from a user's timeline<span>";
    } else if (currentTab === collectionItem) {
      headerText.innerHTML = "Your collections  <span class=\"small color-blue\"> / view all your saved tweets.<span>";
    }
  }

  state.header = headerText.innerHTML;
  state.page = current_page;
  state.screenFade.class = screenFade.className;
  state.user.authDiv.class = userAuthDiv.className;
  state.user.loginDiv.class = loginDiv.className;
  state.user.signupDiv.class = signupDiv.className;
  state.user.logoutDiv.class = logoutDiv.className;
  state.home.class = homeSearchPage.className;
  state.timeline.class = timelineSearchPage.className;
  state.collection.class = collectionPage.className;
  state.about.class = aboutModal.className;
  state.spotlight.innertext = spotlightNav.innerHTML;
  state.sidenav.home = homeItem.getAttribute("data-selected");
  state.sidenav.timeline = timelineItem.getAttribute("data-selected");
  state.sidenav.collection = collectionItem.getAttribute("data-selected");
  state.sidenav.about = aboutItem.getAttribute("data-selected");
  state.search.searchPage = searchResults.className;
  window.history.pushState(state, null, "");
}

function goHome() {
  current_page = "home"; // window.location.href = "/";

  homeSearchPage.classList.remove("hide");
  appendElementsToHome();
  mainSearchError.innerHTML = "";
  timelineSearchPage.classList.add("hide");
  appendElementsToTimeline();
  collectionPage.classList.add("hide");
  aboutModal.classList.add("hide");
  searchResults.classList.add("hide");
}

function timeTravel() {
  current_page = "timeline";
  timelineSearchPage.classList.remove("hide");
  appendElementsToTimeline();
  timelineSearchError.innerHTML = "";
  homeSearchPage.classList.add("hide");
  appendElementsToHome();
  collectionPage.classList.add("hide");
  aboutModal.classList.add("hide");
  searchResults.classList.add("hide");
}

function goToCollections() {
  current_page = "collections";
  emptyCollection.classList.add("hide");
  emptyCollection.innerHTML = "";
  collectionPage.classList.remove("hide");
  homeSearchPage.classList.add("hide");
  appendElementsToHome();
  timelineSearchPage.classList.add("hide");
  appendElementsToTimeline();
  aboutModal.classList.add("hide");
  searchResults.classList.add("hide");
  checkTokenStatus();

  if (tokenStatus === "active") {
    var activeCollection = document.querySelector('.collection-item[data-selected="true"]');
    console.log(activeCollection);
    if (activeCollection) axiosRetrieveTweets(activeCollection.innerText.trim());
    console.log("");
  }
}

function getAbout() {
  aboutModal.classList.remove("hide");
}

function appendElementsToHome() {
  mainSearchInput.value = "";
  mainSearchError.innerHTML = "";
  homeSearchPage.append(mainSearchButton);
  homeSearchPage.insertBefore(mainSearchInputDiv, homeSearchPage.lastChild);
  homeSearchPage.insertBefore(mainSearchError, homeSearchPage.lastChild);
  homeSearchPage.append(searchChoicesDiv);
}

function appendElementsToTimeline() {
  timelineSearchInput.value = "";
  timelineSearchError.innerHTML = "";
  timelineSearchPage.append(timelineSearchButton);
  timelineSearchPage.insertBefore(timelineSearchInputDiv, timelineSearchPage.lastChild);
  timelineSearchPage.insertBefore(timelineSearchError, timelineSearchPage.lastChild);
} // homeItem.addEventListener("click", goHome, false);
// timelineItem.addEventListener("click", timeTravel, false);
// collectionItem.addEventListener("click", goToCollections, false);
// aboutItem.addEventListener("click", getAbout, false);


console.log(config);

function closeUserPanel() {
  event.preventDefault();
  aboutModal.classList.add("hide");
  userAuthDiv.classList.add("hide");
  loginDiv.classList.add("hide");
  signupDiv.classList.add("hide");
  screenFade.classList.add("hide");

  if (current_page === "home") {
    console.log("home");
    homeItem.setAttribute("data-selected", "true");
  } else if (current_page === "timeline") {
    console.log("timeline");
    timelineItem.setAttribute("data-selected", "true");
  } else if (current_page === "collections") {
    console.log("collection");
    collectionItem.setAttribute("data-selected", "true");
  }

  if (userAuthDiv.classList.contains("hide")) {
    state.screenFade.class = screenFade.className;
    state.user.authDiv.class = userAuthDiv.className;
    state.user.loginDiv.class = loginDiv.className;
    window.history.pushState(state, null, "");
  } else {
    window.history.back();
  }
}

function openUserPanel() {
  event.preventDefault();
  var token = localStorage.FBIdToken;
  aboutModal.classList.add("hide");
  screenFade.classList.remove("hide");

  if (token) {
    userAuthDiv.style.width = "300px";
    userAuthDiv.style.position = "relative";
    userAuthDiv.style.height = "100%";
    userAuthDiv.classList.remove("hide");
    logoutDiv.classList.remove("hide");

    if (vw < 600) {
      userAuthDiv.style.position = "";
      userAuthDiv.style.height = "50vh";
    }
  } else {
    userAuthDiv.classList.remove("hide");
    loginDiv.classList.remove("hide");
    signupDiv.classList.add("hide");
    logoutDiv.classList.add("hide");
  } // history state defined in nav handler

}

function loginHereFunc() {
  openUserPanel();
  state.user.authDiv.class = userAuthDiv.className;
  state.user.loginDiv.class = loginDiv.className;
  state.user.signupDiv.class = signupDiv.className;
  state.user.logoutDiv.class = logoutDiv.className;
  window.history.pushState(state, null, "");
}

function openSignupPanel() {
  loginDiv.classList.add("hide");
  signupDiv.classList.remove("hide");
  state.user.loginDiv.class = loginDiv.className;
  state.user.signupDiv.class = signupDiv.className;
  window.history.pushState(state, null, "");
}

function logout() {
  localStorage.removeItem("FBIdToken");
  localStorage.removeItem("currentUser");
  window.location.href = "/";
}

function login() {
  loginBtn.append(loader);
  loader.classList.remove("hide");
  var loginData = {
    email: loginEmail.value,
    password: loginPassword.value
  };

  var _validateLoginData = validateLoginData(loginData),
      valid = _validateLoginData.valid,
      errors = _validateLoginData.errors;

  if (!valid) {
    loader.classList.add("hide");

    if (errors.email) {
      loginEmailLabel.innerHTML = errors.email;
      loginEmailLabel.classList.add("color-red");
      loginEmail.placeholder = errors.email;
      loginEmail.classList.add("auth-error");
    }

    if (errors.password) {
      loginPasswordLabel.innerHTML = errors.password;
      loginPasswordLabel.classList.add("color-red");
      loginPassword.placeholder = errors.password;
      loginPassword.classList.add("auth-error");
    }
  } else if (valid) axios.post('https://us-central1-explorer-one-44263.cloudfunctions.net/api/login', {
    "email": loginData.email,
    "password": loginData.password
  }).then(function (response) {
    loader.classList.add("hide");
    screenFade.classList.add("hide");
    console.log(response.data);
    setAuthorizationHeader(response.data.token);
    updateCurrentUser(response.data.userDetails);
    appendUserDetails(response.data.userDetails);
    userAuthDiv.classList.add("hide");
    loginDiv.classList.add("hide");
    interactWithSearchResults();
    state.screenFade.class = screenFade.className;
    state.user.authDiv.class = userAuthDiv.className;
    state.user.loginDiv.class = loginDiv.className;
    window.history.pushState(state, null, "");
  }).catch(function (error) {
    loader.classList.add("hide");
    console.log(error.response.data);
    loginErrors.innerHTML = error.response.data.error;
  });
}

function signup() {
  signupBtn.append(loader);
  loader.classList.remove("hide");
  var signupData = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
    confirmPassword: signupConfirmPassword.value
  };

  var _validateSignupData = validateSignupData(signupData),
      valid = _validateSignupData.valid,
      errors = _validateSignupData.errors;

  if (!valid) {
    loader.classList.add("hide");

    if (errors.name) {
      signupNameLabel.innerHTML = errors.name;
      signupNameLabel.classList.add("color-red");
      signupName.placeholder = errors.name;
      signupName.classList.add("auth-error");
    }

    if (errors.email) {
      signupEmailLabel.innerHTML = errors.email;
      signupEmailLabel.classList.add("color-red");
      signupEmail.placeholder = errors.email;
      signupEmail.classList.add("auth-error");
    }

    if (errors.password) {
      signupPasswordLabel.innerHTML = errors.password;
      signupPasswordLabel.classList.add("color-red");
      signupPassword.placeholder = errors.password;
      signupPassword.classList.add("auth-error");
    }

    if (errors.confirmPassword) {
      signupConfirmPasswordLabel.innerHTML = errors.confirmPassword;
      signupConfirmPasswordLabel.classList.add("color-red");
      signupConfirmPassword.placeholder = errors.confirmPassword;
      signupConfirmPassword.classList.add("auth-error");
    }
  } else if (valid) axios.post('https://us-central1-explorer-one-44263.cloudfunctions.net/api/signup', {
    name: signupData.name,
    email: signupData.email,
    password: signupData.password,
    confirmPassword: signupData.confirmPassword
  }).then(function (response) {
    loader.classList.add("hide");
    screenFade.classList.add("hide");
    console.log(response.data);
    setAuthorizationHeader(response.data.token);
    updateCurrentUser(response.data.userDetails);
    appendUserDetails(response.data.userDetails);
    userAuthDiv.classList.add("hide");
    signupDiv.classList.add("hide");
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
    signupConfirmPassword.value = "";
    interactWithSearchResults();
    state.screenFade.class = screenFade.className;
    state.user.authDiv.class = userAuthDiv.className;
    state.user.signupDiv.class = signupDiv.className;
    window.history.pushState(state, null, "");
  }).catch(function (error) {
    loader.classList.add("hide");
    console.log(error.response.data);

    if (error.response.data.password) {
      signupErrors.innerHTML = error.response.data.password;
    }

    if (error.response.data.email) {
      signupErrors.innerHTML = error.response.data.email;
    } else {
      signupErrors.innerHTML = error.response.data.general;
    }
  });
}

function appendTweets(results) {
  for (var i = 0; i < results.length; i++) {
    var appendCommas = function appendCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    var tweetResult = document.createElement("div");
    tweetResult.classList.add("tweet-result");
    var tweetUserImageDiv = document.createElement("div");
    tweetUserImageDiv.classList.add("tweet-user-image");
    var tweetUserImage = document.createElement("img");
    tweetUserImage.src = results[i].user.profile_image_url;
    tweetUserImage.alt = "User Image";
    tweetUserImageDiv.append(tweetUserImage);
    var tweetBody = document.createElement("div");
    tweetBody.classList.add("tweet-body");
    var tweetNameDiv = document.createElement("div");
    tweetNameDiv.classList.add("tweet-name-div");
    var tweetName = document.createElement("p");
    tweetName.classList.add("tweet-name", "tw-name-item");
    tweetName.setAttribute("data-username", "".concat(results[i].user.screen_name));
    tweetName.innerHTML = results[i].user.name;
    var tweetVerified = document.createElement("span");
    tweetVerified.classList.add("verified", "material-icons", "tw-name-item");
    tweetVerified.innerHTML = "verified";

    if (results[i].user.verified === false) {
      tweetVerified.classList.add("hide");
    }

    var tweetUserName = document.createElement("p");
    tweetUserName.classList.add("tweet-username", "tw-name-item", "mention");
    tweetUserName.innerHTML = "".concat(results[i].user.screen_name);
    var tweetTime = document.createElement("p");
    tweetTime.classList.add("tweet-time", "tw-name-item");
    tweetTime.innerHTML = " &middot; ".concat(dayjs(results[i].created_at).fromNow());
    var nameCombo = tweetName.innerText + tweetUserName.innerText;
    var name = tweetName.innerText;
    var username = tweetUserName.innerText;

    if (nameCombo.length > 24) {
      tweetUserName.innerHTML = text_truncate(name, 10);

      if ((tweetName.innerText + tweetUserName.innerText).length > 24) {
        tweetUserName.innerHTML = text_truncate(username, 5);

        if ((tweetName.innerText + tweetUserName.innerText).length > 25) {
          tweetUserName.innerHTML = text_truncate(name, 0, "");

          if ((tweetName.innerText + tweetUserName.innerText).length > 24) {
            tweetName.innerHTML = text_truncate(name, 24);
          }
        }
      }
    }

    tweetNameDiv.append(tweetName, tweetVerified, tweetUserName, tweetTime);
    console.log("length:", "".concat(tweetName.innerText, " + ").concat(tweetUserName.innerText).length);
    var tweetText = document.createElement("p");
    tweetText.classList.add("tweet-text");

    if (_typeof(results[i].retweeted_status) === "object") {
      tweetText.innerHTML = results[i].retweeted_status.full_text;
      tweetText.innerHTML = urlify(tweetText.innerHTML);
      tweetText.innerHTML = atlify(tweetText.innerHTML);
    } else {
      tweetText.innerHTML = results[i].full_text;
      tweetText.innerHTML = urlify(tweetText.innerHTML);
      tweetText.innerHTML = atlify(tweetText.innerHTML);
    }

    var tweetImageDiv = document.createElement("div");
    tweetImageDiv.classList.add("tweet-image");
    var tweetImage = void 0,
        tweetVideo = void 0,
        videoSource = void 0,
        videoError = void 0;

    if (results[i].extended_entities !== undefined) {
      if (results[i].extended_entities.media !== undefined) {
        if (results[i].extended_entities.media[0].type === "video" || results[i].extended_entities.media[0].type === "animated_gif") {
          tweetVideo = document.createElement("video");
          tweetVideo.controls = "controls";
          videoSource = document.createElement("source"); // if (results[i].extended_entities.media[0].type === "animated_gif") {
          //     tweetVideo.setAttribute("playsinline", true);
          //     tweetVideo.setAttribute("autoplay", true);
          //     tweetVideo.setAttribute("loop", true)
          // }

          var variants = results[i].extended_entities.media[0].video_info.variants;

          for (var _i = 0; _i < variants.length; _i++) {
            if (variants[_i].content_type === "video/mp4") {
              videoSource.type = variants[_i].content_type;
              videoSource.src = variants[_i].url;
              break;
            }
          }

          tweetVideo.append(videoSource);
          videoError = document.createElement("p");
          videoError.innerHTML = "Sorry, your browser doesn't support embedded videos.";
          tweetVideo.append("videoError");
          tweetImageDiv.append(tweetVideo);
        } else if (results[i].extended_entities.media[0].type === "photo") {
          tweetImage = document.createElement("img");
          tweetImage.src = results[i].extended_entities.media[0].media_url_https;
          tweetImage.alt = "Tweet Media";
          tweetImageDiv.append(tweetImage);
        }
      }
    }

    var tweetFooterDiv = document.createElement("div");
    var tweetFooter = document.createElement("div");
    tweetFooter.classList.add("tweet-footer");
    var tweetMetrics = document.createElement("div");
    tweetMetrics.classList.add("tweet-metrics");
    var tweetRetweetIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    tweetRetweetIcon.classList.add("tweet-icon");
    tweetRetweetIcon.innerHTML = "<path xmlns=\"http://www.w3.org/2000/svg\" d=\"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z\"/>";
    tweetRetweetIcon.setAttribute("viewBox", "0 0 24 24");
    var tweetRetweets = document.createElement("p");
    tweetRetweets.innerHTML = "".concat(results[i].retweet_count, " ");
    tweetRetweets.innerHTML = appendCommas(tweetRetweets.innerHTML);
    var tweetLikesIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    tweetLikesIcon.classList.add("tweet-icon");
    tweetLikesIcon.innerHTML = "<path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/>";
    tweetLikesIcon.setAttribute("viewBox", "0 0 24 24");
    var tweetLikes = document.createElement("p");
    tweetLikes.innerHTML = "".concat(results[i].retweet_count, " ");
    tweetLikes.innerHTML = appendCommas(tweetLikes.innerHTML);
    tweetMetrics.append(tweetRetweetIcon, tweetRetweets, tweetLikesIcon, tweetLikes);
    var saveToCollection = document.createElement("div");
    saveToCollection.setAttribute("data-tweetId", "".concat(results[i].id_str));
    saveToCollection.classList.add("save-to-collection");
    var saveSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    saveSvg.classList.add("save-to-svg");
    saveSvg.setAttribute("viewBox", "0 0 24 24");
    saveSvg.innerHTML = "<path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path>";
    var saveSvgText = document.createElement("p");
    saveSvgText.classList.add("save-to-text");
    saveSvgText.innerHTML = "Save to collection";
    saveToCollection.append(saveSvg, saveSvgText);
    var currentUser = localStorage.currentUser;

    if (currentUser !== undefined) {
      var userFavorites = JSON.parse(currentUser).favorites;

      if (userFavorites.includes(results[i].id_str)) {
        saveSvg.style.fill = "green";
        saveSvg.innerHTML = "<path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"/>";
        saveSvgText.style.color = "green";
        saveSvgText.innerHTML = "Saved to your collections";
      }
    }

    var removeFromCollection = document.createElement("div");
    removeFromCollection.setAttribute("data-tweetId", "".concat(results[i].id_str));
    removeFromCollection.classList.add("remove-from-collection", "hide");
    var removeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    removeSvg.setAttribute("viewBox", "0 0 24 24");
    removeSvg.innerHTML = "<path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z\"/>";
    var removeSvgText = document.createElement("p");
    removeSvgText.innerHTML = "remove from collection";
    removeFromCollection.append(removeSvg, removeSvgText); // TODO: create modal for tweet being replied to
    // let replyingTo = document.createElement("p");
    // replyingTo.classList.add("replying-to");
    // replyingTo.innerHTML = `Replying to ${results[i].in_reply_to_screen_name}`;
    // replyingTo.setAttribute("data-tweetid", `${results[i].id_str}`);

    tweetFooter.append(tweetMetrics, saveToCollection, removeFromCollection);
    tweetFooterDiv.append(tweetFooter); // if (results[i].in_reply_to_status_id_str !== null) {
    //     tweetFooterDiv.append(replyingTo);
    // }

    tweetBody.append(tweetNameDiv, tweetText, tweetImageDiv, tweetFooterDiv);
    tweetResult.append(tweetUserImageDiv, tweetBody);
    tweetResultsDiv.append(tweetResult);
  }
}

function mainSearch() {
  current_page = "home";
  tweetResultsDiv.innerHTML = "";
  loader.classList.remove("hide");

  if (homeSearchPage.classList.contains("hide")) {
    searchResults.append(loader);
  } else {
    mainSearchButton.append(loader);
  }

  var lang;
  var tweetType;

  for (var i = 0; i < languageChoice.length; i++) {
    if (languageChoice[i].checked) {
      lang = languageChoice[i].value;
      console.log(lang);
    }
  }

  for (var _i2 = 0; _i2 < tweetTypeChoice.length; _i2++) {
    if (tweetTypeChoice[_i2].checked) {
      tweetType = tweetTypeChoice[_i2].value;
      console.log(tweetType);
    }
  }

  var searchData = {
    query: mainSearchInput.value,
    result_type: tweetType,
    language: lang
  };

  if (searchData.query.trim() === "") {
    loader.classList.add("hide");
    mainSearchError.innerHTML = "Please give me something to search for";
    mainSearchError.classList.add("error");
  } else if (searchData.query.trim() !== "") axios.post('https://us-central1-explorer-one-44263.cloudfunctions.net/api/search', {
    query: searchData.query,
    result_type: searchData.result_type,
    language: searchData.language
  }).then(function (response) {
    loader.classList.add("hide");
    console.log(response.data.results);
    var results = response.data.results;
    homeSearchPage.classList.add("hide");
    searchResults.classList.remove("hide");
    searchResults.insertBefore(searchChoicesDiv, searchResults.firstChild);
    searchResults.insertBefore(mainSearchInputDiv, searchResults.firstChild);
    tweetResultsDiv.innerHTML = "";

    if (!Array.isArray(results) || !results.length) {
      tweetResultsDiv.innerHTML = "There are no results for <span class= color-blue>".concat(searchData.query, "</span>. Maybe try another keyword or choose a different language or tweet type");
    } else appendTweets(results);

    interactWithSearchResults();
    state.search.keyword.home = mainSearchInput.value;
    state.search.tweetsDiv = tweetResultsDiv.innerHTML;
    state.home.class = homeSearchPage.className;
    state.search.searchPage = searchResults.className;
    window.history.pushState(state, null, "");
  }).catch(function (error) {
    loader.classList.add("hide");
    console.log(error.response.data);
  });
}

function timelineSearch() {
  current_page = "timeline";
  loader.classList.remove("hide");
  tweetResultsDiv.innerHTML = "";

  if (timelineSearchPage.classList.contains("hide")) {
    searchResults.append(loader);
  } else {
    timelineSearchButton.append(loader);
  }

  var userName = timelineSearchInput.value;

  if (userName.trim() === "") {
    loader.classList.add("hide");
    timelineSearchError.innerHTML = "Please enter a twitter user name";
    timelineSearchError.classList.add("error");
  } else if (userName.trim() !== "") axios.post('https://us-central1-explorer-one-44263.cloudfunctions.net/api/timetravel', {
    screen_name: userName
  }).then(function (response) {
    loader.classList.add("hide");
    console.log(response.data.results);
    var results = response.data.results;
    timelineSearchPage.classList.add("hide");
    searchResults.classList.remove("hide");
    searchResults.insertBefore(timelineSearchInputDiv, searchResults.firstChild);
    tweetResultsDiv.innerHTML = ""; // TODO: HANDLE PROTECTED USER ERROR AND 

    console.log(results);

    if (!Array.isArray(results) || !results.length) {
      tweetResultsDiv.innerHTML = "There are no results for <span class= color-blue>".concat(userName, "</span>. Maybe try the search on the <span class=\"home-link color-blue\">homepage</span>");
    } else appendTweets(results);

    interactWithSearchResults();
    state.search.keyword.timeline = timelineSearchInput.value;
    state.search.tweetsDiv = tweetResultsDiv.innerHTML;
    state.timeline.class = timelineSearchPage.className;
    state.search.searchPage = searchResults.className;
    window.history.pushState(state, null, "");
  }).catch(function (error) {
    timelineSearchError.classList.add("error");
    loader.classList.add("hide");
    console.log(error.response.data);
    var errorCode = error.response.data;

    if (Object.keys(errorCode.err).length === 0 && errorCode.err.constructor === Object) {
      timelineSearchError.innerHTML = "<span class= color-blue>".concat(userName, "'s</span> tweets are protected. The account cound be private or suspended.");
      tweetResultsDiv.innerHTML = "<span class= color-blue>".concat(userName, "'s</span> tweets are protected. The account cound be private or suspended.");
      state.search.keyword.timeline = timelineSearchInput.value;
      state.search.tweetsDiv = tweetResultsDiv.innerHTML;
      state.timeline.class = timelineSearchPage.className;
      state.search.searchPage = searchResults.className;
      window.history.pushState(state, null, "");
    }

    console.log(_typeof(errorCode.err[0].code));

    if (errorCode.err[0].code === 34) {
      timelineSearchError.innerHTML = "Seems like there is no user with this user name, please check and try again.";
      tweetResultsDiv.innerHTML = "Seems like there is no user with this user name, please check and try again.";
      state.search.keyword.timeline = timelineSearchInput.value;
      state.search.tweetsDiv = tweetResultsDiv.innerHTML;
      state.timeline.class = timelineSearchPage.className;
      state.search.searchPage = searchResults.className;
      window.history.pushState(state, null, "");
    }
  });
}

function retrieveCollectionTweets() {
  console.log("heyyyyy");
  emptyCollection.innerHTML = "";
  emptyCollection.classList.add("hide");
  var collectionName = event.currentTarget.innerText.trim();
  axiosRetrieveTweets(collectionName);
}

function axiosRetrieveTweets(collection) {
  console.log(collection);
  axios.post('https://us-central1-explorer-one-44263.cloudfunctions.net/api/collection', {
    collectionName: collection
  }, config).then(function (response) {
    loader.classList.add("hide");
    console.log(response.data.results);
    var results = response.data.results;
    homeSearchPage.classList.add("hide");
    searchResults.classList.remove("hide");
    tweetResultsDiv.innerHTML = "";
    appendTweets(results);
    var saveTweet = document.querySelectorAll(".save-to-collection");
    var removeTweet = document.querySelectorAll(".remove-from-collection");
    saveTweet.forEach(function (btn) {
      btn.classList.add("hide");
    });
    removeTweet.forEach(function (btn) {
      btn.classList.remove("hide");
      btn.setAttribute("data-collection-name", collection);
    });
    searchResults.scrollIntoView();

    if (tweetResultsDiv.innerHTML === "") {
      emptyCollection.classList.remove("hide");
      emptyCollection.innerHTML = "<span class=\"color-blue\">".concat(collection, "</span> currently has no saved tweets"); // emptyCollection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

      emptyCollection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }

    interactWithSearchResults(); // window.history.pushState(state, null, "");
    // state.home.class = homeSearchPage.className;
    // state.search.searchPage = searchResults.className;
    // window.history.pushState(state, null, "");
  }).catch(function (error) {
    loader.classList.add("hide");
    console.log(error.response.data);
  });
}

var currentTweetId;

function interactWithSearchResults() {
  // TODO: add modal popup for clicked images
  var allImages = document.querySelectorAll(".tweet-image img");
  allImages.forEach(function (img) {
    img.addEventListener("click", function () {
      console.log(img); // img.style.objectFit = "contain"

      mediaModal.classList.remove("hide");
      screenFade.classList.remove("hide"); // media.innerHTML = img.outerHTML;

      console.log(img.src);
      mediaModal.style.backgroundImage = "url(".concat(img.src, ")");
      state.media.bg_img = "url(".concat(img.src, ")");
      state.screenFade.class = screenFade.className;
      state.media.class = mediaModal.className;
      window.history.pushState(state, null, "");
    }, false);
  });
  var allVideos = document.querySelectorAll("video");
  allVideos.forEach(function (video) {
    video.addEventListener("play", function () {
      var nowPlaying = event.currentTarget;
      allVideos.forEach(function (vid) {
        if (vid.paused === false && vid !== nowPlaying) {
          vid.pause();
        }
      });
    });
  }); // save tweet to colection

  var collectionItemToBeSavedTo = document.querySelectorAll(".save-to-collection-item");
  var tweetBtn = document.querySelectorAll(".save-to-collection");
  tweetBtn.forEach(function (tweet) {
    tweet.addEventListener("click", function () {
      saveToCollectionModal.classList.remove("hide");
      screenFade.classList.remove("hide");
      var currentTweet = event.currentTarget;
      getTweetId(currentTweet);
      var tweetId = currentTweet.tweetId;
      console.log(tweetId);
      currentTweetId = tweetId;
      console.log("currentTweetId", currentTweetId);
      collectionItemToBeSavedTo.forEach(function (collection) {
        collection.setAttribute("data-tweetId", tweetId);
      });
      state.savetocol.class = saveToCollectionModal.className;
      window.history.pushState(state, null, "");
    }, false);
  });
  collectionItemToBeSavedTo.forEach(function (collection) {
    collection.addEventListener("click", saveTweetToCollection, true);
  }); // delete tweet from collection

  var deleteTweetBtn = document.querySelector(".remove-prompt-delete");
  var removeFromCollectionBtn = document.querySelectorAll(".remove-from-collection");
  removeFromCollectionBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      removeFromCollectionModal.classList.remove("hide");
      var currentTweet = event.currentTarget;
      getTweetId(currentTweet);
      var tweetId = currentTweet.tweetId;
      getCollectionName(currentTweet);
      var collectionName = currentTweet.collectionName;
      console.log(tweetId);
      console.log(collectionName);
      deleteTweetBtn.setAttribute("data-tweetId", tweetId);
      deleteTweetBtn.setAttribute("data-collection-name", collectionName);
      state.savetocol.class = saveToCollectionModal.className;
      history.pushState(state, null, "");
    }, false);
  });
  var closeRemoveFromCollectionModal = document.querySelectorAll(".remove-from-collection-close");
  closeRemoveFromCollectionModal.forEach(function (close) {
    close.addEventListener("click", function () {
      removeFromCollectionModal.classList.add("hide");
      state.savetocol.class = saveToCollectionModal.className;
      window.back();
    }, false);
  });
  deleteTweetBtn.addEventListener("click", deleteTweetFromCollection, false);
  var mentions = document.querySelectorAll(".mention");
  mentions.forEach(function (mention) {
    mention.addEventListener("click", function () {
      // timelineSearchPage.innerHTML = searchResults.innerHTML; 
      timelineSearchPage.classList.add("hide");
      timelineItem.click();
      timelineSearchInput.value = mention.innerHTML;
      timelineSearchButton.click();
      console.log(mention.innerHTML);
    });
  });
  var userNames = document.querySelectorAll(".tweet-name");
  userNames.forEach(function (name) {
    var username = name.getAttribute("data-username");
    name.addEventListener("click", function () {
      timelineItem.click();
      timelineSearchInput.value = username;
      timelineSearchButton.click();
    }, false);
  });
  var homeLink = document.querySelectorAll(".home-link");
  homeLink.forEach(function (btn) {
    btn.addEventListener("click", function () {
      homeItem.click();
    }, false);
  });
}

function deleteTweetFromCollection() {
  var currentTweet = event.currentTarget;
  currentTweet.append(loader);
  loader.classList.remove("hide");
  getTweetId(currentTweet);
  var tweetId = currentTweet.tweetId;
  getCollectionName(currentTweet);
  var collectionName = currentTweet.collectionName;
  console.log(tweetId, collectionName);
  axios.post("https://us-central1-explorer-one-44263.cloudfunctions.net/api/deletefavorite/".concat(tweetId), {
    collectionName: collectionName
  }, config).then(function (response) {
    //TODO success function and error functions
    loader.classList.add("hide");
    removeFromCollectionModal.classList.add("hide");
    console.log(response.data);
    axiosRetrieveTweets(collectionName);
    interactWithSearchResults();
    currentTweet.removeAttribute("data-collection-name");
    currentTweet.removeAttribute("data-tweetid");
  }).catch(function (error) {
    loader.classList.add("hide");
    console.log(error.response.data);
  });
}

function saveTweetToCollection() {
  // interactWithSearchResults();
  // console.log("currentTweetId", currentTweetId);
  // let currentTweet = event.currentTarget;
  // getTweetId(currentTweet);
  // let tweetId = currentTweet.tweetId;
  var tweetId = currentTweetId;
  var collectionName = event.currentTarget.innerText.trim();
  var collection = event.currentTarget;
  collection.append(loader);
  loader.classList.remove("hide");
  console.log(collection);
  axios.post("https://us-central1-explorer-one-44263.cloudfunctions.net/api/addfavorite/".concat(tweetId), {
    collectionName: collectionName
  }, config).then(function (response) {
    //TODO success function
    loader.classList.add("hide");
    saveToCollectionModal.classList.add("hide");
    screenFade.classList.add("hide");
    console.log(response.data);
    var SaveToColBtns = document.querySelectorAll(".save-to-collection");
    SaveToColBtns.forEach(function (btn) {
      if (btn.getAttribute("data-tweetId") === tweetId) {
        btn.style.color = "green";
        btn.childNodes[0].style.fill = "green";
        btn.childNodes[0].innerHTML = "<path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"/>";
        btn.childNodes[1].innerText = "Saved to ".concat(collectionName);
      }
    });
    updateCurrentUser(response.data.userDetails);
    appendUserDetails(response.data.userDetails);
    interactWithSearchResults();
    state.savetocol.class = saveToCollectionModal.className;
    state.screenFade.class = screenFade.className;
    window.history.pushState(state, null, "");
  }).catch(function (error) {
    loader.classList.add("hide");
    console.log(error.response.data);
  });
}

function getTweetId(element) {
  return element.tweetId = element.getAttribute("data-tweetId");
}

function getCollectionName(element) {
  return element.collectionName = element.getAttribute("data-collection-name");
}

console.log(config);

function appendCollections() {
  var allCollectionItems = document.querySelectorAll(".collection-item"); // check to see if collection list is populated

  if (!(!Array.isArray(allCollectionItems) || !allCollectionItems.length)) {
    allCollectionItems[0].setAttribute("data-selected", "true");
  }

  allCollectionItems.forEach(function (collection) {
    collection.addEventListener("click", function () {
      loader.classList.remove("hide");
      collection.append(loader);
      allCollectionItems.forEach(function (otherCollections) {
        otherCollections.setAttribute("data-selected", "false");
      });
      collection.setAttribute("data-selected", "true");
    }, false);
    collection.addEventListener("click", retrieveCollectionTweets, false);
  });
}

function openCreateCollectionDiv() {
  createCollectionCta.classList.add("hide");
  createCollectionInputDiv.classList.remove("hide");
}

function closeCreateCollectionDiv() {
  createCollectionInput.value = "";
  createCollectionError.innerHTML = "";
  createCollectionFromModalError.innerHTML = "";
  createCollectionCta.classList.remove("hide");
  createCollectionInputDiv.classList.add("hide");
}

function createNewCollection() {
  // createCollectionBtn.append(loader);
  loader.classList.remove("hide");
  checkTokenStatus();

  if (collectionPage.classList.contains("hide")) {
    createCollectionFromModal.append(loader);
  } else {
    createCollectionBtn.append(loader);
  }

  if (script_token === null || script_token === undefined) {
    loader.classList.add("hide");
    createCollectionError.innerHTML = "You need to be logged in to use this feature. Please login or create an account to continue.";
    return;
  }

  if (createCollectionInput.value.trim() === "") {
    createCollectionError.classList.remove("hide");
    createCollectionError.innerHTML = "Please enter a name for your new collection";
    createCollectionFromModalError.innerHTML = "Please enter a name for your new collection";
    loader.classList.add("hide");
    return;
  }

  axios.post('https://us-central1-explorer-one-44263.cloudfunctions.net/api/collection/create', {
    collectionName: createCollectionInput.value
  }, config).then(function (response) {
    createCollectionInput.value = "";
    createCollectionFromModalInput.value = "";
    loader.classList.add("hide");
    createCollectionCta.classList.remove("hide");
    createCollectionInputDiv.classList.add("hide"); // createCollectionFromModal.classList.add("hide");

    updateCurrentUser(response.data.userDetails);
    appendUserDetails(response.data.userDetails);
    interactWithSearchResults(); // TODO: add modal popup for clicked images
  }).catch(function (error) {
    loader.classList.add("hide");
    console.log(error.response.data);
    createCollectionError.classList.remove("hide");
    createCollectionFromModalError.classList.remove("hide");
    createCollectionError.innerHTML = error.response.data.error;
    createCollectionFromModalError.innerHTML = error.response.data.error;
    if (error.response.data.error === "Unauthorized") createCollectionError.innerHTML = "You need to be logged in to use this feature. Please login or create an account to continue.";
  });
} // Nav Event Listeners


userProfilePanel.addEventListener("click", openUserPanel, false);
closeBtn.forEach(function (btn) {
  btn.addEventListener("click", closeUserPanel, false);
});
signupHere.addEventListener("click", openSignupPanel, false);
loginHere.addEventListener("click", loginHereFunc, false); // Auth Event Listeners

loginBtn.addEventListener("click", login, false);
signupBtn.addEventListener("click", signup, false);
logoutBtn.addEventListener("click", logout, false); // Data event listeners

mainSearchButton.addEventListener("click", mainSearch, false);
mainSearchInput.addEventListener("keydown", function () {
  mainSearchError.innerHTML = "";
}, false);
timelineSearchButton.addEventListener("click", timelineSearch, false);
timelineSearchInput.addEventListener("keydown", function () {
  timelineSearchError.innerHTML = "";
}, false);
createCollectionCta.addEventListener("click", openCreateCollectionDiv, false);
createCollectionInputClose.addEventListener("click", closeCreateCollectionDiv, false);
createCollectionBtn.addEventListener("click", createNewCollection, false);
createCollectionInput.addEventListener("keyup", function () {
  if (event.keyCode !== 13) {
    createCollectionError.innerHTML = "";
  }
}, false);
createCollectionFromModalInput.addEventListener("keyup", function () {
  if (event.keyCode !== 13) {
    createCollectionFromModalError.innerHTML = "";
  }
}, false); // Close modals

closeSessionExpiredModal.addEventListener("click", logout, false);
screenFade.addEventListener("click", function () {
  if (!sessionExpiredModal.classList.contains("hide")) {
    logout();
  }

  if (!saveToCollectionModal.classList.contains("hide")) {
    saveToCollectionModal.classList.add("hide");
    screenFade.classList.add("hide");
  }

  modals.forEach(function (modal) {
    if (!modal.classList.contains("hide")) {
      modal.classList.add("hide");
      screenFade.classList.add("hide");
    }
  });

  if (current_page === "home") {
    console.log("home");
    homeItem.setAttribute("data-selected", true);
  } else if (current_page === "timeline") {
    console.log("timeline");
    timelineItem.setAttribute("data-selected", true);
  } else if (current_page === "collection") {
    console.log("collection");
    collectionItem.setAttribute("data-selected", true);
  } // state.media.bg_img = `url(${img.src})`;


  state.screenFade.class = screenFade.className; // state.media.class = mediaModal.className;

  window.history.back();
}, false);
closeSaveToCollectionModal.addEventListener("click", function () {
  saveToCollectionModal.classList.add("hide");
  screenFade.classList.add("hide");
  createCollectionFromModalError.innerHTML = "";
  createCollectionFromModalInput.value = "";
  createCollectionError.innerHTML = "";
  state.savetocol.class = saveToCollectionModal.className;
  window.history.back(); // window.history.pushState(state, null, "");
}, false);
closeMediaModal.addEventListener("click", function () {
  console.log("hey");
  mediaModal.classList.add("hide");
  screenFade.classList.add("hide");
  window.history.back();
}, false);
aboutModalClose.addEventListener("click", function () {
  event.stopPropagation();
  console.log("yayayayayayay");
  console.log(current_page);
  aboutModal.classList.add("hide");
  screenFade.classList.add("hide");
  aboutItem.setAttribute("data-selected", "false");

  if (current_page === "home") {
    console.log("home");
    homeItem.setAttribute("data-selected", "true");
  } else if (current_page === "timeline") {
    console.log("timeline");
    timelineItem.setAttribute("data-selected", "true");
  } else if (current_page === "collections") {
    console.log("collection");
    collectionItem.setAttribute("data-selected", "true");
  }

  state.about.class = aboutModal.className;
}, false);

window.onpopstate = function (event) {
  if (event.state) {
    state = event.state;
  }

  render(state);
};

function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g; // return text.replace(urlRegex, function(url) {
  //   return '<a href="' + url + '">' + url + '</a>';
  // })
  // or alternatively

  return text.replace(urlRegex, '<a target="_blank" href="$1">$1</a>');
}

function atlify(text) {
  var atRegex = /(@[^\s]+)/g;
  return text.replace(atRegex, '<span class="mention">$1</span>');
}

function text_truncate(str, length, ending) {
  if (length == null) {
    length = 100;
  }

  if (ending == null) {
    ending = '...';
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

; // searchResults.innerHTML = atlify(searchResults.innerHTML);
// let mentions = document.querySelectorAll(".mention");
// mentions.forEach((mention) => {
//     mention.addEventListener("click", function(){
//         // timelineSearchPage.innerHTML = searchResults.innerHTML; 
//         timelineSearchPage.classList.add("hide")
//         timelineItem.click();
//         timelineSearchInput.value = mention.innerHTML;
//         timelineSearchButton.click();
//         setTimeout(timelineSearchPage.classList.remove("hide"), 50000)
//         console.log(mention.innerHTML)
//     })
// })

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches || // browser API
  evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
  var firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

;

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
    } else {
        /* right swipe */
      }
  } else {
    if (yDiff > 0) {
      if (!mediaModal.classList.contains("hide")) {
        history.back();
        state.screenFade.class = screenFade.className;
        state.media.class = mediaModal.className;
      }
      /* up swipe */

    } else {
      if (!mediaModal.classList.contains("hide")) {
        history.back();
        state.screenFade.class = screenFade.className;
        state.media.class = mediaModal.className;
      }
      /* down swipe */

    }
  }
  /* reset values */


  xDown = null;
  yDown = null;
}

;

/***/ })
/******/ ]);