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

export const fetchFilteredThunk = createAsyncThunk(
  'catalog/fetchFiltered',
  async ({ brand, price, min, max }, thunkAPI) => {
    try {
      const { data } = await mockAPI.get('/adverts');
      let result = [...data];
      if (brand !== 'Enter the text') {
        result = [...result.filter((car) => car.make === brand)];
      }
      if (price !== 'To $') {
        result = [...result.filter((car) => car.rentalPrice <= price)];
      }
      if (min !== '') {
        result = [...result.filter((car) => car.mileage >= min)];
      }
      if (max !== '') {
        result = [...result.filter((car) => car.mileage <= max)];
      }
      return result;
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
