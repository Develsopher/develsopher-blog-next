'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoonIcon, SunIcon } from '../Icon';
import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <header className="container flex h-20 items-center justify-between px-2 text-xl sm:px-4 md:px-6 lg:px-10 xl:px-24">
      {/* LOGO */}
      <div className="flex justify-center">
        <Link
          href="/"
          className="flex items-center justify-center rounded-md bg-black px-1.5 py-1 text-sm font-semibold"
        >
          <span className="flex h-8 w-12 items-center justify-center rounded bg-white text-black">
            Dev
          </span>
          <span className="ml-1 text-white">elsopher</span>
        </Link>
      </div>
      {/* Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative z-50  flex h-8 w-10 flex-col justify-between"
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-10 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-4xl text-white"
          >
            {navLinks.map((link) => (
              <motion.div variants={listItemVariants} key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      {/* Menus */}
      <div className="hidden items-center gap-x-4 text-gray md:flex">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? 'text-primary' : ''}
            >
              {link.name}
            </Link>
          );
        })}
        <button className="ease ml-2 flex size-6 items-center justify-center rounded-full bg-primary p-1 text-light">
          <MoonIcon className={'fill-primary'} />
        </button>
      </div>
    </header>
  );
};

export default Header;
