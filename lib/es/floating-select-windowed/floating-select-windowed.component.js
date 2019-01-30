var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Select from 'react-select';
import styles from '../floating-select/styles';
import FloatingSelectBase from '../floating-select/floating-select-base.component';
import MenuList from './floating-select-windowed-menu-list.component';

var FloatingSelectWindowed = function (_FloatingSelectBase) {
  _inherits(FloatingSelectWindowed, _FloatingSelectBase);

  function FloatingSelectWindowed() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectWindowed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          rest = _objectWithoutProperties(_this$props, ['components']);

      var comp = _extends({}, components, _this.state.components, { MenuList: MenuList });

      // Can't figure out a way to get styles for a single option when using
      // custom MenuList component. So, we'll have to reset the existing styles
      // by returning an empty object and then style these with CSS.
      var modifiedStyles = Object.assign(styles(_this.props.controlHeight), {
        option: function option() {
          return {};
        }
      });

      return React.createElement(Select, _extends({}, rest, {
        components: comp,
        styles: modifiedStyles,
        menuPlacement: 'auto',
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        ref: function ref(el) {
          _this.selectRef = el;
        },
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectWindowed;
}(FloatingSelectBase);

export { FloatingSelectWindowed as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQvZmxvYXRpbmctc2VsZWN0LXdpbmRvd2VkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJTZWxlY3QiLCJzdHlsZXMiLCJGbG9hdGluZ1NlbGVjdEJhc2UiLCJNZW51TGlzdCIsIkZsb2F0aW5nU2VsZWN0V2luZG93ZWQiLCJyZW5kZXIiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJyZXN0IiwiY29tcCIsInN0YXRlIiwibW9kaWZpZWRTdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJjb250cm9sSGVpZ2h0Iiwib3B0aW9uIiwiaGFuZGxlT3Blbk1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJlbCIsInNlbGVjdFJlZiIsImdldE5vbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsY0FBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLDJCQUFuQjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLG1EQUEvQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZ0RBQXJCOztJQUdxQkMsc0I7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUyxZQUFNO0FBQUEsd0JBQ21CLE1BQUtDLEtBRHhCO0FBQUEsVUFDTEMsVUFESyxlQUNMQSxVQURLO0FBQUEsVUFDVUMsSUFEVjs7QUFHYixVQUFNQyxvQkFDREYsVUFEQyxFQUVELE1BQUtHLEtBQUwsQ0FBV0gsVUFGVixFQUdELEVBQUVKLGtCQUFGLEVBSEMsQ0FBTjs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxVQUFNUSxpQkFBaUJDLE9BQU9DLE1BQVAsQ0FBY1osT0FBTyxNQUFLSyxLQUFMLENBQVdRLGFBQWxCLENBQWQsRUFBZ0Q7QUFDckVDLGdCQUFRO0FBQUEsaUJBQU8sRUFBUDtBQUFBO0FBRDZELE9BQWhELENBQXZCOztBQUlBLGFBQ0Usb0JBQUMsTUFBRCxlQUNNUCxJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSxnQkFBUUUsY0FIVjtBQUlFLHVCQUFjLE1BSmhCO0FBS0Usb0JBQVksTUFBS0ssY0FMbkI7QUFNRSxxQkFBYSxNQUFLQyxlQU5wQjtBQU9FLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FUSDtBQVVFLGVBQU8sTUFBS0UsUUFBTDtBQVZULFNBREY7QUFjRCxLOzs7O0VBL0JpRGxCLGtCOztTQUEvQkUsc0IiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LXdpbmRvd2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Zsb2F0aW5nLXNlbGVjdC9zdHlsZXMnO1xuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcbmltcG9ydCBNZW51TGlzdCBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC13aW5kb3dlZC1tZW51LWxpc3QuY29tcG9uZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdFdpbmRvd2VkIGV4dGVuZHMgRmxvYXRpbmdTZWxlY3RCYXNlIHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29tcG9uZW50cywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNvbXAgPSB7XG4gICAgICAuLi5jb21wb25lbnRzLFxuICAgICAgLi4udGhpcy5zdGF0ZS5jb21wb25lbnRzLFxuICAgICAgLi4ueyBNZW51TGlzdCB9LFxuICAgIH07XG5cbiAgICAvLyBDYW4ndCBmaWd1cmUgb3V0IGEgd2F5IHRvIGdldCBzdHlsZXMgZm9yIGEgc2luZ2xlIG9wdGlvbiB3aGVuIHVzaW5nXG4gICAgLy8gY3VzdG9tIE1lbnVMaXN0IGNvbXBvbmVudC4gU28sIHdlJ2xsIGhhdmUgdG8gcmVzZXQgdGhlIGV4aXN0aW5nIHN0eWxlc1xuICAgIC8vIGJ5IHJldHVybmluZyBhbiBlbXB0eSBvYmplY3QgYW5kIHRoZW4gc3R5bGUgdGhlc2Ugd2l0aCBDU1MuXG4gICAgY29uc3QgbW9kaWZpZWRTdHlsZXMgPSBPYmplY3QuYXNzaWduKHN0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQpLCB7XG4gICAgICBvcHRpb246ICgpID0+ICh7fSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgY29tcG9uZW50cz17Y29tcH1cbiAgICAgICAgc3R5bGVzPXttb2RpZmllZFN0eWxlc31cbiAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgICBvbk1lbnVPcGVuPXt0aGlzLmhhbmRsZU9wZW5NZW51fVxuICAgICAgICBvbk1lbnVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1lbnV9XG4gICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcbiAgICAgICAgfX1cbiAgICAgICAgbm9uY2U9e3RoaXMuZ2V0Tm9uY2UoKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcbn1cbiJdfQ==