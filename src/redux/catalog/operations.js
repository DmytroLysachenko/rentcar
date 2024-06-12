import { createAsyncThunk } from '@reduxjs/toolkit';
import { limitForFirstPage, mockAPI } from '../../helpers/mockAPI';

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
        params: { p: page, l: limitForFirstPage },
      });
      return data;
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
