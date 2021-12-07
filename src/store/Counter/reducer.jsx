import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      return {
        ...state,
        ...{ counter: state.counter + 1 },
      };
    },
    decrement: state => ({
      ...state,
      ...{ counter: state.counter - 1 },
    }),
  },
});

export const { actions } = counterSlice;
export default counterSlice.reducer;
