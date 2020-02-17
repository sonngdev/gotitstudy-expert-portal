import React, * as fromReact from 'react';
import { shallow } from 'enzyme';
import { SessionTimer } from '../SessionTimer';
import { SESSION_DURATION } from '../../../constants';
import { formatCountdownTimer } from '../../../utils';

describe('<SessionTimer />', () => {
  let wrapper;

  beforeAll(() => jest.useFakeTimers());

  afterAll(() => jest.useRealTimers());

  beforeEach(() => {
    /**
     * Another way to mock only part of a module.
     * The first way was documented in CurrentTime.test.js
     */
    fromReact.useEffect = jest.fn((fn) => fn());

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

    jest.advanceTimersByTime(7000);
    expect(wrapper.find('.stat').text())
      .toBe(formatCountdownTimer(SESSION_DURATION - 9000));
  });

  it.skip('reloads the page when time is up', () => {
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

  it.skip('has red background at the end', () => {
    jest.advanceTimersByTime(SESSION_DURATION);
    expect(wrapper.hasClass('u-backgroundNegative')).toBe(true);
  });
});
