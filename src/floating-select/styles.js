import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';
import { theme } from '@opuscapita/oc-cm-common-layouts';

export default {
  container: base => ({
    ...base,
    height: '34px',
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: colors.colorWhite,
    borderColor: (state.isFocused && !state.isOpen) || state.isHovered ?
      `${colors.colorPseudoFocused}!important` : `${colors.colorLightGray}!important`,
    borderRadius: 0,
    boxShadow: state.isFocused && !state.isOpen ? `inset 0 1px 1px ${colors.colorWhite}, 0 0 8px ${colors.colorPseudoFocused}` : 0,
    outline: 0,
    height: '34px',
    minHeight: '34px',
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
