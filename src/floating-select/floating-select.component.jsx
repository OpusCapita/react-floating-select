import React from 'react';
import Select, { components } from 'react-select';
import Creatable from 'react-select/lib/Creatable';
import CaretDown from 'react-icons/lib/fa/caret-down';
import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';

export default function FloatingSelect(props) {
  const DropdownIndicator = (props) => {
    return components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <CaretDown height="16px" width="16px" />
      </components.DropdownIndicator>
    );
  };

  const styles = {
    container: base => ({
      ...base,
      height: '34px',
    }),
    control: (base, state) => ({
      ...base,
      backgroundColor: colors.colorWhite,
      borderColor: (state.isFocused && !state.isOpen) || state.isHovered ? `${colors.colorPseudoFocused}!important` : colors.colorLightGray,
      borderRadius: 0,
      boxShadow: state.isFocused && !state.isOpen ? 0 : 0,
      outline: 0,
      height: '34px',
      minHeight: '34px',
    }),
    dropdownIndicator: base => ({
      ...base,
      color: `${colors.colorText}!important`,
    }),
    indicatorSeparator: () => ({}),
    input: base => ({
      ...base,
      color: colors.colorText,
    }),
    menu: base => ({
      ...base,
      borderRadius: 0,
      boxShadow: 0,
      border: `1px solid ${colors.colorLightGray}`,
      marginTop: 0,
    }),
    menuList: base => ({
      ...base,
      padding: 0,
    }),
    option: (base, state) => ({
      ...base,
      height: '32px',
      backgroundColor: state.isSelected ? colors.colorOrange : colors.colorWhite,
    }),
    singleValue: base => ({
      ...base,
      color: colors.colorText,
    }),
  };

  return (
    <Select
      {...props}
      components={{ DropdownIndicator }}
      menuPlacement="auto"
      styles={styles}
    />
  );
}
