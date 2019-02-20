import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '@opuscapita/oc-cm-common-layouts';

const LayoutWrapper = styled.div`
  max-width: ${props => props.maxWidth || '100vw'};
  height: 100vh;
`;

const AppWrapper = ({ children, maxWidth }) => ( // eslint-disable-line
  <LayoutWrapper className="story-wrapper" maxWidth={maxWidth}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </LayoutWrapper>
);

export default AppWrapper;
