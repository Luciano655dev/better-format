const ValidateCPF = require('../utils/ValidateCPF');

describe('ValidateCPF function', () => {
  // Teste para um CPF válido
  test('should return true for a valid CPF', () => {
    const validCPF = '123.456.789-09';
    const result = ValidateCPF(validCPF);
    expect(result.isValid).toBe(true);
    expect(result.cleanCPF).toBe('12345678909');
  });

  // Teste para um CPF inválido
  test('should return false for an invalid CPF', () => {
    const invalidCPF = '111.111.111-11';
    const result = ValidateCPF(invalidCPF);
    expect(result.isValid).toBe(false);
  });

  // Teste para um CPF com dígitos repetidos
  test('should return false for a CPF with repeated digits', () => {
    const repeatedDigitsCPF = '000.000.000-00';
    const result = ValidateCPF(repeatedDigitsCPF);
    expect(result.isValid).toBe(false);
  });

  // Teste para um CPF com formato inválido
  test('should return false for a CPF with invalid format', () => {
    const invalidFormatCPF = '1234567890123456';
    const result = ValidateCPF(invalidFormatCPF);
    expect(result.isValid).toBe(false);
  });
});