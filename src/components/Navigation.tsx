import { Flex, Stack, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React, { FC, useMemo } from 'react';
import Contrast from './atoms/Contrast';
import Home from './atoms/Home';
import Icon, { IconProps } from './atoms/Icon';
import Messages from './atoms/Messages';
import Settings from './atoms/Settings';

const Navigation: FC = () => {
    const { toggleColorMode } = useColorMode();
    const color = useColorModeValue('white', 'clay.900');

    return (
        <Stack
            position="sticky"
            top="0"
            width="7.2rem"
            height="100vh"
            color={color}
            flexDir="column"
            py="3rem"
            alignItems="center"
            spacing={4}
        >
            <Link Component={Home} href="/" />
            <Link Component={Messages} href="/messages" />
            <Link Component={Settings} href="/settings" />
            <Flex mt="auto !important" flexDir="column" alignItems="center">
                <Icon Component={Contrast} />
                <Switch size="lg" colorScheme="brand" mt={4} onChange={() => toggleColorMode()} />
            </Flex>
        </Stack>
    );
};

export default Navigation;

type LinkProps = NextLinkProps & IconProps;

const Link = ({ Component, href }: LinkProps) => {
    const router = useRouter();
    const isActive = useMemo(() => router.pathname === href, [href, router.pathname]);

    return (
        <NextLink href={href} passHref>
            <Container isActive={isActive}>
                <Icon Component={Component} size="m" />
            </Container>
        </NextLink>
    );
};

const Container = styled.a<{ isActive: boolean }>`
    width: 50%;
    padding: 1rem;
    display: flex;
    > * {
        margin: auto;
        z-index: 1;
        flex-shrink: 0;
        transition: all 250ms;
    }
    :hover {
        ::after {
            transform: translateX(0);
            opacity: 1;
        }

        > * {
            transform: translateX(-0.25rem);
        }
    }
    position: relative;
    ::after {
        transition: all 250ms 100ms;
        position: absolute;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        content: '';
        transform: translateX(${({ isActive }) => (isActive ? 0 : '-100%')});
        background: ${({ theme, isActive }) => (isActive ? theme.colors.brand[500] : theme.colors.brand[600])};
        opacity: ${({ isActive }) => (isActive ? 1 : 0)};
        z-index: 0;
        left: -50%;
        top: 0;
        bottom: 0;
        right: 0;
    }
`;
