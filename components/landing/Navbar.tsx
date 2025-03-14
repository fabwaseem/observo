import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex w-full fixed h-16 top-0 justify-center items-center py-2 z-50 text-primary-content bg-primary">
      <div className="flex h-full justify-between items-center w-full max-w-7xl px-4">
        <Link href="/">
          <Image
            alt="Observo"
            fetchPriority="high"
            width={144}
            height={41}
            className="w-36"
            src="/images/logo.svg"
          />
        </Link>
        <div className="ml-auto">
          <button className="btn btn-neutral">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
