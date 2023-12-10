const ValidateCEP = require('../utils/ValidateCEP');

describe('ValidateCEP function', () => {

  // Teste para um CEP válido
  // A ser criado, antes configurar o Jest corretamente

  // Teste para um CEP inválido
  test('should return an error for an invalid CEP', async () => {
    const invalidCEP = 'invalidCEP';

    const result = await ValidateCEP(invalidCEP);

    expect(result.isValid).toBe(false);
    expect(result.error).toBe(true);
    expect(result.errMsg).toBe('CEP Inválido');
  });
});