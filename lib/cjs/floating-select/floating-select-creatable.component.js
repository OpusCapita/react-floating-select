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
        styles: (0, _styles2.default)(_this.props.controlHeight)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectCreatable;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectCreatable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkZsb2F0aW5nU2VsZWN0Q3JlYXRhYmxlIiwicmVuZGVyIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudHMiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRyb2xIZWlnaHQiLCJGbG9hdGluZ1NlbGVjdEJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSx1Qjs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTO0FBQUEsYUFDUCw4QkFBQyxtQkFBRCxlQUNNLE1BQUtDLEtBRFg7QUFFRSxvQkFBWSxNQUFLQyxLQUFMLENBQVdDLFVBRnpCO0FBR0UsdUJBQWMsTUFIaEI7QUFJRSxvQkFBWSxNQUFLQyxjQUpuQjtBQUtFLHFCQUFhLE1BQUtDLGVBTHBCO0FBTUUsZ0JBQVEsc0JBQU8sTUFBS0osS0FBTCxDQUFXSyxhQUFsQjtBQU5WLFNBRE87QUFBQSxLOzs7O0VBRDBDQyw0Qjs7a0JBQWhDUix1QiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtY3JlYXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3JlYXRhYmxlIGZyb20gJ3JlYWN0LXNlbGVjdC9saWIvQ3JlYXRhYmxlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0Q3JlYXRhYmxlIGV4dGVuZHMgRmxvYXRpbmdTZWxlY3RCYXNlIHtcbiAgcmVuZGVyID0gKCkgPT4gKFxuICAgIDxDcmVhdGFibGVcbiAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgY29tcG9uZW50cz17dGhpcy5zdGF0ZS5jb21wb25lbnRzfVxuICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cbiAgICAgIG9uTWVudUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlTWVudX1cbiAgICAgIHN0eWxlcz17c3R5bGVzKHRoaXMucHJvcHMuY29udHJvbEhlaWdodCl9XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ==