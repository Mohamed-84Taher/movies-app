import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import CenterContainer from "components/containers/CenterContainer";
import { HOME, TVDETAILS, WATCHLIST } from "constants/routes";
const CustomizedSnackbars = lazy(() =>
  import("components/shared/CustomizedSnackbars")
);
const Header = lazy(() => import("components/Header"));
const Home = lazy(() => import("pages/Home"));
const TvShowDetails = lazy(() => import("pages/TvShowDetails"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <CustomizedSnackbars />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={WATCHLIST} element={<Home />} />
        <Route path={TVDETAILS} element={<TvShowDetails />} />
      </Routes>
    </Suspense>
  );
};

const Loader = () => (
  <CenterContainer>
    <CircularProgress />
  </CenterContainer>
);

export default RouterConfig;
