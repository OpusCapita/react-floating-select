var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Creatable from 'react-select/lib/Creatable';
import styles from '../floating-select/styles';
import FloatingSelectBase from '../floating-select/floating-select-base.component';

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
      return React.createElement(Creatable, _extends({}, rest, {
        components: comp,
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: styles(_this.props.controlHeight, Portal),
        ref: function ref(el) {
          _this.selectRef = el;
        },
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectPortalCreatable;
}(FloatingSelectBase);

export { FloatingSelectPortalCreatable as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtcG9ydGFsL2Zsb2F0aW5nLXNlbGVjdC1wb3J0YWwtY3JlYXRhYmxlLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkNyZWF0YWJsZSIsInN0eWxlcyIsIkZsb2F0aW5nU2VsZWN0QmFzZSIsIlBvcnRhbCIsIkZsb2F0aW5nU2VsZWN0UG9ydGFsQ3JlYXRhYmxlIiwicmVuZGVyIiwicHJvcHMiLCJjb21wb25lbnRzIiwicmVzdCIsImNvbXAiLCJzdGF0ZSIsImRvY3VtZW50IiwiYm9keSIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29udHJvbEhlaWdodCIsImVsIiwic2VsZWN0UmVmIiwiZ2V0Tm9uY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw0QkFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLDJCQUFuQjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLG1EQUEvQjs7QUFFQSxJQUFNQyxTQUFTLElBQWY7O0lBRXFCQyw2Qjs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTLFlBQU07QUFBQSx3QkFDbUIsTUFBS0MsS0FEeEI7QUFBQSxVQUNMQyxVQURLLGVBQ0xBLFVBREs7QUFBQSxVQUNVQyxJQURWOztBQUViLFVBQU1DLG9CQUFZRixVQUFaLEVBQTJCLE1BQUtHLEtBQUwsQ0FBV0gsVUFBdEMsQ0FBTjtBQUNBLGFBQ0Usb0JBQUMsU0FBRCxlQUNNQyxJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSx1QkFBYyxNQUhoQjtBQUlFLDBCQUFrQkUsU0FBU0MsSUFKN0I7QUFLRSxvQkFBWSxNQUFLQyxjQUxuQjtBQU1FLHFCQUFhLE1BQUtDLGVBTnBCO0FBT0UsZ0JBQVFiLE9BQU8sTUFBS0ssS0FBTCxDQUFXUyxhQUFsQixFQUFpQ1osTUFBakMsQ0FQVjtBQVFFLGFBQUssYUFBQ2EsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FWSDtBQVdFLGVBQU8sTUFBS0UsUUFBTDtBQVhULFNBREY7QUFlRCxLOzs7O0VBbkJ3RGhCLGtCOztTQUF0Q0UsNkIiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LXBvcnRhbC1jcmVhdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3JlYXRhYmxlIGZyb20gJ3JlYWN0LXNlbGVjdC9saWIvQ3JlYXRhYmxlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzJztcclxuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IFBvcnRhbCA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdFBvcnRhbENyZWF0YWJsZSBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XHJcbiAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb21wb25lbnRzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgY29tcCA9IHsgLi4uY29tcG9uZW50cywgLi4udGhpcy5zdGF0ZS5jb21wb25lbnRzIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q3JlYXRhYmxlXHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgY29tcG9uZW50cz17Y29tcH1cclxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXHJcbiAgICAgICAgbWVudVBvcnRhbFRhcmdldD17ZG9jdW1lbnQuYm9keX1cclxuICAgICAgICBvbk1lbnVPcGVuPXt0aGlzLmhhbmRsZU9wZW5NZW51fVxyXG4gICAgICAgIG9uTWVudUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQsIFBvcnRhbCl9XHJcbiAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBub25jZT17dGhpcy5nZXROb25jZSgpfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcbiJdfQ==