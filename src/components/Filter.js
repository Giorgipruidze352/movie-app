import { Box, Typography, Stack, Chip } from "@mui/material";
import { useContext } from "react";
import MovieContext from "../contexts/Movie";
const Filter = () => {
  const { genres, selectedGenre, filterByGenre } = useContext(MovieContext);

  const handleClick = (genre) => {
    filterByGenre(genre);
  };

  return (
    <Box sx={{ m: 2, ml: 4 }}>
      <Typography gutterBottom variant="body1" sx={{ p: 1, pl: 0 }}>
        Select genre
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="flex-start">
        <Chip
          label="All"
          onClick={() => handleClick(null)}
          variant="filled"
          color={selectedGenre === "" ? "primary" : "default"}
          sx={{ mb: 1, mr: 0.8 }}
        />
        {genres.map((genre) => (
          <Chip
            key={genre}
            label={genre}
            variant="filled"
            color={selectedGenre === genre ? "primary" : "default"}
            onClick={() => handleClick(genre)}
            sx={{ mb: 1, mr: 0.8 }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Filter;
