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
        lineHeight: 'normal'
      });
    },

    control: function control(base, state) {
      return _extends({}, base, {
        backgroundColor: _colors2.default.colorWhite,
        borderColor: state.isFocused ? _colors2.default.colorPseudoFocused : _colors2.default.colorLightGray,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + _colors2.default.colorWhite + ', 0 0 8px ' + _colors2.default.colorPseudoFocused : 0,
        '&:hover': {
          borderColor: state.isFocused ? _colors2.default.colorPseudoFocused : _colors2.default.colorLightGray
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
        color: _colors2.default.colorText
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
        },
        flex: '0 0 auto'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? _colors2.default.colorSelectSelected : state.isFocused ? _colors2.default.colorSelectHover : 'transparent',
        color: state.isDisabled ? _colors2.default.colorText : state.isSelected ? _colors2.default.colorText : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: _colors2.default.colorSelectHover },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwibGluZUhlaWdodCIsImNvbnRyb2wiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImNvbG9yV2hpdGUiLCJib3JkZXJDb2xvciIsImlzRm9jdXNlZCIsImNvbG9yUHNldWRvRm9jdXNlZCIsImNvbG9yTGlnaHRHcmF5IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWluSGVpZ2h0IiwiaW5wdXRIZWlnaHQiLCJib3hTaXppbmciLCJvdXRsaW5lIiwiZmxleFdyYXAiLCJncm91cEhlYWRpbmciLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJjb2xvclNlbGVjdEhvdmVyIiwiaXNEaXNhYmxlZCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiZ3JvdXAiLCJzaW5nbGVWYWx1ZSIsInZhbHVlQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaGVpZ2h0IiwiY2xlYXJJbmRpY2F0b3IiLCJwYWRkaW5nUmlnaHQiLCJkcm9wZG93bkluZGljYXRvciIsInNlbGVjdFByb3BzIiwiaXNDbGVhcmFibGUiLCJoYXNWYWx1ZSIsInBvcnRhbFN0eWxlcyIsIm1lbnVQb3J0YWwiLCJzdHlsZXMiLCJw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QUFPc0I7QUFETjtBQUpJO0FBQUEsS0FEVTtBQVMxQjRCLHVCQUFtQjtBQUFBLDBCQUNkdkQsSUFEYztBQUVqQjBCLGVBQU9yQixpQkFBT3NCLFNBRkc7QUFHakIsa0JBQVU7QUFDUkQsaUJBQU9yQixpQkFBT3NCO0FBRE4sU0FITztBQU1qQk8saUJBQVM7QUFOUTtBQUFBLEtBVE87QUFpQjFCMEIsZ0JBQVk7QUFBQSwwQkFDUDVELElBRE87QUFFVmdDLGdCQUFRO0FBRkU7QUFBQTtBQWpCYyxHQUFQO0FBQUEsQ0FBckI7O0FBdUJBLElBQU02QixTQUFTLFNBQVRBLE1BQVMsQ0FBQy9DLFdBQUQsRUFBaUM7QUFBQSxNQUFuQmdELE1BQW1CLHVFQUFWLEtBQVU7O0FBQzlDLE1BQU1DLGFBQWFqRSxXQUFXZ0IsV0FBWCxDQUFuQjtBQUNBLE1BQUlnRCxNQUFKLEVBQVk7QUFDVix3QkFBWUMsVUFBWixFQUEyQkosY0FBM0I7QUFDRDtBQUNELFNBQU9JLFVBQVA7QUFDRCxDQU5EOztrQkFRZUYsTSIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1zdHlsZXMvc3R5bGVzL19jb2xvcnMuc2Nzcyc7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xyXG5cclxuLy8gU3R5bGVzIHNoYXJlZCBiZXR3ZWVuIGJvdGggRmxvYXRpbmdTZWxlY3QgaW1wbGVtZW50YXRpb25zXHJcbmNvbnN0IG1haW5TdHlsZXMgPSBpbnB1dEhlaWdodCA9PiAoe1xyXG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxyXG4gIH0pLFxyXG5cclxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JXaGl0ZSxcclxuICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkIDogY29sb3JzLmNvbG9yTGlnaHRHcmF5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBgaW5zZXQgMCAxcHggMXB4ICR7Y29sb3JzLmNvbG9yV2hpdGV9LCAwIDAgOHB4ICR7Y29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZH1gIDogMCxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZCA6IGNvbG9ycy5jb2xvckxpZ2h0R3JheSxcclxuICAgIH0sXHJcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIG91dGxpbmU6IDAsXHJcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxyXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXHJcbiAgfSksXHJcblxyXG4gIGdyb3VwSGVhZGluZzogKCkgPT4gKHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5ndXR0ZXJXaWR0aCxcclxuICB9KSxcclxuXHJcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcblxyXG4gIGlucHV0OiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgfSksXHJcblxyXG4gIG1lbnU6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuY29sb3JMaWdodEdyYXl9YCxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGJveFNoYWRvdzogMCxcclxuICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgIG1hcmdpblRvcDogMCxcclxuICAgIHpJbmRleDogMyxcclxuICB9KSxcclxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgfSksXHJcbiAgbXVsdGlWYWx1ZUxhYmVsOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gIH0pLFxyXG4gIG11bHRpVmFsdWVSZW1vdmU6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdFNlbGVjdGVkLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvckJ1dHRvbkhvdmVyLFxyXG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXHJcbiAgICB9LFxyXG4gICAgZmxleDogJzAgMCBhdXRvJyxcclxuICB9KSxcclxuICBvcHRpb246IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICAnOmFjdGl2ZSc6IHsgYmFja2dyb3VuZENvbG9yOiAnbm9uZScgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNTZWxlY3RlZFxyXG4gICAgICA/IGNvbG9ycy5jb2xvclNlbGVjdFNlbGVjdGVkXHJcbiAgICAgIDogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmNvbG9yU2VsZWN0SG92ZXIgOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgY29sb3I6IHN0YXRlLmlzRGlzYWJsZWRcclxuICAgICAgPyBjb2xvcnMuY29sb3JUZXh0XHJcbiAgICAgIDogc3RhdGUuaXNTZWxlY3RlZCA/IGNvbG9ycy5jb2xvclRleHQgOiAnaW5oZXJpdCcsXHJcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcclxuICAgICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0SG92ZXIgfSxcclxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcclxuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxyXG4gIH0pLFxyXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgfSksXHJcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnMsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxyXG4gIH0pLFxyXG4gIGluZGljYXRvcnNDb250YWluZXI6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxyXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcclxuICAgIGhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnMsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxyXG4gIH0pLFxyXG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMCcsXHJcbiAgfSksXHJcbiAgZHJvcGRvd25JbmRpY2F0b3I6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuc2VsZWN0UHJvcHMuaXNDbGVhcmFibGUgJiYgc3RhdGUuaGFzVmFsdWUgPyAnMCcgOiAnOHB4JyxcclxuICB9KSxcclxufSk7XHJcblxyXG5jb25zdCBwb3J0YWxTdHlsZXMgPSAoKSA9PiAoe1xyXG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nOiAnMCAycHggMCAwJyxcclxuICB9KSxcclxuICBtZW51UG9ydGFsOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgekluZGV4OiA5OTk5LFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IChpbnB1dEhlaWdodCwgcG9ydGFsID0gZmFsc2UpID0+IHtcclxuICBjb25zdCBiYXNlU3R5bGVzID0gbWFpblN0eWxlcyhpbnB1dEhlaWdodCk7XHJcbiAgaWYgKHBvcnRhbCkge1xyXG4gICAgcmV0dXJuIHsgLi4uYmFzZVN0eWxlcywgLi4ucG9ydGFsU3R5bGVzKCkgfTtcclxuICB9XHJcbiAgcmV0dXJuIGJhc2VTdHlsZXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XHJcbiJdfQ==