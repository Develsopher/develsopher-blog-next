import { GithubIcon } from '@/src/components/Icon';
import siteMetadata from '@/src/utils/siteMetaData';
import SocialIcon from '@/src/components/social-icons';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <GithubIcon className="ease fill-primary transition-all duration-200 hover:scale-125 dark:fill-light" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-primary dark:text-light">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
