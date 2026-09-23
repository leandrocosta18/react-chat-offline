import { useState } from 'react'
import { MessageHistory } from './components/MessageHistory'
import type { ChatMessage } from './types/chat'

export default function App() {
  const [messages] = useState<ChatMessage[]>([])

  return (
    <main className="min-h-dvh bg-[#c8a487] px-4 py-4 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100dvh-2rem)] max-w-2xl flex-col gap-4">
        <MessageHistory messages={messages} />

        <section
          aria-label="Composição da mensagem"
          className="shrink-0 rounded-2xl bg-white p-4 shadow-sm sm:p-5"
        />
      </div>
    </main>
  )
}
