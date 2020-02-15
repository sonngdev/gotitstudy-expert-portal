import React from 'react';
import { shallow } from 'enzyme';
import { ExplanationFooter } from '../ExplanationFooter';

describe('<ExplanationFooter />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExplanationFooter />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('contains a button to end session', () => {
    expect(wrapper.find('EndSessionButton').exists()).toBe(true);
  });

  it('contains a button to flag session', () => {
    expect(wrapper.find('FlagSessionButton').exists()).toBe(true);
  });

  it('contains a button to preview explanation', () => {
    expect(wrapper.find('PreviewButton').exists()).toBe(true);
  });
});
