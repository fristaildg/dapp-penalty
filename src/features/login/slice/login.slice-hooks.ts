import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { LoginState, actions, selectors } from './login.slice';
import { loginUser, logoutUser } from '../utils/login-user';

export const useGetUser = () => {
  return useAppSelector(selectors.getUser) as string | null;
};

export const useSetUser = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (payload: LoginState['user']) => {
      dispatch(actions.setUser(payload));
      if (payload) {
        loginUser(payload);
      } else {
        logoutUser();
      }
    },
    [dispatch],
  );
};
