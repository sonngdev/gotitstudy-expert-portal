import moment from 'moment-timezone';

export function getCstTime() {
  return moment().tz('America/Chicago').format('MMM D, YYYY HH:mm:ss z');
}
