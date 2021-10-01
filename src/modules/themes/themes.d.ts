import 'styled-components';
import { CometThemeType } from './CometThemeType';

declare module 'styled-components' {
  export interface DefaultTheme extends CometThemeType {}
}
