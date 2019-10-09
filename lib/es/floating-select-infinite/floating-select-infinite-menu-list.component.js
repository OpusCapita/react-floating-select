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
      return React.createElement(
        'div',
        { className: CLASS_PREFIX + '-no-options-message' },
        _this.props.selectProps.noOptionsMessage()
      );
    }, _this.renderMenuItems = function () {
      var components = _this.props.selectProps.components;

      var renderOption = components && components.Option ? function (child) {
        return React.createElement(components.Option, _extends({ key: child.key }, child.props));
      } : function (child) {
        return React.createElement(MenuOption, _extends({
          item: child,
          key: child.key,
          onOptionClick: _this.onOptionClick
        }, _this.props));
      };
      return _this.getItems().map(renderOption);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuList.prototype.renderInfiniteList = function renderInfiniteList() {
    var _props = this.props,
        getStyles = _props.getStyles,
        selectProps = _props.selectProps;

    var menuListStyles = getStyles('menuList', this.props);
    var controlHeight = parseInt(selectProps.controlHeight, 10);
    var maxHeight = menuListStyles.maxHeight;

    var itemCount = this.getItems().length;
    var listHeight = maxHeight;

    if (itemCount * controlHeight < maxHeight) listHeight = itemCount * controlHeight;
    if (listHeight === 0) listHeight = controlHeight;
    // innerRef cannot be ref prop of Infinite, otherwise react-select
    // calls ref's contains function on blur
    return React.createElement(
      Infinite,
      {
        className: !this.getItems().length ? CLASS_PREFIX + '-menu-list no-options' : CLASS_PREFIX + '-menu-list',
        containerHeight: listHeight,
        elementHeight: controlHeight
      },
      itemCount ? this.renderMenuItems() : this.renderNoOptionsMessage()
    );
  };

  MenuList.prototype.render = function render() {
    var innerRef = this.props.innerRef;

    // If the outermost div has ref function, scrollbar works but scrolling with mouse wheel not
    // with IE. Without this outermost div clicking scrollbar closes the menu but scrolling with
    // mouse wheel works with IE. This othermost div causes scrolling with mouse wheel fail with
    // Chrome. Therefore the outhermost element is render only with IE.

    if ( /* @cc_on!@ */false || !!document.documentMode) {
      return React.createElement(
        'div',
        { ref: innerRef },
        this.renderInfiniteList()
      );
    }

    return this.renderInfiniteList();
  };

  return MenuList;
}(React.PureComponent);

