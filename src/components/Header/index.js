"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full p-4 flex items-center justify-between">
      <Logo />
      <nav className="text-gray-400 flex gap-x-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "text-primary" : ""}
            >
              {link.name}
            </Link>
          );
        })}
        <button className="w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 bg-primary text-light">
          <MoonIcon className="fill-dark" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
