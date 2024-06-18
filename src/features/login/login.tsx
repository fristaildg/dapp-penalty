import { Heading, Flex, Card } from '@radix-ui/themes';
import styles from './login.module.css';
import { LoginForm } from './components/login-form/login-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { selectors } from './slice/login.slice';

export const Login = () => {
  const user = useAppSelector(selectors.getUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/');
  });

  return (
    <Flex justify="center" align="center" height="-webkit-fill-available">
      <Card className={styles['login-box']}>
        <Heading>Login</Heading>
        <LoginForm />
      </Card>
    </Flex>
  );
};
