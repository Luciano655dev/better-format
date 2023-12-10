const libphonenumber = require('google-libphonenumber')
const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance()

function ValidatePhoneNumber(num, countryCode) {
    try {
        let isValid
        const internationalNumber = num[0] == '+' ? phoneUtil.parseAndKeepRawInput(num, countryCode) : phoneUtil.parseAndKeepRawInput(`+${num}`, countryCode)

        if(countryCode)
            isValid = phoneUtil.isValidNumberForRegion(internationalNumber, countryCode)
        else
            isValid = phoneUtil.isValidNumber(internationalNumber)

        if (isValid) {
            return {
                valid: true,
                locality: phoneUtil.getRegionCodeForNumber(internationalNumber),
                nationlNumber: internationalNumber.getNationalNumber(),
                extension: internationalNumber.getExtension(),
                countrySourceCode: internationalNumber.getCountryCodeSource(),
                numberType: phoneUtil.getNumberType(internationalNumber)
            }
        } else {
            return {
                valid: false,
                locality: null,
                msg: phoneUtil.isValidNumber(internationalNumber) == false ? "O numero de telefone não é válido" : "O número de telefone não condiz com o país especificado"
            }
        }
    } catch (error) {
        return { valid: false, locality: null, msg: `${error}` }
    }
}


module.exports = ValidatePhoneNumber