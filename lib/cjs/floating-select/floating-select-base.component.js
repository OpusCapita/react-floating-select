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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGbG9hdGluZ1NlbGVjdEJhc2UiLCJwcm9wcyIsImhhbmRsZU9wZW5NZW51Iiwic2V0U3RhdGUiLCJjb21wb25lbnRzIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJEcm9wZG93bkNsb3NlSW5kaWNhdG9yIiwiaGFuZGxlQ2xvc2VNZW51IiwiRHJvcGRvd25PcGVuSW5kaWNhdG9yIiwic3RhdGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJjb250cm9sSGVpZ2h0IiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxrQjs7O0FBU25CLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBU25CQyxjQVRtQixHQVNGO0FBQUEsYUFDZixNQUFLQyxRQUFMLENBQWM7QUFDWkMsb0JBQVksRUFBRUMsbUJBQW1CQyx5Q0FBckI7QUFEQSxPQUFkLENBRGU7QUFBQSxLQVRFOztBQUFBLFVBY25CQyxlQWRtQixHQWNEO0FBQUEsYUFDaEIsTUFBS0osUUFBTCxDQUFjO0FBQ1pDLG9CQUFZLEVBQUVDLG1CQUFtQkcsd0NBQXJCO0FBREEsT0FBZCxDQURnQjtBQUFBLEtBZEM7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYTCxrQkFBWTtBQUNWQywyQkFBbUJHO0FBRFQ7QUFERCxLQUFiO0FBRmlCO0FBT2xCOzs7RUFoQjZDRSxnQkFBTUMsYSxVQUs3Q0MsWSxHQUFlO0FBQ3BCQyxpQkFBZUMseUJBQU1DLFlBQU4sQ0FBbUJDLEtBQW5CLENBQXlCQztBQURwQixDO2tCQUxIakIsa0IiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCB7IERyb3Bkb3duQ2xvc2VJbmRpY2F0b3IsIERyb3Bkb3duT3BlbkluZGljYXRvciB9IGZyb20gJy4vZHJvcGRvd24taW5kaWNhdG9yLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0QmFzZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRyb2xIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb250cm9sSGVpZ2h0OiB0aGVtZS5mb3JtQ29udHJvbHMuaW5wdXQuaGVpZ2h0LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bk9wZW5JbmRpY2F0b3IsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVPcGVuTWVudSA9ICgpID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bkNsb3NlSW5kaWNhdG9yIH0sXG4gICAgfSk7XG5cbiAgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duT3BlbkluZGljYXRvciB9LFxuICAgIH0pO1xufVxuIl19