# Memória do Projeto — CronoCapilar (Stellar)

Documento de referência para reutilizar padrões e decisões em outros projetos.

---

## Stack

| Camada        | Tecnologia                          |
|---------------|-------------------------------------|
| Framework     | Next.js 14 (App Router)             |
| UI            | React 18, TypeScript 5              |
| Blockchain UI | Stellar (carteira/conectividade)     |
| Estado/API    | @tanstack/react-query               |
| Estilo        | CSS-in-JS inline + globals.css     |

---

## Estrutura de pastas

```
app/
  layout.tsx      # Root layout, StellarProvider, I18nProvider, DemoBanner, StellarWatermark
  page.tsx        # Página principal
  globals.css
components/       # Componentes React (tsx)
lib/
  stellar-provider.tsx   # Provider de carteira/rede Stellar (connect, disconnect, signAndExecuteTransaction)
  constants.ts           # STELLAR_NETWORKS, DEFAULT_NETWORK, PACKAGE_ID, etc.
  i18n.tsx               # i18n (pt-BR, en-US, es-ES)
public/          # Assets estáticos
```

---

## Blockchain / Stellar

- **Rede:** [Stellar](https://stellar.org). Constantes em `lib/constants.ts`: `STELLAR_NETWORKS`, `DEFAULT_NETWORK` (testnet).
- **Provider:** `StellarProvider` envolve a app; hooks: `useStellar`, `useCurrentAccount`, `useConnectWallet`, `useDisconnectWallet`, `useSignAndExecuteTransaction`, `useWallets`, `formatAddress`.
- **Persistência local:** chaves `stellar_address`, `stellar_chainId`, `stellar_objects_{owner}` e `cronocapilar_profile_*`, `cronocapilar_treatments_*`, `cronocapilar_timeline_*` no `localStorage`.
- **Carteira recomendada em produção:** [Freighter](https://www.freighter.app/) ou outra carteira Stellar. A demo atual pode usar carteiras compatíveis com EVM para testes rápidos; em produção usar Stellar SDK/Freighter.

---

## i18n

- Idiomas: **pt-BR**, **en-US**, **es-ES**.
- `lib/i18n.tsx`: contexto com `translations` por idioma; uso em componentes via hook/contexto.
- Chaves agrupadas: `app`, `checkin`, `footer`, `treatments`, `profile`, `bigchop`, `community`, `hairTypes`, `hairLength`, `hairTexture`.

---

## Convenções de código

- Componentes em **PascalCase**; arquivos de componente em **PascalCase.tsx** (ex.: `StellarWatermark.tsx`, `DemoBanner.tsx`).
- Provider de rede/carteira: um único provider no `layout` (ex.: `StellarProvider`); hooks derivados no mesmo arquivo do provider.
- Constantes de rede e IDs em `lib/constants.ts`; não hardcodar URLs ou chain IDs nos componentes.
- README em 3 idiomas: `README.md` (EN), `README.pt-BR.md`, `README.es-ES.md`; referência a Stellar e link para stellar.org.

---

## Scripts (package.json)

```bash
npm run dev    # next dev -p 3000
npm run build  # next build
npm run start  # next start -p 3000
npm run lint   # next lint
```

---

## Reuso em outro projeto

1. Copiar esta memória para o novo projeto (ex.: `MEMORIA_PROJETO.md` ou `.cursor/MEMORIA.md`).
2. Ajustar nomes (Stellar → outra rede se for o caso) e manter a estrutura de provider + constants + i18n se fizer sentido.
3. Para Cursor: copiar este arquivo para `.cursor/rules/` como referência ou criar uma rule `.mdc` que inclua um resumo desta memória.

---

*Última atualização: março 2026 — CronoCapilar on Stellar*
