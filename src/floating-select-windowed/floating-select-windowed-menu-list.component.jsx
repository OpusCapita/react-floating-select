import PropTypes from 'prop-types';
import React from 'react';
import { VariableSizeList as List } from 'react-window';

// Other imports
import {
  createGetHeight,
  flattenGroupedChildren,
  getCurrentIndex,
} from './util';
import styles from '../floating-select/styles';
import './floating-select-windowed.scss';

class MenuList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setListRef = this.setListRef.bind(this);
    this.getItemSize = this.getItemSize.bind(this);

    this.state = {
      currentIndex: 0,
      children: null,
      heights: [],
      itemCount: 0,
      menuHeight: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.children !== prevState.children) {
      const { getStyles } = nextProps;
      let children = React.Children.toArray(nextProps.children);

      const head = children[0] || {};
      const {
        props: {
          data: {
            options = [],
          } = {},
        } = {},
      } = head;
      const groupedChildrenLength = options.length;
      const isGrouped = groupedChildrenLength > 0;
      const flattenedChildren = isGrouped && flattenGroupedChildren(children);

      children = isGrouped
        ? flattenedChildren
        : children;

      const groupHeadingStyles = getStyles('groupHeading', nextProps);
      const loadingMsgStyles = getStyles('loadingMessage', nextProps);
      const noOptionsMsgStyles = getStyles('noOptionsMessage', nextProps);
      const optionStyles = getStyles('option', nextProps);
      const getHeight = createGetHeight({
        groupHeadingStyles,
        noOptionsMsgStyles,
        optionStyles,
        loadingMsgStyles,
      });

      const heights = children.map(getHeight);

      const currentIndex = getCurrentIndex(children);

      const itemCount = children.length;

      // calc menu height
      const sum = (a, b) => a + b;
      const totalHeight = heights.reduce(sum, 0);
      const { maxHeight } = getStyles('menuList', nextProps);
      const menuHeight = Math.min(maxHeight, totalHeight);
      const estimatedItemSize = Math.floor(totalHeight / itemCount);

      return {
        children,
        currentIndex,
        estimatedItemSize,
        heights,
        itemCount,
        menuHeight,
      };
    }

    return null;
  }

  componentDidUpdate() {
    const { currentIndex } = this.state;

    if (this.state.children.length === 1) {
      this.list.resetAfterIndex(0);
    }

    /**
     * enables scrolling on key down arrow
     *
     * note: prevents scrolling on index 0 and 1 to avoid
     * returning to top of menu when it remains open after selecting
     */
    if (currentIndex > 1) {
      this.list.scrollToItem(currentIndex);
    }
  }

  getItemSize(index) {
    return this.state.heights[index];
  }

  setListRef(ref) {
    this.list = ref;
  }

  renderOption = ({ data, index, baseStyle }) => {
    const inputHeight = this.props.selectProps.inputHeight || '30px';
    const customStyles = styles(inputHeight);
    const combinedStyles = customStyles.option(baseStyle, data[index].props);

    return (
      <div
        className="floating-select-windowed-menu-option"
        style={combinedStyles}
      >
        {data[index]}
      </div>
    );
  };

  render() {
    const { getStyles, innerRef } = this.props;
    const {
      children: stateChildren, estimatedItemSize, menuHeight, itemCount,
    } = this.state;

    const { maxHeight, ...menuListStyle } = getStyles('menuList', this.props);

    return (
      <div ref={innerRef} style={menuListStyle} className="floating-select-windowed-menu-list">
        <List
          ref={this.setListRef}
          estimatedItemSize={estimatedItemSize}
          height={menuHeight}
          itemCount={itemCount}
          itemData={stateChildren}
          itemSize={this.getItemSize}
        >
          {this.renderOption}
        </List>
      </div>
    );
  }
}

MenuList.propTypes = {
  getStyles: PropTypes.func.isRequired,
  innerRef: PropTypes.func.isRequired,
  selectProps: PropTypes.shape({
    inputHeight: PropTypes.string,
  }).isRequired,
};


export default MenuList;
