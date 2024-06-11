import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockAPI } from '../../helpers/mockAPI';

export const fetchPageThunk = createAsyncThunk(
  'catalog/fetchAll',
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
