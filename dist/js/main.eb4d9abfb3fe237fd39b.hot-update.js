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
  var spots = _ref.spots;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/",
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(search_Search__WEBPACK_IMPORTED_MODULE_6__["default"], {
        spots: spots
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
  spots: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired
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

/***/ }),

/***/ "../../../../src/js/Root.jsx":
/*!******************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/Root.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Root; });
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "../../../@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "../../../@babel/runtime-corejs3/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../../../@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "../../../@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "../../../@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "../../../@babel/runtime-corejs3/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "../../../@babel/runtime-corejs3/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "../../../@babel/runtime-corejs3/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "../../../@babel/runtime-corejs3/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../../../@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../../../react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "../../../react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! connected-react-router */ "../../../connected-react-router/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "../../../axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! store/store */ "../../../../src/js/store/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./App */ "../../../../src/js/App.jsx");











(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();








var Root =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Root, _Component);

  function Root() {
    var _getPrototypeOf2, _context;

    var _this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Root);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Root)).call.apply(_getPrototypeOf2, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = [this]).call(_context, args)));

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      isLoading: true,
      events: []
    });

    return _this;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Root, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._loadEvents();
    }
  }, {
    key: "_loadEvents",
    value: function () {
      var _loadEvents2 = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('/events');

              case 3:
                _ref = _context2.sent;
                data = _ref.data;
                this.setState({
                  isLoading: false,
                  events: data
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log('Error loading event data: ', _context2.t0); // eslint-disable-line no-console

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function _loadEvents() {
        return _loadEvents2.apply(this, arguments);
      }

      return _loadEvents;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          events = _this$state.events;

      if (isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "Root-loader"
        }, "Loading...");
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "Root"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: Object(store_store__WEBPACK_IMPORTED_MODULE_14__["default"])()
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_12__["ConnectedRouter"], {
        history: Object(store_store__WEBPACK_IMPORTED_MODULE_14__["getHistory"])()
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_15__["default"], {
        events: events
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Root, "Root", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/Root.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../../../src/js/confirmation/Confirmation.jsx":
/*!***************************************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/confirmation/Confirmation.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "../../../@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "../../../@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "../../../@babel/runtime-corejs3/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "../../../@babel/runtime-corejs3/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "../../../@babel/runtime-corejs3/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "../../../@babel/runtime-corejs3/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../../../@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../../react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../../../prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "../../../react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! connected-react-router */ "../../../connected-react-router/esm/index.js");
/* harmony import */ var common_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/Button */ "../../../../src/js/common/Button.jsx");
/* harmony import */ var common_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/Image */ "../../../../src/js/common/Image.jsx");








(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();








var Confirmation =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Confirmation, _PureComponent);

  function Confirmation(props) {
    var _this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Confirmation);

    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Confirmation).call(this, props));

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_onPurchaseAnotherClick", function (evt) {
      var pushTo = _this.props.pushTo;
      pushTo('/');
    });

    var selectedEvent = props.selectedEvent,
        _pushTo = props.pushTo; // if you refresh on conirmation and there isn't a selectedEvent, make sure to go back to search and render nothing here

    if (!selectedEvent) {
      _pushTo('/');
    }

    return _this;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Confirmation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          email = _this$props.email,
          selectedEvent = _this$props.selectedEvent;

      if (!selectedEvent) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Confirmation"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Park it like its hot!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "You successfully purchased parking at ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", null, selectedEvent.title), " for ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", null, "$", (selectedEvent.price / 100).toFixed(2)), "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(common_Image__WEBPACK_IMPORTED_MODULE_12__["default"], {
        src: selectedEvent.image
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "We emailed a receipt to ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "mailto:".concat(email)
      }, email), "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(common_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: "primary",
        onClick: this._onPurchaseAnotherClick
      }, "Purchase Another Event!"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Confirmation;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Confirmation, "propTypes", {
  email: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  selectedEvent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  pushTo: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  var email = state.checkout.email,
      selectedEvent = state.event.selected;
  return {
    email: email,
    selectedEvent: selectedEvent
  };
};

var mapDispatchToProps = {
  pushTo: connected_react_router__WEBPACK_IMPORTED_MODULE_10__["push"]
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Confirmation);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Confirmation, "Confirmation", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/confirmation/Confirmation.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/confirmation/Confirmation.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/confirmation/Confirmation.jsx");
  reactHotLoader.register(_default, "default", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/confirmation/Confirmation.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../../../src/js/event/EventItem.jsx":
/*!*****************************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/EventItem.jsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventItem; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../../../@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "../../../@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "../../../@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "../../../@babel/runtime-corejs3/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "../../../@babel/runtime-corejs3/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "../../../@babel/runtime-corejs3/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "../../../@babel/runtime-corejs3/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../../../@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../../react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "../../../prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var common_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/Image */ "../../../../src/js/common/Image.jsx");
/* harmony import */ var common_TextButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/TextButton */ "../../../../src/js/common/TextButton.jsx");









