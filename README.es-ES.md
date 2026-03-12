# 💆‍♀️ CronoCapilar - Jornada de Cuidados Capilares en Stellar

> **Transforma tu rutina capilar en prueba on-chain de autocuidado**

**⭐ Creado para [Stellar](https://stellar.org)** — Red blockchain para pagos, DeFi y tokenización de activos.

🌍 **Lee en otros idiomas:**
- 🇧🇷 [Português (PT-BR)](README.pt-BR.md)
- 🇪🇸 [Español (ES-ES)](README.es-ES.md) ← Estás aquí
- 🇺🇸 [English (EN-US)](README.md)

### ✅ **Estado: Demo - Red Stellar Simulada**

**🌐 Aplicación Demo:** Lista para deploy

⚠️ **Nota:** Esta es una aplicación demo que simula la integración con la red Stellar. Las transacciones son simuladas con fines de demostración.

---

## 📱 Sobre el Proyecto

**CronoCapilar** es una aplicación Web3 que ayuda a personas con cabello natural a entender lo que el cabello realmente necesita y organizar su rutina con claridad y transparencia, a través de una herramienta simple validada por la comunidad.

### El Problema

En el mundo de hoy, cuidar el cabello natural es una jornada marcada por la confusión. Información contradictoria, influencias comerciales y la frustración de gastar tiempo y dinero en productos que no funcionan. Es un dolor diario, frecuente y emocional.

- **Confusión**: ¿Hidratación, Nutrición o Reconstrucción? La duda es constante.
- **Desconfianza**: ¿Las recomendaciones son genuinas o patrocinadas?
- **Frustración**: Intentos solitarios que no traen los resultados esperados.
- **Desperdicio**: Tiempo y dinero invertidos sin claridad.

### La Solución

**CronoCapilar** usa tecnología Web3 ([Stellar](https://stellar.org)) para crear un ecosistema transparente y validado por la comunidad donde:

- ✅ **Claridad Inmediata**: Un diagnóstico simple para saber lo que tu cabello necesita: Hidratación (H), Nutrición (N) o Reconstrucción (R)
- ✅ **Registro Rastreable**: Acompaña tu evolución en un historial que es solo tuyo
- ✅ **Confianza Total**: La transparencia de la blockchain garantiza que los datos no son manipulados
- ✅ **Pertenencia Genuina**: Sé parte de una comunidad que es la verdadera fuente de la verdad

---

## 🎯 Funcionalidades

### ✅ Implementadas

- [x] Conexión de cartera Stellar (simulada)
- [x] Perfil de cuidados capilares on-chain (simulado)
- [x] Registro de tratamientos (Hidratación, Nutrición, Reconstrucción)
- [x] Timeline de cuidados capilares
- [x] Sistema de check-in diario
- [x] Registro de eventos (Big Chop, Corte, Coloración, Tratamiento)
- [x] Estadísticas y seguimiento
- [x] Internacionalización completa (PT-BR, EN-US, ES-ES)
- [x] Diseño responsivo
- [x] **Carga automática de datos on-chain (simulada)**
- [x] **Detección dinámica de red (Stellar Mainnet/Testnet)**
- [x] **Listo para deploy**

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **React Hooks** - Gestión de estado
- **CSS-in-JS** - Estilos inline

### Blockchain (Simulada)
- **[Stellar](https://stellar.org)** - Integración simulada (pagos, DeFi, tokenización)
- **Integración de Cartera** - Conexión de cartera demo
- **Simulación de Transacciones** - Transacciones on-chain simuladas

### Internacionalización
- Sistema i18n personalizado
- Detección automática de idioma
- Soporte para 3 idiomas (PT-BR, EN-US, ES-ES)

---

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar el proyecto en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Acceder en el navegador**:
   ```
   http://localhost:3000
   ```

4. **Conectar cartera (demo)**:
   - Haz clic en "Conectar Cartera"
   - Selecciona una cartera (conexión simulada)
   - ¡Comienza a seguir tu jornada capilar!

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo en el puerto 3000

# Producción
npm run build        # Crear build de producción
npm run start        # Iniciar servidor de producción

# Calidad de código
npm run lint         # Ejecutar ESLint
```

---

## 📁 Estructura del Proyecto

```
cronocapilar/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout raíz
│   └── globals.css       # Estilos globales
├── components/            # Componentes React
│   ├── HairTreatmentCard.tsx # Tarjeta de tratamiento
│   ├── TreatmentCheckIn.tsx # Componente de check-in
│   ├── Timeline.tsx       # Componente de timeline
│   ├── EventRegister.tsx # Registro de eventos
│   └── ...
├── lib/                   # Utilidades y providers
│   ├── constants.ts      # Constantes (Package ID, etc)
│   ├── i18n.tsx          # Sistema de internacionalización
│   └── stellar-provider.tsx  # Provider cartera/Stellar (simulado)
├── public/                # Archivos estáticos
└── package.json          # Dependencias y scripts
```

---

## 🔗 Contratos Inteligentes (Simulados)

El proyecto usa contratos inteligentes simulados en Stellar:

- **Package ID**: `0xCRONOCAPILAR_STELLAR_DEMO_ID` (simulado)
- **Red**: Stellar Mainnet/Testnet (simulada)
- **Módulo**: `profile`
- **Funciones principales**:
  - `create_profile` - Crear perfil de cuidados capilares on-chain
  - `register_treatment` - Registrar tratamiento (Hidratación, Nutrición, Reconstrucción)
  - `register_event` - Registrar evento (Big Chop, Corte, Coloración, Tratamiento)

### 📝 Estructuras de Datos

- **Profile**: Almacena información de cuidados capilares (tipo de cabello, longitud, textura)
- **Treatment**: Registra tratamientos realizados (Hidratación, Nutrición, Reconstrucción)
- **Event**: Registra eventos importantes (Big Chop, Corte, Coloración, Tratamiento)

> **Nota:** Esta es una demo con interacciones blockchain simuladas. En producción se usarían contratos reales Stellar/Soroban.

---

## 🌍 Internacionalización

El proyecto soporta 3 idiomas:

- 🇪🇸 **Español** - `es-ES`
- 🇧🇷 **Português (Brasil)** - `pt-BR`
- 🇺🇸 **English (US)** - `en-US`

El idioma se detecta automáticamente según la configuración del navegador, pero puede cambiarse manualmente a través del selector de idioma.

---

## 💡 ¿Por qué Web3? Porque la confianza necesita ser la base.

Web3, construida sobre tecnologías como blockchain, es como un jardín de confianza. Es un ecosistema que no pertenece a una sola empresa, sino que es mantenido y cultivado por la propia comunidad.

**Blockchain = El Diario Público de la Comunidad**

Cada tratamiento que registras se convierte en una página en un diario público, inmutable e inviolable. Tu progreso es real y verificable por todos.

**Contratos Inteligentes = Reglas Automáticas y Transparentes**

Son códigos que ejecutan las reglas de la aplicación sin intermediarios. Si se cumple una condición (ej: completaste tu rutina), ocurre una acción (ej: ganas una insignia de reconocimiento). La confianza está automatizada.

---

## 🎯 Prueba de Cuidado

En nuestro ecosistema, cada acto de cuidado que registras en la blockchain es una "Prueba de Cuidado". Esto va más allá de un simple diario. Es la creación de tu pasaporte capilar digital, una identidad descentralizada que prueba tu dedicación y progreso.

**Lo que construyes con la Prueba de Cuidado:**
- **Identidad Capilar Descentralizada (CID)**: Un perfil on-chain que te pertenece, y no a una plataforma
- **Reputación Verificable**: Tu consistencia y conocimiento generan una reputación que vale algo en la comunidad
- **Historial Inmutable**: Un registro transparente de tu evolución, libre de ediciones o manipulaciones

---

## 🚀 Deploy

### Recomendado: Vercel

La aplicación está lista para deploy en Vercel:

1. Haz push del código a GitHub
2. Conecta el repositorio a Vercel
3. Haz deploy automáticamente

**Recomendación:** Usa **Vercel** para el mejor soporte Next.js y el deploy más simple.

---

## 📄 Licencia

Este proyecto es una aplicación demo con fines educativos y de demostración.

---

## 👨‍💻 Autor

**Ang3la.xyz**

Dueña de la idea y del proyecto. Desarrollado como demo para **[Stellar](https://stellar.org)**

---

## 🙏 Agradecimientos

- **[Stellar Development Foundation](https://stellar.org)** - Por la red y documentación
- **Comunidad de Cuidados Capilares** - Por la inspiración y apoyo

---

## 🌟 Manifesto

Creemos que el cuidado del cabello es más que estética — es identidad, salud y amor propio. Cada hebra cuidada es un gesto de autocuidado, y cada gesto compartido es una semilla de transformación. En la era Web3, queremos descentralizar la belleza, haciendo el conocimiento accesible y el pertenecer digital una nueva forma de empatía.

**Cuidar el cabello natural debería ser simple.**

---

*Última actualización: Diciembre 2025*

