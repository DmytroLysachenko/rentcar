import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { error } from 'console';
import { stat } from 'fs';
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
      state.catalog.currentCar = payload;
    },
    removeCurrentCar(state, { payload }) {
      state.catalog.currentCar = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageThunk.fulfilled, (state, { payload }) => {
        state.catalog.items = state.catalog.items.push(payload);
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
