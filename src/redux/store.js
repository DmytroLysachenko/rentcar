import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/slice';

export const store = configureStore({
  reducer: { catalog: catalogReducer },
  devTools: import.meta.env.MODE !== 'production',
});
