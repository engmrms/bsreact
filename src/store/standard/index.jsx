import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const amsSlice = createSlice({
  name: "ams",
  initialState,
  reducers: {
    dataExist: state => state,
    loading(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    fetchSuccess: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    fetchError: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { actions } = amsSlice;
export default amsSlice.reducer;
