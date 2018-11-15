import React from 'react';
import styled from 'styled-components';
import { FloatingSelectPortal, FloatingSelectPortalCreatable } from '../../src/index';


const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-bottom: 5px;
`;

const ExampleContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.pos !== 0 ? `${props.pos * 15}px` : '0px')};
`;

const ExampleHeader = styled('div')`
  padding: 1rem;
`;

const Description = styled('div')`
  margin-top: 0.5rem;
  padding: 0.5rem;
  z-index: 1200;
  position: relative;
  background: lightgray;
  text-align: center;
`;


export default class Component2View extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      options: this.initialOptions(),
      selectedCreatableOption: 0,
      createOptions: this.initialOptions(),
    };
  }
  // Props for examples
  componentProps = () => ({
    example1: {
      isClearable: true,
      controlHeight: '30px',
      inputId: 'select-portal-example',
      name: 'select-portal-example',
      options: this.state.options,
      onChange: this.handleChange,
      value: this.state.selectedOption,
    },
    example2: {
      isClearable: false,
      inputId: 'select-portal-creatable-example',
      name: 'select-portal-creatable-example',
      options: this.state.createOptions,
      onCreateOption: this.handleCreateOption,
      onChange: this.handleCreatableChange,
      value: this.state.selectedCreatableOption,
    },
  });

  handleChange = (e) => {
    this.setState({ selectedOption: e });
  }

  handleCreateOption = (e) => {
    const option = { label: e, value: e };
    const createOptions = [
      ...this.state.createOptions,
      option,
    ];
    this.setState({
      selectedCreatableOption: option,
      createOptions,
    });
  }

  handleCreatableChange = (e) => {
    this.setState({ selectedCreatableOption: e });
  }

  initialOptions = () => (
    [
      {
        value: '0',
        label: 'Option 1',
      },
      {
        value: '1',
        label: 'Option 2',
      },
    ]);

  renderDescription = () => (
    <Description>
      <p>With <b>FloatingSelectPortal</b> the options menu is rendered in document body.</p>
      <p>
        This is usefull when using <code>position: relative; || position: absolute;</code>
        styled elements and if z-index is defined.
      </p>
    </Description>
  );

  render() {
    return (
      <Container>

        <ExampleContainer pos={0}>
          <ExampleHeader>Select option (height 30px)</ExampleHeader>
          <FloatingSelectPortal {...this.componentProps().example1} />
          {this.renderDescription()}
        </ExampleContainer>

        <ExampleContainer pos={2}>
          <ExampleHeader>Create and/or select option</ExampleHeader>
          <FloatingSelectPortalCreatable {...this.componentProps().example2} />
          {this.renderDescription()}
        </ExampleContainer>

      </Container>
    );
  }
}
