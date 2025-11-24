import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { getTheme } from "./themes/theme.ts";
import { NavBar } from "./components/navBar/NavBar.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./components/home/Home.tsx";
import { Dashboard } from "./components/dashboard/Display/Dashboard.tsx";
import { ImageLibrary } from "./components/imageLibrary/ImageLibrary.tsx";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext.tsx";

const AppContent = () => {
  const { mode } = useTheme();
  const theme = getTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/imaging-library" element={<ImageLibrary />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export { App };
