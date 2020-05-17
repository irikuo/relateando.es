export type Config = {
  url: string;
  title: string;
  description: string;
  language: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
  summary: string;
};
