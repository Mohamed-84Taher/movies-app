import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useOpen from "hooks/useOpen";
import { useDispatch, useSelector } from "react-redux";
import { removeError, selectError } from "redux/show.slice";
import { useEffect } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function CustomizedSnackbars() {
  const { open, handleOpen, handleClose } = useOpen(false);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      handleOpen();
      const fn = setTimeout(() => {
        dispatch(removeError());
      }, 3000);
      return () => clearTimeout(fn);
    }
  }, [error, handleOpen, dispatch]);

  const handleClick = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    handleClose();
  };

  return (
    <>
      {error && (
        <Snackbar
          open={open}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
          autoHideDuration={3000}
          onClose={handleClick}
        >
          <Alert onClose={handleClose} severity='error' sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
