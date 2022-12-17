import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

const Movie = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardContent>
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
        <IconButton aria-label="Add to Favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Delete">
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Movie;