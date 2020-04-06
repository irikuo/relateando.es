/* eslint-disable @typescript-eslint/camelcase */
import { NextApiRequest, NextApiResponse } from 'next';
import RSS from 'rss';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-type', 'application/rss+xml');
  res.setHeader('Cache-Control', 'maxage=0, s-maxage=600');

  res.send(
    new RSS({
      title: 'Relateando',
      feed_url: 'https://relateando.es/api/feed.rss',
      site_url: 'https://relateando.es/',
    }).xml(),
  );
};
