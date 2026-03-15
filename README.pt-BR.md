<p align="center">
  <img src="https://img.shields.io/badge/Stellar-Feito%20na%20Stellar-blue?style=for-the-badge&logo=stellar&logoColor=white" alt="Built on Stellar" />
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<h1 align="center">💆‍♀️ CronoCapilar</h1>

<p align="center">
  <strong>Transforma sua rotina de cuidados capilares em prova on-chain de autocuidado.</strong>
</p>

<p align="center">
  <a href="README.pt-BR.md">🇧🇷 Português</a> · <a href="README.es-ES.md">🇪🇸 Español</a> · <a href="README.md">🇺🇸 English</a>
</p>

---

## A ideia em uma frase

> CronoCapilar é uma aplicação Web3 na **[Stellar](https://stellar.org)** que substitui a confusão nos cuidados com cabelo natural por um sistema simples, transparente e validado pela comunidade — sustentado por blockchain.

---

## Por que isso existe?

Milhões de pessoas com cabelo natural vivem o mesmo ciclo frustrante:

```
😕 "Meu cabelo precisa de Hidratação, Nutrição ou Reconstrução?"
😤  Compra produtos por indicação de influencer → não funciona
💸  Perde tempo e dinheiro → desiste
🔁  Repete
```

A causa raiz não é falta de produtos — é **falta de confiança e clareza**.

**CronoCapilar** resolve isso colocando sua jornada capilar em um livro-razão transparente e à prova de manipulação. Nenhuma empresa é dona dos seus dados. Nenhum algoritmo decide o que você vê. A comunidade é a fonte da verdade.

---

## Por que Stellar?

| | |
|:---|:---|
| **Inclusiva por design** | Stellar foi construída para inclusão financeira — o mesmo propósito move o CronoCapilar: cuidado com a beleza deve ser acessível a todos. |
| **Transações baratas** | Registrar tratamentos on-chain não pode custar mais que a máscara capilar. Stellar mantém as taxas desprezíveis. |
| **Rápida e confiável** | Finalidade em 3-5 segundos significa que seu check-in fica registrado antes de você enxaguar o condicionador. |
| **Alcance global** | Multi-moeda, multi-idioma — assim como nossos usuários. |

---

## Como funciona

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────────┐
│  Conectar    │────▶│  Criar seu   │────▶│  Registrar tratamento│
│  Carteira    │     │  Perfil      │     │  diário (H/N/R)      │
└─────────────┘     └──────────────┘     └─────────────────────┘
                                                   │
                                                   ▼
                                          ┌─────────────────┐
                                          │  Construir sua   │
                                          │  Prova de        │
                                          │  Cuidado on-chain│
                                          └─────────────────┘
```

1. **Conecte** sua carteira Stellar (ex.: [Freighter](https://www.freighter.app/))
2. **Crie** seu perfil capilar (tipo, comprimento, textura)
3. **Faça check-in** diário com seu tratamento: **H**idratação, **N**utrição ou **R**econstrução
4. **Acompanhe** sua jornada em uma timeline imutável
5. **Registre eventos** como Big Chop, cortes, coloração

Cada ação se torna uma **Prova de Cuidado** — seu passaporte capilar verificável e on-chain.

---

## Funcionalidades

| Funcionalidade | Descrição |
|:---------------|:----------|
| **Conexão de Carteira** | Conecte via carteiras compatíveis com Stellar |
| **Perfil On-chain** | Tipo de cabelo, comprimento e textura armazenados on-chain |
| **Check-in de Tratamento** | Registro diário H/N/R com acompanhamento de sequência |
| **Timeline Visual** | Visão cronológica de toda sua jornada capilar |
| **Registro de Eventos** | Big Chop, cortes, coloração — tudo registrado |
| **Estatísticas** | Contadores de tratamento, sequências, consistência |
| **3 Idiomas** | i18n completo: Português, English, Español |
| **Responsivo** | Funciona em celular, tablet e desktop |
| **Detecção de Rede** | Alternância automática Stellar Mainnet/Testnet |

---

## Stack Tecnológica

| Camada | Tecnologia |
|:-------|:-----------|
| **Framework** | [Next.js 14](https://nextjs.org) (App Router) |
| **Linguagem** | [TypeScript 5](https://typescriptlang.org) |
| **UI** | React 18 + CSS-in-JS |
| **Blockchain** | [Stellar](https://stellar.org) (Testnet) |
| **Estado** | [@tanstack/react-query](https://tanstack.com/query) |
| **Carteira** | [Freighter](https://www.freighter.app/) recomendada |
| **i18n** | Sistema próprio baseado em contexto (PT/EN/ES) |
| **Deploy** | [Vercel](https://vercel.com) pronto |

---

## Início Rápido

```bash
# 1. Clone o repositório
git clone https://github.com/SilvaCleverson/stellar_cronocapilar.git
cd stellar_cronocapilar

# 2. Instale as dependências
npm install

# 3. Rode localmente
npm run dev

# 4. Abra no navegador
# → http://localhost:3000
```

> **Dica:** Instale a extensão [Freighter](https://www.freighter.app/) no navegador para conectar sua carteira Stellar.

---

## Estrutura do Projeto

```
├── app/
│   ├── layout.tsx              # Layout raiz (providers, banner, watermark)
│   ├── page.tsx                # Página principal (perfil, tratamentos, timeline)
│   ├── globals.css             # Estilos globais
│   └── icon.svg                # Favicon do app
│
├── components/
│   ├── LoginModal.tsx          # Modal de conexão de carteira
│   ├── HairTreatmentCard.tsx   # Card de tratamento
│   ├── TreatmentCheckIn.tsx    # Componente de check-in diário
│   ├── Timeline.tsx            # Timeline da jornada capilar
│   ├── EventRegister.tsx       # Registro de eventos (Big Chop, etc.)
│   ├── StreakCard.tsx          # Tracker de sequência / consistência
│   ├── Tabs.tsx               # Navegação por abas
│   ├── LanguageSelector.tsx   # Seletor de idioma
│   ├── DemoBanner.tsx         # Banner indicador de testnet
│   ├── StellarWatermark.tsx   # Branding Stellar
│   └── BigChopCard.tsx        # Tracker da data do Big Chop
│
├── lib/
│   ├── stellar-provider.tsx    # Contexto e hooks da carteira Stellar
│   ├── constants.ts            # Config de rede, endereços de contrato
│   └── i18n.tsx                # Traduções (PT-BR, EN-US, ES-ES)
│
├── package.json
├── tsconfig.json
├── next.config.mjs
└── vercel.json
```

---

## Arquitetura On-chain

CronoCapilar é projetado para contratos inteligentes **[Soroban](https://soroban.stellar.org)** na Stellar:

```
┌────────────────────────────────────────────────────┐
│                 Contratos Soroban                    │
├────────────────┬───────────────┬───────────────────┤
│   Profile      │  Treatment    │     Event          │
│   ─────────    │  ──────────   │     ─────          │
│   hair_type    │  type (H/N/R) │     event_type     │
│   length       │  timestamp    │     timestamp      │
│   texture      │  tx_hash      │     description    │
│   owner        │  owner        │     owner          │
└────────────────┴───────────────┴───────────────────┘
```

**Funções principais:**
- `create_profile` — Criar perfil capilar on-chain
- `register_treatment` — Registrar tratamento H/N/R
- `register_event` — Registrar Big Chop, corte, coloração, etc.

> **Status atual:** Demo com transações simuladas. A versão de produção usará contratos Soroban reais na Stellar Testnet/Mainnet.

---

## Prova de Cuidado

Cada tratamento que você registra on-chain se torna uma **Prova de Cuidado** — um registro verificável da sua dedicação.

O que você constrói:

- **Identidade Capilar Descentralizada** — Um perfil on-chain que pertence a *você*, não a uma plataforma
- **Reputação Verificável** — Sua consistência gera uma reputação que vale algo na comunidade
- **Histórico Imutável** — Um registro transparente da sua evolução, livre de manipulação

> *Sua jornada capilar é a sua história. Blockchain garante que ninguém pode reescrevê-la.*

---

## Internacionalização

Suporte completo para 3 idiomas, detectados automaticamente pelo navegador:

| Idioma | Código | Bandeira |
|:-------|:-------|:---------|
| Português (Brasil) | `pt-BR` | 🇧🇷 |
| English | `en-US` | 🇺🇸 |
| Español | `es-ES` | 🇪🇸 |

---

## Deploy

Deploy em um clique na Vercel:

```bash
npm run build    # Build de produção
npm run start    # Iniciar servidor de produção
```

Ou conecte este repositório GitHub à [Vercel](https://vercel.com) para deploys automáticos a cada push.

---

## Roadmap

- [ ] Deploy real de smart contracts Soroban
- [ ] Integração profunda com carteira Freighter
- [ ] Sistema de validação comunitária (votar em tratamentos)
- [ ] NFT badges para marcos de cuidado
- [ ] Diagnóstico capilar por IA a partir de fotos
- [ ] Motor de recomendação de produtos (community-driven)

---

## Manifesto

> *Acreditamos que o cuidado com o cabelo é mais do que estética — é identidade, saúde e amor próprio.*
>
> *Cada fio cuidado é um gesto de autocuidado. Cada gesto compartilhado é uma semente de transformação.*
>
> *Na era da Web3, queremos descentralizar a beleza — tornando o conhecimento acessível e o pertencimento digital uma nova forma de empatia.*
>
> **Cuidar do cabelo natural deveria ser simples.**

---

## Autor

**Angela Salles** — [Ang3la.xyz](https://ang3la.xyz)

Owner, Founder & Builder

---

## Agradecimentos

- [Stellar Development Foundation](https://stellar.org) — Pela rede, visão e documentação
- Comunidade de cuidados capilares — Pela inspiração, resiliência e amor

---

<p align="center">
  <strong>Feito com 💜 para <a href="https://stellar.org">Stellar</a></strong>
</p>

<p align="center">
  <sub>Março 2026</sub>
</p>
