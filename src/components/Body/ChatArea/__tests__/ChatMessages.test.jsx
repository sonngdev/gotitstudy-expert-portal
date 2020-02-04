import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';
import { ChatMessages } from '../ChatMessages';

describe('<ChatMessages />', () => {
  let wrapper;
  const messages = store.getState().chatMessages;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ChatMessages />
      </Provider>
    );
  });

  it('renders all messages in the conversation', () => {
    const chats = wrapper.find('BubbleChat');
    expect(chats.length).toBe(messages.length);
  });

  it('contains initial messages from asker and system', () => {
    const askerMsg = messages.find((msg) => msg.type === 'reviser');
    const systemMsg = messages.find((msg) => msg.type === 'system');

    expect(wrapper.text()).toContain(askerMsg.text);
    expect(wrapper.text()).toContain(systemMsg.text);
  });
});
