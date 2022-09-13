import { Button, TextField, Grid } from "@mui/material";
import CustomizedSwitch from "../shared/Switch";
import { CustomPaper } from "./Header.styles";
import { Link, useSearchParams } from "react-router-dom";
import { WATCHLIST } from "constants/routes";

const Header = () => {
  const [search, setSearch] = useSearchParams();

  return (
    <CustomPaper>
      <Grid
        container
        spacing={3}
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item md={3} xs={1}></Grid>
        <Grid item md={4} xs={10} sx={{ mr: { xs: "20px" } }}>
          <TextField
            id='outlined-basic'
            label='Search'
            variant='outlined'
            color='primary'
            placeholder='Start searching'
            fullWidth
            value={search.get('q')}
            onChange={e => {
              setSearch({q : e.target.value});
            }}
          />
        </Grid>
        <Grid item md={4} xs={10} sx={{ ml: { xs: "60px" } }}>
          <Link to={WATCHLIST} style={{ textDecoration: "none" }}>
            {" "}
            <Button variant='contained' color='error' size='small'>
              WATCH LIST
            </Button>
          </Link>
          <CustomizedSwitch />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Header;
