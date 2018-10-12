var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

var styles = function styles(inputHeight) {
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
    dropdownIndicator: function dropdownIndicator(base) {
      return _extends({}, base, {
        color: colors.colorText,
        ':hover': {
          color: colors.colorText
        }
      });
    },
    groupHeading: function groupHeading() {
      return {
        fontWeight: 'bold',
        paddingLeft: theme.gutterWidth
      };
    },
    indicatorSeparator: function indicatorSeparator() {
      return {};
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
        backgroundColor: state.isSelected ? colors.colorSelectSelected : colors.colorWhite,
        color: colors.colorText,
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
        overflow: 'hidden'
      });
    }
  };
};

export default styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRoZW1lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYmFzZSIsImhlaWdodCIsImlucHV0SGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JXaGl0ZSIsImJvcmRlckNvbG9yIiwiaXNGb2N1c2VkIiwiY29sb3JQc2V1ZG9Gb2N1c2VkIiwiY29sb3JMaWdodEdyYXkiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtaW5IZWlnaHQiLCJvdXRsaW5lIiwiZHJvcGRvd25JbmRpY2F0b3IiLCJjb2xvciIsImNvbG9yVGV4dCIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiaW5wdXQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsImZsZXhCYXNpcyIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImRpc3BsYXkiLCJkYXRhIiwiaXNIaWRkZW4iLCJtYXRjaCIsImNvbG9yU2VsZWN0SG92ZXIiLCJncm91cCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJmbGV4V3JhcCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLE1BQVAsTUFBbUIscURBQW5CO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixrQ0FBdEI7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FBZ0I7QUFDN0JDLGVBQVc7QUFBQSwwQkFDTkMsSUFETTtBQUVUQyxnQkFBUUM7QUFGQztBQUFBLEtBRGtC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TTtBQUtkNkMsa0JBQVU7QUFMSTtBQUFBO0FBOUVhLEdBQWhCO0FBQUEsQ0FBZjs7QUF1RkEsZUFBZWpELE1BQWYiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tc3R5bGVzL3N0eWxlcy9fY29sb3JzLnNjc3MnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IHN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgfSksXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy5jb2xvcldoaXRlfSwgMCAwIDhweCAke2NvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWR9YCA6IDAsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkIDogY29sb3JzLmNvbG9yTGlnaHRHcmF5LFxuICAgIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBvdXRsaW5lOiAwLFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICB9KSxcbiAgZ3JvdXBIZWFkaW5nOiAoKSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuZ3V0dGVyV2lkdGgsXG4gIH0pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7fSksXG4gIGlucHV0OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgfSksXG4gIG1lbnU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5jb2xvckxpZ2h0R3JheX1gLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgZmxleEJhc2lzOiAnZml0LWNvbnRlbnQnLFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yQnV0dG9uSG92ZXIsXG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgfSxcbiAgfSksXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQgOiBjb2xvcnMuY29sb3JXaGl0ZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdEhvdmVyIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcbiAgfSksXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgfSksXG4gIHZhbHVlQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBoZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19