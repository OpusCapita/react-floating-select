var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-nested-ternary */
import theme, { colors } from '@opuscapita/oc-cm-theme';

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
        backgroundColor: state.isDisabled ? '#eee' : colors.white,
        borderColor: state.isFocused ? colors.yellow : colors.grey3,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + colors.white + ', 0 0 8px ' + colors.yellow : 0,
        '&:hover': {
          borderColor: state.isFocused ? colors.yellow : colors.grey3
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
        color: colors.grey9
      });
    },

    menu: function menu(base) {
      return _extends({}, base, {
        border: '1px solid ' + colors.grey6,
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
        backgroundColor: colors.grey5,
        borderRadius: 0,
        color: colors.grey9
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      return _extends({}, base, {
        backgroundColor: colors.grey5,
        borderRadius: 0,
        color: colors.grey9,
        ':hover': {
          backgroundColor: colors.grey8,
          color: colors.white
        },
        flex: '0 0 auto'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? colors.grey5 : state.isFocused ? colors.grey4 : 'transparent',
        color: state.isDisabled ? colors.grey9 : state.isSelected ? colors.grey9 : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: colors.grey4 },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
        paddingLeft: state.data.group ? '50px' : '12px'
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, {
        color: colors.grey9
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
        color: colors.grey9,
        ':hover': {
          color: colors.grey9
        }
      });
    },
    dropdownIndicator: function dropdownIndicator(base) {
      return _extends({}, base, {
        color: colors.grey9,
        ':hover': {
          color: colors.grey9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY29sb3JzIiwibWFpblN0eWxlcyIsImNvbnRhaW5lciIsImJhc2UiLCJsaW5lSGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiaXNEaXNhYmxlZCIsIndoaXRlIiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJ5ZWxsb3ciLCJncmV5MyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1pbkhlaWdodCIsImlucHV0SGVpZ2h0IiwiYm94U2l6aW5nIiwib3V0bGluZSIsImZsZXhXcmFwIiwiZ3JvdXBIZWFkaW5nIiwiZm9udFdlaWdodCIsInBhZGRpbmdMZWZ0IiwiZ3V0dGVyV2lkdGgiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJkaXNwbGF5IiwiaW5wdXQiLCJjb2xvciIsImdyZXk5IiwibWVudSIsImJvcmRlciIsImdyZXk2IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiZ3JleTUiLCJtdWx0aVZhbHVlUmVtb3ZlIiwiZ3JleTgiLCJmbGV4Iiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImdyZXk0IiwiZGF0YSIsImlzSGlkZGVuIiwibWF0Y2giLCJncm91cCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJvdmVyZmxvdyIsImluZGljYXRvcnNDb250YWluZXIiLCJoZWlnaHQiLCJjbGVhckluZGljYXRvciIsInBhZGRpbmdSaWdodCIsImRyb3Bkb3duSW5kaWNhdG9yIiwic2VsZWN0UHJvcHMiLCJpc0NsZWFyYWJsZSIsImhhc1ZhbHVlIiwicG9ydGFsU3R5bGVzIiwibWVudVBvcnRhbCIsInN0eWxlcyIsInBvcnRhbCIsImJhc2VTdHlsZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLElB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QUFtQjtBQUFBLDBCQUNkdEQsSUFEYztBQUVqQnlCLGVBQU81QixPQUFPNkIsS0FGRztBQUdqQixrQkFBVTtBQUNSRCxpQkFBTzVCLE9BQU82QjtBQUROLFNBSE87QUFNakJRLGlCQUFTO0FBTlE7QUFBQSxLQVRPO0FBaUIxQnlCLGdCQUFZO0FBQUEsMEJBQ1AzRCxJQURPO0FBRVZnQyxnQkFBUTtBQUZFO0FBQUE7QUFqQmMsR0FBUDtBQUFBLENBQXJCOztBQXVCQSxJQUFNNEIsU0FBUyxTQUFUQSxNQUFTLENBQUM5QyxXQUFELEVBQWlDO0FBQUEsTUFBbkIrQyxNQUFtQix1RUFBVixLQUFVOztBQUM5QyxNQUFNQyxhQUFhaEUsV0FBV2dCLFdBQVgsQ0FBbkI7QUFDQSxNQUFJK0MsTUFBSixFQUFZO0FBQ1Ysd0JBQVlDLFVBQVosRUFBMkJKLGNBQTNCO0FBQ0Q7QUFDRCxTQUFPSSxVQUFQO0FBQ0QsQ0FORDs7QUFRQSxlQUFlRixNQUFmIiwiZmlsZSI6InN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgdGhlbWUsIHsgY29sb3JzIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tdGhlbWUnO1xuXG4vLyBTdHlsZXMgc2hhcmVkIGJldHdlZW4gYm90aCBGbG9hdGluZ1NlbGVjdCBpbXBsZW1lbnRhdGlvbnNcbmNvbnN0IG1haW5TdHlsZXMgPSBpbnB1dEhlaWdodCA9PiAoe1xuICBjb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcblxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmlzRGlzYWJsZWQgPyAnI2VlZScgOiBjb2xvcnMud2hpdGUsXG4gICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy55ZWxsb3cgOiBjb2xvcnMuZ3JleTMsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy53aGl0ZX0sIDAgMCA4cHggJHtjb2xvcnMueWVsbG93fWAgOiAwLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy55ZWxsb3cgOiBjb2xvcnMuZ3JleTMsXG4gICAgfSxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgb3V0bGluZTogMCxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcblxuICBncm91cEhlYWRpbmc6ICgpID0+ICh7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5ndXR0ZXJXaWR0aCxcbiAgfSksXG5cbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXG5cbiAgaW5wdXQ6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuXG4gIG1lbnU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5Nn1gLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTUsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5NSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTgsXG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgIH0sXG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgfSksXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkXG4gICAgICA/IGNvbG9ycy5ncmV5NVxuICAgICAgOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuZ3JleTQgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkXG4gICAgICA/IGNvbG9ycy5ncmV5OVxuICAgICAgOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmdyZXk5IDogJ2luaGVyaXQnLFxuICAgIGRpc3BsYXk6IHN0YXRlLmRhdGEuaXNIaWRkZW4gJiYgIXN0YXRlLmRhdGEubWF0Y2ggPyAnbm9uZScgOiAnYmxvY2snLFxuICAgICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk0IH0sXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxuICB9KSxcbiAgc2luZ2xlVmFsdWU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuICB2YWx1ZUNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGluZGljYXRvcnNDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBoZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBwYWRkaW5nUmlnaHQ6ICcwJyxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuc2VsZWN0UHJvcHMuaXNDbGVhcmFibGUgJiYgc3RhdGUuaGFzVmFsdWUgPyAnMCcgOiAnOHB4JyxcbiAgfSksXG59KTtcblxuY29uc3QgcG9ydGFsU3R5bGVzID0gKCkgPT4gKHtcbiAgY2xlYXJJbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICB9LFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgfSxcbiAgICBwYWRkaW5nOiAnMCAycHggMCAwJyxcbiAgfSksXG4gIG1lbnVQb3J0YWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHpJbmRleDogOTk5OSxcbiAgfSksXG59KTtcblxuY29uc3Qgc3R5bGVzID0gKGlucHV0SGVpZ2h0LCBwb3J0YWwgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBiYXNlU3R5bGVzID0gbWFpblN0eWxlcyhpbnB1dEhlaWdodCk7XG4gIGlmIChwb3J0YWwpIHtcbiAgICByZXR1cm4geyAuLi5iYXNlU3R5bGVzLCAuLi5wb3J0YWxTdHlsZXMoKSB9O1xuICB9XG4gIHJldHVybiBiYXNlU3R5bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19