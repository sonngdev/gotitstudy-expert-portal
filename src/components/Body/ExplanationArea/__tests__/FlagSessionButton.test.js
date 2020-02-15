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
});
