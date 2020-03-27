import React from 'react';
import { components } from 'react-select';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

export function DropdownOpenIndicator(props) {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <FaCaretDown height="16px" width="16px" />
    </components.DropdownIndicator>
  );
}

export function DropdownCloseIndicator(props) {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <FaCaretUp height="16px" width="16px" />
    </components.DropdownIndicator>
  );
}
