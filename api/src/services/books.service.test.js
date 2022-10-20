const { generateManyBooks } = require('../fakes/books.fakes');
const BookService = require('./books.service');

// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Hapo',
//   },
//   {
//     _id: 2,
//     name: 'Narnia',
//   },
// ];

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   getAll: spyGetAll,
//   create: () => {},
// };

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Tests for books Service', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
  });

  describe('tests for getBooks', () => {
    test('Should return list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(20);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return name of first book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(2);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
      // expect(mockGetAll).toHaveBeenCalled();
      // expect(mockGetAll).toHaveBeenCalledTimes(1);
      // expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
