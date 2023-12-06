function ValidateCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj.length !== 14) return false // Verificar se o CNPJ possui 14 dígitos
  if (/^(\d)\1+$/.test(cnpj)) return false // Verificar se todos os dígitos são diferentes

  // Calculo para verificação #1
  let length = cnpj.length - 2
  let numbers = cnpj.substring(0, length)
  const digits = cnpj.substring(length)
  let sum = 0
  let pos = length - 7

  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--
    if (pos < 2) pos = 9
  }
  let resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (resultado != digits.charAt(0)) return false

  // Calculo para verificação #2
  length = length + 1
  numbers = cnpj.substring(0, length)
  sum = 0
  pos = length - 7

  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--;
    if (pos < 2) pos = 9
  }
  resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (resultado != digits.charAt(1)) return false

  return true
}

module.exports = ValidateCNPJ