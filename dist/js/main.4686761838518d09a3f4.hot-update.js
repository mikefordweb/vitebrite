webpackHotUpdate("main",{

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
/* harmony import */ var event_event_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! event/event-actions */ "../../../../src/js/event/event-actions.js");
/* harmony import */ var _event_list_EventList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-list/EventList */ "../../../../src/js/search/event-list/EventList.jsx");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();







var Search = function Search(_ref) {
  var selectedEvent = _ref.selectedEvent,
      events = _ref.events,
      setEvent = _ref.setEvent,
      userEvents = _ref.userEvents;
  console.log("userEvents: " + userEvents);

  if (selectedEvent === null) {
    selectedEvent = {};
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_list_EventList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    events: events,
    userEvents: events,
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
  setEvent: event_event_actions__WEBPACK_IMPORTED_MODULE_3__["updateSelected"]
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

/***/ })

})
//# sourceMappingURL=main.4686761838518d09a3f4.hot-update.js.map