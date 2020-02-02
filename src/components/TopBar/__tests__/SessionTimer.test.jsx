import React from 'react';
import { shallow } from 'enzyme';
import { SessionTimer } from '../SessionTimer';

describe('<SessionTimer />', () => {
  let wrapper;

  beforeAll(() => jest.useFakeTimers());

  afterAll(() => jest.useRealTimers());

  beforeEach(() => {
    wrapper = shallow(<SessionTimer />);
  });

  it('renders', () => {
    const r = () => shallow(<SessionTimer />);
    expect(r).not.toThrow();
  });

  // TODO: remove literal string here
  it('starts off at 5 minutes', () => {
    const timeLeft = wrapper.find('.stat');
    expect(timeLeft.text()).toBe('05:00');
  });

  it.skip('counts down as time passes', () => {
    jest.advanceTimersByTime(2000);
    const time1 = wrapper.find('.stat');
    expect(time1.text()).toBe('04:58');

    jest.advanceTimersByTime(7000);
    const time2 = wrapper.find('.stat');
    expect(time2.text()).toBe('04:51');
  });

  // TODO: refactor reload
  it.skip('reloads the page when time is up', () => {
    const { location } = window;
    delete window.location;
    window.location = { reload: jest.fn() };

    jest.advanceTimersByTime(300000);
    expect(window.location.reload).toHaveBeenCalled();

    window.location = location;
  });
});
