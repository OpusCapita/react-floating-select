import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

const styles = inputHeight => ({
  container: base => ({
    ...base,
    height: inputHeight,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: colors.colorWhite,
    borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
    borderRadius: 0,
    boxShadow: state.isFocused ? `inset 0 1px 1px ${colors.colorWhite}, 0 0 8px ${colors.colorPseudoFocused}` : 0,
    height: inputHeight,
    '&:hover': {
      borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
    },
    minHeight: inputHeight,
    outline: 0,
  }),
  dropdownIndicator: base => ({
    ...base,
    color: colors.colorText,
    ':hover': {
      color: colors.colorText,
    },
  }),
  groupHeading: () => ({
    fontWeight: 'bold',
    paddingLeft: theme.gutterWidth,
  }),
  indicatorSeparator: () => ({}),
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
    flexBasis: 'fit-content',
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
  }),
  option: (base, state) => ({
    ...base,
    ':active': { backgroundColor: 'none' },
    backgroundColor: state.isSelected ? colors.colorSelectSelected : colors.colorWhite,
    color: colors.colorText,
    display: state.data.isHidden && !state.data.match ? 'none' : 'block',
    ':hover': { backgroundColor: colors.colorSelectHover },
    minHeight: inputHeight,
    paddingLeft: state.data.group ? '50px' : '12px',
  }),
  singleValue: base => ({
    ...base,
    color: colors.colorText,
  }),
  valueContainer: base => ({
    ...base,
    display: 'flex',
    flexWrap: 'no-wrap',
    height: inputHeight,
    overflow: 'hidden',
  }),
});

export default styles;
