import React from 'react';
import { shallow } from 'enzyme';
import { PreviewButton } from '../PreviewButton';

describe('<PreviewButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PreviewButton />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
