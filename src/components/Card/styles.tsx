import { em } from 'polished';
import styled, { css } from 'styled-components';

export const SIZES = ['city', 'town', 'bare'] as const;
export type Size = typeof SIZES[number];

const town = css`
  padding: ${({ theme }) => em(theme.comet.size.street)} ${({ theme }) => em(theme.comet.size.town)};
`;

const city = css`
  padding: ${({ theme }) => em(theme.comet.size.town)} ${({ theme }) => em(theme.comet.size.city)};
`;

const bare = css``;

export const StyledCard = styled.div<{ size: Size }>`
  background: ${({ theme }) => theme.comet.color.bg.normal};
  border-radius: ${({ theme }) => em(theme.comet.size.closet)};
  box-shadow: ${({ theme }) => theme.comet.shadow.card};
  padding: 0;

  ${({ size }) => size === 'bare' && bare};
  ${({ size }) => size === 'city' && city};
  ${({ size }) => size === 'town' && town};
`;
