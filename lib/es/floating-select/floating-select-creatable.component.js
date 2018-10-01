var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Creatable from 'react-select/lib/Creatable';
import styles from './styles';
import FloatingSelectBase from './floating-select-base.component';

var FloatingSelectCreatable = function (_FloatingSelectBase) {
  _inherits(FloatingSelectCreatable, _FloatingSelectBase);

  function FloatingSelectCreatable() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectCreatable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      return React.createElement(Creatable, _extends({}, _this.props, {
        components: _this.state.components,
        menuPlacement: 'auto',
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: styles(_this.props.controlHeight)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectCreatable;
}(FloatingSelectBase);

export { FloatingSelectCreatable as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ3JlYXRhYmxlIiwic3R5bGVzIiwiRmxvYXRpbmdTZWxlY3RCYXNlIiwiRmxvYXRpbmdTZWxlY3RDcmVhdGFibGUiLCJyZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwiY29tcG9uZW50cyIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29udHJvbEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw0QkFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0Isa0NBQS9COztJQUVxQkMsdUI7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUztBQUFBLGFBQ1Asb0JBQUMsU0FBRCxlQUNNLE1BQUtDLEtBRFg7QUFFRSxvQkFBWSxNQUFLQyxLQUFMLENBQVdDLFVBRnpCO0FBR0UsdUJBQWMsTUFIaEI7QUFJRSxvQkFBWSxNQUFLQyxjQUpuQjtBQUtFLHFCQUFhLE1BQUtDLGVBTHBCO0FBTUUsZ0JBQVFSLE9BQU8sTUFBS0ksS0FBTCxDQUFXSyxhQUFsQjtBQU5WLFNBRE87QUFBQSxLOzs7O0VBRDBDUixrQjs7U0FBaENDLHVCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1jcmVhdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDcmVhdGFibGUgZnJvbSAncmVhY3Qtc2VsZWN0L2xpYi9DcmVhdGFibGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4vZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RDcmVhdGFibGUgZXh0ZW5kcyBGbG9hdGluZ1NlbGVjdEJhc2Uge1xuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPENyZWF0YWJsZVxuICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICBjb21wb25lbnRzPXt0aGlzLnN0YXRlLmNvbXBvbmVudHN9XG4gICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICBvbk1lbnVPcGVuPXt0aGlzLmhhbmRsZU9wZW5NZW51fVxuICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgc3R5bGVzPXtzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0KX1cbiAgICAvPlxuICApO1xufVxuIl19