/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const gameCanvas = document.getElementById('game-window');\n  const ctx = gameCanvas.getContext('2d');\n  gameCanvas.width = 960;\n  gameCanvas.height = 540;\n  new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQW5CO0VBQ0EsTUFBTUMsR0FBRyxHQUFHRixVQUFVLENBQUNHLFVBQVgsQ0FBc0IsSUFBdEIsQ0FBWjtFQUNBSCxVQUFVLENBQUNJLEtBQVgsR0FBbUIsR0FBbkI7RUFDQUosVUFBVSxDQUFDSyxNQUFYLEdBQW9CLEdBQXBCO0VBRUEsSUFBSVIsd0RBQUosQ0FBU0ssR0FBVDtBQUVILENBUkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2JsZXN3b3JkLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUuanMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXdpbmRvdycpO1xuICAgIGNvbnN0IGN0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBnYW1lQ2FudmFzLndpZHRoID0gOTYwO1xuICAgIGdhbWVDYW52YXMuaGVpZ2h0ID0gNTQwO1xuXG4gICAgbmV3IEdhbWUoY3R4KVxuXG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZUNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ \"./src/scripts/platform.js\");\n\nclass Game {\n  constructor(ctx) {\n    let img = new Image();\n    img.src = \"assets/bg.png\";\n    console.log(img);\n    console.log(ctx.drawImage(img, 0, 0, 960, 540));\n    new _platform__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLENBQVc7RUFDdEJDLFdBQVcsQ0FBQ0MsR0FBRCxFQUFNO0lBRWIsSUFBSUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBVjtJQUNBRCxHQUFHLENBQUNFLEdBQUosR0FBVSxlQUFWO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxHQUFHLENBQUNNLFNBQUosQ0FBY0wsR0FBZCxFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixHQUF6QixFQUE2QixHQUE3QixDQUFaO0lBQ0EsSUFBSUosaURBQUosQ0FBYUcsR0FBYjtFQUNIOztBQVJxQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vYmxlc3dvcmQvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gXCJhc3NldHMvYmcucG5nXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGltZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCA5NjAsNTQwKSk7XG4gICAgICAgIG5ldyBQbGF0Zm9ybShjdHgpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsImltZyIsIkltYWdlIiwic3JjIiwiY29uc29sZSIsImxvZyIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Platform; }\n/* harmony export */ });\nclass Platform {\n  constructor(ctx) {\n    ctx.fillStyle = 'purple';\n    ctx.fillRect(0, 440, 960, 100);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBTixDQUFlO0VBQzFCQyxXQUFXLENBQUNDLEdBQUQsRUFBTTtJQUNiQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsUUFBaEI7SUFDQUQsR0FBRyxDQUFDRSxRQUFKLENBQWEsQ0FBYixFQUFlLEdBQWYsRUFBbUIsR0FBbkIsRUFBdUIsR0FBdkI7RUFDSDs7QUFKeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2JsZXN3b3JkLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanM/ODZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncHVycGxlJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsNDQwLDk2MCwxMDApXG4gICAgfVxufSJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2JsZXN3b3JkLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;