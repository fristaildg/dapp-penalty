import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './features/login/slice/login.slice';
import { useDispatch, useSelector } from 'react-redux';
import { transferRequestListSlice } from './features/transfer-request-list/slice/transfer-request-list.slice';

export const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
    [transferRequestListSlice.name]: transferRequestListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector = useSelector<RootState>;
