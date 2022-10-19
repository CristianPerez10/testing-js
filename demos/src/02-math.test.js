const {
  sum, multiply, division, exponential,
} = require('./02-maths');

test('adds 1 + 3 should be 4', () => {
  const response = sum(1, 3);
  expect(response).toBe(4);
});

test('multiplication should be 4', () => {
  const response = multiply(1, 4);
  expect(response).toBe(4);
});

test('division should be 4', () => {
  const response = division(8, 2);
  expect(response).toBe(4);
});

test('should divide by zero', () => {
  const division1 = division(2, 0);
  expect(division1).toBeNull();

  const division2 = division(4, 0);
  expect(division2).toBeNull();
});

test('exponential test', () => {
  const exponent = exponential(-1);
  expect(exponent).toBe(0.5);
});
