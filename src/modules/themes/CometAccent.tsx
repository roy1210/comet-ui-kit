import { CometDark } from './CometDark';
import { CometThemeType } from './CometThemeType';

export const CometAccent: CometThemeType = {
  comet: {
    ...CometDark.comet,

    id: 'CometAccent',
    name: 'Comet (Accent)',

    color: {
      ...CometDark.comet.color,

      bg: {
        normal: '#1e293b',
        accent: '#2f3a4b',
        masked: '#2f3a4b',
        hover: '#334057',
        transparent: 'rgba(15, 22, 34, 0.92)',
      },
    },

    components: {
      ...CometDark.comet.components,

      input: {
        idle: {
          bg: '#2f3a4b',
          border: 'transparent',
        },
      },
    },
  },
};
