const ValidateCNPJ = require('../utils/ValidateCNPJ');

describe('ValidateCNPJ function', () => {
  // Teste para um CNPJ válido
  test('should return true for a valid CNPJ', () => {
    const validCNPJ = '11.222.333/0001-81';
    const result = ValidateCNPJ(validCNPJ);
    expect(result.isValid).toBe(true);
    expect(result.cleanCNPJ).toBe('11222333000181');
  });

  // Teste para um CNPJ inválido
  test('should return false for an invalid CNPJ', () => {
    const invalidCNPJ = '11.111.111/1111-11';
    const result = ValidateCNPJ(invalidCNPJ);
    expect(result.isValid).toBe(false);
  });

  // Teste para um CNPJ com dígitos repetidos
  test('should return false for a CNPJ with repeated digits', () => {
    const repeatedDigitsCNPJ = '00.000.000/0000-00';
    const result = ValidateCNPJ(repeatedDigitsCNPJ);
    expect(result.isValid).toBe(false);
  });

  // Teste para um CNPJ com formato inválido
  test('should return false for a CNPJ with invalid format', () => {
    const invalidFormatCNPJ = '123456789012345';
    const result = ValidateCNPJ(invalidFormatCNPJ);
    expect(result.isValid).toBe(false);
  });
});