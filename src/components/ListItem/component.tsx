import React from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/testing';
import { Icon } from '../Icon';

import { Styled, ContentContainer, Content, Left, Right, Fixed } from './styled';

export type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'as'> &
  Testable & {
    selected?: boolean;
    selectedColor?: string;
    interactive?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    htmlTag?: NonNullable<keyof React.ReactHTML>;
  };

export const Component = ({
  htmlTag,
  selected = false,
  selectedColor = '',
  interactive = true,
  children,
  disabled,
  left,
  right,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const theme = useTheme();

  return (
    <Styled
      {...otherProps}
      as={htmlTag as 'button'}
      disabled={disabled}
      interactive={interactive}
      data-testid={buildTestId('')}
    >
      {left && <Left data-testid={buildTestId('left')}>{left}</Left>}
      <ContentContainer data-testid={buildTestId('content')}>
        <Content>{children}</Content>
      </ContentContainer>
      {right && <Right data-testid={buildTestId('right')}>{right}</Right>}
      {selected && (
        <Fixed>
          <Icon.Tick
            fontSize={theme.comet.size.drawer}
            color={selectedColor ? selectedColor : theme.comet.color.primary.normal}
            data-testid={buildTestId('tick')}
          />
        </Fixed>
      )}
    </Styled>
  );
};

Component.displayName = 'ListItem';
