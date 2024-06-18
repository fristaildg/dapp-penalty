import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { getLoggedInUser } from '../utils/login-user';

export type LoginState = {
  user: string | null;
};

const initialState: LoginState = {
  user: getLoggedInUser() || null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<LoginState['user']>) {
      state.user = action.payload;
    },
  },
});

export const actions = loginSlice.actions;

const loginState = (state: RootState) => state[loginSlice.name];
const getUser = createSelector(loginState, ({ user }) => user);

export const selectors = {
  getUser,
};
