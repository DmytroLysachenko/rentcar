import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItemsThunk = createAsyncThunk('catalog/fetchAll');
