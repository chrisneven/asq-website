import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { useApollo } from '../apolloClient';
import theme from '../constants/theme';

function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps);
    return (
        <ApolloProvider client={apolloClient}>
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    );
}

export default MyApp;
