/* eslint-disable @typescript-eslint/camelcase */
const fs = require('fs');
const RSS = require('rss');
const { getConfig } = require('./config');
const { getPosts } = require('./posts');

const generateRss = async () => {
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
      url: `${config.url}${post.slug}`,
      author: post.author,
      date: post.date,
    });
  });

  fs.writeFileSync('public/rss.xml', feed.xml());
  return;
};

module.exports = generateRss;
