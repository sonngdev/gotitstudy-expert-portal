import React from 'react';
import { shallow } from 'enzyme';
import { ExplanationPreviewButton } from '../ExplanationPreviewButton';

describe('<ExplanationPreviewButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExplanationPreviewButton />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
