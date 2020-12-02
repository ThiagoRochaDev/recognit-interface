(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./container/Layout/Header/MainMenu.js":
/*!*********************************************!*\
  !*** ./container/Layout/Header/MainMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/ui/Antd/Menu/Menu */ "../../node_modules/@iso/ui/Antd/Menu/Menu.js");
/* harmony import */ var _helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/activeLink */ "./helpers/activeLink.js");
/* harmony import */ var _settings_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/constant */ "./settings/constant.js");
var _jsxFileName = "C:\\Users\\tiago\\Downloads\\templates_teste\\isoadmin-330\\Isomorphic - React Redux Admin Dashboard\\isomorphic\\packages\\hotel-next\\container\\Layout\\Header\\MainMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var MainMenu = function MainMenu(_ref) {
  var className = _ref.className,
      router = _ref.router;
  return __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    key: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === _settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"] ? 'active' : '',
    href: "".concat(_settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Hotels")), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === _settings_constant__WEBPACK_IMPORTED_MODULE_4__["LISTING_POSTS_PAGE"] ? 'active' : '',
    href: "".concat(_settings_constant__WEBPACK_IMPORTED_MODULE_4__["LISTING_POSTS_PAGE"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Listing")), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === _settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_PROFILE_PAGE"] ? 'active' : '',
    href: "".concat(_settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_PROFILE_PAGE"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Agent")), __jsx(_iso_ui_Antd_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === _settings_constant__WEBPACK_IMPORTED_MODULE_4__["PRICING_PLAN_PAGE"] ? 'active' : '',
    href: "".concat(_settings_constant__WEBPACK_IMPORTED_MODULE_4__["PRICING_PLAN_PAGE"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Pricing")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(MainMenu));

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
//# sourceMappingURL=3.js.map