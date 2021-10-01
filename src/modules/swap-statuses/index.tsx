import { CometThemeType } from '../themes';

export const SWAP_STATUSES = [
  'WAITING',
  'PENDING',
  'SIGNING',
  'SENDING',
  'COMPLETED',
  'SIGNING_REFUND',
  'SENDING_REFUND',
  'REFUNDED',
  'EXPIRED',
] as const;
export type SwapStatus = typeof SWAP_STATUSES[number];

export const getStatusColor = ({
  theme,
  status,
}: {
  theme: CometThemeType;
  status: SwapStatus;
}) => {
  switch (status) {
    case 'WAITING':
    case 'PENDING':
      return theme.comet.color.text.masked;
    case 'SENDING':
    case 'SIGNING':
      return theme.comet.color.warning.normal;
    case 'COMPLETED':
      return theme.comet.color.success.normal;
    case 'SENDING_REFUND':
    case 'SIGNING_REFUND':
    case 'REFUNDED':
      return theme.comet.color.danger.normal;
    case 'EXPIRED':
      return theme.comet.color.secondary.normal;
  }
};
