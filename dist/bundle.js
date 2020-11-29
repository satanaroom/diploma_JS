/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/maskPhone */ \"./src/modules/maskPhone.js\");\n/* harmony import */ var _modules_dropDowmMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropDowmMenu */ \"./src/modules/dropDowmMenu.js\");\n/* harmony import */ var _modules_modalWindows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalWindows */ \"./src/modules/modalWindows.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_getPromocode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getPromocode */ \"./src/modules/getPromocode.js\");\n/* harmony import */ var _modules_showBurger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showBurger */ \"./src/modules/showBurger.js\");\n/* harmony import */ var _modules_scrollToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollToTop */ \"./src/modules/scrollToTop.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_photoGallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/photoGallery */ \"./src/modules/photoGallery.js\");\n/* harmony import */ var _modules_fixedMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fixedMenu */ \"./src/modules/fixedMenu.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n //maskPhone\n\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_0__.default)(\".phonecall\", \"+_(___) ___-__-__\"); //dropDownMenu\n\n(0,_modules_dropDowmMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //callBack\n\n(0,_modules_modalWindows__WEBPACK_IMPORTED_MODULE_2__.default)(); //sendForm\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)(); //promo\n\n(0,_modules_getPromocode__WEBPACK_IMPORTED_MODULE_4__.default)(); //showBurger\n\n(0,_modules_showBurger__WEBPACK_IMPORTED_MODULE_5__.default)(); //scrollToTop\n\n(0,_modules_scrollToTop__WEBPACK_IMPORTED_MODULE_6__.default)(); //carousel\n\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_7__.default)(); //photoGallery\n\n(0,_modules_photoGallery__WEBPACK_IMPORTED_MODULE_8__.default)(); //fixedMenu\n\n(0,_modules_fixedMenu__WEBPACK_IMPORTED_MODULE_9__.default)(); //topSlider\n\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n//# sourceURL=webpack://Diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar carousel = function carousel() {\n  //style\n  var style = document.createElement(\"style\");\n  style.id = \"carousel-style\";\n  style.textContent = \"\\n    .services-slider {\\n      width: 100%;\\n      overflow: hidden;\\n      padding-left: 5px;\\n      position: relative;\\n    }\\n\\n    .services-slider > .slide {   \\n      min-width: 226px;    \\n      margin-right: 0% !important; \\n      margin-left: 0%!important;\\n      transition: transform 0.5s !important;\\n      will-change: transform !important;\\n    }\\n\\n    .services-slider > span {\\n      position: absolute;\\n      width: 36px;\\n      height: 37px;\\n      background-color: #f4c71b !important;\\n      border-radius: 50%;\\n      text-align: center;\\n      padding-top: 11px;\\n    }\\n\\n    .carousel-slider-left {\\n      top: 22%;\\n      left: 0;\\n      cursor: pointer;\\n    }\\n\\n    .carousel-slider-right {\\n      top: 22%;\\n      left: 97%;\\n      cursor: pointer;\\n    }\\n\\n    @media (max-width: 1100px) {\\n\\n    .services-slider {\\n      width: 95%;\\n    }\\n\\n    .services-slider > .slide {\\n      flex: 0 0 34%;   \\n\\n    }\\n  }\\n\\n    @media (max-width: 768px) {\\n\\n    .services-slider {\\n      width: 90%;\\n    }\\n\\n    .services-slider > .slide {\\n      flex: 0 0 100%;   \\n    }\\n\\n    .carousel-slider-left {\\n      top: 22;\\n      left: 3%;\\n      cursor: pointer;\\n    }\\n\\n    .carousel-slider-right {\\n      top: 22%;\\n      left: 80%;\\n      cursor: pointer;\\n    }\\n  }\\n\\n    @media (max-width: 330px) {\\n\\n    .carousel-slider-left {\\n      left: 3%;\\n    }\\n  \\n    .carousel-slider-right {\\n      left: 80%;\\n    }\\n  }\\n\\n    @media (max-width: 380px) {\\n\\n    .carousel-slider-left {\\n      left: 6%;\\n    }\\n  \\n    .carousel-slider-right {\\n      left: 80%;\\n    }\\n  }\\n    \";\n  document.head.append(style); //module-body\n\n  var slider = document.querySelector(\".services-slider\"),\n      slides = _toConsumableArray(slider.children),\n      images = document.querySelectorAll(\" .services-slider > .slide > img\"),\n      leftArrow = document.createElement(\"span\"),\n      rightArrow = document.createElement(\"span\");\n\n  leftArrow.className = \"carousel-slider-left\";\n  leftArrow.innerHTML = \"<i class=\\\"fa fa-angle-left\\\"></i>\";\n  rightArrow.className = \"carousel-slider-right\";\n  rightArrow.innerHTML = \"<i class=\\\"fa fa-angle-right\\\"></i>\";\n  slider.append(leftArrow);\n  slider.append(rightArrow);\n\n  var menu = function menu() {\n    var mover = 0,\n        position = 0;\n    slider.addEventListener(\"click\", function (event) {\n      var target = event.target;\n\n      if (!target.closest(\".carousel-slider-left, .carousel-slider-right\")) {\n        return;\n      }\n\n      if (target.closest(\".carousel-slider-left\") && position > 0) {\n        if (window.innerWidth <= 768) {\n          mover += slides[0].getBoundingClientRect().width - images[0].getBoundingClientRect().width + images[0].getBoundingClientRect().width;\n          position--;\n          slides.forEach(function (x) {\n            x.style.transform = \"translateX(\".concat(mover, \"px)\");\n          });\n          return;\n        }\n\n        if (window.innerWidth < 1100) {\n          mover += slides[0].getBoundingClientRect().width;\n          position--;\n          slides.forEach(function (x) {\n            x.style.transform = \"translateX(\".concat(mover, \"px)\");\n          });\n          return;\n        }\n\n        if (window.innerWidth > 1100) {\n          mover += 226;\n          position--;\n          slides.forEach(function (x) {\n            x.style.transform = \"translateX(\".concat(mover, \"px)\");\n          });\n          return;\n        }\n      }\n\n      if (target.closest(\".carousel-slider-right\")) {\n        if (window.innerWidth <= 768 && position !== slides.length - 1) {\n          mover -= slides[0].getBoundingClientRect().width - images[0].getBoundingClientRect().width + images[0].getBoundingClientRect().width;\n          position++;\n          slides.forEach(function (x) {\n            x.style.transform = \"translateX(\".concat(mover, \"px)\");\n          });\n          return;\n        }\n\n        if (window.innerWidth > 768 && window.innerWidth <= 1100 && position !== slides.length - 3) {\n          mover -= slides[0].getBoundingClientRect().width;\n          position++;\n          slides.forEach(function (x) {\n            x.style.transform = \"translateX(\".concat(mover, \"px)\");\n          });\n          return;\n        }\n\n        if (window.innerWidth > 1100 && position !== slides.length - 5) {\n          mover -= 226;\n          position++;\n          slides.forEach(function (x) {\n            x.style.transform = \"translateX(\".concat(mover, \"px)\");\n          });\n          return;\n        }\n      }\n    });\n  };\n\n  menu();\n  window.addEventListener(\"resize\", menu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://Diploma/./src/modules/carousel.js?");

/***/ }),

/***/ "./src/modules/dropDowmMenu.js":
/*!*************************************!*\
  !*** ./src/modules/dropDowmMenu.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nvar dropDownMenu = function dropDownMenu() {\n  var clubSelect = document.querySelector('.club-select'),\n      clubsMenu = document.getElementById('clubs-menu');\n  clubSelect.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('hidden-menu')) {\n      clubsMenu.style.display = \"block\";\n      target.classList.remove('hidden-menu');\n      target.classList.add('blocked-menu');\n    } else if (target.classList.contains('blocked-menu')) {\n      target.classList.remove('blocked-menu');\n      target.classList.add('hidden-menu');\n      clubsMenu.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropDownMenu);\n\n//# sourceURL=webpack://Diploma/./src/modules/dropDowmMenu.js?");

/***/ }),

/***/ "./src/modules/fixedMenu.js":
/*!**********************************!*\
  !*** ./src/modules/fixedMenu.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nvar fixedMenu = function fixedMenu() {\n  window.addEventListener('scroll', function () {\n    var topMenu = document.querySelector('.top-menu');\n    var x = window.innerWidth;\n\n    if (window.pageYOffset > 190 && x < 768) {\n      topMenu.style.position = 'fixed';\n    } else {\n      topMenu.style.position = '';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fixedMenu);\n\n//# sourceURL=webpack://Diploma/./src/modules/fixedMenu.js?");

/***/ }),