(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();







var EventItem =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(EventItem, _PureComponent);

  function EventItem() {
    var _getPrototypeOf2, _context;

    var _this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EventItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(EventItem)).call.apply(_getPrototypeOf2, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = [this]).call(_context, args)));

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "_onDetailsClick", function (evt) {
      var _this$props = _this.props,
          data = _this$props.data,
          onDetailsClick = _this$props.onDetailsClick;
      onDetailsClick(data);
    });

    return _this;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EventItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          showDetails = _this$props2.showDetails,
          isSelected = _this$props2.isSelected,
          _this$props2$data = _this$props2.data,
          image = _this$props2$data.image,
          distance = _this$props2$data.distance,
          title = _this$props2$data.title;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()('EventItem', {
        'EventItem-selected': isSelected
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(common_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
        src: image
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "EventItem-info"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, distance), showDetails && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(common_TextButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this._onDetailsClick
      }, "Details")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EventItem;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(EventItem, "propTypes", {
  showDetails: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  data: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  onDetailsClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
});

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(EventItem, "defaultProps", {
  showDetails: true
});


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EventItem, "EventItem", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/EventItem.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../../../src/js/event/event-actions.js":
/*!********************************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/event-actions.js ***!
  \********************************************************************************************/
/*! exports provided: EVENT_UPDATE_SELECTED, EVENT_PURCHASE, updateSelected, purchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_UPDATE_SELECTED", function() { return EVENT_UPDATE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_PURCHASE", function() { return EVENT_PURCHASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelected", function() { return updateSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchase", function() { return purchase; });
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var EVENT_UPDATE_SELECTED = 'EVENT_UPDATE_SELECTED';
var EVENT_PURCHASE = 'EVENT_PURCHASE';
var updateSelected = function updateSelected(event) {
  return {
    type: EVENT_UPDATE_SELECTED,
    payload: event
  };
};
var purchase = function purchase(data) {
  return {
    type: EVENT_PURCHASE,
    payload: data
  };
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EVENT_UPDATE_SELECTED, "EVENT_UPDATE_SELECTED", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/event-actions.js");
  reactHotLoader.register(EVENT_PURCHASE, "EVENT_PURCHASE", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/event-actions.js");
  reactHotLoader.register(updateSelected, "updateSelected", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/event-actions.js");
  reactHotLoader.register(purchase, "purchase", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/event-actions.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../../../src/js/event/event-reducer.js":
/*!********************************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/event-reducer.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return event; });
/* harmony import */ var _babel_runtime_corejs3_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectSpread */ "../../../@babel/runtime-corejs3/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-actions */ "../../../../src/js/event/event-actions.js");


(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();


var initialState = {
  selected: null
};
function event() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _event_actions__WEBPACK_IMPORTED_MODULE_1__["EVENT_UPDATE_SELECTED"]:
      {
        return _babel_runtime_corejs3_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          selected: payload || null
        });
      }

    default:
      return state;
  }
}
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/event-reducer.js");
  reactHotLoader.register(event, "event", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/event/event-reducer.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../../../src/js/search/Search.jsx":
/*!***************************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/Search.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../../react-redux/es/index.js");
/* harmony import */ var event_event_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! event/event-actions */ "../../../../src/js/event/event-actions.js");
/* harmony import */ var _event_list_EventList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-list/EventList */ "../../../../src/js/search/event-list/EventList.jsx");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();







var Search = function Search(_ref) {
  var selectedEvent = _ref.selectedEvent,
      events = _ref.events,
      setEvent = _ref.setEvent;

  if (selectedEvent === null) {
    selectedEvent = {};
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_list_EventList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    events: events,
    selectedEvent: selectedEvent,
    setEvent: setEvent
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Search-content"
  }));
};

Search.propTypes = {
  selectedEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  setEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  var selectedEvent = state.event.selected;
  return {
    selectedEvent: selectedEvent
  };
};

var mapDispatchToProps = {
  setEvent: event_event_actions__WEBPACK_IMPORTED_MODULE_5__["updateSelected"]
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Search);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Search, "Search", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/Search.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/Search.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/Search.jsx");
  reactHotLoader.register(_default, "default", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/Search.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../../../src/js/search/event-list/EventList.jsx":
/*!*****************************************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/event-list/EventList.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventList; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../../../@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ "../../../@babel/runtime-corejs3/core-js-stable/instance/bind.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "../../../@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "../../../@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "../../../@babel/runtime-corejs3/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "../../../@babel/runtime-corejs3/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "../../../@babel/runtime-corejs3/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "../../../@babel/runtime-corejs3/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../../../@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../../react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "../../../prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var common_TextButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/TextButton */ "../../../../src/js/common/TextButton.jsx");
/* harmony import */ var event_EventItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! event/EventItem */ "../../../../src/js/event/EventItem.jsx");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-modal */ "../../../react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! connected-react-router */ "../../../connected-react-router/esm/index.js");










