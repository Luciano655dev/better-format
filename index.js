const ValidatePhoneNumber = require('./utils/ValidatePhoneNumber')
const FormatString = require('./utils/FormatString')
const RemoveCurseWords = require('./utils/RemoveCurseWords')
const ValidateCPF = require('./utils/ValidateCPF')
const ValidateEmail = require('./utils/ValidateEmail')
const ParseURL = require('./utils/ParseURL')

function FormatNumber(n){
    return Math.floor(Number(n))
}

module.exports = {
    FormatString,
    RemoveCurseWords,
    ValidateCPF,
    ValidatePhoneNumber,
    ValidateEmail,
    ParseURL
}