import { useEffect, useRef, useState } from 'react'
import { MessageHistory } from './components/MessageHistory'
import { SenderToggle } from './components/SenderToggle'
import type { ChatMessage } from './types/chat'

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [sender, setSender] = useState<'user' | 'bot'>('user')
  const [draft, setDraft] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const isBotSelected = sender === 'bot'
  const canSend = draft.trim().length > 0

  useEffect(() => {
    const textarea = textareaRef.current

    if (!textarea) {
      return
    }

    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`
    textarea.style.overflowY = textarea.scrollHeight > 160 ? 'auto' : 'hidden'
  }, [draft])

  const handleSendMessage = () => {
    if (!canSend) {
      return
    }

    const message: ChatMessage = {
      id: crypto.randomUUID(),
      text: draft.trim(),
      sender,
      sentAt: new Date(),
    }

    setMessages((currentMessages) => [...currentMessages, message])
    setDraft('')

    requestAnimationFrame(() => {
      textareaRef.current?.focus()
    })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <main className="min-h-dvh bg-[#000000] px-4 py-4 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100dvh-2rem)] max-w-2xl flex-col gap-4">
        <MessageHistory messages={messages} />

        <section
          aria-label="Composição da mensagem"
          className={[
            'shrink-0 rounded-2xl bg-white p-4 shadow-sm sm:p-5',
            isBotSelected ? 'ring-2 ring-violet-200' : '',
          ].join(' ')}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-shrink-0 self-start sm:self-auto">
              <SenderToggle sender={sender} onChange={setSender} />
            </div>

            <textarea
              ref={textareaRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Digite sua mensagem"
              aria-label="Mensagem"
              className="min-h-[44px] max-h-40 w-full flex-1 resize-none overflow-hidden rounded-xl border-0 bg-[#fffdfb] px-3 py-2 text-left text-sm text-[#3f2b21] outline-none placeholder:text-[#9a7c68]"
            />

            <button
              type="button"
              className="rounded-xl bg-[#704f3b] px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#704f3b] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-[#d9c7b8]"
              disabled={!canSend}
              onClick={handleSendMessage}
            >
              Enviar
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
