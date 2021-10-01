import { CometLight } from './CometLight';
import { CometThemeType } from './CometThemeType';

export const CometDark: CometThemeType = {
  comet: {
    ...CometLight.comet,

    id: 'CometDark',
    name: 'Comet (Dark)',

    color: {
      ...CometLight.comet.color,

      bg: {
        normal: '#0f1621',
        accent: '#1c232f',
        masked: '#1c232f',
        hover: '#202736',
        transparent: 'rgba(15, 22, 34, 0.92)',
      },

      text: {
        normal: '#f2f2f2',
        masked: '#ccc',
        accent: '#fff',
        placeholder: '#818994',
      },

      border: {
        normal: '#353f4c',
        danger: '#ffc2c4',
      },
    },

    shadow: {
      ...CometLight.comet.shadow,
      tooltip: '0px 20px 25px rgba(0, 0, 0, 0.503715);',
    },

    components: {
      input: {
        idle: {
          bg: '#1c232f',
          border: 'transparent',
        },
      },
    },
  },
};
