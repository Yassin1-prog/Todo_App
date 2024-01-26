/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\nclass createProject {\n    constructor() {\n        this.project = [];\n    }\n\n    addProject(title, description, dueDate, priority) {\n        this.project.push(new _createTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority));   \n    }\n\n    getAmountTasks() {\n        return this.project.length;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo_app/./src/createProject.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass createTodo {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.complete = false;\n    }\n\n    getPriority() {\n        return this.priority;\n    }\n\n    changePriority(priority) {\n        this.priority = priority;\n    }\n\n    sayHello() {\n        console.log(\"Set >  Horus\");\n    }\n\n    getStatus() {\n        return this.complete;\n    }\n\n    setStatus(status) {\n        this.complete = status;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n//# sourceURL=webpack://todo_app/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\n\nconst projects = [];\nconst inbox = new _createProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nprojects.push(inbox);\n\nconst dialog = document.querySelector(\"[data-modal]\");\nconst openButton = document.querySelector(\".addTask\");\nconst closeButton = document.querySelector(\".close\");\n\nconst cleanInput = document.querySelectorAll('[title], [description], [date], [priority]');\nconst taskHolder = document.querySelector('.tasks');\n\n\nconst title = document.querySelector('[title]');\nconst description = document.querySelector('[description]');\nconst date = document.querySelector('[date]');\nconst priority = document.querySelector('[priority]');\n\nopenButton.addEventListener(\"click\", () => {\n    dialog.showModal();\n});\n\ncloseButton.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n\n    //const task = new createTodo(title, description, date, priority.value);\n    projects[0].addProject(title, description, date, priority.value);\n    \n\n    const btn = document.createElement('button');\n    btn.textContent = title.value;\n    btn.classList.add('createdButton');\n\n    taskHolder.appendChild(btn);\n\n    cleanInput.forEach( input => {\n         input.value = '';\n    });\n\n    dialog.close();\n});\n\n\nconst projectButton = document.querySelector('.addProject');\nconst inputContainer = document.querySelector('.inputContainer');\nconst projectName = document.createElement('input');\nconst list = document.querySelector('.list');\nprojectName.type = 'text';\nprojectName.placeholder = 'name';\nconst confirmButton = document.createElement('button');\nconfirmButton.textContent = \"Confirm\";\nconfirmButton.classList.add('Confirm');\n\nprojectButton.addEventListener(\"click\", () => {\n    inputContainer.appendChild(projectName);\n    inputContainer.appendChild(confirmButton);\n\n});\n\nconfirmButton.addEventListener(\"click\", () => {\n    const newProject = document.createElement('div');\n    newProject.textContent = projectName.value;\n    list.appendChild(newProject);\n    inputContainer.innerHTML = '';\n    projectName.value = '';\n});\n\n//# sourceURL=webpack://todo_app/./src/index.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;