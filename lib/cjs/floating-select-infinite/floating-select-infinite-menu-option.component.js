'use strict';

exports.__esModule = true;
exports.default = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../floating-select/styles');

var _styles2 = _interopRequireDefault(_styles);

require('./floating-select-infinite.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Other imports


var MenuOption = function (_React$PureComponent) {
  _inherits(MenuOption, _React$PureComponent);

  function MenuOption() {
    var _temp, _this, _ret;

    _classCallCheck(this, MenuOption);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onOptionClick = function () {
      var _this$props = _this.props,
          onOptionClick = _this$props.onOptionClick,
          item = _this$props.item;

      onOptionClick(item);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuOption.prototype.render = function render() {
    var _props = this.props,
        getStyles = _props.getStyles,
        selectProps = _props.selectProps,
        item = _props.item;
    var children = item.props.children;

    var baseStyle = getStyles('option', item.props);

    var inputHeight = selectProps.controlHeight || '32px';
    var customStyles = (0, _styles2.default)(inputHeight);
    var combinedStyles = customStyles.option(baseStyle, item.props);

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      _react2.default.createElement(
        'div',
        {
          onClick: this.onOptionClick,
          className: 'floating-select-infinite-menu-option',
          style: combinedStyles
        },
        children
      )
      /* eslint-enable jsx-a11y/no-static-element-interactions */
      /* eslint-enable jsx-a11y/click-events-have-key-events */

    );
  };

  return MenuOption;
}(_react2.default.PureComponent);

exports.default = MenuOption;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtb3B0aW9uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTWVudU9wdGlvbiIsIm9uT3B0aW9uQ2xpY2siLCJwcm9wcyIsIml0ZW0iLCJyZW5kZXIiLCJnZXRTdHlsZXMiLCJzZWxlY3RQcm9wcyIsImNoaWxkcmVuIiwiYmFzZVN0eWxlIiwiaW5wdXRIZWlnaHQiLCJjb250cm9sSGVpZ2h0IiwiY3VzdG9tU3R5bGVzIiwiY29tYmluZWRTdHlsZXMiLCJvcHRpb24iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFGQTs7O0lBSXFCQSxVOzs7Ozs7Ozs7Ozs7Z0tBUW5CQyxhLEdBQWdCLFlBQU07QUFBQSx3QkFDWSxNQUFLQyxLQURqQjtBQUFBLFVBQ1pELGFBRFksZUFDWkEsYUFEWTtBQUFBLFVBQ0dFLElBREgsZUFDR0EsSUFESDs7QUFFcEJGLG9CQUFjRSxJQUFkO0FBQ0QsSzs7O3VCQUVEQyxNLHFCQUFTO0FBQUEsaUJBQ2tDLEtBQUtGLEtBRHZDO0FBQUEsUUFDQ0csU0FERCxVQUNDQSxTQUREO0FBQUEsUUFDWUMsV0FEWixVQUNZQSxXQURaO0FBQUEsUUFDeUJILElBRHpCLFVBQ3lCQSxJQUR6QjtBQUFBLFFBRUNJLFFBRkQsR0FFY0osS0FBS0QsS0FGbkIsQ0FFQ0ssUUFGRDs7QUFHUCxRQUFNQyxZQUFZSCxVQUFVLFFBQVYsRUFBb0JGLEtBQUtELEtBQXpCLENBQWxCOztBQUVBLFFBQU1PLGNBQWNILFlBQVlJLGFBQVosSUFBNkIsTUFBakQ7QUFDQSxRQUFNQyxlQUFlLHNCQUFPRixXQUFQLENBQXJCO0FBQ0EsUUFBTUcsaUJBQWlCRCxhQUFhRSxNQUFiLENBQW9CTCxTQUFwQixFQUErQkwsS0FBS0QsS0FBcEMsQ0FBdkI7O0FBRUE7QUFDRTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0UsbUJBQVMsS0FBS0QsYUFEaEI7QUFFRSxxQkFBVSxzQ0FGWjtBQUdFLGlCQUFPVztBQUhUO0FBS0dMO0FBTEg7QUFPQTtBQUNBOztBQVhGO0FBYUQsRzs7O0VBbkNxQ08sZ0JBQU1DLGE7O2tCQUF6QmYsVSIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIE90aGVyIGltcG9ydHNcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L3N0eWxlcyc7XG5pbXBvcnQgJy4vZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51T3B0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZ2V0U3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgb25PcHRpb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgb25PcHRpb25DbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uT3B0aW9uQ2xpY2ssIGl0ZW0gfSA9IHRoaXMucHJvcHM7XG4gICAgb25PcHRpb25DbGljayhpdGVtKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBnZXRTdHlsZXMsIHNlbGVjdFByb3BzLCBpdGVtIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGl0ZW0ucHJvcHM7XG4gICAgY29uc3QgYmFzZVN0eWxlID0gZ2V0U3R5bGVzKCdvcHRpb24nLCBpdGVtLnByb3BzKTtcblxuICAgIGNvbnN0IGlucHV0SGVpZ2h0ID0gc2VsZWN0UHJvcHMuY29udHJvbEhlaWdodCB8fCAnMzJweCc7XG4gICAgY29uc3QgY3VzdG9tU3R5bGVzID0gc3R5bGVzKGlucHV0SGVpZ2h0KTtcbiAgICBjb25zdCBjb21iaW5lZFN0eWxlcyA9IGN1c3RvbVN0eWxlcy5vcHRpb24oYmFzZVN0eWxlLCBpdGVtLnByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dGhpcy5vbk9wdGlvbkNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1vcHRpb25cIlxuICAgICAgICBzdHlsZT17Y29tYmluZWRTdHlsZXN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgLyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbiAgICAgIC8qIGVzbGludC1lbmFibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuICAgICk7XG4gIH1cbn1cbiJdfQ==