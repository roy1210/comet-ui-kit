import React from 'react';
import styled from 'styled-components';

import { CometGlobalStyles } from '../src/modules/global';
import { CometThemeProvider } from '../src/modules/themes';
import { CometTestIdProvider } from '../src/modules/testing';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  layout: 'fullscreen',
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  font-size: 16px;
`;

const Section = styled.div`
  background: ${({ theme }) => theme.comet.color.bg.normal};
  color: ${({ theme }) => theme.comet.color.text.normal};
  padding: 1em;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const decorators = [
  (Story, { parameters: { theme } }) => {
    if (!!theme) return <Story />;
    return (
      <Container>
        <CometThemeProvider theme="light">
          <Section>
            <CometTestIdProvider value="light">
              <Story />
            </CometTestIdProvider>
          </Section>
        </CometThemeProvider>
        <CometThemeProvider theme="dark">
          <Section>
            <CometTestIdProvider value="dark">
              <Story />
            </CometTestIdProvider>
          </Section>
        </CometThemeProvider>
        <CometThemeProvider theme="accent">
          <Section>
            <CometTestIdProvider value="accent">
              <Story />
            </CometTestIdProvider>
          </Section>
        </CometThemeProvider>
      </Container>
    );
  },
  (Story, { parameters: { theme } }) => (
    <CometThemeProvider theme={theme}>
      <CometGlobalStyles />
      <Story />
    </CometThemeProvider>
  ),
];
