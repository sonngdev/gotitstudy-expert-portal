import React from 'react';
import { shallow } from 'enzyme';
import { ExplanationPreviewButton } from '../ExplanationPreviewButton';

describe('<ExplanationPreviewButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ExplanationPreviewButton
        explanations={[
          '<p>This is theory</p>',
          '<img src="/graph" />',
          '<span>Answer is 3</span>',
        ]}
      />,
    );
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('displays TinyEditor in modal', () => {
    const modal = wrapper.dive().find('Modal');
    expect(modal.find('TinyEditor').exists()).toBe(true);
  });

  it('displays the explanations of all 3 sections', () => {
    const value = wrapper.dive().find('TinyEditor').prop('value');

    expect(value).toContain('<h4>Theory or Concept</h4><p>This is theory</p>');
    expect(value).toContain('<h4>Step By Step Instructions</h4><img src="/graph" />');
    expect(value).toContain('<h4>Final Answer</h4><span>Answer is 3</span>');
  });

  it('reloads window when modal is confirmed', () => {
    mockWindowReload(() => {
      wrapper.dive().find('Modal').find('.confirm').simulate('click');
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});
