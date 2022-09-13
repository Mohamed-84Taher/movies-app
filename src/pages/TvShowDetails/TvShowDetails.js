import { Box, Button, Container, Typography } from "@mui/material";
import Episode from "components/shared/Episode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchDetails,
  fetchEpisodes,
  selectEpisodes,
  selectShowDetails,
} from "redux/show.slice";

const Image_Base_Url = "https://image.tmdb.org/t/p/w500/";

function TvShowDetails() {
  const showDetails = useSelector(selectShowDetails);
  const episodes = useSelector(selectEpisodes);
  const { mode } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const { id } = useParams();

  // fetch tvshow details by id
  useEffect(() => {
    dispatch(fetchDetails(id));
    dispatch(fetchEpisodes(id, 1));
  }, [dispatch, id]);

  return (
    <Container fixed>
      <Box
        sx={{
          backgroundImage: `url(${Image_Base_Url}${showDetails?.backdrop_path})`,
          backgroundSize: "cover",
          p: "100px 10px 10px",
        }}
      >
        <Typography variant='h3' sx={{ color: "white" }}>
          {showDetails?.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              mt: "20px",
              height: "300px",
              width: "70%",
            }}
          >
            {showDetails?.genres.map(genre => (
              <Button
                sx={{
                  ml: "8px",
                  mb: "8px",
                  backgroundColor: mode === "dark" ? "#424242" : null,
                  border: "none",
                  "&:hover": {
                    backgroundColor: mode === "dark" ? "#424242" : null,
                    border: "none",
                  },
                }}
                variant={mode === "dark" ? "outlined" : "contained"}
                color='custom'
                key={genre.id}
              >
                {genre.name}
              </Button>
            ))}
            <Typography sx={{ color: "white" }}>
              {showDetails?.overview}
            </Typography>
            <Button
              sx={{
                mt: "20px",
                backgroundColor: mode === "dark" ? "#424242" : null,
                border: "none",
                "&:hover": {
                  backgroundColor: mode === "dark" ? "#424242" : null,
                  border: "none",
                },
              }}
              variant={mode === "dark" ? "outlined" : "contained"}
              color='custom'
            >
              Watchlist
            </Button>
          </Box>
          <Box>
            <Typography>
              Created By :{" "}
              {showDetails?.created_by.map(item => item.name).join(",")}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Episodes */}
      <Box sx={{ mt: "30px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant='h3'>Episodes</Typography>
          <Button
            sx={{
              backgroundColor: mode === "dark" ? "#424242" : null,
              border: "none",
              "&:hover": {
                backgroundColor: mode === "dark" ? "#424242" : null,
                border: "none",
              },
            }}
            variant={mode === "dark" ? "outlined" : "contained"}
            color='custom'
          >
            Season 1 ({`${showDetails?.seasons[0].episode_count}`})
          </Button>
        </Box>
        {episodes.map(episode => (
          <Episode key={episode.id} {...episode} />
        ))}
      </Box>
    </Container>
  );
}

export default TvShowDetails;
