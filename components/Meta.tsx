import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
};

const Meta: React.FunctionComponent<Props> = ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Meta;
