function ValidateCNPJ(cnpj) {
  cnpj = cnpj.toString().replace(/[^\d]+/g, '')

  if (cnpj.length !== 14) // Verificar se o CNPJ possui 14 dígitos
    return new Error('Invalid CNPJ', { isValid: false, errMsg: 'Wrong size CNPJ' })
  if (/^(\d)\1+$/.test(cnpj))
    return new Error('Invalid CNPJ', { isValid: false, errMsg: 'CNPJ composed of equal numbers' }) // Verificar se todos os dígitos são diferentes

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
  if (resultado != digits.charAt(0)) return new Error('Invalid CNPJ', { isValid: false, errMsg: 'Invalid CNPJ number' })

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
  if (resultado != digits.charAt(1)) return new Error('Invalid CNPJ', { isValid: false, errMsg: 'Invalid CNPJ number' })

  return{
    isValid: true,
    cleanCNPJ: cnpj
  }
}

module.exports = ValidateCNPJ