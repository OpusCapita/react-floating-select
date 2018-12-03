'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _floatingSelectBase = require('./floating-select-base.component');

var _floatingSelectBase2 = _interopRequireDefault(_floatingSelectBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingSelect = function (_FloatingSelectBase) {
  _inherits(FloatingSelect, _FloatingSelectBase);

  function FloatingSelect() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(_reactSelect2.default, _extends({}, _this.props, {
        components: _this.state.components,
        menuPlacement: 'auto',
        ref: function ref(el) {
          _this.selectRef = el;
        },
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: (0, _styles2.default)(_this.props.controlHeight)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelect;
}(_floatingSelectBase2.default);

exports.default = FloatingSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRmxvYXRpbmdTZWxlY3QiLCJyZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwiY29tcG9uZW50cyIsImVsIiwic2VsZWN0UmVmIiwiaGFuZGxlT3Blbk1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJjb250cm9sSGVpZ2h0IiwiRmxvYXRpbmdTZWxlY3RCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTO0FBQUEsYUFDUCw4QkFBQyxxQkFBRCxlQUNNLE1BQUtDLEtBRFg7QUFFRSxvQkFBWSxNQUFLQyxLQUFMLENBQVdDLFVBRnpCO0FBR0UsdUJBQWMsTUFIaEI7QUFJRSxhQUFLLGFBQUNDLEVBQUQsRUFBUTtBQUNYLGdCQUFLQyxTQUFMLEdBQWlCRCxFQUFqQjtBQUNELFNBTkg7QUFPRSxvQkFBWSxNQUFLRSxjQVBuQjtBQVFFLHFCQUFhLE1BQUtDLGVBUnBCO0FBU0UsZ0JBQVEsc0JBQU8sTUFBS04sS0FBTCxDQUFXTyxhQUFsQjtBQVRWLFNBRE87QUFBQSxLOzs7O0VBRGlDQyw0Qjs7a0JBQXZCVixjIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4vZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3QgZXh0ZW5kcyBGbG9hdGluZ1NlbGVjdEJhc2Uge1xuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPFNlbGVjdFxuICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICBjb21wb25lbnRzPXt0aGlzLnN0YXRlLmNvbXBvbmVudHN9XG4gICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdFJlZiA9IGVsO1xuICAgICAgfX1cbiAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XG4gICAgICBvbk1lbnVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1lbnV9XG4gICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQpfVxuICAgIC8+XG4gICk7XG59XG4iXX0=