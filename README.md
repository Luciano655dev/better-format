# better-format

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

> Um Pacote NPM para facilitar sua vida na hora de formatar e pegar informações sobre variáveis </br>
> <a href="https://www.npmjs.com/package/better-format"> Acesse o projeto no site do NPM </a> </br>
> <a href="https://github.com/Luciano655dev/better-format"> Acesse o projeto no GitHub </a> </br>

### Ajustes e melhorias
O projeto ainda está em desenvolvimento, com o tempo, novas funcionalidades serão adicionadas, como:
- [X] Formatar Strings
- [ ] Formatar Numeros
- [ ] Verificar e-mail
- [ ] Verificar CPF
- [ ] etc...

## 💻 Pré-requisitos

Para instalar este pacote, você precisa:

- `NodeJS` Instalado
- Uma máquina `Windows`, `Linux`, ou `Mac`.
- Ler a documentação :)

## 📖 Como ler a documentação
As funções estarão nesse formato: </br>
### `Nome da função` </br>
```js
Código exemplo (JavaScript)
```
Explicação da função </br>
#### Parametros
  - `nomeDoParametro (tipo)` `valor default`

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
      <a href="#" title="defina o titulo do link">
        <img src="https://avatars.githubusercontent.com/u/83819836?v=4" width="100px;" alt="Foto Luciano655dev Github"/><br>
        <sub>
          <b>Luciano655dev</b>
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
bf.FormatString(string, { obscenities, censorshipChar, leetspeak })
```
Essa função irá:
- deixar o texto todo em minúsculo
- retirar espaços
- retirar caracteres especiais (#$%¨)
- Censurar palavrões e outras palavras (opicional)
#### Parametros
- `string (string)` - a string que será formatada </br>
- `{ obscenities, censorshipChar, leetspeak }` - valor opicional, se for declarado, a string irá censurar palavrões
  - `obscenities (array of strings)` `default: []` - uma Array com as palavras censuradas. Caso esteja vazia, apenas as palavras no banco de dados serão censuradas (alguns palavrões em inglês).
  - `censorshipChar (char)` `default: '#'` - O caractere que substituirá as letras da palavra censurada. Para retirar a palavra censurada, utilize '' como valor dessa variável;
  - `leetspeak (boolean)` `default: true` - irá ou não considerar numeros que se parecem com letras na hora de procurar palavras. Ex: h3ll0

### `RemoveCurseWords()`
```js
bf.RemoveCurseWords(string, obscenities, censorshipChar, leetspeak)
```
Essa função irá censurar palavrões e palaras específicas. Mesma utilizada na `FormatString()`
#### Parametros
- `string (string)` - a string que será formatada </br>
- `obscenities (array of strings)` `default: []` - uma Array com as palavras censuradas. Caso esteja vazia, apenas as palavras no banco de dados serão censuradas (alguns palavrões em inglês).
- `censorshipChar (char)` `default: '#'` - O caractere que substituirá as letras da palavra censurada. Para retirar a palavra censurada, utilize '' como valor dessa variável;
- `leetspeak (boolean)` `default: true` - irá ou não considerar numeros que se parecem com letras na hora de procurar palavras. Ex: h3ll0
</br> </br>
### Mais funções serão adicionadas com o tempo. Contribua!