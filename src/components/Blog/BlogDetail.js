import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { slug } from 'github-slugger';

const BlogDetail = ({ blog, slug: blogSlug }) => {
  return (
    <div className="flex flex-wrap items-center justify-around rounded-lg bg-accent p-1 text-lg font-medium text-light dark:bg-accentDark dark:text-primary sm:text-xl">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), 'yyyy-MM-dd')}
      </time>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.category)}`} className="m-3">
        #{blog.category}
      </Link>
    </div>
  );
};

export default BlogDetail;
