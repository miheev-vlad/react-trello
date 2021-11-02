import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  userName: string;
}

export interface CreateUserPayload {
  userName: string;
}

const initialState: IUserState = {
  userName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<CreateUserPayload>) => {
      state.userName = action.payload.userName;
    },
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
