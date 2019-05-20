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
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.175)',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNvbG9ycyIsIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiaXNEaXNhYmxlZCIsIndoaXRlIiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJ5ZWxsb3ciLCJncmV5MyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1pbkhlaWdodCIsImlucHV0SGVpZ2h0IiwiYm94U2l6aW5nIiwib3V0bGluZSIsImZsZXhXcmFwIiwiZ3JvdXBIZWFkaW5nIiwiZm9udFdlaWdodCIsInBhZGRpbmdMZWZ0IiwiZ3V0dGVyV2lkdGgiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJkaXNwbGF5IiwiaW5wdXQiLCJjb2xvciIsImdyZXk5IiwicGFkZGluZyIsIm1hcmdpbiIsIm1lbnUiLCJib3JkZXIiLCJncmV5NiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInpJbmRleCIsIm1lbnVQb3J0YWwiLCJtZW51TGlzdCIsIm11bHRpVmFsdWVMYWJlbCIsImdyZXk1IiwibXVsdGlWYWx1ZVJlbW92ZSIsImdyZXk4IiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJncmV5NCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiZ3JvdXAiLCJzaW5nbGVWYWx1ZSIsInZhbHVlQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaGVpZ2h0IiwiY2xlYXJJbmRpY2F0b3IiLCJjdXJzb3IiLCJwYWRkaW5nUmlnaHQiLCJkcm9wZG93bkluZGljYXRvciIsInNlbGVjdFByb3BzIiwiaXNDbGVhcmFibGUiLCJoYXNWYWx1ZSIsIm1lcmdlU3R5bGVzIiwiYmFzZVN0eWxlcyIsImN1c3RvbVN0eWxlcyIsIm1lcmdlZFN0eWxlcyIsIk9iamVjdCIsImFz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LCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IHRoZW1lLCB7IGNvbG9ycyB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLXRoZW1lJztcblxuLy8gU3R5bGVzIHNoYXJlZCBiZXR3ZWVuIGJvdGggRmxvYXRpbmdTZWxlY3QgaW1wbGVtZW50YXRpb25zXG5jb25zdCBtYWluU3R5bGVzID0gaW5wdXRIZWlnaHQgPT4gKHtcbiAgY29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkID8gJyNlZWUnIDogY29sb3JzLndoaXRlLFxuICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMueWVsbG93IDogY29sb3JzLmdyZXkzLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IGBpbnNldCAwIDFweCAxcHggJHtjb2xvcnMud2hpdGV9LCAwIDAgOHB4ICR7Y29sb3JzLnllbGxvd31gIDogMCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMueWVsbG93IDogY29sb3JzLmdyZXkzLFxuICAgIH0sXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGdyb3VwSGVhZGluZzogKCkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLmd1dHRlcldpZHRoLFxuICB9KSxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXG4gIGlucHV0OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICB9KSxcbiAgbWVudTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXk2fWAsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogJzAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE3NSknLFxuICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgekluZGV4OiAzLFxuICB9KSxcbiAgbWVudVBvcnRhbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgekluZGV4OiA5OTk5LFxuICB9KSxcbiAgbWVudUxpc3Q6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0pLFxuICBtdWx0aVZhbHVlTGFiZWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk1LFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTUsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk4LFxuICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICB9LFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gIH0pLFxuICBvcHRpb246IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgICc6YWN0aXZlJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNTZWxlY3RlZFxuICAgICAgPyBjb2xvcnMuZ3JleTVcbiAgICAgIDogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmdyZXk0IDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogc3RhdGUuaXNEaXNhYmxlZFxuICAgICAgPyBjb2xvcnMuZ3JleTlcbiAgICAgIDogc3RhdGUuaXNTZWxlY3RlZCA/IGNvbG9ycy5ncmV5OSA6ICdpbmhlcml0JyxcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5NCB9LFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcbiAgfSksXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICB9KSxcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVycyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBpbmRpY2F0b3JzQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgaGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVycyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgIH0sXG4gICAgcGFkZGluZ1JpZ2h0OiAnMCcsXG4gIH0pLFxuICBkcm9wZG93bkluZGljYXRvcjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgIH0sXG4gICAgcGFkZGluZ0xlZnQ6IHN0YXRlLnNlbGVjdFByb3BzLmlzQ2xlYXJhYmxlICYmIHN0YXRlLmhhc1ZhbHVlID8gJzAnIDogJzhweCcsXG4gIH0pLFxufSk7XG5cbi8vIG1lcmdlIHN0eWxlIGZ1bmN0aW9ucyB3aXRoIGN1c3RvbVN0eWxlIGZ1bmN0aW9uc1xuY29uc3QgbWVyZ2VTdHlsZXMgPSAoYmFzZVN0eWxlcywgY3VzdG9tU3R5bGVzKSA9PiB7XG4gIGNvbnN0IG1lcmdlZFN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VTdHlsZXMpO1xuICBPYmplY3Qua2V5cyhjdXN0b21TdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChiYXNlU3R5bGVzW2tleV0pIHtcbiAgICAgIG1lcmdlZFN0eWxlc1trZXldID0gKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5iYXNlLFxuICAgICAgICAuLi5iYXNlU3R5bGVzW2tleV0oe30sIHN0YXRlKSxcbiAgICAgICAgLi4uY3VzdG9tU3R5bGVzW2tleV0oe30sIHN0YXRlKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZWRTdHlsZXNba2V5XSA9IGN1c3RvbVN0eWxlc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtZXJnZWRTdHlsZXM7XG59O1xuXG5jb25zdCBzdHlsZXMgPSAoaW5wdXRIZWlnaHQsIGN1c3RvbVN0eWxlcykgPT4ge1xuICBjb25zdCBiYXNlU3R5bGVzID0gbWFpblN0eWxlcyhpbnB1dEhlaWdodCk7XG4gIGlmIChjdXN0b21TdHlsZXMpIHtcbiAgICByZXR1cm4gbWVyZ2VTdHlsZXMoYmFzZVN0eWxlcywgY3VzdG9tU3R5bGVzKTtcbiAgfVxuICByZXR1cm4gYmFzZVN0eWxlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiJdfQ==