/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/_accordion */ \"./src/js/_accordion.js\");\n/* harmony import */ var _js_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_accordion__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/_loading */ \"./src/js/_loading.js\");\n/* harmony import */ var _js_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_loading__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/_modal */ \"./src/js/_modal.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/_hamburger */ \"./src/js/_hamburger.js\");\n/* harmony import */ var _js_hamburger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_hamburger__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/js/_accordion.js":
/*!******************************!*\
  !*** ./src/js/_accordion.js ***!
  \******************************/
/***/ (function() {

eval("const title = document.querySelectorAll('.jsAccordionTitle');\r\n/* ここでの titleEach => {...} は、.jsAccordionTitle クラスを持つ\r\nすべての要素に対して繰り返し処理を行うためのコールバック関数を定義しています。*/\r\ntitle.forEach(titleEach => {\r\n    let content = titleEach.nextElementSibling;\r\n\r\n    titleEach.addEventListener('click', () => \r\n    {\r\n    titleEach.classList.toggle('is-active');\r\n    content.classList.toggle('is-open');\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/_accordion.js?");

/***/ }),

/***/ "./src/js/_hamburger.js":
/*!******************************!*\
  !*** ./src/js/_hamburger.js ***!
  \******************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\r\n  const hamburger = document.getElementById('js-hamburger');\r\n  if (hamburger) {\r\n    hamburger.addEventListener('click', toggleHamburgerMenu);\r\n  }\r\n\r\n  const menuLinks = document.querySelectorAll('#js-global-menu a');\r\n  menuLinks.forEach(link => {\r\n    link.addEventListener('click', toggleHamburgerMenu);\r\n  });\r\n\r\n  function toggleHamburgerMenu() {\r\n    document.body.classList.toggle('is-drawerActive');\r\n\r\n    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';\r\n    \r\n    if (!isExpanded) {\r\n      hamburger.setAttribute('aria-expanded', 'true');\r\n      document.getElementById('js-global-menu').style.visibility = 'visible';\r\n      document.getElementById('js-global-menu').setAttribute('aria-hidden', 'false');\r\n      document.body.style.overflow = 'hidden';\r\n    } else {\r\n      hamburger.setAttribute('aria-expanded', 'false');\r\n      document.getElementById('js-global-menu').style.visibility = 'hidden';\r\n      document.getElementById('js-global-menu').setAttribute('aria-hidden', 'true');\r\n      document.body.style.overflow = ''; \r\n    }\r\n  }\r\n  // 追従ヘッダー\r\n  window.addEventListener('scroll', function() {\r\n    const header = document.querySelector('.header-sp');\r\n    const headerHeight = document.querySelector(\".header-sp\").offsetHeight; // ヘッダーの高さを取得\r\n    const scrollY = window.pageYOffset;\r\n    \r\n    if (scrollY >= 20) {\r\n      header.classList.add('header--sticky');\r\n      document.body.style.marginTop = headerHeight + 'px'; // コンテンツにヘッダーの高さ分の余白を設定\r\n    } else {\r\n      header.classList.remove('header--sticky');\r\n      document.body.style.marginTop = '0'; // コンテンツの余白をリセット\r\n    }\r\n  });\r\n});\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n  // href属性が\"#\"で始まるaタグのクリックイベント\r\n  const links = document.querySelectorAll('a[href^=\"#\"]');\r\n  links.forEach(link => {\r\n    link.addEventListener('click', function(e) {\r\n      e.preventDefault();\r\n      \r\n      const href = this.getAttribute(\"href\");\r\n      const targetId = href === \"#\" || href === \"\" ? 'html' : href;\r\n      const targetElement = document.querySelector(targetId);\r\n      const position = targetElement ? targetElement.offsetTop : 0;\r\n      \r\n      window.scrollTo({\r\n        top: position,\r\n        behavior: 'smooth'\r\n      });\r\n    });\r\n  });\r\n});\n\n//# sourceURL=webpack:///./src/js/_hamburger.js?");

/***/ }),

/***/ "./src/js/_loading.js":
/*!****************************!*\
  !*** ./src/js/_loading.js ***!
  \****************************/
/***/ (function() {

eval("// セッションストレージからフラグを取得\r\nconst isFirstLoad = sessionStorage.getItem('isFirstLoad');\r\nconst loadingWrap = document.querySelector('.loadingWrap');\r\nconst loading = document.querySelector('.loading');\r\nconst contents = document.querySelector('.contents') // コンテンツ要素を取得\r\n\r\n// ローディングを停止する関数\r\n function loadingStop() {\r\n  const loadingWrap = document.getElementById('loadingWrap');\r\n\r\n  // 'loadingNone' クラスを追加\r\n  loadingWrap.classList.add('loadingNone');\r\n  \r\n  setTimeout(function() {\r\n    loadingWrap.style.display = 'none';\r\n  }, 1000);\r\n}\r\n  // フラグがない場合（初回アクセス時）\r\n  if (!isFirstLoad) {\r\n    // loadingWrapにIDを付与\r\n    loadingWrap.id = 'loadingWrap';\r\n    // loadingにIDを付与\r\n    loading.id = 'loading';\r\n    // contents.classList.remove('hidden');\r\n    window.addEventListener('load', function() {\r\n  // ローディングを停止\r\n  loadingStop();\r\n  // セッションストレージにフラグを保存\r\n  sessionStorage.setItem('isFirstLoad', true);\r\n    });\r\n  } else {\r\n    // 初回以外の場合、ローディング画面を非表示にする\r\n    loadingWrap.style.display = 'none';\r\n    // contents.classList.remove('hidden');\r\n  }\n\n//# sourceURL=webpack:///./src/js/_loading.js?");

/***/ }),

/***/ "./src/js/_modal.js":
/*!**************************!*\
  !*** ./src/js/_modal.js ***!
  \**************************/
/***/ (function() {

eval("\r\n\r\nconst modalBtns = document.querySelectorAll(\"#modalOpen\");\r\nconst headerSp = document.querySelector('.header-sp');\r\n\r\nmodalBtns.forEach(function (btn) {\r\n    btn.onclick = function() {\r\n        var modal = btn.getAttribute('data-modal');\r\n        document.getElementById(modal).style.display = \"block\";\r\n        headerSp.style.display = \"none\"; // ヘッダーを非表示にする\r\n      \r\n    };\r\n});\r\n\r\nconst closeBtns = document.querySelectorAll(\"#modalClose\");\r\ncloseBtns.forEach(function (btn) {\r\n  btn.onclick = function () {\r\n    var modal = btn.closest('.modal');\r\n    modal.style.display = \"none\";\r\n    headerSp.style.display = \"\"; // ヘッダーを再表示する\r\n  };\r\n});\r\n\r\nwindow.onclick = function (event) {\r\n    if (event.target.className === \"modal\") {\r\n      event.target.style.display = \"none\";\r\n      headerSp.style.display = \"\"; // ヘッダーを再表示する\r\n    };\r\n  };\n\n//# sourceURL=webpack:///./src/js/_modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/about.js");
/******/ 	
/******/ })()
;