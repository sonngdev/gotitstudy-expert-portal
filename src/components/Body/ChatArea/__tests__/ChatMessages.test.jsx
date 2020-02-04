import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { chatMessages as initialChatMessages } from '../../../../redux/store/chatMessages'
import { chatMessages } from '../../../../redux/store/chatMessages';
import { ChatMessages } from '../ChatMessages';

describe('<ChatMessages />', () => {
  let wrapper;
  const store = configureStore()({ chatMessages });

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ChatMessages />
      </Provider>
    );
  });

  it('renders all messages in the conversation', () => {
    const chats = wrapper.find('BubbleChat');
    expect(chats.length).toBe(initialChatMessages.length);
  });

  it('contains initial messages from asker and system', () => {
    const askerMsg = initialChatMessages.find((msg) => msg.type === 'reviser');
    const systemMsg = initialChatMessages.find((msg) => msg.type === 'system');

    expect(wrapper.text()).toContain(askerMsg.text);
    expect(wrapper.text()).toContain(systemMsg.text);
  });
});
