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

eval("// modal references\r\nconst overlay = document.getElementById(\"overlay\");\r\nconst signUpModal = document.getElementById(\"signUpModal\");\r\nconst logInModal = document.getElementById(\"logInModal\");\r\nconst logOutModal = document.getElementById(\"logOutModal\");\r\n\r\n// sign up modal controls\r\ndocument.getElementById(\"signUpModalBtn\").addEventListener(\"click\", () => {\r\n  signUpModal.classList.remove(\"hidden\");\r\n  overlay.style.backgroundColor = \"#232323B3\";\r\n});\r\ndocument.getElementById(\"closeSignUpModal\").addEventListener(\"click\", () => {\r\n  signUpModal.classList.add(\"hidden\");\r\n  overlay.style.backgroundColor = \"transparent\";\r\n});\r\n// log in modal controls\r\ndocument.getElementById(\"logInModalBtn\").addEventListener(\"click\", () => {\r\n  logInModal.classList.remove(\"hidden\");\r\n  overlay.style.backgroundColor = \"#232323B3\";\r\n});\r\ndocument.getElementById(\"closeLogInModalBtn\").addEventListener(\"click\", () => {\r\n  logInModal.classList.add(\"hidden\");\r\n  overlay.style.backgroundColor = \"transparent\";\r\n});\r\n// log out modal controls\r\ndocument.getElementById(\"logOutModalBtn\").addEventListener(\"click\", () => {\r\n  logOutModal.classList.remove(\"hidden\");\r\n  overlay.style.backgroundColor = \"#232323B3\";\r\n});\r\ndocument.getElementById(\"closeLogOutModalBtn\").addEventListener(\"click\", () => {\r\n  logOutModal.classList.add(\"hidden\");\r\n  overlay.style.backgroundColor = \"transparent\";\r\n});\r\n\n\n//# sourceURL=webpack://book-tracker/./src/index.js?");

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