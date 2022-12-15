import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";

const AppRoutes = () => {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
  );
};

export default AppRoutes;