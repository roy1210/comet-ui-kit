import { em, transitions } from 'polished';
import styled, { css } from 'styled-components';

import { reset } from '../../../modules/reset';
import { defaultTarget } from '../../../modules/target';

export const VARIANTS = ['transparent', 'input'] as const;
export type Variant = typeof VARIANTS[number];

interface Color {
  color?: string;
}

export const SIZES = ['country', 'state', 'city'] as const;
export type Size = typeof SIZES[number];

const inputShowing = css<{ isShowing: boolean; color: string }>`
  border-color: ${(props) => (props.color ? props.color : props.theme.comet.color.primary.active)};
`;

const input = css<{ isShowing: boolean; color: string }>`
  border: 2px solid ${({ theme }) => theme.comet.components.input.idle.border};
  border-radius: ${({ theme }) => em(theme.comet.size.box)};
  padding: 0 ${({ theme }) => em(theme.comet.size.closet)};
  ${({ isShowing }) => isShowing && inputShowing};
`;

const country = css`
  height: ${({ theme }) => em(theme.comet.size.country, theme.comet.size.room)};
`;

const state = css`
  height: ${({ theme }) => em(theme.comet.size.state, theme.comet.size.room)};
`;

const city = css`
  height: ${({ theme }) => em(theme.comet.size.city, theme.comet.size.room)};
`;

export const StyledDefaultTarget = styled.button<{
  variant: Variant;
  isShowing: boolean;
  size: Size;
  color: string;
}>`
  ${defaultTarget};
  font-weight: 700;
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.comet.duration.normal)};

  ${({ variant }) => variant === 'input' && input};

  ${({ size }) => size === 'country' && country};
  ${({ size }) => size === 'state' && state};
  ${({ size }) => size === 'city' && city};
`;

export const Container = styled.div`
  ${reset};
  flex-shrink: 1;
`;

export const Space = styled.div`
  flex: 1;
`;

export const IconContainer = styled.div<Color>`
  display: flex;
  font-size: ${({ theme }) => em(theme.comet.size.drawer, theme.comet.size.room)};
  margin-left: ${({ theme }) => em(theme.comet.size.box, theme.comet.size.drawer)};
  color: ${(props) => (props.color ? props.color : props.theme.comet.color.primary.normal)};
`;
