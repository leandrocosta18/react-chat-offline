import type { ChatMessage } from '../types/chat'

type MessageBubbleProps = {
  message: ChatMessage
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUserMessage = message.sender === 'user'
  const senderLabel = isUserMessage ? 'Usuário' : 'Robô'
  const timeLabel = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(message.sentAt)

  return (
    <article className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
          isUserMessage
            ? 'rounded-br-sm bg-[#704f3b] text-white'
            : 'rounded-bl-sm bg-white text-[#3f2b21]'
        }`}
      >
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide opacity-75">
          {senderLabel}
        </p>
        <p className="whitespace-pre-wrap wrap-break-word text-sm leading-6">
          {message.text}
        </p>
        <time
          className="mt-2 block text-right text-xs opacity-70"
          dateTime={message.sentAt.toISOString()}
        >
          {timeLabel}
        </time>
      </div>
    </article>
  )
}
