import { useParams } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../contexts/Movie";
import { Container } from "@mui/material";
import Movie from "./Movie";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies } = useContext(MovieContext);

  const movie = movies.filter((movie) => movie.id === parseInt(id));
  return (
    <Container sx={{ p: 3 }}>
      <Movie movie={movie[0]} />
    </Container>
  );
};

export default MovieDetails;
