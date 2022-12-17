import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Login from './Login';
import Register from './Register';
import { MovieProvider } from "../contexts/Movie";

const AppRoutes = () => {
  return (
    <MovieProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </MovieProvider>
  );
};

export default AppRoutes;