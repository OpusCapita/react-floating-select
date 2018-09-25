import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

export default {
  container: base => ({
    ...base,
    height: theme.formControls.input.height,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: colors.colorWhite,
    borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
    borderRadius: 0,
    boxShadow: state.isFocused && !state.isOpen ? `inset 0 1px 1px ${colors.colorWhite}, 0 0 8px ${colors.colorPseudoFocused}` : 0,
    height: theme.formControls.input.height,
    '&:hover': {
      borderColor: state.isFocused ? colors.colorPseudoFocused : colors.colorLightGray,
    },
    minHeight: theme.formControls.input.height,
    outline: 0,
  }),
  dropdownIndicator: base => ({
    ...base,
    color: `${colors.colorText}!important`,
  }),
  groupHeading: () => ({
    paddingLeft: theme.gutterWidth,
    fontWeight: 'bold',
  }),
  indicatorSeparator: () => ({}),
  input: (base, state) => ({
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
  }),
  menuList: base => ({
    ...base,
    padding: 0,
  }),
  option: (base, state) => ({
    ...base,
    ':active': { backgroundColor: 'none' },
    backgroundColor: state.isSelected ? colors.colorSelectSelected : colors.colorWhite,
    color: colors.colorText,
    display: state.data.isHidden && !state.data.match ? 'none' : 'block',
    height: theme.formControls.input.height,
    ':hover': { backgroundColor: colors.colorSelectHover },
    paddingLeft: state.data.group ? '40px' : '12px',
  }),
  singleValue: (base, state) => ({
    ...base,
    color: colors.colorText,
  }),
};
