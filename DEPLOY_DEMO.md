# 🚀 Guia de Deploy - Builders & Founders Journey (Demo)

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no GitHub (para deploy na Vercel)
- Conta na Vercel (gratuita)

## 🎯 Deploy Rápido na Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. **Criar repositório no GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Builders & Founders Journey Demo"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/builders-founders-journey.git
   git push -u origin main
   ```

2. **Conectar na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Importe o repositório do GitHub
   - A Vercel detectará automaticamente Next.js
   - Clique em "Deploy"

3. **Pronto!** Sua demo estará online em alguns minutos.

### Opção 2: Deploy via CLI da Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel

# Para produção
vercel --prod
```

## 🧪 Testar Localmente Antes do Deploy

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Acessar
http://localhost:3000
```

## ✅ Checklist de Deploy

- [ ] Código commitado no GitHub
- [ ] Repositório conectado na Vercel
- [ ] Build executado com sucesso
- [ ] Site acessível publicamente
- [ ] Conexão de carteira funcionando (demo)
- [ ] Transações simuladas funcionando
- [ ] Interface responsiva testada

## 🎭 Características da Demo

Esta é uma **demonstração simulada** que:

- ✅ Simula conexão de carteira Stellar
- ✅ Simula transações on-chain
- ✅ Funciona completamente offline
- ✅ Não requer configuração de blockchain real
- ✅ Pronta para apresentação

## 📝 Variáveis de Ambiente

**Não são necessárias** para esta demo, pois tudo é simulado localmente.

## 🔧 Troubleshooting

### Build falha na Vercel

1. Verifique se todas as dependências estão no `package.json`
2. Certifique-se de que o Node.js 18+ está configurado
3. Verifique os logs de build na Vercel

### Erro de módulos não encontrados

```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Problemas com TypeScript

Os avisos de tipo não impedem a execução. Para produção, você pode:
- Adicionar `// @ts-ignore` onde necessário
- Ou configurar TypeScript para ser menos rigoroso

## 🌐 URLs de Deploy

Após o deploy, você terá:
- **URL de produção**: `https://seu-projeto.vercel.app`
- **URL de preview**: Para cada commit (gerada automaticamente)

## 📱 Testar a Demo

1. Acesse a URL do deploy
2. Clique em "Connect Wallet"
3. Selecione qualquer carteira (demo)
4. Preencha seu perfil de builder
5. Registre marcos (Coding, Learning, Building)
6. Veja suas estatísticas

## 🎨 Personalização

Para personalizar a demo:

1. **Cores**: Edite os gradientes em `app/page.tsx`
2. **Textos**: Edite `lib/i18n.tsx`
3. **Logo**: Substitua o emoji 🚀 por uma imagem em `public/`

## 📞 Suporte

Em caso de problemas:
1. Verifique os logs na Vercel
2. Teste localmente primeiro
3. Verifique a documentação do Next.js

---

**Boa sorte com seu deploy! 🚀**

