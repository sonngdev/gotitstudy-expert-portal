import { CHAT_MESSAGES, chatMessagesAdd } from '../chatMessages';

describe('chatMessages action creators', () => {
  describe('add', () => {
    let action;
    const payload = { foo: 'bar' };

    beforeEach(() => {
      action = chatMessagesAdd(payload);
    });

    it('returns action with correct type', () => {
      expect(action.type).toBe(CHAT_MESSAGES.ADD);
    });

    it('returns action with correct payload', () => {
      expect(action.message).toBe(payload);
    });
  });
});
