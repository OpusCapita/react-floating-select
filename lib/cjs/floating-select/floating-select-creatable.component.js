'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Creatable = require('react-select/lib/Creatable');

var _Creatable2 = _interopRequireDefault(_Creatable);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _floatingSelectBase = require('./floating-select-base.component');

var _floatingSelectBase2 = _interopRequireDefault(_floatingSelectBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingSelectCreatable = function (_FloatingSelectBase) {
  _inherits(FloatingSelectCreatable, _FloatingSelectBase);

  function FloatingSelectCreatable() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectCreatable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(_Creatable2.default, _extends({}, _this.props, {
        components: _this.state.components,
        menuPlacement: 'auto',
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: (0, _styles2.default)(_this.props.controlHeight),
        ref: function ref(el) {
          _this.selectRef = el;
        },
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectCreatable;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectCreatable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkZsb2F0aW5nU2VsZWN0Q3JlYXRhYmxlIiwicmVuZGVyIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudHMiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRyb2xIZWlnaHQiLCJlbCIsInNlbGVjdFJlZiIsImdldE5vbmNlIiwiRmxvYXRpbmdTZWxlY3RCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsdUI7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUztBQUFBLGFBQ1AsOEJBQUMsbUJBQUQsZUFDTSxNQUFLQyxLQURYO0FBRUUsb0JBQVksTUFBS0MsS0FBTCxDQUFXQyxVQUZ6QjtBQUdFLHVCQUFjLE1BSGhCO0FBSUUsb0JBQVksTUFBS0MsY0FKbkI7QUFLRSxxQkFBYSxNQUFLQyxlQUxwQjtBQU1FLGdCQUFRLHNCQUFPLE1BQUtKLEtBQUwsQ0FBV0ssYUFBbEIsQ0FOVjtBQU9FLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FUSDtBQVVFLGVBQU8sTUFBS0UsUUFBTDtBQVZULFNBRE87QUFBQSxLOzs7O0VBRDBDQyw0Qjs7a0JBQWhDWCx1QiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtY3JlYXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDcmVhdGFibGUgZnJvbSAncmVhY3Qtc2VsZWN0L2xpYi9DcmVhdGFibGUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdENyZWF0YWJsZSBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XHJcbiAgcmVuZGVyID0gKCkgPT4gKFxyXG4gICAgPENyZWF0YWJsZVxyXG4gICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgY29tcG9uZW50cz17dGhpcy5zdGF0ZS5jb21wb25lbnRzfVxyXG4gICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXHJcbiAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XHJcbiAgICAgIG9uTWVudUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlTWVudX1cclxuICAgICAgc3R5bGVzPXtzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0KX1cclxuICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdFJlZiA9IGVsO1xyXG4gICAgICB9fVxyXG4gICAgICBub25jZT17dGhpcy5nZXROb25jZSgpfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbiJdfQ==