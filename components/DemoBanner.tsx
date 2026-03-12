"use client";
import { useI18n } from "@/lib/i18n";

export default function DemoBanner() {
  const { language } = useI18n();

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      background: "linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(255, 107, 157, 0.95) 100%)",
      color: "white",
      padding: "8px 16px",
      textAlign: "center",
      fontSize: 12,
      fontWeight: 600,
      zIndex: 9999,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }}>
      <span style={{ fontSize: 16 }}>📜</span>
      <span>
        {language === "pt-BR" 
          ? "Stellar Testnet | Conecte sua carteira para registrar tratamentos on-chain"
          : language === "en-US"
          ? "Stellar Testnet | Connect your wallet to register treatments on-chain"
          : "Stellar Testnet | Conecta tu carteira para registrar tratamientos on-chain"}
      </span>
    </div>
  );
}

