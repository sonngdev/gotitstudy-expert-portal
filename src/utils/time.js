import moment from 'moment-timezone';
import { DEFAULT_TIMEZONE, LONG_TIME_FORMAT } from '../constants';

export function getCurrentTime() {
  return moment().tz(DEFAULT_TIMEZONE);
}

export function formatLongTime(momentObj) {
  return momentObj.format(LONG_TIME_FORMAT);
}

export function formatCountdownTimer(milisecond) {
  const absMilisecond = Math.abs(milisecond);

  const minute = Math.floor(absMilisecond / 1000 / 60);
  const second = Math.floor(absMilisecond / 1000) - 60 * minute;

  const sign = milisecond < 0 ? '-' : '';
  const min = String(minute);
  const sec = String(second).padStart(2, '0');

  return `${sign}${min}:${sec}`;
}
