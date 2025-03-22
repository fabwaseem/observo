"use client";

import { useWallet } from "@/contexts/wallet";
import { useAppKit } from "@reown/appkit/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { open } = useAppKit();
  const { authenticated } = useWallet();
  const router = useRouter();
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
        <div className="ml-auto flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn btn-circle btn-ghost"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => {
              if (authenticated) {
                router.push("/dashboard");
              } else {
                open();
              }
            }}
          >
            {authenticated ? "Dashboard" : "Connect Wallet"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
