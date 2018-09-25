import React from 'react';
import Creatable from 'react-select/lib/Creatable';
import { DropdownCloseIndicator, DropdownOpenIndicator } from './dropdown-indicator.component';
import styles from './styles';
import FloatingSelectBase from './floating-select-base.component';

export default class FloatingSelectCreatable extends FloatingSelectBase {
  render = () => (
    <Creatable
      {...this.props}
      components={{ DropdownIndicator: this.state.isOpen ? DropdownCloseIndicator : DropdownOpenIndicator }}
      menuPlacement="auto"
      onMenuOpen={this.handleOpenMenu}
      onMenuClose={this.handleCloseMenu}
      styles={styles}
    />
  );
}