export default MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiSW5maW5pdGUiLCJNZW51T3B0aW9uIiwiQ0xBU1NfUFJFRklYIiwiTWVudUxpc3QiLCJvbk9wdGlvbkNsaWNrIiwiaXRlbSIsInNlbGVjdE9wdGlvbiIsInByb3BzIiwiZGF0YSIsImdldEl0ZW1zIiwiY2hpbGRyZW4iLCJyZW5kZXJOb09wdGlvbnNNZXNzYWdlIiwic2VsZWN0UHJvcHMiLCJub09wdGlvbnNNZXNzYWdlIiwicmVuZGVyTWVudUl0ZW1zIiwiY29tcG9uZW50cyIsInJlbmRlck9wdGlvbiIsIk9wdGlvbiIsImNoaWxkIiwia2V5IiwibWFwIiwicmVuZGVySW5maW5pdGVMaXN0IiwiZ2V0U3R5bGVzIiwibWVudUxpc3RTdHlsZXMiLCJjb250cm9sSGVpZ2h0IiwicGFyc2VJbnQiLCJtYXhIZWlnaHQiLCJpdGVtQ291bnQiLCJsZW5ndGgiLCJsaXN0SGVpZ2h0IiwicmVuZGVyIiwiaW5uZXJSZWYiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGdCQUFyQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsa0RBQXZCO0FBQ0E7QUFDQSxPQUFPLGlDQUFQOztBQUVBLElBQU1DLGVBQWUsMEJBQXJCOztJQUVNQyxROzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGEsR0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsVUFDaEJDLFlBRGdCLEdBQ0MsTUFBS0MsS0FETixDQUNoQkQsWUFEZ0I7O0FBRXhCQSxtQkFBYUQsS0FBS0UsS0FBTCxDQUFXQyxJQUF4QjtBQUNELEssUUFFREMsUSxHQUFXLFlBQU07QUFBQSxVQUNQQyxRQURPLEdBQ00sTUFBS0gsS0FEWCxDQUNQRyxRQURPOztBQUVmLFVBQUksQ0FBQ0EsUUFBTCxFQUFlLE9BQU8sRUFBUDtBQUNmLGFBQU9BLFFBQVA7QUFDRCxLLFFBRURDLHNCLEdBQXlCO0FBQUEsYUFDdkI7QUFBQTtBQUFBLFVBQUssV0FBY1QsWUFBZCx3QkFBTDtBQUNHLGNBQUtLLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QkMsZ0JBQXZCO0FBREgsT0FEdUI7QUFBQSxLLFFBTXpCQyxlLEdBQWtCLFlBQU07QUFBQSxVQUNDQyxVQURELEdBQ2tCLE1BQUtSLEtBRHZCLENBQ2RLLFdBRGMsQ0FDQ0csVUFERDs7QUFFdEIsVUFBTUMsZUFBZUQsY0FBY0EsV0FBV0UsTUFBekIsR0FDakI7QUFBQSxlQUFTLG9CQUFDLFVBQUQsQ0FBWSxNQUFaLGFBQW1CLEtBQUtDLE1BQU1DLEdBQTlCLElBQXVDRCxNQUFNWCxLQUE3QyxFQUFUO0FBQUEsT0FEaUIsR0FFakI7QUFBQSxlQUNBLG9CQUFDLFVBQUQ7QUFDRSxnQkFBTVcsS0FEUjtBQUVFLGVBQUtBLE1BQU1DLEdBRmI7QUFHRSx5QkFBZSxNQUFLZjtBQUh0QixXQUlNLE1BQUtHLEtBSlgsRUFEQTtBQUFBLE9BRko7QUFTQSxhQUFPLE1BQUtFLFFBQUwsR0FBZ0JXLEdBQWhCLENBQW9CSixZQUFwQixDQUFQO0FBQ0QsSzs7O3FCQUVESyxrQixpQ0FBcUI7QUFBQSxpQkFHZixLQUFLZCxLQUhVO0FBQUEsUUFFakJlLFNBRmlCLFVBRWpCQSxTQUZpQjtBQUFBLFFBRU5WLFdBRk0sVUFFTkEsV0FGTTs7QUFJbkIsUUFBTVcsaUJBQWlCRCxVQUFVLFVBQVYsRUFBc0IsS0FBS2YsS0FBM0IsQ0FBdkI7QUFDQSxRQUFNaUIsZ0JBQWdCQyxTQUFTYixZQUFZWSxhQUFyQixFQUFvQyxFQUFwQyxDQUF0QjtBQUxtQixRQU1YRSxTQU5XLEdBTUdILGNBTkgsQ0FNWEcsU0FOVzs7QUFPbkIsUUFBTUMsWUFBWSxLQUFLbEIsUUFBTCxHQUFnQm1CLE1BQWxDO0FBQ0EsUUFBSUMsYUFBYUgsU0FBakI7O0FBRUEsUUFBSUMsWUFBWUgsYUFBWixHQUE0QkUsU0FBaEMsRUFBMkNHLGFBQWFGLFlBQVlILGFBQXpCO0FBQzNDLFFBQUlLLGVBQWUsQ0FBbkIsRUFBc0JBLGFBQWFMLGFBQWI7QUFDdEI7QUFDQTtBQUNBLFdBQ0U7QUFBQyxjQUFEO0FBQUE7QUFDRSxtQkFBVyxDQUFDLEtBQUtmLFFBQUwsR0FBZ0JtQixNQUFqQixHQUE2QjFCLFlBQTdCLDZCQUFzRUEsWUFBdEUsZUFEYjtBQUVFLHlCQUFpQjJCLFVBRm5CO0FBR0UsdUJBQWVMO0FBSGpCO0FBS0dHLGtCQUFZLEtBQUtiLGVBQUwsRUFBWixHQUFxQyxLQUFLSCxzQkFBTDtBQUx4QyxLQURGO0FBU0QsRzs7cUJBRURtQixNLHFCQUFTO0FBQUEsUUFDQ0MsUUFERCxHQUNjLEtBQUt4QixLQURuQixDQUNDd0IsUUFERDs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFJLGNBQWMsU0FBUyxDQUFDLENBQUNDLFNBQVNDLFlBQXRDLEVBQW9EO0FBQ2xELGFBQ0U7QUFBQTtBQUFBLFVBQUssS0FBS0YsUUFBVjtBQUNHLGFBQUtWLGtCQUFMO0FBREgsT0FERjtBQUtEOztBQUVELFdBQU8sS0FBS0Esa0JBQUwsRUFBUDtBQUNELEc7OztFQXpFb0J0QixNQUFNbUMsYTs7QUF1RjdCLGVBQWUvQixRQUFmIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1vcHRpb24uY29tcG9uZW50Jztcbi8vIE90aGVyIGltcG9ydHNcbmltcG9ydCAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUuc2Nzcyc7XG5cbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUnO1xuXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBvbk9wdGlvbkNsaWNrID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdE9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzZWxlY3RPcHRpb24oaXRlbS5wcm9wcy5kYXRhKTtcbiAgfTtcblxuICBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBbXTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH07XG5cbiAgcmVuZGVyTm9PcHRpb25zTWVzc2FnZSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1uby1vcHRpb25zLW1lc3NhZ2VgfT5cbiAgICAgIHt0aGlzLnByb3BzLnNlbGVjdFByb3BzLm5vT3B0aW9uc01lc3NhZ2UoKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZW5kZXJNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RQcm9wczogeyBjb21wb25lbnRzIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVuZGVyT3B0aW9uID0gY29tcG9uZW50cyAmJiBjb21wb25lbnRzLk9wdGlvblxuICAgICAgPyBjaGlsZCA9PiA8Y29tcG9uZW50cy5PcHRpb24ga2V5PXtjaGlsZC5rZXl9IHsuLi5jaGlsZC5wcm9wc30gLz5cbiAgICAgIDogY2hpbGQgPT4gKFxuICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgIGl0ZW09e2NoaWxkfVxuICAgICAgICAgIGtleT17Y2hpbGQua2V5fVxuICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMub25PcHRpb25DbGlja31cbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgLz4pO1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCkubWFwKHJlbmRlck9wdGlvbik7XG4gIH07XG5cbiAgcmVuZGVySW5maW5pdGVMaXN0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGdldFN0eWxlcywgc2VsZWN0UHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVudUxpc3RTdHlsZXMgPSBnZXRTdHlsZXMoJ21lbnVMaXN0JywgdGhpcy5wcm9wcyk7XG4gICAgY29uc3QgY29udHJvbEhlaWdodCA9IHBhcnNlSW50KHNlbGVjdFByb3BzLmNvbnRyb2xIZWlnaHQsIDEwKTtcbiAgICBjb25zdCB7IG1heEhlaWdodCB9ID0gbWVudUxpc3RTdHlsZXM7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5nZXRJdGVtcygpLmxlbmd0aDtcbiAgICBsZXQgbGlzdEhlaWdodCA9IG1heEhlaWdodDtcblxuICAgIGlmIChpdGVtQ291bnQgKiBjb250cm9sSGVpZ2h0IDwgbWF4SGVpZ2h0KSBsaXN0SGVpZ2h0ID0gaXRlbUNvdW50ICogY29udHJvbEhlaWdodDtcbiAgICBpZiAobGlzdEhlaWdodCA9PT0gMCkgbGlzdEhlaWdodCA9IGNvbnRyb2xIZWlnaHQ7XG4gICAgLy8gaW5uZXJSZWYgY2Fubm90IGJlIHJlZiBwcm9wIG9mIEluZmluaXRlLCBvdGhlcndpc2UgcmVhY3Qtc2VsZWN0XG4gICAgLy8gY2FsbHMgcmVmJ3MgY29udGFpbnMgZnVuY3Rpb24gb24gYmx1clxuICAgIHJldHVybiAoXG4gICAgICA8SW5maW5pdGVcbiAgICAgICAgY2xhc3NOYW1lPXshdGhpcy5nZXRJdGVtcygpLmxlbmd0aCA/IGAke0NMQVNTX1BSRUZJWH0tbWVudS1saXN0IG5vLW9wdGlvbnNgIDogYCR7Q0xBU1NfUFJFRklYfS1tZW51LWxpc3RgfVxuICAgICAgICBjb250YWluZXJIZWlnaHQ9e2xpc3RIZWlnaHR9XG4gICAgICAgIGVsZW1lbnRIZWlnaHQ9e2NvbnRyb2xIZWlnaHR9XG4gICAgICA+XG4gICAgICAgIHtpdGVtQ291bnQgPyB0aGlzLnJlbmRlck1lbnVJdGVtcygpIDogdGhpcy5yZW5kZXJOb09wdGlvbnNNZXNzYWdlKCl9XG4gICAgICA8L0luZmluaXRlPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbm5lclJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIElmIHRoZSBvdXRlcm1vc3QgZGl2IGhhcyByZWYgZnVuY3Rpb24sIHNjcm9sbGJhciB3b3JrcyBidXQgc2Nyb2xsaW5nIHdpdGggbW91c2Ugd2hlZWwgbm90XG4gICAgLy8gd2l0aCBJRS4gV2l0aG91dCB0aGlzIG91dGVybW9zdCBkaXYgY2xpY2tpbmcgc2Nyb2xsYmFyIGNsb3NlcyB0aGUgbWVudSBidXQgc2Nyb2xsaW5nIHdpdGhcbiAgICAvLyBtb3VzZSB3aGVlbCB3b3JrcyB3aXRoIElFLiBUaGlzIG90aGVybW9zdCBkaXYgY2F1c2VzIHNjcm9sbGluZyB3aXRoIG1vdXNlIHdoZWVsIGZhaWwgd2l0aFxuICAgIC8vIENocm9tZS4gVGhlcmVmb3JlIHRoZSBvdXRoZXJtb3N0IGVsZW1lbnQgaXMgcmVuZGVyIG9ubHkgd2l0aCBJRS5cbiAgICBpZiAoLyogQGNjX29uIUAgKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9e2lubmVyUmVmfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJJbmZpbml0ZUxpc3QoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlbmRlckluZmluaXRlTGlzdCgpO1xuICB9XG59XG5cbk1lbnVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZ2V0U3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBub09wdGlvbnNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHNlbGVjdE9wdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xuIl19