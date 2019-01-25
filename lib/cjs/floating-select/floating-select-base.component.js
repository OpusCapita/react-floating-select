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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGbG9hdGluZ1NlbGVjdEJhc2UiLCJwcm9wcyIsImdldE5vbmNlIiwibm9uY2UiLCJ3aW5kb3ciLCJOT05DRV9JRCIsImhhbmRsZU9wZW5NZW51Iiwic2V0U3RhdGUiLCJjb21wb25lbnRzIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJEcm9wZG93bkNsb3NlSW5kaWNhdG9yIiwiaGFuZGxlQ2xvc2VNZW51IiwiRHJvcGRvd25PcGVuSW5kaWNhdG9yIiwic3RhdGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJjb250cm9sSGVpZ2h0IiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxrQjs7O0FBU25CLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBU25CQyxRQVRtQixHQVNSLFlBQU07QUFDZixVQUFJQyxRQUFRLElBQVo7QUFDQTtBQUNBO0FBQ0EsVUFBSUMsVUFBVUEsT0FBT0MsUUFBckIsRUFBK0JGLFFBQVFDLE9BQU9DLFFBQWY7QUFDL0IsYUFBT0YsS0FBUDtBQUNELEtBZmtCOztBQUFBLFVBaUJuQkcsY0FqQm1CLEdBaUJGO0FBQUEsYUFDZixNQUFLQyxRQUFMLENBQWM7QUFDWkMsb0JBQVksRUFBRUMsbUJBQW1CQyx5Q0FBckI7QUFEQSxPQUFkLENBRGU7QUFBQSxLQWpCRTs7QUFBQSxVQXNCbkJDLGVBdEJtQixHQXNCRDtBQUFBLGFBQ2hCLE1BQUtKLFFBQUwsQ0FBYztBQUNaQyxvQkFBWSxFQUFFQyxtQkFBbUJHLHdDQUFyQjtBQURBLE9BQWQsQ0FEZ0I7QUFBQSxLQXRCQzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hMLGtCQUFZO0FBQ1ZDLDJCQUFtQkc7QUFEVDtBQURELEtBQWI7QUFGaUI7QUFPbEI7OztFQWhCNkNFLGdCQUFNQyxhLFVBSzdDQyxZLEdBQWU7QUFDcEJDLGlCQUFlQyx5QkFBTUMsWUFBTixDQUFtQkMsS0FBbkIsQ0FBeUJDO0FBRHBCLEM7a0JBTEhyQixrQiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ2xvc2VJbmRpY2F0b3IsIERyb3Bkb3duT3BlbkluZGljYXRvciB9IGZyb20gJy4vZHJvcGRvd24taW5kaWNhdG9yLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdEJhc2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29udHJvbEhlaWdodDogdGhlbWUuZm9ybUNvbnRyb2xzLmlucHV0LmhlaWdodCxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bk9wZW5JbmRpY2F0b3IsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9uY2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgbm9uY2UgPSBudWxsO1xyXG4gICAgLy8gQ291bGRuJ3QgZmlndXJlIG91dCBhIHdheSB0byBnZXQgdGhlIF9fd2VicGFja19ub25jZV9fIGRpcmVjdGx5LCBzbyBpbiB0aGUgbWVhbnRpbWVcclxuICAgIC8vIHdlJ2xsIHVzZSB3aW5kb3cuTk9OQ0VfSURcclxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93Lk5PTkNFX0lEKSBub25jZSA9IHdpbmRvdy5OT05DRV9JRDtcclxuICAgIHJldHVybiBub25jZTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVPcGVuTWVudSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25DbG9zZUluZGljYXRvciB9LFxyXG4gICAgfSk7XHJcblxyXG4gIGhhbmRsZUNsb3NlTWVudSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yIH0sXHJcbiAgICB9KTtcclxuXHJcbn1cclxuIl19