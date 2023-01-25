import { ApolloClient, InMemoryCache } from '@apollo/client';
const user =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user') ?? '')
    : '';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3001/graphql',
  headers: {
    user: user?.id ?? '',
  },
});

export default client;
