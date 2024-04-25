import Mail from './mail.svg';
import Github from './github.svg';
import Twitter from './twitter.svg';
import Rss from './rss.svg';

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  twitter: Twitter,
  rss: Rss,
};

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-gray-500 hover:text-gray-600 text-sm transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`text-gray-700 dark:text-gray-200 h- fill-current hover:text-blue-500 dark:hover:text-blue-400${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
