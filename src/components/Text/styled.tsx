import { em } from 'polished';
import styled, { css } from 'styled-components';

export const VARIANTS = [
  'title-xl',
  'title-l',
  'title-m',
  'title-s',
  'title-xs',
  'accent',
  'normal',
  'masked',
  'section-title',
  'label',
  'menu',
] as const;
export type Variant = typeof VARIANTS[number];

export const DECORATIONS = ['underline'] as const;
export type Decoration = typeof DECORATIONS[number];

const titleXL = css`
  font-weight: 800;
  font-size: ${({ theme }) => em(theme.comet.size.country)};
  color: ${({ theme }) => theme.comet.color.text.normal};
  line-height: 1.05;
  text-decoration-thickness: ${({ theme }) =>
    em(theme.comet.size.street, theme.comet.size.country)};
  text-underline-offset: ${({ theme }) =>
    em(-theme.comet.size.street / 2, theme.comet.size.country)};
  text-decoration-skip: none;
  text-decoration-skip-ink: none;
`;

const titleL = css`
  ${titleXL};
  font-size: ${({ theme }) => em(theme.comet.size.state)};
  line-height: 1.25;
  text-decoration-thickness: ${({ theme }) => em(theme.comet.size.street, theme.comet.size.state)};
  text-underline-offset: ${({ theme }) => em(-theme.comet.size.street / 2, theme.comet.size.state)};
`;

const titleM = css`
  font-weight: 800;
  font-size: ${({ theme }) => em(theme.comet.size.city)};
  line-height: 1.25;
  color: ${({ theme }) => theme.comet.color.text.normal};
`;

const titleS = css`
  font-weight: 800;
  font-size: ${({ theme }) => em(theme.comet.size.town)};
  line-height: 1.25;
  color: ${({ theme }) => theme.comet.color.text.normal};
`;

const titleXS = css`
  font-weight: 800;
  font-size: ${({ theme }) => em(theme.comet.size.street)};
  line-height: 1.25;
  color: ${({ theme }) => theme.comet.color.text.normal};
`;

const masked = css`
  font-weight: 400;
  font-size: ${({ theme }) => em(theme.comet.size.house)};
  color: ${({ theme }) => theme.comet.color.text.masked};
  line-height: 1.5;
`;

const label = css`
  ${masked};
  font-size: ${({ theme }) => em(theme.comet.size.closet)};
`;

const sectionTitle = css`
  ${masked};
  font-size: ${({ theme }) => em(theme.comet.size.room)};
  font-weight: 700;
`;

const normal = css`
  ${masked};
  color: ${({ theme }) => theme.comet.color.text.normal};
  font-weight: 500;
`;

const accent = css`
  ${normal};
  font-weight: 700;
`;

const menu = css`
  color: ${({ theme }) => theme.comet.color.text.normal};
  font-size: ${({ theme }) => em(theme.comet.size.closet)};
  font-weight: 400;
  line-height: 1.15;
`;

const underline = css`
  text-decoration: underline;
  text-decoration-color: inherit;
  text-decoration-thickness: inherit;
  text-underline-offset: inherit;
  text-decoration-skip: inherit;
  text-decoration-skip-ink: inherit;
`;

export const StyledText = styled.span<{ variant?: Variant; decoration?: Decoration }>`
  margin: 0;
  padding: 0;
  text-decoration-color: ${({ theme }) => theme.comet.color.primary.normal};

  ${({ variant }) => variant === 'normal' && normal};
  ${({ variant }) => variant === 'masked' && masked};
  ${({ variant }) => variant === 'accent' && accent};
  ${({ variant }) => variant === 'title-xl' && titleXL};
  ${({ variant }) => variant === 'title-l' && titleL};
  ${({ variant }) => variant === 'title-m' && titleM};
  ${({ variant }) => variant === 'title-s' && titleS};
  ${({ variant }) => variant === 'title-xs' && titleXS};
  ${({ variant }) => variant === 'label' && label};
  ${({ variant }) => variant === 'section-title' && sectionTitle};
  ${({ variant }) => variant === 'menu' && menu};

  ${({ decoration }) => decoration === 'underline' && underline};

  u {
    ${underline};
  }
`;
