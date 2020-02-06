export function formatCountdownTimer(milisecond) {
  const minute = Math.floor(milisecond / 1000 / 60);
  const second = Math.floor(milisecond / 1000) - 60 * minute;

  return [minute, second].map((n) => String(n).padStart(2, '0')).join(':');
}
