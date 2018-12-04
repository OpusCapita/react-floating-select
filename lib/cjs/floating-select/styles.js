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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwiaGVpZ2h0IiwiaW5wdXRIZWlnaHQiLCJjb250cm9sIiwic3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJjb2xvcldoaXRlIiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJjb2xvclBzZXVkb0ZvY3VzZWQiLCJjb2xvckxpZ2h0R3JheSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1pbkhlaWdodCIsIm91dGxpbmUiLCJncm91cEhlYWRpbmciLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsImZsZXhCYXNpcyIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImNvbG9yU2VsZWN0SG92ZXIiLCJpc0Rpc2FibGVkIiwiZGF0YSIsImlzSGlkZGVuIiwibWF0Y2giLCJncm91cCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJmbGV4V3JhcCIsIm92ZXJmbG93IiwicG9ydGFsU3R5bGVzIiwiY2xlYXJJbmRpY2F0b3IiLCJkcm9wZG93bkluZGljYXRvciIsIm1lbnVQb3J0YWwiLCJzdHlsZXMiLCJwb3J0YWwiLCJiYXNlU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7O2tRQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWE7QUFB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S0E1RW9CO0FBZ0ZqQ3NCLG9CQUFnQjtBQUFBLDBCQUNYL0MsSUFEVztBQUVkc0IsaUJBQVMsTUFGSztBQUdkMEIsa0JBQVUsU0FISTtBQUlkL0MsZ0JBQVFDLFdBSk07QUFLZCxzQkFBY0EsV0FMQTtBQU1kK0Msa0JBQVU7QUFOSTtBQUFBO0FBaEZpQixHQUFoQjtBQUFBLENBQW5COztBQTBGQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxvQkFBZ0I7QUFBQSwwQkFDWG5ELElBRFc7QUFFZGdDLGlCQUFTLENBRks7QUFHZFIsZUFBT2xCLGlCQUFPbUIsU0FIQTtBQUlkLGtCQUFVO0FBQ1JELGlCQUFPbEIsaUJBQU9tQjtBQUROO0FBSkk7QUFBQSxLQURVO0FBUzFCMkIsdUJBQW1CO0FBQUEsMEJBQ2RwRCxJQURjO0FBRWpCd0IsZUFBT2xCLGlCQUFPbUIsU0FGRztBQUdqQixrQkFBVTtBQUNSRCxpQkFBT2xCLGlCQUFPbUI7QUFETixTQUhPO0FBTWpCTyxpQkFBUztBQU5RO0FBQUEsS0FUTztBQWlCMUJxQixnQkFBWTtBQUFBLDBCQUNQckQsSUFETztBQUVWOEIsZ0JBQVE7QUFGRTtBQUFBO0FBakJjLEdBQVA7QUFBQSxDQUFyQjs7QUF1QkEsSUFBTXdCLFNBQVMsU0FBVEEsTUFBUyxDQUFDcEQsV0FBRCxFQUFpQztBQUFBLE1BQW5CcUQsTUFBbUIsdUVBQVYsS0FBVTs7QUFDOUMsTUFBTUMsYUFBYTFELFdBQVdJLFdBQVgsQ0FBbkI7QUFDQSxNQUFJcUQsTUFBSixFQUFZO0FBQ1Ysd0JBQVlDLFVBQVosRUFBMkJOLGNBQTNCO0FBQ0Q7QUFDRCxTQUFPTSxVQUFQO0FBQ0QsQ0FORDs7a0JBUWVGLE0iLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCBjb2xvcnMgZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLXN0eWxlcy9zdHlsZXMvX2NvbG9ycy5zY3NzJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG4vLyBTdHlsZXMgc2hhcmVkIGJldHdlZW4gYm90aCBGbG9hdGluZ1NlbGVjdCBpbXBsZW1lbnRhdGlvbnNcbmNvbnN0IG1haW5TdHlsZXMgPSBpbnB1dEhlaWdodCA9PiAoe1xuICBjb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGhlaWdodDogaW5wdXRIZWlnaHQsXG4gIH0pLFxuXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy5jb2xvcldoaXRlfSwgMCAwIDhweCAke2NvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWR9YCA6IDAsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkIDogY29sb3JzLmNvbG9yTGlnaHRHcmF5LFxuICAgIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBvdXRsaW5lOiAwLFxuICB9KSxcblxuICBncm91cEhlYWRpbmc6ICgpID0+ICh7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5ndXR0ZXJXaWR0aCxcbiAgfSksXG5cbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXG5cbiAgaW5wdXQ6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICB9KSxcblxuICBtZW51OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuY29sb3JMaWdodEdyYXl9YCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiAwLFxuICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgekluZGV4OiAzLFxuICB9KSxcbiAgbWVudUxpc3Q6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0pLFxuICBtdWx0aVZhbHVlTGFiZWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgIGZsZXhCYXNpczogJ2ZpdC1jb250ZW50JyxcbiAgfSksXG4gIG11bHRpVmFsdWVSZW1vdmU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvckJ1dHRvbkhvdmVyLFxuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvcldoaXRlLFxuICAgIH0sXG4gIH0pLFxuICBvcHRpb246IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgICc6YWN0aXZlJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNTZWxlY3RlZFxuICAgICAgPyBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZFxuICAgICAgOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JTZWxlY3RIb3ZlciA6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IHN0YXRlLmlzRGlzYWJsZWRcbiAgICAgID8gY29sb3JzLmNvbG9yVGV4dFxuICAgICAgOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmNvbG9yVGV4dCA6ICdpbmhlcml0JyxcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdEhvdmVyIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcbiAgfSksXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgfSksXG4gIHZhbHVlQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBoZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgICdtaW4taGVpZ2h0JzogaW5wdXRIZWlnaHQsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9KSxcbn0pO1xuXG5jb25zdCBwb3J0YWxTdHlsZXMgPSAoKSA9PiAoe1xuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgfSxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgfSxcbiAgICBwYWRkaW5nOiAnMCAycHggMCAwJyxcbiAgfSksXG4gIG1lbnVQb3J0YWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHpJbmRleDogOTk5OSxcbiAgfSksXG59KTtcblxuY29uc3Qgc3R5bGVzID0gKGlucHV0SGVpZ2h0LCBwb3J0YWwgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBiYXNlU3R5bGVzID0gbWFpblN0eWxlcyhpbnB1dEhlaWdodCk7XG4gIGlmIChwb3J0YWwpIHtcbiAgICByZXR1cm4geyAuLi5iYXNlU3R5bGVzLCAuLi5wb3J0YWxTdHlsZXMoKSB9O1xuICB9XG4gIHJldHVybiBiYXNlU3R5bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19