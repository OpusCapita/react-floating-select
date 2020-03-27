import PropTypes from 'prop-types';
import React from 'react';

// Other imports
import styles from '../base/styles';
import './floating-select-infinite.scss';

export default class MenuOption extends React.PureComponent {
  static propTypes = {
    getStyles: PropTypes.func.isRequired,
    selectProps: PropTypes.shape({}).isRequired,
    onOptionClick: PropTypes.func.isRequired,
    item: PropTypes.shape({
      props: PropTypes.shape({}),
    }).isRequired,
  };

  onOptionClick = () => {
    const { onOptionClick, item } = this.props;
    onOptionClick(item);
  };

  render() {
    const { getStyles, selectProps, item } = this.props;
    const { children } = item.props; // eslint-disable-line
    const baseStyle = getStyles('option', item.props);

    const inputHeight = selectProps.controlHeight || '32px'; // eslint-disable-line
    const customStyles = styles(inputHeight);
    const combinedStyles = customStyles.option(baseStyle, item.props);

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
