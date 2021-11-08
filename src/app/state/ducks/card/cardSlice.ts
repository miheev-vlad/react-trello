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
  description: string;
}

export interface AddCardCommentPayload {
  id: string;
  comment: IComment;
}

export interface GetCardCommentPayload {
  id: string;
}

export interface RemoveCardCommentPayload {
  cardId: string;
  commentId: string;
}

export interface EditCardCommentPayload {
  cardId: string;
  commentId: string;
  text: string;
}

export interface EditCardTitlePayload {
  id: string;
  title: string;
}

export interface EditCardDescriptionPayload {
  id: string;
  description: string;
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
        description: action.payload.description,
      });
    },
    removeCard: (state, action: PayloadAction<RemoveCardPayload>) => {
      state.value = state.value.filter((card) => card.id !== action.payload.id);
    },
    editCardTitle: (state, action: PayloadAction<EditCardTitlePayload>) => {
      const card = _.find(state.value, { id: action.payload.id });
      if (card) {
        card.title = action.payload.title;
      }
    },
    editCardDescription: (
      state,
      action: PayloadAction<EditCardDescriptionPayload>,
    ) => {
      const card = _.find(state.value, { id: action.payload.id });
      if (card) {
        card.description = action.payload.description;
      }
    },
    addCardComment: (state, action: PayloadAction<AddCardCommentPayload>) => {
      _.find(state.value, { id: action.payload.id })!.comments.unshift(
        action.payload.comment,
      );
    },
    getCardComments: (state, action: PayloadAction<GetCardCommentPayload>) => {
      _.find(state.value, { id: action.payload.id })!.comments;
    },
    removeCardComment: (
      state,
      action: PayloadAction<RemoveCardCommentPayload>,
    ) => {
      _.find(state.value, { id: action.payload.cardId })!.comments = _.find(
        state.value,
        { id: action.payload.cardId },
      )!.comments.filter((comment) => comment.id !== action.payload.commentId);
    },
    editCardComments: (
      state,
      action: PayloadAction<EditCardCommentPayload>,
    ) => {
      _.find(state.value, { id: action.payload.cardId })!.comments.map(
        (comment) => {
          if (comment.id === action.payload.commentId) {
            comment.text = action.payload.text;
          }
          return comment;
        },
      );
    },
  },
});

export const {
  addCard,
  removeCard,
  editCardTitle,
  editCardDescription,
  addCardComment,
  getCardComments,
  removeCardComment,
  editCardComments,
} = cardSlice.actions;

export default cardSlice.reducer;
