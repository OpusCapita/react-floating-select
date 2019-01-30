import React from 'react';
import Select from 'react-select';
import styles from '../floating-select/styles';
import FloatingSelectBase from '../floating-select/floating-select-base.component';
import MenuList from './floating-select-windowed-menu-list.component';


export default class FloatingSelectWindowed extends FloatingSelectBase {
  render = () => {
    const { components, ...rest } = this.props;

    const comp = {
      ...components,
      ...this.state.components,
      ...{ MenuList },
    };

    // Can't figure out a way to get styles for a single option when using
    // custom MenuList component. So, we'll have to reset the existing styles
    // by returning an empty object and then style these with CSS.
    const modifiedStyles = Object.assign(styles(this.props.controlHeight), {
      option: () => ({}),
    });

    return (
      <Select
        {...rest}
        components={comp}
        styles={modifiedStyles}
        menuPlacement="auto"
        onMenuOpen={this.handleOpenMenu}
        onMenuClose={this.handleCloseMenu}
        ref={(el) => {
          this.selectRef = el;
        }}
        nonce={this.getNonce()}
      />
    );
  };
}
