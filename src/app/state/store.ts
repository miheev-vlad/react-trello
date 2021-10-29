import { configureStore } from '@reduxjs/toolkit';
import columnsReducers from './ducks/column/index';

export const store = configureStore({
  reducer: {
    columns: columnsReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
