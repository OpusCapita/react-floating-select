'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Creatable = require('react-select/lib/Creatable');

var _Creatable2 = _interopRequireDefault(_Creatable);

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

var FloatingSelectPortalCreatable = function (_FloatingSelectBase) {
  _inherits(FloatingSelectPortalCreatable, _FloatingSelectBase);

  function FloatingSelectPortalCreatable() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectPortalCreatable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          rest = _objectWithoutProperties(_this$props, ['components']);

      var comp = _extends({}, components, _this.state.components);
      return _react2.default.createElement(_Creatable2.default, _extends({}, rest, {
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

  return FloatingSelectPortalCreatable;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectPortalCreatable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtcG9ydGFsL2Zsb2F0aW5nLXNlbGVjdC1wb3J0YWwtY3JlYXRhYmxlLmpzeCJdLCJuYW1lcyI6WyJQb3J0YWwiLCJGbG9hdGluZ1NlbGVjdFBvcnRhbENyZWF0YWJsZSIsInJlbmRlciIsInByb3BzIiwiY29tcG9uZW50cyIsInJlc3QiLCJjb21wIiwic3RhdGUiLCJkb2N1bWVudCIsImJvZHkiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRyb2xIZWlnaHQiLCJlbCIsInNlbGVjdFJlZiIsImdldE5vbmNlIiwiRmxvYXRpbmdTZWxlY3RCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxJQUFmOztJQUVxQkMsNkI7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUyxZQUFNO0FBQUEsd0JBQ21CLE1BQUtDLEtBRHhCO0FBQUEsVUFDTEMsVUFESyxlQUNMQSxVQURLO0FBQUEsVUFDVUMsSUFEVjs7QUFFYixVQUFNQyxvQkFBWUYsVUFBWixFQUEyQixNQUFLRyxLQUFMLENBQVdILFVBQXRDLENBQU47QUFDQSxhQUNFLDhCQUFDLG1CQUFELGVBQ01DLElBRE47QUFFRSxvQkFBWUMsSUFGZDtBQUdFLHVCQUFjLE1BSGhCO0FBSUUsMEJBQWtCRSxTQUFTQyxJQUo3QjtBQUtFLG9CQUFZLE1BQUtDLGNBTG5CO0FBTUUscUJBQWEsTUFBS0MsZUFOcEI7QUFPRSxnQkFBUSxzQkFBTyxNQUFLUixLQUFMLENBQVdTLGFBQWxCLEVBQWlDWixNQUFqQyxDQVBWO0FBUUUsYUFBSyxhQUFDYSxFQUFELEVBQVE7QUFDWCxnQkFBS0MsU0FBTCxHQUFpQkQsRUFBakI7QUFDRCxTQVZIO0FBV0UsZUFBTyxNQUFLRSxRQUFMO0FBWFQsU0FERjtBQWVELEs7Ozs7RUFuQndEQyw0Qjs7a0JBQXRDZiw2QiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtcG9ydGFsLWNyZWF0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3JlYXRhYmxlIGZyb20gJ3JlYWN0LXNlbGVjdC9saWIvQ3JlYXRhYmxlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L3N0eWxlcyc7XG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4uL2Zsb2F0aW5nLXNlbGVjdC9mbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQnO1xuXG5jb25zdCBQb3J0YWwgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdFBvcnRhbENyZWF0YWJsZSBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcCA9IHsgLi4uY29tcG9uZW50cywgLi4udGhpcy5zdGF0ZS5jb21wb25lbnRzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxDcmVhdGFibGVcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIGNvbXBvbmVudHM9e2NvbXB9XG4gICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgICAgbWVudVBvcnRhbFRhcmdldD17ZG9jdW1lbnQuYm9keX1cbiAgICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cbiAgICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQsIFBvcnRhbCl9XG4gICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcbiAgICAgICAgfX1cbiAgICAgICAgbm9uY2U9e3RoaXMuZ2V0Tm9uY2UoKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcbn1cbiJdfQ==