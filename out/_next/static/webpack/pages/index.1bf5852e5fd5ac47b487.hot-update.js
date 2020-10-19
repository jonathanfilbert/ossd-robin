webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_assets_MainLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/assets/MainLogo */ \"./pages/assets/MainLogo.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _DescriptionSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DescriptionSection */ \"./components/DescriptionSection.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jonathanfilbert/Documents/ossd/ossd-robin/components/Layout.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar LayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Layout__LayoutWrapper\",\n  componentId: \"sc-1muq1h-0\"\n})([\"background-color:#f9fbfe;\"]);\n_c = LayoutWrapper;\n\nvar Layout = function Layout(_ref) {\n  var children = _ref.children;\n  return __jsx(LayoutWrapper, {\n    className: \"main__bold w-screen h-screen flex flex-col relative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"absolute top-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/images/fasilkom.png\",\n    className: \"  h-20 w-auto \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 h-12 md:h-16 flex flex-row justify-center  pt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(_pages_assets_MainLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \" max-h-full w-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })), children, __jsx(\"div\", {\n    className: \"main__text text-muted w-100 text-center pb-2 text-xs px-2 flex flex-col flex-1 justify-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"#info\",\n    className: \"text-lg mt-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Learn More\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Part of the Open Source Initiative of The Faculty of Computer Science\", __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"University of Indonesia\"))), __jsx(_DescriptionSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c2 = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LayoutWrapper\");\n$RefreshReg$(_c2, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzZhOTMiXSwibmFtZXMiOlsiTGF5b3V0V3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUNBQW5CO0tBQU1GLGE7O0FBSU4sSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBK0I7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQzVDLFNBQ0UsTUFBQyxhQUFEO0FBQWUsYUFBUyxFQUFDLHFEQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLDZCQUFUO0FBQXVDLGFBQVMsRUFBQyxnQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyx1REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFVLGFBQVMsRUFBQyxvQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPR0EsUUFQSCxFQVFFO0FBQUssYUFBUyxFQUFDLGdHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxPQUFSO0FBQWdCLGFBQVMsRUFBQyxjQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLENBSkYsQ0FSRixFQWlCRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERjtBQXFCRCxDQXRCRDs7TUFBTUQsTTtBQXdCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5Mb2dvIGZyb20gJy4uL3BhZ2VzL2Fzc2V0cy9NYWluTG9nbyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBEZXNjcmlwdGlvblNlY3Rpb24gZnJvbSAnLi9EZXNjcmlwdGlvblNlY3Rpb24nO1xuXG50eXBlIExheW91dFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgTGF5b3V0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmU7XG5gO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRXcmFwcGVyIGNsYXNzTmFtZT1cIm1haW5fX2JvbGQgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Zhc2lsa29tLnBuZ1wiIGNsYXNzTmFtZT1cIiAgaC0yMCB3LWF1dG8gXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBoLTEyIG1kOmgtMTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciAgcHQtM1wiPlxuICAgICAgICA8TWFpbkxvZ28gY2xhc3NOYW1lPVwiIG1heC1oLWZ1bGwgdy1hdXRvXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX190ZXh0IHRleHQtbXV0ZWQgdy0xMDAgdGV4dC1jZW50ZXIgcGItMiB0ZXh0LXhzIHB4LTIgZmxleCBmbGV4LWNvbCBmbGV4LTEganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjaW5mb1wiIGNsYXNzTmFtZT1cInRleHQtbGcgbXQtNFwiPlxuICAgICAgICAgIExlYXJuIE1vcmVcbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFBhcnQgb2YgdGhlIE9wZW4gU291cmNlIEluaXRpYXRpdmUgb2YgVGhlIEZhY3VsdHkgb2YgQ29tcHV0ZXIgU2NpZW5jZVxuICAgICAgICAgIDxkaXY+VW5pdmVyc2l0eSBvZiBJbmRvbmVzaWE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEZXNjcmlwdGlvblNlY3Rpb24gLz5cbiAgICA8L0xheW91dFdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ })

})