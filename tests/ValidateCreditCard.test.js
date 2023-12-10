const ValidateCreditCard = require('../utils/ValidateCreditCard');

describe('ValidateCreditCard function', () => {

  // Teste para um número de cartão de crédito inválido
  test('should return false for an invalid credit card number', () => {
    const invalidCreditCard = '1234567890123456';
    const result = ValidateCreditCard(invalidCreditCard);
    expect(result.isValid).toBe(false);
  });

  // Teste para um número de cartão de crédito com formato inválido
  test('should return false for a credit card number with invalid format', () => {
    const invalidFormatCreditCard = '1234-5678-9012-3456';
    const result = ValidateCreditCard(invalidFormatCreditCard);
    expect(result.isValid).toBe(false);
  });

  // Teste para um número de cartão de crédito com banco não reconhecido
  test('should return undefined for a credit card number with an unrecognized bank', () => {
    const unrecognizedBankCard = '1234567890123456';
    const result = ValidateCreditCard(unrecognizedBankCard);
    expect(result.bank).toBeUndefined();
  });
});