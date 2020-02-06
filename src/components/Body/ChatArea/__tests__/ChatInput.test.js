import React from 'react';
import { Form } from '@gotitinc/design-system';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';
import { chatMessagesAdd } from '../../../../redux/actions';
import { ChatInput } from '../ChatInput';

describe('<ChatInput />', () => {
  let wrapper;
  let spy;
  let input;
  let form;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ChatInput />
      </Provider>,
    );

    spy = jest.spyOn(store, 'dispatch');
    spy.mockImplementation(jest.fn());

    input = wrapper.find(Form.Input);
    form = wrapper.find(Form);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('dispatches add message action when user submit message', () => {
    const message = 'Hello, how can I help?';
    const payload = chatMessagesAdd({
      type: 'sender',
      avatar: 'expert',
      text: message,
    });

    input.simulate('change', { target: { value: message } });
    form.simulate('submit');

    expect(spy).toHaveBeenCalledWith(payload);
  });

  it('ignores empty messages', () => {
    /**
     * For some reasons, two change simulations are necessary here. If we
     * simulate only the second change (with value ''), or if we simulate
     * no changes at all, the assertion below will not work as expected.
     */
    input.simulate('change', { target: { value: 'Ok, what\'s the problem?' } });
    input.simulate('change', { target: { value: '' } });

    form.simulate('submit');

    expect(spy).not.toHaveBeenCalled();
  });
});
