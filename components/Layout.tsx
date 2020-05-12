import React from 'react';
import Meta from 'components/Meta';
import Header from 'components/Header';

import styles from './Layout.module.scss';

type Props = {
  title: string;
  description: string;
};

const Layout: React.FunctionComponent<Props> = ({ title, description, children }) => {
  return (
    <section className={styles.layout}>
      <Meta title={title} description={description} />
      <Header title={title} />
      <main className={styles.content}>
        {children}
        <footer className={styles.footer}></footer>
      </main>
    </section>
  );
};

export default Layout;
