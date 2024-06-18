import { Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { useGetUser, useSetUser } from '../login/slice/login.slice-hooks';

export const AppHeader = () => {
  const user = useGetUser();
  const setUser = useSetUser();

  const handleOnClick = () => {
    setUser(null);
  };

  return (
    <Card>
      <Flex justify="between" align="center">
        <Heading>⚽️ Dapp Penalty</Heading>
        {user && <Text>Hello {user}!</Text>}
        <Button variant="soft" onClick={handleOnClick}>
          Logout
        </Button>
      </Flex>
    </Card>
  );
};
