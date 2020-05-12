import React from 'react';
import { NextPage } from 'next';
import format from 'date-fns/format';
import { es } from 'date-fns/locale';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import Layout from 'components/Layout';

import styles from './Post.module.scss';

export type PostProps = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
};

const Post: NextPage<PostProps> = ({ title, date, author, content }) => {
  return (
    <Layout title={title} description={title}>
      <article className={styles.post}>
        <h1 className={styles.title}>{title}</h1>
        <ReactMarkdown className={styles.content} source={content} renderers={{ code: CodeBlock }} />

        <footer className={`${styles.footer} ${styles.footerText}`}>
          {'Publicado en '}
          <time className={styles.footerText} dateTime={date}>
            {format(new Date(date), 'd MMM yyyy', { locale: es })}
          </time>
          {` por ${author}`}
        </footer>
      </article>
    </Layout>
  );
};

export default Post;
