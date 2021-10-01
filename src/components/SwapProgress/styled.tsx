import { rem } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-size: ${({ theme }) => rem(theme.comet.size.house)};
  font-weight: 700;
  margin-bottom: ${({ theme }) => rem(theme.comet.size.street)};
  text-align: center;
`;
