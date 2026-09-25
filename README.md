# React Chat Offline

Projeto de chat offline em uma única janela, com histórico em memória e seleção de remetente entre usuário e robô.

## ✅ Funcionalidades implementadas

- Histórico de mensagens em memória
- Toggle para escolher remetente: usuário ou robô
- Campo de texto com autoajuste de altura
- Envio por botão ou pela tecla `Enter`
- Quebra de linha com `Shift + Enter`
- Mensagens com texto, remetente e horário
- Mensagens do usuário alinhadas à direita e do robô à esquerda
- Layout responsivo centralizado em telas maiores
- Fundo preto, card de composição simplificado e toggle com ícones

## 🧱 Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## 🗂️ Estrutura principal

```text
src/
  App.tsx
  index.css
  main.tsx
  types/
    chat.ts
  components/
    MessageBubble.tsx
    MessageHistory.tsx
    SenderToggle.tsx
```

## ▶️ Como executar

```bash
npm install
npm run dev
```

A aplicação ficará disponível no servidor local do Vite, normalmente em http://localhost:5174/

## 🔎 Validação

Os comandos a seguir foram usados para verificar o projeto:

```bash
npm run build
npm run lint
```

## 📝 Observações

- O histórico não é persistido em banco, `localStorage` ou backend.
- Os tipos usam `type` e ficam em `src/types`.
- Os componentes ficam separados em `src/components`.
- A implementação segue o PRD documentado em `.docs/prd.md`.
