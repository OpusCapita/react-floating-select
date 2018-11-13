webpackHotUpdate(0,{

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/react.js
var react = __webpack_require__(5);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-select/lib/Select.js
var Select = __webpack_require__(60);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(51);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.css
var react_select = __webpack_require__(393);
var react_select_default = /*#__PURE__*/__webpack_require__.n(react_select);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(12);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/tether/dist/js/tether.js
var tether = __webpack_require__(395);
var tether_default = /*#__PURE__*/__webpack_require__.n(tether);

// CONCATENATED MODULE: ./src/floating-select/tether.component.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp3;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-multi-comp, react/forbid-prop-types */





var TetheredChildrenComponent = (_temp = _class = function (_React$PureComponent) {
  _inherits(TetheredChildrenComponent, _React$PureComponent);

  function TetheredChildrenComponent() {
    _classCallCheck(this, TetheredChildrenComponent);

    return _possibleConstructorReturn(this, (TetheredChildrenComponent.__proto__ || Object.getPrototypeOf(TetheredChildrenComponent)).apply(this, arguments));
  }

  _createClass(TetheredChildrenComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.position();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.props.position();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return TetheredChildrenComponent;
}(react_default.a.PureComponent), _class.propTypes = {
  children: prop_types_default.a.node.isRequired,
  position: prop_types_default.a.func.isRequired
}, _temp);
var tether_component_TetherComponent = (_temp3 = _class2 = function (_React$PureComponent2) {
  _inherits(TetherComponent, _React$PureComponent2);

  function TetherComponent() {
    var _ref;

    var _temp2, _this2, _ret;

    _classCallCheck(this, TetherComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref = TetherComponent.__proto__ || Object.getPrototypeOf(TetherComponent)).call.apply(_ref, [this].concat(args))), _this2), _this2.position = function () {
      var _this3;

      return (_this3 = _this2).__position__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp2), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(TetherComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tetherContainer = document.createElement('div');
      document.body.appendChild(this.tetherContainer);
      this.renderTetheredContent();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderTetheredContent();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyTetheredContent();
    }
  }, {
    key: '__position__REACT_HOT_LOADER__',
    value: function __position__REACT_HOT_LOADER__() {
      return this.__position__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__position__REACT_HOT_LOADER__',
    value: function __position__REACT_HOT_LOADER__() {
      if (!this.tether) {
        this.tether = new tether_default.a(_extends({}, this.props.options, {
          element: this.tetherContainer,
          target: this.props.target
        }));
      }
      if (this.props.matchWidth) {
        this.tetherContainer.style.width = this.props.target.clientWidth + 'px';
      }
      this.tether.position();
    }
  }, {
    key: 'destroyTetheredContent',
    value: function destroyTetheredContent() {
      react_dom_default.a.unmountComponentAtNode(this.tetherContainer);
      this.tether.destroy();
      document.body.removeChild(this.tetherContainer);
    }
  }, {
    key: 'renderTetheredContent',
    value: function renderTetheredContent() {
      react_dom_default.a.render(react_default.a.createElement(
        TetheredChildrenComponent,
        {
          target: this.props.target,
          position: this.position
        },
        this.props.children
      ), this.tetherContainer);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return TetherComponent;
}(react_default.a.PureComponent), _class2.propTypes = {
  children: prop_types_default.a.node.isRequired,
  options: prop_types_default.a.object.isRequired,
  target: prop_types_default.a.any.isRequired,
  matchWidth: prop_types_default.a.bool.isRequired
}, _temp3);

;

var _temp4 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TetheredChildrenComponent, 'TetheredChildrenComponent', 'C:/src/react-floating-select/src/floating-select/tether.component.jsx');

  __REACT_HOT_LOADER__.register(tether_component_TetherComponent, 'TetherComponent', 'C:/src/react-floating-select/src/floating-select/tether.component.jsx');
}();

;
// EXTERNAL MODULE: ./src/floating-select/floating-select.component.scss
var floating_select_component = __webpack_require__(396);
var floating_select_component_default = /*#__PURE__*/__webpack_require__.n(floating_select_component);

// CONCATENATED MODULE: ./src/floating-select/floating-select.component.jsx
var floating_select_component__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function floating_select_component__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function floating_select_component__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function floating_select_component__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-find-dom-node, prefer-rest-params */








// Make react-select to tether over the container component instead of stretching it.
// https://github.com/JedWatson/react-select/issues/810#issuecomment-248546293

var floating_select_component_FloatingSelect = function (_Select) {
  floating_select_component__inherits(FloatingSelect, _Select);

  function FloatingSelect(props) {
    floating_select_component__classCallCheck(this, FloatingSelect);

    var _this = floating_select_component__possibleConstructorReturn(this, (FloatingSelect.__proto__ || Object.getPrototypeOf(FloatingSelect)).call(this, props));

    _this.renderOuter = _this.renderOuterOverride;
    return _this;
  }

  floating_select_component__createClass(FloatingSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(FloatingSelect.prototype.__proto__ || Object.getPrototypeOf(FloatingSelect.prototype), 'componentDidMount', this).call(this);
      this.dropdownFieldNode = react_dom_default.a.findDOMNode(this);
    }
  }, {
    key: 'renderOuterOverride',
    value: function renderOuterOverride() {
      var menu = _get(FloatingSelect.prototype.__proto__ || Object.getPrototypeOf(FloatingSelect.prototype), 'renderOuter', this).apply(this, arguments);
      var options = {
        attachment: 'top left',
        targetAttachment: 'bottom left',
        constraints: [{
          to: 'window',
          attachment: 'together'
        }]
      };
      return react_default.a.createElement(
        tether_component_TetherComponent,
        {
          target: this.dropdownFieldNode,
          options: options,
          matchWidth: true
        },
        react_default.a.cloneElement(menu, { style: { position: 'static' } })
      );
    }
  }]);

  return FloatingSelect;
}(Select_default.a);


