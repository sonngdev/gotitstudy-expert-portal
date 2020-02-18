import { useDispatch, useSelector } from 'react-redux';
import { chatMessagesSelector } from '../../redux/selectors';
import { chatMessagesAdd } from '../../redux/actions';
import { useChatMessagesList, useChatMessagesAdd } from '../useChatMessages';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  __esModule: true,
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => mockDispatch),
}));

describe('useChatMessages hooks', () => {
  describe('useChatMessagesList', () => {
    it('selects chatMessages from store state', () => {
      useChatMessagesList();
      expect(useSelector).toHaveBeenCalledWith(chatMessagesSelector);
    });
  });

  describe('useChatMessagesAdd', () => {
    it('returns a function that dispatches chat messages add action', () => {
      const message = { text: 'foo' };
      const addMessage = useChatMessagesAdd();
      expect(useDispatch).toHaveBeenCalled();

      addMessage(message);
      expect(mockDispatch).toHaveBeenCalledWith(chatMessagesAdd(message));
    });
  });
});
