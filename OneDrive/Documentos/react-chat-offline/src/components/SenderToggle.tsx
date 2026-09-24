type SenderToggleProps = {
  sender: 'user' | 'bot'
  onChange: (value: 'user' | 'bot') => void
}

export function SenderToggle({ sender, onChange }: SenderToggleProps) {
  const isBotSelected = sender === 'bot'

  return (
    <div className="flex items-center gap-2 rounded-full bg-[#f4eee9] p-1">
      {(['user', 'bot'] as const).map((option) => {
        const isSelected = sender === option

        return (
          <button
            key={option}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(option)}
            className={[
              'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
              isSelected
                ? isBotSelected
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#704f3b] text-white'
                : 'text-[#5a4135]',
            ].join(' ')}
          >
            {option === 'user' ? 'Usuário' : 'Robô'}
          </button>
        )
      })}
    </div>
  )
}
