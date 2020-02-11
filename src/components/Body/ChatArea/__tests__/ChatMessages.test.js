import React from 'react';
import { shallow } from 'enzyme';
import { useChatMessages, useScrollToBottom } from '../../../../utils';
import { ChatMessages } from '../ChatMessages';

jest.mock('../../../../utils', () => ({
  __esModule: true,
  useChatMessages: jest.fn(() => [
    {
      type: 'reviser',
      avatar: 'asker',
      text: 'How do you do this?',
    },
    {
      type: 'system',
      avatar: 'gotit',
      text: 'This is a system message from Got It!.',
    },
    {
      type: 'sender',
      avatar: 'expert',
      text: 'Let me take a look.',
    },
  ]),
  useScrollToBottom: jest.fn(),
}));

describe('<ChatMessages />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChatMessages />);
  });

  it('get messages from custom hook', () => {
    expect(useChatMessages).toHaveBeenCalled();
  });

  it('scrolls to bottom after every render', () => {
    expect(useScrollToBottom).toHaveBeenCalled();
  });

  it('renders all messages in the conversation in order', () => {
    const chats = wrapper.find('BubbleChat');
    expect(chats.length).toBe(3);
    expect(chats.at(0).prop('type')).toBe('reviser');
    expect(chats.at(2).prop('type')).toBe('sender');
  });
});
