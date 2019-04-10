/* eslint-disable no-nested-ternary */
import theme, { colors } from '@opuscapita/oc-cm-theme';

// Styles shared between both FloatingSelect implementations
const mainStyles = inputHeight => ({
  container: base => ({
    ...base,
    width: '100%',
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
    padding: 0,
    margin: 0,
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
  menuPortal: base => ({
    ...base,
    zIndex: 9999,
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
    color: colors.grey9,
    ':hover': {
      cursor: 'pointer',
      color: colors.grey9,
    },
    paddingRight: '0',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: colors.grey9,
    ':hover': {
      cursor: 'pointer',
      color: colors.grey9,
    },
    paddingLeft: state.selectProps.isClearable && state.hasValue ? '0' : '8px',
  }),
});

// merge style functions with customStyle functions
const mergeStyles = (baseStyles, customStyles) => {
  const mergedStyles = Object.assign({}, baseStyles);
  Object.keys(customStyles).forEach((key) => {
    if (baseStyles[key]) {
      mergedStyles[key] = (base, state) => ({
        ...base,
        ...baseStyles[key]({}, state),
        ...customStyles[key]({}, state),
      });
    } else {
      mergedStyles[key] = customStyles[key];
    }
  });
  return mergedStyles;
};

const styles = (inputHeight, customStyles) => {
  const baseStyles = mainStyles(inputHeight);
  if (customStyles) {
    return mergeStyles(baseStyles, customStyles);
  }
  return baseStyles;
};

export default styles;
