import { css } from 'styled-components';
import { transitions, em } from 'polished';

import { reset } from '../reset';

export const defaultTarget = css`
  ${reset};

  width: 100%;
  background: ${({ theme }) => theme.comet.components.input.idle.bg};
  border-radius: ${({ theme }) => em(theme.comet.size.box, theme.comet.size.room)};
  height: ${({ theme }) => em(theme.comet.size.city, theme.comet.size.room)};
  font-size: ${({ theme }) => em(theme.comet.size.room)};
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.comet.duration.normal)};
`;
