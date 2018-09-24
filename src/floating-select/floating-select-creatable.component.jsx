import React from 'react';
import Creatable from 'react-select/lib/Creatable';
import DropdownIndicator from './dropdown-indicator.component';
import styles from './styles';

export default function FloatingSelectCreatable(props) {
  return (
    <Creatable
      {...props}
      components={{ DropdownIndicator }}
      menuPlacement="auto"
      styles={styles}
    />
  );
}
