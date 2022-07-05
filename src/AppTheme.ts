export const AppTheme = {
  palette: {
    principal: {
      light: '#76AAFF',
      main: '#0B67C2',
      dark: '#001C65',
    },
    secondary: {
      light: '#A6D5FF',
      main: '#0091DC',
      dark: '#4758A3',
    },
    oppositeA: {
      light: '#F56E89',
      main: '#C52155',
      dark: '#9B0736',
    },
    oppositeB: {
      light: '#D8ECEA',
      main: '#2AC195',
      dark: '#008A62',
    },
    grey: {
      white: '#F5F9FF',
      light: '#CDD8ED',
      main: '#8B96AF',
      dark: '#2E354A',
      black: '#010D2B',
    },
  },
};

export type ColorVariant =
  | 'principal'
  | 'secondary'
  | 'oppositeA'
  | 'oppositeB';

export const PAGE_PADDING_X = '5vw';
