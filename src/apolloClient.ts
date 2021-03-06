/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';
import { useMemo } from 'react';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        uri: 'http://localhost:4000/graphql', // Server URL (must be absolute)
        // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        cache: new InMemoryCache(),
    });
}

export function initializeApollo<T extends NormalizedCacheObject>(initialState?: T) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = merge(initialState, existingCache);

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function addApolloState<T extends { props: { [APOLLO_STATE_PROP_NAME]: NormalizedCacheObject } }>(
    client: ApolloClient<NormalizedCacheObject>,
    pageProps: T
) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }

    return pageProps;
}

export function useApollo<T extends { [APOLLO_STATE_PROP_NAME]: NormalizedCacheObject }>(pageProps: T) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = useMemo(() => initializeApollo(state), [state]);
    return store;
}
