/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

import apiMiddleware from './middleware/index';
import ams from './standard/index';
import counter from './Counter/reducer';

const store = configureStore({
  reducer: {
    ams,
    counter,
    // other reducers go here
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddleware),
});
export default store;
