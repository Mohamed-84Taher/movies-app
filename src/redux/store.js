import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import showReducer from "./show.slice";

const rootReducer = {
  theme: themeReducer,
  show: showReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
