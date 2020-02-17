import React from 'react';
import { shallow } from 'enzyme';
import { FlagSessionButton } from '../FlagSessionButton';

describe('<FlagSessionButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FlagSessionButton />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('reloads window when modal is confirmed', () => {
    mockWindowReload(() => {
      wrapper.dive().find('Modal').find('.confirm').simulate('click');
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});
