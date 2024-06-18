import { Badge, BadgeProps } from '@radix-ui/themes';
import styles from './status-badge.module.css';
import { Status } from '../../types';

const statusColorMap: Record<string, BadgeProps["color"]> = {
  pending: 'cyan',
  accepted: 'green',
  rejected: 'tomato',
};

type StatusBadgeProps = {
  status: Status;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <Badge color={statusColorMap[status]} className={styles['status-badge']}>
      {status}
    </Badge>
  );
};
