# 💆‍♀️ CronoCapilar - Jornada de Cuidados Capilares na Stellar

> **Transforma sua rotina capilar em prova on-chain de autocuidado**

**⭐ Criado para [Stellar](https://stellar.org)** — Rede blockchain para pagamentos, DeFi e tokenização de ativos.

🌍 **Leia em outros idiomas:**
- 🇧🇷 [Português (PT-BR)](README.pt-BR.md) ← Você está aqui
- 🇪🇸 [Español (ES-ES)](README.es-ES.md)
- 🇺🇸 [English (EN-US)](README.md)

### ✅ **Status: Demo - Rede Stellar Simulada**

**🌐 Aplicação Demo:** Pronta para deploy

⚠️ **Nota:** Esta é uma aplicação demo simulando integração com a rede Stellar. As transações são simuladas para fins de demonstração.

---

## 📱 Sobre o Projeto

**CronoCapilar** é uma aplicação Web3 que ajuda pessoas com cabelo natural a entender o que o fio realmente precisa e a organizar sua rotina com clareza e transparência, através de uma ferramenta simples validada pela comunidade.

### O Problema

No mundo de hoje, cuidar do cabelo natural é uma jornada marcada pela confusão. Informações contraditórias, influências comerciais e a frustração de gastar tempo e dinheiro com produtos que não funcionam. É uma dor diária, frequente e emocional.

- **Confusão**: Hidratação, Nutrição ou Reconstrução? A dúvida é constante.
- **Desconfiança**: As recomendações são genuínas ou patrocinadas?
- **Frustração**: Tentativas solitárias que não trazem os resultados esperados.
- **Desperdício**: Tempo e dinheiro investidos sem clareza.

### A Solução

**CronoCapilar** usa tecnologia Web3 ([Stellar](https://stellar.org)) para criar um ecossistema transparente e validado pela comunidade onde:

- ✅ **Clareza Imediata**: Um diagnóstico simples para saber o que seu cabelo precisa: Hidratação (H), Nutrição (N) ou Reconstrução (R)
- ✅ **Registro Rastreável**: Acompanhe sua evolução em um histórico que é só seu
- ✅ **Confiança Total**: A transparência da blockchain garante que os dados não são manipulados
- ✅ **Pertencimento Genuíno**: Faça parte de uma comunidade que é a verdadeira fonte da verdade

---

## 🎯 Funcionalidades

### ✅ Implementadas

- [x] Conexão de carteira Stellar (simulada)
- [x] Perfil de cuidados capilares on-chain (simulado)
- [x] Registro de tratamentos (Hidratação, Nutrição, Reconstrução)
- [x] Timeline de cuidados capilares
- [x] Sistema de check-in diário
- [x] Registro de eventos (Big Chop, Corte, Coloração, Tratamento)
- [x] Estatísticas e acompanhamento
- [x] Internacionalização completa (PT-BR, EN-US, ES-ES)
- [x] Design responsivo
- [x] **Carregamento automático de dados on-chain (simulado)**
- [x] **Detecção dinâmica de rede (Stellar Mainnet/Testnet)**
- [x] **Pronto para deploy**

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **React Hooks** - Gerenciamento de estado
- **CSS-in-JS** - Estilização inline

### Blockchain (Simulada)
- **[Stellar](https://stellar.org)** - Integração simulada (pagamentos, DeFi, tokenização)
- **Integração de Carteira** - Conexão de carteira demo
- **Simulação de Transações** - Transações on-chain simuladas

### Internacionalização
- Sistema i18n customizado
- Detecção automática de idioma
- Suporte para 3 idiomas (PT-BR, EN-US, ES-ES)

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar o projeto em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar no navegador**:
   ```
   http://localhost:3000
   ```

4. **Conectar carteira (demo)**:
   - Clique em "Conectar Carteira"
   - Selecione uma carteira (conexão simulada)
   - Comece a acompanhar sua jornada capilar!

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Iniciar servidor de desenvolvimento na porta 3000

# Produção
npm run build        # Criar build de produção
npm run start        # Iniciar servidor de produção

# Qualidade de código
npm run lint         # Executar ESLint
```

---

## 📁 Estrutura do Projeto

```
cronocapilar/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout raiz
│   └── globals.css       # Estilos globais
├── components/            # Componentes React
│   ├── HairTreatmentCard.tsx # Card de tratamento
│   ├── TreatmentCheckIn.tsx # Componente de check-in
│   ├── Timeline.tsx       # Componente de timeline
│   ├── EventRegister.tsx # Registro de eventos
│   └── ...
├── lib/                   # Utilitários e providers
│   ├── constants.ts      # Constantes (Package ID, etc)
│   ├── i18n.tsx          # Sistema de internacionalização
│   └── stellar-provider.tsx  # Provider carteira/Stellar (simulado)
├── public/                # Arquivos estáticos
└── package.json          # Dependências e scripts
```

---

## 🔗 Contratos Inteligentes (Simulados)

O projeto usa contratos inteligentes simulados na Stellar:

- **Package ID**: `0xCRONOCAPILAR_STELLAR_DEMO_ID` (simulado)
- **Rede**: Stellar Mainnet/Testnet (simulada)
- **Módulo**: `profile`
- **Funções principais**:
  - `create_profile` - Criar perfil de cuidados capilares on-chain
  - `register_treatment` - Registrar tratamento (Hidratação, Nutrição, Reconstrução)
  - `register_event` - Registrar evento (Big Chop, Corte, Coloração, Tratamento)

### 📝 Estruturas de Dados

- **Profile**: Armazena informações de cuidados capilares (tipo de cabelo, comprimento, textura)
- **Treatment**: Registra tratamentos realizados (Hidratação, Nutrição, Reconstrução)
- **Event**: Registra eventos importantes (Big Chop, Corte, Coloração, Tratamento)

> **Nota:** Esta é uma demo com interações blockchain simuladas. Em produção, contratos reais Stellar/Soroban seriam usados.

---

## 🌍 Internacionalização

O projeto suporta 3 idiomas:

- 🇧🇷 **Português (Brasil)** - `pt-BR`
- 🇺🇸 **English (US)** - `en-US`
- 🇪🇸 **Español** - `es-ES`

O idioma é detectado automaticamente com base nas configurações do navegador, mas pode ser alterado manualmente através do seletor de idioma.

---

## 💡 Por que Web3? Porque a confiança precisa ser a base.

A Web3, construída sobre tecnologias como blockchain, é como um jardim de confiança. É um ecossistema que não pertence a uma única empresa, mas é mantido e cultivado pela própria comunidade.

**Blockchain = O Diário Público da Comunidade**

Cada tratamento que você registra se torna uma página em um diário público, imutável e inviolável. Seu progresso é real e verificável por todos.

**Contratos Inteligentes = Regras Automáticas e Transparentes**

São códigos que executam as regras do aplicativo sem intermediários. Se uma condição é cumprida (ex: você completou sua rotina), uma ação acontece (ex: você ganha um selo de reconhecimento). A confiança é automatizada.

---

## 🎯 Prova de Cuidado

No nosso ecossistema, cada ato de cuidado que você registra na blockchain é uma "Prova de Cuidado". Isso vai além de um simples diário. É a criação do seu passaporte capilar digital, uma identidade descentralizada que prova sua dedicação e seu progresso.

**O que você constrói com a Prova de Cuidado:**
- **Identidade Capilar Descentralizada (CID)**: Um perfil on-chain que pertence a você, e não a uma plataforma
- **Reputação Verificável**: Sua consistência e conhecimento geram uma reputação que vale algo na comunidade
- **Histórico Imutável**: Um registro transparente da sua evolução, livre de edições ou manipulações

---

## 🚀 Deploy

### Recomendado: Vercel

A aplicação está pronta para deploy no Vercel:

1. Faça push do código para o GitHub
2. Conecte o repositório ao Vercel
3. Faça deploy automaticamente

**Recomendação:** Use **Vercel** para o melhor suporte Next.js e o deploy mais simples.

---

## 📄 Licença

Este projeto é uma aplicação demo para fins educacionais e de demonstração.

---

## 👨‍💻 Autor

**Ang3la.xyz**

Dona da ideia e do projeto. Desenvolvido como demo para **[Stellar](https://stellar.org)**

---

## 🙏 Agradecimentos

- **[Stellar Development Foundation](https://stellar.org)** - Pela rede e documentação
- **Comunidade de Cuidados Capilares** - Pela inspiração e apoio

---

## 🌟 Manifesto

Acreditamos que o cuidado com o cabelo é mais do que estética — é identidade, saúde e amor próprio. Cada fio cuidado é um gesto de autocuidado, e cada gesto compartilhado é uma semente de transformação. Na era da Web3, queremos descentralizar a beleza, tornando o conhecimento acessível e o pertencimento digital uma nova forma de empatia.

**Cuidar do cabelo natural deveria ser simples.**

---

*Última atualização: Dezembro 2025*

