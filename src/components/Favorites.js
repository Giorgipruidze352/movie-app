import { Grid, Typography } from "@mui/material";
import Movie from "./Movie";
import { useContext } from "react";
import MovieContext from "../contexts/Movie";

const Favorites = () => {
  const { favorites } = useContext(MovieContext);
  return (
    <>
      {favorites.length > 0 ? (
        <Grid container direction="column" sx={{ p: 4 }}>
          {favorites.map((movie) => (
            <Grid key={movie.id} item sx={{ pb: 4 }}>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          m={2}
        >
          No Favorites yet
        </Typography>
      )}
    </>
  );
};

export default Favorites;
