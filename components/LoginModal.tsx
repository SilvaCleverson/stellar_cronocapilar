"use client";

import { useState, useEffect } from "react";
import { useCurrentAccount, useWallets, useConnectWallet, useDisconnectWallet } from "@/lib/stellar-provider";
import { useI18n } from "@/lib/i18n";

function formatAddress(address: string): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { language } = useI18n();
  const account = useCurrentAccount();
  const { mutate: connect } = useConnectWallet();
  const { mutate: disconnect } = useDisconnectWallet();
  const wallets = useWallets();
  const [showSuccess, setShowSuccess] = useState(false);

  // Fechar modal quando conectar com sucesso
  useEffect(() => {
    if (account && isOpen) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2000);
    }
  }, [account, isOpen, onClose]);

  if (!isOpen) return null;

  const handleConnect = async (wallet?: any) => {
    await connect(wallet);
  };

  const handleDisconnect = () => {
    disconnect();
    onClose();
  };

  // Função para obter o logo da carteira
  const getWalletLogo = (walletName: string) => {
    const name = walletName.toLowerCase();
    if (name.includes("phantom")) {
      return "/LogoPhantom.jpg";
    } else if (name.includes("slush")) {
      return "/LogoSlush.png";
    }
    return null;
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #fdf4f7 100%)",
          borderRadius: 24,
          padding: 32,
          maxWidth: 480,
          width: "100%",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 107, 157, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com botão fechar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ fontSize: 32 }}>💜</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#667eea", fontWeight: 600 }}>
              <span style={{ fontSize: 24 }}>📜</span>
              <span>Stellar</span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              fontSize: 24,
              cursor: "pointer",
              color: "#666",
              padding: "4px 8px",
              borderRadius: 8,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
              e.currentTarget.style.color = "#667eea";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#666";
            }}
          >
            ×
          </button>
        </div>

        {/* Título */}
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            margin: "0 0 12px 0",
            background: "linear-gradient(135deg, #667eea 0%, #ff6b9d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {language === "pt-BR" 
            ? "Bem-vindo ao CronoCapilar"
            : language === "en-US"
            ? "Welcome to CronoCapilar"
            : "Bienvenido a CronoCapilar"}
        </h2>

        {/* Descrição */}
        <p
          style={{
            fontSize: 15,
            color: "#666",
            margin: "0 0 32px 0",
            lineHeight: 1.6,
          }}
        >
          {language === "pt-BR"
            ? "Conecte sua carteira na Stellar Testnet para começar a registrar seus tratamentos e eventos capilares on-chain e transformar sua rotina em prova de cuidado."
            : language === "en-US"
            ? "Connect your wallet on Stellar Testnet to start registering your hair treatments and events on-chain and turn your routine into proof of care."
            : "Conecta tu carteira en Stellar Testnet para comenzar a registrar tus tratamientos y eventos capilares on-chain y convertir tu rutina en prueba de cuidado."}
        </p>

        {/* Mensagem de sucesso */}
        {showSuccess && account && (
          <div
            style={{
              background: "linear-gradient(135deg, #3a5a40 0%, #667eea 100%)",
              color: "white",
              padding: "16px 20px",
              borderRadius: 16,
              marginBottom: 24,
              textAlign: "center",
              fontSize: 15,
              fontWeight: 600,
            }}
            >
              {language === "pt-BR"
                ? "✅ Carteira conectada com sucesso!"
                : language === "en-US"
                ? "✅ Wallet connected successfully!"
                : "✅ Carteira conectada con éxito!"}
              <div style={{ fontSize: 12, marginTop: 8, opacity: 0.9 }}>
                {formatAddress(account.address)}
              </div>
            </div>
        )}

        {/* Botões de carteira */}
        {account ? (
          <div>
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #ff6b9d 100%)",
                color: "white",
                padding: "16px 20px",
                borderRadius: 16,
                marginBottom: 16,
                textAlign: "center",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              🌍 {language === "pt-BR" ? "Conectado" : language === "en-US" ? "Connected" : "Conectado"}: {formatAddress(account.address)}
            </div>
            <button
              onClick={handleDisconnect}
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: 16,
                border: "2px solid rgba(102, 126, 234, 0.3)",
                background: "white",
                color: "#667eea",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid rgba(102, 126, 234, 0.6)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(102, 126, 234, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid rgba(102, 126, 234, 0.3)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {language === "pt-BR" ? "Desconectar" : language === "en-US" ? "Disconnect" : "Desconectar"}
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Banner de Info sobre Stellar Testnet */}
            <div style={{
              padding: "12px 16px",
              borderRadius: 12,
              background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(255, 107, 157, 0.1) 100%)",
              border: "2px solid rgba(102, 126, 234, 0.2)",
              fontSize: 12,
              textAlign: "center",
              color: "#667eea",
              fontWeight: 600,
              marginBottom: 8
            }}>
              ⭐ {language === "pt-BR" ? "Stellar Testnet - Conecte sua carteira" : language === "en-US" ? "Stellar Testnet - Connect your wallet" : "Stellar Testnet - Conecta tu carteira"}
            </div>
            
            {wallets.length > 0 ? (
              wallets.map((wallet) => {
                return (
                  <button
                    key={wallet.name}
                    onClick={() => handleConnect(wallet).catch((error) => {
                      alert(error.message || (language === "pt-BR" ? "Erro ao conectar carteira" : language === "en-US" ? "Error connecting wallet" : "Error al conectar carteira"));
                    })}
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      borderRadius: 16,
                      border: "2px solid rgba(102, 126, 234, 0.3)",
                      background: "linear-gradient(135deg, #ffffff 0%, #fdf4f7 100%)",
                      color: "#667eea",
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      boxShadow: "0 4px 16px rgba(102, 126, 234, 0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(102, 126, 234, 0.3)";
                      e.currentTarget.style.border = "2px solid rgba(102, 126, 234, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(102, 126, 234, 0.2)";
                      e.currentTarget.style.border = "2px solid rgba(102, 126, 234, 0.3)";
                    }}
                  >
                    <span style={{ fontSize: 24 }}>{wallet.icon || "🌍"}</span>
                    <span>{language === "pt-BR" ? "Conectar" : language === "en-US" ? "Connect" : "Conectar"} {wallet.name}</span>
                  </button>
                );
              })
            ) : (
              <div
                style={{
                  padding: "24px",
                  borderRadius: 16,
                  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(255, 107, 157, 0.1) 100%)",
                  border: "2px solid rgba(102, 126, 234, 0.2)",
                  color: "#667eea",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>🦊</div>
                <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 15 }}>
                  {language === "pt-BR"
                    ? "Nenhuma carteira detectada"
                    : language === "en-US"
                    ? "No wallet detected"
                    : "No se detectó ninguna carteira"}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 16, color: "#666" }}>
                  {language === "pt-BR"
                    ? "Por favor, instale o Freighter ou outra carteira Stellar para conectar à Stellar Testnet."
                    : language === "en-US"
                    ? "Please install Freighter or another Stellar wallet to connect to Stellar Testnet."
                    : "Por favor, instala Freighter u otra cartera Stellar para conectarte a Stellar Testnet."}
                </div>
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #667eea 0%, #ff6b9d 100%)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                  }}
                >
                  <span style={{ fontSize: 20 }}>🦊</span>
                  <span>{language === "pt-BR" ? "Instalar MetaMask" : language === "en-US" ? "Install MetaMask" : "Instalar MetaMask"}</span>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

