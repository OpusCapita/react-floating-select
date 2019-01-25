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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwibGluZUhlaWdodCIsImNvbnRyb2wiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImNvbG9yV2hpdGUiLCJib3JkZXJDb2xvciIsImlzRm9jdXNlZCIsImNvbG9yUHNldWRvRm9jdXNlZCIsImNvbG9yTGlnaHRHcmF5IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWluSGVpZ2h0IiwiaW5wdXRIZWlnaHQiLCJib3hTaXppbmciLCJvdXRsaW5lIiwiZmxleFdyYXAiLCJncm91cEhlYWRpbmciLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJjb2xvclNlbGVjdEhvdmVyIiwiaXNEaXNhYmxlZCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiZ3JvdXAiLCJzaW5nbGVWYWx1ZSIsInZhbHVlQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaGVpZ2h0IiwiY2xlYXJJbmRpY2F0b3IiLCJwYWRkaW5nUmlnaHQiLCJkcm9wZG93bkluZGljYXRvciIsInNlbGVjdFByb3BzIiwiaXNDbGVhcmFibGUiLCJoYXNWYWx1ZSIsInBvcnRhbFN0eWxlcyIsIm1lbnVQb3J0YWwiLCJzdHlsZXMiLCJw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QUFPc0I7QUFETjtBQUpJO0FBQUEsS0FEVTtBQVMxQjRCLHVCQUFtQjtBQUFBLDBCQUNkdkQsSUFEYztBQUVqQjBCLGVBQU9yQixpQkFBT3NCLFNBRkc7QUFHakIsa0JBQVU7QUFDUkQsaUJBQU9yQixpQkFBT3NCO0FBRE4sU0FITztBQU1qQk8saUJBQVM7QUFOUTtBQUFBLEtBVE87QUFpQjFCMEIsZ0JBQVk7QUFBQSwwQkFDUDVELElBRE87QUFFVmdDLGdCQUFRO0FBRkU7QUFBQTtBQWpCYyxHQUFQO0FBQUEsQ0FBckI7O0FBdUJBLElBQU02QixTQUFTLFNBQVRBLE1BQVMsQ0FBQy9DLFdBQUQsRUFBaUM7QUFBQSxNQUFuQmdELE1BQW1CLHVFQUFWLEtBQVU7O0FBQzlDLE1BQU1DLGFBQWFqRSxXQUFXZ0IsV0FBWCxDQUFuQjtBQUNBLE1BQUlnRCxNQUFKLEVBQVk7QUFDVix3QkFBWUMsVUFBWixFQUEyQkosY0FBM0I7QUFDRDtBQUNELFNBQU9JLFVBQVA7QUFDRCxDQU5EOztrQkFRZUYsTSIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IGNvbG9ycyBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tc3R5bGVzL3N0eWxlcy9fY29sb3JzLnNjc3MnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbi8vIFN0eWxlcyBzaGFyZWQgYmV0d2VlbiBib3RoIEZsb2F0aW5nU2VsZWN0IGltcGxlbWVudGF0aW9uc1xuY29uc3QgbWFpblN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy5jb2xvcldoaXRlfSwgMCAwIDhweCAke2NvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWR9YCA6IDAsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZCA6IGNvbG9ycy5jb2xvckxpZ2h0R3JheSxcbiAgICB9LFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuXG4gIGdyb3VwSGVhZGluZzogKCkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLmd1dHRlcldpZHRoLFxuICB9KSxcblxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7IGRpc3BsYXk6ICdub25lJyB9KSxcblxuICBpbnB1dDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gIH0pLFxuXG4gIG1lbnU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5jb2xvckxpZ2h0R3JheX1gLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gIH0pLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdFNlbGVjdGVkLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JCdXR0b25Ib3ZlcixcbiAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3JXaGl0ZSxcbiAgICB9LFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gIH0pLFxuICBvcHRpb246IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgICc6YWN0aXZlJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNTZWxlY3RlZFxuICAgICAgPyBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZFxuICAgICAgOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JTZWxlY3RIb3ZlciA6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IHN0YXRlLmlzRGlzYWJsZWRcbiAgICAgID8gY29sb3JzLmNvbG9yVGV4dFxuICAgICAgOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmNvbG9yVGV4dCA6ICdpbmhlcml0JyxcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdEhvdmVyIH0sXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxuICB9KSxcbiAgc2luZ2xlVmFsdWU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICB9KSxcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVycyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBpbmRpY2F0b3JzQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgaGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVycyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZ1JpZ2h0OiAnMCcsXG4gIH0pLFxuICBkcm9wZG93bkluZGljYXRvcjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZ0xlZnQ6IHN0YXRlLnNlbGVjdFByb3BzLmlzQ2xlYXJhYmxlICYmIHN0YXRlLmhhc1ZhbHVlID8gJzAnIDogJzhweCcsXG4gIH0pLFxufSk7XG5cbmNvbnN0IHBvcnRhbFN0eWxlcyA9ICgpID0+ICh7XG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICAgIHBhZGRpbmc6ICcwIDJweCAwIDAnLFxuICB9KSxcbiAgbWVudVBvcnRhbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgekluZGV4OiA5OTk5LFxuICB9KSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSAoaW5wdXRIZWlnaHQsIHBvcnRhbCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZXMgPSBtYWluU3R5bGVzKGlucHV0SGVpZ2h0KTtcbiAgaWYgKHBvcnRhbCkge1xuICAgIHJldHVybiB7IC4uLmJhc2VTdHlsZXMsIC4uLnBvcnRhbFN0eWxlcygpIH07XG4gIH1cbiAgcmV0dXJuIGJhc2VTdHlsZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iXX0=