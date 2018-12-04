'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-nested-ternary */


var _colors = require('@opuscapita/oc-cm-common-styles/styles/_colors.scss');

var _colors2 = _interopRequireDefault(_colors);

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles shared between both FloatingSelect implementations
var mainStyles = function mainStyles(inputHeight) {
  return {
    container: function container(base) {
      return _extends({}, base, {
        height: inputHeight
      });
    },

    control: function control(base, state) {
      return _extends({}, base, {
        backgroundColor: _colors2.default.colorWhite,
        borderColor: state.isFocused ? _colors2.default.colorPseudoFocused : _colors2.default.colorLightGray,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + _colors2.default.colorWhite + ', 0 0 8px ' + _colors2.default.colorPseudoFocused : 0,
        height: inputHeight,
        '&:hover': {
          borderColor: state.isFocused ? _colors2.default.colorPseudoFocused : _colors2.default.colorLightGray
        },
        minHeight: inputHeight,
        outline: 0
      });
    },

    groupHeading: function groupHeading() {
      return {
        fontWeight: 'bold',
        paddingLeft: _ocCmCommonLayouts.theme.gutterWidth
      };
    },

    indicatorSeparator: function indicatorSeparator() {
      return { display: 'none' };
    },

    input: function input(base) {
      return _extends({}, base, {
        color: _colors2.default.colorText
      });
    },

    menu: function menu(base) {
      return _extends({}, base, {
        border: '1px solid ' + _colors2.default.colorLightGray,
        borderRadius: 0,
        boxShadow: 0,
        marginBottom: 0,
        marginTop: 0,
        zIndex: 3
      });
    },
    menuList: function menuList(base) {
      return _extends({}, base, {
        padding: 0
      });
    },
    multiValueLabel: function multiValueLabel(base) {
      return _extends({}, base, {
        backgroundColor: _colors2.default.colorSelectSelected,
        borderRadius: 0,
        color: _colors2.default.colorText,
        flexBasis: 'fit-content'
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      return _extends({}, base, {
        backgroundColor: _colors2.default.colorSelectSelected,
        borderRadius: 0,
        color: _colors2.default.colorText,
        ':hover': {
          backgroundColor: _colors2.default.colorButtonHover,
          color: _colors2.default.colorWhite
        }
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? _colors2.default.colorSelectSelected : state.isFocused ? _colors2.default.colorSelectHover : 'transparent',
        color: state.isDisabled ? _colors2.default.colorText : state.isSelected ? _colors2.default.colorText : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: _colors2.default.colorSelectHover },
        minHeight: inputHeight,
        paddingLeft: state.data.group ? '50px' : '12px'
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, {
        color: _colors2.default.colorText
      });
    },
    valueContainer: function valueContainer(base) {
      return _extends({}, base, {
        display: 'flex',
        flexWrap: 'no-wrap',
        height: inputHeight,
        'min-height': inputHeight,
        overflow: 'hidden'
      });
    }
  };
};

var portalStyles = function portalStyles() {
  return {
    clearIndicator: function clearIndicator(base) {
      return _extends({}, base, {
        padding: 0,
        color: _colors2.default.colorText,
        ':hover': {
          color: _colors2.default.colorText
        }
      });
    },
    dropdownIndicator: function dropdownIndicator(base) {
      return _extends({}, base, {
        color: _colors2.default.colorText,
        ':hover': {
          color: _colors2.default.colorText
        },
        padding: '0 2px 0 0'
      });
    },
    menuPortal: function menuPortal(base) {
      return _extends({}, base, {
        zIndex: 9999
      });
    }
  };
};

var styles = function styles(inputHeight) {
  var portal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var baseStyles = mainStyles(inputHeight);
  if (portal) {
    return _extends({}, baseStyles, portalStyles());
  }
  return baseStyles;
};

exports.default = styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwiaGVpZ2h0IiwiaW5wdXRIZWlnaHQiLCJjb250cm9sIiwic3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJjb2xvcldoaXRlIiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJjb2xvclBzZXVkb0ZvY3VzZWQiLCJjb2xvckxpZ2h0R3JheSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1pbkhlaWdodCIsIm91dGxpbmUiLCJncm91cEhlYWRpbmciLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsImZsZXhCYXNpcyIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImNvbG9yU2VsZWN0SG92ZXIiLCJpc0Rpc2FibGVkIiwiZGF0YSIsImlzSGlkZGVuIiwibWF0Y2giLCJncm91cCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJmbGV4V3JhcCIsIm92ZXJmbG93IiwicG9ydGFsU3R5bGVzIiwiY2xlYXJJbmRpY2F0b3IiLCJkcm9wZG93bkluZGljYXRvciIsIm1lbnVQb3J0YWwiLCJzdHlsZXMiLCJwb3J0YWwiLCJiYXNlU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7O2tRQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWE7QUFB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S0E1RW9CO0FBZ0ZqQ3NCLG9CQUFnQjtBQUFBLDBCQUNYL0MsSUFEVztBQUVkc0IsaUJBQVMsTUFGSztBQUdkMEIsa0JBQVUsU0FISTtBQUlkL0MsZ0JBQVFDLFdBSk07QUFLZCxzQkFBY0EsV0FMQTtBQU1kK0Msa0JBQVU7QUFOSTtBQUFBO0FBaEZpQixHQUFoQjtBQUFBLENBQW5COztBQTBGQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxvQkFBZ0I7QUFBQSwwQkFDWG5ELElBRFc7QUFFZGdDLGlCQUFTLENBRks7QUFHZFIsZUFBT2xCLGlCQUFPbUIsU0FIQTtBQUlkLGtCQUFVO0FBQ1JELGlCQUFPbEIsaUJBQU9tQjtBQUROO0FBSkk7QUFBQSxLQURVO0FBUzFCMkIsdUJBQW1CO0FBQUEsMEJBQ2RwRCxJQURjO0FBRWpCd0IsZUFBT2xCLGlCQUFPbUIsU0FGRztBQUdqQixrQkFBVTtBQUNSRCxpQkFBT2xCLGlCQUFPbUI7QUFETixTQUhPO0FBTWpCTyxpQkFBUztBQU5RO0FBQUEsS0FUTztBQWlCMUJxQixnQkFBWTtBQUFBLDBCQUNQckQsSUFETztBQUVWOEIsZ0JBQVE7QUFGRTtBQUFBO0FBakJjLEdBQVA7QUFBQSxDQUFyQjs7QUF1QkEsSUFBTXdCLFNBQVMsU0FBVEEsTUFBUyxDQUFDcEQsV0FBRCxFQUFpQztBQUFBLE1BQW5CcUQsTUFBbUIsdUVBQVYsS0FBVTs7QUFDOUMsTUFBTUMsYUFBYTFELFdBQVdJLFdBQVgsQ0FBbkI7QUFDQSxNQUFJcUQsTUFBSixFQUFZO0FBQ1Ysd0JBQVlDLFVBQVosRUFBMkJOLGNBQTNCO0FBQ0Q7QUFDRCxTQUFPTSxVQUFQO0FBQ0QsQ0FORDs7a0JBUWVGLE0iLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cclxuaW1wb3J0IGNvbG9ycyBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tc3R5bGVzL3N0eWxlcy9fY29sb3JzLnNjc3MnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcclxuXHJcbi8vIFN0eWxlcyBzaGFyZWQgYmV0d2VlbiBib3RoIEZsb2F0aW5nU2VsZWN0IGltcGxlbWVudGF0aW9uc1xyXG5jb25zdCBtYWluU3R5bGVzID0gaW5wdXRIZWlnaHQgPT4gKHtcclxuICBjb250YWluZXI6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBoZWlnaHQ6IGlucHV0SGVpZ2h0LFxyXG4gIH0pLFxyXG5cclxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JXaGl0ZSxcclxuICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkIDogY29sb3JzLmNvbG9yTGlnaHRHcmF5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBgaW5zZXQgMCAxcHggMXB4ICR7Y29sb3JzLmNvbG9yV2hpdGV9LCAwIDAgOHB4ICR7Y29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZH1gIDogMCxcclxuICAgIGhlaWdodDogaW5wdXRIZWlnaHQsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXHJcbiAgICB9LFxyXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcclxuICAgIG91dGxpbmU6IDAsXHJcbiAgfSksXHJcblxyXG4gIGdyb3VwSGVhZGluZzogKCkgPT4gKHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5ndXR0ZXJXaWR0aCxcclxuICB9KSxcclxuXHJcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcblxyXG4gIGlucHV0OiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgfSksXHJcblxyXG4gIG1lbnU6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuY29sb3JMaWdodEdyYXl9YCxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGJveFNoYWRvdzogMCxcclxuICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgIG1hcmdpblRvcDogMCxcclxuICAgIHpJbmRleDogMyxcclxuICB9KSxcclxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgfSksXHJcbiAgbXVsdGlWYWx1ZUxhYmVsOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gICAgZmxleEJhc2lzOiAnZml0LWNvbnRlbnQnLFxyXG4gIH0pLFxyXG4gIG11bHRpVmFsdWVSZW1vdmU6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdFNlbGVjdGVkLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvckJ1dHRvbkhvdmVyLFxyXG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgICc6YWN0aXZlJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyB9LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkXHJcbiAgICAgID8gY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWRcclxuICAgICAgOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JTZWxlY3RIb3ZlciA6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBjb2xvcjogc3RhdGUuaXNEaXNhYmxlZFxyXG4gICAgICA/IGNvbG9ycy5jb2xvclRleHRcclxuICAgICAgOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmNvbG9yVGV4dCA6ICdpbmhlcml0JyxcclxuICAgIGRpc3BsYXk6IHN0YXRlLmRhdGEuaXNIaWRkZW4gJiYgIXN0YXRlLmRhdGEubWF0Y2ggPyAnbm9uZScgOiAnYmxvY2snLFxyXG4gICAgJzpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RIb3ZlciB9LFxyXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcclxuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxyXG4gIH0pLFxyXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgfSksXHJcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxyXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcclxuICAgICdtaW4taGVpZ2h0JzogaW5wdXRIZWlnaHQsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuY29uc3QgcG9ydGFsU3R5bGVzID0gKCkgPT4gKHtcclxuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gICAgfSxcclxuICB9KSxcclxuICBkcm9wZG93bkluZGljYXRvcjogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZzogJzAgMnB4IDAgMCcsXHJcbiAgfSksXHJcbiAgbWVudVBvcnRhbDogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIHpJbmRleDogOTk5OSxcclxuICB9KSxcclxufSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoaW5wdXRIZWlnaHQsIHBvcnRhbCA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgYmFzZVN0eWxlcyA9IG1haW5TdHlsZXMoaW5wdXRIZWlnaHQpO1xyXG4gIGlmIChwb3J0YWwpIHtcclxuICAgIHJldHVybiB7IC4uLmJhc2VTdHlsZXMsIC4uLnBvcnRhbFN0eWxlcygpIH07XHJcbiAgfVxyXG4gIHJldHVybiBiYXNlU3R5bGVzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xyXG4iXX0=