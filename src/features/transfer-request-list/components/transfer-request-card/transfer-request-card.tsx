import { Card, Strong, Text, IconButton, Flex, Box } from '@radix-ui/themes';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import styles from './transfer-request-card.module.css';
import { Status, TransferRequest } from '../../types';
import { StatusBadge } from '../status-badge/status-badge';
import { ActionsMenu } from '../actions-menu/actions-menu';

export const TransferRequestCard = ({
  id,
  requester,
  amount,
  from,
  to,
  status,
  date,
}: TransferRequest) => {
  return (
    <Card>
      <Flex className={styles['container']}>
        <Text size="1" color="gray">
          {new Date(date).toDateString()}
        </Text>
        <Flex className={styles['info']}>
          <Text>
            <Strong>{requester}</Strong> requested:
          </Text>
          <Text>
            <Strong>{amount}</Strong> tokens from <Strong>{from}</Strong> to{' '}
            <Strong>{to}</Strong>
          </Text>
          <StatusBadge status={status} />
          <ActionsMenu transferRequestId={id}>
            <Flex
              align="center"
              className={
                status !== Status.PENDING
                  ? styles['actions-menu-trigger__disabled']
                  : undefined
              }
            >
              <IconButton variant="ghost">
                <DotsVerticalIcon />
              </IconButton>
            </Flex>
          </ActionsMenu>
        </Flex>
      </Flex>
    </Card>
  );
};
