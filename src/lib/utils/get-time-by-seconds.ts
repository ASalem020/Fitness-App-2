/**
 * Returns the current Unix timestamp in seconds.
 *
 * Useful for APIs or timers that expect epoch time in seconds instead of
 * JavaScript's default milliseconds.
 *
 * @returns Current time as a floating-point number of seconds since
 */
export function getTimeBySeconds() {
  const now = new Date().getTime();

  return Number((now / 1000).toFixed());
}
