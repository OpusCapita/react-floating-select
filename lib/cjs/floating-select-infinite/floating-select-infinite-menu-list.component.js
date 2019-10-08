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
      _reactInfinite2.default,
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
}(_react2.default.PureComponent);

exports.default = MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNMQVNTX1BSRUZJWCIsIk1lbnVMaXN0Iiwib25PcHRpb25DbGljayIsIml0ZW0iLCJzZWxlY3RPcHRpb24iLCJwcm9wcyIsImRhdGEiLCJnZXRJdGVtcyIsImNoaWxkcmVuIiwicmVuZGVyTm9PcHRpb25zTWVzc2FnZSIsInNlbGVjdFByb3BzIiwibm9PcHRpb25zTWVzc2FnZSIsInJlbmRlck1lbnVJdGVtcyIsImNvbXBvbmVudHMiLCJyZW5kZXJPcHRpb24iLCJPcHRpb24iLCJjaGlsZCIsImtleSIsIm1hcCIsInJlbmRlciIsImdldFN0eWxlcyIsImlubmVyUmVmIiwibWVudUxpc3RTdHlsZXMiLCJjb250cm9sSGVpZ2h0IiwicGFyc2VJbnQiLCJtYXhIZWlnaHQiLCJpdGVtQ291bnQiLCJsZW5ndGgiLCJsaXN0SGVpZ2h0IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsZUFBZSwwQkFBckI7O0lBRU1DLFE7Ozs7Ozs7Ozs7OztnS0FDSkMsYSxHQUFnQixVQUFDQyxJQUFELEVBQVU7QUFBQSxVQUNoQkMsWUFEZ0IsR0FDQyxNQUFLQyxLQUROLENBQ2hCRCxZQURnQjs7QUFFeEJBLG1CQUFhRCxLQUFLRSxLQUFMLENBQVdDLElBQXhCO0FBQ0QsSyxRQUVEQyxRLEdBQVcsWUFBTTtBQUFBLFVBQ1BDLFFBRE8sR0FDTSxNQUFLSCxLQURYLENBQ1BHLFFBRE87O0FBRWYsVUFBSSxDQUFDQSxRQUFMLEVBQWUsT0FBTyxFQUFQO0FBQ2YsYUFBT0EsUUFBUDtBQUNELEssUUFFREMsc0IsR0FBeUI7QUFBQSxhQUN2QjtBQUFBO0FBQUEsVUFBSyxXQUFjVCxZQUFkLHdCQUFMO0FBQ0csY0FBS0ssS0FBTCxDQUFXSyxXQUFYLENBQXVCQyxnQkFBdkI7QUFESCxPQUR1QjtBQUFBLEssUUFNekJDLGUsR0FBa0IsWUFBTTtBQUFBLFVBQ0NDLFVBREQsR0FDa0IsTUFBS1IsS0FEdkIsQ0FDZEssV0FEYyxDQUNDRyxVQUREOztBQUV0QixVQUFNQyxlQUFlRCxjQUFjQSxXQUFXRSxNQUF6QixHQUNqQjtBQUFBLGVBQVMsOEJBQUMsVUFBRCxDQUFZLE1BQVosYUFBbUIsS0FBS0MsTUFBTUMsR0FBOUIsSUFBdUNELE1BQU1YLEtBQTdDLEVBQVQ7QUFBQSxPQURpQixHQUVqQjtBQUFBLGVBQ0EsOEJBQUMsMENBQUQ7QUFDRSxnQkFBTVcsS0FEUjtBQUVFLGVBQUtBLE1BQU1DLEdBRmI7QUFHRSx5QkFBZSxNQUFLZjtBQUh0QixXQUlNLE1BQUtHLEtBSlgsRUFEQTtBQUFBLE9BRko7QUFTQSxhQUFPLE1BQUtFLFFBQUwsR0FBZ0JXLEdBQWhCLENBQW9CSixZQUFwQixDQUFQO0FBQ0QsSzs7O3FCQUVESyxNLHFCQUFTO0FBQUEsaUJBR0gsS0FBS2QsS0FIRjtBQUFBLFFBRUxlLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBRU1DLFFBRk4sVUFFTUEsUUFGTjtBQUFBLFFBRWdCWCxXQUZoQixVQUVnQkEsV0FGaEI7O0FBSVAsUUFBTVksaUJBQWlCRixVQUFVLFVBQVYsRUFBc0IsS0FBS2YsS0FBM0IsQ0FBdkI7QUFDQSxRQUFNa0IsZ0JBQWdCQyxTQUFTZCxZQUFZYSxhQUFyQixFQUFvQyxFQUFwQyxDQUF0QjtBQUxPLFFBTUNFLFNBTkQsR0FNZUgsY0FOZixDQU1DRyxTQU5EOztBQU9QLFFBQU1DLFlBQVksS0FBS25CLFFBQUwsR0FBZ0JvQixNQUFsQztBQUNBLFFBQUlDLGFBQWFILFNBQWpCOztBQUVBLFFBQUlDLFlBQVlILGFBQVosR0FBNEJFLFNBQWhDLEVBQTJDRyxhQUFhRixZQUFZSCxhQUF6QjtBQUMzQyxRQUFJSyxlQUFlLENBQW5CLEVBQXNCQSxhQUFhTCxhQUFiO0FBQ3RCLFdBQ0U7QUFBQyw2QkFBRDtBQUFBO0FBQ0UsbUJBQVcsQ0FBQyxLQUFLaEIsUUFBTCxHQUFnQm9CLE1BQWpCLEdBQTZCM0IsWUFBN0IsNkJBQXNFQSxZQUF0RSxlQURiO0FBRUUsYUFBS3FCLFFBRlA7QUFHRSx5QkFBaUJPLFVBSG5CO0FBSUUsdUJBQWVMO0FBSmpCO0FBTUdHLGtCQUFZLEtBQUtkLGVBQUwsRUFBWixHQUFxQyxLQUFLSCxzQkFBTDtBQU54QyxLQURGO0FBVUQsRzs7O0VBdERvQm9CLGdCQUFNQyxhOztrQkFvRWQ3QixRIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1vcHRpb24uY29tcG9uZW50Jztcbi8vIE90aGVyIGltcG9ydHNcbmltcG9ydCAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUuc2Nzcyc7XG5cbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUnO1xuXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBvbk9wdGlvbkNsaWNrID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdE9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzZWxlY3RPcHRpb24oaXRlbS5wcm9wcy5kYXRhKTtcbiAgfTtcblxuICBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBbXTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH07XG5cbiAgcmVuZGVyTm9PcHRpb25zTWVzc2FnZSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1uby1vcHRpb25zLW1lc3NhZ2VgfT5cbiAgICAgIHt0aGlzLnByb3BzLnNlbGVjdFByb3BzLm5vT3B0aW9uc01lc3NhZ2UoKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZW5kZXJNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RQcm9wczogeyBjb21wb25lbnRzIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVuZGVyT3B0aW9uID0gY29tcG9uZW50cyAmJiBjb21wb25lbnRzLk9wdGlvblxuICAgICAgPyBjaGlsZCA9PiA8Y29tcG9uZW50cy5PcHRpb24ga2V5PXtjaGlsZC5rZXl9IHsuLi5jaGlsZC5wcm9wc30gLz5cbiAgICAgIDogY2hpbGQgPT4gKFxuICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgIGl0ZW09e2NoaWxkfVxuICAgICAgICAgIGtleT17Y2hpbGQua2V5fVxuICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMub25PcHRpb25DbGlja31cbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgLz4pO1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCkubWFwKHJlbmRlck9wdGlvbik7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGdldFN0eWxlcywgaW5uZXJSZWYsIHNlbGVjdFByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1lbnVMaXN0U3R5bGVzID0gZ2V0U3R5bGVzKCdtZW51TGlzdCcsIHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGNvbnRyb2xIZWlnaHQgPSBwYXJzZUludChzZWxlY3RQcm9wcy5jb250cm9sSGVpZ2h0LCAxMCk7XG4gICAgY29uc3QgeyBtYXhIZWlnaHQgfSA9IG1lbnVMaXN0U3R5bGVzO1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9IHRoaXMuZ2V0SXRlbXMoKS5sZW5ndGg7XG4gICAgbGV0IGxpc3RIZWlnaHQgPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoaXRlbUNvdW50ICogY29udHJvbEhlaWdodCA8IG1heEhlaWdodCkgbGlzdEhlaWdodCA9IGl0ZW1Db3VudCAqIGNvbnRyb2xIZWlnaHQ7XG4gICAgaWYgKGxpc3RIZWlnaHQgPT09IDApIGxpc3RIZWlnaHQgPSBjb250cm9sSGVpZ2h0O1xuICAgIHJldHVybiAoXG4gICAgICA8SW5maW5pdGVcbiAgICAgICAgY2xhc3NOYW1lPXshdGhpcy5nZXRJdGVtcygpLmxlbmd0aCA/IGAke0NMQVNTX1BSRUZJWH0tbWVudS1saXN0IG5vLW9wdGlvbnNgIDogYCR7Q0xBU1NfUFJFRklYfS1tZW51LWxpc3RgfVxuICAgICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgICBjb250YWluZXJIZWlnaHQ9e2xpc3RIZWlnaHR9XG4gICAgICAgIGVsZW1lbnRIZWlnaHQ9e2NvbnRyb2xIZWlnaHR9XG4gICAgICA+XG4gICAgICAgIHtpdGVtQ291bnQgPyB0aGlzLnJlbmRlck1lbnVJdGVtcygpIDogdGhpcy5yZW5kZXJOb09wdGlvbnNNZXNzYWdlKCl9XG4gICAgICA8L0luZmluaXRlPlxuICAgICk7XG4gIH1cbn1cblxuTWVudUxpc3QucHJvcFR5cGVzID0ge1xuICBnZXRTdHlsZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250cm9sSGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5vT3B0aW9uc01lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB9KS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgc2VsZWN0T3B0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XG4iXX0=