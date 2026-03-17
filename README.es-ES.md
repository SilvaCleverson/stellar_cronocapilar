<p align="center">
  <img src="https://img.shields.io/badge/Stellar-Hecho%20en%20Stellar-blue?style=for-the-badge&logo=stellar&logoColor=white" alt="Built on Stellar" />
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<h1 align="center">💆‍♀️ CronoCapilar</h1>

<p align="center">
  <strong>Convierte tu rutina de cuidados capilares en prueba on-chain de autocuidado.</strong>
</p>

<p align="center">
  <a href="README.pt-BR.md">🇧🇷 Português</a> · <a href="README.es-ES.md">🇪🇸 Español</a> · <a href="README.md">🇺🇸 English</a>
</p>

---

## La idea en una frase

> CronoCapilar es una aplicación Web3 en **[Stellar](https://stellar.org)** que reemplaza la confusión en el cuidado del cabello natural con un sistema simple, transparente y validado por la comunidad — respaldado por blockchain.

---

## ¿Por qué existe esto?

Millones de personas con cabello natural viven el mismo ciclo frustrante:

```
😕 "¿Mi cabello necesita Hidratación, Nutrición o Reconstrucción?"
😤  Compra productos por recomendación de influencers → no funciona
💸  Pierde tiempo y dinero → se rinde
🔁  Repite
```

La causa raíz no es la falta de productos — es **falta de confianza y claridad**.

**CronoCapilar** resuelve esto poniendo tu trayectoria capilar en un libro mayor transparente y a prueba de manipulación. Ninguna empresa es dueña de tus datos. Ningún algoritmo decide lo que ves. La comunidad es la fuente de la verdad.

---

## ¿Por qué Stellar?

| | |
|:---|:---|
| **Inclusiva por diseño** | Stellar fue construida para la inclusión financiera — el mismo propósito mueve CronoCapilar: el cuidado de la belleza debe ser accesible para todos. |
| **Transacciones baratas** | Registrar tratamientos on-chain no debería costar más que la mascarilla capilar. Stellar mantiene las tarifas insignificantes. |
| **Rápida y confiable** | Finalidad en 3-5 segundos significa que tu check-in queda registrado antes de que enjuagues el acondicionador. |
| **Alcance global** | Multi-moneda, multi-idioma — igual que nuestros usuarios. |

---

## Cómo funciona

```
┌─────────────┐     ┌──────────────┐     ┌───────────────────────┐
│  Conectar    │────▶│  Crear tu    │────▶│  Registrar tratamiento │
│  Cartera     │     │  Perfil      │     │  diario (H/N/R)        │
└─────────────┘     └──────────────┘     └───────────────────────┘
                                                    │
                                                    ▼
                                           ┌─────────────────┐
                                           │  Construir tu    │
                                           │  Prueba de       │
                                           │  Cuidado on-chain│
                                           └─────────────────┘
```

1. **Conecta** tu cartera Stellar (ej. [Freighter](https://www.freighter.app/))
2. **Crea** tu perfil capilar (tipo, longitud, textura)
3. **Haz check-in** diario con tu tratamiento: **H**idratación, **N**utrición o **R**econstrucción
4. **Sigue** tu trayectoria en una línea de tiempo inmutable
5. **Registra eventos** como Big Chop, cortes, coloración

Cada acción se convierte en una **Prueba de Cuidado** — tu pasaporte capilar verificable y on-chain.

---

## Funcionalidades

| Funcionalidad | Descripción |
|:--------------|:------------|
| **Conexión de Cartera** | Conecta vía carteras compatibles con Stellar |
| **Perfil On-chain** | Tipo de cabello, longitud y textura almacenados on-chain |
| **Check-in de Tratamiento** | Registro diario H/N/R con seguimiento de racha |
| **Timeline Visual** | Vista cronológica de toda tu trayectoria capilar |
| **Registro de Eventos** | Big Chop, cortes, coloración — todo registrado |
| **Estadísticas** | Contadores de tratamiento, rachas, consistencia |
| **3 Idiomas** | i18n completo: Español, Português, English |
| **Responsivo** | Funciona en móvil, tablet y escritorio |
| **Detección de Red** | Alternancia automática Stellar Mainnet/Testnet |

---

## Stack Tecnológico

| Capa | Tecnología |
|:-----|:-----------|
| **Framework** | [Next.js 14](https://nextjs.org) (App Router) |
| **Lenguaje** | [TypeScript 5](https://typescriptlang.org) |
| **UI** | React 18 + CSS-in-JS |
| **Blockchain** | [Stellar](https://stellar.org) (Testnet) |
| **Estado** | [@tanstack/react-query](https://tanstack.com/query) |
| **Cartera** | [Freighter](https://www.freighter.app/) recomendada |
| **i18n** | Sistema propio basado en contexto (PT/EN/ES) |
| **Deploy** | [Vercel](https://vercel.com) listo |

---

## Inicio Rápido

```bash
# 1. Clona el repositorio
git clone https://github.com/SilvaCleverson/stellar_cronocapilar.git
cd stellar_cronocapilar

# 2. Instala las dependencias
npm install

# 3. Ejecuta localmente
npm run dev

# 4. Abre en el navegador
# → http://localhost:3000
```

> **Consejo:** Instala la extensión [Freighter](https://www.freighter.app/) en el navegador para conectar tu cartera Stellar.

---

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx              # Layout raíz (providers, banner, watermark)
│   ├── page.tsx                # Página principal (perfil, tratamientos, timeline)
│   ├── globals.css             # Estilos globales
│   └── icon.svg                # Favicon del app
│
├── components/
│   ├── LoginModal.tsx          # Modal de conexión de cartera
│   ├── HairTreatmentCard.tsx   # Tarjeta de tratamiento
│   ├── TreatmentCheckIn.tsx    # Componente de check-in diario
│   ├── Timeline.tsx            # Timeline de la trayectoria capilar
│   ├── EventRegister.tsx       # Registro de eventos (Big Chop, etc.)
│   ├── StreakCard.tsx          # Tracker de racha / consistencia
│   ├── Tabs.tsx               # Navegación por pestañas
│   ├── LanguageSelector.tsx   # Selector de idioma
│   ├── DemoBanner.tsx         # Banner indicador de testnet
│   ├── StellarWatermark.tsx   # Branding Stellar
│   └── BigChopCard.tsx        # Tracker de fecha del Big Chop
│
├── lib/
│   ├── stellar-provider.tsx    # Contexto y hooks de cartera Stellar
│   ├── constants.ts            # Config de red, direcciones de contrato
│   └── i18n.tsx                # Traducciones (PT-BR, EN-US, ES-ES)
│
├── package.json
├── tsconfig.json
├── next.config.mjs
└── vercel.json
```

---

## Arquitectura On-chain

CronoCapilar está diseñado para contratos inteligentes **[Soroban](https://soroban.stellar.org)** en Stellar:

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

**Funciones principales:**
- `create_profile` — Crear perfil capilar on-chain
- `register_treatment` — Registrar tratamiento H/N/R
- `register_event` — Registrar Big Chop, corte, coloración, etc.

> **Estado actual:** Demo con transacciones simuladas. La versión de producción usará contratos Soroban reales en Stellar Testnet/Mainnet.

---

## Prueba de Cuidado

Cada tratamiento que registras on-chain se convierte en una **Prueba de Cuidado** — un registro verificable de tu dedicación.

Lo que construyes:

- **Identidad Capilar Descentralizada** — Un perfil on-chain que te pertenece a *ti*, no a una plataforma
- **Reputación Verificable** — Tu consistencia genera una reputación que vale algo en la comunidad
- **Historial Inmutable** — Un registro transparente de tu evolución, libre de manipulación

> *Tu trayectoria capilar es tu historia. Blockchain garantiza que nadie puede reescribirla.*

---

## Internacionalización

Soporte completo para 3 idiomas, detectados automáticamente por el navegador:

| Idioma | Código | Bandera |
|:-------|:-------|:--------|
| Español | `es-ES` | 🇪🇸 |
| Português (Brasil) | `pt-BR` | 🇧🇷 |
| English | `en-US` | 🇺🇸 |

---

## Deploy

Deploy en un clic en Vercel:

```bash
npm run build    # Build de producción
npm run start    # Iniciar servidor de producción
```

O conecta este repositorio GitHub a [Vercel](https://vercel.com) para deploys automáticos en cada push.

---

## Documentacion

| Documento | Descripcion |
|:----------|:------------|
| [Litepaper](docs/LITEPAPER.es-ES.md) | Vision general concisa de CronoCapilar y el protocolo Proof of Care (3-5 paginas) |
| [Whitepaper](docs/WHITEPAPER.es-ES.md) | Documentacion tecnica y conceptual completa (10-15 paginas) |

---

## Roadmap

- [ ] Deploy real de smart contracts Soroban
- [ ] Integración profunda con cartera Freighter
- [ ] Sistema de validación comunitaria (votar tratamientos)
- [ ] NFT badges para hitos de cuidado
- [ ] Diagnóstico capilar por IA a partir de fotos
- [ ] Motor de recomendación de productos (community-driven)

---

## Manifiesto

> *Creemos que el cuidado del cabello es más que estética — es identidad, salud y amor propio.*
>
> *Cada hebra cuidada es un gesto de autocuidado. Cada gesto compartido es una semilla de transformación.*
>
> *En la era Web3, queremos descentralizar la belleza — haciendo el conocimiento accesible y el pertenecer digital una nueva forma de empatía.*
>
> **Cuidar el cabello natural debería ser simple.**

---

## Autor

**Angela Salles** — [Ang3la.xyz](https://ang3la.xyz)

Owner, Founder & Builder

---

## Agradecimientos

- [Stellar Development Foundation](https://stellar.org) — Por la red, visión y documentación
- Comunidad de cuidados capilares — Por la inspiración, resiliencia y amor

---

<p align="center">
  <strong>Hecho con 💜 para <a href="https://stellar.org">Stellar</a></strong>
</p>

<p align="center">
  <sub>Marzo 2026</sub>
</p>
