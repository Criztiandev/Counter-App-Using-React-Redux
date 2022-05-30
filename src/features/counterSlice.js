import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    Increment: (state, actions) => {
      state.value += actions.payload;
    },

    Decrement: (state, actions) => {
      state.value -= actions.payload;
    },

    Reset: (state, actions) => {
      state.value = 0;
    },
  },
});

export const { Increment, Decrement, Reset } = counterSlice.actions;
export default counterSlice.reducer;
