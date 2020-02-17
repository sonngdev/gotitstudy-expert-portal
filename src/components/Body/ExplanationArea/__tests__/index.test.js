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

  it('has separate and controlled editors', () => {
    wrapper.find('TinyEditor').at(0).simulate('change', { target: { value: 'foo' } });
    wrapper.find('TinyEditor').at(1).simulate('change', { target: { value: 'bar' } });
    wrapper.find('TinyEditor').at(2).simulate('change', { target: { value: 'baz' } });

    expect(wrapper.find('TinyEditor').at(0).prop('value')).toBe('foo');
    expect(wrapper.find('TinyEditor').at(1).prop('value')).toBe('bar');
    expect(wrapper.find('TinyEditor').at(2).prop('value')).toBe('baz');
  });

  it('includes a footer section', () => {
    expect(wrapper.find('ExplanationFooter').exists()).toBe(true);
  });
});
