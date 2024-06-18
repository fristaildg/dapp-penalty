import { Container, Grid, Flex } from '@radix-ui/themes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './store';
import { selectors } from './features/login/slice/login.slice';
import { TransferRequestList } from './features/transfer-request-list/transfer-request-list';
import { TransferRequestForm } from './features/transfer-request-form/transfer-request-form';
import styles from './app.module.css';
import { AppHeader } from './features/app-header/app-header';

function App() {
  const navigate = useNavigate();
  const user = useAppSelector(selectors.getUser);

  useEffect(() => {
    if (!user) navigate('/login');
  });

  return (
    <Flex gap="8" direction="column">
      <AppHeader />
      <Container>
        <Grid columns="2" gap="8" align="start" className={styles['grid']}>
          <TransferRequestForm />
          <TransferRequestList />
        </Grid>
      </Container>
    </Flex>
  );
}

export default App;
