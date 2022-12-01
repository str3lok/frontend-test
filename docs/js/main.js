/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/js/helpers.js\");\n\nfunction openMenu() {\n  return new Promise(function (resolve) {\n    $('.js-burger').addClass('is-disabled').attr('disabled', true);\n    _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lockScroll(true, _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$header.find('.header__menu'), 'header');\n    _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$header.addClass('is-menu-opened');\n    setImmediate(function () {\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$body.css('padding-right', \"\".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getScrollbarWidth(), \"px\"));\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$header.css('right', \"\".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getScrollbarWidth(), \"px\"));\n    });\n    setTimeout(function () {\n      $('.header__nav').addClass('is-active');\n      $('.js-burger').removeClass('is-disabled').attr('disabled', false);\n      resolve();\n    }, 100);\n  });\n}\nfunction closeMenu() {\n  return new Promise(function (resolve) {\n    $('.js-burger').addClass('is-disabled').attr('disabled', true);\n    _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lockScroll(false, _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$header.find('.header__nav'), 'header');\n    _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$body.css('padding-right', '');\n    _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$header.css('right', '');\n    _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$header.removeClass('is-menu-opened');\n    $('.header__nav').removeClass('is-active');\n    setTimeout(function () {\n      $('.js-burger').removeClass('is-disabled').attr('disabled', false);\n      resolve();\n    }, 500);\n  });\n}\nfunction toggleMenu(event) {\n  event.preventDefault();\n  event.stopPropagation();\n  if ($(event.currentTarget).hasClass('is-active')) {\n    $(event.currentTarget).removeClass('is-active');\n    closeMenu();\n  } else {\n    $(event.currentTarget).addClass('is-active');\n    openMenu();\n  }\n}\nfunction init() {\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$header = $('.header');\n  $('.js-burger').on('click.header', toggleMenu);\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$document.on('click.header', function (e) {\n    var $container = $('.header__menu');\n    if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {\n      closeMenu();\n      $('.js-burger').removeClass('is-active');\n    }\n  }).on('keyup.header', function (e) {\n    if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {\n      closeMenu();\n      $('.js-burger').removeClass('is-active');\n    }\n  });\n}\nfunction destroy() {\n  $('.js-burger').off('.header');\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$document.off('.header');\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init,\n  destroy: destroy,\n  openMenu: openMenu,\n  closeMenu: closeMenu\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ \"./node_modules/timers-browserify/main.js\").setImmediate))\n\n//# sourceURL=webpack:///./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ \"./node_modules/ninelines-sharing/dist/ninelines-sharing.js\");\n/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);\n\nif (document.querySelector('[data-social]')) {\n  var list = document.querySelectorAll('[data-social]');\n  Array.prototype.forEach.call(list, function (item) {\n    item.addEventListener('click', function (e) {\n      var social = e.currentTarget.dataset.social;\n      var url = location.origin + location.pathname;\n      ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default.a[social](url);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/social.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js\");\n\nvar vars = {};\nvars.$document = $(document);\nvars.$window = $(window);\nvars.$body = $(document.body);\nvars.$html = $(document.documentElement);\nvars.isMobile = function () {\n  return innerWidth <= 1024;\n};\nvars.isIE = function () {\n  return vars.$html.hasClass('is-browser-ie');\n};\nvars.isIOS = function () {\n  return vars.$html.hasClass('is-os-ios');\n};\nvars.winWidth = window.innerWidth;\n\n/**\n* Очистить текст от спецсимволов\n* @param {string} text Обязательное, строка для очистки\n* @returns {string} Очищенная строка\n*/\nvars.clearText = function (text) {\n  return text.trim().replace(/\\s+/g, ' ');\n};\n\n/**\n* Создать куки запись\n* @param {string} name Обязательное, название записи\n* @param {string} value Обязательное, значение записи\n* @param {string} days Обязательное, время для жизни\n*/\nvars.setCookie = function (name, value, days) {\n  var expires = '';\n  if (days) {\n    var date = new Date();\n    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);\n    expires = \"; expires=\".concat(date.toUTCString());\n  }\n  document.cookie = \"\".concat(name, \"=\").concat(value || '').concat(expires, \"; path=/\");\n};\n\n/**\n* Получить куки запись\n* @param {string} name Обязательное, название записи\n*/\nvars.getCookie = function (name) {\n  var nameEQ = \"\".concat(name, \"=\");\n  var ca = document.cookie.split(';');\n  for (var i = 0; i < ca.length; i++) {\n    var c = ca[i];\n    while (c.charAt(0) === ' ') {\n      c = c.substring(1, c.length);\n    }\n    if (c.indexOf(nameEQ) === 0) {\n      return c.substring(nameEQ.length, c.length);\n    }\n  }\n  return null;\n};\n\n/**\n* Удалить куки запись\n* @param {string} name Обязательное, название записи\n*/\nvars.eraseCookie = function (name) {\n  document.cookie = \"\".concat(name, \"=; Max-Age=-99999999;\");\n};\nvar dataScrollLocks;\n/**\n* Блокирует скролл страницы\n* Необходим для использования модальных окон\n* @param {boolean} state Обязательное\n* @param {string} element Обязательное, элемент которому нужно разрешить скролл\n* @param {string} name Необязательное, ключ,\n* чтобы была возможность открывать окно поверх другого окна\n*/\nvars.lockScroll = function (state, $element, name) {\n  var element = $element.get(0) ? $element.get(0) : $element;\n  if (typeof dataScrollLocks === 'undefined') {\n    dataScrollLocks = new Set();\n  }\n  var scrollLocks = dataScrollLocks;\n  if (state) {\n    if (typeof name === 'string') {\n      scrollLocks.add(name);\n    }\n    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"disableBodyScroll\"](element, {\n      reserveScrollBarGap: true\n    });\n    setImmediate(function () {\n      vars.$html.addClass('is-lock-scroll');\n    });\n  } else {\n    if (typeof name === 'string') {\n      scrollLocks[\"delete\"](name);\n    }\n    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"enableBodyScroll\"](element);\n    if (!scrollLocks.size) {\n      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"clearAllBodyScrollLocks\"]();\n      vars.$html.removeClass('is-lock-scroll');\n    }\n  }\n};\n\n/**\n* Скролл до элемента\n* @param {string} $container Обязательное, элемент к которому нужно скроллить\n* @param {string|number} time Необязательное, время скролла\n* @param {string|number} offset Необязательное, смещение скролла может быть + или -\n*/\nvars.scrollTo = function ($container) {\n  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  vars.$html.css('scroll-behavior', 'initial');\n  $('html, body').stop().animate({\n    scrollTop: \"\".concat($container.offset().top + parseInt(offset, 10))\n  }, parseInt(time, 10));\n  setTimeout(function () {\n    vars.$html.css('scroll-behavior', '');\n  }, parseInt(time, 10) + 100);\n};\nvar scrollDiv;\n\n/**\n* Получить размер скроллбара если он есть\n* @returns {number} размер скроллбара\n*/\nvars.getScrollbarWidth = function () {\n  var width = window.innerWidth - vars.$html.get(0).clientWidth;\n  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {\n    return width;\n  }\n\n  // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it\n  if (!scrollDiv) {\n    scrollDiv = document.createElement('div');\n    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';\n    document.body.appendChild(scrollDiv);\n  }\n  return scrollDiv.offsetWidth - scrollDiv.clientWidth;\n};\n\n/**\n* Узнать есть доступен ли ховер\n* @returns {boolean}\n*/\nfunction hasHoverSupport() {\n  var hoverSupport;\n  if (vars.isIE && vars.getScrollbarWidth()) {\n    // On touch devices scrollbar width is usually 0\n    hoverSupport = true;\n  } else if (vars.isMobile()) {\n    hoverSupport = false;\n  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {\n    hoverSupport = true;\n  } else if (window.matchMedia('(hover: none)').matches) {\n    hoverSupport = false;\n  } else {\n    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';\n  }\n  return hoverSupport;\n}\nif (!hasHoverSupport()) {\n  vars.$html.removeClass('has-hover').addClass('no-hover');\n} else {\n  vars.$html.removeClass('no-hover').addClass('has-hover');\n}\n\n/**\n* Переопределение доступности ховера\n*/\nfunction resize() {\n  setTimeout(function () {\n    if (vars.winWidth !== window.innerWidth) {\n      if (!hasHoverSupport()) {\n        vars.$html.removeClass('has-hover').addClass('no-hover');\n      } else {\n        vars.$html.removeClass('no-hover').addClass('has-hover');\n      }\n      vars.winWidth = window.innerWidth;\n    }\n  }, 300);\n}\nvars.$window.on('resize', resize);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vars);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ \"./node_modules/timers-browserify/main.js\").setImmediate))\n\n//# sourceURL=webpack:///./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor */ \"./src/js/vendor.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/social */ \"./src/js/components/social.js\");\n/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/ie-fix */ \"./src/js/vendor/ie-fix.js\");\n/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/vh-fix */ \"./src/js/vendor/vh-fix.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\");\n/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/lazyLoading */ \"./src/js/modules/lazyLoading.js\");\n/* harmony import */ var _modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scrollToAnchor */ \"./src/js/modules/scrollToAnchor.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n// import {actualYear} from './modules/actualYear';\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__[\"ScrollTrigger\"]);\nObject(_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_4__[\"ieFix\"])();\nObject(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_5__[\"vhFix\"])();\n// actualYear();\n_modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_8__[\"default\"].init();\n_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init();\n_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_7__[\"default\"].init();\nfunction headerFixed() {\n  var top = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;\n  if (top > 1) {\n    $('.header').addClass('is-fixed');\n  } else {\n    $('.header').removeClass('is-fixed');\n  }\n}\nvar blocks = document.querySelectorAll('.candidate-block');\nvar displayed = {};\nfunction scrollTracking(entries) {\n  var _iterator = _createForOfIteratorHelper(entries),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var entry = _step.value;\n      displayed[entry.target.id] = entry.intersectionRatio >= 0.1;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  $(\".header__nav-link\").removeClass('is-active');\n  $(\".header__nav-link[href='#\" + Object.entries(displayed).filter(function (_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n      id = _ref2[0],\n      inViewport = _ref2[1];\n    return inViewport;\n  }).map(function (_ref3) {\n    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 2),\n      id = _ref4[0],\n      inViewport = _ref4[1];\n    return id;\n  })[0] + \"']\").addClass('is-active');\n}\nvar observer = new IntersectionObserver(scrollTracking, {\n  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]\n});\nblocks.forEach(function (element) {\n  return observer.observe(element);\n});\nvar ev = document.body;\nfunction progressScroll() {\n  var scroller = document.querySelectorAll('.scroller__progress');\n  var btnScrollTop = document.querySelector('.btn__scroll-top');\n  scroller.forEach(function (box) {\n    var percent = parseInt(window.scrollY / (ev.scrollHeight - window.innerHeight) * 100);\n    if (percent === 0) {\n      box.style.display = 'none';\n      btnScrollTop.style.display = 'none';\n    }\n    if (percent >= 1) {\n      box.style.display = 'block';\n      btnScrollTop.style.display = 'none';\n    }\n    if (percent >= 100) {\n      percent = 100;\n      box.style.display = 'none';\n      btnScrollTop.style.display = 'block';\n    }\n    var deg = 360 * percent / 100 + 180;\n    if (percent >= 50) {\n      box.classList.add('over_50');\n    } else {\n      box.classList.remove('over_50');\n    }\n    box.querySelector('.piece.right').style.transform = 'rotate(' + deg + 'deg)';\n    box.querySelector('b').innerText = percent;\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n  $(window).on('load scroll touchmove resize', function () {\n    headerFixed();\n    progressScroll();\n  });\n  $(window).on('resize', function () {\n    var windowWidth = $(window).outerWidth();\n    if (windowWidth >= 1025) {\n      if ($('.header').hasClass('is-menu-opened')) {\n        $('.header').removeClass('is-menu-opened').removeAttr('style');\n        $('body').removeAttr('style');\n        $('html').removeClass('is-lock-scroll');\n        $('.js-burger').removeClass('is-active');\n        $('.header__nav').removeClass('is-active');\n      }\n      ;\n    }\n  });\n  setTimeout(function () {\n    $('.page-content').addClass('loading');\n  }, 500);\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInRight1\", {\n  x: '-200px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeIn',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInRight2\", {\n  x: '-250px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInRight2',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInRight3\", {\n  x: '-300px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInRight3',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInRight4\", {\n  x: '-350px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInRight4',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInRight5\", {\n  x: '-400px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInRight5',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInRight6\", {\n  x: '-450px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInRight6',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInLeft1\", {\n  x: '200px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeIn',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInLeft2\", {\n  x: '250px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInLeft2',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInLeft3\", {\n  x: '300px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInLeft3',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInLeft4\", {\n  x: '350px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInLeft4',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInLeft5\", {\n  x: '400px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInLeft5',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInLeft6\", {\n  x: '450px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInLeft6',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInLeft7\", {\n  x: '500px',\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInLeft7',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInBottom1\", {\n  y: '200px',\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInBottom',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInBottom2\", {\n  y: '250px',\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInBottom',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInBottom3\", {\n  y: '300px',\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInBottom',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\ngsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].fromTo(\".fadeInBottom4\", {\n  y: '350px',\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  scrollTrigger: {\n    pin: false,\n    trigger: '.fadeInBottom',\n    start: \"top 80%\",\n    end: \"+=100\",\n    scrub: 2,\n    markers: false\n  }\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ \"./node_modules/lozad/dist/lozad.min.js\");\n/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);\n\nvar observer;\n\n/**\n* Модуль \"Отложенная загрузка изображений\"\n* https://github.com/ApoorvSaxena/lozad.js\n*/\nvar init = function init() {\n  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {\n    rootMargin: '10px 0px',\n    // syntax similar to that of CSS Margin\n    threshold: 0.1,\n    // ratio of element convergence\n    enableAutoReload: true,\n    // it will reload the new image when validating attributes changes\n    loaded: function loaded(el) {\n      el.classList.add('is-loaded');\n    }\n  });\n  observer.observe();\n};\n\n/**\n* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра\n* @param {string} img Обязательное, элемент img\n*/\nvar trigger = function trigger(img) {\n  observer.triggerLoad(img);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init,\n  trigger: trigger\n});\n\n//# sourceURL=webpack:///./src/js/modules/lazyLoading.js?");

