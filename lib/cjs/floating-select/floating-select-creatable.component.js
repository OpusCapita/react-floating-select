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
        }
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectCreatable;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectCreatable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkZsb2F0aW5nU2VsZWN0Q3JlYXRhYmxlIiwicmVuZGVyIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudHMiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRyb2xIZWlnaHQiLCJlbCIsInNlbGVjdFJlZiIsIkZsb2F0aW5nU2VsZWN0QmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7Ozs7Ozs7Ozs7OEpBQ25CQyxNLEdBQVM7QUFBQSxhQUNQLDhCQUFDLG1CQUFELGVBQ00sTUFBS0MsS0FEWDtBQUVFLG9CQUFZLE1BQUtDLEtBQUwsQ0FBV0MsVUFGekI7QUFHRSx1QkFBYyxNQUhoQjtBQUlFLG9CQUFZLE1BQUtDLGNBSm5CO0FBS0UscUJBQWEsTUFBS0MsZUFMcEI7QUFNRSxnQkFBUSxzQkFBTyxNQUFLSixLQUFMLENBQVdLLGFBQWxCLENBTlY7QUFPRSxhQUFLLGFBQUNDLEVBQUQsRUFBUTtBQUNYLGdCQUFLQyxTQUFMLEdBQWlCRCxFQUFqQjtBQUNEO0FBVEgsU0FETztBQUFBLEs7Ozs7RUFEMENFLDRCOztrQkFBaENWLHVCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1jcmVhdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDcmVhdGFibGUgZnJvbSAncmVhY3Qtc2VsZWN0L2xpYi9DcmVhdGFibGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4vZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RDcmVhdGFibGUgZXh0ZW5kcyBGbG9hdGluZ1NlbGVjdEJhc2Uge1xuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPENyZWF0YWJsZVxuICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICBjb21wb25lbnRzPXt0aGlzLnN0YXRlLmNvbXBvbmVudHN9XG4gICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICBvbk1lbnVPcGVuPXt0aGlzLmhhbmRsZU9wZW5NZW51fVxuICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgc3R5bGVzPXtzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0KX1cbiAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0=