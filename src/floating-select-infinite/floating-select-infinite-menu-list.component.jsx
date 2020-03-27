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
    if (!children) return [];
    return children;
  };

  renderNoOptionsMessage = () => {
    const { selectProps } = this.props;
    return (
      <div className={`${CLASS_PREFIX}-no-options-message`}>
        {selectProps.noOptionsMessage()}
      </div>
    );
  }

  renderMenuItems = () => {
    const { selectProps: { components } } = this.props;
    const renderOption = components && components.Option
      ? (child) => <components.Option key={child.key} {...child.props} />
      : (child) => (
        <MenuOption
          item={child}
          key={child.key}
          onOptionClick={this.onOptionClick}
          {...this.props}
        />
      );
    return this.getItems().map(renderOption);
  };

  renderInfiniteList() {
    const {
      getStyles, selectProps,
    } = this.props;
    const menuListStyles = getStyles('menuList', this.props);
    const controlHeight = parseInt(selectProps.controlHeight, 10);
    const { maxHeight } = menuListStyles;
    const itemCount = this.getItems().length;
    let listHeight = maxHeight;

    if (itemCount * controlHeight < maxHeight) listHeight = itemCount * controlHeight;
    if (listHeight === 0) listHeight = controlHeight;
    // innerRef cannot be ref prop of Infinite, otherwise react-select
    // calls ref's contains function on blur
    return (
      <Infinite
        className={!this.getItems().length ? `${CLASS_PREFIX}-menu-list no-options` : `${CLASS_PREFIX}-menu-list`}
        containerHeight={listHeight}
        elementHeight={controlHeight}
      >
        {itemCount ? this.renderMenuItems() : this.renderNoOptionsMessage()}
      </Infinite>
    );
  }

  render() {
    const { innerRef } = this.props;

    // If the outermost div has ref function, scrollbar works but scrolling with mouse wheel not
    // with IE. Without this outermost div clicking scrollbar closes the menu but scrolling with
    // mouse wheel works with IE. This othermost div causes scrolling with mouse wheel fail with
    // Chrome. Therefore the outhermost element is render only with IE.
    if (/* @cc_on!@ */false || !!document.documentMode) {
      return (
        <div ref={innerRef}>
          {this.renderInfiniteList()}
        </div>
      );
    }

    return this.renderInfiniteList();
  }
}

MenuList.propTypes = {
  getStyles: PropTypes.func.isRequired,
  innerRef: PropTypes.func.isRequired,
  selectProps: PropTypes.shape({
    controlHeight: PropTypes.string,
    noOptionsMessage: PropTypes.func,
    components: PropTypes.shape({
      Option: PropTypes.node,
    }),
  }).isRequired,
  children: PropTypes.node.isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default MenuList;
