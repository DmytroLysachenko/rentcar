import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: { catalog: catalogReducer, filter: filterReducer },
  devTools: import.meta.env.MODE !== 'production',
});