/***/ "./src/modules/getPromocode.js":
/*!*************************************!*\
  !*** ./src/modules/getPromocode.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nvar getPromocode = function getPromocode() {\n  var oneMonth = document.getElementById(\"m1\"),\n      sixMonth = document.getElementById(\"m2\"),\n      nineMonth = document.getElementById(\"m3\"),\n      twelveMonth = document.getElementById(\"m4\"),\n      inputPromo = document.querySelector('[placeholder=\"Промокод\"'),\n      priceTotal = document.getElementById(\"price-total\"),\n      cardLetoMozaika = document.getElementById(\"card_leto_mozaika\"),\n      cardLetoSchelkovo = document.getElementById(\"card_leto_schelkovo\"),\n      telo = \"ТЕЛО2020\";\n\n  if (cardLetoMozaika) {\n    document.addEventListener(\"click\", function () {\n      if (cardLetoMozaika.checked && inputPromo.value !== telo) {\n        if (oneMonth.checked) {\n          priceTotal.innerHTML = 1999;\n        }\n\n        if (sixMonth.checked) {\n          priceTotal.innerHTML = 9900;\n        }\n\n        if (nineMonth.checked) {\n          priceTotal.innerHTML = 13900;\n        }\n\n        if (twelveMonth.checked) {\n          priceTotal.innerHTML = 19900;\n        }\n      }\n\n      if (cardLetoSchelkovo.checked && inputPromo.value !== telo) {\n        if (oneMonth.checked) {\n          priceTotal.innerHTML = 1999 + 1000;\n        }\n\n        if (sixMonth.checked) {\n          priceTotal.innerHTML = 9900 + 5000;\n        }\n\n        if (nineMonth.checked) {\n          priceTotal.innerHTML = 13900 + 7000;\n        }\n\n        if (twelveMonth.checked) {\n          priceTotal.innerHTML = 19900 + 5000;\n        }\n      }\n\n      if (cardLetoMozaika.checked && inputPromo.value === telo) {\n        if (oneMonth.checked) {\n          priceTotal.innerHTML = Math.floor(1999 - 1999 * 0.3);\n        }\n\n        if (sixMonth.checked) {\n          priceTotal.innerHTML = Math.floor(9900 - 9900 * 0.3);\n        }\n\n        if (nineMonth.checked) {\n          priceTotal.innerHTML = Math.floor(13900 - 13900 * 0.3);\n        }\n\n        if (twelveMonth.checked) {\n          priceTotal.innerHTML = Math.floor(19900 - 19900 * 0.3);\n        }\n      }\n\n      if (cardLetoSchelkovo.checked && inputPromo.value === telo) {\n        if (oneMonth.checked) {\n          priceTotal.innerHTML = Math.floor(2999 - 2999 * 0.3);\n        }\n\n        if (sixMonth.checked) {\n          priceTotal.innerHTML = Math.floor(14900 - 14900 * 0.3);\n        }\n\n        if (nineMonth.checked) {\n          priceTotal.innerHTML = Math.floor(21900 - 21900 * 0.3);\n        }\n\n        if (twelveMonth.checked) {\n          priceTotal.innerHTML = Math.floor(24900 - 24900 * 0.3);\n        }\n      }\n\n      document.addEventListener(\"input\", function () {\n        if (inputPromo.value === telo && oneMonth.checked && cardLetoMozaika.checked) {\n          priceTotal.innerHTML = Math.floor(1999 - 1999 * 0.3);\n        } else if (inputPromo.value !== telo && oneMonth.checked && cardLetoMozaika.checked) {\n          priceTotal.innerHTML = 1999;\n        } else if (inputPromo.value === telo && sixMonth.checked && cardLetoMozaika.checked) {\n          priceTotal.innerHTML = Math.floor(9900 - 9900 * 0.3);\n        } else if (inputPromo.value !== telo && sixMonth.checked && cardLetoMozaika.checked) {\n          priceTotal.innerHTML = 9900;\n        } else if (inputPromo.value === telo && nineMonth.checked && cardLetoMozaika.checked) {\n          priceTotal.innerHTML = Math.floor(13900 - 13900 * 0.3);\n        } else if (inputPromo.value !== telo && nineMonth.checked && cardLetoMozaika.checked) {\n          priceTotal.innerHTML = 13900;\n        } else if (inputPromo.value === telo && twelveMonth.checked && cardLetoMozaika.checked) {\n          priceTotal.innerHTML = Math.floor(19900 - 19900 * 0.3);\n        } else if (inputPromo.value !== telo && twelveMonth.checked && cardLetoMozaika.checked) {\n          priceTotal.innerHTML = 19900;\n        }\n\n        if (inputPromo.value === telo && oneMonth.checked && cardLetoSchelkovo.checked) {\n          priceTotal.innerHTML = Math.floor(2999 - 2999 * 0.3);\n        } else if (inputPromo.value === telo && sixMonth.checked && cardLetoSchelkovo.checked) {\n          priceTotal.innerHTML = Math.floor(14900 - 14900 * 0.3);\n        } else if (inputPromo.value === telo && nineMonth.checked && cardLetoSchelkovo.checked) {\n          priceTotal.innerHTML = Math.floor(21900 - 21900 * 0.3);\n        } else if (inputPromo.value === telo && twelveMonth.checked && cardLetoSchelkovo.checked) {\n          priceTotal.innerHTML = Math.floor(24900 - 24900 * 0.3);\n        }\n\n        if (inputPromo.value !== telo && oneMonth.checked && cardLetoSchelkovo.checked) {\n          priceTotal.innerHTML = 2999;\n        } else if (inputPromo.value !== telo && sixMonth.checked && cardLetoSchelkovo.checked) {\n          priceTotal.innerHTML = 14900;\n        } else if (inputPromo.value !== telo && nineMonth.checked && cardLetoSchelkovo.checked) {\n          priceTotal.innerHTML = 21900;\n        } else if (inputPromo.value !== telo && twelveMonth.checked && cardLetoSchelkovo.checked) {\n          priceTotal.innerHTML = 24900;\n        }\n      });\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPromocode);\n\n//# sourceURL=webpack://Diploma/./src/modules/getPromocode.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction maskPhone(selector) {\n  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"+7 (___) ___-__-__\";\n  var elems = document.querySelectorAll(selector);\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = masked,\n        def = template.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\");\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf(\"_\");\n\n    if (i !== -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return \"\\\\d{1,\" + a.length + \"}\";\n    }).replace(/[+()]/g, \"\\\\$&\");\n    reg = new RegExp(\"^\" + reg + \"$\");\n\n    if (!reg.test(this.value) || this.value.length < 6 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type === \"blur\" && this.value.length < 6) {\n      this.value = \"\";\n    }\n  }\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener(\"input\", mask);\n      elem.addEventListener(\"focus\", mask);\n      elem.addEventListener(\"blur\", mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack://Diploma/./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/modalWindows.js":
/*!*************************************!*\
  !*** ./src/modules/modalWindows.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nvar modalWindows = function modalWindows() {\n  var freeVisitForm = document.getElementById(\"free_visit_form\"),\n      callbackForm = document.getElementById(\"callback_form\"),\n      thanks = document.getElementById(\"thanks\"),\n      gift = document.getElementById(\"gift\"),\n      formContentCallback = document.querySelector('.form-content-callback'),\n      formContentGift = document.querySelector('.form-content-gift'),\n      formContentVisit = document.querySelector('.form-content-visit');\n  document.addEventListener(\"click\", function (event) {\n    var target = event.target;\n\n    if (target.closest(\".free-visit\")) {\n      freeVisitForm.style.display = \"block\";\n      formContentVisit.style.opacity = \"0\";\n      var x = 0;\n      var timer = setInterval(function () {\n        x += 0.1;\n        formContentVisit.style.opacity = \"\".concat(x);\n\n        if (formContentVisit.style.opacity === \"1.1\") {\n          clearInterval(timer);\n        }\n      }, 20);\n    }\n\n    if (target.closest(\".right > .call > .callback-btn\")) {\n      callbackForm.style.display = \"block\";\n      formContentCallback.style.opacity = \"0\";\n      var _x = 0;\n\n      var _timer = setInterval(function () {\n        _x += 0.1;\n        formContentCallback.style.opacity = \"\".concat(_x);\n\n        if (formContentCallback.style.opacity === \"1.1\") {\n          clearInterval(_timer);\n        }\n      }, 20);\n    }\n\n    if (target.closest(\".fixed-gift\")) {\n      gift.style.display = \"block\";\n      formContentGift.style.opacity = \"0\";\n      var _x2 = 0;\n\n      var _timer2 = setInterval(function () {\n        _x2 += 0.1;\n        formContentGift.style.opacity = \"\".concat(_x2);\n\n        if (formContentGift.style.opacity === \"1.1\") {\n          clearInterval(_timer2);\n        }\n      }, 20);\n    }\n\n    if (target.closest(\"#gift > .overlay, #gift > .form-wrapper > .close-form .close_icon, #gift > .form-wrapper > .form-content > .close-btn\")) {\n      gift.style.display = \"none\";\n      document.querySelector(\".fixed-gift\").remove();\n    }\n\n    if (target.closest(\".overlay, .close_icon,  #thanks > .form-wrapper > .form-content > .close-btn\")) {\n      freeVisitForm.style.display = \"none\";\n      callbackForm.style.display = \"none\";\n      thanks.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindows);\n\n//# sourceURL=webpack://Diploma/./src/modules/modalWindows.js?");

/***/ }),

