import { Button } from '@radix-ui/themes';
import styles from './login-form.module.css';
import { FormEvent, useRef, useState } from 'react';
import { TextField } from '../../../../components/text-field/text-field';
import { useSetUser } from '../../slice/login.slice-hooks';

export const LoginForm = () => {
  const setUser = useSetUser();
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [userNameValidationMessage, setUserNameValidationMessage] = useState<
    string | undefined
  >();
  const [passwordValidationMessage, setPasswordValidationMessage] = useState<
    string | undefined
  >();

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !userNameRef.current?.checkValidity() ||
      !passwordRef.current?.checkValidity()
    ) {
      setUserNameValidationMessage(userNameRef.current?.validationMessage);
      setPasswordValidationMessage(passwordRef.current?.validationMessage);
      return;
    }

    if (userNameRef.current?.value) {
      setUser(userNameRef.current.value);
    }
  };

  return (
    <form className={styles['login-form']} onSubmit={handleOnSubmit} noValidate>
      <TextField
        placeholder="Username"
        required
        ref={userNameRef}
        hasError={!!userNameValidationMessage}
        errorMessage={userNameValidationMessage}
      />
      <TextField
        type="password"
        placeholder="Password"
        required
        ref={passwordRef}
        hasError={!!passwordValidationMessage}
        errorMessage={passwordValidationMessage}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
