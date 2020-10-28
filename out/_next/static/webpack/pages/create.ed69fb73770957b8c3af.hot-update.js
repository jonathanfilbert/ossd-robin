webpackHotUpdate_N_E("pages/create",{

/***/ "./pages/create/components/MeetingHistory.tsx":
/*!****************************************************!*\
  !*** ./pages/create/components/MeetingHistory.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Button */ \"./components/Button.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jonathanfilbert/Documents/ossd/ossd-robin/pages/create/components/MeetingHistory.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar MeetingHistory = function MeetingHistory(_ref) {\n  _s();\n\n  var _ref$meetings = _ref.meetings,\n      meetings = _ref$meetings === void 0 ? [] : _ref$meetings;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    className: \" max-w-sm m-auto flex flex-col justify-center mt-10 px-5 main__text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, meetings.length > 0 && meetings.map(function (meeting, index) {\n    return __jsx(\"div\", {\n      onClick: function onClick() {\n        return router.push(\"/meet?meetId=\".concat(meeting));\n      },\n      className: \"shadow-xs w-full h-auto bg-white  hover:shadow-lg transition-all duration-100 rounded-md px-6 py-2 text-black cursor-pointer my-2\",\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: \"flex flex-col\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \" text-xs\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }\n    }, \"ROOM NAME\"), __jsx(\"div\", {\n      className: \"text-2xl\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 15\n      }\n    }, meeting), __jsx(\"div\", {\n      className: \"w-full flex flex-row justify-end\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"py-2 px-3 rounded-md text-main hover:bg-orange-100 focus:bg-orange-200 \",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    }, \"JOIN\"))));\n  }), __jsx(\"div\", {\n    className: \"mt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: function onClick() {\n      return null;\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Clear\")));\n};\n\n_s(MeetingHistory, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"]];\n});\n\n_c = MeetingHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetingHistory);\n\nvar _c;\n\n$RefreshReg$(_c, \"MeetingHistory\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlL2NvbXBvbmVudHMvTWVldGluZ0hpc3RvcnkudHN4PzM5NWIiXSwibmFtZXMiOlsiTWVldGluZ0hpc3RvcnkiLCJtZWV0aW5ncyIsInJvdXRlciIsInVzZVJvdXRlciIsImxlbmd0aCIsIm1hcCIsIm1lZXRpbmciLCJpbmRleCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBNEM7QUFBQTs7QUFBQSwyQkFBekNDLFFBQXlDO0FBQUEsTUFBekNBLFFBQXlDLDhCQUE5QixFQUE4QjtBQUNqRSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxxRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixDQUFsQixJQUNDSCxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxXQUNYO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTUwsTUFBTSxDQUFDTSxJQUFQLHdCQUE0QkYsT0FBNUIsRUFBTjtBQUFBLE9BRFg7QUFFRSxlQUFTLEVBQUMsbUlBRlo7QUFHRSxTQUFHLEVBQUVDLEtBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQkQsT0FBM0IsQ0FGRixFQUdFO0FBQUssZUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyx5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FIRixDQUxGLENBRFc7QUFBQSxHQUFiLENBRkosRUFtQkU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU0sSUFBTjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQW5CRixDQURGO0FBeUJELENBM0JEOztHQUFNTixjO1VBQ1dHLHFEOzs7S0FEWEgsYztBQTZCU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUvY29tcG9uZW50cy9NZWV0aW5nSGlzdG9yeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5cbnR5cGUgTWVldGluZ0hpc3RvcnlQcm9wcyA9IHtcbiAgbWVldGluZ3M6IHN0cmluZ1tdO1xufTtcblxuY29uc3QgTWVldGluZ0hpc3RvcnkgPSAoeyBtZWV0aW5ncyA9IFtdIH06IE1lZXRpbmdIaXN0b3J5UHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgbWF4LXctc20gbS1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXQtMTAgcHgtNSBtYWluX190ZXh0XCI+XG4gICAgICB7bWVldGluZ3MubGVuZ3RoID4gMCAmJlxuICAgICAgICBtZWV0aW5ncy5tYXAoKG1lZXRpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9tZWV0P21lZXRJZD0ke21lZXRpbmd9YCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cteHMgdy1mdWxsIGgtYXV0byBiZy13aGl0ZSAgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCByb3VuZGVkLW1kIHB4LTYgcHktMiB0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyIG15LTJcIlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC14c1wiPlJPT00gTkFNRTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e21lZXRpbmd9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1yb3cganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgcHgtMyByb3VuZGVkLW1kIHRleHQtbWFpbiBob3ZlcjpiZy1vcmFuZ2UtMTAwIGZvY3VzOmJnLW9yYW5nZS0yMDAgXCI+XG4gICAgICAgICAgICAgICAgICBKT0lOXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbnVsbH0+Q2xlYXI8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVldGluZ0hpc3Rvcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create/components/MeetingHistory.tsx\n");

/***/ })

})