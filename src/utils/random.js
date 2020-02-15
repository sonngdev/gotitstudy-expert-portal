/**
 * For trivial randomness, this solution is sufficient
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 */
export function weakRandomString(len) {
  if (len >= 10) throw new Error('String length must be smaller than 10');
  return Math.random().toString(36).substring(2, 2 + len);
}
