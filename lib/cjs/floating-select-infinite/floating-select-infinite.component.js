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

var _floatingSelectInfiniteMenuList = require('./floating-select-infinite-menu-list.component');

var _floatingSelectInfiniteMenuList2 = _interopRequireDefault(_floatingSelectInfiniteMenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingSelectInfinite = function (_FloatingSelectBase) {
  _inherits(FloatingSelectInfinite, _FloatingSelectBase);

  function FloatingSelectInfinite() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectInfinite);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          rest = _objectWithoutProperties(_this$props, ['components']);

      var comp = _extends({}, components, _this.state.components, { MenuList: _floatingSelectInfiniteMenuList2.default });

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

  return FloatingSelectInfinite;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectInfinite;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRmxvYXRpbmdTZWxlY3RJbmZpbml0ZSIsInJlbmRlciIsInByb3BzIiwiY29tcG9uZW50cyIsInJlc3QiLCJjb21wIiwic3RhdGUiLCJNZW51TGlzdCIsIm1vZGlmaWVkU3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbEhlaWdodCIsIm9wdGlvbiIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiZWwiLCJzZWxlY3RSZWYiLCJnZXROb25jZSIsIkZsb2F0aW5nU2VsZWN0QmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxzQjs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTLFlBQU07QUFBQSx3QkFDbUIsTUFBS0MsS0FEeEI7QUFBQSxVQUNMQyxVQURLLGVBQ0xBLFVBREs7QUFBQSxVQUNVQyxJQURWOztBQUdiLFVBQU1DLG9CQUNERixVQURDLEVBRUQsTUFBS0csS0FBTCxDQUFXSCxVQUZWLEVBR0QsRUFBRUksa0RBQUYsRUFIQyxDQUFOOztBQU1BO0FBQ0E7QUFDQTtBQUNBLFVBQU1DLGlCQUFpQkMsT0FBT0MsTUFBUCxDQUFjLHNCQUFPLE1BQUtSLEtBQUwsQ0FBV1MsYUFBbEIsQ0FBZCxFQUFnRDtBQUNyRUMsZ0JBQVE7QUFBQSxpQkFBTyxFQUFQO0FBQUE7QUFENkQsT0FBaEQsQ0FBdkI7O0FBSUEsYUFDRSw4QkFBQyxxQkFBRCxlQUNNUixJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSxnQkFBUUcsY0FIVjtBQUlFLHVCQUFjLE1BSmhCO0FBS0Usb0JBQVksTUFBS0ssY0FMbkI7QUFNRSxxQkFBYSxNQUFLQyxlQU5wQjtBQU9FLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FUSDtBQVVFLGVBQU8sTUFBS0UsUUFBTDtBQVZULFNBREY7QUFjRCxLOzs7O0VBL0JpREMsNEI7O2tCQUEvQmxCLHNCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L3N0eWxlcyc7XHJcbmltcG9ydCBGbG9hdGluZ1NlbGVjdEJhc2UgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCBNZW51TGlzdCBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LWxpc3QuY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdEluZmluaXRlIGV4dGVuZHMgRmxvYXRpbmdTZWxlY3RCYXNlIHtcclxuICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgY29tcCA9IHtcclxuICAgICAgLi4uY29tcG9uZW50cyxcclxuICAgICAgLi4udGhpcy5zdGF0ZS5jb21wb25lbnRzLFxyXG4gICAgICAuLi57IE1lbnVMaXN0IH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENhbid0IGZpZ3VyZSBvdXQgYSB3YXkgdG8gZ2V0IHN0eWxlcyBmb3IgYSBzaW5nbGUgb3B0aW9uIHdoZW4gdXNpbmdcclxuICAgIC8vIGN1c3RvbSBNZW51TGlzdCBjb21wb25lbnQuIFNvLCB3ZSdsbCBoYXZlIHRvIHJlc2V0IHRoZSBleGlzdGluZyBzdHlsZXNcclxuICAgIC8vIGJ5IHJldHVybmluZyBhbiBlbXB0eSBvYmplY3QgYW5kIHRoZW4gc3R5bGUgdGhlc2Ugd2l0aCBDU1MuXHJcbiAgICBjb25zdCBtb2RpZmllZFN0eWxlcyA9IE9iamVjdC5hc3NpZ24oc3R5bGVzKHRoaXMucHJvcHMuY29udHJvbEhlaWdodCksIHtcclxuICAgICAgb3B0aW9uOiAoKSA9PiAoe30pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlbGVjdFxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgIGNvbXBvbmVudHM9e2NvbXB9XHJcbiAgICAgICAgc3R5bGVzPXttb2RpZmllZFN0eWxlc31cclxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXHJcbiAgICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cclxuICAgICAgICBvbk1lbnVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBub25jZT17dGhpcy5nZXROb25jZSgpfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcbiJdfQ==