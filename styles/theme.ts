import { alpha, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  // Theme
  interface Theme {
    status: {
      danger: string;
    };
    navHeight: number;
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    navHeight: number;
  }

  //   Palette
  interface Palette {
    default: {
      main: string;
    };
    mint: {
      main: string;
    };
    gradient: {
      main: string;
    };
  }

  interface PaletteOptions {
    gradient?: {
      main: string;
    };
    default?: {
      main: string;
    };
    mint?: {
      main: string;
    };
  }
}

export const theme = createTheme({
  navHeight: 96,

  palette: {
    primary: {
      main: '#01340d',
    },
    secondary: {
      main: alpha('#FFF7ED', 0.1),
    },
    gradient: {
      main: 'radial-gradient(circle, rgba(2,203,49,1) 0%, rgba(0,133,18,1) 100%)',
    },
    mint: {
      main: '#AAF0D1',
    },
    default: {
      main: '#FFF7ED',
    },
  },
});
