import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useOpen from "hooks/useOpen";
import { useSelector } from "react-redux";
import { selectError } from "redux/show.slice";
import { useEffect } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function CustomizedSnackbars() {
  const { open, handleOpen, handleClose } = useOpen(false);
  const error = useSelector(selectError);
  useEffect(() => {
    if (error) {
      handleOpen();
    }
  }, [error, handleOpen]);

  const handleClick = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    handleClose();
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClick}>
        <Alert onClose={handleClose} severity='error' sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
