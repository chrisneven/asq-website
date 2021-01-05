import { Box, Button, Flex, Input, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';

const Login: FC = () => {
    const router = useRouter();

    return (
        <Flex height="100vh" bg="blue.900">
            <Box bg="gray.100" rounded="xl" shadow="xl" margin="auto" width="30rem" padding={7}>
                <Stack>
                    <Input bg="white" size="lg" type="email" placeholder="E-mail" />
                    <Input bg="white" size="lg" type="password" placeholder="Wachtwoord" />
                </Stack>

                <Button color="white" mt={5} bg="brand.500" onClick={() => router.push('/')}>
                    Inloggen
                </Button>
            </Box>
        </Flex>
    );
};

export default Login;
