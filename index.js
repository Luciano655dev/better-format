const ValidatePhoneNumber = require('./utils/ValidatePhoneNumber')
const FormatString = require('./utils/FormatString')
const RemoveCurseWords = require('./utils/RemoveCurseWords')
const ValidateCPF = require('./utils/ValidateCPF')
const ValidateEmail = require('./utils/ValidateEmail')
const ParseURL = require('./utils/ParseURL')
const ValidateCreditCard = require('./utils/ValidateCreditCard')
const ValidatePassword = require('./utils/ValidatePassword')
const ValidateCNPJ = require('./utils/ValidateCNPJ')
const ValidateCEP = require('./utils/ValidateCEP')
const FormatDate = require('./utils/FormatDate')

module.exports = {
    FormatString,
    FormatDate,
    RemoveCurseWords,
    ParseURL,
    ValidateCPF,
    ValidatePhoneNumber,
    ValidateEmail,
    ValidateCreditCard,
    ValidatePassword,
    ValidateCNPJ,
    ValidateCEP
}