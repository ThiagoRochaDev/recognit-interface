(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../node_modules/@iso/lib/hooks/useOnClickOutside.js":
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Users/tiago/Downloads/templates_teste/isoadmin-330/Isomorphic - React Redux Admin Dashboard/isomorphic/node_modules/@iso/lib/hooks/useOnClickOutside.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useOnClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);

/***/ }),

/***/ "./container/Layout/Header/ProfileMenu.js":
/*!************************************************!*\
  !*** ./container/Layout/Header/ProfileMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/ui/Antd/Menu/Menu */ "../../node_modules/@iso/ui/Antd/Menu/Menu.js");
/* harmony import */ var _iso_lib_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/hooks/useOnClickOutside */ "../../node_modules/@iso/lib/hooks/useOnClickOutside.js");
/* harmony import */ var _helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/activeLink */ "./helpers/activeLink.js");
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var _settings_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../settings/constant */ "./settings/constant.js");
var _jsxFileName = "C:\\Users\\tiago\\Downloads\\templates_teste\\isoadmin-330\\Isomorphic - React Redux Admin Dashboard\\isomorphic\\packages\\hotel-next\\container\\Layout\\Header\\ProfileMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ProfileMenu = function ProfileMenu(_ref) {
  var avatar = _ref.avatar;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
      logOut = _useContext.logOut;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      state = _useState[0],
      setState = _useState[1];

  var handleDropdown = function handleDropdown() {
    setState(!state);
  };

  var closeDropdown = function closeDropdown() {
    setState(false);
  };

  var dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(_iso_lib_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"])(dropdownRef, function () {
    return setState(false);
  });
  return __jsx("div", {
    className: "avatar-dropdown",
    ref: dropdownRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "dropdown-handler",
    onClick: handleDropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, avatar), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "dropdown-menu ".concat(state ? 'active' : 'hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    onClick: closeDropdown,
    key: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: _settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_PROFILE_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "View Profile")), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    onClick: closeDropdown,
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: _settings_constant__WEBPACK_IMPORTED_MODULE_5__["ADD_HOTEL_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Add Hotel")), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    onClick: closeDropdown,
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: _settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Account Settings")), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("button", {
    onClick: logOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Log Out"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

/***/ }),

/***/ "./helpers/activeLink.js":
/*!*******************************!*\
  !*** ./helpers/activeLink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tiago\\Downloads\\templates_teste\\isoadmin-330\\Isomorphic - React Redux Admin Dashboard\\isomorphic\\packages\\hotel-next\\helpers\\activeLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ActiveLink = function ActiveLink(_ref) {
  var className = _ref.className,
      children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    className: className,
    href: href,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ })

}]);
//# sourceMappingURL=1.js.map