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
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: styles(_this.props.controlHeight)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelect;
}(FloatingSelectBase);

export { FloatingSelect as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJTZWxlY3QiLCJzdHlsZXMiLCJGbG9hdGluZ1NlbGVjdEJhc2UiLCJGbG9hdGluZ1NlbGVjdCIsInJlbmRlciIsInByb3BzIiwic3RhdGUiLCJjb21wb25lbnRzIiwiaGFuZGxlT3Blbk1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJjb250cm9sSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGNBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLGtDQUEvQjs7SUFFcUJDLGM7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUztBQUFBLGFBQ1Asb0JBQUMsTUFBRCxlQUNNLE1BQUtDLEtBRFg7QUFFRSxvQkFBWSxNQUFLQyxLQUFMLENBQVdDLFVBRnpCO0FBR0UsdUJBQWMsTUFIaEI7QUFJRSxvQkFBWSxNQUFLQyxjQUpuQjtBQUtFLHFCQUFhLE1BQUtDLGVBTHBCO0FBTUUsZ0JBQVFSLE9BQU8sTUFBS0ksS0FBTCxDQUFXSyxhQUFsQjtBQU5WLFNBRE87QUFBQSxLOzs7O0VBRGlDUixrQjs7U0FBdkJDLGMiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBGbG9hdGluZ1NlbGVjdEJhc2UgZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdCBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XG4gIHJlbmRlciA9ICgpID0+IChcbiAgICA8U2VsZWN0XG4gICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgIGNvbXBvbmVudHM9e3RoaXMuc3RhdGUuY29tcG9uZW50c31cbiAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XG4gICAgICBvbk1lbnVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1lbnV9XG4gICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQpfVxuICAgIC8+XG4gICk7XG59XG4iXX0=