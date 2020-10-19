/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/index.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
