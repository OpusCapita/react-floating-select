/* eslint-disable no-nested-ternary */
import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

// Styles shared between both FloatingSelect implementations
const mainStyles = inputHeight => ({
  container: base => ({
    ...base,
    lineHeight: 'normal',
  }),

  control: (base, state) => ({
    ...base,
    backgroundColor: colors.colorWhite,
    borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
    borderRadius: 0,
    boxShadow: state.isFocused ? `inset 0 1px 1px ${colors.colorWhite}, 0 0 8px ${colors.colorPseudoFocused}` : 0,
    '&:hover': {
      borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
    },
    minHeight: `calc(${inputHeight} - 2px)`, // 1px borders
    boxSizing: 'border-box',
    outline: 0,
    flexWrap: 'no-wrap',
    lineHeight: 'normal',
  }),

  groupHeading: () => ({
    fontWeight: 'bold',
    paddingLeft: theme.gutterWidth,
  }),

  indicatorSeparator: () => ({ display: 'none' }),

  input: base => ({
    ...base,
    color: colors.colorText,
  }),

  menu: base => ({
    ...base,
    border: `1px solid ${colors.colorLightGray}`,
    borderRadius: 0,
    boxShadow: 0,
    marginBottom: 0,
    marginTop: 0,
    zIndex: 3,
  }),
  menuList: base => ({
    ...base,
    padding: 0,
  }),
  multiValueLabel: base => ({
    ...base,
    backgroundColor: colors.colorSelectSelected,
    borderRadius: 0,
    color: colors.colorText,
  }),
  multiValueRemove: base => ({
    ...base,
    backgroundColor: colors.colorSelectSelected,
    borderRadius: 0,
    color: colors.colorText,
    ':hover': {
      backgroundColor: colors.colorButtonHover,
      color: colors.colorWhite,
    },
    flex: '0 0 auto',
  }),
  option: (base, state) => ({
    ...base,
    ':active': { backgroundColor: 'none' },
    backgroundColor: state.isSelected
      ? colors.colorSelectSelected
      : state.isFocused ? colors.colorSelectHover : 'transparent',
    color: state.isDisabled
      ? colors.colorText
      : state.isSelected ? colors.colorText : 'inherit',
    display: state.data.isHidden && !state.data.match ? 'none' : 'block',
    ':hover': { backgroundColor: colors.colorSelectHover },
    minHeight: `calc(${inputHeight} - 2px)`, // 1px borders
    paddingLeft: state.data.group ? '50px' : '12px',
  }),
  singleValue: base => ({
    ...base,
    color: colors.colorText,
  }),
  valueContainer: base => ({
    ...base,
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: 'wrap',
    minHeight: `calc(${inputHeight} - 2px)`, // 1px borders,
    boxSizing: 'border-box',
    overflow: 'hidden',
    lineHeight: 'normal',
  }),
  indicatorsContainer: base => ({
    ...base,
    flex: '0 0 auto',
    flexWrap: 'no-wrap',
    height: `calc(${inputHeight} - 2px)`, // 1px borders,
    boxSizing: 'border-box',
    overflow: 'hidden',
    lineHeight: 'normal',
  }),
  clearIndicator: base => ({
    ...base,
    paddingRight: '0',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    paddingLeft: state.selectProps.isClearable && state.hasValue ? '0' : '8px',
  }),
});

const portalStyles = () => ({
  clearIndicator: base => ({
    ...base,
    padding: 0,
    color: colors.colorText,
    ':hover': {
      color: colors.colorText,
    },
  }),
  dropdownIndicator: base => ({
    ...base,
    color: colors.colorText,
    ':hover': {
      color: colors.colorText,
    },
    padding: '0 2px 0 0',
  }),
  menuPortal: base => ({
    ...base,
    zIndex: 9999,
  }),
});

const styles = (inputHeight, portal = false) => {
  const baseStyles = mainStyles(inputHeight);
  if (portal) {
    return { ...baseStyles, ...portalStyles() };
  }
  return baseStyles;
};

export default styles;
