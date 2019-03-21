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
      return _this.getItems().map(function (child) {
        return React.createElement(MenuOption, _extends({
          item: child,
          key: child.key,
          onOptionClick: _this.onOptionClick
        }, _this.props));
      });
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
      'div',
      { ref: innerRef, style: menuListStyles, className: CLASS_PREFIX + '-menu-list' },
      React.createElement(
        Infinite,
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
}(React.PureComponent);

export default MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiSW5maW5pdGUiLCJNZW51T3B0aW9uIiwiQ0xBU1NfUFJFRklYIiwiTWVudUxpc3QiLCJvbk9wdGlvbkNsaWNrIiwiaXRlbSIsInNlbGVjdE9wdGlvbiIsInByb3BzIiwiZGF0YSIsImdldEl0ZW1zIiwiY2hpbGRyZW4iLCJyZW5kZXJOb09wdGlvbnNNZXNzYWdlIiwic2VsZWN0UHJvcHMiLCJub09wdGlvbnNNZXNzYWdlIiwicmVuZGVyTWVudUl0ZW1zIiwibWFwIiwiY2hpbGQiLCJrZXkiLCJyZW5kZXIiLCJnZXRTdHlsZXMiLCJpbm5lclJlZiIsIm1lbnVMaXN0U3R5bGVzIiwiY29udHJvbEhlaWdodCIsInBhcnNlSW50IiwibWF4SGVpZ2h0IiwiaXRlbUNvdW50IiwibGVuZ3RoIiwibGlzdEhlaWdodCIsInNldExpc3RSZWYiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixnQkFBckI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGtEQUF2QjtBQUNBO0FBQ0EsT0FBTyxpQ0FBUDs7QUFFQSxJQUFNQyxlQUFlLDBCQUFyQjs7SUFFTUMsUTs7Ozs7Ozs7Ozs7O2dLQUNKQyxhLEdBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUFBLFVBQ2hCQyxZQURnQixHQUNDLE1BQUtDLEtBRE4sQ0FDaEJELFlBRGdCOztBQUV4QkEsbUJBQWFELEtBQUtFLEtBQUwsQ0FBV0MsSUFBeEI7QUFDRCxLLFFBRURDLFEsR0FBVyxZQUFNO0FBQUEsVUFDUEMsUUFETyxHQUNNLE1BQUtILEtBRFgsQ0FDUEcsUUFETzs7QUFFZixVQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEVBQVA7QUFDZixhQUFPQSxRQUFQO0FBQ0QsSyxRQUVEQyxzQixHQUF5QjtBQUFBLGFBQ3ZCO0FBQUE7QUFBQSxVQUFLLFdBQWNULFlBQWQsd0JBQUw7QUFDRyxjQUFLSyxLQUFMLENBQVdLLFdBQVgsQ0FBdUJDLGdCQUF2QjtBQURILE9BRHVCO0FBQUEsSyxRQU16QkMsZSxHQUFrQjtBQUFBLGFBQ2hCLE1BQUtMLFFBQUwsR0FDR00sR0FESCxDQUNPO0FBQUEsZUFDSCxvQkFBQyxVQUFEO0FBQ0UsZ0JBQU1DLEtBRFI7QUFFRSxlQUFLQSxNQUFNQyxHQUZiO0FBR0UseUJBQWUsTUFBS2I7QUFIdEIsV0FJTSxNQUFLRyxLQUpYLEVBREc7QUFBQSxPQURQLENBRGdCO0FBQUEsSzs7O3FCQVdsQlcsTSxxQkFBUztBQUFBLGlCQUdILEtBQUtYLEtBSEY7QUFBQSxRQUVMWSxTQUZLLFVBRUxBLFNBRks7QUFBQSxRQUVNQyxRQUZOLFVBRU1BLFFBRk47QUFBQSxRQUVnQlIsV0FGaEIsVUFFZ0JBLFdBRmhCOztBQUlQLFFBQU1TLGlCQUFpQkYsVUFBVSxVQUFWLEVBQXNCLEtBQUtaLEtBQTNCLENBQXZCO0FBQ0EsUUFBTWUsZ0JBQWdCQyxTQUFTWCxZQUFZVSxhQUFyQixFQUFvQyxFQUFwQyxDQUF0QjtBQUxPLFFBTUNFLFNBTkQsR0FNZUgsY0FOZixDQU1DRyxTQU5EOztBQU9QLFFBQU1DLFlBQVksS0FBS2hCLFFBQUwsR0FBZ0JpQixNQUFsQztBQUNBLFFBQUlDLGFBQWFILFNBQWpCOztBQUVBLFFBQUlDLFlBQVlILGFBQVosR0FBNEJFLFNBQWhDLEVBQTJDRyxhQUFhRixZQUFZSCxhQUF6QjtBQUMzQyxRQUFJSyxlQUFlLENBQW5CLEVBQXNCQSxhQUFhTCxhQUFiO0FBQ3RCLFdBQ0U7QUFBQTtBQUFBLFFBQUssS0FBS0YsUUFBVixFQUFvQixPQUFPQyxjQUEzQixFQUEyQyxXQUFjbkIsWUFBZCxlQUEzQztBQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLHFCQUFXLENBQUMsS0FBS08sUUFBTCxHQUFnQmlCLE1BQWpCLEdBQTBCLFlBQTFCLEdBQXlDLElBRHREO0FBRUUsZUFBSyxLQUFLRSxVQUZaO0FBR0UsMkJBQWlCRCxVQUhuQjtBQUlFLHlCQUFlTDtBQUpqQjtBQU1HLGFBQUtiLFFBQUwsR0FBZ0JpQixNQUFoQixHQUF5QixLQUFLWixlQUFMLEVBQXpCLEdBQWtELEtBQUtILHNCQUFMO0FBTnJEO0FBREYsS0FERjtBQVlELEc7OztFQXJEb0JaLE1BQU04QixhOztBQW9FN0IsZUFBZTFCLFFBQWYiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LW9wdGlvbi5jb21wb25lbnQnO1xuLy8gT3RoZXIgaW1wb3J0c1xuaW1wb3J0ICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS5zY3NzJztcblxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZSc7XG5cbmNsYXNzIE1lbnVMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIG9uT3B0aW9uQ2xpY2sgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0T3B0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHNlbGVjdE9wdGlvbihpdGVtLnByb3BzLmRhdGEpO1xuICB9O1xuXG4gIGdldEl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuIFtdO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfTtcblxuICByZW5kZXJOb09wdGlvbnNNZXNzYWdlID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LW5vLW9wdGlvbnMtbWVzc2FnZWB9PlxuICAgICAge3RoaXMucHJvcHMuc2VsZWN0UHJvcHMubm9PcHRpb25zTWVzc2FnZSgpfVxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJlbmRlck1lbnVJdGVtcyA9ICgpID0+IChcbiAgICB0aGlzLmdldEl0ZW1zKClcbiAgICAgIC5tYXAoY2hpbGQgPT4gKFxuICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgIGl0ZW09e2NoaWxkfVxuICAgICAgICAgIGtleT17Y2hpbGQua2V5fVxuICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMub25PcHRpb25DbGlja31cbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgLz4pKVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBnZXRTdHlsZXMsIGlubmVyUmVmLCBzZWxlY3RQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZW51TGlzdFN0eWxlcyA9IGdldFN0eWxlcygnbWVudUxpc3QnLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCBjb250cm9sSGVpZ2h0ID0gcGFyc2VJbnQoc2VsZWN0UHJvcHMuY29udHJvbEhlaWdodCwgMTApO1xuICAgIGNvbnN0IHsgbWF4SGVpZ2h0IH0gPSBtZW51TGlzdFN0eWxlcztcbiAgICBjb25zdCBpdGVtQ291bnQgPSB0aGlzLmdldEl0ZW1zKCkubGVuZ3RoO1xuICAgIGxldCBsaXN0SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKGl0ZW1Db3VudCAqIGNvbnRyb2xIZWlnaHQgPCBtYXhIZWlnaHQpIGxpc3RIZWlnaHQgPSBpdGVtQ291bnQgKiBjb250cm9sSGVpZ2h0O1xuICAgIGlmIChsaXN0SGVpZ2h0ID09PSAwKSBsaXN0SGVpZ2h0ID0gY29udHJvbEhlaWdodDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSBzdHlsZT17bWVudUxpc3RTdHlsZXN9IGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1tZW51LWxpc3RgfT5cbiAgICAgICAgPEluZmluaXRlXG4gICAgICAgICAgY2xhc3NOYW1lPXshdGhpcy5nZXRJdGVtcygpLmxlbmd0aCA/ICduby1vcHRpb25zJyA6IG51bGx9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldExpc3RSZWZ9XG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0SGVpZ2h0fVxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2NvbnRyb2xIZWlnaHR9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5nZXRJdGVtcygpLmxlbmd0aCA/IHRoaXMucmVuZGVyTWVudUl0ZW1zKCkgOiB0aGlzLnJlbmRlck5vT3B0aW9uc01lc3NhZ2UoKX1cbiAgICAgICAgPC9JbmZpbml0ZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTWVudUxpc3QucHJvcFR5cGVzID0ge1xuICBnZXRTdHlsZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250cm9sSGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5vT3B0aW9uc01lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB9KS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgc2VsZWN0T3B0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdDtcbiJdfQ==