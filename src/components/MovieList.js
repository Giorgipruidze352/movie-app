import { Grid } from "@mui/material";
import Movie from "./Movie";
import { useContext } from "react";
import MovieContext from "../contexts/Movie";

const MovieList = () => {
  const { filterList, favorites, addToFavorites, removeMovie } =
    useContext(MovieContext);
  return (
    <Grid container direction="column" sx={{ p: 4, pt: 0 }}>
      {filterList.map((movie) => (
        <Grid key={movie.id} item sx={{ pb: 4 }}>
          <Movie
            movie={movie}
            addToFavorites={addToFavorites}
            removeMovie={removeMovie}
            favorites={favorites}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
