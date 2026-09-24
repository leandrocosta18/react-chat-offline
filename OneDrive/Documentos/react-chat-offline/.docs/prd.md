# PRD: Chat offline

## 1. Visão geral

Criar uma interface de chat offline em uma única janela, permitindo que a pessoa envie mensagens manualmente como **usuário** ou como **robô**. O papel do remetente será definido por um toggle no card de composição da mensagem.

O histórico será mantido somente no estado da aplicação, sem persistência local, backend ou integração externa.

## 2. Objetivo

Entregar uma experiência simples e responsiva para registrar uma conversa manualmente, com distinção visual clara entre mensagens do usuário e do robô.

## 3. Escopo

### Incluído

- Janela única de chat.
- Histórico de mensagens em memória.
- Mensagens com texto, remetente e horário de envio.
- Envio como usuário ou robô por meio de toggle.
- Alinhamento visual diferente para cada remetente.
- Campo de texto com altura ajustável ao conteúdo.
- Envio pelo botão ou pela tecla `Enter`.
- Quebra de linha com `Shift + Enter`.
- Input fixado na parte inferior da tela, inclusive em telas menores.
- Layout responsivo para desktop e mobile.
- Validação manual e pelos scripts existentes do projeto.

### Fora do escopo

- Persistência em `localStorage`, IndexedDB, banco de dados ou servidor.
- Autenticação ou múltiplos usuários.
- Respostas automáticas do robô.
- Edição ou exclusão de mensagens.
- Anexos, emojis, markdown ou formatação rica.
- Notificações, busca ou filtros no histórico.
- Bibliotecas adicionais de UI, ícones ou gerenciamento de estado.

## 4. Requisitos funcionais

### RF01. Histórico inicial

Ao abrir a aplicação, o histórico deve iniciar vazio, sem mensagem de boas-vindas.

### RF02. Composição da mensagem

A aplicação deve exibir um campo de texto para digitação dentro de um card branco. A altura do campo deve crescer conforme o conteúdo, respeitando um limite razoável para evitar que o editor ocupe toda a tela.

### RF03. Remetente selecionável

O card de composição deve conter um toggle com duas opções visíveis:

- `Usuário`: a mensagem aparece alinhada à direita.
- `Robô`: a mensagem aparece alinhada à esquerda.

O estado inicial do toggle deve ser `Usuário`.

### RF04. Indicador visual do robô

Quando `Robô` estiver selecionado, o card de composição deve receber uma borda roxa, indicando visualmente o remetente ativo. Ao voltar para `Usuário`, essa indicação deve ser removida ou substituída pelo estilo padrão.

### RF05. Envio

A mensagem deve ser enviada quando a pessoa:

- Clicar no botão de enviar; ou
- Pressionar `Enter` sem `Shift`.

O botão de enviar deve permanecer desabilitado quando o conteúdo estiver vazio ou contiver apenas espaços em branco.

### RF06. Quebra de linha

Pressionar `Shift + Enter` deve inserir uma quebra de linha sem enviar a mensagem.

### RF07. Criação do registro

Ao enviar uma mensagem válida, a aplicação deve adicionar ao histórico um registro contendo:

- Texto digitado, preservando as quebras de linha.
- Remetente: `usuário` ou `robô`.
- Horário do envio, obtido no momento da submissão.

Após o envio, o campo deve ser limpo e voltar ao estado inicial de altura. O foco deve permanecer no campo quando isso for possível.

### RF08. Exibição das mensagens

Cada mensagem deve exibir seu texto, remetente de forma identificável e horário de envio. Mensagens do usuário devem ficar do lado direito; mensagens do robô, do lado esquerdo.

O texto deve respeitar quebras de linha e não deve estourar horizontalmente o viewport.

### RF09. Rolagem do histórico

O histórico deve ocupar o espaço disponível entre o cabeçalho, se houver, e o card de composição. Quando o conteúdo ultrapassar a altura disponível, deve ser possível rolar a área de mensagens sem mover o card de composição.

Quando uma nova mensagem for enviada, o histórico deve rolar para mostrar a mensagem mais recente.

### RF10. Responsividade

Em telas grandes, o chat completo deve ser centralizado e ter largura máxima `max-w-2xl`.

Em telas menores, o chat deve ocupar a largura disponível com espaçamento lateral adequado. O card de composição deve continuar acessível na parte inferior, inclusive durante o uso em dispositivos móveis e com o teclado virtual aberto, respeitando as limitações naturais do navegador.

## 5. Requisitos não funcionais

