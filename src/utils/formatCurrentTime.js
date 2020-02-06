import moment from 'moment-timezone';
import { DEFAULT_TIMEZONE, CURRENT_TIME_FORMAT } from '../constants';

export function formatCurrentTime() {
  return moment().tz(DEFAULT_TIMEZONE).format(CURRENT_TIME_FORMAT);
}
