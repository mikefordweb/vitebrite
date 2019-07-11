webpackHotUpdate("main",{

/***/ "../../../../src/js/App.jsx":
/*!*****************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/App.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ "../../../react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../../../react-router-dom/esm/react-router-dom.js");
/* harmony import */ var checkout_Checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! checkout/Checkout */ "../../../../src/js/checkout/Checkout.jsx");
/* harmony import */ var confirmation_Confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! confirmation/Confirmation */ "../../../../src/js/confirmation/Confirmation.jsx");
/* harmony import */ var search_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! search/Search */ "../../../../src/js/search/Search.jsx");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/* eslint-disable react/jsx-no-bind */








var App = function App(_ref) {
  var events = _ref.events;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/",
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(search_Search__WEBPACK_IMPORTED_MODULE_6__["default"], {
        events: events
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/checkout",
    component: checkout_Checkout__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/confirmation",
    component: confirmation_Confirmation__WEBPACK_IMPORTED_MODULE_5__["default"]
  }));
};

App.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired
};

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__["hot"])(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/App.jsx");
  reactHotLoader.register(_default, "default", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/App.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.29060b56d6e617e32f6b.hot-update.js.map