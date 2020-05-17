const fs = require('fs');
const { getConfig } = require('./config');
const { getPosts } = require('./posts');

const generateSitemap = async () => {
  const config = await getConfig();
  const posts = getPosts();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map((post) => {
        return `
          <url>
            <loc>${config.url}${post.slug}</loc>
          </url>`;
      })
      .join('')}
      <url>
        <loc>${config.url}</loc>
      </url>
    </urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
};

module.exports = generateSitemap;
