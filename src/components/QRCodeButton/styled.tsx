import { em } from 'polished';
import styled from 'styled-components';

export const QRContainer = styled.div`
  font-size: ${em(300)};
  padding: ${({ theme }) => em(theme.comet.size.house, 300)};
  align-self: center;
`;
