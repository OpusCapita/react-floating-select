/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import theme from '@opuscapita/oc-cm-theme';
import {
  DropdownCloseIndicator,
  DropdownOpenIndicator,
} from './components/dropdown-indicator.component';

export default class FloatingSelectBase extends React.PureComponent {
  static propTypes = {
    controlHeight: PropTypes.string,
    customStyles: PropTypes.shape({
      clearIndicator: PropTypes.func,
      container: PropTypes.func,
      control: PropTypes.func,
      dropdownIndicator: PropTypes.func,
      group: PropTypes.func,
      groupHeading: PropTypes.func,
      indicatorsContainer: PropTypes.func,
      indicatorSeparator: PropTypes.func,
      input: PropTypes.func,
      loadingIndicator: PropTypes.func,
      loadingMessage: PropTypes.func,
      menu: PropTypes.func,
      menuList: PropTypes.func,
      menuPortal: PropTypes.func,
      multiValue: PropTypes.func,
      multiValueLabel: PropTypes.func,
      multiValueRemove: PropTypes.func,
      noOptionsMessage: PropTypes.func,
      option: PropTypes.func,
      placeholder: PropTypes.func,
      singleValue: PropTypes.func,
      valueContainer: PropTypes.func,
    }),
  };

  static defaultProps = {
    controlHeight: theme.formControls.input.height,
    customStyles: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      components: {
        DropdownIndicator: DropdownOpenIndicator,
      },
    };
  }

  getNonce = () => {
    let nonce = null;
    // Couldn't figure out a way to get the __webpack_nonce__ directly, so in the meantime
    // we'll use window.NONCE_ID
    if (window && window.NONCE_ID) nonce = window.NONCE_ID;
    return nonce;
  };

  handleOpenMenu = () => this.setState({
    components: { DropdownIndicator: DropdownCloseIndicator },
  });

  handleCloseMenu = () => this.setState({
    components: { DropdownIndicator: DropdownOpenIndicator },
  });
}
