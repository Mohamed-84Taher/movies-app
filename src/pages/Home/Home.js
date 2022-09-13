import CustomContainer from "../../components/shared/CustomContainer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows, selectShows, searchQuery } from "redux/show.slice";
import ShowCard from "components/shared/ShowCard";
import { Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Home = () => {

  const [search, setSearch] = useSearchParams({});
  const searchTerm = search.get('q');
  
  const shows = useSelector(selectShows);
  const dispatch = useDispatch();

  useEffect(() => {
    let searchQueryTimeout = null;
    if (searchTerm) {
      searchQueryTimeout = setTimeout(() => {
        dispatch(searchQuery(searchTerm));
      }, 500);
      return () => clearTimeout(searchQueryTimeout);
    }
    setSearch({});
    dispatch(fetchShows());
    
  }, [searchTerm, dispatch, setSearch]);

  return (
    <>
      {!shows.length && (
        <Typography sx={{ mt: "20px", textAlign: "center" }}>
          No results for your query "{searchTerm}"
        </Typography>
      )}
      {searchTerm && shows.length !== 0 && (
        <Typography sx={{ mt: "20px", textAlign: "center" }}>
          You are searching for "{searchTerm}"
        </Typography>
      )}

      <CustomContainer>
        {shows.map(show => (
          <ShowCard key={show.id} {...show} />
        ))}
      </CustomContainer>
    </>
  );
};

export default Home;
