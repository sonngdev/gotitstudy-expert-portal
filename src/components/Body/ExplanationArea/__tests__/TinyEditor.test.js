import React from 'react';
import { shallow } from 'enzyme';
import { TinyEditor } from '../TinyEditor';

describe('<TinyEditor />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TinyEditor id="tiny-editor"/>);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
