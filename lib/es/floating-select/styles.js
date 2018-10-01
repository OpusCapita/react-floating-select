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
        marginTop: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRoZW1lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYmFzZSIsImhlaWdodCIsImlucHV0SGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JXaGl0ZSIsImJvcmRlckNvbG9yIiwiaXNGb2N1c2VkIiwiY29sb3JQc2V1ZG9Gb2N1c2VkIiwiY29sb3JMaWdodEdyYXkiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtaW5IZWlnaHQiLCJvdXRsaW5lIiwiZHJvcGRvd25JbmRpY2F0b3IiLCJjb2xvciIsImNvbG9yVGV4dCIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiaW5wdXQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsImZsZXhCYXNpcyIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImRpc3BsYXkiLCJkYXRhIiwiaXNIaWRkZW4iLCJtYXRjaCIsImNvbG9yU2VsZWN0SG92ZXIiLCJncm91cCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJmbGV4V3JhcCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLE1BQVAsTUFBbUIscURBQW5CO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixrQ0FBdEI7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FBZ0I7QUFDN0JDLGVBQVc7QUFBQSwwQkFDTkMsSUFETTtBQUVUQyxnQkFBUUM7QUFGQztBQUFBLEtBRGtCO0FBSzdCQyxh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N0VhLEdBQWhCO0FBQUEsQ0FBZjs7QUFzRkEsZUFBZWhELE1BQWYiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tc3R5bGVzL3N0eWxlcy9fY29sb3JzLnNjc3MnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IHN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgfSksXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy5jb2xvcldoaXRlfSwgMCAwIDhweCAke2NvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWR9YCA6IDAsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkIDogY29sb3JzLmNvbG9yTGlnaHRHcmF5LFxuICAgIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBvdXRsaW5lOiAwLFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICB9KSxcbiAgZ3JvdXBIZWFkaW5nOiAoKSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuZ3V0dGVyV2lkdGgsXG4gIH0pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7fSksXG4gIGlucHV0OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgfSksXG4gIG1lbnU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5jb2xvckxpZ2h0R3JheX1gLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgfSksXG4gIG1lbnVMaXN0OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBwYWRkaW5nOiAwLFxuICB9KSxcbiAgbXVsdGlWYWx1ZUxhYmVsOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdFNlbGVjdGVkLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICBmbGV4QmFzaXM6ICdmaXQtY29udGVudCcsXG4gIH0pLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdFNlbGVjdGVkLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JCdXR0b25Ib3ZlcixcbiAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3JXaGl0ZSxcbiAgICB9LFxuICB9KSxcbiAgb3B0aW9uOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICAnOmFjdGl2ZSc6IHsgYmFja2dyb3VuZENvbG9yOiAnbm9uZScgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmlzU2VsZWN0ZWQgPyBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCA6IGNvbG9ycy5jb2xvcldoaXRlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgIGRpc3BsYXk6IHN0YXRlLmRhdGEuaXNIaWRkZW4gJiYgIXN0YXRlLmRhdGEubWF0Y2ggPyAnbm9uZScgOiAnYmxvY2snLFxuICAgICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0SG92ZXIgfSxcbiAgICBtaW5IZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxuICB9KSxcbiAgc2luZ2xlVmFsdWU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICB9KSxcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGhlaWdodDogaW5wdXRIZWlnaHQsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iXX0=