webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_GradientAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/GradientAsset */ \"./pages/assets/GradientAsset.tsx\");\n/* harmony import */ var _assets_MainLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/MainLogo */ \"./pages/assets/MainLogo.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jonathanfilbert/Documents/ossd/ossd-robin/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__Wrapper\",\n  componentId: \"sc-1o4ef37-0\"\n})([\"background-color:#f9fbfe;@keyframes spin{from{transform:rotate(0deg);opacity:1;}to{transform:rotate(360deg);opacity:0.2;}}.spin-slowly{animation:spin 10s linear infinite;animation-direction:alternate;}\"]);\n_c = Wrapper;\n\nvar Index = function Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  var handleLogin = function handleLogin() {\n    router.push('/meet');\n  };\n\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"uimeet | Interactive Jitsi Client\")), __jsx(\"div\", {\n    className: \"main__bold w-screen h-screen flex  flex-col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 h-12 md:h-16 flex flex-row justify-center  pt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(_assets_MainLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \" max-h-full w-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 flex flex-row items-center justify-center h-64 md:h-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(_assets_GradientAsset__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"max-h-full w-auto spin-slowly\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"Meetings have never been easier.\"), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center mt-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: function onClick() {\n      return handleLogin();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"SSO LOGIN\")), __jsx(\"div\", {\n    className: \"main__text text-muted w-100 text-center absolute bottom-0 left-0 right-0 pb-2 text-xs px-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \"Part of the Open Source Initiative of The Faculty of Computer Science\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"University of Indonesia\"))));\n};\n\n_s(Index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTG9naW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaU5BQWI7S0FBTUYsTzs7QUFvQk4sSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZLE9BQVo7QUFDRCxHQUZEOztBQUdBLFNBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBVSxhQUFTLEVBQUMsb0JBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsZ0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBZSxhQUFTLEVBQUMsK0JBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsZ0dBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FQRixFQVVFO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUQsV0FBVyxFQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FWRixFQWFFO0FBQUssYUFBUyxFQUFDLDRGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFMRixDQWJGLENBSkYsQ0FERjtBQTRCRCxDQWpDRDs7R0FBTUgsSztVQUNXRSxxRDs7O01BRFhGLEs7QUFtQ1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBHcmFkaWVudEFzc2V0IGZyb20gJy4vYXNzZXRzL0dyYWRpZW50QXNzZXQnO1xuaW1wb3J0IE1haW5Mb2dvIGZyb20gJy4vYXNzZXRzL01haW5Mb2dvJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmZTtcblxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgb3BhY2l0eTogMC4yO1xuICAgIH1cbiAgfVxuXG4gIC5zcGluLXNsb3dseSB7XG4gICAgYW5pbWF0aW9uOiBzcGluIDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICB9XG5gO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvbWVldCcpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT51aW1lZXQgfCBJbnRlcmFjdGl2ZSBKaXRzaSBDbGllbnQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19ib2xkIHctc2NyZWVuIGgtc2NyZWVuIGZsZXggIGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgaC0xMiBtZDpoLTE2IGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgIHB0LTNcIj5cbiAgICAgICAgICA8TWFpbkxvZ28gY2xhc3NOYW1lPVwiIG1heC1oLWZ1bGwgdy1hdXRvXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02NCBtZDpoLWF1dG9cIj5cbiAgICAgICAgICA8R3JhZGllbnRBc3NldCBjbGFzc05hbWU9XCJtYXgtaC1mdWxsIHctYXV0byBzcGluLXNsb3dseVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbWFpbl9fbm9ybWFsIHRleHQtM3hsIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIHB4LTYgbWQ6cHgtMCBcIj5cbiAgICAgICAgICBNZWV0aW5ncyBoYXZlIG5ldmVyIGJlZW4gZWFzaWVyLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG10LTRcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ2luKCl9PlNTTyBMT0dJTjwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX190ZXh0IHRleHQtbXV0ZWQgdy0xMDAgdGV4dC1jZW50ZXIgYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgcGItMiB0ZXh0LXhzIHB4LTJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgUGFydCBvZiB0aGUgT3BlbiBTb3VyY2UgSW5pdGlhdGl2ZSBvZiBUaGUgRmFjdWx0eSBvZiBDb21wdXRlclxuICAgICAgICAgICAgU2NpZW5jZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+VW5pdmVyc2l0eSBvZiBJbmRvbmVzaWE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})