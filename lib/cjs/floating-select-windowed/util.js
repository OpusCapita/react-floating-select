'use strict';

exports.__esModule = true;
exports.flattenGroupedChildren = flattenGroupedChildren;
exports.isFocused = isFocused;
exports.getCurrentIndex = getCurrentIndex;
exports.createGetHeight = createGetHeight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flattenGroupedChildren(children) {
  return children.reduce(function (result, child) {
    var _child$props$children = child.props.children,
        nestedChildren = _child$props$children === undefined ? [] : _child$props$children;


    return [].concat(result, [_react2.default.cloneElement(child, { type: 'group' }, [])], nestedChildren);
  }, []);
}

function isFocused(component) {
  return component.props.isFocused === true;
}

function getCurrentIndex(children) {
  return Math.max(children.findIndex(isFocused), 0);
}

function createGetHeight(props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3Qtd2luZG93ZWQvdXRpbC5qcyJdLCJuYW1lcyI6WyJmbGF0dGVuR3JvdXBlZENoaWxkcmVuIiwiaXNGb2N1c2VkIiwiZ2V0Q3VycmVudEluZGV4IiwiY3JlYXRlR2V0SGVpZ2h0IiwiY2hpbGRyZW4iLCJyZWR1Y2UiLCJyZXN1bHQiLCJjaGlsZCIsInByb3BzIiwibmVzdGVkQ2hpbGRyZW4iLCJSZWFjdCIsImNsb25lRWxlbWVudCIsInR5cGUiLCJjb21wb25lbnQiLCJNYXRoIiwibWF4IiwiZmluZEluZGV4IiwiZ3JvdXBIZWFkaW5nU3R5bGVzIiwibm9PcHRpb25zTXNnU3R5bGVzIiwib3B0aW9uU3R5bGVzIiwibG9hZGluZ01zZ1N0eWxlcyIsImdldEhlaWdodCIsInNlbGVjdFByb3BzIiwibm9PcHRpb25zTWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7UUFFZ0JBLHNCLEdBQUFBLHNCO1FBb0JBQyxTLEdBQUFBLFM7UUFJQUMsZSxHQUFBQSxlO1FBT0FDLGUsR0FBQUEsZTs7QUFqQ2hCOzs7Ozs7QUFFTyxTQUFTSCxzQkFBVCxDQUFnQ0ksUUFBaEMsRUFBMEM7QUFDL0MsU0FBT0EsU0FBU0MsTUFBVCxDQUFnQixVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFBQSxnQ0FLcENBLEtBTG9DLENBRXRDQyxLQUZzQyxDQUdwQ0osUUFIb0M7QUFBQSxRQUcxQkssY0FIMEIseUNBR1QsRUFIUzs7O0FBT3hDLHFCQUNLSCxNQURMLEdBRUVJLGdCQUFNQyxZQUFOLENBQ0VKLEtBREYsRUFFRSxFQUFFSyxNQUFNLE9BQVIsRUFGRixFQUdFLEVBSEYsQ0FGRixHQU9LSCxjQVBMO0FBU0QsR0FoQk0sRUFnQkosRUFoQkksQ0FBUDtBQWlCRDs7QUFFTSxTQUFTUixTQUFULENBQW1CWSxTQUFuQixFQUE4QjtBQUNuQyxTQUFPQSxVQUFVTCxLQUFWLENBQWdCUCxTQUFoQixLQUE4QixJQUFyQztBQUNEOztBQUVNLFNBQVNDLGVBQVQsQ0FBeUJFLFFBQXpCLEVBQW1DO0FBQ3hDLFNBQU9VLEtBQUtDLEdBQUwsQ0FDTFgsU0FBU1ksU0FBVCxDQUFtQmYsU0FBbkIsQ0FESyxFQUVMLENBRkssQ0FBUDtBQUlEOztBQUVNLFNBQVNFLGVBQVQsQ0FBeUJLLEtBQXpCLEVBQWdDO0FBQUEsTUFFbkNTLGtCQUZtQyxHQU1qQ1QsS0FOaUMsQ0FFbkNTLGtCQUZtQztBQUFBLE1BR25DQyxrQkFIbUMsR0FNakNWLEtBTmlDLENBR25DVSxrQkFIbUM7QUFBQSxNQUluQ0MsWUFKbUMsR0FNakNYLEtBTmlDLENBSW5DVyxZQUptQztBQUFBLE1BS25DQyxnQkFMbUMsR0FNakNaLEtBTmlDLENBS25DWSxnQkFMbUM7O0FBT3JDLFNBQU8sU0FBU0MsU0FBVCxHQUErQjtBQUFBLFFBQVpkLEtBQVksdUVBQUosRUFBSTtBQUFBLHVCQVVoQ0EsS0FWZ0MsQ0FFbENDLEtBRmtDO0FBQUEsZ0RBUzlCLEVBVDhCO0FBQUEsUUFHaENJLElBSGdDLGdCQUdoQ0EsSUFIZ0M7QUFBQSxRQUloQ1IsUUFKZ0MsZ0JBSWhDQSxRQUpnQztBQUFBLDZDQUtoQ2tCLFdBTGdDO0FBQUEsa0VBUTVCLEVBUjRCO0FBQUEsUUFNOUJDLGdCQU44Qix5QkFNOUJBLGdCQU44QjtBQUFBLFFBTzlCQyxjQVA4Qix5QkFPOUJBLGNBUDhCOzs7QUFZcEMsUUFBSVosU0FBUyxPQUFiLEVBQXNCO0FBQUEsa0NBQ0lLLGtCQURKLENBQ1pRLE1BRFk7QUFBQSxVQUNaQSxNQURZLHlDQUNILEVBREc7O0FBRXBCLGFBQU9BLE1BQVA7QUFDRCxLQUhELE1BR08sSUFBSWIsU0FBUyxRQUFiLEVBQXVCO0FBQUEsaUNBQ0pPLFlBREksQ0FDcEJNLE1BRG9CO0FBQUEsVUFDcEJBLE9BRG9CLHdDQUNYLEVBRFc7O0FBRTVCLGFBQU9BLE9BQVA7QUFDRCxLQUhNLE1BR0EsSUFBSSxPQUFPRixnQkFBUCxLQUE0QixVQUE1QixJQUEwQ25CLGFBQWFtQixrQkFBM0QsRUFBK0U7QUFBQSxrQ0FDNURMLGtCQUQ0RCxDQUM1RU8sTUFENEU7QUFBQSxVQUM1RUEsUUFENEUseUNBQ25FLEVBRG1FOztBQUVwRixhQUFPQSxRQUFQO0FBQ0QsS0FITSxNQUdBLElBQUksT0FBT0QsY0FBUCxLQUEwQixVQUExQixJQUF3Q3BCLGFBQWFvQixnQkFBekQsRUFBMkU7QUFBQSxrQ0FDeERKLGdCQUR3RCxDQUN4RUssTUFEd0U7QUFBQSxVQUN4RUEsUUFEd0UseUNBQy9ELEVBRCtEOztBQUVoRixhQUFPQSxRQUFQO0FBQ0Q7O0FBRUQsV0FBTyxFQUFQO0FBQ0QsR0EzQkQ7QUE0QkQiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuR3JvdXBlZENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiBjaGlsZHJlbi5yZWR1Y2UoKHJlc3VsdCwgY2hpbGQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBjaGlsZHJlbjogbmVzdGVkQ2hpbGRyZW4gPSBbXSxcbiAgICAgIH0sXG4gICAgfSA9IGNoaWxkO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIHsgdHlwZTogJ2dyb3VwJyB9LFxuICAgICAgICBbXSxcbiAgICAgICksXG4gICAgICAuLi5uZXN0ZWRDaGlsZHJlbixcbiAgICBdO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZvY3VzZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBjb21wb25lbnQucHJvcHMuaXNGb2N1c2VkID09PSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEluZGV4KGNoaWxkcmVuKSB7XG4gIHJldHVybiBNYXRoLm1heChcbiAgICBjaGlsZHJlbi5maW5kSW5kZXgoaXNGb2N1c2VkKSxcbiAgICAwLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2V0SGVpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBncm91cEhlYWRpbmdTdHlsZXMsXG4gICAgbm9PcHRpb25zTXNnU3R5bGVzLFxuICAgIG9wdGlvblN0eWxlcyxcbiAgICBsb2FkaW5nTXNnU3R5bGVzLFxuICB9ID0gcHJvcHM7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRIZWlnaHQoY2hpbGQgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBzZWxlY3RQcm9wczoge1xuICAgICAgICAgIG5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgICAgbG9hZGluZ01lc3NhZ2UsXG4gICAgICAgIH0gPSB7fSxcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0gY2hpbGQ7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgY29uc3QgeyBoZWlnaHQgPSAyNSB9ID0gZ3JvdXBIZWFkaW5nU3R5bGVzO1xuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvcHRpb24nKSB7XG4gICAgICBjb25zdCB7IGhlaWdodCA9IDM1IH0gPSBvcHRpb25TdHlsZXM7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vT3B0aW9uc01lc3NhZ2UgPT09ICdmdW5jdGlvbicgJiYgY2hpbGRyZW4gPT09IG5vT3B0aW9uc01lc3NhZ2UoKSkge1xuICAgICAgY29uc3QgeyBoZWlnaHQgPSAzNSB9ID0gbm9PcHRpb25zTXNnU3R5bGVzO1xuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBsb2FkaW5nTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyAmJiBjaGlsZHJlbiA9PT0gbG9hZGluZ01lc3NhZ2UoKSkge1xuICAgICAgY29uc3QgeyBoZWlnaHQgPSAzNSB9ID0gbG9hZGluZ01zZ1N0eWxlcztcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIDM1O1xuICB9O1xufVxuIl19