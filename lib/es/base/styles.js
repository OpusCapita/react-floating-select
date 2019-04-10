var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-nested-ternary */
import theme, { colors } from '@opuscapita/oc-cm-theme';

// Styles shared between both FloatingSelect implementations
var mainStyles = function mainStyles(inputHeight) {
  return {
    container: function container(base) {
      return _extends({}, base, {
        width: '100%',
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
    menuPortal: function menuPortal(base) {
      return _extends({}, base, {
        zIndex: 9999
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
        color: colors.grey9,
        ':hover': {
          cursor: 'pointer',
          color: colors.grey9
        },
        paddingRight: '0'
      });
    },
    dropdownIndicator: function dropdownIndicator(base, state) {
      return _extends({}, base, {
        color: colors.grey9,
        ':hover': {
          cursor: 'pointer',
          color: colors.grey9
        },
        paddingLeft: state.selectProps.isClearable && state.hasValue ? '0' : '8px'
      });
    }
  };
};

// merge style functions with customStyle functions
var mergeStyles = function mergeStyles(baseStyles, customStyles) {
  var mergedStyles = Object.assign({}, baseStyles);
  Object.keys(customStyles).forEach(function (key) {
    if (baseStyles[key]) {
      mergedStyles[key] = function (base, state) {
        return _extends({}, base, baseStyles[key]({}, state), customStyles[key]({}, state));
      };
    } else {
      mergedStyles[key] = customStyles[key];
    }
  });
  return mergedStyles;
};

var styles = function styles(inputHeight, customStyles) {
  var baseStyles = mainStyles(inputHeight);
  if (customStyles) {
    return mergeStyles(baseStyles, customStyles);
  }
  return baseStyles;
};

export default styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNvbG9ycyIsIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiaXNEaXNhYmxlZCIsIndoaXRlIiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJ5ZWxsb3ciLCJncmV5MyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1pbkhlaWdodCIsImlucHV0SGVpZ2h0IiwiYm94U2l6aW5nIiwib3V0bGluZSIsImZsZXhXcmFwIiwiZ3JvdXBIZWFkaW5nIiwiZm9udFdlaWdodCIsInBhZGRpbmdMZWZ0IiwiZ3V0dGVyV2lkdGgiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJkaXNwbGF5IiwiaW5wdXQiLCJjb2xvciIsImdyZXk5IiwibWVudSIsImJvcmRlciIsImdyZXk2IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudVBvcnRhbCIsIm1lbnVMaXN0IiwicGFkZGluZyIsIm11bHRpVmFsdWVMYWJlbCIsImdyZXk1IiwibXVsdGlWYWx1ZVJlbW92ZSIsImdyZXk4IiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJncmV5NCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiZ3JvdXAiLCJzaW5nbGVWYWx1ZSIsInZhbHVlQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaGVpZ2h0IiwiY2xlYXJJbmRpY2F0b3IiLCJjdXJzb3IiLCJwYWRkaW5nUmlnaHQiLCJkcm9wZG93bkluZGljYXRvciIsInNlbGVjdFByb3BzIiwiaXNDbGVhcmFibGUiLCJoYXNWYWx1ZSIsIm1lcmdlU3R5bGVzIiwiYmFzZVN0eWxlcyIsImN1c3RvbVN0eWxlcyIsIm1lcmdlZFN0eWxlcyIsIk9iamVjdCIsImFzc2lnbiIsImtl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dGVkLXRlcm5hcnkgKi9cbmltcG9ydCB0aGVtZSwgeyBjb2xvcnMgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS10aGVtZSc7XG5cbi8vIFN0eWxlcyBzaGFyZWQgYmV0d2VlbiBib3RoIEZsb2F0aW5nU2VsZWN0IGltcGxlbWVudGF0aW9uc1xuY29uc3QgbWFpblN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNEaXNhYmxlZCA/ICcjZWVlJyA6IGNvbG9ycy53aGl0ZSxcbiAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLnllbGxvdyA6IGNvbG9ycy5ncmV5MyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBgaW5zZXQgMCAxcHggMXB4ICR7Y29sb3JzLndoaXRlfSwgMCAwIDhweCAke2NvbG9ycy55ZWxsb3d9YCA6IDAsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLnllbGxvdyA6IGNvbG9ycy5ncmV5MyxcbiAgICB9LFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBncm91cEhlYWRpbmc6ICgpID0+ICh7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5ndXR0ZXJXaWR0aCxcbiAgfSksXG4gIGluZGljYXRvclNlcGFyYXRvcjogKCkgPT4gKHsgZGlzcGxheTogJ25vbmUnIH0pLFxuICBpbnB1dDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgfSksXG4gIG1lbnU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5Nn1gLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51UG9ydGFsOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICB6SW5kZXg6IDk5OTksXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTUsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5NSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTgsXG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgIH0sXG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgfSksXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkXG4gICAgICA/IGNvbG9ycy5ncmV5NVxuICAgICAgOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuZ3JleTQgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkXG4gICAgICA/IGNvbG9ycy5ncmV5OVxuICAgICAgOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmdyZXk5IDogJ2luaGVyaXQnLFxuICAgIGRpc3BsYXk6IHN0YXRlLmRhdGEuaXNIaWRkZW4gJiYgIXN0YXRlLmRhdGEubWF0Y2ggPyAnbm9uZScgOiAnYmxvY2snLFxuICAgICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk0IH0sXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxuICB9KSxcbiAgc2luZ2xlVmFsdWU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuICB2YWx1ZUNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGluZGljYXRvcnNDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBoZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgfSxcbiAgICBwYWRkaW5nUmlnaHQ6ICcwJyxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgfSxcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuc2VsZWN0UHJvcHMuaXNDbGVhcmFibGUgJiYgc3RhdGUuaGFzVmFsdWUgPyAnMCcgOiAnOHB4JyxcbiAgfSksXG59KTtcblxuLy8gbWVyZ2Ugc3R5bGUgZnVuY3Rpb25zIHdpdGggY3VzdG9tU3R5bGUgZnVuY3Rpb25zXG5jb25zdCBtZXJnZVN0eWxlcyA9IChiYXNlU3R5bGVzLCBjdXN0b21TdHlsZXMpID0+IHtcbiAgY29uc3QgbWVyZ2VkU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZVN0eWxlcyk7XG4gIE9iamVjdC5rZXlzKGN1c3RvbVN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGJhc2VTdHlsZXNba2V5XSkge1xuICAgICAgbWVyZ2VkU3R5bGVzW2tleV0gPSAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIC4uLmJhc2VTdHlsZXNba2V5XSh7fSwgc3RhdGUpLFxuICAgICAgICAuLi5jdXN0b21TdHlsZXNba2V5XSh7fSwgc3RhdGUpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlZFN0eWxlc1trZXldID0gY3VzdG9tU3R5bGVzW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1lcmdlZFN0eWxlcztcbn07XG5cbmNvbnN0IHN0eWxlcyA9IChpbnB1dEhlaWdodCwgY3VzdG9tU3R5bGVzKSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZXMgPSBtYWluU3R5bGVzKGlucHV0SGVpZ2h0KTtcbiAgaWYgKGN1c3RvbVN0eWxlcykge1xuICAgIHJldHVybiBtZXJnZVN0eWxlcyhiYXNlU3R5bGVzLCBjdXN0b21TdHlsZXMpO1xuICB9XG4gIHJldHVybiBiYXNlU3R5bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19