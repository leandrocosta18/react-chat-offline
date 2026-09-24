import { useState } from 'react'
import { MessageHistory } from './components/MessageHistory'
import { SenderToggle } from './components/SenderToggle'
import type { ChatMessage } from './types/chat'

export default function App() {
  const [messages] = useState<ChatMessage[]>([])
  const [sender, setSender] = useState<'user' | 'bot'>('user')

  const isBotSelected = sender === 'bot'

  return (
    <main className="min-h-dvh bg-[#c8a487] px-4 py-4 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100dvh-2rem)] max-w-2xl flex-col gap-4">
        <MessageHistory messages={messages} />

        <section
          aria-label="Composição da mensagem"
          className={[
            'shrink-0 rounded-2xl border bg-white p-4 shadow-sm sm:p-5',
            isBotSelected ? 'border-violet-500 ring-2 ring-violet-200' : 'border-[#e7d8cd]',
          ].join(' ')}
        >
          <div className="flex items-center justify-between gap-3">
            <SenderToggle sender={sender} onChange={setSender} />
            <button
              type="button"
              className="rounded-xl bg-[#704f3b] px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-[#d9c7b8]"
              disabled
            >
              Enviar
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
