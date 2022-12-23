import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from '../styles/theme';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PlayIT</title>
      </Head>
      
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>

        <ToastContainer position="top-center" theme="colored" />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
