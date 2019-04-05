var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import theme from '@opuscapita/oc-cm-theme';
import { DropdownCloseIndicator, DropdownOpenIndicator } from './dropdown-indicator.component';

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
    return _this;
  }

  return FloatingSelectBase;
}(React.PureComponent), _class.defaultProps = {
  controlHeight: theme.formControls.input.height
}, _temp);
export { FloatingSelectBase as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInRoZW1lIiwiRHJvcGRvd25DbG9zZUluZGljYXRvciIsIkRyb3Bkb3duT3BlbkluZGljYXRvciIsIkZsb2F0aW5nU2VsZWN0QmFzZSIsInByb3BzIiwiZ2V0Tm9uY2UiLCJub25jZSIsIndpbmRvdyIsIk5PTkNFX0lEIiwiaGFuZGxlT3Blbk1lbnUiLCJzZXRTdGF0ZSIsImNvbXBvbmVudHMiLCJEcm9wZG93bkluZGljYXRvciIsImhhbmRsZUNsb3NlTWVudSIsInN0YXRlIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNvbnRyb2xIZWlnaHQiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLHlCQUFsQjtBQUNBLFNBQVNDLHNCQUFULEVBQWlDQyxxQkFBakMsUUFBOEQsZ0NBQTlEOztJQUVxQkMsa0I7OztBQVNuQiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQVNuQkMsUUFUbUIsR0FTUixZQUFNO0FBQ2YsVUFBSUMsUUFBUSxJQUFaO0FBQ0E7QUFDQTtBQUNBLFVBQUlDLFVBQVVBLE9BQU9DLFFBQXJCLEVBQStCRixRQUFRQyxPQUFPQyxRQUFmO0FBQy9CLGFBQU9GLEtBQVA7QUFDRCxLQWZrQjs7QUFBQSxVQWlCbkJHLGNBakJtQixHQWlCRjtBQUFBLGFBQU0sTUFBS0MsUUFBTCxDQUFjO0FBQ25DQyxvQkFBWSxFQUFFQyxtQkFBbUJYLHNCQUFyQjtBQUR1QixPQUFkLENBQU47QUFBQSxLQWpCRTs7QUFBQSxVQXFCbkJZLGVBckJtQixHQXFCRDtBQUFBLGFBQU0sTUFBS0gsUUFBTCxDQUFjO0FBQ3BDQyxvQkFBWSxFQUFFQyxtQkFBbUJWLHFCQUFyQjtBQUR3QixPQUFkLENBQU47QUFBQSxLQXJCQzs7QUFFakIsVUFBS1ksS0FBTCxHQUFhO0FBQ1hILGtCQUFZO0FBQ1ZDLDJCQUFtQlY7QUFEVDtBQURELEtBQWI7QUFGaUI7QUFPbEI7OztFQWhCNkNKLE1BQU1pQixhLFVBSzdDQyxZLEdBQWU7QUFDcEJDLGlCQUFlakIsTUFBTWtCLFlBQU4sQ0FBbUJDLEtBQW5CLENBQXlCQztBQURwQixDO1NBTEhqQixrQiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB0aGVtZSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS10aGVtZSc7XG5pbXBvcnQgeyBEcm9wZG93bkNsb3NlSW5kaWNhdG9yLCBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSBmcm9tICcuL2Ryb3Bkb3duLWluZGljYXRvci5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdEJhc2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250cm9sSGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udHJvbEhlaWdodDogdGhlbWUuZm9ybUNvbnRyb2xzLmlucHV0LmhlaWdodCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0Tm9uY2UgPSAoKSA9PiB7XG4gICAgbGV0IG5vbmNlID0gbnVsbDtcbiAgICAvLyBDb3VsZG4ndCBmaWd1cmUgb3V0IGEgd2F5IHRvIGdldCB0aGUgX193ZWJwYWNrX25vbmNlX18gZGlyZWN0bHksIHNvIGluIHRoZSBtZWFudGltZVxuICAgIC8vIHdlJ2xsIHVzZSB3aW5kb3cuTk9OQ0VfSURcbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5OT05DRV9JRCkgbm9uY2UgPSB3aW5kb3cuTk9OQ0VfSUQ7XG4gICAgcmV0dXJuIG5vbmNlO1xuICB9O1xuXG4gIGhhbmRsZU9wZW5NZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25DbG9zZUluZGljYXRvciB9LFxuICB9KTtcblxuICBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSxcbiAgfSk7XG59XG4iXX0=