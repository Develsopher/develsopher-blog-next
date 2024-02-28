import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 items-center gap-4 text-primary dark:text-light">
      <Link
        href={blog.url}
        className="col-span-12  h-full overflow-hidden rounded-xl lg:col-span-4"
      >
        <Image
          src={blog.image.filePath.replace('../public', '')}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="ease aspect-square size-full object-cover object-center transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="col-span-12  w-full lg:col-span-8">
        <span className="inline-block w-full text-xs font-semibold uppercase  text-accent dark:text-accentDark sm:text-sm">
          {blog.category}
        </span>
        <Link href={blog.url} className="my-1 inline-block">
          <h2 className="text-base font-semibold capitalize sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom bg-no-repeat
                transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full text-xs font-semibold capitalize  text-primary/50  dark:text-light/50 sm:text-base">
          {format(new Date(blog.publishedAt), 'yyyy-MM-dd')}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
