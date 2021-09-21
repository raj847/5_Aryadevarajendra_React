import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://kampusmerdekaarya.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'ZBH6Ejb3jjdPYJCUuMPnxDxN8r2tDIvQF7zU6LmgqnUumHPoi2dF2ii1GsOelP5P'
    }
  });
    
export default client