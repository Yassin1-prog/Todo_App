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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\nclass createProject {\n    constructor(name) {\n        this.project = [];\n        this.name = name;\n    }\n\n    addProject(title, description, dueDate, priority) {\n        this.project.push(new _createTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority));   \n    }\n\n    getAmountTasks() {\n        return this.project.length;\n    }\n\n    getPriority() {\n        return this.project[0].getPriority();\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo_app/./src/createProject.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass createTodo {\n    constructor(title, description, date, priority) {\n        this.title = title;\n        this.description = description;\n        this.date = date;\n        this.priority = priority;\n        this.complete = false;\n    }\n\n    getPriority() {\n        return this.priority;\n    }\n\n    getTitle() {\n        return this.title;\n    }\n\n    getDate() {\n        return this.date;\n    }\n\n    getDescription() {\n        return this.description;\n    }\n\n\n    changePriority(priority) {\n        this.priority = priority;\n    }\n\n    sayHello() {\n        console.log(\"Set >  Horus\");\n    }\n\n    getStatus() {\n        return this.complete;\n    }\n\n    setStatus(status) {\n        this.complete = status;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n//# sourceURL=webpack://todo_app/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _loadProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadProject */ \"./src/loadProject\");\n\n\n\n\nconst projects = [];\nconst inbox = new _createProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Inbox');\nprojects.push(inbox);\n\nconst inbx = document.querySelector(\".inbox\");\ninbx.addEventListener(\"click\", () => {\n    (0,_loadProject__WEBPACK_IMPORTED_MODULE_2__.projectLoad)(projects[0]);\n    updateTasks(projects[0]);\n});\n\n\n\nconst dialog = document.querySelector(\"[data-modal]\");\nconst openButton = document.querySelector(\".addTask\");\nconst closeButton = document.querySelector(\".close\");\n\nconst cleanInput = document.querySelectorAll('[title], [description], [date], [priority]');\nconst taskHolder = document.querySelector('.tasks');\n\n\nconst title = document.querySelector('[title]');\nconst description = document.querySelector('[description]');\nconst date = document.querySelector('[date]');\nconst priority = document.querySelector('[priority]');\n\nopenButton.addEventListener(\"click\", () => {\n    dialog.showModal();\n});\n\ncloseButton.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    \n    let target;\n\n    const whichProject = document.querySelector('.title');\n\n    for(let i = 0; i < projects.length; i++) {\n        if(projects[i].name === whichProject.textContent) {\n             target = projects[i];\n        }\n    }\n\n    let flag = false;\n    for(let i = 0; i < target.project.length; i++) {\n        if(target.project[i].getTitle() == title.value) {\n            flag = true;\n            target.project[i].description = description.value;\n            target.project[i].date = date.value;\n            target.project[i].priority = priority.value;\n        }\n    }\n\n    if(!flag) {\n        target.addProject(title.value, description.value, date.value, priority.value);\n    }\n\n    updateTasks(target);\n\n    cleanInput.forEach( input => {\n         input.value = '';\n    });\n\n    dialog.close();\n});\n\n\nconst projectButton = document.querySelector('.addProject');\nconst inputContainer = document.querySelector('.inputContainer');\nconst projectName = document.createElement('input');\nconst list = document.querySelector('.list');\nprojectName.type = 'text';\nprojectName.name = 'project';\nprojectName.placeholder = 'name';\nconst confirmButton = document.createElement('button');\nconfirmButton.textContent = \"Confirm\";\nconfirmButton.classList.add('Confirm');\n\nprojectButton.addEventListener(\"click\", () => {\n    inputContainer.appendChild(projectName);\n    inputContainer.appendChild(confirmButton);\n});\n\n\nconfirmButton.addEventListener(\"click\", () => {\n    const createdProject = new _createProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName.value);\n    projects.push(createdProject);\n    inputContainer.innerHTML = '';\n    projectName.value = '';\n    updateProjects();\n});\n\nfunction updateProjects() {\n    list.innerHTML = '';\n    projects.forEach((project, index) => {\n\n        const newProject = document.createElement('button');\n        newProject.textContent = project.name;\n        newProject.classList.add(\"projectName\");\n        newProject.setAttribute(\"data-index\", index);\n\n        if(index!==0) list.appendChild(newProject);\n\n        newProject.addEventListener(\"click\",  () => {\n            let rowIndex = parseInt(newProject.getAttribute(\"data-index\"));\n            (0,_loadProject__WEBPACK_IMPORTED_MODULE_2__.projectLoad)(projects[rowIndex]);\n            updateTasks(projects[rowIndex]);\n        });\n\n    });\n}\n\nfunction updateTasks(project) {\n    taskHolder.textContent = '';\n    \n    project.project.forEach((task, index) => {\n        const btn = document.createElement('button');\n        btn.textContent = task.getTitle();\n        btn.setAttribute(\"data-index\", index);\n        btn.classList.add('createdButton');\n        \n        if(task.getPriority() === \"low\") {\n            btn.style.borderLeft = '4px solid green';\n        }\n        else if(task.getPriority() === \"high\") {\n            btn.style.borderLeft = '4px solid red'\n        }\n        else {\n            btn.style.borderLeft = '4px solid orange'\n        }\n\n        const dueDate = document.createElement('div');\n        dueDate.textContent = task.getDate();\n        dueDate.classList.add('datee');\n\n        const removeButton = document.createElement('button');\n        removeButton.textContent = 'remove';\n        removeButton.classList.add('move');\n        removeButton.setAttribute(\"data-index\", index);\n\n        taskHolder.appendChild(btn);\n        taskHolder.appendChild(dueDate);\n        taskHolder.appendChild(removeButton);\n\n        btn.addEventListener(\"click\", () => {\n            let rowIndex = parseInt(btn.getAttribute(\"data-index\"));\n            loadTaskInfo(project.project[rowIndex]);\n        });\n\n        removeButton.addEventListener(\"click\", () =>  {\n            let colIndex = parseInt(removeButton.getAttribute(\"data-index\"));\n            project.project.splice(colIndex, 1);\n            updateTasks(project);\n        });\n    });  \n}\n\nfunction loadTaskInfo(task) {\n    dialog.showModal();\n    title.value = task.getTitle();\n    description.value = task.getDescription();\n    date.value = task.getDate();\n    priority.value = task.getPriority();\n\n}\n\n\nwindow.addEventListener('click', (e) => {\n    if (e.target === dialog) {\n      dialog.close();\n    }\n});\n\n\n\n//# sourceURL=webpack://todo_app/./src/index.js?");

/***/ }),

/***/ "./src/loadProject":
/*!*************************!*\
  !*** ./src/loadProject ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectLoad: () => (/* binding */ projectLoad)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\n\n\n\nfunction projectLoad(project) {\n    const main = document.querySelector('.tasks');\n    const title = document.querySelector('.title');\n    main.textContent = '';\n    title.textContent = project.name;\n}\n\n\n\n\n\n//# sourceURL=webpack://todo_app/./src/loadProject?");

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