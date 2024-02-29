import BlogDetail from '@/src/components/Blog/BlogDetail';
import RenderMdx from '@/src/components/Blog/RenderMdx';
import Tag from '@/src/components/Elements/Tag';
import siteMetadata from '@/src/utils/siteMetaData';
import { allBlogs } from 'contentlayer/generated';
import { slug } from 'github-slugger';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === 'string'
        ? [siteMetadata.siteUrl + blog.image.filePath.replace('../public', '')]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes('http') ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: 'ko_KR',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    notFound();
  }

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === 'string'
        ? [siteMetadata.siteUrl + blog.image.filePath.replace('../public', '')]
        : blog.image;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        '@type': 'Person',
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.github,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container relative px-2 sm:px-4 md:px-6 lg:px-10 xl:px-24">
        <div className="relative mb-8 h-[70vh] w-full bg-primary text-center">
          <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
            <Tag
              name={blog.category}
              link={`/categories/${slug(blog.category)}`}
              className="px-6 py-2 text-sm"
            />
            <h1 className="relative mt-6 inline-block w-5/6 text-2xl font-semibold capitalize !leading-normal text-light md:text-3xl lg:text-5xl">
              {blog.title}
            </h1>
          </div>
          <div className="absolute inset-0 h-full bg-primary/60 dark:bg-primary/40" />
          <Image
            src={blog.image.filePath.replace('../public', '')}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square size-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* contents 요약정보 */}
        <BlogDetail blog={blog} slug={params.slug} />

        <div className="mt-8 grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16">
          <div className="col-span-12  lg:order-last lg:col-span-4" id="toc">
            <details
              className="sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto rounded-lg border-[1px] border-solid border-primary p-4 text-primary dark:border-light dark:text-light"
              open
            >
              <summary className="cursor-pointer text-xl font-semibold capitalize">
                Table Of Content
              </summary>
              <ul className="mt-4 font-rb text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="flex items-center
                                       justify-start border-solid border-primary/40 data-[level=two]:border-t data-[level=four]:pl-10
                                       data-[level=three]:pl-1
                                       data-[level=two]:pt-2
                                       data-[level=four]:text-sm data-[level=three]:text-base data-[level=two]:text-lg dark:border-accentDark/40
                                       "
                      >
                        {heading.level === 'three' ? (
                          <span className="mr-2 flex size-1 rounded-full bg-primary">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>
      </article>
    </>
  );
}
