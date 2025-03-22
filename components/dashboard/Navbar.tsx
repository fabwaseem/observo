"use client";
import { useWallet } from "@/contexts/wallet";
import { removeCookie } from "@/lib/cookie";
import { formatAddress } from "@/lib/utils";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useDisconnect } from "@reown/appkit/react";
import { ChevronDown, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { setAuthenticated, user } = useWallet();
  const router = useRouter();
  const { disconnect } = useDisconnect();
  const handleLogout = () => {
    disconnect();
    removeCookie("accessToken");
    setAuthenticated(false);
    router.push("/");
  };
  return (
    <header className="bg-base-100 relative z-50">
      <div className="max-w-5xl py-3 max-lg:px-4 mx-auto flex gap-4">
        <div className="mr-auto">
          <Popover className="relative z-10 group">
            <PopoverButton className={"btn"}>
              <Image
                src="/images/user.png"
                alt="Waseem"
                className="w-6 h-6 rounded-full shrink-0"
                referrerPolicy="no-referrer"
                width={24}
                height={24}
              />
              {formatAddress(user?.address || "")}
              <ChevronDown className="size-5 group-data-[open]:rotate-180 transition-transform duration-200 " />
            </PopoverButton>
            <PopoverPanel
              className="absolute left-0 z-10 mt-3 w-screen max-w-[16rem] transform origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
              portal={false}
              transition
            >
              <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-base-content/5 bg-base-100 p-1">
                <div className="space-y-0.5 text-sm">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 hover:bg-error/20 hover:text-error duration-200 py-1.5 px-4 w-full rounded-lg font-medium"
                  >
                    <LogOut className="size-5" />
                    Logout
                  </button>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        <div className="">
          <Link
            className="btn btn-ghost"
            href={`${process.env.NEXT_PUBLIC_APP_URL}/b/observo`}
            target="_blank"
          >
            💡 Feedback?
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
