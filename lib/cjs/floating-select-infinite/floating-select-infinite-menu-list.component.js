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
      return _this.getItems().map(function (child) {
        return _react2.default.createElement(_floatingSelectInfiniteMenuOption2.default, _extends({
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
    return _react2.default.createElement(
      'div',
      { ref: innerRef, style: menuListStyles, className: CLASS_PREFIX + '-menu-list' },
      _react2.default.createElement(
        _reactInfinite2.default,
        {
          className: !this.getItems().length && 'no-options',
          ref: this.setListRef,
          containerHeight: listHeight,
          elementHeight: controlHeight
        },
        this.getItems().length ? this.renderMenuItems() : this.renderNoOptionsMessage()
      )
    );
  };

  return MenuList;
}(_react2.default.PureComponent);

exports.default = MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNMQVNTX1BSRUZJWCIsIk1lbnVMaXN0Iiwib25PcHRpb25DbGljayIsIml0ZW0iLCJzZWxlY3RPcHRpb24iLCJwcm9wcyIsImRhdGEiLCJnZXRJdGVtcyIsImNoaWxkcmVuIiwicmVuZGVyTm9PcHRpb25zTWVzc2FnZSIsInNlbGVjdFByb3BzIiwibm9PcHRpb25zTWVzc2FnZSIsInJlbmRlck1lbnVJdGVtcyIsIm1hcCIsImNoaWxkIiwia2V5IiwicmVuZGVyIiwiZ2V0U3R5bGVzIiwiaW5uZXJSZWYiLCJtZW51TGlzdFN0eWxlcyIsImNvbnRyb2xIZWlnaHQiLCJwYXJzZUludCIsIm1heEhlaWdodCIsIml0ZW1Db3VudCIsImxlbmd0aCIsImxpc3RIZWlnaHQiLCJzZXRMaXN0UmVmIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsZUFBZSwwQkFBckI7O0lBRU1DLFE7Ozs7Ozs7Ozs7OztnS0FDSkMsYSxHQUFnQixVQUFDQyxJQUFELEVBQVU7QUFBQSxVQUNoQkMsWUFEZ0IsR0FDQyxNQUFLQyxLQUROLENBQ2hCRCxZQURnQjs7QUFFeEJBLG1CQUFhRCxLQUFLRSxLQUFMLENBQVdDLElBQXhCO0FBQ0QsSyxRQUVEQyxRLEdBQVcsWUFBTTtBQUFBLFVBQ1BDLFFBRE8sR0FDTSxNQUFLSCxLQURYLENBQ1BHLFFBRE87O0FBRWYsVUFBSSxDQUFDQSxRQUFMLEVBQWUsT0FBTyxFQUFQO0FBQ2YsYUFBT0EsUUFBUDtBQUNELEssUUFFREMsc0IsR0FBeUI7QUFBQSxhQUN2QjtBQUFBO0FBQUEsVUFBSyxXQUFjVCxZQUFkLHdCQUFMO0FBQ0csY0FBS0ssS0FBTCxDQUFXSyxXQUFYLENBQXVCQyxnQkFBdkI7QUFESCxPQUR1QjtBQUFBLEssUUFNekJDLGUsR0FBa0I7QUFBQSxhQUNoQixNQUFLTCxRQUFMLEdBQ0dNLEdBREgsQ0FDTztBQUFBLGVBQ0gsOEJBQUMsMENBQUQ7QUFDRSxnQkFBTUMsS0FEUjtBQUVFLGVBQUtBLE1BQU1DLEdBRmI7QUFHRSx5QkFBZSxNQUFLYjtBQUh0QixXQUlNLE1BQUtHLEtBSlgsRUFERztBQUFBLE9BRFAsQ0FEZ0I7QUFBQSxLOzs7cUJBV2xCVyxNLHFCQUFTO0FBQUEsaUJBR0gsS0FBS1gsS0FIRjtBQUFBLFFBRUxZLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBRU1DLFFBRk4sVUFFTUEsUUFGTjtBQUFBLFFBRWdCUixXQUZoQixVQUVnQkEsV0FGaEI7O0FBSVAsUUFBTVMsaUJBQWlCRixVQUFVLFVBQVYsRUFBc0IsS0FBS1osS0FBM0IsQ0FBdkI7QUFDQSxRQUFNZSxnQkFBZ0JDLFNBQVNYLFlBQVlVLGFBQXJCLEVBQW9DLEVBQXBDLENBQXRCO0FBTE8sUUFNQ0UsU0FORCxHQU1lSCxjQU5mLENBTUNHLFNBTkQ7O0FBT1AsUUFBTUMsWUFBWSxLQUFLaEIsUUFBTCxHQUFnQmlCLE1BQWxDO0FBQ0EsUUFBSUMsYUFBYUgsU0FBakI7O0FBRUEsUUFBSUMsWUFBWUgsYUFBWixHQUE0QkUsU0FBaEMsRUFBMkNHLGFBQWFGLFlBQVlILGFBQXpCO0FBQzNDLFFBQUlLLGVBQWUsQ0FBbkIsRUFBc0JBLGFBQWFMLGFBQWI7QUFDdEIsV0FDRTtBQUFBO0FBQUEsUUFBSyxLQUFLRixRQUFWLEVBQW9CLE9BQU9DLGNBQTNCLEVBQTJDLFdBQWNuQixZQUFkLGVBQTNDO0FBQ0U7QUFBQywrQkFBRDtBQUFBO0FBQ0UscUJBQVcsQ0FBQyxLQUFLTyxRQUFMLEdBQWdCaUIsTUFBakIsSUFBMkIsWUFEeEM7QUFFRSxlQUFLLEtBQUtFLFVBRlo7QUFHRSwyQkFBaUJELFVBSG5CO0FBSUUseUJBQWVMO0FBSmpCO0FBTUcsYUFBS2IsUUFBTCxHQUFnQmlCLE1BQWhCLEdBQXlCLEtBQUtaLGVBQUwsRUFBekIsR0FBa0QsS0FBS0gsc0JBQUw7QUFOckQ7QUFERixLQURGO0FBWUQsRzs7O0VBckRvQmtCLGdCQUFNQyxhOztrQkFvRWQzQixRIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1vcHRpb24uY29tcG9uZW50Jztcbi8vIE90aGVyIGltcG9ydHNcbmltcG9ydCAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUuc2Nzcyc7XG5cbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUnO1xuXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBvbk9wdGlvbkNsaWNrID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdE9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzZWxlY3RPcHRpb24oaXRlbS5wcm9wcy5kYXRhKTtcbiAgfTtcblxuICBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBbXTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH07XG5cbiAgcmVuZGVyTm9PcHRpb25zTWVzc2FnZSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1uby1vcHRpb25zLW1lc3NhZ2VgfT5cbiAgICAgIHt0aGlzLnByb3BzLnNlbGVjdFByb3BzLm5vT3B0aW9uc01lc3NhZ2UoKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZW5kZXJNZW51SXRlbXMgPSAoKSA9PiAoXG4gICAgdGhpcy5nZXRJdGVtcygpXG4gICAgICAubWFwKGNoaWxkID0+IChcbiAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICBpdGVtPXtjaGlsZH1cbiAgICAgICAgICBrZXk9e2NoaWxkLmtleX1cbiAgICAgICAgICBvbk9wdGlvbkNsaWNrPXt0aGlzLm9uT3B0aW9uQ2xpY2t9XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIC8+KSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZ2V0U3R5bGVzLCBpbm5lclJlZiwgc2VsZWN0UHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVudUxpc3RTdHlsZXMgPSBnZXRTdHlsZXMoJ21lbnVMaXN0JywgdGhpcy5wcm9wcyk7XG4gICAgY29uc3QgY29udHJvbEhlaWdodCA9IHBhcnNlSW50KHNlbGVjdFByb3BzLmNvbnRyb2xIZWlnaHQsIDEwKTtcbiAgICBjb25zdCB7IG1heEhlaWdodCB9ID0gbWVudUxpc3RTdHlsZXM7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5nZXRJdGVtcygpLmxlbmd0aDtcbiAgICBsZXQgbGlzdEhlaWdodCA9IG1heEhlaWdodDtcblxuICAgIGlmIChpdGVtQ291bnQgKiBjb250cm9sSGVpZ2h0IDwgbWF4SGVpZ2h0KSBsaXN0SGVpZ2h0ID0gaXRlbUNvdW50ICogY29udHJvbEhlaWdodDtcbiAgICBpZiAobGlzdEhlaWdodCA9PT0gMCkgbGlzdEhlaWdodCA9IGNvbnRyb2xIZWlnaHQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtpbm5lclJlZn0gc3R5bGU9e21lbnVMaXN0U3R5bGVzfSBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tbWVudS1saXN0YH0+XG4gICAgICAgIDxJbmZpbml0ZVxuICAgICAgICAgIGNsYXNzTmFtZT17IXRoaXMuZ2V0SXRlbXMoKS5sZW5ndGggJiYgJ25vLW9wdGlvbnMnfVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRMaXN0UmVmfVxuICAgICAgICAgIGNvbnRhaW5lckhlaWdodD17bGlzdEhlaWdodH1cbiAgICAgICAgICBlbGVtZW50SGVpZ2h0PXtjb250cm9sSGVpZ2h0fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuZ2V0SXRlbXMoKS5sZW5ndGggPyB0aGlzLnJlbmRlck1lbnVJdGVtcygpIDogdGhpcy5yZW5kZXJOb09wdGlvbnNNZXNzYWdlKCl9XG4gICAgICAgIDwvSW5maW5pdGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk1lbnVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZ2V0U3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBub09wdGlvbnNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHNlbGVjdE9wdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XG4iXX0=