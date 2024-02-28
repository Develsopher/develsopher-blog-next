import { GithubIcon } from '@/src/components/Icon';
import siteMetadata from '@/src/utils/siteMetaData';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="container mt-4 px-2 text-sm text-primary dark:text-light sm:px-4 md:px-6 lg:px-10 xl:px-24">
      <div className="w-full items-center justify-between space-y-4 text-center font-medium md:flex">
        <div>&copy;2024 Develsopher All rights reserved.</div>
        <div>
          <Link
            href="/sitemap.xml"
            className="my-4 text-center underline md:my-0"
          >
            sitemap.xml
          </Link>
        </div>
        <div className="text-center">
          <a
            className="mr-4 inline-block size-6"
            href={siteMetadata.github}
            target="_blank"
          >
            <GithubIcon className="ease fill-primary transition-all duration-200 hover:scale-125 dark:fill-light" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
