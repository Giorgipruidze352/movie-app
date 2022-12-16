import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Login from './Login';
import Register from './Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;