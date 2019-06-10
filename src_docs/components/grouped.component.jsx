import React from 'react';
import styled from 'styled-components';
import { FaFolder, FaCaretRight, FaCaretDown } from 'react-icons/fa';
import faker from 'faker';
import { FloatingSelect } from '../../src/index';

const getGroupedData = (groupCount, itemCount) => {
  const data = [];
  for (let g = 1; g <= groupCount; g += 1) {
    const group = {
      label: faker.company.companyName(),
      options: [],
    };
    for (let i = 1; i <= itemCount; i += 1) {
      group.options.push({
        value: faker.random.uuid(),
        label: faker.name.findName(),
        group: group.label,
        isHidden: true,
      });
    }
    data.push(group);
  }
  return data;
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
const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export default class GroupedExample extends React.PureComponent {
  state = {
    groupedOptions: getGroupedData(5, 6),
    selected: null,
  }

  handleChange = selected => this.setState({ selected });

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
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleClick}>
        <Button>
          {this.renderArrow(data.isOpen)}
        </Button>
        <FaFolder style={{ marginRight: '.5rem', minHeight: '1.5rem', minWidth: '1.5rem' }} />
        <span>{data.label}</span>
      </div>
    );
  };

  renderArrow = isOpen => (
    isOpen ?
      <FaCaretDown style={{ marginRight: '.5rem' }} /> :
      <FaCaretRight style={{ marginRight: '.5rem' }} />
  );

  render() {
    const {
      selected,
      groupedOptions,
    } = this.state;
    return (
      <Container>
        <Container2>
          <FloatingSelect
            name="select-grouped-example"
            options={groupedOptions}
            value={selected}
            onChange={this.handleChange}
            formatGroupLabel={this.formatGroupLabel}
            onInputChange={this.handleInputChange}
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
