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
        color: _ocCmTheme.colors.grey9
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
        color: _ocCmTheme.colors.grey9,
        ':hover': {
          color: _ocCmTheme.colors.grey9
        }
      });
    },
    dropdownIndicator: function dropdownIndicator(base) {
      return _extends({}, base, {
        color: _ocCmTheme.colors.grey9,
        ':hover': {
          color: _ocCmTheme.colors.grey9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwibGluZUhlaWdodCIsImNvbnRyb2wiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImlzRGlzYWJsZWQiLCJjb2xvcnMiLCJ3aGl0ZSIsImJvcmRlckNvbG9yIiwiaXNGb2N1c2VkIiwieWVsbG93IiwiZ3JleTMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtaW5IZWlnaHQiLCJpbnB1dEhlaWdodCIsImJveFNpemluZyIsIm91dGxpbmUiLCJmbGV4V3JhcCIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJkaXNwbGF5IiwiaW5wdXQiLCJjb2xvciIsImdyZXk5IiwibWVudSIsImJvcmRlciIsImdyZXk2IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWVudUxpc3QiLCJwYWRkaW5nIiwibXVsdGlWYWx1ZUxhYmVsIiwiZ3JleTUiLCJtdWx0aVZhbHVlUmVtb3ZlIiwiZ3JleTgiLCJmbGV4Iiwib3B0aW9uIiwiaXNTZWxlY3RlZCIsImdyZXk0IiwiZGF0YSIsImlzSGlkZGVuIiwibWF0Y2giLCJncm91cCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJvdmVyZmxvdyIsImluZGljYXRvcnNDb250YWluZXIiLCJoZWlnaHQiLCJjbGVhckluZGljYXRvciIsInBhZGRpbmdSaWdodCIsImRyb3Bkb3duSW5kaWNhdG9yIiwic2VsZWN0UHJvcHMiLCJpc0NsZWFyYWJsZSIsImhhc1ZhbHVlIiwicG9ydGFsU3R5bGVzIiwibWVudVBvcnRhbCIsInN0eWxlcyIsInBvcnRhbCIsImJhc2VTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7a1FBQUE7OztBQUNBOzs7Ozs7QUFF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QUFBLDBCQUNkeEQsSUFEYztBQUVqQjJCLGVBQU9yQixrQkFBT3NCLEtBRkc7QUFHakIsa0JBQVU7QUFDUkQsaUJBQU9yQixrQkFBT3NCO0FBRE4sU0FITztBQU1qQlEsaUJBQVM7QUFOUTtBQUFBLEtBVE87QUFpQjFCeUIsZ0JBQVk7QUFBQSwwQkFDUDdELElBRE87QUFFVmtDLGdCQUFRO0FBRkU7QUFBQTtBQWpCYyxHQUFQO0FBQUEsQ0FBckI7O0FBdUJBLElBQU00QixTQUFTLFNBQVRBLE1BQVMsQ0FBQy9DLFdBQUQsRUFBaUM7QUFBQSxNQUFuQmdELE1BQW1CLHVFQUFWLEtBQVU7O0FBQzlDLE1BQU1DLGFBQWFsRSxXQUFXaUIsV0FBWCxDQUFuQjtBQUNBLE1BQUlnRCxNQUFKLEVBQVk7QUFDVix3QkFBWUMsVUFBWixFQUEyQkosY0FBM0I7QUFDRDtBQUNELFNBQU9JLFVBQVA7QUFDRCxDQU5EOztrQkFRZUYsTSIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IHRoZW1lLCB7IGNvbG9ycyB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLXRoZW1lJztcblxuLy8gU3R5bGVzIHNoYXJlZCBiZXR3ZWVuIGJvdGggRmxvYXRpbmdTZWxlY3QgaW1wbGVtZW50YXRpb25zXG5jb25zdCBtYWluU3R5bGVzID0gaW5wdXRIZWlnaHQgPT4gKHtcbiAgY29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG5cbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkID8gJyNlZWUnIDogY29sb3JzLndoaXRlLFxuICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMueWVsbG93IDogY29sb3JzLmdyZXkzLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IGBpbnNldCAwIDFweCAxcHggJHtjb2xvcnMud2hpdGV9LCAwIDAgOHB4ICR7Y29sb3JzLnllbGxvd31gIDogMCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMueWVsbG93IDogY29sb3JzLmdyZXkzLFxuICAgIH0sXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG5cbiAgZ3JvdXBIZWFkaW5nOiAoKSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuZ3V0dGVyV2lkdGgsXG4gIH0pLFxuXG4gIGluZGljYXRvclNlcGFyYXRvcjogKCkgPT4gKHsgZGlzcGxheTogJ25vbmUnIH0pLFxuXG4gIGlucHV0OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICB9KSxcblxuICBtZW51OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTZ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiAwLFxuICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgekluZGV4OiAzLFxuICB9KSxcbiAgbWVudUxpc3Q6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0pLFxuICBtdWx0aVZhbHVlTGFiZWw6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk1LFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTUsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk4LFxuICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICB9LFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gIH0pLFxuICBvcHRpb246IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgICc6YWN0aXZlJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNTZWxlY3RlZFxuICAgICAgPyBjb2xvcnMuZ3JleTVcbiAgICAgIDogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLmdyZXk0IDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogc3RhdGUuaXNEaXNhYmxlZFxuICAgICAgPyBjb2xvcnMuZ3JleTlcbiAgICAgIDogc3RhdGUuaXNTZWxlY3RlZCA/IGNvbG9ycy5ncmV5OSA6ICdpbmhlcml0JyxcbiAgICBkaXNwbGF5OiBzdGF0ZS5kYXRhLmlzSGlkZGVuICYmICFzdGF0ZS5kYXRhLm1hdGNoID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5NCB9LFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuZGF0YS5ncm91cCA/ICc1MHB4JyA6ICcxMnB4JyxcbiAgfSksXG4gIHNpbmdsZVZhbHVlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICB9KSxcbiAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVycyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBpbmRpY2F0b3JzQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgaGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVycyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBjbGVhckluZGljYXRvcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZ1JpZ2h0OiAnMCcsXG4gIH0pLFxuICBkcm9wZG93bkluZGljYXRvcjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZ0xlZnQ6IHN0YXRlLnNlbGVjdFByb3BzLmlzQ2xlYXJhYmxlICYmIHN0YXRlLmhhc1ZhbHVlID8gJzAnIDogJzhweCcsXG4gIH0pLFxufSk7XG5cbmNvbnN0IHBvcnRhbFN0eWxlcyA9ICgpID0+ICh7XG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgfSxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgIH0sXG4gICAgcGFkZGluZzogJzAgMnB4IDAgMCcsXG4gIH0pLFxuICBtZW51UG9ydGFsOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICB6SW5kZXg6IDk5OTksXG4gIH0pLFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IChpbnB1dEhlaWdodCwgcG9ydGFsID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYmFzZVN0eWxlcyA9IG1haW5TdHlsZXMoaW5wdXRIZWlnaHQpO1xuICBpZiAocG9ydGFsKSB7XG4gICAgcmV0dXJuIHsgLi4uYmFzZVN0eWxlcywgLi4ucG9ydGFsU3R5bGVzKCkgfTtcbiAgfVxuICByZXR1cm4gYmFzZVN0eWxlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiJdfQ==