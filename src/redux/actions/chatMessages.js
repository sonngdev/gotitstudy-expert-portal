export const CHAT_MESSAGES = {
  ADD: 'CHAT_MESSAGES/ADD',
}

export function chatMessagesAdd(message) {
  return { type: CHAT_MESSAGES.ADD, message };
}
