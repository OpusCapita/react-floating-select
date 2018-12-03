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
        }
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectCreatable;
}(FloatingSelectBase);

export { FloatingSelectCreatable as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ3JlYXRhYmxlIiwic3R5bGVzIiwiRmxvYXRpbmdTZWxlY3RCYXNlIiwiRmxvYXRpbmdTZWxlY3RDcmVhdGFibGUiLCJyZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwiY29tcG9uZW50cyIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29udHJvbEhlaWdodCIsImVsIiwic2VsZWN0UmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLDRCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7QUFDQSxPQUFPQyxrQkFBUCxNQUErQixrQ0FBL0I7O0lBRXFCQyx1Qjs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTO0FBQUEsYUFDUCxvQkFBQyxTQUFELGVBQ00sTUFBS0MsS0FEWDtBQUVFLG9CQUFZLE1BQUtDLEtBQUwsQ0FBV0MsVUFGekI7QUFHRSx1QkFBYyxNQUhoQjtBQUlFLG9CQUFZLE1BQUtDLGNBSm5CO0FBS0UscUJBQWEsTUFBS0MsZUFMcEI7QUFNRSxnQkFBUVIsT0FBTyxNQUFLSSxLQUFMLENBQVdLLGFBQWxCLENBTlY7QUFPRSxhQUFLLGFBQUNDLEVBQUQsRUFBUTtBQUNYLGdCQUFLQyxTQUFMLEdBQWlCRCxFQUFqQjtBQUNEO0FBVEgsU0FETztBQUFBLEs7Ozs7RUFEMENULGtCOztTQUFoQ0MsdUIiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENyZWF0YWJsZSBmcm9tICdyZWFjdC1zZWxlY3QvbGliL0NyZWF0YWJsZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBGbG9hdGluZ1NlbGVjdEJhc2UgZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdENyZWF0YWJsZSBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XG4gIHJlbmRlciA9ICgpID0+IChcbiAgICA8Q3JlYXRhYmxlXG4gICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgIGNvbXBvbmVudHM9e3RoaXMuc3RhdGUuY29tcG9uZW50c31cbiAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XG4gICAgICBvbk1lbnVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1lbnV9XG4gICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQpfVxuICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ==