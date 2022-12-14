const mockGetAll = jest.fn();
const request = require('supertest');
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/books.fakes');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Tests for hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
