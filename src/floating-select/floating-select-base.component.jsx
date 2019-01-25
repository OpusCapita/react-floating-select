/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import { DropdownCloseIndicator, DropdownOpenIndicator } from './dropdown-indicator.component';

export default class FloatingSelectBase extends React.PureComponent {
  static propTypes = {
    controlHeight: PropTypes.string,
  };

  static defaultProps = {
    controlHeight: theme.formControls.input.height,
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

  handleOpenMenu = () =>
    this.setState({
      components: { DropdownIndicator: DropdownCloseIndicator },
    });

  handleCloseMenu = () =>
    this.setState({
      components: { DropdownIndicator: DropdownOpenIndicator },
    });

}
