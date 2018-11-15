import React from 'react';
import Creatable from 'react-select/lib/Creatable';
import styles from '../floating-select/styles';
import FloatingSelectBase from '../floating-select/floating-select-base.component';

const Portal = true;

export default class FloatingSelectPortalCreatable extends FloatingSelectBase {
  render = () => {
    const { components, ...rest } = this.props;
    const comp = { ...components, ...this.state.components };
    return (
      <Creatable
        {...rest}
        components={comp}
        menuPlacement="auto"
        menuPortalTarget={document.body}
        onMenuOpen={this.handleOpenMenu}
        onMenuClose={this.handleCloseMenu}
        styles={styles(this.props.controlHeight, Portal)}
      />
    );
  }
}
