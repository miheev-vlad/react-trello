import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../../shared/enums/StatusEnum';
import { IColumn } from '../../../shared/interfaces/IColumn';

export interface IColumnsState {
  value: IColumn[];
}

interface EditColumnPayload {
  id: number;
  title: string;
}

const initialState: IColumnsState = {
  value: [
    {
      title: 'TODO',
      id: 1,
      status: StatusEnum.ColumnOne,
    },
    {
      title: 'In Progress',
      id: 2,
      status: StatusEnum.ColumnTwo,
    },
    {
      title: 'Testing',
      id: 3,
      status: StatusEnum.ColumnThree,
    },
    {
      title: 'Done',
      id: 4,
      status: StatusEnum.ColumnFour,
    },
  ],
};

export const columnSlice = createSlice({
  name: 'columns',
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
