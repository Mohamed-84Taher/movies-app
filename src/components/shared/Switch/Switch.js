import { FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "redux/theme.slice";
import { MaterialUISwitch } from "./Switch.styles";

function CustomizedSwitch() {
  const { mode } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  // check if the mode is dark
  const isDarkMode = mode === "dark";

  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} />}
      checked={isDarkMode}
      onChange={() => dispatch(setThemeMode(isDarkMode ? "light" : "dark"))}
      label={mode}
    />
  );
}
export default CustomizedSwitch;
