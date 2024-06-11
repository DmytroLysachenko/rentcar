import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchPageThunk } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  currentCar: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addCurrentCar(state, { payload }) {
      state.currentCar = payload;
    },
    removeCurrentCar(state) {
      state.currentCar = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageThunk.fulfilled, (state, { payload }) => {
        state.items = [...payload];
      })
      .addMatcher(isAnyOf(fetchPageThunk.pending), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchPageThunk.fulfilled), (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchPageThunk.rejected), (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { addCurrentCar, removeCurrentCar } = catalogSlice.actions;
