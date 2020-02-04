import React from 'react';
import { shallow } from 'enzyme';
import { SessionTimer } from '../SessionTimer';
import { SESSION_DURATION } from '../../../constants';
import { formatCountdownTimer } from '../../../helpers';

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

  it('starts off at SESSION_DURATION', () => {
    const timeLeft = wrapper.find('.stat');
    expect(timeLeft.text()).toBe(formatCountdownTimer(SESSION_DURATION));
  });

  it.skip('counts down as time passes', () => {
    jest.advanceTimersByTime(2000);
    const time1 = wrapper.find('.stat');
    expect(time1.text()).toBe(formatCountdownTimer(SESSION_DURATION - 2000));

    jest.advanceTimersByTime(7000);
    const time2 = wrapper.find('.stat');
    expect(time2.text()).toBe(formatCountdownTimer(SESSION_DURATION - 9000));
  });

  // TODO: refactor reload
  it.skip('reloads the page when time is up', () => {
    const spy = jest.spyOn(window.location, 'reload');
    spy.mockImplementation(jest.fn());

    jest.advanceTimersByTime(300000);
    expect(window.location.reload).toHaveBeenCalled();

    spy.mockRestore();
  });
});
