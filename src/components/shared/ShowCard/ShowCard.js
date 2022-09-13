import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Image_Base_Url } from "../../../constants/image_url";

function ShowCard({ id, poster_path, name }) {
  return (
    <Link to={`/show/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ width: 250 }}>
        <CardMedia
          component='img'
          alt='tv show img'
          height='200'
          image={`${Image_Base_Url}${poster_path}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
ShowCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};
export default ShowCard;
