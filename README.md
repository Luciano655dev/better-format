# better-format

![GitHub repo size](https://img.shields.io/github/repo-size/Luciano655dev/better-format?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Luciano655dev/better-format?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Luciano655dev/better-format?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/Luciano655dev/better-format?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/Luciano655dev/better-format?style=for-the-badge)

> Um Pacote NPM para facilitar sua vida na hora de formatar e pegar informações sobre variáveis </br>
> <a href="https://www.npmjs.com/package/better-format"> Acesse o projeto no site do NPM </a> </br>
> <a href="https://github.com/Luciano655dev/better-format"> Acesse o projeto no GitHub </a> </br>

### Ajustes e melhorias
O projeto ainda está em desenvolvimento, com o tempo, novas funcionalidades serão adicionadas, como:
- [X] Formatar Strings
- [X] Verificar e-mail
- [X] Verificar CPF
- [ ] Formatar Numeros
- [ ] etc...

## 💻 Pré-requisitos

Para instalar este pacote, você precisa:

- `NodeJS` Instalado
- Uma máquina `Windows`, `Linux`, ou `Mac`.
- Ler a documentação :)

## 📖 Como ler a documentação
As funções estarão nesse formato: </br>
### `NomeDaFunção()` </br>
```js
NomeDaFunção(parametroObrigatório, ?parametroOpicional)
```
Explicação da função </br>
#### Parametros
  - `nomeDoParametro (tipo)` `valor default`
#### Retorno
  - `(tipo)` `retorno da função`

