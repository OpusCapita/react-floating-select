import React from 'react';
import Creatable from 'react-select/lib/Creatable';
import styles from './styles';
import FloatingSelectBase from './floating-select-base.component';

export default class FloatingSelectCreatable extends FloatingSelectBase {
  render = () => (
    <Creatable
      {...this.props}
      components={this.state.components}
      menuPlacement="auto"
      onMenuOpen={this.handleOpenMenu}
      onMenuClose={this.handleCloseMenu}
      styles={styles(this.props.controlHeight)}
    />
  );
}
