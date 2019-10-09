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
      return _react2.default.createElement(
        'div',
        { className: CLASS_PREFIX + '-no-options-message' },
        _this.props.selectProps.noOptionsMessage()
      );
    }, _this.renderMenuItems = function () {
      var components = _this.props.selectProps.components;

      var renderOption = components && components.Option ? function (child) {
        return _react2.default.createElement(components.Option, _extends({ key: child.key }, child.props));
      } : function (child) {
        return _react2.default.createElement(_floatingSelectInfiniteMenuOption2.default, _extends({
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
    return _react2.default.createElement(
      _reactInfinite2.default,
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
      return _react2.default.createElement(
        'div',
        { ref: innerRef },
        this.renderInfiniteList()
      );
    }

    return this.renderInfiniteList();
  };

  return MenuList;
}(_react2.default.PureComponent);

exports.default = MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNMQVNTX1BSRUZJWCIsIk1lbnVMaXN0Iiwib25PcHRpb25DbGljayIsIml0ZW0iLCJzZWxlY3RPcHRpb24iLCJwcm9wcyIsImRhdGEiLCJnZXRJdGVtcyIsImNoaWxkcmVuIiwicmVuZGVyTm9PcHRpb25zTWVzc2FnZSIsInNlbGVjdFByb3BzIiwibm9PcHRpb25zTWVzc2FnZSIsInJlbmRlck1lbnVJdGVtcyIsImNvbXBvbmVudHMiLCJyZW5kZXJPcHRpb24iLCJPcHRpb24iLCJjaGlsZCIsImtleSIsIm1hcCIsInJlbmRlckluZmluaXRlTGlzdCIsImdldFN0eWxlcyIsIm1lbnVMaXN0U3R5bGVzIiwiY29udHJvbEhlaWdodCIsInBhcnNlSW50IiwibWF4SGVpZ2h0IiwiaXRlbUNvdW50IiwibGVuZ3RoIiwibGlzdEhlaWdodCIsInJlbmRlciIsImlubmVyUmVmIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxlQUFlLDBCQUFyQjs7SUFFTUMsUTs7Ozs7Ozs7Ozs7O2dLQUNKQyxhLEdBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUFBLFVBQ2hCQyxZQURnQixHQUNDLE1BQUtDLEtBRE4sQ0FDaEJELFlBRGdCOztBQUV4QkEsbUJBQWFELEtBQUtFLEtBQUwsQ0FBV0MsSUFBeEI7QUFDRCxLLFFBRURDLFEsR0FBVyxZQUFNO0FBQUEsVUFDUEMsUUFETyxHQUNNLE1BQUtILEtBRFgsQ0FDUEcsUUFETzs7QUFFZixVQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEVBQVA7QUFDZixhQUFPQSxRQUFQO0FBQ0QsSyxRQUVEQyxzQixHQUF5QjtBQUFBLGFBQ3ZCO0FBQUE7QUFBQSxVQUFLLFdBQWNULFlBQWQsd0JBQUw7QUFDRyxjQUFLSyxLQUFMLENBQVdLLFdBQVgsQ0FBdUJDLGdCQUF2QjtBQURILE9BRHVCO0FBQUEsSyxRQU16QkMsZSxHQUFrQixZQUFNO0FBQUEsVUFDQ0MsVUFERCxHQUNrQixNQUFLUixLQUR2QixDQUNkSyxXQURjLENBQ0NHLFVBREQ7O0FBRXRCLFVBQU1DLGVBQWVELGNBQWNBLFdBQVdFLE1BQXpCLEdBQ2pCO0FBQUEsZUFBUyw4QkFBQyxVQUFELENBQVksTUFBWixhQUFtQixLQUFLQyxNQUFNQyxHQUE5QixJQUF1Q0QsTUFBTVgsS0FBN0MsRUFBVDtBQUFBLE9BRGlCLEdBRWpCO0FBQUEsZUFDQSw4QkFBQywwQ0FBRDtBQUNFLGdCQUFNVyxLQURSO0FBRUUsZUFBS0EsTUFBTUMsR0FGYjtBQUdFLHlCQUFlLE1BQUtmO0FBSHRCLFdBSU0sTUFBS0csS0FKWCxFQURBO0FBQUEsT0FGSjtBQVNBLGFBQU8sTUFBS0UsUUFBTCxHQUFnQlcsR0FBaEIsQ0FBb0JKLFlBQXBCLENBQVA7QUFDRCxLOzs7cUJBRURLLGtCLGlDQUFxQjtBQUFBLGlCQUdmLEtBQUtkLEtBSFU7QUFBQSxRQUVqQmUsU0FGaUIsVUFFakJBLFNBRmlCO0FBQUEsUUFFTlYsV0FGTSxVQUVOQSxXQUZNOztBQUluQixRQUFNVyxpQkFBaUJELFVBQVUsVUFBVixFQUFzQixLQUFLZixLQUEzQixDQUF2QjtBQUNBLFFBQU1pQixnQkFBZ0JDLFNBQVNiLFlBQVlZLGFBQXJCLEVBQW9DLEVBQXBDLENBQXRCO0FBTG1CLFFBTVhFLFNBTlcsR0FNR0gsY0FOSCxDQU1YRyxTQU5XOztBQU9uQixRQUFNQyxZQUFZLEtBQUtsQixRQUFMLEdBQWdCbUIsTUFBbEM7QUFDQSxRQUFJQyxhQUFhSCxTQUFqQjs7QUFFQSxRQUFJQyxZQUFZSCxhQUFaLEdBQTRCRSxTQUFoQyxFQUEyQ0csYUFBYUYsWUFBWUgsYUFBekI7QUFDM0MsUUFBSUssZUFBZSxDQUFuQixFQUFzQkEsYUFBYUwsYUFBYjtBQUN0QjtBQUNBO0FBQ0EsV0FDRTtBQUFDLDZCQUFEO0FBQUE7QUFDRSxtQkFBVyxDQUFDLEtBQUtmLFFBQUwsR0FBZ0JtQixNQUFqQixHQUE2QjFCLFlBQTdCLDZCQUFzRUEsWUFBdEUsZUFEYjtBQUVFLHlCQUFpQjJCLFVBRm5CO0FBR0UsdUJBQWVMO0FBSGpCO0FBS0dHLGtCQUFZLEtBQUtiLGVBQUwsRUFBWixHQUFxQyxLQUFLSCxzQkFBTDtBQUx4QyxLQURGO0FBU0QsRzs7cUJBRURtQixNLHFCQUFTO0FBQUEsUUFDQ0MsUUFERCxHQUNjLEtBQUt4QixLQURuQixDQUNDd0IsUUFERDs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFJLGNBQWMsU0FBUyxDQUFDLENBQUNDLFNBQVNDLFlBQXRDLEVBQW9EO0FBQ2xELGFBQ0U7QUFBQTtBQUFBLFVBQUssS0FBS0YsUUFBVjtBQUNHLGFBQUtWLGtCQUFMO0FBREgsT0FERjtBQUtEOztBQUVELFdBQU8sS0FBS0Esa0JBQUwsRUFBUDtBQUNELEc7OztFQXpFb0JhLGdCQUFNQyxhOztrQkF1RmRoQyxRIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1vcHRpb24uY29tcG9uZW50Jztcbi8vIE90aGVyIGltcG9ydHNcbmltcG9ydCAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUuc2Nzcyc7XG5cbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUnO1xuXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBvbk9wdGlvbkNsaWNrID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdE9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzZWxlY3RPcHRpb24oaXRlbS5wcm9wcy5kYXRhKTtcbiAgfTtcblxuICBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBbXTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH07XG5cbiAgcmVuZGVyTm9PcHRpb25zTWVzc2FnZSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1uby1vcHRpb25zLW1lc3NhZ2VgfT5cbiAgICAgIHt0aGlzLnByb3BzLnNlbGVjdFByb3BzLm5vT3B0aW9uc01lc3NhZ2UoKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZW5kZXJNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RQcm9wczogeyBjb21wb25lbnRzIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVuZGVyT3B0aW9uID0gY29tcG9uZW50cyAmJiBjb21wb25lbnRzLk9wdGlvblxuICAgICAgPyBjaGlsZCA9PiA8Y29tcG9uZW50cy5PcHRpb24ga2V5PXtjaGlsZC5rZXl9IHsuLi5jaGlsZC5wcm9wc30gLz5cbiAgICAgIDogY2hpbGQgPT4gKFxuICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgIGl0ZW09e2NoaWxkfVxuICAgICAgICAgIGtleT17Y2hpbGQua2V5fVxuICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMub25PcHRpb25DbGlja31cbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgLz4pO1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCkubWFwKHJlbmRlck9wdGlvbik7XG4gIH07XG5cbiAgcmVuZGVySW5maW5pdGVMaXN0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGdldFN0eWxlcywgc2VsZWN0UHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVudUxpc3RTdHlsZXMgPSBnZXRTdHlsZXMoJ21lbnVMaXN0JywgdGhpcy5wcm9wcyk7XG4gICAgY29uc3QgY29udHJvbEhlaWdodCA9IHBhcnNlSW50KHNlbGVjdFByb3BzLmNvbnRyb2xIZWlnaHQsIDEwKTtcbiAgICBjb25zdCB7IG1heEhlaWdodCB9ID0gbWVudUxpc3RTdHlsZXM7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5nZXRJdGVtcygpLmxlbmd0aDtcbiAgICBsZXQgbGlzdEhlaWdodCA9IG1heEhlaWdodDtcblxuICAgIGlmIChpdGVtQ291bnQgKiBjb250cm9sSGVpZ2h0IDwgbWF4SGVpZ2h0KSBsaXN0SGVpZ2h0ID0gaXRlbUNvdW50ICogY29udHJvbEhlaWdodDtcbiAgICBpZiAobGlzdEhlaWdodCA9PT0gMCkgbGlzdEhlaWdodCA9IGNvbnRyb2xIZWlnaHQ7XG4gICAgLy8gaW5uZXJSZWYgY2Fubm90IGJlIHJlZiBwcm9wIG9mIEluZmluaXRlLCBvdGhlcndpc2UgcmVhY3Qtc2VsZWN0XG4gICAgLy8gY2FsbHMgcmVmJ3MgY29udGFpbnMgZnVuY3Rpb24gb24gYmx1clxuICAgIHJldHVybiAoXG4gICAgICA8SW5maW5pdGVcbiAgICAgICAgY2xhc3NOYW1lPXshdGhpcy5nZXRJdGVtcygpLmxlbmd0aCA/IGAke0NMQVNTX1BSRUZJWH0tbWVudS1saXN0IG5vLW9wdGlvbnNgIDogYCR7Q0xBU1NfUFJFRklYfS1tZW51LWxpc3RgfVxuICAgICAgICBjb250YWluZXJIZWlnaHQ9e2xpc3RIZWlnaHR9XG4gICAgICAgIGVsZW1lbnRIZWlnaHQ9e2NvbnRyb2xIZWlnaHR9XG4gICAgICA+XG4gICAgICAgIHtpdGVtQ291bnQgPyB0aGlzLnJlbmRlck1lbnVJdGVtcygpIDogdGhpcy5yZW5kZXJOb09wdGlvbnNNZXNzYWdlKCl9XG4gICAgICA8L0luZmluaXRlPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbm5lclJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIElmIHRoZSBvdXRlcm1vc3QgZGl2IGhhcyByZWYgZnVuY3Rpb24sIHNjcm9sbGJhciB3b3JrcyBidXQgc2Nyb2xsaW5nIHdpdGggbW91c2Ugd2hlZWwgbm90XG4gICAgLy8gd2l0aCBJRS4gV2l0aG91dCB0aGlzIG91dGVybW9zdCBkaXYgY2xpY2tpbmcgc2Nyb2xsYmFyIGNsb3NlcyB0aGUgbWVudSBidXQgc2Nyb2xsaW5nIHdpdGhcbiAgICAvLyBtb3VzZSB3aGVlbCB3b3JrcyB3aXRoIElFLiBUaGlzIG90aGVybW9zdCBkaXYgY2F1c2VzIHNjcm9sbGluZyB3aXRoIG1vdXNlIHdoZWVsIGZhaWwgd2l0aFxuICAgIC8vIENocm9tZS4gVGhlcmVmb3JlIHRoZSBvdXRoZXJtb3N0IGVsZW1lbnQgaXMgcmVuZGVyIG9ubHkgd2l0aCBJRS5cbiAgICBpZiAoLyogQGNjX29uIUAgKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9e2lubmVyUmVmfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJJbmZpbml0ZUxpc3QoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlbmRlckluZmluaXRlTGlzdCgpO1xuICB9XG59XG5cbk1lbnVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZ2V0U3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBub09wdGlvbnNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHNlbGVjdE9wdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xuIl19