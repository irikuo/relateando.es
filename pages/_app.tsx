import React from 'react';
import { AppProps } from 'next/app';

import 'typeface-pt-serif';
import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default MyApp;
