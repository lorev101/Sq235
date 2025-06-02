import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A97155',      // Toffee
      light: '#D8A48F',     // Blush Caramel
      dark: '#6B3F2B',      // Rich Chocolate
      contrastText: '#fff',
    },
    secondary: {
      main: '#F3C77B',      // Vanilla Cream
      light: '#FBE9C5',     // Pastel Cream
      dark: '#D1A458',      // Toasted Honey
      contrastText: '#4B2C20',
    },
    background: {
      default: '#FFFDF8',   // Light Ivory
      paper: '#FFF6ED',     // Almond Milk
    },
    error: {
      main: '#D26565',
      light: '#EBA3A3',
      dark: '#B54141',
      contrastText: '#fff',
    },
    success: {
      main: '#5E9274',      // Herbal Green
      light: '#88B49B',
      dark: '#3F7054',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Pacifico", cursive',
      fontSize: '3rem',
      fontWeight: 400,
    },
    h2: {
      fontFamily: '"Pacifico", cursive',
      fontSize: '2.25rem',
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"Pacifico", cursive',
      fontSize: '1.75rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #A97155, #F3C77B)',
        },
      },
    },
  },
});
