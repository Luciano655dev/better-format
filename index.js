const ValidPhoneNumber = require('./utils/ValidPhoneNumber')
const FormatString = require('./utils/FormatString')
const RemoveCurseWords = require('./utils/RemoveCurseWords')
const ValidateCPF = require('./utils/ValidateCPF')

function FormatNumber(n){
    return Math.floor(Number(n))
}

module.exports = {
    FormatString,
    RemoveCurseWords,
    ValidateCPF,
    ValidPhoneNumber
}