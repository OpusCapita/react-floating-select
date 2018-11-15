'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colors = require('@opuscapita/oc-cm-common-styles/styles/_colors.scss');

var _colors2 = _interopRequireDefault(_colors);

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles shared between both FloatingSelect implementations
var mainStyles = function mainStyles(inputHeight) {
  return {
    container: function container(base) {
      return _extends({}, base, { height: inputHeight });
    },

    control: function control(base, state) {
      return _extends({}, base, {
        backgroundColor: _colors2.default.colorWhite,
        borderColor: state.isFocused ? _colors2.default.colorPseudoFocused : _colors2.default.colorLightGray,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + _colors2.default.colorWhite + ', 0 0 8px ' + _colors2.default.colorPseudoFocused : 0,
        height: inputHeight,
        '&:hover': {
          borderColor: state.isFocused ? _colors2.default.colorPseudoFocused : _colors2.default.colorLightGray
        },
        minHeight: inputHeight,
        outline: 0
      });
    },

    groupHeading: function groupHeading() {
      return { fontWeight: 'bold', paddingLeft: _ocCmCommonLayouts.theme.gutterWidth };
    },

    indicatorSeparator: function indicatorSeparator() {
      return { display: 'none' };
    },

    input: function input(base) {
      return _extends({}, base, { color: _colors2.default.colorText });
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
      return _extends({}, base, { padding: 0 });
    },
    multiValueLabel: function multiValueLabel(base) {
      return _extends({}, base, {
        backgroundColor: _colors2.default.colorSelectSelected,
        borderRadius: 0,
        color: _colors2.default.colorText,
        flexBasis: 'fit-content'
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
        }
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? _colors2.default.colorSelectSelected : _colors2.default.colorWhite,
        color: _colors2.default.colorText,
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: _colors2.default.colorSelectHover },
        minHeight: inputHeight,
        paddingLeft: state.data.group ? '50px' : '12px'
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, { color: _colors2.default.colorText });
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

exports.default = styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwiaGVpZ2h0IiwiaW5wdXRIZWlnaHQiLCJjb250cm9sIiwic3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJjb2xvcldoaXRlIiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJjb2xvclBzZXVkb0ZvY3VzZWQiLCJjb2xvckxpZ2h0R3JheSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1pbkhlaWdodCIsIm91dGxpbmUiLCJncm91cEhlYWRpbmciLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsImZsZXhCYXNpcyIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiY29sb3JTZWxlY3RIb3ZlciIsImdyb3VwIiwic2luZ2xlVmFsdWUiLCJ2YWx1ZUNvbnRhaW5lciIsImZsZXhXcmFwIiwib3ZlcmZsb3ciLCJwb3J0YWxTdHlsZXMiLCJjbGVhckluZGljYXRvciIsImRyb3Bkb3duSW5kaWNhdG9yIiwibWVudVBvcnRhbCIsInN0eWxlcyIsInBvcnRhbCIsImJhc2VTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTtBQUNBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQWdCO0FBQ2pDQyxlQUFXO0FBQUEsMEJBQWNDLElBQWQsSUFBb0JDLFFBQVFDLFdBQTVCO0FBQUEsS0FEc0I7O0FBR2pDQyxhQUFTLGlCQUFDSCxJQUFELEVBQU9JLEtBQVA7QUFBQSwwQkFDSkosSUFESTtBQUVQSyx5QkFBaUJDLGlCQUFPQyxVQUZqQjtBQUdQQyxxQkFBYUosTUFBTUssU0FBTixHQUFrQkgsaUJBQU9JLGtCQUF6QixHQUE4Q0osaUJBQU9LLGNBSDNEO0FBSVBDLHNCQUFjLENBSlA7QUFLUEMsbUJBQVdULE1BQU1LLFNBQU4sd0JBQXFDSCxpQkFBT0MsVUFBNUMsa0JBQW1FRCxpQkFBT0ksa0JBQTFFLEdBQWlHLENBTHJHO0FBTVBULGdCQUFRQyxXQU5EO0FBT1AsbUJBQVc7QUFDVE0sdUJBQWFKLE1BQU1LLFNBQU4sR0FBa0JILGlCQUFPSSxrQkFBekIsR0FBOENKLGlCQUFPSztBQUR6RCxTQVBKO0FBVVBHLG1CQUFXWixXQVZKO0FBV1BhLGlCQUFTO0FBWEY7QUFBQSxLQUh3Qjs7QUFpQmpDQyxrQkFBYztBQUFBLGFBQU8sRUFBRUMsWUFBWSxNQUFkLEVBQXNCQyxhQUFhQyx5QkFBTUMsV0FBekMsRUFBUDtBQUFBLEtBakJtQjs7QUFtQmpDQyx3QkFBb0I7QUFBQSxhQUFPLEVBQUVDLFNBQVMsTUFBWCxFQUFQO0FBQUEsS0FuQmE7O0FBcUJqQ0MsV0FBTztBQUFBLDBCQUFjdkIsSUFBZCxJQUFvQndCLE9BQU9sQixpQkFBT21CLFNBQWxDO0FBQUEsS0FyQjBCOztBQXVCakNDLFVBQU07QUFBQSwwQkFDRDFCLElBREM7QUFFSjJCLCtCQUFxQnJCLGlCQUFPSyxjQUZ4QjtBQUdKQyxzQkFBYyxDQUhWO0FBSUpDLG1CQUFXLENBSlA7QUFLSmUsc0JBQWMsQ0FMVjtBQU1KQyxtQkFBVyxDQU5QO0FBT0pDLGdCQUFRO0FBUEo7QUFBQSxLQXZCMkI7QUFnQ2pDQyxjQUFVO0FBQUEsMEJBQWMvQixJQUFkLElBQW9CZ0MsU0FBUyxDQUE3QjtBQUFBLEtBaEN1QjtBQWlDakNDLHFCQUFpQjtBQUFBLDBCQUNaakMsSUFEWTtBQUVmSyx5QkFBaUJDLGlCQUFPNEIsbUJBRlQ7QUFHZnRCLHNCQUFjLENBSEM7QUFJZlksZUFBT2xCLGlCQUFPbUIsU0FKQztBQUtmVSxtQkFBVztBQUxJO0FBQUEsS0FqQ2dCO0FBd0NqQ0Msc0JBQWtCO0FBQUEsMEJBQ2JwQyxJQURhO0FBRWhCSyx5QkFBaUJDLGlCQUFPNEIsbUJBRlI7QUFHaEJ0QixzQkFBYyxDQUhFO0FBSWhCWSxlQUFPbEIsaUJBQU9tQixTQUpFO0FBS2hCLGtCQUFVO0FBQ1JwQiwyQkFBaUJDLGlCQUFPK0IsZ0JBRGhCO0FBRVJiLGlCQUFPbEIsaUJBQU9DO0FBRk47QUFMTTtBQUFBLEtBeENlO0FBa0RqQytCLFlBQVEsZ0JBQUN0QyxJQUFELEVBQU9JLEtBQVA7QUFBQSwwQkFDSEosSUFERztBQUVOLG1CQUFXLEVBQUVLLGlCQUFpQixNQUFuQixFQUZMO0FBR05BLHlCQUFpQkQsTUFBTW1DLFVBQU4sR0FBbUJqQyxpQkFBTzRCLG1CQUExQixHQUFnRDVCLGlCQUFPQyxVQUhsRTtBQUlOaUIsZUFBT2xCLGlCQUFPbUIsU0FKUjtBQUtOSCxpQkFBU2xCLE1BQU1vQyxJQUFOLENBQVdDLFFBQVgsSUFBdUIsQ0FBQ3JDLE1BQU1vQyxJQUFOLENBQVdFLEtBQW5DLEdBQTJDLE1BQTNDLEdBQW9ELE9BTHZEO0FBTU4sa0JBQVUsRUFBRXJDLGlCQUFpQkMsaUJBQU9xQyxnQkFBMUIsRUFOSjtBQU9ON0IsbUJBQVdaLFdBUEw7QUFRTmdCLHFCQUFhZCxNQUFNb0MsSUFBTixDQUFXSSxLQUFYLEdBQW1CLE1BQW5CLEdBQTRCO0FBUm5DO0FBQUEsS0FsRHlCO0FBNERqQ0MsaUJBQWE7QUFBQSwwQkFBYzdDLElBQWQsSUFBb0J3QixPQUFPbEIsaUJBQU9tQixTQUFsQztBQUFBLEtBNURvQjtBQTZEakNxQixvQkFBZ0I7QUFBQSwwQkFDWDlDLElBRFc7QUFFZHNCLGlCQUFTLE1BRks7QUFHZHlCLGtCQUFVLFNBSEk7QUFJZDlDLGdCQUFRQyxXQUpNO0FBS2Qsc0JBQWNBLFdBTEE7QUFNZDhDLGtCQUFVO0FBTkk7QUFBQTtBQTdEaUIsR0FBaEI7QUFBQSxDQUFuQjs7QUF1RUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBTztBQUMxQkMsb0JBQWdCO0FBQUEsMEJBQ1hsRCxJQURXO0FBRWRnQyxpQkFBUyxDQUZLO0FBR2RSLGVBQU9sQixpQkFBT21CLFNBSEE7QUFJZCxrQkFBVTtBQUNSRCxpQkFBT2xCLGlCQUFPbUI7QUFETjtBQUpJO0FBQUEsS0FEVTtBQVMxQjBCLHVCQUFtQjtBQUFBLDBCQUNkbkQsSUFEYztBQUVqQndCLGVBQU9sQixpQkFBT21CLFNBRkc7QUFHakIsa0JBQVU7QUFDUkQsaUJBQU9sQixpQkFBT21CO0FBRE4sU0FITztBQU1qQk8saUJBQVM7QUFOUTtBQUFBLEtBVE87QUFpQjFCb0IsZ0JBQVk7QUFBQSwwQkFBY3BELElBQWQsSUFBb0I4QixRQUFRLElBQTVCO0FBQUE7QUFqQmMsR0FBUDtBQUFBLENBQXJCOztBQW9CQSxJQUFNdUIsU0FBUyxTQUFUQSxNQUFTLENBQUNuRCxXQUFELEVBQWlDO0FBQUEsTUFBbkJvRCxNQUFtQix1RUFBVixLQUFVOztBQUM5QyxNQUFNQyxhQUFhekQsV0FBV0ksV0FBWCxDQUFuQjtBQUNBLE1BQUlvRCxNQUFKLEVBQVk7QUFDVix3QkFBWUMsVUFBWixFQUEyQk4sY0FBM0I7QUFDRDtBQUNELFNBQU9NLFVBQVA7QUFDRCxDQU5EOztrQkFRZUYsTSIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JzIGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1zdHlsZXMvc3R5bGVzL19jb2xvcnMuc2Nzcyc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuLy8gU3R5bGVzIHNoYXJlZCBiZXR3ZWVuIGJvdGggRmxvYXRpbmdTZWxlY3QgaW1wbGVtZW50YXRpb25zXG5jb25zdCBtYWluU3R5bGVzID0gaW5wdXRIZWlnaHQgPT4gKHtcbiAgY29udGFpbmVyOiBiYXNlID0+ICh7IC4uLmJhc2UsIGhlaWdodDogaW5wdXRIZWlnaHQgfSksXG5cbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JXaGl0ZSxcbiAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZCA6IGNvbG9ycy5jb2xvckxpZ2h0R3JheSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBgaW5zZXQgMCAxcHggMXB4ICR7Y29sb3JzLmNvbG9yV2hpdGV9LCAwIDAgOHB4ICR7Y29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZH1gIDogMCxcbiAgICBoZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgfSxcbiAgICBtaW5IZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgIG91dGxpbmU6IDAsXG4gIH0pLFxuXG4gIGdyb3VwSGVhZGluZzogKCkgPT4gKHsgZm9udFdlaWdodDogJ2JvbGQnLCBwYWRkaW5nTGVmdDogdGhlbWUuZ3V0dGVyV2lkdGggfSksXG5cbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXG5cbiAgaW5wdXQ6IGJhc2UgPT4gKHsgLi4uYmFzZSwgY29sb3I6IGNvbG9ycy5jb2xvclRleHQgfSksXG5cbiAgbWVudTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLmNvbG9yTGlnaHRHcmF5fWAsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogMCxcbiAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgbWFyZ2luVG9wOiAwLFxuICAgIHpJbmRleDogMyxcbiAgfSksXG4gIG1lbnVMaXN0OiBiYXNlID0+ICh7IC4uLmJhc2UsIHBhZGRpbmc6IDAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgZmxleEJhc2lzOiAnZml0LWNvbnRlbnQnLFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yQnV0dG9uSG92ZXIsXG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgfSxcbiAgfSksXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQgOiBjb2xvcnMuY29sb3JXaGl0ZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdEhvdmVyIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcbiAgfSksXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7IC4uLmJhc2UsIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0IH0pLFxuICB2YWx1ZUNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICAnbWluLWhlaWdodCc6IGlucHV0SGVpZ2h0LFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSksXG59KTtcblxuY29uc3QgcG9ydGFsU3R5bGVzID0gKCkgPT4gKHtcbiAgY2xlYXJJbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgIH0sXG4gIH0pLFxuICBkcm9wZG93bkluZGljYXRvcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgIH0sXG4gICAgcGFkZGluZzogJzAgMnB4IDAgMCcsXG4gIH0pLFxuICBtZW51UG9ydGFsOiBiYXNlID0+ICh7IC4uLmJhc2UsIHpJbmRleDogOTk5OSB9KSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSAoaW5wdXRIZWlnaHQsIHBvcnRhbCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZXMgPSBtYWluU3R5bGVzKGlucHV0SGVpZ2h0KTtcbiAgaWYgKHBvcnRhbCkge1xuICAgIHJldHVybiB7IC4uLmJhc2VTdHlsZXMsIC4uLnBvcnRhbFN0eWxlcygpIH07XG4gIH1cbiAgcmV0dXJuIGJhc2VTdHlsZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iXX0=