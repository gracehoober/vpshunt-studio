import { ThemeProvider } from "@mui/material";
import baseTheme from "./themes/theme.ts";
import { NavBar } from "./components/navBar/NavBar.tsx";
import { AppRouter } from "./AppRouter.tsx";

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <NavBar />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
