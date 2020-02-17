import React from 'react';
import { shallow } from 'enzyme';
import { EndSessionButton } from '../EndSessionButton';

describe('<EndSessionButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EndSessionButton />);
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