/***/ }),

/***/ "./src/js/modules/scrollToAnchor.js":
/*!******************************************!*\
  !*** ./src/js/modules/scrollToAnchor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ \"./src/js/components/header.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/js/helpers.js\");\n\n\n\n/**\n* Модуль \"Плавный переход к якорю\"\n*/\nvar init = function init() {\n  _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$document.on('click.anchor', '.js-to-anchor', function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var id = $(e.currentTarget).attr('href');\n    var speed = $(e.currentTarget).data('speed') || 500;\n    var offset = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$header.css('position') === 'fixed' || _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$header.css('position') === 'absolute' ? -_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$header.outerHeight(true) : 0;\n    _components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeMenu().then(function () {\n      $('.js-burger').removeClass('is-active');\n      _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scrollTo($(id), speed, offset);\n    });\n  });\n};\nvar destroy = function destroy() {\n  _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$document.off('.anchor');\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init,\n  destroy: destroy\n});\n\n//# sourceURL=webpack:///./src/js/modules/scrollToAnchor.js?");

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ \"./node_modules/core-js/stable/index.js\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ \"./node_modules/svg4everybody/dist/svg4everybody.js\");\n/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ \"./node_modules/object-fit-images/dist/ofi.common-js.js\");\n/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// import objectFitVideos from 'object-fit-videos';\n\nsvg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();\nobject_fit_images__WEBPACK_IMPORTED_MODULE_4___default()();\n// objectFitVideos();\n\nwindow.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;\nwindow.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;\nwindow.objectFitImages = object_fit_images__WEBPACK_IMPORTED_MODULE_4___default.a;\n// window.objectFitVideos = objectFitVideos;\n\n__webpack_require__(/*! ninelines-ua-parser */ \"./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js\");\n\n//# sourceURL=webpack:///./src/js/vendor.js?");

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ieFix\", function() { return ieFix; });\n/* eslint-disable */\n\n/**\n* Много разных фиксов для ie,\n* чтобы не было лишних проблем\n* Performance.now()\n* forEach\n* CustomEvent\n* includes\n* matches\n* closest\n* prepend\n* append\n* before\n* remove\n* startsWith\n* Performance.now()\n* https://gist.github.com/paulirish/5438650\n*/\n\nvar ieFix = function ieFix() {\n  (function () {\n    if (\"performance\" in window == false) {\n      window.performance = {};\n    }\n\n    // thanks IE8\n    Date.now = Date.now || function () {\n      return new Date().getTime();\n    };\n    if (\"now\" in window.performance == false) {\n      var nowOffset = Date.now();\n      if (performance.timing && performance.timing.navigationStart) {\n        nowOffset = performance.timing.navigationStart;\n      }\n      window.performance.now = function now() {\n        return Date.now() - nowOffset;\n      };\n    }\n  })();\n\n  // forEach\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = function (callback, thisArg) {\n      thisArg = thisArg || window;\n      for (var i = 0; i < this.length; i++) {\n        callback.call(thisArg, this[i], i, this);\n      }\n    };\n  }\n\n  // CustomEvent\n  (function () {\n    if (typeof window.CustomEvent === 'function') return false;\n    function CustomEvent(event, params) {\n      params = params || {\n        bubbles: false,\n        cancelable: false,\n        detail: undefined\n      };\n      var evt = document.createEvent('CustomEvent');\n      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n      return evt;\n    }\n    CustomEvent.prototype = window.Event.prototype;\n    window.CustomEvent = CustomEvent;\n  })();\n\n  // includes\n  if (!Array.prototype.includes) {\n    Object.defineProperty(Array.prototype, 'includes', {\n      value: function value(searchElement, fromIndex) {\n        if (this == null) {\n          throw new TypeError('\"this\" is null or not defined');\n        }\n        var o = Object(this);\n        var len = o.length >>> 0;\n        if (len === 0) {\n          return false;\n        }\n        var n = fromIndex | 0;\n        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);\n        function sameValueZero(x, y) {\n          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);\n        }\n        while (k < len) {\n          if (sameValueZero(o[k], searchElement)) {\n            return true;\n          }\n          k++;\n        }\n        return false;\n      }\n    });\n  }\n\n  // matches\n  if (!Element.prototype.matches) {\n    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {\n      var matches = (this.document || this.ownerDocument).querySelectorAll(s);\n      var i = matches.length;\n      // eslint-disable-next-line no-empty\n      while (--i >= 0 && matches.item(i) !== this) {}\n      return i > -1;\n    };\n  }\n  if (!Element.prototype.matches) {\n    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;\n  }\n\n  // closest\n  if (!Element.prototype.closest) {\n    Element.prototype.closest = function (s) {\n      var el = this;\n      do {\n        if (el.matches(s)) {\n          return el;\n        }\n        el = el.parentElement || el.parentNode;\n      } while (el !== null && el.nodeType === 1);\n      return null;\n    };\n  }\n\n  // prepend\n  (function (arr) {\n    arr.forEach(function (item) {\n      if (item.hasOwnProperty(\"prepend\")) {\n        return;\n      }\n      Object.defineProperty(item, \"prepend\", {\n        configurable: true,\n        enumerable: true,\n        writable: true,\n        value: function prepend() {\n          // eslint-disable-next-line prefer-rest-params\n          var argArr = Array.prototype.slice.call(arguments);\n          var docFrag = document.createDocumentFragment();\n          argArr.forEach(function (argItem) {\n            var isNode = argItem instanceof Node;\n            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));\n          });\n          this.insertBefore(docFrag, this.firstChild);\n        }\n      });\n    });\n  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);\n\n  // append\n  (function (arr) {\n    arr.forEach(function (item) {\n      if (item.hasOwnProperty(\"append\")) {\n        return;\n      }\n      Object.defineProperty(item, \"append\", {\n        configurable: true,\n        enumerable: true,\n        writable: true,\n        value: function append() {\n          // eslint-disable-next-line prefer-rest-params\n          var argArr = Array.prototype.slice.call(arguments);\n          var docFrag = document.createDocumentFragment();\n          argArr.forEach(function (argItem) {\n            var isNode = argItem instanceof Node;\n            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));\n          });\n          this.appendChild(docFrag);\n        }\n      });\n    });\n  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);\n\n  // before\n  (function (arr) {\n    arr.forEach(function (item) {\n      if (item.hasOwnProperty(\"before\")) {\n        return;\n      }\n      Object.defineProperty(item, \"before\", {\n        configurable: true,\n        enumerable: true,\n        writable: true,\n        value: function before() {\n          // eslint-disable-next-line prefer-rest-params\n          var argArr = Array.prototype.slice.call(arguments);\n          var docFrag = document.createDocumentFragment();\n          argArr.forEach(function (argItem) {\n            var isNode = argItem instanceof Node;\n            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));\n          });\n          this.parentNode.insertBefore(docFrag, this);\n        }\n      });\n    });\n  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);\n\n  // remove\n  (function (arr) {\n    arr.forEach(function (item) {\n      if (item.hasOwnProperty(\"remove\")) {\n        return;\n      }\n      Object.defineProperty(item, \"remove\", {\n        configurable: true,\n        enumerable: true,\n        writable: true,\n        value: function remove() {\n          if (this.parentNode !== null) {\n            this.parentNode.removeChild(this);\n          }\n        }\n      });\n    });\n  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);\n\n  // startsWith\n  if (!String.prototype.startsWith) {\n    // eslint-disable-next-line no-extend-native\n    Object.defineProperty(String.prototype, \"startsWith\", {\n      value: function value(search, rawPos) {\n        var pos = rawPos > 0 ? rawPos | 0 : 0;\n        return this.substring(pos, pos + search.length) === search;\n      }\n    });\n  }\n\n  // Fixes\n  //---------------------------------\n\n  // ie download\n  var ie11Download = function ie11Download(el) {\n    if (el.href === \"\") {\n      throw Error(\"The element has no href value.\");\n    }\n    var filename = el.getAttribute(\"download\");\n    if (filename === null || filename === \"\") {\n      var tmp = el.href.split(\"/\");\n      filename = tmp[tmp.length - 1];\n    }\n    el.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n      var xhr = new XMLHttpRequest();\n      xhr.onloadstart = function () {\n        xhr.responseType = \"blob\";\n      };\n      xhr.onload = function () {\n        navigator.msSaveOrOpenBlob(xhr.response, filename);\n      };\n      xhr.open(\"GET\", el.href, true);\n      xhr.send();\n    });\n  };\n  if (window.navigator.msSaveBlob) {\n    var downloadLinks = document.querySelectorAll(\"a[download]\");\n    if (downloadLinks.length) {\n      downloadLinks.forEach(function (el) {\n        ie11Download(el);\n      });\n    }\n  }\n\n  // ie svg focus fix\n  var unfocusableSvg = function unfocusableSvg() {\n    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {\n      return;\n    }\n    var svg = document.querySelectorAll('svg');\n    svg.forEach(function (el) {\n      el.setAttribute('focusable', 'false');\n    });\n  };\n  unfocusableSvg();\n\n  //ie footer nailing\n  var ieFooterNailing = function ieFooterNailing() {\n    var main = document.querySelector('main');\n    var header = document.querySelector('.header');\n    var footer = document.querySelector('.footer');\n    var headerH;\n    var footerH;\n    var mainHMin;\n    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {\n      return;\n    }\n    var mainHeight = function mainHeight() {\n      // eslint-disable-next-line no-unused-expressions\n      header ? headerH = header.getBoundingClientRect().height : headerH = 0;\n      // eslint-disable-next-line no-unused-expressions\n      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;\n      mainHMin = window.innerHeight;\n      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';\n    };\n    document.addEventListener('loadDOMContentLoaded', mainHeight());\n    window.addEventListener('resize', mainHeight);\n  };\n  ieFooterNailing();\n};\n\n\n//# sourceURL=webpack:///./src/js/vendor/ie-fix.js?");

/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vhFix\", function() { return vhFix; });\n/**\n* Модуль исправления багов на iOs устройствах\n* определяет высоту экрана и при любом изменении переопределяет её\n* в стилях используйте кастомные стили var(--vh)\n*/\nvar vhFix = function vhFix() {\n  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {\n    var vh = window.innerHeight;\n    document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n    window.addEventListener('resize', function () {\n      vh = window.innerHeight;\n      document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/vendor/vh-fix.js?");

/***/ })

/******/ });