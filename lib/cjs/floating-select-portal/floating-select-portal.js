'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _styles = require('../floating-select/styles');

var _styles2 = _interopRequireDefault(_styles);

var _floatingSelectBase = require('../floating-select/floating-select-base.component');

var _floatingSelectBase2 = _interopRequireDefault(_floatingSelectBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = true;

var FloatingSelectPortal = function (_FloatingSelectBase) {
  _inherits(FloatingSelectPortal, _FloatingSelectBase);

  function FloatingSelectPortal() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectPortal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          rest = _objectWithoutProperties(_this$props, ['components']);

      var comp = _extends({}, components, _this.state.components);
      return _react2.default.createElement(_reactSelect2.default, _extends({}, rest, {
        components: comp,
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: (0, _styles2.default)(_this.props.controlHeight, Portal),
        ref: function ref(el) {
          _this.selectRef = el;
        },
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectPortal;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectPortal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtcG9ydGFsL2Zsb2F0aW5nLXNlbGVjdC1wb3J0YWwuanN4Il0sIm5hbWVzIjpbIlBvcnRhbCIsIkZsb2F0aW5nU2VsZWN0UG9ydGFsIiwicmVuZGVyIiwicHJvcHMiLCJjb21wb25lbnRzIiwicmVzdCIsImNvbXAiLCJzdGF0ZSIsImRvY3VtZW50IiwiYm9keSIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29udHJvbEhlaWdodCIsImVsIiwic2VsZWN0UmVmIiwiZ2V0Tm9uY2UiLCJGbG9hdGluZ1NlbGVjdEJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLElBQWY7O0lBRXFCQyxvQjs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTLFlBQU07QUFBQSx3QkFDbUIsTUFBS0MsS0FEeEI7QUFBQSxVQUNMQyxVQURLLGVBQ0xBLFVBREs7QUFBQSxVQUNVQyxJQURWOztBQUViLFVBQU1DLG9CQUFZRixVQUFaLEVBQTJCLE1BQUtHLEtBQUwsQ0FBV0gsVUFBdEMsQ0FBTjtBQUNBLGFBQ0UsOEJBQUMscUJBQUQsZUFDTUMsSUFETjtBQUVFLG9CQUFZQyxJQUZkO0FBR0UsdUJBQWMsTUFIaEI7QUFJRSwwQkFBa0JFLFNBQVNDLElBSjdCO0FBS0Usb0JBQVksTUFBS0MsY0FMbkI7QUFNRSxxQkFBYSxNQUFLQyxlQU5wQjtBQU9FLGdCQUFRLHNCQUFPLE1BQUtSLEtBQUwsQ0FBV1MsYUFBbEIsRUFBaUNaLE1BQWpDLENBUFY7QUFRRSxhQUFLLGFBQUNhLEVBQUQsRUFBUTtBQUNYLGdCQUFLQyxTQUFMLEdBQWlCRCxFQUFqQjtBQUNELFNBVkg7QUFXRSxlQUFPLE1BQUtFLFFBQUw7QUFYVCxTQURGO0FBZUQsSzs7OztFQW5CK0NDLDRCOztrQkFBN0JmLG9CIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1wb3J0YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L3N0eWxlcyc7XHJcbmltcG9ydCBGbG9hdGluZ1NlbGVjdEJhc2UgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBQb3J0YWwgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RQb3J0YWwgZXh0ZW5kcyBGbG9hdGluZ1NlbGVjdEJhc2Uge1xyXG4gIHJlbmRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY29tcG9uZW50cywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGNvbXAgPSB7IC4uLmNvbXBvbmVudHMsIC4uLnRoaXMuc3RhdGUuY29tcG9uZW50cyB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlbGVjdFxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgIGNvbXBvbmVudHM9e2NvbXB9XHJcbiAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxyXG4gICAgICAgIG1lbnVQb3J0YWxUYXJnZXQ9e2RvY3VtZW50LmJvZHl9XHJcbiAgICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cclxuICAgICAgICBvbk1lbnVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgc3R5bGVzPXtzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0LCBQb3J0YWwpfVxyXG4gICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFJlZiA9IGVsO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgbm9uY2U9e3RoaXMuZ2V0Tm9uY2UoKX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfTtcclxufVxyXG4iXX0=