import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import { Panel, Grid, Row, Col, Checkbox } from 'react-bootstrap';
import GithubLogo from '../images/logo-github.svg';
import packageConfig from '../../package.json';
// Example Components
import SimpleComponent from '../components/simple.component';
import CreatableComponent from '../components/creatable.component';
import GroupedComponent from '../components/grouped.component';
import InfiniteComponent from '../components/infinite.component';
import MultiSingleLineComponent from '../components/multisingleline.component';

const packageDescription = packageConfig.description;
const packageName = packageConfig.name.replace('@opuscapita/', '');

const ListContainer = styled.div`
  padding: 20px;
  height: calc(100vh - 66px);
  overflow: auto;
`;

export default class ExampleContainer extends React.PureComponent {
  state = {
    // default props for component
    controlHeight: 30,
    isSearchable: false,
    isClearable: false,
    isMulti: false,
    isDisabled: false,
  }

  changeNumberProp = prop => (e) => {
    const val = Number(e.target.value);
    this.setState({ [prop]: val });
  }

  renderNumberInput = attr => (
    <p>
      <input
        type="number"
        value={this.state[attr]}
        onChange={this.changeNumberProp(attr)}
        style={{ width: '60px' }}
      />
      {' '}
      {attr}
    </p>
  )

  renderCheckbox = attr => (
    <p>
      <Checkbox
        inline
        checked={this.state[attr]}
        onChange={() => this.setState({ [attr]: !this.state[attr] })}
      >
        {attr}
      </Checkbox>
    </p>
  )

  render() {
    const {
      controlHeight,
      ...otherState
    } = this.state;
    const heightString = `${controlHeight}px`;
    return (
      <Grid fluid>
        <Row>
          <Col xs={10}>
            <h3 style={{ marginTop: '10px' }}>
              {packageDescription}
            </h3>
          </Col>
          <Col xs={2}>
            <a
              href={`https://github.com/OpusCapita/${packageName}`}
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={4} lg={2}>
            <Panel style={{ padding: '20px' }}>
              <Link to="/" href="/">Simple</Link>
              <br />
              <Link to="/creatable" href="/creatable">Creatable</Link>
              <br />
              <Link to="/grouped" href="/grouped">Groups with folding</Link>
              <br />
              <Link to="/infinite" href="/infinite">Infinite virtualized list</Link>
              <br />
              <Link to="/multisingleline" href="/multisingleline">Multi value single line</Link>
              <br />
            </Panel>
            <Panel style={{ padding: '20px' }}>
              {this.renderCheckbox('isSearchable')}
              {this.renderCheckbox('isClearable')}
              {this.renderCheckbox('isMulti')}
              {this.renderCheckbox('isDisabled')}
              {this.renderNumberInput('controlHeight')}
            </Panel>
          </Col>
          <Col xs={8} lg={10}>
            <Panel>
              <ListContainer>
                <Switch>
                  <Route path="/" exact render={() => <SimpleComponent controlHeight={heightString} {...otherState} />} />
                  <Route path="/creatable" exact render={() => <CreatableComponent controlHeight={heightString} {...otherState} />} />
                  <Route path="/grouped" exact render={() => <GroupedComponent controlHeight={heightString} {...otherState} />} />
                  <Route path="/infinite" exact render={() => <InfiniteComponent controlHeight={heightString} {...otherState} />} />
                  <Route path="/multisingleline" exact render={() => <MultiSingleLineComponent controlHeight={heightString} {...otherState} />} />
                </Switch>
              </ListContainer>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
