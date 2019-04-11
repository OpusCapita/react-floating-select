import React from 'react';
import { components } from 'react-select';
import CaretDown from 'react-icons/lib/fa/caret-down';
import CaretUp from 'react-icons/lib/fa/caret-up';

export function DropdownOpenIndicator(props) {
  return components.DropdownIndicator && React.createElement(
    components.DropdownIndicator,
    props,
    React.createElement(CaretDown, { height: '16px', width: '16px' })
  );
}

export function DropdownCloseIndicator(props) {
  return components.DropdownIndicator && React.createElement(
    components.DropdownIndicator,
    props,
    React.createElement(CaretUp, { height: '16px', width: '16px' })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9iYXNlL2NvbXBvbmVudHMvZHJvcGRvd24taW5kaWNhdG9yLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJjb21wb25lbnRzIiwiQ2FyZXREb3duIiwiQ2FyZXRVcCIsIkRyb3Bkb3duT3BlbkluZGljYXRvciIsInByb3BzIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJEcm9wZG93bkNsb3NlSW5kaWNhdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsK0JBQXRCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiw2QkFBcEI7O0FBRUEsT0FBTyxTQUFTQyxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0M7QUFDM0MsU0FBT0osV0FBV0ssaUJBQVgsSUFDTDtBQUFDLGNBQUQsQ0FBWSxpQkFBWjtBQUFrQ0QsU0FBbEM7QUFDRSx3QkFBQyxTQUFELElBQVcsUUFBTyxNQUFsQixFQUF5QixPQUFNLE1BQS9CO0FBREYsR0FERjtBQUlEOztBQUVELE9BQU8sU0FBU0Usc0JBQVQsQ0FBZ0NGLEtBQWhDLEVBQXVDO0FBQzVDLFNBQU9KLFdBQVdLLGlCQUFYLElBQ0w7QUFBQyxjQUFELENBQVksaUJBQVo7QUFBa0NELFNBQWxDO0FBQ0Usd0JBQUMsT0FBRCxJQUFTLFFBQU8sTUFBaEIsRUFBdUIsT0FBTSxNQUE3QjtBQURGLEdBREY7QUFJRCIsImZpbGUiOiJkcm9wZG93bi1pbmRpY2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IENhcmV0RG93biBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtZG93bic7XG5pbXBvcnQgQ2FyZXRVcCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtdXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gRHJvcGRvd25PcGVuSW5kaWNhdG9yKHByb3BzKSB7XG4gIHJldHVybiBjb21wb25lbnRzLkRyb3Bkb3duSW5kaWNhdG9yICYmIChcbiAgICA8Y29tcG9uZW50cy5Ecm9wZG93bkluZGljYXRvciB7Li4ucHJvcHN9PlxuICAgICAgPENhcmV0RG93biBoZWlnaHQ9XCIxNnB4XCIgd2lkdGg9XCIxNnB4XCIgLz5cbiAgICA8L2NvbXBvbmVudHMuRHJvcGRvd25JbmRpY2F0b3I+KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duQ2xvc2VJbmRpY2F0b3IocHJvcHMpIHtcbiAgcmV0dXJuIGNvbXBvbmVudHMuRHJvcGRvd25JbmRpY2F0b3IgJiYgKFxuICAgIDxjb21wb25lbnRzLkRyb3Bkb3duSW5kaWNhdG9yIHsuLi5wcm9wc30+XG4gICAgICA8Q2FyZXRVcCBoZWlnaHQ9XCIxNnB4XCIgd2lkdGg9XCIxNnB4XCIgLz5cbiAgICA8L2NvbXBvbmVudHMuRHJvcGRvd25JbmRpY2F0b3I+KTtcbn1cbiJdfQ==