import React from 'react';
import { shallow } from 'enzyme';
import { ChatArea } from '../index';

describe('<ChatArea />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChatArea />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
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
