/* eslint-disable @typescript-eslint/camelcase */
import { NextApiRequest, NextApiResponse } from 'next';
import RSS from 'rss';
import { getConfig } from '../../utils/config';
import { getPosts } from '../../utils/posts';

export default async (_: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.setHeader('Content-type', 'text/xml');
  res.setHeader('Cache-Control', 'maxage=0, s-maxage=600');

  const config = await getConfig();

  const feed = new RSS({
    title: config.title,
    feed_url: `${config.url}api/feed.rss`,
    site_url: config.url,
    language: config.language,
  });

  getPosts().map((post) => {
    feed.item({
      title: post.title,
      description: post.summary,
      url: `https://relateando.es/${post.slug}`,
      author: post.author,
      date: post.date,
    });
  });

  res.send(feed.xml());
};
