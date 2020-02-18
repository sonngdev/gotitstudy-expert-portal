import React, * as fromReact from 'react';
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
   */
  ...(jest.requireActual('../../../utils')),
  getCurrentTime: jest.fn(),
}));

/**
 * Another way to mock part of a module. Note that getCurrentTime
 * cannot be mocked this way, as the imported object is read-only.
 */
fromReact.useEffect = jest.fn((fn) => fn());

describe('<CurrentTime />', () => {
  let wrapper;

  beforeEach(() => {
    jest.useFakeTimers();
    /**
     * Use `mockReset` to clear mock return values
     */
    getCurrentTime.mockReset();
    getCurrentTime
      .mockReturnValueOnce(moment(1581473066000).tz(DEFAULT_TIMEZONE))
      .mockReturnValue(moment(1581473067000).tz(DEFAULT_TIMEZONE));
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

  it('shows current time', () => {
    expect(wrapper.text()).toBe('Feb 11, 2020 20:04:26 CST');

    jest.advanceTimersByTime(1000);
    expect(wrapper.text()).toBe('Feb 11, 2020 20:04:27 CST');
  });
});
