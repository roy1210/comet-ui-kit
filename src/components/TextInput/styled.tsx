import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

export const SIZES = ['country', 'state', 'city'] as const;
export type Size = typeof SIZES[number];

export const STATES = ['normal', 'danger'] as const;
export type State = typeof STATES[number];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => em(theme.comet.size.room)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  margin-bottom: ${({ theme }) => em(theme.comet.size.drawer, theme.comet.size.room)};
`;

export const Description = styled.span`
  display: block;
  color: ${({ theme }) => theme.comet.color.text.normal};
  font-size: ${({ theme }) => em(theme.comet.size.closet)};
  margin-top: ${({ theme }) => em(theme.comet.size.box, theme.comet.size.room)};
`;

const country = css`
  border-radius: ${({ theme }) => em(theme.comet.size.box)};
  height: ${({ theme }) => em(theme.comet.size.country)};
`;

const state = css`
  border-radius: ${({ theme }) => em(theme.comet.size.box)};
  height: ${({ theme }) => em(theme.comet.size.state)};
`;

const city = css`
  border-radius: ${({ theme }) => em(theme.comet.size.box)};
  height: ${({ theme }) => em(theme.comet.size.city)};
`;

const normal = css`
  border-color: ${({ theme }) => theme.comet.components.input.idle.border};
`;

const danger = css`
  border-color: ${({ theme }) => theme.comet.color.border.danger};
`;

const focused = css<{ borderActiveColor: string }>`
  border-color: ${(props) =>
    props.borderActiveColor ? props.borderActiveColor : props.theme.comet.color.primary.active};
`;

export const InputContainer = styled.div<{
  size: Size;
  state: State;
  isFocused: boolean;
  borderActiveColor: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.comet.components.input.idle.bg};
  border: 2px solid transparent;
  color: ${({ theme }) => theme.comet.color.text.accent};
  overflow: hidden;
  font-size: ${({ theme }) => em(theme.comet.size.house)};

  ${({ theme }) =>
    transitions(['color', 'background', 'border'], `${theme.comet.duration.normal} ease-in-out`)};

  ${({ size }) => size === 'country' && country};
  ${({ size }) => size === 'state' && state};
  ${({ size }) => size === 'city' && city};

  ${({ state }) => state === 'normal' && normal};
  ${({ state }) => state === 'danger' && danger};

  ${({ isFocused }) => isFocused && focused};
`;

export const Input = styled.input<{ placeholderColor?: string }>`
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  background: transparent;
  color: inherit;
  height: 100%;
  width: 100%;
  text-indent: ${({ theme }) => em(theme.comet.size.closet, theme.comet.size.room)};
  padding-right: ${({ theme }) => em(theme.comet.size.closet, theme.comet.size.room)};
  font-size: ${({ theme }) => em(theme.comet.size.room)};
  font-weight: 700;
  min-width: 0;
  ${({ theme }) => transitions(['color'], `${theme.comet.duration.normal} ease-in-out`)};

  box-sizing: border-box;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);

  ::placeholder {
    color: ${(props) =>
      props.placeholderColor ? props.placeholderColor : props.theme.comet.color.text.placeholder};
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-left: ${({ theme }) => em(theme.comet.size.room)};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-right: ${({ theme }) => em(theme.comet.size.room)};
`;
