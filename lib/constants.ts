// Package ID simulado na rede Stellar (demo)
export const PACKAGE_ID = "0xCRONOCAPILAR_STELLAR_DEMO_ID";

// Timestamp de build (atualizar manualmente quando necessário)
// Formato: YYYY-MM-DD HH:MM:SS UTC
export const BUILD_TIMESTAMP = new Date().toISOString().replace('T', ' ').substring(0, 19) + " UTC";

// Módulo e funções do contrato
export const MODULE_NAME = "profile";
export const FUNCTION_CREATE_PROFILE = "create_profile";
export const FUNCTION_REGISTER_TREATMENT = "register_treatment";
export const FUNCTION_REGISTER_EVENT = "register_event";

// Configuração da rede Stellar (https://stellar.org)
export const STELLAR_NETWORKS = {
  mainnet: {
    name: "Stellar Mainnet",
    chainId: 534352,
    rpcUrl: "https://horizon.stellar.org",
    blockExplorer: "https://stellar.expert",
    currency: "XLM",
  },
  testnet: {
    name: "Stellar Testnet",
    chainId: 534353,
    rpcUrl: "https://horizon-testnet.stellar.org",
    blockExplorer: "https://stellar.expert",
    currency: "XLM",
  },
  sepolia: {
    name: "Stellar Testnet",
    chainId: 534351,
    rpcUrl: "https://horizon-testnet.stellar.org",
    blockExplorer: "https://stellar.expert",
    currency: "XLM",
  },
};

// Rede padrão (Testnet para desenvolvimento)
export const DEFAULT_NETWORK = STELLAR_NETWORKS.testnet;
