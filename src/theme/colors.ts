export const colors = {
  // Primary/Brand Colors
  primary: {
    100: '#2587A0',
  },

  // Accent Colors
  accent: {
    1: '#7099A7',
    3: '#748B91',
    4: '#829695',
    5: '#3FC9ED',
  },

  // White with opacity levels
  white: {
    100: '#FFFFFF',
    90: 'rgba(255, 255, 255, 0.9)',
    80: 'rgba(255, 255, 255, 0.8)',
    50: 'rgba(255, 255, 255, 0.5)',
    30: 'rgba(255, 255, 255, 0.3)',
    20: 'rgba(255, 255, 255, 0.2)',
    10: 'rgba(255, 255, 255, 0.1)',
    0: 'rgba(255, 255, 255, 0)',
  },

  // Black with opacity levels
  black: {
    100: '#000000',
    80: 'rgba(0, 0, 0, 0.8)',
    50: 'rgba(0, 0, 0, 0.5)',
    30: 'rgba(0, 0, 0, 0.3)',
    20: 'rgba(0, 0, 0, 0.2)',
    0: 'rgba(0, 0, 0, 0)',
  },

  // Gray Scale
  gray: {
    50: '#D5D6D0',
    100: '#EAEAEA',
    200: '#D8D8D8',
    300: '#BABABA',
    400: '#AAAAAA',
    500: '#9B9B9B',
    700: '#565656',
    800: '#474747',
    900: '#2D2D2D',
    1000: '#1E1E1E',
  },

  // Semantic Colors - Error/Danger
  vermilion: {
    100: '#C62910',
    dark: '#AD1719',
  },

  red: {
    100: '#FF0004',
    80: 'rgba(255, 0, 4, 0.8)',
  },

  // Highlight Colors (for text highlighting in Bible/Notes)
  highlight: {
    1: '#562C30',
    2: '#6F513B',
    3: '#544D01',
    4: '#4E5641',
    5: '#3B605D',
    6: '#235B76',
    7: '#3C5175',
    8: '#4D466F',
    9: '#653560',
    10: '#4C515A',
  },

  // Special Colors
  gold: {
    100: '#C2B067', // For locked/premium content
  },

  // Metal Gradients (for badges)
  metal: {
    gold: 'linear-gradient(90deg, rgba(140, 66, 29, 1) 0%, rgba(251, 230, 123, 1) 31%, rgba(252, 251, 231, 1) 54%, rgba(247, 209, 78, 1) 80%, rgba(212, 160, 65, 1) 100%)',
    silver:
      'linear-gradient(90deg, rgba(122, 150, 172, 1) 0%, rgba(234, 239, 243, 1) 16%, rgba(194, 212, 225, 1) 31%, rgba(255, 255, 255, 1) 51%, rgba(212, 222, 229, 1) 64%, rgba(171, 189, 200, 1) 83%, rgba(188, 202, 215, 1) 100%)',
    bronze:
      'linear-gradient(90deg, rgba(158, 137, 118, 1) 0%, rgba(122, 94, 80, 1) 18%, rgba(246, 208, 171, 1) 39%, rgba(157, 119, 78, 1) 59%, rgba(201, 155, 112, 1) 83%, rgba(121, 95, 82, 1) 97%)',
  },
  internal: {
    mark: '#FF00D6',
    placeholder: '#D9D9D9',
  },

  testColor: 'yellow',
} as const;

export type Colors = typeof colors;
