import React from 'react';

export function flattenGroupedChildren(children) {
  return children.reduce((result, child) => {
    const {
      props: {
        children: nestedChildren = [],
      },
    } = child;

    return [
      ...result,
      React.cloneElement(
        child,
        { type: 'group' },
        [],
      ),
      ...nestedChildren,
    ];
  }, []);
}

export function isFocused(component) {
  return component.props.isFocused === true;
}

export function getCurrentIndex(children) {
  return Math.max(
    children.findIndex(isFocused),
    0,
  );
}

export function createGetHeight(props) {
  const {
    groupHeadingStyles,
    noOptionsMsgStyles,
    optionStyles,
    loadingMsgStyles,
  } = props;
  return function getHeight(child = {}) {
    const {
      props: {
        type,
        children,
        selectProps: {
          noOptionsMessage,
          loadingMessage,
        } = {},
      } = {},
    } = child;

    if (type === 'group') {
      const { height = 25 } = groupHeadingStyles;
      return height;
    } else if (type === 'option') {
      const { height = 35 } = optionStyles;
      return height;
    } else if (typeof noOptionsMessage === 'function' && children === noOptionsMessage()) {
      const { height = 35 } = noOptionsMsgStyles;
      return height;
    } else if (typeof loadingMessage === 'function' && children === loadingMessage()) {
      const { height = 35 } = loadingMsgStyles;
      return height;
    }

    return 35;
  };
}
