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
        color: colors.grey9,
        padding: 0,
        margin: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNvbG9ycyIsIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiaXNEaXNhYmxlZCIsIndoaXRlIiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJ5ZWxsb3ciLCJncmV5MyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1pbkhlaWdodCIsImlucHV0SGVpZ2h0IiwiYm94U2l6aW5nIiwib3V0bGluZSIsImZsZXhXcmFwIiwiZ3JvdXBIZWFkaW5nIiwiZm9udFdlaWdodCIsInBhZGRpbmdMZWZ0IiwiZ3V0dGVyV2lkdGgiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJkaXNwbGF5IiwiaW5wdXQiLCJjb2xvciIsImdyZXk5IiwicGFkZGluZyIsIm1hcmdpbiIsIm1lbnUiLCJib3JkZXIiLCJncmV5NiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInpJbmRleCIsIm1lbnVQb3J0YWwiLCJtZW51TGlzdCIsIm11bHRpVmFsdWVMYWJlbCIsImdyZXk1IiwibXVsdGlWYWx1ZVJlbW92ZSIsImdyZXk4IiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJncmV5NCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiZ3JvdXAiLCJzaW5nbGVWYWx1ZSIsInZhbHVlQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaGVpZ2h0IiwiY2xlYXJJbmRpY2F0b3IiLCJjdXJzb3IiLCJwYWRkaW5nUmlnaHQiLCJkcm9wZG93bkluZGljYXRvciIsInNlbGVjdFByb3BzIiwiaXNDbGVhcmFibGUiLCJoYXNWYWx1ZSIsIm1lcmdlU3R5bGVzIiwiYmFzZVN0eWxlcyIsImN1c3RvbVN0eWxlcyIsIm1lcmdlZFN0eWxlcyIsIk9iamVjdCIsImFz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InNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgdGhlbWUsIHsgY29sb3JzIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tdGhlbWUnO1xuXG4vLyBTdHlsZXMgc2hhcmVkIGJldHdlZW4gYm90aCBGbG9hdGluZ1NlbGVjdCBpbXBsZW1lbnRhdGlvbnNcbmNvbnN0IG1haW5TdHlsZXMgPSBpbnB1dEhlaWdodCA9PiAoe1xuICBjb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmlzRGlzYWJsZWQgPyAnI2VlZScgOiBjb2xvcnMud2hpdGUsXG4gICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy55ZWxsb3cgOiBjb2xvcnMuZ3JleTMsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy53aGl0ZX0sIDAgMCA4cHggJHtjb2xvcnMueWVsbG93fWAgOiAwLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy55ZWxsb3cgOiBjb2xvcnMuZ3JleTMsXG4gICAgfSxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgb3V0bGluZTogMCxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcbiAgZ3JvdXBIZWFkaW5nOiAoKSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuZ3V0dGVyV2lkdGgsXG4gIH0pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7IGRpc3BsYXk6ICdub25lJyB9KSxcbiAgaW5wdXQ6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgcGFkZGluZzogMCxcbiAgICBtYXJnaW46IDAsXG4gIH0pLFxuICBtZW51OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTZ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiAwLFxuICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgekluZGV4OiAzLFxuICB9KSxcbiAgbWVudVBvcnRhbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgekluZGV4OiA5OTk5LFxuICB9KSxcbiAgbWVudUxpc3Q6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0pLFxuICBtdWx0aVZhbHVlTGFiZWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk1LFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTUsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk4LFxuICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICB9LFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gIH0pLFxuICBvcHRpb246IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgICc6YWN0aXZlJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNTZWxlY3RlZFxuICAgICAgPyBjb2xvcnMuZ3JleTVcbiAgICAgIDogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmdyZXk0IDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogc3RhdGUuaXNEaXNhYmxlZFxuICAgICAgPyBjb2xvcnMuZ3JleTlcbiAgICAgIDogc3RhdGUuaXNTZWxlY3RlZCA/IGNvbG9ycy5ncmV5OSA6ICdpbmhlcml0JyxcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5NCB9LFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcbiAgfSksXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICB9KSxcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVycyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBpbmRpY2F0b3JzQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgaGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVycyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgIH0sXG4gICAgcGFkZGluZ1JpZ2h0OiAnMCcsXG4gIH0pLFxuICBkcm9wZG93bkluZGljYXRvcjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgIH0sXG4gICAgcGFkZGluZ0xlZnQ6IHN0YXRlLnNlbGVjdFByb3BzLmlzQ2xlYXJhYmxlICYmIHN0YXRlLmhhc1ZhbHVlID8gJzAnIDogJzhweCcsXG4gIH0pLFxufSk7XG5cbi8vIG1lcmdlIHN0eWxlIGZ1bmN0aW9ucyB3aXRoIGN1c3RvbVN0eWxlIGZ1bmN0aW9uc1xuY29uc3QgbWVyZ2VTdHlsZXMgPSAoYmFzZVN0eWxlcywgY3VzdG9tU3R5bGVzKSA9PiB7XG4gIGNvbnN0IG1lcmdlZFN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VTdHlsZXMpO1xuICBPYmplY3Qua2V5cyhjdXN0b21TdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChiYXNlU3R5bGVzW2tleV0pIHtcbiAgICAgIG1lcmdlZFN0eWxlc1trZXldID0gKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5iYXNlLFxuICAgICAgICAuLi5iYXNlU3R5bGVzW2tleV0oe30sIHN0YXRlKSxcbiAgICAgICAgLi4uY3VzdG9tU3R5bGVzW2tleV0oe30sIHN0YXRlKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZWRTdHlsZXNba2V5XSA9IGN1c3RvbVN0eWxlc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtZXJnZWRTdHlsZXM7XG59O1xuXG5jb25zdCBzdHlsZXMgPSAoaW5wdXRIZWlnaHQsIGN1c3RvbVN0eWxlcykgPT4ge1xuICBjb25zdCBiYXNlU3R5bGVzID0gbWFpblN0eWxlcyhpbnB1dEhlaWdodCk7XG4gIGlmIChjdXN0b21TdHlsZXMpIHtcbiAgICByZXR1cm4gbWVyZ2VTdHlsZXMoYmFzZVN0eWxlcywgY3VzdG9tU3R5bGVzKTtcbiAgfVxuICByZXR1cm4gYmFzZVN0eWxlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiJdfQ==