import { ThemeProvider } from "@mui/material";
import baseTheme from "./themes/theme.ts";
import { NavBar } from "./components/navBar/NavBar.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./components/home/Home.tsx";
import { Dashboard } from "./components/dashboard/Display/Dashboard.tsx";
import { ImageLibrary } from "./components/imageLibrary/ImageLibrary.tsx";

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/imaging-library" element={<ImageLibrary />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export { App };
