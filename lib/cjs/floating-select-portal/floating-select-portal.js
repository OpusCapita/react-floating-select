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
        }
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectPortal;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectPortal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtcG9ydGFsL2Zsb2F0aW5nLXNlbGVjdC1wb3J0YWwuanN4Il0sIm5hbWVzIjpbIlBvcnRhbCIsIkZsb2F0aW5nU2VsZWN0UG9ydGFsIiwicmVuZGVyIiwicHJvcHMiLCJjb21wb25lbnRzIiwicmVzdCIsImNvbXAiLCJzdGF0ZSIsImRvY3VtZW50IiwiYm9keSIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29udHJvbEhlaWdodCIsImVsIiwic2VsZWN0UmVmIiwiRmxvYXRpbmdTZWxlY3RCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxJQUFmOztJQUVxQkMsb0I7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUyxZQUFNO0FBQUEsd0JBQ21CLE1BQUtDLEtBRHhCO0FBQUEsVUFDTEMsVUFESyxlQUNMQSxVQURLO0FBQUEsVUFDVUMsSUFEVjs7QUFFYixVQUFNQyxvQkFBWUYsVUFBWixFQUEyQixNQUFLRyxLQUFMLENBQVdILFVBQXRDLENBQU47QUFDQSxhQUNFLDhCQUFDLHFCQUFELGVBQ01DLElBRE47QUFFRSxvQkFBWUMsSUFGZDtBQUdFLHVCQUFjLE1BSGhCO0FBSUUsMEJBQWtCRSxTQUFTQyxJQUo3QjtBQUtFLG9CQUFZLE1BQUtDLGNBTG5CO0FBTUUscUJBQWEsTUFBS0MsZUFOcEI7QUFPRSxnQkFBUSxzQkFBTyxNQUFLUixLQUFMLENBQVdTLGFBQWxCLEVBQWlDWixNQUFqQyxDQVBWO0FBUUUsYUFBSyxhQUFDYSxFQUFELEVBQVE7QUFDWCxnQkFBS0MsU0FBTCxHQUFpQkQsRUFBakI7QUFDRDtBQVZILFNBREY7QUFjRCxLOzs7O0VBbEIrQ0UsNEI7O2tCQUE3QmQsb0IiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LXBvcnRhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Zsb2F0aW5nLXNlbGVjdC9zdHlsZXMnO1xuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcblxuY29uc3QgUG9ydGFsID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RQb3J0YWwgZXh0ZW5kcyBGbG9hdGluZ1NlbGVjdEJhc2Uge1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb21wb25lbnRzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNvbXAgPSB7IC4uLmNvbXBvbmVudHMsIC4uLnRoaXMuc3RhdGUuY29tcG9uZW50cyB9O1xuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBjb21wb25lbnRzPXtjb21wfVxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICAgIG1lbnVQb3J0YWxUYXJnZXQ9e2RvY3VtZW50LmJvZHl9XG4gICAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XG4gICAgICAgIG9uTWVudUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlTWVudX1cbiAgICAgICAgc3R5bGVzPXtzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0LCBQb3J0YWwpfVxuICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH07XG59XG4iXX0=