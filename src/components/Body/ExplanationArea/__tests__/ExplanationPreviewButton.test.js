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

    expect(value).toContain('<strong>Theory or Concept</strong><p>This is theory</p>');
    expect(value).toContain('<strong>Step By Step Instructions</strong><img src="/graph" />');
    expect(value).toContain('<strong>Final Answer</strong><span>Answer is 3</span>');
  });

  it('reloads window when modal is confirmed', () => {
    mockWindowReload(() => {
      wrapper.dive().find('Modal').find('.confirm').simulate('click');
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});
