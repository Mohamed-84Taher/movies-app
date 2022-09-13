let globalTheme = mode => ({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    mode: mode === "dark" ? "dark" : "light",
    primary: {
      main: "#3f51b5",
    },
    custom: {
      light: "#f9fbe7",
      main: "#F9F2ED",
      dark: "#9e9e9e",
    },
  },
});

export default globalTheme;
