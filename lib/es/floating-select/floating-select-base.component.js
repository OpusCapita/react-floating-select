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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInRoZW1lIiwiRHJvcGRvd25DbG9zZUluZGljYXRvciIsIkRyb3Bkb3duT3BlbkluZGljYXRvciIsIkZsb2F0aW5nU2VsZWN0QmFzZSIsInByb3BzIiwiZ2V0Tm9uY2UiLCJub25jZSIsIndpbmRvdyIsIk5PTkNFX0lEIiwiaGFuZGxlT3Blbk1lbnUiLCJzZXRTdGF0ZSIsImNvbXBvbmVudHMiLCJEcm9wZG93bkluZGljYXRvciIsImhhbmRsZUNsb3NlTWVudSIsInN0YXRlIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNvbnRyb2xIZWlnaHQiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0QjtBQUNBLFNBQVNDLHNCQUFULEVBQWlDQyxxQkFBakMsUUFBOEQsZ0NBQTlEOztJQUVxQkMsa0I7OztBQVNuQiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQVNuQkMsUUFUbUIsR0FTUixZQUFNO0FBQ2YsVUFBSUMsUUFBUSxJQUFaO0FBQ0E7QUFDQTtBQUNBLFVBQUlDLFVBQVVBLE9BQU9DLFFBQXJCLEVBQStCRixRQUFRQyxPQUFPQyxRQUFmO0FBQy9CLGFBQU9GLEtBQVA7QUFDRCxLQWZrQjs7QUFBQSxVQWlCbkJHLGNBakJtQixHQWlCRjtBQUFBLGFBQU0sTUFBS0MsUUFBTCxDQUFjO0FBQ25DQyxvQkFBWSxFQUFFQyxtQkFBbUJYLHNCQUFyQjtBQUR1QixPQUFkLENBQU47QUFBQSxLQWpCRTs7QUFBQSxVQXFCbkJZLGVBckJtQixHQXFCRDtBQUFBLGFBQU0sTUFBS0gsUUFBTCxDQUFjO0FBQ3BDQyxvQkFBWSxFQUFFQyxtQkFBbUJWLHFCQUFyQjtBQUR3QixPQUFkLENBQU47QUFBQSxLQXJCQzs7QUFFakIsVUFBS1ksS0FBTCxHQUFhO0FBQ1hILGtCQUFZO0FBQ1ZDLDJCQUFtQlY7QUFEVDtBQURELEtBQWI7QUFGaUI7QUFPbEI7OztFQWhCNkNKLE1BQU1pQixhLFVBSzdDQyxZLEdBQWU7QUFDcEJDLGlCQUFlakIsTUFBTWtCLFlBQU4sQ0FBbUJDLEtBQW5CLENBQXlCQztBQURwQixDO1NBTEhqQixrQiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IHsgRHJvcGRvd25DbG9zZUluZGljYXRvciwgRHJvcGRvd25PcGVuSW5kaWNhdG9yIH0gZnJvbSAnLi9kcm9wZG93bi1pbmRpY2F0b3IuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RCYXNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRyb2xIZWlnaHQ6IHRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5oZWlnaHQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duT3BlbkluZGljYXRvcixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldE5vbmNlID0gKCkgPT4ge1xuICAgIGxldCBub25jZSA9IG51bGw7XG4gICAgLy8gQ291bGRuJ3QgZmlndXJlIG91dCBhIHdheSB0byBnZXQgdGhlIF9fd2VicGFja19ub25jZV9fIGRpcmVjdGx5LCBzbyBpbiB0aGUgbWVhbnRpbWVcbiAgICAvLyB3ZSdsbCB1c2Ugd2luZG93Lk5PTkNFX0lEXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuTk9OQ0VfSUQpIG5vbmNlID0gd2luZG93Lk5PTkNFX0lEO1xuICAgIHJldHVybiBub25jZTtcbiAgfTtcblxuICBoYW5kbGVPcGVuTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duQ2xvc2VJbmRpY2F0b3IgfSxcbiAgfSk7XG5cbiAgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yIH0sXG4gIH0pO1xufVxuIl19