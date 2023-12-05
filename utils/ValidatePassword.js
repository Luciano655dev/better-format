function ValidatePassword(password, parameters = {}){
    const {
        minLength = 8,
        needNumbers = true,
        needUppercaseLetters = true,
        needSpecialChars = true,
        commonWords = ["123", "abc"],
    } = parameters;

    const results = {}
    results.verifications = {
        minLength: password.length >= minLength,
        needNumbers: needNumbers && /\d/.test(password),
        needUppercaseLetters: needUppercaseLetters && /[A-Z]/.test(password),
        needSpecialChars: needSpecialChars && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password),
        commonWords: commonWords && !commonWords.some(word => password.toLowerCase().includes(word)),
    };

    results.totalPoints = Object.values(results.verifications).filter(val => val).length * 2
    results.isValid = results.totalPoints > 0
    
    return results
}

module.exports = ValidatePassword