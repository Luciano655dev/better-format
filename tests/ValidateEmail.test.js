const ValidateEmail = require('../utils/ValidateEmail');

describe('ValidateEmail function', () => {
  // Teste para um e-mail válido
  test('should return true for a valid email', () => {
    const validEmail = 'test@example.com';
    const result = ValidateEmail(validEmail);
    expect(result).toBe(true);
  });

  // Teste para um e-mail com formato inválido
  test('should return false for an invalid email format', () => {
    const invalidFormatEmail = 'invalid-email-format';
    const result = ValidateEmail(invalidFormatEmail);
    expect(result).toBe(false);
  });

  // Teste para um e-mail sem o caractere "@" (arroba)
  test('should return false for an email without "@"', () => {
    const emailWithoutAt = 'no-at-sign';
    const result = ValidateEmail(emailWithoutAt);
    expect(result).toBe(false);
  });

  // Teste para um e-mail sem o domínio
  test('should return false for an email without a domain', () => {
    const emailWithoutDomain = 'test@';
    const result = ValidateEmail(emailWithoutDomain);
    expect(result).toBe(false);
  });

  // Teste para um e-mail sem o domínio de topo (TLD)
  test('should return false for an email without a top-level domain (TLD)', () => {
    const emailWithoutTLD = 'test@example';
    const result = ValidateEmail(emailWithoutTLD);
    expect(result).toBe(false);
  });

  // Adicione mais testes conforme necessário para cobrir outros casos e cenários
});