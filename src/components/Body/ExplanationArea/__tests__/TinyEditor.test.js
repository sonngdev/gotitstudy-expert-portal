import React from 'react';
import { shallow } from 'enzyme';
import { TinyEditor } from '../TinyEditor';

describe('<TinyEditor />', () => {
  let wrapper;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();

    wrapper = shallow(
      <TinyEditor
        id="tiny-editor"
        value="foo"
        onChange={onChange}
      />,
    );
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('has given initial value', () => {
    expect(wrapper.find('textarea').prop('value')).toBe('foo');
  });

  it('binds input', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'bar' } });
    expect(wrapper.find('textarea').prop('value')).toBe('bar');
  });

  it('calls onChange each time input changes', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'baz' } });
    expect(onChange).toHaveBeenCalledWith('baz');
  });
});
