'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-nested-ternary */


var _ocCmTheme = require('@opuscapita/oc-cm-theme');

var _ocCmTheme2 = _interopRequireDefault(_ocCmTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        backgroundColor: state.isDisabled ? '#eee' : _ocCmTheme.colors.white,
        borderColor: state.isFocused ? _ocCmTheme.colors.yellow : _ocCmTheme.colors.grey3,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + _ocCmTheme.colors.white + ', 0 0 8px ' + _ocCmTheme.colors.yellow : 0,
        '&:hover': {
          borderColor: state.isFocused ? _ocCmTheme.colors.yellow : _ocCmTheme.colors.grey3
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
        paddingLeft: _ocCmTheme2.default.gutterWidth
      };
    },
    indicatorSeparator: function indicatorSeparator() {
      return { display: 'none' };
    },
    input: function input(base) {
      return _extends({}, base, {
        color: _ocCmTheme.colors.grey9,
        padding: 0,
        margin: 0
      });
    },
    menu: function menu(base) {
      return _extends({}, base, {
        border: '1px solid ' + _ocCmTheme.colors.grey6,
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
        backgroundColor: _ocCmTheme.colors.grey5,
        borderRadius: 0,
        color: _ocCmTheme.colors.grey9
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      return _extends({}, base, {
        backgroundColor: _ocCmTheme.colors.grey5,
        borderRadius: 0,
        color: _ocCmTheme.colors.grey9,
        ':hover': {
          backgroundColor: _ocCmTheme.colors.grey8,
          color: _ocCmTheme.colors.white
        },
        flex: '0 0 auto'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? _ocCmTheme.colors.grey5 : state.isFocused ? _ocCmTheme.colors.grey4 : 'transparent',
        color: state.isDisabled ? _ocCmTheme.colors.grey9 : state.isSelected ? _ocCmTheme.colors.grey9 : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: _ocCmTheme.colors.grey4 },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
        paddingLeft: state.data.group ? '50px' : '12px'
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, {
        color: _ocCmTheme.colors.grey9
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
        color: _ocCmTheme.colors.grey9,
        ':hover': {
          cursor: 'pointer',
          color: _ocCmTheme.colors.grey9
        },
        paddingRight: '0'
      });
    },
    dropdownIndicator: function dropdownIndicator(base, state) {
      return _extends({}, base, {
        color: _ocCmTheme.colors.grey9,
        ':hover': {
          cursor: 'pointer',
          color: _ocCmTheme.colors.grey9
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

exports.default = styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJtYWluU3R5bGVzIiwiY29udGFpbmVyIiwiYmFzZSIsIndpZHRoIiwibGluZUhlaWdodCIsImNvbnRyb2wiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImlzRGlzYWJsZWQiLCJjb2xvcnMiLCJ3aGl0ZSIsImJvcmRlckNvbG9yIiwiaXNGb2N1c2VkIiwieWVsbG93IiwiZ3JleTMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtaW5IZWlnaHQiLCJpbnB1dEhlaWdodCIsImJveFNpemluZyIsIm91dGxpbmUiLCJmbGV4V3JhcCIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJkaXNwbGF5IiwiaW5wdXQiLCJjb2xvciIsImdyZXk5IiwicGFkZGluZyIsIm1hcmdpbiIsIm1lbnUiLCJib3JkZXIiLCJncmV5NiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInpJbmRleCIsIm1lbnVQb3J0YWwiLCJtZW51TGlzdCIsIm11bHRpVmFsdWVMYWJlbCIsImdyZXk1IiwibXVsdGlWYWx1ZVJlbW92ZSIsImdyZXk4IiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJncmV5NCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiZ3JvdXAiLCJzaW5nbGVWYWx1ZSIsInZhbHVlQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaGVpZ2h0IiwiY2xlYXJJbmRpY2F0b3IiLCJjdXJzb3IiLCJwYWRkaW5nUmlnaHQiLCJkcm9wZG93bkluZGljYXRvciIsInNlbGVjdFByb3BzIiwiaXNDbGVhcmFibGUiLCJoYXNWYWx1ZSIsIm1lcmdlU3R5bGVzIiwiYmFzZVN0eWxlcyIsImN1c3RvbVN0eWxlcyIsIm1lcmdlZFN0eWxlcyIsIk9iamVjdCIsImFz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dGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IHRoZW1lLCB7IGNvbG9ycyB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLXRoZW1lJztcblxuLy8gU3R5bGVzIHNoYXJlZCBiZXR3ZWVuIGJvdGggRmxvYXRpbmdTZWxlY3QgaW1wbGVtZW50YXRpb25zXG5jb25zdCBtYWluU3R5bGVzID0gaW5wdXRIZWlnaHQgPT4gKHtcbiAgY29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkID8gJyNlZWUnIDogY29sb3JzLndoaXRlLFxuICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMueWVsbG93IDogY29sb3JzLmdyZXkzLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IGBpbnNldCAwIDFweCAxcHggJHtjb2xvcnMud2hpdGV9LCAwIDAgOHB4ICR7Y29sb3JzLnllbGxvd31gIDogMCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMueWVsbG93IDogY29sb3JzLmdyZXkzLFxuICAgIH0sXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGdyb3VwSGVhZGluZzogKCkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLmd1dHRlcldpZHRoLFxuICB9KSxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXG4gIGlucHV0OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICB9KSxcbiAgbWVudTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXk2fWAsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogMCxcbiAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgbWFyZ2luVG9wOiAwLFxuICAgIHpJbmRleDogMyxcbiAgfSksXG4gIG1lbnVQb3J0YWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHpJbmRleDogOTk5OSxcbiAgfSksXG4gIG1lbnVMaXN0OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBwYWRkaW5nOiAwLFxuICB9KSxcbiAgbXVsdGlWYWx1ZUxhYmVsOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5NSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgfSksXG4gIG11bHRpVmFsdWVSZW1vdmU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk1LFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5OCxcbiAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgfSxcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICB9KSxcbiAgb3B0aW9uOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICAnOmFjdGl2ZSc6IHsgYmFja2dyb3VuZENvbG9yOiAnbm9uZScgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmlzU2VsZWN0ZWRcbiAgICAgID8gY29sb3JzLmdyZXk1XG4gICAgICA6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5ncmV5NCA6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IHN0YXRlLmlzRGlzYWJsZWRcbiAgICAgID8gY29sb3JzLmdyZXk5XG4gICAgICA6IHN0YXRlLmlzU2VsZWN0ZWQgPyBjb2xvcnMuZ3JleTkgOiAnaW5oZXJpdCcsXG4gICAgZGlzcGxheTogc3RhdGUuZGF0YS5pc0hpZGRlbiAmJiAhc3RhdGUuZGF0YS5tYXRjaCA/ICdub25lJyA6ICdibG9jaycsXG4gICAgJzpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTQgfSxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzXG4gICAgcGFkZGluZ0xlZnQ6IHN0YXRlLmRhdGEuZ3JvdXAgPyAnNTBweCcgOiAnMTJweCcsXG4gIH0pLFxuICBzaW5nbGVWYWx1ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgfSksXG4gIHZhbHVlQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnMsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcbiAgaW5kaWNhdG9yc0NvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnMsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICB9KSxcbiAgY2xlYXJJbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICB9LFxuICAgIHBhZGRpbmdSaWdodDogJzAnLFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICB9LFxuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5zZWxlY3RQcm9wcy5pc0NsZWFyYWJsZSAmJiBzdGF0ZS5oYXNWYWx1ZSA/ICcwJyA6ICc4cHgnLFxuICB9KSxcbn0pO1xuXG4vLyBtZXJnZSBzdHlsZSBmdW5jdGlvbnMgd2l0aCBjdXN0b21TdHlsZSBmdW5jdGlvbnNcbmNvbnN0IG1lcmdlU3R5bGVzID0gKGJhc2VTdHlsZXMsIGN1c3RvbVN0eWxlcykgPT4ge1xuICBjb25zdCBtZXJnZWRTdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlU3R5bGVzKTtcbiAgT2JqZWN0LmtleXMoY3VzdG9tU3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoYmFzZVN0eWxlc1trZXldKSB7XG4gICAgICBtZXJnZWRTdHlsZXNba2V5XSA9IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgLi4uYmFzZVN0eWxlc1trZXldKHt9LCBzdGF0ZSksXG4gICAgICAgIC4uLmN1c3RvbVN0eWxlc1trZXldKHt9LCBzdGF0ZSksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVyZ2VkU3R5bGVzW2tleV0gPSBjdXN0b21TdHlsZXNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbWVyZ2VkU3R5bGVzO1xufTtcblxuY29uc3Qgc3R5bGVzID0gKGlucHV0SGVpZ2h0LCBjdXN0b21TdHlsZXMpID0+IHtcbiAgY29uc3QgYmFzZVN0eWxlcyA9IG1haW5TdHlsZXMoaW5wdXRIZWlnaHQpO1xuICBpZiAoY3VzdG9tU3R5bGVzKSB7XG4gICAgcmV0dXJuIG1lcmdlU3R5bGVzKGJhc2VTdHlsZXMsIGN1c3RvbVN0eWxlcyk7XG4gIH1cbiAgcmV0dXJuIGJhc2VTdHlsZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iXX0=