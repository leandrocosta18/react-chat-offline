import { useEffect, useRef } from 'react'
import type { ChatMessage } from '../types/chat'
import { MessageBubble } from './MessageBubble'

type MessageHistoryProps = {
  messages: ChatMessage[]
}

export function MessageHistory({ messages }: MessageHistoryProps) {
  const endOfHistoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages.length])

  return (
    <section
      aria-label="Histórico da conversa"
      aria-live="polite"
      className="min-h-0 flex-1 overflow-y-auto rounded-2xl bg-[#ead8c7]/70 p-4 sm:p-6"
    >
      {messages.length === 0 ? (
        <p className="flex h-full items-center justify-center text-center text-sm text-[#704f3b]/70">
          Nenhuma mensagem ainda.
        </p>
      ) : (
        <div className="space-y-3">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      )}
      <div ref={endOfHistoryRef} />
    </section>
  )
}
