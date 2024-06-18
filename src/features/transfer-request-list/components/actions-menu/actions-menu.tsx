import { DropdownMenu } from '@radix-ui/themes';
import { ReactNode } from 'react';
import { CheckIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { Status, TransferRequest } from '../../types';
import { useUpdateTransferRequest } from '../../slice/transfer-request-list.slice-hooks';

type ActionsMenuProps = {
  children: ReactNode;
  transferRequestId: TransferRequest['id'];
};

export const ActionsMenu = ({
  children,
  transferRequestId,
}: ActionsMenuProps) => {
  const updateTransferRequest = useUpdateTransferRequest();

  const handleOnAcceptclick = () => {
    updateTransferRequest({ id: transferRequestId, status: Status.ACCEPTED });
  };

  const handleOnRejectClick = () => {
    updateTransferRequest({ id: transferRequestId, status: Status.REJECTED });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={handleOnAcceptclick}>
          <CheckIcon />
          Accept
        </DropdownMenu.Item>
        <DropdownMenu.Item color="tomato" onClick={handleOnRejectClick}>
          <CrossCircledIcon />
          Reject
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
