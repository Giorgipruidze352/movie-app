import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import MovieDetails from "./MovieDetails";
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
        <Route path="home/:id" element={<MovieDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </MovieProvider>
  );
};

export default AppRoutes;