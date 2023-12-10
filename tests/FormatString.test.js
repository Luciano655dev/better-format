const FormatString = require('../utils/FormatString');
const RemoveCurseWords = require('../utils/RemoveCurseWords');

// teste do RemoveCurseWords (https://jestjs.io/pt-BR/docs/mock-functions)
jest.mock('../utils/RemoveCurseWords', () => jest.fn());

describe('FormatString function', () => {
  test('should return the same string with default formatting options', () => {
    const result = FormatString('Hello, World!');
    expect(result).toBe('helloworld');
  });

  test('should format, without removing spaces or special characters or changing the case of the letters', () => {
    const result = FormatString('Hello, World! 123', { removeSpaces: false, removeSpecialChars: false, wordCase: '' });
    expect(result).toBe('Hello, World! ');
  });
});