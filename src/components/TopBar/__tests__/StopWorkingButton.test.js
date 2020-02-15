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
});
