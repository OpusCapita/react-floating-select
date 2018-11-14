import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import ExampleComponent from '../components/example.component';
import Example2Component from '../components/example.2.component';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <Grid>
    <Row>
      <Col xs={11} md={8} lg={12}>
        <Row>
          <Col xs={10}>
            <h3>React floating select</h3>
          </Col>
          <Col xs={2}>
            <a
              href="https://github.com/OpusCapita/react-floating-select"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs={11} md={8} lg={6}>
        <Panel>
          <Panel.Heading>Floating Select</Panel.Heading>
          <ExampleComponent />
        </Panel>
      </Col>
      <Col xs={11} md={8} lg={6}>
        <Panel>
          <Panel.Heading>Floating Select Portal</Panel.Heading>
          <Example2Component />
        </Panel>
      </Col>
    </Row>
  </Grid>
);
