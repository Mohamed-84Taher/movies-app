const { styled, Container } = require("@mui/material");

export const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: theme?.breakpoints?.xs ? "column" : "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  marginTop: theme.spacing(6),
}));
