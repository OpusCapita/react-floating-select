'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _dropdownIndicator = require('./dropdown-indicator.component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingSelectBase = (_temp = _class = function (_React$PureComponent) {
  _inherits(FloatingSelectBase, _React$PureComponent);

  function FloatingSelectBase(props) {
    _classCallCheck(this, FloatingSelectBase);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleOpenMenu = function () {
      return _this.setState({
        components: { DropdownIndicator: _dropdownIndicator.DropdownCloseIndicator }
      });
    };

    _this.handleCloseMenu = function () {
      return _this.setState({
        components: { DropdownIndicator: _dropdownIndicator.DropdownOpenIndicator }
      });
    };

    _this.state = {
      components: {
        DropdownIndicator: _dropdownIndicator.DropdownOpenIndicator
      }
    };
    return _this;
  }

  return FloatingSelectBase;
}(_react2.default.PureComponent), _class.defaultProps = {
  controlHeight: _ocCmCommonLayouts.theme.formControls.input.height
}, _temp);
exports.default = FloatingSelectBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGbG9hdGluZ1NlbGVjdEJhc2UiLCJwcm9wcyIsImhhbmRsZU9wZW5NZW51Iiwic2V0U3RhdGUiLCJjb21wb25lbnRzIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJEcm9wZG93bkNsb3NlSW5kaWNhdG9yIiwiaGFuZGxlQ2xvc2VNZW51IiwiRHJvcGRvd25PcGVuSW5kaWNhdG9yIiwic3RhdGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJjb250cm9sSGVpZ2h0IiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxrQjs7O0FBU25CLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBU25CQyxjQVRtQixHQVNGO0FBQUEsYUFDZixNQUFLQyxRQUFMLENBQWM7QUFDWkMsb0JBQVksRUFBRUMsbUJBQW1CQyx5Q0FBckI7QUFEQSxPQUFkLENBRGU7QUFBQSxLQVRFOztBQUFBLFVBY25CQyxlQWRtQixHQWNEO0FBQUEsYUFDaEIsTUFBS0osUUFBTCxDQUFjO0FBQ1pDLG9CQUFZLEVBQUVDLG1CQUFtQkcsd0NBQXJCO0FBREEsT0FBZCxDQURnQjtBQUFBLEtBZEM7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYTCxrQkFBWTtBQUNWQywyQkFBbUJHO0FBRFQ7QUFERCxLQUFiO0FBRmlCO0FBT2xCOzs7RUFoQjZDRSxnQkFBTUMsYSxVQUs3Q0MsWSxHQUFlO0FBQ3BCQyxpQkFBZUMseUJBQU1DLFlBQU4sQ0FBbUJDLEtBQW5CLENBQXlCQztBQURwQixDO2tCQUxIakIsa0IiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xyXG5pbXBvcnQgeyBEcm9wZG93bkNsb3NlSW5kaWNhdG9yLCBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSBmcm9tICcuL2Ryb3Bkb3duLWluZGljYXRvci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RCYXNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGNvbnRyb2xIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbnRyb2xIZWlnaHQ6IHRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5oZWlnaHQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU9wZW5NZW51ID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bkNsb3NlSW5kaWNhdG9yIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSxcclxuICAgIH0pO1xyXG59XHJcbiJdfQ==