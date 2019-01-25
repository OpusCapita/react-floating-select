var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-nested-ternary */
import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

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
        backgroundColor: colors.colorWhite,
        borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + colors.colorWhite + ', 0 0 8px ' + colors.colorPseudoFocused : 0,
        '&:hover': {
          borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray
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
        color: colors.colorText
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
        },
        flex: '0 0 auto'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? colors.colorSelectSelected : state.isFocused ? colors.colorSelectHover : 'transparent',
        color: state.isDisabled ? colors.colorText : state.isSelected ? colors.colorText : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: colors.colorSelectHover },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRoZW1lIiwibWFpblN0eWxlcyIsImNvbnRhaW5lciIsImJhc2UiLCJsaW5lSGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JXaGl0ZSIsImJvcmRlckNvbG9yIiwiaXNGb2N1c2VkIiwiY29sb3JQc2V1ZG9Gb2N1c2VkIiwiY29sb3JMaWdodEdyYXkiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtaW5IZWlnaHQiLCJpbnB1dEhlaWdodCIsImJveFNpemluZyIsIm91dGxpbmUiLCJmbGV4V3JhcCIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsImd1dHRlcldpZHRoIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJjb2xvclRleHQiLCJtZW51IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiY29sb3JTZWxlY3RTZWxlY3RlZCIsIm11bHRpVmFsdWVSZW1vdmUiLCJjb2xvckJ1dHRvbkhvdmVyIiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJjb2xvclNlbGVjdEhvdmVyIiwiaXNEaXNhYmxlZCIsImRhdGEiLCJpc0hpZGRlbiIsIm1hdGNoIiwiZ3JvdXAiLCJzaW5nbGVWYWx1ZSIsInZhbHVlQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaGVpZ2h0IiwiY2xlYXJJbmRpY2F0b3IiLCJwYWRkaW5nUmlnaHQiLCJkcm9wZG93bkluZGljYXRvciIsInNlbGVjdFByb3BzIiwiaXNDbGVhcmFibGUiLCJoYXNWYWx1ZSIsInBvcnRhbFN0eWxlcyIsIm1lbnVQb3J0YWwiLCJzdHlsZXMiLCJwb3J0YWwiLCJiYXNlU3R5bGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsT0FBT0EsTUFBUCxNQUFtQixxREFBbkI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0Qjs7QUFFQTtBQUNBLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQWdCO0FBQ2pDQyxlQUFXO0FBQUEsMEJBQ05DLElBRE07QUFFVEMsb0JBQVk7QUFGSDtBQUFBLEtBRHNCOztBQU1qQ0MsYUFBUyxpQkFBQ0YsSUFBRCxFQUFPRyxLQUFQO0FBQUEsMEJBQ0pILElBREk7QUFFUEkseUJBQWlCUixPQUFPUyxVQUZqQjtBQUdQQyxxQkFBYUgsTUFBTUksU0FBTixHQUFrQlgsT0FBT1ksa0JBQXpCLEdBQThDWixPQUFPYSxjQUgzRDtBQUlQQyxzQkFBYyxDQUpQO0FBS1BDLG1CQUFXUixNQUFNSSxTQUFOLHdCQUFxQ1gsT0FBT1MsVUFBNUMsa0JBQW1FVCxPQUFPWSxrQkFBMUUsR0FBaUcsQ0FMckc7QUFNUCxtQkFBVztBQUNURix1QkFBYUgsTUFBTUksU0FBTixHQUFrQlgsT0FBT1ksa0JBQXpCLEdBQThDWixPQUFPYTtBQUR6RCxTQU5KO0FBU1BHLDZCQUFtQkMsV0FBbkIsWUFUTyxFQVNrQztBQUN6Q0MsbUJBQVcsWUFWSjtBQVdQQyxpQkFBUyxDQVhGO0FBWVBDLGtCQUFVLFNBWkg7QUFhUGYsb0JBQVk7QUFiTDtBQUFBLEtBTndCOztBQXNCakNnQixrQkFBYztBQUFBLGFBQU87QUFDbkJDLG9CQUFZLE1BRE87QUFFbkJDLHFCQUFhdEIsTUFBTXVCO0FBRkEsT0FBUDtBQUFBLEtBdEJtQjs7QUEyQmpDQyx3QkFBb0I7QUFBQSxhQUFPLEVBQUVDLFNBQVMsTUFBWCxFQUFQO0FBQUEsS0EzQmE7O0FBNkJqQ0MsV0FBTztBQUFBLDBCQUNGdkIsSUFERTtBQUVMd0IsZUFBTzVCLE9BQU82QjtBQUZUO0FBQUEsS0E3QjBCOztBQWtDakNDLFVBQU07QUFBQSwwQkFDRDFCLElBREM7QUFFSjJCLCtCQUFxQi9CLE9BQU9hLGNBRnhCO0FBR0pDLHNCQUFjLENBSFY7QUFJSkMsbUJBQVcsQ0FKUDtBQUtKaUIsc0JBQWMsQ0FMVjtBQU1KQyxtQkFBVyxDQU5QO0FBT0pDLGdCQUFRO0FBUEo7QUFBQSxLQWxDMkI7QUEyQ2pDQyxjQUFVO0FBQUEsMEJBQ0wvQixJQURLO0FBRVJnQyxpQkFBUztBQUZEO0FBQUEsS0EzQ3VCO0FBK0NqQ0MscUJBQWlCO0FBQUEsMEJBQ1pqQyxJQURZO0FBRWZJLHlCQUFpQlIsT0FBT3NDLG1CQUZUO0FBR2Z4QixzQkFBYyxDQUhDO0FBSWZjLGVBQU81QixPQUFPNkI7QUFKQztBQUFBLEtBL0NnQjtBQXFEakNVLHNCQUFrQjtBQUFBLDBCQUNibkMsSUFEYTtBQUVoQkkseUJBQWlCUixPQUFPc0MsbUJBRlI7QUFHaEJ4QixzQkFBYyxDQUhFO0FBSWhCYyxlQUFPNUIsT0FBTzZCLFNBSkU7QUFLaEIsa0JBQVU7QUFDUnJCLDJCQUFpQlIsT0FBT3dDLGdCQURoQjtBQUVSWixpQkFBTzVCLE9BQU9TO0FBRk4sU0FMTTtBQVNoQmdDLGNBQU07QUFUVTtBQUFBLEtBckRlO0FBZ0VqQ0MsWUFBUSxnQkFBQ3RDLElBQUQsRUFBT0csS0FBUDtBQUFBLDBCQUNISCxJQURHO0FBRU4sbUJBQVcsRUFBRUksaUJBQWlCLE1BQW5CLEVBRkw7QUFHTkEseUJBQWlCRCxNQUFNb0MsVUFBTixHQUNiM0MsT0FBT3NDLG1CQURNLEdBRWIvQixNQUFNSSxTQUFOLEdBQWtCWCxPQUFPNEMsZ0JBQXpCLEdBQTRDLGFBTDFDO0FBTU5oQixlQUFPckIsTUFBTXNDLFVBQU4sR0FDSDdDLE9BQU82QixTQURKLEdBRUh0QixNQUFNb0MsVUFBTixHQUFtQjNDLE9BQU82QixTQUExQixHQUFzQyxTQVJwQztBQVNOSCxpQkFBU25CLE1BQU11QyxJQUFOLENBQVdDLFFBQVgsSUFBdUIsQ0FBQ3hDLE1BQU11QyxJQUFOLENBQVdFLEtBQW5DLEdBQTJDLE1BQTNDLEdBQW9ELE9BVHZEO0FBVU4sa0JBQVUsRUFBRXhDLGlCQUFpQlIsT0FBTzRDLGdCQUExQixFQVZKO0FBV041Qiw2QkFBbUJDLFdBQW5CLFlBWE0sRUFXbUM7QUFDekNNLHFCQUFhaEIsTUFBTXVDLElBQU4sQ0FBV0csS0FBWCxHQUFtQixNQUFuQixHQUE0QjtBQVpuQztBQUFBLEtBaEV5QjtBQThFakNDLGlCQUFhO0FBQUEsMEJBQ1I5QyxJQURRO0FBRVh3QixlQUFPNUIsT0FBTzZCO0FBRkg7QUFBQSxLQTlFb0I7QUFrRmpDc0Isb0JBQWdCO0FBQUEsMEJBQ1gvQyxJQURXO0FBRWRzQixpQkFBUyxNQUZLO0FBR2RlLGNBQU0sVUFIUTtBQUlkckIsa0JBQVUsTUFKSTtBQUtkSiw2QkFBbUJDLFdBQW5CLFlBTGMsRUFLMkI7QUFDekNDLG1CQUFXLFlBTkc7QUFPZGtDLGtCQUFVLFFBUEk7QUFRZC9DLG9CQUFZO0FBUkU7QUFBQSxLQWxGaUI7QUE0RmpDZ0QseUJBQXFCO0FBQUEsMEJBQ2hCakQsSUFEZ0I7QUFFbkJxQyxjQUFNLFVBRmE7QUFHbkJyQixrQkFBVSxTQUhTO0FBSW5Ca0MsMEJBQWdCckMsV0FBaEIsWUFKbUIsRUFJbUI7QUFDdENDLG1CQUFXLFlBTFE7QUFNbkJrQyxrQkFBVSxRQU5TO0FBT25CL0Msb0JBQVk7QUFQTztBQUFBLEtBNUZZO0FBcUdqQ2tELG9CQUFnQjtBQUFBLDBCQUNYbkQsSUFEVztBQUVkb0Qsc0JBQWM7QUFGQTtBQUFBLEtBckdpQjtBQXlHakNDLHVCQUFtQiwyQkFBQ3JELElBQUQsRUFBT0csS0FBUDtBQUFBLDBCQUNkSCxJQURjO0FBRWpCbUIscUJBQWFoQixNQUFNbUQsV0FBTixDQUFrQkMsV0FBbEIsSUFBaUNwRCxNQUFNcUQsUUFBdkMsR0FBa0QsR0FBbEQsR0FBd0Q7QUFGcEQ7QUFBQTtBQXpHYyxHQUFoQjtBQUFBLENBQW5COztBQStHQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCTixvQkFBZ0I7QUFBQSwwQkFDWG5ELElBRFc7QUFFZGdDLGlCQUFTLENBRks7QUFHZFIsZUFBTzVCLE9BQU82QixTQUhBO0FBSWQsa0JBQVU7QUFDUkQsaUJBQU81QixPQUFPNkI7QUFETjtBQUpJO0FBQUEsS0FEVTtBQVMxQjRCLHVCQUFtQjtBQUFBLDBCQUNkckQsSUFEYztBQUVqQndCLGVBQU81QixPQUFPNkIsU0FGRztBQUdqQixrQkFBVTtBQUNSRCxpQkFBTzVCLE9BQU82QjtBQUROLFNBSE87QUFNakJPLGlCQUFTO0FBTlE7QUFBQSxLQVRPO0FBaUIxQjBCLGdCQUFZO0FBQUEsMEJBQ1AxRCxJQURPO0FBRVY4QixnQkFBUTtBQUZFO0FBQUE7QUFqQmMsR0FBUDtBQUFBLENBQXJCOztBQXVCQSxJQUFNNkIsU0FBUyxTQUFUQSxNQUFTLENBQUM5QyxXQUFELEVBQWlDO0FBQUEsTUFBbkIrQyxNQUFtQix1RUFBVixLQUFVOztBQUM5QyxNQUFNQyxhQUFhL0QsV0FBV2UsV0FBWCxDQUFuQjtBQUNBLE1BQUkrQyxNQUFKLEVBQVk7QUFDVix3QkFBWUMsVUFBWixFQUEyQkosY0FBM0I7QUFDRDtBQUNELFNBQU9JLFVBQVA7QUFDRCxDQU5EOztBQVFBLGVBQWVGLE1BQWYiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cclxuaW1wb3J0IGNvbG9ycyBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tc3R5bGVzL3N0eWxlcy9fY29sb3JzLnNjc3MnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcclxuXHJcbi8vIFN0eWxlcyBzaGFyZWQgYmV0d2VlbiBib3RoIEZsb2F0aW5nU2VsZWN0IGltcGxlbWVudGF0aW9uc1xyXG5jb25zdCBtYWluU3R5bGVzID0gaW5wdXRIZWlnaHQgPT4gKHtcclxuICBjb250YWluZXI6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcclxuICB9KSxcclxuXHJcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXHJcbiAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmNvbG9yUHNldWRvRm9jdXNlZCA6IGNvbG9ycy5jb2xvckxpZ2h0R3JheSxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gYGluc2V0IDAgMXB4IDFweCAke2NvbG9ycy5jb2xvcldoaXRlfSwgMCAwIDhweCAke2NvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWR9YCA6IDAsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclBzZXVkb0ZvY3VzZWQgOiBjb2xvcnMuY29sb3JMaWdodEdyYXksXHJcbiAgICB9LFxyXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBvdXRsaW5lOiAwLFxyXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcclxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxyXG4gIH0pLFxyXG5cclxuICBncm91cEhlYWRpbmc6ICgpID0+ICh7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuZ3V0dGVyV2lkdGgsXHJcbiAgfSksXHJcblxyXG4gIGluZGljYXRvclNlcGFyYXRvcjogKCkgPT4gKHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG5cclxuICBpbnB1dDogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gIH0pLFxyXG5cclxuICBtZW51OiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLmNvbG9yTGlnaHRHcmF5fWAsXHJcbiAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICBib3hTaGFkb3c6IDAsXHJcbiAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSksXHJcbiAgbWVudUxpc3Q6IGJhc2UgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gIH0pLFxyXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yU2VsZWN0U2VsZWN0ZWQsXHJcbiAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcclxuICB9KSxcclxuICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZCxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JCdXR0b25Ib3ZlcixcclxuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvcldoaXRlLFxyXG4gICAgfSxcclxuICAgIGZsZXg6ICcwIDAgYXV0bycsXHJcbiAgfSksXHJcbiAgb3B0aW9uOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmlzU2VsZWN0ZWRcclxuICAgICAgPyBjb2xvcnMuY29sb3JTZWxlY3RTZWxlY3RlZFxyXG4gICAgICA6IHN0YXRlLmlzRm9jdXNlZCA/IGNvbG9ycy5jb2xvclNlbGVjdEhvdmVyIDogJ3RyYW5zcGFyZW50JyxcclxuICAgIGNvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkXHJcbiAgICAgID8gY29sb3JzLmNvbG9yVGV4dFxyXG4gICAgICA6IHN0YXRlLmlzU2VsZWN0ZWQgPyBjb2xvcnMuY29sb3JUZXh0IDogJ2luaGVyaXQnLFxyXG4gICAgZGlzcGxheTogc3RhdGUuZGF0YS5pc0hpZGRlbiAmJiAhc3RhdGUuZGF0YS5tYXRjaCA/ICdub25lJyA6ICdibG9jaycsXHJcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvclNlbGVjdEhvdmVyIH0sXHJcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzXHJcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcclxuICB9KSxcclxuICBzaW5nbGVWYWx1ZTogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gIH0pLFxyXG4gIHZhbHVlQ29udGFpbmVyOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleDogJzEgMSBhdXRvJyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcclxuICB9KSxcclxuICBpbmRpY2F0b3JzQ29udGFpbmVyOiBiYXNlID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgZmxleDogJzAgMCBhdXRvJyxcclxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXHJcbiAgICBoZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcclxuICB9KSxcclxuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIHBhZGRpbmdSaWdodDogJzAnLFxyXG4gIH0pLFxyXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgcGFkZGluZ0xlZnQ6IHN0YXRlLnNlbGVjdFByb3BzLmlzQ2xlYXJhYmxlICYmIHN0YXRlLmhhc1ZhbHVlID8gJzAnIDogJzhweCcsXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuY29uc3QgcG9ydGFsU3R5bGVzID0gKCkgPT4gKHtcclxuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVGV4dCxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gICAgfSxcclxuICB9KSxcclxuICBkcm9wZG93bkluZGljYXRvcjogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGNvbG9yOiBjb2xvcnMuY29sb3JUZXh0LFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgY29sb3I6IGNvbG9ycy5jb2xvclRleHQsXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZzogJzAgMnB4IDAgMCcsXHJcbiAgfSksXHJcbiAgbWVudVBvcnRhbDogYmFzZSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIHpJbmRleDogOTk5OSxcclxuICB9KSxcclxufSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoaW5wdXRIZWlnaHQsIHBvcnRhbCA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgYmFzZVN0eWxlcyA9IG1haW5TdHlsZXMoaW5wdXRIZWlnaHQpO1xyXG4gIGlmIChwb3J0YWwpIHtcclxuICAgIHJldHVybiB7IC4uLmJhc2VTdHlsZXMsIC4uLnBvcnRhbFN0eWxlcygpIH07XHJcbiAgfVxyXG4gIHJldHVybiBiYXNlU3R5bGVzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xyXG4iXX0=