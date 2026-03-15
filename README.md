<p align="center">
  <img src="https://img.shields.io/badge/Stellar-Built%20on%20Stellar-blue?style=for-the-badge&logo=stellar&logoColor=white" alt="Built on Stellar" />
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<h1 align="center">💆‍♀️ CronoCapilar</h1>

<p align="center">
  <strong>Turn your natural hair care routine into on-chain proof of self-care.</strong>
</p>

<p align="center">
  <a href="README.pt-BR.md">🇧🇷 Português</a> · <a href="README.es-ES.md">🇪🇸 Español</a> · <a href="README.md">🇺🇸 English</a>
</p>

---

## The idea in one sentence

> CronoCapilar is a Web3 application on **[Stellar](https://stellar.org)** that replaces confusion around natural hair care with a simple, transparent, community-validated system — powered by blockchain.

---

## Why does this exist?

Millions of people with natural hair face the same frustrating cycle:

```
😕 "Does my hair need Hydration, Nutrition, or Reconstruction?"
😤  Buys products based on influencer tips → doesn't work
💸  Wastes time and money → gives up
🔁  Repeat
```

The root cause isn't lack of products — it's **lack of trust and clarity**.

**CronoCapilar** fixes this by putting your hair care journey on a transparent, tamper-proof ledger. No company owns your data. No algorithm decides what you see. The community is the source of truth.

---

## Why Stellar?

| | |
|:---|:---|
| **Inclusive by design** | Stellar was built for financial inclusion — the same ethos drives CronoCapilar: beauty care should be accessible to everyone. |
| **Low-cost transactions** | Registering treatments on-chain shouldn't cost more than the hair mask itself. Stellar keeps fees negligible. |
| **Fast & reliable** | 3-5 second finality means your check-in is recorded before you rinse the conditioner. |
| **Global reach** | Multi-currency, multi-language — just like our users. |

---

## How it works

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│  Connect     │────▶│  Create your │────▶│  Register daily  │
│  Wallet      │     │  Hair Profile│     │  treatments (H/N/R)│
└─────────────┘     └──────────────┘     └─────────────────┘
                                                  │
                                                  ▼
                                         ┌─────────────────┐
                                         │  Build your      │
                                         │  Proof of Care   │
                                         │  on-chain        │
                                         └─────────────────┘
```

1. **Connect** your Stellar wallet (e.g. [Freighter](https://www.freighter.app/))
2. **Create** your hair profile (type, length, texture)
3. **Check in** daily with your treatment: **H**ydration, **N**utrition, or **R**econstruction
4. **Track** your journey on an immutable timeline
5. **Register events** like Big Chop, haircuts, coloring

Every action becomes a **Proof of Care** — your verifiable, on-chain hair passport.

---

## Features

| Feature | Description |
|:--------|:------------|
| **Wallet Connection** | Connect via Stellar-compatible wallets |
| **On-chain Profile** | Hair type, length, and texture stored on-chain |
| **Treatment Check-in** | Daily H/N/R registration with streak tracking |
| **Visual Timeline** | Chronological view of your entire hair journey |
| **Event Registry** | Big Chop, haircuts, coloring — all recorded |
| **Statistics** | Treatment counts, streaks, consistency tracking |
| **3 Languages** | Full i18n: English, Português, Español |
| **Responsive** | Works on mobile, tablet, and desktop |
| **Network Detection** | Automatic Stellar Mainnet/Testnet switching |

---

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Framework** | [Next.js 14](https://nextjs.org) (App Router) |
| **Language** | [TypeScript 5](https://typescriptlang.org) |
| **UI** | React 18 + CSS-in-JS |
| **Blockchain** | [Stellar](https://stellar.org) (Testnet) |
| **State** | [@tanstack/react-query](https://tanstack.com/query) |
| **Wallet** | [Freighter](https://www.freighter.app/) recommended |
| **i18n** | Custom context-based system (PT/EN/ES) |
| **Deploy** | [Vercel](https://vercel.com) ready |

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/SilvaCleverson/stellar_cronocapilar.git
cd stellar_cronocapilar

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

> **Tip:** Install [Freighter](https://www.freighter.app/) browser extension to connect your Stellar wallet.

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout (providers, banner, watermark)
│   ├── page.tsx                # Main page (profile, treatments, timeline)
│   ├── globals.css             # Global styles
│   └── icon.svg                # App favicon
│
├── components/
│   ├── LoginModal.tsx          # Wallet connection modal
│   ├── HairTreatmentCard.tsx   # Treatment display card
│   ├── TreatmentCheckIn.tsx    # Daily check-in component
│   ├── Timeline.tsx            # Hair journey timeline
│   ├── EventRegister.tsx       # Event registration (Big Chop, etc.)
│   ├── StreakCard.tsx          # Streak / consistency tracker
│   ├── Tabs.tsx               # Tab navigation
│   ├── LanguageSelector.tsx   # i18n language switcher
│   ├── DemoBanner.tsx         # Testnet indicator banner
│   ├── StellarWatermark.tsx   # Stellar branding
│   └── BigChopCard.tsx        # Big Chop date tracker
│
├── lib/
│   ├── stellar-provider.tsx    # Stellar wallet context & hooks
│   ├── constants.ts            # Network config, contract addresses
│   └── i18n.tsx                # Translations (PT-BR, EN-US, ES-ES)
│
├── package.json
├── tsconfig.json
├── next.config.mjs
└── vercel.json
```

---

## On-chain Architecture

CronoCapilar is designed for **[Soroban](https://soroban.stellar.org)** smart contracts on Stellar:

```
┌────────────────────────────────────────────────────┐
│                   Soroban Contracts                  │
├────────────────┬───────────────┬───────────────────┤
│   Profile      │  Treatment    │     Event          │
│   ─────────    │  ──────────   │     ─────          │
│   hair_type    │  type (H/N/R) │     event_type     │
│   length       │  timestamp    │     timestamp      │
│   texture      │  tx_hash      │     description    │
│   owner        │  owner        │     owner          │
└────────────────┴───────────────┴───────────────────┘
```

**Main functions:**
- `create_profile` — Create on-chain hair care profile
- `register_treatment` — Record H/N/R treatment
- `register_event` — Record Big Chop, haircut, coloring, etc.

> **Current status:** Demo with simulated transactions. Production version will use real Soroban contracts on Stellar Testnet/Mainnet.

---

## Proof of Care

Every treatment you register on-chain becomes a **Proof of Care** — a verifiable record of your dedication.

What you build:

- **Decentralized Hair Identity** — An on-chain profile that belongs to *you*, not a platform
- **Verifiable Reputation** — Your consistency generates a reputation that matters
- **Immutable History** — A transparent record of your evolution, free from manipulation

> *Your hair journey is your story. Blockchain makes sure no one can rewrite it.*

---

## Internationalization

Full support for 3 languages, automatically detected from browser settings:

| Language | Code | Flag |
|:---------|:-----|:-----|
| English | `en-US` | 🇺🇸 |
| Português (Brasil) | `pt-BR` | 🇧🇷 |
| Español | `es-ES` | 🇪🇸 |

---

## Deploy

One-click deploy to Vercel:

```bash
npm run build    # Production build
npm run start    # Start production server
```

Or connect this GitHub repo to [Vercel](https://vercel.com) for automatic deployments on every push.

---

## Roadmap

- [ ] Real Soroban smart contract deployment
- [ ] Freighter wallet deep integration
- [ ] Community validation system (upvote treatments)
- [ ] NFT badges for care milestones
- [ ] AI-powered hair diagnosis from photos
- [ ] Product recommendation engine (community-driven)

---

## Manifesto

> *We believe hair care is more than aesthetics — it's identity, health, and self-love.*
>
> *Each strand cared for is a gesture of self-care. Each gesture shared is a seed of transformation.*
>
> *In the Web3 era, we want to decentralize beauty — making knowledge accessible and digital belonging a new form of empathy.*
>
> **Caring for natural hair should be simple.**

---

## Author

**Angela Salles** — [Ang3la.xyz](https://ang3la.xyz)

Owner, Founder & Builder

---

## Acknowledgments

- [Stellar Development Foundation](https://stellar.org) — For the network, vision, and documentation
- The natural hair care community — For the inspiration, resilience, and love

---

<p align="center">
  <strong>Built with 💜 for <a href="https://stellar.org">Stellar</a></strong>
</p>

<p align="center">
  <sub>March 2026</sub>
</p>
