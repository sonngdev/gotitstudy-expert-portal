import React from 'react';
import { shallow } from 'enzyme';
import { StopWorkingButton } from '../StopWorkingButton';

describe('<StopWorkingButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StopWorkingButton />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('reloads window when modal is confirmed', () => {
    mockWindowReload(() => {
      const confirm = wrapper.dive().find('Modal').find('.confirm');
      confirm.simulate('click');
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});
