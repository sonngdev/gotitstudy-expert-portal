import { useSelector } from 'react-redux';
import { chatMessagesSelector } from '../redux/selectors';

export function useChatMessages() {
  return useSelector(chatMessagesSelector);
}
