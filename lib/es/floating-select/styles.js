var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

// Styles shared between both FloatingSelect implementations
var mainStyles = function mainStyles(inputHeight) {
  return {
    container: function container(base) {
      return _extends({}, base, { height: inputHeight });
    },

    control: function control(base, state) {
      return _extends({}, base, {
        backgroundColor: colors.colorWhite,
        borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + colors.colorWhite + ', 0 0 8px ' + colors.colorPseudoFocused : 0,
        height: inputHeight,
        '&:hover': {
          borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray
        },
        minHeight: inputHeight,
        outline: 0
      });
    },

    groupHeading: function groupHeading() {
      return { fontWeight: 'bold', paddingLeft: theme.gutterWidth };
    },

    indicatorSeparator: function indicatorSeparator() {
      return { display: 'none' };
    },

    input: function input(base) {
      return _extends({}, base, { color: colors.colorText });
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
      return _extends({}, base, { padding: 0 });
    },
    multiValueLabel: function multiValueLabel(base) {
      return _extends({}, base, {
        backgroundColor: colors.colorSelectSelected,
        borderRadius: 0,
        color: colors.colorText,
        flexBasis: 'fit-content'
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
        }
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? colors.colorSelectSelected : colors.colorWhite,
        color: colors.colorText,
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: colors.colorSelectHover },
        minHeight: inputHeight,
        paddingLeft: state.data.group ? '50px' : '12px'
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, { color: colors.colorText });
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
      return _extends({}, base, { zIndex: 9999 });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRoZW1lIiwibWFpblN0eWxlcyIsImNvbnRhaW5lciIsImJhc2UiLCJoZWlnaHQiLCJpbnB1dEhlaWdodCIsImNvbnRyb2wiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yV2hpdGUiLCJib3JkZXJDb2xvciIsImlzRm9jdXNlZCIsImNvbG9yUHNldWRvRm9jdXNlZCIsImNvbG9yTGlnaHRHcmF5IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWluSGVpZ2h0Iiwib3V0bGluZSIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsImZsZXhCYXNpcyIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiY29sb3JTZWxlY3RIb3ZlciIsImdyb3VwIiwic2luZ2xlVmFsdWUiLCJ2YWx1ZUNvbnRhaW5lciIsImZsZXhXcmFwIiwib3ZlcmZsb3ciLCJwb3J0YWxTdHlsZXMiLCJjbGVhckluZGljYXRvciIsImRyb3Bkb3duSW5kaWNhdG9yIiwibWVudVBvcnRhbCIsInN0eWxlcyIsInBvcnRhbCIsImJhc2VTdHlsZXMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixxREFBbkI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0Qjs7QUFFQTtBQUNBLElBQU1D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QUtkLHNCQUFjQSxXQUxBO0FBTWQ0QyxrQkFBVTtBQU5JO0FBQUE7QUE3RGlCLEdBQWhCO0FBQUEsQ0FBbkI7O0FBdUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQU87QUFDMUJDLG9CQUFnQjtBQUFBLDBCQUNYaEQsSUFEVztBQUVkOEIsaUJBQVMsQ0FGSztBQUdkUixlQUFPMUIsT0FBTzJCLFNBSEE7QUFJZCxrQkFBVTtBQUNSRCxpQkFBTzFCLE9BQU8yQjtBQUROO0FBSkk7QUFBQSxLQURVO0FBUzFCMEIsdUJBQW1CO0FBQUEsMEJBQ2RqRCxJQURjO0FBRWpCc0IsZUFBTzFCLE9BQU8yQixTQUZHO0FBR2pCLGtCQUFVO0FBQ1JELGlCQUFPMUIsT0FBTzJCO0FBRE4sU0FITztBQU1qQk8saUJBQVM7QUFOUTtBQUFBLEtBVE87QUFpQjFCb0IsZ0JBQVk7QUFBQSwwQkFBY2xELElBQWQsSUFBb0I0QixRQUFRLElBQTVCO0FBQUE7QUFqQmMsR0FBUDtBQUFBLENBQXJCOztBQW9CQSxJQUFNdUIsU0FBUyxTQUFUQSxNQUFTLENBQUNqRCxXQUFELEVBQWlDO0FBQUEsTUFBbkJrRCxNQUFtQix1RUFBVixLQUFVOztBQUM5QyxNQUFNQyxhQUFhdkQsV0FBV0ksV0FBWCxDQUFuQjtBQUNBLE1BQUlrRCxNQUFKLEVBQVk7QUFDVix3QkFBWUMsVUFBWixFQUEyQk4sY0FBM0I7QUFDRDtBQUNELFNBQU9NLFVBQVA7QUFDRCxDQU5EOztBQVFBLGVBQWVGLE1BQWYiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tc3R5bGVzL3N0eWxlcy9fY29sb3JzLnNjc3MnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbi8vIFN0eWxlcyBzaGFyZWQgYmV0d2VlbiBib3RoIEZsb2F0aW5nU2VsZWN0IGltcGxlbWVudGF0aW9uc1xuY29uc3QgbWFpblN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoeyAuLi5iYXNlLCBoZWlnaHQ6IGlucHV0SGVpZ2h0IH0pLFxuXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy5jb2xvcldoaXRlfSwgMCAwIDhweCAke2NvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWR9YCA6IDAsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkIDogY29sb3JzLmNvbG9yTGlnaHRHcmF5LFxuICAgIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBvdXRsaW5lOiAwLFxuICB9KSxcblxuICBncm91cEhlYWRpbmc6ICgpID0+ICh7IGZvbnRXZWlnaHQ6ICdib2xkJywgcGFkZGluZ0xlZnQ6IHRoZW1lLmd1dHRlcldpZHRoIH0pLFxuXG4gIGluZGljYXRvclNlcGFyYXRvcjogKCkgPT4gKHsgZGlzcGxheTogJ25vbmUnIH0pLFxuXG4gIGlucHV0OiBiYXNlID0+ICh7IC4uLmJhc2UsIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0IH0pLFxuXG4gIG1lbnU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5jb2xvckxpZ2h0R3JheX1gLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoeyAuLi5iYXNlLCBwYWRkaW5nOiAwIH0pLFxuICBtdWx0aVZhbHVlTGFiZWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgIGZsZXhCYXNpczogJ2ZpdC1jb250ZW50JyxcbiAgfSksXG4gIG11bHRpVmFsdWVSZW1vdmU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvckJ1dHRvbkhvdmVyLFxuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvcldoaXRlLFxuICAgIH0sXG4gIH0pLFxuICBvcHRpb246IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgICc6YWN0aXZlJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNTZWxlY3RlZCA/IGNvbG9ycy5jb2xvclNlbGVjdFNlbGVjdGVkIDogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgZGlzcGxheTogc3RhdGUuZGF0YS5pc0hpZGRlbiAmJiAhc3RhdGUuZGF0YS5tYXRjaCA/ICdub25lJyA6ICdibG9jaycsXG4gICAgJzpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RIb3ZlciB9LFxuICAgIG1pbkhlaWdodDogaW5wdXRIZWlnaHQsXG4gICAgcGFkZGluZ0xlZnQ6IHN0YXRlLmRhdGEuZ3JvdXAgPyAnNTBweCcgOiAnMTJweCcsXG4gIH0pLFxuICBzaW5nbGVWYWx1ZTogYmFzZSA9PiAoeyAuLi5iYXNlLCBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCB9KSxcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGhlaWdodDogaW5wdXRIZWlnaHQsXG4gICAgJ21pbi1oZWlnaHQnOiBpbnB1dEhlaWdodCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0pLFxufSk7XG5cbmNvbnN0IHBvcnRhbFN0eWxlcyA9ICgpID0+ICh7XG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICAgIHBhZGRpbmc6ICcwIDJweCAwIDAnLFxuICB9KSxcbiAgbWVudVBvcnRhbDogYmFzZSA9PiAoeyAuLi5iYXNlLCB6SW5kZXg6IDk5OTkgfSksXG59KTtcblxuY29uc3Qgc3R5bGVzID0gKGlucHV0SGVpZ2h0LCBwb3J0YWwgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBiYXNlU3R5bGVzID0gbWFpblN0eWxlcyhpbnB1dEhlaWdodCk7XG4gIGlmIChwb3J0YWwpIHtcbiAgICByZXR1cm4geyAuLi5iYXNlU3R5bGVzLCAuLi5wb3J0YWxTdHlsZXMoKSB9O1xuICB9XG4gIHJldHVybiBiYXNlU3R5bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19