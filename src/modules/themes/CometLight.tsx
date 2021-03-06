export const CometLight = {
  comet: {
    id: 'CometLight' as 'CometLight' | 'CometDark' | 'CometAccent',
    name: 'Comet (Light)',

    color: {
      bg: {
        // normal: '#fff',
        normal: '#f4f5f7',
        accent: '#ecf2f8',
        masked: '#fafeff',
        hover: '#fbfbfb',
        transparent: 'rgba(255, 255, 255, 0.85)',
      },

      text: {
        normal: '#4a5463',
        masked: '#818994',
        accent: '#2b374a',
        placeholder: '#818994',
      },

      border: {
        normal: '#d7dade',
        danger: '#ffc2c4',
      },

      primary: {
        normal: '#31d5b8',
        active: '#21a68e',
        text: '#fff',
      },

      secondary: {
        normal: '#3799da',
        active: '#297cb3',
        text: '#fff',
      },

      success: {
        normal: '#31d5b8',
        active: '#21a68e',
        text: '#fff',
      },

      danger: {
        normal: '#d14c40',
        active: '#d14c40',
        text: '#fff',
      },

      warning: {
        normal: '#ffbf00',
        active: '#ffbf00',
        text: '#2b374a',
      },
    },

    size: {
      /** `4px` */
      box: 4,
      /** `8px` */
      drawer: 8,
      /** `12px` */
      closet: 12,
      /** `14px` */
      room: 14,
      /** `16px` */
      house: 16,
      /** `24px` */
      street: 24,
      /** `32px` */
      town: 32,
      /** `40px` */
      city: 40,
      /** `48px` */
      state: 48,
      /** `56px` */
      country: 56,
    },

    duration: {
      normal: '150ms',
    },

    shadow: {
      tooltip: '0px 20px 25px rgba(43, 55, 74, 0.5);',
      card: '0px 15px 25px -10px rgba(43, 55, 74, 0.152644)',
      toast: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
      toastHover: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    },

    components: {
      input: {
        idle: {
          bg: '#fff',
          border: '#d7dade',
        },
      },
    },
  },
};
