/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  counter: number;
}

const initialState: InitialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },

    decrement: state => {
      state.counter -= 1;
    },

    incrementByAmount: (state, amount: PayloadAction<number>) => {
      state.counter += amount.payload;
    },

    decrementByAmount: (state, amount: PayloadAction<number>) => {
      state.counter -= amount.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
