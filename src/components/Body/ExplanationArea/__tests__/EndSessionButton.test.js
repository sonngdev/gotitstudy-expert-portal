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
});
