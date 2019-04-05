/* eslint-disable no-nested-ternary */
import theme, { colors } from '@opuscapita/oc-cm-theme';

// Styles shared between both FloatingSelect implementations
const mainStyles = inputHeight => ({
  container: base => ({
    ...base,
    lineHeight: 'normal',
  }),

  control: (base, state) => ({
    ...base,
    backgroundColor: state.isDisabled ? '#eee' : colors.white,
    borderColor: state.isFocused ? colors.yellow : colors.grey3,
    borderRadius: 0,
    boxShadow: state.isFocused ? `inset 0 1px 1px ${colors.white}, 0 0 8px ${colors.yellow}` : 0,
    '&:hover': {
      borderColor: state.isFocused ? colors.yellow : colors.grey3,
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
    color: colors.grey9,
  }),

  menu: base => ({
    ...base,
    border: `1px solid ${colors.grey6}`,
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
    backgroundColor: colors.grey5,
    borderRadius: 0,
    color: colors.grey9,
  }),
  multiValueRemove: base => ({
    ...base,
    backgroundColor: colors.grey5,
    borderRadius: 0,
    color: colors.grey9,
    ':hover': {
      backgroundColor: colors.grey8,
      color: colors.white,
    },
    flex: '0 0 auto',
  }),
  option: (base, state) => ({
    ...base,
    ':active': { backgroundColor: 'none' },
    backgroundColor: state.isSelected
      ? colors.grey5
      : state.isFocused ? colors.grey4 : 'transparent',
    color: state.isDisabled
      ? colors.grey9
      : state.isSelected ? colors.grey9 : 'inherit',
    display: state.data.isHidden && !state.data.match ? 'none' : 'block',
    ':hover': { backgroundColor: colors.grey4 },
    minHeight: `calc(${inputHeight} - 2px)`, // 1px borders
    paddingLeft: state.data.group ? '50px' : '12px',
  }),
  singleValue: base => ({
    ...base,
    color: colors.grey9,
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
    color: colors.grey9,
    ':hover': {
      color: colors.grey9,
    },
  }),
  dropdownIndicator: base => ({
    ...base,
    color: colors.grey9,
    ':hover': {
      color: colors.grey9,
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
