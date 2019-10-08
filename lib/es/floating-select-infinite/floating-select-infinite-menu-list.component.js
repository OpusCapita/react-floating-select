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
    return React.createElement(
      Infinite,
      {
        className: !this.getItems().length ? CLASS_PREFIX + '-menu-list no-options' : CLASS_PREFIX + '-menu-list',
        ref: innerRef,
        containerHeight: listHeight,
        elementHeight: controlHeight
      },
      itemCount ? this.renderMenuItems() : this.renderNoOptionsMessage()
    );
  };

  return MenuList;
}(React.PureComponent);

export default MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiSW5maW5pdGUiLCJNZW51T3B0aW9uIiwiQ0xBU1NfUFJFRklYIiwiTWVudUxpc3QiLCJvbk9wdGlvbkNsaWNrIiwiaXRlbSIsInNlbGVjdE9wdGlvbiIsInByb3BzIiwiZGF0YSIsImdldEl0ZW1zIiwiY2hpbGRyZW4iLCJyZW5kZXJOb09wdGlvbnNNZXNzYWdlIiwic2VsZWN0UHJvcHMiLCJub09wdGlvbnNNZXNzYWdlIiwicmVuZGVyTWVudUl0ZW1zIiwiY29tcG9uZW50cyIsInJlbmRlck9wdGlvbiIsIk9wdGlvbiIsImNoaWxkIiwia2V5IiwibWFwIiwicmVuZGVyIiwiZ2V0U3R5bGVzIiwiaW5uZXJSZWYiLCJtZW51TGlzdFN0eWxlcyIsImNvbnRyb2xIZWlnaHQiLCJwYXJzZUludCIsIm1heEhlaWdodCIsIml0ZW1Db3VudCIsImxlbmd0aCIsImxpc3RIZWlnaHQiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixnQkFBckI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGtEQUF2QjtBQUNBO0FBQ0EsT0FBTyxpQ0FBUDs7QUFFQSxJQUFNQyxlQUFlLDBCQUFyQjs7SUFFTUMsUTs7Ozs7Ozs7Ozs7O2dLQUNKQyxhLEdBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUFBLFVBQ2hCQyxZQURnQixHQUNDLE1BQUtDLEtBRE4sQ0FDaEJELFlBRGdCOztBQUV4QkEsbUJBQWFELEtBQUtFLEtBQUwsQ0FBV0MsSUFBeEI7QUFDRCxLLFFBRURDLFEsR0FBVyxZQUFNO0FBQUEsVUFDUEMsUUFETyxHQUNNLE1BQUtILEtBRFgsQ0FDUEcsUUFETzs7QUFFZixVQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEVBQVA7QUFDZixhQUFPQSxRQUFQO0FBQ0QsSyxRQUVEQyxzQixHQUF5QjtBQUFBLGFBQ3ZCO0FBQUE7QUFBQSxVQUFLLFdBQWNULFlBQWQsd0JBQUw7QUFDRyxjQUFLSyxLQUFMLENBQVdLLFdBQVgsQ0FBdUJDLGdCQUF2QjtBQURILE9BRHVCO0FBQUEsSyxRQU16QkMsZSxHQUFrQixZQUFNO0FBQUEsVUFDQ0MsVUFERCxHQUNrQixNQUFLUixLQUR2QixDQUNkSyxXQURjLENBQ0NHLFVBREQ7O0FBRXRCLFVBQU1DLGVBQWVELGNBQWNBLFdBQVdFLE1BQXpCLEdBQ2pCO0FBQUEsZUFBUyxvQkFBQyxVQUFELENBQVksTUFBWixhQUFtQixLQUFLQyxNQUFNQyxHQUE5QixJQUF1Q0QsTUFBTVgsS0FBN0MsRUFBVDtBQUFBLE9BRGlCLEdBRWpCO0FBQUEsZUFDQSxvQkFBQyxVQUFEO0FBQ0UsZ0JBQU1XLEtBRFI7QUFFRSxlQUFLQSxNQUFNQyxHQUZiO0FBR0UseUJBQWUsTUFBS2Y7QUFIdEIsV0FJTSxNQUFLRyxLQUpYLEVBREE7QUFBQSxPQUZKO0FBU0EsYUFBTyxNQUFLRSxRQUFMLEdBQWdCVyxHQUFoQixDQUFvQkosWUFBcEIsQ0FBUDtBQUNELEs7OztxQkFFREssTSxxQkFBUztBQUFBLGlCQUdILEtBQUtkLEtBSEY7QUFBQSxRQUVMZSxTQUZLLFVBRUxBLFNBRks7QUFBQSxRQUVNQyxRQUZOLFVBRU1BLFFBRk47QUFBQSxRQUVnQlgsV0FGaEIsVUFFZ0JBLFdBRmhCOztBQUlQLFFBQU1ZLGlCQUFpQkYsVUFBVSxVQUFWLEVBQXNCLEtBQUtmLEtBQTNCLENBQXZCO0FBQ0EsUUFBTWtCLGdCQUFnQkMsU0FBU2QsWUFBWWEsYUFBckIsRUFBb0MsRUFBcEMsQ0FBdEI7QUFMTyxRQU1DRSxTQU5ELEdBTWVILGNBTmYsQ0FNQ0csU0FORDs7QUFPUCxRQUFNQyxZQUFZLEtBQUtuQixRQUFMLEdBQWdCb0IsTUFBbEM7QUFDQSxRQUFJQyxhQUFhSCxTQUFqQjs7QUFFQSxRQUFJQyxZQUFZSCxhQUFaLEdBQTRCRSxTQUFoQyxFQUEyQ0csYUFBYUYsWUFBWUgsYUFBekI7QUFDM0MsUUFBSUssZUFBZSxDQUFuQixFQUFzQkEsYUFBYUwsYUFBYjtBQUN0QixXQUNFO0FBQUMsY0FBRDtBQUFBO0FBQ0UsbUJBQVcsQ0FBQyxLQUFLaEIsUUFBTCxHQUFnQm9CLE1BQWpCLEdBQTZCM0IsWUFBN0IsNkJBQXNFQSxZQUF0RSxlQURiO0FBRUUsYUFBS3FCLFFBRlA7QUFHRSx5QkFBaUJPLFVBSG5CO0FBSUUsdUJBQWVMO0FBSmpCO0FBTUdHLGtCQUFZLEtBQUtkLGVBQUwsRUFBWixHQUFxQyxLQUFLSCxzQkFBTDtBQU54QyxLQURGO0FBVUQsRzs7O0VBdERvQlosTUFBTWdDLGE7O0FBb0U3QixlQUFlNUIsUUFBZiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtb3B0aW9uLmNvbXBvbmVudCc7XG4vLyBPdGhlciBpbXBvcnRzXG5pbXBvcnQgJy4vZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLnNjc3MnO1xuXG5jb25zdCBDTEFTU19QUkVGSVggPSAnZmxvYXRpbmctc2VsZWN0LWluZmluaXRlJztcblxuY2xhc3MgTWVudUxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgb25PcHRpb25DbGljayA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RPcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgc2VsZWN0T3B0aW9uKGl0ZW0ucHJvcHMuZGF0YSk7XG4gIH07XG5cbiAgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9O1xuXG4gIHJlbmRlck5vT3B0aW9uc01lc3NhZ2UgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tbm8tb3B0aW9ucy1tZXNzYWdlYH0+XG4gICAgICB7dGhpcy5wcm9wcy5zZWxlY3RQcm9wcy5ub09wdGlvbnNNZXNzYWdlKCl9XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmVuZGVyTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0UHJvcHM6IHsgY29tcG9uZW50cyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJlbmRlck9wdGlvbiA9IGNvbXBvbmVudHMgJiYgY29tcG9uZW50cy5PcHRpb25cbiAgICAgID8gY2hpbGQgPT4gPGNvbXBvbmVudHMuT3B0aW9uIGtleT17Y2hpbGQua2V5fSB7Li4uY2hpbGQucHJvcHN9IC8+XG4gICAgICA6IGNoaWxkID0+IChcbiAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICBpdGVtPXtjaGlsZH1cbiAgICAgICAgICBrZXk9e2NoaWxkLmtleX1cbiAgICAgICAgICBvbk9wdGlvbkNsaWNrPXt0aGlzLm9uT3B0aW9uQ2xpY2t9XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIC8+KTtcbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpLm1hcChyZW5kZXJPcHRpb24pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBnZXRTdHlsZXMsIGlubmVyUmVmLCBzZWxlY3RQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZW51TGlzdFN0eWxlcyA9IGdldFN0eWxlcygnbWVudUxpc3QnLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCBjb250cm9sSGVpZ2h0ID0gcGFyc2VJbnQoc2VsZWN0UHJvcHMuY29udHJvbEhlaWdodCwgMTApO1xuICAgIGNvbnN0IHsgbWF4SGVpZ2h0IH0gPSBtZW51TGlzdFN0eWxlcztcbiAgICBjb25zdCBpdGVtQ291bnQgPSB0aGlzLmdldEl0ZW1zKCkubGVuZ3RoO1xuICAgIGxldCBsaXN0SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKGl0ZW1Db3VudCAqIGNvbnRyb2xIZWlnaHQgPCBtYXhIZWlnaHQpIGxpc3RIZWlnaHQgPSBpdGVtQ291bnQgKiBjb250cm9sSGVpZ2h0O1xuICAgIGlmIChsaXN0SGVpZ2h0ID09PSAwKSBsaXN0SGVpZ2h0ID0gY29udHJvbEhlaWdodDtcbiAgICByZXR1cm4gKFxuICAgICAgPEluZmluaXRlXG4gICAgICAgIGNsYXNzTmFtZT17IXRoaXMuZ2V0SXRlbXMoKS5sZW5ndGggPyBgJHtDTEFTU19QUkVGSVh9LW1lbnUtbGlzdCBuby1vcHRpb25zYCA6IGAke0NMQVNTX1BSRUZJWH0tbWVudS1saXN0YH1cbiAgICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0SGVpZ2h0fVxuICAgICAgICBlbGVtZW50SGVpZ2h0PXtjb250cm9sSGVpZ2h0fVxuICAgICAgPlxuICAgICAgICB7aXRlbUNvdW50ID8gdGhpcy5yZW5kZXJNZW51SXRlbXMoKSA6IHRoaXMucmVuZGVyTm9PcHRpb25zTWVzc2FnZSgpfVxuICAgICAgPC9JbmZpbml0ZT5cbiAgICApO1xuICB9XG59XG5cbk1lbnVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZ2V0U3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBub09wdGlvbnNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHNlbGVjdE9wdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xuIl19