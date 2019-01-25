var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Select from 'react-select';
import styles from './styles';
import FloatingSelectBase from './floating-select-base.component';

var FloatingSelect = function (_FloatingSelectBase) {
  _inherits(FloatingSelect, _FloatingSelectBase);

  function FloatingSelect() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      return React.createElement(Select, _extends({}, _this.props, {
        components: _this.state.components,
        menuPlacement: 'auto',
        ref: function ref(el) {
          _this.selectRef = el;
        },
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: styles(_this.props.controlHeight),
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelect;
}(FloatingSelectBase);

export { FloatingSelect as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJTZWxlY3QiLCJzdHlsZXMiLCJGbG9hdGluZ1NlbGVjdEJhc2UiLCJGbG9hdGluZ1NlbGVjdCIsInJlbmRlciIsInByb3BzIiwic3RhdGUiLCJjb21wb25lbnRzIiwiZWwiLCJzZWxlY3RSZWYiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRyb2xIZWlnaHQiLCJnZXROb25jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixjQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7QUFDQSxPQUFPQyxrQkFBUCxNQUErQixrQ0FBL0I7O0lBRXFCQyxjOzs7Ozs7Ozs7Ozs7OEpBQ25CQyxNLEdBQVM7QUFBQSxhQUNQLG9CQUFDLE1BQUQsZUFDTSxNQUFLQyxLQURYO0FBRUUsb0JBQVksTUFBS0MsS0FBTCxDQUFXQyxVQUZ6QjtBQUdFLHVCQUFjLE1BSGhCO0FBSUUsYUFBSyxhQUFDQyxFQUFELEVBQVE7QUFDWCxnQkFBS0MsU0FBTCxHQUFpQkQsRUFBakI7QUFDRCxTQU5IO0FBT0Usb0JBQVksTUFBS0UsY0FQbkI7QUFRRSxxQkFBYSxNQUFLQyxlQVJwQjtBQVNFLGdCQUFRVixPQUFPLE1BQUtJLEtBQUwsQ0FBV08sYUFBbEIsQ0FUVjtBQVVFLGVBQU8sTUFBS0MsUUFBTDtBQVZULFNBRE87QUFBQSxLOzs7O0VBRGlDWCxrQjs7U0FBdkJDLGMiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBGbG9hdGluZ1NlbGVjdEJhc2UgZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3QgZXh0ZW5kcyBGbG9hdGluZ1NlbGVjdEJhc2Uge1xyXG4gIHJlbmRlciA9ICgpID0+IChcclxuICAgIDxTZWxlY3RcclxuICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgIGNvbXBvbmVudHM9e3RoaXMuc3RhdGUuY29tcG9uZW50c31cclxuICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxyXG4gICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XHJcbiAgICAgIG9uTWVudUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlTWVudX1cclxuICAgICAgc3R5bGVzPXtzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0KX1cclxuICAgICAgbm9uY2U9e3RoaXMuZ2V0Tm9uY2UoKX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iXX0=