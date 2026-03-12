"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { BrowserProvider, Eip1193Provider } from "ethers";
import { DEFAULT_NETWORK } from "./constants";

const queryClient = new QueryClient();

interface StellarAccount {
  address: string;
  chainId: number;
}

interface StellarWallet {
  name: string;
  icon?: string;
  provider?: Eip1193Provider;
}

interface StellarContextType {
  account: StellarAccount | null;
  isConnected: boolean;
  connect: (wallet?: StellarWallet) => Promise<void>;
  disconnect: () => void;
  signAndExecuteTransaction: (transaction: any) => Promise<any>;
  getOwnedObjects: (params: { owner: string }) => Promise<any>;
  switchToStellarTestnet: () => Promise<void>;
  provider: BrowserProvider | null;
}

const StellarContext = createContext<StellarContextType | undefined>(undefined);

function detectWallets(): StellarWallet[] {
  const wallets: StellarWallet[] = [];

  if (typeof window !== "undefined") {
    if (window.ethereum?.isMetaMask) {
      wallets.push({
        name: "MetaMask",
        icon: "🦊",
        provider: window.ethereum as Eip1193Provider,
      });
    }
    if (window.ethereum?.isWalletConnect) {
      wallets.push({
        name: "WalletConnect",
        icon: "🔗",
        provider: window.ethereum as Eip1193Provider,
      });
    }
    if (window.ethereum?.isCoinbaseWallet) {
      wallets.push({
        name: "Coinbase Wallet",
        icon: "🔷",
        provider: window.ethereum as Eip1193Provider,
      });
    }
  }

  if (wallets.length === 0) {
    wallets.push(
      { name: "MetaMask", icon: "🦊" },
      { name: "WalletConnect", icon: "🔗" },
      { name: "Coinbase Wallet", icon: "🔷" }
    );
  }

  return wallets;
}

async function addStellarTestnetToWallet(provider: Eip1193Provider): Promise<void> {
  try {
    await provider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: `0x${DEFAULT_NETWORK.chainId.toString(16)}`,
          chainName: DEFAULT_NETWORK.name,
          nativeCurrency: {
            name: DEFAULT_NETWORK.currency,
            symbol: DEFAULT_NETWORK.currency,
            decimals: 18,
          },
          rpcUrls: [DEFAULT_NETWORK.rpcUrl],
          blockExplorerUrls: [DEFAULT_NETWORK.blockExplorer],
        },
      ],
    });
  } catch (error: unknown) {
    if ((error as { code?: number })?.code !== 4902) {
      console.error("Erro ao adicionar Stellar Testnet:", error);
    }
  }
}

async function checkNetwork(provider: BrowserProvider): Promise<boolean> {
  const network = await provider.getNetwork();
  return Number(network.chainId) === DEFAULT_NETWORK.chainId;
}

export function StellarProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<StellarAccount | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem("stellar_address");
    const savedChainId = localStorage.getItem("stellar_chainId");

    if (savedAddress && savedChainId && typeof window !== "undefined" && window.ethereum) {
      const connectSaved = async () => {
        try {
          const browserProvider = new BrowserProvider(window.ethereum as Eip1193Provider);
          const accounts = await browserProvider.listAccounts();

          if (accounts.length > 0 && accounts[0].address.toLowerCase() === savedAddress.toLowerCase()) {
            const network = await browserProvider.getNetwork();
            setProvider(browserProvider);
            setAccount({
              address: accounts[0].address,
              chainId: Number(network.chainId),
            });
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Erro ao reconectar:", error);
          localStorage.removeItem("stellar_address");
          localStorage.removeItem("stellar_chainId");
        }
      };

      connectSaved();
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect();
      } else if (account && accounts[0].toLowerCase() !== account.address.toLowerCase()) {
        setAccount((prev) => (prev ? { ...prev, address: accounts[0] } : null));
        localStorage.setItem("stellar_address", accounts[0]);
      }
    };

    const handleChainChanged = (chainId: string) => {
      try {
        const newChainId = parseInt(chainId, 16);
        setAccount((prev) => (prev ? { ...prev, chainId: newChainId } : null));
        localStorage.setItem("stellar_chainId", newChainId.toString());

        if (window.ethereum) {
          const newProvider = new BrowserProvider(window.ethereum as Eip1193Provider);
          setProvider(newProvider);
        }

        if (newChainId !== DEFAULT_NETWORK.chainId) {
          console.warn(`Rede alterada para ${newChainId}. Use Stellar Testnet (${DEFAULT_NETWORK.chainId}).`);
        }
      } catch (error) {
        console.error("Erro ao processar mudança de rede:", error);
      }
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum?.removeListener("chainChanged", handleChainChanged);
    };
  }, [account]);

  const connect = async (wallet?: StellarWallet) => {
    if (typeof window === "undefined" || !window.ethereum) {
      throw new Error("Nenhuma carteira detectada. Instale o Freighter ou outra carteira compatível.");
    }

    try {
      const ethereumProvider = wallet?.provider || window.ethereum;

      const currentChainId = await ethereumProvider.request({ method: "eth_chainId" });
      const currentChainIdNumber = parseInt(currentChainId, 16);

      if (currentChainIdNumber !== DEFAULT_NETWORK.chainId) {
        try {
          await addStellarTestnetToWallet(ethereumProvider as Eip1193Provider);
        } catch {
          // rede pode já existir
        }

        try {
          await ethereumProvider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${DEFAULT_NETWORK.chainId.toString(16)}` }],
          });
          await new Promise((resolve) => setTimeout(resolve, 1500));

          const newChainId = await ethereumProvider.request({ method: "eth_chainId" });
          const newChainIdNumber = parseInt(newChainId, 16);

          if (newChainIdNumber !== DEFAULT_NETWORK.chainId) {
            throw new Error(`Mude para ${DEFAULT_NETWORK.name} (Chain ID: ${DEFAULT_NETWORK.chainId}).`);
          }
        } catch (switchError: unknown) {
          const err = switchError as { code?: number };
          if (err.code === 4902) {
            await addStellarTestnetToWallet(ethereumProvider as Eip1193Provider);
            throw new Error(`Adicione e mude para ${DEFAULT_NETWORK.name}.`);
          }
          if (err.code === 4001) {
            throw new Error("Mudança de rede rejeitada. Use Stellar Testnet.");
          }
        }
      }

      const browserProvider = new BrowserProvider(ethereumProvider as Eip1193Provider);
      const accounts = await ethereumProvider.request({ method: "eth_requestAccounts" });

      if (!accounts || accounts.length === 0) {
        throw new Error("Nenhuma conta encontrada");
      }

      const address = accounts[0];
      setProvider(browserProvider);
      setAccount({ address, chainId: DEFAULT_NETWORK.chainId });
      setIsConnected(true);

      localStorage.setItem("stellar_address", address);
      localStorage.setItem("stellar_chainId", DEFAULT_NETWORK.chainId.toString());
    } catch (error) {
      console.error("Erro ao conectar:", error);
      throw error;
    }
  };

  const disconnect = () => {
    setAccount(null);
    setIsConnected(false);
    setProvider(null);
    localStorage.removeItem("stellar_address");
    localStorage.removeItem("stellar_chainId");
  };

  const switchToStellarTestnet = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      throw new Error("Carteira não conectada");
    }

    try {
      const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
      const currentChainIdNumber = parseInt(currentChainId, 16);

      if (currentChainIdNumber === DEFAULT_NETWORK.chainId) return;

      try {
        await addStellarTestnetToWallet(window.ethereum as Eip1193Provider);
      } catch {
        // rede pode já existir
      }

      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${DEFAULT_NETWORK.chainId.toString(16)}` }],
        });
        await new Promise((resolve) => setTimeout(resolve, 1500));
        if (window.ethereum) {
          setProvider(new BrowserProvider(window.ethereum as Eip1193Provider));
        }
      } catch (switchError: unknown) {
        const err = switchError as { code?: number };
        if (err.code === 4902) {
          await addStellarTestnetToWallet(window.ethereum as Eip1193Provider);
          throw new Error(`Adicione ${DEFAULT_NETWORK.name}.`);
        }
        if (err.code === 4001) {
          throw new Error("Mudança de rede rejeitada.");
        }
      }
    } catch (error) {
      console.error("Erro ao mudar para Stellar Testnet:", error);
      throw error;
    }
  };

  const signAndExecuteTransaction = async (transaction: any) => {
    if (!provider || !account) {
      throw new Error("Carteira não conectada");
    }

    try {
      const signer = await provider.getSigner();
      const isCorrectNetwork = await checkNetwork(provider);
      if (!isCorrectNetwork) {
        await switchToStellarTestnet();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      const txPayload = {
        to: transaction.target || transaction.to,
        value: transaction.value || 0,
        data: transaction.data || "0x",
      };
      const tx = await signer.sendTransaction(txPayload);
      const receipt = await tx.wait();

      if (!receipt) {
        throw new Error("Transação não confirmada");
      }

      return {
        digest: receipt.hash,
        timestamp: Date.now(),
        status: receipt.status === 1 ? "success" : "failure",
      };
    } catch (error) {
      console.error("Erro na transação:", error);
      throw error;
    }
  };

  const getOwnedObjects = async (params: { owner: string }) => {
    const saved = localStorage.getItem(`stellar_objects_${params.owner}`);
    if (saved) {
      return { data: JSON.parse(saved) };
    }
    return { data: [] };
  };

  return (
    <QueryClientProvider client={queryClient}>
      <StellarContext.Provider
        value={{
          account,
          isConnected,
          connect,
          disconnect,
          signAndExecuteTransaction,
          getOwnedObjects,
          switchToStellarTestnet,
          provider,
        }}
      >
        {children}
      </StellarContext.Provider>
    </QueryClientProvider>
  );
}

export function useStellar() {
  const context = useContext(StellarContext);
  if (!context) {
    throw new Error("useStellar must be used within StellarProvider");
  }
  return context;
}

export function useCurrentAccount() {
  const { account } = useStellar();
  return account;
}

export function useConnectWallet() {
  const { connect } = useStellar();
  return { mutate: connect };
}

export function useDisconnectWallet() {
  const { disconnect } = useStellar();
  return { mutate: disconnect };
}

export function useSignAndExecuteTransaction() {
  const { signAndExecuteTransaction } = useStellar();
  return { mutate: signAndExecuteTransaction };
}

export function useWallets() {
  return detectWallets();
}

export function formatAddress(address: string): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

declare global {
  interface Window {
    ethereum?: Eip1193Provider & {
      isMetaMask?: boolean;
      isWalletConnect?: boolean;
      isCoinbaseWallet?: boolean;
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, handler: (...args: unknown[]) => void) => void;
      removeListener: (event: string, handler: (...args: unknown[]) => void) => void;
    };
  }
}
