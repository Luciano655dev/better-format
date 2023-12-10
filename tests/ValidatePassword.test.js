const ValidatePassword = require('../utils/ValidatePassword');

describe('ValidatePassword function', () => {
  // Teste para uma senha válida
  test('should return true for a valid password', () => {
    const validPassword = 'StrongPass123!';
    const result = ValidatePassword(validPassword);
    expect(result.isValid).toBe(true);
  });

  // COLOCAR MAIS TESTES APÓS ATUALIZAR A FUNÇÃO
});