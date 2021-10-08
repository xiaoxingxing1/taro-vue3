require("./runtime");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@nutui/nutui-taro/dist/nutui.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/nutui.es.js ***!
  \*********************************************************/
/*! exports provided: ActionSheet, Address, Avatar, BackTop, Barrage, Button, Calendar, Cell, CellGroup, Checkbox, CheckboxGroup, CircleProgress, Col, Collapse, CollapseItem, CountDown, CountUp, DatePicker, Dialog, Divider, Drag, Elevator, FixedNav, Icon, InfiniteLoading, Input, InputNumber, Layout, MenuItem, Navbar, NoticeBar, Notify, NumberKeyboard, OverLay, Picker, Popup, Price, Progress, Radio, RadioGroup, Range, Rate, Row, ShortPassword, Signature, Step, Steps, Swipe, Swiper, SwiperItem, Switch, Tab, TabPanel, Tabbar, TabbarItem, TextArea, Toast, Uploader, default */
/*! exports used: Button, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, Element, window) {/* unused harmony export ActionSheet */
/* unused harmony export Address */
/* unused harmony export Avatar */
/* unused harmony export BackTop */
/* unused harmony export Barrage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _sfc_main$Z; });
/* unused harmony export Calendar */
/* unused harmony export Cell */
/* unused harmony export CellGroup */
/* unused harmony export Checkbox */
/* unused harmony export CheckboxGroup */
/* unused harmony export CircleProgress */
/* unused harmony export Col */
/* unused harmony export Collapse */
/* unused harmony export CollapseItem */
/* unused harmony export CountDown */
/* unused harmony export CountUp */
/* unused harmony export DatePicker */
/* unused harmony export Dialog */
/* unused harmony export Divider */
/* unused harmony export Drag */
/* unused harmony export Elevator */
/* unused harmony export FixedNav */
/* unused harmony export Icon */
/* unused harmony export InfiniteLoading */
/* unused harmony export Input */
/* unused harmony export InputNumber */
/* unused harmony export Layout */
/* unused harmony export MenuItem */
/* unused harmony export Navbar */
/* unused harmony export NoticeBar */
/* unused harmony export Notify */
/* unused harmony export NumberKeyboard */
/* unused harmony export OverLay */
/* unused harmony export Picker */
/* unused harmony export Popup */
/* unused harmony export Price */
/* unused harmony export Progress */
/* unused harmony export Radio */
/* unused harmony export RadioGroup */
/* unused harmony export Range */
/* unused harmony export Rate */
/* unused harmony export Row */
/* unused harmony export ShortPassword */
/* unused harmony export Signature */
/* unused harmony export Step */
/* unused harmony export Steps */
/* unused harmony export Swipe */
/* unused harmony export Swiper */
/* unused harmony export SwiperItem */
/* unused harmony export Switch */
/* unused harmony export Tab */
/* unused harmony export TabPanel */
/* unused harmony export Tabbar */
/* unused harmony export TabbarItem */
/* unused harmony export TextArea */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _sfc_main$x; });
/* unused harmony export Uploader */
/* unused harmony export default */
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var pinyin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pinyin */ "./node_modules/pinyin/lib/web-pinyin.js");
/* harmony import */ var pinyin__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(pinyin__WEBPACK_IMPORTED_MODULE_15__);
var require;









var _components2, _components3, _components4, _create$s, _components9;

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;

var __defNormalProp = function __defNormalProp(obj, key, value) {
  return key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};

var __spreadValues = function __spreadValues(a, b) {
  for (var prop in b || (b = {})) {
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }

  if (__getOwnPropSymbols) {
    var _iterator = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(__getOwnPropSymbols(b)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return a;
};

var __spreadProps = function __spreadProps(a, b) {
  return __defProps(a, __getOwnPropDescs(b));
};

var __require = typeof require !== "undefined" ? require : function (x) {
  throw new Error('Dynamic require of "' + x + '" is not supported');
};

var __publicField = function __publicField(obj, key, value) {
  __defNormalProp(obj, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(key) !== "symbol" ? key + "" : key, value);

  return value;
};
/*!
* @nutui/nutui-taro v3.1.6 Sat Sep 18 2021 15:31:19 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/







function createComponent(name) {
  var componentName2 = "nut-" + name;
  return {
    componentName: componentName2,
    create: function create(_component) {
      _component.baseName = name;
      _component.name = componentName2;

      _component.install = function (vue) {
        vue.component(_component.name, _component);
      };

      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* defineComponent */ "n"])(_component);
    },
    createDemo: function createDemo(_component) {
      _component.baseName = name;
      _component.name = "demo-" + name;
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* defineComponent */ "n"])(_component);
    }
  };
}

var _createComponent = createComponent("avatar"),
    componentName$M = _createComponent.componentName,
    create$$ = _createComponent.create;

var _sfc_main$$ = create$$({
  props: {
    size: {
      type: String,
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["active-avatar"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _toRefs = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(props),
        size = _toRefs.size,
        shape = _toRefs.shape,
        bgColor = _toRefs.bgColor,
        icon = _toRefs.icon;

    var sizeValue = ["large", "normal", "small"];
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref2;

      var prefixCls = componentName$M;
      return _ref2 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "avatar-" + size.value, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "avatar-" + shape.value, true), _ref2;
    });
    var styles = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        width: sizeValue.indexOf(size.value) > -1 ? "" : "".concat(size.value, "px"),
        height: sizeValue.indexOf(size.value) > -1 ? "" : "".concat(size.value, "px"),
        backgroundColor: "".concat(bgColor.value)
      };
    });
    var iconStyles = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return !!icon.value ? icon.value : "";
    });
    var isShowText = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return slots.default;
    });

    var activeAvatar = function activeAvatar(event) {
      emit("active-avatar", event);
    };

    return {
      classes: classes,
      styles: styles,
      iconStyles: iconStyles,
      isShowText: isShowText,
      activeAvatar: activeAvatar
    };
  }
});

var _hoisted_1$y = {
  key: 0,
  class: "text"
};

function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.styles),
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.activeAvatar(_ctx.e);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
    class: "icon",
    name: _ctx.iconStyles
  }, null, 8, ["name"]), _ctx.isShowText ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$y, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 6);
}

_sfc_main$$.render = _sfc_render$T;

var pxCheck = function pxCheck(value) {
  return isNaN(Number(value)) ? String(value) : "".concat(value, "px");
};

var _createComponent2 = createComponent("icon"),
    componentName$L = _createComponent2.componentName,
    create$_ = _createComponent2.create;

var _sfc_main$_ = create$_({
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nut-icon"
    },
    fontClassName: {
      type: String,
      default: "nutui-iconfont"
    },
    color: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: "i"
    }
  },
  emits: ["click"],
  setup: function setup(props, _ref3) {
    var emit = _ref3.emit,
        slots = _ref3.slots;

    var handleClick = function handleClick(event) {
      emit("click", event);
    };

    var isImage = function isImage() {
      return props.name ? props.name.indexOf("/") !== -1 : false;
    };

    return function () {
      var _a;

      var _isImage = isImage();

      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])(_isImage ? "img" : props.tag, {
        class: _isImage ? "".concat(componentName$L, "__img") : "".concat(props.fontClassName, " ").concat(componentName$L, " ").concat(props.classPrefix, "-").concat(props.name),
        style: {
          color: props.color,
          fontSize: pxCheck(props.size),
          width: pxCheck(props.size),
          height: pxCheck(props.size)
        },
        onClick: handleClick,
        src: _isImage ? props.name : ""
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});

var _createComponent3 = createComponent("button"),
    componentName$K = _createComponent3.componentName,
    create$Z = _createComponent3.create;

var _sfc_main$Z = create$Z({
  components: Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, _sfc_main$_.name, _sfc_main$_),
  props: {
    color: String,
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup: function setup(props, _ref4) {
    var emit = _ref4.emit,
        slots = _ref4.slots;

    var _toRefs2 = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(props),
        type = _toRefs2.type,
        size = _toRefs2.size,
        shape = _toRefs2.shape,
        disabled = _toRefs2.disabled,
        loading = _toRefs2.loading,
        color = _toRefs2.color,
        plain = _toRefs2.plain,
        block = _toRefs2.block;

    var handleClick = function handleClick(event) {
      if (!loading.value && !disabled.value) {
        emit("click", event);
      }
    };

    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref5;

      var prefixCls = componentName$K;
      return _ref5 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, "".concat(prefixCls, "--").concat(type.value), type.value), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, "".concat(prefixCls, "--").concat(size.value), size.value), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, "".concat(prefixCls, "--").concat(shape.value), shape.value), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, "".concat(prefixCls, "--plain"), plain.value), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, "".concat(prefixCls, "--block"), block.value), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, "".concat(prefixCls, "--disabled"), disabled.value), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, "".concat(prefixCls, "--loading"), loading.value), _ref5;
    });
    var getStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _a;

      var style = {};

      if (color == null ? void 0 : color.value) {
        if (plain.value) {
          style.color = color.value;
          style.background = "#fff";

          if (!((_a = color.value) == null ? void 0 : _a.includes("gradient"))) {
            style.borderColor = color.value;
          }
        } else {
          style.color = "#fff";
          style.background = color.value;
        }
      }

      return style;
    });
    return {
      handleClick: handleClick,
      classes: classes,
      getStyle: getStyle
    };
  }
});

var _hoisted_1$x = {
  class: "nut-button__warp"
};

function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.getStyle),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$x, [_ctx.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 0,
    class: "nut-icon-loading"
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.icon && !_ctx.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 1,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.icon),
    name: _ctx.icon
  }, null, 8, ["class", "name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.$slots.default ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 2,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])({
      text: _ctx.icon || _ctx.loading
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])], 6);
}

_sfc_main$Z.render = _sfc_render$S;

var _createComponent4 = createComponent("cell"),
    componentName$J = _createComponent4.componentName,
    create$Y = _createComponent4.create;

var _sfc_main$Y = create$Y({
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    descTextAlign: {
      type: String,
      default: "right"
    },
    isLink: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: ""
    },
    replace: {
      type: Boolean,
      default: false
    },
    roundRadius: {
      type: [String, Number],
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup: function setup(props, _ref6) {
    var emit = _ref6.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref7;

      var prefixCls = componentName$J;
      return _ref7 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref7, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref7, "".concat(prefixCls, "--clickable"), props.isLink || props.to), _ref7;
    });
    var baseStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        borderRadius: pxCheck(props.roundRadius)
      };
    });

    var handleClick = function handleClick(event) {
      emit("click", event);
    };

    return {
      handleClick: handleClick,
      classes: classes,
      baseStyle: baseStyle
    };
  }
});

var _hoisted_1$w = {
  class: "title"
};
var _hoisted_2$v = {
  class: "nut-cell__title-desc"
};

function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.baseStyle),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default", {}, function () {
    return [_ctx.title || _ctx.subTitle || _ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      key: 0,
      class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-cell__title", {
        icon: _ctx.icon || _ctx.$slots.icon
      }])
    }, [_ctx.$slots.icon ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "icon", {
      key: 0
    }) : _ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
      key: 1,
      class: "icon",
      name: _ctx.icon
    }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.subTitle ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
      key: 2
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$w, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$v, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.subTitle), 1)], 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
      key: 3
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1)], 64))], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.desc ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      key: 1,
      class: "nut-cell__value",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
        "text-align": _ctx.descTextAlign
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.desc), 5)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.$slots.link ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "link", {
      key: 2
    }) : _ctx.isLink || _ctx.to ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
      key: 3,
      class: "nut-cell__link",
      name: "right"
    })) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)];
  })], 6);
}

_sfc_main$Y.render = _sfc_render$R;

var _createComponent5 = createComponent("cell-group"),
    componentName$I = _createComponent5.componentName,
    create$X = _createComponent5.create;

var _sfc_main$X = create$X({
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup: function setup() {
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$I;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    return {
      classes: classes
    };
  }
});

var _hoisted_1$v = {
  key: 0,
  class: "nut-cell-group__title"
};
var _hoisted_2$u = {
  class: "nut-cell-group__warp"
};

function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [_ctx.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$v, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$u, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")])], 2);
}

_sfc_main$X.render = _sfc_render$Q;

var _createComponent6 = createComponent("price"),
    componentName$H = _createComponent6.componentName,
    create$W = _createComponent6.create;

var _sfc_main$W = create$W({
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    needSymbol: {
      type: Boolean,
      default: true
    },
    symbol: {
      type: String,
      default: "&yen;"
    },
    decimalDigits: {
      type: Number,
      default: 2
    },
    thousands: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, componentName$H, true);
    });

    var replaceSpecialChar = function replaceSpecialChar(url) {
      url = url.replace(/&quot;/g, '"');
      url = url.replace(/&amp;/g, "&");
      url = url.replace(/&lt;/g, "<");
      url = url.replace(/&gt;/g, ">");
      url = url.replace(/&nbsp;/g, " ");
      url = url.replace(/&yen;/g, "\uFFE5");
      return url;
    };

    var showSymbol = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var symbol = props.needSymbol ? replaceSpecialChar(props.symbol) : "";
      return symbol;
    });

    var checkPoint = function checkPoint(price) {
      return String(price).indexOf(".") > 0;
    };

    var formatThousands = function formatThousands(num) {
      if (Number(num) == 0) {
        num = 0;
      }

      if (checkPoint(num)) {
        num = Number(num).toFixed(props.decimalDigits);
        num = typeof num.split(".") === "string" ? num.split(".") : num.split(".")[0];
      } else {
        num = num.toString();
      }

      if (props.thousands) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      } else {
        return num;
      }
    };

    var formatDecimal = function formatDecimal(decimalNum) {
      if (Number(decimalNum) == 0) {
        decimalNum = 0;
      }

      if (checkPoint(decimalNum)) {
        decimalNum = Number(decimalNum).toFixed(props.decimalDigits);
        decimalNum = typeof decimalNum.split(".") === "string" ? 0 : decimalNum.split(".")[1];
      } else {
        decimalNum = 0;
      }

      var result = "0." + decimalNum;
      var resultFixed = Number(result).toFixed(props.decimalDigits);
      return String(resultFixed).substring(2, resultFixed.length);
    };

    return {
      classes: classes,
      showSymbol: showSymbol,
      checkPoint: checkPoint,
      formatThousands: formatThousands,
      formatDecimal: formatDecimal,
      replaceSpecialChar: replaceSpecialChar
    };
  }
});

var _hoisted_1$u = ["innerHTML"];
var _hoisted_2$t = {
  class: "nut-price--big"
};

var _hoisted_3$l = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
  class: "nut-price--point"
}, ".", -1);

var _hoisted_4$g = {
  class: "nut-price--small"
};

function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [_ctx.needSymbol ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "nut-price--symbol",
    decode: "true",
    innerHTML: _ctx.showSymbol
  }, null, 8, _hoisted_1$u)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$t, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.formatThousands(_ctx.price)), 1), _hoisted_3$l, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_4$g, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.formatDecimal(_ctx.price)), 1)], 2);
}

_sfc_main$W.render = _sfc_render$P;

var _createComponent7 = createComponent("overlay"),
    componentName$G = _createComponent7.componentName,
    create$V = _createComponent7.create;

var overlayProps$1 = {
  visible: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  overlayClass: {
    type: String,
    default: ""
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  overlayStyle: {
    type: Object
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};

var _sfc_main$V = create$V({
  props: overlayProps$1,
  emits: ["click", "update:visible"],
  setup: function setup(props, _ref10) {
    var emit = _ref10.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref11;

      var prefixCls = componentName$G;
      return _ref11 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref11, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref11, props.overlayClass, true), _ref11;
    });
    var style = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return __spreadValues({
        animationDuration: "".concat(props.duration, "s"),
        zIndex: props.zIndex
      }, props.overlayStyle);
    });

    var touchmove = function touchmove(e) {
      if (props.lockScroll) e.preventDefault();
    };

    var onClick = function onClick(e) {
      emit("click", e);

      if (props.closeOnClickOverlay) {
        emit("update:visible", false);
      }
    };

    return {
      classes: classes,
      style: style,
      touchmove: touchmove,
      onClick: onClick
    };
  }
});

function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_12__[/* Transition */ "a"], {
    name: "overlay-fade"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
        onTouchmove: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
          return _ctx.touchmove && _ctx.touchmove.apply(_ctx, arguments);
        }, ["stop"])),
        onClick: _cache[1] || (_cache[1] = function () {
          return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
        }),
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.style)
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 38), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.visible]])];
    }),
    _: 3
  });
}

_sfc_main$V.render = _sfc_render$O;

var _createComponent8 = createComponent("divider"),
    componentName$F = _createComponent8.componentName,
    create$U = _createComponent8.create;

var _sfc_main$U = create$U({
  props: {
    contentPosition: {
      type: String,
      default: "center"
    },
    dashed: {
      type: Boolean,
      default: false
    },
    hairline: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  setup: function setup(props, context) {
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref12;

      var prefixCls = componentName$F;
      return _ref12 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, "".concat(prefixCls, "-center"), context.slots.default), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, "".concat(prefixCls, "-left"), props.contentPosition === "left"), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, "".concat(prefixCls, "-right"), props.contentPosition === "right"), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, "".concat(prefixCls, "-dashed"), props.dashed), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, "".concat(prefixCls, "-hairline"), props.hairline), _ref12;
    });
    return {
      classes: classes
    };
  }
});

function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 2);
}

_sfc_main$U.render = _sfc_render$N;

var _createComponent9 = createComponent("layout"),
    create$T = _createComponent9.create;

var _sfc_main$T = create$T({});

var _createComponent10 = createComponent("col"),
    componentName$E = _createComponent10.componentName,
    create$S = _createComponent10.create;

var _sfc_main$S = create$S({
  props: {
    span: {
      type: [String, Number],
      default: "24"
    },
    offset: {
      type: [String, Number],
      default: "0"
    }
  },
  setup: function setup(props) {
    var prefixCls = componentName$E;
    var gutter = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* inject */ "s"])("gutter");
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref13;

      return _ref13 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref13, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref13, prefixCls + "-gutter", gutter), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref13, "nut-col-" + props.span, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref13, "nut-col-offset-" + props.offset, true), _ref13;
    });
    var style = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    });
    return {
      classes: classes,
      style: style
    };
  }
});

function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.style)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 6);
}

_sfc_main$S.render = _sfc_render$M;

var _createComponent11 = createComponent("row"),
    componentName$D = _createComponent11.componentName,
    create$R = _createComponent11.create;

var _sfc_main$R = create$R({
  props: {
    type: {
      type: String,
      default: ""
    },
    gutter: {
      type: [String, Number],
      default: ""
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    wrap: {
      type: String,
      default: "nowrap"
    }
  },
  setup: function setup(props) {
    var prefixCls = componentName$D;
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* provide */ "D"])("gutter", props.gutter);

    var getClass = function getClass(prefix, type) {
      return prefix ? type ? "nut-row-".concat(prefix, "-").concat(type) : "" : "nut-row-".concat(type);
    };

    var getClasses = function getClasses() {
      return "\n              ".concat(getClass("", props.type), "\n              ").concat(getClass("justify", props.justify), "\n              ").concat(getClass("align", props.align), "\n              ").concat(getClass("flex", props.wrap), "\n              ").concat(prefixCls, "\n              ");
    };

    return {
      getClasses: getClasses
    };
  }
});

function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.getClasses())
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 2);
}

_sfc_main$R.render = _sfc_render$L;
var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }

  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }

  return "";
}

function useTouch() {
  var startX = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
  var startY = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
  var deltaX = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
  var deltaY = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
  var offsetX = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
  var offsetY = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
  var direction = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])("");

  var isVertical = function isVertical() {
    return direction.value === "vertical";
  };

  var isHorizontal = function isHorizontal() {
    return direction.value === "horizontal";
  };

  var reset = function reset() {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = "";
  };

  var start = function start(event) {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };

  var move = function move(event) {
    var touch = event.touches[0];
    deltaX.value = touch.clientX - startX.value;
    deltaY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);

    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  };

  return {
    move: move,
    start: start,
    reset: reset,
    startX: startX,
    startY: startY,
    deltaX: deltaX,
    deltaY: deltaY,
    offsetX: offsetX,
    offsetY: offsetY,
    direction: direction,
    isVertical: isVertical,
    isHorizontal: isHorizontal
  };
}

var useTaroRect = function useTaroRect(elementRef, Taro2) {
  var element = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* unref */ "v"])(elementRef);
  return new Promise(function (resolve) {
    var query = Taro2.createSelectorQuery();
    query.select("#".concat(element.id)).boundingClientRect();
    query.exec(function (res) {
      resolve(res[0]);
    });
  });
};

var _createComponent12 = createComponent("swipe"),
    componentName$C = _createComponent12.componentName,
    create$Q = _createComponent12.create;

var _sfc_main$Q = create$Q({
  props: {
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["open", "close"],
  setup: function setup(props, _ref14) {
    var emit = _ref14.emit;
    var refRandomId = Math.random().toString(36).slice(-8);
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$C;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });

    var getRefWidth = /*#__PURE__*/function () {
      var _ref16 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(ref2) {
        var _a, _b, _c, rect;

        return _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.getEnv() === "WEB")) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", ((_a = ref2.value) == null ? void 0 : _a.clientWidth) || ((_c = (_b = ref2.value) == null ? void 0 : _b.$el) == null ? void 0 : _c.clientWidth) || 0);

              case 4:
                _context.next = 6;
                return useTaroRect(ref2, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);

              case 6:
                rect = _context.sent;
                return _context.abrupt("return", rect.width || 0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getRefWidth(_x) {
        return _ref16.apply(this, arguments);
      };
    }();

    var leftRef = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var leftRefWidth = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
    var rightRef = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var rightRefWidth = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);

    var initWidth = /*#__PURE__*/function () {
      var _ref17 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
        return _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getRefWidth(leftRef);

              case 2:
                leftRefWidth.value = _context2.sent;
                _context2.next = 5;
                return getRefWidth(rightRef);

              case 5:
                rightRefWidth.value = _context2.sent;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function initWidth() {
        return _ref17.apply(this, arguments);
      };
    }();

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.nextTick(initWidth);
    });
    var opened = false;
    var position = "";
    var oldPosition = "";
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      offset: 0,
      moving: false
    });

    var open = function open() {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      opened = true;

      if (p) {
        state.offset = p === "left" ? -rightRefWidth.value : leftRefWidth.value;
      }

      emit("open", {
        name: props.name,
        position: position || p
      });
    };

    var close = function close() {
      state.offset = 0;
      opened = false;
      emit("close", {
        name: props.name,
        position: position
      });
    };

    var touchStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        transform: "translate3d(".concat(state.offset, "px, 0, 0)")
      };
    });

    var setoffset = function setoffset(deltaX) {
      position = deltaX > 0 ? "right" : "left";
      var offset = deltaX;

      switch (position) {
        case "left":
          if (opened && oldPosition === position) {
            offset = -rightRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > rightRefWidth.value ? -rightRefWidth.value : deltaX;
          }

          break;

        case "right":
          if (opened && oldPosition === position) {
            offset = leftRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > leftRefWidth.value ? leftRefWidth.value : deltaX;
          }

          break;
      }

      state.offset = offset;
    };

    var touch = useTouch();
    var touchMethods = {
      onTouchStart: function onTouchStart(event) {
        if (props.disabled) return;
        touch.start(event);
      },
      onTouchMove: function onTouchMove(event) {
        return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
          return _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!props.disabled) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return");

                case 2:
                  if (touch.isVertical() == false) {
                    state.moving = true;
                    touch.move(event);
                    setoffset(touch.deltaX.value);
                    event.preventDefault();
                  }

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      onTouchEnd: function onTouchEnd() {
        if (state.moving) {
          state.moving = false;
          oldPosition = position;

          switch (position) {
            case "left":
              if (Math.abs(state.offset) <= rightRefWidth.value / 2) {
                close();
              } else {
                state.offset = -rightRefWidth.value;
                open();
              }

              break;

            case "right":
              if (Math.abs(state.offset) <= leftRefWidth.value / 2) {
                close();
              } else {
                state.offset = leftRefWidth.value;
                open();
              }

              break;
          }
        }
      }
    };
    return __spreadProps(__spreadValues({
      classes: classes,
      touchStyle: touchStyle
    }, touchMethods), {
      leftRef: leftRef,
      rightRef: rightRef,
      refRandomId: refRandomId,
      open: open,
      close: close
    });
  }
});

var _hoisted_1$t = ["id"];
var _hoisted_2$s = {
  class: "nut-swipe__content"
};
var _hoisted_3$k = ["id"];

function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.touchStyle),
    onTouchstart: _cache[0] || (_cache[0] = function () {
      return _ctx.onTouchStart && _ctx.onTouchStart.apply(_ctx, arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = function () {
      return _ctx.onTouchMove && _ctx.onTouchMove.apply(_ctx, arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function () {
      return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
    }),
    onTouchcancel: _cache[3] || (_cache[3] = function () {
      return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-swipe__left",
    ref: "leftRef",
    id: "leftRef-" + _ctx.refRandomId
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "left")], 8, _hoisted_1$t), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$s, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-swipe__right",
    ref: "rightRef",
    id: "rightRef-" + _ctx.refRandomId
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "right")], 8, _hoisted_3$k)], 38);
}

_sfc_main$Q.render = _sfc_render$K;
var count = 0;
var CLSNAME = "nut-overflow-hidden";

var useLockScroll = function useLockScroll(isLock) {
  var lock = function lock() {
    if (isLock()) {
      !count && document.body.classList.add(CLSNAME);
      count++;
    }
  };

  var unlock = function unlock() {
    if (isLock() && count) {
      count--;
      !count && document.body.classList.remove(CLSNAME);
    }
  };

  return [lock, unlock];
};

var _createComponent13 = createComponent("overlay"),
    componentName$B = _createComponent13.componentName,
    create$P = _createComponent13.create;

var overlayProps = {
  visible: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  overlayClass: {
    type: String,
    default: ""
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  overlayStyle: {
    type: Object
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};

var _sfc_main$P = create$P({
  props: overlayProps,
  emits: ["click", "update:visible"],
  setup: function setup(props, _ref18) {
    var emit = _ref18.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref19;

      var prefixCls = componentName$B;
      return _ref19 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref19, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref19, props.overlayClass, true), _ref19;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      value ? lock() : unlock();
    });

    var lock = function lock() {
      if (props.lockScroll && props.visible) {
        document.body.classList.add("nut-overflow-hidden");
      }
    };

    var unlock = function unlock() {
      document.body.classList.remove("nut-overflow-hidden");
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onDeactivated */ "y"])(unlock);
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onBeforeUnmount */ "x"])(unlock);
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(lock);
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onActivated */ "v"])(lock);
    var style = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return __spreadValues({
        animationDuration: "".concat(props.duration, "s"),
        zIndex: props.zIndex
      }, props.overlayStyle);
    });

    var touchmove = function touchmove(e) {
      if (props.lockScroll) e.preventDefault();
    };

    var onClick = function onClick(e) {
      emit("click", e);

      if (props.closeOnClickOverlay) {
        emit("update:visible", false);
      }
    };

    return {
      classes: classes,
      style: style,
      touchmove: touchmove,
      onClick: onClick
    };
  }
});

function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_12__[/* Transition */ "a"], {
    name: "overlay-fade"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
        onTouchmove: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
          return _ctx.touchmove && _ctx.touchmove.apply(_ctx, arguments);
        }, ["stop"])),
        onClick: _cache[1] || (_cache[1] = function () {
          return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
        }),
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.style)
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 38), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.visible]])];
    }),
    _: 3
  });
}

_sfc_main$P.render = _sfc_render$J;

var _createComponent14 = createComponent("icon"),
    componentName$A = _createComponent14.componentName,
    create$O = _createComponent14.create;

var _sfc_main$O = create$O({
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nut-icon"
    },
    fontClassName: {
      type: String,
      default: "nutui-iconfont"
    },
    color: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: "i"
    }
  },
  emits: ["click"],
  setup: function setup(props, _ref20) {
    var emit = _ref20.emit,
        slots = _ref20.slots;

    var handleClick = function handleClick(event) {
      emit("click", event);
    };

    var isImage = function isImage() {
      return props.name ? props.name.indexOf("/") !== -1 : false;
    };

    return function () {
      var _a;

      var _isImage = isImage();

      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])(_isImage ? "img" : props.tag, {
        class: _isImage ? "".concat(componentName$A, "__img") : "".concat(props.fontClassName, " ").concat(componentName$A, " ").concat(props.classPrefix, "-").concat(props.name),
        style: {
          color: props.color,
          fontSize: pxCheck(props.size),
          width: pxCheck(props.size),
          height: pxCheck(props.size)
        },
        onClick: handleClick,
        src: _isImage ? props.name : ""
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});

var _createComponent15 = createComponent("popup"),
    componentName$z = _createComponent15.componentName,
    create$N = _createComponent15.create;

var _zIndex$1 = 2e3;

var popupProps$1 = __spreadProps(__spreadValues({}, overlayProps), {
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  style: {
    type: Object
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: false
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  closeIcon: {
    type: String,
    default: "close"
  },
  destroyOnClose: {
    type: Boolean,
    default: true
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: true
  },
  round: {
    type: Boolean,
    default: false
  }
});

var _sfc_main$N = create$N({
  components: (_components2 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_components2, _sfc_main$P.name, _sfc_main$P), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_components2, _sfc_main$O.name, _sfc_main$O), _components2),
  props: __spreadValues({}, popupProps$1),
  emits: ["click", "click-close-icon", "open", "close", "opend", "closed", "update:visible", "click-overlay"],
  setup: function setup(props, _ref21) {
    var emit = _ref21.emit;
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      zIndex: props.zIndex ? props.zIndex : _zIndex$1,
      showSlot: true,
      transitionName: "popup-fade-".concat(props.position),
      overLayCount: 1,
      keepAlive: false
    });

    var _useLockScroll = useLockScroll(function () {
      return props.lockScroll;
    }),
        _useLockScroll2 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useLockScroll, 2),
        lockScroll = _useLockScroll2[0],
        unlockScroll = _useLockScroll2[1];

    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref22;

      var prefixCls = componentName$z;
      return _ref22 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref22, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref22, "round", props.round), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref22, "popup-".concat(props.position), true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref22, props.popClass, true), _ref22;
    });
    var popStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return __spreadValues({
        zIndex: state.zIndex,
        animationDuration: props.duration ? "".concat(props.duration, "s") : "initial"
      }, props.style);
    });

    var open = function open() {
      if (!props.visible) {
        if (props.zIndex !== void 0) {
          _zIndex$1 = Number(props.zIndex);
        }

        emit("update:visible", true);
        lockScroll();
        state.zIndex = ++_zIndex$1;
      }

      if (props.destroyOnClose) {
        state.showSlot = true;
      }

      emit("open");
    };

    var close = function close() {
      if (props.visible) {
        unlockScroll();
        emit("update:visible", false);

        if (props.destroyOnClose) {
          setTimeout(function () {
            state.showSlot = false;
            emit("close");
          }, +props.duration * 1e3);
        }
      }
    };

    var onClick = function onClick(e) {
      emit("click", e);
    };

    var onClickCloseIcon = function onClickCloseIcon(e) {
      emit("click-close-icon", e);
      close();
    };

    var onClickOverlay = function onClickOverlay(e) {
      if (props.closeOnClickOverlay) {
        emit("click-overlay", e);
        close();
      }
    };

    var onOpened = function onOpened(e) {
      emit("opend", e);
    };

    var onClosed = function onClosed(e) {
      emit("closed", e);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      props.transition ? state.transitionName = props.transition : state.transitionName = "popup-slide-".concat(props.position);
      props.visible && open();
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onBeforeUnmount */ "x"])(function () {
      props.visible && close();
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onBeforeMount */ "w"])(function () {
      if (props.visible) {
        unlockScroll();
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onActivated */ "v"])(function () {
      if (state.keepAlive) {
        emit("update:visible", true);
        state.keepAlive = false;
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onDeactivated */ "y"])(function () {
      if (props.visible) {
        close();
        state.keepAlive = true;
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      if (value) {
        open();
      } else {
        close();
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.position;
    }, function (value) {
      value === "center" ? state.transitionName = "popup-fade" : state.transitionName = "popup-slide-".concat(value);
    });
    return __spreadProps(__spreadValues({}, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      popStyle: popStyle,
      classes: classes,
      onClick: onClick,
      onClickCloseIcon: onClickCloseIcon,
      onClickOverlay: onClickOverlay,
      onOpened: onOpened,
      onClosed: onClosed
    });
  }
});

function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_overlay = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-overlay");

  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Teleport */ "d"], {
    to: _ctx.teleport
  }, [_ctx.overlay ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_overlay, {
    key: 0,
    visible: _ctx.visible,
    "close-on-click-overlay": _ctx.closeOnClickOverlay,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.overlayClass),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.overlayStyle),
    "z-index": _ctx.zIndex,
    "lock-scroll": _ctx.lockScroll,
    duration: _ctx.duration,
    onClick: _ctx.onClickOverlay
  }, null, 8, ["visible", "close-on-click-overlay", "class", "style", "z-index", "lock-scroll", "duration", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(vue__WEBPACK_IMPORTED_MODULE_12__[/* Transition */ "a"], {
    name: _ctx.transitionName,
    onAfterEnter: _ctx.onOpened,
    onAfterLeave: _ctx.onClosed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.popStyle),
        onClick: _cache[1] || (_cache[1] = function () {
          return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
        })
      }, [_ctx.showSlot ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default", {
        key: 0
      }) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.closeable ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        key: 1,
        onClick: _cache[0] || (_cache[0] = function () {
          return _ctx.onClickCloseIcon && _ctx.onClickCloseIcon.apply(_ctx, arguments);
        }),
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nutui-popup__close-icon", "nutui-popup__close-icon--" + _ctx.closeIconPosition])
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
        name: _ctx.closeIcon,
        size: "12px"
      }, null, 8, ["name"])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 6), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.visible]])];
    }),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]);
}

_sfc_main$N.render = _sfc_render$I;

var _createComponent16 = createComponent("actionsheet"),
    componentName$y = _createComponent16.componentName,
    create$M = _createComponent16.create;

var _sfc_main$M = create$M({
  props: __spreadProps(__spreadValues({}, popupProps$1), {
    cancelTxt: {
      type: String,
      default: ""
    },
    optionTag: {
      type: String,
      default: "name"
    },
    optionSubTag: {
      type: String,
      default: "subname"
    },
    chooseTagValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ee0a24"
    },
    description: {
      type: String,
      default: ""
    },
    menuItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }),
  emits: ["cancel", "choose", "update:visible"],
  setup: function setup(props, _ref23) {
    var emit = _ref23.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$y;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });

    var isHighlight = function isHighlight(item) {
      return props.chooseTagValue && props.chooseTagValue === item[props.optionTag] ? props.color : "#1a1a1a";
    };

    var cancelActionSheet = function cancelActionSheet() {
      emit("cancel");
      emit("update:visible", false);
    };

    var chooseItem = function chooseItem(item, index) {
      if (!item.disable) {
        emit("choose", item, index);
        emit("update:visible", false);
      }
    };

    var close = function close() {
      emit("close");
      emit("update:visible", false);
    };

    return {
      isHighlight: isHighlight,
      cancelActionSheet: cancelActionSheet,
      chooseItem: chooseItem,
      close: close,
      classes: classes
    };
  }
});

var _hoisted_1$s = {
  class: "nut-actionsheet-panel"
};
var _hoisted_2$r = {
  key: 0,
  class: "nut-actionsheet-title"
};
var _hoisted_3$j = {
  key: 1,
  class: "nut-actionsheet-item desc"
};
var _hoisted_4$f = {
  key: 2,
  class: "nut-actionsheet-menu"
};
var _hoisted_5$d = ["onClick"];
var _hoisted_6$a = {
  class: "subdesc"
};

function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-popup");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_popup, {
    "pop-class": "popclass",
    visible: _ctx.visible,
    position: "bottom",
    round: "",
    onClickOverlay: _ctx.close
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$s, [_ctx.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_2$r, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.description ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_3$j, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.description), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.menuItems.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_4$f, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.menuItems, function (item, index) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
          class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-actionsheet-item", {
            "nut-actionsheet-item-disabled": item.disable
          }]),
          style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
            color: _ctx.isHighlight(item)
          }),
          key: index,
          onClick: function onClick($event) {
            return _ctx.chooseItem(item, index);
          }
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item[_ctx.optionTag]), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_6$a, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item[_ctx.optionSubTag]), 1)], 14, _hoisted_5$d);
      }), 128))])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.cancelTxt ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        key: 3,
        class: "nut-actionsheet-cancel",
        onClick: _cache[0] || (_cache[0] = function () {
          return _ctx.cancelActionSheet && _ctx.cancelActionSheet.apply(_ctx, arguments);
        })
      }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.cancelTxt), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])];
    }),
    _: 1
  }, 8, ["visible", "onClickOverlay"])], 2);
}

_sfc_main$M.render = _sfc_render$H;

var _createComponent17 = createComponent("backtop"),
    componentName$x = _createComponent17.componentName,
    create$L = _createComponent17.create;

var _sfc_main$L = create$L({
  props: {
    height: {
      type: String,
      default: "100vh"
    },
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    zIndex: {
      type: Number,
      default: 10
    },
    distance: {
      type: Number,
      default: 200
    }
  },
  emits: ["click"],
  setup: function setup(props, _ref25) {
    var emit = _ref25.emit;
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      backTop: false,
      scrollTop: 1
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref26;

      var prefixCls = componentName$x;
      return _ref26 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref26, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref26, "show", state.backTop), _ref26;
    });
    var style = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        right: "".concat(props.right, "px"),
        bottom: "".concat(props.bottom, "px"),
        zIndex: props.zIndex
      };
    });

    var scroll = function scroll(e) {
      state.scrollTop = 2;
      state.backTop = e.detail.scrollTop >= props.distance;
    };

    var click = function click(e) {
      state.scrollTop = 1;
      emit("click", e);
    };

    return __spreadProps(__spreadValues({}, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      classes: classes,
      style: style,
      scroll: scroll,
      click: click
    });
  }
});

function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_scroll_view = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("scroll-view");

  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_scroll_view, {
    "scroll-y": true,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: _ctx.height
    }),
    onScroll: _ctx.scroll,
    "scroll-top": _ctx.scrollTop,
    "scroll-with-animation": "true"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "content")];
    }),
    _: 3
  }, 8, ["style", "onScroll", "scroll-top"]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.style),
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.click && _ctx.click.apply(_ctx, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "icon", {}, function () {
    return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
      size: "19px",
      class: "nut-backtop-main",
      name: "top"
    })];
  })], 6)]);
}

_sfc_main$L.render = _sfc_render$G;

var _createComponent18 = createComponent("collapse"),
    create$K = _createComponent18.create;

var _sfc_main$K = create$K({
  props: {
    active: {
      type: [String, Number, Array]
    },
    accordion: {
      type: Boolean
    },
    titleIcon: {
      type: String,
      default: ""
    },
    titleIconSize: {
      type: String,
      default: "16px"
    },
    titleIconColor: {
      type: String,
      default: ""
    },
    titleIconPosition: {
      type: String,
      default: "left"
    },
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "16px"
    },
    iconColor: {
      type: String,
      default: ""
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  emits: ["update:active", "change"],
  setup: function setup(props, _ref27) {
    var emit = _ref27.emit,
        slots = _ref27.slots;

    var changeVal = function changeVal(val) {
      emit("update:active", val);
      emit("change", val);
    };

    var changeValAry = function changeValAry(name) {
      var activeItem = props.active instanceof Object ? Object.values(props.active) : props.active;
      var index = -1;
      activeItem.forEach(function (item, idx) {
        if (String(item) == String(name)) {
          index = idx;
        }
      });
      index > -1 ? activeItem.splice(index, 1) : activeItem.push(name);
      changeVal(activeItem);
    };

    var isExpanded = function isExpanded(name) {
      var accordion = props.accordion,
          active = props.active;

      if (accordion) {
        return typeof active === "number" || typeof active === "string" ? active == name : false;
      }
    };

    var activeIndex = function activeIndex() {
      var _a;

      var activeCollapse = props.active;
      var childrenList = (_a = slots.default) == null ? void 0 : _a.call(slots);
      var act = [];
      childrenList.forEach(function (item, index) {
        if (typeof activeCollapse == "number" || typeof activeCollapse == "string") {
          if (item.props.name == activeCollapse) {
            act.push(item.flag);
            return act;
          }
        } else {
          var ary = Array.from(activeCollapse);

          if (ary.includes(String(item.props.name)) || ary.includes(Number(item.props.name))) {
            act.push(item.flag);
          }
        }
      });
      return act;
    };

    var getParentChildren = function getParentChildren() {
      var _a;

      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* provide */ "D"])("collapseParent", {
      children: [],
      props: props,
      changeValAry: changeValAry,
      changeVal: changeVal,
      isExpanded: isExpanded,
      activeIndex: activeIndex,
      getParentChildren: getParentChildren
    });
  }
});

function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")]);
}

_sfc_main$K.render = _sfc_render$F;

var _createComponent19 = createComponent("collapse-item"),
    create$J = _createComponent19.create,
    componentName$w = _createComponent19.componentName;

var _sfc_main$J = create$J({
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [Number, String],
      default: -1,
      required: true
    },
    collapseRef: {
      type: Object
    }
  },
  setup: function setup(props) {
    var collapse = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* inject */ "s"])("collapseParent");
    var parent = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])(collapse);
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref28;

      var prefixCls = componentName$w;
      return _ref28 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref28, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref28, "".concat(prefixCls, "-icon"), parent.props.icon), _ref28;
    });

    var relation = function relation(child) {
      if (child.proxy) {
        parent.children.push(child.proxy);
      }
    };

    relation(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])());
    var proxyData = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      icon: parent.props.icon,
      iconSize: parent.props.iconSize,
      iconColor: parent.props.iconColor,
      openExpanded: false,
      iconStyle: {
        transform: "rotate(0deg)",
        marginTop: parent.props.iconHeght ? "-" + parent.props.iconHeght / 2 + "px" : "-10px"
      }
    });
    var titleIconStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      titleIcon: parent.props.titleIcon,
      titleIconSize: parent.props.titleIconSize,
      titleIconColor: parent.props.titleIconColor,
      titleIconPosition: parent.props.titleIconPosition
    });
    var wrapperRef = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var contentRef = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);

    var onTransitionEnd = function onTransitionEnd() {
      var wrapperRefEle = document.getElementsByClassName("collapse-wrapper")[0];
      wrapperRefEle.style.willChange = "auto";
    };

    var animation = function animation() {
      var wrapperRefEle = wrapperRef.value;
      var contentRefEle = contentRef.value;

      if (!wrapperRefEle || !contentRefEle) {
        return;
      }

      var offsetHeight = contentRefEle.offsetHeight;

      if (offsetHeight) {
        var contentHeight = "".concat(offsetHeight, "px");
        wrapperRefEle.style.willChange = "height";
        wrapperRefEle.style.height = !proxyData.openExpanded ? 0 : contentHeight;

        if (parent.props.icon && !proxyData.openExpanded) {
          proxyData.iconStyle["transform"] = "rotate(0deg)";
        } else {
          proxyData.iconStyle["transform"] = "rotate(" + parent.props.rotate + "deg)";
        }
      }

      if (!proxyData.openExpanded) {
        onTransitionEnd();
      }
    };

    var open = function open() {
      proxyData.openExpanded = !proxyData.openExpanded;
      animation();
    };

    var defaultOpen = function defaultOpen() {
      open();

      if (parent.props.icon) {
        proxyData["iconStyle"]["transform"] = "rotate(" + parent.props.rotate + "deg)";
      }
    };

    var currentName = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return props.name;
    });

    var toggleOpen = function toggleOpen() {
      if (parent.props.accordion) {
        parent.children.forEach(function (item, index) {
          if (currentName.value == item.name) {
            item.changeOpen(!item.openExpanded);
          } else {
            item.changeOpen(false);
            item.animation();
          }
        });
        Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* nextTick */ "u"])(function () {
          parent.changeVal(currentName.value);
          animation();
        });
      } else {
        parent.changeValAry(props.name);
        open();
      }
    };

    var changeOpen = function changeOpen(bol) {
      proxyData.openExpanded = bol;
    };

    var expanded = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      if (parent) {
        return parent.isExpanded(props.name);
      }

      return null;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(expanded, function (value, oldValue) {
      if (value) {
        proxyData.openExpanded = true;
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      var name = props.name;
      var active = parent && parent.props.active;

      if (typeof active == "number" || typeof active == "string") {
        if (name == active) {
          defaultOpen();
        }
      } else if (Object.values(active) instanceof Array) {
        var f = Object.values(active).filter(function (item) {
          return item == name;
        });

        if (f.length > 0) {
          defaultOpen();
        }
      }
    });
    return __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      classes: classes
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(proxyData)), Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(parent.props)), Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(titleIconStyle)), {
      wrapperRef: wrapperRef,
      contentRef: contentRef,
      open: open,
      toggleOpen: toggleOpen,
      changeOpen: changeOpen,
      animation: animation
    });
  }
});

var _hoisted_1$r = {
  class: "collapse-title"
};
var _hoisted_2$q = {
  class: "collapse-title-value"
};
var _hoisted_3$i = ["innerHTML"];
var _hoisted_4$e = {
  key: 0,
  class: "subTitle"
};
var _hoisted_5$c = ["innerHTML"];
var _hoisted_6$9 = {
  class: "collapse-wrapper",
  ref: "wrapperRef"
};
var _hoisted_7$7 = {
  class: "collapse-content",
  ref: "contentRef"
};

function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["collapse-item", {
      "item-expanded": _ctx.openExpanded
    }, {
      "nut-collapse-item-disabled": _ctx.disabled
    }]),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.toggleOpen && _ctx.toggleOpen.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$r, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$q, [_ctx.titleIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 0,
    name: _ctx.titleIcon,
    size: _ctx.titleIconSize,
    color: _ctx.titleIconColor,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])([_ctx.titleIconPosition == "left" ? "titleIconLeft" : "titleIconRight"])
  }, null, 8, ["name", "size", "color", "class"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.$slots.mTitle ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "mTitle", {
    key: 1
  }) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 2,
    innerHTML: _ctx.title
  }, null, 8, _hoisted_3$i))])])]), _ctx.$slots.sTitle ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_4$e, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "sTitle")])) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 1,
    innerHTML: _ctx.subTitle,
    class: "subTitle"
  }, null, 8, _hoisted_5$c)), _ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 2,
    name: _ctx.icon,
    size: _ctx.iconSize,
    color: _ctx.iconColor,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["collapse-icon", {
      "col-expanded": _ctx.openExpanded
    }, {
      "collapse-icon-disabled": _ctx.disabled
    }]),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.iconStyle)
  }, null, 8, ["name", "size", "color", "class", "style"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 2), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_6$9, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_7$7, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 512)], 512)], 2);
}

_sfc_main$J.render = _sfc_render$E;
var _window = window;

function requestAniFrame() {
  if (typeof _window !== "undefined") {
    return _window.requestAnimationFrame || _window.webkitRequestAnimationFrame || function (callback) {
      _window.setTimeout(callback, 1e3 / 60);
    };
  } else {
    return function (callback) {
      setTimeout(callback, 1e3 / 60);
    };
  }
}

var requestAniFrame$1 = requestAniFrame();

var _createComponent20 = createComponent("drag"),
    componentName$v = _createComponent20.componentName,
    create$I = _createComponent20.create;

var _sfc_main$I = create$I({
  props: {
    attract: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "all"
    },
    boundary: {
      type: Object,
      default: function _default() {
        return {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        };
      }
    }
  },
  setup: function setup(props, _ref29) {
    var emit = _ref29.emit;
    var myDrag = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      keepAlive: false,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      initTop: 0,
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      top: 0,
      left: 0,
      position: {
        x: 0,
        y: 0
      },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = "nut-taro-drag";
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    var domElem = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.getSystemInfoSync();

    function getInfo() {
      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
      query.select(".myDrag").boundingClientRect(function (rec) {
        state.elWidth = rec.width;
        state.elHeight = rec.height;
        state.initTop = rec.top;
      }).exec();
      console.log(domElem.windowWidth);
      state.screenWidth = domElem.screenWidth;
      state.screenHeight = domElem.screenHeight;
    }

    function goLeft() {
      if (state.boundary.left) {
        if (+state.left.split("px")[0] > state.boundary.left) {
          state.left = +state.left.split("px")[0] - 10 + "px";
          requestAniFrame$1(function () {
            goLeft();
          });
        } else {
          state.left = "".concat(state.boundary.left, "px");
        }
      } else {
        if (+state.left.split("px")[0] > 10) {
          state.left = +state.left.split("px")[0] - 10 + "px";
          requestAniFrame$1(function () {
            goLeft();
          });
        } else {
          state.left = "0px";
        }
      }
    }

    function goRight(rightLocation) {
      if (rightLocation - parseInt(state.left.split("px")[0]) > 10) {
        state.left = parseInt(state.left.split("px")[0]) + 10 + "px";
        requestAniFrame$1(function () {
          goRight(rightLocation);
        });
      } else {
        state.left = rightLocation + "px";
      }
    }

    function touchMove(e) {
      e.preventDefault();

      if (e.touches.length === 1) {
        var touch = e.touches[0];
        state.nx = touch.clientX - state.position.x;
        state.ny = touch.clientY - state.position.y;
        state.xPum = state.startLeft + state.nx;
        state.yPum = state.startTop + state.ny;
        var rightLocation = state.screenWidth - state.elWidth - state.boundary.right;

        if (Math.abs(state.xPum) > rightLocation) {
          state.xPum = rightLocation;
        } else if (state.xPum <= state.boundary.left) {
          state.xPum = state.boundary.left;
        }

        if (state.yPum < state.boundary.top) {
          state.yPum = state.boundary.top;
        } else if (state.yPum > state.screenHeight - state.elHeight - state.boundary.bottom) {
          state.yPum = state.screenHeight - state.elHeight - state.boundary.bottom;
        }

        if (props.direction != "y") {
          state.left = state.xPum;
        }

        if (props.direction != "x") {
          state.top = state.yPum;
        }
      }
    }

    function touchEnd(e) {
      var touch = e.changedTouches[0];
      var currX = touch.clientX;
      var rightLocation = state.screenWidth - state.elWidth - state.boundary.right;

      if (currX > rightLocation) {
        currX = rightLocation;
      } else if (currX < state.boundary.left) {
        currX = state.boundary.left;
      } else {
        currX = currX < state.screenWidth / 2 ? state.boundary.left : rightLocation;
      }

      if (props.direction != "y" && props.attract) {
        if (currX < state.screenWidth / 2) {
          requestAniFrame$1(function () {
            goLeft();
          });
        } else {
          requestAniFrame$1(function () {
            goRight(rightLocation);
          });
        }
      }

      if (props.direction !== "x") {
        state.top = state.yPum;
      }
    }

    function touchStart(e) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;

      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
      var id = (_a = e == null ? void 0 : e.mpEvent) == null ? void 0 : _a.currentTarget.id;
      var offsetTop = (_b = e == null ? void 0 : e.currentTarget) == null ? void 0 : _b.offsetTop;
      var offsetLeft = (_c = e == null ? void 0 : e.currentTarget) == null ? void 0 : _c.offsetLeft;
      var touches = e.touches[0];
      var mobileTop = (_f = (_e = (_d = e.touches[0]) == null ? void 0 : _d.target) == null ? void 0 : _e.parentNode) == null ? void 0 : _f.style.top;
      var mobileLeft = (_i = (_h = (_g = e.touches[0]) == null ? void 0 : _g.target) == null ? void 0 : _h.parentNode) == null ? void 0 : _i.style.left;
      query.selectAll(".myDrag").boundingClientRect(function (rec) {
        rec.forEach(function (element) {
          if (id && id == element.id) {
            state.startTop = element.top - offsetTop;
            state.startLeft = element.left - offsetLeft;
          } else if (mobileTop) {
            state.startTop = Number(mobileTop.slice(0, -2));
            state.startLeft = Number(mobileLeft.slice(0, -2));
          }
        });
      }).exec();
      state.position.x = touches.clientX;
      state.position.y = touches.clientY;
    }

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      setTimeout(function () {
        getInfo();
      }, 200);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["eventCenter"].once(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["getCurrentInstance"])().router.onReady, function () {});
      state.boundary = props.boundary;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onActivated */ "v"])(function () {
      if (state.keepAlive) {
        state.keepAlive = false;
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onDeactivated */ "y"])(function () {
      state.keepAlive = true;
      myDrag.removeEventListener("touchstart", touchStart);
      myDrag.removeEventListener("touchmove", touchMove);
      myDrag.removeEventListener("touchend", touchEnd);
    });
    return {
      classes: classes,
      myDrag: myDrag,
      touchStart: touchStart,
      touchMove: touchMove,
      touchEnd: touchEnd,
      state: state
    };
  }
});

function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])([_ctx.classes, "myDrag"]),
    ref: "myDrag",
    onTouchstart: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.touchStart($event);
    }),
    onTouchmove: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function ($event) {
      return _ctx.touchMove($event);
    }, ["prevent"])),
    catchtouchmove: "true",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      transform: " translate(".concat(_ctx.state.left + "px", ", ").concat(_ctx.state.top + "px", ")"),
      top: _ctx.state.top + "px",
      left: _ctx.state.left + "px"
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 38);
}

_sfc_main$I.render = _sfc_render$D;

var _createComponent21 = createComponent("popup"),
    componentName$u = _createComponent21.componentName,
    create$H = _createComponent21.create;

var _zIndex = 2e3;

var popupProps = __spreadProps(__spreadValues({}, overlayProps$1), {
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  style: {
    type: Object
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: false
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  closeIcon: {
    type: String,
    default: "close"
  },
  destroyOnClose: {
    type: Boolean,
    default: true
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: true
  },
  round: {
    type: Boolean,
    default: false
  }
});

var _sfc_main$H = create$H({
  children: [_sfc_main$V],
  components: (_components3 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_components3, _sfc_main$V.name, _sfc_main$V), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_components3, _sfc_main$_.name, _sfc_main$_), _components3),
  props: __spreadValues({}, popupProps),
  emits: ["click", "click-close-icon", "open", "close", "opend", "closed", "update:visible", "click-overlay"],
  setup: function setup(props, _ref31) {
    var emit = _ref31.emit;
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])();
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      zIndex: props.zIndex ? props.zIndex : _zIndex,
      showSlot: true,
      transitionName: "popup-fade-".concat(props.position),
      overLayCount: 1,
      keepAlive: false
    });

    var _useLockScroll3 = useLockScroll(function () {
      return props.lockScroll;
    }),
        _useLockScroll4 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useLockScroll3, 2),
        lockScroll = _useLockScroll4[0],
        unlockScroll = _useLockScroll4[1];

    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref32;

      var prefixCls = componentName$u;
      return _ref32 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref32, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref32, "round", props.round), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref32, "popup-".concat(props.position), true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref32, props.popClass, true), _ref32;
    });
    var popStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return __spreadValues({
        zIndex: state.zIndex,
        animationDuration: props.duration ? "".concat(props.duration, "s") : "initial"
      }, props.style);
    });

    var open = function open() {
      if (!props.visible) {
        if (props.zIndex !== void 0) {
          _zIndex = Number(props.zIndex);
        }

        emit("update:visible", true);
        lockScroll();
        state.zIndex = ++_zIndex;
      }

      if (props.destroyOnClose) {
        state.showSlot = true;
      }

      emit("open");
    };

    var close = function close() {
      if (props.visible) {
        unlockScroll();
        emit("update:visible", false);

        if (props.destroyOnClose) {
          setTimeout(function () {
            state.showSlot = false;
            emit("close");
          }, +props.duration * 1e3);
        }
      }
    };

    var onClick = function onClick(e) {
      emit("click", e);
    };

    var onClickCloseIcon = function onClickCloseIcon(e) {
      emit("click-close-icon", e);
      close();
    };

    var onClickOverlay = function onClickOverlay(e) {
      if (props.closeOnClickOverlay) {
        emit("click-overlay", e);
        close();
      }
    };

    var onOpened = function onOpened(e) {
      emit("opend", e);
    };

    var onClosed = function onClosed(e) {
      emit("closed", e);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      props.transition ? state.transitionName = props.transition : state.transitionName = "popup-slide-".concat(props.position);
      props.visible && open();
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onBeforeUnmount */ "x"])(function () {
      props.visible && close();
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onBeforeMount */ "w"])(function () {
      if (props.visible) {
        unlockScroll();
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onActivated */ "v"])(function () {
      if (state.keepAlive) {
        emit("update:visible", true);
        state.keepAlive = false;
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onDeactivated */ "y"])(function () {
      if (props.visible) {
        close();
        state.keepAlive = true;
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      if (value) {
        open();
      } else {
        close();
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.position;
    }, function (value) {
      value === "center" ? state.transitionName = "popup-fade" : state.transitionName = "popup-slide-".concat(value);
    });
    return __spreadProps(__spreadValues({}, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      popStyle: popStyle,
      classes: classes,
      onClick: onClick,
      onClickCloseIcon: onClickCloseIcon,
      onClickOverlay: onClickOverlay,
      onOpened: onOpened,
      onClosed: onClosed
    });
  }
});

function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_overlay = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-overlay");

  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", null, [_ctx.overlay ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_overlay, {
    key: 0,
    visible: _ctx.visible,
    "close-on-click-overlay": _ctx.closeOnClickOverlay,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.overlayClass),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.overlayStyle),
    "z-index": _ctx.zIndex,
    "lock-scroll": _ctx.lockScroll,
    duration: _ctx.duration,
    onClick: _ctx.onClickOverlay
  }, null, 8, ["visible", "close-on-click-overlay", "class", "style", "z-index", "lock-scroll", "duration", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(vue__WEBPACK_IMPORTED_MODULE_12__[/* Transition */ "a"], {
    name: _ctx.transitionName,
    onAfterEnter: _ctx.onOpened,
    onAfterLeave: _ctx.onClosed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.popStyle),
        onClick: _cache[1] || (_cache[1] = function () {
          return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
        })
      }, [_ctx.showSlot ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default", {
        key: 0
      }) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.closeable ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        key: 1,
        onClick: _cache[0] || (_cache[0] = function () {
          return _ctx.onClickCloseIcon && _ctx.onClickCloseIcon.apply(_ctx, arguments);
        }),
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nutui-popup__close-icon", "nutui-popup__close-icon--" + _ctx.closeIconPosition])
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
        name: _ctx.closeIcon,
        size: "12px"
      }, null, 8, ["name"])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 6), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.visible]])];
    }),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])]);
}

_sfc_main$H.render = _sfc_render$C;

var _createComponent22 = createComponent("dialog"),
    componentName$t = _createComponent22.componentName,
    create$G = _createComponent22.create;

var _sfc_main$G = create$G({
  inheritAttrs: false,
  components: (_components4 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_components4, _sfc_main$H.name, _sfc_main$H), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_components4, _sfc_main$Z.name, _sfc_main$Z), _components4),
  props: __spreadProps(__spreadValues({}, popupProps), {
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    noOkBtn: {
      type: Boolean,
      default: false
    },
    noCancelBtn: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    okText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    okBtnDisabled: {
      type: Boolean,
      default: false
    },
    cancelAutoClose: {
      type: Boolean,
      default: true
    },
    textAlign: {
      type: String,
      default: "center"
    },
    onOk: {
      type: Function,
      default: null
    },
    onCancel: {
      type: Function,
      default: null
    },
    onClose: {
      type: Function,
      default: null
    },
    onClosed: {
      type: Function,
      default: null
    },
    closeOnPopstate: {
      type: Boolean,
      default: false
    }
  }),
  emits: ["update", "update:visible", "ok", "cancel", "open", "opened", "close", "closed"],
  setup: function setup(props, _ref33) {
    var emit = _ref33.emit;
    var showPopup = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.visible);
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      if (props.closeOnPopstate) {
        window.addEventListener("popstate", function () {
          closed();
        });
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      showPopup.value = value;
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, componentName$t, true);
    });

    var update = function update(val) {
      emit("update", val);
      emit("update:visible", val);
    };

    var closed = function closed() {
      update(false);
      emit("closed");
    };

    var onCancel = function onCancel() {
      emit("cancel");

      if (props.cancelAutoClose) {
        closed();
      }
    };

    var onOk = function onOk() {
      closed();
      emit("ok");
    };

    return {
      closed: closed,
      classes: classes,
      onCancel: onCancel,
      onOk: onOk,
      showPopup: showPopup
    };
  }
});

var _hoisted_1$q = {
  key: 0,
  class: "nut-dialog__header"
};
var _hoisted_2$p = ["innerHTML"];
var _hoisted_3$h = {
  key: 1,
  class: "nut-dialog__footer"
};

function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_button = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-button");

  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-popup");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_popup, {
    teleport: _ctx.teleport,
    visible: _ctx.showPopup,
    "onUpdate:visible": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.showPopup = $event;
    }),
    "close-on-click-overlay": _ctx.closeOnClickOverlay,
    "lock-scroll": _ctx.lockScroll,
    round: "",
    onClickOverlay: _ctx.closed,
    onClickCloseIcon: _ctx.closed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
      }, [_ctx.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$q, [_ctx.$slots.header ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "header", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
        key: 1
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1)], 64))])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-dialog__content",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
          textAlign: _ctx.textAlign
        })
      }, [_ctx.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        key: 1,
        innerHTML: _ctx.content
      }, null, 8, _hoisted_2$p))], 4), !_ctx.noFooter ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_3$h, [_ctx.$slots.footer ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "footer", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
        key: 1
      }, [!_ctx.noCancelBtn ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_button, {
        key: 0,
        size: "small",
        plain: "",
        type: "primary",
        class: "nut-dialog__footer-cancel",
        onClick: _ctx.onCancel
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.cancelText), 1)];
        }),
        _: 1
      }, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), !_ctx.noOkBtn ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_button, {
        key: 1,
        size: "small",
        type: "primary",
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-dialog__footer-ok", {
          disabled: _ctx.okBtnDisabled
        }]),
        disabled: _ctx.okBtnDisabled,
        onClick: _ctx.onOk
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.okText), 1)];
        }),
        _: 1
      }, 8, ["class", "disabled", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 64))])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 2)];
    }),
    _: 3
  }, 8, ["teleport", "visible", "close-on-click-overlay", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}

_sfc_main$G.render = _sfc_render$B;

var _createComponent23 = createComponent("infiniteloading"),
    componentName$s = _createComponent23.componentName,
    create$F = _createComponent23.create;

var _sfc_main$F = create$F({
  props: {
    hasMore: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 200
    },
    pullIcon: {
      type: String,
      default: "https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png"
    },
    pullTxt: {
      type: String,
      default: "\u677E\u5F00\u5237\u65B0"
    },
    loadIcon: {
      type: String,
      default: "https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png"
    },
    loadTxt: {
      type: String,
      default: "\u52A0\u8F7D\u4E2D\xB7\xB7\xB7"
    },
    loadMoreTxt: {
      type: String,
      default: "\u54CE\u5440\uFF0C\u8FD9\u91CC\u662F\u5E95\u90E8\u4E86\u5566"
    },
    useWindow: {
      type: Boolean,
      default: true
    },
    containerId: {
      type: String,
      default: ""
    },
    useCapture: {
      type: Boolean,
      default: false
    },
    isOpenRefresh: {
      type: Boolean,
      default: false
    }
  },
  emits: ["scroll-change", "load-more", "refresh"],
  components: {
    "nut-icon": _sfc_main$_
  },
  setup: function setup(props, _ref35) {
    var emit = _ref35.emit,
        slots = _ref35.slots;
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      scrollHeight: 0,
      scrollTop: 0,
      isInfiniting: false,
      direction: "down",
      isTouching: false,
      refreshMaxH: 0,
      y: 0,
      x: 0,
      distance: 0
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$s;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    var getStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        height: state.distance < 0 ? "0px" : "".concat(state.distance, "px"),
        transition: state.isTouching ? "height 0s cubic-bezier(0.25,0.1,0.25,1)" : "height 0.2s cubic-bezier(0.25,0.1,0.25,1)"
      };
    });

    var getParentElement = function getParentElement(el) {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().select(!!props.containerId ? "#".concat(props.containerId, " #").concat(el) : "#".concat(el));
    };

    var getScrollHeight = function getScrollHeight() {
      var parentElement = getParentElement("scroller");
      parentElement.boundingClientRect(function (rect) {
        state.scrollHeight = rect.height;
      }).exec();
    };

    var lower = function lower() {
      if (state.direction == "up" || !props.hasMore || state.isInfiniting) {
        return false;
      } else {
        state.isInfiniting = true;
        emit("load-more", infiniteDone);
      }
    };

    var scroll = function scroll(e) {
      if (e.detail.scrollTop <= 0) {
        e.detail.scrollTop = 0;
      } else if (e.detail.scrollTop >= state.scrollHeight) {
        e.detail.scrollTop = state.scrollHeight;
      }

      if (e.detail.scrollTop > state.scrollTop || e.detail.scrollTop >= state.scrollHeight) {
        state.direction = "down";
      } else {
        state.direction = "up";
      }

      state.scrollTop = e.detail.scrollTop;
      emit("scroll-change", e.detail.scrollTop);
    };

    var infiniteDone = function infiniteDone() {
      state.isInfiniting = false;
    };

    var touchStart = function touchStart(event) {
      if (state.scrollTop == 0 && !state.isTouching && props.isOpenRefresh) {
        state.y = event.touches[0].pageY;
        state.isTouching = true;
        getParentElement("refreshTop").boundingClientRect(function (rect) {
          state.refreshMaxH = Math.floor(rect.height * 1 + 10);
        }).exec();
      }
    };

    var touchMove = function touchMove(event) {
      state.distance = event.touches[0].pageY - state.y;

      if (state.distance > 0 && state.isTouching) {
        event.preventDefault();
        if (state.distance >= state.refreshMaxH) state.distance = state.refreshMaxH;
      } else {
        state.distance = 0;
        state.isTouching = false;
      }
    };

    var touchEnd = function touchEnd() {
      if (state.distance < state.refreshMaxH) {
        state.distance = 0;
      } else {
        emit("refresh", refreshDone);
      }
    };

    var refreshDone = function refreshDone() {
      state.distance = 0;
      state.isTouching = false;
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      setTimeout(function () {
        getScrollHeight();
      }, 200);
    });
    return __spreadProps(__spreadValues({
      classes: classes
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      lower: lower,
      scroll: scroll,
      touchStart: touchStart,
      touchMove: touchMove,
      touchEnd: touchEnd,
      getStyle: getStyle
    });
  }
});

function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  var _component_view_block = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("view-block");

  var _component_scroll_view = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("scroll-view");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_scroll_view, {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    scrollY: "true",
    style: {
      "height": "100%"
    },
    id: "scroller",
    onScrolltolower: _ctx.lower,
    onScroll: _ctx.scroll,
    onTouchstart: _ctx.touchStart,
    onTouchmove: _ctx.touchMove,
    onTouchend: _ctx.touchEnd
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
        class: "nut-infinite-top",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.getStyle)
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
            class: "top-box",
            id: "refreshTop"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
                class: "top-img",
                name: _ctx.pullIcon
              }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
                class: "top-text"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.pullTxt), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["style"]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
        class: "nut-infinite-container"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")];
        }),
        _: 3
      }), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
        class: "nut-infinite-bottom"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
          return [_ctx.isInfiniting ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_view_block, {
            key: 0,
            class: "bottom-box"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
                class: "bottom-img",
                name: _ctx.loadIcon
              }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
                class: "bottom-text"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.loadTxt), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })) : !_ctx.hasMore ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_view_block, {
            key: 1,
            class: "tips"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.loadMoreTxt), 1)];
            }),
            _: 1
          })) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)];
        }),
        _: 1
      })];
    }),
    _: 3
  }, 8, ["class", "onScrolltolower", "onScroll", "onTouchstart", "onTouchmove", "onTouchend"]);
}

_sfc_main$F.render = _sfc_render$A;

var _createComponent24 = createComponent("notify"),
    componentName$r = _createComponent24.componentName,
    create$E = _createComponent24.create;

var _sfc_main$E = create$E({
  components: Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, _sfc_main$H.name, _sfc_main$H),
  props: {
    id: String,
    color: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    },
    className: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "danger"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible", "closed", "click"],
  setup: function setup(props, _ref37) {
    var emit = _ref37.emit;
    var timer = null;

    var onClick = function onClick() {
      emit("click");
    };

    var clearTimer = function clearTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    var hide = function hide() {
      emit("update:visible", false);
      emit("closed");
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      if (value) {
        show();
      }
    });

    var show = function show() {
      clearTimer();

      if (props.duration) {
        timer = setTimeout(function () {
          hide();
        }, props.duration);
      }
    };

    var onAfterLeave = function onAfterLeave() {
      if (props.visible) {
        clearTimer();
        hide();
      }
    };

    return {
      hide: hide,
      onAfterLeave: onAfterLeave,
      onClick: onClick
    };
  }
});

function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_12__[/* Transition */ "a"], {
    name: "nut-fade",
    onAfterLeave: _ctx.onAfterLeave
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["popup-top", "nut-notify", "nut-notify--".concat(_ctx.type), {
          className: _ctx.className
        }]),
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
          color: _ctx.color,
          background: _ctx.background
        }),
        onClick: _cache[0] || (_cache[0] = function () {
          return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
        })
      }, [_ctx.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
        key: 1
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.msg), 1)], 64))], 6), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.visible]])];
    }),
    _: 3
  }, 8, ["onAfterLeave"]);
}

_sfc_main$E.render = _sfc_render$z;

var _createComponent25 = createComponent("range"),
    componentName$q = _createComponent25.componentName,
    create$D = _createComponent25.create;

var _sfc_main$D = create$D({
  props: {
    range: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    hiddenRange: {
      type: Boolean,
      default: false
    },
    hiddenTag: {
      type: Boolean,
      default: false
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  },
  emits: ["change", "drag-end", "drag-start", "update:modelValue"],
  setup: function setup(props, _ref38) {
    var emit = _ref38.emit,
        slots = _ref38.slots;
    var buttonIndex = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
    var startValue;
    var currentValue;
    var root = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var dragStatus = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var touch = useTouch();
    var scope = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return Number(props.max) - Number(props.min);
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref39;

      var prefixCls = componentName$q;
      return _ref39 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref39, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref39, "".concat(prefixCls, "-disabled"), props.disabled), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref39, "".concat(prefixCls, "-show-number"), !props.hiddenRange), _ref39;
    });
    var wrapperStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        background: props.inactiveColor
      };
    });
    var buttonStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        borderColor: props.buttonColor
      };
    });

    var isRange = function isRange(val) {
      return !!props.range && Array.isArray(val);
    };

    var calcMainAxis = function calcMainAxis() {
      var modelValue = props.modelValue,
          min = props.min;

      if (isRange(modelValue)) {
        return "".concat((modelValue[1] - modelValue[0]) * 100 / scope.value, "%");
      }

      return "".concat((modelValue - Number(min)) * 100 / scope.value, "%");
    };

    var calcOffset = function calcOffset() {
      var modelValue = props.modelValue,
          min = props.min;

      if (isRange(modelValue)) {
        return "".concat((modelValue[0] - Number(min)) * 100 / scope.value, "%");
      }

      return "0%";
    };

    var barStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        width: calcMainAxis(),
        left: calcOffset(),
        background: props.activeColor,
        transition: dragStatus.value ? "none" : void 0
      };
    });

    var format = function format(value) {
      var min = props.min,
          max = props.max,
          step = props.step;
      value = Math.max(+min, Math.min(value, +max));
      return Math.round(value / +step) * +step;
    };

    var isSameValue = function isSameValue(newValue, oldValue) {
      return JSON.stringify(newValue) === JSON.stringify(oldValue);
    };

    var handleOverlap = function handleOverlap(value) {
      if (value[0] > value[1]) {
        return value.slice(0).reverse();
      }

      return value;
    };

    var updateValue = function updateValue(value, end) {
      if (isRange(value)) {
        value = handleOverlap(value).map(format);
      } else {
        value = format(value);
      }

      if (!isSameValue(value, props.modelValue)) {
        emit("update:modelValue", value);
      }

      if (end && !isSameValue(value, startValue)) {
        emit("change", value);
      }
    };

    var onClick = /*#__PURE__*/function () {
      var _ref40 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4(event) {
        var min, modelValue, rect, delta, total, value, _modelValue, left, right, middle;

        return _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!props.disabled) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                min = props.min, modelValue = props.modelValue;
                _context4.next = 5;
                return useTaroRect(root, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);

              case 5:
                rect = _context4.sent;
                delta = event.touches[0].clientX - rect.left;
                total = rect.width;
                value = Number(min) + delta / total * scope.value;

                if (isRange(modelValue)) {
                  _modelValue = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(modelValue, 2), left = _modelValue[0], right = _modelValue[1];
                  middle = (left + right) / 2;

                  if (value <= middle) {
                    updateValue([value, right], true);
                  } else {
                    updateValue([left, value], true);
                  }
                } else {
                  updateValue(value, true);
                }

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function onClick(_x2) {
        return _ref40.apply(this, arguments);
      };
    }();

    var onTouchStart = function onTouchStart(event) {
      if (props.disabled) {
        return;
      }

      touch.start(event);
      currentValue = props.modelValue;

      if (isRange(currentValue)) {
        startValue = currentValue.map(format);
      } else {
        startValue = format(currentValue);
      }

      dragStatus.value = "start";
    };

    var onTouchMove = /*#__PURE__*/function () {
      var _ref41 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5(event) {
        var rect, delta, total, diff;
        return _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!props.disabled) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                if (dragStatus.value === "start") {
                  emit("drag-start");
                }

                touch.move(event);
                dragStatus.value = "draging";
                _context5.next = 7;
                return useTaroRect(root, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);

              case 7:
                rect = _context5.sent;
                delta = touch.deltaX.value;
                total = rect.width;
                diff = delta / total * scope.value;

                if (isRange(startValue)) {
                  currentValue[buttonIndex.value] = startValue[buttonIndex.value] + diff;
                } else {
                  currentValue = startValue + diff;
                }

                updateValue(currentValue);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function onTouchMove(_x3) {
        return _ref41.apply(this, arguments);
      };
    }();

    var onTouchEnd = function onTouchEnd() {
      if (props.disabled) {
        return;
      }

      if (dragStatus.value === "draging") {
        updateValue(currentValue, true);
        emit("drag-end");
      }

      dragStatus.value = "";
    };

    var curValue = function curValue(idx) {
      var value = typeof idx === "number" ? props.modelValue[idx] : props.modelValue;
      return value;
    };

    return __spreadProps(__spreadValues({
      root: root,
      classes: classes,
      wrapperStyle: wrapperStyle,
      buttonStyle: buttonStyle,
      onClick: onClick,
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(props)), {
      barStyle: barStyle,
      curValue: curValue,
      buttonIndex: buttonIndex
    });
  }
});

var _hoisted_1$p = {
  class: "nut-range-container"
};
var _hoisted_2$o = {
  key: 0,
  class: "min"
};
var _hoisted_3$g = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"];
var _hoisted_4$d = {
  key: 0,
  class: "number"
};
var _hoisted_5$b = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"];
var _hoisted_6$8 = {
  key: 0,
  class: "number"
};
var _hoisted_7$6 = {
  key: 1,
  class: "max"
};

function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$p, [!_ctx.hiddenRange ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_2$o, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(+_ctx.min), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    ref: "root",
    id: "root",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.wrapperStyle),
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    onClick: _cache[9] || (_cache[9] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-range-bar",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.barStyle)
  }, [_ctx.range ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 0
  }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])([0, 1], function (index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
      key: index,
      role: "slider",
      class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])({
        "nut-range-button-wrapper-left": index == 0,
        "nut-range-button-wrapper-right": index == 1
      }),
      tabindex: _ctx.disabled ? -1 : 0,
      "aria-valuemin": +_ctx.min,
      "aria-valuenow": _ctx.curValue(index),
      "aria-valuemax": +_ctx.max,
      "aria-orientation": "horizontal",
      onTouchstart: Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function (e) {
        if (typeof index === "number") {
          _ctx.buttonIndex = index;
        }

        _ctx.onTouchStart(e);
      }, ["stop", "prevent"]),
      onTouchmove: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
        return _ctx.onTouchMove && _ctx.onTouchMove.apply(_ctx, arguments);
      }, ["stop", "prevent"])),
      onTouchend: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
        return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
      }, ["stop", "prevent"])),
      onTouchcancel: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
        return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
      }, ["stop", "prevent"])),
      onClick: _cache[3] || (_cache[3] = function (e) {
        return e.stopPropagation();
      })
    }, [_ctx.$slots.button ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "button", {
      key: 0
    }) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      key: 1,
      class: "nut-range-button",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.buttonStyle)
    }, [!_ctx.hiddenTag ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_4$d, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.curValue(index)), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 4))], 42, _hoisted_3$g);
  }), 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 1,
    role: "slider",
    class: "nut-range-button-wrapper",
    tabindex: _ctx.disabled ? -1 : 0,
    "aria-valuemin": +_ctx.min,
    "aria-valuenow": _ctx.curValue(),
    "aria-valuemax": +_ctx.max,
    "aria-orientation": "horizontal",
    onTouchstart: _cache[4] || (_cache[4] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function (e) {
      _ctx.onTouchStart(e);
    }, ["stop", "prevent"])),
    onTouchmove: _cache[5] || (_cache[5] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.onTouchMove && _ctx.onTouchMove.apply(_ctx, arguments);
    }, ["stop", "prevent"])),
    onTouchend: _cache[6] || (_cache[6] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
    }, ["stop", "prevent"])),
    onTouchcancel: _cache[7] || (_cache[7] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
    }, ["stop", "prevent"])),
    onClick: _cache[8] || (_cache[8] = function (e) {
      return e.stopPropagation();
    })
  }, [_ctx.$slots.button ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "button", {
    key: 0
  }) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 1,
    class: "nut-range-button",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.buttonStyle)
  }, [!_ctx.hiddenTag ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_6$8, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.curValue(_ctx.index)), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 4))], 40, _hoisted_5$b))], 4)], 6), !_ctx.hiddenRange ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_7$6, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(+_ctx.max), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)]);
}

_sfc_main$D.render = _sfc_render$y;

var _createComponent26 = createComponent("steps"),
    create$C = _createComponent26.create,
    componentName$p = _createComponent26.componentName;

var _sfc_main$C = create$C({
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    current: {
      type: [String, Number],
      default: "0"
    },
    progressDot: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref42) {
    var emit = _ref42.emit,
        slots = _ref42.slots;
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      children: []
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref43;

      var prefixCls = componentName$p;
      return _ref43 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref43, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref43, "".concat(prefixCls, "-").concat(props.direction), true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref43, "".concat(prefixCls, "-dot"), !!props.progressDot), _ref43;
    });

    var relation = function relation(child) {
      child && state.children.push(child);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* provide */ "D"])("parent", {
      relation: relation,
      state: state,
      props: props
    });
    return function () {
      var _a;

      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])("view", {
        class: classes.value
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});

var _createComponent27 = createComponent("step"),
    create$B = _createComponent27.create,
    componentName$o = _createComponent27.componentName;

var _sfc_main$B = create$B({
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: "12px"
    }
  },
  setup: function setup(props, _ref44) {
    var emit = _ref44.emit,
        slots = _ref44.slots;

    var _getCurrentInstance = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])(),
        proxy = _getCurrentInstance.proxy;

    var parent = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* inject */ "s"])("parent");
    parent["relation"](proxy);
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      dot: parent.props.progressDot
    });
    var index = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return parent.state.children.indexOf(proxy) + 1;
    });

    var getCurrentStatus = function getCurrentStatus() {
      var activeIndex = index.value;
      if (activeIndex < +parent.props.current) return "finish";
      return activeIndex === +parent.props.current ? "process" : "wait";
    };

    var status = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return getCurrentStatus();
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref45;

      var prefixCls = componentName$o;
      return _ref45 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref45, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref45, "".concat(prefixCls, "-").concat(status.value), true), _ref45;
    });
    return __spreadProps(__spreadValues({}, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      index: index,
      classes: classes
    });
  }
});

var _hoisted_1$o = {
  class: "nut-step-head"
};

var _hoisted_2$n = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
  class: "nut-step-line"
}, null, -1);

var _hoisted_3$f = {
  key: 2,
  class: "nut-step-inner"
};
var _hoisted_4$c = {
  class: "nut-step-main"
};
var _hoisted_5$a = {
  class: "nut-step-title"
};
var _hoisted_6$7 = ["innerHTML"];

function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$o, [_hoisted_2$n, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-step-icon", [!_ctx.dot ? _ctx.icon ? "is-icon" : "is-text" : ""]])
  }, [_ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 0,
    class: "nut-step-icon-inner",
    name: _ctx.icon,
    size: _ctx.size
  }, null, 8, ["name", "size"])) : _ctx.dot ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 1
  }, [], 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_3$f, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.index), 1))], 2)]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_4$c, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_5$a, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1), _ctx.content ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "nut-step-content",
    innerHTML: _ctx.content
  }, null, 8, _hoisted_6$7)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])], 2);
}

_sfc_main$B.render = _sfc_render$x;

var _createComponent28 = createComponent("swiper"),
    create$A = _createComponent28.create,
    componentName$n = _createComponent28.componentName;

var _sfc_main$A = create$A({
  inheritAttrs: false,
  props: {},
  emits: [],
  setup: function setup(props, context) {
    var attrs = context.attrs;
    return {
      attrs: attrs
    };
  }
});

function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_swiper = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("swiper");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_swiper, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeProps */ "J"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* guardReactiveProps */ "q"])(_ctx.attrs)), {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16);
}

_sfc_main$A.render = _sfc_render$w;

function useExpose$1(apis) {
  var instance = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])();

  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}

var _createComponent29 = createComponent("swiper-item"),
    create$z = _createComponent29.create,
    componentName$m = _createComponent29.componentName;

var _sfc_main$z = create$z({
  props: {},
  setup: function setup(props, _ref46) {
    var slots = _ref46.slots;
    var parent = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* inject */ "s"])("parent");
    parent["relation"](Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])());
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      offset: 0
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$m;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    var style = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var style2 = {};
      var direction = parent == null ? void 0 : parent.props.direction;

      if (parent == null ? void 0 : parent.size.value) {
        style2[direction === "horizontal" ? "width" : "height"] = "".concat(parent == null ? void 0 : parent.size.value, "px");
      }

      if (state.offset) {
        style2["transform"] = "translate".concat(direction === "horizontal" ? "X" : "Y", "(").concat(state.offset, "px)");
      }

      return style2;
    });

    var setOffset = function setOffset(offset) {
      state.offset = offset;
    };

    useExpose$1({
      setOffset: setOffset
    });
    return {
      style: style,
      classes: classes
    };
  }
});

function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.style)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 6);
}

_sfc_main$z.render = _sfc_render$v;

var _createComponent30 = createComponent("switch"),
    componentName$l = _createComponent30.componentName,
    create$y = _createComponent30.create;

var _sfc_main$y = create$y({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(props, _ref48) {
    var emit = _ref48.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref49;

      var prefixCls = componentName$l;
      return _ref49 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref49, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref49, props.modelValue ? "switch-open" : "switch-close", true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref49, "".concat(prefixCls, "-disable"), props.disable), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref49, "".concat(prefixCls, "-base"), true), _ref49;
    });
    var style = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        backgroundColor: props.modelValue ? props.activeColor : props.inactiveColor
      };
    });

    var onClick = function onClick(event) {
      if (props.disable) return;
      emit("update:modelValue", !props.modelValue);
      emit("change", !props.modelValue, event);
    };

    return {
      classes: classes,
      style: style,
      onClick: onClick
    };
  }
});

var _hoisted_1$n = {
  class: "switch-button"
};
var _hoisted_2$m = {
  class: "close-line"
};

function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    }),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.style)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$n, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$m, null, 512), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], !_ctx.modelValue]]), _ctx.activeText ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-switch-label open"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.activeText), 513), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.modelValue]]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-switch-label close"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.inactiveText), 513), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], !_ctx.modelValue]])], 64)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])], 6);
}

_sfc_main$y.render = _sfc_render$u;

var _createComponent31 = createComponent("toast"),
    create$x = _createComponent31.create;

var _sfc_main$x = create$x({
  components: Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, _sfc_main$_.name, _sfc_main$_),
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: Number,
      default: 30
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: String,
    textAlignCenter: {
      type: Boolean,
      default: true
    },
    loadingRotate: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "rgba(0, 0, 0, .8)"
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: false
    },
    coverColor: {
      type: String,
      default: "rgba(0, 0, 0, 0)"
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible", "closed"],
  setup: function setup(props, _ref50) {
    var emit = _ref50.emit;
    var timer;

    var clearTimer = function clearTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    var hide = function hide() {
      emit("update:visible", false);
      emit("closed");
    };

    var show = function show() {
      clearTimer();

      if (props.duration) {
        timer = setTimeout(function () {
          hide();
        }, props.duration);
      }
    };

    var clickCover = function clickCover() {
      if (props.closeOnClickOverlay) {
        hide();
      }
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (val) {
      if (val) {
        show();
      }
    });
    var hasIcon = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      if (props.type !== "text") {
        return true;
      } else {
        return !!props.icon;
      }
    });
    var iconName = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      if (props.icon) {
        return props.icon;
      } else {
        return {
          success: "success",
          fail: "failure",
          warn: "tips",
          loading: "loading"
        }[props.type];
      }
    });
    var toastBodyClass = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return ["nut-toast", {
        "nut-toast-center": props.center
      }, {
        "nut-toast-has-icon": hasIcon.value
      }, {
        "nut-toast-cover": props.cover
      }, {
        "nut-toast-loading": props.type === "loading"
      }, props.customClass, "nut-toast-" + props.size];
    });

    var onAfterLeave = function onAfterLeave() {
      if (props.visible) {
        clearTimer();
        hide();
      }
    };

    return {
      clickCover: clickCover,
      hasIcon: hasIcon,
      iconName: iconName,
      toastBodyClass: toastBodyClass,
      onAfterLeave: onAfterLeave
    };
  }
});

var _hoisted_1$m = {
  key: 0,
  class: "nut-toast-icon-wrapper"
};
var _hoisted_2$l = ["innerHTML"];

function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_12__[/* Transition */ "a"], {
    name: "toast-fade",
    onAfterLeave: _ctx.onAfterLeave
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.toastBodyClass),
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
          bottom: _ctx.center ? "auto" : _ctx.bottom + "px",
          "background-color": _ctx.coverColor
        }),
        onClick: _cache[0] || (_cache[0] = function () {
          return _ctx.clickCover && _ctx.clickCover.apply(_ctx, arguments);
        })
      }, [_ctx.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        key: 1,
        class: "nut-toast-inner",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
          "text-align": _ctx.textAlignCenter ? "center" : "left",
          "background-color": _ctx.bgColor
        })
      }, [_ctx.hasIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$m, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
        size: "20",
        color: "#ffffff",
        name: _ctx.iconName
      }, null, 8, ["name"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-toast-text",
        innerHTML: _ctx.msg
      }, null, 8, _hoisted_2$l)], 4))], 6), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.visible]])];
    }),
    _: 3
  }, 8, ["onAfterLeave"]);
}

_sfc_main$x.render = _sfc_render$t;

var _createComponent32 = createComponent("progress"),
    create$w = _createComponent32.create;

var _sfc_main$w = create$w({
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
      required: true
    },
    size: {
      type: String,
      default: "base"
    },
    status: {
      type: String,
      default: "text"
    },
    strokeWidth: {
      type: [Number, String],
      default: ""
    },
    textInside: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    strokeColor: {
      type: String,
      default: ""
    },
    textColor: {
      tyep: String,
      default: ""
    },
    iconName: {
      type: String,
      default: "checked"
    },
    iconColor: {
      type: String,
      default: "#439422"
    }
  },
  setup: function setup(props, _ref51) {
    var emit = _ref51.emit;
    var height = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.strokeWidth + "px");
    var progressOuter = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var left = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var bgStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        width: props.percentage + "%",
        background: props.strokeColor || ""
      };
    });
    var textStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        color: props.textColor || ""
      };
    });

    var slideLeft = /*#__PURE__*/function () {
      var _ref52 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6(values) {
        return _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.getEnv() === "WEB") {
                  setTimeout(function () {
                    left.value = progressOuter.value.offsetWidth * Number(values) * 0.01 - 4 + "px";
                  }, 200);
                } else {
                  setTimeout(function () {
                    var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
                    query.select(".nut-progress-outer").boundingClientRect(function (rec) {
                      left.value = rec.width * Number(values) * 0.01 - 4 + "px";
                    }).exec();
                  }, 200);
                }

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function slideLeft(_x4) {
        return _ref52.apply(this, arguments);
      };
    }();

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.percentage;
    }, function (values) {
      slideLeft(values);
    }, {
      immediate: true
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {});
    return {
      height: height,
      bgStyle: bgStyle,
      textStyle: textStyle,
      progressOuter: progressOuter,
      left: left
    };
  }
});

var _hoisted_1$l = {
  class: "nut-progress"
};

function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", _hoisted_1$l, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-progress-outer", [_ctx.showText && !_ctx.textInside ? "nut-progress-outer-part" : "", _ctx.size ? "nut-progress-" + _ctx.size : ""]]),
    ref: "progressOuter",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: _ctx.height
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-progress-inner", _ctx.status == "active" ? "nut-active" : ""]),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.bgStyle)
  }, [_ctx.showText && _ctx.textInside ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
    key: 0,
    class: "nut-progress-text nut-progress-insidetext",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      lineHeight: _ctx.height,
      left: _ctx.left
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.textStyle)
  }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.percentage) + "%", 5)], 4)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 6)], 6), _ctx.showText && !_ctx.textInside ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
    key: 0,
    class: "nut-progress-text",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      lineHeight: _ctx.height
    })
  }, [_ctx.status == "text" || _ctx.status == "active" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("span", {
    key: 0,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.textStyle)
  }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.percentage) + "%", 5)) : _ctx.status == "icon" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 1,
    size: "16px",
    name: _ctx.iconName,
    color: _ctx.iconColor
  }, null, 8, ["name", "color"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 4)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)]);
}

_sfc_main$w.render = _sfc_render$s;

var _createComponent33 = createComponent("circleprogress"),
    componentName$k = _createComponent33.componentName,
    create$v = _createComponent33.create;

var _sfc_main$v = create$v({
  props: {
    progress: {
      type: [Number, String],
      required: true
    },
    strokeInnerWidth: {
      type: [Number, String],
      default: 10
    },
    progressOption: {
      type: Object,
      default: function _default() {}
    }
  },
  setup: function setup(props, _ref53) {
    var emit = _ref53.emit;
    var rotateLeft = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var rotateRight = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var InnerWidth = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.strokeInnerWidth);
    var isMobile = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(false);
    var cricleData = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      radius: 50,
      strokeOutWidth: 10,
      backColor: "#d9d9d9",
      progressColor: "red"
    });

    var loadPercent = function loadPercent(x, y) {
      var rotate = x / y * 360;
      var rotateRc = 0;
      var rotateLc = 0;

      if (rotate < 180) {
        rotateRc = rotate + -45;
      } else {
        rotateRc = 135;
        rotateLc = rotate - 180 - 45;
        rotateLeft.value = rotateLc;
      }

      rotateRight.value = rotateRc;
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.progress;
    }, function (value) {
      loadPercent(value, 100);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.getEnv() === "WEB") {
        isMobile.value = true;
      } else {
        isMobile.value = false;
        loadPercent(props.progress, 100);
        Object.assign(cricleData, props.progressOption);
      }
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$k;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    var pieStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        width: (cricleData.radius + cricleData.strokeOutWidth) * 2 + "px",
        height: (cricleData.radius + cricleData.strokeOutWidth) * 2 + "px"
      };
    });
    var mobileStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        width: "100%",
        height: "100%"
      };
    });
    var RightStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        transform: "rotate(".concat(rotateRight.value + "deg", ")"),
        transition: "all 0.3s",
        borderTop: "".concat(InnerWidth.value + "px", " solid ").concat(cricleData.backColor, ";"),
        borderLeft: "".concat(InnerWidth.value + "px", " solid  ").concat(cricleData.backColor, ";"),
        borderBottom: "".concat(InnerWidth.value + "px", " solid ").concat(cricleData.progressColor, ";"),
        borderRight: "".concat(InnerWidth.value + "px", " solid ").concat(cricleData.progressColor, ";")
      };
    });
    var LeftStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        transform: "rotate(".concat(rotateLeft.value + "deg", ")"),
        transition: "all 0.3s",
        borderTop: "".concat(InnerWidth.value + "px", " solid ").concat(cricleData.backColor, ";"),
        borderLeft: "".concat(InnerWidth.value + "px", " solid  ").concat(cricleData.backColor, ";"),
        borderBottom: "".concat(InnerWidth.value + "px", " solid ").concat(cricleData.progressColor, ";"),
        borderRight: "".concat(InnerWidth.value + "px", " solid ").concat(cricleData.progressColor, ";")
      };
    });
    var option = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var baseOption = {
        radius: 50,
        strokeOutWidth: 10,
        backColor: "#d9d9d9",
        progressColor: "red",
        cy: 1,
        cx: 1,
        size: 1,
        startPosition: ""
      };
      Object.assign(baseOption, props.progressOption);
      baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeOutWidth;
      baseOption.size = (baseOption.radius + baseOption.strokeOutWidth) * 2;
      baseOption.startPosition = "rotate(-90," + baseOption.cx + "," + baseOption.cy + ")";
      return baseOption;
    });
    var arcLength = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var circleLength = Math.floor(2 * Math.PI * option.value.radius);
      var progressLength = props.progress / 100 * circleLength;
      return "".concat(progressLength, ",").concat(circleLength);
    });
    return {
      isMobile: isMobile,
      rotateLeft: rotateLeft,
      InnerWidth: InnerWidth,
      rotateRight: rotateRight,
      classes: classes,
      pieStyle: pieStyle,
      RightStyle: RightStyle,
      LeftStyle: LeftStyle,
      option: option,
      arcLength: arcLength,
      mobileStyle: mobileStyle
    };
  }
});

var _hoisted_1$k = {
  class: "nut-circleprogress__right"
};
var _hoisted_2$k = {
  class: "nut-circleprogress__line nut-circleprogress__r"
};
var _hoisted_3$e = {
  class: "nut-circleprogress__progress"
};
var _hoisted_4$b = {
  class: "nut-circleprogress__left"
};
var _hoisted_5$9 = {
  class: "nut-circleprogress__line nut-circleprogress__l"
};
var _hoisted_6$6 = {
  key: 1
};
var _hoisted_7$5 = ["height", "width"];
var _hoisted_8$5 = ["r", "cx", "cy", "stroke", "stroke-width"];
var _hoisted_9$4 = ["r", "cx", "cy", "stroke", "stroke-dasharray", "stroke-width", "transform"];
var _hoisted_10$3 = {
  class: "nut-circleprogress__progress"
};

function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.pieStyle)
  }, [!_ctx.isMobile ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
    key: 0,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.mobileStyle)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_1$k, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_2$k, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", {
    class: "nut-circleprogress__line__c",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.RightStyle)
  }, null, 4)])]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_3$e, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.progress) + " %", 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_4$b, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_5$9, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", {
    class: "nut-circleprogress__line__c",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.LeftStyle)
  }, null, 4)])])], 4)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", _hoisted_6$6, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("svg", {
    height: _ctx.option.size,
    width: _ctx.option.size,
    "x-mlns": "http://www.w3.org/200/svg"
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("circle", {
    r: _ctx.option.radius,
    cx: _ctx.option.cx,
    cy: _ctx.option.cy,
    stroke: _ctx.option.backColor,
    "stroke-width": _ctx.option.strokeOutWidth,
    fill: "none"
  }, null, 8, _hoisted_8$5), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("circle", {
    r: _ctx.option.radius,
    cx: _ctx.option.cx,
    cy: _ctx.option.cy,
    stroke: _ctx.option.progressColor,
    "stroke-dasharray": _ctx.arcLength,
    "stroke-width": _ctx.strokeInnerWidth,
    fill: "none",
    transform: _ctx.option.startPosition,
    "stroke-linecap": "round",
    style: {
      "transition": "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s"
    }
  }, null, 8, _hoisted_9$4)], 8, _hoisted_7$5)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_10$3, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.progress) + "%", 1)]))], 6);
}

_sfc_main$v.render = _sfc_render$r;

var _createComponent34 = createComponent("noticebar"),
    componentName$j = _createComponent34.componentName,
    create$u = _createComponent34.create;

var _sfc_main$u = create$u({
  props: {
    direction: {
      type: String,
      default: "across"
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    standTime: {
      type: Number,
      default: 1e3
    },
    complexAm: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 40
    },
    text: {
      type: String,
      default: ""
    },
    closeMode: {
      type: Boolean,
      default: false
    },
    wrapable: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#F9911B"
    },
    background: {
      type: String,
      default: "rgba(254,250,216,1)"
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  components: {
    ScrollItem: function ScrollItem(props) {
      props.item.props.style = props.style;
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])(props.item);
    }
  },
  emits: ["click", "close"],
  setup: function setup(props, _ref55) {
    var emit = _ref55.emit,
        slots = _ref55.slots;
    console.log("componentName", componentName$j);
    var wrap = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var content = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: "",
      animate: false,
      scrollList: [],
      distance: 0,
      timer: null,
      keepAlive: false
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$j;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    var iconShow = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      if (props.leftIcon == "close") {
        return false;
      } else {
        return true;
      }
    });
    var barStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var style = {
        color: props.color,
        background: props.background
      };

      if (props.direction == "vertical") {
        style.height = "".concat(props.height, "px");
      }

      return style;
    });
    var contentStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        paddingLeft: state.firstRound ? 0 : state.wrapWidth + "px",
        animationDelay: (state.firstRound ? props.delay : 0) + "s",
        animationDuration: state.duration + "s"
      };
    });
    var iconBg = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var iconBg2 = "";

      if (props.leftIcon) {
        iconBg2 = props.leftIcon;
      }

      return iconBg2;
    });
    var horseLampStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var styles = {};

      if (props.complexAm) {
        styles = {
          transform: "translateY(".concat(state.distance, "px)")
        };
      } else {
        if (state.animate) {
          styles = {
            transition: "all ".concat(~~(props.height / props.speed / 4), "s"),
            "margin-top": "-".concat(props.height, "px")
          };
        }
      }

      return styles;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.text;
    }, function (value) {
      initScrollWrap(value);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.list;
    }, function (value) {
      state.scrollList = [].concat(value);
    });

    var initScrollWrap = function initScrollWrap(value) {
      if (state.showNoticeBar == false) {
        return;
      }

      setTimeout(function () {
        if (!wrap.value || !content.value) {
          return;
        }

        var wrapWidth = 0;
        var offsetWidth = 0;
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().select(".wrap").boundingClientRect(function (rect) {
          if (rect.width > 0) wrapWidth = rect.width;
        }).exec();
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().select(".content").boundingClientRect(function (rect) {
          if (rect.width > 0) offsetWidth = rect.width;

          if (props.scrollable && offsetWidth > wrapWidth) {
            state.wrapWidth = wrapWidth;
            state.offsetWidth = offsetWidth;
            state.duration = offsetWidth / props.speed;
            state.animationClass = "play";
          } else {
            state.animationClass = "";
          }
        }).exec();
      }, 100);
    };

    var handleClick = function handleClick(event) {
      emit("click", event);
    };

    var onClickIcon = function onClickIcon(event) {
      state.showNoticeBar = !props.closeMode;
      emit("close", event);
    };

    var onAnimationEnd = function onAnimationEnd() {
      state.firstRound = false;
      setTimeout(function () {
        state.duration = (state.offsetWidth + state.wrapWidth) / props.speed;
        state.animationClass = "play-infinite";
      }, 0);
    };

    var startRollEasy = function startRollEasy() {
      showhorseLamp();
      state.timer = setInterval(showhorseLamp, ~~(props.height / props.speed / 4) * 1e3 + props.standTime);
    };

    var showhorseLamp = function showhorseLamp() {
      state.animate = true;
      setTimeout(function () {
        state.scrollList.push(state.scrollList[0]);
        state.scrollList.shift();
        state.animate = false;
      }, ~~(props.height / props.speed / 4) * 1e3);
    };

    var startRoll = function startRoll() {
      state.timer = setInterval(function () {
        var chunk = 100;

        for (var i = 0; i < chunk; i++) {
          scroll(i, i < chunk - 1 ? false : true);
        }
      }, props.standTime + 100 * props.speed);
    };

    var scroll = function scroll(n, last) {
      setTimeout(function () {
        state.distance -= props.height / 100;

        if (last) {
          state.scrollList.push(state.scrollList[0]);
          state.scrollList.shift();
          state.distance = 0;
        }
      }, n * props.speed);
    };

    var go = function go(item) {
      emit("click", item);
    };

    var handleClickIcon = function handleClickIcon() {
      emit("close", state.scrollList[0]);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      console.log(props.direction);

      if (props.direction == "vertical") {
        if (slots.default) {
          state.scrollList = [].concat(slots.default()[0].children);
        } else {
          state.scrollList = [].concat(props.list);
        }

        console.log(state.scrollList);
        setTimeout(function () {
          props.complexAm ? startRoll() : startRollEasy();
        }, props.standTime);
      } else {
        initScrollWrap(props.text);
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onActivated */ "v"])(function () {
      if (state.keepAlive) {
        state.keepAlive = false;
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onDeactivated */ "y"])(function () {
      state.keepAlive = true;
      clearInterval(state.timer);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onUnmounted */ "A"])(function () {
      clearInterval(state.timer);
    });
    return __spreadProps(__spreadValues(__spreadValues({}, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(props)), Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      classes: classes,
      iconShow: iconShow,
      barStyle: barStyle,
      contentStyle: contentStyle,
      iconBg: iconBg,
      horseLampStyle: horseLampStyle,
      wrap: wrap,
      content: content,
      handleClick: handleClick,
      onClickIcon: onClickIcon,
      onAnimationEnd: onAnimationEnd,
      go: go,
      handleClickIcon: handleClickIcon,
      slots: slots
    });
  }
});

var _hoisted_1$j = {
  ref: "wrap",
  class: "wrap"
};
var _hoisted_2$j = ["onClick"];

function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  var _component_ScrollItem = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("ScrollItem");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [_ctx.direction == "across" ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])((Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-noticebar-page", {
      withicon: _ctx.closeMode,
      close: _ctx.closeMode,
      wrapable: _ctx.wrapable
    }]),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.barStyle),
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
    })
  }, [_ctx.iconShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "left-icon",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      "background-image": "url(".concat(_ctx.iconBg, ")")
    })
  }, [!_ctx.iconBg ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 0,
    name: "notice",
    size: "16",
    color: _ctx.color
  }, null, 8, ["color"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 4)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$j, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    ref: "content",
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["content", [_ctx.animationClass, {
      "nut-ellipsis": !_ctx.scrollable && !_ctx.wrapable
    }]]),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.contentStyle),
    onAnimationend: _cache[0] || (_cache[0] = function () {
      return _ctx.onAnimationEnd && _ctx.onAnimationEnd.apply(_ctx, arguments);
    }),
    onWebkitAnimationEnd: _cache[1] || (_cache[1] = function () {
      return _ctx.onAnimationEnd && _ctx.onAnimationEnd.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default", {}, function () {
    return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.text), 1)];
  })], 38)], 512), _ctx.closeMode ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 1,
    class: "right-icon",
    onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.onClickIcon && _ctx.onClickIcon.apply(_ctx, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
    name: "close",
    size: "11",
    color: _ctx.color
  }, null, 8, ["color"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 6)), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.showNoticeBar]]) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.scrollList.length > 0 && _ctx.direction == "vertical" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 1,
    class: "nut-noticebar-vertical",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.barStyle)
  }, [_ctx.slots.default ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "horseLamp_list",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.horseLampStyle)
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.scrollList, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_ScrollItem, {
      key: index,
      style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
        height: _ctx.height + "px",
        "line-height": _ctx.height + "px"
      }),
      item: item
    }, null, 8, ["style", "item"]);
  }), 128))], 4)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("ul", {
    key: 1,
    class: "horseLamp_list",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.horseLampStyle)
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.scrollList, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("li", {
      class: "horseLamp_list_item",
      key: index,
      style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
        height: _ctx.height
      }),
      onClick: function onClick($event) {
        return _ctx.go(item);
      }
    }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item), 13, _hoisted_2$j);
  }), 128))], 4)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "go",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return !_ctx.slots.rightIcon && _ctx.handleClickIcon();
    })
  }, [_ctx.slots.rightIcon ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "rightIcon", {
    key: 0
  }) : _ctx.closeMode ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 1,
    type: "cross",
    color: _ctx.color,
    size: "11px"
  }, null, 8, ["color"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])], 4)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 2);
}

_sfc_main$u.render = _sfc_render$q;

var _createComponent35 = createComponent("navbar"),
    componentName$i = _createComponent35.componentName,
    create$t = _createComponent35.create;

var _sfc_main$t = create$t({
  props: {
    leftShow: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    titIcon: {
      type: String,
      default: ""
    },
    tabs: {
      type: Array,
      defaul: function defaul() {
        return [];
      }
    },
    icon: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["click", "on-click-back", "on-click-title", "on-click-right", "on-click-desc", "on-click-icon", "on-click-more", "on-click-clear", "on-click-send", "on-click-slot", "on-click-slot-send", "switch-tab"],
  setup: function setup(props, _ref57) {
    var emit = _ref57.emit;
    var activeIndex = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.defaultIndex);
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$i;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });

    function switchTitle(id, name) {
      activeIndex.value = id;
      console.log(id);
      emit("switch-tab", activeIndex.value, name);
    }

    function handleLeft() {
      emit("on-click-back");
    }

    function handleCenter() {
      emit("on-click-title");
    }

    function handleCenterIcon() {
      emit("on-click-icon");
    }

    function handleClear() {
      emit("on-click-clear");
    }

    function handleSend() {
      emit("on-click-send");
    }

    function handleSlot() {
      emit("on-click-slot");
    }

    function handleSends() {
      emit("on-click-slot-send");
    }

    return {
      classes: classes,
      handleLeft: handleLeft,
      handleCenter: handleCenter,
      handleCenterIcon: handleCenterIcon,
      handleClear: handleClear,
      handleSend: handleSend,
      handleSlot: handleSlot,
      handleSends: handleSends,
      switchTitle: switchTitle,
      activeIndex: activeIndex
    };
  }
});

var _hoisted_1$i = {
  class: "nut-navbar__left"
};
var _hoisted_2$i = {
  class: "tab-title"
};
var _hoisted_3$d = ["onClick"];

function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$i, [_ctx.leftShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 0,
    color: "#979797",
    name: "left",
    onClick: _ctx.handleLeft
  }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)]), _ctx.title || _ctx.titIcon || _ctx.tabs ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-navbar__title", {
      icon: _ctx.icon
    }])
  }, [_ctx.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "text__title",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleCenter && _ctx.handleCenter.apply(_ctx, arguments);
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.titIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 1,
    class: "icon",
    name: _ctx.titIcon,
    onClick: _ctx.handleCenterIcon
  }, null, 8, ["name", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$i, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.tabs, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["tab-title-box", {
        "nut-tab-active": _ctx.activeIndex == item.id || _ctx.activeIndex == index
      }]),
      onClick: function onClick($event) {
        return _ctx.switchTitle(item.id, item.name);
      },
      key: item.id
    }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.name), 11, _hoisted_3$d);
  }), 128))])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.desc || _ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 1,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-navbar__right", {
      icon: _ctx.icon
    }])
  }, [_ctx.desc ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      "text-align": _ctx.descTextAlign
    }),
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.handleClear && _ctx.handleClear.apply(_ctx, arguments);
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.desc), 5)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.handleSends && _ctx.handleSends.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "icons")])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", null, [_ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
    key: 0,
    class: "rightIcon",
    name: _ctx.icon,
    onClick: _ctx.handleSend
  }, null, 8, ["name", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 2);
}

_sfc_main$t.render = _sfc_render$p;

var _createComponent36 = createComponent("fixednav"),
    componentName$h = _createComponent36.componentName,
    create$s = _createComponent36.create;

var _sfc_main$s = create$s((_create$s = {
  components: Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, _sfc_main$V.name, _sfc_main$V),
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    navList: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    activeText: {
      default: "\u6536\u8D77\u5BFC\u822A",
      type: String
    },
    unActiveText: {
      default: "\u5FEB\u901F\u5BFC\u822A",
      type: String
    },
    position: {
      default: function _default() {
        return {
          top: "auto",
          bottom: "auto"
        };
      },
      type: Object
    },
    type: {
      default: "right",
      type: String
    }
  }
}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_create$s, "components", {}), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_create$s, "emits", ["update:visible", "selected"]), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_create$s, "setup", function setup(props, _ref59) {
  var emit = _ref59.emit;
  var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
    var _ref60;

    var prefixCls = componentName$h;
    return _ref60 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref60, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref60, "active", props.visible), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref60, props.type, true), _ref60;
  });

  var updateValue = function updateValue() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !props.visible;
    emit("update:visible", value);
  };

  var selected = function selected(item, event) {
    emit("selected", {
      item: item,
      event: event
    });
  };

  return {
    classes: classes,
    updateValue: updateValue,
    selected: selected
  };
}), _create$s));

var _hoisted_1$h = {
  class: "nut-fixednav__list"
};
var _hoisted_2$h = ["onClick"];
var _hoisted_3$c = ["src"];
var _hoisted_4$a = {
  class: "span"
};
var _hoisted_5$8 = {
  key: 0,
  class: "b"
};
var _hoisted_6$5 = {
  class: "text"
};

function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_overlay = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-overlay");

  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.position)
  }, [_ctx.overlay ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_overlay, {
    key: 0,
    visible: _ctx.visible,
    "z-index": 200,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.updateValue(false);
    })
  }, null, 8, ["visible"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "list", {}, function () {
    return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$h, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.navList, function (item, index) {
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        class: "nut-fixednav__list-item",
        onClick: function onClick($event) {
          return _ctx.selected(item, $event);
        },
        key: item.id || index
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("img", {
        src: item.icon
      }, null, 8, _hoisted_3$c), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_4$a, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.text), 1), item.num ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_5$8, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.num), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 8, _hoisted_2$h);
    }), 128))])];
  }), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", {
    class: "nut-fixednav__btn",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.updateValue();
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "btn", {}, function () {
    return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
      name: "left",
      color: "#fff"
    }), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_6$5, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.visible ? _ctx.activeText : _ctx.unActiveText), 1)];
  })])], 6);
}

_sfc_main$s.render = _sfc_render$o;
var TabTitle = {
  setup: function setup(props) {
    return function () {
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])("view", {}, props.slots);
    };
  },
  props: {
    slots: Object
  }
};

var _createComponent37 = createComponent("tab"),
    create$r = _createComponent37.create;

var _sfc_main$r = create$r({
  props: {
    defaultIndex: {
      type: Number,
      default: 0
    },
    animatedTime: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: "false"
    },
    noSwiping: {
      type: Boolean,
      default: false
    },
    scrollType: {
      type: String,
      default: "flex"
    },
    iconType: {
      type: String,
      default: "all"
    }
  },
  components: {
    TabTitle: TabTitle
  },
  emits: ["switch-tab"],
  setup: function setup(props, ctx) {
    var titles = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])([]);
    Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(false);
    var scrollLeft = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])("0px");
    var scrollTop = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])("0px");
    var activeIndex = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.defaultIndex);
    var navlist = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var nutuiSwiper = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var arr = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])([]);
    var scrollYDirection = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.direction === "vertical");
    var randomClass = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])("tab-title-boxs-" + createHash());
    var randomTitleClass = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])("tab-title-" + createHash());

    function createHash() {
      return Array.from(Array(10), function () {
        return Math.floor(Math.random() * 36).toString(36);
      }).join("");
    }

    var swiperClassName = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])("swiper-" + createHash());

    function centerTitle(index) {
      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();

      if (props.direction === "vertical") {
        query.select(".".concat(randomTitleClass.value)).boundingClientRect().selectAll(".".concat(randomClass.value)).boundingClientRect().exec(function (rects) {
          var navlistValueTop2 = rects[0].top;
          var navlistValueHeight2 = rects[0].height;
          var currTop = rects[1][index].top;
          var currHeight = rects[1][index].height;
          scrollTop.value = currTop - navlistValueTop2 - navlistValueHeight2 / 2 + currHeight / 2 + "px";
        });
      } else {
        query.select(".".concat(randomTitleClass.value)).boundingClientRect().selectAll(".".concat(randomClass.value)).boundingClientRect().exec(function (rects) {
          var navlistValuewidth2 = rects[0].width;
          var currLeft = rects[1][index].left;
          var currWidth = rects[1][index].width;
          scrollLeft.value = currLeft - navlistValuewidth2 / 2 + currWidth / 2 + "px";
        });
      }
    }

    var changeTab = function changeTab(current) {
      activeIndex.value = current.detail.current;
      centerTitle(current.detail.current);
    };

    function switchTitle(index, event) {
      activeIndex.value = index;
      centerTitle(index);
    }

    function initTitle() {
      titles.length = 0;

      if (ctx.slots.default) {
        var slots = ctx.slots.default().length === 1 ? ctx.slots.default()[0].children : ctx.slots.default();
        slots && slots.map(function (item, index) {
          if (typeof item.children == "string") return;
          titles.push({
            title: item.props && item.props["tab-title"] ? item.props["tab-title"] : "",
            content: item.children && item.children.header ? item.children.header() : null,
            main: item.children && item.children.default ? item.children.default() : null
          });
        });
      }
    }

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      initTitle();
      var arrnew = [];

      for (var i = 0; i < 100; i++) {
        arrnew.push(i);
      }

      arr.value = arrnew;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return ctx.slots.default();
    }, function (val, oldVal) {
      if (val) {
        ctx.slots.default();
        initTitle();
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watchEffect */ "M"])(function () {
      activeIndex.value = props.defaultIndex;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return activeIndex.value;
    }, function (val, oldVal) {
      ctx.emit("switch-tab", activeIndex.value);
    });
    return {
      swiperClassName: swiperClassName,
      titles: titles,
      navlist: navlist,
      activeIndex: activeIndex,
      switchTitle: switchTitle,
      changeTab: changeTab,
      nutuiSwiper: nutuiSwiper,
      scrollLeft: scrollLeft,
      scrollTop: scrollTop,
      arr: arr,
      randomClass: randomClass,
      scrollYDirection: scrollYDirection,
      randomTitleClass: randomTitleClass
    };
  }
});

var _hoisted_1$g = {
  class: "nutui-tab"
};
var _hoisted_2$g = ["onClick"];
var _hoisted_3$b = {
  class: "world"
};

var _hoisted_4$9 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
  class: "underline"
}, null, -1);

var _hoisted_5$7 = {
  key: 0,
  class: "tab-swiper",
  ref: "nutuiSwiper"
};

function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TabTitle = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("TabTitle");

  var _component_scroll_view = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("scroll-view");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$g, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])([_ctx.direction === "vertical" ? "vertical-tab" : "horizontal-tab"])
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_scroll_view, {
    "scroll-x": !_ctx.scrollYDirection,
    "scroll-y": _ctx.scrollYDirection,
    "scroll-left": _ctx.scrollLeft,
    "scroll-top": _ctx.scrollTop,
    class: "tab-title-scroll",
    "scroll-with-animation": true
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["tab-title", _ctx.randomTitleClass, _ctx.iconType]),
        ref: "navlist"
      }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.titles, function (item, index) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
          class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["tab-title-box", _ctx.randomClass, {
            "nut-tab-active": _ctx.activeIndex == index
          }, {
            "tab-title-box-scroll": _ctx.scrollType == "scroll"
          }]),
          key: index,
          onClick: function onClick($event) {
            return _ctx.switchTitle(index, $event);
          }
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("span", _hoisted_3$b, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.title), 1), item.content ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_TabTitle, {
          key: 0,
          slots: item.content
        }, null, 8, ["slots"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 10, _hoisted_2$g);
      }), 128)), _hoisted_4$9], 2)];
    }),
    _: 1
  }, 8, ["scroll-x", "scroll-y", "scroll-left", "scroll-top"]), _ctx.titles.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_5$7, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_TabTitle, {
    slots: _ctx.titles[_ctx.activeIndex].main
  }, null, 8, ["slots"])], 512)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 2)]);
}

_sfc_main$r.render = _sfc_render$n;

var _createComponent38 = createComponent("tab-panel"),
    create$q = _createComponent38.create;

var _sfc_main$q = create$q({
  props: {
    tabTitle: {
      type: String,
      default: ""
    }
  },
  setup: function setup(props, ctx) {}
});

function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_swiper_item = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-swiper-item");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_swiper_item, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")];
    }),
    _: 3
  });
}

_sfc_main$q.render = _sfc_render$m;

var _createComponent39 = createComponent("menu-item"),
    create$p = _createComponent39.create,
    componentName$g = _createComponent39.componentName;

var _sfc_main$p = create$p({
  props: {
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    multiStyle: {
      type: [String, Number],
      default: 1
    },
    maxHeight: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["change", "menu-click"],
  setup: function setup(props, _ref61) {
    var emit = _ref61.emit;
    var menuTitle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.title);
    var menu = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* inject */ "s"])("menuRelation");
    var parent = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])(menu);
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      showPanel: false,
      currMenu: 0,
      showMask: false
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref62;

      var prefixCls = componentName$g;
      return _ref62 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref62, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref62, "disabled", props.disabled), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref62, "".concat(prefixCls, "-active"), state.showPanel), _ref62;
    });

    var handleMenuPanel = function handleMenuPanel() {
      emit("menu-click", menuTitle.value);

      if (props.disabled) {
        return;
      }

      state.showPanel = !state.showPanel;

      if (parent.hasMask) {
        state.showMask = !state.showMask;
        parent.handleMaskShow(state.showPanel);
      }
    };

    var handleShowAndHide = function handleShowAndHide(event) {
      var menuBox = document.querySelectorAll(".nut-menu-active")[0];

      if (menuBox && state.showPanel) {
        if (!menuBox.contains(event.target)) {
          state.showPanel = false;
          state.showMask = false;
          parent.handleMaskShow(false);
        }
      }
    };

    var checkMenus = function checkMenus(item, index) {
      menuTitle.value = item.value;
      state.currMenu = index;

      if (props.autoClose) {
        state.showPanel = false;
        state.showMask = false;
        parent.handleMaskShow(false);
      }

      emit("change", item, menuTitle.value);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      document.addEventListener("mouseup", function (event) {
        handleShowAndHide(event);
      }, false);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onUnmounted */ "A"])(function () {
      document.removeEventListener("mouseup", function (event) {
        handleShowAndHide(event);
      });
    });
    return __spreadProps(__spreadValues({
      classes: classes
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      handleMenuPanel: handleMenuPanel,
      checkMenus: checkMenus,
      menuTitle: menuTitle
    });
  }
});

var _hoisted_1$f = ["innerHTML"];
var _hoisted_2$f = ["onClick"];

function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-popup");

  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_popup, {
    visible: _ctx.showMask,
    "onUpdate:visible": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.showMask = $event;
    })
  }, null, 8, ["visible"]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-menu-title",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.handleMenuPanel && _ctx.handleMenuPanel.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "title-name",
    innerHTML: _ctx.menuTitle
  }, null, 8, _hoisted_1$f), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
    "class-prefix": "icon"
  })]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-menu-panel",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])("max-height:".concat(_ctx.maxHeight, "px"))
  }, [_ctx.menuList && _ctx.menuList.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["menu-list", [{
      "bubble-line": _ctx.multiStyle == 2
    }, {
      "three-line": _ctx.multiStyle == 3
    }]])
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.menuList, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["menu-option", {
        checked: _ctx.currMenu === index
      }]),
      key: index,
      onClick: function onClick($event) {
        return _ctx.checkMenus(item, index);
      }
    }, [_ctx.currMenu === index ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
      key: 0,
      class: "check-icon",
      name: "Check",
      size: "14px"
    })) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.value), 1)], 10, _hoisted_2$f);
  }), 128))], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 4)], 2);
}

_sfc_main$p.render = _sfc_render$l;

var _createComponent40 = createComponent("tabbar"),
    create$o = _createComponent40.create;

var _sfc_main$o = create$o({
  props: {
    visible: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "base"
    },
    size: {
      type: String,
      default: "20px"
    },
    unactiveColor: {
      type: String,
      default: "#000000"
    },
    activeColor: {
      type: String,
      default: ""
    }
  },
  emits: ["tab-switch", "update:visible"],
  setup: function setup(props, _ref63) {
    var emit = _ref63.emit,
        slots = _ref63.slots;
    var mdValue = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      val: props.visible,
      children: []
    });

    function changeIndex(active) {
      emit("update:visible", active);
      parentData.modelValue = active;
      emit("tab-switch", parentData.children[active], active);
    }

    var parentData = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      children: mdValue.children,
      size: props.size,
      modelValue: mdValue.val,
      unactiveColor: props.unactiveColor,
      activeColor: props.activeColor,
      changeIndex: changeIndex
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* provide */ "D"])("parent", parentData);
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      parentData.modelValue = value;
    });
    return {
      changeIndex: changeIndex
    };
  }
});

function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-tabbar", {
      "nut-tabbar-bottom": _ctx.bottom
    }])
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")], 2);
}

_sfc_main$o.render = _sfc_render$k;

var _createComponent41 = createComponent("tabbar-item"),
    create$n = _createComponent41.create;

var _sfc_main$n = create$n({
  props: {
    tabTitle: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    num: {
      type: String,
      default: ""
    },
    activeImg: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nut-icon"
    },
    fontClassName: {
      type: String,
      default: "nutui-iconfont"
    },
    to: [Object, String]
  },
  setup: function setup(props, ctx) {
    var parent = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* inject */ "s"])("parent");
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      size: parent.size,
      unactiveColor: parent.unactiveColor,
      activeColor: parent.activeColor,
      active: parent.modelValue,
      index: 0
    });
    var router = Object(vue_router__WEBPACK_IMPORTED_MODULE_14__[/* useRouter */ "a"])();

    var relation = function relation(child) {
      if (child.proxy) {
        var index = parent.children.length;
        state.index = index;
        var obj = Object.assign({}, child.proxy, {
          index: index
        });
        parent.children.push(obj);
      }
    };

    relation(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])());

    function change(index) {
      parent.changeIndex(index);
    }

    var choosed = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      if (parent) {
        return parent.modelValue;
      }

      return null;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(choosed, function (value, oldValue) {
      state.active = value;
      setTimeout(function () {
        if (parent.children[value].href) {
          window.location.href = parent.children[value].href;
        }

        if (parent.children[value].to) {
          var to = parent.children[value].to;
          router.push(to);
        }
      });
    });
    return {
      state: state,
      change: change
    };
  }
});

var _hoisted_1$e = {
  class: "nut-tabbar-item_icon-box"
};
var _hoisted_2$e = {
  key: 0,
  class: "nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_num"
};
var _hoisted_3$a = {
  key: 1,
  class: "nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_nums"
};
var _hoisted_4$8 = {
  key: 2
};

function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-tabbar-item", {
      "nut-tabbar-item__icon--unactive": _ctx.state.active != _ctx.state.index
    }]),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      color: _ctx.state.active == _ctx.state.index ? _ctx.state.activeColor : _ctx.state.unactiveColor
    }),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.change(_ctx.state.index);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$e, [_ctx.num && _ctx.num <= 99 ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_2$e, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.num), 1)) : _ctx.num && _ctx.num > 100 ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_3$a, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])("99+"))) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_4$8, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
    class: "nut-tabbar-item_icon-box_icon",
    size: _ctx.state.size,
    name: _ctx.icon,
    "font-class-name": _ctx.fontClassName,
    "class-prefix": _ctx.classPrefix
  }, null, 8, ["size", "name", "font-class-name", "class-prefix"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), !_ctx.icon && _ctx.activeImg ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
    key: 3,
    class: "nut-tabbar-item_icon-box_icon",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      backgroundImage: "url(".concat(_ctx.state.active == _ctx.state.index ? _ctx.activeImg : _ctx.img, ")"),
      width: _ctx.state.size,
      height: _ctx.state.size
    })
  }, null, 4)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-tabbar-item_icon-box_nav-word", {
      "nut-tabbar-item_icon-box_big-word": !_ctx.icon && !_ctx.activeImg
    }])
  }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.tabTitle), 3)])], 6);
}

_sfc_main$n.render = _sfc_render$j;

var _createComponent42 = createComponent("elevator"),
    componentName$f = _createComponent42.componentName,
    create$m = _createComponent42.create;

var _sfc_main$m = create$m({
  props: {
    height: {
      type: [Number, String],
      default: "200px"
    },
    acceptKey: {
      type: [String],
      default: "title"
    },
    indexList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  emits: ["click-item", "click-index"],
  setup: function setup(props, context) {
    var spaceHeight = 23;
    var listview = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      anchorIndex: 0,
      listHeight: [],
      listGroup: [],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: false,
      currentIndex: 0,
      query: _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery(),
      scrollTop: 0,
      storageListHeight: []
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$f;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });

    var resetScrollState = function resetScrollState() {
      state.anchorIndex = 0;
      state.listHeight = [];
      state.listGroup = [];
      state.currentIndex = 0;
      state.scrollStart = false;
      state.touchState = {
        y1: 0,
        y2: 0
      };
    };

    var getData = function getData(el) {
      if (!el.dataset.index) {
        return "0";
      }

      return el.dataset.index;
    };

    var setListGroup = function setListGroup(el) {
      Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* nextTick */ "u"])(function () {
        if (!state.listGroup.includes(el) && el != null) {
          state.listGroup.push(el);
        }
      });
    };

    var calculateHeight = function calculateHeight() {
      var height = 0;
      state.listHeight.push(height);
      state.storageListHeight.push(height);

      var _loop = function _loop(i) {
        state.query.selectAll(".elevator__item__".concat(i)).boundingClientRect();
        state.query.exec(function (res) {
          height += res[i][0].height;
          state.listHeight.push(height);
          state.storageListHeight.push(height);
        });
      };

      for (var i = 0; i < state.listGroup.length; i++) {
        _loop(i);
      }
    };

    var scrollTo = function scrollTo(index) {
      if (!index && index !== 0) {
        return;
      }

      if (!state.listHeight.length) {
        state.listHeight = state.storageListHeight.slice();
      }

      if (index < 0) index = 0;
      if (index > state.listHeight.length - 2) index = state.listHeight.length - 2;
      state.currentIndex = index;
      state.scrollTop = state.listHeight[index];
    };

    var touchStart = function touchStart(e) {
      state.scrollStart = true;
      var index = getData(e.target);
      var firstTouch = e.touches[0];
      state.touchState.y1 = firstTouch.pageY;
      state.anchorIndex = +index;
      state.currentIndex = +index;
      scrollTo(+index);
    };

    var touchMove = function touchMove(e) {
      var firstTouch = e.touches[0];
      state.touchState.y2 = firstTouch.pageY;
      var delta = (state.touchState.y2 - state.touchState.y1) / spaceHeight | 0;
      state.currentIndex = state.anchorIndex + delta;
      scrollTo(state.currentIndex);
    };

    var touchEnd = function touchEnd() {
      resetScrollState();
    };

    var handleClickItem = function handleClickItem(key, item) {
      context.emit("click-item", key, item);
    };

    var handleClickIndex = function handleClickIndex(key) {
      context.emit("click-index", key);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.nextTick(function () {
        calculateHeight();
      });
    });
    return __spreadProps(__spreadValues({
      classes: classes
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      setListGroup: setListGroup,
      listview: listview,
      touchStart: touchStart,
      touchMove: touchMove,
      touchEnd: touchEnd,
      handleClickItem: handleClickItem,
      handleClickIndex: handleClickIndex
    });
  }
});

var _hoisted_1$d = {
  class: "nut-elevator__list__item__code"
};
var _hoisted_2$d = ["onClick"];
var _hoisted_3$9 = {
  class: "nut-elevator__bars__inner"
};
var _hoisted_4$7 = ["data-index", "onClick"];

function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_scroll_view = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("scroll-view");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_scroll_view, {
    class: "nut-elevator__list scrollview",
    "scroll-top": _ctx.scrollTop,
    "scroll-y": true,
    ref: "listview",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: isNaN(+_ctx.height) ? _ctx.height : "".concat(_ctx.height, "px")
    })
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.indexList, function (item, index) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
          class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-elevator__list__item", "elevator__item__".concat(index)]),
          key: item[_ctx.acceptKey],
          ref: _ctx.setListGroup
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$d, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item[_ctx.acceptKey]), 1), (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(item.list, function (subitem) {
          return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
            class: "nut-elevator__list__item__name",
            key: subitem["id"],
            onClick: function onClick($event) {
              return _ctx.handleClickItem(item[_ctx.acceptKey], subitem);
            }
          }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(subitem.name), 9, _hoisted_2$d);
        }), 128))], 2);
      }), 128))];
    }),
    _: 1
  }, 8, ["scroll-top", "style"]), _ctx.indexList.length ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])((Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "nut-elevator__code--current"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.indexList[_ctx.currentIndex][_ctx.acceptKey]), 513)), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.scrollStart]]) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-elevator__bars",
    onTouchstart: _cache[0] || (_cache[0] = function () {
      return _ctx.touchStart && _ctx.touchStart.apply(_ctx, arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.touchMove && _ctx.touchMove.apply(_ctx, arguments);
    }, ["stop", "prevent"])),
    onTouchend: _cache[2] || (_cache[2] = function () {
      return _ctx.touchEnd && _ctx.touchEnd.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_3$9, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.indexList, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: "nut-elevator__bars__inner__item",
      "data-index": index,
      key: item[_ctx.acceptKey],
      onClick: function onClick($event) {
        return _ctx.handleClickIndex(item[_ctx.acceptKey]);
      }
    }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item[_ctx.acceptKey]), 9, _hoisted_4$7);
  }), 128))])], 32)], 2);
}

_sfc_main$m.render = _sfc_render$i;
var Utils = {
  isLeapYear: function isLeapYear(y) {
    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
  },
  getWhatDay: function getWhatDay(year, month, day) {
    var date = new Date(year + "/" + month + "/" + day);
    var index = date.getDay();
    var dayNames = ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"];
    return dayNames[index];
  },
  getMonthPreDay: function getMonthPreDay(year, month) {
    var date = new Date(year + "/" + month + "/01");
    var day = date.getDay();

    if (day == 0) {
      day = 7;
    }

    return day;
  },
  getMonthDays: function getMonthDays(year, month) {
    if (/^0/.test(month)) {
      month = month.split("")[1];
    }

    return [0, 31, this.isLeapYear(Number(year)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  },
  getNumTwoBit: function getNumTwoBit(n) {
    n = Number(n);
    return (n > 9 ? "" : "0") + n;
  },
  date2Str: function date2Str(date, split) {
    split = split || "-";
    var y = date.getFullYear();
    var m = this.getNumTwoBit(date.getMonth() + 1);
    var d = this.getNumTwoBit(date.getDate());
    return [y, m, d].join(split);
  },
  getDay: function getDay(i) {
    i = i || 0;
    var date = new Date();
    var diff = i * (1e3 * 60 * 60 * 24);
    date = new Date(date.getTime() + diff);
    return this.date2Str(date);
  },
  compareDate: function compareDate(date1, date2) {
    var startTime = new Date(date1.replace("-", "/").replace("-", "/"));
    var endTime = new Date(date2.replace("-", "/").replace("-", "/"));

    if (startTime >= endTime) {
      return false;
    }

    return true;
  },
  isEqual: function isEqual(date1, date2) {
    var startTime = new Date(date1).getTime();
    var endTime = new Date(date2).getTime();

    if (startTime == endTime) {
      return true;
    }

    return false;
  }
};

var _createComponent43 = createComponent("calendar-item"),
    create$l = _createComponent43.create;

var _sfc_main$l = create$l({
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: false
    },
    poppable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "\u65E5\u5386\u9009\u62E9"
    },
    defaultValue: {
      type: String,
      default: null
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    }
  },
  emits: ["choose", "update", "close"],
  setup: function setup(props, _ref65) {
    var emit = _ref65.emit;
    var weeks = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"]);
    var months = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var monthsPanel = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var weeksPanel = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      yearMonthTitle: "",
      currDate: "",
      unLoadPrev: false,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: "calendar-month-day",
      startData: "",
      endData: "",
      isRange: props.type === "range",
      timer: 0
    });

    var splitDate = function splitDate(date) {
      return date.split("-");
    };

    var isStart = function isStart(currDate) {
      return Utils.isEqual(state.currDate[0], currDate);
    };

    var isEnd = function isEnd(currDate) {
      return Utils.isEqual(state.currDate[1], currDate);
    };

    var getCurrDate = function getCurrDate(day, month, isRange) {
      return isRange ? month.curData[3] + "-" + month.curData[4] + "-" + Utils.getNumTwoBit(+day.day) : month.curData[0] + "-" + month.curData[1] + "-" + Utils.getNumTwoBit(+day.day);
    };

    var getClass = function getClass(day, month, isRange) {
      var currDate = getCurrDate(day, month, isRange);

      if (day.type == "curr") {
        if (!state.isRange && Utils.isEqual(state.currDate, currDate) || state.isRange && (isStart(currDate) || isEnd(currDate))) {
          return "".concat(state.dayPrefix, "-active");
        } else if (props.startDate && Utils.compareDate(currDate, props.startDate) || props.endDate && Utils.compareDate(props.endDate, currDate)) {
          return "".concat(state.dayPrefix, "-disabled");
        } else if (state.isRange && Array.isArray(state.currDate) && Object.values(state.currDate).length == 2 && Utils.compareDate(state.currDate[0], currDate) && Utils.compareDate(currDate, state.currDate[1])) {
          return "".concat(state.dayPrefix, "-choose");
        } else {
          return null;
        }
      } else {
        return "".concat(state.dayPrefix, "-disabled");
      }
    };

    var confirm2 = function confirm2() {
      if (state.isRange && state.chooseData.length == 2 || !state.isRange) {
        emit("choose", state.chooseData);

        if (props.poppable) {
          emit("update");
        }
      }
    };

    var chooseDay = function chooseDay(day, month, isFirst, isRange) {
      if (getClass(day, month, isRange) != "".concat(state.dayPrefix, "-disabled")) {
        var days = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(month.curData);

        days = isRange ? days.splice(3) : days.splice(0, 3);
        days[2] = typeof day.day == "number" ? Utils.getNumTwoBit(day.day) : day.day;
        days[3] = "".concat(days[0], "-").concat(days[1], "-").concat(days[2]);
        days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);

        if (!state.isRange) {
          state.currDate = days[3];
          state.chooseData = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(days);
        } else {
          if (Object.values(state.currDate).length == 2) {
            state.currDate = [days[3]];
          } else {
            if (Utils.compareDate(state.currDate[0], days[3])) {
              Array.isArray(state.currDate) && state.currDate.push(days[3]);
            } else {
              Array.isArray(state.currDate) && state.currDate.unshift(days[3]);
            }
          }

          if (state.chooseData.length == 2 || !state.chooseData.length) {
            state.chooseData = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(days);
          } else {
            if (Utils.compareDate(state.chooseData[3], days[3])) {
              state.chooseData = [Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(state.chooseData), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(days)];
            } else {
              state.chooseData = [Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(days), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(state.chooseData)];
            }
          }
        }

        if (props.isAutoBackFill && !isFirst) {
          confirm2();
        }
      }
    };

    var getCurrData = function getCurrData(type) {
      var monthData = type == "prev" ? state.monthsData[0] : state.monthsData[state.monthsData.length - 1];
      var year = parseInt(monthData.curData[0]);
      var month = parseInt(monthData.curData[1].toString().replace(/^0/, ""));

      switch (type) {
        case "prev":
          month == 1 && (year -= 1);
          month = month == 1 ? 12 : --month;
          break;

        case "next":
          month == 12 && (year += 1);
          month = month == 12 ? 1 : ++month;
          break;
      }

      return [year, Utils.getNumTwoBit(month), Utils.getMonthDays(String(year), String(month))];
    };

    var getDaysStatus = function getDaysStatus(days, type) {
      if (type == "prev" && days >= 7) {
        days -= 7;
      }

      return Array.from(Array(days), function (v, k) {
        return {
          day: k + 1,
          type: type
        };
      });
    };

    var getMonth = function getMonth(curData, type) {
      var preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1]);
      var currMonthDays = Utils.getMonthDays(curData[0], curData[1]);
      var title = {
        year: curData[0],
        month: curData[1]
      };
      var monthInfo = {
        curData: curData,
        title: "".concat(title.year, "\u5E74").concat(title.month, "\u6708"),
        monthData: [].concat(Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(getDaysStatus(preMonthDays, "prev")), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(getDaysStatus(currMonthDays, "curr")))
      };

      if (type == "next") {
        if (!state.endData || !Utils.compareDate("".concat(state.endData[0], "-").concat(state.endData[1], "-").concat(Utils.getMonthDays(state.endData[0], state.endData[1])), "".concat(curData[0], "-").concat(curData[1], "-").concat(curData[2]))) {
          state.monthsData.push(monthInfo);
        }
      } else {
        if (!state.startData || !Utils.compareDate("".concat(curData[0], "-").concat(curData[1], "-").concat(curData[2]), "".concat(state.startData[0], "-").concat(state.startData[1], "-01"))) {
          state.monthsData.unshift(monthInfo);
        } else {
          state.unLoadPrev = true;
        }
      }
    };

    var initData = function initData() {
      state.startData = props.startDate ? splitDate(props.startDate) : "";
      state.endData = props.endDate ? splitDate(props.endDate) : "";

      if (!props.defaultValue) {
        state.currDate = state.isRange ? [Utils.date2Str(new Date()), Utils.getDay(1)] : Utils.date2Str(new Date());
      } else {
        state.currDate = state.isRange ? Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props.defaultValue) : props.defaultValue;
      }

      if (state.isRange && Array.isArray(state.currDate)) {
        if (props.startDate && Utils.compareDate(state.currDate[0], props.startDate)) {
          state.currDate.splice(0, 1, props.startDate);
        }

        if (props.endDate && Utils.compareDate(props.endDate, state.currDate[1])) {
          state.currDate.splice(1, 1, props.endDate);
        }

        state.defaultData = [].concat(Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(splitDate(state.currDate[0])), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(splitDate(state.currDate[1])));
      } else {
        if (props.startDate && Utils.compareDate(state.currDate, props.startDate)) {
          state.currDate = props.startDate;
        } else if (props.endDate && !Utils.compareDate(state.currDate, props.endDate)) {
          state.currDate = props.endDate;
        }

        state.defaultData = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(splitDate(state.currDate));
      }

      getMonth(state.defaultData, "next");
      state.yearMonthTitle = state.monthsData[0].title;
      var i = 1;

      do {
        getMonth(getCurrData("next"), "next");
      } while (i++ < 4);

      if (state.isRange) {
        chooseDay({
          day: state.defaultData[2],
          type: "curr"
        }, state.monthsData[0], true);
        chooseDay({
          day: state.defaultData[5],
          type: "curr"
        }, state.monthsData[0], true, true);
      } else {
        chooseDay({
          day: state.defaultData[2],
          type: "curr"
        }, state.monthsData[0], true);
      }
    };

    var isActive = function isActive(day, month) {
      return state.isRange && day.type == "curr" && getClass(day, month) == "calendar-month-day-active";
    };

    var isStartTip = function isStartTip(day, month) {
      if (isActive(day, month)) {
        return isStart(getCurrDate(day, month));
      } else {
        return false;
      }
    };

    var isEndTip = function isEndTip(day, month) {
      return isActive(day, month);
    };

    var isCurrDay = function isCurrDay(month, day) {
      var date = "".concat(month.curData[0], "-").concat(month.curData[1], "-").concat(day);
      return Utils.isEqual(date, Utils.date2Str(new Date()));
    };

    var loadScroll = function loadScroll() {
      if (!props.poppable) {
        return false;
      }

      requestAniFrame$1(function () {
        if ((weeksPanel == null ? void 0 : weeksPanel.value) && (monthsPanel == null ? void 0 : monthsPanel.value)) {
          var top = weeksPanel == null ? void 0 : weeksPanel.value.getBoundingClientRect().bottom;
          var monthsDoms = monthsPanel.value.getElementsByClassName("calendar-month");

          for (var i = 0; i < monthsDoms.length; i++) {
            if (monthsDoms[i].getBoundingClientRect().top <= top && monthsDoms[i].getBoundingClientRect().bottom >= top) {
              state.yearMonthTitle = state.monthsData[i].title;
            } else if (state.scrollDistance === 0) {
              state.yearMonthTitle = state.monthsData[0].title;
            }
          }
        }
      });
    };

    var setTransform = function setTransform() {
      var translateY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var type = arguments.length > 1 ? arguments[1] : undefined;
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;

      if (monthsPanel == null ? void 0 : monthsPanel.value) {
        if (type === "end") {
          monthsPanel.value.style.webkitTransition = "transform ".concat(time, "ms cubic-bezier(0.19, 1, 0.22, 1)");
          clearTimeout(state.timer);
          state.timer = setTimeout(function () {
            loadScroll();
          }, time);
        } else {
          monthsPanel.value.style.webkitTransition = "";
          loadScroll();
        }

        monthsPanel.value.style.webkitTransform = "translateY(".concat(translateY, "px)");
        state.scrollDistance = translateY;
      }
    };

    var setMove = function setMove(move, type, time) {
      var _a, _b;

      var updateMove = move + state.transformY;
      var h2 = ((_a = months.value) == null ? void 0 : _a.offsetHeight) || 0;
      var offsetHeight = ((_b = monthsPanel.value) == null ? void 0 : _b.offsetHeight) || 0;

      if (type === "end") {
        if (updateMove > 0) {
          updateMove = 0;
        }

        if (updateMove < 0 && updateMove < -offsetHeight + h2) {
          updateMove = -offsetHeight + h2;
        }

        if (offsetHeight <= h2 && state.monthsData.length == 1) {
          updateMove = 0;
        }

        setTransform(updateMove, type, time);
      } else {
        if (updateMove > 0 && updateMove > 100) {
          updateMove = 100;
        }

        if (updateMove < -offsetHeight + h2 - 100 && state.monthsData.length > 1) {
          updateMove = -offsetHeight + h2 - 100;
        }

        if (updateMove < 0 && updateMove < -100 && state.monthsData.length == 1) {
          updateMove = -100;
        }

        setTransform(updateMove);
      }
    };

    var touchStart = function touchStart(event) {
      var changedTouches = event.changedTouches[0];
      state.touchParams.startY = changedTouches.pageY;
      state.touchParams.startTime = event.timeStamp || Date.now();
      state.transformY = state.scrollDistance;
    };

    var touchMove = function touchMove(event) {
      var changedTouches = event.changedTouches[0];
      state.touchParams.lastY = changedTouches.pageY;
      state.touchParams.lastTime = event.timeStamp || Date.now();
      var move = state.touchParams.lastY - state.touchParams.startY;

      if (Math.abs(move) < 5) {
        return false;
      }

      setMove(move);
    };

    var touchEnd = function touchEnd(event) {
      var _a, _b;

      var changedTouches = event.changedTouches[0];
      state.touchParams.lastY = changedTouches.pageY;
      state.touchParams.lastTime = event.timeStamp || Date.now();
      var move = state.touchParams.lastY - state.touchParams.startY;

      if (Math.abs(move) < 5) {
        return false;
      }

      var updateMove = move + state.transformY;
      var h2 = ((_a = months.value) == null ? void 0 : _a.offsetHeight) || 0;
      var offsetHeight = ((_b = monthsPanel.value) == null ? void 0 : _b.offsetHeight) || 0;

      if (updateMove > 0) {
        getMonth(getCurrData("prev"), "prev");
      } else if (updateMove < 0 && updateMove < -offsetHeight + (Math.abs(move) > h2 ? Math.abs(move) : h2) * 5) {
        getMonth(getCurrData("next"), "next");

        if (Math.abs(move) >= 300) {
          getMonth(getCurrData("next"), "next");
        }
      }

      var moveTime = state.touchParams.lastTime - state.touchParams.startTime;

      if (moveTime <= 300) {
        move = move * 2;
        moveTime = moveTime + 1e3;
        setMove(move, "end", moveTime);
      } else {
        setMove(move, "end");
      }
    };

    var resetRender = function resetRender() {
      state.chooseData.splice(0);
      state.monthsData.splice(0);
      state.scrollDistance = 0;
      state.translateY = 0;
      setTransform(state.scrollDistance);
      initData();
    };

    initData();
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.defaultValue;
    }, function (val) {
      if (val) {
        resetRender();
      }
    });
    return __spreadValues(__spreadValues({
      weeks: weeks,
      touchStart: touchStart,
      touchMove: touchMove,
      touchEnd: touchEnd,
      getClass: getClass,
      isStartTip: isStartTip,
      isEndTip: isEndTip,
      chooseDay: chooseDay,
      isCurrDay: isCurrDay,
      confirm: confirm2,
      monthsPanel: monthsPanel,
      months: months,
      weeksPanel: weeksPanel
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(props));
  }
});

var _hoisted_1$c = {
  class: "calendar-title"
};
var _hoisted_2$c = {
  class: "calendar-curr-month"
};
var _hoisted_3$8 = {
  class: "calendar-weeks",
  ref: "weeksPanel"
};
var _hoisted_4$6 = {
  class: "calendar-months-panel",
  ref: "monthsPanel"
};
var _hoisted_5$6 = {
  class: "calendar-loading-tip"
};
var _hoisted_6$4 = {
  class: "calendar-month-title"
};
var _hoisted_7$4 = {
  class: "calendar-month-con"
};
var _hoisted_8$4 = ["onClick"];
var _hoisted_9$3 = {
  class: "calendar-day"
};
var _hoisted_10$2 = {
  key: 0,
  class: "calendar-curr-tips"
};
var _hoisted_11$2 = {
  key: 1,
  class: "calendar-day-tip"
};
var _hoisted_12$2 = {
  key: 2,
  class: "calendar-day-tip"
};
var _hoisted_13$1 = {
  key: 0,
  class: "nut-calendar-footer"
};

function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-calendar nut-calendar-taro", {
      "nut-calendar-tile": !_ctx.poppable,
      "nut-calendar-nofooter": _ctx.isAutoBackFill
    }])
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-calendar-header", {
      "nut-calendar-header-tile": !_ctx.poppable
    }])
  }, [_ctx.poppable ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$c, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$c, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.yearMonthTitle), 1)], 64)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_3$8, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.weeks, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: "calendar-week-item",
      key: index
    }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item), 1);
  }), 128))], 512)], 2), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-calendar-content",
    ref: "months",
    onTouchstart: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.touchStart && _ctx.touchStart.apply(_ctx, arguments);
    }, ["stop"])),
    onTouchmove: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.touchMove && _ctx.touchMove.apply(_ctx, arguments);
    }, ["stop", "prevent"])),
    onTouchend: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_12__[/* withModifiers */ "e"])(function () {
      return _ctx.touchEnd && _ctx.touchEnd.apply(_ctx, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_4$6, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_5$6, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(!_ctx.unLoadPrev ? "\u52A0\u8F7D\u4E0A\u4E00\u4E2A\u6708" : "\u6CA1\u6709\u66F4\u65E9\u6708\u4EFD"), 1), (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.monthsData, function (month, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: "calendar-month",
      key: index
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_6$4, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(month.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_7$4, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["calendar-month-item", _ctx.type === "range" ? "month-item-range" : ""])
    }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(month.monthData, function (day, i) {
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        key: i,
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["calendar-month-day", _ctx.getClass(day, month)]),
        onClick: function onClick($event) {
          return _ctx.chooseDay(day, month);
        }
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_9$3, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(day.type == "curr" ? day.day : ""), 1), _ctx.isCurrDay(month, day.day) ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_10$2, "\u4ECA\u5929")) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.isStartTip(day, month) ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_11$2, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])("\u5F00\u59CB"))) : _ctx.isEndTip(day, month) ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_12$2, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])("\u7ED3\u675F"))) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 10, _hoisted_8$4);
    }), 128))], 2)])]);
  }), 128))], 512)], 544), _ctx.poppable && !_ctx.isAutoBackFill ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_13$1, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "calendar-confirm-btn",
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.confirm && _ctx.confirm.apply(_ctx, arguments);
    })
  }, "\u786E\u5B9A")])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 2);
}

_sfc_main$l.render = _sfc_render$h;

var _createComponent44 = createComponent("calendar"),
    create$k = _createComponent44.create;

var _sfc_main$k = create$k({
  components: Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, _sfc_main$l.name, _sfc_main$l),
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: false
    },
    poppable: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "\u65E5\u5386\u9009\u62E9"
    },
    defaultValue: {
      type: String
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    }
  },
  emits: ["choose", "close", "update:visible"],
  setup: function setup(props, _ref66) {
    var emit = _ref66.emit;
    var show = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.visible);
    var calendarRef = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);

    var update = function update() {
      show.value = false;
      emit("update:visible", false);
    };

    var close = function close() {
      show.value = false;
      emit("close");
      emit("update:visible", false);
    };

    var choose = function choose(param) {
      close();
      emit("choose", param);
    };

    var closePopup = function closePopup() {
      close();
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      show.value = value;
    });
    return {
      show: show,
      closePopup: closePopup,
      update: update,
      close: close,
      choose: choose,
      calendarRef: calendarRef
    };
  }
});

var index_taro_vue_vue_type_style_index_0_lang = "@keyframes nutFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes nutFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n.nutFade-enter-active,\n.nutFadeIn,\n.nutFade-leave-active,\n.nutFadeOut {\n  animation-duration: 0.25s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n.nutFade-enter-active,\n.nutFadeIn {\n  animation-name: nutFadeIn;\n}\n.nutFade-leave-active,\n.nutFadeOut {\n  animation-name: nutFadeOut;\n}\n@keyframes nutZoomIn {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n50% {\n    opacity: 1;\n}\n}\n@keyframes nutZoomOut {\nfrom {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n}\nto {\n    opacity: 0;\n}\n}\n.nutZoom-enter-active,\n.nutZoomIn,\n.nutZoom-leave-active,\n.nutZoomOut {\n  animation-duration: 0.25s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n.nutZoom-enter-active,\n.nutZoomIn {\n  animation-name: nutZoomIn;\n}\n.nutZoom-leave-active,\n.nutZoomOut {\n  animation-name: nutZoomOut;\n}\n@keyframes nutEaseIn {\n0% {\n    opacity: 0;\n    transform: scale(0.9);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@keyframes nutEaseOut {\n0% {\n    opacity: 1;\n    transform: scale(1);\n}\n100% {\n    opacity: 0;\n    transform: scale(0.9);\n}\n}\n.nutEase-enter-active,\n.nutEaseIn,\n.nutEase-leave-active,\n.nutEaseOut {\n  animation-duration: 0.25s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n.nutEase-enter-active,\n.nutEaseIn {\n  animation-name: nutEaseIn;\n}\n.nutEase-leave-active,\n.nutEaseOut {\n  animation-name: nutEaseOut;\n}\n@keyframes nutDropIn {\n0% {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n100% {\n    opacity: 1;\n    transform: scaleY(1);\n}\n}\n@keyframes nutDropOut {\n0% {\n    opacity: 1;\n    transform: scaleY(1);\n}\n100% {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n}\n.nutDrop-enter-active,\n.nutDropIn,\n.nutDrop-leave-active,\n.nutDropOut {\n  animation-duration: 0.25s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n.nutDrop-enter-active,\n.nutDropIn {\n  animation-name: nutDropIn;\n}\n.nutDrop-leave-active,\n.nutDropOut {\n  animation-name: nutDropOut;\n}\n@keyframes rotation {\n0% {\n    -webkit-transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n}\n}\n.nutRotate-enter-active,\n.nutRotateIn,\n.nutRotate-leave-active,\n.nutRotateOut {\n  animation-duration: 0.25s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n.nutRotate-enter-active,\n.nutRotateIn {\n  animation-name: nutRotateIn;\n}\n.nutRotate-leave-active,\n.nutRotateOut {\n  animation-name: nutRotateOut;\n}\n.nut-calendar-taro {\n  height: 60vh;\n}\n.popup-box {\n  height: 518px;\n}\n.nut-calendar-content {\n  overflow-y: auto;\n}\n::-webkit-scrollbar {\n  display: none;\n}";

function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_calendar_item = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-calendar-item");

  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-popup");

  return _ctx.poppable ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_popup, {
    key: 0,
    visible: _ctx.show,
    "onUpdate:visible": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.show = $event;
    }),
    position: "bottom",
    round: "",
    closeable: "",
    onClickOverlay: _ctx.closePopup,
    onClickCloseIcon: _ctx.closePopup
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_calendar_item, {
        ref: "calendarRef",
        type: _ctx.type,
        "is-auto-back-fill": _ctx.isAutoBackFill,
        poppable: _ctx.poppable,
        title: _ctx.title,
        "default-value": _ctx.defaultValue,
        "start-date": _ctx.startDate,
        "end-date": _ctx.endDate,
        onUpdate: _ctx.update,
        onClose: _ctx.close,
        onChoose: _ctx.choose
      }, null, 8, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "onUpdate", "onClose", "onChoose"])];
    }),
    _: 1
  }, 8, ["visible", "onClickOverlay", "onClickCloseIcon"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_calendar_item, {
    key: 1,
    type: _ctx.type,
    "is-auto-back-fill": _ctx.isAutoBackFill,
    poppable: _ctx.poppable,
    title: _ctx.title,
    "default-value": _ctx.defaultValue,
    "start-date": _ctx.startDate,
    "end-date": _ctx.endDate,
    onClose: _ctx.close,
    onChoose: _ctx.choose
  }, null, 8, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "onClose", "onChoose"]));
}

_sfc_main$k.render = _sfc_render$g;

var _createComponent45 = createComponent("checkbox"),
    create$j = _createComponent45.create,
    componentName$e = _createComponent45.componentName;

var _sfc_main$j = create$j({
  components: {
    nutIcon: _sfc_main$_
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    textPosition: {
      type: String,
      default: "right"
    },
    iconSize: {
      type: [String, Number],
      default: "18"
    },
    iconName: {
      type: String,
      default: "check-normal"
    },
    iconActiveName: {
      type: String,
      default: "checked"
    },
    label: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(props, _ref67) {
    var emit = _ref67.emit,
        slots = _ref67.slots;
    var parent = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* inject */ "s"])("parent");
    var hasParent = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return !!parent;
    });
    var pValue = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      if (hasParent.value) {
        return parent.value.value.includes(props.label);
      } else {
        return props.modelValue;
      }
    });
    var pDisabled = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return hasParent.value ? parent.disabled : props.disabled;
    });
    var checked = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return !!props.modelValue;
    });
    var color = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return !pDisabled.value ? !pValue.value ? "nut-checkbox__icon--unchecked" : "nut-checkbox__icon" : "nut-checkbox__icon--disable";
    });

    var emitChange = function emitChange(value, label) {
      emit("update:modelValue", value);
      emit("change", value, label);
    };

    var renderIcon = function renderIcon() {
      var iconName = props.iconName,
          iconSize = props.iconSize,
          iconActiveName = props.iconActiveName;
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])(_sfc_main$_, {
        name: !pValue.value ? iconName : iconActiveName,
        size: iconSize,
        class: color.value
      });
    };

    var renderLabel = function renderLabel() {
      var _a;

      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])("view", {
        class: "".concat(componentName$e, "__label ").concat(pDisabled.value ? "".concat(componentName$e, "__label--disabled") : "")
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };

    var handleClick = function handleClick(e) {
      var _a;

      if (pDisabled.value) return;
      emitChange(!checked.value, (_a = slots.default) == null ? void 0 : _a.call(slots)[0].children);

      if (hasParent.value) {
        var value = parent.value.value;
        var label = props.label;
        var index = value.indexOf(label);

        if (index > -1) {
          value.splice(index, 1);
        } else {
          value.push(label);
        }

        parent.updateValue(value);
      }
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      hasParent.value && parent["relation"](Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])());
    });
    return function () {
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])("view", {
        class: "".concat(componentName$e, " ").concat(props.textPosition === "left" ? "".concat(componentName$e, "--reverse") : ""),
        onClick: handleClick
      }, [renderIcon(), renderLabel()]);
    };
  }
});

function useExpose(apis) {
  var instance = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])();

  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}

var _createComponent46 = createComponent("checkboxgroup"),
    create$i = _createComponent46.create,
    componentName$d = _createComponent46.componentName;

var _sfc_main$i = create$i({
  props: {
    modelValue: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(props, _ref68) {
    var slots = _ref68.slots,
        emit = _ref68.emit;
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      children: []
    });

    var relation = function relation(child) {
      if (child.proxy) {
        state.children.push(child.proxy);
      }
    };

    var updateValue = function updateValue(value) {
      emit("update:modelValue", value);
      emit("change", value);
    };

    var toggleAll = function toggleAll(checked) {
      var values = [];

      if (!!checked) {
        state.children.forEach(function (item) {
          values.push(item == null ? void 0 : item.label);
        });
      }

      emit("update:modelValue", values);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* provide */ "D"])("parent", {
      value: Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
        return props.modelValue;
      }),
      disabled: props.disabled,
      updateValue: updateValue,
      relation: relation
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.modelValue;
    }, function (value) {
      emit("change", value);
    });
    useExpose({
      toggleAll: toggleAll
    });
    return function () {
      var _a;

      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])("view", {
        class: "".concat(componentName$d)
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});

var commonProps = {
  listData: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  readonly: {
    type: Boolean,
    default: false
  },
  visibleItemCount: {
    type: [Number, String],
    default: 7
  },
  defaultIndex: {
    type: [Number, String],
    default: 0
  },
  itemHeight: {
    type: [Number, String],
    default: 35
  }
};
var MOMENTUM_LIMIT_DISTANCE = 15;
var MOMENTUM_LIMIT_TIME = 300;
var DEFAULT_DURATION = 200;

var _createComponent47 = createComponent("picker-column"),
    create$h = _createComponent47.create;

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function stopPropagation(event) {
  event.stopPropagation();
}

function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(", ")[5];
  return Number(translateY);
}

function isObject(val) {
  return val !== null && Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(val) === "object";
}

function isOptionDisabled(option) {
  return isObject(option) && option.disabled;
}

var _sfc_main$h = create$h({
  props: __spreadValues({
    dataType: String
  }, commonProps),
  emits: ["click", "change"],
  setup: function setup(props, _ref69) {
    var emit = _ref69.emit;
    var wrapper = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      options: props.listData,
      moving: false,
      startOffset: 0,
      touchStartTime: 0,
      momentumOffset: 0,
      transitionEndTrigger: null
    });
    var touch = useTouch();
    var wrapperStyle = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        transform: "translate3d(0, ".concat(state.offset + baseOffset(), "px, 0)"),
        transitionDuration: "".concat(state.duration, "ms"),
        transitionProperty: state.duration ? "all" : "none"
      };
    });

    var getIndexByOffset = function getIndexByOffset(offset) {
      return range(Math.round(-offset / +props.itemHeight), 0, state.options.length - 1);
    };

    var baseOffset = function baseOffset() {
      return +props.itemHeight * (+props.visibleItemCount - 1) / 2;
    };

    var stopMomentum = function stopMomentum() {
      state.moving = false;
      state.duration = 0;

      if (state.transitionEndTrigger) {
        state.transitionEndTrigger();
        state.transitionEndTrigger = null;
      }
    };

    var adjustIndex = function adjustIndex(index) {
      index = range(index, 0, state.options.length);

      for (var i = index; i < state.options.length; i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }

      for (var _i2 = index - 1; _i2 >= 0; _i2--) {
        if (!isOptionDisabled(state.options[_i2])) return _i2;
      }
    };

    var setIndex = function setIndex(index) {
      var emitChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      index = adjustIndex(index) || 0;
      var offset = -index * +props.itemHeight;

      var trigger = function trigger() {
        if (index !== state.index) {
          state.index = index;

          if (emitChange) {
            emit("change", index);
          }
        }
      };

      if (state.moving && offset !== state.offset) {
        state.transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };

    var momentum = function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = state.offset + speed / 0.03 * (distance < 0 ? -1 : 1);
      var index = getIndexByOffset(distance);
      setIndex(index, true);
    };

    var onTouchStart = function onTouchStart(event) {
      if (props.readonly) {
        return;
      }

      touch.start(event);

      if (state.moving) {
        var translateY = getElementTranslateY(wrapper.value);
        state.offset = Math.min(0, translateY - baseOffset());
        state.startOffset = state.offset;
      } else {
        state.startOffset = state.offset;
      }

      state.duration = 0;
      state.touchStartTime = Date.now();
      state.momentumOffset = state.startOffset;
      state.transitionEndTrigger = null;
    };

    var onTouchMove = function onTouchMove(event) {
      if (props.readonly) {
        return;
      }

      state.moving = true;
      touch.move(event);

      if (touch.isVertical()) {
        state.moving = true;
        preventDefault(event, true);
      }

      var moveOffset = state.startOffset + touch.deltaY.value;

      if (moveOffset > props.itemHeight) {
        state.offset = props.itemHeight;
      } else {
        state.offset = state.startOffset + touch.deltaY.value;
      }

      var now = Date.now();

      if (now - state.touchStartTime > MOMENTUM_LIMIT_TIME) {
        state.touchStartTime = now;
        state.momentumOffset = state.offset;
      }
    };

    var onTouchEnd = function onTouchEnd() {
      var index = getIndexByOffset(state.offset);
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);
      var distance = state.offset - state.momentumOffset;
      var duration = Date.now() - state.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        momentum(distance, duration);
        return;
      }
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      setIndex(+props.defaultIndex);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.listData;
    }, function (val) {
      if (val) {
        state.options = val;
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.defaultIndex;
    }, function (val) {
      setIndex(+val);
    });
    return __spreadProps(__spreadValues({}, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      wrapper: wrapper,
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
      wrapperStyle: wrapperStyle,
      stopMomentum: stopMomentum,
      columns: state.options,
      height: Number(props.visibleItemCount) * +props.itemHeight
    });
  }
});

function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: "nut-picker__content",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: _ctx.height + "px"
    }),
    onTouchstart: _cache[0] || (_cache[0] = function () {
      return _ctx.onTouchStart && _ctx.onTouchStart.apply(_ctx, arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = function () {
      return _ctx.onTouchMove && _ctx.onTouchMove.apply(_ctx, arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function () {
      return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
    }),
    onTouchcancel: _cache[3] || (_cache[3] = function () {
      return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
    }),
    onTransitionend: _cache[4] || (_cache[4] = function () {
      return _ctx.stopMomentum && _ctx.stopMomentum.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
    class: "nut-picker__wrapper",
    ref: "wrapper",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.wrapperStyle)
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.options, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: "nut-picker__item",
      key: index
    }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.dataType === "cascade" ? item.text : item), 1);
  }), 128))], 4)], 36);
}

_sfc_main$h.render = _sfc_render$f;

var _createComponent48 = createComponent("picker"),
    create$g = _createComponent48.create,
    componentName$c = _createComponent48.componentName;

var _sfc_main$g = create$g({
  components: (_components9 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_components9, _sfc_main$h.name, _sfc_main$h), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_components9, _sfc_main$N.name, _sfc_main$N), _components9),
  props: __spreadValues(__spreadProps(__spreadValues({}, popupProps$1), {
    title: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    okText: {
      type: String,
      default: "\u786E\u5B9A"
    }
  }), commonProps),
  emits: ["close", "change", "confirm", "update:visible"],
  setup: function setup(props, _ref70) {
    var emit = _ref70.emit;
    var childrenKey = "children";
    var valuesKey = "values";
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      show: false,
      formattedColumns: props.listData,
      defaultIndex: props.defaultIndex
    });
    var _defaultIndex = props.defaultIndex;
    var defaultIndexList = [];
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$c;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    var top = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return Number(+props.visibleItemCount - 1) / 2 * +props.itemHeight;
    });
    var height = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return Number(props.visibleItemCount) * +props.itemHeight;
    });
    var dataType = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var firstColumn = state.formattedColumns[0];

      if (Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(firstColumn) === "object") {
        if (firstColumn[childrenKey]) {
          return "cascade";
        } else if (firstColumn == null ? void 0 : firstColumn[valuesKey]) {
          addDefaultIndexList(props.listData);
          return "multipleColumns";
        }
      }

      return "text";
    });
    var columnList = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      if (dataType.value === "text") {
        return [{
          values: state.formattedColumns,
          defaultIndex: state.defaultIndex
        }];
      } else if (dataType.value === "multipleColumns") {
        return state.formattedColumns;
      } else if (dataType.value === "cascade") {
        return formatCascade(state.formattedColumns, state.defaultIndex);
      }

      return state.formattedColumns;
    });

    var addDefaultIndexList = function addDefaultIndexList(listData) {
      defaultIndexList = [];
      listData.forEach(function (res) {
        defaultIndexList.push(res.defaultIndex || 0);
      });
    };

    var formatCascade = function formatCascade(listData, defaultIndex) {
      var formatted = [];
      var children = listData;
      children.defaultIndex = defaultIndex;

      while (children) {
        formatted.push({
          values: children,
          defaultIndex: children.defaultIndex || 0
        });
        children = children == null ? void 0 : children[children.defaultIndex || 0].children;
      }

      addDefaultIndexList(formatted);
      return formatted;
    };

    var getCascadeData = function getCascadeData(listData, defaultIndex) {
      var _a;

      var arr = listData;
      arr.defaultIndex = defaultIndex;
      var dataList = [];

      while (arr) {
        var item = arr[(_a = arr.defaultIndex) != null ? _a : 0];
        dataList.push(item.text);
        arr = item.children;
      }

      return dataList;
    };

    var close = function close() {
      emit("close");
      emit("update:visible", false);
    };

    var changeHandler = function changeHandler(columnIndex, dataIndex) {
      if (dataType.value === "cascade") {
        var cursor = state.formattedColumns;

        if (columnIndex === 0) {
          state.defaultIndex = dataIndex;
        }

        var i = 0;

        while (cursor) {
          if (i === columnIndex) {
            cursor.defaultIndex = dataIndex;
          } else if (i > columnIndex) {
            cursor.defaultIndex = 0;
          }

          cursor = cursor[cursor.defaultIndex || 0].children;
          i++;
        }
      } else if (dataType.value === "text") {
        _defaultIndex = dataIndex;
      } else if (dataType.value === "multipleColumns") {
        defaultIndexList[columnIndex] = dataIndex;
        var val = defaultIndexList.map(function (res, i) {
          return Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRaw */ "r"])(state.formattedColumns)[i].values[res];
        });
        emit("change", val);
      }
    };

    var confirm2 = function confirm2() {
      if (dataType.value === "text") {
        state.defaultIndex = _defaultIndex;
        emit("confirm", state.formattedColumns[_defaultIndex]);
      } else if (dataType.value === "multipleColumns") {
        for (var i = 0; i < defaultIndexList.length; i++) {
          state.formattedColumns[i].defaultIndex = defaultIndexList[i];
        }

        var checkedArr = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRaw */ "r"])(state.formattedColumns).map(function (res) {
          return res.values && res.values[res.defaultIndex];
        });
        emit("confirm", checkedArr);
      } else if (dataType.value === "cascade") {
        emit("confirm", getCascadeData(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRaw */ "r"])(state.formattedColumns), state.defaultIndex));
      }

      emit("update:visible", false);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (val) {
      state.show = val;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.listData;
    }, function (val) {
      state.formattedColumns = val;
    });
    return __spreadProps(__spreadValues({
      classes: classes
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(state)), {
      column: _sfc_main$h,
      dataType: dataType,
      columnList: columnList,
      top: top,
      height: height,
      close: close,
      changeHandler: changeHandler,
      confirm: confirm2
    });
  }
});

var _hoisted_1$b = {
  class: "nut-picker__bar"
};
var _hoisted_2$b = {
  class: "nut-picker__column"
};

function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_picker_column = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-picker-column");

  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-popup");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_popup, {
    position: "bottom",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: _ctx.height + 56 + "px"
    }),
    visible: _ctx.show,
    "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.show = $event;
    }),
    teleport: _ctx.teleport,
    "lock-scroll": _ctx.lockScroll,
    "close-on-click-overlay": _ctx.closeOnClickOverlay,
    onClose: _ctx.close
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$b, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-picker__left nut-picker__button",
        onClick: _cache[0] || (_cache[0] = function () {
          return _ctx.close && _ctx.close.apply(_ctx, arguments);
        })
      }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.cancelText), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-picker__button",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.confirm();
        })
      }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.okText), 1)]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$b, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-picker__mask",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
          backgroundSize: "100% ".concat(_ctx.top, "px")
        })
      }, null, 4), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-picker__hairline",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
          top: " ".concat(_ctx.top, "px")
        })
      }, null, 4), (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.columnList, function (item, columnIndex) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
          class: "nut-picker__columnitem",
          key: columnIndex
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_picker_column, {
          "list-data": item.values,
          readonly: _ctx.readonly,
          "default-index": item.defaultIndex,
          "visible-item-count": _ctx.visibleItemCount,
          "item-height": _ctx.itemHeight,
          "data-type": _ctx.dataType,
          onChange: function onChange(dataIndex) {
            _ctx.changeHandler(columnIndex, dataIndex);
          }
        }, null, 8, ["list-data", "readonly", "default-index", "visible-item-count", "item-height", "data-type", "onChange"])]);
      }), 128))])];
    }),
    _: 1
  }, 8, ["style", "visible", "teleport", "lock-scroll", "close-on-click-overlay", "onClose"])], 2);
}

_sfc_main$g.render = _sfc_render$e;

var _createComponent49 = createComponent("datepicker"),
    create$f = _createComponent49.create;

var _sfc_main$f = create$f({
  components: Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, _sfc_main$g.name, [_sfc_main$g]),
  props: {
    value: {
      type: String,
      default: new Date()
    },
    start: {
      type: String,
      default: "1970-01-01"
    },
    end: {
      type: String,
      default: "2999-01-01"
    },
    fields: {
      type: String,
      default: "day"
    }
  },
  emits: ["onChange"],
  setup: function setup(props, _ref72) {
    var emit = _ref72.emit;

    var onChange = function onChange(e) {
      emit("onChange", e.detail.value);
    };

    return __spreadValues({
      confirm: confirm,
      onChange: onChange
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(props));
  }
});

function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_picker = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("picker");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_picker, {
    mode: "date",
    onChange: _ctx.onChange,
    value: _ctx.value,
    start: _ctx.start,
    end: _ctx.end,
    fields: _ctx.fields
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["onChange", "value", "start", "end", "fields"]);
}

_sfc_main$f.render = _sfc_render$d;

var _createComponent50 = createComponent("inputnumber"),
    componentName$b = _createComponent50.componentName,
    create$e = _createComponent50.create;

var _sfc_main$e = create$e({
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    inputWidth: {
      type: [Number, String],
      default: ""
    },
    buttonSize: {
      type: [Number, String],
      default: ""
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: 9999
    },
    step: {
      type: [Number, String],
      default: 1
    },
    decimalPlaces: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup: function setup(props, _ref73) {
    var emit = _ref73.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref74;

      var prefixCls = componentName$b;
      return _ref74 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref74, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref74, "".concat(prefixCls, "--disabled"), props.disabled), _ref74;
    });

    var fixedDecimalPlaces = function fixedDecimalPlaces(v) {
      return Number(v).toFixed(Number(props.decimalPlaces));
    };

    var change = function change(event) {
      var input = event.target;
      emit("update:modelValue", input.value, event);
    };

    var emitChange = function emitChange(value, event) {
      var output_value = fixedDecimalPlaces(value);
      emit("change", output_value, event);
      emit("update:modelValue", output_value, event);
    };

    var addAllow = function addAllow() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number(props.modelValue);
      return value < Number(props.max) && !props.disabled;
    };

    var reduceAllow = function reduceAllow() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number(props.modelValue);
      return value > Number(props.min) && !props.disabled;
    };

    var reduce = function reduce(event) {
      emit("reduce", event);

      if (reduceAllow()) {
        var output_value = Number(props.modelValue) - Number(props.step);
        emitChange(output_value, event);
      } else {
        emit("overlimit", event);
      }
    };

    var add = function add(event) {
      emit("add", event);

      if (addAllow()) {
        var output_value = Number(props.modelValue) + Number(props.step);
        emitChange(output_value, event);
      } else {
        emit("overlimit", event);
      }
    };

    var blur = function blur(event) {
      if (props.disabled) return;
      if (props.readonly) return;
      var input = event.target;
      var value = +input.value;

      if (value < Number(props.min)) {
        value = Number(props.min);
      } else if (value > Number(props.max)) {
        value = Number(props.max);
      }

      emitChange(value, event);
      emit("blur", event);
    };

    var focus = function focus(event) {
      if (props.disabled) return;

      if (props.readonly) {
        blur(event);
        return;
      }

      emit("focus", event);
    };

    return {
      classes: classes,
      change: change,
      blur: blur,
      focus: focus,
      add: add,
      addAllow: addAllow,
      reduce: reduce,
      reduceAllow: reduceAllow,
      pxCheck: pxCheck
    };
  }
});

var _hoisted_1$a = {
  key: 0,
  class: "nut-inputnumber__text--readonly"
};
var _hoisted_2$a = ["min", "max", "disabled", "readonly", "value"];

function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: _ctx.pxCheck(_ctx.buttonSize)
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
    name: "minus",
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-inputnumber__icon", {
      "nut-inputnumber__icon--disabled": !_ctx.reduceAllow()
    }]),
    size: _ctx.buttonSize,
    onClick: _ctx.reduce
  }, null, 8, ["class", "size", "onClick"]), _ctx.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$a, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("input", {
    key: 1,
    type: "number",
    min: _ctx.min,
    max: _ctx.max,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      width: _ctx.pxCheck(_ctx.inputWidth)
    }),
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = function () {
      return _ctx.change && _ctx.change.apply(_ctx, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function () {
      return _ctx.blur && _ctx.blur.apply(_ctx, arguments);
    }),
    onFocus: _cache[2] || (_cache[2] = function () {
      return _ctx.focus && _ctx.focus.apply(_ctx, arguments);
    })
  }, null, 44, _hoisted_2$a)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
    name: "plus",
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-inputnumber__icon", {
      "nut-inputnumber__icon--disabled": !_ctx.addAllow()
    }]),
    size: _ctx.buttonSize,
    onClick: _ctx.add
  }, null, 8, ["class", "size", "onClick"])], 6);
}

_sfc_main$e.render = _sfc_render$c;

function trimExtraChar(value, char, regExp) {
  var index = value.indexOf(char);

  if (index === -1) {
    return value;
  }

  if (char === "-" && index !== 0) {
    return value.slice(0, index);
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
}

function formatNumber(value) {
  var allowDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var allowMinus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (allowDot) {
    value = trimExtraChar(value, ".", /\./g);
  } else {
    value = value.replace(/\./g, "");
  }

  if (allowMinus) {
    value = trimExtraChar(value, "-", /-/g);
  } else {
    value = value.replace(/-/, "");
  }

  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, "");
}

var _createComponent51 = createComponent("input"),
    componentName$a = _createComponent51.componentName,
    create$d = _createComponent51.create;

var _sfc_main$d = create$d({
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u4FE1\u606F"
    },
    label: {
      type: String,
      default: ""
    },
    requireShow: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: "left"
    },
    maxLength: {
      type: [String, Number],
      default: "99999999"
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["change", "update:modelValue", "blur", "focus", "clear"],
  setup: function setup(props, _ref75) {
    var emit = _ref75.emit;
    var active = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(false);
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref76;

      var prefixCls = componentName$a;
      return _ref76 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref76, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref76, "".concat(prefixCls, "-disabled"), props.disabled), _ref76;
    });
    var styles = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        textAlign: props.textAlign
      };
    });

    var valueChange = function valueChange(event) {
      var input = event.target;
      var val = input.value;

      if (props.maxLength && val.length > Number(props.maxLength)) {
        val = val.slice(0, Number(props.maxLength));
      }

      if (props.type === "digit") {
        val = formatNumber(val, true);
      }

      if (props.type === "number") {
        val = formatNumber(val, false);
      }

      emit("update:modelValue", val, event);
      emit("change", val, event);
    };

    var valueFocus = function valueFocus(event) {
      var input = event.target;
      var value = input.value;
      active.value = true;
      emit("focus", value, event);
    };

    var valueBlur = function valueBlur(event) {
      setTimeout(function () {
        active.value = false;
      }, 0);
      var input = event.target;
      var value = input.value;
      emit("blur", value, event);
    };

    var handleClear = function handleClear(event) {
      emit("change", "", event);
      emit("update:modelValue", "", event);
    };

    return {
      active: active,
      classes: classes,
      styles: styles,
      valueChange: valueChange,
      valueFocus: valueFocus,
      valueBlur: valueBlur,
      handleClear: handleClear
    };
  }
});

var _hoisted_1$9 = {
  class: "nut-input-label"
};
var _hoisted_2$9 = {
  key: 0,
  class: "nut-input-require"
};
var _hoisted_3$7 = {
  key: 1,
  class: "label-string"
};
var _hoisted_4$5 = {
  key: 0
};
var _hoisted_5$5 = ["type", "maxlength", "placeholder", "disabled", "readonly", "value"];

function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$9, [_ctx.requireShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_2$9, "*")) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _ctx.label ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_3$7, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.label), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)]), _ctx.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_4$5, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("input", {
    key: 1,
    class: "input-text",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.styles),
    type: _ctx.type,
    maxlength: _ctx.maxLength,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = function () {
      return _ctx.valueChange && _ctx.valueChange.apply(_ctx, arguments);
    }),
    onFocus: _cache[1] || (_cache[1] = function () {
      return _ctx.valueFocus && _ctx.valueFocus.apply(_ctx, arguments);
    }),
    onBlur: _cache[2] || (_cache[2] = function () {
      return _ctx.valueBlur && _ctx.valueBlur.apply(_ctx, arguments);
    })
  }, null, 44, _hoisted_5$5)), _ctx.clearable && !_ctx.readonly ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])((Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 2,
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.handleClear && _ctx.handleClear.apply(_ctx, arguments);
    }),
    class: "nut-textinput-clear"
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
    name: "close-little",
    size: "12px"
  })], 512)), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vShow */ "d"], _ctx.active && _ctx.modelValue.length > 0]]) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 2);
}

_sfc_main$d.render = _sfc_render$b;

var _createComponent52 = createComponent("radio"),
    componentName$9 = _createComponent52.componentName,
    create$c = _createComponent52.create;

var _sfc_main$c = create$c({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    iconName: {
      type: String,
      default: "check-normal"
    },
    iconActiveName: {
      type: String,
      default: "check-checked"
    },
    iconSize: {
      type: [String, Number],
      default: 18
    }
  },
  setup: function setup(props, _ref77) {
    var emit = _ref77.emit,
        slots = _ref77.slots;
    var parent = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* inject */ "s"])("parent");
    var isCurValue = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return parent.label.value === props.label;
    });
    var color = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return !props.disabled ? isCurValue.value ? "nut-radio__icon" : "nut-radio__icon--unchecked" : "nut-radio__icon--disable";
    });
    var position = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return parent.position;
    });

    var renderIcon = function renderIcon() {
      var iconName = props.iconName,
          iconSize = props.iconSize,
          iconActiveName = props.iconActiveName;
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])(_sfc_main$_, {
        name: isCurValue.value ? iconActiveName : iconName,
        size: iconSize,
        class: color.value
      });
    };

    var renderLabel = function renderLabel() {
      var _a;

      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])("view", {
        class: "".concat(componentName$9, "__label ").concat(props.disabled ? "".concat(componentName$9, "__label--disabled") : "")
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };

    var handleClick = function handleClick() {
      if (isCurValue.value || props.disabled) return;
      parent.updateValue(props.label);
    };

    return function () {
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])("view", {
        class: "".concat(componentName$9, " ").concat(position.value === "left" ? "".concat(componentName$9, "--reverse") : ""),
        onClick: handleClick
      }, [renderIcon(), renderLabel()]);
    };
  }
});

var _createComponent53 = createComponent("radiogroup"),
    componentName$8 = _createComponent53.componentName,
    create$b = _createComponent53.create;

var _sfc_main$b = create$b({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ""
    },
    textPosition: {
      type: String,
      default: "right"
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(props, _ref78) {
    var emit = _ref78.emit,
        slots = _ref78.slots;

    var updateValue = function updateValue(value) {
      return emit("update:modelValue", value);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* provide */ "D"])("parent", {
      label: Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* readonly */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
        return props.modelValue;
      })),
      position: props.textPosition,
      updateValue: updateValue
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.modelValue;
    }, function (value) {
      return emit("change", value);
    });
    return function () {
      var _a;

      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* h */ "r"])("view", {
        class: "".concat(componentName$8)
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});

var _createComponent54 = createComponent("rate"),
    componentName$7 = _createComponent54.componentName,
    create$a = _createComponent54.create;

var _sfc_main$a = create$a({
  props: {
    count: {
      type: [String, Number],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    iconSize: {
      type: [String, Number],
      default: 18
    },
    activeColor: {
      type: String,
      default: ""
    },
    voidColor: {
      type: String,
      default: ""
    },
    uncheckedIcon: {
      type: String,
      default: "star-n"
    },
    checkedIcon: {
      type: String,
      default: "star-fill-n"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: [String, Number],
      default: 14
    }
  },
  emits: ["update:modelValue", "change"],
  setup: function setup(props, _ref79) {
    var emit = _ref79.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$7;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });

    var onClick = function onClick(e, index) {
      if (props.disabled || props.readonly) return;
      var value = 0;
      if (index === 1 && props.modelValue === index) ;else {
        value = index;

        if (props.allowHalf && e == 2) {
          value -= 0.5;
        }
      }
      emit("update:modelValue", value);
      emit("change", value);
    };

    return {
      classes: classes,
      onClick: onClick,
      pxCheck: pxCheck
    };
  }
});

function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.count, function (n) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: "nut-rate-item",
      key: n,
      style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
        marginRight: _ctx.pxCheck(_ctx.spacing)
      })
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
      size: _ctx.iconSize,
      class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["nut-rate-item__icon", {
        "nut-rate-item__icon--disabled": _ctx.disabled || n > _ctx.modelValue
      }]),
      onClick: function onClick($event) {
        return _ctx.onClick(1, n);
      },
      color: n <= _ctx.modelValue ? _ctx.activeColor : _ctx.voidColor,
      name: n <= _ctx.modelValue ? _ctx.checkedIcon : _ctx.uncheckedIcon
    }, null, 8, ["size", "onClick", "class", "color", "name"]), _ctx.allowHalf && _ctx.modelValue + 1 > n ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
      key: 0,
      class: "nut-rate-item__icon nut-rate-item__icon--half",
      onClick: function onClick($event) {
        return _ctx.onClick(2, n);
      },
      color: n <= _ctx.modelValue ? _ctx.activeColor : _ctx.voidColor,
      size: _ctx.iconSize,
      name: _ctx.checkedIcon
    }, null, 8, ["onClick", "color", "size", "name"])) : _ctx.allowHalf && _ctx.modelValue + 1 < n ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
      key: 1,
      class: "nut-rate-item__icon nut-rate-item__icon--disabled nut-rate-item__icon--half",
      onClick: function onClick($event) {
        return _ctx.onClick(2, n);
      },
      color: _ctx.voidColor,
      size: _ctx.iconSize,
      name: _ctx.uncheckedIcon
    }, null, 8, ["onClick", "color", "size", "name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 4);
  }), 128))], 2);
}

_sfc_main$a.render = _sfc_render$a;

var _createComponent55 = createComponent("picker"),
    create$9 = _createComponent55.create;

var _sfc_main$9 = create$9({
  props: __spreadValues({
    mode: {
      type: String,
      default: "selector"
    }
  }, commonProps),
  emits: ["confirm"],
  setup: function setup(props, _ref81) {
    var emit = _ref81.emit;
    var value = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])([]);
    var range2 = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])([]);
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onUpdated */ "B"])(function () {
      console.log("updated", props.listData);
    });

    var onChange = function onChange(e) {
      var _a;

      var ret;

      if (props.mode === "selector") {
        ret = props.listData[e.detail.value];
      } else if (props.mode === "multiSelector") {
        ret = (_a = range2.value) == null ? void 0 : _a.map(function (item, idx) {
          return item[e.detail.value[idx]];
        }).filter(function (res) {
          return res;
        });
      }

      emit("confirm", e.detail.value, ret);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(props.listData, function (val) {
      try {
        if (val.length) {
          value.value = [];
          range2.value = [];

          if (props.mode === "selector") {
            range2.value = props.listData;
          } else if (props.mode === "multiSelector") {
            val.forEach(function (item) {
              value.value.push(item.defaultIndex);
              range2.value.push(item.values);
            });
          }
        }
      } catch (error) {
        console.log("listData\u53C2\u6570\u683C\u5F0F\u9519\u8BEF", error);
      }
    }, {
      immediate: true,
      deep: true
    });

    var onColumnChange = function onColumnChange(e) {
      console.log("\u4FEE\u6539\u7684\u5217\u4E3A", e.detail.column, "\uFF0C\u503C\u4E3A", e.detail.value);
    };

    return {
      confirm: confirm,
      onChange: onChange,
      value: value,
      range: range2,
      onColumnChange: onColumnChange
    };
  }
});

function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_picker = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("picker");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_picker, {
    mode: _ctx.mode,
    range: _ctx.range,
    onChange: _ctx.onChange,
    onColumnchange: _ctx.onColumnChange,
    value: _ctx.value
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["mode", "range", "onChange", "onColumnchange", "value"]);
}

_sfc_main$9.render = _sfc_render$9;

var _createComponent56 = createComponent("shortpassword"),
    create$8 = _createComponent56.create;

var _sfc_main$8 = create$8({
  props: {
    title: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u5BC6\u7801"
    },
    desc: {
      type: String,
      default: "\u60A8\u4F7F\u7528\u4E86\u865A\u62DF\u8D44\u4EA7\uFF0C\u8BF7\u8FDB\u884C\u9A8C\u8BC1"
    },
    tips: {
      type: String,
      default: "\u5FD8\u8BB0\u5BC6\u7801"
    },
    visible: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ""
    },
    errorMsg: {
      type: String,
      default: ""
    },
    noButton: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    length: {
      type: [String, Number],
      default: 6
    }
  },
  emits: ["update:modelValue", "update:visible", "complete", "change", "ok", "tips", "close", "cancel"],
  setup: function setup(props, _ref82) {
    var emit = _ref82.emit;
    var realInput = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.modelValue);
    var realpwd = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();
    var comLen = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return range2(Number(props.length));
    });
    var show = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.visible);
    var isWx = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(false);

    function sureClick() {
      emit("ok", realInput.value);
    }

    function focus() {
      var a = "";

      if (isWx.value) {
        a = document.getElementsByClassName("nut-input-real-taro")[0];
        a.focus();
      } else {
        a = document.getElementsByClassName("nut-input-real")[0];
        var h2 = a.children[0];
        h2.focus();
      }
    }

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      show.value = value;
    });

    function changeValue(e) {
      var input = e.target;
      var val = input.value;

      if (val.length > comLen.value) {
        val = val.slice(0, comLen.value);
        realInput.value = val;
      }

      if (String(realInput.value).length === comLen.value) {
        emit("complete", val);
      }

      emit("change", val);
      emit("update:modelValue", val);
    }

    function close() {
      emit("update:visible", false);
      emit("cancel");
    }

    function closeIcon() {
      emit("update:visible", false);
      emit("close");
    }

    function range2(val) {
      return Math.min(Math.max(4, val), 6);
    }

    function onTips() {
      emit("tips");
    }

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["eventCenter"].once(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["getCurrentInstance"])().router.onReady, function () {});
      console.log(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.getEnv());

      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.getEnv() === "WEB") {
        isWx.value = false;
      } else {
        isWx.value = true;
      }
    });
    return {
      comLen: comLen,
      sureClick: sureClick,
      realInput: realInput,
      realpwd: realpwd,
      range: range2,
      changeValue: changeValue,
      close: close,
      onTips: onTips,
      focus: focus,
      show: show,
      closeIcon: closeIcon,
      isWx: isWx
    };
  }
});

var _hoisted_1$8 = {
  class: "nut-shortpsd-title"
};
var _hoisted_2$8 = {
  class: "nut-shortpsdWx-subtitle"
};
var _hoisted_3$6 = ["maxlength"];
var _hoisted_4$4 = {
  class: "nut-input-w"
};

var _hoisted_5$4 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
  class: "nut-input-site"
}, null, -1);

var _hoisted_6$3 = {
  key: 0,
  class: "nut-shortpsd-icon"
};
var _hoisted_7$3 = {
  class: "nut-shortpsd-message"
};
var _hoisted_8$3 = {
  class: "nut-shortpsd-error"
};
var _hoisted_9$2 = {
  key: 1,
  class: "nut-shortpsd-footer"
};

function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-popup");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_popup, {
    style: {
      padding: "32px 24px 28px 24px",
      borderRadius: "12px",
      textAlign: "center"
    },
    visible: _ctx.show,
    "onUpdate:visible": _cache[8] || (_cache[8] = function ($event) {
      return _ctx.show = $event;
    }),
    closeable: true,
    onClickCloseIcon: _ctx.closeIcon,
    "close-on-click-overlay": _ctx.closeOnClickOverlay,
    onClickOverlay: _ctx.close
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_1$8, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$8, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.desc), 1), _ctx.isWx ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])((Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("input", {
        key: 0,
        class: "nut-input-real-taro",
        type: "number",
        maxlength: _ctx.length,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.realInput = $event;
        }),
        onInput: _cache[1] || (_cache[1] = function () {
          return _ctx.changeValue && _ctx.changeValue.apply(_ctx, arguments);
        })
      }, null, 40, _hoisted_3$6)), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vModelText */ "c"], _ctx.realInput]]) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_4$4, [!_ctx.isWx ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withDirectives */ "P"])((Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("input", {
        key: 0,
        ref: "realpwd",
        class: "nut-input-real",
        type: "number",
        maxlength: "6",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return _ctx.realInput = $event;
        }),
        onInput: _cache[3] || (_cache[3] = function () {
          return _ctx.changeValue && _ctx.changeValue.apply(_ctx, arguments);
        })
      }, null, 544)), [[vue__WEBPACK_IMPORTED_MODULE_12__[/* vModelText */ "c"], _ctx.realInput]]) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), _hoisted_5$4, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-shortpsd-fake",
        onClick: _cache[4] || (_cache[4] = function () {
          return _ctx.focus && _ctx.focus.apply(_ctx, arguments);
        })
      }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(new Array(_ctx.comLen), function (sublen, index) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
          class: "nut-shortpsd-li",
          key: index
        }, [String(_ctx.realInput).length > index ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_6$3)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)]);
      }), 128))])]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_7$3, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_8$3, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.errorMsg), 1), _ctx.tips ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        key: 0,
        class: "nut-shortpsd-forget",
        onClick: _cache[5] || (_cache[5] = function () {
          return _ctx.onTips && _ctx.onTips.apply(_ctx, arguments);
        })
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
        class: "icon",
        size: "11px",
        name: "tips"
      }), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.tips), 1)])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)]), !_ctx.noButton ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_9$2, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-shortpsd-cancle",
        onClick: _cache[6] || (_cache[6] = function () {
          return _ctx.close && _ctx.close.apply(_ctx, arguments);
        })
      }, "\u53D6\u6D88"), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
        class: "nut-shortpsd-sure",
        onClick: _cache[7] || (_cache[7] = function () {
          return _ctx.sureClick && _ctx.sureClick.apply(_ctx, arguments);
        })
      }, "\u786E\u8BA4")])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)];
    }),
    _: 1
  }, 8, ["visible", "onClickCloseIcon", "close-on-click-overlay", "onClickOverlay"])]);
}

_sfc_main$8.render = _sfc_render$8;

var _createComponent57 = createComponent("textarea"),
    componentName$6 = _createComponent57.componentName,
    create$7 = _createComponent57.create;

var _sfc_main$7 = create$7({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    textAlign: {
      type: String,
      default: "left"
    },
    limitShow: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: [String, Number],
      default: ""
    },
    rows: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u5185\u5BB9"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup: function setup(props, _ref83) {
    var emit = _ref83.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref84;

      var prefixCls = componentName$6;
      return _ref84 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref84, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref84, "".concat(prefixCls, "--disabled"), props.disabled), _ref84;
    });
    var styles = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return {
        textAlign: props.textAlign,
        resize: props.autosize ? "vertical" : "none"
      };
    });

    var emitChange = function emitChange(value, event) {
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.substring(0, Number(props.maxLength));
      }

      emit("change", value, event);
      emit("update:modelValue", value, event);
    };

    var change = function change(event) {
      var input = event.target;
      emitChange(input.value, event);
    };

    var focus = function focus(event) {
      if (props.disabled) return;
      if (props.readonly) return;
      emit("focus", event);
    };

    var blur = function blur(event) {
      if (props.disabled) return;
      if (props.readonly) return;
      var input = event.target;
      var value = input.value;
      emitChange(value, event);
      emit("blur", event);
    };

    return {
      classes: classes,
      styles: styles,
      change: change,
      focus: focus,
      blur: blur
    };
  }
});

var _hoisted_1$7 = {
  key: 0,
  class: "nut-textarea__textarea"
};
var _hoisted_2$7 = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder"];
var _hoisted_3$5 = {
  key: 2,
  class: "nut-textarea__limit"
};

function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [_ctx.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$7, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("textarea", {
    key: 1,
    class: "nut-textarea__textarea",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])(_ctx.styles),
    rows: _ctx.rows,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = function () {
      return _ctx.change && _ctx.change.apply(_ctx, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function () {
      return _ctx.blur && _ctx.blur.apply(_ctx, arguments);
    }),
    onFocus: _cache[2] || (_cache[2] = function () {
      return _ctx.focus && _ctx.focus.apply(_ctx, arguments);
    }),
    maxlength: _ctx.maxLength,
    placeholder: _ctx.placeholder
  }, null, 44, _hoisted_2$7)), _ctx.limitShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_3$5, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.modelValue.length) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.maxLength), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 2);
}

_sfc_main$7.render = _sfc_render$7;

var UploadOptions = function UploadOptions() {
  Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, UploadOptions);

  __publicField(this, "url", "");

  __publicField(this, "formData");

  __publicField(this, "method", "post");

  __publicField(this, "xhrState", 200);

  __publicField(this, "timeout", 30 * 1e3);

  __publicField(this, "headers", {});

  __publicField(this, "withCredentials", false);

  __publicField(this, "onStart");

  __publicField(this, "onProgress");

  __publicField(this, "onSuccess");

  __publicField(this, "onFailure");
};

var Uploader = /*#__PURE__*/function () {
  function Uploader(options) {
    Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Uploader);

    __publicField(this, "options");

    this.options = options;
  }

  Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Uploader, [{
    key: "upload",
    value: function upload() {
      var _a;

      var options = this.options;
      var xhr = new XMLHttpRequest();
      xhr.timeout = options.timeout;

      if (xhr.upload) {
        xhr.upload.addEventListener("progress", function (e) {
          var _a2;

          (_a2 = options.onProgress) == null ? void 0 : _a2.call(options, e, options);
        }, false);

        xhr.onreadystatechange = function () {
          var _a2, _b;

          if (xhr.readyState === 4) {
            if (xhr.status === options.xhrState) {
              (_a2 = options.onSuccess) == null ? void 0 : _a2.call(options, xhr.responseText, options);
            } else {
              (_b = options.onFailure) == null ? void 0 : _b.call(options, xhr.responseText, options);
            }
          }
        };

        xhr.withCredentials = options.withCredentials;
        xhr.open(options.method, options.url, true);

        for (var _i3 = 0, _Object$entries = Object.entries(options.headers); _i3 < _Object$entries.length; _i3++) {
          var _Object$entries$_i = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_Object$entries[_i3], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          xhr.setRequestHeader(key, value);
        }

        (_a = options.onStart) == null ? void 0 : _a.call(options, options);
        xhr.send(options.formData);
      } else {
        console.warn("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 XMLHttpRequest");
      }
    }
  }, {
    key: "uploadTaro",
    value: function uploadTaro(filePath, Taro2) {
      var _a;

      var options = this.options;
      var uploadTask = Taro2.uploadFile({
        url: options.url,
        filePath: filePath,
        header: __spreadValues({
          "Content-Type": "multipart/form-data"
        }, options.headers),
        formData: options.formData,
        name: "files",
        success: function success(response) {
          var _a2, _b;

          if (response.errMsg) {
            (_a2 = options.onFailure) == null ? void 0 : _a2.call(options, response, options);
          } else if (options.xhrState === response.statusCode) {
            (_b = options.onSuccess) == null ? void 0 : _b.call(options, response, options);
          }
        },
        fail: function fail(e) {
          var _a2;

          (_a2 = options.onFailure) == null ? void 0 : _a2.call(options, e, options);
        }
      });
      (_a = options.onStart) == null ? void 0 : _a.call(options, options);
      uploadTask.progress(function (res) {
        var _a2;

        (_a2 = options.onProgress) == null ? void 0 : _a2.call(options, res, options);
      });
    }
  }]);

  return Uploader;
}();

var _createComponent58 = createComponent("uploader"),
    componentName$5 = _createComponent58.componentName,
    create$6 = _createComponent58.create;

var FileItem = function FileItem() {
  Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, FileItem);

  __publicField(this, "status", "ready");

  __publicField(this, "uid", new Date().getTime().toString());

  __publicField(this, "url");

  __publicField(this, "path");

  __publicField(this, "type");

  __publicField(this, "formData", {});
};

var _sfc_main$6 = create$6({
  props: {
    name: {
      type: String,
      default: "file"
    },
    url: {
      type: String,
      default: ""
    },
    sizeType: {
      type: Array,
      default: function _default() {
        return ["original", "compressed"];
      }
    },
    sourceType: {
      type: Array,
      default: function _default() {
        return ["album", "camera"];
      }
    },
    timeout: {
      type: [Number, String],
      default: 1e3 * 30
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isPreview: {
      type: Boolean,
      default: true
    },
    isDeletable: {
      type: Boolean,
      default: true
    },
    method: {
      type: String,
      default: "post"
    },
    capture: {
      type: Boolean,
      default: false
    },
    maximize: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    maximum: {
      type: [Number, String],
      default: 9
    },
    clearInput: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: "*"
    },
    headers: {
      type: Object,
      default: {}
    },
    data: {
      type: Object,
      default: {}
    },
    uploadIcon: {
      type: String,
      default: "photograph"
    },
    xhrState: {
      type: [Number, String],
      default: 200
    },
    disabled: {
      type: Boolean,
      default: false
    },
    beforeDelete: {
      type: Function,
      default: function _default(file, files) {
        return true;
      }
    },
    onChange: {
      type: Function
    }
  },
  emits: ["start", "progress", "oversize", "success", "failure", "change", "delete", "update:fileList"],
  setup: function setup(props, _ref85) {
    var emit = _ref85.emit;
    var fileList = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])(props.fileList);
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$5;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });

    var chooseImage = function chooseImage() {
      if (props.disabled) {
        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.chooseImage({
        count: props.maximize * 1 - props.fileList.length,
        sizeType: props.sizeType,
        sourceType: props.sourceType,
        success: onChange
      });
    };

    var executeUpload = function executeUpload(fileItem) {
      var uploadOption = new UploadOptions();
      uploadOption.url = props.url;

      for (var _i4 = 0, _Object$entries2 = Object.entries(props.data); _i4 < _Object$entries2.length; _i4++) {
        var _Object$entries2$_i = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_Object$entries2[_i4], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        fileItem.formData[key] = value;
      }

      uploadOption.formData = fileItem.formData;
      uploadOption.method = props.method;
      uploadOption.headers = props.headers;

      uploadOption.onStart = function (option) {
        fileItem.status = "ready";
        emit("start", option);
      };

      uploadOption.onProgress = function (e, option) {
        fileItem.status = "uploading";
        emit("progress", {
          e: e,
          option: option
        });
      };

      uploadOption.onSuccess = function (data, option) {
        fileItem.status = "success";
        emit("success", {
          data: data,
          option: option
        });
        emit("update:fileList", fileList);
      };

      uploadOption.onFailure = function (data, option) {
        fileItem.status = "error";
        emit("failure", {
          data: data,
          option: option
        });
      };

      new Uploader(uploadOption).uploadTaro(fileItem.path, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);
    };

    var readFile = function readFile(files) {
      files.forEach(function (file) {
        var fileItem = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])(new FileItem());
        fileItem.path = file.path;
        fileItem.status = "uploading";
        fileItem.type = file.type;

        if (props.isPreview) {
          fileItem.url = file.path;
        }

        fileList.push(fileItem);
        executeUpload(fileItem);
      });
    };

    var filterFiles = function filterFiles(files) {
      var maximum = props.maximum * 1;
      var maximize = props.maximize * 1;
      var oversizes = new Array();
      files = files.filter(function (file) {
        if (file.size > maximize) {
          oversizes.push(file);
          return false;
        } else {
          return true;
        }
      });

      if (oversizes.length) {
        emit("oversize", oversizes);
      }

      if (files.length > maximum) {
        files.splice(maximum - 1, files.length - maximum);
      }

      return files;
    };

    var onDelete = function onDelete(file, index) {
      if (props.beforeDelete(file, fileList)) {
        fileList.splice(index, 1);
        emit("delete", {
          file: file,
          fileList: fileList
        });
      } else {
        console.log("\u7528\u6237\u963B\u6B62\u4E86\u5220\u9664\uFF01");
      }
    };

    var onChange = function onChange(res) {
      var tempFilePaths = res.tempFilePaths,
          tempFiles = res.tempFiles;

      var _files = filterFiles(tempFiles);

      readFile(_files);
      emit("change", {
        fileList: fileList
      });
    };

    return {
      onDelete: onDelete,
      fileList: fileList,
      classes: classes,
      chooseImage: chooseImage
    };
  }
});

var _hoisted_1$6 = {
  key: 0,
  class: "nut-uploader__slot"
};
var _hoisted_2$6 = {
  class: "nut-uploader__preview-img"
};
var _hoisted_3$4 = ["src"];
var _hoisted_4$3 = {
  key: 2,
  class: "tips"
};
var _hoisted_5$3 = {
  key: 0,
  class: "nut-uploader__upload"
};

function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_button = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-button");

  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [_ctx.$slots.default ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$6, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default"), _ctx.maximum - _ctx.fileList.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_button, {
    key: 0,
    class: "nut-uploader__input",
    onClick: _ctx.chooseImage
  }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 1
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.fileList, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: "nut-uploader__preview",
      key: item.uid
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$6, [_ctx.isDeletable ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
      key: 0,
      color: "rgba(0,0,0,0.6)",
      onClick: function onClick($event) {
        return _ctx.onDelete(item, index);
      },
      class: "close",
      name: "circle-close"
    }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), item.url ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("image", {
      key: 1,
      class: "nut-uploader__preview-img__c",
      src: item.url
    }, null, 8, _hoisted_3$4)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), item.status != "success" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_4$3, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.status), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])]);
  }), 128)), _ctx.maximum - _ctx.fileList.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_5$3, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
    color: "#808080",
    name: _ctx.uploadIcon
  }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_button, {
    class: "nut-uploader__input",
    onClick: _ctx.chooseImage
  }, null, 8, ["onClick"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 64))], 2);
}

_sfc_main$6.render = _sfc_render$6;

function useExtend(apis) {
  var instance = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "o"])();

  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}

var _createComponent59 = createComponent("countup"),
    componentName$4 = _createComponent59.componentName,
    create$5 = _createComponent59.create;

var _sfc_main$5 = create$5({
  props: {
    initNum: {
      type: Number,
      default: 0
    },
    endNum: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 1
    },
    toFixed: {
      type: Number,
      default: 0
    },
    during: {
      type: Number,
      default: 1e3
    },
    startFlag: {
      type: Boolean,
      default: true
    },
    numWidth: {
      type: Number,
      default: 20
    },
    numHeight: {
      type: Number,
      default: 20
    },
    scrolling: {
      type: Boolean,
      default: false
    },
    customBgImg: {
      type: String,
      default: ""
    },
    customSpacNum: {
      type: Number,
      default: 0
    },
    customChangeNum: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: ""
    },
    machineNum: {
      type: Number,
      default: 3
    },
    machinePrizeNum: {
      type: Number,
      default: 0
    },
    machinePrizeLevel: {
      type: Number,
      default: 0
    },
    machineTrunMore: {
      type: Number,
      default: 0
    }
  },
  components: {},
  emits: ["click", "scroll-end"],
  setup: function setup(props, _ref87) {
    var emit = _ref87.emit;
    var data = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      valFlag: false,
      current: 0,
      sortFlag: "add",
      initDigit1: 0,
      initDigit2: 0,
      to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
      timer: null,
      totalCount: 0,
      pointNum: 0,
      numberVal: 0,
      num_total_len: 0,
      relNum: 0,
      customNumber: 1,
      prizeLevelTrun: 0,
      prizeY: [],
      prizeYPrev: [],
      finshMachine: 0,
      notPrize: [],
      typeMachine: ""
    });

    var _reactive = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])(props),
        startFlag = _reactive.startFlag,
        scrolling = _reactive.scrolling,
        customBgImg = _reactive.customBgImg,
        type = _reactive.type;

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.customChangeNum;
    }, function (count2, prevCount) {
      clearIntervalTime();
      countGo(0);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.machinePrizeLevel;
    }, function (count2, prevCount) {
      data.prizeLevelTrun = count2;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.initNum;
    }, function (count2, prevCount) {
      data.current = count2;
      data.valFlag = false;
      valChange();
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.endNum;
    }, function (count2, prevCount) {
      data.current = props.initNum;
      data.valFlag = false;
      valChange();
    });

    var valChange = function valChange() {
      if (data.valFlag) {
        return false;
      }

      if (startFlag) {
        if (scrolling || customBgImg) {
          if (type != "machine") {
            countGo();
          }
        } else {
          countChange();
          setTimeout(function () {
            data.valFlag = true;
          }, 300);
        }
      }
    };

    var clearIntervalTime = function clearIntervalTime() {
      clearInterval(Number(data.timer));
      data.timer = null;
    };

    var calculation = function calculation(num1, num2, type2) {
      var num1Digits = (num1.toString().split(".")[1] || "").length;
      var num2Digits = (num2.toString().split(".")[1] || "").length;
      var baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));

      if (type2 == "-") {
        var n = Number((num1 * baseNum - num2 * baseNum).toFixed(0));
        return n / baseNum;
      } else {
        var m = Number((num1 * baseNum + num2 * baseNum).toFixed(0));
        return m / baseNum;
      }
    };

    var topNumber = function topNumber(index) {
      var num_total_len = data.num_total_len,
          pointNum = data.pointNum,
          initDigit1 = data.initDigit1,
          initDigit2 = data.initDigit2,
          sortFlag = data.sortFlag;
      var idx1 = sortFlag == "add" ? String(initDigit2)[index - (num_total_len - pointNum)] : 10 - Number(String(initDigit2)[index - (num_total_len - pointNum)]);
      var idx2 = sortFlag == "add" ? String(initDigit1)[index] : 10 - Number(String(initDigit1)[index]);
      var num = index > num_total_len - pointNum - 1 ? -idx1 * 100 + "%" : index <= String(initDigit1).length - 1 ? -idx2 * 100 + "%" : 0;

      if (num == "-1000%") {
        num = 0;
      }

      return num;
    };

    var turnNumber = function turnNumber(index) {
      var num_total_len = data.num_total_len,
          pointNum = data.pointNum,
          initDigit1 = data.initDigit1,
          initDigit2 = data.initDigit2,
          sortFlag = data.sortFlag;
      var idx1 = String(initDigit2)[index - (num_total_len - pointNum)];
      var num = index > num_total_len - pointNum - 1 ? idx1 ? idx1 : 0 : index <= String(initDigit1).length - 1 ? String(initDigit1)[index] : 0;
      return num;
    };

    var countChange = function countChange() {
      var endNum = props.endNum,
          initNum = props.initNum,
          speed = props.speed,
          toFixed = props.toFixed;
      var countTimer = setInterval(function () {
        if (initNum > endNum) {
          if (data.current <= endNum || data.current <= speed) {
            data.current = Number(endNum.toFixed(toFixed));
            clearInterval(countTimer);
            emit("scroll-end");
            data.valFlag = false;
          } else {
            data.current = Number((parseFloat(String(data.current)) - parseFloat(String(speed))).toFixed(toFixed));
          }
        } else {
          if (data.current >= endNum) {
            data.current = Number(endNum.toFixed(toFixed));
            clearInterval(countTimer);
            emit("scroll-end");
            data.valFlag = false;
          } else {
            data.current = Number((parseFloat(String(data.current)) + parseFloat(String(speed))).toFixed(toFixed));
          }
        }
      }, props.during);
    };

    var countGo = function countGo(flag) {
      var initNum = props.initNum,
          endNum = props.endNum,
          toFixed = props.toFixed,
          customBgImg2 = props.customBgImg;

      if (customBgImg2) {
        initNum = props.customChangeNum;
      }

      var startNumber1, startNumber2, endNumber1, endNumber2;

      if (initNum != 0) {
        if (toFixed != 0) {
          initNum = Number(initNum.toFixed(toFixed));
        }

        if (String(initNum).indexOf(".") > -1) {
          startNumber1 = String(initNum).split(".")[0].length;
          startNumber2 = String(initNum).split(".")[1].length;
        } else {
          startNumber1 = String(initNum).length;
          startNumber2 = 0;
        }
      } else {
        startNumber1 = 1;
        startNumber2 = 0;
      }

      if (endNum != 0) {
        if (toFixed != 0) {
          endNum = Number(endNum.toFixed(toFixed));
        }

        if (String(endNum).indexOf(".") > -1) {
          endNumber1 = String(endNum).split(".")[0].length;
          endNumber2 = String(endNum).split(".")[1].length;
        } else {
          endNumber1 = String(endNum).length;
          endNumber2 = 0;
        }
      } else {
        endNumber1 = 1;
        endNumber2 = 0;
      }

      var len1 = startNumber1 >= endNumber1 ? startNumber1 : endNumber1;
      var len2 = startNumber2 >= endNumber2 ? startNumber2 : endNumber2;
      data.num_total_len = len1 + len2;
      data.pointNum = len2;

      if (initNum > endNum) {
        data.sortFlag = "reduce";
        data.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        data.totalCount = calculation(initNum, endNum, "-");
        data.numberVal = Number(String(initNum));
      } else {
        data.sortFlag = "add";
        data.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        data.totalCount = calculation(endNum, initNum, "-");
        data.numberVal = Number(String(endNum));
      }

      var unit = 1;

      for (var i = 0; i < data.pointNum; i++) {
        unit *= 10;
      }

      var rel_big = data.numberVal * unit;
      data.relNum = rel_big;

      if (toFixed != 0) {
        data.pointNum = String(data.numberVal).split(".")[1] ? String(data.numberVal).split(".")[1].length : 0;
        data.num_total_len = String(rel_big).length;
      }

      if (String(initNum).indexOf(".") > -1) {
        var n = String(initNum).split(".");
        data.initDigit1 = Number(n[0]);
        data.initDigit2 = Number(n[1]);
      } else {
        data.initDigit1 = initNum;
        data.initDigit2 = 0;
      }

      if (scrolling && !customBgImg2) {
        Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* nextTick */ "u"])(function () {
          var refsDom = document.getElementsByClassName("numberItem");
          var element = refsDom[data.num_total_len - 1];
          runTurn(element);
        });
      } else {
        if (flag !== 0) {
          imgNumberScroll();
        }
      }
    };

    var runTurn = function runTurn(el) {
      clearIntervalTime();
      var m = 1;

      if (data.pointNum != 0) {
        m = 1 / Math.pow(10, data.pointNum);
      }

      data.timer = setInterval(function () {
        runStep(el);
        data.totalCount = calculation(data.totalCount, m, "-");

        if (data.totalCount <= 0) {
          clearIntervalTime();
          emit("scroll-end");
          data.valFlag = false;
        }
      }, props.during);
    };

    var runStep = function runStep(el) {
      var currentTurn = el.style.all;
      var turningNum;

      if (data.sortFlag == "add") {
        turningNum = parseInt(String(currentTurn)) + 1;
      } else {
        turningNum = parseInt(String(currentTurn)) - 1 >= 0 ? parseInt(String(currentTurn)) - 1 : 9;
      }

      el.style.all = String(turningNum);

      if (el.style.transition == "none" || turningNum == 1 || !el.style.transition) {
        el.style.transition = "all linear ".concat(props.during, "ms");
      }

      if (turningNum == 10 || data.sortFlag == "reduce" && turningNum == 0) {
        var timeOut = null;
        el.style.top = "-".concat(data.sortFlag == "add" ? turningNum * 100 : (10 - turningNum) * 100, "%");
        el.style.all = "0";
        timeOut = setTimeout(function () {
          timeOut && clearTimeout(timeOut);
          el.style.transition = "none";
          el.style.top = "0";

          if (turningNum == 10) {
            if (el.previousSibling) {
              runStep(el.previousSibling);
            }
          }
        }, 0.975 * props.during);
      } else {
        el.style.top = "-".concat(data.sortFlag == "add" ? turningNum * 100 : (10 - turningNum) * 100, "%");
      }

      if (el.style.top == "-100%" && data.sortFlag == "reduce") {
        runStep(el.previousSibling);
      }
    };

    var imgNumberScroll = function imgNumberScroll() {
      if (data.pointNum != 0) {
        Math.pow(10, data.pointNum);
      }

      Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* nextTick */ "u"])(function () {
        var f = document.getElementsByClassName("run-number-img")[0];
        f.addEventListener("webkitTransitionEnd", function () {
          emit("scroll-end");
          data.valFlag = false;
        });
      });
    };

    var generateRandom = function generateRandom() {
      data.notPrize = [];

      while (data.notPrize.length < 3) {
        var rand = Math.floor(Math.random() * props.machinePrizeNum + 1);

        if (data.notPrize.indexOf(rand) == -1) {
          data.notPrize.push(rand);
        }
      }
    };

    var machineLuck = function machineLuck() {
      var machineTrunMoreNum = props.machineTrunMore < 0 ? 0 : props.machineTrunMore;
      var distance = props.numHeight * props.machinePrizeNum;

      if (data.prizeLevelTrun < 0) {
        generateRandom();
      }

      var _loop2 = function _loop2(i) {
        setTimeout(function () {
          var turn = distance * (i + 1 + parseFloat(String(machineTrunMoreNum)));

          if (data.prizeYPrev.length != 0) {
            data.prizeY[i] = data.prizeYPrev[i];
          }

          var local = data.prizeYPrev[i] ? data.prizeYPrev[i] : 0;
          var newLocation = turn + local + (props.machinePrizeNum - data.prizeLevelTrun + 1) * props.numHeight + (distance - local);

          if (data.prizeLevelTrun < 0) {
            newLocation += props.numHeight * data.notPrize[i];
          }

          scrollTime(i, newLocation, local);
        }, 500 * i);
      };

      for (var i = 0; i < props.machineNum; i++) {
        _loop2(i);
      }
    };

    useExtend({
      machineLuck: machineLuck
    });

    var scrollTime = function scrollTime(index, total, num) {
      var t = setInterval(function () {
        if (num <= total) {
          num += 10;
          data.prizeY[index] = parseFloat(String(num));
        } else {
          clearInterval(t);
          t = null;
          data.finshMachine += 1;
          data.prizeY[index] = total;

          if (data.finshMachine == props.machineNum) {
            var distance = props.numHeight * props.machinePrizeNum;
            data.prizeYPrev = [];
            var prevAry = JSON.parse(JSON.stringify(data.prizeY));
            prevAry.forEach(function (item) {
              var n = item;

              while (n > distance) {
                n -= distance;
              }

              data.prizeYPrev.push(n);
            });
            setTimeout(function () {
              data.finshMachine = 0;

              if (data.prizeLevelTrun < 0) {
                emit("scroll-end", false);
                data.valFlag = false;
              } else {
                emit("scroll-end", true);
                data.valFlag = false;
              }
            }, 130);
          }
        }
      }, 30);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      data.current = props.initNum;
      Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* nextTick */ "u"])(function () {
        valChange();
      });
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onUnmounted */ "A"])(function () {
      clearIntervalTime();
      data.timer = null;
    });
    return __spreadProps(__spreadValues(__spreadValues({}, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(data)), Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])(props))), {
      topNumber: topNumber,
      turnNumber: turnNumber
    });
  }
});

var _hoisted_1$5 = {
  class: "nut-countup"
};
var _hoisted_2$5 = ["turn-number"];

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$5, [_ctx.customBgImg != "" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 0
  }, [_ctx.type == "machine" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "run-number-machine-img",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: _ctx.numHeight + "px"
    })
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.machineNum, function (val, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: "run-number-machine-img-li",
      ref: "run-number-machine-img-li",
      key: "mImg" + index,
      style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
        width: _ctx.numWidth + "px",
        height: _ctx.numHeight + "px",
        background: "url(" + _ctx.customBgImg + ") ",
        backgroundPosition: "0 " + _ctx.prizeY[index] + "px"
      })
    }, null, 4);
  }), 128))], 4)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 1,
    class: "run-number-img",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: _ctx.numHeight + "px"
    })
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.num_total_len, function (val, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      class: "run-number-img-li",
      key: "cImg" + index,
      style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
        width: _ctx.numWidth + "px",
        height: _ctx.numHeight + "px",
        left: _ctx.numWidth * (index > _ctx.num_total_len - _ctx.pointNum - 1 ? index == _ctx.num_total_len - _ctx.pointNum ? index * 1.5 : index * 1.3 : index) + "px",
        backgroundImage: "url(" + _ctx.customBgImg + ")",
        backgroundPosition: "0 " + -(String(_ctx.relNum)[index] * _ctx.numHeight + _ctx.customSpacNum * String(_ctx.relNum)[index]) + "px",
        transition: "all linear " + _ctx.during / 10 + "ms"
      })
    }, null, 4);
  }), 128)), _ctx.pointNum > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "pointstyl",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      width: _ctx.numWidth / 2 + "px",
      bottom: 0,
      left: _ctx.numWidth * (_ctx.num_total_len - _ctx.pointNum) * 1.1 + "px",
      fontSize: "30px"
    })
  }, ".", 4)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 4))], 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 1
  }, [_ctx.scrolling ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "run-number",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      height: _ctx.numHeight + "px",
      lineHeight: _ctx.numHeight + "px"
    })
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.num_total_len, function (val, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
      ref: "numberItem",
      class: "numberItem",
      key: val,
      style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
        all: _ctx.turnNumber(index),
        top: _ctx.topNumber(index),
        left: _ctx.numWidth * (index > _ctx.num_total_len - _ctx.pointNum - 1 ? index * 1.1 : index) + "px"
      }),
      "turn-number": _ctx.turnNumber(index)
    }, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.to0_10, function (item, idx) {
      return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
        class: "itemSpan",
        key: "dote" + idx,
        style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
          width: _ctx.numWidth + "px",
          height: _ctx.numHeight + "px",
          lineHeight: _ctx.numHeight + "px"
        })
      }, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item), 5);
    }), 128))], 12, _hoisted_2$5);
  }), 128)), _ctx.pointNum > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    key: 0,
    class: "pointstyl",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
      width: _ctx.numWidth / 3 + "px",
      height: _ctx.numHeight + "px",
      lineHeight: _ctx.numHeight + "px",
      top: 0,
      left: _ctx.numWidth * (_ctx.num_total_len - _ctx.pointNum) + "px"
    })
  }, ".", 4)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 4)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.current), 1)], 64))], 64))]);
}

_sfc_main$5.render = _sfc_render$5;

var _createComponent60 = createComponent("numberkeyboard"),
    create$4 = _createComponent60.create;

var _sfc_main$4 = create$4({
  props: {
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    customKey: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [Number, String],
      default: 6
    },
    randomKeys: {
      type: Boolean,
      default: false
    }
  },
  emits: ["input", "delete", "close", "update:value"],
  setup: function setup(props, _ref88) {
    var emit = _ref88.emit;
    var clickKeyIndex = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(void 0);
    var show = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.visible);
    var root = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])();

    function defaultKey() {
      return [].concat(Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(getBasicKeys()), [{
        id: "lock",
        type: "lock"
      }, {
        id: 0,
        type: "number"
      }, {
        id: "delete",
        type: "delete"
      }]);
    }

    function getBasicKeys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          id: i,
          type: "number"
        });
      }

      if (props.randomKeys) {
        return keys.sort(function () {
          return Math.random() > 0.5 ? 1 : -1;
        });
      }

      return keys;
    }

    function genCustomKeys() {
      var keys = getBasicKeys();
      var customKey = props.customKey;
      var customKeys = Array.isArray(customKey) ? customKey : [customKey];

      if (customKeys.length > 2) {
        customKeys = [customKeys[0], customKeys[1]];
      }

      if (customKeys.length === 1) {
        if (props.title) {
          keys.push({
            id: customKeys[0],
            type: "custom"
          }, {
            id: 0,
            type: "number"
          }, {
            id: "delete",
            type: "delete"
          });
        } else {
          keys.push({
            id: 0,
            type: "number"
          }, {
            id: customKeys[0],
            type: "custom"
          });
        }
      } else if (customKeys.length === 2) {
        keys.push({
          id: customKeys[0],
          type: "custom"
        }, {
          id: 0,
          type: "number"
        }, {
          id: customKeys[1],
          type: "custom"
        });

        if (props.title) {
          keys.push({
            id: "delete",
            type: "delete"
          });
        }
      } else {
        keys.push({
          id: 0,
          type: "number"
        });
      }

      return keys;
    }

    var keysList = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      if (props.type == "rightColumn" || props.title != "") {
        return genCustomKeys();
      }

      return defaultKey();
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      show.value = value;
    });

    function onTouchstart(item, event) {
      event.stopPropagation();
      clickKeyIndex.value = item.id;

      if (item.type == "number" || item.type == "custom") {
        emit("input", item.id);

        if (props.value.length < props.maxlength) {
          emit("update:value", props.value + item.id);
        }
      }

      if (item.type == "lock") {
        closeBoard();
      }

      if (item.type == "delete") {
        emit("delete");
        emit("update:value", props.value.slice(0, props.value.length - 1));
      }
    }

    function onTouchMove(id, event) {
      event.stopPropagation();
    }

    function onTouchEnd() {
      clickKeyIndex.value = void 0;
    }

    function closeBoard() {
      emit("close");
    }

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {});
    return {
      clickKeyIndex: clickKeyIndex,
      defaultKey: defaultKey,
      closeBoard: closeBoard,
      onTouchEnd: onTouchEnd,
      onTouchMove: onTouchMove,
      onTouchstart: onTouchstart,
      keysList: keysList,
      genCustomKeys: genCustomKeys,
      getBasicKeys: getBasicKeys,
      root: root,
      show: show
    };
  }
});

var _hoisted_1$4 = {
  class: "nut-numberkeyboard",
  ref: "root"
};
var _hoisted_2$4 = {
  key: 0,
  class: "number-board-header"
};
var _hoisted_3$3 = {
  class: "tit"
};
var _hoisted_4$2 = {
  class: "number-board-body"
};
var _hoisted_5$2 = {
  class: "number-board"
};
var _hoisted_6$2 = ["onTouchstart", "onTouchmove"];
var _hoisted_7$2 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
};
var _hoisted_8$2 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
};
var _hoisted_9$1 = {
  key: 0,
  class: "number-board-sidebar"
};
var _hoisted_10$1 = {
  class: "key-board-wrapper"
};

var _hoisted_11$1 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("img", {
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, null, -1);

var _hoisted_12$1 = [_hoisted_11$1];

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-popup");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_popup, {
    visible: _ctx.show,
    "onUpdate:visible": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.show = $event;
    }),
    position: "bottom",
    onClickOverlay: _cache[7] || (_cache[7] = function ($event) {
      return _ctx.closeBoard();
    }),
    "overlay-class": "nut-numberkeyboard-overlay"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_1$4, [_ctx.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", _hoisted_2$4, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("h3", _hoisted_3$3, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("span", {
        class: "keyboard-close",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.closeBoard();
        })
      }, "\u5B8C\u6210")])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_4$2, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_5$2, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.keysList, function (item) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
          class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["key-board-wrapper", {
            "key-board-wrapper-large": item.id == 0 && _ctx.type == "rightColumn" && Array.isArray(_ctx.customKey) && _ctx.customKey.length == 1
          }]),
          key: "key" + item.id
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", {
          class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["key", {
            active: item.id == _ctx.clickKeyIndex
          }, {
            lock: item.type == "lock"
          }, {
            delete: item.type == "delete"
          }]),
          onTouchstart: function onTouchstart(event) {
            return _ctx.onTouchstart(item, event);
          },
          onTouchmove: function onTouchmove(event) {
            return _ctx.onTouchMove(item, event);
          },
          onTouchend: _cache[1] || (_cache[1] = function () {
            return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
          })
        }, [item.type == "number" || item.type == "custom" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
          key: 0
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.id), 1)], 64)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), item.type == "lock" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("img", _hoisted_7$2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), item.type == "delete" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("img", _hoisted_8$2)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)], 42, _hoisted_6$2)], 2);
      }), 128))]), _ctx.type == "rightColumn" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", _hoisted_9$1, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_10$1, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["key", {
          active: _ctx.clickKeyIndex == "delete"
        }]),
        onTouchstart: _cache[2] || (_cache[2] = function (event) {
          return _ctx.onTouchstart({
            id: "delete",
            type: "delete"
          }, event);
        }),
        onTouchmove: _cache[3] || (_cache[3] = function (event) {
          return _ctx.onTouchMove({
            id: "delete",
            type: "delete"
          }, event);
        }),
        onTouchend: _cache[4] || (_cache[4] = function () {
          return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
        })
      }, _hoisted_12$1, 34)]), _ctx.title == "" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
        key: 0,
        class: "key-board-wrapper",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return _ctx.closeBoard();
        })
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["key", "finish", {
          activeFinsh: _ctx.clickKeyIndex == "finish"
        }])
      }, " \u5B8C\u6210 ", 2)])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)])], 512)];
    }),
    _: 1
  }, 8, ["visible"]);
}

_sfc_main$4.render = _sfc_render$4;

var _createComponent61 = createComponent("countdown"),
    componentName$3 = _createComponent61.componentName,
    create$3 = _createComponent61.create;

var _sfc_main$3 = create$3({
  props: {
    modelValue: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    paused: {
      default: false,
      type: Boolean
    },
    showDays: {
      default: false,
      type: Boolean
    },
    showPlainText: {
      default: false,
      type: Boolean
    },
    startTime: {
      type: [Number, String],
      validator: function validator(v) {
        var dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== "invalid date";
      }
    },
    endTime: {
      type: [Number, String],
      validator: function validator(v) {
        var dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== "invalid date";
      }
    }
  },
  components: {},
  emits: ["input", "on-end", "on-restart", "on-paused"],
  setup: function setup(props, _ref89) {
    var emit = _ref89.emit,
        slots = _ref89.slots;
    console.log("componentName", componentName$3);
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      restTime: 0,
      p: 0,
      _curr: 0,
      timer: null
    });
    var resttime = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var rest = restTime(state.restTime);
      var d = rest.d,
          h2 = rest.h,
          m = rest.m,
          s = rest.s;

      if (!props.showDays && d > 0) {
        rest.h = fill2(Number(rest.h) + d * 24);
        rest.d = 0;
      }

      return rest;
    });
    var plainText = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _resttime$value = resttime.value,
          d = _resttime$value.d,
          h2 = _resttime$value.h,
          m = _resttime$value.m,
          s = _resttime$value.s;
      return "".concat(d > 0 && props.showDays ? d + "\u5929" + h2 : h2, "\u5C0F\u65F6").concat(m, "\u5206").concat(s, "\u79D2");
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.value;
    }, function (value) {});
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return state.restTime;
    }, function (value) {
      var tranTime = restTime(value);
      emit("update:modelValue", tranTime);
      emit("input", tranTime);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.paused;
    }, function (v, ov) {
      if (!ov) {
        state._curr = getTimeStamp();
        emit("on-paused", state.restTime);
      } else {
        state.p += getTimeStamp() - state._curr;
        emit("on-restart", state.restTime);
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.endTime;
    }, function (value) {
      initTimer();
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.startTime;
    }, function (value) {
      initTimer();
    });
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$3;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });

    var getTimeStamp = function getTimeStamp(timeStr) {
      if (!timeStr) return Date.now();
      var t = timeStr;
      t = t > 0 ? +t : t.toString().replace(/\-/g, "/");
      return new Date(t).getTime();
    };

    var initTimer = function initTimer() {
      var delay = 1e3;
      var curr = Date.now();
      var start = getTimeStamp(props.startTime || curr);
      var end = getTimeStamp(props.endTime || curr);
      var diffTime = curr - start;
      state.restTime = end - (start + diffTime);
      state.timer = setInterval(function () {
        if (!props.paused) {
          var restTime2 = end - (Date.now() - state.p + diffTime);
          state.restTime = restTime2;

          if (restTime2 < delay) {
            state.restTime = 0;
            emit("on-end");
            clearInterval(state.timer);
          }
        }
      }, delay);
    };

    var fill2 = function fill2(v) {
      v += "";

      while (v.length < 2) {
        v = "0" + v;
      }

      return v;
    };

    var restTime = function restTime(t) {
      var ts = t;
      var rest = {
        d: "-",
        h: "--",
        m: "--",
        s: "--"
      };

      if (ts === 0) {
        rest = {
          d: "0",
          h: "00",
          m: "00",
          s: "00"
        };
      }

      if (ts) {
        var ds = 24 * 60 * 60 * 1e3;
        var hs = 60 * 60 * 1e3;
        var ms = 60 * 1e3;
        var d = ts >= ds ? parseInt(ts / ds) : 0;
        var h2 = ts - d * ds >= hs ? parseInt((ts - d * ds) / hs) : 0;
        var m = ts - d * ds - h2 * hs >= ms ? parseInt((ts - d * ds - h2 * hs) / ms) : 0;
        var s = Math.round((ts - d * ds - h2 * hs - m * ms) / 1e3);
        if (d >= 0) rest.d = d + "";
        if (h2 >= 0) rest.h = fill2(h2);
        if (m >= 0) rest.m = fill2(m);
        if (s >= 0) rest.s = fill2(s);
      }

      return rest;
    };

    initTimer();
    return __spreadProps(__spreadValues({}, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(props)), {
      slots: slots,
      classes: classes,
      getTimeStamp: getTimeStamp,
      initTimer: initTimer,
      resttime: resttime,
      plainText: plainText
    });
  }
});

var _hoisted_1$3 = {
  key: 1,
  class: "nut-cd-block"
};
var _hoisted_2$3 = {
  class: "nut-cd-block"
};

var _hoisted_3$2 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
  class: "nut-cd-dot"
}, "\u5929", -1);

var _hoisted_4$1 = {
  class: "nut-cd-block"
};

var _hoisted_5$1 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
  class: "nut-cd-dot"
}, ":", -1);

var _hoisted_6$1 = {
  class: "nut-cd-block"
};

var _hoisted_7$1 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
  class: "nut-cd-dot"
}, ":", -1);

var _hoisted_8$1 = {
  class: "nut-cd-block"
};

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
    })
  }, [_ctx.slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderSlot */ "F"])(_ctx.$slots, "default", {
    key: 0
  }) : _ctx.showPlainText ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_1$3, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.plainText), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 2
  }, [_ctx.resttime.d >= 0 && _ctx.showDays ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_2$3, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.resttime.d), 1), _hoisted_3$2], 64)) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_4$1, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.resttime.h), 1), _hoisted_5$1, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_6$1, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.resttime.m), 1), _hoisted_7$1, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_8$1, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.resttime.s), 1)], 64))], 2);
}

_sfc_main$3.render = _sfc_render$3;

var transformData = function transformData(regionData) {
  if (!Array.isArray(regionData)) throw new TypeError("params muse be array.");
  if (!regionData.length) return [];
  var newData = [];
  regionData = regionData.map(function (item) {
    if (!item.name) return new Error("the data must includes `name` props");
    var code = pinyin__WEBPACK_IMPORTED_MODULE_15___default()(item.name, {
      style: pinyin__WEBPACK_IMPORTED_MODULE_15___default.a.STYLE_NORMAL
    });
    return __spreadProps(__spreadValues({}, item), {
      firstCode: code[0][0].charAt(0).toUpperCase()
    });
  });
  regionData = regionData.sort(function (a, b) {
    return a.firstCode.localeCompare(b.firstCode);
  });
  regionData.forEach(function (item) {
    var index = newData.findIndex(function (value) {
      return value.title === item.firstCode;
    });

    if (index <= -1) {
      newData.push({
        title: item.firstCode,
        list: [].concat(item)
      });
    } else {
      newData[index] = {
        title: item.firstCode,
        list: newData[index].list.concat(item)
      };
    }
  });
  return newData;
};

var _createComponent62 = createComponent("address"),
    create$2 = _createComponent62.create,
    componentName$2 = _createComponent62.componentName;

var _sfc_main$2 = create$2({
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "custom"
    },
    customAddressTitle: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
    },
    province: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    city: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    country: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    town: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isShowCustomAddress: {
      type: Boolean,
      default: true
    },
    existAddress: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    existAddressTitle: {
      type: String,
      default: "\u914D\u9001\u81F3"
    },
    customAndExistTitle: {
      type: String,
      default: "\u9009\u62E9\u5176\u4ED6\u5730\u5740"
    },
    defaultIcon: {
      type: String,
      default: "location2"
    },
    selectedIcon: {
      type: String,
      default: "Check"
    },
    closeBtnIcon: {
      type: String,
      default: "circle-close"
    },
    backBtnIcon: {
      type: String,
      default: "left"
    },
    height: {
      type: [String, Number],
      default: "200px"
    }
  },
  emits: ["update:visible", "type", "change", "selected", "close", "close-mask", "switch-module"],
  setup: function setup(props, _ref91) {
    var emit = _ref91.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$2;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    var regionLine = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null);
    var tabItemRef = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      province: Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null),
      city: Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null),
      country: Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null),
      town: Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(null)
    });
    var showPopup = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.visible);
    var privateType = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.type);
    var tabIndex = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
    var tabName = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(["province", "city", "country", "town"]);
    var isCustom2 = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      return props.type === "custom2";
    });
    var regionList = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      province: isCustom2.value ? transformData(props.province) : props.province,
      city: isCustom2.value ? transformData(props.city) : props.city,
      country: isCustom2.value ? transformData(props.country) : props.country,
      town: isCustom2.value ? transformData(props.town) : props.town
    });
    var selectedRegion = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      province: {},
      city: {},
      country: {},
      town: {}
    });
    var selectedExistAddress = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({});
    var closeWay = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])("self");
    var lineDistance = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(20);

    var getTabName = function getTabName(item, index) {
      if (item.name) return item.name;

      if (tabIndex.value < index) {
        return item.name;
      } else {
        return "\u8BF7\u9009\u62E9";
      }
    };

    var handClose = function handClose() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "self";
      if (!props.closeBtnIcon) return;
      closeWay.value = type == "cross" ? "cross" : "self";
      showPopup.value = false;
    };

    var clickOverlay = function clickOverlay() {
      closeWay.value = "mask";
    };

    var lineAnimation = function lineAnimation() {
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().selectAll(".".concat(tabName.value[tabIndex.value])).boundingClientRect(function (rects) {
          rects.forEach(function (rect) {
            if (rect.width > 0) lineDistance.value = rect.left;
          });
        }).exec();
      }, 100);
    };

    var nextAreaList = function nextAreaList(item) {
      var calBack = {
        next: "",
        value: "",
        custom: tabName.value[tabIndex.value]
      };
      selectedRegion[tabName.value[tabIndex.value]] = item;

      for (var i = tabIndex.value; i < tabIndex.value - 1; i++) {
        selectedRegion[tabName.value[i + 1]] = {};
      }

      if (tabIndex.value < 3) {
        tabIndex.value = tabIndex.value + 1;
        lineAnimation();
        calBack.next = tabName.value[tabIndex.value];
        calBack.value = item;
        emit("change", calBack);
      } else {
        handClose();
      }
    };

    var changeRegionTab = function changeRegionTab(item, key, index) {
      if (getTabName(item, index)) {
        tabIndex.value = index;
        lineAnimation();
      }
    };

    var selectedExist = function selectedExist(item) {
      var copyExistAdd = props.existAddress;
      var prevExistAdd = {};
      copyExistAdd.forEach(function (list, index) {
        if (list && list.selectedAddress) {
          prevExistAdd = list;
        }

        list.selectedAddress = false;
      });
      item.selectedAddress = true;
      selectedExistAddress = item;
      emit("selected", prevExistAdd, item, copyExistAdd);
      handClose();
    };

    var initAddress = function initAddress() {
      for (var i = 0; i < tabName.value.length; i++) {
        selectedRegion[tabName.value[i]] = {};
      }

      tabIndex.value = 0;
      lineAnimation();
    };

    var close = function close() {
      var resCopy = Object.assign({
        addressIdStr: "",
        addressStr: ""
      }, selectedRegion);
      var res = {
        data: {},
        type: privateType.value
      };

      if (privateType.value == "custom" || privateType.value == "custom2") {
        var province = resCopy.province,
            city = resCopy.city,
            country = resCopy.country,
            town = resCopy.town;
        resCopy.addressIdStr = [province.id || 0, city.id || 0, country.id || 0, town.id || 0].join("_");
        resCopy.addressStr = [province.name, city.name, country.name, town.name].join("");
        res.data = resCopy;
      } else {
        res.data = selectedExistAddress;
      }

      initAddress();

      if (closeWay.value == "self") {
        emit("close", res);
      } else {
        emit("close-mask", {
          closeWay: closeWay
        });
      }

      emit("update:visible", false);
    };

    var switchModule = function switchModule() {
      if (privateType.value == "exist") {
        privateType.value = "custom";
      } else {
        privateType.value = "exist";
      }

      initAddress();
      emit("switch-module", {
        type: privateType.value
      });
    };

    var handleElevatorItem = function handleElevatorItem(key, item) {
      nextAreaList(item);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.visible;
    }, function (value) {
      showPopup.value = value;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return showPopup.value;
    }, function (value) {
      if (value == false) {
        close();
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.province;
    }, function (value) {
      regionList.province = isCustom2.value ? transformData(value) : value;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.city;
    }, function (value) {
      regionList.city = isCustom2.value ? transformData(value) : value;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.country;
    }, function (value) {
      regionList.country = isCustom2.value ? transformData(value) : value;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.town;
    }, function (value) {
      regionList.town = isCustom2.value ? transformData(value) : value;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.existAddress;
    }, function (value) {
      value.forEach(function (item, index) {
        if (item.selectedAddress) {
          selectedExistAddress = item;
        }
      });
    });
    return __spreadValues(__spreadValues({
      classes: classes,
      showPopup: showPopup,
      privateType: privateType,
      tabIndex: tabIndex,
      tabName: tabName,
      regionList: regionList,
      selectedRegion: selectedRegion,
      selectedExistAddress: selectedExistAddress,
      switchModule: switchModule,
      closeWay: closeWay,
      close: close,
      getTabName: getTabName,
      nextAreaList: nextAreaList,
      regionLine: regionLine,
      lineDistance: lineDistance,
      changeRegionTab: changeRegionTab,
      selectedExist: selectedExist,
      clickOverlay: clickOverlay,
      handClose: handClose,
      handleElevatorItem: handleElevatorItem
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(props)), Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toRefs */ "s"])(tabItemRef));
  }
});

var _hoisted_1$2 = {
  class: "region-group"
};
var _hoisted_2$2 = ["onClick"];
var _hoisted_3$1 = {
  class: "region-tab"
};
var _hoisted_4 = ["onClick"];
var _hoisted_5 = {
  key: 0,
  class: "elevator-group"
};
var _hoisted_6 = {
  class: "exist-address-group"
};
var _hoisted_7 = {
  class: "exist-ul"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = {
  class: "exist-item-info"
};
var _hoisted_10 = {
  key: 0,
  class: "exist-item-info-top"
};
var _hoisted_11 = {
  class: "exist-item-info-name"
};
var _hoisted_12 = {
  class: "exist-item-info-phone"
};
var _hoisted_13 = {
  class: "exist-item-info-bottom"
};
var _hoisted_14 = {
  class: "btn"
};

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-icon");

  var _component_view_block = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("view-block");

  var _component_nut_elevator = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-elevator");

  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-popup");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_popup, {
    position: "bottom",
    onClose: _ctx.close,
    onClickOverlay: _ctx.clickOverlay,
    onOpen: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.closeWay = "self";
    }),
    visible: _ctx.showPopup,
    "onUpdate:visible": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.showPopup = $event;
    }),
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
        class: "nut-address"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
            class: "nut-address__header"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
                class: "arrow-back",
                onClick: _ctx.switchModule
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
                  return [_ctx.privateType == "custom" && _ctx.type == "exist" && _ctx.backBtnIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
                    key: 0,
                    name: _ctx.backBtnIcon,
                    color: "#cccccc"
                  }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)];
                }),
                _: 1
              }, 8, ["onClick"]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
                class: "nut-address__header__title"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.privateType == "custom" ? _ctx.customAddressTitle : _ctx.existAddressTitle), 1)];
                }),
                _: 1
              }), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
                class: "arrow-close",
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return _ctx.handClose("cross");
                })
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
                  return [_ctx.closeBtnIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
                    key: 0,
                    name: _ctx.closeBtnIcon,
                    color: "#cccccc",
                    size: "18px"
                  }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)];
                }),
                _: 1
              })];
            }),
            _: 1
          }), _ctx.privateType == "custom" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_view_block, {
            key: 0,
            class: "custom-address"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
                class: "region-tab"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
                  return [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.selectedRegion, function (item, key, index) {
                    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_view_block, {
                      class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["tab-item", [index == _ctx.tabIndex ? "active" : "", key]]),
                      key: index,
                      ref: key,
                      onClick: function onClick($event) {
                        return _ctx.changeRegionTab(item, key, index);
                      }
                    }, {
                      default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
                        return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.getTabName(item, index)), 1)];
                      }),
                      _: 2
                    }, 1032, ["class", "onClick"]);
                  }), 128)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
                    class: "region-tab-line",
                    ref: "regionLine",
                    style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
                      left: _ctx.lineDistance + "px"
                    })
                  }, null, 8, ["style"])];
                }),
                _: 1
              }), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_view_block, {
                class: "region-con"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("ul", _hoisted_1$2, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.regionList[_ctx.tabName[_ctx.tabIndex]], function (item, index) {
                    return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("li", {
                      key: index,
                      class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["region-item", [_ctx.selectedRegion[_ctx.tabName[_ctx.tabIndex]].id == item.id ? "active" : ""]]),
                      onClick: function onClick($event) {
                        return _ctx.nextAreaList(item);
                      }
                    }, [_ctx.selectedRegion[_ctx.tabName[_ctx.tabIndex]].id == item.id ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_nut_icon, {
                      key: 0,
                      class: "region-item-icon",
                      type: "self",
                      name: _ctx.selectedIcon,
                      color: "#FA2C19",
                      size: "13px"
                    }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])(Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.name), 1)], 10, _hoisted_2$2);
                  }), 128))])];
                }),
                _: 1
              })];
            }),
            _: 1
          })) : _ctx.privateType === "custom2" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_view_block, {
            key: 1,
            class: "custom-address"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", _hoisted_3$1, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.selectedRegion, function (item, key, index) {
                return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
                  class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["tab-item", [index == _ctx.tabIndex ? "active" : ""]]),
                  key: index,
                  ref: key,
                  onClick: function onClick($event) {
                    return _ctx.changeRegionTab(item, key, index);
                  }
                }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.getTabName(item, index)), 1)], 10, _hoisted_4);
              }), 128)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
                class: "region-tab-line",
                ref: "regionLine",
                style: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeStyle */ "K"])({
                  left: _ctx.lineDistance + "px"
                })
              }, null, 4)]), _ctx.showPopup ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_elevator, {
                height: _ctx.height,
                "index-list": _ctx.regionList[_ctx.tabName[_ctx.tabIndex]],
                onClickItem: _ctx.handleElevatorItem
              }, null, 8, ["height", "index-list", "onClickItem"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)];
            }),
            _: 1
          })) : _ctx.privateType == "exist" ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createBlock */ "f"])(_component_view_block, {
            key: 2,
            class: "exist-address"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("ul", _hoisted_7, [(Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* renderList */ "E"])(_ctx.existAddress, function (item, index) {
                return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("li", {
                  class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["exist-item", [item.selectedAddress ? "active" : ""]]),
                  key: index,
                  onClick: function onClick($event) {
                    return _ctx.selectedExist(item);
                  }
                }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_icon, {
                  class: "exist-item-icon",
                  type: "self",
                  name: item.selectedAddress ? _ctx.selectedIcon : _ctx.defaultIcon,
                  color: item.selectedAddress ? "#FA2C19" : "",
                  size: "13px"
                }, null, 8, ["name", "color"]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_9, [item.name && item.phone ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.name), 1), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.phone), 1)])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail), 1)])])], 10, _hoisted_8);
              }), 128))])]), _ctx.isShowCustomAddress ? (Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
                key: 0,
                class: "choose-other",
                onClick: _cache[1] || (_cache[1] = function () {
                  return _ctx.switchModule && _ctx.switchModule.apply(_ctx, arguments);
                })
              }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* toDisplayString */ "M"])(_ctx.customAndExistTitle), 1)])) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)];
            }),
            _: 1
          })) : Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createCommentVNode */ "g"])("", true)];
        }),
        _: 1
      })];
    }),
    _: 1
  }, 8, ["onClose", "onClickOverlay", "visible", "class"]);
}

_sfc_main$2.render = _sfc_render$2;

var _createComponent63 = createComponent("barrage"),
    componentName$1 = _createComponent63.componentName,
    create$1 = _createComponent63.create;

var _sfc_main$1 = create$1({
  props: {
    danmu: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    frequency: {
      type: Number,
      default: 200
    },
    speeds: {
      type: Number,
      default: 2e3
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click"],
  setup: function setup(props, _ref93) {
    var emit = _ref93.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var prefixCls = componentName$1;
      return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, prefixCls, true);
    });
    var timer = 0;
    var danmuList = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.danmu);
    var rows = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.rows);
    var top = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(props.top);
    var index = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* ref */ "m"])(0);
    var speeds = props.speeds;
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      run();
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onUnmounted */ "A"])(function () {
      clearInterval(timer);
      timer = 0;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onDeactivated */ "y"])(function () {
      clearInterval(timer);
      timer = 0;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* watch */ "L"])(function () {
      return props.danmu;
    }, function (newValue, oldVlaue) {
      danmuList.value = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(newValue);
    });

    var add = function add(word) {
      var _index = index.value % danmuList.value.length;

      danmuList.value.splice(_index, 0, word);
    };

    var run = function run() {
      clearInterval(timer);
      timer = 0;
      timer = setInterval(function () {
        play();
        run();
      }, props.frequency);
    };

    var play = function play() {
      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
      var dmContainer = document.getElementById("dmContainer");

      var _index = props.loop ? index.value % danmuList.value.length : index.value;

      var el = document.createElement("view");
      el.innerHTML = danmuList.value[_index];
      el.classList.add("dmitem");
      dmContainer.appendChild(el);
      var domList = [];
      query.selectAll(".dmitem").boundingClientRect(function (recs) {
        domList = recs;
      });
      Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* nextTick */ "u"])(function () {
        query.select(".dmBody").boundingClientRect(function (rec) {
          var _a;

          var danmuCWidth = rec.width;
          var height = ((_a = domList[_index]) == null ? void 0 : _a.height) || 0;
          el.classList.add("move");
          el.style.animationDuration = "".concat(speeds, "ms");
          el.style.top = _index % rows.value * (height + top.value) + 20 + "px";
          el.style.width = "auto";
          el.style.setProperty("--move-distance", "-".concat(danmuCWidth, "px"));
          el.dataset.index = "".concat(_index);
          el.addEventListener("animationend", function () {
            dmContainer.removeChild(el);
          });
          index.value++;
        }).exec();
      });
    };

    return {
      classes: classes,
      danmuList: danmuList,
      add: add
    };
  }
});

var _hoisted_1$1 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("view", {
  class: "dmContainer",
  id: "dmContainer"
}, null, -1);

var _hoisted_2$1 = [_hoisted_1$1];

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(["dmBody", _ctx.classes])
  }, _hoisted_2$1, 2);
}

_sfc_main$1.render = _sfc_render$1;

var _createComponent64 = createComponent("signature"),
    componentName = _createComponent64.componentName,
    create = _createComponent64.create;

var _sfc_main = create({
  props: {
    customClass: {
      type: String,
      default: ""
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: "#000"
    },
    type: {
      type: String,
      default: "png"
    },
    unSupportTpl: {
      type: String,
      default: "\u5BF9\u4E0D\u8D77\uFF0C\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Canvas\uFF0C\u65E0\u6CD5\u4F7F\u7528\u672C\u63A7\u4EF6\uFF01"
    }
  },
  components: {},
  emits: ["confirm", "clear"],
  setup: function setup(props, _ref95) {
    var emit = _ref95.emit;
    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* computed */ "c"])(function () {
      var _ref96;

      var prefixCls = componentName;
      return _ref96 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref96, prefixCls, true), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref96, "".concat(props.customClass), props.customClass), _ref96;
    });
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* reactive */ "k"])({
      canvas: null,
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null
    });

    var startEventHandler = function startEventHandler(event) {
      event.preventDefault();
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.strokeStyle;
    };

    var moveEventHandler = function moveEventHandler(event) {
      event.preventDefault();
      var evt = event.changedTouches[0];
      var mouseX = evt.x;
      var mouseY = evt.y;
      state.ctx.lineTo(mouseX, mouseY);
      state.ctx.stroke();
    };

    var endEventHandler = function endEventHandler(event) {
      event.preventDefault();
    };

    var leaveEventHandler = function leaveEventHandler(event) {
      event.preventDefault();
    };

    var clear = function clear() {
      state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
      state.ctx.closePath();
      emit("clear");
    };

    var confirm2 = function confirm2() {
      onSave();
    };

    var onSave = function onSave() {
      if (!state.canvas) {
        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.canvasToTempFilePath({
        canvas: state.canvas,
        fileType: props.type
      }).then(function (res) {
        emit("confirm", res.tempFilePath);
      }).catch(function (e) {
        emit("confirm", e);
      });
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "z"])(function () {
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().select("#spcanvas").fields({
          node: true,
          size: true
        }, function (res) {
          var canvas = res.node;
          var ctx = canvas.getContext("2d");
          state.canvas = canvas;
          state.ctx = ctx;
          state.canvasWidth = res.width;
          state.canvasHeight = res.height;
        }).exec();
      }, 500);
    });
    return {
      confirm: confirm2,
      clear: clear,
      classes: classes,
      startEventHandler: startEventHandler,
      moveEventHandler: moveEventHandler,
      endEventHandler: endEventHandler,
      leaveEventHandler: leaveEventHandler
    };
  }
});

var _hoisted_1 = {
  class: "nut-signature-inner"
};

var _hoisted_2 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])("\u91CD\u7B7E");

var _hoisted_3 = /* @__PURE__ */Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createTextVNode */ "l"])("\u786E\u8BA4");

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_button = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* resolveComponent */ "G"])("nut-button");

  return Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* openBlock */ "C"])(), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementBlock */ "h"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* normalizeClass */ "I"])(_ctx.classes)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createElementVNode */ "i"])("canvas", {
    class: "spcanvas",
    id: "spcanvas",
    canvasId: "spcanvas",
    "canvas-id": "spcanvas",
    type: "2d",
    "disable-scroll": "true",
    onTouchstart: _cache[0] || (_cache[0] = function () {
      return _ctx.startEventHandler && _ctx.startEventHandler.apply(_ctx, arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = function () {
      return _ctx.moveEventHandler && _ctx.moveEventHandler.apply(_ctx, arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function () {
      return _ctx.endEventHandler && _ctx.endEventHandler.apply(_ctx, arguments);
    }),
    onTouchleave: _cache[3] || (_cache[3] = function () {
      return _ctx.leaveEventHandler && _ctx.leaveEventHandler.apply(_ctx, arguments);
    })
  }, null, 32)]), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_button, {
    class: "nut-signature-btn",
    type: "default",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.clear();
    })
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [_hoisted_2];
    }),
    _: 1
  }), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "m"])(_component_nut_button, {
    class: "nut-signature-btn",
    type: "primary",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.confirm();
    })
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* withCtx */ "O"])(function () {
      return [_hoisted_3];
    }),
    _: 1
  })], 2);
}

_sfc_main.render = _sfc_render;

function install(app) {
  var packages = [_sfc_main$$, _sfc_main$Z, _sfc_main$Y, _sfc_main$X, _sfc_main$_, _sfc_main$W, _sfc_main$V, _sfc_main$U, _sfc_main$T, _sfc_main$S, _sfc_main$R, _sfc_main$Q, _sfc_main$M, _sfc_main$L, _sfc_main$K, _sfc_main$J, _sfc_main$I, _sfc_main$G, _sfc_main$F, _sfc_main$E, _sfc_main$D, _sfc_main$H, _sfc_main$C, _sfc_main$B, _sfc_main$A, _sfc_main$z, _sfc_main$y, _sfc_main$x, _sfc_main$w, _sfc_main$v, _sfc_main$u, _sfc_main$t, _sfc_main$s, _sfc_main$r, _sfc_main$q, _sfc_main$p, _sfc_main$o, _sfc_main$n, _sfc_main$m, _sfc_main$k, _sfc_main$j, _sfc_main$i, _sfc_main$f, _sfc_main$e, _sfc_main$d, _sfc_main$c, _sfc_main$b, _sfc_main$a, _sfc_main$9, _sfc_main$8, _sfc_main$7, _sfc_main$6, _sfc_main$5, _sfc_main$4, _sfc_main$3, _sfc_main$2, _sfc_main$1, _sfc_main];
  packages.forEach(function (item) {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

var nutui_taro_vue_build = {
  install: install,
  version: "3.1.6"
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/style.css":
/*!*******************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/style.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/const.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/const.js ***!
  \*********************************************************/
/*! exports provided: HOOK_SETUP, HOOK_PLUGIN_SETTINGS_SET */
/*! exports used: HOOK_PLUGIN_SETTINGS_SET, HOOK_SETUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOOK_SETUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOOK_PLUGIN_SETTINGS_SET; });
var HOOK_SETUP = 'devtools-plugin:setup';
var HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/env.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/env.js ***!
  \*******************************************************/
/*! exports provided: getDevtoolsGlobalHook, getTarget, isProxyAvailable */
/*! exports used: getDevtoolsGlobalHook, getTarget, isProxyAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(navigator, window, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevtoolsGlobalHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isProxyAvailable; });
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  // @ts-ignore
  return typeof navigator !== 'undefined' && typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}
var isProxyAvailable = typeof Proxy === 'function';
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: setupDevtoolsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupDevtoolsPlugin", function() { return setupDevtoolsPlugin; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/@vue/devtools-api/lib/esm/env.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxy */ "./node_modules/@vue/devtools-api/lib/esm/proxy.js");





function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  var target = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getTarget */ "b"])();
  var hook = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getDevtoolsGlobalHook */ "a"])();
  var enableProxy = _env__WEBPACK_IMPORTED_MODULE_0__[/* isProxyAvailable */ "c"] && pluginDescriptor.enableEarlyProxy;

  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(_const__WEBPACK_IMPORTED_MODULE_1__[/* HOOK_SETUP */ "b"], pluginDescriptor, setupFn);
  } else {
    var proxy = enableProxy ? new _proxy__WEBPACK_IMPORTED_MODULE_2__[/* ApiProxy */ "a"](pluginDescriptor, hook) : null;
    var list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: pluginDescriptor,
      setupFn: setupFn,
      proxy: proxy
    });
    if (proxy) setupFn(proxy.proxiedTarget);
  }
}

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/proxy.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/proxy.js ***!
  \*********************************************************/
/*! exports provided: ApiProxy */
/*! exports used: ApiProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProxy; });
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");








var ApiProxy = /*#__PURE__*/function () {
  function ApiProxy(plugin, hook) {
    var _this = this;

    Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, ApiProxy);

    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    var defaultSettings = {};

    if (plugin.settings) {
      for (var id in plugin.settings) {
        var item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }

    var localSettingsSaveId = "__vue-devtools-plugin-settings__".concat(plugin.id);

    var currentSettings = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, defaultSettings);

    try {
      var raw = localStorage.getItem(localSettingsSaveId);
      var data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {// noop
    }

    this.fallbacks = {
      getSettings: function getSettings() {
        return currentSettings;
      },
      setSettings: function setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {// noop
        }

        currentSettings = value;
      }
    };
    hook.on(_const__WEBPACK_IMPORTED_MODULE_7__[/* HOOK_PLUGIN_SETTINGS_SET */ "a"], function (pluginId, value) {
      if (pluginId === _this.plugin.id) {
        _this.fallbacks.setSettings(value);
      }
    });
    this.proxiedOn = new Proxy({}, {
      get: function get(_target, prop) {
        if (_this.target) {
          return _this.target.on[prop];
        } else {
          return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this.onQueue.push({
              method: prop,
              args: args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: function get(_target, prop) {
        if (_this.target) {
          return _this.target[prop];
        } else if (prop === 'on') {
          return _this.proxiedOn;
        } else if (Object.keys(_this.fallbacks).includes(prop)) {
          return function () {
            var _this$fallbacks;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this.targetQueue.push({
              method: prop,
              args: args,
              resolve: function resolve() {}
            });

            return (_this$fallbacks = _this.fallbacks)[prop].apply(_this$fallbacks, args);
          };
        } else {
          return function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return new Promise(function (resolve) {
              _this.targetQueue.push({
                method: prop,
                args: args,
                resolve: resolve
              });
            });
          };
        }
      }
    });
  }

  Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ApiProxy, [{
    key: "setRealTarget",
    value: function () {
      var _setRealTarget = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(target) {
        var _iterator, _step, _this$target$on, item, _iterator2, _step2, _this$target, _item;

        return _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.target = target;
                _iterator = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this.onQueue);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    item = _step.value;

                    (_this$target$on = this.target.on)[item.method].apply(_this$target$on, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(item.args));
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _iterator2 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this.targetQueue);
                _context.prev = 4;

                _iterator2.s();

              case 6:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 15;
                  break;
                }

                _item = _step2.value;
                _context.t0 = _item;
                _context.next = 11;
                return (_this$target = this.target)[_item.method].apply(_this$target, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_item.args));

              case 11:
                _context.t1 = _context.sent;

                _context.t0.resolve.call(_context.t0, _context.t1);

              case 13:
                _context.next = 6;
                break;

              case 15:
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t2 = _context["catch"](4);

                _iterator2.e(_context.t2);

              case 20:
                _context.prev = 20;

                _iterator2.f();

                return _context.finish(20);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 17, 20, 23]]);
      }));

      function setRealTarget(_x) {
        return _setRealTarget.apply(this, arguments);
      }

      return setRealTarget;
    }()
  }]);

  return ApiProxy;
}();

/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/*! exports provided: EffectScope, ReactiveEffect, computed, customRef, effect, effectScope, getCurrentScope, isProxy, isReactive, isReadonly, isRef, markRaw, onScopeDispose, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, normalizeClass, normalizeProps, normalizeStyle, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, compatUtils, createBlock, createCommentVNode, createElementBlock, createElementVNode, createHydrationRenderer, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmits, defineExpose, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, guardReactiveProps, h, handleError, initCustomFormatter, inject, isMemoSame, isRuntimeOnly, isVNode, mergeDefaults, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useAttrs, useSSRContext, useSlots, useTransitionState, version, warn, watch, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withMemo, withScopeId, Transition, TransitionGroup, VueElement, createApp, createSSRApp, defineCustomElement, defineSSRCustomElement, hydrate, initDirectivesForSSR, render, useCssModule, useCssVars, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, withKeys, withModifiers */
/*! exports used: Transition, createApp, vModelText, vShow, withModifiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, window, navigator, requestAnimationFrame, SVGElement, Element) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transition; });
/* unused harmony export TransitionGroup */
/* unused harmony export VueElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApp; });
/* unused harmony export createSSRApp */
/* unused harmony export defineCustomElement */
/* unused harmony export defineSSRCustomElement */
/* unused harmony export hydrate */
/* unused harmony export initDirectivesForSSR */
/* unused harmony export render */
/* unused harmony export useCssModule */
/* unused harmony export useCssVars */
/* unused harmony export vModelCheckbox */
/* unused harmony export vModelDynamic */
/* unused harmony export vModelRadio */
/* unused harmony export vModelSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vModelText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return vShow; });
/* unused harmony export withKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return withModifiers; });
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");












var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var staticTemplateCache = new Map();
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);

    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }

    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    var cloned = el.cloneNode(true); // #3072
    // - in `patchDOMProp`, we store the actual value in the `el._value` property.
    // - normally, elements using `:value` bindings will not be hoisted, but if
    //   the bound value is a constant, e.g. `:value="true"` - they do get
    //   hoisted.
    // - in production, hoisted nodes are cloned when subsequent inserts, but
    //   cloneNode() does not copy the custom property we attached.
    // - This may need to account for other custom DOM properties we attach to
    //   elements in addition to `_value` in the future.

    if ("_value" in el) {
      cloned._value = el._value;
    }

    return cloned;
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG) {
    // <parent> before | first ... last | anchor </parent>
    var before = anchor ? anchor.previousSibling : parent.lastChild;
    var template = staticTemplateCache.get(content);

    if (!template) {
      var t = doc.createElement('template');
      t.innerHTML = isSVG ? "<svg>".concat(content, "</svg>") : content;
      template = t.content;

      if (isSVG) {
        // remove outer svg wrapper
        var wrapper = template.firstChild;

        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }

        template.removeChild(wrapper);
      }

      staticTemplateCache.set(content, template);
    }

    parent.insertBefore(template.cloneNode(true), anchor);
    return [// first
    before ? before.nextSibling : parent.firstChild, // last
    anchor ? anchor.previousSibling : parent.lastChild];
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  // directly setting className should be faster than setAttribute in theory
  // if this is an element during a transition, take the temporary transition
  // classes into account.
  var transitionClasses = el._vtc;

  if (transitionClasses) {
    value = (value ? [value].concat(Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(transitionClasses)) : Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(transitionClasses)).join(' ');
  }

  if (value == null) {
    el.removeAttribute('class');
  } else if (isSVG) {
    el.setAttribute('class', value);
  } else {
    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;
  var currentDisplay = style.display;

  if (!next) {
    el.removeAttribute('style');
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isString */ "D"])(next)) {
    if (prev !== next) {
      style.cssText = next;
    }
  } else {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isString */ "D"])(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  } // indicates that the `display` of the element is controlled by `v-show`,
  // so we always keep the current `display` value regardless of the `style` value,
  // thus handing over control to `v-show`.


  if ('_vod' in el) {
    style.display = currentDisplay;
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* hyphenate */ "l"])(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* camelize */ "e"])(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* capitalize */ "f"])(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isSpecialBooleanAttr */ "C"])(key);

    if (value == null || isBoolean && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* includeBooleanAttr */ "m"])(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS') {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  if (value === '' || value == null) {
    var type = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(el[key]);

    if (type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      el[key] = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* includeBooleanAttr */ "m"])(value);
      return;
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      el[key] = '';
      el.removeAttribute(key);
      return;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
      try {
        el[key] = 0;
      } catch (_a) {}

      el.removeAttribute(key);
      return;
    }
  } // some properties perform value validation and throw


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }
} // Async edge case fix requires storing an event listener's attach timestamp.


var _getNow = Date.now;
var skipTimestampCheck = false;

if (typeof window !== 'undefined') {
  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  if (_getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = function _getNow() {
      return performance.now();
    };
  } // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
  // and does not fire microtasks in between event propagation, so safe to exclude.


  var ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
} // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* hyphenate */ "l"])(name.slice(2)), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* callWithAsyncErrorHandling */ "e"])(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  if (key === 'class') {
    patchClass(el, nextValue, isSVG);
  } else if (key === 'style') {
    patchStyle(el, prevValue, nextValue);
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isOn */ "w"])(key)) {
    // ignore v-model listeners
    if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isModelListener */ "u"])(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    // special case for <input v-model type="checkbox"> with
    // :true-value & :false-value
    // store value as dom properties since non-string values will be
    // stringified.
    if (key === 'true-value') {
      el._trueValue = nextValue;
    } else if (key === 'false-value') {
      el._falseValue = nextValue;
    }

    patchAttr(el, key, nextValue, isSVG);
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML & textContent
    if (key === 'innerHTML' || key === 'textContent') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isFunction */ "p"])(value)) {
      return true;
    }

    return false;
  } // spellcheck and draggable are numerated attrs, however their
  // corresponding DOM properties are actually booleans - this leads to
  // setting it with a string "false" value leading it to be coerced to
  // `true`, so we need to always treat them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable') {
    return false;
  } // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.


  if (key === 'form') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // #2766 <textarea type> must be set as attribute


  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isString */ "D"])(value)) {
    return false;
  }

  return key in el;
}

function defineCustomElement(options, hydate) {
  var Comp = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* defineComponent */ "n"])(options);

  var VueCustomElement = /*#__PURE__*/function (_VueElement) {
    Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VueCustomElement, _VueElement);

    var _super = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(VueCustomElement);

    function VueCustomElement(initialProps) {
      Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, VueCustomElement);

      return _super.call(this, Comp, initialProps, hydate);
    }

    return VueCustomElement;
  }(VueElement);

  VueCustomElement.def = Comp;
  return VueCustomElement;
}

var defineSSRCustomElement = function defineSSRCustomElement(options) {
  // @ts-ignore
  return defineCustomElement(options, hydrate);
};

var BaseClass = typeof HTMLElement !== 'undefined' ? HTMLElement : /*#__PURE__*/function () {
  function _class() {
    Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, _class);
  }

  return _class;
}();

var VueElement = /*#__PURE__*/function (_BaseClass) {
  Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VueElement, _BaseClass);

  var _super2 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(VueElement);

  function VueElement(_def) {
    var _this;

    var _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hydrate = arguments.length > 2 ? arguments[2] : undefined;

    Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, VueElement);

    _this = _super2.call(this);
    _this._def = _def;
    _this._props = _props;
    /**
     * @internal
     */

    _this._instance = null;
    _this._connected = false;
    _this._resolved = false;
    _this._numberProps = null;

    if (_this.shadowRoot && hydrate) {
      hydrate(_this._createVNode(), _this.shadowRoot);
    } else {
      if ( true && _this.shadowRoot) {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("Custom element has pre-rendered declarative shadow root but is not " + "defined as hydratable. Use `defineSSRCustomElement`.");
      }

      _this.attachShadow({
        mode: 'open'
      });
    } // set initial attrs


    for (var i = 0; i < _this.attributes.length; i++) {
      _this._setAttr(_this.attributes[i].name);
    } // watch future attr changes


    new MutationObserver(function (mutations) {
      var _iterator = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(mutations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var m = _step.value;

          _this._setAttr(m.attributeName);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }).observe(Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), {
      attributes: true
    });
    return _this;
  }

  Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VueElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this._connected = true;

      if (!this._instance) {
        this._resolveDef();

        this._update();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      this._connected = false;
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* nextTick */ "u"])(function () {
        if (!_this2._connected) {
          render(null, _this2.shadowRoot);
          _this2._instance = null;
        }
      });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */

  }, {
    key: "_resolveDef",
    value: function _resolveDef() {
      var _this3 = this;

      if (this._resolved) {
        return;
      }

      var resolve = function resolve(def) {
        _this3._resolved = true;
        var props = def.props,
            styles = def.styles;
        var hasOptions = !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(props);
        var rawKeys = props ? hasOptions ? Object.keys(props) : props : []; // cast Number-type props set before resolve

        var numberProps;

        if (hasOptions) {
          for (var key in _this3._props) {
            var opt = props[key];

            if (opt === Number || opt && opt.type === Number) {
              _this3._props[key] = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* toNumber */ "O"])(_this3._props[key]);
              (numberProps || (numberProps = Object.create(null)))[key] = true;
            }
          }
        }

        if (numberProps) {
          _this3._numberProps = numberProps;

          _this3._update();
        } // check if there are props set pre-upgrade or connect


        for (var _i = 0, _Object$keys = Object.keys(_this3); _i < _Object$keys.length; _i++) {
          var _key2 = _Object$keys[_i];

          if (_key2[0] !== '_') {
            _this3._setProp(_key2, _this3[_key2]);
          }
        } // defining getter/setters on prototype


        var _iterator2 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(rawKeys.map(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* camelize */ "e"])),
            _step2;

        try {
          var _loop = function _loop() {
            var key = _step2.value;
            Object.defineProperty(_this3, key, {
              get: function get() {
                return this._getProp(key);
              },
              set: function set(val) {
                this._setProp(key, val);
              }
            });
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        _this3._applyStyles(styles);
      };

      var asyncDef = this._def.__asyncLoader;

      if (asyncDef) {
        asyncDef().then(resolve);
      } else {
        resolve(this._def);
      }
    }
  }, {
    key: "_setAttr",
    value: function _setAttr(key) {
      var value = this.getAttribute(key);

      if (this._numberProps && this._numberProps[key]) {
        value = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* toNumber */ "O"])(value);
      }

      this._setProp(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* camelize */ "e"])(key), value, false);
    }
    /**
     * @internal
     */

  }, {
    key: "_getProp",
    value: function _getProp(key) {
      return this._props[key];
    }
    /**
     * @internal
     */

  }, {
    key: "_setProp",
    value: function _setProp(key, val) {
      var shouldReflect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (val !== this._props[key]) {
        this._props[key] = val;

        if (this._instance) {
          this._update();
        } // reflect


        if (shouldReflect) {
          if (val === true) {
            this.setAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* hyphenate */ "l"])(key), '');
          } else if (typeof val === 'string' || typeof val === 'number') {
            this.setAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* hyphenate */ "l"])(key), val + '');
          } else if (!val) {
            this.removeAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* hyphenate */ "l"])(key));
          }
        }
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      render(this._createVNode(), this.shadowRoot);
    }
  }, {
    key: "_createVNode",
    value: function _createVNode() {
      var _this4 = this;

      var vnode = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* createVNode */ "m"])(this._def, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* extend */ "h"])({}, this._props));

      if (!this._instance) {
        vnode.ce = function (instance) {
          _this4._instance = instance;
          instance.isCE = true; // HMR

          if (true) {
            instance.ceReload = function (newStyles) {
              // alawys reset styles
              if (_this4._styles) {
                _this4._styles.forEach(function (s) {
                  return _this4.shadowRoot.removeChild(s);
                });

                _this4._styles.length = 0;
              }

              _this4._applyStyles(newStyles); // if this is an async component, ceReload is called from the inner
              // component so no need to reload the async wrapper


              if (!_this4._def.__asyncLoader) {
                // reload
                _this4._instance = null;

                _this4._update();
              }
            };
          } // intercept emit


          instance.emit = function (event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key3 = 1; _key3 < _len; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            _this4.dispatchEvent(new CustomEvent(event, {
              detail: args
            }));
          }; // locate nearest Vue custom element parent for provide/inject


          var parent = _this4;

          while (parent = parent && (parent.parentNode || parent.host)) {
            if (parent instanceof VueElement) {
              instance.parent = parent._instance;
              break;
            }
          }
        };
      }

      return vnode;
    }
  }, {
    key: "_applyStyles",
    value: function _applyStyles(styles) {
      var _this5 = this;

      if (styles) {
        styles.forEach(function (css) {
          var s = document.createElement('style');
          s.textContent = css;

          _this5.shadowRoot.appendChild(s); // record for HMR


          if (true) {
            (_this5._styles || (_this5._styles = [])).push(s);
          }
        });
      }
    }
  }]);

  return VueElement;
}(BaseClass);

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* getCurrentInstance */ "o"])();

    if (!instance) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("useCssModule must be called inside setup()");
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* EMPTY_OBJ */ "b"];
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("Current instance does not have CSS modules injected.");
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* EMPTY_OBJ */ "b"];
    }

    var mod = modules[name];

    if (!mod) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* EMPTY_OBJ */ "b"];
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* getCurrentInstance */ "o"])();
  /* istanbul ignore next */

  if (!instance) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* watchPostEffect */ "N"])(setVars);
  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* onMounted */ "z"])(function () {
    var ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, {
      childList: true
    });
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* onUnmounted */ "A"])(function () {
      return ob.disconnect();
    });
  });
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
    var suspense = vnode.suspense;
    vnode = suspense.activeBranch;

    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(function () {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* Fragment */ "b"]) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* Static */ "c"]) {
    var _vnode = vnode,
        el = _vnode.el,
        anchor = _vnode.anchor;

    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}

function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    var style = el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref) {
  var slots = _ref.slots;
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* h */ "r"])(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* BaseTransition */ "a"], resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* extend */ "h"])({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* BaseTransition */ "a"].props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */

var callHook = function callHook(hook) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(hook)) {
    hook.forEach(function (h) {
      return h.apply(void 0, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(args));
    });
  } else if (hook) {
    hook.apply(void 0, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(args));
  }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */


var hasExplicitCallback = function hasExplicitCallback(hook) {
  return hook ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(hook) ? hook.some(function (h) {
    return h.length > 1;
  }) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      callHook(hook, [el, resolve]);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* extend */ "h"])(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      callHook(_onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      callHook(_onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(_onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(_onLeave, [el, resolve]);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(_onEnterCancelled, [el]);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(_onAppearCancelled, [el]);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      callHook(_onLeaveCancelled, [el]);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isObject */ "v"])(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* toNumber */ "O"])(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc.delete(cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* extend */ "h"])({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* getCurrentInstance */ "o"])();
    var state = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* useTransitionState */ "J"])();
    var prevChildren;
    var children;
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* onUpdated */ "B"])(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_11__[/* toRaw */ "r"])(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* Fragment */ "b"];
      prevChildren = children;
      children = slots.default ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* getTransitionRawChildren */ "p"])(slots.default()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* setTransitionHooks */ "I"])(child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* resolveTransitionHooks */ "H"])(child, cssTransitionProps, state, instance));
        } else if (true) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i2 = 0; _i2 < prevChildren.length; _i2++) {
          var _child = prevChildren[_i2];
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* setTransitionHooks */ "I"])(_child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* resolveTransitionHooks */ "H"])(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* createVNode */ "m"])(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'];
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(fn) ? function (value) {
    return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* invokeArrayFns */ "n"])(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    trigger(target, 'input');
  }
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref3, vnode) {
    var _ref3$modifiers = _ref3.modifiers,
        lazy = _ref3$modifiers.lazy,
        trim = _ref3$modifiers.trim,
        number = _ref3$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || vnode.props && vnode.props.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* toNumber */ "O"])(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref4) {
    var value = _ref4.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref5, vnode) {
    var value = _ref5.value,
        _ref5$modifiers = _ref5.modifiers,
        lazy = _ref5$modifiers.lazy,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el) {
      if (lazy) {
        return;
      }

      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* toNumber */ "O"])(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(modelValue)) {
        var index = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseIndexOf */ "G"])(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isSet */ "B"])(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref6, vnode) {
  var value = _ref6.value,
      oldValue = _ref6.oldValue;
  el._modelValue = value;

  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(value)) {
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseIndexOf */ "G"])(value, vnode.props.value) > -1;
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isSet */ "B"])(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseEqual */ "F"])(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref7, vnode) {
    var value = _ref7.value;
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseEqual */ "F"])(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref8, vnode) {
    var value = _ref8.value,
        oldValue = _ref8.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseEqual */ "F"])(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value,
        number = _ref9.modifiers.number;
    var isSetModel = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isSet */ "B"])(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* toNumber */ "O"])(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref10) {
    var value = _ref10.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref11) {
    var value = _ref11.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(value) && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isSet */ "B"])(value)) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(value)) {
        option.selected = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseIndexOf */ "G"])(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseEqual */ "F"])(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse;

  switch (el.tagName) {
    case 'SELECT':
      modelToUse = vModelSelect;
      break;

    case 'TEXTAREA':
      modelToUse = vModelText;
      break;

    default:
      switch (vnode.props && vnode.props.type) {
        case 'checkbox':
          modelToUse = vModelCheckbox;
          break;

        case 'radio':
          modelToUse = vModelRadio;
          break;

        default:
          modelToUse = vModelText;
      }

  }

  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVModelForSSR() {
  vModelText.getSSRProps = function (_ref12) {
    var value = _ref12.value;
    return {
      value: value
    };
  };

  vModelRadio.getSSRProps = function (_ref13, vnode) {
    var value = _ref13.value;

    if (vnode.props && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseEqual */ "F"])(vnode.props.value, value)) {
      return {
        checked: true
      };
    }
  };

  vModelCheckbox.getSSRProps = function (_ref14, vnode) {
    var value = _ref14.value;

    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isArray */ "o"])(value)) {
      if (vnode.props && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* looseIndexOf */ "G"])(value, vnode.props.value) > -1) {
        return {
          checked: true
        };
      }
    } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isSet */ "B"])(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return {
          checked: true
        };
      }
    } else if (value) {
      return {
        checked: true
      };
    }
  };
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key4 = 1; _key4 < _len2; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  delete: 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) {
      return;
    }

    var eventKey = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* hyphenate */ "l"])(event.key);

    if (modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref15, _ref16) {
    var value = _ref15.value;
    var transition = _ref16.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref17, _ref18) {
    var value = _ref17.value;
    var transition = _ref18.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref19, _ref20) {
    var value = _ref19.value,
        oldValue = _ref19.oldValue;
    var transition = _ref20.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref21) {
    var value = _ref21.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVShowForSSR() {
  vShow.getSSRProps = function (_ref22) {
    var value = _ref22.value;

    if (!value) {
      return {
        style: {
          display: 'none'
        }
      };
    }
  };
}

var rendererOptions = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* extend */ "h"])({
  patchProp: patchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* createRenderer */ "k"])(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* createHydrationRenderer */ "j"])(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isFunction */ "p"])(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isHTMLTag */ "r"])(tag) || Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isSVGTag */ "A"])(tag);
    },
    writable: false
  });
} // dev only


function injectCompilerOptionsCheck(app) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* isRuntimeOnly */ "t"])()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])(msg);
        return compilerOptions;
      },
      set: function set() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])(msg);
      }
    });
  }
}

function normalizeContainer(container) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isString */ "D"])(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* warn */ "K"])("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}

var ssrDirectiveInitialized = false;
/**
 * @internal
 */

var initDirectivesForSSR = function initDirectivesForSSR() {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["SVGElement"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"]))

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.ts":
/*!****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.ts ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nutui/nutui-taro */ "./node_modules/@nutui/nutui-taro/dist/nutui.es.js");
/* harmony import */ var _nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nutui/nutui-taro/dist/style.css */ "./node_modules/@nutui/nutui-taro/dist/style.css");
/* harmony import */ var _nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_4__);





var App = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createApp */ "b"])({
  onShow: function onShow(options) {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖

});
App.use(_nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"]).use(_nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__[/* Toast */ "b"]);
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/pinyin/data/dict-zi-web.js":
/*!*************************************************!*\
  !*** ./node_modules/pinyin/data/dict-zi-web.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
  "a": "",
  "ā": "吖锕錒",
  "á": "嗄",
  "ǎ": "",
  "à": "",
  "āi": "哎哀埃娭溾嗳銰锿噯諰鎄",
  "ái": "啀娾捱皑凒隑嵦溰嘊敱敳皚磑癌",
  "ǎi": "毐昹娾欸絠嗳矮蔼躷噯濭藹譪霭靄",
  "ài": "艾伌欬爱砹硋堨焥隘嗌嗳塧嫒愛碍叆暧瑷僾噯壒嬡懓薆鴱懝曖璦賹餲皧瞹馤礙譺鑀鱫靉",
  "ān": "安侒峖桉氨偣庵菴谙啽媕萻葊痷腤裺鹌蓭誝鞍鞌盦諳馣鮟盫鵪韽鶕",
  "án": "玵啽雸儑",
  "ǎn": "垵俺唵埯铵揞晻罯銨",
  "àn": "厈屵屽犴岸咹按洝荌案胺豻堓隌晻暗貋儑錌闇黯",
  "āng": "肮骯",
  "áng": "卬岇昂昻",
  "ǎng": "",
  "àng": "枊盎醠",
  "āo": "泑柪眑梎軪熝爊",
  "áo": "敖厫隞嗷嗸嶅廒慠滶獓蔜遨骜摮獒璈磝墽翱聱螯翶謷謸翺鳌鏕鏖鰲鷔鼇",
  "ǎo": "艹抝芺袄眑郩镺媪媼襖",
  "ào": "岙扷抝坳垇岰柪傲奡軪奧嫯嶅慠澚隩墺嶴懊擙澳鏊驁",
  "ba": "罷",
  "bā": "丷八仈巴叭朳玐夿岜扷芭峇柭疤哱哵捌笆粑羓蚆釟豝鲃魞",
  "bá": "叐犮抜妭拔茇炦癹胈菝詙跋軷颰魃鼥",
  "bǎ": "钯鈀靶",
  "bà": "坝弝爸皅垻跁鲃魞鲅鲌罷鮁鮊覇矲霸壩灞欛",
  "bāi": "挀掰擘",
  "bái": "白",
  "bǎi": "百佰栢瓸捭竡粨絔摆擺襬",
  "bài": "呗庍拝败拜唄敗猈稗粺薭贁韛",
  "bān": "扳攽朌肦班般颁斑搬斒頒搫瘢鳻螌褩癍辬",
  "bǎn": "阪坂岅昄板版瓪钣粄舨鈑蝂魬闆",
  "bàn": "办半伴扮坢姅怑绊柈秚湴絆跘鉡靽辦瓣",
  "bāng": "邦垹帮捠梆浜邫幇幚縍幫鞤",
  "bǎng": "绑綁牓膀髈",
  "bàng": "玤挷蚄傍棒棓硥谤塝搒稖蒡蛖蜯镑縍艕謗鎊",
  "bāo": "勹包佨孢苞枹胞剝笣煲龅裦蕔褒襃闁齙",
  "báo": "窇雹",
  "bǎo": "宝怉饱保鸨宲珤堢媬葆寚飹飽褓駂鳵緥鴇賲藵寳寶靌",
  "bào": "勽犳报怉抱豹趵铇菢蚫袌報鉋鲍骲髱虣鮑儤曓嚗曝爆犦忁鑤",
  "bei": "呗唄",
  "bēi": "陂卑杯柸盃庳桮悲揹棓椑碑鹎箄諀鞞藣鵯",
  "běi": "鉳",
  "bèi": "贝孛狈貝邶备昁杮牬苝郥钡俻倍悖狽偝偹梖珼鄁備僃惫棑棓焙琲軰辈愂碚禙蓓蛽犕褙誖鞁骳輩鋇憊糒鞴鐾",
  "bēn": "泍贲栟喯犇賁锛漰錛蟦",
  "běn": "夲本苯奙畚翉楍",
  "bèn": "坋坌泍炃倴捹桳渀笨逩撪",
  "bēng": "伻祊奟崩絣閍嗙嵭痭嘣綳繃",
  "béng": "甮甭",
  "běng": "埄埲菶琣琫綳繃鞛",
  "bèng": "泵迸堋逬揼跰塴綳甏镚繃蹦鏰",
  "bī": "皀屄偪毴逼楅榌豍螕鵖鲾鎞鰏",
  "bí": "荸鼻嬶",
  "bǐ": "匕比夶朼佊吡妣沘疕纰彼毞肶柀秕俾娝笔粃紕舭啚崥筆鄙聛貏",
  "bì": "币必毕闬闭佖坒庇芘诐邲咇妼怭怶畁畀肶苾哔柲毖珌畐疪祕胇荜贲陛毙狴畢笓粊袐铋婢敝旇梐紴翍萆萞閇閈閉堛弼弻愊愎湢皕禆筚詖貱賁赑嗶彃滗滭煏痺痹睤睥腷蓖蓽蜌裨跸鉍閟飶幣弊熚獙碧稫箅箆綼蔽鄪馝幤潷獘罼襅駜髲壁嬖廦篦篳縪薜觱避鮅斃濞蹕鞞髀奰璧鄨鎞鏎饆繴襣襞鞸韠魓躃躄驆鶝朇贔鐴鷝鷩鼊",
  "biān": "辺边炞砭笾猵编萹煸牑甂箯糄編臱蝙鞕獱邉鍽鳊邊鞭鯾鯿籓籩",
  "biǎn": "贬疺窆匾貶惼揙碥稨褊糄鴘藊覵鶣",
  "biàn": "卞弁忭抃汳汴苄釆变峅玣変昪覍徧缏遍閞辡緶艑諚辧辨辩辫辮辯變",
  "biāo": "灬杓标飑骉髟彪淲猋脿颩僄墂幖摽滮蔈颮骠標熛膔膘麃瘭磦镖飚飙儦檦篻颷瀌藨謤爂臕贆鏢穮镳飈飆飊飇鑣驫",
  "biáo": "嫑",
  "biǎo": "表婊裱諘褾錶檦",
  "biào": "俵摽鳔",
  "biē": "柭憋蟞癟鳖鱉鼈虌龞",
  "bié": "別柲莂蛂徶襒蟞蹩",
  "biě": "癟",
  "biè": "別彆",
  "bīn": "汃邠玢砏宾彬梹傧斌椕滨缤槟瑸豩賓賔镔儐濒頻濱濵虨豳檳璸瀕霦繽鑌顮",
  "bǐn": "",
  "bìn": "摈殡膑髩儐擯鬂殯臏髌鬓髕鬢",
  "bīng": "冫仌仒氷冰兵幷栟掤梹蛃絣槟鋲檳",
  "bǐng": "丙邴陃怲抦秉苪昞昺柄炳饼眪偋屛寎棅琕禀稟鈵鉼鞆餅餠鞞鞸",
  "bìng": "並併幷枋垪庰倂栤病窉竝偋傡寎摒誁鮩靐",
  "bo": "啵蔔噃",
  "bō": "癶拨波癷玻剝哱盋砵趵钵饽紴缽菠袰溊碆鉢僠嶓撥播餑磻礡蹳皪驋鱍",
  "bó": "仢彴肑驳帛狛瓝苩侼柭胉郣亳挬浡瓟秡袯钹铂桲淿脖舶萡袹博殕渤葧鹁愽搏猼鉑鈸馎鲌僰榑煿牔箔膊艊誖馛駁踣鋍镈壆馞駮鮊穛襏謈嚗懪簙鎛餺鵓糪髆髉欂襮礴鑮",
  "bǒ": "癷蚾跛",
  "bò": "孹擗擘檗檘譒蘗",
  "bū": "峬庯逋钸晡鈽誧餔錻鯆鵏",
  "bú": "鳪轐醭",
  "bǔ": "卟补哺捕捬補鸔",
  "bù": "布佈吥步咘怖抪歩歨柨钚勏埔埗悑捗荹部埠婄瓿鈈廍蔀箁踄郶篰餢",
  "cā": "嚓擦攃",
  "cǎ": "礤礸",
  "cà": "遪囃",
  "cāi": "偲猜",
  "cái": "才扐材财財裁纔",
  "cǎi": "毝倸啋埰婇寀彩採棌睬跴綵踩",
  "cài": "埰寀菜蔡縩",
  "cān": "參叄飡骖叅喰湌傪嬠餐爘驂囋",
  "cán": "残蚕惭殘慚摲蝅慙蠺蠶",
  "cǎn": "惨朁慘憯穇篸黪黲",
  "càn": "灿孱傪粲嘇摻儏澯薒燦璨謲鏒",
  "cāng": "仓仺伧沧苍玱鸧倉舱傖凔嵢滄獊蒼瑲濸篬艙螥鶬",
  "cáng": "匨臧欌鑶",
  "càng": "賶",
  "cāo": "撡操糙",
  "cáo": "曺曹傮嘈嶆慒漕蓸槽褿艚螬鏪",
  "cǎo": "屮艸草愺慅懆騲",
  "cào": "肏鄵襙鼜",
  "cè": "夨冊册厕恻拺测荝敇畟側厠笧粣萗廁惻測策萴筞筴蓛箣憡簎",
  "cēn": "參叄叅嵾穇篸",
  "cén": "岑汵埁涔笒",
  "cēng": "噌",
  "céng": "层曽層嶒橧竲驓",
  "cèng": "蹭",
  "cī": "呰呲玼疵趀偨跐縒骴髊蠀齹",
  "cí": "词珁兹垐柌祠茨瓷粢詞辝慈甆辞磁雌鹚糍辤飺餈嬨濨薋鴜礠辭鷀鶿",
  "cǐ": "此佌泚玼皉啙跐鮆",
  "cì": "朿次佽刾庛茦栨莿絘蛓赐螆賜",
  "cōng": "匆囪囱苁忩枞茐怱悤棇焧葱楤漗聡蓯蔥骢暰樅樬潨熜瑽璁聦聪瞛篵聰蟌鍯繱鏓鏦騘驄",
  "cóng": "丛徔従婃孮徖從悰淙琮碂慒漎潀潈誴賨賩樷錝藂叢灇欉爜",
  "cǒng": "",
  "còng": "愡憁謥",
  "cōu": "",
  "cóu": "",
  "cǒu": "",
  "còu": "凑湊傶楱腠辏輳",
  "cū": "怚粗觕麁麄橻麆麤",
  "cú": "徂殂",
  "cǔ": "皻",
  "cù": "促猝脨媨瘄蔟誎趗噈憱踧醋瘯踿簇縬趨鼀蹙蹵蹴顣",
  "cuān": "汆撺鋑镩蹿攛躥鑹",
  "cuán": "濽櫕巑攢灒欑穳",
  "cuàn": "窜殩熶窽篡窾簒竄爨",
  "cuī": "隹崔脺催凗嵟缞墔慛摧榱漼槯磪縗鏙",
  "cuǐ": "漼熣璀趡皠",
  "cuì": "伜忰疩倅粋紣翆脃脆啐啛崒悴淬萃椊毳焠琗瘁粹綷翠膵膬濢竁襊顇臎",
  "cūn": "邨村皴踆澊竴膥",
  "cún": "存侟拵壿澊",
  "cǔn": "刌忖",
  "cùn": "寸吋籿",
  "cuō": "搓瑳遳磋蹉醝鎈",
  "cuó": "虘嵯嵳痤睉矬蒫瘥蔖鹾酂鹺酇",
  "cuǒ": "脞",
  "cuò": "剉剒厝夎挫莡莝庴措逪锉蓌错縒諎銼錯",
  "chā": "扠扱芆臿挿偛嗏插揷馇銟锸艖疀嚓鍤鎈餷",
  "chá": "秅苴垞査茬茶捈梌嵖搽猹靫楂槎詧察摖檫",
  "chǎ": "紁蹅镲鑔",
  "chà": "仛奼汊岔侘衩诧剎姹紁詫",
  "chāi": "芆肞钗釵",
  "chái": "犲侪柴豺祡喍儕",
  "chǎi": "茝",
  "chài": "虿袃訍瘥蠆囆",
  "chān": "辿觇梴搀覘裧摻緂鋓幨襜攙",
  "chán": "苂婵谗單孱棎湹禅馋煘缠僝嶃嶄獑蝉誗鋋儃嬋廛潹潺緾澶磛禪毚螹蟐鄽瀍繟蟬儳劖繵蟾酁嚵壥巉瀺欃纏纒躔镵艬讒鑱饞",
  "chǎn": "产刬旵丳斺浐剗谄啴產産铲阐蒇剷嵼摌滻嘽幝蕆諂閳骣燀簅冁繟醦譂鏟闡囅灛讇",
  "chàn": "忏刬剗硟摲幝幨燀懴儳懺羼韂顫",
  "chāng": "伥昌倀娼淐猖菖阊椙琩裮锠錩閶鲳闛鯧鼚",
  "cháng": "仩仧兏肠苌镸長尝偿常徜瓺萇場甞腸嘗塲嫦瑺膓償嚐鲿鱨",
  "chǎng": "昶惝場敞僘厰塲廠氅鋹",
  "chàng": "怅玚畅鬯唱悵焻瑒暢畼誯韔",
  "chāo": "抄弨怊欩钞訬焯超鈔勦摷綽劋樔窼",
  "cháo": "牊晁巣巢鄛鼌漅樔潮窲罺鼂轈謿",
  "chǎo": "炒眧粆焣煼槱麨巐",
  "chào": "仦仯耖觘",
  "chē": "伡車俥砗唓莗硨蛼",
  "ché": "",
  "chě": "扯偖撦奲",
  "chè": "屮彻呫坼迠烢烲焎聅掣揊硩頙徹摰撤澈勶瞮爡",
  "chen": "伧傖",
  "chēn": "肜抻郴捵棽琛嗔綝瘨瞋諃賝謓",
  "chén": "尘臣忱沉辰陈迧茞宸栕莀莐陳敐晨桭梣訦谌軙愖跈鈂煁蔯塵敶樄瘎霃螴諶薼麎曟鷐",
  "chěn": "趻硶碜墋夦磣踸鍖贂醦",
  "chèn": "衬爯疢龀偁趂趁榇稱齓齔儭嚫穪谶櫬襯讖",
  "chēng": "朾阷泟柽爯凈棦浾琤偁淨碀蛏晿牚搶赪僜憆摚稱靗撐撑緽橖橕瞠赬頳檉竀罉鎗矃穪蟶鏿鐣饓鐺",
  "chéng": "氶丞成朾呈承枨诚郕乗城埩娍宬峸洆荿埕挰晟浧珹掁珵窚脭铖堘惩揨棖椉程筬絾裎塍塖溗誠畻酲鋮憕撜澂橙檙鯎瀓懲騬",
  "chěng": "侱徎悜逞骋庱睈裎騁",
  "chèng": "秤牚稱竀穪",
  "chi": "麶",
  "chī": "吃妛哧彨胵蚩鸱瓻眵笞粚喫訵嗤媸摛痴絺樆噄殦瞝誺噭螭鴟鵄癡魑齝攡彲黐",
  "chí": "弛池驰迟坻沶狋茌迡持柢竾荎俿歭耛菭蚳赿筂貾遅跢遟馳箈箎墀徲漦踟遲篪謘鍉邌鶗鶙",
  "chǐ": "叺伬扡呎肔侈卶齿垑奓拸胣恥耻蚇袳豉欼歯袲裭誃鉹褫齒",
  "chì": "彳叱斥佁杘灻赤饬侙抶勅恜柅炽勑捇眙翄翅敕烾啻湁飭傺痸腟誃鉓雴憏瘈翤遫銐慗慸瘛翨熾懘趩鶒鷘",
  "chōng": "充忡沖茺浺珫翀舂嘃摏徸憃憧衝罿艟蹖",
  "chóng": "虫崈崇痋隀漴褈緟蝩蟲爞",
  "chǒng": "宠埫寵",
  "chòng": "铳揰銃",
  "chou": "鮘",
  "chōu": "抽牰婤掫紬搊跾瘳篘醔犨犫",
  "chóu": "怞俦诪帱栦惆梼畤紬绸菗椆畴絒愁皗稠筹裯詶酧酬綢踌儔雔嚋嬦幬懤盩薵檮燽雠疇籌躊醻讐讎雦",
  "chǒu": "丒丑吜杽杻偢瞅醜矁魗",
  "chòu": "臰遚殠",
  "chu": "橻",
  "chū": "出岀初榋摢摴樗貙櫖齣",
  "chú": "刍除芻耝厨滁蒢豠锄媰耡蒭蜍趎鉏雏犓廚篨鋤橱幮櫉藸蟵躇雛櫥蹰鶵躕",
  "chǔ": "処杵础椘處储楮禇楚褚濋儲檚璴礎齭齼",
  "chù": "亍処竌怵泏绌豖欪炪竐俶敊埱珿絀菆傗鄐慉搐滀触閦儊嘼諔憷斶歜臅黜觸矗",
  "chuā": "欻",
  "chuǎ": "",
  "chuà": "",
  "chuāi": "搋",
  "chuái": "膗",
  "chuǎi": "",
  "chuài": "啜欼膪踹",
  "chuān": "巛川氚穿猭瑏",
  "chuán": "舡舩剶船圌遄傳椯椽歂暷篅膞輲",
  "chuǎn": "舛荈喘堾歂僢踳",
  "chuàn": "汌串玔钏釧猭賗鶨",
  "chuāng": "刅疮窓創窗牎摐牕瘡窻",
  "chuáng": "床牀喠噇朣橦",
  "chuǎng": "闯傸磢闖",
  "chuàng": "怆刱剏剙創愴",
  "chuī": "吹炊龡",
  "chuí": "垂倕埀桘陲捶菙圌搥棰腄槌硾锤箠錘鎚顀",
  "chuǐ": "",
  "chuì": "惙",
  "chūn": "芚旾杶春萅媋暙椿槆瑃箺蝽橁輴櫄鰆鶞",
  "chún": "纯肫陙唇浱純莼脣湻犉滣蒓鹑漘蓴膞醇醕錞鯙鶉",
  "chǔn": "朐偆萶惷睶賰蠢",
  "chuō": "逴趠踔戳繛",
  "chuò": "辶吷辵拺哾娖娕啜婥婼惙涰淖辍酫綽踀箹輟鋜龊擉磭餟繛歠鏃嚽齪鑡孎",
  "da": "繨",
  "dā": "咑哒耷笚嗒搭褡噠墶撘鎝鎉",
  "dá": "达迏迖迚呾妲怛沓垯炟羍荅荙畗剳匒惮畣笪逹溚詚達跶靼憚薘鞑燵蟽鐽韃龖龘",
  "dǎ": "",
  "dà": "亣汏眔",
  "dāi": "呆呔獃懛",
  "dǎi": "歹逮傣",
  "dài": "代诒轪侢垈岱帒甙绐迨带怠柋殆玳贷帯貣軑埭帶紿蚮袋軚逮釱棣詒貸軩瑇跢廗箉叇曃緿蝳駘鮘鴏戴艜黛簤蹛瀻霴襶黱靆",
  "dān": "丹妉単眈砃耼耽郸聃躭酖單媅愖殚瘅匰箪褝鄲頕儋勯擔殫甔癉襌簞聸",
  "dǎn": "伔刐抌玬瓭胆衴疸紞赕亶馾撢撣賧燀黕膽皽黵",
  "dàn": "旦但帎呾沊泹狚诞唌柦疍訑啗啖惔惮淡萏蛋啿弾氮腅蜑觛亶瘅窞蓞誕僤噉馾髧儋嘾彈憚醈憺擔澹禫餤駳鴠癉膻癚嚪繵贉霮饏黮",
  "dāng": "珰裆筜當儅噹澢璫襠簹艡蟷鐺闣",
  "dǎng": "党谠當擋譡黨攩灙欓讜",
  "dàng": "氹凼圵宕砀垱荡档偒菪婸崵愓瓽逿嵣當雼潒碭儅瞊蕩趤壋擋檔璗盪礑簜蘯闣",
  "dāo": "刀刂忉朷氘舠釖鱽裯魛螩",
  "dáo": "捯",
  "dǎo": "导岛陦島捣祷禂搗隝嘄嶋嶌槝導隯壔嶹擣蹈檮禱",
  "dào": "辺到帱悼梼焘盗菿椡盜絩道稲箌翢噵稻艔衜檤衟幬燾翿軇瓙纛",
  "de": "旳",
  "dē": "嘚",
  "dé": "恴淂蚮悳惪棏锝徳德鍀",
  "dēi": "嘚",
  "děi": "",
  "dèn": "扥扽",
  "dēng": "灯登豋僜噔嬁燈璒竳簦艠蹬",
  "děng": "等戥",
  "dèng": "邓凳鄧隥墱嶝憕瞪磴镫櫈瀓覴鐙",
  "dī": "氐仾低奃岻彽秪袛啲埞羝隄堤渧趆滴碮樀磾鞮鏑",
  "dí": "扚廸旳狄肑籴苖迪唙敌浟涤荻啇梑笛觌靮滌蓧馰髢嘀嫡翟蔋蔐頔敵篴镝嚁藡豴蹢鏑糴覿鸐",
  "dǐ": "氐厎坘诋邸阺呧坻弤抵拞枑柢牴砥掋菧觝詆軧楴聜骶鯳",
  "dì": "坔旳杕玓怟枤苐俤哋埅帝埊娣逓递偙梊焍珶眱祶第菂谛釱媂揥棣渧睇缔蒂遆僀楴禘腣遞鉪墆墑墬嵽摕疐碲蔕蝃遰慸甋締蝭嶳諦諟踶螮",
  "diǎ": "嗲",
  "diān": "佔敁掂傎厧嵮滇槇槙瘨窴颠蹎巅顚顛癫巓攧巔癲齻",
  "dián": "",
  "diǎn": "典奌点婰敟椣跕碘蒧蕇踮點嚸",
  "diàn": "电阽坫店垫扂玷痁钿婝惦淀奠琔殿痶蜔鈿電墊壂橂橝澱靛磹癜簟驔",
  "diāo": "刁叼汈刟虭凋奝弴彫蛁椆琱貂碉鳭瞗錭雕鮉鲷簓鼦鯛鵰",
  "diǎo": "扚屌鳥",
  "diào": "弔伄吊钓盄窎訋掉釣铞铫絩鈟竨蓧誂銚銱雿魡調瘹窵鋽藋鑃",
  "diē": "爹跌褺",
  "dié": "佚怢泆苵迭咥垤峌恎挕昳柣绖胅瓞眣耊啑戜眰谍喋堞崼幉惵揲畳絰耋臷詄趃跕軼镻叠楪殜牃牒跮嵽碟蜨褋槢艓蝶疂諜蹀鴩螲鲽鞢曡疉鰈疊氎",
  "diě": "",
  "diè": "哋",
  "dīng": "仃叮奵帄玎甼町疔盯耵虰酊釘靪",
  "dǐng": "奵艼顶酊頂鼎嵿鼑濎薡鐤",
  "dìng": "订忊饤矴定訂釘飣啶掟萣铤椗腚碇锭碠聢蝊鋌錠磸顁",
  "diū": "丟丢铥颩銩",
  "dōng": "东冬咚岽東苳昸氡倲鸫埬娻崬崠涷笗菄徚氭蝀鮗鼕鯟鶇鶫",
  "dǒng": "揰董墥嬞懂箽蕫諌",
  "dòng": "动冻侗垌姛峒恫挏栋洞狪胨迵凍戙烔胴動娻崠硐棟湩絧腖働勭燑駧霘",
  "dōu": "吺枓侸唗兜兠蔸橷瞗篼",
  "dóu": "唞",
  "dǒu": "乧阧抖钭陡蚪鈄",
  "dòu": "吋豆郖浢狵荳逗饾鬥梪毭渎脰酘痘閗窦鬦鋀餖斣瀆闘竇鬪鬬鬭",
  "dū": "厾剢阇嘟督醏闍",
  "dú": "独涜渎椟牍犊裻読獨錖凟匵嬻瀆櫝殰牘犢瓄皾騳黩讀豄贕韣髑鑟韇韥黷讟",
  "dǔ": "竺笃堵暏琽赌睹覩賭篤",
  "dù": "芏妒杜妬姤荰秺晵渡靯镀螙斁殬鍍蠧蠹",
  "duān": "耑偳剬媏端褍鍴",
  "duǎn": "短",
  "duàn": "段断塅缎葮椴煅瑖腶碫锻緞毈簖鍛斷躖籪",
  "duī": "垖堆塠痽磓镦鴭鐓鐜",
  "duǐ": "啍頧",
  "duì": "队对兊兌対杸祋怼陮敓敚隊碓綐對憞憝濧濻薱懟瀢瀩譈譵轛",
  "dūn": "吨惇蜳墪墫墩撴獤噸撉橔犜礅蹾蹲驐",
  "dǔn": "盹趸躉",
  "dùn": "伅坉庉忳沌炖盾砘逇钝顿遁鈍楯頓碷遯憞潡燉踲",
  "duo": "",
  "duō": "夛多咄哆畓剟掇敠敪毲裰跢嚉",
  "duó": "仛夺沰铎剫敓敚喥痥鈬奪凙踱鐸",
  "duǒ": "朵朶哚垜挆埵崜缍袳椯硾趓躱躲綞亸軃鬌嚲奲",
  "duò": "杕杝刴剁枤沲陊陏饳垜尮挆挅柁柂柮桗舵隋媠惰隓跢跥跺飿馱墮憜駄墯隳鵽",
  "ē": "妸妿娿婀屙痾",
  "é": "讹吪囮迗俄峉哦娥峩峨涐莪珴訛皒睋鈋锇鹅磀誐鋨頟额魤額鵞鵝譌",
  "ě": "枙娿砨惡頋噁騀鵈",
  "è": "厄戹歺岋阨呃扼苊阸呝枙砐轭咢咹垩姶洝砈匎敋蚅饿偔卾堊娾悪硆谔軛鄂阏堮堨崿惡愕湂萼豟軶遌遏鈪廅搕搤搹琧痷腭僫蝁锷鹗蕚遻頞颚餓噩擜覨諤閼餩鍔鳄歞顎礘櫮鰐鶚鰪讍齃鑩齶鱷",
  "ēi": "诶欸誒",
  "éi": "诶欸誒",
  "ěi": "诶欸誒",
  "èi": "诶欸誒",
  "ēn": "奀恩蒽煾",
  "ěn": "峎",
  "èn": "摁",
  "ēng": "鞥",
  "ér": "儿而児杒侕兒陑峏洏耏荋栭胹唲梕袻鸸粫聏輀鲕隭髵鮞鴯轜",
  "ěr": "尒尓尔耳迩洱饵栮毦珥铒衈爾鉺餌駬薾邇趰",
  "èr": "二弍弐佴刵咡贰貮貳誀樲髶",
  "fā": "冹沷発發彂醗醱",
  "fá": "乏伐姂坺垡浌疺罚茷阀栰笩傠筏瞂罰閥墢罸橃藅",
  "fǎ": "佱法峜砝鍅灋",
  "fà": "珐琺髪蕟髮",
  "fān": "帆忛犿拚畨勫噃嬏幡憣旙旛繙翻藩轓颿籓飜鱕",
  "fán": "凢凣凡匥杋柉矾籵钒舤烦舧笲釩棥煩緐墦樊蕃燔璠膰薠襎羳蹯瀿礬蘩鐇鐢蠜鷭",
  "fǎn": "反払仮返橎",
  "fàn": "氾犯奿汎泛饭范贩畈訉軓婏桳梵盕笵販軬飰飯滼嬎範輽瀪",
  "fāng": "匚方邡汸芳枋牥祊钫淓蚄堏趽鈁錺鴋",
  "fáng": "防妨房肪埅鲂魴",
  "fǎng": "仿访彷纺昉昘瓬眆倣旊眪紡舫訪髣鶭",
  "fàng": "放趽",
  "fēi": "飞妃非飛啡婓婔渄绯扉斐暃猆靟裶緋蜚霏鲱餥馡騑騛鯡飝",
  "féi": "肥疿淝腓痱蜰",
  "fěi": "朏胐匪诽奜悱斐棐榧翡蕜誹篚",
  "fèi": "吠犻芾废杮柹沸狒肺胏昲胇费俷剕厞疿砩陫屝笰萉廃費痱镄廢曊橃橨癈鼣濷蟦櫠鐨靅",
  "fēn": "吩帉纷芬昐氛玢砏竕衯紛翂梤棻訜躮酚鈖雰馚朆餴饙",
  "fén": "坆坟妢岎汾朌枌炃羒蚠蚡棼焚蒶隫墳幩濆獖蕡魵鳻橨燌燓豮鼢羵鼖豶轒鐼馩黂",
  "fěn": "粉黺",
  "fèn": "坋弅奋忿秎偾愤粪僨憤獖瞓奮橨膹糞鲼瀵鱝",
  "fēng": "丰仹凨凬夆妦沣沨凮枫炐封疯盽砜風埄峰峯莑偑桻烽琒堼崶渢猦葑锋楓犎蜂熢瘋碸僼篈鄷鋒檒豐鎽鏠酆寷灃蘴霻蠭靊飌麷",
  "féng": "夆浲逢堸溄馮摓漨綘艂縫",
  "fěng": "讽風覂唪諷",
  "fèng": "凤奉俸桻湗焨煈赗鳯鳳鴌縫賵",
  "fó": "仏仸坲梻",
  "fōu": "",
  "fóu": "紑",
  "fǒu": "缶妚炰缹缻殕雬鴀",
  "fū": "伕邞呋妋抙姇枎玞肤怤柎砆胕荂衭娐尃捊荴旉琈紨趺酜麸稃跗鈇筟綒鄜孵粰蓲敷膚鳺麩糐麬麱懯璷",
  "fú": "乀巿弗払伏凫甶刜孚扶芣芙芾咈姇宓岪帗怫枎泭绂绋苻茀俘垘枹柫柭氟洑炥玸畉畐祓罘胕茯郛韨鳬哹垺栿浮畗砩莩蚨袚匐桴涪烰琈符笰紱紼翇艴菔虙袱幅棴絥罦葍福綍艀蜉辐鉘鉜颫鳧榑稪箁箙粰褔豧韍颰幞澓蝠髴鴔諨踾輻鮄癁襆鮲黻襥鵩纀鶝",
  "fǔ": "阝呒抚甫乶府弣拊斧俌俛柎郙俯蚥釡釜捬脯辅椨焤盙腑滏蜅腐輔嘸撫頫鬴簠黼",
  "fù": "讣付妇负附咐坿彿竎阜驸复峊柎洑祔訃負赴蚥袝偩冨婏婦捬紨蚹傅媍富復秿萯蛗覄詂赋椱缚腹鲋榑禣複褔赙緮蕧蝜蝮賦駙嬔縛輹鮒賻鍑鍢鳆覆馥鰒",
  "gā": "旮伽夾嘎嘠",
  "gá": "钆軋尜釓嘎嘠噶錷",
  "gǎ": "尕玍朒嘎嘠",
  "gà": "尬魀",
  "gāi": "侅该郂陔垓姟峐荄晐赅畡祴絯隑該豥賅賌",
  "gǎi": "忋改絠",
  "gài": "丐乢匄匃杚钙摡溉葢鈣戤概槩蓋漑槪瓂",
  "gān": "甘忓迀攼玕肝咁坩泔矸苷柑玵竿疳酐粓凲尲尴筸漧鳱尶尷魐",
  "gǎn": "仠芉皯秆衦赶敢桿稈感澉趕橄擀澸篢簳鳡鱤",
  "gàn": "佄旰汵盰绀倝凎淦紺詌骭幹榦檊簳贑赣贛灨",
  "gāng": "冈冮刚纲肛岡牨疘矼缸剛罡堈崗掆釭棡犅堽摃碙綱罁鋼鎠",
  "gǎng": "岗犺崗",
  "gàng": "焵焹筻槓鋼戅戆戇",
  "gāo": "皋羔羙高皐髙臯睪槔睾槹獋橰篙糕餻櫜韟鷎鼛鷱",
  "gǎo": "夰杲菒稁搞缟槀槁稾稿镐縞藁檺藳鎬",
  "gào": "吿告勂诰郜峼祮祰锆筶禞誥鋯",
  "gē": "戈仡圪扢犵纥戓肐牫咯紇饹哥袼鸽割彁滒戨歌鴚擱謌鴿鎶",
  "gé": "呄佮佫匌挌阁革敋格鬲愅猲臵蛒裓隔颌嗝塥滆觡搿槅膈閣閤獦镉鞈韐骼臈諽輵擱鮥鮯櫊鎑鎘韚轕鞷騔",
  "gě": "個哿笴舸嘅嗰蓋鲄",
  "gè": "亇吤茖虼個硌铬箇鉻",
  "gěi": "給",
  "gēn": "根跟",
  "gén": "哏",
  "gěn": "",
  "gèn": "亙亘艮茛揯搄",
  "gēng": "刯庚畊浭耕菮椩焿絙絚赓鹒緪縆羮賡羹鶊",
  "gěng": "郠哽埂峺挭绠耿莄梗綆鲠骾鯁",
  "gèng": "堩緪縆",
  "gōng": "工弓公厷功攻杛侊糿糼肱宫紅宮恭躬龚匑塨幊愩觥躳慐匔碽篢髸觵龏龔",
  "gǒng": "廾巩汞拱唝拲栱珙嗊輁澒銾鞏",
  "gòng": "贡羾唝貢嗊愩慐熕",
  "gōu": "佝沟芶钩痀袧缑鈎溝鉤緱褠篝簼鞲韝",
  "gǒu": "芶岣狗苟枸玽耉耇笱耈蚼豿",
  "gòu": "呴坸构诟购垢姤冓啂夠够傋訽媾彀搆詬遘雊構煹觏撀糓覯購",
  "gū": "杚呱咕姑孤沽泒苽巭巬柧轱唃唂罛鸪笟菇菰蛄蓇觚軱軲辜酤稒鈲磆箍箛嫴篐橭鮕鴣",
  "gú": "",
  "gǔ": "夃古扢抇汩诂谷股牯罟羖逧钴傦啒淈脵蛊嗗尳愲詁馉毂賈鈷鼔鼓嘏榖皷鹘穀縎糓薣濲皼臌轂餶櫎瀔盬瞽鶻蠱",
  "gù": "固怘故凅顾堌崓崮梏牿棝祻雇榾痼锢僱錮鲴鯝顧",
  "guā": "瓜刮呱胍栝桰铦鸹歄煱颪趏劀緺銛諣踻銽颳鴰騧",
  "guá": "",
  "guǎ": "冎叧呙呱咼剐剮寡",
  "guà": "卦坬诖挂啩掛罣袿絓罫褂詿",
  "guāi": "乖",
  "guái": "叏",
  "guǎi": "拐枴柺罫箉",
  "guài": "夬怪恠",
  "guān": "关纶官矜覌倌矝莞涫棺蒄窤閞綸関瘝癏観闗鳏關鰥觀鱞",
  "guǎn": "莞馆琯痯筦斡管輨璭舘錧館鳤",
  "guàn": "卝毌丱贯泴覌悺惯掼淉貫悹祼慣摜潅遦樌盥罆雚観躀鏆灌爟瓘矔礶鹳罐觀鑵欟鱹鸛",
  "guāng": "光灮炚炛炗咣垙姯挄洸茪桄烡珖胱硄僙輄潢銧黆",
  "guǎng": "広犷廣獷臩",
  "guàng": "俇桄逛臦撗",
  "guī": "归圭妫规邽皈茥闺帰珪胿亀硅窐袿規媯廆椝瑰郌嫢摫閨鲑嬀嶲槣槻槼鳺璝瞡龜鮭巂歸雟鬶騩櫰櫷瓌蘬鬹",
  "guǐ": "宄氿朹轨庋佹匦诡陒垝姽恑攱癸軌鬼庪祪軓匭晷湀蛫觤詭厬簋蟡",
  "guì": "攰刿刽昋炅攱贵桂桧匮眭硊趹椢猤筀貴溎蓕跪匱瞆劊劌嶡撌槶螝樻檜瞶禬簂櫃癐襘鐀鳜鞼鑎鱖鱥",
  "gǔn": "丨衮惃硍绲袞辊滚蓘裷滾緄蔉磙緷輥鲧鮌鯀",
  "gùn": "睔謴",
  "guo": "",
  "guō": "呙咼咶埚郭啯堝崞渦猓楇聒鈛锅墎瘑嘓彉濄蝈鍋彍蟈懖矌",
  "guó": "囗囯囶囻国圀敋喐國帼掴腘摑幗慖漍聝蔮膕虢簂馘",
  "guǒ": "果惈淉菓馃椁褁槨粿綶蜾裹輠餜櫎",
  "guò": "過腂鐹",
  "hā": "虾紦铪鉿蝦",
  "há": "",
  "hǎ": "奤",
  "hà": "",
  "hāi": "咍嗨",
  "hái": "郂孩骸還嚡",
  "hǎi": "海胲烸塰酼醢",
  "hài": "亥妎拸骇害氦猲絯嗐餀駭駴饚",
  "han": "兯爳",
  "hān": "犴佄顸哻蚶酣頇嫨谽憨馠魽歛鼾",
  "hán": "邗含汵邯函肣凾虷唅圅娢浛笒崡晗梒涵焓琀寒嵅韩椷甝筨馯蜬澏鋡韓",
  "hǎn": "丆罕浫喊豃闞",
  "hàn": "仠厈汉屽忓扞闬攼旰旱肣唅垾悍捍涆猂莟晘焊菡釬閈皔睅傼蛿颔馯撖漢蔊蜭鳱暵熯輚銲鋎憾撼翰螒頷顄駻譀雗瀚鶾",
  "hāng": "",
  "háng": "邟妔苀迒斻杭垳绗桁笐航蚢颃裄貥筕絎頏魧",
  "hàng": "忼沆笐",
  "hāo": "茠蒿嚆薅薧",
  "háo": "乚毜呺竓皋蚝毫椃嗥獆號貉噑獔豪嘷獋諕儫嚎壕濠籇蠔譹",
  "hǎo": "郝",
  "hào": "昊侴昦秏哠恏悎浩耗晧淏傐皓鄗滈滜聕號暠暤暭澔皜皞镐曍皡薃皥藃鎬颢灏顥鰝灝",
  "hē": "诃抲欱訶嗬蠚",
  "hé": "禾纥呙劾咊咼姀河郃峆曷柇狢盇籺紇阂饸敆盉盍荷釛啝涸渮盒菏萂龁喛惒粭訸颌楁毼澕蓋詥貈貉鉌阖鲄朅熆閡閤餄鹖麧噈頜篕翮螛魺礉闔鞨齕覈鶡皬鑉龢",
  "hě": "",
  "hè": "咊抲垎贺哬袔隺寉焃惒猲賀嗃煂碋熇褐赫鹤翯嚇壑癋謞燺爀鶮鶴靍靎鸖靏",
  "hēi": "黒黑嗨潶",
  "hén": "拫痕鞎",
  "hěn": "佷哏很狠詪噷",
  "hèn": "恨噷",
  "hēng": "亨哼悙涥脝",
  "héng": "姮恆恒桁烆珩胻鸻撗橫衡鴴鵆蘅鑅",
  "hèng": "悙啈橫",
  "hng": "哼",
  "hōng": "叿吽呍灴轰訇烘軣揈渹焢硡谾薨輷嚝鍧巆轟",
  "hóng": "厷仜弘叿妅屸吰宏汯玒瓨纮闳宖泓玜苰垬娂沗洪竑紅羾荭虹浤浲紘翃耾硔紭谹鸿渱溄竤粠葓葒鈜閎綋翝谼潂鉷鞃魟篊鋐彋霐黉霟鴻黌",
  "hǒng": "唝晎嗊愩慐",
  "hòng": "讧訌閧撔澒銾蕻闂鬨闀",
  "hōu": "齁",
  "hóu": "矦鄇喉帿猴葔瘊睺銗篌糇翭骺翵鍭餱鯸",
  "hǒu": "吼吽犼呴",
  "hòu": "后郈厚垕後洉矦茩逅候堠豞鲎鲘鮜鱟",
  "hū": "乎乯匢虍芴呼垀忽昒曶泘苸恗烀芔轷匫唿惚淴虖軤雽嘑寣滹雐幠戯歑戱膴戲謼",
  "hú": "囫抇弧狐瓳胡壶隺壷斛焀喖壺媩搰湖猢絗葫鹄楜煳瑚瓡嘝蔛鹕鹘槲箶縎蝴衚魱縠螜醐頶觳鍸餬礐鵠瀫鬍鰗鶘鶦鶻鶮",
  "hǔ": "乕汻虎浒俿淲萀琥虝滸錿鯱",
  "hù": "互弖戶戸户冱芐帍护沍沪岵怙戽昈曶枑姱怘祜笏粐婟扈瓠楛嗃嗀綔鄠雽嫭嫮摢滬蔰槴熩鳸濩簄豰鍙嚛鹱觷護鳠頀鱯鸌",
  "huā": "吪芲花砉埖婲華椛硴蒊嘩糀誮錵蘤",
  "huá": "呚姡骅華釪釫铧滑猾嘩搳撶劃磆蕐螖鋘譁鏵驊鷨",
  "huà": "夻杹枠画话崋桦華婳畫嬅畵觟話劃摦樺嫿槬澅諙諣黊繣舙譮",
  "huái": "怀佪徊淮槐褢踝懐褱懷瀤櫰耲蘹",
  "huài": "咶壊壞蘾",
  "huān": "欢犿狟貆歓鴅懁鵍酄嚾孉懽獾歡讙貛驩",
  "huán": "环郇峘洹狟荁垸桓萈萑堚寏絙雈獂綄羦蒝貆锾瞏圜嬛寰澴缳還阛環豲鍰雚镮鹮糫繯鐶闤鬟瓛",
  "huǎn": "睆缓緩",
  "huàn": "幻奂肒奐宦唤换浣涣烉患梙焕逭喚喛嵈愌換渙痪煥瑍綄豢漶瘓槵鲩擐澣藧鯇攌嚾轘鯶鰀",
  "huāng": "巟肓荒衁宺朚塃慌",
  "huáng": "皇偟凰隍黄喤堭媓崲徨惶揘湟葟遑黃楻煌瑝墴潢獚锽熿璜篁艎蝗癀磺穔諻簧蟥鍠餭鳇趪韹鐄騜鰉鱑鷬",
  "huǎng": "汻怳恍炾宺晄奛谎幌詤熀熿縨謊兤櫎爌",
  "huàng": "愰滉榥曂皝鎤皩",
  "hui": "",
  "huī": "灰灳诙咴恢拻挥洃虺袆晖烣珲豗婎媈揮翚辉隓暉椲楎煇琿睢禈詼墮幑睳褘噅噕撝翬輝麾徽隳瀈蘳孈鰴",
  "huí": "囘回囬佪廻廽恛洄茴迴烠蚘逥痐缋蛕蛔蜖藱鮰繢",
  "huǐ": "虺悔烠毀毁螝毇檓燬譭",
  "huì": "卉屷屶汇讳泋哕浍绘芔荟诲恚恵桧烩贿彗晦秽喙廆惠湏絵缋翙阓匯彚彙會滙詯賄颒僡嘒瘣蔧誨銊圚寭慧憓暳槥潓潰蕙噦嬒徻橞殨澮濊獩璤薈薉諱頮檅檜燴璯篲藱餯嚖懳瞺穢繢蟪櫘繪翽譓儶鏸闠鐬靧譿顪",
  "hūn": "昏昬荤婚惛涽焄阍棔殙湣葷睧睯蔒閽轋",
  "hún": "忶浑珲馄渾湷琿魂餛鼲",
  "hǔn": "",
  "hùn": "诨俒眃倱圂婫掍焝溷尡慁睴觨諢",
  "huō": "吙秴耠劐攉騞",
  "huó": "佸姡活秮秳趏",
  "huǒ": "灬火伙邩钬鈥漷煷夥",
  "huò": "沎或货咟俰捇眓获閄剨喐掝祸貨惑旤湱禍漷窢蒦锪嚄奯擭濊濩獲篧鍃霍檴謋雘矆礊穫镬嚯彟瀖耯艧藿蠖嚿曤臛癨矐鑊韄靃彠",
  "jī": "丌讥击刉叽饥乩刏圾机玑肌芨矶鸡枅苙咭剞唧姬屐积笄飢基庴喞嵆嵇幾攲敧朞犄筓缉赍嗘畸稘跻鳮僟毄箕綨緁銈嘰撃槣樭畿緝觭諅賫踑躸齑墼撽機激璣禨積錤隮懠擊磯簊羁賷櫅耭雞譏韲鶏譤鐖饑癪躋鞿魕鶺鷄羇虀鑇覉鑙齏羈鸄覊",
  "jí": "乁亽亼及尐伋吉岌彶忣汲级即极皀亟佶诘郆卽叝姞急皍笈級堲揤疾觙偮卙唶楖淁焏谻戢棘極殛湒集塉嫉愱楫蒺蝍趌辑槉耤膌銡嶯潗濈瘠箿蕀蕺諔趞踖鞊鹡檝螏輯磼簎藉襋蹐鍓艥籍轚鏶霵齎躤雧",
  "jǐ": "己丮妀屰犱泲虮挤脊掎済鱾幾戟給嵴麂魢撠憿橶擠濟穖蟣",
  "jì": "彐彑旡计记伎坖妓忌技汥芰际剂季哜垍既洎紀茍茤荠計迹剤畟紒继觊記偈寄寂帺徛悸旣梞済绩塈惎臮葪蔇兾勣痵継蓟裚跡際鬾魝摖暨漃漈禝稩穊誋跽霁魥鲚暩瞉稷諅鲫冀劑曁禨穄薊襀髻嚌懠檕濟穖績繋罽薺覬鮆檵櫅櫭璾蹟鯽鵋齌廭懻癠穧繫蘎骥鯚瀱繼蘮鱀蘻霽鰶鰿鷑鱭驥",
  "jia": "",
  "jiā": "加乫伽夾宊抸佳拁泇徍枷毠浃珈哿埉挾浹痂梜笳耞袈傢猳葭跏椵犌腵鉫嘉擖镓糘豭貑鴐鎵麚",
  "jiá": "圿夾忦扴郏拮荚郟唊恝莢戛脥袷铗戞猰蛱裌颉颊蛺鋏頬頰鴶鵊",
  "jiǎ": "甲岬叚玾胛斚钾婽徦斝椵賈鉀榎槚瘕檟",
  "jià": "驾架嫁幏賈榢價稼駕",
  "jiān": "戋奸尖幵坚歼冿戔玪肩艰姧姦兼堅帴惤猏笺菅菺豜傔揃湔牋犍缄葌閒間雃靬搛椷椾煎瑊睷碊缣蒹豣漸監箋蔪樫熞稴緘蕑蕳鋑鲣鳽鹣熸篯縑鋻艱鞬餰馢麉瀐濺鞯鳒鵑殱礛籈鵳攕瀸鰔櫼殲譼鰜鶼礷籛韀鰹囏虃鑯韉",
  "jiǎn": "囝拣枧俭柬茧倹挸捡笕减剪帴揵梘检湕趼堿揀揃検減睑硷裥詃锏弿暕瑐筧简絸谫彅戩戬碱儉翦鋄撿橏篯檢藆襇襉謇蹇瞼礆簡繭謭鎫鬋鰎鹸瀽蠒鐗鐧鹻籛譾襺鹼",
  "jiàn": "件見侟建饯剑洊牮荐贱俴健剣栫涧珔舰剱徤揵袸谏釰釼寋旔朁楗毽腱臶跈践閒間賎鉴键僣僭榗槛漸監劎劍墹澗箭糋諓賤趝踐踺劒劔薦諫鋻鍵餞瞷瞯磵礀螹鍳鞬擶檻濺繝瀳覵覸譛鏩聻艦轞鐱鑒鑑鑬鑳",
  "jiāng": "江姜茳畕豇將葁畺摪翞僵漿螀壃缰薑橿殭螿鳉疅礓繮韁鱂",
  "jiǎng": "讲奖桨傋塂蒋奨奬蔣槳獎耩膙講顜",
  "jiàng": "匞匠夅弜洚绛將弶強絳畺酱勥滰嵹摾漿彊犟糡醤糨醬櫤謽",
  "jiāo": "艽交郊姣娇峧浇茮茭骄胶敎喬椒焦蛟跤僬嘐虠鲛嬌嶕嶣憍憢澆膠蕉燋膲礁穚鮫鵁鹪簥蟭轇鐎驕鷦鷮",
  "jiáo": "矯",
  "jiǎo": "臫佼恔挢狡绞饺捁晈烄笅皎脚釥铰搅湫筊絞勦敫湬煍腳賋僥摎摷暞踋鉸餃儌劋徺撟撹樔徼憿敽敿燞曒璬矯皦蟜繳譑孂纐攪灚鱎龣",
  "jiào": "叫呌峤挍訆悎珓窌笅轿较敎斍覐窖筊覚滘較嘂嘄嘦斠漖酵噍嶠潐噭嬓徼獥癄藠趭轎醮灂覺譥皭釂",
  "jie": "價",
  "jiē": "阶疖哜皆袓接掲痎秸菨階喈喼嗟堦媘嫅椄湝結脻街裓楬煯瑎稭鞂擑蝔嚌癤謯鶛",
  "jié": "卩卪孑尐讦扢刧刦劫岊昅杢刼劼杰疌衱诘拮洁狤迼倢桀桔桝洯紒莭訐偈偼啑婕崨捷掶袷袺傑媫嵑結絜蛣颉嵥搩楶滐睫節蜐詰趌跲鉣截榤碣竭蓵鲒嶱潔羯誱踕镼鞊頡幯擳嶻擮礍鍻鮚巀蠞蠘蠽",
  "jiě": "姐毑媎觧飷檞",
  "jiè": "丯介吤妎岕庎戒屆届斺玠畍界疥砎衸诫借悈紒蚧唶徣堺楐琾蛶觧骱犗耤誡褯魪嶰藉鎅鶡",
  "jīn": "巾今仐斤钅竻釒金津矜砛荕衿觔埐珒矝紟惍琎菳堻琻筋釿璡鹶黅襟",
  "jǐn": "侭卺巹紧堇婜菫僅厪谨锦嫤廑慬漌緊蓳馑槿瑾儘錦謹饉",
  "jìn": "伒劤妗近进枃勁浕荩晉晋浸烬笒紟赆唫祲進煡臸僅寖搢溍缙靳墐嫤慬榗瑨盡馸僸凚歏殣觐噤嬐濅縉賮嚍壗嬧濜藎燼璶覲贐齽",
  "jīng": "坕坙巠京泾经茎亰秔荊荆涇粇婛惊旍旌猄経菁晶稉腈葏睛粳經兢箐精綡聙鋞橸鲸鯨鶁鶄麖鼱驚麠",
  "jǐng": "井丼阱刭坓宑汫汬肼剄穽殌儆頚幜憬擏澋璄憼暻璟璥頸蟼警",
  "jìng": "劤妌弪径迳俓勁婙浄胫倞凈弳徑痉竞莖逕婧桱梷殑淨竟竫脛敬痙竧靓傹靖境獍誩踁静靚憼曔镜靜瀞鵛鏡競竸",
  "jiōng": "冂冋坰扃埛扄浻絅銄駉駫蘏蘔",
  "jiǒng": "冏囧泂炅迥侰炯逈浻烱絅煚窘颎綗臦僒煛熲澃褧燛顈臩",
  "jiòng": "",
  "jiū": "丩勼纠朻牞究糺鸠糾赳阄萛啾揂揪剹揫鳩摎稵樛鬏鬮",
  "jiú": "",
  "jiǔ": "九乆久乣氿奺汣杦灸玖糺舏韭紤酒镹韮",
  "jiù": "匛旧臼咎疚柩柾倃捄桕匓厩救就廄廐舅僦廏慦殧舊鹫匶鯦麔欍齨鷲",
  "jū": "凥伡抅車匊居岨泃狙苴驹俥毩疽眗砠罝陱娵婮崌掬梮涺揟椐毱琚腒趄跔跙锔裾雎艍蜛諊踘躹鋦駒據鋸鮈鴡檋鞠鞫鶋",
  "jú": "局泦侷狊挶桔啹婅淗焗菊郹椈湨犑輂僪粷蓻跼閰趜鋦橘駶繘鵙蹫鵴巈蘜鶪鼰鼳驧",
  "jǔ": "咀岨弆举枸矩莒挙椇筥榉榘蒟龃聥舉踽擧櫸齟欅襷",
  "jù": "巨乬巪讵姖岠怇拒洰苣邭具怐怚拠昛歫炬珇秬钜俱倨倶剧烥粔耟蚷袓埧埾惧詎距焣犋跙鉅飓蒩虡豦锯寠愳窭聚駏劇勮屦踞鮔壉懅據澽窶螶遽鋸屨颶瞿貗簴躆醵忂懼鐻",
  "juān": "姢勌娟捐涓朘梋焆瓹脧圏裐鹃勬鋑鋗镌鞙鎸鐫蠲",
  "juǎn": "呟巻帣埍捲菤锩臇錈闂",
  "juàn": "奆劵奍巻帣弮倦勌悁桊狷绢隽婘惓淃瓹眷鄄圏棬椦睊絭罥腃雋睠絹飬慻蔨嶲鋗餋獧縳巂羂讂",
  "juē": "噘撅撧屩屫",
  "jué": "亅孒孓决刔氒诀吷妜弡抉決芵叕泬玨玦挗珏疦砄绝虳埆捔欮蚗袦崫崛掘斍桷覐觖訣赽趹傕厥焳矞絕絶覚趉鈌劂瑴谲駃噊嶡嶥憰撅熦爴獗瘚蕝蕨觮鴂鴃噱壆憠橜橛燋璚爵臄镢櫭繘蟨蟩爑譎蹷蹶髉匷矍覺鐍鐝鳜灍爝觼穱彏戄攫玃鷢矡貜躩钁",
  "juě": "蹶",
  "juè": "誳",
  "jūn": "军君均汮姰袀軍钧莙蚐桾皲鈞碅筠皸皹覠銁銞鲪頵麇龜鍕鮶麏麕",
  "jǔn": "",
  "jùn": "呁俊郡陖埈峻捃浚隽馂骏晙焌珺棞畯竣葰雋儁箘箟蜠賐寯懏餕燇濬駿鵘鵔鵕攈攟",
  "kā": "喀",
  "kǎ": "佧咔咯垰胩裃鉲",
  "kāi": "开奒揩锎開鐦",
  "kǎi": "凯剀垲恺闿豈铠凱剴嘅慨蒈塏嵦愷輆暟锴鍇鎧闓颽",
  "kài": "忾炌欯欬烗勓愒愾濭鎎",
  "kān": "刊栞勘龛堪嵁戡龕",
  "kǎn": "凵冚坎扻侃砍莰偘埳惂欿歁槛輡檻顑竷轗",
  "kàn": "衎崁墈阚瞰磡闞竷鬫矙",
  "kāng": "忼闶砊粇康閌嫝嵻慷漮槺穅糠躿鏮鱇",
  "káng": "",
  "kǎng": "",
  "kàng": "亢伉匟邟囥抗犺闶炕钪鈧閌",
  "kāo": "尻嵪髛",
  "kǎo": "丂攷考拷洘栲烤薧",
  "kào": "洘铐犒銬鲓靠鮳鯌",
  "kē": "匼柯牁牱珂科轲疴砢趷钶蚵铪嵙棵痾萪軻颏嗑搕犐稞窠鈳榼薖鉿颗樖瞌磕蝌頦窼醘顆髁礚",
  "ké": "殻揢殼翗",
  "kě": "岢炣渇嵑敤渴軻閜磆嶱",
  "kè": "克刻剋勀勊客峇恪娔尅悈袔课堁氪骒愘硞缂衉嗑愙歁溘锞碦緙艐課濭錁礊騍",
  "kēi": "剋尅",
  "kēn": "",
  "kěn": "肎肯肻垦恳啃龂豤貇龈墾錹懇",
  "kèn": "珢掯硍裉褃",
  "kēng": "劥阬坈坑妔挳硁殸牼揁硜铿硻摼誙銵鍞鏗",
  "kěng": "硻",
  "kōng": "倥埪崆悾涳椌硿箜躻錓鵼",
  "kǒng": "孔倥恐悾",
  "kòng": "矼控羫鞚",
  "kōu": "抠芤眍眗剾彄摳瞘",
  "kǒu": "口劶竘",
  "kòu": "叩扣佝怐敂冦宼寇釦窛筘滱蔲蔻瞉簆鷇",
  "kū": "扝刳矻郀朏枯胐哭桍秙窋堀圐跍窟骷鮬",
  "kú": "",
  "kǔ": "狜苦楛",
  "kù": "库俈绔庫捁秙焅袴喾硞絝裤瘔酷廤褲嚳",
  "kuā": "咵姱恗晇絓舿誇",
  "kuǎ": "侉垮楇銙",
  "kuà": "胯趶誇跨骻",
  "kuǎi": "蒯擓",
  "kuài": "巜凷圦块快侩郐哙浍狯脍欳塊蒉會筷駃鲙儈墤鄶噲廥澮獪璯膾旝糩鱠",
  "kuān": "宽寛寬臗髋鑧髖",
  "kuǎn": "梡欵款歀窽窾",
  "kuàn": "",
  "kuāng": "匡迋劻诓邼匩哐恇洭硄筐筺誆軭",
  "kuáng": "忹抂狅狂诳軖軠誑鵟",
  "kuǎng": "夼儣懭",
  "kuàng": "卝丱邝圹纩况旷岲況矿昿贶框眖砿眶絋絖貺軦鉱鋛鄺壙黋懬曠爌矌礦穬纊鑛",
  "kuī": "亏刲岿悝盔窥聧窺虧顝闚巋",
  "kuí": "奎晆逵鄈隗馗喹揆葵骙戣暌楏楑魁睽蝰頯櫆藈鍨鍷騤夔蘷巙虁犪躨",
  "kuǐ": "尯煃跬頍磈蹞",
  "kuì": "尯胿匮喟媿愧愦蒉馈匱瞆嘳嬇憒潰篑聭聩蕢殨膭謉瞶餽簣聵籄饋",
  "kūn": "坤昆堃堒婫崑崐晜猑菎裈焜琨髠裩貇锟髡鹍潉蜫褌髨熴瑻醌錕鲲騉鯤鵾鶤",
  "kǔn": "悃捆阃壸梱祵硱稇裍壼稛綑閫閸",
  "kùn": "困涃睏",
  "kuò": "扩拡挄适秮秳铦筈萿葀蛞阔廓漷銛噋銽頢髺擴濶闊鞟韕霩鞹鬠",
  "la": "鞡",
  "lā": "垃柆砬菈搚磖邋",
  "lá": "旯剌砬揦磖嚹",
  "lǎ": "喇藞",
  "là": "剌翋揦溂揧楋瘌蜡蝋辢辣蝲臈擸攋爉臘鬎櫴瓎镴鯻蠟鑞",
  "lái": "来來俫倈崃徕涞莱郲婡崍庲徠梾淶猍萊逨棶琜筙铼箂錸騋鯠鶆麳",
  "lǎi": "襰",
  "lài": "疠娕徕唻婡徠赉睐睞赖誺賚濑賴頼癘顂癞鵣攋瀨瀬籁藾櫴癩籟",
  "lán": "兰岚拦栏啉婪惏嵐葻阑暕蓝谰厱澜褴儖斓篮懢燣燷藍襕镧闌璼幱襤譋攔瀾灆籃繿蘫蘭斕欄襴囒灡籣欗讕躝襽鑭韊",
  "lǎn": "览浨揽缆榄漤罱醂壈懒覧擥嬾懶孄覽孏攬灠欖爦顲纜",
  "làn": "坔烂滥燗嚂壏濫爁爛瓓爤爦糷钄",
  "lāng": "啷",
  "láng": "勆郞哴欴狼嫏廊斏桹琅蓈榔瑯硠稂锒筤艆蜋郒樃螂躴鋃鎯駺",
  "lǎng": "崀朗朖烺塱蓢誏朤",
  "làng": "埌浪莨阆筤蒗誏閬",
  "lāo": "捞粩撈",
  "láo": "労劳牢窂哰崂浶勞痨铹僗嘮嶗憦憥朥癆磱簩蟧醪鐒顟髝",
  "lǎo": "耂老佬咾恅狫荖栳珯硓铑蛯銠鮱轑",
  "lào": "涝絡嗠耢酪嫪嘮憦樂澇躼橯耮軂",
  "le": "饹",
  "lē": "嘞",
  "lè": "仂阞叻忇扐氻艻牞玏泐竻砳楽韷餎樂簕鳓鰳鱳",
  "lei": "嘞",
  "lēi": "",
  "léi": "絫雷嫘缧蔂樏畾磥檑縲攂礌镭櫑瓃羸礧纍罍蘲鐳轠儽鑘靁虆鱩欙纝鼺",
  "lěi": "厽耒诔垒洡塁絫傫誄瘣樏磊蕌磥蕾儡壘癗礌藟櫑櫐矋礨礧灅蠝蘽讄壨鑸鸓",
  "lèi": "泪洡类涙淚祱絫酹銇頛頪錑攂颣類礧纇蘱禷",
  "lēng": "稜",
  "léng": "唥崚塄楞碐稜薐",
  "lěng": "冷",
  "lèng": "倰堎愣睖踜",
  "li": "",
  "lī": "",
  "lí": "刕杝厘柂剓狸离荲骊悡梨梸犁琍菞喱棃犂鹂剺漓睝筣缡艃蓠嫠孷樆璃盠竰貍犛糎蔾褵鋫鲡黎篱縭罹錅蟍謧醨嚟藜邌釐離鯏斄瓈蟸鏫鯬鵹麗黧囄灕蘺蠫孋廲劙鑗穲籬纚驪鱺鸝",
  "lǐ": "礼李里俚峛峢娌峲悝浬逦理裡锂粴裏豊鋰鲤澧禮鯉醴蠡鳢邐鱧欚纚鱱",
  "lì": "力历厉屴扐立吏扚朸利励叓呖坜杝沥苈例叕岦戾枥沴沵疠苙迣俐俪栃栎疬砅茘荔赲轹郦唎娳悧栛栗浰涖猁珕砬砺砾秝莉莅鬲唳婯悷笠粒粝脷蚸蛎傈凓厤棙痢蛠詈跞雳厯塛慄搮溧睙蒞蒚蜊鉝鳨厲暦歴瑮綟蜧銐蝷镉勵曆歷篥隷鴗巁檪濿癘磿隸鬁儮擽曞櫔爄犡禲蠇鎘嚦壢攊櫟瀝瓅礪藶麗櫪爏瓑皪盭礫糲蠣儷癧礰纅酈鷅麜囇孋攦觻躒轢欐讈轣攭瓥靂靋",
  "liǎ": "俩倆",
  "lián": "奁连帘怜涟莲連梿联裢亷嗹廉慩溓漣蓮匲奩槏槤熑覝劆匳噒嫾憐磏聨聫褳鲢濂濓縺翴聮薕螊櫣燫聯臁謰蹥檶鎌镰瀮簾蠊鬑鐮鰱籢籨",
  "liǎn": "莶敛梿琏脸裣慩摙溓槤璉蔹嬚薟斂櫣歛臉鄻襝羷蘞蘝醶",
  "liàn": "练炼恋殓僆堜媡湅萰链摙楝煉瑓潋稴練澰錬殮鍊鏈瀲鰊戀纞",
  "liāng": "",
  "liáng": "良俍莨梁涼椋辌粱粮墚踉樑輬駺糧",
  "liǎng": "両两兩俩倆唡啢掚脼裲緉蜽魉魎",
  "liàng": "亮倞哴悢谅涼辆喨晾湸靓輌踉諒輛鍄",
  "liāo": "蹽",
  "liáo": "辽疗窌聊尞僚寥嵺憀摎漻膋嘹嫽寮嶚嶛憭敹樛獠缭遼暸橑璙膫療竂鹩屪廫簝繚藔蟟蟧豂賿蹘爎爒飂髎飉鷯",
  "liǎo": "钌釕鄝缪蓼憭繆曢爎镽爒",
  "liào": "尥尦钌炓料釕廖撂窷镣鐐",
  "lie": "",
  "liē": "",
  "lié": "",
  "liě": "忚毟挘",
  "liè": "列劣劦冽劽姴挒洌茢迾哷埓埒栵浖烈烮捩猎猟脟棙蛚煭聗趔綟巤獦颲燤儠巁鮤鴷擸爄獵爉犣躐鬛鬣鱲",
  "līn": "拎",
  "lín": "厸邻阾林临冧啉崊惏晽琳粦碄箖粼綝鄰隣嶙潾獜遴斴暽燐璘辚霖疄瞵磷臨繗翷麐轔壣瀶鏻鳞驎鱗麟",
  "lǐn": "菻亃僯箖凜凛撛廩廪懍懔澟檁檩癝癛",
  "lìn": "吝恡悋赁焛亃痳賃蔺獜橉甐膦閵疄藺蹸躏躙躪轥",
  "líng": "伶刢灵呤囹坽夌姈岺彾泠狑苓昤朎柃玲瓴〇凌皊砱秢竛羐袊铃陵鸰婈崚掕棂淩琌笭紷绫羚翎聆舲菱蛉衑祾詅跉軨稜蓤裬鈴閝零龄綾蔆輘霊駖澪蕶錂霗魿鲮鴒鹷燯霝霛齢酃鯪孁齡櫺醽靈欞爧麢龗",
  "lǐng": "岺袊领領嶺",
  "lìng": "另炩蘦",
  "liū": "熘澑蹓",
  "liú": "刘畄斿浏流留旈琉畱硫裗媹嵧旒蒥蓅骝摎榴漻瑠飗劉瑬瘤磂镏駠鹠橊璢疁镠癅蟉駵嚠懰瀏藰鎏鎦麍鏐飀鐂騮飅鰡鶹驑",
  "liǔ": "柳栁桞珋桺绺锍綹熮罶鋶橮嬼懰羀藰",
  "liù": "窌翏塯廇遛澑磂磟鹨鎦霤餾雡飂鬸鷚",
  "lo": "咯",
  "lóng": "龙屸尨咙泷茏昽栊珑胧眬砻竜聋隆湰滝嶐槞漋癃窿篭龍儱蘢鏧霳嚨巃巄瀧曨朧櫳爖瓏襱矓礲礱蠬蠪龓龒籠聾豅躘靇鑨驡鸗",
  "lǒng": "陇垅垄拢篢篭龍隴儱徿壟壠攏竉龓籠躘",
  "lòng": "哢梇硦儱徿贚",
  "lou": "喽嘍瞜",
  "lōu": "摟",
  "lóu": "剅娄偻婁喽溇蒌僂楼嘍寠廔慺漊蔞遱樓熡耧蝼瞜耬艛螻謱貗軁髅鞻髏鷜",
  "lǒu": "嵝塿嶁摟甊篓簍",
  "lòu": "陋屚漏瘘镂瘻瘺鏤",
  "lū": "噜撸謢嚕擼",
  "lú": "卢庐芦垆枦泸炉栌胪轳舮鸬玈舻颅鈩鲈馿魲盧嚧壚廬攎瀘獹璷蘆曥櫨爐瓐臚矑籚纑罏艫蠦轤鑪顱髗鱸鸕黸",
  "lǔ": "卤虏掳鹵硵鲁虜塷滷蓾樐澛魯擄橹氇磠穞镥瀂櫓氌艣鏀艪鐪鑥",
  "lù": "圥甪陆侓坴彔录峍勎赂辂陸娽淕淥渌硉菉逯鹿椂琭祿禄僇剹勠盝睩稑賂路輅塶廘摝漉箓粶緑蓼蔍戮樚熝膔趢踛辘醁潞穋蕗錄錴録璐簏螰鴼簶蹗轆騄鹭簬簵鏕鯥鵦鵱麓鏴騼籙觻虂鷺",
  "luán": "娈孪峦挛栾鸾脔滦銮鵉圝奱孌孿巒攣曫欒灓羉臡臠圞灤虊鑾癴癵鸞",
  "luǎn": "卵覶",
  "luàn": "乱釠乿亂薍灓",
  "lūn": "掄",
  "lún": "仑伦囵沦纶芲侖轮倫陯圇婨崘崙掄淪菕棆腀碖綸耣蜦論踚輪磮錀鯩",
  "lǔn": "埨惀碖稐耣",
  "lùn": "惀溣碖論",
  "luo": "囉囖",
  "luō": "捋頱囉囖",
  "luó": "寽罗猡脶萝逻椤腡锣箩骡镙螺攎羅覶鏍儸覼騾囉攞玀蘿邏欏驘鸁籮鑼饠囖",
  "luǒ": "剆倮砢捰蓏裸躶瘰蠃臝曪攭癳",
  "luò": "泺咯峈洛荦骆洜珞捰渃硌硦笿絡蛒跞詻摞漯犖雒駱磱鮥鵅擽濼攊皪躒纙",
  "lǘ": "驴闾榈閭氀膢瞜櫚藘驢",
  "lǚ": "吕呂侣郘侶挔捛捋旅梠焒祣偻稆铝屡絽缕僂屢慺膂褛鋁履膐褸儢縷穭鷜",
  "lǜ": "垏律哷虑嵂氯葎滤綠緑慮箻膟勴繂濾櫖爈卛鑢",
  "lüè": "寽掠畧略锊稤圙鋢鋝",
  "ma": "嗎嘛麽",
  "mā": "亇妈孖庅媽嫲榪螞",
  "má": "菻麻嗎痲痳嘛嫲蔴犘蟇",
  "mǎ": "马犸杩玛码馬嗎溤獁遤瑪碼螞鎷鰢鷌",
  "mà": "杩祃閁骂傌睰嘜榪禡罵螞駡鬕",
  "mái": "薶霾",
  "mǎi": "买荬買嘪蕒鷶",
  "mài": "劢迈佅売麦卖唛脈麥衇勱賣邁霡霢",
  "mān": "颟顢",
  "mán": "姏悗蛮絻谩慲摱馒樠瞞鞔謾饅鳗鬘鬗鰻矕蠻",
  "mǎn": "娨屘満满滿螨襔蟎鏋矕",
  "màn": "曼僈鄤墁嫚幔慢摱漫獌缦蔄槾澫熳澷镘縵鏝蘰",
  "māng": "牤",
  "máng": "邙吂忙汒芒尨杗杧盲盳厖恾笀茫哤娏庬浝狵朚牻硭釯铓痝蛖鋩駹蘉",
  "mǎng": "莽莾硥茻壾漭蟒蠎",
  "màng": "",
  "māo": "貓",
  "máo": "毛矛芼枆牦茅茆旄罞渵軞酕堥嵍楙锚緢鉾髦氂犛蝥貓髳錨蟊鶜",
  "mǎo": "冇卯夘乮峁戼泖昴铆笷蓩鉚",
  "mào": "冃皃芼冐茂柕眊秏贸旄耄袤覒媢帽萺貿鄚愗暓毷瑁瞀貌鄮蝐懋",
  "me": "庅麽麼嚜",
  "mē": "嚒",
  "mè": "濹嚰",
  "méi": "坆沒枚玫苺栂眉脄莓梅珻脢郿堳媒嵋湄湈猸睂葿楣楳煤瑂禖腜塺槑酶镅鹛鋂霉穈徾鎇攗鶥黴",
  "měi": "毎每凂美挴浼羙媄嵄渼媺镁嬍燘躾鎂黣",
  "mèi": "妹抺沬旀昧祙袂眛媚寐殙痗跊鬽煝睸韎魅篃蝞嚜櫗",
  "mēn": "悶椚",
  "mén": "门们扪汶怋玧钔門們閅捫菛璊瞞穈鍆亹斖虋",
  "mèn": "悗惛焖悶暪燜鞔懑懣",
  "mēng": "掹擝矇",
  "méng": "尨甿虻庬莔萌溕盟雺甍鄳儚橗瞢蕄蝱鄸鋂髳幪懜懞濛獴曚朦檬氋礞鯍鹲艨矒靀霿饛顭鸏",
  "měng": "黾冡勐猛黽锰艋蜢瞢懜懞蟒錳懵蠓鯭矒鼆",
  "mèng": "孟梦夢夣懜霥癦",
  "mī": "咪瞇",
  "mí": "冞祢迷袮猕谜蒾詸摵瞇謎醚彌擟瞴縻藌麊麋麿檷禰靡瀰獼蘪麛镾戂攠瓕蘼爢醾醿鸍釄",
  "mǐ": "米芈侎沵羋弭洣敉粎脒渳葞蔝銤彌濔孊攠灖",
  "mì": "冖糸汨沕宓怽枈觅峚祕宻密淧覔覓幂谧塓幎覛嘧榓滵漞熐蔤蜜鼏冪樒幦濗謐櫁簚羃",
  "mián": "宀芇杣眠婂绵媔棉綿緜臱蝒嬵檰櫋矈矊矏",
  "miǎn": "丏汅免沔黾勉眄娩莬偭冕勔渑喕媔愐湎睌缅葂黽絻腼澠緬靦鮸",
  "miàn": "靣面牑糆麫麪麺麵",
  "miāo": "喵",
  "miáo": "苗媌描瞄鹋嫹緢鶓",
  "miǎo": "厸仯劰杪眇秒淼渺缈篎緲藐邈",
  "miào": "妙庙玅竗庿缪廟繆",
  "miē": "乜吀咩哶孭",
  "mié": "",
  "miè": "灭烕眜覕搣滅蔑薎鴓幭懱瀎篾櫗簚礣蠛衊鑖鱴",
  "mín": "民忟垊姄岷忞怋旻旼玟苠珉盿砇罠崏捪渂琘琝缗暋瑉痻碈鈱緍緡賯錉鴖鍲",
  "mǐn": "皿冺刡忟闵呡忞抿泯黾勄敃闽悯敏笢笽惽湏湣閔黽愍敯暋僶閩慜憫潣簢鳘蠠鰵",
  "míng": "名明鸣洺眀茗冥朙眳铭鄍嫇溟猽蓂詺暝榠銘鳴瞑螟覭",
  "mǐng": "佲姳凕嫇慏酩",
  "mìng": "命掵",
  "miǔ": "",
  "miù": "谬缪繆謬",
  "mō": "摸嚤",
  "mó": "庅尛谟嫫馍摹膜骳麽麼魹橅糢嬤嬷謨謩擵饃蘑髍魔劘戂攠饝",
  "mǒ": "懡",
  "mò": "末圽沒妺帓殁歿歾沫茉陌帞昩枺狢皌眜眿砞秣莈眽絈袹絔蛨貃嗼塻寞漠獏蓦貈貊貉銆靺墨嫼瘼瞐瞙镆魩黙縸默瀎貘嚜藦蟔鏌爅驀礳纆耱",
  "mōu": "哞",
  "móu": "牟侔劺呣恈敄桙眸谋堥蛑缪踎謀繆鍪鴾麰鞪",
  "mǒu": "厶某",
  "mòu": "",
  "mú": "毪氁",
  "mǔ": "母亩牡坶姆拇畂峔牳畆畒胟娒畝畞砪畮鉧踇",
  "mù": "木仫目凩朷牟沐狇坶炑牧苜毣莯蚞钼募雮墓幙幕慔楘睦鉬慕暯暮缪樢艒霂穆縸繆鞪",
  "n": "",
  "ń": "唔嗯",
  "ň": "嗯",
  "na": "",
  "nā": "",
  "ná": "秅拏拿挐嗱蒘搻誽镎鎿",
  "nǎ": "乸雫",
  "nà": "吶妠抐纳肭郍衲钠納袦捺笚笝豽軜貀鈉蒳靹魶",
  "nái": "腉搱摨孻",
  "nǎi": "乃奶艿氖疓妳廼迺倷釢嬭",
  "nài": "佴奈柰耏耐萘渿鼐褦螚錼",
  "nān": "囝囡",
  "nán": "男抩枏侽柟娚畘莮喃遖暔楠諵難",
  "nǎn": "赧揇湳萳煵腩嫨蝻戁",
  "nàn": "妠婻諵難",
  "nāng": "儾囔",
  "náng": "乪涳搑憹嚢蠰饟馕欜饢",
  "nǎng": "搑擃瀼曩攮灢馕",
  "nàng": "儾齉",
  "nāo": "孬",
  "náo": "呶怓挠峱桡硇铙猱蛲詉碙摎撓嶩憹橈獶蟯夒譊鐃巎獿",
  "nǎo": "垴恼悩脑匘脳堖惱嫐瑙腦碯憹獶",
  "nào": "闹婥淖閙鬧臑",
  "ne": "",
  "né": "",
  "nè": "疒讷吶抐眲訥",
  "néi": "",
  "něi": "娞浽馁脮腇餒鮾鯘",
  "nèi": "內氝氞錗",
  "nèn": "恁媆嫩嫰",
  "néng": "",
  "něng": "螚",
  "nèng": "",
  "ńg": "唔嗯",
  "ňg": "嗯",
  "nī": "妮",
  "ní": "尼坭怩抳籾倪屔秜郳铌埿婗淣猊蚭棿蛪跜鈮聣蜺馜觬貎輗霓鲵鯢麑齯臡",
  "nǐ": "伱伲你拟妳抳狔苨柅婗掜旎晲棿孴儞儗隬懝擬濔薿檷聻",
  "nì": "屰氼伲抐昵胒逆匿眤秜堄惄嫟愵睨腻暱縌誽膩嬺",
  "niān": "拈蔫",
  "nián": "年秊哖姩秥粘溓鲇鮎鲶鵇黏鯰",
  "niǎn": "涊淰焾辇榐辗撚撵碾輦簐蹍攆蹨躎",
  "niàn": "卄廿念姩唸埝悥惗艌",
  "niáng": "娘嬢孃釀",
  "niǎng": "",
  "niàng": "酿醸釀",
  "niǎo": "鸟茑袅鳥嫋裊蔦樢嬝褭嬲",
  "niào": "脲",
  "niē": "捏揑",
  "nié": "苶",
  "niě": "",
  "niè": "乜帇圼峊枿陧涅痆聂臬啮掜菍隉敜湼嗫嵲踂噛摰槷踗踙銸镊镍嶭篞臲鋷錜颞蹑嚙聶鎳闑孼孽櫱籋蘖囁攝齧巕糱糵蠥鑈囐囓讘躡鑷顳钀",
  "nín": "囜恁脌您",
  "nǐn": "拰",
  "níng": "咛狞苧柠聍寍寕甯寗寜寧儜凝橣嚀嬣擰獰薴檸聹鑏鬡鸋",
  "nǐng": "擰矃",
  "nìng": "佞侫泞倿寍寕甯寗寜寧澝擰濘",
  "niū": "妞孧",
  "niú": "牜牛汼怓",
  "niǔ": "忸扭沑狃纽杻炄钮紐莥鈕靵",
  "niù": "抝",
  "nóng": "农侬哝浓脓秾農儂辳噥濃蕽檂燶禯膿癑穠襛譨醲欁鬞",
  "nǒng": "繷",
  "nòng": "挊挵癑齈",
  "nóu": "羺",
  "nǒu": "",
  "nòu": "搙槈耨獳檽鎒鐞",
  "nú": "奴伮孥帑驽笯駑",
  "nǔ": "伮努弩砮胬",
  "nù": "怒傉搙",
  "nuán": "奻渜",
  "nuǎn": "渜湪暖煖煗餪",
  "nuàn": "",
  "nuó": "挪梛傩橠難儺",
  "nuǒ": "袳袲",
  "nuò": "耎诺喏掿毭逽愞搙搦锘搻榒稬諾蹃糑鍩懧懦糥穤糯",
  "nǘ": "",
  "nǚ": "钕籹釹",
  "nǜ": "沑衂恧朒衄聏",
  "nüè": "虐婩硸瘧",
  "o": "筽",
  "ō": "喔噢",
  "ó": "哦",
  "ǒ": "嚄",
  "ò": "哦",
  "ou": "",
  "ōu": "讴吽沤欧殴瓯鸥區嘔塸漚歐毆熰甌膒鴎櫙藲謳鏂鷗",
  "óu": "",
  "ǒu": "吘禺偶腢嘔熰耦蕅藕",
  "òu": "怄沤嘔慪漚",
  "pā": "汃妑苩皅趴舥啪葩",
  "pá": "杷爬钯掱琶筢潖",
  "pǎ": "",
  "pà": "汃帊帕怕袙",
  "pāi": "拍",
  "pái": "俳徘猅棑牌箄輫簲簰犤",
  "pǎi": "廹",
  "pài": "沠哌派渒湃蒎鎃",
  "pān": "眅畨萠潘攀籓",
  "pán": "丬爿肨柈洀胖眫湴盘跘媻幋蒰搫槃盤磐縏膰磻蹒瀊蟠蹣鎜鞶",
  "pǎn": "坢盻",
  "pàn": "冸判沜拚泮炍肨叛牉盼胖畔聁袢詊溿頖鋬闆鵥襻鑻",
  "pāng": "乓汸沗胮雱滂膖霶",
  "páng": "厐夆尨彷庞逄庬趽舽嫎徬膀篣螃鳑龎龐鰟",
  "pǎng": "嗙耪覫",
  "pàng": "炐肨胖眫",
  "pāo": "抛拋脬萢藨穮",
  "páo": "咆垉庖狍炰爮瓟袍铇匏烰袌跁軳鉋鞄褜麃麅",
  "pǎo": "",
  "pào": "奅疱皰砲袌靤麭嚗礟礮",
  "pēi": "妚呸怌抷肧柸胚衃醅",
  "péi": "阫陪培婄毰赔锫裵裴賠錇",
  "pěi": "俖琣",
  "pèi": "伂妃沛犻佩帔姵斾柭旆浿珮配淠棑媐蓜辔馷嶏霈攈轡",
  "pēn": "噴濆歕",
  "pén": "瓫盆湓葐",
  "pěn": "呠翸",
  "pèn": "喯噴",
  "pēng": "亨匉怦抨泙恲胓砰梈烹硑絣軯剻閛漰嘭駍磞",
  "péng": "芃朋挷竼倗捀莑堋弸淜袶棚椖傰塜塳搒漨痭硼稝蓬鹏樥熢憉澎輣篣篷膨錋韸髼蟚蟛鬅纄蘕韼鵬騯鬔鑝",
  "pěng": "捧淎皏摓",
  "pèng": "掽椪碰閛槰踫磞",
  "pi": "榌",
  "pī": "丕伓伾妚批纰邳坯岯怶披抷枈炋狉狓砒悂秛秠紕铍陴旇翍耚豾釽鈚鉟銔磇駓髬噼錃錍魾憵礕礔鎞霹",
  "pí": "皮仳阰纰芘陂枇肶毘毗疲笓紕蚍郫铍啤埤崥猈蚾蚽豼焷琵禆脾腗裨鈹鲏罴膍蜱罷隦魮壀螕鮍篺螷貔鞞鵧羆朇鼙蠯",
  "pǐ": "匹庀疋仳圮吡苉悂脴痞銢嶏諀鴄擗噽癖嚭",
  "pì": "屁埤淠揊嫓媲睥潎稫僻澼嚊濞甓疈譬闢鷿鸊",
  "piān": "囨偏媥楄犏篇翩鍂鶣",
  "pián": "骈胼缏腁楩賆跰瑸緶骿蹁駢璸騈",
  "piǎn": "覑谝貵諞",
  "piàn": "猵骗魸獱騗騙",
  "piāo": "剽勡嘌嫖彯慓缥飘旚縹翲螵犥飃飄魒",
  "piáo": "嫖瓢薸闝",
  "piǎo": "莩殍缥瞟篻縹醥皫顠",
  "piào": "僄彯徱骠驃鰾",
  "piē": "氕覕潎撆暼瞥",
  "piě": "丿苤鐅",
  "piè": "嫳",
  "pīn": "拚姘拼砏礗穦馪驞",
  "pín": "玭贫娦貧琕嫔嬪薲嚬矉蘋蠙颦顰",
  "pǐn": "品榀",
  "pìn": "牝汖聘",
  "pīng": "乒甹俜娉涄砯聠艵頩",
  "píng": "平评凭呯坪岼泙郱帡庰枰洴玶胓荓瓶帲淜硑萍蚲塀幈焩甁缾蓱蛢評馮軿鲆凴竮鉼慿箳輧憑鮃檘簈蘋",
  "pǐng": "屛",
  "pìng": "",
  "pō": "钋陂坡岥泺泼釙翍颇溌酦頗潑醗濼醱鏺",
  "pó": "婆嘙搫蔢鄱皤櫇嚩",
  "pǒ": "叵尀钷笸鉕箥駊髲",
  "pò": "廹岶敀昢洦珀哱烞砶破粕奤湐猼蒪魄",
  "pōu": "抙剖娝捊",
  "póu": "抔抙垺捊掊裒箁",
  "pǒu": "咅哣婄掊棓犃",
  "pū": "攵攴扑抪炇柨陠痡秿噗撲潽鋪鯆",
  "pú": "圤匍捗莆菩菐葡蒲蒱僕箁酺墣獛璞濮瞨穙镤贌纀鏷",
  "pǔ": "圃埔浦烳普圑溥暜谱諩擈樸氆檏镨譜蹼鐠",
  "pù": "痡舗舖鋪曝",
  "qi": "啐",
  "qī": "七迉沏恓柒倛凄桤郪娸悽戚捿桼淒萋喰攲敧棲欹欺紪缉傶褄僛嘁墄慽榿漆緀慼緝諆踦螇霋蹊魌鏚鶈",
  "qí": "丌亓伎祁圻岓岐忯芪亝斉歧畁祇祈肵俟疧荠剘斊旂竒耆脐蚔蚑蚚陭颀埼崎帺掑淇猉畦萁萕跂軝釮骐骑嵜棊棋琦琪祺蛴隑愭碁碕稘褀锜頎鬿旗粸綥綨綦蜝蜞齊璂禥蕲觭螧錡鲯懠濝薺藄鄿檱櫀簯簱臍騎騏鳍蘄鯕鵸鶀麒籏艩蠐鬐騹鰭玂麡",
  "qǐ": "乞邔企屺芑启呇杞玘盀唘豈起啔啓啟婍梩绮袳跂晵棨綮綺諬闙",
  "qì": "气讫忔扱気汔迄呚弃汽矵芞亟呮泣炁盵咠洓竐栔欫氣訖唭焏夡愒棄湆湇葺滊碛摖暣甈碶噐憇槭趞器憩磜磧磩藒礘罊蟿鐑",
  "qiā": "抲掐袷揢葜擖",
  "qiá": "",
  "qiǎ": "拤峠跒酠鞐",
  "qià": "圶冾匼咭帢恰洽胢殎硈愘磍髂",
  "qiān": "千仟阡圱圲奷扦汘芊迁佥岍杄汧茾欦竏臤钎拪牵粁悭挳蚈谸婜孯牽釺掔谦鈆僉愆签鉛骞鹐慳搴摼撁厱磏諐遷鳽褰謙顅檶攐攑櫏簽鏲鵮孅攓騫籖鬜鬝籤韆",
  "qián": "仱岒忴扲拑玪乹前炶荨钤歬虔蚙钱钳偂掮揵軡亁媊朁犍葥鈐煔鉗墘榩箝銭撍潛潜羬蕁橬錢黔鎆黚騝濳騚灊鰬",
  "qiǎn": "凵肷唊淺嵰遣槏膁蜸谴缱繾譴鑓",
  "qiàn": "欠刋伣芡俔茜倩悓堑掅傔棈椠欿嗛慊皘蒨塹歉綪蔳儙槧篏輤篟壍嬱縴",
  "qiāng": "羌戕戗斨枪玱矼羗猐啌跄嗴椌溬獇腔嗆搶蜣锖嶈戧摤槍牄瑲羫锵篬謒蹌蹡鎗鏘鏹鶬",
  "qiáng": "強墙嫱蔷樯漒蔃墻嬙廧彊薔檣牆艢蘠",
  "qiǎng": "強羟搶羥墏彊繈襁镪繦鏹",
  "qiàng": "戗炝唴跄嗆戧摪熗羻",
  "qiāo": "帩硗郻喿嵪煍跷鄥鄡劁勪幓敲毃踍锹墝碻磝頝骹墽幧橇燆缲橾磽鍬鍫礉繑繰趬蹺蹻鏒鐰",
  "qiáo": "乔侨峤荍荞桥硚菬喬睄僑摮槗谯嘺墧嫶嶠憔潐蕎鞒樵橋燋犞癄瞧礄翹櫵藮譙趫鐈鞽顦",
  "qiǎo": "丂巧釥愀髜",
  "qiào": "诮陗峭窍偢殻殼誚髚僺嘺撬箾噭撽鞘韒礉竅翹鞩躈",
  "qiē": "苆",
  "qié": "癿伽茄聺",
  "qiě": "",
  "qiè": "厒妾怯疌郄匧窃悏挈栔洯帹惬淁笡愜椄猰蛪趄跙嗛慊朅稧箧锲篋踥穕鍥鯜竊籡",
  "qīn": "兓侵钦衾骎菳媇嵚欽嵰綅誛嶔親顉駸鮼寴",
  "qín": "庈忴扲芩芹肣矜埐珡矝秦耹菦蚙捦菳琴琹禽覃鈙鈫雂勤嗪嫀溱靲廑慬噙嶜擒斳鳹懄檎澿瘽螓懃蠄鵭",
  "qǐn": "坅昑笉梫赾寑锓寝寖寢鋟螼",
  "qìn": "吢吣抋沁唚菣揿搇撳寴瀙藽",
  "qīng": "靑青氢轻倾卿郬圊埥寈氫淸清軽傾綪蜻輕錆鲭鯖鑋",
  "qíng": "夝甠剠勍啨情殑硘晴棾氰葝暒擏樈擎檠黥",
  "qǐng": "苘顷请庼頃廎漀請檾謦",
  "qìng": "庆凊掅殸渹碃箐綮靘慶磬親儬濪罄櫦",
  "qiōng": "",
  "qióng": "卭邛宆穷穹茕桏惸琁筇笻赹焪焭琼舼蛬蛩煢熍睘跫銎瞏窮儝嬛憌橩璚藑瓊竆藭瓗",
  "qiòng": "",
  "qiū": "丘丠邱坵恘秌秋恷蚯媝湫萩楸湬塸蓲鹙篍緧蝵穐趥龜橚鳅蟗鞦鞧蘒鰌鰍鶖蠤龝",
  "qiú": "厹叴囚扏犰玌艽芁朹汓肍求虬泅牫虯俅觓訅訄酋唒浗紌莍逎逑釚梂殏毬球赇釻頄崷巯渞湭皳盚遒煪絿蛷裘巰觩賕璆蝤銶醔鮂鼽鯄鰽",
  "qiǔ": "搝糗",
  "qiù": "",
  "qū": "伹佉匤岖诎阹驱呿坥屈岴抾浀祛胠袪區焌紶蛆躯煀筁粬蛐詘趍嶇憈駆敺觑誳駈麹髷魼趨麯覰覷軀鶌麴黢覻驅鰸鱋",
  "qú": "佢劬斪朐胊菃衐鸲淭絇翑蚼葋軥蕖璖磲螶鴝璩翵蟝瞿鼩蘧忂灈戵欋氍爠籧臞癯欔蠷衢躣蠼鑺鸜",
  "qǔ": "苣取竘娶紶詓竬蝺龋齲",
  "qù": "去厺刞欪耝阒觑閴麮闃鼁覰覷覻",
  "quān": "奍弮悛圏棬椦箞鐉",
  "quán": "全权佺狋诠姾峑恮泉洤荃拳牷辁啳埢婘惓捲痊硂铨椦湶犈筌絟葲搼楾瑔觠詮跧輇蜷銓槫権踡縓醛駩闎鳈鬈騡孉巏鰁權齤矔蠸颧顴灥",
  "quǎn": "犭犬犮畎烇绻綣虇",
  "quàn": "劝牶勧韏勸灥",
  "quē": "炔缺缼蚗蒛阙闕",
  "qué": "瘸",
  "què": "汋却卻埆崅悫琷傕敠敪棤硞确阕塙搉皵碏阙鹊愨榷墧慤碻確趞燩闋礐闕鵲礭",
  "qūn": "夋囷逡箘歏",
  "qún": "宭峮帬裙羣群裠麇",
  "qǔn": "",
  "rán": "呥肰衻袇蚦袡蚺然髥嘫髯燃繎",
  "rǎn": "冄冉姌苒染珃媣蒅熯橪",
  "ràn": "",
  "rāng": "",
  "ráng": "穣儴勷瀼獽蘘禳瓤穰躟鬤",
  "rǎng": "壌壤攘爙纕",
  "ràng": "让懹譲讓",
  "ráo": "娆荛饶桡嬈蕘橈襓饒",
  "rǎo": "扰娆隢嬈擾",
  "rào": "绕遶穘繞",
  "ré": "捼",
  "rě": "喏惹",
  "rè": "热渃熱",
  "rén": "亻人仁壬忈朲忎秂芢魜銋鵀",
  "rěn": "忍荏栠栣荵秹菍棯稔綛躵銋",
  "rèn": "刃刄认仞仭讱屻岃扨纫妊杒牣纴肕轫韧饪祍姙紉衽紝訒軔梕袵釰釼絍腍鈓靱靭韌飪認餁",
  "rēng": "扔",
  "réng": "仍辸礽芿陾",
  "rì": "日驲囸氜衵釰釼鈤馹",
  "róng": "戎肜栄狨绒茙茸荣容峵毧烿傛媶嵘搑絨羢嫆嵤搈榵溶蓉榕榮熔瑢穁槦縙蝾褣镕螎融駥嬫嶸爃鎔瀜曧蠑",
  "rǒng": "冗宂坈傇軵縙氄",
  "ròng": "穃縙",
  "róu": "厹禸柔粈脜媃揉渘葇楺煣瑈腬糅蝚蹂輮鍒鞣瓇騥鰇鶔",
  "rǒu": "韖",
  "ròu": "肉宍楺譳",
  "rū": "嶿",
  "rú": "邚如吺侞帤茹挐桇袽铷渪筎蒘銣蕠蝡儒鴑嚅嬬孺濡獳薷鴽曘檽襦繻蠕颥醹顬鱬",
  "rǔ": "汝肗乳辱鄏擩",
  "rù": "入扖杁洳嗕媷溽缛蓐鳰褥縟",
  "ruán": "堧撋壖",
  "ruǎn": "阮朊软耎偄軟媆瑌腝碝緛輭檽瓀礝",
  "ruàn": "緛",
  "ruí": "苼桵甤緌蕤",
  "ruǐ": "惢蕋蕊橤繠壡蘃蘂",
  "ruì": "兊兌抐汭芮枘笍蚋锐瑞蜹睿銳鋭叡鏸",
  "rún": "瞤",
  "rǔn": "",
  "rùn": "闰润閏閠潤橍膶",
  "ruó": "挼捼",
  "ruò": "叒偌弱鄀婼渃焫楉嵶蒻箬篛爇鰙鰯鶸",
  "sa": "",
  "sā": "仨",
  "sǎ": "訯靸潵鞈攃灑躠纚",
  "sà": "卅泧钑飒脎萨鈒摋隡馺蕯颯薩櫒鏾",
  "sāi": "毢愢揌毸腮嘥噻鳃顋鰓",
  "sǎi": "嗮",
  "sài": "赛僿賽簺",
  "san": "壭",
  "sān": "三弎叁參叄叅毶毵厁毿犙鬖",
  "sǎn": "仐伞傘糁馓糝糤糣繖鏒鏾饊",
  "sàn": "俕帴閐潵",
  "sāng": "桒桑喪槡",
  "sǎng": "嗓搡磉褬颡鎟顙",
  "sàng": "喪",
  "sāo": "掻慅搔溞缫懆缲螦繅鳋颾騒繰騷鰠鱢",
  "sǎo": "埽掃嫂",
  "sào": "埽掃瘙懆氉矂髞",
  "sē": "閪",
  "sè": "色拺洓栜涩啬渋粣铯雭歮琗嗇瑟摵歰銫槭澁廧懎擌濇濏瘷穑薔澀璱瀒穡鎍繬穯轖鏼闟譅飋",
  "sēn": "森椮槮襂",
  "sěn": "",
  "sēng": "僧鬙",
  "sèng": "",
  "sī": "厶纟丝司糹糸私咝泀俬恖虒鸶偲傂媤愢斯絲缌蛳楒禗鉰飔凘厮禠罳蜤銯锶嘶噝廝撕澌磃緦蕬鋖燍螄鍶蟖蟴颸騦鯣鐁鷥鼶",
  "sí": "",
  "sǐ": "死愢",
  "sì": "巳亖四寺汜佀兕姒泤祀価孠杫泗饲驷俟娰枱柶洠牭洍涘肂飤梩笥耛耜釲竢覗嗣肆貄鈶鈻飴飼榹銉禩駟蕼儩騃瀃",
  "sōng": "忪枀松枩娀柗倯凇崧庺梥淞菘愡揔棇嵩硹憽濍檧鬆",
  "sóng": "",
  "sǒng": "怂悚捒耸竦傱愯楤嵷摗漎慫聳駷",
  "sòng": "吅讼宋诵送颂訟頌誦鎹餸",
  "sōu": "凁捒捜鄋嗖廀廋搜溲獀蒐蓃馊摉飕摗锼撨艘螋醙鎪餿颼颾鏉騪",
  "sǒu": "叜叟傁棷蓃嗾瞍擞薮擻藪櫢籔",
  "sòu": "欶嗽擞瘶擻",
  "sū": "甦酥稡稣窣穌鯂蘇蘓櫯囌",
  "sú": "圱俗",
  "sǔ": "",
  "sù": "玊夙诉泝肃洬涑珟素莤速埣梀殐粛骕傃棴粟訴谡嗉塑塐嫊愫溯溸肅遡鹔僳愬摵榡膆蔌觫趚遬憟樕樎潥碿鋉餗潚縤橚璛簌縮藗謖蹜驌鱐鷫",
  "suān": "狻痠酸",
  "suǎn": "匴篹",
  "suàn": "祘笇筭蒜算",
  "suī": "夊芕虽倠哸娞浽荾荽眭毸滖睢缞嗺熣濉縗鞖雖",
  "suí": "绥隋随遀綏隨瓍髄",
  "suǐ": "膸瀡髓",
  "suì": "亗岁砕祟谇埣嵗遂歲歳煫睟碎隧嬘澻穂誶賥檖燧璲禭穗穟繀襚邃旞繐繸譢鐆鏸鐩韢",
  "sūn": "狲荪孫喰飧飱搎猻蓀槂蕵薞",
  "sǔn": "扻损笋隼筍損榫箰簨鎨鶽",
  "sùn": "摌",
  "suō": "唆娑挱莏莎傞挲桫梭睃嗍嗦羧蓑摍趖簑簔縮鮻",
  "suó": "",
  "suǒ": "所乺唢索琑琐嫅惢锁嗩暛溑獕瑣褨璅縒鎍鎖鎻鏁",
  "suò": "逤溹蜶",
  "shā": "杀杉纱乷剎砂唦挱殺猀粆紗莎挲桬毮铩痧硰摋蔱裟榝樧魦鲨閷髿鎩鯊鯋繺",
  "shá": "啥",
  "shǎ": "傻儍",
  "shà": "倽唼啑帹菨萐喢嗄廈歃翜歰箑翣濈閯霎",
  "shāi": "筛篩諰簁簛籭",
  "shǎi": "摋",
  "shài": "晒攦曬",
  "shān": "山彡邖圸删刪杉芟姍姗衫钐埏挻柵炶狦珊舢痁脠軕笘釤閊傓跚剼搧煔嘇幓煽潸澘穇檆縿膻鯅羴羶",
  "shán": "",
  "shǎn": "闪陕炶陝閃閄晱煔睒摻熌覢",
  "shàn": "讪汕姍姗疝钐剡訕赸掞釤善單椫禅銏骟僐鄯儃墡墠撣潬缮嬗嶦擅敾樿歚禪膳磰謆赡繕蟮蟺譱贍鐥饍騸鳝鳣灗鱓鱔",
  "shang": "",
  "shāng": "伤殇商愓湯觞傷禓墒慯滳漡蔏殤熵螪觴謪鬺",
  "shǎng": "垧扄晌埫赏樉賞鋿鏛贘鑜",
  "shàng": "丄尙尚恦绱緔鞝",
  "shāo": "娋弰烧莦焼萷旓筲艄輎蕱燒鞘髾鮹",
  "sháo": "勺芍杓苕柖玿韶",
  "shǎo": "",
  "shào": "佋劭卲邵绍柖哨娋袑紹睄綤潲",
  "shē": "奓奢猞赊畭畬畲輋賒賖檨",
  "shé": "舌佘虵阇揲蛥闍磼",
  "shě": "舍捨",
  "shè": "厍设社泏舎舍厙挕涉涻渉設赦弽慑摂滠慴蔎歙蠂韘騇懾攝灄麝欇",
  "shéi": "誰",
  "shēn": "申屾扟伸身侁冞呻妽籶绅罙诜姺柛氠珅穼籸娠峷甡眒砷莘參叄堔敒深紳兟叅棽葠裑訷嫀搷罧蓡詵幓甧糁蔘糂燊薓駪鲹曑糝糣鯓鵢鯵鰺",
  "shén": "神榊鉮鰰",
  "shěn": "邥吲弞抌审矤哂矧宷谂谉婶淰渖訠棯審諗頣魫曋瞫嬸瀋覾讅",
  "shèn": "肾侺昚胂涁眘渗祳脤谌腎葚愼慎椹瘆蜄蜃滲鋠瘮黮",
  "shēng": "升生阩呏声斘昇枡泩狌苼殅牲珄竔陞曻陹殸笙湦焺甥鉎聲鍟鼪鵿",
  "shéng": "渑绳憴澠縄繉繩譝",
  "shěng": "眚偗渻",
  "shèng": "圣乗娍胜晠晟剰剩勝椉貹嵊琞聖墭榺蕂橳賸",
  "shi": "辻籂",
  "shī": "尸失师厔呞虱诗邿鸤屍施浉狮師絁釶湤湿葹溮溼獅蒒蓍詩鉇嘘瑡酾鳲噓箷蝨鳾褷鲺濕鍦鯴鰤鶳襹釃",
  "shí": "十饣乭时竍実实旹飠姼峕炻祏蚀埘宲時莳寔湜遈塒嵵溡蒔鉐實榯碩蝕鲥鮖鼫識鼭鰣",
  "shǐ": "史矢乨豕使始驶兘宩屎狶痑笶榁鉂駛",
  "shì": "士礻丗世仕市示卋式忕亊忯戺事侍势呩柹视试饰冟咶室峙恀恃拭昰是枾柿狧眂贳适栻烒眎眡耆舐莳轼逝铈啫埶畤秲視釈崼崻弑徥惿揓谥貰释勢嗜弒楴煶睗筮蒔觢試軾鈰鉃飾舓誓適鉽馶奭銴餝餙噬嬕澨澤諡諟遾檡螫謚簭襫醳釋鰘",
  "shōu": "収收敊",
  "shóu": "熟",
  "shǒu": "扌手守垨首艏",
  "shòu": "寿受狩兽售授涭绶痩膄壽夀瘦綬嘼獣獸鏉",
  "shū": "书殳疋忬抒纾叔杸枢陎姝倐倏捈書殊紓婌悆掓梳淑焂菽軗鄃琡疎疏舒摅毹毺綀输瑹跾踈樞緰蔬輸橾鮛儵攄瀭鵨",
  "shú": "朮尗秫孰赎蒣塾熟璹贖",
  "shǔ": "鼡暏暑稌黍署蜀鼠數潻薥薯曙癙藷襡糬襩屬籔蠴鱪鱰",
  "shù": "朮戍束沭述侸俞兪咰怸怷树竖荗恕捒庻庶絉蒁術隃尌裋竪腧鉥墅漱潄數澍豎樹濖錰霔鏣鶐虪",
  "shuā": "唰",
  "shuǎ": "耍",
  "shuà": "誜",
  "shuāi": "缞摔縗",
  "shuǎi": "甩",
  "shuài": "帅帥蟀卛",
  "shuān": "闩拴閂栓絟",
  "shuàn": "涮腨槫",
  "shuāng": "双泷霜雙孀瀧骦孇騻欆礵鷞鹴艭驦鸘",
  "shuǎng": "爽塽慡漺縔鏯",
  "shuàng": "灀",
  "shuí": "谁脽誰",
  "shuǐ": "氵水氺閖",
  "shuì": "帨挩捝涗涚娷祱稅税裞睡說説",
  "shǔn": "吮楯",
  "shùn": "顺眴舜順蕣橓瞚瞤瞬鬊",
  "shuō": "說説",
  "shuò": "妁洬烁朔铄欶矟搠蒴銏愬槊獡碩數箾鎙爍鑠",
  "ta": "侤",
  "tā": "他它牠祂趿铊塌榙溻鉈褟闧",
  "tá": "",
  "tǎ": "塔溚墖獭鮙鳎獺鰨",
  "tà": "沓挞狧闼粏崉涾傝嗒搨遝遢阘榻毾漯禢撻澾誻踏鞈嚃橽錔濌蹋鞜鎉鎑闒鞳蹹躂嚺闟闥譶躢",
  "tāi": "囼孡珆胎",
  "tái": "旲邰坮抬骀枱炱炲菭跆鲐箈臺颱駘儓鮐嬯擡薹檯斄籉",
  "tǎi": "奤",
  "tài": "太冭夳忕汏忲汰汱态肽钛泰舦酞鈦溙態燤",
  "tān": "坍贪怹啴痑舑貪摊滩嘽潬瘫擹攤灘癱",
  "tán": "坛昙倓谈郯埮婒惔弾覃榃痰锬谭嘾墰墵彈憛潭談醈壇曇橝澹燂錟檀顃罈藫壜繵譚貚醰譠罎",
  "tǎn": "忐坦袒钽菼毯僋鉭嗿緂儃憳憻暺醓璮襢",
  "tàn": "叹炭倓埮探傝湠僋嘆碳舕歎",
  "tāng": "铴湯嘡劏羰蝪薚镗蹚鏜闛鞺鼞",
  "táng": "坣唐堂傏啺愓棠鄌塘嵣搪溏蓎隚榶漟煻瑭禟膅樘磄糃膛橖篖糖螗踼糛螳赯醣鎕餹鏜闛饄鶶",
  "tǎng": "伖帑偒傥耥躺镋鎲儻戃灙曭爣矘钂",
  "tàng": "烫铴摥燙鐋",
  "tāo": "夲夵弢抭涛绦掏涭絛詜嫍幍慆搯滔槄瑫韬飸縚縧濤謟轁鞱韜饕",
  "táo": "匋迯咷洮逃桃陶啕梼淘绹萄祹裪綯蜪鞀醄鞉鋾駣檮饀騊鼗",
  "tǎo": "讨討",
  "tào": "套",
  "tè": "忑忒特脦犆铽慝鋱蟘",
  "tēng": "熥膯鼟",
  "téng": "疼痋幐腾誊漛滕邆縢螣駦謄儯藤騰籐鰧籘虅驣",
  "tèng": "霯",
  "tī": "剔梯锑踢銻擿鷉鷈體",
  "tí": "苐厗荑桋绨偍珶啼媂媞崹惿渧稊缇罤遆鹈嗁瑅禔綈睼碮褆徲漽磃緹蕛题趧蹄醍謕蹏鍗鳀題鮷鵜騠鯷鶗鶙禵鷤",
  "tǐ": "挮徥躰骵醍軆體",
  "tì": "戻奃屉剃朑俶倜悌挮涕眣绨逖啑屜悐惕掦笹逷屟惖揥替棣綈裼褅歒殢髰薙嚏鬀嚔瓋鬄籊趯",
  "tiān": "天兲呑婖添酟靔黇靝",
  "tián": "田屇沺恬畑畋盷胋钿甛甜菾湉塡搷阗瑱碵緂磌窴鴫璳闐鷆鷏",
  "tiǎn": "奵忝殄倎栝唺悿淟紾铦晪琠腆觍痶睓舔銛餂覥賟銽錪",
  "tiàn": "掭菾琠瑱舚",
  "tiāo": "旫佻庣恌條祧聎",
  "tiáo": "芀朷岧岹苕迢祒條笤萔铫蓚蓨蓧龆樤蜩銚調鋚鞗髫鲦鯈鎥齠鰷",
  "tiǎo": "宨晀朓脁窕誂斢窱嬥",
  "tiào": "啁眺粜絩覜趒糶",
  "tiē": "怗贴萜聑貼跕",
  "tié": "",
  "tiě": "铁蛈鉄僣銕鐡鐵驖",
  "tiè": "呫飻餮",
  "tīng": "厅庁汀听庍耓厛烃桯烴渟綎鞓聴聼廰聽廳",
  "tíng": "邒廷亭庭莛停婷嵉渟筳葶蜓楟榳閮霆聤蝏諪鼮",
  "tǐng": "圢甼町侹侱娗挺涏梃烶珽脡铤艇颋誔鋌閮頲",
  "tìng": "忊梃濎",
  "tōng": "囲炵通痌絧嗵蓪樋",
  "tóng": "仝佟彤侗峂庝哃垌峒峝狪茼晍桐浵烔砼蚒偅痌眮秱铜硧童粡絧詷赨酮鉖僮勭鉵銅餇鲖潼獞曈朣橦氃燑犝膧瞳穜鮦",
  "tǒng": "侗统捅桶筒統筩綂",
  "tòng": "恸痛衕慟憅",
  "tou": "",
  "tōu": "偸偷婾媮緰鋀鍮",
  "tóu": "亠投骰頭",
  "tǒu": "妵紏敨飳斢黈蘣",
  "tòu": "透埱",
  "tu": "汢",
  "tū": "凸宊禿秃怢突涋捸堗湥痜葖嶀鋵鵚鼵",
  "tú": "図图凃峹庩徒悇捈涂荼莵途啚屠梌菟揬稌趃塗嵞瘏筡腯蒤鈯圗圖廜摕潳瑹跿酴墿馟檡鍎駼鵌鶟鷋鷵",
  "tǔ": "土圡钍唋釷",
  "tù": "兎迌兔唋莵堍菟鋀鵵",
  "tuān": "湍猯圕煓貒",
  "tuán": "団团抟剸團塼慱摶漙槫篿檲鏄糰鷒鷻",
  "tuǎn": "畽墥疃",
  "tuàn": "彖湪猯褖貒",
  "tuī": "忒推蓷藬讉",
  "tuí": "弚颓僓隤墤尵橔頺頹頽魋穨蘈蹪",
  "tuǐ": "俀聉腿僓蹆骽",
  "tuì": "侻退娧煺蛻蜕螁駾",
  "tūn": "吞呑旽涒啍朜焞噋憞暾",
  "tún": "坉庉忳芚饨蛌豘豚軘飩鲀魨霕黗臀臋",
  "tǔn": "氽",
  "tùn": "",
  "tuō": "乇仛讬托扡汑饦杔侂咃咜拕拖沰挩捝莌袉袥託啴涶脫脱飥馲魠鮵",
  "tuó": "阤驮佗陀陁坨岮沱沲狏驼侻柁砤砣袉铊鸵紽堶媠詑跎酡碢鉈馱槖駄鋖駞駝橐鮀鴕鼧騨鼍驒驝鼉",
  "tuǒ": "彵妥庹椭楕嫷撱橢鵎鰖",
  "tuò": "杝柝毤唾涶萚跅毻嶞箨蘀籜",
  "wa": "哇",
  "wā": "屲穵呙劸咼哇徍挖洼娲畖窊唲啘媧窐嗗瓾蛙搲溛漥窪鼃攨韈",
  "wá": "娃",
  "wǎ": "佤邷咓砙瓸搲",
  "wà": "帓袜婠聉嗢搲腽膃韎襪韤",
  "wai": "",
  "wāi": "呙咼歪喎竵瀤",
  "wǎi": "崴",
  "wài": "外顡",
  "wān": "毌夗弯剜埦婠帵捥塆湾睕蜿潫豌鋺彎壪灣",
  "wán": "丸刓汍纨芄完岏忨抏杬玩笂紈捖蚖顽烷琓貦頑翫",
  "wǎn": "夘夗倇唍挽盌莞莬埦婉惋捥晚晥梚涴绾脘菀萖惌晩晼椀琬皖畹碗箢綩綰輓踠鋔鋺",
  "wàn": "卍卐妧杤捥脕掔腕萬絻綄輐槾澫鋄瞣薍錽蟃贃鎫贎",
  "wāng": "尣尫尪汪尩瀇",
  "wáng": "亾兦仼莣蚟朚",
  "wǎng": "罓罒网彺忹抂徃往枉罖罔迬惘菵暀棢蛧辋網蝄誷輞瀇魍",
  "wàng": "妄忘迋旺盳徍望暀朢",
  "wēi": "厃危威倭烓偎逶隇隈喴媙崴嵔愄揋揻葨葳微椳楲溦煨詴蜲縅蝛覣嶶薇燰鳂癐癓巍鰃鰄霺",
  "wéi": "囗韦圩囲围帏沩违闱隹峗峞洈為韋桅涠唯帷惟硙维喡圍媁嵬幃湋溈爲琟違潍維蓶鄬撝潙潿醀濰鍏闈鮠壝矀覹犩欈",
  "wěi": "伟伪纬芛苇炜玮洧娓屗捤浘荱诿偉偽唩崣捼梶痏硊萎隗骩媁嵔廆徫愇渨猥葦蒍骫骪暐椲煒瑋痿腲艉韪僞嶉撱碨磈鲔寪緯蔿諉踓韑頠薳儰濻鍡鮪瀢韙颹韡亹瓗斖",
  "wèi": "卫未位味苿為畏胃叞軎猚硙菋谓喂喡媦渭爲猬煟墛瞆碨蔚蜼慰熭犚磑緭蝟衛懀罻衞謂餧鮇螱褽餵魏藯轊鏏霨鳚蘶饖瓗讆躗讏躛",
  "wēn": "昷塭温缊榅殟溫瑥辒韫榲瘟緼縕豱輼轀鎾饂鳁鞰鰛鰮",
  "wén": "文彣芠炆玟闻紋蚉蚊珳阌雯瘒聞馼駇魰鳼鴍螡閺閿蟁闅鼤繧闦",
  "wěn": "伆刎吻呅忟抆呡忞歾肳紊桽脗稳穏穩",
  "wèn": "问妏汶紋莬問渂揾搵絻顐璺",
  "wēng": "翁嗡滃鹟聬螉鎓鶲",
  "wěng": "勜奣塕嵡滃蓊暡瞈攚",
  "wèng": "瓮蕹甕罋齆",
  "wō": "挝倭莴唩涹渦猧萵喔窝窩蜗撾濄緺蝸踒薶",
  "wǒ": "呙我咼婑婐捰",
  "wò": "仴沃肟卧枂臥偓捾涴媉幄握渥焥硪楃腛斡瞃濣瓁臒龌馧龏齷",
  "wū": "乌圬弙扜扝汚汙污邬呜巫杅杇於屋洿诬钨烏剭窏釫惡鄔嗚誈僫歍誣箼鋘螐鴮鎢鰞",
  "wú": "无毋吳吴吾呉芜郚唔娪峿洖浯茣莁梧珸祦無铻鹀蜈墲蕪鋙鋘橆璑蟱鯃鵐譕鼯鷡",
  "wǔ": "乄五午仵伍妩庑忤怃迕旿武玝侮倵娒捂逜陚啎娬牾堥珷摀碔鹉熓瑦舞嫵廡憮潕儛甒膴瞴鵡躌",
  "wù": "兀勿务戊阢屼扤坞岉杌沕芴忢旿物矹俉卼敄柮误務唔娪悟悞悮粅趶晤焐婺嵍惡渞痦隖靰骛塢奦嵨溩雺雾僫寤熃誤鹜鋈窹霚鼿霧齀蘁騖鶩",
  "xī": "夕兮邜吸忚扱汐西希扸卥昔析矽穸肸肹俙咥咭徆怸恓诶郗饻唏奚娭屖息悕氥浠牺狶莃唽悉惜晞桸欷淅渓烯焁焈琋硒羛菥赥釸傒惁晰晳焟焬犀睎稀粞翖翕舾鄎厀嵠徯溪煕皙碏蒠裼锡僖榽熄熈熙獡緆蜥覡誒豨閪餏嘻噏嬆嬉嶲憘潝瘜磎膝凞暿樨橀歙熻熺熹窸羲螅螇錫燨犠瞦礂蟋豀谿豯貕蹊巂糦繥釐雟鯑鵗觹譆醯鏭鐊隵嚱巇曦爔犧酅饎觽鼷蠵鸂觿鑴",
  "xí": "习郋席習袭觋雭喺媳椺蒵蓆嶍漝趘槢薂隰檄謵鎴霫鳛飁騱騽鰼襲驨",
  "xǐ": "杫枲玺徙喜葈葸鈢鉩鉨屣漇蓰銑憘憙暿橲歖禧諰壐縰謑鳃蟢蹝釐璽鰓瓕鱚囍矖纚躧",
  "xì": "匸卌扢屃忾饩呬忥怬细郄钑係恄欪盻郤屓欯绤細釳阋傒摡椞舃舄趇隙愾慀滊禊綌蒵赩隟墍熂犔稧戯潟澙蕮覤戱縘黖戲磶虩餼鬩繫闟霼屭衋",
  "xiā": "呷虲疨虾谺傄閕煆颬瘕瞎蝦鰕",
  "xiá": "匣侠狎俠峡柙炠狭陜埉峽烚狹珨祫捾硖笚翈舺陿徦硤遐敮暇瑕筪舝瘕碬辖磍蕸縖螛赮魻轄鍜霞鎋黠騢鶷",
  "xiǎ": "閕閜",
  "xià": "丅下乤圷芐疜夏梺廈睱諕嚇懗罅夓鎼鏬",
  "xiān": "仚仙屳先奾佡忺氙杴欦祆秈苮姺枮籼珗莶掀铦搟綅跹酰锨僊僲嘕摻銛暹銽韯嬐憸薟鍁繊褼韱鮮蹮馦孅廯攕醶纎鶱襳躚纖鱻",
  "xián": "伭咞闲咁妶弦臤贤咸唌挦涎玹盷胘娴娹婱絃舷蚿衔啣湺痫蛝閑閒鹇嗛嫌溓衘甉銜嫻嫺憪撏澖稴羬誸賢諴輱醎癇癎瞯藖礥鹹麙贒鑦鷴鷼鷳",
  "xiǎn": "彡冼狝显险崄毨烍猃蚬険赻筅尟尠搟禒蜆跣銑箲險嶮獫獮藓鍌鮮燹顕幰攇櫶蘚譣玁韅顯灦",
  "xiàn": "咞岘苋見现线臽限姭宪県陥哯垷娊峴涀莧軐陷埳晛現硍馅睍絤綖缐羡塪搚溓献粯羨腺僩僴槏綫誢憪撊線鋧憲橌橺縣錎餡壏懢豏麲瀗臔獻糮鏾霰鼸",
  "xiāng": "乡芗香郷厢啍鄉鄊廂湘缃萫葙鄕楿稥薌箱緗膷襄儴勷忀骧麘欀瓖镶鱜纕鑲驤",
  "xiáng": "夅瓨佭庠羏栙祥絴翔詳跭",
  "xiǎng": "享亯响蚃饷晑飨想銄餉鲞蠁鮝鯗響饗饟鱶",
  "xiàng": "向姠项珦象缿衖項像勨嶑潒銗閧曏橡襐闂嚮蟓鐌鱌",
  "xiāo": "灲灱呺枭侾哓枵骁宯宵庨消烋绡莦虓逍鸮婋梟焇猇萧痚痟睄硣硝窙翛销嗃揱綃蛸嘐歊潇熇箫踃嘵憢撨獟獢箾銷霄骹彇膮蕭颵魈鴞穘簘藃蟂蟏鴵嚣瀟簫蟰髇櫹嚻囂髐鷍蠨驍毊虈",
  "xiáo": "姣洨郩崤淆訤殽誵",
  "xiǎo": "小晓暁筱筿皛曉篠謏皢",
  "xiào": "孝効咲恔俲哮效涍笑啸傚敩殽嗃詨嘋嘨誟嘯薂歗熽斅斆",
  "xiē": "娎揳猲楔歇滊獦蝎蠍",
  "xié": "劦协旪協胁垥奊峫恊拹挾脇脅脋衺偕斜梋谐絜翓颉嗋愶慀搚携瑎綊熁膎鲑勰撷擕緳縀缬蝢鞋諧燲鮭嚡擷鞵儶襭孈攜讗龤",
  "xiě": "写冩寫藛",
  "xiè": "伳灺泻祄绁缷卸枻洩炨炧卨屑栧偞偰徢械烲焎禼紲亵媟屟渫絏絬谢僁塮觟觧榍榝榭褉靾噧寫屧暬樧碿緤嶰廨懈澥獬糏薤薢邂韰燮褻謝夑瀉鞢韘瀣爕繲蟹蠏齘齛纈齥齂躠躞",
  "xīn": "忄心邤妡忻辛昕杺欣盺俽莘惞訢鈊锌新歆廞鋅噺噷嬜薪馨鑫馫",
  "xín": "枔襑镡礥鐔",
  "xǐn": "伈",
  "xìn": "阠伩囟孞炘軐脪衅訫愖焮馸顖舋釁",
  "xīng": "狌星垶骍惺猩煋瑆腥觪箵篂興謃鮏曐觲騂皨鯹",
  "xíng": "刑邢饧巠形陉侀郉哘型洐荥钘陘娙硎铏鈃蛵滎鉶銒鋞餳",
  "xǐng": "睲醒擤",
  "xìng": "杏姓幸性荇倖莕婞悻涬葕睲緈鋞嬹臖",
  "xiōng": "凶匂兄兇匈芎讻忷汹哅恟洶胷胸訩詾賯",
  "xióng": "雄熊熋",
  "xiǒng": "焽焸",
  "xiòng": "诇詗夐敻",
  "xiū": "俢修咻庥烌烋羞脩脙鸺臹貅馐樇銝髤髹鎀鮴鵂鏅饈鱃飍",
  "xiú": "苬",
  "xiǔ": "朽滫潃糔",
  "xiù": "秀岫峀珛绣袖琇锈嗅溴綉璓褏褎銹螑嚊繍鏅繡鏥鏽齅",
  "xū": "圩戌旴姁疞盱欨砉胥须眗訏顼偦虗虚裇許谞媭揟欻湏湑虛須楈綇頊嘘墟稰蓲需魆噓嬃歔緰縃蕦蝑歘藇諝燸譃魖驉鑐鬚",
  "xú": "俆冔徐禑蒣",
  "xǔ": "呴姁诩浒栩珝喣湑蛡暊詡滸稰鄦糈諿醑盨",
  "xù": "旭伵序旴汿芧侐卹妶怴沀叙恓恤昫朐洫垿晇欰殈烅珬勗勖喐惐掝敍敘淢烼绪续蚼酗壻婿朂溆矞絮聓訹慉滀煦続蓄賉槒漵潊盢瞁緒聟蓿銊嘼獝稸緖藇藚續鱮",
  "xuān": "吅轩昍咺宣弲晅軒梋谖喧塇媗愃愋揎萲萱暄煊瑄蓒睻儇禤箮翧蝖鋗嬛懁蕿諠諼鞙駨鍹駽矎翾藼蘐蠉譞鰚讂",
  "xuán": "玄伭妶玹痃悬琁蜁嫙漩暶璇縣檈璿懸",
  "xuǎn": "咺选烜喛暅選癣癬",
  "xuàn": "怰泫昡炫绚眩袨铉琄眴衒渲絢楥楦鉉夐敻碹蔙镟颴縼繏鏇贙",
  "xuē": "疶蒆靴薛辥辪鞾",
  "xué": "穴斈乴学峃茓泶袕鸴敩踅噱壆學嶨澩燢觷鷽",
  "xuě": "彐雪樰膤艝轌鳕鱈",
  "xuè": "吷坹岤怴泬狘疦桖谑滈趐謔瞲瀥",
  "xūn": "坃勋埙焄勛塤煇窨勲勳薫嚑壎獯薰曛燻臐矄蘍壦爋纁醺",
  "xún": "廵寻巡旬杊畃询郇咰姰峋恂洵浔紃荀荨栒桪毥珣偱眴尋循揗詢鄩鲟噚潯蕁攳樳燅燖璕駨蟫蟳爓鱘鱏灥",
  "xùn": "卂训讯伨汛迅驯侚巺徇狥迿逊孫殉毥浚訊訓訙奞巽殾稄遜馴愻噀潠蕈濬爋顨鶽鑂",
  "ya": "",
  "yā": "丫圧吖亞庘押枒垭鸦桠鸭啞孲铔椏鴉錏鴨壓鵶鐚",
  "yá": "牙伢厑岈芽厓拁琊笌蚜堐崕崖涯猚釾睚衙漄齖",
  "yǎ": "疋厊庌挜疨唖啞掗痖雅瘂蕥",
  "yà": "劜圠轧亚冴襾覀讶亜犽迓亞玡軋姶娅挜砑俹氩埡婭掗訝铔揠氬猰聐圔椻稏碣窫潝磍壓瓛齾",
  "yān": "恹剦烟珚胭崦淊淹焑焉菸阉殗渰湮傿歅煙硽鄢嫣漹嶖樮醃橪閹閼嬮懨篶懕臙黫黰",
  "yán": "讠厃延闫严妍芫訁言岩昖沿炏炎郔唌埏姸娫狿莚娮梴盐啱琂硏訮閆阎喦嵓嵒筵綖蜒塩揅楌詽碞蔅羬颜厳虤閻檐顏顔嚴壛巌簷櫩壧巖巗欕礹鹽麣",
  "yǎn": "夵抁沇乵兖俨兗匽弇衍剡偃厣掞掩眼萒郾酓隁嵃愝扊揜晻棪渰渷琰遃隒椼硽罨裺演褗戭窴蝘魇噞嬐躽縯檿黡厴甗鰋鶠黤儼黬黭龑孍顩鼴巘巚曮魘鼹礹齴黶",
  "yàn": "厌妟觃牪匽姲彥彦洝砚唁宴晏烻艳覎验偐掞焔猏硏谚隁喭堰敥棪殗焱焰猒硯雁傿椻溎滟豣鳫厭墕暥熖酽鳱嬊谳餍鴈燄諺赝鬳嚈嬮曕鴳酀騐験嚥嬿艶贋軅曣爓醶騴齞鷃灔贗囐觾讌醼饜驗鷰艷灎釅驠灧讞豓豔灩",
  "yāng": "央姎抰泱柍殃胦眏秧鸯鉠雵鞅鍈鴦",
  "yáng": "扬阦阳旸杨炀玚飏佯劷氜疡钖垟徉昜洋羏烊珜眻陽婸崵崸愓揚蛘敭暘楊煬瑒禓瘍諹輰鍚鴹颺鰑霷鸉",
  "yǎng": "卬佒咉坱岟养柍炴氧眏痒紻傟勜楧軮慃氱蝆飬養駚懩攁瀁癢礢",
  "yàng": "怏柍恙样烊羕楧詇煬様漾鞅樣瀁",
  "yāo": "幺夭吆妖枖殀祅約訞喓葽楆腰鴁撽邀鴢",
  "yáo": "爻尧匋尭肴垚姚峣恌轺倄烑珧皐窕窑铫隃傜堯揺殽谣軺嗂媱徭愮搖摇滧猺遙遥僥摿暚榣瑤瑶銚飖餆嶢嶤徺磘窯窰餚繇謡謠鎐鳐颻蘨邎顤鰩鱙",
  "yǎo": "仸宎岆抭杳枖狕苭咬柼眑窅窈舀偠婹崾溔蓔榚闄騕齩鷕",
  "yào": "怮穾药烄袎窔筄葯詏愮熎瘧覞靿樂獟箹鹞薬鼼曜燿艞藥矅耀纅鷂讑",
  "ye": "亪",
  "yē": "吔耶倻椰暍歋窫噎潱擨蠮",
  "yé": "爷耶峫捓揶铘爺瑘釾鋣鎁",
  "yě": "也冶埜野嘢漜壄",
  "yè": "业曳页曵邺夜抴亱拽枼洂頁捙晔枽烨液焆谒堨揲殗腋葉墷楪業煠痷馌僷曅燁璍擖擛曄皣瞱緤鄴靥嶪嶫澲謁餣擫曗瞸鍱擪爗礏鎑饁鵺鐷靨驜瓛鸈",
  "yi": "弬",
  "yī": "一乊弌辷衤伊衣医吚壱依祎咿洢悘渏猗畩郼铱壹揖蛜禕嫛漪稦銥嬄撎噫夁瑿鹥繄檹毉醫黟譩鷖黳",
  "yí": "乁仪匜圯夷彵迆冝宐杝沂诒侇宜怡沶狏狋迤迱饴咦姨峓恞拸柂洟珆瓵荑贻迻宧巸扅栘桋眙胰袘貤痍移萓釶椬羠蛦詒貽遗媐暆椸煕誃跠頉颐飴儀熪箷遺嶬彛彜螔頥頤寲嶷簃顊鮧鴺彞彝謻鏔籎觺讉",
  "yǐ": "乚乛乙已以扡迆钇佁攺矣苡叕苢迤迱庡舣蚁釔倚扆笖逘酏偯猗崺攲敧旑鈘鉯鳦裿旖輢嬟敼螘檥礒艤蟻顗轙齮",
  "yì": "乂义亿弋刈忆艺仡匇肊艾议阣亦伇屹异忔芅伿佚劮呓坄役抑杙耴苅译邑佾呭呹妷峄怈怿易枍欥泆炈秇绎衪诣驿俋奕帟帠弈昳枻浂玴疫羿轶唈垼悒挹栺栧欭浥浳益袘袣谊貤勚埶埸悘悥掜殹異羛翊翌萟訳訲豙豛逸釴隿幆敡晹棭殔湙焲焬蛡詍跇軼鄓鈠骮亄兿嗌意溢獈痬睪竩缢義肄裔裛詣勩嫕廙榏潩瘗膉蓺蜴駅億槸毅熠熤熼瘞篒誼镒鹝鹢黓儗劓圛墿嬑嶧憶懌曀殪澺燚瘱瞖穓縊艗薏螠褹寱懝斁曎檍歝燡燱翳翼臆貖鮨癔藝藙贀鎰镱繶繹豷霬鯣鶃鶂鶍瀷蘙議譯醳醷饐囈鐿鷁鷊懿襼驛鷧虉鸃鷾讛齸",
  "yīn": "囙因阥阴侌垔姻洇茵荫音骃栶欭氤陰凐秵裀铟陻隂喑堙婣愔湮筃絪歅溵禋蒑蔭慇瘖銦磤緸鞇諲霒駰噾濦闉霠齗韾",
  "yín": "冘乑伒吟圻犾苂斦烎垠泿圁峾狺珢荶訔訚唫婬寅崟崯淫訡银鈝龂滛碒鄞夤蔩銀龈噖殥璌誾嚚檭蟫霪齦鷣",
  "yǐn": "廴尹引吲饮粌蚓硍赺淾鈏飲隠靷飮朄輑磤趛檃瘾隱嶾濥縯螾檼蘟櫽癮讔",
  "yìn": "廴印茚洕胤荫垽梀堷湚猌飲廕隠飮窨酳慭癊憗憖隱鮣懚",
  "yīng": "応旲英柍荥偀桜珱莺啨婴媖愥渶绬朠楧焽焸煐瑛嫈碤锳嘤撄甇緓缨罂蝧賏樱璎噟罃褮霙鴬鹦嬰應膺韺甖鹰鶑鶧嚶孆孾攖瀴罌蘡譍櫻瓔礯譻鶯鑍纓蠳鷪軈鷹鸎鸚",
  "yíng": "夃盁迎茔盈荧浧耺莹営桯萤萦营蛍溁溋萾僌塋嵤楹滢蓥滎潆熒蝇瑩禜蝿嬴營縈螢濙濚濴藀覮謍赢瀅爃蠅鎣巆攍瀛瀠瀯櫿贏灐籝灜籯",
  "yǐng": "矨郢浧梬颍颕颖摬影潁瘿穎頴覮巊廮瀴鐛癭",
  "yìng": "応映眏暎硬媵膡鞕應瀴鱦",
  "yo": "喲",
  "yō": "唷喲",
  "yōng": "拥痈邕庸傭嗈鄘雍墉嫞慵滽槦牅牗銿噰壅擁澭郺镛臃癕雝鏞鳙廱灉饔鱅鷛癰",
  "yóng": "喁揘颙顒鰫",
  "yǒng": "永甬咏怺泳俑勈勇栐埇悀柡恿惥愑湧硧詠塎嵱彮愹蛹慂踊鲬噰澭踴鯒",
  "yòng": "用苚砽蒏醟",
  "yōu": "优妋忧攸呦怮泑幽峳浟逌悠羪麀滺憂優鄾嚘懮瀀獶櫌纋耰獿",
  "yóu": "尢冘尤由甴汼沋犹邮怞油肬怣斿柚疣庮秞莜莤莸郵铀偤蚰訧逰揂游猶遊鱿楢猷鈾鲉輏駀蕕蝣魷輶鮋繇櫾",
  "yǒu": "友丣卣苃酉羑栯莠梄聈铕湵楢禉蜏銪槱牖牗黝懮",
  "yòu": "又右幼佑佦侑孧泑狖哊囿姷宥峟柚牰祐诱迶唀梎痏蚴亴貁釉酭誘鼬櫾",
  "yū": "込扜扝纡迃迂穻陓紆唹淤盓瘀箊",
  "yú": "丂亐于邘伃余妤扵杅欤玗玙於盂臾衧鱼乻俞兪捓禺竽舁茰虶娛娯娪娱桙狳谀酑馀渔萸釪隃隅雩魚堣堬婾媀媮崳嵎嵛揄楰渝湡畬腴萮逾骬愚楡榆歈牏瑜艅虞觎漁睮窬舆褕歶羭蕍蝓諛雓餘魣嬩懙澞覦踰歟璵螸輿鍝謣髃鮽旟籅騟鯲蘛轝鰅鷠鸆齵",
  "yǔ": "伛宇屿羽穻俁俣挧禹圄祤偊匬圉庾敔鄅斞萭傴寙楀瑀瘐與語窳頨龉噳嶼懙貐斔穥麌齬",
  "yù": "肀玉驭圫聿芌芋吾妪忬汩灹饫欥育郁俞昱狱禺秗茟俼叞峪彧栯浴砡钰预域堉悆惐捥欲淢淯痏粖翑袬谕逳阈喅喩喻媀寓庽御棛棜棫焴琙琟矞硢硲裕遇飫馭鹆奧愈滪煜稢罭艈蒮蓣誉鈺預僪嫗嶎戫毓澚獄瘉緎蜟蜮語輍銉隩慾潏熨稶蓹薁豫遹鋊鳿澦燏燠蕷藇諭錥閾鴧鴪鴥儥礇禦魊鹬癒礖礜篽醧鵒櫲饇蘌譽鐭霱雤欎驈鬻籞鱊鷸鸒欝軉鬰鬱灪籲爩",
  "yuān": "夗囦肙鸢剈冤弲悁眢鸳寃涴渆渁渊渕惌淵葾棩蒬蜎裷鹓箢鳶蜵駌鋺鴛嬽鵷灁鼘鼝",
  "yuán": "元円贠邧园妧沅芫杬茒垣爰貟原員圆笎蚖袁厡酛傆喛圎媛援湲猨缘鈨鼋園圓塬媴嫄楥溒源猿蒝榞榬辕緣縁蝝蝯褤魭圜橼羱薗螈黿謜轅鎱櫞邍騵鶢鶰厵",
  "yuǎn": "盶逺遠薳鋺",
  "yuàn": "夗妴苑怨院垸衏傆媛掾瑗禐愿裫褑噮願",
  "yuē": "曰曱扚約啘箹矱",
  "yuě": "哕噦",
  "yuè": "月戉兊刖兌妜岄抈礿岳枂泧玥恱栎哾悅悦蚏蚎軏钺阅捳跀跃粤越鈅楽粵鉞說説樂閲閱嬳樾篗髺嶽臒龠擽矆櫟籆瀹蘥黦爚禴趯躍籥鑰鸑籰鸙",
  "yūn": "涒缊蒀暈氲煴蒕氳熅煾奫緼蝹縕赟馧贇",
  "yún": "云勻匀伝囩妘抣沄纭芸昀畇眃秐貟郧員涢紜耘耺鄖雲愪溳筠筼蒷熉澐蕓鋆橒篔縜",
  "yǔn": "允阭夽抎狁玧陨荺殒喗鈗隕煴殞熅馻磒賱霣齫齳",
  "yùn": "孕贠运枟郓恽貟員菀鄆酝傊惲愠缊運慍暈榅煇腪韫韵褞熨緷緼蕰蕴縕薀醖醞餫藴鞰韗韞蘊韻",
  "zā": "帀匝沞迊咂拶桚紥紮鉔噈魳臜臢",
  "zá": "杂沯砸偺喒韴雑襍雜囃囋囐雥",
  "zǎ": "咋偺喒",
  "zāi": "災灾甾哉栽烖畠菑渽溨睵賳",
  "zǎi": "宰崽",
  "zài": "再在扗抂洅傤載酨儎縡",
  "zān": "兂撍糌橵篸簪簮鵤鐕鐟",
  "zán": "偺喒",
  "zǎn": "拶昝桚寁揝噆撍儧攅儹攢趱趲",
  "zàn": "暂暫賛赞錾鄼濽蹔酂瓉贊鏩鏨瓒酇囋灒讃瓚禶穳襸讚饡",
  "zāng": "匨牂羘赃賍臧賘贓髒贜",
  "zǎng": "驵駔",
  "zàng": "奘弉脏塟葬臧蔵銺臓臟",
  "zāo": "傮遭糟蹧醩",
  "záo": "凿鑿",
  "zǎo": "早枣栆蚤棗璅澡璪薻藻",
  "zào": "灶皁皂唣唕造梍喿慥煰艁噪簉燥竃竈譟趮躁",
  "zé": "则択沢咋泎责迮則唶啧帻笮舴責溭滜睪矠飵嘖嫧幘箦蔶樍歵諎赜擇澤皟瞔簀耫礋襗謮賾蠌灂齚齰鸅",
  "zè": "仄庂汄昃昗捑側崱稄",
  "zéi": "贼戝賊鲗蠈鰂鱡",
  "zēn": "撍",
  "zěn": "怎",
  "zèn": "谮譖",
  "zēng": "曽増鄫增憎缯橧璔縡矰磳竲罾繒譄鱛",
  "zěng": "",
  "zèng": "锃綜缯鋥熷甑赠繒鬵贈囎",
  "zi": "嗭",
  "zī": "孖孜甾茊兹呲咨姕姿茲栥玆畠紎赀资崰淄秶缁菑谘赼嗞孳嵫椔湽滋粢葘辎鄑孶禌觜訾貲資趑锱稵緕緇鈭镃龇輜鼒澬薋諮趦輺錙髭鲻鍿鎡璾頾頿鯔鶅齍纃鰦齜",
  "zí": "蓻",
  "zǐ": "子吇芓姉姊杍沝矷秄胏呰秭籽耔茈虸笫梓釨啙紫滓訿榟橴",
  "zì": "字自芓秄洓茡荢倳剚恣牸渍眦眥菑胔胾漬",
  "zōng": "宗枞倧骔堫嵏嵕惾棕猣腙葼朡椶潈稯綜緃樅熧緵翪蝬踨踪磫繌鍐豵蹤騌鬃騣鬉鬷鯮鯼鑁",
  "zǒng": "总倊偬捴惣揔搃焧傯蓗嵸摠潀稯総熜緫縂燪縱總",
  "zòng": "昮疭從猔碂粽潨糉緵瘲縦縱繌糭",
  "zōu": "邹驺诹郰陬掫菆棸棷鄒箃緅諏鄹鲰鯫黀騶齱齺",
  "zǒu": "赱走搊鯐",
  "zòu": "奏揍媰楱",
  "zū": "怚柤租菹葅蒩",
  "zú": "卆足倅哫崒崪族椊稡箤踤镞鎐鏃",
  "zǔ": "诅阻组俎柤爼珇祖唨組詛靻鎺",
  "zù": "",
  "zuān": "鉆劗躜鑚躦鑽",
  "zuǎn": "繤缵纂纉籫纘",
  "zuàn": "揝篹賺攥",
  "zuī": "厜朘嗺樶蟕纗",
  "zuí": "",
  "zuǐ": "咀觜嶊嘴噿濢璻",
  "zuì": "冣栬絊酔晬最祽睟稡罪辠槜酻蕞醉嶵檇鋷錊檌欈",
  "zūn": "尊噂墫嶟遵樽繜罇鶎鐏鳟鱒鷷",
  "zǔn": "僔撙繜譐",
  "zùn": "拵捘栫袸銌瀳",
  "zuo": "咗",
  "zuō": "嘬穝",
  "zuó": "苲昨柮秨莋捽笮稓筰鈼",
  "zuǒ": "左佐繓",
  "zuò": "作坐阼岝岞怍侳柞祚胙唑座袏做葄葃酢蓙飵諎糳",
  "zhā": "吒咋抯挓柤査哳紥偧紮揸渣楂飵劄摣潳皶樝觰皻譇齄齇",
  "zhá": "札甴軋闸剳蚻铡喋煠牐閘劄箚霅耫鍘譗",
  "zhǎ": "厏拃苲眨砟鲊鲝諎鮓鮺",
  "zhà": "乍吒灹诈怍咤奓柞宱痄蚱喥溠詐搾鲊榨鮓醡",
  "zhāi": "亝哜夈粂捚斋側斎摘榸齊嚌擿齋",
  "zhái": "厇宅翟擇檡",
  "zhǎi": "厏抧窄鉙",
  "zhài": "责债砦責債寨瘵",
  "zhān": "岾怗枬沾毡旃栴粘蛅飦惉詀趈詹閚谵鳽噡嶦薝邅霑氈氊瞻覱鹯旜譫饘鳣驙魙鱣鸇",
  "zhán": "讝",
  "zhǎn": "斩飐展盏斬琖搌盞嶃嶄榐辗颭嫸醆橏輾皽黵",
  "zhàn": "佔战栈桟站偡绽菚嵁棧湛戦碊僝綻嶘戰虥虦覱轏譧欃蘸驏",
  "zhāng": "弡张張章傽鄣嫜彰慞漳獐粻蔁遧暲樟璋餦蟑鏱騿鱆麞",
  "zhǎng": "仉仧兏長掌漲幥礃鞝",
  "zhàng": "丈仗扙帐杖胀账粀帳涱脹痮障墇嶂幛漲賬瘬瘴瞕",
  "zhāo": "佋钊妱巶招昭炤釗啁釽鉊鳭駋鍣皽",
  "zháo": "",
  "zhǎo": "爫找沼菬瑵",
  "zhào": "兆诏枛垗炤狣赵笊肁啅旐棹罀詔照罩箌肈肇趙曌濯燳鮡櫂瞾羄",
  "zhe": "嗻",
  "zhē": "嗻嫬遮螫",
  "zhé": "乇厇扸杔歽矺砓籷虴哲埑粍袩啠悊晢晣辄喆棏聑蛰詟搩蜇谪馲摺輒慹磔輙銸辙蟄嚞謫謺鮿轍讁讋",
  "zhě": "者乽啫锗赭踷褶鍺襵",
  "zhè": "柘浙這淛嗻蔗樜鹧蟅鷓",
  "zhèi": "",
  "zhēn": "贞针侦侲帧枮浈珎珍胗貞帪桢眞真砧祯針偵酙寊幀揕湞葴遉嫃搸斟椹楨溱獉甄禎蒖蓁鉁榛槙殝瑧碪禛潧箴樼澵臻薽錱轃鍼籈鱵",
  "zhén": "",
  "zhěn": "诊抮枕姫弫昣轸屒畛疹眕袗紾聄萙竧裖覙診軫嫃缜槙稹駗縝縥辴鬒黰",
  "zhèn": "圳阵纼甽侲挋陣鸩振朕栚紖桭眹赈塦揕絼榐瑱誫賑鋴镇震鴆鎮鎭",
  "zhēng": "凧争佂姃征怔爭糽埩峥炡狰烝眐脀钲埥崝崢掙猙睁聇铮媜揁筝徰睜蒸踭鉦徴箏綪錚徵篜鬇癥鏳",
  "zhěng": "氶抍糽拯掟晸愸撜整",
  "zhèng": "氶证诤郑政徎钲掙幁証塣諍靕鄭憕鴊證",
  "zhī": "之支卮汁芝巵汥呮泜肢栀祗秓胑胝衼倁栺疷祬脂隻梔菭椥臸搘稙綕榰蜘馶憄鳷鴲織鼅蘵",
  "zhí": "执侄妷直秇姪郦値值聀釞埴執淔职戠植犆禃絷臷跖瓡摕摭馽嬂慹漐潪踯樴膱縶職蟙蹠軄躑",
  "zhǐ": "夂止凪劧旨阯坁址帋扺汦沚纸芷坧抧杫祇祉茋咫恉指枳洔砋秖衹轵淽疻紙蚔訨趾軹黹禔筫絺酯墌徴徵槯藢襧",
  "zhì": "至芖坁志忮扻豸制厔垁帙帜斦治炙质迣郅俧峙庢庤挃柣栉洷祑陟娡徏挚捗晊桎歭狾秩致袟贽轾乿偫剬徝掷梽楖猘畤痓痔眰秲秷窒紩翐袠觗貭铚鸷傂崻彘智滞痣蛭骘寘廌搱滍稚筫置跱輊锧雉墆滯潌疐瘈聜製覟誌銍幟憄摨摯潪熫稺膣觯質踬銴鋕擳旘瀄璏緻隲駤鴙儨劕懥擲擿櫛穉螲懫織贄櫍瓆觶騭鯯礩豑鶨騺驇躓鷙鑕豒",
  "zhōng": "夂伀汷刣妐彸忪忠泈炂终柊盅衳钟舯衷終鈡幒蔠蜙锺銿螤鴤螽鍾斔鼨蹱鐘籦",
  "zhǒng": "肿冢喠尰塚歱煄腫瘇種徸踵穜",
  "zhòng": "仲众妕狆祌茽衶蚛偅眾堹媑筗衆種緟諥",
  "zhōu": "州舟诌侜周洲炿诪烐珘辀郮啁婤徟掫淍矪週鸼喌赒輈翢銂賙輖霌駲嚋盩謅鵃騆譸",
  "zhóu": "妯軸碡",
  "zhǒu": "肘帚疛胕菷晭睭箒鯞",
  "zhòu": "纣伷呪咒宙绉冑咮昼紂胄荮皱酎晝粙椆葤詋軸甃僽皺駎噣縐繇薵骤籀籕籒驟",
  "zhū": "侏诛邾洙茱株珠诸猪硃秼袾铢絑蛛誅跦槠潴蕏蝫銖橥諸豬駯鮢鴸瀦藸鼄櫧櫫鯺蠩",
  "zhú": "朮竹竺炢笁茿烛窋逐笜舳逫瘃蓫敱磩築篴斀燭蠋躅鱁劚孎灟斸曯欘爥蠾钃",
  "zhǔ": "丶主劯宔拄砫罜陼帾渚煑煮詝褚嘱濐燝麈瞩屬囑鸀矚",
  "zhù": "伫佇住纻芧苎坾拀杼注苧贮迬驻乼壴柱柷殶炷祝疰眝砫祩竚莇紵紸羜蛀尌嵀註貯跓軴铸筯鉒飳馵嗻墸箸翥樦澍鋳駐築篫麆簗櫡鑄",
  "zhuā": "抓挝撾檛膼簻髽",
  "zhuǎ": "爫",
  "zhuāi": "拽",
  "zhuǎi": "跩",
  "zhuài": "拽睉",
  "zhuān": "专叀専恮砖耑專剸鄟塼嫥漙瑼甎磗膞颛磚諯篿蟤顓鱄",
  "zhuǎn": "孨転膞竱轉",
  "zhuàn": "灷啭転堟蒃傳瑑腞僎僝赚撰篆馔篹縳襈賺簨贃譔饌囀籑",
  "zhuāng": "妆庄妝庒荘娤桩莊梉湷粧装裝樁糚",
  "zhuǎng": "奘",
  "zhuàng": "壮壯状狀壵焋僮漴撞戅戆戇",
  "zhuī": "隹骓锥錐騅鵻",
  "zhuǐ": "沝",
  "zhuì": "坠笍奞娷缀隊惴甀缒腏畷硾膇墜綴赘縋諈醊錣礈贅鑆",
  "zhūn": "圫宒忳迍肫窀谆啍諄衠",
  "zhǔn": "准埻凖準稕綧",
  "zhùn": "旽訰稕綧",
  "zhuō": "拙炪倬捉桌梲棁涿淖棳棹焯窧槕穛鐯穱",
  "zhuó": "圴彴汋犳灼卓叕妰茁斫浊丵剢捔浞烵诼酌啄啅娺聉斱斮晫椓琸硺窡罬蓔墌撯擆斲禚劅諁諑趠鋜噣濁燋篧擢斀斵濯藋櫡謶镯繳鵫灂蠗鐲籗鷟蠿籱",
  "zhuò": "",
  "chǎng,ān,hàn": "厂",
  "dīng,zhēng": "丁",
  "bǔ,bo": "卜",
  "jǐ,jī": "几",
  "le,liǎo": "了",
  "gān,gàn": "干",
  "dà,dài,tài": "大",
  "yǔ,yù,yú": "与",
  "shàng,shǎng": "上",
  "wàn,mò": "万",
  "gè,gě": "个各",
  "me,mó,ma,yāo": "么",
  "guǎng,ān": "广",
  "wáng,wú": "亡",
  "nǚ,rǔ": "女",
  "chā,chá,chǎ": "叉",
  "wáng,wàng": "王",
  "fū,fú": "夫",
  "zhā,zā,zhá": "扎",
  "bù,fǒu": "不",
  "qū,ōu": "区",
  "chē,jū": "车",
  "qiè,qiē": "切",
  "wǎ,wà": "瓦",
  "tún,zhūn": "屯",
  "shǎo,shào": "少",
  "zhōng,zhòng": "中",
  "nèi,nà": "内",
  "jiàn,xiàn": "见",
  "cháng,zhǎng": "长",
  "shén,shí": "什",
  "piàn,piān": "片",
  "pú,pū": "仆",
  "huà,huā": "化",
  "chóu,qiú": "仇",
  "zhuǎ,zhǎo": "爪",
  "jǐn,jìn": "仅",
  "fù,fǔ": "父",
  "cóng,zòng": "从",
  "fēn,fèn": "分",
  "shì,zhī": "氏",
  "fēng,fěng": "风",
  "gōu,gòu": "勾",
  "liù,lù": "六",
  "dǒu,dòu": "斗",
  "wèi,wéi": "为",
  "chǐ,chě": "尺",
  "yǔ,yú": "予",
  "dǎ,dá": "打",
  "zhèng,zhēng": "正症挣",
  "bā,pá": "扒",
  "jié,jiē": "节结",
  "shù,shú,zhú": "术",
  "kě,kè": "可",
  "shí,dàn": "石",
  "kǎ,qiǎ": "卡",
  "běi,bèi": "北",
  "zhàn,zhān": "占",
  "qiě,jū": "且",
  "yè,xié": "叶",
  "hào,háo": "号",
  "zhī,zhǐ": "只",
  "dāo,tāo": "叨",
  "zǎi,zǐ,zī": "仔",
  "lìng,líng,lǐng": "令",
  "lè,yuè": "乐",
  "jù,gōu": "句",
  "chù,chǔ": "处",
  "tóu,tou": "头",
  "níng,nìng,zhù": "宁",
  "zhào,shào": "召",
  "fā,fà": "发",
  "tái,tāi": "台苔",
  "káng,gāng": "扛",
  "dì,de": "地",
  "sǎo,sào": "扫",
  "chǎng,cháng": "场",
  "pǔ,pò,pō,piáo": "朴",
  "guò,guo,guō": "过",
  "yā,yà": "压",
  "yǒu,yòu": "有",
  "kuā,kuà": "夸",
  "xié,yá,yé,yú,xú": "邪",
  "jiá,jiā,gā,xiá": "夹",
  "huà,huá": "划",
  "dāng,dàng": "当",
  "tù,tǔ": "吐",
  "xià,hè": "吓",
  "tóng,tòng": "同",
  "qū,qǔ": "曲",
  "ma,má,mǎ": "吗",
  "qǐ,kǎi": "岂",
  "zhū,shú": "朱",
  "chuán,zhuàn": "传",
  "xiū,xǔ": "休",
  "rèn,rén": "任",
  "huá,huà,huā": "华",
  "jià,jiè,jie": "价",
  "fèn,bīn": "份",
  "yǎng,áng": "仰",
  "xiě,xuè": "血",
  "sì,shì": "似",
  "háng,xíng": "行",
  "huì,kuài": "会",
  "hé,gě": "合",
  "chuàng,chuāng": "创",
  "chōng,chòng": "冲",
  "qí,jì,zī,zhāi": "齐",
  "yáng,xiáng": "羊",
  "bìng,bīng": "并",
  "hàn,hán": "汗",
  "tāng,shāng": "汤",
  "xīng,xìng": "兴",
  "xǔ,hǔ": "许",
  "lùn,lún": "论",
  "nà,nǎ,nèi,nā": "那",
  "jìn,jǐn": "尽",
  "sūn,xùn": "孙",
  "xì,hū": "戏",
  "hǎo,hào": "好",
  "tā,jiě": "她",
  "guān,guàn": "观冠",
  "hóng,gōng": "红",
  "xiān,qiàn": "纤",
  "jì,jǐ": "纪济",
  "yuē,yāo": "约",
  "nòng,lòng": "弄",
  "yuǎn,yuàn": "远",
  "huài,pēi,pī,péi": "坏",
  "zhé,shé,zhē": "折",
  "qiǎng,qiāng,chēng": "抢",
  "ké,qiào": "壳",
  "fāng,fáng": "坊",
  "bǎ,bà": "把",
  "gān,gǎn": "杆",
  "sū,sù": "苏",
  "gàng,gāng": "杠",
  "gèng,gēng": "更",
  "lì,lí": "丽",
  "hái,huán": "还",
  "fǒu,pǐ": "否",
  "xiàn,xuán": "县",
  "zhù,chú": "助",
  "ya,yā": "呀",
  "chǎo,chāo": "吵",
  "yuán,yún,yùn": "员",
  "ba,bā": "吧",
  "bié,biè": "别",
  "dīng,dìng": "钉",
  "gū,gù": "估",
  "hé,hē,hè": "何",
  "tǐ,tī,bèn": "体",
  "bó,bǎi,bà": "伯",
  "yòng,yōng": "佣",
  "fó,fú,bì,bó": "佛",
  "dù,dǔ": "肚",
  "guī,jūn,qiū": "龟",
  "jiǎo,jué": "角",
  "tiáo,tiāo": "条",
  "xì,jì": "系",
  "yìng,yīng": "应",
  "zhè,zhèi": "这",
  "jiān,jiàn": "间监",
  "mēn,mèn": "闷",
  "dì,tì,tuí": "弟",
  "shā,shà": "沙",
  "shà,shā": "煞",
  "méi,mò": "没",
  "shěn,chén": "沈",
  "shí,zhì": "识",
  "niào,suī": "尿",
  "wěi,yǐ": "尾",
  "ē,ā": "阿",
  "jìn,jìng": "劲",
  "zòng,zǒng": "纵",
  "wén,wèn": "纹",
  "mǒ,mò,mā": "抹",
  "dān,dàn,dǎn": "担",
  "chāi,cā": "拆",
  "jū,gōu": "拘",
  "lā,lá": "拉",
  "bàn,pàn": "拌",
  "zé,zhái": "择",
  "qí,jī": "其奇",
  "ruò,rě": "若",
  "píng,pēng": "苹",
  "zhī,qí": "枝",
  "guì,jǔ": "柜",
  "sàng,sāng": "丧",
  "cì,cī": "刺",
  "yǔ,yù": "雨语",
  "bēn,bèn": "奔",
  "qī,qì": "妻",
  "zhuǎn,zhuàn,zhuǎi": "转",
  "xiē,suò": "些",
  "ne,ní": "呢",
  "tiě,tiē,tiè,": "帖",
  "lǐng,líng": "岭",
  "zhī,zhì": "知织",
  "hé,hè,huó,huò,hú": "和",
  "gòng,gōng": "供共",
  "wěi,wēi": "委",
  "cè,zè,zhāi": "侧",
  "pò,pǎi": "迫",
  "de,dì,dí": "的",
  "cǎi,cài": "采",
  "fú,fù": "服",
  "dǐ,de": "底",
  "jìng,chēng": "净",
  "juàn,juǎn": "卷",
  "quàn,xuàn": "券",
  "dān,shàn,chán": "单",
  "qiǎn,jiān": "浅",
  "xiè,yì": "泄",
  "pō,bó": "泊",
  "pào,pāo": "泡",
  "ní,nì": "泥",
  "zé,shì": "泽",
  "kōng,kòng,kǒng": "空",
  "láng,làng": "郎",
  "xiáng,yáng": "详",
  "lì,dài": "隶",
  "shuā,shuà": "刷",
  "jiàng,xiáng": "降",
  "cān,shēn,cēn,sān": "参",
  "dú,dài": "毒",
  "kuà,kū": "挎",
  "dǎng,dàng": "挡",
  "kuò,guā": "括",
  "shí,shè": "拾",
  "tiāo,tiǎo": "挑",
  "shèn,shén": "甚",
  "xiàng,hàng": "巷",
  "nán,nā": "南",
  "xiāng,xiàng": "相",
  "chá,zhā": "查",
  "bǎi,bó,bò": "柏",
  "yào,yāo": "要",
  "yán,yàn": "研",
  "qì,qiè": "砌",
  "bèi,bēi": "背",
  "shěng,xǐng": "省",
  "xiāo,xuē": "削",
  "hǒng,hōng,hòng": "哄",
  "mào,mò": "冒",
  "yǎ,yā": "哑",
  "sī,sāi": "思",
  "mǎ,mā,mà": "蚂",
  "huá,huā": "哗",
  "yè,yàn,yān": "咽",
  "zán,zǎ": "咱",
  "hā,hǎ,hà": "哈",
  "nǎ,něi,na,né": "哪",
  "hāi,ké": "咳",
  "gǔ,gū": "骨",
  "gāng,gàng": "钢",
  "yào,yuè": "钥",
  "kàn,kān": "看",
  "zhòng,zhǒng,chóng": "种",
  "biàn,pián": "便",
  "zhòng,chóng": "重",
  "xìn,shēn": "信",
  "zhuī,duī": "追",
  "dài,dāi": "待",
  "shí,sì,yì": "食",
  "mài,mò": "脉",
  "jiāng,jiàng": "将浆",
  "dù,duó": "度",
  "qīn,qìng": "亲",
  "chà,chā,chāi,cī": "差",
  "zhà,zhá": "炸",
  "pào,páo,bāo": "炮",
  "sǎ,xǐ": "洒",
  "xǐ,xiǎn": "洗",
  "jué,jiào": "觉",
  "biǎn,piān": "扁",
  "shuō,shuì,yuè": "说",
  "lǎo,mǔ": "姥",
  "gěi,jǐ": "给",
  "luò,lào": "络",
  "zǎi,zài": "载",
  "mái,mán": "埋",
  "shāo,shào": "捎稍",
  "dū,dōu": "都",
  "ái,āi": "挨",
  "mò,mù": "莫",
  "è,wù,ě,wū": "恶",
  "xiào,jiào": "校",
  "hé,hú": "核",
  "yūn,yùn": "晕",
  "huàng,huǎng": "晃",
  "ài,āi": "唉",
  "ā,á,ǎ,à,a": "啊",
  "bà,ba,pí": "罢",
  "zuàn,zuān": "钻",
  "qiān,yán": "铅",
  "chéng,shèng": "乘",
  "mì,bì": "秘泌",
  "chēng,chèn,chèng": "称",
  "dào,dǎo": "倒",
  "tǎng,cháng": "倘",
  "chàng,chāng": "倡",
  "chòu,xiù": "臭",
  "shè,yè,yì": "射",
  "gē,gé": "胳搁",
  "shuāi,cuī": "衰",
  "liáng,liàng": "凉量",
  "chù,xù": "畜",
  "páng,bàng": "旁磅",
  "zhǎng,zhàng": "涨",
  "yǒng,chōng": "涌",
  "qiāo,qiǎo": "悄",
  "jiā,jia,jie": "迦家",
  "dú,dòu": "读",
  "shàn,shān": "扇",
  "shān,shàn": "苫",
  "bèi,pī": "被",
  "tiáo,diào,zhōu": "调",
  "bō,bāo": "剥",
  "néng,nài": "能",
  "nán,nàn,nuó": "难",
  "pái,pǎi": "排",
  "jiào,jiāo": "教",
  "jù,jū": "据",
  "zhù,zhuó,zhe": "著",
  "jūn,jùn": "菌",
  "lè,lēi": "勒",
  "shāo,sào": "梢",
  "fù,pì": "副",
  "piào,piāo": "票",
  "shèng,chéng": "盛",
  "què,qiāo,qiǎo": "雀",
  "chí,shi": "匙",
  "mī,mí": "眯",
  "la,lā": "啦",
  "shé,yí": "蛇",
  "lèi,léi,lěi": "累",
  "zhǎn,chán": "崭",
  "quān,juàn,juān": "圈",
  "lóng,lǒng": "笼",
  "dé,děi,de": "得",
  "jiǎ,jià": "假",
  "māo,máo": "猫",
  "xuán,xuàn": "旋",
  "zhe,zhuó,zháo,zhāo": "着",
  "lǜ,shuài": "率",
  "gài,gě,hé": "盖",
  "lín,lìn": "淋",
  "qú,jù": "渠",
  "jiàn,jiān": "渐溅",
  "hùn,hún": "混",
  "sù,xiǔ,xiù": "宿",
  "tán,dàn": "弹",
  "yǐn,yìn": "隐",
  "jǐng,gěng": "颈",
  "lǜ,lù": "绿",
  "qū,cù": "趋",
  "tí,dī,dǐ": "提",
  "jiē,qì": "揭",
  "lǒu,lōu": "搂",
  "qī,jī": "期",
  "sàn,sǎn": "散",
  "gě,gé": "葛",
  "zhāo,cháo": "朝",
  "luò,là,lào": "落",
  "yǐ,yī": "椅",
  "gùn,hùn": "棍",
  "zhí,shi": "殖",
  "xià,shà": "厦",
  "liè,liě": "裂",
  "jǐng,yǐng": "景",
  "pēn,pèn": "喷",
  "pǎo,páo": "跑",
  "hē,hè,yè": "喝",
  "pù,pū": "铺",
  "zhù,zhú": "筑",
  "dá,dā": "答",
  "bǎo,bǔ,pù": "堡",
  "ào,yù": "奥",
  "fān,pān": "番",
  "là,xī": "腊",
  "gǎng,jiǎng": "港",
  "céng,zēng": "曾",
  "yú,tōu": "愉",
  "qiáng,qiǎng,jiàng": "强",
  "shǔ,zhǔ": "属",
  "zhōu,yù": "粥",
  "shè,niè": "摄",
  "tián,zhèn": "填",
  "méng,mēng,měng": "蒙",
  "jìn,jīn": "禁",
  "lù,liù": "碌",
  "tiào,táo": "跳",
  "é,yǐ": "蛾",
  "jiě,jiè,xiè": "解",
  "shù,shǔ,shuò": "数",
  "liū,liù": "溜",
  "sāi,sài,sè": "塞",
  "pì,bì": "辟",
  "fèng,féng": "缝",
  "piě,piē": "撇",
  "mó,mú": "模",
  "bǎng,bàng": "榜",
  "shang,cháng": "裳",
  "xiān,xiǎn": "鲜",
  "yí,nǐ": "疑",
  "gāo,gào": "膏",
  "piāo,piào,piǎo": "漂",
  "suō,sù": "缩",
  "qù,cù": "趣",
  "sā,sǎ": "撒",
  "tàng,tāng": "趟",
  "héng,hèng": "横",
  "mán,mén": "瞒",
  "bào,pù": "暴",
  "mó,mā": "摩",
  "hú,hū,hù": "糊",
  "pī,pǐ": "劈",
  "yàn,yān": "燕",
  "báo,bó,bò": "薄",
  "mó,mò": "磨",
  "jiǎo,zhuó": "缴",
  "cáng,zàng": "藏",
  "fán,pó": "繁",
  "bì,bei": "臂",
  "chàn,zhàn": "颤",
  "jiāng,qiáng": "疆",
  "jiáo,jué,jiào": "嚼",
  "rǎng,rāng": "嚷",
  "lù,lòu": "露",
  "náng,nāng": "囊",
  "hāng,bèn": "夯",
  "āo,wā": "凹",
  "féng,píng": "冯",
  "xū,yù": "吁",
  "lèi,lē": "肋",
  "lūn,lún": "抡",
  "jiè,gài": "芥",
  "xīn,xìn": "芯",
  "chā,chà": "杈",
  "xiāo,xiào": "肖",
  "zhī,zī": "吱",
  "ǒu,ōu,òu": "呕",
  "nà,nè": "呐",
  "qiàng,qiāng": "呛",
  "tún,dùn": "囤",
  "kēng,háng": "吭",
  "diàn,tián": "佃",
  "sì,cì": "伺",
  "diàn,tián,shèng": "甸",
  "páo,bào": "刨",
  "duì,ruì,yuè": "兑",
  "kē,kě": "坷",
  "tuò,tà,zhí": "拓",
  "fú,bì": "拂",
  "nǐng,níng,nìng": "拧",
  "ào,ǎo,niù": "拗",
  "kē,hē": "苛",
  "yān,yǎn": "奄",
  "hē,a,kē": "呵",
  "gā,kā": "咖",
  "jiǎo,yáo": "侥",
  "chà,shā": "刹",
  "nüè,yào": "疟",
  "máng,méng": "氓",
  "gē,yì": "疙",
  "jǔ,jù": "沮",
  "zú,cù": "卒",
  "wǎn,yuān": "宛",
  "mí,mǐ": "弥",
  "qì,qiè,xiè": "契",
  "xié,jiā": "挟",
  "duò,duǒ": "垛",
  "zhà,shān,shi,cè": "栅",
  "bó,bèi": "勃",
  "zhóu,zhòu": "轴",
  "liē,liě,lié,lie": "咧",
  "yo,yō": "哟",
  "qiào,xiào": "俏",
  "hóu,hòu": "侯",
  "píng,bǐng": "屏",
  "nà,nuó": "娜",
  "pá,bà": "耙",
  "qī,xī": "栖",
  "jiǎ,gǔ": "贾",
  "láo,lào": "唠",
  "bàng,bèng": "蚌",
  "gōng,zhōng": "蚣",
  "li,lǐ,lī": "哩",
  "juè,jué": "倔",
  "yīn,yān,yǐn": "殷",
  "wō,guō": "涡",
  "lào,luò": "烙",
  "niǎn,niē": "捻",
  "yè,yē": "掖",
  "chān,xiān,càn,shǎn": "掺",
  "dǎn,shàn": "掸",
  "fēi,fěi": "菲",
  "qián,gān": "乾",
  "shuò,shí": "硕",
  "luō,luó,luo": "啰",
  "hǔ,xià": "唬",
  "dāng,chēng": "铛",
  "xiǎn,xǐ": "铣",
  "jiǎo,jiáo": "矫",
  "kuǐ,guī": "傀",
  "jì,zhài": "祭",
  "tǎng,chǎng": "淌",
  "chún,zhūn": "淳",
  "wèi,yù": "尉",
  "duò,huī": "堕",
  "chuò,chāo": "绰",
  "bēng,běng,bèng": "绷",
  "zōng,zèng": "综",
  "zhuó,zuó": "琢",
  "chuǎi,chuài,chuāi,tuán,zhuī": "揣",
  "péng,bāng": "彭",
  "zhuī,chuí": "椎",
  "léng,lēng,líng": "棱",
  "qiào,qiáo": "翘",
  "zhā,chā": "喳",
  "há,gé": "蛤",
  "qiàn,kàn": "嵌",
  "yān,ā": "腌",
  "dūn,duì": "敦",
  "kuì,huì": "溃",
  "sāo,sǎo": "骚",
  "kǎi,jiē": "楷",
  "pín,bīn": "频",
  "liú,liù": "馏",
  "nì,niào": "溺",
  "jiǎo,chāo": "剿",
  "áo,āo": "熬",
  "màn,wàn": "蔓",
  "chá,chā": "碴",
  "xūn,xùn": "熏",
  "da,dá": "瘩",
  "tuì,tùn": "褪",
  "liáo,liāo": "撩",
  "cuō,zuǒ": "撮",
  "cháo,zhāo": "嘲",
  "hēi,mò": "嘿",
  "zhuàng,chuáng": "幢",
  "jī,qǐ": "稽",
  "biě,biē": "瘪",
  "liáo,lào,lǎo": "潦",
  "chéng,dèng": "澄",
  "lèi,léi": "擂",
  "mò,má": "蟆",
  "liáo,liǎo": "燎",
  "liào,liǎo": "瞭",
  "sào,sāo": "臊",
  "mí,méi": "糜",
  "huò,huō,huá": "豁",
  "pù,bào": "瀑",
  "zǎn,cuán": "攒",
  "bò,bǒ": "簸",
  "bó,bù": "簿"
};

/***/ }),

/***/ "./node_modules/pinyin/lib/phonetic-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/pinyin/lib/phonetic-symbol.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// 带声调字符。
module.exports = {
  "ā": "a1",
  "á": "a2",
  "ǎ": "a3",
  "à": "a4",
  "ē": "e1",
  "é": "e2",
  "ě": "e3",
  "è": "e4",
  "ō": "o1",
  "ó": "o2",
  "ǒ": "o3",
  "ò": "o4",
  "ī": "i1",
  "í": "i2",
  "ǐ": "i3",
  "ì": "i4",
  "ū": "u1",
  "ú": "u2",
  "ǔ": "u3",
  "ù": "u4",
  "ü": "v0",
  "ǘ": "v2",
  "ǚ": "v3",
  "ǜ": "v4",
  "ń": "n2",
  "ň": "n3",
  "": "m2"
};

/***/ }),

/***/ "./node_modules/pinyin/lib/pinyin.js":
/*!*******************************************!*\
  !*** ./node_modules/pinyin/lib/pinyin.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"); // XXX: Symbol when web support.


var PINYIN_STYLE = {
  NORMAL: 0,
  // 普通风格，不带声调。
  TONE: 1,
  // 标准风格，声调在韵母的第一个字母上。
  TONE2: 2,
  // 声调以数字形式在拼音之后，使用数字 0~4 标识。
  TO3NE: 5,
  // 声调以数字形式在声母之后，使用数字 0~4 标识。
  INITIALS: 3,
  // 仅需要声母部分。
  FIRST_LETTER: 4 // 仅保留首字母。

};
var DEFAULT_OPTIONS = {
  style: PINYIN_STYLE.TONE,
  // 风格
  segment: false,
  // 分词。
  heteronym: false // 多音字

}; // 声母表。

var INITIALS = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(","); // 韵母表。
//const FINALS = "ang,eng,ing,ong,an,en,in,un,er,ai,ei,ui,ao,ou,iu,ie,ve,a,o,e,i,u,v".split(",");
// 带声调字符。

var PHONETIC_SYMBOL = __webpack_require__(/*! ./phonetic-symbol */ "./node_modules/pinyin/lib/phonetic-symbol.js");

var RE_PHONETIC_SYMBOL = new RegExp("([" + Object.keys(PHONETIC_SYMBOL).join("") + "])", "g");
var RE_TONE2 = /([aeoiuvnm])([0-4])$/;
/*
 * 格式化拼音为声母（Initials）形式。
 * @param {String}
 * @return {String}
 */

function initials(pinyin) {
  for (var i = 0, l = INITIALS.length; i < l; i++) {
    if (pinyin.indexOf(INITIALS[i]) === 0) {
      return INITIALS[i];
    }
  }

  return "";
}

var Pinyin = /*#__PURE__*/function () {
  function Pinyin(dict) {
    _classCallCheck(this, Pinyin);

    this._dict = dict;
  } // @param {String} hans 要转为拼音的目标字符串（汉字）。
  // @param {Object} options, 可选，用于指定拼音风格，是否启用多音字。
  // @return {Array} 返回的拼音列表。


  _createClass(Pinyin, [{
    key: "convert",
    value: function convert(hans, options) {
      if (typeof hans !== "string") {
        return [];
      }

      options = assign({}, DEFAULT_OPTIONS, options);
      var pys = [];
      var nohans = "";

      for (var i = 0, firstCharCode, words, l = hans.length; i < l; i++) {
        words = hans[i];
        firstCharCode = words.charCodeAt(0);

        if (this._dict[firstCharCode]) {
          // ends of non-chinese words.
          if (nohans.length > 0) {
            pys.push([nohans]);
            nohans = ""; // reset non-chinese words.
          }

          pys.push(this.single_pinyin(words, options));
        } else {
          nohans += words;
        }
      } // 清理最后的非中文字符串。


      if (nohans.length > 0) {
        pys.push([nohans]);
        nohans = ""; // reset non-chinese words.
      }

      return pys;
    } // 单字拼音转换。
    // @param {String} han, 单个汉字
    // @return {Array} 返回拼音列表，多音字会有多个拼音项。

  }, {
    key: "single_pinyin",
    value: function single_pinyin(han, options) {
      if (typeof han !== "string") {
        return [];
      }

      if (han.length !== 1) {
        return this.single_pinyin(han.charAt(0), options);
      }

      var hanCode = han.charCodeAt(0);

      if (!this._dict[hanCode]) {
        return [han];
      }

      var pys = this._dict[hanCode].split(",");

      if (!options.heteronym) {
        return [Pinyin.toFixed(pys[0], options.style)];
      } // 临时存储已存在的拼音，避免多音字拼音转换为非注音风格出现重复。


      var py_cached = {};
      var pinyins = [];

      for (var i = 0, py, l = pys.length; i < l; i++) {
        py = Pinyin.toFixed(pys[i], options.style);

        if (py_cached.hasOwnProperty(py)) {
          continue;
        }

        py_cached[py] = py;
        pinyins.push(py);
      }

      return pinyins;
    }
    /**
     * 格式化拼音风格。
     *
     * @param {String} pinyin TONE 风格的拼音。
     * @param {ENUM} style 目标转换的拼音风格。
     * @return {String} 转换后的拼音。
     */

  }, {
    key: "compare",
    value:
    /**
     * 比较两个汉字转成拼音后的排序顺序，可以用作默认的拼音排序算法。
     *
     * @param {String} hanA 汉字字符串 A。
     * @return {String} hanB 汉字字符串 B。
     * @return {Number} 返回 -1，0，或 1。
     */
    function compare(hanA, hanB) {
      var pinyinA = this.convert(hanA, DEFAULT_OPTIONS);
      var pinyinB = this.convert(hanB, DEFAULT_OPTIONS);
      return String(pinyinA).localeCompare(String(pinyinB));
    }
  }], [{
    key: "toFixed",
    value: function toFixed(pinyin, style) {
      var tone = ""; // 声调。

      var first_letter;
      var py;

      switch (style) {
        case PINYIN_STYLE.INITIALS:
          return initials(pinyin);

        case PINYIN_STYLE.FIRST_LETTER:
          first_letter = pinyin.charAt(0);

          if (PHONETIC_SYMBOL.hasOwnProperty(first_letter)) {
            first_letter = PHONETIC_SYMBOL[first_letter].charAt(0);
          }

          return first_letter;

        case PINYIN_STYLE.NORMAL:
          return pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1_phonetic) {
            return PHONETIC_SYMBOL[$1_phonetic].replace(RE_TONE2, "$1");
          });

        case PINYIN_STYLE.TO3NE:
          return pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1_phonetic) {
            return PHONETIC_SYMBOL[$1_phonetic];
          });

        case PINYIN_STYLE.TONE2:
          py = pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1) {
            // 声调数值。
            tone = PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$2");
            return PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$1");
          });
          return py + tone;

        case PINYIN_STYLE.TONE:
        default:
          return pinyin;
      }
    }
  }, {
    key: "STYLE_NORMAL",
    get: function get() {
      return PINYIN_STYLE.NORMAL;
    }
  }, {
    key: "STYLE_TONE",
    get: function get() {
      return PINYIN_STYLE.TONE;
    }
  }, {
    key: "STYLE_TONE2",
    get: function get() {
      return PINYIN_STYLE.TONE2;
    }
  }, {
    key: "STYLE_TO3NE",
    get: function get() {
      return PINYIN_STYLE.TO3NE;
    }
  }, {
    key: "STYLE_INITIALS",
    get: function get() {
      return PINYIN_STYLE.INITIALS;
    }
  }, {
    key: "STYLE_FIRST_LETTER",
    get: function get() {
      return PINYIN_STYLE.FIRST_LETTER;
    }
  }, {
    key: "DEFAULT_OPTIONS",
    get: function get() {
      return DEFAULT_OPTIONS;
    }
  }]);

  return Pinyin;
}();

module.exports = Pinyin;

/***/ }),

/***/ "./node_modules/pinyin/lib/web-pinyin.js":
/*!***********************************************!*\
  !*** ./node_modules/pinyin/lib/web-pinyin.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 解压拼音库。
// @param {Object} dict_combo, 压缩的拼音库。
// @param {Object} 解压的拼音库。

function buildPinyinCache(dict_combo) {
  var hans;
  var uncomboed = {};

  for (var py in dict_combo) {
    hans = dict_combo[py];

    for (var i = 0, han, l = hans.length; i < l; i++) {
      han = hans.charCodeAt(i);

      if (!uncomboed.hasOwnProperty(han)) {
        uncomboed[han] = py;
      } else {
        uncomboed[han] += "," + py;
      }
    }
  }

  return uncomboed;
}

var PINYIN_DICT = buildPinyinCache(__webpack_require__(/*! ../data/dict-zi-web */ "./node_modules/pinyin/data/dict-zi-web.js"));

var Pinyin = __webpack_require__(/*! ./pinyin */ "./node_modules/pinyin/lib/pinyin.js");

var pinyin = new Pinyin(PINYIN_DICT);
module.exports = pinyin.convert.bind(pinyin);
module.exports.compare = pinyin.compare.bind(pinyin);
module.exports.STYLE_NORMAL = Pinyin.STYLE_NORMAL;
module.exports.STYLE_TONE = Pinyin.STYLE_TONE;
module.exports.STYLE_TONE2 = Pinyin.STYLE_TONE2;
module.exports.STYLE_TO3NE = Pinyin.STYLE_TO3NE;
module.exports.STYLE_INITIALS = Pinyin.STYLE_INITIALS;
module.exports.STYLE_FIRST_LETTER = Pinyin.STYLE_FIRST_LETTER;

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm-bundler.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm-bundler.js ***!
  \****************************************************************/
/*! exports provided: NavigationFailureType, RouterLink, RouterView, START_LOCATION, createMemoryHistory, createRouter, createRouterMatcher, createWebHashHistory, createWebHistory, isNavigationFailure, matchedRouteKey, onBeforeRouteLeave, onBeforeRouteUpdate, parseQuery, routeLocationKey, routerKey, routerViewLocationKey, stringifyQuery, useLink, useRoute, useRouter, viewDepthKey */
/*! exports used: useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, document) {/* unused harmony export NavigationFailureType */
/* unused harmony export RouterLink */
/* unused harmony export RouterView */
/* unused harmony export START_LOCATION */
/* unused harmony export createMemoryHistory */
/* unused harmony export createRouter */
/* unused harmony export createRouterMatcher */
/* unused harmony export createWebHashHistory */
/* unused harmony export createWebHistory */
/* unused harmony export isNavigationFailure */
/* unused harmony export matchedRouteKey */
/* unused harmony export onBeforeRouteLeave */
/* unused harmony export onBeforeRouteUpdate */
/* unused harmony export parseQuery */
/* unused harmony export routeLocationKey */
/* unused harmony export routerKey */
/* unused harmony export routerViewLocationKey */
/* unused harmony export stringifyQuery */
/* unused harmony export useLink */
/* unused harmony export useRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRouter; });
/* unused harmony export viewDepthKey */
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_devtools_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/lib/esm/index.js");





var _ErrorTypeMessages;

/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */


var hasSymbol = typeof Symbol === 'function' && Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Symbol.toStringTag) === 'symbol';

var PolySymbol = function PolySymbol(name) {
  return (// vr = vue router
    hasSymbol ? Symbol( true ? '[vue-router]: ' + name : undefined) : ( true ? '[vue-router]: ' : undefined) + name
  );
}; // rvlm = Router View Location Matched

/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */


var matchedRouteKey = /*#__PURE__*/PolySymbol( true ? 'router view location matched' : undefined);
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */

var viewDepthKey = /*#__PURE__*/PolySymbol( true ? 'router view depth' : undefined);
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */

var routerKey = /*#__PURE__*/PolySymbol( true ? 'router' : undefined);
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */

var routeLocationKey = /*#__PURE__*/PolySymbol( true ? 'route location' : undefined);
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */

var routerViewLocationKey = /*#__PURE__*/PolySymbol( true ? 'router view location' : undefined);
var isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

var assign = Object.assign;

function applyToParams(fn, params) {
  var newParams = {};

  for (var key in params) {
    var value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }

  return newParams;
}

var noop = function noop() {};

function warn(msg) {
  // avoid using ...args as it breaks in older Edge builds
  var args = Array.from(arguments).slice(1);
  console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

var TRAILING_SLASH_RE = /\/$/;

var removeTrailingSlash = function removeTrailingSlash(path) {
  return path.replace(TRAILING_SLASH_RE, '');
};
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */


function parseURL(parseQuery, location) {
  var currentLocation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
  var path,
      query = {},
      searchString = '',
      hash = ''; // Could use URL and URLSearchParams but IE 11 doesn't support it

  var searchPos = location.indexOf('?');
  var hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);

  if (searchPos > -1) {
    path = location.slice(0, searchPos);
    searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
    query = parseQuery(searchString);
  }

  if (hashPos > -1) {
    path = path || location.slice(0, hashPos); // keep the # character

    hash = location.slice(hashPos, location.length);
  } // no search and no query


  path = resolveRelativePath(path != null ? path : location, currentLocation); // empty path means a relative query or hash `?foo=f`, `#thing`

  return {
    fullPath: path + (searchString && '?') + searchString + hash,
    path: path,
    query: query,
    hash: hash
  };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */


function stringifyURL(stringifyQuery, location) {
  var query = location.query ? stringifyQuery(location.query) : '';
  return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */


function stripBase(pathname, base) {
  // no base or base is not found at the beginning
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
  return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */


function isSameRouteLocation(stringifyQuery, a, b) {
  var aLastIndex = a.matched.length - 1;
  var bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */


function isSameRouteRecord(a, b) {
  // since the original record has an undefined value for aliasOf
  // but all aliases point to the original record, this will always compare
  // the original record
  return (a.aliasOf || a) === (b.aliasOf || b);
}

function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (var key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
  }

  return true;
}

function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */


function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every(function (value, i) {
    return value === b[i];
  }) : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */


function resolveRelativePath(to, from) {
  if (to.startsWith('/')) return to;

  if ( true && !from.startsWith('/')) {
    warn("Cannot resolve a relative location without an absolute path. Trying to resolve \"".concat(to, "\" from \"").concat(from, "\". It should look like \"/").concat(from, "\"."));
    return to;
  }

  if (!to) return from;
  var fromSegments = from.split('/');
  var toSegments = to.split('/');
  var position = fromSegments.length - 1;
  var toPosition;
  var segment;

  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition]; // can't go below zero

    if (position === 1 || segment === '.') continue;
    if (segment === '..') position--; // found something that is not relative path
    else break;
  }

  return fromSegments.slice(0, position).join('/') + '/' + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join('/');
}

var NavigationType;

(function (NavigationType) {
  NavigationType["pop"] = "pop";
  NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));

var NavigationDirection;

(function (NavigationDirection) {
  NavigationDirection["back"] = "back";
  NavigationDirection["forward"] = "forward";
  NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */


var START = ''; // Generic utils

/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */

function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/'; // strip full URL origin

      base = base.replace(/^\w+:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  } // ensure leading slash when it was removed by the regex above avoid leading
  // slash with hash because the file could be read from the disk like file://
  // and the leading slash would cause problems


  if (base[0] !== '/' && base[0] !== '#') base = '/' + base; // remove the trailing slash so all other method can just do `base + fullPath`
  // to build an href

  return removeTrailingSlash(base);
} // remove any character before the hash


var BEFORE_HASH_RE = /^[^#]+#/;

function createHref(base, location) {
  return base.replace(BEFORE_HASH_RE, '#') + location;
}

function getElementPosition(el, offset) {
  var docRect = document.documentElement.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}

var computeScrollPosition = function computeScrollPosition() {
  return {
    left: window.pageXOffset,
    top: window.pageYOffset
  };
};

function scrollToPosition(position) {
  var scrollToOptions;

  if ('el' in position) {
    var positionEl = position.el;
    var isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
    /**
     * `id`s can accept pretty much any characters, including CSS combinators
     * like `>` or `~`. It's still possible to retrieve elements using
     * `document.getElementById('~')` but it needs to be escaped when using
     * `document.querySelector('#\\~')` for it to be valid. The only
     * requirements for `id`s are them to be unique on the page and to not be
     * empty (`id=""`). Because of that, when passing an id selector, it should
     * be properly escaped for it to work with `querySelector`. We could check
     * for the id selector to be simple (no CSS combinators `+ >~`) but that
     * would make things inconsistent since they are valid characters for an
     * `id` but would need to be escaped when using `querySelector`, breaking
     * their usage and ending up in no selector returned. Selectors need to be
     * escaped:
     *
     * - `#1-thing` becomes `#\31 -thing`
     * - `#with~symbols` becomes `#with\\~symbols`
     *
     * - More information about  the topic can be found at
     *   https://mathiasbynens.be/notes/html5-id-class.
     * - Practical example: https://mathiasbynens.be/demo/html5-id
     */

    if ( true && typeof position.el === 'string') {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          var foundEl = document.querySelector(position.el);

          if (isIdSelector && foundEl) {
            warn("The selector \"".concat(position.el, "\" should be passed as \"el: document.querySelector('").concat(position.el, "')\" because it starts with \"#\".")); // return to avoid other warnings

            return;
          }
        } catch (err) {
          warn("The selector \"".concat(position.el, "\" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).")); // return to avoid other warnings

          return;
        }
      }
    }

    var el = typeof positionEl === 'string' ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;

    if (!el) {
       true && warn("Couldn't find element using selector \"".concat(position.el, "\" returned by scrollBehavior."));
      return;
    }

    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }

  if ('scrollBehavior' in document.documentElement.style) window.scrollTo(scrollToOptions);else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}

function getScrollKey(path, delta) {
  var position = history.state ? history.state.position - delta : -1;
  return position + path;
}

var scrollPositions = new Map();

function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}

function getSavedScrollPosition(key) {
  var scroll = scrollPositions.get(key); // consume it so it's not used again

  scrollPositions.delete(key);
  return scroll;
} // TODO: RFC about how to save scroll position

/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }


var createBaseLocation = function createBaseLocation() {
  return location.protocol + '//' + location.host;
};
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */


function createCurrentLocation(base, location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash; // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end

  var hashPos = base.indexOf('#');

  if (hashPos > -1) {
    var slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    var pathFromHash = hash.slice(slicePos); // prepend the starting slash to hash so the url starts with /#

    if (pathFromHash[0] !== '/') pathFromHash = '/' + pathFromHash;
    return stripBase(pathFromHash, '');
  }

  var path = stripBase(pathname, base);
  return path + search + hash;
}

function useHistoryListeners(base, historyState, currentLocation, replace) {
  var listeners = [];
  var teardowns = []; // TODO: should it be a stack? a Dict. Check if the popstate listener
  // can trigger twice

  var pauseState = null;

  var popStateHandler = function popStateHandler(_ref) {
    var state = _ref.state;
    var to = createCurrentLocation(base, location);
    var from = currentLocation.value;
    var fromState = historyState.value;
    var delta = 0;

    if (state) {
      currentLocation.value = to;
      historyState.value = state; // ignore the popstate and reset the pauseState

      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }

      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    } // console.log({ deltaFromCurrent })
    // Here we could also revert the navigation by calling history.go(-delta)
    // this listener will have to be adapted to not trigger again and to wait for the url
    // to be updated before triggering the listeners. Some kind of validation function would also
    // need to be passed to the listeners so the navigation can be accepted
    // call all listeners


    listeners.forEach(function (listener) {
      listener(currentLocation.value, from, {
        delta: delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };

  function pauseListeners() {
    pauseState = currentLocation.value;
  }

  function listen(callback) {
    // setup the listener and prepare teardown callbacks
    listeners.push(callback);

    var teardown = function teardown() {
      var index = listeners.indexOf(callback);
      if (index > -1) listeners.splice(index, 1);
    };

    teardowns.push(teardown);
    return teardown;
  }

  function beforeUnloadListener() {
    var _window = window,
        history = _window.history;
    if (!history.state) return;
    history.replaceState(assign({}, history.state, {
      scroll: computeScrollPosition()
    }), '');
  }

  function destroy() {
    var _iterator = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(teardowns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var teardown = _step.value;
        teardown();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    teardowns = [];
    window.removeEventListener('popstate', popStateHandler);
    window.removeEventListener('beforeunload', beforeUnloadListener);
  } // setup the listeners and prepare teardown callbacks


  window.addEventListener('popstate', popStateHandler);
  window.addEventListener('beforeunload', beforeUnloadListener);
  return {
    pauseListeners: pauseListeners,
    listen: listen,
    destroy: destroy
  };
}
/**
 * Creates a state object
 */


function buildState(back, current, forward) {
  var replaced = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var computeScroll = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return {
    back: back,
    current: current,
    forward: forward,
    replaced: replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}

function useHistoryStateNavigation(base) {
  var _window2 = window,
      history = _window2.history,
      location = _window2.location; // private variables

  var currentLocation = {
    value: createCurrentLocation(base, location)
  };
  var historyState = {
    value: history.state
  }; // build current history entry as this is a fresh navigation

  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }

  function changeLocation(to, state, replace) {
    /**
     * if a base tag is provided and we are on a normal domain, we have to
     * respect the provided `base` attribute because pushState() will use it and
     * potentially erase anything before the `#` like at
     * https://github.com/vuejs/vue-router-next/issues/685 where a base of
     * `/folder/#` but a base of `/` would erase the `/folder/` section. If
     * there is no host, the `<base>` tag makes no sense and if there isn't a
     * base tag we can just use everything after the `#`.
     */
    var hashIndex = base.indexOf('#');
    var url = hashIndex > -1 ? (location.host && document.querySelector('base') ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;

    try {
      // BROWSER QUIRK
      // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
      history[replace ? 'replaceState' : 'pushState'](state, '', url);
      historyState.value = state;
    } catch (err) {
      if (true) {
        warn('Error with push/replace State', err);
      } else {} // Force the navigation, this also resets the call count


      location[replace ? 'replace' : 'assign'](url);
    }
  }

  function replace(to, data) {
    var state = assign({}, history.state, buildState(historyState.value.back, // keep back and forward entries but override current position
    to, historyState.value.forward, true), data, {
      position: historyState.value.position
    });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }

  function push(to, data) {
    // Add to current entry the information of where we are going
    // as well as saving the current position
    var currentState = assign({}, // use current history state to gracefully handle a wrong call to
    // history.replaceState
    // https://github.com/vuejs/vue-router-next/issues/366
    historyState.value, history.state, {
      forward: to,
      scroll: computeScrollPosition()
    });

    if ( true && !history.state) {
      warn("history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n" + "history.replaceState(history.state, '', url)\n\n" + "You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.");
    }

    changeLocation(currentState.current, currentState, true);
    var state = assign({}, buildState(currentLocation.value, to, null), {
      position: currentState.position + 1
    }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }

  return {
    location: currentLocation,
    state: historyState,
    push: push,
    replace: replace
  };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */


function createWebHistory(base) {
  base = normalizeBase(base);
  var historyNavigation = useHistoryStateNavigation(base);
  var historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);

  function go(delta) {
    var triggerListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!triggerListeners) historyListeners.pauseListeners();
    history.go(delta);
  }

  var routerHistory = assign({
    // it's overridden right after
    location: '',
    base: base,
    go: go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: function get() {
      return historyNavigation.location.value;
    }
  });
  Object.defineProperty(routerHistory, 'state', {
    enumerable: true,
    get: function get() {
      return historyNavigation.state.value;
    }
  });
  return routerHistory;
}
/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */


function createMemoryHistory() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var listeners = [];
  var queue = [START];
  var position = 0;

  function setLocation(location) {
    position++;

    if (position === queue.length) {
      // we are at the end, we can simply append a new entry
      queue.push(location);
    } else {
      // we are in the middle, we remove everything from here in the queue
      queue.splice(position);
      queue.push(location);
    }
  }

  function triggerListeners(to, from, _ref2) {
    var direction = _ref2.direction,
        delta = _ref2.delta;
    var info = {
      direction: direction,
      delta: delta,
      type: NavigationType.pop
    };

    var _iterator2 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(listeners),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var callback = _step2.value;
        callback(to, from, info);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base: base,
    createHref: createHref.bind(null, base),
    replace: function replace(to) {
      // remove current entry and decrement position
      queue.splice(position--, 1);
      setLocation(to);
    },
    push: function push(to, data) {
      setLocation(to);
    },
    listen: function listen(callback) {
      listeners.push(callback);
      return function () {
        var index = listeners.indexOf(callback);
        if (index > -1) listeners.splice(index, 1);
      };
    },
    destroy: function destroy() {
      listeners = [];
      queue = [START];
      position = 0;
    },
    go: function go(delta) {
      var shouldTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var from = this.location;
      var direction = // we are considering delta === 0 going forward, but in abstract mode
      // using 0 for the delta doesn't make sense like it does in html5 where
      // it reloads the page
      delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
      position = Math.max(0, Math.min(position + delta, queue.length - 1));

      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction: direction,
          delta: delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: function get() {
      return queue[position];
    }
  });
  return routerHistory;
}
/**
 * Creates a hash history. Useful for web applications with no host (e.g.
 * `file://`) or when configuring a server to handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname +
 * location.search` If there is a `<base>` tag in the `head`, its value will be
 * ignored in favor of this parameter **but note it affects all the
 * history.pushState() calls**, meaning that if you use a `<base>` tag, it's
 * `href` value **has to match this parameter** (ignoring anything after the
 * `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */


function createWebHashHistory(base) {
  // Make sure this implementation is fine in terms of encoding, specially for IE11
  // for `file://`, directly use the pathname and ignore the base
  // location.pathname contains an initial `/` even at the root: `https://example.com`
  base = location.host ? base || location.pathname + location.search : ''; // allow the user to provide a `#` in the middle: `/base/#/app`

  if (!base.includes('#')) base += '#';

  if ( true && !base.endsWith('#/') && !base.endsWith('#')) {
    warn("A hash base must end with a \"#\":\n\"".concat(base, "\" should be \"").concat(base.replace(/#.*$/, '#'), "\"."));
  }

  return createWebHistory(base);
}

function isRouteLocation(route) {
  return typeof route === 'string' || route && Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(route) === 'object';
}

function isRouteName(name) {
  return typeof name === 'string' || Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(name) === 'symbol';
}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */


var START_LOCATION_NORMALIZED = {
  path: '/',
  name: undefined,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: undefined
};
var NavigationFailureSymbol = /*#__PURE__*/PolySymbol( true ? 'navigation failure' : undefined);
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */

var NavigationFailureType;

(function (NavigationFailureType) {
  /**
   * An aborted navigation is a navigation that failed because a navigation
   * guard returned `false` or called `next(false)`
   */
  NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
  /**
   * A cancelled navigation is a navigation that failed because a more recent
   * navigation finished started (not necessarily finished).
   */

  NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
  /**
   * A duplicated navigation is a navigation that failed because it was
   * initiated while already being at the exact same location.
   */

  NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {})); // DEV only debug messages


var ErrorTypeMessages = (_ErrorTypeMessages = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 1
/* MATCHER_NOT_FOUND */
, function _(_ref3) {
  var location = _ref3.location,
      currentLocation = _ref3.currentLocation;
  return "No match for\n ".concat(JSON.stringify(location)).concat(currentLocation ? '\nwhile being at\n' + JSON.stringify(currentLocation) : '');
}), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 2
/* NAVIGATION_GUARD_REDIRECT */
, function _(_ref4) {
  var from = _ref4.from,
      to = _ref4.to;
  return "Redirected from \"".concat(from.fullPath, "\" to \"").concat(stringifyRoute(to), "\" via a navigation guard.");
}), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 4
/* NAVIGATION_ABORTED */
, function _(_ref5) {
  var from = _ref5.from,
      to = _ref5.to;
  return "Navigation aborted from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" via a navigation guard.");
}), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 8
/* NAVIGATION_CANCELLED */
, function _(_ref6) {
  var from = _ref6.from,
      to = _ref6.to;
  return "Navigation cancelled from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" with a new navigation.");
}), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 16
/* NAVIGATION_DUPLICATED */
, function _(_ref7) {
  var from = _ref7.from,
      to = _ref7.to;
  return "Avoided redundant navigation to current location: \"".concat(from.fullPath, "\".");
}), _ErrorTypeMessages);

function createRouterError(type, params) {
  // keep full error messages in cjs versions
  if (true) {
    return assign(new Error(ErrorTypeMessages[type](params)), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      type: type
    }, NavigationFailureSymbol, true), params);
  } else {}
}

function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute(to) {
  if (typeof to === 'string') return to;
  if ('path' in to) return to.path;
  var location = {};

  var _iterator3 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(propertiesToLog),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var key = _step3.value;
      if (key in to) location[key] = to[key];
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return JSON.stringify(location, null, 2);
} // default pattern for a param: non greedy everything but /


var BASE_PARAM_PATTERN = '[^/]+?';
var BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
}; // Special Regex characters that must be escaped in static tokens

var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */

function tokensToParser(segments, extraOptions) {
  var options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions); // the amount of scores is the same as the length of segments except for the root segment "/"

  var score = []; // the regexp as a string

  var pattern = options.start ? '^' : ''; // extracted keys

  var keys = [];

  var _iterator4 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segments),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var segment = _step4.value;
      // the root segment needs special treatment
      var segmentScores = segment.length ? [] : [90
      /* Root */
      ]; // allow trailing slash

      if (options.strict && !segment.length) pattern += '/';

      for (var tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        var token = segment[tokenIndex]; // resets the score if we are inside a sub segment /:a-other-:b

        var subSegmentScore = 40
        /* Segment */
        + (options.sensitive ? 0.25
        /* BonusCaseSensitive */
        : 0);

        if (token.type === 0
        /* Static */
        ) {
          // prepend the slash if we are starting a new segment
          if (!tokenIndex) pattern += '/';
          pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
          subSegmentScore += 40
          /* Static */
          ;
        } else if (token.type === 1
        /* Param */
        ) {
          var value = token.value,
              repeatable = token.repeatable,
              optional = token.optional,
              regexp = token.regexp;
          keys.push({
            name: value,
            repeatable: repeatable,
            optional: optional
          });

          var _re = regexp ? regexp : BASE_PARAM_PATTERN; // the user provided a custom regexp /:id(\\d+)


          if (_re !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10
            /* BonusCustomRegExp */
            ; // make sure the regexp is valid before using it

            try {
              new RegExp("(".concat(_re, ")"));
            } catch (err) {
              throw new Error("Invalid custom RegExp for param \"".concat(value, "\" (").concat(_re, "): ") + err.message);
            }
          } // when we repeat we must take care of the repeating leading slash


          var subPattern = repeatable ? "((?:".concat(_re, ")(?:/(?:").concat(_re, "))*)") : "(".concat(_re, ")"); // prepend the slash if we are starting a new segment

          if (!tokenIndex) subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? "(?:/".concat(subPattern, ")") : '/' + subPattern;
          if (optional) subPattern += '?';
          pattern += subPattern;
          subSegmentScore += 20
          /* Dynamic */
          ;
          if (optional) subSegmentScore += -8
          /* BonusOptional */
          ;
          if (repeatable) subSegmentScore += -20
          /* BonusRepeatable */
          ;
          if (_re === '.*') subSegmentScore += -50
          /* BonusWildcard */
          ;
        }

        segmentScores.push(subSegmentScore);
      } // an empty array like /home/ -> [[{home}], []]
      // if (!segment.length) pattern += '/'


      score.push(segmentScores);
    } // only apply the strict bonus to the last score

  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (options.strict && options.end) {
    var i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001
    /* BonusStrict */
    ;
  } // TODO: dev only warn double trailing slash


  if (!options.strict) pattern += '/?';
  if (options.end) pattern += '$'; // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
  else if (options.strict) pattern += '(?:/|$)';
  var re = new RegExp(pattern, options.sensitive ? '' : 'i');

  function parse(path) {
    var match = path.match(re);
    var params = {};
    if (!match) return null;

    for (var _i = 1; _i < match.length; _i++) {
      var value = match[_i] || '';
      var key = keys[_i - 1];
      params[key.name] = value && key.repeatable ? value.split('/') : value;
    }

    return params;
  }

  function stringify(params) {
    var path = ''; // for optional parameters to allow to be empty

    var avoidDuplicatedSlash = false;

    var _iterator5 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segments),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var segment = _step5.value;
        if (!avoidDuplicatedSlash || !path.endsWith('/')) path += '/';
        avoidDuplicatedSlash = false;

        var _iterator6 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segment),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var token = _step6.value;

            if (token.type === 0
            /* Static */
            ) {
              path += token.value;
            } else if (token.type === 1
            /* Param */
            ) {
              var value = token.value,
                  repeatable = token.repeatable,
                  optional = token.optional;
              var param = value in params ? params[value] : '';
              if (Array.isArray(param) && !repeatable) throw new Error("Provided param \"".concat(value, "\" is an array but it is not repeatable (* or + modifiers)"));
              var text = Array.isArray(param) ? param.join('/') : param;

              if (!text) {
                if (optional) {
                  // if we have more than one optional param like /:a?-static we
                  // don't need to care about the optional param
                  if (segment.length < 2) {
                    // remove the last slash as we could be at the end
                    if (path.endsWith('/')) path = path.slice(0, -1); // do not append a slash on the next iteration
                    else avoidDuplicatedSlash = true;
                  }
                } else throw new Error("Missing required param \"".concat(value, "\""));
              }

              path += text;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return path;
  }

  return {
    re: re,
    score: score,
    keys: keys,
    parse: parse,
    stringify: stringify
  };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */


function compareScoreArray(a, b) {
  var i = 0;

  while (i < a.length && i < b.length) {
    var diff = b[i] - a[i]; // only keep going if diff === 0

    if (diff) return diff;
    i++;
  } // if the last subsegment was Static, the shorter segments should be sorted first
  // otherwise sort the longest segment first


  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40
    /* Static */
    + 40
    /* Segment */
    ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40
    /* Static */
    + 40
    /* Segment */
    ? 1 : -1;
  }

  return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */


function comparePathParserScore(a, b) {
  var i = 0;
  var aScore = a.score;
  var bScore = b.score;

  while (i < aScore.length && i < bScore.length) {
    var comp = compareScoreArray(aScore[i], bScore[i]); // do not return if both are equal

    if (comp) return comp;
    i++;
  } // if a and b share the same score entries but b has more, sort b first


  return bScore.length - aScore.length; // this is the ternary version
  // return aScore.length < bScore.length
  //   ? 1
  //   : aScore.length > bScore.length
  //   ? -1
  //   : 0
}

var ROOT_TOKEN = {
  type: 0
  /* Static */
  ,
  value: ''
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/; // After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()

function tokenizePath(path) {
  if (!path) return [[]];
  if (path === '/') return [[ROOT_TOKEN]];

  if (!path.startsWith('/')) {
    throw new Error( true ? "Route paths should start with a \"/\": \"".concat(path, "\" should be \"/").concat(path, "\".") : undefined);
  } // if (tokenCache.has(path)) return tokenCache.get(path)!


  function crash(message) {
    throw new Error("ERR (".concat(state, ")/\"").concat(buffer, "\": ").concat(message));
  }

  var state = 0
  /* Static */
  ;
  var previousState = state;
  var tokens = []; // the segment will always be valid because we get into the initial state
  // with the leading /

  var segment;

  function finalizeSegment() {
    if (segment) tokens.push(segment);
    segment = [];
  } // index on the path


  var i = 0; // char at index

  var char; // buffer of the value read

  var buffer = ''; // custom regexp for a param

  var customRe = '';

  function consumeBuffer() {
    if (!buffer) return;

    if (state === 0
    /* Static */
    ) {
      segment.push({
        type: 0
        /* Static */
        ,
        value: buffer
      });
    } else if (state === 1
    /* Param */
    || state === 2
    /* ParamRegExp */
    || state === 3
    /* ParamRegExpEnd */
    ) {
      if (segment.length > 1 && (char === '*' || char === '+')) crash("A repeatable param (".concat(buffer, ") must be alone in its segment. eg: '/:ids+."));
      segment.push({
        type: 1
        /* Param */
        ,
        value: buffer,
        regexp: customRe,
        repeatable: char === '*' || char === '+',
        optional: char === '*' || char === '?'
      });
    } else {
      crash('Invalid state to consume buffer');
    }

    buffer = '';
  }

  function addCharToBuffer() {
    buffer += char;
  }

  while (i < path.length) {
    char = path[i++];

    if (char === '\\' && state !== 2
    /* ParamRegExp */
    ) {
      previousState = state;
      state = 4
      /* EscapeNext */
      ;
      continue;
    }

    switch (state) {
      case 0
      /* Static */
      :
        if (char === '/') {
          if (buffer) {
            consumeBuffer();
          }

          finalizeSegment();
        } else if (char === ':') {
          consumeBuffer();
          state = 1
          /* Param */
          ;
        } else {
          addCharToBuffer();
        }

        break;

      case 4
      /* EscapeNext */
      :
        addCharToBuffer();
        state = previousState;
        break;

      case 1
      /* Param */
      :
        if (char === '(') {
          state = 2
          /* ParamRegExp */
          ;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0
          /* Static */
          ; // go back one character if we were not modifying

          if (char !== '*' && char !== '?' && char !== '+') i--;
        }

        break;

      case 2
      /* ParamRegExp */
      :
        // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
        // it already works by escaping the closing )
        // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
        // is this really something people need since you can also write
        // /prefix_:p()_suffix
        if (char === ')') {
          // handle the escaped )
          if (customRe[customRe.length - 1] == '\\') customRe = customRe.slice(0, -1) + char;else state = 3
          /* ParamRegExpEnd */
          ;
        } else {
          customRe += char;
        }

        break;

      case 3
      /* ParamRegExpEnd */
      :
        // same as finalizing a param
        consumeBuffer();
        state = 0
        /* Static */
        ; // go back one character if we were not modifying

        if (char !== '*' && char !== '?' && char !== '+') i--;
        customRe = '';
        break;

      default:
        crash('Unknown state');
        break;
    }
  }

  if (state === 2
  /* ParamRegExp */
  ) crash("Unfinished custom RegExp for param \"".concat(buffer, "\""));
  consumeBuffer();
  finalizeSegment(); // tokenCache.set(path, tokens)

  return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
  var parser = tokensToParser(tokenizePath(record.path), options); // warn against params with the same name

  if (true) {
    var existingKeys = new Set();

    var _iterator7 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(parser.keys),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var key = _step7.value;
        if (existingKeys.has(key.name)) warn("Found duplicated params with name \"".concat(key.name, "\" for path \"").concat(record.path, "\". Only the last one will be available on \"$route.params\"."));
        existingKeys.add(key.name);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  var matcher = assign(parser, {
    record: record,
    parent: parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });

  if (parent) {
    // both are aliases or both are not aliases
    // we don't want to mix them because the order is used when
    // passing originalRecord in Matcher.addRoute
    if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
  }

  return matcher;
}
/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */


function createRouterMatcher(routes, globalOptions) {
  // normalized ordered array of matchers
  var matchers = [];
  var matcherMap = new Map();
  globalOptions = mergeOptions({
    strict: false,
    end: true,
    sensitive: false
  }, globalOptions);

  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }

  function addRoute(record, parent, originalRecord) {
    // used later on to remove by name
    var isRootAdd = !originalRecord;
    var mainNormalizedRecord = normalizeRouteRecord(record); // we might be the child of an alias

    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    var options = mergeOptions(globalOptions, record); // generate an array of records to correctly handle aliases

    var normalizedRecords = [mainNormalizedRecord];

    if ('alias' in record) {
      var aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;

      var _iterator8 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(aliases),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var alias = _step8.value;
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord // the aliases are always of the same kind as the original since they
            // are defined on the same record

          }));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    var matcher;
    var originalMatcher;

    for (var _i2 = 0, _normalizedRecords = normalizedRecords; _i2 < _normalizedRecords.length; _i2++) {
      var normalizedRecord = _normalizedRecords[_i2];
      var path = normalizedRecord.path; // Build up the path for nested routes if the child isn't an absolute
      // route. Only add the / delimiter if the child path isn't empty and if the
      // parent path doesn't have a trailing slash

      if (parent && path[0] !== '/') {
        var parentPath = parent.record.path;
        var connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }

      if ( true && normalizedRecord.path === '*') {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\n' + 'See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      } // create the object before hand so it can be passed to children


      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if ( true && parent && path[0] === '/') checkMissingParamsInAbsolutePath(matcher, parent); // if we are an alias we must tell the original record that we exist
      // so we can be removed

      if (originalRecord) {
        originalRecord.alias.push(matcher);

        if (true) {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        // otherwise, the first record is the original and others are aliases
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher) originalMatcher.alias.push(matcher); // remove the route if named and only for the top record (avoid in nested calls)
        // this works because the original record is the first one

        if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
      }

      if ('children' in mainNormalizedRecord) {
        var children = mainNormalizedRecord.children;

        for (var i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      } // if there was no original record, then the first one was not an alias and all
      // other alias (if any) need to reference this record when adding children


      originalRecord = originalRecord || matcher; // TODO: add normalized records for more flexibility
      // if (parent && isAliasRecord(originalRecord)) {
      //   parent.children.push(originalRecord)
      // }

      insertMatcher(matcher);
    }

    return originalMatcher ? function () {
      // since other matchers are aliases, they should be removed by the original matcher
      removeRoute(originalMatcher);
    } : noop;
  }

  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      var matcher = matcherMap.get(matcherRef);

      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      var index = matchers.indexOf(matcherRef);

      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }

  function getRoutes() {
    return matchers;
  }

  function insertMatcher(matcher) {
    var i = 0; // console.log('i is', { i })

    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0) {
      i++;
    } // console.log('END i is', { i })
    // while (i < matchers.length && matcher.score <= matchers[i].score) i++


    matchers.splice(i, 0, matcher); // only add the original record to the name map

    if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
  }

  function resolve(location, currentLocation) {
    var matcher;
    var params = {};
    var path;
    var name;

    if ('name' in location && location.name) {
      matcher = matcherMap.get(location.name);
      if (!matcher) throw createRouterError(1
      /* MATCHER_NOT_FOUND */
      , {
        location: location
      });
      name = matcher.record.name;
      params = assign( // paramsFromLocation is a new object
      paramsFromLocation(currentLocation.params, // only keep params that exist in the resolved location
      // TODO: only keep optional params coming from a parent record
      matcher.keys.filter(function (k) {
        return !k.optional;
      }).map(function (k) {
        return k.name;
      })), location.params); // throws if cannot be stringified

      path = matcher.stringify(params);
    } else if ('path' in location) {
      // no need to resolve the path with the matcher as it was provided
      // this also allows the user to control the encoding
      path = location.path;

      if ( true && !path.startsWith('/')) {
        warn("The Matcher cannot resolve relative paths but received \"".concat(path, "\". Unless you directly called `matcher.resolve(\"").concat(path, "\")`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next."));
      }

      matcher = matchers.find(function (m) {
        return m.re.test(path);
      }); // matcher should have a value after the loop

      if (matcher) {
        // TODO: dev warning of unused params if provided
        // we know the matcher works because we tested the regexp
        params = matcher.parse(path);
        name = matcher.record.name;
      } // location is a relative path

    } else {
      // match by name or path of current route
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find(function (m) {
        return m.re.test(currentLocation.path);
      });
      if (!matcher) throw createRouterError(1
      /* MATCHER_NOT_FOUND */
      , {
        location: location,
        currentLocation: currentLocation
      });
      name = matcher.record.name; // since we are navigating to the same location, we don't need to pick the
      // params like when `name` is provided

      params = assign({}, currentLocation.params, location.params);
      path = matcher.stringify(params);
    }

    var matched = [];
    var parentMatcher = matcher;

    while (parentMatcher) {
      // reversed order so parents are at the beginning
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }

    return {
      name: name,
      path: path,
      params: params,
      matched: matched,
      meta: mergeMetaFields(matched)
    };
  } // add initial routes


  routes.forEach(function (route) {
    return addRoute(route);
  });
  return {
    addRoute: addRoute,
    resolve: resolve,
    removeRoute: removeRoute,
    getRoutes: getRoutes,
    getRecordMatcher: getRecordMatcher
  };
}

function paramsFromLocation(params, keys) {
  var newParams = {};

  var _iterator9 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(keys),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var key = _step9.value;
      if (key in params) newParams[key] = params[key];
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */


function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: undefined,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in record ? record.components || {} : {
      default: record.component
    }
  };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */


function normalizeRecordProps(record) {
  var propsObject = {}; // props does not exist on redirect records but we can set false directly

  var props = record.props || false;

  if ('component' in record) {
    propsObject.default = props;
  } else {
    // NOTE: we could also allow a function to be applied to every component.
    // Would need user feedback for use cases
    for (var name in record.components) {
      propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
  }

  return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */


function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf) return true;
    record = record.parent;
  }

  return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */


function mergeMetaFields(matched) {
  return matched.reduce(function (meta, record) {
    return assign(meta, record.meta);
  }, {});
}

function mergeOptions(defaults, partialOptions) {
  var options = {};

  for (var key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }

  return options;
}

function isSameParam(a, b) {
  return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */


function checkSameParams(a, b) {
  var _iterator10 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a.keys),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var key = _step10.value;
      if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(key.name, "\""));
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var _iterator11 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b.keys),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _key = _step11.value;
      if (!_key.optional && !a.keys.find(isSameParam.bind(null, _key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(_key.name, "\""));
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
}

function checkMissingParamsInAbsolutePath(record, parent) {
  var _iterator12 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(parent.keys),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var key = _step12.value;
      if (!record.keys.find(isSameParam.bind(null, key))) return warn("Absolute path \"".concat(record.record.path, "\" should have the exact same param named \"").concat(key.name, "\" as its parent \"").concat(parent.record.path, "\"."));
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
}
/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)


var HASH_RE = /#/g; // %23

var AMPERSAND_RE = /&/g; // %26

var SLASH_RE = /\//g; // %2F

var EQUAL_RE = /=/g; // %3D

var IM_RE = /\?/g; // %3F

var PLUS_RE = /\+/g; // %2B

/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */

var ENC_BRACKET_OPEN_RE = /%5B/g; // [

var ENC_BRACKET_CLOSE_RE = /%5D/g; // ]

var ENC_CARET_RE = /%5E/g; // ^

var ENC_BACKTICK_RE = /%60/g; // `

var ENC_CURLY_OPEN_RE = /%7B/g; // {

var ENC_PIPE_RE = /%7C/g; // |

var ENC_CURLY_CLOSE_RE = /%7D/g; // }

var ENC_SPACE_RE = /%20/g; // }

/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */

function commonEncode(text) {
  return encodeURI('' + text).replace(ENC_PIPE_RE, '|').replace(ENC_BRACKET_OPEN_RE, '[').replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeQueryValue(text) {
  return commonEncode(text) // Encode the space as +, encode the + to differentiate it from the space
  .replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */


function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeParam(text) {
  return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */


function decode(text) {
  try {
    return decodeURIComponent('' + text);
  } catch (err) {
     true && warn("Error decoding \"".concat(text, "\". Using original value"));
  }

  return '' + text;
}
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */


function parseQuery(search) {
  var query = {}; // avoid creating an object with an empty key and empty value
  // because of split('&')

  if (search === '' || search === '?') return query;
  var hasLeadingIM = search[0] === '?';
  var searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');

  for (var i = 0; i < searchParams.length; ++i) {
    // pre decode the + into space
    var searchParam = searchParams[i].replace(PLUS_RE, ' '); // allow the = character

    var eqPos = searchParam.indexOf('=');
    var key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    var value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));

    if (key in query) {
      // an extra variable for ts types
      var currentValue = query[key];

      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }

      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }

  return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */


function stringifyQuery(query) {
  var search = '';

  var _loop = function _loop(_key2) {
    var value = query[_key2];
    _key2 = encodeQueryKey(_key2);

    if (value == null) {
      // only null adds the value
      if (value !== undefined) {
        search += (search.length ? '&' : '') + _key2;
      }

      key = _key2;
      return "continue";
    } // keep null values


    var values = Array.isArray(value) ? value.map(function (v) {
      return v && encodeQueryValue(v);
    }) : [value && encodeQueryValue(value)];
    values.forEach(function (value) {
      // skip undefined values in arrays as if they were not present
      // smaller code than using filter
      if (value !== undefined) {
        // only append & with non-empty search
        search += (search.length ? '&' : '') + _key2;
        if (value != null) search += '=' + value;
      }
    });
    key = _key2;
  };

  for (var key in query) {
    var _ret = _loop(key);

    if (_ret === "continue") continue;
  }

  return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */


function normalizeQuery(query) {
  var normalizedQuery = {};

  for (var _key3 in query) {
    var value = query[_key3];

    if (value !== undefined) {
      normalizedQuery[_key3] = Array.isArray(value) ? value.map(function (v) {
        return v == null ? null : '' + v;
      }) : value == null ? value : '' + value;
    }
  }

  return normalizedQuery;
}
/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */


function useCallbacks() {
  var handlers = [];

  function add(handler) {
    handlers.push(handler);
    return function () {
      var i = handlers.indexOf(handler);
      if (i > -1) handlers.splice(i, 1);
    };
  }

  function reset() {
    handlers = [];
  }

  return {
    add: add,
    list: function list() {
      return handlers;
    },
    reset: reset
  };
}

function registerGuard(record, name, guard) {
  var removeFromList = function removeFromList() {
    record[name].delete(guard);
  };

  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onUnmounted */ "A"])(removeFromList);
  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onDeactivated */ "y"])(removeFromList);
  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onActivated */ "v"])(function () {
    record[name].add(guard);
  });
  record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */


function onBeforeRouteLeave(leaveGuard) {
  if ( true && !Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "o"])()) {
    warn('getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function');
    return;
  }

  var activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(matchedRouteKey, // to avoid warning
  {}).value;

  if (!activeRecord) {
     true && warn('No active route record was found. Are you missing a <router-view> component?');
    return;
  }

  registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */


function onBeforeRouteUpdate(updateGuard) {
  if ( true && !Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "o"])()) {
    warn('getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function');
    return;
  }

  var activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(matchedRouteKey, // to avoid warning
  {}).value;

  if (!activeRecord) {
     true && warn('No active route record was found. Are you missing a <router-view> component?');
    return;
  }

  registerGuard(activeRecord, 'updateGuards', updateGuard);
}

function guardToPromiseFn(guard, to, from, record, name) {
  // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
  var enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return function () {
    return new Promise(function (resolve, reject) {
      var next = function next(valid) {
        if (valid === false) reject(createRouterError(4
        /* NAVIGATION_ABORTED */
        , {
          from: from,
          to: to
        }));else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2
          /* NAVIGATION_GUARD_REDIRECT */
          , {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
          record.enterCallbacks[name] === enterCallbackArray && typeof valid === 'function') enterCallbackArray.push(valid);
          resolve();
        }
      }; // wrapping with Promise.resolve allows it to work with both async and sync guards


      var guardReturn = guard.call(record && record.instances[name], to, from,  true ? canOnlyBeCalledOnce(next, to, from) : undefined);
      var guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3) guardCall = guardCall.then(next);

      if ( true && guard.length > 2) {
        var message = "The \"next\" callback was never called inside of ".concat(guard.name ? '"' + guard.name + '"' : '', ":\n").concat(guard.toString(), "\n. If you are returning a value instead of calling \"next\", make sure to remove the \"next\" parameter from your function.");

        if (Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(guardReturn) === 'object' && 'then' in guardReturn) {
          guardCall = guardCall.then(function (resolvedValue) {
            // @ts-expect-error: _called is added at canOnlyBeCalledOnce
            if (!next._called) {
              warn(message);
              return Promise.reject(new Error('Invalid navigation guard'));
            }

            return resolvedValue;
          }); // TODO: test me!
        } else if (guardReturn !== undefined) {
          // @ts-expect-error: _called is added at canOnlyBeCalledOnce
          if (!next._called) {
            warn(message);
            reject(new Error('Invalid navigation guard'));
            return;
          }
        }
      }

      guardCall.catch(function (err) {
        return reject(err);
      });
    });
  };
}

function canOnlyBeCalledOnce(next, to, from) {
  var called = 0;
  return function () {
    if (called++ === 1) warn("The \"next\" callback was called more than once in one navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\". It should be called exactly one time in each navigation guard. This will fail in production.")); // @ts-expect-error: we put it in the original one because it's easier to check

    next._called = true;
    if (called === 1) next.apply(null, arguments);
  };
}

function extractComponentsGuards(matched, guardType, to, from) {
  var guards = [];

  var _iterator13 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(matched),
      _step13;

  try {
    var _loop2 = function _loop2() {
      var record = _step13.value;

      var _loop3 = function _loop3(name) {
        var rawComponent = record.components[name];

        if (true) {
          if (!rawComponent || Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(rawComponent) !== 'object' && typeof rawComponent !== 'function') {
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is not") + " a valid component. Received \"".concat(String(rawComponent), "\".")); // throw to ensure we stop here but warn to ensure the message isn't
            // missed by the user

            throw new Error('Invalid route component');
          } else if ('then' in rawComponent) {
            // warn if user wrote import('/component.vue') instead of () =>
            // import('./component.vue')
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a ") + "Promise instead of a function that returns a Promise. Did you " + "write \"import('./MyPage.vue')\" instead of " + "\"() => import('./MyPage.vue')\" ? This will break in " + "production if not fixed.");
            var promise = rawComponent;

            rawComponent = function rawComponent() {
              return promise;
            };
          } else if (rawComponent.__asyncLoader && // warn only once per component
          !rawComponent.__warnedDefineAsync) {
            rawComponent.__warnedDefineAsync = true;
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is defined ") + "using \"defineAsyncComponent()\". " + "Write \"() => import('./MyPage.vue')\" instead of " + "\"defineAsyncComponent(() => import('./MyPage.vue'))\".");
          }
        } // skip update and leave guards if the route component is not mounted


        if (guardType !== 'beforeRouteEnter' && !record.instances[name]) return "continue";

        if (isRouteComponent(rawComponent)) {
          // __vccOpts is added by vue-class-component and contain the regular options
          var options = rawComponent.__vccOpts || rawComponent;
          var guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          // start requesting the chunk already
          var componentPromise = rawComponent();

          if ( true && !('catch' in componentPromise)) {
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a function that does not return a Promise. If you were passing a functional component, make sure to add a \"displayName\" to the component. This will break in production if not fixed."));
            componentPromise = Promise.resolve(componentPromise);
          }

          guards.push(function () {
            return componentPromise.then(function (resolved) {
              if (!resolved) return Promise.reject(new Error("Couldn't resolve component \"".concat(name, "\" at \"").concat(record.path, "\"")));
              var resolvedComponent = isESModule(resolved) ? resolved.default : resolved; // replace the function with the resolved component

              record.components[name] = resolvedComponent; // __vccOpts is added by vue-class-component and contain the regular options

              var options = resolvedComponent.__vccOpts || resolvedComponent;
              var guard = options[guardType];
              return guard && guardToPromiseFn(guard, to, from, record, name)();
            });
          });
        }
      };

      for (var name in record.components) {
        var _ret2 = _loop3(name);

        if (_ret2 === "continue") continue;
      }
    };

    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }

  return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 *
 * @param component
 */


function isRouteComponent(component) {
  return Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(component) === 'object' || 'displayName' in component || 'props' in component || '__vccOpts' in component;
} // TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC


function useLink(props) {
  var router = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(routerKey);
  var currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(routeLocationKey);
  var route = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
    return router.resolve(Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "v"])(props.to));
  });
  var activeRecordIndex = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
    var matched = route.value.matched;
    var length = matched.length;
    var routeMatched = matched[length - 1];
    var currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length) return -1;
    var index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1) return index; // possible parent record

    var parentRecordPath = getOriginalPath(matched[length - 2]);
    return (// we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  var isActive = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
    return activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params);
  });
  var isExactActive = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
    return activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params);
  });

  function navigate() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (guardEvent(e)) {
      return router[Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "v"])(props.replace) ? 'replace' : 'push'](Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "v"])(props.to) // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }

    return Promise.resolve();
  } // devtools only


  if (( true) && isBrowser) {
    var instance = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "o"])();

    if (instance) {
      var linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      }; // @ts-expect-error: this is internal

      instance.__vrl_devtools = instance.__vrl_devtools || []; // @ts-expect-error: this is internal

      instance.__vrl_devtools.push(linkContextDevtools);

      Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watchEffect */ "M"])(function () {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, {
        flush: 'post'
      });
    }
  }

  return {
    route: route,
    href: Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
      return route.value.href;
    }),
    isActive: isActive,
    isExactActive: isExactActive,
    navigate: navigate
  };
}

var RouterLinkImpl = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* defineComponent */ "n"])({
  name: 'RouterLink',
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    }
  },
  useLink: useLink,
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var link = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* reactive */ "k"])(useLink(props));

    var _inject = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(routerKey),
        options = _inject.options;

    var elClass = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
      var _ref9;

      return _ref9 = {}, Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref9, getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active'), link.isActive), Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref9, getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active'), link.isExactActive), _ref9;
    });
    return function () {
      var children = slots.default && slots.default(link);
      return props.custom ? children : Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* h */ "r"])('a', {
        'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
}); // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

/**
 * Component to render a link that triggers a navigation on click.
 */

var RouterLink = RouterLinkImpl;

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return; // don't redirect when preventDefault called

  if (e.defaultPrevented) return; // don't redirect on right click

  if (e.button !== undefined && e.button !== 0) return; // don't redirect if `target="_blank"`
  // @ts-expect-error getAttribute does exist

  if (e.currentTarget && e.currentTarget.getAttribute) {
    // @ts-expect-error getAttribute exists
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) return;
  } // this may be a Weex event which doesn't have this method


  if (e.preventDefault) e.preventDefault();
  return true;
}

function includesParams(outer, inner) {
  var _loop4 = function _loop4(_key4) {
    var innerValue = inner[_key4];
    var outerValue = outer[_key4];

    if (typeof innerValue === 'string') {
      if (innerValue !== outerValue) return {
        v: false
      };
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some(function (value, i) {
        return value !== outerValue[i];
      })) return {
        v: false
      };
    }
  };

  for (var _key4 in inner) {
    var _ret3 = _loop4(_key4);

    if (Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ret3) === "object") return _ret3.v;
  }

  return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */


function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */


var getLinkClass = function getLinkClass(propClass, globalClass, defaultClass) {
  return propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
};

var RouterViewImpl = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* defineComponent */ "n"])({
  name: 'RouterView',
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'default'
    },
    route: Object
  },
  setup: function setup(props, _ref10) {
    var attrs = _ref10.attrs,
        slots = _ref10.slots;
     true && warnDeprecatedUsage();
    var injectedRoute = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(routerViewLocationKey);
    var routeToDisplay = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
      return props.route || injectedRoute.value;
    });
    var depth = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(viewDepthKey, 0);
    var matchedRouteRef = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
      return routeToDisplay.value.matched[depth];
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "D"])(viewDepthKey, depth + 1);
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "D"])(matchedRouteKey, matchedRouteRef);
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "D"])(routerViewLocationKey, routeToDisplay);
    var viewRef = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* ref */ "m"])(); // watch at the same time the component instance, the route record we are
    // rendering, and the name

    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watch */ "L"])(function () {
      return [viewRef.value, matchedRouteRef.value, props.name];
    }, function (_ref11, _ref12) {
      var _ref13 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref11, 3),
          instance = _ref13[0],
          to = _ref13[1],
          name = _ref13[2];

      var _ref14 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref12, 3),
          oldInstance = _ref14[0],
          from = _ref14[1],
          oldName = _ref14[2];

      // copy reused instances
      if (to) {
        // this will update the instance for new instances as well as reused
        // instances when navigating to a new route
        to.instances[name] = instance; // the component instance is reused for a different route or name so
        // we copy any saved update or leave guards. With async setup, the
        // mounting component will mount before the matchedRoute changes,
        // making instance === oldInstance, so we check if guards have been
        // added before. This works because we remove guards when
        // unmounting/deactivating components

        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }

          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      } // trigger beforeRouteEnter next callbacks


      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach(function (callback) {
          return callback(instance);
        });
      }
    }, {
      flush: 'post'
    });
    return function () {
      var route = routeToDisplay.value;
      var matchedRoute = matchedRouteRef.value;
      var ViewComponent = matchedRoute && matchedRoute.components[props.name]; // we need the value at the time we render because when we unmount, we
      // navigated to a different location so the value is different

      var currentName = props.name;

      if (!ViewComponent) {
        return normalizeSlot(slots.default, {
          Component: ViewComponent,
          route: route
        });
      } // props from route configuration


      var routePropsOption = matchedRoute.props[props.name];
      var routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null;

      var onVnodeUnmounted = function onVnodeUnmounted(vnode) {
        // remove the instance reference to prevent leak
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };

      var component = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* h */ "r"])(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted: onVnodeUnmounted,
        ref: viewRef
      }));
      return (// pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, {
          Component: component,
          route: route
        }) || component
      );
    };
  }
});

function normalizeSlot(slot, data) {
  if (!slot) return null;
  var slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
} // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

/**
 * Component to display the current route the user is at.
 */


var RouterView = RouterViewImpl; // warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3

function warnDeprecatedUsage() {
  var instance = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "o"])();
  var parentName = instance.parent && instance.parent.type.name;

  if (parentName && (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
    var comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
    warn("<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n" + "Use slot props instead:\n\n" + "<router-view v-slot=\"{ Component }\">\n" + "  <".concat(comp, ">\n") + "    <component :is=\"Component\" />\n" + "  </".concat(comp, ">\n") + "</router-view>");
  }
}

function formatRouteLocation(routeLocation, tooltip) {
  var copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map(function (matched) {
      return omit(matched, ['instances', 'children', 'aliasOf']);
    })
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip: tooltip,
      value: copy
    }
  };
}

function formatDisplay(display) {
  return {
    _custom: {
      display: display
    }
  };
} // to support multiple router instances


var routerId = 0;

function addDevtools(app, router, matcher) {
  // Take over router.beforeEach and afterEach
  // make sure we are not registering the devtool twice
  if (router.__hasDevtools) return;
  router.__hasDevtools = true; // increment to support multiple router instances

  var id = routerId++;
  Object(_vue_devtools_api__WEBPACK_IMPORTED_MODULE_6__["setupDevtoolsPlugin"])({
    id: 'org.vuejs.router' + (id ? '.' + id : ''),
    label: 'Vue Router',
    packageName: 'vue-router',
    homepage: 'https://next.router.vuejs.org/',
    logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
    componentStateTypes: ['Routing'],
    app: app
  }, function (api) {
    // display state added by the router
    api.on.inspectComponent(function (payload, ctx) {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: 'Routing',
          key: '$route',
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, 'Current Route')
        });
      }
    }); // mark router-link as active

    api.on.visitComponentTree(function (_ref15) {
      var node = _ref15.treeNode,
          componentInstance = _ref15.componentInstance;

      // if multiple useLink are used
      if (Array.isArray(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;

        componentInstance.__vrl_devtools.forEach(function (devtoolsData) {
          var backgroundColor = ORANGE_400;
          var tooltip = '';

          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = 'This is exactly active';
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = 'This link is active';
          }

          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip: tooltip,
            backgroundColor: backgroundColor
          });
        });
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watch */ "L"])(router.currentRoute, function () {
      // refresh active state
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    var navigationsLayerId = 'router:navigations:' + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: "Router".concat(id ? ' ' + id : '', " Navigations"),
      color: 0x40a8c4
    }); // const errorsLayerId = 'router:errors'
    // api.addTimelineLayer({
    //   id: errorsLayerId,
    //   label: 'Router Errors',
    //   color: 0xea5455,
    // })

    router.onError(function (error, to) {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'Error during Navigation',
          subtitle: to.fullPath,
          logType: 'error',
          time: Date.now(),
          data: {
            error: error
          },
          groupId: to.meta.__navigationId
        }
      });
    }); // attached to `meta` and used to group events

    var navigationId = 0;
    router.beforeEach(function (to, from) {
      var data = {
        guard: formatDisplay('beforeEach'),
        from: formatRouteLocation(from, 'Current Location during this navigation'),
        to: formatRouteLocation(to, 'Target location')
      }; // Used to group navigations together, hide from devtools

      Object.defineProperty(to.meta, '__navigationId', {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: Date.now(),
          title: 'Start of navigation',
          subtitle: to.fullPath,
          data: data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach(function (to, from, failure) {
      var data = {
        guard: formatDisplay('afterEach')
      };

      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : '',
            tooltip: 'Navigation Failure',
            value: failure
          }
        };
        data.status = formatDisplay('❌');
      } else {
        data.status = formatDisplay('✅');
      } // we set here to have the right order


      data.from = formatRouteLocation(from, 'Current Location during this navigation');
      data.to = formatRouteLocation(to, 'Target location');
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'End of navigation',
          subtitle: to.fullPath,
          time: Date.now(),
          data: data,
          logType: failure ? 'warning' : 'default',
          groupId: to.meta.__navigationId
        }
      });
    });
    /**
     * Inspector of Existing routes
     */

    var routerInspectorId = 'router-inspector:' + id;
    api.addInspector({
      id: routerInspectorId,
      label: 'Routes' + (id ? ' ' + id : ''),
      icon: 'book',
      treeFilterPlaceholder: 'Search routes'
    });

    function refreshRoutesView() {
      // the routes view isn't active
      if (!activeRoutesPayload) return;
      var payload = activeRoutesPayload; // children routes will appear as nested

      var routes = matcher.getRoutes().filter(function (route) {
        return !route.parent;
      }); // reset match state to false

      routes.forEach(resetMatchStateOnRouteRecord); // apply a match state if there is a payload

      if (payload.filter) {
        routes = routes.filter(function (route) {
          return (// save matches state based on the payload
            isRouteMatching(route, payload.filter.toLowerCase())
          );
        });
      } // mark active routes


      routes.forEach(function (route) {
        return markRouteRecordActive(route, router.currentRoute.value);
      });
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }

    var activeRoutesPayload;
    api.on.getInspectorTree(function (payload) {
      activeRoutesPayload = payload;

      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    /**
     * Display information about the currently selected route record
     */

    api.on.getInspectorState(function (payload) {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        var routes = matcher.getRoutes();
        var route = routes.find(function (route) {
          return route.record.__vd_id === payload.nodeId;
        });

        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}

function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? '*' : '?';
  } else {
    return key.repeatable ? '+' : '';
  }
}

function formatRouteRecordMatcherForStateInspector(route) {
  var record = route.record;
  var fields = [{
    editable: false,
    key: 'path',
    value: record.path
  }];

  if (record.name != null) {
    fields.push({
      editable: false,
      key: 'name',
      value: record.name
    });
  }

  fields.push({
    editable: false,
    key: 'regexp',
    value: route.re
  });

  if (route.keys.length) {
    fields.push({
      editable: false,
      key: 'keys',
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map(function (key) {
            return "".concat(key.name).concat(modifierForKey(key));
          }).join(' '),
          tooltip: 'Param keys',
          value: route.keys
        }
      }
    });
  }

  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: 'redirect',
      value: record.redirect
    });
  }

  if (route.alias.length) {
    fields.push({
      editable: false,
      key: 'aliases',
      value: route.alias.map(function (alias) {
        return alias.record.path;
      })
    });
  }

  fields.push({
    key: 'score',
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map(function (score) {
          return score.join(', ');
        }).join(' | '),
        tooltip: 'Score used to sort routes',
        value: route.score
      }
    }
  });
  return fields;
}
/**
 * Extracted from tailwind palette
 */


var PINK_500 = 0xec4899;
var BLUE_600 = 0x2563eb;
var LIME_500 = 0x84cc16;
var CYAN_400 = 0x22d3ee;
var ORANGE_400 = 0xfb923c; // const GRAY_100 = 0xf4f4f5

var DARK = 0x666666;

function formatRouteRecordForInspector(route) {
  var tags = [];
  var record = route.record;

  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }

  if (record.aliasOf) {
    tags.push({
      label: 'alias',
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }

  if (route.__vd_match) {
    tags.push({
      label: 'matches',
      textColor: 0,
      backgroundColor: PINK_500
    });
  }

  if (route.__vd_exactActive) {
    tags.push({
      label: 'exact',
      textColor: 0,
      backgroundColor: LIME_500
    });
  }

  if (route.__vd_active) {
    tags.push({
      label: 'active',
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }

  if (record.redirect) {
    tags.push({
      label: 'redirect: ' + (typeof record.redirect === 'string' ? record.redirect : 'Object'),
      textColor: 0xffffff,
      backgroundColor: DARK
    });
  } // add an id to be able to select it. Using the `path` is not possible because
  // empty path children would collide with their parents


  var id = record.__vd_id;

  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }

  return {
    id: id,
    label: record.path,
    tags: tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
} //  incremental id for route records and inspector state


var routeRecordId = 0;
var EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;

function markRouteRecordActive(route, currentRoute) {
  // no route will be active if matched is empty
  // reset the matching state
  var isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;

  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some(function (match) {
      return isSameRouteRecord(match, route.record);
    });
  }

  route.children.forEach(function (childRoute) {
    return markRouteRecordActive(childRoute, currentRoute);
  });
}

function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}

function isRouteMatching(route, filter) {
  var found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;

  if (!found || found.length < 3) {
    return false;
  } // use a regexp without $ at the end to match nested routes better


  var nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);

  if (nonEndingRE.test(filter)) {
    // mark children as matches
    route.children.forEach(function (child) {
      return isRouteMatching(child, filter);
    }); // exception case: `/`

    if (route.record.path !== '/' || filter === '/') {
      route.__vd_match = route.re.test(filter);
      return true;
    } // hide the / route


    return false;
  }

  var path = route.record.path.toLowerCase();
  var decodedPath = decode(path); // also allow partial matching on the path

  if (!filter.startsWith('/') && (decodedPath.includes(filter) || path.includes(filter))) return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
  if (route.record.name && String(route.record.name).includes(filter)) return true;
  return route.children.some(function (child) {
    return isRouteMatching(child, filter);
  });
}

function omit(obj, keys) {
  var ret = {};

  for (var _key5 in obj) {
    if (!keys.includes(_key5)) {
      // @ts-expect-error
      ret[_key5] = obj[_key5];
    }
  }

  return ret;
}
/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */


function createRouter(options) {
  var matcher = createRouterMatcher(options.routes, options);
  var parseQuery$1 = options.parseQuery || parseQuery;
  var stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  var routerHistory = options.history;
  if ( true && !routerHistory) throw new Error('Provide the "history" option when calling "createRouter()":' + ' https://next.router.vuejs.org/api/#history.');
  var beforeGuards = useCallbacks();
  var beforeResolveGuards = useCallbacks();
  var afterGuards = useCallbacks();
  var currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* shallowRef */ "q"])(START_LOCATION_NORMALIZED);
  var pendingLocation = START_LOCATION_NORMALIZED; // leave the scrollRestoration if no scrollBehavior is provided

  if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  var normalizeParams = applyToParams.bind(null, function (paramValue) {
    return '' + paramValue;
  });
  var encodeParams = applyToParams.bind(null, encodeParam);
  var decodeParams = // @ts-expect-error: intentionally avoid the type check
  applyToParams.bind(null, decode);

  function addRoute(parentOrRoute, route) {
    var parent;
    var record;

    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }

    return matcher.addRoute(record, parent);
  }

  function removeRoute(name) {
    var recordMatcher = matcher.getRecordMatcher(name);

    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (true) {
      warn("Cannot remove non-existent route \"".concat(String(name), "\""));
    }
  }

  function getRoutes() {
    return matcher.getRoutes().map(function (routeMatcher) {
      return routeMatcher.record;
    });
  }

  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }

  function resolve(rawLocation, currentLocation) {
    // const objectLocation = routerLocationAsObject(rawLocation)
    // we create a copy to modify it later
    currentLocation = assign({}, currentLocation || currentRoute.value);

    if (typeof rawLocation === 'string') {
      var locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);

      var _matchedRoute = matcher.resolve({
        path: locationNormalized.path
      }, currentLocation);

      var _href = routerHistory.createHref(locationNormalized.fullPath);

      if (true) {
        if (_href.startsWith('//')) warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(_href, "\". A resolved location cannot start with multiple slashes."));else if (!_matchedRoute.matched.length) {
          warn("No match found for location with path \"".concat(rawLocation, "\""));
        }
      } // locationNormalized is always a new object


      return assign(locationNormalized, _matchedRoute, {
        params: decodeParams(_matchedRoute.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: undefined,
        href: _href
      });
    }

    var matcherLocation; // path could be relative in object as well

    if ('path' in rawLocation) {
      if ( true && 'params' in rawLocation && !('name' in rawLocation) && Object.keys(rawLocation.params).length) {
        warn("Path \"".concat(rawLocation.path, "\" was passed with params but they will be ignored. Use a named route alongside params instead."));
      }

      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      // remove any nullish param
      var targetParams = assign({}, rawLocation.params);

      for (var _key6 in targetParams) {
        if (targetParams[_key6] == null) {
          delete targetParams[_key6];
        }
      } // pass encoded values to the matcher so it can produce encoded path and fullPath


      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      }); // current location params are decoded, we need to encode them in case the
      // matcher merges the params

      currentLocation.params = encodeParams(currentLocation.params);
    }

    var matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    var hash = rawLocation.hash || '';

    if ( true && hash && !hash.startsWith('#')) {
      warn("A `hash` should always start with the character \"#\". Replace \"".concat(hash, "\" with \"#").concat(hash, "\"."));
    } // decoding them) the matcher might have merged current location params so
    // we need to run the decoding again


    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    var fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    var href = routerHistory.createHref(fullPath);

    if (true) {
      if (href.startsWith('//')) {
        warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(href, "\". A resolved location cannot start with multiple slashes."));
      } else if (!matchedRoute.matched.length) {
        warn("No match found for location with path \"".concat('path' in rawLocation ? rawLocation.path : rawLocation, "\""));
      }
    }

    return assign({
      fullPath: fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: hash,
      query: // if the user is using a custom query lib like qs, we might have
      // nested objects, so we keep the query as is, meaning it can contain
      // numbers at `$route.query`, but at the point, the user will have to
      // use their own type anyway.
      // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
      stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: undefined,
      href: href
    });
  }

  function locationAsObject(to) {
    return typeof to === 'string' ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }

  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8
      /* NAVIGATION_CANCELLED */
      , {
        from: from,
        to: to
      });
    }
  }

  function push(to) {
    return pushWithRedirect(to);
  }

  function replace(to) {
    return push(assign(locationAsObject(to), {
      replace: true
    }));
  }

  function handleRedirectRecord(to) {
    var lastMatched = to.matched[to.matched.length - 1];

    if (lastMatched && lastMatched.redirect) {
      var redirect = lastMatched.redirect;
      var newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;

      if (typeof newTargetLocation === 'string') {
        newTargetLocation = newTargetLocation.includes('?') || newTargetLocation.includes('#') ? newTargetLocation = locationAsObject(newTargetLocation) : // force empty params
        {
          path: newTargetLocation
        }; // @ts-expect-error: force empty params when a string is passed to let
        // the router parse them again

        newTargetLocation.params = {};
      }

      if ( true && !('path' in newTargetLocation) && !('name' in newTargetLocation)) {
        warn("Invalid redirect found:\n".concat(JSON.stringify(newTargetLocation, null, 2), "\n when navigating to \"").concat(to.fullPath, "\". A redirect must contain a name or path. This will break in production."));
        throw new Error('Invalid redirect');
      }

      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }

  function pushWithRedirect(to, redirectedFrom) {
    var targetLocation = pendingLocation = resolve(to);
    var from = currentRoute.value;
    var data = to.state;
    var force = to.force; // to could be a string where `replace` is a function

    var replace = to.replace === true;
    var shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
      state: data,
      force: force,
      replace: replace
    }), // keep original redirectedFrom if it exists
    redirectedFrom || targetLocation); // if it was a redirect we already called `pushWithRedirect` above

    var toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    var failure;

    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16
      /* NAVIGATION_DUPLICATED */
      , {
        to: toLocation,
        from: from
      }); // trigger scroll to allow scrolling to the same anchor

      handleScroll(from, from, // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      true, // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      false);
    }

    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch(function (error) {
      return isNavigationFailure(error) ? error : // reject any unknown error
      triggerError(error, toLocation, from);
    }).then(function (failure) {
      if (failure) {
        if (isNavigationFailure(failure, 2
        /* NAVIGATION_GUARD_REDIRECT */
        )) {
          if ( true && // we are redirecting to the same location we were already at
          isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) && // and we have done it a couple of times
          redirectedFrom && // @ts-expect-error: added only in dev
          (redirectedFrom._count = redirectedFrom._count ? // @ts-expect-error
          redirectedFrom._count + 1 : 1) > 10) {
            warn("Detected an infinite redirection in a navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(toLocation.fullPath, "\". Aborting to avoid a Stack Overflow. This will break in production if not fixed."));
            return Promise.reject(new Error('Infinite redirect in navigation guard'));
          }

          return pushWithRedirect( // keep options
          assign(locationAsObject(failure.to), {
            state: data,
            force: force,
            replace: replace
          }), // preserve the original redirectedFrom if any
          redirectedFrom || toLocation);
        }
      } else {
        // if we fail we don't finalize the navigation
        failure = finalizeNavigation(toLocation, from, true, replace, data);
      }

      triggerAfterEach(toLocation, from, failure);
      return failure;
    });
  }
  /**
   * Helper to reject and skip all navigation guards if a new navigation happened
   * @param to
   * @param from
   */


  function checkCanceledNavigationAndReject(to, from) {
    var error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  } // TODO: refactor the whole before guards by internally using router.beforeEach


  function navigate(to, from) {
    var guards;

    var _extractChangingRecor = extractChangingRecords(to, from),
        _extractChangingRecor2 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_extractChangingRecor, 3),
        leavingRecords = _extractChangingRecor2[0],
        updatingRecords = _extractChangingRecor2[1],
        enteringRecords = _extractChangingRecor2[2]; // all components here have been resolved once because we are leaving


    guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from); // leavingRecords is already reversed

    var _iterator14 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(leavingRecords),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var record = _step14.value;
        record.leaveGuards.forEach(function (guard) {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }

    var canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck); // run the queue of per route beforeRouteLeave guards

    return runGuardQueue(guards).then(function () {
      // check global guards beforeEach
      guards = [];

      var _iterator15 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(beforeGuards.list()),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var guard = _step15.value;
          guards.push(guardToPromiseFn(guard, to, from));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(function () {
      // check in components beforeRouteUpdate
      guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);

      var _iterator16 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(updatingRecords),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var record = _step16.value;
          record.updateGuards.forEach(function (guard) {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // check the route beforeEnter
      guards = [];

      var _iterator17 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(to.matched),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var record = _step17.value;

          // do not trigger beforeEnter on reused views
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              var _iterator18 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(record.beforeEnter),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var beforeEnter = _step18.value;
                  guards.push(guardToPromiseFn(beforeEnter, to, from));
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
      // clear existing enterCallbacks, these are added by extractComponentsGuards
      to.matched.forEach(function (record) {
        return record.enterCallbacks = {};
      }); // check in-component beforeRouteEnter

      guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // check global guards beforeResolve
      guards = [];

      var _iterator19 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(beforeResolveGuards.list()),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var guard = _step19.value;
          guards.push(guardToPromiseFn(guard, to, from));
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }

      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }) // catch any navigation canceled
    .catch(function (err) {
      return isNavigationFailure(err, 8
      /* NAVIGATION_CANCELLED */
      ) ? err : Promise.reject(err);
    });
  }

  function triggerAfterEach(to, from, failure) {
    // navigation is confirmed, call afterGuards
    // TODO: wrap with error handlers
    var _iterator20 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(afterGuards.list()),
        _step20;

    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var guard = _step20.value;
        guard(to, from, failure);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
  }
  /**
   * - Cleans up any navigation guards
   * - Changes the url if necessary
   * - Calls the scrollBehavior
   */


  function finalizeNavigation(toLocation, from, isPush, replace, data) {
    // a more recent navigation took place
    var error = checkCanceledNavigation(toLocation, from);
    if (error) return error; // only consider as push if it's not the first navigation

    var isFirstNavigation = from === START_LOCATION_NORMALIZED;
    var state = !isBrowser ? {} : history.state; // change URL only if the user did a push/replace and if it's not the initial navigation because
    // it's just reflecting the url

    if (isPush) {
      // on the initial navigation, we want to reuse the scroll position from
      // history state if it exists
      if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
        scroll: isFirstNavigation && state && state.scroll
      }, data));else routerHistory.push(toLocation.fullPath, data);
    } // accept current navigation


    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }

  var removeHistoryListener; // attach listener to history to trigger navigations

  function setupListeners() {
    removeHistoryListener = routerHistory.listen(function (to, _from, info) {
      // cannot be a redirect route because it was in history
      var toLocation = resolve(to); // due to dynamic routing, and to hash history with manual navigation
      // (manually changing the url or calling history.hash = '#/somewhere'),
      // there could be a redirect record in history

      var shouldRedirect = handleRedirectRecord(toLocation);

      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, {
          replace: true
        }), toLocation).catch(noop);
        return;
      }

      pendingLocation = toLocation;
      var from = currentRoute.value; // TODO: should be moved to web history?

      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }

      navigate(toLocation, from).catch(function (error) {
        if (isNavigationFailure(error, 4
        /* NAVIGATION_ABORTED */
        | 8
        /* NAVIGATION_CANCELLED */
        )) {
          return error;
        }

        if (isNavigationFailure(error, 2
        /* NAVIGATION_GUARD_REDIRECT */
        )) {
          // Here we could call if (info.delta) routerHistory.go(-info.delta,
          // false) but this is bug prone as we have no way to wait the
          // navigation to be finished before calling pushWithRedirect. Using
          // a setTimeout of 16ms seems to work but there is not guarantee for
          // it to work on every browser. So Instead we do not restore the
          // history entry and trigger a new navigation as requested by the
          // navigation guard.
          // the error is already handled by router.push we just want to avoid
          // logging the error
          pushWithRedirect(error.to, toLocation // avoid an uncaught rejection, let push call triggerError
          ).then(function (failure) {
            // manual change in hash history #916 ending up in the URL not
            // changing but it was changed by the manual url change, so we
            // need to manually change it ourselves
            if (isNavigationFailure(failure, 4
            /* NAVIGATION_ABORTED */
            | 16
            /* NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop); // avoid the then branch

          return Promise.reject();
        } // do not restore history on unknown direction


        if (info.delta) routerHistory.go(-info.delta, false); // unrecognized error, transfer to the global handler

        return triggerError(error, toLocation, from);
      }).then(function (failure) {
        failure = failure || finalizeNavigation( // after navigation, all matched components are resolved
        toLocation, from, false); // revert the navigation

        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4
          /* NAVIGATION_ABORTED */
          | 16
          /* NAVIGATION_DUPLICATED */
          )) {
            // manual change in hash history #916
            // it's like a push but lacks the information of the direction
            routerHistory.go(-1, false);
          }
        }

        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  } // Initialization and Errors


  var readyHandlers = useCallbacks();
  var errorHandlers = useCallbacks();
  var ready;
  /**
   * Trigger errorHandlers added via onError and throws the error as well
   *
   * @param error - error to throw
   * @param to - location we were navigating to when the error happened
   * @param from - location we were navigating from when the error happened
   * @returns the error as a rejected promise
   */

  function triggerError(error, to, from) {
    markAsReady(error);
    var list = errorHandlers.list();

    if (list.length) {
      list.forEach(function (handler) {
        return handler(error, to, from);
      });
    } else {
      if (true) {
        warn('uncaught error during route navigation:');
      }

      console.error(error);
    }

    return Promise.reject(error);
  }

  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
    return new Promise(function (resolve, reject) {
      readyHandlers.add([resolve, reject]);
    });
  }
  /**
   * Mark the router as ready, resolving the promised returned by isReady(). Can
   * only be called once, otherwise does nothing.
   * @param err - optional error
   */


  function markAsReady(err) {
    if (ready) return;
    ready = true;
    setupListeners();
    readyHandlers.list().forEach(function (_ref16) {
      var _ref17 = Object(_Users_axing_2021_projects_taro_vue3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref16, 2),
          resolve = _ref17[0],
          reject = _ref17[1];

      return err ? reject(err) : resolve();
    });
    readyHandlers.reset();
  } // Scroll behavior


  function handleScroll(to, from, isPush, isFirstNavigation) {
    var scrollBehavior = options.scrollBehavior;
    if (!isBrowser || !scrollBehavior) return Promise.resolve();
    var scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* nextTick */ "u"])().then(function () {
      return scrollBehavior(to, from, scrollPosition);
    }).then(function (position) {
      return position && scrollToPosition(position);
    }).catch(function (err) {
      return triggerError(err, to, from);
    });
  }

  var go = function go(delta) {
    return routerHistory.go(delta);
  };

  var started;
  var installedApps = new Set();
  var router = {
    currentRoute: currentRoute,
    addRoute: addRoute,
    removeRoute: removeRoute,
    hasRoute: hasRoute,
    getRoutes: getRoutes,
    resolve: resolve,
    options: options,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      return go(-1);
    },
    forward: function forward() {
      return go(1);
    },
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady: isReady,
    install: function install(app) {
      var router = this;
      app.component('RouterLink', RouterLink);
      app.component('RouterView', RouterView);
      app.config.globalProperties.$router = router;
      Object.defineProperty(app.config.globalProperties, '$route', {
        enumerable: true,
        get: function get() {
          return Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "v"])(currentRoute);
        }
      }); // this initial navigation is only necessary on client, on server it doesn't
      // make sense because it will create an extra unnecessary navigation and could
      // lead to problems

      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        // see above
        started = true;
        push(routerHistory.location).catch(function (err) {
          if (true) warn('Unexpected error when starting the router:', err);
        });
      }

      var reactiveRoute = {};

      var _loop5 = function _loop5(_key7) {
        // @ts-expect-error: the key matches
        reactiveRoute[_key7] = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
          return currentRoute.value[_key7];
        });
      };

      for (var _key7 in START_LOCATION_NORMALIZED) {
        _loop5(_key7);
      }

      app.provide(routerKey, router);
      app.provide(routeLocationKey, Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* reactive */ "k"])(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      var unmountApp = app.unmount;
      installedApps.add(app);

      app.unmount = function () {
        installedApps.delete(app); // the router is not attached to an app anymore

        if (installedApps.size < 1) {
          // invalidate the current navigation
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }

        unmountApp();
      };

      if (( true) && isBrowser) {
        addDevtools(app, router, matcher);
      }
    }
  };
  return router;
}

function runGuardQueue(guards) {
  return guards.reduce(function (promise, guard) {
    return promise.then(function () {
      return guard();
    });
  }, Promise.resolve());
}

function extractChangingRecords(to, from) {
  var leavingRecords = [];
  var updatingRecords = [];
  var enteringRecords = [];
  var len = Math.max(from.matched.length, to.matched.length);

  var _loop6 = function _loop6(i) {
    var recordFrom = from.matched[i];

    if (recordFrom) {
      if (to.matched.find(function (record) {
        return isSameRouteRecord(record, recordFrom);
      })) updatingRecords.push(recordFrom);else leavingRecords.push(recordFrom);
    }

    var recordTo = to.matched[i];

    if (recordTo) {
      // the type doesn't matter because we are comparing per reference
      if (!from.matched.find(function (record) {
        return isSameRouteRecord(record, recordTo);
      })) {
        enteringRecords.push(recordTo);
      }
    }
  };

  for (var i = 0; i < len; i++) {
    _loop6(i);
  }

  return [leavingRecords, updatingRecords, enteringRecords];
}
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */


function useRouter() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */


function useRoute() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "s"])(routeLocationKey);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "./node_modules/@tarojs/plugin-html/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.ts */ "./node_modules/babel-loader/lib/index.js!./src/app.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");









var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__["createVue3App"])(_node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], vue__WEBPACK_IMPORTED_MODULE_5__[/* h */ "r"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["initPxTransform"])({
  designWidth: 375,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905}
})


/***/ })

},[["./src/app.ts","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map