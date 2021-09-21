import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";


const client = new ApolloClient({
    uri: 'https://aryakampusmerdeka.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'z4ybQHy13r41GXVA1eIIXKmt6ynfhAgcL6ROXFHezZVpwbRu7ZHiDvfpKrs07oPQ'
    }
});

export default client