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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuList.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        getStyles = _props.getStyles,
        innerRef = _props.innerRef,
        children = _props.children;

    var menuListStyles = getStyles('menuList', this.props);

    var maxHeight = menuListStyles.maxHeight;

    var itemSize = parseInt(this.props.selectProps.controlHeight, 10);
    var itemCount = Array.isArray(children) ? children.length : null;
    var listHeight = maxHeight;

    if (itemCount * itemSize < maxHeight) listHeight = itemCount * itemSize;

    return _react2.default.createElement(
      'div',
      { ref: innerRef, style: menuListStyles, className: 'floating-select-infinite-menu-list' },
      _react2.default.createElement(
        _reactInfinite2.default,
        {
          ref: this.setListRef,
          containerHeight: listHeight,
          elementHeight: itemSize
        },
        children.map(function (child) {
          return _react2.default.createElement(_floatingSelectInfiniteMenuOption2.default, _extends({
            item: child,
            key: child.key,
            onOptionClick: _this2.onOptionClick
          }, _this2.props));
        })
      )
    );
  };

  return MenuList;
}(_react2.default.PureComponent);

exports.default = MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIk1lbnVMaXN0Iiwib25PcHRpb25DbGljayIsIml0ZW0iLCJzZWxlY3RPcHRpb24iLCJwcm9wcyIsImRhdGEiLCJyZW5kZXIiLCJnZXRTdHlsZXMiLCJpbm5lclJlZiIsImNoaWxkcmVuIiwibWVudUxpc3RTdHlsZXMiLCJtYXhIZWlnaHQiLCJpdGVtU2l6ZSIsInBhcnNlSW50Iiwic2VsZWN0UHJvcHMiLCJjb250cm9sSGVpZ2h0IiwiaXRlbUNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibGlzdEhlaWdodCIsInNldExpc3RSZWYiLCJtYXAiLCJjaGlsZCIsImtleSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7O0FBREE7OztJQUdNQSxROzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGEsR0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsVUFDaEJDLFlBRGdCLEdBQ0MsTUFBS0MsS0FETixDQUNoQkQsWUFEZ0I7O0FBRXhCQSxtQkFBYUQsS0FBS0UsS0FBTCxDQUFXQyxJQUF4QjtBQUNELEs7OztxQkFFREMsTSxxQkFBUztBQUFBOztBQUFBLGlCQUNtQyxLQUFLRixLQUR4QztBQUFBLFFBQ0NHLFNBREQsVUFDQ0EsU0FERDtBQUFBLFFBQ1lDLFFBRFosVUFDWUEsUUFEWjtBQUFBLFFBQ3NCQyxRQUR0QixVQUNzQkEsUUFEdEI7O0FBRVAsUUFBTUMsaUJBQWlCSCxVQUFVLFVBQVYsRUFBc0IsS0FBS0gsS0FBM0IsQ0FBdkI7O0FBRk8sUUFJQ08sU0FKRCxHQUllRCxjQUpmLENBSUNDLFNBSkQ7O0FBS1AsUUFBTUMsV0FBV0MsU0FBUyxLQUFLVCxLQUFMLENBQVdVLFdBQVgsQ0FBdUJDLGFBQWhDLEVBQStDLEVBQS9DLENBQWpCO0FBQ0EsUUFBTUMsWUFBWUMsTUFBTUMsT0FBTixDQUFjVCxRQUFkLElBQTBCQSxTQUFTVSxNQUFuQyxHQUE0QyxJQUE5RDtBQUNBLFFBQUlDLGFBQWFULFNBQWpCOztBQUdBLFFBQUlLLFlBQVlKLFFBQVosR0FBdUJELFNBQTNCLEVBQXNDUyxhQUFhSixZQUFZSixRQUF6Qjs7QUFFdEMsV0FDRTtBQUFBO0FBQUEsUUFBSyxLQUFLSixRQUFWLEVBQW9CLE9BQU9FLGNBQTNCLEVBQTJDLFdBQVUsb0NBQXJEO0FBQ0U7QUFBQywrQkFBRDtBQUFBO0FBQ0UsZUFBSyxLQUFLVyxVQURaO0FBRUUsMkJBQWlCRCxVQUZuQjtBQUdFLHlCQUFlUjtBQUhqQjtBQUtHSCxpQkFBU2EsR0FBVCxDQUFhO0FBQUEsaUJBQ1osOEJBQUMsMENBQUQ7QUFDRSxrQkFBTUMsS0FEUjtBQUVFLGlCQUFLQSxNQUFNQyxHQUZiO0FBR0UsMkJBQWUsT0FBS3ZCO0FBSHRCLGFBSU0sT0FBS0csS0FKWCxFQURZO0FBQUEsU0FBYjtBQUxIO0FBREYsS0FERjtBQWlCRCxHOzs7RUFuQ29CcUIsZ0JBQU1DLGE7O2tCQWlEZDFCLFEiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xyXG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LW9wdGlvbi5jb21wb25lbnQnO1xyXG4vLyBPdGhlciBpbXBvcnRzXHJcbmltcG9ydCAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUuc2Nzcyc7XHJcblxyXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIG9uT3B0aW9uQ2xpY2sgPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgeyBzZWxlY3RPcHRpb24gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBzZWxlY3RPcHRpb24oaXRlbS5wcm9wcy5kYXRhKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGdldFN0eWxlcywgaW5uZXJSZWYsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbWVudUxpc3RTdHlsZXMgPSBnZXRTdHlsZXMoJ21lbnVMaXN0JywgdGhpcy5wcm9wcyk7XHJcblxyXG4gICAgY29uc3QgeyBtYXhIZWlnaHQgfSA9IG1lbnVMaXN0U3R5bGVzO1xyXG4gICAgY29uc3QgaXRlbVNpemUgPSBwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdFByb3BzLmNvbnRyb2xIZWlnaHQsIDEwKTtcclxuICAgIGNvbnN0IGl0ZW1Db3VudCA9IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4ubGVuZ3RoIDogbnVsbDtcclxuICAgIGxldCBsaXN0SGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG5cclxuXHJcbiAgICBpZiAoaXRlbUNvdW50ICogaXRlbVNpemUgPCBtYXhIZWlnaHQpIGxpc3RIZWlnaHQgPSBpdGVtQ291bnQgKiBpdGVtU2l6ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHJlZj17aW5uZXJSZWZ9IHN0eWxlPXttZW51TGlzdFN0eWxlc30gY2xhc3NOYW1lPVwiZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdFwiPlxyXG4gICAgICAgIDxJbmZpbml0ZVxyXG4gICAgICAgICAgcmVmPXt0aGlzLnNldExpc3RSZWZ9XHJcbiAgICAgICAgICBjb250YWluZXJIZWlnaHQ9e2xpc3RIZWlnaHR9XHJcbiAgICAgICAgICBlbGVtZW50SGVpZ2h0PXtpdGVtU2l6ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW4ubWFwKGNoaWxkID0+IChcclxuICAgICAgICAgICAgPE1lbnVPcHRpb25cclxuICAgICAgICAgICAgICBpdGVtPXtjaGlsZH1cclxuICAgICAgICAgICAgICBrZXk9e2NoaWxkLmtleX1cclxuICAgICAgICAgICAgICBvbk9wdGlvbkNsaWNrPXt0aGlzLm9uT3B0aW9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgIC8+KSl9XHJcbiAgICAgICAgPC9JbmZpbml0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTWVudUxpc3QucHJvcFR5cGVzID0ge1xyXG4gIGdldFN0eWxlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGNvbnRyb2xIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RPcHRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XHJcbiJdfQ==