import { ApolloClient, InMemoryCache } from '@apollo/client';
const user = typeof window !== 'undefined' ? localStorage.getItem('user') : '';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3001/graphql',
  headers: {
    user: user ? JSON.parse(user)?.id : '',
  },
});

export default client;
