import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchFilteredThunk, fetchPageThunk } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  currentCar: null,
  favoritesId: [],
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
    addFavoriteCar(state, { payload }) {
      state.favoritesId.push(payload);
    },
    removeFavoriteCar(state, { payload }) {
      state.favoritesId = state.favoritesId.filter((id) => id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload];
      })
      .addMatcher(
        isAnyOf(fetchFilteredThunk.fulfilled),
        (state, { payload }) => {
          state.items = [...payload];
        }
      )

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
export const {
  addCurrentCar,
  removeCurrentCar,
  addFavoriteCar,
  removeFavoriteCar,
} = catalogSlice.actions;
