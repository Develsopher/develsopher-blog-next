import React from 'react';
import Tag from '../Elements/Tag';
import Link from 'next/link';
import Image from 'next/image';
import { slug } from 'github-slugger';

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 z-10 h-full rounded-xl bg-gradient-to-b
            from-transparent from-0% to-primary/90
            "
      />
      <Image
        src={blog.image.filePath.replace('../public', '')}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="ease size-full rounded-xl object-cover object-center transition-all duration-300 group-hover:scale-105"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="xs:p-6 absolute bottom-0 z-20 w-full p-4 sm:p-10">
        <Tag
          link={`/categories/${slug(blog.category)}`}
          name={blog.category}
          className="!border px-6  py-1 text-xs sm:py-2 sm:text-sm "
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="xs:text-base mt-2 text-sm font-bold capitalize text-light sm:mt-4 sm:text-xl md:text-2xl">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat
                transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
