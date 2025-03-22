"use client";

import { authenticate } from "@/lib/api";
import { getCookie } from "@/lib/cookie";
import { isTokenExpired } from "@/lib/jwt";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import {
  BrowserProvider,
  Eip1193Provider,
  ethers,
  JsonRpcProvider,
  JsonRpcSigner,
  Provider,
} from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

type WalletContextType = {
  provider: Provider | null;
  signer: JsonRpcSigner | null;
  authenticated: boolean;
  loading: boolean;
  user: {
    address: string;
    balance: number;
  } | null;
  setAuthenticated: (authenticated: boolean) => void;
};

const SIGN_MESSAGE = "Sign this message to authenticate with the observo";

export const WalletContext = createContext<WalletContextType>({
  provider: null,
  signer: null,
  user: null,
  authenticated: false,
  loading: false,
  setAuthenticated: () => {},
});

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [user, setUser] = useState<WalletContextType["user"] | null>(null);
  const { address } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const initialize = async () => {
      if (walletProvider && address) {
        const provider = new BrowserProvider(walletProvider as Eip1193Provider);
        const signer = await provider.getSigner();
        setProvider(provider);
        setSigner(signer);
        const balance = await provider.getBalance(address);
        setUser({ address, balance: Number(ethers.formatEther(balance)) });
      }
    };

    initialize();
  }, [walletProvider, address]);

  useEffect(() => {
    const handleAuth = async () => {
      if (!signer) return;
      const accessToken = getCookie("accessToken");
      const isExpired = isTokenExpired(accessToken || "");
      if (!isExpired) {
        setAuthenticated(true);
        return;
      }
      const signature = await signer.signMessage(SIGN_MESSAGE);
      if (!signature) return;
      const res = await authenticate({
        signature,
        signedMessage: SIGN_MESSAGE,
      });
      if (res.error) return;
      setAuthenticated(true);
    };
    handleAuth();
  }, [signer]);

  return (
    <WalletContext.Provider
      value={{ provider, signer, user, authenticated, loading, setAuthenticated }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
