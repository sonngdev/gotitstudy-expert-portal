import React from 'react';
import { shallow } from 'enzyme';
import { ExplanationEditors } from '../ExplanationEditors';

describe('<ExplanationEditors />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExplanationEditors />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('contains three sections, each with title and editor', () => {
    expect(wrapper.find('h5')).toHaveLength(3);
    expect(wrapper.find('TinyEditor')).toHaveLength(3);
  });

  it('has Theory or Concept as the first section', () => {
    expect(wrapper.find('h5').at(0).text()).toBe('Theory or Concept');
  });

  it('has Step By Step Instructions as the second section', () => {
    expect(wrapper.find('h5').at(1).text()).toBe('Step By Step Instructions');
  });

  it('has Final Answer as the third section', () => {
    expect(wrapper.find('h5').at(2).text()).toBe('Final Answer');
  });
});
