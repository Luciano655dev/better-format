const libphonenumber = require('google-libphonenumber')
const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance()

function ValidatePhoneNumber(num, countryCode) {
    try {
        let isValid
        const internationalNumber = phoneUtil.parseAndKeepRawInput(num, countryCode)

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
            return { valid: false, locality: null }
        }
    } catch (error) {
        return { valid: false, locality: null, msg: `${error}` }
    }
}


module.exports = ValidatePhoneNumber