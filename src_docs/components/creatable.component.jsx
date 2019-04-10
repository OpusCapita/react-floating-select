import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import { FloatingSelectCreatable } from '../../src/index';

const getSimpleData = (count) => {
  const items = [];
  for (let i = 1; i <= count; i += 1) {
    items.push({
      value: faker.random.uuid(),
      label: faker.name.findName(),
    });
  }
  return items;
};

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-height: 0px;
  min-width: 0px;
`;
const Container2 = styled(Container)`
  flex: 0 0 250px;
  padding-right: 20px;
`;

export default class CreatableExample extends React.PureComponent {
  state = {
    options: getSimpleData(10),
    selected: null,
  }

  handleChange = selected => this.setState({ selected });

  // Create new option and select it
  handleCreateOption = (e) => {
    const selected = {
      label: e,
      value: faker.random.uuid(),
    };
    const options = [
      ...this.state.options,
      selected,
    ];
    this.setState({
      selected,
      options,
    });
  };

  render() {
    const {
      selected,
      options,
    } = this.state;
    return (
      <Container>
        <Container2>
          <FloatingSelectCreatable
            name="select-creatable-example"
            options={options}
            value={selected}
            onChange={this.handleChange}
            onCreateOption={this.handleCreateOption}
            {...this.props}
            isSearchable
          />
        </Container2>
        <Container>
          <pre>
            {`Selected: ${JSON.stringify(selected, undefined, 2)}`}
          </pre>
        </Container>
      </Container>
    );
  }
}
