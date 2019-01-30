var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Select from 'react-select';
import styles from '../floating-select/styles';
import FloatingSelectBase from '../floating-select/floating-select-base.component';
import MenuList from './floating-select-infinite-menu-list.component';

var FloatingSelectInfinite = function (_FloatingSelectBase) {
  _inherits(FloatingSelectInfinite, _FloatingSelectBase);

  function FloatingSelectInfinite() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectInfinite);

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

  return FloatingSelectInfinite;
}(FloatingSelectBase);

export { FloatingSelectInfinite as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJTZWxlY3QiLCJzdHlsZXMiLCJGbG9hdGluZ1NlbGVjdEJhc2UiLCJNZW51TGlzdCIsIkZsb2F0aW5nU2VsZWN0SW5maW5pdGUiLCJyZW5kZXIiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJyZXN0IiwiY29tcCIsInN0YXRlIiwibW9kaWZpZWRTdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJjb250cm9sSGVpZ2h0Iiwib3B0aW9uIiwiaGFuZGxlT3Blbk1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJlbCIsInNlbGVjdFJlZiIsImdldE5vbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsY0FBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLDJCQUFuQjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLG1EQUEvQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZ0RBQXJCOztJQUdxQkMsc0I7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUyxZQUFNO0FBQUEsd0JBQ21CLE1BQUtDLEtBRHhCO0FBQUEsVUFDTEMsVUFESyxlQUNMQSxVQURLO0FBQUEsVUFDVUMsSUFEVjs7QUFHYixVQUFNQyxvQkFDREYsVUFEQyxFQUVELE1BQUtHLEtBQUwsQ0FBV0gsVUFGVixFQUdELEVBQUVKLGtCQUFGLEVBSEMsQ0FBTjs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxVQUFNUSxpQkFBaUJDLE9BQU9DLE1BQVAsQ0FBY1osT0FBTyxNQUFLSyxLQUFMLENBQVdRLGFBQWxCLENBQWQsRUFBZ0Q7QUFDckVDLGdCQUFRO0FBQUEsaUJBQU8sRUFBUDtBQUFBO0FBRDZELE9BQWhELENBQXZCOztBQUlBLGFBQ0Usb0JBQUMsTUFBRCxlQUNNUCxJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSxnQkFBUUUsY0FIVjtBQUlFLHVCQUFjLE1BSmhCO0FBS0Usb0JBQVksTUFBS0ssY0FMbkI7QUFNRSxxQkFBYSxNQUFLQyxlQU5wQjtBQU9FLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FUSDtBQVVFLGVBQU8sTUFBS0UsUUFBTDtBQVZULFNBREY7QUFjRCxLOzs7O0VBL0JpRGxCLGtCOztTQUEvQkUsc0IiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzJztcclxuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gJy4vZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0SW5maW5pdGUgZXh0ZW5kcyBGbG9hdGluZ1NlbGVjdEJhc2Uge1xyXG4gIHJlbmRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY29tcG9uZW50cywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBjb21wID0ge1xyXG4gICAgICAuLi5jb21wb25lbnRzLFxyXG4gICAgICAuLi50aGlzLnN0YXRlLmNvbXBvbmVudHMsXHJcbiAgICAgIC4uLnsgTWVudUxpc3QgfSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2FuJ3QgZmlndXJlIG91dCBhIHdheSB0byBnZXQgc3R5bGVzIGZvciBhIHNpbmdsZSBvcHRpb24gd2hlbiB1c2luZ1xyXG4gICAgLy8gY3VzdG9tIE1lbnVMaXN0IGNvbXBvbmVudC4gU28sIHdlJ2xsIGhhdmUgdG8gcmVzZXQgdGhlIGV4aXN0aW5nIHN0eWxlc1xyXG4gICAgLy8gYnkgcmV0dXJuaW5nIGFuIGVtcHR5IG9iamVjdCBhbmQgdGhlbiBzdHlsZSB0aGVzZSB3aXRoIENTUy5cclxuICAgIGNvbnN0IG1vZGlmaWVkU3R5bGVzID0gT2JqZWN0LmFzc2lnbihzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0KSwge1xyXG4gICAgICBvcHRpb246ICgpID0+ICh7fSksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VsZWN0XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgY29tcG9uZW50cz17Y29tcH1cclxuICAgICAgICBzdHlsZXM9e21vZGlmaWVkU3R5bGVzfVxyXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcclxuICAgICAgICBvbk1lbnVPcGVuPXt0aGlzLmhhbmRsZU9wZW5NZW51fVxyXG4gICAgICAgIG9uTWVudUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG5vbmNlPXt0aGlzLmdldE5vbmNlKCl9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIl19