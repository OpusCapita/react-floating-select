var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Creatable from 'react-select/lib/Creatable';
import styles from '../floating-select/styles';
import FloatingSelectBase from '../floating-select/floating-select-base.component';

var Portal = true;

var FloatingSelectPortalCreatable = function (_FloatingSelectBase) {
  _inherits(FloatingSelectPortalCreatable, _FloatingSelectBase);

  function FloatingSelectPortalCreatable() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectPortalCreatable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          rest = _objectWithoutProperties(_this$props, ['components']);

      var comp = _extends({}, components, _this.state.components);
      return React.createElement(Creatable, _extends({}, rest, {
        components: comp,
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: styles(_this.props.controlHeight, Portal)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectPortalCreatable;
}(FloatingSelectBase);

export { FloatingSelectPortalCreatable as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtcG9ydGFsL2Zsb2F0aW5nLXNlbGVjdC1wb3J0YWwtY3JlYXRhYmxlLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkNyZWF0YWJsZSIsInN0eWxlcyIsIkZsb2F0aW5nU2VsZWN0QmFzZSIsIlBvcnRhbCIsIkZsb2F0aW5nU2VsZWN0UG9ydGFsQ3JlYXRhYmxlIiwicmVuZGVyIiwicHJvcHMiLCJjb21wb25lbnRzIiwicmVzdCIsImNvbXAiLCJzdGF0ZSIsImRvY3VtZW50IiwiYm9keSIsImhhbmRsZU9wZW5NZW51IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29udHJvbEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLDRCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsMkJBQW5CO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsbURBQS9COztBQUVBLElBQU1DLFNBQVMsSUFBZjs7SUFFcUJDLDZCOzs7Ozs7Ozs7Ozs7OEpBQ25CQyxNLEdBQVMsWUFBTTtBQUFBLHdCQUNtQixNQUFLQyxLQUR4QjtBQUFBLFVBQ0xDLFVBREssZUFDTEEsVUFESztBQUFBLFVBQ1VDLElBRFY7O0FBRWIsVUFBTUMsb0JBQVlGLFVBQVosRUFBMkIsTUFBS0csS0FBTCxDQUFXSCxVQUF0QyxDQUFOO0FBQ0EsYUFDRSxvQkFBQyxTQUFELGVBQ01DLElBRE47QUFFRSxvQkFBWUMsSUFGZDtBQUdFLHVCQUFjLE1BSGhCO0FBSUUsMEJBQWtCRSxTQUFTQyxJQUo3QjtBQUtFLG9CQUFZLE1BQUtDLGNBTG5CO0FBTUUscUJBQWEsTUFBS0MsZUFOcEI7QUFPRSxnQkFBUWIsT0FBTyxNQUFLSyxLQUFMLENBQVdTLGFBQWxCLEVBQWlDWixNQUFqQztBQVBWLFNBREY7QUFXRCxLOzs7O0VBZndERCxrQjs7U0FBdENFLDZCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1wb3J0YWwtY3JlYXRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDcmVhdGFibGUgZnJvbSAncmVhY3Qtc2VsZWN0L2xpYi9DcmVhdGFibGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzJztcbmltcG9ydCBGbG9hdGluZ1NlbGVjdEJhc2UgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XG5cbmNvbnN0IFBvcnRhbCA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0UG9ydGFsQ3JlYXRhYmxlIGV4dGVuZHMgRmxvYXRpbmdTZWxlY3RCYXNlIHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29tcG9uZW50cywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wID0geyAuLi5jb21wb25lbnRzLCAuLi50aGlzLnN0YXRlLmNvbXBvbmVudHMgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPENyZWF0YWJsZVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgY29tcG9uZW50cz17Y29tcH1cbiAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgICBtZW51UG9ydGFsVGFyZ2V0PXtkb2N1bWVudC5ib2R5fVxuICAgICAgICBvbk1lbnVPcGVuPXt0aGlzLmhhbmRsZU9wZW5NZW51fVxuICAgICAgICBvbk1lbnVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1lbnV9XG4gICAgICAgIHN0eWxlcz17c3R5bGVzKHRoaXMucHJvcHMuY29udHJvbEhlaWdodCwgUG9ydGFsKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19