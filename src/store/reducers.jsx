/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from "@reduxjs/toolkit";

import apiMiddleware from "./middleware/index";
import ams from "./standard/index";

const store = configureStore({
  reducer: {
    ams,
    // other reducers go here
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddleware),
});
export default store;
