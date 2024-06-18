import { Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { TextField } from '../../components/text-field/text-field';
import styles from './transfer-request-form.module.css';
import { useAddTransferRequest } from '../transfer-request-list/slice/transfer-request-list.slice-hooks';
import { FormEvent, useRef, useState } from 'react';
import { useGetUser } from '../login/slice/login.slice-hooks';
import { Status } from '../transfer-request-list/types';

export const TransferRequestForm = () => {
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const addTransferRequest = useAddTransferRequest();
  const user = useGetUser();
  const [fromValidationMessage, setFromValidationMessage] = useState<
    string | undefined
  >();
  const [toValidationMessage, setToValidationMessage] = useState<
    string | undefined
  >();
  const [amountValidationMessage, setAmountValidationMessage] = useState<
    string | undefined
  >();

  const clearValidation = () => {
    setAmountValidationMessage(undefined);
    setFromValidationMessage(undefined);
    setToValidationMessage(undefined);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !fromRef.current?.checkValidity() ||
      !toRef.current?.checkValidity() ||
      !amountRef.current?.checkValidity()
    ) {
      setAmountValidationMessage(amountRef.current?.validationMessage);
      setFromValidationMessage(fromRef.current?.validationMessage);
      setToValidationMessage(toRef.current?.validationMessage);
      return;
    }

    if (user && fromRef.current && toRef.current && amountRef.current) {
      addTransferRequest({
        requester: user,
        from: fromRef.current.value,
        to: toRef.current.value,
        id: Math.random(),
        amount: Number(amountRef.current.value),
        status: Status.PENDING,
        date: new Date(Date.now()).toISOString(),
      });
      clearValidation();
    }
  };

  return (
    <Flex gap="2" direction="column" className={styles["container"]}>
      <Heading size="5">Request token transfer</Heading>
      <Card>
        <form noValidate className={styles['form']} onSubmit={handleOnSubmit}>
          <Text as="label" htmlFor="from">
            <TextField
              id="from"
              placeholder="From"
              required
              ref={fromRef}
              hasError={!!fromValidationMessage}
              errorMessage={fromValidationMessage}
            />
          </Text>
          <Text as="label" htmlFor="to">
            <TextField
              id="to"
              placeholder="To"
              required
              ref={toRef}
              hasError={!!toValidationMessage}
              errorMessage={toValidationMessage}
            />
          </Text>
          <Text as="label" htmlFor="amount">
            <TextField
              id="amout"
              placeholder="Amount"
              type="number"
              max={10}
              min={1}
              required
              ref={amountRef}
              hasError={!!amountValidationMessage}
              errorMessage={amountValidationMessage}
            />
          </Text>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Flex>
  );
};
