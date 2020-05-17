import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from 'global';
import CodeBlock from 'components/CodeBlock';

import styles from './PostList.module.scss';

type PostListItemProps = {
  post: BlogPost;
};

const PostListItem: React.FunctionComponent<PostListItemProps> = ({ post }) => (
  <>
    <Link href={post.slug}>
      <article className={styles.post}>
        <h2 className={styles.title}>
          <Link href={post.slug}>
            <a className={styles.title}>{post.title}</a>
          </Link>
        </h2>
        <Link href={post.slug}>
          <a className={styles.link}>
            <ReactMarkdown className={styles.content} source={post.summary} renderers={{ code: CodeBlock }} />
          </a>
        </Link>
        <Link href={post.slug}>
          <a className={styles.more}>Continuar leyendo...</a>
        </Link>
      </article>
    </Link>
  </>
);

type PostListProps = {
  posts: BlogPost[];
};

const PostList: React.FunctionComponent<PostListProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostListItem post={post} key={post.slug} />
    ))}
  </>
);

export default PostList;
