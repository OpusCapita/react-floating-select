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
        styles: styles(_this.props.controlHeight),
        ref: function ref(el) {
          _this.selectRef = el;
        },
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectCreatable;
}(FloatingSelectBase);

export { FloatingSelectCreatable as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ3JlYXRhYmxlIiwic3R5bGVzIiwiRmxvYXRpbmdTZWxlY3RCYXNlIiwiRmxvYXRpbmdTZWxlY3RDcmVhdGFibGUiLCJyZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwiY29tcG9uZW50cyIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29udHJvbEhlaWdodCIsImVsIiwic2VsZWN0UmVmIiwiZ2V0Tm9uY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsNEJBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLGtDQUEvQjs7SUFFcUJDLHVCOzs7Ozs7Ozs7Ozs7OEpBQ25CQyxNLEdBQVM7QUFBQSxhQUNQLG9CQUFDLFNBQUQsZUFDTSxNQUFLQyxLQURYO0FBRUUsb0JBQVksTUFBS0MsS0FBTCxDQUFXQyxVQUZ6QjtBQUdFLHVCQUFjLE1BSGhCO0FBSUUsb0JBQVksTUFBS0MsY0FKbkI7QUFLRSxxQkFBYSxNQUFLQyxlQUxwQjtBQU1FLGdCQUFRUixPQUFPLE1BQUtJLEtBQUwsQ0FBV0ssYUFBbEIsQ0FOVjtBQU9FLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FUSDtBQVVFLGVBQU8sTUFBS0UsUUFBTDtBQVZULFNBRE87QUFBQSxLOzs7O0VBRDBDWCxrQjs7U0FBaENDLHVCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1jcmVhdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENyZWF0YWJsZSBmcm9tICdyZWFjdC1zZWxlY3QvbGliL0NyZWF0YWJsZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4vZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0Q3JlYXRhYmxlIGV4dGVuZHMgRmxvYXRpbmdTZWxlY3RCYXNlIHtcclxuICByZW5kZXIgPSAoKSA9PiAoXHJcbiAgICA8Q3JlYXRhYmxlXHJcbiAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICBjb21wb25lbnRzPXt0aGlzLnN0YXRlLmNvbXBvbmVudHN9XHJcbiAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcclxuICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cclxuICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxyXG4gICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQpfVxyXG4gICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XHJcbiAgICAgIH19XHJcbiAgICAgIG5vbmNlPXt0aGlzLmdldE5vbmNlKCl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIl19