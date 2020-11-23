import { Box, Flex, Input, Stack } from '@chakra-ui/core';
import Chatting from '../components/Chatting';
import Container from '../components/Container';
import DarkModeSwitch from '../components/DarkModeSwitch';

const Index = () => (
    <Container height="100vh">
        <DarkModeSwitch />
        <Flex height="100%">
            <Box bg="teal.50" flex={1}>
                <Chatting />
            </Box>
            <Stack spacing={4} bg="blue" flex={1} alignItems="center" justifyContent="center">
                <Box maxWidth="1000px">
                    <Input placeholder="E-mail" size="lg" />
                </Box>
                <Box maxWidth="1000px">
                    <Input type="password" placeholder="Password" size="lg" />
                </Box>
            </Stack>
        </Flex>
    </Container>
);

export default Index;
