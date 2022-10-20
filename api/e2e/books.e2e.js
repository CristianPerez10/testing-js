const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Tests for hello endpoint', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 1998,
          author: 'Pepito Perez',
        },
        {
          name: 'Book 1',
          year: 1998,
          author: 'Pepito Perez',
        },
      ]);

      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
