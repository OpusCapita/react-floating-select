import React from 'react';
import Select from 'react-select';
import styles from '../base/styles';
import FloatingSelectBase from '../base/floating-select-base.component';
import MenuList from './floating-select-infinite-menu-list.component';

export default class FloatingSelectInfinite extends FloatingSelectBase {
  render = () => {
    const { components, customStyles, ...rest } = this.props;

    const comp = {
      ...components,
      ...this.state.components,
      ...{ MenuList },
    };

    // Can't figure out a way to get styles for a single option when using
    // custom MenuList component. So, we'll have to reset the existing styles
    // by returning an empty object and then style these with CSS.
    const modifiedStyles = Object.assign(styles(this.props.controlHeight, customStyles), {
      option: () => ({}),
    });

    return (
      <Select
        {...rest}
        components={comp}
        styles={modifiedStyles}
        menuPlacement="auto"
        menuPortalTarget={document.body}
        ref={(el) => {
          this.selectRef = el;
        }}
        onMenuOpen={this.handleOpenMenu}
        onMenuClose={this.handleCloseMenu}
        nonce={this.getNonce()}
      />
    );
  };
}
