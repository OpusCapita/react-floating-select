function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React from 'react';

// Other imports
import styles from '../floating-select/styles';
import './floating-select-infinite.scss';

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
    var customStyles = styles(inputHeight);
    var combinedStyles = customStyles.option(baseStyle, item.props);

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      React.createElement(
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
}(React.PureComponent);

export { MenuOption as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtb3B0aW9uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiUmVhY3QiLCJzdHlsZXMiLCJNZW51T3B0aW9uIiwib25PcHRpb25DbGljayIsInByb3BzIiwiaXRlbSIsInJlbmRlciIsImdldFN0eWxlcyIsInNlbGVjdFByb3BzIiwiY2hpbGRyZW4iLCJiYXNlU3R5bGUiLCJpbnB1dEhlaWdodCIsImNvbnRyb2xIZWlnaHQiLCJjdXN0b21TdHlsZXMiLCJjb21iaW5lZFN0eWxlcyIsIm9wdGlvbiIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCOztBQUVBO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwyQkFBbkI7QUFDQSxPQUFPLGlDQUFQOztJQUVxQkMsVTs7Ozs7Ozs7Ozs7O2dLQVFuQkMsYSxHQUFnQixZQUFNO0FBQUEsd0JBQ1ksTUFBS0MsS0FEakI7QUFBQSxVQUNaRCxhQURZLGVBQ1pBLGFBRFk7QUFBQSxVQUNHRSxJQURILGVBQ0dBLElBREg7O0FBRXBCRixvQkFBY0UsSUFBZDtBQUNELEs7Ozt1QkFFREMsTSxxQkFBUztBQUFBLGlCQUNrQyxLQUFLRixLQUR2QztBQUFBLFFBQ0NHLFNBREQsVUFDQ0EsU0FERDtBQUFBLFFBQ1lDLFdBRFosVUFDWUEsV0FEWjtBQUFBLFFBQ3lCSCxJQUR6QixVQUN5QkEsSUFEekI7QUFBQSxRQUVDSSxRQUZELEdBRWNKLEtBQUtELEtBRm5CLENBRUNLLFFBRkQ7O0FBR1AsUUFBTUMsWUFBWUgsVUFBVSxRQUFWLEVBQW9CRixLQUFLRCxLQUF6QixDQUFsQjs7QUFFQSxRQUFNTyxjQUFjSCxZQUFZSSxhQUFaLElBQTZCLE1BQWpEO0FBQ0EsUUFBTUMsZUFBZVosT0FBT1UsV0FBUCxDQUFyQjtBQUNBLFFBQU1HLGlCQUFpQkQsYUFBYUUsTUFBYixDQUFvQkwsU0FBcEIsRUFBK0JMLEtBQUtELEtBQXBDLENBQXZCOztBQUVBO0FBQ0U7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNFLG1CQUFTLEtBQUtELGFBRGhCO0FBRUUscUJBQVUsc0NBRlo7QUFHRSxpQkFBT1c7QUFIVDtBQUtHTDtBQUxIO0FBT0E7QUFDQTs7QUFYRjtBQWFELEc7OztFQW5DcUNULE1BQU1nQixhOztTQUF6QmQsVSIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIE90aGVyIGltcG9ydHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzJztcclxuaW1wb3J0ICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVPcHRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgZ2V0U3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcclxuICAgIG9uT3B0aW9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXHJcbiAgfTtcclxuXHJcbiAgb25PcHRpb25DbGljayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgb25PcHRpb25DbGljaywgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuICAgIG9uT3B0aW9uQ2xpY2soaXRlbSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBnZXRTdHlsZXMsIHNlbGVjdFByb3BzLCBpdGVtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gaXRlbS5wcm9wcztcclxuICAgIGNvbnN0IGJhc2VTdHlsZSA9IGdldFN0eWxlcygnb3B0aW9uJywgaXRlbS5wcm9wcyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRIZWlnaHQgPSBzZWxlY3RQcm9wcy5jb250cm9sSGVpZ2h0IHx8ICczMnB4JztcclxuICAgIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHN0eWxlcyhpbnB1dEhlaWdodCk7XHJcbiAgICBjb25zdCBjb21iaW5lZFN0eWxlcyA9IGN1c3RvbVN0eWxlcy5vcHRpb24oYmFzZVN0eWxlLCBpdGVtLnByb3BzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cclxuICAgICAgLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5vbk9wdGlvbkNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LW9wdGlvblwiXHJcbiAgICAgICAgc3R5bGU9e2NvbWJpbmVkU3R5bGVzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgLyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cclxuICAgICAgLyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=