- Usar React, TypeScript, Tailwind CSS e APIs nativas do navegador já disponíveis no projeto.
- Não adicionar bibliotecas externas de componentes, ícones, estado ou persistência.
- Definir os tipos com `type`, nunca com `interface`.
- Armazenar os tipos em `src/types`.
- Armazenar os componentes em `src/components`.
- Manter o histórico em um array no estado do React, sem persistência.
- Usar HTML semântico e controles operáveis por teclado.
- Garantir contraste suficiente entre texto, fundo e estados do controle.
- Usar `button` para ações e associar corretamente rótulos aos controles.
- Evitar dependência de horário ou locale fixo para a lógica; a apresentação deve usar a API nativa de data e hora.

## 6. Diretrizes visuais

- Fundo geral marrom claro.
- Conteúdo do chat centralizado em telas maiores.
- Largura máxima do chat: `2xl`.
- Área de mensagens limpa, com separação visual suficiente entre os registros.
- Mensagens do usuário alinhadas à direita.
- Mensagens do robô alinhadas à esquerda.
- Card de composição com fundo branco.
- Card de composição fixado na parte inferior da janela de chat.
- Borda roxa no card quando o remetente ativo for o robô.
- Toggle com as duas opções `Usuário` e `Robô`, deixando o estado selecionado evidente.
- Botão de enviar no lado direito do card.
- Controle de remetente no lado esquerdo do card.
- Estados de foco, hover e desabilitado perceptíveis, sem depender apenas de cor.

## 7. Modelo de dados

Criar em `src/types` um tipo equivalente a:

```ts
type MessageSender = 'user' | 'bot'

type ChatMessage = {
  id: string
  text: string
  sender: MessageSender
  sentAt: Date
}
```

O `id` deve ser único dentro da sessão. O campo `sentAt` deve representar o momento real de envio. O nome dos tipos e campos pode seguir a convenção já usada no código, desde que preserve esse contrato.

## 8. Componentes sugeridos

A implementação deve separar responsabilidades em componentes dentro de `src/components`:

- `ChatApp` ou componente equivalente: coordena o estado do histórico, remetente selecionado e envio.
- `MessageHistory`: renderiza o estado vazio, a lista e a rolagem para a mensagem mais recente.
- `MessageBubble`: apresenta uma mensagem individual conforme o remetente.
- `MessageComposer`: controla o textarea, toggle, botão de envio e eventos de teclado.
- `SenderToggle`: apresenta e altera a seleção entre usuário e robô.

Os nomes são sugestões; deve-se preservar a organização que melhor se encaixar na estrutura existente.

## 9. Divisão de tarefas em ordem progressiva

### Tarefa 1. Inspecionar a base existente [concluída]

- Ler `src/App.tsx`, `src/index.css` e `src/main.tsx`.
- Confirmar como o Tailwind está sendo aplicado.
- Identificar o ponto de entrada atual da interface.
- Preservar configurações existentes que não sejam necessárias para o chat.

**Concluído quando:** a implementação tiver um ponto de entrada definido e não houver necessidade de alterar a configuração do Vite ou do Tailwind.

**Status:** concluída. `src/main.tsx` monta `App`, `src/App.tsx` é o ponto de entrada da interface, `src/index.css` importa o Tailwind e `vite.config.ts` já configura os plugins do React e do Tailwind.

### Tarefa 2. Criar os tipos do domínio [concluída]

- Criar a pasta `src/types` caso ainda não exista.
- Definir o tipo do remetente com os valores de usuário e robô.
- Definir o tipo da mensagem com id, texto, remetente e horário.
- Usar apenas declarações `type`.

**Concluído quando:** o estado do chat puder ser tipado sem `any` nem `interface`.

**Status:** concluída. Os tipos `MessageSender` e `ChatMessage` foram criados e exportados em `src/types/chat.ts` usando apenas declarações `type`.

### Tarefa 3. Montar a estrutura visual da janela [concluída]

- Criar o layout principal do chat.
- Aplicar o fundo marrom claro.
- Centralizar o conteúdo e limitar sua largura a `max-w-2xl` em telas maiores.
- Reservar uma área flexível para o histórico e uma área inferior para o compositor.
- Definir comportamento responsivo e áreas de rolagem.

**Concluído quando:** a tela vazia tiver a estrutura correta em desktop e mobile, ainda sem depender do envio de mensagens.

**Status:** concluída. O `App` agora possui o layout responsivo do chat, com fundo marrom claro, container `max-w-2xl`, área flexível para o histórico e card inferior reservado para o compositor.

### Tarefa 4. Implementar o histórico de mensagens [concluída]

