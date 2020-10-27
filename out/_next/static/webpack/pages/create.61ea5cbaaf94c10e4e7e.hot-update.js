webpackHotUpdate_N_E("pages/create",{

/***/ "./pages/create/index.tsx":
/*!********************************!*\
  !*** ./pages/create/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_GradientAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/GradientAsset */ \"./pages/assets/GradientAsset.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _components_MeetingHistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/MeetingHistory */ \"./pages/create/components/MeetingHistory.tsx\");\n/* harmony import */ var _assets_EmptyMeetingHistory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/EmptyMeetingHistory */ \"./pages/create/assets/EmptyMeetingHistory.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jonathanfilbert/Documents/ossd/ossd-robin/pages/create/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"create__Wrapper\",\n  componentId: \"sc-1b8hfy1-0\"\n})([\"background-color:#f9fbfe;@keyframes breathe{from{opacity:1;transform:rotate(0deg);}to{opacity:0;transform:rotate(360deg);}}.spin-slowly{animation:breathe 3s ease-in-out infinite;animation-direction:alternate;}\"]);\n_c = Wrapper;\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      roomName = _useState[0],\n      setRoomName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      userName = _useState2[0],\n      setUserName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      meetingHistory = _useState3[0],\n      setMeetingHistory = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var handleCreateMeeting = function handleCreateMeeting() {\n    if (roomName.split(' ').length > 1) {\n      var formattedRoomName = roomName.split(' ').join('-');\n      router.push({\n        pathname: '/meet',\n        query: {\n          meetId: formattedRoomName\n        }\n      });\n    } else {\n      router.push({\n        pathname: '/meet',\n        query: {\n          meetId: roomName\n        }\n      });\n    }\n  };\n\n  var receiveLogoutData = function receiveLogoutData(event) {\n    var origin = event.origin || event.originalEvent.origin;\n\n    if (event.data === 'ok') {\n      // logout\n      sessionStorage.removeItem('uimeet-token');\n      window.removeEventListener('message', function () {\n        return null;\n      });\n      router.push('/');\n    }\n\n    if (_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"].startsWith(origin) && event.data.startsWith('ey')) {\n      sessionStorage.removeItem('uimeet-token');\n      window.removeEventListener('message', function () {\n        return null;\n      });\n      router.push('/');\n    }\n  };\n\n  var handleLogout = function handleLogout() {\n    var logoutWindow = window.open(_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"], '_blank');\n    var getUserDataInterval = setInterval(function () {\n      if (logoutWindow.closed) {\n        clearInterval(getUserDataInterval);\n      }\n\n      logoutWindow.postMessage('JOFIL', _utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"]);\n    }, 1000);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('message', receiveLogoutData, false);\n\n    if (sessionStorage.getItem('uimeet-token') === null) {\n      router.push('/');\n      return;\n    }\n\n    if (sessionStorage.getItem('uimeet-history') !== null) {\n      setMeetingHistory(JSON.parse(sessionStorage.getItem('uimeet-history')));\n    } else {\n      sessionStorage.setItem('uimeet-history', JSON.stringify([]));\n    }\n\n    var token = sessionStorage.getItem('uimeet-token');\n    var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(token);\n    setUserName(decoded.cas.name);\n  }, []);\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, \"uimeet | Create Meeting\")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 flex flex-row items-center justify-center h-64 md:h-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_assets_GradientAsset__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"max-h-full w-auto spin-slowly\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, \"Hello, \", userName, \".\"), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 my-2 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: \"appearance-none rounded w-full md:w-1/2 py-2 px-3 text-muted leading-tight text-lg focus:shadow-md focus:outline-none\",\n    type: \"text\",\n    placeholder: \"Meeting Room Name\",\n    value: roomName,\n    onChange: function onChange(e) {\n      return setRoomName(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center mt-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      return handleCreateMeeting();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, \"CREATE MEETING\")), __jsx(\"div\", {\n    className: \"self-center mx-3 mt-2 main__text text-muted cursor-pointer\",\n    onClick: function onClick() {\n      return handleLogout();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, \"LOG OUT\"), __jsx(\"div\", {\n    className: \"w-100 min-h-screen m-auto mt-10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"main__bold text-2xl text-center mb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }, \"My Meeting History\"), meetingHistory.length > 0 ? __jsx(_components_MeetingHistory__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    meetings: meetingHistory,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  }) : __jsx(\"div\", {\n    className: \"text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 15\n    }\n  }, __jsx(_assets_EmptyMeetingHistory__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"font-normal mt-3 main__text\",\n    style: {\n      color: '#DCE0E5'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 15\n    }\n  }, \"Start a meeting and it will appear here.\")))));\n};\n\n_s(Index, \"eh2YH4fsG39IymZjxUcYOY4cOZ4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlL2luZGV4LnRzeD9lNjNiIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJbmRleCIsInVzZVN0YXRlIiwicm9vbU5hbWUiLCJzZXRSb29tTmFtZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJtZWV0aW5nSGlzdG9yeSIsInNldE1lZXRpbmdIaXN0b3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ3JlYXRlTWVldGluZyIsInNwbGl0IiwibGVuZ3RoIiwiZm9ybWF0dGVkUm9vbU5hbWUiLCJqb2luIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJtZWV0SWQiLCJyZWNlaXZlTG9nb3V0RGF0YSIsImV2ZW50Iiwib3JpZ2luIiwib3JpZ2luYWxFdmVudCIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiREpBTkdPX1NTT19MT0dPVVRfVVJMIiwic3RhcnRzV2l0aCIsImhhbmRsZUxvZ291dCIsImxvZ291dFdpbmRvdyIsIm9wZW4iLCJnZXRVc2VyRGF0YUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbG9zZWQiLCJjbGVhckludGVydmFsIiwicG9zdE1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsImRlY29kZWQiLCJqd3RfZGVjb2RlIiwiY2FzIiwibmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseU5B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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFDRSxhQUFTLEVBQUMsNkJBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRStDLFdBQUssRUFBRTtBQUFULEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFKRixDQVBKLENBMUJGLENBSkYsQ0FERjtBQXNERCxDQTNIRDs7R0FBTXJELEs7VUFJV1MscUQ7OztNQUpYVCxLO0FBNkhTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NyZWF0ZS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBHcmFkaWVudEFzc2V0IGZyb20gJy4uL2Fzc2V0cy9HcmFkaWVudEFzc2V0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCB7IERKQU5HT19TU09fTE9HT1VUX1VSTCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgTWVldGluZ0hpc3RvcnkgZnJvbSAnLi9jb21wb25lbnRzL01lZXRpbmdIaXN0b3J5JztcbmltcG9ydCBFbXB0eU1lZXRpbmdIaXN0b3J5IGZyb20gJy4vYXNzZXRzL0VtcHR5TWVldGluZ0hpc3RvcnknO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmZTtcblxuICBAa2V5ZnJhbWVzIGJyZWF0aGUge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuICAuc3Bpbi1zbG93bHkge1xuICAgIGFuaW1hdGlvbjogYnJlYXRoZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIH1cbmA7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbcm9vbU5hbWUsIHNldFJvb21OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZWV0aW5nSGlzdG9yeSwgc2V0TWVldGluZ0hpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTWVldGluZyA9ICgpID0+IHtcbiAgICBpZiAocm9vbU5hbWUuc3BsaXQoJyAnKS5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRSb29tTmFtZSA9IHJvb21OYW1lLnNwbGl0KCcgJykuam9pbignLScpO1xuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy9tZWV0JyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBtZWV0SWQ6IGZvcm1hdHRlZFJvb21OYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbWVldCcsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgbWVldElkOiByb29tTmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlTG9nb3V0RGF0YSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbiA9IGV2ZW50Lm9yaWdpbiB8fCBldmVudC5vcmlnaW5hbEV2ZW50Lm9yaWdpbjtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gJ29rJykge1xuICAgICAgLy8gbG9nb3V0XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1aW1lZXQtdG9rZW4nKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4gbnVsbCk7XG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBESkFOR09fU1NPX0xPR09VVF9VUkwuc3RhcnRzV2l0aChvcmlnaW4pICYmXG4gICAgICBldmVudC5kYXRhLnN0YXJ0c1dpdGgoJ2V5JylcbiAgICApIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VpbWVldC10b2tlbicpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKSA9PiBudWxsKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dvdXRXaW5kb3cgPSB3aW5kb3cub3BlbihESkFOR09fU1NPX0xPR09VVF9VUkwsICdfYmxhbmsnKTtcblxuICAgIGNvbnN0IGdldFVzZXJEYXRhSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAobG9nb3V0V2luZG93LmNsb3NlZCkge1xuICAgICAgICBjbGVhckludGVydmFsKGdldFVzZXJEYXRhSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgICAgbG9nb3V0V2luZG93LnBvc3RNZXNzYWdlKCdKT0ZJTCcsIERKQU5HT19TU09fTE9HT1VUX1VSTCk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHJlY2VpdmVMb2dvdXREYXRhLCBmYWxzZSk7XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VpbWVldC10b2tlbicpID09PSBudWxsKSB7XG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndWltZWV0LWhpc3RvcnknKSAhPT0gbnVsbCkge1xuICAgICAgc2V0TWVldGluZ0hpc3RvcnkoSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1aW1lZXQtaGlzdG9yeScpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VpbWVldC1oaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1aW1lZXQtdG9rZW4nKTtcbiAgICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZSh0b2tlbik7XG4gICAgc2V0VXNlck5hbWUoZGVjb2RlZC5jYXMubmFtZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT51aW1lZXQgfCBDcmVhdGUgTWVldGluZzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtNjQgbWQ6aC1hdXRvXCI+XG4gICAgICAgICAgPEdyYWRpZW50QXNzZXQgY2xhc3NOYW1lPVwibWF4LWgtZnVsbCB3LWF1dG8gc3Bpbi1zbG93bHlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG1haW5fX25vcm1hbCB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCB0ZXh0LWNlbnRlciBweC02IG1kOnB4LTAgXCI+XG4gICAgICAgICAgSGVsbG8sIHt1c2VyTmFtZX0uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbWFpbl9fbm9ybWFsIHRleHQtM3hsIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIHB4LTYgbWQ6cHgtMCBteS0yIFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQgdy1mdWxsIG1kOnctMS8yIHB5LTIgcHgtMyB0ZXh0LW11dGVkIGxlYWRpbmctdGlnaHQgdGV4dC1sZyBmb2N1czpzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVldGluZyBSb29tIE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Jvb21OYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb29tTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDcmVhdGVNZWV0aW5nKCl9PkNSRUFURSBNRUVUSU5HPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgbXgtMyBtdC0yIG1haW5fX3RleHQgdGV4dC1tdXRlZCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTG9nb3V0KCl9XG4gICAgICAgID5cbiAgICAgICAgICBMT0cgT1VUXG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogbWVldGluZyBoaXN0b3J5IHNlY3Rpb24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbWluLWgtc2NyZWVuIG0tYXV0byBtdC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYm9sZCB0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICBNeSBNZWV0aW5nIEhpc3RvcnlcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bWVldGluZ0hpc3RvcnkubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxNZWV0aW5nSGlzdG9yeSBtZWV0aW5ncz17bWVldGluZ0hpc3Rvcnl9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0XCI+XG4gICAgICAgICAgICAgICAgPEVtcHR5TWVldGluZ0hpc3RvcnkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW5vcm1hbCBtdC0zIG1haW5fX3RleHRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI0RDRTBFNScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YXJ0IGEgbWVldGluZyBhbmQgaXQgd2lsbCBhcHBlYXIgaGVyZS5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create/index.tsx\n");

/***/ })

})