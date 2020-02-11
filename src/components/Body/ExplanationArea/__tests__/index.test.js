import React from 'react';
import { shallow } from 'enzyme';
import { ExplanationArea } from '../index';

describe('<ExplanationArea />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExplanationArea />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('contains a title and a subtitle', () => {
    expect(wrapper.text()).toContain('Problem explanation');
    expect(wrapper.text()).toContain('Complete all 3 sections before submitting your explanation');
  });
});
