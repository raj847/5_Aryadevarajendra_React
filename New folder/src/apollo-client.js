import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '',
  headers: {
    'x-hasura-admin-secret':
      '',
  },
  cache: new InMemoryCache(),
});

export default client;
