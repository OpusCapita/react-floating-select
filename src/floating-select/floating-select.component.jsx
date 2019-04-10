import React from 'react';
import Select from 'react-select';
import styles from '../base/styles';
import FloatingSelectBase from '../base/floating-select-base.component';

export default class FloatingSelect extends FloatingSelectBase {
  render = () => {
    const { components, customStyles, ...rest } = this.props;
    const comp = { ...components, ...this.state.components };
    return (
      <Select
        {...rest}
        components={comp}
        menuPlacement="auto"
        menuPortalTarget={document.body}
        ref={(el) => {
          this.selectRef = el;
        }}
        onMenuOpen={this.handleOpenMenu}
        onMenuClose={this.handleCloseMenu}
        styles={styles(this.props.controlHeight, customStyles)}
        nonce={this.getNonce()}
      />
    );
  }
}
