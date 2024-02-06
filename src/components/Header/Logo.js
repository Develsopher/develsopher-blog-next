import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-primary">
      <div className="w-12 md:w-16 mr-2 md:mr-4">
        <Image
          src={logo}
          alt="main logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold text-lg">Develsopher</span>
    </Link>
  );
};

export default Logo;
