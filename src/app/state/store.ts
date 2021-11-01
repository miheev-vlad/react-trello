import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import columnsReducers from './ducks/column/index';
import cardsReducers from './ducks/card/index';
import { IColumnsState } from './ducks/column/columnSlice';
import { ICardsState } from './ducks/card/cardSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export interface IAppState {
  columns: IColumnsState;
  cards: ICardsState;
}

const rootReducer = combineReducers<IAppState>({
  columns: columnsReducers,
  cards: cardsReducers,
});

const persisted = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
