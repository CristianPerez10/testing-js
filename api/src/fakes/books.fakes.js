const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let book = 0; book < limit; book += 1) {
    fakeBooks.push(generateOneBook);
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBooks };
