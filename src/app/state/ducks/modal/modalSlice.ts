import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '../../../shared/interfaces/ICard';

export interface IModalState {
  isShow: boolean;
  card?: ICard;
  columnTitle?: string;
}

export interface ToggleModalPayload {
  isShow: boolean;
}

export interface OpenModalPayload {
  card: ICard;
  columnTitle: string;
}

const initialState: IModalState = {
  isShow: false,
  card: undefined,
  columnTitle: undefined,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<ToggleModalPayload>) => {
      state.isShow = action.payload.isShow;
    },
    openModal: (
      state,
      action: PayloadAction<ToggleModalPayload & OpenModalPayload>,
    ) => {
      state.isShow = action.payload.isShow;
      state.card = action.payload.card;
      state.columnTitle = action.payload.columnTitle;
    },
    closeModal: () => initialState,
  },
});

export const { toggleModal, openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
