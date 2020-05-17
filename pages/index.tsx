import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { Config, BlogPost } from 'global';
import Layout from 'components/Layout';
import PostList from 'components/PostList';
import { getPosts } from 'utils/posts';
import { getConfig } from 'utils/config';

type IndexProps = {
  config: Config;
  posts: BlogPost[];
};

const Home: NextPage<IndexProps> = ({ config, posts }) => (
  <Layout title={config.title} description={config.description}>
    <PostList posts={posts} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (): Promise<{ props: IndexProps }> => {
  const config = await getConfig();
  const sortedPosts = getPosts().sort((a, b) => b.date.localeCompare(a.date));
  return {
    props: { config, posts: sortedPosts },
  };
};

export default Home;
