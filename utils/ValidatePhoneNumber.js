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
                isValid: true,
                locality: phoneUtil.getRegionCodeForNumber(internationalNumber),
                nationlNumber: internationalNumber.getNationalNumber(),
                extension: internationalNumber.getExtension(),
                countrySourceCode: internationalNumber.getCountryCodeSource(),
                numberType: phoneUtil.getNumberType(internationalNumber)
            }
        } else {
            return {
                isValid: false,
                locality: null,
                errMsg:
                    phoneUtil.isValidNumber(internationalNumber) == false ?
                    "The phone number is not valid" :
                    "The phone number does not match the specified country"
            }
        }
    } catch (error) {
        return new Error('Invalid phone number', { isValid: false, locality: null, errMsg: `${JSON.stringify(error)}` })
    }
}


module.exports = ValidatePhoneNumber