import moment from 'moment-timezone';
import { DEFAULT_TIMEZONE } from '../../constants';
import { getCurrentTime, formatLongTime, formatCountdownTimer } from '../time';

describe('getCurrentTime', () => {
  const time = getCurrentTime();

  it('returns a valid moment object', () => {
    expect(time instanceof moment).toBe(true);
    expect(time.isValid()).toBe(true);
  });

  it('returns time in the default time zone', () => {
    expect(time.tz()).toBe(DEFAULT_TIMEZONE);
  });
});

describe('formatLongTime', () => {
  const time = moment(1581473066000).tz(DEFAULT_TIMEZONE);
  const formatted = formatLongTime(time);

  it('returns the correctly formatted time', () => {
    expect(formatted).toBe('Feb 11, 2020 20:04:26 CST');
  });
});

describe('formatCountdownTimer', () => {
  it('formats correctly for time positive time', () => {
    expect(formatCountdownTimer(606000)).toBe('10:06');
    expect(formatCountdownTimer(360000)).toBe('6:00');
    expect(formatCountdownTimer(58000)).toBe('0:58');
    expect(formatCountdownTimer(4000)).toBe('0:04');
  });

  it('formats correctly for zero time', () => {
    expect(formatCountdownTimer(0)).toBe('0:00');
  });

  it('formats correctly for time positive time', () => {
    expect(formatCountdownTimer(-606000)).toBe('-10:06');
    expect(formatCountdownTimer(-360000)).toBe('-6:00');
    expect(formatCountdownTimer(-58000)).toBe('-0:58');
    expect(formatCountdownTimer(-4000)).toBe('-0:04');
  });
});