;

var floating_select_component__temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(floating_select_component_FloatingSelect, 'FloatingSelect', 'C:/src/react-floating-select/src/floating-select/floating-select.component.jsx');
}();

;
// CONCATENATED MODULE: ./src/floating-select/floating-select-creatable.component.jsx
var floating_select_creatable_component__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function floating_select_creatable_component__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function floating_select_creatable_component__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function floating_select_creatable_component__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prefer-stateless-function */




var floating_select_creatable_component_FloatingSelectCreatable = function (_React$PureComponent) {
  floating_select_creatable_component__inherits(FloatingSelectCreatable, _React$PureComponent);

  function FloatingSelectCreatable() {
    floating_select_creatable_component__classCallCheck(this, FloatingSelectCreatable);

    return floating_select_creatable_component__possibleConstructorReturn(this, (FloatingSelectCreatable.__proto__ || Object.getPrototypeOf(FloatingSelectCreatable)).apply(this, arguments));
  }

  floating_select_creatable_component__createClass(FloatingSelectCreatable, [{
    key: 'render',
    value: function render() {
      return react_default.a.createElement(
        floating_select_component_FloatingSelect.Creatable,
        this.props,
        function (creatableProps) {
          return react_default.a.createElement(floating_select_component_FloatingSelect, creatableProps);
        }
      );
    }
  }]);

  return FloatingSelectCreatable;
}(react_default.a.PureComponent);


;

var floating_select_creatable_component__temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(floating_select_creatable_component_FloatingSelectCreatable, 'FloatingSelectCreatable', 'C:/src/react-floating-select/src/floating-select/floating-select-creatable.component.jsx');
}();

;
// CONCATENATED MODULE: ./src/floating-select/index.js




;

var floating_select__temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
// CONCATENATED MODULE: ./examples/components/floating-select/floating-select.component.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return floating_select_component_FloatingSelectView; });
var floating_select_floating_select_component__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function floating_select_floating_select_component__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function floating_select_floating_select_component__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function floating_select_floating_select_component__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var floating_select_component_FloatingSelectView = function (_React$PureComponent) {
  floating_select_floating_select_component__inherits(FloatingSelectView, _React$PureComponent);

  function FloatingSelectView(props) {
    floating_select_floating_select_component__classCallCheck(this, FloatingSelectView);

    var _this = floating_select_floating_select_component__possibleConstructorReturn(this, (FloatingSelectView.__proto__ || Object.getPrototypeOf(FloatingSelectView)).call(this, props));

    _this.onChange = function () {
      return _this.__onChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onCreatableChange = function () {
      return _this.__onCreatableChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.initializeOptions = function () {
      return _this.__initializeOptions__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = { selectedOption: 0, selectedCreatableOption: 0 };
    return _this;
  }

  floating_select_floating_select_component__createClass(FloatingSelectView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.options = this.initializeOptions();
      this.creatableOptions = this.initializeOptions();
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__() {
      return this.__onChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__(e) {
      this.setState({ selectedOption: e });
    }
  }, {
    key: '__onCreatableChange__REACT_HOT_LOADER__',
    value: function __onCreatableChange__REACT_HOT_LOADER__() {
      return this.__onCreatableChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onCreatableChange__REACT_HOT_LOADER__',
    value: function __onCreatableChange__REACT_HOT_LOADER__(e) {
      this.setState({ selectedCreatableOption: e });
    }
  }, {
    key: '__initializeOptions__REACT_HOT_LOADER__',
    value: function __initializeOptions__REACT_HOT_LOADER__() {
      return this.__initializeOptions__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__initializeOptions__REACT_HOT_LOADER__',
    value: function __initializeOptions__REACT_HOT_LOADER__() {
      var options = [];
      for (var i = 0; i < 20; i += 1) {
        options.push({
          value: i,
          label: 'Item ' + i
        });
      }
      return options;
    }
  }, {
    key: 'render',
    value: function render() {
      var containerStyle = {
        background: 'white',
        margin: '10px',
        padding: '10px',
        width: '400px'
      };
      return react_default.a.createElement(
        'div',
        { style: containerStyle },
        react_default.a.createElement(
          'div',
          null,
          'Select option'
        ),
        react_default.a.createElement(floating_select_component_FloatingSelect, {
          clearable: false,
          inputProps: { id: 'select-example' },
          name: 'select-example',
          options: this.options,
          onChange: this.onChange,
          value: this.state.selectedOption
        }),
        react_default.a.createElement(
          'div',
          { style: { marginTop: '20px' } },
          'Create and/or select option'
        ),
        react_default.a.createElement(floating_select_creatable_component_FloatingSelectCreatable, {
          clearable: false,
          inputProps: { id: 'select-creatable-example' },
          name: 'select-creatable-example',
          options: this.creatableOptions,
          onChange: this.onCreatableChange,
          value: this.state.selectedCreatableOption
        })
      );
    }
  }]);

  return FloatingSelectView;
}(react_default.a.PureComponent);


;

var floating_select_floating_select_component__temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(floating_select_component_FloatingSelectView, 'FloatingSelectView', 'C:/src/react-floating-select/examples/components/floating-select/floating-select.component.jsx');
}();

;

/***/ })

})
//# sourceMappingURL=0.31dd9753096544c83c7a.hot-update.js.map