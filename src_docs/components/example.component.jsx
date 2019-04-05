import React from 'react';
import styled from 'styled-components';
import FaFolder from 'react-icons/lib/fa/folder';
import CaretRight from 'react-icons/lib/fa/caret-right';
import CaretDown from 'react-icons/lib/fa/caret-down';

import { FloatingSelect, FloatingSelectCreatable, FloatingSelectInfinite } from '../../src/index';

const Button = styled.button`
  background-color: transparent;
  border: none;
`;
export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      options: this.initializeOptions(),
      selectedCreatableOption: 0,
      creatableOptions: this.initializeOptions(),
      selectedGroupedOption: 0,
      groupedOptions: this.initializeGroupedOptions(),
    };
  }

  handleChange = (e) => {
    this.setState({ selectedOption: e });
  };

  handleCreatableChange = (e) => {
    this.setState({ selectedCreatableOption: e });
  };

  handleGroupedChange = (e) => {
    this.setState({ selectedGroupedOption: e });
  };

  handleCreateOption = (e) => {
    const option = {
      label: e,
      value: e,
    };
    const creatableOptions = [
      ...this.state.creatableOptions,
      option,
    ];
    this.setState({
      selectedCreatableOption: option,
      creatableOptions,
    });
  };

  handleInputChange = (inputValue) => {
    let { groupedOptions } = this.state;
    groupedOptions = groupedOptions.map((group) => {
      const options = group.options.map(option => ({
        ...option,
        match: option.label && option.label.includes(inputValue) && inputValue,
      }));
      return {
        ...group,
        options,
      };
    });
    this.setState({ groupedOptions });
  };

  initializeOptions = () => (
    [
      {
        value: '0',
        label: '',
      },
      {
        value: '1',
        label: 'EUR FI00 1234 5678 9012 34 Account ABCDEF GHIJKL MNOPQR STUVWX YZ',
      },
      {
        value: '2',
        label: 'Account 2',
      },
      {
        value: '3',
        label: 'EUR FI00 3333 3333 1111 11 Account ABCDEF',
      },
    ]);

  initializeGroupedOptions = () => (
    [
      {
        label: 'Group A',
        options: [
          {
            value: '1',
            label: 'Item 1',
            group: 'Group A',
            isHidden: true,
          },
          {
            value: '2',
            label: 'Item 2',
            group: 'Group A',
            isHidden: true,
          },
        ],
      },
      {
        label: 'Group B',
        isOpen: true,
        options: [
          {
            value: '3',
            label: 'Item 3',
            group: 'Group B',
          },
          {
            value: '4',
            label: 'Item 4',
            group: 'Group B',
          },
          {
            value: '5',
            label: 'Item 5',
            group: 'Group B',
          },
        ],
      },
      {
        label: 'Group C',
        options: [
          {
            value: '6',
            label: 'Item 6',
            group: 'Group C',
            isHidden: true,
          },
        ],
      },
    ]);

  formatGroupLabel = (data) => {
    const handleClick = () => {
      const options = data.options.map(option => ({
        ...option,
        isHidden: data.isOpen,
      }));
      const group = {
        ...data,
        options,
        isOpen: !data.isOpen,
      };
      let { groupedOptions } = this.state;
      groupedOptions = groupedOptions.map(groupedOption =>
        (groupedOption.label && groupedOption.label === data.label ? group : groupedOption));
      this.setState({ groupedOptions });
    };
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={handleClick}>
          {this.renderArrow(data.isOpen)}
        </Button>
        <FaFolder style={{ marginRight: '.5rem' }} />
        <span>{data.label}</span>
      </div>
    );
  };

  renderArrow = isOpen => (
    isOpen ?
      <CaretDown style={{ marginRight: '.5rem' }} /> :
      <CaretRight style={{ marginRight: '.5rem' }} />
  );

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '0.5rem' }}>Select option (height 30px)</div>
        <FloatingSelect
          isClearable={false}
          controlHeight="30px"
          inputId="select-example"
          name="select-example"
          options={this.state.options}
          onChange={this.handleChange}
          value={this.state.selectedOption}
        />
        <div style={{ marginTop: '20px', marginBottom: '0.5rem' }}>
          Create and/or select option
        </div>
        <FloatingSelectCreatable
          isClearable={false}
          inputId="select-creatable-example"
          name="select-creatable-example"
          options={this.state.creatableOptions}
          onChange={this.handleCreatableChange}
          onCreateOption={this.handleCreateOption}
          value={this.state.selectedCreatableOption}
        />
        <div style={{ marginTop: '20px', marginBottom: '0.5rem' }}>Select grouped option
        </div>
        <FloatingSelect
          isClearable={false}
          formatGroupLabel={this.formatGroupLabel}
          inputId="select-grouped-option"
          name="select-grouped-option"
          options={this.state.groupedOptions}
          onChange={this.handleGroupedChange}
          onInputChange={this.handleInputChange}
          value={this.state.selectedGroupedOption}
        />
        <div style={{}}>Multi-select option
        </div>
        <FloatingSelect
          isClearable={false}
          inputId="select-example"
          isMulti
          name="select-example"
          options={this.state.options}
          onChange={this.handleChange}
          value={this.state.selectedOption}
        />
        <div style={{ marginTop: '20px', marginBottom: '0.5rem' }}>Infinite (virtualized) select
        </div>
        <FloatingSelectInfinite
          isClearable={false}
          controlHeight="30px"
          inputId="select-example"
          name="select-example"
          options={this.state.options}
          onChange={this.handleChange}
          value={this.state.selectedOption}
        />
      </div>
    );
  }
}
