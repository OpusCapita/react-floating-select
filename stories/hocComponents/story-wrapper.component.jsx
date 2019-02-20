import React from 'react';

const StoryWrapper = (Component, props) => {
  return class extends React.PureComponent {
    render() {
      return (<Component {...this.props} {...props} />);
    }
  };
};

export default StoryWrapper;
