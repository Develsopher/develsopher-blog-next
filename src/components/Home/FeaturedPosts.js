import { sortBlogs } from '@/src/utils';
import React from 'react';
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="container mt-4 flex w-full flex-col justify-center px-4 sm:mt-6 sm:px-4 md:mt-8 md:px-6 lg:px-10 xl:px-24">
      <h2 className="inline-block w-full text-2xl font-bold capitalize text-primary dark:text-light md:text-4xl">
        Recent Projects
      </h2>
      <small className="bg:text-primary mt-2 text-left text-light">
        최근 진행중인 프로젝트 상황을 기록합니다.
      </small>
      <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-6 sm:mt-8">
        <article className="relative col-span-2 row-span-2 sxl:col-span-1">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="relative col-span-2 row-span-1 sm:col-span-1">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="relative col-span-2 row-span-1 sm:col-span-1">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
