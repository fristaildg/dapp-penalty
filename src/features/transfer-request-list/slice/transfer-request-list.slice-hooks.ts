import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { actions, selectors } from './transfer-request-list.slice';
import { Status, TransferRequest } from '../types';

export const useGetTransferRequests = () => {
  return useAppSelector(selectors.selectAll) as TransferRequest[];
};

export const useSetTransferRequests = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(actions.setTransferRequests());
  }, [dispatch]);
};

export const useUpdateTransferRequest = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (payload: { id: TransferRequest['id']; status: Status }) => {
      dispatch(actions.updateRequestStatus(payload));
    },
    [dispatch],
  );
};

export const useAddTransferRequest = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (payload: TransferRequest) => {
      dispatch(actions.addTransferRequest(payload));
    },
    [dispatch],
  );
};
