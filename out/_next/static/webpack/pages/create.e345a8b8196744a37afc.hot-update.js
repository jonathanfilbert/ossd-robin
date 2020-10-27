webpackHotUpdate_N_E("pages/create",{

/***/ "./pages/create/index.tsx":
/*!********************************!*\
  !*** ./pages/create/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_GradientAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/GradientAsset */ \"./pages/assets/GradientAsset.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _components_MeetingHistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/MeetingHistory */ \"./pages/create/components/MeetingHistory.tsx\");\n/* harmony import */ var _assets_EmptyMeetingHistory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/EmptyMeetingHistory */ \"./pages/create/assets/EmptyMeetingHistory.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jonathanfilbert/Documents/ossd/ossd-robin/pages/create/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"create__Wrapper\",\n  componentId: \"sc-1b8hfy1-0\"\n})([\"background-color:#f9fbfe;@keyframes breathe{from{opacity:1;transform:rotate(0deg);}to{opacity:0;transform:rotate(360deg);}}.spin-slowly{animation:breathe 3s ease-in-out infinite;animation-direction:alternate;}\"]);\n_c = Wrapper;\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      roomName = _useState[0],\n      setRoomName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      userName = _useState2[0],\n      setUserName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      meetingHistory = _useState3[0],\n      setMeetingHistory = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var handleCreateMeeting = function handleCreateMeeting() {\n    if (roomName.split(' ').length > 1) {\n      var formattedRoomName = roomName.split(' ').join('-');\n      router.push({\n        pathname: '/meet',\n        query: {\n          meetId: formattedRoomName\n        }\n      });\n    } else {\n      router.push({\n        pathname: '/meet',\n        query: {\n          meetId: roomName\n        }\n      });\n    }\n  };\n\n  var receiveLogoutData = function receiveLogoutData(event) {\n    var origin = event.origin || event.originalEvent.origin;\n\n    if (event.data === 'ok') {\n      // logout\n      sessionStorage.removeItem('uimeet-token');\n      window.removeEventListener('message', function () {\n        return null;\n      });\n      router.push('/');\n    }\n\n    if (_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"].startsWith(origin) && event.data.startsWith('ey')) {\n      sessionStorage.removeItem('uimeet-token');\n      window.removeEventListener('message', function () {\n        return null;\n      });\n      router.push('/');\n    }\n  };\n\n  var handleLogout = function handleLogout() {\n    var logoutWindow = window.open(_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"], '_blank');\n    var getUserDataInterval = setInterval(function () {\n      if (logoutWindow.closed) {\n        clearInterval(getUserDataInterval);\n      }\n\n      logoutWindow.postMessage('JOFIL', _utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"]);\n    }, 1000);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('message', receiveLogoutData, false);\n\n    if (sessionStorage.getItem('uimeet-token') === null) {\n      router.push('/');\n      return;\n    }\n\n    if (sessionStorage.getItem('uimeet-history') !== null) {\n      setMeetingHistory(JSON.parse(sessionStorage.getItem('uimeet-history')));\n    } else {\n      sessionStorage.setItem('uimeet-history', JSON.stringify([]));\n    }\n\n    var token = sessionStorage.getItem('uimeet-token');\n    var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(token);\n    setUserName(decoded.cas.name);\n  }, []);\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, \"uimeet | Create Meeting\")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 flex flex-row items-center justify-center h-64 md:h-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_assets_GradientAsset__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"max-h-full w-auto spin-slowly\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, \"Hello, \", userName, \".\"), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 my-2 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: \"appearance-none rounded w-full md:w-1/2 py-2 px-3 text-muted leading-tight text-lg focus:shadow-md focus:outline-none\",\n    type: \"text\",\n    placeholder: \"Meeting Room Name\",\n    value: roomName,\n    onChange: function onChange(e) {\n      return setRoomName(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center mt-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      return handleCreateMeeting();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, \"CREATE MEETING\")), __jsx(\"div\", {\n    className: \"self-center mx-3 mt-2 main__text text-muted cursor-pointer\",\n    onClick: function onClick() {\n      return handleLogout();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, \"LOG OUT\"), __jsx(\"div\", {\n    className: \"w-100 min-h-screen m-auto mt-10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"main__bold text-2xl text-center mb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }, \"My Meeting History\"), meetingHistory.length > 0 ? __jsx(_components_MeetingHistory__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    meetings: meetingHistory,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  }) : __jsx(\"div\", {\n    className: \"text-center  mt-20\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-24 m-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 15\n    }\n  }, __jsx(_assets_EmptyMeetingHistory__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"font-normal mt-3 main__text\",\n    style: {\n      color: '#DCE0E5'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 15\n    }\n  }, \"Start a meeting and it will appear here.\")))));\n};\n\n_s(Index, \"eh2YH4fsG39IymZjxUcYOY4cOZ4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlL2luZGV4LnRzeD9lNjNiIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJbmRleCIsInVzZVN0YXRlIiwicm9vbU5hbWUiLCJzZXRSb29tTmFtZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJtZWV0aW5nSGlzdG9yeSIsInNldE1lZXRpbmdIaXN0b3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ3JlYXRlTWVldGluZyIsInNwbGl0IiwibGVuZ3RoIiwiZm9ybWF0dGVkUm9vbU5hbWUiLCJqb2luIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJtZWV0SWQiLCJyZWNlaXZlTG9nb3V0RGF0YSIsImV2ZW50Iiwib3JpZ2luIiwib3JpZ2luYWxFdmVudCIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiREpBTkdPX1NTT19MT0dPVVRfVVJMIiwic3RhcnRzV2l0aCIsImhhbmRsZUxvZ291dCIsImxvZ291dFdpbmRvdyIsIm9wZW4iLCJnZXRVc2VyRGF0YUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbG9zZWQiLCJjbGVhckludGVydmFsIiwicG9zdE1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsImRlY29kZWQiLCJqd3RfZGVjb2RlIiwiY2FzIiwibmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseU5B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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQ0UsYUFBUyxFQUFDLDZCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUUrQyxXQUFLLEVBQUU7QUFBVCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBSkYsQ0FQSixDQTFCRixDQUpGLENBREY7QUFzREQsQ0EzSEQ7O0dBQU1yRCxLO1VBSVdTLHFEOzs7TUFKWFQsSztBQTZIU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgR3JhZGllbnRBc3NldCBmcm9tICcuLi9hc3NldHMvR3JhZGllbnRBc3NldCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgeyBESkFOR09fU1NPX0xPR09VVF9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xuaW1wb3J0IE1lZXRpbmdIaXN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9NZWV0aW5nSGlzdG9yeSc7XG5pbXBvcnQgRW1wdHlNZWV0aW5nSGlzdG9yeSBmcm9tICcuL2Fzc2V0cy9FbXB0eU1lZXRpbmdIaXN0b3J5JztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmU7XG5cbiAgQGtleWZyYW1lcyBicmVhdGhlIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgLnNwaW4tc2xvd2x5IHtcbiAgICBhbmltYXRpb246IGJyZWF0aGUgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICB9XG5gO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3Jvb21OYW1lLCBzZXRSb29tTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVldGluZ0hpc3RvcnksIHNldE1lZXRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU1lZXRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKHJvb21OYW1lLnNwbGl0KCcgJykubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgZm9ybWF0dGVkUm9vbU5hbWUgPSByb29tTmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKTtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbWVldCcsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgbWVldElkOiBmb3JtYXR0ZWRSb29tTmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL21lZXQnLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIG1lZXRJZDogcm9vbU5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUxvZ291dERhdGEgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBvcmlnaW4gPSBldmVudC5vcmlnaW4gfHwgZXZlbnQub3JpZ2luYWxFdmVudC5vcmlnaW47XG4gICAgaWYgKGV2ZW50LmRhdGEgPT09ICdvaycpIHtcbiAgICAgIC8vIGxvZ291dFxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndWltZWV0LXRva2VuJyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IG51bGwpO1xuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgREpBTkdPX1NTT19MT0dPVVRfVVJMLnN0YXJ0c1dpdGgob3JpZ2luKSAmJlxuICAgICAgZXZlbnQuZGF0YS5zdGFydHNXaXRoKCdleScpXG4gICAgKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1aW1lZXQtdG9rZW4nKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4gbnVsbCk7XG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9nb3V0V2luZG93ID0gd2luZG93Lm9wZW4oREpBTkdPX1NTT19MT0dPVVRfVVJMLCAnX2JsYW5rJyk7XG5cbiAgICBjb25zdCBnZXRVc2VyRGF0YUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGxvZ291dFdpbmRvdy5jbG9zZWQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnZXRVc2VyRGF0YUludGVydmFsKTtcbiAgICAgIH1cbiAgICAgIGxvZ291dFdpbmRvdy5wb3N0TWVzc2FnZSgnSk9GSUwnLCBESkFOR09fU1NPX0xPR09VVF9VUkwpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCByZWNlaXZlTG9nb3V0RGF0YSwgZmFsc2UpO1xuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1aW1lZXQtdG9rZW4nKSA9PT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VpbWVldC1oaXN0b3J5JykgIT09IG51bGwpIHtcbiAgICAgIHNldE1lZXRpbmdIaXN0b3J5KEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndWltZWV0LWhpc3RvcnknKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1aW1lZXQtaGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndWltZWV0LXRva2VuJyk7XG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dF9kZWNvZGUodG9rZW4pO1xuICAgIHNldFVzZXJOYW1lKGRlY29kZWQuY2FzLm5hbWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+dWltZWV0IHwgQ3JlYXRlIE1lZXRpbmc8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTY0IG1kOmgtYXV0b1wiPlxuICAgICAgICAgIDxHcmFkaWVudEFzc2V0IGNsYXNzTmFtZT1cIm1heC1oLWZ1bGwgdy1hdXRvIHNwaW4tc2xvd2x5XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtYWluX19ub3JtYWwgdGV4dC0zeGwgbWQ6dGV4dC00eGwgdGV4dC1jZW50ZXIgcHgtNiBtZDpweC0wIFwiPlxuICAgICAgICAgIEhlbGxvLCB7dXNlck5hbWV9LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG1haW5fX25vcm1hbCB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCB0ZXh0LWNlbnRlciBweC02IG1kOnB4LTAgbXktMiBcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkIHctZnVsbCBtZDp3LTEvMiBweS0yIHB4LTMgdGV4dC1tdXRlZCBsZWFkaW5nLXRpZ2h0IHRleHQtbGcgZm9jdXM6c2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lZXRpbmcgUm9vbSBOYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtyb29tTmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um9vbU5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ3JlYXRlTWVldGluZygpfT5DUkVBVEUgTUVFVElORzwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGYtY2VudGVyIG14LTMgbXQtMiBtYWluX190ZXh0IHRleHQtbXV0ZWQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ291dCgpfVxuICAgICAgICA+XG4gICAgICAgICAgTE9HIE9VVFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIG1lZXRpbmcgaGlzdG9yeSBzZWN0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIG1pbi1oLXNjcmVlbiBtLWF1dG8gbXQtMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2JvbGQgdGV4dC0yeGwgdGV4dC1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgTXkgTWVldGluZyBIaXN0b3J5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge21lZXRpbmdIaXN0b3J5Lmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8TWVldGluZ0hpc3RvcnkgbWVldGluZ3M9e21lZXRpbmdIaXN0b3J5fSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyICBtdC0yMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgbS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPEVtcHR5TWVldGluZ0hpc3RvcnkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW5vcm1hbCBtdC0zIG1haW5fX3RleHRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI0RDRTBFNScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YXJ0IGEgbWVldGluZyBhbmQgaXQgd2lsbCBhcHBlYXIgaGVyZS5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create/index.tsx\n");

/***/ })

})