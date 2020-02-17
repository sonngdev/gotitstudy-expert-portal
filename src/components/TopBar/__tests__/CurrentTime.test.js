import React from 'react';
import moment from 'moment-timezone';
import { shallow } from 'enzyme';
import { getCurrentTime } from '../../../utils';
import { DEFAULT_TIMEZONE } from '../../../constants';
import { CurrentTime } from '../CurrentTime';

jest.mock('../../../utils', () => ({
  __esModule: true,
  /**
   * Mock only part of a module, keep original implementation of
   * other functions.
   * https://stackoverflow.com/a/53402206/9744063
   *
   * Another way is documented in SessionTimer.test.js
   */
  ...(jest.requireActual('../../../utils')),
  getCurrentTime: jest.fn(),
}));

describe('<CurrentTime />', () => {
  let wrapper;

  beforeEach(() => {
    /**
     * Use `mockReset` to clear mock return values
     */
    getCurrentTime.mockReset();
    getCurrentTime
      .mockReturnValueOnce(moment(1581473066000).tz(DEFAULT_TIMEZONE))
      .mockReturnValueOnce(moment(1581473067000).tz(DEFAULT_TIMEZONE));
    wrapper = shallow(<CurrentTime />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('contains calendar icon', () => {
    const calendarIcon = wrapper.find('Icon');
    expect(calendarIcon.exists()).toBe(true);
    expect(calendarIcon.prop('name')).toBe('calendar');
  });

  it.skip('shows current time', () => {
    jest.useFakeTimers();

    expect(wrapper.text()).toBe('Feb 11, 2020 20:04:26 CST');

    jest.advanceTimersByTime(1000);
    expect(wrapper.text()).toBe('Feb 11, 2020 20:04:27 CST');

    jest.useRealTimers();
  });
});
