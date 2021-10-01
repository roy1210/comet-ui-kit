import React, { useMemo } from 'react';
import { ThemeProvider as Provider, DefaultTheme } from 'styled-components';

import { CometAccent } from '../CometAccent';
import { CometDark } from '../CometDark';
import { CometLight } from '../CometLight';
import { useSystemTheme } from '../useSystemTheme';

export type Theme = 'light' | 'dark' | 'accent' | 'auto';

export type Props = {
  children?: React.ReactNode;
  theme?: Theme;
  defaultTheme?: 'dark' | 'light';
  localTheme?: Omit<DefaultTheme, 'comet'>;
};

export const CometThemeProvider = ({
  children,
  theme: themeProp = 'auto',
  defaultTheme,
  localTheme,
}: Props) => {
  const systemTheme = useSystemTheme({ defaultTheme });

  const theme = useMemo(() => {
    const cometTheme = themeProp === 'auto' ? systemTheme : themeProp ?? systemTheme;
    return {
      ...localTheme,
      ...(() => {
        if (cometTheme === 'light') return CometLight;
        if (cometTheme === 'dark') return CometDark;
        if (cometTheme === 'accent') return CometAccent;
        throw new Error(`Invalid theme "${cometTheme}"`);
      })(),
    };
  }, [localTheme, systemTheme, themeProp]);

  return <Provider theme={theme}>{children}</Provider>;
};
