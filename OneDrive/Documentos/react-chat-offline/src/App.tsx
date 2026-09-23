export default function App() {
  return (
    <main className="min-h-dvh bg-[#c8a487] px-4 py-4 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100dvh-2rem)] max-w-2xl flex-col gap-4">
        <section
          aria-label="Histórico da conversa"
          className="min-h-0 flex-1 overflow-y-auto rounded-2xl bg-[#ead8c7]/70 p-4 sm:p-6"
        />

        <section
          aria-label="Composição da mensagem"
          className="shrink-0 rounded-2xl bg-white p-4 shadow-sm sm:p-5"
        />
      </div>
    </main>
  )
}
