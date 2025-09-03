import { ImageLibrary } from "./components/imageLibrary/ImageLibrary.tsx";
import { Home } from "./components/home/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./components/dashboard/Display/Dashboard.tsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/imaging-library" element={<ImageLibrary />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
