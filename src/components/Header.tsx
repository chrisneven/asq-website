import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const tempText = `What's up Guest?`;

const Header: FC = () => {
    return (
        <>
            <Flex
                color="white"
                rounded="xl"
                flexDir="column"
                justifyContent="center"
                bg="clay.900"
                p={10}
                position="relative"
            >
                <Text>{tempText}</Text>
                <Heading zIndex="1" as="h2">
                    Check your dashboard
                </Heading>
            </Flex>
        </>
    );
};

export default Header;
