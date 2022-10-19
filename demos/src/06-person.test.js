const Person = require('./06-person');

// AAA Pattern
// Arrange / Given
// Act / When
// Assert / Then

describe('Test for person', () => {
  // Arrange
  let person;
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('should return down', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    // Arrange
    person.weight = 59;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('normal');
  });
});
