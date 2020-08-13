import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <MadeByIan></MadeByIan>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
