import React from 'react';

export default class FloatingSelectBase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleOpenMenu = () => this.setState({ isOpen: true });
  
  handleCloseMenu = () => this.setState({ isOpen: false });
  
}
