import { chatMessagesInitState } from '../store/chatMessages';
import { CHAT_MESSAGES } from '../actions/chatMessages';

export function chatMessagesReducer(state = chatMessagesInitState, action) {
  switch (action.type) {
    case CHAT_MESSAGES.ADD: return [...state, action.message];
    default: return state;
  }
}
