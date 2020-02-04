import { chatMessages as initialChatMessages } from '../store/chatMessages';
import { CHAT_MESSAGES } from '../actions/chatMessages';

export function chatMessages(state = initialChatMessages, action) {
  switch (action.type) {
    case CHAT_MESSAGES.ADD: return [...state, action.message];
    default: return state;
  }
}
