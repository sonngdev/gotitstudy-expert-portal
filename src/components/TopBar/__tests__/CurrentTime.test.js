import React from 'react';
import { shallow } from 'enzyme';
import { CurrentTime } from '../CurrentTime';

describe('<CurrentTime />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentTime />);
  });

  it('renders', () => {
    const r = () => shallow(<CurrentTime />);
    expect(r).not.toThrow();
  });

  it('shows current time', () => {
    const calendarIcon = wrapper.find('Icon');
    expect(calendarIcon.exists()).toBe(true);
    expect(calendarIcon.prop('name')).toBe('calendar');

    const time = wrapper.text();
    expect(time).not.toBe('Invalid date');
  });
});
