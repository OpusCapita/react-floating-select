var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import theme from '@opuscapita/oc-cm-theme';
import styles from './styles';
import { DropdownCloseIndicator, DropdownOpenIndicator } from './components/dropdown-indicator.component';

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
        components: { DropdownIndicator: DropdownCloseIndicator }
      });
    };

    _this.handleCloseMenu = function () {
      return _this.setState({
        components: { DropdownIndicator: DropdownOpenIndicator }
      });
    };

    _this.state = {
      components: {
        DropdownIndicator: DropdownOpenIndicator
      }
    };
    _this.styles = styles(props.controlHeight, props.customStyles);
    return _this;
  }

  return FloatingSelectBase;
}(React.PureComponent), _class.defaultProps = {
  controlHeight: theme.formControls.input.height,
  customStyles: {}
}, _temp);
export { FloatingSelectBase as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ0aGVtZSIsInN0eWxlcyIsIkRyb3Bkb3duQ2xvc2VJbmRpY2F0b3IiLCJEcm9wZG93bk9wZW5JbmRpY2F0b3IiLCJGbG9hdGluZ1NlbGVjdEJhc2UiLCJwcm9wcyIsImdldE5vbmNlIiwibm9uY2UiLCJ3aW5kb3ciLCJOT05DRV9JRCIsImhhbmRsZU9wZW5NZW51Iiwic2V0U3RhdGUiLCJjb21wb25lbnRzIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJoYW5kbGVDbG9zZU1lbnUiLCJzdGF0ZSIsImNvbnRyb2xIZWlnaHQiLCJjdXN0b21TdHlsZXMiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZm9ybUNvbnRyb2xzIiwiaW5wdXQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQix5QkFBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsU0FDRUMsc0JBREYsRUFFRUMscUJBRkYsUUFHTywyQ0FIUDs7SUFLcUJDLGtCOzs7QUFrQ25CLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBVW5CQyxRQVZtQixHQVVSLFlBQU07QUFDZixVQUFJQyxRQUFRLElBQVo7QUFDQTtBQUNBO0FBQ0EsVUFBSUMsVUFBVUEsT0FBT0MsUUFBckIsRUFBK0JGLFFBQVFDLE9BQU9DLFFBQWY7QUFDL0IsYUFBT0YsS0FBUDtBQUNELEtBaEJrQjs7QUFBQSxVQWtCbkJHLGNBbEJtQixHQWtCRjtBQUFBLGFBQU0sTUFBS0MsUUFBTCxDQUFjO0FBQ25DQyxvQkFBWSxFQUFFQyxtQkFBbUJYLHNCQUFyQjtBQUR1QixPQUFkLENBQU47QUFBQSxLQWxCRTs7QUFBQSxVQXNCbkJZLGVBdEJtQixHQXNCRDtBQUFBLGFBQU0sTUFBS0gsUUFBTCxDQUFjO0FBQ3BDQyxvQkFBWSxFQUFFQyxtQkFBbUJWLHFCQUFyQjtBQUR3QixPQUFkLENBQU47QUFBQSxLQXRCQzs7QUFFakIsVUFBS1ksS0FBTCxHQUFhO0FBQ1hILGtCQUFZO0FBQ1ZDLDJCQUFtQlY7QUFEVDtBQURELEtBQWI7QUFLQSxVQUFLRixNQUFMLEdBQWNBLE9BQU9JLE1BQU1XLGFBQWIsRUFBNEJYLE1BQU1ZLFlBQWxDLENBQWQ7QUFQaUI7QUFRbEI7OztFQTFDNkNuQixNQUFNb0IsYSxVQTZCN0NDLFksR0FBZTtBQUNwQkgsaUJBQWVoQixNQUFNb0IsWUFBTixDQUFtQkMsS0FBbkIsQ0FBeUJDLE1BRHBCO0FBRXBCTCxnQkFBYztBQUZNLEM7U0E3QkhiLGtCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLXRoZW1lJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgRHJvcGRvd25DbG9zZUluZGljYXRvcixcbiAgRHJvcGRvd25PcGVuSW5kaWNhdG9yLFxufSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24taW5kaWNhdG9yLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0QmFzZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRyb2xIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3VzdG9tU3R5bGVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY2xlYXJJbmRpY2F0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGNvbnRyb2w6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZHJvcGRvd25JbmRpY2F0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZ3JvdXA6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZ3JvdXBIZWFkaW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGluZGljYXRvcnNDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgaW5kaWNhdG9yU2VwYXJhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGlucHV0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGxvYWRpbmdJbmRpY2F0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbG9hZGluZ01lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbWVudTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBtZW51TGlzdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBtZW51UG9ydGFsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG11bHRpVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbXVsdGlWYWx1ZUxhYmVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG11bHRpVmFsdWVSZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbm9PcHRpb25zTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvcHRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc2luZ2xlVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgdmFsdWVDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udHJvbEhlaWdodDogdGhlbWUuZm9ybUNvbnRyb2xzLmlucHV0LmhlaWdodCxcbiAgICBjdXN0b21TdHlsZXM6IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bk9wZW5JbmRpY2F0b3IsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5zdHlsZXMgPSBzdHlsZXMocHJvcHMuY29udHJvbEhlaWdodCwgcHJvcHMuY3VzdG9tU3R5bGVzKTtcbiAgfVxuXG4gIGdldE5vbmNlID0gKCkgPT4ge1xuICAgIGxldCBub25jZSA9IG51bGw7XG4gICAgLy8gQ291bGRuJ3QgZmlndXJlIG91dCBhIHdheSB0byBnZXQgdGhlIF9fd2VicGFja19ub25jZV9fIGRpcmVjdGx5LCBzbyBpbiB0aGUgbWVhbnRpbWVcbiAgICAvLyB3ZSdsbCB1c2Ugd2luZG93Lk5PTkNFX0lEXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuTk9OQ0VfSUQpIG5vbmNlID0gd2luZG93Lk5PTkNFX0lEO1xuICAgIHJldHVybiBub25jZTtcbiAgfTtcblxuICBoYW5kbGVPcGVuTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duQ2xvc2VJbmRpY2F0b3IgfSxcbiAgfSk7XG5cbiAgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yIH0sXG4gIH0pO1xufVxuIl19