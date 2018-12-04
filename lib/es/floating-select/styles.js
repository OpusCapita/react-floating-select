var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-nested-ternary */
import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

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
        backgroundColor: state.isSelected ? colors.colorSelectSelected : state.isFocused ? colors.colorSelectHover : 'transparent',
        color: state.isDisabled ? colors.colorText : state.isSelected ? colors.colorText : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: colors.colorSelectHover },
        minHeight: inputHeight,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRoZW1lIiwibWFpblN0eWxlcyIsImNvbnRhaW5lciIsImJhc2UiLCJoZWlnaHQiLCJpbnB1dEhlaWdodCIsImNvbnRyb2wiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yV2hpdGUiLCJib3JkZXJDb2xvciIsImlzRm9jdXNlZCIsImNvbG9yUHNldWRvRm9jdXNlZCIsImNvbG9yTGlnaHRHcmF5IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWluSGVpZ2h0Iiwib3V0bGluZSIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsImZsZXhCYXNpcyIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImNvbG9yU2VsZWN0SG92ZXIiLCJpc0Rpc2FibGVkIiwiZGF0YSIsImlzSGlkZGVuIiwibWF0Y2giLCJncm91cCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJmbGV4V3JhcCIsIm92ZXJmbG93IiwicG9ydGFsU3R5bGVzIiwiY2xlYXJJbmRpY2F0b3IiLCJkcm9wZG93bkluZGljYXRvciIsIm1lbnVQb3J0YWwiLCJzdHlsZXMiLCJwb3J0YWwiLCJiYXNlU3R5bGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsT0FBT0EsTUFBUCxNQUFtQixxREFBbkI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0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T0FBTzJCO0FBRkg7QUFBQSxLQTVFb0I7QUFnRmpDc0Isb0JBQWdCO0FBQUEsMEJBQ1g3QyxJQURXO0FBRWRvQixpQkFBUyxNQUZLO0FBR2QwQixrQkFBVSxTQUhJO0FBSWQ3QyxnQkFBUUMsV0FKTTtBQUtkLHNCQUFjQSxXQUxBO0FBTWQ2QyxrQkFBVTtBQU5JO0FBQUE7QUFoRmlCLEdBQWhCO0FBQUEsQ0FBbkI7O0FBMEZBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQU87QUFDMUJDLG9CQUFnQjtBQUFBLDBCQUNYakQsSUFEVztBQUVkOEIsaUJBQVMsQ0FGSztBQUdkUixlQUFPMUIsT0FBTzJCLFNBSEE7QUFJZCxrQkFBVTtBQUNSRCxpQkFBTzFCLE9BQU8yQjtBQUROO0FBSkk7QUFBQSxLQURVO0FBUzFCMkIsdUJBQW1CO0FBQUEsMEJBQ2RsRCxJQURjO0FBRWpCc0IsZUFBTzFCLE9BQU8yQixTQUZHO0FBR2pCLGtCQUFVO0FBQ1JELGlCQUFPMUIsT0FBTzJCO0FBRE4sU0FITztBQU1qQk8saUJBQVM7QUFOUTtBQUFBLEtBVE87QUFpQjFCcUIsZ0JBQVk7QUFBQSwwQkFDUG5ELElBRE87QUFFVjRCLGdCQUFRO0FBRkU7QUFBQTtBQWpCYyxHQUFQO0FBQUEsQ0FBckI7O0FBdUJBLElBQU13QixTQUFTLFNBQVRBLE1BQVMsQ0FBQ2xELFdBQUQsRUFBaUM7QUFBQSxNQUFuQm1ELE1BQW1CLHVFQUFWLEtBQVU7O0FBQzlDLE1BQU1DLGFBQWF4RCxXQUFXSSxXQUFYLENBQW5CO0FBQ0EsTUFBSW1ELE1BQUosRUFBWTtBQUNWLHdCQUFZQyxVQUFaLEVBQTJCTixjQUEzQjtBQUNEO0FBQ0QsU0FBT00sVUFBUDtBQUNELENBTkQ7O0FBUUEsZUFBZUYsTUFBZiIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IGNvbG9ycyBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tc3R5bGVzL3N0eWxlcy9fY29sb3JzLnNjc3MnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbi8vIFN0eWxlcyBzaGFyZWQgYmV0d2VlbiBib3RoIEZsb2F0aW5nU2VsZWN0IGltcGxlbWVudGF0aW9uc1xuY29uc3QgbWFpblN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgfSksXG5cbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JXaGl0ZSxcbiAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZCA6IGNvbG9ycy5jb2xvckxpZ2h0R3JheSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBgaW5zZXQgMCAxcHggMXB4ICR7Y29sb3JzLmNvbG9yV2hpdGV9LCAwIDAgOHB4ICR7Y29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZH1gIDogMCxcbiAgICBoZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgfSxcbiAgICBtaW5IZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgIG91dGxpbmU6IDAsXG4gIH0pLFxuXG4gIGdyb3VwSGVhZGluZzogKCkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLmd1dHRlcldpZHRoLFxuICB9KSxcblxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7IGRpc3BsYXk6ICdub25lJyB9KSxcblxuICBpbnB1dDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gIH0pLFxuXG4gIG1lbnU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5jb2xvckxpZ2h0R3JheX1gLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgZmxleEJhc2lzOiAnZml0LWNvbnRlbnQnLFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yQnV0dG9uSG92ZXIsXG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgfSxcbiAgfSksXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkXG4gICAgICA/IGNvbG9ycy5jb2xvclNlbGVjdFNlbGVjdGVkXG4gICAgICA6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclNlbGVjdEhvdmVyIDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogc3RhdGUuaXNEaXNhYmxlZFxuICAgICAgPyBjb2xvcnMuY29sb3JUZXh0XG4gICAgICA6IHN0YXRlLmlzU2VsZWN0ZWQgPyBjb2xvcnMuY29sb3JUZXh0IDogJ2luaGVyaXQnLFxuICAgIGRpc3BsYXk6IHN0YXRlLmRhdGEuaXNIaWRkZW4gJiYgIXN0YXRlLmRhdGEubWF0Y2ggPyAnbm9uZScgOiAnYmxvY2snLFxuICAgICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0SG92ZXIgfSxcbiAgICBtaW5IZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxuICB9KSxcbiAgc2luZ2xlVmFsdWU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICB9KSxcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGhlaWdodDogaW5wdXRIZWlnaHQsXG4gICAgJ21pbi1oZWlnaHQnOiBpbnB1dEhlaWdodCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0pLFxufSk7XG5cbmNvbnN0IHBvcnRhbFN0eWxlcyA9ICgpID0+ICh7XG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICAgIHBhZGRpbmc6ICcwIDJweCAwIDAnLFxuICB9KSxcbiAgbWVudVBvcnRhbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgekluZGV4OiA5OTk5LFxuICB9KSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSAoaW5wdXRIZWlnaHQsIHBvcnRhbCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZXMgPSBtYWluU3R5bGVzKGlucHV0SGVpZ2h0KTtcbiAgaWYgKHBvcnRhbCkge1xuICAgIHJldHVybiB7IC4uLmJhc2VTdHlsZXMsIC4uLnBvcnRhbFN0eWxlcygpIH07XG4gIH1cbiAgcmV0dXJuIGJhc2VTdHlsZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iXX0=