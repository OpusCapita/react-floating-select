import React from 'react';
import { components } from 'react-select';
import CaretDown from 'react-icons/lib/fa/caret-down';

export default function DropdownIndicator(props) {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <CaretDown height="16px" width="16px" />
    </components.DropdownIndicator>);
}
