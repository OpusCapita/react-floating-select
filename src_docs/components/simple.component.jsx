import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import { FloatingSelect } from '../../src/index';

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

export default class SimpleExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      options: getSimpleData(10),
      selected: null,
    };
  }

  handleChange = (selected) => this.setState({ selected });

  render() {
    const {
      selected,
      options,
    } = this.state;
    return (
      <Container>
        <Container2>
          <FloatingSelect
            name="select-simple-example"
            options={options}
            value={selected}
            onChange={this.handleChange}
            {...this.props}
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
