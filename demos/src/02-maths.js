function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  // eslint-disable-next-line eqeqeq
  if (b == 0) return null;
  return a / b;
}

function exponential(exponent) {
  return 2 ** exponent;
}

module.exports = {
  sum, multiply, division, exponential,
};
