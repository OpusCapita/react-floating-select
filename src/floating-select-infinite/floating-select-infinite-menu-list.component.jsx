import PropTypes from 'prop-types';
import React from 'react';
import Infinite from 'react-infinite';
import MenuOption from './floating-select-infinite-menu-option.component';
// Other imports
import './floating-select-infinite.scss';

const CLASS_PREFIX = 'floating-select-infinite';

class MenuList extends React.PureComponent {
  onOptionClick = (item) => {
    const { selectOption } = this.props;
    selectOption(item.props.data);
  };

  getItems = () => {
    const { children } = this.props;
    if (!children || !children.length) return [];
    return children;
  };

  renderNoOptionsMessage = () => (
    <div className={`${CLASS_PREFIX}-no-options-message`}>
      {this.props.selectProps.noOptionsMessage()}
    </div>
  );

  renderMenuItems = () => (
    this.getItems()
      .map(child => (
        <MenuOption
          item={child}
          key={child.key}
          onOptionClick={this.onOptionClick}
          {...this.props}
        />))
  );

  render() {
    const {
      getStyles, innerRef, selectProps,
    } = this.props;
    const menuListStyles = getStyles('menuList', this.props);
    const controlHeight = parseInt(selectProps.controlHeight, 10);
    const { maxHeight } = menuListStyles;
    const itemCount = this.getItems().length;
    let listHeight = maxHeight;

    if (itemCount * controlHeight < maxHeight) listHeight = itemCount * controlHeight;
    if (listHeight === 0) listHeight = controlHeight;
    return (
      <div ref={innerRef} style={menuListStyles} className={`${CLASS_PREFIX}-menu-list`}>
        <Infinite
          className={!this.getItems().length && 'no-options'}
          ref={this.setListRef}
          containerHeight={listHeight}
          elementHeight={controlHeight}
        >
          {this.getItems().length ? this.renderMenuItems() : this.renderNoOptionsMessage()}
        </Infinite>
      </div>
    );
  }
}

MenuList.propTypes = {
  getStyles: PropTypes.func.isRequired,
  innerRef: PropTypes.func.isRequired,
  selectProps: PropTypes.shape({
    controlHeight: PropTypes.string,
    noOptionsMessage: PropTypes.func,
  }).isRequired,
  children: PropTypes.node.isRequired,
  selectOption: PropTypes.func.isRequired,
};


export default MenuList;
