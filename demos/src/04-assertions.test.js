// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastName = 'molina';
  expect(data).toEqual({ name: 'nico', lastName: 'molina' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
});

test('null', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('cristoph').toMatch(/stop/);
});

test('arrays', () => {
  expect([1, 2]).toContain(2);
});
