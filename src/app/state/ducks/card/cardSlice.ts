import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../../shared/enums/StatusEnum';
import { ICard } from '../../../shared/interfaces/ICard';
import { IComment } from '../../../shared/interfaces/IComment';

export interface ICardsState {
  value: ICard[];
}

interface AddCardPayload {
  id: number;
  title: string;
  status: StatusEnum;
  author: string;
  comments: IComment[];
}

const initialState: ICardsState = {
  value: [
    {
      title: 'card 1',
      id: 1,
      status: StatusEnum.ColumnOne,
      author: 'author',
      comments: [],
    },
    {
      title: 'card 2',
      id: 2,
      status: StatusEnum.ColumnTwo,
      author: 'author',
      comments: [],
    },
    {
      title: 'card 3',
      id: 3,
      status: StatusEnum.ColumnThree,
      author: 'author',
      comments: [],
    },
    {
      title: 'card 4',
      id: 4,
      status: StatusEnum.ColumnFour,
      author: 'author',
      comments: [],
    },
  ],
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
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
