import { allBlogs } from 'contentlayer/generated';
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree';
import Categories from '@/src/components/Blog/Categories';
import GithubSlugger, { slug } from 'github-slugger';

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: 'all' }];

  allBlogs.forEach((blog) => {
    if (blog.isPublished) {
      let slugified = slugger.slug(blog.category);
      if (!categories.includes(slugified)) {
        categories.push(slugified);
        paths.push({ slug: slugified });
      }
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll('-', ' ')} Blogs`,
    description: `Learn more about ${
      params.slug === 'all' ? 'web development' : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = ({ params }) => {
  const allCategories = ['all'];
  const blogs = allBlogs.filter((blog) => {
    const slugified = slug(blog.category);
    if (!allCategories.includes(slugified)) {
      allCategories.push(slugified);
    }
    if (params.slug === 'all') {
      return true;
    }
    return slugified === params.slug;
  });

  return (
    <article className="container mt-6 flex flex-col px-2 text-primary dark:text-light sm:px-4 md:px-6 lg:px-10 xl:px-24">
      <div className=" flex flex-col">
        <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="mt-5 grid grid-cols-1  grid-rows-2 gap-16 sm:mt-5 sm:grid-cols-2  md:mt-10 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <article key={index} className="relative col-span-1 row-span-1">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
