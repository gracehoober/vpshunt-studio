import { Dashboard } from "./dashboard/Dashboard/Dashboard";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import theme from "../themes/theme.ts";
import { ImageLibrary } from "./imageLibrary/ImageLibrary.tsx";
import { Home } from "./home/Home.tsx";
import { NavBar } from "./navBar/NavBar.tsx";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/imaging-library" element={<ImageLibrary />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
