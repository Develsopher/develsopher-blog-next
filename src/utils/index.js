import { compareDesc, parseISO } from 'date-fns';

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};
