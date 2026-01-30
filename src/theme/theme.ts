import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#060709',
      paper: '#0F0F15',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A1AA',
    },
    primary: {
      main: '#A855F7',
      light: '#C4B5FD',
      dark: '#9333EA',
    },
    secondary: {
      main: '#C084FC',
      light: '#DDD6FE',
      dark: '#A855F7',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
    primary: {
      main: '#A855F7',
      light: '#C4B5FD',
      dark: '#9333EA',
    },
    secondary: {
      main: '#C084FC',
      light: '#DDD6FE',
      dark: '#A855F7',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})
