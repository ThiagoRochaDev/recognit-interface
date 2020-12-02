(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./container/Layout/Header/MobileMenu.js":
/*!***********************************************!*\
  !*** ./container/Layout/Header/MobileMenu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/ui/Antd/Menu/Menu */ "../../node_modules/@iso/ui/Antd/Menu/Menu.js");
/* harmony import */ var _helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/activeLink */ "./helpers/activeLink.js");
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var _settings_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/constant */ "./settings/constant.js");
var _jsxFileName = "C:\\Users\\tiago\\Downloads\\templates_teste\\isoadmin-330\\Isomorphic - React Redux Admin Dashboard\\isomorphic\\packages\\hotel-next\\container\\Layout\\Header\\MobileMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var MobileMenu = function MobileMenu(_ref) {
  var className = _ref.className;

  // auth context
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      loggedIn = _useContext.loggedIn,
      logOut = _useContext.logOut;

  return __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    key: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: _settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Hotels")), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: _settings_constant__WEBPACK_IMPORTED_MODULE_4__["LISTING_POSTS_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Listing")), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: _settings_constant__WEBPACK_IMPORTED_MODULE_4__["PRICING_PLAN_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Pricing")), loggedIn && __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: _settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Account Settings")), loggedIn && __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    key: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("button", {
    onClick: logOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Log Out")));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

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
//# sourceMappingURL=4.js.map