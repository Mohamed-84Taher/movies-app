import { createTheme, responsiveFontSizes } from "@mui/material";
import globalTheme from "./globalTheme";

let lightTheme = createTheme({
  ...globalTheme("light"),
  palette: {
    ...globalTheme("light").palette,
    background: {
      default: "#fafafa",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