/***/ "./src/modules/photoGallery.js":
/*!*************************************!*\
  !*** ./src/modules/photoGallery.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* eslint-disable strict */\n\n\nvar photoGallery = function photoGallery() {\n  //style\n  var style = document.createElement(\"style\");\n  style.id = \"gallery-style\";\n  style.textContent = \"\\n    \\n       .photo-gallery-images {\\n        display: none;\\n    }\\n\\n    .photo-gallery-slider {\\n      height: 400px;\\n    }\\n\\n      .photo-gallery-image-active {\\n      display: flex;\\n      width: 700px !important;\\n      position: absolute;\\n      left: 0;\\n      right: 0;\\n      margin-left: auto;\\n      margin-right: auto;        \\n    }\\n\\n        .photo-gallery-wrapper {\\n        position: relative;\\n        display: flex;\\n    } \\n\\n        .photo-gallery-wrapper > span {\\n        z-index: 9999 !important;\\n        position: absolute;\\n        width: 36px;\\n        height: 37px;\\n        background-color: #f4c71b !important;\\n        border-radius: 50%;\\n        text-align: center;\\n        padding-top: 11px;\\n    }\\n\\n    .photo-gallery-left {\\n        display: block;\\n        top: 40%;\\n        left: 6.5%;\\n        cursor: pointer;\\n    }\\n\\n    .photo-gallery-right {\\n        display: blockl;\\n        top: 40%;\\n        left: 89%;\\n        cursor: pointer;\\n    }\\n\\n    .photo-gallery-buttons {\\n      position: absolute;\\n      top: 90%;\\n      left: 0;\\n      right: 0;\\n      margin-left: auto;\\n      margin-right: auto;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n    }\\n\\n    .photo-gallery-dots {\\n        min-height: 10px;\\n        min-width: 30px;\\n        border-radius: 10%;\\n        margin: 1px;\\n        border: 1px solid rgba(204, 204, 204, 0.911);\\n    }\\n\\n\\n    .photo-gallery-dot-active {\\n        background: #f4c71b;\\n        border: 1px solid #f4c71b;\\n    }\\n\\n\\n    \\n    @media (max-width: 768px) {\\n\\n        .photo-gallery-slider {\\n      height: auto;\\n    }\\n\\n      .photo-gallery-image-active {\\n      display: flex;\\n      width: 700px !important;\\n      position: static;\\n      left: 0;\\n      right: 0;\\n      margin-left: auto;\\n      margin-right: auto;        \\n    }\\n\\n      \\n\\n    .photo-gallery-left {\\n        display: none;\\n    }\\n\\n    .photo-gallery-right {\\n        display: none;\\n    }\\n    \\n}\\n\\n    \";\n  document.head.append(style);\n  var galleryBg = document.querySelector(\".gallery-bg > .wrapper\"),\n      gallerySlider = document.querySelector(\".gallery-slider\"),\n      images = document.querySelectorAll(\" .gallery-slider > .slide > img\"),\n      leftArrow = document.createElement(\"span\"),\n      rightArrow = document.createElement(\"span\"),\n      buttonsWrapper = document.createElement(\"div\");\n  galleryBg.classList.add(\"photo-gallery-wrapper\");\n  gallerySlider.classList.add(\"photo-gallery-slider\");\n  buttonsWrapper.classList.add(\"photo-gallery-buttons\");\n  leftArrow.className = \"photo-gallery-left\";\n  leftArrow.innerHTML = \"<i class=\\\"fa fa-angle-left\\\"></i>\";\n  rightArrow.className = \"photo-gallery-right\";\n  rightArrow.innerHTML = \"<i class=\\\"fa fa-angle-right\\\"></i>\";\n  galleryBg.append(leftArrow);\n  galleryBg.append(rightArrow);\n  galleryBg.append(buttonsWrapper);\n  images.forEach(function (x) {\n    if (x === images[0]) {\n      x.classList.add(\"photo-gallery-image-active\");\n    }\n\n    x.classList.add(\"photo-gallery-images\");\n  });\n\n  for (var i = 0; i < images.length; i++) {\n    var newDot = document.createElement(\"button\");\n    newDot.classList.add(\"photo-gallery-dots\");\n\n    if (i === 0) {\n      newDot.classList.add(\"photo-gallery-dot-active\");\n    }\n\n    buttonsWrapper.append(newDot);\n  }\n\n  var sliderDots = document.querySelectorAll(\".photo-gallery-dots\");\n\n  var prevSlide = function prevSlide() {\n    for (var _i = 0; _i < images.length; _i++) {\n      if (images[0].classList.contains(\"photo-gallery-image-active\")) {\n        images[0].classList.remove(\"photo-gallery-image-active\");\n        images[0].classList.add(\"photo-gallery-images\");\n        images[images.length - 1].classList.add(\"photo-gallery-image-active\");\n        sliderDots[0].classList.remove(\"photo-gallery-dot-active\");\n        sliderDots[images.length - 1].classList.add(\"photo-gallery-dot-active\");\n        return;\n      }\n\n      if (images[_i].classList.contains(\"photo-gallery-image-active\")) {\n        images[_i].classList.remove(\"photo-gallery-image-active\");\n\n        images[_i - 1].classList.add(\"photo-gallery-image-active\");\n\n        sliderDots[_i].classList.remove(\"photo-gallery-dot-active\");\n\n        sliderDots[_i - 1].classList.add(\"photo-gallery-dot-active\");\n\n        return;\n      }\n    }\n  };\n\n  var nextSlide = function nextSlide() {\n    for (var _i2 = 0; _i2 < images.length; _i2++) {\n      if (images[images.length - 1].classList.contains(\"photo-gallery-image-active\")) {\n        images[images.length - 1].classList.add(\"photo-gallery-images\");\n        images[0].classList.add(\"photo-gallery-image-active\");\n        sliderDots[0].classList.add(\"photo-gallery-dot-active\");\n        images[images.length - 1].classList.remove(\"photo-gallery-image-active\");\n        sliderDots[images.length - 1].classList.remove(\"photo-gallery-dot-active\");\n        return;\n      }\n\n      if (images[_i2].classList.contains(\"photo-gallery-image-active\")) {\n        images[_i2].classList.add(\"photo-gallery-images\");\n\n        images[_i2 + 1].classList.add(\"photo-gallery-image-active\");\n\n        sliderDots[_i2 + 1].classList.add(\"photo-gallery-dot-active\");\n\n        sliderDots[_i2].classList.remove(\"photo-gallery-dot-active\");\n\n        images[_i2].classList.remove(\"photo-gallery-image-active\");\n\n        return;\n      }\n    }\n  };\n\n  galleryBg.addEventListener(\"click\", function (event) {\n    var target = event.target; //!left\n\n    if (target.closest(\".photo-gallery-left\")) {\n      prevSlide();\n    } //!right\n\n\n    if (target.closest(\".photo-gallery-right\")) {\n      nextSlide();\n    } //!btn\n\n\n    if (target.closest(\".photo-gallery-dots\")) {\n      for (var _i3 = 0; _i3 < images.length; _i3++) {\n        if (sliderDots[_i3] === target) {\n          images.forEach(function (elem) {\n            return elem.classList.remove(\"photo-gallery-image-active\");\n          });\n          sliderDots.forEach(function (elem) {\n            return elem.classList.remove(\"photo-gallery-dot-active\");\n          });\n\n          images[_i3].classList.add(\"photo-gallery-image-active\");\n\n          sliderDots[_i3].classList.add(\"photo-gallery-dot-active\");\n        }\n      }\n    }\n  });\n  var interval;\n  interval = setInterval(nextSlide, 3000);\n  galleryBg.addEventListener(\"mouseover\", function (event) {\n    if (event.target.matches(\".photo-gallery-left\") || event.target.matches(\".photo-gallery-right\") || event.target.matches(\".photo-gallery-dots\")) {\n      clearInterval(interval);\n    }\n  });\n  galleryBg.addEventListener(\"mouseout\", function (event) {\n    if (event.target.matches(\".photo-gallery-left\") || event.target.matches(\".photo-gallery-right\") || event.target.matches(\".photo-gallery-dots\")) {\n      interval = setInterval(nextSlide, 3000);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photoGallery);\n\n//# sourceURL=webpack://Diploma/./src/modules/photoGallery.js?");

/***/ }),

