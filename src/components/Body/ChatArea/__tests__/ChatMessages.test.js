import React from 'react';
import { shallow } from 'enzyme';
import { useChatMessagesList, useScrollToBottom } from '../../../../utils';
import { ChatMessages } from '../ChatMessages';

/**
 * Prefix variable with `mock` so it gets hoisted along with `jest.mock`
 */
const mockMessages = [
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
];

jest.mock('../../../../utils', () => ({
  __esModule: true,
  useChatMessagesList: jest.fn(() => mockMessages),
  useScrollToBottom: jest.fn(),
}));

describe('<ChatMessages />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChatMessages />);
  });

  it('gets messages from custom hook', () => {
    expect(useChatMessagesList).toHaveBeenCalled();
  });

  it('scrolls to bottom after every render', () => {
    expect(useScrollToBottom).toHaveBeenCalled();
  });

  it('renders all messages in the conversation in order', () => {
    const chats = wrapper.find('BubbleChat');
    expect(chats.length).toBe(mockMessages.length);
    expect(chats.at(0).prop('text')).toBe(mockMessages[0].text);
    expect(chats.at(2).prop('text')).toBe(mockMessages[2].text);
  });
});
