import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumn } from '../../../shared/interfaces/IColumn';

interface IColumnsState {
  value: IColumn[];
}

interface EditColumnPayload {
  id: number;
  title: string;
}

const initialState: IColumnsState = {
  value: [],
};

export const columnSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    editColumn: (state, action: PayloadAction<EditColumnPayload>) => {
      state.value.forEach((column) => {
        if (column.id === action.payload.id) {
          column.title = action.payload.title;
        }
      });
    },
  },
});

export const { editColumn } = columnSlice.actions;

export default columnSlice.reducer;
