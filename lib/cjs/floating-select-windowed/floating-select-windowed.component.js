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

var _floatingSelectWindowedMenuList = require('./floating-select-windowed-menu-list.component');

var _floatingSelectWindowedMenuList2 = _interopRequireDefault(_floatingSelectWindowedMenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingSelectWindowed = function (_FloatingSelectBase) {
  _inherits(FloatingSelectWindowed, _FloatingSelectBase);

  function FloatingSelectWindowed() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectWindowed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          rest = _objectWithoutProperties(_this$props, ['components']);

      var comp = _extends({}, components, _this.state.components, { MenuList: _floatingSelectWindowedMenuList2.default });

      // Can't figure out a way to get styles for a single option when using
      // custom MenuList component. So, we'll have to reset the existing styles
      // by returning an empty object and then style these with CSS.
      var modifiedStyles = Object.assign((0, _styles2.default)(_this.props.controlHeight), {
        option: function option() {
          return {};
        }
      });

      return _react2.default.createElement(_reactSelect2.default, _extends({}, rest, {
        components: comp,
        styles: modifiedStyles,
        menuPlacement: 'auto',
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        ref: function ref(el) {
          _this.selectRef = el;
        },
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectWindowed;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectWindowed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQvZmxvYXRpbmctc2VsZWN0LXdpbmRvd2VkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRmxvYXRpbmdTZWxlY3RXaW5kb3dlZCIsInJlbmRlciIsInByb3BzIiwiY29tcG9uZW50cyIsInJlc3QiLCJjb21wIiwic3RhdGUiLCJNZW51TGlzdCIsIm1vZGlmaWVkU3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbEhlaWdodCIsIm9wdGlvbiIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiZWwiLCJzZWxlY3RSZWYiLCJnZXROb25jZSIsIkZsb2F0aW5nU2VsZWN0QmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxzQjs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTLFlBQU07QUFBQSx3QkFDbUIsTUFBS0MsS0FEeEI7QUFBQSxVQUNMQyxVQURLLGVBQ0xBLFVBREs7QUFBQSxVQUNVQyxJQURWOztBQUdiLFVBQU1DLG9CQUNERixVQURDLEVBRUQsTUFBS0csS0FBTCxDQUFXSCxVQUZWLEVBR0QsRUFBRUksa0RBQUYsRUFIQyxDQUFOOztBQU1BO0FBQ0E7QUFDQTtBQUNBLFVBQU1DLGlCQUFpQkMsT0FBT0MsTUFBUCxDQUFjLHNCQUFPLE1BQUtSLEtBQUwsQ0FBV1MsYUFBbEIsQ0FBZCxFQUFnRDtBQUNyRUMsZ0JBQVE7QUFBQSxpQkFBTyxFQUFQO0FBQUE7QUFENkQsT0FBaEQsQ0FBdkI7O0FBSUEsYUFDRSw4QkFBQyxxQkFBRCxlQUNNUixJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSxnQkFBUUcsY0FIVjtBQUlFLHVCQUFjLE1BSmhCO0FBS0Usb0JBQVksTUFBS0ssY0FMbkI7QUFNRSxxQkFBYSxNQUFLQyxlQU5wQjtBQU9FLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FUSDtBQVVFLGVBQU8sTUFBS0UsUUFBTDtBQVZULFNBREY7QUFjRCxLOzs7O0VBL0JpREMsNEI7O2tCQUEvQmxCLHNCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC13aW5kb3dlZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzJztcbmltcG9ydCBGbG9hdGluZ1NlbGVjdEJhc2UgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnLi9mbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQtbWVudS1saXN0LmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RXaW5kb3dlZCBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjb21wID0ge1xuICAgICAgLi4uY29tcG9uZW50cyxcbiAgICAgIC4uLnRoaXMuc3RhdGUuY29tcG9uZW50cyxcbiAgICAgIC4uLnsgTWVudUxpc3QgfSxcbiAgICB9O1xuXG4gICAgLy8gQ2FuJ3QgZmlndXJlIG91dCBhIHdheSB0byBnZXQgc3R5bGVzIGZvciBhIHNpbmdsZSBvcHRpb24gd2hlbiB1c2luZ1xuICAgIC8vIGN1c3RvbSBNZW51TGlzdCBjb21wb25lbnQuIFNvLCB3ZSdsbCBoYXZlIHRvIHJlc2V0IHRoZSBleGlzdGluZyBzdHlsZXNcbiAgICAvLyBieSByZXR1cm5pbmcgYW4gZW1wdHkgb2JqZWN0IGFuZCB0aGVuIHN0eWxlIHRoZXNlIHdpdGggQ1NTLlxuICAgIGNvbnN0IG1vZGlmaWVkU3R5bGVzID0gT2JqZWN0LmFzc2lnbihzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0KSwge1xuICAgICAgb3B0aW9uOiAoKSA9PiAoe30pLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIGNvbXBvbmVudHM9e2NvbXB9XG4gICAgICAgIHN0eWxlcz17bW9kaWZpZWRTdHlsZXN9XG4gICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cbiAgICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XG4gICAgICAgIH19XG4gICAgICAgIG5vbmNlPXt0aGlzLmdldE5vbmNlKCl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG59XG4iXX0=