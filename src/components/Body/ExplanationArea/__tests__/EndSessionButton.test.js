import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '@gotitinc/design-system';
import { EndSessionButton } from '../EndSessionButton';

describe('<EndSessionButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EndSessionButton />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('contains a button', () => {
    const button = wrapper.find('.end-session');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('End session');
  });

  it('has a modal that is initially hidden', () => {
    const modal = wrapper.find('Modal');
    expect(modal.exists()).toBe(true);
    expect(modal.prop('show')).toBe(false);
  });

  describe('<Modal />', () => {
    beforeEach(() => {
      wrapper.find('.end-session').simulate('click');
    });

    it('shows up when button is clicked', () => {
      expect(wrapper.find('Modal').prop('show')).toBe(true);
    });

    it('contains a title', () => {
      const title = wrapper.find(Modal.Title);
      expect(title.exists()).toBe(true);
      expect(title.text()).toBe('Stop working');
    });

    it('contains a body message', () => {
      const body = wrapper.find(Modal.Body);
      expect(body.exists()).toBe(true);
      expect(body.text()).toBe('Are you sure you want to end this session? This action cannot be undone.');
    });

    it('hides when cancel button is clicked', () => {
      wrapper.find('Modal').find('.cancel').simulate('click');
      expect(wrapper.find('Modal').prop('show')).toBe(false);
    });

    it('reloads the page when confirm button is clicked', () => {
      const { location } = window;
      delete window.location;
      window.location = { reload: jest.fn() };

      const confirm = wrapper.find('Modal').find('.confirm');
      confirm.simulate('click');
      expect(window.location.reload).toHaveBeenCalled();

      window.location = location;
    });
  });
});
