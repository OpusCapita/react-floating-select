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
  controlHeight: _ocCmCommonLayouts.theme.formControls.input.height
}, _temp);
exports.default = FloatingSelectBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGbG9hdGluZ1NlbGVjdEJhc2UiLCJwcm9wcyIsImdldE5vbmNlIiwibm9uY2UiLCJ3aW5kb3ciLCJOT05DRV9JRCIsImhhbmRsZU9wZW5NZW51Iiwic2V0U3RhdGUiLCJjb21wb25lbnRzIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJEcm9wZG93bkNsb3NlSW5kaWNhdG9yIiwiaGFuZGxlQ2xvc2VNZW51IiwiRHJvcGRvd25PcGVuSW5kaWNhdG9yIiwic3RhdGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJjb250cm9sSGVpZ2h0IiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxrQjs7O0FBU25CLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBU25CQyxRQVRtQixHQVNSLFlBQU07QUFDZixVQUFJQyxRQUFRLElBQVo7QUFDQTtBQUNBO0FBQ0EsVUFBSUMsVUFBVUEsT0FBT0MsUUFBckIsRUFBK0JGLFFBQVFDLE9BQU9DLFFBQWY7QUFDL0IsYUFBT0YsS0FBUDtBQUNELEtBZmtCOztBQUFBLFVBaUJuQkcsY0FqQm1CLEdBaUJGO0FBQUEsYUFBTSxNQUFLQyxRQUFMLENBQWM7QUFDbkNDLG9CQUFZLEVBQUVDLG1CQUFtQkMseUNBQXJCO0FBRHVCLE9BQWQsQ0FBTjtBQUFBLEtBakJFOztBQUFBLFVBcUJuQkMsZUFyQm1CLEdBcUJEO0FBQUEsYUFBTSxNQUFLSixRQUFMLENBQWM7QUFDcENDLG9CQUFZLEVBQUVDLG1CQUFtQkcsd0NBQXJCO0FBRHdCLE9BQWQsQ0FBTjtBQUFBLEtBckJDOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEwsa0JBQVk7QUFDVkMsMkJBQW1CRztBQURUO0FBREQsS0FBYjtBQUZpQjtBQU9sQjs7O0VBaEI2Q0UsZ0JBQU1DLGEsVUFLN0NDLFksR0FBZTtBQUNwQkMsaUJBQWVDLHlCQUFNQyxZQUFOLENBQW1CQyxLQUFuQixDQUF5QkM7QUFEcEIsQztrQkFMSHJCLGtCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgeyBEcm9wZG93bkNsb3NlSW5kaWNhdG9yLCBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSBmcm9tICcuL2Ryb3Bkb3duLWluZGljYXRvci5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdEJhc2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250cm9sSGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udHJvbEhlaWdodDogdGhlbWUuZm9ybUNvbnRyb2xzLmlucHV0LmhlaWdodCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0Tm9uY2UgPSAoKSA9PiB7XG4gICAgbGV0IG5vbmNlID0gbnVsbDtcbiAgICAvLyBDb3VsZG4ndCBmaWd1cmUgb3V0IGEgd2F5IHRvIGdldCB0aGUgX193ZWJwYWNrX25vbmNlX18gZGlyZWN0bHksIHNvIGluIHRoZSBtZWFudGltZVxuICAgIC8vIHdlJ2xsIHVzZSB3aW5kb3cuTk9OQ0VfSURcbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5OT05DRV9JRCkgbm9uY2UgPSB3aW5kb3cuTk9OQ0VfSUQ7XG4gICAgcmV0dXJuIG5vbmNlO1xuICB9O1xuXG4gIGhhbmRsZU9wZW5NZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25DbG9zZUluZGljYXRvciB9LFxuICB9KTtcblxuICBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSxcbiAgfSk7XG59XG4iXX0=