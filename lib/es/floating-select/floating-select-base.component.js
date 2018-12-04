var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import { DropdownCloseIndicator, DropdownOpenIndicator } from './dropdown-indicator.component';

var FloatingSelectBase = (_temp = _class = function (_React$PureComponent) {
  _inherits(FloatingSelectBase, _React$PureComponent);

  function FloatingSelectBase(props) {
    _classCallCheck(this, FloatingSelectBase);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInRoZW1lIiwiRHJvcGRvd25DbG9zZUluZGljYXRvciIsIkRyb3Bkb3duT3BlbkluZGljYXRvciIsIkZsb2F0aW5nU2VsZWN0QmFzZSIsInByb3BzIiwiaGFuZGxlT3Blbk1lbnUiLCJzZXRTdGF0ZSIsImNvbXBvbmVudHMiLCJEcm9wZG93bkluZGljYXRvciIsImhhbmRsZUNsb3NlTWVudSIsInN0YXRlIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNvbnRyb2xIZWlnaHQiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0QjtBQUNBLFNBQVNDLHNCQUFULEVBQWlDQyxxQkFBakMsUUFBOEQsZ0NBQTlEOztJQUVxQkMsa0I7OztBQVNuQiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQVNuQkMsY0FUbUIsR0FTRjtBQUFBLGFBQ2YsTUFBS0MsUUFBTCxDQUFjO0FBQ1pDLG9CQUFZLEVBQUVDLG1CQUFtQlAsc0JBQXJCO0FBREEsT0FBZCxDQURlO0FBQUEsS0FURTs7QUFBQSxVQWNuQlEsZUFkbUIsR0FjRDtBQUFBLGFBQ2hCLE1BQUtILFFBQUwsQ0FBYztBQUNaQyxvQkFBWSxFQUFFQyxtQkFBbUJOLHFCQUFyQjtBQURBLE9BQWQsQ0FEZ0I7QUFBQSxLQWRDOztBQUVqQixVQUFLUSxLQUFMLEdBQWE7QUFDWEgsa0JBQVk7QUFDVkMsMkJBQW1CTjtBQURUO0FBREQsS0FBYjtBQUZpQjtBQU9sQjs7O0VBaEI2Q0osTUFBTWEsYSxVQUs3Q0MsWSxHQUFlO0FBQ3BCQyxpQkFBZWIsTUFBTWMsWUFBTixDQUFtQkMsS0FBbkIsQ0FBeUJDO0FBRHBCLEM7U0FMSGIsa0IiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xyXG5pbXBvcnQgeyBEcm9wZG93bkNsb3NlSW5kaWNhdG9yLCBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSBmcm9tICcuL2Ryb3Bkb3duLWluZGljYXRvci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RCYXNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGNvbnRyb2xIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbnRyb2xIZWlnaHQ6IHRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5oZWlnaHQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU9wZW5NZW51ID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bkNsb3NlSW5kaWNhdG9yIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSxcclxuICAgIH0pO1xyXG59XHJcbiJdfQ==