import { useSelector } from 'react-redux';
import { chatMessagesSelector } from '../redux/selectors';

export function useChatMessagesList() {
  return useSelector(chatMessagesSelector);
}
