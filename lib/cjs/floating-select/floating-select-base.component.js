'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ocCmTheme = require('@opuscapita/oc-cm-theme');

var _ocCmTheme2 = _interopRequireDefault(_ocCmTheme);

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

    _this.getNonce = function () {
      var nonce = null;
      // Couldn't figure out a way to get the __webpack_nonce__ directly, so in the meantime
      // we'll use window.NONCE_ID
      if (window && window.NONCE_ID) nonce = window.NONCE_ID;
      return nonce;
    };

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
  controlHeight: _ocCmTheme2.default.formControls.input.height
}, _temp);
exports.default = FloatingSelectBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGbG9hdGluZ1NlbGVjdEJhc2UiLCJwcm9wcyIsImdldE5vbmNlIiwibm9uY2UiLCJ3aW5kb3ciLCJOT05DRV9JRCIsImhhbmRsZU9wZW5NZW51Iiwic2V0U3RhdGUiLCJjb21wb25lbnRzIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJEcm9wZG93bkNsb3NlSW5kaWNhdG9yIiwiaGFuZGxlQ2xvc2VNZW51IiwiRHJvcGRvd25PcGVuSW5kaWNhdG9yIiwic3RhdGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJjb250cm9sSGVpZ2h0IiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7QUFTbkIsOEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFTbkJDLFFBVG1CLEdBU1IsWUFBTTtBQUNmLFVBQUlDLFFBQVEsSUFBWjtBQUNBO0FBQ0E7QUFDQSxVQUFJQyxVQUFVQSxPQUFPQyxRQUFyQixFQUErQkYsUUFBUUMsT0FBT0MsUUFBZjtBQUMvQixhQUFPRixLQUFQO0FBQ0QsS0Fma0I7O0FBQUEsVUFpQm5CRyxjQWpCbUIsR0FpQkY7QUFBQSxhQUFNLE1BQUtDLFFBQUwsQ0FBYztBQUNuQ0Msb0JBQVksRUFBRUMsbUJBQW1CQyx5Q0FBckI7QUFEdUIsT0FBZCxDQUFOO0FBQUEsS0FqQkU7O0FBQUEsVUFxQm5CQyxlQXJCbUIsR0FxQkQ7QUFBQSxhQUFNLE1BQUtKLFFBQUwsQ0FBYztBQUNwQ0Msb0JBQVksRUFBRUMsbUJBQW1CRyx3Q0FBckI7QUFEd0IsT0FBZCxDQUFOO0FBQUEsS0FyQkM7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYTCxrQkFBWTtBQUNWQywyQkFBbUJHO0FBRFQ7QUFERCxLQUFiO0FBRmlCO0FBT2xCOzs7RUFoQjZDRSxnQkFBTUMsYSxVQUs3Q0MsWSxHQUFlO0FBQ3BCQyxpQkFBZUMsb0JBQU1DLFlBQU4sQ0FBbUJDLEtBQW5CLENBQXlCQztBQURwQixDO2tCQUxIckIsa0IiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tdGhlbWUnO1xuaW1wb3J0IHsgRHJvcGRvd25DbG9zZUluZGljYXRvciwgRHJvcGRvd25PcGVuSW5kaWNhdG9yIH0gZnJvbSAnLi9kcm9wZG93bi1pbmRpY2F0b3IuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RCYXNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRyb2xIZWlnaHQ6IHRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5oZWlnaHQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duT3BlbkluZGljYXRvcixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldE5vbmNlID0gKCkgPT4ge1xuICAgIGxldCBub25jZSA9IG51bGw7XG4gICAgLy8gQ291bGRuJ3QgZmlndXJlIG91dCBhIHdheSB0byBnZXQgdGhlIF9fd2VicGFja19ub25jZV9fIGRpcmVjdGx5LCBzbyBpbiB0aGUgbWVhbnRpbWVcbiAgICAvLyB3ZSdsbCB1c2Ugd2luZG93Lk5PTkNFX0lEXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuTk9OQ0VfSUQpIG5vbmNlID0gd2luZG93Lk5PTkNFX0lEO1xuICAgIHJldHVybiBub25jZTtcbiAgfTtcblxuICBoYW5kbGVPcGVuTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duQ2xvc2VJbmRpY2F0b3IgfSxcbiAgfSk7XG5cbiAgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yIH0sXG4gIH0pO1xufVxuIl19