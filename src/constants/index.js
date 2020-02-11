export const DEFAULT_TIMEZONE = 'America/Chicago';
/**
 * `z` is deprecated in moment, but not in moment-timezone.
 *
 * We need to use `z` in our format, but we cannot test the output by trying
 * to parse it back (using moment) to see if it is valid. This is because to
 * moment (at least in newer versions) it is not.
 *
 */
export const LONG_TIME_FORMAT = 'MMM D, YYYY HH:mm:ss z';
/**
 * A session is 5 minutes (300,000 miliseconds) long.
 */
export const SESSION_DURATION = 300000;
