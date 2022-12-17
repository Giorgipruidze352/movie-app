import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import MovieContext from "../contexts/Movie";

const Movie = ({ movie }) => {
  const { favorites, addToFavorites, removeMovie } = useContext(MovieContext);
  const isFavorite = favorites.find((favMovie) => favMovie.id === movie.id);
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardContent>
        <Link
          to={`/movies/${movie.id}`}
          style={{ textDecoration: "none", color: "#1B2330", cursor: "pointer" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {movie.title}
            <Typography sx={{ mb: 1.5, pl: 1 }} color="text.secondary">
              {movie.year}
            </Typography>
          </Typography>
        </Link>
        <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
          Genre: {movie.genre}
        </Typography>
        <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
          Director: {movie.director}
        </Typography>
        <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
          Cast: {movie.actors}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.plot}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton
          aria-label="Add to Favorites"
          onClick={() => addToFavorites(movie.id)}
        >
          <FavoriteIcon color={isFavorite ? "secondary" : "default"} />
        </IconButton>
        <IconButton aria-label="Delete" onClick={() => removeMovie(movie.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Movie;
