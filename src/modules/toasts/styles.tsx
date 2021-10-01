import { rem, transitions } from 'polished';
import { css } from 'styled-components';

export const toastStyles = css`
  .Toastify__toast-container {
    padding: ${rem(1)};
    font-size: 0;

    @media (min-height: ${rem(150)}) {
      padding: ${({ theme }) => rem(theme.comet.size.box)};
    }
  }

  .Toastify__toast {
    border-radius: ${({ theme }) => rem(theme.comet.size.box)};
    padding: ${({ theme }) => rem(theme.comet.size.box)};
    font-family: inherit;
    min-height: 0;
    margin-bottom: ${({ theme }) => rem(theme.comet.size.box)};
    box-shadow: ${({ theme }) => theme.comet.shadow.toast};
    font-size: ${rem(10)};
    cursor: inherit;
    ${({ theme }) => transitions(['box-shadow'], theme.comet.duration.normal)};

    :hover {
      box-shadow: ${({ theme }) => theme.comet.shadow.toastHover};
    }

    @media (min-height: ${rem(150)}) {
      font-size: ${({ theme }) => rem(theme.comet.size.closet)};
      padding: ${({ theme }) => rem(theme.comet.size.drawer)};
      min-height: ${({ theme }) => rem(theme.comet.size.street)};
      margin-bottom: ${({ theme }) => rem(theme.comet.size.drawer)};
    }

    @media (min-width: ${rem(768)}) and (min-height: ${rem(150)}) {
      font-size: ${({ theme }) => rem(theme.comet.size.closet)};
    }
  }

  .Toastify__close-button {
    align-self: center;
    color: inherit;
    background: transparent;
    font-size: 1em;

    > svg {
      width: 1em;
      height: ${14 / 16}em;
    }
  }

  .Toastify__toast--default {
    background: ${({ theme }) => theme.comet.color.bg.masked};
    color: ${({ theme }) => theme.comet.color.text.normal};
  }

  .Toastify__toast--success {
    background: ${({ theme }) => theme.comet.color.success.normal};
    color: ${({ theme }) => theme.comet.color.success.text};
  }

  .Toastify__toast--warning {
    background: ${({ theme }) => theme.comet.color.warning.normal};
    color: ${({ theme }) => theme.comet.color.warning.text};
  }

  .Toastify__toast--error {
    background: ${({ theme }) => theme.comet.color.danger.normal};
    color: ${({ theme }) => theme.comet.color.danger.text};
  }
`;
