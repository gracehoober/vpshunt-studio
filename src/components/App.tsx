import { Dashboard } from "./dashboard/Display/Dashboard.tsx";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import theme from "../themes/theme.ts";
import { ImageLibrary } from "./imageLibrary/ImageLibrary.tsx";
import { Home } from "./home/Home.tsx";
import { NavBar } from "./navBar/NavBar.tsx";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar sx={styles.navbar} />
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
const styles = {
  navbar: {},
};
export default App;
