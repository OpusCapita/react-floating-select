var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-nested-ternary */
import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

// Styles shared between both FloatingSelect implementations
var mainStyles = function mainStyles(inputHeight) {
  return {
    container: function container(base) {
      return _extends({}, base, {
        lineHeight: 'normal'
      });
    },

    control: function control(base, state) {
      return _extends({}, base, {
        backgroundColor: colors.colorWhite,
        borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + colors.colorWhite + ', 0 0 8px ' + colors.colorPseudoFocused : 0,
        '&:hover': {
          borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray
        },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
        boxSizing: 'border-box',
        outline: 0,
        flexWrap: 'no-wrap',
        lineHeight: 'normal'
      });
    },

    groupHeading: function groupHeading() {
      return {
        fontWeight: 'bold',
        paddingLeft: theme.gutterWidth
      };
    },

    indicatorSeparator: function indicatorSeparator() {
      return { display: 'none' };
    },

    input: function input(base) {
      return _extends({}, base, {
        color: colors.colorText
      });
    },

    menu: function menu(base) {
      return _extends({}, base, {
        border: '1px solid ' + colors.colorLightGray,
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
        backgroundColor: colors.colorSelectSelected,
        borderRadius: 0,
        color: colors.colorText
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      return _extends({}, base, {
        backgroundColor: colors.colorSelectSelected,
        borderRadius: 0,
        color: colors.colorText,
        ':hover': {
          backgroundColor: colors.colorButtonHover,
          color: colors.colorWhite
        },
        flex: '0 0 auto'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? colors.colorSelectSelected : state.isFocused ? colors.colorSelectHover : 'transparent',
        color: state.isDisabled ? colors.colorText : state.isSelected ? colors.colorText : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: colors.colorSelectHover },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
        paddingLeft: state.data.group ? '50px' : '12px'
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, {
        color: colors.colorText
      });
    },
    valueContainer: function valueContainer(base) {
      return _extends({}, base, {
        display: 'flex',
        flex: '1 1 auto',
        flexWrap: 'wrap',
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders,
        boxSizing: 'border-box',
        overflow: 'hidden',
        lineHeight: 'normal'
      });
    },
    indicatorsContainer: function indicatorsContainer(base) {
      return _extends({}, base, {
        flex: '0 0 auto',
        flexWrap: 'no-wrap',
        height: 'calc(' + inputHeight + ' - 2px)', // 1px borders,
        boxSizing: 'border-box',
        overflow: 'hidden',
        lineHeight: 'normal'
      });
    },
    clearIndicator: function clearIndicator(base) {
      return _extends({}, base, {
        paddingRight: '0'
      });
    },
    dropdownIndicator: function dropdownIndicator(base, state) {
      return _extends({}, base, {
        paddingLeft: state.selectProps.isClearable && state.hasValue ? '0' : '8px'
      });
    }
  };
};

var portalStyles = function portalStyles() {
  return {
    clearIndicator: function clearIndicator(base) {
      return _extends({}, base, {
        padding: 0,
        color: colors.colorText,
        ':hover': {
          color: colors.colorText
        }
      });
    },
    dropdownIndicator: function dropdownIndicator(base) {
      return _extends({}, base, {
        color: colors.colorText,
        ':hover': {
          color: colors.colorText
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

export default styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRoZW1lIiwibWFpblN0eWxlcyIsImNvbnRhaW5lciIsImJhc2UiLCJsaW5lSGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JXaGl0ZSIsImJvcmRlckNvbG9yIiwiaXNGb2N1c2VkIiwiY29sb3JQc2V1ZG9Gb2N1c2VkIiwiY29sb3JMaWdodEdyYXkiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtaW5IZWlnaHQiLCJpbnB1dEhlaWdodCIsImJveFNpemluZyIsIm91dGxpbmUiLCJmbGV4V3JhcCIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJjb2xvclNlbGVjdEhvdmVyIiwiaXNEaXNhYmxlZCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiZ3JvdXAiLCJzaW5nbGVWYWx1ZSIsInZhbHVlQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaGVpZ2h0IiwiY2xlYXJJbmRpY2F0b3IiLCJwYWRkaW5nUmlnaHQiLCJkcm9wZG93bkluZGljYXRvciIsInNlbGVjdFByb3BzIiwiaXNDbGVhcmFibGUiLCJoYXNWYWx1ZSIsInBvcnRhbFN0eWxlcyIsIm1lbnVQb3J0YWwiLCJzdHlsZXMiLCJw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QUFDUkQsaUJBQU81QixPQUFPNkI7QUFETjtBQUpJO0FBQUEsS0FEVTtBQVMxQjRCLHVCQUFtQjtBQUFBLDBCQUNkckQsSUFEYztBQUVqQndCLGVBQU81QixPQUFPNkIsU0FGRztBQUdqQixrQkFBVTtBQUNSRCxpQkFBTzVCLE9BQU82QjtBQUROLFNBSE87QUFNakJPLGlCQUFTO0FBTlE7QUFBQSxLQVRPO0FBaUIxQjBCLGdCQUFZO0FBQUEsMEJBQ1AxRCxJQURPO0FBRVY4QixnQkFBUTtBQUZFO0FBQUE7QUFqQmMsR0FBUDtBQUFBLENBQXJCOztBQXVCQSxJQUFNNkIsU0FBUyxTQUFUQSxNQUFTLENBQUM5QyxXQUFELEVBQWlDO0FBQUEsTUFBbkIrQyxNQUFtQix1RUFBVixLQUFVOztBQUM5QyxNQUFNQyxhQUFhL0QsV0FBV2UsV0FBWCxDQUFuQjtBQUNBLE1BQUkrQyxNQUFKLEVBQVk7QUFDVix3QkFBWUMsVUFBWixFQUEyQkosY0FBM0I7QUFDRDtBQUNELFNBQU9JLFVBQVA7QUFDRCxDQU5EOztBQVFBLGVBQWVGLE1BQWYiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCBjb2xvcnMgZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLXN0eWxlcy9zdHlsZXMvX2NvbG9ycy5zY3NzJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG4vLyBTdHlsZXMgc2hhcmVkIGJldHdlZW4gYm90aCBGbG9hdGluZ1NlbGVjdCBpbXBsZW1lbnRhdGlvbnNcbmNvbnN0IG1haW5TdHlsZXMgPSBpbnB1dEhlaWdodCA9PiAoe1xuICBjb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcblxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvcldoaXRlLFxuICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkIDogY29sb3JzLmNvbG9yTGlnaHRHcmF5LFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IGBpbnNldCAwIDFweCAxcHggJHtjb2xvcnMuY29sb3JXaGl0ZX0sIDAgMCA4cHggJHtjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkfWAgOiAwLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgfSxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgb3V0bGluZTogMCxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcblxuICBncm91cEhlYWRpbmc6ICgpID0+ICh7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5ndXR0ZXJXaWR0aCxcbiAgfSksXG5cbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXG5cbiAgaW5wdXQ6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICB9KSxcblxuICBtZW51OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuY29sb3JMaWdodEdyYXl9YCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiAwLFxuICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgekluZGV4OiAzLFxuICB9KSxcbiAgbWVudUxpc3Q6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0pLFxuICBtdWx0aVZhbHVlTGFiZWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yQnV0dG9uSG92ZXIsXG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgfSxcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICB9KSxcbiAgb3B0aW9uOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICAnOmFjdGl2ZSc6IHsgYmFja2dyb3VuZENvbG9yOiAnbm9uZScgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmlzU2VsZWN0ZWRcbiAgICAgID8gY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWRcbiAgICAgIDogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmNvbG9yU2VsZWN0SG92ZXIgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkXG4gICAgICA/IGNvbG9ycy5jb2xvclRleHRcbiAgICAgIDogc3RhdGUuaXNTZWxlY3RlZCA/IGNvbG9ycy5jb2xvclRleHQgOiAnaW5oZXJpdCcsXG4gICAgZGlzcGxheTogc3RhdGUuZGF0YS5pc0hpZGRlbiAmJiAhc3RhdGUuZGF0YS5tYXRjaCA/ICdub25lJyA6ICdibG9jaycsXG4gICAgJzpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RIb3ZlciB9LFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcbiAgfSksXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgfSksXG4gIHZhbHVlQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnMsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcbiAgaW5kaWNhdG9yc0NvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnMsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcbiAgY2xlYXJJbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmdSaWdodDogJzAnLFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5zZWxlY3RQcm9wcy5pc0NsZWFyYWJsZSAmJiBzdGF0ZS5oYXNWYWx1ZSA/ICcwJyA6ICc4cHgnLFxuICB9KSxcbn0pO1xuXG5jb25zdCBwb3J0YWxTdHlsZXMgPSAoKSA9PiAoe1xuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgfSxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgfSxcbiAgICBwYWRkaW5nOiAnMCAycHggMCAwJyxcbiAgfSksXG4gIG1lbnVQb3J0YWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHpJbmRleDogOTk5OSxcbiAgfSksXG59KTtcblxuY29uc3Qgc3R5bGVzID0gKGlucHV0SGVpZ2h0LCBwb3J0YWwgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBiYXNlU3R5bGVzID0gbWFpblN0eWxlcyhpbnB1dEhlaWdodCk7XG4gIGlmIChwb3J0YWwpIHtcbiAgICByZXR1cm4geyAuLi5iYXNlU3R5bGVzLCAuLi5wb3J0YWxTdHlsZXMoKSB9O1xuICB9XG4gIHJldHVybiBiYXNlU3R5bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19