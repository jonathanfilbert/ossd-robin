webpackHotUpdate_N_E("pages/create",{

/***/ "./pages/create/index.tsx":
/*!********************************!*\
  !*** ./pages/create/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_GradientAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/GradientAsset */ \"./pages/assets/GradientAsset.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _components_MeetingHistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/MeetingHistory */ \"./pages/create/components/MeetingHistory.tsx\");\n/* harmony import */ var _assets_EmptyMeetingHistory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/EmptyMeetingHistory */ \"./pages/create/assets/EmptyMeetingHistory.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jonathanfilbert/Documents/ossd/ossd-robin/pages/create/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"create__Wrapper\",\n  componentId: \"sc-1b8hfy1-0\"\n})([\"background-color:#f9fbfe;@keyframes breathe{from{opacity:1;transform:rotate(0deg);}to{opacity:0;transform:rotate(360deg);}}.spin-slowly{animation:breathe 3s ease-in-out infinite;animation-direction:alternate;}\"]);\n_c = Wrapper;\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      roomName = _useState[0],\n      setRoomName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      userName = _useState2[0],\n      setUserName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      meetingHistory = _useState3[0],\n      setMeetingHistory = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var handleCreateMeeting = function handleCreateMeeting() {\n    if (roomName.split(' ').length > 1) {\n      var formattedRoomName = roomName.split(' ').join('-');\n      router.push({\n        pathname: '/meet',\n        query: {\n          meetId: formattedRoomName\n        }\n      });\n    } else {\n      router.push({\n        pathname: '/meet',\n        query: {\n          meetId: roomName\n        }\n      });\n    }\n  };\n\n  var receiveLogoutData = function receiveLogoutData(event) {\n    var origin = event.origin || event.originalEvent.origin;\n\n    if (event.data === 'ok') {\n      // logout\n      sessionStorage.removeItem('uimeet-token');\n      window.removeEventListener('message', function () {\n        return null;\n      });\n      router.push('/');\n    }\n\n    if (_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"].startsWith(origin) && event.data.startsWith('ey')) {\n      sessionStorage.removeItem('uimeet-token');\n      window.removeEventListener('message', function () {\n        return null;\n      });\n      router.push('/');\n    }\n  };\n\n  var handleLogout = function handleLogout() {\n    var logoutWindow = window.open(_utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"], '_blank');\n    var getUserDataInterval = setInterval(function () {\n      if (logoutWindow.closed) {\n        clearInterval(getUserDataInterval);\n      }\n\n      logoutWindow.postMessage('JOFIL', _utils_api__WEBPACK_IMPORTED_MODULE_8__[\"DJANGO_SSO_LOGOUT_URL\"]);\n    }, 1000);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('message', receiveLogoutData, false);\n\n    if (sessionStorage.getItem('uimeet-token') === null) {\n      router.push('/');\n      return;\n    }\n\n    if (sessionStorage.getItem('uimeet-history') !== null) {\n      setMeetingHistory(JSON.parse(sessionStorage.getItem('uimeet-history')));\n    } else {\n      sessionStorage.setItem('uimeet-history', JSON.stringify([]));\n    }\n\n    var token = sessionStorage.getItem('uimeet-token');\n    var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(token);\n    setUserName(decoded.cas.name);\n  }, []);\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, \"uimeet | Create Meeting\")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 flex flex-row items-center justify-center h-64 md:h-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_assets_GradientAsset__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"max-h-full w-auto spin-slowly\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, \"Hello, \", userName, \".\"), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 my-2 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: \"appearance-none rounded w-full md:w-1/2 py-2 px-3 text-muted leading-tight text-lg focus:shadow-md focus:outline-none\",\n    type: \"text\",\n    placeholder: \"Meeting Room Name\",\n    value: roomName,\n    onChange: function onChange(e) {\n      return setRoomName(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w-100 flex flex-row justify-center mt-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      return handleCreateMeeting();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, \"CREATE MEETING\")), __jsx(\"div\", {\n    className: \"self-center mx-3 mt-2 main__text text-muted cursor-pointer\",\n    onClick: function onClick() {\n      return handleLogout();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, \"LOG OUT\"), __jsx(\"div\", {\n    className: \"w-100 min-h-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, meetingHistory.length > 0 ? __jsx(_components_MeetingHistory__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    meetings: meetingHistory,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }) : __jsx(\"div\", {\n    className: \"w-4 h-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, __jsx(_assets_EmptyMeetingHistory__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  })))));\n};\n\n_s(Index, \"eh2YH4fsG39IymZjxUcYOY4cOZ4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlL2luZGV4LnRzeD9lNjNiIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJbmRleCIsInVzZVN0YXRlIiwicm9vbU5hbWUiLCJzZXRSb29tTmFtZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJtZWV0aW5nSGlzdG9yeSIsInNldE1lZXRpbmdIaXN0b3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ3JlYXRlTWVldGluZyIsInNwbGl0IiwibGVuZ3RoIiwiZm9ybWF0dGVkUm9vbU5hbWUiLCJqb2luIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJtZWV0SWQiLCJyZWNlaXZlTG9nb3V0RGF0YSIsImV2ZW50Iiwib3JpZ2luIiwib3JpZ2luYWxFdmVudCIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiREpBTkdPX1NTT19MT0dPVVRfVVJMIiwic3RhcnRzV2l0aCIsImhhbmRsZUxvZ291dCIsImxvZ291dFdpbmRvdyIsIm9wZW4iLCJnZXRVc2VyRGF0YUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbG9zZWQiLCJjbGVhckludGVydmFsIiwicG9zdE1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsImRlY29kZWQiLCJqd3RfZGVjb2RlIiwiY2FzIiwibmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlOQUFiO0tBQU1G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YXRlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEdyYWRpZW50QXNzZXQgZnJvbSAnLi4vYXNzZXRzL0dyYWRpZW50QXNzZXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IHsgREpBTkdPX1NTT19MT0dPVVRfVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcbmltcG9ydCBNZWV0aW5nSGlzdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvTWVldGluZ0hpc3RvcnknO1xuaW1wb3J0IEVtcHR5TWVldGluZ0hpc3RvcnkgZnJvbSAnLi9hc3NldHMvRW1wdHlNZWV0aW5nSGlzdG9yeSc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZlO1xuXG4gIEBrZXlmcmFtZXMgYnJlYXRoZSB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIC5zcGluLXNsb3dseSB7XG4gICAgYW5pbWF0aW9uOiBicmVhdGhlIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgfVxuYDtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtyb29tTmFtZSwgc2V0Um9vbU5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lZXRpbmdIaXN0b3J5LCBzZXRNZWV0aW5nSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVDcmVhdGVNZWV0aW5nID0gKCkgPT4ge1xuICAgIGlmIChyb29tTmFtZS5zcGxpdCgnICcpLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFJvb21OYW1lID0gcm9vbU5hbWUuc3BsaXQoJyAnKS5qb2luKCctJyk7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL21lZXQnLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIG1lZXRJZDogZm9ybWF0dGVkUm9vbU5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy9tZWV0JyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBtZWV0SWQ6IHJvb21OYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVMb2dvdXREYXRhID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luID0gZXZlbnQub3JpZ2luIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQub3JpZ2luO1xuICAgIGlmIChldmVudC5kYXRhID09PSAnb2snKSB7XG4gICAgICAvLyBsb2dvdXRcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VpbWVldC10b2tlbicpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKSA9PiBudWxsKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIERKQU5HT19TU09fTE9HT1VUX1VSTC5zdGFydHNXaXRoKG9yaWdpbikgJiZcbiAgICAgIGV2ZW50LmRhdGEuc3RhcnRzV2l0aCgnZXknKVxuICAgICkge1xuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndWltZWV0LXRva2VuJyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IG51bGwpO1xuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ291dFdpbmRvdyA9IHdpbmRvdy5vcGVuKERKQU5HT19TU09fTE9HT1VUX1VSTCwgJ19ibGFuaycpO1xuXG4gICAgY29uc3QgZ2V0VXNlckRhdGFJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChsb2dvdXRXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2V0VXNlckRhdGFJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgICBsb2dvdXRXaW5kb3cucG9zdE1lc3NhZ2UoJ0pPRklMJywgREpBTkdPX1NTT19MT0dPVVRfVVJMKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgcmVjZWl2ZUxvZ291dERhdGEsIGZhbHNlKTtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndWltZWV0LXRva2VuJykgPT09IG51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1aW1lZXQtaGlzdG9yeScpICE9PSBudWxsKSB7XG4gICAgICBzZXRNZWV0aW5nSGlzdG9yeShKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VpbWVldC1oaXN0b3J5JykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndWltZWV0LWhpc3RvcnknLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VpbWVldC10b2tlbicpO1xuICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKHRva2VuKTtcbiAgICBzZXRVc2VyTmFtZShkZWNvZGVkLmNhcy5uYW1lKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnVpbWVldCB8IENyZWF0ZSBNZWV0aW5nPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02NCBtZDpoLWF1dG9cIj5cbiAgICAgICAgICA8R3JhZGllbnRBc3NldCBjbGFzc05hbWU9XCJtYXgtaC1mdWxsIHctYXV0byBzcGluLXNsb3dseVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbWFpbl9fbm9ybWFsIHRleHQtM3hsIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIHB4LTYgbWQ6cHgtMCBcIj5cbiAgICAgICAgICBIZWxsbywge3VzZXJOYW1lfS5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtYWluX19ub3JtYWwgdGV4dC0zeGwgbWQ6dGV4dC00eGwgdGV4dC1jZW50ZXIgcHgtNiBtZDpweC0wIG15LTIgXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZCB3LWZ1bGwgbWQ6dy0xLzIgcHktMiBweC0zIHRleHQtbXV0ZWQgbGVhZGluZy10aWdodCB0ZXh0LWxnIGZvY3VzOnNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZWV0aW5nIFJvb20gTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cm9vbU5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvb21OYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG10LTRcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNyZWF0ZU1lZXRpbmcoKX0+Q1JFQVRFIE1FRVRJTkc8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciBteC0zIG10LTIgbWFpbl9fdGV4dCB0ZXh0LW11dGVkIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXQoKX1cbiAgICAgICAgPlxuICAgICAgICAgIExPRyBPVVRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBtZWV0aW5nIGhpc3Rvcnkgc2VjdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgICB7bWVldGluZ0hpc3RvcnkubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxNZWV0aW5nSGlzdG9yeSBtZWV0aW5ncz17bWVldGluZ0hpc3Rvcnl9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00IGgtYXV0b1wiPlxuICAgICAgICAgICAgICA8RW1wdHlNZWV0aW5nSGlzdG9yeSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create/index.tsx\n");

/***/ })

})