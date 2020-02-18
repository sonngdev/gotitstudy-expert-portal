import { chatMessagesReducer } from '../chatMessages';
import { chatMessagesAdd } from '../../actions';

describe('chatMessages reducer', () => {
  const state = [
    { text: 'foo' },
    { text: 'bar' },
  ];

  it('adds message with action of type add', () => {
    const newMsg = { text: 'baz' };
    const action = chatMessagesAdd(newMsg);
    const newState = chatMessagesReducer(state, action);

    expect(newState).toEqual([...state, newMsg]);
  });

  it('does nothing with action of unrelated type', () => {
    const action = { type: 'qux', message: { text: 'baz' } };
    const newState = chatMessagesReducer(state, action);

    expect(newState).toEqual(state);
  });
});
