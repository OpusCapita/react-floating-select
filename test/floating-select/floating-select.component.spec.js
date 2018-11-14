/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { FloatingSelect } from '../../src/floating-select/index';
import FloatingSelectPortal from '../../src/floating-select-portal/floating-select-portal';


describe('FloatingSelect component', () => {
  it('should render correctly', () => {
    const props = {
      name: 'floating-select-example',
      options: [
        {
          value: 1,
          label: 'Item 1',
        },
        {
          value: 2,
          label: 'Item 2',
        },
      ],
      onChange: () => {},
      value: { value: 1, label: 'Item 1' },
    };

    const wrapper = mount(<FloatingSelect {...props} />);
    expect(wrapper.find('input').at(1).props().name).to.eql('floating-select-example');
    expect(wrapper.find('input').at(1).props().value).to.eql(1);
    wrapper.unmount();
  });
});

describe('FloatingSelectPortal component', () => {
  it('render correctly', () => {
    const fsProps = {
      name: 'fs-portal-example',
      inputId: 'fs-portal-example-1',
      options: [
        {
          value: '0', label: 'Option 1',
        },
        {
          value: '1', label: 'Option 2',
        },
      ],
      onChange: () => {},
      value: { value: '1', label: 'Option 2' },
    };
    const wrapper = mount(<FloatingSelectPortal {...fsProps} />);
    expect(wrapper.find('input').at(0).props().id).to.eql('fs-portal-example-1');
    expect(wrapper.find('input').at(1).props().name).to.eql('fs-portal-example');
    expect(wrapper.find('input').at(1).props().value).to.eql('1');
    wrapper.unmount();
  });
});
