export type MessageSender = 'user' | 'bot'

export type ChatMessage = {
  id: string
  text: string
  sender: MessageSender
  sentAt: Date
}
