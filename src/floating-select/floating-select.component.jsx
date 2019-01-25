import React from 'react';
import Select from 'react-select';
import styles from './styles';
import FloatingSelectBase from './floating-select-base.component';

export default class FloatingSelect extends FloatingSelectBase {
  render = () => (
    <Select
      {...this.props}
      components={this.state.components}
      menuPlacement="auto"
      ref={(el) => {
        this.selectRef = el;
      }}
      onMenuOpen={this.handleOpenMenu}
      onMenuClose={this.handleCloseMenu}
      styles={styles(this.props.controlHeight)}
      nonce={this.getNonce()}
    />
  );
}
