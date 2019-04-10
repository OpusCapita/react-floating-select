import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
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
const EllipsisWrapper = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const TooltipTextWrapper = styled.div`
  text-align: left;
`;

const MultiValue = (props) => {
  const {
    getValue,
    data,
    selectProps,
  } = props;
  const value = getValue();
  // render only to first multivalue
  if (value[0] && value[0].value && data && data.value && value[0].value !== data.value) {
    return null;
  }
  const valueString = value.map(v => v.label).join(', ');
  if (value.length > 1) {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={(
          <Tooltip id={`${selectProps.name}-tooltip`}>
            <TooltipTextWrapper>
              {`${value.length} persons selected:`}<br />
              {value.map(v => <React.Fragment key={v.value}><span>{`- ${v.label}`}</span><br /></React.Fragment>)}
            </TooltipTextWrapper>
          </Tooltip>
        )}
        delay={500}
      >
        <EllipsisWrapper>
          {valueString}
        </EllipsisWrapper>
      </OverlayTrigger>
    );
  }
  return (
    <Container>
      <EllipsisWrapper>
        {valueString}
      </EllipsisWrapper>
    </Container>
  );
};
MultiValue.propTypes = {
  getValue: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
  selectProps: PropTypes.shape({}).isRequired,
};

export default class MultiSingleLineExample extends React.PureComponent {
  state = {
    options: getSimpleData(10),
    selected: null,
  }

  handleChange = selected => this.setState({ selected });

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
            components={{ MultiValue }}
            {...this.props}
            isMulti
            customStyles={{
              valueContainer: () => ({
                flexWrap: 'nowrap',
              }),
            }}
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
