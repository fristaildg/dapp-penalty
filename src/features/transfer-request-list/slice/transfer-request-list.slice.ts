import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Status, TransferRequest } from '../types';
import { RootState } from '../../../store';
import { transferRequests } from './mock-data';

const transferRequestAdapter = createEntityAdapter<TransferRequest>({
  sortComparer: (a, b) => (a.date > b.date ? -1 : 1),
});

const initialState = {};

export const transferRequestListSlice = createSlice({
  name: 'transferRequestList',
  initialState: transferRequestAdapter.getInitialState(initialState),
  reducers: {
    setTransferRequests(state) {
      transferRequestAdapter.setAll(state, transferRequests);
    },
    updateRequestStatus(
      state,
      action: PayloadAction<{ id: TransferRequest['id']; status: Status }>,
    ) {
      transferRequestAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          status: action.payload.status,
        },
      });
    },
    addTransferRequest(state, action: PayloadAction<TransferRequest>) {
      transferRequestAdapter.addOne(state, action.payload);
    },
  },
});

const transferRequestListState = (state: RootState) =>
  state[transferRequestListSlice.name];

export const actions = transferRequestListSlice.actions;

const transferRequestsSelectors =
  transferRequestAdapter.getSelectors<RootState>(transferRequestListState);

export const selectors = {
  ...transferRequestsSelectors,
};
