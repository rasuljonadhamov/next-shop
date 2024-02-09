import React from "react";
import Image from "next/image";
import Link from "next/link";

const MyHeader = () => {
  return (
    <header
      className="fixed top-0 w-full h-20 bg-cover bg-no-repeat bg-center md:h-32"
      style={{ backgroundImage: `url(/public/header-bg.svg)` }}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-8">
        <div className="flex items-center">
          {/* <Image
            src="/public/header-bg.svg"
            alt="Logo"
            quality={100}
            width={100} // Adjust as needed
            height={50} // Adjust as needed
            objectFit="contain"
          /> */}
          <Link href={"/"} className="text-black font-bold text-xl ml-4">
            Next Store
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-black font-medium hover:text-gray-200">
            Home
          </Link>

          {/* <Link
            href="/products"
            className="text-black font-medium hover:text-gray-200"
          >
            Products
          </Link> */}
          <Link
            href="https://github.com/rasuljonadhamov/next-shop"
            className="text-black font-medium hover:text-gray-200"
          >
            Github
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MyHeader;
