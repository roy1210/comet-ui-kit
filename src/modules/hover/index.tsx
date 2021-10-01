import { css } from 'styled-components';

export const hoverEffect = css`
  :focus,
  :hover,
  :active {
    background-color: ${({ theme }) => theme.comet.color.bg.masked};
  }
`;
