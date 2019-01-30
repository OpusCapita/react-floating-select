function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React from 'react';
import { VariableSizeList as List } from 'react-window';

// Other imports
import { createGetHeight, flattenGroupedChildren, getCurrentIndex } from './util';
import styles from '../floating-select/styles';
import './floating-select-windowed.scss';

var MenuList = function (_React$PureComponent) {
  _inherits(MenuList, _React$PureComponent);

  function MenuList(props) {
    _classCallCheck(this, MenuList);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.renderOption = function (_ref) {
      var data = _ref.data,
          index = _ref.index,
          baseStyle = _ref.baseStyle;

      var inputHeight = _this.props.selectProps.inputHeight || '30px';
      var customStyles = styles(inputHeight);
      var combinedStyles = customStyles.option(baseStyle, data[index].props);

      return React.createElement(
        'div',
        {
          className: 'floating-select-windowed-menu-option',
          style: combinedStyles
        },
        data[index]
      );
    };

    _this.setListRef = _this.setListRef.bind(_this);
    _this.getItemSize = _this.getItemSize.bind(_this);

    _this.state = {
      currentIndex: 0,
      children: null,
      heights: [],
      itemCount: 0,
      menuHeight: 0
    };
    return _this;
  }

  MenuList.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.children !== prevState.children) {
      var getStyles = nextProps.getStyles;

      var children = React.Children.toArray(nextProps.children);

      var head = children[0] || {};
      var _head$props = head.props;
      _head$props = _head$props === undefined ? {} : _head$props;
      var _head$props$data = _head$props.data;
      _head$props$data = _head$props$data === undefined ? {} : _head$props$data;
      var _head$props$data$opti = _head$props$data.options,
          options = _head$props$data$opti === undefined ? [] : _head$props$data$opti;

      var groupedChildrenLength = options.length;
      var isGrouped = groupedChildrenLength > 0;
      var flattenedChildren = isGrouped && flattenGroupedChildren(children);

      children = isGrouped ? flattenedChildren : children;

      var groupHeadingStyles = getStyles('groupHeading', nextProps);
      var loadingMsgStyles = getStyles('loadingMessage', nextProps);
      var noOptionsMsgStyles = getStyles('noOptionsMessage', nextProps);
      var optionStyles = getStyles('option', nextProps);
      var getHeight = createGetHeight({
        groupHeadingStyles: groupHeadingStyles,
        noOptionsMsgStyles: noOptionsMsgStyles,
        optionStyles: optionStyles,
        loadingMsgStyles: loadingMsgStyles
      });

      var heights = children.map(getHeight);

      var currentIndex = getCurrentIndex(children);

      var itemCount = children.length;

      // calc menu height
      var sum = function sum(a, b) {
        return a + b;
      };
      var totalHeight = heights.reduce(sum, 0);

      var _getStyles = getStyles('menuList', nextProps),
          maxHeight = _getStyles.maxHeight;

      var menuHeight = Math.min(maxHeight, totalHeight);
      var estimatedItemSize = Math.floor(totalHeight / itemCount);

      return {
        children: children,
        currentIndex: currentIndex,
        estimatedItemSize: estimatedItemSize,
        heights: heights,
        itemCount: itemCount,
        menuHeight: menuHeight
      };
    }

    return null;
  };

  MenuList.prototype.componentDidUpdate = function componentDidUpdate() {
    var currentIndex = this.state.currentIndex;


    if (this.state.children.length === 1) {
      this.list.resetAfterIndex(0);
    }

    /**
     * enables scrolling on key down arrow
     *
     * note: prevents scrolling on index 0 and 1 to avoid
     * returning to top of menu when it remains open after selecting
     */
    if (currentIndex > 1) {
      this.list.scrollToItem(currentIndex);
    }
  };

  MenuList.prototype.getItemSize = function getItemSize(index) {
    return this.state.heights[index];
  };

  MenuList.prototype.setListRef = function setListRef(ref) {
    this.list = ref;
  };

  MenuList.prototype.render = function render() {
    var _props = this.props,
        getStyles = _props.getStyles,
        innerRef = _props.innerRef;
    var _state = this.state,
        stateChildren = _state.children,
        estimatedItemSize = _state.estimatedItemSize,
        menuHeight = _state.menuHeight,
        itemCount = _state.itemCount;

    var _getStyles2 = getStyles('menuList', this.props),
        maxHeight = _getStyles2.maxHeight,
        menuListStyle = _objectWithoutProperties(_getStyles2, ['maxHeight']);

    return React.createElement(
      'div',
      { ref: innerRef, style: menuListStyle, className: 'floating-select-windowed-menu-list' },
      React.createElement(
        List,
        {
          ref: this.setListRef,
          estimatedItemSize: estimatedItemSize,
          height: menuHeight,
          itemCount: itemCount,
          itemData: stateChildren,
          itemSize: this.getItemSize
        },
        this.renderOption
      )
    );
  };

  return MenuList;
}(React.PureComponent);

