# Comet UI Kit

comet-ui-kit is a library of [React](https://reactjs.org/) components built with
[styled-components](https://www.styled-components.com/).

## Getting started with Next.js project

1. Install dependencies

   ```zsh
   yarn add comet-ui-kit react-spring styled-components polished
   yarn add --dev @types/styled-components
   ```

2. Use `<CometThemeProvider />` with no props at the root of your app so that you get automatic
   theme switching out of the box. Or you may pass the `theme` props as "auto" | "light" | "dark".
   <br />Optionally, you may also use `<CometGlobalStyles />`. <br/> If you are using Next.js, you
   should use `<CometThemeProvider />` in your `_app.tsx` or Layout file.

```tsx
// index.tsx
import React from 'react';
import {
  CometThemeProvider,
  Button,
  CometGlobalStyles,
  CometToastContainer,
  COMET_GLOBAL_FONT_HREF,
} from 'comet-ui-kit';

export const MyApp = () => {
  // Get theme properties
  const theme = useTheme();
  const color = theme.comet.color.text.accent;

  return (
    <CometThemeProvider>
      <Head>
        <link rel="stylesheet" href={COMET_GLOBAL_FONT_HREF} />
      </Head>
      <CometGlobalStyles /> {/* Option */}
      <h1 style={{ color: color }}>My cool app</h1>
      <Button variant="primary" size="country">
        Click here!
      </Button>
      <CometToastContainer />{' '}
      {/* Put this somewhere near the root of your app if you are going to use toasts */}
    </CometThemeProvider>
  );
};
```

```tsx
// styled.tsx
import { Text } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

export const TextExample = styled(Text)`
  font-size: ${({ theme }) => rem(theme.comet.size.room)};

  @media (min-width: ${rem(720)}) {
    font-size: ${({ theme }) => rem(theme.comet.size.street)};
  }
`;
```

### TypeScrip integration

Add a definitions file like the following anywhere in your project.

```tsx
// DefaultTheme.d.ts
import 'styled-components';
import { CometThemeProvider } from 'comet-ui-kit';

declare module 'styled-components' {
  export interface DefaultTheme extends CometThemeProvider {}
}
```

## How To Contribute

When you push your branch to remote ones, please run `yarn lint --fix` to comply to the code
convention.

When you add a new library, please make sure its license is not
[GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License). And please use `-D` for @types.
