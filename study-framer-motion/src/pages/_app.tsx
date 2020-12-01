import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta name="description" content="Project to study!!!" />
      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
