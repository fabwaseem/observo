"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { AppKit } from "@/contexts/appkit";
import { WalletProvider } from "@/contexts/wallet";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <AppKit>
          <WalletProvider>{children}</WalletProvider>
        </AppKit>
      </ThemeProvider>
      <Toaster position="top-right" />
      <Tooltip
        id="tooltip"
        style={{
          backgroundColor: "var(--fallback-n, oklch(var(--n)))",
          color: "var(--fallback-nc, oklch(var(--nc)))",
        }}
      />
    </QueryClientProvider>
  );
}
