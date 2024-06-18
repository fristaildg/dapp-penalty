export enum Status {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export type TransferRequest = {
  id: number | string;
  requester: string;
  from: string;
  to: string;
  amount: number;
  status: Status;
  date: string;
};
