var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Select from 'react-select';
import styles from '../floating-select/styles';
import FloatingSelectBase from '../floating-select/floating-select-base.component';

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
      return React.createElement(Select, _extends({}, rest, {
        components: comp,
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: styles(_this.props.controlHeight, Portal)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectPortal;
}(FloatingSelectBase);

export { FloatingSelectPortal as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtcG9ydGFsL2Zsb2F0aW5nLXNlbGVjdC1wb3J0YWwuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiU2VsZWN0Iiwic3R5bGVzIiwiRmxvYXRpbmdTZWxlY3RCYXNlIiwiUG9ydGFsIiwiRmxvYXRpbmdTZWxlY3RQb3J0YWwiLCJyZW5kZXIiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJyZXN0IiwiY29tcCIsInN0YXRlIiwiZG9jdW1lbnQiLCJib2R5IiwiaGFuZGxlT3Blbk1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJjb250cm9sSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsY0FBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLDJCQUFuQjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLG1EQUEvQjs7QUFFQSxJQUFNQyxTQUFTLElBQWY7O0lBRXFCQyxvQjs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTLFlBQU07QUFBQSx3QkFDbUIsTUFBS0MsS0FEeEI7QUFBQSxVQUNMQyxVQURLLGVBQ0xBLFVBREs7QUFBQSxVQUNVQyxJQURWOztBQUViLFVBQU1DLG9CQUFZRixVQUFaLEVBQTJCLE1BQUtHLEtBQUwsQ0FBV0gsVUFBdEMsQ0FBTjtBQUNBLGFBQ0Usb0JBQUMsTUFBRCxlQUNNQyxJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSx1QkFBYyxNQUhoQjtBQUlFLDBCQUFrQkUsU0FBU0MsSUFKN0I7QUFLRSxvQkFBWSxNQUFLQyxjQUxuQjtBQU1FLHFCQUFhLE1BQUtDLGVBTnBCO0FBT0UsZ0JBQVFiLE9BQU8sTUFBS0ssS0FBTCxDQUFXUyxhQUFsQixFQUFpQ1osTUFBakM7QUFQVixTQURGO0FBV0QsSzs7OztFQWYrQ0Qsa0I7O1NBQTdCRSxvQiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtcG9ydGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L3N0eWxlcyc7XG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4uL2Zsb2F0aW5nLXNlbGVjdC9mbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQnO1xuXG5jb25zdCBQb3J0YWwgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdFBvcnRhbCBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcCA9IHsgLi4uY29tcG9uZW50cywgLi4udGhpcy5zdGF0ZS5jb21wb25lbnRzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIGNvbXBvbmVudHM9e2NvbXB9XG4gICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgICAgbWVudVBvcnRhbFRhcmdldD17ZG9jdW1lbnQuYm9keX1cbiAgICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cbiAgICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQsIFBvcnRhbCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==