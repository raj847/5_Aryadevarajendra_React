import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";


const client = new ApolloClient({
    uri: 'https://delicate-basilisk-69.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': '6KYf70o2HerWzWU45fAAbTQTFX12D0OgpLGHSmxHtsJfivLRK8T4EVdaJmK9A2IM'
    }
});

export default client