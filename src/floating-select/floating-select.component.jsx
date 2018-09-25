import React from 'react';
import Select from 'react-select';
import { DropdownCloseIndicator, DropdownOpenIndicator } from './dropdown-indicator.component';
import styles from './styles';
import FloatingSelectBase from './floating-select-base.component';

export default class FloatingSelect extends FloatingSelectBase {
  render = () => (
    <Select
      {...this.props}
      components={{ DropdownIndicator: this.state.isOpen ? DropdownCloseIndicator : DropdownOpenIndicator }}
      menuPlacement="auto"
      onMenuOpen={this.handleOpenMenu}
      onMenuClose={this.handleCloseMenu}
      styles={styles}
    />
  );
}
