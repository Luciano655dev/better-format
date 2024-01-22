function ValidateCEP(cep) {
    var regexCEP = /^[0-9]{5}-?[0-9]{3}$/
    cep = cep.toString().replace(/\D/g, '')

    // retorna se o CEP for inválido
    if (!regexCEP.test(cep)) return new Error('Invalid CEP', { isValid: false, error: true })
  
    // Consulta o ViaCEP para obter informações do endereço
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          return new Error('CEP not found', {
            isValid: false,
            error: data.erro
          })
        } else {
          return {
            isValid: true,
            cleanCEP: data.cep,
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          }
        }
      })
      .catch(error => {
        return {
            isValid: true,
            errMsg: 'Error when querying the ViaCEP API (https://viacep.com.br/ws/{SEU_CEP_AQUI}/json)',
            error: new Error('Error when querying the ViaCEP API: '+error)
          }
      });
  }
module.exports = ValidateCEP