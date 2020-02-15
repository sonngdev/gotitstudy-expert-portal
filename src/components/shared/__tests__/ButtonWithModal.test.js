import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '@gotitinc/design-system';
import { ButtonWithModal } from '../ButtonWithModal';

describe('<ButtonWithModal />', () => {
  let wrapper;
  let onConfirm;

  beforeEach(() => {
    onConfirm = jest.fn();

    wrapper = shallow(
      <ButtonWithModal
        buttonProps={{ className: 'button' }}
        buttonAction="Action"
        modalSize="medium"
        modalTitle="Modal title"
        modalBody={<p>Modal body</p>}
        confirmButtonText="Confirm button"
        onConfirm={onConfirm}
      />,
    );
  });

  afterEach(() => {
    onConfirm.mockClear();
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('contains a button', () => {
    const button = wrapper.find('.button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Action');
  });

  it('has a modal that is initially hidden', () => {
    const modal = wrapper.find('Modal');
    expect(modal.exists()).toBe(true);
    expect(modal.prop('show')).toBe(false);
  });

  describe('<Modal />', () => {
    beforeEach(() => {
      wrapper.find('.button').simulate('click');
    });

    it('shows up when button is clicked', () => {
      expect(wrapper.find('Modal').prop('show')).toBe(true);
    });

    it('has the given size', () => {
      expect((wrapper.find('Modal').prop('size'))).toBe('medium');
    });

    it('contains a title', () => {
      const title = wrapper.find(Modal.Title);
      expect(title.exists()).toBe(true);
      expect(title.text()).toBe('Modal title');
    });

    it('contains a body', () => {
      const body = wrapper.find(Modal.Body);
      expect(body.exists()).toBe(true);

      const child = body.childAt(0);
      expect(child.name()).toBe('p');
      expect(child.text()).toBe('Modal body');
    });

    it('contains a confirm button', () => {
      const confirm = wrapper.find('Modal').find('.confirm');
      expect(confirm.exists()).toBe(true);
      expect(confirm.text()).toBe('Confirm button');
    });

    it('hides when cancel button is clicked', () => {
      wrapper.find('Modal').find('.cancel').simulate('click');
      expect(wrapper.find('Modal').prop('show')).toBe(false);
    });

    it('calls onConfirm when confirm button is clicked', () => {
      wrapper.find('Modal').find('.confirm').simulate('click');
      expect(onConfirm).toHaveBeenCalled();
    });
  });
});
