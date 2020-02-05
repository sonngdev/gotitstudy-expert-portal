import React from 'react';
import { Form } from '@gotitinc/design-system';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';
import { chatMessagesAdd } from '../../../../redux/actions';
import { ChatInput } from '../ChatInput';

describe('<ChatInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ChatInput />
      </Provider>,
    );
  });

  it('dispatches add message action when user submit message', () => {
    const spy = jest.spyOn(store, 'dispatch');
    spy.mockImplementation(jest.fn());

    const message = 'Hello, how can I help?';
    const input = wrapper.find(Form.Input);
    const form = wrapper.find(Form);
    const payload = chatMessagesAdd({
      type: 'sender',
      avatar: 'expert',
      text: message,
    });

    input.simulate('change', { target: { value: message } });
    form.simulate('submit');

    expect(spy).toHaveBeenCalledWith(payload);

    spy.mockRestore();
  });
});
