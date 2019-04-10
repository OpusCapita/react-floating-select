import React from 'react';
import { components } from 'react-select';
import CaretDown from 'react-icons/lib/fa/caret-down';
import CaretUp from 'react-icons/lib/fa/caret-up';

export function DropdownOpenIndicator(props) {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <CaretDown height="16px" width="16px" />
    </components.DropdownIndicator>);
}

export function DropdownCloseIndicator(props) {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <CaretUp height="16px" width="16px" />
    </components.DropdownIndicator>);
}
