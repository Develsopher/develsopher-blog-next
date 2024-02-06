import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export * from 'class-variance-authority';

export const cn = (...args) => twMerge(cx(args));
