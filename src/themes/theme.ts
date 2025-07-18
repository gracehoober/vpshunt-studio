import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d7b04dff', // Gold
    },
    secondary: {
      main: '#a7352d', // Muted red
      light: '#dc5950ff'
    },
    error: {
      main: '#6e2049ff', // Plum
    },
    background: {
      default: '#7ea394ff', // lighter jade'
      paper: '#5a8574',
      dashboard: '#5a8574'
    },
    text: {
      primary: '#f4f1ea',
    },
  },
  typography: {
    fontFamily: 'Noto Sans, Roboto, Arial, sans-serif',
  },
});


export default theme;
// '#8fb9a8', // lighter jade
//#6d9c88',  // Jade
