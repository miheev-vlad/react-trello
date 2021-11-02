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
    getUserName: (state): IUserState => {
      return state;
    },
  },
});

export const { createUser, getUserName } = userSlice.actions;

export default userSlice.reducer;
