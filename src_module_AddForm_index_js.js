"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpoc_mf_todo_remote_add_form"] = self["webpackChunkpoc_mf_todo_remote_add_form"] || []).push([["src_module_AddForm_index_js"],{

/***/ "./src/module/AddForm/index.js":
/*!*************************************!*\
  !*** ./src/module/AddForm/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/module/AddForm/style.js\");\n\n\n\nfunction AddForm(props) {\n  const {\n    error,\n    handleAdd\n  } = props;\n  const [todoTitle, setTodoTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const handleChange = e => {\n    setTodoTitle(e?.target?.value);\n  };\n  const handleAddClick = e => {\n    const newData = {\n      userId: new Date().getTime(),\n      id: new Date().getTime(),\n      title: todoTitle,\n      completed: false,\n      isDummy: true\n    };\n    handleAdd(e, newData);\n    setTodoTitle(\"\");\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.AddFormContainer, {\n    onSubmit: () => {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Add todo form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.InputFieldWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.TodoInputField, {\n    type: \"text\",\n    value: todoTitle,\n    placeholder: \"Enter Text Here\",\n    onChange: handleChange\n  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.ErrorContainer, null, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.AddButton, {\n    onClick: handleAddClick\n  }, \"Add\"));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddForm);\n\n//# sourceURL=webpack://poc_mf_todo_remote_add_form/./src/module/AddForm/index.js?");

/***/ }),

/***/ "./src/module/AddForm/style.js":
/*!*************************************!*\
  !*** ./src/module/AddForm/style.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddButton: () => (/* binding */ AddButton),\n/* harmony export */   AddFormContainer: () => (/* binding */ AddFormContainer),\n/* harmony export */   ErrorContainer: () => (/* binding */ ErrorContainer),\n/* harmony export */   InputFieldWrapper: () => (/* binding */ InputFieldWrapper),\n/* harmony export */   TodoInputField: () => (/* binding */ TodoInputField)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst AddFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form`\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n    width: 100%;\n    color: white;\n    gap: 15px;\n`;\nconst InputFieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n`;\nconst TodoInputField = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input`\n    padding: 10px;\n    width: 50%;\n`;\nconst ErrorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span`\n    color: red;\n`;\nconst AddButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n    text-align: center;\n    padding: 10px;\n    background-color: rgba(144, 238, 144, 0.6) ;\n    border: 2px solid white;\n    margin-left: 5px;\n    width: 10%;\n    min-width: 70px;\n    cursor: pointer;\n    border-radius: 5px;\n    color: white;\n`;\n\n//# sourceURL=webpack://poc_mf_todo_remote_add_form/./src/module/AddForm/style.js?");

/***/ })

}]);