(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();








var EventList =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(EventList, _PureComponent);

  function EventList() {
    var _context, _context2, _context3, _context4;

    var _this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EventList);

    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EventList).call(this));

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "_onDetailsClick", function (event) {
      _this.props.setEvent(event);

      _this.setState({
        showGetModal: true
      });
    });

    _this.state = {
      showGetModal: false,
      showPostModal: false
    };
    _this._onHandleCloseGetModal = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context = _this._onHandleCloseGetModal).call(_context, _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this._onHandleClosePostModal = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _this._onHandleClosePostModal).call(_context2, _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this._onShowPostModal = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = _this._onShowPostModal).call(_context3, _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.handleSubmit = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = _this.handleSubmit).call(_context4, _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    return _this;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EventList, [{
    key: "_onShowPostModal",
    value: function _onShowPostModal() {
      this.setState({
        showGetModal: false
      });
      this.setState({
        showPostModal: true
      });
    }
  }, {
    key: "_onHandleCloseGetModal",
    value: function _onHandleCloseGetModal() {
      this.setState({
        showGetModal: false
      });
    }
  }, {
    key: "_onHandleClosePostModal",
    value: function _onHandleClosePostModal() {
      this.setState({
        showPostModal: false
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      Object(connected_react_router__WEBPACK_IMPORTED_MODULE_14__["push"])('/checkout');
      console.log('handleSubmit');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selectedEvent = _this$props.selectedEvent,
          events = _this$props.events;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventList"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventList-feature"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventList-breadcrumbs"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(common_TextButton__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Chicago"), " > Millennium Park"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Millennium Park"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, events.length, " Events Available")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_13___default.a, {
        isOpen: this.state.showPostModal,
        contentLabel: "Post Modal",
        ariaHideApp: false,
        className: "vitebrite-post",
        closeTimeoutMS: 2000
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-post-header"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "",
        className: "modal-post-back",
        onClick: this._onHandleClosePostModal
      }, "Back to Search")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "modal-post-image",
        src: selectedEvent.image
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-post-title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-post-title-text"
      }, selectedEvent.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-post-title-distance"
      }, selectedEvent.distance)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-post-form-hr"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        forhtml: "first-name",
        className: "modal-post-label first-name-label"
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "first-name",
        className: "first-name modal-post-input"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        forhtml: "last-name",
        className: "modal-post-label last-name-label"
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "last-name",
        className: "modal-post-input"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        forhtml: "email",
        className: "modal-post-label email-label"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "email",
        className: "modal-post-input"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        forhtml: "phone",
        className: "modal-post-label phone-label"
      }, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "phone",
        className: "modal-post-input"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: (selectedEvent.price / 100).toFixed(2),
        className: "purchase-btn"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_13___default.a, {
        isOpen: this.state.showGetModal,
        contentLabel: "Get Modal",
        ariaHideApp: false,
        className: "vitebrite-modal",
        closeTimeoutMS: 2000
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        className: "modal-close",
        onClick: this._onHandleCloseGetModal
      }, "X"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-title modal-text"
      }, "Event Details"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-address modal-text"
      }, selectedEvent.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-description"
      }, selectedEvent.description), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        className: "bookit-btn",
        onClick: this._onShowPostModal
      }, "$", (selectedEvent.price / 100).toFixed(2), " | Book it!")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventList-events"
      }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(events).call(events, function (event) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(event_EventItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
          key: event.id,
          data: event,
          isSelected: selectedEvent && selectedEvent.id === event.id,
          onDetailsClick: _this2._onDetailsClick
        });
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EventList;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(EventList, "propTypes", {
  selectedEvent: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  events: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object).isRequired,
  setEvent: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
});


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EventList, "EventList", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/event-list/EventList.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../../../src/js/search/spot-list/SpotList.jsx":
false,

/***/ "../../../../src/js/spot/SpotItem.jsx":
false,

/***/ "../../../../src/js/spot/spot-actions.js":
false,

/***/ "../../../../src/js/spot/spot-reducer.js":
false,

/***/ "../../../../src/js/store/reducers.js":
/*!***************************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/store/reducers.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../../redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "../../../connected-react-router/esm/index.js");
/* harmony import */ var event_event_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! event/event-reducer */ "../../../../src/js/event/event-reducer.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





var _default = function _default(history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    event: event_event_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/store/reducers.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.eb4d9abfb3fe237fd39b.hot-update.js.map