- Criar o estado do histórico como array no componente controlador.
- Renderizar estado vazio quando não houver mensagens.
- Criar o componente de mensagem individual.
- Alinhar usuário à direita e robô à esquerda.
- Exibir texto, remetente e horário.
- Preservar quebras de linha e impedir overflow horizontal.
- Implementar rolagem automática ao receber uma nova mensagem.

**Concluído quando:** uma lista de mensagens de exemplo puder ser renderizada corretamente e a área de histórico rolar sem mover o compositor.

**Status:** concluída. O histórico tipado foi criado em `MessageHistory`, as mensagens individuais são renderizadas por `MessageBubble`, o estado inicial permanece vazio e a rolagem acompanha novas mensagens.

### Tarefa 5. Implementar o toggle de remetente [concluída]

- Criar o controle com as opções `Usuário` e `Robô`.
- Inicializar a seleção como usuário.
- Garantir operação por mouse e teclado.
- Aplicar a borda roxa ao card quando robô estiver selecionado.
- Atualizar o alinhamento futuro das novas mensagens de acordo com a seleção atual.

**Concluído quando:** alternar o controle modificar claramente o estado visual e o remetente que será usado no próximo envio.

**Status:** concluída. O estado `sender` foi adicionado em `App`, o `SenderToggle` alterna entre usuário e robô, e o card de composição recebe borda roxa quando o remetente ativo é o robô.

### Tarefa 6. Implementar o campo de composição

- Usar `textarea` para suportar múltiplas linhas.
- Ajustar a altura automaticamente ao conteúdo, com limite máximo e rolagem interna quando necessário.
- Manter o controle de remetente à esquerda.
- Manter o botão de envio à direita.
- Desabilitar o botão para texto vazio ou somente espaços.
- Exibir estados de foco e desabilitado.

**Concluído quando:** o card se adapta ao texto e seus controles permanecem utilizáveis em diferentes larguras.

### Tarefa 7. Implementar envio e atalhos de teclado

- Interceptar `Enter` sem `Shift` para enviar.
- Permitir `Shift + Enter` para quebra de linha.
- Bloquear o envio de mensagens sem conteúdo significativo.
- Criar o registro com texto, remetente, id único e `new Date()`.
- Adicionar o registro ao array do histórico.
- Limpar e redimensionar o campo após o envio.
- Manter o foco no campo após o envio quando possível.

**Concluído quando:** o envio pelo botão e pelo teclado produzir o mesmo resultado e não houver mensagens vazias no histórico.

### Tarefa 8. Refinar acessibilidade e responsividade

- Adicionar rótulos acessíveis aos controles.
- Confirmar que o toggle comunica o estado selecionado.
- Confirmar foco visível em todos os controles.
- Testar mensagens longas, múltiplas linhas e viewport estreito.
- Ajustar `min-height`, `padding-bottom` e áreas com `overflow` para o uso mobile.
- Confirmar que o card inferior continua acessível com o teclado virtual aberto, dentro do comportamento suportado pelo navegador.

**Concluído quando:** os fluxos principais forem utilizáveis sem mouse e sem overflow visual em desktop e mobile.

### Tarefa 9. Validação final

- Executar `npm run lint`.
- Executar `npm run build`.
- Fazer validação manual no navegador.
- Verificar histórico vazio ao recarregar a página, confirmando a ausência de persistência.
- Verificar envio como usuário e como robô.
- Verificar horário em todas as mensagens.
- Verificar `Enter`, `Shift + Enter`, botão desabilitado e rolagem automática.
- Verificar desktop, mobile e mensagens longas.

**Concluído quando:** lint e build terminarem sem erros e todos os critérios de aceite forem confirmados manualmente.

## 10. Critérios de aceite

- [ ] A aplicação abre com histórico vazio.
- [ ] O fundo da aplicação é marrom claro.
- [ ] O chat é centralizado e limitado a `max-w-2xl` em telas grandes.
- [ ] O card de composição permanece na parte inferior.
- [ ] O campo cresce conforme o texto, respeitando um limite.
- [ ] O toggle exibe e alterna entre `Usuário` e `Robô`.
- [ ] Usuário aparece à direita e robô à esquerda.
- [ ] O card recebe borda roxa quando robô está selecionado.
- [ ] O botão de enviar fica à direita e é desabilitado sem mensagem válida.
- [ ] `Enter` envia a mensagem.
- [ ] `Shift + Enter` insere quebra de linha.
- [ ] Cada mensagem exibe texto, remetente e horário.
- [ ] Mensagens novas aparecem automaticamente na área visível do histórico.
- [ ] Mensagens longas não quebram o layout horizontal.
- [ ] O layout funciona em desktop e mobile.
- [ ] Recarregar a página remove o histórico.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa sem erros.