## 📞 Contato
- <a href='https://twitter.com/Luciano655dev'>Twitter: @Luciano655dev</a>
- <a href='https://github.com/Luciano655dev'>GitHub: @Luciano655dev</a>
- <a href='https://discord.com'>Discord: @Luciano655 (antes Luciano655#7898)</a>

## 📫 Contribua

Para contribuir com esse projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Luciano655dev">
        <img src="https://avatars.githubusercontent.com/u/83819836?v=4" width="100px;"/><br>
        <sub>
          <b>Luciano655dev</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Yagasaki7K">
        <img src="https://avatars.githubusercontent.com/u/23272064?v=4" width="100px;"/><br>
        <sub>
          <b>Yagasaki7K</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

</br>
</br>

# As informações do projeto começam aqui

</br>
</br>

## 🚀 Instalação

Para instalar, é só rodar o comando: 

```
npm i better-format
```

## ☕ Como utilizar

Primeiro, coloque um `require` no topo dos arquivos que você irá utilizar, por exemplo:

```js
const bt = require('better-format');
```
Você pode colocar o nome que preferir no lugar de `bt`

## 🖥️ Funções
### `FormatString()`
```js
bf.FormatString(string, ?{ wordCase, removeSpaces, removeSpecialChars, capitalize }, ?{ obscenities, censorshipChar, leetspeak })
```
Essa função irá:
- deixar o texto todo em minúsculo
- retirar espaços
- retirar caracteres especiais (#$%¨)
- Censurar palavrões e outras palavras (opicional)
#### Parametros
- `string (string)` - a string que será formatada </br>
- `{ wordCase, removeSpaces, removeSpecialChars, capitalize }` - objeto opicional para personalizar a formatação da String
  - `wordCase (string, can be 'lower', 'upper' or '')` `default: 'lower'` - Fala se as letras serão colocadas todas em minusculo ou maiusculo, utilize '' (string vazia) para não modifica-las.
  - `removeSpaces (boolean)` `default: true` - Remove ou não os espaços da string.
  - `removeSpecialChars (boolean)` `default: true` - Remove ou não os caracteres especiais (tudo que não seja letra e número) da string.
  - `capitalize (string or array of strings)` `default: ''` - Deixa uma letra maiuscula depois de todas as strings passadas na string inicial. Utilize '' para não modificar
    - Exemplo: `capitalize: '. '` - 'ele é legal. outra frase. olha isso' -> 'Ele é legal. Outra frase. Olha isso'
    - Exemplo: `capitalize: ['. ', '5 ']` - 'frase bacana. nós temos 5 pessoas' -> 'Frase Bacana. Nós temos 5 Pessoas'
    - A implementação de Regex para essa função será adicionada nas próximas atualizações. <a href="https://github.com/Luciano655dev/better-format">Você também pode contribuir.</a>
- `{ obscenities, censorshipChar, leetspeak }` - valor opicional, se for declarado, a string irá censurar palavrões
  - `obscenities (array of strings)` `default: []` - uma Array com as palavras censuradas. Caso esteja vazia, apenas as palavras no banco de dados serão censuradas (alguns palavrões em inglês).
  - `censorshipChar (char)` `default: '#'` - O caractere que substituirá as letras da palavra censurada. Para retirar a palavra censurada, utilize '' como valor dessa variável;
  - `leetspeak (boolean)` `default: true` - irá ou não considerar numeros que se parecem com letras na hora de procurar palavras. Ex: h3ll0
#### Retorno
- `(string)` - retorna uma string com o valor da string formatada.

### `RemoveCurseWords()`
```js
bf.RemoveCurseWords(string, ?obscenities, ?censorshipChar, ?leetspeak)
```
Essa função irá censurar palavrões e palaras específicas. Mesma utilizada na `FormatString()`
#### Parametros
- `string (string)` - a string que será formatada </br>
- `obscenities (array of strings)` `default: []` - uma Array com as palavras censuradas. Caso esteja vazia, apenas as palavras no banco de dados serão censuradas (alguns palavrões em inglês).
- `censorshipChar (char)` `default: '#'` - O caractere que substituirá as letras da palavra censurada. Para retirar a palavra censurada, utilize '' como valor dessa variável;
- `leetspeak (boolean)` `default: true` - irá ou não considerar numeros que se parecem com letras na hora de procurar palavras. Ex: h3ll0
#### Retorno
- `(string)` - retorna uma string com o valor da string censurada.

### `ValidateCPF()`
```js
bf.ValidateCPF(cpf)
```
Essa função irá validar um CPF, retornando `true` se for válido e `false` se for inválido.
#### Parametros
- `cpf (string/number)` - O CPF que será validado. </br>
#### Retorno
- `{ isValid: false }` - Caso o CPF seja inválido. </br>s
- `{ isValid: true, cleanCPF: string }` - Caso o CPF seja válido, onde o `cleanCPF` é apenas a parte numérica do CPF. </br>

### `ValidateCNPJ()`
```js
bf.ValidateCNPJ(cnpj)
```
Essa função irá validar um CNPJ, retornando `true` se for válido e `false` se for inválido.
#### Parametros
- `cnpj (string/number)` - O CNPJ que será validado. </br>
#### Retorno
- `{ isValid: false }` - Caso o CNPJ seja inválido. </br>
- `{ isValid: true, cleanCNPJ: string }` - Caso o CNPJ seja válido, onde o `cleanCNPJ` é apenas a parte numérica do CNPJ. </br>

### `ValidateCEP()`
```js
await bf.ValidateCEP(cep)
```
Essa função irá validar e retornar as informações de um CEP de acordo com a <a href="https://viacep.com.br">API ViaCEP</a>.
**NOTA: Essa é uma PROMISE, portanto, para utiliza-la, será preciso do <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch">`.then().catch()`</a> ou de uma <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function">função assíncrona (`async/await`)</a>**
#### Parametros
- `cep (string/number)` - O cep que será validado. </br>
#### Retorno
- `{ isValid, cleanCEP, logradouro, complemento, bairro, cidade, estado }` - Caso seja ``true``
  - `isValid (bool)` - Um booleano, sendo `true` quando é válido e `false` quando não é válido.
  - `cleanCEP (string)` - Uma string com o valor do CEP formatado.
  - `logradouro (string)` - O logradouro referente ao CEP (Ex: ``'Avenida Paulista'``).
  - `complemento (string)` - O complemento referente ao CEP (Ex: ``'numero 243, apartamento 502'``).
  - `bairro` - O bairro referente ao CEP (Ex: `'Liberdade'`).
  - `cidade` - A cidade referente ao CEP (Ex: `'São Paulo'`).
  - `estado` - A sigla do estado referente ao CEP (Ex: `'SP'`).
- `{ isValid, errorMsg }` - Caso seja ``false``
  - `isValid (bool)` - Um booleano, sendo `true` quando é válido e `false` quando não é válido.
  - `errorMsg (string)` - A mensagem de erro referente ao erro (em português).

### `ValidatePhoneNumber()`
```js
bf.ValidatePhoneNumber(phoneNumber, ?localização)
```
Essa função irá validar um Número de Telefone de qualquer país, <a href="https://www.npmjs.com/package/google-libphonenumber">mais informações Aqui</a>.
#### Parametros
- `phoneNumber (string)` - O nº de telefone que será validado, precisa começar com '+' seguido do código do pais, exemplo: `+## ## #####-####`. </br>
- `localização (string)` - A sigla do país ('BR', 'US', etc). Caso seja preenchido, a função irá verificar se o número é daquele país. </br>
#### Retorno
- caso negado - `{ valid: false, locality: null }` - Caso o telefone não pertença ao país especificado (se for especificado) ou não seja válido. </br>
- caso aceito - `{ valid: true, locality, nationalNumber, extension, countrySourceCode, numberType }` - Caso o telefone seja válido e pertença ao pais especificado (se for especificado). </br>
  - `valid (boolean)` - `true` se for valido e `false` se for inválido.
  - `locality (string)` - Sigla do país do número ('BR', 'US', etc).
  - `nationalNumber (number)` - Seu número nacional, sem o código do país, como `+## ## #####-###` -> `#########`.
  - `extension (string)` - Mostra o <a href="https://www.dicomp.com.br/noticia/30/telefone-ramal-saiba-o-que-e-e-de-que-maneira-ele-pode-facilitar-a-sua-vida">ramal do telefone</a> (se possuir).
  - `countrySourceCode (number)` - Imprime o ramal do telefone em comparação com <a href="https://www.javadoc.io/doc/com.googlecode.libphonenumber/libphonenumber/8.8.0/com/google/i18n/phonenumbers/class-use/Phonenumber.PhoneNumber.CountryCodeSource.html">i18n.phonenumbers.CountryCodeSource</a> .
  - `numberType (number)` - Resultado de `getNumberType()` quando comparado a <a href="https://www.javadoc.io/doc/com.googlecode.libphonenumber/libphonenumber/8.8.7/com/google/i18n/phonenumbers/PhoneNumberUtil.PhoneNumberType.html">i18n.phonenumbers.PhoneNumberType</a>.

### `ValidateEmail()`
```js
bf.ValidateEmail(email)
```
Essa função irá validar um e-mail, retornando `true` se for válido e `false` se for inválido.
#### Parametros
- `email (string)` - O e-mail que será validado. </br>
#### Retorno
- `(boolean)` - `true` caso o e-mail seja válido e `false` caso seja inválido. </br>

### `ParseURL()`
```js
bf.ParseURL(url)
```
Essa função irá retornar informações diversas sobre uma URL.
#### Parametros
- `url (string)` - A URL que será validado. </br>
#### Retorno
- `{ urlObj, protocol, subdomain, domain, port, path, query, parameters, fragment }` - As informações da URL, onde: </br>
  - `urlObj (object)` - retorna o <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/URL">`new URL(url)`</a> completo.
  - `protocol (string)` - retorna o protocolo da URL (http/https).
  - `subdomain (string/null)` - retorna o subdomínio da URL ou `null` caso não tenha.
  - `domain (string)` - retorna o domínio principal da URL ou uma string vazia `""` caso não tenha.
  - `port (string)` - retorna a porta da URL ou uma string vazia `""` caso não tenha.
  - `path (string)` - retorna os caminhos da URL ou uma string vazia `""` caso não tenha.
  - `query (string)` - retona a query da URL ou uma string vazia `""` caso não tenha.
  - `parameters (object)` - retorna os parametros da URL ou um objeto vazio `{}` caso não tenha.
  - `fragment (string)` - retorna os fragmentos da URL ou uma string vazia `""` caso não tenha.

### `ValidateCreditCard()`
```js
bf.ValidateCreditCard(creditCardNumber)
```
Essa função irá validar um cartão, retornando `true` e `bank (string)` se for válido e `false` se for inválido.
#### Parametros
- `creditCardNumber (string/number)` - O número do cartão que será validado. </br>
#### Retorno
- `(boolean)` - `true` caso o e-mail seja válido e `false` caso seja inválido. </br>
- `bank (string/undefined)` - `nomeDaBandeira` caso seja definida e esteja pre-definida no código e `undefined` caso não tenha ou não esteja pre-definida.

### `ValidatePassword()`
```js
bf.ValidatePassword(password, ?{ minLength, needNumbers, needUppercaseLetters, needSpecialChars, commonWords })
```
Essa função irá validar uma senha, retornando uma pontuação para ela, mostrando se é ou não é válida e retornando os testes aprovados e recusados.
#### Parametros
- `creditCardNumber (string/number)` - O número do cartão que será validado. </br>
- `{ minLength, needNumbers, needUppercaseLetters, needSpecialChars, commonWords }` - Objeto opicional para personalizar a validação, onde:
  - `minLength (string)` `default: 8` - Tamanho mínimo para a senha. Sendo `0` quando não tem tamanho mínimo.
  - `needNumbers (boolean)` `default: true` - Se precisa ou não de números.
  - `needUppercaseLetters (boolean)` `default: true` - Se precisa ou não de alguma letra maiúscula.
  - `needSpecialChars (boolean)` `default: true` - Se precisa ou não de algum caractere especial.
  - `commonWords (array of strings)` `default: ["123", "abc"]` - Lista de palavras que não podem ser usadas na senha, por serem muito comuns ou por conterem informações pessoais. Sendo `false` ou `[]` para não ter palavras comuns.
#### Retorno
- `{ verifications, totalPoints, isValid }`
  - `verifications (object of booleans)` - Um objeto com todas as verificações, de mesmo nome dos parâmetros, com `true` caso a senha passe e `false` caso não passe da verificação.
  - `totalPoints (number)` - numero com a pontuação da seha de acordo com as verificações.
  - `isValid (boolean)` - Boolean retornando `true` caso a pontuação seja acima de 0 e `false` caso seja abaixo.
