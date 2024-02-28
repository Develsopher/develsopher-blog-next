import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import React from 'react';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="container mt-4 flex w-full flex-col items-center justify-center px-4 sm:mt-6 sm:px-4 md:mt-8 md:px-6 lg:px-10 xl:px-24">
      <div className="flex w-full justify-between">
        <h2 className="inline-block w-fit text-2xl font-bold capitalize text-primary dark:text-light md:text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block text-base font-medium text-accent underline-offset-2 hover:underline dark:text-accentDark md:text-lg"
        >
          view all
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 grid-rows-2 gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="relative col-span-1 row-span-1">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