export default MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQvZmxvYXRpbmctc2VsZWN0LXdpbmRvd2VkLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiVmFyaWFibGVTaXplTGlzdCIsIkxpc3QiLCJjcmVhdGVHZXRIZWlnaHQiLCJmbGF0dGVuR3JvdXBlZENoaWxkcmVuIiwiZ2V0Q3VycmVudEluZGV4Iiwic3R5bGVzIiwiTWVudUxpc3QiLCJwcm9wcyIsInJlbmRlck9wdGlvbiIsImRhdGEiLCJpbmRleCIsImJhc2VTdHlsZSIsImlucHV0SGVpZ2h0Iiwic2VsZWN0UHJvcHMiLCJjdXN0b21TdHlsZXMiLCJjb21iaW5lZFN0eWxlcyIsIm9wdGlvbiIsInNldExpc3RSZWYiLCJiaW5kIiwiZ2V0SXRlbVNpemUiLCJzdGF0ZSIsImN1cnJlbnRJbmRleCIsImNoaWxkcmVuIiwiaGVpZ2h0cyIsIml0ZW1Db3VudCIsIm1lbnVIZWlnaHQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJnZXRTdHlsZXMiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJoZWFkIiwib3B0aW9ucyIsImdyb3VwZWRDaGlsZHJlbkxlbmd0aCIsImxlbmd0aCIsImlzR3JvdXBlZCIsImZsYXR0ZW5lZENoaWxkcmVuIiwiZ3JvdXBIZWFkaW5nU3R5bGVzIiwibG9hZGluZ01zZ1N0eWxlcyIsIm5vT3B0aW9uc01zZ1N0eWxlcyIsIm9wdGlvblN0eWxlcyIsImdldEhlaWdodCIsIm1hcCIsInN1bSIsImEiLCJiIiwidG90YWxIZWlnaHQiLCJyZWR1Y2UiLCJtYXhIZWlnaHQiLCJNYXRoIiwibWluIiwiZXN0aW1hdGVkSXRlbVNpemUiLCJmbG9vciIsImNvbXBvbmVudERpZFVwZGF0ZSIsImxpc3QiLCJyZXNldEFmdGVySW5kZXgiLCJzY3JvbGxUb0l0ZW0iLCJyZWYiLCJyZW5kZXIiLCJp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UDtBQUNELEc7O3FCQUVETyxVLHVCQUFXeUMsRyxFQUFLO0FBQ2QsU0FBS0gsSUFBTCxHQUFZRyxHQUFaO0FBQ0QsRzs7cUJBaUJEQyxNLHFCQUFTO0FBQUEsaUJBQ3lCLEtBQUtwRCxLQUQ5QjtBQUFBLFFBQ0NzQixTQURELFVBQ0NBLFNBREQ7QUFBQSxRQUNZK0IsUUFEWixVQUNZQSxRQURaO0FBQUEsaUJBSUgsS0FBS3hDLEtBSkY7QUFBQSxRQUdLeUMsYUFITCxVQUdMdkMsUUFISztBQUFBLFFBR29COEIsaUJBSHBCLFVBR29CQSxpQkFIcEI7QUFBQSxRQUd1QzNCLFVBSHZDLFVBR3VDQSxVQUh2QztBQUFBLFFBR21ERCxTQUhuRCxVQUdtREEsU0FIbkQ7O0FBQUEsc0JBTWlDSyxVQUFVLFVBQVYsRUFBc0IsS0FBS3RCLEtBQTNCLENBTmpDO0FBQUEsUUFNQzBDLFNBTkQsZUFNQ0EsU0FORDtBQUFBLFFBTWVhLGFBTmY7O0FBUVAsV0FDRTtBQUFBO0FBQUEsUUFBSyxLQUFLRixRQUFWLEVBQW9CLE9BQU9FLGFBQTNCLEVBQTBDLFdBQVUsb0NBQXBEO0FBQ0U7QUFBQyxZQUFEO0FBQUE7QUFDRSxlQUFLLEtBQUs3QyxVQURaO0FBRUUsNkJBQW1CbUMsaUJBRnJCO0FBR0Usa0JBQVEzQixVQUhWO0FBSUUscUJBQVdELFNBSmI7QUFLRSxvQkFBVXFDLGFBTFo7QUFNRSxvQkFBVSxLQUFLMUM7QUFOakI7QUFRRyxhQUFLWDtBQVJSO0FBREYsS0FERjtBQWNELEc7OztFQXpJb0JULE1BQU1nRSxhOztBQXFKN0IsZUFBZXpELFFBQWYiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LXdpbmRvd2VkLW1lbnUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZhcmlhYmxlU2l6ZUxpc3QgYXMgTGlzdCB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5cbi8vIE90aGVyIGltcG9ydHNcbmltcG9ydCB7XG4gIGNyZWF0ZUdldEhlaWdodCxcbiAgZmxhdHRlbkdyb3VwZWRDaGlsZHJlbixcbiAgZ2V0Q3VycmVudEluZGV4LFxufSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzJztcbmltcG9ydCAnLi9mbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQuc2Nzcyc7XG5cbmNsYXNzIE1lbnVMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRMaXN0UmVmID0gdGhpcy5zZXRMaXN0UmVmLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRJdGVtU2l6ZSA9IHRoaXMuZ2V0SXRlbVNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgIGhlaWdodHM6IFtdLFxuICAgICAgaXRlbUNvdW50OiAwLFxuICAgICAgbWVudUhlaWdodDogMCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChuZXh0UHJvcHMuY2hpbGRyZW4gIT09IHByZXZTdGF0ZS5jaGlsZHJlbikge1xuICAgICAgY29uc3QgeyBnZXRTdHlsZXMgfSA9IG5leHRQcm9wcztcbiAgICAgIGxldCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkobmV4dFByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgY29uc3QgaGVhZCA9IGNoaWxkcmVuWzBdIHx8IHt9O1xuICAgICAgY29uc3Qge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbXSxcbiAgICAgICAgICB9ID0ge30sXG4gICAgICAgIH0gPSB7fSxcbiAgICAgIH0gPSBoZWFkO1xuICAgICAgY29uc3QgZ3JvdXBlZENoaWxkcmVuTGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gICAgICBjb25zdCBpc0dyb3VwZWQgPSBncm91cGVkQ2hpbGRyZW5MZW5ndGggPiAwO1xuICAgICAgY29uc3QgZmxhdHRlbmVkQ2hpbGRyZW4gPSBpc0dyb3VwZWQgJiYgZmxhdHRlbkdyb3VwZWRDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgICAgIGNoaWxkcmVuID0gaXNHcm91cGVkXG4gICAgICAgID8gZmxhdHRlbmVkQ2hpbGRyZW5cbiAgICAgICAgOiBjaGlsZHJlbjtcblxuICAgICAgY29uc3QgZ3JvdXBIZWFkaW5nU3R5bGVzID0gZ2V0U3R5bGVzKCdncm91cEhlYWRpbmcnLCBuZXh0UHJvcHMpO1xuICAgICAgY29uc3QgbG9hZGluZ01zZ1N0eWxlcyA9IGdldFN0eWxlcygnbG9hZGluZ01lc3NhZ2UnLCBuZXh0UHJvcHMpO1xuICAgICAgY29uc3Qgbm9PcHRpb25zTXNnU3R5bGVzID0gZ2V0U3R5bGVzKCdub09wdGlvbnNNZXNzYWdlJywgbmV4dFByb3BzKTtcbiAgICAgIGNvbnN0IG9wdGlvblN0eWxlcyA9IGdldFN0eWxlcygnb3B0aW9uJywgbmV4dFByb3BzKTtcbiAgICAgIGNvbnN0IGdldEhlaWdodCA9IGNyZWF0ZUdldEhlaWdodCh7XG4gICAgICAgIGdyb3VwSGVhZGluZ1N0eWxlcyxcbiAgICAgICAgbm9PcHRpb25zTXNnU3R5bGVzLFxuICAgICAgICBvcHRpb25TdHlsZXMsXG4gICAgICAgIGxvYWRpbmdNc2dTdHlsZXMsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaGVpZ2h0cyA9IGNoaWxkcmVuLm1hcChnZXRIZWlnaHQpO1xuXG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBnZXRDdXJyZW50SW5kZXgoY2hpbGRyZW4pO1xuXG4gICAgICBjb25zdCBpdGVtQ291bnQgPSBjaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgIC8vIGNhbGMgbWVudSBoZWlnaHRcbiAgICAgIGNvbnN0IHN1bSA9IChhLCBiKSA9PiBhICsgYjtcbiAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gaGVpZ2h0cy5yZWR1Y2Uoc3VtLCAwKTtcbiAgICAgIGNvbnN0IHsgbWF4SGVpZ2h0IH0gPSBnZXRTdHlsZXMoJ21lbnVMaXN0JywgbmV4dFByb3BzKTtcbiAgICAgIGNvbnN0IG1lbnVIZWlnaHQgPSBNYXRoLm1pbihtYXhIZWlnaHQsIHRvdGFsSGVpZ2h0KTtcbiAgICAgIGNvbnN0IGVzdGltYXRlZEl0ZW1TaXplID0gTWF0aC5mbG9vcih0b3RhbEhlaWdodCAvIGl0ZW1Db3VudCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjdXJyZW50SW5kZXgsXG4gICAgICAgIGVzdGltYXRlZEl0ZW1TaXplLFxuICAgICAgICBoZWlnaHRzLFxuICAgICAgICBpdGVtQ291bnQsXG4gICAgICAgIG1lbnVIZWlnaHQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgY3VycmVudEluZGV4IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmxpc3QucmVzZXRBZnRlckluZGV4KDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGVuYWJsZXMgc2Nyb2xsaW5nIG9uIGtleSBkb3duIGFycm93XG4gICAgICpcbiAgICAgKiBub3RlOiBwcmV2ZW50cyBzY3JvbGxpbmcgb24gaW5kZXggMCBhbmQgMSB0byBhdm9pZFxuICAgICAqIHJldHVybmluZyB0byB0b3Agb2YgbWVudSB3aGVuIGl0IHJlbWFpbnMgb3BlbiBhZnRlciBzZWxlY3RpbmdcbiAgICAgKi9cbiAgICBpZiAoY3VycmVudEluZGV4ID4gMSkge1xuICAgICAgdGhpcy5saXN0LnNjcm9sbFRvSXRlbShjdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEl0ZW1TaXplKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaGVpZ2h0c1tpbmRleF07XG4gIH1cblxuICBzZXRMaXN0UmVmKHJlZikge1xuICAgIHRoaXMubGlzdCA9IHJlZjtcbiAgfVxuXG4gIHJlbmRlck9wdGlvbiA9ICh7IGRhdGEsIGluZGV4LCBiYXNlU3R5bGUgfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0SGVpZ2h0ID0gdGhpcy5wcm9wcy5zZWxlY3RQcm9wcy5pbnB1dEhlaWdodCB8fCAnMzBweCc7XG4gICAgY29uc3QgY3VzdG9tU3R5bGVzID0gc3R5bGVzKGlucHV0SGVpZ2h0KTtcbiAgICBjb25zdCBjb21iaW5lZFN0eWxlcyA9IGN1c3RvbVN0eWxlcy5vcHRpb24oYmFzZVN0eWxlLCBkYXRhW2luZGV4XS5wcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQtbWVudS1vcHRpb25cIlxuICAgICAgICBzdHlsZT17Y29tYmluZWRTdHlsZXN9XG4gICAgICA+XG4gICAgICAgIHtkYXRhW2luZGV4XX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ2V0U3R5bGVzLCBpbm5lclJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbjogc3RhdGVDaGlsZHJlbiwgZXN0aW1hdGVkSXRlbVNpemUsIG1lbnVIZWlnaHQsIGl0ZW1Db3VudCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHsgbWF4SGVpZ2h0LCAuLi5tZW51TGlzdFN0eWxlIH0gPSBnZXRTdHlsZXMoJ21lbnVMaXN0JywgdGhpcy5wcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSBzdHlsZT17bWVudUxpc3RTdHlsZX0gY2xhc3NOYW1lPVwiZmxvYXRpbmctc2VsZWN0LXdpbmRvd2VkLW1lbnUtbGlzdFwiPlxuICAgICAgICA8TGlzdFxuICAgICAgICAgIHJlZj17dGhpcy5zZXRMaXN0UmVmfVxuICAgICAgICAgIGVzdGltYXRlZEl0ZW1TaXplPXtlc3RpbWF0ZWRJdGVtU2l6ZX1cbiAgICAgICAgICBoZWlnaHQ9e21lbnVIZWlnaHR9XG4gICAgICAgICAgaXRlbUNvdW50PXtpdGVtQ291bnR9XG4gICAgICAgICAgaXRlbURhdGE9e3N0YXRlQ2hpbGRyZW59XG4gICAgICAgICAgaXRlbVNpemU9e3RoaXMuZ2V0SXRlbVNpemV9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb259XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTWVudUxpc3QucHJvcFR5cGVzID0ge1xuICBnZXRTdHlsZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpbnB1dEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XG4iXX0=