/**
 * Returns how many steps there are from n to the root
 * @param n
 * @return {number}
 */
exports.howManySteps = (n) => {
  const root = Math.ceil(Math.sqrt(n));
  const curR = root % 2 !== 0 ? root : root + 1;
  const numR = (curR - 1) / 2;
  const cycle = n - ((curR - 2) ** 2);
  const innerOffset = cycle % (curR - 1);
  return numR + Math.abs(innerOffset - numR);
}