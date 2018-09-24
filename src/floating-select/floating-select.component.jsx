import React from 'react';
import Select from 'react-select';
import DropdownIndicator from './dropdown-indicator.component';
import styles from './styles';

export default function FloatingSelect(props) {
  return (
    <Select
      {...props}
      components={{ DropdownIndicator }}
      menuPlacement="auto"
      styles={styles}
    />
  );
}
