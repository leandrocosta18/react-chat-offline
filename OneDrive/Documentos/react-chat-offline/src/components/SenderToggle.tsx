type SenderToggleProps = {
  sender: 'user' | 'bot'
  onChange: (value: 'user' | 'bot') => void
}

export function SenderToggle({ sender, onChange }: SenderToggleProps) {
  const isBotSelected = sender === 'bot'

  return (
    <div className="flex items-center gap-2 rounded-full bg-[#f4eee9] p-1" aria-label="Selecionar remetente">
      {(['user', 'bot'] as const).map((option) => {
        const isSelected = sender === option
        const icon = option === 'user' ? '👤' : '🤖'

        return (
          <button
            key={option}
            type="button"
            aria-pressed={isSelected}
            aria-label={option === 'user' ? 'Enviar como usuário' : 'Enviar como robô'}
            onClick={() => onChange(option)}
            className={[
              'flex h-10 w-10 items-center justify-center rounded-full text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#704f3b] focus-visible:ring-offset-2',
              isSelected
                ? isBotSelected
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#704f3b] text-white'
                : 'bg-transparent text-[#5a4135]',
            ].join(' ')}
          >
            {icon}
          </button>
        )
      })}
    </div>
  )
}
