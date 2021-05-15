import '../styles/globals.css';

import { MobileNavigationProvider } from 'context/MobileNavigationContext';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <MobileNavigationProvider>
          <Component {...pageProps} />
        </MobileNavigationProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