/***/ "./src/modules/scrollToTop.js":
/*!************************************!*\
  !*** ./src/modules/scrollToTop.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nvar scrollTop = function scrollTop() {\n  var btnToTop = document.getElementById('totop');\n  btnToTop.style.display = 'none';\n  window.addEventListener('scroll', function () {\n    if (window.pageYOffset > 680) {\n      btnToTop.style.display = 'block';\n    } else {\n      btnToTop.style.display = 'none';\n    }\n\n    btnToTop.addEventListener('click', function () {\n      window.scrollTo({\n        top: 0,\n        behavior: 'smooth'\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTop);\n\n//# sourceURL=webpack://Diploma/./src/modules/scrollToTop.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  document.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('.nameClass')) {\n      target.value = target.value.replace(/[^А-Яа-яЁе ]/gi, '');\n    }\n  });\n  var submitMessage = 'Вам необходимо подтвердить согласие!',\n      chooseClubPlease = 'Выберите клуб!';\n  var loadMessage = \"<div class=\\\"loadMessage\\\"></div>\";\n  var form1 = document.getElementById('form1'),\n      form2 = document.getElementById('form2'),\n      bannerForm = document.getElementById('banner-form'),\n      cardOrder = document.getElementById('card_order'),\n      footerForm = document.getElementById('footer_form');\n  var statusMessage = document.createElement('div');\n  document.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var shell,\n        checkOut,\n        target = event.target,\n        check = document.getElementById('check'),\n        check1 = document.getElementById('check1'),\n        check2 = document.getElementById('check2'),\n        cardCheck = document.getElementById('card_check'),\n        thanks = document.getElementById('thanks'),\n        formContentThanks = document.querySelector('.form-content-thanks');\n\n    if (target === form1) {\n      shell = form1;\n      checkOut = check;\n    } else if (target === form2) {\n      shell = form2;\n      checkOut = check2;\n    } else if (target === bannerForm) {\n      shell = bannerForm;\n      checkOut = check1;\n    } else if (target === cardOrder) {\n      shell = cardOrder;\n      checkOut = cardCheck;\n    } else if (target === footerForm) {\n      shell = footerForm;\n    }\n\n    shell.appendChild(statusMessage);\n\n    if (target !== footerForm) {\n      if (checkOut.checked === false) {\n        statusMessage.textContent = submitMessage;\n        statusMessage.style.color = 'red';\n        return;\n      }\n    }\n\n    if (target === footerForm) {\n      if (document.getElementById('footer_leto_mozaika').checked === false && document.getElementById('footer_leto_schelkovo').checked === false) {\n        statusMessage.textContent = chooseClubPlease;\n        statusMessage.style.color = 'red';\n        return;\n      }\n    }\n\n    document.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.classList.contains('close-btn')) {\n        var x = 1;\n        var timer = setInterval(function () {\n          x -= 0.1;\n          formContentThanks.style.opacity = \"\".concat(x);\n\n          if (formContentThanks.style.opacity === \"-0.1\") {\n            clearInterval(timer);\n            thanks.style.display = \"none\";\n          }\n        }, 1);\n      }\n    });\n    statusMessage.innerHTML = loadMessage;\n\n    var removeStatusMessage = function removeStatusMessage() {\n      setTimeout(function () {\n        var popup = document.querySelector('.popup');\n        popup.style.display = \"none\";\n      }, 2000);\n      statusMessage.remove();\n    };\n\n    setTimeout(removeStatusMessage, 5000);\n    var formData = new FormData(shell);\n    var body = {};\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var value = _step.value;\n        body[value[0]] = value[1];\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      thanks.style.display = 'block';\n      formContentThanks.style.opacity = \"0\";\n      var x = 0;\n      var timer = setInterval(function () {\n        x += 0.1;\n        formContentThanks.style.opacity = \"\".concat(x);\n\n        if (formContentThanks.style.opacity === \"1.1\") {\n          clearInterval(timer);\n        }\n      }, 20);\n      thanks.innerHTML = \"\\n                <div class=\\\"overlay\\\">\\n                </div>\\n                <div class=\\\"form-wrapper\\\">\\n                    <div class=\\\"close-form\\\">\\n                        <img src=\\\"images/close-icon.png\\\" alt=\\\"close\\\" class=\\\"close_icon\\\">\\n                    </div>\\n                    <div class=\\\"form-content form-content-thanks\\\">\\n                        <h4>\\u0421\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E!</h4>\\n                        <p>\\u0412\\u0430\\u0448\\u0430 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0430 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0430. <br> \\u041C\\u044B \\u0441\\u0432\\u044F\\u0436\\u0435\\u043C\\u0441\\u044F \\u0441 \\u0432\\u0430\\u043C\\u0438 \\u0432 \\u0431\\u043B\\u0438\\u0436\\u0430\\u0439\\u0448\\u0435\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F.</p>\\n                        <button class=\\\"btn close-btn\\\">OK</button>\\n                    </div>\\n                </div>\";\n    }).catch(function (error) {\n      thanks.style.display = 'block';\n      formContentThanks.style.opacity = \"0\";\n      var x = 0;\n      var timer = setInterval(function () {\n        x += 0.1;\n        formContentThanks.style.opacity = \"\".concat(x);\n\n        if (formContentThanks.style.opacity === \"1.1\") {\n          clearInterval(timer);\n        }\n      }, 20);\n      thanks.innerHTML = \"\\n                <div class=\\\"overlay\\\">\\n                </div>\\n                <div class=\\\"form-wrapper\\\">\\n                    <div class=\\\"close-form\\\">\\n                        <img src=\\\"images/close-icon.png\\\" alt=\\\"close\\\" class=\\\"close_icon\\\">\\n                    </div>\\n                    <div class=\\\"form-content form-content-thanks\\\">\\n                        <h4>\\u0418\\u0437\\u0432\\u0438\\u043D\\u0438\\u0442\\u0435!</h4>\\n                        <p>\\u0412\\u0430\\u0448\\u0430 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0430 \\u043D\\u0435 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0430...<br> \\u0412\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E \\u0432\\u043E\\u0437\\u043D\\u0438\\u043A\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0441 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u043E\\u043C</p>\\n                        <button class=\\\"btn close-btn\\\">OK</button>\\n                    </div>\\n                /div>\";\n      console.error(error);\n    }).then(function () {\n      if (document.querySelectorAll('.phonecall')) {\n        document.querySelectorAll('.phonecall').forEach(function (elem) {\n          elem.value = '';\n        });\n      }\n\n      if (document.querySelectorAll('.nameClass')) {\n        document.querySelectorAll('.nameClass').forEach(function (elem) {\n          elem.value = '';\n        });\n      }\n\n      if (document.getElementById('promo')) {\n        document.getElementById('promo').value = '';\n      }\n\n      if (target !== footerForm) {\n        if (checkOut.checked) {\n          checkOut.checked = false;\n        }\n      }\n\n      if (target === footerForm) {\n        if (document.getElementById('footer_leto_mozaika').checked) {\n          document.getElementById('footer_leto_mozaika').checked = false;\n        }\n\n        if (document.getElementById('footer_leto_schelkovo').checked) {\n          document.getElementById('footer_leto_schelkovo').checked = false;\n        }\n      }\n    });\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://Diploma/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/showBurger.js":
/*!***********************************!*\
  !*** ./src/modules/showBurger.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nvar showBurger = function showBurger() {\n  var burger = document.querySelector('.hidden-large');\n  window.addEventListener('resize', function () {\n    var x = window.innerWidth;\n\n    if (x < 768) {\n      burger.style.display = 'block';\n    }\n\n    if (x > 768) {\n      burger.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showBurger);\n\n//# sourceURL=webpack://Diploma/./src/modules/showBurger.js?");

/***/ }),

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n\n\nvar topSlider = function topSlider() {\n  var mainSlider = document.querySelectorAll('.main-slide');\n  var currentMainSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index) {\n    elem[index].style.display = 'none';\n  };\n\n  var nextSlide = function nextSlide(elem, index) {\n    elem[index].style.display = 'flex';\n  };\n\n  var autoPlayMainSlider = function autoPlayMainSlider() {\n    prevSlide(mainSlider, currentMainSlide);\n    currentMainSlide++;\n\n    if (currentMainSlide >= mainSlider.length) {\n      currentMainSlide = 0;\n    }\n\n    nextSlide(mainSlider, currentMainSlide);\n  };\n\n  var startMainSlide = function startMainSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlayMainSlider, time);\n  };\n\n  startMainSlide(3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://Diploma/./src/modules/topSlider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "" + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "1beed254222cc3596dc2"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Diploma:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateDiploma"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;