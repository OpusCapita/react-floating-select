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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtcG9ydGFsL2Zsb2F0aW5nLXNlbGVjdC1wb3J0YWwtY3JlYXRhYmxlLmpzeCJdLCJuYW1lcyI6WyJQb3J0YWwiLCJGbG9hdGluZ1NlbGVjdFBvcnRhbENyZWF0YWJsZSIsInJlbmRlciIsInByb3BzIiwiY29tcG9uZW50cyIsInJlc3QiLCJjb21wIiwic3RhdGUiLCJkb2N1bWVudCIsImJvZHkiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRyb2xIZWlnaHQiLCJlbCIsInNlbGVjdFJlZiIsImdldE5vbmNlIiwiRmxvYXRpbmdTZWxlY3RCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxJQUFmOztJQUVxQkMsNkI7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUyxZQUFNO0FBQUEsd0JBQ21CLE1BQUtDLEtBRHhCO0FBQUEsVUFDTEMsVUFESyxlQUNMQSxVQURLO0FBQUEsVUFDVUMsSUFEVjs7QUFFYixVQUFNQyxvQkFBWUYsVUFBWixFQUEyQixNQUFLRyxLQUFMLENBQVdILFVBQXRDLENBQU47QUFDQSxhQUNFLDhCQUFDLG1CQUFELGVBQ01DLElBRE47QUFFRSxvQkFBWUMsSUFGZDtBQUdFLHVCQUFjLE1BSGhCO0FBSUUsMEJBQWtCRSxTQUFTQyxJQUo3QjtBQUtFLG9CQUFZLE1BQUtDLGNBTG5CO0FBTUUscUJBQWEsTUFBS0MsZUFOcEI7QUFPRSxnQkFBUSxzQkFBTyxNQUFLUixLQUFMLENBQVdTLGFBQWxCLEVBQWlDWixNQUFqQyxDQVBWO0FBUUUsYUFBSyxhQUFDYSxFQUFELEVBQVE7QUFDWCxnQkFBS0MsU0FBTCxHQUFpQkQsRUFBakI7QUFDRCxTQVZIO0FBV0UsZUFBTyxNQUFLRSxRQUFMO0FBWFQsU0FERjtBQWVELEs7Ozs7RUFuQndEQyw0Qjs7a0JBQXRDZiw2QiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtcG9ydGFsLWNyZWF0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDcmVhdGFibGUgZnJvbSAncmVhY3Qtc2VsZWN0L2xpYi9DcmVhdGFibGUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Zsb2F0aW5nLXNlbGVjdC9zdHlsZXMnO1xyXG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4uL2Zsb2F0aW5nLXNlbGVjdC9mbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgUG9ydGFsID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0UG9ydGFsQ3JlYXRhYmxlIGV4dGVuZHMgRmxvYXRpbmdTZWxlY3RCYXNlIHtcclxuICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBjb21wID0geyAuLi5jb21wb25lbnRzLCAuLi50aGlzLnN0YXRlLmNvbXBvbmVudHMgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDcmVhdGFibGVcclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICBjb21wb25lbnRzPXtjb21wfVxyXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcclxuICAgICAgICBtZW51UG9ydGFsVGFyZ2V0PXtkb2N1bWVudC5ib2R5fVxyXG4gICAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XHJcbiAgICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxyXG4gICAgICAgIHN0eWxlcz17c3R5bGVzKHRoaXMucHJvcHMuY29udHJvbEhlaWdodCwgUG9ydGFsKX1cclxuICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG5vbmNlPXt0aGlzLmdldE5vbmNlKCl9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIl19