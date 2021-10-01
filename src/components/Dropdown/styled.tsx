import styled from 'styled-components';
import { em } from 'polished';

import { reset } from '../../modules/reset';

export const TooltipContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${({ theme }) => em(200, theme.comet.size.room)};
`;

export const TargetContainer = styled.div`
  ${reset};
  cursor: pointer;
`;
