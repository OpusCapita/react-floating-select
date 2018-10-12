'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colors = require('@opuscapita/oc-cm-common-styles/styles/_colors.scss');

var _colors2 = _interopRequireDefault(_colors);

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(inputHeight) {
  return {
    container: function container(base) {
      return _extends({}, base, {
        height: inputHeight
      });
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
    dropdownIndicator: function dropdownIndicator(base) {
      return _extends({}, base, {
        color: _colors2.default.colorText,
        ':hover': {
          color: _colors2.default.colorText
        }
      });
    },
    groupHeading: function groupHeading() {
      return {
        fontWeight: 'bold',
        paddingLeft: _ocCmCommonLayouts.theme.gutterWidth
      };
    },
    indicatorSeparator: function indicatorSeparator() {
      return {};
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
      return _extends({}, base, {
        color: _colors2.default.colorText
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

exports.default = styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImNvbnRhaW5lciIsImJhc2UiLCJoZWlnaHQiLCJpbnB1dEhlaWdodCIsImNvbnRyb2wiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImNvbG9yV2hpdGUiLCJib3JkZXJDb2xvciIsImlzRm9jdXNlZCIsImNvbG9yUHNldWRvRm9jdXNlZCIsImNvbG9yTGlnaHRHcmF5IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWluSGVpZ2h0Iiwib3V0bGluZSIsImRyb3Bkb3duSW5kaWNhdG9yIiwiY29sb3IiLCJjb2xvclRleHQiLCJncm91cEhlYWRpbmciLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiaW5wdXQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsImZsZXhCYXNpcyIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImRpc3BsYXkiLCJkYXRhIiwiaXNIaWRkZW4iLCJtYXRjaCIsImNvbG9yU2VsZWN0SG92ZXIiLCJncm91cCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJmbGV4V3JhcCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FBZ0I7QUFDN0JDLGVBQVc7QUFBQSwwQkFDTkMsSUFETTtBQUVUQyxnQkFBUUM7QUFGQztBQUFBLEtBRGtCO0FBSzdCQyxhQUFTLGlCQUFDSCxJQUFELEVBQU9JLEtBQVA7QUFB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QUFoQjtBQUFBLENBQWY7O2tCQXVGZW5ELE0iLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tc3R5bGVzL3N0eWxlcy9fY29sb3JzLnNjc3MnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IHN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgfSksXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy5jb2xvcldoaXRlfSwgMCAwIDhweCAke2NvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWR9YCA6IDAsXG4gICAgaGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuY29sb3JQc2V1ZG9Gb2N1c2VkIDogY29sb3JzLmNvbG9yTGlnaHRHcmF5LFxuICAgIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBvdXRsaW5lOiAwLFxuICB9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICB9LFxuICB9KSxcbiAgZ3JvdXBIZWFkaW5nOiAoKSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuZ3V0dGVyV2lkdGgsXG4gIH0pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7fSksXG4gIGlucHV0OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgfSksXG4gIG1lbnU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5jb2xvckxpZ2h0R3JheX1gLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgZmxleEJhc2lzOiAnZml0LWNvbnRlbnQnLFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yQnV0dG9uSG92ZXIsXG4gICAgICBjb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgfSxcbiAgfSksXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQgOiBjb2xvcnMuY29sb3JXaGl0ZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdEhvdmVyIH0sXG4gICAgbWluSGVpZ2h0OiBpbnB1dEhlaWdodCxcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcbiAgfSksXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcbiAgfSksXG4gIHZhbHVlQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBoZWlnaHQ6IGlucHV0SGVpZ2h0LFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19