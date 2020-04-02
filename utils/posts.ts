import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
  summary: string;
};

const getPostFromFile = (directory: string) => (fileName: string): BlogPost => {
  const fullPath = path.join(directory, fileName);
  const bytes = fs.readFileSync(fullPath, 'utf8');
  const {
    data: { slug, title, date, author, summary },
    content,
  } = matter(bytes);
  return { slug, title, date, author, content, summary };
};

export const getPosts = (): BlogPost[] => {
  // Prepare posts off file system
  const postsDirectory = path.resolve(process.cwd(), '_posts');
  const postFiles = fs.readdirSync(postsDirectory);
  const posts = postFiles.map(getPostFromFile(postsDirectory));

  return posts;

  // // Prepare drafts off file system
  // const draftsDirectory = path.resolve(process.cwd(), '_drafts');
  // const draftFiles = fs.readdirSync(draftsDirectory);
  // const drafts = draftFiles.map(getPostFromFile(draftsDirectory));

  // return [...drafts, ...posts];
};
