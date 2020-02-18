import { chatMessagesSelector } from '../chatMessages';
import { store } from '../../store';
import { chatMessagesInitState } from '../../store/chatMessages';

describe('chatMessages selector', () => {
  it('correctly selects chatMessages in store', () => {
    const selected = chatMessagesSelector(store.getState());
    expect(selected).toEqual(chatMessagesInitState);
  });
});
