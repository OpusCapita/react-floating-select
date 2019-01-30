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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIk1lbnVMaXN0Iiwib25PcHRpb25DbGljayIsIml0ZW0iLCJzZWxlY3RPcHRpb24iLCJwcm9wcyIsImRhdGEiLCJyZW5kZXIiLCJnZXRTdHlsZXMiLCJpbm5lclJlZiIsImNoaWxkcmVuIiwibWVudUxpc3RTdHlsZXMiLCJtYXhIZWlnaHQiLCJpdGVtU2l6ZSIsInBhcnNlSW50Iiwic2VsZWN0UHJvcHMiLCJjb250cm9sSGVpZ2h0IiwiaXRlbUNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibGlzdEhlaWdodCIsInNldExpc3RSZWYiLCJtYXAiLCJjaGlsZCIsImtleSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7O0FBREE7OztJQUdNQSxROzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGEsR0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsVUFDaEJDLFlBRGdCLEdBQ0MsTUFBS0MsS0FETixDQUNoQkQsWUFEZ0I7O0FBRXhCQSxtQkFBYUQsS0FBS0UsS0FBTCxDQUFXQyxJQUF4QjtBQUNELEs7OztxQkFFREMsTSxxQkFBUztBQUFBOztBQUFBLGlCQUNtQyxLQUFLRixLQUR4QztBQUFBLFFBQ0NHLFNBREQsVUFDQ0EsU0FERDtBQUFBLFFBQ1lDLFFBRFosVUFDWUEsUUFEWjtBQUFBLFFBQ3NCQyxRQUR0QixVQUNzQkEsUUFEdEI7O0FBRVAsUUFBTUMsaUJBQWlCSCxVQUFVLFVBQVYsRUFBc0IsS0FBS0gsS0FBM0IsQ0FBdkI7O0FBRk8sUUFJQ08sU0FKRCxHQUllRCxjQUpmLENBSUNDLFNBSkQ7O0FBS1AsUUFBTUMsV0FBV0MsU0FBUyxLQUFLVCxLQUFMLENBQVdVLFdBQVgsQ0FBdUJDLGFBQWhDLEVBQStDLEVBQS9DLENBQWpCO0FBQ0EsUUFBTUMsWUFBWUMsTUFBTUMsT0FBTixDQUFjVCxRQUFkLElBQTBCQSxTQUFTVSxNQUFuQyxHQUE0QyxJQUE5RDtBQUNBLFFBQUlDLGFBQWFULFNBQWpCOztBQUdBLFFBQUlLLFlBQVlKLFFBQVosR0FBdUJELFNBQTNCLEVBQXNDUyxhQUFhSixZQUFZSixRQUF6Qjs7QUFFdEMsV0FDRTtBQUFBO0FBQUEsUUFBSyxLQUFLSixRQUFWLEVBQW9CLE9BQU9FLGNBQTNCLEVBQTJDLFdBQVUsb0NBQXJEO0FBQ0U7QUFBQywrQkFBRDtBQUFBO0FBQ0UsZUFBSyxLQUFLVyxVQURaO0FBRUUsMkJBQWlCRCxVQUZuQjtBQUdFLHlCQUFlUjtBQUhqQjtBQUtHSCxpQkFBU2EsR0FBVCxDQUFhO0FBQUEsaUJBQ1osOEJBQUMsMENBQUQ7QUFDRSxrQkFBTUMsS0FEUjtBQUVFLGlCQUFLQSxNQUFNQyxHQUZiO0FBR0UsMkJBQWUsT0FBS3ZCO0FBSHRCLGFBSU0sT0FBS0csS0FKWCxFQURZO0FBQUEsU0FBYjtBQUxIO0FBREYsS0FERjtBQWlCRCxHOzs7RUFuQ29CcUIsZ0JBQU1DLGE7O2tCQWlEZDFCLFEiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LW9wdGlvbi5jb21wb25lbnQnO1xuLy8gT3RoZXIgaW1wb3J0c1xuaW1wb3J0ICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS5zY3NzJztcblxuY2xhc3MgTWVudUxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgb25PcHRpb25DbGljayA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RPcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgc2VsZWN0T3B0aW9uKGl0ZW0ucHJvcHMuZGF0YSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ2V0U3R5bGVzLCBpbm5lclJlZiwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVudUxpc3RTdHlsZXMgPSBnZXRTdHlsZXMoJ21lbnVMaXN0JywgdGhpcy5wcm9wcyk7XG5cbiAgICBjb25zdCB7IG1heEhlaWdodCB9ID0gbWVudUxpc3RTdHlsZXM7XG4gICAgY29uc3QgaXRlbVNpemUgPSBwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdFByb3BzLmNvbnRyb2xIZWlnaHQsIDEwKTtcbiAgICBjb25zdCBpdGVtQ291bnQgPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmxlbmd0aCA6IG51bGw7XG4gICAgbGV0IGxpc3RIZWlnaHQgPSBtYXhIZWlnaHQ7XG5cblxuICAgIGlmIChpdGVtQ291bnQgKiBpdGVtU2l6ZSA8IG1heEhlaWdodCkgbGlzdEhlaWdodCA9IGl0ZW1Db3VudCAqIGl0ZW1TaXplO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtpbm5lclJlZn0gc3R5bGU9e21lbnVMaXN0U3R5bGVzfSBjbGFzc05hbWU9XCJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1saXN0XCI+XG4gICAgICAgIDxJbmZpbml0ZVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRMaXN0UmVmfVxuICAgICAgICAgIGNvbnRhaW5lckhlaWdodD17bGlzdEhlaWdodH1cbiAgICAgICAgICBlbGVtZW50SGVpZ2h0PXtpdGVtU2l6ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbi5tYXAoY2hpbGQgPT4gKFxuICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgaXRlbT17Y2hpbGR9XG4gICAgICAgICAgICAgIGtleT17Y2hpbGQua2V5fVxuICAgICAgICAgICAgICBvbk9wdGlvbkNsaWNrPXt0aGlzLm9uT3B0aW9uQ2xpY2t9XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgLz4pKX1cbiAgICAgICAgPC9JbmZpbml0ZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTWVudUxpc3QucHJvcFR5cGVzID0ge1xuICBnZXRTdHlsZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250cm9sSGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgc2VsZWN0T3B0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdDtcbiJdfQ==