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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view.js */ \"./src/scripts/view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const gameCanvas = document.getElementById('game-window');\n  const ctx = gameCanvas.getContext('2d');\n  gameCanvas.width = 960;\n  gameCanvas.height = 540;\n  new _scripts_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gameCanvas, ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQW5CO0VBQ0EsTUFBTUMsR0FBRyxHQUFHRixVQUFVLENBQUNHLFVBQVgsQ0FBc0IsSUFBdEIsQ0FBWjtFQUNBSCxVQUFVLENBQUNJLEtBQVgsR0FBbUIsR0FBbkI7RUFDQUosVUFBVSxDQUFDSyxNQUFYLEdBQW9CLEdBQXBCO0VBRUEsSUFBSVIsd0RBQUosQ0FBU0csVUFBVCxFQUFxQkUsR0FBckI7QUFFSCxDQVJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ibGVzd29yZC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lLmpzJ1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9zY3JpcHRzL3ZpZXcuanMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXdpbmRvdycpO1xuICAgIGNvbnN0IGN0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBnYW1lQ2FudmFzLndpZHRoID0gOTYwO1xuICAgIGdhbWVDYW52YXMuaGVpZ2h0ID0gNTQwO1xuXG4gICAgbmV3IFZpZXcoZ2FtZUNhbnZhcywgY3R4KVxuXG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWVDYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/credits.js":
/*!********************************!*\
  !*** ./src/scripts/credits.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Credits; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/scripts/view.js\");\n\nclass Credits {\n  constructor() {\n    let canvas = document.getElementById(\"game-window\");\n    let ctx = canvas.getContext('2d');\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    this.createButton({\n      id: \"Back\",\n      html: \"Back\"\n    });\n    let body = document.createElement('Text');\n    body.setAttribute(\"id\", \"CreditsBody\");\n    document.body.appendChild(body);\n    body.innerHTML = \"Avisek AND THE WORLD\";\n  }\n\n  createButton(values) {\n    let txt = document.createElement(\"Text\");\n    txt.setAttribute(\"id\", values.id);\n    document.body.appendChild(txt);\n    txt.innerHTML = values.html;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jcmVkaXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxPQUFOLENBQWM7RUFDekJDLFdBQVcsR0FBRztJQUNWLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWI7SUFDQSxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0lBQ0FELEdBQUcsQ0FBQ0UsU0FBSixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBbUJMLE1BQU0sQ0FBQ00sS0FBMUIsRUFBaUNOLE1BQU0sQ0FBQ08sTUFBeEM7SUFFQUosR0FBRyxDQUFDSyxTQUFKLEdBQWdCLE9BQWhCO0lBQ0FMLEdBQUcsQ0FBQ00sUUFBSixDQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCVCxNQUFNLENBQUNNLEtBQXhCLEVBQThCTixNQUFNLENBQUNPLE1BQXJDO0lBRUEsS0FBS0csWUFBTCxDQUFrQjtNQUFDQyxFQUFFLEVBQUUsTUFBTDtNQUFhQyxJQUFJLEVBQUU7SUFBbkIsQ0FBbEI7SUFFQSxJQUFJQyxJQUFJLEdBQUdaLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixNQUF2QixDQUFYO0lBQ0FELElBQUksQ0FBQ0UsWUFBTCxDQUFrQixJQUFsQixFQUF3QixhQUF4QjtJQUNBZCxRQUFRLENBQUNZLElBQVQsQ0FBY0csV0FBZCxDQUEwQkgsSUFBMUI7SUFDQUEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCLHNCQUFqQjtFQUVIOztFQUVEUCxZQUFZLENBQUNRLE1BQUQsRUFBUztJQUNqQixJQUFJQyxHQUFHLEdBQUdsQixRQUFRLENBQUNhLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBVjtJQUNBSyxHQUFHLENBQUNKLFlBQUosQ0FBaUIsSUFBakIsRUFBdUJHLE1BQU0sQ0FBQ1AsRUFBOUI7SUFDQVYsUUFBUSxDQUFDWSxJQUFULENBQWNHLFdBQWQsQ0FBMEJHLEdBQTFCO0lBQ0FBLEdBQUcsQ0FBQ0YsU0FBSixHQUFnQkMsTUFBTSxDQUFDTixJQUF2QjtFQUNIOztBQXZCd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2JsZXN3b3JkLy4vc3JjL3NjcmlwdHMvY3JlZGl0cy5qcz82MjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gJy4vdmlldydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlZGl0cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtd2luZG93XCIpO1xuICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLDAsY2FudmFzLndpZHRoLGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uKHtpZDogXCJCYWNrXCIsIGh0bWw6IFwiQmFja1wifSlcblxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RleHQnKTtcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkNyZWRpdHNCb2R5XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9IFwiQXZpc2VrIEFORCBUSEUgV09STERcIlxuXG4gICAgfVxuXG4gICAgY3JlYXRlQnV0dG9uKHZhbHVlcykge1xuICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRleHRcIik7XG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB2YWx1ZXMuaWQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR4dCk7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSB2YWx1ZXMuaHRtbDtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiVmlldyIsIkNyZWRpdHMiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNyZWF0ZUJ1dHRvbiIsImlkIiwiaHRtbCIsImJvZHkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJ2YWx1ZXMiLCJ0eHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/credits.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ \"./src/scripts/platform.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/scripts/player.js\");\n\n\nclass Game {\n  constructor(ctx) {\n    new _platform_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    new _player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, {\n      x: 100,\n      y: 200\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNRSxJQUFOLENBQVc7RUFDdEJDLFdBQVcsQ0FBQ0MsR0FBRCxFQUFNO0lBQ2IsSUFBSUosb0RBQUosQ0FBYUksR0FBYjtJQUNBLElBQUlILGtEQUFKLENBQVdHLEdBQVgsRUFBZ0I7TUFBQ0MsQ0FBQyxFQUFFLEdBQUo7TUFBU0MsQ0FBQyxFQUFFO0lBQVosQ0FBaEI7RUFDSDs7QUFKcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2JsZXN3b3JkLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtLmpzJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIG5ldyBQbGF0Zm9ybShjdHgpO1xuICAgICAgICBuZXcgUGxheWVyKGN0eCwge3g6IDEwMCwgeTogMjAwfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIlBsYXRmb3JtIiwiUGxheWVyIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY3R4IiwieCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/help.js":
/*!*****************************!*\
  !*** ./src/scripts/help.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Help; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/scripts/view.js\");\n\nclass Help {\n  constructor() {\n    let canvas = document.getElementById(\"game-window\");\n    let ctx = canvas.getContext('2d');\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    this.createButton({\n      id: \"Back\",\n      html: \"Back\"\n    });\n    let body = document.createElement('Text');\n    body.setAttribute(\"id\", \"HelpBody\");\n    document.body.appendChild(body);\n    body.innerHTML = \"NO HELP YET\";\n  }\n\n  createButton(values) {\n    let txt = document.createElement(\"Text\");\n    txt.setAttribute(\"id\", values.id);\n    document.body.appendChild(txt);\n    txt.innerHTML = values.html;\n  }\n\n}\ndocument.addEventListener(\"click\", el => {\n  let txt = el.target;\n  let canvas = document.getElementById('game-window');\n  let ctx = canvas.getContext('2d');\n\n  if (txt.tagName === \"TEXT\") {\n    if (txt.id === \"Back\") {\n      loadView(canvas, ctx);\n    }\n  }\n});\n\nfunction loadView(canvas, ctx) {\n  if (document.getElementById(\"HelpBody\")) {\n    document.getElementById(\"HelpBody\").remove();\n  }\n\n  if (document.getElementById(\"CreditsBody\")) {\n    document.getElementById(\"CreditsBody\").remove();\n  }\n\n  document.getElementById(\"Back\").remove();\n  new _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWxwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLENBQVc7RUFDdEJDLFdBQVcsR0FBRztJQUNWLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWI7SUFDQSxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0lBQ0FELEdBQUcsQ0FBQ0UsU0FBSixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBbUJMLE1BQU0sQ0FBQ00sS0FBMUIsRUFBaUNOLE1BQU0sQ0FBQ08sTUFBeEM7SUFFQUosR0FBRyxDQUFDSyxTQUFKLEdBQWdCLE9BQWhCO0lBQ0FMLEdBQUcsQ0FBQ00sUUFBSixDQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCVCxNQUFNLENBQUNNLEtBQXhCLEVBQThCTixNQUFNLENBQUNPLE1BQXJDO0lBRUEsS0FBS0csWUFBTCxDQUFrQjtNQUFDQyxFQUFFLEVBQUUsTUFBTDtNQUFhQyxJQUFJLEVBQUU7SUFBbkIsQ0FBbEI7SUFFQSxJQUFJQyxJQUFJLEdBQUdaLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixNQUF2QixDQUFYO0lBQ0FELElBQUksQ0FBQ0UsWUFBTCxDQUFrQixJQUFsQixFQUF3QixVQUF4QjtJQUNBZCxRQUFRLENBQUNZLElBQVQsQ0FBY0csV0FBZCxDQUEwQkgsSUFBMUI7SUFDQUEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCLGFBQWpCO0VBRUg7O0VBRURQLFlBQVksQ0FBQ1EsTUFBRCxFQUFTO0lBQ2pCLElBQUlDLEdBQUcsR0FBR2xCLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixNQUF2QixDQUFWO0lBQ0FLLEdBQUcsQ0FBQ0osWUFBSixDQUFpQixJQUFqQixFQUF1QkcsTUFBTSxDQUFDUCxFQUE5QjtJQUNBVixRQUFRLENBQUNZLElBQVQsQ0FBY0csV0FBZCxDQUEwQkcsR0FBMUI7SUFDQUEsR0FBRyxDQUFDRixTQUFKLEdBQWdCQyxNQUFNLENBQUNOLElBQXZCO0VBQ0g7O0FBdkJxQjtBQTBCMUJYLFFBQVEsQ0FBQ21CLGdCQUFULENBQTBCLE9BQTFCLEVBQW9DQyxFQUFELElBQVE7RUFDdkMsSUFBSUYsR0FBRyxHQUFHRSxFQUFFLENBQUNDLE1BQWI7RUFDQSxJQUFJdEIsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBYjtFQUNBLElBQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7O0VBRUEsSUFBSWUsR0FBRyxDQUFDSSxPQUFKLEtBQWdCLE1BQXBCLEVBQTRCO0lBQ3hCLElBQUlKLEdBQUcsQ0FBQ1IsRUFBSixLQUFXLE1BQWYsRUFBdUI7TUFBQ2EsUUFBUSxDQUFDeEIsTUFBRCxFQUFTRyxHQUFULENBQVI7SUFBc0I7RUFDakQ7QUFDSixDQVJEOztBQVVBLFNBQVNxQixRQUFULENBQWtCeEIsTUFBbEIsRUFBMEJHLEdBQTFCLEVBQStCO0VBRTNCLElBQUlGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFKLEVBQXlDO0lBQ3JDRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0N1QixNQUFwQztFQUNIOztFQUVELElBQUl4QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBSixFQUE0QztJQUN4Q0QsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDdUIsTUFBdkM7RUFDSDs7RUFFRHhCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ3VCLE1BQWhDO0VBQ0EsSUFBSTVCLDZDQUFKLENBQVNHLE1BQVQsRUFBaUJHLEdBQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2JsZXN3b3JkLy4vc3JjL3NjcmlwdHMvaGVscC5qcz8zYjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gJy4vdmlldydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtd2luZG93XCIpO1xuICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLDAsY2FudmFzLndpZHRoLGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uKHtpZDogXCJCYWNrXCIsIGh0bWw6IFwiQmFja1wifSlcblxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RleHQnKTtcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkhlbHBCb2R5XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9IFwiTk8gSEVMUCBZRVRcIlxuXG4gICAgfVxuXG4gICAgY3JlYXRlQnV0dG9uKHZhbHVlcykge1xuICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRleHRcIik7XG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB2YWx1ZXMuaWQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR4dCk7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSB2YWx1ZXMuaHRtbDtcbiAgICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZWwpID0+IHtcbiAgICBsZXQgdHh0ID0gZWwudGFyZ2V0O1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS13aW5kb3cnKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBpZiAodHh0LnRhZ05hbWUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgIGlmICh0eHQuaWQgPT09IFwiQmFja1wiKSB7bG9hZFZpZXcoY2FudmFzLCBjdHgpfSBcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBsb2FkVmlldyhjYW52YXMsIGN0eCkge1xuICAgIFxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkhlbHBCb2R5XCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiSGVscEJvZHlcIikucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ3JlZGl0c0JvZHlcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDcmVkaXRzQm9keVwiKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkJhY2tcIikucmVtb3ZlKCk7XG4gICAgbmV3IFZpZXcoY2FudmFzLCBjdHgpO1xufSJdLCJuYW1lcyI6WyJWaWV3IiwiSGVscCIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY3JlYXRlQnV0dG9uIiwiaWQiLCJodG1sIiwiYm9keSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInZhbHVlcyIsInR4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbCIsInRhcmdldCIsInRhZ05hbWUiLCJsb2FkVmlldyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/help.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Platform; }\n/* harmony export */ });\nclass Platform {\n  constructor(ctx) {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 960, 540);\n    ctx.fillStyle = 'purple';\n    ctx.fillRect(0, 440, 960, 100);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBTixDQUFlO0VBQzFCQyxXQUFXLENBQUNDLEdBQUQsRUFBTTtJQUNiQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7SUFDQUQsR0FBRyxDQUFDRSxRQUFKLENBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsR0FBakIsRUFBcUIsR0FBckI7SUFFQUYsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLFFBQWhCO0lBQ0FELEdBQUcsQ0FBQ0UsUUFBSixDQUFhLENBQWIsRUFBZSxHQUFmLEVBQW1CLEdBQW5CLEVBQXVCLEdBQXZCO0VBQ0g7O0FBUHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ibGVzd29yZC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzPzg2ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwwLDk2MCw1NDApO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncHVycGxlJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsNDQwLDk2MCwxMDApXG4gICAgfVxufSJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(ctx, position) {\n    this.ctx = ctx;\n    this.position = position;\n    this.draw();\n  }\n\n  draw() {\n    console.log(\"WWE HERE\");\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(this.position.x, this.position.y, 80, 200);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU4sQ0FBYTtFQUN4QkMsV0FBVyxDQUFDQyxHQUFELEVBQU1DLFFBQU4sRUFBZ0I7SUFDdkIsS0FBS0QsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7SUFDQSxLQUFLQyxJQUFMO0VBQ0g7O0VBRURBLElBQUksR0FBRztJQUNIQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0lBQ0EsS0FBS0osR0FBTCxDQUFTSyxTQUFULEdBQXFCLE9BQXJCO0lBQ0EsS0FBS0wsR0FBTCxDQUFTTSxRQUFULENBQWtCLEtBQUtMLFFBQUwsQ0FBY00sQ0FBaEMsRUFBbUMsS0FBS04sUUFBTCxDQUFjTyxDQUFqRCxFQUFvRCxFQUFwRCxFQUF1RCxHQUF2RDtFQUNIOztBQVh1QiIsInNvdXJjZXMiOlsid2VicGFjazovL25vYmxlc3dvcmQvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldXRSBIRVJFXCIpXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDgwLDIwMCk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwiY3R4IiwicG9zaXRpb24iLCJkcmF3IiwiY29uc29sZSIsImxvZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _help_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.js */ \"./src/scripts/help.js\");\n/* harmony import */ var _credits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credits.js */ \"./src/scripts/credits.js\");\n\n\n\nclass View {\n  constructor(canvas, ctx) {\n    this.ctx = ctx;\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.beginPath();\n    ctx.fillStyle = \"grey\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    this.createButton({\n      id: \"SP\",\n      html: \"Singleplayer\"\n    });\n    this.createButton({\n      id: \"MP\",\n      html: \"Multiplayer\"\n    });\n    this.createButton({\n      id: \"Help\",\n      html: \"Help\"\n    });\n    this.createButton({\n      id: \"Credits\",\n      html: \"Credits\"\n    });\n  }\n\n  createButton(values) {\n    let txt = document.createElement(\"Text\");\n    txt.setAttribute(\"id\", values.id);\n    document.body.appendChild(txt);\n    txt.innerHTML = values.html;\n  }\n\n}\ndocument.addEventListener(\"click\", el => {\n  let txt = el.target;\n  let ctx = document.getElementById(\"game-window\").getContext('2d');\n\n  if (txt.tagName === \"TEXT\") {\n    if (txt.id === \"SP\") {\n      loadSinglePlayer(ctx);\n    } else if (txt.id === \"MP\") {\n      loadMultiPlayer(ctx);\n    } else if (txt.id === \"Help\") {\n      loadHelp(ctx);\n    } else if (txt.id === \"Credits\") {\n      loadCredits(ctx);\n    }\n  }\n});\n\nfunction loadSinglePlayer(ctx) {\n  deleteButtons();\n  new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n}\n\nfunction loadMultiPlayer(ctx) {\n  deleteButtons();\n  new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n}\n\nfunction loadHelp(ctx) {\n  deleteButtons();\n  new _help_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n}\n\nfunction loadCredits(ctx) {\n  deleteButtons();\n  new _credits_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n}\n\nfunction deleteButtons() {\n  document.getElementById(\"MP\").remove();\n  document.getElementById(\"SP\").remove();\n  document.getElementById(\"Help\").remove();\n  document.getElementById(\"Credits\").remove();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjRCLGFBQWE7RUFDYixJQUFJaEMsbURBQUo7QUFDSDs7QUFFRCxTQUFTZ0MsYUFBVCxHQUF3QjtFQUNwQmhCLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixJQUF4QixFQUE4QlEsTUFBOUI7RUFDQWpCLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixJQUF4QixFQUE4QlEsTUFBOUI7RUFDQWpCLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ1EsTUFBaEM7RUFDQWpCLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ1EsTUFBbkM7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25vYmxlc3dvcmQvLi9zcmMvc2NyaXB0cy92aWV3LmpzPzgwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lLmpzJ1xuaW1wb3J0IEhlbHAgZnJvbSAnLi9oZWxwLmpzJ1xuaW1wb3J0IENyZWRpdHMgZnJvbSAnLi9jcmVkaXRzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JleVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbih7aWQ6IFwiU1BcIiwgaHRtbDogXCJTaW5nbGVwbGF5ZXJcIn0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbih7aWQ6IFwiTVBcIiwgaHRtbDogXCJNdWx0aXBsYXllclwifSlcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b24oe2lkOiBcIkhlbHBcIiwgaHRtbDogXCJIZWxwXCJ9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b24oe2lkOiBcIkNyZWRpdHNcIiwgaHRtbDogXCJDcmVkaXRzXCJ9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVCdXR0b24odmFsdWVzKSB7XG4gICAgICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVGV4dFwiKTtcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImlkXCIsIHZhbHVlcy5pZCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgICAgdHh0LmlubmVySFRNTCA9IHZhbHVlcy5odG1sO1xuICAgIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlbCkgPT4ge1xuICAgIGxldCB0eHQgPSBlbC50YXJnZXQ7XG4gICAgbGV0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS13aW5kb3dcIikuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGlmICh0eHQudGFnTmFtZSA9PT0gXCJURVhUXCIpIHtcbiAgICAgICAgaWYgKHR4dC5pZCA9PT0gXCJTUFwiKSB7bG9hZFNpbmdsZVBsYXllcihjdHgpfSBcbiAgICAgICAgZWxzZSBpZiAodHh0LmlkID09PSBcIk1QXCIpIHtsb2FkTXVsdGlQbGF5ZXIoY3R4KX1cbiAgICAgICAgZWxzZSBpZiAodHh0LmlkID09PSBcIkhlbHBcIikge2xvYWRIZWxwKGN0eCl9XG4gICAgICAgIGVsc2UgaWYgKHR4dC5pZCA9PT0gXCJDcmVkaXRzXCIpIHtsb2FkQ3JlZGl0cyhjdHgpfVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGxvYWRTaW5nbGVQbGF5ZXIoY3R4KSB7XG4gICAgZGVsZXRlQnV0dG9ucygpO1xuICAgIG5ldyBHYW1lKGN0eCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNdWx0aVBsYXllcihjdHgpIHtcbiAgICBkZWxldGVCdXR0b25zKCk7XG4gICAgbmV3IEdhbWUoY3R4KTtcbn1cblxuZnVuY3Rpb24gbG9hZEhlbHAoY3R4KSB7XG4gICAgZGVsZXRlQnV0dG9ucygpO1xuICAgIG5ldyBIZWxwKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDcmVkaXRzKGN0eCkge1xuICAgIGRlbGV0ZUJ1dHRvbnMoKTtcbiAgICBuZXcgQ3JlZGl0cygpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbnMoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1QXCIpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU1BcIikucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJIZWxwXCIpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ3JlZGl0c1wiKS5yZW1vdmUoKTtcbn0iXSwibmFtZXMiOlsiR2FtZSIsIkhlbHAiLCJDcmVkaXRzIiwiVmlldyIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNyZWF0ZUJ1dHRvbiIsImlkIiwiaHRtbCIsInZhbHVlcyIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbCIsInRhcmdldCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInRhZ05hbWUiLCJsb2FkU2luZ2xlUGxheWVyIiwibG9hZE11bHRpUGxheWVyIiwibG9hZEhlbHAiLCJsb2FkQ3JlZGl0cyIsImRlbGV0ZUJ1dHRvbnMiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

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