'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactWindow = require('react-window');

var _util = require('./util');

var _styles = require('../floating-select/styles');

var _styles2 = _interopRequireDefault(_styles);

require('./floating-select-windowed.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Other imports


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
      var customStyles = (0, _styles2.default)(inputHeight);
      var combinedStyles = customStyles.option(baseStyle, data[index].props);

      return _react2.default.createElement(
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

      var children = _react2.default.Children.toArray(nextProps.children);

      var head = children[0] || {};
      var _head$props = head.props;
      _head$props = _head$props === undefined ? {} : _head$props;
      var _head$props$data = _head$props.data;
      _head$props$data = _head$props$data === undefined ? {} : _head$props$data;
      var _head$props$data$opti = _head$props$data.options,
          options = _head$props$data$opti === undefined ? [] : _head$props$data$opti;

      var groupedChildrenLength = options.length;
      var isGrouped = groupedChildrenLength > 0;
      var flattenedChildren = isGrouped && (0, _util.flattenGroupedChildren)(children);

      children = isGrouped ? flattenedChildren : children;

      var groupHeadingStyles = getStyles('groupHeading', nextProps);
      var loadingMsgStyles = getStyles('loadingMessage', nextProps);
      var noOptionsMsgStyles = getStyles('noOptionsMessage', nextProps);
      var optionStyles = getStyles('option', nextProps);
      var getHeight = (0, _util.createGetHeight)({
        groupHeadingStyles: groupHeadingStyles,
        noOptionsMsgStyles: noOptionsMsgStyles,
        optionStyles: optionStyles,
        loadingMsgStyles: loadingMsgStyles
      });

      var heights = children.map(getHeight);

      var currentIndex = (0, _util.getCurrentIndex)(children);

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

    return _react2.default.createElement(
      'div',
      { ref: innerRef, style: menuListStyle, className: 'floating-select-windowed-menu-list' },
      _react2.default.createElement(
        _reactWindow.VariableSizeList,
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
}(_react2.default.PureComponent);

exports.default = MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQvZmxvYXRpbmctc2VsZWN0LXdpbmRvd2VkLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIk1lbnVMaXN0IiwicHJvcHMiLCJyZW5kZXJPcHRpb24iLCJkYXRhIiwiaW5kZXgiLCJiYXNlU3R5bGUiLCJpbnB1dEhlaWdodCIsInNlbGVjdFByb3BzIiwiY3VzdG9tU3R5bGVzIiwiY29tYmluZWRTdHlsZXMiLCJvcHRpb24iLCJzZXRMaXN0UmVmIiwiYmluZCIsImdldEl0ZW1TaXplIiwic3RhdGUiLCJjdXJyZW50SW5kZXgiLCJjaGlsZHJlbiIsImhlaWdodHMiLCJpdGVtQ291bnQiLCJtZW51SGVpZ2h0IiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwiZ2V0U3R5bGVzIiwiUmVhY3QiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJoZWFkIiwib3B0aW9ucyIsImdyb3VwZWRDaGlsZHJlbkxlbmd0aCIsImxlbmd0aCIsImlzR3JvdXBlZCIsImZsYXR0ZW5lZENoaWxkcmVuIiwiZ3JvdXBIZWFkaW5nU3R5bGVzIiwibG9hZGluZ01zZ1N0eWxlcyIsIm5vT3B0aW9uc01zZ1N0eWxlcyIsIm9wdGlvblN0eWxlcyIsImdldEhlaWdodCIsIm1hcCIsInN1bSIsImEiLCJiIiwidG90YWxIZWlnaHQiLCJyZWR1Y2UiLCJtYXhIZWlnaHQiLCJNYXRoIiwibWluIiwiZXN0aW1hdGVkSXRlbVNpemUiLCJmbG9vciIsImNvbXBvbmVudERpZFVwZGF0ZSIsImxpc3QiLCJyZXNldEFmdGVySW5kZXgiLCJzY3JvbGxUb0l0ZW0iLCJyZWYiLCJyZW5kZXIiLCJpbm5lclJlZiIsInN0YXRlQ2hpbGRyZW4iLCJtZW51TGlzdFN0eWxlIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7QUFLQTs7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QUEsUUFHdUM1QixVQUh2QyxVQUd1Q0EsVUFIdkM7QUFBQSxRQUdtREQsU0FIbkQsVUFHbURBLFNBSG5EOztBQUFBLHNCQU1pQ0ssVUFBVSxVQUFWLEVBQXNCLEtBQUt0QixLQUEzQixDQU5qQztBQUFBLFFBTUMyQyxTQU5ELGVBTUNBLFNBTkQ7QUFBQSxRQU1lYSxhQU5mOztBQVFQLFdBQ0U7QUFBQTtBQUFBLFFBQUssS0FBS0YsUUFBVixFQUFvQixPQUFPRSxhQUEzQixFQUEwQyxXQUFVLG9DQUFwRDtBQUNFO0FBQUMscUNBQUQ7QUFBQTtBQUNFLGVBQUssS0FBSzlDLFVBRFo7QUFFRSw2QkFBbUJvQyxpQkFGckI7QUFHRSxrQkFBUTVCLFVBSFY7QUFJRSxxQkFBV0QsU0FKYjtBQUtFLG9CQUFVc0MsYUFMWjtBQU1FLG9CQUFVLEtBQUszQztBQU5qQjtBQVFHLGFBQUtYO0FBUlI7QUFERixLQURGO0FBY0QsRzs7O0VBeklvQnNCLGdCQUFNa0MsYTs7a0JBcUpkMUQsUSIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQtbWVudS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmFyaWFibGVTaXplTGlzdCBhcyBMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93JztcblxuLy8gT3RoZXIgaW1wb3J0c1xuaW1wb3J0IHtcbiAgY3JlYXRlR2V0SGVpZ2h0LFxuICBmbGF0dGVuR3JvdXBlZENoaWxkcmVuLFxuICBnZXRDdXJyZW50SW5kZXgsXG59IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Zsb2F0aW5nLXNlbGVjdC9zdHlsZXMnO1xuaW1wb3J0ICcuL2Zsb2F0aW5nLXNlbGVjdC13aW5kb3dlZC5zY3NzJztcblxuY2xhc3MgTWVudUxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldExpc3RSZWYgPSB0aGlzLnNldExpc3RSZWYuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEl0ZW1TaXplID0gdGhpcy5nZXRJdGVtU2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgaGVpZ2h0czogW10sXG4gICAgICBpdGVtQ291bnQ6IDAsXG4gICAgICBtZW51SGVpZ2h0OiAwLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKG5leHRQcm9wcy5jaGlsZHJlbiAhPT0gcHJldlN0YXRlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCB7IGdldFN0eWxlcyB9ID0gbmV4dFByb3BzO1xuICAgICAgbGV0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShuZXh0UHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBjb25zdCBoZWFkID0gY2hpbGRyZW5bMF0gfHwge307XG4gICAgICBjb25zdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgb3B0aW9ucyA9IFtdLFxuICAgICAgICAgIH0gPSB7fSxcbiAgICAgICAgfSA9IHt9LFxuICAgICAgfSA9IGhlYWQ7XG4gICAgICBjb25zdCBncm91cGVkQ2hpbGRyZW5MZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgICAgIGNvbnN0IGlzR3JvdXBlZCA9IGdyb3VwZWRDaGlsZHJlbkxlbmd0aCA+IDA7XG4gICAgICBjb25zdCBmbGF0dGVuZWRDaGlsZHJlbiA9IGlzR3JvdXBlZCAmJiBmbGF0dGVuR3JvdXBlZENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICAgICAgY2hpbGRyZW4gPSBpc0dyb3VwZWRcbiAgICAgICAgPyBmbGF0dGVuZWRDaGlsZHJlblxuICAgICAgICA6IGNoaWxkcmVuO1xuXG4gICAgICBjb25zdCBncm91cEhlYWRpbmdTdHlsZXMgPSBnZXRTdHlsZXMoJ2dyb3VwSGVhZGluZycsIG5leHRQcm9wcyk7XG4gICAgICBjb25zdCBsb2FkaW5nTXNnU3R5bGVzID0gZ2V0U3R5bGVzKCdsb2FkaW5nTWVzc2FnZScsIG5leHRQcm9wcyk7XG4gICAgICBjb25zdCBub09wdGlvbnNNc2dTdHlsZXMgPSBnZXRTdHlsZXMoJ25vT3B0aW9uc01lc3NhZ2UnLCBuZXh0UHJvcHMpO1xuICAgICAgY29uc3Qgb3B0aW9uU3R5bGVzID0gZ2V0U3R5bGVzKCdvcHRpb24nLCBuZXh0UHJvcHMpO1xuICAgICAgY29uc3QgZ2V0SGVpZ2h0ID0gY3JlYXRlR2V0SGVpZ2h0KHtcbiAgICAgICAgZ3JvdXBIZWFkaW5nU3R5bGVzLFxuICAgICAgICBub09wdGlvbnNNc2dTdHlsZXMsXG4gICAgICAgIG9wdGlvblN0eWxlcyxcbiAgICAgICAgbG9hZGluZ01zZ1N0eWxlcyxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBoZWlnaHRzID0gY2hpbGRyZW4ubWFwKGdldEhlaWdodCk7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnRJbmRleChjaGlsZHJlbik7XG5cbiAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IGNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgLy8gY2FsYyBtZW51IGhlaWdodFxuICAgICAgY29uc3Qgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xuICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSBoZWlnaHRzLnJlZHVjZShzdW0sIDApO1xuICAgICAgY29uc3QgeyBtYXhIZWlnaHQgfSA9IGdldFN0eWxlcygnbWVudUxpc3QnLCBuZXh0UHJvcHMpO1xuICAgICAgY29uc3QgbWVudUhlaWdodCA9IE1hdGgubWluKG1heEhlaWdodCwgdG90YWxIZWlnaHQpO1xuICAgICAgY29uc3QgZXN0aW1hdGVkSXRlbVNpemUgPSBNYXRoLmZsb29yKHRvdGFsSGVpZ2h0IC8gaXRlbUNvdW50KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGN1cnJlbnRJbmRleCxcbiAgICAgICAgZXN0aW1hdGVkSXRlbVNpemUsXG4gICAgICAgIGhlaWdodHMsXG4gICAgICAgIGl0ZW1Db3VudCxcbiAgICAgICAgbWVudUhlaWdodCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50SW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMubGlzdC5yZXNldEFmdGVySW5kZXgoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZW5hYmxlcyBzY3JvbGxpbmcgb24ga2V5IGRvd24gYXJyb3dcbiAgICAgKlxuICAgICAqIG5vdGU6IHByZXZlbnRzIHNjcm9sbGluZyBvbiBpbmRleCAwIGFuZCAxIHRvIGF2b2lkXG4gICAgICogcmV0dXJuaW5nIHRvIHRvcCBvZiBtZW51IHdoZW4gaXQgcmVtYWlucyBvcGVuIGFmdGVyIHNlbGVjdGluZ1xuICAgICAqL1xuICAgIGlmIChjdXJyZW50SW5kZXggPiAxKSB7XG4gICAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JdGVtKGN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SXRlbVNpemUoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5oZWlnaHRzW2luZGV4XTtcbiAgfVxuXG4gIHNldExpc3RSZWYocmVmKSB7XG4gICAgdGhpcy5saXN0ID0gcmVmO1xuICB9XG5cbiAgcmVuZGVyT3B0aW9uID0gKHsgZGF0YSwgaW5kZXgsIGJhc2VTdHlsZSB9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRIZWlnaHQgPSB0aGlzLnByb3BzLnNlbGVjdFByb3BzLmlucHV0SGVpZ2h0IHx8ICczMHB4JztcbiAgICBjb25zdCBjdXN0b21TdHlsZXMgPSBzdHlsZXMoaW5wdXRIZWlnaHQpO1xuICAgIGNvbnN0IGNvbWJpbmVkU3R5bGVzID0gY3VzdG9tU3R5bGVzLm9wdGlvbihiYXNlU3R5bGUsIGRhdGFbaW5kZXhdLnByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nLXNlbGVjdC13aW5kb3dlZC1tZW51LW9wdGlvblwiXG4gICAgICAgIHN0eWxlPXtjb21iaW5lZFN0eWxlc31cbiAgICAgID5cbiAgICAgICAge2RhdGFbaW5kZXhdfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBnZXRTdHlsZXMsIGlubmVyUmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuOiBzdGF0ZUNoaWxkcmVuLCBlc3RpbWF0ZWRJdGVtU2l6ZSwgbWVudUhlaWdodCwgaXRlbUNvdW50LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgeyBtYXhIZWlnaHQsIC4uLm1lbnVMaXN0U3R5bGUgfSA9IGdldFN0eWxlcygnbWVudUxpc3QnLCB0aGlzLnByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17aW5uZXJSZWZ9IHN0eWxlPXttZW51TGlzdFN0eWxlfSBjbGFzc05hbWU9XCJmbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQtbWVudS1saXN0XCI+XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgcmVmPXt0aGlzLnNldExpc3RSZWZ9XG4gICAgICAgICAgZXN0aW1hdGVkSXRlbVNpemU9e2VzdGltYXRlZEl0ZW1TaXplfVxuICAgICAgICAgIGhlaWdodD17bWVudUhlaWdodH1cbiAgICAgICAgICBpdGVtQ291bnQ9e2l0ZW1Db3VudH1cbiAgICAgICAgICBpdGVtRGF0YT17c3RhdGVDaGlsZHJlbn1cbiAgICAgICAgICBpdGVtU2l6ZT17dGhpcy5nZXRJdGVtU2l6ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbn1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5NZW51TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGdldFN0eWxlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlucHV0SGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KS5pc1JlcXVpcmVkLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdDtcbiJdfQ==