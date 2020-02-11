import { useDispatch, useSelector } from 'react-redux';
import { chatMessagesSelector } from '../redux/selectors';
import { chatMessagesAdd } from '../redux/actions';

export function useChatMessagesList() {
  return useSelector(chatMessagesSelector);
}

export function useChatMessagesAdd() {
  const dispatch = useDispatch();
  return (message) => dispatch(chatMessagesAdd(message));
}
