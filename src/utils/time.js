import moment from 'moment-timezone';
import { DEFAULT_TIMEZONE, LONG_TIME_FORMAT } from '../constants';

export function getCurrentTime() {
  return moment().tz(DEFAULT_TIMEZONE);
}

export function formatLongTime(momentObj) {
  return momentObj.format(LONG_TIME_FORMAT);
}

export function formatCountdownTimer(milisecond) {
  const minute = Math.floor(milisecond / 1000 / 60);
  const second = Math.floor(milisecond / 1000) - 60 * minute;

  return [minute, second].map((n) => String(n).padStart(2, '0')).join(':');
}
