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
        styles: (0, _styles2.default)(_this.props.controlHeight),
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelect;
}(_floatingSelectBase2.default);

exports.default = FloatingSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRmxvYXRpbmdTZWxlY3QiLCJyZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwiY29tcG9uZW50cyIsImVsIiwic2VsZWN0UmVmIiwiaGFuZGxlT3Blbk1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJjb250cm9sSGVpZ2h0IiwiZ2V0Tm9uY2UiLCJGbG9hdGluZ1NlbGVjdEJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OEpBQ25CQyxNLEdBQVM7QUFBQSxhQUNQLDhCQUFDLHFCQUFELGVBQ00sTUFBS0MsS0FEWDtBQUVFLG9CQUFZLE1BQUtDLEtBQUwsQ0FBV0MsVUFGekI7QUFHRSx1QkFBYyxNQUhoQjtBQUlFLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FOSDtBQU9FLG9CQUFZLE1BQUtFLGNBUG5CO0FBUUUscUJBQWEsTUFBS0MsZUFScEI7QUFTRSxnQkFBUSxzQkFBTyxNQUFLTixLQUFMLENBQVdPLGFBQWxCLENBVFY7QUFVRSxlQUFPLE1BQUtDLFFBQUw7QUFWVCxTQURPO0FBQUEsSzs7OztFQURpQ0MsNEI7O2tCQUF2QlgsYyIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0IGV4dGVuZHMgRmxvYXRpbmdTZWxlY3RCYXNlIHtcbiAgcmVuZGVyID0gKCkgPT4gKFxuICAgIDxTZWxlY3RcbiAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgY29tcG9uZW50cz17dGhpcy5zdGF0ZS5jb21wb25lbnRzfVxuICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcbiAgICAgIH19XG4gICAgICBvbk1lbnVPcGVuPXt0aGlzLmhhbmRsZU9wZW5NZW51fVxuICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgc3R5bGVzPXtzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0KX1cbiAgICAgIG5vbmNlPXt0aGlzLmdldE5vbmNlKCl9XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ==