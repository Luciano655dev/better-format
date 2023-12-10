const ValidatePhoneNumber = require('../utils/ValidatePhoneNumber');

describe('ValidatePhoneNumber function', () => {
  // Teste para um número de telefone válido
  test('should return true and provide additional information for a valid phone number', () => {
    const validPhoneNumber = '+1 650-555-0100'; // Example: US phone number
    const countryCode = 'US';

    const result = ValidatePhoneNumber(validPhoneNumber, countryCode);

    expect(result.valid).toBe(true);
    expect(result.locality).toBe('US');
    expect(result.nationlNumber).toBe(6505550100);
  });

  // Teste para um número de telefone inválido
  test('should return false for an invalid phone number', () => {
    const invalidPhoneNumber = 'invalid'; // Invalid phone number
    const result = ValidatePhoneNumber(invalidPhoneNumber);

    expect(result.valid).toBe(false);
    expect(result.locality).toBeNull();
  });

  // Teste para um número de telefone com país não reconhecido
  test('should return false for a phone number with an unrecognized country code', () => {
    const validPhoneNumber = '+1 650-555-0100'; // Example: US phone number
    const unrecognizedCountryCode = 'XX'; // Unrecognized country code

    const result = ValidatePhoneNumber(validPhoneNumber, unrecognizedCountryCode);

    expect(result.valid).toBe(false);
    expect(result.locality).toBeNull();
  });

  // Teste para um número de telefone com mensagem de erro
  test('should return false and provide an error message for a phone number with an error', () => {
    const phoneNumberWithErrorMessage = '+1 650-555-0100'; // Example: US phone number

    // Simulating an error by providing an invalid country code
    const result = ValidatePhoneNumber(phoneNumberWithErrorMessage, 'invalidCountryCode');

    expect(result.valid).toBe(false);
    expect(result.locality).toBeNull();
    expect(result.msg).toBeDefined(); // Check if an error message is provided
  });
});