import { useState, useEffect } from "react";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Movie from "./Movie";
import MovieContext from "../contexts/Movie";

const MovieList = () => {
  const { filterList } = useContext(MovieContext);
  const [showedMovies, setShowedMovies] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 8;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterList.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setShowedMovies(filterList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filterList.length / itemsPerPage));
  }, [itemOffset, filterList]);

  return (
    <>
      {showedMovies.length > 0 ? (
        <>
          <Grid container direction="column" sx={{ p: 4, pt: 0, pb: 0 }}>
            {showedMovies.map((movie) => (
              <Grid key={movie.id} item sx={{ pb: 4 }}>
                <Movie movie={movie} />
              </Grid>
            ))}
          </Grid>
          <ReactPaginate
            breakLabel="..."
            previousLabel={<ArrowBackIosIcon />}
            nextLabel={<ArrowForwardIosIcon />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            activeLinkClassName="page-active"
            previousLinkClassName="prev"
            nextLinkClassName="next"
          />
        </>
      ) : (
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          m={2}
        >
          No Movies found
        </Typography>
      )}
    </>
  );
};

export default MovieList;
