var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Select from 'react-select';
import styles from '../floating-select/styles';
import FloatingSelectBase from '../floating-select/floating-select-base.component';

var Portal = true;

var FloatingSelectPortal = function (_FloatingSelectBase) {
  _inherits(FloatingSelectPortal, _FloatingSelectBase);

  function FloatingSelectPortal() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectPortal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          rest = _objectWithoutProperties(_this$props, ['components']);

      var comp = _extends({}, components, _this.state.components);
      return React.createElement(Select, _extends({}, rest, {
        components: comp,
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: styles(_this.props.controlHeight, Portal),
        ref: function ref(el) {
          _this.selectRef = el;
        }
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectPortal;
}(FloatingSelectBase);

export { FloatingSelectPortal as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtcG9ydGFsL2Zsb2F0aW5nLXNlbGVjdC1wb3J0YWwuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiU2VsZWN0Iiwic3R5bGVzIiwiRmxvYXRpbmdTZWxlY3RCYXNlIiwiUG9ydGFsIiwiRmxvYXRpbmdTZWxlY3RQb3J0YWwiLCJyZW5kZXIiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJyZXN0IiwiY29tcCIsInN0YXRlIiwiZG9jdW1lbnQiLCJib2R5IiwiaGFuZGxlT3Blbk1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJjb250cm9sSGVpZ2h0IiwiZWwiLCJzZWxlY3RSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixjQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsMkJBQW5CO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsbURBQS9COztBQUVBLElBQU1DLFNBQVMsSUFBZjs7SUFFcUJDLG9COzs7Ozs7Ozs7Ozs7OEpBQ25CQyxNLEdBQVMsWUFBTTtBQUFBLHdCQUNtQixNQUFLQyxLQUR4QjtBQUFBLFVBQ0xDLFVBREssZUFDTEEsVUFESztBQUFBLFVBQ1VDLElBRFY7O0FBRWIsVUFBTUMsb0JBQVlGLFVBQVosRUFBMkIsTUFBS0csS0FBTCxDQUFXSCxVQUF0QyxDQUFOO0FBQ0EsYUFDRSxvQkFBQyxNQUFELGVBQ01DLElBRE47QUFFRSxvQkFBWUMsSUFGZDtBQUdFLHVCQUFjLE1BSGhCO0FBSUUsMEJBQWtCRSxTQUFTQyxJQUo3QjtBQUtFLG9CQUFZLE1BQUtDLGNBTG5CO0FBTUUscUJBQWEsTUFBS0MsZUFOcEI7QUFPRSxnQkFBUWIsT0FBTyxNQUFLSyxLQUFMLENBQVdTLGFBQWxCLEVBQWlDWixNQUFqQyxDQVBWO0FBUUUsYUFBSyxhQUFDYSxFQUFELEVBQVE7QUFDWCxnQkFBS0MsU0FBTCxHQUFpQkQsRUFBakI7QUFDRDtBQVZILFNBREY7QUFjRCxLOzs7O0VBbEIrQ2Qsa0I7O1NBQTdCRSxvQiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtcG9ydGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vZmxvYXRpbmctc2VsZWN0L3N0eWxlcyc7XG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4uL2Zsb2F0aW5nLXNlbGVjdC9mbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQnO1xuXG5jb25zdCBQb3J0YWwgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdFBvcnRhbCBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcCA9IHsgLi4uY29tcG9uZW50cywgLi4udGhpcy5zdGF0ZS5jb21wb25lbnRzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIGNvbXBvbmVudHM9e2NvbXB9XG4gICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgICAgbWVudVBvcnRhbFRhcmdldD17ZG9jdW1lbnQuYm9keX1cbiAgICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cbiAgICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQsIFBvcnRhbCl9XG4gICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcbn1cbiJdfQ==