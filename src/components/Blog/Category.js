import { cn } from '@/src/utils/style';
import Link from 'next/link';

const Category = ({ link = '#', name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cn(
        'ease m-2 inline-block rounded-full border-2 border-none border-primary px-10 py-2 capitalize transition-all duration-200 hover:scale-105',
        props.className,
        active
          ? 'bg-accent/60 text-light dark:bg-accentDark'
          : 'bg-light text-primary dark:bg-primary dark:text-light',
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
