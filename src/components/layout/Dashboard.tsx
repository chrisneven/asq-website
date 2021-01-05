import { Flex, Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import formatToNiceDate from '../../utils/formatToNiceDate';
import Navigation from '../Navigation';
import Calendar from '../atoms/Calender';
import Icon from '../atoms/Icon';

const Dashboard: FC = ({ children }) => {
    const childrenBg = useColorModeValue('gray.50', 'clay.900');
    const mainBg = useColorModeValue('clay.900', 'brand.900');

    return (
        <Flex width="100%" bg={mainBg} style={{ transition: 'background 250ms' }}>
            <Navigation />
            <Box flex="1" roundedLeft="2rem" bg={childrenBg} p={8} style={{ transition: 'background 250ms' }}>
                <Flex alignItems="center" justifyContent="space-between" mb={6}>
                    <Heading>Dashboard</Heading>
                    <Stack isInline alignItems="center">
                        <Icon Component={Calendar} />
                        <Text fontSize="sm">{formatToNiceDate(new Date(), 'nice')}</Text>
                    </Stack>
                </Flex>
                {children}
            </Box>
        </Flex>
    );
};

export default Dashboard;
