import PropTypes from 'prop-types';
import React from 'react';

// Other imports
import styles from '../floating-select/styles';
import './floating-select-infinite.scss';

export default class MenuOption extends React.PureComponent {
  static propTypes = {
    getStyles: PropTypes.func.isRequired,
    selectProps: PropTypes.shape({}).isRequired,
    onOptionClick: PropTypes.func.isRequired,
    item: PropTypes.shape({}).isRequired,
  };

  onOptionClick = () => {
    const { onOptionClick, item } = this.props;
    onOptionClick(item);
  };

  render() {
    const { getStyles, selectProps, item } = this.props;
    const { children } = item.props;
    const baseStyle = getStyles('option', item.props);

    const inputHeight = selectProps.controlHeight || '32px';
    const customStyles = styles(inputHeight);
    let combinedStyles = customStyles.option(baseStyle, item.props);
    combinedStyles = { ...combinedStyles, ...{ option: { height: inputHeight } } };


    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      <div
        onClick={this.onOptionClick}
        className="floating-select-infinite-menu-option"
        style={combinedStyles}
      >
        {children}
      </div>
      /* eslint-enable jsx-a11y/no-static-element-interactions */
      /* eslint-enable jsx-a11y/click-events-have-key-events */
    );
  }
}
