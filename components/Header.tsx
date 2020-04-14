import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

type Props = {
  title: string;
};

const Header: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <Link href="/">
          <a className={styles.title}>{title}</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
