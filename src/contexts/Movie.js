import { createContext, useEffect, useState } from "react";
import data from "../movies.json";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filterList, setFilterList] = useState([]);

  const getOnlyGenres = movies.map((movie) => movie.genre);
  const genres = getOnlyGenres.filter((m, index) => {
    return getOnlyGenres.indexOf(m) === index;
  });

  useEffect(() => {
    setMovies([...data]);
    setFilterList([...data]);
  }, []);

  const filterByGenre = (genre) => {
    if (genre) {
      setSelectedGenre(genre);
      const moviesToShow = movies.filter((movie) => movie.genre === genre);
      setFilterList(moviesToShow);
    } else {
      setSelectedGenre("");
      setFilterList(movies);
    }
  };

  const addToFavorites = (id) => {
    const isFavorite = favorites.find((movie) => movie.id === id);
    if (isFavorite) {
      setFavorites(() => favorites.filter((movie) => movie.id !== id));
    } else {
      const favMovie = movies.filter((movie) => movie.id === id);
      setFavorites((prevState) => [...prevState, favMovie[0]]);
    }
  };

  const removeMovie = (id) => {
    const removedMovie = movies.filter((movie) => movie.id !== id);
    setMovies(removedMovie);
  };

  return (
    <MovieContext.Provider
      value={{
        filterList,
        genres,
        selectedGenre,
        favorites,
        removeMovie,
        addToFavorites,
        filterByGenre,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
