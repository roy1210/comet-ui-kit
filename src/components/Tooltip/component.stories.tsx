import { Meta } from '@storybook/react';
import React from 'react';

import { CometThemeProvider } from '../../modules/themes';

import { Tooltip } from './';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;

export const Default = () => {
  return (
    <Tooltip
      content={<Tooltip.Content>Some tooltip content...</Tooltip.Content>}
      data-testid="tooltip"
    >
      Tooltip
    </Tooltip>
  );
};

export const MixedThemes = () => {
  return (
    <>
      <CometThemeProvider theme="light">
        <Tooltip content={<Tooltip.Content>Light theme.</Tooltip.Content>} visible>
          Tooltip
        </Tooltip>
      </CometThemeProvider>
      <div style={{ height: '50px' }} />
      <CometThemeProvider theme="dark">
        <Tooltip content={<Tooltip.Content>Dark theme.</Tooltip.Content>} visible>
          Tooltip
        </Tooltip>
      </CometThemeProvider>
    </>
  );
};
