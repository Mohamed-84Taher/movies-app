import { Box, Typography } from "@mui/material";
import { Image_Base_Url } from "../../../constants/image_url";
import PropTypes from "prop-types";

function Episode({ episode_number, overview, name, still_path }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        height: "100px",
        m: "50px",
        p: "8px 10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",

          width: "30%",
        }}
      >
        <Typography
          variant='h5'
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
          }}
        >
          {episode_number}
        </Typography>
        <img
          src={`${Image_Base_Url}${still_path}`}
          alt='episode'
          width='60%'
          height='90%'
        />
      </Box>
      <Box sx={{ width: "70%", textAlign: "left" }}>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body2'>{overview}</Typography>
      </Box>
    </Box>
  );
}
Episode.prototype = {
  episode_number: PropTypes.number,
  overview: PropTypes.string,
  name: PropTypes.string,
  still_path: PropTypes.string,
};
export default Episode;
