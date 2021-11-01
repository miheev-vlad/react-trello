import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../../shared/enums/StatusEnum';
import { ICard } from '../../../shared/interfaces/ICard';
import { IComment } from '../../../shared/interfaces/IComment';
import _ from 'lodash';

export interface ICardsState {
  value: ICard[];
}

export interface AddCardPayload {
  id: string;
  title: string;
  status: StatusEnum;
  author: string;
  comments: IComment[];
}

export interface RemoveCardPayload {
  id: string;
}

const initialState: ICardsState = {
  value: [],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      state.value.unshift({
        title: action.payload.title,
        id: action.payload.id,
        status: action.payload.status,
        author: action.payload.author,
        comments: action.payload.comments,
      });
    },
    removeCard: (state, action: PayloadAction<RemoveCardPayload>) => {
      state.value = state.value.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
