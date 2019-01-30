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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiSW5maW5pdGUiLCJNZW51T3B0aW9uIiwiTWVudUxpc3QiLCJvbk9wdGlvbkNsaWNrIiwiaXRlbSIsInNlbGVjdE9wdGlvbiIsInByb3BzIiwiZGF0YSIsInJlbmRlciIsImdldFN0eWxlcyIsImlubmVyUmVmIiwiY2hpbGRyZW4iLCJtZW51TGlzdFN0eWxlcyIsIm1heEhlaWdodCIsIml0ZW1TaXplIiwicGFyc2VJbnQiLCJzZWxlY3RQcm9wcyIsImNvbnRyb2xIZWlnaHQiLCJpdGVtQ291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJsaXN0SGVpZ2h0Iiwic2V0TGlzdFJlZiIsIm1hcCIsImNoaWxkIiwia2V5IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZ0JBQXJCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixrREFBdkI7QUFDQTtBQUNBLE9BQU8saUNBQVA7O0lBRU1DLFE7Ozs7Ozs7Ozs7OztnS0FDSkMsYSxHQUFnQixVQUFDQyxJQUFELEVBQVU7QUFBQSxVQUNoQkMsWUFEZ0IsR0FDQyxNQUFLQyxLQUROLENBQ2hCRCxZQURnQjs7QUFFeEJBLG1CQUFhRCxLQUFLRSxLQUFMLENBQVdDLElBQXhCO0FBQ0QsSzs7O3FCQUVEQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBQ21DLEtBQUtGLEtBRHhDO0FBQUEsUUFDQ0csU0FERCxVQUNDQSxTQUREO0FBQUEsUUFDWUMsUUFEWixVQUNZQSxRQURaO0FBQUEsUUFDc0JDLFFBRHRCLFVBQ3NCQSxRQUR0Qjs7QUFFUCxRQUFNQyxpQkFBaUJILFVBQVUsVUFBVixFQUFzQixLQUFLSCxLQUEzQixDQUF2Qjs7QUFGTyxRQUlDTyxTQUpELEdBSWVELGNBSmYsQ0FJQ0MsU0FKRDs7QUFLUCxRQUFNQyxXQUFXQyxTQUFTLEtBQUtULEtBQUwsQ0FBV1UsV0FBWCxDQUF1QkMsYUFBaEMsRUFBK0MsRUFBL0MsQ0FBakI7QUFDQSxRQUFNQyxZQUFZQyxNQUFNQyxPQUFOLENBQWNULFFBQWQsSUFBMEJBLFNBQVNVLE1BQW5DLEdBQTRDLElBQTlEO0FBQ0EsUUFBSUMsYUFBYVQsU0FBakI7O0FBR0EsUUFBSUssWUFBWUosUUFBWixHQUF1QkQsU0FBM0IsRUFBc0NTLGFBQWFKLFlBQVlKLFFBQXpCOztBQUV0QyxXQUNFO0FBQUE7QUFBQSxRQUFLLEtBQUtKLFFBQVYsRUFBb0IsT0FBT0UsY0FBM0IsRUFBMkMsV0FBVSxvQ0FBckQ7QUFDRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSxlQUFLLEtBQUtXLFVBRFo7QUFFRSwyQkFBaUJELFVBRm5CO0FBR0UseUJBQWVSO0FBSGpCO0FBS0dILGlCQUFTYSxHQUFULENBQWE7QUFBQSxpQkFDWixvQkFBQyxVQUFEO0FBQ0Usa0JBQU1DLEtBRFI7QUFFRSxpQkFBS0EsTUFBTUMsR0FGYjtBQUdFLDJCQUFlLE9BQUt2QjtBQUh0QixhQUlNLE9BQUtHLEtBSlgsRUFEWTtBQUFBLFNBQWI7QUFMSDtBQURGLEtBREY7QUFpQkQsRzs7O0VBbkNvQlAsTUFBTTRCLGE7O0FBaUQ3QixlQUFlekIsUUFBZiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XHJcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtb3B0aW9uLmNvbXBvbmVudCc7XHJcbi8vIE90aGVyIGltcG9ydHNcclxuaW1wb3J0ICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS5zY3NzJztcclxuXHJcbmNsYXNzIE1lbnVMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgb25PcHRpb25DbGljayA9IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCB7IHNlbGVjdE9wdGlvbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIHNlbGVjdE9wdGlvbihpdGVtLnByb3BzLmRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZ2V0U3R5bGVzLCBpbm5lclJlZiwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtZW51TGlzdFN0eWxlcyA9IGdldFN0eWxlcygnbWVudUxpc3QnLCB0aGlzLnByb3BzKTtcclxuXHJcbiAgICBjb25zdCB7IG1heEhlaWdodCB9ID0gbWVudUxpc3RTdHlsZXM7XHJcbiAgICBjb25zdCBpdGVtU2l6ZSA9IHBhcnNlSW50KHRoaXMucHJvcHMuc2VsZWN0UHJvcHMuY29udHJvbEhlaWdodCwgMTApO1xyXG4gICAgY29uc3QgaXRlbUNvdW50ID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5sZW5ndGggOiBudWxsO1xyXG4gICAgbGV0IGxpc3RIZWlnaHQgPSBtYXhIZWlnaHQ7XHJcblxyXG5cclxuICAgIGlmIChpdGVtQ291bnQgKiBpdGVtU2l6ZSA8IG1heEhlaWdodCkgbGlzdEhlaWdodCA9IGl0ZW1Db3VudCAqIGl0ZW1TaXplO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgcmVmPXtpbm5lclJlZn0gc3R5bGU9e21lbnVMaXN0U3R5bGVzfSBjbGFzc05hbWU9XCJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1saXN0XCI+XHJcbiAgICAgICAgPEluZmluaXRlXHJcbiAgICAgICAgICByZWY9e3RoaXMuc2V0TGlzdFJlZn1cclxuICAgICAgICAgIGNvbnRhaW5lckhlaWdodD17bGlzdEhlaWdodH1cclxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2l0ZW1TaXplfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbi5tYXAoY2hpbGQgPT4gKFxyXG4gICAgICAgICAgICA8TWVudU9wdGlvblxyXG4gICAgICAgICAgICAgIGl0ZW09e2NoaWxkfVxyXG4gICAgICAgICAgICAgIGtleT17Y2hpbGQua2V5fVxyXG4gICAgICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMub25PcHRpb25DbGlja31cclxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgLz4pKX1cclxuICAgICAgICA8L0luZmluaXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5NZW51TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgZ2V0U3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIHNlbGVjdE9wdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdDtcclxuIl19