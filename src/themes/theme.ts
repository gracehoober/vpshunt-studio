import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7ea394ff",
    },
    secondary: {
      main: "#a7352d",
      light: "#d7b04dff",
    },
    error: {
      main: "#dc5950ff",
    },
    background: {
      default: "#7ea394ff",
      paper: "#f4f1ea",
    },
    text: {
      primary: "#f4f1ea",
      secondary: "#6e2049ff",
    },
  },
  typography: {
    fontFamily: "Noto Sans, Roboto, Arial, sans-serif",
  },
});

export default theme;
// '#8fb9a8', // lighter jade
//#6d9c88',  // Jade
// #d7b04dff;
// "#5a8574",
