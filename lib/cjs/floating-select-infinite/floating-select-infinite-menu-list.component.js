'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInfinite = require('react-infinite');

var _reactInfinite2 = _interopRequireDefault(_reactInfinite);

var _floatingSelectInfiniteMenuOption = require('./floating-select-infinite-menu-option.component');

var _floatingSelectInfiniteMenuOption2 = _interopRequireDefault(_floatingSelectInfiniteMenuOption);

require('./floating-select-infinite.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Other imports


var CLASS_PREFIX = 'floating-select-infinite';

var MenuList = function (_React$PureComponent) {
  _inherits(MenuList, _React$PureComponent);

  function MenuList() {
    var _temp, _this, _ret;

    _classCallCheck(this, MenuList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onOptionClick = function (item) {
      var selectOption = _this.props.selectOption;

      selectOption(item.props.data);
    }, _this.getItems = function () {
      var children = _this.props.children;

      if (!children) return [];
      return children;
    }, _this.renderNoOptionsMessage = function () {
      return _react2.default.createElement(
        'div',
        { className: CLASS_PREFIX + '-no-options-message' },
        _this.props.selectProps.noOptionsMessage()
      );
    }, _this.renderMenuItems = function () {
      var components = _this.props.selectProps.components;

      var renderOption = components && components.Option ? function (child) {
        return _react2.default.createElement(components.Option, _extends({ key: child.key }, child.props));
      } : function (child) {
        return _react2.default.createElement(_floatingSelectInfiniteMenuOption2.default, _extends({
          item: child,
          key: child.key,
          onOptionClick: _this.onOptionClick
        }, _this.props));
      };
      return _this.getItems().map(renderOption);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuList.prototype.render = function render() {
    var _props = this.props,
        getStyles = _props.getStyles,
        innerRef = _props.innerRef,
        selectProps = _props.selectProps;

    var menuListStyles = getStyles('menuList', this.props);
    var controlHeight = parseInt(selectProps.controlHeight, 10);
    var maxHeight = menuListStyles.maxHeight;

    var itemCount = this.getItems().length;
    var listHeight = maxHeight;

    if (itemCount * controlHeight < maxHeight) listHeight = itemCount * controlHeight;
    if (listHeight === 0) listHeight = controlHeight;
    return _react2.default.createElement(
      'div',
      { ref: innerRef, style: menuListStyles, className: CLASS_PREFIX + '-menu-list' },
      _react2.default.createElement(
        _reactInfinite2.default,
        {
          className: !this.getItems().length ? 'no-options' : null,
          ref: this.setListRef,
          containerHeight: listHeight,
          elementHeight: controlHeight
        },
        this.getItems().length ? this.renderMenuItems() : this.renderNoOptionsMessage()
      )
    );
  };

  return MenuList;
}(_react2.default.PureComponent);

exports.default = MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNMQVNTX1BSRUZJWCIsIk1lbnVMaXN0Iiwib25PcHRpb25DbGljayIsIml0ZW0iLCJzZWxlY3RPcHRpb24iLCJwcm9wcyIsImRhdGEiLCJnZXRJdGVtcyIsImNoaWxkcmVuIiwicmVuZGVyTm9PcHRpb25zTWVzc2FnZSIsInNlbGVjdFByb3BzIiwibm9PcHRpb25zTWVzc2FnZSIsInJlbmRlck1lbnVJdGVtcyIsImNvbXBvbmVudHMiLCJyZW5kZXJPcHRpb24iLCJPcHRpb24iLCJjaGlsZCIsImtleSIsIm1hcCIsInJlbmRlciIsImdldFN0eWxlcyIsImlubmVyUmVmIiwibWVudUxpc3RTdHlsZXMiLCJjb250cm9sSGVpZ2h0IiwicGFyc2VJbnQiLCJtYXhIZWlnaHQiLCJpdGVtQ291bnQiLCJsZW5ndGgiLCJsaXN0SGVpZ2h0Iiwic2V0TGlzdFJlZiIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7O0FBREE7OztBQUdBLElBQU1BLGVBQWUsMEJBQXJCOztJQUVNQyxROzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGEsR0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsVUFDaEJDLFlBRGdCLEdBQ0MsTUFBS0MsS0FETixDQUNoQkQsWUFEZ0I7O0FBRXhCQSxtQkFBYUQsS0FBS0UsS0FBTCxDQUFXQyxJQUF4QjtBQUNELEssUUFFREMsUSxHQUFXLFlBQU07QUFBQSxVQUNQQyxRQURPLEdBQ00sTUFBS0gsS0FEWCxDQUNQRyxRQURPOztBQUVmLFVBQUksQ0FBQ0EsUUFBTCxFQUFlLE9BQU8sRUFBUDtBQUNmLGFBQU9BLFFBQVA7QUFDRCxLLFFBRURDLHNCLEdBQXlCO0FBQUEsYUFDdkI7QUFBQTtBQUFBLFVBQUssV0FBY1QsWUFBZCx3QkFBTDtBQUNHLGNBQUtLLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QkMsZ0JBQXZCO0FBREgsT0FEdUI7QUFBQSxLLFFBTXpCQyxlLEdBQWtCLFlBQU07QUFBQSxVQUNDQyxVQURELEdBQ2tCLE1BQUtSLEtBRHZCLENBQ2RLLFdBRGMsQ0FDQ0csVUFERDs7QUFFdEIsVUFBTUMsZUFBZUQsY0FBY0EsV0FBV0UsTUFBekIsR0FDakI7QUFBQSxlQUFTLDhCQUFDLFVBQUQsQ0FBWSxNQUFaLGFBQW1CLEtBQUtDLE1BQU1DLEdBQTlCLElBQXVDRCxNQUFNWCxLQUE3QyxFQUFUO0FBQUEsT0FEaUIsR0FFakI7QUFBQSxlQUNBLDhCQUFDLDBDQUFEO0FBQ0UsZ0JBQU1XLEtBRFI7QUFFRSxlQUFLQSxNQUFNQyxHQUZiO0FBR0UseUJBQWUsTUFBS2Y7QUFIdEIsV0FJTSxNQUFLRyxLQUpYLEVBREE7QUFBQSxPQUZKO0FBU0EsYUFBTyxNQUFLRSxRQUFMLEdBQWdCVyxHQUFoQixDQUFvQkosWUFBcEIsQ0FBUDtBQUNELEs7OztxQkFFREssTSxxQkFBUztBQUFBLGlCQUdILEtBQUtkLEtBSEY7QUFBQSxRQUVMZSxTQUZLLFVBRUxBLFNBRks7QUFBQSxRQUVNQyxRQUZOLFVBRU1BLFFBRk47QUFBQSxRQUVnQlgsV0FGaEIsVUFFZ0JBLFdBRmhCOztBQUlQLFFBQU1ZLGlCQUFpQkYsVUFBVSxVQUFWLEVBQXNCLEtBQUtmLEtBQTNCLENBQXZCO0FBQ0EsUUFBTWtCLGdCQUFnQkMsU0FBU2QsWUFBWWEsYUFBckIsRUFBb0MsRUFBcEMsQ0FBdEI7QUFMTyxRQU1DRSxTQU5ELEdBTWVILGNBTmYsQ0FNQ0csU0FORDs7QUFPUCxRQUFNQyxZQUFZLEtBQUtuQixRQUFMLEdBQWdCb0IsTUFBbEM7QUFDQSxRQUFJQyxhQUFhSCxTQUFqQjs7QUFFQSxRQUFJQyxZQUFZSCxhQUFaLEdBQTRCRSxTQUFoQyxFQUEyQ0csYUFBYUYsWUFBWUgsYUFBekI7QUFDM0MsUUFBSUssZUFBZSxDQUFuQixFQUFzQkEsYUFBYUwsYUFBYjtBQUN0QixXQUNFO0FBQUE7QUFBQSxRQUFLLEtBQUtGLFFBQVYsRUFBb0IsT0FBT0MsY0FBM0IsRUFBMkMsV0FBY3RCLFlBQWQsZUFBM0M7QUFDRTtBQUFDLCtCQUFEO0FBQUE7QUFDRSxxQkFBVyxDQUFDLEtBQUtPLFFBQUwsR0FBZ0JvQixNQUFqQixHQUEwQixZQUExQixHQUF5QyxJQUR0RDtBQUVFLGVBQUssS0FBS0UsVUFGWjtBQUdFLDJCQUFpQkQsVUFIbkI7QUFJRSx5QkFBZUw7QUFKakI7QUFNRyxhQUFLaEIsUUFBTCxHQUFnQm9CLE1BQWhCLEdBQXlCLEtBQUtmLGVBQUwsRUFBekIsR0FBa0QsS0FBS0gsc0JBQUw7QUFOckQ7QUFERixLQURGO0FBWUQsRzs7O0VBeERvQnFCLGdCQUFNQyxhOztrQkFzRWQ5QixRIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1vcHRpb24uY29tcG9uZW50Jztcbi8vIE90aGVyIGltcG9ydHNcbmltcG9ydCAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUuc2Nzcyc7XG5cbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUnO1xuXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBvbk9wdGlvbkNsaWNrID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdE9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzZWxlY3RPcHRpb24oaXRlbS5wcm9wcy5kYXRhKTtcbiAgfTtcblxuICBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBbXTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH07XG5cbiAgcmVuZGVyTm9PcHRpb25zTWVzc2FnZSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1uby1vcHRpb25zLW1lc3NhZ2VgfT5cbiAgICAgIHt0aGlzLnByb3BzLnNlbGVjdFByb3BzLm5vT3B0aW9uc01lc3NhZ2UoKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZW5kZXJNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RQcm9wczogeyBjb21wb25lbnRzIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVuZGVyT3B0aW9uID0gY29tcG9uZW50cyAmJiBjb21wb25lbnRzLk9wdGlvblxuICAgICAgPyBjaGlsZCA9PiA8Y29tcG9uZW50cy5PcHRpb24ga2V5PXtjaGlsZC5rZXl9IHsuLi5jaGlsZC5wcm9wc30gLz5cbiAgICAgIDogY2hpbGQgPT4gKFxuICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgIGl0ZW09e2NoaWxkfVxuICAgICAgICAgIGtleT17Y2hpbGQua2V5fVxuICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMub25PcHRpb25DbGlja31cbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgLz4pO1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCkubWFwKHJlbmRlck9wdGlvbik7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGdldFN0eWxlcywgaW5uZXJSZWYsIHNlbGVjdFByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1lbnVMaXN0U3R5bGVzID0gZ2V0U3R5bGVzKCdtZW51TGlzdCcsIHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGNvbnRyb2xIZWlnaHQgPSBwYXJzZUludChzZWxlY3RQcm9wcy5jb250cm9sSGVpZ2h0LCAxMCk7XG4gICAgY29uc3QgeyBtYXhIZWlnaHQgfSA9IG1lbnVMaXN0U3R5bGVzO1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9IHRoaXMuZ2V0SXRlbXMoKS5sZW5ndGg7XG4gICAgbGV0IGxpc3RIZWlnaHQgPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoaXRlbUNvdW50ICogY29udHJvbEhlaWdodCA8IG1heEhlaWdodCkgbGlzdEhlaWdodCA9IGl0ZW1Db3VudCAqIGNvbnRyb2xIZWlnaHQ7XG4gICAgaWYgKGxpc3RIZWlnaHQgPT09IDApIGxpc3RIZWlnaHQgPSBjb250cm9sSGVpZ2h0O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17aW5uZXJSZWZ9IHN0eWxlPXttZW51TGlzdFN0eWxlc30gY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LW1lbnUtbGlzdGB9PlxuICAgICAgICA8SW5maW5pdGVcbiAgICAgICAgICBjbGFzc05hbWU9eyF0aGlzLmdldEl0ZW1zKCkubGVuZ3RoID8gJ25vLW9wdGlvbnMnIDogbnVsbH1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0TGlzdFJlZn1cbiAgICAgICAgICBjb250YWluZXJIZWlnaHQ9e2xpc3RIZWlnaHR9XG4gICAgICAgICAgZWxlbWVudEhlaWdodD17Y29udHJvbEhlaWdodH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLmdldEl0ZW1zKCkubGVuZ3RoID8gdGhpcy5yZW5kZXJNZW51SXRlbXMoKSA6IHRoaXMucmVuZGVyTm9PcHRpb25zTWVzc2FnZSgpfVxuICAgICAgICA8L0luZmluaXRlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5NZW51TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGdldFN0eWxlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRyb2xIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbm9PcHRpb25zTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBzZWxlY3RPcHRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdDtcbiJdfQ==