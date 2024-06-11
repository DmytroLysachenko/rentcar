import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockAPI } from '../../helpers/mockAPI';

export const fetchAllThunk = createAsyncThunk(
  'catalog/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await mockAPI.get('/adverts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchPageThunk = createAsyncThunk(
  'catalog/fetchByPage',
  async (page, thunkAPI) => {
    try {
      const { data } = await mockAPI.get('/adverts', {
        params: { p: page, l: 12 },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchMarkFilteredThunk = createAsyncThunk(
  'catalog/fetchMarkFiltered',
  async (filter, thunkAPI) => {
    try {
      const { data } = await mockAPI.get('/adverts', {
        params: { make: filter },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchPriceFilteredThunk = createAsyncThunk(
  'catalog/fetchPriceFiltered',
  async (price, thunkAPI) => {
    try {
      const { data } = await mockAPI.get('/adverts', {
        params: { rentalPrice: price },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchMileFilteredThunk = createAsyncThunk(
  'catalog/fetchMileFiltered',
  async ({ min, max }, thunkAPI) => {
    try {
      const { data } = await mockAPI.get('/adverts');
      return data.filter((car) => car.mileage >= min && car.mileage <= max);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchByIdThunk = createAsyncThunk(
  'catalog/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await mockAPI.get('/adverts', {
        params: { id },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
