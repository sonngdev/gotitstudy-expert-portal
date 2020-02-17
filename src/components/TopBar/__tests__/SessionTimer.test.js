import React, * as fromReact from 'react';
import { shallow } from 'enzyme';
import { SessionTimer } from '../SessionTimer';
import * as fromUtils from '../../../constants';
import { formatCountdownTimer } from '../../../utils';

describe('<SessionTimer />', () => {
  let wrapper;
  /**
   * Mocking SESSION_DURATION because jest's `advanceTimersByTime`
   * does not seem to work well with large numbers.
   */
  const SESSION_DURATION = 10000;

  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
    /**
     * Another way to mock only part of a module.
     * The first way was documented in CurrentTime.test.js
     */
    fromReact.useEffect = jest.fn((fn) => fn());
    fromUtils.SESSION_DURATION = SESSION_DURATION;

    wrapper = shallow(<SessionTimer />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('starts off at the default session duration', () => {
    expect(wrapper.find('.stat').text())
      .toBe(formatCountdownTimer(SESSION_DURATION));
  });

  it('counts down as time passes', () => {
    jest.advanceTimersByTime(2000);
    expect(wrapper.find('.stat').text())
      .toBe(formatCountdownTimer(SESSION_DURATION - 2000));

    jest.advanceTimersByTime(4000);
    expect(wrapper.find('.stat').text())
      .toBe(formatCountdownTimer(SESSION_DURATION - 6000));
  });

  it('reloads the page when time is up', () => {
    const { location } = window;
    delete window.location;
    window.location = { reload: jest.fn() };

    jest.advanceTimersByTime(SESSION_DURATION + 1000);
    expect(window.location.reload).toHaveBeenCalled();

    window.location = location;
  });

  it('has green background at the beginning', () => {
    expect(wrapper.hasClass('u-backgroundPositive')).toBe(true);
  });

  it('has red background at the end', () => {
    const { location } = window;
    delete window.location;
    window.location = { reload: jest.fn() };

    jest.advanceTimersByTime(SESSION_DURATION + 1000);
    expect(wrapper.hasClass('u-backgroundNegative')).toBe(true);

    window.location = location;
  });
});
