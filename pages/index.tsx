import React from 'react';
import { NextPage } from 'next';
import { getPosts, BlogPost } from '../utils/posts';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

type IndexProps = {
  posts: BlogPost[];
};

const Home: NextPage<IndexProps> = ({ posts }) => (
  <Layout
    title="relateando"
    description="Relateando es mi pequeño rincón de Internet donde como aficionado a la escritura demuestro al mundo lo poco que sé del tema."
  >
    <PostList posts={posts} />
  </Layout>
);

export const getStaticProps = (): { props: IndexProps } => {
  const sortedPosts = getPosts().sort((a, b) => b.date.localeCompare(a.date));
  return { props: { posts: sortedPosts } };
};

export default Home;
