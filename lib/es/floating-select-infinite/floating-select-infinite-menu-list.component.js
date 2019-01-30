var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React from 'react';
import Infinite from 'react-infinite';
import MenuOption from './floating-select-infinite-menu-option.component';
// Other imports
import './floating-select-infinite.scss';

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

    return React.createElement(
      'div',
      { ref: innerRef, style: menuListStyles, className: 'floating-select-infinite-menu-list' },
      React.createElement(
        Infinite,
        {
          ref: this.setListRef,
          containerHeight: listHeight,
          elementHeight: itemSize
        },
        children.map(function (child) {
          return React.createElement(MenuOption, _extends({
            item: child,
            key: child.key,
            onOptionClick: _this2.onOptionClick
          }, _this2.props));
        })
      )
    );
  };

  return MenuList;
}(React.PureComponent);

export default MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiSW5maW5pdGUiLCJNZW51T3B0aW9uIiwiTWVudUxpc3QiLCJvbk9wdGlvbkNsaWNrIiwiaXRlbSIsInNlbGVjdE9wdGlvbiIsInByb3BzIiwiZGF0YSIsInJlbmRlciIsImdldFN0eWxlcyIsImlubmVyUmVmIiwiY2hpbGRyZW4iLCJtZW51TGlzdFN0eWxlcyIsIm1heEhlaWdodCIsIml0ZW1TaXplIiwicGFyc2VJbnQiLCJzZWxlY3RQcm9wcyIsImNvbnRyb2xIZWlnaHQiLCJpdGVtQ291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJsaXN0SGVpZ2h0Iiwic2V0TGlzdFJlZiIsIm1hcCIsImNoaWxkIiwia2V5IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZ0JBQXJCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixrREFBdkI7QUFDQTtBQUNBLE9BQU8saUNBQVA7O0lBRU1DLFE7Ozs7Ozs7Ozs7OztnS0FDSkMsYSxHQUFnQixVQUFDQyxJQUFELEVBQVU7QUFBQSxVQUNoQkMsWUFEZ0IsR0FDQyxNQUFLQyxLQUROLENBQ2hCRCxZQURnQjs7QUFFeEJBLG1CQUFhRCxLQUFLRSxLQUFMLENBQVdDLElBQXhCO0FBQ0QsSzs7O3FCQUVEQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBQ21DLEtBQUtGLEtBRHhDO0FBQUEsUUFDQ0csU0FERCxVQUNDQSxTQUREO0FBQUEsUUFDWUMsUUFEWixVQUNZQSxRQURaO0FBQUEsUUFDc0JDLFFBRHRCLFVBQ3NCQSxRQUR0Qjs7QUFFUCxRQUFNQyxpQkFBaUJILFVBQVUsVUFBVixFQUFzQixLQUFLSCxLQUEzQixDQUF2Qjs7QUFGTyxRQUlDTyxTQUpELEdBSWVELGNBSmYsQ0FJQ0MsU0FKRDs7QUFLUCxRQUFNQyxXQUFXQyxTQUFTLEtBQUtULEtBQUwsQ0FBV1UsV0FBWCxDQUF1QkMsYUFBaEMsRUFBK0MsRUFBL0MsQ0FBakI7QUFDQSxRQUFNQyxZQUFZQyxNQUFNQyxPQUFOLENBQWNULFFBQWQsSUFBMEJBLFNBQVNVLE1BQW5DLEdBQTRDLElBQTlEO0FBQ0EsUUFBSUMsYUFBYVQsU0FBakI7O0FBR0EsUUFBSUssWUFBWUosUUFBWixHQUF1QkQsU0FBM0IsRUFBc0NTLGFBQWFKLFlBQVlKLFFBQXpCOztBQUV0QyxXQUNFO0FBQUE7QUFBQSxRQUFLLEtBQUtKLFFBQVYsRUFBb0IsT0FBT0UsY0FBM0IsRUFBMkMsV0FBVSxvQ0FBckQ7QUFDRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSxlQUFLLEtBQUtXLFVBRFo7QUFFRSwyQkFBaUJELFVBRm5CO0FBR0UseUJBQWVSO0FBSGpCO0FBS0dILGlCQUFTYSxHQUFULENBQWE7QUFBQSxpQkFDWixvQkFBQyxVQUFEO0FBQ0Usa0JBQU1DLEtBRFI7QUFFRSxpQkFBS0EsTUFBTUMsR0FGYjtBQUdFLDJCQUFlLE9BQUt2QjtBQUh0QixhQUlNLE9BQUtHLEtBSlgsRUFEWTtBQUFBLFNBQWI7QUFMSDtBQURGLEtBREY7QUFpQkQsRzs7O0VBbkNvQlAsTUFBTTRCLGE7O0FBaUQ3QixlQUFlekIsUUFBZiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtb3B0aW9uLmNvbXBvbmVudCc7XG4vLyBPdGhlciBpbXBvcnRzXG5pbXBvcnQgJy4vZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLnNjc3MnO1xuXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBvbk9wdGlvbkNsaWNrID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdE9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzZWxlY3RPcHRpb24oaXRlbS5wcm9wcy5kYXRhKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBnZXRTdHlsZXMsIGlubmVyUmVmLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZW51TGlzdFN0eWxlcyA9IGdldFN0eWxlcygnbWVudUxpc3QnLCB0aGlzLnByb3BzKTtcblxuICAgIGNvbnN0IHsgbWF4SGVpZ2h0IH0gPSBtZW51TGlzdFN0eWxlcztcbiAgICBjb25zdCBpdGVtU2l6ZSA9IHBhcnNlSW50KHRoaXMucHJvcHMuc2VsZWN0UHJvcHMuY29udHJvbEhlaWdodCwgMTApO1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4ubGVuZ3RoIDogbnVsbDtcbiAgICBsZXQgbGlzdEhlaWdodCA9IG1heEhlaWdodDtcblxuXG4gICAgaWYgKGl0ZW1Db3VudCAqIGl0ZW1TaXplIDwgbWF4SGVpZ2h0KSBsaXN0SGVpZ2h0ID0gaXRlbUNvdW50ICogaXRlbVNpemU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSBzdHlsZT17bWVudUxpc3RTdHlsZXN9IGNsYXNzTmFtZT1cImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LWxpc3RcIj5cbiAgICAgICAgPEluZmluaXRlXG4gICAgICAgICAgcmVmPXt0aGlzLnNldExpc3RSZWZ9XG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0SGVpZ2h0fVxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2l0ZW1TaXplfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVuLm1hcChjaGlsZCA9PiAoXG4gICAgICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgICAgICBpdGVtPXtjaGlsZH1cbiAgICAgICAgICAgICAga2V5PXtjaGlsZC5rZXl9XG4gICAgICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMub25PcHRpb25DbGlja31cbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAvPikpfVxuICAgICAgICA8L0luZmluaXRlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5NZW51TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGdldFN0eWxlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRyb2xIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBzZWxlY3RPcHRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xuIl19