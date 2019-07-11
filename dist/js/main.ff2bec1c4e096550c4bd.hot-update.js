webpackHotUpdate("main",{

/***/ "../../../../src/js/search/spot-list/SpotList.jsx":
/*!***************************************************************************************************!*\
  !*** /Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/spot-list/SpotList.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpotList; });
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
/* harmony import */ var spot_SpotItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! spot/SpotItem */ "../../../../src/js/spot/SpotItem.jsx");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-modal */ "../../../react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! connected-react-router */ "../../../connected-react-router/esm/index.js");










(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();








var SpotList =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(SpotList, _PureComponent);

  function SpotList() {
    var _context, _context2, _context3, _context4;

    var _this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SpotList);

    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(SpotList).call(this));

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "_onDetailsClick", function (spot) {
      _this.props.setSpot(spot);

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

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SpotList, [{
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
          selectedSpot = _this$props.selectedSpot,
          spots = _this$props.spots;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "SpotList"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "SpotList-feature"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "SpotList-breadcrumbs"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(common_TextButton__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Chicago"), " > Millennium Park"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Millennium Park"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, spots.length, " Spots Available")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_13___default.a, {
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
        src: selectedSpot.image
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-post-title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-post-title-text"
      }, selectedSpot.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-post-title-distance"
      }, selectedSpot.distance)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
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
        value: (selectedSpot.price / 100).toFixed(2),
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
      }, "Spot Details"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-address modal-text"
      }, selectedSpot.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-description"
      }, selectedSpot.description), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        className: "bookit-btn",
        onClick: this._onShowPostModal
      }, "$", (selectedSpot.price / 100).toFixed(2), " | Book it!")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "SpotList-spots"
      }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(spots).call(spots, function (spot) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(spot_SpotItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: spot.id,
          data: spot,
          isSelected: selectedSpot && selectedSpot.id === spot.id,
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

  return SpotList;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(SpotList, "propTypes", {
  selectedSpot: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  spots: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object).isRequired,
  setSpot: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
});


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SpotList, "SpotList", "/Users/michaelford/Desktop/ViteBrite07102019/vitebrite/src/js/search/spot-list/SpotList.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "../../../react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../../../webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.ff2bec1c4e096550c4bd.hot-update.js.map