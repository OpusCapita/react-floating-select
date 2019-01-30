import React from 'react';

export function flattenGroupedChildren(children) {
  return children.reduce(function (result, child) {
    var _child$props$children = child.props.children,
        nestedChildren = _child$props$children === undefined ? [] : _child$props$children;


    return [].concat(result, [React.cloneElement(child, { type: 'group' }, [])], nestedChildren);
  }, []);
}

export function isFocused(component) {
  return component.props.isFocused === true;
}

export function getCurrentIndex(children) {
  return Math.max(children.findIndex(isFocused), 0);
}

export function createGetHeight(props) {
  var groupHeadingStyles = props.groupHeadingStyles,
      noOptionsMsgStyles = props.noOptionsMsgStyles,
      optionStyles = props.optionStyles,
      loadingMsgStyles = props.loadingMsgStyles;

  return function getHeight() {
    var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _child$props = child.props;
    _child$props = _child$props === undefined ? {} : _child$props;
    var type = _child$props.type,
        children = _child$props.children,
        _child$props$selectPr = _child$props.selectProps;
    _child$props$selectPr = _child$props$selectPr === undefined ? {} : _child$props$selectPr;
    var noOptionsMessage = _child$props$selectPr.noOptionsMessage,
        loadingMessage = _child$props$selectPr.loadingMessage;


    if (type === 'group') {
      var _groupHeadingStyles$h = groupHeadingStyles.height,
          height = _groupHeadingStyles$h === undefined ? 25 : _groupHeadingStyles$h;

      return height;
    } else if (type === 'option') {
      var _optionStyles$height = optionStyles.height,
          _height = _optionStyles$height === undefined ? 35 : _optionStyles$height;

      return _height;
    } else if (typeof noOptionsMessage === 'function' && children === noOptionsMessage()) {
      var _noOptionsMsgStyles$h = noOptionsMsgStyles.height,
          _height2 = _noOptionsMsgStyles$h === undefined ? 35 : _noOptionsMsgStyles$h;

      return _height2;
    } else if (typeof loadingMessage === 'function' && children === loadingMessage()) {
      var _loadingMsgStyles$hei = loadingMsgStyles.height,
          _height3 = _loadingMsgStyles$hei === undefined ? 35 : _loadingMsgStyles$hei;

      return _height3;
    }

    return 35;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQvdXRpbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZsYXR0ZW5Hcm91cGVkQ2hpbGRyZW4iLCJjaGlsZHJlbiIsInJlZHVjZSIsInJlc3VsdCIsImNoaWxkIiwicHJvcHMiLCJuZXN0ZWRDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsInR5cGUiLCJpc0ZvY3VzZWQiLCJjb21wb25lbnQiLCJnZXRDdXJyZW50SW5kZXgiLCJNYXRoIiwibWF4IiwiZmluZEluZGV4IiwiY3JlYXRlR2V0SGVpZ2h0IiwiZ3JvdXBIZWFkaW5nU3R5bGVzIiwibm9PcHRpb25zTXNnU3R5bGVzIiwib3B0aW9uU3R5bGVzIiwibG9hZGluZ01zZ1N0eWxlcyIsImdldEhlaWdodCIsInNlbGVjdFByb3BzIiwibm9PcHRpb25zTWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLE9BQU8sU0FBU0Msc0JBQVQsQ0FBZ0NDLFFBQWhDLEVBQTBDO0FBQy9DLFNBQU9BLFNBQVNDLE1BQVQsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQUEsZ0NBS3BDQSxLQUxvQyxDQUV0Q0MsS0FGc0MsQ0FHcENKLFFBSG9DO0FBQUEsUUFHMUJLLGNBSDBCLHlDQUdULEVBSFM7OztBQU94QyxxQkFDS0gsTUFETCxHQUVFSixNQUFNUSxZQUFOLENBQ0VILEtBREYsRUFFRSxFQUFFSSxNQUFNLE9BQVIsRUFGRixFQUdFLEVBSEYsQ0FGRixHQU9LRixjQVBMO0FBU0QsR0FoQk0sRUFnQkosRUFoQkksQ0FBUDtBQWlCRDs7QUFFRCxPQUFPLFNBQVNHLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCO0FBQ25DLFNBQU9BLFVBQVVMLEtBQVYsQ0FBZ0JJLFNBQWhCLEtBQThCLElBQXJDO0FBQ0Q7O0FBRUQsT0FBTyxTQUFTRSxlQUFULENBQXlCVixRQUF6QixFQUFtQztBQUN4QyxTQUFPVyxLQUFLQyxHQUFMLENBQ0xaLFNBQVNhLFNBQVQsQ0FBbUJMLFNBQW5CLENBREssRUFFTCxDQUZLLENBQVA7QUFJRDs7QUFFRCxPQUFPLFNBQVNNLGVBQVQsQ0FBeUJWLEtBQXpCLEVBQWdDO0FBQUEsTUFFbkNXLGtCQUZtQyxHQU1qQ1gsS0FOaUMsQ0FFbkNXLGtCQUZtQztBQUFBLE1BR25DQyxrQkFIbUMsR0FNakNaLEtBTmlDLENBR25DWSxrQkFIbUM7QUFBQSxNQUluQ0MsWUFKbUMsR0FNakNiLEtBTmlDLENBSW5DYSxZQUptQztBQUFBLE1BS25DQyxnQkFMbUMsR0FNakNkLEtBTmlDLENBS25DYyxnQkFMbUM7O0FBT3JDLFNBQU8sU0FBU0MsU0FBVCxHQUErQjtBQUFBLFFBQVpoQixLQUFZLHVFQUFKLEVBQUk7QUFBQSx1QkFVaENBLEtBVmdDLENBRWxDQyxLQUZrQztBQUFBLGdEQVM5QixFQVQ4QjtBQUFBLFFBR2hDRyxJQUhnQyxnQkFHaENBLElBSGdDO0FBQUEsUUFJaENQLFFBSmdDLGdCQUloQ0EsUUFKZ0M7QUFBQSw2Q0FLaENvQixXQUxnQztBQUFBLGtFQVE1QixFQVI0QjtBQUFBLFFBTTlCQyxnQkFOOEIseUJBTTlCQSxnQkFOOEI7QUFBQSxRQU85QkMsY0FQOEIseUJBTzlCQSxjQVA4Qjs7O0FBWXBDLFFBQUlmLFNBQVMsT0FBYixFQUFzQjtBQUFBLGtDQUNJUSxrQkFESixDQUNaUSxNQURZO0FBQUEsVUFDWkEsTUFEWSx5Q0FDSCxFQURHOztBQUVwQixhQUFPQSxNQUFQO0FBQ0QsS0FIRCxNQUdPLElBQUloQixTQUFTLFFBQWIsRUFBdUI7QUFBQSxpQ0FDSlUsWUFESSxDQUNwQk0sTUFEb0I7QUFBQSxVQUNwQkEsT0FEb0Isd0NBQ1gsRUFEVzs7QUFFNUIsYUFBT0EsT0FBUDtBQUNELEtBSE0sTUFHQSxJQUFJLE9BQU9GLGdCQUFQLEtBQTRCLFVBQTVCLElBQTBDckIsYUFBYXFCLGtCQUEzRCxFQUErRTtBQUFBLGtDQUM1REwsa0JBRDRELENBQzVFTyxNQUQ0RTtBQUFBLFVBQzVFQSxRQUQ0RSx5Q0FDbkUsRUFEbUU7O0FBRXBGLGFBQU9BLFFBQVA7QUFDRCxLQUhNLE1BR0EsSUFBSSxPQUFPRCxjQUFQLEtBQTBCLFVBQTFCLElBQXdDdEIsYUFBYXNCLGdCQUF6RCxFQUEyRTtBQUFBLGtDQUN4REosZ0JBRHdELENBQ3hFSyxNQUR3RTtBQUFBLFVBQ3hFQSxRQUR3RSx5Q0FDL0QsRUFEK0Q7O0FBRWhGLGFBQU9BLFFBQVA7QUFDRDs7QUFFRCxXQUFPLEVBQVA7QUFDRCxHQTNCRDtBQTRCRCIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5Hcm91cGVkQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNoaWxkcmVuLnJlZHVjZSgocmVzdWx0LCBjaGlsZCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXN0ZWRDaGlsZHJlbiA9IFtdLFxuICAgICAgfSxcbiAgICB9ID0gY2hpbGQ7XG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgeyB0eXBlOiAnZ3JvdXAnIH0sXG4gICAgICAgIFtdLFxuICAgICAgKSxcbiAgICAgIC4uLm5lc3RlZENoaWxkcmVuLFxuICAgIF07XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9jdXNlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGNvbXBvbmVudC5wcm9wcy5pc0ZvY3VzZWQgPT09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50SW5kZXgoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIE1hdGgubWF4KFxuICAgIGNoaWxkcmVuLmZpbmRJbmRleChpc0ZvY3VzZWQpLFxuICAgIDAsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZXRIZWlnaHQocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGdyb3VwSGVhZGluZ1N0eWxlcyxcbiAgICBub09wdGlvbnNNc2dTdHlsZXMsXG4gICAgb3B0aW9uU3R5bGVzLFxuICAgIGxvYWRpbmdNc2dTdHlsZXMsXG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldEhlaWdodChjaGlsZCA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHNlbGVjdFByb3BzOiB7XG4gICAgICAgICAgbm9PcHRpb25zTWVzc2FnZSxcbiAgICAgICAgICBsb2FkaW5nTWVzc2FnZSxcbiAgICAgICAgfSA9IHt9LFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSBjaGlsZDtcblxuICAgIGlmICh0eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICBjb25zdCB7IGhlaWdodCA9IDI1IH0gPSBncm91cEhlYWRpbmdTdHlsZXM7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29wdGlvbicpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0ID0gMzUgfSA9IG9wdGlvblN0eWxlcztcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9PcHRpb25zTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyAmJiBjaGlsZHJlbiA9PT0gbm9PcHRpb25zTWVzc2FnZSgpKSB7XG4gICAgICBjb25zdCB7IGhlaWdodCA9IDM1IH0gPSBub09wdGlvbnNNc2dTdHlsZXM7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGxvYWRpbmdNZXNzYWdlID09PSAnZnVuY3Rpb24nICYmIGNoaWxkcmVuID09PSBsb2FkaW5nTWVzc2FnZSgpKSB7XG4gICAgICBjb25zdCB7IGhlaWdodCA9IDM1IH0gPSBsb2FkaW5nTXNnU3R5bGVzO1xuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gMzU7XG4gIH07XG59XG4iXX0=