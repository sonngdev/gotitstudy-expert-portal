import React from 'react';
import { Form } from '@gotitinc/design-system';
import { shallow } from 'enzyme';
import { useChatMessagesAdd } from '../../../../utils';
import { ChatInput } from '../ChatInput';

/**
 * Prefix variable with `mock` so it gets hoisted along with `jest.mock`
 */
const mockAddMessage = jest.fn();

jest.mock('../../../../utils', () => ({
  __esModule: true,
  useChatMessagesAdd: jest.fn(() => mockAddMessage),
}));

describe('<ChatInput />', () => {
  let wrapper;

  const changeInput = (value) => {
    wrapper.find(Form.Input).simulate('change', { target: { value } });
  };
  const submitForm = () => {
    wrapper.find(Form).simulate('submit', { preventDefault: () => {} });
  };

  beforeEach(() => {
    wrapper = shallow(<ChatInput />);
    mockAddMessage.mockClear();
  });

  it('gets message adder from custom hook', () => {
    expect(useChatMessagesAdd).toHaveBeenCalled();
  });

  it('binds input', () => {
    const message = 'Ok, what\'s the problem?';
    changeInput(message);
    expect(wrapper.find(Form.Input).prop('value')).toBe(message);
  });

  it('calls message adder when user submits a non-empty message', () => {
    const message = 'Hello, how can I help?';
    changeInput(message);
    submitForm();

    const messageObj = { type: 'sender', avatar: 'expert', text: message };
    expect(mockAddMessage).toHaveBeenCalledWith(messageObj);
  });

  it('ignores empty messages', () => {
    submitForm();
    expect(mockAddMessage).not.toHaveBeenCalled();
  });

  it('trims whitespace in input', () => {
    changeInput('     Hello, how can I help? \t  \n');
    submitForm();

    const messageObj = { type: 'sender', avatar: 'expert', text: 'Hello, how can I help?' };
    expect(mockAddMessage).toHaveBeenCalledWith(messageObj);
  });

  it('ignores messages with only whitespace', () => {
    changeInput('     \t\n');
    submitForm();

    expect(mockAddMessage).not.toHaveBeenCalled();
  });

  it('resets input after each submission', () => {
    changeInput('Ok, what\'s the problem?');
    submitForm();

    expect(wrapper.find(Form.Input).prop('value')).toBe('');
  });
});
