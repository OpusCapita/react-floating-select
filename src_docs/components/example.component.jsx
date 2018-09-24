import React from 'react';
import { FloatingSelect, FloatingSelectCreatable } from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      options: this.initializeOptions(),
      selectedCreatableOption: 0,
      creatableOptions: this.initializeOptions(),
    };
  }

  onChange = (e) => {
    this.setState({ selectedOption: e });
  }

  onCreatableChange = (e) => {
    this.setState({ selectedCreatableOption: e });
  }

  handleCreateOption = (e) => {
    const option = { label: e, value: e };
    const creatableOptions = [
      ...this.state.creatableOptions,
      option,
    ];
    this.setState({
      selectedCreatableOption: option,
      creatableOptions,
    });
  }

  initializeOptions = () => (
    [
      {
        value: '0',
        label: '',
      },
      {
        value: '1',
        label: 'Account 1',
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


  render() {
    return (
      <div style={{ padding: '20px' }}>
        <div>Select option</div>
        <FloatingSelect
          clearable={false}
          inputId="select-example"
          name="select-example"
          options={this.state.options}
          onChange={this.onChange}
          value={this.state.selectedOption}
        />
        <div style={{ marginTop: '20px' }}>
          Create and/or select option
        </div>
        <FloatingSelectCreatable
          clearable={false}
          inputId="select-creatable-example"
          name="select-creatable-example"
          options={this.state.creatableOptions}
          onChange={this.onCreatableChange}
          onCreateOption={this.handleCreateOption}
          value={this.state.selectedCreatableOption}
        />
      </div>
    );
  }
}
