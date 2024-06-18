import { Flex, Heading } from '@radix-ui/themes';
import { TransferRequestCard } from './components/transfer-request-card/transfer-request-card';
import {
  useGetTransferRequests,
  useSetTransferRequests,
} from './slice/transfer-request-list.slice-hooks';
import { useEffect } from 'react';
import styles from './transfer-request-list.module.css';

export const TransferRequestList = () => {
  const setTransferRequests = useSetTransferRequests();
  const transferRequests = useGetTransferRequests();

  useEffect(() => {
    setTransferRequests();
  }, []);

  return (
    <Flex direction="column" gap="2">
      <Heading as="h2" size="5">
        Token Transfer Requests
      </Heading>
      <Flex className={styles['list']}>
        {transferRequests.map((transferRequest) => (
          <TransferRequestCard key={transferRequest.id} {...transferRequest} />
        ))}
      </Flex>
    </Flex>
  );
};
