# 💆‍♀️ CronoCapilar - Hair Care Journey on Stellar

> **Transform your hair care routine into on-chain proof of self-care**

**⭐ Built for [Stellar](https://stellar.org)** — Blockchain network for payments, DeFi & asset tokenization.

🌍 **Read in other languages:**
- 🇧🇷 [Português (PT-BR)](README.pt-BR.md)
- 🇪🇸 [Español (ES-ES)](README.es-ES.md)
- 🇺🇸 [English (EN-US)](README.md) ← You are here

---

## 🎯 Understand the project (in 30 seconds)

| | |
|---|---|
| **What it is** | A Web3 app on **Stellar** that turns your natural hair care routine into verifiable, on-chain proof of self-care. |
| **The problem** | Confusion (Hydration vs Nutrition vs Reconstruction), distrust in recommendations, wasted time and money. |
| **The solution** | Simple diagnosis (H/N/R), a traceable timeline, and a community-validated ecosystem with blockchain transparency. |
| **Why Stellar** | Trust, low cost, and a network built for inclusive finance — your care journey deserves a neutral, open ledger. |

---

### ✅ **Status: Demo - Stellar Testnet**

**🌐 Demo:** Ready for deployment on Stellar Testnet. Connect your wallet (e.g. [Freighter](https://www.freighter.app/)) to register treatments on-chain.

---

## 📱 About the Project

**CronoCapilar** is a Web3 application that helps people with natural hair understand what their hair really needs and organize their routine with clarity and transparency, through a simple tool validated by the community.

### The Problem

In today's world, caring for natural hair is a journey marked by confusion. Contradictory information, commercial influences, and the frustration of spending time and money on products that don't work. It's a daily, frequent, and emotional pain.

- **Confusion**: Hydration, Nutrition, or Reconstruction? The doubt is constant.
- **Distrust**: Are recommendations genuine or sponsored?
- **Frustration**: Solitary attempts that don't bring expected results.
- **Waste**: Time and money invested without clarity.

### The Solution

**CronoCapilar** uses Web3 technology ([Stellar](https://stellar.org)) to create a transparent, community-validated ecosystem where:

- ✅ **Immediate Clarity**: Simple diagnosis to know what your hair needs: Hydration (H), Nutrition (N), or Reconstruction (R)
- ✅ **Traceable Record**: Track your evolution in a history that's yours alone
- ✅ **Total Trust**: Blockchain transparency ensures data cannot be manipulated
- ✅ **Genuine Belonging**: Be part of a community that is the true source of truth

---

## 🎯 Features

### ✅ Implemented

- [x] Stellar wallet connection (simulated)
- [x] Hair care profile on-chain (simulated)
- [x] Treatment registration (Hydration, Nutrition, Reconstruction)
- [x] Hair care timeline
- [x] Daily check-in system
- [x] Event registration (Big Chop, Haircut, Coloration, Treatment)
- [x] Statistics and tracking
- [x] Complete internationalization (PT-BR, EN-US, ES-ES)
- [x] Responsive design
- [x] **Automatic on-chain data loading (simulated)**
- [x] **Dynamic network detection (Stellar Mainnet/Testnet)**
- [x] **Deploy ready**

---

## 🚀 Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Static typing
- **React Hooks** - State management
- **CSS-in-JS** - Inline styling

### Blockchain (Simulated)
- **[Stellar](https://stellar.org)** - Simulated network integration (payments, DeFi, tokenization)
- **Wallet Integration** - Demo wallet connection
- **Transaction Simulation** - Simulated on-chain transactions

### Internationalization
- Custom i18n system
- Automatic language detection
- Support for 3 languages (EN-US, PT-BR, ES-ES)

---

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the project in development**:
   ```bash
   npm run dev
   ```

3. **Access in browser**:
   ```
   http://localhost:3000
   ```

4. **Connect wallet (demo)**:
   - Click "Connect Wallet"
   - Select a wallet (simulated connection)
   - Start tracking your hair care journey!

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server on port 3000

# Production
npm run build        # Create production build
npm run start        # Start production server

# Code quality
npm run lint         # Run ESLint
```

---

## 📁 Project Structure

```
cronocapilar/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── icon.svg           # App icon
├── components/             # React components
│   ├── HairTreatmentCard.tsx # Treatment card
│   ├── TreatmentCheckIn.tsx # Check-in component
│   ├── Timeline.tsx       # Timeline component
│   ├── EventRegister.tsx # Event registration
│   └── ...
├── lib/                   # Utilities and providers
│   ├── constants.ts      # Constants (Package ID, etc)
│   ├── i18n.tsx          # Internationalization system
│   └── stellar-provider.tsx  # Wallet/Stellar provider (simulated)
├── public/                # Static files
└── package.json          # Dependencies and scripts
```

---

## 🔗 Smart Contracts (Simulated)

The project uses simulated smart contracts on Stellar:

- **Package ID**: `0xCRONOCAPILAR_STELLAR_DEMO_ID` (simulated)
- **Network**: Stellar Mainnet/Testnet (simulated)
- **Module**: `profile`
- **Main functions**:
  - `create_profile` - Create on-chain hair care profile
  - `register_treatment` - Register treatment (Hydration, Nutrition, Reconstruction)
  - `register_event` - Register event (Big Chop, Haircut, Coloration, Treatment)

### 📝 Data Structures

- **Profile**: Stores hair care information (hair type, length, texture)
- **Treatment**: Records treatments performed (Hydration, Nutrition, Reconstruction)
- **Event**: Records important events (Big Chop, Haircut, Coloration, Treatment)

> **Note:** This is a demo with simulated blockchain interactions. In a production environment, real Stellar/Soroban contracts would be used.

---

## 🌍 Internationalization

The project supports 3 languages:

- 🇺🇸 **English (US)** - `en-US`
- 🇧🇷 **Português (Brasil)** - `pt-BR`
- 🇪🇸 **Español** - `es-ES`

Language is automatically detected based on browser settings, but can be changed manually through the language selector.

---

## 💡 Why Web3? Because trust needs to be the foundation.

Web3, built on technologies like blockchain, is like a garden of trust. It's an ecosystem that doesn't belong to a single company, but is maintained and cultivated by the community itself.

**Blockchain = The Community's Public Diary**

Each treatment you register becomes a page in a public diary, immutable and inviolable. Your progress is real and verifiable by everyone.

**Smart Contracts = Automatic and Transparent Rules**

They are codes that execute the application's rules without intermediaries. If a condition is met (e.g., you completed your routine), an action happens (e.g., you earn a recognition badge). Trust is automated.

---

## 🎯 Proof of Care

In our ecosystem, each act of care you register on the blockchain is a "Proof of Care". This goes beyond a simple diary. It's the creation of your digital hair passport, a decentralized identity that proves your dedication and progress.

**What you build with Proof of Care:**
- **Decentralized Hair Identity (CID)**: An on-chain profile that belongs to you, not a platform
- **Verifiable Reputation**: Your consistency and knowledge generate a reputation that matters in the community
- **Immutable History**: A transparent record of your evolution, free from edits or manipulations

---

## 🚀 Deploy

### Recommended: Vercel

The application is ready for deployment on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

**Recommendation:** Use **Vercel** for the best Next.js support and simplest deployment.

---

## 📄 License

This project is a demo application for educational and demonstration purposes.

---

## 👩‍💻 Author

**Angela Salles** — [Ang3la.xyz](https://ang3la.xyz)

Owner, Founder & Builder. Developed as a demo for **[Stellar](https://stellar.org)**

---

## 🙏 Acknowledgments

- **[Stellar Development Foundation](https://stellar.org)** - For the network and documentation
- **Hair Care Community** - For inspiration and support

---

## 🌟 Manifesto

We believe that hair care is more than aesthetics — it's identity, health, and self-love. Each cared-for strand is a gesture of self-care, and each shared gesture is a seed of transformation. In the Web3 era, we want to decentralize beauty, making knowledge accessible and digital belonging a new form of empathy.

**Caring for natural hair should be simple.**

---

*Last update: March 2026*
