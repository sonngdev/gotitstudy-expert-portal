import moment from 'moment-timezone';

export function getCstTime() {
  return moment().tz('America/Chicago').format('MMM D, YYYY HH:mm:ss z');
}

export function formatCountdownTimer(milisecond) {
  const minute = Math.floor(milisecond / 1000 / 60);
  const second = Math.floor(milisecond / 1000) - 60 * minute;

  return [minute, second].map(n => String(n).padStart(2, '0')).join(':');
}
