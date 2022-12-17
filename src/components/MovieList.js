import { Grid } from "@mui/material";
import Movie from "./Movie";
import { useContext } from "react";
import MovieContext from "../contexts/Movie";

const MovieList = () => {
  const { filterList } = useContext(MovieContext);
  return (
    <Grid container direction="column" sx={{ p: 4, pt: 0 }}>
      {filterList.map((movie) => (
        <Grid key={movie.id} item sx={{ pb: 4 }}>
          <Movie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
