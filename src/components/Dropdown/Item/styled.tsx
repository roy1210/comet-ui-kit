import styled, { css } from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

const interactive = css`
  :hover,
  :active {
    ${ListItem.Content} {
      color: ${({ theme }) => theme.comet.color.primary.normal};
    }
  }
`;

export const StyledListItem = styled(ListItem)`
  background: ${({ theme }) => theme.comet.color.bg.normal};
  height: ${({ theme }) => em(theme.comet.size.state, theme.comet.size.room)};
  padding: 0 ${({ theme }) => em(theme.comet.size.closet, theme.comet.size.room)};

  ${ListItem.Content} {
    font-weight: 700;
  }

  ${({ interactive: isInteractive }) => isInteractive && interactive};
`;
