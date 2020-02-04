import React from 'react';
import { shallow } from 'enzyme';
import { ChatArea } from '../ChatArea';

describe('<ChatArea />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChatArea />);
  });

  it('renders', () => {
    const r = () => shallow(<ChatArea />);
    expect(r).not.toThrow();
  });

  it('contains chat messages', () => {
    const messages = wrapper.find('ChatMessages');
    expect(messages.exists()).toBe(true);
  });

  it('contains a chat input field', () => {
    const input = wrapper.find('ChatInput');
    expect(input.exists()).toBe(true);
  });
});
