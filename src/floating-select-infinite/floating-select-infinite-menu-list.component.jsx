import PropTypes from 'prop-types';
import React from 'react';
import Infinite from 'react-infinite';
import MenuOption from './floating-select-infinite-menu-option.component';
// Other imports
import './floating-select-infinite.scss';

class MenuList extends React.PureComponent {
  onOptionClick = (item) => {
    const { selectOption } = this.props;
    selectOption(item.props.data);
  };

  render() {
    const { getStyles, innerRef, children } = this.props;
    const menuListStyles = getStyles('menuList', this.props);

    const { maxHeight } = menuListStyles;
    const itemSize = parseInt(this.props.selectProps.controlHeight, 10);
    const itemCount = Array.isArray(children) ? children.length : null;
    let listHeight = maxHeight;


    if (itemCount * itemSize < maxHeight) listHeight = itemCount * itemSize;

    return (
      <div ref={innerRef} style={menuListStyles} className="floating-select-infinite-menu-list">
        <Infinite
          ref={this.setListRef}
          containerHeight={listHeight}
          elementHeight={itemSize}
        >
          {children.map(child => (
            <MenuOption
              item={child}
              key={child.key}
              onOptionClick={this.onOptionClick}
              {...this.props}
            />))}
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
  }).isRequired,
  children: PropTypes.node.isRequired,
  selectOption: PropTypes.func.isRequired,
};


export default MenuList;
