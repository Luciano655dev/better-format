function ValidateCPF(cpf){
    cpf = cpf.replace(/\D/g, '');

    // Verifica se tem 11 digitos
    if (cpf.length !== 11) return false

    // Verifica se os digitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false

    // Calcular o primeiro dígito verificador e verifica se ele é válido
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i)
    let resto = soma % 11
    let digito1 = resto < 2 ? 0 : 11 - resto
    if (digito1 !== parseInt(cpf.charAt(9))) return false

    // Calcular o segundo dígito verificador e verifica se ele é válido
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i)
    resto = soma % 11
    let digito2 = resto < 2 ? 0 : 11 - resto
    if (digito2 !== parseInt(cpf.charAt(10))) return false

    // CPF é Válido
    return true
}

module.exports = ValidateCPF