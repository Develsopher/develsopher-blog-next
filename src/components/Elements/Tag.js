import { cn } from '@/src/utils/style';
import Link from 'next/link';
import React from 'react';

const Tag = ({ link = '#', name, ...props }) => {
  return (
    <Link
      href={link}
      className={cn(
        'ease inline-block rounded-full border-2 border-solid  border-light bg-primary px-6 py-2 text-sm font-semibold capitalize text-light transition-all duration-200 hover:scale-105 sm:px-10 sm:py-3 sm:text-base',
        props.className,
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
