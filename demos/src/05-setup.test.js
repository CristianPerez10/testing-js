describe('Set', () => {
  beforeAll(() => {
    console.log('before 1');
  });

  beforeEach(() => {
    console.log('before each');
  });

  afterAll(() => {
    console.log('after 1');
  });

  afterEach(() => {
    console.log('after each');
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    expect(2 + 2).toBe(4);
  });

  describe('other set', () => {
    beforeAll(() => {
      console.log('before 2');
    });

    test('case 3', () => {
      expect(2 + 2).toBe(4);
    });

    test('case 4', () => {
      expect(2 + 2).toBe(4);
    });
  });
});
