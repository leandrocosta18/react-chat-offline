# Projeto: chat offline

Projeto de ma janela unica de chat em que eu consigo enviar mensagens como usuário e como robô(atraves de um toggle no input de mensagem)

## Aspectos tecnicos

Projeto feito em vite + Reac + typescript + tailwind
todos os types salvos na pasta src/types (usando type e não interface)
todos os componentes salvos na pasta src/components
o Historico do chat deve estar em um array sem persistencia

## Aspectos visuais

A tela vai ter fundo marrom claro

todo o chat (incluindo historico de mensagens e input) terão uma largura maxima (2xl), centralizado, em tela maior

o input será em um card com fundo branco e a altura ajustada confrome a mensagem.

O ard ficará no canto inferior o tempo inteiro.

dentro do card do input, do lado direito:
- Botão de enviar, que fica desabilitado quando não tiver mensagem digitada.

Dentro do card do input, do lado esquerdo:
- Um botão que servirá com toggl para marcar se a mensagem enviada será via usario (e fica lado direito do historico) ou robô (e fica do lado esquerdo)
- Quando o toggle estier ativado (robô) o card do input terá uma borda roxa, indicando visualmente que a mensagem será enviada como robô e não usuario.