/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// open modals\r\nconst overlay = document.getElementById(\"overlay\");\r\nconst closeSignUpModal = document.getElementById(\"closeSignUpModal\");\r\nconst signUp = document.getElementById(\"signUpModal\");\r\nconst signUpBtn = document.getElementById(\"signUpModalBtn\");\r\n\r\ncloseSignUpModal.addEventListener(\"click\", () => {\r\n  console.log(`clicked`);\r\n  signUp.classList.add(\"hidden\");\r\n  overlay.style.backgroundColor = \"transparent\";\r\n});\r\n\r\nsignUpBtn.addEventListener(\"click\", () => {\r\n  console.log(\"clicked\");\r\n  signUp.classList.remove(\"hidden\");\r\n  overlay.style.backgroundColor = \"#232323B3\";\r\n});\r\n\n\n//# sourceURL=webpack://book-tracker/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;